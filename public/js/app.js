!function (i) {
    var l = {};
    function a(e) {
        if (l[e])
            return l[e].exports;
        var t = l[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return i[e].call(t.exports, t, t.exports, a),
            t.l = !0,
            t.exports
    }
    a.m = i,
        a.c = l,
        a.d = function (e, t, i) {
            a.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            })
        }
        ,
        a.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        a.t = function (t, e) {
            if (1 & e && (t = a(t)),
                8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var i = Object.create(null);
            if (a.r(i),
                Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                for (var l in t)
                    a.d(i, l, function (e) {
                        return t[e]
                    }
                        .bind(null, l));
            return i
        }
        ,
        a.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            }
                : function () {
                    return e
                }
                ;
            return a.d(t, "a", t),
                t
        }
        ,
        a.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        a.p = "",
        a(a.s = 5)
}([function (e, t) {
    Element.prototype.hasClass = function (e) {
        return !!this.className.match(new RegExp("(^|\\s)" + e + "(?=\\s|$)", "g"))
    }
        ,
        Element.prototype.addClass = function (e) {
            var t = this;
            t.hasClass(e) || (t.className += (t.className.length ? " " : "") + e,
                t.className = t.className.replace(/\s+/gi, " "))
        }
        ,
        Element.prototype.removeClass = function (e) {
            var t = this;
            t.hasClass(e) && (t.className = t.className.replace(new RegExp("(^|\\s)" + e + "(?=\\s|$)", "g"), " "))
        }
        ,
        Element.prototype.append = function (e) {
            this.innerHTML += e
        }
        ,
        Element.prototype.fadeOut = function (i) {
            var i = i || 400
                , l = Date.now() + i
                , a = this;
            !function e() {
                var t = Date.now();
                var t = l - t;
                {
                    if (t / i <= 0)
                        return a.style.opacity = 0,
                            void (a.style.display = "none");
                    a.style.opacity = t / i
                }
                setTimeout(e, 0)
            }()
        }
        ,
        Element.prototype.fadeIn = function (i) {
            var i = i || 400
                , l = Date.now()
                , a = this;
            !function e() {
                var t = Date.now();
                var t = t - l;
                {
                    if (t / i <= 1 && t <= i)
                        return a.style.opacity = 1,
                            void (a.style.display = "block");
                    a.style.opacity = 0 + t / i
                }
                setTimeout(e, 0)
            }()
        }
        ,
        Element.prototype.fadeToggle = function (e) {
            var e = e || 400
                , t = getComputedStyle(this).opacity
                , i = getComputedStyle(this).display;
            0 === parseFloat(t) || "none" === i ? this.fadeIn(e) : this.fadeOut(e)
        }
        ,
        Element.prototype.remove = function () {
            this.parentNode.removeChild(this)
        }
}
    , function (e, t) {
        function d(e) {
            return "function" == typeof e || "[object Function]" === i.call(e)
        }
        function u(e) {
            return e = function (e) {
                e = Number(e);
                return isNaN(e) ? 0 : 0 !== e && isFinite(e) ? (0 < e ? 1 : -1) * Math.floor(Math.abs(e)) : e
            }(e),
                Math.min(Math.max(e, 0), l)
        }
        var i, l, a;
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || function (e) {
            for (var t = (this.document || this.ownerDocument).querySelectorAll(e), i = t.length; 0 <= --i && t.item(i) !== this;)
                ;
            return -1 < i
        }
        ),
            Array.from || (Array.from = (i = Object.prototype.toString,
                l = Math.pow(2, 53) - 1,
                function (e, t, i) {
                    var l = Object(e);
                    if (null == e)
                        throw new TypeError("Array.from requires an array-like object - not null or undefined");
                    var a, r = 1 < arguments.length ? t : void 0;
                    if (void 0 !== r) {
                        if (!d(r))
                            throw new TypeError("Array.from: when provided, the second argument must be a function");
                        2 < arguments.length && (a = i)
                    }
                    for (var n, s = u(l.length), o = d(this) ? Object(new this(s)) : new Array(s), c = 0; c < s;)
                        n = l[c],
                            o[c] = r ? void 0 === a ? r(n, c) : r.call(a, n, c) : n,
                            c += 1;
                    return o.length = s,
                        o
                }
            )),
            (a = Element.prototype).matches = a.matches || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector || a.webkitMatchesSelector,
            a.closest = a.closest || function (e) {
                return this ? this.matches(e) ? this : this.parentElement ? this.parentElement.closest(e) : null : null
            }
            ,
            function () {
                if ("undefined" != typeof window)
                    try {
                        var e = new window.CustomEvent("test", {
                            cancelable: !0
                        });
                        if (e.preventDefault(),
                            !0 !== e.defaultPrevented)
                            throw new Error("Could not prevent default")
                    } catch (e) {
                        function t(e, t) {
                            var i, l;
                            return t = t || {
                                bubbles: !1,
                                cancelable: !1,
                                detail: void 0
                            },
                                (i = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
                                l = i.preventDefault,
                                i.preventDefault = function () {
                                    l.call(this);
                                    try {
                                        Object.defineProperty(this, "defaultPrevented", {
                                            get: function () {
                                                return !0
                                            }
                                        })
                                    } catch (e) {
                                        this.defaultPrevented = !0
                                    }
                                }
                                ,
                                i
                        }
                        t.prototype = window.Event.prototype,
                            window.CustomEvent = t
                    }
            }()
    }
    , function (e, t, i) {
        var l, a;
        void 0 === (l = "function" == typeof (l = a = function () {
            function s() {
                for (var e = 0, t = {}; e < arguments.length; e++) {
                    var i, l = arguments[e];
                    for (i in l)
                        t[i] = l[i]
                }
                return t
            }
            function c(e) {
                return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
            }
            return function e(o) {
                function n() { }
                function i(e, t, i) {
                    if ("undefined" != typeof document) {
                        "number" == typeof (i = s({
                            path: "/"
                        }, n.defaults, i)).expires && (i.expires = new Date(+new Date + 864e5 * i.expires)),
                            i.expires = i.expires ? i.expires.toUTCString() : "";
                        try {
                            var l = JSON.stringify(t);
                            /^[\{\[]/.test(l) && (t = l)
                        } catch (e) { }
                        t = o.write ? o.write(t, e) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                            e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                        var a, r = "";
                        for (a in i)
                            i[a] && (r += "; " + a,
                                !0 !== i[a] && (r += "=" + i[a].split(";")[0]));
                        return document.cookie = e + "=" + t + r
                    }
                }
                function t(e, t) {
                    if ("undefined" != typeof document) {
                        for (var i = {}, l = document.cookie ? document.cookie.split("; ") : [], a = 0; a < l.length; a++) {
                            var r = l[a].split("=")
                                , n = r.slice(1).join("=");
                            t || '"' !== n.charAt(0) || (n = n.slice(1, -1));
                            try {
                                var s = c(r[0])
                                    , n = (o.read || o)(n, s) || c(n);
                                if (t)
                                    try {
                                        n = JSON.parse(n)
                                    } catch (e) { }
                                if (i[s] = n,
                                    e === s)
                                    break
                            } catch (e) { }
                        }
                        return e ? i[e] : i
                    }
                }
                return n.set = i,
                    n.get = function (e) {
                        return t(e, !1)
                    }
                    ,
                    n.getJSON = function (e) {
                        return t(e, !0)
                    }
                    ,
                    n.remove = function (e, t) {
                        i(e, "", s(t, {
                            expires: -1
                        }))
                    }
                    ,
                    n.defaults = {},
                    n.withConverter = e,
                    n
            }(function () { })
        }
        ) ? l.call(t, i, t, e) : l) || (e.exports = l),
            e.exports = a()
    }
    , function (e, t, i) {
        var l;
        l = this,
            void 0 === (t = function () {
                return l.svg4everybody = function (e) {
                    var s, o = Object(e), e = window.top !== window.self;
                    s = "polyfill" in o ? o.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537 || /\bEdge\/.(\d+)\b/.test(navigator.userAgent) && e;
                    var c = {}
                        , d = window.requestAnimationFrame || setTimeout
                        , u = document.getElementsByTagName("use")
                        , m = 0;
                    s && function e() {
                        for (var t = 0; t < u.length;) {
                            var i, l = u[t], a = l.parentNode, r = function (e) {
                                for (var t = e; "svg" !== t.nodeName.toLowerCase() && (t = t.parentNode);)
                                    ;
                                return t
                            }(a), n = l.getAttribute("xlink:href") || l.getAttribute("href");
                            !n && o.attributeName && (n = l.getAttribute(o.attributeName)),
                                r && n ? s && (!o.validate || o.validate(n, r, l) ? (a.removeChild(l),
                                    l = (i = n.split("#")).shift(),
                                    n = i.join("#"),
                                    l.length ? ((i = c[l]) || ((i = c[l] = new XMLHttpRequest).open("GET", l),
                                        i.send(),
                                        i._embeds = []),
                                        i._embeds.push({
                                            parent: a,
                                            svg: r,
                                            id: n
                                        }),
                                        function (l) {
                                            l.onreadystatechange = function () {
                                                var i;
                                                4 === l.readyState && ((i = l._cachedDocument) || ((i = l._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = l.responseText,
                                                    l._cachedTarget = {}),
                                                    l._embeds.splice(0).map(function (e) {
                                                        var t = (t = l._cachedTarget[e.id]) || (l._cachedTarget[e.id] = i.getElementById(e.id));
                                                        p(e.parent, e.svg, t)
                                                    }))
                                            }
                                                ,
                                                l.onreadystatechange()
                                        }(i)) : p(a, r, document.getElementById(n))) : (++t,
                                            ++m)) : ++t
                        }
                        (!u.length || 0 < u.length - m) && d(e, 67)
                    }()
                }
                    ;
                function p(e, t, i) {
                    if (i) {
                        var l = document.createDocumentFragment()
                            , a = !t.hasAttribute("viewBox") && i.getAttribute("viewBox");
                        a && t.setAttribute("viewBox", a);
                        for (var r = i.cloneNode(!0); r.childNodes.length;)
                            l.appendChild(r.firstChild);
                        e.appendChild(l)
                    }
                }
            }
                .apply(t, [])) || (e.exports = t)
    }
    , function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function () {
            return qq
        });
        var qq = qq || {}, vc, Ic;
        qq.extend = function (e, t) {
            for (var i in t)
                e[i] = t[i]
        }
            ,
            qq.indexOf = function (e, t, i) {
                if (e.indexOf)
                    return e.indexOf(t, i);
                i = i || 0;
                var l = e.length;
                for (i < 0 && (i += l); i < l; i++)
                    if (i in e && e[i] === t)
                        return i;
                return -1
            }
            ,
            qq.getUniqueId = (vc = 0,
                function () {
                    return vc++
                }
            ),
            qq.attach = function (e, t, i) {
                e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent && e.attachEvent("on" + t, i)
            }
            ,
            qq.detach = function (e, t, i) {
                e.removeEventListener ? e.removeEventListener(t, i, !1) : e.attachEvent && e.detachEvent("on" + t, i)
            }
            ,
            qq.preventDefault = function (e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            }
            ,
            qq.insertBefore = function (e, t) {
                t.parentNode.insertBefore(e, t)
            }
            ,
            qq.remove = function (e) {
                e.parentNode.removeChild(e)
            }
            ,
            qq.contains = function (e, t) {
                return e == t || (e.contains ? e.contains(t) : !!(8 & t.compareDocumentPosition(e)))
            }
            ,
            qq.toElement = (Ic = document.createElement("div"),
                function (e) {
                    Ic.innerHTML = e;
                    e = Ic.firstChild;
                    return Ic.removeChild(e),
                        e
                }
            ),
            qq.css = function (e, t) {
                null != t.opacity && "string" != typeof e.style.opacity && void 0 !== e.filters && (t.filter = "alpha(opacity=" + Math.round(100 * t.opacity) + ")"),
                    qq.extend(e.style, t)
            }
            ,
            qq.hasClass = function (e, t) {
                return new RegExp("(^| )" + t + "( |$)").test(e.className)
            }
            ,
            qq.addClass = function (e, t) {
                qq.hasClass(e, t) || (e.className += " " + t)
            }
            ,
            qq.removeClass = function (e, t) {
                t = new RegExp("(^| )" + t + "( |$)");
                e.className = e.className.replace(t, " ").replace(/^\s+|\s+$/g, "")
            }
            ,
            qq.setText = function (e, t) {
                e.innerText = t,
                    e.textContent = t
            }
            ,
            qq.children = function (e) {
                for (var t = [], i = e.firstChild; i;)
                    1 == i.nodeType && t.push(i),
                        i = i.nextSibling;
                return t
            }
            ,
            qq.getByClass = function (e, t) {
                if (e.querySelectorAll)
                    return e.querySelectorAll("." + t);
                for (var i = [], l = e.getElementsByTagName("*"), a = l.length, r = 0; r < a; r++)
                    qq.hasClass(l[r], t) && i.push(l[r]);
                return i
            }
            ,
            qq.obj2url = function (e, l, t) {
                function i(e, t) {
                    var i = l ? /\[\]$/.test(l) ? l : l + "[" + t + "]" : t;
                    "undefined" != i && "undefined" != t && a.push("object" == typeof e ? qq.obj2url(e, i, !0) : "[object Function]" === Object.prototype.toString.call(e) ? encodeURIComponent(i) + "=" + encodeURIComponent(e()) : encodeURIComponent(i) + "=" + encodeURIComponent(e))
                }
                var a = []
                    , r = "&";
                if (!t && l)
                    r = /\?/.test(l) ? /\?$/.test(l) ? "" : "&" : "?",
                        a.push(l),
                        a.push(qq.obj2url(e));
                else if ("[object Array]" === Object.prototype.toString.call(e) && void 0 !== e)
                    for (var n = 0, s = e.length; n < s; ++n)
                        i(e[n], n);
                else if (null != e && "object" == typeof e)
                    for (var n in e)
                        i(e[n], n);
                else
                    a.push(encodeURIComponent(l) + "=" + encodeURIComponent(e));
                return a.join(r).replace(/^&/, "").replace(/%20/g, "+")
            }
            ;
        var qq = qq || {};
        qq.FileUploaderBasic = function (e) {
            this.o = {
                debug: !1,
                action: "/server/upload",
                params: {},
                button: null,
                multiple: !0,
                limit: 0,
                uploaded: 0,
                maxConnections: 3,
                allowedExtensions: [],
                sizeLimit: 0,
                minSizeLimit: 0,
                onSubmit: function (e, t) { },
                onProgress: function (e, t, i, l) { },
                onComplete: function (e, t, i) { },
                onCancel: function (e, t) { },
                messages: {
                    typeError: "Types of fules: {extensions}.",
                    sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                    minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                    emptyError: "{file} is empty, please select files again without it.",
                    limitError: "Files limit is reached: {limit}.",
                    onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
                },
                showMessage: function (e, t) {
                    alert(e)
                }
            },
                qq.extend(this.o, e),
                this._filesInProgress = 0,
                this._handler = this._createUploadHandler(),
                this.o.button && (this._button = this._createUploadButton(this.o.button)),
                this._preventLeaveInProgress()
        }
            ,
            qq.FileUploaderBasic.prototype = {
                setParams: function (e) {
                    this.o.params = e
                },
                getInProgress: function () {
                    return this._filesInProgress
                },
                getUploaded: function () {
                    return this.o.uploaded
                },
                resetUploaded: function () {
                    return this.o.uploaded = 0
                },
                decrementUploaded: function () {
                    0 < this.o.uploaded && this.o.uploaded--
                },
                _createUploadButton: function (e) {
                    var t = this
                        , i = new qq.UploadButton({
                            element: e,
                            multiple: this.o.multiple && qq.UploadHandlerXhr.isSupported(),
                            onChange: function (e) {
                                t._onInputChange(e, i)
                            }
                        });
                    return i
                },
                _createUploadHandler: function () {
                    var a = this
                        , e = qq.UploadHandlerXhr.isSupported() ? "UploadHandlerXhr" : "UploadHandlerForm";
                    return new qq[e]({
                        debug: this.o.debug,
                        action: this.o.action,
                        maxConnections: this.o.maxConnections,
                        onProgress: function (e, t, i, l) {
                            a._onProgress(e, t, i, l),
                                a.o.onProgress(e, t, i, l)
                        },
                        onComplete: function (e, t, i) {
                            a._onComplete(e, t, i),
                                a.o.onComplete(e, t, i)
                        },
                        onCancel: function (e, t) {
                            a._onCancel(e, t),
                                a.o.onCancel(e, t)
                        }
                    })
                },
                _preventLeaveInProgress: function () {
                    var t = this;
                    qq.attach(window, "beforeunload", function (e) {
                        if (t._filesInProgress)
                            return (e = e || window.event).returnValue = t.o.messages.onLeave,
                                t.o.messages.onLeave
                    })
                },
                _onSubmit: function (e, t) {
                    this._filesInProgress++
                },
                _onProgress: function (e, t, i, l) { },
                _onComplete: function (e, t, i) {
                    this._filesInProgress--,
                        i.success && this.o.uploaded++,
                        i.error && this.o.showMessage(i.error)
                },
                _onCancel: function (e, t) {
                    this._filesInProgress--
                },
                _onInputChange: function (e, t) {
                    if (this._handler instanceof qq.UploadHandlerXhr)
                        this._uploadFileList(e.files);
                    else {
                        if (0 < this.o.limit && this.o.uploaded + 1 > this.o.limit)
                            return void this._error("limitError", "");
                        this._validateFile(e) && this._uploadFile(e)
                    }
                    t.reset()
                },
                _uploadFileList: function (e) {
                    if (0 < this.o.limit && this.o.uploaded + e.length > this.o.limit)
                        this._error("limitError", "");
                    else {
                        for (var t = 0; t < e.length; t++)
                            if (!this._validateFile(e[t]))
                                return;
                        for (t = 0; t < e.length; t++)
                            this._uploadFile(e[t])
                    }
                },
                _uploadFile: function (e) {
                    var t = this._handler.add(e)
                        , e = this._handler.getName(t);
                    !1 !== this.o.onSubmit(t, e) && (this._onSubmit(t, e),
                        this._handler.upload(t, this.o.params))
                },
                _validateFile: function (e) {
                    var t, i;
                    return e.value ? t = e.value.replace(/.*(\/|\\)/, "") : (t = null != e.fileName ? e.fileName : e.name,
                        i = null != e.fileSize ? e.fileSize : e.size),
                        this._isAllowedExtension(t) ? 0 === i ? (this._error("emptyError", t),
                            !1) : i && this.o.sizeLimit && i > this.o.sizeLimit ? (this._error("sizeError", t),
                                !1) : !(i && i < this.o.minSizeLimit) || (this._error("minSizeError", t),
                                    !1) : (this._error("typeError", t),
                                        !1)
                },
                _error: function (e, t) {
                    var i = this.o.messages[e];
                    function l(e, t) {
                        i = i.replace(e, t)
                    }
                    l("{file}", this._formatFileName(t)),
                        l("{extensions}", this.o.allowedExtensions.join(", ")),
                        l("{sizeLimit}", this._formatSize(this.o.sizeLimit)),
                        l("{minSizeLimit}", this._formatSize(this.o.minSizeLimit)),
                        l("{limit}", this.o.limit),
                        this.o.showMessage(i, e)
                },
                _formatFileName: function (e) {
                    return 33 < e.length && (e = e.slice(0, 19) + "..." + e.slice(-13)),
                        e
                },
                _isAllowedExtension: function (e) {
                    var t = -1 !== e.indexOf(".") ? e.replace(/.*[.]/, "").toLowerCase() : ""
                        , i = this.o.allowedExtensions;
                    if (!i.length)
                        return !0;
                    for (var l = 0; l < i.length; l++)
                        if (i[l].toLowerCase() == t)
                            return !0;
                    return !1
                },
                _formatSize: function (e) {
                    for (var t = -1; e /= 1024,
                        t++,
                        99 < e;)
                        ;
                    return Math.max(e, .1).toFixed(1) + ["kB", "MB", "GB", "TB", "PB", "EB"][t]
                }
            },
            qq.FileUploader = function (e) {
                qq.FileUploaderBasic.apply(this, arguments),
                    qq.extend(this.o, {
                        element: null,
                        listElement: null,
                        template: '<div class="qq-uploader"><div class="qq-upload-drop-area"><span>Перетяните файл в эту область, для того что его загрузить</span></div><div class="qq-upload-button">Загрузить файл</div><ul class="qq-upload-list"></ul></div>',
                        fileTemplate: '<li><span class="qq-upload-file"></span><span class="qq-upload-spinner"></span><span class="qq-upload-size"></span><a class="qq-upload-cancel" href="#"></a><span class="qq-upload-failed-text"></span></li>',
                        classes: {
                            button: "qq-upload-button",
                            drop: "qq-upload-drop-area",
                            dropActive: "qq-upload-drop-area-active",
                            list: "qq-upload-list",
                            file: "qq-upload-file",
                            spinner: "qq-upload-spinner",
                            size: "qq-upload-size",
                            cancel: "qq-upload-cancel",
                            success: "qq-upload-success",
                            fail: "qq-upload-fail"
                        }
                    }),
                    qq.extend(this.o, e),
                    this._classes = this.o.classes,
                    this._element = this.o.element,
                    this._element.innerHTML = this.o.template,
                    this._listElement = this.o.listElement || this._find(this._element, "list"),
                    null === this.o.button && (this._button = this._createUploadButton(this._find(this._element, "button"))),
                    this._bindCancelEvent(),
                    this._setupDragDrop()
            }
            ,
            qq.extend(qq.FileUploader.prototype, qq.FileUploaderBasic.prototype),
            qq.extend(qq.FileUploader.prototype, {
                _find: function (e, t) {
                    e = qq.getByClass(e, this.o.classes[t])[0];
                    if (!e)
                        throw new Error("element not found " + t);
                    return e
                },
                _setupDragDrop: function () {
                    var t = this
                        , i = this._find(this._element, "drop")
                        , l = new qq.UploadDropZone({
                            element: i,
                            onEnter: function (e) {
                                qq.addClass(i, t._classes.dropActive),
                                    e.stopPropagation()
                            },
                            onLeave: function (e) {
                                e.stopPropagation()
                            },
                            onLeaveNotDescendants: function (e) {
                                qq.removeClass(i, t._classes.dropActive)
                            },
                            onDrop: function (e) {
                                i.style.display = "none",
                                    qq.removeClass(i, t._classes.dropActive),
                                    t._uploadFileList(e.dataTransfer.files)
                            }
                        });
                    i.style.display = "none",
                        qq.attach(document, "dragenter", function (e) {
                            l._isValidFileDrag(e) && (i.style.display = "block")
                        }),
                        qq.attach(document, "dragleave", function (e) {
                            l._isValidFileDrag(e) && ((e = document.elementFromPoint(e.clientX, e.clientY)) && "HTML" != e.nodeName || (i.style.display = "none"))
                        })
                },
                _onSubmit: function (e, t) {
                    qq.FileUploaderBasic.prototype._onSubmit.apply(this, arguments),
                        this._addToList(e, t)
                },
                _onProgress: function (e, t, i, l) {
                    qq.FileUploaderBasic.prototype._onProgress.apply(this, arguments);
                    e = this._getItemByFileId(e),
                        e = this._find(e, "size");
                    e.style.display = "inline",
                        l = i != l ? Math.round(i / l * 100) + "% from " + this._formatSize(l) : this._formatSize(l),
                        qq.setText(e, l)
                },
                _onComplete: function (e, t, i) {
                    qq.FileUploaderBasic.prototype._onComplete.apply(this, arguments);
                    e = this._getItemByFileId(e);
                    qq.remove(this._find(e, "cancel")),
                        qq.remove(this._find(e, "spinner")),
                        i.success ? qq.addClass(e, this._classes.success) : qq.addClass(e, this._classes.fail)
                },
                _addToList: function (e, t) {
                    var i = qq.toElement(this.o.fileTemplate);
                    i.qqFileId = e;
                    e = this._find(i, "file");
                    qq.setText(e, this._formatFileName(t)),
                        this._find(i, "size").style.display = "none",
                        this._listElement.appendChild(i)
                },
                _getItemByFileId: function (e) {
                    for (var t = this._listElement.firstChild; t;) {
                        if (t.qqFileId == e)
                            return t;
                        t = t.nextSibling
                    }
                },
                _bindCancelEvent: function () {
                    var i = this
                        , e = this._listElement;
                    qq.attach(e, "click", function (e) {
                        var t = (e = e || window.event).target || e.srcElement;
                        qq.hasClass(t, i._classes.cancel) && (qq.preventDefault(e),
                            t = t.parentNode,
                            i._handler.cancel(t.qqFileId),
                            qq.remove(t))
                    })
                }
            }),
            qq.UploadDropZone = function (e) {
                this.o = {
                    element: null,
                    onEnter: function (e) { },
                    onLeave: function (e) { },
                    onLeaveNotDescendants: function (e) { },
                    onDrop: function (e) { }
                },
                    qq.extend(this.o, e),
                    this._element = this.o.element,
                    this._disableDropOutside(),
                    this._attachEvents()
            }
            ,
            qq.UploadDropZone.prototype = {
                _disableDropOutside: function (e) {
                    qq.UploadDropZone.dropOutsideDisabled || (qq.attach(document, "dragover", function (e) {
                        e.dataTransfer && (e.dataTransfer.dropEffect = "none",
                            e.preventDefault())
                    }),
                        qq.UploadDropZone.dropOutsideDisabled = !0)
                },
                _attachEvents: function () {
                    var i = this;
                    qq.attach(i._element, "dragover", function (e) {
                        var t;
                        i._isValidFileDrag(e) && (t = e.dataTransfer.effectAllowed,
                            e.dataTransfer.dropEffect = "move" == t || "linkMove" == t ? "move" : "copy",
                            e.stopPropagation(),
                            e.preventDefault())
                    }),
                        qq.attach(i._element, "dragenter", function (e) {
                            i._isValidFileDrag(e) && i.o.onEnter(e)
                        }),
                        qq.attach(i._element, "dragleave", function (e) {
                            var t;
                            i._isValidFileDrag(e) && (i.o.onLeave(e),
                                t = document.elementFromPoint(e.clientX, e.clientY),
                                qq.contains(this, t) || i.o.onLeaveNotDescendants(e))
                        }),
                        qq.attach(i._element, "drop", function (e) {
                            i._isValidFileDrag(e) && (e.preventDefault(),
                                i.o.onDrop(e))
                        })
                },
                _isValidFileDrag: function (e) {
                    var t = e.dataTransfer
                        , e = -1 < navigator.userAgent.indexOf("AppleWebKit");
                    return t && "none" != t.effectAllowed && (t.files || !e && t.types.contains && t.types.contains("Files"))
                }
            },
            qq.UploadButton = function (e) {
                this.o = {
                    element: null,
                    multiple: !1,
                    name: "file",
                    onChange: function (e) { },
                    hoverClass: "qq-upload-button-hover",
                    focusClass: "qq-upload-button-focus"
                },
                    qq.extend(this.o, e),
                    this._element = this.o.element,
                    qq.css(this._element, {
                        position: "relative",
                        overflow: "hidden",
                        direction: "ltr"
                    }),
                    this._input = this._createInput()
            }
            ,
            qq.UploadButton.prototype = {
                getInput: function () {
                    return this._input
                },
                reset: function () {
                    this._input.parentNode && qq.remove(this._input),
                        qq.removeClass(this._element, this.o.focusClass),
                        this._input = this._createInput()
                },
                _createInput: function () {
                    var e = document.createElement("input");
                    this.o.multiple && e.setAttribute("multiple", "multiple"),
                        e.setAttribute("type", "file"),
                        e.setAttribute("name", this.o.name),
                        qq.css(e, {
                            position: "absolute",
                            right: 0,
                            top: 0,
                            fontFamily: "Arial",
                            fontSize: "118px",
                            margin: 0,
                            padding: 0,
                            cursor: "pointer",
                            opacity: 0
                        }),
                        this._element.appendChild(e);
                    var t = this;
                    return qq.attach(e, "change", function () {
                        t.o.onChange(e)
                    }),
                        qq.attach(e, "mouseover", function () {
                            qq.addClass(t._element, t.o.hoverClass)
                        }),
                        qq.attach(e, "mouseout", function () {
                            qq.removeClass(t._element, t.o.hoverClass)
                        }),
                        qq.attach(e, "focus", function () {
                            qq.addClass(t._element, t.o.focusClass)
                        }),
                        qq.attach(e, "blur", function () {
                            qq.removeClass(t._element, t.o.focusClass)
                        }),
                        window.attachEvent && e.setAttribute("tabIndex", "-1"),
                        e
                }
            },
            qq.UploadHandlerAbstract = function (e) {
                this.o = {
                    debug: !1,
                    action: "/upload.php",
                    maxConnections: 999,
                    onProgress: function (e, t, i, l) { },
                    onComplete: function (e, t, i) { },
                    onCancel: function (e, t) { }
                },
                    qq.extend(this.o, e),
                    this._queue = [],
                    this._params = []
            }
            ,
            qq.UploadHandlerAbstract.prototype = {
                log: function (e) {
                    this.o.debug && window.console && console.log("[uploader] " + e)
                },
                add: function (e) { },
                upload: function (e, t) {
                    var i = this._queue.push(e)
                        , l = {};
                    qq.extend(l, t),
                        this._params[e] = l,
                        i <= this.o.maxConnections && this._upload(e, this._params[e])
                },
                cancel: function (e) {
                    this._cancel(e),
                        this._dequeue(e)
                },
                cancelAll: function () {
                    for (var e = 0; e < this._queue.length; e++)
                        this._cancel(this._queue[e]);
                    this._queue = []
                },
                getName: function (e) { },
                getSize: function (e) { },
                getQueue: function () {
                    return this._queue
                },
                _upload: function (e) { },
                _cancel: function (e) { },
                _dequeue: function (e) {
                    var t = qq.indexOf(this._queue, e);
                    this._queue.splice(t, 1);
                    e = this.o.maxConnections;
                    this._queue.length >= e && t < e && (e = this._queue[e - 1],
                        this._upload(e, this._params[e]))
                }
            },
            qq.UploadHandlerForm = function (e) {
                qq.UploadHandlerAbstract.apply(this, arguments),
                    this._inputs = {}
            }
            ,
            qq.extend(qq.UploadHandlerForm.prototype, qq.UploadHandlerAbstract.prototype),
            qq.extend(qq.UploadHandlerForm.prototype, {
                add: function (e) {
                    e.setAttribute("name", "qqfile");
                    var t = "qq-upload-handler-iframe" + qq.getUniqueId();
                    return (this._inputs[t] = e).parentNode && qq.remove(e),
                        t
                },
                getName: function (e) {
                    return this._inputs[e].value.replace(/.*(\/|\\)/, "")
                },
                _cancel: function (e) {
                    this.o.onCancel(e, this.getName(e)),
                        delete this._inputs[e];
                    e = document.getElementById(e);
                    e && (e.setAttribute("src", "javascript:false;"),
                        qq.remove(e))
                },
                _upload: function (t, e) {
                    var i = this._inputs[t];
                    if (!i)
                        throw new Error("file with passed id was not added, or already uploaded or cancelled");
                    var l = this.getName(t)
                        , a = this._createIframe(t)
                        , e = this._createForm(a, e);
                    e.appendChild(i);
                    var r = this;
                    return this._attachLoadEvent(a, function () {
                        r.log("iframe loaded");
                        var e = r._getIframeContentJSON(a);
                        r.o.onComplete(t, l, e),
                            r._dequeue(t),
                            delete r._inputs[t],
                            setTimeout(function () {
                                qq.remove(a)
                            }, 1)
                    }),
                        e.submit(),
                        qq.remove(e),
                        t
                },
                _attachLoadEvent: function (e, t) {
                    qq.attach(e, "load", function () {
                        e.parentNode && (e.contentDocument && e.contentDocument.body && "false" == e.contentDocument.body.innerHTML || t())
                    })
                },
                _getIframeContentJSON: function (iframe) {
                    var doc = iframe.contentDocument || iframe.contentWindow.document, response;
                    this.log("converting iframe's innerHTML to JSON"),
                        this.log("innerHTML = " + doc.body.innerHTML);
                    try {
                        response = eval("(" + doc.body.innerHTML + ")")
                    } catch (err) {
                        response = {}
                    }
                    return response
                },
                _createIframe: function (e) {
                    var t = qq.toElement('<iframe src="javascript:false;" name="' + e + '" />');
                    return t.setAttribute("id", e),
                        t.style.display = "none",
                        document.body.appendChild(t),
                        t
                },
                _createForm: function (e, t) {
                    var i = qq.toElement('<form method="post" enctype="multipart/form-data"></form>')
                        , t = qq.obj2url(t, this.o.action);
                    return i.setAttribute("action", t),
                        i.setAttribute("target", e.name),
                        i.style.display = "none",
                        document.body.appendChild(i),
                        i
                }
            }),
            qq.UploadHandlerXhr = function (e) {
                qq.UploadHandlerAbstract.apply(this, arguments),
                    this._files = [],
                    this._xhrs = [],
                    this._loaded = []
            }
            ,
            qq.UploadHandlerXhr.isSupported = function () {
                var e = document.createElement("input");
                return e.type = "file",
                    "multiple" in e && "undefined" != typeof File && void 0 !== (new XMLHttpRequest).upload
            }
            ,
            qq.extend(qq.UploadHandlerXhr.prototype, qq.UploadHandlerAbstract.prototype),
            qq.extend(qq.UploadHandlerXhr.prototype, {
                add: function (e) {
                    if (!(e instanceof File))
                        throw new Error("Passed obj in not a File (in qq.UploadHandlerXhr)");
                    return this._files.push(e) - 1
                },
                getName: function (e) {
                    e = this._files[e];
                    return null != e.fileName ? e.fileName : e.name
                },
                getSize: function (e) {
                    e = this._files[e];
                    return null != e.fileSize ? e.fileSize : e.size
                },
                getLoaded: function (e) {
                    return this._loaded[e] || 0
                },
                _upload: function (t, e) {
                    var i = this._files[t]
                        , l = this.getName(t);
                    this.getSize(t);
                    this._loaded[t] = 0;
                    var a = this._xhrs[t] = new XMLHttpRequest
                        , r = this;
                    a.upload.onprogress = function (e) {
                        e.lengthComputable && (r._loaded[t] = e.loaded,
                            r.o.onProgress(t, l, e.loaded, e.total))
                    }
                        ,
                        a.onreadystatechange = function () {
                            4 == a.readyState && r._onComplete(t, a)
                        }
                        ,
                        (e = e || {}).qqfile = l;
                    e = qq.obj2url(e, this.o.action);
                    a.open("POST", e, !0),
                        a.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                        a.setRequestHeader("X-File-Name", encodeURIComponent(l)),
                        a.setRequestHeader("Content-Type", "application/octet-stream"),
                        a.send(i)
                },
                _onComplete: function (id, xhr) {
                    if (this._files[id]) {
                        var name = this.getName(id), size = this.getSize(id), response;
                        if (this.o.onProgress(id, name, size, size),
                            200 == xhr.status) {
                            this.log("xhr - server response received"),
                                this.log("responseText = " + xhr.responseText);
                            try {
                                response = eval("(" + xhr.responseText + ")")
                            } catch (err) {
                                response = {}
                            }
                            this.o.onComplete(id, name, response)
                        } else
                            this.o.onComplete(id, name, {});
                        this._files[id] = null,
                            this._xhrs[id] = null,
                            this._dequeue(id)
                    }
                },
                _cancel: function (e) {
                    this.o.onCancel(e, this.getName(e)),
                        this._files[e] = null,
                        this._xhrs[e] && (this._xhrs[e].abort(),
                            this._xhrs[e] = null)
                }
            })
    }
    , function (e, t, i) {
        i(7),
            e.exports = i(6)
    }
    , function (e, t) { }
    , function (e, t, i) {
        "use strict";
        i.r(t);
        i(1);
        var l = {
            languages: ["en", "ru", "jp", "it", "zh", "tw", "de", "pt", "br", "fr", "es", "mx", "tr", "pl", "ko", "th", "vi", "ar"],
            newGameText: {
                en: "New Game",
                ru: "Новая Игра",
                jp: "新しいゲーム",
                it: "Nuova partita",
                zh: "新游戏",
                tw: "新遊戲",
                de: "Neues Spiel",
                pt: "Novo Jogo",
                br: "Novo Jogo",
                fr: "Nouvelle partie",
                es: "Nueva partida",
                mx: "Juego nuevo",
                tr: "Yeni Oyun",
                pl: "Nowa gra",
                ko: "새로운 게임",
                th: "เกมใหม่",
                vi: "Trò chơi Mới",
                ar: "لعبة جديدة"
            },
            cancelText: {
                en: "Cancel",
                fr: "Annuler",
                jp: "キャンセル",
                ru: "Отмена",
                de: "Abbrechen",
                zh: "取消",
                tw: "取消",
                br: "Cancelar",
                pt: "Cancelar",
                it: "Annulla",
                tr: "İptal",
                ko: "취소",
                es: "Cancelar",
                mx: "Cancelar",
                pl: "Anuluj",
                th: "ยกเลิก",
                vi: "Hủy bỏ",
                ar: "إلغاء"
            },
            easyText: {
                en: "Easy",
                fr: "Facile",
                jp: "初級",
                ru: "Легкая",
                de: "Einfach",
                zh: "容易",
                tw: "簡單",
                br: "Fácil",
                pt: "Fácil",
                it: "Facile",
                tr: "Kolay",
                ko: "쉬움",
                es: "Fácil",
                mx: "Fácil",
                pl: "Łatwe",
                th: "ง่าย",
                vi: "Dễ",
                ar: "سهل"
            },
            mediumText: {
                en: "Medium",
                fr: "Moyen",
                jp: "中級",
                ru: "Средняя",
                de: "Mittel",
                zh: "中等",
                tw: "中等",
                br: "Médio",
                pt: "Médio",
                it: "Media",
                tr: "Orta",
                ko: "보통",
                es: "Normal",
                mx: "Normal",
                pl: "Średnie",
                th: "ปานกลาง",
                vi: "Vừa",
                ar: "متوسط"
            },
            hardText: {
                en: "Hard",
                fr: "Difficile",
                jp: "上級",
                ru: "Сложная",
                de: "Schwer",
                zh: "困难",
                tw: "困難",
                br: "Difícil",
                pt: "Difícil",
                tr: "Zor",
                it: "Difficile",
                ko: "어려움",
                es: "Difícil",
                mx: "Difícil",
                pl: "Trudne",
                th: "ยาก",
                vi: "Khó",
                ar: "صعب"
            },
            expertText: {
                en: "Expert",
                fr: "Expert",
                jp: "エキスパート",
                ru: "Экспертная",
                de: "Experte",
                zh: "专家级",
                tw: "專家",
                br: "Expert",
                pt: "Expert",
                it: "Esperto",
                tr: "Uzman",
                ko: "전문가",
                es: "Experto",
                mx: "Experto",
                pl: "Ekspert",
                th: "ผู้เชี่ยวชาญ",
                vi: "Chuyên gia",
                ar: "خبير"
            },
            hintText: {
                en: "Hint",
                fr: "Indice",
                jp: "ヒント",
                ru: "Подсказка",
                de: "Hinweis",
                zh: "提示",
                tw: "提示",
                br: "Dica",
                pt: "Dica",
                it: "Aiuto",
                tr: "İpucu",
                ko: "힌트",
                es: "Pista",
                mx: "Pista",
                pl: "Podpowiedź",
                th: "คำใบ้",
                vi: "Gợi ý",
                ar: "تلميح"
            },
            notesText: {
                en: "Notes",
                fr: "Notes",
                jp: "メモ",
                ru: "Заметки",
                de: "Notizen",
                zh: "笔记",
                tw: "註記",
                br: "Anotações",
                pt: "Notas",
                it: "Note",
                tr: "Notlar",
                ko: "노트",
                es: "Notas",
                mx: "Notas",
                pl: "Notatki",
                th: "บันทึก",
                vi: "Ghi chú",
                ar: "ملاحظات"
            },
            eraseText: {
                en: "Erase",
                fr: "Effacer",
                jp: "消す",
                ru: "Очистить",
                de: "Löschen",
                zh: "擦除",
                tw: "清除",
                br: "Apagar",
                pt: "Apagar",
                it: "Cancella",
                tr: "Sil",
                ko: "지우기",
                es: "Borrar",
                mx: "Borrar",
                pl: "Wymaż",
                th: "ลบ",
                vi: "Xóa",
                ar: "مسح"
            },
            undoText: {
                en: "Undo",
                fr: "Annuler",
                jp: "元に戻す",
                ru: "Отменить",
                de: "Rückgängig",
                zh: "撤销",
                tw: "復原",
                br: "Desfazer",
                pt: "Anular",
                it: "Annulla",
                tr: "Geri Al",
                ko: "실행 취소",
                es: "Deshacer",
                mx: "Deshacer",
                pl: "Cofnij",
                th: "ยกเลิกการใส่",
                vi: "Đi lại",
                ar: "تراجع"
            },
            winnerText: {
                en: "Excellent!",
                fr: "Excellent!",
                jp: "素晴らしい!",
                ru: "Отлично!",
                de: "Großartig!",
                zh: "太棒了！",
                tw: "太棒了！",
                br: "Excelente!",
                pt: "Excelente!",
                it: "Eccellente!",
                tr: "Mükemmel!",
                ko: "훌륭합니다!",
                es: "¡Excelente!",
                mx: "¡Excelente!",
                pl: "Doskonale!",
                th: "ยอดเยี่ยม!",
                vi: "Xuất sắc!",
                ar: "ممتاز!"
            },
            gameNotify: {
                en: "Select a cell, then tap a number to fill in the cell",
                fr: "Sélectionnez une cellule, puis entrer un chiffre pour le mettre dans la cellule",
                jp: "マスを選んだら、そこに入れる数字をタップします",
                ru: "Выберите ячейку, затем коснитесь цифры в панели управления, чтобы добавить её в выбранную ячейку",
                de: "Wähle eine Zelle und tippe dann auf die Zahl, die eingetragen werden soll",
                zh: "选择一个空格，然后点击一个数字将其填进空格。",
                tw: "選擇一個空格，然後點選一個數字填入空格中",
                br: "Selecione uma célula, depois toque um Número para adicioná-lo",
                pt: "Seleccione uma célula e carregue num Número para a preencher",
                it: "Scegli una cella, quindi tocca un numero per inserirlo",
                tr: "Bir hücre seçin, ardından hücreyi doldurmak için bir sayıya dokunun",
                ko: "셀을 선택한 후, 채울 숫자를 누르세요",
                es: "Seleccione una celda y después un número para completarla",
                mx: "Seleccione una celda, después pulse un número para ponerlo en ella.",
                pl: "Wybierz komórkę, a następnie stuknij cyfrę, aby umieścić ją w komórce",
                th: "เลือกช่องใดช่องหนึ่ง แล้วแตะตัวเลขเพื่อใส่ลงในช่องนั้นๆ",
                vi: "Chọn một ô, và chọn nhấn một Số để điền vào ô đó",
                ar: "حدد خانة، ثم اضغط على رقم لتعبئة الخانة"
            },
            difficultyText: {
                en: "Difficulty",
                ru: "Игра",
                jp: "難易度",
                it: "Difficoltà",
                zh: "难度",
                tw: "難度",
                de: "Schwierigkeit",
                pt: "Dificuldade",
                br: "Dificuldade",
                fr: "Difficulté",
                es: "Dificultad",
                mx: "Dificultad",
                tr: "Zorluk",
                pl: "Trudność gry",
                ko: "난이도",
                th: "ระดับความยาก",
                vi: "Độ khó",
                ar: "الصعوبة"
            },
            restartText: {
                en: "Restart",
                ru: "Начать заново",
                jp: "リスタート",
                it: "Ricomincia",
                zh: "重新开始",
                tw: "重新開始",
                de: "Neu starten",
                pt: "Reiniciar",
                br: "Reiniciar",
                fr: "Recommencer",
                es: "Reiniciar",
                mx: "Reiniciar",
                tr: "Yeniden Başlat",
                pl: "Restartuj",
                ko: "재시작",
                th: "เริ่มใหม่",
                vi: "Chơi lại",
                ar: "إعادة البدء"
            },
            lostProgressText: {
                en: "Current game progress will be lost",
                ru: "Текущая игра будет потеряна",
                jp: "プレー中のゲームの進行状況は失われます。",
                it: "I progressi della partita in corso verranno persi",
                zh: "当前游戏进度将丢失",
                tw: "將會失去目前遊戲進度。",
                de: "Der aktuelle Spielfortschritt wird verloren gehen",
                pt: "O progresso atual do jogo será perdido",
                br: "O progresso do jogo atual será perdido",
                fr: "La progression de la partie actuelle sera perdue",
                es: "El progreso actual se perderá",
                mx: "El progreso actual del juego se perderá",
                tr: "Oyundaki var olan ilerleme kaybedilecek",
                pl: "Bieżący postęp w grze zostanie utracony",
                ko: "현재 게임 진행 상태가 손실됩니다",
                th: "เกมที่ดำเนินอยู่จะสิ้นสุดลง",
                vi: "Tiến trình trò chơi hiện tại sẽ bị xóa",
                ar: "سيتم فقدان التقدم المُحرز الحالي في اللعبة."
            },
            checkMistakesText: {
                en: "Check for Mistakes",
                ru: "Проверка ошибок",
                jp: "にミスを確認",
                it: "Controllo degli errori",
                zh: "自检错误",
                tw: "檢查錯誤",
                de: "Überprüfung auf Fehler",
                pt: "Verificação de erros",
                br: "Verificação de Erros",
                fr: "Vérification des erreurs",
                es: "Comprobar errores",
                mx: "Verificación de errores",
                tr: "Hataları Kontrol",
                pl: "Sprawdzanie błędów",
                ko: "오류 확인",
                th: "ารตรวจสอบข้อผิดพลา",
                vi: "Kiểm tra lỗi",
                ar: "التحقق من الأخطاء"
            },
            uploaderErrors: {
                en: {
                    typeError: "Types of fules: {extensions}.",
                    sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                    minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                    emptyError: "{file} is empty, please select files again without it.",
                    limitError: "Files limit is reached: {limit}.",
                    onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
                },
                ru: {
                    typeError: "Допустимы только следующие типы файлов: {extensions}",
                    sizeError: '"Файл {file} слишком большой, максимально допустимый размер {sizeLimit}',
                    minSizeError: "Файл {file} имеет некорректный размер",
                    emptyError: "Файл {file} имеет некорректный размер",
                    limitError: "Вы можете загрузить не более {limit} изображений",
                    onLeave: "Происходит загрузка изображения, если вы покинете эту страницу, загрузка будет прекращена"
                },
                jp: {
                    typeError: "Types of fules: {extensions}.",
                    sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                    minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                    emptyError: "{file} is empty, please select files again without it.",
                    limitError: "Files limit is reached: {limit}.",
                    onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
                },
                it: {
                    typeError: "Types of fules: {extensions}.",
                    sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                    minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                    emptyError: "{file} is empty, please select files again without it.",
                    limitError: "Files limit is reached: {limit}.",
                    onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
                },
                zh: {
                    typeError: "Types of fules: {extensions}.",
                    sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                    minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                    emptyError: "{file} is empty, please select files again without it.",
                    limitError: "Files limit is reached: {limit}.",
                    onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
                },
                tw: {
                    typeError: "Types of fules: {extensions}.",
                    sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                    minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                    emptyError: "{file} is empty, please select files again without it.",
                    limitError: "Files limit is reached: {limit}.",
                    onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
                },
                de: {
                    typeError: "Types of fules: {extensions}.",
                    sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                    minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                    emptyError: "{file} is empty, please select files again without it.",
                    limitError: "Files limit is reached: {limit}.",
                    onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
                },
                pt: {
                    typeError: "Types of fules: {extensions}.",
                    sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                    minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                    emptyError: "{file} is empty, please select files again without it.",
                    limitError: "Files limit is reached: {limit}.",
                    onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
                },
                br: {
                    typeError: "Types of fules: {extensions}.",
                    sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                    minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                    emptyError: "{file} is empty, please select files again without it.",
                    limitError: "Files limit is reached: {limit}.",
                    onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
                },
                fr: {
                    typeError: "Types of fules: {extensions}.",
                    sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                    minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                    emptyError: "{file} is empty, please select files again without it.",
                    limitError: "Files limit is reached: {limit}.",
                    onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
                },
                es: {
                    typeError: "Types of fules: {extensions}.",
                    sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                    minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                    emptyError: "{file} is empty, please select files again without it.",
                    limitError: "Files limit is reached: {limit}.",
                    onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
                },
                mx: {
                    typeError: "Types of fules: {extensions}.",
                    sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                    minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                    emptyError: "{file} is empty, please select files again without it.",
                    limitError: "Files limit is reached: {limit}.",
                    onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
                },
                tr: {
                    typeError: "Types of fules: {extensions}.",
                    sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                    minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                    emptyError: "{file} is empty, please select files again without it.",
                    limitError: "Files limit is reached: {limit}.",
                    onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
                },
                pl: {
                    typeError: "Types of fules: {extensions}.",
                    sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                    minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                    emptyError: "{file} is empty, please select files again without it.",
                    limitError: "Files limit is reached: {limit}.",
                    onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
                },
                ko: {
                    typeError: "Types of fules: {extensions}.",
                    sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                    minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                    emptyError: "{file} is empty, please select files again without it.",
                    limitError: "Files limit is reached: {limit}.",
                    onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
                },
                th: {
                    typeError: "Types of fules: {extensions}.",
                    sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                    minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                    emptyError: "{file} is empty, please select files again without it.",
                    limitError: "Files limit is reached: {limit}.",
                    onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
                },
                vi: {
                    typeError: "Types of fules: {extensions}.",
                    sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                    minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                    emptyError: "{file} is empty, please select files again without it.",
                    limitError: "Files limit is reached: {limit}.",
                    onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
                },
                ar: {
                    typeError: "Types of fules: {extensions}.",
                    sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                    minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                    emptyError: "{file} is empty, please select files again without it.",
                    limitError: "Files limit is reached: {limit}.",
                    onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
                }
            }
        }
            , f = {
                1: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="34" viewBox="0 0 9.36 33.65"><path fill="currentColor" fill-rule="evenodd" d="M9.36,33.65H6.19V6.38H0V4.08H.62A6.88,6.88,0,0,0,4.94,3,4.36,4.36,0,0,0,6.53,0H9.36Z"/></svg>',
                2: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="34" viewBox="0 0 21.98 34.27"><path  fill="currentColor" fill-rule="evenodd" d="M21.79,34.27H.14V33a11.86,11.86,0,0,1,1.23-5.57A12.64,12.64,0,0,1,4.44,23.5,50,50,0,0,1,9.31,20l2.83-1.78a32.81,32.81,0,0,0,3.46-2.47,9.27,9.27,0,0,0,2.18-2.62,6.89,6.89,0,0,0,.84-3.45,6.39,6.39,0,0,0-2-5,7.57,7.57,0,0,0-5.28-1.83A7.21,7.21,0,0,0,5.93,5a10,10,0,0,0-2.62,6L0,10.7A12.38,12.38,0,0,1,3.77,2.78,10.91,10.91,0,0,1,11.33,0a13.15,13.15,0,0,1,5.4,1.08,8.8,8.8,0,0,1,3.84,3.24A9.27,9.27,0,0,1,22,9.5a9.46,9.46,0,0,1-1.05,4.61,11.63,11.63,0,0,1-2.57,3.22,37.13,37.13,0,0,1-4.1,2.93l-.51.28q-.25.15-.6.39l-2.54,1.73a26.36,26.36,0,0,0-5.21,4.2,6.5,6.5,0,0,0-1.8,4.48H21.79Z"/></svg>',
                3: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="35" viewBox="0 0 23.28 34.9"><path fill="currentColor" fill-rule="evenodd"  d="M16.78,13.92a5.84,5.84,0,0,0,2-4.7,5.75,5.75,0,0,0-2-4.68,7.62,7.62,0,0,0-5.07-1.71A6.92,6.92,0,0,0,6.86,4.54,8.23,8.23,0,0,0,4.51,9.65L1.25,9.22A10.26,10.26,0,0,1,4.63,2.38,10.55,10.55,0,0,1,11.71,0a12.57,12.57,0,0,1,5.21,1.06A8.77,8.77,0,0,1,20.71,4.2a8.67,8.67,0,0,1,1.42,5,7.45,7.45,0,0,1-1.42,4.53,8.5,8.5,0,0,1-3.77,2.91v.09a9.94,9.94,0,0,1,4.61,3.17,8.12,8.12,0,0,1,1.73,5.23,9,9,0,0,1-1.56,5.33,9.47,9.47,0,0,1-4.2,3.31,14.85,14.85,0,0,1-5.81,1.11,12.13,12.13,0,0,1-7.94-2.62A10.82,10.82,0,0,1,0,24.82l3.31-.39A9.06,9.06,0,0,0,6,30.05a8.09,8.09,0,0,0,5.69,2.06,9,9,0,0,0,5.88-1.89,6.23,6.23,0,0,0,2.33-5.07,6,6,0,0,0-2.33-5,9.56,9.56,0,0,0-6-1.8h-3V15.65h3.12A7.66,7.66,0,0,0,16.78,13.92Z"/></svg>',
                4: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="34" viewBox="0 0 23.95 33.65"><path fill="currentColor" fill-rule="evenodd" d="M24,21.7v2.68H19.54v9.27H16.37V24.38H0V21.65L14.74,0h4.8V21.7Zm-20.59,0h13V2.64h-.1L3.36,21.6Z"/></svg>',
                5: '<svg xmlns="http://www.w3.org/2000/svg" width="23" height="35" viewBox="0 0 22.56 34.27"><path fill="currentColor" fill-rule="evenodd" d="M17.06,12.31a10,10,0,0,1,4,3.94,12.59,12.59,0,0,1,1.51,6.41,12.58,12.58,0,0,1-1.51,6.4A9.7,9.7,0,0,1,16.94,33a12.61,12.61,0,0,1-5.71,1.29A11.75,11.75,0,0,1,3.86,32,10.74,10.74,0,0,1,0,25.82l3.36-.38a8,8,0,0,0,2.78,4.42,8,8,0,0,0,5.09,1.63,8,8,0,0,0,4-1,7.32,7.32,0,0,0,2.88-3,10,10,0,0,0,1.08-4.82q0-4.28-2.28-6.56a7.66,7.66,0,0,0-5.64-2.28,10.11,10.11,0,0,0-4.32.92A9.56,9.56,0,0,0,3.5,17.38H.43L1.92,0H20.5V2.93H4.61l-1,11.28h.09A8.14,8.14,0,0,1,7,11.83,11.88,11.88,0,0,1,11.62,11,11.34,11.34,0,0,1,17.06,12.31Z"/></svg>',
                6: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="35" viewBox="0 0 23.42 34.9"><path fill="currentColor" fill-rule="evenodd" d="M17.93,14.21a9.8,9.8,0,0,1,4,3.69,10.84,10.84,0,0,1,1.51,5.81,11.06,11.06,0,0,1-1.58,6,10.63,10.63,0,0,1-4.1,3.84,11.4,11.4,0,0,1-5.36,1.32q-6.72,0-10-5.14A14.31,14.31,0,0,1,.53,24.53,42.62,42.62,0,0,1,0,17.42Q0,7.88,3.58,3.94A11.41,11.41,0,0,1,12.38,0a10.74,10.74,0,0,1,6.46,2A10.17,10.17,0,0,1,22.7,7.63l-3.36.48A7.72,7.72,0,0,0,16.82,4.3a6.65,6.65,0,0,0-4.44-1.56A8.05,8.05,0,0,0,6,5.86Q3.36,9,3.36,17.18v.68h.1a9.47,9.47,0,0,1,3.88-3.65A11.53,11.53,0,0,1,12.62,13,11.66,11.66,0,0,1,17.93,14.21Zm-1.75,17A7.46,7.46,0,0,0,19,28.32a8.78,8.78,0,0,0,1-4.37,8.8,8.8,0,0,0-1-4.37,7.6,7.6,0,0,0-2.83-2.88,7.77,7.77,0,0,0-3.89-1,8.9,8.9,0,0,0-4.25,1,7.94,7.94,0,0,0-3.1,2.9A8.15,8.15,0,0,0,3.79,24a8.15,8.15,0,0,0,1.15,4.32A8,8,0,0,0,8,31.18a9,9,0,0,0,4.25,1A7.78,7.78,0,0,0,16.18,31.2Z"/></svg>',
                7: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="34" viewBox="0 0 21.6 33.65"><path fill="currentColor" fill-rule="evenodd" d="M21.6,1.58a10.48,10.48,0,0,1-1.06,4.61,50,50,0,0,1-3.36,5.71q-2.2,3.31-3.64,6a29.88,29.88,0,0,0-2.45,6.21,29.19,29.19,0,0,0-1,7.9v1.68H6.77V31.87a29.81,29.81,0,0,1,1.1-8.3A34,34,0,0,1,10.49,17c1-1.87,2.29-4,3.86-6.36C15.57,8.72,16.46,7.25,17,6.19A14.42,14.42,0,0,0,18.34,3V2.93H0V0H21.6Z"/></svg>',
                8: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="35" viewBox="0 0 23.62 34.9"><path fill="currentColor" fill-rule="evenodd" d="M11.81,34.94a14.73,14.73,0,0,1-5.95-1.17,10,10,0,0,1-4.28-3.46A9.34,9.34,0,0,1,0,24.86a8.71,8.71,0,0,1,1.8-5.49,9.62,9.62,0,0,1,4.82-3.29v-.14a8.54,8.54,0,0,1-3.81-2.88A7.15,7.15,0,0,1,1.39,8.69,7.68,7.68,0,0,1,2.83,4,9.13,9.13,0,0,1,6.67,1a12.83,12.83,0,0,1,5.14-1A12.82,12.82,0,0,1,17,1a9.16,9.16,0,0,1,3.81,3,7.68,7.68,0,0,1,1.44,4.66,7.2,7.2,0,0,1-1.41,4.37A8.62,8.62,0,0,1,17,15.94v.14a9.45,9.45,0,0,1,4.85,3.29,8.81,8.81,0,0,1,1.78,5.49A9.27,9.27,0,0,1,22,30.31a9.94,9.94,0,0,1-4.27,3.46A14.76,14.76,0,0,1,11.81,34.94Zm0-17.37a9.07,9.07,0,0,0-6,2,6.6,6.6,0,0,0-2.4,5.35,6.58,6.58,0,0,0,2.4,5.35,9.07,9.07,0,0,0,6,2,9.07,9.07,0,0,0,6-2,6.58,6.58,0,0,0,2.4-5.35,6.6,6.6,0,0,0-2.4-5.35A9.07,9.07,0,0,0,11.81,17.57Zm0-14.88a8,8,0,0,0-3.51.77A6.39,6.39,0,0,0,5.71,5.62a5.41,5.41,0,0,0-1,3.16,5.4,5.4,0,0,0,2.07,4.35,7.6,7.6,0,0,0,5,1.7,8,8,0,0,0,3.53-.77,6.59,6.59,0,0,0,2.59-2.16,5.28,5.28,0,0,0,1-3.12,5.41,5.41,0,0,0-1-3.14,6.51,6.51,0,0,0-2.62-2.18A8,8,0,0,0,11.81,2.69Z"/></svg>',
                9: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="35" viewBox="0 0 23.47 34.9"><path fill="currentColor" fill-rule="evenodd" d="M5.52,20.69a9.84,9.84,0,0,1-4-3.7A10.82,10.82,0,0,1,0,11.18a11.14,11.14,0,0,1,1.58-6A10.63,10.63,0,0,1,5.71,1.32,11.54,11.54,0,0,1,11.09,0q6.72,0,10,5.14a14.31,14.31,0,0,1,1.87,5.23,41.46,41.46,0,0,1,.53,7.1Q23.47,27,19.9,31a11.46,11.46,0,0,1-8.81,3.94,10.83,10.83,0,0,1-6.46-2A10.19,10.19,0,0,1,.77,27.26l3.36-.48A7.84,7.84,0,0,0,6.65,30.6a6.65,6.65,0,0,0,4.44,1.56A8.07,8.07,0,0,0,17.5,29q2.61-3.12,2.61-11.33V17H20a9.5,9.5,0,0,1-3.87,3.65,11.41,11.41,0,0,1-5.3,1.25A11.77,11.77,0,0,1,5.52,20.69ZM7.3,3.7A7.42,7.42,0,0,0,4.46,6.58a8.74,8.74,0,0,0-1,4.36,8.78,8.78,0,0,0,1,4.37A7.42,7.42,0,0,0,7.3,18.19a7.65,7.65,0,0,0,3.84,1,9,9,0,0,0,4.29-1,7.93,7.93,0,0,0,4.25-7.23,7.9,7.9,0,0,0-4.25-7.22,9,9,0,0,0-4.29-1A7.55,7.55,0,0,0,7.3,3.7Z"/></svg>',
                cup: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path style="fill:#576D7E;" d="M395.636,407.273c0-12.8-10.473-23.273-23.273-23.273H139.636c-12.8,0-23.273,10.473-23.273,23.273v58.182h279.273V407.273z"/><path style="fill:#35495C;" d="M407.273,465.455c5.818,0,11.636,5.818,11.636,11.636v23.273c0,5.818-5.818,11.636-11.636,11.636H104.727c-5.818,0-11.636-5.818-11.636-11.636v-23.273c0-5.818,5.818-11.636,11.636-11.636H407.273z"/><path style="fill:#F6B545;" d="M325.818,360.727c-6.982,0-11.636-4.655-11.636-11.636v-38.4c-6.982,2.327-15.127,3.491-23.273,3.491h-69.818c-8.145,0-16.291-1.164-23.273-3.491v38.4c0,6.982-4.655,11.636-11.636,11.636s-11.636,4.655-11.636,11.636V384h162.909v-11.636C337.455,365.382,332.8,360.727,325.818,360.727z"/><path style="fill:#35495C;" d="M395.636,465.455v-58.182c0-12.8-10.473-23.273-23.273-23.273h-58.182v81.455H395.636z"/><path style="fill:#FFCB5B;" d="M302.545,453.818h-93.091c-12.8,0-23.273-10.473-23.273-23.273l0,0c0-12.8,10.473-23.273,23.273-23.273h93.091c12.8,0,23.273,10.473,23.273,23.273l0,0C325.818,443.345,315.345,453.818,302.545,453.818z"/><g><polygon style="fill:#F6B545;" points="267.636,453.818 244.364,453.818 267.636,407.273 290.909,407.273"/><path style="fill:#F6B545;" d="M325.818,430.545c0-12.8-10.473-23.273-23.273-23.273l-23.273,46.545h23.273C315.345,453.818,325.818,443.345,325.818,430.545z"/></g><path style="fill:#123247;" d="M407.273,465.455h-81.455v11.636c0,12.8-10.473,23.273-23.273,23.273H116.364c-6.982,0-11.636-4.655-11.636-11.636v-23.273c-6.982,0-11.636,4.655-11.636,11.636v23.273c0,5.818,4.655,11.636,11.636,11.636H256h151.273c5.818,0,11.636-5.818,11.636-11.636v-23.273C418.909,471.273,413.091,465.455,407.273,465.455z"/><path style="fill:#FFCB5B;" d="M192,360.727h34.909c3.491,0,5.818,2.327,5.818,5.818l0,0c0,3.491-2.327,5.818-5.818,5.818H192c-3.491,0-5.818-2.327-5.818-5.818l0,0C186.182,363.055,188.509,360.727,192,360.727z"/><path style="fill:#F6B545;" d="M151.273,256h-26.764c-15.127,0-30.255-5.818-40.727-17.455L64,218.764c-11.636-10.473-17.455-24.436-17.455-40.727v-73.309c0-19.782,15.127-34.909,34.909-34.909h58.182c6.982,0,11.636,4.655,11.636,11.636c0,6.982-4.655,11.636-11.636,11.636H81.455c-6.982,0-11.636,4.655-11.636,11.636v73.309c0,9.309,3.491,18.618,10.473,24.436l19.782,19.782c6.982,6.982,15.127,10.473,24.436,10.473h26.764c6.982,0,11.636,4.655,11.636,11.636C162.909,251.345,158.255,256,151.273,256z"/><g><path style="fill:#FFCA5D;" d="M58.182,110.545v46.545c0,3.491-2.327,5.818-5.818,5.818l0,0c-3.491,0-5.818-2.327-5.818-5.818v-46.545c0-3.491,2.327-5.818,5.818-5.818l0,0C55.855,104.727,58.182,107.055,58.182,110.545z"/><circle style="fill:#FFCA5D;" cx="52.364" cy="180.364" r="5.818"/></g><path style="fill:#F6B545;" d="M387.491,256h-26.764c-6.982,0-11.636-4.655-11.636-11.636c0-6.982,4.655-11.636,11.636-11.636h26.764c9.309,0,18.618-3.491,24.436-10.473l19.782-19.782c6.982-6.982,10.473-15.127,10.473-24.436v-73.309c0-6.982-4.655-11.636-11.636-11.636h-58.182c-6.982,0-11.636-4.655-11.636-11.636c0-6.982,4.655-11.636,11.636-11.636h58.182c19.782,0,34.909,15.127,34.909,34.909v73.309c0,15.127-5.818,30.255-17.455,40.727l-19.782,19.782C417.745,250.182,403.782,256,387.491,256z"/><g><path style="fill:#F19920;" d="M395.636,231.564c-2.327,0-4.655,1.164-8.145,1.164h-26.764c-6.982,0-11.636,4.655-11.636,11.636c0,6.982,4.655,11.636,11.636,11.636h26.764c1.164,0,2.327,0,4.655,0C394.473,247.855,395.636,240.873,395.636,231.564L395.636,231.564z"/><path style="fill:#F19920;" d="M360.727,81.455c0,6.982,4.655,11.636,11.636,11.636h23.273V69.818h-23.273C365.382,69.818,360.727,74.473,360.727,81.455z"/></g><path style="fill:#FFCA5D;" d="M290.909,314.182h-69.818c-45.382,0-81.455-36.073-81.455-81.455V46.545h232.727v186.182C372.364,278.109,336.291,314.182,290.909,314.182z"/><g><path style="fill:#F19920;" d="M325.818,360.727c-5.818,0-11.636-5.818-11.636-11.636v-26.764v-9.309v-2.327c-6.982,2.327-15.127,3.491-23.273,3.491h-69.818c-8.145,0-16.291-1.164-23.273-3.491v11.636c6.982,2.327,15.127,3.491,23.273,3.491H256c12.8,0,23.273,10.473,23.273,23.273l0,0c0,5.818,4.655,11.636,11.636,11.636c6.982,0,11.636,4.655,11.636,11.636V384h11.636h23.273v-11.636C337.455,365.382,331.636,360.727,325.818,360.727z"/><path style="fill:#F19920;" d="M465.455,110.545v46.545c0,3.491-2.327,5.818-5.818,5.818l0,0c-3.491,0-5.818-2.327-5.818-5.818v-46.545c0-3.491,2.327-5.818,5.818-5.818l0,0C463.127,104.727,465.455,107.055,465.455,110.545z"/></g><g><path style="fill:#F6B545;" d="M139.636,46.545v11.636h162.909c12.8,0,23.273,10.473,23.273,23.273v151.273c0,45.382-24.436,81.455-69.818,81.455h34.909c45.382,0,81.455-36.073,81.455-81.455V46.545H139.636z"/><path style="fill:#F6B545;" d="M372.364,46.545H139.636c-12.8,0-23.273-10.473-23.273-23.273l0,0c0-12.8,10.473-23.273,23.273-23.273h232.727c12.8,0,23.273,10.473,23.273,23.273l0,0C395.636,36.073,385.164,46.545,372.364,46.545z"/></g><g><path style="fill:#FFCA5D;" d="M145.455,0H192c3.491,0,5.818,2.327,5.818,5.818l0,0c0,3.491-2.327,5.818-5.818,5.818h-46.545c-3.491,0-5.818-2.327-5.818-5.818l0,0C139.636,2.327,141.964,0,145.455,0z"/><path style="fill:#FFCA5D;" d="M238.545,11.636h-23.273c-3.491,0-5.818-2.327-5.818-5.818l0,0c0-3.491,2.327-5.818,5.818-5.818h23.273c3.491,0,5.818,2.327,5.818,5.818l0,0C244.364,9.309,242.036,11.636,238.545,11.636z"/><path style="fill:#FFCA5D;" d="M110.545,81.455H87.273c-3.491,0-5.818-2.327-5.818-5.818l0,0c0-3.491,2.327-5.818,5.818-5.818h23.273c3.491,0,5.818,2.327,5.818,5.818l0,0C116.364,79.127,114.036,81.455,110.545,81.455z"/><path style="fill:#FFCA5D;" d="M436.364,81.455h-23.273c-3.491,0-5.818-2.327-5.818-5.818l0,0c0-3.491,2.327-5.818,5.818-5.818\th23.273c3.491,0,5.818,2.327,5.818,5.818l0,0C442.182,79.127,439.855,81.455,436.364,81.455z"/></g><path style="fill:#F19920;" d="M372.364,0L372.364,0c0,12.8-10.473,23.273-23.273,23.273H116.364c0,12.8,10.473,23.273,23.273,23.273H371.2c11.636,0,22.109-8.145,24.436-19.782C397.964,12.8,386.327,0,372.364,0z"/><circle style="fill:#FFCA5D;" cx="261.818" cy="5.818" r="5.818"/><path style="fill:#F19920;" d="M282.764,209.455H281.6L256,195.491l-25.6,13.964c-1.164,0-2.327,0-3.491,0c-1.164-1.164-1.164-2.327-1.164-3.491l4.655-30.255l-20.945-20.945c0-1.164,0-2.327,0-3.491c0-1.164,1.164-2.327,2.327-2.327l29.091-4.655l12.8-26.764c0-1.164,1.164-1.164,2.327-1.164l0,0c1.164,0,2.327,1.164,2.327,1.164l12.8,26.764l29.091,4.655c1.164,0,2.327,1.164,2.327,2.327s0,2.327-1.164,3.491l-20.945,20.945l4.655,30.255c0,1.164,0,2.327-1.164,3.491C283.927,209.455,283.927,209.455,282.764,209.455z"/><g><path style="fill:#FFE27A;" d="M174.545,174.545L174.545,174.545c-6.982,0-11.636-4.655-11.636-11.636V93.091c0-6.982,4.655-11.636,11.636-11.636l0,0c6.982,0,11.636,4.655,11.636,11.636v69.818C186.182,169.891,181.527,174.545,174.545,174.545z"/><circle style="fill:#FFE27A;" cx="174.545" cy="197.818" r="11.636"/></g><path style="fill:#35495C;" d="M139.636,384c-12.8,0-23.273,10.473-23.273,23.273v58.182h23.273V384z"/></svg>',
                star: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999"><path style="fill:#FFDC64;" d="M452.71,157.937l-133.741-12.404L265.843,22.17c-3.72-8.638-15.967-8.638-19.686,0l-53.126,123.362L59.29,157.937c-9.365,0.868-13.149,12.516-6.084,18.723l100.908,88.646l-29.531,131.029c-2.068,9.175,7.841,16.373,15.927,11.572L256,339.331l115.49,68.576c8.087,4.802,17.994-2.397,15.927-11.572l-29.532-131.029l100.909-88.646C465.859,170.453,462.074,158.805,452.71,157.937z"/><g><path style="fill:#FFF082;" d="M119.278,17.923c6.818,9.47,26.062,50.14,37.064,73.842c1.73,3.726-2.945,7.092-5.93,4.269C131.425,78.082,98.96,46.93,92.142,37.459c-5.395-7.493-3.694-17.941,3.8-23.336C103.435,8.728,113.883,10.43,119.278,17.923z"/><path style="fill:#FFF082;" d="M392.722,17.923c-6.818,9.47-26.062,50.14-37.064,73.842c-1.73,3.726,2.945,7.092,5.93,4.269c18.987-17.952,51.451-49.105,58.27-58.575c5.395-7.493,3.694-17.941-3.8-23.336C408.565,8.728,398.117,10.43,392.722,17.923z"/><path style="fill:#FFF082;" d="M500.461,295.629c-11.094-3.618-55.689-9.595-81.612-12.875c-4.075-0.516-5.861,4.961-2.266,6.947c22.873,12.635,62.416,34.099,73.51,37.717c8.778,2.863,18.215-1.932,21.078-10.711C514.034,307.928,509.239,298.492,500.461,295.629z"/><path style="fill:#FFF082;" d="M11.539,295.629c11.094-3.618,55.689-9.595,81.612-12.875c4.075-0.516,5.861,4.961,2.266,6.947c-22.873,12.635-62.416,34.099-73.51,37.717c-8.778,2.863-18.215-1.932-21.078-10.711S2.761,298.492,11.539,295.629z"/><path style="fill:#FFF082;" d="M239.794,484.31c0-11.669,8.145-55.919,13.065-81.582c0.773-4.034,6.534-4.034,7.307,0c4.92,25.663,13.065,69.913,13.065,81.582c0,9.233-7.485,16.718-16.718,16.718C247.279,501.029,239.794,493.543,239.794,484.31z"/></g><path style="fill:#FFC850;" d="M285.161,67.03l-19.319-44.86c-3.72-8.638-15.967-8.638-19.686,0L193.03,145.532L59.29,157.937c-9.365,0.868-13.149,12.516-6.084,18.723l100.908,88.646l-29.531,131.029c-2.068,9.175,7.841,16.373,15.927,11.572l15.371-9.127C181.08,235.66,251.922,115.918,285.161,67.03z"/></svg>',
                starBig: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.867 53.867"><polygon style="fill:#EFCE4A;" points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182"/></svg>',
                pencil: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.255 56.236l-37.49-37.49c-24.993-24.993-65.515-24.994-90.51 0L12.838 371.162.151 485.346c-1.698 15.286 11.22 28.203 26.504 26.504l114.184-12.687 352.417-352.417c24.992-24.994 24.992-65.517-.001-90.51zm-95.196 140.45L174 420.745V386h-48v-48H91.255l224.059-224.059 82.745 82.745zM126.147 468.598l-58.995 6.555-30.305-30.305 6.555-58.995L63.255 366H98v48h48v34.745l-19.853 19.853zm344.48-344.48l-49.941 49.941-82.745-82.745 49.941-49.941c12.505-12.505 32.748-12.507 45.255 0l37.49 37.49c12.506 12.506 12.507 32.747 0 45.255z"></path></svg>',
                hint: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M176 0C73.05 0-.12 83.54 0 176.24c.06 44.28 16.5 84.67 43.56 115.54C69.21 321.03 93.85 368.68 96 384l.06 75.18c0 3.15.94 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84L256 384c2.26-15.72 26.99-63.19 52.44-92.22C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0zm47.94 454.31L206.85 480h-61.71l-17.09-25.69-.01-6.31h95.9v6.31zm.04-38.31h-95.97l-.07-32h96.08l-.04 32zm60.4-145.32c-13.99 15.96-36.33 48.1-50.58 81.31H118.21c-14.26-33.22-36.59-65.35-50.58-81.31C44.5 244.3 32.13 210.85 32.05 176 31.87 99.01 92.43 32 176 32c79.4 0 144 64.6 144 144 0 34.85-12.65 68.48-35.62 94.68zM176 64c-61.75 0-112 50.25-112 112 0 8.84 7.16 16 16 16s16-7.16 16-16c0-44.11 35.88-80 80-80 8.84 0 16-7.16 16-16s-7.16-16-16-16z"></path></svg>',
                erase: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497.94 273.94a48 48 0 0 0 0-67.88l-160-160a48 48 0 0 0-67.88 0l-256 256a48 48 0 0 0 0 67.88l96 96A48 48 0 0 0 144 480h356a12 12 0 0 0 12-12v-8a12 12 0 0 0-12-12H323.88l174.06-174.06zM292.69 68.69a16 16 0 0 1 22.62 0l160 160a16 16 0 0 1 0 22.62L358.63 368 176 185.37zM144 448a15.88 15.88 0 0 1-11.31-4.69l-96-96a16 16 0 0 1 0-22.62L153.37 208 336 390.63l-52.69 52.68A15.88 15.88 0 0 1 272 448z"></path></svg>',
                undo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M20 8h10c6.627 0 12 5.373 12 12v110.625C85.196 57.047 165.239 7.715 256.793 8.001 393.18 8.428 504.213 120.009 504 256.396 503.786 393.181 392.834 504 256 504c-63.926 0-122.202-24.187-166.178-63.908-5.113-4.618-5.354-12.561-.482-17.433l7.069-7.069c4.503-4.503 11.749-4.714 16.482-.454C150.782 449.238 200.935 470 256 470c117.744 0 214-95.331 214-214 0-117.744-95.331-214-214-214-82.862 0-154.737 47.077-190.289 116H180c6.627 0 12 5.373 12 12v10c0 6.627-5.373 12-12 12H20c-6.627 0-12-5.373-12-12V20c0-6.627 5.373-12 12-12z"></path></svg>',
                iconArrowDropdown: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z"></path></svg>',
                iconClock: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 64C132.26 64 32 164.29 32 288a222.69 222.69 0 0 0 44.75 134l-40.1 40.09a16 16 0 0 0 0 22.63l22.63 22.62a16 16 0 0 0 22.62 0l40.1-40.12a222.82 222.82 0 0 0 268 0l40.1 40.09a16 16 0 0 0 22.63 0l22.62-22.62a16 16 0 0 0 0-22.63L435.21 422A222.7 222.7 0 0 0 480 288c0-123.71-100.3-224-224-224zm0 400a176 176 0 1 1 176-176 176 176 0 0 1-176 176zM96 0A96 96 0 0 0 0 96a94.81 94.81 0 0 0 15.3 51.26L161.2 25.68A95.63 95.63 0 0 0 96 0zm184 292.47V168a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v132.16a32 32 0 0 0 12 25l64.54 51.57a8.58 8.58 0 0 0 5.87 1.72 8 8 0 0 0 5.35-2.95l20-25a8 8 0 0 0-1.25-11.27zM416 0a95.66 95.66 0 0 0-65.18 25.66l145.89 121.57A94.85 94.85 0 0 0 512 96a96 96 0 0 0-96-96z"></path></svg>',
                checkMistakes: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 1774 1537"><path fill="black" stroke="black" stroke-width="33" stroke-miterlimit="22.9256" d="M677 1092c-136,0 -235,-81 -258,-206l78 0c20,82 88,138 181,138 143,0 224,-130 229,-356 1,-6 -3,-13 -3,-18l-3 0c-35,89 -124,148 -230,148 -154,0 -266,-114 -266,-267 0,-160 116,-278 278,-278 109,0 195,55 245,155 36,63 54,145 54,248 0,273 -112,437 -305,437l0 0zm6 -361c116,0 204,-87 204,-199 0,-120 -88,-213 -204,-213 -115,0 -202,90 -202,208 0,117 83,203 201,203z"/><polygon fill="none" stroke="#2B2A29" stroke-width="66" stroke-miterlimit="22.9256" points="33,33 1326,33 1326,1326 33,1326 "/><path fill="black" fill-rule="nonzero" d="M1700 962l-25 -25c-5,-5 -12,-8 -19,-8 -7,0 -14,3 -19,8l-413 421 -216 -216c-5,-5 -12,-8 -19,-8 -7,0 -14,3 -19,8l-25 25c-5,5 -8,12 -8,19 0,7 3,14 8,19l260 259c5,5 12,8 19,8 7,0 14,-3 19,-8l457 -464c5,-5 8,-12 8,-19 0,-7 -3,-14 -8,-19l0 0z"/><path id="1" fill="white" d="M1722 891l25 25 0 0 0 0c9,9 15,19 20,30 5,11 7,23 7,35 0,12 -2,24 -7,35 -4,11 -11,21 -19,29 0,0 0,0 0,0l-457 464 0 0c0,0 0,0 0,0 -9,9 -19,16 -30,20 -11,5 -23,7 -35,7 -12,0 -24,-2 -35,-7 -11,-4 -21,-11 -30,-20 0,0 0,0 0,0l-260 -259c-9,-9 -16,-19 -20,-30 -5,-11 -7,-23 -7,-35 0,-12 2,-24 7,-35 3,-8 8,-16 14,-23 2,-2 4,-5 6,-7l25 -25 0 0c9,-9 19,-15 30,-20 11,-5 23,-7 35,-7 12,0 24,2 35,7 8,3 16,8 23,14 2,2 5,4 7,6l170 170 367 -374 0 0c0,0 0,0 0,0 9,-9 19,-16 30,-20 11,-5 23,-7 35,-7 12,0 24,2 35,7 8,3 16,8 23,14 2,2 5,4 7,6zm-22 71l-25 -25c-5,-5 -12,-8 -19,-8 -7,0 -14,3 -19,8l-413 421 -216 -216c-5,-5 -12,-8 -19,-8 -7,0 -14,3 -19,8l-25 25c-5,5 -8,12 -8,19 0,7 3,14 8,19l260 259c5,5 12,8 19,8 7,0 14,-3 19,-8l457 -464c5,-5 8,-12 8,-19 0,-7 -3,-14 -8,-19l0 0z"/></svg>',
                iconPause: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path fill="#dadde2" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328a16 16 0 0 1-16 16h-48a16 16 0 0 1-16-16V176a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16zm112 0a16 16 0 0 1-16 16h-48a16 16 0 0 1-16-16V176a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16z" class="secondary"></path><path fill="#adb5bd" d="M224 160h-48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V176a16 16 0 0 0-16-16zm112 0h-48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V176a16 16 0 0 0-16-16z"></path></g></svg>',
                iconPlay: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path fill="#dadde2" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z" class="secondary"></path><path fill="#adb5bd" d="M371.7 280l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></g></svg>',
                iconPlayBig: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path fill="#4a90e2" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z" class="secondary"></path><path fill="#ffffff" d="M371.7 280l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></g></svg>',
                times: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="25" height="25"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>',
                getSvg: function (e) {
                    if (e && 0 < e)
                        return this[String(e)]
                }
            }
            , a = {
                arraySuffix: "[]",
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                },
                contentType: "application/x-www-form-urlencoded",
                request: function (e, t, i, l, a, r, n) {
                    i = i || {},
                        "get" == e.toLowerCase() && Object.keys(i).length && (t += (-1 < t.indexOf("?") ? "&" : "?") + this.stringify(i)),
                        l = l || {};
                    var s, o = this._createXHRObject();
                    for (s in o.open(e, t, !0),
                        this.headers)
                        this.headers.hasOwnProperty(s) && o.setRequestHeader(s, this.headers[s]);
                    for (s in l)
                        l.hasOwnProperty(s) && o.setRequestHeader(s, l[s]);
                    return o.onreadystatechange = function () {
                        4 === o.readyState && (200 === o.status ? a && a.call(n, o.responseText, o) : r && r.call(n, o.responseText, o))
                    }
                        ,
                        "POST" == e || "PUT" == e ? (o.setRequestHeader("Content-Type", this.contentType),
                            o.send(this.stringify(i))) : o.send(null),
                        o
                },
                _createXHRObject: function () {
                    return window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Msxml2.XMLHTTP")
                },
                isArray: function (e) {
                    return Array.isArray ? Array.isArray(e) : "[object Array]" == Object.prototype.toString.call(e)
                },
                parse: function (e) {
                    var t = {}
                        , i = decodeURIComponent;
                    if (e.length)
                        for (var l, a, r = e.split("&"), n = 0; n < r.length; n++)
                            !r[n] || (a = r[n].split("="))[0] && (l = i(a[0]),
                                a = i((a[1] || "").replace(/\+/g, "%20")),
                                l in t ? "[object Array]" == Object.prototype.toString.call(t[l]) ? t[l].push(a) : t[l] = [t[l], a] : t[l] = a);
                    return t
                },
                stringify: function (e) {
                    var t, i = [];
                    for (t in e)
                        if (e.hasOwnProperty(t)) {
                            var l = e[t];
                            if (this.isArray(l))
                                for (var a = 0; a < l.length; a++)
                                    i.push(encodeURIComponent(t) + this.arraySuffix + "=" + encodeURIComponent(String(l[a])));
                            else
                                i.push(encodeURIComponent(t) + "=" + encodeURIComponent(String(l)))
                        }
                    return i.join("&")
                }
            };
        function h(e) {
            var t = e.localizations
                , i = e.type
                , l = e.lang
                , a = t.newGameText
                , r = t.lostProgressText
                , e = t.restartText
                , t = t.cancelText;
            return '<div class="new-game-button-wrapper' + (i ? "-" + i : "") + '"><div class="btn new-game-button">' + a[l] + '</div><div class="new-game-menu"><div class="tooltip-arrow"></div><ul class="new-game-menu__list"><li class="lost-progress-label">' + r[l] + '</li><li><a class="new-game-menu-new">' + a[l] + '</a></li><li><a class="new-game-menu-restart">' + e[l] + '</a></li><li><a class="new-game-menu-cancel">' + t[l] + "</a></li></ul></div></div>"
        }
        var r = {
            create: function (e, t) {
                var i, l, a, r, n, s, o, c, d, u, m, p;
                0 < e.length && (e[0].append((i = {
                    localizations: window.localizations,
                    urls: y.urls,
                    difficulty: y.difficulty,
                    lang: t
                },
                    c = i.localizations,
                    d = i.lang,
                    i.svg,
                    u = c.difficultyText,
                    m = c.easyText,
                    p = c.checkMistakesText,
                    '<div class="game-info-wrapper"><div class="difficulty-wrap"><div class="difficulty-text">' + u[d] + ': </div><div class="difficulty-label"><span class="difficulty-label-text">' + m[d] + '</span><div class="dropdown-arrow icon-arrow-dropdown"> ' + f.iconArrowDropdown + ' </div><div class="difficulty-menu"><div class="tooltip-arrow"></div>' + (a = (l = i).localizations,
                        r = l.urls,
                        n = l.lang,
                        s = a.easyText,
                        o = a.mediumText,
                        c = a.hardText,
                        u = a.expertText,
                        m = r.easy,
                        l = r.medium,
                        a = r.hard,
                        r = r.expert,
                        '<ul><li><a href="' + m + '" data-difficulty="easy">' + s[n] + '</a></li><li><a href="' + l + '" data-difficulty="medium">' + o[n] + '</a></li><li><a href="' + a + '" data-difficulty="hard">' + c[n] + '</a></li><li><a href="' + r + '" data-difficulty="expert">' + u[n] + "</a></li></ul>") + "</div>" + (s = (m = i).localizations,
                            l = m.urls,
                            o = m.difficulty,
                            a = m.lang,
                            c = s.easyText,
                            r = s.mediumText,
                            u = s.hardText,
                            n = s.expertText,
                            i = l.easy,
                            m = l.medium,
                            s = l.hard,
                            l = l.expert,
                            '<select class="difficulty-menu-select"><option value="' + i + '" ' + ("easy" === o ? "selected" : "") + ">" + c[a] + '</option><option value="' + m + '" ' + ("medium" === o ? "selected" : "") + ">" + r[a] + '</option><option value="' + s + '" ' + ("hard" === o ? "selected" : "") + ">" + u[a] + '</option><option value="' + l + '" ' + ("expert" === o ? "selected" : "") + ">" + n[a] + "</option></select>") + '</div></div><div class="check-mistakes-wrapper"><label class="check-mistakes"><span class="label-text">' + p[d] + '</span><span class="switch"><input id="checkMistakes" type="checkbox" /><span class="switch-pin">' + f.checkMistakes + '</span></span></label></div><div class="timer-wrapper"><span id="timer" class="timer">00:00</span><div class="icon icon-pause timer-pause">' + f.iconPause + '</div><div class="icon icon-play timer-pause">' + f.iconPlay + "</div></div></div>")),
                    e[0].append(h({
                        lang: t,
                        localizations: window.localizations
                    })),
                    e[0].append(this.gameWrapperHTML(t)))
            },
            gameWrapperHTML: function (e) {
                var t, i, l, a, r, n, s, o, c;
                return '<div class="game-flex-wrapper">' + (t = {
                    svg: window.svgList,
                    localizations: window.localizations,
                    lang: e
                },
                    i = t.localizations,
                    l = t.svg,
                    a = t.lang,
                    r = l.iconPlayBig,
                    n = l.cup,
                    s = l.star,
                    o = l.starBig,
                    l.wreath,
                    c = l.iconClock,
                    t = i.winnerText,
                    l = i.newGameText,
                    i = i.gameNotify,
                    '<div class="game__wrap"><div class="pause__overlay"><div class="icon-play-big">' + r + '</div></div><div class="winner__overlay"><div class="winner__star winner__star-first">' + o + '</div><div class="winner__star winner__star-second">' + o + '</div><div class="winner__content-wrap"><div class="winner__cup"><div class="winner__cup-stars"><div class="winner__cup-star">' + s + '</div><div class="winner__cup-star">' + s + '</div><div class="winner__cup-star">' + s + '</div><div class="winner__cup-star">' + s + '</div><div class="winner__cup-star">' + s + '</div><div class="winner__cup-star">' + s + '</div><div class="winner__cup-star">' + s + '</div><div class="winner__cup-star">' + s + '</div><div class="winner__cup-star">' + s + '</div><div class="winner__cup-star">' + s + '</div><div class="winner__cup-star">' + s + '</div><div class="winner__cup-star">' + s + '</div></div><div class="winner__cup-icon">' + n + '</div></div><div class="winner__text">' + t[a] + '</div><div class="winner__time-wrap"><span class="icon-clock">' + c + '</span><span class="winner__time">00:00</span></div><div class="btn button-play">' + l[a] + '</div></div></div><div class="game__notify">' + i[a] + '</div><div id="game" class="game"></div></div>') + this.gameControlsWrapperHTML(e) + "</div>"
            },
            gameControlsWrapperHTML: function (e) {
                var t, i, l, a, r, n, s, o;
                return '<div class="game-controls-wrapper"><nav>' + h({
                    lang: e,
                    localizations: window.localizations
                }) + ('<div class="numpad-wrapper"><div class="numpad"><div class="numpad-item" data-value="1">' + (o = window.svgList)[1] + '</div><div class="numpad-item" data-value="2">' + o[2] + '</div><div class="numpad-item" data-value="3">' + o[3] + '</div><div class="numpad-item" data-value="4">' + o[4] + '</div><div class="numpad-item" data-value="5">' + o[5] + '</div><div class="numpad-item" data-value="6">' + o[6] + '</div><div class="numpad-item" data-value="7">' + o[7] + '</div><div class="numpad-item" data-value="8">' + o[8] + '</div><div class="numpad-item" data-value="9">' + o[9] + "</div></div></div>") + (t = {
                    svg: window.svgList,
                    localizations: window.localizations,
                    lang: e
                },
                    i = t.localizations,
                    l = t.svg,
                    a = t.lang,
                    r = l.pencil,
                    n = l.hint,
                    s = l.undo,
                    o = l.erase,
                    e = i.notesText,
                    t = i.hintText,
                    l = i.undoText,
                    i = i.eraseText,
                    '<div class="game-controls"><div class="game-controls-buttons"><div class="game-controls-item game-controls-pencil" data-action="pencil"><div class="svg-wrapper">' + r + '</div><div class="game-controls-label">' + e[a] + '</div></div><div class="game-controls-item game-controls-hint" data-action="hint">' + n + '<div class="game-controls-label">' + t[a] + '</div></div><div class="game-controls-item game-controls-undo" data-action="undo">' + s + '<div class="game-controls-label">' + l[a] + '</div></div><div class="game-controls-item game-controls-erase" data-action="erase">' + o + '<div class="game-controls-label">' + i[a] + "</div></div></div></div>") + "</nav></div>"
            }
        }
            , y = {
                controlsDisabled: !1,
                difficulty: "easy",
                defHTML: "&nbsp;",
                defSVG: "<svg></svg>",
                sudokuWrapper: document.querySelectorAll("#sudoku-wrapper"),
                sudokuLoader: null,
                difficultyWrapper: document.querySelectorAll(".difficulty-label-text"),
                urls: {},
                defaultUrls: {
                    easy: "/easy",
                    medium: "/medium",
                    hard: "/hard",
                    expert: "/expert"
                },
                settings: {
                    checkMistakes: !0,
                    newGameReload: !0
                },
                defaultSettings: {
                    checkMistakes: !0
                },
                isAuth: !1,
                lang: "",
                difficultyObj: {},
                langObj: {},
                cells: null,
                userGrid: [],
                solvedGrid: [],
                clearGrid: [],
                pencilValues: new Array(81),
                timePassed: 0,
                timePassedString: "",
                events: {},
                _scores: 0,
                init: function (e) {
                    var t;
                    y.difficulty = e && e.difficulty.slug || "easy",
                        y.difficultyObj = e && e.difficulty || null,
                        y.isAuth = e && e.isAuth || !1,
                        y.lang = e && e.lang.slug || "en",
                        y.langObj = e && e.lang || null,
                        y.urls = e && e.urls || y.defaultUrls,
                        y.settings.checkMistakes = JSON.parse(localStorage.getItem("checkMistakes")),
                        null == y.settings.checkMistakes && (y.settings.checkMistakes = y.defaultSettings.checkMistakes),
                        localStorage.setItem("checkMistakes", String(y.settings.checkMistakes)),
                        0 < y.sudokuWrapper.length && (r.create(y.sudokuWrapper, y.lang),
                            this.sudokuLoader = y.sudokuWrapper[0].querySelectorAll(".loading"),
                            n.setHandlers(),
                            n.keyboardControls(),
                            w.timer = document.querySelectorAll("#timer"),
                            y.difficultyWrapper[0].innerHTML = window.localizations[y.difficulty + "Text"][y.lang],
                            !y.settings.checkMistakes || (t = document.querySelectorAll("#checkMistakes")).length && (t[0].checked = !0),
                            (t = localStorage.getItem("difficulty")) && JSON.parse(t) === y.difficulty ? (y.loadGame(),
                                n.mouseControls(),
                                this.cells[0].click()) : y.start())
                },
                showLoader: function () {
                    this.sudokuLoader.length && this.sudokuLoader[0].addClass("loading__show")
                },
                hideLoader: function () {
                    this.sudokuLoader.length && this.sudokuLoader[0].removeClass("loading__show")
                },
                start: function () {
                    var r = this;
                    w.isPencilMode = !1,
                        w.activeCell = null,
                        w.activeRow = null,
                        w.activeCol = null,
                        w.userActions = [],
                        this.showLoader(),
                        a.request("get", "http://81.71.47.93/sudokuhit/api/level/" + this.difficulty + "/", null, null, function (e, t, i) {
                            var l, a;
                            t && ("SUCCESS" === (l = JSON.parse(t.responseText)).status ? (a = l.data.input,
                                t = l.data.output,
                                r.userGrid = a.split("").map(function (e) {
                                    return parseInt(e, 10)
                                }),
                                r.clearGrid = a.split("").map(function (e) {
                                    return parseInt(e, 10)
                                }),
                                r.solvedGrid = t.split("").map(function (e) {
                                    return parseInt(e, 10)
                                }),
                                r.initPencilGrid(),
                                w.createGameTable(),
                                y.cells = document.querySelectorAll(".game-cell"),
                                document.querySelectorAll(".winner__overlay")[0].fadeOut(100),
                                y.sudokuWrapper[0].removeClass("winner"),
                                w.timer[0].innerHTML = "00:00",
                                w.showGameNotify(),
                                n.mouseControls(),
                                r.cells[0].click(),
                                o.start()) : console.log("server response", l)),
                                r.hideLoader()
                        }, function (e, t, i) {
                            t && console.log("level error", t.responseText),
                                r.hideLoader()
                        }, r)
                },
                solved: function () {
                    this.deleteSavedGame(),
                        o.stop(),
                        w.end(),
                        this.saveResult()
                },
                saveGame: function () {
                    var e = localStorage.getItem("difficulty");
                    e && JSON.parse(e) === y.difficulty || this.saveStat(),
                        localStorage.setItem("difficulty", JSON.stringify(y.difficulty)),
                        localStorage.setItem("userGrid", JSON.stringify(y.userGrid)),
                        localStorage.setItem("clearGrid", JSON.stringify(y.clearGrid)),
                        localStorage.setItem("puzzleGrid", JSON.stringify(y.solvedGrid)),
                        localStorage.setItem("timePassed", JSON.stringify(y.timePassed)),
                        localStorage.setItem("pencilGrid", JSON.stringify(y.pencilValues))
                },
                deleteSavedGame: function () {
                    localStorage.removeItem("difficulty"),
                        localStorage.removeItem("userGrid"),
                        localStorage.removeItem("clearGrid"),
                        localStorage.removeItem("puzzleGrid"),
                        localStorage.removeItem("timePassed"),
                        localStorage.removeItem("pencilGrid")
                },
                loadGame: function () {
                    var e, t;
                    for (0 === y.difficultyWrapper.length && (y.difficultyWrapper = document.querySelectorAll(".difficulty-label-text")),
                        this.userGrid = JSON.parse(localStorage.getItem("userGrid")),
                        this.clearGrid = JSON.parse(localStorage.getItem("clearGrid")),
                        this.solvedGrid = JSON.parse(localStorage.getItem("puzzleGrid")),
                        this.timePassed = JSON.parse(localStorage.getItem("timePassed")),
                        this.pencilValues = JSON.parse(localStorage.getItem("pencilGrid")),
                        y.difficulty = JSON.parse(localStorage.getItem("difficulty")),
                        y.difficultyWrapper[0].innerHTML = window.localizations[y.difficulty + "Text"][y.lang],
                        w.createGameTable(),
                        o.stop(),
                        w.isPencilMode = !1,
                        w.userActions = [],
                        y.cells = document.querySelectorAll(".game-cell"),
                        t = 0; t < y.cells.length; t++)
                        y.cells[t].removeClass("game-value conflict cell-selected highlight-number highlight-table");
                    for (o.resume(),
                        t = 0; t < this.userGrid.length; t++) {
                        if (e = y.cells[t],
                            w.hasPencilValue(this.pencilValues[t])) {
                            var i = e.getAttribute("data-row")
                                , l = e.getAttribute("data-col");
                            w.cellsData.valueWrapper[i][l].innerHTML = this.defHTML,
                                w.setPencilValues(y.cells[t], this.pencilValues[t])
                        } else {
                            l = this.userGrid[t];
                            for (var a = e.querySelectorAll(".pencil-grid"), r = 0; r < a.length; r++)
                                a[r].remove();
                            e.innerHTML = e.innerHTML + w.createPencilGrid(),
                                w.setCellValue(y.cells[t], l),
                                0 < l && "number" == typeof l && e.addClass("game-value")
                        }
                        w.checkMistakes(e)
                    }
                    w.findConflicts()
                },
                initPencilGrid: function () {
                    for (var e, t = 0; t < 81; t++)
                        for (this.pencilValues[t] = new Array(9),
                            e = 0; e < 9; e++)
                            this.pencilValues[t][e] = 0
                },
                getValue: function (e) {
                    return this.userGrid[e]
                },
                setValue: function (e, t) {
                    this.userGrid[e] = t
                },
                incrementScores: function (e) {
                    this._scores += e
                },
                saveStat: function () {
                    var e;
                    y.isAuth && (e = {
                        started: !0
                    },
                        y.difficultyObj && (e.difficulty = y.difficultyObj.uuid),
                        a.request("POST", "http://81.71.47.93/sudokuhit/api/statistics/", e, null, null, null, this))
                },
                saveResult: function () {
                    var e;
                    y.isAuth && (e = {
                        scores: this._scores,
                        passed: this.timePassed,
                        start: o.getStartTime()
                    },
                        y.langObj && (e.lang = y.langObj.uuid),
                        y.difficultyObj && (e.difficulty = y.difficultyObj.uuid),
                        a.request("POST", "http://81.71.47.93/sudokuhit/api/results/", e, null, null, null, this))
                }
            }
            , w = {
                isPencilMode: !1,
                activeCell: null,
                activeRow: null,
                activeCol: null,
                timer: null,
                userActions: [],
                cellsData: {
                    valueWrapper: {},
                    siblings: {}
                },
                cellSelectedHandler: function () {
                    y.sudokuWrapper[0].querySelectorAll(".game__notify")[0].fadeOut(),
                        localStorage.setItem("gameNotify", "true"),
                        y.sudokuWrapper[0].removeEventListener("cellSelected", this.cellSelectedHandler)
                },
                showGameNotify: function () {
                    localStorage.getItem("gameNotify") || (y.sudokuWrapper[0].querySelectorAll(".game__notify")[0].fadeIn(),
                        y.events.cellSelected || (y.events.cellSelected = new CustomEvent("cellSelected")),
                        y.sudokuWrapper[0].addEventListener("cellSelected", this.cellSelectedHandler))
                },
                checkMistakes: function (e) {
                    var t, i;
                    y.settings.checkMistakes && (t = e.getAttribute("data-index"),
                        i = Number(y.userGrid[t]),
                        e.hasClass("game-value") || 0 === i || (i !== y.solvedGrid[t] ? e.addClass("mistake") : e.removeClass("mistake")))
                },
                createGameTable: function () {
                    var e, t, i, l, a, r, n, s, o, c = 0, d = document.querySelectorAll("#game")[0];
                    for (d.innerHTML = "",
                        (e = document.createElement("table")).addClass("game-table"),
                        t = document.createElement("tbody"),
                        i = 0; i < 9; i++) {
                        for ((a = document.createElement("tr")).addClass("game-row"),
                            w.cellsData.valueWrapper[i] = {},
                            l = 0; l < 9; l++)
                            w.cellsData.siblings[c] = {},
                                (r = document.createElement("td")).addClass("game-cell"),
                                o = 3 * Math.floor(i / 3) + Math.floor(l / 3),
                                r.setAttribute("data-row", i),
                                r.setAttribute("data-col", l),
                                r.setAttribute("data-index", c),
                                r.setAttribute("data-square", o),
                                (n = document.createElement("div")).addClass("cell-value"),
                                0 < (s = y.userGrid[c]) && "number" == typeof s ? (n.innerHTML = window.svgList.getSvg(s),
                                    r.addClass("game-value")) : n.innerHTML = y.defHTML,
                                r.appendChild(n),
                                w.cellsData.valueWrapper[i][l] = n,
                                r.innerHTML = r.innerHTML + w.createPencilGrid(),
                                a.appendChild(r),
                                c++;
                        t.appendChild(a)
                    }
                    e.appendChild(t),
                        d.appendChild(e)
                },
                end: function () {
                    document.querySelectorAll(".winner__overlay")[0].fadeIn(300),
                        document.querySelectorAll(".winner__time")[0].innerHTML = y.timePassedString,
                        y.sudokuWrapper[0].addClass("winner")
                },
                updateTimer: function (e) {
                    this.timer[0].innerText = e
                },
                getDigitValueByKeyCode: function (e) {
                    return 96 <= e && e <= 105 && (e -= 48),
                        48 <= e && e <= 57 && String.fromCharCode(e)
                },
                updateCellValue: function (cell, value) {
                    cell.hasClass("game-value") || (this.saveCellState(cell),
                        w.isPencilMode ? 0 < value ? (this.updatePencilCell(cell, value),
                            this.setCellValue(cell, 0)) : this.clearPencilGrid(cell) : (this.clearPencilGrid(cell),
                                this.setCellValue(cell, value),
                                this.checkPencilConflicts(cell)),
                        this.highlightNumbers(cell),
                        this.findConflicts(),
                        this.checkMistakes(cell),
                        this.animateFilledGrid(cell),
                        y.incrementScores(1),
                        y.saveGame())
                },
                setCellValue: function (e, t) {
                    var i = e.getAttribute("data-index")
                        , l = e.getAttribute("data-row")
                        , a = e.getAttribute("data-col");
                    y.setValue(i, t);
                    a = w.cellsData.valueWrapper[l][a];
                    a.innerHTML = 0 === t || "0" === t ? y.defHTML : window.svgList.getSvg(t),
                        e.querySelectorAll(".cell-value")[0].innerHTML = a.innerHTML
                },
                updatePencilCell: function (cell, value) {
                    var i = cell.getAttribute("data-index")
                        , l = y.pencilValues[i][value - 1]
                        , cell = cell.querySelectorAll(".pencil-grid-cell-" + value)[0];
                    l ? (y.pencilValues[i][value - 1] = 0,
                        cell.removeClass("hasValue"),
                        cell.innerHTML = y.defSVG) : (y.pencilValues[i][value - 1] = Number(value),
                            cell.addClass("hasValue"),
                            cell.innerHTML = window.svgList.getSvg(value))
                },
                setPencilValues: function (e, t) {
                    for (var i, l = e.getAttribute("data-index"), a = 0; a < 9; a++) {
                        i = t[a],
                            y.pencilValues[l][a] = i;
                        var r = e.querySelectorAll(".pencil-grid-cell-" + (a + 1))[0];
                        r.innerHTML = 0 < i ? window.svgList.getSvg(i) : y.defSVG
                    }
                },
                checkPencilConflicts: function (e, t) {
                    for (var i = parseInt(y.getValue(e.getAttribute("data-index"))), l = w.getSiblings(e, "row"), a = w.getSiblings(e, "col"), r = w.getSiblings(e, "square"), n = 0; n < l.length; n++)
                        w.clearPencilConflicts(l[n], i, t);
                    for (n = 0; n < a.length; n++)
                        w.clearPencilConflicts(a[n], i, t);
                    for (n = 0; n < r.length; n++)
                        w.clearPencilConflicts(r[n], i, t)
                },
                clearPencilConflicts: function (e, t, i) {
                    y.pencilValues[e.getAttribute("data-index")][t - 1] === t && (i || w.saveCellState(e, !0),
                        w.updatePencilCell(e, t))
                },
                hasPencilValue: function (e) {
                    for (var t = 0; t < 9; t++)
                        if (0 < e[t])
                            return !0;
                    return !1
                },
                saveCellState: function (e, t) {
                    var i, l = {}, a = e.getAttribute("data-index");
                    for (l.cell = e,
                        l.cellValue = y.getValue(a),
                        l.cellPencilValues = [],
                        l.isChained = t,
                        i = 0; i < 9; i++)
                        l.cellPencilValues[i] = y.pencilValues[a][i];
                    this.userActions.push(l)
                },
                undoUserAction: function () {
                    var e, t, i, l = 0 < this.userActions.length ? this.userActions.pop() : null;
                    l && (e = l.cell,
                        t = l.cellValue,
                        i = l.cellPencilValues,
                        l = l.isChained,
                        e.hasClass("game-value") ? this.undoUserAction() : (w.clearPencilGrid(e),
                            w.setCellValue(e, 0),
                            this.hasPencilValue(i) ? this.setPencilValues(e, i) : (this.clearPencilGrid(e),
                                this.setCellValue(e, t)),
                            l ? this.undoUserAction() : (this.findConflicts(),
                                this.checkMistakes(e)),
                            y.saveGame()))
                },
                createPencilGrid: function () {
                    return '<div class="pencil-grid"><div class="pencil-grid-cell pencil-grid-cell-1"><svg></svg></div><div class="pencil-grid-cell pencil-grid-cell-2"><svg></svg></div><div class="pencil-grid-cell pencil-grid-cell-3"><svg></svg></div><div class="pencil-grid-cell pencil-grid-cell-4"><svg></svg></div><div class="pencil-grid-cell pencil-grid-cell-5"><svg></svg></div><div class="pencil-grid-cell pencil-grid-cell-6"><svg></svg></div><div class="pencil-grid-cell pencil-grid-cell-7"><svg></svg></div><div class="pencil-grid-cell pencil-grid-cell-8"><svg></svg></div><div class="pencil-grid-cell pencil-grid-cell-9"><svg></svg></div></div>'
                },
                clearPencilGrid: function (e) {
                    for (var t = e.getAttribute("data-index"), i = e.querySelectorAll(".pencil-grid-cell"), l = 0; l < i.length; l++)
                        i[l].removeClass("hasValue"),
                            i[l].innerHTML = y.defSVG;
                    for (var l = 0; l < 9; l++)
                        y.pencilValues[t][l] = 0
                },
                getCellPosition: function (e) {
                    return [parseInt(e.getAttribute("data-row")), parseInt(e.getAttribute("data-col"))]
                },
                getCell: function (e, t) {
                    return document.querySelectorAll(".game-row")[e].querySelectorAll(".game-cell")[t]
                },
                moveSelect: function (e) {
                    var t, i, l, a = this.activeCell;
                    if (a)
                        switch (a.removeClass("cell-selected"),
                        t = (l = this.getCellPosition(a))[0],
                        i = l[1],
                        e) {
                            case "up":
                                0 < t && --t;
                                break;
                            case "down":
                                t < 8 && (t += 1);
                                break;
                            case "right":
                                i < 8 && (i += 1);
                                break;
                            case "left":
                                0 < i && --i
                        }
                    else
                        i = t = 0;
                    (a = this.getCell(t, i)).addClass("cell-selected"),
                        y.events.cellSelected && y.sudokuWrapper[0].dispatchEvent(y.events.cellSelected),
                        this.activeCell = a,
                        this.activeRow = t,
                        this.activeCol = i,
                        this.highlightNumbers(a),
                        this.highlightLines(a)
                },
                findConflicts: function () {
                    for (var e, t, i, l = document.querySelectorAll(".game-row"), a = document.querySelectorAll(".conflict"), r = 0; r < a.length; r++)
                        a[r].removeClass("conflict");
                    for (t = 0; t < 9; t++)
                        for (e = l[t].querySelectorAll(".game-cell"),
                            i = 0; i < 9; i++)
                            w.findConflictsForCell(e[i])
                },
                findConflictsForCell: function (e) {
                    var t, i = e.getAttribute("data-index"), l = parseInt(y.getValue(i)), a = w.getSiblings(e, "row"), r = w.getSiblings(e, "col"), n = w.getSiblings(e, "square");
                    if (0 !== l) {
                        for (var s = 0; s < a.length; s++)
                            t = e.getAttribute("data-index"),
                                w.conflictChecker(a[s], l, t);
                        for (s = 0; s < r.length; s++)
                            t = e.getAttribute("data-index"),
                                w.conflictChecker(r[s], l, t);
                        for (s = 0; s < n.length; s++)
                            t = e.getAttribute("data-index"),
                                w.conflictChecker(n[s], l, t)
                    }
                },
                conflictChecker: function (e, t, i) {
                    var l = e
                        , e = l.getAttribute("data-index");
                    parseInt(y.getValue(e)) === t && l.getAttribute("data-index") !== i && l.addClass("conflict")
                },
                isSolved: function () {
                    for (var e = 0; e < 81; e++)
                        if (parseInt(y.userGrid[e]) !== Math.abs(y.solvedGrid[e]))
                            return !1;
                    return !0
                },
                togglePencilMode: function () {
                    w.isPencilMode = !w.isPencilMode,
                        w.isPencilMode ? y.sudokuWrapper[0].addClass("pencil-mode") : y.sudokuWrapper[0].removeClass("pencil-mode")
                },
                highlightLines: function (e) {
                    for (var t = this.getCellPosition(e), e = t[0], i = t[1], l = document.querySelectorAll(".game-row"), a = 0; a < y.cells.length; a++)
                        y.cells[a].removeClass("highlight-table");
                    for (var r = l[e].querySelectorAll(".game-cell"), a = 0; a < l.length; a++)
                        r[a].addClass("highlight-table");
                    for (a = 0; a < l.length; a++)
                        l[a].querySelectorAll(".game-cell")[i].addClass("highlight-table");
                    for (var n = e - e % 3, s = i - i % 3, o = 3 + n, c = 3 + s, a = 0; a < l.length; a++)
                        if (n <= a && a < o)
                            for (var r = l[a].querySelectorAll(".game-cell"), d = 0; d < r.length; d++)
                                s <= d && d < c && r[d].addClass("highlight-table")
                },
                highlightNumbers: function (e) {
                    var t = e.getAttribute("data-row")
                        , i = e.getAttribute("data-col")
                        , e = e.getAttribute("data-index")
                        , l = Number(y.userGrid[e])
                        , a = w.cellsData.valueWrapper[t][i].innerHTML;
                    if (a !== y.defHTML && 0 !== l)
                        for (var r = 0; r < y.cells.length; r++) {
                            var n = y.cells[r].getAttribute("data-row")
                                , s = y.cells[r].getAttribute("data-col")
                                , o = y.cells[r].getAttribute("data-index")
                                , o = Number(y.userGrid[o]);
                            w.cellsData.valueWrapper[n][s].innerHTML === a && o === l ? y.cells[r].addClass("highlight-number") : y.cells[r].removeClass("highlight-number")
                        }
                    else
                        for (r = 0; r < y.cells.length; r++)
                            y.cells[r].removeClass("highlight-number")
                },
                activeCellHint: function () {
                    var e, t = this.activeCell;
                    t && !t.hasClass("game-value") && (e = t.getAttribute("data-index"),
                        e = parseInt(y.solvedGrid[e]),
                        this.setCellValue(t, e),
                        this.clearPencilGrid(t),
                        this.highlightNumbers(t),
                        this.checkPencilConflicts(t, !0),
                        this.findConflicts(),
                        this.checkMistakes(t),
                        t.addClass("game-value"),
                        this.animateFilledGrid(t),
                        y.saveGame())
                },
                clearCell: function (e) {
                    e = e || w.activeCell;
                    e && !e.hasClass("game-value") && (this.saveCellState(e),
                        e && (w.clearPencilGrid(e),
                            w.setCellValue(e, 0)),
                        this.findConflicts(),
                        y.saveGame())
                },
                restartPuzzle: function () {
                    o.stop(),
                        y.pencilGrid = new Array(81),
                        y.initPencilGrid();
                    for (var e = 0; e < y.userGrid.length; e++)
                        y.userGrid[e] = y.clearGrid[e];
                    if (localStorage.setItem("userGrid", JSON.stringify(y.userGrid)),
                        y.hiddenNumbers = [],
                        y.timePassed = 0,
                        y.controlsDisabled = !1,
                        w.createGameTable(),
                        y.cells = document.querySelectorAll(".game-cell"),
                        w.isPencilMode = !1,
                        w.activeCell = null,
                        w.activeRow = null,
                        w.activeCol = null,
                        y.userActions = [],
                        y.settings.newGameReload)
                        y.saveGame(),
                            window.location.reload();
                    else {
                        y.sudokuWrapper[0].removeClass("winner paused"),
                            document.querySelectorAll(".winner__overlay")[0].fadeOut(100);
                        for (var t = document.querySelectorAll(".numpad-item"), e = 0; e < t.length; e++)
                            t[e].removeClass("numpad-item-hidden");
                        n.mouseControls(),
                            o.resume()
                    }
                },
                clearPuzzle: function () {
                    this.userActions = [];
                    for (var e = 0; e < y.cells.length; e++)
                        y.cells[e].removeClass("conflict").removeClass("highlight-number");
                    for (var t = document.querySelectorAll(".game-cell:not(.game-value)"), e = 0; e < t.length; e++)
                        w.setCellValue(t[e], 0),
                            w.clearPencilGrid(t[e])
                },
                animateFilledCell: function (e, t, i) {
                    if (e)
                        if (t++,
                            e.classList.remove("filled-animation"),
                            e.offsetWidth,
                            i) {
                            for (var l = 0; l < y.cells.length; l++)
                                y.cells[l].removeClass("conflict mistake cell-selected highlight-number highlight-table");
                            e.classList.add("filled-animation-long"),
                                e.style.animationDelay = .1 * t + "s"
                        } else
                            e.classList.add("filled-animation"),
                                e.style.animationDelay = .05 * t + "s"
                },
                animateFilledGrid: function (e) {
                    var t = e.getAttribute("data-row")
                        , i = e.getAttribute("data-col")
                        , l = w.getSiblings(e, "row")
                        , a = w.getSiblings(e, "col")
                        , r = w.getSiblings(e, "square")
                        , n = i
                        , s = t
                        , o = i
                        , c = t;
                    if (this.isSolved()) {
                        y.controlsDisabled = !0,
                            this.animateFilledCell(e, 0, !0);
                        for (var d = 1; d < 9; d++) {
                            for (var u = this.getRowCells(--s).filter(function (e) {
                                return e.getAttribute("data-col") >= n && e.getAttribute("data-col") <= o
                            }), m = this.getRowCells(++c).filter(function (e) {
                                return e.getAttribute("data-col") >= n && e.getAttribute("data-col") <= o
                            }), p = this.getColCells(--n).filter(function (e) {
                                return e.getAttribute("data-row") >= s && e.getAttribute("data-row") <= c
                            }), f = this.getColCells(++o).filter(function (e) {
                                return e.getAttribute("data-row") >= s && e.getAttribute("data-row") <= c
                            }), h = 0; h < u.length; h++)
                                w.animateFilledCell(u[h], d, !0);
                            for (h = 0; h < m.length; h++)
                                w.animateFilledCell(m[h], d, !0);
                            for (h = 0; h < p.length; h++)
                                w.animateFilledCell(p[h], d, !0);
                            for (h = 0; h < f.length; h++)
                                w.animateFilledCell(f[h], d, !0)
                        }
                        setTimeout(function () {
                            y.solved()
                        }, 1e3)
                    } else {
                        if (this.isFilled(l)) {
                            this.animateFilledCell(e[0], 0);
                            for (var g = 0; g < 8; g++)
                                this.animateFilledCell(l[--n], g + 1),
                                    this.animateFilledCell(l[++o], g + 1)
                        }
                        if (this.isFilled(a)) {
                            this.animateFilledCell(e[0], 0);
                            for (var v = 0; v < 8; v++)
                                this.animateFilledCell(a[--s], v + 1),
                                    this.animateFilledCell(a[++c], v + 1)
                        }
                        if (this.isFilled(r))
                            for (h = 0; h < r.length; h++)
                                w.animateFilledCell(r[h], h)
                    }
                },
                isFilled: function (e) {
                    for (var t = !0, i = 0; i < e.length; i++) {
                        var l = e[i]
                            , a = l.getAttribute("data-index");
                        (l.hasClass("conflict") || y.settings.checkMistakes && l.hasClass("mistake") || 0 === y.getValue(a)) && (t = !1)
                    }
                    return t
                },
                getSiblings: function (e, t) {
                    var i = e.getAttribute("data-index")
                        , l = e.getAttribute("data-" + t)
                        , a = w.cellsData.siblings[i].hasOwnProperty("data-" + t + "-cells") ? w.cellsData.siblings[i]["data-" + t + "-cells"] : null
                        , e = Array.from(y.cells);
                    return a || (a = e.filter(function (e) {
                        return e.getAttribute("data-" + t) === l
                    }),
                        w.cellsData.siblings[i]["data-" + t + "-cells"] = a),
                        a
                },
                getRowCells: function (t) {
                    return Array.from(y.cells).filter(function (e) {
                        return e.getAttribute("data-row") === t
                    })
                },
                getColCells: function (t) {
                    return Array.from(y.cells).filter(function (e) {
                        return e.getAttribute("data-col") === t
                    })
                },
                getSquareCells: function (t) {
                    return Array.from(y.cells).filter(function (e) {
                        return e.getAttribute("data-square") === t
                    })
                }
            }
            , n = {
                closeNewGameMenu: function () {
                    for (var e = document.querySelectorAll(".new-game-menu"), t = 0; t < e.length; t++)
                        e[t].fadeOut(200)
                },
                closeDifficultyMenu: function () {
                    document.querySelectorAll(".difficulty-label")[0].removeClass("difficulty-menu-open"),
                        document.querySelectorAll(".difficulty-menu")[0].fadeOut(200)
                },
                bodyHandler: function () {
                    var e = this;
                    document.querySelector("body").addEventListener("click", function () {
                        e.closeNewGameMenu(),
                            e.closeDifficultyMenu()
                    })
                },
                clickGameHandler: function () {
                    var e, t;
                    y.controlsDisabled || (w.activeCell && w.activeCell.removeClass("cell-selected"),
                        (e = this).addClass("cell-selected"),
                        t = w.getCellPosition(e),
                        w.activeRow = t[0],
                        w.activeCol = t[1],
                        w.activeCell = e,
                        y.events.cellSelected && y.sudokuWrapper[0].dispatchEvent(y.events.cellSelected),
                        w.highlightNumbers(e),
                        w.highlightLines(e))
                },
                mouseControls: function () {
                    for (var e = 0; e < y.cells.length; e++)
                        y.cells[e].removeEventListener("click", this.clickGameHandler);
                    for (e = 0; e < y.cells.length; e++)
                        y.cells[e].addEventListener("click", this.clickGameHandler)
                },
                keyboardControls: function () {
                    document.addEventListener("keydown", function (e) {
                        if (!y.controlsDisabled) {
                            var t, i, l = e.keyCode || e.which, a = 37, r = 38, n = 39, s = 40;
                            if (y.sudokuWrapper[0].hasClass("paused"))
                                return e.stopPropagation(),
                                    y.sudokuWrapper[0].removeClass("paused"),
                                    o.resume(),
                                    !1;
                            if (-1 === [37, 38, 39, 40].indexOf(l))
                                8 !== l && 46 !== l ? (i = w.activeCell,
                                    (t = w.getDigitValueByKeyCode(l)) && i && w.updateCellValue(i, t)) : w.clearCell();
                            else
                                switch (e.preventDefault(),
                                l) {
                                    case a:
                                        w.moveSelect("left");
                                        break;
                                    case r:
                                        w.moveSelect("up");
                                        break;
                                    case n:
                                        w.moveSelect("right");
                                        break;
                                    case s:
                                        w.moveSelect("down")
                                }
                        }
                    })
                },
                newGameButtonHandler: function () {
                    var i = this;
                    0 === y.difficultyWrapper.length && (y.difficultyWrapper = document.querySelectorAll(".difficulty-label-text"));
                    var l, e = document.querySelectorAll(".new-game-button");
                    if (e.length)
                        for (var t = 0; t < e.length; t++)
                            e[t].addEventListener("click", function (e) {
                                e.stopPropagation(),
                                    i.closeDifficultyMenu(),
                                    l = document.querySelectorAll(".new-game-menu");
                                for (var t = 0; t < l.length; t++)
                                    l[t].fadeToggle(200)
                            });
                    for (var a = document.querySelectorAll(".new-game-menu__list a"), t = 0; t < a.length; t++)
                        a[t].addEventListener("click", function (e) {
                            e.stopPropagation(),
                                l = document.querySelectorAll(".new-game-menu");
                            for (var t = 0; t < l.length; t++)
                                l[t].fadeToggle(200)
                        })
                },
                difficultyButtonHandler: function () {
                    var t = this;
                    document.querySelectorAll(".difficulty-menu-select")[0].addEventListener("change", function () {
                        window.location.href = this.value
                    }),
                        document.querySelectorAll(".difficulty-label")[0].addEventListener("click", function (e) {
                            e.stopPropagation(),
                                t.closeNewGameMenu(),
                                document.querySelectorAll(".difficulty-menu")[0].fadeToggle(200),
                                this.hasClass("difficulty-menu-open") ? this.removeClass("difficulty-menu-open") : this.addClass("difficulty-menu-open")
                        })
                },
                numpadClickHandler: function () {
                    for (var e = document.querySelectorAll(".numpad-item"), t = 0; t < e.length; t++)
                        e[t].addEventListener("click", function (e) {
                            if (!y.controlsDisabled) {
                                var dataValue = String(this.getAttribute("data-value"))
                                    , activeCell = w.activeCell;
                                if (y.sudokuWrapper[0].hasClass("paused"))
                                    return e.stopPropagation(),
                                        y.sudokuWrapper[0].removeClass("paused"),
                                        o.resume(),
                                        !1;
                                activeCell && w.updateCellValue(activeCell, dataValue)
                            }
                        })
                },
                gameControlsClickHandler: function () {
                    for (var e = document.querySelectorAll(".game-controls-item"), t = 0; t < e.length; t++)
                        e[t].addEventListener("click", function (e) {
                            if (!y.controlsDisabled) {
                                if (y.sudokuWrapper[0].hasClass("paused"))
                                    return e.stopPropagation(),
                                        y.sudokuWrapper[0].removeClass("paused"),
                                        o.resume(),
                                        !1;
                                switch (this.getAttribute("data-action")) {
                                    case "pencil":
                                        w.togglePencilMode();
                                        break;
                                    case "hint":
                                        y.incrementScores(30),
                                            w.activeCellHint();
                                        break;
                                    case "undo":
                                        y.incrementScores(3),
                                            w.undoUserAction();
                                        break;
                                    case "erase":
                                        y.incrementScores(3),
                                            w.clearCell()
                                }
                            }
                        })
                },
                gamePauseButtonHandler: function () {
                    for (var e = document.querySelectorAll(".timer-pause"), t = 0; t < e.length; t++)
                        e[t].addEventListener("click", function () {
                            y.controlsDisabled || y.sudokuWrapper[0].hasClass("paused") ? (y.sudokuWrapper[0].removeClass("paused"),
                                o.resume()) : (y.sudokuWrapper[0].addClass("paused"),
                                    o.stop())
                        });
                    document.querySelectorAll(".pause__overlay")[0].addEventListener("click", function () {
                        y.sudokuWrapper[0].removeClass("paused"),
                            o.resume()
                    })
                },
                playAgainButtonHandler: function () {
                    document.querySelectorAll(".button-play")[0].addEventListener("click", function () {
                        y.deleteSavedGame(),
                            y.settings.newGameReload ? window.location.reload() : (y.start(),
                                y.controlsDisabled = !1)
                    })
                },
                newGameMenuRestartButtonHandler: function () {
                    for (var e = document.querySelectorAll(".new-game-menu-restart"), t = 0; t < e.length; t++)
                        e[t].addEventListener("click", function (e) {
                            e.preventDefault(),
                                w.restartPuzzle()
                        })
                },
                newGameMenuNewGameButtonHandler: function () {
                    for (var e = document.querySelectorAll(".new-game-menu-new"), t = 0; t < e.length; t++)
                        e[t].addEventListener("click", function (e) {
                            e.preventDefault(),
                                o.stop(),
                                y.sudokuWrapper[0].removeClass("paused pencil-mode"),
                                y.deleteSavedGame(),
                                y.settings.newGameReload ? window.location.reload() : (y.start(),
                                    y.controlsDisabled = !1)
                        })
                },
                gameSettingsHandler: function () {
                    document.querySelectorAll("#checkMistakes")[0].addEventListener("change", function () {
                        if (y.settings.checkMistakes = this.checked,
                            localStorage.setItem("checkMistakes", y.settings.checkMistakes),
                            y.settings.checkMistakes)
                            for (var e = 0; e < y.cells.length; e++)
                                w.checkMistakes(y.cells[e]);
                        else
                            for (var t = document.querySelectorAll(".mistake"), e = 0; e < t.length; e++)
                                t[e].removeClass("mistake")
                    })
                },
                setHandlers: function () {
                    this.bodyHandler(),
                        this.newGameButtonHandler(),
                        this.difficultyButtonHandler(),
                        this.newGameMenuRestartButtonHandler(),
                        this.newGameMenuNewGameButtonHandler(),
                        this.numpadClickHandler(),
                        this.gameControlsClickHandler(),
                        this.gamePauseButtonHandler(),
                        this.playAgainButtonHandler(),
                        this.gameSettingsHandler()
                }
            }
            , o = {
                startTime: null,
                id: null,
                timeToString: function (e) {
                    var t = e / 1e3
                        , i = Math.floor(t % 3600 / 60)
                        , e = Math.round(t % 3600 % 60)
                        , t = "";
                    return 60 === e && (i++,
                        e = 0),
                        (t += i < 10 ? "0" + i + ":" : i + ":") + (e < 10 ? "0" + e : e)
                },
                update: function () {
                    var e = (new Date).getTime() - o.startTime
                        , t = o.timeToString(e);
                    w.updateTimer(t),
                        y.timePassed = e,
                        y.timePassedString = t
                },
                resume: function () {
                    this.startTime = (new Date).getTime() - y.timePassed,
                        this.update(),
                        this.id = setInterval(this.update, 1e3)
                },
                start: function () {
                    this.stop(),
                        this.startTime = (new Date).getTime(),
                        this.id = setInterval(this.update, 1e3)
                },
                stop: function () {
                    this.id && clearInterval(this.id)
                },
                getStartTime: function () {
                    return this.startTime
                }
            }
            , s = i(3)
            , t = i.n(s)
            , c = (i(0),
                i(4));
        var d, u, m, p, g, v, b, q, _, C, S, A, x, z, E, k, L, M, T, F, H, P, D, N, G, I, B, V, O, j, U, s = i(2), R = i.n(s), W = "cookie_policy";
        function J() {
            window.innerWidth > window.innerHeight ? (x[0].removeClass("portrait"),
                x[0].addClass("landscape"),
                !1) : (x[0].removeClass("landscape"),
                    x[0].addClass("portrait"),
                    !0)
        }
        window.localizations = l,
            window.svgList = f,
            window.Sudoku = function (e, t, i, l) {
                y.init({
                    lang: e,
                    difficulty: t,
                    urls: i,
                    isAuth: l
                })
            }
            ,
            t()({
                attributeName: "href",
                polyfill: !0
            }),
            d = document.querySelectorAll(".header__langs"),
            document.querySelectorAll(".header__langs-menu").length && window.addEventListener("click", function (e) {
                e = e.target.closest(".header__langs");
                e ? e.classList.contains("header__langs-open") ? e.classList.remove("header__langs-open") : e.classList.add("header__langs-open") : d[0].classList.remove("header__langs-open")
            }),
            u = document.querySelectorAll(".header__user-panel"),
            m = document.querySelectorAll(".header__burger-menu"),
            u.length && (u[0].addEventListener("mouseover", function (e) {
                var t = document.querySelectorAll(".header__user-panel__menu");
                t.length && m.length && !m[0].hasClass("header__burger-menu-open") && (t[0].style.display = "block")
            }),
                u[0].addEventListener("mouseout", function (e) {
                    var t = document.querySelectorAll(".header__user-panel__menu");
                    t.length && m.length && !m[0].hasClass("header__burger-menu-open") && (t[0].style.display = "none")
                })),
            p = document.querySelectorAll(".header__burger-btn"),
            g = document.querySelectorAll("body"),
            v = document.querySelectorAll(".header__burger-menu"),
            p.length && v.length && p[0].addEventListener("click", function (e) {
                p[0].hasClass("header__burger-btn-active") ? p[0].removeClass("header__burger-btn-active") : p[0].addClass("header__burger-btn-active"),
                    g[0].hasClass("body__burger-menu-open") ? g[0].removeClass("body__burger-menu-open") : g[0].addClass("body__burger-menu-open"),
                    v[0].hasClass("header__burger-menu-open") ? v[0].removeClass("header__burger-menu-open") : v[0].addClass("header__burger-menu-open")
            }),
            b = document.querySelectorAll(".b-profile-info__status--edit"),
            q = document.querySelectorAll(".b-profile-info__form"),
            _ = document.querySelectorAll(".b-profile-info__btn-submit"),
            C = document.querySelectorAll(".b-profile-info__btn-cancel"),
            S = document.querySelectorAll(".b-profile-info__form .form-control"),
            A = document.querySelectorAll(".b-profile-info__status-val"),
            b.length && (b[0].addEventListener("click", function (e) {
                q[0].hasClass("d-none") && q[0].removeClass("d-none")
            }),
                C[0].addEventListener("click", function (e) {
                    q[0].hasClass("d-none") || q[0].addClass("d-none")
                }),
                _[0].addEventListener("click", function (e) {
                    var l = {
                        text: S[0].value
                    };
                    a.request("POST", "http://81.71.47.93/sudokuhit/api/change-status/", l, null, function (e, t, i) {
                        t && ("SUCCESS" === (t = JSON.parse(t.responseText)).status ? (A[0].innerText = l.text,
                            q[0].hasClass("d-none") || q[0].addClass("d-none")) : "ERROR" === t.status ? (S[0].value = "",
                                q[0].hasClass("d-none") || q[0].addClass("d-none")) : console.log("server answer", t))
                    }, function (e, t, i) {
                        console.log("api error"),
                            t && console.log(t.responseText)
                    }, this)
                })),
            x = document.querySelectorAll("body"),
            J(),
            window.addEventListener("resize", function () {
                setTimeout(function () {
                    J()
                }, 50)
            }),
            z = window.localizations,
            E = window.lang,
            G = {},
            I = {},
            B = document.querySelectorAll(".b-images__js"),
            (V = B && B.length ? B[0] : null) && B.length && (k = V.closest("form"),
                L = V.querySelectorAll(".b-images__errors")[0],
                M = parseInt(V.getAttribute("data-max-count")),
                T = V.getAttribute("data-max-weight"),
                F = V.getAttribute("data-session"),
                H = k.getAttribute("data-images-path"),
                P = k.getAttribute("data-images-action"),
                B = k.getAttribute("data-images-type"),
                D = k.getAttribute("data-images-base"),
                N = {
                    url: H + "?type=" + B + "&hash=" + F,
                    block: {},
                    type: {
                        ajax: V.querySelectorAll(".b-images")[0]
                    },
                    uploader: 0,
                    active: {},
                    classes: {
                        active: "b-images__item-active",
                        first: "b-images__item-first",
                        preview: "b-images__item-preview"
                    }
                },
                I.errors = {
                    clear: function () {
                        L.innerText = ""
                    },
                    write: function (e) {
                        L.innerText = e
                    }
                },
                I.controlPlus = function (e) {
                    var t = 0;
                    if (1 === M) {
                        for (var i = e.querySelectorAll(".b-images__item"), l = 0; l < i.length; l++)
                            i[l].hasClass("b-images__item--action") || t++;
                        if (1 <= t)
                            for (var a = e.querySelectorAll(".b-images__item--action"), l = 0; l < a.length; l++)
                                a[l].addClass("d-none");
                        else
                            for (a = e.querySelectorAll(".b-images__item--action"),
                                l = 0; l < a.length; l++)
                                a[l].removeClass("d-none")
                    }
                }
                ,
                I.clearSlot = function (e, t, i) {
                    for (var l = t.querySelectorAll(".b-images__item-loader"), a = 0; a < l.length; a++)
                        l[a].addClass("d-none");
                    i.uploader.decrementUploaded(),
                        delete i.active[e]
                }
                ,
                I.imageRemove = function (e, t) {
                    var i = e.active[t].slot
                        , l = e.active[t].data;
                    e.active.hasOwnProperty(t) && !1 === l || i.remove(),
                        I.clearSlot(t, i, e)
                }
                ,
                I.imgRemoveBlock = function (e) {
                    var t, i;
                    e && (t = parseInt(e.querySelectorAll("input[type=hidden]")[0].value),
                        !e.hasClass("b-images__item-ex") || (i = k.querySelectorAll(".b-images__delete")[0]) && i.append('<input type="hidden" name="form[photos_del][]" value="' + t + '" />'),
                        e.remove(),
                        N.uploader.decrementUploaded(),
                        I.controlPlus(k))
                }
                ,
                I._imgProgress = function (e, t, i, l) {
                    var a, r;
                    switch (i) {
                        case "start":
                            var n = e.type.ajax.querySelectorAll(".b-images__item");
                            if (n.length) {
                                var n = (a = (r = n[n.length - 1]).cloneNode(!0)).querySelector(".b-images__item-upload")
                                    , s = a.querySelector(".b-images__item-del");
                                n && (n.setAttribute("class", "b-images__item-upload"),
                                    (c = n.querySelector("input")) && c.remove(),
                                    (c = n.querySelector(".b-images__item-loader")) && c.removeClass("d-none"),
                                    e.uploader._createUploadButton(n),
                                    I.deleteImageHandler(s));
                                var o, c, n = e.type.ajax.querySelector(".b-images__items");
                                if (n && n.appendChild(a),
                                    !r)
                                    return !1;
                                !1 === l && ((o = r.querySelector(".b-images__item-upload")) && o.addClass("d-none"),
                                    (c = r.querySelector(".b-images__item-loader")) && c.removeClass("d-none")),
                                    e.active[t] = {
                                        slot: r,
                                        data: !1
                                    }
                            }
                            break;
                        case "preview":
                            e.active.hasOwnProperty(t) && ((r = e.active[t].slot).removeClass("b-images__item--action"),
                                (o = r.querySelector(".b-images__item-preview")) && ((s = o.querySelector(".b-images__item-del")) && s.setAttribute("data-id", t),
                                    (s = o.querySelector(".b-images__item-img")) && (s.setAttribute("src", l.fileSmall),
                                        s.setAttribute("data-id", t)),
                                    (s = o.querySelector(".b-images__item-file")) && (s.value = l.file,
                                        s.setAttribute("name", D + "[" + t + "][src]"))),
                                l.id = t,
                                e.active[t].data = l,
                                (c = r.querySelector(".b-images__item-loader")) && c.addClass("d-none"),
                                o && o.removeClass("d-none"));
                            break;
                        case "remove":
                            I.imageRemove(e, t)
                    }
                    return I.controlPlus(e.block),
                        !0
                }
                ,
                I.deleteImageHandler = function (e) {
                    e.addEventListener("click", function (e) {
                        e = e.target.closest(".b-images__item-del");
                        console.log(e),
                            I.errors.clear(),
                            e && ("add" === P ? I.imageRemove(N, e.getAttribute("data-id")) : I.imgRemoveBlock(e.closest(".b-images__item")),
                                I.controlPlus(e))
                    })
                }
                ,
                I.init = function () {
                    G.apply(k)
                }
                ,
                G.init = function () {
                    I.init()
                }
                ,
                G.apply = function (e) {
                    if (N.block = e,
                        N.uploader = new c.a.FileUploaderBasic({
                            button: null,
                            action: N.url,
                            limit: M,
                            sizeLimit: T,
                            uploaded: 0,
                            multiple: !0,
                            allowedExtensions: ["jpeg", "jpg", "png", "gif"],
                            onSubmit: function (e, t) {
                                return I._imgProgress(N, e, "start", !1)
                            },
                            onComplete: function (e, t, i) {
                                return i && i.success ? I._imgProgress(N, e, "preview", i) : (i.error && I.errors.write(i.errors),
                                    I._imgProgress(N, e, "remove")),
                                    !0
                            },
                            onCancel: function (e, t) {
                                I._imgProgress(N, e, "remove")
                            },
                            showMessage: function (e, t) {
                                I.errors.clear(),
                                    I.errors.write(e)
                            },
                            messages: {
                                typeError: z.uploaderErrors[E].typeError,
                                sizeError: z.uploaderErrors[E].sizeError,
                                minSizeError: z.uploaderErrors[E].minSizeError,
                                emptyError: z.uploaderErrors[E].emptyError,
                                limitError: z.uploaderErrors[E].limitError,
                                onLeave: z.uploaderErrors[E].onLeave
                            }
                        }),
                        N.type.ajax) {
                        for (var t = N.type.ajax.querySelectorAll(".b-images__item-upload"), i = 0; i < t.length; i++)
                            N.uploader._createUploadButton(t[i]);
                        for (var l = N.type.ajax.querySelectorAll(".b-images__item-del"), i = 0; i < l.length; i++)
                            I.deleteImageHandler(l[i])
                    }
                }
                ,
                G.init()),
            function () {
                var e = document.body.querySelectorAll(".b-profile-info__statistics-levels .b-profile-info__statistics-level")
                    , t = document.body.querySelectorAll(".b-profile-info__statistics-content");
                if (e.length) {
                    var i, n = Array.from(e), s = Array.from(t);
                    for (i in n)
                        n[i].addEventListener("click", function (e) {
                            e = e.target.closest(".b-profile-info__statistics-level");
                            if (e) {
                                var t, i = e.getAttribute("data-id");
                                for (t in n) {
                                    var l = n[t]
                                        , a = l.getAttribute("data-id");
                                    l.removeClass("active"),
                                        i === a && l.addClass("active")
                                }
                                for (t in s) {
                                    var r = s[t];
                                    r.addClass("d-none"),
                                        i === r.getAttribute("data-id") && r.removeClass("d-none")
                                }
                            }
                        })
                }
            }(),
            R.a.get(W) || (O = document.querySelector("body"),
                (j = document.createElement("div")).className = "cookie-warning",
                j.innerHTML = 'By using our website, you agree to the use of cookies to personalize content and ads, to analyse our traffic and for the performance of our website. To learn more, visit our <a href="/help/cookie/">Cookie Policy</a>.<div class="cookie-warning__close">' + window.svgList.times + "<div>",
                // O.appendChild(j),
                (U = document.querySelector(".cookie-warning")) && document.querySelector(".cookie-warning__close").addEventListener("click", function (e) {
                    R.a.set(W, 1, {
                        expires: 365
                    }),
                        U.remove()
                }))
    }
]);
