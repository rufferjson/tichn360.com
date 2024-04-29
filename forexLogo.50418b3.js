webpackJsonp([5], {
    138: function(e, t, n) {
        "use strict";
        var o = n(2)
          , l = n(9)
          , r = n(8);
        n.d(t, "a", function() {
            return d
        });
        var i = this && this.__decorate || function(e, t, n, o) {
            var l, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, t, n, o);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (l = e[a]) && (i = (r < 3 ? l(i) : r > 3 ? l(t, n, i) : l(t, n)) || i);
            return r > 3 && i && Object.defineProperty(t, n, i),
            i
        }
          , a = this && this.__metadata || function(e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
          , d = function() {
            function e(e) {
                this.zone = e,
                this.stateService = r.stateService,
                this.logoWidth = "",
                this.imageUrl = ""
            }
            return e.prototype.ngOnInit = function() {
                var e = this;
                this.stateService.get("app").filter(function(e) {
                    return !!e
                }).subscribe(function() {
                    e.zone.run(function() {
                        e.logoWidth = l.Constants.sourcesList[l.Constants.brandDomain].logoWidth || "15em",
                        e.imageUrl = "/vendor/img/logos/" + l.Constants.brandDomain + "-top.svg"
                    })
                })
            }
            ,
            e.prototype.ngOnDestroy = function() {}
            ,
            e.prototype.setLang = function(e) {}
            ,
            e = i([n.i(o.Component)({
                selector: "panda-forex-logo",
                template: n(619)
            }), a("design:paramtypes", [o.NgZone])], e)
        }()
    },
    487: function(e, t, n) {
        "use strict";
        var o = n(2)
          , l = n(527)
          , r = n(138)
          , i = n(507)
          , a = n(4)
          , d = n(13)
          , u = n(40)
          , p = n(36)
          , c = n(5)
          , s = n(35)
          , f = n(18)
          , m = (n.n(f),
        n(41))
          , g = (n.n(m),
        n(14))
          , C = n(31)
          , R = (n.n(C),
        n(17));
        n.d(t, "a", function() {
            return y
        });
        var y = o["ɵcmf"](l.a, [r.a], function(e) {
            return o["ɵmod"]([o["ɵmpd"](512, o.ComponentFactoryResolver, o["ɵCodegenComponentFactoryResolver"], [[8, [i.a]], [3, o.ComponentFactoryResolver], o.NgModuleRef]), o["ɵmpd"](5120, o.LOCALE_ID, o["ɵm"], [[3, o.LOCALE_ID]]), o["ɵmpd"](4608, a.NgLocalization, a.NgLocaleLocalization, [o.LOCALE_ID]), o["ɵmpd"](4608, o.Compiler, o.Compiler, []), o["ɵmpd"](5120, o.APP_ID, o["ɵf"], []), o["ɵmpd"](5120, o.IterableDiffers, o["ɵk"], []), o["ɵmpd"](5120, o.KeyValueDiffers, o["ɵl"], []), o["ɵmpd"](4608, d.a, d.b, [a.DOCUMENT]), o["ɵmpd"](6144, o.Sanitizer, null, [d.a]), o["ɵmpd"](4608, d.c, d.d, []), o["ɵmpd"](5120, d.e, function(e, t, n, o) {
                return [new d.f(e), new d.g(t), new d.h(n,o)]
            }, [a.DOCUMENT, a.DOCUMENT, a.DOCUMENT, d.c]), o["ɵmpd"](4608, d.i, d.i, [d.e, o.NgZone]), o["ɵmpd"](135680, d.j, d.j, [a.DOCUMENT]), o["ɵmpd"](4608, d.k, d.k, [d.i, d.j]), o["ɵmpd"](5120, u.a, p.a, []), o["ɵmpd"](5120, u.b, p.b, []), o["ɵmpd"](4608, u.c, p.c, [u.a, u.b]), o["ɵmpd"](5120, o.RendererFactory2, p.d, [d.k, u.c, o.NgZone]), o["ɵmpd"](6144, d.l, null, [d.j]), o["ɵmpd"](4608, o.Testability, o.Testability, [o.NgZone]), o["ɵmpd"](4608, d.m, d.m, [a.DOCUMENT]), o["ɵmpd"](4608, d.n, d.n, [a.DOCUMENT]), o["ɵmpd"](4608, c["ɵi"], c["ɵi"], []), o["ɵmpd"](4608, s.a, p.e, [o.RendererFactory2, d.o]), o["ɵmpd"](5120, f.PerfectScrollbarConfig, m.provideDefaultConfig, [m.PERFECT_SCROLLBAR_CONFIG]), o["ɵmpd"](4608, g.a, g.a, []), o["ɵmpd"](512, a.CommonModule, a.CommonModule, []), o["ɵmpd"](1024, o.ErrorHandler, d.u, []), o["ɵmpd"](1024, o.APP_INITIALIZER, function(e, t) {
                return [d.p(e, t)]
            }, [[2, d.q], [2, o.NgProbeToken]]), o["ɵmpd"](512, o.ApplicationInitStatus, o.ApplicationInitStatus, [[2, o.APP_INITIALIZER]]), o["ɵmpd"](131584, o["ɵe"], o["ɵe"], [o.NgZone, o["ɵConsole"], o.Injector, o.ErrorHandler, o.ComponentFactoryResolver, o.ApplicationInitStatus]), o["ɵmpd"](2048, o.ApplicationRef, null, [o["ɵe"]]), o["ɵmpd"](512, o.ApplicationModule, o.ApplicationModule, [o.ApplicationRef]), o["ɵmpd"](512, d.r, d.r, [[3, d.r]]), o["ɵmpd"](512, c["ɵba"], c["ɵba"], []), o["ɵmpd"](512, c.FormsModule, c.FormsModule, []), o["ɵmpd"](512, p.f, p.f, []), o["ɵmpd"](512, C.TextMaskModule, C.TextMaskModule, []), o["ɵmpd"](1024, m.PERFECT_SCROLLBAR_GUARD, m.provideForRootGuard, [[3, f.PerfectScrollbarConfig]]), o["ɵmpd"](512, m.PerfectScrollbarModule, m.PerfectScrollbarModule, [[2, m.PERFECT_SCROLLBAR_GUARD]]), o["ɵmpd"](512, R.HelperComponentsModule, R.HelperComponentsModule, []), o["ɵmpd"](512, l.a, l.a, []), o["ɵmpd"](256, m.PERFECT_SCROLLBAR_CONFIG, {
                suppressScrollX: !0
            }, [])])
        })
    },
    507: function(e, t, n) {
        "use strict";
        function o(e) {
            return r["ɵvid"](0, [(e()(),
            r["ɵeld"](0, 0, null, null, 5, "div", [["class", "logo-wrapper layout-row full-height"]], null, null, null, null, null)), r["ɵdid"](1, 278528, null, 0, i.NgStyle, [r.KeyValueDiffers, r.ElementRef, r.Renderer], {
                ngStyle: [0, "ngStyle"]
            }, null), r["ɵpod"](2, {
                width: 0
            }), (e()(),
            r["ɵted"](-1, null, ["\n    "])), (e()(),
            r["ɵeld"](4, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (e()(),
            r["ɵted"](-1, null, ["\n"])), (e()(),
            r["ɵted"](-1, null, ["\n"]))], function(e, t) {
                e(t, 1, 0, e(t, 2, 0, t.component.logoWidth))
            }, function(e, t) {
                e(t, 4, 0, t.component.imageUrl)
            })
        }
        function l(e) {
            return r["ɵvid"](0, [(e()(),
            r["ɵeld"](0, 0, null, null, 1, "panda-forex-logo", [], null, null, null, o, u)), r["ɵdid"](1, 245760, null, 0, a.a, [r.NgZone], null, null)], function(e, t) {
                e(t, 1, 0)
            }, null)
        }
        var r = n(2)
          , i = n(4)
          , a = n(138);
        n.d(t, "a", function() {
            return p
        });
        var d = []
          , u = r["ɵcrt"]({
            encapsulation: 2,
            styles: d,
            data: {}
        })
          , p = r["ɵccf"]("panda-forex-logo", a.a, l, {}, {}, [])
    },
    527: function(e, t, n) {
        "use strict";
        var o = n(13)
          , l = n(2)
          , r = n(5)
          , i = n(138)
          , a = n(17);
        n.d(t, "a", function() {
            return u
        });
        var d = this && this.__decorate || function(e, t, n, o) {
            var l, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(e, t, n, o);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (l = e[a]) && (i = (r < 3 ? l(i) : r > 3 ? l(t, n, i) : l(t, n)) || i);
            return r > 3 && i && Object.defineProperty(t, n, i),
            i
        }
          , u = function() {
            function e() {}
            return e = d([n.i(l.NgModule)({
                declarations: [i.a],
                imports: [o.r, r.FormsModule, a.HelperComponentsModule],
                providers: [],
                bootstrap: [i.a]
            })], e)
        }()
    },
    619: function(e, t) {
        e.exports = '<div class="logo-wrapper layout-row full-height" [ngstyle]="{\'width\': this.logoWidth}"> <img [src]=imageUrl> </div> '
    },
    959: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(20)
          , l = n(487);
        n.i(o.a)().bootstrapModuleFactory(l.a)
    }
}, [959]);
