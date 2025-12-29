module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/lib/colors.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COLORS",
    ()=>COLORS
]);
const COLORS = {
    // Primary colors
    primary: '#22c55e',
    primaryDark: '#15803d',
    // Solar theme colors
    solarGreen: '#22c55e',
    solarGreenDark: '#15803d',
    solarYellow: '#facc15',
    solarYellowDark: '#eab308',
    solarRed: '#ef4444',
    solarRedDark: '#dc2626',
    solarBlack: '#0f172a',
    solarGray: '#64748b',
    // UI colors
    background: '#f8fafc',
    surface: '#ffffff',
    surfaceVariant: '#f1f5f9',
    // Text colors
    textPrimary: '#020617',
    textSecondary: '#64748b',
    textOnPrimary: '#ffffff',
    gray: '#6b7280',
    grayMedium: '#d1d5db',
    success: '#10b981',
    // Border colors
    border: '#e2e8f0'
};
}),
"[project]/src/app/chat/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessagesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/colors.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function MessagesPage() {
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Initial bot greeting messages
        const initialMessages = [
            {
                id: "1",
                text: "Hello! Welcome to our Hello Solar! I'm here to assist you with your solar energy needs. What would you like to know?",
                isFromUser: false,
                timestamp: Date.now() - 300000
            }
        ];
        setMessages(initialMessages);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        scrollToBottom();
    }, [
        messages
    ]);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    const sendMessage = ()=>{
        if (text.trim().length === 0) return;
        const newMessage = {
            id: Date.now().toString(),
            text: text.trim(),
            isFromUser: true,
            timestamp: Date.now()
        };
        setMessages((prev)=>[
                ...prev,
                newMessage
            ]);
        setText("");
        // Simulate bot typing
        setIsTyping(true);
        // Simulate bot response after 1-3 seconds
        setTimeout(()=>{
            setIsTyping(false);
            const responses = [
                "I'd be happy to help you with that! Let me check our available solar solutions and services.",
                "I can help you get started on going solar. What type of property are you looking to install solar on?",
                "That's great!",
                "Let me find that information for you.",
                "Sure! Here are some tips and benefits of switching to solar energy.",
                "I can assist you with solar installation. What specific questions do you have?",
                "Our platform offers various solar resources. Would you like me to guide you through them?",
                "Absolutely! I can help you analyze potential solar savings. What are your current energy costs?",
                "Let me connect you with one of our solar experts for personalized advice.",
                "I can provide you with solar information for your area. Which location are you interested in?",
                "That's interesting! Can you tell me more about your energy needs?",
                "I can help you with solar financing. What's your budget range for going solar?",
                "Let me check the latest solar incentives available in your area.",
                "I can assist you in creating a solar plan. What are your main goals for switching to solar?"
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            const botMessage = {
                id: (Date.now() + 1).toString(),
                text: randomResponse,
                isFromUser: false,
                timestamp: Date.now()
            };
            setMessages((prev)=>[
                    ...prev,
                    botMessage
                ]);
        }, Math.random() * 2000 + 1000); // Random delay between 1-3 seconds
    };
    const formatTime = (timestamp)=>{
        const date = new Date(timestamp);
        return date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    const renderMessage = (message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex mb-4 ${message.isFromUser ? 'justify-end' : 'justify-start'}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex max-w-xs lg:max-w-md ${message.isFromUser ? 'flex-row-reverse' : 'flex-row'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 mx-2",
                        children: message.isFromUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold",
                            style: {
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].primary,
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textOnPrimary
                            },
                            children: "U"
                        }, void 0, false, {
                            fileName: "[project]/src/app/chat/page.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 rounded-full flex items-center justify-center overflow-hidden",
                            style: {
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].surfaceVariant
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm",
                                children: "☀️"
                            }, void 0, false, {
                                fileName: "[project]/src/app/chat/page.tsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/chat/page.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/chat/page.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `px-4 py-2 rounded-2xl ${message.isFromUser ? 'rounded-br-sm' : 'rounded-bl-sm'}`,
                        style: {
                            backgroundColor: message.isFromUser ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].primary : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].surface,
                            color: message.isFromUser ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textOnPrimary : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textPrimary
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: message.text
                            }, void 0, false, {
                                fileName: "[project]/src/app/chat/page.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs mt-1 opacity-70",
                                style: {
                                    color: message.isFromUser ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textOnPrimary : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].gray
                                },
                                children: formatTime(message.timestamp)
                            }, void 0, false, {
                                fileName: "[project]/src/app/chat/page.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/chat/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/chat/page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        }, message.id, false, {
            fileName: "[project]/src/app/chat/page.tsx",
            lineNumber: 103,
            columnNumber: 5
        }, this);
    const renderTypingIndicator = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-start mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex max-w-xs lg:max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 mx-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 rounded-full flex items-center justify-center overflow-hidden",
                            style: {
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].surfaceVariant
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm",
                                children: "☀️"
                            }, void 0, false, {
                                fileName: "[project]/src/app/chat/page.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/chat/page.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/chat/page.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-2 rounded-2xl rounded-bl-sm",
                        style: {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].surface
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2 h-2 rounded-full animate-bounce",
                                    style: {
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].gray
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chat/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2 h-2 rounded-full animate-bounce",
                                    style: {
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].gray,
                                        animationDelay: "0.1s"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chat/page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2 h-2 rounded-full animate-bounce",
                                    style: {
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].gray,
                                        animationDelay: "0.2s"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chat/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/chat/page.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/chat/page.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/chat/page.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/chat/page.tsx",
            lineNumber: 153,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col",
        style: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].background
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "shadow-sm p-4",
                style: {
                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].surface
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "mr-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-6 h-6",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textPrimary
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chat/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/chat/page.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-lg font-bold",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textPrimary
                                        },
                                        children: "Hello Solar Assistant"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/chat/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].success
                                        },
                                        children: "Online"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/chat/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/chat/page.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/chat/page.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/chat/page.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/chat/page.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-4",
                children: [
                    messages.map(renderMessage),
                    isTyping && renderTypingIndicator(),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: messagesEndRef
                    }, void 0, false, {
                        fileName: "[project]/src/app/chat/page.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/chat/page.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t",
                style: {
                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].surface,
                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].grayMedium
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-end space-x-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: text,
                                onChange: (e)=>setText(e.target.value),
                                placeholder: "Type a message...",
                                className: "w-full px-4 py-2 rounded-full resize-none focus:outline-none",
                                style: {
                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].surfaceVariant,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textPrimary,
                                    border: "none",
                                    minHeight: "40px",
                                    maxHeight: "120px"
                                },
                                rows: 1,
                                onKeyPress: (e)=>{
                                    if (e.key === "Enter" && !e.shiftKey) {
                                        e.preventDefault();
                                        sendMessage();
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/chat/page.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/chat/page.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: sendMessage,
                            disabled: text.trim().length === 0,
                            className: "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                            style: {
                                backgroundColor: text.trim().length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].primary : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].grayMedium,
                                color: text.trim().length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].textOnPrimary : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].gray
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg",
                                children: "➤"
                            }, void 0, false, {
                                fileName: "[project]/src/app/chat/page.tsx",
                                lineNumber: 252,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/chat/page.tsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/chat/page.tsx",
                    lineNumber: 220,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/chat/page.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/chat/page.tsx",
        lineNumber: 188,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7e925a9b._.js.map