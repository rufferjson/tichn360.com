webpackJsonp([3], {
    134: function(e, t, n) {
        "use strict";
        var o = n(2)
          , r = n(8)
          , i = n(11);
        n.d(t, "a", function() {
            return s
        });
        var a = this && this.__decorate || function(e, t, n, o) {
            var r, i = arguments.length, a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var l = e.length - 1; l >= 0; l--)
                    (r = e[l]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
            return i > 3 && a && Object.defineProperty(t, n, a),
            a
        }
          , l = this && this.__metadata || function(e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
          , s = function() {
            function e(e) {
                var t = this;
                this.zone = e,
                this.settingsService = i.settingsService,
                this.stateService = r.stateService,
                this.translation = this.settingsService.get("translation"),
                this.langSubscribe = this.stateService.get("lang").subscribe(function() {
                    t.zone.run(function() {
                        t.translation = t.settingsService.get("translation")
                    })
                })
            }
            return e.prototype.ngOnInit = function() {}
            ,
            e.prototype.ngOnDestroy = function() {
                this.langSubscribe && this.langSubscribe.unsubscribe()
            }
            ,
            e.prototype.refresh = function() {
                window.location.reload()
            }
            ,
            a([n.i(o.Input)(), l("design:type", Object)], e.prototype, "data", void 0),
            a([n.i(o.Input)(), l("design:type", String)], e.prototype, "state", void 0),
            e = a([n.i(o.Component)({
                selector: "global-popup",
                template: n(613)
            }), l("design:paramtypes", [o.NgZone])], e)
        }()
    },
    135: function(e, t, n) {
        "use strict";
        var o = n(2)
          , r = n(4)
          , i = n(27)
          , a = n(8)
          , l = n(15)
          , s = n(25)
          , c = n(71)
          , u = n(33)
          , p = n(9)
          , d = n(11)
          , f = n(99)
          , g = n(62)
          , m = n(44)
          , v = n(14);
        n.d(t, "a", function() {
            return R
        });
        var h = this && this.__decorate || function(e, t, n, o) {
            var r, i = arguments.length, a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var l = e.length - 1; l >= 0; l--)
                    (r = e[l]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
            return i > 3 && a && Object.defineProperty(t, n, a),
            a
        }
          , S = this && this.__metadata || function(e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
          , b = this && this.__param || function(e, t) {
            return function(n, o) {
                t(n, o, e)
            }
        }
          , y = n(223)
          , R = function() {
            function e(e, t, n, o, r, s, u) {
                var p = this;
                this.$window = e,
                this.localeService = t,
                this.wpIntegrationService = n,
                this.el = o,
                this.utils = r,
                this.document = s,
                this.renderer = u,
                this.api = i.api,
                this.stateService = a.stateService,
                this.userService = l.userService,
                this.localStorageService = c.localStorageService,
                this.settingsService = d.settingsService,
                this.popup = {
                    show: !1,
                    data: {},
                    state: ""
                },
                this.bridgeCommands = ["forexSignup", "forexLogin"],
                this.config = {
                    login: "",
                    token: ""
                },
                this.config.login = this.el.nativeElement.getAttribute("login"),
                this.config.token = this.el.nativeElement.getAttribute("token"),
                this.fingerprint = new y({
                    canvas: !0
                }).get(),
                this.api.connect().catch(function() {
                    p.stateService.setOnce("globalPopup", {
                        data: "Server connection problem. Please try again later",
                        state: "error"
                    })
                }),
                this.onResize(null),
                e.nativeWindow.runPlugin = function(e, t) {
                    return p.stateServiceBridge(e, t)
                }
            }
            return e.prototype.ngOnInit = function() {
                var e = this;
                this.api.onConnect(function() {
                    e.popup.show = !1;
                    var t = function() {
                        var t = e.utils.getParams()
                          , n = e.localStorageService.get("lang");
                        return t.lang || n
                    };
                    e.loadSettings().then(function() {
                        return e.loadTranslations(t() || g.AppConfig.defaultLang)
                    }).then(function() {
                        return e.loginToken()
                    }).then(function() {
                        return e.stateService.set("app", {
                            status: !0,
                            fingerprint: e.fingerprint
                        })
                    }).catch(function(t) {
                        console.warn(t),
                        e.stateService.setOnce("globalPopup", {
                            data: "Server connection problem. Please try again later",
                            state: "error"
                        })
                    })
                }),
                this.api.onDisconnect(function() {
                    e.stateService.set("app", {
                        status: !1,
                        fingerprint: e.fingerprint
                    }),
                    setTimeout(function() {
                        e.stateService.setOnce("globalPopup", {
                            data: "Server connection problem. Please try again later",
                            state: "error"
                        })
                    }, 2e3)
                }),
                this.stateService.getOnce("globalPopup").distinctUntilChanged().filter(function(e) {
                    return !!e
                }).subscribe(function(t) {
                    e.popup.show = !0,
                    e.popup.data = t.data,
                    e.popup.state = t.state
                })
            }
            ,
            e.prototype.loadSettings = function() {
                return this.settingsService.load(["timezone"])
            }
            ,
            e.prototype.loadTranslations = function(e) {
                var t = this;
                return Promise.resolve().then(function() {
                    return t.localeService.loadLang(e)
                }).then(function(e) {
                    var n = e[0]
                      , o = e[1];
                    t.settingsService.set("translation", o),
                    t.stateService.set("lang", n)
                })
            }
            ,
            e.prototype.stateServiceBridge = function(e, t) {
                void 0 === t && (t = {}),
                e && this.bridgeCommands.indexOf(e) < 0 || this.stateService.setOnce(e, t)
            }
            ,
            e.prototype.checkResponse = function(e, t) {
                if (0 === e.status)
                    throw new u.AppError({
                        source: "Init",
                        type: p.Constants.error.type.VALIDATION,
                        severity: "critical",
                        code: "tokenFailed",
                        message: "invalid token",
                        data: {
                            response: e,
                            request: t
                        }
                    });
                return e
            }
            ,
            e.prototype.loginToken = function() {
                var e = this
                  , t = this.utils.getUrlToken() || this.localStorageService.get("token")
                  , n = p.Constants.currencySymbols.hasOwnProperty(this.utils.getUrlCurrency()) && this.utils.getUrlCurrency();
                return t ? this.api.request.mt4LoginToken({
                    Token: t
                }).then(function(t) {
                    return e.checkResponse(t)
                }).then(function(t) {
                    e.userService.login(t.CustomerData),
                    e.utils.getUrlToken() && e.localStorageService.remove("token")
                }).catch(function(t) {
                    e.localStorageService.remove("token")
                }) : (n && (console.log("anonymous mode", n),
                this.localStorageService.remove("token"),
                this.userService.login({
                    Currency: n
                }, !0)),
                !0)
            }
            ,
            e.prototype.onResize = function(e) {
                var t, n = 1.44, o = 8, r = 10, i = this.el.nativeElement.parentElement;
                return t = Math.max(Math.min(i.offsetWidth / (100 * n), r), o) + "px",
                console.log(t),
                this.document.documentElement.style["font-size"] = t,
                !0
            }
            ,
            e = h([n.i(o.Component)({
                selector: "panda-forex-init",
                template: n(614),
                host: {
                    "(window:resize)": "onResize($event)"
                }
            }), b(5, n.i(o.Inject)(r.DOCUMENT)), S("design:paramtypes", [s.WindowRef, f.a, m.WPIntegrationService, o.ElementRef, v.a, Document, o.Renderer2])], e)
        }()
    },
    484: function(e, t, n) {
        "use strict";
        var o = n(2)
          , r = n(524)
          , i = n(135)
          , a = n(503)
          , l = n(4)
          , s = n(13)
          , c = n(40)
          , u = n(36)
          , p = n(28)
          , d = n(35)
          , f = n(5)
          , g = n(18)
          , m = (n.n(g),
        n(41))
          , v = (n.n(m),
        n(14))
          , h = n(25)
          , S = n(99)
          , b = n(44)
          , y = n(63)
          , R = n(31)
          , C = (n.n(R),
        n(17));
        n.d(t, "a", function() {
            return O
        });
        var O = o["ɵcmf"](r.a, [i.a], function(e) {
            return o["ɵmod"]([o["ɵmpd"](512, o.ComponentFactoryResolver, o["ɵCodegenComponentFactoryResolver"], [[8, [a.a]], [3, o.ComponentFactoryResolver], o.NgModuleRef]), o["ɵmpd"](5120, o.LOCALE_ID, o["ɵm"], [[3, o.LOCALE_ID]]), o["ɵmpd"](4608, l.NgLocalization, l.NgLocaleLocalization, [o.LOCALE_ID]), o["ɵmpd"](4608, o.Compiler, o.Compiler, []), o["ɵmpd"](5120, o.APP_ID, o["ɵf"], []), o["ɵmpd"](5120, o.IterableDiffers, o["ɵk"], []), o["ɵmpd"](5120, o.KeyValueDiffers, o["ɵl"], []), o["ɵmpd"](4608, s.a, s.b, [l.DOCUMENT]), o["ɵmpd"](6144, o.Sanitizer, null, [s.a]), o["ɵmpd"](4608, s.c, s.d, []), o["ɵmpd"](5120, s.e, function(e, t, n, o) {
                return [new s.f(e), new s.g(t), new s.h(n,o)]
            }, [l.DOCUMENT, l.DOCUMENT, l.DOCUMENT, s.c]), o["ɵmpd"](4608, s.i, s.i, [s.e, o.NgZone]), o["ɵmpd"](135680, s.j, s.j, [l.DOCUMENT]), o["ɵmpd"](4608, s.k, s.k, [s.i, s.j]), o["ɵmpd"](5120, c.a, u.a, []), o["ɵmpd"](5120, c.b, u.b, []), o["ɵmpd"](4608, c.c, u.c, [c.a, c.b]), o["ɵmpd"](5120, o.RendererFactory2, u.d, [s.k, c.c, o.NgZone]), o["ɵmpd"](6144, s.l, null, [s.j]), o["ɵmpd"](4608, o.Testability, o.Testability, [o.NgZone]), o["ɵmpd"](4608, s.m, s.m, [l.DOCUMENT]), o["ɵmpd"](4608, s.n, s.n, [l.DOCUMENT]), o["ɵmpd"](4608, p.a, p.a, []), o["ɵmpd"](4608, p.b, p.c, []), o["ɵmpd"](5120, p.d, p.e, []), o["ɵmpd"](4608, p.f, p.f, [p.a, p.b, p.d]), o["ɵmpd"](4608, p.g, p.h, []), o["ɵmpd"](5120, p.i, p.j, [p.f, p.g]), o["ɵmpd"](4608, p.n, p.n, []), o["ɵmpd"](4608, p.o, p.p, [p.n, p.b]), o["ɵmpd"](5120, p.q, p.r, [p.o, p.g]), o["ɵmpd"](4608, d.a, u.e, [o.RendererFactory2, s.o]), o["ɵmpd"](4608, f["ɵi"], f["ɵi"], []), o["ɵmpd"](5120, g.PerfectScrollbarConfig, m.provideDefaultConfig, [m.PERFECT_SCROLLBAR_CONFIG]), o["ɵmpd"](4608, v.a, v.a, []), o["ɵmpd"](4608, h.WindowRef, h.WindowRef, []), o["ɵmpd"](4608, S.a, S.a, [p.i]), o["ɵmpd"](4608, b.WPIntegrationService, b.WPIntegrationService, [h.WindowRef, p.i, v.a]), o["ɵmpd"](512, l.CommonModule, l.CommonModule, []), o["ɵmpd"](512, o.ErrorHandler, y.AppErrorHandler, []), o["ɵmpd"](1024, o.APP_INITIALIZER, function(e, t) {
                return [s.p(e, t)]
            }, [[2, s.q], [2, o.NgProbeToken]]), o["ɵmpd"](512, o.ApplicationInitStatus, o.ApplicationInitStatus, [[2, o.APP_INITIALIZER]]), o["ɵmpd"](131584, o["ɵe"], o["ɵe"], [o.NgZone, o["ɵConsole"], o.Injector, o.ErrorHandler, o.ComponentFactoryResolver, o.ApplicationInitStatus]), o["ɵmpd"](2048, o.ApplicationRef, null, [o["ɵe"]]), o["ɵmpd"](512, o.ApplicationModule, o.ApplicationModule, [o.ApplicationRef]), o["ɵmpd"](512, s.r, s.r, [[3, s.r]]), o["ɵmpd"](512, p.k, p.k, []), o["ɵmpd"](512, p.s, p.s, []), o["ɵmpd"](512, u.f, u.f, []), o["ɵmpd"](512, f["ɵba"], f["ɵba"], []), o["ɵmpd"](512, f.FormsModule, f.FormsModule, []), o["ɵmpd"](512, R.TextMaskModule, R.TextMaskModule, []), o["ɵmpd"](1024, m.PERFECT_SCROLLBAR_GUARD, m.provideForRootGuard, [[3, g.PerfectScrollbarConfig]]), o["ɵmpd"](512, m.PerfectScrollbarModule, m.PerfectScrollbarModule, [[2, m.PERFECT_SCROLLBAR_GUARD]]), o["ɵmpd"](512, C.HelperComponentsModule, C.HelperComponentsModule, []), o["ɵmpd"](512, r.a, r.a, []), o["ɵmpd"](256, m.PERFECT_SCROLLBAR_CONFIG, {
                suppressScrollX: !0
            }, [])])
        })
    },
    490: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var o = {
            production: !0
        }
    },
    502: function(e, t, n) {
        "use strict";
        function o(e) {
            return i["ɵvid"](0, [(e()(),
            i["ɵeld"](0, 0, null, null, 15, "div", [["class", "mainpandats"]], null, null, null, null, null)), (e()(),
            i["ɵted"](-1, null, ["\n    "])), (e()(),
            i["ɵeld"](2, 0, null, null, 0, "div", [["class", "backdrop-pandats"]], null, null, null, null, null)), (e()(),
            i["ɵted"](-1, null, ["\n    "])), (e()(),
            i["ɵeld"](4, 0, null, null, 10, "div", [["class", "popup-wrapper-pandats"]], null, null, null, null, null)), (e()(),
            i["ɵted"](-1, null, ["\n        "])), (e()(),
            i["ɵeld"](6, 0, null, null, 1, "div", [["class", "popup-content-pandats"]], null, null, null, null, null)), (e()(),
            i["ɵted"](7, null, ["\n            ", "\n        "])), (e()(),
            i["ɵted"](-1, null, ["\n        "])), (e()(),
            i["ɵeld"](9, 0, null, null, 4, "div", [["class", "footer-popup-pandats"]], null, null, null, null, null)), (e()(),
            i["ɵted"](-1, null, ["\n            "])), (e()(),
            i["ɵeld"](11, 0, null, null, 1, "button", [["class", "forex-button-pandats simple-button-pandats"]], null, [[null, "click"]], function(e, t, n) {
                var o = !0
                  , r = e.component;
                if ("click" === t) {
                    o = !1 !== r.refresh() && o
                }
                return o
            }, null, null)), (e()(),
            i["ɵted"](12, null, ["", ""])), (e()(),
            i["ɵted"](-1, null, ["\n        "])), (e()(),
            i["ɵted"](-1, null, ["\n    "])), (e()(),
            i["ɵted"](-1, null, ["\n\n"]))], null, function(e, t) {
                var n = t.component;
                e(t, 7, 0, n.data),
                e(t, 12, 0, n.translation.try_again)
            })
        }
        function r(e) {
            return i["ɵvid"](0, [(e()(),
            i["ɵeld"](0, 0, null, null, 1, "global-popup", [], null, null, null, o, s)), i["ɵdid"](1, 245760, null, 0, a.a, [i.NgZone], null, null)], function(e, t) {
                e(t, 1, 0)
            }, null)
        }
        var i = n(2)
          , a = n(134);
        n.d(t, "b", function() {
            return s
        }),
        t.a = o;
        var l = []
          , s = i["ɵcrt"]({
            encapsulation: 2,
            styles: l,
            data: {}
        });
        i["ɵccf"]("global-popup", a.a, r, {
            data: "data",
            state: "state"
        }, {}, [])
    },
    503: function(e, t, n) {
        "use strict";
        function o(e) {
            return a["ɵvid"](0, [(e()(),
            a["ɵeld"](0, 0, null, null, 1, "global-popup", [], null, null, null, l.a, l.b)), a["ɵdid"](1, 245760, null, 0, s.a, [a.NgZone], {
                data: [0, "data"],
                state: [1, "state"]
            }, null)], function(e, t) {
                var n = t.component;
                e(t, 1, 0, n.popup.data, n.popup.state)
            }, null)
        }
        function r(e) {
            return a["ɵvid"](0, [(e()(),
            a["ɵand"](16777216, null, null, 1, null, o)), a["ɵdid"](1, 16384, null, 0, c.NgIf, [a.ViewContainerRef, a.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (e()(),
            a["ɵted"](-1, null, ["\n"]))], function(e, t) {
                e(t, 1, 0, t.component.popup.show)
            }, null)
        }
        function i(e) {
            return a["ɵvid"](0, [(e()(),
            a["ɵeld"](0, 0, null, null, 1, "panda-forex-init", [], null, [["window", "resize"]], function(e, t, n) {
                var o = !0;
                if ("window:resize" === t) {
                    o = !1 !== a["ɵnov"](e, 1).onResize(n) && o
                }
                return o
            }, r, v)), a["ɵdid"](1, 114688, null, 0, u.a, [p.WindowRef, d.a, f.WPIntegrationService, a.ElementRef, g.a, c.DOCUMENT, a.Renderer2], null, null)], function(e, t) {
                e(t, 1, 0)
            }, null)
        }
        var a = n(2)
          , l = n(502)
          , s = n(134)
          , c = n(4)
          , u = n(135)
          , p = n(25)
          , d = n(99)
          , f = n(44)
          , g = n(14);
        n.d(t, "a", function() {
            return h
        });
        var m = []
          , v = a["ɵcrt"]({
            encapsulation: 2,
            styles: m,
            data: {}
        })
          , h = a["ɵccf"]("panda-forex-init", u.a, i, {}, {}, [])
    },
    524: function(e, t, n) {
        "use strict";
        var o = n(13)
          , r = n(2)
          , i = n(135)
          , a = n(134)
          , l = n(25)
          , s = n(63)
          , c = n(99)
          , u = n(44)
          , p = n(28)
          , d = n(17);
        n.d(t, "a", function() {
            return g
        });
        var f = this && this.__decorate || function(e, t, n, o) {
            var r, i = arguments.length, a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var l = e.length - 1; l >= 0; l--)
                    (r = e[l]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
            return i > 3 && a && Object.defineProperty(t, n, a),
            a
        }
          , g = function() {
            function e() {}
            return e = f([n.i(r.NgModule)({
                declarations: [i.a, a.a],
                imports: [o.r, p.k, p.s, d.HelperComponentsModule],
                providers: [l.WindowRef, {
                    provide: r.ErrorHandler,
                    useClass: s.AppErrorHandler
                }, c.a, u.WPIntegrationService],
                bootstrap: [i.a]
            })], e)
        }()
    },
    613: function(e, t) {
        e.exports = '<div class=mainpandats> <div class=backdrop-pandats></div> <div class=popup-wrapper-pandats> <div class=popup-content-pandats> {{data}} </div> <div class=footer-popup-pandats> <button class="forex-button-pandats simple-button-pandats" (click)=refresh()>{{translation.try_again}}</button> </div> </div> </div>'
    },
    614: function(e, t) {
        e.exports = "<global-popup *ngif=popup.show [data]=popup.data [state]=popup.state></global-popup> "
    },
    956: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(2)
          , r = n(20)
          , i = n(484);
        n(490).a.production && n.i(o.enableProdMode)(),
        n.i(r.a)().bootstrapModuleFactory(i.a)
    },
    99: function(e, t, n) {
        "use strict";
        var o = n(2)
          , r = n(28)
          , i = n(170)
          , a = (n.n(i),
        n(195))
          , l = n(62)
          , s = n(71)
          , c = n(8)
          , u = n(11);
        n.d(t, "a", function() {
            return f
        });
        var p = this && this.__decorate || function(e, t, n, o) {
            var r, i = arguments.length, a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var l = e.length - 1; l >= 0; l--)
                    (r = e[l]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
            return i > 3 && a && Object.defineProperty(t, n, a),
            a
        }
          , d = this && this.__metadata || function(e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
          , f = function() {
            function e(e) {
                var t = this;
                this.http = e,
                this.cache = {},
                this.stateService = c.stateService,
                this.settingsService = u.settingsService,
                this.localStorageService = s.localStorageService,
                this.loadLangSubscribe = this.stateService.getOnce("loadLang").distinctUntilChanged().subscribe(function(e) {
                    t.loadLang(e.lang).then(function(e) {
                        var n = e[0]
                          , o = e[1];
                        t.settingsService.set("translation", o),
                        t.stateService.set("lang", n),
                        t.localStorageService.set("lang", n)
                    })
                })
            }
            return e.prototype.getFromCache = function(e) {
                if (this.cache.hasOwnProperty(e) && !this.cache[e].hasOwnProperty("_fallback"))
                    return {
                        data: this.cache[e],
                        lang: e
                    }
            }
            ,
            e.prototype.loadLang = function(e) {
                var t = this
                  , n = this.getFromCache(e);
                if (n)
                    return Promise.resolve([e, n.data]);
                var o = l.AppConfig.deployUrl + "locales/" + e + ".json?" + Date.now();
                return this.http.get(o).map(function(e) {
                    return e.json()
                }).toPromise().then(function(n) {
                    return t.translation = n,
                    t.cache[e] = t.translation,
                    [e, t.translation]
                }).catch(function(n) {
                    return t.translation = a.FallbackLocale,
                    [e, t.translation]
                })
            }
            ,
            e = p([n.i(o.Injectable)(), d("design:paramtypes", [r.i])], e)
        }()
    }
}, [956]);
