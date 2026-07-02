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
        Z([3, "loading-page"]);
        Z([3, "diy-loading-core"]);
        Z([3, "diy-loading-logo"]);
        Z([3, "aspectFit"]);
        Z([a, [[7], [3, "assetUiBaseUrl"]], [3, "/SLLOGO.svg"]]);
        Z([3, "loading"]);
        Z([3, "diy-loading-spinner"]);
        Z([3, "diy-loading-text"]);
        Z([
          a,
          [
            [2, "?:"],
            [
              [2, "<"],
              [[7], [3, "loadProgress"]],
              [1, 100],
            ],
            [1, "正在加载 StoneLab..."],
            [1, "StoneLab 已就绪"],
          ],
        ]);
        Z([3, "diy-loading-sub"]);
        Z([a, [[7], [3, "loadProgress"]], [3, "%"]]);
        Z([3, "app-shell"]);
        Z([[7], [3, "toastVisible"]]);
        Z([3, "toast"]);
        Z([a, [[7], [3, "toast"]]]);
        Z([[7], [3, "webPaySceneResolving"]]);
        Z([3, "web-pay-entry-mask"]);
        Z([3, "web-pay-entry-card"]);
        Z([3, "web-pay-entry-logo"]);
        Z(z[6]);
        Z([a, z[7][1], z[7][2]]);
        Z([3, "web-pay-entry-spinner"]);
        Z([3, "web-pay-entry-title"]);
        Z([3, "正在打开订单支付"]);
        Z([3, "web-pay-entry-sub"]);
        Z([3, "正在确认登录状态与订单信息"]);
        Z([[7], [3, "standaloneDiyEntryMaskVisible"]]);
        Z([3, "diy-scene-mask diy-scene-mask--global"]);
        Z([3, "diy-scene-mask__core"]);
        Z([3, "diy-scene-mask__logo"]);
        Z(z[6]);
        Z([a, z[7][1], z[7][2]]);
        Z([3, "diy-scene-mask__spinner"]);
        Z([3, "diy-scene-mask__title"]);
        Z([3, "正在进入 DIY..."]);
        Z([3, "diy-scene-mask__sub"]);
        Z([3, "首屏正在合成，请稍候"]);
        Z([3, "page-container mobile-shell"]);
        Z([
          a,
          [3, "padding-top:"],
          [[7], [3, "shellPaddingTop"]],
          [3, "px;padding-bottom:"],
          [[7], [3, "shellPaddingBottom"]],
          [3, "px;"],
        ]);
        Z([3, "indexShareComposeCanvas"]);
        Z([
          3,
          "position:fixed;left:-2400rpx;top:-2400rpx;width:1000px;height:800px;opacity:0;pointer-events:none;",
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
      var cD4B = _mz(z, "view", ["bindtap", 0, "class", 1], [], e, s, gg);
      var hE4B = _v();
      _(cD4B, hE4B);
      if (_oz(z, 2, e, s, gg)) {
        hE4B.wxVkey = 1;
        var oF4B = _n("view");
        _rz(z, oF4B, "class", 3, e, s, gg);
        var cG4B = _n("view");
        _rz(z, cG4B, "class", 4, e, s, gg);
        var oH4B = _mz(
          z,
          "image",
          ["class", 5, "mode", 1, "src", 2],
          [],
          e,
          s,
          gg
        );
        _(cG4B, oH4B);
        var lI4B = _mz(z, "view", ["ariaLabel", 8, "class", 1], [], e, s, gg);
        _(cG4B, lI4B);
        var aJ4B = _n("text");
        _rz(z, aJ4B, "class", 10, e, s, gg);
        var tK4B = _oz(z, 11, e, s, gg);
        _(aJ4B, tK4B);
        _(cG4B, aJ4B);
        var eL4B = _n("text");
        _rz(z, eL4B, "class", 12, e, s, gg);
        var bM4B = _oz(z, 13, e, s, gg);
        _(eL4B, bM4B);
        _(cG4B, eL4B);
        _(oF4B, cG4B);
        _(hE4B, oF4B);
      } else {
        hE4B.wxVkey = 2;
        var oN4B = _n("view");
        _rz(z, oN4B, "class", 14, e, s, gg);
        var xO4B = _v();
        _(oN4B, xO4B);
        if (_oz(z, 15, e, s, gg)) {
          xO4B.wxVkey = 1;
          var cR4B = _n("view");
          _rz(z, cR4B, "class", 16, e, s, gg);
          var hS4B = _oz(z, 17, e, s, gg);
          _(cR4B, hS4B);
          _(xO4B, cR4B);
        }
        var oP4B = _v();
        _(oN4B, oP4B);
        if (_oz(z, 18, e, s, gg)) {
          oP4B.wxVkey = 1;
          var oT4B = _n("view");
          _rz(z, oT4B, "class", 19, e, s, gg);
          var cU4B = _n("view");
          _rz(z, cU4B, "class", 20, e, s, gg);
          var oV4B = _mz(
            z,
            "image",
            ["class", 21, "mode", 1, "src", 2],
            [],
            e,
            s,
            gg
          );
          _(cU4B, oV4B);
          var lW4B = _n("view");
          _rz(z, lW4B, "class", 24, e, s, gg);
          _(cU4B, lW4B);
          var aX4B = _n("text");
          _rz(z, aX4B, "class", 25, e, s, gg);
          var tY4B = _oz(z, 26, e, s, gg);
          _(aX4B, tY4B);
          _(cU4B, aX4B);
          var eZ4B = _n("text");
          _rz(z, eZ4B, "class", 27, e, s, gg);
          var b14B = _oz(z, 28, e, s, gg);
          _(eZ4B, b14B);
          _(cU4B, eZ4B);
          _(oT4B, cU4B);
          _(oP4B, oT4B);
        }
        var fQ4B = _v();
        _(oN4B, fQ4B);
        if (_oz(z, 29, e, s, gg)) {
          fQ4B.wxVkey = 1;
          var o24B = _n("view");
          _rz(z, o24B, "class", 30, e, s, gg);
          var x34B = _n("view");
          _rz(z, x34B, "class", 31, e, s, gg);
          var o44B = _mz(
            z,
            "image",
            ["class", 32, "mode", 1, "src", 2],
            [],
            e,
            s,
            gg
          );
          _(x34B, o44B);
          var f54B = _n("view");
          _rz(z, f54B, "class", 35, e, s, gg);
          _(x34B, f54B);
          var c64B = _n("text");
          _rz(z, c64B, "class", 36, e, s, gg);
          var h74B = _oz(z, 37, e, s, gg);
          _(c64B, h74B);
          _(x34B, c64B);
          var o84B = _n("text");
          _rz(z, o84B, "class", 38, e, s, gg);
          var c94B = _oz(z, 39, e, s, gg);
          _(o84B, c94B);
          _(x34B, o84B);
          _(o24B, x34B);
          _(fQ4B, o24B);
        }
        var o04B = _mz(z, "view", ["class", 40, "style", 1], [], e, s, gg);
        var lA5B = e_[x[0]].j;
        _ic(x[1], e_, x[0], e, s, o04B, gg);
        _ic(x[2], e_, x[0], e, s, o04B, gg);
        _ic(x[3], e_, x[0], e, s, o04B, gg);
        _ic(x[4], e_, x[0], e, s, o04B, gg);
        _ic(x[5], e_, x[0], e, s, o04B, gg);
        lA5B.pop();
        lA5B.pop();
        lA5B.pop();
        lA5B.pop();
        lA5B.pop();
        _(oN4B, o04B);
        xO4B.wxXCkey = 1;
        oP4B.wxXCkey = 1;
        fQ4B.wxXCkey = 1;
        _(hE4B, oN4B);
      }
      var aB5B = _mz(z, "canvas", ["canvasId", 42, "style", 1], [], e, s, gg);
      _(cD4B, aB5B);
      hE4B.wxXCkey = 1;
      _(r, cD4B);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_5";
        var main = e_[path].f;
        if (typeof global === "undefined") global = {};
        global.f = $gdc(f_[path], "", 1);
        if (
          typeof outerGlobal.__webview_engine_version__ != "undefined" &&
          outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 &&
          outerGlobal.__mergeData__
        ) {
          env = outerGlobal.__mergeData__(env, dd);
        }
        try {
          main(env, {}, root, global);
          _tsd(root);
          if (
            typeof outerGlobal.__webview_engine_version__ == "undefined" ||
            outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6
          ) {
            return _ev(root);
          }
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

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/index/index.wxss"] = setCssToHead(
    [[2, "./pages/index/index.wxss"]],
    "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/index/index.wxss:1:1)",
    { path: "./pages/index/index.wxss" }
  );
}
