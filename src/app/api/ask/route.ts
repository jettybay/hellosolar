import { NextResponse } from 'next/server'
import { getContextForQuery, searchDocuments } from '@/lib/documents'

interface Document {
  id: string;
  title: string;
  category: string;
  content: string;
  filepath: string;
}

interface SearchResult {
  document: Document;
  score: number;
}

function formatDocumentContent(content: string): string {
  // Clean up markdown content and format it nicely
  // Remove the title line (starts with #)
  let formatted = content.replace(/^#\s+.+\n\n/, '');
  
  // Convert markdown headers to formatted text
  formatted = formatted.replace(/^###\s+(.+)$/gm, '\n💡 $1\n');
  formatted = formatted.replace(/^##\s+(.+)$/gm, '\n📋 $1\n');
  
  // Convert bold text
  formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '$1');
  
  // Convert lists
  formatted = formatted.replace(/^[-*]\s+/gm, '• ');
  
  // Clean up extra whitespace
  formatted = formatted.replace(/\n{3,}/g, '\n\n');
  
  return formatted.trim();
}

function extractAnswerFromContext(context: string, question: string): string {
  // Simple keyword-based answer extraction from context
  const questionLower = question.toLowerCase();
  const lines = context.split('\n');
  
  // Keywords that might indicate relevant content
  const keywords = questionLower.split(/\s+/).filter(k => k.length > 2);
  
  // Find lines containing question keywords
  const relevantLines: string[] = [];
  
  for (const line of lines) {
    const lineLower = line.toLowerCase();
    for (const keyword of keywords) {
      if (lineLower.includes(keyword) && line.length > 10) {
        relevantLines.push(line.trim());
        break;
      }
    }
  }
  
  // If we found relevant lines, return them as a formatted answer
  if (relevantLines.length > 0) {
    // Remove duplicates
    const uniqueLines = [...new Set(relevantLines)];
    return uniqueLines.slice(0, 5).join('\n\n');
  }
  
  return '';
}

export async function POST(req: Request) {
  try {
    const { question } = await req.json()

    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 })
    }

    // Get relevant context from solar documents
    const context = await getContextForQuery(question)
    
    // Also get search results for more detailed information
    const searchResults = await searchDocuments(question)

    let answer: string

    if (context && searchResults.length > 0) {
      // Build a comprehensive answer from the documents
      const topResults = searchResults.slice(0, 3)
      
      answer = `Based on our knowledge base, here's information about "${question}":\n\n`
      
      for (const result of topResults) {
        const doc = result.document
        answer += `━━━━━━━━━━━━━━━━━━━━\n`
        answer += `📄 ${doc.title}\n`
        answer += `📁 Category: ${doc.category.replace('/', ' > ')}\n`
        answer += `━━━━━━━━━━━━━━━━━━━━\n\n`
        
        const formattedContent = formatDocumentContent(doc.content)
        answer += `${formattedContent}\n\n`
      }
      
      // Try to extract a direct answer from the context
      const directAnswer = extractAnswerFromContext(context, question)
      if (directAnswer) {
        answer = `💬 **Quick Answer:**\n${directAnswer}\n\n---\n\n📚 **More Details:**\n\n${answer}`
      }
    } else if (context) {
      // Just use the context if no search results
      const formattedContext = formatDocumentContent(context)
      answer = `Here's what I found in our knowledge base:\n\n${formattedContext}`
    } else {
      // No documents found - provide a general helpful response
      answer = `I couldn't find specific information about "${question}" in our knowledge base. However, I can help you with general solar energy questions. Please try rephrasing your question or ask about:\n\n• Solar panels (types, installation, issues)\n• Inverters (basics, types, troubleshooting)\n• Batteries (types, maintenance, issues)\n• General solar energy questions\n• Installation and troubleshooting`
    }

    // Clean up the answer
    answer = answer.trim()
    
    // If answer is too long, truncate it nicely
    if (answer.length > 3000) {
      answer = answer.substring(0, 3000) + '\n\n... (answer truncated for length)'
    }

    return NextResponse.json({ answer })
  } catch (error) {
    console.error('Error in ask API:', error)
    return NextResponse.json({ error: 'Failed to process your request. Please try again.' }, { status: 500 })
  }
}

