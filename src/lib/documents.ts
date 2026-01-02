import fs from 'fs';
import path from 'path';

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

// Get the project root directory
const getProjectRoot = () => {
  return path.join(process.cwd());
};

// Read all markdown files from solar_docs recursively
export async function getAllDocuments(): Promise<Document[]> {
  const documents: Document[] = [];
  const solarDocsPath = path.join(getProjectRoot(), 'src/solar_docs');

  if (!fs.existsSync(solarDocsPath)) {
    console.warn('solar_docs directory not found');
    return documents;
  }

  function scanDirectory(dir: string, category: string = '') {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Recurse into subdirectory with updated category
        const newCategory = category ? `${category}/${file}` : file;
        scanDirectory(fullPath, newCategory);
      } else if (file.endsWith('.md')) {
        // Read markdown file
        const content = fs.readFileSync(fullPath, 'utf-8');
        
        // Extract title from first line (remove # prefix)
        const titleMatch = content.match(/^#\s+(.+)$/m);
        const title = titleMatch ? titleMatch[1] : file.replace('.md', '');

        const doc: Document = {
          id: `${category}/${file}`.replace('.md', ''),
          title,
          category,
          content,
          filepath: fullPath,
        };

        documents.push(doc);
      }
    }
  }

  scanDirectory(solarDocsPath);
  return documents;
}

// Simple keyword-based search for relevant documents
export async function searchDocuments(query: string, documents?: Document[]): Promise<SearchResult[]> {
  const docs = documents || await getAllDocuments();
  const queryLower = query.toLowerCase();
  
  // Split query into keywords
  const keywords = queryLower.split(/\s+/).filter(k => k.length > 2);

  const results: SearchResult[] = docs.map(doc => {
    const contentLower = doc.content.toLowerCase();
    const titleLower = doc.title.toLowerCase();
    const categoryLower = doc.category.toLowerCase();

    let score = 0;

    // Title matches are worth more
    for (const keyword of keywords) {
      if (titleLower.includes(keyword)) score += 10;
      if (categoryLower.includes(keyword)) score += 5;
      
      // Count occurrences in content
      const matches = (contentLower.match(new RegExp(keyword, 'g')) || []).length;
      score += Math.min(matches, 10); // Cap at 10 occurrences per keyword
    }

    return {
      document: doc,
      score,
    };
  });

  // Filter out zero scores and sort by relevance
  return results
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5); // Return top 5 results
}

// Get context from top relevant documents
export async function getContextForQuery(query: string, maxLength: number = 8000): Promise<string> {
  const results = await searchDocuments(query);
  
  if (results.length === 0) {
    return '';
  }

  // Combine content from top documents
  let context = '';
  
  for (const result of results) {
    const doc = result.document;
    // Remove the title line from content for context
    const cleanContent = doc.content.replace(/^#\s+.+\n\n/, '');
    
    context += `=== ${doc.title} (${doc.category}) ===\n`;
    context += cleanContent + '\n\n';
    
    if (context.length > maxLength) {
      break;
    }
  }

  return context;
}

// Get document by ID
export async function getDocumentById(id: string): Promise<Document | null> {
  const documents = await getAllDocuments();
  return documents.find(doc => doc.id === id) || null;
}

// Get all categories
export async function getAllCategories(): Promise<string[]> {
  const documents = await getAllDocuments();
  const categories = new Set(documents.map(doc => doc.category));
  return Array.from(categories).sort();
}

