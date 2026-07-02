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
        Z([3, "app-shell app-shell--diy-independent"]);
        Z([[7], [3, "toastVisible"]]);
        Z([3, "toast"]);
        Z([a, [[7], [3, "toast"]]]);
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
        Z([3, "page-container mobile-shell mobile-shell--diy-independent"]);
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
      var hM3B = _mz(z, "view", ["bindtap", 0, "class", 1], [], e, s, gg);
      var oN3B = _v();
      _(hM3B, oN3B);
      if (_oz(z, 2, e, s, gg)) {
        oN3B.wxVkey = 1;
        var cO3B = _n("view");
        _rz(z, cO3B, "class", 3, e, s, gg);
        var oP3B = _n("view");
        _rz(z, oP3B, "class", 4, e, s, gg);
        var lQ3B = _mz(
          z,
          "image",
          ["class", 5, "mode", 1, "src", 2],
          [],
          e,
          s,
          gg
        );
        _(oP3B, lQ3B);
        var aR3B = _mz(z, "view", ["ariaLabel", 8, "class", 1], [], e, s, gg);
        _(oP3B, aR3B);
        var tS3B = _n("text");
        _rz(z, tS3B, "class", 10, e, s, gg);
        var eT3B = _oz(z, 11, e, s, gg);
        _(tS3B, eT3B);
        _(oP3B, tS3B);
        var bU3B = _n("text");
        _rz(z, bU3B, "class", 12, e, s, gg);
        var oV3B = _oz(z, 13, e, s, gg);
        _(bU3B, oV3B);
        _(oP3B, bU3B);
        _(cO3B, oP3B);
        _(oN3B, cO3B);
      } else {
        oN3B.wxVkey = 2;
        var xW3B = _n("view");
        _rz(z, xW3B, "class", 14, e, s, gg);
        var oX3B = _v();
        _(xW3B, oX3B);
        if (_oz(z, 15, e, s, gg)) {
          oX3B.wxVkey = 1;
          var cZ3B = _n("view");
          _rz(z, cZ3B, "class", 16, e, s, gg);
          var h13B = _oz(z, 17, e, s, gg);
          _(cZ3B, h13B);
          _(oX3B, cZ3B);
        }
        var fY3B = _v();
        _(xW3B, fY3B);
        if (_oz(z, 18, e, s, gg)) {
          fY3B.wxVkey = 1;
          var o23B = _n("view");
          _rz(z, o23B, "class", 19, e, s, gg);
          var c33B = _n("view");
          _rz(z, c33B, "class", 20, e, s, gg);
          var o43B = _mz(
            z,
            "image",
            ["class", 21, "mode", 1, "src", 2],
            [],
            e,
            s,
            gg
          );
          _(c33B, o43B);
          var l53B = _n("view");
          _rz(z, l53B, "class", 24, e, s, gg);
          _(c33B, l53B);
          var a63B = _n("text");
          _rz(z, a63B, "class", 25, e, s, gg);
          var t73B = _oz(z, 26, e, s, gg);
          _(a63B, t73B);
          _(c33B, a63B);
          var e83B = _n("text");
          _rz(z, e83B, "class", 27, e, s, gg);
          var b93B = _oz(z, 28, e, s, gg);
          _(e83B, b93B);
          _(c33B, e83B);
          _(o23B, c33B);
          _(fY3B, o23B);
        }
        var o03B = _mz(z, "view", ["class", 29, "style", 1], [], e, s, gg);
        var xA4B = e_[x[0]].j;
        _ic(x[1], e_, x[0], e, s, o03B, gg);
        _ic(x[2], e_, x[0], e, s, o03B, gg);
        xA4B.pop();
        xA4B.pop();
        _(xW3B, o03B);
        oX3B.wxXCkey = 1;
        fY3B.wxXCkey = 1;
        _(oN3B, xW3B);
      }
      var oB4B = _mz(z, "canvas", ["canvasId", 31, "style", 1], [], e, s, gg);
      _(hM3B, oB4B);
      oN3B.wxXCkey = 1;
      _(r, hM3B);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_4();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/diy/index.wxml"] = [$gwx_XC_4, "./pages/diy/index.wxml"];
else
  __wxAppCode__["pages/diy/index.wxml"] = $gwx_XC_4("./pages/diy/index.wxml");

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/diy/index.wxss"] = setCssToHead(
    [
      [2, "./pages/index/index.wxss"],
      ".",
      [1],
      "app-shell--diy-independent,.",
      [1],
      "diy-independent-page,.",
      [1],
      "mobile-shell--diy-independent{min-height:100vh}\n.",
      [1],
      "bead-grid--skeleton{-webkit-align-items:stretch;align-items:stretch}\n",
    ],
    "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/diy/index.wxss:1:1)",
    { path: "./pages/diy/index.wxss" }
  );
}
