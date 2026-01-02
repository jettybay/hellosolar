module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/chat/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const sendMessage = async ()=>{
    if (text.trim().length === 0) return;
    // Save the current message text in a variable BEFORE clearing the input
    const userMessageText = text.trim();
    const newMessage = {
        id: Date.now().toString(),
        text: userMessageText,
        isFromUser: true,
        timestamp: Date.now()
    };
    setMessages((prev)=>[
            ...prev,
            newMessage
        ]);
    setText(""); // ✅ Clear input
    setIsTyping(true);
    try {
        const res = await fetch('/api/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                question: userMessageText
            }) // Use saved variable
        });
        if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
        }
        const data = await res.json();
        const botMessage = {
            id: (Date.now() + 1).toString(),
            text: data.answer ?? "Sorry, I couldn't find an answer.",
            isFromUser: false,
            timestamp: Date.now()
        };
        setMessages((prev)=>[
                ...prev,
                botMessage
            ]);
    } catch (error) {
        console.error("Error sending message:", error);
        setMessages((prev)=>[
                ...prev,
                {
                    id: (Date.now() + 2).toString(),
                    text: "Something went wrong. Please try again.",
                    isFromUser: false,
                    timestamp: Date.now()
                }
            ]);
    } finally{
        setIsTyping(false);
    }
};
}),
"[project]/src/app/chat/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/chat/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__48b31210._.js.map