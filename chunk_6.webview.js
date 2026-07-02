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
        Z([3, "maintenance-page"]);
        Z([3, "maintenance-panel"]);
        Z([3, "maintenance-logo"]);
        Z([3, "aspectFit"]);
        Z([3, "/assets/SLLOGO.svg"]);
        Z([3, "maintenance-title"]);
        Z([a, [[7], [3, "title"]]]);
        Z([3, "maintenance-message"]);
        Z([a, [[7], [3, "message"]]]);
        Z([[7], [3, "expectedRecoverAt"]]);
        Z([3, "maintenance-meta"]);
        Z([a, [[7], [3, "expectedRecoverAt"]]]);
        Z([[7], [3, "contactText"]]);
        Z(z[10]);
        Z([a, [[7], [3, "contactText"]]]);
        Z([3, "handleRetry"]);
        Z([3, "maintenance-button"]);
        Z([[7], [3, "checking"]]);
        Z([3, "重新检查"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_6_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_6_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_6 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_6 = true;
    var x = ["./pages/maintenance/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_6_1();
      var eD5B = _n("view");
      _rz(z, eD5B, "class", 0, e, s, gg);
      var bE5B = _n("view");
      _rz(z, bE5B, "class", 1, e, s, gg);
      var oH5B = _mz(
        z,
        "image",
        ["class", 2, "mode", 1, "src", 2],
        [],
        e,
        s,
        gg
      );
      _(bE5B, oH5B);
      var fI5B = _n("text");
      _rz(z, fI5B, "class", 5, e, s, gg);
      var cJ5B = _oz(z, 6, e, s, gg);
      _(fI5B, cJ5B);
      _(bE5B, fI5B);
      var hK5B = _n("text");
      _rz(z, hK5B, "class", 7, e, s, gg);
      var oL5B = _oz(z, 8, e, s, gg);
      _(hK5B, oL5B);
      _(bE5B, hK5B);
      var oF5B = _v();
      _(bE5B, oF5B);
      if (_oz(z, 9, e, s, gg)) {
        oF5B.wxVkey = 1;
        var cM5B = _n("text");
        _rz(z, cM5B, "class", 10, e, s, gg);
        var oN5B = _oz(z, 11, e, s, gg);
        _(cM5B, oN5B);
        _(oF5B, cM5B);
      }
      var xG5B = _v();
      _(bE5B, xG5B);
      if (_oz(z, 12, e, s, gg)) {
        xG5B.wxVkey = 1;
        var lO5B = _n("text");
        _rz(z, lO5B, "class", 13, e, s, gg);
        var aP5B = _oz(z, 14, e, s, gg);
        _(lO5B, aP5B);
        _(xG5B, lO5B);
      }
      var tQ5B = _mz(
        z,
        "button",
        ["bindtap", 15, "class", 1, "loading", 2],
        [],
        e,
        s,
        gg
      );
      var eR5B = _oz(z, 18, e, s, gg);
      _(tQ5B, eR5B);
      _(bE5B, tQ5B);
      oF5B.wxXCkey = 1;
      xG5B.wxXCkey = 1;
      _(eD5B, bE5B);
      _(r, eD5B);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_6";
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

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/maintenance/index.wxss"] = setCssToHead(
    [
      [2, "./design-system/v2-tokens.wxss"],
      ".",
      [1],
      "maintenance-page{background:var(--v2-color-bg);box-sizing:border-box;color:var(--v2-color-text-main);-webkit-justify-content:center;justify-content:center;min-height:100vh;padding:",
      [0, 96],
      " ",
      [0, 56],
      " calc(",
      [0, 96],
      " + env(safe-area-inset-bottom))}\n.",
      [1],
      "maintenance-page,.",
      [1],
      "maintenance-panel{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.",
      [1],
      "maintenance-panel{-webkit-flex-direction:column;flex-direction:column;max-width:",
      [0, 560],
      ";text-align:center;width:100%}\n.",
      [1],
      "maintenance-logo{height:",
      [0, 168],
      ";margin-bottom:",
      [0, 38],
      ";width:",
      [0, 168],
      "}\n.",
      [1],
      "maintenance-title{color:var(--v2-color-text-main);font-size:",
      [0, 38],
      ";font-weight:700;line-height:1.35}\n.",
      [1],
      "maintenance-message{color:var(--v2-color-text-muted);font-size:",
      [0, 26],
      ";line-height:1.7;margin-top:",
      [0, 22],
      "}\n.",
      [1],
      "maintenance-meta{color:var(--v2-color-text-muted);font-size:",
      [0, 23],
      ";line-height:1.5;margin-top:",
      [0, 18],
      "}\n.",
      [1],
      "maintenance-button{background:var(--v2-color-text-main);border-radius:",
      [0, 999],
      ";color:var(--v2-color-bg);font-size:",
      [0, 25],
      ";font-weight:600;height:",
      [0, 88],
      ";line-height:",
      [0, 88],
      ";margin-top:",
      [0, 54],
      ";padding:0 ",
      [0, 32],
      ";width:100%}\n.",
      [1],
      "maintenance-button::after{border:none}\n",
    ],
    "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/maintenance/index.wxss:1:1)",
    { path: "./pages/maintenance/index.wxss" }
  );
}
