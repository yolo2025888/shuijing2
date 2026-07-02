$gwx_XC_1 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_1 || [];
    function gz$gwx_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([
          a,
          [3, "mini-bracelet-flat "],
          [
            [2, "?:"],
            [[7], [3, "renderReady"]],
            [1, "mini-bracelet-flat--ready"],
            [1, ""],
          ],
          [3, " "],
          [
            [2, "?:"],
            [[7], [3, "snapshotShadow"]],
            [1, "mini-bracelet-flat--snapshot-shadow"],
            [1, ""],
          ],
        ]);
        Z([
          a,
          [3, "width:"],
          [[7], [3, "containerSize"]],
          [3, "px;height:"],
          [[7], [3, "containerSize"]],
          [3, "px;"],
        ]);
        Z([
          a,
          [3, "mini-bracelet-flat__spinner "],
          [
            [2, "?:"],
            [[7], [3, "animate"]],
            [1, "is-animate"],
            [1, ""],
          ],
        ]);
        Z([[7], [3, "snapshotShadow"]]);
        Z([3, "mini-bracelet-flat__cast-shadow"]);
        Z([3, "mini-bracelet-flat__inner"]);
        Z([
          a,
          z[1][1],
          [[7], [3, "physicalSize"]],
          z[1][3],
          [[7], [3, "physicalSize"]],
          [3, "px;transform:scale("],
          [[7], [3, "scale"]],
          [3, ");"],
        ]);
        Z([[7], [3, "beads"]]);
        Z([3, "key"]);
        Z([3, "mini-bracelet-flat__bead"]);
        Z([[6], [[7], [3, "item"]], [3, "wrapperStyle"]]);
        Z([3, "mini-bracelet-flat__rotator"]);
        Z([[6], [[7], [3, "item"]], [3, "rotatorStyle"]]);
        Z([[6], [[7], [3, "item"]], [3, "imgUrl"]]);
        Z([3, "mini-bracelet-flat__image"]);
        Z([3, "aspectFit"]);
        Z(z[13]);
        Z([[6], [[7], [3, "item"]], [3, "imageStyle"]]);
        Z([3, "mini-bracelet-flat__fallback"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_1 = true;
    var x = ["./components/mini-bracelet-flat/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_1_1();
      var hWZB = _mz(z, "view", ["class", 0, "style", 1], [], e, s, gg);
      var oXZB = _n("view");
      _rz(z, oXZB, "class", 2, e, s, gg);
      var cYZB = _v();
      _(oXZB, cYZB);
      if (_oz(z, 3, e, s, gg)) {
        cYZB.wxVkey = 1;
        var oZZB = _n("view");
        _rz(z, oZZB, "class", 4, e, s, gg);
        _(cYZB, oZZB);
      }
      var l1ZB = _mz(z, "view", ["class", 5, "style", 1], [], e, s, gg);
      var a2ZB = _v();
      _(l1ZB, a2ZB);
      var t3ZB = function (b5ZB, e4ZB, o6ZB, gg) {
        var o8ZB = _mz(z, "view", ["class", 9, "style", 1], [], b5ZB, e4ZB, gg);
        var f9ZB = _mz(
          z,
          "view",
          ["class", 11, "style", 1],
          [],
          b5ZB,
          e4ZB,
          gg
        );
        var c0ZB = _v();
        _(f9ZB, c0ZB);
        if (_oz(z, 13, b5ZB, e4ZB, gg)) {
          c0ZB.wxVkey = 1;
          var hA1B = _mz(
            z,
            "image",
            ["class", 14, "mode", 1, "src", 2, "style", 3],
            [],
            b5ZB,
            e4ZB,
            gg
          );
          _(c0ZB, hA1B);
        } else {
          c0ZB.wxVkey = 2;
          var oB1B = _n("view");
          _rz(z, oB1B, "class", 18, b5ZB, e4ZB, gg);
          _(c0ZB, oB1B);
        }
        c0ZB.wxXCkey = 1;
        _(o8ZB, f9ZB);
        _(o6ZB, o8ZB);
        return o6ZB;
      };
      a2ZB.wxXCkey = 2;
      _2z(z, 7, t3ZB, e, s, gg, a2ZB, "item", "index", "key");
      _(oXZB, l1ZB);
      cYZB.wxXCkey = 1;
      _(hWZB, oXZB);
      _(r, hWZB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_1();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["components/mini-bracelet-flat/index.wxml"] = [
    $gwx_XC_1,
    "./components/mini-bracelet-flat/index.wxml",
  ];
else
  __wxAppCode__["components/mini-bracelet-flat/index.wxml"] = $gwx_XC_1(
    "./components/mini-bracelet-flat/index.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["components/mini-bracelet-flat/index.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "mini-bracelet-flat{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;-webkit-justify-content:center;justify-content:center;opacity:0;position:relative;transition:opacity .18s ease}\n.",
      [1],
      "mini-bracelet-flat--ready{opacity:1}\n.",
      [1],
      "mini-bracelet-flat__spinner{position:relative}\n.",
      [1],
      "mini-bracelet-flat--snapshot-shadow .",
      [1],
      "mini-bracelet-flat__spinner{-webkit-filter:none;filter:none}\n.",
      [1],
      "mini-bracelet-flat__cast-shadow{background:radial-gradient(ellipse at center,rgba(44,40,37,.28) 0,rgba(44,40,37,.16) 42%,rgba(44,40,37,.06) 68%,rgba(44,40,37,0) 100%);border-radius:50%;-webkit-filter:blur(",
      [0, 5],
      ");filter:blur(",
      [0, 5],
      ");height:24%;left:50%;opacity:.9;pointer-events:none;position:absolute;top:58%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);width:78%;z-index:0}\n.",
      [1],
      "mini-bracelet-flat__spinner.",
      [1],
      "is-animate{-webkit-animation:bracelet-flat-spin 30s linear infinite;animation:bracelet-flat-spin 30s linear infinite}\n.",
      [1],
      "mini-bracelet-flat__inner{-webkit-flex-shrink:0;flex-shrink:0;position:relative;-webkit-transform-origin:center;transform-origin:center;z-index:1}\n.",
      [1],
      "mini-bracelet-flat__bead{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;position:absolute}\n.",
      [1],
      "mini-bracelet-flat__rotator{height:100%;position:relative;width:100%}\n.",
      [1],
      "mini-bracelet-flat__image{display:block;position:absolute}\n.",
      [1],
      "mini-bracelet-flat__fallback{background:radial-gradient(circle at 35% 35%,#fdfcfb 0,#ebd8c8 50%,#d4bba0 100%);border-radius:50%;height:100%;width:100%}\n@-webkit-keyframes bracelet-flat-spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\nto{-webkit-transform:rotate(1turn);transform:rotate(1turn)}\n}@keyframes bracelet-flat-spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\nto{-webkit-transform:rotate(1turn);transform:rotate(1turn)}\n}",
    ],
    undefined,
    { path: "./components/mini-bracelet-flat/index.wxss" }
  );
}
