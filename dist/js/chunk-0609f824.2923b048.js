(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-0609f824"], {
        "0262": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "content g2-content"
                    }, [e.options && e.options.api ? n("div", {
                        staticClass: "video-content"
                    }, [n("iframe", {
                        attrs: {
                            width: "100%",
                            height: "100%",
                            src: e.apiVideoUrl,
                            frameborder: "0",
                            border: "0",
                            marginwidth: "0",
                            marginheight: "0",
                            scrolling: "no",
                            allowtransparency: "true",
                            allowfullscreen: "true"
                        }
                    })]) : n("div", [n("vue-plyr", {
                        ref: "plyr",
                        attrs: {
                            options: e.options
                        }
                    }, [n("video", {
                        attrs: {
                            controls: "",
                            crossorigin: "",
                            playsinline: ""
                        }
                    }, [n("source", {
                        attrs: {
                            src: e.videoUrl,
                            type: "video/mp4"
                        }
                    }), n("track", {
                        attrs: {
                            kind: "captions",
                            label: "Default",
                            srclang: "default",
                            src: e.subtitle,
                            default: ""
                        }
                    })])])], 1), n("div", {
                        staticClass: "card"
                    }, [n("header", {
                        staticClass: "card-header"
                    }, [n("p", {
                        staticClass: "card-header-title"
                    }, [e._m(0), e._v(" " + e._s(e.$t("page.video.play")) + " / "), e._m(1), e._v(" " + e._s(e.$t("page.video.download")) + " ")])]), n("div", {
                        staticClass: "card-content"
                    }, [n("div", {
                        staticClass: "content"
                    }, [n("div", {
                        staticClass: "field"
                    }, [n("label", {
                        staticClass: "label"
                    }, [e._v(" " + e._s(e.$t("page.video.link")) + " "), n("a", {
                        staticClass: "button is-text index-button-copy",
                        on: {
                            click: e.copy
                        }
                    }, [e._v(" " + e._s(e.$t("copy.text")) + " ")])]), n("div", {
                        staticClass: "control"
                    }, [n("input", {
                        staticClass: "input",
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: e.videoUrl
                        }
                    })])]), n("div", {
                        staticClass: "columns is-mobile is-multiline has-text-centered"
                    }, e._l(e.players, (function(t, i) {
                        return n("div", {
                            key: i,
                            staticClass: "column"
                        }, [n("p", {
                            staticClass: "heading"
                        }, [n("a", {
                            attrs: {
                                href: t.scheme
                            }
                        }, [n("figure", {
                            staticClass: "image is-48x48",
                            staticStyle: {
                                margin: "0 auto"
                            }
                        }, [n("img", {
                            staticClass: "icon",
                            attrs: {
                                src: t.icon
                            }
                        })])])]), n("p", {}, [e._v(e._s(t.name))])])
                    })), 0)])])])])
                },
                r = [function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("span", {
                        staticClass: "icon"
                    }, [n("i", {
                        staticClass: "fa fa-play-circle",
                        attrs: {
                            "aria-hidden": "true"
                        }
                    })])
                }, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("span", {
                        staticClass: "icon"
                    }, [n("i", {
                        staticClass: "fa fa-download",
                        attrs: {
                            "aria-hidden": "true"
                        }
                    })])
                }],
                o = n("6a54"),
                a = o["a"],
                s = n("2877"),
                l = Object(s["a"])(a, i, r, !1, null, null, null);
            t["default"] = l.exports
        },
        "048a": function(e, t, n) {
            (function(t) {
                "object" == typeof navigator && function(t, n) {
                    e.exports = n()
                }(0, (function() {
                    "use strict";

                    function e(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }

                    function n(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }

                    function i(e, t, i) {
                        return t && n(e.prototype, t), i && n(e, i), e
                    }

                    function r(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }

                    function o(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            t && (i = i.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), n.push.apply(n, i)
                        }
                        return n
                    }

                    function a(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? o(Object(n), !0).forEach((function(t) {
                                r(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }

                    function s(e, t) {
                        if (null == e) return {};
                        var n, i, r = function(e, t) {
                            if (null == e) return {};
                            var n, i, r = {},
                                o = Object.keys(e);
                            for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                        }
                        return r
                    }

                    function l(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = [],
                                    i = !0,
                                    r = !1,
                                    o = void 0;
                                try {
                                    for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                                } catch (e) {
                                    r = !0, o = e
                                } finally {
                                    try {
                                        i || null == s.return || s.return()
                                    } finally {
                                        if (r) throw o
                                    }
                                }
                                return n
                            }
                        }(e, t) || u(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function c(e) {
                        return function(e) {
                            if (Array.isArray(e)) return p(e)
                        }(e) || function(e) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                        }(e) || u(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function u(e, t) {
                        if (e) {
                            if ("string" == typeof e) return p(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(e, t) : void 0
                        }
                    }

                    function p(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                        return i
                    }

                    function d(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }

                    function h(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }

                    function f(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            t && (i = i.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), n.push.apply(n, i)
                        }
                        return n
                    }

                    function m(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? f(Object(n), !0).forEach((function(t) {
                                h(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }
                    var g = {
                        addCSS: !0,
                        thumbWidth: 15,
                        watch: !0
                    };

                    function y(e, t) {
                        return function() {
                            return Array.from(document.querySelectorAll(t)).includes(this)
                        }.call(e, t)
                    }
                    var b = function(e) {
                            return null != e ? e.constructor : null
                        },
                        v = function(e, t) {
                            return !!(e && t && e instanceof t)
                        },
                        _ = function(e) {
                            return null == e
                        },
                        w = function(e) {
                            return b(e) === Object
                        },
                        k = function(e) {
                            return b(e) === String
                        },
                        x = function(e) {
                            return Array.isArray(e)
                        },
                        T = function(e) {
                            return v(e, NodeList)
                        },
                        A = k,
                        C = x,
                        E = T,
                        S = function(e) {
                            return v(e, Element)
                        },
                        P = function(e) {
                            return v(e, Event)
                        },
                        I = function(e) {
                            return _(e) || (k(e) || x(e) || T(e)) && !e.length || w(e) && !Object.keys(e).length
                        };

                    function M(e, t) {
                        if (1 > t) {
                            var n = function(e) {
                                var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                                return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
                            }(t);
                            return parseFloat(e.toFixed(n))
                        }
                        return Math.round(e / t) * t
                    }
                    var R, N, O, L = function() {
                            function e(t, n) {
                                (function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                })(this, e), S(t) ? this.element = t : A(t) && (this.element = document.querySelector(t)), S(this.element) && I(this.element.rangeTouch) && (this.config = m({}, g, {}, n), this.init())
                            }
                            return function(e, t, n) {
                                t && d(e.prototype, t), n && d(e, n)
                            }(e, [{
                                key: "init",
                                value: function() {
                                    e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this)
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null)
                                }
                            }, {
                                key: "listeners",
                                value: function(e) {
                                    var t = this,
                                        n = e ? "addEventListener" : "removeEventListener";
                                    ["touchstart", "touchmove", "touchend"].forEach((function(e) {
                                        t.element[n](e, (function(e) {
                                            return t.set(e)
                                        }), !1)
                                    }))
                                }
                            }, {
                                key: "get",
                                value: function(t) {
                                    if (!e.enabled || !P(t)) return null;
                                    var n, i = t.target,
                                        r = t.changedTouches[0],
                                        o = parseFloat(i.getAttribute("min")) || 0,
                                        a = parseFloat(i.getAttribute("max")) || 100,
                                        s = parseFloat(i.getAttribute("step")) || 1,
                                        l = i.getBoundingClientRect(),
                                        c = 100 / l.width * (this.config.thumbWidth / 2) / 100;
                                    return 0 > (n = 100 / l.width * (r.clientX - l.left)) ? n = 0 : 100 < n && (n = 100), 50 > n ? n -= (100 - 2 * n) * c : 50 < n && (n += 2 * (n - 50) * c), o + M(n / 100 * (a - o), s)
                                }
                            }, {
                                key: "set",
                                value: function(t) {
                                    e.enabled && P(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), function(e, t) {
                                        if (e && t) {
                                            var n = new Event(t, {
                                                bubbles: !0
                                            });
                                            e.dispatchEvent(n)
                                        }
                                    }(t.target, "touchend" === t.type ? "change" : "input"))
                                }
                            }], [{
                                key: "setup",
                                value: function(t) {
                                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                        i = null;
                                    if (I(t) || A(t) ? i = Array.from(document.querySelectorAll(A(t) ? t : 'input[type="range"]')) : S(t) ? i = [t] : E(t) ? i = Array.from(t) : C(t) && (i = t.filter(S)), I(i)) return null;
                                    var r = m({}, g, {}, n);
                                    if (A(t) && r.watch) {
                                        var o = new MutationObserver((function(n) {
                                            Array.from(n).forEach((function(n) {
                                                Array.from(n.addedNodes).forEach((function(n) {
                                                    S(n) && y(n, t) && new e(n, r)
                                                }))
                                            }))
                                        }));
                                        o.observe(document.body, {
                                            childList: !0,
                                            subtree: !0
                                        })
                                    }
                                    return i.map((function(t) {
                                        return new e(t, n)
                                    }))
                                }
                            }, {
                                key: "enabled",
                                get: function() {
                                    return "ontouchstart" in document.documentElement
                                }
                            }]), e
                        }(),
                        B = function(e) {
                            return null != e ? e.constructor : null
                        },
                        D = function(e, t) {
                            return Boolean(e && t && e instanceof t)
                        },
                        U = function(e) {
                            return null == e
                        },
                        j = function(e) {
                            return B(e) === Object
                        },
                        F = function(e) {
                            return B(e) === String
                        },
                        z = function(e) {
                            return B(e) === Function
                        },
                        q = function(e) {
                            return Array.isArray(e)
                        },
                        H = function(e) {
                            return D(e, NodeList)
                        },
                        Y = function(e) {
                            return U(e) || (F(e) || q(e) || H(e)) && !e.length || j(e) && !Object.keys(e).length
                        },
                        V = U,
                        W = j,
                        $ = function(e) {
                            return B(e) === Number && !Number.isNaN(e)
                        },
                        K = F,
                        X = function(e) {
                            return B(e) === Boolean
                        },
                        J = z,
                        Q = q,
                        G = H,
                        Z = function(e) {
                            return D(e, Element)
                        },
                        ee = function(e) {
                            return D(e, Event)
                        },
                        te = function(e) {
                            return D(e, KeyboardEvent)
                        },
                        ne = function(e) {
                            return D(e, TextTrack) || !U(e) && F(e.kind)
                        },
                        ie = function(e) {
                            return D(e, Promise) && z(e.then)
                        },
                        re = function(e) {
                            if (D(e, window.URL)) return !0;
                            if (!F(e)) return !1;
                            var t = e;
                            e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));
                            try {
                                return !Y(new URL(t).hostname)
                            } catch (e) {
                                return !1
                            }
                        },
                        oe = Y,
                        ae = (R = document.createElement("span"), N = {
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "oTransitionEnd otransitionend",
                            transition: "transitionend"
                        }, O = Object.keys(N).find((function(e) {
                            return void 0 !== R.style[e]
                        })), !!K(O) && N[O]);

                    function se(e, t) {
                        setTimeout((function() {
                            try {
                                e.hidden = !0, e.offsetHeight, e.hidden = !1
                            } catch (e) {}
                        }), t)
                    }
                    var le = {
                        isIE:
                            /* @cc_on!@ */
                            !!document.documentMode,
                        isEdge: window.navigator.userAgent.includes("Edge"),
                        isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
                        isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
                        isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
                    };

                    function ce(e, t) {
                        return t.split(".").reduce((function(e, t) {
                            return e && e[t]
                        }), e)
                    }

                    function ue() {
                        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                        if (!n.length) return e;
                        var o = n.shift();
                        return W(o) ? (Object.keys(o).forEach((function(t) {
                            W(o[t]) ? (Object.keys(e).includes(t) || Object.assign(e, r({}, t, {})), ue(e[t], o[t])) : Object.assign(e, r({}, t, o[t]))
                        })), ue.apply(void 0, [e].concat(n))) : e
                    }

                    function pe(e, t) {
                        var n = e.length ? e : [e];
                        Array.from(n).reverse().forEach((function(e, n) {
                            var i = n > 0 ? t.cloneNode(!0) : t,
                                r = e.parentNode,
                                o = e.nextSibling;
                            i.appendChild(e), o ? r.insertBefore(i, o) : r.appendChild(i)
                        }))
                    }

                    function de(e, t) {
                        Z(e) && !oe(t) && Object.entries(t).filter((function(e) {
                            var t = l(e, 2)[1];
                            return !V(t)
                        })).forEach((function(t) {
                            var n = l(t, 2),
                                i = n[0],
                                r = n[1];
                            return e.setAttribute(i, r)
                        }))
                    }

                    function he(e, t, n) {
                        var i = document.createElement(e);
                        return W(t) && de(i, t), K(n) && (i.innerText = n), i
                    }

                    function fe(e, t, n, i) {
                        Z(t) && t.appendChild(he(e, n, i))
                    }

                    function me(e) {
                        G(e) || Q(e) ? Array.from(e).forEach(me) : Z(e) && Z(e.parentNode) && e.parentNode.removeChild(e)
                    }

                    function ge(e) {
                        if (Z(e))
                            for (var t = e.childNodes.length; t > 0;) e.removeChild(e.lastChild), t -= 1
                    }

                    function ye(e, t) {
                        return Z(t) && Z(t.parentNode) && Z(e) ? (t.parentNode.replaceChild(e, t), e) : null
                    }

                    function be(e, t) {
                        if (!K(e) || oe(e)) return {};
                        var n = {},
                            i = ue({}, t);
                        return e.split(",").forEach((function(e) {
                            var t = e.trim(),
                                r = t.replace(".", ""),
                                o = t.replace(/[[\]]/g, "").split("="),
                                a = l(o, 1)[0],
                                s = o.length > 1 ? o[1].replace(/["']/g, "") : "";
                            switch (t.charAt(0)) {
                                case ".":
                                    K(i.class) ? n.class = "".concat(i.class, " ").concat(r) : n.class = r;
                                    break;
                                case "#":
                                    n.id = t.replace("#", "");
                                    break;
                                case "[":
                                    n[a] = s
                            }
                        })), ue(i, n)
                    }

                    function ve(e, t) {
                        if (Z(e)) {
                            var n = t;
                            X(n) || (n = !e.hidden), e.hidden = n
                        }
                    }

                    function _e(e, t, n) {
                        if (G(e)) return Array.from(e).map((function(e) {
                            return _e(e, t, n)
                        }));
                        if (Z(e)) {
                            var i = "toggle";
                            return void 0 !== n && (i = n ? "add" : "remove"), e.classList[i](t), e.classList.contains(t)
                        }
                        return !1
                    }

                    function we(e, t) {
                        return Z(e) && e.classList.contains(t)
                    }

                    function ke(e, t) {
                        var n = Element.prototype;
                        return (n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function() {
                            return Array.from(document.querySelectorAll(t)).includes(this)
                        }).call(e, t)
                    }

                    function xe(e) {
                        return this.elements.container.querySelectorAll(e)
                    }

                    function Te(e) {
                        return this.elements.container.querySelector(e)
                    }

                    function Ae() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        Z(e) && (e.focus({
                            preventScroll: !0
                        }), t && _e(e, this.config.classNames.tabFocus))
                    }
                    var Ce, Ee = {
                            "audio/ogg": "vorbis",
                            "audio/wav": "1",
                            "video/webm": "vp8, vorbis",
                            "video/mp4": "avc1.42E01E, mp4a.40.2",
                            "video/ogg": "theora"
                        },
                        Se = {
                            audio: "canPlayType" in document.createElement("audio"),
                            video: "canPlayType" in document.createElement("video"),
                            check: function(e, t, n) {
                                var i = le.isIPhone && n && Se.playsinline,
                                    r = Se[e] || "html5" !== t;
                                return {
                                    api: r,
                                    ui: r && Se.rangeInput && ("video" !== e || !le.isIPhone || i)
                                }
                            },
                            pip: !(le.isIPhone || !J(he("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || he("video").disablePictureInPicture)),
                            airplay: J(window.WebKitPlaybackTargetAvailabilityEvent),
                            playsinline: "playsInline" in document.createElement("video"),
                            mime: function(e) {
                                if (oe(e)) return !1;
                                var t = l(e.split("/"), 1)[0],
                                    n = e;
                                if (!this.isHTML5 || t !== this.type) return !1;
                                Object.keys(Ee).includes(n) && (n += '; codecs="'.concat(Ee[e], '"'));
                                try {
                                    return Boolean(n && this.media.canPlayType(n).replace(/no/, ""))
                                } catch (e) {
                                    return !1
                                }
                            },
                            textTracks: "textTracks" in document.createElement("video"),
                            rangeInput: (Ce = document.createElement("input"), Ce.type = "range", "range" === Ce.type),
                            touch: "ontouchstart" in document.documentElement,
                            transitions: !1 !== ae,
                            reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
                        },
                        Pe = function() {
                            var e = !1;
                            try {
                                var t = Object.defineProperty({}, "passive", {
                                    get: function() {
                                        return e = !0, null
                                    }
                                });
                                window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
                            } catch (e) {}
                            return e
                        }();

                    function Ie(e, t, n) {
                        var i = this,
                            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                            o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                            a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                        if (e && "addEventListener" in e && !oe(t) && J(n)) {
                            var s = t.split(" "),
                                l = a;
                            Pe && (l = {
                                passive: o,
                                capture: a
                            }), s.forEach((function(t) {
                                i && i.eventListeners && r && i.eventListeners.push({
                                    element: e,
                                    type: t,
                                    callback: n,
                                    options: l
                                }), e[r ? "addEventListener" : "removeEventListener"](t, n, l)
                            }))
                        }
                    }

                    function Me(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                            r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        Ie.call(this, e, t, n, !0, i, r)
                    }

                    function Re(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                            r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        Ie.call(this, e, t, n, !1, i, r)
                    }

                    function Ne(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            i = arguments.length > 2 ? arguments[2] : void 0,
                            r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                            o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                            a = function a() {
                                Re(e, n, a, r, o);
                                for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++) l[c] = arguments[c];
                                i.apply(t, l)
                            };
                        Ie.call(this, e, n, a, !0, r, o)
                    }

                    function Oe(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        if (Z(e) && !oe(t)) {
                            var r = new CustomEvent(t, {
                                bubbles: n,
                                detail: a(a({}, i), {}, {
                                    plyr: this
                                })
                            });
                            e.dispatchEvent(r)
                        }
                    }

                    function Le() {
                        this && this.eventListeners && (this.eventListeners.forEach((function(e) {
                            var t = e.element,
                                n = e.type,
                                i = e.callback,
                                r = e.options;
                            t.removeEventListener(n, i, r)
                        })), this.eventListeners = [])
                    }

                    function Be() {
                        var e = this;
                        return new Promise((function(t) {
                            return e.ready ? setTimeout(t, 0) : Me.call(e, e.elements.container, "ready", t)
                        })).then((function() {}))
                    }

                    function De(e) {
                        ie(e) && e.then(null, (function() {}))
                    }

                    function Ue(e) {
                        return !!(Q(e) || K(e) && e.includes(":")) && (Q(e) ? e : e.split(":")).map(Number).every($)
                    }

                    function je(e) {
                        if (!Q(e) || !e.every($)) return null;
                        var t = l(e, 2),
                            n = t[0],
                            i = t[1],
                            r = function e(t, n) {
                                return 0 === n ? t : e(n, t % n)
                            }(n, i);
                        return [n / r, i / r]
                    }

                    function Fe(e) {
                        var t = function(e) {
                                return Ue(e) ? e.split(":").map(Number) : null
                            },
                            n = t(e);
                        if (null === n && (n = t(this.config.ratio)), null === n && !oe(this.embed) && Q(this.embed.ratio) && (n = this.embed.ratio), null === n && this.isHTML5) {
                            var i = this.media;
                            n = je([i.videoWidth, i.videoHeight])
                        }
                        return n
                    }

                    function ze(e) {
                        if (!this.isVideo) return {};
                        var t = this.elements.wrapper,
                            n = Fe.call(this, e),
                            i = l(Q(n) ? n : [0, 0], 2),
                            r = 100 / i[0] * i[1];
                        if (t.style.paddingBottom = "".concat(r, "%"), this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
                            var o = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
                                a = (o - r) / (o / 50);
                            this.media.style.transform = "translateY(-".concat(a, "%)")
                        } else this.isHTML5 && t.classList.toggle(this.config.classNames.videoFixedRatio, null !== n);
                        return {
                            padding: r,
                            ratio: n
                        }
                    }
                    var qe = {
                        getSources: function() {
                            var e = this;
                            return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter((function(t) {
                                var n = t.getAttribute("type");
                                return !!oe(n) || Se.mime.call(e, n)
                            })) : []
                        },
                        getQualityOptions: function() {
                            return this.config.quality.forced ? this.config.quality.options : qe.getSources.call(this).map((function(e) {
                                return Number(e.getAttribute("size"))
                            })).filter(Boolean)
                        },
                        setup: function() {
                            if (this.isHTML5) {
                                var e = this;
                                e.options.speed = e.config.speed.options, oe(this.config.ratio) || ze.call(e), Object.defineProperty(e.media, "quality", {
                                    get: function() {
                                        var t = qe.getSources.call(e).find((function(t) {
                                            return t.getAttribute("src") === e.source
                                        }));
                                        return t && Number(t.getAttribute("size"))
                                    },
                                    set: function(t) {
                                        if (e.quality !== t) {
                                            if (e.config.quality.forced && J(e.config.quality.onChange)) e.config.quality.onChange(t);
                                            else {
                                                var n = qe.getSources.call(e).find((function(e) {
                                                    return Number(e.getAttribute("size")) === t
                                                }));
                                                if (!n) return;
                                                var i = e.media,
                                                    r = i.currentTime,
                                                    o = i.paused,
                                                    a = i.preload,
                                                    s = i.readyState,
                                                    l = i.playbackRate;
                                                e.media.src = n.getAttribute("src"), ("none" !== a || s) && (e.once("loadedmetadata", (function() {
                                                    e.speed = l, e.currentTime = r, o || De(e.play())
                                                })), e.media.load())
                                            }
                                            Oe.call(e, e.media, "qualitychange", !1, {
                                                quality: t
                                            })
                                        }
                                    }
                                })
                            }
                        },
                        cancelRequests: function() {
                            this.isHTML5 && (me(qe.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
                        }
                    };

                    function He(e) {
                        return Q(e) ? e.filter((function(t, n) {
                            return e.indexOf(t) === n
                        })) : e
                    }

                    function Ye(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                        return oe(e) ? e : e.toString().replace(/{(\d+)}/g, (function(e, t) {
                            return n[t].toString()
                        }))
                    }
                    var Ve = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                            return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), n.toString())
                        },
                        We = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            return e.toString().replace(/\w\S*/g, (function(e) {
                                return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
                            }))
                        };

                    function $e() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = e.toString();
                        return t = Ve(t, "-", " "), t = Ve(t, "_", " "), t = We(t), Ve(t, " ", "")
                    }

                    function Ke(e) {
                        var t = document.createElement("div");
                        return t.appendChild(e), t.innerHTML
                    }
                    var Xe = {
                            pip: "PIP",
                            airplay: "AirPlay",
                            html5: "HTML5",
                            vimeo: "Vimeo",
                            youtube: "YouTube"
                        },
                        Je = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (oe(e) || oe(t)) return "";
                            var n = ce(t.i18n, e);
                            if (oe(n)) return Object.keys(Xe).includes(e) ? Xe[e] : "";
                            var i = {
                                "{seektime}": t.seekTime,
                                "{title}": t.title
                            };
                            return Object.entries(i).forEach((function(e) {
                                var t = l(e, 2),
                                    i = t[0],
                                    r = t[1];
                                n = Ve(n, i, r)
                            })), n
                        },
                        Qe = function() {
                            function t(n) {
                                e(this, t), this.enabled = n.config.storage.enabled, this.key = n.config.storage.key
                            }
                            return i(t, [{
                                key: "get",
                                value: function(e) {
                                    if (!t.supported || !this.enabled) return null;
                                    var n = window.localStorage.getItem(this.key);
                                    if (oe(n)) return null;
                                    var i = JSON.parse(n);
                                    return K(e) && e.length ? i[e] : i
                                }
                            }, {
                                key: "set",
                                value: function(e) {
                                    if (t.supported && this.enabled && W(e)) {
                                        var n = this.get();
                                        oe(n) && (n = {}), ue(n, e), window.localStorage.setItem(this.key, JSON.stringify(n))
                                    }
                                }
                            }], [{
                                key: "supported",
                                get: function() {
                                    try {
                                        return "localStorage" in window && (window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0)
                                    } catch (e) {
                                        return !1
                                    }
                                }
                            }]), t
                        }();

                    function Ge(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
                        return new Promise((function(n, i) {
                            try {
                                var r = new XMLHttpRequest;
                                if (!("withCredentials" in r)) return;
                                r.addEventListener("load", (function() {
                                    if ("text" === t) try {
                                        n(JSON.parse(r.responseText))
                                    } catch (e) {
                                        n(r.responseText)
                                    } else n(r.response)
                                })), r.addEventListener("error", (function() {
                                    throw new Error(r.status)
                                })), r.open("GET", e, !0), r.responseType = t, r.send()
                            } catch (e) {
                                i(e)
                            }
                        }))
                    }

                    function Ze(e, t) {
                        if (K(e)) {
                            var n = K(t),
                                i = function() {
                                    return null !== document.getElementById(t)
                                },
                                r = function(e, t) {
                                    e.innerHTML = t, n && i() || document.body.insertAdjacentElement("afterbegin", e)
                                };
                            if (!n || !i()) {
                                var o = Qe.supported,
                                    a = document.createElement("div");
                                if (a.setAttribute("hidden", ""), n && a.setAttribute("id", t), o) {
                                    var s = window.localStorage.getItem("".concat("cache", "-").concat(t));
                                    if (null !== s) {
                                        var l = JSON.parse(s);
                                        r(a, l.content)
                                    }
                                }
                                Ge(e).then((function(e) {
                                    oe(e) || (o && window.localStorage.setItem("".concat("cache", "-").concat(t), JSON.stringify({
                                        content: e
                                    })), r(a, e))
                                })).catch((function() {}))
                            }
                        }
                    }
                    var et = function(e) {
                            return Math.trunc(e / 60 / 60 % 60, 10)
                        },
                        tt = function(e) {
                            return Math.trunc(e / 60 % 60, 10)
                        },
                        nt = function(e) {
                            return Math.trunc(e % 60, 10)
                        };

                    function it() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (!$(e)) return it(void 0, t, n);
                        var i = function(e) {
                                return "0".concat(e).slice(-2)
                            },
                            r = et(e),
                            o = tt(e),
                            a = nt(e);
                        return r = t || r > 0 ? "".concat(r, ":") : "", "".concat(n && e > 0 ? "-" : "").concat(r).concat(i(o), ":").concat(i(a))
                    }
                    var rt = {
                        getIconUrl: function() {
                            var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || le.isIE && !window.svg4everybody;
                            return {
                                url: this.config.iconUrl,
                                cors: e
                            }
                        },
                        findElements: function() {
                            try {
                                return this.elements.controls = Te.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                                    play: xe.call(this, this.config.selectors.buttons.play),
                                    pause: Te.call(this, this.config.selectors.buttons.pause),
                                    restart: Te.call(this, this.config.selectors.buttons.restart),
                                    rewind: Te.call(this, this.config.selectors.buttons.rewind),
                                    fastForward: Te.call(this, this.config.selectors.buttons.fastForward),
                                    mute: Te.call(this, this.config.selectors.buttons.mute),
                                    pip: Te.call(this, this.config.selectors.buttons.pip),
                                    airplay: Te.call(this, this.config.selectors.buttons.airplay),
                                    settings: Te.call(this, this.config.selectors.buttons.settings),
                                    captions: Te.call(this, this.config.selectors.buttons.captions),
                                    fullscreen: Te.call(this, this.config.selectors.buttons.fullscreen)
                                }, this.elements.progress = Te.call(this, this.config.selectors.progress), this.elements.inputs = {
                                    seek: Te.call(this, this.config.selectors.inputs.seek),
                                    volume: Te.call(this, this.config.selectors.inputs.volume)
                                }, this.elements.display = {
                                    buffer: Te.call(this, this.config.selectors.display.buffer),
                                    currentTime: Te.call(this, this.config.selectors.display.currentTime),
                                    duration: Te.call(this, this.config.selectors.display.duration)
                                }, Z(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0
                            } catch (e) {
                                return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
                            }
                        },
                        createIcon: function(e, t) {
                            var n = rt.getIconUrl.call(this),
                                i = "".concat(n.cors ? "" : n.url, "#").concat(this.config.iconPrefix),
                                r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            de(r, ue(t, {
                                "aria-hidden": "true",
                                focusable: "false"
                            }));
                            var o = document.createElementNS("http://www.w3.org/2000/svg", "use"),
                                a = "".concat(i, "-").concat(e);
                            return "href" in o && o.setAttributeNS("http://www.w3.org/1999/xlink", "href", a), o.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), r.appendChild(o), r
                        },
                        createLabel: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = Je(e, this.config),
                                i = a(a({}, t), {}, {
                                    class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
                                });
                            return he("span", i, n)
                        },
                        createBadge: function(e) {
                            if (oe(e)) return null;
                            var t = he("span", {
                                class: this.config.classNames.menu.value
                            });
                            return t.appendChild(he("span", {
                                class: this.config.classNames.menu.badge
                            }, e)), t
                        },
                        createButton: function(e, t) {
                            var n = this,
                                i = ue({}, t),
                                r = function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                        t = e.toString();
                                    return (t = $e(t)).charAt(0).toLowerCase() + t.slice(1)
                                }(e),
                                o = {
                                    element: "button",
                                    toggle: !1,
                                    label: null,
                                    icon: null,
                                    labelPressed: null,
                                    iconPressed: null
                                };
                            switch (["element", "icon", "label"].forEach((function(e) {
                                Object.keys(i).includes(e) && (o[e] = i[e], delete i[e])
                            })), "button" !== o.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i.class.split(" ").some((function(e) {
                                return e === n.config.classNames.control
                            })) || ue(i, {
                                class: "".concat(i.class, " ").concat(this.config.classNames.control)
                            }) : i.class = this.config.classNames.control, e) {
                                case "play":
                                    o.toggle = !0, o.label = "play", o.labelPressed = "pause", o.icon = "play", o.iconPressed = "pause";
                                    break;
                                case "mute":
                                    o.toggle = !0, o.label = "mute", o.labelPressed = "unmute", o.icon = "volume", o.iconPressed = "muted";
                                    break;
                                case "captions":
                                    o.toggle = !0, o.label = "enableCaptions", o.labelPressed = "disableCaptions", o.icon = "captions-off", o.iconPressed = "captions-on";
                                    break;
                                case "fullscreen":
                                    o.toggle = !0, o.label = "enterFullscreen", o.labelPressed = "exitFullscreen", o.icon = "enter-fullscreen", o.iconPressed = "exit-fullscreen";
                                    break;
                                case "play-large":
                                    i.class += " ".concat(this.config.classNames.control, "--overlaid"), r = "play", o.label = "play", o.icon = "play";
                                    break;
                                default:
                                    oe(o.label) && (o.label = r), oe(o.icon) && (o.icon = e)
                            }
                            var a = he(o.element);
                            return o.toggle ? (a.appendChild(rt.createIcon.call(this, o.iconPressed, {
                                class: "icon--pressed"
                            })), a.appendChild(rt.createIcon.call(this, o.icon, {
                                class: "icon--not-pressed"
                            })), a.appendChild(rt.createLabel.call(this, o.labelPressed, {
                                class: "label--pressed"
                            })), a.appendChild(rt.createLabel.call(this, o.label, {
                                class: "label--not-pressed"
                            }))) : (a.appendChild(rt.createIcon.call(this, o.icon)), a.appendChild(rt.createLabel.call(this, o.label))), ue(i, be(this.config.selectors.buttons[r], i)), de(a, i), "play" === r ? (Q(this.elements.buttons[r]) || (this.elements.buttons[r] = []), this.elements.buttons[r].push(a)) : this.elements.buttons[r] = a, a
                        },
                        createRange: function(e, t) {
                            var n = he("input", ue(be(this.config.selectors.inputs[e]), {
                                type: "range",
                                min: 0,
                                max: 100,
                                step: .01,
                                value: 0,
                                autocomplete: "off",
                                role: "slider",
                                "aria-label": Je(e, this.config),
                                "aria-valuemin": 0,
                                "aria-valuemax": 100,
                                "aria-valuenow": 0
                            }, t));
                            return this.elements.inputs[e] = n, rt.updateRangeFill.call(this, n), L.setup(n), n
                        },
                        createProgress: function(e, t) {
                            var n = he("progress", ue(be(this.config.selectors.display[e]), {
                                min: 0,
                                max: 100,
                                value: 0,
                                role: "progressbar",
                                "aria-hidden": !0
                            }, t));
                            if ("volume" !== e) {
                                n.appendChild(he("span", null, "0"));
                                var i = {
                                        played: "played",
                                        buffer: "buffered"
                                    } [e],
                                    r = i ? Je(i, this.config) : "";
                                n.innerText = "% ".concat(r.toLowerCase())
                            }
                            return this.elements.display[e] = n, n
                        },
                        createTime: function(e, t) {
                            var n = be(this.config.selectors.display[e], t),
                                i = he("div", ue(n, {
                                    class: "".concat(n.class ? n.class : "", " ").concat(this.config.classNames.display.time, " ").trim(),
                                    "aria-label": Je(e, this.config)
                                }), "00:00");
                            return this.elements.display[e] = i, i
                        },
                        bindMenuItemShortcuts: function(e, t) {
                            var n = this;
                            Me.call(this, e, "keydown keyup", (function(i) {
                                if ([32, 38, 39, 40].includes(i.which) && (i.preventDefault(), i.stopPropagation(), "keydown" !== i.type)) {
                                    var r, o = ke(e, '[role="menuitemradio"]');
                                    !o && [32, 39].includes(i.which) ? rt.showMenuPanel.call(n, t, !0) : 32 !== i.which && (40 === i.which || o && 39 === i.which ? (r = e.nextElementSibling, Z(r) || (r = e.parentNode.firstElementChild)) : (r = e.previousElementSibling, Z(r) || (r = e.parentNode.lastElementChild)), Ae.call(n, r, !0))
                                }
                            }), !1), Me.call(this, e, "keyup", (function(e) {
                                13 === e.which && rt.focusFirstMenuItem.call(n, null, !0)
                            }))
                        },
                        createMenuItem: function(e) {
                            var t = this,
                                n = e.value,
                                i = e.list,
                                r = e.type,
                                o = e.title,
                                a = e.badge,
                                s = void 0 === a ? null : a,
                                l = e.checked,
                                c = void 0 !== l && l,
                                u = be(this.config.selectors.inputs[r]),
                                p = he("button", ue(u, {
                                    type: "button",
                                    role: "menuitemradio",
                                    class: "".concat(this.config.classNames.control, " ").concat(u.class ? u.class : "").trim(),
                                    "aria-checked": c,
                                    value: n
                                })),
                                d = he("span");
                            d.innerHTML = o, Z(s) && d.appendChild(s), p.appendChild(d), Object.defineProperty(p, "checked", {
                                enumerable: !0,
                                get: function() {
                                    return "true" === p.getAttribute("aria-checked")
                                },
                                set: function(e) {
                                    e && Array.from(p.parentNode.children).filter((function(e) {
                                        return ke(e, '[role="menuitemradio"]')
                                    })).forEach((function(e) {
                                        return e.setAttribute("aria-checked", "false")
                                    })), p.setAttribute("aria-checked", e ? "true" : "false")
                                }
                            }), this.listeners.bind(p, "click keyup", (function(e) {
                                if (!te(e) || 32 === e.which) {
                                    switch (e.preventDefault(), e.stopPropagation(), p.checked = !0, r) {
                                        case "language":
                                            t.currentTrack = Number(n);
                                            break;
                                        case "quality":
                                            t.quality = n;
                                            break;
                                        case "speed":
                                            t.speed = parseFloat(n)
                                    }
                                    rt.showMenuPanel.call(t, "home", te(e))
                                }
                            }), r, !1), rt.bindMenuItemShortcuts.call(this, p, r), i.appendChild(p)
                        },
                        formatTime: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (!$(e)) return e;
                            var n = et(this.duration) > 0;
                            return it(e, n, t)
                        },
                        updateTimeDisplay: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            Z(e) && $(t) && (e.innerText = rt.formatTime(t, n))
                        },
                        updateVolume: function() {
                            this.supported.ui && (Z(this.elements.inputs.volume) && rt.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), Z(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
                        },
                        setRange: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            Z(e) && (e.value = t, rt.updateRangeFill.call(this, e))
                        },
                        updateProgress: function(e) {
                            var t = this;
                            if (this.supported.ui && ee(e)) {
                                var n, i, r = 0;
                                if (e) switch (e.type) {
                                    case "timeupdate":
                                    case "seeking":
                                    case "seeked":
                                        n = this.currentTime, i = this.duration, r = 0 === n || 0 === i || Number.isNaN(n) || Number.isNaN(i) ? 0 : (n / i * 100).toFixed(2), "timeupdate" === e.type && rt.setRange.call(this, this.elements.inputs.seek, r);
                                        break;
                                    case "playing":
                                    case "progress":
                                        ! function(e, n) {
                                            var i = $(n) ? n : 0,
                                                r = Z(e) ? e : t.elements.display.buffer;
                                            if (Z(r)) {
                                                r.value = i;
                                                var o = r.getElementsByTagName("span")[0];
                                                Z(o) && (o.childNodes[0].nodeValue = i)
                                            }
                                        }(this.elements.display.buffer, 100 * this.buffered)
                                }
                            }
                        },
                        updateRangeFill: function(e) {
                            var t = ee(e) ? e.target : e;
                            if (Z(t) && "range" === t.getAttribute("type")) {
                                if (ke(t, this.config.selectors.inputs.seek)) {
                                    t.setAttribute("aria-valuenow", this.currentTime);
                                    var n = rt.formatTime(this.currentTime),
                                        i = rt.formatTime(this.duration),
                                        r = Je("seekLabel", this.config);
                                    t.setAttribute("aria-valuetext", r.replace("{currentTime}", n).replace("{duration}", i))
                                } else if (ke(t, this.config.selectors.inputs.volume)) {
                                    var o = 100 * t.value;
                                    t.setAttribute("aria-valuenow", o), t.setAttribute("aria-valuetext", "".concat(o.toFixed(1), "%"))
                                } else t.setAttribute("aria-valuenow", t.value);
                                le.isWebkit && t.style.setProperty("--value", "".concat(t.value / t.max * 100, "%"))
                            }
                        },
                        updateSeekTooltip: function(e) {
                            var t = this;
                            if (this.config.tooltips.seek && Z(this.elements.inputs.seek) && Z(this.elements.display.seekTooltip) && 0 !== this.duration) {
                                var n = "".concat(this.config.classNames.tooltip, "--visible"),
                                    i = function(e) {
                                        return _e(t.elements.display.seekTooltip, n, e)
                                    };
                                if (this.touch) i(!1);
                                else {
                                    var r = 0,
                                        o = this.elements.progress.getBoundingClientRect();
                                    if (ee(e)) r = 100 / o.width * (e.pageX - o.left);
                                    else {
                                        if (!we(this.elements.display.seekTooltip, n)) return;
                                        r = parseFloat(this.elements.display.seekTooltip.style.left, 10)
                                    }
                                    r < 0 ? r = 0 : r > 100 && (r = 100), rt.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * r), this.elements.display.seekTooltip.style.left = "".concat(r, "%"), ee(e) && ["mouseenter", "mouseleave"].includes(e.type) && i("mouseenter" === e.type)
                                }
                            }
                        },
                        timeUpdate: function(e) {
                            var t = !Z(this.elements.display.duration) && this.config.invertTime;
                            rt.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || rt.updateProgress.call(this, e)
                        },
                        durationUpdate: function() {
                            if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
                                if (this.duration >= Math.pow(2, 32)) return ve(this.elements.display.currentTime, !0), void ve(this.elements.progress, !0);
                                Z(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                                var e = Z(this.elements.display.duration);
                                !e && this.config.displayDuration && this.paused && rt.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && rt.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), rt.updateSeekTooltip.call(this)
                            }
                        },
                        toggleMenuButton: function(e, t) {
                            ve(this.elements.settings.buttons[e], !t)
                        },
                        updateSetting: function(e, t, n) {
                            var i = this.elements.settings.panels[e],
                                r = null,
                                o = t;
                            if ("captions" === e) r = this.currentTrack;
                            else {
                                if (r = oe(n) ? this[e] : n, oe(r) && (r = this.config[e].default), !oe(this.options[e]) && !this.options[e].includes(r)) return void this.debug.warn("Unsupported value of '".concat(r, "' for ").concat(e));
                                if (!this.config[e].options.includes(r)) return void this.debug.warn("Disabled value of '".concat(r, "' for ").concat(e))
                            }
                            if (Z(o) || (o = i && i.querySelector('[role="menu"]')), Z(o)) {
                                this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = rt.getLabel.call(this, e, r);
                                var a = o && o.querySelector('[value="'.concat(r, '"]'));
                                Z(a) && (a.checked = !0)
                            }
                        },
                        getLabel: function(e, t) {
                            switch (e) {
                                case "speed":
                                    return 1 === t ? Je("normal", this.config) : "".concat(t, "&times;");
                                case "quality":
                                    if ($(t)) {
                                        var n = Je("qualityLabel.".concat(t), this.config);
                                        return n.length ? n : "".concat(t, "p")
                                    }
                                    return We(t);
                                case "captions":
                                    return st.getLabel.call(this);
                                default:
                                    return null
                            }
                        },
                        setQualityMenu: function(e) {
                            var t = this;
                            if (Z(this.elements.settings.panels.quality)) {
                                var n = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                                Q(e) && (this.options.quality = He(e).filter((function(e) {
                                    return t.config.quality.options.includes(e)
                                })));
                                var i = !oe(this.options.quality) && this.options.quality.length > 1;
                                if (rt.toggleMenuButton.call(this, "quality", i), ge(n), rt.checkMenu.call(this), i) {
                                    var r = function(e) {
                                        var n = Je("qualityBadge.".concat(e), t.config);
                                        return n.length ? rt.createBadge.call(t, n) : null
                                    };
                                    this.options.quality.sort((function(e, n) {
                                        var i = t.config.quality.options;
                                        return i.indexOf(e) > i.indexOf(n) ? 1 : -1
                                    })).forEach((function(e) {
                                        rt.createMenuItem.call(t, {
                                            value: e,
                                            list: n,
                                            type: "quality",
                                            title: rt.getLabel.call(t, "quality", e),
                                            badge: r(e)
                                        })
                                    })), rt.updateSetting.call(this, "quality", n)
                                }
                            }
                        },
                        setCaptionsMenu: function() {
                            var e = this;
                            if (Z(this.elements.settings.panels.captions)) {
                                var t = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                                    n = st.getTracks.call(this),
                                    i = Boolean(n.length);
                                if (rt.toggleMenuButton.call(this, "captions", i), ge(t), rt.checkMenu.call(this), i) {
                                    var r = n.map((function(n, i) {
                                        return {
                                            value: i,
                                            checked: e.captions.toggled && e.currentTrack === i,
                                            title: st.getLabel.call(e, n),
                                            badge: n.language && rt.createBadge.call(e, n.language.toUpperCase()),
                                            list: t,
                                            type: "language"
                                        }
                                    }));
                                    r.unshift({
                                        value: -1,
                                        checked: !this.captions.toggled,
                                        title: Je("disabled", this.config),
                                        list: t,
                                        type: "language"
                                    }), r.forEach(rt.createMenuItem.bind(this)), rt.updateSetting.call(this, "captions", t)
                                }
                            }
                        },
                        setSpeedMenu: function() {
                            var e = this;
                            if (Z(this.elements.settings.panels.speed)) {
                                var t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                                this.options.speed = this.options.speed.filter((function(t) {
                                    return t >= e.minimumSpeed && t <= e.maximumSpeed
                                }));
                                var n = !oe(this.options.speed) && this.options.speed.length > 1;
                                rt.toggleMenuButton.call(this, "speed", n), ge(t), rt.checkMenu.call(this), n && (this.options.speed.forEach((function(n) {
                                    rt.createMenuItem.call(e, {
                                        value: n,
                                        list: t,
                                        type: "speed",
                                        title: rt.getLabel.call(e, "speed", n)
                                    })
                                })), rt.updateSetting.call(this, "speed", t))
                            }
                        },
                        checkMenu: function() {
                            var e = this.elements.settings.buttons,
                                t = !oe(e) && Object.values(e).some((function(e) {
                                    return !e.hidden
                                }));
                            ve(this.elements.settings.menu, !t)
                        },
                        focusFirstMenuItem: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (!this.elements.settings.popup.hidden) {
                                var n = e;
                                Z(n) || (n = Object.values(this.elements.settings.panels).find((function(e) {
                                    return !e.hidden
                                })));
                                var i = n.querySelector('[role^="menuitem"]');
                                Ae.call(this, i, t)
                            }
                        },
                        toggleMenu: function(e) {
                            var t = this.elements.settings.popup,
                                n = this.elements.buttons.settings;
                            if (Z(t) && Z(n)) {
                                var i = t.hidden,
                                    r = i;
                                if (X(e)) r = e;
                                else if (te(e) && 27 === e.which) r = !1;
                                else if (ee(e)) {
                                    var o = J(e.composedPath) ? e.composedPath()[0] : e.target,
                                        a = t.contains(o);
                                    if (a || !a && e.target !== n && r) return
                                }
                                n.setAttribute("aria-expanded", r), ve(t, !r), _e(this.elements.container, this.config.classNames.menu.open, r), r && te(e) ? rt.focusFirstMenuItem.call(this, null, !0) : r || i || Ae.call(this, n, te(e))
                            }
                        },
                        getMenuSize: function(e) {
                            var t = e.cloneNode(!0);
                            t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
                            var n = t.scrollWidth,
                                i = t.scrollHeight;
                            return me(t), {
                                width: n,
                                height: i
                            }
                        },
                        showMenuPanel: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                i = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(t));
                            if (Z(i)) {
                                var r = i.parentNode,
                                    o = Array.from(r.children).find((function(e) {
                                        return !e.hidden
                                    }));
                                if (Se.transitions && !Se.reducedMotion) {
                                    r.style.width = "".concat(o.scrollWidth, "px"), r.style.height = "".concat(o.scrollHeight, "px");
                                    var a = rt.getMenuSize.call(this, i),
                                        s = function t(n) {
                                            n.target === r && ["width", "height"].includes(n.propertyName) && (r.style.width = "", r.style.height = "", Re.call(e, r, ae, t))
                                        };
                                    Me.call(this, r, ae, s), r.style.width = "".concat(a.width, "px"), r.style.height = "".concat(a.height, "px")
                                }
                                ve(o, !0), ve(i, !1), rt.focusFirstMenuItem.call(this, i, n)
                            }
                        },
                        setDownloadUrl: function() {
                            var e = this.elements.buttons.download;
                            Z(e) && e.setAttribute("href", this.download)
                        },
                        create: function(e) {
                            var t = this,
                                n = rt.bindMenuItemShortcuts,
                                i = rt.createButton,
                                r = rt.createProgress,
                                o = rt.createRange,
                                a = rt.createTime,
                                s = rt.setQualityMenu,
                                l = rt.setSpeedMenu,
                                c = rt.showMenuPanel;
                            this.elements.controls = null, Q(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
                            var u = he("div", be(this.config.selectors.controls.wrapper));
                            this.elements.controls = u;
                            var p = {
                                class: "plyr__controls__item"
                            };
                            return He(Q(this.config.controls) ? this.config.controls : []).forEach((function(s) {
                                if ("restart" === s && u.appendChild(i.call(t, "restart", p)), "rewind" === s && u.appendChild(i.call(t, "rewind", p)), "play" === s && u.appendChild(i.call(t, "play", p)), "fast-forward" === s && u.appendChild(i.call(t, "fast-forward", p)), "progress" === s) {
                                    var l = he("div", {
                                            class: "".concat(p.class, " plyr__progress__container")
                                        }),
                                        d = he("div", be(t.config.selectors.progress));
                                    if (d.appendChild(o.call(t, "seek", {
                                            id: "plyr-seek-".concat(e.id)
                                        })), d.appendChild(r.call(t, "buffer")), t.config.tooltips.seek) {
                                        var h = he("span", {
                                            class: t.config.classNames.tooltip
                                        }, "00:00");
                                        d.appendChild(h), t.elements.display.seekTooltip = h
                                    }
                                    t.elements.progress = d, l.appendChild(t.elements.progress), u.appendChild(l)
                                }
                                if ("current-time" === s && u.appendChild(a.call(t, "currentTime", p)), "duration" === s && u.appendChild(a.call(t, "duration", p)), "mute" === s || "volume" === s) {
                                    var f = t.elements.volume;
                                    if (Z(f) && u.contains(f) || (f = he("div", ue({}, p, {
                                            class: "".concat(p.class, " plyr__volume").trim()
                                        })), t.elements.volume = f, u.appendChild(f)), "mute" === s && f.appendChild(i.call(t, "mute")), "volume" === s && !le.isIos) {
                                        var m = {
                                            max: 1,
                                            step: .05,
                                            value: t.config.volume
                                        };
                                        f.appendChild(o.call(t, "volume", ue(m, {
                                            id: "plyr-volume-".concat(e.id)
                                        })))
                                    }
                                }
                                if ("captions" === s && u.appendChild(i.call(t, "captions", p)), "settings" === s && !oe(t.config.settings)) {
                                    var g = he("div", ue({}, p, {
                                        class: "".concat(p.class, " plyr__menu").trim(),
                                        hidden: ""
                                    }));
                                    g.appendChild(i.call(t, "settings", {
                                        "aria-haspopup": !0,
                                        "aria-controls": "plyr-settings-".concat(e.id),
                                        "aria-expanded": !1
                                    }));
                                    var y = he("div", {
                                            class: "plyr__menu__container",
                                            id: "plyr-settings-".concat(e.id),
                                            hidden: ""
                                        }),
                                        b = he("div"),
                                        v = he("div", {
                                            id: "plyr-settings-".concat(e.id, "-home")
                                        }),
                                        _ = he("div", {
                                            role: "menu"
                                        });
                                    v.appendChild(_), b.appendChild(v), t.elements.settings.panels.home = v, t.config.settings.forEach((function(i) {
                                        var r = he("button", ue(be(t.config.selectors.buttons.settings), {
                                            type: "button",
                                            class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--forward"),
                                            role: "menuitem",
                                            "aria-haspopup": !0,
                                            hidden: ""
                                        }));
                                        n.call(t, r, i), Me.call(t, r, "click", (function() {
                                            c.call(t, i, !1)
                                        }));
                                        var o = he("span", null, Je(i, t.config)),
                                            a = he("span", {
                                                class: t.config.classNames.menu.value
                                            });
                                        a.innerHTML = e[i], o.appendChild(a), r.appendChild(o), _.appendChild(r);
                                        var s = he("div", {
                                                id: "plyr-settings-".concat(e.id, "-").concat(i),
                                                hidden: ""
                                            }),
                                            l = he("button", {
                                                type: "button",
                                                class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--back")
                                            });
                                        l.appendChild(he("span", {
                                            "aria-hidden": !0
                                        }, Je(i, t.config))), l.appendChild(he("span", {
                                            class: t.config.classNames.hidden
                                        }, Je("menuBack", t.config))), Me.call(t, s, "keydown", (function(e) {
                                            37 === e.which && (e.preventDefault(), e.stopPropagation(), c.call(t, "home", !0))
                                        }), !1), Me.call(t, l, "click", (function() {
                                            c.call(t, "home", !1)
                                        })), s.appendChild(l), s.appendChild(he("div", {
                                            role: "menu"
                                        })), b.appendChild(s), t.elements.settings.buttons[i] = r, t.elements.settings.panels[i] = s
                                    })), y.appendChild(b), g.appendChild(y), u.appendChild(g), t.elements.settings.popup = y, t.elements.settings.menu = g
                                }
                                if ("pip" === s && Se.pip && u.appendChild(i.call(t, "pip", p)), "airplay" === s && Se.airplay && u.appendChild(i.call(t, "airplay", p)), "download" === s) {
                                    var w = ue({}, p, {
                                        element: "a",
                                        href: t.download,
                                        target: "_blank"
                                    });
                                    t.isHTML5 && (w.download = "");
                                    var k = t.config.urls.download;
                                    !re(k) && t.isEmbed && ue(w, {
                                        icon: "logo-".concat(t.provider),
                                        label: t.provider
                                    }), u.appendChild(i.call(t, "download", w))
                                }
                                "fullscreen" === s && u.appendChild(i.call(t, "fullscreen", p))
                            })), this.isHTML5 && s.call(this, qe.getQualityOptions.call(this)), l.call(this), u
                        },
                        inject: function() {
                            var e = this;
                            if (this.config.loadSprite) {
                                var t = rt.getIconUrl.call(this);
                                t.cors && Ze(t.url, "sprite-plyr")
                            }
                            this.id = Math.floor(1e4 * Math.random());
                            var n = null;
                            this.elements.controls = null;
                            var i, r, o = {
                                    id: this.id,
                                    seektime: this.config.seekTime,
                                    title: this.config.title
                                },
                                a = !0;
                            if (J(this.config.controls) && (this.config.controls = this.config.controls.call(this, o)), this.config.controls || (this.config.controls = []), Z(this.config.controls) || K(this.config.controls) ? n = this.config.controls : (n = rt.create.call(this, {
                                    id: this.id,
                                    seektime: this.config.seekTime,
                                    speed: this.speed,
                                    quality: this.quality,
                                    captions: st.getLabel.call(this)
                                }), a = !1), a && K(this.config.controls) && (i = n, Object.entries(o).forEach((function(e) {
                                    var t = l(e, 2),
                                        n = t[0],
                                        r = t[1];
                                    i = Ve(i, "{".concat(n, "}"), r)
                                })), n = i), K(this.config.selectors.controls.container) && (r = document.querySelector(this.config.selectors.controls.container)), Z(r) || (r = this.elements.container), r[Z(n) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", n), Z(this.elements.controls) || rt.findElements.call(this), !oe(this.elements.buttons)) {
                                var s = function(t) {
                                    var n = e.config.classNames.controlPressed;
                                    Object.defineProperty(t, "pressed", {
                                        enumerable: !0,
                                        get: function() {
                                            return we(t, n)
                                        },
                                        set: function() {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                            _e(t, n, e)
                                        }
                                    })
                                };
                                Object.values(this.elements.buttons).filter(Boolean).forEach((function(e) {
                                    Q(e) || G(e) ? Array.from(e).filter(Boolean).forEach(s) : s(e)
                                }))
                            }
                            if (le.isEdge && se(r), this.config.tooltips.controls) {
                                var c = this.config,
                                    u = c.classNames,
                                    p = c.selectors,
                                    d = "".concat(p.controls.wrapper, " ").concat(p.labels, " .").concat(u.hidden),
                                    h = xe.call(this, d);
                                Array.from(h).forEach((function(t) {
                                    _e(t, e.config.classNames.hidden, !1), _e(t, e.config.classNames.tooltip, !0)
                                }))
                            }
                        }
                    };

                    function ot(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            n = e;
                        if (t) {
                            var i = document.createElement("a");
                            i.href = n, n = i.href
                        }
                        try {
                            return new URL(n)
                        } catch (e) {
                            return null
                        }
                    }

                    function at(e) {
                        var t = new URLSearchParams;
                        return W(e) && Object.entries(e).forEach((function(e) {
                            var n = l(e, 2),
                                i = n[0],
                                r = n[1];
                            t.set(i, r)
                        })), t
                    }
                    var st = {
                            setup: function() {
                                if (this.supported.ui)
                                    if (!this.isVideo || this.isYouTube || this.isHTML5 && !Se.textTracks) Q(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && rt.setCaptionsMenu.call(this);
                                    else {
                                        if (Z(this.elements.captions) || (this.elements.captions = he("div", be(this.config.selectors.captions)), function(e, t) {
                                                Z(e) && Z(t) && t.parentNode.insertBefore(e, t.nextSibling)
                                            }(this.elements.captions, this.elements.wrapper)), le.isIE && window.URL) {
                                            var e = this.media.querySelectorAll("track");
                                            Array.from(e).forEach((function(e) {
                                                var t = e.getAttribute("src"),
                                                    n = ot(t);
                                                null !== n && n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && Ge(t, "blob").then((function(t) {
                                                    e.setAttribute("src", window.URL.createObjectURL(t))
                                                })).catch((function() {
                                                    me(e)
                                                }))
                                            }))
                                        }
                                        var t = He((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((function(e) {
                                                return e.split("-")[0]
                                            }))),
                                            n = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                                        "auto" === n && (n = l(t, 1)[0]);
                                        var i = this.storage.get("captions");
                                        if (X(i) || (i = this.config.captions.active), Object.assign(this.captions, {
                                                toggled: !1,
                                                active: i,
                                                language: n,
                                                languages: t
                                            }), this.isHTML5) {
                                            var r = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                                            Me.call(this, this.media.textTracks, r, st.update.bind(this))
                                        }
                                        setTimeout(st.update.bind(this), 0)
                                    }
                            },
                            update: function() {
                                var e = this,
                                    t = st.getTracks.call(this, !0),
                                    n = this.captions,
                                    i = n.active,
                                    r = n.language,
                                    o = n.meta,
                                    a = n.currentTrackNode,
                                    s = Boolean(t.find((function(e) {
                                        return e.language === r
                                    })));
                                this.isHTML5 && this.isVideo && t.filter((function(e) {
                                    return !o.get(e)
                                })).forEach((function(t) {
                                    e.debug.log("Track added", t), o.set(t, {
                                        default: "showing" === t.mode
                                    }), "showing" === t.mode && (t.mode = "hidden"), Me.call(e, t, "cuechange", (function() {
                                        return st.updateCues.call(e)
                                    }))
                                })), (s && this.language !== r || !t.includes(a)) && (st.setLanguage.call(this, r), st.toggle.call(this, i && s)), _e(this.elements.container, this.config.classNames.captions.enabled, !oe(t)), Q(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && rt.setCaptionsMenu.call(this)
                            },
                            toggle: function(e) {
                                var t = this,
                                    n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                if (this.supported.ui) {
                                    var i = this.captions.toggled,
                                        r = this.config.classNames.captions.active,
                                        o = V(e) ? !i : e;
                                    if (o !== i) {
                                        if (n || (this.captions.active = o, this.storage.set({
                                                captions: o
                                            })), !this.language && o && !n) {
                                            var a = st.getTracks.call(this),
                                                s = st.findTrack.call(this, [this.captions.language].concat(c(this.captions.languages)), !0);
                                            return this.captions.language = s.language, void st.set.call(this, a.indexOf(s))
                                        }
                                        this.elements.buttons.captions && (this.elements.buttons.captions.pressed = o), _e(this.elements.container, r, o), this.captions.toggled = o, rt.updateSetting.call(this, "captions"), Oe.call(this, this.media, o ? "captionsenabled" : "captionsdisabled")
                                    }
                                    setTimeout((function() {
                                        o && t.captions.toggled && (t.captions.currentTrackNode.mode = "hidden")
                                    }))
                                }
                            },
                            set: function(e) {
                                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                    n = st.getTracks.call(this);
                                if (-1 !== e)
                                    if ($(e))
                                        if (e in n) {
                                            if (this.captions.currentTrack !== e) {
                                                this.captions.currentTrack = e;
                                                var i = n[e],
                                                    r = i || {},
                                                    o = r.language;
                                                this.captions.currentTrackNode = i, rt.updateSetting.call(this, "captions"), t || (this.captions.language = o, this.storage.set({
                                                    language: o
                                                })), this.isVimeo && this.embed.enableTextTrack(o), Oe.call(this, this.media, "languagechange")
                                            }
                                            st.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && st.updateCues.call(this)
                                        } else this.debug.warn("Track not found", e);
                                else this.debug.warn("Invalid caption argument", e);
                                else st.toggle.call(this, !1, t)
                            },
                            setLanguage: function(e) {
                                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                if (K(e)) {
                                    var n = e.toLowerCase();
                                    this.captions.language = n;
                                    var i = st.getTracks.call(this),
                                        r = st.findTrack.call(this, [n]);
                                    st.set.call(this, i.indexOf(r), t)
                                } else this.debug.warn("Invalid language argument", e)
                            },
                            getTracks: function() {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    n = Array.from((this.media || {}).textTracks || []);
                                return n.filter((function(n) {
                                    return !e.isHTML5 || t || e.captions.meta.has(n)
                                })).filter((function(e) {
                                    return ["captions", "subtitles"].includes(e.kind)
                                }))
                            },
                            findTrack: function(e) {
                                var t, n = this,
                                    i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    r = st.getTracks.call(this),
                                    o = function(e) {
                                        return Number((n.captions.meta.get(e) || {}).default)
                                    },
                                    a = Array.from(r).sort((function(e, t) {
                                        return o(t) - o(e)
                                    }));
                                return e.every((function(e) {
                                    return !(t = a.find((function(t) {
                                        return t.language === e
                                    })))
                                })), t || (i ? a[0] : void 0)
                            },
                            getCurrentTrack: function() {
                                return st.getTracks.call(this)[this.currentTrack]
                            },
                            getLabel: function(e) {
                                var t = e;
                                return !ne(t) && Se.textTracks && this.captions.toggled && (t = st.getCurrentTrack.call(this)), ne(t) ? oe(t.label) ? oe(t.language) ? Je("enabled", this.config) : e.language.toUpperCase() : t.label : Je("disabled", this.config)
                            },
                            updateCues: function(e) {
                                if (this.supported.ui)
                                    if (Z(this.elements.captions))
                                        if (V(e) || Array.isArray(e)) {
                                            var t = e;
                                            if (!t) {
                                                var n = st.getCurrentTrack.call(this);
                                                t = Array.from((n || {}).activeCues || []).map((function(e) {
                                                    return e.getCueAsHTML()
                                                })).map(Ke)
                                            }
                                            var i = t.map((function(e) {
                                                return e.trim()
                                            })).join("\n");
                                            if (i !== this.elements.captions.innerHTML) {
                                                ge(this.elements.captions);
                                                var r = he("span", be(this.config.selectors.caption));
                                                r.innerHTML = i, this.elements.captions.appendChild(r), Oe.call(this, this.media, "cuechange")
                                            }
                                        } else this.debug.warn("updateCues: Invalid input", e);
                                else this.debug.warn("No captions element to render to")
                            }
                        },
                        lt = {
                            enabled: !0,
                            title: "",
                            debug: !1,
                            autoplay: !1,
                            autopause: !0,
                            playsinline: !0,
                            seekTime: 10,
                            volume: 1,
                            muted: !1,
                            duration: null,
                            displayDuration: !0,
                            invertTime: !0,
                            toggleInvert: !0,
                            ratio: null,
                            clickToPlay: !0,
                            hideControls: !0,
                            resetOnEnd: !1,
                            disableContextMenu: !0,
                            loadSprite: !0,
                            iconPrefix: "plyr",
                            iconUrl: "https://cdn.plyr.io/3.6.2/plyr.svg",
                            blankVideo: "https://cdn.plyr.io/static/blank.mp4",
                            quality: {
                                default: 576,
                                options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
                                forced: !1,
                                onChange: null
                            },
                            loop: {
                                active: !1
                            },
                            speed: {
                                selected: 1,
                                options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
                            },
                            keyboard: {
                                focused: !0,
                                global: !1
                            },
                            tooltips: {
                                controls: !1,
                                seek: !0
                            },
                            captions: {
                                active: !1,
                                language: "auto",
                                update: !1
                            },
                            fullscreen: {
                                enabled: !0,
                                fallback: !0,
                                iosNative: !1
                            },
                            storage: {
                                enabled: !0,
                                key: "plyr"
                            },
                            controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
                            settings: ["captions", "quality", "speed"],
                            i18n: {
                                restart: "Restart",
                                rewind: "Rewind {seektime}s",
                                play: "Play",
                                pause: "Pause",
                                fastForward: "Forward {seektime}s",
                                seek: "Seek",
                                seekLabel: "{currentTime} of {duration}",
                                played: "Played",
                                buffered: "Buffered",
                                currentTime: "Current time",
                                duration: "Duration",
                                volume: "Volume",
                                mute: "Mute",
                                unmute: "Unmute",
                                enableCaptions: "Enable captions",
                                disableCaptions: "Disable captions",
                                download: "Download",
                                enterFullscreen: "Enter fullscreen",
                                exitFullscreen: "Exit fullscreen",
                                frameTitle: "Player for {title}",
                                captions: "Captions",
                                settings: "Settings",
                                pip: "PIP",
                                menuBack: "Go back to previous menu",
                                speed: "Speed",
                                normal: "Normal",
                                quality: "Quality",
                                loop: "Loop",
                                start: "Start",
                                end: "End",
                                all: "All",
                                reset: "Reset",
                                disabled: "Disabled",
                                enabled: "Enabled",
                                advertisement: "Ad",
                                qualityBadge: {
                                    2160: "4K",
                                    1440: "HD",
                                    1080: "HD",
                                    720: "HD",
                                    576: "SD",
                                    480: "SD"
                                }
                            },
                            urls: {
                                download: null,
                                vimeo: {
                                    sdk: "https://player.vimeo.com/api/player.js",
                                    iframe: "https://player.vimeo.com/video/{0}?{1}",
                                    api: "https://vimeo.com/api/v2/video/{0}.json"
                                },
                                youtube: {
                                    sdk: "https://www.youtube.com/iframe_api",
                                    api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
                                },
                                googleIMA: {
                                    sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
                                }
                            },
                            listeners: {
                                seek: null,
                                play: null,
                                pause: null,
                                restart: null,
                                rewind: null,
                                fastForward: null,
                                mute: null,
                                volume: null,
                                captions: null,
                                download: null,
                                fullscreen: null,
                                pip: null,
                                airplay: null,
                                speed: null,
                                quality: null,
                                loop: null,
                                language: null
                            },
                            events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
                            selectors: {
                                editable: "input, textarea, select, [contenteditable]",
                                container: ".plyr",
                                controls: {
                                    container: null,
                                    wrapper: ".plyr__controls"
                                },
                                labels: "[data-plyr]",
                                buttons: {
                                    play: '[data-plyr="play"]',
                                    pause: '[data-plyr="pause"]',
                                    restart: '[data-plyr="restart"]',
                                    rewind: '[data-plyr="rewind"]',
                                    fastForward: '[data-plyr="fast-forward"]',
                                    mute: '[data-plyr="mute"]',
                                    captions: '[data-plyr="captions"]',
                                    download: '[data-plyr="download"]',
                                    fullscreen: '[data-plyr="fullscreen"]',
                                    pip: '[data-plyr="pip"]',
                                    airplay: '[data-plyr="airplay"]',
                                    settings: '[data-plyr="settings"]',
                                    loop: '[data-plyr="loop"]'
                                },
                                inputs: {
                                    seek: '[data-plyr="seek"]',
                                    volume: '[data-plyr="volume"]',
                                    speed: '[data-plyr="speed"]',
                                    language: '[data-plyr="language"]',
                                    quality: '[data-plyr="quality"]'
                                },
                                display: {
                                    currentTime: ".plyr__time--current",
                                    duration: ".plyr__time--duration",
                                    buffer: ".plyr__progress__buffer",
                                    loop: ".plyr__progress__loop",
                                    volume: ".plyr__volume--display"
                                },
                                progress: ".plyr__progress",
                                captions: ".plyr__captions",
                                caption: ".plyr__caption"
                            },
                            classNames: {
                                type: "plyr--{0}",
                                provider: "plyr--{0}",
                                video: "plyr__video-wrapper",
                                embed: "plyr__video-embed",
                                videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                                embedContainer: "plyr__video-embed__container",
                                poster: "plyr__poster",
                                posterEnabled: "plyr__poster-enabled",
                                ads: "plyr__ads",
                                control: "plyr__control",
                                controlPressed: "plyr__control--pressed",
                                playing: "plyr--playing",
                                paused: "plyr--paused",
                                stopped: "plyr--stopped",
                                loading: "plyr--loading",
                                hover: "plyr--hover",
                                tooltip: "plyr__tooltip",
                                cues: "plyr__cues",
                                hidden: "plyr__sr-only",
                                hideControls: "plyr--hide-controls",
                                isIos: "plyr--is-ios",
                                isTouch: "plyr--is-touch",
                                uiSupported: "plyr--full-ui",
                                noTransition: "plyr--no-transition",
                                display: {
                                    time: "plyr__time"
                                },
                                menu: {
                                    value: "plyr__menu__value",
                                    badge: "plyr__badge",
                                    open: "plyr--menu-open"
                                },
                                captions: {
                                    enabled: "plyr--captions-enabled",
                                    active: "plyr--captions-active"
                                },
                                fullscreen: {
                                    enabled: "plyr--fullscreen-enabled",
                                    fallback: "plyr--fullscreen-fallback"
                                },
                                pip: {
                                    supported: "plyr--pip-supported",
                                    active: "plyr--pip-active"
                                },
                                airplay: {
                                    supported: "plyr--airplay-supported",
                                    active: "plyr--airplay-active"
                                },
                                tabFocus: "plyr__tab-focus",
                                previewThumbnails: {
                                    thumbContainer: "plyr__preview-thumb",
                                    thumbContainerShown: "plyr__preview-thumb--is-shown",
                                    imageContainer: "plyr__preview-thumb__image-container",
                                    timeContainer: "plyr__preview-thumb__time-container",
                                    scrubbingContainer: "plyr__preview-scrubbing",
                                    scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
                                }
                            },
                            attributes: {
                                embed: {
                                    provider: "data-plyr-provider",
                                    id: "data-plyr-embed-id"
                                }
                            },
                            ads: {
                                enabled: !1,
                                publisherId: "",
                                tagUrl: ""
                            },
                            previewThumbnails: {
                                enabled: !1,
                                src: ""
                            },
                            vimeo: {
                                byline: !1,
                                portrait: !1,
                                title: !1,
                                speed: !0,
                                transparent: !1,
                                premium: !1,
                                referrerPolicy: null
                            },
                            youtube: {
                                noCookie: !0,
                                rel: 0,
                                showinfo: 0,
                                iv_load_policy: 3,
                                modestbranding: 1
                            }
                        },
                        ct = "picture-in-picture",
                        ut = "inline",
                        pt = {
                            html5: "html5",
                            youtube: "youtube",
                            vimeo: "vimeo"
                        },
                        dt = "audio",
                        ht = "video",
                        ft = function() {},
                        mt = function() {
                            function t() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                e(this, t), this.enabled = window.console && n, this.enabled && this.log("Debugging enabled")
                            }
                            return i(t, [{
                                key: "log",
                                get: function() {
                                    return this.enabled ? Function.prototype.bind.call(console.log, console) : ft
                                }
                            }, {
                                key: "warn",
                                get: function() {
                                    return this.enabled ? Function.prototype.bind.call(console.warn, console) : ft
                                }
                            }, {
                                key: "error",
                                get: function() {
                                    return this.enabled ? Function.prototype.bind.call(console.error, console) : ft
                                }
                            }]), t
                        }(),
                        gt = function() {
                            function t(n) {
                                var i = this;
                                e(this, t), this.player = n, this.prefix = t.prefix, this.property = t.property, this.scrollPosition = {
                                    x: 0,
                                    y: 0
                                }, this.forceFallback = "force" === n.config.fullscreen.fallback, this.player.elements.fullscreen = n.config.fullscreen.container && function(e, t) {
                                    return (Element.prototype.closest || function() {
                                        var e = this;
                                        do {
                                            if (ke.matches(e, t)) return e;
                                            e = e.parentElement || e.parentNode
                                        } while (null !== e && 1 === e.nodeType);
                                        return null
                                    }).call(e, t)
                                }(this.player.elements.container, n.config.fullscreen.container), Me.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), (function() {
                                    i.onChange()
                                })), Me.call(this.player, this.player.elements.container, "dblclick", (function(e) {
                                    Z(i.player.elements.controls) && i.player.elements.controls.contains(e.target) || i.toggle()
                                })), Me.call(this, this.player.elements.container, "keydown", (function(e) {
                                    return i.trapFocus(e)
                                })), this.update()
                            }
                            return i(t, [{
                                key: "onChange",
                                value: function() {
                                    if (this.enabled) {
                                        var e = this.player.elements.buttons.fullscreen;
                                        Z(e) && (e.pressed = this.active), Oe.call(this.player, this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0)
                                    }
                                }
                            }, {
                                key: "toggleFallback",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                    if (e ? this.scrollPosition = {
                                            x: window.scrollX || 0,
                                            y: window.scrollY || 0
                                        } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", _e(this.target, this.player.config.classNames.fullscreen.fallback, e), le.isIos) {
                                        var t = document.head.querySelector('meta[name="viewport"]'),
                                            n = "viewport-fit=cover";
                                        t || (t = document.createElement("meta")).setAttribute("name", "viewport");
                                        var i = K(t.content) && t.content.includes(n);
                                        e ? (this.cleanupViewport = !i, i || (t.content += ",".concat(n))) : this.cleanupViewport && (t.content = t.content.split(",").filter((function(e) {
                                            return e.trim() !== n
                                        })).join(","))
                                    }
                                    this.onChange()
                                }
                            }, {
                                key: "trapFocus",
                                value: function(e) {
                                    if (!le.isIos && this.active && "Tab" === e.key && 9 === e.keyCode) {
                                        var t = document.activeElement,
                                            n = xe.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
                                            i = l(n, 1)[0],
                                            r = n[n.length - 1];
                                        t !== r || e.shiftKey ? t === i && e.shiftKey && (r.focus(), e.preventDefault()) : (i.focus(), e.preventDefault())
                                    }
                                }
                            }, {
                                key: "update",
                                value: function() {
                                    var e;
                                    this.enabled ? (e = this.forceFallback ? "Fallback (forced)" : t.native ? "Native" : "Fallback", this.player.debug.log("".concat(e, " fullscreen enabled"))) : this.player.debug.log("Fullscreen not supported and fallback disabled"), _e(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
                                }
                            }, {
                                key: "enter",
                                value: function() {
                                    this.enabled && (le.isIos && this.player.config.fullscreen.iosNative ? this.target.webkitEnterFullscreen() : !t.native || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? oe(this.prefix) || this.target["".concat(this.prefix, "Request").concat(this.property)]() : this.target.requestFullscreen({
                                        navigationUI: "hide"
                                    }))
                                }
                            }, {
                                key: "exit",
                                value: function() {
                                    if (this.enabled)
                                        if (le.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), De(this.player.play());
                                        else if (!t.native || this.forceFallback) this.toggleFallback(!1);
                                    else if (this.prefix) {
                                        if (!oe(this.prefix)) {
                                            var e = "moz" === this.prefix ? "Cancel" : "Exit";
                                            document["".concat(this.prefix).concat(e).concat(this.property)]()
                                        }
                                    } else(document.cancelFullScreen || document.exitFullscreen).call(document)
                                }
                            }, {
                                key: "toggle",
                                value: function() {
                                    this.active ? this.exit() : this.enter()
                                }
                            }, {
                                key: "usingNative",
                                get: function() {
                                    return t.native && !this.forceFallback
                                }
                            }, {
                                key: "enabled",
                                get: function() {
                                    return (t.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
                                }
                            }, {
                                key: "active",
                                get: function() {
                                    if (!this.enabled) return !1;
                                    if (!t.native || this.forceFallback) return we(this.target, this.player.config.classNames.fullscreen.fallback);
                                    var e = this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement;
                                    return e && e.shadowRoot ? e === this.target.getRootNode().host : e === this.target
                                }
                            }, {
                                key: "target",
                                get: function() {
                                    return le.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container
                                }
                            }], [{
                                key: "native",
                                get: function() {
                                    return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
                                }
                            }, {
                                key: "prefix",
                                get: function() {
                                    if (J(document.exitFullscreen)) return "";
                                    var e = "";
                                    return ["webkit", "moz", "ms"].some((function(t) {
                                        return !(!J(document["".concat(t, "ExitFullscreen")]) && !J(document["".concat(t, "CancelFullScreen")])) && (e = t, !0)
                                    })), e
                                }
                            }, {
                                key: "property",
                                get: function() {
                                    return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
                                }
                            }]), t
                        }();

                    function yt(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        return new Promise((function(n, i) {
                            var r = new Image,
                                o = function() {
                                    delete r.onload, delete r.onerror, (r.naturalWidth >= t ? n : i)(r)
                                };
                            Object.assign(r, {
                                onload: o,
                                onerror: o,
                                src: e
                            })
                        }))
                    }
                    var bt = {
                            addStyleHook: function() {
                                _e(this.elements.container, this.config.selectors.container.replace(".", ""), !0), _e(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
                            },
                            toggleNativeControls: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
                            },
                            build: function() {
                                var e = this;
                                if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void bt.toggleNativeControls.call(this, !0);
                                Z(this.elements.controls) || (rt.inject.call(this), this.listeners.controls()), bt.toggleNativeControls.call(this), this.isHTML5 && st.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, rt.updateVolume.call(this), rt.timeUpdate.call(this), bt.checkPlaying.call(this), _e(this.elements.container, this.config.classNames.pip.supported, Se.pip && this.isHTML5 && this.isVideo), _e(this.elements.container, this.config.classNames.airplay.supported, Se.airplay && this.isHTML5), _e(this.elements.container, this.config.classNames.isIos, le.isIos), _e(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout((function() {
                                    Oe.call(e, e.media, "ready")
                                }), 0), bt.setTitle.call(this), this.poster && bt.setPoster.call(this, this.poster, !1).catch((function() {})), this.config.duration && rt.durationUpdate.call(this)
                            },
                            setTitle: function() {
                                var e = Je("play", this.config);
                                if (K(this.config.title) && !oe(this.config.title) && (e += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach((function(t) {
                                        t.setAttribute("aria-label", e)
                                    })), this.isEmbed) {
                                    var t = Te.call(this, "iframe");
                                    if (!Z(t)) return;
                                    var n = oe(this.config.title) ? "video" : this.config.title,
                                        i = Je("frameTitle", this.config);
                                    t.setAttribute("title", i.replace("{title}", n))
                                }
                            },
                            togglePoster: function(e) {
                                _e(this.elements.container, this.config.classNames.posterEnabled, e)
                            },
                            setPoster: function(e) {
                                var t = this,
                                    n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                return n && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e), Be.call(this).then((function() {
                                    return yt(e)
                                })).catch((function(n) {
                                    throw e === t.poster && bt.togglePoster.call(t, !1), n
                                })).then((function() {
                                    if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster")
                                })).then((function() {
                                    return Object.assign(t.elements.poster.style, {
                                        backgroundImage: "url('".concat(e, "')"),
                                        backgroundSize: ""
                                    }), bt.togglePoster.call(t, !0), e
                                })))
                            },
                            checkPlaying: function(e) {
                                var t = this;
                                _e(this.elements.container, this.config.classNames.playing, this.playing), _e(this.elements.container, this.config.classNames.paused, this.paused), _e(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((function(e) {
                                    Object.assign(e, {
                                        pressed: t.playing
                                    }), e.setAttribute("aria-label", Je(t.playing ? "pause" : "play", t.config))
                                })), ee(e) && "timeupdate" === e.type || bt.toggleControls.call(this)
                            },
                            checkLoading: function(e) {
                                var t = this;
                                this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout((function() {
                                    _e(t.elements.container, t.config.classNames.loading, t.loading), bt.toggleControls.call(t)
                                }), this.loading ? 250 : 0)
                            },
                            toggleControls: function(e) {
                                var t = this.elements.controls;
                                if (t && this.config.hideControls) {
                                    var n = this.touch && this.lastSeekTime + 2e3 > Date.now();
                                    this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || n))
                                }
                            },
                            migrateStyles: function() {
                                var e = this;
                                Object.values(a({}, this.media.style)).filter((function(e) {
                                    return !oe(e) && e.startsWith("--plyr")
                                })).forEach((function(t) {
                                    e.elements.container.style.setProperty(t, e.media.style.getPropertyValue(t)), e.media.style.removeProperty(t)
                                })), oe(this.media.style) && this.media.removeAttribute("style")
                            }
                        },
                        vt = function() {
                            function t(n) {
                                e(this, t), this.player = n, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this)
                            }
                            return i(t, [{
                                key: "handleKey",
                                value: function(e) {
                                    var t = this.player,
                                        n = t.elements,
                                        i = e.keyCode ? e.keyCode : e.which,
                                        r = "keydown" === e.type,
                                        o = r && i === this.lastKey;
                                    if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && $(i))
                                        if (r) {
                                            var a = document.activeElement;
                                            if (Z(a)) {
                                                var s = t.config.selectors.editable;
                                                if (a !== n.inputs.seek && ke(a, s)) return;
                                                if (32 === e.which && ke(a, 'button, [role^="menuitem"]')) return
                                            }
                                            switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(i) && (e.preventDefault(), e.stopPropagation()), i) {
                                                case 48:
                                                case 49:
                                                case 50:
                                                case 51:
                                                case 52:
                                                case 53:
                                                case 54:
                                                case 55:
                                                case 56:
                                                case 57:
                                                    o || (t.currentTime = t.duration / 10 * (i - 48));
                                                    break;
                                                case 32:
                                                case 75:
                                                    o || De(t.togglePlay());
                                                    break;
                                                case 38:
                                                    t.increaseVolume(.1);
                                                    break;
                                                case 40:
                                                    t.decreaseVolume(.1);
                                                    break;
                                                case 77:
                                                    o || (t.muted = !t.muted);
                                                    break;
                                                case 39:
                                                    t.forward();
                                                    break;
                                                case 37:
                                                    t.rewind();
                                                    break;
                                                case 70:
                                                    t.fullscreen.toggle();
                                                    break;
                                                case 67:
                                                    o || t.toggleCaptions();
                                                    break;
                                                case 76:
                                                    t.loop = !t.loop
                                            }
                                            27 === i && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = i
                                        } else this.lastKey = null
                                }
                            }, {
                                key: "toggleMenu",
                                value: function(e) {
                                    rt.toggleMenu.call(this.player, e)
                                }
                            }, {
                                key: "firstTouch",
                                value: function() {
                                    var e = this.player,
                                        t = e.elements;
                                    e.touch = !0, _e(t.container, e.config.classNames.isTouch, !0)
                                }
                            }, {
                                key: "setTabFocus",
                                value: function(e) {
                                    var t = this.player,
                                        n = t.elements;
                                    if (clearTimeout(this.focusTimer), "keydown" !== e.type || 9 === e.which) {
                                        "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
                                        var i, r = e.timeStamp - this.lastKeyDown <= 20;
                                        ("focus" !== e.type || r) && (i = t.config.classNames.tabFocus, _e(xe.call(t, ".".concat(i)), i, !1), "focusout" !== e.type && (this.focusTimer = setTimeout((function() {
                                            var e = document.activeElement;
                                            n.container.contains(e) && _e(document.activeElement, t.config.classNames.tabFocus, !0)
                                        }), 10)))
                                    }
                                }
                            }, {
                                key: "global",
                                value: function() {
                                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                        t = this.player;
                                    t.config.keyboard.global && Ie.call(t, window, "keydown keyup", this.handleKey, e, !1), Ie.call(t, document.body, "click", this.toggleMenu, e), Ne.call(t, document.body, "touchstart", this.firstTouch), Ie.call(t, document.body, "keydown focus blur focusout", this.setTabFocus, e, !1, !0)
                                }
                            }, {
                                key: "container",
                                value: function() {
                                    var e = this.player,
                                        t = e.config,
                                        n = e.elements,
                                        i = e.timers;
                                    !t.keyboard.global && t.keyboard.focused && Me.call(e, n.container, "keydown keyup", this.handleKey, !1), Me.call(e, n.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (function(t) {
                                        var r = n.controls;
                                        r && "enterfullscreen" === t.type && (r.pressed = !1, r.hover = !1);
                                        var o = 0;
                                        ["touchstart", "touchmove", "mousemove"].includes(t.type) && (bt.toggleControls.call(e, !0), o = e.touch ? 3e3 : 2e3), clearTimeout(i.controls), i.controls = setTimeout((function() {
                                            return bt.toggleControls.call(e, !1)
                                        }), o)
                                    }));
                                    var r = function(t) {
                                            if (!t) return ze.call(e);
                                            var i = n.container.getBoundingClientRect(),
                                                r = i.width,
                                                o = i.height;
                                            return ze.call(e, "".concat(r, ":").concat(o))
                                        },
                                        o = function() {
                                            clearTimeout(i.resized), i.resized = setTimeout(r, 50)
                                        };
                                    Me.call(e, n.container, "enterfullscreen exitfullscreen", (function(t) {
                                        var i = e.fullscreen,
                                            a = i.target,
                                            s = i.usingNative;
                                        if (a === n.container && (e.isEmbed || !oe(e.config.ratio))) {
                                            var c = "enterfullscreen" === t.type,
                                                u = r(c);
                                            u.padding, ! function(t, n, i) {
                                                if (e.isVimeo && !e.config.vimeo.premium) {
                                                    var r = e.elements.wrapper.firstChild,
                                                        o = l(t, 2)[1],
                                                        a = l(Fe.call(e), 2),
                                                        s = a[0],
                                                        c = a[1];
                                                    r.style.maxWidth = i ? "".concat(o / c * s, "px") : null, r.style.margin = i ? "0 auto" : null
                                                }
                                            }(u.ratio, 0, c), s || (c ? Me.call(e, window, "resize", o) : Re.call(e, window, "resize", o))
                                        }
                                    }))
                                }
                            }, {
                                key: "media",
                                value: function() {
                                    var e = this,
                                        t = this.player,
                                        n = t.elements;
                                    if (Me.call(t, t.media, "timeupdate seeking seeked", (function(e) {
                                            return rt.timeUpdate.call(t, e)
                                        })), Me.call(t, t.media, "durationchange loadeddata loadedmetadata", (function(e) {
                                            return rt.durationUpdate.call(t, e)
                                        })), Me.call(t, t.media, "ended", (function() {
                                            t.isHTML5 && t.isVideo && t.config.resetOnEnd && (t.restart(), t.pause())
                                        })), Me.call(t, t.media, "progress playing seeking seeked", (function(e) {
                                            return rt.updateProgress.call(t, e)
                                        })), Me.call(t, t.media, "volumechange", (function(e) {
                                            return rt.updateVolume.call(t, e)
                                        })), Me.call(t, t.media, "playing play pause ended emptied timeupdate", (function(e) {
                                            return bt.checkPlaying.call(t, e)
                                        })), Me.call(t, t.media, "waiting canplay seeked playing", (function(e) {
                                            return bt.checkLoading.call(t, e)
                                        })), t.supported.ui && t.config.clickToPlay && !t.isAudio) {
                                        var i = Te.call(t, ".".concat(t.config.classNames.video));
                                        if (!Z(i)) return;
                                        Me.call(t, n.container, "click", (function(r) {
                                            ([n.container, i].includes(r.target) || i.contains(r.target)) && (t.touch && t.config.hideControls || (t.ended ? (e.proxy(r, t.restart, "restart"), e.proxy(r, (function() {
                                                De(t.play())
                                            }), "play")) : e.proxy(r, (function() {
                                                De(t.togglePlay())
                                            }), "play")))
                                        }))
                                    }
                                    t.supported.ui && t.config.disableContextMenu && Me.call(t, n.wrapper, "contextmenu", (function(e) {
                                        e.preventDefault()
                                    }), !1), Me.call(t, t.media, "volumechange", (function() {
                                        t.storage.set({
                                            volume: t.volume,
                                            muted: t.muted
                                        })
                                    })), Me.call(t, t.media, "ratechange", (function() {
                                        rt.updateSetting.call(t, "speed"), t.storage.set({
                                            speed: t.speed
                                        })
                                    })), Me.call(t, t.media, "qualitychange", (function(e) {
                                        rt.updateSetting.call(t, "quality", null, e.detail.quality)
                                    })), Me.call(t, t.media, "ready qualitychange", (function() {
                                        rt.setDownloadUrl.call(t)
                                    }));
                                    var r = t.config.events.concat(["keyup", "keydown"]).join(" ");
                                    Me.call(t, t.media, r, (function(e) {
                                        var i = e.detail,
                                            r = void 0 === i ? {} : i;
                                        "error" === e.type && (r = t.media.error), Oe.call(t, n.container, e.type, !0, r)
                                    }))
                                }
                            }, {
                                key: "proxy",
                                value: function(e, t, n) {
                                    var i = this.player,
                                        r = i.config.listeners[n],
                                        o = !0;
                                    J(r) && (o = r.call(i, e)), !1 !== o && J(t) && t.call(i, e)
                                }
                            }, {
                                key: "bind",
                                value: function(e, t, n, i) {
                                    var r = this,
                                        o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                                        a = this.player,
                                        s = a.config.listeners[i],
                                        l = J(s);
                                    Me.call(a, e, t, (function(e) {
                                        return r.proxy(e, n, i)
                                    }), o && !l)
                                }
                            }, {
                                key: "controls",
                                value: function() {
                                    var e = this,
                                        t = this.player,
                                        n = t.elements,
                                        i = le.isIE ? "change" : "input";
                                    if (n.buttons.play && Array.from(n.buttons.play).forEach((function(n) {
                                            e.bind(n, "click", (function() {
                                                De(t.togglePlay())
                                            }), "play")
                                        })), this.bind(n.buttons.restart, "click", t.restart, "restart"), this.bind(n.buttons.rewind, "click", t.rewind, "rewind"), this.bind(n.buttons.fastForward, "click", t.forward, "fastForward"), this.bind(n.buttons.mute, "click", (function() {
                                            t.muted = !t.muted
                                        }), "mute"), this.bind(n.buttons.captions, "click", (function() {
                                            return t.toggleCaptions()
                                        })), this.bind(n.buttons.download, "click", (function() {
                                            Oe.call(t, t.media, "download")
                                        }), "download"), this.bind(n.buttons.fullscreen, "click", (function() {
                                            t.fullscreen.toggle()
                                        }), "fullscreen"), this.bind(n.buttons.pip, "click", (function() {
                                            t.pip = "toggle"
                                        }), "pip"), this.bind(n.buttons.airplay, "click", t.airplay, "airplay"), this.bind(n.buttons.settings, "click", (function(e) {
                                            e.stopPropagation(), e.preventDefault(), rt.toggleMenu.call(t, e)
                                        }), null, !1), this.bind(n.buttons.settings, "keyup", (function(e) {
                                            var n = e.which;
                                            [13, 32].includes(n) && (13 !== n ? (e.preventDefault(), e.stopPropagation(), rt.toggleMenu.call(t, e)) : rt.focusFirstMenuItem.call(t, null, !0))
                                        }), null, !1), this.bind(n.settings.menu, "keydown", (function(e) {
                                            27 === e.which && rt.toggleMenu.call(t, e)
                                        })), this.bind(n.inputs.seek, "mousedown mousemove", (function(e) {
                                            var t = n.progress.getBoundingClientRect(),
                                                i = 100 / t.width * (e.pageX - t.left);
                                            e.currentTarget.setAttribute("seek-value", i)
                                        })), this.bind(n.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (function(e) {
                                            var n = e.currentTarget,
                                                i = e.keyCode ? e.keyCode : e.which;
                                            if (!te(e) || 39 === i || 37 === i) {
                                                t.lastSeekTime = Date.now();
                                                var r = n.hasAttribute("play-on-seeked"),
                                                    o = ["mouseup", "touchend", "keyup"].includes(e.type);
                                                r && o ? (n.removeAttribute("play-on-seeked"), De(t.play())) : !o && t.playing && (n.setAttribute("play-on-seeked", ""), t.pause())
                                            }
                                        })), le.isIos) {
                                        var r = xe.call(t, 'input[type="range"]');
                                        Array.from(r).forEach((function(t) {
                                            return e.bind(t, i, (function(e) {
                                                return se(e.target)
                                            }))
                                        }))
                                    }
                                    this.bind(n.inputs.seek, i, (function(e) {
                                        var n = e.currentTarget,
                                            i = n.getAttribute("seek-value");
                                        oe(i) && (i = n.value), n.removeAttribute("seek-value"), t.currentTime = i / n.max * t.duration
                                    }), "seek"), this.bind(n.progress, "mouseenter mouseleave mousemove", (function(e) {
                                        return rt.updateSeekTooltip.call(t, e)
                                    })), this.bind(n.progress, "mousemove touchmove", (function(e) {
                                        var n = t.previewThumbnails;
                                        n && n.loaded && n.startMove(e)
                                    })), this.bind(n.progress, "mouseleave touchend click", (function() {
                                        var e = t.previewThumbnails;
                                        e && e.loaded && e.endMove(!1, !0)
                                    })), this.bind(n.progress, "mousedown touchstart", (function(e) {
                                        var n = t.previewThumbnails;
                                        n && n.loaded && n.startScrubbing(e)
                                    })), this.bind(n.progress, "mouseup touchend", (function(e) {
                                        var n = t.previewThumbnails;
                                        n && n.loaded && n.endScrubbing(e)
                                    })), le.isWebkit && Array.from(xe.call(t, 'input[type="range"]')).forEach((function(n) {
                                        e.bind(n, "input", (function(e) {
                                            return rt.updateRangeFill.call(t, e.target)
                                        }))
                                    })), t.config.toggleInvert && !Z(n.display.duration) && this.bind(n.display.currentTime, "click", (function() {
                                        0 !== t.currentTime && (t.config.invertTime = !t.config.invertTime, rt.timeUpdate.call(t))
                                    })), this.bind(n.inputs.volume, i, (function(e) {
                                        t.volume = e.target.value
                                    }), "volume"), this.bind(n.controls, "mouseenter mouseleave", (function(e) {
                                        n.controls.hover = !t.touch && "mouseenter" === e.type
                                    })), n.fullscreen && Array.from(n.fullscreen.children).filter((function(e) {
                                        return !e.contains(n.container)
                                    })).forEach((function(i) {
                                        e.bind(i, "mouseenter mouseleave", (function(e) {
                                            n.controls.hover = !t.touch && "mouseenter" === e.type
                                        }))
                                    })), this.bind(n.controls, "mousedown mouseup touchstart touchend touchcancel", (function(e) {
                                        n.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
                                    })), this.bind(n.controls, "focusin", (function() {
                                        var i = t.config,
                                            r = t.timers;
                                        _e(n.controls, i.classNames.noTransition, !0), bt.toggleControls.call(t, !0), setTimeout((function() {
                                            _e(n.controls, i.classNames.noTransition, !1)
                                        }), 0);
                                        var o = e.touch ? 3e3 : 4e3;
                                        clearTimeout(r.controls), r.controls = setTimeout((function() {
                                            return bt.toggleControls.call(t, !1)
                                        }), o)
                                    })), this.bind(n.inputs.volume, "wheel", (function(e) {
                                        var n = e.webkitDirectionInvertedFromDevice,
                                            i = l([e.deltaX, -e.deltaY].map((function(e) {
                                                return n ? -e : e
                                            })), 2),
                                            r = i[0],
                                            o = i[1],
                                            a = Math.sign(Math.abs(r) > Math.abs(o) ? r : o);
                                        t.increaseVolume(a / 50);
                                        var s = t.media.volume;
                                        (1 === a && s < 1 || -1 === a && s > 0) && e.preventDefault()
                                    }), "volume", !1)
                                }
                            }]), t
                        }();
                    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof t || "undefined" != typeof self && self;
                    var _t = function(e, t) {
                        return e(t = {
                            exports: {}
                        }, t.exports), t.exports
                    }((function(e, t) {
                        e.exports = function() {
                            var e = function() {},
                                t = {},
                                n = {},
                                i = {};

                            function r(e, t) {
                                if (e) {
                                    var r = i[e];
                                    if (n[e] = t, r)
                                        for (; r.length;) r[0](e, t), r.splice(0, 1)
                                }
                            }

                            function o(t, n) {
                                t.call && (t = {
                                    success: t
                                }), n.length ? (t.error || e)(n) : (t.success || e)(t)
                            }

                            function a(t, n, i, r) {
                                var o, s, l = document,
                                    c = i.async,
                                    u = (i.numRetries || 0) + 1,
                                    p = i.before || e,
                                    d = t.replace(/[\?|#].*$/, ""),
                                    h = t.replace(/^(css|img)!/, "");
                                r = r || 0, /(^css!|\.css$)/.test(d) ? ((s = l.createElement("link")).rel = "stylesheet", s.href = h, (o = "hideFocus" in s) && s.relList && (o = 0, s.rel = "preload", s.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d) ? (s = l.createElement("img")).src = h : ((s = l.createElement("script")).src = t, s.async = void 0 === c || c), s.onload = s.onerror = s.onbeforeload = function(e) {
                                    var l = e.type[0];
                                    if (o) try {
                                        s.sheet.cssText.length || (l = "e")
                                    } catch (e) {
                                        18 != e.code && (l = "e")
                                    }
                                    if ("e" == l) {
                                        if ((r += 1) < u) return a(t, n, i, r)
                                    } else if ("preload" == s.rel && "style" == s.as) return s.rel = "stylesheet";
                                    n(t, l, e.defaultPrevented)
                                }, !1 !== p(t, s) && l.head.appendChild(s)
                            }

                            function s(e, n, i) {
                                var s, l;
                                if (n && n.trim && (s = n), l = (s ? i : n) || {}, s) {
                                    if (s in t) throw "LoadJS";
                                    t[s] = !0
                                }

                                function c(t, n) {
                                    ! function(e, t, n) {
                                        var i, r, o = (e = e.push ? e : [e]).length,
                                            s = o,
                                            l = [];
                                        for (i = function(e, n, i) {
                                                if ("e" == n && l.push(e), "b" == n) {
                                                    if (!i) return;
                                                    l.push(e)
                                                }--o || t(l)
                                            }, r = 0; r < s; r++) a(e[r], i, n)
                                    }(e, (function(e) {
                                        o(l, e), t && o({
                                            success: t,
                                            error: n
                                        }, e), r(s, e)
                                    }), l)
                                }
                                if (l.returnPromise) return new Promise(c);
                                c()
                            }
                            return s.ready = function(e, t) {
                                return function(e, t) {
                                    e = e.push ? e : [e];
                                    var r, o, a, s = [],
                                        l = e.length,
                                        c = l;
                                    for (r = function(e, n) {
                                            n.length && s.push(e), --c || t(s)
                                        }; l--;) o = e[l], (a = n[o]) ? r(o, a) : (i[o] = i[o] || []).push(r)
                                }(e, (function(e) {
                                    o(t, e)
                                })), s
                            }, s.done = function(e) {
                                r(e, [])
                            }, s.reset = function() {
                                t = {}, n = {}, i = {}
                            }, s.isDefined = function(e) {
                                return e in t
                            }, s
                        }()
                    }));

                    function wt(e) {
                        return new Promise((function(t, n) {
                            _t(e, {
                                success: t,
                                error: n
                            })
                        }))
                    }

                    function kt(e) {
                        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Oe.call(this, this.media, e ? "play" : "pause"))
                    }
                    var xt = {
                        setup: function() {
                            var e = this;
                            _e(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, ze.call(e), W(window.Vimeo) ? xt.ready.call(e) : wt(e.config.urls.vimeo.sdk).then((function() {
                                xt.ready.call(e)
                            })).catch((function(t) {
                                e.debug.warn("Vimeo SDK (player.js) failed to load", t)
                            }))
                        },
                        ready: function() {
                            var e = this,
                                t = this,
                                n = t.config.vimeo,
                                i = n.premium,
                                r = n.referrerPolicy,
                                o = s(n, ["premium", "referrerPolicy"]);
                            i && Object.assign(o, {
                                controls: !1,
                                sidedock: !1
                            });
                            var c = at(a({
                                    loop: t.config.loop.active,
                                    autoplay: t.autoplay,
                                    muted: t.muted,
                                    gesture: "media",
                                    playsinline: !this.config.fullscreen.iosNative
                                }, o)),
                                u = t.media.getAttribute("src");
                            oe(u) && (u = t.media.getAttribute(t.config.attributes.embed.id));
                            var p, d = oe(p = u) ? null : $(Number(p)) ? p : p.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : p,
                                h = he("iframe"),
                                f = Ye(t.config.urls.vimeo.iframe, d, c);
                            h.setAttribute("src", f), h.setAttribute("allowfullscreen", ""), h.setAttribute("allow", "autoplay,fullscreen,picture-in-picture"), oe(r) || h.setAttribute("referrerPolicy", r);
                            var m = t.poster;
                            if (i) h.setAttribute("data-poster", m), t.media = ye(h, t.media);
                            else {
                                var g = he("div", {
                                    class: t.config.classNames.embedContainer,
                                    "data-poster": m
                                });
                                g.appendChild(h), t.media = ye(g, t.media)
                            }
                            Ge(Ye(t.config.urls.vimeo.api, d), "json").then((function(e) {
                                if (!oe(e)) {
                                    var n = new URL(e[0].thumbnail_large);
                                    n.pathname = "".concat(n.pathname.split("_")[0], ".jpg"), bt.setPoster.call(t, n.href).catch((function() {}))
                                }
                            })), t.embed = new window.Vimeo.Player(h, {
                                autopause: t.config.autopause,
                                muted: t.muted
                            }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function() {
                                return kt.call(t, !0), t.embed.play()
                            }, t.media.pause = function() {
                                return kt.call(t, !1), t.embed.pause()
                            }, t.media.stop = function() {
                                t.pause(), t.currentTime = 0
                            };
                            var y = t.media.currentTime;
                            Object.defineProperty(t.media, "currentTime", {
                                get: function() {
                                    return y
                                },
                                set: function(e) {
                                    var n = t.embed,
                                        i = t.media,
                                        r = t.paused,
                                        o = t.volume,
                                        a = r && !n.hasPlayed;
                                    i.seeking = !0, Oe.call(t, i, "seeking"), Promise.resolve(a && n.setVolume(0)).then((function() {
                                        return n.setCurrentTime(e)
                                    })).then((function() {
                                        return a && n.pause()
                                    })).then((function() {
                                        return a && n.setVolume(o)
                                    })).catch((function() {}))
                                }
                            });
                            var b = t.config.speed.selected;
                            Object.defineProperty(t.media, "playbackRate", {
                                get: function() {
                                    return b
                                },
                                set: function(e) {
                                    t.embed.setPlaybackRate(e).then((function() {
                                        b = e, Oe.call(t, t.media, "ratechange")
                                    })).catch((function() {
                                        t.options.speed = [1]
                                    }))
                                }
                            });
                            var v = t.config.volume;
                            Object.defineProperty(t.media, "volume", {
                                get: function() {
                                    return v
                                },
                                set: function(e) {
                                    t.embed.setVolume(e).then((function() {
                                        v = e, Oe.call(t, t.media, "volumechange")
                                    }))
                                }
                            });
                            var _ = t.config.muted;
                            Object.defineProperty(t.media, "muted", {
                                get: function() {
                                    return _
                                },
                                set: function(e) {
                                    var n = !!X(e) && e;
                                    t.embed.setVolume(n ? 0 : t.config.volume).then((function() {
                                        _ = n, Oe.call(t, t.media, "volumechange")
                                    }))
                                }
                            });
                            var w, k = t.config.loop;
                            Object.defineProperty(t.media, "loop", {
                                get: function() {
                                    return k
                                },
                                set: function(e) {
                                    var n = X(e) ? e : t.config.loop.active;
                                    t.embed.setLoop(n).then((function() {
                                        k = n
                                    }))
                                }
                            }), t.embed.getVideoUrl().then((function(e) {
                                w = e, rt.setDownloadUrl.call(t)
                            })).catch((function(t) {
                                e.debug.warn(t)
                            })), Object.defineProperty(t.media, "currentSrc", {
                                get: function() {
                                    return w
                                }
                            }), Object.defineProperty(t.media, "ended", {
                                get: function() {
                                    return t.currentTime === t.duration
                                }
                            }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then((function(n) {
                                var i = l(n, 2),
                                    r = i[0],
                                    o = i[1];
                                t.embed.ratio = [r, o], ze.call(e)
                            })), t.embed.setAutopause(t.config.autopause).then((function(e) {
                                t.config.autopause = e
                            })), t.embed.getVideoTitle().then((function(n) {
                                t.config.title = n, bt.setTitle.call(e)
                            })), t.embed.getCurrentTime().then((function(e) {
                                y = e, Oe.call(t, t.media, "timeupdate")
                            })), t.embed.getDuration().then((function(e) {
                                t.media.duration = e, Oe.call(t, t.media, "durationchange")
                            })), t.embed.getTextTracks().then((function(e) {
                                t.media.textTracks = e, st.setup.call(t)
                            })), t.embed.on("cuechange", (function(e) {
                                var n = e.cues,
                                    i = (void 0 === n ? [] : n).map((function(e) {
                                        return function(e) {
                                            var t = document.createDocumentFragment(),
                                                n = document.createElement("div");
                                            return t.appendChild(n), n.innerHTML = e, t.firstChild.innerText
                                        }(e.text)
                                    }));
                                st.updateCues.call(t, i)
                            })), t.embed.on("loaded", (function() {
                                t.embed.getPaused().then((function(e) {
                                    kt.call(t, !e), e || Oe.call(t, t.media, "playing")
                                })), Z(t.embed.element) && t.supported.ui && t.embed.element.setAttribute("tabindex", -1)
                            })), t.embed.on("bufferstart", (function() {
                                Oe.call(t, t.media, "waiting")
                            })), t.embed.on("bufferend", (function() {
                                Oe.call(t, t.media, "playing")
                            })), t.embed.on("play", (function() {
                                kt.call(t, !0), Oe.call(t, t.media, "playing")
                            })), t.embed.on("pause", (function() {
                                kt.call(t, !1)
                            })), t.embed.on("timeupdate", (function(e) {
                                t.media.seeking = !1, y = e.seconds, Oe.call(t, t.media, "timeupdate")
                            })), t.embed.on("progress", (function(e) {
                                t.media.buffered = e.percent, Oe.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && Oe.call(t, t.media, "canplaythrough"), t.embed.getDuration().then((function(e) {
                                    e !== t.media.duration && (t.media.duration = e, Oe.call(t, t.media, "durationchange"))
                                }))
                            })), t.embed.on("seeked", (function() {
                                t.media.seeking = !1, Oe.call(t, t.media, "seeked")
                            })), t.embed.on("ended", (function() {
                                t.media.paused = !0, Oe.call(t, t.media, "ended")
                            })), t.embed.on("error", (function(e) {
                                t.media.error = e, Oe.call(t, t.media, "error")
                            })), setTimeout((function() {
                                return bt.build.call(t)
                            }), 0)
                        }
                    };

                    function Tt(e) {
                        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Oe.call(this, this.media, e ? "play" : "pause"))
                    }

                    function At(e) {
                        return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0
                    }
                    var Ct, Et = {
                            setup: function() {
                                var e = this;
                                if (_e(this.elements.wrapper, this.config.classNames.embed, !0), W(window.YT) && J(window.YT.Player)) Et.ready.call(this);
                                else {
                                    var t = window.onYouTubeIframeAPIReady;
                                    window.onYouTubeIframeAPIReady = function() {
                                        J(t) && t(), Et.ready.call(e)
                                    }, wt(this.config.urls.youtube.sdk).catch((function(t) {
                                        e.debug.warn("YouTube API failed to load", t)
                                    }))
                                }
                            },
                            getTitle: function(e) {
                                var t = this;
                                Ge(Ye(this.config.urls.youtube.api, e)).then((function(e) {
                                    if (W(e)) {
                                        var n = e.title,
                                            i = e.height,
                                            r = e.width;
                                        t.config.title = n, bt.setTitle.call(t), t.embed.ratio = [r, i]
                                    }
                                    ze.call(t)
                                })).catch((function() {
                                    ze.call(t)
                                }))
                            },
                            ready: function() {
                                var e = this,
                                    t = e.media && e.media.getAttribute("id");
                                if (oe(t) || !t.startsWith("youtube-")) {
                                    var n = e.media.getAttribute("src");
                                    oe(n) && (n = e.media.getAttribute(this.config.attributes.embed.id));
                                    var i, r, o = oe(i = n) ? null : i.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : i,
                                        a = (r = e.provider, "".concat(r, "-").concat(Math.floor(1e4 * Math.random()))),
                                        s = he("div", {
                                            id: a,
                                            "data-poster": e.poster
                                        });
                                    e.media = ye(s, e.media);
                                    var l = function(e) {
                                        return "https://i.ytimg.com/vi/".concat(o, "/").concat(e, "default.jpg")
                                    };
                                    yt(l("maxres"), 121).catch((function() {
                                        return yt(l("sd"), 121)
                                    })).catch((function() {
                                        return yt(l("hq"))
                                    })).then((function(t) {
                                        return bt.setPoster.call(e, t.src)
                                    })).then((function(t) {
                                        t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover")
                                    })).catch((function() {}));
                                    var c = e.config.youtube;
                                    e.embed = new window.YT.Player(a, {
                                        videoId: o,
                                        host: At(c),
                                        playerVars: ue({}, {
                                            autoplay: e.config.autoplay ? 1 : 0,
                                            hl: e.config.hl,
                                            controls: e.supported.ui ? 0 : 1,
                                            disablekb: 1,
                                            playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                                            cc_load_policy: e.captions.active ? 1 : 0,
                                            cc_lang_pref: e.config.captions.language,
                                            widget_referrer: window ? window.location.href : null
                                        }, c),
                                        events: {
                                            onError: function(t) {
                                                if (!e.media.error) {
                                                    var n = t.data,
                                                        i = {
                                                            2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                                            5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                                            100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                                            101: "The owner of the requested video does not allow it to be played in embedded players.",
                                                            150: "The owner of the requested video does not allow it to be played in embedded players."
                                                        } [n] || "An unknown error occured";
                                                    e.media.error = {
                                                        code: n,
                                                        message: i
                                                    }, Oe.call(e, e.media, "error")
                                                }
                                            },
                                            onPlaybackRateChange: function(t) {
                                                var n = t.target;
                                                e.media.playbackRate = n.getPlaybackRate(), Oe.call(e, e.media, "ratechange")
                                            },
                                            onReady: function(t) {
                                                if (!J(e.media.play)) {
                                                    var n = t.target;
                                                    Et.getTitle.call(e, o), e.media.play = function() {
                                                        Tt.call(e, !0), n.playVideo()
                                                    }, e.media.pause = function() {
                                                        Tt.call(e, !1), n.pauseVideo()
                                                    }, e.media.stop = function() {
                                                        n.stopVideo()
                                                    }, e.media.duration = n.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                                                        get: function() {
                                                            return Number(n.getCurrentTime())
                                                        },
                                                        set: function(t) {
                                                            e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, Oe.call(e, e.media, "seeking"), n.seekTo(t)
                                                        }
                                                    }), Object.defineProperty(e.media, "playbackRate", {
                                                        get: function() {
                                                            return n.getPlaybackRate()
                                                        },
                                                        set: function(e) {
                                                            n.setPlaybackRate(e)
                                                        }
                                                    });
                                                    var i = e.config.volume;
                                                    Object.defineProperty(e.media, "volume", {
                                                        get: function() {
                                                            return i
                                                        },
                                                        set: function(t) {
                                                            i = t, n.setVolume(100 * i), Oe.call(e, e.media, "volumechange")
                                                        }
                                                    });
                                                    var r = e.config.muted;
                                                    Object.defineProperty(e.media, "muted", {
                                                        get: function() {
                                                            return r
                                                        },
                                                        set: function(t) {
                                                            var i = X(t) ? t : r;
                                                            r = i, n[i ? "mute" : "unMute"](), Oe.call(e, e.media, "volumechange")
                                                        }
                                                    }), Object.defineProperty(e.media, "currentSrc", {
                                                        get: function() {
                                                            return n.getVideoUrl()
                                                        }
                                                    }), Object.defineProperty(e.media, "ended", {
                                                        get: function() {
                                                            return e.currentTime === e.duration
                                                        }
                                                    });
                                                    var a = n.getAvailablePlaybackRates();
                                                    e.options.speed = a.filter((function(t) {
                                                        return e.config.speed.options.includes(t)
                                                    })), e.supported.ui && e.media.setAttribute("tabindex", -1), Oe.call(e, e.media, "timeupdate"), Oe.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval((function() {
                                                        e.media.buffered = n.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && Oe.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), Oe.call(e, e.media, "canplaythrough"))
                                                    }), 200), setTimeout((function() {
                                                        return bt.build.call(e)
                                                    }), 50)
                                                }
                                            },
                                            onStateChange: function(t) {
                                                var n = t.target;
                                                switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(t.data) && (e.media.seeking = !1, Oe.call(e, e.media, "seeked")), t.data) {
                                                    case -1:
                                                        Oe.call(e, e.media, "timeupdate"), e.media.buffered = n.getVideoLoadedFraction(), Oe.call(e, e.media, "progress");
                                                        break;
                                                    case 0:
                                                        Tt.call(e, !1), e.media.loop ? (n.stopVideo(), n.playVideo()) : Oe.call(e, e.media, "ended");
                                                        break;
                                                    case 1:
                                                        e.config.autoplay || !e.media.paused || e.embed.hasPlayed ? (Tt.call(e, !0), Oe.call(e, e.media, "playing"), e.timers.playing = setInterval((function() {
                                                            Oe.call(e, e.media, "timeupdate")
                                                        }), 50), e.media.duration !== n.getDuration() && (e.media.duration = n.getDuration(), Oe.call(e, e.media, "durationchange"))) : e.media.pause();
                                                        break;
                                                    case 2:
                                                        e.muted || e.embed.unMute(), Tt.call(e, !1);
                                                        break;
                                                    case 3:
                                                        Oe.call(e, e.media, "waiting")
                                                }
                                                Oe.call(e, e.elements.container, "statechange", !1, {
                                                    code: t.data
                                                })
                                            }
                                        }
                                    })
                                }
                            }
                        },
                        St = {
                            setup: function() {
                                this.media ? (_e(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), _e(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && _e(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = he("div", {
                                    class: this.config.classNames.video
                                }), pe(this.media, this.elements.wrapper), this.elements.poster = he("div", {
                                    class: this.config.classNames.poster
                                }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? qe.setup.call(this) : this.isYouTube ? Et.setup.call(this) : this.isVimeo && xt.setup.call(this)) : this.debug.warn("No media element found!")
                            }
                        },
                        Pt = function() {
                            function t(n) {
                                var i = this;
                                e(this, t), this.player = n, this.config = n.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
                                    container: null,
                                    displayContainer: null
                                }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((function(e, t) {
                                    i.on("loaded", e), i.on("error", t)
                                })), this.load()
                            }
                            return i(t, [{
                                key: "load",
                                value: function() {
                                    var e = this;
                                    this.enabled && (W(window.google) && W(window.google.ima) ? this.ready() : wt(this.player.config.urls.googleIMA.sdk).then((function() {
                                        e.ready()
                                    })).catch((function() {
                                        e.trigger("error", new Error("Google IMA SDK failed to load"))
                                    })))
                                }
                            }, {
                                key: "ready",
                                value: function() {
                                    var e, t = this;
                                    this.enabled || ((e = this).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then((function() {
                                        t.clearSafetyTimer("onAdsManagerLoaded()")
                                    })), this.listeners(), this.setupIMA()
                                }
                            }, {
                                key: "setupIMA",
                                value: function() {
                                    var e = this;
                                    this.elements.container = he("div", {
                                        class: this.player.config.classNames.ads
                                    }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (function(t) {
                                        return e.onAdsManagerLoaded(t)
                                    }), !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function(t) {
                                        return e.onAdError(t)
                                    }), !1), this.requestAds()
                                }
                            }, {
                                key: "requestAds",
                                value: function() {
                                    var e = this.player.elements.container;
                                    try {
                                        var t = new google.ima.AdsRequest;
                                        t.adTagUrl = this.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t)
                                    } catch (e) {
                                        this.onAdError(e)
                                    }
                                }
                            }, {
                                key: "pollCountdown",
                                value: function() {
                                    var e = this,
                                        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                    if (!t) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
                                    var n = function() {
                                        var t = it(Math.max(e.manager.getRemainingTime(), 0)),
                                            n = "".concat(Je("advertisement", e.player.config), " - ").concat(t);
                                        e.elements.container.setAttribute("data-badge-text", n)
                                    };
                                    this.countdownTimer = setInterval(n, 100)
                                }
                            }, {
                                key: "onAdsManagerLoaded",
                                value: function(e) {
                                    var t = this;
                                    if (this.enabled) {
                                        var n = new google.ima.AdsRenderingSettings;
                                        n.restoreCustomPlaybackStateOnAdBreakComplete = !0, n.enablePreloading = !0, this.manager = e.getAdsManager(this.player, n), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function(e) {
                                            return t.onAdError(e)
                                        })), Object.keys(google.ima.AdEvent.Type).forEach((function(e) {
                                            t.manager.addEventListener(google.ima.AdEvent.Type[e], (function(e) {
                                                return t.onAdEvent(e)
                                            }))
                                        })), this.trigger("loaded")
                                    }
                                }
                            }, {
                                key: "addCuePoints",
                                value: function() {
                                    var e = this;
                                    oe(this.cuePoints) || this.cuePoints.forEach((function(t) {
                                        if (0 !== t && -1 !== t && t < e.player.duration) {
                                            var n = e.player.elements.progress;
                                            if (Z(n)) {
                                                var i = 100 / e.player.duration * t,
                                                    r = he("span", {
                                                        class: e.player.config.classNames.cues
                                                    });
                                                r.style.left = "".concat(i.toString(), "%"), n.appendChild(r)
                                            }
                                        }
                                    }))
                                }
                            }, {
                                key: "onAdEvent",
                                value: function(e) {
                                    var t = this,
                                        n = this.player.elements.container,
                                        i = e.getAd(),
                                        r = e.getAdData();
                                    switch (function(e) {
                                        Oe.call(t.player, t.player.media, "ads".concat(e.replace(/_/g, "").toLowerCase()))
                                    }(e.type), e.type) {
                                        case google.ima.AdEvent.Type.LOADED:
                                            this.trigger("loaded"), this.pollCountdown(!0), i.isLinear() || (i.width = n.offsetWidth, i.height = n.offsetHeight);
                                            break;
                                        case google.ima.AdEvent.Type.STARTED:
                                            this.manager.setVolume(this.player.volume);
                                            break;
                                        case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                                            this.player.ended ? this.loadAds() : this.loader.contentComplete();
                                            break;
                                        case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                                            this.pauseContent();
                                            break;
                                        case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                                            this.pollCountdown(), this.resumeContent();
                                            break;
                                        case google.ima.AdEvent.Type.LOG:
                                            r.adError && this.player.debug.warn("Non-fatal ad error: ".concat(r.adError.getMessage()))
                                    }
                                }
                            }, {
                                key: "onAdError",
                                value: function(e) {
                                    this.cancel(), this.player.debug.warn("Ads error", e)
                                }
                            }, {
                                key: "listeners",
                                value: function() {
                                    var e, t = this,
                                        n = this.player.elements.container;
                                    this.player.on("canplay", (function() {
                                        t.addCuePoints()
                                    })), this.player.on("ended", (function() {
                                        t.loader.contentComplete()
                                    })), this.player.on("timeupdate", (function() {
                                        e = t.player.currentTime
                                    })), this.player.on("seeked", (function() {
                                        var n = t.player.currentTime;
                                        oe(t.cuePoints) || t.cuePoints.forEach((function(i, r) {
                                            e < i && i < n && (t.manager.discardAdBreak(), t.cuePoints.splice(r, 1))
                                        }))
                                    })), window.addEventListener("resize", (function() {
                                        t.manager && t.manager.resize(n.offsetWidth, n.offsetHeight, google.ima.ViewMode.NORMAL)
                                    }))
                                }
                            }, {
                                key: "play",
                                value: function() {
                                    var e = this,
                                        t = this.player.elements.container;
                                    this.managerPromise || this.resumeContent(), this.managerPromise.then((function() {
                                        e.manager.setVolume(e.player.volume), e.elements.displayContainer.initialize();
                                        try {
                                            e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0
                                        } catch (t) {
                                            e.onAdError(t)
                                        }
                                    })).catch((function() {}))
                                }
                            }, {
                                key: "resumeContent",
                                value: function() {
                                    this.elements.container.style.zIndex = "", this.playing = !1, De(this.player.media.play())
                                }
                            }, {
                                key: "pauseContent",
                                value: function() {
                                    this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause()
                                }
                            }, {
                                key: "cancel",
                                value: function() {
                                    this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
                                }
                            }, {
                                key: "loadAds",
                                value: function() {
                                    var e = this;
                                    this.managerPromise.then((function() {
                                        e.manager && e.manager.destroy(), e.managerPromise = new Promise((function(t) {
                                            e.on("loaded", t), e.player.debug.log(e.manager)
                                        })), e.initialized = !1, e.requestAds()
                                    })).catch((function() {}))
                                }
                            }, {
                                key: "trigger",
                                value: function(e) {
                                    for (var t = this, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                                    var o = this.events[e];
                                    Q(o) && o.forEach((function(e) {
                                        J(e) && e.apply(t, i)
                                    }))
                                }
                            }, {
                                key: "on",
                                value: function(e, t) {
                                    return Q(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this
                                }
                            }, {
                                key: "startSafetyTimer",
                                value: function(e, t) {
                                    var n = this;
                                    this.player.debug.log("Safety timer invoked from: ".concat(t)), this.safetyTimer = setTimeout((function() {
                                        n.cancel(), n.clearSafetyTimer("startSafetyTimer()")
                                    }), e)
                                }
                            }, {
                                key: "clearSafetyTimer",
                                value: function(e) {
                                    V(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(this.safetyTimer), this.safetyTimer = null)
                                }
                            }, {
                                key: "enabled",
                                get: function() {
                                    var e = this.config;
                                    return this.player.isHTML5 && this.player.isVideo && e.enabled && (!oe(e.publisherId) || re(e.tagUrl))
                                }
                            }, {
                                key: "tagUrl",
                                get: function() {
                                    var e = this.config;
                                    if (re(e.tagUrl)) return e.tagUrl;
                                    var t = {
                                        AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                                        AV_CHANNELID: "5a0458dc28a06145e4519d21",
                                        AV_URL: window.location.hostname,
                                        cb: Date.now(),
                                        AV_WIDTH: 640,
                                        AV_HEIGHT: 480,
                                        AV_CDIM2: e.publisherId
                                    };
                                    return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(at(t))
                                }
                            }]), t
                        }(),
                        It = function(e, t) {
                            var n = {};
                            return e > t.width / t.height ? (n.width = t.width, n.height = 1 / e * t.width) : (n.height = t.height, n.width = e * t.height), n
                        },
                        Mt = function() {
                            function t(n) {
                                e(this, t), this.player = n, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
                                    thumb: {},
                                    scrubbing: {}
                                }, this.load()
                            }
                            return i(t, [{
                                key: "load",
                                value: function() {
                                    var e = this;
                                    this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then((function() {
                                        e.enabled && (e.render(), e.determineContainerAutoSizing(), e.loaded = !0)
                                    }))
                                }
                            }, {
                                key: "getThumbnails",
                                value: function() {
                                    var e = this;
                                    return new Promise((function(t) {
                                        var n = e.player.config.previewThumbnails.src;
                                        if (oe(n)) throw new Error("Missing previewThumbnails.src config attribute");
                                        var i = function() {
                                            e.thumbnails.sort((function(e, t) {
                                                return e.height - t.height
                                            })), e.player.debug.log("Preview thumbnails", e.thumbnails), t()
                                        };
                                        if (J(n)) n((function(t) {
                                            e.thumbnails = t, i()
                                        }));
                                        else {
                                            var r = (K(n) ? [n] : n).map((function(t) {
                                                return e.getThumbnail(t)
                                            }));
                                            Promise.all(r).then(i)
                                        }
                                    }))
                                }
                            }, {
                                key: "getThumbnail",
                                value: function(e) {
                                    var t = this;
                                    return new Promise((function(n) {
                                        Ge(e).then((function(i) {
                                            var r, o, a = {
                                                frames: (r = i, o = [], r.split(/\r\n\r\n|\n\n|\r\r/).forEach((function(e) {
                                                    var t = {};
                                                    e.split(/\r\n|\n|\r/).forEach((function(e) {
                                                        if ($(t.startTime)) {
                                                            if (!oe(e.trim()) && oe(t.text)) {
                                                                var n = e.trim().split("#xywh="),
                                                                    i = l(n, 1);
                                                                if (t.text = i[0], n[1]) {
                                                                    var r = l(n[1].split(","), 4);
                                                                    t.x = r[0], t.y = r[1], t.w = r[2], t.h = r[3]
                                                                }
                                                            }
                                                        } else {
                                                            var o = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                                                            o && (t.startTime = 60 * Number(o[1] || 0) * 60 + 60 * Number(o[2]) + Number(o[3]) + Number("0.".concat(o[4])), t.endTime = 60 * Number(o[6] || 0) * 60 + 60 * Number(o[7]) + Number(o[8]) + Number("0.".concat(o[9])))
                                                        }
                                                    })), t.text && o.push(t)
                                                })), o),
                                                height: null,
                                                urlPrefix: ""
                                            };
                                            a.frames[0].text.startsWith("/") || a.frames[0].text.startsWith("http://") || a.frames[0].text.startsWith("https://") || (a.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                                            var s = new Image;
                                            s.onload = function() {
                                                a.height = s.naturalHeight, a.width = s.naturalWidth, t.thumbnails.push(a), n()
                                            }, s.src = a.urlPrefix + a.frames[0].text
                                        }))
                                    }))
                                }
                            }, {
                                key: "startMove",
                                value: function(e) {
                                    if (this.loaded && ee(e) && ["touchmove", "mousemove"].includes(e.type) && this.player.media.duration) {
                                        if ("touchmove" === e.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                                        else {
                                            var t = this.player.elements.progress.getBoundingClientRect(),
                                                n = 100 / t.width * (e.pageX - t.left);
                                            this.seekTime = this.player.media.duration * (n / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e.pageX, this.elements.thumb.time.innerText = it(this.seekTime)
                                        }
                                        this.showImageAtCurrentTime()
                                    }
                                }
                            }, {
                                key: "endMove",
                                value: function() {
                                    this.toggleThumbContainer(!1, !0)
                                }
                            }, {
                                key: "startScrubbing",
                                value: function(e) {
                                    (V(e.button) || !1 === e.button || 0 === e.button) && (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()))
                                }
                            }, {
                                key: "endScrubbing",
                                value: function() {
                                    var e = this;
                                    this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : Ne.call(this.player, this.player.media, "timeupdate", (function() {
                                        e.mouseDown || e.toggleScrubbingContainer(!1)
                                    }))
                                }
                            }, {
                                key: "listeners",
                                value: function() {
                                    var e = this;
                                    this.player.on("play", (function() {
                                        e.toggleThumbContainer(!1, !0)
                                    })), this.player.on("seeked", (function() {
                                        e.toggleThumbContainer(!1)
                                    })), this.player.on("timeupdate", (function() {
                                        e.lastTime = e.player.media.currentTime
                                    }))
                                }
                            }, {
                                key: "render",
                                value: function() {
                                    this.elements.thumb.container = he("div", {
                                        class: this.player.config.classNames.previewThumbnails.thumbContainer
                                    }), this.elements.thumb.imageContainer = he("div", {
                                        class: this.player.config.classNames.previewThumbnails.imageContainer
                                    }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
                                    var e = he("div", {
                                        class: this.player.config.classNames.previewThumbnails.timeContainer
                                    });
                                    this.elements.thumb.time = he("span", {}, "00:00"), e.appendChild(this.elements.thumb.time), this.elements.thumb.container.appendChild(e), Z(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = he("div", {
                                        class: this.player.config.classNames.previewThumbnails.scrubbingContainer
                                    }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove()
                                }
                            }, {
                                key: "showImageAtCurrentTime",
                                value: function() {
                                    var e = this;
                                    this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
                                    var t = this.thumbnails[0].frames.findIndex((function(t) {
                                            return e.seekTime >= t.startTime && e.seekTime <= t.endTime
                                        })),
                                        n = t >= 0,
                                        i = 0;
                                    this.mouseDown || this.toggleThumbContainer(n), n && (this.thumbnails.forEach((function(n, r) {
                                        e.loadedImages.includes(n.frames[t].text) && (i = r)
                                    })), t !== this.showingThumb && (this.showingThumb = t, this.loadImage(i)))
                                }
                            }, {
                                key: "loadImage",
                                value: function() {
                                    var e = this,
                                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                        n = this.showingThumb,
                                        i = this.thumbnails[t],
                                        r = i.urlPrefix,
                                        o = i.frames[n],
                                        a = i.frames[n].text,
                                        s = r + a;
                                    if (this.currentImageElement && this.currentImageElement.dataset.filename === a) this.showImage(this.currentImageElement, o, t, n, a, !1), this.currentImageElement.dataset.index = n, this.removeOldImages(this.currentImageElement);
                                    else {
                                        this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                                        var l = new Image;
                                        l.src = s, l.dataset.index = n, l.dataset.filename = a, this.showingThumbFilename = a, this.player.debug.log("Loading image: ".concat(s)), l.onload = function() {
                                            return e.showImage(l, o, t, n, a, !0)
                                        }, this.loadingImage = l, this.removeOldImages(l)
                                    }
                                }
                            }, {
                                key: "showImage",
                                value: function(e, t, n, i, r) {
                                    var o = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                                    this.player.debug.log("Showing thumb: ".concat(r, ". num: ").concat(i, ". qual: ").concat(n, ". newimg: ").concat(o)), this.setImageSizeAndOffset(e, t), o && (this.currentImageContainer.appendChild(e), this.currentImageElement = e, this.loadedImages.includes(r) || this.loadedImages.push(r)), this.preloadNearby(i, !0).then(this.preloadNearby(i, !1)).then(this.getHigherQuality(n, e, t, r))
                                }
                            }, {
                                key: "removeOldImages",
                                value: function(e) {
                                    var t = this;
                                    Array.from(this.currentImageContainer.children).forEach((function(n) {
                                        if ("img" === n.tagName.toLowerCase()) {
                                            var i = t.usingSprites ? 500 : 1e3;
                                            if (n.dataset.index !== e.dataset.index && !n.dataset.deleting) {
                                                n.dataset.deleting = !0;
                                                var r = t.currentImageContainer;
                                                setTimeout((function() {
                                                    r.removeChild(n), t.player.debug.log("Removing thumb: ".concat(n.dataset.filename))
                                                }), i)
                                            }
                                        }
                                    }))
                                }
                            }, {
                                key: "preloadNearby",
                                value: function(e) {
                                    var t = this,
                                        n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                    return new Promise((function(i) {
                                        setTimeout((function() {
                                            var r = t.thumbnails[0].frames[e].text;
                                            if (t.showingThumbFilename === r) {
                                                var o;
                                                o = n ? t.thumbnails[0].frames.slice(e) : t.thumbnails[0].frames.slice(0, e).reverse();
                                                var a = !1;
                                                o.forEach((function(e) {
                                                    var n = e.text;
                                                    if (n !== r && !t.loadedImages.includes(n)) {
                                                        a = !0, t.player.debug.log("Preloading thumb filename: ".concat(n));
                                                        var o = t.thumbnails[0].urlPrefix + n,
                                                            s = new Image;
                                                        s.src = o, s.onload = function() {
                                                            t.player.debug.log("Preloaded thumb filename: ".concat(n)), t.loadedImages.includes(n) || t.loadedImages.push(n), i()
                                                        }
                                                    }
                                                })), a || i()
                                            }
                                        }), 300)
                                    }))
                                }
                            }, {
                                key: "getHigherQuality",
                                value: function(e, t, n, i) {
                                    var r = this;
                                    if (e < this.thumbnails.length - 1) {
                                        var o = t.naturalHeight;
                                        this.usingSprites && (o = n.h), o < this.thumbContainerHeight && setTimeout((function() {
                                            r.showingThumbFilename === i && (r.player.debug.log("Showing higher quality thumb for: ".concat(i)), r.loadImage(e + 1))
                                        }), 300)
                                    }
                                }
                            }, {
                                key: "toggleThumbContainer",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                        n = this.player.config.classNames.previewThumbnails.thumbContainerShown;
                                    this.elements.thumb.container.classList.toggle(n, e), !e && t && (this.showingThumb = null, this.showingThumbFilename = null)
                                }
                            }, {
                                key: "toggleScrubbingContainer",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                        t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                                    this.elements.scrubbing.container.classList.toggle(t, e), e || (this.showingThumb = null, this.showingThumbFilename = null)
                                }
                            }, {
                                key: "determineContainerAutoSizing",
                                value: function() {
                                    (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0)
                                }
                            }, {
                                key: "setThumbContainerSizeAndPos",
                                value: function() {
                                    if (this.sizeSpecifiedInCSS) {
                                        if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
                                            var e = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);
                                            this.elements.thumb.imageContainer.style.width = "".concat(e, "px")
                                        } else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
                                            var t = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
                                            this.elements.thumb.imageContainer.style.height = "".concat(t, "px")
                                        }
                                    } else {
                                        var n = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                                        this.elements.thumb.imageContainer.style.height = "".concat(this.thumbContainerHeight, "px"), this.elements.thumb.imageContainer.style.width = "".concat(n, "px")
                                    }
                                    this.setThumbContainerPos()
                                }
                            }, {
                                key: "setThumbContainerPos",
                                value: function() {
                                    var e = this.player.elements.progress.getBoundingClientRect(),
                                        t = this.player.elements.container.getBoundingClientRect(),
                                        n = this.elements.thumb.container,
                                        i = t.left - e.left + 10,
                                        r = t.right - e.left - n.clientWidth - 10,
                                        o = this.mousePosX - e.left - n.clientWidth / 2;
                                    o < i && (o = i), o > r && (o = r), n.style.left = "".concat(o, "px")
                                }
                            }, {
                                key: "setScrubbingContainerSize",
                                value: function() {
                                    var e = It(this.thumbAspectRatio, {
                                            width: this.player.media.clientWidth,
                                            height: this.player.media.clientHeight
                                        }),
                                        t = e.width,
                                        n = e.height;
                                    this.elements.scrubbing.container.style.width = "".concat(t, "px"), this.elements.scrubbing.container.style.height = "".concat(n, "px")
                                }
                            }, {
                                key: "setImageSizeAndOffset",
                                value: function(e, t) {
                                    if (this.usingSprites) {
                                        var n = this.thumbContainerHeight / t.h;
                                        e.style.height = "".concat(e.naturalHeight * n, "px"), e.style.width = "".concat(e.naturalWidth * n, "px"), e.style.left = "-".concat(t.x * n, "px"), e.style.top = "-".concat(t.y * n, "px")
                                    }
                                }
                            }, {
                                key: "enabled",
                                get: function() {
                                    return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
                                }
                            }, {
                                key: "currentImageContainer",
                                get: function() {
                                    return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
                                }
                            }, {
                                key: "usingSprites",
                                get: function() {
                                    return Object.keys(this.thumbnails[0].frames[0]).includes("w")
                                }
                            }, {
                                key: "thumbAspectRatio",
                                get: function() {
                                    return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height
                                }
                            }, {
                                key: "thumbContainerHeight",
                                get: function() {
                                    return this.mouseDown ? It(this.thumbAspectRatio, {
                                        width: this.player.media.clientWidth,
                                        height: this.player.media.clientHeight
                                    }).height : this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
                                }
                            }, {
                                key: "currentImageElement",
                                get: function() {
                                    return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
                                },
                                set: function(e) {
                                    this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e
                                }
                            }]), t
                        }(),
                        Rt = {
                            insertElements: function(e, t) {
                                var n = this;
                                K(t) ? fe(e, this.media, {
                                    src: t
                                }) : Q(t) && t.forEach((function(t) {
                                    fe(e, n.media, t)
                                }))
                            },
                            change: function(e) {
                                var t = this;
                                ce(e, "sources.length") ? (qe.cancelRequests.call(this), this.destroy.call(this, (function() {
                                    t.options.quality = [], me(t.media), t.media = null, Z(t.elements.container) && t.elements.container.removeAttribute("class");
                                    var n = e.sources,
                                        i = e.type,
                                        r = l(n, 1)[0],
                                        o = r.provider,
                                        a = void 0 === o ? pt.html5 : o,
                                        s = r.src,
                                        c = "html5" === a ? i : "div",
                                        u = "html5" === a ? {} : {
                                            src: s
                                        };
                                    Object.assign(t, {
                                        provider: a,
                                        type: i,
                                        supported: Se.check(i, a, t.config.playsinline),
                                        media: he(c, u)
                                    }), t.elements.container.appendChild(t.media), X(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), oe(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), bt.addStyleHook.call(t), t.isHTML5 && Rt.insertElements.call(t, "source", n), t.config.title = e.title, St.setup.call(t), t.isHTML5 && Object.keys(e).includes("tracks") && Rt.insertElements.call(t, "track", e.tracks), (t.isHTML5 || t.isEmbed && !t.supported.ui) && bt.build.call(t), t.isHTML5 && t.media.load(), oe(e.previewThumbnails) || (Object.assign(t.config.previewThumbnails, e.previewThumbnails), t.previewThumbnails && t.previewThumbnails.loaded && (t.previewThumbnails.destroy(), t.previewThumbnails = null), t.config.previewThumbnails.enabled && (t.previewThumbnails = new Mt(t))), t.fullscreen.update()
                                }), !0)) : this.debug.warn("Invalid source format")
                            }
                        },
                        Nt = function() {
                            function t(n, i) {
                                var r = this;
                                if (e(this, t), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = Se.touch, this.media = n, K(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || G(this.media) || Q(this.media)) && (this.media = this.media[0]), this.config = ue({}, lt, t.defaults, i || {}, function() {
                                        try {
                                            return JSON.parse(r.media.getAttribute("data-plyr-config"))
                                        } catch (e) {
                                            return {}
                                        }
                                    }()), this.elements = {
                                        container: null,
                                        fullscreen: null,
                                        captions: null,
                                        buttons: {},
                                        display: {},
                                        progress: {},
                                        inputs: {},
                                        settings: {
                                            popup: null,
                                            menu: null,
                                            panels: {},
                                            buttons: {}
                                        }
                                    }, this.captions = {
                                        active: null,
                                        currentTrack: -1,
                                        meta: new WeakMap
                                    }, this.fullscreen = {
                                        active: !1
                                    }, this.options = {
                                        speed: [],
                                        quality: []
                                    }, this.debug = new mt(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", Se), !V(this.media) && Z(this.media))
                                    if (this.media.plyr) this.debug.warn("Target already setup");
                                    else if (this.config.enabled)
                                    if (Se.check().api) {
                                        var o = this.media.cloneNode(!0);
                                        o.autoplay = !1, this.elements.original = o;
                                        var a = this.media.tagName.toLowerCase(),
                                            s = null,
                                            l = null;
                                        switch (a) {
                                            case "div":
                                                if (s = this.media.querySelector("iframe"), Z(s)) {
                                                    if (l = ot(s.getAttribute("src")), this.provider = function(e) {
                                                            return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? pt.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? pt.vimeo : null
                                                        }(l.toString()), this.elements.container = this.media, this.media = s, this.elements.container.className = "", l.search.length) {
                                                        var c = ["1", "true"];
                                                        c.includes(l.searchParams.get("autoplay")) && (this.config.autoplay = !0), c.includes(l.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = c.includes(l.searchParams.get("playsinline")), this.config.youtube.hl = l.searchParams.get("hl")) : this.config.playsinline = !0
                                                    }
                                                } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                                                if (oe(this.provider) || !Object.keys(pt).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                                                this.type = ht;
                                                break;
                                            case "video":
                                            case "audio":
                                                this.type = a, this.provider = pt.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                                                break;
                                            default:
                                                return void this.debug.error("Setup failed: unsupported type")
                                        }
                                        this.supported = Se.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new vt(this), this.storage = new Qe(this), this.media.plyr = this, Z(this.elements.container) || (this.elements.container = he("div", {
                                            tabindex: 0
                                        }), pe(this.media, this.elements.container)), bt.migrateStyles.call(this), bt.addStyleHook.call(this), St.setup.call(this), this.config.debug && Me.call(this, this.elements.container, this.config.events.join(" "), (function(e) {
                                            r.debug.log("event: ".concat(e.type))
                                        })), this.fullscreen = new gt(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && bt.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new Pt(this)), this.isHTML5 && this.config.autoplay && setTimeout((function() {
                                            return De(r.play())
                                        }), 10), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new Mt(this))) : this.debug.error("Setup failed: no support")
                                    } else this.debug.error("Setup failed: no support");
                                else this.debug.error("Setup failed: disabled by config");
                                else this.debug.error("Setup failed: no suitable element passed")
                            }
                            return i(t, [{
                                key: "play",
                                value: function() {
                                    var e = this;
                                    return J(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then((function() {
                                        return e.ads.play()
                                    })).catch((function() {
                                        return De(e.media.play())
                                    })), this.media.play()) : null
                                }
                            }, {
                                key: "pause",
                                value: function() {
                                    return this.playing && J(this.media.pause) ? this.media.pause() : null
                                }
                            }, {
                                key: "togglePlay",
                                value: function(e) {
                                    return (X(e) ? e : !this.playing) ? this.play() : this.pause()
                                }
                            }, {
                                key: "stop",
                                value: function() {
                                    this.isHTML5 ? (this.pause(), this.restart()) : J(this.media.stop) && this.media.stop()
                                }
                            }, {
                                key: "restart",
                                value: function() {
                                    this.currentTime = 0
                                }
                            }, {
                                key: "rewind",
                                value: function(e) {
                                    this.currentTime -= $(e) ? e : this.config.seekTime
                                }
                            }, {
                                key: "forward",
                                value: function(e) {
                                    this.currentTime += $(e) ? e : this.config.seekTime
                                }
                            }, {
                                key: "increaseVolume",
                                value: function(e) {
                                    var t = this.media.muted ? 0 : this.volume;
                                    this.volume = t + ($(e) ? e : 0)
                                }
                            }, {
                                key: "decreaseVolume",
                                value: function(e) {
                                    this.increaseVolume(-e)
                                }
                            }, {
                                key: "toggleCaptions",
                                value: function(e) {
                                    st.toggle.call(this, e, !1)
                                }
                            }, {
                                key: "airplay",
                                value: function() {
                                    Se.airplay && this.media.webkitShowPlaybackTargetPicker()
                                }
                            }, {
                                key: "toggleControls",
                                value: function(e) {
                                    if (this.supported.ui && !this.isAudio) {
                                        var t = we(this.elements.container, this.config.classNames.hideControls),
                                            n = void 0 === e ? void 0 : !e,
                                            i = _e(this.elements.container, this.config.classNames.hideControls, n);
                                        if (i && Q(this.config.controls) && this.config.controls.includes("settings") && !oe(this.config.settings) && rt.toggleMenu.call(this, !1), i !== t) {
                                            var r = i ? "controlshidden" : "controlsshown";
                                            Oe.call(this, this.media, r)
                                        }
                                        return !i
                                    }
                                    return !1
                                }
                            }, {
                                key: "on",
                                value: function(e, t) {
                                    Me.call(this, this.elements.container, e, t)
                                }
                            }, {
                                key: "once",
                                value: function(e, t) {
                                    Ne.call(this, this.elements.container, e, t)
                                }
                            }, {
                                key: "off",
                                value: function(e, t) {
                                    Re(this.elements.container, e, t)
                                }
                            }, {
                                key: "destroy",
                                value: function(e) {
                                    var t = this,
                                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    if (this.ready) {
                                        var i = function() {
                                            document.body.style.overflow = "", t.embed = null, n ? (Object.keys(t.elements).length && (me(t.elements.buttons.play), me(t.elements.captions), me(t.elements.controls), me(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), J(e) && e()) : (Le.call(t), ye(t.elements.original, t.elements.container), Oe.call(t, t.elements.original, "destroyed", !0), J(e) && e.call(t.elements.original), t.ready = !1, setTimeout((function() {
                                                t.elements = null, t.media = null
                                            }), 200))
                                        };
                                        this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (bt.toggleNativeControls.call(this, !0), i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && J(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200))
                                    }
                                }
                            }, {
                                key: "supports",
                                value: function(e) {
                                    return Se.mime.call(this, e)
                                }
                            }, {
                                key: "isHTML5",
                                get: function() {
                                    return this.provider === pt.html5
                                }
                            }, {
                                key: "isEmbed",
                                get: function() {
                                    return this.isYouTube || this.isVimeo
                                }
                            }, {
                                key: "isYouTube",
                                get: function() {
                                    return this.provider === pt.youtube
                                }
                            }, {
                                key: "isVimeo",
                                get: function() {
                                    return this.provider === pt.vimeo
                                }
                            }, {
                                key: "isVideo",
                                get: function() {
                                    return this.type === ht
                                }
                            }, {
                                key: "isAudio",
                                get: function() {
                                    return this.type === dt
                                }
                            }, {
                                key: "playing",
                                get: function() {
                                    return Boolean(this.ready && !this.paused && !this.ended)
                                }
                            }, {
                                key: "paused",
                                get: function() {
                                    return Boolean(this.media.paused)
                                }
                            }, {
                                key: "stopped",
                                get: function() {
                                    return Boolean(this.paused && 0 === this.currentTime)
                                }
                            }, {
                                key: "ended",
                                get: function() {
                                    return Boolean(this.media.ended)
                                }
                            }, {
                                key: "currentTime",
                                set: function(e) {
                                    if (this.duration) {
                                        var t = $(e) && e > 0;
                                        this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"))
                                    }
                                },
                                get: function() {
                                    return Number(this.media.currentTime)
                                }
                            }, {
                                key: "buffered",
                                get: function() {
                                    var e = this.media.buffered;
                                    return $(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
                                }
                            }, {
                                key: "seeking",
                                get: function() {
                                    return Boolean(this.media.seeking)
                                }
                            }, {
                                key: "duration",
                                get: function() {
                                    var e = parseFloat(this.config.duration),
                                        t = (this.media || {}).duration,
                                        n = $(t) && t !== 1 / 0 ? t : 0;
                                    return e || n
                                }
                            }, {
                                key: "volume",
                                set: function(e) {
                                    var t = e;
                                    K(t) && (t = Number(t)), $(t) || (t = this.storage.get("volume")), $(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !oe(e) && this.muted && t > 0 && (this.muted = !1)
                                },
                                get: function() {
                                    return Number(this.media.volume)
                                }
                            }, {
                                key: "muted",
                                set: function(e) {
                                    var t = e;
                                    X(t) || (t = this.storage.get("muted")), X(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
                                },
                                get: function() {
                                    return Boolean(this.media.muted)
                                }
                            }, {
                                key: "hasAudio",
                                get: function() {
                                    return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)
                                }
                            }, {
                                key: "speed",
                                set: function(e) {
                                    var t = this,
                                        n = null;
                                    $(e) && (n = e), $(n) || (n = this.storage.get("speed")), $(n) || (n = this.config.speed.selected);
                                    var i = this.minimumSpeed,
                                        r = this.maximumSpeed;
                                    n = function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255;
                                        return Math.min(Math.max(e, t), n)
                                    }(n, i, r), this.config.speed.selected = n, setTimeout((function() {
                                        t.media.playbackRate = n
                                    }), 0)
                                },
                                get: function() {
                                    return Number(this.media.playbackRate)
                                }
                            }, {
                                key: "minimumSpeed",
                                get: function() {
                                    return this.isYouTube ? Math.min.apply(Math, c(this.options.speed)) : this.isVimeo ? .5 : .0625
                                }
                            }, {
                                key: "maximumSpeed",
                                get: function() {
                                    return this.isYouTube ? Math.max.apply(Math, c(this.options.speed)) : this.isVimeo ? 2 : 16
                                }
                            }, {
                                key: "quality",
                                set: function(e) {
                                    var t = this.config.quality,
                                        n = this.options.quality;
                                    if (n.length) {
                                        var i = [!oe(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find($),
                                            r = !0;
                                        if (!n.includes(i)) {
                                            var o = function(e, t) {
                                                return Q(e) && e.length ? e.reduce((function(e, n) {
                                                    return Math.abs(n - t) < Math.abs(e - t) ? n : e
                                                })) : null
                                            }(n, i);
                                            this.debug.warn("Unsupported quality option: ".concat(i, ", using ").concat(o, " instead")), i = o, r = !1
                                        }
                                        t.selected = i, this.media.quality = i, r && this.storage.set({
                                            quality: i
                                        })
                                    }
                                },
                                get: function() {
                                    return this.media.quality
                                }
                            }, {
                                key: "loop",
                                set: function(e) {
                                    var t = X(e) ? e : this.config.loop.active;
                                    this.config.loop.active = t, this.media.loop = t
                                },
                                get: function() {
                                    return Boolean(this.media.loop)
                                }
                            }, {
                                key: "source",
                                set: function(e) {
                                    Rt.change.call(this, e)
                                },
                                get: function() {
                                    return this.media.currentSrc
                                }
                            }, {
                                key: "download",
                                get: function() {
                                    var e = this.config.urls.download;
                                    return re(e) ? e : this.source
                                },
                                set: function(e) {
                                    re(e) && (this.config.urls.download = e, rt.setDownloadUrl.call(this))
                                }
                            }, {
                                key: "poster",
                                set: function(e) {
                                    this.isVideo ? bt.setPoster.call(this, e, !1).catch((function() {})) : this.debug.warn("Poster can only be set for video")
                                },
                                get: function() {
                                    return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null
                                }
                            }, {
                                key: "ratio",
                                get: function() {
                                    if (!this.isVideo) return null;
                                    var e = je(Fe.call(this));
                                    return Q(e) ? e.join(":") : e
                                },
                                set: function(e) {
                                    this.isVideo ? K(e) && Ue(e) ? (this.config.ratio = e, ze.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e, ")")) : this.debug.warn("Aspect ratio can only be set for video")
                                }
                            }, {
                                key: "autoplay",
                                set: function(e) {
                                    var t = X(e) ? e : this.config.autoplay;
                                    this.config.autoplay = t
                                },
                                get: function() {
                                    return Boolean(this.config.autoplay)
                                }
                            }, {
                                key: "currentTrack",
                                set: function(e) {
                                    st.set.call(this, e, !1)
                                },
                                get: function() {
                                    var e = this.captions,
                                        t = e.toggled,
                                        n = e.currentTrack;
                                    return t ? n : -1
                                }
                            }, {
                                key: "language",
                                set: function(e) {
                                    st.setLanguage.call(this, e, !1)
                                },
                                get: function() {
                                    return (st.getCurrentTrack.call(this) || {}).language
                                }
                            }, {
                                key: "pip",
                                set: function(e) {
                                    if (Se.pip) {
                                        var t = X(e) ? e : !this.pip;
                                        J(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? ct : ut), J(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture())
                                    }
                                },
                                get: function() {
                                    return Se.pip ? oe(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === ct : null
                                }
                            }], [{
                                key: "supported",
                                value: function(e, t, n) {
                                    return Se.check(e, t, n)
                                }
                            }, {
                                key: "loadSprite",
                                value: function(e, t) {
                                    return Ze(e, t)
                                }
                            }, {
                                key: "setup",
                                value: function(e) {
                                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        i = null;
                                    return K(e) ? i = Array.from(document.querySelectorAll(e)) : G(e) ? i = Array.from(e) : Q(e) && (i = e.filter(Z)), oe(i) ? null : i.map((function(e) {
                                        return new t(e, n)
                                    }))
                                }
                            }]), t
                        }();
                    return Nt.defaults = (Ct = lt, JSON.parse(JSON.stringify(Ct))), Nt
                }))
            }).call(this, n("c8ba"))
        },
        1148: function(e, t, n) {
            "use strict";
            var i = n("a691"),
                r = n("1d80");
            e.exports = "".repeat || function(e) {
                var t = String(r(this)),
                    n = "",
                    o = i(e);
                if (o < 0 || o == 1 / 0) throw RangeError("Wrong number of repetitions");
                for (; o > 0;
                    (o >>>= 1) && (t += t)) 1 & o && (n += t);
                return n
            }
        },
        1276: function(e, t, n) {
            "use strict";
            var i = n("d784"),
                r = n("44e7"),
                o = n("825a"),
                a = n("1d80"),
                s = n("4840"),
                l = n("8aa5"),
                c = n("50c4"),
                u = n("14c3"),
                p = n("9263"),
                d = n("d039"),
                h = [].push,
                f = Math.min,
                m = 4294967295,
                g = !d((function() {
                    return !RegExp(m, "y")
                }));
            i("split", 2, (function(e, t, n) {
                var i;
                return i = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, n) {
                    var i = String(a(this)),
                        o = void 0 === n ? m : n >>> 0;
                    if (0 === o) return [];
                    if (void 0 === e) return [i];
                    if (!r(e)) return t.call(i, e, o);
                    var s, l, c, u = [],
                        d = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""),
                        f = 0,
                        g = new RegExp(e.source, d + "g");
                    while (s = p.call(g, i)) {
                        if (l = g.lastIndex, l > f && (u.push(i.slice(f, s.index)), s.length > 1 && s.index < i.length && h.apply(u, s.slice(1)), c = s[0].length, f = l, u.length >= o)) break;
                        g.lastIndex === s.index && g.lastIndex++
                    }
                    return f === i.length ? !c && g.test("") || u.push("") : u.push(i.slice(f)), u.length > o ? u.slice(0, o) : u
                } : "0".split(void 0, 0).length ? function(e, n) {
                    return void 0 === e && 0 === n ? [] : t.call(this, e, n)
                } : t, [function(t, n) {
                    var r = a(this),
                        o = void 0 == t ? void 0 : t[e];
                    return void 0 !== o ? o.call(t, r, n) : i.call(String(r), t, n)
                }, function(e, r) {
                    var a = n(i, e, this, r, i !== t);
                    if (a.done) return a.value;
                    var p = o(e),
                        d = String(this),
                        h = s(p, RegExp),
                        y = p.unicode,
                        b = (p.ignoreCase ? "i" : "") + (p.multiline ? "m" : "") + (p.unicode ? "u" : "") + (g ? "y" : "g"),
                        v = new h(g ? p : "^(?:" + p.source + ")", b),
                        _ = void 0 === r ? m : r >>> 0;
                    if (0 === _) return [];
                    if (0 === d.length) return null === u(v, d) ? [d] : [];
                    var w = 0,
                        k = 0,
                        x = [];
                    while (k < d.length) {
                        v.lastIndex = g ? k : 0;
                        var T, A = u(v, g ? d : d.slice(k));
                        if (null === A || (T = f(c(v.lastIndex + (g ? 0 : k)), d.length)) === w) k = l(d, k, y);
                        else {
                            if (x.push(d.slice(w, k)), x.length === _) return x;
                            for (var C = 1; C <= A.length - 1; C++)
                                if (x.push(A[C]), x.length === _) return x;
                            k = w = T
                        }
                    }
                    return x.push(d.slice(w)), x
                }]
            }), !g)
        },
        "1fb5": function(e, t, n) {
            "use strict";
            t.byteLength = u, t.toByteArray = d, t.fromByteArray = m;
            for (var i = [], r = [], o = "undefined" !== typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, l = a.length; s < l; ++s) i[s] = a[s], r[a.charCodeAt(s)] = s;

            function c(e) {
                var t = e.length;
                if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var n = e.indexOf("="); - 1 === n && (n = t);
                var i = n === t ? 0 : 4 - n % 4;
                return [n, i]
            }

            function u(e) {
                var t = c(e),
                    n = t[0],
                    i = t[1];
                return 3 * (n + i) / 4 - i
            }

            function p(e, t, n) {
                return 3 * (t + n) / 4 - n
            }

            function d(e) {
                var t, n, i = c(e),
                    a = i[0],
                    s = i[1],
                    l = new o(p(e, a, s)),
                    u = 0,
                    d = s > 0 ? a - 4 : a;
                for (n = 0; n < d; n += 4) t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n + 1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)], l[u++] = t >> 16 & 255, l[u++] = t >> 8 & 255, l[u++] = 255 & t;
                return 2 === s && (t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >> 4, l[u++] = 255 & t), 1 === s && (t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2, l[u++] = t >> 8 & 255, l[u++] = 255 & t), l
            }

            function h(e) {
                return i[e >> 18 & 63] + i[e >> 12 & 63] + i[e >> 6 & 63] + i[63 & e]
            }

            function f(e, t, n) {
                for (var i, r = [], o = t; o < n; o += 3) i = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]), r.push(h(i));
                return r.join("")
            }

            function m(e) {
                for (var t, n = e.length, r = n % 3, o = [], a = 16383, s = 0, l = n - r; s < l; s += a) o.push(f(e, s, s + a > l ? l : s + a));
                return 1 === r ? (t = e[n - 1], o.push(i[t >> 2] + i[t << 4 & 63] + "==")) : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], o.push(i[t >> 10] + i[t >> 4 & 63] + i[t << 2 & 63] + "=")), o.join("")
            }
            r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
        },
        "25f0": function(e, t, n) {
            "use strict";
            var i = n("6eeb"),
                r = n("825a"),
                o = n("d039"),
                a = n("ad6d"),
                s = "toString",
                l = RegExp.prototype,
                c = l[s],
                u = o((function() {
                    return "/a/b" != c.call({
                        source: "a",
                        flags: "b"
                    })
                })),
                p = c.name != s;
            (u || p) && i(RegExp.prototype, s, (function() {
                var e = r(this),
                    t = String(e.source),
                    n = e.flags,
                    i = String(void 0 === n && e instanceof RegExp && !("flags" in l) ? a.call(e) : n);
                return "/" + t + "/" + i
            }), {
                unsafe: !0
            })
        },
        "27ae": function(module, exports, __webpack_require__) {
            (function(global) {
                var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
                (function(e, t) {
                    module.exports = t(e)
                })("undefined" !== typeof self ? self : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : this, (function(global) {
                    "use strict";
                    global = global || {};
                    var _Base64 = global.Base64,
                        version = "2.5.2",
                        buffer;
                    if (module.exports) try {
                        buffer = eval("require('buffer').Buffer")
                    } catch (err) {
                        buffer = void 0
                    }
                    var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        b64tab = function(e) {
                            for (var t = {}, n = 0, i = e.length; n < i; n++) t[e.charAt(n)] = n;
                            return t
                        }(b64chars),
                        fromCharCode = String.fromCharCode,
                        cb_utob = function(e) {
                            if (e.length < 2) {
                                var t = e.charCodeAt(0);
                                return t < 128 ? e : t < 2048 ? fromCharCode(192 | t >>> 6) + fromCharCode(128 | 63 & t) : fromCharCode(224 | t >>> 12 & 15) + fromCharCode(128 | t >>> 6 & 63) + fromCharCode(128 | 63 & t)
                            }
                            t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                            return fromCharCode(240 | t >>> 18 & 7) + fromCharCode(128 | t >>> 12 & 63) + fromCharCode(128 | t >>> 6 & 63) + fromCharCode(128 | 63 & t)
                        },
                        re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                        utob = function(e) {
                            return e.replace(re_utob, cb_utob)
                        },
                        cb_encode = function(e) {
                            var t = [0, 2, 1][e.length % 3],
                                n = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0),
                                i = [b64chars.charAt(n >>> 18), b64chars.charAt(n >>> 12 & 63), t >= 2 ? "=" : b64chars.charAt(n >>> 6 & 63), t >= 1 ? "=" : b64chars.charAt(63 & n)];
                            return i.join("")
                        },
                        btoa = global.btoa ? function(e) {
                            return global.btoa(e)
                        } : function(e) {
                            return e.replace(/[\s\S]{1,3}/g, cb_encode)
                        },
                        _encode = function(e) {
                            var t = "[object Uint8Array]" === Object.prototype.toString.call(e);
                            return t ? e.toString("base64") : btoa(utob(String(e)))
                        },
                        encode = function(e, t) {
                            return t ? _encode(String(e)).replace(/[+\/]/g, (function(e) {
                                return "+" == e ? "-" : "_"
                            })).replace(/=/g, "") : _encode(e)
                        },
                        encodeURI = function(e) {
                            return encode(e, !0)
                        },
                        re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
                        cb_btou = function(e) {
                            switch (e.length) {
                                case 4:
                                    var t = (7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3),
                                        n = t - 65536;
                                    return fromCharCode(55296 + (n >>> 10)) + fromCharCode(56320 + (1023 & n));
                                case 3:
                                    return fromCharCode((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
                                default:
                                    return fromCharCode((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
                            }
                        },
                        btou = function(e) {
                            return e.replace(re_btou, cb_btou)
                        },
                        cb_decode = function(e) {
                            var t = e.length,
                                n = t % 4,
                                i = (t > 0 ? b64tab[e.charAt(0)] << 18 : 0) | (t > 1 ? b64tab[e.charAt(1)] << 12 : 0) | (t > 2 ? b64tab[e.charAt(2)] << 6 : 0) | (t > 3 ? b64tab[e.charAt(3)] : 0),
                                r = [fromCharCode(i >>> 16), fromCharCode(i >>> 8 & 255), fromCharCode(255 & i)];
                            return r.length -= [0, 0, 2, 1][n], r.join("")
                        },
                        _atob = global.atob ? function(e) {
                            return global.atob(e)
                        } : function(e) {
                            return e.replace(/\S{1,4}/g, cb_decode)
                        },
                        atob = function(e) {
                            return _atob(String(e).replace(/[^A-Za-z0-9\+\/]/g, ""))
                        },
                        _decode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function(e) {
                            return (e.constructor === buffer.constructor ? e : buffer.from(e, "base64")).toString()
                        } : function(e) {
                            return (e.constructor === buffer.constructor ? e : new buffer(e, "base64")).toString()
                        } : function(e) {
                            return btou(_atob(e))
                        },
                        decode = function(e) {
                            return _decode(String(e).replace(/[-_]/g, (function(e) {
                                return "-" == e ? "+" : "/"
                            })).replace(/[^A-Za-z0-9\+\/]/g, ""))
                        },
                        noConflict = function() {
                            var e = global.Base64;
                            return global.Base64 = _Base64, e
                        };
                    if (global.Base64 = {
                            VERSION: version,
                            atob: atob,
                            btoa: btoa,
                            fromBase64: decode,
                            toBase64: encode,
                            utob: utob,
                            encode: encode,
                            encodeURI: encodeURI,
                            btou: btou,
                            decode: decode,
                            noConflict: noConflict,
                            __buffer__: buffer
                        }, "function" === typeof Object.defineProperty) {
                        var noEnum = function(e) {
                            return {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        };
                        global.Base64.extendString = function() {
                            Object.defineProperty(String.prototype, "fromBase64", noEnum((function() {
                                return decode(this)
                            }))), Object.defineProperty(String.prototype, "toBase64", noEnum((function(e) {
                                return encode(this, e)
                            }))), Object.defineProperty(String.prototype, "toBase64URI", noEnum((function() {
                                return encode(this, !0)
                            })))
                        }
                    }
                    return global["Meteor"] && (Base64 = global.Base64), module.exports ? module.exports.Base64 = global.Base64 : (__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                        return global.Base64
                    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), {
                        Base64: global.Base64
                    }
                }))
            }).call(this, __webpack_require__("c8ba"))
        },
        "408a": function(e, t, n) {
            var i = n("c6b6");
            e.exports = function(e) {
                if ("number" != typeof e && "Number" != i(e)) throw TypeError("Incorrect invocation");
                return +e
            }
        },
        "44e7": function(e, t, n) {
            var i = n("861d"),
                r = n("c6b6"),
                o = n("b622"),
                a = o("match");
            e.exports = function(e) {
                var t;
                return i(e) && (void 0 !== (t = e[a]) ? !!t : "RegExp" == r(e))
            }
        },
        "45d8": function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return u
            })), n.d(t, "b", (function() {
                return p
            })), n.d(t, "a", (function() {
                return d
            })), n.d(t, "d", (function() {
                return f
            })), n.d(t, "g", (function() {
                return m
            })), n.d(t, "f", (function() {
                return g
            })), n.d(t, "e", (function() {
                return y
            }));
            n("99af"), n("c975"), n("b680"), n("4d63"), n("ac1f"), n("25f0"), n("5319"), n("1276");
            var i = n("9bd2"),
                r = n("27ae").Base64,
                o = ["html", "php", "css", "go", "java", "js", "json", "txt", "sh", "md"],
                a = ["mp4", "webm", "mkv", "m3u8", "flv", "mov", "m4v"],
                s = ["bmp", "jpg", "jpeg", "png", "gif"],
                l = ["pdf"],
                c = function(e) {
                    return e.replace(/(.*)/, (function(e, t) {
                        return t.replace().replace(/\//g, "%2F").replace(/#/g, "%23")
                    }))
                },
                u = function(e, t) {
                    return e = c(e), "application/vnd.google-apps.folder" === t.mimeType && "/" !== e.substr(-1) && (e += "/"), e
                },
                p = function(e) {
                    var t = e.split("/").pop(),
                        n = t.split(".").pop().toLowerCase(),
                        i = h(e);
                    return -1 != o.indexOf("".concat(n)) && (e = e.replace(/\/(\d+:)\/.*/, (function(e, t) {
                        return "/".concat(t, "text/").concat(i)
                    }))), -1 != l.indexOf("".concat(n)) && (e = e.replace(/\/(\d+:)\/.*/, (function(e, t) {
                        return "/".concat(t, "pdf/").concat(i)
                    }))), -1 != a.indexOf("".concat(n)) && (e = e.replace(/\/(\d+:)\/.*/, (function(e, t) {
                        return "/".concat(t, "video/").concat(i)
                    }))), -1 != s.indexOf("".concat(n)) && (e = e.replace(/\/(\d+:)\/.*/, (function(e, t) {
                        return "/".concat(t, "image/").concat(i)
                    }))), e
                },
                d = function(e) {
                    var t = e.split("/").pop(),
                        n = t.split(".").pop().toLowerCase(),
                        i = o.concat.apply(o, a.concat(s, l));
                    return -1 != i.indexOf("".concat(n))
                },
                h = function(e) {
                    return r.encodeURI(e)
                },
                f = function(e) {
                    return r.decode(e)
                };

            function m(e, t) {
                var n = e.path,
                    r = e.file,
                    o = r ? r.modifiedTime : null,
                    a = "file_path_" + n + o,
                    s = o ? localStorage.getItem(a) : null;
                if (s) return t(s);
                i["a"].get(n).then((function(e) {
                    var n = e.data;
                    localStorage.setItem(a, n), t(n)
                }))
            }

            function g(e) {
                return e >= 1e9 ? e = (e / 1e9).toFixed(2) + " GB" : e >= 1e6 ? e = (e / 1e6).toFixed(2) + " MB" : e >= 1e3 ? e = (e / 1e3).toFixed(2) + " KB" : e > 1 ? e += " bytes" : 1 == e ? e += " byte" : e = "", e
            }

            function y(e, t) {
                t = t || "YYYY-MM-DD HH:mm:ss", "string" === typeof e && (e = new Date(e)), "number" === typeof e && (e = new Date(e));
                var n = {
                        "M+": e.getMonth() + 1,
                        "D+": e.getDate(),
                        "h+": e.getHours() % 12 === 0 ? 12 : e.getHours() % 12,
                        "H+": e.getHours(),
                        "m+": e.getMinutes(),
                        "s+": e.getSeconds(),
                        "q+": Math.floor((e.getMonth() + 3) / 3),
                        S: e.getMilliseconds()
                    },
                    i = {
                        0: "日",
                        1: "一",
                        2: "二",
                        3: "三",
                        4: "四",
                        5: "五",
                        6: "六"
                    };
                for (var r in /(Y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), /(E+)/.test(t) && (t = t.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "星期" : "周" : "") + i[e.getDay() + ""])), n) new RegExp("(" + r + ")").test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? n[r] : ("00" + n[r]).substr(("" + n[r]).length)));
                return t
            }
        },
        "4d63": function(e, t, n) {
            var i = n("83ab"),
                r = n("da84"),
                o = n("94ca"),
                a = n("7156"),
                s = n("9bf2").f,
                l = n("241c").f,
                c = n("44e7"),
                u = n("ad6d"),
                p = n("9f7f"),
                d = n("6eeb"),
                h = n("d039"),
                f = n("69f3").set,
                m = n("2626"),
                g = n("b622"),
                y = g("match"),
                b = r.RegExp,
                v = b.prototype,
                _ = /a/g,
                w = /a/g,
                k = new b(_) !== _,
                x = p.UNSUPPORTED_Y,
                T = i && o("RegExp", !k || x || h((function() {
                    return w[y] = !1, b(_) != _ || b(w) == w || "/a/i" != b(_, "i")
                })));
            if (T) {
                var A = function(e, t) {
                        var n, i = this instanceof A,
                            r = c(e),
                            o = void 0 === t;
                        if (!i && r && e.constructor === A && o) return e;
                        k ? r && !o && (e = e.source) : e instanceof A && (o && (t = u.call(e)), e = e.source), x && (n = !!t && t.indexOf("y") > -1, n && (t = t.replace(/y/g, "")));
                        var s = a(k ? new b(e, t) : b(e, t), i ? this : v, A);
                        return x && n && f(s, {
                            sticky: n
                        }), s
                    },
                    C = function(e) {
                        e in A || s(A, e, {
                            configurable: !0,
                            get: function() {
                                return b[e]
                            },
                            set: function(t) {
                                b[e] = t
                            }
                        })
                    },
                    E = l(b),
                    S = 0;
                while (E.length > S) C(E[S++]);
                v.constructor = A, A.prototype = v, d(r, "RegExp", A)
            }
            m("RegExp")
        },
        "6a54": function(e, t, n) {
            "use strict";
            (function(e) {
                n("baa5"), n("d3b7"), n("25f0");
                var i = n("5530"),
                    r = n("45d8"),
                    o = n("afa7");
                t["a"] = {
                    comments: {
                        VuePlyr: o["a"]
                    },
                    data: function() {
                        return {
                            apiVideoUrl: "",
                            videoUrl: "",
                            subtitle: ""
                        }
                    },
                    mounted: function() {
                        this.render()
                    },
                    methods: {
                        render: function() {
                            var e = encodeURI(this.url),
                                t = e.lastIndexOf(".");
                            if (this.suffix = e.substring(t + 1, e.length), this.loadSub(e, t), this.videoUrl = window.location.origin + e, this.apiVideoUrl = this.options.api + this.videoUrl, !this.options.api) {
                                var n = {
                                    src: this.videoUrl,
                                    autoplay: this.options.autoplay,
                                    media: this.player.media
                                };
                                "m3u8" === this.suffix ? this.loadHls(n) : "flv" === this.suffix && this.loadFlv(n)
                            }
                        },
                        loadSub: function(e, t) {
                            this.subtitle = e.substring(0, t) + ".vtt"
                        },
                        loadHls: function(e) {
                            var t = this;
                            n.e("chunk-2d1e3ca3").then(n.bind(null, "2415")).then((function(n) {
                                var r = n.default;
                                r(Object(i["a"])({}, e, {
                                    callback: function(e) {
                                        t.player.on("languagechange", (function() {
                                            setTimeout((function() {
                                                return e.subtitleTrack = t.player.currentTrack
                                            }), 50)
                                        }))
                                    }
                                }))
                            }))
                        },
                        loadFlv: function(e) {
                            n.e("chunk-40ad1794").then(n.bind(null, "3683")).then((function(t) {
                                var n = t.default;
                                n(e)
                            }))
                        },
                        copy: function() {
                            this.$copyText(this.videoUrl)
                        }
                    },
                    computed: {
                        options: function() {
                            var e = window.themeOptions.video;
                            return Object(i["a"])({
                                autoplay: !1,
                                invertTime: !1,
                                settings: ["quality", "speed", "loop"],
                                ratio: "16:9",
                                controls: ["play-large", "restart", "play", "progress", "current-time", "duration", "mute", "volume", "captions", "settings", "pip", "airplay", "download", "fullscreen"]
                            }, e, {
                                captions: Object(i["a"])({
                                    active: !0,
                                    language: "default"
                                }, e.captions)
                            })
                        },
                        player: function() {
                            return this.$refs.plyr.player
                        },
                        url: function() {
                            return this.$route.params.path ? Object(r["d"])(this.$route.params.path) : ""
                        },
                        players: function() {
                            return [
							{
                                name: "VLC",
                                icon: this.$cdnpath("images/player/vlc.png"),
                                scheme: "vlc://" + this.videoUrl
                            }, {
                                name: "MXPlayer(Free)",
                                icon: this.$cdnpath("images/player/mxplayer.png"),
                                scheme: "intent:" + this.videoUrl + "#Intent;package=com.mxtech.videoplayer.ad;S.title=" + this.title + ";end"
                            }]
                        },
                        getThunder: function() {
                            return e.from("AA" + this.videoUrl + "ZZ").toString("base64")
                        }
                    }
                }
            }).call(this, n("b639").Buffer)
        },
        7156: function(e, t, n) {
            var i = n("861d"),
                r = n("d2bb");
            e.exports = function(e, t, n) {
                var o, a;
                return r && "function" == typeof(o = t.constructor) && o !== n && i(a = o.prototype) && a !== n.prototype && r(e, a), e
            }
        },
        9152: function(e, t) {
            t.read = function(e, t, n, i, r) {
                var o, a, s = 8 * r - i - 1,
                    l = (1 << s) - 1,
                    c = l >> 1,
                    u = -7,
                    p = n ? r - 1 : 0,
                    d = n ? -1 : 1,
                    h = e[t + p];
                for (p += d, o = h & (1 << -u) - 1, h >>= -u, u += s; u > 0; o = 256 * o + e[t + p], p += d, u -= 8);
                for (a = o & (1 << -u) - 1, o >>= -u, u += i; u > 0; a = 256 * a + e[t + p], p += d, u -= 8);
                if (0 === o) o = 1 - c;
                else {
                    if (o === l) return a ? NaN : 1 / 0 * (h ? -1 : 1);
                    a += Math.pow(2, i), o -= c
                }
                return (h ? -1 : 1) * a * Math.pow(2, o - i)
            }, t.write = function(e, t, n, i, r, o) {
                var a, s, l, c = 8 * o - r - 1,
                    u = (1 << c) - 1,
                    p = u >> 1,
                    d = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    h = i ? 0 : o - 1,
                    f = i ? 1 : -1,
                    m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = u) : (a = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), t += a + p >= 1 ? d / l : d * Math.pow(2, 1 - p), t * l >= 2 && (a++, l /= 2), a + p >= u ? (s = 0, a = u) : a + p >= 1 ? (s = (t * l - 1) * Math.pow(2, r), a += p) : (s = t * Math.pow(2, p - 1) * Math.pow(2, r), a = 0)); r >= 8; e[n + h] = 255 & s, h += f, s /= 256, r -= 8);
                for (a = a << r | s, c += r; c > 0; e[n + h] = 255 & a, h += f, a /= 256, c -= 8);
                e[n + h - f] |= 128 * m
            }
        },
        afa7: function(e, t, n) {
            "use strict";
            var i = n("048a"),
                r = {
                    name: "VuePlyr",
                    props: {
                        options: {
                            type: Object,
                            required: !1,
                            default () {
                                return {}
                            }
                        },
                        emit: {
                            type: Array,
                            required: !1,
                            default () {
                                return []
                            }
                        }
                    },
                    data() {
                        return {
                            player: {}
                        }
                    },
                    computed: {
                        opts() {
                            const e = this.options;
                            return this.options.hasOwnProperty("hideYouTubeDOMError") || (e.hideYouTubeDOMError = !0), e
                        }
                    },
                    mounted() {
                        this.player = new i(this.$el.firstChild, this.opts), this.emit.forEach(e => {
                            this.player.on(e, this.emitPlayerEvent)
                        })
                    },
                    beforeDestroy() {
                        try {
                            this.player.destroy()
                        } catch (e) {
                            this.opts.hideYouTubeDOMError && "The YouTube player is not attached to the DOM." === e.message || console.error(e)
                        }
                    },
                    methods: {
                        emitPlayerEvent(e) {
                            this.$emit(e.type, e)
                        }
                    }
                };

            function o(e, t, n, i, r, o, a, s, l, c) {
                "boolean" !== typeof a && (l = s, s = a, a = !1);
                const u = "function" === typeof n ? n.options : n;
                let p;
                if (e && e.render && (u.render = e.render, u.staticRenderFns = e.staticRenderFns, u._compiled = !0, r && (u.functional = !0)), i && (u._scopeId = i), o ? (p = function(e) {
                        e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), t && t.call(this, l(e)), e && e._registeredComponents && e._registeredComponents.add(o)
                    }, u._ssrRegister = p) : t && (p = a ? function(e) {
                        t.call(this, c(e, this.$root.$options.shadowRoot))
                    } : function(e) {
                        t.call(this, s(e))
                    }), p)
                    if (u.functional) {
                        const e = u.render;
                        u.render = function(t, n) {
                            return p.call(n), e(t, n)
                        }
                    } else {
                        const e = u.beforeCreate;
                        u.beforeCreate = e ? [].concat(e, p) : [p]
                    } return n
            }
            const a = "undefined" !== typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

            function s(e) {
                return (e, t) => u(e, t)
            }
            let l;
            const c = {};

            function u(e, t) {
                const n = a ? t.media || "default" : e,
                    i = c[n] || (c[n] = {
                        ids: new Set,
                        styles: []
                    });
                if (!i.ids.has(e)) {
                    i.ids.add(e);
                    let n = t.source;
                    if (t.map && (n += "\n/*# sourceURL=" + t.map.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t.map)))) + " */"), i.element || (i.element = document.createElement("style"), i.element.type = "text/css", t.media && i.element.setAttribute("media", t.media), void 0 === l && (l = document.head || document.getElementsByTagName("head")[0]), l.appendChild(i.element)), "styleSheet" in i.element) i.styles.push(n), i.element.styleSheet.cssText = i.styles.filter(Boolean).join("\n");
                    else {
                        const e = i.ids.size - 1,
                            t = document.createTextNode(n),
                            r = i.element.childNodes;
                        r[e] && i.element.removeChild(r[e]), r.length ? i.element.insertBefore(t, r[e]) : i.element.appendChild(t)
                    }
                }
            }
            const p = r;
            var d = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [e._t("default")], 2)
                },
                h = [];
            d._withStripped = !0;
            const f = function(e) {
                    e && e("data-v-91800632_0", {
                        source: "@keyframes plyr-progress{to{background-position:25px 0}}@keyframes plyr-popup{0%{opacity:.5;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes plyr-fade-in{from{opacity:0}to{opacity:1}}.plyr{-moz-osx-font-smoothing:auto;-webkit-font-smoothing:subpixel-antialiased;direction:ltr;font-family:Avenir,\"Avenir Next\",\"Helvetica Neue\",\"Segoe UI\",Helvetica,Arial,sans-serif;font-variant-numeric:tabular-nums;font-weight:500;line-height:1.7;max-width:100%;min-width:200px;position:relative;text-shadow:none;transition:box-shadow .3s ease}.plyr audio,.plyr video{border-radius:inherit;height:auto;vertical-align:middle;width:100%}.plyr button{font:inherit;line-height:inherit;width:auto}.plyr:focus{outline:0}.plyr--full-ui{box-sizing:border-box}.plyr--full-ui *,.plyr--full-ui ::after,.plyr--full-ui ::before{box-sizing:inherit}.plyr--full-ui a,.plyr--full-ui button,.plyr--full-ui input,.plyr--full-ui label{touch-action:manipulation}.plyr__badge{background:#4a5764;border-radius:2px;color:#fff;font-size:9px;line-height:1;padding:3px 4px}.plyr--full-ui ::-webkit-media-text-track-container{display:none}.plyr__captions{animation:plyr-fade-in .3s ease;bottom:0;color:#fff;display:none;font-size:14px;left:0;padding:10px;position:absolute;text-align:center;transition:transform .4s ease-in-out;width:100%}.plyr__captions .plyr__caption{background:rgba(0,0,0,.8);border-radius:2px;-webkit-box-decoration-break:clone;box-decoration-break:clone;line-height:185%;padding:.2em .5em;white-space:pre-wrap}.plyr__captions .plyr__caption div{display:inline}.plyr__captions span:empty{display:none}@media (min-width:480px){.plyr__captions{font-size:16px;padding:20px}}@media (min-width:768px){.plyr__captions{font-size:18px}}.plyr--captions-active .plyr__captions{display:block}.plyr:not(.plyr--hide-controls) .plyr__controls:not(:empty)~.plyr__captions{transform:translateY(-40px)}.plyr__control{background:0 0;border:0;border-radius:3px;color:inherit;cursor:pointer;flex-shrink:0;overflow:visible;padding:7px;position:relative;transition:all .3s ease}.plyr__control svg{display:block;fill:currentColor;height:18px;pointer-events:none;width:18px}.plyr__control:focus{outline:0}.plyr__control.plyr__tab-focus{box-shadow:0 0 0 5px rgba(0,179,255,.5);outline:0}a.plyr__control{text-decoration:none}a.plyr__control::after,a.plyr__control::before{display:none}.plyr__control.plyr__control--pressed .icon--not-pressed,.plyr__control.plyr__control--pressed .label--not-pressed,.plyr__control:not(.plyr__control--pressed) .icon--pressed,.plyr__control:not(.plyr__control--pressed) .label--pressed{display:none}.plyr--audio .plyr__control.plyr__tab-focus,.plyr--audio .plyr__control:hover,.plyr--audio .plyr__control[aria-expanded=true]{background:#00b3ff;color:#fff}.plyr--video .plyr__control.plyr__tab-focus,.plyr--video .plyr__control:hover,.plyr--video .plyr__control[aria-expanded=true]{background:#00b3ff;color:#fff}.plyr__control--overlaid{background:rgba(0,179,255,.8);border:0;border-radius:100%;color:#fff;display:none;left:50%;padding:15px;position:absolute;top:50%;transform:translate(-50%,-50%);z-index:2}.plyr__control--overlaid svg{left:2px;position:relative}.plyr__control--overlaid:focus,.plyr__control--overlaid:hover{background:#00b3ff}.plyr--playing .plyr__control--overlaid{opacity:0;visibility:hidden}.plyr--full-ui.plyr--video .plyr__control--overlaid{display:block}.plyr--full-ui ::-webkit-media-controls{display:none}.plyr__controls{align-items:center;display:flex;justify-content:flex-end;text-align:center}.plyr__controls .plyr__progress__container{flex:1;min-width:0}.plyr__controls .plyr__controls__item{margin-left:2.5px}.plyr__controls .plyr__controls__item:first-child{margin-left:0;margin-right:auto}.plyr__controls .plyr__controls__item.plyr__progress__container{padding-left:2.5px}.plyr__controls .plyr__controls__item.plyr__time{padding:0 5px}.plyr__controls .plyr__controls__item.plyr__progress__container:first-child,.plyr__controls .plyr__controls__item.plyr__time+.plyr__time,.plyr__controls .plyr__controls__item.plyr__time:first-child{padding-left:0}.plyr__controls .plyr__controls__item.plyr__volume{padding-right:5px}.plyr__controls .plyr__controls__item.plyr__volume:first-child{padding-right:0}.plyr__controls:empty{display:none}.plyr--audio .plyr__controls{background:#fff;border-radius:inherit;color:#4a5764;padding:10px}.plyr--video .plyr__controls{background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.7));border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0;color:#fff;left:0;padding:20px 5px 5px;position:absolute;right:0;transition:opacity .4s ease-in-out,transform .4s ease-in-out;z-index:3}@media (min-width:480px){.plyr--video .plyr__controls{padding:35px 10px 10px}}.plyr--video.plyr--hide-controls .plyr__controls{opacity:0;pointer-events:none;transform:translateY(100%)}.plyr [data-plyr=airplay],.plyr [data-plyr=captions],.plyr [data-plyr=fullscreen],.plyr [data-plyr=pip]{display:none}.plyr--airplay-supported [data-plyr=airplay],.plyr--captions-enabled [data-plyr=captions],.plyr--fullscreen-enabled [data-plyr=fullscreen],.plyr--pip-supported [data-plyr=pip]{display:inline-block}.plyr__menu{display:flex;position:relative}.plyr__menu .plyr__control svg{transition:transform .3s ease}.plyr__menu .plyr__control[aria-expanded=true] svg{transform:rotate(90deg)}.plyr__menu .plyr__control[aria-expanded=true] .plyr__tooltip{display:none}.plyr__menu__container{animation:plyr-popup .2s ease;background:rgba(255,255,255,.9);border-radius:4px;bottom:100%;box-shadow:0 1px 2px rgba(0,0,0,.15);color:#4a5764;font-size:16px;margin-bottom:10px;position:absolute;right:-3px;text-align:left;white-space:nowrap;z-index:3}.plyr__menu__container>div{overflow:hidden;transition:height .35s cubic-bezier(.4,0,.2,1),width .35s cubic-bezier(.4,0,.2,1)}.plyr__menu__container::after{border:4px solid transparent;border-top-color:rgba(255,255,255,.9);content:'';height:0;position:absolute;right:15px;top:100%;width:0}.plyr__menu__container [role=menu]{padding:7px}.plyr__menu__container [role=menuitem],.plyr__menu__container [role=menuitemradio]{margin-top:2px}.plyr__menu__container [role=menuitem]:first-child,.plyr__menu__container [role=menuitemradio]:first-child{margin-top:0}.plyr__menu__container .plyr__control{align-items:center;color:#4a5764;display:flex;font-size:14px;padding:4px 11px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.plyr__menu__container .plyr__control>span{align-items:inherit;display:flex;width:100%}.plyr__menu__container .plyr__control::after{border:4px solid transparent;content:'';position:absolute;top:50%;transform:translateY(-50%)}.plyr__menu__container .plyr__control--forward{padding-right:28px}.plyr__menu__container .plyr__control--forward::after{border-left-color:rgba(74,87,100,.8);right:5px}.plyr__menu__container .plyr__control--forward.plyr__tab-focus::after,.plyr__menu__container .plyr__control--forward:hover::after{border-left-color:currentColor}.plyr__menu__container .plyr__control--back{font-weight:500;margin:7px;margin-bottom:3px;padding-left:28px;position:relative;width:calc(100% - 14px)}.plyr__menu__container .plyr__control--back::after{border-right-color:rgba(74,87,100,.8);left:7px}.plyr__menu__container .plyr__control--back::before{background:#c1c9d1;box-shadow:0 1px 0 #fff;content:'';height:1px;left:0;margin-top:4px;overflow:hidden;position:absolute;right:0;top:100%}.plyr__menu__container .plyr__control--back.plyr__tab-focus::after,.plyr__menu__container .plyr__control--back:hover::after{border-right-color:currentColor}.plyr__menu__container .plyr__control[role=menuitemradio]{padding-left:7px}.plyr__menu__container .plyr__control[role=menuitemradio]::after,.plyr__menu__container .plyr__control[role=menuitemradio]::before{border-radius:100%}.plyr__menu__container .plyr__control[role=menuitemradio]::before{background:rgba(0,0,0,.1);content:'';display:block;flex-shrink:0;height:16px;margin-right:10px;transition:all .3s ease;width:16px}.plyr__menu__container .plyr__control[role=menuitemradio]::after{background:#fff;border:0;height:6px;left:12px;opacity:0;top:50%;transform:translateY(-50%) scale(0);transition:transform .3s ease,opacity .3s ease;width:6px}.plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]::before{background:#00b3ff}.plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]::after{opacity:1;transform:translateY(-50%) scale(1)}.plyr__menu__container .plyr__control[role=menuitemradio].plyr__tab-focus::before,.plyr__menu__container .plyr__control[role=menuitemradio]:hover::before{background:rgba(0,0,0,.1)}.plyr__menu__container .plyr__menu__value{align-items:center;display:flex;margin-left:auto;margin-right:-5px;overflow:hidden;padding-left:25px;pointer-events:none}.plyr--full-ui input[type=range]{-webkit-appearance:none;background:0 0;border:0;border-radius:26px;color:#00b3ff;display:block;height:19px;margin:0;padding:0;transition:box-shadow .3s ease;width:100%}.plyr--full-ui input[type=range]::-webkit-slider-runnable-track{background:0 0;border:0;border-radius:2.5px;height:5px;transition:box-shadow .3s ease;-webkit-user-select:none;user-select:none;background-image:linear-gradient(to right,currentColor var(--value,0),transparent var(--value,0))}.plyr--full-ui input[type=range]::-webkit-slider-thumb{background:#fff;border:0;border-radius:100%;box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2);height:13px;position:relative;transition:all .2s ease;width:13px;-webkit-appearance:none;margin-top:-4px}.plyr--full-ui input[type=range]::-moz-range-track{background:0 0;border:0;border-radius:2.5px;height:5px;transition:box-shadow .3s ease;-moz-user-select:none;user-select:none}.plyr--full-ui input[type=range]::-moz-range-thumb{background:#fff;border:0;border-radius:100%;box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2);height:13px;position:relative;transition:all .2s ease;width:13px}.plyr--full-ui input[type=range]::-moz-range-progress{background:currentColor;border-radius:2.5px;height:5px}.plyr--full-ui input[type=range]::-ms-track{background:0 0;border:0;border-radius:2.5px;height:5px;transition:box-shadow .3s ease;-ms-user-select:none;user-select:none;color:transparent}.plyr--full-ui input[type=range]::-ms-fill-upper{background:0 0;border:0;border-radius:2.5px;height:5px;transition:box-shadow .3s ease;-ms-user-select:none;user-select:none}.plyr--full-ui input[type=range]::-ms-fill-lower{background:0 0;border:0;border-radius:2.5px;height:5px;transition:box-shadow .3s ease;-ms-user-select:none;user-select:none;background:currentColor}.plyr--full-ui input[type=range]::-ms-thumb{background:#fff;border:0;border-radius:100%;box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2);height:13px;position:relative;transition:all .2s ease;width:13px;margin-top:0}.plyr--full-ui input[type=range]::-ms-tooltip{display:none}.plyr--full-ui input[type=range]:focus{outline:0}.plyr--full-ui input[type=range]::-moz-focus-outer{border:0}.plyr--full-ui input[type=range].plyr__tab-focus::-webkit-slider-runnable-track{box-shadow:0 0 0 5px rgba(0,179,255,.5);outline:0}.plyr--full-ui input[type=range].plyr__tab-focus::-moz-range-track{box-shadow:0 0 0 5px rgba(0,179,255,.5);outline:0}.plyr--full-ui input[type=range].plyr__tab-focus::-ms-track{box-shadow:0 0 0 5px rgba(0,179,255,.5);outline:0}.plyr--full-ui.plyr--video input[type=range]::-webkit-slider-runnable-track{background-color:rgba(255,255,255,.25)}.plyr--full-ui.plyr--video input[type=range]::-moz-range-track{background-color:rgba(255,255,255,.25)}.plyr--full-ui.plyr--video input[type=range]::-ms-track{background-color:rgba(255,255,255,.25)}.plyr--full-ui.plyr--video input[type=range]:active::-webkit-slider-thumb{box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2),0 0 0 3px rgba(255,255,255,.5)}.plyr--full-ui.plyr--video input[type=range]:active::-moz-range-thumb{box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2),0 0 0 3px rgba(255,255,255,.5)}.plyr--full-ui.plyr--video input[type=range]:active::-ms-thumb{box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2),0 0 0 3px rgba(255,255,255,.5)}.plyr--full-ui.plyr--audio input[type=range]::-webkit-slider-runnable-track{background-color:rgba(193,201,209,.66)}.plyr--full-ui.plyr--audio input[type=range]::-moz-range-track{background-color:rgba(193,201,209,.66)}.plyr--full-ui.plyr--audio input[type=range]::-ms-track{background-color:rgba(193,201,209,.66)}.plyr--full-ui.plyr--audio input[type=range]:active::-webkit-slider-thumb{box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2),0 0 0 3px rgba(0,0,0,.1)}.plyr--full-ui.plyr--audio input[type=range]:active::-moz-range-thumb{box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2),0 0 0 3px rgba(0,0,0,.1)}.plyr--full-ui.plyr--audio input[type=range]:active::-ms-thumb{box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2),0 0 0 3px rgba(0,0,0,.1)}.plyr__poster{background-color:#000;background-position:50% 50%;background-repeat:no-repeat;background-size:contain;height:100%;left:0;opacity:0;position:absolute;top:0;transition:opacity .2s ease;width:100%;z-index:1}.plyr--stopped.plyr__poster-enabled .plyr__poster{opacity:1}.plyr__time{font-size:14px}.plyr__time+.plyr__time::before{content:'\\2044';margin-right:10px}@media (max-width:767px){.plyr__time+.plyr__time{display:none}}.plyr--video .plyr__time{text-shadow:0 1px 1px rgba(0,0,0,.15)}.plyr__tooltip{background:rgba(255,255,255,.9);border-radius:3px;bottom:100%;box-shadow:0 1px 2px rgba(0,0,0,.15);color:#4a5764;font-size:14px;font-weight:500;left:50%;line-height:1.3;margin-bottom:10px;opacity:0;padding:5px 7.5px;pointer-events:none;position:absolute;transform:translate(-50%,10px) scale(.8);transform-origin:50% 100%;transition:transform .2s .1s ease,opacity .2s .1s ease;white-space:nowrap;z-index:2}.plyr__tooltip::before{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(255,255,255,.9);bottom:-4px;content:'';height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;z-index:2}.plyr .plyr__control.plyr__tab-focus .plyr__tooltip,.plyr .plyr__control:hover .plyr__tooltip,.plyr__tooltip--visible{opacity:1;transform:translate(-50%,0) scale(1)}.plyr .plyr__control:hover .plyr__tooltip{z-index:3}.plyr__controls>.plyr__control:first-child .plyr__tooltip,.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip{left:0;transform:translate(0,10px) scale(.8);transform-origin:0 100%}.plyr__controls>.plyr__control:first-child .plyr__tooltip::before,.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip::before{left:16px}.plyr__controls>.plyr__control:last-child .plyr__tooltip{left:auto;right:0;transform:translate(0,10px) scale(.8);transform-origin:100% 100%}.plyr__controls>.plyr__control:last-child .plyr__tooltip::before{left:auto;right:16px;transform:translateX(50%)}.plyr__controls>.plyr__control:first-child .plyr__tooltip--visible,.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip--visible,.plyr__controls>.plyr__control:first-child+.plyr__control.plyr__tab-focus .plyr__tooltip,.plyr__controls>.plyr__control:first-child+.plyr__control:hover .plyr__tooltip,.plyr__controls>.plyr__control:first-child.plyr__tab-focus .plyr__tooltip,.plyr__controls>.plyr__control:first-child:hover .plyr__tooltip,.plyr__controls>.plyr__control:last-child .plyr__tooltip--visible,.plyr__controls>.plyr__control:last-child.plyr__tab-focus .plyr__tooltip,.plyr__controls>.plyr__control:last-child:hover .plyr__tooltip{transform:translate(0,0) scale(1)}.plyr--video{background:#000;overflow:hidden}.plyr--video.plyr--menu-open{overflow:visible}.plyr__video-wrapper{background:#000;border-radius:inherit;overflow:hidden;position:relative;z-index:0}.plyr__video-embed,.plyr__video-wrapper--fixed-ratio{height:0;padding-bottom:56.25%}.plyr__video-embed iframe,.plyr__video-wrapper--fixed-ratio video{border:0;height:100%;left:0;position:absolute;top:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.plyr--full-ui .plyr__video-embed>.plyr__video-embed__container{padding-bottom:240%;position:relative;transform:translateY(-38.28125%)}.plyr__progress{left:6.5px;margin-right:13px;position:relative}.plyr__progress input[type=range],.plyr__progress__buffer{margin-left:-6.5px;margin-right:-6.5px;width:calc(100% + 13px)}.plyr__progress input[type=range]{position:relative;z-index:2}.plyr__progress .plyr__tooltip{font-size:14px;left:0}.plyr__progress__buffer{-webkit-appearance:none;background:0 0;border:0;border-radius:100px;height:5px;left:0;margin-top:-2.5px;padding:0;position:absolute;top:50%}.plyr__progress__buffer::-webkit-progress-bar{background:0 0}.plyr__progress__buffer::-webkit-progress-value{background:currentColor;border-radius:100px;min-width:5px;transition:width .2s ease}.plyr__progress__buffer::-moz-progress-bar{background:currentColor;border-radius:100px;min-width:5px;transition:width .2s ease}.plyr__progress__buffer::-ms-fill{border-radius:100px;transition:width .2s ease}.plyr--video .plyr__progress__buffer{box-shadow:0 1px 1px rgba(0,0,0,.15);color:rgba(255,255,255,.25)}.plyr--audio .plyr__progress__buffer{color:rgba(193,201,209,.66)}.plyr--loading .plyr__progress__buffer{animation:plyr-progress 1s linear infinite;background-image:linear-gradient(-45deg,rgba(35,41,47,.6) 25%,transparent 25%,transparent 50%,rgba(35,41,47,.6) 50%,rgba(35,41,47,.6) 75%,transparent 75%,transparent);background-repeat:repeat-x;background-size:25px 25px;color:transparent}.plyr--video.plyr--loading .plyr__progress__buffer{background-color:rgba(255,255,255,.25)}.plyr--audio.plyr--loading .plyr__progress__buffer{background-color:rgba(193,201,209,.66)}.plyr__volume{align-items:center;display:flex;flex:1;position:relative}.plyr__volume input[type=range]{margin-left:5px;position:relative;z-index:2}@media (min-width:480px){.plyr__volume{max-width:90px}}@media (min-width:768px){.plyr__volume{max-width:110px}}.plyr--is-ios .plyr__volume{display:none!important}.plyr--is-ios.plyr--vimeo [data-plyr=mute]{display:none!important}.plyr:-webkit-full-screen{background:#000;border-radius:0!important;height:100%;margin:0;width:100%}.plyr:-ms-fullscreen{background:#000;border-radius:0!important;height:100%;margin:0;width:100%}.plyr:fullscreen{background:#000;border-radius:0!important;height:100%;margin:0;width:100%}.plyr:-webkit-full-screen video{height:100%}.plyr:-ms-fullscreen video{height:100%}.plyr:fullscreen video{height:100%}.plyr:-webkit-full-screen .plyr__video-wrapper{height:100%;position:static}.plyr:-ms-fullscreen .plyr__video-wrapper{height:100%;position:static}.plyr:fullscreen .plyr__video-wrapper{height:100%;position:static}.plyr:-webkit-full-screen.plyr--vimeo .plyr__video-wrapper{height:0;position:relative;top:50%;transform:translateY(-50%)}.plyr:-ms-fullscreen.plyr--vimeo .plyr__video-wrapper{height:0;position:relative;top:50%;transform:translateY(-50%)}.plyr:fullscreen.plyr--vimeo .plyr__video-wrapper{height:0;position:relative;top:50%;transform:translateY(-50%)}.plyr:-webkit-full-screen .plyr__control .icon--exit-fullscreen{display:block}.plyr:-ms-fullscreen .plyr__control .icon--exit-fullscreen{display:block}.plyr:fullscreen .plyr__control .icon--exit-fullscreen{display:block}.plyr:-webkit-full-screen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:-ms-fullscreen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:fullscreen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:-webkit-full-screen.plyr--hide-controls{cursor:none}.plyr:-ms-fullscreen.plyr--hide-controls{cursor:none}.plyr:fullscreen.plyr--hide-controls{cursor:none}@media (min-width:1024px){.plyr:-webkit-full-screen .plyr__captions{font-size:21px}.plyr:-ms-fullscreen .plyr__captions{font-size:21px}.plyr:fullscreen .plyr__captions{font-size:21px}}.plyr:-webkit-full-screen{background:#000;border-radius:0!important;height:100%;margin:0;width:100%}.plyr:-webkit-full-screen video{height:100%}.plyr:-webkit-full-screen .plyr__video-wrapper{height:100%;position:static}.plyr:-webkit-full-screen.plyr--vimeo .plyr__video-wrapper{height:0;position:relative;top:50%;transform:translateY(-50%)}.plyr:-webkit-full-screen .plyr__control .icon--exit-fullscreen{display:block}.plyr:-webkit-full-screen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:-webkit-full-screen.plyr--hide-controls{cursor:none}@media (min-width:1024px){.plyr:-webkit-full-screen .plyr__captions{font-size:21px}}.plyr:-moz-full-screen{background:#000;border-radius:0!important;height:100%;margin:0;width:100%}.plyr:-moz-full-screen video{height:100%}.plyr:-moz-full-screen .plyr__video-wrapper{height:100%;position:static}.plyr:-moz-full-screen.plyr--vimeo .plyr__video-wrapper{height:0;position:relative;top:50%;transform:translateY(-50%)}.plyr:-moz-full-screen .plyr__control .icon--exit-fullscreen{display:block}.plyr:-moz-full-screen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:-moz-full-screen.plyr--hide-controls{cursor:none}@media (min-width:1024px){.plyr:-moz-full-screen .plyr__captions{font-size:21px}}.plyr:-ms-fullscreen{background:#000;border-radius:0!important;height:100%;margin:0;width:100%}.plyr:-ms-fullscreen video{height:100%}.plyr:-ms-fullscreen .plyr__video-wrapper{height:100%;position:static}.plyr:-ms-fullscreen.plyr--vimeo .plyr__video-wrapper{height:0;position:relative;top:50%;transform:translateY(-50%)}.plyr:-ms-fullscreen .plyr__control .icon--exit-fullscreen{display:block}.plyr:-ms-fullscreen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:-ms-fullscreen.plyr--hide-controls{cursor:none}@media (min-width:1024px){.plyr:-ms-fullscreen .plyr__captions{font-size:21px}}.plyr--fullscreen-fallback{background:#000;border-radius:0!important;height:100%;margin:0;width:100%;bottom:0;left:0;position:fixed;right:0;top:0;z-index:10000000}.plyr--fullscreen-fallback video{height:100%}.plyr--fullscreen-fallback .plyr__video-wrapper{height:100%;position:static}.plyr--fullscreen-fallback.plyr--vimeo .plyr__video-wrapper{height:0;position:relative;top:50%;transform:translateY(-50%)}.plyr--fullscreen-fallback .plyr__control .icon--exit-fullscreen{display:block}.plyr--fullscreen-fallback .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr--fullscreen-fallback.plyr--hide-controls{cursor:none}@media (min-width:1024px){.plyr--fullscreen-fallback .plyr__captions{font-size:21px}}.plyr__ads{border-radius:inherit;bottom:0;cursor:pointer;left:0;overflow:hidden;position:absolute;right:0;top:0;z-index:-1}.plyr__ads>div,.plyr__ads>div iframe{height:100%;position:absolute;width:100%}.plyr__ads::after{background:rgba(35,41,47,.8);border-radius:2px;bottom:10px;color:#fff;content:attr(data-badge-text);font-size:11px;padding:2px 6px;pointer-events:none;position:absolute;right:10px;z-index:3}.plyr__ads::after:empty{display:none}.plyr__cues{background:currentColor;display:block;height:5px;left:0;margin:-2.5px 0 0;opacity:.8;position:absolute;top:50%;width:3px;z-index:3}.plyr__preview-thumb{background-color:rgba(255,255,255,.9);border-radius:3px;bottom:100%;box-shadow:0 1px 2px rgba(0,0,0,.15);margin-bottom:10px;opacity:0;padding:3px;pointer-events:none;position:absolute;transform:translate(0,10px) scale(.8);transform-origin:50% 100%;transition:transform .2s .1s ease,opacity .2s .1s ease;z-index:2}.plyr__preview-thumb--is-shown{opacity:1;transform:translate(0,0) scale(1)}.plyr__preview-thumb::before{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(255,255,255,.9);bottom:-4px;content:'';height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;z-index:2}.plyr__preview-thumb__image-container{background:#c1c9d1;border-radius:2px;overflow:hidden;position:relative;z-index:0}.plyr__preview-thumb__image-container img{height:100%;left:0;max-height:none;max-width:none;position:absolute;top:0;width:100%}.plyr__preview-thumb__time-container{bottom:6px;left:0;position:absolute;right:0;white-space:nowrap;z-index:3}.plyr__preview-thumb__time-container span{background-color:rgba(0,0,0,.55);border-radius:2px;color:#fff;font-size:14px;padding:3px 6px}.plyr__preview-scrubbing{bottom:0;filter:blur(1px);height:100%;left:0;margin:auto;opacity:0;overflow:hidden;position:absolute;right:0;top:0;transition:opacity .3s ease;width:100%;z-index:1}.plyr__preview-scrubbing--is-shown{opacity:1}.plyr__preview-scrubbing img{height:100%;left:0;max-height:none;max-width:none;object-fit:contain;position:absolute;top:0;width:100%}.plyr--no-transition{transition:none!important}.plyr__sr-only{clip:rect(1px,1px,1px,1px);overflow:hidden;border:0!important;height:1px!important;padding:0!important;position:absolute!important;width:1px!important}.plyr [hidden]{display:none!important}",
                        map: void 0,
                        media: void 0
                    })
                },
                m = void 0,
                g = void 0,
                y = !1;
            var b = o({
                render: d,
                staticRenderFns: h
            }, f, p, m, y, g, !1, s, void 0, void 0);
            b.install = (e, t = {}) => {
                t.plyr && (b.props.options.default = () => ({
                    ...t.plyr
                })), t.emit && (b.props.emit.default = () => [...t.emit]), e.component(b.name, b)
            }, "undefined" !== typeof window && window.Vue && window.Vue.use(b), t["a"] = b
        },
        b639: function(e, t, n) {
            "use strict";
            (function(e) {
                /*!
                 * The buffer module from node.js, for the browser.
                 *
                 * @author   Feross Aboukhadijeh <http://feross.org>
                 * @license  MIT
                 */
                var i = n("1fb5"),
                    r = n("9152"),
                    o = n("e3db");

                function a() {
                    try {
                        var e = new Uint8Array(1);
                        return e.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function() {
                                return 42
                            }
                        }, 42 === e.foo() && "function" === typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                    } catch (t) {
                        return !1
                    }
                }

                function s() {
                    return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                }

                function l(e, t) {
                    if (s() < t) throw new RangeError("Invalid typed array length");
                    return c.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t), e.__proto__ = c.prototype) : (null === e && (e = new c(t)), e.length = t), e
                }

                function c(e, t, n) {
                    if (!c.TYPED_ARRAY_SUPPORT && !(this instanceof c)) return new c(e, t, n);
                    if ("number" === typeof e) {
                        if ("string" === typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                        return h(this, e)
                    }
                    return u(this, e, t, n)
                }

                function u(e, t, n, i) {
                    if ("number" === typeof t) throw new TypeError('"value" argument must not be a number');
                    return "undefined" !== typeof ArrayBuffer && t instanceof ArrayBuffer ? g(e, t, n, i) : "string" === typeof t ? f(e, t, n) : y(e, t)
                }

                function p(e) {
                    if ("number" !== typeof e) throw new TypeError('"size" argument must be a number');
                    if (e < 0) throw new RangeError('"size" argument must not be negative')
                }

                function d(e, t, n, i) {
                    return p(t), t <= 0 ? l(e, t) : void 0 !== n ? "string" === typeof i ? l(e, t).fill(n, i) : l(e, t).fill(n) : l(e, t)
                }

                function h(e, t) {
                    if (p(t), e = l(e, t < 0 ? 0 : 0 | b(t)), !c.TYPED_ARRAY_SUPPORT)
                        for (var n = 0; n < t; ++n) e[n] = 0;
                    return e
                }

                function f(e, t, n) {
                    if ("string" === typeof n && "" !== n || (n = "utf8"), !c.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                    var i = 0 | _(t, n);
                    e = l(e, i);
                    var r = e.write(t, n);
                    return r !== i && (e = e.slice(0, r)), e
                }

                function m(e, t) {
                    var n = t.length < 0 ? 0 : 0 | b(t.length);
                    e = l(e, n);
                    for (var i = 0; i < n; i += 1) e[i] = 255 & t[i];
                    return e
                }

                function g(e, t, n, i) {
                    if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < n + (i || 0)) throw new RangeError("'length' is out of bounds");
                    return t = void 0 === n && void 0 === i ? new Uint8Array(t) : void 0 === i ? new Uint8Array(t, n) : new Uint8Array(t, n, i), c.TYPED_ARRAY_SUPPORT ? (e = t, e.__proto__ = c.prototype) : e = m(e, t), e
                }

                function y(e, t) {
                    if (c.isBuffer(t)) {
                        var n = 0 | b(t.length);
                        return e = l(e, n), 0 === e.length ? e : (t.copy(e, 0, 0, n), e)
                    }
                    if (t) {
                        if ("undefined" !== typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" !== typeof t.length || te(t.length) ? l(e, 0) : m(e, t);
                        if ("Buffer" === t.type && o(t.data)) return m(e, t.data)
                    }
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }

                function b(e) {
                    if (e >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
                    return 0 | e
                }

                function v(e) {
                    return +e != e && (e = 0), c.alloc(+e)
                }

                function _(e, t) {
                    if (c.isBuffer(e)) return e.length;
                    if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                    "string" !== typeof e && (e = "" + e);
                    var n = e.length;
                    if (0 === n) return 0;
                    for (var i = !1;;) switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return J(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return Z(e).length;
                        default:
                            if (i) return J(e).length;
                            t = ("" + t).toLowerCase(), i = !0
                    }
                }

                function w(e, t, n) {
                    var i = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                    if (n >>>= 0, t >>>= 0, n <= t) return "";
                    e || (e = "utf8");
                    while (1) switch (e) {
                        case "hex":
                            return D(this, t, n);
                        case "utf8":
                        case "utf-8":
                            return R(this, t, n);
                        case "ascii":
                            return L(this, t, n);
                        case "latin1":
                        case "binary":
                            return B(this, t, n);
                        case "base64":
                            return M(this, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return U(this, t, n);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), i = !0
                    }
                }

                function k(e, t, n) {
                    var i = e[t];
                    e[t] = e[n], e[n] = i
                }

                function x(e, t, n, i, r) {
                    if (0 === e.length) return -1;
                    if ("string" === typeof n ? (i = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = r ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                        if (r) return -1;
                        n = e.length - 1
                    } else if (n < 0) {
                        if (!r) return -1;
                        n = 0
                    }
                    if ("string" === typeof t && (t = c.from(t, i)), c.isBuffer(t)) return 0 === t.length ? -1 : T(e, t, n, i, r);
                    if ("number" === typeof t) return t &= 255, c.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : T(e, [t], n, i, r);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function T(e, t, n, i, r) {
                    var o, a = 1,
                        s = e.length,
                        l = t.length;
                    if (void 0 !== i && (i = String(i).toLowerCase(), "ucs2" === i || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                        if (e.length < 2 || t.length < 2) return -1;
                        a = 2, s /= 2, l /= 2, n /= 2
                    }

                    function c(e, t) {
                        return 1 === a ? e[t] : e.readUInt16BE(t * a)
                    }
                    if (r) {
                        var u = -1;
                        for (o = n; o < s; o++)
                            if (c(e, o) === c(t, -1 === u ? 0 : o - u)) {
                                if (-1 === u && (u = o), o - u + 1 === l) return u * a
                            } else -1 !== u && (o -= o - u), u = -1
                    } else
                        for (n + l > s && (n = s - l), o = n; o >= 0; o--) {
                            for (var p = !0, d = 0; d < l; d++)
                                if (c(e, o + d) !== c(t, d)) {
                                    p = !1;
                                    break
                                } if (p) return o
                        }
                    return -1
                }

                function A(e, t, n, i) {
                    n = Number(n) || 0;
                    var r = e.length - n;
                    i ? (i = Number(i), i > r && (i = r)) : i = r;
                    var o = t.length;
                    if (o % 2 !== 0) throw new TypeError("Invalid hex string");
                    i > o / 2 && (i = o / 2);
                    for (var a = 0; a < i; ++a) {
                        var s = parseInt(t.substr(2 * a, 2), 16);
                        if (isNaN(s)) return a;
                        e[n + a] = s
                    }
                    return a
                }

                function C(e, t, n, i) {
                    return ee(J(t, e.length - n), e, n, i)
                }

                function E(e, t, n, i) {
                    return ee(Q(t), e, n, i)
                }

                function S(e, t, n, i) {
                    return E(e, t, n, i)
                }

                function P(e, t, n, i) {
                    return ee(Z(t), e, n, i)
                }

                function I(e, t, n, i) {
                    return ee(G(t, e.length - n), e, n, i)
                }

                function M(e, t, n) {
                    return 0 === t && n === e.length ? i.fromByteArray(e) : i.fromByteArray(e.slice(t, n))
                }

                function R(e, t, n) {
                    n = Math.min(e.length, n);
                    var i = [],
                        r = t;
                    while (r < n) {
                        var o, a, s, l, c = e[r],
                            u = null,
                            p = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                        if (r + p <= n) switch (p) {
                            case 1:
                                c < 128 && (u = c);
                                break;
                            case 2:
                                o = e[r + 1], 128 === (192 & o) && (l = (31 & c) << 6 | 63 & o, l > 127 && (u = l));
                                break;
                            case 3:
                                o = e[r + 1], a = e[r + 2], 128 === (192 & o) && 128 === (192 & a) && (l = (15 & c) << 12 | (63 & o) << 6 | 63 & a, l > 2047 && (l < 55296 || l > 57343) && (u = l));
                                break;
                            case 4:
                                o = e[r + 1], a = e[r + 2], s = e[r + 3], 128 === (192 & o) && 128 === (192 & a) && 128 === (192 & s) && (l = (15 & c) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s, l > 65535 && l < 1114112 && (u = l))
                        }
                        null === u ? (u = 65533, p = 1) : u > 65535 && (u -= 65536, i.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), i.push(u), r += p
                    }
                    return O(i)
                }
                t.Buffer = c, t.SlowBuffer = v, t.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : a(), t.kMaxLength = s(), c.poolSize = 8192, c._augment = function(e) {
                    return e.__proto__ = c.prototype, e
                }, c.from = function(e, t, n) {
                    return u(null, e, t, n)
                }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" !== typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
                    value: null,
                    configurable: !0
                })), c.alloc = function(e, t, n) {
                    return d(null, e, t, n)
                }, c.allocUnsafe = function(e) {
                    return h(null, e)
                }, c.allocUnsafeSlow = function(e) {
                    return h(null, e)
                }, c.isBuffer = function(e) {
                    return !(null == e || !e._isBuffer)
                }, c.compare = function(e, t) {
                    if (!c.isBuffer(e) || !c.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                    if (e === t) return 0;
                    for (var n = e.length, i = t.length, r = 0, o = Math.min(n, i); r < o; ++r)
                        if (e[r] !== t[r]) {
                            n = e[r], i = t[r];
                            break
                        } return n < i ? -1 : i < n ? 1 : 0
                }, c.isEncoding = function(e) {
                    switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, c.concat = function(e, t) {
                    if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return c.alloc(0);
                    var n;
                    if (void 0 === t)
                        for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                    var i = c.allocUnsafe(t),
                        r = 0;
                    for (n = 0; n < e.length; ++n) {
                        var a = e[n];
                        if (!c.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                        a.copy(i, r), r += a.length
                    }
                    return i
                }, c.byteLength = _, c.prototype._isBuffer = !0, c.prototype.swap16 = function() {
                    var e = this.length;
                    if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var t = 0; t < e; t += 2) k(this, t, t + 1);
                    return this
                }, c.prototype.swap32 = function() {
                    var e = this.length;
                    if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var t = 0; t < e; t += 4) k(this, t, t + 3), k(this, t + 1, t + 2);
                    return this
                }, c.prototype.swap64 = function() {
                    var e = this.length;
                    if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var t = 0; t < e; t += 8) k(this, t, t + 7), k(this, t + 1, t + 6), k(this, t + 2, t + 5), k(this, t + 3, t + 4);
                    return this
                }, c.prototype.toString = function() {
                    var e = 0 | this.length;
                    return 0 === e ? "" : 0 === arguments.length ? R(this, 0, e) : w.apply(this, arguments)
                }, c.prototype.equals = function(e) {
                    if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    return this === e || 0 === c.compare(this, e)
                }, c.prototype.inspect = function() {
                    var e = "",
                        n = t.INSPECT_MAX_BYTES;
                    return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
                }, c.prototype.compare = function(e, t, n, i, r) {
                    if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === i && (i = 0), void 0 === r && (r = this.length), t < 0 || n > e.length || i < 0 || r > this.length) throw new RangeError("out of range index");
                    if (i >= r && t >= n) return 0;
                    if (i >= r) return -1;
                    if (t >= n) return 1;
                    if (t >>>= 0, n >>>= 0, i >>>= 0, r >>>= 0, this === e) return 0;
                    for (var o = r - i, a = n - t, s = Math.min(o, a), l = this.slice(i, r), u = e.slice(t, n), p = 0; p < s; ++p)
                        if (l[p] !== u[p]) {
                            o = l[p], a = u[p];
                            break
                        } return o < a ? -1 : a < o ? 1 : 0
                }, c.prototype.includes = function(e, t, n) {
                    return -1 !== this.indexOf(e, t, n)
                }, c.prototype.indexOf = function(e, t, n) {
                    return x(this, e, t, n, !0)
                }, c.prototype.lastIndexOf = function(e, t, n) {
                    return x(this, e, t, n, !1)
                }, c.prototype.write = function(e, t, n, i) {
                    if (void 0 === t) i = "utf8", n = this.length, t = 0;
                    else if (void 0 === n && "string" === typeof t) i = t, n = this.length, t = 0;
                    else {
                        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        t |= 0, isFinite(n) ? (n |= 0, void 0 === i && (i = "utf8")) : (i = n, n = void 0)
                    }
                    var r = this.length - t;
                    if ((void 0 === n || n > r) && (n = r), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    i || (i = "utf8");
                    for (var o = !1;;) switch (i) {
                        case "hex":
                            return A(this, e, t, n);
                        case "utf8":
                        case "utf-8":
                            return C(this, e, t, n);
                        case "ascii":
                            return E(this, e, t, n);
                        case "latin1":
                        case "binary":
                            return S(this, e, t, n);
                        case "base64":
                            return P(this, e, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return I(this, e, t, n);
                        default:
                            if (o) throw new TypeError("Unknown encoding: " + i);
                            i = ("" + i).toLowerCase(), o = !0
                    }
                }, c.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                };
                var N = 4096;

                function O(e) {
                    var t = e.length;
                    if (t <= N) return String.fromCharCode.apply(String, e);
                    var n = "",
                        i = 0;
                    while (i < t) n += String.fromCharCode.apply(String, e.slice(i, i += N));
                    return n
                }

                function L(e, t, n) {
                    var i = "";
                    n = Math.min(e.length, n);
                    for (var r = t; r < n; ++r) i += String.fromCharCode(127 & e[r]);
                    return i
                }

                function B(e, t, n) {
                    var i = "";
                    n = Math.min(e.length, n);
                    for (var r = t; r < n; ++r) i += String.fromCharCode(e[r]);
                    return i
                }

                function D(e, t, n) {
                    var i = e.length;
                    (!t || t < 0) && (t = 0), (!n || n < 0 || n > i) && (n = i);
                    for (var r = "", o = t; o < n; ++o) r += X(e[o]);
                    return r
                }

                function U(e, t, n) {
                    for (var i = e.slice(t, n), r = "", o = 0; o < i.length; o += 2) r += String.fromCharCode(i[o] + 256 * i[o + 1]);
                    return r
                }

                function j(e, t, n) {
                    if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                    if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
                }

                function F(e, t, n, i, r, o) {
                    if (!c.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (t > r || t < o) throw new RangeError('"value" argument is out of bounds');
                    if (n + i > e.length) throw new RangeError("Index out of range")
                }

                function z(e, t, n, i) {
                    t < 0 && (t = 65535 + t + 1);
                    for (var r = 0, o = Math.min(e.length - n, 2); r < o; ++r) e[n + r] = (t & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r)
                }

                function q(e, t, n, i) {
                    t < 0 && (t = 4294967295 + t + 1);
                    for (var r = 0, o = Math.min(e.length - n, 4); r < o; ++r) e[n + r] = t >>> 8 * (i ? r : 3 - r) & 255
                }

                function H(e, t, n, i, r, o) {
                    if (n + i > e.length) throw new RangeError("Index out of range");
                    if (n < 0) throw new RangeError("Index out of range")
                }

                function Y(e, t, n, i, o) {
                    return o || H(e, t, n, 4, 34028234663852886e22, -34028234663852886e22), r.write(e, t, n, i, 23, 4), n + 4
                }

                function V(e, t, n, i, o) {
                    return o || H(e, t, n, 8, 17976931348623157e292, -17976931348623157e292), r.write(e, t, n, i, 52, 8), n + 8
                }
                c.prototype.slice = function(e, t) {
                    var n, i = this.length;
                    if (e = ~~e, t = void 0 === t ? i : ~~t, e < 0 ? (e += i, e < 0 && (e = 0)) : e > i && (e = i), t < 0 ? (t += i, t < 0 && (t = 0)) : t > i && (t = i), t < e && (t = e), c.TYPED_ARRAY_SUPPORT) n = this.subarray(e, t), n.__proto__ = c.prototype;
                    else {
                        var r = t - e;
                        n = new c(r, void 0);
                        for (var o = 0; o < r; ++o) n[o] = this[o + e]
                    }
                    return n
                }, c.prototype.readUIntLE = function(e, t, n) {
                    e |= 0, t |= 0, n || j(e, t, this.length);
                    var i = this[e],
                        r = 1,
                        o = 0;
                    while (++o < t && (r *= 256)) i += this[e + o] * r;
                    return i
                }, c.prototype.readUIntBE = function(e, t, n) {
                    e |= 0, t |= 0, n || j(e, t, this.length);
                    var i = this[e + --t],
                        r = 1;
                    while (t > 0 && (r *= 256)) i += this[e + --t] * r;
                    return i
                }, c.prototype.readUInt8 = function(e, t) {
                    return t || j(e, 1, this.length), this[e]
                }, c.prototype.readUInt16LE = function(e, t) {
                    return t || j(e, 2, this.length), this[e] | this[e + 1] << 8
                }, c.prototype.readUInt16BE = function(e, t) {
                    return t || j(e, 2, this.length), this[e] << 8 | this[e + 1]
                }, c.prototype.readUInt32LE = function(e, t) {
                    return t || j(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                }, c.prototype.readUInt32BE = function(e, t) {
                    return t || j(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                }, c.prototype.readIntLE = function(e, t, n) {
                    e |= 0, t |= 0, n || j(e, t, this.length);
                    var i = this[e],
                        r = 1,
                        o = 0;
                    while (++o < t && (r *= 256)) i += this[e + o] * r;
                    return r *= 128, i >= r && (i -= Math.pow(2, 8 * t)), i
                }, c.prototype.readIntBE = function(e, t, n) {
                    e |= 0, t |= 0, n || j(e, t, this.length);
                    var i = t,
                        r = 1,
                        o = this[e + --i];
                    while (i > 0 && (r *= 256)) o += this[e + --i] * r;
                    return r *= 128, o >= r && (o -= Math.pow(2, 8 * t)), o
                }, c.prototype.readInt8 = function(e, t) {
                    return t || j(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                }, c.prototype.readInt16LE = function(e, t) {
                    t || j(e, 2, this.length);
                    var n = this[e] | this[e + 1] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, c.prototype.readInt16BE = function(e, t) {
                    t || j(e, 2, this.length);
                    var n = this[e + 1] | this[e] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, c.prototype.readInt32LE = function(e, t) {
                    return t || j(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                }, c.prototype.readInt32BE = function(e, t) {
                    return t || j(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                }, c.prototype.readFloatLE = function(e, t) {
                    return t || j(e, 4, this.length), r.read(this, e, !0, 23, 4)
                }, c.prototype.readFloatBE = function(e, t) {
                    return t || j(e, 4, this.length), r.read(this, e, !1, 23, 4)
                }, c.prototype.readDoubleLE = function(e, t) {
                    return t || j(e, 8, this.length), r.read(this, e, !0, 52, 8)
                }, c.prototype.readDoubleBE = function(e, t) {
                    return t || j(e, 8, this.length), r.read(this, e, !1, 52, 8)
                }, c.prototype.writeUIntLE = function(e, t, n, i) {
                    if (e = +e, t |= 0, n |= 0, !i) {
                        var r = Math.pow(2, 8 * n) - 1;
                        F(this, e, t, n, r, 0)
                    }
                    var o = 1,
                        a = 0;
                    this[t] = 255 & e;
                    while (++a < n && (o *= 256)) this[t + a] = e / o & 255;
                    return t + n
                }, c.prototype.writeUIntBE = function(e, t, n, i) {
                    if (e = +e, t |= 0, n |= 0, !i) {
                        var r = Math.pow(2, 8 * n) - 1;
                        F(this, e, t, n, r, 0)
                    }
                    var o = n - 1,
                        a = 1;
                    this[t + o] = 255 & e;
                    while (--o >= 0 && (a *= 256)) this[t + o] = e / a & 255;
                    return t + n
                }, c.prototype.writeUInt8 = function(e, t, n) {
                    return e = +e, t |= 0, n || F(this, e, t, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
                }, c.prototype.writeUInt16LE = function(e, t, n) {
                    return e = +e, t |= 0, n || F(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : z(this, e, t, !0), t + 2
                }, c.prototype.writeUInt16BE = function(e, t, n) {
                    return e = +e, t |= 0, n || F(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : z(this, e, t, !1), t + 2
                }, c.prototype.writeUInt32LE = function(e, t, n) {
                    return e = +e, t |= 0, n || F(this, e, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : q(this, e, t, !0), t + 4
                }, c.prototype.writeUInt32BE = function(e, t, n) {
                    return e = +e, t |= 0, n || F(this, e, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : q(this, e, t, !1), t + 4
                }, c.prototype.writeIntLE = function(e, t, n, i) {
                    if (e = +e, t |= 0, !i) {
                        var r = Math.pow(2, 8 * n - 1);
                        F(this, e, t, n, r - 1, -r)
                    }
                    var o = 0,
                        a = 1,
                        s = 0;
                    this[t] = 255 & e;
                    while (++o < n && (a *= 256)) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
                    return t + n
                }, c.prototype.writeIntBE = function(e, t, n, i) {
                    if (e = +e, t |= 0, !i) {
                        var r = Math.pow(2, 8 * n - 1);
                        F(this, e, t, n, r - 1, -r)
                    }
                    var o = n - 1,
                        a = 1,
                        s = 0;
                    this[t + o] = 255 & e;
                    while (--o >= 0 && (a *= 256)) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
                    return t + n
                }, c.prototype.writeInt8 = function(e, t, n) {
                    return e = +e, t |= 0, n || F(this, e, t, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                }, c.prototype.writeInt16LE = function(e, t, n) {
                    return e = +e, t |= 0, n || F(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : z(this, e, t, !0), t + 2
                }, c.prototype.writeInt16BE = function(e, t, n) {
                    return e = +e, t |= 0, n || F(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : z(this, e, t, !1), t + 2
                }, c.prototype.writeInt32LE = function(e, t, n) {
                    return e = +e, t |= 0, n || F(this, e, t, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : q(this, e, t, !0), t + 4
                }, c.prototype.writeInt32BE = function(e, t, n) {
                    return e = +e, t |= 0, n || F(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : q(this, e, t, !1), t + 4
                }, c.prototype.writeFloatLE = function(e, t, n) {
                    return Y(this, e, t, !0, n)
                }, c.prototype.writeFloatBE = function(e, t, n) {
                    return Y(this, e, t, !1, n)
                }, c.prototype.writeDoubleLE = function(e, t, n) {
                    return V(this, e, t, !0, n)
                }, c.prototype.writeDoubleBE = function(e, t, n) {
                    return V(this, e, t, !1, n)
                }, c.prototype.copy = function(e, t, n, i) {
                    if (n || (n = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n) return 0;
                    if (0 === e.length || 0 === this.length) return 0;
                    if (t < 0) throw new RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (i < 0) throw new RangeError("sourceEnd out of bounds");
                    i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
                    var r, o = i - n;
                    if (this === e && n < t && t < i)
                        for (r = o - 1; r >= 0; --r) e[r + t] = this[r + n];
                    else if (o < 1e3 || !c.TYPED_ARRAY_SUPPORT)
                        for (r = 0; r < o; ++r) e[r + t] = this[r + n];
                    else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
                    return o
                }, c.prototype.fill = function(e, t, n, i) {
                    if ("string" === typeof e) {
                        if ("string" === typeof t ? (i = t, t = 0, n = this.length) : "string" === typeof n && (i = n, n = this.length), 1 === e.length) {
                            var r = e.charCodeAt(0);
                            r < 256 && (e = r)
                        }
                        if (void 0 !== i && "string" !== typeof i) throw new TypeError("encoding must be a string");
                        if ("string" === typeof i && !c.isEncoding(i)) throw new TypeError("Unknown encoding: " + i)
                    } else "number" === typeof e && (e &= 255);
                    if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                    if (n <= t) return this;
                    var o;
                    if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" === typeof e)
                        for (o = t; o < n; ++o) this[o] = e;
                    else {
                        var a = c.isBuffer(e) ? e : J(new c(e, i).toString()),
                            s = a.length;
                        for (o = 0; o < n - t; ++o) this[o + t] = a[o % s]
                    }
                    return this
                };
                var W = /[^+\/0-9A-Za-z-_]/g;

                function $(e) {
                    if (e = K(e).replace(W, ""), e.length < 2) return "";
                    while (e.length % 4 !== 0) e += "=";
                    return e
                }

                function K(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                }

                function X(e) {
                    return e < 16 ? "0" + e.toString(16) : e.toString(16)
                }

                function J(e, t) {
                    var n;
                    t = t || 1 / 0;
                    for (var i = e.length, r = null, o = [], a = 0; a < i; ++a) {
                        if (n = e.charCodeAt(a), n > 55295 && n < 57344) {
                            if (!r) {
                                if (n > 56319) {
                                    (t -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                if (a + 1 === i) {
                                    (t -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                r = n;
                                continue
                            }
                            if (n < 56320) {
                                (t -= 3) > -1 && o.push(239, 191, 189), r = n;
                                continue
                            }
                            n = 65536 + (r - 55296 << 10 | n - 56320)
                        } else r && (t -= 3) > -1 && o.push(239, 191, 189);
                        if (r = null, n < 128) {
                            if ((t -= 1) < 0) break;
                            o.push(n)
                        } else if (n < 2048) {
                            if ((t -= 2) < 0) break;
                            o.push(n >> 6 | 192, 63 & n | 128)
                        } else if (n < 65536) {
                            if ((t -= 3) < 0) break;
                            o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(n < 1114112)) throw new Error("Invalid code point");
                            if ((t -= 4) < 0) break;
                            o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return o
                }

                function Q(e) {
                    for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                    return t
                }

                function G(e, t) {
                    for (var n, i, r, o = [], a = 0; a < e.length; ++a) {
                        if ((t -= 2) < 0) break;
                        n = e.charCodeAt(a), i = n >> 8, r = n % 256, o.push(r), o.push(i)
                    }
                    return o
                }

                function Z(e) {
                    return i.toByteArray($(e))
                }

                function ee(e, t, n, i) {
                    for (var r = 0; r < i; ++r) {
                        if (r + n >= t.length || r >= e.length) break;
                        t[r + n] = e[r]
                    }
                    return r
                }

                function te(e) {
                    return e !== e
                }
            }).call(this, n("c8ba"))
        },
        b680: function(e, t, n) {
            "use strict";
            var i = n("23e7"),
                r = n("a691"),
                o = n("408a"),
                a = n("1148"),
                s = n("d039"),
                l = 1..toFixed,
                c = Math.floor,
                u = function(e, t, n) {
                    return 0 === t ? n : t % 2 === 1 ? u(e, t - 1, n * e) : u(e * e, t / 2, n)
                },
                p = function(e) {
                    var t = 0,
                        n = e;
                    while (n >= 4096) t += 12, n /= 4096;
                    while (n >= 2) t += 1, n /= 2;
                    return t
                },
                d = l && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !s((function() {
                    l.call({})
                }));
            i({
                target: "Number",
                proto: !0,
                forced: d
            }, {
                toFixed: function(e) {
                    var t, n, i, s, l = o(this),
                        d = r(e),
                        h = [0, 0, 0, 0, 0, 0],
                        f = "",
                        m = "0",
                        g = function(e, t) {
                            var n = -1,
                                i = t;
                            while (++n < 6) i += e * h[n], h[n] = i % 1e7, i = c(i / 1e7)
                        },
                        y = function(e) {
                            var t = 6,
                                n = 0;
                            while (--t >= 0) n += h[t], h[t] = c(n / e), n = n % e * 1e7
                        },
                        b = function() {
                            var e = 6,
                                t = "";
                            while (--e >= 0)
                                if ("" !== t || 0 === e || 0 !== h[e]) {
                                    var n = String(h[e]);
                                    t = "" === t ? n : t + a.call("0", 7 - n.length) + n
                                } return t
                        };
                    if (d < 0 || d > 20) throw RangeError("Incorrect fraction digits");
                    if (l != l) return "NaN";
                    if (l <= -1e21 || l >= 1e21) return String(l);
                    if (l < 0 && (f = "-", l = -l), l > 1e-21)
                        if (t = p(l * u(2, 69, 1)) - 69, n = t < 0 ? l * u(2, -t, 1) : l / u(2, t, 1), n *= 4503599627370496, t = 52 - t, t > 0) {
                            g(0, n), i = d;
                            while (i >= 7) g(1e7, 0), i -= 7;
                            g(u(10, i, 1), 0), i = t - 1;
                            while (i >= 23) y(1 << 23), i -= 23;
                            y(1 << i), g(1, 1), y(2), m = b()
                        } else g(0, n), g(1 << -t, 0), m = b() + a.call("0", d);
                    return d > 0 ? (s = m.length, m = f + (s <= d ? "0." + a.call("0", d - s) + m : m.slice(0, s - d) + "." + m.slice(s - d))) : m = f + m, m
                }
            })
        },
        baa5: function(e, t, n) {
            var i = n("23e7"),
                r = n("e58c");
            i({
                target: "Array",
                proto: !0,
                forced: r !== [].lastIndexOf
            }, {
                lastIndexOf: r
            })
        },
        e3db: function(e, t) {
            var n = {}.toString;
            e.exports = Array.isArray || function(e) {
                return "[object Array]" == n.call(e)
            }
        },
        e58c: function(e, t, n) {
            "use strict";
            var i = n("fc6a"),
                r = n("a691"),
                o = n("50c4"),
                a = n("a640"),
                s = n("ae40"),
                l = Math.min,
                c = [].lastIndexOf,
                u = !!c && 1 / [1].lastIndexOf(1, -0) < 0,
                p = a("lastIndexOf"),
                d = s("indexOf", {
                    ACCESSORS: !0,
                    1: 0
                }),
                h = u || !p || !d;
            e.exports = h ? function(e) {
                if (u) return c.apply(this, arguments) || 0;
                var t = i(this),
                    n = o(t.length),
                    a = n - 1;
                for (arguments.length > 1 && (a = l(a, r(arguments[1]))), a < 0 && (a = n + a); a >= 0; a--)
                    if (a in t && t[a] === e) return a || 0;
                return -1
            } : c
        }
    }
]);