$gwx_XC_5 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_5 || [];
    function gz$gwx_XC_5_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "handleRootTap"]);
        Z([3, "page-root"]);
        Z([
          [2, "!"],
          [[7], [3, "appLoaded"]],
        ]);
        Z([3, "app-shell"]);
        Z([[7], [3, "toastVisible"]]);
        Z([[7], [3, "webPaySceneResolving"]]);
        Z([[7], [3, "standaloneDiyEntryMaskVisible"]]);
        Z([3, "page-container mobile-shell"]);
        Z([
          a,
          [3, "padding-top:"],
          [[7], [3, "shellPaddingTop"]],
          [3, "px;padding-bottom:"],
          [[7], [3, "shellPaddingBottom"]],
          [3, "px;"],
        ]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_5 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_5 = true;
    var x = [
      "./pages/index/index.wxml",
      "./fragments/tab-design.wxml",
      "./fragments/tab-cart.wxml",
      "./fragments/tab-profile-v2.wxml",
      "./fragments/modals.wxml",
      "./fragments/bottom-nav.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_5_1();
      var aVL = _mz(z, "view", ["bindtap", 0, "class", 1], [], e, s, gg);
      var tWL = _v();
      _(aVL, tWL);
      if (_oz(z, 2, e, s, gg)) {
        tWL.wxVkey = 1;
      } else {
        tWL.wxVkey = 2;
        var eXL = _n("view");
        _rz(z, eXL, "class", 3, e, s, gg);
        var bYL = _v();
        _(eXL, bYL);
        if (_oz(z, 4, e, s, gg)) {
          bYL.wxVkey = 1;
        }
        var oZL = _v();
        _(eXL, oZL);
        if (_oz(z, 5, e, s, gg)) {
          oZL.wxVkey = 1;
        }
        var x1L = _v();
        _(eXL, x1L);
        if (_oz(z, 6, e, s, gg)) {
          x1L.wxVkey = 1;
        }
        var o2L = _mz(z, "view", ["class", 7, "style", 1], [], e, s, gg);
        var f3L = e_[x[0]].j;
        _ic(x[1], e_, x[0], e, s, o2L, gg);
        _ic(x[2], e_, x[0], e, s, o2L, gg);
        _ic(x[3], e_, x[0], e, s, o2L, gg);
        _ic(x[4], e_, x[0], e, s, o2L, gg);
        _ic(x[5], e_, x[0], e, s, o2L, gg);
        f3L.pop();
        f3L.pop();
        f3L.pop();
        f3L.pop();
        f3L.pop();
        _(eXL, o2L);
        bYL.wxXCkey = 1;
        oZL.wxXCkey = 1;
        x1L.wxXCkey = 1;
        _(tWL, eXL);
      }
      tWL.wxXCkey = 1;
      _(r, aVL);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_5();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/index/index.wxml"] = [
    $gwx_XC_5,
    "./pages/index/index.wxml",
  ];
else
  __wxAppCode__["pages/index/index.wxml"] = $gwx_XC_5(
    "./pages/index/index.wxml"
  );
__wxRoute = "pages/index/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/index/index.js";
define(
  "pages/index/index.js",
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
    var e = require("./modules/initial-data").createInitialData,
      o = require("./modules/methods/lifecycle"),
      r = require("./modules/methods/runtime"),
      s = require("./modules/methods/workshop"),
      i = require("./modules/methods/trade"),
      t = require("./modules/methods/profile"),
      a = require("./modules/methods/workshop-actions/workshop-actions-navigation");
    Page(Object.assign({ data: e() }, o, r, s, i, t, a));
  },
  { isPage: true, isComponent: true, currentFile: "pages/index/index.js" }
);
require("pages/index/index.js");
