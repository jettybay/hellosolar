module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/src/lib/documents.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllCategories",
    ()=>getAllCategories,
    "getAllDocuments",
    ()=>getAllDocuments,
    "getContextForQuery",
    ()=>getContextForQuery,
    "getDocumentById",
    ()=>getDocumentById,
    "searchDocuments",
    ()=>searchDocuments
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
// Get the project root directory
const getProjectRoot = ()=>{
    return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd());
};
async function getAllDocuments() {
    const documents = [];
    const solarDocsPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(getProjectRoot(), 'src/solar_docs');
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(solarDocsPath)) {
        console.warn('solar_docs directory not found');
        return documents;
    }
    function scanDirectory(dir, category = '') {
        const files = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(dir);
        for (const file of files){
            const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dir, file);
            const stat = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].statSync(fullPath);
            if (stat.isDirectory()) {
                // Recurse into subdirectory with updated category
                const newCategory = category ? `${category}/${file}` : file;
                scanDirectory(fullPath, newCategory);
            } else if (file.endsWith('.md')) {
                // Read markdown file
                const content = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(fullPath, 'utf-8');
                // Extract title from first line (remove # prefix)
                const titleMatch = content.match(/^#\s+(.+)$/m);
                const title = titleMatch ? titleMatch[1] : file.replace('.md', '');
                const doc = {
                    id: `${category}/${file}`.replace('.md', ''),
                    title,
                    category,
                    content,
                    filepath: fullPath
                };
                documents.push(doc);
            }
        }
    }
    scanDirectory(solarDocsPath);
    return documents;
}
async function searchDocuments(query, documents) {
    const docs = documents || await getAllDocuments();
    const queryLower = query.toLowerCase();
    // Split query into keywords
    const keywords = queryLower.split(/\s+/).filter((k)=>k.length > 2);
    const results = docs.map((doc)=>{
        const contentLower = doc.content.toLowerCase();
        const titleLower = doc.title.toLowerCase();
        const categoryLower = doc.category.toLowerCase();
        let score = 0;
        // Title matches are worth more
        for (const keyword of keywords){
            if (titleLower.includes(keyword)) score += 10;
            if (categoryLower.includes(keyword)) score += 5;
            // Count occurrences in content
            const matches = (contentLower.match(new RegExp(keyword, 'g')) || []).length;
            score += Math.min(matches, 10); // Cap at 10 occurrences per keyword
        }
        return {
            document: doc,
            score
        };
    });
    // Filter out zero scores and sort by relevance
    return results.filter((r)=>r.score > 0).sort((a, b)=>b.score - a.score).slice(0, 5); // Return top 5 results
}
async function getContextForQuery(query, maxLength = 8000) {
    const results = await searchDocuments(query);
    if (results.length === 0) {
        return '';
    }
    // Combine content from top documents
    let context = '';
    for (const result of results){
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
async function getDocumentById(id) {
    const documents = await getAllDocuments();
    return documents.find((doc)=>doc.id === id) || null;
}
async function getAllCategories() {
    const documents = await getAllDocuments();
    const categories = new Set(documents.map((doc)=>doc.category));
    return Array.from(categories).sort();
}
}),
"[project]/src/app/api/ask/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$documents$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/documents.ts [app-route] (ecmascript)");
;
;
function formatDocumentContent(content) {
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
function extractAnswerFromContext(context, question) {
    // Simple keyword-based answer extraction from context
    const questionLower = question.toLowerCase();
    const lines = context.split('\n');
    // Keywords that might indicate relevant content
    const keywords = questionLower.split(/\s+/).filter((k)=>k.length > 2);
    // Find lines containing question keywords
    const relevantLines = [];
    for (const line of lines){
        const lineLower = line.toLowerCase();
        for (const keyword of keywords){
            if (lineLower.includes(keyword) && line.length > 10) {
                relevantLines.push(line.trim());
                break;
            }
        }
    }
    // If we found relevant lines, return them as a formatted answer
    if (relevantLines.length > 0) {
        // Remove duplicates
        const uniqueLines = [
            ...new Set(relevantLines)
        ];
        return uniqueLines.slice(0, 5).join('\n\n');
    }
    return '';
}
async function POST(req) {
    try {
        const { question } = await req.json();
        if (!question) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Question is required'
            }, {
                status: 400
            });
        }
        // Get relevant context from solar documents
        const context = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$documents$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getContextForQuery"])(question);
        // Also get search results for more detailed information
        const searchResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$documents$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["searchDocuments"])(question);
        let answer;
        if (context && searchResults.length > 0) {
            // Build a comprehensive answer from the documents
            const topResults = searchResults.slice(0, 3);
            answer = `Based on our knowledge base, here's information about "${question}":\n\n`;
            for (const result of topResults){
                const doc = result.document;
                answer += `━━━━━━━━━━━━━━━━━━━━\n`;
                answer += `📄 ${doc.title}\n`;
                answer += `📁 Category: ${doc.category.replace('/', ' > ')}\n`;
                answer += `━━━━━━━━━━━━━━━━━━━━\n\n`;
                const formattedContent = formatDocumentContent(doc.content);
                answer += `${formattedContent}\n\n`;
            }
            // Try to extract a direct answer from the context
            const directAnswer = extractAnswerFromContext(context, question);
            if (directAnswer) {
                answer = `💬 **Quick Answer:**\n${directAnswer}\n\n---\n\n📚 **More Details:**\n\n${answer}`;
            }
        } else if (context) {
            // Just use the context if no search results
            const formattedContext = formatDocumentContent(context);
            answer = `Here's what I found in our knowledge base:\n\n${formattedContext}`;
        } else {
            // No documents found - provide a general helpful response
            answer = `I couldn't find specific information about "${question}" in our knowledge base. However, I can help you with general solar energy questions. Please try rephrasing your question or ask about:\n\n• Solar panels (types, installation, issues)\n• Inverters (basics, types, troubleshooting)\n• Batteries (types, maintenance, issues)\n• General solar energy questions\n• Installation and troubleshooting`;
        }
        // Clean up the answer
        answer = answer.trim();
        // If answer is too long, truncate it nicely
        if (answer.length > 3000) {
            answer = answer.substring(0, 3000) + '\n\n... (answer truncated for length)';
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            answer
        });
    } catch (error) {
        console.error('Error in ask API:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to process your request. Please try again.'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7438801a._.js.map