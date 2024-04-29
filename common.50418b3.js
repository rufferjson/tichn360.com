webpackJsonp([0], {
    103: function(t, e, n) {
        "use strict";
        var r = n(2)
          , o = n(5)
          , i = n(193)
          , a = n.n(i);
        n.d(e, "a", function() {
            return d
        });
        var s = this && this.__assign || Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++) {
                e = arguments[n];
                for (var o in e)
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            }
            return t
        }
          , c = this && this.__decorate || function(t, e, n, r) {
            var o, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
            return i > 3 && a && Object.defineProperty(e, n, a),
            a
        }
          , l = this && this.__metadata || function(t, e) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(t, e)
        }
          , u = function() {}
          , p = {
            provide: o.NG_VALUE_ACCESSOR,
            useExisting: n.i(r.forwardRef)(function() {
                return d
            }),
            multi: !0
        }
          , d = function() {
            function t(t) {
                this.el = t,
                this.disabled = !1,
                this.autocomplete = "off",
                this.getFocus = new r.EventEmitter,
                this.defaultValidator = {
                    mask: "number",
                    guide: !1,
                    limit: 0
                },
                this.defaultButtons = {
                    visible: !1,
                    steps: 0
                },
                this.innerValue = "",
                this.onTouchedCallback = u,
                this.onChangeCallback = u,
                this.iteration = 0,
                this.noop = u
            }
            return Object.defineProperty(t.prototype, "value", {
                get: function() {
                    return this.innerValue
                },
                set: function(t) {
                    t !== this.innerValue && (this.innerValue = t,
                    this.onChangeCallback(t))
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.writeValue = function(t) {
                t !== this.innerValue && (this.innerValue = t)
            }
            ,
            t.prototype.registerOnChange = function(t) {
                this.onChangeCallback = t
            }
            ,
            t.prototype.registerOnTouched = function(t) {
                this.onTouchedCallback = t
            }
            ,
            t.prototype.ngOnInit = function() {
                this.onInput = this.el.nativeElement.querySelector("input"),
                this.masks = {
                    number: function() {
                        return a()({
                            prefix: "",
                            includeThousandsSeparator: !1
                        })
                    },
                    rate: function(t) {
                        return void 0 === t && (t = 2),
                        a()({
                            prefix: "",
                            allowDecimal: !0,
                            decimalLimit: t,
                            includeThousandsSeparator: !1
                        })
                    },
                    amount: function() {
                        return a()({
                            prefix: "",
                            allowDecimal: !0,
                            decimalLimit: 2,
                            includeThousandsSeparator: !1
                        })
                    }
                },
                this.textMask = {
                    mask: this.masks[this.validator.mask](this.validator.limit),
                    guide: this.validator.guide
                },
                this.validator = s({}, this.defaultValidator, this.validator),
                this.buttons = s({}, this.defaultButtons, this.buttons)
            }
            ,
            t.prototype.ngOnDestroy = function() {}
            ,
            t.prototype.ngOnChanges = function(t) {
                t.validator && !t.validator.firstChange && (this.textMask = {
                    mask: this.masks[this.validator.mask](this.validator.limit),
                    guide: this.validator.guide
                })
            }
            ,
            t.prototype.onFocus = function() {
                this.getFocus.emit()
            }
            ,
            t.prototype.increase = function() {
                this.onInput.focus(),
                this.value = this.upDown({
                    direction: "increase",
                    digits: this.validator.limit
                }),
                this.iteration++
            }
            ,
            t.prototype.decrease = function() {
                this.onInput.focus(),
                this.value = this.upDown({
                    direction: "decrease",
                    digits: this.validator.limit
                }),
                this.iteration++
            }
            ,
            t.prototype.mouseUpFn = function() {
                clearInterval(this.repeat)
            }
            ,
            t.prototype.increaseRepeat = function() {
                var t = this;
                clearInterval(this.repeat),
                this.iteration = 0,
                this.repeat = setInterval(function() {
                    return t.increase()
                }, 150)
            }
            ,
            t.prototype.decreaseRepeat = function() {
                var t = this;
                clearInterval(this.repeat),
                this.iteration = 0,
                this.repeat = setInterval(function() {
                    return t.decrease()
                }, 150)
            }
            ,
            t.prototype.upDown = function(t) {
                var e = this.value
                  , n = Math.pow(10, t.digits)
                  , r = this.getStep(this.iteration)
                  , o = (e * n + ("increase" === t.direction ? r : -1 * r)) / n;
                return Math.max(o, 0).toFixed(t.digits)
            }
            ,
            t.prototype.getStep = function(t) {
                var e = 1;
                return t >= 10 && (e = 5),
                t >= 20 && (e = 10),
                t >= 40 && (e = 100),
                t >= 60 && (e = 1e3),
                e
            }
            ,
            c([n.i(r.Input)(), l("design:type", Boolean)], t.prototype, "disabled", void 0),
            c([n.i(r.Input)(), l("design:type", String)], t.prototype, "autocomplete", void 0),
            c([n.i(r.Input)(), l("design:type", Object)], t.prototype, "isClass", void 0),
            c([n.i(r.Input)(), l("design:type", Object)], t.prototype, "buttons", void 0),
            c([n.i(r.Input)(), l("design:type", Object)], t.prototype, "validator", void 0),
            c([n.i(r.Input)(), l("design:type", Object)], t.prototype, "maxlength", void 0),
            c([n.i(r.Input)(), l("design:type", Object)], t.prototype, "minlength", void 0),
            c([n.i(r.Output)(), l("design:type", Object)], t.prototype, "getFocus", void 0),
            t = c([n.i(r.Component)({
                selector: "custom-input",
                template: n(637),
                providers: [p]
            }), l("design:paramtypes", [r.ElementRef])], t)
        }()
    },
    104: function(t, e, n) {
        "use strict";
        var r = n(2)
          , o = n(1);
        n.n(o);
        n.d(e, "a", function() {
            return a
        });
        var i = this && this.__decorate || function(t, e, n, r) {
            var o, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
            return i > 3 && a && Object.defineProperty(e, n, a),
            a
        }
          , a = function() {
            function t() {}
            return t.prototype.transform = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
                var r = e[0]
                  , i = e[1];
                return o.utc(t).utcOffset(i || 0).format(r)
            }
            ,
            t = i([n.i(r.Pipe)({
                name: "momentPipe"
            })], t)
        }()
    },
    105: function(t, e, n) {
        "use strict";
        var r = n(2)
          , o = n(8)
          , i = n(11);
        n.d(e, "a", function() {
            return c
        });
        var a = this && this.__decorate || function(t, e, n, r) {
            var o, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
            return i > 3 && a && Object.defineProperty(e, n, a),
            a
        }
          , s = this && this.__metadata || function(t, e) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(t, e)
        }
          , c = function() {
            function t(t) {
                var e = this;
                this.zone = t,
                this.isHide = new r.EventEmitter,
                this.counter = 5,
                this.settingsService = i.settingsService,
                this.stateService = o.stateService,
                this.translation = this.settingsService.get("translation"),
                this.langSubscribe = this.stateService.get("lang").subscribe(function() {
                    e.zone.run(function() {
                        e.translation = e.settingsService.get("translation")
                    })
                })
            }
            return t.prototype.ngOnInit = function() {
                this.show()
            }
            ,
            t.prototype.ngOnDestroy = function() {
                this.langSubscribe && this.langSubscribe.unsubscribe()
            }
            ,
            t.prototype.ngOnChanges = function(t) {
                t.state && "processing" !== t.state.currentValue && (this.clearCounters(),
                this.showCounter())
            }
            ,
            t.prototype.show = function() {}
            ,
            t.prototype.showCounter = function() {
                var t = this;
                this.counterInterval = setInterval(function() {
                    return t.counter--
                }, 1e3),
                this.counterTimeout = setTimeout(function() {
                    return t.hide()
                }, 1e3 * this.counter)
            }
            ,
            t.prototype.clearCounters = function() {
                clearInterval(this.counterInterval),
                clearTimeout(this.counterTimeout)
            }
            ,
            t.prototype.hide = function() {
                this.clearCounters(),
                this.isHide.emit(!1)
            }
            ,
            a([n.i(r.Input)(), s("design:type", Object)], t.prototype, "data", void 0),
            a([n.i(r.Input)(), s("design:type", String)], t.prototype, "state", void 0),
            a([n.i(r.Output)(), s("design:type", r.EventEmitter)], t.prototype, "isHide", void 0),
            t = a([n.i(r.Component)({
                selector: "popup",
                template: n(640)
            }), s("design:paramtypes", [r.NgZone])], t)
        }()
    },
    106: function(t, e) {
        t.exports = function(t, e) {
            var n = function() {};
            n.prototype = e.prototype,
            t.prototype = new n,
            t.prototype.constructor = t
        }
    },
    11: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(27)
          , o = n(9)
          , i = n(33);
        n.d(e, "settingsService", function() {
            return s
        });
        var a = function() {
            function t() {
                this.api = r.api,
                this.settings = {}
            }
            return t.prototype.loadItem = function(t) {
                switch (t) {
                case "currencies":
                    return this.api.request.getCurrencies();
                case "countries":
                    return this.api.request.getCountries();
                case "geo":
                    return this.api.request.geo();
                case "depositValue":
                    return this.api.request.depositValue();
                case "timezone":
                    return this.api.request.timezone()
                }
            }
            ,
            t.prototype.loadAllItems = function(t) {
                var e = this
                  , n = t.map(function(t) {
                    return e.loadItem(t).then(function(n) {
                        return e.checkResponse(n, t)
                    }).catch(function() {
                        return !1
                    })
                });
                return Promise.all(n)
            }
            ,
            t.prototype.checkResponse = function(t, e) {
                if (0 === t.status)
                    throw new i.AppError({
                        source: "SettingsService",
                        type: o.Constants.error.type.SYSTEM,
                        severity: "critical",
                        code: "settingsFailed",
                        message: "error getting settings",
                        data: {
                            response: t,
                            request: e
                        }
                    });
                return t
            }
            ,
            t.prototype.checkEmptySettings = function(t) {
                if (!(t.filter(function(t) {
                    return t
                }).length > 0))
                    throw console.warn(t, "aaaaa!"),
                    new i.AppError({
                        source: "SettingsService",
                        type: o.Constants.error.type.SYSTEM,
                        severity: "critical",
                        code: "settingsFailed",
                        message: "error getting settings",
                        data: {
                            response: t
                        }
                    });
                return t
            }
            ,
            t.prototype.load = function(t) {
                function e(e, n) {
                    if (e) {
                        var o = t[n];
                        r.settings[o] = e[o]
                    }
                }
                var n = this
                  , r = this;
                return "string" == typeof t ? this.loadItem(t).then(function(e) {
                    return n.checkResponse(e, t)
                }).then(function(e) {
                    return n.settings[t] = e[t]
                }) : Array.isArray(t) ? this.loadAllItems(t).then(function(t) {
                    return n.checkEmptySettings(t)
                }).then(function(t) {
                    return t.map(e)
                }) : void 0
            }
            ,
            t.prototype.get = function(t) {
                return this.settings.hasOwnProperty(t) && this.settings[t]
            }
            ,
            t.prototype.getAll = function() {
                return this.settings
            }
            ,
            t.prototype.set = function(t, e) {
                this.settings[t] = e
            }
            ,
            t.prototype.remove = function(t) {
                delete this.settings[t]
            }
            ,
            t
        }()
          , s = new a
    },
    112: function(t, e, n) {
        (function(r) {
            function o() {
                return "undefined" != typeof document && "WebkitAppearance"in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
            }
            function i() {
                var t = arguments
                  , n = this.useColors;
                if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff),
                !n)
                    return t;
                var r = "color: " + this.color;
                t = [t[0], r, "color: inherit"].concat(Array.prototype.slice.call(t, 1));
                var o = 0
                  , i = 0;
                return t[0].replace(/%[a-z%]/g, function(t) {
                    "%%" !== t && (o++,
                    "%c" === t && (i = o))
                }),
                t.splice(i, 0, r),
                t
            }
            function a() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }
            function s(t) {
                try {
                    null == t ? e.storage.removeItem("debug") : e.storage.debug = t
                } catch (t) {}
            }
            function c() {
                try {
                    return e.storage.debug
                } catch (t) {}
                if (void 0 !== r && "env"in r)
                    return r.env.DEBUG
            }
            function l() {
                try {
                    return window.localStorage
                } catch (t) {}
            }
            e = t.exports = n(605),
            e.log = a,
            e.formatArgs = i,
            e.save = s,
            e.load = c,
            e.useColors = o,
            e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : l(),
            e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"],
            e.formatters.j = function(t) {
                try {
                    return JSON.stringify(t)
                } catch (t) {
                    return "[UnexpectedJSONParseError]: " + t.message
                }
            }
            ,
            e.enable(c())
        }
        ).call(e, n(115))
    },
    128: function(t, e, n) {
        (function(r) {
            function o() {
                return "undefined" != typeof document && "WebkitAppearance"in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
            }
            function i() {
                var t = arguments
                  , n = this.useColors;
                if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff),
                !n)
                    return t;
                var r = "color: " + this.color;
                t = [t[0], r, "color: inherit"].concat(Array.prototype.slice.call(t, 1));
                var o = 0
                  , i = 0;
                return t[0].replace(/%[a-z%]/g, function(t) {
                    "%%" !== t && (o++,
                    "%c" === t && (i = o))
                }),
                t.splice(i, 0, r),
                t
            }
            function a() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }
            function s(t) {
                try {
                    null == t ? e.storage.removeItem("debug") : e.storage.debug = t
                } catch (t) {}
            }
            function c() {
                try {
                    return e.storage.debug
                } catch (t) {}
                if (void 0 !== r && "env"in r)
                    return r.env.DEBUG
            }
            function l() {
                try {
                    return window.localStorage
                } catch (t) {}
            }
            e = t.exports = n(938),
            e.log = a,
            e.formatArgs = i,
            e.save = s,
            e.load = c,
            e.useColors = o,
            e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : l(),
            e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"],
            e.formatters.j = function(t) {
                try {
                    return JSON.stringify(t)
                } catch (t) {
                    return "[UnexpectedJSONParseError]: " + t.message
                }
            }
            ,
            e.enable(c())
        }
        ).call(e, n(115))
    },
    130: function(t, e, n) {
        "use strict";
        function r(t) {
            return i["ɵvid"](0, [(t()(),
            i["ɵted"](-1, null, ["\n        "])), (t()(),
            i["ɵeld"](1, 0, null, null, 8, "div", [["class", "toast-pandats"]], [[24, "@showPanel", 0], [8, "hidden", 0]], [[null, "click"]], function(t, e, n) {
                var r = !0
                  , o = t.component;
                if ("click" === e) {
                    r = !1 !== o.hide() && r
                }
                return r
            }, null, null)), i["ɵdid"](2, 278528, null, 0, s.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (t()(),
            i["ɵted"](-1, null, ["\n            "])), (t()(),
            i["ɵeld"](4, 0, null, null, 1, "div", [["class", "toast-content-pandats"]], null, null, null, null, null)), (t()(),
            i["ɵted"](5, null, ["", ""])), (t()(),
            i["ɵted"](-1, null, ["\n            "])), (t()(),
            i["ɵeld"](7, 0, null, null, 1, "div", [["class", "toast-close-pandats"]], null, [[null, "click"]], function(t, e, n) {
                var r = !0
                  , o = t.component;
                if ("click" === e) {
                    r = !1 !== o.hide() && r
                }
                return r
            }, null, null)), (t()(),
            i["ɵted"](-1, null, ["X"])), (t()(),
            i["ɵted"](-1, null, ["\n        "]))], function(t, e) {
                t(e, 2, 0, "toast-pandats", e.component.status + "-pandats")
            }, function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.state, "active" !== n.state),
                t(e, 5, 0, n.content)
            })
        }
        function o(t) {
            return i["ɵvid"](0, [(t()(),
            i["ɵeld"](0, 0, null, null, 1, "toast", [], null, null, null, r, l)), i["ɵdid"](1, 704512, null, 0, a.a, [], null, null)], null, null)
        }
        var i = n(2)
          , a = n(79)
          , s = n(4);
        n.d(e, "b", function() {
            return l
        }),
        e.a = r;
        var c = []
          , l = i["ɵcrt"]({
            encapsulation: 2,
            styles: c,
            data: {
                animation: [{
                    type: 7,
                    name: "showPanel",
                    definitions: [{
                        type: 0,
                        name: "inactive",
                        styles: {
                            type: 6,
                            styles: {
                                height: "0px",
                                opacity: "0"
                            },
                            offset: null
                        },
                        options: void 0
                    }, {
                        type: 0,
                        name: "active",
                        styles: {
                            type: 6,
                            styles: {
                                height: "5rem",
                                opacity: "1"
                            },
                            offset: null
                        },
                        options: void 0
                    }, {
                        type: 1,
                        expr: "inactive <=> active",
                        animation: {
                            type: 4,
                            styles: null,
                            timings: 100
                        },
                        options: null
                    }],
                    options: {}
                }]
            }
        });
        i["ɵccf"]("toast", a.a, o, {
            content: "content",
            status: "status"
        }, {}, [])
    },
    14: function(t, e, n) {
        "use strict";
        var r = n(2)
          , o = n(39)
          , i = n(1);
        n.n(i);
        n.d(e, "a", function() {
            return s
        });
        var a = this && this.__decorate || function(t, e, n, r) {
            var o, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
            return i > 3 && a && Object.defineProperty(e, n, a),
            a
        }
          , s = function() {
            function t() {
                this.serverTimeService = o.serverTimeService
            }
            return t.prototype.getDateRange = function(t) {
                function e(t) {
                    return s("day").subtract(t, "day")
                }
                function n(t) {
                    return s("isoweek").subtract(t, "week")
                }
                function r(t) {
                    return s("month").subtract(t, "month")
                }
                var o, a = this, s = function(t) {
                    return i.utc(a.serverTimeService.time).startOf(t)
                }, c = t.split(" ");
                return c[1].toLowerCase().match("day") && (o = e(parseInt(c[0], 10))),
                c[1].toLowerCase().match("week") && (o = n(parseInt(c[0], 10))),
                c[1].toLowerCase().match("month") && (o = r(parseInt(c[0], 10))),
                o.unix()
            }
            ,
            t.prototype.setTimeRange = function(t) {
                var e, n;
                switch (t) {
                case "day":
                    e = this.getDateRange("0 days");
                    break;
                case "threedays":
                    e = this.getDateRange("2 days");
                    break;
                case "week":
                    e = this.getDateRange("0 week");
                    break;
                case "month":
                    e = this.getDateRange("0 month");
                    break;
                case "threemonths":
                    e = this.getDateRange("2 month");
                    break;
                case "all":
                    e = 1
                }
                return n = Math.floor(this.serverTimeService.time / 1e3),
                {
                    Start: e,
                    End: n
                }
            }
            ,
            t.prototype.objectToQueryString = function(t, e) {
                var n = this;
                return Object.keys(t).map(function(r) {
                    if (t.hasOwnProperty(r)) {
                        var o = e ? e + "[" + r + "]" : r
                          , i = t[r];
                        return "object" == typeof i ? n.objectToQueryString(i, o) : encodeURIComponent(o) + "=" + encodeURIComponent(i)
                    }
                }).join("&")
            }
            ,
            t.prototype.wait = function(t) {
                return function(e) {
                    return new Promise(function(n) {
                        return setTimeout(function() {
                            return n(e || !0)
                        }, t)
                    }
                    )
                }
            }
            ,
            t.prototype.capitalize = function(t) {
                return t.toLowerCase().charAt(0).toUpperCase() + t.toLowerCase().slice(1)
            }
            ,
            t.prototype.toCamelCase = function(t) {
                var e = this
                  , n = t.split(" ").reduce(function(t, n) {
                    return t.concat(e.capitalize(n))
                }, "");
                return n.charAt(0).toLowerCase() + n.slice(1)
            }
            ,
            t.prototype.getParams = function() {
                var t = {}
                  , e = location.search.replace("?", "").split("&");
                return e.length > 0 && "" !== e[0] && e.reduce(function(e, n) {
                    var r = n.split("=");
                    t[r[0]] = r[1]
                }, 0),
                t
            }
            ,
            t.prototype.getUrlToken = function() {
                var t = this.getParams();
                if (t && (t.etoken || t.token))
                    return t.etoken || t.token
            }
            ,
            t.prototype.getUrlCurrency = function() {
                var t = this.getParams();
                if (t && t.currency)
                    return t.currency
            }
            ,
            t.prototype.getBrandSubDomain = function() {
                return location.hostname.toLowerCase().split(".").shift()
            }
            ,
            t.prototype.getBrandDomain = function() {
                var t = location.hostname.toLowerCase().split(".").splice(1, 1)[0];
                return "localhost" === t ? this.getBrandSubDomain() : t
            }
            ,
            t = a([n.i(r.Injectable)()], t)
        }()
    },
    15: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(194)
          , o = n(27)
          , i = n(71)
          , a = n(8)
          , s = n(9);
        n.d(e, "userService", function() {
            return l
        });
        var c = function() {
            function t() {
                this.api = o.api,
                this.localStorageService = i.localStorageService,
                this.stateService = a.stateService,
                this.user = new r.User
            }
            return t.prototype.get = function() {
                return this.user
            }
            ,
            t.prototype.login = function(t, e) {
                this.user.onLogin(t, e),
                this.user.loggedIn = !0,
                this.subscribe()
            }
            ,
            t.prototype.logout = function() {
                this.api.unsubscribe("MT4UpdateBalance"),
                this.localStorageService.remove("token"),
                this.user.loggedIn = !1,
                this.user = null,
                this.user = new r.User
            }
            ,
            t.prototype.logoff = function() {
                this.api.unsubscribe("MT4UpdateBalance"),
                this.user.loggedIn = !1,
                this.user = null,
                this.user = new r.User
            }
            ,
            t.prototype.getAccoutnType = function() {
                var t = this;
                return Object.keys(s.Constants.source).filter(function(e) {
                    return s.Constants.source[e] === t.user.source
                }).shift()
            }
            ,
            t.prototype.subscribe = function() {
                var t = this;
                return this.api.subscribe("MT4UpdateBalance", function(e) {
                    t.user.updateBalance(e),
                    t.stateService.setOnce("pnl", {})
                })
            }
            ,
            t
        }()
          , l = new c
    },
    150: function(t, e, n) {
        "use strict";
        var r = n(2);
        n.d(e, "a", function() {
            return a
        });
        var o = this && this.__decorate || function(t, e, n, r) {
            var o, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
            return i > 3 && a && Object.defineProperty(e, n, a),
            a
        }
          , i = this && this.__metadata || function(t, e) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(t, e)
        }
          , a = function() {
            function t() {
                this.isShow = !1
            }
            return t.prototype.ngOnInit = function() {}
            ,
            o([n.i(r.Input)(), i("design:type", Boolean)], t.prototype, "isShow", void 0),
            t = o([n.i(r.Component)({
                selector: "button-spinner",
                template: '<div class="button-spinner-pandats">\n        <div id="circularG-pandats">\n            <div id="circularG_1-pandats" class="circularG-pandats"></div>\n            <div id="circularG_2-pandats" class="circularG-pandats"></div>\n            <div id="circularG_3-pandats" class="circularG-pandats"></div>\n            <div id="circularG_4-pandats" class="circularG-pandats"></div>\n            <div id="circularG_5-pandats" class="circularG-pandats"></div>\n            <div id="circularG_6-pandats" class="circularG-pandats"></div>\n            <div id="circularG_7-pandats" class="circularG-pandats"></div>\n            <div id="circularG_8-pandats" class="circularG-pandats"></div>\n        </div>\n    </div>'
            }), i("design:paramtypes", [])], t)
        }()
    },
    166: function(t, e, n) {
        function r(t) {
            this.path = t.path,
            this.hostname = t.hostname,
            this.port = t.port,
            this.secure = t.secure,
            this.query = t.query,
            this.timestampParam = t.timestampParam,
            this.timestampRequests = t.timestampRequests,
            this.readyState = "",
            this.agent = t.agent || !1,
            this.socket = t.socket,
            this.enablesXDR = t.enablesXDR,
            this.pfx = t.pfx,
            this.key = t.key,
            this.passphrase = t.passphrase,
            this.cert = t.cert,
            this.ca = t.ca,
            this.ciphers = t.ciphers,
            this.rejectUnauthorized = t.rejectUnauthorized,
            this.forceNode = t.forceNode,
            this.extraHeaders = t.extraHeaders,
            this.localAddress = t.localAddress
        }
        var o = n(77)
          , i = n(80);
        t.exports = r,
        i(r.prototype),
        r.prototype.onError = function(t, e) {
            var n = new Error(t);
            return n.type = "TransportError",
            n.description = e,
            this.emit("error", n),
            this
        }
        ,
        r.prototype.open = function() {
            return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening",
            this.doOpen()),
            this
        }
        ,
        r.prototype.close = function() {
            return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(),
            this.onClose()),
            this
        }
        ,
        r.prototype.send = function(t) {
            if ("open" !== this.readyState)
                throw new Error("Transport not open");
            this.write(t)
        }
        ,
        r.prototype.onOpen = function() {
            this.readyState = "open",
            this.writable = !0,
            this.emit("open")
        }
        ,
        r.prototype.onData = function(t) {
            var e = o.decodePacket(t, this.socket.binaryType);
            this.onPacket(e)
        }
        ,
        r.prototype.onPacket = function(t) {
            this.emit("packet", t)
        }
        ,
        r.prototype.onClose = function() {
            this.readyState = "closed",
            this.emit("close")
        }
    },
    167: function(t, e, n) {
        (function(e) {
            var r = n(609);
            t.exports = function(t) {
                var n = t.xdomain
                  , o = t.xscheme
                  , i = t.enablesXDR;
                try {
                    if ("undefined" != typeof XMLHttpRequest && (!n || r))
                        return new XMLHttpRequest
                } catch (t) {}
                try {
                    if ("undefined" != typeof XDomainRequest && !o && i)
                        return new XDomainRequest
                } catch (t) {}
                if (!n)
                    try {
                        return new (e[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                    } catch (t) {}
            }
        }
        ).call(e, n(16))
    },
    168: function(t, e) {
        e.encode = function(t) {
            var e = "";
            for (var n in t)
                t.hasOwnProperty(n) && (e.length && (e += "&"),
                e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
            return e
        }
        ,
        e.decode = function(t) {
            for (var e = {}, n = t.split("&"), r = 0, o = n.length; r < o; r++) {
                var i = n[r].split("=");
                e[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
            }
            return e
        }
    },
    17: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(36)
          , o = n(2)
          , i = n(4)
          , a = n(541)
          , s = n(540)
          , c = n(57)
          , l = n(150)
          , u = n(79)
          , p = n(105)
          , d = n(56)
          , h = n(104)
          , f = n(542)
          , y = n(204)
          , m = n(75)
          , g = n(14)
          , v = n(54)
          , b = (n.n(v),
        n(5))
          , _ = n(31)
          , C = (n.n(_),
        n(103))
          , w = n(205);
        n.d(e, "HelperComponentsModule", function() {
            return O
        });
        var k = this && this.__decorate || function(t, e, n, r) {
            var o, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
            return i > 3 && a && Object.defineProperty(e, n, a),
            a
        }
          , S = {
            suppressScrollX: !0
        }
          , O = function() {
            function t() {}
            return t = k([n.i(o.NgModule)({
                imports: [r.f, i.CommonModule, b.FormsModule, _.TextMaskModule, v.PerfectScrollbarModule.forRoot(S)],
                declarations: [c.a, l.a, a.a, w.a, s.a, u.a, p.a, m.a, d.a, C.a, h.a, f.a, f.b, y.a],
                exports: [c.a, l.a, a.a, w.a, s.a, u.a, p.a, m.a, d.a, C.a, h.a, f.a, f.b, y.a],
                providers: [g.a]
            })], t)
        }()
    },
    192: function(t, e, n) {
        function r() {}
        function o(t) {
            var n = ""
              , r = !1;
            return n += t.type,
            e.BINARY_EVENT != t.type && e.BINARY_ACK != t.type || (n += t.attachments,
            n += "-"),
            t.nsp && "/" != t.nsp && (r = !0,
            n += t.nsp),
            null != t.id && (r && (n += ",",
            r = !1),
            n += t.id),
            null != t.data && (r && (n += ","),
            n += d.stringify(t.data)),
            p("encoded %j as %s", t, n),
            n
        }
        function i(t, e) {
            function n(t) {
                var n = f.deconstructPacket(t)
                  , r = o(n.packet)
                  , i = n.buffers;
                i.unshift(r),
                e(i)
            }
            f.removeBlobs(t, n)
        }
        function a() {
            this.reconstructor = null
        }
        function s(t) {
            var n = {}
              , r = 0;
            if (n.type = Number(t.charAt(0)),
            null == e.types[n.type])
                return u();
            if (e.BINARY_EVENT == n.type || e.BINARY_ACK == n.type) {
                for (var o = ""; "-" != t.charAt(++r) && (o += t.charAt(r),
                r != t.length); )
                    ;
                if (o != Number(o) || "-" != t.charAt(r))
                    throw new Error("Illegal attachments");
                n.attachments = Number(o)
            }
            if ("/" == t.charAt(r + 1))
                for (n.nsp = ""; ++r; ) {
                    var i = t.charAt(r);
                    if ("," == i)
                        break;
                    if (n.nsp += i,
                    r == t.length)
                        break
                }
            else
                n.nsp = "/";
            var a = t.charAt(r + 1);
            if ("" !== a && Number(a) == a) {
                for (n.id = ""; ++r; ) {
                    var i = t.charAt(r);
                    if (null == i || Number(i) != i) {
                        --r;
                        break
                    }
                    if (n.id += t.charAt(r),
                    r == t.length)
                        break
                }
                n.id = Number(n.id)
            }
            return t.charAt(++r) && (n = c(n, t.substr(r))),
            p("decoded %s as %j", t, n),
            n
        }
        function c(t, e) {
            try {
                t.data = d.parse(e)
            } catch (t) {
                return u()
            }
            return t
        }
        function l(t) {
            this.reconPack = t,
            this.buffers = []
        }
        function u(t) {
            return {
                type: e.ERROR,
                data: "parser error"
            }
        }
        var p = n(942)("socket.io-parser")
          , d = n(641)
          , h = n(941)
          , f = n(940)
          , y = n(477);
        e.protocol = 4,
        e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"],
        e.CONNECT = 0,
        e.DISCONNECT = 1,
        e.EVENT = 2,
        e.ACK = 3,
        e.ERROR = 4,
        e.BINARY_EVENT = 5,
        e.BINARY_ACK = 6,
        e.Encoder = r,
        e.Decoder = a,
        r.prototype.encode = function(t, n) {
            if (p("encoding packet %j", t),
            e.BINARY_EVENT == t.type || e.BINARY_ACK == t.type)
                i(t, n);
            else {
                n([o(t)])
            }
        }
        ,
        h(a.prototype),
        a.prototype.add = function(t) {
            var n;
            if ("string" == typeof t)
                n = s(t),
                e.BINARY_EVENT == n.type || e.BINARY_ACK == n.type ? (this.reconstructor = new l(n),
                0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n);
            else {
                if (!y(t) && !t.base64)
                    throw new Error("Unknown type: " + t);
                if (!this.reconstructor)
                    throw new Error("got binary data when not reconstructing a packet");
                (n = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null,
                this.emit("decoded", n))
            }
        }
        ,
        a.prototype.destroy = function() {
            this.reconstructor && this.reconstructor.finishedReconstruction()
        }
        ,
        l.prototype.takeBinaryData = function(t) {
            if (this.buffers.push(t),
            this.buffers.length == this.reconPack.attachments) {
                var e = f.reconstructPacket(this.reconPack, this.buffers);
                return this.finishedReconstruction(),
                e
            }
            return null
        }
        ,
        l.prototype.finishedReconstruction = function() {
            this.reconPack = null,
            this.buffers = []
        }
    },
    193: function(t, e, n) {
        !function(e, n) {
            t.exports = n()
        }(0, function() {
            return function(t) {
                function e(r) {
                    if (n[r])
                        return n[r].exports;
                    var o = n[r] = {
                        exports: {},
                        id: r,
                        loaded: !1
                    };
                    return t[r].call(o.exports, o, o.exports, e),
                    o.loaded = !0,
                    o.exports
                }
                var n = {};
                return e.m = t,
                e.c = n,
                e.p = "",
                e(0)
            }([function(t, e, n) {
                t.exports = n(2)
            }
            , , function(t, e) {
                "use strict";
                function n() {
                    function t() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s
                          , e = t.length;
                        if (t === s || t[0] === m[0] && 1 === e)
                            return m.split(s).concat([f]).concat(v.split(s));
                        if (t === E && S)
                            return m.split(s).concat(["0", E, f]).concat(v.split(s));
                        var n = t[0] === u && R;
                        n && (t = t.toString().substr(1));
                        var a = t.lastIndexOf(E)
                          , c = -1 !== a
                          , l = void 0
                          , g = void 0
                          , b = void 0;
                        if (t.slice(-1 * B) === v && (t = t.slice(0, -1 * B)),
                        c && (S || T) ? (l = t.slice(t.slice(0, V) === m ? V : 0, a),
                        g = t.slice(a + 1, e),
                        g = r(g.replace(d, s))) : l = t.slice(0, V) === m ? t.slice(V) : t,
                        N && (void 0 === N ? "undefined" : i(N)) === h) {
                            var C = "." === w ? "[.]" : "" + w
                              , k = (l.match(new RegExp(C,"g")) || []).length;
                            l = l.slice(0, N + k * L)
                        }
                        return l = l.replace(d, s),
                        I || (l = l.replace(/^0+(0$|[^0])/, "$1")),
                        l = _ ? o(l, w) : l,
                        b = r(l),
                        (c && S || !0 === T) && (t[a - 1] !== E && b.push(y),
                        b.push(E, y),
                        g && ((void 0 === P ? "undefined" : i(P)) === h && (g = g.slice(0, P)),
                        b = b.concat(g)),
                        !0 === T && t[a - 1] === E && b.push(f)),
                        V > 0 && (b = m.split(s).concat(b)),
                        n && (b.length === V && b.push(f),
                        b = [p].concat(b)),
                        v.length > 0 && (b = b.concat(v.split(s))),
                        b
                    }
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = e.prefix
                      , m = void 0 === n ? a : n
                      , g = e.suffix
                      , v = void 0 === g ? s : g
                      , b = e.includeThousandsSeparator
                      , _ = void 0 === b || b
                      , C = e.thousandsSeparatorSymbol
                      , w = void 0 === C ? c : C
                      , k = e.allowDecimal
                      , S = void 0 !== k && k
                      , O = e.decimalSymbol
                      , E = void 0 === O ? l : O
                      , A = e.decimalLimit
                      , P = void 0 === A ? 2 : A
                      , x = e.requireDecimal
                      , T = void 0 !== x && x
                      , M = e.allowNegative
                      , R = void 0 !== M && M
                      , D = e.allowLeadingZeroes
                      , I = void 0 !== D && D
                      , j = e.integerLimit
                      , N = void 0 === j ? null : j
                      , V = m && m.length || 0
                      , B = v && v.length || 0
                      , L = w && w.length || 0;
                    return t.instanceOf = "createNumberMask",
                    t
                }
                function r(t) {
                    return t.split(s).map(function(t) {
                        return f.test(t) ? f : t
                    })
                }
                function o(t, e) {
                    return t.replace(/\B(?=(\d{3})+(?!\d))/g, e)
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ;
                e.default = n;
                var a = "$"
                  , s = ""
                  , c = ","
                  , l = "."
                  , u = "-"
                  , p = /-/
                  , d = /\D+/g
                  , h = "number"
                  , f = /\d/
                  , y = "[]"
            }
            ])
        })
    },
    194: function(t, e, n) {
        "use strict";
        function r(t) {
            return !!t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(9);
        e.toBoolean = r,
        n.d(e, "User", function() {
            return i
        });
        var i = function() {
            function t() {
                this.login = "",
                this.email = "",
                this.firstName = "",
                this.lastName = "",
                this.fullName = "",
                this.country = "",
                this.address = "",
                this.city = "",
                this.postCode = "",
                this.phone = "",
                this.currency = "USD",
                this.loggedIn = !1,
                this.guest = !1,
                this.leverage = 100,
                this.balance = 0,
                this.equity = 0,
                this.margin = 0,
                this.freeMargin = 0,
                this.credit = 0,
                this.source = Array.isArray(o.Constants.source.live) ? o.Constants.source.live[0] : o.Constants.source.live,
                this.amf = !1
            }
            return t.prototype.onLogin = function(t, e) {
                this.login = t.Login || "",
                this.fullName = t.FullName || "Guest",
                this.firstName = t.firstName || "",
                this.lastName = t.lastName || "",
                this.country = t.Country || "",
                this.address = t.Address || "",
                this.city = t.City || "",
                this.postCode = t.PostalCode || "",
                this.guest = e,
                this.phone = t.Phone && t.Phone.replace("+", "") || "",
                this.currency = t.Currency,
                this.leverage = t.Leverage || 100,
                this.balance = t.Balance || 0,
                this.margin = t.Margin || 0,
                this.credit = t.Credit || 0,
                this.source = t.Source || (Array.isArray(o.Constants.source.live) ? o.Constants.source.live[0] : o.Constants.source.live),
                this.amf = r(t.amf)
            }
            ,
            t.prototype.updateBalance = function(t) {
                this.balance = parseFloat(t.Balance),
                this.margin = parseFloat(t.Margin),
                this.credit = parseFloat(t.Credit)
            }
            ,
            t
        }()
    },
    195: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        n.d(e, "FallbackLocale", function() {
            return r
        });
        var r = {
            _fallback: !0,
            availableFunds: "Available funds",
            usedFunds: "Used Funds",
            accountValue: "Account Value",
            totalPL: "Total P/L",
            accountId: "Account ID",
            login: "Log In",
            logout: "Logout",
            password: "Password",
            server: "Server",
            close: "Close",
            dateRange: {
                day: "Today",
                threedays: "Last 3 days",
                week: "Last Week",
                month: "Last Month",
                threemonths: "Last 3 months",
                all: "All period"
            },
            openTrades: "Open Trades",
            volumeInLot: "Volume in lot",
            amount: "Volume",
            sell: "Sell",
            sell_limit: "Sell Limit",
            sell_stop: "Sell Stop",
            buy: "Buy",
            buy_limit: "Buy Limit",
            buy_stop: "Buy Stop",
            credit: "Credit",
            balance: "Balance",
            orderId: "Order ID",
            asset: "Symbol",
            openTime: "Created time",
            closedTime: "Closed time",
            profit: "Profit",
            takeProfit: "Take Profit",
            stopLoss: "Stop loss",
            direction: "Direction",
            openPrice: "Open Price",
            closePrice: "Current Price",
            closedPrice: "Closed Price",
            commission: "Commission",
            swap: "Swap",
            chart: "Trading Chart",
            information: "Information",
            price: "Price",
            dalyChange: "D. Chng",
            requiredMargin: "Required Margin",
            advanced: "Advanced",
            advancedHide: "Hide Advanced",
            pipsValue: "Pips Value",
            forex: "Forex",
            favorites: "Favorites",
            crypto: "Crypto",
            commodities: "Commodities",
            stocks: "Stocks",
            indices: "Indices",
            actions: {
                0: "Buy",
                1: "Sell",
                6: "Balance",
                7: "Credit"
            },
            serverDateFormat: "DD/MM/YYYY  HH:mm:ss",
            openDateFormat: "HH:mm:ss",
            closeDateFormat: "DD/MM/YYYY HH:mm:ss",
            chartToolTipFormat: "%b %e, %H:%M:%S",
            datepickerFormat: "DD-MM-YYYY",
            messages: {
                authFailed: "Invalid login or password",
                datepickerFormat: "DD/MM/YYYY",
                tokenFailed: "Invalid token",
                cancelRequest: "Request canceled",
                characters: "Only characters",
                mixWordsNumbers: "characters or numbers",
                authTimeout: "Authentication timeout",
                orderProcessing: "Order is Processing",
                orderSuccess: "Order Successful",
                dontSpace: "Don't use space",
                wrongPassword: "The password does not match",
                orderFailed: "Order execution failed",
                withdrawSuccess: "Withdraw execution successful",
                withdrawFailed: "Withdraw execution failed",
                loginRequired: "Login is required",
                loginFailed: "Login failed",
                loginMinlength: "Login cannot be less than 2 characters long.",
                loginMaxlength: "Login cannot be more than 10 characters long.",
                passwordRequired: "Enter a password",
                passwordMinlength: "Can't be less than 8 characters long.",
                passwordMaxlength: "Can't be more than 16 characters long.",
                registrationFailed: "Registration failed",
                registrationSuccess: "Registration successful",
                mt4AuthFailed: "Failed to login into trading account",
                updateCustomerFailed: "Failed to update personal details",
                switchDemoFailed: "Failed to switch to demo account",
                inappFailed: "Failed to open wallet",
                depositFailed: "Transaction failed",
                depositSuccess: "Transaction successful",
                deleteOrderFailed: "Failed to delete order",
                required: "Required",
                too_short: "Too Short",
                too_long: "Too Long",
                numbers_chars: "Must contain numbers and characters",
                invalid_email: "Invalid email address",
                password_not_matched: "Passwords are not matched",
                alphanumeric: "Please use only alphanumeric characters",
                numbers: "Please use only digits",
                accountNotExists: "Account with this email does not exist",
                password_changed: "Password changed successfully",
                err_password_changed: "Error change password",
                general_error: "Problem in operation",
                general_error_text: "We are sorry, but but your request can not be processed at this time. Please try again or contact our support team",
                modifyTrade: "Trade was updated",
                2000: "Document already approved",
                2001: "Ticket is not assigned to customer",
                2002: "Login failed. Check your email and password",
                3006: "Invalid login or password",
                3008: "Transaction failed",
                3009: "Transaction failed",
                3021: "Customer doesn't exist",
                2007: "User already exists",
                4000: "Please try again",
                4001: "Please try again with timeout",
                4002: "Login failed. Try again",
                4003: "Response timeout",
                4004: "You must login first",
                4005: "Fail to login account, try again in a few minutes",
                4006: "Account not found, contact support",
                4007: "Please try again with timeout",
                4008: "Please try again with timeout",
                4009: "General error",
                4010: "Upload failed, please try again",
                Err600: "Problem in operation",
                Err601: "Problem in operation",
                Err602: "Problem in operation",
                Err603: "Problem in operation",
                Err606: "Problem in operation",
                Err607: "Problem in operation",
                Err666: "You are not logged in",
                Err0: "Wrong username or password",
                Err1: "Failed to open position, try again or contact our support",
                Err2: "Username is mandatory",
                Err3: "Username and Password fields are mandatory",
                Err4: "We cannot process your request, try later or contact support",
                Err5: "An option having related trades cannot be deleted",
                Err6: "An option having related trades cannot be deleted",
                Err7: "Not enough funds in your balance to process withdrawal request",
                Err8: "An error prevent completing your transaction, try later or contact support",
                Err9: "Please enter a valid deposit amount",
                Err10: "Deposit amount is invalid",
                Err11: "Deposit amount must be a positive value",
                Err12: "Your transaction has been declined. Try later or contact support",
                Err13: "Not enough funds in your account to process your withdraw request",
                Err14: "Your deposit request means of payment is invalid",
                Err15: "Please enter a valid withdrawal amount",
                Err16: "Please enter a valid withdrawal amount",
                Err17: "Please enter a valid withdrawal amount",
                Err18: "Your withdraw request was declined.  Try later or contact support",
                Err19: "The system is busy, please try again later",
                Err20: "We cannot process your request, try later or contact support",
                Err21: "The required email already exists.",
                Err22: "We cannot process your request, try later or contact support",
                Err23: "Not enough funds",
                Err24: "Cannot open trade when the market is closed",
                Err25: "We cannot process your request, try later or contact support",
                Err26: "Your account is prohibited to perform this action. Contact support",
                Err29: "The invest amount is too high. Please lower your investment amount",
                Err30: "We cannot process your request, try later or contact support",
                Err32: "Reset password failed",
                Err33: "General Exception",
                Err34: "User not  exist",
                Err35: "Trade disable due forex event",
                Err36: "Trade disable due no quotes",
                Err37: "Invalid deposit parameters",
                Err49: "Only for active accounts. Would you like to deposit and start trading?",
                Err50: "leaderID follow followerID Exists",
                Err51: "leaderID or followerID not correct",
                Err54: "Due to regulatory reasons, we cannot register customers from your region",
                Err55: "Price is invalid, Would you like to reinvest on the current price?",
                Err56: "You have tried registering with an invalid email",
                Err57: "Payment operation was terminated, try later or contact support",
                Err59: "Due to regulatory reasons, we cannot register customers from your region",
                Err60: "You can't login at this time",
                0: "",
                1: "No change defined",
                2: "General Error",
                3: "Invalid Parameters",
                4: "Technical Problem",
                5: "",
                6: "No Connection",
                7: "Not Enough Rights",
                8: "Too Many Requests",
                9: "Malfunction Occured",
                10: "",
                111: "Wrong Security Session",
                64: "Account Disabled",
                65: "Wrong Login/password",
                66: "",
                128: "Trade transaction timeout expired",
                129: "Order has wrong prices",
                130: "Wrong stops level",
                131: "Wrong lot size",
                132: "Market closed",
                133: "Trade disabled",
                134: "There is not sufficient funds in your account for order execution. Please lower the amount or add additional funds",
                135: "Price changed",
                136: "No quotes",
                137: "Broker is busy",
                138: "Requote",
                139: "Order is proceed by dealer and cannot be",
                140: "Allowed only BUY orders",
                141: "Too many requests from one client",
                142: "Trade request accepted by server and placed in request queue",
                143: "Trade request accepted by dealerd",
                144: "Trade request canceled by client",
                145: "Trade modification denied",
                146: "Trade context is busy (used in client terminal)",
                147: "Using expiration date denied",
                148: "Too many orders",
                149: "Hedge is prohibited",
                150: "Prohibited by fifo rule",
                1000: "",
                1001: "No change defined",
                1002: "General Error",
                1003: "Invalid Parameters",
                1004: "Technical Problem",
                1005: "",
                1006: "No Connection",
                1007: "Not Enough Rights",
                1008: "Too Many Requests",
                1009: "Malfunction Occured",
                1010: "",
                1111: "Wrong Security Session",
                1064: "Account Disabled",
                1065: "Wrong Login/password",
                1066: "",
                1128: "Trade transaction timeout expired",
                1129: "Order has wrong prices",
                1130: "Wrong stops level",
                1131: "Wrong lot size",
                1132: "Market closed",
                1133: "Trade disabled",
                1134: "There is not sufficient funds in your account for order execution. Please lower the amount or add additional funds",
                1135: "Price changed",
                1136: "No quotes",
                1137: "Broker is busy",
                1138: "Requote",
                1139: "Order is proceed by dealer and cannot be",
                1140: "Allowed only BUY orders",
                1141: "Too many requests from one client",
                1142: "Trade request accepted by server and placed in request queue",
                1143: "Trade request accepted by dealerd",
                1144: "Trade request canceled by client",
                1145: "Trade modification denied",
                1146: "Trade context is busy (used in client terminal)",
                1147: "Using expiration date denied",
                1148: "Too many orders",
                1149: "Hedge is prohibited",
                1150: "Prohibited by fifo rule"
            },
            new_account: "Create a New Account",
            new_live_account: "Create a Live Account",
            new_demo_account: "Create a Demo Account",
            pendingTrades: "Pending Orders",
            spread: "Spread",
            trading_hours: "Trading Hours",
            closedTrades: "Trade History",
            demo: "Demo",
            live: "Live",
            pips: "Pips",
            invest: "Invest",
            base_asset: "Base Asset",
            quote_asset: "Quote Asset",
            leverage: "Leverage",
            digits: "Digits",
            lot_value: "Lot value",
            min_max_volume: "Min-Max volume",
            volume_step: "Volume step",
            required_margin_buy: "Required Margin buy (1 Lot)",
            required_margin_sell: "Required Margin sell (1 Lot)",
            swap_buy: "Swap buy (1 Lot)",
            swap_sell: "Swap sell (1 Lot)",
            minimum_change: "Minimum change",
            daysOfWeek: {
                sun: "Sun",
                mon: "Mon",
                tue: "Tue",
                wed: "Wed",
                thu: "Thu",
                fri: "Fri",
                sat: "Sat"
            },
            search_results: "search results",
            no_chart_data: "No chart data",
            trade_deleted: "Trade #$id is deleted",
            close_trade: "Close trade",
            delete_trade: "Delete trade",
            close_trade_now: "Close the trade now with",
            yes: "Yes",
            no: "No",
            close_position_requote: "Close position requote",
            asset_name: "Asset Name",
            price_changed: "The price you selected has changed due to market high volatility",
            want_to_close: "Would you want to close this trade at this price?",
            want_to_open: "Would you want to open this position at this price?",
            current_rate: "Current rate",
            cancel: "Cancel",
            accept_changes: "Accept changes",
            stop_Loss: "Stop Loss",
            value: "Value",
            open_trade_when: "Open trade when rate is",
            insufficient_funds: "Insufficient Funds",
            your_available_funds: "Your available funds are not enough to perform the trade. Please add more funds to complete the trade",
            deposit: "Deposit",
            open_position_requote: "Open position requote",
            entry_price: "Entry Price",
            order: "Order",
            at: "at",
            sl_at: "SL at",
            tp_at: "TP at",
            traders_trend: "Traders Trend",
            sl: "SL",
            tp: "TP",
            delete: "Delete",
            pl: "P/L",
            st_tp: "Stop Loss / Take Profit",
            hight_low: "Hight / Low",
            lots: "Lots",
            set_stop_loss: "Set Stop Loss",
            set_take_profit: "Set Take Profit",
            open_trade_when_rate_reach: "Open trade when rate reach",
            submit_changes: "Submit Changes",
            show_more: "Show more...",
            please_select: "Please select",
            trade_history: "Trade history",
            error_loading_trading_platform: "Error loading trading platform",
            try_again: "Try again",
            please_select_account: "Please select trading account",
            equity: "Equity",
            available: "Available",
            current_profit: "Current profit",
            closed_at_price: "closed at price",
            points: "Points",
            floating: "Floating",
            actionsId: {
                buy: "buy",
                sell: "sell",
                buy_limit: "buy_limit",
                sell_limit: "sell_limit",
                buy_stop: "buy_stop",
                sell_stop: "sell_stop",
                balance: "balance",
                credit: "credit"
            },
            no_trade_history: "No trade history",
            next: "Next",
            previous: "Previous",
            openTradingTimes: {
                opening: "Opening in",
                day: "day",
                hour: "hour",
                minute: "min",
                second: "sec",
                marketClosed: "Market closed"
            },
            searchAssetsPlaceholder: "Search for assets to trade...",
            marginCall: "Margin Call",
            attention: "ATTENTION:",
            marginCallMessage: "Your trading account is at immediate risk. The net equity of your account has fallen below the total amount required in order to maintain your open positions.<br/><br/> We strongly recommend making an additional deposit of funds into your account otherwise your current trading positions are at risk of being cut back or closed out."
        }
    },
    204: function(t, e, n) {
        "use strict";
        var r = n(2);
        n.d(e, "a", function() {
            return a
        });
        var o = this && this.__decorate || function(t, e, n, r) {
            var o, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
            return i > 3 && a && Object.defineProperty(e, n, a),
            a
        }
          , i = this && this.__metadata || function(t, e) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(t, e)
        }
          , a = function() {
            function t(t) {
                this._elementRef = t,
                this.clickOutside = new r.EventEmitter
            }
            return t.prototype.onClick = function(t, e) {
                if (e) {
                    this._elementRef.nativeElement.contains(e) || this.clickOutside.emit(t)
                }
            }
            ,
            o([n.i(r.Output)(), i("design:type", Object)], t.prototype, "clickOutside", void 0),
            o([n.i(r.HostListener)("document:click", ["$event", "$event.target"]), i("design:type", Function), i("design:paramtypes", [MouseEvent, HTMLElement]), i("design:returntype", void 0)], t.prototype, "onClick", null),
            t = o([n.i(r.Directive)({
                selector: "[clickOutside]"
            }), i("design:paramtypes", [r.ElementRef])], t)
        }()
    },
    205: function(t, e, n) {
        "use strict";
        function r() {
            var t = function(t) {
                return 0 === ["[0-9]+", "[A-Za-z]+"].map(function(e) {
                    return new RegExp(e,"g").test(t)
                }).filter(function(t) {
                    return !1 === t
                }).length
            }
              , e = function(t) {
                var e = t.match(/\W+/g);
                if (e && e.length) {
                    var n = e.join("")
                      , r = new RegExp("[!\"#$%&'()*+,-./:;<>=?@^_`{}~£€]+","g")
                      , o = n.match(r);
                    return !!o && o.shift().length === n.length
                }
                return !0
            };
            return function(n) {
                return n.value && !t(n.value) ? null : n.value && e(n.value) ? null : {
                    passwordMix: {
                        valid: !1
                    }
                }
            }
        }
        var o = n(2)
          , i = n(5);
        n.d(e, "a", function() {
            return s
        });
        var a = this && this.__decorate || function(t, e, n, r) {
            var o, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
            return i > 3 && a && Object.defineProperty(e, n, a),
            a
        }
          , s = function() {
            function t() {
                this.validator = r()
            }
            e = t,
            t.prototype.validate = function(t) {
                return this.validator(t)
            }
            ;
            var e;
            return t = e = a([n.i(o.Directive)({
                selector: "[passwordMix][ngModel]",
                providers: [{
                    provide: i.NG_VALIDATORS,
                    useExisting: e,
                    multi: !0
                }]
            })], t)
        }()
    },
    206: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return r
        }),
        n.d(e, "a", function() {
            return o
        });
        var r = function(t) {
            var e = function() {
                return {
                    reqID: t.reqId
                }
            };
            return Object.assign(t, e()),
            delete t.reqId,
            t
        }
          , o = function(t) {
            var e = function() {
                return {
                    code: t.Description,
                    status: parseInt(t.Code, 10) > 0 ? 1 : 0,
                    reqId: t.reqID
                }
            };
            return Object.assign(t, e()),
            delete t.Code,
            delete t.Description,
            delete t.reqID,
            t
        }
    },
    207: function(t, e) {
        var n = [].slice;
        t.exports = function(t, e) {
            if ("string" == typeof e && (e = t[e]),
            "function" != typeof e)
                throw new Error("bind() requires a function");
            var r = n.call(arguments, 2);
            return function() {
                return e.apply(t, r.concat(n.call(arguments)))
            }
        }
    },
    221: function(t, e, n) {
        (function(t) {
            function r(e) {
                var n = !1
                  , r = !1
                  , s = !1 !== e.jsonp;
                if (t.location) {
                    var c = "https:" === location.protocol
                      , l = location.port;
                    l || (l = c ? 443 : 80),
                    n = e.hostname !== location.hostname || l !== e.port,
                    r = e.secure !== c
                }
                if (e.xdomain = n,
                e.xscheme = r,
                "open"in new o(e) && !e.forceJSONP)
                    return new i(e);
                if (!s)
                    throw new Error("JSONP disabled");
                return new a(e)
            }
            var o = n(167)
              , i = n(603)
              , a = n(602)
              , s = n(604);
            e.polling = r,
            e.websocket = s
        }
        ).call(e, n(16))
    },
    222: function(t, e, n) {
        function r(t) {
            var e = t && t.forceBase64;
            u && !e || (this.supportsBinary = !1),
            o.call(this, t)
        }
        var o = n(166)
          , i = n(168)
          , a = n(77)
          , s = n(106)
          , c = n(480)
          , l = n(112)("engine.io-client:polling");
        t.exports = r;
        var u = function() {
            return null != new (n(167))({
                xdomain: !1
            }).responseType
        }();
        s(r, o),
        r.prototype.name = "polling",
        r.prototype.doOpen = function() {
            this.poll()
        }
        ,
        r.prototype.pause = function(t) {
            function e() {
                l("paused"),
                n.readyState = "paused",
                t()
            }
            var n = this;
            if (this.readyState = "pausing",
            this.polling || !this.writable) {
                var r = 0;
                this.polling && (l("we are currently polling - waiting to pause"),
                r++,
                this.once("pollComplete", function() {
                    l("pre-pause polling complete"),
                    --r || e()
                })),
                this.writable || (l("we are currently writing - waiting to pause"),
                r++,
                this.once("drain", function() {
                    l("pre-pause writing complete"),
                    --r || e()
                }))
            } else
                e()
        }
        ,
        r.prototype.poll = function() {
            l("polling"),
            this.polling = !0,
            this.doPoll(),
            this.emit("poll")
        }
        ,
        r.prototype.onData = function(t) {
            var e = this;
            l("polling got data %s", t);
            var n = function(t, n, r) {
                if ("opening" === e.readyState && e.onOpen(),
                "close" === t.type)
                    return e.onClose(),
                    !1;
                e.onPacket(t)
            };
            a.decodePayload(t, this.socket.binaryType, n),
            "closed" !== this.readyState && (this.polling = !1,
            this.emit("pollComplete"),
            "open" === this.readyState ? this.poll() : l('ignoring poll - transport state "%s"', this.readyState))
        }
        ,
        r.prototype.doClose = function() {
            function t() {
                l("writing close packet"),
                e.write([{
                    type: "close"
                }])
            }
            var e = this;
            "open" === this.readyState ? (l("transport open - closing"),
            t()) : (l("transport not open - deferring close"),
            this.once("open", t))
        }
        ,
        r.prototype.write = function(t) {
            var e = this;
            this.writable = !1;
            var n = function() {
                e.writable = !0,
                e.emit("drain")
            };
            a.encodePayload(t, this.supportsBinary, function(t) {
                e.doWrite(t, n)
            })
        }
        ,
        r.prototype.uri = function() {
            var t = this.query || {}
              , e = this.secure ? "https" : "http"
              , n = "";
            return !1 !== this.timestampRequests && (t[this.timestampParam] = c()),
            this.supportsBinary || t.sid || (t.b64 = 1),
            t = i.encode(t),
            this.port && ("https" === e && 443 !== Number(this.port) || "http" === e && 80 !== Number(this.port)) && (n = ":" + this.port),
            t.length && (t = "?" + t),
            e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
        }
    },
    223: function(t, e, n) {
        var r, o;
        !function(i, a, s) {
            void 0 !== t && t.exports ? t.exports = s() : (r = s,
            void 0 !== (o = "function" == typeof r ? r.call(e, n, e, t) : r) && (t.exports = o))
        }(0, 0, function() {
            "use strict";
            var t = function(t) {
                var e, n;
                e = Array.prototype.forEach,
                n = Array.prototype.map,
                this.each = function(t, n, r) {
                    if (null !== t)
                        if (e && t.forEach === e)
                            t.forEach(n, r);
                        else if (t.length === +t.length) {
                            for (var o = 0, i = t.length; o < i; o++)
                                if (n.call(r, t[o], o, t) === {})
                                    return
                        } else
                            for (var a in t)
                                if (t.hasOwnProperty(a) && n.call(r, t[a], a, t) === {})
                                    return
                }
                ,
                this.map = function(t, e, r) {
                    var o = [];
                    return null == t ? o : n && t.map === n ? t.map(e, r) : (this.each(t, function(t, n, i) {
                        o[o.length] = e.call(r, t, n, i)
                    }),
                    o)
                }
                ,
                "object" == typeof t ? (this.hasher = t.hasher,
                this.screen_resolution = t.screen_resolution,
                this.canvas = t.canvas,
                this.ie_activex = t.ie_activex) : "function" == typeof t && (this.hasher = t)
            };
            return t.prototype = {
                get: function() {
                    var t = [];
                    if (t.push(navigator.userAgent),
                    t.push(navigator.language),
                    t.push(screen.colorDepth),
                    this.screen_resolution) {
                        void 0 !== this.getScreenResolution() && t.push(this.getScreenResolution().join("x"))
                    }
                    return t.push((new Date).getTimezoneOffset()),
                    t.push(this.hasSessionStorage()),
                    t.push(this.hasLocalStorage()),
                    t.push(!!window.indexedDB),
                    document.body ? t.push(typeof document.body.addBehavior) : t.push("undefined"),
                    t.push(typeof window.openDatabase),
                    t.push(navigator.cpuClass),
                    t.push(navigator.platform),
                    t.push(navigator.doNotTrack),
                    t.push(this.getPluginsString()),
                    this.canvas && this.isCanvasSupported() && t.push(this.getCanvasFingerprint()),
                    this.hasher ? this.hasher(t.join("###"), 31) : this.murmurhash3_32_gc(t.join("###"), 31)
                },
                murmurhash3_32_gc: function(t, e) {
                    var n, r, o, i, a, s, c, l;
                    for (n = 3 & t.length,
                    r = t.length - n,
                    o = e,
                    a = 3432918353,
                    s = 461845907,
                    l = 0; l < r; )
                        c = 255 & t.charCodeAt(l) | (255 & t.charCodeAt(++l)) << 8 | (255 & t.charCodeAt(++l)) << 16 | (255 & t.charCodeAt(++l)) << 24,
                        ++l,
                        c = (65535 & c) * a + (((c >>> 16) * a & 65535) << 16) & 4294967295,
                        c = c << 15 | c >>> 17,
                        c = (65535 & c) * s + (((c >>> 16) * s & 65535) << 16) & 4294967295,
                        o ^= c,
                        o = o << 13 | o >>> 19,
                        i = 5 * (65535 & o) + ((5 * (o >>> 16) & 65535) << 16) & 4294967295,
                        o = 27492 + (65535 & i) + ((58964 + (i >>> 16) & 65535) << 16);
                    switch (c = 0,
                    n) {
                    case 3:
                        c ^= (255 & t.charCodeAt(l + 2)) << 16;
                    case 2:
                        c ^= (255 & t.charCodeAt(l + 1)) << 8;
                    case 1:
                        c ^= 255 & t.charCodeAt(l),
                        c = (65535 & c) * a + (((c >>> 16) * a & 65535) << 16) & 4294967295,
                        c = c << 15 | c >>> 17,
                        c = (65535 & c) * s + (((c >>> 16) * s & 65535) << 16) & 4294967295,
                        o ^= c
                    }
                    return o ^= t.length,
                    o ^= o >>> 16,
                    o = 2246822507 * (65535 & o) + ((2246822507 * (o >>> 16) & 65535) << 16) & 4294967295,
                    o ^= o >>> 13,
                    o = 3266489909 * (65535 & o) + ((3266489909 * (o >>> 16) & 65535) << 16) & 4294967295,
                    (o ^= o >>> 16) >>> 0
                },
                hasLocalStorage: function() {
                    try {
                        return !!window.localStorage
                    } catch (t) {
                        return !0
                    }
                },
                hasSessionStorage: function() {
                    try {
                        return !!window.sessionStorage
                    } catch (t) {
                        return !0
                    }
                },
                isCanvasSupported: function() {
                    var t = document.createElement("canvas");
                    return !(!t.getContext || !t.getContext("2d"))
                },
                isIE: function() {
                    return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
                },
                getPluginsString: function() {
                    return this.isIE() && this.ie_activex ? this.getIEPluginsString() : this.getRegularPluginsString()
                },
                getRegularPluginsString: function() {
                    return this.map(navigator.plugins, function(t) {
                        var e = this.map(t, function(t) {
                            return [t.type, t.suffixes].join("~")
                        }).join(",");
                        return [t.name, t.description, e].join("::")
                    }, this).join(";")
                },
                getIEPluginsString: function() {
                    if (window.ActiveXObject) {
                        var t = ["ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF", "PDF.PdfCtrl", "QuickTime.QuickTime", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer", "SWCtl.SWCtl", "WMPlayer.OCX", "AgControl.AgControl", "Skype.Detection"];
                        return this.map(t, function(t) {
                            try {
                                return new ActiveXObject(t),
                                t
                            } catch (t) {
                                return null
                            }
                        }).join(";")
                    }
                    return ""
                },
                getScreenResolution: function() {
                    return [screen.height, screen.width]
                },
                getCanvasFingerprint: function() {
                    var t = document.createElement("canvas")
                      , e = t.getContext("2d")
                      , n = "http://valve.github.io";
                    return e.textBaseline = "top",
                    e.font = "14px 'Arial'",
                    e.textBaseline = "alphabetic",
                    e.fillStyle = "#f60",
                    e.fillRect(125, 1, 62, 20),
                    e.fillStyle = "#069",
                    e.fillText(n, 2, 15),
                    e.fillStyle = "rgba(102, 204, 0, 0.7)",
                    e.fillText(n, 4, 17),
                    t.toDataURL()
                }
            },
            t
        })
    },
    224: function(t, e, n) {
        (function(e) {
            function r(t) {
                function n(t) {
                    if (!t)
                        return !1;
                    if (e.Buffer && e.Buffer.isBuffer && e.Buffer.isBuffer(t) || e.ArrayBuffer && t instanceof ArrayBuffer || e.Blob && t instanceof Blob || e.File && t instanceof File)
                        return !0;
                    if (o(t)) {
                        for (var r = 0; r < t.length; r++)
                            if (n(t[r]))
                                return !0
                    } else if (t && "object" == typeof t) {
                        t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON());
                        for (var i in t)
                            if (Object.prototype.hasOwnProperty.call(t, i) && n(t[i]))
                                return !0
                    }
                    return !1
                }
                return n(t)
            }
            var o = n(608);
            t.exports = r
        }
        ).call(e, n(16))
    },
    225: function(t, e) {
        var n = [].indexOf;
        t.exports = function(t, e) {
            if (n)
                return t.indexOf(e);
            for (var r = 0; r < t.length; ++r)
                if (t[r] === e)
                    return r;
            return -1
        }
    },
    25: function(t, e, n) {
        "use strict";
        function r() {
            return window
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        n.d(e, "WindowRef", function() {
            return o
        });
        var o = function() {
            function t() {}
            return Object.defineProperty(t.prototype, "nativeWindow", {
                get: function() {
                    return r()
                },
                enumerable: !0,
                configurable: !0
            }),
            t
        }()
    },
    27: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(2)
          , o = n(947)
          , i = (n.n(o),
        n(62))
          , a = n(936)
          , s = (n.n(a),
        n(544))
          , c = n(9)
          , l = n(14)
          , u = n(206);
        n.d(e, "api", function() {
            return d
        });
        var p = function() {
            function t(t) {
                this.utils = t,
                this.requests = {},
                this.request = {},
                this.zone = new r.NgZone({
                    enableLongStackTrace: !1
                }),
                this.request = {
                    login: this.createEmitMethod("login"),
                    loginToken: this.createEmitMethod("loginToken"),
                    loginDetails: this.createEmitMethod("loginDetails"),
                    loginDetailsMT4: this.createEmitMethod("loginDetailsMT4Login"),
                    loginTokenDetails: this.createEmitMethod("loginTokenDetails"),
                    loginTokenDetailsMT4: this.createEmitMethod("loginTokenDetailsMT4Login"),
                    quotesHistoryByTimeFrame: this.createEmitMethod("QuotesHistoryByTimeFrame"),
                    mt4LoginToken: this.createEmitMethod("MT4LoginToken"),
                    mt4Login: this.createEmitMethod("MT4Login"),
                    mt4Logout: this.createEmitMethod("MT4Logout"),
                    mt4GetClientSymbols: this.createEmitMethod("MT4GetClientSymbols"),
                    mt4GetAllSymbols: this.createEmitMethod("MT4GetAllSymbols"),
                    mt4GetSymbolsSnapshot: this.createEmitMethod("MT4GetSymbolsSnapshot"),
                    mt4GetOpenPositions: this.createEmitMethod("MT4GetOpenPositions"),
                    mt4GetClosedPositions: this.createEmitMethod("MT4GetClosedPositions"),
                    mt4GetChart: this.createEmitMethod("MT4GetChart"),
                    mt4OpenPosition: this.createEmitMethod("MT4OpenPosition"),
                    _mt4OpenPosition: this.createEmitMethod("MT4OpenPosition", !0),
                    mt4ClosePosition: this.createEmitMethod("MT4ClosePosition"),
                    _mt4ClosePosition: this.createEmitMethod("MT4ClosePosition", !0),
                    mt4UpdatePosition: this.createEmitMethod("MT4UpdatePosition"),
                    mt4DeletePosition: this.createEmitMethod("MT4DeletePosition"),
                    getCustomerDetails: this.createEmitMethod("customerDetails"),
                    logout: this.createEmitMethod("logout"),
                    getCountries: this.createEmitMethod("countries"),
                    getCurrencies: this.createEmitMethod("currencies"),
                    creditCardDeposit: this.createEmitMethod("creditCardDeposit"),
                    geo: this.createEmitMethod("ipInfo"),
                    timezone: this.createEmitMethod("timezone"),
                    quotesSubscribe: this.createEmitMethod("quotesSubscribe"),
                    quotesUnsubscribe: this.createEmitMethod("quotesUnsubscribe")
                },
                this.config = i.AppConfig.socket;
                var e = this.utils.getBrandDomain();
                e && c.Constants.sourcesList[e] && (this.config.path += e,
                c.Constants.brandDomain = e,
                c.Constants.source = c.Constants.sourcesList[e]),
                this.socket = a(this.config.serverAddress, this.config)
            }
            return t.prototype.connect = function() {
                var t = this;
                return new Promise(function(e, n) {
                    t.socket.connect(),
                    t.socket.on("connect", function() {
                        e("connected")
                    })
                }
                )
            }
            ,
            t.prototype.disconnect = function() {
                var t = this;
                return new Promise(function(e, n) {
                    t.socket.disconnect(),
                    t.socket.on("disconnect", function() {
                        e("disconnected")
                    })
                }
                )
            }
            ,
            t.prototype.onConnect = function(t) {
                this.socket.on("connect", t)
            }
            ,
            t.prototype.onDisconnect = function(t) {
                this.socket.on("disconnect", t)
            }
            ,
            t.prototype.subscribe = function(t, e) {
                var n = this;
                this.socket.on(t, function(t) {
                    n.zone.run(function() {
                        return e(t)
                    })
                })
            }
            ,
            t.prototype.asyncSubscribe = function(t, e) {
                this.socket.on(t, function(t) {
                    return e(t)
                })
            }
            ,
            t.prototype.unsubscribe = function(t) {
                this.socket.off(t)
            }
            ,
            t.prototype.getInstance = function() {
                return this.socket
            }
            ,
            t.prototype.createEmitMethod = function(t, e) {
                var n = this;
                return void 0 === e && (e = !1),
                function(r, o) {
                    return void 0 === r && (r = {}),
                    void 0 === o && (o = 0),
                    e ? n.mockEmit(t, r, o) : n.emit(t, r, o)
                }
            }
            ,
            t.prototype.on = function(t, e) {
                return this.socket.on(t, e),
                e
            }
            ,
            t.prototype.emit = function(t, e, r) {
                var o = this;
                void 0 === r && (r = 0);
                var i = this.setReqId(t, e)
                  , a = Object.assign({}, e, {
                    reqId: i
                })
                  , s = null
                  , l = function(e) {
                    return delete o.requests[i],
                    clearTimeout(s),
                    e ? o.socket.off(t, e) : o.socket.off(t)
                };
                if (this.requests.hasOwnProperty(i) && (r && 0 === r && l(),
                r && 1 === r))
                    return this.requests[i];
                var p = new Promise(function(e, r) {
                    var p, d = function(d) {
                        if (d = n.i(u.a)(d),
                        !d.reqId || d.reqId === i) {
                            if (delete o.requests[i],
                            o.socket.off(t, p),
                            clearTimeout(s),
                            "string" == typeof d)
                                try {
                                    var h = JSON.parse(d);
                                    e(h)
                                } catch (t) {
                                    l(p),
                                    r({
                                        source: "api",
                                        type: c.Constants.error.type.SYSTEM,
                                        severity: "critical",
                                        code: "invalidResponse",
                                        data: {
                                            request: a,
                                            response: d
                                        }
                                    })
                                }
                            e(d)
                        }
                    };
                    o.socket.emit(t, n.i(u.b)(a)),
                    p = o.on(t, d),
                    s = setTimeout(function() {
                        l(p),
                        r({
                            source: "api",
                            type: c.Constants.error.type.SYSTEM,
                            severity: "critical",
                            code: "requestTimeout",
                            data: {
                                request: {
                                    event: t,
                                    data: a
                                }
                            }
                        })
                    }, o.config.connectTimeout)
                }
                );
                return this.requests[i] = p,
                p
            }
            ,
            t.prototype.setReqId = function(t, e) {
                return o.Md5.hashStr(t + JSON.stringify(e) + this.socket.id).toString()
            }
            ,
            t.prototype.mockEmit = function(t, e, r) {
                var o = this;
                void 0 === r && (r = 0),
                console.log("mock request:", t, "with data:", e);
                var i, a = this.setReqId(t, e);
                Object.assign({}, e, {
                    reqId: a
                });
                this.requests.hasOwnProperty(a) && r && 0 === r && (console.warn("mock request already send", t, e),
                delete this.requests[a]);
                var c = new Promise(function(e, r) {
                    i = setTimeout(function() {
                        clearTimeout(i),
                        delete o.requests[a];
                        var r = n.i(u.a)(Object.assign({}, s.a[t]));
                        e(r)
                    }, 300)
                }
                );
                return this.requests[a] = c,
                c
            }
            ,
            t
        }()
          , d = new p(new l.a)
    },
    31: function(t, e, n) {
        "use strict";
        var r = this && this.__decorate || function(t, e, n, r) {
            var o, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
            return i > 3 && a && Object.defineProperty(e, n, a),
            a
        }
          , o = this && this.__metadata || function(t, e) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(t, e)
        }
          , i = this && this.__param || function(t, e) {
            return function(n, r) {
                e(n, r, t)
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n(2)
          , s = n(5)
          , c = n(478);
        e.MASKEDINPUT_VALUE_ACCESSOR = {
            provide: s.NG_VALUE_ACCESSOR,
            useExisting: a.forwardRef(function() {
                return l
            }),
            multi: !0
        };
        var l = function() {
            function t(t, e) {
                this.renderer = t,
                this.element = e,
                this.textMaskConfig = {
                    mask: [],
                    guide: !0,
                    placeholderChar: "_",
                    pipe: void 0,
                    keepCharPositions: !1
                },
                this._onTouched = function() {}
                ,
                this._onChange = function(t) {}
            }
            return t.prototype.ngOnChanges = function(t) {
                this.setupMask(!0),
                void 0 !== this.textMaskInputElement && this.textMaskInputElement.update(this.inputElement.value)
            }
            ,
            t.prototype.writeValue = function(t) {
                this.setupMask();
                var e = null == t ? "" : t;
                this.renderer.setElementProperty(this.inputElement, "value", e),
                void 0 !== this.textMaskInputElement && this.textMaskInputElement.update(t)
            }
            ,
            t.prototype.registerOnChange = function(t) {
                this._onChange = t
            }
            ,
            t.prototype.registerOnTouched = function(t) {
                this._onTouched = t
            }
            ,
            t.prototype.setDisabledState = function(t) {
                this.renderer.setElementProperty(this.element.nativeElement, "disabled", t)
            }
            ,
            t.prototype.onInput = function(t) {
                this.setupMask(),
                void 0 !== this.textMaskInputElement && (this.textMaskInputElement.update(t),
                t = this.inputElement.value,
                this._onChange(t))
            }
            ,
            t.prototype.setupMask = function(t) {
                void 0 === t && (t = !1),
                this.inputElement || ("INPUT" === this.element.nativeElement.tagName.toUpperCase() ? this.inputElement = this.element.nativeElement : this.inputElement = this.element.nativeElement.getElementsByTagName("INPUT")[0]),
                this.inputElement && t && (this.textMaskInputElement = c.createTextMaskInputElement(Object.assign({
                    inputElement: this.inputElement
                }, this.textMaskConfig)))
            }
            ,
            t
        }();
        r([a.Input("textMask"), o("design:type", Object)], l.prototype, "textMaskConfig", void 0),
        l = r([a.Directive({
            host: {
                "(input)": "onInput($event.target.value)",
                "(blur)": "_onTouched()"
            },
            selector: "[textMask]",
            exportAs: "textMask",
            providers: [e.MASKEDINPUT_VALUE_ACCESSOR]
        }), i(0, a.Inject(a.Renderer)), i(1, a.Inject(a.ElementRef)), o("design:paramtypes", [a.Renderer, a.ElementRef])], l),
        e.MaskedInputDirective = l;
        var u = function() {
            function t() {}
            return t
        }();
        u = r([a.NgModule({
            declarations: [l],
            exports: [l]
        })], u),
        e.TextMaskModule = u;
        var p = n(478);
        e.conformToMask = p.conformToMask
    },
    33: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        n.d(e, "AppError", function() {
            return r
        });
        var r = function() {
            function t(t) {
                this.code = "",
                this.message = "",
                this.data = {},
                this.source = t.source,
                this.type = t.type,
                this.code = t.code,
                this.severity = t.severity,
                this.message = t.message || "",
                this.data = t.data || {}
            }
            return t
        }()
    },
    361: function(t, e) {
        var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
          , r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        t.exports = function(t) {
            var e = t
              , o = t.indexOf("[")
              , i = t.indexOf("]");
            -1 != o && -1 != i && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length));
            for (var a = n.exec(t || ""), s = {}, c = 14; c--; )
                s[r[c]] = a[c] || "";
            return -1 != o && -1 != i && (s.source = e,
            s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"),
            s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
            s.ipv6uri = !0),
            s
        }
    },
    39: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(27)
          , o = n(69)
          , i = (n.n(o),
        n(11))
          , a = n(8)
          , s = n(1);
        n.n(s);
        n.d(e, "serverTimeService", function() {
            return l
        });
        var c = function() {
            function t() {
                var t = this;
                this.api = r.api,
                this.settingsService = i.settingsService,
                this.stateService = a.stateService,
                this.time = Date.now(),
                this.time$ = new o.Subject,
                this.clientTimezone = parseInt(s().format("Z").replace("+", "").replace(/\:(.*)$/, "")),
                this.serverTimezone = 3,
                this.api.subscribe("sendServerTime", function(e) {
                    return t.update(e.serverTime)
                }),
                this.stateService.get("app").filter(function(t) {
                    return !!t
                }).subscribe(function() {
                    return t.serverTimezone = t.settingsService.get("timezone")
                })
            }
            return t.prototype.update = function(t) {
                this.time = 1e3 * t,
                this.time$.next(this.time)
            }
            ,
            t.prototype.clear = function() {
                this.api.unsubscribe("serverTime")
            }
            ,
            t.prototype.timeZoneOffset = function(t) {
                return 60 * t - 60 * this.serverTimezone
            }
            ,
            t
        }()
          , l = new c
    },
    44: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(2)
          , o = n(28)
          , i = n(170)
          , a = (n.n(i),
        n(62))
          , s = n(25)
          , c = n(14)
          , l = n(33)
          , u = n(9);
        n.d(e, "WPIntegrationService", function() {
            return h
        });
        var p = this && this.__decorate || function(t, e, n, r) {
            var o, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
            return i > 3 && a && Object.defineProperty(e, n, a),
            a
        }
          , d = this && this.__metadata || function(t, e) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(t, e)
        }
          , h = function() {
            function t(t, e, n) {
                this.$window = t,
                this.http = e,
                this.utils = n,
                this.requestType = {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                this.apiUrl = "/wp-admin/admin-ajax.php"
            }
            return t.prototype.checkResponse = function(t, e) {
                if ("object" != typeof t || "object" == typeof t && 0 === t.status)
                    throw new l.AppError({
                        source: "WPIntegrationService",
                        type: u.Constants.error.type.VALIDATION,
                        severity: "warning",
                        code: "wpRequestFailed",
                        data: {
                            request: e,
                            response: t
                        }
                    });
                return 2 !== t.status || t
            }
            ,
            t.prototype.login = function(t, e) {
                if (!a.AppConfig.wpAuth)
                    return Promise.resolve(!1);
                var n = {
                    action: "forexLogin",
                    token: e,
                    params: {
                        login: t,
                        email: t
                    }
                };
                return this.createRequest(n)
            }
            ,
            t.prototype.logout = function(t, e) {
                if (!a.AppConfig.wpAuth)
                    return Promise.resolve(!1);
                if (e)
                    return this.$window.nativeWindow.location = e;
                var n = {
                    action: "forexLogout",
                    token: t,
                    params: {}
                };
                return this.createRequest(n)
            }
            ,
            t.prototype.checkState = function(t) {
                var e = this;
                if (a.AppConfig.wpAuth) {
                    var n = {
                        action: "checkState",
                        token: t,
                        params: {}
                    };
                    return this.createRequest(n).then(function(t) {
                        2 === t.status && e.$window.nativeWindow.location.reload()
                    })
                }
            }
            ,
            t.prototype.createRequest = function(t) {
                var e = this
                  , n = new o.g({
                    headers: new o.l(this.requestType)
                })
                  , r = this.utils.objectToQueryString(t);
                return this.http.post(this.apiUrl, r, n).map(function(t) {
                    return t.json()
                }).toPromise().then(function(t) {
                    return e.checkResponse(t, r)
                })
            }
            ,
            t = p([n.i(r.Injectable)(), d("design:paramtypes", [s.WindowRef, o.i, c.a])], t)
        }()
    },
    474: function(t, e, n) {
        function r(t, e) {
            if (!(this instanceof r))
                return new r(t,e);
            t && "object" == typeof t && (e = t,
            t = void 0),
            e = e || {},
            e.path = e.path || "/socket.io",
            this.nsps = {},
            this.subs = [],
            this.opts = e,
            this.reconnection(!1 !== e.reconnection),
            this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(e.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),
            this.randomizationFactor(e.randomizationFactor || .5),
            this.backoff = new d({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor()
            }),
            this.timeout(null == e.timeout ? 2e4 : e.timeout),
            this.readyState = "closed",
            this.uri = t,
            this.connecting = [],
            this.lastPing = null,
            this.encoding = !1,
            this.packetBuffer = [],
            this.encoder = new s.Encoder,
            this.decoder = new s.Decoder,
            this.autoConnect = !1 !== e.autoConnect,
            this.autoConnect && this.open()
        }
        var o = n(599)
          , i = n(476)
          , a = n(80)
          , s = n(192)
          , c = n(475)
          , l = n(207)
          , u = n(128)("socket.io-client:manager")
          , p = n(225)
          , d = n(545)
          , h = Object.prototype.hasOwnProperty;
        t.exports = r,
        r.prototype.emitAll = function() {
            this.emit.apply(this, arguments);
            for (var t in this.nsps)
                h.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments)
        }
        ,
        r.prototype.updateSocketIds = function() {
            for (var t in this.nsps)
                h.call(this.nsps, t) && (this.nsps[t].id = this.engine.id)
        }
        ,
        a(r.prototype),
        r.prototype.reconnection = function(t) {
            return arguments.length ? (this._reconnection = !!t,
            this) : this._reconnection
        }
        ,
        r.prototype.reconnectionAttempts = function(t) {
            return arguments.length ? (this._reconnectionAttempts = t,
            this) : this._reconnectionAttempts
        }
        ,
        r.prototype.reconnectionDelay = function(t) {
            return arguments.length ? (this._reconnectionDelay = t,
            this.backoff && this.backoff.setMin(t),
            this) : this._reconnectionDelay
        }
        ,
        r.prototype.randomizationFactor = function(t) {
            return arguments.length ? (this._randomizationFactor = t,
            this.backoff && this.backoff.setJitter(t),
            this) : this._randomizationFactor
        }
        ,
        r.prototype.reconnectionDelayMax = function(t) {
            return arguments.length ? (this._reconnectionDelayMax = t,
            this.backoff && this.backoff.setMax(t),
            this) : this._reconnectionDelayMax
        }
        ,
        r.prototype.timeout = function(t) {
            return arguments.length ? (this._timeout = t,
            this) : this._timeout
        }
        ,
        r.prototype.maybeReconnectOnOpen = function() {
            !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
        }
        ,
        r.prototype.open = r.prototype.connect = function(t, e) {
            if (u("readyState %s", this.readyState),
            ~this.readyState.indexOf("open"))
                return this;
            u("opening %s", this.uri),
            this.engine = o(this.uri, this.opts);
            var n = this.engine
              , r = this;
            this.readyState = "opening",
            this.skipReconnect = !1;
            var i = c(n, "open", function() {
                r.onopen(),
                t && t()
            })
              , a = c(n, "error", function(e) {
                if (u("connect_error"),
                r.cleanup(),
                r.readyState = "closed",
                r.emitAll("connect_error", e),
                t) {
                    var n = new Error("Connection error");
                    n.data = e,
                    t(n)
                } else
                    r.maybeReconnectOnOpen()
            });
            if (!1 !== this._timeout) {
                var s = this._timeout;
                u("connect attempt will timeout after %d", s);
                var l = setTimeout(function() {
                    u("connect attempt timed out after %d", s),
                    i.destroy(),
                    n.close(),
                    n.emit("error", "timeout"),
                    r.emitAll("connect_timeout", s)
                }, s);
                this.subs.push({
                    destroy: function() {
                        clearTimeout(l)
                    }
                })
            }
            return this.subs.push(i),
            this.subs.push(a),
            this
        }
        ,
        r.prototype.onopen = function() {
            u("open"),
            this.cleanup(),
            this.readyState = "open",
            this.emit("open");
            var t = this.engine;
            this.subs.push(c(t, "data", l(this, "ondata"))),
            this.subs.push(c(t, "ping", l(this, "onping"))),
            this.subs.push(c(t, "pong", l(this, "onpong"))),
            this.subs.push(c(t, "error", l(this, "onerror"))),
            this.subs.push(c(t, "close", l(this, "onclose"))),
            this.subs.push(c(this.decoder, "decoded", l(this, "ondecoded")))
        }
        ,
        r.prototype.onping = function() {
            this.lastPing = new Date,
            this.emitAll("ping")
        }
        ,
        r.prototype.onpong = function() {
            this.emitAll("pong", new Date - this.lastPing)
        }
        ,
        r.prototype.ondata = function(t) {
            this.decoder.add(t)
        }
        ,
        r.prototype.ondecoded = function(t) {
            this.emit("packet", t)
        }
        ,
        r.prototype.onerror = function(t) {
            u("error", t),
            this.emitAll("error", t)
        }
        ,
        r.prototype.socket = function(t, e) {
            function n() {
                ~p(o.connecting, r) || o.connecting.push(r)
            }
            var r = this.nsps[t];
            if (!r) {
                r = new i(this,t,e),
                this.nsps[t] = r;
                var o = this;
                r.on("connecting", n),
                r.on("connect", function() {
                    r.id = o.engine.id
                }),
                this.autoConnect && n()
            }
            return r
        }
        ,
        r.prototype.destroy = function(t) {
            var e = p(this.connecting, t);
            ~e && this.connecting.splice(e, 1),
            this.connecting.length || this.close()
        }
        ,
        r.prototype.packet = function(t) {
            u("writing packet %j", t);
            var e = this;
            t.query && 0 === t.type && (t.nsp += "?" + t.query),
            e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0,
            this.encoder.encode(t, function(n) {
                for (var r = 0; r < n.length; r++)
                    e.engine.write(n[r], t.options);
                e.encoding = !1,
                e.processPacketQueue()
            }))
        }
        ,
        r.prototype.processPacketQueue = function() {
            if (this.packetBuffer.length > 0 && !this.encoding) {
                var t = this.packetBuffer.shift();
                this.packet(t)
            }
        }
        ,
        r.prototype.cleanup = function() {
            u("cleanup");
            for (var t = this.subs.length, e = 0; e < t; e++) {
                this.subs.shift().destroy()
            }
            this.packetBuffer = [],
            this.encoding = !1,
            this.lastPing = null,
            this.decoder.destroy()
        }
        ,
        r.prototype.close = r.prototype.disconnect = function() {
            u("disconnect"),
            this.skipReconnect = !0,
            this.reconnecting = !1,
            "opening" === this.readyState && this.cleanup(),
            this.backoff.reset(),
            this.readyState = "closed",
            this.engine && this.engine.close()
        }
        ,
        r.prototype.onclose = function(t) {
            u("onclose"),
            this.cleanup(),
            this.backoff.reset(),
            this.readyState = "closed",
            this.emit("close", t),
            this._reconnection && !this.skipReconnect && this.reconnect()
        }
        ,
        r.prototype.reconnect = function() {
            if (this.reconnecting || this.skipReconnect)
                return this;
            var t = this;
            if (this.backoff.attempts >= this._reconnectionAttempts)
                u("reconnect failed"),
                this.backoff.reset(),
                this.emitAll("reconnect_failed"),
                this.reconnecting = !1;
            else {
                var e = this.backoff.duration();
                u("will wait %dms before reconnect attempt", e),
                this.reconnecting = !0;
                var n = setTimeout(function() {
                    t.skipReconnect || (u("attempting reconnect"),
                    t.emitAll("reconnect_attempt", t.backoff.attempts),
                    t.emitAll("reconnecting", t.backoff.attempts),
                    t.skipReconnect || t.open(function(e) {
                        e ? (u("reconnect attempt error"),
                        t.reconnecting = !1,
                        t.reconnect(),
                        t.emitAll("reconnect_error", e.data)) : (u("reconnect success"),
                        t.onreconnect())
                    }))
                }, e);
                this.subs.push({
                    destroy: function() {
                        clearTimeout(n)
                    }
                })
            }
        }
        ,
        r.prototype.onreconnect = function() {
            var t = this.backoff.attempts;
            this.reconnecting = !1,
            this.backoff.reset(),
            this.updateSocketIds(),
            this.emitAll("reconnect", t)
        }
    },
    475: function(t, e) {
        function n(t, e, n) {
            return t.on(e, n),
            {
                destroy: function() {
                    t.removeListener(e, n)
                }
            }
        }
        t.exports = n
    },
    476: function(t, e, n) {
        function r(t, e, n) {
            this.io = t,
            this.nsp = e,
            this.json = this,
            this.ids = 0,
            this.acks = {},
            this.receiveBuffer = [],
            this.sendBuffer = [],
            this.connected = !1,
            this.disconnected = !0,
            n && n.query && (this.query = n.query),
            this.io.autoConnect && this.open()
        }
        var o = n(192)
          , i = n(80)
          , a = n(946)
          , s = n(475)
          , c = n(207)
          , l = n(128)("socket.io-client:socket")
          , u = n(224);
        t.exports = r;
        var p = {
            connect: 1,
            connect_error: 1,
            connect_timeout: 1,
            connecting: 1,
            disconnect: 1,
            error: 1,
            reconnect: 1,
            reconnect_attempt: 1,
            reconnect_failed: 1,
            reconnect_error: 1,
            reconnecting: 1,
            ping: 1,
            pong: 1
        }
          , d = i.prototype.emit;
        i(r.prototype),
        r.prototype.subEvents = function() {
            if (!this.subs) {
                var t = this.io;
                this.subs = [s(t, "open", c(this, "onopen")), s(t, "packet", c(this, "onpacket")), s(t, "close", c(this, "onclose"))]
            }
        }
        ,
        r.prototype.open = r.prototype.connect = function() {
            return this.connected ? this : (this.subEvents(),
            this.io.open(),
            "open" === this.io.readyState && this.onopen(),
            this.emit("connecting"),
            this)
        }
        ,
        r.prototype.send = function() {
            var t = a(arguments);
            return t.unshift("message"),
            this.emit.apply(this, t),
            this
        }
        ,
        r.prototype.emit = function(t) {
            if (p.hasOwnProperty(t))
                return d.apply(this, arguments),
                this;
            var e = a(arguments)
              , n = o.EVENT;
            u(e) && (n = o.BINARY_EVENT);
            var r = {
                type: n,
                data: e
            };
            return r.options = {},
            r.options.compress = !this.flags || !1 !== this.flags.compress,
            "function" == typeof e[e.length - 1] && (l("emitting packet with ack id %d", this.ids),
            this.acks[this.ids] = e.pop(),
            r.id = this.ids++),
            this.connected ? this.packet(r) : this.sendBuffer.push(r),
            delete this.flags,
            this
        }
        ,
        r.prototype.packet = function(t) {
            t.nsp = this.nsp,
            this.io.packet(t)
        }
        ,
        r.prototype.onopen = function() {
            l("transport is open - connecting"),
            "/" !== this.nsp && (this.query ? this.packet({
                type: o.CONNECT,
                query: this.query
            }) : this.packet({
                type: o.CONNECT
            }))
        }
        ,
        r.prototype.onclose = function(t) {
            l("close (%s)", t),
            this.connected = !1,
            this.disconnected = !0,
            delete this.id,
            this.emit("disconnect", t)
        }
        ,
        r.prototype.onpacket = function(t) {
            if (t.nsp === this.nsp)
                switch (t.type) {
                case o.CONNECT:
                    this.onconnect();
                    break;
                case o.EVENT:
                case o.BINARY_EVENT:
                    this.onevent(t);
                    break;
                case o.ACK:
                case o.BINARY_ACK:
                    this.onack(t);
                    break;
                case o.DISCONNECT:
                    this.ondisconnect();
                    break;
                case o.ERROR:
                    this.emit("error", t.data)
                }
        }
        ,
        r.prototype.onevent = function(t) {
            var e = t.data || [];
            l("emitting event %j", e),
            null != t.id && (l("attaching ack callback to event"),
            e.push(this.ack(t.id))),
            this.connected ? d.apply(this, e) : this.receiveBuffer.push(e)
        }
        ,
        r.prototype.ack = function(t) {
            var e = this
              , n = !1;
            return function() {
                if (!n) {
                    n = !0;
                    var r = a(arguments);
                    l("sending ack %j", r);
                    var i = u(r) ? o.BINARY_ACK : o.ACK;
                    e.packet({
                        type: i,
                        id: t,
                        data: r
                    })
                }
            }
        }
        ,
        r.prototype.onack = function(t) {
            var e = this.acks[t.id];
            "function" == typeof e ? (l("calling ack %s with %j", t.id, t.data),
            e.apply(this, t.data),
            delete this.acks[t.id]) : l("bad ack %s", t.id)
        }
        ,
        r.prototype.onconnect = function() {
            this.connected = !0,
            this.disconnected = !1,
            this.emit("connect"),
            this.emitBuffered()
        }
        ,
        r.prototype.emitBuffered = function() {
            var t;
            for (t = 0; t < this.receiveBuffer.length; t++)
                d.apply(this, this.receiveBuffer[t]);
            for (this.receiveBuffer = [],
            t = 0; t < this.sendBuffer.length; t++)
                this.packet(this.sendBuffer[t]);
            this.sendBuffer = []
        }
        ,
        r.prototype.ondisconnect = function() {
            l("server disconnect (%s)", this.nsp),
            this.destroy(),
            this.onclose("io server disconnect")
        }
        ,
        r.prototype.destroy = function() {
            if (this.subs) {
                for (var t = 0; t < this.subs.length; t++)
                    this.subs[t].destroy();
                this.subs = null
            }
            this.io.destroy(this)
        }
        ,
        r.prototype.close = r.prototype.disconnect = function() {
            return this.connected && (l("performing disconnect (%s)", this.nsp),
            this.packet({
                type: o.DISCONNECT
            })),
            this.destroy(),
            this.connected && this.onclose("io client disconnect"),
            this
        }
        ,
        r.prototype.compress = function(t) {
            return this.flags = this.flags || {},
            this.flags.compress = t,
            this
        }
    },
    477: function(t, e, n) {
        (function(e) {
            function n(t) {
                return e.Buffer && e.Buffer.isBuffer(t) || e.ArrayBuffer && t instanceof ArrayBuffer
            }
            t.exports = n
        }
        ).call(e, n(16))
    },
    478: function(t, e, n) {
        !function(e, n) {
            t.exports = n()
        }(0, function() {
            return function(t) {
                function e(r) {
                    if (n[r])
                        return n[r].exports;
                    var o = n[r] = {
                        exports: {},
                        id: r,
                        loaded: !1
                    };
                    return t[r].call(o.exports, o, o.exports, e),
                    o.loaded = !0,
                    o.exports
                }
                var n = {};
                return e.m = t,
                e.c = n,
                e.p = "",
                e(0)
            }([function(t, e, n) {
                "use strict";
                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var o = n(3);
                Object.defineProperty(e, "conformToMask", {
                    enumerable: !0,
                    get: function() {
                        return r(o).default
                    }
                });
                var i = n(2);
                Object.defineProperty(e, "adjustCaretPosition", {
                    enumerable: !0,
                    get: function() {
                        return r(i).default
                    }
                });
                var a = n(5);
                Object.defineProperty(e, "createTextMaskInputElement", {
                    enumerable: !0,
                    get: function() {
                        return r(a).default
                    }
                })
            }
            , function(t, e) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.placeholderChar = "_",
                e.strFunction = "function"
            }
            , function(t, e) {
                "use strict";
                function n(t) {
                    var e = t.previousConformedValue
                      , n = void 0 === e ? o : e
                      , i = t.previousPlaceholder
                      , a = void 0 === i ? o : i
                      , s = t.currentCaretPosition
                      , c = void 0 === s ? 0 : s
                      , l = t.conformedValue
                      , u = t.rawValue
                      , p = t.placeholderChar
                      , d = t.placeholder
                      , h = t.indexesOfPipedChars
                      , f = void 0 === h ? r : h
                      , y = t.caretTrapIndexes
                      , m = void 0 === y ? r : y;
                    if (0 === c || !u.length)
                        return 0;
                    var g = u.length
                      , v = n.length
                      , b = d.length
                      , _ = l.length
                      , C = g - v
                      , w = C > 0
                      , k = 0 === v;
                    if (C > 1 && !w && !k)
                        return c;
                    var S = w && (n === l || l === d)
                      , O = 0
                      , E = void 0
                      , A = void 0;
                    if (S)
                        O = c - C;
                    else {
                        var P = l.toLowerCase()
                          , x = u.toLowerCase()
                          , T = x.substr(0, c).split(o)
                          , M = T.filter(function(t) {
                            return -1 !== P.indexOf(t)
                        });
                        A = M[M.length - 1];
                        var R = a.substr(0, M.length).split(o).filter(function(t) {
                            return t !== p
                        }).length
                          , D = d.substr(0, M.length).split(o).filter(function(t) {
                            return t !== p
                        }).length
                          , I = D !== R
                          , j = void 0 !== a[M.length - 1] && void 0 !== d[M.length - 2] && a[M.length - 1] !== p && a[M.length - 1] !== d[M.length - 1] && a[M.length - 1] === d[M.length - 2];
                        !w && (I || j) && R > 0 && d.indexOf(A) > -1 && void 0 !== u[c] && (E = !0,
                        A = u[c]);
                        for (var N = f.map(function(t) {
                            return P[t]
                        }), V = N.filter(function(t) {
                            return t === A
                        }).length, B = M.filter(function(t) {
                            return t === A
                        }).length, L = d.substr(0, d.indexOf(p)).split(o).filter(function(t, e) {
                            return t === A && u[e] !== t
                        }).length, G = L + B + V + (E ? 1 : 0), q = 0, F = 0; F < _; F++) {
                            var U = P[F];
                            if (O = F + 1,
                            U === A && q++,
                            q >= G)
                                break
                        }
                    }
                    if (w) {
                        for (var z = O, H = O; H <= b; H++)
                            if (d[H] === p && (z = H),
                            d[H] === p || -1 !== m.indexOf(H) || H === b)
                                return z
                    } else if (E) {
                        for (var W = O - 1; W >= 0; W--)
                            if (l[W] === A || -1 !== m.indexOf(W) || 0 === W)
                                return W
                    } else
                        for (var $ = O; $ >= 0; $--)
                            if (d[$ - 1] === p || -1 !== m.indexOf($) || 0 === $)
                                return $
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.default = n;
                var r = []
                  , o = ""
            }
            , function(t, e, n) {
                "use strict";
                function r() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (!(0,
                    i.isArray)(e)) {
                        if ((void 0 === e ? "undefined" : o(e)) !== a.strFunction)
                            throw new Error("Text-mask:conformToMask; The mask property must be an array.");
                        e = e(t, n),
                        e = (0,
                        i.processCaretTraps)(e).maskWithoutCaretTraps
                    }
                    var r = n.guide
                      , l = void 0 === r || r
                      , u = n.previousConformedValue
                      , p = void 0 === u ? c : u
                      , d = n.placeholderChar
                      , h = void 0 === d ? a.placeholderChar : d
                      , f = n.placeholder
                      , y = void 0 === f ? (0,
                    i.convertMaskToPlaceholder)(e, h) : f
                      , m = n.currentCaretPosition
                      , g = n.keepCharPositions
                      , v = !1 === l && void 0 !== p
                      , b = t.length
                      , _ = p.length
                      , C = y.length
                      , w = e.length
                      , k = b - _
                      , S = k > 0
                      , O = m + (S ? -k : 0)
                      , E = O + Math.abs(k);
                    if (!0 === g && !S) {
                        for (var A = c, P = O; P < E; P++)
                            y[P] === h && (A += h);
                        t = t.slice(0, O) + A + t.slice(O, b)
                    }
                    for (var x = t.split(c).map(function(t, e) {
                        return {
                            char: t,
                            isNew: e >= O && e < E
                        }
                    }), T = b - 1; T >= 0; T--) {
                        var M = x[T].char;
                        if (M !== h) {
                            M === y[T >= O && _ === w ? T - k : T] && x.splice(T, 1)
                        }
                    }
                    var R = c
                      , D = !1;
                    t: for (var I = 0; I < C; I++) {
                        var j = y[I];
                        if (j === h) {
                            if (x.length > 0)
                                for (; x.length > 0; ) {
                                    var N = x.shift()
                                      , V = N.char
                                      , B = N.isNew;
                                    if (V === h && !0 !== v) {
                                        R += h;
                                        continue t
                                    }
                                    if (e[I].test(V)) {
                                        if (!0 === g && !1 !== B && p !== c && !1 !== l && S) {
                                            for (var L = x.length, G = null, q = 0; q < L; q++) {
                                                var F = x[q];
                                                if (F.char !== h && !1 === F.isNew)
                                                    break;
                                                if (F.char === h) {
                                                    G = q;
                                                    break
                                                }
                                            }
                                            null !== G ? (R += V,
                                            x.splice(G, 1)) : I--
                                        } else
                                            R += V;
                                        continue t
                                    }
                                    D = !0
                                }
                            !1 === v && (R += y.substr(I, C));
                            break
                        }
                        R += j
                    }
                    if (v && !1 === S) {
                        for (var U = null, z = 0; z < R.length; z++)
                            y[z] === h && (U = z);
                        R = null !== U ? R.substr(0, U + 1) : c
                    }
                    return {
                        conformedValue: R,
                        meta: {
                            someCharsRejected: D
                        }
                    }
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ;
                e.default = r;
                var i = n(4)
                  , a = n(1)
                  , s = []
                  , c = ""
            }
            , function(t, e, n) {
                "use strict";
                function r() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.placeholderChar;
                    if (!o(t))
                        throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");
                    if (-1 !== t.indexOf(e))
                        throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: " + JSON.stringify(e) + "\n\nThe mask that was received is: " + JSON.stringify(t));
                    return t.map(function(t) {
                        return t instanceof RegExp ? e : t
                    }).join("")
                }
                function o(t) {
                    return Array.isArray && Array.isArray(t) || t instanceof Array
                }
                function i(t) {
                    return "string" == typeof t || t instanceof String
                }
                function a(t) {
                    return "number" == typeof t && void 0 === t.length && !isNaN(t)
                }
                function s(t) {
                    for (var e = [], n = void 0; -1 !== (n = t.indexOf(u)); )
                        e.push(n),
                        t.splice(n, 1);
                    return {
                        maskWithoutCaretTraps: t,
                        indexes: e
                    }
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.convertMaskToPlaceholder = r,
                e.isArray = o,
                e.isString = i,
                e.isNumber = a,
                e.processCaretTraps = s;
                var c = n(1)
                  , l = []
                  , u = "[]"
            }
            , function(t, e, n) {
                "use strict";
                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                function o(t) {
                    var e = {
                        previousConformedValue: void 0,
                        previousPlaceholder: void 0
                    };
                    return {
                        state: e,
                        update: function(n) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t
                              , o = r.inputElement
                              , l = r.mask
                              , p = r.guide
                              , m = r.pipe
                              , v = r.placeholderChar
                              , b = void 0 === v ? f.placeholderChar : v
                              , _ = r.keepCharPositions
                              , C = void 0 !== _ && _
                              , w = r.showMask
                              , k = void 0 !== w && w;
                            if (void 0 === n && (n = o.value),
                            n !== e.previousConformedValue) {
                                (void 0 === l ? "undefined" : c(l)) === g && void 0 !== l.pipe && void 0 !== l.mask && (m = l.pipe,
                                l = l.mask);
                                var S = void 0
                                  , O = void 0;
                                if (l instanceof Array && (S = (0,
                                h.convertMaskToPlaceholder)(l, b)),
                                !1 !== l) {
                                    var E = a(n)
                                      , A = o.selectionEnd
                                      , P = e.previousConformedValue
                                      , x = e.previousPlaceholder
                                      , T = void 0;
                                    if ((void 0 === l ? "undefined" : c(l)) === f.strFunction) {
                                        if (!1 === (O = l(E, {
                                            currentCaretPosition: A,
                                            previousConformedValue: P,
                                            placeholderChar: b
                                        })))
                                            return;
                                        var M = (0,
                                        h.processCaretTraps)(O)
                                          , R = M.maskWithoutCaretTraps
                                          , D = M.indexes;
                                        O = R,
                                        T = D,
                                        S = (0,
                                        h.convertMaskToPlaceholder)(O, b)
                                    } else
                                        O = l;
                                    var I = {
                                        previousConformedValue: P,
                                        guide: p,
                                        placeholderChar: b,
                                        pipe: m,
                                        placeholder: S,
                                        currentCaretPosition: A,
                                        keepCharPositions: C
                                    }
                                      , j = (0,
                                    d.default)(E, O, I)
                                      , N = j.conformedValue
                                      , V = (void 0 === m ? "undefined" : c(m)) === f.strFunction
                                      , B = {};
                                    V && (B = m(N, s({
                                        rawValue: E
                                    }, I)),
                                    !1 === B ? B = {
                                        value: P,
                                        rejected: !0
                                    } : (0,
                                    h.isString)(B) && (B = {
                                        value: B
                                    }));
                                    var L = V ? B.value : N
                                      , G = (0,
                                    u.default)({
                                        previousConformedValue: P,
                                        previousPlaceholder: x,
                                        conformedValue: L,
                                        placeholder: S,
                                        rawValue: E,
                                        currentCaretPosition: A,
                                        placeholderChar: b,
                                        indexesOfPipedChars: B.indexesOfPipedChars,
                                        caretTrapIndexes: T
                                    })
                                      , q = L === S && 0 === G
                                      , F = k ? S : y
                                      , U = q ? F : L;
                                    e.previousConformedValue = U,
                                    e.previousPlaceholder = S,
                                    o.value !== U && (o.value = U,
                                    i(o, G))
                                }
                            }
                        }
                    }
                }
                function i(t, e) {
                    document.activeElement === t && (v ? b(function() {
                        return t.setSelectionRange(e, e, m)
                    }, 0) : t.setSelectionRange(e, e, m))
                }
                function a(t) {
                    if ((0,
                    h.isString)(t))
                        return t;
                    if ((0,
                    h.isNumber)(t))
                        return String(t);
                    if (void 0 === t || null === t)
                        return y;
                    throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n " + JSON.stringify(t))
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var s = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }
                  , c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ;
                e.default = o;
                var l = n(2)
                  , u = r(l)
                  , p = n(3)
                  , d = r(p)
                  , h = n(4)
                  , f = n(1)
                  , y = ""
                  , m = "none"
                  , g = "object"
                  , v = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent)
                  , b = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : setTimeout
            }
            ])
        })
    },
    480: function(t, e, n) {
        "use strict";
        function r(t) {
            var e = "";
            do {
                e = s[t % c] + e,
                t = Math.floor(t / c)
            } while (t > 0);
            return e
        }
        function o(t) {
            var e = 0;
            for (p = 0; p < t.length; p++)
                e = e * c + l[t.charAt(p)];
            return e
        }
        function i() {
            var t = r(+new Date);
            return t !== a ? (u = 0,
            a = t) : t + "." + r(u++)
        }
        for (var a, s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), c = 64, l = {}, u = 0, p = 0; p < c; p++)
            l[s[p]] = p;
        i.encode = r,
        i.decode = o,
        t.exports = i
    },
    492: function(t, e) {},
    496: function(t, e) {
        function n(t, e, n) {
            function o(t, r) {
                if (o.count <= 0)
                    throw new Error("after called too many times");
                --o.count,
                t ? (i = !0,
                e(t),
                e = n) : 0 !== o.count || i || e(null, r)
            }
            var i = !1;
            return n = n || r,
            o.count = t,
            0 === t ? e() : o
        }
        function r() {}
        t.exports = n
    },
    498: function(t, e) {
        t.exports = function(t, e, n) {
            var r = t.byteLength;
            if (e = e || 0,
            n = n || r,
            t.slice)
                return t.slice(e, n);
            if (e < 0 && (e += r),
            n < 0 && (n += r),
            n > r && (n = r),
            e >= r || e >= n || 0 === r)
                return new ArrayBuffer(0);
            for (var o = new Uint8Array(t), i = new Uint8Array(n - e), a = e, s = 0; a < n; a++,
            s++)
                i[s] = o[a];
            return i.buffer
        }
    },
    5: function(t, e, n) {
        "use strict";
        function r(t) {
            return null == t || 0 === t.length
        }
        function o(t) {
            return null != t
        }
        function i(t) {
            var e = n.i(I["ɵisPromise"])(t) ? n.i(N.fromPromise)(t) : t;
            if (!n.i(I["ɵisObservable"])(e))
                throw new Error("Expected validator to return Promise or Observable.");
            return e
        }
        function a(t, e) {
            return e.map(function(e) {
                return e(t)
            })
        }
        function s(t, e) {
            return e.map(function(e) {
                return e(t)
            })
        }
        function c(t) {
            var e = t.reduce(function(t, e) {
                return null != e ? Object.assign({}, t, e) : t
            }, {});
            return 0 === Object.keys(e).length ? null : e
        }
        function l() {
            return /android (\d+)/.test((n.i(B.s)() ? n.i(B.s)().getUserAgent() : "").toLowerCase())
        }
        function u(t) {
            return t.validate ? function(e) {
                return t.validate(e)
            }
            : t
        }
        function p(t) {
            return t.validate ? function(e) {
                return t.validate(e)
            }
            : t
        }
        function d() {
            throw new Error("unimplemented")
        }
        function h(t, e) {
            return null == t ? "" + e : (e && "object" == typeof e && (e = "Object"),
            (t + ": " + e).slice(0, 50))
        }
        function f(t) {
            return t.split(":")[0]
        }
        function y(t, e) {
            return null == t ? "" + e : ("string" == typeof e && (e = "'" + e + "'"),
            e && "object" == typeof e && (e = "Object"),
            (t + ": " + e).slice(0, 50))
        }
        function m(t) {
            return t.split(":")[0]
        }
        function g(t, e) {
            return e.path.concat([t])
        }
        function v(t, e) {
            t || w(e, "Cannot find control with"),
            e.valueAccessor || w(e, "No value accessor for form control with"),
            t.validator = z.compose([t.validator, e.validator]),
            t.asyncValidator = z.composeAsync([t.asyncValidator, e.asyncValidator]),
            e.valueAccessor.writeValue(t.value),
            e.valueAccessor.registerOnChange(function(n) {
                e.viewToModelUpdate(n),
                t.markAsDirty(),
                t.setValue(n, {
                    emitModelToViewChange: !1
                })
            }),
            e.valueAccessor.registerOnTouched(function() {
                return t.markAsTouched()
            }),
            t.registerOnChange(function(t, n) {
                e.valueAccessor.writeValue(t),
                n && e.viewToModelUpdate(t)
            }),
            e.valueAccessor.setDisabledState && t.registerOnDisabledChange(function(t) {
                e.valueAccessor.setDisabledState(t)
            }),
            e._rawValidators.forEach(function(e) {
                e.registerOnValidatorChange && e.registerOnValidatorChange(function() {
                    return t.updateValueAndValidity()
                })
            }),
            e._rawAsyncValidators.forEach(function(e) {
                e.registerOnValidatorChange && e.registerOnValidatorChange(function() {
                    return t.updateValueAndValidity()
                })
            })
        }
        function b(t, e) {
            e.valueAccessor.registerOnChange(function() {
                return C(e)
            }),
            e.valueAccessor.registerOnTouched(function() {
                return C(e)
            }),
            e._rawValidators.forEach(function(t) {
                t.registerOnValidatorChange && t.registerOnValidatorChange(null)
            }),
            e._rawAsyncValidators.forEach(function(t) {
                t.registerOnValidatorChange && t.registerOnValidatorChange(null)
            }),
            t && t._clearChangeFns()
        }
        function _(t, e) {
            null == t && w(e, "Cannot find control with"),
            t.validator = z.compose([t.validator, e.validator]),
            t.asyncValidator = z.composeAsync([t.asyncValidator, e.asyncValidator])
        }
        function C(t) {
            return w(t, "There is no FormControl instance attached to form control element with")
        }
        function w(t, e) {
            var n;
            throw n = t.path.length > 1 ? "path: '" + t.path.join(" -> ") + "'" : t.path[0] ? "name: '" + t.path + "'" : "unspecified name attribute",
            new Error(e + " " + n)
        }
        function k(t) {
            return null != t ? z.compose(t.map(u)) : null
        }
        function S(t) {
            return null != t ? z.composeAsync(t.map(p)) : null
        }
        function O(t, e) {
            if (!t.hasOwnProperty("model"))
                return !1;
            var r = t.model;
            return !!r.isFirstChange() || !n.i(I["ɵlooseIdentical"])(e, r.currentValue)
        }
        function E(t) {
            return pt.some(function(e) {
                return t.constructor === e
            })
        }
        function A(t, e) {
            if (!e)
                return null;
            var n = void 0
              , r = void 0
              , o = void 0;
            return e.forEach(function(e) {
                e.constructor === K ? n = e : E(e) ? (r && w(t, "More than one built-in value accessor matches form control with"),
                r = e) : (o && w(t, "More than one custom value accessor matches form control with"),
                o = e)
            }),
            o || (r || (n || (w(t, "No valid value accessor for form control with"),
            null)))
        }
        function P(t, e, n) {
            return null == e ? null : (e instanceof Array || (e = e.split(n)),
            e instanceof Array && 0 === e.length ? null : e.reduce(function(t, e) {
                return t instanceof kt ? t.controls[e] || null : t instanceof St ? t.at(e) || null : null
            }, t))
        }
        function x(t) {
            return Array.isArray(t) ? k(t) : t || null
        }
        function T(t) {
            return Array.isArray(t) ? S(t) : t || null
        }
        function M(t, e) {
            var n = t.indexOf(e);
            n > -1 && t.splice(n, 1)
        }
        function R(t) {
            return !(t instanceof qt || t instanceof Lt || t instanceof Ut)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var D = n(43)
          , I = n(2)
          , j = n(369)
          , N = (n.n(j),
        n(173))
          , V = (n.n(N),
        n(176))
          , B = (n.n(V),
        n(13));
        n.d(e, "AbstractControlDirective", function() {
            return L
        }),
        n.d(e, "AbstractFormGroupDirective", function() {
            return dt
        }),
        n.d(e, "CheckboxControlValueAccessor", function() {
            return $
        }),
        n.d(e, "ControlContainer", function() {
            return G
        }),
        n.d(e, "NG_VALUE_ACCESSOR", function() {
            return H
        }),
        n.d(e, "COMPOSITION_BUFFER_MODE", function() {
            return J
        }),
        n.d(e, "DefaultValueAccessor", function() {
            return K
        }),
        n.d(e, "NgControl", function() {
            return Q
        }),
        n.d(e, "NgControlStatus", function() {
            return yt
        }),
        n.d(e, "NgControlStatusGroup", function() {
            return mt
        }),
        n.d(e, "NgForm", function() {
            return At
        }),
        n.d(e, "NgModel", function() {
            return It
        }),
        n.d(e, "NgModelGroup", function() {
            return Mt
        }),
        n.d(e, "RadioControlValueAccessor", function() {
            return nt
        }),
        n.d(e, "FormControlDirective", function() {
            return Vt
        }),
        n.d(e, "FormControlName", function() {
            return Ht
        }),
        n.d(e, "FormGroupDirective", function() {
            return Lt
        }),
        n.d(e, "FormArrayName", function() {
            return Ut
        }),
        n.d(e, "FormGroupName", function() {
            return qt
        }),
        n.d(e, "NgSelectOption", function() {
            return st
        }),
        n.d(e, "SelectControlValueAccessor", function() {
            return at
        }),
        n.d(e, "SelectMultipleControlValueAccessor", function() {
            return lt
        }),
        n.d(e, "CheckboxRequiredValidator", function() {
            return Jt
        }),
        n.d(e, "EmailValidator", function() {
            return Zt
        }),
        n.d(e, "MaxLengthValidator", function() {
            return ee
        }),
        n.d(e, "MinLengthValidator", function() {
            return Qt
        }),
        n.d(e, "PatternValidator", function() {
            return re
        }),
        n.d(e, "RequiredValidator", function() {
            return Yt
        }),
        n.d(e, "FormBuilder", function() {
            return oe
        }),
        n.d(e, "AbstractControl", function() {
            return Ct
        }),
        n.d(e, "FormArray", function() {
            return St
        }),
        n.d(e, "FormControl", function() {
            return wt
        }),
        n.d(e, "FormGroup", function() {
            return kt
        }),
        n.d(e, "NG_ASYNC_VALIDATORS", function() {
            return F
        }),
        n.d(e, "NG_VALIDATORS", function() {
            return q
        }),
        n.d(e, "Validators", function() {
            return z
        }),
        n.d(e, "VERSION", function() {
            return ie
        }),
        n.d(e, "FormsModule", function() {
            return pe
        }),
        n.d(e, "ReactiveFormsModule", function() {
            return de
        }),
        n.d(e, "ɵba", function() {
            return ue
        }),
        n.d(e, "ɵz", function() {
            return le
        }),
        n.d(e, "ɵx", function() {
            return se
        }),
        n.d(e, "ɵy", function() {
            return ce
        }),
        n.d(e, "ɵa", function() {
            return W
        }),
        n.d(e, "ɵb", function() {
            return Y
        }),
        n.d(e, "ɵc", function() {
            return ht
        }),
        n.d(e, "ɵd", function() {
            return ft
        }),
        n.d(e, "ɵe", function() {
            return Ot
        }),
        n.d(e, "ɵf", function() {
            return Rt
        }),
        n.d(e, "ɵg", function() {
            return Tt
        }),
        n.d(e, "ɵbf", function() {
            return ae
        }),
        n.d(e, "ɵbb", function() {
            return Z
        }),
        n.d(e, "ɵbc", function() {
            return X
        }),
        n.d(e, "ɵh", function() {
            return tt
        }),
        n.d(e, "ɵi", function() {
            return et
        }),
        n.d(e, "ɵbd", function() {
            return rt
        }),
        n.d(e, "ɵbe", function() {
            return ot
        }),
        n.d(e, "ɵj", function() {
            return Nt
        }),
        n.d(e, "ɵk", function() {
            return zt
        }),
        n.d(e, "ɵl", function() {
            return Bt
        }),
        n.d(e, "ɵn", function() {
            return Ft
        }),
        n.d(e, "ɵm", function() {
            return Gt
        }),
        n.d(e, "ɵo", function() {
            return it
        }),
        n.d(e, "ɵq", function() {
            return ut
        }),
        n.d(e, "ɵp", function() {
            return ct
        }),
        n.d(e, "ɵs", function() {
            return $t
        }),
        n.d(e, "ɵt", function() {
            return Kt
        }),
        n.d(e, "ɵv", function() {
            return te
        }),
        n.d(e, "ɵu", function() {
            return Xt
        }),
        n.d(e, "ɵw", function() {
            return ne
        }),
        n.d(e, "ɵr", function() {
            return Wt
        });
        var L = function() {
            function t() {}
            return t.prototype.control = function() {}
            ,
            Object.defineProperty(t.prototype, "value", {
                get: function() {
                    return this.control ? this.control.value : null
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "valid", {
                get: function() {
                    return this.control ? this.control.valid : null
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "invalid", {
                get: function() {
                    return this.control ? this.control.invalid : null
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "pending", {
                get: function() {
                    return this.control ? this.control.pending : null
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "disabled", {
                get: function() {
                    return this.control ? this.control.disabled : null
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "enabled", {
                get: function() {
                    return this.control ? this.control.enabled : null
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "errors", {
                get: function() {
                    return this.control ? this.control.errors : null
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "pristine", {
                get: function() {
                    return this.control ? this.control.pristine : null
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "dirty", {
                get: function() {
                    return this.control ? this.control.dirty : null
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "touched", {
                get: function() {
                    return this.control ? this.control.touched : null
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "untouched", {
                get: function() {
                    return this.control ? this.control.untouched : null
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "statusChanges", {
                get: function() {
                    return this.control ? this.control.statusChanges : null
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "valueChanges", {
                get: function() {
                    return this.control ? this.control.valueChanges : null
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "path", {
                get: function() {
                    return null
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.reset = function(t) {
                void 0 === t && (t = void 0),
                this.control && this.control.reset(t)
            }
            ,
            t.prototype.hasError = function(t, e) {
                return !!this.control && this.control.hasError(t, e)
            }
            ,
            t.prototype.getError = function(t, e) {
                return this.control ? this.control.getError(t, e) : null
            }
            ,
            t
        }()
          , G = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return D.a(e, t),
            Object.defineProperty(e.prototype, "formDirective", {
                get: function() {
                    return null
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "path", {
                get: function() {
                    return null
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(L)
          , q = new I.InjectionToken("NgValidators")
          , F = new I.InjectionToken("NgAsyncValidators")
          , U = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/
          , z = function() {
            function t() {}
            return t.min = function(t) {
                return function(e) {
                    if (r(e.value) || r(t))
                        return null;
                    var n = parseFloat(e.value);
                    return !isNaN(n) && n < t ? {
                        min: {
                            min: t,
                            actual: e.value
                        }
                    } : null
                }
            }
            ,
            t.max = function(t) {
                return function(e) {
                    if (r(e.value) || r(t))
                        return null;
                    var n = parseFloat(e.value);
                    return !isNaN(n) && n > t ? {
                        max: {
                            max: t,
                            actual: e.value
                        }
                    } : null
                }
            }
            ,
            t.required = function(t) {
                return r(t.value) ? {
                    required: !0
                } : null
            }
            ,
            t.requiredTrue = function(t) {
                return !0 === t.value ? null : {
                    required: !0
                }
            }
            ,
            t.email = function(t) {
                return U.test(t.value) ? null : {
                    email: !0
                }
            }
            ,
            t.minLength = function(t) {
                return function(e) {
                    if (r(e.value))
                        return null;
                    var n = e.value ? e.value.length : 0;
                    return n < t ? {
                        minlength: {
                            requiredLength: t,
                            actualLength: n
                        }
                    } : null
                }
            }
            ,
            t.maxLength = function(t) {
                return function(e) {
                    var n = e.value ? e.value.length : 0;
                    return n > t ? {
                        maxlength: {
                            requiredLength: t,
                            actualLength: n
                        }
                    } : null
                }
            }
            ,
            t.pattern = function(e) {
                if (!e)
                    return t.nullValidator;
                var n, o;
                return "string" == typeof e ? (o = "^" + e + "$",
                n = new RegExp(o)) : (o = e.toString(),
                n = e),
                function(t) {
                    if (r(t.value))
                        return null;
                    var e = t.value;
                    return n.test(e) ? null : {
                        pattern: {
                            requiredPattern: o,
                            actualValue: e
                        }
                    }
                }
            }
            ,
            t.nullValidator = function(t) {
                return null
            }
            ,
            t.compose = function(t) {
                if (!t)
                    return null;
                var e = t.filter(o);
                return 0 == e.length ? null : function(t) {
                    return c(a(t, e))
                }
            }
            ,
            t.composeAsync = function(t) {
                if (!t)
                    return null;
                var e = t.filter(o);
                return 0 == e.length ? null : function(t) {
                    var r = s(t, e).map(i);
                    return V.map.call(n.i(j.forkJoin)(r), c)
                }
            }
            ,
            t
        }()
          , H = new I.InjectionToken("NgValueAccessor")
          , W = {
            provide: H,
            useExisting: n.i(I.forwardRef)(function() {
                return $
            }),
            multi: !0
        }
          , $ = function() {
            function t(t, e) {
                this._renderer = t,
                this._elementRef = e,
                this.onChange = function(t) {}
                ,
                this.onTouched = function() {}
            }
            return t.prototype.writeValue = function(t) {
                this._renderer.setProperty(this._elementRef.nativeElement, "checked", t)
            }
            ,
            t.prototype.registerOnChange = function(t) {
                this.onChange = t
            }
            ,
            t.prototype.registerOnTouched = function(t) {
                this.onTouched = t
            }
            ,
            t.prototype.setDisabledState = function(t) {
                this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
            }
            ,
            t
        }();
        $.decorators = [{
            type: I.Directive,
            args: [{
                selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
                host: {
                    "(change)": "onChange($event.target.checked)",
                    "(blur)": "onTouched()"
                },
                providers: [W]
            }]
        }],
        $.ctorParameters = function() {
            return [{
                type: I.Renderer2
            }, {
                type: I.ElementRef
            }]
        }
        ;
        var Y = {
            provide: H,
            useExisting: n.i(I.forwardRef)(function() {
                return K
            }),
            multi: !0
        }
          , J = new I.InjectionToken("CompositionEventMode")
          , K = function() {
            function t(t, e, n) {
                this._renderer = t,
                this._elementRef = e,
                this._compositionMode = n,
                this.onChange = function(t) {}
                ,
                this.onTouched = function() {}
                ,
                this._composing = !1,
                null == this._compositionMode && (this._compositionMode = !l())
            }
            return t.prototype.writeValue = function(t) {
                var e = null == t ? "" : t;
                this._renderer.setProperty(this._elementRef.nativeElement, "value", e)
            }
            ,
            t.prototype.registerOnChange = function(t) {
                this.onChange = t
            }
            ,
            t.prototype.registerOnTouched = function(t) {
                this.onTouched = t
            }
            ,
            t.prototype.setDisabledState = function(t) {
                this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
            }
            ,
            t.prototype._handleInput = function(t) {
                (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(t)
            }
            ,
            t.prototype._compositionStart = function() {
                this._composing = !0
            }
            ,
            t.prototype._compositionEnd = function(t) {
                this._composing = !1,
                this._compositionMode && this.onChange(t)
            }
            ,
            t
        }();
        K.decorators = [{
            type: I.Directive,
            args: [{
                selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
                host: {
                    "(input)": "_handleInput($event.target.value)",
                    "(blur)": "onTouched()",
                    "(compositionstart)": "_compositionStart()",
                    "(compositionend)": "_compositionEnd($event.target.value)"
                },
                providers: [Y]
            }]
        }],
        K.ctorParameters = function() {
            return [{
                type: I.Renderer2
            }, {
                type: I.ElementRef
            }, {
                type: void 0,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Inject,
                    args: [J]
                }]
            }]
        }
        ;
        var Z = {
            provide: H,
            useExisting: n.i(I.forwardRef)(function() {
                return X
            }),
            multi: !0
        }
          , X = function() {
            function t(t, e) {
                this._renderer = t,
                this._elementRef = e,
                this.onChange = function(t) {}
                ,
                this.onTouched = function() {}
            }
            return t.prototype.writeValue = function(t) {
                var e = null == t ? "" : t;
                this._renderer.setProperty(this._elementRef.nativeElement, "value", e)
            }
            ,
            t.prototype.registerOnChange = function(t) {
                this.onChange = function(e) {
                    t("" == e ? null : parseFloat(e))
                }
            }
            ,
            t.prototype.registerOnTouched = function(t) {
                this.onTouched = t
            }
            ,
            t.prototype.setDisabledState = function(t) {
                this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
            }
            ,
            t
        }();
        X.decorators = [{
            type: I.Directive,
            args: [{
                selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
                host: {
                    "(change)": "onChange($event.target.value)",
                    "(input)": "onChange($event.target.value)",
                    "(blur)": "onTouched()"
                },
                providers: [Z]
            }]
        }],
        X.ctorParameters = function() {
            return [{
                type: I.Renderer2
            }, {
                type: I.ElementRef
            }]
        }
        ;
        var Q = function(t) {
            function e() {
                var e = t.apply(this, arguments) || this;
                return e._parent = null,
                e.name = null,
                e.valueAccessor = null,
                e._rawValidators = [],
                e._rawAsyncValidators = [],
                e
            }
            return D.a(e, t),
            Object.defineProperty(e.prototype, "validator", {
                get: function() {
                    return d()
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "asyncValidator", {
                get: function() {
                    return d()
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.viewToModelUpdate = function(t) {}
            ,
            e
        }(L)
          , tt = {
            provide: H,
            useExisting: n.i(I.forwardRef)(function() {
                return nt
            }),
            multi: !0
        }
          , et = function() {
            function t() {
                this._accessors = []
            }
            return t.prototype.add = function(t, e) {
                this._accessors.push([t, e])
            }
            ,
            t.prototype.remove = function(t) {
                for (var e = this._accessors.length - 1; e >= 0; --e)
                    if (this._accessors[e][1] === t)
                        return void this._accessors.splice(e, 1)
            }
            ,
            t.prototype.select = function(t) {
                var e = this;
                this._accessors.forEach(function(n) {
                    e._isSameGroup(n, t) && n[1] !== t && n[1].fireUncheck(t.value)
                })
            }
            ,
            t.prototype._isSameGroup = function(t, e) {
                return !!t[0].control && (t[0]._parent === e._control._parent && t[1].name === e.name)
            }
            ,
            t
        }();
        et.decorators = [{
            type: I.Injectable
        }],
        et.ctorParameters = function() {
            return []
        }
        ;
        var nt = function() {
            function t(t, e, n, r) {
                this._renderer = t,
                this._elementRef = e,
                this._registry = n,
                this._injector = r,
                this.onChange = function() {}
                ,
                this.onTouched = function() {}
            }
            return t.prototype.ngOnInit = function() {
                this._control = this._injector.get(Q),
                this._checkName(),
                this._registry.add(this._control, this)
            }
            ,
            t.prototype.ngOnDestroy = function() {
                this._registry.remove(this)
            }
            ,
            t.prototype.writeValue = function(t) {
                this._state = t === this.value,
                this._renderer.setProperty(this._elementRef.nativeElement, "checked", this._state)
            }
            ,
            t.prototype.registerOnChange = function(t) {
                var e = this;
                this._fn = t,
                this.onChange = function() {
                    t(e.value),
                    e._registry.select(e)
                }
            }
            ,
            t.prototype.fireUncheck = function(t) {
                this.writeValue(t)
            }
            ,
            t.prototype.registerOnTouched = function(t) {
                this.onTouched = t
            }
            ,
            t.prototype.setDisabledState = function(t) {
                this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
            }
            ,
            t.prototype._checkName = function() {
                this.name && this.formControlName && this.name !== this.formControlName && this._throwNameError(),
                !this.name && this.formControlName && (this.name = this.formControlName)
            }
            ,
            t.prototype._throwNameError = function() {
                throw new Error('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ')
            }
            ,
            t
        }();
        nt.decorators = [{
            type: I.Directive,
            args: [{
                selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
                host: {
                    "(change)": "onChange()",
                    "(blur)": "onTouched()"
                },
                providers: [tt]
            }]
        }],
        nt.ctorParameters = function() {
            return [{
                type: I.Renderer2
            }, {
                type: I.ElementRef
            }, {
                type: et
            }, {
                type: I.Injector
            }]
        }
        ,
        nt.propDecorators = {
            name: [{
                type: I.Input
            }],
            formControlName: [{
                type: I.Input
            }],
            value: [{
                type: I.Input
            }]
        };
        var rt = {
            provide: H,
            useExisting: n.i(I.forwardRef)(function() {
                return ot
            }),
            multi: !0
        }
          , ot = function() {
            function t(t, e) {
                this._renderer = t,
                this._elementRef = e,
                this.onChange = function(t) {}
                ,
                this.onTouched = function() {}
            }
            return t.prototype.writeValue = function(t) {
                this._renderer.setProperty(this._elementRef.nativeElement, "value", parseFloat(t))
            }
            ,
            t.prototype.registerOnChange = function(t) {
                this.onChange = function(e) {
                    t("" == e ? null : parseFloat(e))
                }
            }
            ,
            t.prototype.registerOnTouched = function(t) {
                this.onTouched = t
            }
            ,
            t.prototype.setDisabledState = function(t) {
                this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
            }
            ,
            t
        }();
        ot.decorators = [{
            type: I.Directive,
            args: [{
                selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
                host: {
                    "(change)": "onChange($event.target.value)",
                    "(input)": "onChange($event.target.value)",
                    "(blur)": "onTouched()"
                },
                providers: [rt]
            }]
        }],
        ot.ctorParameters = function() {
            return [{
                type: I.Renderer2
            }, {
                type: I.ElementRef
            }]
        }
        ;
        var it = {
            provide: H,
            useExisting: n.i(I.forwardRef)(function() {
                return at
            }),
            multi: !0
        }
          , at = function() {
            function t(t, e) {
                this._renderer = t,
                this._elementRef = e,
                this._optionMap = new Map,
                this._idCounter = 0,
                this.onChange = function(t) {}
                ,
                this.onTouched = function() {}
                ,
                this._compareWith = I["ɵlooseIdentical"]
            }
            return Object.defineProperty(t.prototype, "compareWith", {
                set: function(t) {
                    if ("function" != typeof t)
                        throw new Error("compareWith must be a function, but received " + JSON.stringify(t));
                    this._compareWith = t
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.writeValue = function(t) {
                this.value = t;
                var e = this._getOptionId(t);
                null == e && this._renderer.setProperty(this._elementRef.nativeElement, "selectedIndex", -1);
                var n = h(e, t);
                this._renderer.setProperty(this._elementRef.nativeElement, "value", n)
            }
            ,
            t.prototype.registerOnChange = function(t) {
                var e = this;
                this.onChange = function(n) {
                    e.value = e._getOptionValue(n),
                    t(e.value)
                }
            }
            ,
            t.prototype.registerOnTouched = function(t) {
                this.onTouched = t
            }
            ,
            t.prototype.setDisabledState = function(t) {
                this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
            }
            ,
            t.prototype._registerOption = function() {
                return (this._idCounter++).toString()
            }
            ,
            t.prototype._getOptionId = function(t) {
                for (var e = 0, n = Array.from(this._optionMap.keys()); e < n.length; e++) {
                    var r = n[e];
                    if (this._compareWith(this._optionMap.get(r), t))
                        return r
                }
                return null
            }
            ,
            t.prototype._getOptionValue = function(t) {
                var e = f(t);
                return this._optionMap.has(e) ? this._optionMap.get(e) : t
            }
            ,
            t
        }();
        at.decorators = [{
            type: I.Directive,
            args: [{
                selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
                host: {
                    "(change)": "onChange($event.target.value)",
                    "(blur)": "onTouched()"
                },
                providers: [it]
            }]
        }],
        at.ctorParameters = function() {
            return [{
                type: I.Renderer2
            }, {
                type: I.ElementRef
            }]
        }
        ,
        at.propDecorators = {
            compareWith: [{
                type: I.Input
            }]
        };
        var st = function() {
            function t(t, e, n) {
                this._element = t,
                this._renderer = e,
                this._select = n,
                this._select && (this.id = this._select._registerOption())
            }
            return Object.defineProperty(t.prototype, "ngValue", {
                set: function(t) {
                    null != this._select && (this._select._optionMap.set(this.id, t),
                    this._setElementValue(h(this.id, t)),
                    this._select.writeValue(this._select.value))
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "value", {
                set: function(t) {
                    this._setElementValue(t),
                    this._select && this._select.writeValue(this._select.value)
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype._setElementValue = function(t) {
                this._renderer.setProperty(this._element.nativeElement, "value", t)
            }
            ,
            t.prototype.ngOnDestroy = function() {
                this._select && (this._select._optionMap.delete(this.id),
                this._select.writeValue(this._select.value))
            }
            ,
            t
        }();
        st.decorators = [{
            type: I.Directive,
            args: [{
                selector: "option"
            }]
        }],
        st.ctorParameters = function() {
            return [{
                type: I.ElementRef
            }, {
                type: I.Renderer2
            }, {
                type: at,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Host
                }]
            }]
        }
        ,
        st.propDecorators = {
            ngValue: [{
                type: I.Input,
                args: ["ngValue"]
            }],
            value: [{
                type: I.Input,
                args: ["value"]
            }]
        };
        var ct = {
            provide: H,
            useExisting: n.i(I.forwardRef)(function() {
                return lt
            }),
            multi: !0
        }
          , lt = function() {
            function t(t, e) {
                this._renderer = t,
                this._elementRef = e,
                this._optionMap = new Map,
                this._idCounter = 0,
                this.onChange = function(t) {}
                ,
                this.onTouched = function() {}
                ,
                this._compareWith = I["ɵlooseIdentical"]
            }
            return Object.defineProperty(t.prototype, "compareWith", {
                set: function(t) {
                    if ("function" != typeof t)
                        throw new Error("compareWith must be a function, but received " + JSON.stringify(t));
                    this._compareWith = t
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.writeValue = function(t) {
                var e = this;
                this.value = t;
                var n;
                if (Array.isArray(t)) {
                    var r = t.map(function(t) {
                        return e._getOptionId(t)
                    });
                    n = function(t, e) {
                        t._setSelected(r.indexOf(e.toString()) > -1)
                    }
                } else
                    n = function(t, e) {
                        t._setSelected(!1)
                    }
                    ;
                this._optionMap.forEach(n)
            }
            ,
            t.prototype.registerOnChange = function(t) {
                var e = this;
                this.onChange = function(n) {
                    var r = [];
                    if (n.hasOwnProperty("selectedOptions"))
                        for (var o = n.selectedOptions, i = 0; i < o.length; i++) {
                            var a = o.item(i)
                              , s = e._getOptionValue(a.value);
                            r.push(s)
                        }
                    else
                        for (var o = n.options, i = 0; i < o.length; i++) {
                            var a = o.item(i);
                            if (a.selected) {
                                var s = e._getOptionValue(a.value);
                                r.push(s)
                            }
                        }
                    e.value = r,
                    t(r)
                }
            }
            ,
            t.prototype.registerOnTouched = function(t) {
                this.onTouched = t
            }
            ,
            t.prototype.setDisabledState = function(t) {
                this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
            }
            ,
            t.prototype._registerOption = function(t) {
                var e = (this._idCounter++).toString();
                return this._optionMap.set(e, t),
                e
            }
            ,
            t.prototype._getOptionId = function(t) {
                for (var e = 0, n = Array.from(this._optionMap.keys()); e < n.length; e++) {
                    var r = n[e];
                    if (this._compareWith(this._optionMap.get(r)._value, t))
                        return r
                }
                return null
            }
            ,
            t.prototype._getOptionValue = function(t) {
                var e = m(t);
                return this._optionMap.has(e) ? this._optionMap.get(e)._value : t
            }
            ,
            t
        }();
        lt.decorators = [{
            type: I.Directive,
            args: [{
                selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
                host: {
                    "(change)": "onChange($event.target)",
                    "(blur)": "onTouched()"
                },
                providers: [ct]
            }]
        }],
        lt.ctorParameters = function() {
            return [{
                type: I.Renderer2
            }, {
                type: I.ElementRef
            }]
        }
        ,
        lt.propDecorators = {
            compareWith: [{
                type: I.Input
            }]
        };
        var ut = function() {
            function t(t, e, n) {
                this._element = t,
                this._renderer = e,
                this._select = n,
                this._select && (this.id = this._select._registerOption(this))
            }
            return Object.defineProperty(t.prototype, "ngValue", {
                set: function(t) {
                    null != this._select && (this._value = t,
                    this._setElementValue(y(this.id, t)),
                    this._select.writeValue(this._select.value))
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "value", {
                set: function(t) {
                    this._select ? (this._value = t,
                    this._setElementValue(y(this.id, t)),
                    this._select.writeValue(this._select.value)) : this._setElementValue(t)
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype._setElementValue = function(t) {
                this._renderer.setProperty(this._element.nativeElement, "value", t)
            }
            ,
            t.prototype._setSelected = function(t) {
                this._renderer.setProperty(this._element.nativeElement, "selected", t)
            }
            ,
            t.prototype.ngOnDestroy = function() {
                this._select && (this._select._optionMap.delete(this.id),
                this._select.writeValue(this._select.value))
            }
            ,
            t
        }();
        ut.decorators = [{
            type: I.Directive,
            args: [{
                selector: "option"
            }]
        }],
        ut.ctorParameters = function() {
            return [{
                type: I.ElementRef
            }, {
                type: I.Renderer2
            }, {
                type: lt,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Host
                }]
            }]
        }
        ,
        ut.propDecorators = {
            ngValue: [{
                type: I.Input,
                args: ["ngValue"]
            }],
            value: [{
                type: I.Input,
                args: ["value"]
            }]
        };
        var pt = [$, ot, X, at, lt, nt]
          , dt = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return D.a(e, t),
            e.prototype.ngOnInit = function() {
                this._checkParentType(),
                this.formDirective.addFormGroup(this)
            }
            ,
            e.prototype.ngOnDestroy = function() {
                this.formDirective && this.formDirective.removeFormGroup(this)
            }
            ,
            Object.defineProperty(e.prototype, "control", {
                get: function() {
                    return this.formDirective.getFormGroup(this)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "path", {
                get: function() {
                    return g(this.name, this._parent)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "formDirective", {
                get: function() {
                    return this._parent ? this._parent.formDirective : null
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "validator", {
                get: function() {
                    return k(this._validators)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "asyncValidator", {
                get: function() {
                    return S(this._asyncValidators)
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype._checkParentType = function() {}
            ,
            e
        }(G)
          , ht = function() {
            function t(t) {
                this._cd = t
            }
            return Object.defineProperty(t.prototype, "ngClassUntouched", {
                get: function() {
                    return !!this._cd.control && this._cd.control.untouched
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "ngClassTouched", {
                get: function() {
                    return !!this._cd.control && this._cd.control.touched
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "ngClassPristine", {
                get: function() {
                    return !!this._cd.control && this._cd.control.pristine
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "ngClassDirty", {
                get: function() {
                    return !!this._cd.control && this._cd.control.dirty
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "ngClassValid", {
                get: function() {
                    return !!this._cd.control && this._cd.control.valid
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "ngClassInvalid", {
                get: function() {
                    return !!this._cd.control && this._cd.control.invalid
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "ngClassPending", {
                get: function() {
                    return !!this._cd.control && this._cd.control.pending
                },
                enumerable: !0,
                configurable: !0
            }),
            t
        }()
          , ft = {
            "[class.ng-untouched]": "ngClassUntouched",
            "[class.ng-touched]": "ngClassTouched",
            "[class.ng-pristine]": "ngClassPristine",
            "[class.ng-dirty]": "ngClassDirty",
            "[class.ng-valid]": "ngClassValid",
            "[class.ng-invalid]": "ngClassInvalid",
            "[class.ng-pending]": "ngClassPending"
        }
          , yt = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return D.a(e, t),
            e
        }(ht);
        yt.decorators = [{
            type: I.Directive,
            args: [{
                selector: "[formControlName],[ngModel],[formControl]",
                host: ft
            }]
        }],
        yt.ctorParameters = function() {
            return [{
                type: Q,
                decorators: [{
                    type: I.Self
                }]
            }]
        }
        ;
        var mt = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return D.a(e, t),
            e
        }(ht);
        mt.decorators = [{
            type: I.Directive,
            args: [{
                selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
                host: ft
            }]
        }],
        mt.ctorParameters = function() {
            return [{
                type: G,
                decorators: [{
                    type: I.Self
                }]
            }]
        }
        ;
        var gt = "VALID"
          , vt = "INVALID"
          , bt = "PENDING"
          , _t = "DISABLED"
          , Ct = function() {
            function t(t, e) {
                this.validator = t,
                this.asyncValidator = e,
                this._onCollectionChange = function() {}
                ,
                this._pristine = !0,
                this._touched = !1,
                this._onDisabledChange = []
            }
            return Object.defineProperty(t.prototype, "value", {
                get: function() {
                    return this._value
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "parent", {
                get: function() {
                    return this._parent
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "status", {
                get: function() {
                    return this._status
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "valid", {
                get: function() {
                    return this._status === gt
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "invalid", {
                get: function() {
                    return this._status === vt
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "pending", {
                get: function() {
                    return this._status == bt
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "disabled", {
                get: function() {
                    return this._status === _t
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "enabled", {
                get: function() {
                    return this._status !== _t
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "errors", {
                get: function() {
                    return this._errors
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "pristine", {
                get: function() {
                    return this._pristine
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "dirty", {
                get: function() {
                    return !this.pristine
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "touched", {
                get: function() {
                    return this._touched
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "untouched", {
                get: function() {
                    return !this._touched
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "valueChanges", {
                get: function() {
                    return this._valueChanges
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "statusChanges", {
                get: function() {
                    return this._statusChanges
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.setValidators = function(t) {
                this.validator = x(t)
            }
            ,
            t.prototype.setAsyncValidators = function(t) {
                this.asyncValidator = T(t)
            }
            ,
            t.prototype.clearValidators = function() {
                this.validator = null
            }
            ,
            t.prototype.clearAsyncValidators = function() {
                this.asyncValidator = null
            }
            ,
            t.prototype.markAsTouched = function(t) {
                void 0 === t && (t = {}),
                this._touched = !0,
                this._parent && !t.onlySelf && this._parent.markAsTouched(t)
            }
            ,
            t.prototype.markAsUntouched = function(t) {
                void 0 === t && (t = {}),
                this._touched = !1,
                this._forEachChild(function(t) {
                    t.markAsUntouched({
                        onlySelf: !0
                    })
                }),
                this._parent && !t.onlySelf && this._parent._updateTouched(t)
            }
            ,
            t.prototype.markAsDirty = function(t) {
                void 0 === t && (t = {}),
                this._pristine = !1,
                this._parent && !t.onlySelf && this._parent.markAsDirty(t)
            }
            ,
            t.prototype.markAsPristine = function(t) {
                void 0 === t && (t = {}),
                this._pristine = !0,
                this._forEachChild(function(t) {
                    t.markAsPristine({
                        onlySelf: !0
                    })
                }),
                this._parent && !t.onlySelf && this._parent._updatePristine(t)
            }
            ,
            t.prototype.markAsPending = function(t) {
                void 0 === t && (t = {}),
                this._status = bt,
                this._parent && !t.onlySelf && this._parent.markAsPending(t)
            }
            ,
            t.prototype.disable = function(t) {
                void 0 === t && (t = {}),
                this._status = _t,
                this._errors = null,
                this._forEachChild(function(t) {
                    t.disable({
                        onlySelf: !0
                    })
                }),
                this._updateValue(),
                !1 !== t.emitEvent && (this._valueChanges.emit(this._value),
                this._statusChanges.emit(this._status)),
                this._updateAncestors(!!t.onlySelf),
                this._onDisabledChange.forEach(function(t) {
                    return t(!0)
                })
            }
            ,
            t.prototype.enable = function(t) {
                void 0 === t && (t = {}),
                this._status = gt,
                this._forEachChild(function(t) {
                    t.enable({
                        onlySelf: !0
                    })
                }),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: t.emitEvent
                }),
                this._updateAncestors(!!t.onlySelf),
                this._onDisabledChange.forEach(function(t) {
                    return t(!1)
                })
            }
            ,
            t.prototype._updateAncestors = function(t) {
                this._parent && !t && (this._parent.updateValueAndValidity(),
                this._parent._updatePristine(),
                this._parent._updateTouched())
            }
            ,
            t.prototype.setParent = function(t) {
                this._parent = t
            }
            ,
            t.prototype.setValue = function(t, e) {}
            ,
            t.prototype.patchValue = function(t, e) {}
            ,
            t.prototype.reset = function(t, e) {}
            ,
            t.prototype.updateValueAndValidity = function(t) {
                void 0 === t && (t = {}),
                this._setInitialStatus(),
                this._updateValue(),
                this.enabled && (this._cancelExistingSubscription(),
                this._errors = this._runValidator(),
                this._status = this._calculateStatus(),
                this._status !== gt && this._status !== bt || this._runAsyncValidator(t.emitEvent)),
                !1 !== t.emitEvent && (this._valueChanges.emit(this._value),
                this._statusChanges.emit(this._status)),
                this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t)
            }
            ,
            t.prototype._updateTreeValidity = function(t) {
                void 0 === t && (t = {
                    emitEvent: !0
                }),
                this._forEachChild(function(e) {
                    return e._updateTreeValidity(t)
                }),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: t.emitEvent
                })
            }
            ,
            t.prototype._setInitialStatus = function() {
                this._status = this._allControlsDisabled() ? _t : gt
            }
            ,
            t.prototype._runValidator = function() {
                return this.validator ? this.validator(this) : null
            }
            ,
            t.prototype._runAsyncValidator = function(t) {
                var e = this;
                if (this.asyncValidator) {
                    this._status = bt;
                    var n = i(this.asyncValidator(this));
                    this._asyncValidationSubscription = n.subscribe(function(n) {
                        return e.setErrors(n, {
                            emitEvent: t
                        })
                    })
                }
            }
            ,
            t.prototype._cancelExistingSubscription = function() {
                this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe()
            }
            ,
            t.prototype.setErrors = function(t, e) {
                void 0 === e && (e = {}),
                this._errors = t,
                this._updateControlsErrors(!1 !== e.emitEvent)
            }
            ,
            t.prototype.get = function(t) {
                return P(this, t, ".")
            }
            ,
            t.prototype.getError = function(t, e) {
                var n = e ? this.get(e) : this;
                return n && n._errors ? n._errors[t] : null
            }
            ,
            t.prototype.hasError = function(t, e) {
                return !!this.getError(t, e)
            }
            ,
            Object.defineProperty(t.prototype, "root", {
                get: function() {
                    for (var t = this; t._parent; )
                        t = t._parent;
                    return t
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype._updateControlsErrors = function(t) {
                this._status = this._calculateStatus(),
                t && this._statusChanges.emit(this._status),
                this._parent && this._parent._updateControlsErrors(t)
            }
            ,
            t.prototype._initObservables = function() {
                this._valueChanges = new I.EventEmitter,
                this._statusChanges = new I.EventEmitter
            }
            ,
            t.prototype._calculateStatus = function() {
                return this._allControlsDisabled() ? _t : this._errors ? vt : this._anyControlsHaveStatus(bt) ? bt : this._anyControlsHaveStatus(vt) ? vt : gt
            }
            ,
            t.prototype._updateValue = function() {}
            ,
            t.prototype._forEachChild = function(t) {}
            ,
            t.prototype._anyControls = function(t) {}
            ,
            t.prototype._allControlsDisabled = function() {}
            ,
            t.prototype._anyControlsHaveStatus = function(t) {
                return this._anyControls(function(e) {
                    return e.status === t
                })
            }
            ,
            t.prototype._anyControlsDirty = function() {
                return this._anyControls(function(t) {
                    return t.dirty
                })
            }
            ,
            t.prototype._anyControlsTouched = function() {
                return this._anyControls(function(t) {
                    return t.touched
                })
            }
            ,
            t.prototype._updatePristine = function(t) {
                void 0 === t && (t = {}),
                this._pristine = !this._anyControlsDirty(),
                this._parent && !t.onlySelf && this._parent._updatePristine(t)
            }
            ,
            t.prototype._updateTouched = function(t) {
                void 0 === t && (t = {}),
                this._touched = this._anyControlsTouched(),
                this._parent && !t.onlySelf && this._parent._updateTouched(t)
            }
            ,
            t.prototype._isBoxedValue = function(t) {
                return "object" == typeof t && null !== t && 2 === Object.keys(t).length && "value"in t && "disabled"in t
            }
            ,
            t.prototype._registerOnCollectionChange = function(t) {
                this._onCollectionChange = t
            }
            ,
            t
        }()
          , wt = function(t) {
            function e(e, n, r) {
                void 0 === e && (e = null);
                var o = t.call(this, x(n), T(r)) || this;
                return o._onChange = [],
                o._applyFormState(e),
                o.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                o._initObservables(),
                o
            }
            return D.a(e, t),
            e.prototype.setValue = function(t, e) {
                var n = this;
                void 0 === e && (e = {}),
                this._value = t,
                this._onChange.length && !1 !== e.emitModelToViewChange && this._onChange.forEach(function(t) {
                    return t(n._value, !1 !== e.emitViewToModelChange)
                }),
                this.updateValueAndValidity(e)
            }
            ,
            e.prototype.patchValue = function(t, e) {
                void 0 === e && (e = {}),
                this.setValue(t, e)
            }
            ,
            e.prototype.reset = function(t, e) {
                void 0 === t && (t = null),
                void 0 === e && (e = {}),
                this._applyFormState(t),
                this.markAsPristine(e),
                this.markAsUntouched(e),
                this.setValue(this._value, e)
            }
            ,
            e.prototype._updateValue = function() {}
            ,
            e.prototype._anyControls = function(t) {
                return !1
            }
            ,
            e.prototype._allControlsDisabled = function() {
                return this.disabled
            }
            ,
            e.prototype.registerOnChange = function(t) {
                this._onChange.push(t)
            }
            ,
            e.prototype._clearChangeFns = function() {
                this._onChange = [],
                this._onDisabledChange = [],
                this._onCollectionChange = function() {}
            }
            ,
            e.prototype.registerOnDisabledChange = function(t) {
                this._onDisabledChange.push(t)
            }
            ,
            e.prototype._forEachChild = function(t) {}
            ,
            e.prototype._applyFormState = function(t) {
                this._isBoxedValue(t) ? (this._value = t.value,
                t.disabled ? this.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }) : this.enable({
                    onlySelf: !0,
                    emitEvent: !1
                })) : this._value = t
            }
            ,
            e
        }(Ct)
          , kt = function(t) {
            function e(e, n, r) {
                var o = t.call(this, n || null, r || null) || this;
                return o.controls = e,
                o._initObservables(),
                o._setUpControls(),
                o.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                o
            }
            return D.a(e, t),
            e.prototype.registerControl = function(t, e) {
                return this.controls[t] ? this.controls[t] : (this.controls[t] = e,
                e.setParent(this),
                e._registerOnCollectionChange(this._onCollectionChange),
                e)
            }
            ,
            e.prototype.addControl = function(t, e) {
                this.registerControl(t, e),
                this.updateValueAndValidity(),
                this._onCollectionChange()
            }
            ,
            e.prototype.removeControl = function(t) {
                this.controls[t] && this.controls[t]._registerOnCollectionChange(function() {}),
                delete this.controls[t],
                this.updateValueAndValidity(),
                this._onCollectionChange()
            }
            ,
            e.prototype.setControl = function(t, e) {
                this.controls[t] && this.controls[t]._registerOnCollectionChange(function() {}),
                delete this.controls[t],
                e && this.registerControl(t, e),
                this.updateValueAndValidity(),
                this._onCollectionChange()
            }
            ,
            e.prototype.contains = function(t) {
                return this.controls.hasOwnProperty(t) && this.controls[t].enabled
            }
            ,
            e.prototype.setValue = function(t, e) {
                var n = this;
                void 0 === e && (e = {}),
                this._checkAllValuesPresent(t),
                Object.keys(t).forEach(function(r) {
                    n._throwIfControlMissing(r),
                    n.controls[r].setValue(t[r], {
                        onlySelf: !0,
                        emitEvent: e.emitEvent
                    })
                }),
                this.updateValueAndValidity(e)
            }
            ,
            e.prototype.patchValue = function(t, e) {
                var n = this;
                void 0 === e && (e = {}),
                Object.keys(t).forEach(function(r) {
                    n.controls[r] && n.controls[r].patchValue(t[r], {
                        onlySelf: !0,
                        emitEvent: e.emitEvent
                    })
                }),
                this.updateValueAndValidity(e)
            }
            ,
            e.prototype.reset = function(t, e) {
                void 0 === t && (t = {}),
                void 0 === e && (e = {}),
                this._forEachChild(function(n, r) {
                    n.reset(t[r], {
                        onlySelf: !0,
                        emitEvent: e.emitEvent
                    })
                }),
                this.updateValueAndValidity(e),
                this._updatePristine(e),
                this._updateTouched(e)
            }
            ,
            e.prototype.getRawValue = function() {
                return this._reduceChildren({}, function(t, e, n) {
                    return t[n] = e instanceof wt ? e.value : e.getRawValue(),
                    t
                })
            }
            ,
            e.prototype._throwIfControlMissing = function(t) {
                if (!Object.keys(this.controls).length)
                    throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
                if (!this.controls[t])
                    throw new Error("Cannot find form control with name: " + t + ".")
            }
            ,
            e.prototype._forEachChild = function(t) {
                var e = this;
                Object.keys(this.controls).forEach(function(n) {
                    return t(e.controls[n], n)
                })
            }
            ,
            e.prototype._setUpControls = function() {
                var t = this;
                this._forEachChild(function(e) {
                    e.setParent(t),
                    e._registerOnCollectionChange(t._onCollectionChange)
                })
            }
            ,
            e.prototype._updateValue = function() {
                this._value = this._reduceValue()
            }
            ,
            e.prototype._anyControls = function(t) {
                var e = this
                  , n = !1;
                return this._forEachChild(function(r, o) {
                    n = n || e.contains(o) && t(r)
                }),
                n
            }
            ,
            e.prototype._reduceValue = function() {
                var t = this;
                return this._reduceChildren({}, function(e, n, r) {
                    return (n.enabled || t.disabled) && (e[r] = n.value),
                    e
                })
            }
            ,
            e.prototype._reduceChildren = function(t, e) {
                var n = t;
                return this._forEachChild(function(t, r) {
                    n = e(n, t, r)
                }),
                n
            }
            ,
            e.prototype._allControlsDisabled = function() {
                for (var t = 0, e = Object.keys(this.controls); t < e.length; t++) {
                    var n = e[t];
                    if (this.controls[n].enabled)
                        return !1
                }
                return Object.keys(this.controls).length > 0 || this.disabled
            }
            ,
            e.prototype._checkAllValuesPresent = function(t) {
                this._forEachChild(function(e, n) {
                    if (void 0 === t[n])
                        throw new Error("Must supply a value for form control with name: '" + n + "'.")
                })
            }
            ,
            e
        }(Ct)
          , St = function(t) {
            function e(e, n, r) {
                var o = t.call(this, n || null, r || null) || this;
                return o.controls = e,
                o._initObservables(),
                o._setUpControls(),
                o.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: !1
                }),
                o
            }
            return D.a(e, t),
            e.prototype.at = function(t) {
                return this.controls[t]
            }
            ,
            e.prototype.push = function(t) {
                this.controls.push(t),
                this._registerControl(t),
                this.updateValueAndValidity(),
                this._onCollectionChange()
            }
            ,
            e.prototype.insert = function(t, e) {
                this.controls.splice(t, 0, e),
                this._registerControl(e),
                this.updateValueAndValidity(),
                this._onCollectionChange()
            }
            ,
            e.prototype.removeAt = function(t) {
                this.controls[t] && this.controls[t]._registerOnCollectionChange(function() {}),
                this.controls.splice(t, 1),
                this.updateValueAndValidity(),
                this._onCollectionChange()
            }
            ,
            e.prototype.setControl = function(t, e) {
                this.controls[t] && this.controls[t]._registerOnCollectionChange(function() {}),
                this.controls.splice(t, 1),
                e && (this.controls.splice(t, 0, e),
                this._registerControl(e)),
                this.updateValueAndValidity(),
                this._onCollectionChange()
            }
            ,
            Object.defineProperty(e.prototype, "length", {
                get: function() {
                    return this.controls.length
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.setValue = function(t, e) {
                var n = this;
                void 0 === e && (e = {}),
                this._checkAllValuesPresent(t),
                t.forEach(function(t, r) {
                    n._throwIfControlMissing(r),
                    n.at(r).setValue(t, {
                        onlySelf: !0,
                        emitEvent: e.emitEvent
                    })
                }),
                this.updateValueAndValidity(e)
            }
            ,
            e.prototype.patchValue = function(t, e) {
                var n = this;
                void 0 === e && (e = {}),
                t.forEach(function(t, r) {
                    n.at(r) && n.at(r).patchValue(t, {
                        onlySelf: !0,
                        emitEvent: e.emitEvent
                    })
                }),
                this.updateValueAndValidity(e)
            }
            ,
            e.prototype.reset = function(t, e) {
                void 0 === t && (t = []),
                void 0 === e && (e = {}),
                this._forEachChild(function(n, r) {
                    n.reset(t[r], {
                        onlySelf: !0,
                        emitEvent: e.emitEvent
                    })
                }),
                this.updateValueAndValidity(e),
                this._updatePristine(e),
                this._updateTouched(e)
            }
            ,
            e.prototype.getRawValue = function() {
                return this.controls.map(function(t) {
                    return t instanceof wt ? t.value : t.getRawValue()
                })
            }
            ,
            e.prototype._throwIfControlMissing = function(t) {
                if (!this.controls.length)
                    throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
                if (!this.at(t))
                    throw new Error("Cannot find form control at index " + t)
            }
            ,
            e.prototype._forEachChild = function(t) {
                this.controls.forEach(function(e, n) {
                    t(e, n)
                })
            }
            ,
            e.prototype._updateValue = function() {
                var t = this;
                this._value = this.controls.filter(function(e) {
                    return e.enabled || t.disabled
                }).map(function(t) {
                    return t.value
                })
            }
            ,
            e.prototype._anyControls = function(t) {
                return this.controls.some(function(e) {
                    return e.enabled && t(e)
                })
            }
            ,
            e.prototype._setUpControls = function() {
                var t = this;
                this._forEachChild(function(e) {
                    return t._registerControl(e)
                })
            }
            ,
            e.prototype._checkAllValuesPresent = function(t) {
                this._forEachChild(function(e, n) {
                    if (void 0 === t[n])
                        throw new Error("Must supply a value for form control at index: " + n + ".")
                })
            }
            ,
            e.prototype._allControlsDisabled = function() {
                for (var t = 0, e = this.controls; t < e.length; t++) {
                    if (e[t].enabled)
                        return !1
                }
                return this.controls.length > 0 || this.disabled
            }
            ,
            e.prototype._registerControl = function(t) {
                t.setParent(this),
                t._registerOnCollectionChange(this._onCollectionChange)
            }
            ,
            e
        }(Ct)
          , Ot = {
            provide: G,
            useExisting: n.i(I.forwardRef)(function() {
                return At
            })
        }
          , Et = Promise.resolve(null)
          , At = function(t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r._submitted = !1,
                r.ngSubmit = new I.EventEmitter,
                r.form = new kt({},k(e),S(n)),
                r
            }
            return D.a(e, t),
            Object.defineProperty(e.prototype, "submitted", {
                get: function() {
                    return this._submitted
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "formDirective", {
                get: function() {
                    return this
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "control", {
                get: function() {
                    return this.form
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "path", {
                get: function() {
                    return []
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "controls", {
                get: function() {
                    return this.form.controls
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.addControl = function(t) {
                var e = this;
                Et.then(function() {
                    var n = e._findContainer(t.path);
                    t._control = n.registerControl(t.name, t.control),
                    v(t.control, t),
                    t.control.updateValueAndValidity({
                        emitEvent: !1
                    })
                })
            }
            ,
            e.prototype.getControl = function(t) {
                return this.form.get(t.path)
            }
            ,
            e.prototype.removeControl = function(t) {
                var e = this;
                Et.then(function() {
                    var n = e._findContainer(t.path);
                    n && n.removeControl(t.name)
                })
            }
            ,
            e.prototype.addFormGroup = function(t) {
                var e = this;
                Et.then(function() {
                    var n = e._findContainer(t.path)
                      , r = new kt({});
                    _(r, t),
                    n.registerControl(t.name, r),
                    r.updateValueAndValidity({
                        emitEvent: !1
                    })
                })
            }
            ,
            e.prototype.removeFormGroup = function(t) {
                var e = this;
                Et.then(function() {
                    var n = e._findContainer(t.path);
                    n && n.removeControl(t.name)
                })
            }
            ,
            e.prototype.getFormGroup = function(t) {
                return this.form.get(t.path)
            }
            ,
            e.prototype.updateModel = function(t, e) {
                var n = this;
                Et.then(function() {
                    n.form.get(t.path).setValue(e)
                })
            }
            ,
            e.prototype.setValue = function(t) {
                this.control.setValue(t)
            }
            ,
            e.prototype.onSubmit = function(t) {
                return this._submitted = !0,
                this.ngSubmit.emit(t),
                !1
            }
            ,
            e.prototype.onReset = function() {
                this.resetForm()
            }
            ,
            e.prototype.resetForm = function(t) {
                void 0 === t && (t = void 0),
                this.form.reset(t),
                this._submitted = !1
            }
            ,
            e.prototype._findContainer = function(t) {
                return t.pop(),
                t.length ? this.form.get(t) : this.form
            }
            ,
            e
        }(G);
        At.decorators = [{
            type: I.Directive,
            args: [{
                selector: "form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]",
                providers: [Ot],
                host: {
                    "(submit)": "onSubmit($event)",
                    "(reset)": "onReset()"
                },
                outputs: ["ngSubmit"],
                exportAs: "ngForm"
            }]
        }],
        At.ctorParameters = function() {
            return [{
                type: Array,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Self
                }, {
                    type: I.Inject,
                    args: [q]
                }]
            }, {
                type: Array,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Self
                }, {
                    type: I.Inject,
                    args: [F]
                }]
            }]
        }
        ;
        var Pt = {
            formControlName: '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',
            formGroupName: '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',
            formArrayName: '\n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });',
            ngModelGroup: '\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>',
            ngModelWithFormGroup: '\n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  '
        }
          , xt = function() {
            function t() {}
            return t.modelParentException = function() {
                throw new Error('\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup\'s partner directive "formControlName" instead.  Example:\n\n      ' + Pt.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + Pt.ngModelWithFormGroup)
            }
            ,
            t.formGroupNameException = function() {
                throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + Pt.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + Pt.ngModelGroup)
            }
            ,
            t.missingNameException = function() {
                throw new Error('If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">')
            }
            ,
            t.modelGroupParentException = function() {
                throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + Pt.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + Pt.ngModelGroup)
            }
            ,
            t
        }()
          , Tt = {
            provide: G,
            useExisting: n.i(I.forwardRef)(function() {
                return Mt
            })
        }
          , Mt = function(t) {
            function e(e, n, r) {
                var o = t.call(this) || this;
                return o._parent = e,
                o._validators = n,
                o._asyncValidators = r,
                o
            }
            return D.a(e, t),
            e.prototype._checkParentType = function() {
                this._parent instanceof e || this._parent instanceof At || xt.modelGroupParentException()
            }
            ,
            e
        }(dt);
        Mt.decorators = [{
            type: I.Directive,
            args: [{
                selector: "[ngModelGroup]",
                providers: [Tt],
                exportAs: "ngModelGroup"
            }]
        }],
        Mt.ctorParameters = function() {
            return [{
                type: G,
                decorators: [{
                    type: I.Host
                }, {
                    type: I.SkipSelf
                }]
            }, {
                type: Array,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Self
                }, {
                    type: I.Inject,
                    args: [q]
                }]
            }, {
                type: Array,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Self
                }, {
                    type: I.Inject,
                    args: [F]
                }]
            }]
        }
        ,
        Mt.propDecorators = {
            name: [{
                type: I.Input,
                args: ["ngModelGroup"]
            }]
        };
        var Rt = {
            provide: Q,
            useExisting: n.i(I.forwardRef)(function() {
                return It
            })
        }
          , Dt = Promise.resolve(null)
          , It = function(t) {
            function e(e, n, r, o) {
                var i = t.call(this) || this;
                return i._control = new wt,
                i._registered = !1,
                i.update = new I.EventEmitter,
                i._parent = e,
                i._rawValidators = n || [],
                i._rawAsyncValidators = r || [],
                i.valueAccessor = A(i, o),
                i
            }
            return D.a(e, t),
            e.prototype.ngOnChanges = function(t) {
                this._checkForErrors(),
                this._registered || this._setUpControl(),
                "isDisabled"in t && this._updateDisabled(t),
                O(t, this.viewModel) && (this._updateValue(this.model),
                this.viewModel = this.model)
            }
            ,
            e.prototype.ngOnDestroy = function() {
                this.formDirective && this.formDirective.removeControl(this)
            }
            ,
            Object.defineProperty(e.prototype, "control", {
                get: function() {
                    return this._control
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "path", {
                get: function() {
                    return this._parent ? g(this.name, this._parent) : [this.name]
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "formDirective", {
                get: function() {
                    return this._parent ? this._parent.formDirective : null
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "validator", {
                get: function() {
                    return k(this._rawValidators)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "asyncValidator", {
                get: function() {
                    return S(this._rawAsyncValidators)
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.viewToModelUpdate = function(t) {
                this.viewModel = t,
                this.update.emit(t)
            }
            ,
            e.prototype._setUpControl = function() {
                this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this),
                this._registered = !0
            }
            ,
            e.prototype._isStandalone = function() {
                return !this._parent || !(!this.options || !this.options.standalone)
            }
            ,
            e.prototype._setUpStandalone = function() {
                v(this._control, this),
                this._control.updateValueAndValidity({
                    emitEvent: !1
                })
            }
            ,
            e.prototype._checkForErrors = function() {
                this._isStandalone() || this._checkParentType(),
                this._checkName()
            }
            ,
            e.prototype._checkParentType = function() {
                !(this._parent instanceof Mt) && this._parent instanceof dt ? xt.formGroupNameException() : this._parent instanceof Mt || this._parent instanceof At || xt.modelParentException()
            }
            ,
            e.prototype._checkName = function() {
                this.options && this.options.name && (this.name = this.options.name),
                this._isStandalone() || this.name || xt.missingNameException()
            }
            ,
            e.prototype._updateValue = function(t) {
                var e = this;
                Dt.then(function() {
                    e.control.setValue(t, {
                        emitViewToModelChange: !1
                    })
                })
            }
            ,
            e.prototype._updateDisabled = function(t) {
                var e = this
                  , n = t.isDisabled.currentValue
                  , r = "" === n || n && "false" !== n;
                Dt.then(function() {
                    r && !e.control.disabled ? e.control.disable() : !r && e.control.disabled && e.control.enable()
                })
            }
            ,
            e
        }(Q);
        It.decorators = [{
            type: I.Directive,
            args: [{
                selector: "[ngModel]:not([formControlName]):not([formControl])",
                providers: [Rt],
                exportAs: "ngModel"
            }]
        }],
        It.ctorParameters = function() {
            return [{
                type: G,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Host
                }]
            }, {
                type: Array,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Self
                }, {
                    type: I.Inject,
                    args: [q]
                }]
            }, {
                type: Array,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Self
                }, {
                    type: I.Inject,
                    args: [F]
                }]
            }, {
                type: Array,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Self
                }, {
                    type: I.Inject,
                    args: [H]
                }]
            }]
        }
        ,
        It.propDecorators = {
            name: [{
                type: I.Input
            }],
            isDisabled: [{
                type: I.Input,
                args: ["disabled"]
            }],
            model: [{
                type: I.Input,
                args: ["ngModel"]
            }],
            options: [{
                type: I.Input,
                args: ["ngModelOptions"]
            }],
            update: [{
                type: I.Output,
                args: ["ngModelChange"]
            }]
        };
        var jt = function() {
            function t() {}
            return t.controlParentException = function() {
                throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Pt.formControlName)
            }
            ,
            t.ngModelGroupException = function() {
                throw new Error('formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ' + Pt.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + Pt.ngModelGroup)
            }
            ,
            t.missingFormException = function() {
                throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + Pt.formControlName)
            }
            ,
            t.groupParentException = function() {
                throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Pt.formGroupName)
            }
            ,
            t.arrayParentException = function() {
                throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + Pt.formArrayName)
            }
            ,
            t.disabledAttrWarning = function() {
                console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ")
            }
            ,
            t
        }()
          , Nt = {
            provide: Q,
            useExisting: n.i(I.forwardRef)(function() {
                return Vt
            })
        }
          , Vt = function(t) {
            function e(e, n, r) {
                var o = t.call(this) || this;
                return o.update = new I.EventEmitter,
                o._rawValidators = e || [],
                o._rawAsyncValidators = n || [],
                o.valueAccessor = A(o, r),
                o
            }
            return D.a(e, t),
            Object.defineProperty(e.prototype, "isDisabled", {
                set: function(t) {
                    jt.disabledAttrWarning()
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.ngOnChanges = function(t) {
                this._isControlChanged(t) && (v(this.form, this),
                this.control.disabled && this.valueAccessor.setDisabledState && this.valueAccessor.setDisabledState(!0),
                this.form.updateValueAndValidity({
                    emitEvent: !1
                })),
                O(t, this.viewModel) && (this.form.setValue(this.model),
                this.viewModel = this.model)
            }
            ,
            Object.defineProperty(e.prototype, "path", {
                get: function() {
                    return []
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "validator", {
                get: function() {
                    return k(this._rawValidators)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "asyncValidator", {
                get: function() {
                    return S(this._rawAsyncValidators)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "control", {
                get: function() {
                    return this.form
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.viewToModelUpdate = function(t) {
                this.viewModel = t,
                this.update.emit(t)
            }
            ,
            e.prototype._isControlChanged = function(t) {
                return t.hasOwnProperty("form")
            }
            ,
            e
        }(Q);
        Vt.decorators = [{
            type: I.Directive,
            args: [{
                selector: "[formControl]",
                providers: [Nt],
                exportAs: "ngForm"
            }]
        }],
        Vt.ctorParameters = function() {
            return [{
                type: Array,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Self
                }, {
                    type: I.Inject,
                    args: [q]
                }]
            }, {
                type: Array,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Self
                }, {
                    type: I.Inject,
                    args: [F]
                }]
            }, {
                type: Array,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Self
                }, {
                    type: I.Inject,
                    args: [H]
                }]
            }]
        }
        ,
        Vt.propDecorators = {
            form: [{
                type: I.Input,
                args: ["formControl"]
            }],
            model: [{
                type: I.Input,
                args: ["ngModel"]
            }],
            update: [{
                type: I.Output,
                args: ["ngModelChange"]
            }],
            isDisabled: [{
                type: I.Input,
                args: ["disabled"]
            }]
        };
        var Bt = {
            provide: G,
            useExisting: n.i(I.forwardRef)(function() {
                return Lt
            })
        }
          , Lt = function(t) {
            function e(e, n) {
                var r = t.call(this) || this;
                return r._validators = e,
                r._asyncValidators = n,
                r._submitted = !1,
                r.directives = [],
                r.form = null,
                r.ngSubmit = new I.EventEmitter,
                r
            }
            return D.a(e, t),
            e.prototype.ngOnChanges = function(t) {
                this._checkFormPresent(),
                t.hasOwnProperty("form") && (this._updateValidators(),
                this._updateDomValue(),
                this._updateRegistrations())
            }
            ,
            Object.defineProperty(e.prototype, "submitted", {
                get: function() {
                    return this._submitted
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "formDirective", {
                get: function() {
                    return this
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "control", {
                get: function() {
                    return this.form
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "path", {
                get: function() {
                    return []
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.addControl = function(t) {
                var e = this.form.get(t.path);
                return v(e, t),
                e.updateValueAndValidity({
                    emitEvent: !1
                }),
                this.directives.push(t),
                e
            }
            ,
            e.prototype.getControl = function(t) {
                return this.form.get(t.path)
            }
            ,
            e.prototype.removeControl = function(t) {
                M(this.directives, t)
            }
            ,
            e.prototype.addFormGroup = function(t) {
                var e = this.form.get(t.path);
                _(e, t),
                e.updateValueAndValidity({
                    emitEvent: !1
                })
            }
            ,
            e.prototype.removeFormGroup = function(t) {}
            ,
            e.prototype.getFormGroup = function(t) {
                return this.form.get(t.path)
            }
            ,
            e.prototype.addFormArray = function(t) {
                var e = this.form.get(t.path);
                _(e, t),
                e.updateValueAndValidity({
                    emitEvent: !1
                })
            }
            ,
            e.prototype.removeFormArray = function(t) {}
            ,
            e.prototype.getFormArray = function(t) {
                return this.form.get(t.path)
            }
            ,
            e.prototype.updateModel = function(t, e) {
                this.form.get(t.path).setValue(e)
            }
            ,
            e.prototype.onSubmit = function(t) {
                return this._submitted = !0,
                this.ngSubmit.emit(t),
                !1
            }
            ,
            e.prototype.onReset = function() {
                this.resetForm()
            }
            ,
            e.prototype.resetForm = function(t) {
                void 0 === t && (t = void 0),
                this.form.reset(t),
                this._submitted = !1
            }
            ,
            e.prototype._updateDomValue = function() {
                var t = this;
                this.directives.forEach(function(e) {
                    var n = t.form.get(e.path);
                    e._control !== n && (b(e._control, e),
                    n && v(n, e),
                    e._control = n)
                }),
                this.form._updateTreeValidity({
                    emitEvent: !1
                })
            }
            ,
            e.prototype._updateRegistrations = function() {
                var t = this;
                this.form._registerOnCollectionChange(function() {
                    return t._updateDomValue()
                }),
                this._oldForm && this._oldForm._registerOnCollectionChange(function() {}),
                this._oldForm = this.form
            }
            ,
            e.prototype._updateValidators = function() {
                var t = k(this._validators);
                this.form.validator = z.compose([this.form.validator, t]);
                var e = S(this._asyncValidators);
                this.form.asyncValidator = z.composeAsync([this.form.asyncValidator, e])
            }
            ,
            e.prototype._checkFormPresent = function() {
                this.form || jt.missingFormException()
            }
            ,
            e
        }(G);
        Lt.decorators = [{
            type: I.Directive,
            args: [{
                selector: "[formGroup]",
                providers: [Bt],
                host: {
                    "(submit)": "onSubmit($event)",
                    "(reset)": "onReset()"
                },
                exportAs: "ngForm"
            }]
        }],
        Lt.ctorParameters = function() {
            return [{
                type: Array,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Self
                }, {
                    type: I.Inject,
                    args: [q]
                }]
            }, {
                type: Array,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Self
                }, {
                    type: I.Inject,
                    args: [F]
                }]
            }]
        }
        ,
        Lt.propDecorators = {
            form: [{
                type: I.Input,
                args: ["formGroup"]
            }],
            ngSubmit: [{
                type: I.Output
            }]
        };
        var Gt = {
            provide: G,
            useExisting: n.i(I.forwardRef)(function() {
                return qt
            })
        }
          , qt = function(t) {
            function e(e, n, r) {
                var o = t.call(this) || this;
                return o._parent = e,
                o._validators = n,
                o._asyncValidators = r,
                o
            }
            return D.a(e, t),
            e.prototype._checkParentType = function() {
                R(this._parent) && jt.groupParentException()
            }
            ,
            e
        }(dt);
        qt.decorators = [{
            type: I.Directive,
            args: [{
                selector: "[formGroupName]",
                providers: [Gt]
            }]
        }],
        qt.ctorParameters = function() {
            return [{
                type: G,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Host
                }, {
                    type: I.SkipSelf
                }]
            }, {
                type: Array,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Self
                }, {
                    type: I.Inject,
                    args: [q]
                }]
            }, {
                type: Array,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Self
                }, {
                    type: I.Inject,
                    args: [F]
                }]
            }]
        }
        ,
        qt.propDecorators = {
            name: [{
                type: I.Input,
                args: ["formGroupName"]
            }]
        };
        var Ft = {
            provide: G,
            useExisting: n.i(I.forwardRef)(function() {
                return Ut
            })
        }
          , Ut = function(t) {
            function e(e, n, r) {
                var o = t.call(this) || this;
                return o._parent = e,
                o._validators = n,
                o._asyncValidators = r,
                o
            }
            return D.a(e, t),
            e.prototype.ngOnInit = function() {
                this._checkParentType(),
                this.formDirective.addFormArray(this)
            }
            ,
            e.prototype.ngOnDestroy = function() {
                this.formDirective && this.formDirective.removeFormArray(this)
            }
            ,
            Object.defineProperty(e.prototype, "control", {
                get: function() {
                    return this.formDirective.getFormArray(this)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "formDirective", {
                get: function() {
                    return this._parent ? this._parent.formDirective : null
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "path", {
                get: function() {
                    return g(this.name, this._parent)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "validator", {
                get: function() {
                    return k(this._validators)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "asyncValidator", {
                get: function() {
                    return S(this._asyncValidators)
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype._checkParentType = function() {
                R(this._parent) && jt.arrayParentException()
            }
            ,
            e
        }(G);
        Ut.decorators = [{
            type: I.Directive,
            args: [{
                selector: "[formArrayName]",
                providers: [Ft]
            }]
        }],
        Ut.ctorParameters = function() {
            return [{
                type: G,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Host
                }, {
                    type: I.SkipSelf
                }]
            }, {
                type: Array,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Self
                }, {
                    type: I.Inject,
                    args: [q]
                }]
            }, {
                type: Array,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Self
                }, {
                    type: I.Inject,
                    args: [F]
                }]
            }]
        }
        ,
        Ut.propDecorators = {
            name: [{
                type: I.Input,
                args: ["formArrayName"]
            }]
        };
        var zt = {
            provide: Q,
            useExisting: n.i(I.forwardRef)(function() {
                return Ht
            })
        }
          , Ht = function(t) {
            function e(e, n, r, o) {
                var i = t.call(this) || this;
                return i._added = !1,
                i.update = new I.EventEmitter,
                i._parent = e,
                i._rawValidators = n || [],
                i._rawAsyncValidators = r || [],
                i.valueAccessor = A(i, o),
                i
            }
            return D.a(e, t),
            Object.defineProperty(e.prototype, "isDisabled", {
                set: function(t) {
                    jt.disabledAttrWarning()
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.ngOnChanges = function(t) {
                this._added || this._setUpControl(),
                O(t, this.viewModel) && (this.viewModel = this.model,
                this.formDirective.updateModel(this, this.model))
            }
            ,
            e.prototype.ngOnDestroy = function() {
                this.formDirective && this.formDirective.removeControl(this)
            }
            ,
            e.prototype.viewToModelUpdate = function(t) {
                this.viewModel = t,
                this.update.emit(t)
            }
            ,
            Object.defineProperty(e.prototype, "path", {
                get: function() {
                    return g(this.name, this._parent)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "formDirective", {
                get: function() {
                    return this._parent ? this._parent.formDirective : null
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "validator", {
                get: function() {
                    return k(this._rawValidators)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "asyncValidator", {
                get: function() {
                    return S(this._rawAsyncValidators)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "control", {
                get: function() {
                    return this._control
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype._checkParentType = function() {
                !(this._parent instanceof qt) && this._parent instanceof dt ? jt.ngModelGroupException() : this._parent instanceof qt || this._parent instanceof Lt || this._parent instanceof Ut || jt.controlParentException()
            }
            ,
            e.prototype._setUpControl = function() {
                this._checkParentType(),
                this._control = this.formDirective.addControl(this),
                this.control.disabled && this.valueAccessor.setDisabledState && this.valueAccessor.setDisabledState(!0),
                this._added = !0
            }
            ,
            e
        }(Q);
        Ht.decorators = [{
            type: I.Directive,
            args: [{
                selector: "[formControlName]",
                providers: [zt]
            }]
        }],
        Ht.ctorParameters = function() {
            return [{
                type: G,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Host
                }, {
                    type: I.SkipSelf
                }]
            }, {
                type: Array,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Self
                }, {
                    type: I.Inject,
                    args: [q]
                }]
            }, {
                type: Array,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Self
                }, {
                    type: I.Inject,
                    args: [F]
                }]
            }, {
                type: Array,
                decorators: [{
                    type: I.Optional
                }, {
                    type: I.Self
                }, {
                    type: I.Inject,
                    args: [H]
                }]
            }]
        }
        ,
        Ht.propDecorators = {
            name: [{
                type: I.Input,
                args: ["formControlName"]
            }],
            model: [{
                type: I.Input,
                args: ["ngModel"]
            }],
            update: [{
                type: I.Output,
                args: ["ngModelChange"]
            }],
            isDisabled: [{
                type: I.Input,
                args: ["disabled"]
            }]
        };
        var Wt = {
            provide: q,
            useExisting: n.i(I.forwardRef)(function() {
                return Yt
            }),
            multi: !0
        }
          , $t = {
            provide: q,
            useExisting: n.i(I.forwardRef)(function() {
                return Jt
            }),
            multi: !0
        }
          , Yt = function() {
            function t() {}
            return Object.defineProperty(t.prototype, "required", {
                get: function() {
                    return this._required
                },
                set: function(t) {
                    this._required = null != t && !1 !== t && "" + t != "false",
                    this._onChange && this._onChange()
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.validate = function(t) {
                return this.required ? z.required(t) : null
            }
            ,
            t.prototype.registerOnValidatorChange = function(t) {
                this._onChange = t
            }
            ,
            t
        }();
        Yt.decorators = [{
            type: I.Directive,
            args: [{
                selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
                providers: [Wt],
                host: {
                    "[attr.required]": 'required ? "" : null'
                }
            }]
        }],
        Yt.ctorParameters = function() {
            return []
        }
        ,
        Yt.propDecorators = {
            required: [{
                type: I.Input
            }]
        };
        var Jt = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return D.a(e, t),
            e.prototype.validate = function(t) {
                return this.required ? z.requiredTrue(t) : null
            }
            ,
            e
        }(Yt);
        Jt.decorators = [{
            type: I.Directive,
            args: [{
                selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
                providers: [$t],
                host: {
                    "[attr.required]": 'required ? "" : null'
                }
            }]
        }],
        Jt.ctorParameters = function() {
            return []
        }
        ;
        var Kt = {
            provide: q,
            useExisting: n.i(I.forwardRef)(function() {
                return Zt
            }),
            multi: !0
        }
          , Zt = function() {
            function t() {}
            return Object.defineProperty(t.prototype, "email", {
                set: function(t) {
                    this._enabled = "" === t || !0 === t || "true" === t,
                    this._onChange && this._onChange()
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.validate = function(t) {
                return this._enabled ? z.email(t) : null
            }
            ,
            t.prototype.registerOnValidatorChange = function(t) {
                this._onChange = t
            }
            ,
            t
        }();
        Zt.decorators = [{
            type: I.Directive,
            args: [{
                selector: "[email][formControlName],[email][formControl],[email][ngModel]",
                providers: [Kt]
            }]
        }],
        Zt.ctorParameters = function() {
            return []
        }
        ,
        Zt.propDecorators = {
            email: [{
                type: I.Input
            }]
        };
        var Xt = {
            provide: q,
            useExisting: n.i(I.forwardRef)(function() {
                return Qt
            }),
            multi: !0
        }
          , Qt = function() {
            function t() {}
            return t.prototype.ngOnChanges = function(t) {
                "minlength"in t && (this._createValidator(),
                this._onChange && this._onChange())
            }
            ,
            t.prototype.validate = function(t) {
                return null == this.minlength ? null : this._validator(t)
            }
            ,
            t.prototype.registerOnValidatorChange = function(t) {
                this._onChange = t
            }
            ,
            t.prototype._createValidator = function() {
                this._validator = z.minLength(parseInt(this.minlength, 10))
            }
            ,
            t
        }();
        Qt.decorators = [{
            type: I.Directive,
            args: [{
                selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
                providers: [Xt],
                host: {
                    "[attr.minlength]": "minlength ? minlength : null"
                }
            }]
        }],
        Qt.ctorParameters = function() {
            return []
        }
        ,
        Qt.propDecorators = {
            minlength: [{
                type: I.Input
            }]
        };
        var te = {
            provide: q,
            useExisting: n.i(I.forwardRef)(function() {
                return ee
            }),
            multi: !0
        }
          , ee = function() {
            function t() {}
            return t.prototype.ngOnChanges = function(t) {
                "maxlength"in t && (this._createValidator(),
                this._onChange && this._onChange())
            }
            ,
            t.prototype.validate = function(t) {
                return null != this.maxlength ? this._validator(t) : null
            }
            ,
            t.prototype.registerOnValidatorChange = function(t) {
                this._onChange = t
            }
            ,
            t.prototype._createValidator = function() {
                this._validator = z.maxLength(parseInt(this.maxlength, 10))
            }
            ,
            t
        }();
        ee.decorators = [{
            type: I.Directive,
            args: [{
                selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
                providers: [te],
                host: {
                    "[attr.maxlength]": "maxlength ? maxlength : null"
                }
            }]
        }],
        ee.ctorParameters = function() {
            return []
        }
        ,
        ee.propDecorators = {
            maxlength: [{
                type: I.Input
            }]
        };
        var ne = {
            provide: q,
            useExisting: n.i(I.forwardRef)(function() {
                return re
            }),
            multi: !0
        }
          , re = function() {
            function t() {}
            return t.prototype.ngOnChanges = function(t) {
                "pattern"in t && (this._createValidator(),
                this._onChange && this._onChange())
            }
            ,
            t.prototype.validate = function(t) {
                return this._validator(t)
            }
            ,
            t.prototype.registerOnValidatorChange = function(t) {
                this._onChange = t
            }
            ,
            t.prototype._createValidator = function() {
                this._validator = z.pattern(this.pattern)
            }
            ,
            t
        }();
        re.decorators = [{
            type: I.Directive,
            args: [{
                selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
                providers: [ne],
                host: {
                    "[attr.pattern]": "pattern ? pattern : null"
                }
            }]
        }],
        re.ctorParameters = function() {
            return []
        }
        ,
        re.propDecorators = {
            pattern: [{
                type: I.Input
            }]
        };
        var oe = function() {
            function t() {}
            return t.prototype.group = function(t, e) {
                void 0 === e && (e = null);
                var n = this._reduceControls(t)
                  , r = null != e ? e.validator : null
                  , o = null != e ? e.asyncValidator : null;
                return new kt(n,r,o)
            }
            ,
            t.prototype.control = function(t, e, n) {
                return new wt(t,e,n)
            }
            ,
            t.prototype.array = function(t, e, n) {
                var r = this
                  , o = t.map(function(t) {
                    return r._createControl(t)
                });
                return new St(o,e,n)
            }
            ,
            t.prototype._reduceControls = function(t) {
                var e = this
                  , n = {};
                return Object.keys(t).forEach(function(r) {
                    n[r] = e._createControl(t[r])
                }),
                n
            }
            ,
            t.prototype._createControl = function(t) {
                if (t instanceof wt || t instanceof kt || t instanceof St)
                    return t;
                if (Array.isArray(t)) {
                    var e = t[0]
                      , n = t.length > 1 ? t[1] : null
                      , r = t.length > 2 ? t[2] : null;
                    return this.control(e, n, r)
                }
                return this.control(t)
            }
            ,
            t
        }();
        oe.decorators = [{
            type: I.Injectable
        }],
        oe.ctorParameters = function() {
            return []
        }
        ;
        var ie = new I.Version("4.4.7")
          , ae = function() {
            function t() {}
            return t
        }();
        ae.decorators = [{
            type: I.Directive,
            args: [{
                selector: "form:not([ngNoForm]):not([ngNativeValidate])",
                host: {
                    novalidate: ""
                }
            }]
        }],
        ae.ctorParameters = function() {
            return []
        }
        ;
        var se = [ae, st, ut, K, X, ot, $, at, lt, nt, yt, mt, Yt, Qt, ee, re, Jt, Zt]
          , ce = [It, Mt, At]
          , le = [Vt, Lt, Ht, qt, Ut]
          , ue = function() {
            function t() {}
            return t
        }();
        ue.decorators = [{
            type: I.NgModule,
            args: [{
                declarations: se,
                exports: se
            }]
        }],
        ue.ctorParameters = function() {
            return []
        }
        ;
        var pe = function() {
            function t() {}
            return t
        }();
        pe.decorators = [{
            type: I.NgModule,
            args: [{
                declarations: ce,
                providers: [et],
                exports: [ue, ce]
            }]
        }],
        pe.ctorParameters = function() {
            return []
        }
        ;
        var de = function() {
            function t() {}
            return t
        }();
        de.decorators = [{
            type: I.NgModule,
            args: [{
                declarations: [le],
                providers: [oe, et],
                exports: [ue, le]
            }]
        }],
        de.ctorParameters = function() {
            return []
        }
    },
    518: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return r
        });
        var r = ["\n.ps-container {\n  -ms-touch-action: auto;\n  touch-action: auto;\n  overflow: hidden !important;\n  -ms-overflow-style: none; }\n\n@supports (-ms-overflow-style: none) {\n  .ps-container {\n    overflow: auto !important; } }\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps-container {\n    overflow: auto !important; } }\n\n.ps-container.ps-active-x > .ps-scrollbar-x-rail, .ps-container.ps-active-y > .ps-scrollbar-y-rail {\n  display: block;\n  background-color: transparent; }\n\n.ps-container.ps-in-scrolling.ps-x > .ps-scrollbar-x-rail {\n  background-color: #eee;\n  opacity: .9; }\n\n.ps-container.ps-in-scrolling.ps-x > .ps-scrollbar-x-rail > .ps-scrollbar-x {\n  background-color: #999;\n  height: 11px; }\n\n.ps-container.ps-in-scrolling.ps-y > .ps-scrollbar-y-rail {\n  background-color: #eee;\n  opacity: .9; }\n\n.ps-container.ps-in-scrolling.ps-y > .ps-scrollbar-y-rail > .ps-scrollbar-y {\n  background-color: #999;\n  width: 11px; }\n\n.ps-container > .ps-scrollbar-x-rail {\n  display: none;\n  position: absolute;\n  opacity: 0;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  -o-transition: background-color .2s linear, opacity .2s linear;\n  -moz-transition: background-color .2s linear, opacity .2s linear;\n  transition: background-color .2s linear, opacity .2s linear;\n  bottom: 0px;\n  height: 15px; }\n\n.ps-container > .ps-scrollbar-x-rail > .ps-scrollbar-x {\n  position: absolute;\n  background-color: #aaa;\n  -webkit-border-radius: 6px;\n  -moz-border-radius: 6px;\n  border-radius: 6px;\n  -webkit-transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, -webkit-border-radius .2s ease-in-out;\n  transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, -webkit-border-radius .2s ease-in-out;\n  -o-transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out;\n  -moz-transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out, -moz-border-radius .2s ease-in-out;\n  transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out;\n  transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out, -webkit-border-radius .2s ease-in-out, -moz-border-radius .2s ease-in-out;\n  bottom: 2px;\n  height: 6px; }\n\n.ps-container > .ps-scrollbar-x-rail:hover > .ps-scrollbar-x, .ps-container > .ps-scrollbar-x-rail:active > .ps-scrollbar-x {\n  height: 11px; }\n\n.ps-container > .ps-scrollbar-y-rail {\n  display: none;\n  position: absolute;\n  opacity: 0;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  -o-transition: background-color .2s linear, opacity .2s linear;\n  -moz-transition: background-color .2s linear, opacity .2s linear;\n  transition: background-color .2s linear, opacity .2s linear;\n  right: 0;\n  width: 15px; }\n\n.ps-container > .ps-scrollbar-y-rail > .ps-scrollbar-y {\n  position: absolute;\n  background-color: #aaa;\n  -webkit-border-radius: 6px;\n  -moz-border-radius: 6px;\n  border-radius: 6px;\n  -webkit-transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, -webkit-border-radius .2s ease-in-out;\n  transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, -webkit-border-radius .2s ease-in-out;\n  -o-transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out;\n  -moz-transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out, -moz-border-radius .2s ease-in-out;\n  transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out;\n  transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out, -webkit-border-radius .2s ease-in-out, -moz-border-radius .2s ease-in-out;\n  right: 2px;\n  width: 6px; }\n\n.ps-container > .ps-scrollbar-y-rail:hover > .ps-scrollbar-y, .ps-container > .ps-scrollbar-y-rail:active > .ps-scrollbar-y {\n  width: 11px; }\n\n.ps-container:hover.ps-in-scrolling.ps-x > .ps-scrollbar-x-rail {\n  background-color: #eee;\n  opacity: .9; }\n\n.ps-container:hover.ps-in-scrolling.ps-x > .ps-scrollbar-x-rail > .ps-scrollbar-x {\n  background-color: #999;\n  height: 11px; }\n\n.ps-container:hover.ps-in-scrolling.ps-y > .ps-scrollbar-y-rail {\n  background-color: #eee;\n  opacity: .9; }\n\n.ps-container:hover.ps-in-scrolling.ps-y > .ps-scrollbar-y-rail > .ps-scrollbar-y {\n  background-color: #999;\n  width: 11px; }\n\n.ps-container:hover > .ps-scrollbar-x-rail, .ps-container:hover > .ps-scrollbar-y-rail {\n  opacity: .6; }\n\n.ps-container:hover > .ps-scrollbar-x-rail:hover {\n  background-color: #eee;\n  opacity: .9; }\n\n.ps-container:hover > .ps-scrollbar-x-rail:hover > .ps-scrollbar-x {\n  background-color: #999; }\n\n.ps-container:hover > .ps-scrollbar-y-rail:hover {\n  background-color: #eee;\n  opacity: .9; }\n\n.ps-container:hover > .ps-scrollbar-y-rail:hover > .ps-scrollbar-y {\n  background-color: #999; }\n\n.ps-container {\n  position: relative;\n  display: block; }\n  .ps-container .ps-content {\n    min-height: 100%; }\n  .ps-container[hidden] {\n    display: none; }\n  .ps-container[fxlayout] > .ps-content {\n    display: flex; }\n\n"]
    },
    540: function(t, e, n) {
        "use strict";
        function r(t, e) {
            return function(n) {
                var r = n.value
                  , o = n.root.get(t)
                  , i = {
                    passwordConfirm: {
                        valid: !1
                    }
                };
                return o && r !== o.value && !e ? i : (o && r === o.value && e && (delete o.errors.passwordConfirm,
                Object.keys(o.errors).length || o.setErrors(null)),
                o && r !== o.value && e && o.setErrors(i),
                null)
            }
        }
        var o = n(2)
          , i = n(5);
        n.d(e, "a", function() {
            return l
        });
        var a = this && this.__decorate || function(t, e, n, r) {
            var o, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
            return i > 3 && a && Object.defineProperty(e, n, a),
            a
        }
          , s = this && this.__metadata || function(t, e) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(t, e)
        }
          , c = this && this.__param || function(t, e) {
            return function(n, r) {
                e(n, r, t)
            }
        }
          , l = function() {
            function t(t, e) {
                this.reverse = e,
                this.validator = r(t, e)
            }
            e = t,
            t.prototype.validate = function(t) {
                return this.validator(t)
            }
            ;
            var e;
            return t = e = a([n.i(o.Directive)({
                selector: "[confirmPassword][ngModel]",
                providers: [{
                    provide: i.NG_VALIDATORS,
                    useExisting: e,
                    multi: !0
                }]
            }), c(0, n.i(o.Attribute)("confirmPassword")), c(1, n.i(o.Attribute)("reverse")), s("design:paramtypes", [String, String])], t)
        }()
    },
    541: function(t, e, n) {
        "use strict";
        function r() {
            return function(t) {
                return t.value && t.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? null : {
                    validateEmail: {
                        valid: !1
                    }
                }
            }
        }
        var o = n(2)
          , i = n(5);
        n.d(e, "a", function() {
            return s
        });
        var a = this && this.__decorate || function(t, e, n, r) {
            var o, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
            return i > 3 && a && Object.defineProperty(e, n, a),
            a
        }
          , s = function() {
            function t() {
                this.validator = r()
            }
            e = t,
            t.prototype.validate = function(t) {
                return this.validator(t)
            }
            ;
            var e;
            return t = e = a([n.i(o.Directive)({
                selector: "[validateEmail][ngModel]",
                providers: [{
                    provide: i.NG_VALIDATORS,
                    useExisting: e,
                    multi: !0
                }]
            })], t)
        }()
    },
    542: function(t, e, n) {
        "use strict";
        function r(t) {
            return function(e) {
                return !isNaN(e.value) && parseFloat(e.value) >= parseFloat(t) ? null : e.value ? {
                    validateMin: {
                        valid: !1
                    }
                } : null
            }
        }
        function o(t) {
            return function(e) {
                return !isNaN(e.value) && parseFloat(e.value) <= parseFloat(t) ? null : e.value ? {
                    validateMax: {
                        valid: !1
                    }
                } : null
            }
        }
        var i = n(2)
          , a = n(5);
        n.d(e, "a", function() {
            return u
        }),
        n.d(e, "b", function() {
            return p
        });
        var s = this && this.__decorate || function(t, e, n, r) {
            var o, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
            return i > 3 && a && Object.defineProperty(e, n, a),
            a
        }
          , c = this && this.__metadata || function(t, e) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(t, e)
        }
          , l = this && this.__param || function(t, e) {
            return function(n, r) {
                e(n, r, t)
            }
        }
          , u = function() {
            function t(t) {
                this.validator = r(t)
            }
            e = t,
            t.prototype.validate = function(t) {
                return this.validator(t)
            }
            ,
            t.prototype.ngOnChanges = function() {
                this.val && (this.validator = r(this.val))
            }
            ;
            var e;
            return s([n.i(i.Input)("validateMin"), c("design:type", String)], t.prototype, "val", void 0),
            t = e = s([n.i(i.Directive)({
                selector: "[validateMin]",
                providers: [{
                    provide: a.NG_VALIDATORS,
                    useExisting: e,
                    multi: !0
                }]
            }), l(0, n.i(i.Attribute)("validateMin")), c("design:paramtypes", [String])], t)
        }()
          , p = function() {
            function t(t) {
                this.validator = o(t)
            }
            e = t,
            t.prototype.validate = function(t) {
                return this.validator(t)
            }
            ,
            t.prototype.ngOnChanges = function() {
                this.val && (this.validator = o(this.val))
            }
            ;
            var e;
            return s([n.i(i.Input)("validateMax"), c("design:type", String)], t.prototype, "val", void 0),
            t = e = s([n.i(i.Directive)({
                selector: "[validateMax][ngModel]",
                providers: [{
                    provide: a.NG_VALIDATORS,
                    useExisting: e,
                    multi: !0
                }]
            }), l(0, n.i(i.Attribute)("validateMax")), c("design:paramtypes", [String])], t)
        }()
    },
    544: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return r
        });
        var r = {
            MT4AccountLogin: {
                status: 0,
                code: 0
            },
            registration: {
                status: 1,
                code: 0
            },
            loginDetailsMT4Login: {
                status: 0,
                code: 40009
            },
            login: {
                status: 1,
                code: 0,
                token: "d56b699830e77ba53855679cb1d252da"
            },
            loginDetails: {
                status: 1,
                code: 0,
                token: "d56b699830e77ba53855679cb1d252da",
                customer: {
                    customerID: 12345,
                    email: "aaa@bbb.com",
                    firstName: "Yuri",
                    lastName: "Rynkov",
                    country: "GB",
                    address: "",
                    city: "",
                    postalCode: "",
                    phone: "",
                    dob: "",
                    nationalId: "",
                    nationality: "",
                    birthCountry: "",
                    registrationState: 2,
                    salesStatus: "",
                    complianceStatus: "",
                    language: "",
                    isSuspended: "",
                    isBlocked: "",
                    mt4Accounts: [{
                        login: 11122233,
                        currency: "USD",
                        leverage: 0,
                        active: 1,
                        balance: 0,
                        equity: 0,
                        freeMargin: 0,
                        marginLevel: 0,
                        source: 2,
                        credit: 0,
                        live: 0
                    }, {
                        login: 11122244,
                        currency: "GBP",
                        leverage: 0,
                        active: 0,
                        balance: 0,
                        equity: 0,
                        freeMargin: 0,
                        marginLevel: 0,
                        source: 1,
                        credit: 9999,
                        live: 1
                    }]
                }
            },
            loginToken: {
                status: 1,
                code: 0
            },
            creditCardDeposit: {
                status: 1,
                code: 0,
                amount: 210,
                currency: "USD",
                transactionId: "dasdas4234532"
            },
            updateCustomerDetails: {
                status: 0,
                code: 4004
            },
            loginTokenDetails: {
                status: 1,
                code: 0,
                token: "d56b699830e77ba53855679cb1d252da",
                customer: {
                    customerID: 12345,
                    email: "aaa@bbb.com",
                    firstName: "Yuri",
                    lastName: "Rynkov",
                    country: "GB",
                    address: "",
                    city: "",
                    postalCode: "",
                    phone: "",
                    dob: "",
                    nationalId: "",
                    nationality: "",
                    birthCountry: "",
                    registrationState: 1,
                    salesStatus: "",
                    complianceStatus: "",
                    language: "",
                    isSuspended: "",
                    isBlocked: "",
                    mt4Accounts: [{
                        login: 11122233,
                        currency: "USD",
                        leverage: 0,
                        active: 1,
                        balance: 0,
                        equity: 0,
                        freeMargin: 0,
                        marginLevel: 0,
                        source: 2,
                        credit: 0,
                        live: 0
                    }, {
                        login: 11122244,
                        currency: "GBP",
                        leverage: 0,
                        active: 0,
                        balance: 0,
                        equity: 0,
                        freeMargin: 0,
                        marginLevel: 0,
                        source: 1,
                        credit: 9999,
                        live: 1
                    }]
                }
            },
            getCountries: {
                status: 1,
                code: 0,
                countries: [{
                    country: "Afghanistan",
                    nationality: "Afghan",
                    code: "AF"
                }, {
                    country: "land Islands",
                    nationality: "of the land Islands",
                    code: "AX"
                }, {
                    country: "Albania",
                    nationality: "Albanian",
                    code: "AL"
                }, {
                    country: "Algeria",
                    nationality: "Algerian",
                    code: "DZ"
                }, {
                    country: "American Samoa",
                    nationality: "American",
                    code: "AS"
                }, {
                    country: "Andorra",
                    nationality: "Andorran",
                    code: "AD"
                }, {
                    country: "Angola",
                    nationality: "Angolan",
                    code: "AO"
                }, {
                    country: "Anguilla",
                    nationality: "Anguillan",
                    code: "AI"
                }, {
                    country: "Antarctica",
                    nationality: "Antarctic",
                    code: "AQ"
                }, {
                    country: "Antigua andBarbuda",
                    nationality: "ofAntigua andBarbuda",
                    code: "AG"
                }, {
                    country: "Argentina",
                    nationality: "Argentine",
                    code: "AR"
                }, {
                    country: "Armenia",
                    nationality: "Armenian",
                    code: "AM"
                }, {
                    country: "Aruba",
                    nationality: "Aruban",
                    code: "AW"
                }, {
                    country: "Australia",
                    nationality: "Australian",
                    code: "AU"
                }, {
                    country: "Austria",
                    nationality: "Austrian",
                    code: "AT"
                }, {
                    country: "Azerbaijan",
                    nationality: "Azerbaijani",
                    code: "AZ"
                }, {
                    country: "Bahamas",
                    nationality: "Bahamian",
                    code: "BS"
                }, {
                    country: "Bahrain",
                    nationality: "Bahraini",
                    code: "BH"
                }, {
                    country: "Bangladesh",
                    nationality: "Bangladeshi",
                    code: "BD"
                }, {
                    country: "Barbados",
                    nationality: "Barbadian",
                    code: "BB"
                }, {
                    country: "Belarus",
                    nationality: "Belarusian",
                    code: "BY"
                }, {
                    country: "Belgium",
                    nationality: "Belgian",
                    code: "BE"
                }, {
                    country: "Belize",
                    nationality: "Belizean",
                    code: "BZ"
                }, {
                    country: "Benin",
                    nationality: "Beninese",
                    code: "BJ"
                }, {
                    country: "Bermuda",
                    nationality: "Bermudian",
                    code: "BM"
                }, {
                    country: "Bhutan",
                    nationality: "Bhutanese",
                    code: "BT"
                }, {
                    country: "Bolivia",
                    nationality: "Bolivian",
                    code: "BO"
                }, {
                    country: "Bosnia and Herzegovina",
                    nationality: "of Bosnia and Herzegovina",
                    code: "BA"
                }, {
                    country: "Botswana",
                    nationality: "Botswanan",
                    code: "BW"
                }, {
                    country: "Bouvet Island",
                    nationality: "of Bouvet Island",
                    code: "BV"
                }, {
                    country: "Brazil",
                    nationality: "Brazilian",
                    code: "BR"
                }, {
                    country: "Brunei",
                    nationality: "Bruneian",
                    code: "BN"
                }, {
                    country: "Bulgaria",
                    nationality: "Bulgarian",
                    code: "BG"
                }, {
                    country: "Burkina Faso",
                    nationality: "Burkinabe",
                    code: "BF"
                }, {
                    country: "Burundi",
                    nationality: "Burundian",
                    code: "BI"
                }, {
                    country: "Cambodia",
                    nationality: "Cambodian",
                    code: "KH"
                }, {
                    country: "Cameroon",
                    nationality: "Cameroonian",
                    code: "CM"
                }, {
                    country: "Canada",
                    nationality: "Canadian",
                    code: "CA"
                }, {
                    country: "Cape Verde",
                    nationality: "Cape Verdean",
                    code: "CV"
                }, {
                    country: "Cayman Islands",
                    nationality: "Caymanian",
                    code: "KY"
                }, {
                    country: "Central African Republic",
                    nationality: "Central African",
                    code: "CF"
                }, {
                    country: "Chad",
                    code: "CN",
                    nationality: "Chadian"
                }, {
                    country: "Chile",
                    nationality: "Chilean",
                    code: "TD"
                }, {
                    country: "China",
                    nationality: "Chinese",
                    code: "CN"
                }, {
                    country: "Christmas Island",
                    nationality: "of Christmas Island",
                    code: "CX"
                }, {
                    country: "Cocos ",
                    nationality: "of the Cocos (Keeling) Islands",
                    code: "CC"
                }, {
                    country: "Colombia",
                    nationality: "Colombian",
                    code: "CO"
                }, {
                    country: "Comoros",
                    nationality: "Comorian",
                    code: "KM"
                }, {
                    country: "Congo",
                    nationality: "Congolese",
                    code: "CG"
                }, {
                    country: "Cook Islands",
                    nationality: "of the Cook Islands",
                    code: "CK"
                }, {
                    country: "Costa Rica",
                    nationality: "Costa Rican",
                    code: "CR"
                }, {
                    country: "Cte dIvoire",
                    nationality: "Ivorian",
                    code: "CI"
                }, {
                    country: "Croatia",
                    nationality: "Croatian",
                    code: "HR"
                }, {
                    country: "Cuba",
                    nationality: "Cuban",
                    code: "CU"
                }, {
                    country: "Cyprus",
                    nationality: "Cypriot",
                    code: "CY"
                }, {
                    country: "Czech Republic",
                    nationality: "Czech",
                    code: "CZ"
                }, {
                    country: "Denmark",
                    nationality: "Danish",
                    code: "DK"
                }, {
                    country: "Djibouti",
                    nationality: "of Djibouti",
                    code: "DJ"
                }, {
                    country: "Dominica",
                    nationality: "of Dominica",
                    code: "DM"
                }, {
                    country: "Dominican Republic",
                    nationality: "Dominican",
                    code: "DO"
                }, {
                    country: "Ecuador",
                    nationality: "Ecuadorian",
                    code: "EC"
                }, {
                    country: "Egypt",
                    nationality: "Egyptian",
                    code: "EG"
                }, {
                    country: "El Salvador",
                    nationality: "Salvadorian; Salvadoran",
                    code: "SV"
                }, {
                    country: "Equatorial Guinea",
                    nationality: "of Equatorial Guinea",
                    code: "GQ"
                }, {
                    country: "Eritrea",
                    nationality: "Eritrean",
                    code: "ER"
                }, {
                    country: "Estonia",
                    nationality: "Estonian",
                    code: "EE"
                }, {
                    country: "Ethiopia",
                    nationality: "Ethiopian",
                    code: "ET"
                }, {
                    country: "Faeroe Islands",
                    nationality: "Faeroese",
                    code: "FO"
                }, {
                    country: "Falkland Islands",
                    nationality: "of the Falkland Islands",
                    code: "FK"
                }, {
                    country: "Fiji",
                    nationality: "Fijian",
                    code: "FJ"
                }, {
                    country: "Finland",
                    nationality: "Finnish",
                    code: "FI"
                }, {
                    country: "France",
                    nationality: "French",
                    code: "FR"
                }, {
                    country: "French Guiana",
                    nationality: "Guianese",
                    code: "GF"
                }, {
                    country: "French Polynesia",
                    nationality: "Polynesian",
                    code: "PF"
                }, {
                    country: "Gabon",
                    nationality: "Gabonese",
                    code: "GA"
                }, {
                    country: "Gambia, ",
                    nationality: "Gambian",
                    code: "GM"
                }, {
                    country: "Georgia",
                    nationality: "Georgian",
                    code: "GE"
                }, {
                    country: "Germany",
                    nationality: "German",
                    code: "DE"
                }, {
                    country: "Ghana",
                    nationality: "Ghanaian",
                    code: "GH"
                }, {
                    country: "Gibraltar",
                    nationality: "Gibraltarian",
                    code: "GI"
                }, {
                    country: "Greece",
                    nationality: "Greek",
                    code: "GR"
                }, {
                    country: "Greenland",
                    nationality: "Greenlandic",
                    code: "GL"
                }, {
                    country: "Grenada",
                    nationality: "Grenadian",
                    code: "GD"
                }, {
                    country: "Guadeloupe",
                    nationality: "Guadeloupean",
                    code: "GP"
                }, {
                    country: "Guam",
                    nationality: "Guamanian",
                    code: "GU"
                }, {
                    country: "Guatemala",
                    nationality: "Guatemalan",
                    code: "GT"
                }, {
                    country: "Guernsey",
                    nationality: "Guernsey",
                    code: "GG"
                }, {
                    country: "Guinea",
                    nationality: "Guinean",
                    code: "GN"
                }, {
                    country: "Guinea-Bissau",
                    nationality: "of Guinea-Bissau",
                    code: "GW"
                }, {
                    country: "Guyana",
                    nationality: "Guyanese",
                    code: "GY"
                }, {
                    country: "Haiti",
                    nationality: "Haitian",
                    code: "HT"
                }, {
                    country: "Honduras",
                    nationality: "Honduran",
                    code: "HN"
                }, {
                    country: "Hong Kong",
                    nationality: "Hong Kong Chinese",
                    code: "HK"
                }, {
                    country: "Hungary",
                    nationality: "Hungarian",
                    code: "HU"
                }, {
                    country: "Iceland",
                    nationality: "Icelandic",
                    code: "IS"
                }, {
                    country: "India",
                    nationality: "Indian",
                    code: "IN"
                }, {
                    country: "Indonesia",
                    nationality: "Indonesian",
                    code: "ID"
                }, {
                    country: "Iran",
                    nationality: "Iranian",
                    code: "IR"
                }, {
                    country: "Iraq",
                    nationality: "Iraqi",
                    code: "IQ"
                }, {
                    country: "Ireland",
                    nationality: "Irish",
                    code: "IE"
                }, {
                    country: "Isle of Man",
                    nationality: "Manx",
                    code: "IM"
                }, {
                    country: "Israel",
                    nationality: "Israeli",
                    code: "IL"
                }, {
                    country: "Italy",
                    nationality: "Italian",
                    code: "IT"
                }, {
                    country: "Jamaica",
                    nationality: "Jamaican",
                    code: "JM"
                }, {
                    country: "Japan",
                    nationality: "Japanese",
                    code: "JP"
                }, {
                    country: "Jersey",
                    nationality: "Jersey",
                    code: "JE"
                }, {
                    country: "Jordan",
                    nationality: "Jordanian",
                    code: "JO"
                }, {
                    country: "Kazakhstan",
                    nationality: "Kazakh",
                    code: "KZ"
                }, {
                    country: "Kenya",
                    nationality: "Kenyan",
                    code: "KE"
                }, {
                    country: "Kiribati",
                    nationality: "Kiribatian",
                    code: "KI"
                }, {
                    country: "Kuwait",
                    nationality: "Kuwaiti",
                    code: "KW"
                }, {
                    country: "Kyrgyzstan",
                    nationality: "Kyrgyz",
                    code: "KG"
                }, {
                    country: "Laos",
                    nationality: "Lao; Laotian",
                    code: "LA"
                }, {
                    country: "Latvia",
                    nationality: "Latvian",
                    code: "LV"
                }, {
                    country: "Lebanon",
                    nationality: "Lebanese",
                    code: "LB"
                }, {
                    country: "Lesotho",
                    nationality: "of Lesotho",
                    code: "LS"
                }, {
                    country: "Liberia",
                    nationality: "Liberian",
                    code: "LR"
                }, {
                    country: "Libya",
                    nationality: "Libyan",
                    code: "LY"
                }, {
                    country: "Liechtenstein",
                    nationality: "of Liechtenstein",
                    code: "LI"
                }, {
                    country: "Lithuania",
                    nationality: "Lithuanian",
                    code: "LT"
                }, {
                    country: "Luxembourg",
                    nationality: "Luxembourgish",
                    code: "LU"
                }, {
                    country: "Madagascar",
                    nationality: "Malagasy",
                    code: "MG"
                }, {
                    country: "Malawi",
                    nationality: "Malawian",
                    code: "MW"
                }, {
                    country: "Malaysia",
                    nationality: "Malaysian",
                    code: "MY"
                }, {
                    country: "Maldives",
                    nationality: "Maldivian",
                    code: "MV"
                }, {
                    country: "Mali",
                    nationality: "Malian",
                    code: "ML"
                }, {
                    country: "Malta",
                    nationality: "Maltese",
                    code: "MT"
                }, {
                    country: "Marshall Islands",
                    nationality: "Marshallese",
                    code: "MH"
                }, {
                    country: "Martinique",
                    nationality: "Martinican",
                    code: "MQ"
                }, {
                    country: "Mauritania",
                    nationality: "Mauritanian",
                    code: "MR"
                }, {
                    country: "Mauritius",
                    nationality: "Mauritian",
                    code: "MU"
                }, {
                    country: "Mayotte",
                    nationality: "Mahoran",
                    code: "YT"
                }, {
                    country: "Mexico",
                    nationality: "Mexican",
                    code: "MX"
                }, {
                    country: "Micronesia",
                    nationality: "of Micronesia",
                    code: "FM"
                }, {
                    country: "Moldova",
                    nationality: "Moldovan",
                    code: "MD"
                }, {
                    country: "Monaco",
                    nationality: "Monegasque",
                    code: "MC"
                }, {
                    country: "Mongolia",
                    nationality: "Mongolian",
                    code: "MN"
                }, {
                    country: "Montenegro",
                    nationality: "Montenegrin",
                    code: "ME"
                }, {
                    country: "Montserrat",
                    nationality: "Montserratian",
                    code: "MS"
                }, {
                    country: "Morocco",
                    nationality: "Moroccan",
                    code: "MA"
                }, {
                    country: "Mozambique",
                    nationality: "Mozambican",
                    code: "MZ"
                }, {
                    country: "Namibia",
                    nationality: "Namibian",
                    code: "NA"
                }, {
                    country: "Nauru",
                    nationality: "Nauruan",
                    code: "NR"
                }, {
                    country: "Nepal",
                    nationality: "Nepalese",
                    code: "NP"
                }, {
                    country: "Netherlands",
                    nationality: "Dutch",
                    code: "NL"
                }, {
                    country: "New Caledonia",
                    nationality: "New Caledonian",
                    code: "NC"
                }, {
                    country: "New Zealand",
                    nationality: "of New Zealand",
                    code: "NZ"
                }, {
                    country: "Nicaragua",
                    nationality: "Nicaraguan",
                    code: "NI"
                }, {
                    country: "Niger",
                    nationality: "Nigerien",
                    code: "NE"
                }, {
                    country: "Nigeria",
                    nationality: "Nigerian",
                    code: "NG"
                }, {
                    country: "Niue",
                    nationality: "Niuean",
                    code: "NU"
                }, {
                    country: "Norfolk Island",
                    nationality: "of Norfolk Island",
                    code: "NF"
                }, {
                    country: "Norway",
                    nationality: "Norwegian",
                    code: "NO"
                }, {
                    country: "Oman",
                    nationality: "Omani",
                    code: "OM"
                }, {
                    country: "Pakistan",
                    nationality: "Pakistani",
                    code: "PK"
                }, {
                    country: "Palau",
                    nationality: "Palauan",
                    code: "PW"
                }, {
                    country: "Panama",
                    nationality: "Panamanian",
                    code: "PA"
                }, {
                    country: "Paraguay",
                    nationality: "Paraguayan",
                    code: "PY"
                }, {
                    country: "Peru",
                    nationality: "Peruvian",
                    code: "PE"
                }, {
                    country: "Philippines",
                    nationality: "Philippine",
                    code: "PH"
                }, {
                    country: "Pitcairn Islands",
                    nationality: "Pitcairner",
                    code: "PN"
                }, {
                    country: "Poland",
                    nationality: "Polish",
                    code: "PL"
                }, {
                    country: "Portugal",
                    nationality: "Portuguese",
                    code: "PT"
                }, {
                    country: "Puerto Rico",
                    nationality: "Puerto Rican",
                    code: "PR"
                }, {
                    country: "Qatar",
                    nationality: "Qatari",
                    code: "QA"
                }, {
                    country: "Runion",
                    nationality: "Reunionese",
                    code: "RE"
                }, {
                    country: "Romania",
                    nationality: "Romanian",
                    code: "RO"
                }, {
                    country: "Russia",
                    nationality: "Russian",
                    code: "RU"
                }, {
                    country: "Rwanda",
                    nationality: "Rwandan; Rwandese",
                    code: "RW"
                }, {
                    country: "Saint Barthlemy",
                    nationality: "of Saint Barthlemy",
                    code: "BL"
                }, {
                    country: "Saint Lucia",
                    nationality: "Saint Lucian",
                    code: "LC"
                }, {
                    country: "Saint Martin",
                    nationality: "of Saint Martin",
                    code: "MF"
                }, {
                    country: "Samoa",
                    nationality: "Samoan",
                    code: "WS"
                }, {
                    country: "San Marino",
                    nationality: "of San Marino",
                    code: "SM"
                }, {
                    country: "Saudi Arabia",
                    nationality: "Saudi Arabian",
                    code: "SA"
                }, {
                    country: "Senegal",
                    nationality: "Senegalese",
                    code: "SN"
                }, {
                    country: "Serbia",
                    nationality: "Serbian",
                    code: "RS"
                }, {
                    country: "Seychelles",
                    nationality: "of Seychelles",
                    code: "SC"
                }, {
                    country: "Sierra Leone",
                    nationality: "Sierra Leonean",
                    code: "SL"
                }, {
                    country: "Singapore",
                    nationality: "Singaporean",
                    code: "SG"
                }, {
                    country: "Slovakia",
                    nationality: "Slovak; Slovakian",
                    code: "SK"
                }, {
                    country: "Slovenia",
                    nationality: "Slovenian",
                    code: "SL"
                }, {
                    country: "Solomon Islands",
                    nationality: "of the Solomon Islands",
                    code: "SB"
                }, {
                    country: "Somalia",
                    nationality: "Somali; Somalian",
                    code: "SO"
                }, {
                    country: "South Africa",
                    nationality: "South African",
                    code: "ZA"
                }, {
                    country: "South Korea",
                    nationality: "South Korean",
                    code: "SK"
                }, {
                    country: "South Sudan",
                    nationality: "South Sudanese",
                    code: "SS"
                }, {
                    country: "Spain",
                    nationality: "Spanish",
                    code: "ES"
                }, {
                    country: "Sri Lanka",
                    nationality: "Sri Lankan",
                    code: "LK"
                }, {
                    country: "Sudan",
                    nationality: "Sudanese",
                    code: "SD"
                }, {
                    country: "Suriname",
                    nationality: "Surinamese",
                    code: "SR"
                }, {
                    country: "Swaziland",
                    nationality: "Swazi",
                    code: "CH"
                }, {
                    country: "Sweden",
                    nationality: "Swedish",
                    code: "SE"
                }, {
                    country: "Switzerland",
                    nationality: "Swiss",
                    code: "CH"
                }, {
                    country: "Syria",
                    nationality: "Syrian",
                    code: "SY"
                }, {
                    country: "Taiwan",
                    nationality: "Taiwanese",
                    code: "TW"
                }, {
                    country: "Tajikistan",
                    nationality: "Tajik",
                    code: "TJ"
                }, {
                    country: "Tanzania",
                    nationality: "Tanzanian",
                    code: "TZ"
                }, {
                    country: "Thailand",
                    nationality: "Thai",
                    code: "BI"
                }, {
                    country: "Timor-Leste",
                    nationality: "East Timorese",
                    code: "TL"
                }, {
                    country: "Togo",
                    nationality: "Togolese",
                    code: "TG"
                }, {
                    country: "Tokelau",
                    nationality: "Tokelauan",
                    code: "TK"
                }, {
                    country: "Tonga",
                    nationality: "Tongan",
                    code: "TO"
                }, {
                    country: "Trinidad and Tobago",
                    nationality: "of Trinidad andTobago",
                    code: "TT"
                }, {
                    country: "Tunisia",
                    nationality: "Tunisian",
                    code: "TN"
                }, {
                    country: "Turkey",
                    nationality: "Turkish",
                    code: "TR"
                }, {
                    country: "Turkmenistan",
                    nationality: "Turkmen",
                    code: "TM"
                }, {
                    country: "Tuvalu",
                    nationality: "Tuvaluan",
                    code: "TV"
                }, {
                    country: "Uganda",
                    nationality: "Ugandan",
                    code: "UG"
                }, {
                    country: "Ukraine",
                    nationality: "Ukrainian",
                    code: "UA"
                }, {
                    country: "United Arab Emirates",
                    nationality: "Emirian",
                    code: "AE"
                }, {
                    country: "United Kingdom",
                    nationality: "British",
                    code: "GB"
                }, {
                    country: "United States",
                    nationality: "American",
                    code: "US"
                }, {
                    country: "Uruguay",
                    nationality: "Uruguayan",
                    code: "UY"
                }, {
                    country: "Uzbekistan",
                    nationality: "Uzbek",
                    code: "UZ"
                }, {
                    country: "Vanuatu",
                    nationality: "Vanuatuan",
                    code: "VU"
                }, {
                    country: "Venezuela",
                    nationality: "Venezuelan",
                    code: "VE"
                }, {
                    country: "Vietnam",
                    nationality: "Vietnamese",
                    code: "VN"
                }, {
                    country: "Western Sahara",
                    nationality: "Sahrawi",
                    code: "EH"
                }, {
                    country: "Yemen",
                    nationality: "Yemeni",
                    code: "YE"
                }, {
                    country: "Zambia",
                    nationality: "Zambian",
                    code: "ZM"
                }, {
                    country: "Zimbabwe",
                    nationality: "Zimbabwean",
                    code: "ZW"
                }]
            },
            getCurrencies: {
                status: 1,
                code: 0,
                currencies: [{
                    id: 1,
                    currency: "USD",
                    symbol: "$"
                }, {
                    id: 2,
                    currency: "EUR",
                    symbol: "€"
                }, {
                    id: 1,
                    currency: "GBP",
                    symbol: "£"
                }, {
                    id: 2,
                    currency: "AUD",
                    symbol: "A$"
                }]
            },
            questionnaire: {
                status: 0,
                code: 123
            },
            MT4OpenPosition: {
                Code: "-1",
                Description: "138",
                Trade: {
                    orderId: 12345678
                }
            },
            MT4ClosePosition: {
                Code: "-1",
                Description: "138",
                Trade: {
                    orderId: 123456789
                }
            },
            MT4GetOpenPositions: {
                status: 1,
                code: 0,
                trades: [{
                    id: 57,
                    OrderID: 2196,
                    Cmd: 3,
                    Comment: "",
                    OpenTime: 1484051735,
                    CloseTime: 0,
                    OpenPrice: .93605,
                    ClosePrice: .74164,
                    Digits: 5,
                    Profit: 0,
                    Commission: 0,
                    Expiration: 0,
                    sl: 0,
                    tp: 0,
                    Taxes: 0,
                    Storage: 0,
                    Volume: .02,
                    Login: 101593,
                    OutputName: "AUDUSD",
                    ContractSize: 1e5
                }, {
                    id: 57,
                    OrderID: 129569,
                    Cmd: 0,
                    Comment: "",
                    OpenTime: 1493811016,
                    CloseTime: 0,
                    OpenPrice: .74907,
                    ClosePrice: .74164,
                    Digits: 5,
                    Profit: -743,
                    Commission: 0,
                    Expiration: 0,
                    sl: 0,
                    tp: 0,
                    Taxes: 0,
                    Storage: -5.16,
                    Volume: 1,
                    Login: 101593,
                    OutputName: "AUDUSD",
                    ContractSize: 1e5
                }, {
                    id: 57,
                    OrderID: 129571,
                    Cmd: 1,
                    Comment: "",
                    OpenTime: 1493811029,
                    CloseTime: 0,
                    OpenPrice: .74866,
                    ClosePrice: .74204,
                    Digits: 5,
                    Profit: 662,
                    Commission: 0,
                    Expiration: 0,
                    sl: .74443,
                    tp: 0,
                    Taxes: 0,
                    Storage: -15.47,
                    Volume: 1,
                    Login: 101593,
                    OutputName: "AUDUSD",
                    ContractSize: 1e5
                }, {
                    id: 57,
                    OrderID: 129572,
                    Cmd: 1,
                    Comment: "",
                    OpenTime: 1493811046,
                    CloseTime: 0,
                    OpenPrice: .74865,
                    ClosePrice: .74204,
                    Digits: 5,
                    Profit: 661,
                    Commission: 0,
                    Expiration: 0,
                    sl: 0,
                    tp: 0,
                    Taxes: 0,
                    Storage: -15.47,
                    Volume: 1,
                    Login: 101593,
                    OutputName: "AUDUSD",
                    ContractSize: 1e5
                }, {
                    id: 122,
                    OrderID: 119371,
                    Cmd: 1,
                    Comment: "",
                    OpenTime: 1493056383,
                    CloseTime: 0,
                    OpenPrice: 31.93,
                    ClosePrice: 33.72,
                    Digits: 2,
                    Profit: -1.79,
                    Commission: 0,
                    Expiration: 0,
                    sl: 0,
                    tp: 0,
                    Taxes: 0,
                    Storage: -.42,
                    Volume: .01,
                    Login: 101593,
                    OutputName: "EBAY",
                    ContractSize: 100
                }, {
                    id: 122,
                    OrderID: 119372,
                    Cmd: 0,
                    Comment: "",
                    OpenTime: 1493056387,
                    CloseTime: 0,
                    OpenPrice: 32.38,
                    ClosePrice: 33.25,
                    Digits: 2,
                    Profit: .87,
                    Commission: 0,
                    Expiration: 0,
                    sl: 0,
                    tp: 0,
                    Taxes: 0,
                    Storage: -.42,
                    Volume: .01,
                    Login: 101593,
                    OutputName: "EBAY",
                    ContractSize: 100
                }, {
                    id: 52,
                    OrderID: 119324,
                    Cmd: 1,
                    Comment: "",
                    OpenTime: 1493055198,
                    CloseTime: 0,
                    OpenPrice: 1.08588,
                    ClosePrice: 1.10008,
                    Digits: 5,
                    Profit: -14.2,
                    Commission: 0,
                    Expiration: 0,
                    sl: 0,
                    tp: 0,
                    Taxes: 0,
                    Storage: 0,
                    Volume: .01,
                    Login: 101593,
                    OutputName: "EURUSD",
                    ContractSize: 1e5
                }, {
                    id: 52,
                    OrderID: 122146,
                    Cmd: 1,
                    Comment: "",
                    OpenTime: 1493208520,
                    CloseTime: 0,
                    OpenPrice: 1.08988,
                    ClosePrice: 1.10008,
                    Digits: 5,
                    Profit: -1020,
                    Commission: 0,
                    Expiration: 0,
                    sl: 0,
                    tp: 0,
                    Taxes: 0,
                    Storage: 0,
                    Volume: 1,
                    Login: 101593,
                    OutputName: "EURUSD",
                    ContractSize: 1e5
                }, {
                    id: 52,
                    OrderID: 127249,
                    Cmd: 1,
                    Comment: "",
                    OpenTime: 1493637475,
                    CloseTime: 0,
                    OpenPrice: 1.08924,
                    ClosePrice: 1.10008,
                    Digits: 5,
                    Profit: -1084,
                    Commission: 0,
                    Expiration: 0,
                    sl: 0,
                    tp: 0,
                    Taxes: 0,
                    Storage: 0,
                    Volume: 1,
                    Login: 101593,
                    OutputName: "EURUSD",
                    ContractSize: 1e5
                }, {
                    id: 52,
                    OrderID: 127250,
                    Cmd: 0,
                    Comment: "",
                    OpenTime: 1493637484,
                    CloseTime: 0,
                    OpenPrice: 1.08955,
                    ClosePrice: 1.09978,
                    Digits: 5,
                    Profit: 1023,
                    Commission: 0,
                    Expiration: 0,
                    sl: 0,
                    tp: 0,
                    Taxes: 0,
                    Storage: -42.53,
                    Volume: 1,
                    Login: 101593,
                    OutputName: "EURUSD",
                    ContractSize: 1e5
                }, {
                    id: 52,
                    OrderID: 132264,
                    Cmd: 1,
                    Comment: "",
                    OpenTime: 1493919577,
                    CloseTime: 0,
                    OpenPrice: 1.09442,
                    ClosePrice: 1.10008,
                    Digits: 5,
                    Profit: -566,
                    Commission: 0,
                    Expiration: 0,
                    sl: 0,
                    tp: 0,
                    Taxes: 0,
                    Storage: 0,
                    Volume: 1,
                    Login: 101593,
                    OutputName: "EURUSD",
                    ContractSize: 1e5
                }]
            },
            document: {
                status: 0,
                code: 4004
            }
        }
    },
    545: function(t, e) {
        function n(t) {
            t = t || {},
            this.ms = t.min || 100,
            this.max = t.max || 1e4,
            this.factor = t.factor || 2,
            this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0,
            this.attempts = 0
        }
        t.exports = n,
        n.prototype.duration = function() {
            var t = this.ms * Math.pow(this.factor, this.attempts++);
            if (this.jitter) {
                var e = Math.random()
                  , n = Math.floor(e * this.jitter * t);
                t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n
            }
            return 0 | Math.min(t, this.max)
        }
        ,
        n.prototype.reset = function() {
            this.attempts = 0
        }
        ,
        n.prototype.setMin = function(t) {
            this.ms = t
        }
        ,
        n.prototype.setMax = function(t) {
            this.max = t
        }
        ,
        n.prototype.setJitter = function(t) {
            this.jitter = t
        }
    },
    546: function(t, e) {
        !function() {
            "use strict";
            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(256), r = 0; r < t.length; r++)
                n[t.charCodeAt(r)] = r;
            e.encode = function(e) {
                var n, r = new Uint8Array(e), o = r.length, i = "";
                for (n = 0; n < o; n += 3)
                    i += t[r[n] >> 2],
                    i += t[(3 & r[n]) << 4 | r[n + 1] >> 4],
                    i += t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6],
                    i += t[63 & r[n + 2]];
                return o % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="),
                i
            }
            ,
            e.decode = function(t) {
                var e, r, o, i, a, s = .75 * t.length, c = t.length, l = 0;
                "=" === t[t.length - 1] && (s--,
                "=" === t[t.length - 2] && s--);
                var u = new ArrayBuffer(s)
                  , p = new Uint8Array(u);
                for (e = 0; e < c; e += 4)
                    r = n[t.charCodeAt(e)],
                    o = n[t.charCodeAt(e + 1)],
                    i = n[t.charCodeAt(e + 2)],
                    a = n[t.charCodeAt(e + 3)],
                    p[l++] = r << 2 | o >> 4,
                    p[l++] = (15 & o) << 4 | i >> 2,
                    p[l++] = (3 & i) << 6 | 63 & a;
                return u
            }
        }()
    },
    547: function(t, e, n) {
        (function(e) {
            function n(t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (n.buffer instanceof ArrayBuffer) {
                        var r = n.buffer;
                        if (n.byteLength !== r.byteLength) {
                            var o = new Uint8Array(n.byteLength);
                            o.set(new Uint8Array(r,n.byteOffset,n.byteLength)),
                            r = o.buffer
                        }
                        t[e] = r
                    }
                }
            }
            function r(t, e) {
                e = e || {};
                var r = new i;
                n(t);
                for (var o = 0; o < t.length; o++)
                    r.append(t[o]);
                return e.type ? r.getBlob(e.type) : r.getBlob()
            }
            function o(t, e) {
                return n(t),
                new Blob(t,e || {})
            }
            var i = e.BlobBuilder || e.WebKitBlobBuilder || e.MSBlobBuilder || e.MozBlobBuilder
              , a = function() {
                try {
                    return 2 === new Blob(["hi"]).size
                } catch (t) {
                    return !1
                }
            }()
              , s = a && function() {
                try {
                    return 2 === new Blob([new Uint8Array([1, 2])]).size
                } catch (t) {
                    return !1
                }
            }()
              , c = i && i.prototype.append && i.prototype.getBlob;
            t.exports = function() {
                return a ? s ? e.Blob : o : c ? r : void 0
            }()
        }
        ).call(e, n(16))
    },
    56: function(t, e, n) {
        "use strict";
        var r = n(2)
          , o = n(5)
          , i = n(54)
          , a = (n.n(i),
        n(11))
          , s = n(8);
        n.d(e, "a", function() {
            return d
        });
        var c = this && this.__decorate || function(t, e, n, r) {
            var o, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
            return i > 3 && a && Object.defineProperty(e, n, a),
            a
        }
          , l = this && this.__metadata || function(t, e) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(t, e)
        }
          , u = function() {}
          , p = {
            provide: o.NG_VALUE_ACCESSOR,
            useExisting: n.i(r.forwardRef)(function() {
                return d
            }),
            multi: !0
        }
          , d = function() {
            function t(t, e) {
                var n = this;
                this.el = t,
                this.zone = e,
                this.items = [],
                this.config = {
                    label: "label",
                    id: "id",
                    defaultLabel: "Please select",
                    flagOnly: !1,
                    type: "dropdown"
                },
                this.settingsService = a.settingsService,
                this.stateService = s.stateService,
                this.itemHeight = 34,
                this.innerValue = "",
                this.isShow = !1,
                this.onTouchedCallback = u,
                this.onChangeCallback = u,
                this.translation = this.settingsService.get("translation"),
                this.langSubscribe = this.stateService.get("lang").subscribe(function() {
                    n.zone.run(function() {
                        n.translation = n.settingsService.get("translation")
                    })
                })
            }
            return t.prototype.ngOnInit = function() {}
            ,
            t.prototype.ngOnDestroy = function() {
                this.langSubscribe && this.langSubscribe.unsubscribe(),
                this.settingsService = null,
                this.items = []
            }
            ,
            Object.defineProperty(t.prototype, "value", {
                get: function() {
                    return this.innerValue
                },
                set: function(t) {
                    t !== this.innerValue && (this.innerValue = t,
                    this.onChangeCallback(t))
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.writeValue = function(t) {
                t !== this.innerValue && (this.innerValue = t)
            }
            ,
            t.prototype.registerOnChange = function(t) {
                this.onChangeCallback = t
            }
            ,
            t.prototype.registerOnTouched = function(t) {
                this.onTouchedCallback = t
            }
            ,
            t.prototype.scrollToActive = function() {
                var t = this;
                if (0 !== this.items.length) {
                    var e = this.ps.elementRef.nativeElement.getElementsByClassName("wrap-list-pandats")[0].getElementsByTagName("span")[0];
                    this.itemHeight = e.clientHeight;
                    var n = this.items.findIndex(function(e) {
                        return e === t.innerValue
                    });
                    this.ps.scrollTo(n * this.itemHeight),
                    this.ps.update()
                }
            }
            ,
            t.prototype.toggle = function() {
                var t = this;
                this.isShow = !this.isShow,
                setTimeout(function() {
                    return t.scrollToActive()
                }, 50)
            }
            ,
            t.prototype.translateItem = function(t) {
                var e = Object.assign({}, t)
                  , n = e[this.config.label]
                  , r = this.config.translationKey;
                return r && this.translation.hasOwnProperty(r) ? this.translation[r].hasOwnProperty(n) && (e[this.config.label] = this.translation[r][n]) : this.translation.hasOwnProperty(n) && (e[this.config.label] = this.translation[n]),
                e[this.config.label]
            }
            ,
            c([n.i(r.Input)(), l("design:type", Array)], t.prototype, "items", void 0),
            c([n.i(r.Input)(), l("design:type", Object)], t.prototype, "config", void 0),
            c([n.i(r.ViewChild)(i.PerfectScrollbarComponent), l("design:type", i.PerfectScrollbarComponent)], t.prototype, "ps", void 0),
            t = c([n.i(r.Component)({
                selector: "custom-select",
                template: n(638),
                providers: [p]
            }), l("design:paramtypes", [r.ElementRef, r.NgZone])], t)
        }()
    },
    57: function(t, e, n) {
        "use strict";
        var r = n(2);
        n.d(e, "a", function() {
            return a
        });
        var o = this && this.__decorate || function(t, e, n, r) {
            var o, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
            return i > 3 && a && Object.defineProperty(e, n, a),
            a
        }
          , i = this && this.__metadata || function(t, e) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(t, e)
        }
          , a = function() {
            function t() {
                this.isShow = !1,
                this.content = "Loading ...",
                this.isBackdrop = !0
            }
            return t.prototype.ngOnInit = function() {}
            ,
            o([n.i(r.Input)(), i("design:type", Boolean)], t.prototype, "isShow", void 0),
            o([n.i(r.Input)(), i("design:type", String)], t.prototype, "content", void 0),
            o([n.i(r.Input)(), i("design:type", Boolean)], t.prototype, "isBackdrop", void 0),
            t = o([n.i(r.Component)({
                selector: "spinner",
                template: '<div *ngIf="isShow" class="spinner-pandats">\n                    <div class="spinner-backdrop-pandats" *ngIf="isBackdrop"></div>\n                    <div class="spinner-content-pandats">\n                        <div id="floatingCirclesG-pandats">\n                            <div class="f_circleG-pandats" id="frotateG_01-pandats"></div>\n                            <div class="f_circleG-pandats" id="frotateG_02-pandats"></div>\n                            <div class="f_circleG-pandats" id="frotateG_03-pandats"></div>\n                            <div class="f_circleG-pandats" id="frotateG_04-pandats"></div>\n                            <div class="f_circleG-pandats" id="frotateG_05-pandats"></div>\n                            <div class="f_circleG-pandats" id="frotateG_06-pandats"></div>\n                            <div class="f_circleG-pandats" id="frotateG_07-pandats"></div>\n                            <div class="f_circleG-pandats" id="frotateG_08-pandats"></div>\n                        </div>\n                    </div>\n                </div>'
            }), i("design:paramtypes", [])], t)
        }()
    },
    599: function(t, e, n) {
        t.exports = n(600)
    },
    600: function(t, e, n) {
        t.exports = n(601),
        t.exports.parser = n(77)
    },
    601: function(t, e, n) {
        (function(e) {
            function r(t, n) {
                if (!(this instanceof r))
                    return new r(t,n);
                n = n || {},
                t && "object" == typeof t && (n = t,
                t = null),
                t ? (t = u(t),
                n.hostname = t.host,
                n.secure = "https" === t.protocol || "wss" === t.protocol,
                n.port = t.port,
                t.query && (n.query = t.query)) : n.host && (n.hostname = u(n.host).host),
                this.secure = null != n.secure ? n.secure : e.location && "https:" === location.protocol,
                n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
                this.agent = n.agent || !1,
                this.hostname = n.hostname || (e.location ? location.hostname : "localhost"),
                this.port = n.port || (e.location && location.port ? location.port : this.secure ? 443 : 80),
                this.query = n.query || {},
                "string" == typeof this.query && (this.query = d.decode(this.query)),
                this.upgrade = !1 !== n.upgrade,
                this.path = (n.path || "/engine.io").replace(/\/$/, "") + "/",
                this.forceJSONP = !!n.forceJSONP,
                this.jsonp = !1 !== n.jsonp,
                this.forceBase64 = !!n.forceBase64,
                this.enablesXDR = !!n.enablesXDR,
                this.timestampParam = n.timestampParam || "t",
                this.timestampRequests = n.timestampRequests,
                this.transports = n.transports || ["polling", "websocket"],
                this.readyState = "",
                this.writeBuffer = [],
                this.prevBufferLen = 0,
                this.policyPort = n.policyPort || 843,
                this.rememberUpgrade = n.rememberUpgrade || !1,
                this.binaryType = null,
                this.onlyBinaryUpgrades = n.onlyBinaryUpgrades,
                this.perMessageDeflate = !1 !== n.perMessageDeflate && (n.perMessageDeflate || {}),
                !0 === this.perMessageDeflate && (this.perMessageDeflate = {}),
                this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024),
                this.pfx = n.pfx || null,
                this.key = n.key || null,
                this.passphrase = n.passphrase || null,
                this.cert = n.cert || null,
                this.ca = n.ca || null,
                this.ciphers = n.ciphers || null,
                this.rejectUnauthorized = void 0 === n.rejectUnauthorized ? null : n.rejectUnauthorized,
                this.forceNode = !!n.forceNode;
                var o = "object" == typeof e && e;
                o.global === o && (n.extraHeaders && Object.keys(n.extraHeaders).length > 0 && (this.extraHeaders = n.extraHeaders),
                n.localAddress && (this.localAddress = n.localAddress)),
                this.id = null,
                this.upgrades = null,
                this.pingInterval = null,
                this.pingTimeout = null,
                this.pingIntervalTimer = null,
                this.pingTimeoutTimer = null,
                this.open()
            }
            function o(t) {
                var e = {};
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }
            var i = n(221)
              , a = n(80)
              , s = n(112)("engine.io-client:socket")
              , c = n(225)
              , l = n(77)
              , u = n(361)
              , p = n(643)
              , d = n(168);
            t.exports = r,
            r.priorWebsocketSuccess = !1,
            a(r.prototype),
            r.protocol = l.protocol,
            r.Socket = r,
            r.Transport = n(166),
            r.transports = n(221),
            r.parser = n(77),
            r.prototype.createTransport = function(t) {
                s('creating transport "%s"', t);
                var e = o(this.query);
                return e.EIO = l.protocol,
                e.transport = t,
                this.id && (e.sid = this.id),
                new i[t]({
                    agent: this.agent,
                    hostname: this.hostname,
                    port: this.port,
                    secure: this.secure,
                    path: this.path,
                    query: e,
                    forceJSONP: this.forceJSONP,
                    jsonp: this.jsonp,
                    forceBase64: this.forceBase64,
                    enablesXDR: this.enablesXDR,
                    timestampRequests: this.timestampRequests,
                    timestampParam: this.timestampParam,
                    policyPort: this.policyPort,
                    socket: this,
                    pfx: this.pfx,
                    key: this.key,
                    passphrase: this.passphrase,
                    cert: this.cert,
                    ca: this.ca,
                    ciphers: this.ciphers,
                    rejectUnauthorized: this.rejectUnauthorized,
                    perMessageDeflate: this.perMessageDeflate,
                    extraHeaders: this.extraHeaders,
                    forceNode: this.forceNode,
                    localAddress: this.localAddress
                })
            }
            ,
            r.prototype.open = function() {
                var t;
                if (this.rememberUpgrade && r.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket"))
                    t = "websocket";
                else {
                    if (0 === this.transports.length) {
                        var e = this;
                        return void setTimeout(function() {
                            e.emit("error", "No transports available")
                        }, 0)
                    }
                    t = this.transports[0]
                }
                this.readyState = "opening";
                try {
                    t = this.createTransport(t)
                } catch (t) {
                    return this.transports.shift(),
                    void this.open()
                }
                t.open(),
                this.setTransport(t)
            }
            ,
            r.prototype.setTransport = function(t) {
                s("setting transport %s", t.name);
                var e = this;
                this.transport && (s("clearing existing transport %s", this.transport.name),
                this.transport.removeAllListeners()),
                this.transport = t,
                t.on("drain", function() {
                    e.onDrain()
                }).on("packet", function(t) {
                    e.onPacket(t)
                }).on("error", function(t) {
                    e.onError(t)
                }).on("close", function() {
                    e.onClose("transport close")
                })
            }
            ,
            r.prototype.probe = function(t) {
                function e() {
                    if (d.onlyBinaryUpgrades) {
                        var e = !this.supportsBinary && d.transport.supportsBinary;
                        p = p || e
                    }
                    p || (s('probe transport "%s" opened', t),
                    u.send([{
                        type: "ping",
                        data: "probe"
                    }]),
                    u.once("packet", function(e) {
                        if (!p)
                            if ("pong" === e.type && "probe" === e.data) {
                                if (s('probe transport "%s" pong', t),
                                d.upgrading = !0,
                                d.emit("upgrading", u),
                                !u)
                                    return;
                                r.priorWebsocketSuccess = "websocket" === u.name,
                                s('pausing current transport "%s"', d.transport.name),
                                d.transport.pause(function() {
                                    p || "closed" !== d.readyState && (s("changing transport and sending upgrade packet"),
                                    l(),
                                    d.setTransport(u),
                                    u.send([{
                                        type: "upgrade"
                                    }]),
                                    d.emit("upgrade", u),
                                    u = null,
                                    d.upgrading = !1,
                                    d.flush())
                                })
                            } else {
                                s('probe transport "%s" failed', t);
                                var n = new Error("probe error");
                                n.transport = u.name,
                                d.emit("upgradeError", n)
                            }
                    }))
                }
                function n() {
                    p || (p = !0,
                    l(),
                    u.close(),
                    u = null)
                }
                function o(e) {
                    var r = new Error("probe error: " + e);
                    r.transport = u.name,
                    n(),
                    s('probe transport "%s" failed because of error: %s', t, e),
                    d.emit("upgradeError", r)
                }
                function i() {
                    o("transport closed")
                }
                function a() {
                    o("socket closed")
                }
                function c(t) {
                    u && t.name !== u.name && (s('"%s" works - aborting "%s"', t.name, u.name),
                    n())
                }
                function l() {
                    u.removeListener("open", e),
                    u.removeListener("error", o),
                    u.removeListener("close", i),
                    d.removeListener("close", a),
                    d.removeListener("upgrading", c)
                }
                s('probing transport "%s"', t);
                var u = this.createTransport(t, {
                    probe: 1
                })
                  , p = !1
                  , d = this;
                r.priorWebsocketSuccess = !1,
                u.once("open", e),
                u.once("error", o),
                u.once("close", i),
                this.once("close", a),
                this.once("upgrading", c),
                u.open()
            }
            ,
            r.prototype.onOpen = function() {
                if (s("socket open"),
                this.readyState = "open",
                r.priorWebsocketSuccess = "websocket" === this.transport.name,
                this.emit("open"),
                this.flush(),
                "open" === this.readyState && this.upgrade && this.transport.pause) {
                    s("starting upgrade probes");
                    for (var t = 0, e = this.upgrades.length; t < e; t++)
                        this.probe(this.upgrades[t])
                }
            }
            ,
            r.prototype.onPacket = function(t) {
                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState)
                    switch (s('socket receive: type "%s", data "%s"', t.type, t.data),
                    this.emit("packet", t),
                    this.emit("heartbeat"),
                    t.type) {
                    case "open":
                        this.onHandshake(p(t.data));
                        break;
                    case "pong":
                        this.setPing(),
                        this.emit("pong");
                        break;
                    case "error":
                        var e = new Error("server error");
                        e.code = t.data,
                        this.onError(e);
                        break;
                    case "message":
                        this.emit("data", t.data),
                        this.emit("message", t.data)
                    }
                else
                    s('packet received with socket readyState "%s"', this.readyState)
            }
            ,
            r.prototype.onHandshake = function(t) {
                this.emit("handshake", t),
                this.id = t.sid,
                this.transport.query.sid = t.sid,
                this.upgrades = this.filterUpgrades(t.upgrades),
                this.pingInterval = t.pingInterval,
                this.pingTimeout = t.pingTimeout,
                this.onOpen(),
                "closed" !== this.readyState && (this.setPing(),
                this.removeListener("heartbeat", this.onHeartbeat),
                this.on("heartbeat", this.onHeartbeat))
            }
            ,
            r.prototype.onHeartbeat = function(t) {
                clearTimeout(this.pingTimeoutTimer);
                var e = this;
                e.pingTimeoutTimer = setTimeout(function() {
                    "closed" !== e.readyState && e.onClose("ping timeout")
                }, t || e.pingInterval + e.pingTimeout)
            }
            ,
            r.prototype.setPing = function() {
                var t = this;
                clearTimeout(t.pingIntervalTimer),
                t.pingIntervalTimer = setTimeout(function() {
                    s("writing ping packet - expecting pong within %sms", t.pingTimeout),
                    t.ping(),
                    t.onHeartbeat(t.pingTimeout)
                }, t.pingInterval)
            }
            ,
            r.prototype.ping = function() {
                var t = this;
                this.sendPacket("ping", function() {
                    t.emit("ping")
                })
            }
            ,
            r.prototype.onDrain = function() {
                this.writeBuffer.splice(0, this.prevBufferLen),
                this.prevBufferLen = 0,
                0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
            }
            ,
            r.prototype.flush = function() {
                "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (s("flushing %d packets in socket", this.writeBuffer.length),
                this.transport.send(this.writeBuffer),
                this.prevBufferLen = this.writeBuffer.length,
                this.emit("flush"))
            }
            ,
            r.prototype.write = r.prototype.send = function(t, e, n) {
                return this.sendPacket("message", t, e, n),
                this
            }
            ,
            r.prototype.sendPacket = function(t, e, n, r) {
                if ("function" == typeof e && (r = e,
                e = void 0),
                "function" == typeof n && (r = n,
                n = null),
                "closing" !== this.readyState && "closed" !== this.readyState) {
                    n = n || {},
                    n.compress = !1 !== n.compress;
                    var o = {
                        type: t,
                        data: e,
                        options: n
                    };
                    this.emit("packetCreate", o),
                    this.writeBuffer.push(o),
                    r && this.once("flush", r),
                    this.flush()
                }
            }
            ,
            r.prototype.close = function() {
                function t() {
                    r.onClose("forced close"),
                    s("socket closing - telling transport to close"),
                    r.transport.close()
                }
                function e() {
                    r.removeListener("upgrade", e),
                    r.removeListener("upgradeError", e),
                    t()
                }
                function n() {
                    r.once("upgrade", e),
                    r.once("upgradeError", e)
                }
                if ("opening" === this.readyState || "open" === this.readyState) {
                    this.readyState = "closing";
                    var r = this;
                    this.writeBuffer.length ? this.once("drain", function() {
                        this.upgrading ? n() : t()
                    }) : this.upgrading ? n() : t()
                }
                return this
            }
            ,
            r.prototype.onError = function(t) {
                s("socket error %j", t),
                r.priorWebsocketSuccess = !1,
                this.emit("error", t),
                this.onClose("transport error", t)
            }
            ,
            r.prototype.onClose = function(t, e) {
                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                    s('socket close with reason: "%s"', t);
                    var n = this;
                    clearTimeout(this.pingIntervalTimer),
                    clearTimeout(this.pingTimeoutTimer),
                    this.transport.removeAllListeners("close"),
                    this.transport.close(),
                    this.transport.removeAllListeners(),
                    this.readyState = "closed",
                    this.id = null,
                    this.emit("close", t, e),
                    n.writeBuffer = [],
                    n.prevBufferLen = 0
                }
            }
            ,
            r.prototype.filterUpgrades = function(t) {
                for (var e = [], n = 0, r = t.length; n < r; n++)
                    ~c(this.transports, t[n]) && e.push(t[n]);
                return e
            }
        }
        ).call(e, n(16))
    },
    602: function(t, e, n) {
        (function(e) {
            function r() {}
            function o(t) {
                i.call(this, t),
                this.query = this.query || {},
                s || (e.___eio || (e.___eio = []),
                s = e.___eio),
                this.index = s.length;
                var n = this;
                s.push(function(t) {
                    n.onData(t)
                }),
                this.query.j = this.index,
                e.document && e.addEventListener && e.addEventListener("beforeunload", function() {
                    n.script && (n.script.onerror = r)
                }, !1)
            }
            var i = n(222)
              , a = n(106);
            t.exports = o;
            var s, c = /\n/g, l = /\\n/g;
            a(o, i),
            o.prototype.supportsBinary = !1,
            o.prototype.doClose = function() {
                this.script && (this.script.parentNode.removeChild(this.script),
                this.script = null),
                this.form && (this.form.parentNode.removeChild(this.form),
                this.form = null,
                this.iframe = null),
                i.prototype.doClose.call(this)
            }
            ,
            o.prototype.doPoll = function() {
                var t = this
                  , e = document.createElement("script");
                this.script && (this.script.parentNode.removeChild(this.script),
                this.script = null),
                e.async = !0,
                e.src = this.uri(),
                e.onerror = function(e) {
                    t.onError("jsonp poll error", e)
                }
                ;
                var n = document.getElementsByTagName("script")[0];
                n ? n.parentNode.insertBefore(e, n) : (document.head || document.body).appendChild(e),
                this.script = e,
                "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function() {
                    var t = document.createElement("iframe");
                    document.body.appendChild(t),
                    document.body.removeChild(t)
                }, 100)
            }
            ,
            o.prototype.doWrite = function(t, e) {
                function n() {
                    r(),
                    e()
                }
                function r() {
                    if (o.iframe)
                        try {
                            o.form.removeChild(o.iframe)
                        } catch (t) {
                            o.onError("jsonp polling iframe removal error", t)
                        }
                    try {
                        var t = '<iframe src="javascript:0" name="' + o.iframeId + '">';
                        i = document.createElement(t)
                    } catch (t) {
                        i = document.createElement("iframe"),
                        i.name = o.iframeId,
                        i.src = "javascript:0"
                    }
                    i.id = o.iframeId,
                    o.form.appendChild(i),
                    o.iframe = i
                }
                var o = this;
                if (!this.form) {
                    var i, a = document.createElement("form"), s = document.createElement("textarea"), u = this.iframeId = "eio_iframe_" + this.index;
                    a.className = "socketio",
                    a.style.position = "absolute",
                    a.style.top = "-1000px",
                    a.style.left = "-1000px",
                    a.target = u,
                    a.method = "POST",
                    a.setAttribute("accept-charset", "utf-8"),
                    s.name = "d",
                    a.appendChild(s),
                    document.body.appendChild(a),
                    this.form = a,
                    this.area = s
                }
                this.form.action = this.uri(),
                r(),
                t = t.replace(l, "\\\n"),
                this.area.value = t.replace(c, "\\n");
                try {
                    this.form.submit()
                } catch (t) {}
                this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                    "complete" === o.iframe.readyState && n()
                }
                : this.iframe.onload = n
            }
        }
        ).call(e, n(16))
    },
    603: function(t, e, n) {
        (function(e) {
            function r() {}
            function o(t) {
                if (c.call(this, t),
                this.requestTimeout = t.requestTimeout,
                e.location) {
                    var n = "https:" === location.protocol
                      , r = location.port;
                    r || (r = n ? 443 : 80),
                    this.xd = t.hostname !== e.location.hostname || r !== t.port,
                    this.xs = t.secure !== n
                } else
                    this.extraHeaders = t.extraHeaders
            }
            function i(t) {
                this.method = t.method || "GET",
                this.uri = t.uri,
                this.xd = !!t.xd,
                this.xs = !!t.xs,
                this.async = !1 !== t.async,
                this.data = void 0 !== t.data ? t.data : null,
                this.agent = t.agent,
                this.isBinary = t.isBinary,
                this.supportsBinary = t.supportsBinary,
                this.enablesXDR = t.enablesXDR,
                this.requestTimeout = t.requestTimeout,
                this.pfx = t.pfx,
                this.key = t.key,
                this.passphrase = t.passphrase,
                this.cert = t.cert,
                this.ca = t.ca,
                this.ciphers = t.ciphers,
                this.rejectUnauthorized = t.rejectUnauthorized,
                this.extraHeaders = t.extraHeaders,
                this.create()
            }
            function a() {
                for (var t in i.requests)
                    i.requests.hasOwnProperty(t) && i.requests[t].abort()
            }
            var s = n(167)
              , c = n(222)
              , l = n(80)
              , u = n(106)
              , p = n(112)("engine.io-client:polling-xhr");
            t.exports = o,
            t.exports.Request = i,
            u(o, c),
            o.prototype.supportsBinary = !0,
            o.prototype.request = function(t) {
                return t = t || {},
                t.uri = this.uri(),
                t.xd = this.xd,
                t.xs = this.xs,
                t.agent = this.agent || !1,
                t.supportsBinary = this.supportsBinary,
                t.enablesXDR = this.enablesXDR,
                t.pfx = this.pfx,
                t.key = this.key,
                t.passphrase = this.passphrase,
                t.cert = this.cert,
                t.ca = this.ca,
                t.ciphers = this.ciphers,
                t.rejectUnauthorized = this.rejectUnauthorized,
                t.requestTimeout = this.requestTimeout,
                t.extraHeaders = this.extraHeaders,
                new i(t)
            }
            ,
            o.prototype.doWrite = function(t, e) {
                var n = "string" != typeof t && void 0 !== t
                  , r = this.request({
                    method: "POST",
                    data: t,
                    isBinary: n
                })
                  , o = this;
                r.on("success", e),
                r.on("error", function(t) {
                    o.onError("xhr post error", t)
                }),
                this.sendXhr = r
            }
            ,
            o.prototype.doPoll = function() {
                p("xhr poll");
                var t = this.request()
                  , e = this;
                t.on("data", function(t) {
                    e.onData(t)
                }),
                t.on("error", function(t) {
                    e.onError("xhr poll error", t)
                }),
                this.pollXhr = t
            }
            ,
            l(i.prototype),
            i.prototype.create = function() {
                var t = {
                    agent: this.agent,
                    xdomain: this.xd,
                    xscheme: this.xs,
                    enablesXDR: this.enablesXDR
                };
                t.pfx = this.pfx,
                t.key = this.key,
                t.passphrase = this.passphrase,
                t.cert = this.cert,
                t.ca = this.ca,
                t.ciphers = this.ciphers,
                t.rejectUnauthorized = this.rejectUnauthorized;
                var n = this.xhr = new s(t)
                  , r = this;
                try {
                    p("xhr open %s: %s", this.method, this.uri),
                    n.open(this.method, this.uri, this.async);
                    try {
                        if (this.extraHeaders) {
                            n.setDisableHeaderCheck(!0);
                            for (var o in this.extraHeaders)
                                this.extraHeaders.hasOwnProperty(o) && n.setRequestHeader(o, this.extraHeaders[o])
                        }
                    } catch (t) {}
                    if (this.supportsBinary && (n.responseType = "arraybuffer"),
                    "POST" === this.method)
                        try {
                            this.isBinary ? n.setRequestHeader("Content-type", "application/octet-stream") : n.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                        } catch (t) {}
                    try {
                        n.setRequestHeader("Accept", "*/*")
                    } catch (t) {}
                    "withCredentials"in n && (n.withCredentials = !0),
                    this.requestTimeout && (n.timeout = this.requestTimeout),
                    this.hasXDR() ? (n.onload = function() {
                        r.onLoad()
                    }
                    ,
                    n.onerror = function() {
                        r.onError(n.responseText)
                    }
                    ) : n.onreadystatechange = function() {
                        4 === n.readyState && (200 === n.status || 1223 === n.status ? r.onLoad() : setTimeout(function() {
                            r.onError(n.status)
                        }, 0))
                    }
                    ,
                    p("xhr data %s", this.data),
                    n.send(this.data)
                } catch (t) {
                    return void setTimeout(function() {
                        r.onError(t)
                    }, 0)
                }
                e.document && (this.index = i.requestsCount++,
                i.requests[this.index] = this)
            }
            ,
            i.prototype.onSuccess = function() {
                this.emit("success"),
                this.cleanup()
            }
            ,
            i.prototype.onData = function(t) {
                this.emit("data", t),
                this.onSuccess()
            }
            ,
            i.prototype.onError = function(t) {
                this.emit("error", t),
                this.cleanup(!0)
            }
            ,
            i.prototype.cleanup = function(t) {
                if (void 0 !== this.xhr && null !== this.xhr) {
                    if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = r : this.xhr.onreadystatechange = r,
                    t)
                        try {
                            this.xhr.abort()
                        } catch (t) {}
                    e.document && delete i.requests[this.index],
                    this.xhr = null
                }
            }
            ,
            i.prototype.onLoad = function() {
                var t;
                try {
                    var e;
                    try {
                        e = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                    } catch (t) {}
                    if ("application/octet-stream" === e)
                        t = this.xhr.response || this.xhr.responseText;
                    else if (this.supportsBinary)
                        try {
                            t = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
                        } catch (e) {
                            for (var n = new Uint8Array(this.xhr.response), r = [], o = 0, i = n.length; o < i; o++)
                                r.push(n[o]);
                            t = String.fromCharCode.apply(null, r)
                        }
                    else
                        t = this.xhr.responseText
                } catch (t) {
                    this.onError(t)
                }
                null != t && this.onData(t)
            }
            ,
            i.prototype.hasXDR = function() {
                return void 0 !== e.XDomainRequest && !this.xs && this.enablesXDR
            }
            ,
            i.prototype.abort = function() {
                this.cleanup()
            }
            ,
            i.requestsCount = 0,
            i.requests = {},
            e.document && (e.attachEvent ? e.attachEvent("onunload", a) : e.addEventListener && e.addEventListener("beforeunload", a, !1))
        }
        ).call(e, n(16))
    },
    604: function(t, e, n) {
        (function(e) {
            function r(t) {
                t && t.forceBase64 && (this.supportsBinary = !1),
                this.perMessageDeflate = t.perMessageDeflate,
                this.usingBrowserWebSocket = p && !t.forceNode,
                this.usingBrowserWebSocket || (d = o),
                i.call(this, t)
            }
            var o, i = n(166), a = n(77), s = n(168), c = n(106), l = n(480), u = n(112)("engine.io-client:websocket"), p = e.WebSocket || e.MozWebSocket;
            if ("undefined" == typeof window)
                try {
                    o = n(952)
                } catch (t) {}
            var d = p;
            d || "undefined" != typeof window || (d = o),
            t.exports = r,
            c(r, i),
            r.prototype.name = "websocket",
            r.prototype.supportsBinary = !0,
            r.prototype.doOpen = function() {
                if (this.check()) {
                    var t = this.uri()
                      , e = void 0
                      , n = {
                        agent: this.agent,
                        perMessageDeflate: this.perMessageDeflate
                    };
                    n.pfx = this.pfx,
                    n.key = this.key,
                    n.passphrase = this.passphrase,
                    n.cert = this.cert,
                    n.ca = this.ca,
                    n.ciphers = this.ciphers,
                    n.rejectUnauthorized = this.rejectUnauthorized,
                    this.extraHeaders && (n.headers = this.extraHeaders),
                    this.localAddress && (n.localAddress = this.localAddress);
                    try {
                        this.ws = this.usingBrowserWebSocket ? new d(t) : new d(t,e,n)
                    } catch (t) {
                        return this.emit("error", t)
                    }
                    void 0 === this.ws.binaryType && (this.supportsBinary = !1),
                    this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0,
                    this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer",
                    this.addEventListeners()
                }
            }
            ,
            r.prototype.addEventListeners = function() {
                var t = this;
                this.ws.onopen = function() {
                    t.onOpen()
                }
                ,
                this.ws.onclose = function() {
                    t.onClose()
                }
                ,
                this.ws.onmessage = function(e) {
                    t.onData(e.data)
                }
                ,
                this.ws.onerror = function(e) {
                    t.onError("websocket error", e)
                }
            }
            ,
            r.prototype.write = function(t) {
                function n() {
                    r.emit("flush"),
                    setTimeout(function() {
                        r.writable = !0,
                        r.emit("drain")
                    }, 0)
                }
                var r = this;
                this.writable = !1;
                for (var o = t.length, i = 0, s = o; i < s; i++)
                    !function(t) {
                        a.encodePacket(t, r.supportsBinary, function(i) {
                            if (!r.usingBrowserWebSocket) {
                                var a = {};
                                if (t.options && (a.compress = t.options.compress),
                                r.perMessageDeflate) {
                                    ("string" == typeof i ? e.Buffer.byteLength(i) : i.length) < r.perMessageDeflate.threshold && (a.compress = !1)
                                }
                            }
                            try {
                                r.usingBrowserWebSocket ? r.ws.send(i) : r.ws.send(i, a)
                            } catch (t) {
                                u("websocket closed before onclose event")
                            }
                            --o || n()
                        })
                    }(t[i])
            }
            ,
            r.prototype.onClose = function() {
                i.prototype.onClose.call(this)
            }
            ,
            r.prototype.doClose = function() {
                void 0 !== this.ws && this.ws.close()
            }
            ,
            r.prototype.uri = function() {
                var t = this.query || {}
                  , e = this.secure ? "wss" : "ws"
                  , n = "";
                return this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (n = ":" + this.port),
                this.timestampRequests && (t[this.timestampParam] = l()),
                this.supportsBinary || (t.b64 = 1),
                t = s.encode(t),
                t.length && (t = "?" + t),
                e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
            }
            ,
            r.prototype.check = function() {
                return !(!d || "__initialize"in d && this.name === r.prototype.name)
            }
        }
        ).call(e, n(16))
    },
    605: function(t, e, n) {
        function r() {
            return e.colors[u++ % e.colors.length]
        }
        function o(t) {
            function n() {}
            function o() {
                var t = o
                  , n = +new Date
                  , i = n - (l || n);
                t.diff = i,
                t.prev = l,
                t.curr = n,
                l = n,
                null == t.useColors && (t.useColors = e.useColors()),
                null == t.color && t.useColors && (t.color = r());
                for (var a = new Array(arguments.length), s = 0; s < a.length; s++)
                    a[s] = arguments[s];
                a[0] = e.coerce(a[0]),
                "string" != typeof a[0] && (a = ["%o"].concat(a));
                var c = 0;
                a[0] = a[0].replace(/%([a-z%])/g, function(n, r) {
                    if ("%%" === n)
                        return n;
                    c++;
                    var o = e.formatters[r];
                    if ("function" == typeof o) {
                        var i = a[c];
                        n = o.call(t, i),
                        a.splice(c, 1),
                        c--
                    }
                    return n
                }),
                a = e.formatArgs.apply(t, a),
                (o.log || e.log || console.log.bind(console)).apply(t, a)
            }
            n.enabled = !1,
            o.enabled = !0;
            var i = e.enabled(t) ? o : n;
            return i.namespace = t,
            i
        }
        function i(t) {
            e.save(t);
            for (var n = (t || "").split(/[\s,]+/), r = n.length, o = 0; o < r; o++)
                n[o] && (t = n[o].replace(/[\\^$+?.()|[\]{}]/g, "\\$&").replace(/\*/g, ".*?"),
                "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")))
        }
        function a() {
            e.enable("")
        }
        function s(t) {
            var n, r;
            for (n = 0,
            r = e.skips.length; n < r; n++)
                if (e.skips[n].test(t))
                    return !1;
            for (n = 0,
            r = e.names.length; n < r; n++)
                if (e.names[n].test(t))
                    return !0;
            return !1
        }
        function c(t) {
            return t instanceof Error ? t.stack || t.message : t
        }
        e = t.exports = o.debug = o,
        e.coerce = c,
        e.disable = a,
        e.enable = i,
        e.enabled = s,
        e.humanize = n(606),
        e.names = [],
        e.skips = [],
        e.formatters = {};
        var l, u = 0
    },
    606: function(t, e) {
        function n(t) {
            if (t = String(t),
            !(t.length > 1e4)) {
                var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
                if (e) {
                    var n = parseFloat(e[1]);
                    switch ((e[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return n * u;
                    case "days":
                    case "day":
                    case "d":
                        return n * l;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return n * c;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return n * s;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return n * a;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return n;
                    default:
                        return
                    }
                }
            }
        }
        function r(t) {
            return t >= l ? Math.round(t / l) + "d" : t >= c ? Math.round(t / c) + "h" : t >= s ? Math.round(t / s) + "m" : t >= a ? Math.round(t / a) + "s" : t + "ms"
        }
        function o(t) {
            return i(t, l, "day") || i(t, c, "hour") || i(t, s, "minute") || i(t, a, "second") || t + " ms"
        }
        function i(t, e, n) {
            if (!(t < e))
                return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
        }
        var a = 1e3
          , s = 60 * a
          , c = 60 * s
          , l = 24 * c
          , u = 365.25 * l;
        t.exports = function(t, e) {
            e = e || {};
            var i = typeof t;
            if ("string" === i && t.length > 0)
                return n(t);
            if ("number" === i && !1 === isNaN(t))
                return e.long ? o(t) : r(t);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
        }
    },
    607: function(t, e) {
        t.exports = Object.keys || function(t) {
            var e = []
              , n = Object.prototype.hasOwnProperty;
            for (var r in t)
                n.call(t, r) && e.push(r);
            return e
        }
    },
    608: function(t, e) {
        t.exports = Array.isArray || function(t) {
            return "[object Array]" == Object.prototype.toString.call(t)
        }
    },
    609: function(t, e) {
        try {
            t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials"in new XMLHttpRequest
        } catch (e) {
            t.exports = !1
        }
    },
    62: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        n.d(e, "AppConfig", function() {
            return r
        });
        var r = {
            socket: {
                serverAddress: "wss://webtrader.pandats-client.io",
                path: "/socketio1/",
                autoConnect: !1,
                connectTimeout: 25e3,
                reconnection: !0,
                transports: ["websocket"],
                reconnect: !0,
                reconnectionDelay: 5e3,
                reconnectionLimit: 5e3,
                maxReconnectionAttempts: 1e3
            },
            defaultLang: "en",
            deployUrl: "",
            chartUrl: "https://nfp.pandats.com/prochart",
            wpAuth: !1,
            tokenUrl: "https://webtrader.pandats-client.io/token/",
            depositUrl: "",
            signupUrl: ""
        }
    },
    63: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(2)
          , o = n(33)
          , i = n(8);
        n.d(e, "AppErrorHandler", function() {
            return s
        });
        var a = this && this.__decorate || function(t, e, n, r) {
            var o, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
            return i > 3 && a && Object.defineProperty(e, n, a),
            a
        }
          , s = function() {
            function t() {}
            return t.prototype.handleError = function(t) {
                t instanceof o.AppError ? console.warn("Application error handler", t) : console.error("error handler", t, i.stateService.getGlobalState())
            }
            ,
            t = a([n.i(r.Injectable)()], t)
        }()
    },
    637: function(t, e) {
        t.exports = "<div [ngclass]=\"{'disabledGroup': disabled}\"> <input type=text class=custom-input-field-pandats [autocomplete]=autocomplete [(ngmodel)]=value [ngclass]=isClass (focus)=onFocus() [textmask]=textMask [minlength]=minlength [maxlength]=maxlength> <div class=btnGroup *ngif=buttons.visible> <button class=custom-input-pandats (click)=increase() (mouseup)=mouseUpFn() (mouseleave)=mouseUpFn() (mouseout)=mouseUpFn() (mousedown)=increaseRepeat() on-contextmenu=noop()>+ </button> <button class=custom-input-pandats (click)=decrease() (mouseup)=mouseUpFn() (mouseleave)=mouseUpFn() (mouseout)=mouseUpFn() (mousedown)=decreaseRepeat() on-contextmenu=noop()>- </button> </div> </div>"
    },
    638: function(t, e) {
        t.exports = '<div class="frx-dropdown-pandats layout-row just-end" (click)=toggle() (clickoutside)="isShow=false" *ngif="(config.type && config.type===\'dropdown\') || !config.type"> <div class="frx-dropbtn-pandats layout-column centered-content full-width"> <span *ngif="value && value.class" [ngclass]=value.class></span> <span *ngif=!config.flagOnly class=frx-currentvalue-pandats> {{value && translateItem(value) || config.defaultLabel}} </span> </div> <div class="frx-dropdown-content-pandats date-picker-pandats pfdin-text-universal-pandats" [ngclass]="{\'dropdown-hide-pandats\': !isShow, \'dropdown-show-pandats\': isShow}"> <perfect-scrollbar class=scroll-container-pandats> <div class=wrap-list-pandats [ngstyle]="{\'height\': items.length <= 3 ? \'auto\' : itemHeight*4 + \'px\' }"> <span class=item-pandats *ngfor="let item of items" (click)="value = item" [ngclass]="{\'active-pandats\':item===value}"> <span *ngif=item.class [ngclass]=item.class></span> <span class=itemLabel>{{translateItem(item)}}</span> </span> </div> </perfect-scrollbar> </div> </div> <div *ngif="config.type && config.type===\'list\'" class=select-list-pandats> <span *ngfor="let item of items" class=select-list-item (click)="value = item" [ngclass]="{\'active-list-pandats\':item===value}"> {{translateItem(item)}} </span> </div> '
    },
    639: function(t, e) {
        t.exports = "<div *ngif=state> <div class=backdrop-pandats *ngif=config.backdrop></div> <div class=\"popup-wrapper-pandats helvetica-neue-pandats\" [@fadeinout] [ngclass]=config.className [ngstyle]=\"{'width.rem':config.width,'min-width.rem':config.width,'height.rem':config.height,'min-height.rem':config.height}\"> <div class=title-popup-pandats> <div class=title-pandats> <ng-content select=header></ng-content> </div> <div class=close-popup-pandats (click)=close()> <i class=\"icon-pandats cmicon-cancel\"></i> </div> </div> <div class=subtitle-popup-pandats> <ng-content select=.section-subtitle></ng-content> </div> <div class=content-popup-pandats> <ng-content select=section></ng-content> </div> <div class=footer-popup-pandats> <ng-content select=footer></ng-content> </div> </div> </div> "
    },
    640: function(t, e) {
        t.exports = '<div class="inner-popup-wrapper-pandats layout-column" [ngclass]="state + \'-pandats\'"> <div class=inner-popup-pandats> <div class=inner-popup-spinner-pandats *ngif="state===\'processing\'"> <spinner [isshow]="state===\'processing\'" [isbackdrop]=false></spinner> </div> <i class="icon-success-pandats cmicon-check2" *ngif="state===\'success\'"></i> <h2 class="helvetica-neue-pandats inner-title-pandats" [ngclass]=state>{{data.title}}</h2> <div *ngif="state!==\'processing\'" class=inner-popup-content-pandats [innerhtml]=data.content> </div> <ng-content *ngif="state!==\'processing\'"></ng-content> </div> <div class="inner-popup-footer-pandats layout-row"> <button (click)=hide() *ngif="state!==\'processing\'" class="forex-button-pandats short-button-pandats" [ngclass]=""> {{translation.close}}(<span>{{counter}}</span>) </button> </div> </div> '
    },
    641: function(t, e, n) {
        (function(t, r) {
            var o;
            (function() {
                function i(t, e) {
                    function n(t) {
                        if (n[t] !== m)
                            return n[t];
                        var i;
                        if ("bug-string-char-index" == t)
                            i = "a" != "a"[0];
                        else if ("json" == t)
                            i = n("json-stringify") && n("json-parse");
                        else {
                            var a, s = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                            if ("json-stringify" == t) {
                                var l = e.stringify
                                  , u = "function" == typeof l && b;
                                if (u) {
                                    (a = function() {
                                        return 1
                                    }
                                    ).toJSON = a;
                                    try {
                                        u = "0" === l(0) && "0" === l(new r) && '""' == l(new o) && l(v) === m && l(m) === m && l() === m && "1" === l(a) && "[1]" == l([a]) && "[null]" == l([m]) && "null" == l(null) && "[null,null,null]" == l([m, v, null]) && l({
                                            a: [a, !0, !1, null, "\0\b\n\f\r\t"]
                                        }) == s && "1" === l(null, a) && "[\n 1,\n 2\n]" == l([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == l(new c(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == l(new c(864e13)) && '"-000001-01-01T00:00:00.000Z"' == l(new c(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == l(new c(-1))
                                    } catch (t) {
                                        u = !1
                                    }
                                }
                                i = u
                            }
                            if ("json-parse" == t) {
                                var p = e.parse;
                                if ("function" == typeof p)
                                    try {
                                        if (0 === p("0") && !p(!1)) {
                                            a = p(s);
                                            var d = 5 == a.a.length && 1 === a.a[0];
                                            if (d) {
                                                try {
                                                    d = !p('"\t"')
                                                } catch (t) {}
                                                if (d)
                                                    try {
                                                        d = 1 !== p("01")
                                                    } catch (t) {}
                                                if (d)
                                                    try {
                                                        d = 1 !== p("1.")
                                                    } catch (t) {}
                                            }
                                        }
                                    } catch (t) {
                                        d = !1
                                    }
                                i = d
                            }
                        }
                        return n[t] = !!i
                    }
                    t || (t = l.Object()),
                    e || (e = l.Object());
                    var r = t.Number || l.Number
                      , o = t.String || l.String
                      , a = t.Object || l.Object
                      , c = t.Date || l.Date
                      , u = t.SyntaxError || l.SyntaxError
                      , p = t.TypeError || l.TypeError
                      , d = t.Math || l.Math
                      , h = t.JSON || l.JSON;
                    "object" == typeof h && h && (e.stringify = h.stringify,
                    e.parse = h.parse);
                    var f, y, m, g = a.prototype, v = g.toString, b = new c(-0xc782b5b800cec);
                    try {
                        b = -109252 == b.getUTCFullYear() && 0 === b.getUTCMonth() && 1 === b.getUTCDate() && 10 == b.getUTCHours() && 37 == b.getUTCMinutes() && 6 == b.getUTCSeconds() && 708 == b.getUTCMilliseconds()
                    } catch (t) {}
                    if (!n("json")) {
                        var _ = "[object Function]"
                          , C = "[object Date]"
                          , w = "[object Number]"
                          , k = "[object String]"
                          , S = "[object Array]"
                          , O = "[object Boolean]"
                          , E = n("bug-string-char-index");
                        if (!b)
                            var A = d.floor
                              , P = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
                              , x = function(t, e) {
                                return P[e] + 365 * (t - 1970) + A((t - 1969 + (e = +(e > 1))) / 4) - A((t - 1901 + e) / 100) + A((t - 1601 + e) / 400)
                            };
                        if ((f = g.hasOwnProperty) || (f = function(t) {
                            var e, n = {};
                            return (n.__proto__ = null,
                            n.__proto__ = {
                                toString: 1
                            },
                            n).toString != v ? f = function(t) {
                                var e = this.__proto__
                                  , n = t in (this.__proto__ = null,
                                this);
                                return this.__proto__ = e,
                                n
                            }
                            : (e = n.constructor,
                            f = function(t) {
                                var n = (this.constructor || e).prototype;
                                return t in this && !(t in n && this[t] === n[t])
                            }
                            ),
                            n = null,
                            f.call(this, t)
                        }
                        ),
                        y = function(t, e) {
                            var n, r, o, i = 0;
                            (n = function() {
                                this.valueOf = 0
                            }
                            ).prototype.valueOf = 0,
                            r = new n;
                            for (o in r)
                                f.call(r, o) && i++;
                            return n = r = null,
                            i ? y = 2 == i ? function(t, e) {
                                var n, r = {}, o = v.call(t) == _;
                                for (n in t)
                                    o && "prototype" == n || f.call(r, n) || !(r[n] = 1) || !f.call(t, n) || e(n)
                            }
                            : function(t, e) {
                                var n, r, o = v.call(t) == _;
                                for (n in t)
                                    o && "prototype" == n || !f.call(t, n) || (r = "constructor" === n) || e(n);
                                (r || f.call(t, n = "constructor")) && e(n)
                            }
                            : (r = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"],
                            y = function(t, e) {
                                var n, o, i = v.call(t) == _, a = !i && "function" != typeof t.constructor && s[typeof t.hasOwnProperty] && t.hasOwnProperty || f;
                                for (n in t)
                                    i && "prototype" == n || !a.call(t, n) || e(n);
                                for (o = r.length; n = r[--o]; a.call(t, n) && e(n))
                                    ;
                            }
                            ),
                            y(t, e)
                        }
                        ,
                        !n("json-stringify")) {
                            var T = {
                                92: "\\\\",
                                34: '\\"',
                                8: "\\b",
                                12: "\\f",
                                10: "\\n",
                                13: "\\r",
                                9: "\\t"
                            }
                              , M = "000000"
                              , R = function(t, e) {
                                return (M + (e || 0)).slice(-t)
                            }
                              , D = "\\u00"
                              , I = function(t) {
                                for (var e = '"', n = 0, r = t.length, o = !E || r > 10, i = o && (E ? t.split("") : t); n < r; n++) {
                                    var a = t.charCodeAt(n);
                                    switch (a) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        e += T[a];
                                        break;
                                    default:
                                        if (a < 32) {
                                            e += D + R(2, a.toString(16));
                                            break
                                        }
                                        e += o ? i[n] : t.charAt(n)
                                    }
                                }
                                return e + '"'
                            }
                              , j = function(t, e, n, r, o, i, a) {
                                var s, c, l, u, d, h, g, b, _, E, P, T, M, D, N, V;
                                try {
                                    s = e[t]
                                } catch (t) {}
                                if ("object" == typeof s && s)
                                    if ((c = v.call(s)) != C || f.call(s, "toJSON"))
                                        "function" == typeof s.toJSON && (c != w && c != k && c != S || f.call(s, "toJSON")) && (s = s.toJSON(t));
                                    else if (s > -1 / 0 && s < 1 / 0) {
                                        if (x) {
                                            for (d = A(s / 864e5),
                                            l = A(d / 365.2425) + 1970 - 1; x(l + 1, 0) <= d; l++)
                                                ;
                                            for (u = A((d - x(l, 0)) / 30.42); x(l, u + 1) <= d; u++)
                                                ;
                                            d = 1 + d - x(l, u),
                                            h = (s % 864e5 + 864e5) % 864e5,
                                            g = A(h / 36e5) % 24,
                                            b = A(h / 6e4) % 60,
                                            _ = A(h / 1e3) % 60,
                                            E = h % 1e3
                                        } else
                                            l = s.getUTCFullYear(),
                                            u = s.getUTCMonth(),
                                            d = s.getUTCDate(),
                                            g = s.getUTCHours(),
                                            b = s.getUTCMinutes(),
                                            _ = s.getUTCSeconds(),
                                            E = s.getUTCMilliseconds();
                                        s = (l <= 0 || l >= 1e4 ? (l < 0 ? "-" : "+") + R(6, l < 0 ? -l : l) : R(4, l)) + "-" + R(2, u + 1) + "-" + R(2, d) + "T" + R(2, g) + ":" + R(2, b) + ":" + R(2, _) + "." + R(3, E) + "Z"
                                    } else
                                        s = null;
                                if (n && (s = n.call(e, t, s)),
                                null === s)
                                    return "null";
                                if ((c = v.call(s)) == O)
                                    return "" + s;
                                if (c == w)
                                    return s > -1 / 0 && s < 1 / 0 ? "" + s : "null";
                                if (c == k)
                                    return I("" + s);
                                if ("object" == typeof s) {
                                    for (D = a.length; D--; )
                                        if (a[D] === s)
                                            throw p();
                                    if (a.push(s),
                                    P = [],
                                    N = i,
                                    i += o,
                                    c == S) {
                                        for (M = 0,
                                        D = s.length; M < D; M++)
                                            T = j(M, s, n, r, o, i, a),
                                            P.push(T === m ? "null" : T);
                                        V = P.length ? o ? "[\n" + i + P.join(",\n" + i) + "\n" + N + "]" : "[" + P.join(",") + "]" : "[]"
                                    } else
                                        y(r || s, function(t) {
                                            var e = j(t, s, n, r, o, i, a);
                                            e !== m && P.push(I(t) + ":" + (o ? " " : "") + e)
                                        }),
                                        V = P.length ? o ? "{\n" + i + P.join(",\n" + i) + "\n" + N + "}" : "{" + P.join(",") + "}" : "{}";
                                    return a.pop(),
                                    V
                                }
                            };
                            e.stringify = function(t, e, n) {
                                var r, o, i, a;
                                if (s[typeof e] && e)
                                    if ((a = v.call(e)) == _)
                                        o = e;
                                    else if (a == S) {
                                        i = {};
                                        for (var c, l = 0, u = e.length; l < u; c = e[l++],
                                        ((a = v.call(c)) == k || a == w) && (i[c] = 1))
                                            ;
                                    }
                                if (n)
                                    if ((a = v.call(n)) == w) {
                                        if ((n -= n % 1) > 0)
                                            for (r = "",
                                            n > 10 && (n = 10); r.length < n; r += " ")
                                                ;
                                    } else
                                        a == k && (r = n.length <= 10 ? n : n.slice(0, 10));
                                return j("", (c = {},
                                c[""] = t,
                                c), o, i, r, "", [])
                            }
                        }
                        if (!n("json-parse")) {
                            var N, V, B = o.fromCharCode, L = {
                                92: "\\",
                                34: '"',
                                47: "/",
                                98: "\b",
                                116: "\t",
                                110: "\n",
                                102: "\f",
                                114: "\r"
                            }, G = function() {
                                throw N = V = null,
                                u()
                            }, q = function() {
                                for (var t, e, n, r, o, i = V, a = i.length; N < a; )
                                    switch (o = i.charCodeAt(N)) {
                                    case 9:
                                    case 10:
                                    case 13:
                                    case 32:
                                        N++;
                                        break;
                                    case 123:
                                    case 125:
                                    case 91:
                                    case 93:
                                    case 58:
                                    case 44:
                                        return t = E ? i.charAt(N) : i[N],
                                        N++,
                                        t;
                                    case 34:
                                        for (t = "@",
                                        N++; N < a; )
                                            if ((o = i.charCodeAt(N)) < 32)
                                                G();
                                            else if (92 == o)
                                                switch (o = i.charCodeAt(++N)) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    t += L[o],
                                                    N++;
                                                    break;
                                                case 117:
                                                    for (e = ++N,
                                                    n = N + 4; N < n; N++)
                                                        (o = i.charCodeAt(N)) >= 48 && o <= 57 || o >= 97 && o <= 102 || o >= 65 && o <= 70 || G();
                                                    t += B("0x" + i.slice(e, N));
                                                    break;
                                                default:
                                                    G()
                                                }
                                            else {
                                                if (34 == o)
                                                    break;
                                                for (o = i.charCodeAt(N),
                                                e = N; o >= 32 && 92 != o && 34 != o; )
                                                    o = i.charCodeAt(++N);
                                                t += i.slice(e, N)
                                            }
                                        if (34 == i.charCodeAt(N))
                                            return N++,
                                            t;
                                        G();
                                    default:
                                        if (e = N,
                                        45 == o && (r = !0,
                                        o = i.charCodeAt(++N)),
                                        o >= 48 && o <= 57) {
                                            for (48 == o && (o = i.charCodeAt(N + 1)) >= 48 && o <= 57 && G(),
                                            r = !1; N < a && (o = i.charCodeAt(N)) >= 48 && o <= 57; N++)
                                                ;
                                            if (46 == i.charCodeAt(N)) {
                                                for (n = ++N; n < a && (o = i.charCodeAt(n)) >= 48 && o <= 57; n++)
                                                    ;
                                                n == N && G(),
                                                N = n
                                            }
                                            if (101 == (o = i.charCodeAt(N)) || 69 == o) {
                                                for (o = i.charCodeAt(++N),
                                                43 != o && 45 != o || N++,
                                                n = N; n < a && (o = i.charCodeAt(n)) >= 48 && o <= 57; n++)
                                                    ;
                                                n == N && G(),
                                                N = n
                                            }
                                            return +i.slice(e, N)
                                        }
                                        if (r && G(),
                                        "true" == i.slice(N, N + 4))
                                            return N += 4,
                                            !0;
                                        if ("false" == i.slice(N, N + 5))
                                            return N += 5,
                                            !1;
                                        if ("null" == i.slice(N, N + 4))
                                            return N += 4,
                                            null;
                                        G()
                                    }
                                return "$"
                            }, F = function(t) {
                                var e, n;
                                if ("$" == t && G(),
                                "string" == typeof t) {
                                    if ("@" == (E ? t.charAt(0) : t[0]))
                                        return t.slice(1);
                                    if ("[" == t) {
                                        for (e = []; "]" != (t = q()); n || (n = !0))
                                            n && ("," == t ? "]" == (t = q()) && G() : G()),
                                            "," == t && G(),
                                            e.push(F(t));
                                        return e
                                    }
                                    if ("{" == t) {
                                        for (e = {}; "}" != (t = q()); n || (n = !0))
                                            n && ("," == t ? "}" == (t = q()) && G() : G()),
                                            "," != t && "string" == typeof t && "@" == (E ? t.charAt(0) : t[0]) && ":" == q() || G(),
                                            e[t.slice(1)] = F(q());
                                        return e
                                    }
                                    G()
                                }
                                return t
                            }, U = function(t, e, n) {
                                var r = z(t, e, n);
                                r === m ? delete t[e] : t[e] = r
                            }, z = function(t, e, n) {
                                var r, o = t[e];
                                if ("object" == typeof o && o)
                                    if (v.call(o) == S)
                                        for (r = o.length; r--; )
                                            U(o, r, n);
                                    else
                                        y(o, function(t) {
                                            U(o, t, n)
                                        });
                                return n.call(t, e, o)
                            };
                            e.parse = function(t, e) {
                                var n, r;
                                return N = 0,
                                V = "" + t,
                                n = F(q()),
                                "$" != q() && G(),
                                N = V = null,
                                e && v.call(e) == _ ? z((r = {},
                                r[""] = n,
                                r), "", e) : n
                            }
                        }
                    }
                    return e.runInContext = i,
                    e
                }
                var a = n(949)
                  , s = {
                    function: !0,
                    object: !0
                }
                  , c = s[typeof e] && e && !e.nodeType && e
                  , l = s[typeof window] && window || this
                  , u = c && s[typeof t] && t && !t.nodeType && "object" == typeof r && r;
                if (!u || u.global !== u && u.window !== u && u.self !== u || (l = u),
                c && !a)
                    i(l, c);
                else {
                    var p = l.JSON
                      , d = l.JSON3
                      , h = !1
                      , f = i(l, l.JSON3 = {
                        noConflict: function() {
                            return h || (h = !0,
                            l.JSON = p,
                            l.JSON3 = d,
                            p = d = null),
                            f
                        }
                    });
                    l.JSON = {
                        parse: f.parse,
                        stringify: f.stringify
                    }
                }
                a && void 0 !== (o = function() {
                    return f
                }
                .call(e, n, e, t)) && (t.exports = o)
            }
            ).call(this)
        }
        ).call(e, n(129)(t), n(16))
    },
    643: function(t, e, n) {
        (function(e) {
            var n = /^[\],:{}\s]*$/
              , r = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g
              , o = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
              , i = /(?:^|:|,)(?:\s*\[)+/g
              , a = /^\s+/
              , s = /\s+$/;
            t.exports = function(t) {
                return "string" == typeof t && t ? (t = t.replace(a, "").replace(s, ""),
                e.JSON && JSON.parse ? JSON.parse(t) : n.test(t.replace(r, "@").replace(o, "]").replace(i, "")) ? new Function("return " + t)() : void 0) : null
            }
        }
        ).call(e, n(16))
    },
    71: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        n.d(e, "localStorageService", function() {
            return o
        });
        var r = function() {
            function t() {
                this.ls = localStorage,
                this.prefix = "panda-forex_"
            }
            return t.prototype.set = function(t, e) {
                this.ls.setItem(this.prefix + t, e)
            }
            ,
            t.prototype.get = function(t) {
                return this.ls.getItem(this.prefix + t)
            }
            ,
            t.prototype.remove = function(t) {
                this.ls.removeItem(this.prefix + t)
            }
            ,
            t.prototype.clear = function() {
                var t = this;
                Object.keys(this.ls).forEach(function(e) {
                    return e.match(new RegExp("^" + t.prefix)) && t.remove(e)
                })
            }
            ,
            t
        }()
          , o = new r
    },
    72: function(t, e, n) {
        "use strict";
        function r(t) {
            return d["ɵvid"](0, [(t()(),
            d["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), d["ɵdid"](1, 278528, null, 0, h.NgClass, [d.IterableDiffers, d.KeyValueDiffers, d.ElementRef, d.Renderer], {
                ngClass: [0, "ngClass"]
            }, null)], function(t, e) {
                t(e, 1, 0, e.component.value.class)
            }, null)
        }
        function o(t) {
            return d["ɵvid"](0, [(t()(),
            d["ɵeld"](0, 0, null, null, 1, "span", [["class", "frx-currentvalue-pandats"]], null, null, null, null, null)), (t()(),
            d["ɵted"](1, null, ["\n            ", "\n        "]))], null, function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.value && n.translateItem(n.value) || n.config.defaultLabel)
            })
        }
        function i(t) {
            return d["ɵvid"](0, [(t()(),
            d["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), d["ɵdid"](1, 278528, null, 0, h.NgClass, [d.IterableDiffers, d.KeyValueDiffers, d.ElementRef, d.Renderer], {
                ngClass: [0, "ngClass"]
            }, null)], function(t, e) {
                t(e, 1, 0, e.parent.context.$implicit.class)
            }, null)
        }
        function a(t) {
            return d["ɵvid"](0, [(t()(),
            d["ɵeld"](0, 0, null, null, 9, "span", [["class", "item-pandats"]], null, [[null, "click"]], function(t, e, n) {
                var r = !0
                  , o = t.component;
                if ("click" === e) {
                    r = !1 !== (o.value = t.context.$implicit) && r
                }
                return r
            }, null, null)), d["ɵdid"](1, 278528, null, 0, h.NgClass, [d.IterableDiffers, d.KeyValueDiffers, d.ElementRef, d.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), d["ɵpod"](2, {
                "active-pandats": 0
            }), (t()(),
            d["ɵted"](-1, null, ["\n\t\t\t"])), (t()(),
            d["ɵand"](16777216, null, null, 1, null, i)), d["ɵdid"](5, 16384, null, 0, h.NgIf, [d.ViewContainerRef, d.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(),
            d["ɵted"](-1, null, ["\n\t\t\t"])), (t()(),
            d["ɵeld"](7, 0, null, null, 1, "span", [["class", "itemLabel"]], null, null, null, null, null)), (t()(),
            d["ɵted"](8, null, ["", ""])), (t()(),
            d["ɵted"](-1, null, ["\n                   "]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0, "item-pandats", t(e, 2, 0, e.context.$implicit === n.value)),
                t(e, 5, 0, e.context.$implicit.class)
            }, function(t, e) {
                t(e, 8, 0, e.component.translateItem(e.context.$implicit))
            })
        }
        function s(t) {
            return d["ɵvid"](0, [(t()(),
            d["ɵeld"](0, 0, null, null, 28, "div", [["class", "frx-dropdown-pandats layout-row just-end"]], null, [[null, "click"], [null, "clickOutside"], ["document", "click"]], function(t, e, n) {
                var r = !0
                  , o = t.component;
                if ("document:click" === e) {
                    r = !1 !== d["ɵnov"](t, 1).onClick(n, n.target) && r
                }
                if ("click" === e) {
                    r = !1 !== o.toggle() && r
                }
                if ("clickOutside" === e) {
                    r = !1 != (o.isShow = !1) && r
                }
                return r
            }, null, null)), d["ɵdid"](1, 16384, null, 0, f.a, [d.ElementRef], null, {
                clickOutside: "clickOutside"
            }), (t()(),
            d["ɵted"](-1, null, ["\n    "])), (t()(),
            d["ɵeld"](3, 0, null, null, 7, "div", [["class", "frx-dropbtn-pandats layout-column centered-content full-width"]], null, null, null, null, null)), (t()(),
            d["ɵted"](-1, null, ["\n        "])), (t()(),
            d["ɵand"](16777216, null, null, 1, null, r)), d["ɵdid"](6, 16384, null, 0, h.NgIf, [d.ViewContainerRef, d.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(),
            d["ɵted"](-1, null, ["\n        "])), (t()(),
            d["ɵand"](16777216, null, null, 1, null, o)), d["ɵdid"](9, 16384, null, 0, h.NgIf, [d.ViewContainerRef, d.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(),
            d["ɵted"](-1, null, ["\n    "])), (t()(),
            d["ɵted"](-1, null, ["\n    "])), (t()(),
            d["ɵeld"](12, 0, null, null, 15, "div", [["class", "frx-dropdown-content-pandats date-picker-pandats pfdin-text-universal-pandats"]], null, null, null, null, null)), d["ɵdid"](13, 278528, null, 0, h.NgClass, [d.IterableDiffers, d.KeyValueDiffers, d.ElementRef, d.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), d["ɵpod"](14, {
                "dropdown-hide-pandats": 0,
                "dropdown-show-pandats": 1
            }), (t()(),
            d["ɵted"](-1, null, ["\n        "])), (t()(),
            d["ɵeld"](16, 0, null, null, 10, "perfect-scrollbar", [["class", "scroll-container-pandats"]], null, null, null, y.a, y.b)), d["ɵdid"](17, 4636672, [[1, 4]], 0, m.PerfectScrollbarComponent, [d.ElementRef, [2, g.PerfectScrollbarConfig], d.NgZone], null, null), (t()(),
            d["ɵted"](-1, 0, ["\n            "])), (t()(),
            d["ɵeld"](19, 0, null, 0, 6, "div", [["class", "wrap-list-pandats"]], null, null, null, null, null)), d["ɵdid"](20, 278528, null, 0, h.NgStyle, [d.KeyValueDiffers, d.ElementRef, d.Renderer], {
                ngStyle: [0, "ngStyle"]
            }, null), d["ɵpod"](21, {
                height: 0
            }), (t()(),
            d["ɵted"](-1, null, ["\n                   "])), (t()(),
            d["ɵand"](16777216, null, null, 1, null, a)), d["ɵdid"](24, 802816, null, 0, h.NgForOf, [d.ViewContainerRef, d.TemplateRef, d.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (t()(),
            d["ɵted"](-1, null, ["\n            "])), (t()(),
            d["ɵted"](-1, 0, ["\n        "])), (t()(),
            d["ɵted"](-1, null, ["\n    "])), (t()(),
            d["ɵted"](-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 6, 0, n.value && n.value.class),
                t(e, 9, 0, !n.config.flagOnly),
                t(e, 13, 0, "frx-dropdown-content-pandats date-picker-pandats pfdin-text-universal-pandats", t(e, 14, 0, !n.isShow, n.isShow)),
                t(e, 17, 0),
                t(e, 20, 0, t(e, 21, 0, n.items.length <= 3 ? "auto" : 4 * n.itemHeight + "px")),
                t(e, 24, 0, n.items)
            }, null)
        }
        function c(t) {
            return d["ɵvid"](0, [(t()(),
            d["ɵeld"](0, 0, null, null, 3, "span", [["class", "select-list-item"]], null, [[null, "click"]], function(t, e, n) {
                var r = !0
                  , o = t.component;
                if ("click" === e) {
                    r = !1 !== (o.value = t.context.$implicit) && r
                }
                return r
            }, null, null)), d["ɵdid"](1, 278528, null, 0, h.NgClass, [d.IterableDiffers, d.KeyValueDiffers, d.ElementRef, d.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), d["ɵpod"](2, {
                "active-list-pandats": 0
            }), (t()(),
            d["ɵted"](3, null, ["\n            ", "\n        "]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0, "select-list-item", t(e, 2, 0, e.context.$implicit === n.value))
            }, function(t, e) {
                t(e, 3, 0, e.component.translateItem(e.context.$implicit))
            })
        }
        function l(t) {
            return d["ɵvid"](0, [(t()(),
            d["ɵeld"](0, 0, null, null, 4, "div", [["class", "select-list-pandats"]], null, null, null, null, null)), (t()(),
            d["ɵted"](-1, null, ["\n        "])), (t()(),
            d["ɵand"](16777216, null, null, 1, null, c)), d["ɵdid"](3, 802816, null, 0, h.NgForOf, [d.ViewContainerRef, d.TemplateRef, d.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (t()(),
            d["ɵted"](-1, null, ["\n"]))], function(t, e) {
                t(e, 3, 0, e.component.items)
            }, null)
        }
        function u(t) {
            return d["ɵvid"](0, [d["ɵqud"](671088640, 1, {
                ps: 0
            }), (t()(),
            d["ɵand"](16777216, null, null, 1, null, s)), d["ɵdid"](2, 16384, null, 0, h.NgIf, [d.ViewContainerRef, d.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(),
            d["ɵted"](-1, null, ["\n\n\n"])), (t()(),
            d["ɵand"](16777216, null, null, 1, null, l)), d["ɵdid"](5, 16384, null, 0, h.NgIf, [d.ViewContainerRef, d.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(),
            d["ɵted"](-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 2, 0, n.config.type && "dropdown" === n.config.type || !n.config.type),
                t(e, 5, 0, n.config.type && "list" === n.config.type)
            }, null)
        }
        function p(t) {
            return d["ɵvid"](0, [(t()(),
            d["ɵeld"](0, 0, null, null, 2, "custom-select", [], null, null, null, u, C)), d["ɵprd"](5120, null, b.NG_VALUE_ACCESSOR, function(t) {
                return [t]
            }, [v.a]), d["ɵdid"](2, 245760, null, 0, v.a, [d.ElementRef, d.NgZone], null, null)], function(t, e) {
                t(e, 2, 0)
            }, null)
        }
        var d = n(2)
          , h = n(4)
          , f = n(204)
          , y = n(78)
          , m = n(55)
          , g = (n.n(m),
        n(18))
          , v = (n.n(g),
        n(56))
          , b = n(5);
        n.d(e, "b", function() {
            return C
        }),
        e.a = u;
        var _ = []
          , C = d["ɵcrt"]({
            encapsulation: 2,
            styles: _,
            data: {}
        });
        d["ɵccf"]("custom-select", v.a, p, {
            items: "items",
            config: "config"
        }, {}, [])
    },
    73: function(t, e, n) {
        "use strict";
        function r(t) {
            return s["ɵvid"](0, [(t()(),
            s["ɵeld"](0, 0, null, null, 0, "div", [["class", "spinner-backdrop-pandats"]], null, null, null, null, null))], null, null)
        }
        function o(t) {
            return s["ɵvid"](0, [(t()(),
            s["ɵeld"](0, 0, null, null, 26, "div", [["class", "spinner-pandats"]], null, null, null, null, null)), (t()(),
            s["ɵted"](-1, null, ["\n                    "])), (t()(),
            s["ɵand"](16777216, null, null, 1, null, r)), s["ɵdid"](3, 16384, null, 0, c.NgIf, [s.ViewContainerRef, s.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (t()(),
            s["ɵted"](-1, null, ["\n                    "])), (t()(),
            s["ɵeld"](5, 0, null, null, 20, "div", [["class", "spinner-content-pandats"]], null, null, null, null, null)), (t()(),
            s["ɵted"](-1, null, ["\n                        "])), (t()(),
            s["ɵeld"](7, 0, null, null, 17, "div", [["id", "floatingCirclesG-pandats"]], null, null, null, null, null)), (t()(),
            s["ɵted"](-1, null, ["\n                            "])), (t()(),
            s["ɵeld"](9, 0, null, null, 0, "div", [["class", "f_circleG-pandats"], ["id", "frotateG_01-pandats"]], null, null, null, null, null)), (t()(),
            s["ɵted"](-1, null, ["\n                            "])), (t()(),
            s["ɵeld"](11, 0, null, null, 0, "div", [["class", "f_circleG-pandats"], ["id", "frotateG_02-pandats"]], null, null, null, null, null)), (t()(),
            s["ɵted"](-1, null, ["\n                            "])), (t()(),
            s["ɵeld"](13, 0, null, null, 0, "div", [["class", "f_circleG-pandats"], ["id", "frotateG_03-pandats"]], null, null, null, null, null)), (t()(),
            s["ɵted"](-1, null, ["\n                            "])), (t()(),
            s["ɵeld"](15, 0, null, null, 0, "div", [["class", "f_circleG-pandats"], ["id", "frotateG_04-pandats"]], null, null, null, null, null)), (t()(),
            s["ɵted"](-1, null, ["\n                            "])), (t()(),
            s["ɵeld"](17, 0, null, null, 0, "div", [["class", "f_circleG-pandats"], ["id", "frotateG_05-pandats"]], null, null, null, null, null)), (t()(),
            s["ɵted"](-1, null, ["\n                            "])), (t()(),
            s["ɵeld"](19, 0, null, null, 0, "div", [["class", "f_circleG-pandats"], ["id", "frotateG_06-pandats"]], null, null, null, null, null)), (t()(),
            s["ɵted"](-1, null, ["\n                            "])), (t()(),
            s["ɵeld"](21, 0, null, null, 0, "div", [["class", "f_circleG-pandats"], ["id", "frotateG_07-pandats"]], null, null, null, null, null)), (t()(),
            s["ɵted"](-1, null, ["\n                            "])), (t()(),
            s["ɵeld"](23, 0, null, null, 0, "div", [["class", "f_circleG-pandats"], ["id", "frotateG_08-pandats"]], null, null, null, null, null)), (t()(),
            s["ɵted"](-1, null, ["\n                        "])), (t()(),
            s["ɵted"](-1, null, ["\n                    "])), (t()(),
            s["ɵted"](-1, null, ["\n                "]))], function(t, e) {
                t(e, 3, 0, e.component.isBackdrop)
            }, null)
        }
        function i(t) {
            return s["ɵvid"](0, [(t()(),
            s["ɵand"](16777216, null, null, 1, null, o)), s["ɵdid"](1, 16384, null, 0, c.NgIf, [s.ViewContainerRef, s.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null)], function(t, e) {
                t(e, 1, 0, e.component.isShow)
            }, null)
        }
        function a(t) {
            return s["ɵvid"](0, [(t()(),
            s["ɵeld"](0, 0, null, null, 1, "spinner", [], null, null, null, i, p)), s["ɵdid"](1, 114688, null, 0, l.a, [], null, null)], function(t, e) {
                t(e, 1, 0)
            }, null)
        }
        var s = n(2)
          , c = n(4)
          , l = n(57);
        n.d(e, "b", function() {
            return p
        }),
        e.a = i;
        var u = []
          , p = s["ɵcrt"]({
            encapsulation: 2,
            styles: u,
            data: {}
        });
        s["ɵccf"]("spinner", l.a, a, {
            isShow: "isShow",
            content: "content",
            isBackdrop: "isBackdrop"
        }, {}, [])
    },
    75: function(t, e, n) {
        "use strict";
        var r = n(2);
        n.d(e, "a", function() {
            return a
        });
        var o = this && this.__decorate || function(t, e, n, r) {
            var o, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
            return i > 3 && a && Object.defineProperty(e, n, a),
            a
        }
          , i = this && this.__metadata || function(t, e) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(t, e)
        }
          , a = function() {
            function t() {
                this.state = !1,
                this.config = {
                    width: 400,
                    height: 300,
                    backdrop: !0
                },
                this.onClose = new r.EventEmitter
            }
            return t.prototype.ngOnInit = function() {}
            ,
            t.prototype.ngOnDestroy = function() {}
            ,
            t.prototype.close = function() {
                this.state = !1,
                this.onClose.emit(!0)
            }
            ,
            o([n.i(r.Input)(), i("design:type", Boolean)], t.prototype, "state", void 0),
            o([n.i(r.Input)(), i("design:type", Object)], t.prototype, "config", void 0),
            o([n.i(r.Output)(), i("design:type", r.EventEmitter)], t.prototype, "onClose", void 0),
            t = o([n.i(r.Component)({
                selector: "modal",
                template: n(639),
                animations: [n.i(r.trigger)("fadeInOut", [n.i(r.transition)(":enter", [n.i(r.style)({
                    opacity: 0
                }), n.i(r.animate)(300, n.i(r.style)({
                    opacity: 1
                }))]), n.i(r.transition)(":leave", [n.i(r.animate)(300, n.i(r.style)({
                    opacity: 0
                }))])])]
            })], t)
        }()
    },
    77: function(t, e, n) {
        (function(t) {
            function r(t, n) {
                return n("b" + e.packets[t.type] + t.data.data)
            }
            function o(t, n, r) {
                if (!n)
                    return e.encodeBase64Packet(t, r);
                var o = t.data
                  , i = new Uint8Array(o)
                  , a = new Uint8Array(1 + o.byteLength);
                a[0] = v[t.type];
                for (var s = 0; s < i.length; s++)
                    a[s + 1] = i[s];
                return r(a.buffer)
            }
            function i(t, n, r) {
                if (!n)
                    return e.encodeBase64Packet(t, r);
                var o = new FileReader;
                return o.onload = function() {
                    t.data = o.result,
                    e.encodePacket(t, n, !0, r)
                }
                ,
                o.readAsArrayBuffer(t.data)
            }
            function a(t, n, r) {
                if (!n)
                    return e.encodeBase64Packet(t, r);
                if (g)
                    return i(t, n, r);
                var o = new Uint8Array(1);
                return o[0] = v[t.type],
                r(new C([o.buffer, t.data]))
            }
            function s(t) {
                try {
                    t = f.decode(t)
                } catch (t) {
                    return !1
                }
                return t
            }
            function c(t, e, n) {
                for (var r = new Array(t.length), o = h(t.length, n), i = function(t, n, o) {
                    e(n, function(e, n) {
                        r[t] = n,
                        o(e, r)
                    })
                }, a = 0; a < t.length; a++)
                    i(a, t[a], o)
            }
            var l, u = n(607), p = n(224), d = n(498), h = n(496), f = n(950);
            t && t.ArrayBuffer && (l = n(546));
            var y = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent)
              , m = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent)
              , g = y || m;
            e.protocol = 3;
            var v = e.packets = {
                open: 0,
                close: 1,
                ping: 2,
                pong: 3,
                message: 4,
                upgrade: 5,
                noop: 6
            }
              , b = u(v)
              , _ = {
                type: "error",
                data: "parser error"
            }
              , C = n(547);
            e.encodePacket = function(e, n, i, s) {
                "function" == typeof n && (s = n,
                n = !1),
                "function" == typeof i && (s = i,
                i = null);
                var c = void 0 === e.data ? void 0 : e.data.buffer || e.data;
                if (t.ArrayBuffer && c instanceof ArrayBuffer)
                    return o(e, n, s);
                if (C && c instanceof t.Blob)
                    return a(e, n, s);
                if (c && c.base64)
                    return r(e, s);
                var l = v[e.type];
                return void 0 !== e.data && (l += i ? f.encode(String(e.data)) : String(e.data)),
                s("" + l)
            }
            ,
            e.encodeBase64Packet = function(n, r) {
                var o = "b" + e.packets[n.type];
                if (C && n.data instanceof t.Blob) {
                    var i = new FileReader;
                    return i.onload = function() {
                        var t = i.result.split(",")[1];
                        r(o + t)
                    }
                    ,
                    i.readAsDataURL(n.data)
                }
                var a;
                try {
                    a = String.fromCharCode.apply(null, new Uint8Array(n.data))
                } catch (t) {
                    for (var s = new Uint8Array(n.data), c = new Array(s.length), l = 0; l < s.length; l++)
                        c[l] = s[l];
                    a = String.fromCharCode.apply(null, c)
                }
                return o += t.btoa(a),
                r(o)
            }
            ,
            e.decodePacket = function(t, n, r) {
                if (void 0 === t)
                    return _;
                if ("string" == typeof t) {
                    if ("b" == t.charAt(0))
                        return e.decodeBase64Packet(t.substr(1), n);
                    if (r && !1 === (t = s(t)))
                        return _;
                    var o = t.charAt(0);
                    return Number(o) == o && b[o] ? t.length > 1 ? {
                        type: b[o],
                        data: t.substring(1)
                    } : {
                        type: b[o]
                    } : _
                }
                var i = new Uint8Array(t)
                  , o = i[0]
                  , a = d(t, 1);
                return C && "blob" === n && (a = new C([a])),
                {
                    type: b[o],
                    data: a
                }
            }
            ,
            e.decodeBase64Packet = function(t, e) {
                var n = b[t.charAt(0)];
                if (!l)
                    return {
                        type: n,
                        data: {
                            base64: !0,
                            data: t.substr(1)
                        }
                    };
                var r = l.decode(t.substr(1));
                return "blob" === e && C && (r = new C([r])),
                {
                    type: n,
                    data: r
                }
            }
            ,
            e.encodePayload = function(t, n, r) {
                function o(t) {
                    return t.length + ":" + t
                }
                function i(t, r) {
                    e.encodePacket(t, !!a && n, !0, function(t) {
                        r(null, o(t))
                    })
                }
                "function" == typeof n && (r = n,
                n = null);
                var a = p(t);
                return n && a ? C && !g ? e.encodePayloadAsBlob(t, r) : e.encodePayloadAsArrayBuffer(t, r) : t.length ? void c(t, i, function(t, e) {
                    return r(e.join(""))
                }) : r("0:")
            }
            ,
            e.decodePayload = function(t, n, r) {
                if ("string" != typeof t)
                    return e.decodePayloadAsBinary(t, n, r);
                "function" == typeof n && (r = n,
                n = null);
                var o;
                if ("" == t)
                    return r(_, 0, 1);
                for (var i, a, s = "", c = 0, l = t.length; c < l; c++) {
                    var u = t.charAt(c);
                    if (":" != u)
                        s += u;
                    else {
                        if ("" == s || s != (i = Number(s)))
                            return r(_, 0, 1);
                        if (a = t.substr(c + 1, i),
                        s != a.length)
                            return r(_, 0, 1);
                        if (a.length) {
                            if (o = e.decodePacket(a, n, !0),
                            _.type == o.type && _.data == o.data)
                                return r(_, 0, 1);
                            if (!1 === r(o, c + i, l))
                                return
                        }
                        c += i,
                        s = ""
                    }
                }
                return "" != s ? r(_, 0, 1) : void 0
            }
            ,
            e.encodePayloadAsArrayBuffer = function(t, n) {
                function r(t, n) {
                    e.encodePacket(t, !0, !0, function(t) {
                        return n(null, t)
                    })
                }
                if (!t.length)
                    return n(new ArrayBuffer(0));
                c(t, r, function(t, e) {
                    var r = e.reduce(function(t, e) {
                        var n;
                        return n = "string" == typeof e ? e.length : e.byteLength,
                        t + n.toString().length + n + 2
                    }, 0)
                      , o = new Uint8Array(r)
                      , i = 0;
                    return e.forEach(function(t) {
                        var e = "string" == typeof t
                          , n = t;
                        if (e) {
                            for (var r = new Uint8Array(t.length), a = 0; a < t.length; a++)
                                r[a] = t.charCodeAt(a);
                            n = r.buffer
                        }
                        o[i++] = e ? 0 : 1;
                        for (var s = n.byteLength.toString(), a = 0; a < s.length; a++)
                            o[i++] = parseInt(s[a]);
                        o[i++] = 255;
                        for (var r = new Uint8Array(n), a = 0; a < r.length; a++)
                            o[i++] = r[a]
                    }),
                    n(o.buffer)
                })
            }
            ,
            e.encodePayloadAsBlob = function(t, n) {
                function r(t, n) {
                    e.encodePacket(t, !0, !0, function(t) {
                        var e = new Uint8Array(1);
                        if (e[0] = 1,
                        "string" == typeof t) {
                            for (var r = new Uint8Array(t.length), o = 0; o < t.length; o++)
                                r[o] = t.charCodeAt(o);
                            t = r.buffer,
                            e[0] = 0
                        }
                        for (var i = t instanceof ArrayBuffer ? t.byteLength : t.size, a = i.toString(), s = new Uint8Array(a.length + 1), o = 0; o < a.length; o++)
                            s[o] = parseInt(a[o]);
                        if (s[a.length] = 255,
                        C) {
                            var c = new C([e.buffer, s.buffer, t]);
                            n(null, c)
                        }
                    })
                }
                c(t, r, function(t, e) {
                    return n(new C(e))
                })
            }
            ,
            e.decodePayloadAsBinary = function(t, n, r) {
                "function" == typeof n && (r = n,
                n = null);
                for (var o = t, i = [], a = !1; o.byteLength > 0; ) {
                    for (var s = new Uint8Array(o), c = 0 === s[0], l = "", u = 1; 255 != s[u]; u++) {
                        if (l.length > 310) {
                            a = !0;
                            break
                        }
                        l += s[u]
                    }
                    if (a)
                        return r(_, 0, 1);
                    o = d(o, 2 + l.length),
                    l = parseInt(l);
                    var p = d(o, 0, l);
                    if (c)
                        try {
                            p = String.fromCharCode.apply(null, new Uint8Array(p))
                        } catch (t) {
                            var h = new Uint8Array(p);
                            p = "";
                            for (var u = 0; u < h.length; u++)
                                p += String.fromCharCode(h[u])
                        }
                    i.push(p),
                    o = d(o, l)
                }
                var f = i.length;
                i.forEach(function(t, o) {
                    r(e.decodePacket(t, n, !0), o, f)
                })
            }
        }
        ).call(e, n(16))
    },
    78: function(t, e, n) {
        "use strict";
        function r(t) {
            return a["ɵvid"](0, [(t()(),
            a["ɵeld"](0, 0, null, null, 1, "div", [["class", "ps-content"]], null, null, null, null, null)), a["ɵncd"](null, 0), (t()(),
            a["ɵted"](-1, null, ["\n"]))], null, null)
        }
        function o(t) {
            return a["ɵvid"](0, [(t()(),
            a["ɵeld"](0, 0, null, null, 1, "perfect-scrollbar", [], null, null, null, r, u)), a["ɵdid"](1, 4636672, null, 0, s.PerfectScrollbarComponent, [a.ElementRef, [2, c.PerfectScrollbarConfig], a.NgZone], null, null)], function(t, e) {
                t(e, 1, 0)
            }, null)
        }
        var i = n(518)
          , a = n(2)
          , s = n(55)
          , c = (n.n(s),
        n(18));
        n.n(c);
        n.d(e, "b", function() {
            return u
        }),
        e.a = r;
        var l = [i.a]
          , u = a["ɵcrt"]({
            encapsulation: 2,
            styles: l,
            data: {}
        });
        a["ɵccf"]("perfect-scrollbar", s.PerfectScrollbarComponent, o, {
            runInsideAngular: "runInsideAngular",
            config: "config"
        }, {}, ["*"])
    },
    79: function(t, e, n) {
        "use strict";
        var r = n(2);
        n.d(e, "a", function() {
            return a
        });
        var o = this && this.__decorate || function(t, e, n, r) {
            var o, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
            return i > 3 && a && Object.defineProperty(e, n, a),
            a
        }
          , i = this && this.__metadata || function(t, e) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(t, e)
        }
          , a = function() {
            function t() {
                this.content = "",
                this.status = "info",
                this.state = "inactive",
                this.hideDelay = 5e3
            }
            return t.prototype.show = function() {
                var t = this;
                this.state = "active",
                this.delay = setTimeout(function() {
                    t.content = "",
                    t.state = "inactive"
                }, this.hideDelay)
            }
            ,
            t.prototype.hide = function() {
                clearTimeout(this.delay),
                this.content = "",
                this.state = "inactive"
            }
            ,
            t.prototype.ngOnChanges = function(t) {
                return t.content.currentValue.length > 0 ? this.show() : this.hide()
            }
            ,
            t.prototype.ngOnDestroy = function() {
                this.delay && clearTimeout(this.delay)
            }
            ,
            o([n.i(r.Input)(), i("design:type", String)], t.prototype, "content", void 0),
            o([n.i(r.Input)(), i("design:type", String)], t.prototype, "status", void 0),
            t = o([n.i(r.Component)({
                selector: "toast",
                template: '\n        <div class="toast-pandats" [@showPanel]="state" [ngClass]="status+\'-pandats\'" (click)="hide()" [hidden]="state!==\'active\'">\n            <div class="toast-content-pandats">{{content}}</div>\n            <div class="toast-close-pandats" (click)="hide()">X</div>\n        </div>',
                animations: [n.i(r.trigger)("showPanel", [n.i(r.state)("inactive", n.i(r.style)({
                    height: "0px",
                    opacity: "0"
                })), n.i(r.state)("active", n.i(r.style)({
                    height: "5rem",
                    opacity: "1"
                })), n.i(r.transition)("inactive <=> active", n.i(r.animate)(100))])]
            }), i("design:paramtypes", [])], t)
        }()
    },
    8: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(69);
        n.n(r);
        n.d(e, "stateService", function() {
            return i
        });
        var o = function() {
            function t() {
                this.subject = new r.Subject,
                this.channels = {},
                this.spreadMessages()
            }
            return t.prototype.spreadMessages = function() {
                var t = this;
                this.subject.do(function(e) {
                    return t.log(e)
                }).do(function(e) {
                    return t.createChannel(e.channel, e.message, e.once)
                }).subscribe(function(e) {
                    return t.channels[e.channel].next(e.message)
                }, function(e) {
                    return t.channels[e.channel].error(e.error)
                })
            }
            ,
            t.prototype.log = function(t) {}
            ,
            t.prototype.createChannel = function(t, e, n) {
                this.channels.hasOwnProperty(t) || (this.channels[t] = n ? new r.Subject : new r.BehaviorSubject(e || !1))
            }
            ,
            t.prototype.set = function(t, e) {
                return this.createChannel(t, e),
                this.subject.next({
                    channel: t,
                    message: e
                }),
                this.channels[t]
            }
            ,
            t.prototype.get = function(t) {
                return this.createChannel(t),
                this.channels[t]
            }
            ,
            t.prototype.setOnce = function(t, e) {
                return this.createChannel(t, e, !0),
                this.subject.next({
                    channel: t,
                    message: e,
                    once: !0
                }),
                this.channels[t]
            }
            ,
            t.prototype.setError = function(t, e) {
                this.subject.error({
                    channel: t,
                    error: e
                })
            }
            ,
            t.prototype.getOnce = function(t) {
                return this.createChannel(t, null, !0),
                this.channels[t]
            }
            ,
            t.prototype.getGlobalState = function() {
                var t = this
                  , e = {};
                return Object.keys(this.channels).forEach(function(n) {
                    e[n] = t.channels[n].getValue && t.channels[n].getValue()
                }),
                e
            }
            ,
            t.prototype.remove = function(t) {
                if (this.channels.hasOwnProperty(t))
                    try {
                        this.channels.hasOwnProperty(t).unsubscribe()
                    } catch (e) {
                        console.warn("fail to unsubscribe", t)
                    }
            }
            ,
            t
        }()
          , i = new o
    },
    80: function(t, e, n) {
        function r(t) {
            if (t)
                return o(t)
        }
        function o(t) {
            for (var e in r.prototype)
                t[e] = r.prototype[e];
            return t
        }
        t.exports = r,
        r.prototype.on = r.prototype.addEventListener = function(t, e) {
            return this._callbacks = this._callbacks || {},
            (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
            this
        }
        ,
        r.prototype.once = function(t, e) {
            function n() {
                this.off(t, n),
                e.apply(this, arguments)
            }
            return n.fn = e,
            this.on(t, n),
            this
        }
        ,
        r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) {
            if (this._callbacks = this._callbacks || {},
            0 == arguments.length)
                return this._callbacks = {},
                this;
            var n = this._callbacks["$" + t];
            if (!n)
                return this;
            if (1 == arguments.length)
                return delete this._callbacks["$" + t],
                this;
            for (var r, o = 0; o < n.length; o++)
                if ((r = n[o]) === e || r.fn === e) {
                    n.splice(o, 1);
                    break
                }
            return this
        }
        ,
        r.prototype.emit = function(t) {
            this._callbacks = this._callbacks || {};
            var e = [].slice.call(arguments, 1)
              , n = this._callbacks["$" + t];
            if (n) {
                n = n.slice(0);
                for (var r = 0, o = n.length; r < o; ++r)
                    n[r].apply(this, e)
            }
            return this
        }
        ,
        r.prototype.listeners = function(t) {
            return this._callbacks = this._callbacks || {},
            this._callbacks["$" + t] || []
        }
        ,
        r.prototype.hasListeners = function(t) {
            return !!this.listeners(t).length
        }
    },
    9: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        n.d(e, "Constants", function() {
            return r
        });
        var r = {
            currencySeparator: "",
            brandDomain: "equity",
            categories: [{
                id: "FAVORITES",
                name: "favorites",
                selected: !1,
                collapsed: !1
            }, {
                id: "FOREX",
                name: "forex",
                selected: !0,
                collapsed: !1
            }, {
                id: "CRYPTO",
                name: "crypto",
                selected: !1,
                collapsed: !1
            }, {
                id: "COMMODITIES",
                name: "commodities",
                selected: !1,
                collapsed: !1
            }, {
                id: "SHARES",
                name: "stocks",
                selected: !1,
                collapsed: !1
            }, {
                id: "INDICES",
                name: "indices",
                selected: !1,
                collapsed: !1
            }, {
                id: "METALS",
                name: "metals",
                selected: !1,
                collapsed: !1
            }, {
                id: "NSE",
                name: "nse",
                selected: !1,
                collapsed: !1
            }],
            actions: {
                buy: 0,
                sell: 1,
                buy_limit: 2,
                sell_limit: 3,
                buy_stop: 4,
                sell_stop: 5,
                balance: 6,
                credit: 7
            },
            actionsId: {
                0: "buy",
                1: "sell",
                2: "buy_limit",
                3: "sell_limit",
                4: "buy_stop",
                5: "sell_stop",
                6: "balance",
                7: "credit"
            },
            dateRanges: [{
                label: "1d",
                value: "day"
            }, {
                label: "3d",
                value: "threedays"
            }, {
                label: "1w",
                value: "week"
            }, {
                label: "1m",
                value: "month"
            }, {
                label: "3m",
                value: "threemonths"
            }, {
                label: "all",
                value: "all"
            }],
            defaultInvestAmount: 1e3,
            source: {
                demo: [0],
                live: [0],
                depositUrl: "",
                signupUrl: "",
                marketAnalysisUrl: ""
            },
            sourcesList: {
                dev: {
                    demo: [1, 3],
                    live: [2],
                    depositUrl: "",
                    signupLive: "",
                    marketAnalysisUrl: ""
                },
                equiti: {
                    demo: [69],
                    live: [72],
                    depositUrl: "https://portal.equiticlients.com",
                    signupLive: "https://app.equiticlients.com/live-account/#/step1",
                    signupDemo: "https://www.equiti-me.com/products/forex/forex-pricing/#open-demo-account",
                    marketAnalysisUrl: ""
                },
                "equiti-me": {
                    demo: [69],
                    live: [72],
                    depositUrl: "https://portal.equiticlients.com",
                    signupLive: "https://app.equiticlients.com/live-account/#/step1",
                    signupDemo: "https://www.equiti-me.com/products/forex/forex-pricing/#open-demo-account",
                    marketAnalysisUrl: ""
                },
                fxpesa: {
                    demo: [69],
                    live: [72],
                    depositUrl: "https://portal.fxpesa.com/#/auth/login",
                    logoWidth: "25em",
                    signupLive: "https://portal.fxpesa.com/live-application/#/step1",
                    signupDemo: "https://portal.fxpesa.com/demo-account/",
                    marketAnalysisUrl: ""
                },
                divisa: {
                    demo: [69],
                    live: [72],
                    depositUrl: "https://portal.equiticlients.com",
                    signupLive: "https://app.equiticlients.com/live-account/#/step1",
                    signupDemo: "https://www.equiti-me.com/products/forex/forex-pricing/#open-demo-account",
                    marketAnalysisUrl: ""
                }
            },
            tradingTabs: [{
                id: 1,
                name: "openTrades",
                selected: !0
            }, {
                id: 2,
                name: "pendingTrades",
                selected: !1
            }, {
                id: 3,
                name: "closedTrades",
                selected: !1
            }],
            chartTabs: [{
                id: 1,
                name: "chart",
                selected: !0
            }, {
                id: 2,
                name: "information",
                selected: !1
            }],
            chartWatermark: "PandaTS",
            chartTimeFrames: [{
                n: "1 Minute",
                id: "1M",
                f: 1,
                timeFrame: 1
            }, {
                n: "5 Minutes",
                id: "5M",
                f: 1,
                timeFrame: 5
            }, {
                n: "15 Minutes",
                id: "15M",
                f: 1,
                timeFrame: 15
            }, {
                n: "30 Minutes",
                id: "30M",
                f: 1,
                timeFrame: 30
            }, {
                n: "1 Hour",
                id: "60M",
                f: 1,
                timeFrame: 60
            }, {
                n: "4 Hours",
                id: "4H",
                f: 1,
                timeFrame: 240
            }, {
                n: "1 Day",
                id: "1D",
                f: 1,
                timeFrame: 1440
            }, {
                n: "1 Week",
                id: "1W",
                f: 1,
                timeFrame: 10080
            }, {
                n: "1 Month",
                id: "1N",
                f: 1,
                timeFrame: 43200
            }],
            regex: {
                onlyLatinCharacters: "^[a-zA-Z]+$",
                onlyLatinCharactersAndWhitespaces: "^[a-zA-Z\\s]+$",
                latinCharactersDigitsWhitespace: "^[a-zA-Z\\s0-9]+$",
                email: "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
                onlyDigits: "^[0-9]+$"
            },
            defaultCurrency: "USD",
            currencySymbols: {
                USD: "$",
                EUR: "€",
                GBP: "£",
                AUD: "A$",
                CAD: "C$",
                NZD: "NZ$",
                SGD: "$",
                JPY: "¥",
                RUB: "₽",
                TRY: "₺",
                CNY: "¥",
                BRL: "R$",
                CHF: "CHF"
            },
            symbolSubst: {
                hkd: "hk",
                afn: "af",
                all: "al",
                dzd: "dz",
                xcd: "ai",
                ars: "ar",
                amd: "am",
                ang: "aw",
                azn: "az",
                bsd: "bs",
                bhd: "bh",
                bdt: "bd",
                bbd: "bb",
                byr: "by",
                bzd: "bz",
                xof: "bj",
                bmd: "bm",
                inr: "bt",
                bob: "bo",
                bwp: "bw",
                nok: "bv",
                brl: "br",
                bnd: "bn",
                bgn: "bg",
                bif: "bi",
                khr: "kh",
                xaf: "cm",
                cve: "cv",
                kyd: "ky",
                clp: "cl",
                cny: "cn",
                cop: "co",
                kmf: "km",
                cdf: "cd",
                crc: "cr",
                hrk: "hr",
                cup: "cu",
                cyp: "cy",
                czk: "cz",
                dkk: "dk",
                djf: "dj",
                dop: "do",
                idr: "tp",
                ecs: "ec",
                egp: "eg",
                svc: "sv",
                etb: "er",
                eek: "ee",
                fkp: "fk",
                fjd: "fj",
                xpf: "pf",
                gmd: "gm",
                gel: "ge",
                gip: "gi",
                gtq: "gt",
                gnf: "gn",
                gyd: "gy",
                htg: "ht",
                hnl: "hn",
                huf: "hu",
                isk: "is",
                irr: "ir",
                iqd: "iq",
                ils: "il",
                jmd: "jm",
                jod: "jo",
                kzt: "kz",
                kes: "ke",
                kpw: "kp",
                krw: "kr",
                kwd: "kw",
                kgs: "kg",
                lak: "la",
                lvl: "lv",
                lbp: "lb",
                lsl: "ls",
                lrd: "lr",
                lyd: "ly",
                ltl: "lt",
                mop: "mo",
                mkd: "mk",
                mga: "mg",
                mwk: "mw",
                myr: "my",
                mvr: "mv",
                mtl: "mt",
                mro: "mr",
                mur: "mu",
                mxn: "mx",
                mdl: "md",
                mnt: "mn",
                mad: "ma",
                mzn: "mz",
                mmk: "mm",
                nad: "na",
                npr: "np",
                nio: "ni",
                ngn: "ng",
                omr: "om",
                pkr: "pk",
                pab: "pa",
                pgk: "pg",
                pyg: "py",
                pen: "pe",
                php: "ph",
                pln: "pl",
                qar: "qa",
                ron: "ro",
                rub: "ru",
                rwf: "rw",
                std: "st",
                sar: "sa",
                scr: "sc",
                sll: "sl",
                sgd: "sg",
                skk: "sk",
                sbd: "sb",
                sos: "so",
                zar: "za",
                lkr: "lk",
                sdg: "sd",
                srd: "sr",
                szl: "sz",
                sek: "se",
                syp: "sy",
                twd: "tw",
                tjs: "tj",
                tzs: "tz",
                thb: "th",
                top: "to",
                ttd: "tt",
                tnd: "tn",
                try: "try",
                tmt: "tm",
                ugx: "ug",
                uah: "ua",
                aed: "ae",
                uyu: "uy",
                uzs: "uz",
                vuv: "vu",
                vef: "ve",
                vnd: "vn",
                yer: "ye",
                zmk: "zm",
                zwd: "zw",
                aoa: "ao",
                aqd: "aq",
                bam: "ba",
                ghs: "gh",
                ggp: "gg",
                rsd: "rs"
            },
            assetSubst: {
                pg: "pcg",
                hm: "hnm",
                ma: "mcard",
                gm: "gmotors",
                pm: "pmi",
                "dj euro": "eurex"
            },
            error: {
                type: {
                    VALIDATION: 0,
                    SYSTEM: 1,
                    NETWORK: 2
                },
                typeById: {
                    0: "validation",
                    1: "system",
                    2: "network"
                }
            },
            daysOfWeek: {
                0: "sun",
                1: "mon",
                2: "tue",
                3: "wed",
                4: "thu",
                5: "fri",
                6: "sat"
            },
            loginStatus: {
                notLoggedIn: 0,
                fakeLoggedIn: 1,
                loggedIn: 2
            },
            amountSteps: [{
                label: "0.01",
                value: "0.01"
            }, {
                label: "0.02",
                value: "0.02"
            }, {
                label: "0.03",
                value: "0.03"
            }, {
                label: "0.04",
                value: "0.04"
            }, {
                label: "0.05",
                value: "0.05"
            }, {
                label: "0.06",
                value: "0.06"
            }, {
                label: "0.07",
                value: "0.07"
            }, {
                label: "0.08",
                value: "0.08"
            }, {
                label: "0.09",
                value: "0.09"
            }, {
                label: "0.1",
                value: "0.1"
            }, {
                label: "1",
                value: "1"
            }, {
                label: "2",
                value: "2"
            }, {
                label: "3",
                value: "3"
            }, {
                label: "4",
                value: "4"
            }, {
                label: "5",
                value: "5"
            }, {
                label: "6",
                value: "6"
            }, {
                label: "7",
                value: "7"
            }, {
                label: "8",
                value: "8"
            }, {
                label: "9",
                value: "9"
            }, {
                label: "10",
                value: "10"
            }],
            userState: {
                initial: 1,
                personal: 2,
                questionnaire: 3
            },
            depositMultipliers: [1, 2.5, 2, 2, 2.5, 2]
        }
    },
    936: function(t, e, n) {
        function r(t, e) {
            "object" == typeof t && (e = t,
            t = void 0),
            e = e || {};
            var n, r = i(t), a = r.source, u = r.id, p = r.path, d = l[u] && p in l[u].nsps, h = e.forceNew || e["force new connection"] || !1 === e.multiplex || d;
            return h ? (c("ignoring socket cache for %s", a),
            n = s(a, e)) : (l[u] || (c("new io instance for %s", a),
            l[u] = s(a, e)),
            n = l[u]),
            r.query && !e.query ? e.query = r.query : e && "object" == typeof e.query && (e.query = o(e.query)),
            n.socket(r.path, e)
        }
        function o(t) {
            var e = [];
            for (var n in t)
                t.hasOwnProperty(n) && e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
            return e.join("&")
        }
        var i = n(937)
          , a = n(192)
          , s = n(474)
          , c = n(128)("socket.io-client");
        t.exports = e = r;
        var l = e.managers = {};
        e.protocol = a.protocol,
        e.connect = r,
        e.Manager = n(474),
        e.Socket = n(476)
    },
    937: function(t, e, n) {
        (function(e) {
            function r(t, n) {
                var r = t;
                n = n || e.location,
                null == t && (t = n.protocol + "//" + n.host),
                "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? n.protocol + t : n.host + t),
                /^(https?|wss?):\/\//.test(t) || (i("protocol-less url %s", t),
                t = void 0 !== n ? n.protocol + "//" + t : "https://" + t),
                i("parse %s", t),
                r = o(t)),
                r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
                r.path = r.path || "/";
                var a = -1 !== r.host.indexOf(":")
                  , s = a ? "[" + r.host + "]" : r.host;
                return r.id = r.protocol + "://" + s + ":" + r.port,
                r.href = r.protocol + "://" + s + (n && n.port === r.port ? "" : ":" + r.port),
                r
            }
            var o = n(361)
              , i = n(128)("socket.io-client:url");
            t.exports = r
        }
        ).call(e, n(16))
    },
    938: function(t, e, n) {
        function r() {
            return e.colors[u++ % e.colors.length]
        }
        function o(t) {
            function n() {}
            function o() {
                var t = o
                  , n = +new Date
                  , i = n - (l || n);
                t.diff = i,
                t.prev = l,
                t.curr = n,
                l = n,
                null == t.useColors && (t.useColors = e.useColors()),
                null == t.color && t.useColors && (t.color = r());
                for (var a = new Array(arguments.length), s = 0; s < a.length; s++)
                    a[s] = arguments[s];
                a[0] = e.coerce(a[0]),
                "string" != typeof a[0] && (a = ["%o"].concat(a));
                var c = 0;
                a[0] = a[0].replace(/%([a-z%])/g, function(n, r) {
                    if ("%%" === n)
                        return n;
                    c++;
                    var o = e.formatters[r];
                    if ("function" == typeof o) {
                        var i = a[c];
                        n = o.call(t, i),
                        a.splice(c, 1),
                        c--
                    }
                    return n
                }),
                a = e.formatArgs.apply(t, a),
                (o.log || e.log || console.log.bind(console)).apply(t, a)
            }
            n.enabled = !1,
            o.enabled = !0;
            var i = e.enabled(t) ? o : n;
            return i.namespace = t,
            i
        }
        function i(t) {
            e.save(t);
            for (var n = (t || "").split(/[\s,]+/), r = n.length, o = 0; o < r; o++)
                n[o] && (t = n[o].replace(/[\\^$+?.()|[\]{}]/g, "\\$&").replace(/\*/g, ".*?"),
                "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")))
        }
        function a() {
            e.enable("")
        }
        function s(t) {
            var n, r;
            for (n = 0,
            r = e.skips.length; n < r; n++)
                if (e.skips[n].test(t))
                    return !1;
            for (n = 0,
            r = e.names.length; n < r; n++)
                if (e.names[n].test(t))
                    return !0;
            return !1
        }
        function c(t) {
            return t instanceof Error ? t.stack || t.message : t
        }
        e = t.exports = o.debug = o,
        e.coerce = c,
        e.disable = a,
        e.enable = i,
        e.enabled = s,
        e.humanize = n(939),
        e.names = [],
        e.skips = [],
        e.formatters = {};
        var l, u = 0
    },
    939: function(t, e) {
        function n(t) {
            if (t = String(t),
            !(t.length > 1e4)) {
                var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
                if (e) {
                    var n = parseFloat(e[1]);
                    switch ((e[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return n * u;
                    case "days":
                    case "day":
                    case "d":
                        return n * l;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return n * c;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return n * s;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return n * a;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return n;
                    default:
                        return
                    }
                }
            }
        }
        function r(t) {
            return t >= l ? Math.round(t / l) + "d" : t >= c ? Math.round(t / c) + "h" : t >= s ? Math.round(t / s) + "m" : t >= a ? Math.round(t / a) + "s" : t + "ms"
        }
        function o(t) {
            return i(t, l, "day") || i(t, c, "hour") || i(t, s, "minute") || i(t, a, "second") || t + " ms"
        }
        function i(t, e, n) {
            if (!(t < e))
                return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
        }
        var a = 1e3
          , s = 60 * a
          , c = 60 * s
          , l = 24 * c
          , u = 365.25 * l;
        t.exports = function(t, e) {
            e = e || {};
            var i = typeof t;
            if ("string" === i && t.length > 0)
                return n(t);
            if ("number" === i && !1 === isNaN(t))
                return e.long ? o(t) : r(t);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
        }
    },
    940: function(t, e, n) {
        (function(t) {
            var r = n(944)
              , o = n(477);
            e.deconstructPacket = function(t) {
                function e(t) {
                    if (!t)
                        return t;
                    if (o(t)) {
                        var i = {
                            _placeholder: !0,
                            num: n.length
                        };
                        return n.push(t),
                        i
                    }
                    if (r(t)) {
                        for (var a = new Array(t.length), s = 0; s < t.length; s++)
                            a[s] = e(t[s]);
                        return a
                    }
                    if ("object" == typeof t && !(t instanceof Date)) {
                        var a = {};
                        for (var c in t)
                            a[c] = e(t[c]);
                        return a
                    }
                    return t
                }
                var n = []
                  , i = t.data
                  , a = t;
                return a.data = e(i),
                a.attachments = n.length,
                {
                    packet: a,
                    buffers: n
                }
            }
            ,
            e.reconstructPacket = function(t, e) {
                function n(t) {
                    if (t && t._placeholder) {
                        return e[t.num]
                    }
                    if (r(t)) {
                        for (var o = 0; o < t.length; o++)
                            t[o] = n(t[o]);
                        return t
                    }
                    if (t && "object" == typeof t) {
                        for (var i in t)
                            t[i] = n(t[i]);
                        return t
                    }
                    return t
                }
                return t.data = n(t.data),
                t.attachments = void 0,
                t
            }
            ,
            e.removeBlobs = function(e, n) {
                function i(e, c, l) {
                    if (!e)
                        return e;
                    if (t.Blob && e instanceof Blob || t.File && e instanceof File) {
                        a++;
                        var u = new FileReader;
                        u.onload = function() {
                            l ? l[c] = this.result : s = this.result,
                            --a || n(s)
                        }
                        ,
                        u.readAsArrayBuffer(e)
                    } else if (r(e))
                        for (var p = 0; p < e.length; p++)
                            i(e[p], p, e);
                    else if (e && "object" == typeof e && !o(e))
                        for (var d in e)
                            i(e[d], d, e)
                }
                var a = 0
                  , s = e;
                i(s),
                a || n(s)
            }
        }
        ).call(e, n(16))
    },
    941: function(t, e) {
        function n(t) {
            if (t)
                return r(t)
        }
        function r(t) {
            for (var e in n.prototype)
                t[e] = n.prototype[e];
            return t
        }
        t.exports = n,
        n.prototype.on = n.prototype.addEventListener = function(t, e) {
            return this._callbacks = this._callbacks || {},
            (this._callbacks[t] = this._callbacks[t] || []).push(e),
            this
        }
        ,
        n.prototype.once = function(t, e) {
            function n() {
                r.off(t, n),
                e.apply(this, arguments)
            }
            var r = this;
            return this._callbacks = this._callbacks || {},
            n.fn = e,
            this.on(t, n),
            this
        }
        ,
        n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(t, e) {
            if (this._callbacks = this._callbacks || {},
            0 == arguments.length)
                return this._callbacks = {},
                this;
            var n = this._callbacks[t];
            if (!n)
                return this;
            if (1 == arguments.length)
                return delete this._callbacks[t],
                this;
            for (var r, o = 0; o < n.length; o++)
                if ((r = n[o]) === e || r.fn === e) {
                    n.splice(o, 1);
                    break
                }
            return this
        }
        ,
        n.prototype.emit = function(t) {
            this._callbacks = this._callbacks || {};
            var e = [].slice.call(arguments, 1)
              , n = this._callbacks[t];
            if (n) {
                n = n.slice(0);
                for (var r = 0, o = n.length; r < o; ++r)
                    n[r].apply(this, e)
            }
            return this
        }
        ,
        n.prototype.listeners = function(t) {
            return this._callbacks = this._callbacks || {},
            this._callbacks[t] || []
        }
        ,
        n.prototype.hasListeners = function(t) {
            return !!this.listeners(t).length
        }
    },
    942: function(t, e, n) {
        function r() {
            return "WebkitAppearance"in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
        }
        function o() {
            var t = arguments
              , n = this.useColors;
            if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff),
            !n)
                return t;
            var r = "color: " + this.color;
            t = [t[0], r, "color: inherit"].concat(Array.prototype.slice.call(t, 1));
            var o = 0
              , i = 0;
            return t[0].replace(/%[a-z%]/g, function(t) {
                "%%" !== t && (o++,
                "%c" === t && (i = o))
            }),
            t.splice(i, 0, r),
            t
        }
        function i() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }
        function a(t) {
            try {
                null == t ? e.storage.removeItem("debug") : e.storage.debug = t
            } catch (t) {}
        }
        function s() {
            var t;
            try {
                t = e.storage.debug
            } catch (t) {}
            return t
        }
        function c() {
            try {
                return window.localStorage
            } catch (t) {}
        }
        e = t.exports = n(943),
        e.log = i,
        e.formatArgs = o,
        e.save = a,
        e.load = s,
        e.useColors = r,
        e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : c(),
        e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"],
        e.formatters.j = function(t) {
            return JSON.stringify(t)
        }
        ,
        e.enable(s())
    },
    943: function(t, e, n) {
        function r() {
            return e.colors[u++ % e.colors.length]
        }
        function o(t) {
            function n() {}
            function o() {
                var t = o
                  , n = +new Date
                  , i = n - (l || n);
                t.diff = i,
                t.prev = l,
                t.curr = n,
                l = n,
                null == t.useColors && (t.useColors = e.useColors()),
                null == t.color && t.useColors && (t.color = r());
                var a = Array.prototype.slice.call(arguments);
                a[0] = e.coerce(a[0]),
                "string" != typeof a[0] && (a = ["%o"].concat(a));
                var s = 0;
                a[0] = a[0].replace(/%([a-z%])/g, function(n, r) {
                    if ("%%" === n)
                        return n;
                    s++;
                    var o = e.formatters[r];
                    if ("function" == typeof o) {
                        var i = a[s];
                        n = o.call(t, i),
                        a.splice(s, 1),
                        s--
                    }
                    return n
                }),
                "function" == typeof e.formatArgs && (a = e.formatArgs.apply(t, a)),
                (o.log || e.log || console.log.bind(console)).apply(t, a)
            }
            n.enabled = !1,
            o.enabled = !0;
            var i = e.enabled(t) ? o : n;
            return i.namespace = t,
            i
        }
        function i(t) {
            e.save(t);
            for (var n = (t || "").split(/[\s,]+/), r = n.length, o = 0; o < r; o++)
                n[o] && (t = n[o].replace(/\*/g, ".*?"),
                "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")))
        }
        function a() {
            e.enable("")
        }
        function s(t) {
            var n, r;
            for (n = 0,
            r = e.skips.length; n < r; n++)
                if (e.skips[n].test(t))
                    return !1;
            for (n = 0,
            r = e.names.length; n < r; n++)
                if (e.names[n].test(t))
                    return !0;
            return !1
        }
        function c(t) {
            return t instanceof Error ? t.stack || t.message : t
        }
        e = t.exports = o,
        e.coerce = c,
        e.disable = a,
        e.enable = i,
        e.enabled = s,
        e.humanize = n(945),
        e.names = [],
        e.skips = [],
        e.formatters = {};
        var l, u = 0
    },
    944: function(t, e) {
        t.exports = Array.isArray || function(t) {
            return "[object Array]" == Object.prototype.toString.call(t)
        }
    },
    945: function(t, e) {
        function n(t) {
            if (t = "" + t,
            !(t.length > 1e4)) {
                var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
                if (e) {
                    var n = parseFloat(e[1]);
                    switch ((e[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return n * u;
                    case "days":
                    case "day":
                    case "d":
                        return n * l;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return n * c;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return n * s;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return n * a;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return n
                    }
                }
            }
        }
        function r(t) {
            return t >= l ? Math.round(t / l) + "d" : t >= c ? Math.round(t / c) + "h" : t >= s ? Math.round(t / s) + "m" : t >= a ? Math.round(t / a) + "s" : t + "ms"
        }
        function o(t) {
            return i(t, l, "day") || i(t, c, "hour") || i(t, s, "minute") || i(t, a, "second") || t + " ms"
        }
        function i(t, e, n) {
            if (!(t < e))
                return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
        }
        var a = 1e3
          , s = 60 * a
          , c = 60 * s
          , l = 24 * c
          , u = 365.25 * l;
        t.exports = function(t, e) {
            return e = e || {},
            "string" == typeof t ? n(t) : e.long ? o(t) : r(t)
        }
    },
    946: function(t, e) {
        function n(t, e) {
            var n = [];
            e = e || 0;
            for (var r = e || 0; r < t.length; r++)
                n[r - e] = t[r];
            return n
        }
        t.exports = n
    },
    947: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
            function t() {
                this._state = new Int32Array(4),
                this._buffer = new ArrayBuffer(68),
                this._buffer8 = new Uint8Array(this._buffer,0,68),
                this._buffer32 = new Uint32Array(this._buffer,0,17),
                this.start()
            }
            return t.hashStr = function(t, e) {
                return void 0 === e && (e = !1),
                this.onePassHasher.start().appendStr(t).end(e)
            }
            ,
            t.hashAsciiStr = function(t, e) {
                return void 0 === e && (e = !1),
                this.onePassHasher.start().appendAsciiStr(t).end(e)
            }
            ,
            t._hex = function(e) {
                var n, r, o, i, a = t.hexChars, s = t.hexOut;
                for (i = 0; i < 4; i += 1)
                    for (r = 8 * i,
                    n = e[i],
                    o = 0; o < 8; o += 2)
                        s[r + 1 + o] = a.charAt(15 & n),
                        n >>>= 4,
                        s[r + 0 + o] = a.charAt(15 & n),
                        n >>>= 4;
                return s.join("")
            }
            ,
            t._md5cycle = function(t, e) {
                var n = t[0]
                  , r = t[1]
                  , o = t[2]
                  , i = t[3];
                n += (r & o | ~r & i) + e[0] - 680876936 | 0,
                n = (n << 7 | n >>> 25) + r | 0,
                i += (n & r | ~n & o) + e[1] - 389564586 | 0,
                i = (i << 12 | i >>> 20) + n | 0,
                o += (i & n | ~i & r) + e[2] + 606105819 | 0,
                o = (o << 17 | o >>> 15) + i | 0,
                r += (o & i | ~o & n) + e[3] - 1044525330 | 0,
                r = (r << 22 | r >>> 10) + o | 0,
                n += (r & o | ~r & i) + e[4] - 176418897 | 0,
                n = (n << 7 | n >>> 25) + r | 0,
                i += (n & r | ~n & o) + e[5] + 1200080426 | 0,
                i = (i << 12 | i >>> 20) + n | 0,
                o += (i & n | ~i & r) + e[6] - 1473231341 | 0,
                o = (o << 17 | o >>> 15) + i | 0,
                r += (o & i | ~o & n) + e[7] - 45705983 | 0,
                r = (r << 22 | r >>> 10) + o | 0,
                n += (r & o | ~r & i) + e[8] + 1770035416 | 0,
                n = (n << 7 | n >>> 25) + r | 0,
                i += (n & r | ~n & o) + e[9] - 1958414417 | 0,
                i = (i << 12 | i >>> 20) + n | 0,
                o += (i & n | ~i & r) + e[10] - 42063 | 0,
                o = (o << 17 | o >>> 15) + i | 0,
                r += (o & i | ~o & n) + e[11] - 1990404162 | 0,
                r = (r << 22 | r >>> 10) + o | 0,
                n += (r & o | ~r & i) + e[12] + 1804603682 | 0,
                n = (n << 7 | n >>> 25) + r | 0,
                i += (n & r | ~n & o) + e[13] - 40341101 | 0,
                i = (i << 12 | i >>> 20) + n | 0,
                o += (i & n | ~i & r) + e[14] - 1502002290 | 0,
                o = (o << 17 | o >>> 15) + i | 0,
                r += (o & i | ~o & n) + e[15] + 1236535329 | 0,
                r = (r << 22 | r >>> 10) + o | 0,
                n += (r & i | o & ~i) + e[1] - 165796510 | 0,
                n = (n << 5 | n >>> 27) + r | 0,
                i += (n & o | r & ~o) + e[6] - 1069501632 | 0,
                i = (i << 9 | i >>> 23) + n | 0,
                o += (i & r | n & ~r) + e[11] + 643717713 | 0,
                o = (o << 14 | o >>> 18) + i | 0,
                r += (o & n | i & ~n) + e[0] - 373897302 | 0,
                r = (r << 20 | r >>> 12) + o | 0,
                n += (r & i | o & ~i) + e[5] - 701558691 | 0,
                n = (n << 5 | n >>> 27) + r | 0,
                i += (n & o | r & ~o) + e[10] + 38016083 | 0,
                i = (i << 9 | i >>> 23) + n | 0,
                o += (i & r | n & ~r) + e[15] - 660478335 | 0,
                o = (o << 14 | o >>> 18) + i | 0,
                r += (o & n | i & ~n) + e[4] - 405537848 | 0,
                r = (r << 20 | r >>> 12) + o | 0,
                n += (r & i | o & ~i) + e[9] + 568446438 | 0,
                n = (n << 5 | n >>> 27) + r | 0,
                i += (n & o | r & ~o) + e[14] - 1019803690 | 0,
                i = (i << 9 | i >>> 23) + n | 0,
                o += (i & r | n & ~r) + e[3] - 187363961 | 0,
                o = (o << 14 | o >>> 18) + i | 0,
                r += (o & n | i & ~n) + e[8] + 1163531501 | 0,
                r = (r << 20 | r >>> 12) + o | 0,
                n += (r & i | o & ~i) + e[13] - 1444681467 | 0,
                n = (n << 5 | n >>> 27) + r | 0,
                i += (n & o | r & ~o) + e[2] - 51403784 | 0,
                i = (i << 9 | i >>> 23) + n | 0,
                o += (i & r | n & ~r) + e[7] + 1735328473 | 0,
                o = (o << 14 | o >>> 18) + i | 0,
                r += (o & n | i & ~n) + e[12] - 1926607734 | 0,
                r = (r << 20 | r >>> 12) + o | 0,
                n += (r ^ o ^ i) + e[5] - 378558 | 0,
                n = (n << 4 | n >>> 28) + r | 0,
                i += (n ^ r ^ o) + e[8] - 2022574463 | 0,
                i = (i << 11 | i >>> 21) + n | 0,
                o += (i ^ n ^ r) + e[11] + 1839030562 | 0,
                o = (o << 16 | o >>> 16) + i | 0,
                r += (o ^ i ^ n) + e[14] - 35309556 | 0,
                r = (r << 23 | r >>> 9) + o | 0,
                n += (r ^ o ^ i) + e[1] - 1530992060 | 0,
                n = (n << 4 | n >>> 28) + r | 0,
                i += (n ^ r ^ o) + e[4] + 1272893353 | 0,
                i = (i << 11 | i >>> 21) + n | 0,
                o += (i ^ n ^ r) + e[7] - 155497632 | 0,
                o = (o << 16 | o >>> 16) + i | 0,
                r += (o ^ i ^ n) + e[10] - 1094730640 | 0,
                r = (r << 23 | r >>> 9) + o | 0,
                n += (r ^ o ^ i) + e[13] + 681279174 | 0,
                n = (n << 4 | n >>> 28) + r | 0,
                i += (n ^ r ^ o) + e[0] - 358537222 | 0,
                i = (i << 11 | i >>> 21) + n | 0,
                o += (i ^ n ^ r) + e[3] - 722521979 | 0,
                o = (o << 16 | o >>> 16) + i | 0,
                r += (o ^ i ^ n) + e[6] + 76029189 | 0,
                r = (r << 23 | r >>> 9) + o | 0,
                n += (r ^ o ^ i) + e[9] - 640364487 | 0,
                n = (n << 4 | n >>> 28) + r | 0,
                i += (n ^ r ^ o) + e[12] - 421815835 | 0,
                i = (i << 11 | i >>> 21) + n | 0,
                o += (i ^ n ^ r) + e[15] + 530742520 | 0,
                o = (o << 16 | o >>> 16) + i | 0,
                r += (o ^ i ^ n) + e[2] - 995338651 | 0,
                r = (r << 23 | r >>> 9) + o | 0,
                n += (o ^ (r | ~i)) + e[0] - 198630844 | 0,
                n = (n << 6 | n >>> 26) + r | 0,
                i += (r ^ (n | ~o)) + e[7] + 1126891415 | 0,
                i = (i << 10 | i >>> 22) + n | 0,
                o += (n ^ (i | ~r)) + e[14] - 1416354905 | 0,
                o = (o << 15 | o >>> 17) + i | 0,
                r += (i ^ (o | ~n)) + e[5] - 57434055 | 0,
                r = (r << 21 | r >>> 11) + o | 0,
                n += (o ^ (r | ~i)) + e[12] + 1700485571 | 0,
                n = (n << 6 | n >>> 26) + r | 0,
                i += (r ^ (n | ~o)) + e[3] - 1894986606 | 0,
                i = (i << 10 | i >>> 22) + n | 0,
                o += (n ^ (i | ~r)) + e[10] - 1051523 | 0,
                o = (o << 15 | o >>> 17) + i | 0,
                r += (i ^ (o | ~n)) + e[1] - 2054922799 | 0,
                r = (r << 21 | r >>> 11) + o | 0,
                n += (o ^ (r | ~i)) + e[8] + 1873313359 | 0,
                n = (n << 6 | n >>> 26) + r | 0,
                i += (r ^ (n | ~o)) + e[15] - 30611744 | 0,
                i = (i << 10 | i >>> 22) + n | 0,
                o += (n ^ (i | ~r)) + e[6] - 1560198380 | 0,
                o = (o << 15 | o >>> 17) + i | 0,
                r += (i ^ (o | ~n)) + e[13] + 1309151649 | 0,
                r = (r << 21 | r >>> 11) + o | 0,
                n += (o ^ (r | ~i)) + e[4] - 145523070 | 0,
                n = (n << 6 | n >>> 26) + r | 0,
                i += (r ^ (n | ~o)) + e[11] - 1120210379 | 0,
                i = (i << 10 | i >>> 22) + n | 0,
                o += (n ^ (i | ~r)) + e[2] + 718787259 | 0,
                o = (o << 15 | o >>> 17) + i | 0,
                r += (i ^ (o | ~n)) + e[9] - 343485551 | 0,
                r = (r << 21 | r >>> 11) + o | 0,
                t[0] = n + t[0] | 0,
                t[1] = r + t[1] | 0,
                t[2] = o + t[2] | 0,
                t[3] = i + t[3] | 0
            }
            ,
            t.prototype.start = function() {
                return this._dataLength = 0,
                this._bufferLength = 0,
                this._state.set(t.stateIdentity),
                this
            }
            ,
            t.prototype.appendStr = function(e) {
                var n, r, o = this._buffer8, i = this._buffer32, a = this._bufferLength;
                for (r = 0; r < e.length; r += 1) {
                    if ((n = e.charCodeAt(r)) < 128)
                        o[a++] = n;
                    else if (n < 2048)
                        o[a++] = 192 + (n >>> 6),
                        o[a++] = 63 & n | 128;
                    else if (n < 55296 || n > 56319)
                        o[a++] = 224 + (n >>> 12),
                        o[a++] = n >>> 6 & 63 | 128,
                        o[a++] = 63 & n | 128;
                    else {
                        if ((n = 1024 * (n - 55296) + (e.charCodeAt(++r) - 56320) + 65536) > 1114111)
                            throw new Error("Unicode standard supports code points up to U+10FFFF");
                        o[a++] = 240 + (n >>> 18),
                        o[a++] = n >>> 12 & 63 | 128,
                        o[a++] = n >>> 6 & 63 | 128,
                        o[a++] = 63 & n | 128
                    }
                    a >= 64 && (this._dataLength += 64,
                    t._md5cycle(this._state, i),
                    a -= 64,
                    i[0] = i[16])
                }
                return this._bufferLength = a,
                this
            }
            ,
            t.prototype.appendAsciiStr = function(e) {
                for (var n, r = this._buffer8, o = this._buffer32, i = this._bufferLength, a = 0; ; ) {
                    for (n = Math.min(e.length - a, 64 - i); n--; )
                        r[i++] = e.charCodeAt(a++);
                    if (i < 64)
                        break;
                    this._dataLength += 64,
                    t._md5cycle(this._state, o),
                    i = 0
                }
                return this._bufferLength = i,
                this
            }
            ,
            t.prototype.appendByteArray = function(e) {
                for (var n, r = this._buffer8, o = this._buffer32, i = this._bufferLength, a = 0; ; ) {
                    for (n = Math.min(e.length - a, 64 - i); n--; )
                        r[i++] = e[a++];
                    if (i < 64)
                        break;
                    this._dataLength += 64,
                    t._md5cycle(this._state, o),
                    i = 0
                }
                return this._bufferLength = i,
                this
            }
            ,
            t.prototype.getState = function() {
                var t = this
                  , e = t._state;
                return {
                    buffer: String.fromCharCode.apply(null, t._buffer8),
                    buflen: t._bufferLength,
                    length: t._dataLength,
                    state: [e[0], e[1], e[2], e[3]]
                }
            }
            ,
            t.prototype.setState = function(t) {
                var e, n = t.buffer, r = t.state, o = this._state;
                for (this._dataLength = t.length,
                this._bufferLength = t.buflen,
                o[0] = r[0],
                o[1] = r[1],
                o[2] = r[2],
                o[3] = r[3],
                e = 0; e < n.length; e += 1)
                    this._buffer8[e] = n.charCodeAt(e)
            }
            ,
            t.prototype.end = function(e) {
                void 0 === e && (e = !1);
                var n, r = this._bufferLength, o = this._buffer8, i = this._buffer32, a = 1 + (r >> 2);
                if (this._dataLength += r,
                o[r] = 128,
                o[r + 1] = o[r + 2] = o[r + 3] = 0,
                i.set(t.buffer32Identity.subarray(a), a),
                r > 55 && (t._md5cycle(this._state, i),
                i.set(t.buffer32Identity)),
                (n = 8 * this._dataLength) <= 4294967295)
                    i[14] = n;
                else {
                    var s = n.toString(16).match(/(.*?)(.{0,8})$/);
                    if (null === s)
                        return;
                    var c = parseInt(s[2], 16)
                      , l = parseInt(s[1], 16) || 0;
                    i[14] = c,
                    i[15] = l
                }
                return t._md5cycle(this._state, i),
                e ? this._state : t._hex(this._state)
            }
            ,
            t.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]),
            t.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
            t.hexChars = "0123456789abcdef",
            t.hexOut = [],
            t.onePassHasher = new t,
            t
        }();
        e.Md5 = r,
        "5d41402abc4b2a76b9719d911017c592" !== r.hashStr("hello") && console.error("Md5 self test failed.")
    },
    949: function(t, e) {
        (function(e) {
            t.exports = e
        }
        ).call(e, {})
    },
    950: function(t, e, n) {
        (function(t, r) {
            var o;
            !function(i) {
                function a(t) {
                    for (var e, n, r = [], o = 0, i = t.length; o < i; )
                        e = t.charCodeAt(o++),
                        e >= 55296 && e <= 56319 && o < i ? (n = t.charCodeAt(o++),
                        56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e),
                        o--)) : r.push(e);
                    return r
                }
                function s(t) {
                    for (var e, n = t.length, r = -1, o = ""; ++r < n; )
                        e = t[r],
                        e > 65535 && (e -= 65536,
                        o += b(e >>> 10 & 1023 | 55296),
                        e = 56320 | 1023 & e),
                        o += b(e);
                    return o
                }
                function c(t, e) {
                    return b(t >> e & 63 | 128)
                }
                function l(t) {
                    if (0 == (4294967168 & t))
                        return b(t);
                    var e = "";
                    return 0 == (4294965248 & t) ? e = b(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (e = b(t >> 12 & 15 | 224),
                    e += c(t, 6)) : 0 == (4292870144 & t) && (e = b(t >> 18 & 7 | 240),
                    e += c(t, 12),
                    e += c(t, 6)),
                    e += b(63 & t | 128)
                }
                function u(t) {
                    for (var e, n = a(t), r = n.length, o = -1, i = ""; ++o < r; )
                        e = n[o],
                        i += l(e);
                    return i
                }
                function p() {
                    if (v >= g)
                        throw Error("Invalid byte index");
                    var t = 255 & m[v];
                    if (v++,
                    128 == (192 & t))
                        return 63 & t;
                    throw Error("Invalid continuation byte")
                }
                function d() {
                    var t, e, n, r, o;
                    if (v > g)
                        throw Error("Invalid byte index");
                    if (v == g)
                        return !1;
                    if (t = 255 & m[v],
                    v++,
                    0 == (128 & t))
                        return t;
                    if (192 == (224 & t)) {
                        var e = p();
                        if ((o = (31 & t) << 6 | e) >= 128)
                            return o;
                        throw Error("Invalid continuation byte")
                    }
                    if (224 == (240 & t)) {
                        if (e = p(),
                        n = p(),
                        (o = (15 & t) << 12 | e << 6 | n) >= 2048)
                            return o;
                        throw Error("Invalid continuation byte")
                    }
                    if (240 == (248 & t) && (e = p(),
                    n = p(),
                    r = p(),
                    (o = (15 & t) << 18 | e << 12 | n << 6 | r) >= 65536 && o <= 1114111))
                        return o;
                    throw Error("Invalid WTF-8 detected")
                }
                function h(t) {
                    m = a(t),
                    g = m.length,
                    v = 0;
                    for (var e, n = []; !1 !== (e = d()); )
                        n.push(e);
                    return s(n)
                }
                var f = "object" == typeof e && e
                  , y = ("object" == typeof t && t && t.exports,
                "object" == typeof r && r);
                y.global !== y && y.window;
                var m, g, v, b = String.fromCharCode, _ = {
                    version: "1.0.0",
                    encode: u,
                    decode: h
                };
                void 0 !== (o = function() {
                    return _
                }
                .call(e, n, e, t)) && (t.exports = o)
            }()
        }
        ).call(e, n(129)(t), n(16))
    },
    952: function(t, e) {},
    963: function(t, e, n) {
        n(25),
        n(8),
        n(62),
        n(9),
        n(39),
        n(27),
        n(33),
        n(63),
        n(195),
        n(492),
        n(71),
        n(11),
        n(15),
        n(44),
        n(194),
        t.exports = n(17)
    }
}, [963]);
