webpackJsonp([1], {
    101: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(149)
          , a = l(383)
          , i = (l.n(a),
        l(39))
          , u = l(22)
          , o = l(74)
          , r = l(8);
        l.d(t, "a", function() {
            return h
        });
        var d = this && this.__assign || Object.assign || function(n) {
            for (var t, l = 1, e = arguments.length; l < e; l++) {
                t = arguments[l];
                for (var s in t)
                    Object.prototype.hasOwnProperty.call(t, s) && (n[s] = t[s])
            }
            return n
        }
          , c = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , p = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , f = {
            realTime: !0,
            verticalToolbar: !0,
            horizontalToolbar: !0,
            chartType: "candle_solid",
            timezone: "Etc/GMT",
            loadCssThemes: !1
        }
          , h = function() {
            function n(n, t) {
                this.assetService = n,
                this.chartService = t,
                this.chartConfig = d({}, f),
                this.isChartData = !1,
                this.stateService = r.stateService,
                this.serverTimeService = i.serverTimeService,
                this.timezoneOffset = 0,
                this.isLoading = !0,
                this.timeFrames = [{
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
                this.periodicity = this.timeFrames[0],
                this.tradeEvents = []
            }
            return n.prototype.ngAfterViewInit = function() {}
            ,
            n.prototype.ngOnInit = function() {
                var n = this;
                this.chart = this.chartEl.nativeElement;
                var t = setTimeout(function() {
                    clearTimeout(t),
                    n.initChart()
                }, 0)
            }
            ,
            n.prototype.initChart = function() {
                var n = this;
                this.chart.setChartConfig(d({}, this.chartConfig, {
                    timezoneOffset: 3600 * this.serverTimeService.clientTimezone * 1e3,
                    serverTimezoneOffset: 3600 * this.serverTimeService.serverTimezone * 1e3
                })),
                this.chart.addEventListener("onHistory", function(t) {
                    return n.periodicity = n.timeFrames.find(function(n) {
                        return n.id === t.detail.timeframe.label
                    }),
                    n.chartService.getHistory(t.detail).then(function(t) {
                        console.log(t),
                        n.chart.setFeed(t),
                        n.instanceId || (n.tradeEvents = n.chartService.getTradeEvents(t.asset, t.timeframe.timeframe)),
                        n.configurationToBeImported && !n.instanceId && (n.chart.importConfiguration(null, !0),
                        n.configurationToBeImported = !1)
                    }).catch(function(n) {
                        console.warn(n)
                    })
                }),
                this.clientTimezoneSubscribe = this.stateService.get("clientTimezone").pipe(l.i(a.distinctUntilChanged)()).subscribe(function(t) {
                    console.log(t),
                    n.clientTimezone = t,
                    n.timezoneOffset = -1 * n.clientTimezone.id,
                    n.chart.setChartConfig(d({}, n.chartConfig, {
                        timezoneOffset: 3600 * n.clientTimezone.id * 1e3,
                        serverTimezoneOffset: 3600 * n.serverTimeService.serverTimezone * 1e3
                    }))
                }),
                this.asset ? (this.selectedAsset = this.asset,
                this.configurationToBeImported = !0,
                this.chart.setAsset(this.asset)) : this.selectedAssetSubscribe = this.stateService.get("selectedAsset").pipe(l.i(a.filter)(function(n) {
                    return !!n
                }), l.i(a.distinctUntilChanged)()).subscribe(function(t) {
                    n.selectedAsset = t,
                    n.configurationToBeImported = !0,
                    n.chart.setAsset(t)
                }),
                this.instanceId;
                var t = this.instanceId ? "sltp" + this.instanceId : "sltp";
                this.sltpSubscribe = this.stateService.get(t).pipe(l.i(a.distinctUntilChanged)()).subscribe(function(t) {
                    n.chart.setSltp({
                        stopLoss: Number(t.stopLoss) || 0,
                        takeProfit: Number(t.takeProfit) || 0,
                        fill: !0
                    })
                })
            }
            ,
            n.prototype.ngOnChanges = function(n) {}
            ,
            n.prototype.ngOnDestroy = function() {
                this.chart.setSltp({
                    stopLoss: 0,
                    takeProfit: 0,
                    fill: !0
                }),
                this.clientTimezoneSubscribe && this.clientTimezoneSubscribe.unsubscribe(),
                this.selectedAssetSubscribe && this.selectedAssetSubscribe.unsubscribe(),
                this.sltpSubscribe && this.sltpSubscribe.unsubscribe(),
                this.openTradesSubscribe && this.openTradesSubscribe.unsubscribe(),
                this.langSubscribe && this.langSubscribe.unsubscribe(),
                this.themeSubscribe && this.themeSubscribe.unsubscribe()
            }
            ,
            c([l.i(e.Input)(), p("design:type", s.a)], n.prototype, "asset", void 0),
            c([l.i(e.Input)(), p("design:type", Object)], n.prototype, "chartConfig", void 0),
            c([l.i(e.Input)(), p("design:type", String)], n.prototype, "instanceId", void 0),
            c([l.i(e.ViewChild)("chart"), p("design:type", e.ElementRef)], n.prototype, "chartEl", void 0),
            c([l.i(e.ViewChild)("assetinfo"), p("design:type", e.TemplateRef)], n.prototype, "assetInfo", void 0),
            c([l.i(e.ViewChild)("orderinfo"), p("design:type", e.TemplateRef)], n.prototype, "orderinfo", void 0),
            c([l.i(e.ViewChild)("custominfo"), p("design:type", e.TemplateRef)], n.prototype, "customInfo", void 0),
            n = c([l.i(e.Component)({
                selector: "chart",
                template: l(624)
            }), p("design:paramtypes", [u.a, o.a])], n)
        }()
    },
    102: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(15)
          , a = l(47)
          , i = l(8);
        l.d(t, "a", function() {
            return r
        });
        var u = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , o = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , r = function() {
            function n(n) {
                this.openTradeService = n,
                this.userService = s.userService,
                this.stateService = i.stateService,
                this.tradesSubscribe = [],
                this.data = {
                    freeMargin: 0,
                    totalProfit: 0,
                    netPl: 0,
                    equity: 0,
                    pnl: 0,
                    marginLevel: 0
                }
            }
            return n.prototype.init = function() {
                var n = this;
                this.user = this.userService.get(),
                this.user.loggedIn && (this.pnlSubscribe = this.stateService.getOnce("pnl").distinctUntilChanged().subscribe(function() {
                    n.openTradesUnsubscribe(),
                    n.openTradesSubscribe(),
                    n.calcTotalNetPl()
                }),
                this.openTradesSubscribe(),
                this.calcTotalNetPl())
            }
            ,
            n.prototype.openTradesSubscribe = function() {
                var n = this;
                this.openTradeService.collection.getAll().forEach(function(t) {
                    var l = t.asset.bid$.distinctUntilChanged().subscribe(function(t) {
                        return n.calcTotalNetPl()
                    });
                    n.tradesSubscribe.push(l)
                })
            }
            ,
            n.prototype.openTradesUnsubscribe = function() {
                this.tradesSubscribe && this.tradesSubscribe.length > 0 && this.tradesSubscribe.forEach(function(n) {
                    return n && n.unsubscribe()
                }),
                this.tradesSubscribe = []
            }
            ,
            n.prototype.equity = function() {
                var n;
                return n = this.user.balance + this.data.netPl + this.user.credit,
                this.data.freeMargin = n - this.user.margin,
                n
            }
            ,
            n.prototype.marginLevel = function() {
                return this.user.loggedIn && this.user.margin > 0 ? this.equity() / this.user.margin * 100 : 0
            }
            ,
            n.prototype.calcTotalNetPl = function() {
                var n = 0
                  , t = 0;
                return this.openTradeService.collection.getAll().forEach(function(l) {
                    n += l.profit + l.swap + l.commission + l.taxes,
                    t += l.profit
                }),
                this.data.totalProfit = n,
                this.data.netPl = this.data.totalProfit,
                this.data.equity = this.equity(),
                this.data.pnl = t,
                this.data.marginLevel = this.marginLevel(),
                this.stateService.set("pnlData", this.data)
            }
            ,
            n.prototype.clear = function() {
                this.pnlSubscribe && this.pnlSubscribe.unsubscribe(),
                this.openTradesUnsubscribe(),
                this.data.freeMargin = 0,
                this.data.totalProfit = 0,
                this.data.netPl = 0,
                this.data.equity = 0,
                this.data.pnl = 0,
                this.data.marginLevel = 0
            }
            ,
            n = u([l.i(e.Injectable)(), o("design:paramtypes", [a.a])], n)
        }()
    },
    113: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(4);
        l.d(t, "b", function() {
            return p
        }),
        l.d(t, "a", function() {
            return a
        }),
        l.d(t, "d", function() {
            return d
        }),
        l.d(t, "e", function() {
            return c
        }),
        l.d(t, "c", function() {
            return u
        });
        var a = function() {
            function n() {
                this.change = new e.EventEmitter,
                this.instances = {},
                this.DEFAULT_ID = "DEFAULT_PAGINATION_ID"
            }
            return n.prototype.defaultId = function() {
                return this.DEFAULT_ID
            }
            ,
            n.prototype.register = function(n) {
                if (n.id || (n.id = this.DEFAULT_ID),
                this.instances[n.id]) {
                    this.updateInstance(n) && this.change.emit(n.id)
                } else
                    this.instances[n.id] = n,
                    this.change.emit(n.id)
            }
            ,
            n.prototype.updateInstance = function(n) {
                var t = !1;
                for (var l in this.instances[n.id])
                    n[l] !== this.instances[n.id][l] && (this.instances[n.id][l] = n[l],
                    t = !0);
                return t
            }
            ,
            n.prototype.getCurrentPage = function(n) {
                if (this.instances[n])
                    return this.instances[n].currentPage
            }
            ,
            n.prototype.setCurrentPage = function(n, t) {
                if (this.instances[n]) {
                    var l = this.instances[n];
                    t <= Math.ceil(l.totalItems / l.itemsPerPage) && 1 <= t && (this.instances[n].currentPage = t,
                    this.change.emit(n))
                }
            }
            ,
            n.prototype.setTotalItems = function(n, t) {
                this.instances[n] && 0 <= t && (this.instances[n].totalItems = t,
                this.change.emit(n))
            }
            ,
            n.prototype.setItemsPerPage = function(n, t) {
                this.instances[n] && (this.instances[n].itemsPerPage = t,
                this.change.emit(n))
            }
            ,
            n.prototype.getInstance = function(n) {
                return void 0 === n && (n = this.DEFAULT_ID),
                this.instances[n] ? this.clone(this.instances[n]) : {}
            }
            ,
            n.prototype.clone = function(n) {
                var t = {};
                for (var l in n)
                    n.hasOwnProperty(l) && (t[l] = n[l]);
                return t
            }
            ,
            n
        }()
          , i = Number.MAX_SAFE_INTEGER
          , u = function() {
            function n(n) {
                this.service = n,
                this.state = {}
            }
            return n.prototype.transform = function(n, t) {
                if (t instanceof Array && (t = t[0]),
                !(n instanceof Array)) {
                    var l = t.id || this.service.defaultId;
                    return this.state[l] ? this.state[l].slice : n
                }
                var e, s, a = t.totalItems && t.totalItems !== n.length, u = this.createInstance(n, t), o = u.id, r = u.itemsPerPage;
                if (this.service.register(u),
                !a && n instanceof Array) {
                    r = +r || i,
                    e = (u.currentPage - 1) * r,
                    s = e + r;
                    if (this.stateIsIdentical(o, n, e, s))
                        return this.state[o].slice;
                    var d = n.slice(e, s);
                    return this.saveState(o, n, d, e, s),
                    this.service.change.emit(o),
                    d
                }
                return this.saveState(o, n, n, e, s),
                n
            }
            ,
            n.prototype.createInstance = function(n, t) {
                var l = t;
                return this.checkConfig(l),
                {
                    id: l.id || this.service.defaultId(),
                    itemsPerPage: +l.itemsPerPage || 0,
                    currentPage: +l.currentPage || 1,
                    totalItems: +l.totalItems || n.length
                }
            }
            ,
            n.prototype.checkConfig = function(n) {
                var t = ["itemsPerPage", "currentPage"]
                  , l = t.filter(function(t) {
                    return !(t in n)
                });
                if (0 < l.length)
                    throw new Error("PaginatePipe: Argument is missing the following required properties: " + l.join(", "))
            }
            ,
            n.prototype.saveState = function(n, t, l, e, s) {
                this.state[n] = {
                    collection: t,
                    size: t.length,
                    slice: l,
                    start: e,
                    end: s
                }
            }
            ,
            n.prototype.stateIsIdentical = function(n, t, l, e) {
                var s = this.state[n];
                return !!s && (!(s.size !== t.length || s.start !== l || s.end !== e) && s.slice.every(function(n, e) {
                    return n === t[l + e]
                }))
            }
            ,
            n.decorators = [{
                type: e.Pipe,
                args: [{
                    name: "paginate",
                    pure: !1
                }]
            }],
            n.ctorParameters = function() {
                return [{
                    type: a
                }]
            }
            ,
            n
        }()
          , o = '\n    <pagination-template  #p="paginationApi"\n                         [id]="id"\n                         [maxSize]="maxSize"\n                         (pageChange)="pageChange.emit($event)">\n    <ul class="ngx-pagination" \n        role="navigation" \n        [attr.aria-label]="screenReaderPaginationLabel" \n        *ngIf="!(autoHide && p.pages.length <= 1)">\n\n        <li class="pagination-previous" [class.disabled]="p.isFirstPage()" *ngIf="directionLinks"> \n            <a tabindex="0" *ngIf="1 < p.getCurrent()" (keyup.enter)="p.previous()" (click)="p.previous()" [attr.aria-label]="previousLabel + \' \' + screenReaderPageLabel">\n                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf="p.isFirstPage()">\n                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n        <li [class.current]="p.getCurrent() === page.value" *ngFor="let page of p.pages">\n            <a tabindex="0" (keyup.enter)="p.setCurrent(page.value)" (click)="p.setCurrent(page.value)" *ngIf="p.getCurrent() !== page.value">\n                <span class="show-for-sr">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <ng-container *ngIf="p.getCurrent() === page.value">\n                <span class="show-for-sr">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </ng-container>\n        </li>\n\n        <li class="pagination-next" [class.disabled]="p.isLastPage()" *ngIf="directionLinks">\n            <a tabindex="0" *ngIf="!p.isLastPage()" (keyup.enter)="p.next()" (click)="p.next()" [attr.aria-label]="nextLabel + \' \' + screenReaderPageLabel">\n                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf="p.isLastPage()">\n                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    '
          , r = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination .ellipsis::after {\n    content: '…';\n    padding: 0.1875rem 0.625rem;\n    color: #0a0a0a; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '«';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '»';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }"
          , d = function() {
            function n() {
                this.maxSize = 7,
                this.previousLabel = "Previous",
                this.nextLabel = "Next",
                this.screenReaderPaginationLabel = "Pagination",
                this.screenReaderPageLabel = "page",
                this.screenReaderCurrentLabel = "You're on page",
                this.pageChange = new e.EventEmitter,
                this._directionLinks = !0,
                this._autoHide = !1
            }
            return Object.defineProperty(n.prototype, "directionLinks", {
                get: function() {
                    return this._directionLinks
                },
                set: function(n) {
                    this._directionLinks = !!n && "false" !== n
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "autoHide", {
                get: function() {
                    return this._autoHide
                },
                set: function(n) {
                    this._autoHide = !!n && "false" !== n
                },
                enumerable: !0,
                configurable: !0
            }),
            n.decorators = [{
                type: e.Component,
                args: [{
                    selector: "pagination-controls",
                    template: o,
                    styles: [r],
                    changeDetection: e.ChangeDetectionStrategy.OnPush,
                    encapsulation: e.ViewEncapsulation.None
                }]
            }],
            n.ctorParameters = function() {
                return []
            }
            ,
            n.propDecorators = {
                id: [{
                    type: e.Input
                }],
                maxSize: [{
                    type: e.Input
                }],
                directionLinks: [{
                    type: e.Input
                }],
                autoHide: [{
                    type: e.Input
                }],
                previousLabel: [{
                    type: e.Input
                }],
                nextLabel: [{
                    type: e.Input
                }],
                screenReaderPaginationLabel: [{
                    type: e.Input
                }],
                screenReaderPageLabel: [{
                    type: e.Input
                }],
                screenReaderCurrentLabel: [{
                    type: e.Input
                }],
                pageChange: [{
                    type: e.Output
                }]
            },
            n
        }()
          , c = function() {
            function n(n, t) {
                var l = this;
                this.service = n,
                this.changeDetectorRef = t,
                this.maxSize = 7,
                this.pageChange = new e.EventEmitter,
                this.pages = [],
                this.changeSub = this.service.change.subscribe(function(n) {
                    l.id === n && (l.updatePageLinks(),
                    l.changeDetectorRef.markForCheck(),
                    l.changeDetectorRef.detectChanges())
                })
            }
            return n.prototype.ngOnInit = function() {
                void 0 === this.id && (this.id = this.service.defaultId()),
                this.updatePageLinks()
            }
            ,
            n.prototype.ngOnChanges = function(n) {
                this.updatePageLinks()
            }
            ,
            n.prototype.ngOnDestroy = function() {
                this.changeSub.unsubscribe()
            }
            ,
            n.prototype.previous = function() {
                this.checkValidId(),
                this.setCurrent(this.getCurrent() - 1)
            }
            ,
            n.prototype.next = function() {
                this.checkValidId(),
                this.setCurrent(this.getCurrent() + 1)
            }
            ,
            n.prototype.isFirstPage = function() {
                return 1 === this.getCurrent()
            }
            ,
            n.prototype.isLastPage = function() {
                return this.getLastPage() === this.getCurrent()
            }
            ,
            n.prototype.setCurrent = function(n) {
                this.pageChange.emit(n)
            }
            ,
            n.prototype.getCurrent = function() {
                return this.service.getCurrentPage(this.id)
            }
            ,
            n.prototype.getLastPage = function() {
                var n = this.service.getInstance(this.id);
                return n.totalItems < 1 ? 1 : Math.ceil(n.totalItems / n.itemsPerPage)
            }
            ,
            n.prototype.checkValidId = function() {
                this.service.getInstance(this.id).id || console.warn('PaginationControlsDirective: the specified id "' + this.id + '" does not match any registered PaginationInstance')
            }
            ,
            n.prototype.updatePageLinks = function() {
                var n = this
                  , t = this.service.getInstance(this.id)
                  , l = this.outOfBoundCorrection(t);
                l !== t.currentPage ? setTimeout(function() {
                    n.setCurrent(l),
                    n.pages = n.createPageArray(t.currentPage, t.itemsPerPage, t.totalItems, n.maxSize)
                }) : this.pages = this.createPageArray(t.currentPage, t.itemsPerPage, t.totalItems, this.maxSize)
            }
            ,
            n.prototype.outOfBoundCorrection = function(n) {
                var t = Math.ceil(n.totalItems / n.itemsPerPage);
                return t < n.currentPage && 0 < t ? t : n.currentPage < 1 ? 1 : n.currentPage
            }
            ,
            n.prototype.createPageArray = function(n, t, l, e) {
                e = +e;
                for (var s = [], a = Math.ceil(l / t), i = Math.ceil(e / 2), u = n <= i, o = a - i < n, r = !u && !o, d = e < a, c = 1; c <= a && c <= e; ) {
                    var p = void 0
                      , f = this.calculatePageNumber(c, n, e, a)
                      , h = 2 === c && (r || o)
                      , g = c === e - 1 && (r || u);
                    p = d && (h || g) ? "..." : f,
                    s.push({
                        label: p,
                        value: f
                    }),
                    c++
                }
                return s
            }
            ,
            n.prototype.calculatePageNumber = function(n, t, l, e) {
                var s = Math.ceil(l / 2);
                return n === l ? e : 1 === n ? n : l < e ? e - s < t ? e - l + n : s < t ? t - s + n : n : n
            }
            ,
            n.decorators = [{
                type: e.Directive,
                args: [{
                    selector: "pagination-template,[pagination-template]",
                    exportAs: "paginationApi"
                }]
            }],
            n.ctorParameters = function() {
                return [{
                    type: a
                }, {
                    type: e.ChangeDetectorRef
                }]
            }
            ,
            n.propDecorators = {
                id: [{
                    type: e.Input
                }],
                maxSize: [{
                    type: e.Input
                }],
                pageChange: [{
                    type: e.Output
                }]
            },
            n
        }()
          , p = function() {
            function n() {}
            return n.decorators = [{
                type: e.NgModule,
                args: [{
                    imports: [s.CommonModule],
                    declarations: [u, d, c],
                    providers: [a],
                    exports: [u, d, c]
                }]
            }],
            n.ctorParameters = function() {
                return []
            }
            ,
            n
        }()
    },
    140: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(5)
          , a = l(8)
          , i = l(22)
          , u = l(149)
          , o = l(9)
          , r = l(11)
          , d = l(15)
          , c = l(65)
          , p = l(39)
          , f = l(14)
          , h = l(32)
          , g = (l.n(h),
        l(1));
        l.n(g);
        l.d(t, "b", function() {
            return y
        }),
        l.d(t, "a", function() {
            return b
        });
        var v = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , m = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , y = function() {
            function n(n, t) {
                this.favoritesService = n,
                this.cd = t,
                this.transitionState = !1
            }
            return n.prototype.ngOnInit = function() {
                var n = this;
                this.bidSubscribe = this.asset.bid$.distinctUntilChanged().subscribe(function() {
                    return n.cd.markForCheck()
                })
            }
            ,
            n.prototype.ngOnDestroy = function() {
                this.bidSubscribe && this.bidSubscribe.unsubscribe()
            }
            ,
            n.prototype.toggleFavorite = function() {
                var n = this.favoritesService.get(this.asset.id);
                n || (this.favoritesService.add(this.asset.id),
                this.asset.isFavorite = !0),
                n && (this.favoritesService.remove(this.asset.id),
                this.asset.isFavorite = !1)
            }
            ,
            v([l.i(e.Input)(), m("design:type", u.a)], n.prototype, "asset", void 0),
            v([l.i(e.Input)(), m("design:type", Boolean)], n.prototype, "transitionState", void 0),
            n = v([l.i(e.Component)({
                selector: "asset-item",
                template: l(622),
                changeDetection: e.ChangeDetectionStrategy.OnPush
            }), m("design:paramtypes", [c.a, e.ChangeDetectorRef])], n)
        }()
          , b = function() {
            function n(n, t, l, e) {
                var i = this;
                this.assetService = n,
                this.zone = t,
                this.cd = l,
                this.utils = e,
                this.assets = [],
                this.search = new s.FormControl,
                this.stateService = a.stateService,
                this.settingsService = r.settingsService,
                this.userService = d.userService,
                this.serverTimeService = p.serverTimeService,
                this.transitionState = !1,
                this.categories = this.filterCategories(o.Constants.categories),
                this.translation = this.settingsService.get("translation"),
                this.user = this.userService.get(),
                this.tradeTime = {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                },
                this.langSubscribe = this.stateService.get("lang").subscribe(function() {
                    i.translation = i.settingsService.get("translation"),
                    i.cd.markForCheck()
                })
            }
            return n.prototype.ngOnInit = function() {
                var n = this;
                console.info("assetlist component init"),
                this.activeCategory = h.find(this.categories, {
                    selected: !0
                }),
                this.getAssets(this.activeCategory.id),
                this.searchSubscribe = this.search.valueChanges.debounceTime(150).distinctUntilChanged().subscribe(function(t) {
                    return t.length >= 2 && n.filterAssets(t)
                }),
                this.assetSubscribe = this.stateService.get("selectedAsset").distinctUntilChanged().filter(function(n) {
                    return !!n
                }).subscribe(function(t) {
                    n.selectedAsset = t;
                    var l = n.serverTimeService.time;
                    n.tradeTime = null,
                    n.marketClosed = null,
                    n.tradeTimeSubscribe && n.tradeTimeSubscribe.unsubscribe(),
                    n.openTradeTime(),
                    n.hasDayWeek(l) && n.getOpenTradeTime(l)
                })
            }
            ,
            n.prototype.ngOnDestroy = function() {
                console.info("assetlist component destroy"),
                this.searchSubscribe && this.searchSubscribe.unsubscribe(),
                this.assetSubscribe && this.assetSubscribe.unsubscribe(),
                this.tradeTimeSubscribe && this.tradeTimeSubscribe.unsubscribe(),
                this.langSubscribe && this.langSubscribe.unsubscribe(),
                this.assets = [],
                this.activeCategory && (this.activeCategory.assets = []),
                this.user = null
            }
            ,
            n.prototype.filterCategories = function(n) {
                var t = []
                  , l = h.uniq(this.assetService.clientCollection.getAll().map(function(n) {
                    return n.category
                }));
                t = l;
                var e = t.length > 0 ? n.filter(function(n) {
                    return "FAVORITES" === n.id || t.indexOf(n.id) > -1
                }) : n;
                return 1 === e.length && (e = n),
                e = e.map(function(n) {
                    return Object.assign(n, {
                        selected: !1
                    })
                }),
                e.filter(function(n) {
                    return "FAVORITES" !== n.id
                }).shift().selected = !0,
                e
            }
            ,
            n.prototype.categoryAnimationEnd = function(n) {
                n.toState || (this.transitionState = !0)
            }
            ,
            n.prototype.hasDayWeek = function(n) {
                var t = g.utc(n)
                  , l = this.selectedAsset.tradingTimes.hasOwnProperty(t.day());
                return l || (this.marketClosed = !0),
                l
            }
            ,
            n.prototype.getOpenTradeTime = function(n) {
                function t(n, t) {
                    var l = t.split(":")
                      , e = l[0]
                      , s = l[1];
                    return g.utc(n).weekday(n.day()).startOf("day").hour(parseInt(e, 10)).minute(parseInt(s, 10))
                }
                function l(n, l, e) {
                    var s = n[0]
                      , a = n[1]
                      , i = t(e, s);
                    return l < t(e, a).valueOf() && l >= i.valueOf() ? "open" : l < i.valueOf() ? n : void 0
                }
                function e(n, l) {
                    var e = t(l, n[0]);
                    return g.duration(e.diff(l))
                }
                var s = g.utc(n)
                  , a = this.selectedAsset.tradingTimes[s.day()]
                  , i = a.map(function(t) {
                    return l(t, n, s)
                }).filter(function(n) {
                    return "open" === n
                }).length > 0
                  , u = !i && a.map(function(t) {
                    return l(t, n, s)
                }).filter(function(n) {
                    return n
                }).shift();
                if (u) {
                    var o = e(u, s);
                    return this.tradeTime = {
                        days: o.days(),
                        hours: o.hours(),
                        minutes: o.minutes(),
                        seconds: o.seconds()
                    },
                    this.cd.markForCheck()
                }
                if (!u && !i)
                    return this.marketClosed = !0,
                    this.cd.markForCheck();
                this.tradeTime = null,
                this.marketClosed = null
            }
            ,
            n.prototype.openTradeTime = function() {
                var n = this;
                this.tradeTimeSubscribe = this.serverTimeService.time$.filter(function() {
                    return !!n.selectedAsset
                }).filter(function(t) {
                    return n.hasDayWeek(t)
                }).subscribe(function(t) {
                    return n.getOpenTradeTime(t)
                })
            }
            ,
            n.prototype.getAssets = function(n) {
                this.activeCategory.assets = this.assetService.clientCollection.find({
                    category: n
                }),
                this.selectedAsset = this.activeCategory.assets[0],
                this.selectedAsset && this.stateService.set("selectedAsset", this.selectedAsset)
            }
            ,
            n.prototype.changeCategory = function(n) {
                if (n.id === this.activeCategory.id)
                    return void (this.activeCategory.collapsed = !this.activeCategory.collapsed);
                this.clearCategories(),
                this.activeCategory = n;
                var t = {};
                t = "FAVORITES" === n.id ? {
                    isFavorite: !0
                } : {
                    category: n.id
                },
                this.activeCategory.assets = this.assetService.clientCollection.find(t),
                this.activeCategory.collapsed = !1
            }
            ,
            n.prototype.clearCategories = function() {
                this.categories.forEach(function(n) {
                    return n.assets = []
                }),
                this.transitionState = !1
            }
            ,
            n.prototype.filterAssets = function(n) {
                var t = this
                  , l = function(n) {
                    return t.categories.filter(function(t) {
                        return t.id === n
                    }).length > 0
                };
                this.assets = this.assetService.clientCollection.findBy({}, function(t) {
                    return t.outputName.toLowerCase().indexOf(n.toLowerCase()) >= 0 && l(t.category)
                }),
                this.cd.markForCheck()
            }
            ,
            n.prototype.trackByFn = function(n, t) {
                return t.id
            }
            ,
            n.prototype.setAsset = function(n) {
                this.selectedAsset = n,
                this.stateService.set("selectedAsset", n)
            }
            ,
            n = v([l.i(e.Component)({
                selector: "asset-list",
                template: l(623),
                changeDetection: e.ChangeDetectionStrategy.OnPush,
                animations: [l.i(e.trigger)("categoryShow", [l.i(e.state)("*", l.i(e.style)({
                    height: "*",
                    opacity: 1
                })), l.i(e.state)("void", l.i(e.style)({
                    height: "0px",
                    opacity: 0
                })), l.i(e.transition)("void => *", l.i(e.animate)("500ms ease-in-out"))]), l.i(e.trigger)("fadeInOut", [l.i(e.transition)(":enter", [l.i(e.animate)(100, l.i(e.style)({
                    transform: "translateX(-100%)"
                }))]), l.i(e.transition)(":leave", [l.i(e.animate)(100, l.i(e.style)({
                    transform: "translateX(100%)"
                }))])])]
            }), m("design:paramtypes", [i.a, e.NgZone, e.ChangeDetectorRef, f.a])], n)
        }()
    },
    141: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(9)
          , a = l(11)
          , i = l(8)
          , u = l(32);
        l.n(u);
        l.d(t, "a", function() {
            return d
        });
        var o = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , r = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , d = function() {
            function n(n) {
                var t = this;
                this.zone = n,
                this.settingsService = a.settingsService,
                this.stateService = i.stateService,
                this.pandaChartConfig = {},
                this.chartInstanceId = (99999 * Math.random()).toString(),
                this.tabs = s.Constants.chartTabs,
                this.activeTab = u.find(this.tabs, {
                    selected: !0
                }),
                this.translation = this.settingsService.get("translation"),
                this.langSubscribe = this.stateService.get("lang").subscribe(function() {
                    t.zone.run(function() {
                        t.translation = t.settingsService.get("translation")
                    })
                })
            }
            return n.prototype.ngOnInit = function() {
                var n = this;
                this.selectedAssetSubscribe = this.stateService.get("selectedAsset").subscribe(function(t) {
                    return n.selectedAsset = t
                })
            }
            ,
            n.prototype.ngOnDestroy = function() {
                this.selectedAssetSubscribe && this.selectedAssetSubscribe.unsubscribe(),
                this.langSubscribe && this.langSubscribe.unsubscribe()
            }
            ,
            n.prototype.changeTab = function(n) {
                this.activeTab = n
            }
            ,
            n = o([l.i(e.Component)({
                selector: "chart-tabs",
                template: l(625),
                animations: [l.i(e.trigger)("fadeInOut", [l.i(e.transition)("inactive => active", [l.i(e.animate)(500, l.i(e.style)({
                    transform: "translateX(-100%)"
                }))]), l.i(e.transition)("active => inactive", [l.i(e.animate)(500, l.i(e.style)({
                    transform: "translateX(100%)"
                }))])])]
            }), r("design:paramtypes", [e.NgZone])], n)
        }()
    },
    142: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(9)
          , a = l(202)
          , i = l(64)
          , u = l(11)
          , o = l(8)
          , r = l(15)
          , d = l(39)
          , c = l(54)
          , p = (l.n(c),
        l(32));
        l.n(p);
        l.d(t, "b", function() {
            return g
        }),
        l.d(t, "a", function() {
            return v
        });
        var f = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , h = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , g = function() {
            function n(n, t) {
                var l = this;
                this.cd = n,
                this.zone = t,
                this.stateService = o.stateService,
                this.userService = r.userService,
                this.serverTimeService = d.serverTimeService,
                this.timezone = this.serverTimeService.clientTimezone,
                this.settingsService = u.settingsService,
                this.timezoneSubscribe = this.stateService.get("clientTimezone").subscribe(function(n) {
                    return l.timezone = n.id
                }),
                this.user = this.userService.get(),
                this.translation = this.settingsService.get("translation"),
                this.langSubscribe = this.stateService.get("lang").subscribe(function() {
                    l.zone.run(function() {
                        l.translation = l.settingsService.get("translation"),
                        l.cd.markForCheck()
                    })
                })
            }
            return n.prototype.ngOnDestroy = function() {
                this.timezoneSubscribe && this.timezoneSubscribe.unsubscribe(),
                this.langSubscribe && this.langSubscribe.unsubscribe()
            }
            ,
            f([l.i(e.Input)(), h("design:type", a.a)], n.prototype, "trade", void 0),
            n = f([l.i(e.Component)({
                selector: "closed-trade",
                template: l(626),
                changeDetection: e.ChangeDetectionStrategy.OnPush
            }), h("design:paramtypes", [e.ChangeDetectorRef, e.NgZone])], n)
        }()
          , v = function() {
            function n(n, t, l) {
                var a = this;
                this.closedTradeService = n,
                this.cd = t,
                this.zone = l,
                this.settingsService = u.settingsService,
                this.isLoading = !1,
                this.isError = !1,
                this.count = new e.EventEmitter,
                this.dateRanges = s.Constants.dateRanges,
                this.dateRangesConfig = {
                    label: "value",
                    id: "value",
                    defaultLabel: "Please select",
                    type: "list",
                    translationKey: "dateRange"
                },
                this.perPage = 9,
                this.currentPage = 1,
                this.allCount = 0,
                this.trades = [],
                this.tradeTitles = [{
                    id: "orderId",
                    field: "orderId",
                    width: "7",
                    dir: "desc"
                }, {
                    id: "openTime",
                    field: "openTime",
                    width: "10",
                    dir: "desc"
                }, {
                    id: "asset",
                    field: "outputName",
                    width: "7",
                    dir: "asc"
                }, {
                    id: "direction",
                    field: "action",
                    width: "5",
                    dir: "asc"
                }, {
                    id: "amount",
                    field: "amount",
                    width: "7",
                    dir: "asc"
                }, {
                    id: "openPrice",
                    field: "openPrice",
                    width: "7",
                    dir: "asc"
                }, {
                    id: "closedPrice",
                    field: "closePrice",
                    width: "7",
                    dir: "asc"
                }, {
                    id: "closedTime",
                    field: "closeTime",
                    width: "10",
                    dir: "asc"
                }, {
                    id: "stopLoss",
                    field: "stopLoss",
                    width: "8",
                    dir: "asc"
                }, {
                    id: "takeProfit",
                    field: "takeProfit",
                    width: "8",
                    dir: "asc"
                }, {
                    id: "commission",
                    field: "commission",
                    width: "8",
                    dir: "asc"
                }, {
                    id: "swap",
                    field: "swap",
                    width: "8",
                    dir: "asc"
                }, {
                    id: "profit",
                    field: "profit",
                    width: "8",
                    dir: "asc"
                }],
                this.stateService = o.stateService,
                this.activeTitle = p.find(this.tradeTitles, {
                    field: "openTime"
                }),
                this.translation = this.settingsService.get("translation"),
                this.langSubscribe = this.stateService.get("lang").subscribe(function() {
                    a.zone.run(function() {
                        a.translation = a.settingsService.get("translation"),
                        a.cd.markForCheck()
                    })
                })
            }
            return n.prototype.ngOnInit = function() {
                return this.isLoading = !0,
                this.dateRange || (this.dateRange = p.find(this.dateRanges, {
                    value: "day"
                })),
                this.getTrages()
            }
            ,
            n.prototype.ngOnChanges = function(n) {
                if (n.dateRange && !n.dateRange.firstChange)
                    return this.updateTrades()
            }
            ,
            n.prototype.ngOnDestroy = function() {
                this.collection && this.collection.clear(),
                this.trades = [],
                this.renderSubscribe && this.renderSubscribe.unsubscribe(),
                this.langSubscribe && this.langSubscribe.unsubscribe()
            }
            ,
            n.prototype.updateTrades = function() {
                var n = this;
                return this.getTrages().then(function() {
                    n.ps.scrollTo(0),
                    n.ps.update()
                })
            }
            ,
            n.prototype.getTrages = function() {
                var n = this;
                return this.trades = [],
                this.closedTradeService.getTrades(this.dateRange && this.dateRange.value).then(function(t) {
                    return n.collection = t
                }).then(function() {
                    return n.filterTrades({
                        field: n.activeTitle.field,
                        dir: n.activeTitle.dir
                    })
                }).then(function() {
                    return n.isLoading = !1
                }).catch(function(t) {
                    n.isError = !0,
                    n.isLoading = !1
                })
            }
            ,
            n.prototype.sortBy = function(n) {
                this.activeTitle === n ? this.activeTitle.dir = "asc" === this.activeTitle.dir ? "desc" : "asc" : this.activeTitle = n,
                this.filterTrades({
                    field: this.activeTitle.field,
                    dir: this.activeTitle.dir
                })
            }
            ,
            n.prototype.filterTrades = function(n) {
                var t = this.collection.findBy({}, null, n);
                this.allCount = t.length,
                this.trades = t,
                this.count.emit(this.allCount),
                this.cd.markForCheck()
            }
            ,
            f([l.i(e.Input)(), h("design:type", String)], n.prototype, "type", void 0),
            f([l.i(e.Input)(), h("design:type", Object)], n.prototype, "dateRange", void 0),
            f([l.i(e.Output)(), h("design:type", e.EventEmitter)], n.prototype, "count", void 0),
            f([l.i(e.ViewChild)(c.PerfectScrollbarComponent), h("design:type", c.PerfectScrollbarComponent)], n.prototype, "ps", void 0),
            n = f([l.i(e.Component)({
                selector: "closed-trades",
                template: l(627),
                changeDetection: e.ChangeDetectionStrategy.OnPush
            }), h("design:paramtypes", [i.a, e.ChangeDetectorRef, e.NgZone])], n)
        }()
    },
    143: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(8)
          , a = l(15)
          , i = l(9)
          , u = l(11)
          , o = l(27)
          , r = l(33);
        l.d(t, "a", function() {
            return p
        });
        var d = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , c = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , p = function() {
            function n(n) {
                var t = this;
                this.zone = n,
                this.isShow = !1,
                this.stateService = s.stateService,
                this.userService = a.userService,
                this.settingsService = u.settingsService,
                this.api = o.api,
                this.popup = {
                    show: !1,
                    data: {},
                    state: ""
                },
                this.requoteState = !1,
                this.requotePopupConfig = {
                    width: 35,
                    height: 36,
                    className: "close-trade-popup",
                    backdrop: !1
                },
                this.translation = this.settingsService.get("translation"),
                this.langSubscribe = this.stateService.get("lang").subscribe(function() {
                    t.zone.run(function() {
                        t.translation = t.settingsService.get("translation")
                    })
                })
            }
            return n.prototype.ngOnInit = function() {
                var n = this;
                this.toastStatus = "",
                this.toastContent = "",
                this.showSpinner = !1,
                this.closetradeSubscribe = this.stateService.getOnce("closetrade").filter(function(n) {
                    return !!n
                }).filter(function(n) {
                    return n.trade
                }).subscribe(function(t) {
                    n.user = n.userService.get(),
                    n.trade = t.trade,
                    n.isShow = !0,
                    n.toastStatus = "",
                    n.toastContent = "",
                    n.showSpinner = !1
                })
            }
            ,
            n.prototype.ngOnDestroy = function() {
                this.langSubscribe && this.langSubscribe.unsubscribe(),
                this.assetWatch && this.assetWatch.unsubscribe(),
                this.closetradeSubscribe && this.closetradeSubscribe.unsubscribe(),
                this.close()
            }
            ,
            n.prototype.close = function() {
                this.popup.show = !1,
                this.trade = null,
                this.isShow = !1,
                this.user = null
            }
            ,
            n.prototype.checkResponse = function(n, t) {
                if (0 === n.status)
                    throw new r.AppError({
                        source: "CloseTrade",
                        type: i.Constants.error.type.VALIDATION,
                        severity: "info",
                        code: n.code || "closeTradeFailed",
                        message: "",
                        data: {
                            response: n,
                            request: t
                        }
                    });
                return n
            }
            ,
            n.prototype.onSubmit = function() {
                var n = this
                  , t = {
                    ClosePrice: this.trade.closePrice(),
                    OrderID: this.trade.orderId,
                    Lots: this.trade.lots,
                    Comment: "S: Webtrader"
                };
                this.toastStatus = "",
                this.toastContent = "",
                this.showSpinner = !0,
                this.requoteState = !1,
                console.log(t),
                this.api.request.mt4ClosePosition(t).then(function(l) {
                    return n.checkResponse(l, t)
                }).then(function(t) {
                    n.showSpinner = !1,
                    n.popup.show = !0,
                    n.popup.state = "success",
                    n.popup.data.title = n.translation.messages.orderSuccess,
                    n.popup.data.content = "#" + n.trade.orderId + " " + n.trade.action + " " + n.trade.outputName + " " + n.translation.closed_at_price + " " + t.Trade.ClosePrice
                }).catch(function(t) {
                    if ("138" == t.code)
                        return void (n.requoteState = !0);
                    n.showSpinner = !1,
                    n.toastStatus = "error",
                    n.toastContent = n.translation.messages[t.code]
                })
            }
            ,
            n.prototype.deleteTrade = function() {
                var n = this
                  , t = {
                    OrderID: this.trade.orderId
                };
                this.toastStatus = "",
                this.toastContent = "",
                this.showSpinner = !0,
                this.api.request.mt4DeletePosition(t).then(function(l) {
                    return n.checkResponse(l, t)
                }).then(function(t) {
                    n.showSpinner = !1,
                    n.popup.show = !0,
                    n.popup.state = "success",
                    n.popup.data.title = n.translation.messages.orderSuccess,
                    n.popup.data.content = n.translation.trade_deleted.replace("$id", n.trade.orderId)
                }).catch(function(t) {
                    n.showSpinner = !1,
                    n.toastStatus = "error",
                    n.toastContent = n.translation.messages[t.code]
                })
            }
            ,
            n.prototype.closeRequotePopup = function() {
                this.requoteState = !1,
                this.close()
            }
            ,
            n = d([l.i(e.Component)({
                selector: "closetrade-popup",
                template: l(628),
                animations: [l.i(e.trigger)("fadeInOut", [l.i(e.transition)(":enter", [l.i(e.style)({
                    opacity: 0
                }), l.i(e.animate)(300, l.i(e.style)({
                    opacity: 1
                }))]), l.i(e.transition)(":leave", [l.i(e.animate)(300, l.i(e.style)({
                    opacity: 0
                }))])])]
            }), c("design:paramtypes", [e.NgZone])], n)
        }()
    },
    144: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(8)
          , a = l(46)
          , i = l(45)
          , u = l(22)
          , o = l(15)
          , r = l(9)
          , d = l(11)
          , c = l(27)
          , p = l(33)
          , f = l(32)
          , h = (l.n(f),
        l(193))
          , g = l.n(h);
        l.d(t, "a", function() {
            return y
        });
        var v = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , m = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , y = function() {
            function n(n, t, l, e) {
                var a = this;
                this.zone = n,
                this.investCalcService = t,
                this.currencyConvertService = l,
                this.assetService = e,
                this.stateService = s.stateService,
                this.state = "inactive",
                this.investAmount = {
                    value: "0.1"
                },
                this.userService = o.userService,
                this.settingsService = d.settingsService,
                this.api = c.api,
                this.defaultProfitLoss = {
                    checked: !1,
                    pips: {
                        value: "0",
                        lock: !1
                    },
                    rate: {
                        value: "0",
                        lock: !1
                    }
                },
                this.defaultReach = {
                    checked: !1,
                    value: "0"
                },
                this.defaultStopLossValue = 0,
                this.popup = {
                    show: !1,
                    data: {},
                    state: "",
                    errorCode: ""
                },
                this.validators = {
                    number: g()({
                        prefix: "",
                        includeThousandsSeparator: !1
                    }),
                    rate: [/\d/],
                    amount: g()({
                        prefix: "",
                        allowDecimal: !0,
                        decimalLimit: 2,
                        includeThousandsSeparator: !1
                    })
                },
                this.amountSteps = r.Constants.amountSteps,
                this.amountStep = f.find(this.amountSteps, {
                    value: "0.1"
                }),
                this.requoteState = !1,
                this.requotePopupConfig = {
                    width: 35,
                    height: 36,
                    className: "invest-popup",
                    backdrop: !0
                },
                this.constants = r.Constants,
                this.resetModels(),
                this.user = this.userService.get(),
                this.translation = this.settingsService.get("translation"),
                this.langSubscribe = this.stateService.get("lang").subscribe(function() {
                    a.zone.run(function() {
                        a.translation = a.settingsService.get("translation")
                    })
                })
            }
            return n.prototype.ngOnInit = function() {
                var n = this;
                this.selectedAssetSubscribe = this.stateService.get("selectedAsset").distinctUntilChanged().filter(function(n) {
                    return n
                }).subscribe(function(t) {
                    n.selectedAsset = t,
                    n.action = null,
                    n.state = "inactive",
                    n.resetModels(),
                    n.defaultStopLossValue = n.user.amf ? Math.floor(n.requiredMargin() / n.pipValue()) : 50,
                    n.assetWatch && n.assetWatch.unsubscribe(),
                    n.addAssetWatch(),
                    n.validators.rate = g()({
                        prefix: "",
                        allowDecimal: !0,
                        decimalLimit: n.selectedAsset.digits,
                        includeThousandsSeparator: !1
                    })
                }),
                this.userSubscribe = this.stateService.get("user").distinctUntilChanged().filter(function(n) {
                    return !!n
                }).filter(function(n) {
                    return n.loggedIn
                }).subscribe(function(t) {
                    return n.user = n.userService.get()
                })
            }
            ,
            n.prototype.ngOnDestroy = function() {
                this.selectedAssetSubscribe && this.selectedAssetSubscribe.unsubscribe(),
                this.userSubscribe && this.userSubscribe.unsubscribe(),
                this.assetWatch && this.assetWatch.unsubscribe(),
                this.langSubscribe && this.langSubscribe.unsubscribe(),
                this.selectedAsset = null,
                this.user = null,
                this.tradeToSend = null
            }
            ,
            n.prototype.publishSlTp = function(n) {
                if (n)
                    return this.stateService.set("sltp", {
                        price: null,
                        stopLoss: null,
                        takeProfit: null
                    });
                this.stateService.set("sltp", {
                    price: this.reach.checked ? this.reach.value : null,
                    stopLoss: this.stopLoss.checked ? this.stopLoss.rate.value : null,
                    takeProfit: this.takeProfit.checked ? this.takeProfit.rate.value : null
                })
            }
            ,
            n.prototype.selectAmount = function() {
                this.investAmount.value = this.amountStep.value
            }
            ,
            n.prototype.updateAmount = function() {
                var n = f.find(this.amountSteps, {
                    value: this.investAmount.value
                });
                this.amountStep = n || {
                    label: "",
                    value: 0
                }
            }
            ,
            n.prototype.resetModels = function() {
                this.stopLoss = f.cloneDeep(this.defaultProfitLoss),
                this.takeProfit = f.cloneDeep(this.defaultProfitLoss),
                this.reach = f.cloneDeep(this.defaultReach),
                this.investAmount.value = "0.1",
                this.amountStep = f.find(this.amountSteps, {
                    value: this.investAmount.value
                }),
                this.publishSlTp(!0)
            }
            ,
            n.prototype.addAssetWatch = function() {
                var n = this;
                this.assetWatch = this.selectedAsset.bid$.filter(function() {
                    return !!n.action
                }).subscribe(function() {
                    return n.calcAll()
                })
            }
            ,
            n.prototype.calcAll = function() {
                return this.stopLoss.checked && this.updateStopLoss(),
                this.takeProfit.checked && this.updateTakeProfit(),
                this.publishSlTp()
            }
            ,
            n.prototype.updateStopLoss = function() {
                return this.stopLoss.rate.lock || (this.stopLoss.rate.value = this.calcLossRate().toFixed(this.selectedAsset.digits)),
                this.stopLoss.pips.lock || (this.stopLoss.pips.value = this.calcLossPips()),
                this.publishSlTp()
            }
            ,
            n.prototype.updateTakeProfit = function() {
                return this.takeProfit.rate.lock || (this.takeProfit.rate.value = this.calcProfitRate().toFixed(this.selectedAsset.digits)),
                this.takeProfit.pips.lock || (this.takeProfit.pips.value = this.calcProfitPips()),
                this.publishSlTp()
            }
            ,
            n.prototype.toggleReach = function() {
                this.reach.value = this.selectedAsset.markupAsk().toFixed(this.selectedAsset.digits),
                this.reach.checked = !this.reach.checked,
                this.reach.checked || (this.action = this.action.replace("_limit", "").replace("_stop", "")),
                this.reach.checked && (this.updateAction(this.reach.value.toString()),
                this.calcAll())
            }
            ,
            n.prototype.setAction = function(n) {
                this.action = n,
                this.reach.checked && this.updateAction(this.reach.value.toString()),
                this.user.amf && !this.stopLoss.checked && (this.stopLoss.pips.value = this.defaultStopLossValue.toString(),
                this.stopLoss.checked = !0,
                this.lockStopLoss("pips")),
                this.calcAll()
            }
            ,
            n.prototype.unlockStopLoss = function() {
                this.stopLoss.pips.lock = !1,
                this.stopLoss.rate.lock = !1
            }
            ,
            n.prototype.unlockTakeProfit = function() {
                this.takeProfit.pips.lock = !1,
                this.takeProfit.rate.lock = !1
            }
            ,
            n.prototype.toggleStopLoss = function(n) {
                this.stopLoss.rate = f.cloneDeep(this.defaultProfitLoss.rate),
                this.stopLoss.pips = f.cloneDeep(this.defaultProfitLoss.pips),
                this.stopLoss.checked = (!n || "off" != n) && !this.stopLoss.checked,
                this.stopLoss.checked ? (this.lockStopLoss("pips"),
                this.stopLoss.pips.value = this.defaultStopLossValue.toString(),
                this.calcAll()) : this.publishSlTp()
            }
            ,
            n.prototype.toggleTakeProfit = function(n) {
                this.takeProfit.rate = f.cloneDeep(this.defaultProfitLoss.rate),
                this.takeProfit.pips = f.cloneDeep(this.defaultProfitLoss.pips),
                this.takeProfit.checked = (!n || "off" != n) && !this.takeProfit.checked,
                this.takeProfit.checked ? (this.lockTakeProfit("pips"),
                this.takeProfit.pips.value = this.defaultStopLossValue.toString(),
                this.calcAll()) : this.publishSlTp()
            }
            ,
            n.prototype.lockStopLoss = function(n) {
                this.unlockStopLoss(),
                this.stopLoss[n].lock = !0
            }
            ,
            n.prototype.lockTakeProfit = function(n) {
                this.unlockTakeProfit(),
                this.takeProfit[n].lock = !0
            }
            ,
            n.prototype.calcLoss = function(n, t, l, e) {
                return n.match(/^sell/) ? t + l : n.match(/^buy/) ? t - l : void 0
            }
            ,
            n.prototype.calcProfit = function(n, t, l, e) {
                return n.match(/^sell/) ? t - l : n.match(/^buy/) ? t + l : void 0
            }
            ,
            n.prototype.calcLossRate = function() {
                var n = this.selectedAsset.digits
                  , t = this.investCalcService.getPoints(10 * parseInt(this.stopLoss.pips.value, 10), n)
                  , l = this.reach.checked ? parseFloat(this.reach.value) : this.investCalcService.getCurrentPrice(this.action, this.selectedAsset);
                return this.calcLoss(this.action, l, t, n)
            }
            ,
            n.prototype.calcLossPips = function() {
                var n = 0
                  , t = 0;
                return this.action.match(/^sell/) && (n = parseFloat(this.stopLoss.rate.value) - this.investCalcService.getCurrentPrice(this.action, this.selectedAsset)),
                this.action.match(/^buy/) && (n = this.investCalcService.getCurrentPrice(this.action, this.selectedAsset) - parseFloat(this.stopLoss.rate.value)),
                t = this.investCalcService.fromPoints(n / 10, this.selectedAsset.digits),
                t.toFixed(0)
            }
            ,
            n.prototype.calcLossValue = function() {
                var n = this.stopLoss.pips.lock ? 1 : 2
                  , t = 10 * (parseFloat(this.stopLoss.pips.value) || 0)
                  , l = parseFloat(this.stopLoss.rate.value) || 0
                  , e = 1 === n ? t : l
                  , s = this.calcProfitPrice(this.action, e, n, "stopLoss", parseFloat(this.investAmount.value));
                return this.stopLoss.checked && !1 === isNaN(s) ? s.toFixed(2) : "0"
            }
            ,
            n.prototype.calcProfitRate = function() {
                var n = this.selectedAsset.digits
                  , t = this.investCalcService.getPoints(10 * parseInt(this.takeProfit.pips.value, 10), n)
                  , l = this.reach.checked ? parseFloat(this.reach.value) : this.investCalcService.getCurrentPrice(this.action, this.selectedAsset);
                return this.calcProfit(this.action, l, t, n)
            }
            ,
            n.prototype.calcProfitPips = function() {
                var n = 0
                  , t = 0;
                return this.action.match(/^sell/) && (n = this.investCalcService.getCurrentPrice(this.action, this.selectedAsset) - parseFloat(this.takeProfit.rate.value)),
                this.action.match(/^buy/) && (n = parseFloat(this.takeProfit.rate.value) - this.investCalcService.getCurrentPrice(this.action, this.selectedAsset)),
                t = this.investCalcService.fromPoints(n / 10, this.selectedAsset.digits),
                t.toFixed(0)
            }
            ,
            n.prototype.calcProfitValue = function() {
                var n = this.stopLoss.pips.lock ? 1 : 2
                  , t = 10 * (parseFloat(this.takeProfit.pips.value) || 0)
                  , l = parseFloat(this.takeProfit.rate.value) || 0
                  , e = 1 === n ? t : l
                  , s = this.calcProfitPrice(this.action, e, n, "takeProfit", parseFloat(this.investAmount.value));
                return this.takeProfit.checked && !1 === isNaN(s) ? s.toFixed(2) : "0"
            }
            ,
            n.prototype.requiredMargin = function() {
                return this.investCalcService.calcMargin(parseFloat(this.investAmount.value), this.action || "buy", this.selectedAsset, this.user, this.assetService).baseVal
            }
            ,
            n.prototype.calcProfitPrice = function(n, t, l, e, s) {
                var a, i = this.reach.checked ? parseFloat(this.reach.value) : this.investCalcService.getOpenPrice(n, this.selectedAsset), u = 1 === l ? this.investCalcService.getClosePriceFromPoints(n, this.selectedAsset, i, t, e) : t, o = s, r = this.selectedAsset.currency, d = this.user.currency, c = this.investCalcService.getPairVal(n, i, u);
                return 0 === this.selectedAsset.profitMode && (r = this.selectedAsset.outputName.slice(-3)),
                a = this.selectedAsset.profitMode < 2 ? c * this.selectedAsset.contractSize * o : c * (this.selectedAsset.tickPrice / this.selectedAsset.tickSize) * o,
                a = this.currencyConvertService.currencyConvert(r, d, a, n, this.selectedAsset.profitMode)
            }
            ,
            n.prototype.pipValue = function() {
                return this.selectedAsset && parseFloat(this.investAmount.value) > 0 ? this.calcProfitPrice("buy", 10, 1, "takeProfit", parseFloat(this.investAmount.value)) : 0
            }
            ,
            n.prototype.updateReach = function(n) {
                this.updateAction(n),
                this.calcAll()
            }
            ,
            n.prototype.updateAction = function(n) {
                var t = parseFloat(n);
                this.action.match(/^buy/) ? (t < this.selectedAsset.markupAsk() && (this.action = "buy_limit"),
                t > this.selectedAsset.markupAsk() && (this.action = "buy_stop")) : this.action.match(/^sell/) && (t > this.selectedAsset.markupBid() && (this.action = "sell_limit"),
                t < this.selectedAsset.markupBid() && (this.action = "sell_stop"))
            }
            ,
            n.prototype.validateLimitStop = function() {
                var n = this.selectedAsset
                  , t = this.action
                  , l = this.reach.checked
                  , e = parseFloat(this.reach.value);
                return "buy_stop" === t && l && e > n.markupAsk() || "sell_stop" === t && l && e < n.markupBid() || "sell_limit" === t && l && e > n.markupBid() || "buy_limit" === t && l && e < n.markupAsk()
            }
            ,
            n.prototype.validateBuySell = function() {
                if (this.selectedAsset && this.action) {
                    var n = this.action
                      , t = this.selectedAsset
                      , l = (this.takeProfit.pips.lock ? this.calcProfitRate() : parseFloat(this.takeProfit.rate.value)) || 0
                      , e = (this.stopLoss.pips.lock ? this.calcLossRate() : parseFloat(this.stopLoss.rate.value)) || 0
                      , s = this.reach.checked
                      , a = parseFloat(this.reach.value);
                    return n.match(/^buy/) ? 0 === l && 0 === e || (0 === l ? s ? a > e : t.markupAsk() > e : 0 === e ? s ? a < l : t.markupAsk() < l : s ? a < l && a > e : t.markupAsk() < l && t.markupAsk() > e) : n.match(/^sell/) ? 0 === l && 0 === e || (0 === l ? s ? a < e : t.markupBid() < e : 0 === e ? s ? a > l : t.markupBid() > l : s ? a > l && a < e : t.markupBid() > l && t.markupBid() < e) : void 0
                }
            }
            ,
            n.prototype.validate = function() {
                if (this.selectedAsset) {
                    var n = this.validateBuySell()
                      , t = parseFloat(this.investAmount.value);
                    if (this.reach.checked) {
                        var l = this.validateLimitStop();
                        return t > 0 && n && l
                    }
                    return t > 0 && n
                }
            }
            ,
            n.prototype.createTrade = function() {
                var n = this.reach.checked ? parseFloat(this.reach.value) : this.investCalcService.getOpenPrice(this.action, this.selectedAsset)
                  , t = (this.stopLoss.pips.lock ? this.calcLossRate() : parseFloat(this.stopLoss.rate.value)) || 0
                  , l = (this.takeProfit.pips.lock ? this.calcProfitRate() : parseFloat(this.takeProfit.rate.value)) || 0;
                return {
                    SymbolID: this.selectedAsset.id,
                    Lots: parseFloat(this.investAmount.value),
                    OpenPrice: n,
                    StopLoss: t,
                    TakeProfit: l,
                    Expiration: 0,
                    Cmd: r.Constants.actions[this.action],
                    Slippage: 0,
                    Comment: "S: Webtrader"
                }
            }
            ,
            n.prototype.checkResponse = function(n, t) {
                if (console.log("check response", n),
                0 === n.status)
                    throw new p.AppError({
                        source: "Invest",
                        type: r.Constants.error.type.VALIDATION,
                        severity: "info",
                        code: n.code || "openTradeFailed",
                        message: "",
                        data: {
                            response: n,
                            request: t
                        }
                    });
                return n
            }
            ,
            n.prototype.onSubmit = function() {
                var n = this;
                return this.user.loggedIn ? (this.tradeToSend = this.createTrade(),
                this.requoteState = !1,
                this.popup.show = !0,
                this.popup.state = "processing",
                this.popup.data = {
                    title: this.translation.messages.orderProcessing
                },
                function() {
                    return new Promise(function(t, l) {
                        n.user.guest && l({
                            source: "Invest",
                            type: r.Constants.error.type.VALIDATION,
                            severity: "info",
                            code: "134",
                            message: "Anonimous mode",
                            data: {}
                        }),
                        t()
                    }
                    )
                }().then(function() {
                    return n.api.request.mt4OpenPosition(n.tradeToSend)
                }).then(function(t) {
                    return n.checkResponse(t, n.tradeToSend)
                }).then(function(t) {
                    n.popup.state = "success",
                    n.popup.data.title = n.translation.messages.orderSuccess,
                    n.popup.data.content = [n.translation.order + " #" + t.Trade.OrderID, [f.capitalize(n.translation.actionsId[r.Constants.actionsId[t.Trade.Cmd].replace("_limit", "").replace("_stop", "")]), t.Trade.Volume, n.selectedAsset.outputName, " " + n.translation.at + " ", n.tradeToSend.OpenPrice.toFixed(n.selectedAsset.digits)].join(" "), [n.tradeToSend.StopLoss ? n.translation.sl_at + " " + n.tradeToSend.StopLoss.toFixed(n.selectedAsset.digits) : "", n.tradeToSend.TakeProfit ? n.translation.tp_at + " " + n.tradeToSend.TakeProfit.toFixed(n.selectedAsset.digits) : ""].join(" ")].join("<br/>")
                }).catch(function(t) {
                    switch (t.code) {
                    case "134":
                        return n.popup.show = !1,
                        void (n.popup.errorCode = t.code);
                    case "138":
                        return void (n.requoteState = !0);
                    default:
                        return n.popup.state = "error",
                        n.popup.data.title = n.translation.messages[t.code] || n.translation.messages.orderFailed,
                        void (n.popup.data.content = "")
                    }
                })) : this.stateService.setOnce("forexLogin", {})
            }
            ,
            n.prototype.popupHide = function() {
                this.popup.show = !1
            }
            ,
            n.prototype.deposit = function() {
                this.popup.errorCode = !1,
                window.open(r.Constants.source.depositUrl, "_blank")
            }
            ,
            n.prototype.closeRequotePopup = function() {
                this.popup.show = !1,
                this.requoteState = !1
            }
            ,
            n = v([l.i(e.Component)({
                selector: "invest",
                template: l(630),
                animations: [l.i(e.trigger)("showPanel", [l.i(e.state)("inactive", l.i(e.style)({
                    height: "0px",
                    opacity: "0"
                })), l.i(e.state)("active", l.i(e.style)({
                    height: "*",
                    opacity: "1"
                })), l.i(e.transition)("inactive <=> active", l.i(e.animate)(200))])]
            }), m("design:paramtypes", [e.NgZone, a.a, i.a, u.a])], n)
        }()
    },
    145: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(203)
          , a = l(47)
          , i = l(11)
          , u = l(8)
          , o = l(15)
          , r = l(39)
          , d = l(54)
          , c = (l.n(d),
        l(32));
        l.n(c);
        l.d(t, "b", function() {
            return h
        }),
        l.d(t, "a", function() {
            return g
        });
        var p = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , f = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , h = function() {
            function n(n, t) {
                var l = this;
                this.zone = n,
                this.cd = t,
                this.stateService = u.stateService,
                this.userService = o.userService,
                this.serverTimeService = r.serverTimeService,
                this.timezone = this.serverTimeService.clientTimezone,
                this.settingsService = i.settingsService,
                this.timezoneSubscribe = this.stateService.get("clientTimezone").subscribe(function(n) {
                    return l.timezone = n.id
                }),
                this.user = this.userService.get(),
                this.translation = this.settingsService.get("translation"),
                this.langSubscribe = this.stateService.get("lang").subscribe(function() {
                    l.zone.run(function() {
                        l.translation = l.settingsService.get("translation")
                    })
                })
            }
            return n.prototype.ngOnInit = function() {
                var n = this;
                this.askSubscribe = this.trade.asset.ask$.subscribe(function() {
                    return n.cd.markForCheck()
                }),
                this.bidSubscribe = this.trade.asset.bid$.subscribe(function() {
                    return n.cd.markForCheck()
                }),
                this.stopLossSubscribe = this.trade.stopLoss$.subscribe(function() {
                    return n.cd.markForCheck()
                }),
                this.takeProfitSubscribe = this.trade.takeProfit$.subscribe(function() {
                    return n.cd.markForCheck()
                })
            }
            ,
            n.prototype.closeTrade = function(n, t) {
                t.preventDefault(),
                t.stopPropagation(),
                this.stateService.setOnce("closetrade", {
                    trade: n
                })
            }
            ,
            n.prototype.updateSlTp = function(n, t, l) {
                l.preventDefault(),
                l.stopPropagation(),
                this.stateService.setOnce("sltp", {
                    trade: n,
                    type: t
                })
            }
            ,
            n.prototype.ngOnDestroy = function() {
                this.timezoneSubscribe && this.timezoneSubscribe.unsubscribe(),
                this.askSubscribe && this.askSubscribe.unsubscribe(),
                this.bidSubscribe && this.bidSubscribe.unsubscribe(),
                this.stopLossSubscribe && this.stopLossSubscribe.unsubscribe(),
                this.takeProfitSubscribe && this.takeProfitSubscribe.unsubscribe(),
                this.langSubscribe && this.langSubscribe.unsubscribe(),
                this.user = null
            }
            ,
            p([l.i(e.Input)(), f("design:type", s.a)], n.prototype, "trade", void 0),
            p([l.i(e.Input)(), f("design:type", String)], n.prototype, "type", void 0),
            n = p([l.i(e.Component)({
                selector: "open-trade",
                template: l(631),
                changeDetection: e.ChangeDetectionStrategy.OnPush
            }), f("design:paramtypes", [e.NgZone, e.ChangeDetectorRef])], n)
        }()
          , g = function() {
            function n(n, t, l) {
                var e = this;
                this.zone = n,
                this.openTradeService = t,
                this.cd = l,
                this.stateService = u.stateService,
                this.settingsService = i.settingsService,
                this.trades = [],
                this.tradeTitles = [{
                    id: "orderId",
                    field: "orderId",
                    width: "7",
                    dir: "desc"
                }, {
                    id: "openTime",
                    field: "openTime",
                    width: "10",
                    dir: "desc"
                }, {
                    id: "asset",
                    field: "outputName",
                    width: "7",
                    dir: "asc"
                }, {
                    id: "direction",
                    field: "action",
                    width: "5",
                    dir: "asc"
                }, {
                    id: "amount",
                    field: "amount",
                    width: "7",
                    dir: "asc"
                }, {
                    id: "openPrice",
                    field: "openPrice",
                    width: "7",
                    dir: "asc"
                }, {
                    id: "closePrice",
                    field: "closePrice",
                    width: "7",
                    dir: "asc"
                }, {
                    id: "stopLoss",
                    field: "stopLoss",
                    width: "10",
                    dir: "asc"
                }, {
                    id: "takeProfit",
                    field: "takeProfit",
                    width: "10",
                    dir: "asc"
                }, {
                    id: "commission",
                    field: "commission",
                    width: "7",
                    dir: "asc"
                }, {
                    id: "swap",
                    field: "swap",
                    width: "5",
                    dir: "asc"
                }, {
                    id: "profit",
                    field: "profit",
                    width: "8",
                    dir: "asc"
                }, {
                    id: "close",
                    field: "close",
                    width: "10",
                    dir: "asc"
                }],
                this.activeTitle = c.find(this.tradeTitles, {
                    field: "openTime"
                }),
                this.translation = this.settingsService.get("translation"),
                this.langSubscribe = this.stateService.get("lang").subscribe(function() {
                    e.zone.run(function() {
                        e.translation = e.settingsService.get("translation"),
                        e.cd.markForCheck()
                    })
                })
            }
            return n.prototype.ngOnInit = function() {
                var n = this;
                this.zone.run(function() {
                    return n.filterTrades({
                        field: n.activeTitle.field,
                        dir: n.activeTitle.dir
                    })
                }),
                this.renderSubscribe = this.openTradeService.render.subscribe(function(t) {
                    return n.filterTrades({
                        field: n.activeTitle.field,
                        dir: n.activeTitle.dir
                    })
                })
            }
            ,
            n.prototype.ngOnDestroy = function() {
                this.trades = [],
                this.renderSubscribe && this.renderSubscribe.unsubscribe(),
                this.langSubscribe && this.langSubscribe.unsubscribe()
            }
            ,
            n.prototype.sortBy = function(n) {
                this.activeTitle === n ? this.activeTitle.dir = "asc" === this.activeTitle.dir ? "desc" : "asc" : this.activeTitle = n,
                this.filterTrades({
                    field: this.activeTitle.field,
                    dir: this.activeTitle.dir
                })
            }
            ,
            n.prototype.filterTrades = function(n) {
                this.openTradeService.collection && ("pending" === this.type ? this.trades = this.openTradeService.collection.findBy({}, function(n) {
                    return n.actionCode >= 2
                }, n) : this.trades = this.openTradeService.collection.findBy({}, function(n) {
                    return n.actionCode < 2
                }, n),
                this.ps.update(),
                this.cd.markForCheck())
            }
            ,
            n.prototype.selectAsset = function(n) {
                this.activeTrade = n,
                this.stateService.set("selectedAsset", n.asset)
            }
            ,
            p([l.i(e.Input)(), f("design:type", String)], n.prototype, "type", void 0),
            p([l.i(e.ViewChild)(d.PerfectScrollbarComponent), f("design:type", d.PerfectScrollbarComponent)], n.prototype, "ps", void 0),
            n = p([l.i(e.Component)({
                selector: "open-trades",
                template: l(632),
                changeDetection: e.ChangeDetectionStrategy.OnPush
            }), f("design:paramtypes", [e.NgZone, a.a, e.ChangeDetectorRef])], n)
        }()
    },
    146: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(4)
          , a = l(8)
          , i = l(46)
          , u = l(45)
          , o = l(22)
          , r = l(15)
          , d = l(9)
          , c = l(11)
          , p = l(27)
          , f = l(33)
          , h = l(32)
          , g = (l.n(h),
        l(193))
          , v = l.n(g)
          , m = l(14);
        l.d(t, "a", function() {
            return C
        });
        var y = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , b = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , C = function() {
            function n(n, t, l, e, s, i) {
                var u = this;
                this.investCalcService = n,
                this.currencyConvertService = t,
                this.assetService = l,
                this.decimalPipe = e,
                this.utils = s,
                this.zone = i,
                this.isShow = !1,
                this.stateService = a.stateService,
                this.userService = r.userService,
                this.settingsService = c.settingsService,
                this.api = p.api,
                this.popup = {
                    show: !1,
                    data: {},
                    state: ""
                },
                this.defaultProfitLoss = {
                    checked: !1,
                    pips: {
                        value: "0",
                        lock: !1
                    },
                    rate: {
                        value: "0",
                        lock: !1
                    }
                },
                this.defaultReach = {
                    checked: !1,
                    value: "0"
                },
                this.validators = {
                    number: v()({
                        prefix: "",
                        includeThousandsSeparator: !1
                    }),
                    rate: [/\d/],
                    amount: v()({
                        prefix: "",
                        allowDecimal: !0,
                        decimalLimit: 2,
                        includeThousandsSeparator: !1
                    })
                },
                this.chartConfig = {
                    layout: "layout2",
                    dot: !0
                },
                this.chartConfigPanda = {
                    realTime: !0,
                    verticalToolbar: !1,
                    horizontalToolbar: !1,
                    floatingToolbar: !1,
                    chartType: "area",
                    timezone: "Etc/GMT",
                    loadCssThemes: !1
                },
                this.instanceId = (99999 * Math.random()).toString(),
                this.resetModels(),
                this.user = this.userService.get(),
                this.translation = this.settingsService.get("translation"),
                this.langSubscribe = this.stateService.get("lang").subscribe(function() {
                    u.zone.run(function() {
                        u.translation = u.settingsService.get("translation")
                    })
                })
            }
            return n.prototype.ngOnInit = function() {
                var n = this;
                this.toastStatus = "",
                this.toastContent = "",
                this.showSpinner = !1,
                this.sltpSubscribe = this.stateService.getOnce("sltp").filter(function(n) {
                    return !!n
                }).filter(function(n) {
                    return n.trade
                }).subscribe(function(t) {
                    n.trade = h.clone(t.trade),
                    n.trade.asset = t.trade.asset,
                    n.type = t.type,
                    n.action = n.trade.action,
                    n.selectedAsset = n.trade.asset,
                    n.reach.value = n.trade.openPrice.toFixed(n.selectedAsset.digits),
                    n.isShow = !0,
                    n.assetWatch && n.assetWatch.unsubscribe(),
                    n.addAssetWatch(),
                    n.trade.stopLoss && (n.lockStopLoss("rate"),
                    n.stopLoss.checked = !0,
                    n.user.amf && (n.stopLoss.pips.value = Math.floor(n.requiredMargin() / n.pipValue()).toString()),
                    n.stopLoss.rate.value = n.trade.stopLoss.toFixed(n.selectedAsset.digits),
                    n.calcAll()),
                    n.trade.takeProfit && (n.lockTakeProfit("rate"),
                    n.takeProfit.checked = !0,
                    n.takeProfit.rate.value = n.trade.takeProfit.toFixed(n.selectedAsset.digits),
                    n.calcAll()),
                    n.validators.rate = v()({
                        prefix: "",
                        allowDecimal: !0,
                        decimalLimit: n.trade.asset.digits,
                        includeThousandsSeparator: !1
                    })
                })
            }
            ,
            n.prototype.ngOnDestroy = function() {
                this.assetWatch && this.assetWatch.unsubscribe(),
                this.sltpSubscribe && this.sltpSubscribe.unsubscribe(),
                this.close(),
                this.user = null,
                this.langSubscribe && this.langSubscribe.unsubscribe()
            }
            ,
            n.prototype.publishSlTp = function(n) {
                if (n)
                    return this.stateService.set("sltp" + this.instanceId, {
                        price: null,
                        stopLoss: null,
                        takeProfit: null
                    });
                this.stateService.set("sltp" + this.instanceId, {
                    price: this.reach.checked ? this.reach.value : null,
                    stopLoss: this.stopLoss.checked ? this.stopLoss.rate.value : null,
                    takeProfit: this.takeProfit.checked ? this.takeProfit.rate.value : null
                })
            }
            ,
            n.prototype.close = function() {
                this.popup.show = !1,
                this.resetModels(),
                this.trade = null,
                this.isShow = !1,
                this.toastStatus = "",
                this.toastContent = "",
                this.showSpinner = !1
            }
            ,
            n.prototype.resetModels = function() {
                this.stopLoss = h.cloneDeep(this.defaultProfitLoss),
                this.takeProfit = h.cloneDeep(this.defaultProfitLoss),
                this.reach = h.cloneDeep(this.defaultReach),
                this.publishSlTp(!0)
            }
            ,
            n.prototype.addAssetWatch = function() {
                var n = this;
                this.assetWatch = this.selectedAsset.bid$.filter(function() {
                    return !!n.action
                }).subscribe(function() {
                    return n.calcAll()
                })
            }
            ,
            n.prototype.calcAll = function() {
                return this.stopLoss.checked && this.updateStopLoss(),
                this.takeProfit.checked && this.updateTakeProfit(),
                this.publishSlTp()
            }
            ,
            n.prototype.updateStopLoss = function() {
                return this.stopLoss.rate.lock || (this.stopLoss.rate.value = this.calcLossRate().toFixed(this.selectedAsset.digits)),
                this.stopLoss.pips.lock || (this.stopLoss.pips.value = this.calcLossPips()),
                this.publishSlTp()
            }
            ,
            n.prototype.updateTakeProfit = function() {
                return this.takeProfit.rate.lock || (this.takeProfit.rate.value = this.calcProfitRate().toFixed(this.selectedAsset.digits)),
                this.takeProfit.pips.lock || (this.takeProfit.pips.value = this.calcProfitPips()),
                this.publishSlTp()
            }
            ,
            n.prototype.unlockStopLoss = function() {
                this.stopLoss.pips.lock = !1,
                this.stopLoss.rate.lock = !1
            }
            ,
            n.prototype.unlockTakeProfit = function() {
                this.takeProfit.pips.lock = !1,
                this.takeProfit.rate.lock = !1
            }
            ,
            n.prototype.toggleStopLoss = function(n) {
                this.stopLoss.rate = h.cloneDeep(this.defaultProfitLoss.rate),
                this.stopLoss.pips = h.cloneDeep(this.defaultProfitLoss.pips),
                this.stopLoss.checked = (!n || "off" != n) && !this.stopLoss.checked,
                this.stopLoss.checked ? (this.lockStopLoss("pips"),
                this.calcAll()) : this.publishSlTp()
            }
            ,
            n.prototype.toggleTakeProfit = function(n) {
                this.takeProfit.rate = h.cloneDeep(this.defaultProfitLoss.rate),
                this.takeProfit.pips = h.cloneDeep(this.defaultProfitLoss.pips),
                this.takeProfit.checked = (!n || "off" != n) && !this.takeProfit.checked,
                this.takeProfit.checked ? (this.lockTakeProfit("pips"),
                this.calcAll()) : this.publishSlTp()
            }
            ,
            n.prototype.lockStopLoss = function(n) {
                this.unlockStopLoss(),
                this.stopLoss[n].lock = !0
            }
            ,
            n.prototype.lockTakeProfit = function(n) {
                this.unlockTakeProfit(),
                this.takeProfit[n].lock = !0
            }
            ,
            n.prototype.calcLoss = function(n, t, l, e) {
                return n.match(/^sell/) ? t + l : n.match(/^buy/) ? t - l : void 0
            }
            ,
            n.prototype.calcProfit = function(n, t, l, e) {
                return n.match(/^sell/) ? t - l : n.match(/^buy/) ? t + l : void 0
            }
            ,
            n.prototype.calcLossRate = function() {
                var n = this.selectedAsset.digits
                  , t = this.investCalcService.getPoints(10 * parseInt(this.stopLoss.pips.value, 10), n)
                  , l = this.trade.actionCode > 1 ? parseFloat(this.reach.value) : this.investCalcService.getUpdatedPrice(this.action, this.selectedAsset);
                return this.calcLoss(this.action, l, t, n)
            }
            ,
            n.prototype.calcLossPips = function() {
                var n = 0
                  , t = 0
                  , l = this.trade.actionCode > 1 ? parseFloat(this.reach.value) : this.investCalcService.getUpdatedPrice(this.action, this.selectedAsset);
                return this.action.match(/^sell/) && (n = parseFloat(this.stopLoss.rate.value) - l),
                this.action.match(/^buy/) && (n = l - parseFloat(this.stopLoss.rate.value)),
                t = this.investCalcService.fromPoints(n / 10, this.selectedAsset.digits),
                t.toFixed(0)
            }
            ,
            n.prototype.calcLossValue = function() {
                var n = this.stopLoss.pips.lock ? 1 : 2
                  , t = 10 * (parseFloat(this.stopLoss.pips.value) || 0)
                  , l = parseFloat(this.stopLoss.rate.value) || 0
                  , e = 1 === n ? t : l
                  , s = this.calcProfitPrice(this.action, e, n, "stopLoss", this.trade.lots);
                return this.stopLoss.checked && !1 === isNaN(s) ? s.toFixed(2) : "0"
            }
            ,
            n.prototype.calcProfitRate = function() {
                var n = this.selectedAsset.digits
                  , t = this.investCalcService.getPoints(10 * parseInt(this.takeProfit.pips.value, 10), n)
                  , l = this.trade.actionCode > 1 ? parseFloat(this.reach.value) : this.investCalcService.getUpdatedPrice(this.action, this.selectedAsset);
                return this.calcProfit(this.action, l, t, n)
            }
            ,
            n.prototype.calcProfitPips = function() {
                var n = 0
                  , t = 0
                  , l = this.trade.actionCode > 1 ? parseFloat(this.reach.value) : this.investCalcService.getUpdatedPrice(this.action, this.selectedAsset);
                return this.action.match(/^sell/) && (n = l - parseFloat(this.takeProfit.rate.value)),
                this.action.match(/^buy/) && (n = parseFloat(this.takeProfit.rate.value) - l),
                t = this.investCalcService.fromPoints(n / 10, this.selectedAsset.digits),
                t.toFixed(0)
            }
            ,
            n.prototype.calcProfitValue = function() {
                var n = this.stopLoss.pips.lock ? 1 : 2
                  , t = 10 * (parseFloat(this.takeProfit.pips.value) || 0)
                  , l = parseFloat(this.takeProfit.rate.value) || 0
                  , e = 1 === n ? t : l
                  , s = this.calcProfitPrice(this.action, e, n, "takeProfit", this.trade.lots);
                return this.takeProfit.checked && !1 === isNaN(s) ? s.toFixed(2) : "0"
            }
            ,
            n.prototype.requiredMargin = function() {
                return this.user.loggedIn && this.selectedAsset && this.trade.lots > 0 ? this.investCalcService.getRequiredMargin(this.trade.lots, this.selectedAsset, this.action, this.user) : 0
            }
            ,
            n.prototype.calcProfitPrice = function(n, t, l, e, s) {
                var a, i = this.trade.actionCode > 1 ? parseFloat(this.reach.value) : this.investCalcService.getUpdatedPrice(this.action, this.selectedAsset), u = 1 === l ? this.investCalcService.getClosePriceFromPoints(n, this.selectedAsset, i, t, e) : t, o = s, r = this.selectedAsset.currency, d = this.user.currency, c = this.investCalcService.getPairVal(n, i, u);
                return 0 === this.selectedAsset.profitMode && (r = this.selectedAsset.outputName.slice(-3)),
                a = this.selectedAsset.profitMode < 2 ? c * this.selectedAsset.contractSize * o : c * (this.selectedAsset.tickPrice / this.selectedAsset.tickSize) * o,
                a = this.currencyConvertService.currencyConvert(r, d, a, n, this.selectedAsset.profitMode)
            }
            ,
            n.prototype.pipValue = function() {
                return this.selectedAsset && this.trade.lots > 0 ? this.calcProfitPrice("buy", 10, 1, "takeProfit", this.trade.lots) : 0
            }
            ,
            n.prototype.updateReach = function(n) {
                this.calcAll()
            }
            ,
            n.prototype.updateAction = function(n) {
                var t = parseFloat(n);
                this.action.match(/^buy/) ? (t < this.selectedAsset.markupAsk() && (this.action = "buy_limit"),
                t > this.selectedAsset.markupAsk() && (this.action = "buy_stop")) : this.action.match(/^sell/) && (t > this.selectedAsset.markupBid() && (this.action = "sell_limit"),
                t < this.selectedAsset.markupBid() && (this.action = "sell_stop"))
            }
            ,
            n.prototype.createTrade = function() {
                var n = this.investCalcService.getOpenPrice(this.action, this.selectedAsset);
                console.log(this.stopLoss);
                var t = (this.stopLoss.pips.lock ? this.calcLossRate() : parseFloat(this.stopLoss.rate.value)) || 0
                  , l = (this.takeProfit.pips.lock ? this.calcProfitRate() : parseFloat(this.takeProfit.rate.value)) || 0;
                return this.toastContent = "",
                this.showSpinner = !0,
                {
                    OrderID: this.trade.orderId,
                    OpenPrice: this.trade.actionCode > 1 ? parseFloat(this.reach.value) : n,
                    StopLoss: t,
                    TakeProfit: l
                }
            }
            ,
            n.prototype.validateLimitStop = function() {
                var n = this.selectedAsset
                  , t = this.action
                  , l = this.reach.checked
                  , e = parseFloat(this.reach.value);
                return "buy_stop" === t && l && e > n.markupAsk() || "sell_stop" === t && l && e < n.markupBid() || "sell_limit" === t && l && e > n.markupBid() || "buy_limit" === t && l && e < n.markupAsk()
            }
            ,
            n.prototype.validateBuySell = function() {
                if (this.selectedAsset && this.action) {
                    var n = this.action
                      , t = this.selectedAsset
                      , l = (this.takeProfit.pips.lock ? this.calcProfitRate() : parseFloat(this.takeProfit.rate.value)) || 0
                      , e = (this.stopLoss.pips.lock ? this.calcLossRate() : parseFloat(this.stopLoss.rate.value)) || 0
                      , s = this.trade.actionCode > 1
                      , a = parseFloat(this.reach.value);
                    return n.match(/^buy/) ? 0 === l && 0 === e || (0 === l ? s ? a > e : t.markupAsk() > e : 0 === e ? s ? a < l : t.markupAsk() < l : s ? a < l && a > e : t.markupAsk() < l && t.markupAsk() > e) : n.match(/^sell/) ? 0 === l && 0 === e || (0 === l ? s ? a < e : t.markupBid() < e : 0 === e ? s ? a > l : t.markupBid() > l : s ? a > l && a < e : t.markupBid() > l && t.markupBid() < e) : void 0
                }
            }
            ,
            n.prototype.validate = function() {
                if (this.selectedAsset)
                    return this.validateBuySell()
            }
            ,
            n.prototype.checkResponse = function(n, t) {
                if (0 === n.status)
                    throw new f.AppError({
                        source: "SltpUpdate",
                        type: d.Constants.error.type.VALIDATION,
                        severity: "info",
                        code: n.code || "updateTradeFailed",
                        message: "",
                        data: {
                            response: n,
                            request: t
                        }
                    });
                return n
            }
            ,
            n.prototype.onSubmit = function() {
                var n = this
                  , t = this.createTrade();
                this.api.request.mt4UpdatePosition(t).then(function(l) {
                    return n.checkResponse(l, t)
                }).then(this.utils.wait(300)).then(function(t) {
                    return n.close()
                }).catch(function(t) {
                    console.warn(t),
                    n.showSpinner = !1,
                    n.toastStatus = "error",
                    n.toastContent = n.translation.messages[t.code] || n.translation.messages.general_error
                }),
                this.popup.state = "processing",
                this.popup.data = {
                    title: ""
                }
            }
            ,
            n = y([l.i(e.Component)({
                selector: "sltp-popup",
                template: l(634),
                animations: [l.i(e.trigger)("fadeInOut", [l.i(e.transition)(":enter", [l.i(e.style)({
                    opacity: 0
                }), l.i(e.animate)(300, l.i(e.style)({
                    opacity: 1
                }))]), l.i(e.transition)(":leave", [l.i(e.animate)(300, l.i(e.style)({
                    opacity: 0
                }))])])]
            }), b("design:paramtypes", [i.a, u.a, o.a, s.DecimalPipe, m.a, e.NgZone])], n)
        }()
    },
    147: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(9)
          , a = l(11)
          , i = l(8)
          , u = l(25)
          , o = l(32);
        l.n(o);
        l.d(t, "a", function() {
            return c
        });
        var r = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , d = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , c = function() {
            function n(n, t) {
                var l = this;
                this.$winRef = n,
                this.zone = t,
                this.settingsService = a.settingsService,
                this.stateService = i.stateService,
                this.pnlWidgetOffset = 0,
                this.dateRanges = s.Constants.dateRanges.filter(function(n, t) {
                    return t < 1
                }),
                this.dateRange = this.dateRanges[0],
                this.dateRangesConfig = {
                    label: "value",
                    id: "value",
                    defaultLabel: "Please select",
                    type: "list",
                    translationKey: "dateRange"
                },
                this.historyState = !1,
                this.historyPopupConfig = {
                    backdrop: !0,
                    className: "history-popup"
                },
                this.rtl = !1,
                this.tabs = s.Constants.tradingTabs,
                this.activeTab = o.find(this.tabs, {
                    selected: !0
                }),
                this.translation = this.settingsService.get("translation"),
                this.langSubscribe = this.stateService.get("lang").subscribe(function(n) {
                    l.rtl = "ar" === n,
                    l.zone.run(function() {
                        l.translation = l.settingsService.get("translation")
                    })
                })
            }
            return n.prototype.ngOnInit = function() {
                var n = this;
                this.tradesSubscribe = this.stateService.get("trades").distinctUntilChanged().filter(function(n) {
                    return !!n
                }).subscribe(function(t) {
                    n.tabs.forEach(function(n) {
                        t.hasOwnProperty(n.name) && (n.count = t[n.name])
                    })
                }),
                this.pnlResize()
            }
            ,
            n.prototype.ngOnDestroy = function() {
                this.tradesSubscribe && this.tradesSubscribe.unsubscribe(),
                this.langSubscribe && this.langSubscribe.unsubscribe()
            }
            ,
            n.prototype.changeTab = function(n) {
                this.activeTab = n
            }
            ,
            n.prototype.pnlResize = function(n) {}
            ,
            n.prototype.closeHistoryPopup = function() {
                this.historyState = !1
            }
            ,
            n.prototype.updateDateRange = function() {
                this.historyState = !0
            }
            ,
            r([l.i(e.HostListener)("window:resize", ["$event"]), d("design:type", Function), d("design:paramtypes", [Object]), d("design:returntype", void 0)], n.prototype, "pnlResize", null),
            n = r([l.i(e.Component)({
                selector: "tabs",
                template: l(635)
            }), d("design:paramtypes", [u.WindowRef, e.NgZone])], n)
        }()
    },
    148: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(8)
          , a = l(47)
          , i = l(64)
          , u = l(25)
          , o = l(22)
          , r = l(15)
          , d = l(9)
          , c = l(102)
          , p = l(65)
          , f = l(14)
          , h = l(11)
          , g = l(27);
        l.d(t, "a", function() {
            return y
        });
        var v = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , m = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , y = function() {
            function n(n, t, l, e, a, i, u, o) {
                var d = this;
                this.$window = n,
                this.zone = t,
                this.assetService = l,
                this.openTradeService = e,
                this.closedTradeService = a,
                this.pnlService = i,
                this.favoritesService = u,
                this.utils = o,
                this.stateService = s.stateService,
                this.userService = r.userService,
                this.loginStatus = !1,
                this.showSpinner = !1,
                this.platformState = "success",
                this.status = !1,
                this.settingsService = h.settingsService,
                this.api = g.api,
                this.marginCallState = !1,
                this.marginCallPopupConfig = {
                    width: 45,
                    height: 35,
                    className: "margin-call-popup",
                    backdrop: !0
                },
                this.translation = this.settingsService.get("translation"),
                this.langSubscribe = this.stateService.get("lang").subscribe(function() {
                    d.zone.run(function() {
                        d.translation = d.settingsService.get("translation")
                    })
                })
            }
            return n.prototype.ngOnInit = function() {
                var n = this;
                this.showSpinner = !0,
                this.appSubscribe = this.stateService.get("app").filter(function(n) {
                    return !!n
                }).subscribe(function(t) {
                    n.zone.run(function() {
                        t.status && (n.user = n.userService.get(),
                        n.loginStatus = n.user.loggedIn,
                        n.initServices().then(function() {
                            n.showSpinner = !1,
                            n.status = !0,
                            n.platformState = "success"
                        }).catch(function(t) {
                            n.showSpinner = !1,
                            n.platformState = "error"
                        })),
                        t.status || n.clearServices().then(function() {
                            return n.status = !1
                        })
                    })
                }),
                this.userSubscribe = this.stateService.get("user").distinctUntilChanged().filter(function(n) {
                    return !!n
                }).subscribe(function(t) {
                    return n.zone.run(function() {
                        return n.restart()
                    })
                }),
                this.switchAccountSubscribe = this.stateService.get("switchAccount").distinctUntilChanged().filter(function(n) {
                    return !!n
                }).subscribe(function(t) {
                    return n.zone.run(function() {
                        return n.restart()
                    })
                }),
                this.assetSubscribe = this.stateService.get("selectedAsset").distinctUntilChanged().filter(function(n) {
                    return !!n
                }).subscribe(function(t) {
                    return n.selectedAsset = t
                })
            }
            ,
            n.prototype.ngOnDestroy = function() {
                this.marginCallState = !1,
                this.api.unsubscribe("MT4MarginCallAdd"),
                this.appSubscribe && this.appSubscribe.unsubscribe(),
                this.userSubscribe && this.userSubscribe.unsubscribe(),
                this.switchAccountSubscribe && this.switchAccountSubscribe.unsubscribe(),
                this.assetSubscribe && this.assetSubscribe.unsubscribe(),
                this.langSubscribe && this.langSubscribe.unsubscribe()
            }
            ,
            n.prototype.getAssetCountry = function(n) {
                return d.Constants.symbolSubst.hasOwnProperty(n) ? d.Constants.symbolSubst[n] : n
            }
            ,
            n.prototype.restart = function() {
                var n = this;
                return this.user = this.userService.get(),
                this.status = !1,
                this.showSpinner = !0,
                Promise.resolve().then(this.utils.wait(100)).then(function() {
                    return n.clearServices()
                }).then(function() {
                    return n.initServices()
                }).then(function() {
                    n.status = !0,
                    n.showSpinner = !1
                })
            }
            ,
            n.prototype.initServices = function() {
                var n = this;
                return this.api.subscribe("MT4MarginCallAdd", function(t) {
                    n.marginCallState = !0
                }),
                Promise.resolve().then(function() {
                    return n.favoritesService.init()
                }).then(function() {
                    return n.assetService.init()
                }).then(function() {
                    return n.openTradeService.init()
                }).then(function() {
                    return n.closedTradeService.init()
                }).then(function() {
                    return n.pnlService.init()
                }).then(function() {
                    return n.stateService.set("platform:start")
                }).catch(function(n) {
                    throw new Error("Platform init failed")
                })
            }
            ,
            n.prototype.clearServices = function() {
                var n = this;
                return this.stateService.set("platform:stop"),
                this.marginCallState = !1,
                this.api.unsubscribe("MT4MarginCallAdd"),
                Promise.resolve().then(function() {
                    return n.pnlService.clear()
                }).then(function() {
                    return n.openTradeService.clear()
                }).then(function() {
                    return n.closedTradeService.clear()
                }).then(function() {
                    return n.assetService.clear()
                }).catch(function(t) {
                    return n.refresh()
                })
            }
            ,
            n.prototype.refresh = function() {
                this.$window.nativeWindow.document.location.reload()
            }
            ,
            n.prototype.closeMarginCallPopup = function() {
                this.marginCallState = !1
            }
            ,
            n.prototype.deposit = function() {
                window.open(d.Constants.source.depositUrl, "_blank")
            }
            ,
            n = v([l.i(e.Component)({
                selector: "panda-forex-trading-platform",
                template: l(636)
            }), m("design:paramtypes", [u.WindowRef, e.NgZone, o.a, a.a, i.a, c.a, p.a, f.a])], n)
        }()
    },
    149: function(n, t, l) {
        "use strict";
        var e = l(69)
          , s = (l.n(e),
        l(9));
        l.d(t, "a", function() {
            return a
        });
        var a = function() {
            function n(n, t, l) {
                void 0 === t && (t = !0),
                void 0 === l && (l = !1),
                this.openPrice = 0,
                this.closePrice = 0,
                this.bid$ = new e.Subject,
                this.ask$ = new e.Subject,
                this.lastUpdate$ = new e.Subject,
                this.bidDirection = "",
                this.askDirection = "",
                this.isFavorite = !1,
                this.flagLeft = "",
                this.flagRight = "",
                this.flag = "",
                this.id = n.id,
                this.outputName = n.OutputName,
                this.contractSize = n.ContractSize,
                this.category = n.Category,
                this.currency = n.Currency,
                this.description = n.Description,
                this.digits = n.Digits,
                this.digitsFormat = "1." + this.digits + "-" + this.digits,
                this.isShow = 1 === n.IsShow,
                this.isClean = 1 === n.IsClean,
                this.isTradeable = n.IsTradeable,
                this.marginMode = n.MarginMode,
                this.markup = n.Markup,
                this.profitMode = n.ProfitMode,
                this.percentage = n.Percentage,
                this.initialMargin = n.InitialMargin,
                this.tickSize = n.TickSize,
                this.tickPrice = n.TickValue,
                this.openPrice = 0,
                this.closePrice = 0,
                this.isActive = t,
                this.s = n.s,
                this.type = n.Type,
                this.buyPercent = n.BuyPercent,
                this.sellPercent = n.SellPercent,
                this.bid = n.Bid,
                this.bid$.next(n.Bid),
                this.ask = n.Ask,
                this.high = n.High,
                this.low = n.Low,
                this.lastPrice = n.LastPrice,
                this.lastUpdate = n.TickTime,
                this.lastUpdate$.next(n.TickTime),
                this.action = null,
                this.isFavorite = l || !1,
                this.prevAsk = n.Ask,
                this.prevBid = n.Bid,
                this.displayName = this.formatAssetName(n.OutputName, n.Category),
                this.nameLeft = n.OutputName.slice(0, 3).toLowerCase(),
                this.nameRight = n.OutputName.slice(3, 6).toLowerCase(),
                this.nameLowcase = n.OutputName.toLowerCase().replace(".", ""),
                this.tradingTimes = n.TradingTimes ? this.formatTradingTimes(n.TradingTimes) : "",
                this.spread = n.Spread,
                this.swapsLong = n.SwapsLong,
                this.swapsShort = n.SwapsShort,
                this.maxLot = n.MaxLot,
                this.minLot = n.MinLot,
                this.stepLot = n.StepLot,
                this.unit = n.Unit,
                this.expiration = n.Expiration,
                this.isSessionValid = n.IsCurrentSessionValid,
                this.lastVolume = n.LastVolume || 0,
                this.isClient = n.IsClient || !1;
                var s = "flag-icon-pandats-";
                this.flagLeft = s + this.getAssetCountry(this.nameLeft),
                this.flagRight = s + this.getAssetCountry(this.nameRight),
                this.flag = s + this.getAssetImage(this.nameLowcase)
            }
            return n.prototype.getAssetCountry = function(n) {
                return s.Constants.symbolSubst.hasOwnProperty(n) ? s.Constants.symbolSubst[n] : n
            }
            ,
            n.prototype.getAssetImage = function(n) {
                return s.Constants.assetSubst.hasOwnProperty(n) ? s.Constants.assetSubst[n] : n
            }
            ,
            n.prototype.dailyChange = function() {
                var n = 0 !== this.lastPrice ? (this.bid - this.lastPrice) / this.lastPrice * 100 : 0;
                return 0 === n ? Math.abs(n) : n
            }
            ,
            n.prototype.dailyChangeRender = function() {
                return this.dailyChange() > 0 ? "up" : "down"
            }
            ,
            n.prototype.markupBid = function() {
                return this.markup > 0 ? this.bid - Math.floor(this.markup / 2) * (1 / Math.pow(10, this.digits)) : this.markup < 0 ? this.bid - (this.markup - Math.floor(this.markup / 2)) * (1 / Math.pow(10, this.digits)) : this.bid
            }
            ,
            n.prototype.markupAsk = function() {
                return this.markup > 0 ? this.ask + (this.markup - Math.floor(this.markup / 2)) * (1 / Math.pow(10, this.digits)) : this.markup < 0 ? this.ask + Math.floor(this.markup / 2) * (1 / Math.pow(10, this.digits)) : this.ask
            }
            ,
            n.prototype.spreadCalc = function() {
                return this.spread > 0 ? this.spread + this.markup : 0
            }
            ,
            n.prototype.formatAssetName = function(n, t) {
                return "FOREX" == t ? n.slice(0, 3) + "/" + n.slice(3) : n
            }
            ,
            n.prototype.formatTradingTimes = function(n) {
                function t(n) {
                    return 1 === n.toString().length ? "0" + n : n
                }
                function l(n) {
                    return [t(n.OpenHour) + ":" + t(n.OpenMinute), t(n.CloseHour) + ":" + t(n.CloseMinute)]
                }
                function e(n) {
                    var t = [];
                    return n.forEach(function(n) {
                        t.push(l(n))
                    }),
                    t
                }
                function s(t) {
                    a[t] = e(n[t])
                }
                var a = {};
                return Object.keys(n).map(function(n) {
                    return s(n)
                }),
                a
            }
            ,
            n.prototype.update = function(n) {
                var t = parseFloat(n[1])
                  , l = parseFloat(n[2]);
                this.prevBid < this.bid ? this.bidDirection = "asset-up-pandats" === this.bidDirection ? "asset-up2-pandats" : "asset-up-pandats" : this.prevBid > this.bid && (this.bidDirection = "asset-down-pandats" === this.bidDirection ? "asset-down2-pandats" : "asset-down-pandats"),
                this.prevAsk < this.ask ? this.askDirection = "asset-up-pandats" === this.askDirection ? "asset-up2-pandats" : "asset-up-pandats" : this.prevAsk > this.ask && (this.askDirection = "asset-down-pandats" === this.askDirection ? "asset-down2-pandats" : "asset-down-pandats"),
                this.prevAsk = this.ask,
                this.prevBid = this.bid,
                this.high = n[3],
                this.low = n[4],
                this.lastUpdate = n[5],
                this.lastUpdate$.next(n[5]),
                this.lastPrice = n[6],
                this.bid = t,
                this.ask = l,
                this.bid$.next(t),
                this.ask$.next(l)
            }
            ,
            n
        }()
    },
    198: function(n, t, l) {
        "use strict";
        function e(n) {
            return a["ɵvid"](0, [a["ɵqud"](402653184, 1, {
                chartEl: 0
            }), a["ɵqud"](402653184, 2, {
                assetInfo: 0
            }), a["ɵqud"](402653184, 3, {
                orderinfo: 0
            }), a["ɵqud"](402653184, 4, {
                customInfo: 0
            }), (n()(),
            a["ɵeld"](4, 0, [[1, 0], ["chart", 1]], null, 0, "wc-panda-chart", [], null, null, null, null, null)), (n()(),
            a["ɵted"](-1, null, ["\n"]))], null, null)
        }
        function s(n) {
            return a["ɵvid"](0, [(n()(),
            a["ɵeld"](0, 0, null, null, 1, "chart", [], null, null, null, e, d)), a["ɵdid"](1, 4964352, null, 0, i.a, [u.a, o.a], null, null)], function(n, t) {
                n(t, 1, 0)
            }, null)
        }
        var a = l(2)
          , i = l(101)
          , u = l(22)
          , o = l(74);
        l.d(t, "b", function() {
            return d
        }),
        t.a = e;
        var r = []
          , d = a["ɵcrt"]({
            encapsulation: 2,
            styles: r,
            data: {}
        });
        a["ɵccf"]("chart", i.a, s, {
            asset: "asset",
            chartConfig: "chartConfig",
            instanceId: "instanceId"
        }, {}, [])
    },
    199: function(n, t, l) {
        "use strict";
        function e(n) {
            return i["ɵvid"](0, [(n()(),
            i["ɵeld"](0, 0, null, null, 7, "div", [["class", "btnGroup"]], null, null, null, null, null)), (n()(),
            i["ɵted"](-1, null, ["\n        "])), (n()(),
            i["ɵeld"](2, 0, null, null, 1, "button", [["class", "custom-input-pandats"]], null, [[null, "click"], [null, "mouseup"], [null, "mouseleave"], [null, "mouseout"], [null, "mousedown"], [null, "contextmenu"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.increase() && e
                }
                if ("mouseup" === t) {
                    e = !1 !== s.mouseUpFn() && e
                }
                if ("mouseleave" === t) {
                    e = !1 !== s.mouseUpFn() && e
                }
                if ("mouseout" === t) {
                    e = !1 !== s.mouseUpFn() && e
                }
                if ("mousedown" === t) {
                    e = !1 !== s.increaseRepeat() && e
                }
                if ("contextmenu" === t) {
                    e = !1 !== s.noop() && e
                }
                return e
            }, null, null)), (n()(),
            i["ɵted"](-1, null, ["+\n        "])), (n()(),
            i["ɵted"](-1, null, ["\n        "])), (n()(),
            i["ɵeld"](5, 0, null, null, 1, "button", [["class", "custom-input-pandats"]], null, [[null, "click"], [null, "mouseup"], [null, "mouseleave"], [null, "mouseout"], [null, "mousedown"], [null, "contextmenu"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.decrease() && e
                }
                if ("mouseup" === t) {
                    e = !1 !== s.mouseUpFn() && e
                }
                if ("mouseleave" === t) {
                    e = !1 !== s.mouseUpFn() && e
                }
                if ("mouseout" === t) {
                    e = !1 !== s.mouseUpFn() && e
                }
                if ("mousedown" === t) {
                    e = !1 !== s.decreaseRepeat() && e
                }
                if ("contextmenu" === t) {
                    e = !1 !== s.noop() && e
                }
                return e
            }, null, null)), (n()(),
            i["ɵted"](-1, null, ["-\n        "])), (n()(),
            i["ɵted"](-1, null, ["\n    "]))], null, null)
        }
        function s(n) {
            return i["ɵvid"](0, [(n()(),
            i["ɵeld"](0, 0, null, null, 18, "div", [], null, null, null, null, null)), i["ɵdid"](1, 278528, null, 0, u.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer], {
                ngClass: [0, "ngClass"]
            }, null), i["ɵpod"](2, {
                disabledGroup: 0
            }), (n()(),
            i["ɵted"](-1, null, ["\n    "])), (n()(),
            i["ɵeld"](4, 0, null, null, 10, "input", [["class", "custom-input-field-pandats"], ["type", "text"]], [[8, "autocomplete", 0], [1, "minlength", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "focus"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("input" === t) {
                    e = !1 !== i["ɵnov"](n, 6)._handleInput(l.target.value) && e
                }
                if ("blur" === t) {
                    e = !1 !== i["ɵnov"](n, 6).onTouched() && e
                }
                if ("compositionstart" === t) {
                    e = !1 !== i["ɵnov"](n, 6)._compositionStart() && e
                }
                if ("compositionend" === t) {
                    e = !1 !== i["ɵnov"](n, 6)._compositionEnd(l.target.value) && e
                }
                if ("input" === t) {
                    e = !1 !== i["ɵnov"](n, 10).onInput(l.target.value) && e
                }
                if ("blur" === t) {
                    e = !1 !== i["ɵnov"](n, 10)._onTouched() && e
                }
                if ("ngModelChange" === t) {
                    e = !1 !== (s.value = l) && e
                }
                if ("focus" === t) {
                    e = !1 !== s.onFocus() && e
                }
                return e
            }, null, null)), i["ɵdid"](5, 278528, null, 0, u.NgClass, [i.IterableDiffers, i.KeyValueDiffers, i.ElementRef, i.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), i["ɵdid"](6, 16384, null, 0, r.DefaultValueAccessor, [i.Renderer2, i.ElementRef, [2, r.COMPOSITION_BUFFER_MODE]], null, null), i["ɵdid"](7, 540672, null, 0, r.MinLengthValidator, [], {
                minlength: [0, "minlength"]
            }, null), i["ɵdid"](8, 540672, null, 0, r.MaxLengthValidator, [], {
                maxlength: [0, "maxlength"]
            }, null), i["ɵprd"](1024, null, r.NG_VALIDATORS, function(n, t) {
                return [n, t]
            }, [r.MinLengthValidator, r.MaxLengthValidator]), i["ɵdid"](10, 540672, null, 0, d.MaskedInputDirective, [i.Renderer, i.ElementRef], {
                textMaskConfig: [0, "textMaskConfig"]
            }, null), i["ɵprd"](1024, null, r.NG_VALUE_ACCESSOR, function(n, t) {
                return [n, t]
            }, [r.DefaultValueAccessor, d.MaskedInputDirective]), i["ɵdid"](12, 671744, null, 0, r.NgModel, [[8, null], [2, r.NG_VALIDATORS], [8, null], [2, r.NG_VALUE_ACCESSOR]], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), i["ɵprd"](2048, null, r.NgControl, null, [r.NgModel]), i["ɵdid"](14, 16384, null, 0, r.NgControlStatus, [r.NgControl], null, null), (n()(),
            i["ɵted"](-1, null, ["\n\n    "])), (n()(),
            i["ɵand"](16777216, null, null, 1, null, e)), i["ɵdid"](17, 16384, null, 0, u.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            i["ɵted"](-1, null, ["\n"]))], function(n, t) {
                var l = t.component;
                n(t, 1, 0, n(t, 2, 0, l.disabled)),
                n(t, 5, 0, "custom-input-field-pandats", l.isClass),
                n(t, 7, 0, l.minlength),
                n(t, 8, 0, l.maxlength),
                n(t, 10, 0, l.textMask),
                n(t, 12, 0, l.value),
                n(t, 17, 0, l.buttons.visible)
            }, function(n, t) {
                n(t, 4, 0, t.component.autocomplete, i["ɵnov"](t, 7).minlength ? i["ɵnov"](t, 7).minlength : null, i["ɵnov"](t, 8).maxlength ? i["ɵnov"](t, 8).maxlength : null, i["ɵnov"](t, 14).ngClassUntouched, i["ɵnov"](t, 14).ngClassTouched, i["ɵnov"](t, 14).ngClassPristine, i["ɵnov"](t, 14).ngClassDirty, i["ɵnov"](t, 14).ngClassValid, i["ɵnov"](t, 14).ngClassInvalid, i["ɵnov"](t, 14).ngClassPending)
            })
        }
        function a(n) {
            return i["ɵvid"](0, [(n()(),
            i["ɵeld"](0, 0, null, null, 2, "custom-input", [], null, null, null, s, p)), i["ɵprd"](5120, null, r.NG_VALUE_ACCESSOR, function(n) {
                return [n]
            }, [o.a]), i["ɵdid"](2, 770048, null, 0, o.a, [i.ElementRef], null, null)], function(n, t) {
                n(t, 2, 0)
            }, null)
        }
        var i = l(2)
          , u = l(4)
          , o = l(103)
          , r = l(5)
          , d = l(31);
        l.n(d);
        l.d(t, "b", function() {
            return p
        }),
        t.a = s;
        var c = []
          , p = i["ɵcrt"]({
            encapsulation: 2,
            styles: c,
            data: {}
        });
        i["ɵccf"]("custom-input", o.a, a, {
            disabled: "disabled",
            autocomplete: "autocomplete",
            isClass: "isClass",
            buttons: "buttons",
            validator: "validator",
            maxlength: "maxlength",
            minlength: "minlength"
        }, {
            getFocus: "getFocus"
        }, [])
    },
    200: function(n, t, l) {
        "use strict";
        function e(n) {
            return d["ɵvid"](0, [(n()(),
            d["ɵeld"](0, 0, null, null, 4, "div", [["class", "inner-popup-spinner-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n            "])), (n()(),
            d["ɵeld"](2, 0, null, null, 1, "spinner", [], null, null, null, c.a, c.b)), d["ɵdid"](3, 114688, null, 0, p.a, [], {
                isShow: [0, "isShow"],
                isBackdrop: [1, "isBackdrop"]
            }, null), (n()(),
            d["ɵted"](-1, null, ["\n        "]))], function(n, t) {
                n(t, 3, 0, "processing" === t.component.state, !1)
            }, null)
        }
        function s(n) {
            return d["ɵvid"](0, [(n()(),
            d["ɵeld"](0, 0, null, null, 0, "i", [["class", "icon-success-pandats cmicon-check2"]], null, null, null, null, null))], null, null)
        }
        function a(n) {
            return d["ɵvid"](0, [(n()(),
            d["ɵeld"](0, 0, null, null, 1, "div", [["class", "inner-popup-content-pandats"]], [[8, "innerHTML", 1]], null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n        "]))], null, function(n, t) {
                n(t, 0, 0, t.component.data.content)
            })
        }
        function i(n) {
            return d["ɵvid"](0, [d["ɵncd"](null, 0), (n()(),
            d["ɵand"](0, null, null, 0))], null, null)
        }
        function u(n) {
            return d["ɵvid"](0, [(n()(),
            d["ɵeld"](0, 0, null, null, 5, "button", [["class", "forex-button-pandats short-button-pandats"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.hide() && e
                }
                return e
            }, null, null)), d["ɵdid"](1, 278528, null, 0, f.NgClass, [d.IterableDiffers, d.KeyValueDiffers, d.ElementRef, d.Renderer], {
                klass: [0, "klass"]
            }, null), (n()(),
            d["ɵted"](2, null, ["\n                ", "("])), (n()(),
            d["ɵeld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(),
            d["ɵted"](4, null, ["", ""])), (n()(),
            d["ɵted"](-1, null, [")\n        "]))], function(n, t) {
                n(t, 1, 0, "forex-button-pandats short-button-pandats")
            }, function(n, t) {
                var l = t.component;
                n(t, 2, 0, l.translation.close),
                n(t, 4, 0, l.counter)
            })
        }
        function o(n) {
            return d["ɵvid"](0, [(n()(),
            d["ɵeld"](0, 0, null, null, 27, "div", [["class", "inner-popup-wrapper-pandats layout-column"]], null, null, null, null, null)), d["ɵdid"](1, 278528, null, 0, f.NgClass, [d.IterableDiffers, d.KeyValueDiffers, d.ElementRef, d.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(),
            d["ɵted"](-1, null, ["\n    "])), (n()(),
            d["ɵeld"](3, 0, null, null, 17, "div", [["class", "inner-popup-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n        "])), (n()(),
            d["ɵand"](16777216, null, null, 1, null, e)), d["ɵdid"](6, 16384, null, 0, f.NgIf, [d.ViewContainerRef, d.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            d["ɵted"](-1, null, ["\n\n        "])), (n()(),
            d["ɵand"](16777216, null, null, 1, null, s)), d["ɵdid"](9, 16384, null, 0, f.NgIf, [d.ViewContainerRef, d.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            d["ɵted"](-1, null, ["\n        "])), (n()(),
            d["ɵeld"](11, 0, null, null, 2, "h2", [["class", "helvetica-neue-pandats inner-title-pandats"]], null, null, null, null, null)), d["ɵdid"](12, 278528, null, 0, f.NgClass, [d.IterableDiffers, d.KeyValueDiffers, d.ElementRef, d.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(),
            d["ɵted"](13, null, ["", ""])), (n()(),
            d["ɵted"](-1, null, ["\n\n        "])), (n()(),
            d["ɵand"](16777216, null, null, 1, null, a)), d["ɵdid"](16, 16384, null, 0, f.NgIf, [d.ViewContainerRef, d.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            d["ɵted"](-1, null, ["\n\n        "])), (n()(),
            d["ɵand"](16777216, null, null, 1, null, i)), d["ɵdid"](19, 16384, null, 0, f.NgIf, [d.ViewContainerRef, d.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            d["ɵted"](-1, null, ["\n    "])), (n()(),
            d["ɵted"](-1, null, ["\n\n    "])), (n()(),
            d["ɵeld"](22, 0, null, null, 4, "div", [["class", "inner-popup-footer-pandats layout-row"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n        "])), (n()(),
            d["ɵand"](16777216, null, null, 1, null, u)), d["ɵdid"](25, 16384, null, 0, f.NgIf, [d.ViewContainerRef, d.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            d["ɵted"](-1, null, ["\n    "])), (n()(),
            d["ɵted"](-1, null, ["\n"])), (n()(),
            d["ɵted"](-1, null, ["\n"]))], function(n, t) {
                var l = t.component;
                n(t, 1, 0, "inner-popup-wrapper-pandats layout-column", l.state + "-pandats"),
                n(t, 6, 0, "processing" === l.state),
                n(t, 9, 0, "success" === l.state),
                n(t, 12, 0, "helvetica-neue-pandats inner-title-pandats", l.state),
                n(t, 16, 0, "processing" !== l.state),
                n(t, 19, 0, "processing" !== l.state),
                n(t, 25, 0, "processing" !== l.state)
            }, function(n, t) {
                n(t, 13, 0, t.component.data.title)
            })
        }
        function r(n) {
            return d["ɵvid"](0, [(n()(),
            d["ɵeld"](0, 0, null, null, 1, "popup", [], null, null, null, o, v)), d["ɵdid"](1, 770048, null, 0, h.a, [d.NgZone], null, null)], function(n, t) {
                n(t, 1, 0)
            }, null)
        }
        var d = l(2)
          , c = l(73)
          , p = l(57)
          , f = l(4)
          , h = l(105);
        l.d(t, "b", function() {
            return v
        }),
        t.a = o;
        var g = []
          , v = d["ɵcrt"]({
            encapsulation: 2,
            styles: g,
            data: {}
        });
        d["ɵccf"]("popup", h.a, r, {
            data: "data",
            state: "state"
        }, {
            isHide: "isHide"
        }, ["*"])
    },
    202: function(n, t, l) {
        "use strict";
        var e = l(9);
        l.d(t, "a", function() {
            return s
        });
        var s = function() {
            function n(n, t) {
                this.asset = t,
                this.orderId = n.OrderID,
                this.openPrice = n.OpenPrice,
                this.openTime = 1e3 * n.OpenTime,
                this.closePrice = n.ClosePrice,
                this.closeTime = 1e3 * n.CloseTime,
                this.contractSize = n.ContractSize,
                this.action = e.Constants.actionsId[n.Cmd],
                this.actionCode = n.Cmd,
                this.symbolId = n.id,
                this.outputName = n.OutputName,
                this.digits = n.Digits,
                this.lots = n.Volume,
                this.amount = n.ContractSize * n.Volume,
                this.stopLoss = n.sl,
                this.takeProfit = n.tp,
                this.commission = n.Commission,
                this.taxes = n.Taxes,
                this.swap = n.Storage,
                this.profit = n.Profit,
                this.comment = n.Comment,
                this.asset && (this.symbolCurrency = t.currency)
            }
            return n.prototype.clear = function() {
                this.asset = null
            }
            ,
            n
        }()
    },
    203: function(n, t, l) {
        "use strict";
        var e = l(69)
          , s = (l.n(e),
        l(9))
          , a = l(15);
        l.d(t, "a", function() {
            return i
        });
        var i = function() {
            function n(n, t, l, i, u) {
                var o = this;
                this.selectedAsset = t,
                this.investCalcService = l,
                this.currencyConvertService = i,
                this.assetService = u,
                this.userService = a.userService,
                this.stopLoss$ = new e.Subject,
                this.takeProfit$ = new e.Subject,
                this.closePriceDirection = "",
                this.profitDirection = "",
                this.asset = t,
                this.assetId = this.selectedAsset.id,
                this.orderId = n.OrderID,
                this.outputName = n.OutputName,
                this.action = s.Constants.actionsId[n.Cmd],
                this.actionCode = n.Cmd,
                this.openPrice = n.OpenPrice,
                this.openTime = 1e3 * n.OpenTime,
                this.closeTime = 1e3 * n.CloseTime,
                this.digits = n.Digits,
                this.lots = n.Volume,
                this.contractSize = n.ContractSize,
                this.amount = this.contractSize * this.lots,
                this.stopLoss = n.sl,
                this.takeProfit = n.tp,
                this.stopLoss$.next(n.sl),
                this.takeProfit$.next(n.tp),
                this.commission = n.Commission,
                this.taxes = n.Taxes,
                this.swap = n.Storage,
                this.symbolCurrency = this.asset.currency,
                this.comment = n.Comment,
                this.user = this.userService.get(),
                this.profit = this.calcProfit(),
                this.assetSubscribe = this.asset.bid$.distinctUntilChanged().subscribe(function() {
                    o.profit = o.calcProfit()
                })
            }
            return n.prototype.closePrice = function() {
                return this.action.match(/^sell/) ? (this.closePriceDirection = this.asset.askDirection,
                this.asset.markupAsk()) : this.action.match(/^buy/) ? (this.closePriceDirection = this.asset.bidDirection,
                this.asset.markupBid()) : void 0
            }
            ,
            n.prototype.calcProfit = function() {
                var n = 0;
                if (("buy" === this.action || "sell" === this.action) && this.closePrice() > 0) {
                    var t = this.asset.currency
                      , l = this.investCalcService.getPairVal(this.action, this.openPrice, this.closePrice());
                    0 === this.asset.profitMode && (t = this.asset.outputName.slice(-3)),
                    n = this.asset.profitMode < 2 ? l * this.amount : l * (this.asset.tickPrice / this.asset.tickSize) * this.lots;
                    var e = parseFloat(n.toFixed(2));
                    n = this.currencyConvertService.currencyConvert(t, this.user.currency, e, this.action, this.asset.profitMode)
                }
                return this.profitDirection = n > 0 ? "up" : "down",
                n
            }
            ,
            n.prototype.calcProfitPrice = function(n, t, l, e, s) {
                var a, i = this.investCalcService.getOpenPrice(n, this.selectedAsset), u = 1 === l ? this.investCalcService.getClosePriceFromPoints(n, this.selectedAsset, i, t, e) : t, o = s, r = this.selectedAsset.currency, d = this.user.currency, c = this.investCalcService.getPairVal(n, i, u);
                return 0 === this.selectedAsset.profitMode && (r = this.selectedAsset.outputName.slice(-3)),
                a = this.selectedAsset.profitMode < 2 ? c * this.selectedAsset.contractSize * o : c * (this.selectedAsset.tickPrice / this.selectedAsset.tickSize) * o,
                a = this.currencyConvertService.currencyConvert(r, d, a, n, this.selectedAsset.profitMode)
            }
            ,
            n.prototype.distance = function() {
                var n = 0;
                return this.action.match(/^sell/) && (n = this.openPrice - this.closePrice()),
                this.action.match(/^buy/) && (n = this.closePrice() - this.openPrice),
                3 === this.asset.digits || 5 === this.asset.digits ? this.investCalcService.fromPoints(n, this.asset.digits) / 10 : this.investCalcService.fromPoints(n, this.asset.digits)
            }
            ,
            n.prototype.pipValue = function() {
                return this.selectedAsset && this.amount > 0 ? this.calcProfitPrice("buy", 10, 1, "takeProfit", this.lots) : 0
            }
            ,
            n.prototype.pendingDistance = function() {
                return this.investCalcService.fromPoints(Math.abs(this.closePrice() - this.openPrice) / 10, this.asset.digits)
            }
            ,
            n.prototype.update = function(n) {
                this.outputName = n.OutputName,
                this.action = s.Constants.actionsId[n.Cmd],
                this.actionCode = n.Cmd,
                this.openPrice = n.OpenPrice,
                this.openTime = 1e3 * n.OpenTime,
                this.closeTime = 1e3 * n.CloseTime,
                this.digits = n.Digits,
                this.lots = n.Volume,
                this.contractSize = n.ContractSize,
                this.amount = this.contractSize * this.lots,
                this.stopLoss = n.sl,
                this.takeProfit = n.tp,
                this.stopLoss$.next(n.sl),
                this.takeProfit$.next(n.tp),
                this.commission = n.Commission,
                this.taxes = n.Taxes,
                this.swap = n.Storage,
                this.comment = n.Comment
            }
            ,
            n.prototype.clear = function() {
                this.assetSubscribe && this.assetSubscribe.unsubscribe(),
                this.asset = null,
                this.user = null,
                this.investCalcService = null,
                this.userService = null
            }
            ,
            n
        }()
    },
    22: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(9)
          , a = l(27)
          , i = l(149)
          , u = l(530)
          , o = l(33)
          , r = l(15)
          , d = l(65)
          , c = l(8)
          , p = l(32);
        l.n(p);
        l.d(t, "a", function() {
            return g
        });
        var f = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , h = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , g = function() {
            function n(n, t) {
                this.favoritesService = n,
                this.zone = t,
                this.api = a.api,
                this.userService = r.userService,
                this.stateService = c.stateService
            }
            return n.prototype.init = function() {
                return console.log("AssetService init..."),
                this.user = this.userService.get(),
                this.user.loggedIn && !this.user.guest ? this.getClientAssets() : this.getAllAssets()
            }
            ,
            n.prototype.initCollections = function() {
                this.collection = new u.a,
                this.clientCollection = new u.a
            }
            ,
            n.prototype.getClientAssets = function() {
                var n = this;
                return console.log("get all and client assets..."),
                this.initCollections(),
                Promise.all([this.api.request.mt4GetAllSymbols({
                    Source: this.user.source
                }), this.api.request.mt4GetClientSymbols()]).then(function(t) {
                    return n.checkResponse(t)
                }).then(function(t) {
                    return n.setClientSymbols(t)
                }).then(function(t) {
                    return n.initAssets(t)
                }).then(function() {
                    return n.setClientAssets()
                }).then(function() {
                    return n.api.request.quotesSubscribe({
                        Source: n.user.source
                    })
                }).then(function() {
                    return n.subscribeToQuotes()
                })
            }
            ,
            n.prototype.setClientSymbols = function(n) {
                var t = []
                  , l = n[0].Symbols
                  , e = n[1].Symbols;
                return l.forEach(function(n) {
                    var l = p.find(e, {
                        id: n.id
                    });
                    l ? (n.IsTradeable = l.IsTradeable,
                    n.Markup = l.Markup,
                    n.Percentage = l.Percentage,
                    n.IsShow = l.hasOwnProperty("IsShow") ? l.IsShow : 1,
                    n.SwapsLong = l.SwapsLong,
                    n.SwapsShort = l.SwapsShort,
                    n.MinLot = l.MinLot,
                    n.MaxLot = l.MaxLot,
                    n.StepLot = l.StepLot,
                    n.IsCurrentSessionValid = l.IsCurrentSessionValid,
                    n.LastVolume = l.LastVolume,
                    n.IsClient = !0) : n.IsShow = 0,
                    t.push(n)
                }),
                n = null,
                t
            }
            ,
            n.prototype.getAllAssets = function() {
                function n(n, t) {
                    if (0 === n.status)
                        throw new o.AppError({
                            source: "AssetService",
                            type: s.Constants.error.type.SYSTEM,
                            severity: "critical",
                            code: "getAllSymbolsFailed",
                            data: {}
                        });
                    return n
                }
                var t = this;
                return console.log("get all assets..."),
                this.initCollections(),
                this.api.request.mt4GetAllSymbols({
                    Source: this.user.source
                }).then(function(t) {
                    return n(t)
                }).then(function(n) {
                    return t.initAssets(n.Symbols)
                }).then(function() {
                    return t.setVisibleAssets()
                }).then(function() {
                    return t.api.request.quotesSubscribe({
                        Source: t.user.source
                    })
                }).then(function() {
                    return t.subscribeToQuotes()
                })
            }
            ,
            n.prototype.checkResponse = function(n, t) {
                if (0 === n[0].status || 0 === n[1].status)
                    throw new o.AppError({
                        source: "AssetService",
                        type: s.Constants.error.type.SYSTEM,
                        severity: "critical",
                        code: "getSymbolsFailed",
                        data: {
                            request: t,
                            response: 0 === n[0].status ? n[0] : n[1]
                        }
                    });
                return n
            }
            ,
            n.prototype.initAssets = function(n) {
                var t = this;
                return p.orderBy(n, ["IsClient"]).forEach(function(n) {
                    var l = t.favoritesService.get(n.id) && !0;
                    t.collection.add(new i.a(n,!0,l))
                })
            }
            ,
            n.prototype.setVisibleAssets = function() {
                var n = this.collection.findBy({
                    isShow: !0
                }, function(n) {
                    return n.category.length > 0
                });
                this.clientCollection.fill(n)
            }
            ,
            n.prototype.setClientAssets = function() {
                var n = this.collection.findBy({
                    isShow: !0,
                    isClient: !0
                }, function(n) {
                    return n.category.length > 0
                });
                this.clientCollection.fill(n)
            }
            ,
            n.prototype.subscribeToQuotes = function() {
                var n = this;
                this.api.asyncSubscribe("subscribe", function(t) {
                    return n.zone.run(function() {
                        return n.updateChunk(t)
                    })
                })
            }
            ,
            n.prototype.unsubscribeFromQuotes = function() {
                this.api.unsubscribe("subscribe"),
                this.api.request.quotesUnsubscribe()
            }
            ,
            n.prototype.updateChunk = function(n) {
                var t = this;
                n.reduce(function(n, l) {
                    var e = t.collection.get({
                        id: l[0]
                    });
                    e && e.update(l)
                }, n[0]),
                n = null
            }
            ,
            n.prototype.clear = function() {
                return console.log("clear assets"),
                this.clientCollection && this.clientCollection.clear(),
                this.collection && this.collection.clear(),
                this.clientCollection = null,
                this.collection = null,
                this.unsubscribeFromQuotes()
            }
            ,
            n = f([l.i(e.Injectable)(), h("design:paramtypes", [d.a, e.NgZone])], n)
        }()
    },
    45: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(22)
          , a = l(9)
          , i = l(15);
        l.d(t, "a", function() {
            return d
        });
        var u = this && this.__assign || Object.assign || function(n) {
            for (var t, l = 1, e = arguments.length; l < e; l++) {
                t = arguments[l];
                for (var s in t)
                    Object.prototype.hasOwnProperty.call(t, s) && (n[s] = t[s])
            }
            return n
        }
          , o = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , r = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , d = function() {
            function n(n) {
                this.assetService = n,
                this.userService = i.userService,
                this.user = this.userService.get()
            }
            return n.prototype.currencyConvert = function(n, t, l, e, s, i) {
                if (this.userService.get().loggedIn && !this.userService.get().guest && !i)
                    return this.convert(n, t, l, e, s);
                var u = l
                  , o = e.match(/^buy/) ? "Bid" : "Ask";
                if ("USD" != n) {
                    var r = this.assetService.collection.get({
                        outputName: "USD" + a.Constants.currencySeparator + n
                    })
                      , d = !1;
                    r || (r = this.assetService.collection.get({
                        outputName: n + a.Constants.currencySeparator + "USD"
                    }),
                    d = !0),
                    u = d ? l * r["markup" + o]() : l / r["markup" + o]()
                }
                if ("USD" != t) {
                    var c = this.assetService.collection.get({
                        outputName: "USD" + a.Constants.currencySeparator + t
                    })
                      , p = !0;
                    c || (c = this.assetService.collection.get({
                        outputName: t + a.Constants.currencySeparator + "USD"
                    }),
                    p = !1),
                    u = p ? u * c["markup" + o]() : u / c["markup" + o]()
                }
                return u
            }
            ,
            n.prototype.convert = function(n, t, l, e, s) {
                var i = 0 === s
                  , o = i ? e.match(/^buy/) ? "Bid" : "Ask" : "Bid";
                if (n === t)
                    return l;
                var r = {
                    outputName: n + a.Constants.currencySeparator + t,
                    isClient: !0
                }
                  , d = i ? u({}, r, {
                    category: "FOREX"
                }) : u({}, r, {
                    isClean: !0
                })
                  , c = u({}, d, {
                    outputName: t + a.Constants.currencySeparator + n
                })
                  , p = this.assetService.collection.get(d)
                  , f = !0;
                return p || (p = this.assetService.collection.get(c),
                f = !1),
                p ? f ? l * p["markup" + o]() : l / p["markup" + o]() : this.convertUSD(n, t, l, e, s)
            }
            ,
            n.prototype.convertUSD = function(n, t, l, e, s) {
                var i = l
                  , o = 0 === s
                  , r = e.match(/^buy/) ? "Bid" : "Ask";
                if ("USD" != n) {
                    var d = {
                        outputName: n + a.Constants.currencySeparator + "USD",
                        isClient: !0
                    }
                      , c = o ? u({}, d, {
                        category: "FOREX"
                    }) : u({}, d, {
                        isClean: !0
                    })
                      , p = u({}, c, {
                        outputName: "USD" + a.Constants.currencySeparator + n
                    })
                      , f = this.assetService.collection.get(c)
                      , h = !0;
                    if (f || (f = this.assetService.collection.get(p),
                    h = !1),
                    !f)
                        return this.currencyConvert(n, t, l, e, s, !0);
                    i = h ? l * f["markup" + r]() : l / f["markup" + r]()
                }
                if ("USD" != t) {
                    var g = {
                        outputName: "USD" + a.Constants.currencySeparator + t,
                        isClient: !0
                    }
                      , v = o ? u({}, g, {
                        category: "FOREX"
                    }) : u({}, g, {
                        isClean: !0
                    })
                      , m = u({}, v, {
                        outputName: t + a.Constants.currencySeparator + "USD"
                    })
                      , y = this.assetService.collection.get(v)
                      , b = !0;
                    if (y || (y = this.assetService.collection.get(m),
                    b = !1),
                    !y)
                        return this.currencyConvert(n, t, l, e, s, !0);
                    i = b ? i * y["markup" + r]() : i / y["markup" + r]()
                }
                return i
            }
            ,
            n = o([l.i(e.Injectable)(), r("design:paramtypes", [s.a])], n)
        }()
    },
    46: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(45);
        l.d(t, "a", function() {
            return u
        });
        var a = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , i = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , u = function() {
            function n(n) {
                this.currencyConvertService = n
            }
            return n.prototype.getPoints = function(n, t) {
                return n * (1 / Math.pow(10, t))
            }
            ,
            n.prototype.fromPoints = function(n, t) {
                return n * Math.pow(10, t)
            }
            ,
            n.prototype.getCurrentPrice = function(n, t) {
                return n.match(/^sell/) ? t.markupBid() : n.match(/^buy/) ? t.markupAsk() : void 0
            }
            ,
            n.prototype.getUpdatedPrice = function(n, t) {
                switch (n) {
                case "sell":
                    return t.markupAsk();
                case "buy":
                    return t.markupBid();
                default:
                    return this.getCurrentPrice(n, t)
                }
            }
            ,
            n.prototype.getOpenPrice = function(n, t) {
                switch (n) {
                case "sell":
                case "sell_limit":
                case "sell_stop":
                    return t.markupBid();
                case "buy":
                case "buy_limit":
                case "buy_stop":
                    return t.markupAsk()
                }
            }
            ,
            n.prototype.getPairVal = function(n, t, l) {
                switch (n) {
                case "sell":
                case "sell_limit":
                case "sell_stop":
                    return t - l;
                case "buy":
                case "buy_limit":
                case "buy_stop":
                    return l - t
                }
            }
            ,
            n.prototype.getClosePriceFromPoints = function(n, t, l, e, s) {
                var a = this.getPoints(e, t.digits);
                return n.match(/^sell/) ? "stopLoss" === s ? l + a : l - a : n.match(/^buy/) ? "stopLoss" === s ? l - a : l + a : void 0
            }
            ,
            n.prototype.getRequiredMargin = function(n, t, l, e) {
                var s = l && "buy" === l ? t.markupAsk() : t.markupBid()
                  , a = e.leverage
                  , i = t.percentage / 100
                  , u = n * t.contractSize
                  , o = 1 === t.marginMode && 0 === t.profitMode ? 99 : t.marginMode;
                if (2 !== o && t.initialMargin > 0) {
                    var r = n * t.initialMargin * i;
                    return 0 === o || 4 === o ? r / a : r
                }
                switch (o) {
                case 0:
                    return u / a * i;
                case 1:
                    return u * s * i;
                case 2:
                    return n * t.initialMargin * i;
                case 3:
                    return u * (s * (t.tickPrice / t.tickSize)) * i;
                case 4:
                    return u * s / a * i;
                case 5:
                case 99:
                    return u * i
                }
            }
            ,
            n.prototype.calcMargin = function(n, t, l, e, s, a) {
                var i, u = 0;
                return i = a || this.getRequiredMargin(n || 1, l, t, e),
                u = this.currencyConvertService.currencyConvert(l.currency, e.currency, i, t, l.profitMode),
                {
                    baseVal: u,
                    requiredMargin: i
                }
            }
            ,
            n.prototype.calcLeverage = function(n, t) {
                return 0 === n.profitMode ? Math.ceil(n.contractSize / t) : Math.ceil(n.contractSize * n.markupBid() / t)
            }
            ,
            n = a([l.i(e.Injectable)(), i("design:paramtypes", [s.a])], n)
        }()
    },
    47: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(9)
          , a = l(203)
          , i = l(532)
          , u = l(22)
          , o = l(46)
          , r = l(45)
          , d = l(27)
          , c = l(8)
          , p = l(33)
          , f = l(15)
          , h = l(69);
        l.n(h);
        l.d(t, "a", function() {
            return m
        });
        var g = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , v = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , m = function() {
            function n(n, t, l) {
                this.assetService = n,
                this.investCalcService = t,
                this.currencyConvertService = l,
                this.api = d.api,
                this.userService = f.userService,
                this.stateService = c.stateService,
                this.render = new h.Subject
            }
            return n.prototype.init = function() {
                var n = this;
                if (this.user = this.userService.get(),
                this.user.loggedIn)
                    return this.user.loggedIn && !this.user.guest ? this.getTrades().then(function() {
                        return n.subscribe()
                    }) : void this.initCollection()
            }
            ,
            n.prototype.getTrades = function() {
                var n = this;
                return this.api.request.mt4GetOpenPositions().then(function(t) {
                    return n.checkResponse(t)
                }).then(function(t) {
                    return n.initCollection(),
                    t
                }).then(function(t) {
                    return n.initTrades(t)
                }).then(function() {
                    return n.publishTrades()
                })
            }
            ,
            n.prototype.initCollection = function() {
                this.collection = new i.a
            }
            ,
            n.prototype.initTrades = function(n) {
                var t = this;
                n.Trades.forEach(function(n) {
                    var l = t.assetService.collection.get({
                        id: n.id
                    });
                    l && t.collection.add(new a.a(n,l,t.investCalcService,t.currencyConvertService,t.assetService))
                }),
                n = null
            }
            ,
            n.prototype.checkResponse = function(n, t) {
                if (0 === n.status)
                    throw new p.AppError({
                        source: "OpenTradeService",
                        type: s.Constants.error.type.SYSTEM,
                        severity: "critical",
                        code: "getOpenTradesFailed",
                        data: {
                            response: n
                        }
                    });
                return n
            }
            ,
            n.prototype.subscribe = function() {
                var n = this;
                this.api.subscribe("MT4NewTrade", function(t) {
                    return n.newTrade(t)
                }),
                this.api.subscribe("MT4CloseTrade", function(t) {
                    return n.closeTrade(t)
                }),
                this.api.subscribe("MT4UpdateTrade", function(t) {
                    return n.updateTrade(t)
                }),
                this.api.subscribe("MT4DeletePosition", function(t) {
                    return n.deleteTrade(t)
                })
            }
            ,
            n.prototype.publishTrades = function() {
                this.stateService.set("trades", {
                    openTrades: this.collection.findBy({}, function(n) {
                        return n.actionCode < 2
                    }, {}).length,
                    pendingTrades: this.collection.findBy({}, function(n) {
                        return n.actionCode >= 2
                    }, {}).length
                })
            }
            ,
            n.prototype.resetPublishedTrades = function() {
                this.stateService.set("trades", {
                    openTrades: 0,
                    pendingTrades: 0
                })
            }
            ,
            n.prototype.newTrade = function(n) {
                if (!this.collection.get({
                    orderId: n.Trade.OrderID
                })) {
                    var t = this.assetService.collection.get({
                        id: n.Trade.id
                    });
                    t && (this.collection.add(new a.a(n.Trade,t,this.investCalcService,this.currencyConvertService,this.assetService)),
                    this.render.next((999999 * Math.random()).toString()),
                    this.stateService.setOnce("pnl", {}),
                    this.publishTrades())
                }
            }
            ,
            n.prototype.closeTrade = function(n) {
                var t = this.collection.get({
                    orderId: n.Trade.OrderID
                });
                t && (this.collection.remove(t),
                this.render.next((999999 * Math.random()).toString()),
                this.stateService.setOnce("pnl", {}),
                this.publishTrades())
            }
            ,
            n.prototype.updateTrade = function(n) {
                var t = this.collection.get({
                    orderId: n.Trade.OrderID
                });
                t && (t.update(n.Trade),
                this.render.next((999999 * Math.random()).toString()),
                this.stateService.setOnce("pnl", {}),
                this.publishTrades())
            }
            ,
            n.prototype.deleteTrade = function(n) {
                var t = this.collection.get({
                    orderId: n.OrderID
                });
                t && (this.collection.remove(t),
                this.render.next((999999 * Math.random()).toString()),
                this.stateService.setOnce("pnl", {}),
                this.publishTrades())
            }
            ,
            n.prototype.clear = function() {
                this.resetPublishedTrades(),
                this.api.unsubscribe("MT4NewTrade"),
                this.api.unsubscribe("MT4CloseTrade"),
                this.api.unsubscribe("MT4UpdateTrade"),
                this.collection && this.collection.clear(),
                this.collection = null
            }
            ,
            n = g([l.i(e.Injectable)(), v("design:paramtypes", [u.a, o.a, r.a])], n)
        }()
    },
    489: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(529)
          , a = l(148)
          , i = l(517)
          , u = l(4)
          , o = l(13)
          , r = l(40)
          , d = l(36)
          , c = l(5)
          , p = l(28)
          , f = l(35)
          , h = l(18)
          , g = (l.n(h),
        l(41))
          , v = (l.n(g),
        l(14))
          , m = l(113)
          , y = l(25)
          , b = l(65)
          , C = l(22)
          , S = l(45)
          , k = l(46)
          , w = l(47)
          , R = l(64)
          , P = l(102)
          , T = l(74)
          , I = l(63)
          , A = l(31)
          , L = (l.n(A),
        l(17));
        l.d(t, "a", function() {
            return _
        });
        var _ = e["ɵcmf"](s.a, [a.a], function(n) {
            return e["ɵmod"]([e["ɵmpd"](512, e.ComponentFactoryResolver, e["ɵCodegenComponentFactoryResolver"], [[8, [i.a]], [3, e.ComponentFactoryResolver], e.NgModuleRef]), e["ɵmpd"](5120, e.LOCALE_ID, e["ɵm"], [[3, e.LOCALE_ID]]), e["ɵmpd"](4608, u.NgLocalization, u.NgLocaleLocalization, [e.LOCALE_ID]), e["ɵmpd"](4608, e.Compiler, e.Compiler, []), e["ɵmpd"](5120, e.APP_ID, e["ɵf"], []), e["ɵmpd"](5120, e.IterableDiffers, e["ɵk"], []), e["ɵmpd"](5120, e.KeyValueDiffers, e["ɵl"], []), e["ɵmpd"](4608, o.a, o.b, [u.DOCUMENT]), e["ɵmpd"](6144, e.Sanitizer, null, [o.a]), e["ɵmpd"](4608, o.c, o.d, []), e["ɵmpd"](5120, o.e, function(n, t, l, e) {
                return [new o.f(n), new o.g(t), new o.h(l,e)]
            }, [u.DOCUMENT, u.DOCUMENT, u.DOCUMENT, o.c]), e["ɵmpd"](4608, o.i, o.i, [o.e, e.NgZone]), e["ɵmpd"](135680, o.j, o.j, [u.DOCUMENT]), e["ɵmpd"](4608, o.k, o.k, [o.i, o.j]), e["ɵmpd"](5120, r.a, d.a, []), e["ɵmpd"](5120, r.b, d.b, []), e["ɵmpd"](4608, r.c, d.c, [r.a, r.b]), e["ɵmpd"](5120, e.RendererFactory2, d.d, [o.k, r.c, e.NgZone]), e["ɵmpd"](6144, o.l, null, [o.j]), e["ɵmpd"](4608, e.Testability, e.Testability, [e.NgZone]), e["ɵmpd"](4608, o.m, o.m, [u.DOCUMENT]), e["ɵmpd"](4608, o.n, o.n, [u.DOCUMENT]), e["ɵmpd"](4608, c["ɵi"], c["ɵi"], []), e["ɵmpd"](4608, p.a, p.a, []), e["ɵmpd"](4608, p.b, p.c, []), e["ɵmpd"](5120, p.d, p.e, []), e["ɵmpd"](4608, p.f, p.f, [p.a, p.b, p.d]), e["ɵmpd"](4608, p.g, p.h, []), e["ɵmpd"](5120, p.i, p.j, [p.f, p.g]), e["ɵmpd"](4608, c.FormBuilder, c.FormBuilder, []), e["ɵmpd"](4608, f.a, d.e, [e.RendererFactory2, o.o]), e["ɵmpd"](5120, h.PerfectScrollbarConfig, g.provideDefaultConfig, [g.PERFECT_SCROLLBAR_CONFIG]), e["ɵmpd"](4608, v.a, v.a, []), e["ɵmpd"](4608, m.a, m.a, []), e["ɵmpd"](4608, y.WindowRef, y.WindowRef, []), e["ɵmpd"](4608, b.a, b.a, []), e["ɵmpd"](4608, C.a, C.a, [b.a, e.NgZone]), e["ɵmpd"](4608, S.a, S.a, [C.a]), e["ɵmpd"](4608, k.a, k.a, [S.a]), e["ɵmpd"](4608, w.a, w.a, [C.a, k.a, S.a]), e["ɵmpd"](4608, R.a, R.a, [C.a]), e["ɵmpd"](4608, P.a, P.a, [w.a]), e["ɵmpd"](4608, u.DecimalPipe, u.DecimalPipe, [e.LOCALE_ID]), e["ɵmpd"](4608, T.a, T.a, [w.a]), e["ɵmpd"](512, u.CommonModule, u.CommonModule, []), e["ɵmpd"](512, e.ErrorHandler, I.AppErrorHandler, []), e["ɵmpd"](1024, e.APP_INITIALIZER, function(n, t) {
                return [o.p(n, t)]
            }, [[2, o.q], [2, e.NgProbeToken]]), e["ɵmpd"](512, e.ApplicationInitStatus, e.ApplicationInitStatus, [[2, e.APP_INITIALIZER]]), e["ɵmpd"](131584, e["ɵe"], e["ɵe"], [e.NgZone, e["ɵConsole"], e.Injector, e.ErrorHandler, e.ComponentFactoryResolver, e.ApplicationInitStatus]), e["ɵmpd"](2048, e.ApplicationRef, null, [e["ɵe"]]), e["ɵmpd"](512, e.ApplicationModule, e.ApplicationModule, [e.ApplicationRef]), e["ɵmpd"](512, o.r, o.r, [[3, o.r]]), e["ɵmpd"](512, c["ɵba"], c["ɵba"], []), e["ɵmpd"](512, c.FormsModule, c.FormsModule, []), e["ɵmpd"](512, p.k, p.k, []), e["ɵmpd"](512, c.ReactiveFormsModule, c.ReactiveFormsModule, []), e["ɵmpd"](1024, g.PERFECT_SCROLLBAR_GUARD, g.provideForRootGuard, [[3, h.PerfectScrollbarConfig]]), e["ɵmpd"](512, g.PerfectScrollbarModule, g.PerfectScrollbarModule, [[2, g.PERFECT_SCROLLBAR_GUARD]]), e["ɵmpd"](512, A.TextMaskModule, A.TextMaskModule, []), e["ɵmpd"](512, d.f, d.f, []), e["ɵmpd"](512, L.HelperComponentsModule, L.HelperComponentsModule, []), e["ɵmpd"](512, m.b, m.b, []), e["ɵmpd"](512, s.a, s.a, [e.Injector]), e["ɵmpd"](256, g.PERFECT_SCROLLBAR_CONFIG, {
                suppressScrollX: !0
            }, [])])
        })
    },
    509: function(n, t, l) {
        "use strict";
        function e(n) {
            return S["ɵvid"](0, [(n()(),
            S["ɵeld"](0, 0, null, null, 6, "li", [], [[24, "@fadeInOut", 0]], [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.setAsset(n.context.$implicit) && e
                }
                return e
            }, null, null)), S["ɵdid"](1, 278528, null, 0, k.NgClass, [S.IterableDiffers, S.KeyValueDiffers, S.ElementRef, S.Renderer], {
                ngClass: [0, "ngClass"]
            }, null), S["ɵpod"](2, {
                "selected-pandats": 0
            }), (n()(),
            S["ɵted"](-1, null, ["\n\n                    "])), (n()(),
            S["ɵeld"](4, 0, null, null, 1, "asset-item", [["class", "layout-column full-height centered-content"]], null, null, null, b, O)), S["ɵdid"](5, 245760, null, 0, w.b, [R.a, S.ChangeDetectorRef], {
                asset: [0, "asset"],
                transitionState: [1, "transitionState"]
            }, null), (n()(),
            S["ɵted"](-1, null, ["\n\n                "]))], function(n, t) {
                var l = t.component;
                n(t, 1, 0, n(t, 2, 0, l.selectedAsset.id === t.context.$implicit.id)),
                n(t, 5, 0, t.context.$implicit, l.transitionState)
            }, function(n, t) {
                n(t, 0, 0, void 0)
            })
        }
        function s(n) {
            return S["ɵvid"](0, [(n()(),
            S["ɵeld"](0, 0, null, null, 14, "div", [], null, null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n        "])), (n()(),
            S["ɵeld"](2, 0, null, null, 1, "div", [["class", "category-pandats"]], null, null, null, null, null)), (n()(),
            S["ɵted"](3, null, ["", ":"])), (n()(),
            S["ɵted"](-1, null, ["\n        "])), (n()(),
            S["ɵeld"](5, 0, null, null, 8, "perfect-scrollbar", [["class", "container-pandats"]], null, null, null, P.a, P.b)), S["ɵdid"](6, 4636672, null, 0, T.PerfectScrollbarComponent, [S.ElementRef, [2, I.PerfectScrollbarConfig], S.NgZone], null, null), (n()(),
            S["ɵted"](-1, 0, ["\n            "])), (n()(),
            S["ɵeld"](8, 0, null, 0, 4, "ul", [["class", "category-assets-pandats search-assets-pandats"]], null, null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n                "])), (n()(),
            S["ɵand"](16777216, null, null, 1, null, e)), S["ɵdid"](11, 802816, null, 0, k.NgForOf, [S.ViewContainerRef, S.TemplateRef, S.IterableDiffers], {
                ngForOf: [0, "ngForOf"],
                ngForTrackBy: [1, "ngForTrackBy"]
            }, null), (n()(),
            S["ɵted"](-1, null, ["\n            "])), (n()(),
            S["ɵted"](-1, 0, ["\n        "])), (n()(),
            S["ɵted"](-1, null, ["\n    "]))], function(n, t) {
                var l = t.component;
                n(t, 6, 0),
                n(t, 11, 0, l.assets, l.trackByFn)
            }, function(n, t) {
                n(t, 3, 0, t.component.translation.search_results)
            })
        }
        function a(n) {
            return S["ɵvid"](0, [(n()(),
            S["ɵeld"](0, 0, null, null, 22, "div", [["class", "layout-row"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n                        "])), (n()(),
            S["ɵeld"](2, 0, null, null, 19, "div", [["class", "category-titles-pandats layout-column centered-content"]], null, null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n                            "])), (n()(),
            S["ɵeld"](4, 0, null, null, 16, "div", [["class", "layout-row full-width"]], null, null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n                                "])), (n()(),
            S["ɵeld"](6, 0, null, null, 1, "div", [["class", "font12-pandats"]], null, null, null, null, null)), (n()(),
            S["ɵted"](7, null, ["", ""])), (n()(),
            S["ɵted"](-1, null, ["\n                                "])), (n()(),
            S["ɵeld"](9, 0, null, null, 1, "div", [["class", "font12-pandats"]], null, null, null, null, null)), (n()(),
            S["ɵted"](10, null, ["", ""])), (n()(),
            S["ɵted"](-1, null, ["\n                                "])), (n()(),
            S["ɵeld"](12, 0, null, null, 1, "div", [["class", "font12-pandats"]], null, null, null, null, null)), (n()(),
            S["ɵted"](13, null, ["", ""])), (n()(),
            S["ɵted"](-1, null, ["\n                                "])), (n()(),
            S["ɵeld"](15, 0, null, null, 1, "div", [["class", "font12-pandats"]], null, null, null, null, null)), (n()(),
            S["ɵted"](16, null, ["", ""])), (n()(),
            S["ɵted"](-1, null, ["\n                                "])), (n()(),
            S["ɵeld"](18, 0, null, null, 1, "div", [["class", "font12-pandats"]], null, null, null, null, null)), (n()(),
            S["ɵted"](19, null, ["", ""])), (n()(),
            S["ɵted"](-1, null, ["\n                            "])), (n()(),
            S["ɵted"](-1, null, ["\n                        "])), (n()(),
            S["ɵted"](-1, null, ["\n                    "]))], null, function(n, t) {
                var l = t.component;
                n(t, 0, 0, t.parent.context.$implicit.collapsed),
                n(t, 7, 0, l.translation.assetsTitles.product_name),
                n(t, 10, 0, l.translation.assetsTitles.bid),
                n(t, 13, 0, l.translation.assetsTitles.ask),
                n(t, 16, 0, l.translation.assetsTitles.change),
                n(t, 19, 0, l.translation.assetsTitles.fav)
            })
        }
        function i(n) {
            return S["ɵvid"](0, [(n()(),
            S["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(),
            S["ɵted"](1, null, ["\n                                                ", " ", "\n                                            "]))], null, function(n, t) {
                var l = t.component;
                n(t, 1, 0, l.tradeTime.days, l.translation.openTradingTimes.day)
            })
        }
        function u(n) {
            return S["ɵvid"](0, [(n()(),
            S["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(),
            S["ɵted"](1, null, ["\n                                                ", " ", "\n                                            "]))], null, function(n, t) {
                var l = t.component;
                n(t, 1, 0, l.tradeTime.seconds, l.translation.openTradingTimes.second)
            })
        }
        function o(n) {
            return S["ɵvid"](0, [(n()(),
            S["ɵeld"](0, 0, null, null, 7, "div", [], null, null, null, null, null)), (n()(),
            S["ɵted"](1, null, ["\n                                            ", "\n                                            "])), (n()(),
            S["ɵand"](16777216, null, null, 1, null, i)), S["ɵdid"](3, 16384, null, 0, k.NgIf, [S.ViewContainerRef, S.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            S["ɵted"](4, null, ["\n                                            ", " ", "\n                                            ", " ", "\n                                            "])), (n()(),
            S["ɵand"](16777216, null, null, 1, null, u)), S["ɵdid"](6, 16384, null, 0, k.NgIf, [S.ViewContainerRef, S.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            S["ɵted"](-1, null, ["\n                                        "]))], function(n, t) {
                var l = t.component;
                n(t, 3, 0, l.tradeTime.days),
                n(t, 6, 0, !l.tradeTime.days)
            }, function(n, t) {
                var l = t.component;
                n(t, 1, 0, l.translation.openTradingTimes.opening),
                n(t, 4, 0, l.tradeTime.hours, l.translation.openTradingTimes.hour, l.tradeTime.minutes, l.translation.openTradingTimes.minute)
            })
        }
        function r(n) {
            return S["ɵvid"](0, [(n()(),
            S["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (n()(),
            S["ɵted"](1, null, ["\n                                            ", "\n                                        "]))], null, function(n, t) {
                n(t, 1, 0, t.component.translation.openTradingTimes.marketClosed)
            })
        }
        function d(n) {
            return S["ɵvid"](0, [(n()(),
            S["ɵeld"](0, 0, null, null, 12, "div", [["class", "symbol-opening-pandats layout-column just-center"]], null, null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n                                    "])), (n()(),
            S["ɵeld"](2, 0, null, null, 0, "div", [["class", "symbol-opening-i-pandats"]], null, null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n                                    "])), (n()(),
            S["ɵeld"](4, 0, null, null, 7, "div", [["class", "symbol-opening-title-pandats"]], null, null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n                                        "])), (n()(),
            S["ɵand"](16777216, null, null, 1, null, o)), S["ɵdid"](7, 16384, null, 0, k.NgIf, [S.ViewContainerRef, S.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            S["ɵted"](-1, null, ["\n                                        "])), (n()(),
            S["ɵand"](16777216, null, null, 1, null, r)), S["ɵdid"](10, 16384, null, 0, k.NgIf, [S.ViewContainerRef, S.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            S["ɵted"](-1, null, ["\n                                    "])), (n()(),
            S["ɵted"](-1, null, ["\n                                "]))], function(n, t) {
                var l = t.component;
                n(t, 7, 0, !l.marketClosed),
                n(t, 10, 0, l.marketClosed)
            }, null)
        }
        function c(n) {
            return S["ɵvid"](0, [(n()(),
            S["ɵeld"](0, 0, null, null, 9, "li", [["class", "layout-row"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.setAsset(n.context.$implicit) && e
                }
                return e
            }, null, null)), S["ɵdid"](1, 278528, null, 0, k.NgClass, [S.IterableDiffers, S.KeyValueDiffers, S.ElementRef, S.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), S["ɵpod"](2, {
                "selected-pandats": 0
            }), (n()(),
            S["ɵted"](-1, null, ["\n\n                                "])), (n()(),
            S["ɵeld"](4, 0, null, null, 1, "asset-item", [["class", "layout-column full-width centered-content"]], null, null, null, b, O)), S["ɵdid"](5, 245760, null, 0, w.b, [R.a, S.ChangeDetectorRef], {
                asset: [0, "asset"],
                transitionState: [1, "transitionState"]
            }, null), (n()(),
            S["ɵted"](-1, null, ["\n\n                                "])), (n()(),
            S["ɵand"](16777216, null, null, 1, null, d)), S["ɵdid"](8, 16384, null, 0, k.NgIf, [S.ViewContainerRef, S.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            S["ɵted"](-1, null, ["\n\n                            "]))], function(n, t) {
                var l = t.component;
                n(t, 1, 0, "layout-row", n(t, 2, 0, l.selectedAsset.id === t.context.$implicit.id)),
                n(t, 5, 0, t.context.$implicit, l.transitionState),
                n(t, 8, 0, l.selectedAsset.id === t.context.$implicit.id && (l.tradeTime || l.marketClosed))
            }, null)
        }
        function p(n) {
            return S["ɵvid"](0, [(n()(),
            S["ɵeld"](0, 0, null, null, 4, "ul", [["class", "category-assets-pandats layout-column"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n                            "])), (n()(),
            S["ɵand"](16777216, null, null, 1, null, c)), S["ɵdid"](3, 802816, null, 0, k.NgForOf, [S.ViewContainerRef, S.TemplateRef, S.IterableDiffers], {
                ngForOf: [0, "ngForOf"],
                ngForTrackBy: [1, "ngForTrackBy"]
            }, null), (n()(),
            S["ɵted"](-1, null, ["\n                        "]))], function(n, t) {
                var l = t.component;
                n(t, 3, 0, t.parent.context.$implicit.assets, l.trackByFn)
            }, function(n, t) {
                n(t, 0, 0, t.parent.context.$implicit.collapsed)
            })
        }
        function f(n) {
            return S["ɵvid"](0, [(n()(),
            S["ɵeld"](0, 0, null, null, 38, "li", [["class", "layout-row"]], null, null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n\n                "])), (n()(),
            S["ɵeld"](2, 0, null, null, 35, "div", [["class", "layout-column full-width"]], null, null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n                    "])), (n()(),
            S["ɵeld"](4, 0, null, null, 23, "div", [["class", "layout-row"]], null, null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n                        "])), (n()(),
            S["ɵeld"](6, 0, null, null, 20, "div", [["class", "category-pandats layout-column centered-content"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.changeCategory(n.context.$implicit) && e
                }
                return e
            }, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n                            "])), (n()(),
            S["ɵeld"](8, 0, null, null, 17, "div", [["class", "layout-row full-width"]], null, null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n                                "])), (n()(),
            S["ɵeld"](10, 0, null, null, 4, "div", [["class", "layout-column"]], null, null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n                                    "])), (n()(),
            S["ɵeld"](12, 0, null, null, 1, "i", [["class", "icon-pandats"]], null, null, null, null, null)), S["ɵdid"](13, 278528, null, 0, k.NgClass, [S.IterableDiffers, S.KeyValueDiffers, S.ElementRef, S.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(),
            S["ɵted"](-1, null, ["\n                                "])), (n()(),
            S["ɵted"](-1, null, ["\n\n                                "])), (n()(),
            S["ɵeld"](16, 0, null, null, 1, "div", [["class", "layout-column name-pandats font18-pandats shrinkable"]], null, null, null, null, null)), (n()(),
            S["ɵted"](17, null, ["", ""])), (n()(),
            S["ɵted"](-1, null, ["\n\n                                "])), (n()(),
            S["ɵeld"](19, 0, null, null, 5, "div", [["class", "layout-column"]], null, null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n                                    "])), (n()(),
            S["ɵeld"](21, 0, null, null, 2, "i", [["class", "icon-pandats icon-action-pandats cmicon-circle-up self-to-end"]], null, null, null, null, null)), S["ɵdid"](22, 278528, null, 0, k.NgClass, [S.IterableDiffers, S.KeyValueDiffers, S.ElementRef, S.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), S["ɵpod"](23, {
                expanded: 0
            }), (n()(),
            S["ɵted"](-1, null, ["\n                                "])), (n()(),
            S["ɵted"](-1, null, ["\n                            "])), (n()(),
            S["ɵted"](-1, null, ["\n                        "])), (n()(),
            S["ɵted"](-1, null, ["\n                    "])), (n()(),
            S["ɵted"](-1, null, ["\n                    "])), (n()(),
            S["ɵand"](16777216, null, null, 1, null, a)), S["ɵdid"](30, 16384, null, 0, k.NgIf, [S.ViewContainerRef, S.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            S["ɵted"](-1, null, ["\n                    "])), (n()(),
            S["ɵeld"](32, 0, null, null, 4, "div", [["class", "layout-row"]], null, null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n\n                        "])), (n()(),
            S["ɵand"](16777216, null, null, 1, null, p)), S["ɵdid"](35, 16384, null, 0, k.NgIf, [S.ViewContainerRef, S.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            S["ɵted"](-1, null, ["\n                    "])), (n()(),
            S["ɵted"](-1, null, ["\n                "])), (n()(),
            S["ɵted"](-1, null, ["\n            "]))], function(n, t) {
                var l = t.component;
                n(t, 13, 0, "icon-pandats", "cmicon-" + t.context.$implicit.name),
                n(t, 22, 0, "icon-pandats icon-action-pandats cmicon-circle-up self-to-end", n(t, 23, 0, t.context.$implicit === l.activeCategory && !t.context.$implicit.collapsed)),
                n(t, 30, 0, t.context.$implicit.assets && t.context.$implicit.assets.length > 0),
                n(t, 35, 0, t.context.$implicit.assets && t.context.$implicit.assets.length > 0)
            }, function(n, t) {
                n(t, 17, 0, t.component.translation[t.context.$implicit.name])
            })
        }
        function h(n) {
            return S["ɵvid"](0, [(n()(),
            S["ɵeld"](0, 0, null, null, 4, "ul", [["class", "layout-column"]], null, null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n            "])), (n()(),
            S["ɵand"](16777216, null, null, 1, null, f)), S["ɵdid"](3, 802816, null, 0, k.NgForOf, [S.ViewContainerRef, S.TemplateRef, S.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            S["ɵted"](-1, null, ["\n        "]))], function(n, t) {
                n(t, 3, 0, t.component.categories)
            }, null)
        }
        function g(n) {
            return S["ɵvid"](2, [(n()(),
            S["ɵeld"](0, 0, null, null, 25, "div", [["class", "asset-list-wrapper pfdin-text-universal-pandats"]], null, null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n    "])), (n()(),
            S["ɵeld"](2, 0, null, null, 12, "div", [["class", "search-wrapper-pandats"]], null, null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n        "])), (n()(),
            S["ɵeld"](4, 0, null, null, 7, "input", [["class", "search-pandats font14-pandats"], ["maxlength", "10"], ["type", "text"]], [[8, "placeholder", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(n, t, l) {
                var e = !0;
                if ("input" === t) {
                    e = !1 !== S["ɵnov"](n, 5)._handleInput(l.target.value) && e
                }
                if ("blur" === t) {
                    e = !1 !== S["ɵnov"](n, 5).onTouched() && e
                }
                if ("compositionstart" === t) {
                    e = !1 !== S["ɵnov"](n, 5)._compositionStart() && e
                }
                if ("compositionend" === t) {
                    e = !1 !== S["ɵnov"](n, 5)._compositionEnd(l.target.value) && e
                }
                return e
            }, null, null)), S["ɵdid"](5, 16384, null, 0, A.DefaultValueAccessor, [S.Renderer2, S.ElementRef, [2, A.COMPOSITION_BUFFER_MODE]], null, null), S["ɵdid"](6, 540672, null, 0, A.MaxLengthValidator, [], {
                maxlength: [0, "maxlength"]
            }, null), S["ɵprd"](1024, null, A.NG_VALIDATORS, function(n) {
                return [n]
            }, [A.MaxLengthValidator]), S["ɵprd"](1024, null, A.NG_VALUE_ACCESSOR, function(n) {
                return [n]
            }, [A.DefaultValueAccessor]), S["ɵdid"](9, 540672, null, 0, A.FormControlDirective, [[2, A.NG_VALIDATORS], [8, null], [2, A.NG_VALUE_ACCESSOR]], {
                form: [0, "form"]
            }, null), S["ɵprd"](2048, null, A.NgControl, null, [A.FormControlDirective]), S["ɵdid"](11, 16384, null, 0, A.NgControlStatus, [A.NgControl], null, null), (n()(),
            S["ɵted"](-1, null, ["\n        "])), (n()(),
            S["ɵeld"](13, 0, null, null, 0, "i", [["class", "icon-pandats cmicon-search font16-pandats"]], null, null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n    "])), (n()(),
            S["ɵted"](-1, null, ["\n\n    "])), (n()(),
            S["ɵand"](16777216, null, null, 1, null, s)), S["ɵdid"](17, 16384, null, 0, k.NgIf, [S.ViewContainerRef, S.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            S["ɵted"](-1, null, ["\n    "])), (n()(),
            S["ɵeld"](19, 0, null, null, 5, "perfect-scrollbar", [["class", "container-pandats"]], null, null, null, P.a, P.b)), S["ɵdid"](20, 4636672, null, 0, T.PerfectScrollbarComponent, [S.ElementRef, [2, I.PerfectScrollbarConfig], S.NgZone], null, null), (n()(),
            S["ɵted"](-1, 0, ["\n        "])), (n()(),
            S["ɵand"](16777216, null, 0, 1, null, h)), S["ɵdid"](23, 16384, null, 0, k.NgIf, [S.ViewContainerRef, S.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            S["ɵted"](-1, 0, ["\n    "])), (n()(),
            S["ɵted"](-1, null, ["\n"])), (n()(),
            S["ɵted"](-1, null, ["\n"]))], function(n, t) {
                var l = t.component;
                n(t, 6, 0, "10"),
                n(t, 9, 0, l.search),
                n(t, 17, 0, l.search.value && l.search.value.length >= 2),
                n(t, 20, 0),
                n(t, 23, 0, !l.search.value || l.search.value.length < 2)
            }, function(n, t) {
                var l = t.component;
                n(t, 4, 0, S["ɵinlineInterpolate"](1, "", l.translation.searchAssetsPlaceholder, ""), S["ɵnov"](t, 6).maxlength ? S["ɵnov"](t, 6).maxlength : null, S["ɵnov"](t, 11).ngClassUntouched, S["ɵnov"](t, 11).ngClassTouched, S["ɵnov"](t, 11).ngClassPristine, S["ɵnov"](t, 11).ngClassDirty, S["ɵnov"](t, 11).ngClassValid, S["ɵnov"](t, 11).ngClassInvalid, S["ɵnov"](t, 11).ngClassPending)
            })
        }
        function v(n) {
            return S["ɵvid"](0, [(n()(),
            S["ɵeld"](0, 0, null, null, 1, "asset-list", [], null, null, null, g, D)), S["ɵdid"](1, 245760, null, 0, w.a, [L.a, S.NgZone, S.ChangeDetectorRef, _.a], null, null)], function(n, t) {
                n(t, 1, 0)
            }, null)
        }
        function m(n) {
            return S["ɵvid"](0, [(n()(),
            S["ɵeld"](0, 0, null, null, 7, "span", [], null, null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n            "])), (n()(),
            S["ɵeld"](2, 0, null, null, 1, "span", [["class", "flag-pandats flag-icon-pandats"]], null, null, null, null, null)), S["ɵdid"](3, 278528, null, 0, k.NgClass, [S.IterableDiffers, S.KeyValueDiffers, S.ElementRef, S.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(),
            S["ɵted"](-1, null, ["\n            "])), (n()(),
            S["ɵeld"](5, 0, null, null, 1, "span", [["class", "flag-pandats flag-icon-pandats"]], null, null, null, null, null)), S["ɵdid"](6, 278528, null, 0, k.NgClass, [S.IterableDiffers, S.KeyValueDiffers, S.ElementRef, S.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(),
            S["ɵted"](-1, null, ["\n        "]))], function(n, t) {
                var l = t.component;
                n(t, 3, 0, "flag-pandats flag-icon-pandats", l.asset.flagLeft),
                n(t, 6, 0, "flag-pandats flag-icon-pandats", l.asset.flagRight)
            }, null)
        }
        function y(n) {
            return S["ɵvid"](0, [(n()(),
            S["ɵeld"](0, 0, null, null, 4, "span", [], null, null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n            "])), (n()(),
            S["ɵeld"](2, 0, null, null, 1, "span", [["class", "flag3-pandats flag-icon-pandats flagEmpty-pandats"]], null, null, null, null, null)), S["ɵdid"](3, 278528, null, 0, k.NgClass, [S.IterableDiffers, S.KeyValueDiffers, S.ElementRef, S.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(),
            S["ɵted"](-1, null, ["\n        "]))], function(n, t) {
                n(t, 3, 0, "flag3-pandats flag-icon-pandats flagEmpty-pandats", t.component.asset.flag)
            }, null)
        }
        function b(n) {
            return S["ɵvid"](2, [S["ɵpid"](0, k.DecimalPipe, [S.LOCALE_ID]), (n()(),
            S["ɵeld"](1, 0, null, null, 35, "div", [["class", "asset-item-pandats layout-row"]], null, null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n    "])), (n()(),
            S["ɵeld"](3, 0, null, null, 7, "div", [["class", "logo-pandats"]], null, null, null, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n        "])), (n()(),
            S["ɵand"](16777216, null, null, 1, null, m)), S["ɵdid"](6, 16384, null, 0, k.NgIf, [S.ViewContainerRef, S.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            S["ɵted"](-1, null, ["\n\n        "])), (n()(),
            S["ɵand"](16777216, null, null, 1, null, y)), S["ɵdid"](9, 16384, null, 0, k.NgIf, [S.ViewContainerRef, S.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            S["ɵted"](-1, null, ["\n    "])), (n()(),
            S["ɵted"](-1, null, ["\n    "])), (n()(),
            S["ɵeld"](12, 0, null, null, 1, "div", [["class", "name-pandats font15-pandats line-height20-pandats"]], null, null, null, null, null)), (n()(),
            S["ɵted"](13, null, ["", ""])), (n()(),
            S["ɵted"](-1, null, ["\n    "])), (n()(),
            S["ɵeld"](15, 0, null, null, 3, "div", [["class", "price-pandats font15-pandats line-height20-pandats"]], null, null, null, null, null)), S["ɵdid"](16, 278528, null, 0, k.NgClass, [S.IterableDiffers, S.KeyValueDiffers, S.ElementRef, S.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(),
            S["ɵted"](17, null, ["", ""])), S["ɵppd"](18, 2), (n()(),
            S["ɵted"](-1, null, ["\n    "])), (n()(),
            S["ɵeld"](20, 0, null, null, 3, "div", [["class", "price-pandats font15-pandats line-height20-pandats"]], null, null, null, null, null)), S["ɵdid"](21, 278528, null, 0, k.NgClass, [S.IterableDiffers, S.KeyValueDiffers, S.ElementRef, S.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(),
            S["ɵted"](22, null, ["", ""])), S["ɵppd"](23, 2), (n()(),
            S["ɵted"](-1, null, ["\n\n    "])), (n()(),
            S["ɵeld"](25, 0, null, null, 3, "div", [["class", "daily-change-pandats font15-pandats line-height20-pandats"]], null, null, null, null, null)), S["ɵdid"](26, 278528, null, 0, k.NgClass, [S.IterableDiffers, S.KeyValueDiffers, S.ElementRef, S.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(),
            S["ɵted"](27, null, ["", "%"])), S["ɵppd"](28, 2), (n()(),
            S["ɵted"](-1, null, ["\n\n    "])), (n()(),
            S["ɵeld"](30, 0, null, null, 5, "div", [["class", "favorite font22-pandats line-height09-pandats"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.toggleFavorite() && e
                }
                return e
            }, null, null)), (n()(),
            S["ɵted"](-1, null, ["\n        "])), (n()(),
            S["ɵeld"](32, 0, null, null, 2, "i", [["class", "icon"]], null, null, null, null, null)), S["ɵdid"](33, 278528, null, 0, k.NgClass, [S.IterableDiffers, S.KeyValueDiffers, S.ElementRef, S.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), S["ɵpod"](34, {
                "cmicon-star-empty": 0,
                "cmicon-star-full": 1
            }), (n()(),
            S["ɵted"](-1, null, ["\n    "])), (n()(),
            S["ɵted"](-1, null, ["\n"])), (n()(),
            S["ɵted"](-1, null, ["\n"]))], function(n, t) {
                var l = t.component;
                n(t, 6, 0, "FOREX" === l.asset.category || "CRYPTO" === l.asset.category),
                n(t, 9, 0, !("FOREX" === l.asset.category || "CRYPTO" === l.asset.category)),
                n(t, 16, 0, "price-pandats font15-pandats line-height20-pandats", l.asset.bidDirection),
                n(t, 21, 0, "price-pandats font15-pandats line-height20-pandats", l.asset.askDirection),
                n(t, 26, 0, "daily-change-pandats font15-pandats line-height20-pandats", l.asset.dailyChangeRender()),
                n(t, 33, 0, "icon", n(t, 34, 0, !l.asset.isFavorite, l.asset.isFavorite))
            }, function(n, t) {
                var l = t.component;
                n(t, 13, 0, l.asset.outputName),
                n(t, 17, 0, S["ɵunv"](t, 17, 0, n(t, 18, 0, S["ɵnov"](t, 0), l.asset.markupBid(), l.asset.digitsFormat))),
                n(t, 22, 0, S["ɵunv"](t, 22, 0, n(t, 23, 0, S["ɵnov"](t, 0), l.asset.markupAsk(), l.asset.digitsFormat))),
                n(t, 27, 0, S["ɵunv"](t, 27, 0, n(t, 28, 0, S["ɵnov"](t, 0), l.asset.dailyChange(), "1.2-2")))
            })
        }
        function C(n) {
            return S["ɵvid"](0, [(n()(),
            S["ɵeld"](0, 0, null, null, 1, "asset-item", [], null, null, null, b, O)), S["ɵdid"](1, 245760, null, 0, w.b, [R.a, S.ChangeDetectorRef], null, null)], function(n, t) {
                n(t, 1, 0)
            }, null)
        }
        var S = l(2)
          , k = l(4)
          , w = l(140)
          , R = l(65)
          , P = l(78)
          , T = l(55)
          , I = (l.n(T),
        l(18))
          , A = (l.n(I),
        l(5))
          , L = l(22)
          , _ = l(14);
        l.d(t, "b", function() {
            return D
        }),
        t.a = g;
        var x = []
          , D = S["ɵcrt"]({
            encapsulation: 2,
            styles: x,
            data: {
                animation: [{
                    type: 7,
                    name: "categoryShow",
                    definitions: [{
                        type: 0,
                        name: "*",
                        styles: {
                            type: 6,
                            styles: {
                                height: "*",
                                opacity: 1
                            },
                            offset: null
                        },
                        options: void 0
                    }, {
                        type: 0,
                        name: "void",
                        styles: {
                            type: 6,
                            styles: {
                                height: "0px",
                                opacity: 0
                            },
                            offset: null
                        },
                        options: void 0
                    }, {
                        type: 1,
                        expr: "void => *",
                        animation: {
                            type: 4,
                            styles: null,
                            timings: "500ms ease-in-out"
                        },
                        options: null
                    }],
                    options: {}
                }, {
                    type: 7,
                    name: "fadeInOut",
                    definitions: [{
                        type: 1,
                        expr: ":enter",
                        animation: [{
                            type: 4,
                            styles: {
                                type: 6,
                                styles: {
                                    transform: "translateX(-100%)"
                                },
                                offset: null
                            },
                            timings: 100
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
                                    transform: "translateX(100%)"
                                },
                                offset: null
                            },
                            timings: 100
                        }],
                        options: null
                    }],
                    options: {}
                }]
            }
        })
          , N = (S["ɵccf"]("asset-list", w.a, v, {}, {}, []),
        [])
          , O = S["ɵcrt"]({
            encapsulation: 2,
            styles: N,
            data: {}
        });
        S["ɵccf"]("asset-item", w.b, C, {
            asset: "asset",
            transitionState: "transitionState"
        }, {}, [])
    },
    510: function(n, t, l) {
        "use strict";
        function e(n) {
            return a["ɵvid"](0, [(n()(),
            a["ɵeld"](0, 0, null, null, 9, "ul", [["class", "tabs-content-pandats"]], null, null, null, null, null)), (n()(),
            a["ɵted"](-1, null, ["\n    "])), (n()(),
            a["ɵeld"](2, 0, null, null, 6, "li", [["class", "tab-item-pandats chartTab"]], null, null, null, null, null)), a["ɵdid"](3, 278528, null, 0, i.NgClass, [a.IterableDiffers, a.KeyValueDiffers, a.ElementRef, a.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), a["ɵpod"](4, {
                "not-visible-pandats": 0
            }), (n()(),
            a["ɵted"](-1, null, ["\n        "])), (n()(),
            a["ɵeld"](6, 0, null, null, 1, "chart", [], null, null, null, u.a, u.b)), a["ɵdid"](7, 4964352, null, 0, o.a, [r.a, d.a], {
                chartConfig: [0, "chartConfig"]
            }, null), (n()(),
            a["ɵted"](-1, null, ["\n    "])), (n()(),
            a["ɵted"](-1, null, ["\n"])), (n()(),
            a["ɵted"](-1, null, ["\n"]))], function(n, t) {
                var l = t.component;
                n(t, 3, 0, "tab-item-pandats chartTab", n(t, 4, 0, "chart" !== l.activeTab.name)),
                n(t, 7, 0, l.pandaChartConfig)
            }, null)
        }
        function s(n) {
            return a["ɵvid"](0, [(n()(),
            a["ɵeld"](0, 0, null, null, 1, "chart-tabs", [], null, null, null, e, f)), a["ɵdid"](1, 245760, null, 0, c.a, [a.NgZone], null, null)], function(n, t) {
                n(t, 1, 0)
            }, null)
        }
        var a = l(2)
          , i = l(4)
          , u = l(198)
          , o = l(101)
          , r = l(22)
          , d = l(74)
          , c = l(141);
        l.d(t, "b", function() {
            return f
        }),
        t.a = e;
        var p = []
          , f = a["ɵcrt"]({
            encapsulation: 2,
            styles: p,
            data: {
                animation: [{
                    type: 7,
                    name: "fadeInOut",
                    definitions: [{
                        type: 1,
                        expr: "inactive => active",
                        animation: [{
                            type: 4,
                            styles: {
                                type: 6,
                                styles: {
                                    transform: "translateX(-100%)"
                                },
                                offset: null
                            },
                            timings: 500
                        }],
                        options: null
                    }, {
                        type: 1,
                        expr: "active => inactive",
                        animation: [{
                            type: 4,
                            styles: {
                                type: 6,
                                styles: {
                                    transform: "translateX(100%)"
                                },
                                offset: null
                            },
                            timings: 500
                        }],
                        options: null
                    }],
                    options: {}
                }]
            }
        });
        a["ɵccf"]("chart-tabs", c.a, s, {}, {}, [])
    },
    511: function(n, t, l) {
        "use strict";
        function e(n) {
            return m["ɵvid"](0, [(n()(),
            m["ɵeld"](0, 0, null, null, 9, "div", [["class", "date-range-picker-pandats"]], null, null, null, null, null)), (n()(),
            m["ɵted"](-1, null, ["\n    "])), (n()(),
            m["ɵeld"](2, 0, null, null, 6, "custom-select", [["name", "dateRange"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("ngModelChange" === t) {
                    e = !1 !== (s.dateRange = l) && e
                }
                if ("ngModelChange" === t) {
                    e = !1 !== s.updateTrades() && e
                }
                return e
            }, y.a, y.b)), m["ɵdid"](3, 245760, null, 0, b.a, [m.ElementRef, m.NgZone], {
                items: [0, "items"],
                config: [1, "config"]
            }, null), m["ɵprd"](1024, null, C.NG_VALUE_ACCESSOR, function(n) {
                return [n]
            }, [b.a]), m["ɵdid"](5, 671744, null, 0, C.NgModel, [[8, null], [8, null], [8, null], [2, C.NG_VALUE_ACCESSOR]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), m["ɵprd"](2048, null, C.NgControl, null, [C.NgModel]), m["ɵdid"](7, 16384, null, 0, C.NgControlStatus, [C.NgControl], null, null), (n()(),
            m["ɵted"](-1, null, ["\n    "])), (n()(),
            m["ɵted"](-1, null, ["\n"]))], function(n, t) {
                var l = t.component;
                n(t, 3, 0, l.dateRanges, l.dateRangesConfig),
                n(t, 5, 0, "dateRange", l.dateRange)
            }, function(n, t) {
                n(t, 2, 0, m["ɵnov"](t, 7).ngClassUntouched, m["ɵnov"](t, 7).ngClassTouched, m["ɵnov"](t, 7).ngClassPristine, m["ɵnov"](t, 7).ngClassDirty, m["ɵnov"](t, 7).ngClassValid, m["ɵnov"](t, 7).ngClassInvalid, m["ɵnov"](t, 7).ngClassPending)
            })
        }
        function s(n) {
            return m["ɵvid"](0, [(n()(),
            m["ɵeld"](0, 0, null, null, 3, "th", [["class", "th-pandats"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.sortBy(n.context.$implicit) && e
                }
                return e
            }, null, null)), m["ɵdid"](1, 278528, null, 0, S.NgClass, [m.IterableDiffers, m.KeyValueDiffers, m.ElementRef, m.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), m["ɵpad"](2, 2), (n()(),
            m["ɵted"](3, null, ["\n                ", "\n            "]))], function(n, t) {
                n(t, 1, 0, "th-pandats", n(t, 2, 0, "td-" + t.context.$implicit.width + "-pandats", "title-" + t.context.$implicit.id))
            }, function(n, t) {
                n(t, 3, 0, t.component.translation[t.context.$implicit.id])
            })
        }
        function a(n) {
            return m["ɵvid"](0, [(n()(),
            m["ɵeld"](0, 0, null, null, 1, "div", [["class", "error-pandats"]], null, null, null, null, null)), (n()(),
            m["ɵted"](1, null, ["\n            ", "\n        "]))], null, function(n, t) {
                n(t, 1, 0, t.component.translation.no_trade_history)
            })
        }
        function i(n) {
            return m["ɵvid"](0, [(n()(),
            m["ɵeld"](0, 0, null, null, 4, "tr", [["class", "trade-item-pandats"]], null, null, null, null, null)), (n()(),
            m["ɵted"](-1, null, ["\n                        "])), (n()(),
            m["ɵeld"](2, 0, null, null, 1, "closed-trade", [], null, null, null, g, M)), m["ɵdid"](3, 180224, null, 0, k.b, [m.ChangeDetectorRef, m.NgZone], {
                trade: [0, "trade"]
            }, null), (n()(),
            m["ɵted"](-1, null, ["\n                    "]))], function(n, t) {
                n(t, 3, 0, t.context.$implicit)
            }, null)
        }
        function u(n) {
            return m["ɵvid"](0, [(n()(),
            m["ɵeld"](0, 0, null, null, 16, "perfect-scrollbar", [], null, null, null, w.a, w.b)), m["ɵdid"](1, 4636672, [[1, 4]], 0, R.PerfectScrollbarComponent, [m.ElementRef, [2, P.PerfectScrollbarConfig], m.NgZone], null, null), (n()(),
            m["ɵted"](-1, 0, ["\n            "])), (n()(),
            m["ɵeld"](3, 0, null, 0, 12, "div", [["class", "tbody-wrap-pandats"]], null, null, null, null, null)), m["ɵdid"](4, 278528, null, 0, S.NgClass, [m.IterableDiffers, m.KeyValueDiffers, m.ElementRef, m.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), m["ɵpod"](5, {
                "long-list-pandats": 0
            }), (n()(),
            m["ɵted"](-1, null, ["\n                "])), (n()(),
            m["ɵeld"](7, 0, null, null, 7, "table", [], null, null, null, null, null)), (n()(),
            m["ɵted"](-1, null, ["\n                    "])), (n()(),
            m["ɵeld"](9, 0, null, null, 5, "tbody", [], null, null, null, null, null)), (n()(),
            m["ɵand"](16777216, null, null, 3, null, i)), m["ɵdid"](11, 802816, null, 0, S.NgForOf, [m.ViewContainerRef, m.TemplateRef, m.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), m["ɵpod"](12, {
                itemsPerPage: 0,
                currentPage: 1,
                totalItems: 2
            }), m["ɵpid"](0, T.c, [T.a]), (n()(),
            m["ɵted"](-1, null, ["\n                "])), (n()(),
            m["ɵted"](-1, null, ["\n\n            "])), (n()(),
            m["ɵted"](-1, 0, ["\n        "]))], function(n, t) {
                var l = t.component;
                n(t, 1, 0),
                n(t, 4, 0, "tbody-wrap-pandats", n(t, 5, 0, "popup" === l.type)),
                n(t, 11, 0, m["ɵunv"](t, 11, 0, m["ɵnov"](t, 13).transform(l.trades, n(t, 12, 0, l.perPage, l.currentPage, l.allCount))))
            }, null)
        }
        function o(n) {
            return m["ɵvid"](0, [(n()(),
            m["ɵeld"](0, 0, null, null, 5, "div", [["class", "pagination-pandats"]], null, null, null, null, null)), (n()(),
            m["ɵted"](-1, null, ["\n        "])), (n()(),
            m["ɵeld"](2, 0, null, null, 2, "pagination-controls", [["maxSize", "10"]], null, [[null, "pageChange"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("pageChange" === t) {
                    e = !1 !== (s.currentPage = l) && e
                }
                return e
            }, I.a, I.b)), m["ɵdid"](3, 49152, null, 0, T.d, [], {
                maxSize: [0, "maxSize"],
                previousLabel: [1, "previousLabel"],
                nextLabel: [2, "nextLabel"]
            }, {
                pageChange: "pageChange"
            }), (n()(),
            m["ɵted"](-1, null, ["\n        "])), (n()(),
            m["ɵted"](-1, null, ["\n    "]))], function(n, t) {
                var l = t.component;
                n(t, 3, 0, "10", m["ɵinlineInterpolate"](1, "", l.translation.previous, ""), m["ɵinlineInterpolate"](1, "", l.translation.next, ""))
            }, null)
        }
        function r(n) {
            return m["ɵvid"](2, [m["ɵqud"](671088640, 1, {
                ps: 0
            }), (n()(),
            m["ɵand"](16777216, null, null, 1, null, e)), m["ɵdid"](2, 16384, null, 0, S.NgIf, [m.ViewContainerRef, m.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            m["ɵted"](-1, null, ["\n\n"])), (n()(),
            m["ɵeld"](4, 0, null, null, 28, "div", [["class", "tab-wrapper-pandats"]], null, null, null, null, null)), (n()(),
            m["ɵted"](-1, null, ["\n    "])), (n()(),
            m["ɵeld"](6, 0, null, null, 10, "table", [["class", "table-headers-pandats"]], null, null, null, null, null)), (n()(),
            m["ɵted"](-1, null, ["\n        "])), (n()(),
            m["ɵeld"](8, 0, null, null, 7, "thead", [], null, null, null, null, null)), (n()(),
            m["ɵted"](-1, null, ["\n        "])), (n()(),
            m["ɵeld"](10, 0, null, null, 4, "tr", [], null, null, null, null, null)), (n()(),
            m["ɵted"](-1, null, ["\n            "])), (n()(),
            m["ɵand"](16777216, null, null, 1, null, s)), m["ɵdid"](13, 802816, null, 0, S.NgForOf, [m.ViewContainerRef, m.TemplateRef, m.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            m["ɵted"](-1, null, ["\n        "])), (n()(),
            m["ɵted"](-1, null, ["\n        "])), (n()(),
            m["ɵted"](-1, null, ["\n    "])), (n()(),
            m["ɵted"](-1, null, ["\n\n    "])), (n()(),
            m["ɵeld"](18, 0, null, null, 10, "div", [["class", "table-items-pandats history-popup-content-pandats"]], null, null, null, null, null)), (n()(),
            m["ɵted"](-1, null, ["\n        "])), (n()(),
            m["ɵeld"](20, 0, null, null, 1, "spinner", [], null, null, null, A.a, A.b)), m["ɵdid"](21, 114688, null, 0, L.a, [], {
                isShow: [0, "isShow"],
                isBackdrop: [1, "isBackdrop"]
            }, null), (n()(),
            m["ɵted"](-1, null, ["\n        "])), (n()(),
            m["ɵand"](16777216, null, null, 1, null, a)), m["ɵdid"](24, 16384, null, 0, S.NgIf, [m.ViewContainerRef, m.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            m["ɵted"](-1, null, ["\n        "])), (n()(),
            m["ɵand"](16777216, null, null, 1, null, u)), m["ɵdid"](27, 16384, null, 0, S.NgIf, [m.ViewContainerRef, m.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            m["ɵted"](-1, null, ["\n    "])), (n()(),
            m["ɵted"](-1, null, ["\n\n    "])), (n()(),
            m["ɵand"](16777216, null, null, 1, null, o)), m["ɵdid"](31, 16384, null, 0, S.NgIf, [m.ViewContainerRef, m.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            m["ɵted"](-1, null, ["\n\n"])), (n()(),
            m["ɵted"](-1, null, ["\n"]))], function(n, t) {
                var l = t.component;
                n(t, 2, 0, "popup" === l.type),
                n(t, 13, 0, l.tradeTitles),
                n(t, 21, 0, l.isLoading, !1),
                n(t, 24, 0, l.isError),
                n(t, 27, 0, !(l.isLoading && l.isError)),
                n(t, 31, 0, "popup" === l.type)
            }, null)
        }
        function d(n) {
            return m["ɵvid"](0, [(n()(),
            m["ɵeld"](0, 0, null, null, 1, "closed-trades", [], null, null, null, r, N)), m["ɵdid"](1, 770048, null, 0, k.a, [_.a, m.ChangeDetectorRef, m.NgZone], null, null)], function(n, t) {
                n(t, 1, 0)
            }, null)
        }
        function c(n) {
            return m["ɵvid"](0, [(n()(),
            m["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (n()(),
            m["ɵted"](1, null, ["", ""])), m["ɵppd"](2, 2)], null, function(n, t) {
                var l = t.component;
                n(t, 1, 0, m["ɵunv"](t, 1, 0, n(t, 2, 0, m["ɵnov"](t.parent, 1), l.trade.stopLoss, l.trade.asset.digitsFormat)))
            })
        }
        function p(n) {
            return m["ɵvid"](0, [(n()(),
            m["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(),
            m["ɵted"](-1, null, ["N/A"]))], null, null)
        }
        function f(n) {
            return m["ɵvid"](0, [(n()(),
            m["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (n()(),
            m["ɵted"](1, null, ["", ""])), m["ɵppd"](2, 2)], null, function(n, t) {
                var l = t.component;
                n(t, 1, 0, m["ɵunv"](t, 1, 0, n(t, 2, 0, m["ɵnov"](t.parent, 1), l.trade.takeProfit, l.trade.asset.digitsFormat)))
            })
        }
        function h(n) {
            return m["ɵvid"](0, [(n()(),
            m["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(),
            m["ɵted"](-1, null, ["N/A"]))], null, null)
        }
        function g(n) {
            return m["ɵvid"](2, [m["ɵpid"](0, x.a, []), m["ɵpid"](0, S.DecimalPipe, [m.LOCALE_ID]), m["ɵpid"](0, S.CurrencyPipe, [m.LOCALE_ID]), (n()(),
            m["ɵeld"](3, 0, null, null, 1, "td", [["class", "td-7-pandats"]], null, null, null, null, null)), (n()(),
            m["ɵted"](4, null, ["\n    #", "\n"])), (n()(),
            m["ɵted"](-1, null, ["\n"])), (n()(),
            m["ɵeld"](6, 0, null, null, 12, "td", [["class", "td-10-pandats"]], null, null, null, null, null)), (n()(),
            m["ɵted"](-1, null, ["\n    "])), (n()(),
            m["ɵeld"](8, 0, null, null, 9, "div", [["class", "history-time-pandats"]], null, null, null, null, null)), (n()(),
            m["ɵted"](-1, null, ["\n        "])), (n()(),
            m["ɵeld"](10, 0, null, null, 2, "span", [], null, null, null, null, null)), (n()(),
            m["ɵted"](11, null, ["", ""])), m["ɵppd"](12, 3), (n()(),
            m["ɵted"](-1, null, ["\n        "])), (n()(),
            m["ɵeld"](14, 0, null, null, 2, "span", [], null, null, null, null, null)), (n()(),
            m["ɵted"](15, null, ["", ""])), m["ɵppd"](16, 3), (n()(),
            m["ɵted"](-1, null, ["\n    "])), (n()(),
            m["ɵted"](-1, null, ["\n"])), (n()(),
            m["ɵted"](-1, null, ["\n"])), (n()(),
            m["ɵeld"](20, 0, null, null, 1, "td", [["class", "td-7-pandats"]], null, null, null, null, null)), (n()(),
            m["ɵted"](21, null, ["\n    ", "\n"])), (n()(),
            m["ɵted"](-1, null, ["\n"])), (n()(),
            m["ɵeld"](23, 0, null, null, 1, "td", [["class", "td-5-pandats"]], null, null, null, null, null)), (n()(),
            m["ɵted"](24, null, ["\n    ", "\n"])), (n()(),
            m["ɵted"](-1, null, ["\n"])), (n()(),
            m["ɵeld"](26, 0, null, null, 1, "td", [["class", "td-7-pandats"]], null, null, null, null, null)), (n()(),
            m["ɵted"](27, null, ["\n    ", "\n"])), (n()(),
            m["ɵted"](-1, null, ["\n"])), (n()(),
            m["ɵeld"](29, 0, null, null, 2, "td", [["class", "td-7-pandats"]], null, null, null, null, null)), (n()(),
            m["ɵted"](30, null, ["\n    ", "\n"])), m["ɵppd"](31, 2), (n()(),
            m["ɵted"](-1, null, ["\n\n"])), (n()(),
            m["ɵeld"](33, 0, null, null, 2, "td", [["class", "td-7-pandats"]], null, null, null, null, null)), (n()(),
            m["ɵted"](34, null, ["\n    ", "\n"])), m["ɵppd"](35, 2), (n()(),
            m["ɵted"](-1, null, ["\n\n"])), (n()(),
            m["ɵeld"](37, 0, null, null, 12, "td", [["class", "td-10-pandats"]], null, null, null, null, null)), (n()(),
            m["ɵted"](-1, null, ["\n    "])), (n()(),
            m["ɵeld"](39, 0, null, null, 9, "div", [["class", "history-time-pandats"]], null, null, null, null, null)), (n()(),
            m["ɵted"](-1, null, ["\n        "])), (n()(),
            m["ɵeld"](41, 0, null, null, 2, "span", [], null, null, null, null, null)), (n()(),
            m["ɵted"](42, null, ["", ""])), m["ɵppd"](43, 2), (n()(),
            m["ɵted"](-1, null, ["\n        "])), (n()(),
            m["ɵeld"](45, 0, null, null, 2, "span", [], null, null, null, null, null)), (n()(),
            m["ɵted"](46, null, ["", ""])), m["ɵppd"](47, 2), (n()(),
            m["ɵted"](-1, null, ["\n    "])), (n()(),
            m["ɵted"](-1, null, ["\n"])), (n()(),
            m["ɵted"](-1, null, ["\n\n"])), (n()(),
            m["ɵeld"](51, 0, null, null, 7, "td", [["class", "td-8-pandats"]], null, null, null, null, null)), (n()(),
            m["ɵted"](-1, null, ["\n    "])), (n()(),
            m["ɵand"](16777216, null, null, 1, null, c)), m["ɵdid"](54, 16384, null, 0, S.NgIf, [m.ViewContainerRef, m.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            m["ɵted"](-1, null, ["\n    "])), (n()(),
            m["ɵand"](16777216, null, null, 1, null, p)), m["ɵdid"](57, 16384, null, 0, S.NgIf, [m.ViewContainerRef, m.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            m["ɵted"](-1, null, ["\n"])), (n()(),
            m["ɵted"](-1, null, ["\n"])), (n()(),
            m["ɵeld"](60, 0, null, null, 7, "td", [["class", "td-8-pandats"]], null, null, null, null, null)), (n()(),
            m["ɵted"](-1, null, ["\n    "])), (n()(),
            m["ɵand"](16777216, null, null, 1, null, f)), m["ɵdid"](63, 16384, null, 0, S.NgIf, [m.ViewContainerRef, m.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            m["ɵted"](-1, null, ["\n    "])), (n()(),
            m["ɵand"](16777216, null, null, 1, null, h)), m["ɵdid"](66, 16384, null, 0, S.NgIf, [m.ViewContainerRef, m.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            m["ɵted"](-1, null, ["\n"])), (n()(),
            m["ɵted"](-1, null, ["\n"])), (n()(),
            m["ɵeld"](69, 0, null, null, 2, "td", [["class", "td-8-pandats"]], null, null, null, null, null)), (n()(),
            m["ɵted"](70, null, ["\n    ", "\n"])), m["ɵppd"](71, 3), (n()(),
            m["ɵted"](-1, null, ["\n"])), (n()(),
            m["ɵeld"](73, 0, null, null, 2, "td", [["class", "td-8-pandats"]], null, null, null, null, null)), (n()(),
            m["ɵted"](74, null, ["\n    ", "\n"])), m["ɵppd"](75, 3), (n()(),
            m["ɵted"](-1, null, ["\n"])), (n()(),
            m["ɵeld"](77, 0, null, null, 4, "td", [["class", "td-8-pandats"]], null, null, null, null, null)), m["ɵdid"](78, 278528, null, 0, S.NgClass, [m.IterableDiffers, m.KeyValueDiffers, m.ElementRef, m.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), m["ɵpod"](79, {
                "up-pandats": 0,
                "down-pandats": 1
            }), (n()(),
            m["ɵted"](80, null, ["\n    ", "\n"])), m["ɵppd"](81, 3), (n()(),
            m["ɵted"](-1, null, ["\n"]))], function(n, t) {
                var l = t.component;
                n(t, 54, 0, l.trade.stopLoss),
                n(t, 57, 0, !l.trade.stopLoss),
                n(t, 63, 0, l.trade.takeProfit),
                n(t, 66, 0, !l.trade.takeProfit),
                n(t, 78, 0, "td-8-pandats", n(t, 79, 0, l.trade.profit > 0, l.trade.profit < 0))
            }, function(n, t) {
                var l = t.component;
                n(t, 4, 0, l.trade.orderId),
                n(t, 11, 0, m["ɵunv"](t, 11, 0, n(t, 12, 0, m["ɵnov"](t, 0), l.trade.openTime, "DD/MM/YYYY", 60 * l.timezone - 60 * l.serverTimeService.serverTimezone))),
                n(t, 15, 0, m["ɵunv"](t, 15, 0, n(t, 16, 0, m["ɵnov"](t, 0), l.trade.openTime, "HH:mm:ss", 60 * l.timezone - 60 * l.serverTimeService.serverTimezone))),
                n(t, 21, 0, l.trade.outputName),
                n(t, 24, 0, l.translation.actionsId[l.trade.action]),
                n(t, 27, 0, l.trade.lots),
                n(t, 30, 0, m["ɵunv"](t, 30, 0, n(t, 31, 0, m["ɵnov"](t, 1), l.trade.openPrice, l.trade.asset.digitsFormat))),
                n(t, 34, 0, m["ɵunv"](t, 34, 0, n(t, 35, 0, m["ɵnov"](t, 1), l.trade.closePrice, l.trade.asset.digitsFormat))),
                n(t, 42, 0, m["ɵunv"](t, 42, 0, n(t, 43, 0, m["ɵnov"](t, 0), l.trade.closeTime, "DD/MM/YYYY"))),
                n(t, 46, 0, m["ɵunv"](t, 46, 0, n(t, 47, 0, m["ɵnov"](t, 0), l.trade.closeTime, "HH:mm:ss"))),
                n(t, 70, 0, m["ɵunv"](t, 70, 0, n(t, 71, 0, m["ɵnov"](t, 2), l.trade.commission, l.user.currency, !0))),
                n(t, 74, 0, m["ɵunv"](t, 74, 0, n(t, 75, 0, m["ɵnov"](t, 2), l.trade.swap, l.user.currency, !0))),
                n(t, 80, 0, m["ɵunv"](t, 80, 0, n(t, 81, 0, m["ɵnov"](t, 2), l.trade.profit, l.user.currency, !0)))
            })
        }
        function v(n) {
            return m["ɵvid"](0, [(n()(),
            m["ɵeld"](0, 0, null, null, 1, "closed-trade", [], null, null, null, g, M)), m["ɵdid"](1, 180224, null, 0, k.b, [m.ChangeDetectorRef, m.NgZone], null, null)], null, null)
        }
        var m = l(2)
          , y = l(72)
          , b = l(56)
          , C = l(5)
          , S = l(4)
          , k = l(142)
          , w = l(78)
          , R = l(55)
          , P = (l.n(R),
        l(18))
          , T = (l.n(P),
        l(113))
          , I = l(519)
          , A = l(73)
          , L = l(57)
          , _ = l(64)
          , x = l(104);
        l.d(t, "b", function() {
            return N
        }),
        t.a = r;
        var D = []
          , N = m["ɵcrt"]({
            encapsulation: 2,
            styles: D,
            data: {}
        })
          , O = (m["ɵccf"]("closed-trades", k.a, d, {
            type: "type",
            dateRange: "dateRange"
        }, {
            count: "count"
        }, []),
        [])
          , M = m["ɵcrt"]({
            encapsulation: 2,
            styles: O,
            data: {}
        });
        m["ɵccf"]("closed-trade", k.b, v, {
            trade: "trade"
        }, {}, [])
    },
    512: function(n, t, l) {
        "use strict";
        function e(n) {
            return v["ɵvid"](0, [(n()(),
            v["ɵeld"](0, 0, null, null, 1, "div", [["class", "title-pandats"]], null, null, null, null, null)), (n()(),
            v["ɵted"](1, null, ["", " #", ""]))], null, function(n, t) {
                var l = t.component;
                n(t, 1, 0, l.translation.close_trade, l.trade.orderId)
            })
        }
        function s(n) {
            return v["ɵvid"](0, [(n()(),
            v["ɵeld"](0, 0, null, null, 1, "div", [["class", "title-pandats"]], null, null, null, null, null)), (n()(),
            v["ɵted"](1, null, ["", " #", ""]))], null, function(n, t) {
                var l = t.component;
                n(t, 1, 0, l.translation.delete_trade, l.trade.orderId)
            })
        }
        function a(n) {
            return v["ɵvid"](0, [(n()(),
            v["ɵeld"](0, 0, null, null, 37, "div", [["class", "content-wrapper-pandats layout-row"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵeld"](2, 0, null, null, 16, "div", [["class", "layout-column semi-width just-center"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n                "])), (n()(),
            v["ɵeld"](4, 0, null, null, 13, "div", [["class", "layout-row just-center"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n                    "])), (n()(),
            v["ɵeld"](6, 0, null, null, 10, "div", [["class", "layout-column"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n                        "])), (n()(),
            v["ɵeld"](8, 0, null, null, 1, "div", [["class", "title-pandats layout-row just-center"]], null, null, null, null, null)), (n()(),
            v["ɵted"](9, null, ["\n                            ", "\n                        "])), (n()(),
            v["ɵted"](-1, null, ["\n                        "])), (n()(),
            v["ɵeld"](11, 0, null, null, 4, "div", [["class", "value-pandats layout-row just-center"]], null, null, null, null, null)), v["ɵdid"](12, 278528, null, 0, m.NgClass, [v.IterableDiffers, v.KeyValueDiffers, v.ElementRef, v.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), v["ɵpod"](13, {
                "up-pandats": 0,
                "down-pandats": 1
            }), (n()(),
            v["ɵted"](14, null, ["\n                            ", "\n                        "])), v["ɵppd"](15, 2), (n()(),
            v["ɵted"](-1, null, ["\n                    "])), (n()(),
            v["ɵted"](-1, null, ["\n                "])), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵeld"](20, 0, null, null, 16, "div", [["class", "layout-column semi-width just-center"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n                "])), (n()(),
            v["ɵeld"](22, 0, null, null, 13, "div", [["class", "layout-row just-center"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n                    "])), (n()(),
            v["ɵeld"](24, 0, null, null, 10, "div", [["class", "layout-column"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n                        "])), (n()(),
            v["ɵeld"](26, 0, null, null, 1, "div", [["class", "title-pandats layout-row just-center"]], null, null, null, null, null)), (n()(),
            v["ɵted"](27, null, ["\n                            ", "\n                        "])), (n()(),
            v["ɵted"](-1, null, ["\n                        "])), (n()(),
            v["ɵeld"](29, 0, null, null, 4, "div", [["class", "value-pandats layout-row just-center"]], null, null, null, null, null)), v["ɵdid"](30, 278528, null, 0, m.NgClass, [v.IterableDiffers, v.KeyValueDiffers, v.ElementRef, v.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), v["ɵpod"](31, {
                "up-pandats": 0,
                "down-pandats": 1
            }), (n()(),
            v["ɵted"](32, null, ["\n                            ", "\n                        "])), v["ɵppd"](33, 3), (n()(),
            v["ɵted"](-1, null, ["\n                    "])), (n()(),
            v["ɵted"](-1, null, ["\n                "])), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵted"](-1, null, ["\n        "]))], function(n, t) {
                var l = t.component;
                n(t, 12, 0, "value-pandats layout-row just-center", n(t, 13, 0, "buy" === l.trade.action || "buy_stop" === l.trade.action || "buy_limit" === l.trade.action, "sell" === l.trade.action || "sell_stop" === l.trade.action || "sell_limit" === l.trade.action)),
                n(t, 30, 0, "value-pandats layout-row just-center", n(t, 31, 0, l.trade.profit > 0, l.trade.profit < 0))
            }, function(n, t) {
                var l = t.component;
                n(t, 9, 0, l.translation.closePrice),
                n(t, 14, 0, v["ɵunv"](t, 14, 0, n(t, 15, 0, v["ɵnov"](t.parent.parent, 0), l.trade.closePrice(), l.trade.asset.digitsFormat))),
                n(t, 27, 0, l.translation.profit),
                n(t, 32, 0, v["ɵunv"](t, 32, 0, n(t, 33, 0, v["ɵnov"](t.parent.parent, 1), l.trade.profit, l.user.currency, !0)))
            })
        }
        function i(n) {
            return v["ɵvid"](0, [(n()(),
            v["ɵeld"](0, 0, null, null, 10, "div", [["class", "footer-popup-pandats layout-row"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵeld"](2, 0, null, null, 7, "div", [["class", "tr-row-pandats"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n                "])), (n()(),
            v["ɵeld"](4, 0, null, null, 1, "button", [["class", "invest-pandats forex-button-pandats simple-button-pandats decent"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.close() && e
                }
                return e
            }, null, null)), (n()(),
            v["ɵted"](5, null, ["", "\n                "])), (n()(),
            v["ɵted"](-1, null, ["\n                "])), (n()(),
            v["ɵeld"](7, 0, null, null, 1, "button", [["class", "invest-pandats forex-button-pandats simple-button-pandats accent"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.onSubmit() && e
                }
                return e
            }, null, null)), (n()(),
            v["ɵted"](8, null, ["", "\n                "])), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵted"](-1, null, ["\n        "]))], null, function(n, t) {
                var l = t.component;
                n(t, 5, 0, l.translation.no),
                n(t, 8, 0, l.translation.yes)
            })
        }
        function u(n) {
            return v["ɵvid"](0, [(n()(),
            v["ɵeld"](0, 0, null, null, 4, "div", [["class", "content-wrapper-pandats layout-row"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵeld"](2, 0, null, null, 1, "div", [["class", "tr-row-pandats message-pandats"]], null, null, null, null, null)), (n()(),
            v["ɵted"](3, null, ["\n                ", " ?\n            "])), (n()(),
            v["ɵted"](-1, null, ["\n        "]))], null, function(n, t) {
                n(t, 3, 0, t.component.translation.delete_trade)
            })
        }
        function o(n) {
            return v["ɵvid"](0, [(n()(),
            v["ɵeld"](0, 0, null, null, 10, "div", [["class", "footer-popup-pandats layout-row"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵeld"](2, 0, null, null, 7, "div", [["class", "tr-row-pandats"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n                "])), (n()(),
            v["ɵeld"](4, 0, null, null, 1, "button", [["class", "invest-pandats forex-button-pandats simple-button-pandats decent"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.close() && e
                }
                return e
            }, null, null)), (n()(),
            v["ɵted"](5, null, ["", "\n                "])), (n()(),
            v["ɵted"](-1, null, ["\n                "])), (n()(),
            v["ɵeld"](7, 0, null, null, 1, "button", [["class", "invest-pandats forex-button-pandats simple-button-pandats accent"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.deleteTrade() && e
                }
                return e
            }, null, null)), (n()(),
            v["ɵted"](8, null, ["\n                    ", "\n                "])), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵted"](-1, null, ["\n        "]))], null, function(n, t) {
                var l = t.component;
                n(t, 5, 0, l.translation.no),
                n(t, 8, 0, l.translation.yes)
            })
        }
        function r(n) {
            return v["ɵvid"](0, [(n()(),
            v["ɵeld"](0, 0, null, null, 1, "popup", [], null, [[null, "isHide"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("isHide" === t) {
                    e = !1 !== s.close() && e
                }
                return e
            }, y.a, y.b)), v["ɵdid"](1, 770048, null, 0, b.a, [v.NgZone], {
                data: [0, "data"],
                state: [1, "state"]
            }, {
                isHide: "isHide"
            })], function(n, t) {
                var l = t.component;
                n(t, 1, 0, l.popup.data, l.popup.state)
            }, null)
        }
        function d(n) {
            return v["ɵvid"](0, [(n()(),
            v["ɵeld"](0, 0, null, null, 44, "div", [], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n    "])), (n()(),
            v["ɵeld"](2, 0, null, null, 0, "div", [["class", "backdrop-pandats"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n    "])), (n()(),
            v["ɵeld"](4, 0, null, null, 39, "div", [["class", "popup-wrapper-pandats helvetica-neue-pandats layout-column"]], [[24, "@fadeInOut", 0]], null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n        "])), (n()(),
            v["ɵeld"](6, 0, null, null, 1, "spinner", [], null, null, null, C.a, C.b)), v["ɵdid"](7, 114688, null, 0, S.a, [], {
                isShow: [0, "isShow"]
            }, null), (n()(),
            v["ɵted"](-1, null, ["\n        "])), (n()(),
            v["ɵeld"](9, 0, null, null, 1, "toast", [], null, null, null, k.a, k.b)), v["ɵdid"](10, 704512, null, 0, w.a, [], {
                content: [0, "content"],
                status: [1, "status"]
            }, null), (n()(),
            v["ɵted"](-1, null, ["\n\n        "])), (n()(),
            v["ɵeld"](12, 0, null, null, 12, "div", [["class", "title-popup-pandats layout-row"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵand"](16777216, null, null, 1, null, e)), v["ɵdid"](15, 16384, null, 0, m.NgIf, [v.ViewContainerRef, v.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵand"](16777216, null, null, 1, null, s)), v["ɵdid"](18, 16384, null, 0, m.NgIf, [v.ViewContainerRef, v.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵeld"](20, 0, null, null, 3, "div", [["class", "close-popup-pandats"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.close() && e
                }
                return e
            }, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n                "])), (n()(),
            v["ɵeld"](22, 0, null, null, 0, "i", [["class", "icon-pandats cmicon-cancel"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵted"](-1, null, ["\n        "])), (n()(),
            v["ɵted"](-1, null, ["\n\n        "])), (n()(),
            v["ɵeld"](26, 0, null, null, 1, "div", [["class", "subtitle-popup-pandats layout-row message-pandats"]], null, null, null, null, null)), (n()(),
            v["ɵted"](27, null, ["\n            ", "\n        "])), (n()(),
            v["ɵted"](-1, null, ["\n\n        "])), (n()(),
            v["ɵand"](16777216, null, null, 1, null, a)), v["ɵdid"](30, 16384, null, 0, m.NgIf, [v.ViewContainerRef, v.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            v["ɵted"](-1, null, ["\n\n        "])), (n()(),
            v["ɵand"](16777216, null, null, 1, null, i)), v["ɵdid"](33, 16384, null, 0, m.NgIf, [v.ViewContainerRef, v.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            v["ɵted"](-1, null, ["\n\n\n\n        "])), (n()(),
            v["ɵand"](16777216, null, null, 1, null, u)), v["ɵdid"](36, 16384, null, 0, m.NgIf, [v.ViewContainerRef, v.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            v["ɵted"](-1, null, ["\n\n        "])), (n()(),
            v["ɵand"](16777216, null, null, 1, null, o)), v["ɵdid"](39, 16384, null, 0, m.NgIf, [v.ViewContainerRef, v.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            v["ɵted"](-1, null, ["\n\n        "])), (n()(),
            v["ɵand"](16777216, null, null, 1, null, r)), v["ɵdid"](42, 16384, null, 0, m.NgIf, [v.ViewContainerRef, v.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            v["ɵted"](-1, null, ["\n    "])), (n()(),
            v["ɵted"](-1, null, ["\n"]))], function(n, t) {
                var l = t.component;
                n(t, 7, 0, l.showSpinner),
                n(t, 10, 0, l.toastContent, l.toastStatus),
                n(t, 15, 0, l.trade.actionCode < 2),
                n(t, 18, 0, l.trade.actionCode > 1),
                n(t, 30, 0, l.trade.actionCode < 2),
                n(t, 33, 0, l.trade.actionCode < 2),
                n(t, 36, 0, l.trade.actionCode > 1),
                n(t, 39, 0, l.trade.actionCode > 1),
                n(t, 42, 0, l.popup.show)
            }, function(n, t) {
                var l = t.component;
                n(t, 4, 0, void 0),
                n(t, 27, 0, l.translation.want_to_close_trade)
            })
        }
        function c(n) {
            return v["ɵvid"](0, [(n()(),
            v["ɵeld"](0, 0, null, null, 3, "div", [["class", "requote-value-price-pandats"]], null, null, null, null, null)), v["ɵdid"](1, 278528, null, 0, m.NgClass, [v.IterableDiffers, v.KeyValueDiffers, v.ElementRef, v.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(),
            v["ɵted"](2, null, ["\n                    ", "\n                "])), v["ɵppd"](3, 2)], function(n, t) {
                n(t, 1, 0, "requote-value-price-pandats", t.component.trade.asset.askDirection)
            }, function(n, t) {
                var l = t.component;
                n(t, 2, 0, v["ɵunv"](t, 2, 0, n(t, 3, 0, v["ɵnov"](t.parent.parent, 0), l.trade.asset.markupAsk(), l.trade.asset.digitsFormat)))
            })
        }
        function p(n) {
            return v["ɵvid"](0, [(n()(),
            v["ɵeld"](0, 0, null, null, 3, "div", [["class", "requote-value-price-pandats"]], null, null, null, null, null)), v["ɵdid"](1, 278528, null, 0, m.NgClass, [v.IterableDiffers, v.KeyValueDiffers, v.ElementRef, v.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(),
            v["ɵted"](2, null, ["\n                    ", "\n                "])), v["ɵppd"](3, 2)], function(n, t) {
                n(t, 1, 0, "requote-value-price-pandats", t.component.trade.asset.bidDirection)
            }, function(n, t) {
                var l = t.component;
                n(t, 2, 0, v["ɵunv"](t, 2, 0, n(t, 3, 0, v["ɵnov"](t.parent.parent, 0), l.trade.asset.markupBid(), l.trade.asset.digitsFormat)))
            })
        }
        function f(n) {
            return v["ɵvid"](0, [(n()(),
            v["ɵeld"](0, 0, null, null, 95, "modal", [], null, [[null, "onClose"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("onClose" === t) {
                    e = !1 !== s.closeRequotePopup() && e
                }
                return e
            }, R.a, R.b)), v["ɵdid"](1, 245760, null, 0, P.a, [], {
                state: [0, "state"],
                config: [1, "config"]
            }, {
                onClose: "onClose"
            }), (n()(),
            v["ɵted"](-1, null, ["\n\n    "])), (n()(),
            v["ɵeld"](3, 0, null, 0, 1, "header", [], null, null, null, null, null)), (n()(),
            v["ɵted"](4, null, ["", ""])), (n()(),
            v["ɵted"](-1, null, ["\n\n    "])), (n()(),
            v["ɵeld"](6, 0, null, 1, 31, "div", [["class", "section-subtitle"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n        "])), (n()(),
            v["ɵeld"](8, 0, null, null, 28, "div", [["class", "row-pandats trade-info-pandats"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵeld"](10, 0, null, null, 7, "div", [["class", "col-pandats"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n                "])), (n()(),
            v["ɵeld"](12, 0, null, null, 1, "div", [["class", "requote-title-price-pandats"]], null, null, null, null, null)), (n()(),
            v["ɵted"](13, null, ["", ":"])), (n()(),
            v["ɵted"](-1, null, ["\n                "])), (n()(),
            v["ɵeld"](15, 0, null, null, 1, "div", [["class", "requote-value-price-pandats"]], null, null, null, null, null)), (n()(),
            v["ɵted"](16, null, ["", ""])), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵeld"](19, 0, null, null, 7, "div", [["class", "col-pandats"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n                "])), (n()(),
            v["ɵeld"](21, 0, null, null, 1, "div", [["class", "requote-title-price-pandats"]], null, null, null, null, null)), (n()(),
            v["ɵted"](22, null, ["", ""])), (n()(),
            v["ɵted"](-1, null, ["\n                "])), (n()(),
            v["ɵeld"](24, 0, null, null, 1, "div", [["class", "requote-value-price-pandats"]], null, null, null, null, null)), (n()(),
            v["ɵted"](25, null, ["", ""])), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵeld"](28, 0, null, null, 7, "div", [["class", "col-pandats"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n                "])), (n()(),
            v["ɵeld"](30, 0, null, null, 1, "div", [["class", "requote-title-price-pandats"]], null, null, null, null, null)), (n()(),
            v["ɵted"](31, null, ["", ""])), (n()(),
            v["ɵted"](-1, null, ["\n                "])), (n()(),
            v["ɵeld"](33, 0, null, null, 1, "div", [["class", "requote-value-price-pandats"]], null, null, null, null, null)), (n()(),
            v["ɵted"](34, null, ["", ""])), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵted"](-1, null, ["\n        "])), (n()(),
            v["ɵted"](-1, null, ["\n    "])), (n()(),
            v["ɵted"](-1, null, ["\n\n    "])), (n()(),
            v["ɵeld"](39, 0, null, 2, 37, "section", [], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n        "])), (n()(),
            v["ɵeld"](41, 0, null, null, 7, "div", [["class", "requote-text-pandats"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵeld"](43, 0, null, null, 1, "p", [], null, null, null, null, null)), (n()(),
            v["ɵted"](44, null, ["", "."])), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵeld"](46, 0, null, null, 1, "p", [], null, null, null, null, null)), (n()(),
            v["ɵted"](47, null, ["", ""])), (n()(),
            v["ɵted"](-1, null, ["\n        "])), (n()(),
            v["ɵted"](-1, null, ["\n\n        "])), (n()(),
            v["ɵeld"](50, 0, null, null, 25, "div", [["class", "row-pandats"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵeld"](52, 0, null, null, 10, "div", [["class", "col-pandats"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n                "])), (n()(),
            v["ɵand"](16777216, null, null, 1, null, c)), v["ɵdid"](55, 16384, null, 0, m.NgIf, [v.ViewContainerRef, v.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            v["ɵted"](-1, null, ["\n                "])), (n()(),
            v["ɵand"](16777216, null, null, 1, null, p)), v["ɵdid"](58, 16384, null, 0, m.NgIf, [v.ViewContainerRef, v.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            v["ɵted"](-1, null, ["\n                "])), (n()(),
            v["ɵeld"](60, 0, null, null, 1, "div", [["class", "requote-title-price-pandats"]], null, null, null, null, null)), (n()(),
            v["ɵted"](61, null, ["", ""])), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵeld"](64, 0, null, null, 10, "div", [["class", "col-pandats"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n                "])), (n()(),
            v["ɵeld"](66, 0, null, null, 4, "div", [["class", "requote-value-margin-pandats"]], null, null, null, null, null)), v["ɵdid"](67, 278528, null, 0, m.NgClass, [v.IterableDiffers, v.KeyValueDiffers, v.ElementRef, v.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), v["ɵpod"](68, {
                "up-pandats": 0,
                "down-pandats": 1
            }), (n()(),
            v["ɵted"](69, null, ["", ""])), v["ɵppd"](70, 3), (n()(),
            v["ɵted"](-1, null, ["\n                "])), (n()(),
            v["ɵeld"](72, 0, null, null, 1, "div", [["class", "requote-title-margin-pandats"]], null, null, null, null, null)), (n()(),
            v["ɵted"](73, null, ["", ""])), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵted"](-1, null, ["\n        "])), (n()(),
            v["ɵted"](-1, null, ["\n    "])), (n()(),
            v["ɵted"](-1, null, ["\n\n    "])), (n()(),
            v["ɵeld"](78, 0, null, 3, 16, "footer", [], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n        "])), (n()(),
            v["ɵeld"](80, 0, null, null, 13, "div", [["class", "layout-row content-pushed22"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵeld"](82, 0, null, null, 4, "div", [["class", "layout-column semi-width"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n                "])), (n()(),
            v["ɵeld"](84, 0, null, null, 1, "button", [["class", "forex-button-pandats short-button-pandats decent"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.closeRequotePopup() && e
                }
                return e
            }, null, null)), (n()(),
            v["ɵted"](85, null, ["", ""])), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵeld"](88, 0, null, null, 4, "div", [["class", "layout-column semi-width"]], null, null, null, null, null)), (n()(),
            v["ɵted"](-1, null, ["\n                "])), (n()(),
            v["ɵeld"](90, 0, null, null, 1, "button", [["class", "forex-button-pandats short-button-pandats accent"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.onSubmit() && e
                }
                return e
            }, null, null)), (n()(),
            v["ɵted"](91, null, ["", ""])), (n()(),
            v["ɵted"](-1, null, ["\n            "])), (n()(),
            v["ɵted"](-1, null, ["\n        "])), (n()(),
            v["ɵted"](-1, null, ["\n    "])), (n()(),
            v["ɵted"](-1, null, ["\n\n"]))], function(n, t) {
                var l = t.component;
                n(t, 1, 0, l.requoteState, l.requotePopupConfig),
                n(t, 55, 0, "sell" === l.trade.action || "sell_limit" === l.trade.action || "sell_stop" === l.trade.action),
                n(t, 58, 0, "buy" === l.trade.action || "buy_limit" === l.trade.action || "buy_stop" === l.trade.action),
                n(t, 67, 0, "requote-value-margin-pandats", n(t, 68, 0, l.trade.profit > 0, l.trade.profit < 0))
            }, function(n, t) {
                var l = t.component;
                n(t, 4, 0, l.translation.close_position_requote),
                n(t, 13, 0, l.translation.asset_name),
                n(t, 16, 0, l.trade.asset.outputName),
                n(t, 22, 0, l.translation.direction),
                n(t, 25, 0, l.translation[l.trade.action]),
                n(t, 31, 0, l.translation.openPrice),
                n(t, 34, 0, l.trade.openPrice),
                n(t, 44, 0, l.translation.price_changed),
                n(t, 47, 0, l.translation.want_to_close),
                n(t, 61, 0, l.translation.current_rate),
                n(t, 69, 0, v["ɵunv"](t, 69, 0, n(t, 70, 0, v["ɵnov"](t.parent, 1), l.trade.profit, l.user.currency, !0))),
                n(t, 73, 0, l.translation.profit),
                n(t, 85, 0, l.translation.cancel),
                n(t, 91, 0, l.translation.accept_changes)
            })
        }
        function h(n) {
            return v["ɵvid"](0, [v["ɵpid"](0, m.DecimalPipe, [v.LOCALE_ID]), v["ɵpid"](0, m.CurrencyPipe, [v.LOCALE_ID]), (n()(),
            v["ɵand"](16777216, null, null, 1, null, d)), v["ɵdid"](3, 16384, null, 0, m.NgIf, [v.ViewContainerRef, v.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            v["ɵted"](-1, null, ["\n\n\n"])), (n()(),
            v["ɵted"](-1, null, ["\n"])), (n()(),
            v["ɵand"](16777216, null, null, 1, null, f)), v["ɵdid"](7, 16384, null, 0, m.NgIf, [v.ViewContainerRef, v.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            v["ɵted"](-1, null, ["\n"]))], function(n, t) {
                var l = t.component;
                n(t, 3, 0, l.isShow),
                n(t, 7, 0, l.trade)
            }, null)
        }
        function g(n) {
            return v["ɵvid"](0, [(n()(),
            v["ɵeld"](0, 0, null, null, 1, "closetrade-popup", [], null, null, null, h, A)), v["ɵdid"](1, 245760, null, 0, T.a, [v.NgZone], null, null)], function(n, t) {
                n(t, 1, 0)
            }, null)
        }
        var v = l(2)
          , m = l(4)
          , y = l(200)
          , b = l(105)
          , C = l(73)
          , S = l(57)
          , k = l(130)
          , w = l(79)
          , R = l(98)
          , P = l(75)
          , T = l(143);
        l.d(t, "b", function() {
            return A
        }),
        t.a = h;
        var I = []
          , A = v["ɵcrt"]({
            encapsulation: 2,
            styles: I,
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
        v["ɵccf"]("closetrade-popup", T.a, g, {}, {}, [])
    },
    513: function(n, t, l) {
        "use strict";
        function e(n) {
            return g["ɵvid"](0, [(n()(),
            g["ɵeld"](0, 0, null, null, 2, "div", [["class", "btn-value-pandats layout-row font20-pandats make-bold full-width just-center"]], null, null, null, null, null)), (n()(),
            g["ɵted"](1, null, ["\n                    ", "\n                "])), g["ɵppd"](2, 2)], null, function(n, t) {
                var l = t.component;
                n(t, 1, 0, g["ɵunv"](t, 1, 0, n(t, 2, 0, g["ɵnov"](t.parent, 1), l.selectedAsset.markupBid(), l.selectedAsset.digitsFormat)))
            })
        }
        function s(n) {
            return g["ɵvid"](0, [(n()(),
            g["ɵeld"](0, 0, null, null, 2, "div", [["class", "btn-value-pandats layout-row font20-pandats make-bold full-width just-center"]], null, null, null, null, null)), (n()(),
            g["ɵted"](1, null, ["\n                    ", "\n                "])), g["ɵppd"](2, 2)], null, function(n, t) {
                var l = t.component;
                n(t, 1, 0, g["ɵunv"](t, 1, 0, n(t, 2, 0, g["ɵnov"](t.parent, 1), l.selectedAsset.markupAsk(), l.selectedAsset.digitsFormat)))
            })
        }
        function a(n) {
            return g["ɵvid"](0, [(n()(),
            g["ɵeld"](0, 0, null, null, 13, "div", [["class", "layout-row rate-reach-container font12-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵeld"](2, 0, null, null, 10, "custom-input", [["maxlength", "8"], ["name", "rateReach"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("ngModelChange" === t) {
                    e = !1 !== (s.reach.value = l) && e
                }
                if ("ngModelChange" === t) {
                    e = !1 !== s.updateReach(l) && e
                }
                return e
            }, v.a, v.b)), g["ɵdid"](3, 540672, null, 0, m.MaxLengthValidator, [], {
                maxlength: [0, "maxlength"]
            }, null), g["ɵprd"](1024, null, m.NG_VALIDATORS, function(n) {
                return [n]
            }, [m.MaxLengthValidator]), g["ɵdid"](5, 770048, null, 0, y.a, [g.ElementRef], {
                buttons: [0, "buttons"],
                validator: [1, "validator"],
                maxlength: [2, "maxlength"]
            }, null), g["ɵpod"](6, {
                visible: 0
            }), g["ɵpod"](7, {
                mask: 0,
                limit: 1
            }), g["ɵprd"](1024, null, m.NG_VALUE_ACCESSOR, function(n) {
                return [n]
            }, [y.a]), g["ɵdid"](9, 671744, null, 0, m.NgModel, [[2, m.ControlContainer], [2, m.NG_VALIDATORS], [8, null], [2, m.NG_VALUE_ACCESSOR]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), g["ɵprd"](2048, null, m.NgControl, null, [m.NgModel]), g["ɵdid"](11, 16384, null, 0, m.NgControlStatus, [m.NgControl], null, null), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵted"](-1, null, ["\n                "]))], function(n, t) {
                var l = t.component;
                n(t, 3, 0, "8"),
                n(t, 5, 0, n(t, 6, 0, !0), n(t, 7, 0, "rate", l.selectedAsset.digits), "8"),
                n(t, 9, 0, "rateReach", l.reach.value)
            }, function(n, t) {
                n(t, 2, 0, g["ɵnov"](t, 3).maxlength ? g["ɵnov"](t, 3).maxlength : null, g["ɵnov"](t, 11).ngClassUntouched, g["ɵnov"](t, 11).ngClassTouched, g["ɵnov"](t, 11).ngClassPristine, g["ɵnov"](t, 11).ngClassDirty, g["ɵnov"](t, 11).ngClassValid, g["ɵnov"](t, 11).ngClassInvalid, g["ɵnov"](t, 11).ngClassPending)
            })
        }
        function i(n) {
            return g["ɵvid"](0, [(n()(),
            g["ɵeld"](0, 0, null, null, 2, "div", [["class", "full-width loss-profit-value centered-content line-height20-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](1, null, ["\n                                    ", "\n                                "])), g["ɵppd"](2, 3)], null, function(n, t) {
                var l = t.component;
                n(t, 1, 0, g["ɵunv"](t, 1, 0, n(t, 2, 0, g["ɵnov"](t.parent, 0), l.calcLossValue(), l.user.currency, !0)))
            })
        }
        function u(n) {
            return g["ɵvid"](0, [(n()(),
            g["ɵeld"](0, 0, null, null, 2, "div", [["class", "full-width loss-profit-value centered-content line-height20-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](1, null, ["\n                                    ", "\n                                "])), g["ɵppd"](2, 3)], null, function(n, t) {
                var l = t.component;
                n(t, 1, 0, g["ɵunv"](t, 1, 0, n(t, 2, 0, g["ɵnov"](t.parent, 0), l.calcProfitValue(), l.user.currency, !0)))
            })
        }
        function o(n) {
            return g["ɵvid"](0, [(n()(),
            g["ɵeld"](0, 0, null, null, 19, "div", [["class", "funds-popup-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵeld"](2, 0, null, null, 0, "div", [["class", "backdrop-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵeld"](4, 0, null, null, 14, "div", [["class", "funds-content-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](6, 0, null, null, 0, "div", [["class", "close-pandats cmicon-close4"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 != (s.popup.errorCode = !1) && e
                }
                return e
            }, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](8, 0, null, null, 1, "div", [["class", "funds-title-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](9, null, ["\n                    ", "\n                "])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](11, 0, null, null, 3, "div", [["class", "funds-text-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵeld"](13, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](16, 0, null, null, 1, "button", [["class", "forex-button-pandats simple-button-pandats"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.deposit() && e
                }
                return e
            }, null, null)), (n()(),
            g["ɵted"](17, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵted"](-1, null, ["\n        "]))], null, function(n, t) {
                var l = t.component;
                n(t, 9, 0, l.translation.insufficient_funds),
                n(t, 13, 0, l.translation.your_available_funds),
                n(t, 17, 0, l.translation.deposit)
            })
        }
        function r(n) {
            return g["ɵvid"](0, [(n()(),
            g["ɵeld"](0, 0, null, null, 2, "popup", [], null, [[null, "isHide"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("isHide" === t) {
                    e = !1 !== s.popupHide() && e
                }
                return e
            }, b.a, b.b)), g["ɵdid"](1, 770048, null, 0, C.a, [g.NgZone], {
                data: [0, "data"],
                state: [1, "state"]
            }, {
                isHide: "isHide"
            }), (n()(),
            g["ɵted"](-1, 0, ["\n        "]))], function(n, t) {
                var l = t.component;
                n(t, 1, 0, l.popup.data, l.popup.state)
            }, null)
        }
        function d(n) {
            return g["ɵvid"](0, [(n()(),
            g["ɵeld"](0, 0, null, null, 28, "div", [["class", "row-pandats trade-info-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵeld"](2, 0, null, null, 7, "div", [["class", "col-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](4, 0, null, null, 1, "div", [["class", "requote-title-price-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](5, null, ["", ":"])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](7, 0, null, null, 1, "div", [["class", "requote-value-price-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](8, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵeld"](11, 0, null, null, 7, "div", [["class", "col-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](13, 0, null, null, 1, "div", [["class", "requote-title-price-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](14, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](16, 0, null, null, 1, "div", [["class", "requote-value-price-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](17, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵeld"](20, 0, null, null, 7, "div", [["class", "col-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](22, 0, null, null, 1, "div", [["class", "requote-title-price-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](23, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](25, 0, null, null, 1, "div", [["class", "requote-value-price-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](26, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵted"](-1, null, ["\n        "]))], null, function(n, t) {
                var l = t.component;
                n(t, 5, 0, l.translation.asset_name),
                n(t, 8, 0, l.selectedAsset.outputName),
                n(t, 14, 0, l.translation.direction),
                n(t, 17, 0, l.translation[l.constants.actionsId[l.tradeToSend.Cmd]]),
                n(t, 23, 0, l.translation.entry_price),
                n(t, 26, 0, l.tradeToSend.OpenPrice)
            })
        }
        function c(n) {
            return g["ɵvid"](0, [(n()(),
            g["ɵeld"](0, 0, null, null, 3, "div", [["class", "requote-value-price-pandats"]], null, null, null, null, null)), g["ɵdid"](1, 278528, null, 0, S.NgClass, [g.IterableDiffers, g.KeyValueDiffers, g.ElementRef, g.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(),
            g["ɵted"](2, null, ["\n                    ", "\n                "])), g["ɵppd"](3, 2)], function(n, t) {
                n(t, 1, 0, "requote-value-price-pandats", t.component.selectedAsset.bidDirection)
            }, function(n, t) {
                var l = t.component;
                n(t, 2, 0, g["ɵunv"](t, 2, 0, n(t, 3, 0, g["ɵnov"](t.parent, 1), l.selectedAsset.markupBid(), l.selectedAsset.digitsFormat)))
            })
        }
        function p(n) {
            return g["ɵvid"](0, [(n()(),
            g["ɵeld"](0, 0, null, null, 3, "div", [["class", "requote-value-price-pandats"]], null, null, null, null, null)), g["ɵdid"](1, 278528, null, 0, S.NgClass, [g.IterableDiffers, g.KeyValueDiffers, g.ElementRef, g.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(),
            g["ɵted"](2, null, ["\n                    ", "\n                "])), g["ɵppd"](3, 2)], function(n, t) {
                n(t, 1, 0, "requote-value-price-pandats", t.component.selectedAsset.askDirection)
            }, function(n, t) {
                var l = t.component;
                n(t, 2, 0, g["ɵunv"](t, 2, 0, n(t, 3, 0, g["ɵnov"](t.parent, 1), l.selectedAsset.markupAsk(), l.selectedAsset.digitsFormat)))
            })
        }
        function f(n) {
            return g["ɵvid"](0, [g["ɵpid"](0, S.CurrencyPipe, [g.LOCALE_ID]), g["ɵpid"](0, S.DecimalPipe, [g.LOCALE_ID]), (n()(),
            g["ɵeld"](2, 0, null, null, 305, "perfect-scrollbar", [["class", "container-pandats"]], null, null, null, k.a, k.b)), g["ɵdid"](3, 4636672, null, 0, w.PerfectScrollbarComponent, [g.ElementRef, [2, R.PerfectScrollbarConfig], g.NgZone], null, null), (n()(),
            g["ɵted"](-1, 0, ["\n    "])), (n()(),
            g["ɵeld"](5, 0, null, 0, 301, "form", [["class", "layout-column"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function(n, t, l) {
                var e = !0;
                if ("submit" === t) {
                    e = !1 !== g["ɵnov"](n, 7).onSubmit(l) && e
                }
                if ("reset" === t) {
                    e = !1 !== g["ɵnov"](n, 7).onReset() && e
                }
                return e
            }, null, null)), g["ɵdid"](6, 16384, null, 0, m["ɵbf"], [], null, null), g["ɵdid"](7, 16384, null, 0, m.NgForm, [[8, null], [8, null]], null, null), g["ɵprd"](2048, null, m.ControlContainer, null, [m.NgForm]), g["ɵdid"](9, 16384, null, 0, m.NgControlStatusGroup, [m.ControlContainer], null, null), (n()(),
            g["ɵted"](-1, null, ["\n        "])), (n()(),
            g["ɵeld"](11, 0, null, null, 56, "div", [["class", "volume-wrapper layout-row"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵeld"](13, 0, null, null, 53, "div", [["class", "layout-column full-width"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](15, 0, null, null, 4, "div", [["class", "component-title layout-row between-pandats just-start"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵeld"](17, 0, null, null, 1, "div", [["class", "amount-title-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](18, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](21, 0, null, null, 20, "div", [["class", "layout-row form-group-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵeld"](23, 0, null, null, 9, "input", [["autocomplete", "off"], ["class", "full-width font14-pandats"], ["maxlength", "5"], ["name", "value"], ["type", "text"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("input" === t) {
                    e = !1 !== g["ɵnov"](n, 24)._handleInput(l.target.value) && e
                }
                if ("blur" === t) {
                    e = !1 !== g["ɵnov"](n, 24).onTouched() && e
                }
                if ("compositionstart" === t) {
                    e = !1 !== g["ɵnov"](n, 24)._compositionStart() && e
                }
                if ("compositionend" === t) {
                    e = !1 !== g["ɵnov"](n, 24)._compositionEnd(l.target.value) && e
                }
                if ("input" === t) {
                    e = !1 !== g["ɵnov"](n, 27).onInput(l.target.value) && e
                }
                if ("blur" === t) {
                    e = !1 !== g["ɵnov"](n, 27)._onTouched() && e
                }
                if ("ngModelChange" === t) {
                    e = !1 !== (s.investAmount.value = l) && e
                }
                if ("ngModelChange" === t) {
                    e = !1 !== s.updateAmount() && e
                }
                return e
            }, null, null)), g["ɵdid"](24, 16384, null, 0, m.DefaultValueAccessor, [g.Renderer2, g.ElementRef, [2, m.COMPOSITION_BUFFER_MODE]], null, null), g["ɵdid"](25, 540672, null, 0, m.MaxLengthValidator, [], {
                maxlength: [0, "maxlength"]
            }, null), g["ɵprd"](1024, null, m.NG_VALIDATORS, function(n) {
                return [n]
            }, [m.MaxLengthValidator]), g["ɵdid"](27, 540672, null, 0, T.MaskedInputDirective, [g.Renderer, g.ElementRef], {
                textMaskConfig: [0, "textMaskConfig"]
            }, null), g["ɵpod"](28, {
                mask: 0,
                guide: 1
            }), g["ɵprd"](1024, null, m.NG_VALUE_ACCESSOR, function(n, t) {
                return [n, t]
            }, [m.DefaultValueAccessor, T.MaskedInputDirective]), g["ɵdid"](30, 671744, null, 0, m.NgModel, [[2, m.ControlContainer], [2, m.NG_VALIDATORS], [8, null], [2, m.NG_VALUE_ACCESSOR]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), g["ɵprd"](2048, null, m.NgControl, null, [m.NgModel]), g["ɵdid"](32, 16384, null, 0, m.NgControlStatus, [m.NgControl], null, null), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵeld"](34, 0, null, null, 6, "custom-select", [["name", "amountStep"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("ngModelChange" === t) {
                    e = !1 !== (s.amountStep = l) && e
                }
                if ("ngModelChange" === t) {
                    e = !1 !== s.selectAmount() && e
                }
                return e
            }, I.a, I.b)), g["ɵdid"](35, 245760, null, 0, A.a, [g.ElementRef, g.NgZone], {
                items: [0, "items"]
            }, null), g["ɵprd"](1024, null, m.NG_VALUE_ACCESSOR, function(n) {
                return [n]
            }, [A.a]), g["ɵdid"](37, 671744, null, 0, m.NgModel, [[2, m.ControlContainer], [8, null], [8, null], [2, m.NG_VALUE_ACCESSOR]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), g["ɵprd"](2048, null, m.NgControl, null, [m.NgModel]), g["ɵdid"](39, 16384, null, 0, m.NgControlStatus, [m.NgControl], null, null), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](47, 0, null, null, 8, "div", [["class", "layout-row between-pandats title-val-pair"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵeld"](49, 0, null, null, 1, "div", [], null, null, null, null, null)), (n()(),
            g["ɵted"](50, null, ["", ":"])), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵeld"](52, 0, null, null, 2, "div", [], null, null, null, null, null)), (n()(),
            g["ɵted"](53, null, ["", ""])), g["ɵppd"](54, 3), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](57, 0, null, null, 8, "div", [["class", "layout-row between-pandats title-val-pair"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵeld"](59, 0, null, null, 1, "div", [], null, null, null, null, null)), (n()(),
            g["ɵted"](60, null, ["", ":"])), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵeld"](62, 0, null, null, 2, "div", [], null, null, null, null, null)), (n()(),
            g["ɵted"](63, null, ["", ""])), g["ɵppd"](64, 3), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵted"](-1, null, ["\n        "])), (n()(),
            g["ɵted"](-1, null, ["\n\n        "])), (n()(),
            g["ɵeld"](69, 0, null, null, 33, "div", [["class", "layout-row between-pandats btn-panel-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵeld"](71, 0, null, null, 14, "div", [["class", "btn-pandats sell-pandats layout-column"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.setAction("sell") && e
                }
                return e
            }, null, null)), g["ɵdid"](72, 278528, null, 0, S.NgClass, [g.IterableDiffers, g.KeyValueDiffers, g.ElementRef, g.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), g["ɵpod"](73, {
                "sell-active-pandats": 0
            }), (n()(),
            g["ɵted"](-1, null, ["\n\n                "])), (n()(),
            g["ɵeld"](75, 0, null, null, 6, "div", [["class", "layout-row full-width just-center content-pushed10"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵeld"](77, 0, null, null, 0, "i", [["class", "icon-pandats cmicon-sell_icon"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵeld"](79, 0, null, null, 1, "div", [["class", "btn-title-pandats font20-pandats line-height16-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](80, null, ["\n                        ", "\n                    "])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵand"](16777216, null, null, 1, null, e)), g["ɵdid"](84, 16384, null, 0, S.NgIf, [g.ViewContainerRef, g.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵeld"](87, 0, null, null, 14, "div", [["class", "btn-pandats buy-pandats layout-column"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.setAction("buy") && e
                }
                return e
            }, null, null)), g["ɵdid"](88, 278528, null, 0, S.NgClass, [g.IterableDiffers, g.KeyValueDiffers, g.ElementRef, g.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), g["ɵpod"](89, {
                "buy-active-pandats": 0
            }), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](91, 0, null, null, 6, "div", [["class", "layout-row full-width just-center content-pushed10"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵeld"](93, 0, null, null, 0, "i", [["class", "icon-pandats cmicon-buy_icon"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵeld"](95, 0, null, null, 1, "div", [["class", "btn-title-pandats font20-pandats line-height16-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](96, null, ["\n                        ", "\n                    "])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵand"](16777216, null, null, 1, null, s)), g["ɵdid"](100, 16384, null, 0, S.NgIf, [g.ViewContainerRef, g.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵted"](-1, null, ["\n        "])), (n()(),
            g["ɵted"](-1, null, ["\n\n        "])), (n()(),
            g["ɵeld"](104, 0, null, null, 4, "div", [["class", "tr-row-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵeld"](106, 0, null, null, 1, "button", [["class", "invest-pandats font20-pandats"]], [[8, "disabled", 0]], [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.onSubmit() && e
                }
                return e
            }, null, null)), (n()(),
            g["ɵted"](107, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n        "])), (n()(),
            g["ɵted"](-1, null, ["\n\n        "])), (n()(),
            g["ɵeld"](110, 0, null, null, 17, "div", [["class", "layout-row"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵeld"](112, 0, null, null, 14, "div", [["class", "rate-is-pandats layout-column full-width"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](114, 0, null, null, 8, "div", [["class", "advanced-checkbox rate-is layout-row"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵeld"](116, 0, null, null, 0, "input", [["autocomplete", "off"], ["id", "rate"], ["type", "checkbox"]], [[8, "disabled", 0], [8, "checked", 0]], [[null, "change"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("change" === t) {
                    e = !1 !== s.toggleReach() && e
                }
                return e
            }, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n\n                    "])), (n()(),
            g["ɵeld"](118, 0, null, null, 3, "label", [["class", "font12-pandats full-height line-height16-pandats"], ["for", "rate"]], null, null, null, null, null)), g["ɵdid"](119, 278528, null, 0, S.NgClass, [g.IterableDiffers, g.KeyValueDiffers, g.ElementRef, g.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), g["ɵpod"](120, {
                "inactive-pandats": 0
            }), (n()(),
            g["ɵted"](121, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵand"](16777216, null, null, 1, null, a)), g["ɵdid"](125, 16384, null, 0, S.NgIf, [g.ViewContainerRef, g.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵted"](-1, null, ["\n        "])), (n()(),
            g["ɵted"](-1, null, ["\n\n        "])), (n()(),
            g["ɵeld"](129, 0, null, null, 169, "div", [["class", "advanced-pandats font12-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵeld"](131, 0, null, null, 166, "div", [["class", "hidePanel-pandats layout-column"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](133, 0, null, null, 21, "div", [["class", "advanced-checkbox-wrapper layout-row content-pushed22"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵeld"](135, 0, null, null, 8, "div", [["class", "advanced-checkbox semi-width full-height"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                        "])), (n()(),
            g["ɵeld"](137, 0, null, null, 0, "input", [["autocomplete", "off"], ["id", "st-ls"], ["type", "checkbox"]], [[8, "checked", 0], [8, "disabled", 0]], [[null, "change"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("change" === t) {
                    e = !1 !== s.toggleStopLoss() && e
                }
                return e
            }, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                        "])), (n()(),
            g["ɵeld"](139, 0, null, null, 3, "label", [["class", "full-height line-height16-pandats"], ["for", "st-ls"]], null, null, null, null, null)), g["ɵdid"](140, 278528, null, 0, S.NgClass, [g.IterableDiffers, g.KeyValueDiffers, g.ElementRef, g.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), g["ɵpod"](141, {
                "inactive-pandats": 0
            }), (n()(),
            g["ɵted"](142, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵted"](-1, null, ["\n\n                    "])), (n()(),
            g["ɵeld"](145, 0, null, null, 8, "div", [["class", "advanced-checkbox semi-width full-height"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                        "])), (n()(),
            g["ɵeld"](147, 0, null, null, 0, "input", [["autocomplete", "off"], ["id", "tk-pr-pandats"], ["type", "checkbox"]], [[8, "checked", 0], [8, "disabled", 0]], [[null, "change"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("change" === t) {
                    e = !1 !== s.toggleTakeProfit() && e
                }
                return e
            }, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                        "])), (n()(),
            g["ɵeld"](149, 0, null, null, 3, "label", [["class", "tp-pandats full-height line-height16-pandats"], ["for", "tk-pr-pandats"]], null, null, null, null, null)), g["ɵdid"](150, 278528, null, 0, S.NgClass, [g.IterableDiffers, g.KeyValueDiffers, g.ElementRef, g.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), g["ɵpod"](151, {
                "inactive-pandats": 0
            }), (n()(),
            g["ɵted"](152, null, ["\n                            ", "\n                        "])), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](156, 0, null, null, 50, "div", [["class", "between-pandats layout-row content-pushed22"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵeld"](158, 0, null, null, 22, "div", [["class", "layout-column semi-width"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                        "])), (n()(),
            g["ɵeld"](160, 0, null, null, 19, "div", [["class", "layout-row content-pushed06"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                            "])), (n()(),
            g["ɵeld"](162, 0, null, null, 1, "div", [["class", "layout-column centered-content"]], null, null, null, null, null)), (n()(),
            g["ɵted"](163, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n                            "])), (n()(),
            g["ɵeld"](165, 0, null, null, 13, "div", [["class", "layout-column centered-content"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                                "])), (n()(),
            g["ɵeld"](167, 0, null, null, 10, "custom-input", [["maxlength", "7"], ["name", "stopLossPips"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "getFocus"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("ngModelChange" === t) {
                    e = !1 !== (s.stopLoss.pips.value = l) && e
                }
                if ("ngModelChange" === t) {
                    e = !1 !== s.updateStopLoss() && e
                }
                if ("getFocus" === t) {
                    e = !1 !== s.lockStopLoss("pips") && e
                }
                return e
            }, v.a, v.b)), g["ɵdid"](168, 540672, null, 0, m.MaxLengthValidator, [], {
                maxlength: [0, "maxlength"]
            }, null), g["ɵprd"](1024, null, m.NG_VALIDATORS, function(n) {
                return [n]
            }, [m.MaxLengthValidator]), g["ɵdid"](170, 770048, null, 0, y.a, [g.ElementRef], {
                disabled: [0, "disabled"],
                isClass: [1, "isClass"],
                buttons: [2, "buttons"],
                validator: [3, "validator"],
                maxlength: [4, "maxlength"]
            }, {
                getFocus: "getFocus"
            }), g["ɵpod"](171, {
                "locked-pandats": 0
            }), g["ɵpod"](172, {
                visible: 0
            }), g["ɵpod"](173, {
                mask: 0
            }), g["ɵprd"](1024, null, m.NG_VALUE_ACCESSOR, function(n) {
                return [n]
            }, [y.a]), g["ɵdid"](175, 671744, null, 0, m.NgModel, [[2, m.ControlContainer], [2, m.NG_VALIDATORS], [8, null], [2, m.NG_VALUE_ACCESSOR]], {
                name: [0, "name"],
                isDisabled: [1, "isDisabled"],
                model: [2, "model"]
            }, {
                update: "ngModelChange"
            }), g["ɵprd"](2048, null, m.NgControl, null, [m.NgModel]), g["ɵdid"](177, 16384, null, 0, m.NgControlStatus, [m.NgControl], null, null), (n()(),
            g["ɵted"](-1, null, ["\n                            "])), (n()(),
            g["ɵted"](-1, null, ["\n                        "])), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵeld"](182, 0, null, null, 23, "div", [["class", "layout-column semi-width"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                        "])), (n()(),
            g["ɵeld"](184, 0, null, null, 20, "div", [["class", "layout-row content-pushed06"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                            "])), (n()(),
            g["ɵeld"](186, 0, null, null, 1, "div", [["class", "layout-column centered-content"]], null, null, null, null, null)), (n()(),
            g["ɵted"](187, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n                            "])), (n()(),
            g["ɵeld"](189, 0, null, null, 14, "div", [["class", "layout-column centered-content"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                                "])), (n()(),
            g["ɵeld"](191, 0, null, null, 11, "custom-input", [["maxlength", "7"], ["name", "takeProfitPips"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "getFocus"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("ngModelChange" === t) {
                    e = !1 !== (s.takeProfit.pips.value = l) && e
                }
                if ("ngModelChange" === t) {
                    e = !1 !== s.updateTakeProfit() && e
                }
                if ("getFocus" === t) {
                    e = !1 !== s.lockTakeProfit("pips") && e
                }
                return e
            }, v.a, v.b)), g["ɵdid"](192, 540672, null, 0, m.MaxLengthValidator, [], {
                maxlength: [0, "maxlength"]
            }, null), g["ɵprd"](1024, null, m.NG_VALIDATORS, function(n) {
                return [n]
            }, [m.MaxLengthValidator]), g["ɵdid"](194, 770048, null, 0, y.a, [g.ElementRef], {
                disabled: [0, "disabled"],
                isClass: [1, "isClass"],
                buttons: [2, "buttons"],
                validator: [3, "validator"],
                maxlength: [4, "maxlength"]
            }, {
                getFocus: "getFocus"
            }), g["ɵpod"](195, {
                "locked-pandats": 0
            }), g["ɵpod"](196, {
                visible: 0
            }), g["ɵpod"](197, {
                mask: 0
            }), g["ɵprd"](1024, null, m.NG_VALUE_ACCESSOR, function(n) {
                return [n]
            }, [y.a]), g["ɵdid"](199, 671744, null, 0, m.NgModel, [[2, m.ControlContainer], [2, m.NG_VALIDATORS], [8, null], [2, m.NG_VALUE_ACCESSOR]], {
                name: [0, "name"],
                isDisabled: [1, "isDisabled"],
                model: [2, "model"]
            }, {
                update: "ngModelChange"
            }), g["ɵprd"](2048, null, m.NgControl, null, [m.NgModel]), g["ɵdid"](201, 16384, null, 0, m.NgControlStatus, [m.NgControl], null, null), (n()(),
            g["ɵted"](-1, null, ["\n                                "])), (n()(),
            g["ɵted"](-1, null, ["\n                            "])), (n()(),
            g["ɵted"](-1, null, ["\n                        "])), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](208, 0, null, null, 51, "div", [["class", "between-pandats layout-row content-pushed22"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵeld"](210, 0, null, null, 23, "div", [["class", "layout-column semi-width"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                        "])), (n()(),
            g["ɵeld"](212, 0, null, null, 20, "div", [["class", "layout-row content-pushed06"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                            "])), (n()(),
            g["ɵeld"](214, 0, null, null, 1, "div", [["class", "layout-column centered-content"]], null, null, null, null, null)), (n()(),
            g["ɵted"](215, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n                            "])), (n()(),
            g["ɵeld"](217, 0, null, null, 14, "div", [["class", "layout-column centered-content"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                                "])), (n()(),
            g["ɵeld"](219, 0, null, null, 11, "custom-input", [["maxlength", "8"], ["name", "stopLossRate"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "getFocus"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("ngModelChange" === t) {
                    e = !1 !== (s.stopLoss.rate.value = l) && e
                }
                if ("ngModelChange" === t) {
                    e = !1 !== s.updateStopLoss() && e
                }
                if ("getFocus" === t) {
                    e = !1 !== s.lockStopLoss("rate") && e
                }
                return e
            }, v.a, v.b)), g["ɵdid"](220, 540672, null, 0, m.MaxLengthValidator, [], {
                maxlength: [0, "maxlength"]
            }, null), g["ɵprd"](1024, null, m.NG_VALIDATORS, function(n) {
                return [n]
            }, [m.MaxLengthValidator]), g["ɵdid"](222, 770048, null, 0, y.a, [g.ElementRef], {
                disabled: [0, "disabled"],
                isClass: [1, "isClass"],
                buttons: [2, "buttons"],
                validator: [3, "validator"],
                maxlength: [4, "maxlength"]
            }, {
                getFocus: "getFocus"
            }), g["ɵpod"](223, {
                "locked-pandats": 0
            }), g["ɵpod"](224, {
                visible: 0
            }), g["ɵpod"](225, {
                mask: 0,
                limit: 1
            }), g["ɵprd"](1024, null, m.NG_VALUE_ACCESSOR, function(n) {
                return [n]
            }, [y.a]), g["ɵdid"](227, 671744, null, 0, m.NgModel, [[2, m.ControlContainer], [2, m.NG_VALIDATORS], [8, null], [2, m.NG_VALUE_ACCESSOR]], {
                name: [0, "name"],
                isDisabled: [1, "isDisabled"],
                model: [2, "model"]
            }, {
                update: "ngModelChange"
            }), g["ɵprd"](2048, null, m.NgControl, null, [m.NgModel]), g["ɵdid"](229, 16384, null, 0, m.NgControlStatus, [m.NgControl], null, null), (n()(),
            g["ɵted"](-1, null, ["\n                                "])), (n()(),
            g["ɵted"](-1, null, ["\n                            "])), (n()(),
            g["ɵted"](-1, null, ["\n                        "])), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵeld"](235, 0, null, null, 23, "div", [["class", "layout-column semi-width"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                        "])), (n()(),
            g["ɵeld"](237, 0, null, null, 20, "div", [["class", "layout-row content-pushed06"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                            "])), (n()(),
            g["ɵeld"](239, 0, null, null, 1, "div", [["class", "layout-column centered-content"]], null, null, null, null, null)), (n()(),
            g["ɵted"](240, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n                            "])), (n()(),
            g["ɵeld"](242, 0, null, null, 14, "div", [["class", "layout-column centered-content"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                                "])), (n()(),
            g["ɵeld"](244, 0, null, null, 11, "custom-input", [["maxlength", "8"], ["name", "takeProfitRate"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "getFocus"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("ngModelChange" === t) {
                    e = !1 !== (s.takeProfit.rate.value = l) && e
                }
                if ("ngModelChange" === t) {
                    e = !1 !== s.updateTakeProfit() && e
                }
                if ("getFocus" === t) {
                    e = !1 !== s.lockTakeProfit("rate") && e
                }
                return e
            }, v.a, v.b)), g["ɵdid"](245, 540672, null, 0, m.MaxLengthValidator, [], {
                maxlength: [0, "maxlength"]
            }, null), g["ɵprd"](1024, null, m.NG_VALIDATORS, function(n) {
                return [n]
            }, [m.MaxLengthValidator]), g["ɵdid"](247, 770048, null, 0, y.a, [g.ElementRef], {
                disabled: [0, "disabled"],
                isClass: [1, "isClass"],
                buttons: [2, "buttons"],
                validator: [3, "validator"],
                maxlength: [4, "maxlength"]
            }, {
                getFocus: "getFocus"
            }), g["ɵpod"](248, {
                "locked-pandats": 0
            }), g["ɵpod"](249, {
                visible: 0
            }), g["ɵpod"](250, {
                mask: 0,
                limit: 1
            }), g["ɵprd"](1024, null, m.NG_VALUE_ACCESSOR, function(n) {
                return [n]
            }, [y.a]), g["ɵdid"](252, 671744, null, 0, m.NgModel, [[2, m.ControlContainer], [2, m.NG_VALIDATORS], [8, null], [2, m.NG_VALUE_ACCESSOR]], {
                name: [0, "name"],
                isDisabled: [1, "isDisabled"],
                model: [2, "model"]
            }, {
                update: "ngModelChange"
            }), g["ɵprd"](2048, null, m.NgControl, null, [m.NgModel]), g["ɵdid"](254, 16384, null, 0, m.NgControlStatus, [m.NgControl], null, null), (n()(),
            g["ɵted"](-1, null, ["\n                                "])), (n()(),
            g["ɵted"](-1, null, ["\n                            "])), (n()(),
            g["ɵted"](-1, null, ["\n                        "])), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](261, 0, null, null, 35, "div", [["class", "between-pandats layout-row content-pushed22"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵeld"](263, 0, null, null, 15, "div", [["class", "layout-column semi-width"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                        "])), (n()(),
            g["ɵeld"](265, 0, null, null, 12, "div", [["class", "layout-row content-pushed06"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                            "])), (n()(),
            g["ɵeld"](267, 0, null, null, 1, "div", [["class", "layout-column centered-content"]], null, null, null, null, null)), (n()(),
            g["ɵted"](268, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n                            "])), (n()(),
            g["ɵeld"](270, 0, null, null, 6, "div", [["class", "layout-column centered-content full-width"]], null, null, null, null, null)), g["ɵdid"](271, 278528, null, 0, S.NgClass, [g.IterableDiffers, g.KeyValueDiffers, g.ElementRef, g.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), g["ɵpod"](272, {
                "disabled-pandats": 0
            }), (n()(),
            g["ɵted"](-1, null, ["\n                                "])), (n()(),
            g["ɵand"](16777216, null, null, 1, null, i)), g["ɵdid"](275, 16384, null, 0, S.NgIf, [g.ViewContainerRef, g.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            g["ɵted"](-1, null, ["\n                            "])), (n()(),
            g["ɵted"](-1, null, ["\n\n                        "])), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵeld"](280, 0, null, null, 15, "div", [["class", "layout-column semi-width"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                        "])), (n()(),
            g["ɵeld"](282, 0, null, null, 12, "div", [["class", "layout-row content-pushed06"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                            "])), (n()(),
            g["ɵeld"](284, 0, null, null, 1, "div", [["class", "layout-column centered-content"]], null, null, null, null, null)), (n()(),
            g["ɵted"](285, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n                            "])), (n()(),
            g["ɵeld"](287, 0, null, null, 6, "div", [["class", "layout-column centered-content full-width"]], null, null, null, null, null)), g["ɵdid"](288, 278528, null, 0, S.NgClass, [g.IterableDiffers, g.KeyValueDiffers, g.ElementRef, g.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), g["ɵpod"](289, {
                "disabled-pandats": 0
            }), (n()(),
            g["ɵted"](-1, null, ["\n                                "])), (n()(),
            g["ɵand"](16777216, null, null, 1, null, u)), g["ɵdid"](292, 16384, null, 0, S.NgIf, [g.ViewContainerRef, g.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            g["ɵted"](-1, null, ["\n                            "])), (n()(),
            g["ɵted"](-1, null, ["\n                        "])), (n()(),
            g["ɵted"](-1, null, ["\n                    "])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵted"](-1, null, ["\n        "])), (n()(),
            g["ɵted"](-1, null, ["\n        "])), (n()(),
            g["ɵted"](-1, null, ["\n\n        "])), (n()(),
            g["ɵand"](16777216, null, null, 1, null, o)), g["ɵdid"](302, 16384, null, 0, S.NgIf, [g.ViewContainerRef, g.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            g["ɵted"](-1, null, ["\n\n        "])), (n()(),
            g["ɵand"](16777216, null, null, 1, null, r)), g["ɵdid"](305, 16384, null, 0, S.NgIf, [g.ViewContainerRef, g.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            g["ɵted"](-1, null, ["\n"])), (n()(),
            g["ɵted"](-1, 0, ["\n"])), (n()(),
            g["ɵted"](-1, null, ["\n"])), (n()(),
            g["ɵted"](-1, null, ["\n"])), (n()(),
            g["ɵeld"](310, 0, null, null, 66, "modal", [], null, [[null, "onClose"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("onClose" === t) {
                    e = !1 !== s.closeRequotePopup() && e
                }
                return e
            }, L.a, L.b)), g["ɵdid"](311, 245760, null, 0, _.a, [], {
                state: [0, "state"],
                config: [1, "config"]
            }, {
                onClose: "onClose"
            }), (n()(),
            g["ɵted"](-1, null, ["\n\n    "])), (n()(),
            g["ɵeld"](313, 0, null, 0, 1, "header", [], null, null, null, null, null)), (n()(),
            g["ɵted"](314, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n\n    "])), (n()(),
            g["ɵeld"](316, 0, null, 1, 4, "div", [["class", "section-subtitle"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n        "])), (n()(),
            g["ɵand"](16777216, null, null, 1, null, d)), g["ɵdid"](319, 16384, null, 0, S.NgIf, [g.ViewContainerRef, g.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            g["ɵted"](-1, null, ["\n    "])), (n()(),
            g["ɵted"](-1, null, ["\n\n    "])), (n()(),
            g["ɵeld"](322, 0, null, 2, 35, "section", [], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n        "])), (n()(),
            g["ɵeld"](324, 0, null, null, 7, "div", [["class", "requote-text-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵeld"](326, 0, null, null, 1, "p", [], null, null, null, null, null)), (n()(),
            g["ɵted"](327, null, ["", "."])), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵeld"](329, 0, null, null, 1, "p", [], null, null, null, null, null)), (n()(),
            g["ɵted"](330, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n        "])), (n()(),
            g["ɵted"](-1, null, ["\n\n        "])), (n()(),
            g["ɵeld"](333, 0, null, null, 23, "div", [["class", "row-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵeld"](335, 0, null, null, 10, "div", [["class", "col-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵand"](16777216, null, null, 1, null, c)), g["ɵdid"](338, 16384, null, 0, S.NgIf, [g.ViewContainerRef, g.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵand"](16777216, null, null, 1, null, p)), g["ɵdid"](341, 16384, null, 0, S.NgIf, [g.ViewContainerRef, g.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](343, 0, null, null, 1, "div", [["class", "requote-title-price-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](344, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵeld"](347, 0, null, null, 8, "div", [["class", "col-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](349, 0, null, null, 2, "div", [["class", "requote-value-margin-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](350, null, ["", ""])), g["ɵppd"](351, 3), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](353, 0, null, null, 1, "div", [["class", "requote-title-margin-pandats"]], null, null, null, null, null)), (n()(),
            g["ɵted"](354, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵted"](-1, null, ["\n        "])), (n()(),
            g["ɵted"](-1, null, ["\n    "])), (n()(),
            g["ɵted"](-1, null, ["\n\n    "])), (n()(),
            g["ɵeld"](359, 0, null, 3, 16, "footer", [], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n        "])), (n()(),
            g["ɵeld"](361, 0, null, null, 13, "div", [["class", "layout-row content-pushed22"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵeld"](363, 0, null, null, 4, "div", [["class", "layout-column semi-width"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](365, 0, null, null, 1, "button", [["class", "forex-button-pandats short-button-pandats decent"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.closeRequotePopup() && e
                }
                return e
            }, null, null)), (n()(),
            g["ɵted"](366, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵeld"](369, 0, null, null, 4, "div", [["class", "layout-column semi-width"]], null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](371, 0, null, null, 1, "button", [["class", "forex-button-pandats short-button-pandats accent"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.onSubmit() && e
                }
                return e
            }, null, null)), (n()(),
            g["ɵted"](372, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵted"](-1, null, ["\n        "])), (n()(),
            g["ɵted"](-1, null, ["\n    "])), (n()(),
            g["ɵted"](-1, null, ["\n\n"])), (n()(),
            g["ɵted"](-1, null, ["\n"]))], function(n, t) {
                var l = t.component;
                n(t, 3, 0),
                n(t, 25, 0, "5"),
                n(t, 27, 0, n(t, 28, 0, l.validators.amount, !1)),
                n(t, 30, 0, "value", l.investAmount.value),
                n(t, 35, 0, l.amountSteps),
                n(t, 37, 0, "amountStep", l.amountStep),
                n(t, 72, 0, "btn-pandats sell-pandats layout-column", n(t, 73, 0, "sell" === l.action || "sell_limit" === l.action || "sell_stop" === l.action)),
                n(t, 84, 0, l.selectedAsset),
                n(t, 88, 0, "btn-pandats buy-pandats layout-column", n(t, 89, 0, "buy" === l.action || "buy_limit" === l.action || "buy_stop" === l.action)),
                n(t, 100, 0, l.selectedAsset),
                n(t, 119, 0, "font12-pandats full-height line-height16-pandats", n(t, 120, 0, !l.reach.checked)),
                n(t, 125, 0, l.reach.checked),
                n(t, 140, 0, "full-height line-height16-pandats", n(t, 141, 0, !l.stopLoss.checked)),
                n(t, 150, 0, "tp-pandats full-height line-height16-pandats", n(t, 151, 0, !l.takeProfit.checked)),
                n(t, 168, 0, "7"),
                n(t, 170, 0, !l.stopLoss.checked, n(t, 171, 0, l.stopLoss.pips.lock), n(t, 172, 0, !0), n(t, 173, 0, "number"), "7"),
                n(t, 175, 0, "stopLossPips", !l.stopLoss.checked, l.stopLoss.pips.value),
                n(t, 192, 0, "7"),
                n(t, 194, 0, !l.takeProfit.checked, n(t, 195, 0, l.takeProfit.pips.lock), n(t, 196, 0, !0), n(t, 197, 0, "number"), "7"),
                n(t, 199, 0, "takeProfitPips", !l.takeProfit.checked, l.takeProfit.pips.value),
                n(t, 220, 0, "8"),
                n(t, 222, 0, !l.stopLoss.checked, n(t, 223, 0, l.stopLoss.rate.lock), n(t, 224, 0, !0), n(t, 225, 0, "rate", l.selectedAsset.digits), "8"),
                n(t, 227, 0, "stopLossRate", !l.stopLoss.checked, l.stopLoss.rate.value),
                n(t, 245, 0, "8"),
                n(t, 247, 0, !l.takeProfit.checked, n(t, 248, 0, l.takeProfit.rate.lock), n(t, 249, 0, !0), n(t, 250, 0, "rate", l.selectedAsset.digits), "8"),
                n(t, 252, 0, "takeProfitRate", !l.takeProfit.checked, l.takeProfit.rate.value),
                n(t, 271, 0, "layout-column centered-content full-width", n(t, 272, 0, !l.stopLoss.checked)),
                n(t, 275, 0, l.stopLoss.checked),
                n(t, 288, 0, "layout-column centered-content full-width", n(t, 289, 0, !l.takeProfit.checked)),
                n(t, 292, 0, l.takeProfit.checked),
                n(t, 302, 0, l.popup.errorCode && "134" == l.popup.errorCode),
                n(t, 305, 0, l.popup.show),
                n(t, 311, 0, l.requoteState, l.requotePopupConfig),
                n(t, 319, 0, l.tradeToSend),
                n(t, 338, 0, "sell" === l.action || "sell_limit" === l.action || "sell_stop" === l.action),
                n(t, 341, 0, "buy" === l.action || "buy_limit" === l.action || "buy_stop" === l.action)
            }, function(n, t) {
                var l = t.component;
                n(t, 5, 0, g["ɵnov"](t, 9).ngClassUntouched, g["ɵnov"](t, 9).ngClassTouched, g["ɵnov"](t, 9).ngClassPristine, g["ɵnov"](t, 9).ngClassDirty, g["ɵnov"](t, 9).ngClassValid, g["ɵnov"](t, 9).ngClassInvalid, g["ɵnov"](t, 9).ngClassPending),
                n(t, 18, 0, l.selectedAsset.outputName),
                n(t, 23, 0, g["ɵnov"](t, 25).maxlength ? g["ɵnov"](t, 25).maxlength : null, g["ɵnov"](t, 32).ngClassUntouched, g["ɵnov"](t, 32).ngClassTouched, g["ɵnov"](t, 32).ngClassPristine, g["ɵnov"](t, 32).ngClassDirty, g["ɵnov"](t, 32).ngClassValid, g["ɵnov"](t, 32).ngClassInvalid, g["ɵnov"](t, 32).ngClassPending),
                n(t, 34, 0, g["ɵnov"](t, 39).ngClassUntouched, g["ɵnov"](t, 39).ngClassTouched, g["ɵnov"](t, 39).ngClassPristine, g["ɵnov"](t, 39).ngClassDirty, g["ɵnov"](t, 39).ngClassValid, g["ɵnov"](t, 39).ngClassInvalid, g["ɵnov"](t, 39).ngClassPending),
                n(t, 50, 0, l.translation.pipsValue),
                n(t, 53, 0, g["ɵunv"](t, 53, 0, n(t, 54, 0, g["ɵnov"](t, 0), l.pipValue(), l.user.currency, !0))),
                n(t, 60, 0, l.translation.requiredMargin),
                n(t, 63, 0, g["ɵunv"](t, 63, 0, n(t, 64, 0, g["ɵnov"](t, 0), l.requiredMargin(), l.user.currency, !0))),
                n(t, 80, 0, l.translation.sell),
                n(t, 96, 0, l.translation.buy),
                n(t, 106, 0, !l.validate()),
                n(t, 107, 0, l.translation.trade),
                n(t, 116, 0, !l.action, l.reach.checked),
                n(t, 121, 0, l.translation.open_trade_when),
                n(t, 137, 0, l.stopLoss.checked, !l.action || l.user.amf),
                n(t, 142, 0, l.translation.stop_Loss),
                n(t, 147, 0, l.takeProfit.checked, !l.action),
                n(t, 152, 0, l.translation.takeProfit),
                n(t, 163, 0, l.translation.pips),
                n(t, 167, 0, g["ɵnov"](t, 168).maxlength ? g["ɵnov"](t, 168).maxlength : null, g["ɵnov"](t, 177).ngClassUntouched, g["ɵnov"](t, 177).ngClassTouched, g["ɵnov"](t, 177).ngClassPristine, g["ɵnov"](t, 177).ngClassDirty, g["ɵnov"](t, 177).ngClassValid, g["ɵnov"](t, 177).ngClassInvalid, g["ɵnov"](t, 177).ngClassPending),
                n(t, 187, 0, l.translation.pips),
                n(t, 191, 0, g["ɵnov"](t, 192).maxlength ? g["ɵnov"](t, 192).maxlength : null, g["ɵnov"](t, 201).ngClassUntouched, g["ɵnov"](t, 201).ngClassTouched, g["ɵnov"](t, 201).ngClassPristine, g["ɵnov"](t, 201).ngClassDirty, g["ɵnov"](t, 201).ngClassValid, g["ɵnov"](t, 201).ngClassInvalid, g["ɵnov"](t, 201).ngClassPending),
                n(t, 215, 0, l.translation.price),
                n(t, 219, 0, g["ɵnov"](t, 220).maxlength ? g["ɵnov"](t, 220).maxlength : null, g["ɵnov"](t, 229).ngClassUntouched, g["ɵnov"](t, 229).ngClassTouched, g["ɵnov"](t, 229).ngClassPristine, g["ɵnov"](t, 229).ngClassDirty, g["ɵnov"](t, 229).ngClassValid, g["ɵnov"](t, 229).ngClassInvalid, g["ɵnov"](t, 229).ngClassPending),
                n(t, 240, 0, l.translation.price),
                n(t, 244, 0, g["ɵnov"](t, 245).maxlength ? g["ɵnov"](t, 245).maxlength : null, g["ɵnov"](t, 254).ngClassUntouched, g["ɵnov"](t, 254).ngClassTouched, g["ɵnov"](t, 254).ngClassPristine, g["ɵnov"](t, 254).ngClassDirty, g["ɵnov"](t, 254).ngClassValid, g["ɵnov"](t, 254).ngClassInvalid, g["ɵnov"](t, 254).ngClassPending),
                n(t, 268, 0, l.translation.value),
                n(t, 285, 0, l.translation.value),
                n(t, 314, 0, l.translation.open_position_requote),
                n(t, 327, 0, l.translation.price_changed),
                n(t, 330, 0, l.translation.want_to_open),
                n(t, 344, 0, l.translation.current_rate),
                n(t, 350, 0, g["ɵunv"](t, 350, 0, n(t, 351, 0, g["ɵnov"](t, 0), l.requiredMargin(), l.user.currency, !0))),
                n(t, 354, 0, l.translation.requiredMargin),
                n(t, 366, 0, l.translation.cancel),
                n(t, 372, 0, l.translation.accept_changes)
            })
        }
        function h(n) {
            return g["ɵvid"](0, [(n()(),
            g["ɵeld"](0, 0, null, null, 1, "invest", [], null, null, null, f, M)), g["ɵdid"](1, 245760, null, 0, P.a, [g.NgZone, x.a, D.a, N.a], null, null)], function(n, t) {
                n(t, 1, 0)
            }, null)
        }
        var g = l(2)
          , v = l(199)
          , m = l(5)
          , y = l(103)
          , b = l(200)
          , C = l(105)
          , S = l(4)
          , k = l(78)
          , w = l(55)
          , R = (l.n(w),
        l(18))
          , P = (l.n(R),
        l(144))
          , T = l(31)
          , I = (l.n(T),
        l(72))
          , A = l(56)
          , L = l(98)
          , _ = l(75)
          , x = l(46)
          , D = l(45)
          , N = l(22);
        l.d(t, "b", function() {
            return M
        }),
        t.a = f;
        var O = []
          , M = g["ɵcrt"]({
            encapsulation: 2,
            styles: O,
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
                                height: "*",
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
                            timings: 200
                        },
                        options: null
                    }],
                    options: {}
                }]
            }
        });
        g["ɵccf"]("invest", P.a, h, {}, {}, [])
    },
    514: function(n, t, l) {
        "use strict";
        function e(n) {
            return b["ɵvid"](0, [(n()(),
            b["ɵeld"](0, 0, null, null, 3, "th", [["class", "th-pandats"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.sortBy(n.context.$implicit) && e
                }
                return e
            }, null, null)), b["ɵdid"](1, 278528, null, 0, C.NgClass, [b.IterableDiffers, b.KeyValueDiffers, b.ElementRef, b.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), b["ɵpad"](2, 2), (n()(),
            b["ɵted"](3, null, ["\n                ", "\n            "]))], function(n, t) {
                n(t, 1, 0, "th-pandats", n(t, 2, 0, "td-" + t.context.$implicit.width + "-pandats", "title-" + t.context.$implicit.id))
            }, function(n, t) {
                n(t, 3, 0, t.component.translation[t.context.$implicit.id])
            })
        }
        function s(n) {
            return b["ɵvid"](0, [(n()(),
            b["ɵeld"](0, 0, null, null, 6, "tr", [["class", "trade-item-pandats"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.selectAsset(n.context.$implicit) && e
                }
                return e
            }, null, null)), b["ɵdid"](1, 278528, null, 0, C.NgClass, [b.IterableDiffers, b.KeyValueDiffers, b.ElementRef, b.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), b["ɵpod"](2, {
                "active-pandats": 0
            }), (n()(),
            b["ɵted"](-1, null, ["\n                        "])), (n()(),
            b["ɵeld"](4, 0, null, null, 1, "open-trade", [], null, null, null, m, _)), b["ɵdid"](5, 245760, null, 0, S.b, [b.NgZone, b.ChangeDetectorRef], {
                trade: [0, "trade"],
                type: [1, "type"]
            }, null), (n()(),
            b["ɵted"](-1, null, ["\n                    "]))], function(n, t) {
                var l = t.component;
                n(t, 1, 0, "trade-item-pandats", n(t, 2, 0, l.activeTrade === t.context.$implicit)),
                n(t, 5, 0, t.context.$implicit, l.type)
            }, null)
        }
        function a(n) {
            return b["ɵvid"](2, [b["ɵqud"](402653184, 1, {
                ps: 0
            }), (n()(),
            b["ɵeld"](1, 0, null, null, 32, "div", [["class", "tab-wrapper-pandats"]], null, null, null, null, null)), (n()(),
            b["ɵted"](-1, null, ["\n    "])), (n()(),
            b["ɵeld"](3, 0, null, null, 10, "table", [["class", "table-headers-pandats clearfix-pandats"]], null, null, null, null, null)), (n()(),
            b["ɵted"](-1, null, ["\n        "])), (n()(),
            b["ɵeld"](5, 0, null, null, 7, "thead", [], null, null, null, null, null)), (n()(),
            b["ɵted"](-1, null, ["\n        "])), (n()(),
            b["ɵeld"](7, 0, null, null, 4, "tr", [], null, null, null, null, null)), (n()(),
            b["ɵted"](-1, null, ["\n            "])), (n()(),
            b["ɵand"](16777216, null, null, 1, null, e)), b["ɵdid"](10, 802816, null, 0, C.NgForOf, [b.ViewContainerRef, b.TemplateRef, b.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            b["ɵted"](-1, null, ["\n        "])), (n()(),
            b["ɵted"](-1, null, ["\n        "])), (n()(),
            b["ɵted"](-1, null, ["\n    "])), (n()(),
            b["ɵted"](-1, null, ["\n\n    "])), (n()(),
            b["ɵeld"](15, 0, null, null, 17, "div", [["class", "table-items-pandats clearfix-pandats"]], null, null, null, null, null)), (n()(),
            b["ɵted"](-1, null, ["\n        "])), (n()(),
            b["ɵeld"](17, 0, null, null, 14, "perfect-scrollbar", [], null, null, null, k.a, k.b)), b["ɵdid"](18, 4636672, [[1, 4]], 0, w.PerfectScrollbarComponent, [b.ElementRef, [2, R.PerfectScrollbarConfig], b.NgZone], null, null), (n()(),
            b["ɵted"](-1, 0, ["\n            "])), (n()(),
            b["ɵeld"](20, 0, null, 0, 10, "div", [["class", "tbody-wrap-pandats"]], null, null, null, null, null)), (n()(),
            b["ɵted"](-1, null, ["\n                "])), (n()(),
            b["ɵeld"](22, 0, null, null, 7, "table", [["class", "clearfix-pandats"]], null, null, null, null, null)), (n()(),
            b["ɵted"](-1, null, ["\n                    "])), (n()(),
            b["ɵeld"](24, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (n()(),
            b["ɵted"](-1, null, ["\n                    "])), (n()(),
            b["ɵand"](16777216, null, null, 1, null, s)), b["ɵdid"](27, 802816, null, 0, C.NgForOf, [b.ViewContainerRef, b.TemplateRef, b.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            b["ɵted"](-1, null, ["\n                    "])), (n()(),
            b["ɵted"](-1, null, ["\n                "])), (n()(),
            b["ɵted"](-1, null, ["\n            "])), (n()(),
            b["ɵted"](-1, 0, ["\n        "])), (n()(),
            b["ɵted"](-1, null, ["\n    "])), (n()(),
            b["ɵted"](-1, null, ["\n\n"])), (n()(),
            b["ɵted"](-1, null, ["\n"]))], function(n, t) {
                var l = t.component;
                n(t, 10, 0, l.tradeTitles),
                n(t, 18, 0),
                n(t, 27, 0, l.trades)
            }, null)
        }
        function i(n) {
            return b["ɵvid"](0, [(n()(),
            b["ɵeld"](0, 0, null, null, 1, "open-trades", [], null, null, null, a, A)), b["ɵdid"](1, 245760, null, 0, S.a, [b.NgZone, P.a, b.ChangeDetectorRef], null, null)], function(n, t) {
                n(t, 1, 0)
            }, null)
        }
        function u(n) {
            return b["ɵvid"](0, [(n()(),
            b["ɵeld"](0, 0, null, null, 3, "div", [["class", "direction-pandats layout-column centered-content full-height buy-pandats"]], null, null, null, null, null)), (n()(),
            b["ɵted"](-1, null, ["\n        "])), (n()(),
            b["ɵeld"](2, 0, null, null, 0, "i", [["class", "icon-pandats cmicon-buy_icon"]], null, null, null, null, null)), (n()(),
            b["ɵted"](-1, null, ["\n    "]))], null, null)
        }
        function o(n) {
            return b["ɵvid"](0, [(n()(),
            b["ɵeld"](0, 0, null, null, 3, "div", [["class", "direction-pandats layout-column centered-content full-height sell-pandats"]], null, null, null, null, null)), (n()(),
            b["ɵted"](-1, null, ["\n        "])), (n()(),
            b["ɵeld"](2, 0, null, null, 0, "i", [["class", "icon-pandats cmicon-sell_icon"]], null, null, null, null, null)), (n()(),
            b["ɵted"](-1, null, ["\n    "]))], null, null)
        }
        function r(n) {
            return b["ɵvid"](0, [(n()(),
            b["ɵeld"](0, 0, null, null, 3, "td", [["class", "td-7-pandats price-pandats"]], null, null, null, null, null)), b["ɵdid"](1, 278528, null, 0, C.NgClass, [b.IterableDiffers, b.KeyValueDiffers, b.ElementRef, b.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), (n()(),
            b["ɵted"](2, null, ["\n    ", "\n"])), b["ɵppd"](3, 2)], function(n, t) {
                n(t, 1, 0, "td-7-pandats price-pandats", t.component.trade.asset.bidDirection)
            }, function(n, t) {
                var l = t.component;
                n(t, 2, 0, b["ɵunv"](t, 2, 0, n(t, 3, 0, b["ɵnov"](t.parent, 1), l.trade.closePrice(), l.trade.asset.digitsFormat)))
            })
        }
        function d(n) {
            return b["ɵvid"](0, [(n()(),
            b["ɵeld"](0, 0, null, null, 2, "td", [["class", "td-7-pandats price-pandats"]], null, null, null, null, null)), (n()(),
            b["ɵted"](1, null, ["\n    ", "\n"])), b["ɵppd"](2, 2)], null, function(n, t) {
                var l = t.component;
                n(t, 1, 0, b["ɵunv"](t, 1, 0, n(t, 2, 0, b["ɵnov"](t.parent, 1), "0", l.trade.asset.digitsFormat)))
            })
        }
        function c(n) {
            return b["ɵvid"](0, [(n()(),
            b["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (n()(),
            b["ɵted"](1, null, ["", ""])), b["ɵppd"](2, 2)], null, function(n, t) {
                var l = t.component;
                n(t, 1, 0, b["ɵunv"](t, 1, 0, n(t, 2, 0, b["ɵnov"](t.parent, 1), l.trade.stopLoss, l.trade.asset.digitsFormat)))
            })
        }
        function p(n) {
            return b["ɵvid"](0, [(n()(),
            b["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(),
            b["ɵted"](1, null, ["", ""]))], null, function(n, t) {
                n(t, 1, 0, t.component.translation.sl)
            })
        }
        function f(n) {
            return b["ɵvid"](0, [(n()(),
            b["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (n()(),
            b["ɵted"](1, null, ["", ""])), b["ɵppd"](2, 2)], null, function(n, t) {
                var l = t.component;
                n(t, 1, 0, b["ɵunv"](t, 1, 0, n(t, 2, 0, b["ɵnov"](t.parent, 1), l.trade.takeProfit, l.trade.asset.digitsFormat)))
            })
        }
        function h(n) {
            return b["ɵvid"](0, [(n()(),
            b["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(),
            b["ɵted"](1, null, ["", ""]))], null, function(n, t) {
                n(t, 1, 0, t.component.translation.tp)
            })
        }
        function g(n) {
            return b["ɵvid"](0, [(n()(),
            b["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(),
            b["ɵted"](1, null, ["", ""]))], null, function(n, t) {
                n(t, 1, 0, t.component.translation.close)
            })
        }
        function v(n) {
            return b["ɵvid"](0, [(n()(),
            b["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(),
            b["ɵted"](1, null, ["", ""]))], null, function(n, t) {
                n(t, 1, 0, t.component.translation.delete)
            })
        }
        function m(n) {
            return b["ɵvid"](2, [b["ɵpid"](0, T.a, []), b["ɵpid"](0, C.DecimalPipe, [b.LOCALE_ID]), b["ɵpid"](0, C.CurrencyPipe, [b.LOCALE_ID]), (n()(),
            b["ɵeld"](3, 0, null, null, 1, "td", [["class", "td-7-pandats"]], null, null, null, null, null)), (n()(),
            b["ɵted"](4, null, ["\n    #", "\n"])), (n()(),
            b["ɵted"](-1, null, ["\n"])), (n()(),
            b["ɵeld"](6, 0, null, null, 2, "td", [["class", "td-10-pandats"]], null, null, null, null, null)), (n()(),
            b["ɵted"](7, null, ["\n    ", "\n"])), b["ɵppd"](8, 3), (n()(),
            b["ɵted"](-1, null, ["\n"])), (n()(),
            b["ɵeld"](10, 0, null, null, 1, "td", [["class", "td-7-pandats"]], null, null, null, null, null)), (n()(),
            b["ɵted"](11, null, ["\n    ", "\n"])), (n()(),
            b["ɵted"](-1, null, ["\n\n"])), (n()(),
            b["ɵeld"](13, 0, null, null, 7, "td", [["class", "td-5-pandats full-height"]], null, null, null, null, null)), (n()(),
            b["ɵted"](-1, null, ["\n    "])), (n()(),
            b["ɵand"](16777216, null, null, 1, null, u)), b["ɵdid"](16, 16384, null, 0, C.NgIf, [b.ViewContainerRef, b.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            b["ɵted"](-1, null, ["\n    "])), (n()(),
            b["ɵand"](16777216, null, null, 1, null, o)), b["ɵdid"](19, 16384, null, 0, C.NgIf, [b.ViewContainerRef, b.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            b["ɵted"](-1, null, ["\n"])), (n()(),
            b["ɵted"](-1, null, ["\n\n"])), (n()(),
            b["ɵeld"](22, 0, null, null, 1, "td", [["class", "td-7-pandats"]], null, null, null, null, null)), (n()(),
            b["ɵted"](23, null, ["\n    ", "\n"])), (n()(),
            b["ɵted"](-1, null, ["\n"])), (n()(),
            b["ɵeld"](25, 0, null, null, 2, "td", [["class", "td-7-pandats"]], null, null, null, null, null)), (n()(),
            b["ɵted"](26, null, ["\n    ", "\n"])), b["ɵppd"](27, 2), (n()(),
            b["ɵted"](-1, null, ["\n\n"])), (n()(),
            b["ɵand"](16777216, null, null, 1, null, r)), b["ɵdid"](30, 16384, null, 0, C.NgIf, [b.ViewContainerRef, b.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            b["ɵted"](-1, null, ["\n"])), (n()(),
            b["ɵand"](16777216, null, null, 1, null, d)), b["ɵdid"](33, 16384, null, 0, C.NgIf, [b.ViewContainerRef, b.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            b["ɵted"](-1, null, ["\n\n"])), (n()(),
            b["ɵeld"](35, 0, null, null, 10, "td", [["class", "td-10-pandats"]], null, null, null, null, null)), (n()(),
            b["ɵted"](-1, null, ["\n    "])), (n()(),
            b["ɵeld"](37, 0, null, null, 7, "button", [["class", "btn-tabs-pandats"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.updateSlTp(s.trade, "stopLoss", l) && e
                }
                return e
            }, null, null)), (n()(),
            b["ɵted"](-1, null, ["\n        "])), (n()(),
            b["ɵand"](16777216, null, null, 1, null, c)), b["ɵdid"](40, 16384, null, 0, C.NgIf, [b.ViewContainerRef, b.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            b["ɵted"](-1, null, ["\n        "])), (n()(),
            b["ɵand"](16777216, null, null, 1, null, p)), b["ɵdid"](43, 16384, null, 0, C.NgIf, [b.ViewContainerRef, b.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            b["ɵted"](-1, null, ["\n    "])), (n()(),
            b["ɵted"](-1, null, ["\n"])), (n()(),
            b["ɵted"](-1, null, ["\n"])), (n()(),
            b["ɵeld"](47, 0, null, null, 10, "td", [["class", "td-10-pandats"]], null, null, null, null, null)), (n()(),
            b["ɵted"](-1, null, ["\n    "])), (n()(),
            b["ɵeld"](49, 0, null, null, 7, "button", [["class", "btn-tabs-pandats"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.updateSlTp(s.trade, "takeProfit", l) && e
                }
                return e
            }, null, null)), (n()(),
            b["ɵted"](-1, null, ["\n        "])), (n()(),
            b["ɵand"](16777216, null, null, 1, null, f)), b["ɵdid"](52, 16384, null, 0, C.NgIf, [b.ViewContainerRef, b.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            b["ɵted"](-1, null, ["\n        "])), (n()(),
            b["ɵand"](16777216, null, null, 1, null, h)), b["ɵdid"](55, 16384, null, 0, C.NgIf, [b.ViewContainerRef, b.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            b["ɵted"](-1, null, ["\n    "])), (n()(),
            b["ɵted"](-1, null, ["\n"])), (n()(),
            b["ɵted"](-1, null, ["\n"])), (n()(),
            b["ɵeld"](59, 0, null, null, 2, "td", [["class", "td-7-pandats"]], null, null, null, null, null)), (n()(),
            b["ɵted"](60, null, ["\n    ", "\n"])), b["ɵppd"](61, 3), (n()(),
            b["ɵted"](-1, null, ["\n"])), (n()(),
            b["ɵeld"](63, 0, null, null, 2, "td", [["class", "td-5-pandats"]], null, null, null, null, null)), (n()(),
            b["ɵted"](64, null, ["\n    ", "\n"])), b["ɵppd"](65, 3), (n()(),
            b["ɵted"](-1, null, ["\n"])), (n()(),
            b["ɵeld"](67, 0, null, null, 4, "td", [["class", "td-8-pandats"]], null, null, null, null, null)), b["ɵdid"](68, 278528, null, 0, C.NgClass, [b.IterableDiffers, b.KeyValueDiffers, b.ElementRef, b.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), b["ɵpod"](69, {
                "up-pandats": 0,
                "down-pandats": 1
            }), (n()(),
            b["ɵted"](70, null, ["\n    ", "\n"])), b["ɵppd"](71, 3), (n()(),
            b["ɵted"](-1, null, ["\n"])), (n()(),
            b["ɵeld"](73, 0, null, null, 10, "td", [["class", "td-10-pandats"]], null, null, null, null, null)), (n()(),
            b["ɵted"](-1, null, ["\n    "])), (n()(),
            b["ɵeld"](75, 0, null, null, 7, "button", [["class", "btn-tabs-pandats"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.closeTrade(s.trade, l) && e
                }
                return e
            }, null, null)), (n()(),
            b["ɵted"](-1, null, ["\n        "])), (n()(),
            b["ɵand"](16777216, null, null, 1, null, g)), b["ɵdid"](78, 16384, null, 0, C.NgIf, [b.ViewContainerRef, b.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            b["ɵted"](-1, null, ["\n        "])), (n()(),
            b["ɵand"](16777216, null, null, 1, null, v)), b["ɵdid"](81, 16384, null, 0, C.NgIf, [b.ViewContainerRef, b.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            b["ɵted"](-1, null, ["\n    "])), (n()(),
            b["ɵted"](-1, null, ["\n"])), (n()(),
            b["ɵted"](-1, null, ["\n"]))], function(n, t) {
                var l = t.component;
                n(t, 16, 0, "buy" === l.trade.action || "buy_stop" === l.trade.action || "buy_limit" === l.trade.action),
                n(t, 19, 0, "sell" === l.trade.action || "sell_stop" === l.trade.action || "sell_limit" === l.trade.action),
                n(t, 30, 0, !l.type),
                n(t, 33, 0, "pending" === l.type),
                n(t, 40, 0, l.trade.stopLoss),
                n(t, 43, 0, !l.trade.stopLoss),
                n(t, 52, 0, l.trade.takeProfit),
                n(t, 55, 0, !l.trade.takeProfit),
                n(t, 68, 0, "td-8-pandats", n(t, 69, 0, l.trade.profit > 0, l.trade.profit < 0)),
                n(t, 78, 0, !l.type),
                n(t, 81, 0, "pending" === l.type)
            }, function(n, t) {
                var l = t.component;
                n(t, 4, 0, l.trade.orderId),
                n(t, 7, 0, b["ɵunv"](t, 7, 0, n(t, 8, 0, b["ɵnov"](t, 0), l.trade.openTime, "DD/MM/YYYY HH:mm:ss", 60 * l.timezone - 60 * l.serverTimeService.serverTimezone))),
                n(t, 11, 0, l.trade.outputName),
                n(t, 23, 0, l.trade.lots),
                n(t, 26, 0, b["ɵunv"](t, 26, 0, n(t, 27, 0, b["ɵnov"](t, 1), l.trade.openPrice, l.trade.asset.digitsFormat))),
                n(t, 60, 0, b["ɵunv"](t, 60, 0, n(t, 61, 0, b["ɵnov"](t, 2), l.trade.commission, l.user.currency, !0))),
                n(t, 64, 0, b["ɵunv"](t, 64, 0, n(t, 65, 0, b["ɵnov"](t, 2), l.trade.swap, l.user.currency, !0))),
                n(t, 70, 0, b["ɵunv"](t, 70, 0, n(t, 71, 0, b["ɵnov"](t, 2), l.trade.profit, l.user.currency, !0)))
            })
        }
        function y(n) {
            return b["ɵvid"](0, [(n()(),
            b["ɵeld"](0, 0, null, null, 1, "open-trade", [], null, null, null, m, _)), b["ɵdid"](1, 245760, null, 0, S.b, [b.NgZone, b.ChangeDetectorRef], null, null)], function(n, t) {
                n(t, 1, 0)
            }, null)
        }
        var b = l(2)
          , C = l(4)
          , S = l(145)
          , k = l(78)
          , w = l(55)
          , R = (l.n(w),
        l(18))
          , P = (l.n(R),
        l(47))
          , T = l(104);
        l.d(t, "b", function() {
            return A
        }),
        t.a = a;
        var I = []
          , A = b["ɵcrt"]({
            encapsulation: 2,
            styles: I,
            data: {}
        })
          , L = (b["ɵccf"]("open-trades", S.a, i, {
            type: "type"
        }, {}, []),
        [])
          , _ = b["ɵcrt"]({
            encapsulation: 2,
            styles: L,
            data: {}
        });
        b["ɵccf"]("open-trade", S.b, y, {
            trade: "trade",
            type: "type"
        }, {}, [])
    },
    515: function(n, t, l) {
        "use strict";
        function e(n) {
            return d["ɵvid"](0, [(n()(),
            d["ɵeld"](0, 0, null, null, 2, "div", [["class", "full-width loss-profit-value centered-content line-height20-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](1, null, ["\n                                    ", "\n                                "])), d["ɵppd"](2, 3)], null, function(n, t) {
                var l = t.component;
                n(t, 1, 0, d["ɵunv"](t, 1, 0, n(t, 2, 0, d["ɵnov"](t.parent.parent, 0), l.calcLossValue(), l.user.currency, !0)))
            })
        }
        function s(n) {
            return d["ɵvid"](0, [(n()(),
            d["ɵeld"](0, 0, null, null, 2, "div", [["class", "full-width loss-profit-value centered-content line-height20-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](1, null, ["\n                                    ", "\n                                "])), d["ɵppd"](2, 3)], null, function(n, t) {
                var l = t.component;
                n(t, 1, 0, d["ɵunv"](t, 1, 0, n(t, 2, 0, d["ɵnov"](t.parent.parent, 0), l.calcProfitValue(), l.user.currency, !0)))
            })
        }
        function a(n) {
            return d["ɵvid"](0, [(n()(),
            d["ɵeld"](0, 0, null, null, 1, "div", [["class", "tr-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](1, null, ["\n                    ", ":\n                "]))], null, function(n, t) {
                n(t, 1, 0, t.component.translation.open_trade_when_rate_reach)
            })
        }
        function i(n) {
            return d["ɵvid"](0, [(n()(),
            d["ɵeld"](0, 0, null, null, 13, "div", [["class", "tr-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵeld"](2, 0, null, null, 10, "div", [["class", "td-row-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵeld"](4, 0, null, null, 7, "input", [["name", "rateReach"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("input" === t) {
                    e = !1 !== d["ɵnov"](n, 5)._handleInput(l.target.value) && e
                }
                if ("blur" === t) {
                    e = !1 !== d["ɵnov"](n, 5).onTouched() && e
                }
                if ("compositionstart" === t) {
                    e = !1 !== d["ɵnov"](n, 5)._compositionStart() && e
                }
                if ("compositionend" === t) {
                    e = !1 !== d["ɵnov"](n, 5)._compositionEnd(l.target.value) && e
                }
                if ("input" === t) {
                    e = !1 !== d["ɵnov"](n, 6).onInput(l.target.value) && e
                }
                if ("blur" === t) {
                    e = !1 !== d["ɵnov"](n, 6)._onTouched() && e
                }
                if ("ngModelChange" === t) {
                    e = !1 !== (s.reach.value = l) && e
                }
                if ("ngModelChange" === t) {
                    e = !1 !== s.updateReach(l) && e
                }
                return e
            }, null, null)), d["ɵdid"](5, 16384, null, 0, c.DefaultValueAccessor, [d.Renderer2, d.ElementRef, [2, c.COMPOSITION_BUFFER_MODE]], null, null), d["ɵdid"](6, 540672, null, 0, p.MaskedInputDirective, [d.Renderer, d.ElementRef], {
                textMaskConfig: [0, "textMaskConfig"]
            }, null), d["ɵpod"](7, {
                mask: 0,
                guide: 1
            }), d["ɵprd"](1024, null, c.NG_VALUE_ACCESSOR, function(n, t) {
                return [n, t]
            }, [c.DefaultValueAccessor, p.MaskedInputDirective]), d["ɵdid"](9, 671744, null, 0, c.NgModel, [[8, null], [8, null], [8, null], [2, c.NG_VALUE_ACCESSOR]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), d["ɵprd"](2048, null, c.NgControl, null, [c.NgModel]), d["ɵdid"](11, 16384, null, 0, c.NgControlStatus, [c.NgControl], null, null), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵted"](-1, null, ["\n                "]))], function(n, t) {
                var l = t.component;
                n(t, 6, 0, n(t, 7, 0, l.validators.rate, !1)),
                n(t, 9, 0, "rateReach", l.reach.value)
            }, function(n, t) {
                n(t, 4, 0, d["ɵnov"](t, 11).ngClassUntouched, d["ɵnov"](t, 11).ngClassTouched, d["ɵnov"](t, 11).ngClassPristine, d["ɵnov"](t, 11).ngClassDirty, d["ɵnov"](t, 11).ngClassValid, d["ɵnov"](t, 11).ngClassInvalid, d["ɵnov"](t, 11).ngClassPending)
            })
        }
        function u(n) {
            return d["ɵvid"](0, [(n()(),
            d["ɵeld"](0, 0, null, null, 275, "div", [], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n    "])), (n()(),
            d["ɵeld"](2, 0, null, null, 0, "div", [["class", "backdrop-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n    "])), (n()(),
            d["ɵeld"](4, 0, null, null, 270, "div", [["class", "popup-wrapper-pandats sltp-popup-wrapper helvetica-neue-pandats"]], [[24, "@fadeInOut", 0]], null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n        "])), (n()(),
            d["ɵeld"](6, 0, null, null, 1, "spinner", [], null, null, null, f.a, f.b)), d["ɵdid"](7, 114688, null, 0, h.a, [], {
                isShow: [0, "isShow"]
            }, null), (n()(),
            d["ɵted"](-1, null, ["\n        "])), (n()(),
            d["ɵeld"](9, 0, null, null, 1, "toast", [], null, null, null, g.a, g.b)), d["ɵdid"](10, 704512, null, 0, v.a, [], {
                content: [0, "content"],
                status: [1, "status"]
            }, null), (n()(),
            d["ɵted"](-1, null, ["\n        "])), (n()(),
            d["ɵeld"](12, 0, null, null, 12, "div", [["class", "title-popup-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n            "])), (n()(),
            d["ɵeld"](14, 0, null, null, 4, "div", [["class", "title-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](15, null, ["\n                ", "\n                "])), (n()(),
            d["ɵeld"](16, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(),
            d["ɵted"](17, null, ["#", ""])), (n()(),
            d["ɵted"](-1, null, ["\n            "])), (n()(),
            d["ɵted"](-1, null, ["\n            "])), (n()(),
            d["ɵeld"](20, 0, null, null, 3, "div", [["class", "close-popup-pandats"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.close() && e
                }
                return e
            }, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                "])), (n()(),
            d["ɵeld"](22, 0, null, null, 0, "i", [["class", "icon-pandats cmicon-cancel"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n            "])), (n()(),
            d["ɵted"](-1, null, ["\n        "])), (n()(),
            d["ɵted"](-1, null, ["\n\n        "])), (n()(),
            d["ɵeld"](26, 0, null, null, 238, "div", [["class", "stop-take-content-wrapper"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n            "])), (n()(),
            d["ɵeld"](28, 0, null, null, 235, "div", [["class", "content-popup-pandats font12-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                "])), (n()(),
            d["ɵeld"](30, 0, null, null, 46, "div", [["class", "position-info-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵeld"](32, 0, null, null, 7, "div", [], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵeld"](34, 0, null, null, 1, "div", [["class", "position-info-title-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](35, null, ["", ""])), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵeld"](37, 0, null, null, 1, "div", [["class", "position-info-value-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](38, null, ["", ""])), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵeld"](41, 0, null, null, 7, "div", [], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵeld"](43, 0, null, null, 1, "div", [["class", "position-info-title-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](44, null, ["", ""])), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵeld"](46, 0, null, null, 1, "div", [["class", "position-info-value-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](47, null, ["", ""])), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵeld"](50, 0, null, null, 7, "div", [], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵeld"](52, 0, null, null, 1, "div", [["class", "position-info-title-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](53, null, ["", ""])), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵeld"](55, 0, null, null, 1, "div", [["class", "position-info-value-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](56, null, ["", " / ", ""])), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵeld"](59, 0, null, null, 7, "div", [], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵeld"](61, 0, null, null, 1, "div", [["class", "position-info-title-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](62, null, ["", ""])), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵeld"](64, 0, null, null, 1, "div", [["class", "position-info-value-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](65, null, ["", ""])), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵeld"](68, 0, null, null, 7, "div", [], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵeld"](70, 0, null, null, 1, "div", [["class", "position-info-title-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](71, null, ["", ""])), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵeld"](73, 0, null, null, 1, "div", [["class", "position-info-value-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](74, null, ["", ""])), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵted"](-1, null, ["\n                "])), (n()(),
            d["ɵted"](-1, null, ["\n                "])), (n()(),
            d["ɵeld"](78, 0, null, null, 6, "div", [["class", "sltk-chart-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                   "])), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵeld"](81, 0, null, null, 2, "chart", [], null, null, null, m.a, m.b)), d["ɵdid"](82, 4964352, null, 0, y.a, [b.a, C.a], {
                asset: [0, "asset"],
                chartConfig: [1, "chartConfig"],
                instanceId: [2, "instanceId"]
            }, null), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵted"](-1, null, ["\n                "])), (n()(),
            d["ɵted"](-1, null, ["\n\n                "])), (n()(),
            d["ɵeld"](86, 0, null, null, 27, "div", [["class", "layout-row content-pushed22 sltp-checkbox-container"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵeld"](88, 0, null, null, 11, "div", [["class", "advanced-checkbox layout-column semi-width"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵeld"](90, 0, null, null, 8, "div", [["class", "layout-row content-pushed06 full-height"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                            "])), (n()(),
            d["ɵeld"](92, 0, null, null, 0, "input", [["id", "update-st-ls"], ["type", "checkbox"]], [[8, "checked", 0], [8, "disabled", 0]], [[null, "change"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("change" === t) {
                    e = !1 !== s.toggleStopLoss() && e
                }
                return e
            }, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                            "])), (n()(),
            d["ɵeld"](94, 0, null, null, 3, "label", [["class", "full-height line-height24-pandats"], ["for", "update-st-ls"]], null, null, null, null, null)), d["ɵdid"](95, 278528, null, 0, S.NgClass, [d.IterableDiffers, d.KeyValueDiffers, d.ElementRef, d.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), d["ɵpod"](96, {
                "inactive-pandats": 0
            }), (n()(),
            d["ɵted"](97, null, ["", ""])), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵted"](-1, null, ["\n\n                    "])), (n()(),
            d["ɵeld"](101, 0, null, null, 11, "div", [["class", "advanced-checkbox layout-column semi-width"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵeld"](103, 0, null, null, 8, "div", [["class", "layout-row content-pushed06 full-height"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                            "])), (n()(),
            d["ɵeld"](105, 0, null, null, 0, "input", [["id", "update-tk-pr"], ["type", "checkbox"]], [[8, "checked", 0]], [[null, "change"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("change" === t) {
                    e = !1 !== s.toggleTakeProfit() && e
                }
                return e
            }, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                            "])), (n()(),
            d["ɵeld"](107, 0, null, null, 3, "label", [["class", "tp-pandats full-height line-height24-pandats"], ["for", "update-tk-pr"]], null, null, null, null, null)), d["ɵdid"](108, 278528, null, 0, S.NgClass, [d.IterableDiffers, d.KeyValueDiffers, d.ElementRef, d.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), d["ɵpod"](109, {
                "inactive-pandats": 0
            }), (n()(),
            d["ɵted"](110, null, ["\n                                ", "\n                            "])), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵted"](-1, null, ["\n                "])), (n()(),
            d["ɵted"](-1, null, ["\n\n                "])), (n()(),
            d["ɵeld"](115, 0, null, null, 51, "div", [["class", "between-pandats layout-row content-pushed22"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵeld"](117, 0, null, null, 23, "div", [["class", "layout-column semi-width"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵeld"](119, 0, null, null, 20, "div", [["class", "layout-row content-pushed06"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                            "])), (n()(),
            d["ɵeld"](121, 0, null, null, 1, "div", [["class", "layout-column centered-content"]], null, null, null, null, null)), (n()(),
            d["ɵted"](122, null, ["", ""])), (n()(),
            d["ɵted"](-1, null, ["\n                            "])), (n()(),
            d["ɵeld"](124, 0, null, null, 14, "div", [["class", "layout-column centered-content"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                                "])), (n()(),
            d["ɵeld"](126, 0, null, null, 11, "custom-input", [["autocomplete", "off"], ["maxlength", "7"], ["name", "stopLossPips"], ["type", "text"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "getFocus"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("ngModelChange" === t) {
                    e = !1 !== (s.stopLoss.pips.value = l) && e
                }
                if ("ngModelChange" === t) {
                    e = !1 !== s.updateStopLoss() && e
                }
                if ("getFocus" === t) {
                    e = !1 !== s.lockStopLoss("pips") && e
                }
                return e
            }, k.a, k.b)), d["ɵdid"](127, 540672, null, 0, c.MaxLengthValidator, [], {
                maxlength: [0, "maxlength"]
            }, null), d["ɵprd"](1024, null, c.NG_VALIDATORS, function(n) {
                return [n]
            }, [c.MaxLengthValidator]), d["ɵdid"](129, 770048, null, 0, w.a, [d.ElementRef], {
                disabled: [0, "disabled"],
                autocomplete: [1, "autocomplete"],
                isClass: [2, "isClass"],
                buttons: [3, "buttons"],
                validator: [4, "validator"],
                maxlength: [5, "maxlength"]
            }, {
                getFocus: "getFocus"
            }), d["ɵpod"](130, {
                "locked-pandats": 0
            }), d["ɵpod"](131, {
                visible: 0
            }), d["ɵpod"](132, {
                mask: 0
            }), d["ɵprd"](1024, null, c.NG_VALUE_ACCESSOR, function(n) {
                return [n]
            }, [w.a]), d["ɵdid"](134, 671744, null, 0, c.NgModel, [[8, null], [2, c.NG_VALIDATORS], [8, null], [2, c.NG_VALUE_ACCESSOR]], {
                name: [0, "name"],
                isDisabled: [1, "isDisabled"],
                model: [2, "model"]
            }, {
                update: "ngModelChange"
            }), d["ɵprd"](2048, null, c.NgControl, null, [c.NgModel]), d["ɵdid"](136, 16384, null, 0, c.NgControlStatus, [c.NgControl], null, null), (n()(),
            d["ɵted"](-1, null, ["\n                                "])), (n()(),
            d["ɵted"](-1, null, ["\n                            "])), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵeld"](142, 0, null, null, 23, "div", [["class", "layout-column semi-width"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵeld"](144, 0, null, null, 20, "div", [["class", "layout-row content-pushed06"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                            "])), (n()(),
            d["ɵeld"](146, 0, null, null, 1, "div", [["class", "layout-column centered-content"]], null, null, null, null, null)), (n()(),
            d["ɵted"](147, null, ["", ""])), (n()(),
            d["ɵted"](-1, null, ["\n                            "])), (n()(),
            d["ɵeld"](149, 0, null, null, 14, "div", [["class", "layout-column centered-content"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                                "])), (n()(),
            d["ɵeld"](151, 0, null, null, 11, "custom-input", [["autocomplete", "off"], ["maxlength", "7"], ["name", "takeProfitPips"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "getFocus"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("ngModelChange" === t) {
                    e = !1 !== (s.takeProfit.pips.value = l) && e
                }
                if ("ngModelChange" === t) {
                    e = !1 !== s.updateTakeProfit() && e
                }
                if ("getFocus" === t) {
                    e = !1 !== s.lockTakeProfit("pips") && e
                }
                return e
            }, k.a, k.b)), d["ɵdid"](152, 540672, null, 0, c.MaxLengthValidator, [], {
                maxlength: [0, "maxlength"]
            }, null), d["ɵprd"](1024, null, c.NG_VALIDATORS, function(n) {
                return [n]
            }, [c.MaxLengthValidator]), d["ɵdid"](154, 770048, null, 0, w.a, [d.ElementRef], {
                disabled: [0, "disabled"],
                autocomplete: [1, "autocomplete"],
                isClass: [2, "isClass"],
                buttons: [3, "buttons"],
                validator: [4, "validator"],
                maxlength: [5, "maxlength"]
            }, {
                getFocus: "getFocus"
            }), d["ɵpod"](155, {
                "locked-pandats": 0
            }), d["ɵpod"](156, {
                visible: 0
            }), d["ɵpod"](157, {
                mask: 0
            }), d["ɵprd"](1024, null, c.NG_VALUE_ACCESSOR, function(n) {
                return [n]
            }, [w.a]), d["ɵdid"](159, 671744, null, 0, c.NgModel, [[8, null], [2, c.NG_VALIDATORS], [8, null], [2, c.NG_VALUE_ACCESSOR]], {
                name: [0, "name"],
                isDisabled: [1, "isDisabled"],
                model: [2, "model"]
            }, {
                update: "ngModelChange"
            }), d["ɵprd"](2048, null, c.NgControl, null, [c.NgModel]), d["ɵdid"](161, 16384, null, 0, c.NgControlStatus, [c.NgControl], null, null), (n()(),
            d["ɵted"](-1, null, ["\n                                "])), (n()(),
            d["ɵted"](-1, null, ["\n                            "])), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵted"](-1, null, ["\n                "])), (n()(),
            d["ɵted"](-1, null, ["\n                "])), (n()(),
            d["ɵeld"](168, 0, null, null, 51, "div", [["class", "between-pandats layout-row content-pushed22"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵeld"](170, 0, null, null, 23, "div", [["class", "layout-column semi-width"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵeld"](172, 0, null, null, 20, "div", [["class", "layout-row content-pushed06"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                            "])), (n()(),
            d["ɵeld"](174, 0, null, null, 1, "div", [["class", "layout-column centered-content"]], null, null, null, null, null)), (n()(),
            d["ɵted"](175, null, ["", ""])), (n()(),
            d["ɵted"](-1, null, ["\n                            "])), (n()(),
            d["ɵeld"](177, 0, null, null, 14, "div", [["class", "layout-column centered-content"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                                "])), (n()(),
            d["ɵeld"](179, 0, null, null, 11, "custom-input", [["maxlength", "8"], ["name", "stopLossPips"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "getFocus"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("ngModelChange" === t) {
                    e = !1 !== (s.stopLoss.rate.value = l) && e
                }
                if ("ngModelChange" === t) {
                    e = !1 !== s.updateStopLoss() && e
                }
                if ("getFocus" === t) {
                    e = !1 !== s.lockStopLoss("rate") && e
                }
                return e
            }, k.a, k.b)), d["ɵdid"](180, 540672, null, 0, c.MaxLengthValidator, [], {
                maxlength: [0, "maxlength"]
            }, null), d["ɵprd"](1024, null, c.NG_VALIDATORS, function(n) {
                return [n]
            }, [c.MaxLengthValidator]), d["ɵdid"](182, 770048, null, 0, w.a, [d.ElementRef], {
                disabled: [0, "disabled"],
                isClass: [1, "isClass"],
                buttons: [2, "buttons"],
                validator: [3, "validator"],
                maxlength: [4, "maxlength"]
            }, {
                getFocus: "getFocus"
            }), d["ɵpod"](183, {
                "locked-pandats": 0
            }), d["ɵpod"](184, {
                visible: 0
            }), d["ɵpod"](185, {
                mask: 0,
                limit: 1
            }), d["ɵprd"](1024, null, c.NG_VALUE_ACCESSOR, function(n) {
                return [n]
            }, [w.a]), d["ɵdid"](187, 671744, null, 0, c.NgModel, [[8, null], [2, c.NG_VALIDATORS], [8, null], [2, c.NG_VALUE_ACCESSOR]], {
                name: [0, "name"],
                isDisabled: [1, "isDisabled"],
                model: [2, "model"]
            }, {
                update: "ngModelChange"
            }), d["ɵprd"](2048, null, c.NgControl, null, [c.NgModel]), d["ɵdid"](189, 16384, null, 0, c.NgControlStatus, [c.NgControl], null, null), (n()(),
            d["ɵted"](-1, null, ["\n                                "])), (n()(),
            d["ɵted"](-1, null, ["\n                            "])), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵeld"](195, 0, null, null, 23, "div", [["class", "layout-column semi-width"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵeld"](197, 0, null, null, 20, "div", [["class", "layout-row content-pushed06"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                            "])), (n()(),
            d["ɵeld"](199, 0, null, null, 1, "div", [["class", "layout-column centered-content"]], null, null, null, null, null)), (n()(),
            d["ɵted"](200, null, ["", ""])), (n()(),
            d["ɵted"](-1, null, ["\n                            "])), (n()(),
            d["ɵeld"](202, 0, null, null, 14, "div", [["class", "layout-column centered-content"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                                "])), (n()(),
            d["ɵeld"](204, 0, null, null, 11, "custom-input", [["maxlength", "8"], ["name", "takeProfitPips"]], [[1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "getFocus"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("ngModelChange" === t) {
                    e = !1 !== (s.takeProfit.rate.value = l) && e
                }
                if ("ngModelChange" === t) {
                    e = !1 !== s.updateTakeProfit() && e
                }
                if ("getFocus" === t) {
                    e = !1 !== s.lockTakeProfit("rate") && e
                }
                return e
            }, k.a, k.b)), d["ɵdid"](205, 540672, null, 0, c.MaxLengthValidator, [], {
                maxlength: [0, "maxlength"]
            }, null), d["ɵprd"](1024, null, c.NG_VALIDATORS, function(n) {
                return [n]
            }, [c.MaxLengthValidator]), d["ɵdid"](207, 770048, null, 0, w.a, [d.ElementRef], {
                disabled: [0, "disabled"],
                isClass: [1, "isClass"],
                buttons: [2, "buttons"],
                validator: [3, "validator"],
                maxlength: [4, "maxlength"]
            }, {
                getFocus: "getFocus"
            }), d["ɵpod"](208, {
                "locked-pandats": 0
            }), d["ɵpod"](209, {
                visible: 0
            }), d["ɵpod"](210, {
                mask: 0,
                limit: 1
            }), d["ɵprd"](1024, null, c.NG_VALUE_ACCESSOR, function(n) {
                return [n]
            }, [w.a]), d["ɵdid"](212, 671744, null, 0, c.NgModel, [[8, null], [2, c.NG_VALIDATORS], [8, null], [2, c.NG_VALUE_ACCESSOR]], {
                name: [0, "name"],
                isDisabled: [1, "isDisabled"],
                model: [2, "model"]
            }, {
                update: "ngModelChange"
            }), d["ɵprd"](2048, null, c.NgControl, null, [c.NgModel]), d["ɵdid"](214, 16384, null, 0, c.NgControlStatus, [c.NgControl], null, null), (n()(),
            d["ɵted"](-1, null, ["\n                                "])), (n()(),
            d["ɵted"](-1, null, ["\n                            "])), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵted"](-1, null, ["\n                "])), (n()(),
            d["ɵted"](-1, null, ["\n                "])), (n()(),
            d["ɵeld"](221, 0, null, null, 35, "div", [["class", "between-pandats layout-row content-pushed22"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵeld"](223, 0, null, null, 15, "div", [["class", "layout-column semi-width"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵeld"](225, 0, null, null, 12, "div", [["class", "layout-row content-pushed06"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                            "])), (n()(),
            d["ɵeld"](227, 0, null, null, 1, "div", [["class", "layout-column centered-content"]], null, null, null, null, null)), (n()(),
            d["ɵted"](228, null, ["", ""])), (n()(),
            d["ɵted"](-1, null, ["\n                            "])), (n()(),
            d["ɵeld"](230, 0, null, null, 6, "div", [["class", "layout-column centered-content"]], null, null, null, null, null)), d["ɵdid"](231, 278528, null, 0, S.NgClass, [d.IterableDiffers, d.KeyValueDiffers, d.ElementRef, d.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), d["ɵpod"](232, {
                "disabled-pandats": 0
            }), (n()(),
            d["ɵted"](-1, null, ["\n                                "])), (n()(),
            d["ɵand"](16777216, null, null, 1, null, e)), d["ɵdid"](235, 16384, null, 0, S.NgIf, [d.ViewContainerRef, d.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            d["ɵted"](-1, null, ["\n                            "])), (n()(),
            d["ɵted"](-1, null, ["\n\n                        "])), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵeld"](240, 0, null, null, 15, "div", [["class", "layout-column semi-width"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵeld"](242, 0, null, null, 12, "div", [["class", "layout-row content-pushed06"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                            "])), (n()(),
            d["ɵeld"](244, 0, null, null, 1, "div", [["class", "layout-column centered-content"]], null, null, null, null, null)), (n()(),
            d["ɵted"](245, null, ["", ""])), (n()(),
            d["ɵted"](-1, null, ["\n                            "])), (n()(),
            d["ɵeld"](247, 0, null, null, 6, "div", [["class", "layout-column centered-content"]], null, null, null, null, null)), d["ɵdid"](248, 278528, null, 0, S.NgClass, [d.IterableDiffers, d.KeyValueDiffers, d.ElementRef, d.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), d["ɵpod"](249, {
                "disabled-pandats": 0
            }), (n()(),
            d["ɵted"](-1, null, ["\n                                "])), (n()(),
            d["ɵand"](16777216, null, null, 1, null, s)), d["ɵdid"](252, 16384, null, 0, S.NgIf, [d.ViewContainerRef, d.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            d["ɵted"](-1, null, ["\n                            "])), (n()(),
            d["ɵted"](-1, null, ["\n                        "])), (n()(),
            d["ɵted"](-1, null, ["\n                    "])), (n()(),
            d["ɵted"](-1, null, ["\n                "])), (n()(),
            d["ɵted"](-1, null, ["\n\n                "])), (n()(),
            d["ɵand"](16777216, null, null, 1, null, a)), d["ɵdid"](259, 16384, null, 0, S.NgIf, [d.ViewContainerRef, d.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            d["ɵted"](-1, null, ["\n                "])), (n()(),
            d["ɵand"](16777216, null, null, 1, null, i)), d["ɵdid"](262, 16384, null, 0, S.NgIf, [d.ViewContainerRef, d.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            d["ɵted"](-1, null, ["\n            "])), (n()(),
            d["ɵted"](-1, null, ["\n        "])), (n()(),
            d["ɵted"](-1, null, ["\n\n        "])), (n()(),
            d["ɵeld"](266, 0, null, null, 7, "div", [["class", "footer-popup-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n            "])), (n()(),
            d["ɵeld"](268, 0, null, null, 4, "div", [["class", "tr-row-pandats"]], null, null, null, null, null)), (n()(),
            d["ɵted"](-1, null, ["\n                "])), (n()(),
            d["ɵeld"](270, 0, null, null, 1, "button", [["class", "invest-pandats forex-button-pandats accent"]], [[8, "disabled", 0]], [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.onSubmit() && e
                }
                return e
            }, null, null)), (n()(),
            d["ɵted"](271, null, ["\n                        ", "\n                "])), (n()(),
            d["ɵted"](-1, null, ["\n            "])), (n()(),
            d["ɵted"](-1, null, ["\n        "])), (n()(),
            d["ɵted"](-1, null, ["\n\n    "])), (n()(),
            d["ɵted"](-1, null, ["\n\n"]))], function(n, t) {
                var l = t.component;
                n(t, 7, 0, l.showSpinner),
                n(t, 10, 0, l.toastContent, l.toastStatus),
                n(t, 82, 0, l.trade.asset, l.chartConfigPanda, l.instanceId),
                n(t, 95, 0, "full-height line-height24-pandats", n(t, 96, 0, !l.stopLoss.checked)),
                n(t, 108, 0, "tp-pandats full-height line-height24-pandats", n(t, 109, 0, !l.takeProfit.checked)),
                n(t, 127, 0, "7"),
                n(t, 129, 0, !l.stopLoss.checked, "off", n(t, 130, 0, l.stopLoss.pips.lock), n(t, 131, 0, !0), n(t, 132, 0, "number"), "7"),
                n(t, 134, 0, "stopLossPips", !l.stopLoss.checked, l.stopLoss.pips.value),
                n(t, 152, 0, "7"),
                n(t, 154, 0, !l.takeProfit.checked, "off", n(t, 155, 0, l.takeProfit.pips.lock), n(t, 156, 0, !0), n(t, 157, 0, "number"), "7"),
                n(t, 159, 0, "takeProfitPips", !l.takeProfit.checked, l.takeProfit.pips.value),
                n(t, 180, 0, "8"),
                n(t, 182, 0, !l.stopLoss.checked, n(t, 183, 0, l.stopLoss.rate.lock), n(t, 184, 0, !0), n(t, 185, 0, "rate", l.selectedAsset.digits), "8"),
                n(t, 187, 0, "stopLossPips", !l.stopLoss.checked, l.stopLoss.rate.value),
                n(t, 205, 0, "8"),
                n(t, 207, 0, !l.takeProfit.checked, n(t, 208, 0, l.takeProfit.rate.lock), n(t, 209, 0, !0), n(t, 210, 0, "rate", l.selectedAsset.digits), "8"),
                n(t, 212, 0, "takeProfitPips", !l.takeProfit.checked, l.takeProfit.rate.value),
                n(t, 231, 0, "layout-column centered-content", n(t, 232, 0, !l.stopLoss.checked)),
                n(t, 235, 0, l.stopLoss.checked),
                n(t, 248, 0, "layout-column centered-content", n(t, 249, 0, !l.takeProfit.checked)),
                n(t, 252, 0, l.takeProfit.checked),
                n(t, 259, 0, l.trade.actionCode > 1),
                n(t, 262, 0, l.trade.actionCode > 1)
            }, function(n, t) {
                var l = t.component;
                n(t, 4, 0, void 0),
                n(t, 15, 0, l.translation.st_tp),
                n(t, 17, 0, l.trade.orderId),
                n(t, 35, 0, l.translation.asset_name),
                n(t, 38, 0, l.trade.outputName),
                n(t, 44, 0, l.translation.direction),
                n(t, 47, 0, l.translation.actionsId[l.trade.action]),
                n(t, 53, 0, l.translation.hight_low),
                n(t, 56, 0, l.trade.asset.high, l.trade.asset.low),
                n(t, 62, 0, l.translation.lots),
                n(t, 65, 0, l.trade.lots),
                n(t, 71, 0, l.translation.openPrice),
                n(t, 74, 0, l.trade.openPrice),
                n(t, 92, 0, l.stopLoss.checked, l.user.amf),
                n(t, 97, 0, l.translation.set_stop_loss),
                n(t, 105, 0, l.takeProfit.checked),
                n(t, 110, 0, l.translation.set_take_profit),
                n(t, 122, 0, l.translation.pips),
                n(t, 126, 0, d["ɵnov"](t, 127).maxlength ? d["ɵnov"](t, 127).maxlength : null, d["ɵnov"](t, 136).ngClassUntouched, d["ɵnov"](t, 136).ngClassTouched, d["ɵnov"](t, 136).ngClassPristine, d["ɵnov"](t, 136).ngClassDirty, d["ɵnov"](t, 136).ngClassValid, d["ɵnov"](t, 136).ngClassInvalid, d["ɵnov"](t, 136).ngClassPending),
                n(t, 147, 0, l.translation.pips),
                n(t, 151, 0, d["ɵnov"](t, 152).maxlength ? d["ɵnov"](t, 152).maxlength : null, d["ɵnov"](t, 161).ngClassUntouched, d["ɵnov"](t, 161).ngClassTouched, d["ɵnov"](t, 161).ngClassPristine, d["ɵnov"](t, 161).ngClassDirty, d["ɵnov"](t, 161).ngClassValid, d["ɵnov"](t, 161).ngClassInvalid, d["ɵnov"](t, 161).ngClassPending),
                n(t, 175, 0, l.translation.price),
                n(t, 179, 0, d["ɵnov"](t, 180).maxlength ? d["ɵnov"](t, 180).maxlength : null, d["ɵnov"](t, 189).ngClassUntouched, d["ɵnov"](t, 189).ngClassTouched, d["ɵnov"](t, 189).ngClassPristine, d["ɵnov"](t, 189).ngClassDirty, d["ɵnov"](t, 189).ngClassValid, d["ɵnov"](t, 189).ngClassInvalid, d["ɵnov"](t, 189).ngClassPending),
                n(t, 200, 0, l.translation.price),
                n(t, 204, 0, d["ɵnov"](t, 205).maxlength ? d["ɵnov"](t, 205).maxlength : null, d["ɵnov"](t, 214).ngClassUntouched, d["ɵnov"](t, 214).ngClassTouched, d["ɵnov"](t, 214).ngClassPristine, d["ɵnov"](t, 214).ngClassDirty, d["ɵnov"](t, 214).ngClassValid, d["ɵnov"](t, 214).ngClassInvalid, d["ɵnov"](t, 214).ngClassPending),
                n(t, 228, 0, l.translation.value),
                n(t, 245, 0, l.translation.value),
                n(t, 270, 0, !l.validate()),
                n(t, 271, 0, l.translation.submit_changes)
            })
        }
        function o(n) {
            return d["ɵvid"](0, [d["ɵpid"](0, S.CurrencyPipe, [d.LOCALE_ID]), (n()(),
            d["ɵand"](16777216, null, null, 1, null, u)), d["ɵdid"](2, 16384, null, 0, S.NgIf, [d.ViewContainerRef, d.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            d["ɵted"](-1, null, ["\n"]))], function(n, t) {
                n(t, 2, 0, t.component.isShow)
            }, null)
        }
        function r(n) {
            return d["ɵvid"](0, [(n()(),
            d["ɵeld"](0, 0, null, null, 1, "sltp-popup", [], null, null, null, o, L)), d["ɵdid"](1, 245760, null, 0, R.a, [P.a, T.a, b.a, S.DecimalPipe, I.a, d.NgZone], null, null)], function(n, t) {
                n(t, 1, 0)
            }, null)
        }
        var d = l(2)
          , c = l(5)
          , p = l(31)
          , f = (l.n(p),
        l(73))
          , h = l(57)
          , g = l(130)
          , v = l(79)
          , m = l(198)
          , y = l(101)
          , b = l(22)
          , C = l(74)
          , S = l(4)
          , k = l(199)
          , w = l(103)
          , R = l(146)
          , P = l(46)
          , T = l(45)
          , I = l(14);
        l.d(t, "b", function() {
            return L
        }),
        t.a = o;
        var A = []
          , L = d["ɵcrt"]({
            encapsulation: 2,
            styles: A,
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
        d["ɵccf"]("sltp-popup", R.a, r, {}, {}, [])
    },
    516: function(n, t, l) {
        "use strict";
        function e(n) {
            return f["ɵvid"](0, [(n()(),
            f["ɵeld"](0, 0, null, null, 1, "div", [["class", "layout-column"]], null, null, null, null, null)), (n()(),
            f["ɵted"](1, null, ["\n                (", ")\n            "]))], null, function(n, t) {
                n(t, 1, 0, t.parent.context.$implicit.count)
            })
        }
        function s(n) {
            return f["ɵvid"](0, [(n()(),
            f["ɵeld"](0, 0, null, null, 20, "div", [["class", "tab-dropdown-pandats layout-column"]], null, null, null, null, null)), (n()(),
            f["ɵted"](-1, null, ["\n                "])), (n()(),
            f["ɵeld"](2, 0, null, null, 17, "div", [["class", "layout-row content-pushed10"]], null, null, null, null, null)), f["ɵdid"](3, 278528, null, 0, h.NgClass, [f.IterableDiffers, f.KeyValueDiffers, f.ElementRef, f.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), f["ɵpod"](4, {
                rtl: 0
            }), (n()(),
            f["ɵted"](-1, null, ["\n                    "])), (n()(),
            f["ɵeld"](6, 0, null, null, 9, "div", [["class", "layout-column"]], null, null, null, null, null)), (n()(),
            f["ɵted"](-1, null, ["\n                        "])), (n()(),
            f["ɵeld"](8, 0, null, null, 6, "custom-select", [["name", "dateRange"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("ngModelChange" === t) {
                    e = !1 !== (s.dateRange = l) && e
                }
                return e
            }, g.a, g.b)), f["ɵdid"](9, 245760, null, 0, v.a, [f.ElementRef, f.NgZone], {
                items: [0, "items"],
                config: [1, "config"]
            }, null), f["ɵprd"](1024, null, m.NG_VALUE_ACCESSOR, function(n) {
                return [n]
            }, [v.a]), f["ɵdid"](11, 671744, null, 0, m.NgModel, [[8, null], [8, null], [8, null], [2, m.NG_VALUE_ACCESSOR]], {
                name: [0, "name"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), f["ɵprd"](2048, null, m.NgControl, null, [m.NgModel]), f["ɵdid"](13, 16384, null, 0, m.NgControlStatus, [m.NgControl], null, null), (n()(),
            f["ɵted"](-1, null, ["\n                        "])), (n()(),
            f["ɵted"](-1, null, ["\n                    "])), (n()(),
            f["ɵted"](-1, null, ["\n                    "])), (n()(),
            f["ɵeld"](17, 0, null, null, 1, "div", [["class", "show-more-pandats layout-column no-wrap just-center"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 != (s.historyState = !0) && e
                }
                return e
            }, null, null)), (n()(),
            f["ɵted"](18, null, ["", ""])), (n()(),
            f["ɵted"](-1, null, ["\n                "])), (n()(),
            f["ɵted"](-1, null, ["\n            "]))], function(n, t) {
                var l = t.component;
                n(t, 3, 0, "layout-row content-pushed10", n(t, 4, 0, l.rtl)),
                n(t, 9, 0, l.dateRanges, l.dateRangesConfig),
                n(t, 11, 0, "dateRange", l.dateRange)
            }, function(n, t) {
                var l = t.component;
                n(t, 8, 0, f["ɵnov"](t, 13).ngClassUntouched, f["ɵnov"](t, 13).ngClassTouched, f["ɵnov"](t, 13).ngClassPristine, f["ɵnov"](t, 13).ngClassDirty, f["ɵnov"](t, 13).ngClassValid, f["ɵnov"](t, 13).ngClassInvalid, f["ɵnov"](t, 13).ngClassPending),
                n(t, 18, 0, l.translation.show_more)
            })
        }
        function a(n) {
            return f["ɵvid"](0, [(n()(),
            f["ɵeld"](0, 0, null, null, 15, "li", [["class", "layout-column"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.changeTab(n.context.$implicit) && e
                }
                return e
            }, null, null)), f["ɵdid"](1, 278528, null, 0, h.NgClass, [f.IterableDiffers, f.KeyValueDiffers, f.ElementRef, f.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), f["ɵpod"](2, {
                "active-pandats": 0
            }), (n()(),
            f["ɵted"](-1, null, ["\n        "])), (n()(),
            f["ɵeld"](4, 0, null, null, 10, "div", [["class", "title-pandats layout-row"]], null, null, null, null, null)), (n()(),
            f["ɵted"](-1, null, ["\n            "])), (n()(),
            f["ɵeld"](6, 0, null, null, 1, "div", [["class", "layout-column"]], null, null, null, null, null)), (n()(),
            f["ɵted"](7, null, ["\n                ", "\n            "])), (n()(),
            f["ɵted"](-1, null, ["\n            "])), (n()(),
            f["ɵand"](16777216, null, null, 1, null, e)), f["ɵdid"](10, 16384, null, 0, h.NgIf, [f.ViewContainerRef, f.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            f["ɵted"](-1, null, ["\n\n            "])), (n()(),
            f["ɵand"](16777216, null, null, 1, null, s)), f["ɵdid"](13, 16384, null, 0, h.NgIf, [f.ViewContainerRef, f.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            f["ɵted"](-1, null, ["\n\n        "])), (n()(),
            f["ɵted"](-1, null, ["\n    "]))], function(n, t) {
                var l = t.component;
                n(t, 1, 0, "layout-column", n(t, 2, 0, t.context.$implicit === l.activeTab)),
                n(t, 10, 0, t.context.$implicit.count),
                n(t, 13, 0, t.context.$implicit === l.activeTab && "closedTrades" === t.context.$implicit.name)
            }, function(n, t) {
                n(t, 7, 0, t.component.translation[t.context.$implicit.name])
            })
        }
        function i(n) {
            return f["ɵvid"](0, [(n()(),
            f["ɵeld"](0, 0, null, null, 7, "li", [], null, null, null, null, null)), (n()(),
            f["ɵted"](-1, null, ["\n        "])), (n()(),
            f["ɵeld"](2, 0, null, null, 4, "span", [], null, null, null, null, null)), (n()(),
            f["ɵted"](-1, null, ["\n               "])), (n()(),
            f["ɵeld"](4, 0, null, null, 1, "open-trades", [], null, null, null, y.a, y.b)), f["ɵdid"](5, 245760, null, 0, b.a, [f.NgZone, C.a, f.ChangeDetectorRef], null, null), (n()(),
            f["ɵted"](-1, null, ["\n        "])), (n()(),
            f["ɵted"](-1, null, ["\n    "]))], function(n, t) {
                n(t, 5, 0)
            }, null)
        }
        function u(n) {
            return f["ɵvid"](0, [(n()(),
            f["ɵeld"](0, 0, null, null, 7, "li", [], null, null, null, null, null)), (n()(),
            f["ɵted"](-1, null, ["\n        "])), (n()(),
            f["ɵeld"](2, 0, null, null, 4, "span", [], null, null, null, null, null)), (n()(),
            f["ɵted"](-1, null, ["\n                "])), (n()(),
            f["ɵeld"](4, 0, null, null, 1, "open-trades", [], null, null, null, y.a, y.b)), f["ɵdid"](5, 245760, null, 0, b.a, [f.NgZone, C.a, f.ChangeDetectorRef], {
                type: [0, "type"]
            }, null), (n()(),
            f["ɵted"](-1, null, ["\n        "])), (n()(),
            f["ɵted"](-1, null, ["\n    "]))], function(n, t) {
                n(t, 5, 0, "pending")
            }, null)
        }
        function o(n) {
            return f["ɵvid"](0, [(n()(),
            f["ɵeld"](0, 0, null, null, 2, "closed-trades", [], null, [[null, "count"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("count" === t) {
                    e = !1 !== (s.activeTab.count = l) && e
                }
                return e
            }, S.a, S.b)), f["ɵdid"](1, 770048, null, 0, k.a, [w.a, f.ChangeDetectorRef, f.NgZone], {
                dateRange: [0, "dateRange"]
            }, {
                count: "count"
            }), (n()(),
            f["ɵted"](-1, null, ["\n                "]))], function(n, t) {
                n(t, 1, 0, t.component.dateRange)
            }, null)
        }
        function r(n) {
            return f["ɵvid"](0, [(n()(),
            f["ɵeld"](0, 0, null, null, 1, "closed-trades", [], null, null, null, S.a, S.b)), f["ɵdid"](1, 770048, null, 0, k.a, [w.a, f.ChangeDetectorRef, f.NgZone], {
                type: [0, "type"]
            }, null)], function(n, t) {
                n(t, 1, 0, "popup")
            }, null)
        }
        function d(n) {
            return f["ɵvid"](0, [(n()(),
            f["ɵeld"](0, 0, null, null, 21, "li", [], null, null, null, null, null)), (n()(),
            f["ɵted"](-1, null, ["\n        "])), (n()(),
            f["ɵeld"](2, 0, null, null, 18, "span", [], null, null, null, null, null)), (n()(),
            f["ɵted"](-1, null, ["\n\n                "])), (n()(),
            f["ɵand"](16777216, null, null, 1, null, o)), f["ɵdid"](5, 16384, null, 0, h.NgIf, [f.ViewContainerRef, f.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            f["ɵted"](-1, null, ["\n\n            "])), (n()(),
            f["ɵted"](-1, null, ["\n                "])), (n()(),
            f["ɵeld"](8, 0, null, null, 11, "modal", [], null, [[null, "onClose"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("onClose" === t) {
                    e = !1 !== s.closeHistoryPopup() && e
                }
                return e
            }, R.a, R.b)), f["ɵdid"](9, 245760, null, 0, P.a, [], {
                state: [0, "state"],
                config: [1, "config"]
            }, {
                onClose: "onClose"
            }), (n()(),
            f["ɵted"](-1, null, ["\n\n                    "])), (n()(),
            f["ɵeld"](11, 0, null, 0, 1, "header", [], null, null, null, null, null)), (n()(),
            f["ɵted"](12, null, ["", ""])), (n()(),
            f["ɵted"](-1, null, ["\n\n                    "])), (n()(),
            f["ɵeld"](14, 0, null, 2, 4, "section", [], null, null, null, null, null)), (n()(),
            f["ɵted"](-1, null, ["\n                        "])), (n()(),
            f["ɵand"](16777216, null, null, 1, null, r)), f["ɵdid"](17, 16384, null, 0, h.NgIf, [f.ViewContainerRef, f.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            f["ɵted"](-1, null, ["\n                    "])), (n()(),
            f["ɵted"](-1, null, ["\n\n                "])), (n()(),
            f["ɵted"](-1, null, ["\n\n        "])), (n()(),
            f["ɵted"](-1, null, ["\n    "]))], function(n, t) {
                var l = t.component;
                n(t, 5, 0, "all" !== l.dateRange.value),
                n(t, 9, 0, l.historyState, l.historyPopupConfig),
                n(t, 17, 0, l.historyState)
            }, function(n, t) {
                n(t, 12, 0, t.component.translation.trade_history)
            })
        }
        function c(n) {
            return f["ɵvid"](0, [(n()(),
            f["ɵeld"](0, 0, null, null, 4, "ul", [["class", "tabs-header-pandats"]], null, null, null, null, null)), (n()(),
            f["ɵted"](-1, null, ["\n    "])), (n()(),
            f["ɵand"](16777216, null, null, 1, null, a)), f["ɵdid"](3, 802816, null, 0, h.NgForOf, [f.ViewContainerRef, f.TemplateRef, f.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            f["ɵted"](-1, null, ["\n"])), (n()(),
            f["ɵted"](-1, null, ["\n\n\n"])), (n()(),
            f["ɵeld"](6, 0, null, null, 10, "ul", [["class", "tabs-content-pandats"]], null, null, null, null, null)), (n()(),
            f["ɵted"](-1, null, ["\n    "])), (n()(),
            f["ɵand"](16777216, null, null, 1, null, i)), f["ɵdid"](9, 16384, null, 0, h.NgIf, [f.ViewContainerRef, f.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            f["ɵted"](-1, null, ["\n    "])), (n()(),
            f["ɵand"](16777216, null, null, 1, null, u)), f["ɵdid"](12, 16384, null, 0, h.NgIf, [f.ViewContainerRef, f.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            f["ɵted"](-1, null, ["\n    "])), (n()(),
            f["ɵand"](16777216, null, null, 1, null, d)), f["ɵdid"](15, 16384, null, 0, h.NgIf, [f.ViewContainerRef, f.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            f["ɵted"](-1, null, ["\n"])), (n()(),
            f["ɵted"](-1, null, ["\n"]))], function(n, t) {
                var l = t.component;
                n(t, 3, 0, l.tabs),
                n(t, 9, 0, "openTrades" === l.activeTab.name),
                n(t, 12, 0, "pendingTrades" === l.activeTab.name),
                n(t, 15, 0, "closedTrades" === l.activeTab.name)
            }, null)
        }
        function p(n) {
            return f["ɵvid"](0, [(n()(),
            f["ɵeld"](0, 0, null, null, 1, "tabs", [], null, [["window", "resize"]], function(n, t, l) {
                var e = !0;
                if ("window:resize" === t) {
                    e = !1 !== f["ɵnov"](n, 1).pnlResize(l) && e
                }
                return e
            }, c, L)), f["ɵdid"](1, 245760, null, 0, T.a, [I.WindowRef, f.NgZone], null, null)], function(n, t) {
                n(t, 1, 0)
            }, null)
        }
        var f = l(2)
          , h = l(4)
          , g = l(72)
          , v = l(56)
          , m = l(5)
          , y = l(514)
          , b = l(145)
          , C = l(47)
          , S = l(511)
          , k = l(142)
          , w = l(64)
          , R = l(98)
          , P = l(75)
          , T = l(147)
          , I = l(25);
        l.d(t, "b", function() {
            return L
        }),
        t.a = c;
        var A = []
          , L = f["ɵcrt"]({
            encapsulation: 2,
            styles: A,
            data: {}
        });
        f["ɵccf"]("tabs", T.a, p, {}, {}, [])
    },
    517: function(n, t, l) {
        "use strict";
        function e(n) {
            return o["ɵvid"](0, [(n()(),
            o["ɵeld"](0, 0, null, null, 7, "div", [["class", "platform-state-pandats platform-state-error-pandats"]], null, null, null, null, null)), (n()(),
            o["ɵted"](-1, null, ["\n            "])), (n()(),
            o["ɵeld"](2, 0, null, null, 1, "div", [["class", "platform-state-message-pandats"]], null, null, null, null, null)), (n()(),
            o["ɵted"](3, null, ["", ""])), (n()(),
            o["ɵted"](-1, null, ["\n            "])), (n()(),
            o["ɵeld"](5, 0, null, null, 1, "button", [["class", "forex-button-pandats"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.refresh() && e
                }
                return e
            }, null, null)), (n()(),
            o["ɵted"](6, null, ["", ""])), (n()(),
            o["ɵted"](-1, null, ["\n        "]))], null, function(n, t) {
                var l = t.component;
                n(t, 3, 0, l.translation.error_loading_trading_platform),
                n(t, 6, 0, l.translation.try_again)
            })
        }
        function s(n) {
            return o["ɵvid"](0, [(n()(),
            o["ɵeld"](0, 0, null, null, 10, "div", [["class", "bottom-pandats cell-pandats"]], null, null, null, null, null)), (n()(),
            o["ɵted"](-1, null, ["\n                    "])), (n()(),
            o["ɵeld"](2, 0, null, null, 1, "closetrade-popup", [], null, null, null, r.a, r.b)), o["ɵdid"](3, 245760, null, 0, d.a, [o.NgZone], null, null), (n()(),
            o["ɵted"](-1, null, ["\n                    "])), (n()(),
            o["ɵeld"](5, 0, null, null, 1, "sltp-popup", [], null, null, null, c.a, c.b)), o["ɵdid"](6, 245760, null, 0, p.a, [f.a, h.a, g.a, v.DecimalPipe, m.a, o.NgZone], null, null), (n()(),
            o["ɵted"](-1, null, ["\n                    "])), (n()(),
            o["ɵeld"](8, 0, null, null, 1, "tabs", [], null, [["window", "resize"]], function(n, t, l) {
                var e = !0;
                if ("window:resize" === t) {
                    e = !1 !== o["ɵnov"](n, 9).pnlResize(l) && e
                }
                return e
            }, y.a, y.b)), o["ɵdid"](9, 245760, null, 0, b.a, [C.WindowRef, o.NgZone], null, null), (n()(),
            o["ɵted"](-1, null, ["\n                "]))], function(n, t) {
                n(t, 3, 0),
                n(t, 6, 0),
                n(t, 9, 0)
            }, null)
        }
        function a(n) {
            return o["ɵvid"](0, [(n()(),
            o["ɵeld"](0, 0, null, null, 31, "div", [["class", "platform-wrapper-pandats"]], null, null, null, null, null)), (n()(),
            o["ɵted"](-1, null, ["\n\n            "])), (n()(),
            o["ɵeld"](2, 0, null, null, 4, "div", [["class", "col-left-pandats cell-pandats"]], null, null, null, null, null)), (n()(),
            o["ɵted"](-1, null, ["\n                "])), (n()(),
            o["ɵeld"](4, 0, null, null, 1, "asset-list", [], null, null, null, S.a, S.b)), o["ɵdid"](5, 245760, null, 0, k.a, [g.a, o.NgZone, o.ChangeDetectorRef, m.a], null, null), (n()(),
            o["ɵted"](-1, null, ["\n            "])), (n()(),
            o["ɵted"](-1, null, ["\n            "])), (n()(),
            o["ɵeld"](8, 0, null, null, 22, "div", [["class", "col-right-pandats"]], null, null, null, null, null)), (n()(),
            o["ɵted"](-1, null, ["\n                "])), (n()(),
            o["ɵeld"](10, 0, null, null, 16, "div", [["class", "right-center-pandats"]], null, null, null, null, null)), (n()(),
            o["ɵted"](-1, null, ["\n                    "])), (n()(),
            o["ɵeld"](12, 0, null, null, 4, "div", [["class", "center-pandats cell-pandats"]], null, null, null, null, null)), (n()(),
            o["ɵted"](-1, null, ["\n                        "])), (n()(),
            o["ɵeld"](14, 0, null, null, 1, "chart-tabs", [], null, null, null, w.a, w.b)), o["ɵdid"](15, 245760, null, 0, R.a, [o.NgZone], null, null), (n()(),
            o["ɵted"](-1, null, ["\n                    "])), (n()(),
            o["ɵted"](-1, null, ["\n                    "])), (n()(),
            o["ɵeld"](18, 0, null, null, 7, "div", [["class", "right-pandats cell-pandats"]], null, null, null, null, null)), (n()(),
            o["ɵted"](-1, null, ["\n                        "])), (n()(),
            o["ɵeld"](20, 0, null, null, 4, "div", [["class", "trades-pandats"]], null, null, null, null, null)), (n()(),
            o["ɵted"](-1, null, ["\n                            "])), (n()(),
            o["ɵeld"](22, 0, null, null, 1, "invest", [["class", "invest-wrapper"]], null, null, null, P.a, P.b)), o["ɵdid"](23, 245760, null, 0, T.a, [o.NgZone, f.a, h.a, g.a], null, null), (n()(),
            o["ɵted"](-1, null, ["\n                        "])), (n()(),
            o["ɵted"](-1, null, ["\n                    "])), (n()(),
            o["ɵted"](-1, null, ["\n                "])), (n()(),
            o["ɵted"](-1, null, ["\n                "])), (n()(),
            o["ɵand"](16777216, null, null, 1, null, s)), o["ɵdid"](29, 16384, null, 0, v.NgIf, [o.ViewContainerRef, o.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            o["ɵted"](-1, null, ["\n            "])), (n()(),
            o["ɵted"](-1, null, ["\n        "]))], function(n, t) {
                var l = t.component;
                n(t, 5, 0),
                n(t, 15, 0),
                n(t, 23, 0),
                n(t, 29, 0, l.user.loggedIn)
            }, null)
        }
        function i(n) {
            return o["ɵvid"](0, [(n()(),
            o["ɵeld"](0, 0, null, null, 52, "div", [["class", "mainpandats"]], null, null, null, null, null)), (n()(),
            o["ɵted"](-1, null, ["\n\n    "])), (n()(),
            o["ɵeld"](2, 0, null, null, 10, "div", [["class", "wrapper-pandats helvetica-neue-pandats"]], null, null, null, null, null)), (n()(),
            o["ɵted"](-1, null, ["\n\n        "])), (n()(),
            o["ɵeld"](4, 0, null, null, 1, "spinner", [], null, null, null, I.a, I.b)), o["ɵdid"](5, 114688, null, 0, A.a, [], {
                isShow: [0, "isShow"],
                isBackdrop: [1, "isBackdrop"]
            }, null), (n()(),
            o["ɵted"](-1, null, ["\n\n        "])), (n()(),
            o["ɵand"](16777216, null, null, 1, null, e)), o["ɵdid"](8, 16384, null, 0, v.NgIf, [o.ViewContainerRef, o.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            o["ɵted"](-1, null, ["\n\n        "])), (n()(),
            o["ɵand"](16777216, null, null, 1, null, a)), o["ɵdid"](11, 16384, null, 0, v.NgIf, [o.ViewContainerRef, o.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            o["ɵted"](-1, null, ["\n    "])), (n()(),
            o["ɵted"](-1, null, ["\n    "])), (n()(),
            o["ɵeld"](14, 0, null, null, 37, "modal", [], null, [[null, "onClose"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("onClose" === t) {
                    e = !1 !== s.closeMarginCallPopup() && e
                }
                return e
            }, _.a, _.b)), o["ɵdid"](15, 245760, null, 0, x.a, [], {
                state: [0, "state"],
                config: [1, "config"]
            }, {
                onClose: "onClose"
            }), (n()(),
            o["ɵted"](-1, null, ["\n\n        "])), (n()(),
            o["ɵeld"](17, 0, null, 0, 1, "header", [], null, null, null, null, null)), (n()(),
            o["ɵted"](18, null, ["", ""])), (n()(),
            o["ɵted"](-1, null, ["\n        "])), (n()(),
            o["ɵeld"](20, 0, null, 1, 7, "div", [["class", "section-subtitle"]], null, null, null, null, null)), (n()(),
            o["ɵted"](-1, null, ["\n            "])), (n()(),
            o["ɵeld"](22, 0, null, null, 4, "div", [["class", "row-pandats title"]], null, null, null, null, null)), (n()(),
            o["ɵted"](-1, null, ["\n                "])), (n()(),
            o["ɵeld"](24, 0, null, null, 1, "span", [["class", "warningIcon"]], null, null, null, null, null)), (n()(),
            o["ɵted"](-1, null, ["!"])), (n()(),
            o["ɵted"](26, null, [" ", "\n            "])), (n()(),
            o["ɵted"](-1, null, ["\n        "])), (n()(),
            o["ɵted"](-1, null, ["\n        "])), (n()(),
            o["ɵeld"](29, 0, null, 2, 12, "section", [], null, null, null, null, null)), (n()(),
            o["ɵted"](-1, null, ["\n            "])), (n()(),
            o["ɵeld"](31, 0, null, null, 9, "div", [["class", "marginCall-text-pandats"]], null, null, null, null, null)), (n()(),
            o["ɵted"](-1, null, ["\n                "])), (n()(),
            o["ɵeld"](33, 0, null, null, 6, "div", [["class", "page-text"]], null, null, null, null, null)), (n()(),
            o["ɵted"](-1, null, ["\n                    "])), (n()(),
            o["ɵeld"](35, 0, null, null, 1, "span", [["class", "info"]], null, null, null, null, null)), (n()(),
            o["ɵted"](36, null, ["", ""])), (n()(),
            o["ɵted"](-1, null, ["\n                    "])), (n()(),
            o["ɵeld"](38, 0, null, null, 0, "span", [], [[8, "innerHTML", 1]], null, null, null, null)), (n()(),
            o["ɵted"](-1, null, ["\n                "])), (n()(),
            o["ɵted"](-1, null, ["\n            "])), (n()(),
            o["ɵted"](-1, null, ["\n        "])), (n()(),
            o["ɵted"](-1, null, ["\n\n        "])), (n()(),
            o["ɵeld"](43, 0, null, 3, 7, "footer", [], null, null, null, null, null)), (n()(),
            o["ɵted"](-1, null, ["\n            "])), (n()(),
            o["ɵeld"](45, 0, null, null, 4, "div", [["class", "row-pandats"]], null, null, null, null, null)), (n()(),
            o["ɵted"](-1, null, ["\n                "])), (n()(),
            o["ɵeld"](47, 0, null, null, 1, "button", [["class", "forex-button-pandats"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.deposit() && e
                }
                return e
            }, null, null)), (n()(),
            o["ɵted"](-1, null, ["Deposit"])), (n()(),
            o["ɵted"](-1, null, ["\n            "])), (n()(),
            o["ɵted"](-1, null, ["\n        "])), (n()(),
            o["ɵted"](-1, null, ["\n\n    "])), (n()(),
            o["ɵted"](-1, null, ["\n"])), (n()(),
            o["ɵted"](-1, null, ["\n\n\n"]))], function(n, t) {
                var l = t.component;
                n(t, 5, 0, l.showSpinner, !1),
                n(t, 8, 0, "error" === l.platformState),
                n(t, 11, 0, l.status),
                n(t, 15, 0, l.marginCallState, l.marginCallPopupConfig)
            }, function(n, t) {
                var l = t.component;
                n(t, 18, 0, l.translation.marginCall),
                n(t, 26, 0, l.translation.marginCall),
                n(t, 36, 0, l.translation.attention),
                n(t, 38, 0, l.translation.marginCallMessage)
            })
        }
        function u(n) {
            return o["ɵvid"](0, [(n()(),
            o["ɵeld"](0, 0, null, null, 1, "panda-forex-trading-platform", [], null, null, null, i, F)), o["ɵdid"](1, 245760, null, 0, L.a, [C.WindowRef, o.NgZone, g.a, D.a, N.a, O.a, M.a, m.a], null, null)], function(n, t) {
                n(t, 1, 0)
            }, null)
        }
        var o = l(2)
          , r = l(512)
          , d = l(143)
          , c = l(515)
          , p = l(146)
          , f = l(46)
          , h = l(45)
          , g = l(22)
          , v = l(4)
          , m = l(14)
          , y = l(516)
          , b = l(147)
          , C = l(25)
          , S = l(509)
          , k = l(140)
          , w = l(510)
          , R = l(141)
          , P = l(513)
          , T = l(144)
          , I = l(73)
          , A = l(57)
          , L = l(148)
          , _ = l(98)
          , x = l(75)
          , D = l(47)
          , N = l(64)
          , O = l(102)
          , M = l(65);
        l.d(t, "a", function() {
            return E
        });
        var V = []
          , F = o["ɵcrt"]({
            encapsulation: 2,
            styles: V,
            data: {}
        })
          , E = o["ɵccf"]("panda-forex-trading-platform", L.a, u, {}, {}, [])
    },
    519: function(n, t, l) {
        "use strict";
        function e(n) {
            return g["ɵvid"](0, [(n()(),
            g["ɵeld"](0, 0, null, null, 4, "a", [["tabindex", "0"]], [[1, "aria-label", 0]], [[null, "keyup.enter"], [null, "click"]], function(n, t, l) {
                var e = !0;
                if ("keyup.enter" === t) {
                    e = !1 !== g["ɵnov"](n.parent.parent.parent, 2).previous() && e
                }
                if ("click" === t) {
                    e = !1 !== g["ɵnov"](n.parent.parent.parent, 2).previous() && e
                }
                return e
            }, null, null)), (n()(),
            g["ɵted"](1, null, ["\n                ", " "])), (n()(),
            g["ɵeld"](2, 0, null, null, 1, "span", [["class", "show-for-sr"]], null, null, null, null, null)), (n()(),
            g["ɵted"](3, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n            "]))], null, function(n, t) {
                var l = t.component;
                n(t, 0, 0, l.previousLabel + " " + l.screenReaderPageLabel),
                n(t, 1, 0, l.previousLabel),
                n(t, 3, 0, l.screenReaderPageLabel)
            })
        }
        function s(n) {
            return g["ɵvid"](0, [(n()(),
            g["ɵeld"](0, 0, null, null, 4, "span", [], null, null, null, null, null)), (n()(),
            g["ɵted"](1, null, ["\n                ", " "])), (n()(),
            g["ɵeld"](2, 0, null, null, 1, "span", [["class", "show-for-sr"]], null, null, null, null, null)), (n()(),
            g["ɵted"](3, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n            "]))], null, function(n, t) {
                var l = t.component;
                n(t, 1, 0, l.previousLabel),
                n(t, 3, 0, l.screenReaderPageLabel)
            })
        }
        function a(n) {
            return g["ɵvid"](0, [(n()(),
            g["ɵeld"](0, 0, null, null, 7, "li", [["class", "pagination-previous"]], [[2, "disabled", null]], null, null, null, null)), (n()(),
            g["ɵted"](-1, null, [" \n            "])), (n()(),
            g["ɵand"](16777216, null, null, 1, null, e)), g["ɵdid"](3, 16384, null, 0, m.NgIf, [g.ViewContainerRef, g.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵand"](16777216, null, null, 1, null, s)), g["ɵdid"](6, 16384, null, 0, m.NgIf, [g.ViewContainerRef, g.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            g["ɵted"](-1, null, ["\n        "]))], function(n, t) {
                n(t, 3, 0, 1 < g["ɵnov"](t.parent.parent, 2).getCurrent()),
                n(t, 6, 0, g["ɵnov"](t.parent.parent, 2).isFirstPage())
            }, function(n, t) {
                n(t, 0, 0, g["ɵnov"](t.parent.parent, 2).isFirstPage())
            })
        }
        function i(n) {
            return g["ɵvid"](0, [(n()(),
            g["ɵeld"](0, 0, null, null, 7, "a", [["tabindex", "0"]], null, [[null, "keyup.enter"], [null, "click"]], function(n, t, l) {
                var e = !0;
                if ("keyup.enter" === t) {
                    e = !1 !== g["ɵnov"](n.parent.parent.parent, 2).setCurrent(n.parent.context.$implicit.value) && e
                }
                if ("click" === t) {
                    e = !1 !== g["ɵnov"](n.parent.parent.parent, 2).setCurrent(n.parent.context.$implicit.value) && e
                }
                return e
            }, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](2, 0, null, null, 1, "span", [["class", "show-for-sr"]], null, null, null, null, null)), (n()(),
            g["ɵted"](3, null, ["", " "])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(),
            g["ɵted"](6, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n            "]))], null, function(n, t) {
                n(t, 3, 0, t.component.screenReaderPageLabel),
                n(t, 6, 0, t.parent.context.$implicit.label)
            })
        }
        function u(n) {
            return g["ɵvid"](0, [(n()(),
            g["ɵeld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](2, 0, null, null, 1, "span", [["class", "show-for-sr"]], null, null, null, null, null)), (n()(),
            g["ɵted"](3, null, ["", " "])), (n()(),
            g["ɵted"](-1, null, ["\n                "])), (n()(),
            g["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(),
            g["ɵted"](6, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, [" \n            "]))], null, function(n, t) {
                n(t, 3, 0, t.component.screenReaderCurrentLabel),
                n(t, 6, 0, t.parent.context.$implicit.label)
            })
        }
        function o(n) {
            return g["ɵvid"](0, [(n()(),
            g["ɵeld"](0, 0, null, null, 7, "li", [], [[2, "current", null]], null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵand"](16777216, null, null, 1, null, i)), g["ɵdid"](3, 16384, null, 0, m.NgIf, [g.ViewContainerRef, g.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵand"](16777216, null, null, 1, null, u)), g["ɵdid"](6, 16384, null, 0, m.NgIf, [g.ViewContainerRef, g.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            g["ɵted"](-1, null, ["\n        "]))], function(n, t) {
                n(t, 3, 0, g["ɵnov"](t.parent.parent, 2).getCurrent() !== t.context.$implicit.value),
                n(t, 6, 0, g["ɵnov"](t.parent.parent, 2).getCurrent() === t.context.$implicit.value)
            }, function(n, t) {
                n(t, 0, 0, g["ɵnov"](t.parent.parent, 2).getCurrent() === t.context.$implicit.value)
            })
        }
        function r(n) {
            return g["ɵvid"](0, [(n()(),
            g["ɵeld"](0, 0, null, null, 4, "a", [["tabindex", "0"]], [[1, "aria-label", 0]], [[null, "keyup.enter"], [null, "click"]], function(n, t, l) {
                var e = !0;
                if ("keyup.enter" === t) {
                    e = !1 !== g["ɵnov"](n.parent.parent.parent, 2).next() && e
                }
                if ("click" === t) {
                    e = !1 !== g["ɵnov"](n.parent.parent.parent, 2).next() && e
                }
                return e
            }, null, null)), (n()(),
            g["ɵted"](1, null, ["\n                 ", " "])), (n()(),
            g["ɵeld"](2, 0, null, null, 1, "span", [["class", "show-for-sr"]], null, null, null, null, null)), (n()(),
            g["ɵted"](3, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n            "]))], null, function(n, t) {
                var l = t.component;
                n(t, 0, 0, l.nextLabel + " " + l.screenReaderPageLabel),
                n(t, 1, 0, l.nextLabel),
                n(t, 3, 0, l.screenReaderPageLabel)
            })
        }
        function d(n) {
            return g["ɵvid"](0, [(n()(),
            g["ɵeld"](0, 0, null, null, 4, "span", [], null, null, null, null, null)), (n()(),
            g["ɵted"](1, null, ["\n                 ", " "])), (n()(),
            g["ɵeld"](2, 0, null, null, 1, "span", [["class", "show-for-sr"]], null, null, null, null, null)), (n()(),
            g["ɵted"](3, null, ["", ""])), (n()(),
            g["ɵted"](-1, null, ["\n            "]))], null, function(n, t) {
                var l = t.component;
                n(t, 1, 0, l.nextLabel),
                n(t, 3, 0, l.screenReaderPageLabel)
            })
        }
        function c(n) {
            return g["ɵvid"](0, [(n()(),
            g["ɵeld"](0, 0, null, null, 7, "li", [["class", "pagination-next"]], [[2, "disabled", null]], null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵand"](16777216, null, null, 1, null, r)), g["ɵdid"](3, 16384, null, 0, m.NgIf, [g.ViewContainerRef, g.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            g["ɵted"](-1, null, ["\n            "])), (n()(),
            g["ɵand"](16777216, null, null, 1, null, d)), g["ɵdid"](6, 16384, null, 0, m.NgIf, [g.ViewContainerRef, g.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            g["ɵted"](-1, null, ["\n        "]))], function(n, t) {
                n(t, 3, 0, !g["ɵnov"](t.parent.parent, 2).isLastPage()),
                n(t, 6, 0, g["ɵnov"](t.parent.parent, 2).isLastPage())
            }, function(n, t) {
                n(t, 0, 0, g["ɵnov"](t.parent.parent, 2).isLastPage())
            })
        }
        function p(n) {
            return g["ɵvid"](0, [(n()(),
            g["ɵeld"](0, 0, null, null, 10, "ul", [["class", "ngx-pagination"], ["role", "navigation"]], [[1, "aria-label", 0]], null, null, null, null)), (n()(),
            g["ɵted"](-1, null, ["\n\n        "])), (n()(),
            g["ɵand"](16777216, null, null, 1, null, a)), g["ɵdid"](3, 16384, null, 0, m.NgIf, [g.ViewContainerRef, g.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            g["ɵted"](-1, null, ["\n\n        "])), (n()(),
            g["ɵand"](16777216, null, null, 1, null, o)), g["ɵdid"](6, 802816, null, 0, m.NgForOf, [g.ViewContainerRef, g.TemplateRef, g.IterableDiffers], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            g["ɵted"](-1, null, ["\n\n        "])), (n()(),
            g["ɵand"](16777216, null, null, 1, null, c)), g["ɵdid"](9, 16384, null, 0, m.NgIf, [g.ViewContainerRef, g.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            g["ɵted"](-1, null, ["\n\n    "]))], function(n, t) {
                var l = t.component;
                n(t, 3, 0, l.directionLinks),
                n(t, 6, 0, g["ɵnov"](t.parent, 2).pages),
                n(t, 9, 0, l.directionLinks)
            }, function(n, t) {
                n(t, 0, 0, t.component.screenReaderPaginationLabel)
            })
        }
        function f(n) {
            return g["ɵvid"](2, [(n()(),
            g["ɵted"](-1, null, ["\n    "])), (n()(),
            g["ɵeld"](1, 0, null, null, 5, "pagination-template", [], null, [[null, "pageChange"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("pageChange" === t) {
                    e = !1 !== s.pageChange.emit(l) && e
                }
                return e
            }, null, null)), g["ɵdid"](2, 737280, [["p", 4]], 0, v.e, [v.a, g.ChangeDetectorRef], {
                id: [0, "id"],
                maxSize: [1, "maxSize"]
            }, {
                pageChange: "pageChange"
            }), (n()(),
            g["ɵted"](-1, null, ["\n    "])), (n()(),
            g["ɵand"](16777216, null, null, 1, null, p)), g["ɵdid"](5, 16384, null, 0, m.NgIf, [g.ViewContainerRef, g.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            g["ɵted"](-1, null, ["\n    "])), (n()(),
            g["ɵted"](-1, null, ["\n    "]))], function(n, t) {
                var l = t.component;
                n(t, 2, 0, l.id, l.maxSize),
                n(t, 5, 0, !(l.autoHide && g["ɵnov"](t, 2).pages.length <= 1))
            }, null)
        }
        function h(n) {
            return g["ɵvid"](0, [(n()(),
            g["ɵeld"](0, 0, null, null, 1, "pagination-controls", [], null, null, null, f, b)), g["ɵdid"](1, 49152, null, 0, v.d, [], null, null)], null, null)
        }
        var g = l(2)
          , v = l(113)
          , m = l(4);
        l.d(t, "b", function() {
            return b
        }),
        t.a = f;
        var y = (g["ɵcmf"](v.b, [], function(n) {
            return g["ɵmod"]([g["ɵmpd"](512, g.ComponentFactoryResolver, g["ɵCodegenComponentFactoryResolver"], [[8, []], [3, g.ComponentFactoryResolver], g.NgModuleRef]), g["ɵmpd"](4608, m.NgLocalization, m.NgLocaleLocalization, [g.LOCALE_ID]), g["ɵmpd"](4608, v.a, v.a, []), g["ɵmpd"](512, m.CommonModule, m.CommonModule, []), g["ɵmpd"](512, v.b, v.b, [])])
        }),
        ["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination .ellipsis::after {\n    content: '…';\n    padding: 0.1875rem 0.625rem;\n    color: #0a0a0a; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '«';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '»';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }"])
          , b = g["ɵcrt"]({
            encapsulation: 2,
            styles: y,
            data: {}
        });
        g["ɵccf"]("pagination-controls", v.d, h, {
            id: "id",
            maxSize: "maxSize",
            directionLinks: "directionLinks",
            autoHide: "autoHide",
            previousLabel: "previousLabel",
            nextLabel: "nextLabel",
            screenReaderPaginationLabel: "screenReaderPaginationLabel",
            screenReaderPageLabel: "screenReaderPageLabel",
            screenReaderCurrentLabel: "screenReaderCurrentLabel"
        }, {
            pageChange: "pageChange"
        }, [])
    },
    529: function(n, t, l) {
        "use strict";
        var e = l(13)
          , s = l(2)
          , a = l(5)
          , i = l(28)
          , u = l(4)
          , o = l(54)
          , r = (l.n(o),
        l(113))
          , d = l(25)
          , c = l(17)
          , p = l(22)
          , f = l(46)
          , h = l(45)
          , g = l(65)
          , v = l(148)
          , m = l(140)
          , y = l(101)
          , b = l(141)
          , C = l(533)
          , S = l(144)
          , k = l(535)
          , w = l(147)
          , R = l(145)
          , P = l(142)
          , T = l(146)
          , I = l(143)
          , A = l(47)
          , L = l(64)
          , _ = l(102)
          , x = l(63)
          , D = l(538)
          , N = l(536)
          , O = l(31)
          , M = (l.n(O),
        l(539))
          , V = l(74);
        l.d(t, "a", function() {
            return z
        });
        var F = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , E = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , j = {
            suppressScrollX: !0
        }
          , z = function() {
            function n(n) {
                this.injector = n,
                M.a.injector = this.injector
            }
            return n = F([l.i(s.NgModule)({
                declarations: [v.a, m.a, m.b, y.a, b.a, C.a, S.a, k.a, w.a, R.a, R.b, P.a, P.b, T.a, I.a, D.a, N.a],
                imports: [e.r, a.FormsModule, i.k, a.ReactiveFormsModule, o.PerfectScrollbarModule.forRoot(j), O.TextMaskModule, c.HelperComponentsModule, r.b],
                exports: [y.a],
                providers: [d.WindowRef, p.a, f.a, h.a, A.a, L.a, _.a, g.a, u.DecimalPipe, V.a, {
                    provide: s.ErrorHandler,
                    useClass: x.AppErrorHandler
                }],
                bootstrap: [v.a],
                schemas: [s.CUSTOM_ELEMENTS_SCHEMA]
            }), E("design:paramtypes", [s.Injector])], n)
        }()
    },
    530: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(32);
        l.n(s);
        l.d(t, "a", function() {
            return u
        });
        var a = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , i = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , u = function() {
            function n() {
                this.entities = [],
                this.cache = {},
                this.cacheByName = {},
                this.cacheNotFound = {},
                this.entities = []
            }
            return n.prototype.add = function(n) {
                this.entities.push(n)
            }
            ,
            n.prototype.get = function(n) {
                if (n.hasOwnProperty("id") && this.cacheNotFound.hasOwnProperty(n.id))
                    return this.cacheNotFound[n.id];
                var t = JSON.stringify(n);
                if (n.hasOwnProperty("outputName") && this.cacheNotFound.hasOwnProperty(t))
                    return this.cacheNotFound[t];
                if (n.hasOwnProperty("id") && this.cache.hasOwnProperty(n.id))
                    return this.cache[n.id];
                if (n && n.hasOwnProperty("outputName") && this.cacheByName.hasOwnProperty(t))
                    return this.cacheByName[t];
                var l = s.find(this.entities, n);
                if (l)
                    return n.hasOwnProperty("id") && (this.cache[n.id] = l),
                    n.hasOwnProperty("outputName") && (this.cacheByName[t] = l),
                    l;
                n.hasOwnProperty("id") && (this.cacheNotFound[n.id] = null),
                n.hasOwnProperty("outputName") && (this.cacheNotFound[t] = null)
            }
            ,
            n.prototype.find = function(n) {
                return s.filter(this.entities, n)
            }
            ,
            n.prototype.findBy = function(n, t) {
                return s.chain(this.entities).filter(n).filter(t).value()
            }
            ,
            n.prototype.sort = function(n) {
                return s.orderBy(this.entities, n)
            }
            ,
            n.prototype.remove = function(n) {
                return s.remove(this.entities, n)
            }
            ,
            n.prototype.getAll = function() {
                return this.entities
            }
            ,
            n.prototype.fill = function(n) {
                this.entities = n
            }
            ,
            n.prototype.length = function() {
                return this.entities.length
            }
            ,
            n.prototype.clear = function() {
                this.cache = {},
                this.cacheByName = {},
                this.cacheNotFound = {},
                this.entities = []
            }
            ,
            n = a([l.i(e.Injectable)(), i("design:paramtypes", [])], n)
        }()
    },
    531: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(32);
        l.n(s);
        l.d(t, "a", function() {
            return u
        });
        var a = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , i = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , u = function() {
            function n() {
                this.entities = [],
                this.entities = []
            }
            return n.prototype.add = function(n) {
                this.entities.push(n)
            }
            ,
            n.prototype.get = function(n) {
                return s.find(this.entities, n)
            }
            ,
            n.prototype.find = function(n) {
                return s.filter(this.entities, n)
            }
            ,
            n.prototype.findBy = function(n, t, l) {
                return s.chain(this.entities).filter(n).filter(t).orderBy(l.field, l.dir).value()
            }
            ,
            n.prototype.sort = function(n) {
                return s.orderBy(this.entities, n)
            }
            ,
            n.prototype.remove = function(n) {
                return s.remove(this.entities, n)
            }
            ,
            n.prototype.getAll = function() {
                return this.entities
            }
            ,
            n.prototype.fill = function(n) {
                this.entities = n
            }
            ,
            n.prototype.length = function() {
                return this.entities.length
            }
            ,
            n.prototype.clear = function() {
                this.entities = []
            }
            ,
            n = a([l.i(e.Injectable)(), i("design:paramtypes", [])], n)
        }()
    },
    532: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(32);
        l.n(s);
        l.d(t, "a", function() {
            return u
        });
        var a = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , i = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , u = function() {
            function n() {
                this.entities = [],
                this.entities = []
            }
            return n.prototype.add = function(n) {
                this.entities.push(n)
            }
            ,
            n.prototype.get = function(n) {
                return s.find(this.entities, n)
            }
            ,
            n.prototype.find = function(n) {
                return s.filter(this.entities, n)
            }
            ,
            n.prototype.findBy = function(n, t, l) {
                return s.chain(this.entities).filter(n).filter(t).orderBy(l.field, l.dir).value()
            }
            ,
            n.prototype.sort = function(n) {
                return s.orderBy(this.entities, n)
            }
            ,
            n.prototype.remove = function(n) {
                return s.remove(this.entities, n)
            }
            ,
            n.prototype.getAll = function() {
                return this.entities
            }
            ,
            n.prototype.fill = function(n) {
                this.entities = n
            }
            ,
            n.prototype.length = function() {
                return this.entities.length
            }
            ,
            n.prototype.clear = function() {
                this.entities.forEach(function(n) {
                    return n.clear && n.clear()
                }),
                this.entities = []
            }
            ,
            n = a([l.i(e.Injectable)(), i("design:paramtypes", [])], n)
        }()
    },
    533: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(46)
          , a = l(22)
          , i = l(11)
          , u = l(8)
          , o = l(15)
          , r = l(9)
          , d = l(39)
          , c = l(1);
        l.n(c);
        l.d(t, "a", function() {
            return h
        });
        var p = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , f = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , h = function() {
            function n(n, t, l) {
                var e = this;
                this.zone = n,
                this.investCalcService = t,
                this.assetService = l,
                this.serverTimeService = d.serverTimeService,
                this.stateService = u.stateService,
                this.settingsService = i.settingsService,
                this.userService = o.userService,
                this.constants = r.Constants,
                this.user = this.userService.get(),
                this.translation = this.settingsService.get("translation"),
                this.langSubscribe = this.stateService.get("lang").subscribe(function() {
                    e.zone.run(function() {
                        e.translation = e.settingsService.get("translation")
                    })
                })
            }
            return n.prototype.roundNumber = function(n, t) {
                var l = parseFloat(n + "e" + t);
                return Number(Math.round(l) + "e-" + t)
            }
            ,
            n.prototype.leverage = function() {
                var n = this.investCalcService.calcMargin(1, "sell", this.selectedAsset, this.user, this.assetService);
                return this.investCalcService.calcLeverage(this.selectedAsset, n.requiredMargin)
            }
            ,
            n.prototype.requiredMargin = function() {
                var n, t;
                return this.selectedAsset && (n = this.investCalcService.calcMargin(1, "sell", this.selectedAsset, this.user, this.assetService),
                t = this.investCalcService.calcMargin(1, "buy", this.selectedAsset, this.user, this.assetService)),
                {
                    ask: t.requiredMargin,
                    bid: n.requiredMargin,
                    askCurrency: t.baseVal,
                    bidCurrency: n.baseVal
                }
            }
            ,
            n.prototype.swaps = function() {
                var n, t, l, e;
                return this.selectedAsset && (l = this.selectedAsset.swapsLong,
                e = this.selectedAsset.swapsShort,
                n = this.investCalcService.calcMargin(1, "sell", this.selectedAsset, this.user, this.assetService, e),
                t = this.investCalcService.calcMargin(1, "buy", this.selectedAsset, this.user, this.assetService, l)),
                {
                    long: l,
                    short: e,
                    longCurrency: t.baseVal,
                    shortCurrency: n.baseVal
                }
            }
            ,
            n.prototype.ngOnInit = function() {
                var n = this;
                this.clientTimezone = this.serverTimeService.timeZoneOffset(this.serverTimeService.serverTimezone),
                this.timezoneSubscribe = this.stateService.get("clientTimezone").filter(function() {
                    return n.selectedAsset
                }).subscribe(function(t) {
                    n.clientTimezone = n.serverTimeService.timeZoneOffset(t.id),
                    n.tradingHours()
                }),
                this.assetSubscribe = this.stateService.get("selectedAsset").distinctUntilChanged().filter(function(n) {
                    return !!n
                }).subscribe(function(t) {
                    n.selectedAsset = t,
                    n.tradingHours()
                })
            }
            ,
            n.prototype.tradingHours = function() {
                if (void 0 !== this.clientTimezone) {
                    var n = this.serverTimeService.time
                      , t = this.clientTimezone
                      , l = Object.assign({}, this.selectedAsset.tradingTimes);
                    Object.keys(l).forEach(function(n) {
                        "24:00" === l[n][0][1] && (l[n][0][1] = "23:59")
                    }),
                    this.tradingTimesFormat = this.formatTimes(n, t, l)
                }
            }
            ,
            n.prototype.tradingTimes = function() {
                return this.selectedAsset && this.tradingTimesFormat ? Object.keys(this.tradingTimesFormat) : []
            }
            ,
            n.prototype.spreadPercent = function() {
                return 100 * this.roundNumber(this.selectedAsset.spreadCalc(), this.selectedAsset.digits) / this.selectedAsset.markupBid()
            }
            ,
            n.prototype.minChange = function() {
                return 1 / Math.pow(10, this.selectedAsset.digits) * 1
            }
            ,
            n.prototype.parseTime = function(n) {
                return {
                    hour: n.split(":")[0],
                    minute: n.split(":")[1]
                }
            }
            ,
            n.prototype.createTime = function(n, t, l, e) {
                var s = this.parseTime(l);
                return c.prototype.toUnix = function() {
                    return this.unix() + 60 * this.utcOffset()
                }
                ,
                c.utc(n).weekday(t).startOf("day").hour(s.hour).minute(s.minute).utcOffset(e)
            }
            ,
            n.prototype.startOfDay = function(n) {
                return n.clone().startOf("day").toUnix()
            }
            ,
            n.prototype.addDay = function(n, t) {
                n.hasOwnProperty(t) || (n[t] = [])
            }
            ,
            n.prototype.addRange = function(n, t, l, e) {
                var s = "object" == typeof l ? l.format("HH:mm") : l
                  , a = "object" == typeof e ? e.format("HH:mm") : e;
                n[t].push(s + "-" + a)
            }
            ,
            n.prototype.formatTimes = function(n, t, l) {
                var e = this
                  , s = n
                  , a = {};
                return Object.keys(l).forEach(function(n) {
                    l[n].forEach(function(l) {
                        var i = e.createTime(s, n, l[0], 0)
                          , u = e.createTime(s, n, l[1], 0)
                          , o = e.createTime(s, n, l[0], t)
                          , r = e.createTime(s, n, l[1], t);
                        e.startOfDay(o) < e.startOfDay(i) && e.startOfDay(r) < e.startOfDay(u) ? (e.addDay(a, o.day()),
                        e.addRange(a, o.day(), o, r)) : e.startOfDay(o) < e.startOfDay(i) && e.startOfDay(r) === e.startOfDay(u) ? (e.addDay(a, o.day()),
                        e.addRange(a, o.day(), o, "23:59"),
                        "00:00" !== r.format("HH:mm") && (e.addDay(a, i.day()),
                        e.addRange(a, i.day(), "00:00", r))) : e.startOfDay(o) > e.startOfDay(i) && e.startOfDay(r) > e.startOfDay(u) ? (e.addDay(a, o.day()),
                        e.addRange(a, o.day(), o, r)) : e.startOfDay(r) > e.startOfDay(u) && e.startOfDay(o) === e.startOfDay(i) ? (e.addDay(a, o.day()),
                        e.addRange(a, o.day(), o, "23:59"),
                        "00:00" !== r.format("HH:mm") && (e.addDay(a, r.day()),
                        e.addRange(a, r.day(), "00:00", r))) : (e.addDay(a, i.day()),
                        e.addRange(a, i.day(), o, r))
                    })
                }),
                a
            }
            ,
            n.prototype.ngOnDestroy = function() {
                this.assetSubscribe && this.assetSubscribe.unsubscribe(),
                this.timezoneSubscribe && this.timezoneSubscribe.unsubscribe(),
                this.langSubscribe && this.langSubscribe.unsubscribe(),
                this.selectedAsset = null,
                this.user = null
            }
            ,
            n = p([l.i(e.Component)({
                selector: "asset-info",
                template: l(621)
            }), f("design:paramtypes", [e.NgZone, s.a, a.a])], n)
        }()
    },
    534: function(n, t, l) {
        "use strict";
        l.d(t, "a", function() {
            return e
        });
        var e;
        !function(n) {
            n.TradeLine = "trade_line",
            n.TradeCircle = "animated_circle",
            n.TradeFigure = "figure"
        }(e || (e = {}))
    },
    535: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(11)
          , a = l(8);
        l.d(t, "a", function() {
            return o
        });
        var i = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , u = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , o = function() {
            function n(n) {
                var t = this;
                this.zone = n,
                this.bear = 50,
                this.settingsService = s.settingsService,
                this.stateService = a.stateService,
                this.translation = this.settingsService.get("translation"),
                this.langSubscribe = this.stateService.get("lang").subscribe(function() {
                    t.zone.run(function() {
                        t.translation = t.settingsService.get("translation")
                    })
                })
            }
            return n.prototype.ngOnInit = function() {
                var n = this;
                this.selectedAssetSubscribe = this.stateService.get("selectedAsset").distinctUntilChanged().filter(function(n) {
                    return n
                }).subscribe(function(t) {
                    n.bear = t.sellPercent
                })
            }
            ,
            n.prototype.ngOnDestroy = function() {
                this.selectedAssetSubscribe && this.selectedAssetSubscribe.unsubscribe(),
                this.langSubscribe && this.langSubscribe.unsubscribe()
            }
            ,
            n = i([l.i(e.Component)({
                selector: "traders-choice",
                template: l(629)
            }), u("design:paramtypes", [e.NgZone])], n)
        }()
    },
    536: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(8)
          , a = l(15)
          , i = l(11);
        l.d(t, "a", function() {
            return r
        });
        var u = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , o = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , r = function() {
            function n(n) {
                var t = this;
                this.zone = n,
                this.pnlData = {
                    freeMargin: 0,
                    totalProfit: 0,
                    netPl: 0,
                    equity: 0,
                    pnl: 0
                },
                this.stateService = s.stateService,
                this.userService = a.userService,
                this.settingsService = i.settingsService,
                this.translation = this.settingsService.get("translation"),
                this.langSubscribe = this.stateService.get("lang").subscribe(function() {
                    t.zone.run(function() {
                        t.translation = t.settingsService.get("translation")
                    })
                })
            }
            return n.prototype.ngOnInit = function() {
                var n = this;
                this.user = this.userService.get(),
                this.pnlSubscribe = this.stateService.get("pnlData").filter(function(n) {
                    return !!n
                }).subscribe(function(t) {
                    return n.zone.run(function() {
                        return n.pnlData = t
                    })
                })
            }
            ,
            n.prototype.ngOnDestroy = function() {
                this.langSubscribe && this.langSubscribe.unsubscribe(),
                this.pnlSubscribe && this.pnlSubscribe.unsubscribe(),
                this.user = null
            }
            ,
            u([l.i(e.Input)(), o("design:type", Object)], n.prototype, "tab", void 0),
            n = u([l.i(e.Component)({
                selector: "pnl",
                template: l(633)
            }), o("design:paramtypes", [e.NgZone])], n)
        }()
    },
    537: function(n, t, l) {
        "use strict";
        l.d(t, "a", function() {
            return e
        });
        var e;
        !function(n) {
            n[n.tradeBuy = '<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <g filter="url(#filter0_d_988_94476)">\n                    <circle cx="26" cy="24" r="11.52" fill="white" stroke="#0EA97B" stroke-width="0.96"/>\n                    <path d="M22.8091 18.1465L25.3291 20.4624H23.7254V29.9065H21.8927V20.4624H20.2891L22.8091 18.1465Z" fill="#0EA97B"/>\n                    <path d="M28.5981 29.9062L31.1181 27.5903H29.5145V18.1462H27.6818V27.5903H26.0781L28.5981 29.9062Z" fill="#0EA97B"/>\n                    </g>\n                    <defs>\n                    <filter id="filter0_d_988_94476" x="0.559999" y="0.48" width="50.88" height="50.88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n                    <feOffset dy="1.92"/>\n                    <feGaussianBlur stdDeviation="6.72"/>\n                    <feComposite in2="hardAlpha" operator="out"/>\n                    <feColorMatrix type="matrix" values="0 0 0 0 0.791667 0 0 0 0 0.791667 0 0 0 0 0.791667 0 0 0 0.25 0"/>\n                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_988_94476"/>\n                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_988_94476" result="shape"/>\n                    </filter>\n                    </defs>\n               </svg>'] = "tradeBuy",
            n[n.tradeSell = '<svg version="1.1" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <g filter="url(#filter0_d_988_94475)">\n                    <circle cx="26" cy="24" r="11.52" fill="white" stroke="#F25555" stroke-width="0.96"/>\n                    <path d="M22.8091 18.1465L25.3291 20.4624H23.7254V29.9065H21.8927V20.4624H20.2891L22.8091 18.1465Z" fill="#F25555"/>\n                    <path d="M28.5981 29.9062L31.1181 27.5903H29.5145V18.1462H27.6818V27.5903H26.0781L28.5981 29.9062Z" fill="#F25555"/>\n                    </g>\n                    <defs>\n                    <filter id="filter0_d_988_94475" x="0.559999" y="0.48" width="50.88" height="50.88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n                    <feOffset dy="1.92"/>\n                    <feGaussianBlur stdDeviation="6.72"/>\n                    <feComposite in2="hardAlpha" operator="out"/>\n                    <feColorMatrix type="matrix" values="0 0 0 0 0.791667 0 0 0 0 0.791667 0 0 0 0 0.791667 0 0 0 0.25 0"/>\n                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_988_94475"/>\n                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_988_94475" result="shape"/>\n                    </filter>\n                    </defs>\n                </svg>'] = "tradeSell",
            n[n.tradeSocialBuy = '<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <g filter="url(#filter0_d_988_94474)">\n                            <circle cx="26" cy="24" r="12" fill="white"/>\n                            <circle cx="26" cy="24" r="11.52" stroke="#0EA97B" stroke-width="0.96"/>\n                            </g>\n                            <path d="M30.9969 29.5204C30.7349 29.5229 30.4821 29.4244 30.2913 29.2455C30.199 29.1559 30.1255 29.0489 30.0753 28.9307C30.025 28.8125 29.9989 28.6855 29.9986 28.5571V24.0679C29.9987 23.8749 29.9598 23.6839 29.8844 23.5062C29.809 23.3285 29.6985 23.1678 29.5595 23.0335C29.2741 22.759 28.8931 22.6057 28.4965 22.6057C28.1 22.6057 27.7189 22.759 27.4335 23.0335C27.2948 23.1684 27.1846 23.3295 27.1092 23.5075C27.0338 23.6854 26.9947 23.8766 26.9944 24.0697V28.4654C27.0043 28.5986 26.9864 28.7323 26.9419 28.8583C26.8959 28.986 26.8238 29.1029 26.7301 29.2014C26.6364 29.2999 26.5232 29.378 26.3977 29.4306C26.2711 29.4834 26.1352 29.5106 25.998 29.5106C25.8608 29.5106 25.7249 29.4834 25.5983 29.4306C25.473 29.3773 25.36 29.299 25.2662 29.2006C25.1725 29.1027 25.1008 28.986 25.056 28.8583C25.0097 28.7328 24.9918 28.5986 25.0035 28.4654V24.0697C24.9832 23.6102 25.0593 23.1515 25.2268 22.723C25.3953 22.2912 25.6508 21.8984 25.9774 21.5689C26.3032 21.238 26.6916 20.9748 27.1201 20.7945C27.555 20.6136 28.0216 20.5205 28.4928 20.5205C28.964 20.5205 29.4305 20.6136 29.8654 20.7945C30.3003 20.9745 30.6942 21.2404 31.0232 21.5763C31.3498 21.9059 31.6052 22.2987 31.7737 22.7304C31.9404 23.1593 32.0164 23.6178 31.997 24.0772V28.5477C31.9979 28.6779 31.9722 28.8068 31.9215 28.9267C31.8709 29.0466 31.7964 29.1551 31.7024 29.2455C31.5121 29.4251 31.259 29.5237 30.9969 29.5204Z" fill="#0EA97B"/>\n                            <path d="M28.504 20.0205C28.7511 20.0197 28.9923 19.9457 29.1974 19.8079C29.4024 19.67 29.562 19.4745 29.656 19.2461C29.75 19.0176 29.7742 18.7664 29.7255 18.5242C29.6768 18.282 29.5574 18.0596 29.3825 17.8852C29.2075 17.7108 28.9848 17.5921 28.7424 17.5442C28.5 17.4963 28.2489 17.5213 28.0207 17.616C27.7925 17.7108 27.5976 17.871 27.4604 18.0765C27.3232 18.2819 27.25 18.5234 27.25 18.7705C27.2497 18.9351 27.282 19.0981 27.345 19.2501C27.408 19.4021 27.5004 19.5402 27.6169 19.6564C27.7335 19.7726 27.8719 19.8646 28.0241 19.927C28.1764 19.9895 28.3395 20.0213 28.504 20.0205Z" fill="#0EA97B"/>\n                            <path d="M26.0009 29.5163C25.7379 29.5165 25.4851 29.4136 25.2961 29.2294C25.2036 29.1397 25.13 29.0322 25.0797 28.9131C25.0295 28.7941 25.0036 28.6661 25.0037 28.5368V24.1016C25.003 23.9066 24.9637 23.7137 24.8881 23.5341C24.8124 23.3546 24.702 23.1921 24.5632 23.056C24.2781 22.7791 23.8974 22.6244 23.5013 22.6244C23.1052 22.6244 22.7246 22.7791 22.4395 23.056C22.3007 23.1921 22.1903 23.3546 22.1146 23.5341C22.039 23.7137 21.9997 23.9066 21.999 24.1016V28.4688C22.0122 28.6729 21.9616 28.8759 21.8543 29.0495C21.7471 29.2232 21.5886 29.3587 21.4011 29.437C21.2751 29.4921 21.1392 29.5205 21.0018 29.5205C20.8645 29.5205 20.7286 29.4921 20.6026 29.437C20.4143 29.3594 20.2551 29.2242 20.1474 29.0504C20.0398 28.8766 19.9892 28.6732 20.0028 28.4688V24.1016C19.9841 23.6379 20.0606 23.1753 20.2277 22.7427C20.396 22.3071 20.6512 21.9108 20.9774 21.5783C21.3054 21.2421 21.6975 20.9763 22.1302 20.7969C22.5646 20.6145 23.0306 20.5205 23.5013 20.5205C23.972 20.5205 24.4381 20.6145 24.8725 20.7969C25.304 20.9775 25.6953 21.2432 26.0234 21.5783C26.3496 21.9108 26.6048 22.3071 26.7731 22.7427C26.9396 23.1754 27.0155 23.638 26.9962 24.1016V28.5368C26.9963 28.6661 26.9704 28.7941 26.9202 28.9131C26.8699 29.0322 26.7963 29.1397 26.7038 29.2294C26.515 29.4128 26.2632 29.5156 26.0009 29.5163Z" fill="#0EA97B"/>\n                            <path d="M23.504 20.0205C23.7511 20.0197 23.9924 19.9457 24.1974 19.8079C24.4024 19.67 24.562 19.4745 24.656 19.2461C24.75 19.0176 24.7742 18.7664 24.7255 18.5242C24.6768 18.282 24.5574 18.0596 24.3825 17.8852C24.2075 17.7108 23.9848 17.5921 23.7424 17.5442C23.5 17.4963 23.2489 17.5213 23.0207 17.616C22.7925 17.7108 22.5976 17.871 22.4604 18.0765C22.3232 18.2819 22.25 18.5234 22.25 18.7705C22.2497 18.9351 22.282 19.0981 22.345 19.2501C22.408 19.4021 22.5004 19.5402 22.6169 19.6564C22.7335 19.7726 22.8719 19.8646 23.0241 19.927C23.1764 19.9895 23.3395 20.0213 23.504 20.0205Z" fill="#0EA97B"/>\n                            <defs>\n                            <filter id="filter0_d_988_94474" x="0.559999" y="0.48" width="50.88" height="50.88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n                            <feOffset dy="1.92"/>\n                            <feGaussianBlur stdDeviation="6.72"/>\n                            <feComposite in2="hardAlpha" operator="out"/>\n                            <feColorMatrix type="matrix" values="0 0 0 0 0.791667 0 0 0 0 0.791667 0 0 0 0 0.791667 0 0 0 0.25 0"/>\n                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_988_94474"/>\n                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_988_94474" result="shape"/>\n                            </filter>\n                            </defs>\n                      </svg>'] = "tradeSocialBuy",
            n[n.tradeSocialSell = '<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <g filter="url(#filter0_d_988_94480)">\n                            <circle cx="26" cy="24" r="12" fill="white"/>\n                            <circle cx="26" cy="24" r="11.52" stroke="#F25555" stroke-width="0.96"/>\n                            </g>\n                            <path d="M30.9969 29.5204C30.7349 29.5229 30.4821 29.4244 30.2913 29.2455C30.199 29.1559 30.1255 29.0489 30.0753 28.9307C30.025 28.8125 29.9989 28.6855 29.9986 28.5571V24.0679C29.9987 23.8749 29.9598 23.6839 29.8844 23.5062C29.809 23.3285 29.6985 23.1678 29.5595 23.0335C29.2741 22.759 28.8931 22.6057 28.4965 22.6057C28.1 22.6057 27.7189 22.759 27.4335 23.0335C27.2948 23.1684 27.1846 23.3295 27.1092 23.5075C27.0338 23.6854 26.9947 23.8766 26.9944 24.0697V28.4654C27.0043 28.5986 26.9864 28.7323 26.9419 28.8583C26.8959 28.986 26.8238 29.1029 26.7301 29.2014C26.6364 29.2999 26.5232 29.378 26.3977 29.4306C26.2711 29.4834 26.1352 29.5106 25.998 29.5106C25.8608 29.5106 25.7249 29.4834 25.5983 29.4306C25.473 29.3773 25.36 29.299 25.2662 29.2006C25.1725 29.1027 25.1008 28.986 25.056 28.8583C25.0097 28.7328 24.9918 28.5986 25.0035 28.4654V24.0697C24.9832 23.6102 25.0593 23.1515 25.2268 22.723C25.3953 22.2912 25.6508 21.8984 25.9774 21.5689C26.3032 21.238 26.6916 20.9748 27.1201 20.7945C27.555 20.6136 28.0216 20.5205 28.4928 20.5205C28.964 20.5205 29.4305 20.6136 29.8654 20.7945C30.3003 20.9745 30.6942 21.2404 31.0232 21.5763C31.3498 21.9059 31.6052 22.2987 31.7737 22.7304C31.9404 23.1593 32.0164 23.6178 31.997 24.0772V28.5477C31.9979 28.6779 31.9722 28.8068 31.9215 28.9267C31.8709 29.0466 31.7964 29.1551 31.7024 29.2455C31.5121 29.4251 31.259 29.5237 30.9969 29.5204Z" fill="#F25555"/>\n                            <path d="M28.504 20.0205C28.7511 20.0197 28.9923 19.9457 29.1974 19.8079C29.4024 19.67 29.562 19.4745 29.656 19.2461C29.75 19.0176 29.7742 18.7664 29.7255 18.5242C29.6768 18.282 29.5574 18.0596 29.3825 17.8852C29.2075 17.7108 28.9848 17.5921 28.7424 17.5442C28.5 17.4963 28.2489 17.5213 28.0207 17.616C27.7925 17.7108 27.5976 17.871 27.4604 18.0765C27.3232 18.2819 27.25 18.5234 27.25 18.7705C27.2497 18.9351 27.282 19.0981 27.345 19.2501C27.408 19.4021 27.5004 19.5402 27.6169 19.6564C27.7335 19.7726 27.8719 19.8646 28.0241 19.927C28.1764 19.9895 28.3395 20.0213 28.504 20.0205Z" fill="#F25555"/>\n                            <path d="M26.0009 29.5163C25.7379 29.5165 25.4851 29.4136 25.2961 29.2294C25.2036 29.1397 25.13 29.0322 25.0797 28.9131C25.0295 28.7941 25.0036 28.6661 25.0037 28.5368V24.1016C25.003 23.9066 24.9637 23.7137 24.8881 23.5341C24.8124 23.3546 24.702 23.1921 24.5632 23.056C24.2781 22.7791 23.8974 22.6244 23.5013 22.6244C23.1052 22.6244 22.7246 22.7791 22.4395 23.056C22.3007 23.1921 22.1903 23.3546 22.1146 23.5341C22.039 23.7137 21.9997 23.9066 21.999 24.1016V28.4688C22.0122 28.6729 21.9616 28.8759 21.8543 29.0495C21.7471 29.2232 21.5886 29.3587 21.4011 29.437C21.2751 29.4921 21.1392 29.5205 21.0018 29.5205C20.8645 29.5205 20.7286 29.4921 20.6026 29.437C20.4143 29.3594 20.2551 29.2242 20.1474 29.0504C20.0398 28.8766 19.9892 28.6732 20.0028 28.4688V24.1016C19.9841 23.6379 20.0606 23.1753 20.2277 22.7427C20.396 22.3071 20.6512 21.9108 20.9774 21.5783C21.3054 21.2421 21.6975 20.9763 22.1302 20.7969C22.5646 20.6145 23.0306 20.5205 23.5013 20.5205C23.972 20.5205 24.4381 20.6145 24.8725 20.7969C25.304 20.9775 25.6953 21.2432 26.0234 21.5783C26.3496 21.9108 26.6048 22.3071 26.7731 22.7427C26.9396 23.1754 27.0155 23.638 26.9962 24.1016V28.5368C26.9963 28.6661 26.9704 28.7941 26.9202 28.9131C26.8699 29.0322 26.7963 29.1397 26.7038 29.2294C26.515 29.4128 26.2632 29.5156 26.0009 29.5163Z" fill="#F25555"/>\n                            <path d="M23.504 20.0205C23.7511 20.0197 23.9924 19.9457 24.1974 19.8079C24.4024 19.67 24.562 19.4745 24.656 19.2461C24.75 19.0176 24.7742 18.7664 24.7255 18.5242C24.6768 18.282 24.5574 18.0596 24.3825 17.8852C24.2075 17.7108 23.9848 17.5921 23.7424 17.5442C23.5 17.4963 23.2489 17.5213 23.0207 17.616C22.7925 17.7108 22.5976 17.871 22.4604 18.0765C22.3232 18.2819 22.25 18.5234 22.25 18.7705C22.2497 18.9351 22.282 19.0981 22.345 19.2501C22.408 19.4021 22.5004 19.5402 22.6169 19.6564C22.7335 19.7726 22.8719 19.8646 23.0241 19.927C23.1764 19.9895 23.3395 20.0213 23.504 20.0205Z" fill="#F25555"/>\n                            <defs>\n                            <filter id="filter0_d_988_94480" x="0.559999" y="0.48" width="50.88" height="50.88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n                            <feOffset dy="1.92"/>\n                            <feGaussianBlur stdDeviation="6.72"/>\n                            <feComposite in2="hardAlpha" operator="out"/>\n                            <feColorMatrix type="matrix" values="0 0 0 0 0.791667 0 0 0 0 0.791667 0 0 0 0 0.791667 0 0 0 0.25 0"/>\n                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_988_94480"/>\n                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_988_94480" result="shape"/>\n                            </filter>\n                            </defs>\n                       </svg>'] = "tradeSocialSell"
        }(e || (e = {}))
    },
    538: function(n, t, l) {
        "use strict";
        var e = l(2);
        l.d(t, "a", function() {
            return a
        });
        var s = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , a = function() {
            function n() {}
            return n.prototype.transform = function(n) {
                return n ? n.charAt(0).toUpperCase() + n.slice(1) : ""
            }
            ,
            n = s([l.i(e.Pipe)({
                name: "titlecase"
            })], n)
        }()
    },
    539: function(n, t, l) {
        "use strict";
        l.d(t, "a", function() {
            return e
        });
        var e = function() {
            function n() {}
            return n
        }()
    },
    543: function(n, t, l) {
        "use strict";
        l.d(t, "b", function() {
            return e
        }),
        l.d(t, "c", function() {
            return s
        }),
        l.d(t, "a", function() {
            return a
        });
        var e;
        !function(n) {
            n.Validation = "validation",
            n.System = "system",
            n.Network = "network"
        }(e || (e = {}));
        var s;
        !function(n) {
            n.Debug = "debug",
            n.Info = "info",
            n.Warning = "warning",
            n.Error = "error",
            n.Critical = "critical"
        }(s || (s = {}));
        var a = function() {
            function n(n) {
                this.code = "",
                this.message = "",
                this.data = {},
                this.source = n.source,
                this.type = n.type,
                this.code = n.code,
                this.severity = n.severity,
                this.message = n.message || "",
                this.data = n.data || {}
            }
            return n
        }()
    },
    621: function(n, t) {
        n.exports = ' <div class=asset-info-pandats> <div class="row-pandats infoHeader-pandats"> <div class="col-pandats col-100-pandats"> <span class="title-pandats font-15-pandats">{{translation.information}}</span> </div> </div> <div class=row-pandats> <div class="col-pandats col-100-pandats"> <div class=row-pandats> <div class="col-pandats col-50-pandats infoColumn-pandats left"> <div class="row-pandats infoRow-pandats font-12-pandats"> <div class=rowTitle-pandats>{{translation.base_asset}}</div> <div class=rowValue-pandats>{{selectedAsset.currency}}</div> </div> <div class="row-pandats infoRow-pandats font-12-pandats"> <div class=rowTitle-pandats>{{translation.quote_asset}}</div> <div class=rowValue-pandats>{{selectedAsset.s}}</div> </div> <div class="row-pandats infoRow-pandats font-12-pandats"> <div class=rowTitle-pandats>{{translation.leverage}}</div> <div class=rowValue-pandats>1:{{leverage()}}</div> </div> <div class="row-pandats infoRow-pandats font-12-pandats"> <div class=rowTitle-pandats>{{translation.spread}}</div> <div class=rowValue-pandats *ngif="selectedAsset.spread > 0">{{selectedAsset.spreadCalc()}} {{translation.points}}</div> <div class=rowValue-pandats *ngif="selectedAsset.spread <= 0">{{translation.floating}}</div> </div> <div class="row-pandats infoRow-pandats font-12-pandats"> <div class=rowTitle-pandats>{{translation.spread}} %</div> <div class=rowValue-pandats>{{spreadPercent() | number:\'.2-2\'}}%</div> </div> <div class="row-pandats infoRow-pandats font-12-pandats"> <div class=rowTitle-pandats>{{translation.digits}}</div> <div class=rowValue-pandats>{{selectedAsset.digits}}</div> </div> <div class="row-pandats infoRow-pandats font-12-pandats"> <div class=rowTitle-pandats>{{translation.lot_value}}</div> <div class=rowValue-pandats>{{selectedAsset.contractSize}} {{selectedAsset.unit}}</div> </div> </div> <div class="col-pandats col-50-pandats infoColumn-pandats right"> <div class="row-pandats infoRow-pandats font-12-pandats"> <div class=rowTitle-pandats>{{translation.min_max_volume}}</div> <div class=rowValue-pandats>{{selectedAsset.minLot}}-{{selectedAsset.maxLot}}</div> </div> <div class="row-pandats infoRow-pandats font-12-pandats"> <div class=rowTitle-pandats>{{translation.volume_step}}</div> <div class=rowValue-pandats>{{selectedAsset.stepLot}}</div> </div> <div class="row-pandats infoRow-pandats font-12-pandats"> <div class=rowTitle-pandats>{{translation.required_margin_buy}}</div> <div class=rowValue-pandats> <span>{{requiredMargin().ask | currency:selectedAsset.currency:true}}</span> <span *ngif="user.currency!==selectedAsset.currency"> (<span>{{requiredMargin().askCurrency | currency:user.currency:true}}</span>) </span> </div> </div> <div class="row-pandats infoRow-pandats font-12-pandats"> <div class=rowTitle-pandats>{{translation.required_margin_sell}}</div> <div class=rowValue-pandats> <span>{{requiredMargin().bid | currency:selectedAsset.currency:true}}</span> <span *ngif="user.currency!==selectedAsset.currency"> (<span>{{requiredMargin().bidCurrency | currency:user.currency:true}}</span>) </span> </div> </div> <div class="row-pandats infoRow-pandats font-12-pandats"> <div class=rowTitle-pandats>{{translation.swap_buy}}</div> <div class=rowValue-pandats> COMMENTED <span *ngif="swaps().long !== 0 && user.currency!==selectedAsset.currency"> COMMENTED </span> </div> </div> <div class="row-pandats infoRow-pandats font-12-pandats"> <div class=rowTitle-pandats>{{translation.swap_sell}}</div> <div class=rowValue-pandats> COMMENTED <span *ngif="swaps().short !== 0 && user.currency!==selectedAsset.currency"> COMMENTED </span> </div> </div> <div class="row-pandats infoRow-pandats font-12-pandats"> <div class=rowTitle-pandats>{{translation.minimum_change}}</div> <div class=rowValue-pandats> {{minChange()}} </div> </div> </div> </div> </div> </div> <div class="row-pandats infoHeader-pandats"> <div class="col-pandats col-100-pandats"> <span class="title-pandats font-15-pandats">{{translation.trading_hours}}</span> </div> </div> <div class=row-pandats> <div class="col-pandats col-50-pandats infoColumn-pandats times-pandats"> <div class="row-pandats infoRow-pandats font-12-pandats" *ngfor="let day of tradingTimes()"> <div class="rowTitle-pandats row-center-pandats">{{translation.daysOfWeek[constants.daysOfWeek[day]]}}</div> <div class=rowValue-pandats> <span *ngfor="let range of tradingTimesFormat[day]"> <span>{{range}}</span> </span> </div> </div> </div> </div> </div> '
    },
    622: function(n, t) {
        n.exports = '<div class="asset-item-pandats layout-row"> <div class=logo-pandats> <span *ngif="asset.category===\'FOREX\' || asset.category===\'CRYPTO\'"> <span class="flag-pandats flag-icon-pandats" [ngclass]=asset.flagLeft></span> <span class="flag-pandats flag-icon-pandats" [ngclass]=asset.flagRight></span> </span> <span *ngif="!(asset.category===\'FOREX\' || asset.category===\'CRYPTO\')"> <span class="flag3-pandats flag-icon-pandats flagEmpty-pandats" [ngclass]=asset.flag></span> </span> </div> <div class="name-pandats font15-pandats line-height20-pandats">{{asset.outputName}}</div> <div class="price-pandats font15-pandats line-height20-pandats" [ngclass]=asset.bidDirection>{{asset.markupBid() | number:asset.digitsFormat}}</div> <div class="price-pandats font15-pandats line-height20-pandats" [ngclass]=asset.askDirection>{{asset.markupAsk() | number:asset.digitsFormat}}</div> <div class="daily-change-pandats font15-pandats line-height20-pandats" [ngclass]=asset.dailyChangeRender()>{{asset.dailyChange() | number:\'1.2-2\'}}%</div> <div class="favorite font22-pandats line-height09-pandats" (click)=toggleFavorite()> <i class=icon [ngclass]=\'{"cmicon-star-empty": !asset.isFavorite, "cmicon-star-full": asset.isFavorite}\'></i> </div> </div> '
    },
    623: function(n, t) {
        n.exports = '<div class="asset-list-wrapper pfdin-text-universal-pandats"> <div class=search-wrapper-pandats> <input type=text [formcontrol]=search class="search-pandats font14-pandats" placeholder={{translation.searchAssetsPlaceholder}} maxlength=10> <i class="icon-pandats cmicon-search font16-pandats"></i> </div> <div *ngif="search.value && search.value.length >= 2"> <div class=category-pandats>{{translation.search_results}}:</div> <perfect-scrollbar class=container-pandats> <ul class="category-assets-pandats search-assets-pandats"> <li *ngfor="let asset of assets; trackBy: trackByFn" [@fadeinout] (click)=setAsset(asset) [ngclass]="{\'selected-pandats\': selectedAsset.id === asset.id}"> <asset-item [asset]=asset [transitionstate]=transitionState class="layout-column full-height centered-content"></asset-item> </li> </ul> </perfect-scrollbar> </div> <perfect-scrollbar class=container-pandats> <ul *ngif="!search.value || search.value.length < 2" class=layout-column> <li *ngfor="let category of categories" class=layout-row> <div class="layout-column full-width"> <div class=layout-row> <div (click)=changeCategory(category) class="category-pandats layout-column centered-content"> <div class="layout-row full-width"> <div class=layout-column> <i class=icon-pandats [ngclass]="\'cmicon-\' + category.name"></i> </div> <div class="layout-column name-pandats font18-pandats shrinkable">{{translation[category.name]}}</div> <div class=layout-column> <i class="icon-pandats icon-action-pandats cmicon-circle-up self-to-end" [ngclass]="{\'expanded\': category===activeCategory && !category.collapsed}"></i> </div> </div> </div> </div> <div class=layout-row *ngif="category.assets && category.assets.length > 0" [hidden]=category.collapsed> <div class="category-titles-pandats layout-column centered-content"> <div class="layout-row full-width"> <div class=font12-pandats>{{translation.assetsTitles.product_name}}</div> <div class=font12-pandats>{{translation.assetsTitles.bid}}</div> <div class=font12-pandats>{{translation.assetsTitles.ask}}</div> <div class=font12-pandats>{{translation.assetsTitles.change}}</div> <div class=font12-pandats>{{translation.assetsTitles.fav}}</div> </div> </div> </div> <div class=layout-row> <ul class="category-assets-pandats layout-column" *ngif="category.assets && category.assets.length > 0" [hidden]=category.collapsed> <li *ngfor="let asset of category.assets; trackBy: trackByFn" [ngclass]="{\'selected-pandats\': selectedAsset.id === asset.id}" class=layout-row (click)=setAsset(asset)> <asset-item [asset]=asset [transitionstate]=transitionState class="layout-column full-width centered-content"></asset-item> <div class="symbol-opening-pandats layout-column just-center" *ngif="selectedAsset.id === asset.id && (tradeTime || marketClosed)"> <div class=symbol-opening-i-pandats></div> <div class=symbol-opening-title-pandats> <div *ngif=!marketClosed> {{translation.openTradingTimes.opening}} <span *ngif=tradeTime.days> {{tradeTime.days}} {{translation.openTradingTimes.day}} </span> {{tradeTime.hours}} {{translation.openTradingTimes.hour}} {{tradeTime.minutes}} {{translation.openTradingTimes.minute}} <span *ngif=!tradeTime.days> {{tradeTime.seconds}} {{translation.openTradingTimes.second}} </span> </div> <div *ngif=marketClosed> {{translation.openTradingTimes.marketClosed}} </div> </div> </div> </li> </ul> </div> </div> </li> </ul> </perfect-scrollbar> </div> '
    },
    624: function(n, t) {
        n.exports = "<wc-panda-chart #chart></wc-panda-chart> "
    },
    625: function(n, t) {
        n.exports = "<ul class=tabs-content-pandats> <li class=\"tab-item-pandats chartTab\" [ngclass]=\"{'not-visible-pandats':activeTab.name!=='chart'}\"> <chart [chartconfig]=pandaChartConfig></chart> </li> </ul> "
    },
    626: function(n, t) {
        n.exports = "<td class=td-7-pandats> #{{trade.orderId}} </td> <td class=td-10-pandats> <div class=history-time-pandats> <span>{{trade.openTime | momentPipe:'DD/MM/YYYY':timezone*60-serverTimeService.serverTimezone*60}}</span> <span>{{trade.openTime | momentPipe:'HH:mm:ss':timezone*60-serverTimeService.serverTimezone*60}}</span> </div> </td> <td class=td-7-pandats> {{trade.outputName}} </td> <td class=td-5-pandats> {{translation.actionsId[trade.action]}} </td> <td class=td-7-pandats> {{trade.lots}} </td> <td class=td-7-pandats> {{trade.openPrice | number:trade.asset.digitsFormat}} </td> <td class=td-7-pandats> {{trade.closePrice | number:trade.asset.digitsFormat }} </td> <td class=td-10-pandats> <div class=history-time-pandats> <span>{{trade.closeTime | momentPipe:'DD/MM/YYYY'}}</span> <span>{{trade.closeTime | momentPipe:'HH:mm:ss'}}</span> </div> </td> <td class=td-8-pandats> <span *ngif=trade.stopLoss>{{trade.stopLoss| number:trade.asset.digitsFormat}}</span> <span *ngif=!trade.stopLoss>N/A</span> </td> <td class=td-8-pandats> <span *ngif=trade.takeProfit>{{trade.takeProfit| number:trade.asset.digitsFormat}}</span> <span *ngif=!trade.takeProfit>N/A</span> </td> <td class=td-8-pandats> {{trade.commission | currency:user.currency:true}} </td> <td class=td-8-pandats> {{trade.swap|currency:user.currency:true}} </td> <td class=td-8-pandats [ngclass]=\"{'up-pandats': trade.profit > 0, 'down-pandats': trade.profit < 0}\"> {{trade.profit | currency:user.currency:true}} </td> "
    },
    627: function(n, t) {
        n.exports = '<div class=date-range-picker-pandats *ngif="type===\'popup\'"> <custom-select [items]=dateRanges [(ngmodel)]=dateRange [config]=dateRangesConfig name=dateRange (ngmodelchange)=updateTrades()> </custom-select> </div> <div class=tab-wrapper-pandats> <table class=table-headers-pandats> <thead> <tr> <th *ngfor="let title of tradeTitles" class=th-pandats [ngclass]="[\'td-\' + title.width + \'-pandats\', \'title-\' + title.id]" (click)=sortBy(title)> {{translation[title.id]}} </th> </tr> </thead> </table> <div class="table-items-pandats history-popup-content-pandats"> <spinner [isshow]=isLoading [isbackdrop]=false></spinner> <div class=error-pandats *ngif=isError> {{translation.no_trade_history}} </div> <perfect-scrollbar *ngif="!(isLoading && isError)"> <div class=tbody-wrap-pandats [ngclass]="{\'long-list-pandats\':type===\'popup\'}"> <table> <tr *ngfor="let trade of trades | paginate: {\n                            itemsPerPage: perPage,\n                            currentPage: currentPage,\n                            totalItems: allCount\n                        }" class=trade-item-pandats> <closed-trade [trade]=trade></closed-trade> </tr> </table> </div> </perfect-scrollbar> </div> <div class=pagination-pandats *ngif="type===\'popup\'"> <pagination-controls previouslabel={{translation.previous}} nextlabel={{translation.next}} maxsize=10 (pagechange)="currentPage = $event"> </pagination-controls> </div> </div> '
    },
    628: function(n, t) {
        n.exports = '<div *ngif=isShow> <div class=backdrop-pandats></div> <div class="popup-wrapper-pandats helvetica-neue-pandats layout-column" [@fadeinout]> <spinner [isshow]=showSpinner></spinner> <toast [content]=toastContent [status]=toastStatus></toast> <div class="title-popup-pandats layout-row"> <div class=title-pandats *ngif="trade.actionCode < 2">{{translation.close_trade}} #{{trade.orderId}}</div> <div class=title-pandats *ngif="trade.actionCode > 1">{{translation.delete_trade}} #{{trade.orderId}}</div> <div class=close-popup-pandats (click)=close()> <i class="icon-pandats cmicon-cancel"></i> </div> </div> <div class="subtitle-popup-pandats layout-row message-pandats"> {{translation.want_to_close_trade}} </div> <div class="content-wrapper-pandats layout-row" *ngif="trade.actionCode < 2"> <div class="layout-column semi-width just-center"> <div class="layout-row just-center"> <div class=layout-column> <div class="title-pandats layout-row just-center"> {{translation.closePrice}} </div> <div class="value-pandats layout-row just-center" [ngclass]="{\n                            \'up-pandats\': trade.action===\'buy\' || trade.action===\'buy_stop\' || trade.action===\'buy_limit\',\n                            \'down-pandats\': trade.action===\'sell\' || trade.action===\'sell_stop\' || trade.action===\'sell_limit\'\n                        }"> {{trade.closePrice() | number:trade.asset.digitsFormat }} </div> </div> </div> </div> <div class="layout-column semi-width just-center"> <div class="layout-row just-center"> <div class=layout-column> <div class="title-pandats layout-row just-center"> {{translation.profit}} </div> <div class="value-pandats layout-row just-center" [ngclass]="{\'up-pandats\': trade.profit > 0, \'down-pandats\': trade.profit < 0}"> {{trade.profit | currency:user.currency:true}} </div> </div> </div> </div> </div> <div class="footer-popup-pandats layout-row" *ngif="trade.actionCode < 2"> <div class=tr-row-pandats> <button class="invest-pandats forex-button-pandats simple-button-pandats decent" (click)=close()>{{translation.no}} </button> <button class="invest-pandats forex-button-pandats simple-button-pandats accent" (click)=onSubmit()>{{translation.yes}} </button> </div> </div> <div class="content-wrapper-pandats layout-row" *ngif="trade.actionCode > 1"> <div class="tr-row-pandats message-pandats"> {{translation.delete_trade}} ? </div> </div> <div class="footer-popup-pandats layout-row" *ngif="trade.actionCode > 1"> <div class=tr-row-pandats> <button class="invest-pandats forex-button-pandats simple-button-pandats decent" (click)=close()>{{translation.no}} </button> <button class="invest-pandats forex-button-pandats simple-button-pandats accent" (click)=deleteTrade()> {{translation.yes}} </button> </div> </div> <popup (ishide)=close() [data]=popup.data [state]=popup.state *ngif=popup.show></popup> </div> </div> <modal [state]=requoteState [config]=requotePopupConfig (onclose)=closeRequotePopup() *ngif=trade> <header>{{translation.close_position_requote}}</header> <div class=section-subtitle> <div class="row-pandats trade-info-pandats"> <div class=col-pandats> <div class=requote-title-price-pandats>{{translation.asset_name}}:</div> <div class=requote-value-price-pandats>{{trade.asset.outputName}}</div> </div> <div class=col-pandats> <div class=requote-title-price-pandats>{{translation.direction}}</div> <div class=requote-value-price-pandats>{{translation[trade.action]}}</div> </div> <div class=col-pandats> <div class=requote-title-price-pandats>{{translation.openPrice}}</div> <div class=requote-value-price-pandats>{{trade.openPrice}}</div> </div> </div> </div> <section> <div class=requote-text-pandats> <p>{{translation.price_changed}}.</p> <p>{{translation.want_to_close}}</p> </div> <div class=row-pandats> <div class=col-pandats> <div *ngif="trade.action === \'sell\' || trade.action === \'sell_limit\' || trade.action===\'sell_stop\'" class=requote-value-price-pandats [ngclass]=trade.asset.askDirection> {{trade.asset.markupAsk() | number:trade.asset.digitsFormat}} </div> <div *ngif="trade.action === \'buy\' || trade.action === \'buy_limit\' || trade.action===\'buy_stop\'" class=requote-value-price-pandats [ngclass]=trade.asset.bidDirection> {{trade.asset.markupBid() | number:trade.asset.digitsFormat}} </div> <div class=requote-title-price-pandats>{{translation.current_rate}}</div> </div> <div class=col-pandats> <div class=requote-value-margin-pandats [ngclass]="{\'up-pandats\': trade.profit > 0, \'down-pandats\': trade.profit < 0}">{{trade.profit | currency:user.currency:true }}</div> <div class=requote-title-margin-pandats>{{translation.profit}}</div> </div> </div> </section> <footer> <div class="layout-row content-pushed22"> <div class="layout-column semi-width"> <button class="forex-button-pandats short-button-pandats decent" (click)=closeRequotePopup()>{{translation.cancel}}</button> </div> <div class="layout-column semi-width"> <button class="forex-button-pandats short-button-pandats accent" (click)=onSubmit()>{{translation.accept_changes}}</button> </div> </div> </footer> </modal> '
    },
    629: function(n, t) {
        n.exports = '<div class="tr-row-pandats between icons-pandats space-between-pandats"> <div class=trade-bear-pandats> <span class="icon-pandats cmicon-bearish_icon"></span> </div> <div class=trade-bull-pandats> <span class="icon-pandats cmicon-bullish_icon"></span> </div> </div> <div class="tr-row-pandats trade-line-pandats"> <div class=bear-line-pandats [ngstyle]="{\'width.%\':bear}"></div> <div class=bull-line-pandats [ngstyle]="{\'width.%\':100-bear}"></div> </div> <div class="tr-row-pandats between-pandats alg-center-pandats"> <div class="trend-pandats tredn-bear-pandats">{{bear}}%</div> <div>{{translation.traders_trend}}</div> <div class="trend-pandats tredn-bull-pandats">{{100-bear}}%</div> </div> '
    },
    630: function(n, t) {
        n.exports = '<perfect-scrollbar class=container-pandats> <form class=layout-column> <div class="volume-wrapper layout-row"> <div class="layout-column full-width"> <div class="component-title layout-row between-pandats just-start"> <div class=amount-title-pandats>{{selectedAsset.outputName}}</div> </div> <div class="layout-row form-group-pandats"> <input type=text name=value autocomplete=off [(ngmodel)]=investAmount.value [textmask]="{mask: validators.amount, guide:false}" maxlength=5 (ngmodelchange)=updateAmount() class="full-width font14-pandats"> <custom-select [items]=amountSteps [(ngmodel)]=amountStep name=amountStep (ngmodelchange)=selectAmount()> </custom-select> </div> <div class="layout-row between-pandats title-val-pair"> <div>{{translation.pipsValue}}:</div> <div>{{pipValue() | currency:user.currency:true }}</div> </div> <div class="layout-row between-pandats title-val-pair"> <div>{{translation.requiredMargin}}:</div> <div>{{requiredMargin() | currency:user.currency:true }}</div> </div> </div> </div> <div class="layout-row between-pandats btn-panel-pandats"> <div class="btn-pandats sell-pandats layout-column" [ngclass]="{\'sell-active-pandats\': (action === \'sell\' || action === \'sell_limit\' || action===\'sell_stop\')}" (click)="setAction(\'sell\')"> <div class="layout-row full-width just-center content-pushed10"> <i class="icon-pandats cmicon-sell_icon"></i> <div class="btn-title-pandats font20-pandats line-height16-pandats"> {{translation.sell}} </div> </div> <div class="btn-value-pandats layout-row font20-pandats make-bold full-width just-center" *ngif=selectedAsset> {{selectedAsset.markupBid() | number:selectedAsset.digitsFormat}} </div> </div> <div class="btn-pandats buy-pandats layout-column" [ngclass]="{\'buy-active-pandats\': (action ===\'buy\' || action ===\'buy_limit\' || action===\'buy_stop\')}" (click)="setAction(\'buy\')"> <div class="layout-row full-width just-center content-pushed10"> <i class="icon-pandats cmicon-buy_icon"></i> <div class="btn-title-pandats font20-pandats line-height16-pandats"> {{translation.buy}} </div> </div> <div class="btn-value-pandats layout-row font20-pandats make-bold full-width just-center" *ngif=selectedAsset> {{selectedAsset.markupAsk() | number:selectedAsset.digitsFormat}} </div> </div> </div> <div class=tr-row-pandats> <button class="invest-pandats font20-pandats" [disabled]=!validate() (click)=onSubmit()>{{translation.trade}}</button> </div> <div class=layout-row> <div class="rate-is-pandats layout-column full-width"> <div class="advanced-checkbox rate-is layout-row"> <input type=checkbox id=rate autocomplete=off [disabled]=!action [checked]=reach.checked (change)=toggleReach()> <label for=rate class="font12-pandats full-height line-height16-pandats" [ngclass]="{\'inactive-pandats\': !reach.checked}">{{translation.open_trade_when}}</label> </div> <div *ngif=reach.checked class="layout-row rate-reach-container font12-pandats"> <custom-input name=rateReach [(ngmodel)]=reach.value (ngmodelchange)=updateReach($event) [validator]="{mask: \'rate\', limit: selectedAsset.digits}" [buttons]="{visible: true}" maxlength=8> </custom-input> </div> </div> </div> <div class="advanced-pandats font12-pandats"> <div class="hidePanel-pandats layout-column"> <div class="advanced-checkbox-wrapper layout-row content-pushed22"> <div class="advanced-checkbox semi-width full-height"> <input type=checkbox id=st-ls autocomplete=off [checked]=stopLoss.checked [disabled]="!action || user.amf" (change)=toggleStopLoss()> <label class="full-height line-height16-pandats" [ngclass]="{\'inactive-pandats\': !stopLoss.checked}" for=st-ls>{{translation.stop_Loss}}</label> </div> <div class="advanced-checkbox semi-width full-height"> <input type=checkbox id=tk-pr-pandats autocomplete=off [checked]=takeProfit.checked [disabled]=!action (change)=toggleTakeProfit()> <label [ngclass]="{\'inactive-pandats\': !takeProfit.checked}" class="tp-pandats full-height line-height16-pandats" for=tk-pr-pandats> {{translation.takeProfit}} </label> </div> </div> <div class="between-pandats layout-row content-pushed22"> <div class="layout-column semi-width"> <div class="layout-row content-pushed06"> <div class="layout-column centered-content">{{translation.pips}}</div> <div class="layout-column centered-content"> <custom-input [disabled]=!stopLoss.checked name=stopLossPips [(ngmodel)]=stopLoss.pips.value (ngmodelchange)=updateStopLoss() (getfocus)="lockStopLoss(\'pips\')" [isclass]="{\'locked-pandats\': stopLoss.pips.lock}" [validator]="{mask: \'number\'}" [buttons]="{visible: true}" maxlength=7></custom-input> </div> </div> </div> <div class="layout-column semi-width"> <div class="layout-row content-pushed06"> <div class="layout-column centered-content">{{translation.pips}}</div> <div class="layout-column centered-content"> <custom-input [disabled]=!takeProfit.checked name=takeProfitPips [(ngmodel)]=takeProfit.pips.value (ngmodelchange)=updateTakeProfit() (getfocus)="lockTakeProfit(\'pips\')" [isclass]="{\'locked-pandats\': takeProfit.pips.lock}" [validator]="{mask: \'number\'}" [buttons]="{visible: true}" maxlength=7> </custom-input> </div> </div> </div> </div> <div class="between-pandats layout-row content-pushed22"> <div class="layout-column semi-width"> <div class="layout-row content-pushed06"> <div class="layout-column centered-content">{{translation.price}}</div> <div class="layout-column centered-content"> <custom-input [disabled]=!stopLoss.checked name=stopLossRate [(ngmodel)]=stopLoss.rate.value (ngmodelchange)=updateStopLoss() (getfocus)="lockStopLoss(\'rate\')" [isclass]="{\'locked-pandats\': stopLoss.rate.lock}" [validator]="{mask: \'rate\', limit: selectedAsset.digits}" [buttons]="{visible: true}" maxlength=8> </custom-input> </div> </div> </div> <div class="layout-column semi-width"> <div class="layout-row content-pushed06"> <div class="layout-column centered-content">{{translation.price}}</div> <div class="layout-column centered-content"> <custom-input [disabled]=!takeProfit.checked name=takeProfitRate [(ngmodel)]=takeProfit.rate.value (ngmodelchange)=updateTakeProfit() (getfocus)="lockTakeProfit(\'rate\')" [isclass]="{\'locked-pandats\': takeProfit.rate.lock}" [validator]="{mask: \'rate\', limit: selectedAsset.digits}" [buttons]="{visible: true}" maxlength=8> </custom-input> </div> </div> </div> </div> <div class="between-pandats layout-row content-pushed22"> <div class="layout-column semi-width"> <div class="layout-row content-pushed06"> <div class="layout-column centered-content">{{translation.value}}</div> <div class="layout-column centered-content full-width" [ngclass]="{\'disabled-pandats\': !stopLoss.checked}"> <div *ngif=stopLoss.checked class="full-width loss-profit-value centered-content line-height20-pandats"> {{calcLossValue() | currency:user.currency:true}} </div> </div> </div> </div> <div class="layout-column semi-width"> <div class="layout-row content-pushed06"> <div class="layout-column centered-content">{{translation.value}}</div> <div class="layout-column centered-content full-width" [ngclass]="{\'disabled-pandats\': !takeProfit.checked}"> <div *ngif=takeProfit.checked class="full-width loss-profit-value centered-content line-height20-pandats"> {{calcProfitValue() | currency:user.currency:true}} </div> </div> </div> </div> </div> </div> </div> <div class=funds-popup-pandats *ngif="popup.errorCode && popup.errorCode == \'134\'"> <div class=backdrop-pandats></div> <div class=funds-content-pandats> <div class="close-pandats cmicon-close4" (click)="popup.errorCode=false"></div> <div class=funds-title-pandats> {{translation.insufficient_funds}} </div> <div class=funds-text-pandats> <div [innerhtml]=translation.your_available_funds></div> </div> <button class="forex-button-pandats simple-button-pandats" (click)=deposit()>{{translation.deposit}}</button> </div> </div> <popup (ishide)=popupHide() [data]=popup.data [state]=popup.state *ngif=popup.show> </popup> </form> </perfect-scrollbar> <modal [state]=requoteState [config]=requotePopupConfig (onclose)=closeRequotePopup()> <header>{{translation.open_position_requote}}</header> <div class=section-subtitle> <div class="row-pandats trade-info-pandats" *ngif=tradeToSend> <div class=col-pandats> <div class=requote-title-price-pandats>{{translation.asset_name}}:</div> <div class=requote-value-price-pandats>{{selectedAsset.outputName}}</div> </div> <div class=col-pandats> <div class=requote-title-price-pandats>{{translation.direction}}</div> <div class=requote-value-price-pandats>{{translation[constants.actionsId[tradeToSend.Cmd]]}}</div> </div> <div class=col-pandats> <div class=requote-title-price-pandats>{{translation.entry_price}}</div> <div class=requote-value-price-pandats>{{tradeToSend.OpenPrice}}</div> </div> </div> </div> <section> <div class=requote-text-pandats> <p>{{translation.price_changed}}.</p> <p>{{translation.want_to_open}}</p> </div> <div class=row-pandats> <div class=col-pandats> <div *ngif="action === \'sell\' || action === \'sell_limit\' || action===\'sell_stop\'" class=requote-value-price-pandats [ngclass]=selectedAsset.bidDirection> {{selectedAsset.markupBid() | number:selectedAsset.digitsFormat}} </div> <div *ngif="action === \'buy\' || action === \'buy_limit\' || action===\'buy_stop\'" class=requote-value-price-pandats [ngclass]=selectedAsset.askDirection> {{selectedAsset.markupAsk() | number:selectedAsset.digitsFormat}} </div> <div class=requote-title-price-pandats>{{translation.current_rate}}</div> </div> <div class=col-pandats> <div class=requote-value-margin-pandats>{{requiredMargin() | currency:user.currency:true }}</div> <div class=requote-title-margin-pandats>{{translation.requiredMargin}}</div> </div> </div> </section> <footer> <div class="layout-row content-pushed22"> <div class="layout-column semi-width"> <button class="forex-button-pandats short-button-pandats decent" (click)=closeRequotePopup()>{{translation.cancel}}</button> </div> <div class="layout-column semi-width"> <button class="forex-button-pandats short-button-pandats accent" (click)=onSubmit()>{{translation.accept_changes}}</button> </div> </div> </footer> </modal> '
    },
    631: function(n, t) {
        n.exports = '<td class=td-7-pandats> #{{trade.orderId}} </td> <td class=td-10-pandats> {{trade.openTime | momentPipe:\'DD/MM/YYYY HH:mm:ss\':timezone*60-serverTimeService.serverTimezone*60}} </td> <td class=td-7-pandats> {{trade.outputName}} </td> <td class="td-5-pandats full-height"> <div class="direction-pandats layout-column centered-content full-height buy-pandats" *ngif="trade.action===\'buy\' || trade.action===\'buy_stop\' || trade.action===\'buy_limit\'"> <i class="icon-pandats cmicon-buy_icon"></i> </div> <div class="direction-pandats layout-column centered-content full-height sell-pandats" *ngif="trade.action===\'sell\' || trade.action===\'sell_stop\' || trade.action===\'sell_limit\'"> <i class="icon-pandats cmicon-sell_icon"></i> </div> </td> <td class=td-7-pandats> {{trade.lots}} </td> <td class=td-7-pandats> {{trade.openPrice | number:trade.asset.digitsFormat}} </td> <td class="td-7-pandats price-pandats" [ngclass]=trade.asset.bidDirection *ngif=!type> {{trade.closePrice() | number:trade.asset.digitsFormat }} </td> <td class="td-7-pandats price-pandats" *ngif="type===\'pending\'"> {{ \'0\' | number:trade.asset.digitsFormat }} </td> <td class=td-10-pandats> <button class=btn-tabs-pandats (click)="updateSlTp(trade, \'stopLoss\', $event)"> <span *ngif=trade.stopLoss>{{trade.stopLoss| number:trade.asset.digitsFormat}}</span> <span *ngif=!trade.stopLoss>{{translation.sl}}</span> </button> </td> <td class=td-10-pandats> <button class=btn-tabs-pandats (click)="updateSlTp(trade, \'takeProfit\', $event)"> <span *ngif=trade.takeProfit>{{trade.takeProfit| number:trade.asset.digitsFormat}}</span> <span *ngif=!trade.takeProfit>{{translation.tp}}</span> </button> </td> <td class=td-7-pandats> {{trade.commission | currency:user.currency:true}} </td> <td class=td-5-pandats> {{trade.swap|currency:user.currency:true}} </td> <td class=td-8-pandats [ngclass]="{\'up-pandats\': trade.profit > 0, \'down-pandats\': trade.profit < 0}"> {{trade.profit | currency:user.currency:true}} </td> <td class=td-10-pandats> <button class=btn-tabs-pandats (click)="closeTrade(trade, $event)"> <span *ngif=!type>{{translation.close}}</span> <span *ngif="type===\'pending\'">{{translation.delete}}</span> </button> </td> '
    },
    632: function(n, t) {
        n.exports = '<div class=tab-wrapper-pandats> <table class="table-headers-pandats clearfix-pandats"> <thead> <tr> <th *ngfor="let title of tradeTitles" class=th-pandats [ngclass]="[\'td-\' + title.width + \'-pandats\', \'title-\' + title.id]" (click)=sortBy(title)> {{translation[title.id]}} </th> </tr> </thead> </table> <div class="table-items-pandats clearfix-pandats"> <perfect-scrollbar> <div class=tbody-wrap-pandats> <table class=clearfix-pandats> <tbody> <tr *ngfor="let trade of trades" class=trade-item-pandats (click)=selectAsset(trade) [ngclass]="{\'active-pandats\': activeTrade === trade}"> <open-trade [trade]=trade [type]=type></open-trade> </tr> </tbody> </table> </div> </perfect-scrollbar> </div> </div> '
    },
    633: function(n, t) {
        n.exports = "<div class=pnl-pandats [ngclass]=\"{'pnl-up-pandats':pnlData.pnl > 0,'pnl-down-pandats':pnlData.pnl < 0}\" *ngif=\"user && user.loggedIn\" [hidden]=\"tab && tab.name!=='openTrades'\"> <span>{{translation.pl}}: &nbsp;</span> <span>{{pnlData.pnl | currency:user.currency:true}}</span> </div> "
    },
    634: function(n, t) {
        n.exports = '<div *ngif=isShow> <div class=backdrop-pandats></div> <div class="popup-wrapper-pandats sltp-popup-wrapper helvetica-neue-pandats" [@fadeinout]> <spinner [isshow]=showSpinner></spinner> <toast [content]=toastContent [status]=toastStatus></toast> <div class=title-popup-pandats> <div class=title-pandats> {{translation.st_tp}} <span>#{{trade.orderId}}</span> </div> <div class=close-popup-pandats (click)=close()> <i class="icon-pandats cmicon-cancel"></i> </div> </div> <div class=stop-take-content-wrapper> <div class="content-popup-pandats font12-pandats"> <div class=position-info-pandats> <div> <div class=position-info-title-pandats>{{translation.asset_name}}</div> <div class=position-info-value-pandats>{{trade.outputName}}</div> </div> <div> <div class=position-info-title-pandats>{{translation.direction}}</div> <div class=position-info-value-pandats>{{translation.actionsId[trade.action]}}</div> </div> <div> <div class=position-info-title-pandats>{{translation.hight_low}}</div> <div class=position-info-value-pandats>{{trade.asset.high}} / {{trade.asset.low}}</div> </div> <div> <div class=position-info-title-pandats>{{translation.lots}}</div> <div class=position-info-value-pandats>{{trade.lots}}</div> </div> <div> <div class=position-info-title-pandats>{{translation.openPrice}}</div> <div class=position-info-value-pandats>{{trade.openPrice}}</div> </div> </div> <div class=sltk-chart-pandats> <chart [asset]=trade.asset [chartconfig]=chartConfigPanda [instanceid]=instanceId> </chart> </div> <div class="layout-row content-pushed22 sltp-checkbox-container"> <div class="advanced-checkbox layout-column semi-width"> <div class="layout-row content-pushed06 full-height"> <input type=checkbox id=update-st-ls [checked]=stopLoss.checked [disabled]=user.amf (change)=toggleStopLoss()> <label class="full-height line-height24-pandats" [ngclass]="{\'inactive-pandats\': !stopLoss.checked}" for=update-st-ls>{{translation.set_stop_loss}}</label> </div> </div> <div class="advanced-checkbox layout-column semi-width"> <div class="layout-row content-pushed06 full-height"> <input type=checkbox id=update-tk-pr [checked]=takeProfit.checked (change)=toggleTakeProfit()> <label [ngclass]="{\'inactive-pandats\': !takeProfit.checked}" class="tp-pandats full-height line-height24-pandats" for=update-tk-pr> {{translation.set_take_profit}} </label> </div> </div> </div> <div class="between-pandats layout-row content-pushed22"> <div class="layout-column semi-width"> <div class="layout-row content-pushed06"> <div class="layout-column centered-content">{{translation.pips}}</div> <div class="layout-column centered-content"> <custom-input type=text autocomplete=off [disabled]=!stopLoss.checked name=stopLossPips [(ngmodel)]=stopLoss.pips.value (ngmodelchange)=updateStopLoss() (getfocus)="lockStopLoss(\'pips\')" [validator]="{mask: \'number\'}" [isclass]="{\'locked-pandats\': stopLoss.pips.lock}" [buttons]="{visible: true}" maxlength=7> </custom-input> </div> </div> </div> <div class="layout-column semi-width"> <div class="layout-row content-pushed06"> <div class="layout-column centered-content">{{translation.pips}}</div> <div class="layout-column centered-content"> <custom-input autocomplete=off [disabled]=!takeProfit.checked name=takeProfitPips [(ngmodel)]=takeProfit.pips.value (ngmodelchange)=updateTakeProfit() (getfocus)="lockTakeProfit(\'pips\')" [validator]="{mask: \'number\'}" [isclass]="{\'locked-pandats\': takeProfit.pips.lock}" [buttons]="{visible: true}" maxlength=7> </custom-input> </div> </div> </div> </div> <div class="between-pandats layout-row content-pushed22"> <div class="layout-column semi-width"> <div class="layout-row content-pushed06"> <div class="layout-column centered-content">{{translation.price}}</div> <div class="layout-column centered-content"> <custom-input [disabled]=!stopLoss.checked name=stopLossPips [(ngmodel)]=stopLoss.rate.value (ngmodelchange)=updateStopLoss() (getfocus)="lockStopLoss(\'rate\')" [validator]="{mask: \'rate\', limit: selectedAsset.digits}" [isclass]="{\'locked-pandats\': stopLoss.rate.lock}" [buttons]="{visible: true}" maxlength=8> </custom-input> </div> </div> </div> <div class="layout-column semi-width"> <div class="layout-row content-pushed06"> <div class="layout-column centered-content">{{translation.price}}</div> <div class="layout-column centered-content"> <custom-input [disabled]=!takeProfit.checked name=takeProfitPips [(ngmodel)]=takeProfit.rate.value (ngmodelchange)=updateTakeProfit() (getfocus)="lockTakeProfit(\'rate\')" [validator]="{mask: \'rate\', limit: selectedAsset.digits}" [isclass]="{\'locked-pandats\': takeProfit.rate.lock}" [buttons]="{visible: true}" maxlength=8> </custom-input> </div> </div> </div> </div> <div class="between-pandats layout-row content-pushed22"> <div class="layout-column semi-width"> <div class="layout-row content-pushed06"> <div class="layout-column centered-content">{{translation.value}}</div> <div class="layout-column centered-content" [ngclass]="{\'disabled-pandats\': !stopLoss.checked}"> <div *ngif=stopLoss.checked class="full-width loss-profit-value centered-content line-height20-pandats"> {{calcLossValue() | currency:user.currency:true}} </div> </div> </div> </div> <div class="layout-column semi-width"> <div class="layout-row content-pushed06"> <div class="layout-column centered-content">{{translation.value}}</div> <div class="layout-column centered-content" [ngclass]="{\'disabled-pandats\': !takeProfit.checked}"> <div *ngif=takeProfit.checked class="full-width loss-profit-value centered-content line-height20-pandats"> {{calcProfitValue() | currency:user.currency:true}} </div> </div> </div> </div> </div> <div class=tr-pandats *ngif="trade.actionCode > 1"> {{translation.open_trade_when_rate_reach}}: </div> <div class=tr-pandats *ngif="trade.actionCode > 1"> <div class=td-row-pandats> <input type=text name=rateReach [(ngmodel)]=reach.value (ngmodelchange)=updateReach($event) [textmask]="{mask: validators.rate, guide:false}"> </div> </div> </div> </div> <div class=footer-popup-pandats> <div class=tr-row-pandats> <button class="invest-pandats forex-button-pandats accent" [disabled]=!validate() (click)=onSubmit()> {{translation.submit_changes}} </button> </div> </div> </div> </div> '
    },
    635: function(n, t) {
        n.exports = '<ul class=tabs-header-pandats> <li *ngfor="let tab of tabs" (click)=changeTab(tab) [ngclass]="{\'active-pandats\':tab===activeTab}" class=layout-column> <div class="title-pandats layout-row"> <div class=layout-column> {{translation[tab.name]}} </div> <div *ngif="tab[\'count\']" class=layout-column> ({{tab.count}}) </div> <div class="tab-dropdown-pandats layout-column" *ngif="tab===activeTab && tab.name===\'closedTrades\'"> <div class="layout-row content-pushed10" [ngclass]="{\'rtl\': rtl}"> <div class=layout-column> <custom-select [items]=dateRanges [(ngmodel)]=dateRange [config]=dateRangesConfig name=dateRange> </custom-select> </div> <div class="show-more-pandats layout-column no-wrap just-center" (click)="historyState = true">{{translation.show_more}}</div> </div> </div> </div> </li> </ul> <ul class=tabs-content-pandats> <li *ngif="activeTab.name===\'openTrades\'"> <span> <open-trades></open-trades> </span> </li> <li *ngif="activeTab.name===\'pendingTrades\'"> <span> <open-trades [type]="\'pending\'"></open-trades> </span> </li> <li *ngif="activeTab.name===\'closedTrades\'"> <span> <closed-trades *ngif="dateRange.value!==\'all\'" [daterange]=dateRange (count)="activeTab.count=$event"> </closed-trades> <modal [state]=historyState [config]=historyPopupConfig (onclose)=closeHistoryPopup()> <header>{{translation.trade_history}}</header> <section> <closed-trades *ngif=historyState [type]="\'popup\'"></closed-trades> </section> </modal> </span> </li> </ul> '
    },
    636: function(n, t) {
        n.exports = '<div class=mainpandats> <div class="wrapper-pandats helvetica-neue-pandats"> <spinner [isshow]=showSpinner [isbackdrop]=false></spinner> <div class="platform-state-pandats platform-state-error-pandats" *ngif="platformState===\'error\'"> <div class=platform-state-message-pandats>{{translation.error_loading_trading_platform}}</div> <button class=forex-button-pandats (click)=refresh()>{{translation.try_again}}</button> </div> <div class=platform-wrapper-pandats *ngif=status> <div class="col-left-pandats cell-pandats"> <asset-list></asset-list> </div> <div class=col-right-pandats> <div class=right-center-pandats> <div class="center-pandats cell-pandats"> <chart-tabs></chart-tabs> </div> <div class="right-pandats cell-pandats"> <div class=trades-pandats> <invest class=invest-wrapper></invest> </div> </div> </div> <div class="bottom-pandats cell-pandats" *ngif=user.loggedIn> <closetrade-popup></closetrade-popup> <sltp-popup></sltp-popup> <tabs></tabs> </div> </div> </div> </div> <modal [state]=marginCallState [config]=marginCallPopupConfig (onclose)=closeMarginCallPopup()> <header>{{translation.marginCall}}</header> <div class=section-subtitle> <div class="row-pandats title"> <span class=warningIcon>!</span> {{translation.marginCall}} </div> </div> <section> <div class=marginCall-text-pandats> <div class=page-text> <span class=info>{{translation.attention}}</span> <span [innerhtml]=translation.marginCallMessage></span> </div> </div> </section> <footer> <div class=row-pandats> <button class=forex-button-pandats (click)=deposit()>Deposit</button> </div> </footer> </modal> </div> '
    },
    64: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(9)
          , a = l(202)
          , i = l(531)
          , u = l(22)
          , o = l(27)
          , r = l(33)
          , d = l(15)
          , c = l(39)
          , p = l(1);
        l.n(p);
        l.d(t, "a", function() {
            return g
        });
        var f = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , h = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , g = function() {
            function n(n) {
                this.assetService = n,
                this.api = o.api,
                this.serverTimeService = c.serverTimeService,
                this.userService = d.userService
            }
            return n.prototype.init = function() {
                this.user = this.userService.get(),
                this.user.loggedIn
            }
            ,
            n.prototype.getTrades = function(n) {
                var t = this;
                console.log("get closed trades");
                var l = new i.a;
                return this.user.loggedIn && !this.user.guest ? this.api.request.mt4GetClosedPositions(this.setTimeRange(n || "all")).then(function(n) {
                    return t.checkResponse(n)
                }).then(function(n) {
                    return t.initTrades(l, n)
                }) : Promise.resolve(l)
            }
            ,
            n.prototype.initTrades = function(n, t) {
                var l = this;
                return t.Trades.forEach(function(t) {
                    if (t.id > 0) {
                        var e = l.assetService.collection.get({
                            id: t.id
                        });
                        n.add(new a.a(t,e))
                    }
                }),
                t = null,
                n
            }
            ,
            n.prototype.checkResponse = function(n, t) {
                if (0 === n.status)
                    throw new r.AppError({
                        source: "ClosedTradeService",
                        type: s.Constants.error.type.SYSTEM,
                        severity: "critical",
                        code: "getClosedTradesFailed",
                        data: {
                            response: n
                        }
                    });
                return n
            }
            ,
            n.prototype.getDateRange = function(n) {
                function t(n) {
                    return i("day").subtract(n, "day")
                }
                function l(n) {
                    return i("isoweek").subtract(n, "week")
                }
                function e(n) {
                    return i("month").subtract(n, "month")
                }
                var s, a = this, i = function(n) {
                    return p.utc(a.serverTimeService.time).startOf(n)
                }, u = n.split(" ");
                return u[1].toLowerCase().match("day") && (s = t(parseInt(u[0], 10))),
                u[1].toLowerCase().match("week") && (s = l(parseInt(u[0], 10))),
                u[1].toLowerCase().match("month") && (s = e(parseInt(u[0], 10))),
                s.unix()
            }
            ,
            n.prototype.setTimeRange = function(n) {
                var t, l;
                switch (n) {
                case "day":
                    t = this.getDateRange("0 days");
                    break;
                case "threedays":
                    t = this.getDateRange("2 days");
                    break;
                case "week":
                    t = this.getDateRange("0 week");
                    break;
                case "month":
                    t = this.getDateRange("0 month");
                    break;
                case "threemonths":
                    t = this.getDateRange("2 month");
                    break;
                case "all":
                    t = 1
                }
                return l = Math.floor(this.serverTimeService.time / 1e3),
                {
                    Start: t,
                    End: l
                }
            }
            ,
            n.prototype.clear = function() {
                this.collection && this.collection.clear(),
                this.collection = null
            }
            ,
            n = f([l.i(e.Injectable)(), h("design:paramtypes", [u.a])], n)
        }()
    },
    65: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(71)
          , a = l(15)
          , i = l(32);
        l.n(i);
        l.d(t, "a", function() {
            return r
        });
        var u = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , o = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , r = function() {
            function n() {
                this.userService = a.userService,
                this.localStorageService = s.localStorageService,
                this.defaultKey = "favorites"
            }
            return n.prototype.init = function() {
                this.user = this.userService.get(),
                this.key = [this.defaultKey, this.user.login].join("|"),
                this.load()
            }
            ,
            n.prototype.load = function() {
                try {
                    this.entities = JSON.parse(this.localStorageService.get(this.key)) || []
                } catch (n) {
                    this.localStorageService.remove(this.key),
                    this.entities = []
                }
            }
            ,
            n.prototype.sync = function(n) {
                this.localStorageService.set(this.key, JSON.stringify(n || this.entities))
            }
            ,
            n.prototype.getAll = function() {
                return this.load(),
                this.entities
            }
            ,
            n.prototype.get = function(n) {
                return i.find(this.entities, function(t) {
                    return t === n
                })
            }
            ,
            n.prototype.add = function(n) {
                this.load(),
                this.entities.push(n),
                this.sync()
            }
            ,
            n.prototype.remove = function(n) {
                i.remove(this.entities, function(t) {
                    return t === n
                }),
                this.sync()
            }
            ,
            n.prototype.length = function() {
                return this.entities.length
            }
            ,
            n.prototype.clearAll = function() {
                this.entities.length = 0,
                this.localStorageService.remove(this.key)
            }
            ,
            n.prototype.clear = function() {
                this.entities.length = 0,
                this.key = "favorites"
            }
            ,
            n = u([l.i(e.Injectable)(), o("design:paramtypes", [])], n)
        }()
    },
    74: function(n, t, l) {
        "use strict";
        var e = l(2)
          , s = l(27)
          , a = l(543)
          , i = l(534)
          , u = l(537)
          , o = l(1)
          , r = (l.n(o),
        l(39))
          , d = l(47)
          , c = l(69)
          , p = (l.n(c),
        l(15));
        l.d(t, "a", function() {
            return v
        });
        var f = this && this.__assign || Object.assign || function(n) {
            for (var t, l = 1, e = arguments.length; l < e; l++) {
                t = arguments[l];
                for (var s in t)
                    Object.prototype.hasOwnProperty.call(t, s) && (n[s] = t[s])
            }
            return n
        }
          , h = this && this.__decorate || function(n, t, l, e) {
            var s, a = arguments.length, i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, l) : e;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                i = Reflect.decorate(n, t, l, e);
            else
                for (var u = n.length - 1; u >= 0; u--)
                    (s = n[u]) && (i = (a < 3 ? s(i) : a > 3 ? s(t, l, i) : s(t, l)) || i);
            return a > 3 && i && Object.defineProperty(t, l, i),
            i
        }
          , g = this && this.__metadata || function(n, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(n, t)
        }
          , v = function() {
            function n(n) {
                this.openTradeService = n,
                this.sltp$ = new c.BehaviorSubject(null),
                this.serverTimeService = r.serverTimeService,
                this.api = s.api,
                this.userService = p.userService,
                this.user = this.userService.get()
            }
            return n.prototype.checkResponse = function(n, t) {
                if (1 !== n.status)
                    throw new a.a({
                        source: "Chart",
                        type: a.b.Validation,
                        severity: a.c.Critical,
                        code: "chartFailed",
                        message: "noChartData",
                        data: {
                            response: n,
                            request: t
                        }
                    });
                return n
            }
            ,
            n.prototype.getHistory = function(n) {
                var t = this
                  , l = !!(n.early && n.from && n.to);
                return Promise.resolve().then(function() {
                    return l ? [] : t.getChartData(n.asset.id, n.timeframe.timeframe)
                }).then(function(e) {
                    return {
                        history: e.map(function(n) {
                            return [n[0] - 1e3 * t.serverTimeService.serverTimezone * 3600, n[1], n[2], n[3], n[4]]
                        }).slice(),
                        asset: f({}, n.asset, {
                            name: n.asset.outputName
                        }),
                        timeframe: {
                            label: n.timeframe.label,
                            timeframe: n.timeframe.timeframe,
                            unit: 60
                        },
                        early: l
                    }
                })
            }
            ,
            n.prototype.getChartData = function(n, t) {
                var l = this;
                void 0 === t && (t = 1);
                var e = {
                    SymbolID: n,
                    TimeFrame: t,
                    Source: this.user.source
                };
                return this.api.request.mt4GetChart(e).then(function(n) {
                    return l.checkResponse(n, e)
                }).then(function(n) {
                    return JSON.parse(n.Chart)
                }).catch(function(n) {
                    throw new Error("nochart")
                })
            }
            ,
            n.prototype.getEarlyHistory = function(n, t, l, e) {
                var s = this;
                void 0 === t && (t = 1);
                var a = {
                    SymbolID: n,
                    TimeFrame: t,
                    From: l,
                    To: e
                };
                return this.api.request.mt4GetChartHistory(a).then(function(n) {
                    return s.checkResponse(n, a)
                }).then(function(n) {
                    return console.log("[][][] early history", a),
                    JSON.parse(n.Chart)
                }).catch(function(n) {
                    throw new Error("nochart")
                })
            }
            ,
            n.prototype.getTradeEvents = function(n, t) {
                var l = this;
                return (this.openTradeService.collection ? this.openTradeService.collection.find({
                    assetId: n.id
                }) : []).map(function(n) {
                    return {
                        type: i.a.TradeFigure,
                        price: n.openPrice,
                        timestamp: l.roundToTimeframe(n.openTime, t) - 1e3 * l.serverTimeService.serverTimezone * 3600,
                        styles: {
                            size: 52
                        },
                        template: "orderinfo",
                        ctx: {
                            openPrice: n.openPrice,
                            openTime: n.openTime,
                            lots: n.lots,
                            symbol: n.outputName
                        },
                        figure: l.getTradeEventFigure(n)
                    }
                })
            }
            ,
            n.prototype.getTradeEventFigure = function(n) {
                return "buy" === n.action ? u.a.tradeBuy : u.a.tradeSell
            }
            ,
            n.prototype.roundToTimeframe = function(n, t) {
                var l = 60 * t * 1e3
                  , e = o(n);
                return e = o(Math.floor(+e / l) * l),
                e.valueOf()
            }
            ,
            n = h([l.i(e.Injectable)(), g("design:paramtypes", [d.a])], n)
        }()
    },
    961: function(n, t, l) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var e = l(20)
          , s = l(489);
        l.i(e.a)().bootstrapModuleFactory(s.a)
    },
    98: function(n, t, l) {
        "use strict";
        function e(n) {
            return u["ɵvid"](0, [(n()(),
            u["ɵeld"](0, 0, null, null, 0, "div", [["class", "backdrop-pandats"]], null, null, null, null, null))], null, null)
        }
        function s(n) {
            return u["ɵvid"](0, [(n()(),
            u["ɵeld"](0, 0, null, null, 38, "div", [], null, null, null, null, null)), (n()(),
            u["ɵted"](-1, null, ["\n    "])), (n()(),
            u["ɵand"](16777216, null, null, 1, null, e)), u["ɵdid"](3, 16384, null, 0, o.NgIf, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            u["ɵted"](-1, null, ["\n    "])), (n()(),
            u["ɵeld"](5, 0, null, null, 32, "div", [["class", "popup-wrapper-pandats helvetica-neue-pandats"]], [[24, "@fadeInOut", 0]], null, null, null, null)), u["ɵdid"](6, 278528, null, 0, o.NgClass, [u.IterableDiffers, u.KeyValueDiffers, u.ElementRef, u.Renderer], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), u["ɵdid"](7, 278528, null, 0, o.NgStyle, [u.KeyValueDiffers, u.ElementRef, u.Renderer], {
                ngStyle: [0, "ngStyle"]
            }, null), u["ɵpod"](8, {
                "width.rem": 0,
                "min-width.rem": 1,
                "height.rem": 2,
                "min-height.rem": 3
            }), (n()(),
            u["ɵted"](-1, null, ["\n        "])), (n()(),
            u["ɵeld"](10, 0, null, null, 11, "div", [["class", "title-popup-pandats"]], null, null, null, null, null)), (n()(),
            u["ɵted"](-1, null, ["\n            "])), (n()(),
            u["ɵeld"](12, 0, null, null, 3, "div", [["class", "title-pandats"]], null, null, null, null, null)), (n()(),
            u["ɵted"](-1, null, ["\n                "])), u["ɵncd"](null, 0), (n()(),
            u["ɵted"](-1, null, ["\n            "])), (n()(),
            u["ɵted"](-1, null, ["\n            "])), (n()(),
            u["ɵeld"](17, 0, null, null, 3, "div", [["class", "close-popup-pandats"]], null, [[null, "click"]], function(n, t, l) {
                var e = !0
                  , s = n.component;
                if ("click" === t) {
                    e = !1 !== s.close() && e
                }
                return e
            }, null, null)), (n()(),
            u["ɵted"](-1, null, ["\n                "])), (n()(),
            u["ɵeld"](19, 0, null, null, 0, "i", [["class", "icon-pandats cmicon-cancel"]], null, null, null, null, null)), (n()(),
            u["ɵted"](-1, null, ["\n            "])), (n()(),
            u["ɵted"](-1, null, ["\n        "])), (n()(),
            u["ɵted"](-1, null, ["\n        "])), (n()(),
            u["ɵeld"](23, 0, null, null, 3, "div", [["class", "subtitle-popup-pandats"]], null, null, null, null, null)), (n()(),
            u["ɵted"](-1, null, ["\n            "])), u["ɵncd"](null, 1), (n()(),
            u["ɵted"](-1, null, ["\n        "])), (n()(),
            u["ɵted"](-1, null, ["\n        "])), (n()(),
            u["ɵeld"](28, 0, null, null, 3, "div", [["class", "content-popup-pandats"]], null, null, null, null, null)), (n()(),
            u["ɵted"](-1, null, ["\n            "])), u["ɵncd"](null, 2), (n()(),
            u["ɵted"](-1, null, ["\n        "])), (n()(),
            u["ɵted"](-1, null, ["\n        "])), (n()(),
            u["ɵeld"](33, 0, null, null, 3, "div", [["class", "footer-popup-pandats"]], null, null, null, null, null)), (n()(),
            u["ɵted"](-1, null, ["\n            "])), u["ɵncd"](null, 3), (n()(),
            u["ɵted"](-1, null, ["\n        "])), (n()(),
            u["ɵted"](-1, null, ["\n    "])), (n()(),
            u["ɵted"](-1, null, ["\n"]))], function(n, t) {
                var l = t.component;
                n(t, 3, 0, l.config.backdrop),
                n(t, 6, 0, "popup-wrapper-pandats helvetica-neue-pandats", l.config.className),
                n(t, 7, 0, n(t, 8, 0, l.config.width, l.config.width, l.config.height, l.config.height))
            }, function(n, t) {
                n(t, 5, 0, void 0)
            })
        }
        function a(n) {
            return u["ɵvid"](0, [(n()(),
            u["ɵand"](16777216, null, null, 1, null, s)), u["ɵdid"](1, 16384, null, 0, o.NgIf, [u.ViewContainerRef, u.TemplateRef], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            u["ɵted"](-1, null, ["\n"]))], function(n, t) {
                n(t, 1, 0, t.component.state)
            }, null)
        }
        function i(n) {
            return u["ɵvid"](0, [(n()(),
            u["ɵeld"](0, 0, null, null, 1, "modal", [], null, null, null, a, c)), u["ɵdid"](1, 245760, null, 0, r.a, [], null, null)], function(n, t) {
                n(t, 1, 0)
            }, null)
        }
        var u = l(2)
          , o = l(4)
          , r = l(75);
        l.d(t, "b", function() {
            return c
        }),
        t.a = a;
        var d = []
          , c = u["ɵcrt"]({
            encapsulation: 2,
            styles: d,
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
        u["ɵccf"]("modal", r.a, i, {
            state: "state",
            config: "config"
        }, {
            onClose: "onClose"
        }, ["header", ".section-subtitle", "section", "footer"])
    }
}, [961]);
