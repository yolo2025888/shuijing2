$gwx_XC_0 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_0 || [];
    function gz$gwx_XC_0_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([
          a,
          [3, "tray-shell "],
          [
            [2, "?:"],
            [[7], [3, "photoMode"]],
            [1, "tray-shell--photo photo-stage"],
            [1, ""],
          ],
        ]);
        Z([[7], [3, "shellStyle"]]);
        Z([
          a,
          [3, "tray-layer tray-layer--bg "],
          [
            [2, "?:"],
            [[7], [3, "photoMode"]],
            [1, "photo-stage"],
            [1, ""],
          ],
        ]);
        Z([3, "trayBgCanvas"]);
        Z([[7], [3, "trayCanvasStyle"]]);
        Z([3, "2d"]);
        Z([3, "handleTouchEnd"]);
        Z(z[6]);
        Z([3, "handleTouchMove"]);
        Z([3, "handleTouchStart"]);
        Z([
          a,
          [3, "tray-layer tray-layer--bead "],
          [
            [2, "?:"],
            [[7], [3, "strungDomCanvasHidden"]],
            [1, "tray-layer--bead-covered"],
            [1, ""],
          ],
          [3, " "],
          z[2][2],
        ]);
        Z([3, "beadCanvas"]);
        Z([[7], [3, "beadCanvasStyle"]]);
        Z(z[5]);
        Z([
          a,
          [3, "tray-layer tray-layer--photo-shadow "],
          [
            [2, "?:"],
            [
              [2, "&&"],
              [[7], [3, "photoMode"]],
              [[7], [3, "photoSnapshotVisible"]],
            ],
            [1, "tray-layer--photo-shadow-visible photo-stage"],
            [1, ""],
          ],
        ]);
        Z([3, "photoTrayShadowCanvas"]);
        Z([[7], [3, "photoShadowCanvasStyle"]]);
        Z(z[5]);
        Z([
          a,
          [3, "tray-layer tray-layer--dom-shadow "],
          [
            [2, "?:"],
            [
              [2, "&&"],
              [[7], [3, "showStrungDomShadowLayer"]],
              [[7], [3, "strungDomOverlayVisible"]],
            ],
            [1, "tray-layer--dom-shadow-visible"],
            [1, ""],
          ],
        ]);
        Z([3, "strungDomShadowCanvas"]);
        Z([a, z[12], [[7], [3, "strungDomOverlayStyle"]]]);
        Z(z[5]);
        Z([[7], [3, "showStrungDomOverlay"]]);
        Z([
          a,
          [3, "tray-dom-overlay "],
          [
            [2, "?:"],
            [[7], [3, "strungDomOverlayVisible"]],
            [1, "tray-dom-overlay--visible"],
            [1, ""],
          ],
          z[10][3],
          [
            [2, "?:"],
            [[7], [3, "strungDomOverlayRotating"]],
            [1, "tray-dom-overlay--rotating"],
            [1, ""],
          ],
          z[10][3],
          [
            [2, "?:"],
            [[7], [3, "strungDomOverlayLayoutFrozen"]],
            [1, "tray-dom-overlay--layout-frozen"],
            [1, ""],
          ],
          z[10][3],
          [
            [2, "?:"],
            [
              [2, "||"],
              [
                [2, "||"],
                [[7], [3, "strungDomOverlayRotating"]],
                [[7], [3, "strungDomDragProxyVisible"]],
              ],
              [[7], [3, "strungDomFlyInVisible"]],
            ],
            [1, "tray-dom-overlay--interacting"],
            [1, ""],
          ],
          z[10][3],
          z[2][2],
        ]);
        Z([a, z[12], z[20][2]]);
        Z([[7], [3, "strungDomOverlayBeads"]]);
        Z([3, "uid"]);
        Z([
          a,
          [3, "tray-dom-bead "],
          [
            [2, "?:"],
            [[6], [[7], [3, "item"]], [3, "hidden"]],
            [1, "tray-dom-bead--hidden"],
            [1, ""],
          ],
        ]);
        Z([[6], [[7], [3, "item"]], [3, "wrapStyle"]]);
        Z([
          a,
          [3, "tray-dom-bead__image "],
          [
            [2, "?:"],
            [
              [2, "&&"],
              [[6], [[7], [3, "item"]], [3, "useBodyDropShadow"]],
              [[7], [3, "showStrungDomShadowLayer"]],
            ],
            [1, "tray-dom-bead__image--settled"],
            [1, ""],
          ],
        ]);
        Z([3, "aspectFit"]);
        Z([[6], [[7], [3, "item"]], [3, "imgUrl"]]);
        Z([[6], [[7], [3, "item"]], [3, "imageStyle"]]);
        Z([[7], [3, "strungDomDragProxyVisible"]]);
        Z([3, "tray-dom-bead tray-dom-bead--proxy"]);
        Z([[6], [[7], [3, "strungDomDragProxy"]], [3, "wrapStyle"]]);
        Z([3, "tray-dom-bead__image"]);
        Z(z[30]);
        Z([[6], [[7], [3, "strungDomDragProxy"]], [3, "imgUrl"]]);
        Z([[6], [[7], [3, "strungDomDragProxy"]], [3, "imageStyle"]]);
        Z([[7], [3, "strungDomFlyInVisible"]]);
        Z([3, "tray-dom-bead tray-dom-bead--fly-in"]);
        Z([[6], [[7], [3, "strungDomFlyInBead"]], [3, "wrapStyle"]]);
        Z(z[36]);
        Z(z[30]);
        Z([[6], [[7], [3, "strungDomFlyInBead"]], [3, "imgUrl"]]);
        Z([[6], [[7], [3, "strungDomFlyInBead"]], [3, "imageStyle"]]);
        Z([3, "tray-layer tray-layer--share"]);
        Z([3, "shareComposeCanvas"]);
        Z([[7], [3, "shareCanvasStyle"]]);
        Z(z[5]);
        Z([3, "tray-layer tray-layer--photo-snapshot-compose"]);
        Z([3, "photoSnapshotCanvas"]);
        Z(z[16]);
        Z(z[5]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1;
    }
    function gz$gwx_XC_0_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_0_2)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_2;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_0_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([
          a,
          [3, "mini-bracelet "],
          [
            [2, "?:"],
            [[7], [3, "renderReady"]],
            [1, "mini-bracelet--ready"],
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
          [3, "mini-bracelet__spinner "],
          [
            [2, "?:"],
            [[7], [3, "animate"]],
            [1, "is-animate"],
            [1, ""],
          ],
        ]);
        Z([3, "mini-bracelet__inner"]);
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
        Z([3, "mini-bracelet__shadow"]);
        Z([[6], [[7], [3, "item"]], [3, "shadowStyle"]]);
        Z([3, "mini-bracelet__rotator"]);
        Z([[6], [[7], [3, "item"]], [3, "rotatorStyle"]]);
        Z([[6], [[7], [3, "item"]], [3, "imgUrl"]]);
        Z([3, "mini-bracelet__image mini-bracelet__image--shadow"]);
        Z([3, "aspectFit"]);
        Z(z[11]);
        Z([[6], [[7], [3, "item"]], [3, "imageStyle"]]);
        Z([3, "mini-bracelet__fallback"]);
        Z(z[5]);
        Z(z[6]);
        Z([3, "mini-bracelet__bead"]);
        Z([[6], [[7], [3, "item"]], [3, "wrapperStyle"]]);
        Z(z[9]);
        Z(z[10]);
        Z(z[11]);
        Z([3, "mini-bracelet__image"]);
        Z(z[13]);
        Z(z[11]);
        Z(z[15]);
        Z(z[16]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_2);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_0 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_0 = true;
    var x = [
      "./components/bracelet-tray/index.wxml",
      "./components/mini-bracelet/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_0_1();
      var tIYB = _mz(z, "view", ["class", 0, "style", 1], [], e, s, gg);
      var bKYB = _mz(
        z,
        "canvas",
        ["class", 2, "id", 1, "style", 2, "type", 3],
        [],
        e,
        s,
        gg
      );
      _(tIYB, bKYB);
      var oLYB = _mz(
        z,
        "canvas",
        [
          "catchtouchcancel",
          6,
          "catchtouchend",
          1,
          "catchtouchmove",
          2,
          "catchtouchstart",
          3,
          "class",
          4,
          "id",
          5,
          "style",
          6,
          "type",
          7,
        ],
        [],
        e,
        s,
        gg
      );
      _(tIYB, oLYB);
      var xMYB = _mz(
        z,
        "canvas",
        ["class", 14, "id", 1, "style", 2, "type", 3],
        [],
        e,
        s,
        gg
      );
      _(tIYB, xMYB);
      var oNYB = _mz(
        z,
        "canvas",
        ["class", 18, "id", 1, "style", 2, "type", 3],
        [],
        e,
        s,
        gg
      );
      _(tIYB, oNYB);
      var eJYB = _v();
      _(tIYB, eJYB);
      if (_oz(z, 22, e, s, gg)) {
        eJYB.wxVkey = 1;
        var fOYB = _mz(z, "view", ["class", 23, "style", 1], [], e, s, gg);
        var oRYB = _v();
        _(fOYB, oRYB);
        var cSYB = function (lUYB, oTYB, aVYB, gg) {
          var eXYB = _mz(
            z,
            "view",
            ["class", 27, "style", 1],
            [],
            lUYB,
            oTYB,
            gg
          );
          var bYYB = _mz(
            z,
            "image",
            ["class", 29, "mode", 1, "src", 2, "style", 3],
            [],
            lUYB,
            oTYB,
            gg
          );
          _(eXYB, bYYB);
          _(aVYB, eXYB);
          return aVYB;
        };
        oRYB.wxXCkey = 2;
        _2z(z, 25, cSYB, e, s, gg, oRYB, "item", "index", "uid");
        var cPYB = _v();
        _(fOYB, cPYB);
        if (_oz(z, 33, e, s, gg)) {
          cPYB.wxVkey = 1;
          var oZYB = _mz(z, "view", ["class", 34, "style", 1], [], e, s, gg);
          var x1YB = _mz(
            z,
            "image",
            ["class", 36, "mode", 1, "src", 2, "style", 3],
            [],
            e,
            s,
            gg
          );
          _(oZYB, x1YB);
          _(cPYB, oZYB);
        }
        var hQYB = _v();
        _(fOYB, hQYB);
        if (_oz(z, 40, e, s, gg)) {
          hQYB.wxVkey = 1;
          var o2YB = _mz(z, "view", ["class", 41, "style", 1], [], e, s, gg);
          var f3YB = _mz(
            z,
            "image",
            ["class", 43, "mode", 1, "src", 2, "style", 3],
            [],
            e,
            s,
            gg
          );
          _(o2YB, f3YB);
          _(hQYB, o2YB);
        }
        cPYB.wxXCkey = 1;
        hQYB.wxXCkey = 1;
        _(eJYB, fOYB);
      }
      var c4YB = _mz(
        z,
        "canvas",
        ["class", 47, "id", 1, "style", 2, "type", 3],
        [],
        e,
        s,
        gg
      );
      _(tIYB, c4YB);
      var h5YB = _mz(
        z,
        "canvas",
        ["class", 51, "id", 1, "style", 2, "type", 3],
        [],
        e,
        s,
        gg
      );
      _(tIYB, h5YB);
      eJYB.wxXCkey = 1;
      _(r, tIYB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx_XC_0_2();
      var c7YB = _mz(z, "view", ["class", 0, "style", 1], [], e, s, gg);
      var o8YB = _n("view");
      _rz(z, o8YB, "class", 2, e, s, gg);
      var l9YB = _mz(z, "view", ["class", 3, "style", 1], [], e, s, gg);
      var a0YB = _v();
      _(l9YB, a0YB);
      var tAZB = function (bCZB, eBZB, oDZB, gg) {
        var oFZB = _mz(z, "view", ["class", 7, "style", 1], [], bCZB, eBZB, gg);
        var fGZB = _mz(z, "view", ["class", 9, "style", 1], [], bCZB, eBZB, gg);
        var cHZB = _v();
        _(fGZB, cHZB);
        if (_oz(z, 11, bCZB, eBZB, gg)) {
          cHZB.wxVkey = 1;
          var hIZB = _mz(
            z,
            "image",
            ["class", 12, "mode", 1, "src", 2, "style", 3],
            [],
            bCZB,
            eBZB,
            gg
          );
          _(cHZB, hIZB);
        } else {
          cHZB.wxVkey = 2;
          var oJZB = _n("view");
          _rz(z, oJZB, "class", 16, bCZB, eBZB, gg);
          _(cHZB, oJZB);
        }
        cHZB.wxXCkey = 1;
        _(oFZB, fGZB);
        _(oDZB, oFZB);
        return oDZB;
      };
      a0YB.wxXCkey = 2;
      _2z(z, 5, tAZB, e, s, gg, a0YB, "item", "index", "key");
      var cKZB = _v();
      _(l9YB, cKZB);
      var oLZB = function (aNZB, lMZB, tOZB, gg) {
        var bQZB = _mz(
          z,
          "view",
          ["class", 19, "style", 1],
          [],
          aNZB,
          lMZB,
          gg
        );
        var oRZB = _mz(
          z,
          "view",
          ["class", 21, "style", 1],
          [],
          aNZB,
          lMZB,
          gg
        );
        var xSZB = _v();
        _(oRZB, xSZB);
        if (_oz(z, 23, aNZB, lMZB, gg)) {
          xSZB.wxVkey = 1;
          var oTZB = _mz(
            z,
            "image",
            ["class", 24, "mode", 1, "src", 2, "style", 3],
            [],
            aNZB,
            lMZB,
            gg
          );
          _(xSZB, oTZB);
        } else {
          xSZB.wxVkey = 2;
          var fUZB = _n("view");
          _rz(z, fUZB, "class", 28, aNZB, lMZB, gg);
          _(xSZB, fUZB);
        }
        xSZB.wxXCkey = 1;
        _(bQZB, oRZB);
        _(tOZB, bQZB);
        return tOZB;
      };
      cKZB.wxXCkey = 2;
      _2z(z, 17, oLZB, e, s, gg, cKZB, "item", "index", "key");
      _(o8YB, l9YB);
      _(c7YB, o8YB);
      _(r, c7YB);
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_0();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["components/bracelet-tray/index.wxml"] = [
    $gwx_XC_0,
    "./components/bracelet-tray/index.wxml",
  ];
else
  __wxAppCode__["components/bracelet-tray/index.wxml"] = $gwx_XC_0(
    "./components/bracelet-tray/index.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["components/mini-bracelet/index.wxml"] = [
    $gwx_XC_0,
    "./components/mini-bracelet/index.wxml",
  ];
else
  __wxAppCode__["components/mini-bracelet/index.wxml"] = $gwx_XC_0(
    "./components/mini-bracelet/index.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["components/bracelet-tray/index.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "tray-shell{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;-webkit-justify-content:center;justify-content:center;overflow:visible;position:relative;transition:-webkit-transform .56s cubic-bezier(.25,1,.5,1);transition:transform .56s cubic-bezier(.25,1,.5,1);transition:transform .56s cubic-bezier(.25,1,.5,1),-webkit-transform .56s cubic-bezier(.25,1,.5,1)}\n.",
      [1],
      "tray-layer,.",
      [1],
      "tray-shell{background:transparent;-webkit-transform-origin:center center;transform-origin:center center}\n.",
      [1],
      "tray-layer{bottom:0;display:block;height:100%;left:0;position:absolute;right:0;top:0;transition:box-shadow .56s cubic-bezier(.25,1,.5,1),opacity .16s ease-out,-webkit-transform .56s cubic-bezier(.25,1,.5,1),-webkit-filter .56s cubic-bezier(.25,1,.5,1);transition:transform .56s cubic-bezier(.25,1,.5,1),box-shadow .56s cubic-bezier(.25,1,.5,1),filter .56s cubic-bezier(.25,1,.5,1),opacity .16s ease-out;transition:transform .56s cubic-bezier(.25,1,.5,1),box-shadow .56s cubic-bezier(.25,1,.5,1),filter .56s cubic-bezier(.25,1,.5,1),opacity .16s ease-out,-webkit-transform .56s cubic-bezier(.25,1,.5,1),-webkit-filter .56s cubic-bezier(.25,1,.5,1);width:100%}\n.",
      [1],
      "tray-layer--bg{border-radius:50%;z-index:1}\n.",
      [1],
      "tray-layer--bead{z-index:3}\n.",
      [1],
      "tray-layer--bead-covered{opacity:0}\n.",
      [1],
      "tray-layer--dom-shadow{opacity:0;pointer-events:none;transition:opacity .14s ease-out;z-index:3}\n.",
      [1],
      "tray-layer--photo-shadow{opacity:0;pointer-events:none;transition:opacity 0s linear,-webkit-transform .56s cubic-bezier(.25,1,.5,1);transition:transform .56s cubic-bezier(.25,1,.5,1),opacity 0s linear;transition:transform .56s cubic-bezier(.25,1,.5,1),opacity 0s linear,-webkit-transform .56s cubic-bezier(.25,1,.5,1);z-index:2}\n.",
      [1],
      "tray-layer--dom-shadow-visible,.",
      [1],
      "tray-layer--photo-shadow-visible{opacity:1}\n.",
      [1],
      "tray-dom-overlay{bottom:0;display:block;left:0;opacity:0;overflow:visible;pointer-events:none;position:absolute;right:0;top:0;-webkit-transform-origin:center center;transform-origin:center center;transition:opacity .16s ease-out,-webkit-transform .56s cubic-bezier(.25,1,.5,1);transition:transform .56s cubic-bezier(.25,1,.5,1),opacity .16s ease-out;transition:transform .56s cubic-bezier(.25,1,.5,1),opacity .16s ease-out,-webkit-transform .56s cubic-bezier(.25,1,.5,1);z-index:4}\n.",
      [1],
      "tray-dom-overlay--visible{opacity:1}\n.",
      [1],
      "tray-dom-overlay--rotating{transition:opacity .16s ease-out}\n.",
      [1],
      "tray-dom-overlay--layout-frozen,.",
      [1],
      "tray-dom-overlay--layout-frozen .",
      [1],
      "tray-dom-bead{transition:none}\n.",
      [1],
      "tray-dom-bead{pointer-events:none;position:absolute;-webkit-transform-origin:center center;transform-origin:center center;transition:opacity .12s ease-out,-webkit-transform .14s cubic-bezier(.25,1,.5,1);transition:transform .14s cubic-bezier(.25,1,.5,1),opacity .12s ease-out;transition:transform .14s cubic-bezier(.25,1,.5,1),opacity .12s ease-out,-webkit-transform .14s cubic-bezier(.25,1,.5,1);will-change:transform}\n.",
      [1],
      "tray-dom-bead--hidden{opacity:0}\n.",
      [1],
      "tray-dom-bead--proxy{transition:none}\n.",
      [1],
      "tray-dom-bead--fly-in .",
      [1],
      "tray-dom-bead__image,.",
      [1],
      "tray-dom-bead--proxy .",
      [1],
      "tray-dom-bead__image{-webkit-filter:drop-shadow(3px 5px 3px rgba(0,0,0,.26));filter:drop-shadow(3px 5px 3px rgba(0,0,0,.26))}\n.",
      [1],
      "tray-dom-bead--fly-in{transition:opacity .18s ease-out,-webkit-transform .26s cubic-bezier(.18,.9,.22,1);transition:transform .26s cubic-bezier(.18,.9,.22,1),opacity .18s ease-out;transition:transform .26s cubic-bezier(.18,.9,.22,1),opacity .18s ease-out,-webkit-transform .26s cubic-bezier(.18,.9,.22,1)}\n.",
      [1],
      "tray-dom-bead__image{height:100%;inset:0;position:absolute;-webkit-transform-origin:center center;transform-origin:center center;width:100%}\n.",
      [1],
      "tray-dom-bead__image--settled{-webkit-filter:drop-shadow(1.5px 3px 2px rgba(0,0,0,.3)) drop-shadow(.5px 1.5px 1px rgba(0,0,0,.14));filter:drop-shadow(1.5px 3px 2px rgba(0,0,0,.3)) drop-shadow(.5px 1.5px 1px rgba(0,0,0,.14))}\n.",
      [1],
      "tray-layer--photo-snapshot-compose,.",
      [1],
      "tray-layer--share{opacity:0;pointer-events:none;z-index:0}\n.",
      [1],
      "tray-shell--photo{overflow:visible}\n.",
      [1],
      "photo-stage{backface-visibility:hidden;-webkit-backface-visibility:hidden;isolation:isolate;-webkit-transform:translateZ(0);transform:translateZ(0);will-change:transform,opacity,filter}\n",
    ],
    undefined,
    { path: "./components/bracelet-tray/index.wxss" }
  );
  __wxAppCode__["components/mini-bracelet/index.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "mini-bracelet{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;-webkit-justify-content:center;justify-content:center;opacity:0;position:relative;transition:opacity .18s ease}\n.",
      [1],
      "mini-bracelet--ready{opacity:1}\n.",
      [1],
      "mini-bracelet__spinner{position:relative}\n.",
      [1],
      "mini-bracelet__spinner.",
      [1],
      "is-animate{-webkit-animation:bracelet-spin 30s linear infinite;animation:bracelet-spin 30s linear infinite}\n.",
      [1],
      "mini-bracelet__inner{-webkit-flex-shrink:0;flex-shrink:0;position:relative;-webkit-transform-origin:center;transform-origin:center}\n.",
      [1],
      "mini-bracelet__bead,.",
      [1],
      "mini-bracelet__shadow{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;position:absolute}\n.",
      [1],
      "mini-bracelet__image,.",
      [1],
      "mini-bracelet__rotator{height:100%;width:100%}\n.",
      [1],
      "mini-bracelet__image--shadow{opacity:.9}\n.",
      [1],
      "mini-bracelet__fallback{background:radial-gradient(circle at 35% 35%,#fdfcfb 0,#ebd8c8 50%,#d4bba0 100%);border-radius:50%;height:100%;width:100%}\n@-webkit-keyframes bracelet-spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\nto{-webkit-transform:rotate(1turn);transform:rotate(1turn)}\n}@keyframes bracelet-spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\nto{-webkit-transform:rotate(1turn);transform:rotate(1turn)}\n}",
    ],
    undefined,
    { path: "./components/mini-bracelet/index.wxss" }
  );
}
