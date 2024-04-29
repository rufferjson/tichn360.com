!function(t, e) {
    var n = function(t, e) {
        return t instanceof (e || Array)
    }
      , r = document
      , i = r.getElementsByTagName("script")
      , a = i[i.length - 1]
      , s = a.innerHTML.replace(/^\s+|\s+$/g, "");
    if (!t.ljs) {
        var o = a.src.match(/checkLoaded/) ? 1 : 0
          , c = r.getElementsByTagName("body")[0] || r.documentElement
          , l = function(t) {
            var e = {};
            return e.u = t.replace(/#(=)?([^#]*)?/g, function(t, n, r) {
                return e[n ? "f" : "i"] = r,
                ""
            }),
            e
        }
          , u = function(t, e, n) {
            var i, a = r.createElement(t);
            n && (a.readyState ? a.onreadystatechange = function() {
                "loaded" !== a.readyState && "complete" !== a.readyState || (a.onreadystatechange = null,
                n())
            }
            : a.onload = n);
            for (i in e)
                e[i] && (a[i] = e[i]);
            c.appendChild(a)
        }
          , d = function(t, e) {
            if (this.aliases && this.aliases[t]) {
                var r = this.aliases[t].slice(0);
                return n(r) || (r = [r]),
                e && r.push(e),
                this.load.apply(this, r)
            }
            if (n(t)) {
                for (var i = t.length; i--; )
                    this.load(t[i]);
                return e && t.push(e),
                this.load.apply(this, t)
            }
            return t.match(/\.css\b/) ? this.loadcss(t, e) : this.loadjs(t, e)
        }
          , h = {}
          , f = {
            aliases: {},
            loadjs: function(t, e) {
                var n = l(t);
                return t = n.u,
                !0 === h[t] ? (e && e(),
                this) : void 0 !== h[t] ? (e && (h[t] = function(t, e) {
                    return function() {
                        t && t(),
                        e && e()
                    }
                }(h[t], e)),
                this) : (h[t] = function(e) {
                    return function() {
                        h[t] = !0,
                        e && e()
                    }
                }(e),
                e = function() {
                    h[t]()
                }
                ,
                u("script", {
                    type: "text/javascript",
                    src: t,
                    id: n.i,
                    onerror: function(t) {
                        if (n.f) {
                            var r = t.currentTarget;
                            r.parentNode.removeChild(r),
                            u("script", {
                                type: "text/javascript",
                                src: n.f,
                                id: n.i
                            }, e)
                        }
                    }
                }, e),
                this)
            },
            loadcss: function(t, e) {
                var n = l(t);
                return t = n.u,
                h[t] || u("link", {
                    type: "text/css",
                    rel: "stylesheet",
                    href: t,
                    id: n.i
                }),
                h[t] = !0,
                e && e(),
                this
            },
            load: function() {
                var t = arguments
                  , e = t.length;
                return 1 === e && n(t[0], Function) ? (t[0](),
                this) : (d.call(this, t[0], e <= 1 ? void 0 : function() {
                    f.load.apply(f, [].slice.call(t, 1))
                }
                ),
                this)
            },
            addAliases: function(t) {
                for (var e in t)
                    this.aliases[e] = n(t[e]) ? t[e].slice(0) : t[e];
                return this
            }
        };
        if (o) {
            var p, m, y, g;
            for (p = 0,
            m = i.length; p < m; p++)
                (g = i[p].getAttribute("src")) && (h[g.replace(/#.*$/, "")] = !0);
            for (y = r.getElementsByTagName("link"),
            p = 0,
            m = y.length; p < m; p++)
                ("stylesheet" === y[p].rel || "text/css" === y[p].type) && (h[y[p].getAttribute("href").replace(/#.*$/, "")] = !0)
        }
        t.ljs = f
    }
    a.src && s && u("script", {
        innerHTML: s
    })
}(window),
function(t, e) {
    function n(t) {
        return t[0].toUpperCase() + t.slice(1)
    }
    function r(t) {
        var e = new RegExp(/\.(css|js)$/)
          , n = t.match(e).shift()
          , r = t.replace(e, "");
        return t.match(/^vendor/) ? u + t + "?v=" + l : n.match(/^\.css$/) ? u + t + "?v=" + l : l.length > 0 ? [u, r, ".", l, n].join("") : u + t
    }
    function i(t) {
        return t.tagName.toLowerCase().replace("panda-", "").split("-").map(function(t, e) {
            return e > 0 ? n(t) : t
        }).join("") + ".js"
    }
    function a() {
        return e.load(d, function() {
            h.style.width = "100%";
            var t = setTimeout(function() {
                o(h),
                clearInterval(t)
            }, 2300)
        })
    }
    function s() {
        if (d.length > 0) {
            var t = document.getElementsByTagName("body")[0]
              , n = t.firstElementChild;
            return t.insertBefore(h, n),
            e.loadcss(r("css/index.css", !0), function() {
                h.style.width = "10%"
            }).loadjs(r("vendor.js"), function() {
                return h.style.width = "50%",
                e.loadjs(r("common.js"), function() {
                    return h.style.width = "70%",
                    e.loadjs(r("forexInit.js"), a)
                })
            })
        }
    }
    function o(t) {
        t.style.display = "none",
        document.getElementsByTagName("body")[0].removeChild(t)
    }
    var c = "panda-forex-"
      , l = "50418b3"
      , u = ""
      , d = (parseInt(999999 * Math.random(), 10),
    function() {
        for (var t = "^" + c, e = new RegExp(t,"i"), n = document.querySelectorAll("*"), a = [], s = 0; s < n.length; ++s) {
            var o = n[s];
            o.tagName.match(/FOREX-INIT/) || o.tagName.match(e) && a.push(o)
        }
        return a.map(i).map(r)
    }() || [])
      , h = function() {
        var t = document.createElement("div");
        return t.style.position = "fixed",
        t.style.height = "2px",
        t.style["z-index"] = "9999999999",
        t.style.background = "#43a743",
        t.style.width = "5%",
        t.style.transition = "width 2s ease-in-out",
        t
    }();
    t && t.document && t.document.addEventListener("DOMContentLoaded", s)
}(window, window.ljs);
