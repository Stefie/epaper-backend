module.exports = [
"[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/providers/RouteTransition/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RouteTransitionProvider",
    ()=>RouteTransitionProvider,
    "useRouteTransition",
    ()=>useRouteTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const RouteTransitionProvider = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(11);
    const { children } = t0;
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOptimistic"])(false);
    const [transitionProgress, setTransitionProgress] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(0);
    const transitionProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(transitionProgress);
    const timerID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            timerID.current = setInterval(()=>{
                const newProgress = transitionProgressRef.current + (0.93 - transitionProgressRef.current) * Math.random() * 0.2 * Math.pow(Math.log(1 + (1 - transitionProgressRef.current) * 0.75), 0.75);
                setTransitionProgress(newProgress);
                transitionProgressRef.current = newProgress;
            }, 250);
        };
        $[0] = t1;
    } else {
        t1 = $[0];
    }
    const initiateProgress = t1;
    let t2;
    let t3;
    if ($[1] !== isTransitioning) {
        t2 = ()=>{
            setTransitionProgress(0);
            transitionProgressRef.current = 0;
            if (isTransitioning) {
                initiateProgress();
            } else {
                if (timerID.current) {
                    clearInterval(timerID.current);
                }
            }
        };
        t3 = [
            isTransitioning,
            initiateProgress
        ];
        $[1] = isTransitioning;
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[4] !== setIsTransitioning) {
        t4 = (callback)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
                setIsTransitioning(true);
                if (typeof callback === "function") {
                    callback();
                }
            });
        };
        $[4] = setIsTransitioning;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const startRouteTransition = t4;
    let t5;
    if ($[6] !== children || $[7] !== isTransitioning || $[8] !== startRouteTransition || $[9] !== transitionProgress) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(RouteTransitionContext, {
            value: {
                isTransitioning,
                startRouteTransition,
                transitionProgress
            },
            children
        });
        $[6] = children;
        $[7] = isTransitioning;
        $[8] = startRouteTransition;
        $[9] = transitionProgress;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    return t5;
};
const RouteTransitionContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext({
    isTransitioning: false,
    startRouteTransition: ()=>undefined,
    transitionProgress: 0
});
const useRouteTransition = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].use(RouteTransitionContext); //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/providers/Translation/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TranslationProvider",
    ()=>TranslationProvider,
    "useTranslation",
    ()=>useTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$64$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$importDateFNSLocale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+translations@3.64.0/node_modules/@payloadcms/translations/dist/importDateFNSLocale.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$64$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$init$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+translations@3.64.0/node_modules/@payloadcms/translations/dist/utilities/init.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const Context = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    // Use `any` here to be replaced later with a more specific type when used
    i18n: {
        dateFNS: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enUS"],
        dateFNSKey: 'en-US',
        fallbackLanguage: 'en',
        language: 'en',
        t: (key)=>key,
        translations: {}
    },
    languageOptions: undefined,
    switchLanguage: undefined,
    t: (key)=>undefined
});
const TranslationProvider = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(18);
    const { children, dateFNSKey, fallbackLang, language, languageOptions, switchLanguageServerAction, translations } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [dateFNS, setDateFNS] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    let t1;
    if ($[0] !== translations) {
        t1 = (key, vars)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$64$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$init$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])({
                key,
                translations,
                vars
            });
        $[0] = translations;
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const nextT = t1;
    let t2;
    if ($[2] !== router || $[3] !== switchLanguageServerAction) {
        t2 = async (lang)=>{
            ;
            try {
                await switchLanguageServerAction(lang);
                router.refresh();
            } catch (t3) {
                const error = t3;
                console.error(`Error loading language: "${lang}"`, error);
            }
        };
        $[2] = router;
        $[3] = switchLanguageServerAction;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const switchLanguage = t2;
    let t3;
    let t4;
    if ($[5] !== dateFNSKey) {
        t3 = ()=>{
            const loadDateFNS = async ()=>{
                const imported = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$64$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$importDateFNSLocale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["importDateFNSLocale"])(dateFNSKey);
                setDateFNS(imported);
            };
            loadDateFNS();
        };
        t4 = [
            dateFNSKey
        ];
        $[5] = dateFNSKey;
        $[6] = t3;
        $[7] = t4;
    } else {
        t3 = $[6];
        t4 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[8] !== children || $[9] !== dateFNS || $[10] !== dateFNSKey || $[11] !== fallbackLang || $[12] !== language || $[13] !== languageOptions || $[14] !== nextT || $[15] !== switchLanguage || $[16] !== translations) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Context, {
            value: {
                i18n: {
                    dateFNS,
                    dateFNSKey,
                    fallbackLanguage: fallbackLang,
                    language,
                    t: nextT,
                    translations
                },
                languageOptions,
                switchLanguage,
                t: nextT
            },
            children
        });
        $[8] = children;
        $[9] = dateFNS;
        $[10] = dateFNSKey;
        $[11] = fallbackLang;
        $[12] = language;
        $[13] = languageOptions;
        $[14] = nextT;
        $[15] = switchLanguage;
        $[16] = translations;
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    return t5;
};
const useTranslation = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(Context); //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/elements/Link/formatUrl.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatUrl",
    ()=>formatUrl,
    "urlQueryToSearchParams",
    ()=>urlQueryToSearchParams
]);
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
const slashedProtocols = /https?|ftp|gopher|file/;
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(urlQuery) {
    const result = new URLSearchParams();
    Object.entries(urlQuery).forEach(([key, value])=>{
        if (Array.isArray(value)) {
            value.forEach((item)=>result.append(key, stringifyUrlQueryParam(item)));
        } else {
            result.set(key, stringifyUrlQueryParam(value));
        }
    });
    return result;
}
function formatUrl(urlObj) {
    let { auth } = urlObj;
    const { hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) {
        protocol += ':';
    }
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') {
            pathname = '/' + pathname;
        }
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') {
        hash = '#' + hash;
    }
    if (search && search[0] !== '?') {
        search = '?' + search;
    }
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
} //# sourceMappingURL=formatUrl.js.map
}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/elements/Link/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Link",
    ()=>Link
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$RouteTransition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/providers/RouteTransition/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$Link$2f$formatUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/elements/Link/formatUrl.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const NextLink = 'default' in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].default : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
// Copied from  https://github.com/vercel/next.js/blob/canary/packages/next/src/client/link.tsx#L180-L191
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
const Link = ({ children, href, onClick, preventDefault = true, ref, replace, scroll, ...rest })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { startRouteTransition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$RouteTransition$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouteTransition"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(NextLink, {
        href: href,
        onClick: (e)=>{
            if (isModifiedEvent(e)) {
                return;
            }
            if (onClick) {
                onClick(e);
            }
            // We need a preventDefault here so that a clicked link doesn't trigger twice,
            // once for default browser navigation and once for startRouteTransition
            if (preventDefault) {
                e.preventDefault();
            }
            startRouteTransition(()=>{
                const url = typeof href === 'string' ? href : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$Link$2f$formatUrl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUrl"])(href);
                if (replace) {
                    void router.replace(url, {
                        scroll
                    });
                } else {
                    void router.push(url, {
                        scroll
                    });
                }
            });
        },
        ref: ref,
        ...rest,
        children: children
    });
}; //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/elements/Banner/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Banner",
    ()=>Banner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$Link$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/elements/Link/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const baseClass = 'banner';
const Banner = ({ type = 'default', alignIcon = 'right', children, className, icon, onClick, to })=>{
    const classes = [
        baseClass,
        `${baseClass}--type-${type}`,
        className && className,
        to && `${baseClass}--has-link`,
        (to || onClick) && `${baseClass}--has-action`,
        icon && `${baseClass}--has-icon`,
        icon && `${baseClass}--align-icon-${alignIcon}`
    ].filter(Boolean).join(' ');
    let RenderedType = 'div';
    if (onClick && !to) {
        RenderedType = 'button';
    }
    if (to) {
        RenderedType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$Link$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"];
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(RenderedType, {
        className: classes,
        href: to || null,
        onClick: onClick,
        children: [
            icon && alignIcon === 'left' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                children: icon
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: `${baseClass}__content`,
                children: children
            }),
            icon && alignIcon === 'right' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                children: icon
            })
        ]
    });
}; //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/elements/Gutter/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Gutter",
    ()=>Gutter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const baseClass = 'gutter';
const Gutter = (props)=>{
    const { children, className, left = true, negativeLeft = false, negativeRight = false, ref, right = true } = props;
    const shouldPadLeft = left && !negativeLeft;
    const shouldPadRight = right && !negativeRight;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: [
            baseClass,
            shouldPadLeft && `${baseClass}--left`,
            shouldPadRight && `${baseClass}--right`,
            negativeLeft && `${baseClass}--negative-left`,
            negativeRight && `${baseClass}--negative-right`,
            className
        ].filter(Boolean).join(' '),
        ref: ref,
        children: children
    });
}; //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/elements/Drawer/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Drawer",
    ()=>Drawer,
    "DrawerDepthContext",
    ()=>DrawerDepthContext,
    "DrawerDepthProvider",
    ()=>DrawerDepthProvider,
    "DrawerToggler",
    ()=>DrawerToggler,
    "drawerZBase",
    ()=>drawerZBase,
    "formatDrawerSlug",
    ()=>formatDrawerSlug,
    "useDrawerDepth",
    ()=>useDrawerDepth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-compiler-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$faceless$2d$ui$2b$modal$40$3$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$faceless$2d$ui$2f$modal$2f$dist$2f$Modal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@faceless-ui+modal@3.0.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@faceless-ui/modal/dist/Modal/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$faceless$2d$ui$2b$modal$40$3$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$faceless$2d$ui$2f$modal$2f$dist$2f$useModal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@faceless-ui+modal@3.0.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@faceless-ui/modal/dist/useModal/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$icons$2f$X$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/icons/X/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$Translation$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/providers/Translation/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$Gutter$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/elements/Gutter/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const baseClass = 'drawer';
const drawerZBase = 100;
const formatDrawerSlug = ({ slug, depth })=>`drawer_${depth}_${slug}`;
;
const DrawerToggler = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(4);
    const { slug, children, className, disabled, onClick, ...rest } = t0;
    const { openModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$faceless$2d$ui$2b$modal$40$3$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$faceless$2d$ui$2f$modal$2f$dist$2f$useModal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useModal"])();
    let t1;
    if ($[0] !== onClick || $[1] !== openModal || $[2] !== slug) {
        t1 = (e)=>{
            openModal(slug);
            if (typeof onClick === "function") {
                onClick(e);
            }
        };
        $[0] = onClick;
        $[1] = openModal;
        $[2] = slug;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleClick = t1;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
        className,
        disabled,
        onClick: handleClick,
        type: "button",
        ...rest,
        children
    });
};
const Drawer = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(22);
    const { slug, children, className, gutter: t1, Header, hoverTitle, title } = t0;
    const gutter = t1 === undefined ? true : t1;
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$providers$2f$Translation$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { closeModal, modalState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$faceless$2d$ui$2b$modal$40$3$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$faceless$2d$ui$2f$modal$2f$dist$2f$useModal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useModal"])();
    const drawerDepth = useDrawerDepth();
    const isOpen = !!modalState[slug]?.isOpen;
    const [animateIn, setAnimateIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isOpen);
    let t2;
    let t3;
    if ($[0] !== isOpen) {
        t2 = ()=>{
            setAnimateIn(isOpen);
        };
        t3 = [
            isOpen
        ];
        $[0] = isOpen;
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(t2, t3);
    if (isOpen) {
        const t4 = animateIn && `${baseClass}--is-open`;
        const t5 = drawerDepth > 1 && `${baseClass}--nested`;
        let t6;
        if ($[3] !== className || $[4] !== t4 || $[5] !== t5) {
            t6 = [
                className,
                baseClass,
                t4,
                t5
            ].filter(Boolean);
            $[3] = className;
            $[4] = t4;
            $[5] = t5;
            $[6] = t6;
        } else {
            t6 = $[6];
        }
        const t7 = t6.join(" ");
        const t8 = drawerZBase + drawerDepth;
        let t9;
        if ($[7] !== Header || $[8] !== children || $[9] !== closeModal || $[10] !== drawerDepth || $[11] !== gutter || $[12] !== hoverTitle || $[13] !== slug || $[14] !== t || $[15] !== t7 || $[16] !== t8 || $[17] !== title) {
            let t10;
            if ($[19] !== closeModal || $[20] !== slug) {
                t10 = ()=>closeModal(slug);
                $[19] = closeModal;
                $[20] = slug;
                $[21] = t10;
            } else {
                t10 = $[21];
            }
            t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DrawerDepthProvider, {
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$faceless$2d$ui$2b$modal$40$3$2e$0$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$faceless$2d$ui$2f$modal$2f$dist$2f$Modal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Modal"], {
                    className: t7,
                    closeOnBlur: false,
                    slug,
                    style: {
                        zIndex: t8
                    },
                    children: [
                        (!drawerDepth || drawerDepth === 1) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                            className: `${baseClass}__blur-bg`
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                            "aria-label": t("general:close"),
                            className: `${baseClass}__close`,
                            id: `close-drawer__${slug}`,
                            onClick: t10,
                            type: "button"
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                            className: `${baseClass}__content`,
                            style: {
                                width: `calc(100% - (${drawerDepth} * var(--gutter-h)))`
                            },
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                    className: `${baseClass}__blur-bg-content`
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$Gutter$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Gutter"], {
                                    className: `${baseClass}__content-children`,
                                    left: gutter,
                                    right: gutter,
                                    children: [
                                        Header,
                                        Header === undefined && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: `${baseClass}__header`,
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("h2", {
                                                    className: `${baseClass}__header__title`,
                                                    title: hoverTitle ? title : null,
                                                    children: title
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                                                    "aria-label": t("general:close"),
                                                    className: `${baseClass}__header__close`,
                                                    id: `close-drawer__${slug}`,
                                                    onClick: ()=>closeModal(slug),
                                                    type: "button",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$icons$2f$X$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XIcon"], {})
                                                })
                                            ]
                                        }),
                                        children
                                    ]
                                })
                            ]
                        })
                    ]
                })
            });
            $[7] = Header;
            $[8] = children;
            $[9] = closeModal;
            $[10] = drawerDepth;
            $[11] = gutter;
            $[12] = hoverTitle;
            $[13] = slug;
            $[14] = t;
            $[15] = t7;
            $[16] = t8;
            $[17] = title;
            $[18] = t9;
        } else {
            t9 = $[18];
        }
        return t9;
    }
    return null;
};
const DrawerDepthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(1);
const DrawerDepthProvider = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$compiler$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(3);
    const { children } = t0;
    const parentDepth = useDrawerDepth();
    const depth = parentDepth + 1;
    let t1;
    if ($[0] !== children || $[1] !== depth) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DrawerDepthContext, {
            value: depth,
            children
        });
        $[0] = children;
        $[1] = depth;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
};
const useDrawerDepth = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(DrawerDepthContext); //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/elements/FolderView/Cell/index.client.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FolderTableCellClient",
    ()=>FolderTableCellClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// eslint-disable-next-line payload/no-imports-from-exports-dir
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$XUCNM5EK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/exports/client/chunk-XUCNM5EK.js [app-ssr] (ecmascript) <export c as useConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$AZDI6MW4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/exports/client/chunk-AZDI6MW4.js [app-ssr] (ecmascript) <export d as useTranslation>");
'use client';
;
;
;
const FolderTableCellClient = ({ collectionSlug, data, docTitle, folderCollectionSlug, folderFieldName, viewType })=>{
    const docID = data.id;
    const intialFolderID = data?.[folderFieldName];
    const { config } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$XUCNM5EK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__c__as__useConfig$3e$__["useConfig"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$AZDI6MW4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__useTranslation$3e$__["useTranslation"])();
    const [fromFolderName, setFromFolderName] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(()=>intialFolderID ? `${t('general:loading')}...` : t('folder:noFolder'));
    const [fromFolderID, setFromFolderID] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(intialFolderID);
    const hasLoadedFolderName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(false);
    const onConfirm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(async ({ id, name })=>{
        try {
            await fetch(`${config.routes.api}/${collectionSlug}/${docID}`, {
                body: JSON.stringify({
                    [folderFieldName]: id
                }),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'PATCH'
            });
            setFromFolderID(id);
            setFromFolderName(name || t('folder:noFolder'));
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Error moving document to folder', error);
        }
    }, [
        config.routes.api,
        collectionSlug,
        docID,
        folderFieldName,
        t
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadFolderName = async ()=>{
            try {
                const req = await fetch(`${config.routes.api}/${folderCollectionSlug}${intialFolderID ? `/${intialFolderID}` : ''}`, {
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'GET'
                });
                const res = await req.json();
                setFromFolderName(res?.name || t('folder:noFolder'));
            } catch (error_0) {
                // eslint-disable-next-line no-console
                console.error('Error moving document to folder', error_0);
            }
        };
        if (!hasLoadedFolderName.current) {
            void loadFolderName();
            hasLoadedFolderName.current = true;
        }
    }, [
        config.routes.api,
        folderCollectionSlug,
        intialFolderID,
        t
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MoveDocToFolderButton"], {
        buttonProps: {
            disabled: viewType === 'trash',
            size: 'small'
        },
        collectionSlug: collectionSlug,
        docData: data,
        docID: docID,
        docTitle: docTitle,
        folderCollectionSlug: folderCollectionSlug,
        folderFieldName: folderFieldName,
        fromFolderID: fromFolderID,
        fromFolderName: fromFolderName,
        modalSlug: `move-doc-to-folder-cell--${docID}`,
        onConfirm: onConfirm,
        skipConfirmModal: false
    });
}; //# sourceMappingURL=index.client.js.map
}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/icons/X/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XIcon",
    ()=>XIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
const XIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        className: [
            className,
            'icon icon--x'
        ].filter(Boolean).join(' '),
        height: 20,
        viewBox: "0 0 20 20",
        width: 20,
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
            className: "stroke",
            d: "M14 6L6 14M6 6L14 14",
            strokeLinecap: "square"
        })
    }); //# sourceMappingURL=index.js.map
}),
];

//# sourceMappingURL=07455_%40payloadcms_ui_dist_39b36913._.js.map