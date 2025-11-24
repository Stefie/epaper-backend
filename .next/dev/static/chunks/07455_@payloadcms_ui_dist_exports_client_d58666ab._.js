(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/exports/client/chunk-XUCNM5EK.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>ke,
    "b",
    ()=>jr,
    "c",
    ()=>ue,
    "d",
    ()=>_n,
    "e",
    ()=>Ue,
    "f",
    ()=>se,
    "g",
    ()=>Qn,
    "h",
    ()=>Ar,
    "i",
    ()=>Vn,
    "j",
    ()=>Fe,
    "k",
    ()=>ee,
    "l",
    ()=>co
]);
// Workaround for react-datepicker and other cjs dependencies potentially inserting require("react") statements
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
// Workaround end
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function require(m) {
    if (m === 'react') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__;
    if (m === 'react-dom') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__;
    throw new Error(`Unknown module ${m}`);
}
;
;
function Je(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
function de(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable;
        })), r.push.apply(r, n);
    }
    return r;
}
function oe(t) {
    for(var e = 1; e < arguments.length; e++){
        var r = arguments[e] != null ? arguments[e] : {};
        e % 2 ? de(Object(r), !0).forEach(function(n) {
            Je(t, n, r[n]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : de(Object(r)).forEach(function(n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
        });
    }
    return t;
}
function Qe(t, e) {
    if (t == null) return {};
    var r = {}, n = Object.keys(t), o, i;
    for(i = 0; i < n.length; i++)o = n[i], !(e.indexOf(o) >= 0) && (r[o] = t[o]);
    return r;
}
function pe(t, e) {
    if (t == null) return {};
    var r = Qe(t, e), n, o;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for(o = 0; o < i.length; o++)n = i[o], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
    }
    return r;
}
function ge(t, e) {
    return Xe(t) || Ze(t, e) || et(t, e) || tt();
}
function Xe(t) {
    if (Array.isArray(t)) return t;
}
function Ze(t, e) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(t)))) {
        var r = [], n = !0, o = !1, i = void 0;
        try {
            for(var a = t[Symbol.iterator](), u; !(n = (u = a.next()).done) && (r.push(u.value), !(e && r.length === e)); n = !0);
        } catch (c) {
            o = !0, i = c;
        } finally{
            try {
                !n && a.return != null && a.return();
            } finally{
                if (o) throw i;
            }
        }
        return r;
    }
}
function et(t, e) {
    if (t) {
        if (typeof t == "string") return me(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return me(t, e);
    }
}
function me(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for(var r = 0, n = new Array(e); r < e; r++)n[r] = t[r];
    return n;
}
function tt() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rt(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}
function he(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable;
        })), r.push.apply(r, n);
    }
    return r;
}
function ve(t) {
    for(var e = 1; e < arguments.length; e++){
        var r = arguments[e] != null ? arguments[e] : {};
        e % 2 ? he(Object(r), !0).forEach(function(n) {
            rt(t, n, r[n]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : he(Object(r)).forEach(function(n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
        });
    }
    return t;
}
function nt() {
    for(var t = arguments.length, e = new Array(t), r = 0; r < t; r++)e[r] = arguments[r];
    return function(n) {
        return e.reduceRight(function(o, i) {
            return i(o);
        }, n);
    };
}
function z(t) {
    return function e() {
        for(var r = this, n = arguments.length, o = new Array(n), i = 0; i < n; i++)o[i] = arguments[i];
        return o.length >= t.length ? t.apply(this, o) : function() {
            for(var a = arguments.length, u = new Array(a), c = 0; c < a; c++)u[c] = arguments[c];
            return e.apply(r, [].concat(o, u));
        };
    };
}
function K(t) {
    return ({}).toString.call(t).includes("Object");
}
function ot(t) {
    return !Object.keys(t).length;
}
function B(t) {
    return typeof t == "function";
}
function it(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
}
function at(t, e) {
    return K(e) || D("changeType"), Object.keys(e).some(function(r) {
        return !it(t, r);
    }) && D("changeField"), e;
}
function ct(t) {
    B(t) || D("selectorType");
}
function ut(t) {
    B(t) || K(t) || D("handlerType"), K(t) && Object.values(t).some(function(e) {
        return !B(e);
    }) && D("handlersType");
}
function st(t) {
    t || D("initialIsRequired"), K(t) || D("initialType"), ot(t) && D("initialContent");
}
function lt(t, e) {
    throw new Error(t[e] || t.default);
}
var ft = {
    initialIsRequired: "initial state is required",
    initialType: "initial state should be an object",
    initialContent: "initial state shouldn't be an empty object",
    handlerType: "handler should be an object or a function",
    handlersType: "all handlers should be a functions",
    selectorType: "selector should be a function",
    changeType: "provided value of changes should be an object",
    changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
    default: "an unknown error accured in `state-local` package"
}, D = z(lt)(ft), G = {
    changes: at,
    selector: ct,
    handler: ut,
    initial: st
};
function dt(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    G.initial(t), G.handler(e);
    var r = {
        current: t
    }, n = z(gt)(r, e), o = z(pt)(r), i = z(G.changes)(t), a = z(mt)(r);
    function u() {
        var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(l) {
            return l;
        };
        return G.selector(s), s(r.current);
    }
    function c(s) {
        nt(n, o, i, a)(s);
    }
    return [
        u,
        c
    ];
}
function mt(t, e) {
    return B(e) ? e(t.current) : e;
}
function pt(t, e) {
    return t.current = ve(ve({}, t.current), e), e;
}
function gt(t, e, r) {
    return B(e) ? e(t.current) : Object.keys(r).forEach(function(n) {
        var o;
        return (o = e[n]) === null || o === void 0 ? void 0 : o.call(e, t.current[n]);
    }), r;
}
var ht = {
    create: dt
}, be = ht;
var vt = {
    paths: {
        vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"
    }
}, ye = vt;
function bt(t) {
    return function e() {
        for(var r = this, n = arguments.length, o = new Array(n), i = 0; i < n; i++)o[i] = arguments[i];
        return o.length >= t.length ? t.apply(this, o) : function() {
            for(var a = arguments.length, u = new Array(a), c = 0; c < a; c++)u[c] = arguments[c];
            return e.apply(r, [].concat(o, u));
        };
    };
}
var we = bt;
function yt(t) {
    return ({}).toString.call(t).includes("Object");
}
var Oe = yt;
function wt(t) {
    return t || je("configIsRequired"), Oe(t) || je("configType"), t.urls ? (Ot(), {
        paths: {
            vs: t.urls.monacoBase
        }
    }) : t;
}
function Ot() {
    console.warn(Me.deprecation);
}
function jt(t, e) {
    throw new Error(t[e] || t.default);
}
var Me = {
    configIsRequired: "the configuration object is required",
    configType: "the configuration object should be an object",
    default: "an unknown error accured in `@monaco-editor/loader` package",
    deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `
}, je = we(jt)(Me), Mt = {
    config: wt
}, Se = Mt;
var St = function() {
    for(var e = arguments.length, r = new Array(e), n = 0; n < e; n++)r[n] = arguments[n];
    return function(o) {
        return r.reduceRight(function(i, a) {
            return a(i);
        }, o);
    };
}, xe = St;
function Ce(t, e) {
    return Object.keys(e).forEach(function(r) {
        e[r] instanceof Object && t[r] && Object.assign(e[r], Ce(t[r], e[r]));
    }), oe(oe({}, t), e);
}
var Ee = Ce;
var xt = {
    type: "cancelation",
    msg: "operation is manually canceled"
};
function Ct(t) {
    var e = !1, r = new Promise(function(n, o) {
        t.then(function(i) {
            return e ? o(xt) : n(i);
        }), t.catch(o);
    });
    return r.cancel = function() {
        return e = !0;
    }, r;
}
var Y = Ct;
var Et = be.create({
    config: ye,
    isInitialized: !1,
    resolve: null,
    reject: null,
    monaco: null
}), Pe = ge(Et, 2), V = Pe[0], J = Pe[1];
function Pt(t) {
    var e = Se.config(t), r = e.monaco, n = pe(e, [
        "monaco"
    ]);
    J(function(o) {
        return {
            config: Ee(o.config, n),
            monaco: r
        };
    });
}
function Tt() {
    var t = V(function(e) {
        var r = e.monaco, n = e.isInitialized, o = e.resolve;
        return {
            monaco: r,
            isInitialized: n,
            resolve: o
        };
    });
    if (!t.isInitialized) {
        if (J({
            isInitialized: !0
        }), t.monaco) return t.resolve(t.monaco), Y(ie);
        if (window.monaco && window.monaco.editor) return Te(window.monaco), t.resolve(window.monaco), Y(ie);
        xe(At, It)(Dt);
    }
    return Y(ie);
}
function At(t) {
    return document.body.appendChild(t);
}
function Rt(t) {
    var e = document.createElement("script");
    return t && (e.src = t), e;
}
function It(t) {
    var e = V(function(n) {
        var o = n.config, i = n.reject;
        return {
            config: o,
            reject: i
        };
    }), r = Rt("".concat(e.config.paths.vs, "/loader.js"));
    return r.onload = function() {
        return t();
    }, r.onerror = e.reject, r;
}
function Dt() {
    var t = V(function(r) {
        var n = r.config, o = r.resolve, i = r.reject;
        return {
            config: n,
            resolve: o,
            reject: i
        };
    }), e = window.require;
    e.config(t.config), e([
        "vs/editor/editor.main"
    ], function(r) {
        Te(r), t.resolve(r);
    }, function(r) {
        t.reject(r);
    });
}
function Te(t) {
    V().monaco || J({
        monaco: t
    });
}
function Lt() {
    return V(function(t) {
        var e = t.monaco;
        return e;
    });
}
var ie = new Promise(function(t, e) {
    return J({
        resolve: t,
        reject: e
    });
}), _t = {
    config: Pt,
    init: Tt,
    __getMonacoInstance: Lt
}, $ = _t;
;
;
;
;
;
;
;
;
;
;
;
var Nt = {
    wrapper: {
        display: "flex",
        position: "relative",
        textAlign: "initial"
    },
    fullWidth: {
        width: "100%"
    },
    hide: {
        display: "none"
    }
}, ce = Nt, zt = {
    container: {
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
}, Bt = zt;
function Vt({ children: t }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        style: Bt.container
    }, t);
}
var Ft = Vt, Ut = Ft;
function qt({ width: t, height: e, isEditorReady: r, loading: n, _ref: o, className: i, wrapperProps: a }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("section", {
        style: {
            ...ce.wrapper,
            width: t,
            height: e
        },
        ...a
    }, !r && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Ut, null, n), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: o,
        style: {
            ...ce.fullWidth,
            ...!r && ce.hide
        },
        className: i
    }));
}
var Gt = qt, Le = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(Gt);
function Yt(t) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t, []);
}
var _e = Yt;
function Xt(t, e, r = !0) {
    let n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(n.current || !r ? ()=>{
        n.current = !1;
    } : t, e);
}
var S = Xt;
function F() {}
function W(t, e, r, n) {
    return Zt(t, n) || er(t, e, r, n);
}
function Zt(t, e) {
    return t.editor.getModel($e(t, e));
}
function er(t, e, r, n) {
    return t.editor.createModel(e, r, n ? $e(t, n) : void 0);
}
function $e(t, e) {
    return t.Uri.parse(e);
}
function tr({ original: t, modified: e, language: r, originalLanguage: n, modifiedLanguage: o, originalModelPath: i, modifiedModelPath: a, keepCurrentOriginalModel: u = !1, keepCurrentModifiedModel: c = !1, theme: s = "light", loading: l = "Loading...", options: d = {}, height: x = "100%", width: w = "100%", className: M, wrapperProps: E = {}, beforeMount: p = F, onMount: C = F }) {
    let [y, L] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), [A, g] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!0), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), P = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(C), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(p), T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1);
    _e(()=>{
        let m = $.init();
        return m.then((O)=>(v.current = O) && g(!1)).catch((O)=>O?.type !== "cancelation" && console.error("Monaco initialization: error:", O)), ()=>h.current ? H() : m.cancel();
    }), S(()=>{
        if (h.current && v.current) {
            let m = h.current.getOriginalEditor(), O = W(v.current, t || "", n || r || "text", i || "");
            O !== m.getModel() && m.setModel(O);
        }
    }, [
        i
    ], y), S(()=>{
        if (h.current && v.current) {
            let m = h.current.getModifiedEditor(), O = W(v.current, e || "", o || r || "text", a || "");
            O !== m.getModel() && m.setModel(O);
        }
    }, [
        a
    ], y), S(()=>{
        let m = h.current.getModifiedEditor();
        m.getOption(v.current.editor.EditorOption.readOnly) ? m.setValue(e || "") : e !== m.getValue() && (m.executeEdits("", [
            {
                range: m.getModel().getFullModelRange(),
                text: e || "",
                forceMoveMarkers: !0
            }
        ]), m.pushUndoStop());
    }, [
        e
    ], y), S(()=>{
        h.current?.getModel()?.original.setValue(t || "");
    }, [
        t
    ], y), S(()=>{
        let { original: m, modified: O } = h.current.getModel();
        v.current.editor.setModelLanguage(m, n || r || "text"), v.current.editor.setModelLanguage(O, o || r || "text");
    }, [
        r,
        n,
        o
    ], y), S(()=>{
        v.current?.editor.setTheme(s);
    }, [
        s
    ], y), S(()=>{
        h.current?.updateOptions(d);
    }, [
        d
    ], y);
    let _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!v.current) return;
        f.current(v.current);
        let m = W(v.current, t || "", n || r || "text", i || ""), O = W(v.current, e || "", o || r || "text", a || "");
        h.current?.setModel({
            original: m,
            modified: O
        });
    }, [
        r,
        e,
        o,
        t,
        n,
        i,
        a
    ]), q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        !T.current && P.current && (h.current = v.current.editor.createDiffEditor(P.current, {
            automaticLayout: !0,
            ...d
        }), _(), v.current?.editor.setTheme(s), L(!0), T.current = !0);
    }, [
        d,
        s,
        _
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        y && b.current(h.current, v.current);
    }, [
        y
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        !A && !y && q();
    }, [
        A,
        y,
        q
    ]);
    function H() {
        let m = h.current?.getModel();
        u || m?.original?.dispose(), c || m?.modified?.dispose(), h.current?.dispose();
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Le, {
        width: w,
        height: x,
        isEditorReady: y,
        loading: l,
        _ref: P,
        className: M,
        wrapperProps: E
    });
}
var rr = tr, bn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(rr);
function ur(t) {
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        e.current = t;
    }, [
        t
    ]), e.current;
}
var sr = ur, X = new Map;
function lr({ defaultValue: t, defaultLanguage: e, defaultPath: r, value: n, language: o, path: i, theme: a = "light", line: u, loading: c = "Loading...", options: s = {}, overrideServices: l = {}, saveViewState: d = !0, keepCurrentModel: x = !1, width: w = "100%", height: M = "100%", className: E, wrapperProps: p = {}, beforeMount: C = F, onMount: y = F, onChange: L, onValidate: A = F }) {
    let [g, h] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), [v, P] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!0), b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(y), q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(C), H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(n), O = sr(i), le = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1), te = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1);
    _e(()=>{
        let j = $.init();
        return j.then((I)=>(b.current = I) && P(!1)).catch((I)=>I?.type !== "cancelation" && console.error("Monaco initialization: error:", I)), ()=>f.current ? Ye() : j.cancel();
    }), S(()=>{
        let j = W(b.current, t || n || "", e || o || "", i || r || "");
        j !== f.current?.getModel() && (d && X.set(O, f.current?.saveViewState()), f.current?.setModel(j), d && f.current?.restoreViewState(X.get(i)));
    }, [
        i
    ], g), S(()=>{
        f.current?.updateOptions(s);
    }, [
        s
    ], g), S(()=>{
        !f.current || n === void 0 || (f.current.getOption(b.current.editor.EditorOption.readOnly) ? f.current.setValue(n) : n !== f.current.getValue() && (te.current = !0, f.current.executeEdits("", [
            {
                range: f.current.getModel().getFullModelRange(),
                text: n,
                forceMoveMarkers: !0
            }
        ]), f.current.pushUndoStop(), te.current = !1));
    }, [
        n
    ], g), S(()=>{
        let j = f.current?.getModel();
        j && o && b.current?.editor.setModelLanguage(j, o);
    }, [
        o
    ], g), S(()=>{
        u !== void 0 && f.current?.revealLine(u);
    }, [
        u
    ], g), S(()=>{
        b.current?.editor.setTheme(a);
    }, [
        a
    ], g);
    let fe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!(!T.current || !b.current) && !le.current) {
            q.current(b.current);
            let j = i || r, I = W(b.current, n || t || "", e || o || "", j || "");
            f.current = b.current?.editor.create(T.current, {
                model: I,
                automaticLayout: !0,
                ...s
            }, l), d && f.current.restoreViewState(X.get(j)), b.current.editor.setTheme(a), u !== void 0 && f.current.revealLine(u), h(!0), le.current = !0;
        }
    }, [
        t,
        e,
        r,
        n,
        o,
        i,
        s,
        l,
        d,
        a,
        u
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        g && _.current(f.current, b.current);
    }, [
        g
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        !v && !g && fe();
    }, [
        v,
        g,
        fe
    ]), m.current = n, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        g && L && (H.current?.dispose(), H.current = f.current?.onDidChangeModelContent((j)=>{
            te.current || L(f.current.getValue(), j);
        }));
    }, [
        g,
        L
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (g) {
            let j = b.current.editor.onDidChangeMarkers((I)=>{
                let re = f.current.getModel()?.uri;
                if (re && I.find((ne)=>ne.path === re.path)) {
                    let ne = b.current.editor.getModelMarkers({
                        resource: re
                    });
                    A?.(ne);
                }
            });
            return ()=>{
                j?.dispose();
            };
        }
        return ()=>{};
    }, [
        g,
        A
    ]);
    function Ye() {
        H.current?.dispose(), x ? d && X.set(i, f.current.saveViewState()) : f.current.getModel()?.dispose(), f.current.dispose();
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Le, {
        width: w,
        height: M,
        isEditorReady: g,
        loading: c,
        _ref: T,
        className: E,
        wrapperProps: p
    });
}
var fr = lr, dr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(fr), Z = dr;
;
;
;
;
;
;
;
;
;
function ke(t, e) {
    let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5), [n, o] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!0), a, u;
    r[0] !== t ? (a = ()=>{
        if (i.current) {
            i.current = !1;
            return;
        }
        o(t);
    }, u = [
        t
    ], r[0] = t, r[1] = a, r[2] = u) : (a = r[1], u = r[2]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(a, u);
    let c = n ?? e, s;
    return r[3] !== c ? (s = [
        c,
        o
    ], r[3] = c, r[4] = s) : s = r[4], s;
}
var He = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(void 0), jr = ({ children: t, config: e })=>{
    let [r, n] = ke(e), { collectionsBySlug: o, globalsBySlug: i } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let c = {}, s = {};
        for (let l of r.collections)c[l.slug] = l;
        for (let l of r.globals)s[l.slug] = l;
        return {
            collectionsBySlug: c,
            globalsBySlug: s
        };
    }, [
        r
    ]), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((c)=>"collectionSlug" in c ? o[c.collectionSlug] ?? null : "globalSlug" in c ? i[c.globalSlug] ?? null : null, [
        o,
        i
    ]), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            config: r,
            getEntityConfig: a,
            setConfig: n
        }), [
        r,
        a,
        n
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(He, {
        value: u,
        children: t
    });
}, ue = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(He), _n = (t)=>{
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7), { children: r, config: n } = t, { config: o, setConfig: i } = ue(), a, u;
    if (e[0] !== n || e[1] !== i ? (a = ()=>{
        i(n);
    }, u = [
        n,
        i
    ], e[0] = n, e[1] = i, e[2] = a, e[3] = u) : (a = e[2], u = e[3]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(a, u), o !== n && o.unauthenticated !== n.unauthenticated) {
        let c;
        return e[4] !== r || e[5] !== n ? (c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(jr, {
            config: n,
            children: r
        }), e[4] = r, e[5] = n, e[6] = c) : c = e[6], c;
    }
    return r;
};
var Pr = {
    autoMode: !0,
    setTheme: ()=>null,
    theme: "light"
}, Ve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(Pr);
function Be(t, e, r) {
    let n = new Date;
    n.setTime(n.getTime() + r * 24 * 60 * 60 * 1e3);
    let o = "expires=" + n.toUTCString();
    document.cookie = t + "=" + e + ";" + o + ";path=/";
}
var Tr = (t)=>{
    let e, r = window.document.cookie.split("; ").find((n)=>n.startsWith(`${t}=`))?.split("=")[1];
    return r === "light" || r === "dark" ? e = r : e = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light", document.documentElement.setAttribute("data-theme", e), {
        theme: e,
        themeFromCookies: r
    };
}, Ar = "light", Vn = (t)=>{
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11), { children: r, theme: n } = t, { config: o } = ue(), i = o.admin.theme, a = `${o.cookiePrefix || "payload"}-theme`, [u, c] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(n || Ar), [s, l] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), d, x;
    e[0] !== a || e[1] !== i ? (d = ()=>{
        if (i !== "all") return;
        let { theme: p, themeFromCookies: C } = Tr(a);
        c(p), l(!C);
    }, x = [
        i,
        a
    ], e[0] = a, e[1] = i, e[2] = d, e[3] = x) : (d = e[2], x = e[3]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(d, x);
    let w;
    e[4] !== a ? (w = (p)=>{
        if (p === "light" || p === "dark") c(p), l(!1), Be(a, p, 365), document.documentElement.setAttribute("data-theme", p);
        else if (p === "auto") {
            Be(a, p, -1);
            let C = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", C), l(!0), c(C);
        }
    }, e[4] = a, e[5] = w) : w = e[5];
    let M = w, E;
    return e[6] !== s || e[7] !== r || e[8] !== M || e[9] !== u ? (E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Ve, {
        value: {
            autoMode: s,
            setTheme: M,
            theme: u
        },
        children: r
    }), e[6] = s, e[7] = r, e[8] = M, e[9] = u, e[10] = E) : E = e[10], E;
}, Fe = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(Ve);
;
;
;
;
;
var Ue = (t, e)=>{
    let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9), n = e === void 0 ? !1 : e, [o, i] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(!1), a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(void 0), u;
    r[0] !== t ? (u = ()=>(i(!1), clearTimeout(a.current), a.current = setTimeout(()=>{
            i(!0);
        }, t), ()=>{
            clearTimeout(a.current);
        }), r[0] = t, r[1] = u) : u = r[1];
    let c = u, s, l;
    r[2] !== c || r[3] !== n ? (s = ()=>{
        n && c();
    }, l = [
        c,
        n
    ], r[2] = c, r[3] = n, r[4] = s, r[5] = l) : (s = r[4], l = r[5]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(s, l);
    let d;
    return r[6] !== o || r[7] !== c ? (d = [
        o,
        c
    ], r[6] = o, r[7] = c, r[8] = d) : d = r[8], d;
};
var se = ({ animationDelay: t = "0ms", className: e, disableInlineStyles: r = !1, height: n = "60px", width: o = "100%" })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: [
            "shimmer-effect",
            e
        ].filter(Boolean).join(" "),
        style: {
            height: !r && (typeof n == "number" ? `${n}px` : n),
            width: !r && (typeof o == "number" ? `${o}px` : o)
        },
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: "shimmer-effect__shine",
            style: {
                animationDelay: t
            }
        })
    }), Qn = (t)=>{
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9), { className: r, count: n, height: o, renderDelay: i, shimmerDelay: a, shimmerItemClassName: u, width: c } = t, s = i === void 0 ? 500 : i, l = a === void 0 ? 25 : a, d = typeof l == "number" ? `${l}ms` : l, [x] = Ue(s, !0);
    if (!x) return null;
    let w;
    e[0] !== n ? (w = [
        ...Array(n)
    ], e[0] = n, e[1] = w) : w = e[1];
    let M;
    return e[2] !== r || e[3] !== o || e[4] !== d || e[5] !== u || e[6] !== w || e[7] !== c ? (M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: r,
        children: w.map((E, p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: u,
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(se, {
                    animationDelay: `calc(${p} * ${d})`,
                    height: o,
                    width: c
                })
            }, p))
    }), e[2] = r, e[3] = o, e[4] = d, e[5] = u, e[6] = w, e[7] = c, e[8] = M) : M = e[8], M;
};
var ee = {
    insertSpaces: !1,
    tabSize: 4,
    trimAutoWhitespace: !1
}, qe = {
    hideCursorInOverviewRuler: !0,
    minimap: {
        enabled: !1
    },
    overviewRulerBorder: !1,
    readOnly: !1,
    scrollbar: {
        alwaysConsumeMouseWheel: !1
    },
    scrollBeyondLastLine: !1,
    wordWrap: "on"
};
var _r = "default" in Z ? Z.default : Z, $r = "code-editor", kr = (t)=>{
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10), { className: r, maxHeight: n, minHeight: o, options: i, readOnly: a, recalculatedHeightAt: u, value: c, ...s } = t, l = o ?? 56, d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(u), { insertSpaces: x, tabSize: w, trimAutoWhitespace: M, ...E } = i || {}, p = i?.padding ? (i.padding.top || 0) + (i.padding?.bottom || 0) : 0, [C, y] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(l), { theme: L } = Fe(), A = s?.defaultLanguage ? `language--${s.defaultLanguage}` : "", g = a && "read-only", h;
    e[0] !== r || e[1] !== A || e[2] !== g ? (h = [
        $r,
        r,
        A,
        g
    ].filter(Boolean), e[0] = r, e[1] = A, e[2] = g, e[3] = h) : h = e[3];
    let v = h.join(" "), P, b;
    return e[4] !== l || e[5] !== p || e[6] !== u || e[7] !== c ? (P = ()=>{
        u && u > d.current && (y(c ? Math.max(l, c.split(`
`).length * 18 + 2 + p) : l), d.current = u);
    }, b = [
        c,
        l,
        p,
        u
    ], e[4] = l, e[5] = p, e[6] = u, e[7] = c, e[8] = P, e[9] = b) : (P = e[8], b = e[9]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect(P, b), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(_r, {
        className: v,
        height: n ? Math.min(C, n) : C,
        loading: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(se, {
            height: C
        }),
        options: {
            ...qe,
            ...E,
            readOnly: !!a,
            detectIndentation: !1,
            insertSpaces: void 0,
            tabSize: void 0,
            trimAutoWhitespace: void 0
        },
        theme: L === "dark" ? "vs-dark" : "vs",
        value: c,
        ...s,
        onChange: (f, T)=>{
            s.onChange?.(f, T), y(f ? Math.max(l, f.split(`
`).length * 18 + 2 + p) : l);
        },
        onMount: (f, T)=>{
            s.onMount?.(f, T);
            let _ = f.getModel();
            _ && _.updateOptions({
                insertSpaces: x ?? ee.insertSpaces,
                tabSize: w ?? ee.tabSize,
                trimAutoWhitespace: M ?? ee.trimAutoWhitespace
            }), y(Math.max(l, f.getValue().split(`
`).length * 18 + 2 + p));
        }
    });
}, co = kr;
;
 //# sourceMappingURL=chunk-XUCNM5EK.js.map
}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/exports/client/chunk-5LKBKI4T.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>m,
    "b",
    ()=>n,
    "c",
    ()=>o,
    "d",
    ()=>p,
    "e",
    ()=>q,
    "f",
    ()=>r
]);
// Workaround for react-datepicker and other cjs dependencies potentially inserting require("react") statements
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.0-canary.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
"use client";
;
;
function require(m) {
    if (m === 'react') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__;
    if (m === 'react-dom') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$0$2d$canary$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__;
    throw new Error(`Unknown module ${m}`);
}
// Workaround end
var h = Object.create;
var e = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var j = Object.getOwnPropertyNames;
var k = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var m = ((a)=>typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(a, {
        get: (b, c)=>(typeof require < "u" ? require : b)[c]
    }) : a)(function(a) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + a + '" is not supported');
});
var n = (a, b)=>()=>(a && (b = a(a = 0)), b);
var o = (a, b)=>()=>(b || a((b = {
            exports: {}
        }).exports, b), b.exports), p = (a, b)=>{
    for(var c in b)e(a, c, {
        get: b[c],
        enumerable: !0
    });
}, g = (a, b, c, f)=>{
    if (b && typeof b == "object" || typeof b == "function") for (let d of j(b))!l.call(a, d) && d !== c && e(a, d, {
        get: ()=>b[d],
        enumerable: !(f = i(b, d)) || f.enumerable
    });
    return a;
};
var q = (a, b, c)=>(c = a != null ? h(k(a)) : {}, g(b || !a || !a.__esModule ? e(c, "default", {
        value: a,
        enumerable: !0
    }) : c, a)), r = (a)=>g(e({}, "__esModule", {
        value: !0
    }), a);
;
 //# sourceMappingURL=chunk-5LKBKI4T.js.map
}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/exports/client/chunk-AZDI6MW4.js [app-client] (ecmascript) <export d as useTranslation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTranslation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$AZDI6MW4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$AZDI6MW4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/exports/client/chunk-AZDI6MW4.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/exports/client/chunk-XUCNM5EK.js [app-client] (ecmascript) <export c as useConfig>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$XUCNM5EK$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$XUCNM5EK$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/exports/client/chunk-XUCNM5EK.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/exports/client/chunk-XUCNM5EK.js [app-client] (ecmascript) <export f as ShimmerEffect>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShimmerEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$XUCNM5EK$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$64$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$55$2e$1_next$40$16$2e$1$2e$0$2d$canary$2e$0_rea_52870c5534abe0d1ad89657769401cbb$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$chunk$2d$XUCNM5EK$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@payloadcms+ui@3.64.0_@types+react@19.0.1_monaco-editor@0.55.1_next@16.1.0-canary.0_rea_52870c5534abe0d1ad89657769401cbb/node_modules/@payloadcms/ui/dist/exports/client/chunk-XUCNM5EK.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=07455_%40payloadcms_ui_dist_exports_client_d58666ab._.js.map