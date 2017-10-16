/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-apng-canvas-cssanimations-csscalc-cssfilters-cssgradients-csspointerevents-csspositionsticky-csstransforms-csstransforms3d-csstransitions-cssvhunit-ellipsis-eventlistener-flexbox-fontface-hashchange-history-lastchild-mediaqueries-multiplebgs-nthchild-objectfit-placeholder-requestanimationframe-svg-time-touchevents-setclasses !*/
! function(e, t, n) {
    function r(e, t) { return typeof e === t }

    function i() { var e, t, n, i, s, o, a; for (var d in x)
            if (x.hasOwnProperty(d)) { if (e = [], t = x[d], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase()); for (i = r(t.fn, "function") ? t.fn() : t.fn, s = 0; s < e.length; s++) o = e[s], a = o.split("."), 1 === a.length ? Modernizr[a[0]] = i : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = i), y.push((i ? "" : "no-") + a.join("-")) } }

    function s(e) { var t = T.className,
            n = Modernizr._config.classPrefix || ""; if (b && (t = t.baseVal), Modernizr._config.enableJSClass) { var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2") }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), b ? T.className.baseVal = t : T.className = t) }

    function o() { return "function" != typeof t.createElement ? t.createElement(arguments[0]) : b ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments) }

    function a(e) { return e.replace(/([a-z])-([a-z])/g, function(e, t, n) { return t + n.toUpperCase() }).replace(/^-/, "") }

    function d(e, t) { if ("object" == typeof e)
            for (var n in e) z(e, n) && d(n, e[n]);
        else { e = e.toLowerCase(); var r = e.split("."),
                i = Modernizr[r[0]]; if (2 == r.length && (i = i[r[1]]), "undefined" != typeof i) return Modernizr;
            t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), s([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t) } return Modernizr }

    function u() { var e = t.body; return e || (e = o(b ? "svg" : "body"), e.fake = !0), e }

    function f(e, n, r, i) { var s, a, d, f, l = "modernizr",
            c = o("div"),
            p = u(); if (parseInt(r, 10))
            for (; r--;) d = o("div"), d.id = i ? i[r] : l + (r + 1), c.appendChild(d); return s = o("style"), s.type = "text/css", s.id = "s" + l, (p.fake ? p : c).appendChild(s), p.appendChild(c), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(t.createTextNode(e)), c.id = l, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = T.style.overflow, T.style.overflow = "hidden", T.appendChild(p)), a = n(c, e), p.fake ? (p.parentNode.removeChild(p), T.style.overflow = f, T.offsetHeight) : c.parentNode.removeChild(c), !!a }

    function l(e, t) { return !!~("" + e).indexOf(t) }

    function c(e, t) { return function() { return e.apply(t, arguments) } }

    function p(e, t, n) { var i; for (var s in e)
            if (e[s] in t) return n === !1 ? e[s] : (i = t[e[s]], r(i, "function") ? c(i, n || t) : i);
        return !1 }

    function h(e) { return e.replace(/([A-Z])/g, function(e, t) { return "-" + t.toLowerCase() }).replace(/^ms-/, "-ms-") }

    function m(t, r) { var i = t.length; if ("CSS" in e && "supports" in e.CSS) { for (; i--;)
                if (e.CSS.supports(h(t[i]), r)) return !0;
            return !1 } if ("CSSSupportsRule" in e) { for (var s = []; i--;) s.push("(" + h(t[i]) + ":" + r + ")"); return s = s.join(" or "), f("@supports (" + s + ") { #modernizr { position: absolute; } }", function(e) { return "absolute" == getComputedStyle(e, null).position }) } return n }

    function g(e, t, i, s) {
        function d() { f && (delete q.style, delete q.modElem) } if (s = r(s, "undefined") ? !1 : s, !r(i, "undefined")) { var u = m(e, i); if (!r(u, "undefined")) return u } for (var f, c, p, h, g, A = ["modernizr", "tspan", "samp"]; !q.style && A.length;) f = !0, q.modElem = o(A.shift()), q.style = q.modElem.style; for (p = e.length, c = 0; p > c; c++)
            if (h = e[c], g = q.style[h], l(h, "-") && (h = a(h)), q.style[h] !== n) { if (s || r(i, "undefined")) return d(), "pfx" == t ? h : !0; try { q.style[h] = i } catch (v) {} if (q.style[h] != g) return d(), "pfx" == t ? h : !0 }
        return d(), !1 }

    function A(e, t, n, i, s) { var o = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + P.join(o + " ") + o).split(" "); return r(t, "string") || r(t, "undefined") ? g(a, t, i, s) : (a = (e + " " + R.join(o + " ") + o).split(" "), p(a, t, n)) }

    function v(e, t, r) { return A(e, n, n, t, r) } var y = [],
        x = [],
        w = { _version: "3.3.1", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function(e, t) { var n = this;
                setTimeout(function() { t(n[e]) }, 0) }, addTest: function(e, t, n) { x.push({ name: e, fn: t, options: n }) }, addAsyncTest: function(e) { x.push({ name: null, fn: e }) } },
        Modernizr = function() {};
    Modernizr.prototype = w, Modernizr = new Modernizr, Modernizr.addTest("eventlistener", "addEventListener" in e), Modernizr.addTest("history", function() { var t = navigator.userAgent; return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") ? e.history && "pushState" in e.history : !1 }), Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect); var T = t.documentElement,
        b = "svg" === T.nodeName.toLowerCase();
    Modernizr.addTest("canvas", function() { var e = o("canvas"); return !(!e.getContext || !e.getContext("2d")) }), Modernizr.addTest("multiplebgs", function() { var e = o("a").style; return e.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(e.background) }), Modernizr.addTest("csspointerevents", function() { var e = o("a").style; return e.cssText = "pointer-events:auto", "auto" === e.pointerEvents }), Modernizr.addTest("time", "valueAsDate" in o("time")), Modernizr.addTest("placeholder", "placeholder" in o("input") && "placeholder" in o("textarea")); var C = function() {
        function e(e, t) { var i; return e ? (t && "string" != typeof t || (t = o(t || "div")), e = "on" + e, i = e in t, !i && r && (t.setAttribute || (t = o("div")), t.setAttribute(e, ""), i = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), i) : !1 } var r = !("onblur" in t.documentElement); return e }();
    w.hasEvent = C, Modernizr.addTest("hashchange", function() { return C("hashchange", e) === !1 ? !1 : t.documentMode === n || t.documentMode > 7 }); var S = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    w._prefixes = S, Modernizr.addTest("csscalc", function() { var e = "width:",
            t = "calc(10px);",
            n = o("a"); return n.style.cssText = e + S.join(t + e), !!n.style.length }), Modernizr.addTest("cssgradients", function() { for (var e, t = "background-image:", n = "gradient(linear,left top,right bottom,from(#9f9),to(white));", r = "", i = 0, s = S.length - 1; s > i; i++) e = 0 === i ? "to " : "", r += t + S[i] + "linear-gradient(" + e + "left top, #9f9, white);";
        Modernizr._config.usePrefixes && (r += t + "-webkit-" + n); var a = o("a"),
            d = a.style; return d.cssText = r, ("" + d.backgroundImage).indexOf("gradient") > -1 }), Modernizr.addTest("csspositionsticky", function() { var e = "position:",
            t = "sticky",
            n = o("a"),
            r = n.style; return r.cssText = e + S.join(t + ";" + e).slice(0, -e.length), -1 !== r.position.indexOf(t) }); var _ = "CSS" in e && "supports" in e.CSS,
        E = "supportsCSS" in e;
    Modernizr.addTest("supports", _ || E); var z;! function() { var e = {}.hasOwnProperty;
        z = r(e, "undefined") || r(e.call, "undefined") ? function(e, t) { return t in e && r(e.constructor.prototype[t], "undefined") } : function(t, n) { return e.call(t, n) } }(), w._l = {}, w.on = function(e, t) { this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() { Modernizr._trigger(e, Modernizr[e]) }, 0) }, w._trigger = function(e, t) { if (this._l[e]) { var n = this._l[e];
            setTimeout(function() { var e, r; for (e = 0; e < n.length; e++)(r = n[e])(t) }, 0), delete this._l[e] } }, Modernizr._q.push(function() { w.addTest = d }), Modernizr.addAsyncTest(function() { if (!Modernizr.canvas) return !1; var e = new Image,
            t = o("canvas"),
            n = t.getContext("2d");
        e.onload = function() { d("apng", function() { return "undefined" == typeof t.getContext ? !1 : (n.drawImage(e, 0, 0), 0 === n.getImageData(0, 0, 1, 1).data[3]) }) }, e.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg==" }); var j = w.testStyles = f;
    Modernizr.addTest("touchevents", function() { var n; if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
        else { var r = ["@media (", S.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            j(r, function(e) { n = 9 === e.offsetTop }) } return n }); var k = function() { var e = navigator.userAgent,
            t = e.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1),
            n = e.match(/w(eb)?osbrowser/gi),
            r = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9,
            i = 533 > t && e.match(/android/gi); return n || i || r }();
    k ? Modernizr.addTest("fontface", !1) : j('@font-face {font-family:"font";src:url("https://")}', function(e, n) { var r = t.getElementById("smodernizr"),
            i = r.sheet || r.styleSheet,
            s = i ? i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText : i.cssText || "" : "",
            o = /src/i.test(s) && 0 === s.indexOf(n.split(" ")[0]);
        Modernizr.addTest("fontface", o) }), j("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}", function(e) { Modernizr.addTest("lastchild", e.lastChild.offsetWidth > e.firstChild.offsetWidth) }, 2), j("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}", function(e) { for (var t = e.getElementsByTagName("div"), n = !0, r = 0; 5 > r; r++) n = n && t[r].offsetWidth === r % 2 + 1;
        Modernizr.addTest("nthchild", n) }, 5), j("#modernizr { height: 50vh; }", function(t) { var n = parseInt(e.innerHeight / 2, 10),
            r = parseInt((e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).height, 10);
        Modernizr.addTest("cssvhunit", r == n) }); var B = function() { var t = e.matchMedia || e.msMatchMedia; return t ? function(e) { var n = t(e); return n && n.matches || !1 } : function(t) { var n = !1; return f("@media " + t + " { #modernizr { position: absolute; } }", function(t) { n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position }), n } }();
    w.mq = B, Modernizr.addTest("mediaqueries", B("only all")); var O = "Moz O ms Webkit",
        P = w._config.usePrefixes ? O.split(" ") : [];
    w._cssomPrefixes = P; var N = function(t) { var r, i = S.length,
            s = e.CSSRule; if ("undefined" == typeof s) return n; if (!t) return !1; if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in s) return "@" + t; for (var o = 0; i > o; o++) { var a = S[o],
                d = a.toUpperCase() + "_" + r; if (d in s) return "@-" + a.toLowerCase() + "-" + t } return !1 };
    w.atRule = N; var R = w._config.usePrefixes ? O.toLowerCase().split(" ") : [];
    w._domPrefixes = R; var M = { elem: o("modernizr") };
    Modernizr._q.push(function() { delete M.elem }); var q = { style: M.elem.style };
    Modernizr._q.unshift(function() { delete q.style }), w.testAllProps = A; var I = w.prefixed = function(e, t, n) { return 0 === e.indexOf("@") ? N(e) : (-1 != e.indexOf("-") && (e = a(e)), t ? A(e, t, n) : A(e, "pfx")) };
    Modernizr.addTest("requestanimationframe", !!I("requestAnimationFrame", e), { aliases: ["raf"] }), Modernizr.addTest("objectfit", !!I("objectFit"), { aliases: ["object-fit"] }), w.testAllProps = v, Modernizr.addTest("ellipsis", v("textOverflow", "ellipsis")), Modernizr.addTest("cssfilters", function() { if (Modernizr.supports) return v("filter", "blur(2px)"); var e = o("a"); return e.style.cssText = S.join("filter:blur(2px); "), !!e.style.length && (t.documentMode === n || t.documentMode > 9) }), Modernizr.addTest("flexbox", v("flexBasis", "1px", !0)), Modernizr.addTest("csstransforms", function() { return -1 === navigator.userAgent.indexOf("Android 2.") && v("transform", "scale(1)", !0) }), Modernizr.addTest("csstransforms3d", function() { var e = !!v("perspective", "1px", !0),
            t = Modernizr._config.usePrefixes; if (e && (!t || "webkitPerspective" in T.style)) { var n, r = "#modernizr{width:0;height:0}";
            Modernizr.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", j(r + n, function(t) { e = 7 === t.offsetWidth && 18 === t.offsetHeight }) } return e }), Modernizr.addTest("csstransitions", v("transition", "all", !0)), Modernizr.addTest("cssanimations", v("animationName", "a", !0)), i(), s(y), delete w.addTest, delete w.addAsyncTest; for (var U = 0; U < Modernizr._q.length; U++) Modernizr._q[U]();
    e.Modernizr = Modernizr }(window, document);