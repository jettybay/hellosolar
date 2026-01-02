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
"[project]/openai.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "openai",
    ()=>openai
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/client.mjs [app-route] (ecmascript) <export OpenAI as default>");
;
const openai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__["default"]({
    apiKey: process.env.OPENAI_API_KEY
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openai.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$documents$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/documents.ts [app-route] (ecmascript)");
;
;
;
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
        // Build system message with context
        const systemMessage = context ? `You are a helpful solar energy assistant for Hello Solar. Use the following context from our knowledge base to answer the user's question. If the answer is not in the context, provide a general helpful response based on your knowledge about solar energy.

CONTEXT:
${context}

Please provide clear, accurate, and helpful answers about solar energy, including panels, inverters, batteries, installation, troubleshooting, and maintenance.` : `You are a helpful solar energy assistant for Hello Solar. Provide clear, accurate, and helpful answers about solar energy, including panels, inverters, batteries, installation, troubleshooting, and maintenance.`;
        const completion = await __TURBOPACK__imported__module__$5b$project$5d2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"].chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: systemMessage
                },
                {
                    role: 'user',
                    content: question
                }
            ],
            temperature: 0.7,
            max_tokens: 1000
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            answer: completion.choices[0].message.content || 'Sorry, I could not generate a response.'
        });
    } catch (error) {
        console.error('Error in ask API:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal Server Error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__024193ff._.js.map