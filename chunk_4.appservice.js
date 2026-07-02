$gwx_XC_4 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_4 || [];
    function gz$gwx_XC_4_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "handleRootTap"]);
        Z([3, "page-root diy-independent-page"]);
        Z([
          [2, "!"],
          [[7], [3, "appLoaded"]],
        ]);
        Z([3, "app-shell app-shell--diy-independent"]);
        Z([[7], [3, "toastVisible"]]);
        Z([[7], [3, "standaloneDiyEntryMaskVisible"]]);
        Z([3, "page-container mobile-shell mobile-shell--diy-independent"]);
        Z([
          a,
          [3, "padding-top:"],
          [[7], [3, "shellPaddingTop"]],
          [3, "px;padding-bottom:"],
          [[7], [3, "shellPaddingBottom"]],
          [3, "px;"],
        ]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_4 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_4 = true;
    var x = [
      "./pages/diy/index.wxml",
      "./fragments/diy-main.wxml",
      "./fragments/modals.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_4_1();
      var oNL = _mz(z, "view", ["bindtap", 0, "class", 1], [], e, s, gg);
      var fOL = _v();
      _(oNL, fOL);
      if (_oz(z, 2, e, s, gg)) {
        fOL.wxVkey = 1;
      } else {
        fOL.wxVkey = 2;
        var cPL = _n("view");
        _rz(z, cPL, "class", 3, e, s, gg);
        var hQL = _v();
        _(cPL, hQL);
        if (_oz(z, 4, e, s, gg)) {
          hQL.wxVkey = 1;
        }
        var oRL = _v();
        _(cPL, oRL);
        if (_oz(z, 5, e, s, gg)) {
          oRL.wxVkey = 1;
        }
        var cSL = _mz(z, "view", ["class", 6, "style", 1], [], e, s, gg);
        var oTL = e_[x[0]].j;
        _ic(x[1], e_, x[0], e, s, cSL, gg);
        _ic(x[2], e_, x[0], e, s, cSL, gg);
        oTL.pop();
        oTL.pop();
        _(cPL, cSL);
        hQL.wxXCkey = 1;
        oRL.wxXCkey = 1;
        _(fOL, cPL);
      }
      fOL.wxXCkey = 1;
      _(r, oNL);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_4();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/diy/index.wxml"] = [$gwx_XC_4, "./pages/diy/index.wxml"];
else
  __wxAppCode__["pages/diy/index.wxml"] = $gwx_XC_4("./pages/diy/index.wxml");
__wxRoute = "pages/diy/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/diy/index.js";
define(
  "pages/diy/index.js",
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
    var a = require("./modules/initial-data").createDiyInitialData,
      e = require("./modules/methods");
    Page(Object.assign({ data: a() }, e));
  },
  { isPage: true, isComponent: true, currentFile: "pages/diy/index.js" }
);
require("pages/diy/index.js");
