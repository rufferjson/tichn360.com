webpackJsonp([4], {
    139: function(e, t, n) {
        "use strict";
        var o = n(2)
          , r = n(11)
          , l = n(9)
          , a = n(8);
        n.d(t, "a", function() {
            return u
        });
        var i = this && this.__decorate || function(e, t, n, o) {
            var r, l = arguments.length, a = l < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var i = e.length - 1; i >= 0; i--)
                    (r = e[i]) && (a = (l < 3 ? r(a) : l > 3 ? r(t, n, a) : r(t, n)) || a);
            return l > 3 && a && Object.defineProperty(t, n, a),
            a
        }
          , s = this && this.__metadata || function(e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
          , u = function() {
            function e(e) {
                var t = this;
                this.zone = e,
                this.settingsService = r.settingsService,
                this.stateService = a.stateService,
                this.constants = l.Constants,
                this.translation = this.settingsService.get("translation"),
                this.langSubscribe = this.stateService.get("lang").subscribe(function() {
                    t.zone.run(function() {
                        t.translation = t.settingsService.get("translation"),
                        t.marketAnalysisUrl = l.Constants.source.marketAnalysisUrl
                    })
                })
            }
            return e.prototype.ngOnInit = function() {
                var e = this;
                this.stateService.get("app").filter(function(e) {
                    return !!e
                }).subscribe(function(t) {
                    e.zone.run(function() {
                        t.status && (e.translation = e.settingsService.get("translation"))
                    })
                })
            }
            ,
            e.prototype.ngOnDestroy = function() {
                this.langSubscribe && this.langSubscribe.unsubscribe()
            }
            ,
            e.prototype.openURL = function() {}
            ,
            e = i([n.i(o.Component)({
                selector: "panda-forex-market-analysis",
                template: n(620)
            }), s("design:paramtypes", [o.NgZone])], e)
        }()
    },
    488: function(e, t, n) {
        "use strict";
        var o = n(2)
          , r = n(528)
          , l = n(139)
          , a = n(508)
          , i = n(4)
          , s = n(13)
          , u = n(40)
          , c = n(36)
          , p = n(5)
          , d = n(35)
          , f = n(18)
          , m = (n.n(f),
        n(41))
          , b = (n.n(m),
        n(14))
          , g = n(31)
          , y = (n.n(g),
        n(17));
        n.d(t, "a", function() {
            return C
        });
        var C = o["ɵcmf"](r.a, [l.a], function(e) {
            return o["ɵmod"]([o["ɵmpd"](512, o.ComponentFactoryResolver, o["ɵCodegenComponentFactoryResolver"], [[8, [a.a]], [3, o.ComponentFactoryResolver], o.NgModuleRef]), o["ɵmpd"](5120, o.LOCALE_ID, o["ɵm"], [[3, o.LOCALE_ID]]), o["ɵmpd"](4608, i.NgLocalization, i.NgLocaleLocalization, [o.LOCALE_ID]), o["ɵmpd"](4608, o.Compiler, o.Compiler, []), o["ɵmpd"](5120, o.APP_ID, o["ɵf"], []), o["ɵmpd"](5120, o.IterableDiffers, o["ɵk"], []), o["ɵmpd"](5120, o.KeyValueDiffers, o["ɵl"], []), o["ɵmpd"](4608, s.a, s.b, [i.DOCUMENT]), o["ɵmpd"](6144, o.Sanitizer, null, [s.a]), o["ɵmpd"](4608, s.c, s.d, []), o["ɵmpd"](5120, s.e, function(e, t, n, o) {
                return [new s.f(e), new s.g(t), new s.h(n,o)]
            }, [i.DOCUMENT, i.DOCUMENT, i.DOCUMENT, s.c]), o["ɵmpd"](4608, s.i, s.i, [s.e, o.NgZone]), o["ɵmpd"](135680, s.j, s.j, [i.DOCUMENT]), o["ɵmpd"](4608, s.k, s.k, [s.i, s.j]), o["ɵmpd"](5120, u.a, c.a, []), o["ɵmpd"](5120, u.b, c.b, []), o["ɵmpd"](4608, u.c, c.c, [u.a, u.b]), o["ɵmpd"](5120, o.RendererFactory2, c.d, [s.k, u.c, o.NgZone]), o["ɵmpd"](6144, s.l, null, [s.j]), o["ɵmpd"](4608, o.Testability, o.Testability, [o.NgZone]), o["ɵmpd"](4608, s.m, s.m, [i.DOCUMENT]), o["ɵmpd"](4608, s.n, s.n, [i.DOCUMENT]), o["ɵmpd"](4608, p["ɵi"], p["ɵi"], []), o["ɵmpd"](4608, d.a, c.e, [o.RendererFactory2, s.o]), o["ɵmpd"](5120, f.PerfectScrollbarConfig, m.provideDefaultConfig, [m.PERFECT_SCROLLBAR_CONFIG]), o["ɵmpd"](4608, b.a, b.a, []), o["ɵmpd"](512, i.CommonModule, i.CommonModule, []), o["ɵmpd"](1024, o.ErrorHandler, s.u, []), o["ɵmpd"](1024, o.APP_INITIALIZER, function(e, t) {
                return [s.p(e, t)]
            }, [[2, s.q], [2, o.NgProbeToken]]), o["ɵmpd"](512, o.ApplicationInitStatus, o.ApplicationInitStatus, [[2, o.APP_INITIALIZER]]), o["ɵmpd"](131584, o["ɵe"], o["ɵe"], [o.NgZone, o["ɵConsole"], o.Injector, o.ErrorHandler, o.ComponentFactoryResolver, o.ApplicationInitStatus]), o["ɵmpd"](2048, o.ApplicationRef, null, [o["ɵe"]]), o["ɵmpd"](512, o.ApplicationModule, o.ApplicationModule, [o.ApplicationRef]), o["ɵmpd"](512, s.r, s.r, [[3, s.r]]), o["ɵmpd"](512, p["ɵba"], p["ɵba"], []), o["ɵmpd"](512, p.FormsModule, p.FormsModule, []), o["ɵmpd"](512, c.f, c.f, []), o["ɵmpd"](512, g.TextMaskModule, g.TextMaskModule, []), o["ɵmpd"](1024, m.PERFECT_SCROLLBAR_GUARD, m.provideForRootGuard, [[3, f.PerfectScrollbarConfig]]), o["ɵmpd"](512, m.PerfectScrollbarModule, m.PerfectScrollbarModule, [[2, m.PERFECT_SCROLLBAR_GUARD]]), o["ɵmpd"](512, y.HelperComponentsModule, y.HelperComponentsModule, []), o["ɵmpd"](512, r.a, r.a, []), o["ɵmpd"](256, m.PERFECT_SCROLLBAR_CONFIG, {
                suppressScrollX: !0
            }, [])])
        })
    },
    508: function(e, t, n) {
        "use strict";
        function o(e) {
            return a["ɵvid"](0, [(e()(),
            a["ɵeld"](0, 0, null, null, 4, "div", [["class", "marketAnalysis"]], null, null, null, null, null)), (e()(),
            a["ɵted"](-1, null, ["\n    "])), (e()(),
            a["ɵeld"](2, 0, null, null, 1, "a", [["class", "forex-button-pandats simple-button-pandats spinner-button-pandats accent"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (e()(),
            a["ɵted"](3, null, ["\n        ", "\n    "])), (e()(),
            a["ɵted"](-1, null, ["\n"]))], null, function(e, t) {
                var n = t.component;
                e(t, 2, 0, a["ɵinlineInterpolate"](1, "", n.marketAnalysisUrl, "")),
                e(t, 3, 0, n.translation.marketAnalysis)
            })
        }
        function r(e) {
            return a["ɵvid"](0, [(e()(),
            a["ɵand"](16777216, null, null, 1, null, o)), a["ɵdid"](1, 16384, null, 0, i.NgIf, [a.ViewContainerRef, a.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (e()(),
            a["ɵted"](-1, null, ["\n"]))], function(e, t) {
                e(t, 1, 0, t.component.marketAnalysisUrl)
            }, null)
        }
        function l(e) {
            return a["ɵvid"](0, [(e()(),
            a["ɵeld"](0, 0, null, null, 1, "panda-forex-market-analysis", [], null, null, null, r, c)), a["ɵdid"](1, 245760, null, 0, s.a, [a.NgZone], null, null)], function(e, t) {
                e(t, 1, 0)
            }, null)
        }
        var a = n(2)
          , i = n(4)
          , s = n(139);
        n.d(t, "a", function() {
            return p
        });
        var u = []
          , c = a["ɵcrt"]({
            encapsulation: 2,
            styles: u,
            data: {}
        })
          , p = a["ɵccf"]("panda-forex-market-analysis", s.a, l, {}, {}, [])
    },
    528: function(e, t, n) {
        "use strict";
        var o = n(13)
          , r = n(2)
          , l = n(5)
          , a = n(139)
          , i = n(17);
        n.d(t, "a", function() {
            return u
        });
        var s = this && this.__decorate || function(e, t, n, o) {
            var r, l = arguments.length, a = l < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, o);
            else
                for (var i = e.length - 1; i >= 0; i--)
                    (r = e[i]) && (a = (l < 3 ? r(a) : l > 3 ? r(t, n, a) : r(t, n)) || a);
            return l > 3 && a && Object.defineProperty(t, n, a),
            a
        }
          , u = function() {
            function e() {}
            return e = s([n.i(r.NgModule)({
                declarations: [a.a],
                imports: [o.r, l.FormsModule, i.HelperComponentsModule],
                providers: [],
                bootstrap: [a.a]
            })], e)
        }()
    },
    620: function(e, t) {
        e.exports = '<div class=marketAnalysis *ngif=marketAnalysisUrl> <a class="forex-button-pandats simple-button-pandats spinner-button-pandats accent" href={{marketAnalysisUrl}} target=_blank> {{translation.marketAnalysis}} </a> </div> '
    },
    960: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(20)
          , r = n(488);
        n.i(o.a)().bootstrapModuleFactory(r.a)
    }
}, [960]);
