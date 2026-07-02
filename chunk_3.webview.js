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
        Z([3, "diy-loading-page"]);
        Z([3, "diy-loading-core"]);
        Z([3, "diy-loading-logo"]);
        Z([3, "aspectFit"]);
        Z([3, "/assets/SLLOGO.svg"]);
        Z([3, "loading"]);
        Z([3, "diy-loading-spinner"]);
        Z([3, "diy-loading-text"]);
        Z([a, [[7], [3, "loadingText"]]]);
        Z([[7], [3, "progressText"]]);
        Z([3, "diy-loading-sub"]);
        Z([a, [[7], [3, "progressText"]]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_3 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_3 = true;
    var x = ["./pages/diy-loading/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_3_1();
      var lC3B = _n("view");
      _rz(z, lC3B, "class", 0, e, s, gg);
      var aD3B = _n("view");
      _rz(z, aD3B, "class", 1, e, s, gg);
      var eF3B = _mz(
        z,
        "image",
        ["class", 2, "mode", 1, "src", 2],
        [],
        e,
        s,
        gg
      );
      _(aD3B, eF3B);
      var bG3B = _mz(z, "view", ["ariaLabel", 5, "class", 1], [], e, s, gg);
      _(aD3B, bG3B);
      var oH3B = _n("text");
      _rz(z, oH3B, "class", 7, e, s, gg);
      var xI3B = _oz(z, 8, e, s, gg);
      _(oH3B, xI3B);
      _(aD3B, oH3B);
      var tE3B = _v();
      _(aD3B, tE3B);
      if (_oz(z, 9, e, s, gg)) {
        tE3B.wxVkey = 1;
        var oJ3B = _n("text");
        _rz(z, oJ3B, "class", 10, e, s, gg);
        var fK3B = _oz(z, 11, e, s, gg);
        _(oJ3B, fK3B);
        _(tE3B, oJ3B);
      }
      tE3B.wxXCkey = 1;
      _(lC3B, aD3B);
      _(r, lC3B);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_3";
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

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/diy-loading/index.wxss"] = setCssToHead(
    [
      [2, "./design-system/v2-tokens.wxss"],
      ".",
      [1],
      "diy-loading-page{background:var(--v2-color-bg);min-height:100vh}\n.",
      [1],
      "diy-loading-core,.",
      [1],
      "diy-loading-page{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.",
      [1],
      "diy-loading-core{-webkit-flex-direction:column;flex-direction:column;gap:",
      [0, 24],
      "}\n.",
      [1],
      "diy-loading-logo{height:",
      [0, 180],
      ";width:",
      [0, 180],
      "}\n.",
      [1],
      "diy-loading-spinner{-webkit-animation:diy-loading-spin .9s linear infinite;animation:diy-loading-spin .9s linear infinite;border:",
      [0, 4],
      " solid var(--v2-color-overlay-light);border-radius:50%;border-top-color:var(--v2-color-text-main);height:",
      [0, 48],
      ";width:",
      [0, 48],
      "}\n.",
      [1],
      "diy-loading-text{color:var(--v2-color-text-main);font-size:",
      [0, 26],
      ";font-weight:500;line-height:1.4}\n.",
      [1],
      "diy-loading-sub{color:var(--v2-color-text-muted);font-size:",
      [0, 22],
      ";line-height:1.4}\n@-webkit-keyframes diy-loading-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}\n}@keyframes diy-loading-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\n100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}\n}",
    ],
    "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/diy-loading/index.wxss:1:1)",
    { path: "./pages/diy-loading/index.wxss" }
  );
}
