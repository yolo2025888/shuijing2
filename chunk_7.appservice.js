$gwx_XC_7 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_7 || [];
    function gz$gwx_XC_7_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "product-page"]);
        Z([3, "product-scroll"]);
        Z([1, true]);
        Z([3, "false"]);
        Z([[7], [3, "frameReady"]]);
        Z([3, "product-wrap"]);
        Z([3, "product-hero"]);
        Z([
          [2, "&&"],
          [
            [2, "&&"],
            [[7], [3, "detail"]],
            [[6], [[7], [3, "detail"]], [3, "images"]],
          ],
          [[6], [[6], [[7], [3, "detail"]], [3, "images"]], [3, "length"]],
        ]);
        Z([3, "product-hero__placeholder"]);
        Z([[7], [3, "initialHeroPreviewUrl"]]);
        Z([
          [2, "&&"],
          [
            [2, "&&"],
            [[7], [3, "detail"]],
            [[6], [[7], [3, "detail"]], [3, "pattern"]],
          ],
          [[6], [[6], [[7], [3, "detail"]], [3, "pattern"]], [3, "length"]],
        ]);
        Z([
          [2, "||"],
          [
            [2, "||"],
            [[6], [[7], [3, "detail"]], [3, "beadMm"]],
            [[6], [[7], [3, "detail"]], [3, "bead_mm"]],
          ],
          [1, 11],
        ]);
        Z([3, "product-hero__fallback-bracelet"]);
        Z([1, 220]);
        Z([
          [2, "||"],
          [[6], [[7], [3, "detail"]], [3, "pattern"]],
          [[4], [[5]]],
        ]);
        Z([
          [2, "||"],
          [
            [2, "||"],
            [[6], [[7], [3, "detail"]], [3, "previewRenderVersion"]],
            [[6], [[7], [3, "detail"]], [3, "preview_render_version"]],
          ],
          [1, 1],
        ]);
        Z([1, false]);
        Z([
          [2, "!=="],
          [[7], [3, "productPhotosStatus"]],
          [1, "hidden"],
        ]);
        Z([
          [2, "&&"],
          [
            [2, "!"],
            [[7], [3, "productPhotosLoading"]],
          ],
          [[6], [[7], [3, "productPhotos"]], [3, "length"]],
        ]);
        Z([
          [2, "&&"],
          [[7], [3, "errorMessage"]],
          [
            [2, "!"],
            [[7], [3, "dataReady"]],
          ],
        ]);
        Z([
          [2, "&&"],
          [[7], [3, "dataReady"]],
          [[7], [3, "detail"]],
        ]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_7 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_7 = true;
    var x = ["./pages/product/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_7_1();
      var l9L = _n("view");
      _rz(z, l9L, "class", 0, e, s, gg);
      var tAM = _mz(
        z,
        "scroll-view",
        ["class", 1, "scrollY", 1, "showScrollbar", 2],
        [],
        e,
        s,
        gg
      );
      var eBM = _v();
      _(tAM, eBM);
      if (_oz(z, 4, e, s, gg)) {
        eBM.wxVkey = 1;
        var bCM = _n("view");
        _rz(z, bCM, "class", 5, e, s, gg);
        var xEM = _n("view");
        _rz(z, xEM, "class", 6, e, s, gg);
        var oFM = _v();
        _(xEM, oFM);
        if (_oz(z, 7, e, s, gg)) {
          oFM.wxVkey = 1;
        } else {
          oFM.wxVkey = 2;
          var fGM = _n("view");
          _rz(z, fGM, "class", 8, e, s, gg);
          var cHM = _v();
          _(fGM, cHM);
          if (_oz(z, 9, e, s, gg)) {
            cHM.wxVkey = 1;
          } else if (_oz(z, 10, e, s, gg)) {
            cHM.wxVkey = 2;
            var hIM = _mz(
              z,
              "mini-bracelet-flat",
              [
                "beadSize",
                11,
                "class",
                1,
                "containerSize",
                2,
                "pattern",
                3,
                "renderVersion",
                4,
                "snapshotShadow",
                5,
              ],
              [],
              e,
              s,
              gg
            );
            _(cHM, hIM);
          } else {
            cHM.wxVkey = 3;
          }
          cHM.wxXCkey = 1;
          cHM.wxXCkey = 3;
          _(oFM, fGM);
        }
        oFM.wxXCkey = 1;
        oFM.wxXCkey = 3;
        _(bCM, xEM);
        var oDM = _v();
        _(bCM, oDM);
        if (_oz(z, 17, e, s, gg)) {
          oDM.wxVkey = 1;
          var oJM = _v();
          _(oDM, oJM);
          if (_oz(z, 18, e, s, gg)) {
            oJM.wxVkey = 1;
          }
          oJM.wxXCkey = 1;
        }
        oDM.wxXCkey = 1;
        _(eBM, bCM);
      } else if (_oz(z, 19, e, s, gg)) {
        eBM.wxVkey = 2;
      } else {
        eBM.wxVkey = 3;
      }
      eBM.wxXCkey = 1;
      eBM.wxXCkey = 3;
      _(l9L, tAM);
      var a0L = _v();
      _(l9L, a0L);
      if (_oz(z, 20, e, s, gg)) {
        a0L.wxVkey = 1;
      }
      a0L.wxXCkey = 1;
      _(r, l9L);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_7";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_7();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/product/index.wxml"] = [
    $gwx_XC_7,
    "./pages/product/index.wxml",
  ];
else
  __wxAppCode__["pages/product/index.wxml"] = $gwx_XC_7(
    "./pages/product/index.wxml"
  );
__wxRoute = "pages/product/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/product/index.js";
define(
  "pages/product/index.js",
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
    var e = require("../../@babel/runtime/helpers/objectSpread2"),
      t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
      r = require("../../@babel/runtime/helpers/asyncToGenerator"),
      a = require("../../@babel/runtime/helpers/typeof"),
      n =
        require("../../contracts/navigation/query-contract").appendQueryParams,
      i = require("../../facades/v2/product-facade"),
      o = i.hydrateProductStructureByPattern,
      u = i.loadProductDetailById,
      s = i.loadProductMediaById,
      c = i.reportProductPresetView,
      d = i.resolveProductPatternMaterialMap,
      p = i.sanitizePresetId,
      l = require("../../facades/v2/preset-detail-cache"),
      h = l.readPresetDetailCache,
      m = l.readPresetDetailVisualLock,
      f = require("../../utils/assetCache"),
      g = f.cacheAssetPath,
      b = f.getCachedAssetPath,
      _ = f.invalidateCachedAssetPath,
      v = require("../../utils/catalog").resolveAssetPath,
      y = require("../../utils/navigation/navigate-with-fallback"),
      S = y.backToKnownSource,
      w = y.openDetailPage,
      k = y.openDiyEntry,
      x = require("../../utils/diyEntrySession"),
      I = x.buildDiyEntrySessionId,
      P = x.saveDiyEntrySession,
      j = require("../../utils/media-url").resolveRemoteMediaUrl,
      M = require("../../domain-hosts/shared/share-card-composer"),
      A = M.SHARE_CARD_IMAGE_URL,
      T = M.DEFAULT_SHARE_CARD_WIDTH,
      U = M.DEFAULT_SHARE_CARD_HEIGHT,
      N = M.composeBraceletShareCard,
      L =
        require("../../domain/v2/preset-author-domain").resolvePresetAuthorPresentation,
      D = require("../../config/env").getRuntimeEnvConfig,
      C = T,
      R = U,
      E = new Set(["home", "inspiration", "cart", "profile"]),
      O =
        "/assets/%E6%96%B9%E6%A1%88/%E8%AE%BE%E8%AE%A1%E5%B8%88%E6%96%B9%E6%A1%88%E5%AE%9E%E6%8B%8D%E5%9B%BE",
      B = new Set([
        "s_1778655473961",
        "s_1778655876883",
        "s_1778831353810",
        "s_1778655645452",
        "s_1778655234032",
        "s_1778655004376",
        "s_1778831723914",
        "s_1777909604792",
        "s_1778831087452",
        "s_1777910026038",
        "s_1777907906972",
        "s_1778832070998",
        "s_1778832018802",
        "s_1778831601397",
        "s_1777909329374",
        "s_1778831443482",
        "s_1778831269554",
        "s_1777908858256",
        "s_1778831010973",
        "s_1777909026416",
        "s_1777908332833",
        "s_1777909213234",
      ]),
      q = { s_1778655234032: [1, 3], s_1777909026416: [1, 2] };
    function F(e) {
      var t = String(e || "")
        .trim()
        .toLowerCase();
      return E.has(t) ? t : "";
    }
    function H(e) {
      var t = null;
      try {
        t =
          "undefined" != typeof wx &&
          "function" == typeof wx.getMenuButtonBoundingClientRect
            ? wx.getMenuButtonBoundingClientRect()
            : null;
      } catch (e) {
        t = null;
      }
      var r = Number(e && e.statusBarHeight) || 22;
      return {
        top:
          t && Number.isFinite(Number(t.top))
            ? Math.max(0, Math.round(Number(t.top)))
            : r,
        height:
          t && Number.isFinite(Number(t.height))
            ? Math.max(1, Math.round(Number(t.height)))
            : 32,
      };
    }
    function V() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "standalone_diy_product_apply",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = r && "object" === a(r) ? r : {},
        o = {
          schemeId: String(t || "").trim(),
          source:
            String(e || "standalone_diy_product_apply").trim() ||
            "standalone_diy_product_apply",
          returnTab: F(i.returnTab),
        };
      return (
        void 0 !== i.sharedBgIndex &&
          null !== i.sharedBgIndex &&
          "" !== i.sharedBgIndex &&
          (o.sharedBgIndex = String(i.sharedBgIndex)),
        i.sharedName && (o.sharedName = String(i.sharedName || "").trim()),
        i.entryId && (o.entryId = String(i.entryId || "").trim()),
        n("/pages/diy/index", o)
      );
    }
    function W(e) {
      return j(String(e || "").trim());
    }
    function K() {
      return "undefined" == typeof wx ||
        "function" != typeof wx.getStorageSync ||
        "function" != typeof wx.setStorageSync
        ? null
        : wx;
    }
    function z() {
      var e = K();
      if (!e) return "";
      try {
        var t = String(
          e.getStorageSync("stonelab_client_view_id_v1") || ""
        ).trim();
        if (t) return t;
        var r = "pv_"
          .concat(Date.now(), "_")
          .concat(Math.random().toString(36).slice(2, 12));
        return e.setStorageSync("stonelab_client_view_id_v1", r), r;
      } catch (e) {
        return "";
      }
    }
    function G() {
      var e = K();
      if (!e) return Object.create(null);
      try {
        var t = e.getStorageSync("stonelab_product_view_dedup_v1");
        return t && "object" === a(t)
          ? Object.assign(Object.create(null), t)
          : Object.create(null);
      } catch (e) {
        return Object.create(null);
      }
    }
    function Q(e) {
      var t = String(e || "").trim();
      if (!t) return !0;
      var r = G(),
        a = Number(r[t] || 0);
      return a > 0 && Date.now() - a < 3e5;
    }
    function Y(e) {
      var t = String(e || "").trim();
      if (t) {
        var r = G(),
          a = Date.now();
        (r[t] = a),
          Object.keys(r).forEach(function (e) {
            a - Number(r[e] || 0) > 12e5 && delete r[e];
          }),
          (function (e) {
            var t = K();
            if (t)
              try {
                t.setStorageSync(
                  "stonelab_product_view_dedup_v1",
                  e || Object.create(null)
                );
              } catch (e) {}
          })(r);
      }
    }
    function $(e, t) {
      for (
        var r = e && "object" === a(e) ? e : {},
          n = [
            r.sourceInspirationTemplateId,
            r.source_inspiration_template_id,
            r.templateId,
            r.template_id,
            r.presetId,
            r.preset_id,
            r.id,
            r.code,
            t,
          ],
          i = 0;
        i < n.length;
        i += 1
      ) {
        var o = String(n[i] || "").trim();
        if (o) return o;
      }
      return "";
    }
    function J(e) {
      for (
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
          r = Array.isArray(e) ? e : [],
          a = [],
          n = new Set(),
          i = 0;
        i < r.length;
        i += 1
      ) {
        var o = W(r[i]);
        if (o && !n.has(o) && (n.add(o), a.push(o), a.length >= t)) break;
      }
      return a;
    }
    function X(e) {
      var t = String(e || "")
        .trim()
        .toLowerCase();
      return (
        !t ||
        0 === t.indexOf("wxfile://") ||
        0 === t.indexOf("blob:") ||
        0 === t.indexOf("data:image") ||
        0 === t.indexOf("http://tmp/") ||
        /^[a-z]:\\/.test(t)
      );
    }
    function Z(e) {
      var t = (function (e) {
        for (
          var t = e && "object" === a(e) ? e : {},
            r = [
              t.detailPreviewUrl,
              t.detail_preview_url,
              t.fullPreviewUrl,
              t.full_preview_url,
              t.preview_url,
              t.snapshot_url,
              t.previewUrl,
              t.snapshotUrl,
            ],
            n = 0;
          n < r.length;
          n += 1
        ) {
          var i = W(v(String(r[n] || "").trim()));
          if (i && !X(i)) return i;
        }
        return "";
      })(e && "object" === a(e) ? e : {});
      return t && !X(t) ? t : "";
    }
    function ee(e) {
      var t = Z(e && "object" === a(e) ? e : {});
      return t ? J([t], 1) : [];
    }
    function te() {
      var e = D();
      return (
        String(
          e && e.assetCdnBaseUrl
            ? e.assetCdnBaseUrl
            : "https://stonlab-1g57aqhi841eebf4-1307595304.tcloudbaseapp.com"
        )
          .trim()
          .replace(/\/+$/, "") ||
        "https://stonlab-1g57aqhi841eebf4-1307595304.tcloudbaseapp.com"
      );
    }
    function re(e) {
      var t = e && "object" === a(e) ? e : {};
      return String(t.id || t.code || t.presetId || t.preset_id || "").trim();
    }
    function ae(e) {
      var t = e && "object" === a(e) ? e : {},
        r = String(t.category || "")
          .trim()
          .toLowerCase(),
        n = Array.isArray(t.sectionCodes)
          ? t.sectionCodes
          : Array.isArray(t.section_codes)
          ? t.section_codes
          : [];
      return (
        "customer" === r ||
        !0 === t.isCustomerPreset ||
        !0 === t.is_customer_preset ||
        n
          .map(function (e) {
            return String(e || "")
              .trim()
              .toLowerCase();
          })
          .includes("customer")
      );
    }
    function ne(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        r = e && "object" === a(e) ? e : {},
        n = re(r),
        i = String(r.name || r.title || "").trim();
      if (!n || !i) return [];
      if (!ae(r)) return [];
      if (!B.has(n)) return [];
      var o = te(),
        u = encodeURIComponent(i),
        s = Math.max(1, Math.min(3, Number(t) || 3)),
        c = Array.isArray(q[n]) ? q[n] : [1, 2, 3];
      return c.slice(0, s).map(function (e) {
        return "".concat(o).concat(O, "/").concat(u).concat(e, ".webp");
      });
    }
    function ie(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        r = e && "object" === a(e) ? e : {},
        n = Array.isArray(r.liveMedia)
          ? r.liveMedia
          : Array.isArray(r.live_media)
          ? r.live_media
          : [],
        i = [];
      n.forEach(function (e) {
        var t = e && "object" === a(e) ? e : {},
          r = String(t.type || "")
            .trim()
            .toLowerCase(),
          n =
            t.imageUrl ||
            t.image_url ||
            t.posterUrl ||
            t.poster_url ||
            t.poster ||
            ("image" === r ? t.url : "");
        n && i.push(v(String(n || "").trim()));
      });
      var o = J(i, t);
      return o.length ? o : J(ne(r, t), t);
    }
    function oe(e) {
      return {
        productPhotosLoading: !1,
        productPhotosStatus: (Array.isArray(e) ? e : []).length
          ? "ready"
          : "empty",
      };
    }
    function ue(e) {
      var t = e && "object" === a(e) ? e : {},
        r = W(ee(t)[0]);
      if (r) return r;
      var n = W(
        v(t.previewUrl) || t.preview_url || t.snapshotUrl || t.snapshot_url
      );
      return n && !X(n) ? n : "";
    }
    function se(e) {
      return Array.isArray(e)
        ? e
            .map(function (e) {
              return String(null == e ? "" : e).trim();
            })
            .filter(Boolean)
        : [];
    }
    function ce(e, t) {
      var r = Number(e);
      if (Number.isFinite(r)) return r;
      var a = Number(t);
      return Number.isFinite(a) ? a : null;
    }
    function de(e, t) {
      for (
        var r = e && "object" === a(e) ? e : {},
          n = Array.isArray(t) ? t : [],
          i = 0;
        i < n.length;
        i += 1
      ) {
        var o = String(r[n[i]] || "").trim();
        if (o) return o;
      }
      return "";
    }
    function pe(e) {
      var t = e && "object" === a(e) ? e : {},
        r = String(t.id || "").trim(),
        n = se(t.pattern);
      if (!r || !n.length) return null;
      var i = ce(t.bgIndex, void 0 !== t.bg_index ? t.bg_index : 0),
        o = ce(t.beadMm, t.bead_mm),
        u = ce(t.previewRenderVersion, t.preview_render_version),
        s = W(
          t.previewUrl ||
            t.preview_url ||
            t.snapshotUrl ||
            t.snapshot_url ||
            t.coverUrl ||
            t.cover_url ||
            t.imageUrl ||
            t.image_url
        ),
        c = p(
          t.presetId ||
            t.preset_id ||
            t.sourcePresetId ||
            t.source_preset_id ||
            t.id
        ),
        d = {
          id: r,
          name: String(t.name || "").trim() || "未命名方案",
          pattern: n,
          bgIndex: Number.isFinite(i) ? i : 0,
          date:
            String(t.date || "").trim() ||
            new Date().toISOString().slice(0, 10),
          previewUrl: s,
          snapshotUrl: s,
        };
      c &&
        ((d.presetId = c),
        (d.preset_id = c),
        (d.sourcePresetId = c),
        (d.source_preset_id = c)),
        Number.isFinite(o) && o > 0 && ((d.beadMm = o), (d.bead_mm = o)),
        Number.isFinite(u) &&
          u > 0 &&
          ((d.previewRenderVersion = u), (d.preview_render_version = u));
      var l = de(t, ["category", "presetCategory", "preset_category"]);
      l && (d.category = l);
      var h = de(t, ["sourceType", "source_type"]);
      h && ((d.sourceType = h), (d.source_type = h));
      var m = de(t, [
        "designerName",
        "designer_name",
        "authorName",
        "author_name",
        "creatorName",
        "creator_name",
      ]);
      return (
        m && ((d.designerName = m), (d.designer_name = m)),
        t.materialMap &&
          "object" === a(t.materialMap) &&
          (d.materialMap = t.materialMap),
        t.materialSnapshot &&
          "object" === a(t.materialSnapshot) &&
          (d.materialSnapshot = t.materialSnapshot),
        d
      );
    }
    function le(e, t, r) {
      var n = e && "object" === a(e) ? e : {},
        i = se(n.pattern);
      if (!i.length) return null;
      var o = p(n.id || n.presetId || n.preset_id),
        u = Object.assign(
          {},
          (function (e) {
            var t = Array.isArray(e) ? e : [],
              r = {};
            return (
              t.forEach(function (e) {
                var t = e && "object" === a(e) ? e : {},
                  n = String(
                    t.id || t.materialId || t.material_id || t.code || ""
                  ).trim();
                n && !r[n] && (r[n] = Object.assign({}, t, { id: n }));
              }),
              r
            );
          })(t),
          n.materialMap && "object" === a(n.materialMap) ? n.materialMap : {},
          n.materialSnapshot && "object" === a(n.materialSnapshot)
            ? n.materialSnapshot
            : {},
          r && "object" === a(r) ? r : {}
        );
      return pe(
        Object.assign({}, n, {
          id: "preset_".concat(o || Date.now()),
          pattern: i,
          materialMap: u,
          materialSnapshot: u,
          presetId: o,
          preset_id: o,
          sourcePresetId: o,
          source_preset_id: o,
          sourceType: n.sourceType || n.source_type || "inspiration",
          source_type: n.sourceType || n.source_type || "inspiration",
        })
      );
    }
    function he(e, t, r) {
      var a = le(e, t, r);
      if (!a) return "";
      if (
        "undefined" == typeof wx ||
        "function" != typeof wx.getStorageSync ||
        "function" != typeof wx.setStorageSync
      )
        return a.id;
      try {
        var n = wx.getStorageSync("jieshanshi_schemes"),
          i = Array.isArray(n) ? n : [],
          o = [],
          u = new Set(),
          s = function (e) {
            var t = pe(e);
            t && !u.has(t.id) && (u.add(t.id), o.push(t));
          };
        s(a),
          i.forEach(s),
          wx.setStorageSync("jieshanshi_schemes", o.slice(0, 80));
      } catch (e) {}
      return a.id;
    }
    function me(e) {
      var t = e && "object" === a(e) ? e : {},
        r = W(t.listImgUrl);
      return (
        r ||
        (Array.isArray(t.variants) && t.variants.length ? W(t.variants[0]) : "")
      );
    }
    function fe(e) {
      return (Array.isArray(e) ? e : []).map(function (e) {
        var t = e && "object" === a(e) ? e : {},
          r = me(t),
          n = r ? b(r) : "";
        return Object.assign({}, t, { thumbUrl: n || r });
      });
    }
    function ge(e, t) {
      var r = W(t);
      r && (e.indexOf(r) >= 0 || e.push(r));
    }
    function be(e, t, r) {
      var n = [],
        i = Array.isArray(r) ? r : [];
      i[0] && ge(n, i[0]);
      var o = Array.isArray(t) ? t : [];
      o.slice(0, 6).forEach(function (e) {
        var t = e && "object" === a(e) ? e : {};
        ge(n, t.thumbUrl || me(t));
      });
      var u = W(e && e.previewUrl);
      return (
        ge(n, u),
        i.slice(1).forEach(function (e) {
          return ge(n, e);
        }),
        o.slice(6).forEach(function (e) {
          var t = e && "object" === a(e) ? e : {};
          ge(n, t.thumbUrl || me(t));
        }),
        (Array.isArray(e && e.images) ? e.images : []).forEach(function (e) {
          return ge(n, e);
        }),
        n.slice(0, 18)
      );
    }
    function _e(e) {
      return ve.apply(this, arguments);
    }
    function ve() {
      return (ve = r(
        t().mark(function e(r) {
          var a;
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if ((a = J(r || [], 3)).length) {
                    e.next = 3;
                    break;
                  }
                  return e.abrupt("return", []);
                case 3:
                  return (
                    a.forEach(function (e) {
                      g(e).catch(function () {});
                    }),
                    e.abrupt("return", a)
                  );
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function ye(e, t) {
      var r = e && "object" === a(e) ? e : {},
        n = J(
          Array.isArray(r.productPhotos)
            ? r.productPhotos.map(function (e) {
                return v(String(e || "").trim());
              })
            : [],
          3
        );
      if (n.length) return n;
      var i = Array.isArray(r.liveMedia)
        ? r.liveMedia
        : Array.isArray(r.live_media)
        ? r.live_media
        : [];
      return ie(
        Object.assign({}, t && "object" === a(t) ? t : {}, {
          liveMedia: i,
          live_media: i,
        }),
        3
      );
    }
    function Se(e) {
      return we.apply(this, arguments);
    }
    function we() {
      return (we = r(
        t().mark(function e(a) {
          var n, i, o, u;
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((n = Array.isArray(a) ? a.filter(Boolean) : []),
                    (i = Object.create(null)),
                    n.length)
                  ) {
                    e.next = 4;
                    break;
                  }
                  return e.abrupt("return", i);
                case 4:
                  return (
                    (o = 0),
                    (u = Math.min(4, n.length)),
                    (e.next = 8),
                    Promise.all(
                      Array.from({ length: u }).map(
                        r(
                          t().mark(function e() {
                            var r, a;
                            return t().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (!(o < n.length)) {
                                      e.next = 9;
                                      break;
                                    }
                                    return (
                                      (r = n[o]), (o += 1), (e.next = 5), g(r)
                                    );
                                  case 5:
                                    (a = e.sent), (i[r] = a || r), (e.next = 0);
                                    break;
                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        )
                      )
                    )
                  );
                case 8:
                  return e.abrupt("return", i);
                case 9:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function ke(e, t, r, n) {
      if (e) {
        var i = String(t || "").trim();
        if (i && Number.isFinite(Number(r)) && !(Number(r) <= 0)) {
          var o = Math.max(0, Date.now() - Number(r)),
            u = Object.assign(
              { durationMs: o },
              n && "object" === a(n) ? n : {}
            );
          "undefined" != typeof console &&
            "function" == typeof console.info &&
            console.info("[product-perf]", i, u);
        }
      }
    }
    function xe(e, t) {
      var r = e && "object" === a(e) ? e : {},
        n = t && "object" === a(t) ? t : {},
        i = W(r.previewUrl),
        o = W(n.previewUrl),
        u = J(Array.isArray(r.images) ? r.images : [i], 4),
        s = J(Array.isArray(n.images) ? n.images : [o], 4),
        c = Object.assign({}, n);
      o
        ? ((c.previewUrl = o), (c.images = J([o].concat(s), 4)))
        : i
        ? ((c.previewUrl = i), (c.images = J([i].concat(s).concat(u), 4)))
        : !s.length &&
          u.length &&
          ((c.images = u.slice(0, 4)), (c.previewUrl = W(c.images[0])));
      var d = se(r.pattern);
      return !se(n.pattern).length && d.length && (c.pattern = d), c;
    }
    function Ie(e, t) {
      var r = e && "object" === a(e) ? e : {},
        n = t && "object" === a(t) ? t : {},
        i = r.detail && "object" === a(r.detail) ? r.detail : null;
      return i && n.detail && "object" === a(n.detail)
        ? Object.assign({}, n, { detail: xe(i, n.detail) })
        : n;
    }
    function Pe(e, t) {
      var r =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 680;
      if (!e || "object" !== a(e)) return !1;
      var n = String(t || "").trim() || "__default__",
        i = Date.now();
      (e._rapidNavActionMap && "object" === a(e._rapidNavActionMap)) ||
        (e._rapidNavActionMap = Object.create(null));
      var o = Number(e._rapidNavActionMap[n] || 0);
      return (
        (o > 0 && i - o < Math.max(80, Number(r) || 680)) ||
        ((e._rapidNavActionMap[n] = i), !1)
      );
    }
    function je(e) {
      e &&
        "object" === a(e) &&
        (e._applyLaunchLockTimer &&
          (clearTimeout(e._applyLaunchLockTimer),
          (e._applyLaunchLockTimer = null)),
        (e._applyLaunchToken = ""),
        e.data &&
          e.data.applyLaunching &&
          "function" == typeof e.setData &&
          e.setData({ applyLaunching: !1 }));
    }
    function Me(e) {
      if (!e || "object" !== a(e)) return !1;
      if (e.data && e.data.applyLaunching) return !1;
      var t = "product_apply_"
        .concat(Date.now(), "_")
        .concat(Math.random().toString(36).slice(2, 8));
      return (
        (e._applyLaunchToken = t),
        (e._applyLaunchStartedAt = Date.now()),
        "function" == typeof e.setData && e.setData({ applyLaunching: !0 }),
        e._applyLaunchLockTimer && clearTimeout(e._applyLaunchLockTimer),
        (e._applyLaunchLockTimer = setTimeout(function () {
          (e._applyLaunchLockTimer = null),
            e._applyLaunchToken === t &&
              ((e._applyLaunchToken = ""),
              e.data &&
                e.data.applyLaunching &&
                "function" == typeof e.setData &&
                e.setData({ applyLaunching: !1 }));
        }, 12e3)),
        t
      );
    }
    function Ae(e, t) {
      return !(!e || "object" !== a(e)) && !!t && e._applyLaunchToken === t;
    }
    Page({
      data: {
        statusBarHeight: 44,
        navTopPx: 22,
        navHeightPx: 32,
        presetId: "",
        frameReady: !1,
        dataReady: !1,
        ready: !1,
        designerIdentityReady: !1,
        applyLaunching: !1,
        errorMessage: "",
        detail: null,
        structure: [],
        structureStatus: "hidden",
        structureEagerThumbCount: 6,
        productPhotos: [],
        productPhotosLoading: !1,
        productPhotosStatus: "hidden",
        productShareImageUrl: A,
        initialHeroPreviewUrl: "",
      },
      deferNonCriticalTask: function (e, t, r) {
        var n = this,
          i = String(e || "").trim();
        if (i && "function" == typeof t) {
          (this.__nonCriticalTaskMap &&
            "object" === a(this.__nonCriticalTaskMap)) ||
            (this.__nonCriticalTaskMap = Object.create(null));
          var o = this.__nonCriticalTaskMap[i];
          o && (clearTimeout(o), delete this.__nonCriticalTaskMap[i]);
          var u = Math.max(0, Number(r || 0));
          this.__nonCriticalTaskMap[i] = setTimeout(function () {
            delete n.__nonCriticalTaskMap[i],
              Promise.resolve()
                .then(function () {
                  return t();
                })
                .catch(function () {});
          }, u);
        }
      },
      clearNonCriticalTasks: function () {
        var e = this;
        this.__nonCriticalTaskMap &&
          "object" === a(this.__nonCriticalTaskMap) &&
          Object.keys(this.__nonCriticalTaskMap).forEach(function (t) {
            var r = e.__nonCriticalTaskMap[t];
            r && clearTimeout(r), delete e.__nonCriticalTaskMap[t];
          });
      },
      applyProductPayload: function (e, t) {
        var r = this,
          n = t && "object" === a(t) ? t : {},
          i = e && "object" === a(e) ? e : {},
          o = (function (e) {
            var t = e && "object" === a(e) ? e : {},
              r = ee(t);
            if (!r.length) {
              var n = W(
                Z(t) ||
                  t.previewUrl ||
                  t.preview_url ||
                  t.snapshotUrl ||
                  t.snapshot_url
              );
              return !n || X(n)
                ? Object.assign({}, t, { previewUrl: "", images: [] })
                : Object.assign({}, t, { previewUrl: n, images: [n] });
            }
            var i = W(r[0] || t.previewUrl);
            return i || r.length
              ? Object.assign({}, t, { previewUrl: i, images: r })
              : t;
          })(
            (function (e, t) {
              var r = e && "object" === a(e) ? e : {},
                n = t && "object" === a(t) ? t : null;
              if (!n) return r;
              var i = W(n.previewUrl),
                o = se(n.pattern),
                u = Number(n.beadMm),
                s = Number(n.previewRenderVersion),
                c = Object.assign({}, r);
              return (
                i && !X(i)
                  ? ((c.previewUrl = i), (c.preview_url = i), (c.images = [i]))
                  : ((c.previewUrl = ""),
                    (c.preview_url = ""),
                    (c.snapshotUrl = ""),
                    (c.snapshot_url = ""),
                    (c.coverUrl = ""),
                    (c.cover_url = ""),
                    (c.imageUrl = ""),
                    (c.image_url = ""),
                    (c.images = [])),
                o.length && (c.pattern = o),
                (c.beadMm = Number.isFinite(u) && u > 0 ? u : 11),
                (c.bead_mm = c.beadMm),
                (c.previewRenderVersion = Number.isFinite(s) && s > 0 ? s : 1),
                c
              );
            })(
              this._forcePreviewFallback ||
                ("cache_hit" === n.source && !this._visualLock)
                ? (function (e) {
                    var t = e && "object" === a(e) ? e : {};
                    return Object.assign({}, t, {
                      previewUrl: "",
                      preview_url: "",
                      snapshotUrl: "",
                      snapshot_url: "",
                      coverUrl: "",
                      cover_url: "",
                      imageUrl: "",
                      image_url: "",
                      images: [],
                    });
                  })(i.detail)
                : i.detail,
              this._visualLock
            )
          ),
          u = ie(o, 3),
          s = String(n.source || "").trim(),
          c = (function (e, t) {
            var r = String(e || "").trim();
            return (Array.isArray(t) ? t : []).length
              ? "ready"
              : "cache_hit" === r
              ? "loading"
              : r
              ? "empty"
              : "loading";
          })(s, u),
          d = (function (e) {
            var t = e && "object" === a(e) ? e : {},
              r = L(t, t.authorName || t.sourceDesignerName || "");
            return !1 === t.usesDesignerIdentity ||
              !1 === t.uses_designer_identity
              ? Object.assign({}, r, {
                  usesDesignerIdentity: !1,
                  uses_designer_identity: !1,
                  isCustomerPreset: !0,
                  is_customer_preset: !0,
                })
              : r;
          })(
            (function (e) {
              var t = e && "object" === a(e) ? e : {},
                r = Object.assign({}, t);
              return delete r.liveMedia, delete r.live_media, r;
            })(o)
          ),
          p = fe(i.structure),
          l = (function (e, t) {
            return (Array.isArray(t) ? t : []).length
              ? "ready"
              : se(e && e.pattern).length
              ? "loading"
              : "empty";
          })(d, p),
          h = "cache_hit" !== s;
        this.setData({
          frameReady: !0,
          dataReady: !0,
          ready: !0,
          designerIdentityReady: h,
          errorMessage: "",
          detail: d,
          structure: p,
          structureStatus: l,
          productPhotos: u,
          productPhotosLoading: "loading" === c,
          productPhotosStatus: c,
        }),
          this._firstContentfulMarked ||
            ((this._firstContentfulMarked = !0),
            ke(this, "first_contentful_section_ms", this._bootStartedAt, {
              source: String(n.source || "unknown").trim() || "unknown",
            })),
          this.deferNonCriticalTask(
            "asset_warmup",
            function () {
              return r.warmupProductAssets(d, p);
            },
            20
          ),
          this.scheduleProductStructureHydration(d, p, { source: s });
        var m = ue(d);
        (this._productShareImageCacheKey = ""),
          (this._productShareImageUrl = m || A),
          this.data.productShareImageUrl !== this._productShareImageUrl &&
            this.setData({ productShareImageUrl: this._productShareImageUrl }),
          this.deferNonCriticalTask(
            "product_share_image",
            function () {
              return r.prepareProductShareImage(d);
            },
            120
          ),
          this.deferNonCriticalTask(
            "product_view_report",
            function () {
              return r.reportCurrentProductView(d);
            },
            300
          );
      },
      scheduleProductStructureHydration: function (e, t, r) {
        var n = this,
          i = se(e && e.pattern),
          o = Array.isArray(t) ? t : [];
        if (i.length && !o.length) {
          var u = String((this.data && this.data.presetId) || "").trim();
          if (u) {
            var s = "product_structure_"
              .concat(u, "_")
              .concat(Date.now(), "_")
              .concat(Math.random().toString(36).slice(2, 8));
            this._productStructureHydrationToken = s;
            var c = r && "object" === a(r) ? r : {},
              d = "cache_hit" === String(c.source || "").trim() ? 60 : 0;
            this.deferNonCriticalTask(
              "product-structure-hydrate-".concat(u),
              function () {
                return n.hydrateProductStructure(i, o, s);
              },
              d
            );
          }
        }
      },
      hydrateProductStructure: function (e, n, i) {
        var u = this;
        return r(
          t().mark(function r() {
            var s, c, d, p;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        (s = String(
                          (u.data && u.data.presetId) || ""
                        ).trim()) &&
                        i === u._productStructureHydrationToken
                      ) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt("return", null);
                    case 3:
                      return (
                        (t.prev = 3),
                        (t.next = 6),
                        o(e, n, {
                          preferCache: !0,
                          forceRemote: !1,
                          remoteTimeoutMs: 5200,
                        })
                      );
                    case 6:
                      if (
                        ((c = t.sent),
                        i === u._productStructureHydrationToken &&
                          String((u.data && u.data.presetId) || "").trim() ===
                            s)
                      ) {
                        t.next = 9;
                        break;
                      }
                      return t.abrupt("return", c);
                    case 9:
                      if (
                        ((d = fe(c && c.structure)),
                        !c || !0 !== c.ready || !d.length)
                      ) {
                        t.next = 15;
                        break;
                      }
                      return (
                        u.setData({ structure: d, structureStatus: "ready" }),
                        (p =
                          u.data &&
                          u.data.detail &&
                          "object" === a(u.data.detail)
                            ? u.data.detail
                            : null),
                        u.deferNonCriticalTask(
                          "asset_warmup",
                          function () {
                            return u.warmupProductAssets(p, d);
                          },
                          20
                        ),
                        t.abrupt("return", c)
                      );
                    case 15:
                      return (
                        u.setData({ structureStatus: "empty" }),
                        t.abrupt("return", c)
                      );
                    case 19:
                      return (
                        (t.prev = 19),
                        (t.t0 = t.catch(3)),
                        i === u._productStructureHydrationToken &&
                          u.setData({ structureStatus: "loading" }),
                        t.abrupt("return", null)
                      );
                    case 23:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              null,
              [[3, 19]]
            );
          })
        )();
      },
      reportCurrentProductView: function (e) {
        var n = this;
        return r(
          t().mark(function r() {
            var i, o, u, s, d, p;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      ((i = String((n.data && n.data.presetId) || "").trim()),
                      (o = $(e, i)))
                    ) {
                      t.next = 4;
                      break;
                    }
                    return t.abrupt("return", null);
                  case 4:
                    if (!Q(o)) {
                      t.next = 6;
                      break;
                    }
                    return t.abrupt("return", null);
                  case 6:
                    if ((u = z())) {
                      t.next = 9;
                      break;
                    }
                    return t.abrupt("return", null);
                  case 9:
                    return (
                      Y(o),
                      (t.next = 12),
                      c(
                        o,
                        {
                          clientViewId: u,
                          scene:
                            ((r = n._entryFrom),
                            (l = void 0),
                            (l = String(r || "").trim()),
                            l ? "product_detail_".concat(l) : "product_detail"),
                        },
                        { timeoutMs: 1200 }
                      )
                    );
                  case 12:
                    if (
                      ((s = t.sent),
                      String((n.data && n.data.presetId) || "").trim() === i)
                    ) {
                      t.next = 15;
                      break;
                    }
                    return t.abrupt("return", s);
                  case 15:
                    if (
                      ((d = Number(s && s.viewCount)),
                      Number.isFinite(d) && !(d < 0))
                    ) {
                      t.next = 18;
                      break;
                    }
                    return t.abrupt("return", s);
                  case 18:
                    if (
                      (p =
                        n.data && n.data.detail && "object" === a(n.data.detail)
                          ? n.data.detail
                          : null)
                    ) {
                      t.next = 21;
                      break;
                    }
                    return t.abrupt("return", s);
                  case 21:
                    return (
                      n.setData({
                        detail: Object.assign({}, p, {
                          viewCount: Math.floor(d),
                        }),
                      }),
                      t.abrupt("return", s)
                    );
                  case 23:
                  case "end":
                    return t.stop();
                }
              var r, l;
            }, r);
          })
        )();
      },
      warmupProductAssets: function (e, n) {
        var i = this;
        return r(
          t().mark(function r() {
            var o, u, s, c;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if ((o = String(i.data.presetId || "").trim())) {
                      t.next = 3;
                      break;
                    }
                    return t.abrupt("return");
                  case 3:
                    if ((u = be(e, n, i.data && i.data.productPhotos)).length) {
                      t.next = 6;
                      break;
                    }
                    return t.abrupt("return");
                  case 6:
                    return (t.next = 8), Se(u);
                  case 8:
                    if (
                      ((s = t.sent), String(i.data.presetId || "").trim() === o)
                    ) {
                      t.next = 11;
                      break;
                    }
                    return t.abrupt("return");
                  case 11:
                    (c = (i.data.structure || []).map(function (e) {
                      var t = e && "object" === a(e) ? e : {},
                        r = W(t.thumbUrl || me(t));
                      if (!r) return t;
                      var n = s[r];
                      return n && n !== r
                        ? Object.assign({}, t, { thumbUrl: n })
                        : t;
                    })),
                      i.setData({ structure: c });
                  case 13:
                  case "end":
                    return t.stop();
                }
            }, r);
          })
        )();
      },
      refreshProductMedia: function (n, i) {
        var o = this;
        return r(
          t().mark(function r() {
            var u, c, d, p, l, h, m, f;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if ((u = String(n || "").trim())) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt("return", null);
                    case 3:
                      return (
                        (c = i && "object" === a(i) ? i : {}),
                        (d = !0 === c.retry),
                        (p = Number(o._productMediaRequestToken || 0) + 1),
                        (o._productMediaRequestToken = p),
                        (l =
                          o.data &&
                          o.data.detail &&
                          "object" === a(o.data.detail)
                            ? o.data.detail
                            : {}),
                        (t.prev = 8),
                        (t.next = 11),
                        s(u, {
                          remoteTimeoutMs: c.remoteTimeoutMs || 2200,
                          forceRemote: !0 === c.forceRemote,
                        })
                      );
                    case 11:
                      if (
                        ((h = t.sent),
                        p === Number(o._productMediaRequestToken || 0))
                      ) {
                        t.next = 14;
                        break;
                      }
                      return t.abrupt("return", null);
                    case 14:
                      if (h && !0 === h.ready) {
                        t.next = 18;
                        break;
                      }
                      return (
                        (o.data && Array.isArray(o.data.productPhotos)
                          ? o.data.productPhotos
                          : []
                        ).length
                          ? o.setData({
                              productPhotosLoading: !1,
                              productPhotosStatus: "ready",
                            })
                          : d
                          ? o.data &&
                            o.data.productPhotosLoading &&
                            o.setData(
                              e({ productPhotos: [] }, oe(o.data.productPhotos))
                            )
                          : o.deferNonCriticalTask(
                              "product-media-retry-".concat(u),
                              function () {
                                return o.refreshProductMedia(u, {
                                  remoteTimeoutMs: 5200,
                                  forceRemote: !0,
                                  retry: !0,
                                });
                              },
                              800
                            ),
                        t.abrupt("return", null)
                      );
                    case 18:
                      if ((m = ye(h, l)).length) {
                        t.next = 22;
                        break;
                      }
                      return (
                        o.setData({
                          productPhotos: [],
                          productPhotosLoading: !1,
                          productPhotosStatus: "empty",
                        }),
                        t.abrupt("return", h)
                      );
                    case 22:
                      return (t.next = 24), _e(m);
                    case 24:
                      if (
                        ((f = t.sent),
                        p === Number(o._productMediaRequestToken || 0))
                      ) {
                        t.next = 27;
                        break;
                      }
                      return t.abrupt("return", h);
                    case 27:
                      return (
                        o.setData({
                          productPhotos: f.length ? f : m,
                          productPhotosLoading: !1,
                          productPhotosStatus: "ready",
                        }),
                        t.abrupt("return", h)
                      );
                    case 31:
                      if (
                        ((t.prev = 31),
                        (t.t0 = t.catch(8)),
                        p === Number(o._productMediaRequestToken || 0))
                      ) {
                        t.next = 35;
                        break;
                      }
                      return t.abrupt("return", null);
                    case 35:
                      return (
                        (o.data && Array.isArray(o.data.productPhotos)
                          ? o.data.productPhotos
                          : []
                        ).length
                          ? o.setData({
                              productPhotosLoading: !1,
                              productPhotosStatus: "ready",
                            })
                          : d
                          ? o.data &&
                            o.data.productPhotosLoading &&
                            o.setData(
                              e({ productPhotos: [] }, oe(o.data.productPhotos))
                            )
                          : o.deferNonCriticalTask(
                              "product-media-retry-".concat(u),
                              function () {
                                return o.refreshProductMedia(u, {
                                  remoteTimeoutMs: 5200,
                                  forceRemote: !0,
                                  retry: !0,
                                });
                              },
                              800
                            ),
                        t.abrupt("return", null)
                      );
                    case 38:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              null,
              [[8, 31]]
            );
          })
        )();
      },
      loadProductPayload: function (n, i) {
        var o = this;
        return r(
          t().mark(function r() {
            var s, c, d, p, l;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if ((s = String(n || "").trim())) {
                      t.next = 3;
                      break;
                    }
                    return t.abrupt("return", null);
                  case 3:
                    return (
                      (c = i && "object" === a(i) ? i : {}),
                      (d = Number(o._requestNonce || 0)),
                      (t.next = 7),
                      u(s, {
                        forceRemote: !0 === c.forceRemote,
                        revalidateInBackground: !1,
                        remoteTimeoutMs: c.remoteTimeoutMs,
                        recommendLimit: Number.isFinite(
                          Number(c.recommendLimit)
                        )
                          ? Number(c.recommendLimit)
                          : 0,
                      })
                    );
                  case 7:
                    if (((p = t.sent), d === Number(o._requestNonce || 0))) {
                      t.next = 10;
                      break;
                    }
                    return t.abrupt("return", null);
                  case 10:
                    if (p && !0 === p.ready && p.detail) {
                      t.next = 14;
                      break;
                    }
                    return (
                      o.data.dataReady ||
                        o.setData({
                          frameReady: !0,
                          dataReady: !1,
                          ready: !1,
                          errorMessage:
                            p && p.errorMessage
                              ? p.errorMessage
                              : "PRESET_LOAD_FAILED",
                          structureStatus: "hidden",
                          productPhotos: [],
                          productPhotosLoading: !1,
                          productPhotosStatus: "hidden",
                        }),
                      o.data &&
                        o.data.dataReady &&
                        "remote_refresh" !== c.source &&
                        !0 !== c.preserveProductPhotosOnFail &&
                        o.setData(e({}, oe(o.data.productPhotos))),
                      t.abrupt("return", null)
                    );
                  case 14:
                    return (
                      (l = !0 === c.preserveVisual ? Ie(o.data, p) : p),
                      o.applyProductPayload(l, {
                        source:
                          c.source || (c.forceRemote ? "remote" : "cache"),
                      }),
                      t.abrupt("return", l)
                    );
                  case 17:
                  case "end":
                    return t.stop();
                }
            }, r);
          })
        )();
      },
      scheduleRemoteRefresh: function (e, t) {
        var r = this,
          n = String(e || "").trim();
        if (n) {
          var i = t && "object" === a(t) ? t : {},
            o = function () {
              r.loadProductPayload(n, {
                forceRemote: !0,
                source: "remote_refresh",
                preserveVisual: !0 === i.preserveVisual,
              });
            };
          "function" != typeof setTimeout ? o() : setTimeout(o, 160);
        }
      },
      prepareProductShareImage: function (e) {
        var n = this;
        return r(
          t().mark(function r() {
            var i, o, u, s, c, d, p, l, h;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((i = e && "object" === a(e) ? e : {}),
                        (o = ue(i)),
                        (u = se(i.pattern)),
                        (o || u.length) &&
                          "undefined" != typeof wx &&
                          "function" == typeof wx.createCanvasContext)
                      ) {
                        t.next = 6;
                        break;
                      }
                      return (
                        n.data.productShareImageUrl !== A &&
                          n.setData({ productShareImageUrl: A }),
                        t.abrupt("return")
                      );
                    case 6:
                      if (
                        ((s = u.length > 0),
                        (c = Number.isFinite(Number(i.bgIndex))
                          ? Number(i.bgIndex)
                          : ""),
                        (d = ""
                          .concat(
                            "product-share-stonelab-diy-v2-bg-fbfaf8",
                            ":"
                          )
                          .concat(s ? u.join(",") : o, ":")
                          .concat(c)),
                        n._productShareImageCacheKey !== d ||
                          !n._productShareImageUrl)
                      ) {
                        t.next = 13;
                        break;
                      }
                      return (
                        (p = String(n._productShareImageUrl || "").trim()) &&
                          n.data.productShareImageUrl !== p &&
                          n.setData({ productShareImageUrl: p }),
                        t.abrupt("return")
                      );
                    case 13:
                      return (
                        (t.prev = 13),
                        (t.next = 16),
                        N(n, {
                          canvasId: "productShareCanvas",
                          coverUrl: s ? "" : o,
                          pattern: u,
                          beadSize: i.beadMm || i.bead_mm,
                          fallbackImageUrl: A,
                          width: C,
                          height: R,
                          layout: s ? "stonelab-diy-system" : "product",
                          includeTrayBg: s,
                          bgIndex: c,
                          coverRect: {
                            xRatio: 0.13,
                            yRatio: 0.04,
                            widthRatio: 0.74,
                            heightRatio: 0.6,
                          },
                          brandYRatio: 0.82,
                          logoWidthRatio: 0.2,
                        })
                      );
                    case 16:
                      (l = t.sent),
                        (h = l || A),
                        (n._productShareImageCacheKey = d),
                        (n._productShareImageUrl = h),
                        n.data.productShareImageUrl !== h &&
                          n.setData({ productShareImageUrl: h }),
                        (t.next = 28);
                      break;
                    case 23:
                      (t.prev = 23),
                        (t.t0 = t.catch(13)),
                        (n._productShareImageCacheKey = ""),
                        (n._productShareImageUrl = ""),
                        n.data.productShareImageUrl !== A &&
                          n.setData({ productShareImageUrl: A });
                    case 28:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              null,
              [[13, 23]]
            );
          })
        )();
      },
      onLoad: function (e) {
        var a = this;
        return r(
          t().mark(function r() {
            var n, i, o, u, s, c, d, l;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      ((a.__nonCriticalTaskMap = Object.create(null)),
                      (a._bootStartedAt = Date.now()),
                      (a._firstContentfulMarked = !1),
                      (a._heroImageMarked = !1),
                      (a._requestNonce = Number(a._requestNonce || 0) + 1),
                      (n =
                        ("undefined" != typeof wx &&
                          "function" == typeof wx.getWindowInfo &&
                          wx.getWindowInfo()) ||
                        {}),
                      (i = p(e && e.id)),
                      (o = String(e && e.from ? e.from : "")
                        .trim()
                        .toLowerCase()),
                      (a._entryFrom = o),
                      (u = W(e && e.previewUrl ? e.previewUrl : "")),
                      (s = u && !X(u) ? u : ""),
                      (a._visualLock = m(i, { consume: !0 })),
                      (a._forcePreviewFallback = !(
                        !a._visualLock || W(a._visualLock.previewUrl)
                      )),
                      u &&
                        !X(u) &&
                        (_(u),
                        (a._visualLock = Object.assign(
                          {},
                          a._visualLock || {},
                          { previewUrl: u }
                        )),
                        (a._forcePreviewFallback = !1)),
                      (c = H(n)),
                      a.setData({
                        statusBarHeight: Number(n.statusBarHeight || 22),
                        navTopPx: c.top,
                        navHeightPx: c.height,
                        presetId: i,
                        frameReady: !0,
                        dataReady: !1,
                        ready: !1,
                        applyLaunching: !1,
                        errorMessage: "",
                        detail: null,
                        structure: [],
                        structureStatus: "loading",
                        productPhotos: [],
                        productPhotosLoading: !0,
                        productPhotosStatus: "loading",
                        productShareImageUrl: A,
                        initialHeroPreviewUrl: s,
                        designerIdentityReady: !1,
                      }),
                      i)
                    ) {
                      t.next = 19;
                      break;
                    }
                    return (
                      a.setData({
                        ready: !1,
                        errorMessage: "PRESET_ID_REQUIRED",
                        structureStatus: "hidden",
                        productPhotos: [],
                        productPhotosLoading: !1,
                        productPhotosStatus: "hidden",
                      }),
                      t.abrupt("return")
                    );
                  case 19:
                    if (!(d = h(i)) || !d.detail) {
                      t.next = 28;
                      break;
                    }
                    (l = W(d.detail.previewUrl)) && _(l),
                      a.applyProductPayload(d, { source: "cache_hit" }),
                      a.refreshProductMedia(i, {
                        remoteTimeoutMs: 2200,
                        forceRemote: !0,
                      }),
                      a.scheduleRemoteRefresh(i, {
                        preserveVisual: "inspiration" === o || !!a._visualLock,
                      }),
                      (t.next = 30);
                    break;
                  case 28:
                    return (
                      (t.next = 30),
                      a.loadProductPayload(i, {
                        forceRemote: !1,
                        source: "preset_detail",
                      })
                    );
                  case 30:
                  case "end":
                    return t.stop();
                }
            }, r);
          })
        )();
      },
      onUnload: function () {
        (this._visualLock = null),
          (this._productStructureHydrationToken = ""),
          this.clearNonCriticalTasks(),
          je(this),
          this.setData({
            productPhotos: [],
            productPhotosLoading: !1,
            productPhotosStatus: "hidden",
            initialHeroPreviewUrl: "",
            structureStatus: "hidden",
          });
      },
      handleBack: function () {
        S("inspiration", { query: { source: "product_back" } });
      },
      handleOpenDesigner: function (e) {
        if (
          !Pe(this, "open-designer") &&
          this.data &&
          !0 === this.data.designerIdentityReady &&
          (!this.data.detail || !1 !== this.data.detail.usesDesignerIdentity)
        ) {
          var t =
              e && e.currentTarget && e.currentTarget.dataset
                ? e.currentTarget.dataset
                : {},
            r = String(t.designerId || "").trim() || "designer",
            a = String(t.designerName || "").trim(),
            i = String(t.creatorUserId || "").trim(),
            o = n("/pages/designer/index", {
              id: r,
              name: a,
              creatorUserId: i,
              from: "product_detail",
            });
          w(o, "product_detail", { replace: !0 });
        }
      },
      handleHeroImageLoaded: function () {
        this._heroImageMarked ||
          ((this._heroImageMarked = !0),
          ke(this, "product_first_image_ms", this._bootStartedAt, {
            presetId: String((this.data && this.data.presetId) || "").trim(),
          }));
      },
      handleHeroImageError: function (e) {
        var t = W(
            (e &&
              e.currentTarget &&
              e.currentTarget.dataset &&
              e.currentTarget.dataset.src) ||
              ""
          ),
          r =
            this.data && this.data.detail && "object" === a(this.data.detail)
              ? this.data.detail
              : null;
        if (r) {
          var n = (Array.isArray(r.images) ? r.images : [])
            .map(function (e) {
              return W(e);
            })
            .filter(Boolean)
            .filter(function (e) {
              return !t || e !== t;
            });
          if (!n.length) {
            var i = Z(r);
            return !i || (t && i === t)
              ? void this.setData({
                  detail: Object.assign({}, r, { images: [] }),
                })
              : void this.setData({
                  detail: Object.assign({}, r, { previewUrl: i, images: [i] }),
                });
          }
          this.setData({ detail: Object.assign({}, r, { images: n }) });
        }
      },
      previewProductPhoto: function (e) {
        var t =
            e && e.currentTarget && e.currentTarget.dataset
              ? e.currentTarget.dataset
              : {},
          r = Number(t.index || 0),
          a = Array.isArray(this.data && this.data.productPhotos)
            ? this.data.productPhotos
                .map(function (e) {
                  return W(e);
                })
                .filter(Boolean)
            : [];
        a.length &&
          "undefined" != typeof wx &&
          "function" == typeof wx.previewImage &&
          wx.previewImage({
            urls: a,
            current:
              a[
                Math.max(0, Math.min(a.length - 1, Number.isFinite(r) ? r : 0))
              ],
          });
      },
      onShareAppMessage: function () {
        var e = String((this.data && this.data.presetId) || "").trim(),
          t =
            this.data && this.data.detail && "object" === a(this.data.detail)
              ? this.data.detail
              : {},
          r = e || p(t.id || t.presetId || t.preset_id),
          i = String(t.name || "").trim() || "灵感方案";
        return {
          title: "".concat(i, " - StoneLab"),
          path: n("/pages/product/index", { id: r, source: "product_share" }),
          imageUrl:
            String(
              this.data.productShareImageUrl || this._productShareImageUrl || A
            ).trim() || A,
        };
      },
      onShareTimeline: function () {
        var e = String((this.data && this.data.presetId) || "").trim(),
          t =
            this.data && this.data.detail && "object" === a(this.data.detail)
              ? this.data.detail
              : {},
          r = e || p(t.id || t.presetId || t.preset_id);
        return {
          title: "StoneLab 手串设计方案",
          query: n("", { id: r, source: "product_share_timeline" }).replace(
            /^\?/,
            ""
          ),
          imageUrl:
            String(
              this.data.productShareImageUrl || this._productShareImageUrl || A
            ).trim() || A,
        };
      },
      handleApplyPreset: function () {
        var e = this;
        return r(
          t().mark(function r() {
            var n, i, o, u, s, c, p, l, h;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!Pe(e, "apply-preset")) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    if (
                      (n =
                        e.data && e.data.detail && "object" === a(e.data.detail)
                          ? e.data.detail
                          : null) &&
                      Array.isArray(n.pattern) &&
                      n.pattern.length
                    ) {
                      t.next = 6;
                      break;
                    }
                    return (
                      "undefined" != typeof wx &&
                        "function" == typeof wx.showToast &&
                        wx.showToast({ title: "数据异常", icon: "none" }),
                      t.abrupt("return")
                    );
                  case 6:
                    if ((i = Me(e))) {
                      t.next = 9;
                      break;
                    }
                    return t.abrupt("return");
                  case 9:
                    return (
                      (o = e.data && e.data.structure),
                      (t.next = 12),
                      d(n.pattern, o)
                    );
                  case 12:
                    if (((u = t.sent), Ae(e, i))) {
                      t.next = 15;
                      break;
                    }
                    return t.abrupt("return");
                  case 15:
                    if (((s = he(n, o, u)), Ae(e, i))) {
                      t.next = 18;
                      break;
                    }
                    return t.abrupt("return");
                  case 18:
                    if (
                      ((c = F(
                        "inspiration" === e._entryFrom ? "inspiration" : ""
                      )),
                      (p =
                        "inspiration" === c
                          ? "standalone_diy_product_apply_inspiration"
                          : "standalone_diy_product_apply"),
                      (l = I("product_apply")),
                      Ae(e, i))
                    ) {
                      t.next = 23;
                      break;
                    }
                    return t.abrupt("return");
                  case 23:
                    if (
                      (P({
                        entryId: l,
                        source: p,
                        schemeId: s,
                        pattern: n.pattern,
                        bgIndex: Number.isFinite(Number(n.bgIndex))
                          ? Number(n.bgIndex)
                          : 0,
                        name: n.name || "",
                        beadMm: n.beadMm || n.bead_mm,
                        previewRenderVersion:
                          n.previewRenderVersion || n.preview_render_version,
                        sourceCreatorWorkId:
                          n.creatorWorkId || n.creator_work_id || "",
                        sourceInspirationTemplateId:
                          n.id || n.presetId || n.preset_id || "",
                        sourceDesignerId:
                          n.sourceDesignerId || n.source_designer_id || "",
                        sourceEntry: p,
                        materialMap: u,
                        materialSnapshot: u,
                      }),
                      (h = V(p, s, {
                        returnTab: c,
                        sharedBgIndex: Number.isFinite(Number(n.bgIndex))
                          ? Number(n.bgIndex)
                          : "",
                        sharedName: n.name || "",
                        entryId: l,
                      })),
                      Ae(e, i))
                    ) {
                      t.next = 27;
                      break;
                    }
                    return t.abrupt("return");
                  case 27:
                    k(h, p, c, {
                      methods: ["redirectTo", "reLaunch"],
                      fallbackMethods: ["redirectTo", "reLaunch"],
                      onFailed: function () {
                        je(e);
                      },
                    }) || je(e);
                  case 29:
                  case "end":
                    return t.stop();
                }
            }, r);
          })
        )();
      },
    });
  },
  { isPage: true, isComponent: true, currentFile: "pages/product/index.js" }
);
require("pages/product/index.js");
