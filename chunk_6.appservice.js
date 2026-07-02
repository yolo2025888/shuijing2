$gwx_XC_6 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_6 || [];
    function gz$gwx_XC_6_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "maintenance-panel"]);
        Z([[7], [3, "expectedRecoverAt"]]);
        Z([[7], [3, "contactText"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_6 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_6 = true;
    var x = ["./pages/maintenance/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_6_1();
      var h5L = _n("view");
      _rz(z, h5L, "class", 0, e, s, gg);
      var o6L = _v();
      _(h5L, o6L);
      if (_oz(z, 1, e, s, gg)) {
        o6L.wxVkey = 1;
      }
      var c7L = _v();
      _(h5L, c7L);
      if (_oz(z, 2, e, s, gg)) {
        c7L.wxVkey = 1;
      }
      o6L.wxXCkey = 1;
      c7L.wxXCkey = 1;
      _(r, h5L);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_6();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/maintenance/index.wxml"] = [
    $gwx_XC_6,
    "./pages/maintenance/index.wxml",
  ];
else
  __wxAppCode__["pages/maintenance/index.wxml"] = $gwx_XC_6(
    "./pages/maintenance/index.wxml"
  );
__wxRoute = "pages/maintenance/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/maintenance/index.js";
define(
  "pages/maintenance/index.js",
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
    var e = require("../../services/systemRuntimeConfig"),
      t = e.getDefaultSystemRuntimeConfig,
      n = e.normalizeSystemRuntimeConfig,
      a = e.readCachedSystemRuntimeConfig,
      i =
        require("../../utils/navigation/navigate-with-fallback").navigateWithFallback;
    Page({
      data: {
        title: "",
        message: "",
        expectedRecoverAt: "",
        contactText: "",
        checking: !1,
      },
      onLoad: function () {
        this.hydrateConfig();
      },
      onShow: function () {
        this.hydrateConfig();
      },
      hydrateConfig: function () {
        var e =
          (function () {
            try {
              var e = getApp();
              if (e && e.globalData && e.globalData.systemRuntimeConfig)
                return n(e.globalData.systemRuntimeConfig);
            } catch (e) {}
            return a() || t();
          })().maintenance || {};
        this.setData({
          title: e.title || "系统维护中",
          message: e.message || "我们正在升级服务，请稍后再试。",
          expectedRecoverAt: e.expectedRecoverAt || "",
          contactText: e.contactText || "",
        });
      },
      handleRetry: function () {
        var e = this;
        this.setData({ checking: !0 });
        var t = null;
        try {
          t = getApp();
        } catch (e) {
          t = null;
        }
        var n = function () {
          e.setData({ checking: !1 }), e.hydrateConfig();
        };
        t && "function" == typeof t.checkSystemRuntimeConfig
          ? t
              .checkSystemRuntimeConfig({
                force: !0,
                source: "maintenance_retry",
              })
              .then(function (e) {
                e && e.maintenance && !0 === e.maintenance.enabled
                  ? n()
                  : i("/pages/index/index", { methods: ["reLaunch"] });
              })
              .catch(function () {
                i("/pages/index/index", { methods: ["reLaunch"] });
              })
          : (i("/pages/index/index", { methods: ["reLaunch"] }), n());
      },
    });
  },
  { isPage: true, isComponent: true, currentFile: "pages/maintenance/index.js" }
);
require("pages/maintenance/index.js");
