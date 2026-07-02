$gwx_XC_3 = (function (
  _,
  _v,
  _n,
  _p,
  _s,
  _wp,
  _wl,
  $gwn,
  $gwl,
  $gwh,
  wh,
  $gstack,
  $gwrt,
  gra,
  grb,
  TestTest,
  wfor,
  _ca,
  _da,
  _r,
  _rz,
  _o,
  _oz,
  _1,
  _1z,
  _2,
  _2z,
  _m,
  _mz,
  nv_getDate,
  nv_getRegExp,
  nv_console,
  nv_parseInt,
  nv_parseFloat,
  nv_isNaN,
  nv_isFinite,
  nv_decodeURI,
  nv_decodeURIComponent,
  nv_encodeURI,
  nv_encodeURIComponent,
  $gdc,
  nv_JSON,
  _af,
  _gv,
  _ai,
  _grp,
  _gd,
  _gapi,
  $ixc,
  _ic,
  _w,
  _ev,
  _tsd
) {
  return function (path, global) {
    if (typeof global === "undefined") {
      if (typeof __GWX_GLOBAL__ === "undefined") global = {};
      else global = __GWX_GLOBAL__;
    }
    if (typeof __WXML_GLOBAL__ === "undefined") {
      __WXML_GLOBAL__ = {};
    }
    __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
    var e_ = {};
    if (typeof global.entrys === "undefined") global.entrys = {};
    e_ = global.entrys;
    var d_ = {};
    if (typeof global.defines === "undefined") global.defines = {};
    d_ = global.defines;
    var f_ = {};
    if (typeof global.modules === "undefined") global.modules = {};
    f_ = global.modules || {};
    var p_ = {};
    __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {};
    __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
    __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_3 || [];
    function gz$gwx_XC_3_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "progressText"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_3 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_3 = true;
    var x = ["./pages/diy-loading/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_3_1();
      var oLL = _v();
      _(r, oLL);
      if (_oz(z, 0, e, s, gg)) {
        oLL.wxVkey = 1;
      }
      oLL.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_3";
        var main = e_[path].f;
        if (typeof global === "undefined") global = {};
        global.f = $gdc(f_[path], "", 1);
        try {
          main(env, {}, root, global);
          _tsd(root);
        } catch (err) {
          console.log(err);
        }
        g = "";
        return root;
      };
    }
  };
})(
  __g.a,
  __g.b,
  __g.c,
  __g.d,
  __g.e,
  __g.f,
  __g.g,
  __g.h,
  __g.i,
  __g.j,
  __g.k,
  __g.l,
  __g.m,
  __g.n,
  __g.o,
  __g.p,
  __g.q,
  __g.r,
  __g.s,
  __g.t,
  __g.u,
  __g.v,
  __g.w,
  __g.x,
  __g.y,
  __g.z,
  __g.A,
  __g.B,
  __g.C,
  __g.D,
  __g.E,
  __g.F,
  __g.G,
  __g.H,
  __g.I,
  __g.J,
  __g.K,
  __g.L,
  __g.M,
  __g.N,
  __g.O,
  __g.P,
  __g.Q,
  __g.R,
  __g.S,
  __g.T,
  __g.U,
  __g.V,
  __g.W,
  __g.X,
  __g.Y,
  __g.Z,
  __g.aa
);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_3();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/diy-loading/index.wxml"] = [
    $gwx_XC_3,
    "./pages/diy-loading/index.wxml",
  ];
else
  __wxAppCode__["pages/diy-loading/index.wxml"] = $gwx_XC_3(
    "./pages/diy-loading/index.wxml"
  );
__wxRoute = "pages/diy-loading/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/diy-loading/index.js";
define(
  "pages/diy-loading/index.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
    var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
      t = require("../../@babel/runtime/helpers/asyncToGenerator");
    require("../../@babel/runtime/helpers/Arrayincludes");
    var r = require("../../@babel/runtime/helpers/typeof"),
      a =
        require("../../contracts/navigation/query-contract").appendQueryParams,
      n = require("../../utils/navigation/navigate-with-fallback"),
      i = n.clearDiyEntryNavLock,
      o = n.navigateWithFallback,
      s = require("../../facades/v2/workshop-facade").prepareDiyBootstrap,
      d = require("../../utils/assetCache").preloadAssetPaths,
      l = require("../../utils/catalog"),
      u = l.applyRuntimeCatalogSnapshot,
      c = l.materialHasRenderableImage,
      m = l.resolveMaterialImageUrl,
      y =
        require("../../utils/diyRenderDeviceTier").resolveCurrentDiyRenderDeviceTier,
      h =
        require("../../utils/diyTrayRenderImages").collectTrayRenderWarmupTargets,
      g = require("../../utils/navigation/diy-entry-transition"),
      p = (g.clearDiyTransitionMarker, g.setDiyTransitionMarker),
      _ = require("../../utils/diyEntrySession").readDiyEntrySession,
      f = /^[A-Za-z0-9_-]{1,64}$/,
      x = new Set(["home", "inspiration", "cart", "profile"]);
    function b(e) {
      var t = String(e || "")
        .trim()
        .toLowerCase();
      return x.has(t) ? t : "";
    }
    function T(e) {
      return String(e || "")
        .trim()
        .slice(0, 96);
    }
    function R(e, t, r) {
      for (
        var a = ""
            .concat(T(e), ":")
            .concat(String(t || "").trim(), ":")
            .concat(r),
          n = 2166136261,
          i = 0;
        i < a.length;
        i += 1
      )
        n = (16777619 * (n ^= a.charCodeAt(i))) >>> 0;
      return n >>> 0;
    }
    function v() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return a("/pages/diy/index", {
        source: "standalone_diy_loading_default",
        returnTab: b(e),
      });
    }
    function P(e, t) {
      var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        i = String(t || "").trim() || "standalone_diy_loading",
        o = String(e || "").trim(),
        s = b(r);
      if (n > 4) return v(s);
      if (!o || !o.startsWith("/pages/")) return v(s);
      if (o.startsWith("/pages/diy-loading/index")) {
        var d = N(o);
        return P(d.target || "", d.source || i, d.returnTab || s, n + 1);
      }
      if (o.startsWith("/pages/diy/index")) {
        var l = /[?&]source=/.test(o),
          u = /[?&]returnTab=/.test(o);
        if (l && (!s || u)) return o;
        var c = o.includes("?") ? "&" : "?",
          m = l ? "" : "source=".concat(encodeURIComponent(i)),
          y =
            s && !u
              ? ""
                  .concat(m ? "&" : "", "returnTab=")
                  .concat(encodeURIComponent(s))
              : "",
          h = "".concat(m).concat(y);
        return h ? "".concat(o).concat(c).concat(h) : o;
      }
      if (!o.startsWith("/pages/index/index")) return o;
      var g = N(o),
        p = Object.assign({}, g, { source: g.source || i });
      return (
        delete p.activeTab,
        s && !p.returnTab && (p.returnTab = s),
        a("/pages/diy/index", p)
      );
    }
    function S(e) {
      var t = Number(e);
      return Number.isFinite(t) ? Math.max(0, Math.min(100, Math.floor(t))) : 0;
    }
    function M(e) {
      var t = N(e);
      return (
        !!String(t.entryId || "").trim() ||
        !!q(t.sharedPattern).length ||
        !!String(t.schemeId || "").trim()
      );
    }
    function A(e, t) {
      var r = Math.max(0, Number(t || 0));
      return r ? Math.max(0, Math.min(r, Number(e || 0))) / r : 1;
    }
    function D(e) {
      var t = e && Array.isArray(e.trayBgs) ? e.trayBgs : [];
      if (!t.length) return 0;
      var a = t.findIndex(function (e) {
        var t = e && "object" === r(e) ? e : {},
          a = String(t.id || "")
            .trim()
            .toLowerCase(),
          n = String(t.name || t.label || "")
            .trim()
            .toLowerCase(),
          i = String(t.url || t.image || "")
            .trim()
            .toLowerCase();
        return (
          a.includes("creamy") ||
          a.includes("porcelain") ||
          i.includes("bg_creamy-porcelain") ||
          n.includes("奶油") ||
          n.includes("瓷")
        );
      });
      return a >= 0 ? a : 0;
    }
    function I(e, t) {
      var r = e && Array.isArray(e.trayBgs) ? e.trayBgs : [];
      if (!r.length) return "";
      var a =
        r[Math.max(0, Math.min(r.length - 1, Math.round(Number(t) || 0)))] ||
        r[0] ||
        {};
      return String(a.url || a.image || a.previewUrl || "").trim();
    }
    function B(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (w = t(
        e().mark(function t(r, a) {
          var n;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if ((n = I(r, a))) {
                    e.next = 3;
                    break;
                  }
                  return e.abrupt("return");
                case 3:
                  return (
                    (e.next = 5),
                    d([n], null, { persist: !0 }).catch(function () {})
                  );
                case 5:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      )).apply(this, arguments);
    }
    function L(e) {
      if (e && "object" === r(e))
        try {
          var t = "function" == typeof getApp ? getApp() : null;
          t &&
            t.globalData &&
            ((t.globalData.pendingDiyCatalogSnapshot = e),
            (t.globalData.pendingDiyCatalogSnapshotAt = Date.now()));
        } catch (e) {}
    }
    function F(e) {
      var t = Array.isArray(e) ? e.filter(Boolean) : [];
      if (t.length)
        try {
          var r = "function" == typeof getApp ? getApp() : null;
          r &&
            r.globalData &&
            ((r.globalData.pendingDiyBlindBoxPresetPool = t),
            (r.globalData.pendingDiyBlindBoxPresetPoolAt = Date.now()),
            (r.globalData.latestDiyBlindBoxPresetPool = t),
            (r.globalData.latestDiyBlindBoxPresetPoolAt = Date.now()));
        } catch (e) {}
    }
    function W(e) {
      var t = Array.isArray(e) ? e.filter(Boolean) : [];
      if (t.length)
        try {
          var r = "function" == typeof getApp ? getApp() : null;
          r &&
            r.globalData &&
            ((r.globalData.pendingDiyBlindBoxReadyCandidates = t),
            (r.globalData.pendingDiyBlindBoxReadyCandidatesAt = Date.now()),
            (r.globalData.latestDiyBlindBoxReadyCandidates = t),
            (r.globalData.latestDiyBlindBoxReadyCandidatesAt = Date.now()));
        } catch (e) {}
    }
    function C(e) {
      var t = T(e);
      if (t)
        try {
          var r = "function" == typeof getApp ? getApp() : null;
          r &&
            r.globalData &&
            ((r.globalData.pendingDiyBlindBoxSessionSeed = t),
            (r.globalData.pendingDiyBlindBoxSessionSeedAt = Date.now()),
            (r.globalData.latestDiyBlindBoxSessionSeed = t),
            (r.globalData.latestDiyBlindBoxSessionSeedAt = Date.now()));
        } catch (e) {}
    }
    function k(e) {
      var t = e && "object" === r(e) ? e : {};
      try {
        var a = "function" == typeof getApp ? getApp() : null;
        if (a && a.globalData) {
          var n = Object.assign({}, t, { at: Date.now() });
          a.globalData.lastDiyLoadingPerf = n;
          var i = Array.isArray(a.globalData.lastDiyLoadingPerfEvents)
            ? a.globalData.lastDiyLoadingPerfEvents
            : [];
          if (
            (i.push(n),
            i.length > 40 && i.splice(0, i.length - 40),
            (a.globalData.lastDiyLoadingPerfEvents = i),
            t.event)
          ) {
            var o = Array.isArray(a.globalData.lastDiyPerfEvents)
              ? a.globalData.lastDiyPerfEvents
              : [];
            o.push(n),
              o.length > 120 && o.splice(0, o.length - 120),
              (a.globalData.lastDiyPerfEvents = o),
              (a.globalData.lastDiyPerfEvent = n),
              (a.globalData.lastDiyPerfEventsUpdatedAt = Date.now());
          }
        }
      } catch (e) {}
    }
    function O(e) {
      var t = String(e || "");
      if (!t) return "";
      try {
        return decodeURIComponent(t.replace(/\+/g, "%20"));
      } catch (e) {
        return t;
      }
    }
    function N(e) {
      var t = String(e || "").trim();
      if (!t) return {};
      var r = t.indexOf("?");
      if (r < 0 || r >= t.length - 1) return {};
      var a = t.slice(r + 1),
        n = {};
      return (
        a.split("&").forEach(function (e) {
          var t = String(e || "").trim();
          if (t) {
            var r = t.indexOf("=");
            if (r < 0) {
              var a = O(t).trim();
              a && (n[a] = "");
            } else {
              var i = O(t.slice(0, r)).trim();
              i && (n[i] = O(t.slice(r + 1)).trim());
            }
          }
        }),
        n
      );
    }
    function j(e) {
      return (Array.isArray(e) ? e : [])
        .map(function (e) {
          return String(null == e ? "" : e).trim();
        })
        .filter(function (e) {
          return f.test(e);
        });
    }
    function q(e) {
      var t = String(e || "").trim();
      return t
        ? t
            .split(",")
            .map(function (e) {
              return String(e || "").trim();
            })
            .filter(function (e) {
              return f.test(e);
            })
        : [];
    }
    function E(e) {
      var t = Number(e);
      return Number.isFinite(t) ? Math.max(0, Math.round(t)) : null;
    }
    function U(e) {
      var t = N(e),
        a = _(t.entryId);
      if (a && Array.isArray(a.pattern) && a.pattern.length)
        return {
          id: String(a.schemeId || "").trim(),
          entryId: String(a.entryId || "").trim(),
          pattern: j(a.pattern),
          bgIndex: E(a.bgIndex),
          name: String(a.name || "").trim(),
          beadMm: Number(a.beadMm || a.bead_mm) || null,
          previewRenderVersion:
            Number(a.previewRenderVersion || a.preview_render_version) || null,
          materialMap:
            a.materialMap && "object" === r(a.materialMap)
              ? a.materialMap
              : null,
          materialSnapshot:
            a.materialSnapshot && "object" === r(a.materialSnapshot)
              ? a.materialSnapshot
              : null,
          renderPlan: Array.isArray(a.renderPlan || a.render_plan)
            ? a.renderPlan || a.render_plan
            : [],
        };
      var n = q(t.sharedPattern);
      if (n.length)
        return {
          pattern: n,
          bgIndex: E(t.sharedBgIndex),
          name: String(t.sharedName || "").trim(),
        };
      var i = (function (e) {
        var t = String(e || "").trim();
        if (!t) return null;
        if ("undefined" == typeof wx || "function" != typeof wx.getStorageSync)
          return null;
        try {
          var a = wx.getStorageSync("jieshanshi_schemes");
          if (!Array.isArray(a)) return null;
          var n = a.find(function (e) {
              return String((e && e.id) || "").trim() === t;
            }),
            i = j(n && n.pattern);
          if (!i.length) return null;
          var o = Number(n && (void 0 !== n.bgIndex ? n.bgIndex : n.bg_index)),
            s = Number(n && (n.beadMm || n.bead_mm)),
            d = Number(
              n && (n.previewRenderVersion || n.preview_render_version)
            );
          return {
            id: t,
            pattern: i,
            bgIndex: Number.isFinite(o) ? Math.max(0, Math.round(o)) : null,
            name: String((n && n.name) || "").trim(),
            beadMm: Number.isFinite(s) && s > 0 ? s : null,
            previewRenderVersion: Number.isFinite(d) && d > 0 ? d : null,
            materialMap:
              n && n.materialMap && "object" === r(n.materialMap)
                ? n.materialMap
                : null,
            materialSnapshot:
              n && n.materialSnapshot && "object" === r(n.materialSnapshot)
                ? n.materialSnapshot
                : null,
          };
        } catch (e) {
          return null;
        }
      })(String(t.schemeId || "").trim());
      return (
        i || {
          pattern: [],
          bgIndex: E(t.sharedBgIndex),
          name: String(t.sharedName || "").trim(),
        }
      );
    }
    function V(e, t) {
      var a = Object.create(null),
        n = t && "object" === r(t) ? t : {};
      return (
        Object.keys(n).forEach(function (e) {
          var t = n[e],
            r = String(
              e ||
                (t && (t.id || t.materialId || t.material_id || t.code)) ||
                ""
            ).trim();
          r && !a[r] && (a[r] = t);
        }),
        (e && Array.isArray(e.beadTypes) ? e.beadTypes : []).forEach(function (
          e
        ) {
          var t = String((e && e.id) || "").trim();
          t && !a[t] && (a[t] = e);
        }),
        a
      );
    }
    function Y(e, t, r) {
      var a = j(e);
      if (!a.length) return [];
      var n = V(t, r),
        i = [],
        o = Object.create(null);
      return (
        a.forEach(function (e) {
          var t = n[e];
          if (t) {
            var r,
              a,
              s = o[e] || 0;
            (o[e] = s + 1),
              (r = m(t, s)),
              (a = String(r || "").trim()) && (i.indexOf(a) >= 0 || i.push(a));
          }
        }),
        i.slice(0, 72)
      );
    }
    function G(e, t) {
      return Array.isArray(e) && Array.isArray(t)
        ? (t.forEach(function (t) {
            var r = String(t || "").trim();
            !r || e.indexOf(r) >= 0 || e.push(r);
          }),
          e)
        : e;
    }
    function z(e, t) {
      var r = Array.isArray(e) ? e : [],
        a = [],
        n = [];
      return (
        r.forEach(function (e, t) {
          var r = e && Array.isArray(e.imageUrls) ? e.imageUrls : [];
          G(t < 1 ? a : n, r);
        }),
        G(n, Array.isArray(t) ? t : []),
        { required: a, background: n }
      );
    }
    function H(e, t) {
      var a = e && "object" === r(e) ? e : {},
        n = Array.isArray(a.beadTypes) ? a.beadTypes : [];
      if (!n.length) return [];
      var i = t && "object" === r(t) ? t : {},
        o = Array.isArray(a.mainCategories) ? a.mainCategories : [],
        s =
          a.subCategories && "object" === r(a.subCategories)
            ? a.subCategories
            : {},
        d = String((o[0] && o[0].id) || "").trim(),
        l = (function (e) {
          var t = (Array.isArray(e) ? e : []).find(function (e) {
            var t = String((e && e.id) || "").trim();
            return !!t && "in_use" !== t && 0 !== t.indexOf("__all__:");
          });
          return t && t.id ? String(t.id) : "";
        })(s[d]),
        u = n.filter(function (e) {
          if (!e || e.locked) return !1;
          var t = String(e.mainCategory || "").trim(),
            r = String(e.category || "").trim();
          return (!d || !t || t === d) && (!l || !r || r === l);
        }),
        c = u.length
          ? u
          : n.filter(function (e) {
              return e && !e.locked;
            });
      return h(c, {
        materialLimit: i.loadingMaterialLimit || 12,
        totalImageCap: i.loadingImageCap || 20,
        secondPassMaterialLimit: Math.ceil((i.loadingMaterialLimit || 12) / 2),
      })
        .map(function (e) {
          return e.url;
        })
        .filter(Boolean);
    }
    function Q(e, t, r) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (Z = t(
        e().mark(function t(a, n, i) {
          var o, s, l, u, c, m, y, h, g, p;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    (o = (Array.isArray(a) ? a : [])
                      .map(function (e) {
                        return String(e || "").trim();
                      })
                      .filter(Boolean)).length
                  ) {
                    e.next = 3;
                    break;
                  }
                  return e.abrupt("return", {
                    ready: !0,
                    total: 0,
                    loaded: 0,
                    timedOut: !1,
                    durationMs: 0,
                  });
                case 3:
                  return (
                    (s = Date.now()),
                    (l = i && "object" === r(i) ? i : {}),
                    (u = { cancelled: !1 }),
                    (c = 0),
                    (m = null),
                    (y = d(
                      o,
                      function (e) {
                        var t = Math.max(0, Number((e && e.loaded) || 0));
                        (c = Math.max(c, t)), "function" == typeof n && n(e);
                      },
                      {
                        persist: !0,
                        concurrency: l.loadingConcurrency || 2,
                        cancelToken: u,
                        shouldStop: function () {
                          return !0 === u.cancelled;
                        },
                      }
                    )
                      .then(function (e) {
                        return Object.assign(
                          { ready: !0, timedOut: !1 },
                          e || {}
                        );
                      })
                      .catch(function () {
                        return {
                          ready: !1,
                          total: o.length,
                          loaded: c,
                          timedOut: !1,
                        };
                      })),
                    (h = Math.max(
                      300,
                      Number(l.materialWarmupSoftBudgetMs) || 800
                    )),
                    (g = new Promise(function (e) {
                      m = setTimeout(function () {
                        (u.cancelled = !0),
                          e({
                            ready: !1,
                            total: o.length,
                            loaded: c,
                            timedOut: !0,
                            cancelled: !0,
                          });
                      }, h);
                    })),
                    (e.next = 14),
                    Promise.race([y, g])
                  );
                case 14:
                  return (
                    (p = e.sent),
                    m && (clearTimeout(m), (m = null)),
                    p && p.timedOut && y.catch(function () {}),
                    e.abrupt(
                      "return",
                      Object.assign(
                        { total: o.length, loaded: 0, ready: !1, timedOut: !1 },
                        p || {},
                        { durationMs: Math.max(0, Date.now() - s) }
                      )
                    )
                  );
                case 18:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      )).apply(this, arguments);
    }
    function $(e) {
      var t = e && "object" === r(e) ? e : {},
        a = String(t.id || t.presetId || t.templateId || "").trim();
      return a || j(t.pattern).join("|");
    }
    function J(e, t, r) {
      var a = Array.isArray(t) ? t : [];
      if (!(e && Array.isArray(e.beadTypes) && e.beadTypes.length && a.length))
        return [];
      for (
        var n = (function (e, t) {
            var r = Array.isArray(e) ? e.filter(Boolean) : [],
              a = T(t);
            return r.length && a
              ? r
                  .map(function (e, t) {
                    return {
                      item: e,
                      index: t,
                      rank: R(a, $(e) || j(e && e.pattern).join("|"), t),
                    };
                  })
                  .sort(function (e, t) {
                    return e.rank - t.rank || e.index - t.index;
                  })
                  .map(function (e) {
                    return e.item;
                  })
              : r;
          })(a, r),
          i = Object.create(null),
          o = [],
          s = 0;
        s < n.length && s < 8 && o.length < 3;
        s += 1
      ) {
        var d = n[s],
          l = j(d && d.pattern);
        if (!(l.length < 8)) {
          var u = $(d);
          if (u && !i[u] && K(l, e, null)) {
            var c = Y(l, e, null);
            c.length &&
              ((i[u] = !0),
              o.push({
                key: u,
                preset: d,
                pattern: l,
                imageUrls: c,
                preparedAt: Date.now(),
                from: "diy-loading",
              }));
          }
        }
      }
      return o;
    }
    function K(e, t, r) {
      var a = j(e);
      if (!a.length) return !0;
      var n = V(t, r);
      return a.every(function (e) {
        return (t = n[e]), c(t);
        var t;
      });
    }
    function X(e, t) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (ee = t(
        e().mark(function t(r, a) {
          var n;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if ((n = Array.isArray(r) ? r : []).length) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return", !0);
                  case 3:
                    return (e.prev = 3), (e.next = 6), d(n, a, { persist: !0 });
                  case 6:
                    return e.abrupt("return", !0);
                  case 9:
                    return (
                      (e.prev = 9), (e.t0 = e.catch(3)), e.abrupt("return", !1)
                    );
                  case 12:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[3, 9]]
          );
        })
      )).apply(this, arguments);
    }
    function te(e, t, r) {
      return re.apply(this, arguments);
    }
    function re() {
      return (re = t(
        e().mark(function t(a, n, i) {
          var o, s, l, u, c, m, y, h;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((o = i && "object" === r(i) ? i : {}),
                    (s = Math.max(1, Number(o.assetLimit) || 72)),
                    (l = Math.max(300, Number(o.timeoutMs) || 2800)),
                    (u = Object.create(null)),
                    (c = (Array.isArray(a) ? a : [])
                      .map(function (e) {
                        return String(e || "").trim();
                      })
                      .filter(Boolean)
                      .filter(function (e) {
                        return !u[e] && ((u[e] = !0), !0);
                      })
                      .slice(0, s)).length)
                  ) {
                    e.next = 7;
                    break;
                  }
                  return e.abrupt("return", !0);
                case 7:
                  return (
                    (m = !1),
                    (y = d(c, n, { persist: !0 })
                      .then(function () {
                        return !0;
                      })
                      .catch(function () {
                        return !1;
                      })),
                    (h = new Promise(function (e) {
                      setTimeout(function () {
                        (m = !0), e(!1);
                      }, l);
                    })),
                    (e.next = 12),
                    Promise.race([y, h])
                  );
                case 12:
                  if (!0 !== e.sent) {
                    e.next = 15;
                    break;
                  }
                  return e.abrupt("return", !0);
                case 15:
                  return m && y.catch(function () {}), e.abrupt("return", !1);
                case 17:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      )).apply(this, arguments);
    }
    Page({
      data: {
        loadingText: "正在准备 DIY 素材...",
        progressText: "",
        targetUrl: "",
        progressPercent: 8,
      },
      onLoad: function (e) {
        var t = this;
        (this._bootStartTimer = null),
          (this._redirectTimer = null),
          (this._postReadyTimer = null),
          (this._watchdogTimer = null),
          (this._hardFallbackTimer = null),
          (this._partialRevealTimer = null),
          (this._retryTimer = null),
          (this._redirected = !1),
          (this._unloaded = !1),
          (this._bootStartedAt = Date.now()),
          (this._criticalReady = !1),
          (this._criticalReadyAt = 0),
          (this._pendingRedirectAfterReady = !1),
          (this._catalogReadyForIndex = !1),
          (this._schemePatternReadyForIndex = !1),
          (this._schemeAssetsReadyForIndex = !1),
          (this._blindBoxWarmupReadyForIndex = !1),
          (this._blindBoxPresetPoolReadyForIndex = !1),
          (this._blindBoxReadyCandidates = []),
          (this._preferredBgIndex = 0),
          (this._lastAssetProgressPercent = -1),
          (this._entryP0Total = 0),
          (this._entryP0Loaded = 0),
          (this._entryP0ReadyRatio = 0),
          (this._entryP0TimedOut = !1),
          (this._entryMaterialWarmupTotal = 0),
          (this._entryMaterialWarmupLoaded = 0),
          (this._entryMaterialWarmupTimedOut = !1),
          (this._entryMaterialWarmupDurationMs = 0),
          (this._criticalReadyReason = ""),
          (this._minLoadingGateMs = 1500),
          (this._diyRenderDeviceTier = y());
        var r = String((e && e.source) || "").trim(),
          a = b(e && e.returnTab),
          n = P(
            (function (e) {
              var t = String(e || "").trim();
              if (!t) return "";
              try {
                return decodeURIComponent(t);
              } catch (e) {
                return t;
              }
            })(e && e.target),
            r,
            a
          ),
          i = N(n);
        (this._entryId =
          String(i.entryId || "").trim() ||
          "diy_"
            .concat(Date.now(), "_")
            .concat(Math.random().toString(36).slice(2, 8))),
          (this._entrySource = r || "standalone_diy_loading"),
          (this._returnTab = a),
          (this._maxVisibleLoadingMs = (function (e, t) {
            var r = String(t || "")
              .trim()
              .toLowerCase();
            return r.indexOf("product") >= 0 ||
              r.indexOf("share") >= 0 ||
              r.indexOf("cart") >= 0 ||
              r.indexOf("profile") >= 0 ||
              r.indexOf("scheme") >= 0 ||
              M(e)
              ? 7e3
              : 6e3;
          })(n, this._entrySource)),
          this.setData({ targetUrl: n }),
          (this._bootStartTimer = setTimeout(function () {
            (t._bootStartTimer = null), t.startBootSequence();
          }, 16));
      },
      onUnload: function () {
        (this._unloaded = !0),
          this._bootStartTimer &&
            (clearTimeout(this._bootStartTimer), (this._bootStartTimer = null)),
          this._redirectTimer &&
            (clearTimeout(this._redirectTimer), (this._redirectTimer = null)),
          this._postReadyTimer &&
            (clearTimeout(this._postReadyTimer), (this._postReadyTimer = null)),
          this._partialRevealTimer &&
            (clearTimeout(this._partialRevealTimer),
            (this._partialRevealTimer = null)),
          this._retryTimer &&
            (clearTimeout(this._retryTimer), (this._retryTimer = null)),
          this._watchdogTimer &&
            (clearTimeout(this._watchdogTimer), (this._watchdogTimer = null)),
          this._hardFallbackTimer &&
            (clearTimeout(this._hardFallbackTimer),
            (this._hardFallbackTimer = null)),
          this._redirected || i();
      },
      scheduleCriticalResourceRetry: function () {
        var e = this;
        this._redirected ||
          this._unloaded ||
          this._criticalReady ||
          this._retryTimer ||
          (this._retryTimer = setTimeout(function () {
            (e._retryTimer = null),
              e._redirected ||
                e._unloaded ||
                e._criticalReady ||
                Promise.resolve()
                  .then(function () {
                    return e.prepareDiyCriticalResources();
                  })
                  .catch(function () {
                    e.setLoadingState({
                      loadingText: "正在继续准备 DIY...",
                      progressText: "网络较慢，将保持完整体验后再进入",
                      progressPercent: 88,
                    }),
                      e.scheduleCriticalResourceRetry();
                  });
          }, 2500));
      },
      markCriticalReady: function (e) {
        (this._criticalReadyReason =
          String(e || this._criticalReadyReason || "ready").trim() || "ready"),
          (this._criticalReady = !0),
          (this._criticalReadyAt = Date.now()),
          this._pendingRedirectAfterReady && this.redirectToTargetWithBuffer();
      },
      redirectToTargetWithBuffer: function () {
        var e = this;
        if (!this._redirected)
          if (this._criticalReady) {
            var t = Number(this._criticalReadyAt || 0);
            if (t > 0) {
              var r = 180 - (Date.now() - t);
              if (r > 0)
                return (
                  this._postReadyTimer &&
                    (clearTimeout(this._postReadyTimer),
                    (this._postReadyTimer = null)),
                  void (this._postReadyTimer = setTimeout(function () {
                    (e._postReadyTimer = null), e.redirectToTarget();
                  }, r))
                );
            }
            this.redirectToTarget();
          } else this._pendingRedirectAfterReady = !0;
      },
      setLoadingState: function (e) {
        var t = {},
          a = e && "object" === r(e) ? e : {};
        if (Object.prototype.hasOwnProperty.call(a, "loadingText")) {
          var n = String(a.loadingText || "");
          n !== String(this.data.loadingText || "") && (t.loadingText = n);
        }
        if (Object.prototype.hasOwnProperty.call(a, "progressText")) {
          var i = String(a.progressText || "");
          i !== String(this.data.progressText || "") && (t.progressText = i);
        }
        if (Object.prototype.hasOwnProperty.call(a, "progressPercent")) {
          var o = S(a.progressPercent);
          o !== S(this.data.progressPercent) && (t.progressPercent = o);
        }
        if (Object.keys(t).length) {
          if (this._unloaded) return;
          this.setData(t);
        }
      },
      maybeRevealWithPartialP0: function (e) {
        if (this._criticalReady || this._redirected || this._unloaded)
          return !1;
        var t = A(this._entryP0Loaded, this._entryP0Total);
        return (
          (this._entryP0ReadyRatio = t),
          !(t < 0.7) &&
            !!(
              this._catalogReadyForIndex &&
              this._materialsBundleReadyForIndex &&
              this._schemePatternReadyForIndex
            ) &&
            (!M(this.data && this.data.targetUrl) ||
              !0 === this._schemeAssetsReadyForIndex) &&
            (this.setLoadingState({
              loadingText: "DIY 即将就绪...",
              progressText: "首屏素材已基本准备完毕",
              progressPercent: 100,
            }),
            this.markCriticalReady(e || "p0_partial_ready"),
            this.redirectToTargetWithBuffer(),
            !0)
        );
      },
      startBootSequence: function () {
        var e = this,
          t = Math.max(
            1500,
            Math.min(7500, Number(this._maxVisibleLoadingMs || 7e3))
          );
        (this._watchdogTimer = setTimeout(function () {
          (e._watchdogTimer = null),
            e._criticalReady
              ? e.redirectToTarget()
              : ((e._entryP0TimedOut = !0),
                (e._entryP0ReadyRatio = A(e._entryP0Loaded, e._entryP0Total)),
                e.setLoadingState({
                  loadingText: "正在进入 DIY...",
                  progressText: "核心素材将在页面内继续补齐",
                  progressPercent: 98,
                }),
                e.markCriticalReady("max_visible_timeout"),
                e.redirectToTargetWithBuffer());
        }, t)),
          (this._partialRevealTimer = setTimeout(function () {
            (e._partialRevealTimer = null),
              e.maybeRevealWithPartialP0("p0_partial_ready");
          }, 2800)),
          Promise.resolve()
            .then(function () {
              return e.prepareDiyCriticalResources();
            })
            .catch(function () {
              e.setLoadingState({
                loadingText: "正在继续准备 DIY...",
                progressText: "素材预热未完整，正在重试",
                progressPercent: 88,
              }),
                e.scheduleCriticalResourceRetry();
            })
            .finally(function () {
              var t = Date.now() - Number(e._bootStartedAt || Date.now()),
                r = Math.max(0, Number(e._minLoadingGateMs || 1500)),
                a = Math.max(0, r - t);
              e._redirectTimer = setTimeout(function () {
                e._criticalReady
                  ? e.redirectToTargetWithBuffer()
                  : (e._pendingRedirectAfterReady = !0);
              }, a);
            });
      },
      prepareDiyCriticalResources: function () {
        var a = this;
        return t(
          e().mark(function t() {
            var n, i, o, d, l, c, m, h, g, p, _, f, x, b, R, v, P, M, I, w;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      a.setLoadingState({
                        loadingText: "正在加载核心素材...",
                        progressText: "同步材料库",
                        progressPercent: 28,
                      }),
                      (n = U(a.data && a.data.targetUrl)),
                      (a._targetSchemeContext = n),
                      (e.next = 5),
                      s({
                        forceRemote: !1,
                        preferCache: !0,
                        remoteTimeoutMs: 8e3,
                      })
                    );
                  case 5:
                    if (
                      ((i = e.sent),
                      !(o =
                        i && i.payload && "object" === r(i.payload)
                          ? i.payload
                          : null))
                    ) {
                      e.next = 14;
                      break;
                    }
                    return (
                      u(o),
                      (d = Number(n && n.bgIndex)),
                      (a._preferredBgIndex = Number.isFinite(d)
                        ? Math.max(0, Math.round(d))
                        : D(o)),
                      (e.next = 13),
                      B(o, a._preferredBgIndex)
                    );
                  case 13:
                    Array.isArray(o.beadTypes) &&
                      o.beadTypes.length &&
                      (L(o), (a._catalogReadyForIndex = !0));
                  case 14:
                    if (
                      ((l =
                        i && Array.isArray(i.criticalAssets)
                          ? i.criticalAssets
                          : []),
                      (c =
                        T(a._blindBoxSessionSeed) ||
                        "blindbox_"
                          .concat(Date.now(), "_")
                          .concat(Math.random().toString(36).slice(2, 10))),
                      (a._blindBoxSessionSeed = c),
                      C(c),
                      (m =
                        i && Array.isArray(i.blindBoxPresetPool)
                          ? i.blindBoxPresetPool
                          : []),
                      (h =
                        i && Array.isArray(i.blindBoxWarmupAssets)
                          ? i.blindBoxWarmupAssets
                          : []),
                      (g = o ? J(o, m, c) : []),
                      (p = a._diyRenderDeviceTier || y()),
                      (_ = o ? H(o, p) : []),
                      (a._blindBoxWarmupReadyForIndex = 0 === h.length),
                      m.length &&
                        (F(m), (a._blindBoxPresetPoolReadyForIndex = !0)),
                      g.length && ((a._blindBoxReadyCandidates = g), W(g)),
                      (a._materialsBundleReadyForIndex =
                        i && !0 === i.materialsBundleReady),
                      (a._minLoadingGateMs =
                        ((t = l.length),
                        (O =
                          Date.now() - Number(a._bootStartedAt || Date.now())),
                        (N = void 0),
                        (N = Math.max(0, Number(t || 0))),
                        Math.max(0, Number(O || 0)) >= 1500
                          ? 0
                          : N <= 0 || N <= 8
                          ? 900
                          : 1500)),
                      (f = j(n && n.pattern)),
                      (x = n && (n.materialMap || n.materialSnapshot)),
                      (a._schemePatternReadyForIndex = K(f, o, x)),
                      (b = Y(f, o, x)),
                      (a._schemeAssetsReadyForIndex = !(
                        !0 !== a._schemePatternReadyForIndex ||
                        (b.length && f.length)
                      )),
                      (a._entryMaterialWarmupTotal = _.length),
                      (a._entryMaterialWarmupLoaded = 0),
                      (a._entryMaterialWarmupTimedOut = !1),
                      (a._entryMaterialWarmupDurationMs = 0),
                      (a._entryP0Total = l.length + b.length),
                      (a._entryP0Loaded = 0),
                      (a._entryP0ReadyRatio = A(
                        a._entryP0Loaded,
                        a._entryP0Total
                      )),
                      l.length)
                    ) {
                      e.next = 68;
                      break;
                    }
                    if (!_.length) {
                      e.next = 50;
                      break;
                    }
                    return (
                      a.setLoadingState({
                        progressText: "预热首屏素材",
                        progressPercent: 90,
                      }),
                      (e.next = 45),
                      Q(
                        _,
                        function (e) {
                          var t = e.loaded;
                          a._entryMaterialWarmupLoaded = t;
                        },
                        p
                      )
                    );
                  case 45:
                    (R = e.sent),
                      (a._entryMaterialWarmupLoaded =
                        R.loaded || a._entryMaterialWarmupLoaded),
                      (a._entryMaterialWarmupTimedOut = !0 === R.timedOut),
                      (a._entryMaterialWarmupDurationMs = R.durationMs || 0),
                      k({
                        entryId: a._entryId,
                        event: "diy_entry_material_warmup",
                        renderDeviceTier: p.tier,
                        total: R.total,
                        loaded: a._entryMaterialWarmupLoaded,
                        timedOut: !0 === R.timedOut,
                        durationMs: R.durationMs,
                      });
                  case 50:
                    if (!b.length) {
                      e.next = 56;
                      break;
                    }
                    return (
                      a.setLoadingState({
                        progressText: "同步当前方案素材",
                        progressPercent: 96,
                      }),
                      (v = a._entryP0Loaded),
                      (e.next = 55),
                      X(b, function (e) {
                        var t = e.loaded;
                        (a._entryP0Loaded = v + t),
                          (a._entryP0ReadyRatio = A(
                            a._entryP0Loaded,
                            a._entryP0Total
                          ));
                      })
                    );
                  case 55:
                    a._schemeAssetsReadyForIndex = e.sent;
                  case 56:
                    if (!(P = z(g, h)).required.length) {
                      e.next = 62;
                      break;
                    }
                    return (
                      a.setLoadingState({
                        progressText: "预热灵感方案素材",
                        progressPercent: 98,
                      }),
                      (e.next = 61),
                      te(P.required, null, { assetLimit: 72 })
                    );
                  case 61:
                    a._blindBoxWarmupReadyForIndex = e.sent;
                  case 62:
                    if (
                      (P.background.length &&
                        te(P.background, null)
                          .then(function (e) {
                            a._blindBoxWarmupReadyForIndex =
                              !0 === a._blindBoxWarmupReadyForIndex || !0 === e;
                          })
                          .catch(function () {}),
                      a._catalogReadyForIndex &&
                        a._materialsBundleReadyForIndex &&
                        a._schemePatternReadyForIndex &&
                        !0 === a._schemeAssetsReadyForIndex)
                    ) {
                      e.next = 65;
                      break;
                    }
                    throw new Error("DIY entry resources are not fully ready");
                  case 65:
                    return (
                      a.setLoadingState({
                        progressText: "素材已就绪",
                        progressPercent: 100,
                      }),
                      a.markCriticalReady("p0_ready"),
                      e.abrupt("return")
                    );
                  case 68:
                    return (
                      a.setLoadingState({
                        progressText: "预热 ".concat(l.length, " 项素材"),
                        progressPercent: 38,
                      }),
                      (e.next = 71),
                      X(l, function (e) {
                        var t = e.loaded,
                          r = e.total;
                        if (!a._redirected && !a._unloaded && r) {
                          (a._entryP0Loaded = t),
                            (a._entryP0ReadyRatio = A(
                              a._entryP0Loaded,
                              a._entryP0Total
                            ));
                          var n,
                            i,
                            o,
                            s = Math.min(
                              100,
                              Math.max(0, Math.floor((t / r) * 100))
                            );
                          if (s !== a._lastAssetProgressPercent)
                            (a._lastAssetProgressPercent = s),
                              a.setLoadingState({
                                progressText: "素材预热 ".concat(s, "%"),
                                progressPercent:
                                  ((n = s),
                                  (i = S(n)),
                                  (o = 38 + Math.floor((i / 100) * 60)),
                                  Math.max(38, Math.min(99, o))),
                              });
                        }
                      })
                    );
                  case 71:
                    if (e.sent) {
                      e.next = 74;
                      break;
                    }
                    throw new Error("DIY critical assets are not fully ready");
                  case 74:
                    if (!_.length) {
                      e.next = 83;
                      break;
                    }
                    return (
                      a.setLoadingState({
                        progressText: "预热首屏素材",
                        progressPercent: 92,
                      }),
                      (e.next = 78),
                      Q(
                        _,
                        function (e) {
                          var t = e.loaded;
                          a._entryMaterialWarmupLoaded = t;
                        },
                        p
                      )
                    );
                  case 78:
                    (M = e.sent),
                      (a._entryMaterialWarmupLoaded =
                        M.loaded || a._entryMaterialWarmupLoaded),
                      (a._entryMaterialWarmupTimedOut = !0 === M.timedOut),
                      (a._entryMaterialWarmupDurationMs = M.durationMs || 0),
                      k({
                        entryId: a._entryId,
                        event: "diy_entry_material_warmup",
                        renderDeviceTier: p.tier,
                        total: M.total,
                        loaded: a._entryMaterialWarmupLoaded,
                        timedOut: !0 === M.timedOut,
                        durationMs: M.durationMs,
                      });
                  case 83:
                    if (!b.length) {
                      e.next = 89;
                      break;
                    }
                    return (
                      a.setLoadingState({
                        progressText: "同步当前方案素材",
                        progressPercent: 96,
                      }),
                      (I = a._entryP0Loaded),
                      (e.next = 88),
                      X(b, function (e) {
                        var t = e.loaded;
                        (a._entryP0Loaded = I + t),
                          (a._entryP0ReadyRatio = A(
                            a._entryP0Loaded,
                            a._entryP0Total
                          ));
                      })
                    );
                  case 88:
                    a._schemeAssetsReadyForIndex = e.sent;
                  case 89:
                    if (!(w = z(g, h)).required.length) {
                      e.next = 95;
                      break;
                    }
                    return (
                      a.setLoadingState({
                        progressText: "预热灵感方案素材",
                        progressPercent: 98,
                      }),
                      (e.next = 94),
                      te(w.required, null, { assetLimit: 72 })
                    );
                  case 94:
                    a._blindBoxWarmupReadyForIndex = e.sent;
                  case 95:
                    if (
                      (w.background.length &&
                        te(w.background, null)
                          .then(function (e) {
                            a._blindBoxWarmupReadyForIndex =
                              !0 === a._blindBoxWarmupReadyForIndex || !0 === e;
                          })
                          .catch(function () {}),
                      a._catalogReadyForIndex &&
                        a._materialsBundleReadyForIndex &&
                        a._schemePatternReadyForIndex &&
                        !0 === a._schemeAssetsReadyForIndex)
                    ) {
                      e.next = 98;
                      break;
                    }
                    throw new Error("DIY entry resources are not fully ready");
                  case 98:
                    a.setLoadingState({
                      loadingText: "DIY 即将就绪...",
                      progressText: "核心素材加载完成",
                      progressPercent: 100,
                    }),
                      a._criticalReady || a.markCriticalReady("p0_ready");
                  case 100:
                  case "end":
                    return e.stop();
                }
              var t, O, N;
            }, t);
          })
        )();
      },
      redirectToTarget: function () {
        var e = this;
        if (!this._redirected) {
          (this._redirected = !0),
            this._watchdogTimer &&
              (clearTimeout(this._watchdogTimer), (this._watchdogTimer = null)),
            this._hardFallbackTimer &&
              (clearTimeout(this._hardFallbackTimer),
              (this._hardFallbackTimer = null)),
            this._redirectTimer &&
              (clearTimeout(this._redirectTimer), (this._redirectTimer = null)),
            this._postReadyTimer &&
              (clearTimeout(this._postReadyTimer),
              (this._postReadyTimer = null)),
            this._partialRevealTimer &&
              (clearTimeout(this._partialRevealTimer),
              (this._partialRevealTimer = null)),
            this.setLoadingState({
              loadingText: "正在进入 DIY...",
              progressText: "首屏已准备完毕",
              progressPercent: 100,
            });
          var t = P(
              this.data && this.data.targetUrl,
              "standalone_diy_loading_redirect",
              this._returnTab
            ),
            r = {
              ts: Date.now(),
              entryId: String(this._entryId || ""),
              source: String(this._entrySource || "standalone_diy_loading"),
              targetUrl: t,
              targetTab: "diy",
              from: "diy-loading",
              blindBoxSessionSeed: T(this._blindBoxSessionSeed),
              returnTab: b(this._returnTab),
              expiresAt: Date.now() + 12e3,
              preferredBgIndex: Number(this._preferredBgIndex || 0),
              schemeBgIndex: Number(this._preferredBgIndex || 0),
              schemeName: String(
                (this._targetSchemeContext && this._targetSchemeContext.name) ||
                  ""
              ).trim(),
              schemeBeadMm:
                Number(
                  this._targetSchemeContext && this._targetSchemeContext.beadMm
                ) || null,
              schemePreviewRenderVersion:
                Number(
                  this._targetSchemeContext &&
                    this._targetSchemeContext.previewRenderVersion
                ) || null,
              catalogReady: !0 === this._catalogReadyForIndex,
              schemePatternReady: !0 === this._schemePatternReadyForIndex,
              schemeAssetsReady: !0 === this._schemeAssetsReadyForIndex,
              entryP0Total: Math.max(0, Number(this._entryP0Total || 0)),
              entryP0Loaded: Math.max(0, Number(this._entryP0Loaded || 0)),
              entryP0ReadyRatio: A(this._entryP0Loaded, this._entryP0Total),
              entryP0TimedOut: !0 === this._entryP0TimedOut,
              renderDeviceTier:
                String(
                  (this._diyRenderDeviceTier &&
                    this._diyRenderDeviceTier.tier) ||
                    ""
                ).trim() || "normal",
              entryMaterialWarmupTotal: Math.max(
                0,
                Number(this._entryMaterialWarmupTotal || 0)
              ),
              entryMaterialWarmupLoaded: Math.max(
                0,
                Number(this._entryMaterialWarmupLoaded || 0)
              ),
              entryMaterialWarmupTimedOut:
                !0 === this._entryMaterialWarmupTimedOut,
              entryMaterialWarmupDurationMs: Math.max(
                0,
                Number(this._entryMaterialWarmupDurationMs || 0)
              ),
              criticalReadyReason: String(
                this._criticalReadyReason || ""
              ).trim(),
              catalogSnapshotReady: !0 === this._catalogReadyForIndex,
              materialsBundleReady: !0 === this._materialsBundleReadyForIndex,
              blindBoxPresetPoolReady:
                !0 === this._blindBoxPresetPoolReadyForIndex,
              blindBoxPoolReady: !0 === this._blindBoxPresetPoolReadyForIndex,
              blindBoxReadyCandidatesReady: !(
                !Array.isArray(this._blindBoxReadyCandidates) ||
                !this._blindBoxReadyCandidates.length
              ),
              blindBoxCandidateImagesReady:
                !0 === this._blindBoxWarmupReadyForIndex,
              blindBoxRenderReady: !1,
              blindBoxWarmupReady: !0 === this._blindBoxWarmupReadyForIndex,
              patternReady: !0 === this._schemePatternReadyForIndex,
              assetsReady: !0 === this._schemeAssetsReadyForIndex,
              geometryReady: !1,
              preparedStages: {
                catalog: !0 === this._materialsBundleReadyForIndex,
                materials: !0 === this._materialsBundleReadyForIndex,
                pattern: !0 === this._schemePatternReadyForIndex,
                assets: !0 === this._schemeAssetsReadyForIndex,
                blindBox: !(
                  !Array.isArray(this._blindBoxReadyCandidates) ||
                  !this._blindBoxReadyCandidates.length ||
                  !0 !== this._blindBoxWarmupReadyForIndex
                ),
                blindBoxAssets: !0 === this._blindBoxWarmupReadyForIndex,
                tray: !0 === this._criticalReady,
                geometry: !1,
              },
              skipIndexSceneMask:
                !0 === this._criticalReady &&
                !0 === this._catalogReadyForIndex &&
                !0 === this._materialsBundleReadyForIndex &&
                !0 === this._blindBoxPresetPoolReadyForIndex &&
                !0 === this._blindBoxWarmupReadyForIndex &&
                !0 === this._schemePatternReadyForIndex &&
                !0 === this._schemeAssetsReadyForIndex,
              preparedAt: Date.now(),
            };
          k({
            entryId: r.entryId,
            source: r.source,
            durationMs: Math.max(
              0,
              Date.now() - Number(this._bootStartedAt || Date.now())
            ),
            maxVisibleLoadingMs: Math.max(
              0,
              Number(this._maxVisibleLoadingMs || 0)
            ),
            entryP0Total: r.entryP0Total,
            entryP0Loaded: r.entryP0Loaded,
            entryP0ReadyRatio: r.entryP0ReadyRatio,
            entryP0TimedOut: r.entryP0TimedOut,
            renderDeviceTier: r.renderDeviceTier,
            entryMaterialWarmupTotal: r.entryMaterialWarmupTotal,
            entryMaterialWarmupLoaded: r.entryMaterialWarmupLoaded,
            entryMaterialWarmupTimedOut: r.entryMaterialWarmupTimedOut,
            entryMaterialWarmupDurationMs: r.entryMaterialWarmupDurationMs,
            criticalReadyReason: r.criticalReadyReason,
            schemeAssetsReady: r.schemeAssetsReady,
            blindBoxCandidateImagesReady: r.blindBoxCandidateImagesReady,
          }),
            p(r);
          o(t, {
            methods: ["redirectTo", "reLaunch"],
            onFailed: function () {
              o(v(e._returnTab), { methods: ["reLaunch", "redirectTo"] });
            },
          });
        }
      },
    });
  },
  { isPage: true, isComponent: true, currentFile: "pages/diy-loading/index.js" }
);
require("pages/diy-loading/index.js");
