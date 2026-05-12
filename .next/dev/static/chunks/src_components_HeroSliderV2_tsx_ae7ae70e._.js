(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/HeroSliderV2.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSliderV2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const basePath = '';
const slides = [
    `${basePath}/images/hero-1.jpg`,
    `${basePath}/images/hero-2.jpg`,
    `${basePath}/images/hero-3.jpg`,
    `${basePath}/images/hero-4.jpg`,
    `${basePath}/images/hero-5.jpg`,
    `${basePath}/images/hero-6.jpg`,
    `${basePath}/images/hero-7.jpg`,
    `${basePath}/images/hero-8.jpg`
];
function HeroSliderV2() {
    _s();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [offsetX, setOffsetX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSliderV2.useEffect": ()=>{
            const panInterval = setInterval({
                "HeroSliderV2.useEffect.panInterval": ()=>{
                    setOffsetX({
                        "HeroSliderV2.useEffect.panInterval": (prev)=>prev - 0.3
                    }["HeroSliderV2.useEffect.panInterval"]);
                }
            }["HeroSliderV2.useEffect.panInterval"], 50);
            const slideInterval = setInterval({
                "HeroSliderV2.useEffect.slideInterval": ()=>{
                    setCurrent({
                        "HeroSliderV2.useEffect.slideInterval": (prev)=>(prev + 1) % slides.length
                    }["HeroSliderV2.useEffect.slideInterval"]);
                    setOffsetX(0);
                }
            }["HeroSliderV2.useEffect.slideInterval"], 6000);
            return ({
                "HeroSliderV2.useEffect": ()=>{
                    clearInterval(panInterval);
                    clearInterval(slideInterval);
                }
            })["HeroSliderV2.useEffect"];
        }
    }["HeroSliderV2.useEffect"], []);
    const scrollToCountries = ()=>{
        const el = document.getElementById('apply-countries');
        if (el) el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-[480px] md:min-h-[560px] flex items-center justify-center overflow-hidden",
        children: [
            slides.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 transition-opacity duration-1000",
                    style: {
                        opacity: i === current ? 1 : 0
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: src,
                        alt: "",
                        className: "w-full h-full object-cover",
                        style: {
                            transform: i === current ? `translateX(${offsetX}px) scale(1.1)` : 'scale(1.1)',
                            transition: 'transform 0.05s linear'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSliderV2.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this)
                }, i, false, {
                    fileName: "[project]/src/components/HeroSliderV2.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/55"
            }, void 0, false, {
                fileName: "[project]/src/components/HeroSliderV2.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-4xl mx-auto px-4 text-center text-white py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs md:text-sm text-gray-200 mb-3 tracking-wider uppercase",
                        children: "Online Visa & eTA Application Service"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSliderV2.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl md:text-5xl font-bold mb-5 leading-tight",
                        children: [
                            "世界の電子渡航認証を、",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                className: "hidden md:block"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSliderV2.tsx",
                                lineNumber: 63,
                                columnNumber: 22
                            }, this),
                            "オンラインで申請。"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeroSliderV2.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-100 text-base md:text-lg mt-2 mb-8 max-w-2xl mx-auto",
                        children: "ESTA・K-ETA・UK ETA・ETAS。各国の電子渡航認証および短期滞在ビザの申請を、フォーム入力から決済までオンラインで完結。"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSliderV2.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: scrollToCountries,
                        className: "inline-block bg-blue-700 hover:bg-blue-600 transition text-white font-semibold px-8 py-3 rounded-md text-base md:text-lg shadow-lg",
                        children: "申請する国を選択 →"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSliderV2.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-300 mt-6",
                        children: "政府手数料＋当社サービス料金は申請プロセス内で明示されます"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSliderV2.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroSliderV2.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeroSliderV2.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(HeroSliderV2, "5lJE5bZ4HojESWPB7bLAwuXQuk0=");
_c = HeroSliderV2;
var _c;
__turbopack_context__.k.register(_c, "HeroSliderV2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_HeroSliderV2_tsx_ae7ae70e._.js.map