! function(e) { "use strict";

    function t() { var e = ['<div class="player-controls">', '<div class="player-progress">', '<label for="seek{id}" class="sr-only">Seek</label>', '<input id="seek{id}" class="player-progress-seek" type="range" min="0" max="100" step="0.5" value="0" data-player="seek">', '<progress class="player-progress-played" max="100" value="0">', "<span>0</span>% " + C.i18n.played, "</progress>", '<progress class="player-progress-buffer" max="100" value="0">', "<span>0</span>% " + C.i18n.buffered, "</progress>", "</div>", '<span class="player-controls-left">']; return o(C.controls, "restart") && e.push('<button type="button" data-player="restart">', '<svg><use xlink:href="#' + C.iconPrefix + '-restart" /></svg>', '<span class="sr-only">' + C.i18n.restart + "</span>", "</button>"), o(C.controls, "rewind") && e.push('<button type="button" data-player="rewind">', '<svg><use xlink:href="#' + C.iconPrefix + '-rewind" /></svg>', '<span class="sr-only">' + C.i18n.rewind + "</span>", "</button>"), o(C.controls, "play") && e.push('<button type="button" data-player="play">', '<svg><use xlink:href="#' + C.iconPrefix + '-play" /></svg>', '<span class="sr-only">' + C.i18n.play + "</span>", "</button>", '<button type="button" data-player="pause">', '<svg><use xlink:href="#' + C.iconPrefix + '-pause" /></svg>', '<span class="sr-only">' + C.i18n.pause + "</span>", "</button>"), o(C.controls, "fast-forward") && e.push('<button type="button" data-player="fast-forward">', '<svg><use xlink:href="#' + C.iconPrefix + '-fast-forward" /></svg>', '<span class="sr-only">' + C.i18n.forward + "</span>", "</button>"), o(C.controls, "current-time") && e.push('<span class="player-time">', '<span class="sr-only">' + C.i18n.currentTime + "</span>", '<span class="player-current-time">00:00</span>', "</span>"), o(C.controls, "duration") && e.push('<span class="player-time">', '<span class="sr-only">' + C.i18n.duration + "</span>", '<span class="player-duration">00:00</span>', "</span>"), e.push("</span>", '<span class="player-controls-right">'), o(C.controls, "mute") && e.push('<button type="button" data-player="mute">', '<svg class="icon-muted"><use xlink:href="#' + C.iconPrefix + '-muted" /></svg>', '<svg><use xlink:href="#' + C.iconPrefix + '-volume" /></svg>', '<span class="sr-only">' + C.i18n.toggleMute + "</span>", "</button>"), o(C.controls, "volume") && e.push('<label for="volume{id}" class="sr-only">' + C.i18n.volume + "</label>", '<input id="volume{id}" class="player-volume" type="range" min="0" max="10" value="5" data-player="volume">'), o(C.controls, "captions") && e.push('<button type="button" data-player="captions">', '<svg class="icon-captions-on"><use xlink:href="#' + C.iconPrefix + '-captions-on" /></svg>', '<svg><use xlink:href="#' + C.iconPrefix + '-captions-off" /></svg>', '<span class="sr-only">' + C.i18n.toggleCaptions + "</span>", "</button>"), o(C.controls, "fullscreen") && e.push('<button type="button" data-player="fullscreen">', '<svg class="icon-exit-fullscreen"><use xlink:href="#' + C.iconPrefix + '-exit-fullscreen" /></svg>', '<svg><use xlink:href="#' + C.iconPrefix + '-enter-fullscreen" /></svg>', '<span class="sr-only">' + C.i18n.toggleFullscreen + "</span>", "</button>"), e.push("</span>", "</div>"), e.join("") }

    function n(e, t) { C.debug && window.console && console[t ? "error" : "log"](e) }

    function r() { var e, t, n, r = navigator.userAgent,
            a = navigator.appName,
            s = "" + parseFloat(navigator.appVersion),
            o = parseInt(navigator.appVersion, 10); return -1 !== navigator.appVersion.indexOf("Windows NT") && -1 !== navigator.appVersion.indexOf("rv:11") ? (a = "IE", s = "11;") : -1 !== (t = r.indexOf("MSIE")) ? (a = "IE", s = r.substring(t + 5)) : -1 !== (t = r.indexOf("Chrome")) ? (a = "Chrome", s = r.substring(t + 7)) : -1 !== (t = r.indexOf("Safari")) ? (a = "Safari", s = r.substring(t + 7), -1 !== (t = r.indexOf("Version")) && (s = r.substring(t + 8))) : -1 !== (t = r.indexOf("Firefox")) ? (a = "Firefox", s = r.substring(t + 8)) : (e = r.lastIndexOf(" ") + 1) < (t = r.lastIndexOf("/")) && (a = r.substring(e, t), s = r.substring(t + 1), a.toLowerCase() == a.toUpperCase() && (a = navigator.appName)), -1 !== (n = s.indexOf(";")) && (s = s.substring(0, n)), -1 !== (n = s.indexOf(" ")) && (s = s.substring(0, n)), o = parseInt("" + s, 10), isNaN(o) && (s = "" + parseFloat(navigator.appVersion), o = parseInt(navigator.appVersion, 10)), { name: a, version: o, ios: /(iPad|iPhone|iPod)/g.test(navigator.platform) } }

    function a(e, t) { var n = e.media; if ("video" == e.type) switch (t) {
                case "video/webm":
                    return !(!n.canPlayType || !n.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, ""));
                case "video/mp4":
                    return !(!n.canPlayType || !n.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ""));
                case "video/ogg":
                    return !(!n.canPlayType || !n.canPlayType('video/ogg; codecs="theora"').replace(/no/, "")) } else if ("audio" == e.type) switch (t) {
                case "audio/mpeg":
                    return !(!n.canPlayType || !n.canPlayType("audio/mpeg;").replace(/no/, ""));
                case "audio/ogg":
                    return !(!n.canPlayType || !n.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""));
                case "audio/wav":
                    return !(!n.canPlayType || !n.canPlayType('audio/wav; codecs="1"').replace(/no/, "")) }
            return !1 }

    function s(e) { if (!document.querySelectorAll('script[src="' + e + '"]').length) { var t = document.createElement("script");
            t.src = e; var n = document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(t, n) } }

    function o(e, t) { return Array.prototype.indexOf && -1 != e.indexOf(t) }

    function i(e, t, n) { return e.replace(new RegExp(t.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, "\\$1"), "g"), n) }

    function u(e, t) { e.length || (e = [e]); for (var n = e.length - 1; n >= 0; n--) { var r = n > 0 ? t.cloneNode(!0) : t,
                a = e[n],
                s = a.parentNode,
                o = a.nextSibling;
            r.appendChild(a), o ? s.insertBefore(r, o) : s.appendChild(r) } }

    function l(e) { for (var t = e.parentNode; e.firstChild;) t.insertBefore(e.firstChild, e);
        t.removeChild(e) }

    function c(e) { e.parentNode.removeChild(e) }

    function p(e, t) { e.insertBefore(t, e.firstChild) }

    function d(e, t) { for (var n in t) e.setAttribute(n, t[n]) }

    function f(e, t, n) { if (e)
            if (e.classList) e.classList[n ? "add" : "remove"](t);
            else { var r = (" " + e.className + " ").replace(/\s+/g, " ").replace(" " + t + " ", "");
                e.className = r + (n ? " " + t : "") } }

    function m(e, t, n, r) { var a = t.split(" "); if (e instanceof NodeList)
            for (var s = 0; s < e.length; s++) e[s] instanceof Node && m(e[s], arguments[1], arguments[2], arguments[3]);
        else
            for (var o = 0; o < a.length; o++) e[r ? "addEventListener" : "removeEventListener"](a[o], n, !1) }

    function y(e, t, n) { e && m(e, t, n, !0) }

    function b(e, t, n) { e && m(e, t, n, !1) }

    function v(e, t) { var n = document.createEvent("MouseEvents");
        n.initEvent(t, !0, !0), e.dispatchEvent(n) }

    function g(e, t) { return t = "boolean" == typeof t ? t : !e.getAttribute("aria-pressed"), e.setAttribute("aria-pressed", t), t }

    function h(e, t) { return 0 === e || 0 === t || isNaN(e) || isNaN(t) ? 0 : (e / t * 100).toFixed(2) }

    function w(e, t) { for (var n in t) t[n] && t[n].constructor && t[n].constructor === Object ? (e[n] = e[n] || {}, w(e[n], t[n])) : e[n] = t[n]; return e }

    function k() { var e = { supportsFullScreen: !1, isFullScreen: function() { return !1 }, requestFullScreen: function() {}, cancelFullScreen: function() {}, fullScreenEventName: "", element: null, prefix: "" },
            t = "webkit moz o ms khtml".split(" "); if ("undefined" != typeof document.cancelFullScreen) e.supportsFullScreen = !0;
        else
            for (var n = 0, r = t.length; r > n; n++) { if (e.prefix = t[n], "undefined" != typeof document[e.prefix + "CancelFullScreen"]) { e.supportsFullScreen = !0; break } if ("undefined" != typeof document.msExitFullscreen && document.msFullscreenEnabled) { e.prefix = "ms", e.supportsFullScreen = !0; break } }
        return e.supportsFullScreen && (e.fullScreenEventName = "ms" == e.prefix ? "MSFullscreenChange" : e.prefix + "fullscreenchange", e.isFullScreen = function(e) { switch ("undefined" == typeof e && (e = document.body), this.prefix) {
                case "":
                    return document.fullscreenElement == e;
                case "moz":
                    return document.mozFullScreenElement == e;
                default:
                    return document[this.prefix + "FullscreenElement"] == e } }, e.requestFullScreen = function(e) { return "undefined" == typeof e && (e = document.body), "" === this.prefix ? e.requestFullScreen() : e[this.prefix + ("ms" == this.prefix ? "RequestFullscreen" : "RequestFullScreen")]() }, e.cancelFullScreen = function() { return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + ("ms" == this.prefix ? "ExitFullscreen" : "CancelFullScreen")]() }, e.element = function() { return "" === this.prefix ? document.fullscreenElement : document[this.prefix + "FullscreenElement"] }), e }

    function x() { var e = { supported: function() { try { return "localStorage" in window && null !== window.localStorage } catch (e) { return !1 } }() }; return e }

    function T(o) {
        function w(e) { if (!fe.usingTextTracks && "video" === fe.type && fe.supported.full) { for (fe.subcount = 0, e = "number" == typeof e ? e : fe.media.currentTime; A(fe.captions[fe.subcount][0]) < e.toFixed(1);)
                    if (fe.subcount++, fe.subcount > fe.captions.length - 1) { fe.subcount = fe.captions.length - 1; break }
                if (fe.media.currentTime.toFixed(1) >= E(fe.captions[fe.subcount][0]) && fe.media.currentTime.toFixed(1) <= A(fe.captions[fe.subcount][0])) { fe.currentCaption = fe.captions[fe.subcount][1]; var t = fe.currentCaption.trim();
                    fe.captionsContainer.innerHTML != t && (fe.captionsContainer.innerHTML = "", fe.captionsContainer.innerHTML = t) } else fe.captionsContainer.innerHTML = "" } }

        function T() { fe.buttons.captions && (f(fe.container, C.classes.captions.enabled, !0), C.captions.defaultActive && (f(fe.container, C.classes.captions.active, !0), g(fe.buttons.captions, !0))) }

        function E(e) { var t = []; return t = e.split(" --> "), P(t[0]) }

        function A(e) { var t = []; return t = e.split(" --> "), P(t[1]) }

        function P(e) { if (null === e || void 0 === e) return 0; var t, n = [],
                r = []; return n = e.split(","), r = n[0].split(":"), t = Math.floor(60 * r[0] * 60) + Math.floor(60 * r[1]) + Math.floor(r[2]) }

        function N(e) { return fe.container.querySelectorAll(e) }

        function M(e) { return N(e)[0] }

        function I() { try { return window.self !== window.top } catch (e) { return !0 } }

        function L() { var e = C.html; if (n("Injecting custom controls."), e || (e = t()), e = i(e, "{seektime}", C.seekTime), e = i(e, "{id}", Math.floor(1e4 * Math.random())), fe.container.insertAdjacentHTML("beforeend", e), C.tooltips)
                for (var r = N(C.selectors.labels), a = r.length - 1; a >= 0; a--) { var s = r[a];
                    f(s, C.classes.hidden, !1), f(s, C.classes.tooltip, !0) } }

        function O() { try { return fe.controls = M(C.selectors.controls), fe.buttons = {}, fe.buttons.seek = M(C.selectors.buttons.seek), fe.buttons.play = M(C.selectors.buttons.play), fe.buttons.pause = M(C.selectors.buttons.pause), fe.buttons.restart = M(C.selectors.buttons.restart), fe.buttons.rewind = M(C.selectors.buttons.rewind), fe.buttons.forward = M(C.selectors.buttons.forward), fe.buttons.fullscreen = M(C.selectors.buttons.fullscreen), fe.buttons.mute = M(C.selectors.buttons.mute), fe.buttons.captions = M(C.selectors.buttons.captions), fe.checkboxes = N('[type="checkbox"]'), fe.progress = {}, fe.progress.container = M(C.selectors.progress.container), fe.progress.buffer = {}, fe.progress.buffer.bar = M(C.selectors.progress.buffer), fe.progress.buffer.text = fe.progress.buffer.bar && fe.progress.buffer.bar.getElementsByTagName("span")[0], fe.progress.played = {}, fe.progress.played.bar = M(C.selectors.progress.played), fe.progress.played.text = fe.progress.played.bar && fe.progress.played.bar.getElementsByTagName("span")[0], fe.volume = M(C.selectors.buttons.volume), fe.duration = M(C.selectors.duration), fe.currentTime = M(C.selectors.currentTime), fe.seekTime = N(C.selectors.seekTime), !0 } catch (e) { return n("It looks like there's a problem with your controls html. Bailing.", !0), fe.media.setAttribute("controls", ""), !1 } }

        function q() { if (fe.buttons.play) { var e = fe.buttons.play.innerText || C.i18n.play; "undefined" != typeof C.title && C.title.length && (e += ", " + C.title), fe.buttons.play.setAttribute("aria-label", e) } }

        function V() { if (!fe.media) return n("No audio or video element found!", !0), !1; if (fe.supported.full && (fe.media.removeAttribute("controls"), f(fe.container, C.classes.type.replace("{0}", fe.type), !0), f(fe.container, C.classes.stopped, null === fe.media.getAttribute("autoplay") && !C.autoplay), fe.browser.ios && f(fe.container, "ios", !0), "video" === fe.type)) { var e = document.createElement("div");
                e.setAttribute("class", C.classes.videoWrapper), u(fe.media, e), fe.videoContainer = e } "youtube" == fe.type && H(fe.media.getAttribute("data-video-id")), (null !== fe.media.getAttribute("autoplay") || C.autoplay) && D() }

        function H(e) { for (var t = N('[id^="youtube"]'), n = t.length - 1; n >= 0; n--) c(t[n]); var r = document.createElement("div");
            r.setAttribute("id", "youtube-" + Math.floor(1e4 * Math.random())), fe.media.appendChild(r), f(fe.media, C.classes.videoWrapper, !0), f(fe.media, C.classes.embedWrapper, !0), "object" == typeof YT ? R(e, r) : (s("https://www.youtube.com/iframe_api"), S.youtube.push(function() { R(e, r) }), window.onYouTubeIframeAPIReady = function() { for (var e = S.youtube.length - 1; e >= 0; e--) S.youtube[e](), S.youtube.splice(e, 1) }) }

        function R(e, t) { n("YouTube API Ready"), "timer" in fe || (fe.timer = {}), fe.embed = new YT.Player(t.id, { videoId: e, playerVars: { autoplay: C.autoplay ? 1 : 0, controls: fe.supported.full ? 0 : 1, rel: 0, showinfo: 0, iv_load_policy: 3, cc_load_policy: C.captions.defaultActive ? 1 : 0, cc_lang_pref: "en", wmode: "transparent", modestbranding: 1, disablekb: 1 }, events: { onReady: function(e) { var t = e.target;
                        fe.media.play = function() { t.playVideo() }, fe.media.pause = function() { t.pauseVideo() }, fe.media.stop = function() { t.stopVideo() }, fe.media.duration = t.getDuration(), fe.media.paused = !0, fe.media.currentTime = t.getCurrentTime(), fe.media.muted = t.isMuted(), v(fe.media, "timeupdate"), window.clearInterval(fe.timer.buffering), fe.timer.buffering = window.setInterval(function() { fe.media.buffered = t.getVideoLoadedFraction(), v(fe.media, "progress"), 1 === fe.media.buffered && window.clearInterval(fe.timer.buffering) }, 200), fe.supported.full && (fe.container.querySelectorAll(C.selectors.controls).length || de(), C.displayDuration && re()) }, onStateChange: function(e) { var t = e.target; switch (window.clearInterval(fe.timer.playing), e.data) {
                            case 0:
                                fe.media.paused = !0, v(fe.media, "ended"); break;
                            case 1:
                                fe.media.paused = !1, v(fe.media, "play"), fe.timer.playing = window.setInterval(function() { fe.media.currentTime = t.getCurrentTime(), v(fe.media, "timeupdate") }, 200); break;
                            case 2:
                                fe.media.paused = !0, v(fe.media, "pause") } } } }) }

        function B() { if ("video" === fe.type) { fe.videoContainer.insertAdjacentHTML("afterbegin", '<div class="' + C.selectors.captions.replace(".", "") + '"><span></span></div>'), fe.captionsContainer = M(C.selectors.captions).querySelector("span"), fe.usingTextTracks = !1, fe.media.textTracks && (fe.usingTextTracks = !0); for (var e, t = "", r = fe.media.childNodes, a = 0; a < r.length; a++) "track" === r[a].nodeName.toLowerCase() && (e = r[a].kind, ("captions" === e || "subtitles" === e) && (t = r[a].getAttribute("src"))); if (fe.captionExists = !0, "" === t ? (fe.captionExists = !1, n("No caption track found.")) : n("Caption track found; URI: " + t), fe.captionExists) { for (var s = fe.media.textTracks, o = 0; o < s.length; o++) s[o].mode = "hidden"; if (T(fe), ("IE" === fe.browser.name && fe.browser.version >= 10 || "Firefox" === fe.browser.name && fe.browser.version >= 31 || "Chrome" === fe.browser.name && fe.browser.version >= 43 || "Safari" === fe.browser.name && fe.browser.version >= 7) && (n("Detected unsupported browser for HTML5 captions. Using fallback."), fe.usingTextTracks = !1), fe.usingTextTracks) { n("TextTracks supported."); for (var i = 0; i < s.length; i++) { var u = s[i];
                            ("captions" === u.kind || "subtitles" === u.kind) && y(u, "cuechange", function() { fe.captionsContainer.innerHTML = "", this.activeCues[0] && this.activeCues[0].hasOwnProperty("text") && fe.captionsContainer.appendChild(this.activeCues[0].getCueAsHTML().trim()) }) } } else if (n("TextTracks not supported so rendering captions manually."), fe.currentCaption = "", fe.captions = [], "" !== t) { var l = new XMLHttpRequest;
                        l.onreadystatechange = function() { if (4 === l.readyState)
                                if (200 === l.status) { var e, t = [],
                                        r = l.responseText;
                                    t = r.split("\n\n"); for (var a = 0; a < t.length; a++) e = t[a], fe.captions[a] = [], fe.captions[a] = e.split("\n");
                                    fe.captions.shift(), n("Successfully loaded the caption file via AJAX.") } else n("There was a problem loading the caption file via AJAX.", !0) }, l.open("get", t, !0), l.send() } if ("Safari" === fe.browser.name && fe.browser.version >= 7) { n("Safari 7+ detected; removing track from DOM."), s = fe.media.getElementsByTagName("track"); for (var c = 0; c < s.length; c++) fe.media.removeChild(s[c]) } } else f(fe.container, C.classes.captions.enabled) } }

        function j() { if ("audio" != fe.type && C.fullscreen.enabled) { var e = F.supportsFullScreen;
                e || C.fullscreen.fallback && !I() ? (n((e ? "Native" : "Fallback") + " fullscreen enabled."), f(fe.container, C.classes.fullscreen.enabled, !0)) : n("Fullscreen not supported and fallback disabled."), g(fe.buttons.fullscreen, !1), C.fullscreen.hideControls && f(fe.container, C.classes.fullscreen.hideControls, !0) } }

        function D() { fe.media.play() }

        function _() { fe.media.pause() }

        function W(e) { e === !0 ? D() : e === !1 ? _() : fe.media[fe.media.paused ? "play" : "pause"]() }

        function Y(e) { "number" != typeof e && (e = C.seekTime), U(fe.media.currentTime - e) }

        function z(e) { "number" != typeof e && (e = C.seekTime), U(fe.media.currentTime + e) }

        function U(e) { var t = 0,
                r = fe.media.paused; "number" == typeof e ? t = e : "object" != typeof e || "input" !== e.type && "change" !== e.type || (t = e.target.value / e.target.max * fe.media.duration), 0 > t ? t = 0 : t > fe.media.duration && (t = fe.media.duration); try { fe.media.currentTime = t.toFixed(1) } catch (a) {} "youtube" == fe.type && (fe.embed.seekTo(t), r && _(), v(fe.media, "timeupdate")), n("Seeking to " + fe.media.currentTime + " seconds"), w(t) }

        function X() { f(fe.container, C.classes.playing, !fe.media.paused), f(fe.container, C.classes.stopped, fe.media.paused) }

        function J(e) {
            function t() { f(fe.container, C.classes.hover, !0), window.clearTimeout(a), s || (a = window.setTimeout(function() { f(fe.container, C.classes.hover, !1) }, 2e3)) }

            function n(e) { s = "mouseenter" === e.type } var r = F.supportsFullScreen;
            e && e.type === F.fullScreenEventName ? fe.isFullscreen = F.isFullScreen(fe.container) : r ? (F.isFullScreen(fe.container) ? F.cancelFullScreen() : F.requestFullScreen(fe.container), fe.isFullscreen = F.isFullScreen(fe.container)) : (fe.isFullscreen = !fe.isFullscreen, fe.isFullscreen ? (y(document, "keyup", $), document.body.style.overflow = "hidden") : (b(document, "keyup", $), document.body.style.overflow = "")), f(fe.container, C.classes.fullscreen.active, fe.isFullscreen), g(fe.buttons.fullscreen, fe.isFullscreen); var a, s = !1;
            C.fullscreen.hideControls && (f(fe.controls, C.classes.hover, !1), m(fe.controls, "mouseenter mouseleave", n, fe.isFullscreen), m(fe.container, "mousemove", t, fe.isFullscreen)) }

        function $(e) { 27 === (e.which || e.charCode || e.keyCode) && fe.isFullscreen && J() }

        function G(e) { "undefined" == typeof e && (e = C.storage.enabled && x().supported ? window.localStorage[C.storage.key] || C.volume : C.volume), e > 10 && (e = 10), 0 > e && (e = 0), fe.media.volume = parseFloat(e / 10), "youtube" == fe.type && (fe.embed.setVolume(100 * fe.media.volume), v(fe.media, "volumechange")), fe.media.muted && e > 0 && K() }

        function K(e) { "boolean" != typeof e && (e = !fe.media.muted), g(fe.buttons.mute, e), fe.media.muted = e, "youtube" === fe.type && (fe.embed[fe.media.muted ? "mute" : "unMute"](), v(fe.media, "volumechange")) }

        function Q() { var e = fe.media.muted ? 0 : 10 * fe.media.volume;
            fe.supported.full && fe.volume && (fe.volume.value = e), C.storage.enabled && x().supported && window.localStorage.setItem(C.storage.key, e), f(fe.container, C.classes.muted, 0 === e), fe.supported.full && fe.buttons.mute && g(fe.buttons.mute, 0 === e) }

        function Z(e) { fe.supported.full && fe.buttons.captions && ("boolean" != typeof e && (e = -1 === fe.container.className.indexOf(C.classes.captions.active)), g(fe.buttons.captions, e), f(fe.container, C.classes.captions.active, e)) }

        function ee(e) { var t = "waiting" === e.type;
            clearTimeout(fe.loadingTimer), fe.loadingTimer = setTimeout(function() { f(fe.container, C.classes.loading, t) }, t ? 250 : 0) }

        function te(e) { var t = fe.progress.played.bar,
                n = fe.progress.played.text,
                r = 0; if (e) switch (e.type) {
                case "timeupdate":
                case "seeking":
                    r = h(fe.media.currentTime, fe.media.duration), "timeupdate" == e.type && fe.buttons.seek && (fe.buttons.seek.value = r); break;
                case "change":
                case "input":
                    r = e.target.value; break;
                case "playing":
                case "progress":
                    t = fe.progress.buffer.bar, n = fe.progress.buffer.text, r = function() { var e = fe.media.buffered; return e && e.length ? h(e.end(0), fe.media.duration) : "number" == typeof e ? 100 * e : 0 }() }
            t && (t.value = r), n && (n.innerHTML = r) }

        function ne(e, t) { if (t) { fe.secs = parseInt(e % 60), fe.mins = parseInt(e / 60 % 60), fe.hours = parseInt(e / 60 / 60 % 60); var n = parseInt(fe.media.duration / 60 / 60 % 60) > 0;
                fe.secs = ("0" + fe.secs).slice(-2), fe.mins = ("0" + fe.mins).slice(-2), t.innerHTML = (n ? fe.hours + ":" : "") + fe.mins + ":" + fe.secs } }

        function re() { var e = fe.media.duration || 0;!fe.duration && C.displayDuration && fe.media.paused && ne(e, fe.currentTime), fe.duration && ne(e, fe.duration) }

        function ae(e) { ne(fe.media.currentTime, fe.currentTime), te(e) }

        function se() { for (var e = fe.media.querySelectorAll("source"), t = e.length - 1; t >= 0; t--) c(e[t]);
            fe.media.removeAttribute("src") }

        function oe(e) { if (e.src) { var t = document.createElement("source");
                d(t, e), p(fe.media, t) } }

        function ie(e) { if ("youtube" === fe.type && "string" == typeof e) return fe.embed.destroy(), H(e), void ae(); if (_(), U(), se(), "string" == typeof e) oe({ src: e });
            else if (e.constructor === Array)
                for (var t in e) oe(e[t]);
            fe.supported.full && (ae(), X()), fe.media.load(), (null !== fe.media.getAttribute("autoplay") || C.autoplay) && D() }

        function ue(e) { "video" === fe.type && fe.media.setAttribute("poster", e) }

        function le() {
            function e() { var e = document.activeElement;
                e = e && e != document.body ? document.querySelector(":focus") : null; for (var t in fe.buttons) { var n = fe.buttons[t];
                    f(n, "tab-focus", n === e) } } var t = "IE" == fe.browser.name ? "change" : "input";
            y(window, "keyup", function(t) { var n = t.keyCode ? t.keyCode : t.which;
                9 == n && e() }); for (var n in fe.buttons) { var r = fe.buttons[n];
                y(r, "blur", function() { f(r, "tab-focus", !1) }) }
            y(fe.buttons.play, "click", function() { D(), setTimeout(function() { fe.buttons.pause.focus() }, 100) }), y(fe.buttons.pause, "click", function() { _(), setTimeout(function() { fe.buttons.play.focus() }, 100) }), y(fe.buttons.restart, "click", U), y(fe.buttons.rewind, "click", Y), y(fe.buttons.forward, "click", z), y(fe.buttons.seek, t, U), y(fe.volume, t, function() { G(this.value) }), y(fe.buttons.mute, "click", K), y(fe.buttons.fullscreen, "click", J), F.supportsFullScreen && y(document, F.fullScreenEventName, J), y(fe.media, "timeupdate seeking", ae), y(fe.media, "timeupdate", w), y(fe.media, "loadedmetadata", re), y(fe.buttons.captions, "click", Z), y(fe.media, "ended", function() { "video" === fe.type && (fe.captionsContainer.innerHTML = ""), X() }), y(fe.media, "progress playing", te), y(fe.media, "volumechange", Q), y(fe.media, "play pause", X), y(fe.media, "waiting canplay seeked", ee), "video" === fe.type && C.click && y(fe.videoContainer, "click", function() { fe.media.paused ? v(fe.buttons.play, "click") : fe.media.ended ? (U(), v(fe.buttons.play, "click")) : v(fe.buttons.pause, "click") }) }

        function ce() { if (!fe.init) return null; if (fe.container.setAttribute("class", C.selectors.container.replace(".", "")), fe.init = !1, c(M(C.selectors.controls)), "youtube" === fe.type) return void fe.embed.destroy(); "video" === fe.type && (c(M(C.selectors.captions)), l(fe.videoContainer)), fe.media.setAttribute("controls", ""); var e = fe.media.cloneNode(!0);
            fe.media.parentNode.replaceChild(e, fe.media) }

        function pe() { if (fe.init) return null;
            F = k(), fe.browser = r(), fe.media = fe.container.querySelectorAll("audio, video, div")[0]; var t = fe.media.tagName.toLowerCase(); if ("div" === t ? fe.type = fe.media.getAttribute("data-type") : fe.type = t, fe.supported = e.supported(fe.type), !fe.supported.basic) return !1; if (n(fe.browser.name + " " + fe.browser.version), V(), "video" == fe.type || "audio" == fe.type) { if (!fe.supported.full) return void(fe.init = !0);
                de(), C.displayDuration && re(), q() }
            fe.init = !0 }

        function de() { return L(), O() ? (B(), G(), Q(), j(), void le()) : !1 } var fe = this; return fe.container = o, pe(), fe.init ? { media: fe.media, play: D, pause: _, restart: U, rewind: Y, forward: z, seek: U, source: ie, poster: ue, setVolume: G, togglePlay: W, toggleMute: K, toggleCaptions: Z, toggleFullscreen: J, isFullscreen: function() { return fe.isFullscreen || !1 }, support: function(e) { return a(fe, e) }, destroy: ce, restore: pe } : {} } var F, C, S = { youtube: [] },
        E = { enabled: !0, debug: !1, autoplay: !1, seekTime: 10, volume: 5, click: !0, tooltips: !1, displayDuration: !0, iconPrefix: "icon", selectors: { container: ".player", controls: ".player-controls", labels: "[data-player] .sr-only, label .sr-only", buttons: { seek: '[data-player="seek"]', play: '[data-player="play"]', pause: '[data-player="pause"]', restart: '[data-player="restart"]', rewind: '[data-player="rewind"]', forward: '[data-player="fast-forward"]', mute: '[data-player="mute"]', volume: '[data-player="volume"]', captions: '[data-player="captions"]', fullscreen: '[data-player="fullscreen"]' }, progress: { container: ".player-progress", buffer: ".player-progress-buffer", played: ".player-progress-played" }, captions: ".player-captions", currentTime: ".player-current-time", duration: ".player-duration" }, classes: { videoWrapper: "player-video-wrapper", embedWrapper: "player-video-embed", type: "player-{0}", stopped: "stopped", playing: "playing", muted: "muted", loading: "loading", tooltip: "player-tooltip", hidden: "sr-only", hover: "player-hover", captions: { enabled: "captions-enabled", active: "captions-active" }, fullscreen: { enabled: "fullscreen-enabled", active: "fullscreen-active", hideControls: "fullscreen-hide-controls" } }, captions: { defaultActive: !1 }, fullscreen: { enabled: !0, fallback: !0, hideControls: !0 }, storage: { enabled: !0, key: "plyr_volume" }, controls: ["restart", "rewind", "play", "fast-forward", "current-time", "duration", "mute", "volume", "captions", "fullscreen"], i18n: { restart: "Restart", rewind: "Rewind {seektime} secs", play: "Play", pause: "Pause", forward: "Forward {seektime} secs", played: "played", buffered: "buffered", currentTime: "Current time", duration: "Duration", volume: "Volume", toggleMute: "Toggle Mute", toggleCaptions: "Toggle Captions", toggleFullscreen: "Toggle Fullscreen" } };
    e.supported = function(e) { var t, n, a = r(),
            s = "IE" === a.name && a.version <= 9,
            o = /iPhone|iPod/i.test(navigator.userAgent),
            i = !!document.createElement("audio").canPlayType,
            u = !!document.createElement("video").canPlayType; switch (e) {
            case "video":
                t = u, n = t && !s && !o; break;
            case "audio":
                t = i, n = t && !s; break;
            case "youtube":
                t = !0, n = !s && !o; break;
            default:
                t = i && u, n = t && !s } return { basic: t, full: n } }, e.setup = function(t) { if (C = w(E, t), !C.enabled || !e.supported().basic) return !1; for (var n = document.querySelectorAll(C.selectors.container), r = [], a = n.length - 1; a >= 0; a--) { var s = n[a]; if ("undefined" == typeof s.plyr) { var o = new T(s);
                s.plyr = Object.keys(o).length ? o : !1, "function" == typeof C.onSetup && C.onSetup.apply(s.plyr) }
            r.push(s.plyr) } return r } }(this.plyr = this.plyr || {});