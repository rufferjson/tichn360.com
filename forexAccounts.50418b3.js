webpackJsonp([9], {
    131: function(n, l, t) {
        "use strict";
        var e = t(2)
          , u = t(8)
          , a = t(11)
          , r = t(15);
        t.d(l, "a", function() {
            return i
        });
        var o = this && this.__decorate || function(n, l, t, e) {
            var u, a = arguments.length, r = a < 3 ? l : null === e ? e = Object.getOwnPropertyDescriptor(l, t) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(n, l, t, e);
            else
                for (var o = n.length - 1; o >= 0; o--)
                    (u = n[o]) && (r = (a < 3 ? u(r) : a > 3 ? u(l, t, r) : u(l, t)) || r);
            return a > 3 && r && Object.defineProperty(l, t, r),
            r
        }
          , s = this && this.__metadata || function(n, l) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, l)
        }
          , i = function() {
            function n(n) {
                var l = this;
                this.zone = n,
                this.stateService = u.stateService,
                this.settingsService = a.settingsService,
                this.userService = r.userService,
                this.pnlData = {
                    freeMargin: 0,
                    totalProfit: 0,
                    netPl: 0,
                    equity: 0,
                    pnl: 0
                },
                this.marginLevel = 0,
                console.log("account status component init"),
                this.translation = this.settingsService.get("translation"),
                this.langSubscribe = this.stateService.get("lang").subscribe(function() {
                    l.zone.run(function() {
                        l.translation = l.settingsService.get("translation")
                    })
                })
            }
            return n.prototype.ngOnInit = function() {
                var n = this;
                this.appSubscribe = this.stateService.get("app").filter(function(n) {
                    return !!n
                }).subscribe(function() {
                    n.zone.run(function() {
                        n.user = n.userService.get(),
                        n.initComponent()
                    })
                })
            }
            ,
            n.prototype.initComponent = function() {
                var n = this;
                this.userSubscribe = this.stateService.get("user").distinctUntilChanged().filter(function(n) {
                    return !!n
                }).subscribe(function(l) {
                    return n.zone.run(function() {
                        return n.user = n.userService.get()
                    })
                }),
                this.pnlSubscribe = this.stateService.get("pnlData").filter(function(n) {
                    return !!n
                }).subscribe(function(l) {
                    return n.zone.run(function() {
                        n.pnlData = l,
                        n.marginLevel = n.calcMarginLevel()
                    })
                })
            }
            ,
            n.prototype.calcMarginLevel = function() {
                var n = this.user.margin;
                return n > 0 ? this.pnlData.equity / n * 100 : 0
            }
            ,
            n.prototype.ngOnDestroy = function() {
                this.appSubscribe && this.appSubscribe.unsubscribe(),
                this.userSubscribe && this.userSubscribe.unsubscribe(),
                this.pnlSubscribe && this.pnlSubscribe.unsubscribe(),
                this.langSubscribe && this.langSubscribe.unsubscribe()
            }
            ,
            n = o([t.i(e.Component)({
                selector: "panda-forex-account-status",
                template: t(610)
            }), s("design:paramtypes", [e.NgZone])], n)
        }()
    },
    481: function(n, l, t) {
        "use strict";
        var e = t(2)
          , u = t(521)
          , a = t(131)
          , r = t(499)
          , o = t(4)
          , s = t(13)
          , i = t(40)
          , c = t(36)
          , d = t(5)
          , p = t(28)
          , f = t(35)
          , m = t(18)
          , v = (t.n(m),
        t(41))
          , b = (t.n(v),
        t(14))
          , y = t(31)
          , g = (t.n(y),
        t(17));
        t.d(l, "a", function() {
            return C
        });
        var C = e["ɵcmf"](u.a, [a.a], function(n) {
            return e["ɵmod"]([e["ɵmpd"](512, e.ComponentFactoryResolver, e["ɵCodegenComponentFactoryResolver"], [[8, [r.a]], [3, e.ComponentFactoryResolver], e.NgModuleRef]), e["ɵmpd"](5120, e.LOCALE_ID, e["ɵm"], [[3, e.LOCALE_ID]]), e["ɵmpd"](4608, o.NgLocalization, o.NgLocaleLocalization, [e.LOCALE_ID]), e["ɵmpd"](4608, e.Compiler, e.Compiler, []), e["ɵmpd"](5120, e.APP_ID, e["ɵf"], []), e["ɵmpd"](5120, e.IterableDiffers, e["ɵk"], []), e["ɵmpd"](5120, e.KeyValueDiffers, e["ɵl"], []), e["ɵmpd"](4608, s.a, s.b, [o.DOCUMENT]), e["ɵmpd"](6144, e.Sanitizer, null, [s.a]), e["ɵmpd"](4608, s.c, s.d, []), e["ɵmpd"](5120, s.e, function(n, l, t, e) {
                return [new s.f(n), new s.g(l), new s.h(t,e)]
            }, [o.DOCUMENT, o.DOCUMENT, o.DOCUMENT, s.c]), e["ɵmpd"](4608, s.i, s.i, [s.e, e.NgZone]), e["ɵmpd"](135680, s.j, s.j, [o.DOCUMENT]), e["ɵmpd"](4608, s.k, s.k, [s.i, s.j]), e["ɵmpd"](5120, i.a, c.a, []), e["ɵmpd"](5120, i.b, c.b, []), e["ɵmpd"](4608, i.c, c.c, [i.a, i.b]), e["ɵmpd"](5120, e.RendererFactory2, c.d, [s.k, i.c, e.NgZone]), e["ɵmpd"](6144, s.l, null, [s.j]), e["ɵmpd"](4608, e.Testability, e.Testability, [e.NgZone]), e["ɵmpd"](4608, s.m, s.m, [o.DOCUMENT]), e["ɵmpd"](4608, s.n, s.n, [o.DOCUMENT]), e["ɵmpd"](4608, d["ɵi"], d["ɵi"], []), e["ɵmpd"](4608, p.a, p.a, []), e["ɵmpd"](4608, p.b, p.c, []), e["ɵmpd"](5120, p.d, p.e, []), e["ɵmpd"](4608, p.f, p.f, [p.a, p.b, p.d]), e["ɵmpd"](4608, p.g, p.h, []), e["ɵmpd"](5120, p.i, p.j, [p.f, p.g]), e["ɵmpd"](4608, f.a, c.e, [e.RendererFactory2, s.o]), e["ɵmpd"](5120, m.PerfectScrollbarConfig, v.provideDefaultConfig, [v.PERFECT_SCROLLBAR_CONFIG]), e["ɵmpd"](4608, b.a, b.a, []), e["ɵmpd"](512, o.CommonModule, o.CommonModule, []), e["ɵmpd"](1024, e.ErrorHandler, s.u, []), e["ɵmpd"](1024, e.APP_INITIALIZER, function(n, l) {
                return [s.p(n, l)]
            }, [[2, s.q], [2, e.NgProbeToken]]), e["ɵmpd"](512, e.ApplicationInitStatus, e.ApplicationInitStatus, [[2, e.APP_INITIALIZER]]), e["ɵmpd"](131584, e["ɵe"], e["ɵe"], [e.NgZone, e["ɵConsole"], e.Injector, e.ErrorHandler, e.ComponentFactoryResolver, e.ApplicationInitStatus]), e["ɵmpd"](2048, e.ApplicationRef, null, [e["ɵe"]]), e["ɵmpd"](512, e.ApplicationModule, e.ApplicationModule, [e.ApplicationRef]), e["ɵmpd"](512, s.r, s.r, [[3, s.r]]), e["ɵmpd"](512, d["ɵba"], d["ɵba"], []), e["ɵmpd"](512, d.FormsModule, d.FormsModule, []), e["ɵmpd"](512, p.k, p.k, []), e["ɵmpd"](512, c.f, c.f, []), e["ɵmpd"](512, y.TextMaskModule, y.TextMaskModule, []), e["ɵmpd"](1024, v.PERFECT_SCROLLBAR_GUARD, v.provideForRootGuard, [[3, m.PerfectScrollbarConfig]]), e["ɵmpd"](512, v.PerfectScrollbarModule, v.PerfectScrollbarModule, [[2, v.PERFECT_SCROLLBAR_GUARD]]), e["ɵmpd"](512, g.HelperComponentsModule, g.HelperComponentsModule, []), e["ɵmpd"](512, u.a, u.a, []), e["ɵmpd"](256, v.PERFECT_SCROLLBAR_CONFIG, {
                suppressScrollX: !0
            }, [])])
        })
    },
    499: function(n, l, t) {
        "use strict";
        function e(n) {
            return r["ɵvid"](0, [(n()(),
            r["ɵeld"](0, 0, null, null, 47, "div", [["class", "mainpandats wrapper-pandats pfdin-text-universal-pandats"]], null, null, null, null, null)), (n()(),
            r["ɵted"](-1, null, ["\n    "])), (n()(),
            r["ɵeld"](2, 0, null, null, 44, "ul", [], null, null, null, null, null)), (n()(),
            r["ɵted"](-1, null, ["\n        "])), (n()(),
            r["ɵeld"](4, 0, null, null, 8, "li", [["class", "available-pandats item-pandats layout-column centered-content"]], null, null, null, null, null)), (n()(),
            r["ɵted"](-1, null, ["\n            "])), (n()(),
            r["ɵeld"](6, 0, null, null, 1, "div", [["class", "title-pandats layout-row just-center"]], null, null, null, null, null)), (n()(),
            r["ɵted"](7, null, ["", ""])), (n()(),
            r["ɵted"](-1, null, ["\n            "])), (n()(),
            r["ɵeld"](9, 0, null, null, 2, "div", [["class", "value-pandats layout-row just-center"]], null, null, null, null, null)), (n()(),
            r["ɵted"](10, null, ["", ""])), r["ɵppd"](11, 3), (n()(),
            r["ɵted"](-1, null, ["\n        "])), (n()(),
            r["ɵted"](-1, null, ["\n        "])), (n()(),
            r["ɵeld"](14, 0, null, null, 8, "li", [["class", "funds-pandats item-pandats layout-column centered-content"]], null, null, null, null, null)), (n()(),
            r["ɵted"](-1, null, ["\n            "])), (n()(),
            r["ɵeld"](16, 0, null, null, 1, "div", [["class", "title-pandats layout-row just-center"]], null, null, null, null, null)), (n()(),
            r["ɵted"](17, null, ["", ""])), (n()(),
            r["ɵted"](-1, null, ["\n            "])), (n()(),
            r["ɵeld"](19, 0, null, null, 2, "div", [["class", "value-pandats layout-row just-center"]], null, null, null, null, null)), (n()(),
            r["ɵted"](20, null, ["", ""])), r["ɵppd"](21, 3), (n()(),
            r["ɵted"](-1, null, ["\n        "])), (n()(),
            r["ɵted"](-1, null, ["\n        "])), (n()(),
            r["ɵeld"](24, 0, null, null, 8, "li", [["class", "value-pandats layout-column centered-content"]], null, null, null, null, null)), (n()(),
            r["ɵted"](-1, null, ["\n            "])), (n()(),
            r["ɵeld"](26, 0, null, null, 1, "div", [["class", "title-pandats layout-row just-center"]], null, null, null, null, null)), (n()(),
            r["ɵted"](27, null, ["", ""])), (n()(),
            r["ɵted"](-1, null, ["\n            "])), (n()(),
            r["ɵeld"](29, 0, null, null, 2, "div", [["class", "value-pandats layout-row just-center"]], null, null, null, null, null)), (n()(),
            r["ɵted"](30, null, ["", ""])), r["ɵppd"](31, 3), (n()(),
            r["ɵted"](-1, null, ["\n        "])), (n()(),
            r["ɵted"](-1, null, ["\n\n        "])), (n()(),
            r["ɵeld"](34, 0, null, null, 10, "li", [["class", "profit-pandats  layout-column centered-content"]], null, null, null, null, null)), r["ɵdid"](35, 278528, null, 0, o.NgClass, [r.IterableDiffers, r.KeyValueDiffers, r.ElementRef, r.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), r["ɵpod"](36, {
                "up-pandats": 0,
                "down-pandats": 1
            }), (n()(),
            r["ɵted"](-1, null, ["\n            "])), (n()(),
            r["ɵeld"](38, 0, null, null, 1, "div", [["class", "title-pandats layout-row just-center"]], null, null, null, null, null)), (n()(),
            r["ɵted"](39, null, ["", ""])), (n()(),
            r["ɵted"](-1, null, ["\n            "])), (n()(),
            r["ɵeld"](41, 0, null, null, 2, "div", [["class", "value-pandats layout-row just-center"]], null, null, null, null, null)), (n()(),
            r["ɵted"](42, null, ["", ""])), r["ɵppd"](43, 3), (n()(),
            r["ɵted"](-1, null, ["\n        "])), (n()(),
            r["ɵted"](-1, null, ["\n"])), (n()(),
            r["ɵted"](-1, null, ["\n    "])), (n()(),
            r["ɵted"](-1, null, ["\n\n"]))], function(n, l) {
                var t = l.component;
                n(l, 35, 0, "profit-pandats  layout-column centered-content", n(l, 36, 0, t.pnlData.totalProfit >= 0, t.pnlData.totalProfit < 0))
            }, function(n, l) {
                var t = l.component;
                n(l, 7, 0, t.translation.availableFunds),
                n(l, 10, 0, r["ɵunv"](l, 10, 0, n(l, 11, 0, r["ɵnov"](l.parent, 0), t.pnlData.freeMargin, t.user.currency, !0))),
                n(l, 17, 0, t.translation.usedFunds),
                n(l, 20, 0, r["ɵunv"](l, 20, 0, n(l, 21, 0, r["ɵnov"](l.parent, 0), t.user.margin, t.user.currency, !0))),
                n(l, 27, 0, t.translation.accountValue),
                n(l, 30, 0, r["ɵunv"](l, 30, 0, n(l, 31, 0, r["ɵnov"](l.parent, 0), t.pnlData.equity, t.user.currency, !0))),
                n(l, 39, 0, t.translation.totalPL),
                n(l, 42, 0, r["ɵunv"](l, 42, 0, n(l, 43, 0, r["ɵnov"](l.parent, 0), t.pnlData.totalProfit, t.user.currency, !0)))
            })
        }
        function u(n) {
            return r["ɵvid"](0, [r["ɵpid"](0, o.CurrencyPipe, [r.LOCALE_ID]), (n()(),
            r["ɵand"](16777216, null, null, 1, null, e)), r["ɵdid"](2, 16384, null, 0, o.NgIf, [r.ViewContainerRef, r.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            r["ɵted"](-1, null, ["\n"]))], function(n, l) {
                var t = l.component;
                n(l, 2, 0, t.user && t.user.loggedIn)
            }, null)
        }
        function a(n) {
            return r["ɵvid"](0, [(n()(),
            r["ɵeld"](0, 0, null, null, 1, "panda-forex-account-status", [], null, null, null, u, c)), r["ɵdid"](1, 245760, null, 0, s.a, [r.NgZone], null, null)], function(n, l) {
                n(l, 1, 0)
            }, null)
        }
        var r = t(2)
          , o = t(4)
          , s = t(131);
        t.d(l, "a", function() {
            return d
        });
        var i = []
          , c = r["ɵcrt"]({
            encapsulation: 2,
            styles: i,
            data: {}
        })
          , d = r["ɵccf"]("panda-forex-account-status", s.a, a, {}, {}, [])
    },
    521: function(n, l, t) {
        "use strict";
        var e = t(13)
          , u = t(2)
          , a = t(5)
          , r = t(28)
          , o = t(131)
          , s = t(17);
        t.d(l, "a", function() {
            return c
        });
        var i = this && this.__decorate || function(n, l, t, e) {
            var u, a = arguments.length, r = a < 3 ? l : null === e ? e = Object.getOwnPropertyDescriptor(l, t) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(n, l, t, e);
            else
                for (var o = n.length - 1; o >= 0; o--)
                    (u = n[o]) && (r = (a < 3 ? u(r) : a > 3 ? u(l, t, r) : u(l, t)) || r);
            return a > 3 && r && Object.defineProperty(l, t, r),
            r
        }
          , c = function() {
            function n() {}
            return n = i([t.i(u.NgModule)({
                declarations: [o.a],
                imports: [e.r, a.FormsModule, r.k, s.HelperComponentsModule],
                providers: [],
                bootstrap: [o.a]
            })], n)
        }()
    },
    610: function(n, l) {
        n.exports = '<div class="mainpandats wrapper-pandats pfdin-text-universal-pandats" *ngif="user && user.loggedIn"> <ul> <li class="available-pandats item-pandats layout-column centered-content"> <div class="title-pandats layout-row just-center">{{translation.availableFunds}}</div> <div class="value-pandats layout-row just-center">{{pnlData.freeMargin | currency:user.currency:true}}</div> </li> <li class="funds-pandats item-pandats layout-column centered-content"> <div class="title-pandats layout-row just-center">{{translation.usedFunds}}</div> <div class="value-pandats layout-row just-center">{{user.margin | currency:user.currency:true}}</div> </li> <li class="value-pandats layout-column centered-content"> <div class="title-pandats layout-row just-center">{{translation.accountValue}}</div> <div class="value-pandats layout-row just-center">{{pnlData.equity | currency:user.currency:true}}</div> </li> <li class="profit-pandats layout-column centered-content" [ngclass]="{\'up-pandats\': pnlData.totalProfit >= 0, \'down-pandats\': pnlData.totalProfit < 0}"> <div class="title-pandats layout-row just-center">{{translation.totalPL}}</div> <div class="value-pandats layout-row just-center">{{pnlData.totalProfit | currency:user.currency:true}}</div> </li> </ul> </div> '
    },
    953: function(n, l, t) {
        "use strict";
        Object.defineProperty(l, "__esModule", {
            value: !0
        });
        var e = t(20)
          , u = t(481);
        t.i(e.a)().bootstrapModuleFactory(u.a)
    }
}, [953]);
