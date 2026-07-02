$gwx_XC_2 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_2 || [];
    function gz$gwx_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "content-card"]);
        Z([[6], [[7], [3, "designer"]], [3, "bio"]]);
        Z([3, "works-section"]);
        Z([
          [2, "&&"],
          [[6], [[7], [3, "designer"]], [3, "works"]],
          [[6], [[6], [[7], [3, "designer"]], [3, "works"]], [3, "length"]],
        ]);
        Z([[6], [[7], [3, "designer"]], [3, "works"]]);
        Z([3, "id"]);
        Z([3, "openWork"]);
        Z([3, "work-item"]);
        Z([
          [2, "||"],
          [[6], [[7], [3, "item"]], [3, "presetId"]],
          [1, ""],
        ]);
        Z([[6], [[7], [3, "item"]], [3, "id"]]);
        Z([3, "work-img-wrap"]);
        Z([
          [2, "||"],
          [[6], [[7], [3, "item"]], [3, "previewUrl"]],
          [[6], [[7], [3, "item"]], [3, "img"]],
        ]);
        Z([
          [2, "||"],
          [
            [2, "||"],
            [[6], [[7], [3, "item"]], [3, "beadMm"]],
            [[6], [[7], [3, "item"]], [3, "bead_mm"]],
          ],
          [1, 11],
        ]);
        Z([3, "work-img-fallback__bracelet"]);
        Z([1, 124]);
        Z([
          [2, "||"],
          [[6], [[7], [3, "item"]], [3, "pattern"]],
          [[4], [[5]]],
        ]);
        Z([
          [2, "||"],
          [[6], [[7], [3, "item"]], [3, "previewRenderVersion"]],
          [1, 1],
        ]);
        Z([1, false]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_2 = true;
    var x = ["./pages/designer/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_2_1();
      var b7K = _n("view");
      _rz(z, b7K, "class", 0, e, s, gg);
      var o8K = _v();
      _(b7K, o8K);
      if (_oz(z, 1, e, s, gg)) {
        o8K.wxVkey = 1;
      }
      var x9K = _n("view");
      _rz(z, x9K, "class", 2, e, s, gg);
      var o0K = _v();
      _(x9K, o0K);
      if (_oz(z, 3, e, s, gg)) {
        o0K.wxVkey = 1;
        var fAL = _v();
        _(o0K, fAL);
        var cBL = function (oDL, hCL, cEL, gg) {
          var lGL = _mz(
            z,
            "view",
            ["bindtap", 6, "class", 1, "data-preset-id", 2, "data-work-id", 3],
            [],
            oDL,
            hCL,
            gg
          );
          var aHL = _n("view");
          _rz(z, aHL, "class", 10, oDL, hCL, gg);
          var tIL = _v();
          _(aHL, tIL);
          if (_oz(z, 11, oDL, hCL, gg)) {
            tIL.wxVkey = 1;
          } else {
            tIL.wxVkey = 2;
            var eJL = _mz(
              z,
              "mini-bracelet-flat",
              [
                "beadSize",
                12,
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
              oDL,
              hCL,
              gg
            );
            _(tIL, eJL);
          }
          tIL.wxXCkey = 1;
          tIL.wxXCkey = 3;
          _(lGL, aHL);
          _(cEL, lGL);
          return cEL;
        };
        fAL.wxXCkey = 4;
        _2z(z, 4, cBL, e, s, gg, fAL, "item", "index", "id");
      } else {
        o0K.wxVkey = 2;
      }
      o0K.wxXCkey = 1;
      o0K.wxXCkey = 3;
      _(b7K, x9K);
      o8K.wxXCkey = 1;
      _(r, b7K);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/designer/index.wxml"] = [
    $gwx_XC_2,
    "./pages/designer/index.wxml",
  ];
else
  __wxAppCode__["pages/designer/index.wxml"] = $gwx_XC_2(
    "./pages/designer/index.wxml"
  );
__wxRoute = "pages/designer/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/designer/index.js";
define(
  "pages/designer/index.js",
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
      r = require("../../@babel/runtime/helpers/asyncToGenerator"),
      t = require("../../@babel/runtime/helpers/typeof"),
      i =
        require("../../contracts/navigation/query-contract").appendQueryParams,
      a = require("../../facades/v2/designer-facade").loadDesignerPageModel,
      n =
        require("../../domain/v2/preset-detail-domain").buildPresetDetailPayload,
      o = require("../../facades/v2/preset-detail-cache"),
      s = o.writePresetDetailCache,
      d = o.writePresetDetailVisualLock,
      u = require("../../utils/navigation/navigate-with-fallback"),
      c = u.openDetailPage,
      g = u.openTopLevelIndexTab,
      m = u.backToKnownSource;
    function f(e) {
      var r = null;
      try {
        r =
          "undefined" != typeof wx &&
          "function" == typeof wx.getMenuButtonBoundingClientRect
            ? wx.getMenuButtonBoundingClientRect()
            : null;
      } catch (e) {
        r = null;
      }
      var t = Number(e && e.statusBarHeight) || 22;
      return {
        top:
          r && Number.isFinite(Number(r.top))
            ? Math.max(0, Math.round(Number(r.top)))
            : t,
        height:
          r && Number.isFinite(Number(r.height))
            ? Math.max(1, Math.round(Number(r.height)))
            : 32,
      };
    }
    function l(e) {
      var r = String(e || "").trim();
      if (!r) return {};
      var t = r;
      try {
        t = decodeURIComponent(r);
      } catch (e) {
        t = r;
      }
      for (var i = t.split("&"), a = {}, n = 0; n < i.length; n += 1) {
        var o = String(i[n] || "").trim();
        if (o) {
          var s = o.indexOf("=");
          if (!(s <= 0)) {
            var d = o.slice(0, s).trim().toLowerCase(),
              u = o.slice(s + 1).trim();
            d && u && (a[d] = u);
          }
        }
      }
      return a;
    }
    function h(e) {
      return (
        String(e && e.id ? e.id : "")
          .trim()
          .toLowerCase() || "designer"
      );
    }
    function p(e) {
      return (function (e) {
        var r = String(e || "").trim();
        if (!r) return "";
        try {
          return decodeURIComponent(r);
        } catch (e) {
          return r;
        }
      })(e && e.name ? e.name : "");
    }
    function v(e, r) {
      return {
        id: String(e || "designer").trim(),
        name: String(r || "StoneLab.").trim() || "StoneLab.",
        role: "共创设计师",
        bio: "",
        tags: [],
        avatar: "",
        cover: "",
        works: [],
        stats: [
          { label: "已发布作品", value: "0" },
          { label: "引用数量", value: "0" },
        ],
      };
    }
    function b(e, r, i, a) {
      if (e) {
        var n = String(r || "").trim();
        if (n) {
          var o = Number(i);
          if (Number.isFinite(o) && !(o <= 0)) {
            var s = Object.assign(
              { durationMs: Math.max(0, Date.now() - o) },
              a && "object" === t(a) ? a : {}
            );
            "undefined" != typeof console &&
              "function" == typeof console.info &&
              console.info("[designer-perf]", n, s);
          }
        }
      }
    }
    Page({
      data: {
        statusBarHeight: 44,
        navTopPx: 22,
        navHeightPx: 32,
        designerId: "designer",
        designerName: "",
        creatorUserId: "",
        designer: { works: [], stats: [] },
      },
      applyDesignerModel: function (e, r) {
        if (e && "object" === t(e)) {
          var i = String(e.name || this.data.designerName || "").trim();
          this.setData({
            designerName: i || this.data.designerName,
            designer: e,
          }),
            this._firstContentfulMarked ||
              ((this._firstContentfulMarked = !0),
              b(this, "first_contentful_section_ms", this._bootStartedAt, {
                source: String(r || "unknown").trim() || "unknown",
              }));
        }
      },
      loadDesignerModel: function (i) {
        var n = this;
        return r(
          e().mark(function r() {
            var o, s, d;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (o = i && "object" === t(i) ? i : {}),
                      (s = Number(n._requestNonce || 0)),
                      (e.next = 4),
                      a({
                        designerId: n.data.designerId,
                        designerName: n.data.designerName,
                        creatorUserId: n.data.creatorUserId,
                        forceRemote: !0 === o.forceRemote,
                        revalidateInBackground: !1,
                        allowLegacyBootstrapFallback: !/^\d+$/.test(
                          String(n.data.creatorUserId || "").trim()
                        ),
                      })
                    );
                  case 4:
                    if (((d = e.sent), s === Number(n._requestNonce || 0))) {
                      e.next = 7;
                      break;
                    }
                    return e.abrupt("return");
                  case 7:
                    n.applyDesignerModel(
                      d,
                      o.source || (o.forceRemote ? "remote" : "cache")
                    );
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        )();
      },
      scheduleRemoteRefresh: function () {
        var e = this,
          r = function () {
            e.loadDesignerModel({ forceRemote: !0, source: "remote_refresh" });
          };
        "function" != typeof setTimeout ? r() : setTimeout(r, 32);
      },
      onLoad: function (t) {
        var i = this;
        return r(
          e().mark(function r() {
            var a, n, o, s, d, u, c, g, m, b;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (i._bootStartedAt = Date.now()),
                      (i._firstContentfulMarked = !1),
                      (i._coverImageMarked = !1),
                      (i._requestNonce = Number(i._requestNonce || 0) + 1),
                      (a =
                        "function" == typeof wx.getWindowInfo
                          ? wx.getWindowInfo()
                          : {}),
                      (n = l(t && t.scene ? t.scene : "")),
                      (o = h(t)),
                      (s = String(n.cid || n.creatorid || "").trim()),
                      (d = String(n.uid || n.creatoruserid || "").trim()),
                      (u = o && "designer" !== o ? o : s || "designer"),
                      (c = String(
                        (t && t.creatorUserId ? t.creatorUserId : "") || d
                      ).trim()),
                      (g = p(t)),
                      (i._entryFrom = String((t && t.from) || "")
                        .trim()
                        .toLowerCase()),
                      (m = v(u, g)),
                      (b = f(a)),
                      i.setData({
                        statusBarHeight: 2 * (a.statusBarHeight || 44),
                        navTopPx: b.top,
                        navHeightPx: b.height,
                        designerId: u,
                        designerName: m.name,
                        creatorUserId: c,
                        designer: m,
                      }),
                      i.applyDesignerModel(m, "initial_model"),
                      (e.next = 19),
                      i.loadDesignerModel({ forceRemote: !1, source: "cache" })
                    );
                  case 19:
                    i.scheduleRemoteRefresh();
                  case 20:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        )();
      },
      handleCoverImageLoaded: function () {
        this._coverImageMarked ||
          ((this._coverImageMarked = !0),
          b(this, "inspiration_first_image_ms", this._bootStartedAt, {
            designerId: String(
              (this.data && this.data.designerId) || ""
            ).trim(),
          }));
      },
      handleWorkImageError: function (e) {
        var r = String(
          (e &&
            e.currentTarget &&
            e.currentTarget.dataset &&
            e.currentTarget.dataset.presetId) ||
            ""
        ).trim();
        if (r) {
          var i = String(
              (e &&
                e.currentTarget &&
                e.currentTarget.dataset &&
                e.currentTarget.dataset.src) ||
                ""
            ).trim(),
            a =
              this.data &&
              this.data.designer &&
              "object" === t(this.data.designer)
                ? this.data.designer
                : null;
          if (a) {
            var n = (function (e, r, i) {
              var a = Array.isArray(e) ? e : [],
                n = String(r || "").trim();
              if (!n || !a.length) return a;
              var o = String(i || "").trim();
              return a.map(function (e) {
                var r = e && "object" === t(e) ? e : {};
                if (String(r.presetId || r.id || "").trim() !== n) return r;
                for (
                  var i = []
                      .concat(Array.isArray(r.images) ? r.images : [])
                      .concat(Array.isArray(r.workImages) ? r.workImages : [])
                      .concat(Array.isArray(r.work_images) ? r.work_images : [])
                      .concat(
                        Array.isArray(r.proofImages) ? r.proofImages : []
                      ),
                    a = "",
                    s = 0;
                  s < i.length;
                  s += 1
                ) {
                  var d = String(i[s] || "").trim();
                  if (d && (!o || d !== o)) {
                    a = d;
                    break;
                  }
                }
                return Object.assign({}, r, { previewUrl: a, img: a });
              });
            })(a.works, r, i);
            this.setData({ designer: Object.assign({}, a, { works: n }) });
          }
        }
      },
      openWork: function (e) {
        var r =
            e && e.currentTarget && e.currentTarget.dataset
              ? e.currentTarget.dataset
              : {},
          a = String(r.presetId || "").trim();
        if (a) {
          var o = (function (e, r) {
              var t = String(r || "").trim();
              if (!t) return null;
              for (
                var i =
                    e &&
                    e.data &&
                    e.data.designer &&
                    Array.isArray(e.data.designer.works)
                      ? e.data.designer.works
                      : [],
                  a = 0;
                a < i.length;
                a += 1
              ) {
                var n = i[a];
                if (String((n && (n.presetId || n.id)) || "").trim() === t)
                  return n;
              }
              return null;
            })(this, a),
            u = (function (e) {
              for (
                var r,
                  i = e && "object" === t(e) ? e : {},
                  a = [
                    i.preview_url,
                    i.snapshot_url,
                    i.cover_url,
                    i.image_url,
                    i.previewUrl,
                    i.img,
                  ].concat(Array.isArray(i.images) ? i.images : []),
                  n = "",
                  o = 0;
                o < a.length;
                o += 1
              ) {
                var s = String(a[o] || "").trim();
                if (
                  s &&
                  (n || (n = s),
                  (r = void 0),
                  (r = String(s || "")
                    .trim()
                    .toLowerCase()) &&
                    0 !== r.indexOf("wxfile://") &&
                    0 !== r.indexOf("blob:") &&
                    0 !== r.indexOf("data:image") &&
                    0 !== r.indexOf("http://tmp/") &&
                    !/^[a-z]:\\/.test(r))
                )
                  return s;
              }
              return n;
            })(o);
          if (o) {
            var m = n(o, {
              sourceDesignerName: String(
                o.sourceDesignerName || o.authorName || ""
              ).trim(),
              sourceDesignerId: String(
                o.sourceDesignerId || o.designerId || ""
              ).trim(),
              designerId: String(
                o.designerId || o.sourceDesignerId || ""
              ).trim(),
              authorName: String(
                o.authorName || o.sourceDesignerName || ""
              ).trim(),
              authorAvatar: String(o.authorAvatar || "").trim(),
            });
            m &&
              (d(a, {
                previewUrl: u,
                pattern: Array.isArray(o.pattern) ? o.pattern.slice() : [],
                beadMm:
                  Number(void 0 !== o.beadMm ? o.beadMm : o.bead_mm) || 11,
                previewRenderVersion:
                  Number(
                    void 0 !== o.previewRenderVersion
                      ? o.previewRenderVersion
                      : o.preview_render_version
                  ) || 1,
              }),
              s(m));
          }
          var f = i("/pages/product/index", { id: a, from: "designer" });
          c(
            f,
            "product_detail" === this._entryFrom
              ? "designer_detail"
              : "designer_work",
            { replace: "product_detail" === this._entryFrom }
          );
        } else g("inspiration", { source: "designer_work_empty" });
      },
      goBack: function () {
        m("product_detail" === this._entryFrom ? "inspiration" : "home", {
          query: { source: "designer_back" },
        });
      },
    });
  },
  { isPage: true, isComponent: true, currentFile: "pages/designer/index.js" }
);
require("pages/designer/index.js");
