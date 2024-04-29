webpackJsonp([2], {
    100: function(n, l, t) {
        "use strict";
        var e = t(2)
          , o = t(8)
          , i = t(11)
          , u = t(62)
          , s = t(9)
          , a = t(14);
        t.d(l, "a", function() {
            return c
        });
        var r = this && this.__decorate || function(n, l, t, e) {
            var o, i = arguments.length, u = i < 3 ? l : null === e ? e = Object.getOwnPropertyDescriptor(l, t) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                u = Reflect.decorate(n, l, t, e);
            else
                for (var s = n.length - 1; s >= 0; s--)
                    (o = n[s]) && (u = (i < 3 ? o(u) : i > 3 ? o(l, t, u) : o(l, t)) || u);
            return i > 3 && u && Object.defineProperty(l, t, u),
            u
        }
          , d = this && this.__metadata || function(n, l) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, l)
        }
          , c = function() {
            function n(n) {
                this.utils = n,
                this.toastContent = "",
                this.toastStatus = "",
                this.isShow = new e.EventEmitter,
                this.onSubmit = new e.EventEmitter,
                this.config = u.AppConfig,
                this.stateService = o.stateService,
                this.settingsService = i.settingsService,
                this.constants = s.Constants,
                this.defaultLoginForm = {
                    login: "",
                    password: "",
                    live: !1,
                    showPassword: "password"
                },
                this.brand = "",
                this.showSpinner = !1,
                this.translation = this.settingsService.get("translation"),
                this.brand = s.Constants.brandDomain,
                console.log("login brand logo", this.brand)
            }
            return n.prototype.ngOnInit = function() {
                this.resetForm(),
                this.loginForm.login = this.loginRequest.login || "",
                this.loginForm.password = this.loginRequest.password || ""
            }
            ,
            n.prototype.resetForm = function() {
                this.loginForm = Object.assign({}, this.defaultLoginForm)
            }
            ,
            n.prototype.closeLoginPopup = function() {
                this.resetForm(),
                this.isShow.emit(!1)
            }
            ,
            n.prototype.submit = function() {
                this.showSpinner = !0,
                this.onSubmit.emit(this.loginForm)
            }
            ,
            n.prototype.signup = function() {
                this.isShow.emit(!1),
                this.stateService.setOnce("forexSignup")
            }
            ,
            n.prototype.showPassword = function() {
                this.loginForm.showPassword = "password" === this.loginForm.showPassword ? "text" : "password"
            }
            ,
            r([t.i(e.Input)(), d("design:type", String)], n.prototype, "toastContent", void 0),
            r([t.i(e.Input)(), d("design:type", String)], n.prototype, "toastStatus", void 0),
            r([t.i(e.Input)(), d("design:type", Object)], n.prototype, "loginRequest", void 0),
            r([t.i(e.Output)(), d("design:type", e.EventEmitter)], n.prototype, "isShow", void 0),
            r([t.i(e.Output)(), d("design:type", e.EventEmitter)], n.prototype, "onSubmit", void 0),
            n = r([t.i(e.Component)({
                selector: "login-popup",
                template: t(617),
                animations: [t.i(e.trigger)("fadeInOut", [t.i(e.transition)(":enter", [t.i(e.style)({
                    opacity: 0
                }), t.i(e.animate)(300, t.i(e.style)({
                    opacity: 1
                }))]), t.i(e.transition)(":leave", [t.i(e.animate)(300, t.i(e.style)({
                    opacity: 0
                }))])])]
            }), d("design:paramtypes", [a.a])], n)
        }()
    },
    137: function(n, l, t) {
        "use strict";
        var e = t(2)
          , o = t(28)
          , i = t(8)
          , u = t(15)
          , s = t(27)
          , a = t(71)
          , r = t(11)
          , d = t(100)
          , c = t(201)
          , p = t(33)
          , g = t(9)
          , v = t(44)
          , f = t(62)
          , h = t(25)
          , m = t(206);
        t.d(l, "a", function() {
            return y
        });
        var b = this && this.__decorate || function(n, l, t, e) {
            var o, i = arguments.length, u = i < 3 ? l : null === e ? e = Object.getOwnPropertyDescriptor(l, t) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                u = Reflect.decorate(n, l, t, e);
            else
                for (var s = n.length - 1; s >= 0; s--)
                    (o = n[s]) && (u = (i < 3 ? o(u) : i > 3 ? o(l, t, u) : o(l, t)) || u);
            return i > 3 && u && Object.defineProperty(l, t, u),
            u
        }
          , S = this && this.__metadata || function(n, l) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, l)
        }
          , C = t(223)
          , y = function() {
            function n(n, l, t, e, o) {
                var d = this;
                this.zone = n,
                this.wpIntegrationService = l,
                this.el = t,
                this.$window = e,
                this.http = o,
                this.api = s.api,
                this.stateService = i.stateService,
                this.userService = u.userService,
                this.localStorageService = a.localStorageService,
                this.settingsService = r.settingsService,
                this.status = !1,
                this.isShow = !1,
                this.loginRequest = {},
                this.toast = {
                    content: "",
                    status: ""
                },
                this.fingerPrint = "",
                this.forgotPasswordState = !1,
                this.logoutBlocked = !1,
                this.loginBlocked = !1,
                this.rawTradingAccounts = [],
                this.isAccountSelect = !1,
                this.loginMenuConfig = {
                    label: "label"
                },
                this.loginMenuActions = [{
                    label: "deposit",
                    name: "deposit"
                }, {
                    label: "logout",
                    name: "logout"
                }],
                this.currentMenuItem = {
                    label: "",
                    name: ""
                },
                this.config = {
                    showLogout: !0,
                    token: "",
                    logoutLink: "",
                    redirectAfterLogin: ""
                },
                this.translation = this.settingsService.get("translation"),
                this.langSubscribe = this.stateService.get("lang").subscribe(function() {
                    d.zone.run(function() {
                        d.translation = d.settingsService.get("translation")
                    })
                }),
                this.config.showLogout = this.el.nativeElement.getAttribute("show-logout") ? String(!0) === this.el.nativeElement.getAttribute("show-logout") : this.config.showLogout,
                this.config.token = this.el.nativeElement.getAttribute("token"),
                this.config.logoutLink = this.el.nativeElement.getAttribute("logout-link"),
                this.config.redirectAfterLogin = this.el.nativeElement.getAttribute("redirect-after-login")
            }
            return n.prototype.ngOnInit = function() {
                var n = this;
                this.appSubscribe = this.stateService.get("app").filter(function(n) {
                    return !!n
                }).subscribe(function(l) {
                    n.zone.run(function() {
                        l.status && (n.status = !0,
                        n.translation = n.settingsService.get("translation"),
                        n.user = n.userService.get(),
                        n.fingerPrint = new C({
                            canvas: !0
                        }).get(),
                        n.initComponent()),
                        l.status || (n.userService.logoff(),
                        n.status = !1)
                    })
                }),
                this.logoutSubscribe = this.stateService.getOnce("logout").filter(function(n) {
                    return !!n
                }).subscribe(function() {
                    return n.zone.run(function() {
                        return n.logout()
                    })
                }),
                this.signInSubscribe = this.stateService.getOnce("signIn").filter(function(n) {
                    return !!n
                }).subscribe(function(l) {
                    return n.zone.run(function() {
                        n.loginRequest = l,
                        n.isShow = !0
                    })
                }),
                this.loginSubscribe = this.stateService.getOnce("forexLogin").distinctUntilChanged().subscribe(function() {
                    return n.zone.run(function() {
                        return n.isShow = !0
                    })
                })
            }
            ,
            n.prototype.ngOnDestroy = function() {
                this.appSubscribe && this.appSubscribe.unsubscribe(),
                this.logoutSubscribe && this.logoutSubscribe.unsubscribe(),
                this.signInSubscribe && this.signInSubscribe.unsubscribe(),
                this.loginSubscribe && this.loginSubscribe.unsubscribe(),
                this.langSubscribe && this.langSubscribe.unsubscribe()
            }
            ,
            n.prototype.initComponent = function() {
                var n = this;
                this.stateService.get("user").distinctUntilChanged().filter(function(n) {
                    return !!n
                }).subscribe(function(l) {
                    return n.zone.run(function() {
                        return n.user = n.userService.get()
                    })
                }),
                this.fingerPrint = new C({
                    canvas: !0
                }).get()
            }
            ,
            n.prototype.showLoginPopup = function() {
                this.loginBlocked || (this.toast.content = "",
                this.toast.status = "",
                this.isShow = !0)
            }
            ,
            n.prototype.checkResponse = function(n, l) {
                if (0 === n.status)
                    throw new p.AppError({
                        source: "LoginComponent",
                        type: g.Constants.error.type.VALIDATION,
                        severity: "warning",
                        code: n.code && n.code.toString() || "loginFailed",
                        data: {
                            request: l,
                            response: n
                        }
                    });
                return n
            }
            ,
            n.prototype.getToken = function(n, l, t) {
                var e = [].concat(t ? g.Constants.source.live : g.Constants.source.demo);
                return this.cascadeLogin(n, l, e)
            }
            ,
            n.prototype.cascadeLogin = function(n, l, e) {
                var i = this
                  , u = function(n, l, e) {
                    var u = new o.m;
                    u.set("Login", n),
                    u.set("Password", l),
                    u.set("Source", e.toString());
                    var s = new o.g;
                    return s.search = u,
                    i.http.get(f.AppConfig.tokenUrl + g.Constants.brandDomain + "/", s).map(function(n) {
                        return t.i(m.a)(n.json())
                    }).toPromise().then(function(n) {
                        return i.checkResponse(n, u)
                    }).then(function(n) {
                        return {
                            token: n.Token,
                            source: e
                        }
                    })
                };
                return e.reduce(function(t, e) {
                    return t.then(function(n) {
                        throw new p.AppError({
                            source: "LoginComponent",
                            type: g.Constants.error.type.VALIDATION,
                            severity: "info",
                            code: 1,
                            data: n
                        })
                    }).catch(function(t) {
                        if (t && 1 === t.code)
                            throw t;
                        return u(n, l, e)
                    })
                }, u(n, l, e.shift())).catch(function(n) {
                    if (n && 1 === n.code && n.data && n.data.token)
                        return n.data;
                    throw n
                })
            }
            ,
            n.prototype.login = function(n, l) {
                var t = this;
                if (void 0 === l && (l = this.loginPopup),
                !this.loginBlocked) {
                    this.toast.content = "",
                    l.showSpinner = !0,
                    this.loginBlocked = !0,
                    this.stateService.setOnce("lock", {
                        status: !0
                    });
                    var e;
                    return this.getToken(n.login, n.password, n.live).then(function(n) {
                        return t.checkResponse(n)
                    }).then(function(n) {
                        return e = n.token,
                        t.api.request.mt4LoginToken({
                            Token: n.token
                        })
                    }).then(function(n) {
                        return t.checkResponse(n, n)
                    }).then(function(n) {
                        t.userService.login(n.CustomerData),
                        t.localStorageService.set("token", e)
                    }).then(function() {
                        return t.stateService.set("user", {
                            loggedIn: !0
                        })
                    }).catch(function(n) {
                        n instanceof p.AppError || (n = new p.AppError({
                            source: "LoginComponent",
                            type: g.Constants.error.type.VALIDATION,
                            severity: "warning",
                            code: "Err0",
                            data: {}
                        })),
                        l.showSpinner = !1,
                        t.loginBlocked = !1,
                        t.toast.content = t.translation.messages[n.code] || t.translation.messages.general_error,
                        t.toast.status = "error"
                    })
                }
            }
            ,
            n.prototype.logout = function() {
                var n = this;
                if (!this.logoutBlocked) {
                    if (this.logoutBlocked = !0,
                    this.loginBlocked = !0,
                    this.stateService.setOnce("lock", {
                        status: !0
                    }),
                    f.AppConfig.wpAuth)
                        return this.userService.logout(),
                        this.stateService.set("user", {
                            loggedIn: !1
                        }),
                        this.wpIntegrationService.logout(this.config.token, this.config.logoutLink);
                    this.api.request.logout().then(function() {
                        n.userService.logout(),
                        n.user = n.userService.get(),
                        n.stateService.set("user", {
                            loggedIn: !1
                        }),
                        n.isShow = !1,
                        n.isAccountSelect = !1,
                        n.loginRequest = {},
                        n.logoutBlocked = !1,
                        n.loginBlocked = !1,
                        n.stateService.setOnce("lock", {
                            status: !1
                        })
                    }).catch(function(l) {
                        n.logoutBlocked = !1,
                        n.loginBlocked = !1,
                        n.stateService.setOnce("lock", {
                            status: !1
                        })
                    })
                }
            }
            ,
            n.prototype.closeLoginPopup = function() {
                this.isShow = !1,
                this.loginBlocked = !1,
                this.loginRequest = {}
            }
            ,
            n.prototype.deposit = function() {
                window.open(g.Constants.source.depositUrl, "_blank")
            }
            ,
            n.prototype.checkPasswordResponse = function(n, l) {
                if (0 === n.status)
                    throw new p.AppError({
                        source: "LoginComponent",
                        type: g.Constants.error.type.VALIDATION,
                        severity: "warning",
                        code: n.code.toString() || "forgotPasswordFailed",
                        data: {
                            request: l,
                            response: n
                        }
                    });
                return n
            }
            ,
            n.prototype.checkAccountLoginResponse = function(n, l) {
                if (0 === n.status)
                    throw new p.AppError({
                        source: "LoginComponent",
                        type: g.Constants.error.type.VALIDATION,
                        severity: "warning",
                        code: n.code.toString() || "tradingAccountLoginFailed",
                        data: {
                            request: l,
                            response: n
                        }
                    });
                return n
            }
            ,
            n.prototype.loginAccount = function(n) {
                var l = this;
                this.toast.content = "";
                var t = {
                    login: n.login,
                    live: n.live
                };
                return this.accountSelect.showSpinner = !0,
                this.api.request.mt4SwitchAccount(t).then(function(n) {
                    return l.checkAccountLoginResponse(n, t)
                }).then(function() {
                    return l.login(l.loginRequest, l.accountSelect)
                }).catch(function(n) {
                    l.accountSelect.showSpinner = !1,
                    l.toast.content = "Failed to login to trading account",
                    l.toast.status = "error"
                })
            }
            ,
            n.prototype.closeAccountSelect = function() {
                this.isAccountSelect = !1,
                this.loginRequest = {}
            }
            ,
            n.prototype.loginMenuChanged = function() {
                switch (this.currentMenuItem.name) {
                case "deposit":
                    this.deposit();
                    break;
                case "logout":
                    this.logout()
                }
                this.currentMenuItem = {
                    label: "",
                    name: ""
                }
            }
            ,
            b([t.i(e.ViewChild)(d.a), S("design:type", d.a)], n.prototype, "loginPopup", void 0),
            b([t.i(e.ViewChild)(c.a), S("design:type", c.a)], n.prototype, "accountSelect", void 0),
            n = b([t.i(e.Component)({
                selector: "panda-forex-login",
                template: t(618)
            }), S("design:paramtypes", [e.NgZone, v.WPIntegrationService, e.ElementRef, h.WindowRef, o.i])], n)
        }()
    },
    201: function(n, l, t) {
        "use strict";
        var e = t(2)
          , o = t(11)
          , i = t(8);
        t.d(l, "a", function() {
            return a
        });
        var u = this && this.__decorate || function(n, l, t, e) {
            var o, i = arguments.length, u = i < 3 ? l : null === e ? e = Object.getOwnPropertyDescriptor(l, t) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                u = Reflect.decorate(n, l, t, e);
            else
                for (var s = n.length - 1; s >= 0; s--)
                    (o = n[s]) && (u = (i < 3 ? o(u) : i > 3 ? o(l, t, u) : o(l, t)) || u);
            return i > 3 && u && Object.defineProperty(l, t, u),
            u
        }
          , s = this && this.__metadata || function(n, l) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, l)
        }
          , a = function() {
            function n(n) {
                var l = this;
                this.zone = n,
                this.toastContent = "",
                this.toastStatus = "",
                this.onAccountSelect = new e.EventEmitter,
                this.onAccountSelectClose = new e.EventEmitter,
                this.settingsService = o.settingsService,
                this.stateService = i.stateService,
                this.showSpinner = !1,
                this.translation = this.settingsService.get("translation"),
                this.langSubscribe = this.stateService.get("lang").subscribe(function() {
                    l.zone.run(function() {
                        l.translation = l.settingsService.get("translation")
                    })
                })
            }
            return n.prototype.ngOnInit = function() {}
            ,
            n.prototype.close = function() {
                this.onAccountSelectClose.emit(!1)
            }
            ,
            n.prototype.accountSelect = function(n) {
                this.onAccountSelect.emit(n)
            }
            ,
            n.prototype.ngOnDestroy = function() {
                this.langSubscribe && this.langSubscribe.unsubscribe()
            }
            ,
            u([t.i(e.Input)(), s("design:type", String)], n.prototype, "toastContent", void 0),
            u([t.i(e.Input)(), s("design:type", String)], n.prototype, "toastStatus", void 0),
            u([t.i(e.Input)(), s("design:type", Array)], n.prototype, "accounts", void 0),
            u([t.i(e.Output)(), s("design:type", e.EventEmitter)], n.prototype, "onAccountSelect", void 0),
            u([t.i(e.Output)(), s("design:type", e.EventEmitter)], n.prototype, "onAccountSelectClose", void 0),
            n = u([t.i(e.Component)({
                selector: "account-select",
                template: t(616)
            }), s("design:paramtypes", [e.NgZone])], n)
        }()
    },
    486: function(n, l, t) {
        "use strict";
        var e = t(2)
          , o = t(526)
          , i = t(137)
          , u = t(506)
          , s = t(4)
          , a = t(13)
          , r = t(40)
          , d = t(36)
          , c = t(5)
          , p = t(28)
          , g = t(35)
          , v = t(18)
          , f = (t.n(v),
        t(41))
          , h = (t.n(f),
        t(14))
          , m = t(25)
          , b = t(44)
          , S = t(63)
          , C = t(31)
          , y = (t.n(C),
        t(17));
        t.d(l, "a", function() {
            return w
        });
        var w = e["ɵcmf"](o.a, [i.a], function(n) {
            return e["ɵmod"]([e["ɵmpd"](512, e.ComponentFactoryResolver, e["ɵCodegenComponentFactoryResolver"], [[8, [u.a]], [3, e.ComponentFactoryResolver], e.NgModuleRef]), e["ɵmpd"](5120, e.LOCALE_ID, e["ɵm"], [[3, e.LOCALE_ID]]), e["ɵmpd"](4608, s.NgLocalization, s.NgLocaleLocalization, [e.LOCALE_ID]), e["ɵmpd"](4608, e.Compiler, e.Compiler, []), e["ɵmpd"](5120, e.APP_ID, e["ɵf"], []), e["ɵmpd"](5120, e.IterableDiffers, e["ɵk"], []), e["ɵmpd"](5120, e.KeyValueDiffers, e["ɵl"], []), e["ɵmpd"](4608, a.a, a.b, [s.DOCUMENT]), e["ɵmpd"](6144, e.Sanitizer, null, [a.a]), e["ɵmpd"](4608, a.c, a.d, []), e["ɵmpd"](5120, a.e, function(n, l, t, e) {
                return [new a.f(n), new a.g(l), new a.h(t,e)]
            }, [s.DOCUMENT, s.DOCUMENT, s.DOCUMENT, a.c]), e["ɵmpd"](4608, a.i, a.i, [a.e, e.NgZone]), e["ɵmpd"](135680, a.j, a.j, [s.DOCUMENT]), e["ɵmpd"](4608, a.k, a.k, [a.i, a.j]), e["ɵmpd"](5120, r.a, d.a, []), e["ɵmpd"](5120, r.b, d.b, []), e["ɵmpd"](4608, r.c, d.c, [r.a, r.b]), e["ɵmpd"](5120, e.RendererFactory2, d.d, [a.k, r.c, e.NgZone]), e["ɵmpd"](6144, a.l, null, [a.j]), e["ɵmpd"](4608, e.Testability, e.Testability, [e.NgZone]), e["ɵmpd"](4608, a.m, a.m, [s.DOCUMENT]), e["ɵmpd"](4608, a.n, a.n, [s.DOCUMENT]), e["ɵmpd"](4608, c["ɵi"], c["ɵi"], []), e["ɵmpd"](4608, p.a, p.a, []), e["ɵmpd"](4608, p.b, p.c, []), e["ɵmpd"](5120, p.d, p.e, []), e["ɵmpd"](4608, p.f, p.f, [p.a, p.b, p.d]), e["ɵmpd"](4608, p.g, p.h, []), e["ɵmpd"](5120, p.i, p.j, [p.f, p.g]), e["ɵmpd"](4608, g.a, d.e, [e.RendererFactory2, a.o]), e["ɵmpd"](5120, v.PerfectScrollbarConfig, f.provideDefaultConfig, [f.PERFECT_SCROLLBAR_CONFIG]), e["ɵmpd"](4608, h.a, h.a, []), e["ɵmpd"](4608, m.WindowRef, m.WindowRef, []), e["ɵmpd"](4608, b.WPIntegrationService, b.WPIntegrationService, [m.WindowRef, p.i, h.a]), e["ɵmpd"](512, s.CommonModule, s.CommonModule, []), e["ɵmpd"](512, e.ErrorHandler, S.AppErrorHandler, []), e["ɵmpd"](1024, e.APP_INITIALIZER, function(n, l) {
                return [a.p(n, l)]
            }, [[2, a.q], [2, e.NgProbeToken]]), e["ɵmpd"](512, e.ApplicationInitStatus, e.ApplicationInitStatus, [[2, e.APP_INITIALIZER]]), e["ɵmpd"](131584, e["ɵe"], e["ɵe"], [e.NgZone, e["ɵConsole"], e.Injector, e.ErrorHandler, e.ComponentFactoryResolver, e.ApplicationInitStatus]), e["ɵmpd"](2048, e.ApplicationRef, null, [e["ɵe"]]), e["ɵmpd"](512, e.ApplicationModule, e.ApplicationModule, [e.ApplicationRef]), e["ɵmpd"](512, a.r, a.r, [[3, a.r]]), e["ɵmpd"](512, c["ɵba"], c["ɵba"], []), e["ɵmpd"](512, c.FormsModule, c.FormsModule, []), e["ɵmpd"](512, p.k, p.k, []), e["ɵmpd"](512, d.f, d.f, []), e["ɵmpd"](512, C.TextMaskModule, C.TextMaskModule, []), e["ɵmpd"](1024, f.PERFECT_SCROLLBAR_GUARD, f.provideForRootGuard, [[3, v.PerfectScrollbarConfig]]), e["ɵmpd"](512, f.PerfectScrollbarModule, f.PerfectScrollbarModule, [[2, f.PERFECT_SCROLLBAR_GUARD]]), e["ɵmpd"](512, y.HelperComponentsModule, y.HelperComponentsModule, []), e["ɵmpd"](512, o.a, o.a, []), e["ɵmpd"](256, f.PERFECT_SCROLLBAR_CONFIG, {
                suppressScrollX: !0
            }, [])])
        })
    },
    505: function(n, l, t) {
        "use strict";
        function e(n) {
            return s["ɵvid"](0, [(n()(),
            s["ɵeld"](0, 0, null, null, 13, "div", [["class", "validation-error-pandats"]], null, null, null, null, null)), (n()(),
            s["ɵted"](-1, null, ["\n                            "])), (n()(),
            s["ɵeld"](2, 0, null, null, 1, "div", [], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s["ɵted"](3, null, ["\n                                ", "\n                            "])), (n()(),
            s["ɵted"](-1, null, ["\n                            "])), (n()(),
            s["ɵeld"](5, 0, null, null, 1, "div", [], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s["ɵted"](6, null, ["\n                                ", "\n                            "])), (n()(),
            s["ɵted"](-1, null, ["\n                            "])), (n()(),
            s["ɵeld"](8, 0, null, null, 1, "div", [], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s["ɵted"](9, null, ["\n                                ", "\n                            "])), (n()(),
            s["ɵted"](-1, null, ["\n                            "])), (n()(),
            s["ɵeld"](11, 0, null, null, 1, "div", [], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s["ɵted"](12, null, ["\n                                ", "\n                            "])), (n()(),
            s["ɵted"](-1, null, ["\n                        "]))], null, function(n, l) {
                var t = l.component;
                n(l, 2, 0, !s["ɵnov"](l.parent, 50).errors.required),
                n(l, 3, 0, t.translation.messages.loginRequired),
                n(l, 5, 0, !s["ɵnov"](l.parent, 50).errors.minlength),
                n(l, 6, 0, t.translation.messages.loginMinlength),
                n(l, 8, 0, !s["ɵnov"](l.parent, 50).errors.maxlength),
                n(l, 9, 0, t.translation.messages.loginMaxlength),
                n(l, 11, 0, !s["ɵnov"](l.parent, 50).errors.pattern),
                n(l, 12, 0, t.translation.messages.numbers)
            })
        }
        function o(n) {
            return s["ɵvid"](0, [(n()(),
            s["ɵeld"](0, 0, null, null, 13, "div", [["class", "validation-error-pandats"]], null, null, null, null, null)), (n()(),
            s["ɵted"](-1, null, ["\n                            "])), (n()(),
            s["ɵeld"](2, 0, null, null, 1, "div", [], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s["ɵted"](3, null, ["\n                                ", "\n                            "])), (n()(),
            s["ɵted"](-1, null, ["\n                            "])), (n()(),
            s["ɵeld"](5, 0, null, null, 1, "div", [], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s["ɵted"](6, null, ["\n                                ", "\n                            "])), (n()(),
            s["ɵted"](-1, null, ["\n                            "])), (n()(),
            s["ɵeld"](8, 0, null, null, 1, "div", [], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s["ɵted"](9, null, ["\n                                ", "\n                            "])), (n()(),
            s["ɵted"](-1, null, ["\n                            "])), (n()(),
            s["ɵeld"](11, 0, null, null, 1, "div", [], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s["ɵted"](12, null, ["\n                                ", "\n                            "])), (n()(),
            s["ɵted"](-1, null, ["\n                        "]))], null, function(n, l) {
                var t = l.component;
                n(l, 2, 0, !s["ɵnov"](l.parent, 71).errors.required),
                n(l, 3, 0, t.translation.messages.passwordRequired),
                n(l, 5, 0, !s["ɵnov"](l.parent, 71).errors.minlength),
                n(l, 6, 0, t.translation.messages.passwordMinlength),
                n(l, 8, 0, !s["ɵnov"](l.parent, 71).errors.maxlength),
                n(l, 9, 0, t.translation.messages.passwordMaxlength),
                n(l, 11, 0, !s["ɵnov"](l.parent, 71).errors.passwordMix),
                n(l, 12, 0, t.translation.messages.numbers_chars)
            })
        }
        function i(n) {
            return s["ɵvid"](0, [(n()(),
            s["ɵeld"](0, 0, null, null, 141, "div", [["class", "helvetica-neue-pandats"]], null, null, null, null, null)), (n()(),
            s["ɵted"](-1, null, ["\n    "])), (n()(),
            s["ɵeld"](2, 0, null, null, 0, "div", [["class", "backdrop-pandats"]], null, null, null, null, null)), (n()(),
            s["ɵted"](-1, null, ["\n    "])), (n()(),
            s["ɵeld"](4, 0, null, null, 136, "div", [["class", "popup-wrapper-pandats layout-column"]], [[24, "@fadeInOut", 0]], null, null, null, null)), (n()(),
            s["ɵted"](-1, null, ["\n\n        "])), (n()(),
            s["ɵeld"](6, 0, null, null, 6, "div", [["class", "title-popup-pandats layout-row just-end"]], null, null, null, null, null)), (n()(),
            s["ɵted"](-1, null, ["\n            "])), (n()(),
            s["ɵeld"](8, 0, null, null, 3, "div", [["class", "close-popup-pandats"]], null, [[null, "click"]], function(n, l, t) {
                var e = !0
                  , o = n.component;
                if ("click" === l) {
                    e = !1 !== o.closeLoginPopup() && e
                }
                return e
            }, null, null)), (n()(),
            s["ɵted"](-1, null, ["\n                "])), (n()(),
            s["ɵeld"](10, 0, null, null, 0, "i", [["class", "icon-pandats cmicon-cancel"]], null, null, null, null, null)), (n()(),
            s["ɵted"](-1, null, ["\n            "])), (n()(),
            s["ɵted"](-1, null, ["\n        "])), (n()(),
            s["ɵted"](-1, null, ["\n\n        "])), (n()(),
            s["ɵeld"](14, 0, null, null, 125, "div", [["class", "content-pandats layout-row"]], null, null, null, null, null)), (n()(),
            s["ɵted"](-1, null, ["\n            "])), (n()(),
            s["ɵeld"](16, 0, null, null, 122, "div", [["class", "layout-column"]], null, null, null, null, null)), (n()(),
            s["ɵted"](-1, null, ["\n\n                "])), (n()(),
            s["ɵeld"](18, 0, null, null, 1, "spinner", [], null, null, null, r.a, r.b)), s["ɵdid"](19, 114688, null, 0, d.a, [], {
                isShow: [0, "isShow"]
            }, null), (n()(),
            s["ɵted"](-1, null, ["\n\n                "])), (n()(),
            s["ɵeld"](21, 0, null, null, 1, "toast", [], null, null, null, c.a, c.b)), s["ɵdid"](22, 704512, null, 0, p.a, [], {
                content: [0, "content"],
                status: [1, "status"]
            }, null), (n()(),
            s["ɵted"](-1, null, ["\n\n                "])), (n()(),
            s["ɵeld"](24, 0, null, null, 5, "div", [["class", "popUpLogo-pandats"]], null, null, null, null, null)), (n()(),
            s["ɵted"](-1, null, ["\n                    "])), (n()(),
            s["ɵeld"](26, 0, null, null, 2, "div", [["class", "brand-logo-pandats"]], null, null, null, null, null)), s["ɵdid"](27, 278528, null, 0, g.NgStyle, [s.KeyValueDiffers, s.ElementRef, s.Renderer], {
                ngStyle: [0, "ngStyle"]
            }, null), s["ɵpod"](28, {
                "background-image": 0
            }), (n()(),
            s["ɵted"](-1, null, ["\n                "])), (n()(),
            s["ɵted"](-1, null, ["\n\n                "])), (n()(),
            s["ɵeld"](31, 0, null, null, 106, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function(n, l, t) {
                var e = !0;
                if ("submit" === l) {
                    e = !1 !== s["ɵnov"](n, 33).onSubmit(t) && e
                }
                if ("reset" === l) {
                    e = !1 !== s["ɵnov"](n, 33).onReset() && e
                }
                return e
            }, null, null)), s["ɵdid"](32, 16384, null, 0, v["ɵbf"], [], null, null), s["ɵdid"](33, 16384, [["form", 4]], 0, v.NgForm, [[8, null], [8, null]], null, null), s["ɵprd"](2048, null, v.ControlContainer, null, [v.NgForm]), s["ɵdid"](35, 16384, null, 0, v.NgControlStatusGroup, [v.ControlContainer], null, null), (n()(),
            s["ɵted"](-1, null, ["\n                    "])), (n()(),
            s["ɵeld"](37, 0, null, null, 19, "div", [["class", "group-pandats"]], null, null, null, null, null)), (n()(),
            s["ɵted"](-1, null, ["\n                        "])), (n()(),
            s["ɵeld"](39, 0, null, null, 1, "label", [["for", "forex-login"]], null, null, null, null, null)), (n()(),
            s["ɵted"](40, null, ["", ""])), (n()(),
            s["ɵted"](-1, null, ["\n                        "])), (n()(),
            s["ɵeld"](42, 0, null, null, 10, "input", [["class", "font-16-pandats"], ["id", "forex-login"], ["maxlength", "10"], ["minlength", "2"], ["name", "login"], ["pattern", "[0-9]+"], ["required", ""], ["type", "text"]], [[1, "required", 0], [1, "minlength", 0], [1, "maxlength", 0], [1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(n, l, t) {
                var e = !0
                  , o = n.component;
                if ("input" === l) {
                    e = !1 !== s["ɵnov"](n, 43)._handleInput(t.target.value) && e
                }
                if ("blur" === l) {
                    e = !1 !== s["ɵnov"](n, 43).onTouched() && e
                }
                if ("compositionstart" === l) {
                    e = !1 !== s["ɵnov"](n, 43)._compositionStart() && e
                }
                if ("compositionend" === l) {
                    e = !1 !== s["ɵnov"](n, 43)._compositionEnd(t.target.value) && e
                }
                if ("ngModelChange" === l) {
                    e = !1 !== (o.loginForm.login = t) && e
                }
                return e
            }, null, null)), s["ɵdid"](43, 16384, null, 0, v.DefaultValueAccessor, [s.Renderer2, s.ElementRef, [2, v.COMPOSITION_BUFFER_MODE]], null, null), s["ɵdid"](44, 16384, null, 0, v.RequiredValidator, [], {
                required: [0, "required"]
            }, null), s["ɵdid"](45, 540672, null, 0, v.MinLengthValidator, [], {
                minlength: [0, "minlength"]
            }, null), s["ɵdid"](46, 540672, null, 0, v.MaxLengthValidator, [], {
                maxlength: [0, "maxlength"]
            }, null), s["ɵdid"](47, 540672, null, 0, v.PatternValidator, [], {
                pattern: [0, "pattern"]
            }, null), s["ɵprd"](1024, null, v.NG_VALIDATORS, function(n, l, t, e) {
                return [n, l, t, e]
            }, [v.RequiredValidator, v.MinLengthValidator, v.MaxLengthValidator, v.PatternValidator]), s["ɵprd"](1024, null, v.NG_VALUE_ACCESSOR, function(n) {
                return [n]
            }, [v.DefaultValueAccessor]), s["ɵdid"](50, 671744, [["login", 4]], 0, v.NgModel, [[2, v.ControlContainer], [2, v.NG_VALIDATORS], [8, null], [2, v.NG_VALUE_ACCESSOR]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), s["ɵprd"](2048, null, v.NgControl, null, [v.NgModel]), s["ɵdid"](52, 16384, null, 0, v.NgControlStatus, [v.NgControl], null, null), (n()(),
            s["ɵted"](-1, null, ["\n                        "])), (n()(),
            s["ɵand"](16777216, null, null, 1, null, e)), s["ɵdid"](55, 16384, null, 0, g.NgIf, [s.ViewContainerRef, s.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            s["ɵted"](-1, null, ["\n                    "])), (n()(),
            s["ɵted"](-1, null, ["\n\n                    "])), (n()(),
            s["ɵeld"](58, 0, null, null, 23, "div", [["class", "group-pandats"]], null, null, null, null, null)), (n()(),
            s["ɵted"](-1, null, ["\n\n                        "])), (n()(),
            s["ɵeld"](60, 0, null, null, 1, "label", [["for", "forex-password"]], null, null, null, null, null)), (n()(),
            s["ɵted"](61, null, ["", ""])), (n()(),
            s["ɵted"](-1, null, ["\n                        "])), (n()(),
            s["ɵeld"](63, 0, null, null, 10, "input", [["id", "forex-password"], ["maxlength", "16"], ["minlength", "6"], ["name", "password"], ["passwordMix", ""], ["required", ""]], [[8, "type", 0], [1, "required", 0], [1, "minlength", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(n, l, t) {
                var e = !0
                  , o = n.component;
                if ("input" === l) {
                    e = !1 !== s["ɵnov"](n, 64)._handleInput(t.target.value) && e
                }
                if ("blur" === l) {
                    e = !1 !== s["ɵnov"](n, 64).onTouched() && e
                }
                if ("compositionstart" === l) {
                    e = !1 !== s["ɵnov"](n, 64)._compositionStart() && e
                }
                if ("compositionend" === l) {
                    e = !1 !== s["ɵnov"](n, 64)._compositionEnd(t.target.value) && e
                }
                if ("ngModelChange" === l) {
                    e = !1 !== (o.loginForm.password = t) && e
                }
                return e
            }, null, null)), s["ɵdid"](64, 16384, null, 0, v.DefaultValueAccessor, [s.Renderer2, s.ElementRef, [2, v.COMPOSITION_BUFFER_MODE]], null, null), s["ɵdid"](65, 16384, null, 0, v.RequiredValidator, [], {
                required: [0, "required"]
            }, null), s["ɵdid"](66, 540672, null, 0, v.MinLengthValidator, [], {
                minlength: [0, "minlength"]
            }, null), s["ɵdid"](67, 540672, null, 0, v.MaxLengthValidator, [], {
                maxlength: [0, "maxlength"]
            }, null), s["ɵdid"](68, 16384, null, 0, f.a, [], null, null), s["ɵprd"](1024, null, v.NG_VALIDATORS, function(n, l, t, e) {
                return [n, l, t, e]
            }, [v.RequiredValidator, v.MinLengthValidator, v.MaxLengthValidator, f.a]), s["ɵprd"](1024, null, v.NG_VALUE_ACCESSOR, function(n) {
                return [n]
            }, [v.DefaultValueAccessor]), s["ɵdid"](71, 671744, [["password", 4]], 0, v.NgModel, [[2, v.ControlContainer], [2, v.NG_VALIDATORS], [8, null], [2, v.NG_VALUE_ACCESSOR]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), s["ɵprd"](2048, null, v.NgControl, null, [v.NgModel]), s["ɵdid"](73, 16384, null, 0, v.NgControlStatus, [v.NgControl], null, null), (n()(),
            s["ɵted"](-1, null, ["\n                        "])), (n()(),
            s["ɵand"](16777216, null, null, 1, null, o)), s["ɵdid"](76, 16384, null, 0, g.NgIf, [s.ViewContainerRef, s.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            s["ɵted"](-1, null, ["\n                        "])), (n()(),
            s["ɵeld"](78, 0, null, null, 2, "i", [["class", "cmicon-pandats cmicon-eye"]], null, [[null, "click"]], function(n, l, t) {
                var e = !0
                  , o = n.component;
                if ("click" === l) {
                    e = !1 !== o.showPassword() && e
                }
                return e
            }, null, null)), s["ɵdid"](79, 278528, null, 0, g.NgClass, [s.IterableDiffers, s.KeyValueDiffers, s.ElementRef, s.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), s["ɵpod"](80, {
                active: 0
            }), (n()(),
            s["ɵted"](-1, null, ["\n                    "])), (n()(),
            s["ɵted"](-1, null, ["\n\n                    "])), (n()(),
            s["ɵeld"](83, 0, null, null, 35, "div", [["class", "group-pandats"]], null, null, null, null, null)), (n()(),
            s["ɵted"](-1, null, ["\n                        "])), (n()(),
            s["ɵeld"](85, 0, null, null, 1, "label", [], null, null, null, null, null)), (n()(),
            s["ɵted"](86, null, ["", ""])), (n()(),
            s["ɵted"](-1, null, ["\n                        "])), (n()(),
            s["ɵeld"](88, 0, null, null, 29, "div", [["class", "serverSelect"]], null, null, null, null, null)), (n()(),
            s["ɵted"](-1, null, ["\n                            "])), (n()(),
            s["ɵeld"](90, 0, null, null, 12, "div", [["class", "item"]], null, null, null, null, null)), (n()(),
            s["ɵted"](-1, null, ["\n                                "])), (n()(),
            s["ɵeld"](92, 0, null, null, 6, "input", [["id", "srLive"], ["name", "forex-server"], ["type", "radio"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function(n, l, t) {
                var e = !0
                  , o = n.component;
                if ("input" === l) {
                    e = !1 !== s["ɵnov"](n, 93)._handleInput(t.target.value) && e
                }
                if ("blur" === l) {
                    e = !1 !== s["ɵnov"](n, 93).onTouched() && e
                }
                if ("compositionstart" === l) {
                    e = !1 !== s["ɵnov"](n, 93)._compositionStart() && e
                }
                if ("compositionend" === l) {
                    e = !1 !== s["ɵnov"](n, 93)._compositionEnd(t.target.value) && e
                }
                if ("change" === l) {
                    e = !1 !== s["ɵnov"](n, 94).onChange() && e
                }
                if ("blur" === l) {
                    e = !1 !== s["ɵnov"](n, 94).onTouched() && e
                }
                if ("ngModelChange" === l) {
                    e = !1 !== (o.loginForm.live = t) && e
                }
                return e
            }, null, null)), s["ɵdid"](93, 16384, null, 0, v.DefaultValueAccessor, [s.Renderer2, s.ElementRef, [2, v.COMPOSITION_BUFFER_MODE]], null, null), s["ɵdid"](94, 212992, null, 0, v.RadioControlValueAccessor, [s.Renderer2, s.ElementRef, v["ɵi"], s.Injector], {
                name: [0, "name"],
                value: [1, "value"]
            }, null), s["ɵprd"](1024, null, v.NG_VALUE_ACCESSOR, function(n, l) {
                return [n, l]
            }, [v.DefaultValueAccessor, v.RadioControlValueAccessor]), s["ɵdid"](96, 671744, null, 0, v.NgModel, [[2, v.ControlContainer], [8, null], [8, null], [2, v.NG_VALUE_ACCESSOR]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), s["ɵprd"](2048, null, v.NgControl, null, [v.NgModel]), s["ɵdid"](98, 16384, null, 0, v.NgControlStatus, [v.NgControl], null, null), (n()(),
            s["ɵted"](-1, null, ["\n                                "])), (n()(),
            s["ɵeld"](100, 0, null, null, 1, "label", [["for", "srLive"]], null, null, null, null, null)), (n()(),
            s["ɵted"](101, null, ["", ""])), (n()(),
            s["ɵted"](-1, null, ["\n                            "])), (n()(),
            s["ɵted"](-1, null, ["\n                            "])), (n()(),
            s["ɵeld"](104, 0, null, null, 12, "div", [["class", "item"]], null, null, null, null, null)), (n()(),
            s["ɵted"](-1, null, ["\n                                "])), (n()(),
            s["ɵeld"](106, 0, null, null, 6, "input", [["id", "srDemo"], ["name", "forex-server"], ["type", "radio"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function(n, l, t) {
                var e = !0
                  , o = n.component;
                if ("input" === l) {
                    e = !1 !== s["ɵnov"](n, 107)._handleInput(t.target.value) && e
                }
                if ("blur" === l) {
                    e = !1 !== s["ɵnov"](n, 107).onTouched() && e
                }
                if ("compositionstart" === l) {
                    e = !1 !== s["ɵnov"](n, 107)._compositionStart() && e
                }
                if ("compositionend" === l) {
                    e = !1 !== s["ɵnov"](n, 107)._compositionEnd(t.target.value) && e
                }
                if ("change" === l) {
                    e = !1 !== s["ɵnov"](n, 108).onChange() && e
                }
                if ("blur" === l) {
                    e = !1 !== s["ɵnov"](n, 108).onTouched() && e
                }
                if ("ngModelChange" === l) {
                    e = !1 !== (o.loginForm.live = t) && e
                }
                return e
            }, null, null)), s["ɵdid"](107, 16384, null, 0, v.DefaultValueAccessor, [s.Renderer2, s.ElementRef, [2, v.COMPOSITION_BUFFER_MODE]], null, null), s["ɵdid"](108, 212992, null, 0, v.RadioControlValueAccessor, [s.Renderer2, s.ElementRef, v["ɵi"], s.Injector], {
                name: [0, "name"],
                value: [1, "value"]
            }, null), s["ɵprd"](1024, null, v.NG_VALUE_ACCESSOR, function(n, l) {
                return [n, l]
            }, [v.DefaultValueAccessor, v.RadioControlValueAccessor]), s["ɵdid"](110, 671744, null, 0, v.NgModel, [[2, v.ControlContainer], [8, null], [8, null], [2, v.NG_VALUE_ACCESSOR]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), s["ɵprd"](2048, null, v.NgControl, null, [v.NgModel]), s["ɵdid"](112, 16384, null, 0, v.NgControlStatus, [v.NgControl], null, null), (n()(),
            s["ɵted"](-1, null, ["\n                                "])), (n()(),
            s["ɵeld"](114, 0, null, null, 1, "label", [["for", "srDemo"]], null, null, null, null, null)), (n()(),
            s["ɵted"](115, null, ["", ""])), (n()(),
            s["ɵted"](-1, null, ["\n                            "])), (n()(),
            s["ɵted"](-1, null, ["\n                        "])), (n()(),
            s["ɵted"](-1, null, ["\n                    "])), (n()(),
            s["ɵted"](-1, null, ["\n                    "])), (n()(),
            s["ɵeld"](120, 0, null, null, 4, "div", [["class", "buttons-pandats"]], null, null, null, null, null)), (n()(),
            s["ɵted"](-1, null, ["\n                        "])), (n()(),
            s["ɵeld"](122, 0, null, null, 1, "button", [["class", "forex-button-pandats login-button-pandats accent"]], [[8, "disabled", 0]], [[null, "click"]], function(n, l, t) {
                var e = !0
                  , o = n.component;
                if ("click" === l) {
                    e = !1 !== o.submit() && e
                }
                return e
            }, null, null)), (n()(),
            s["ɵted"](123, null, ["\n                            ", "\n                        "])), (n()(),
            s["ɵted"](-1, null, ["\n                    "])), (n()(),
            s["ɵted"](-1, null, ["\n                    "])), (n()(),
            s["ɵeld"](126, 0, null, null, 4, "div", [["class", "signup-link-pandats"]], null, null, null, null, null)), (n()(),
            s["ɵted"](-1, null, ["\n                        "])), (n()(),
            s["ɵeld"](128, 0, null, null, 1, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (n()(),
            s["ɵted"](129, null, ["", ""])), (n()(),
            s["ɵted"](-1, null, ["\n                    "])), (n()(),
            s["ɵted"](-1, null, ["\n                    "])), (n()(),
            s["ɵeld"](132, 0, null, null, 4, "div", [["class", "signup-link-pandats"]], null, null, null, null, null)), (n()(),
            s["ɵted"](-1, null, ["\n                        "])), (n()(),
            s["ɵeld"](134, 0, null, null, 1, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (n()(),
            s["ɵted"](135, null, ["", ""])), (n()(),
            s["ɵted"](-1, null, ["\n                    "])), (n()(),
            s["ɵted"](-1, null, ["\n                "])), (n()(),
            s["ɵted"](-1, null, ["\n\n            "])), (n()(),
            s["ɵted"](-1, null, ["\n        "])), (n()(),
            s["ɵted"](-1, null, ["\n    "])), (n()(),
            s["ɵted"](-1, null, ["\n"])), (n()(),
            s["ɵted"](-1, null, ["\n"]))], function(n, l) {
                var t = l.component;
                n(l, 19, 0, t.showSpinner),
                n(l, 22, 0, t.toastContent, t.toastStatus),
                n(l, 27, 0, n(l, 28, 0, "url(/vendor/img/logos/" + t.brand + ".svg)")),
                n(l, 44, 0, ""),
                n(l, 45, 0, "2"),
                n(l, 46, 0, "10"),
                n(l, 47, 0, "[0-9]+"),
                n(l, 50, 0, "login", t.loginForm.login),
                n(l, 55, 0, s["ɵnov"](l, 50).errors && (s["ɵnov"](l, 50).dirty || s["ɵnov"](l, 50).touched) && !s["ɵnov"](l, 50).pristine),
                n(l, 65, 0, ""),
                n(l, 66, 0, "6"),
                n(l, 67, 0, "16"),
                n(l, 71, 0, "password", t.loginForm.password),
                n(l, 76, 0, s["ɵnov"](l, 71).errors && (s["ɵnov"](l, 71).dirty || s["ɵnov"](l, 71).touched) && !s["ɵnov"](l, 71).pristine),
                n(l, 79, 0, "cmicon-pandats cmicon-eye", n(l, 80, 0, "text" === t.loginForm.showPassword)),
                n(l, 94, 0, "forex-server", !0),
                n(l, 96, 0, "forex-server", t.loginForm.live),
                n(l, 108, 0, "forex-server", !1),
                n(l, 110, 0, "forex-server", t.loginForm.live)
            }, function(n, l) {
                var t = l.component;
                n(l, 4, 0, void 0),
                n(l, 31, 0, s["ɵnov"](l, 35).ngClassUntouched, s["ɵnov"](l, 35).ngClassTouched, s["ɵnov"](l, 35).ngClassPristine, s["ɵnov"](l, 35).ngClassDirty, s["ɵnov"](l, 35).ngClassValid, s["ɵnov"](l, 35).ngClassInvalid, s["ɵnov"](l, 35).ngClassPending),
                n(l, 40, 0, t.translation.accountId),
                n(l, 42, 1, [s["ɵnov"](l, 44).required ? "" : null, s["ɵnov"](l, 45).minlength ? s["ɵnov"](l, 45).minlength : null, s["ɵnov"](l, 46).maxlength ? s["ɵnov"](l, 46).maxlength : null, s["ɵnov"](l, 47).pattern ? s["ɵnov"](l, 47).pattern : null, s["ɵnov"](l, 52).ngClassUntouched, s["ɵnov"](l, 52).ngClassTouched, s["ɵnov"](l, 52).ngClassPristine, s["ɵnov"](l, 52).ngClassDirty, s["ɵnov"](l, 52).ngClassValid, s["ɵnov"](l, 52).ngClassInvalid, s["ɵnov"](l, 52).ngClassPending]),
                n(l, 61, 0, t.translation.password),
                n(l, 63, 1, [s["ɵinlineInterpolate"](1, "", t.loginForm.showPassword, ""), s["ɵnov"](l, 65).required ? "" : null, s["ɵnov"](l, 66).minlength ? s["ɵnov"](l, 66).minlength : null, s["ɵnov"](l, 67).maxlength ? s["ɵnov"](l, 67).maxlength : null, s["ɵnov"](l, 73).ngClassUntouched, s["ɵnov"](l, 73).ngClassTouched, s["ɵnov"](l, 73).ngClassPristine, s["ɵnov"](l, 73).ngClassDirty, s["ɵnov"](l, 73).ngClassValid, s["ɵnov"](l, 73).ngClassInvalid, s["ɵnov"](l, 73).ngClassPending]),
                n(l, 86, 0, t.translation.server),
                n(l, 92, 0, s["ɵnov"](l, 98).ngClassUntouched, s["ɵnov"](l, 98).ngClassTouched, s["ɵnov"](l, 98).ngClassPristine, s["ɵnov"](l, 98).ngClassDirty, s["ɵnov"](l, 98).ngClassValid, s["ɵnov"](l, 98).ngClassInvalid, s["ɵnov"](l, 98).ngClassPending),
                n(l, 101, 0, t.translation.live),
                n(l, 106, 0, s["ɵnov"](l, 112).ngClassUntouched, s["ɵnov"](l, 112).ngClassTouched, s["ɵnov"](l, 112).ngClassPristine, s["ɵnov"](l, 112).ngClassDirty, s["ɵnov"](l, 112).ngClassValid, s["ɵnov"](l, 112).ngClassInvalid, s["ɵnov"](l, 112).ngClassPending),
                n(l, 115, 0, t.translation.demo),
                n(l, 122, 0, !s["ɵnov"](l, 33).form.valid),
                n(l, 123, 0, t.translation.login),
                n(l, 128, 0, s["ɵinlineInterpolate"](1, "", t.constants.source.signupLive, "")),
                n(l, 129, 0, t.translation.new_live_account),
                n(l, 134, 0, s["ɵinlineInterpolate"](1, "", t.constants.source.signupDemo, "")),
                n(l, 135, 0, t.translation.new_demo_account)
            })
        }
        function u(n) {
            return s["ɵvid"](0, [(n()(),
            s["ɵeld"](0, 0, null, null, 1, "login-popup", [], null, null, null, i, b)), s["ɵdid"](1, 114688, null, 0, a.a, [h.a], null, null)], function(n, l) {
                n(l, 1, 0)
            }, null)
        }
        var s = t(2)
          , a = t(100)
          , r = t(73)
          , d = t(57)
          , c = t(130)
          , p = t(79)
          , g = t(4)
          , v = t(5)
          , f = t(205)
          , h = t(14);
        t.d(l, "b", function() {
            return b
        }),
        l.a = i;
        var m = []
          , b = s["ɵcrt"]({
            encapsulation: 2,
            styles: m,
            data: {
                animation: [{
                    type: 7,
                    name: "fadeInOut",
                    definitions: [{
                        type: 1,
                        expr: ":enter",
                        animation: [{
                            type: 6,
                            styles: {
                                opacity: 0
                            },
                            offset: null
                        }, {
                            type: 4,
                            styles: {
                                type: 6,
                                styles: {
                                    opacity: 1
                                },
                                offset: null
                            },
                            timings: 300
                        }],
                        options: null
                    }, {
                        type: 1,
                        expr: ":leave",
                        animation: [{
                            type: 4,
                            styles: {
                                type: 6,
                                styles: {
                                    opacity: 0
                                },
                                offset: null
                            },
                            timings: 300
                        }],
                        options: null
                    }],
                    options: {}
                }]
            }
        });
        s["ɵccf"]("login-popup", a.a, u, {
            toastContent: "toastContent",
            toastStatus: "toastStatus",
            loginRequest: "loginRequest"
        }, {
            isShow: "isShow",
            onSubmit: "onSubmit"
        }, [])
    },
    506: function(n, l, t) {
        "use strict";
        function e(n) {
            return a["ɵvid"](0, [(n()(),
            a["ɵeld"](0, 0, null, null, 1, "button-spinner", [], null, null, null, r.a, r.b)), a["ɵdid"](1, 114688, null, 0, d.a, [], null, null)], function(n, l) {
                n(l, 1, 0)
            }, null)
        }
        function o(n) {
            return a["ɵvid"](0, [(n()(),
            a["ɵeld"](0, 0, null, null, 2, "login-popup", [], null, [[null, "isShow"], [null, "onSubmit"]], function(n, l, t) {
                var e = !0
                  , o = n.component;
                if ("isShow" === l) {
                    e = !1 !== o.closeLoginPopup() && e
                }
                if ("onSubmit" === l) {
                    e = !1 !== o.login(t) && e
                }
                return e
            }, c.a, c.b)), a["ɵdid"](1, 114688, [[1, 4]], 0, p.a, [g.a], {
                toastContent: [0, "toastContent"],
                toastStatus: [1, "toastStatus"],
                loginRequest: [2, "loginRequest"]
            }, {
                isShow: "isShow",
                onSubmit: "onSubmit"
            }), (n()(),
            a["ɵted"](-1, null, ["\n            "]))], function(n, l) {
                var t = l.component;
                n(l, 1, 0, t.toast.content, t.toast.status, t.loginRequest)
            }, null)
        }
        function i(n) {
            return a["ɵvid"](0, [(n()(),
            a["ɵeld"](0, 0, null, null, 27, "div", [["class", "mainpandats logintop helvetica-neue-pandats layout-row full-height just-center"]], null, null, null, null, null)), (n()(),
            a["ɵted"](-1, null, ["\n    "])), (n()(),
            a["ɵeld"](2, 0, null, null, 24, "div", [["class", "layout-column centered-content menu-wrapper full-size"]], null, null, null, null, null)), (n()(),
            a["ɵted"](-1, null, ["\n        "])), (n()(),
            a["ɵeld"](4, 0, null, null, 10, "div", [], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            a["ɵted"](-1, null, ["\n            "])), (n()(),
            a["ɵeld"](6, 0, null, null, 4, "button", [["class", "forex-button-pandats simple-button-pandats spinner-button-pandats accent"]], null, [[null, "click"]], function(n, l, t) {
                var e = !0
                  , o = n.component;
                if ("click" === l) {
                    e = !1 !== o.showLoginPopup() && e
                }
                return e
            }, null, null)), (n()(),
            a["ɵted"](-1, null, ["\n                "])), (n()(),
            a["ɵand"](16777216, null, null, 1, null, e)), a["ɵdid"](9, 16384, null, 0, v.NgIf, [a.ViewContainerRef, a.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            a["ɵted"](10, null, ["\n                ", "\n            "])), (n()(),
            a["ɵted"](-1, null, ["\n            "])), (n()(),
            a["ɵand"](16777216, null, null, 1, null, o)), a["ɵdid"](13, 16384, null, 0, v.NgIf, [a.ViewContainerRef, a.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            a["ɵted"](-1, null, ["\n        "])), (n()(),
            a["ɵted"](-1, null, ["\n\n        "])), (n()(),
            a["ɵeld"](16, 0, null, null, 9, "div", [["class", "layout-row full-size"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            a["ɵted"](-1, null, ["\n            "])), (n()(),
            a["ɵeld"](18, 0, null, null, 6, "custom-select", [["name", "login-actions"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function(n, l, t) {
                var e = !0
                  , o = n.component;
                if ("ngModelChange" === l) {
                    e = !1 !== (o.currentMenuItem = t) && e
                }
                if ("ngModelChange" === l) {
                    e = !1 !== o.loginMenuChanged() && e
                }
                return e
            }, f.a, f.b)), a["ɵdid"](19, 245760, null, 0, h.a, [a.ElementRef, a.NgZone], {
                items: [0, "items"],
                config: [1, "config"]
            }, null), a["ɵprd"](1024, null, m.NG_VALUE_ACCESSOR, function(n) {
                return [n]
            }, [h.a]), a["ɵdid"](21, 671744, null, 0, m.NgModel, [[8, null], [8, null], [8, null], [2, m.NG_VALUE_ACCESSOR]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), a["ɵprd"](2048, null, m.NgControl, null, [m.NgModel]), a["ɵdid"](23, 16384, null, 0, m.NgControlStatus, [m.NgControl], null, null), (n()(),
            a["ɵted"](-1, null, ["\n            "])), (n()(),
            a["ɵted"](-1, null, ["\n        "])), (n()(),
            a["ɵted"](-1, null, ["\n    "])), (n()(),
            a["ɵted"](-1, null, ["\n\n"]))], function(n, l) {
                var t = l.component;
                n(l, 9, 0, t.loginBlocked),
                n(l, 13, 0, t.isShow),
                n(l, 19, 0, t.loginMenuActions, t.loginMenuConfig),
                n(l, 21, 0, "login-actions", t.currentMenuItem)
            }, function(n, l) {
                var t = l.component;
                n(l, 4, 0, t.user.loggedIn),
                n(l, 10, 0, t.translation.login),
                n(l, 16, 0, !t.user.loggedIn),
                n(l, 18, 0, a["ɵnov"](l, 23).ngClassUntouched, a["ɵnov"](l, 23).ngClassTouched, a["ɵnov"](l, 23).ngClassPristine, a["ɵnov"](l, 23).ngClassDirty, a["ɵnov"](l, 23).ngClassValid, a["ɵnov"](l, 23).ngClassInvalid, a["ɵnov"](l, 23).ngClassPending)
            })
        }
        function u(n) {
            return a["ɵvid"](0, [a["ɵqud"](671088640, 1, {
                loginPopup: 0
            }), a["ɵqud"](402653184, 2, {
                accountSelect: 0
            }), (n()(),
            a["ɵand"](16777216, null, null, 1, null, i)), a["ɵdid"](3, 16384, null, 0, v.NgIf, [a.ViewContainerRef, a.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            a["ɵted"](-1, null, ["\n"]))], function(n, l) {
                n(l, 3, 0, l.component.status)
            }, null)
        }
        function s(n) {
            return a["ɵvid"](0, [(n()(),
            a["ɵeld"](0, 0, null, null, 1, "panda-forex-login", [], null, null, null, u, R)), a["ɵdid"](1, 245760, null, 0, b.a, [a.NgZone, S.WPIntegrationService, a.ElementRef, C.WindowRef, y.i], null, null)], function(n, l) {
                n(l, 1, 0)
            }, null)
        }
        var a = t(2)
          , r = t(520)
          , d = t(150)
          , c = t(505)
          , p = t(100)
          , g = t(14)
          , v = t(4)
          , f = t(72)
          , h = t(56)
          , m = t(5)
          , b = t(137)
          , S = t(44)
          , C = t(25)
          , y = t(28);
        t.d(l, "a", function() {
            return A
        });
        var w = []
          , R = a["ɵcrt"]({
            encapsulation: 2,
            styles: w,
            data: {}
        })
          , A = a["ɵccf"]("panda-forex-login", b.a, s, {}, {}, [])
    },
    520: function(n, l, t) {
        "use strict";
        function e(n) {
            return i["ɵvid"](0, [(n()(),
            i["ɵeld"](0, 0, null, null, 20, "div", [["class", "button-spinner-pandats"]], null, null, null, null, null)), (n()(),
            i["ɵted"](-1, null, ["\n        "])), (n()(),
            i["ɵeld"](2, 0, null, null, 17, "div", [["id", "circularG-pandats"]], null, null, null, null, null)), (n()(),
            i["ɵted"](-1, null, ["\n            "])), (n()(),
            i["ɵeld"](4, 0, null, null, 0, "div", [["class", "circularG-pandats"], ["id", "circularG_1-pandats"]], null, null, null, null, null)), (n()(),
            i["ɵted"](-1, null, ["\n            "])), (n()(),
            i["ɵeld"](6, 0, null, null, 0, "div", [["class", "circularG-pandats"], ["id", "circularG_2-pandats"]], null, null, null, null, null)), (n()(),
            i["ɵted"](-1, null, ["\n            "])), (n()(),
            i["ɵeld"](8, 0, null, null, 0, "div", [["class", "circularG-pandats"], ["id", "circularG_3-pandats"]], null, null, null, null, null)), (n()(),
            i["ɵted"](-1, null, ["\n            "])), (n()(),
            i["ɵeld"](10, 0, null, null, 0, "div", [["class", "circularG-pandats"], ["id", "circularG_4-pandats"]], null, null, null, null, null)), (n()(),
            i["ɵted"](-1, null, ["\n            "])), (n()(),
            i["ɵeld"](12, 0, null, null, 0, "div", [["class", "circularG-pandats"], ["id", "circularG_5-pandats"]], null, null, null, null, null)), (n()(),
            i["ɵted"](-1, null, ["\n            "])), (n()(),
            i["ɵeld"](14, 0, null, null, 0, "div", [["class", "circularG-pandats"], ["id", "circularG_6-pandats"]], null, null, null, null, null)), (n()(),
            i["ɵted"](-1, null, ["\n            "])), (n()(),
            i["ɵeld"](16, 0, null, null, 0, "div", [["class", "circularG-pandats"], ["id", "circularG_7-pandats"]], null, null, null, null, null)), (n()(),
            i["ɵted"](-1, null, ["\n            "])), (n()(),
            i["ɵeld"](18, 0, null, null, 0, "div", [["class", "circularG-pandats"], ["id", "circularG_8-pandats"]], null, null, null, null, null)), (n()(),
            i["ɵted"](-1, null, ["\n        "])), (n()(),
            i["ɵted"](-1, null, ["\n    "]))], null, null)
        }
        function o(n) {
            return i["ɵvid"](0, [(n()(),
            i["ɵeld"](0, 0, null, null, 1, "button-spinner", [], null, null, null, e, a)), i["ɵdid"](1, 114688, null, 0, u.a, [], null, null)], function(n, l) {
                n(l, 1, 0)
            }, null)
        }
        var i = t(2)
          , u = t(150);
        t.d(l, "b", function() {
            return a
        }),
        l.a = e;
        var s = []
          , a = i["ɵcrt"]({
            encapsulation: 2,
            styles: s,
            data: {}
        });
        i["ɵccf"]("button-spinner", u.a, o, {
            isShow: "isShow"
        }, {}, [])
    },
    526: function(n, l, t) {
        "use strict";
        var e = t(13)
          , o = t(2)
          , i = t(5)
          , u = t(28)
          , s = t(137)
          , a = t(100)
          , r = t(201)
          , d = t(17)
          , c = t(63)
          , p = t(25)
          , g = t(44)
          , v = t(54);
        t.n(v);
        t.d(l, "a", function() {
            return m
        });
        var f = this && this.__decorate || function(n, l, t, e) {
            var o, i = arguments.length, u = i < 3 ? l : null === e ? e = Object.getOwnPropertyDescriptor(l, t) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                u = Reflect.decorate(n, l, t, e);
            else
                for (var s = n.length - 1; s >= 0; s--)
                    (o = n[s]) && (u = (i < 3 ? o(u) : i > 3 ? o(l, t, u) : o(l, t)) || u);
            return i > 3 && u && Object.defineProperty(l, t, u),
            u
        }
          , h = {
            suppressScrollX: !0
        }
          , m = function() {
            function n() {}
            return n = f([t.i(o.NgModule)({
                declarations: [s.a, a.a, r.a],
                imports: [e.r, i.FormsModule, u.k, d.HelperComponentsModule, v.PerfectScrollbarModule.forRoot(h)],
                providers: [p.WindowRef, {
                    provide: o.ErrorHandler,
                    useClass: c.AppErrorHandler
                }, g.WPIntegrationService],
                bootstrap: [s.a]
            })], n)
        }()
    },
    616: function(n, l) {
        n.exports = '<div class=helvetica-neue-pandats> <div class=backdrop-pandats></div> <div class=popup-wrapper-pandats> <spinner [isshow]=showSpinner></spinner> <toast [content]=toastContent [status]=toastStatus></toast> <div class="close-pandats cmicon-close4" (click)=close()></div> <div class=content-pandats> <div class=title-pandats>{{translation.please_select_account}}</div> <perfect-scrollbar> <div class=tbody-wrap-pandats> <ul *ngif="accounts.length > 0"> <li *ngfor="let account of accounts" class=account-pandats (click)=accountSelect(account)> <div class=account-wrapper-pandats> <div class="account-title-pandats helvetica-neue-pandats"> #{{account.login}} </div> <hr> <div class=account-details-pandats> <div class="tr-row-pandats account-titles-pandats"> <div>{{translation.balance}}</div> <div>{{translation.equity}}</div> <div>{{translation.available}}</div> </div> <div class="tr-row-pandats account-data-pandats"> <div>{{account.balance | currency:account.currency:true}}</div> <div>{{account.equity | currency:account.currency:true}}</div> <div>{{account.freeMargin | currency:account.currency:true}}</div> </div> </div> <div class=accountType-pandats> <span [ngclass]="{\'live-pandats\': account.live === 1, \'demo-pandats\': account.live === 0}"> {{ account.live === 1? translation.live : translation.demo}} </span> </div> </div> </li> </ul> </div> </perfect-scrollbar> </div> </div> </div> '
    },
    617: function(n, l) {
        n.exports = '<div class=helvetica-neue-pandats> <div class=backdrop-pandats></div> <div class="popup-wrapper-pandats layout-column" [@fadeinout]> <div class="title-popup-pandats layout-row just-end"> <div class=close-popup-pandats (click)=closeLoginPopup()> <i class="icon-pandats cmicon-cancel"></i> </div> </div> <div class="content-pandats layout-row"> <div class=layout-column> <spinner [isshow]=showSpinner></spinner> <toast [content]=toastContent [status]=toastStatus></toast> <div class=popUpLogo-pandats> <div class=brand-logo-pandats [ngstyle]="{\'background-image\': \'url(/vendor/img/logos/\'+brand+\'.svg)\'}"></div> </div> <form #form=ngForm novalidate> <div class=group-pandats> <label for=forex-login>{{translation.accountId}}</label> <input class=font-16-pandats type=text name=login id=forex-login #login=ngModel [(ngmodel)]=loginForm.login required minlength=2 maxlength=10 pattern=[0-9]+> <div *ngif="login.errors && (login.dirty || login.touched) && !login.pristine" class=validation-error-pandats> <div [hidden]=!login.errors.required> {{translation.messages.loginRequired}} </div> <div [hidden]=!login.errors.minlength> {{translation.messages.loginMinlength}} </div> <div [hidden]=!login.errors.maxlength> {{translation.messages.loginMaxlength}} </div> <div [hidden]=!login.errors.pattern> {{translation.messages.numbers}} </div> </div> </div> <div class=group-pandats> <label for=forex-password>{{translation.password}}</label> <input type={{loginForm.showPassword}} name=password id=forex-password #password=ngModel [(ngmodel)]=loginForm.password required minlength=6 maxlength=16 passwordmix> <div *ngif="password.errors && (password.dirty || password.touched) && !password.pristine" class=validation-error-pandats> <div [hidden]=!password.errors.required> {{translation.messages.passwordRequired}} </div> <div [hidden]=!password.errors.minlength> {{translation.messages.passwordMinlength}} </div> <div [hidden]=!password.errors.maxlength> {{translation.messages.passwordMaxlength}} </div> <div [hidden]=!password.errors.passwordMix> {{translation.messages.numbers_chars}} </div> </div> <i class="cmicon-pandats cmicon-eye" (click)=showPassword() [ngclass]="{active:loginForm.showPassword===\'text\'}"></i> </div> <div class=group-pandats> <label>{{translation.server}}</label> <div class=serverSelect> <div class=item> <input type=radio name=forex-server id=srLive [(ngmodel)]=loginForm.live [value]=true> <label for=srLive>{{translation.live}}</label> </div> <div class=item> <input type=radio name=forex-server id=srDemo [(ngmodel)]=loginForm.live [value]=false> <label for=srDemo>{{translation.demo}}</label> </div> </div> </div> <div class=buttons-pandats> <button (click)=submit() [disabled]=!form.form.valid class="forex-button-pandats login-button-pandats accent"> {{translation.login}} </button> </div> <div class=signup-link-pandats> <a href={{constants.source.signupLive}} target=_blank>{{translation.new_live_account}}</a> </div> <div class=signup-link-pandats> <a href={{constants.source.signupDemo}} target=_blank>{{translation.new_demo_account}}</a> </div> </form> </div> </div> </div> </div> '
    },
    618: function(n, l) {
        n.exports = '<div *ngif=status class="mainpandats logintop helvetica-neue-pandats layout-row full-height just-center"> <div class="layout-column centered-content menu-wrapper full-size"> <div [hidden]=user.loggedIn> <button (click)=showLoginPopup() class="forex-button-pandats simple-button-pandats spinner-button-pandats accent"> <button-spinner *ngif=loginBlocked></button-spinner> {{translation.login}} </button> <login-popup *ngif=isShow (isshow)=closeLoginPopup() (onsubmit)=login($event) [toastcontent]=toast.content [toaststatus]=toast.status [loginrequest]=loginRequest> </login-popup> </div> <div class="layout-row full-size" [hidden]=!user.loggedIn> <custom-select name=login-actions [items]=loginMenuActions [config]=loginMenuConfig [(ngmodel)]=currentMenuItem (ngmodelchange)=loginMenuChanged()> </custom-select> </div> </div> </div> '
    },
    958: function(n, l, t) {
        "use strict";
        Object.defineProperty(l, "__esModule", {
            value: !0
        });
        var e = t(20)
          , o = t(486);
        t.i(e.a)().bootstrapModuleFactory(o.a)
    }
}, [958]);
