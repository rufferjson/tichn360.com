webpackJsonp([6], {
    136: function(n, e, l) {
        "use strict";
        var t = l(2)
          , a = l(8);
        l.d(e, "a", function() {
            return r
        });
        var o = this && this.__decorate || function(n, e, l, t) {
            var a, o = arguments.length, i = o < 3 ? e : null === t ? t = Object.getOwnPropertyDescriptor(e, l) : t;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, e, l, t);
            else
                for (var r = n.length - 1; r >= 0; r--)
                    (a = n[r]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, l, i) : a(e, l)) || i);
            return o > 3 && i && Object.defineProperty(e, l, i),
            i
        }
          , i = this && this.__metadata || function(n, e) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, e)
        }
          , r = function() {
            function n(n) {
                this.zone = n,
                this.stateService = a.stateService,
                this.languages = [{
                    label: "English",
                    id: "en",
                    class: "flag-icon-pandats flag-icon-pandats-en"
                }, {
                    label: "العربية",
                    id: "ar",
                    class: "flag-icon-pandats flag-icon-pandats-sa"
                }, {
                    label: "Deutsch",
                    id: "de",
                    class: "flag-icon-pandats flag-icon-pandats-de"
                }, {
                    label: "Français",
                    id: "fr",
                    class: "flag-icon-pandats flag-icon-pandats-fr"
                }, {
                    label: "中文",
                    id: "cn",
                    class: "flag-icon-pandats flag-icon-pandats-cn"
                }],
                this.langConfig = {
                    label: "label",
                    id: "id",
                    defaultLabel: "Please select",
                    flagOnly: !0,
                    type: "dropdown"
                },
                this.language = this.languages[0]
            }
            return n.prototype.ngOnInit = function() {
                var n = this;
                this.stateService.get("lang").filter(function(n) {
                    return !!n
                }).subscribe(function(e) {
                    n.zone.run(function() {
                        n.language = n.languages.filter(function(n) {
                            return n.id === e
                        }).shift() || n.languages[0]
                    })
                })
            }
            ,
            n.prototype.ngOnDestroy = function() {}
            ,
            n.prototype.setLang = function(n) {
                this.stateService.setOnce("loadLang", {
                    lang: n.id
                })
            }
            ,
            n = o([l.i(t.Component)({
                selector: "panda-forex-lang",
                template: l(615)
            }), i("design:paramtypes", [t.NgZone])], n)
        }()
    },
    485: function(n, e, l) {
        "use strict";
        var t = l(2)
          , a = l(525)
          , o = l(136)
          , i = l(504)
          , r = l(4)
          , d = l(13)
          , u = l(40)
          , c = l(36)
          , s = l(5)
          , p = l(35)
          , g = l(18)
          , f = (l.n(g),
        l(41))
          , m = (l.n(f),
        l(14))
          , C = l(31)
          , v = (l.n(C),
        l(17));
        l.d(e, "a", function() {
            return R
        });
        var R = t["ɵcmf"](a.a, [o.a], function(n) {
            return t["ɵmod"]([t["ɵmpd"](512, t.ComponentFactoryResolver, t["ɵCodegenComponentFactoryResolver"], [[8, [i.a]], [3, t.ComponentFactoryResolver], t.NgModuleRef]), t["ɵmpd"](5120, t.LOCALE_ID, t["ɵm"], [[3, t.LOCALE_ID]]), t["ɵmpd"](4608, r.NgLocalization, r.NgLocaleLocalization, [t.LOCALE_ID]), t["ɵmpd"](4608, t.Compiler, t.Compiler, []), t["ɵmpd"](5120, t.APP_ID, t["ɵf"], []), t["ɵmpd"](5120, t.IterableDiffers, t["ɵk"], []), t["ɵmpd"](5120, t.KeyValueDiffers, t["ɵl"], []), t["ɵmpd"](4608, d.a, d.b, [r.DOCUMENT]), t["ɵmpd"](6144, t.Sanitizer, null, [d.a]), t["ɵmpd"](4608, d.c, d.d, []), t["ɵmpd"](5120, d.e, function(n, e, l, t) {
                return [new d.f(n), new d.g(e), new d.h(l,t)]
            }, [r.DOCUMENT, r.DOCUMENT, r.DOCUMENT, d.c]), t["ɵmpd"](4608, d.i, d.i, [d.e, t.NgZone]), t["ɵmpd"](135680, d.j, d.j, [r.DOCUMENT]), t["ɵmpd"](4608, d.k, d.k, [d.i, d.j]), t["ɵmpd"](5120, u.a, c.a, []), t["ɵmpd"](5120, u.b, c.b, []), t["ɵmpd"](4608, u.c, c.c, [u.a, u.b]), t["ɵmpd"](5120, t.RendererFactory2, c.d, [d.k, u.c, t.NgZone]), t["ɵmpd"](6144, d.l, null, [d.j]), t["ɵmpd"](4608, t.Testability, t.Testability, [t.NgZone]), t["ɵmpd"](4608, d.m, d.m, [r.DOCUMENT]), t["ɵmpd"](4608, d.n, d.n, [r.DOCUMENT]), t["ɵmpd"](4608, s["ɵi"], s["ɵi"], []), t["ɵmpd"](4608, p.a, c.e, [t.RendererFactory2, d.o]), t["ɵmpd"](5120, g.PerfectScrollbarConfig, f.provideDefaultConfig, [f.PERFECT_SCROLLBAR_CONFIG]), t["ɵmpd"](4608, m.a, m.a, []), t["ɵmpd"](512, r.CommonModule, r.CommonModule, []), t["ɵmpd"](1024, t.ErrorHandler, d.u, []), t["ɵmpd"](1024, t.APP_INITIALIZER, function(n, e) {
                return [d.p(n, e)]
            }, [[2, d.q], [2, t.NgProbeToken]]), t["ɵmpd"](512, t.ApplicationInitStatus, t.ApplicationInitStatus, [[2, t.APP_INITIALIZER]]), t["ɵmpd"](131584, t["ɵe"], t["ɵe"], [t.NgZone, t["ɵConsole"], t.Injector, t.ErrorHandler, t.ComponentFactoryResolver, t.ApplicationInitStatus]), t["ɵmpd"](2048, t.ApplicationRef, null, [t["ɵe"]]), t["ɵmpd"](512, t.ApplicationModule, t.ApplicationModule, [t.ApplicationRef]), t["ɵmpd"](512, d.r, d.r, [[3, d.r]]), t["ɵmpd"](512, s["ɵba"], s["ɵba"], []), t["ɵmpd"](512, s.FormsModule, s.FormsModule, []), t["ɵmpd"](512, c.f, c.f, []), t["ɵmpd"](512, C.TextMaskModule, C.TextMaskModule, []), t["ɵmpd"](1024, f.PERFECT_SCROLLBAR_GUARD, f.provideForRootGuard, [[3, g.PerfectScrollbarConfig]]), t["ɵmpd"](512, f.PerfectScrollbarModule, f.PerfectScrollbarModule, [[2, f.PERFECT_SCROLLBAR_GUARD]]), t["ɵmpd"](512, v.HelperComponentsModule, v.HelperComponentsModule, []), t["ɵmpd"](512, a.a, a.a, []), t["ɵmpd"](256, f.PERFECT_SCROLLBAR_CONFIG, {
                suppressScrollX: !0
            }, [])])
        })
    },
    504: function(n, e, l) {
        "use strict";
        function t(n) {
            return o["ɵvid"](0, [(n()(),
            o["ɵeld"](0, 0, null, null, 9, "div", [["class", "mainpandats full-width layout-column centered-content full-width"]], null, null, null, null, null)), (n()(),
            o["ɵted"](-1, null, ["\n    "])), (n()(),
            o["ɵeld"](2, 0, null, null, 6, "custom-select", [["name", "language"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function(n, e, l) {
                var t = !0
                  , a = n.component;
                if ("ngModelChange" === e) {
                    t = !1 !== (a.language = l) && t
                }
                if ("ngModelChange" === e) {
                    t = !1 !== a.setLang(l) && t
                }
                return t
            }, r.a, r.b)), o["ɵdid"](3, 245760, null, 0, d.a, [o.ElementRef, o.NgZone], {
                items: [0, "items"],
                config: [1, "config"]
            }, null), o["ɵprd"](1024, null, u.NG_VALUE_ACCESSOR, function(n) {
                return [n]
            }, [d.a]), o["ɵdid"](5, 671744, null, 0, u.NgModel, [[8, null], [8, null], [8, null], [2, u.NG_VALUE_ACCESSOR]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), o["ɵprd"](2048, null, u.NgControl, null, [u.NgModel]), o["ɵdid"](7, 16384, null, 0, u.NgControlStatus, [u.NgControl], null, null), (n()(),
            o["ɵted"](-1, null, ["\n    "])), (n()(),
            o["ɵted"](-1, null, ["\n\n"])), (n()(),
            o["ɵted"](-1, null, ["\n"]))], function(n, e) {
                var l = e.component;
                n(e, 3, 0, l.languages, l.langConfig),
                n(e, 5, 0, "language", l.language)
            }, function(n, e) {
                n(e, 2, 0, o["ɵnov"](e, 7).ngClassUntouched, o["ɵnov"](e, 7).ngClassTouched, o["ɵnov"](e, 7).ngClassPristine, o["ɵnov"](e, 7).ngClassDirty, o["ɵnov"](e, 7).ngClassValid, o["ɵnov"](e, 7).ngClassInvalid, o["ɵnov"](e, 7).ngClassPending)
            })
        }
        function a(n) {
            return o["ɵvid"](0, [(n()(),
            o["ɵeld"](0, 0, null, null, 1, "panda-forex-lang", [], null, null, null, t, s)), o["ɵdid"](1, 245760, null, 0, i.a, [o.NgZone], null, null)], function(n, e) {
                n(e, 1, 0)
            }, null)
        }
        var o = l(2)
          , i = l(136)
          , r = l(72)
          , d = l(56)
          , u = l(5);
        l.d(e, "a", function() {
            return p
        });
        var c = []
          , s = o["ɵcrt"]({
            encapsulation: 2,
            styles: c,
            data: {}
        })
          , p = o["ɵccf"]("panda-forex-lang", i.a, a, {}, {}, [])
    },
    525: function(n, e, l) {
        "use strict";
        var t = l(13)
          , a = l(2)
          , o = l(5)
          , i = l(136)
          , r = l(17);
        l.d(e, "a", function() {
            return u
        });
        var d = this && this.__decorate || function(n, e, l, t) {
            var a, o = arguments.length, i = o < 3 ? e : null === t ? t = Object.getOwnPropertyDescriptor(e, l) : t;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, e, l, t);
            else
                for (var r = n.length - 1; r >= 0; r--)
                    (a = n[r]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, l, i) : a(e, l)) || i);
            return o > 3 && i && Object.defineProperty(e, l, i),
            i
        }
          , u = function() {
            function n() {}
            return n = d([l.i(a.NgModule)({
                declarations: [i.a],
                imports: [t.r, o.FormsModule, r.HelperComponentsModule],
                providers: [],
                bootstrap: [i.a]
            })], n)
        }()
    },
    615: function(n, e) {
        n.exports = '<div class="mainpandats full-width layout-column centered-content full-width"> <custom-select name=language [items]=languages [config]=langConfig [(ngmodel)]=language (ngmodelchange)=setLang($event)> </custom-select> </div> '
    },
    957: function(n, e, l) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var t = l(20)
          , a = l(485);
        l.i(t.a)().bootstrapModuleFactory(a.a)
    }
}, [957]);
