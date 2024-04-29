webpackJsonp([8], {
    132: function(e, t, n) {
        "use strict";
        var u = n(2)
          , l = n(8)
          , i = n(11)
          , r = n(27)
          , s = n(15)
          , o = n(33)
          , c = n(9);
        n.d(t, "a", function() {
            return p
        });
        var a = this && this.__decorate || function(e, t, n, u) {
            var l, i = arguments.length, r = i < 3 ? t : null === u ? u = Object.getOwnPropertyDescriptor(t, n) : u;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, n, u);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (l = e[s]) && (r = (i < 3 ? l(r) : i > 3 ? l(t, n, r) : l(t, n)) || r);
            return i > 3 && r && Object.defineProperty(t, n, r),
            r
        }
          , d = this && this.__metadata || function(e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
          , p = function() {
            function e(e) {
                this.zone = e,
                this.stateService = l.stateService,
                this.settingsService = i.settingsService,
                this.api = r.api,
                this.userService = s.userService,
                this.isShow = !1,
                this.isMenuShow = !1,
                this.status = !1,
                this.pnlData = {
                    freeMargin: 0,
                    totalProfit: 0,
                    netPl: 0,
                    equity: 0
                },
                this.accountListHeight = 1,
                this.userInitials = ""
            }
            return e.prototype.ngOnInit = function() {
                var e = this;
                this.appSubscribe = this.stateService.get("app").filter(function(e) {
                    return !!e
                }).subscribe(function() {
                    e.zone.run(function() {
                        e.status = !0,
                        e.translation = e.settingsService.get("translation"),
                        e.user = e.userService.get(),
                        e.getUserInitials(),
                        e.initComponent()
                    })
                }),
                this.langSubscribe = this.stateService.get("lang").subscribe(function() {
                    e.zone.run(function() {
                        e.translation = e.settingsService.get("translation")
                    })
                })
            }
            ,
            e.prototype.initComponent = function() {
                var e = this;
                this.accountType = this.userService.getAccoutnType(),
                this.userSubscribe = this.stateService.get("user").distinctUntilChanged().filter(function(e) {
                    return !!e
                }).subscribe(function() {
                    return e.zone.run(function() {
                        e.user = e.userService.get(),
                        e.accountType = e.userService.getAccoutnType(),
                        e.calcAccountListHeight(),
                        e.getUserInitials()
                    })
                }),
                this.userDetailsSubscribe = this.stateService.getOnce("userUpdate").subscribe(function() {
                    return e.zone.run(function() {
                        e.user = e.userService.get(),
                        e.calcAccountListHeight(),
                        e.getUserInitials()
                    })
                }),
                this.userAccountSubscribe = this.stateService.getOnce("switchAccount").subscribe(function() {
                    return e.zone.run(function() {
                        e.user = e.userService.get(),
                        e.calcAccountListHeight(),
                        e.getUserInitials()
                    })
                }),
                this.pnlSubscribe = this.stateService.getOnce("pnlData").filter(function(e) {
                    return !!e
                }).subscribe(function(t) {
                    return e.zone.run(function() {
                        return e.pnlData = t
                    })
                }),
                this.newAccountSubscribe = this.stateService.getOnce("newAccount").subscribe(function() {
                    e.user = e.userService.get(),
                    e.calcAccountListHeight(),
                    e.getUserInitials()
                })
            }
            ,
            e.prototype.ngOnDestroy = function() {
                this.appSubscribe && this.appSubscribe.unsubscribe(),
                this.userSubscribe && this.userSubscribe.unsubscribe(),
                this.userDetailsSubscribe && this.userDetailsSubscribe.unsubscribe(),
                this.userAccountSubscribe && this.userAccountSubscribe.unsubscribe(),
                this.newAccountSubscribe && this.newAccountSubscribe.unsubscribe(),
                this.langSubscribe && this.langSubscribe.unsubscribe()
            }
            ,
            e.prototype.calcAccountListHeight = function() {}
            ,
            e.prototype.getUserInitials = function() {
                this.userInitials = this.user.fullName.split(" ").reduce(function(e, t) {
                    return e += t[0]
                }, "").toUpperCase()
            }
            ,
            e.prototype.showDeposit = function() {
                var e = this;
                this.stateService.setOnce("forexDeposit", {}),
                setTimeout(function() {
                    return e.isShow = !1
                }, 0)
            }
            ,
            e.prototype.addAccount = function() {
                var e = this;
                if (this.user.registrationState >= c.Constants.userState.questionnaire)
                    return this.stateService.setOnce("forexClientArea", {
                        route: "manage"
                    });
                this.stateService.setOnce("addTradingAccount", {}),
                setTimeout(function() {
                    return e.isShow = !1
                }, 0)
            }
            ,
            e.prototype.logout = function() {
                var e = this;
                this.stateService.setOnce("logout", {}),
                setTimeout(function() {
                    return e.isShow = !1
                }, 0)
            }
            ,
            e.prototype.activate = function(e) {
                var t = this;
                return "logout" === e.event ? this.logout() : this.user.registrationState < c.Constants.userState.questionnaire ? this.addAccount() : (e.event.length > 0 ? this.stateService.setOnce(e.event, {}) : this.stateService.setOnce("forexClientArea", {
                    route: e.route
                }),
                void setTimeout(function() {
                    return t.isMenuShow = !1
                }, 0))
            }
            ,
            e.prototype.checkResponse = function(e, t) {
                if (1 !== e.status)
                    throw new o.AppError({
                        source: "AccountsComponent",
                        type: c.Constants.error.type.VALIDATION,
                        severity: "info",
                        code: e.code.toString() || "mt4AuthFailed",
                        message: "",
                        data: {
                            response: e,
                            request: t
                        }
                    });
                return e
            }
            ,
            e.prototype.switchAccount = function(e, t) {}
            ,
            e = a([n.i(u.Component)({
                selector: "panda-forex-accounts",
                template: n(611)
            }), d("design:paramtypes", [u.NgZone])], e)
        }()
    },
    482: function(e, t, n) {
        "use strict";
        var u = n(2)
          , l = n(522)
          , i = n(132)
          , r = n(500)
          , s = n(4)
          , o = n(13)
          , c = n(40)
          , a = n(36)
          , d = n(5)
          , p = n(28)
          , f = n(35)
          , m = n(18)
          , h = (n.n(m),
        n(41))
          , b = (n.n(h),
        n(14))
          , g = n(31)
          , v = (n.n(g),
        n(17));
        n.d(t, "a", function() {
            return S
        });
        var S = u["ɵcmf"](l.a, [i.a], function(e) {
            return u["ɵmod"]([u["ɵmpd"](512, u.ComponentFactoryResolver, u["ɵCodegenComponentFactoryResolver"], [[8, [r.a]], [3, u.ComponentFactoryResolver], u.NgModuleRef]), u["ɵmpd"](5120, u.LOCALE_ID, u["ɵm"], [[3, u.LOCALE_ID]]), u["ɵmpd"](4608, s.NgLocalization, s.NgLocaleLocalization, [u.LOCALE_ID]), u["ɵmpd"](4608, u.Compiler, u.Compiler, []), u["ɵmpd"](5120, u.APP_ID, u["ɵf"], []), u["ɵmpd"](5120, u.IterableDiffers, u["ɵk"], []), u["ɵmpd"](5120, u.KeyValueDiffers, u["ɵl"], []), u["ɵmpd"](4608, o.a, o.b, [s.DOCUMENT]), u["ɵmpd"](6144, u.Sanitizer, null, [o.a]), u["ɵmpd"](4608, o.c, o.d, []), u["ɵmpd"](5120, o.e, function(e, t, n, u) {
                return [new o.f(e), new o.g(t), new o.h(n,u)]
            }, [s.DOCUMENT, s.DOCUMENT, s.DOCUMENT, o.c]), u["ɵmpd"](4608, o.i, o.i, [o.e, u.NgZone]), u["ɵmpd"](135680, o.j, o.j, [s.DOCUMENT]), u["ɵmpd"](4608, o.k, o.k, [o.i, o.j]), u["ɵmpd"](5120, c.a, a.a, []), u["ɵmpd"](5120, c.b, a.b, []), u["ɵmpd"](4608, c.c, a.c, [c.a, c.b]), u["ɵmpd"](5120, u.RendererFactory2, a.d, [o.k, c.c, u.NgZone]), u["ɵmpd"](6144, o.l, null, [o.j]), u["ɵmpd"](4608, u.Testability, u.Testability, [u.NgZone]), u["ɵmpd"](4608, o.m, o.m, [s.DOCUMENT]), u["ɵmpd"](4608, o.n, o.n, [s.DOCUMENT]), u["ɵmpd"](4608, d["ɵi"], d["ɵi"], []), u["ɵmpd"](4608, p.a, p.a, []), u["ɵmpd"](4608, p.b, p.c, []), u["ɵmpd"](5120, p.d, p.e, []), u["ɵmpd"](4608, p.f, p.f, [p.a, p.b, p.d]), u["ɵmpd"](4608, p.g, p.h, []), u["ɵmpd"](5120, p.i, p.j, [p.f, p.g]), u["ɵmpd"](4608, f.a, a.e, [u.RendererFactory2, o.o]), u["ɵmpd"](5120, m.PerfectScrollbarConfig, h.provideDefaultConfig, [h.PERFECT_SCROLLBAR_CONFIG]), u["ɵmpd"](4608, b.a, b.a, []), u["ɵmpd"](512, s.CommonModule, s.CommonModule, []), u["ɵmpd"](1024, u.ErrorHandler, o.u, []), u["ɵmpd"](1024, u.APP_INITIALIZER, function(e, t) {
                return [o.p(e, t)]
            }, [[2, o.q], [2, u.NgProbeToken]]), u["ɵmpd"](512, u.ApplicationInitStatus, u.ApplicationInitStatus, [[2, u.APP_INITIALIZER]]), u["ɵmpd"](131584, u["ɵe"], u["ɵe"], [u.NgZone, u["ɵConsole"], u.Injector, u.ErrorHandler, u.ComponentFactoryResolver, u.ApplicationInitStatus]), u["ɵmpd"](2048, u.ApplicationRef, null, [u["ɵe"]]), u["ɵmpd"](512, u.ApplicationModule, u.ApplicationModule, [u.ApplicationRef]), u["ɵmpd"](512, o.r, o.r, [[3, o.r]]), u["ɵmpd"](512, d["ɵba"], d["ɵba"], []), u["ɵmpd"](512, d.FormsModule, d.FormsModule, []), u["ɵmpd"](512, p.k, p.k, []), u["ɵmpd"](1024, h.PERFECT_SCROLLBAR_GUARD, h.provideForRootGuard, [[3, m.PerfectScrollbarConfig]]), u["ɵmpd"](512, h.PerfectScrollbarModule, h.PerfectScrollbarModule, [[2, h.PERFECT_SCROLLBAR_GUARD]]), u["ɵmpd"](512, a.f, a.f, []), u["ɵmpd"](512, g.TextMaskModule, g.TextMaskModule, []), u["ɵmpd"](512, v.HelperComponentsModule, v.HelperComponentsModule, []), u["ɵmpd"](512, l.a, l.a, []), u["ɵmpd"](256, h.PERFECT_SCROLLBAR_CONFIG, {
                suppressScrollX: !0
            }, [])])
        })
    },
    500: function(e, t, n) {
        "use strict";
        function u(e) {
            return r["ɵvid"](0, [(e()(),
            r["ɵeld"](0, 0, null, null, 24, "div", [["class", "mainpandats wrapper-pandats helvetica-neue-pandats"]], null, null, null, null, null)), (e()(),
            r["ɵted"](-1, null, ["\n\n    "])), (e()(),
            r["ɵeld"](2, 0, null, null, 20, "div", [["class", "layout-row full-width"]], null, null, null, null, null)), (e()(),
            r["ɵted"](-1, null, ["\n        "])), (e()(),
            r["ɵeld"](4, 0, null, null, 7, "div", [["class", "layout-column centered-content"]], null, null, null, null, null)), (e()(),
            r["ɵted"](-1, null, ["\n            "])), (e()(),
            r["ɵeld"](6, 0, null, null, 4, "div", [["class", "userInitials layout-row"]], null, null, null, null, null)), (e()(),
            r["ɵted"](-1, null, ["\n                "])), (e()(),
            r["ɵeld"](8, 0, null, null, 1, "div", [["class", "layout-column full-width centered-content"]], null, null, null, null, null)), (e()(),
            r["ɵted"](9, null, ["\n                    ", "\n                "])), (e()(),
            r["ɵted"](-1, null, ["\n            "])), (e()(),
            r["ɵted"](-1, null, ["\n        "])), (e()(),
            r["ɵted"](-1, null, ["\n        "])), (e()(),
            r["ɵeld"](13, 0, null, null, 7, "div", [["class", "user-name-pandats layout-column centered-content"]], null, null, null, null, null)), (e()(),
            r["ɵted"](-1, null, ["\n            "])), (e()(),
            r["ɵeld"](15, 0, null, null, 1, "span", [["class", "font14-pandats"]], null, null, null, null, null)), (e()(),
            r["ɵted"](16, null, ["", ""])), (e()(),
            r["ɵted"](-1, null, ["\n            "])), (e()(),
            r["ɵeld"](18, 0, null, null, 1, "span", [["class", "font10-pandats"]], null, null, null, null, null)), (e()(),
            r["ɵted"](19, null, ["", ""])), (e()(),
            r["ɵted"](-1, null, ["\n        "])), (e()(),
            r["ɵted"](-1, null, ["\n"])), (e()(),
            r["ɵted"](-1, null, ["\n    "])), (e()(),
            r["ɵted"](-1, null, ["\n\n\n"])), (e()(),
            r["ɵted"](-1, null, ["\n"]))], null, function(e, t) {
                var n = t.component;
                e(t, 9, 0, n.userInitials),
                e(t, 16, 0, n.user.fullName),
                e(t, 19, 0, n.user.login)
            })
        }
        function l(e) {
            return r["ɵvid"](0, [(e()(),
            r["ɵand"](16777216, null, null, 1, null, u)), r["ɵdid"](1, 16384, null, 0, s.NgIf, [r.ViewContainerRef, r.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (e()(),
            r["ɵted"](-1, null, ["\n"]))], function(e, t) {
                var n = t.component;
                e(t, 1, 0, n.user && n.user.loggedIn)
            }, null)
        }
        function i(e) {
            return r["ɵvid"](0, [(e()(),
            r["ɵeld"](0, 0, null, null, 1, "panda-forex-accounts", [], null, null, null, l, a)), r["ɵdid"](1, 245760, null, 0, o.a, [r.NgZone], null, null)], function(e, t) {
                e(t, 1, 0)
            }, null)
        }
        var r = n(2)
          , s = n(4)
          , o = n(132);
        n.d(t, "a", function() {
            return d
        });
        var c = []
          , a = r["ɵcrt"]({
            encapsulation: 2,
            styles: c,
            data: {}
        })
          , d = r["ɵccf"]("panda-forex-accounts", o.a, i, {}, {}, [])
    },
    522: function(e, t, n) {
        "use strict";
        var u = n(13)
          , l = n(2)
          , i = n(5)
          , r = n(28)
          , s = n(54)
          , o = (n.n(s),
        n(132))
          , c = n(17);
        n.d(t, "a", function() {
            return p
        });
        var a = this && this.__decorate || function(e, t, n, u) {
            var l, i = arguments.length, r = i < 3 ? t : null === u ? u = Object.getOwnPropertyDescriptor(t, n) : u;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, n, u);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (l = e[s]) && (r = (i < 3 ? l(r) : i > 3 ? l(t, n, r) : l(t, n)) || r);
            return i > 3 && r && Object.defineProperty(t, n, r),
            r
        }
          , d = {
            suppressScrollX: !0
        }
          , p = function() {
            function e() {}
            return e = a([n.i(l.NgModule)({
                declarations: [o.a],
                imports: [u.r, i.FormsModule, r.k, s.PerfectScrollbarModule.forRoot(d), c.HelperComponentsModule],
                providers: [],
                bootstrap: [o.a]
            })], e)
        }()
    },
    611: function(e, t) {
        e.exports = '<div class="mainpandats wrapper-pandats helvetica-neue-pandats" *ngif="user && user.loggedIn"> <div class="layout-row full-width"> <div class="layout-column centered-content"> <div class="userInitials layout-row"> <div class="layout-column full-width centered-content"> {{userInitials}} </div> </div> </div> <div class="user-name-pandats layout-column centered-content"> <span class=font14-pandats>{{user.fullName}}</span> <span class=font10-pandats>{{user.login}}</span> </div> </div> </div> '
    },
    954: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = n(20)
          , l = n(482);
        n.i(u.a)().bootstrapModuleFactory(l.a)
    }
}, [954]);
