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
          [3, " "],
          [
            [2, "?:"],
            [[7], [3, "strungDomOverlayRotating"]],
            [1, "tray-dom-overlay--rotating"],
            [1, ""],
          ],
          [3, " "],
          [
            [2, "?:"],
            [[7], [3, "strungDomOverlayLayoutFrozen"]],
            [1, "tray-dom-overlay--layout-frozen"],
            [1, ""],
          ],
          [3, " "],
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
          [3, " "],
          [
            [2, "?:"],
            [[7], [3, "photoMode"]],
            [1, "photo-stage"],
            [1, ""],
          ],
        ]);
        Z([
          a,
          [[7], [3, "beadCanvasStyle"]],
          [[7], [3, "strungDomOverlayStyle"]],
        ]);
        Z([[7], [3, "strungDomDragProxyVisible"]]);
        Z([[7], [3, "strungDomFlyInVisible"]]);
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
      var hYK = _v();
      _(r, hYK);
      if (_oz(z, 0, e, s, gg)) {
        hYK.wxVkey = 1;
        var oZK = _mz(z, "view", ["class", 1, "style", 1], [], e, s, gg);
        var c1K = _v();
        _(oZK, c1K);
        if (_oz(z, 3, e, s, gg)) {
          c1K.wxVkey = 1;
        }
        var o2K = _v();
        _(oZK, o2K);
        if (_oz(z, 4, e, s, gg)) {
          o2K.wxVkey = 1;
        }
        c1K.wxXCkey = 1;
        o2K.wxXCkey = 1;
        _(hYK, oZK);
      }
      hYK.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx_XC_0_2();
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_0";
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
__wxRoute = "components/bracelet-tray/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/bracelet-tray/index.js";
define(
  "components/bracelet-tray/index.js",
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
    var t = require("../../utils/catalog").getTrayBg,
      e = require("./methods/core"),
      s = require("./methods/image"),
      a = require("./methods/state"),
      i = require("./methods/physics-render"),
      r = require("./methods/touch"),
      n = require("./constants").getTrayPhysics;
    Component({
      properties: {
        initPattern: { type: Array, value: [] },
        initRenderPlan: { type: Array, value: [] },
        forceRegen: { type: Number, value: 0 },
        bgIndex: { type: Number, value: 0 },
        traySize: { type: Number, value: 366 },
        photoMode: { type: Boolean, value: !1 },
        active: { type: Boolean, value: !0 },
      },
      data: {
        shellStyle: "",
        trayCanvasStyle: "",
        beadCanvasStyle: "",
        shareCanvasStyle: "",
        showStrungDomOverlay: !1,
        strungDomOverlayVisible: !1,
        strungDomCanvasHidden: !1,
        showStrungDomShadowLayer: !1,
        strungDomOverlayRotating: !1,
        strungDomOverlayLayoutFrozen: !1,
        strungDomOverlayStyle: "",
        strungDomOverlayBeads: [],
        strungDomDragProxyVisible: !1,
        strungDomDragProxy: null,
        strungDomFlyInVisible: !1,
        strungDomFlyInBead: null,
        photoSnapshotVisible: !1,
      },
      observers: {
        active: function (t) {
          if (this.ready) {
            if (t) return this.startLoop(), void this.render();
            this.stopLoop(),
              "function" == typeof this.cancelScheduledRender &&
                this.cancelScheduledRender(),
              "function" == typeof this.clearVisibleCanvasLayers &&
                this.clearVisibleCanvasLayers();
          }
        },
        forceRegen: function () {
          this.ready &&
            this.applyPattern(this.properties.initPattern || [], {
              renderPlan: this.properties.initRenderPlan || [],
            });
        },
        bgIndex: function () {
          var e = this;
          if (this.ready) {
            this._bgLayerDirty = !0;
            var s = t(this.properties.bgIndex);
            this.ensureImageReady(s.url).then(function () {
              e.scheduleRender ? e.scheduleRender() : e.render();
            });
          }
        },
        photoMode: function () {
          if (this.ready) {
            var t = !!this.properties.photoMode,
              e = !!this._lastPhotoMode;
            (this._lastPhotoMode = t),
              e !== t &&
                "function" == typeof this.armPhotoTransitionFreeze &&
                this.armPhotoTransitionFreeze(620),
              this.syncLayerStyles(),
              this.render(),
              t && this.properties.active && this.isStrung
                ? ((this._stableFrameCount = 0),
                  (this._settledFinalRenderRequested = !1),
                  this.setRenderQualityMode &&
                    this.setRenderQualityMode("photo"),
                  "function" == typeof this.preparePhotoSnapshotLayer &&
                    this.preparePhotoSnapshotLayer(),
                  this.reqRef ||
                    "function" != typeof this.startLoop ||
                    this.startLoop())
                : "function" == typeof this.restoreNormalModeLayout
                ? this.restoreNormalModeLayout()
                : "function" == typeof this.clearPhotoSnapshotLayer &&
                  this.clearPhotoSnapshotLayer();
          }
        },
        traySize: function (t) {
          this.ready ? this.handleTraySizeChange(t) : this.syncLayerStyles();
        },
      },
      lifetimes: {
        attached: function () {
          var t = this,
            e = n().trayRadius;
          (this.ready = !1),
            (this.dpr = 1),
            (this.bgCanvas = null),
            (this.bgCtx = null),
            (this.beadCanvas = null),
            (this.beadCtx = null),
            (this.strungDomShadowCanvas = null),
            (this.strungDomShadowCtx = null),
            (this.photoSnapshotCanvas = null),
            (this.photoSnapshotCtx = null),
            (this.shareCanvas = null),
            (this.shareCtx = null),
            (this.displaySize = this.properties.traySize || 2 * e),
            (this.logicalSize = 2 * e),
            (this.beadsRef = []),
            (this.imageCache = {}),
            (this.imageMeta = {}),
            (this.accessoryShadowCache = {}),
            (this.accessoryShadowCacheKeys = []),
            (this.accessoryContactShadowCache = {}),
            (this.accessoryContactShadowCacheKeys = []),
            (this.beadShadowTemplateCache = {}),
            (this.beadShadowTemplateCacheKeys = []),
            (this.beadRenderTemplateCache = {}),
            (this.beadRenderTemplateCacheKeys = []),
            (this._beadRenderPrewarmTokens = {}),
            (this._renderAssetWarmupPauseReasons = Object.create(null)),
            (this._renderAssetWarmupPaused = !1),
            (this._renderAssetWarmupToken = 0),
            (this._drawNodes = []),
            (this.applyPatternToken = 0),
            (this.isStrung = !1),
            (this.renderQualityMode = "interactive"),
            (this.animFrameRef = 0),
            (this.globalRotRef = 0),
            (this.reqRef = null),
            (this._renderReqRef = null),
            (this._renderScheduled = !1),
            (this._bgLayerDirty = !0),
            (this._stableFrameCount = 0),
            (this._settledFinalRenderRequested = !1),
            (this._strungDomOverlayKey = ""),
            (this._strungDomOverlayBaseRotation = 0),
            (this._strungDomOverlayPreparing = !1),
            (this._strungDomOverlayPreparedForFinal = !1),
            (this._strungDomOverlayRevealTimer = null),
            (this._strungDomCanvasFadeTimer = null),
            (this._strungDomFlyInTimer = null),
            (this._strungDomFlyInUid = ""),
            (this._strungDomLayoutUnfreezeTimer = null),
            (this._strungDomOverlayRotateReq = null),
            (this._strungDomOverlayRotatePendingStyle = ""),
            (this._photoSnapshotToken = 0),
            (this._photoSnapshotSpinRotation = 0),
            (this._photoSnapshotLastFrameAt = 0),
            (this._photoSnapshotBeads = null),
            (this._lastPhotoMode = !!this.properties.photoMode),
            (this._photoTransitionActive = !1),
            (this._photoTransitionTimer = null),
            (this._initialCanvasStabilizeTimer = null),
            (this._canvasInitRetryTimer = null),
            (this._canvasInitRetryCount = 0),
            (this._strungDomDragUid = ""),
            (this._strungDomDragSourceIndex = -1),
            (this._strungDomDragTargetIndex = -1),
            (this._strungDomDragLastTargetAt = 0),
            (this._strungDomDragProxyPatchAt = 0),
            (this.blindBoxTimer = null),
            (this.initialLoopGuardTimer = null),
            (this.dragState = this.createDragState()),
            this.syncLayerStyles(),
            wx.nextTick(function () {
              t.initCanvas();
            }),
            (this.initialLoopGuardTimer = setInterval(function () {
              t.ready &&
                (t.properties.active || t.stopLoop(),
                clearInterval(t.initialLoopGuardTimer),
                (t.initialLoopGuardTimer = null));
            }, 48));
        },
        detached: function () {
          (this.ready = !1),
            this.stopLoop(),
            "function" == typeof this.cancelScheduledRender &&
              this.cancelScheduledRender(),
            this.initialLoopGuardTimer &&
              (clearInterval(this.initialLoopGuardTimer),
              (this.initialLoopGuardTimer = null)),
            this._initialCanvasStabilizeTimer &&
              (clearTimeout(this._initialCanvasStabilizeTimer),
              (this._initialCanvasStabilizeTimer = null)),
            this._canvasInitRetryTimer &&
              (clearTimeout(this._canvasInitRetryTimer),
              (this._canvasInitRetryTimer = null)),
            this._photoTransitionTimer &&
              (clearTimeout(this._photoTransitionTimer),
              (this._photoTransitionTimer = null)),
            (this._photoTransitionActive = !1),
            this._strungDomOverlayRevealTimer &&
              (clearTimeout(this._strungDomOverlayRevealTimer),
              (this._strungDomOverlayRevealTimer = null)),
            this._strungDomCanvasFadeTimer &&
              (clearTimeout(this._strungDomCanvasFadeTimer),
              (this._strungDomCanvasFadeTimer = null)),
            this._strungDomFlyInTimer &&
              (clearTimeout(this._strungDomFlyInTimer),
              (this._strungDomFlyInTimer = null)),
            this._strungDomOverlayRotateReq &&
              (this.beadCanvas &&
              "function" == typeof this.beadCanvas.cancelAnimationFrame
                ? this.beadCanvas.cancelAnimationFrame(
                    this._strungDomOverlayRotateReq
                  )
                : clearTimeout(this._strungDomOverlayRotateReq),
              (this._strungDomOverlayRotateReq = null)),
            this.blindBoxTimer &&
              ("function" == typeof this.clearManagedInterval
                ? this.clearManagedInterval(this.blindBoxTimer)
                : clearInterval(this.blindBoxTimer),
              (this.blindBoxTimer = null)),
            "function" == typeof this.clearAllManagedIntervals &&
              this.clearAllManagedIntervals(),
            (this.bgCanvas = null),
            (this.bgCtx = null),
            (this.beadCanvas = null),
            (this.beadCtx = null),
            (this.strungDomShadowCanvas = null),
            (this.strungDomShadowCtx = null),
            (this.photoSnapshotCanvas = null),
            (this.photoSnapshotCtx = null),
            (this.shareCanvas = null),
            (this.shareCtx = null),
            (this.beadsRef = []),
            (this.imageCache = {}),
            (this.imageMeta = {}),
            (this.accessoryShadowCache = {}),
            (this.accessoryShadowCacheKeys = []),
            (this.accessoryContactShadowCache = {}),
            (this.accessoryContactShadowCacheKeys = []),
            (this.beadShadowTemplateCache = {}),
            (this.beadShadowTemplateCacheKeys = []),
            (this.beadRenderTemplateCache = {}),
            (this.beadRenderTemplateCacheKeys = []),
            (this._beadRenderPrewarmTokens = {}),
            (this._renderAssetWarmupPauseReasons = Object.create(null)),
            (this._renderAssetWarmupPaused = !1),
            (this._renderAssetWarmupToken =
              (Number(this._renderAssetWarmupToken) || 0) + 1),
            (this._drawNodes = []),
            (this._diyPerfStats = null),
            (this._trayToneOverlay = null),
            (this._trayToneOverlayKey = ""),
            (this._settledFinalRenderRequested = !1),
            (this._strungDomOverlayKey = ""),
            (this._strungDomOverlayPreparing = !1),
            (this._strungDomOverlayPreparedForFinal = !1),
            (this._strungDomCanvasFadeTimer = null),
            (this._strungDomFlyInTimer = null),
            (this._strungDomFlyInUid = ""),
            (this._strungDomLayoutUnfreezeTimer = null),
            (this._strungDomOverlayRotateReq = null),
            (this._strungDomOverlayRotatePendingStyle = ""),
            (this._photoSnapshotToken = 0),
            (this._photoSnapshotSpinRotation = 0),
            (this._photoSnapshotLastFrameAt = 0),
            (this._photoSnapshotBeads = null),
            (this._strungDomDragUid = ""),
            (this._strungDomDragSourceIndex = -1),
            (this._strungDomDragTargetIndex = -1),
            (this._strungDomDragLastTargetAt = 0),
            (this._strungDomDragProxyPatchAt = 0),
            (this.canvasRect = null),
            (this.dragState = this.createDragState());
        },
      },
      methods: Object.assign({}, e, s, a, i, r),
    });
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "components/bracelet-tray/index.js",
  }
);
require("components/bracelet-tray/index.js");
__wxRoute = "components/mini-bracelet/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/mini-bracelet/index.js";
define(
  "components/mini-bracelet/index.js",
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
      t = require("../../@babel/runtime/helpers/asyncToGenerator"),
      r = require("../../utils/catalog").getBeadType,
      a = require("../../utils/assetCache").cacheAssetPath;
    function n(e) {
      return e && e.isSpacer ? 25 : e && e.isPendant ? 15 : 20;
    }
    Component({
      properties: {
        pattern: { type: Array, value: [] },
        beadSize: { type: Number, value: 11 },
        containerSize: { type: Number, value: 110 },
        animate: { type: Boolean, value: !1 },
      },
      data: { beads: [], physicalSize: 0, scale: 1, renderReady: !1 },
      observers: {
        "pattern, beadSize, containerSize": function () {
          this.rebuild();
        },
      },
      lifetimes: {
        attached: function () {
          (this.rebuildToken = 0), this.rebuild();
        },
      },
      methods: {
        rebuild: function () {
          var i = this;
          return t(
            e().mark(function c() {
              var s, u, o, l, p, d, h, f, m, b, g, y, v, x, S, k, z, P, R, T;
              return e().wrap(
                function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        if (
                          ((s = i.properties.pattern || []),
                          (u = i.properties.beadSize || 11),
                          (o = i.properties.containerSize || 110),
                          (l = (i.rebuildToken || 0) + 1),
                          (i.rebuildToken = l),
                          s.length)
                        ) {
                          c.next = 8;
                          break;
                        }
                        return (
                          i.setData({
                            beads: [],
                            physicalSize: o,
                            scale: 1,
                            renderReady: !0,
                          }),
                          c.abrupt("return")
                        );
                      case 8:
                        if (
                          ((p = s.map(function (e) {
                            return r(e);
                          })),
                          (d = u / 11),
                          (h = p.filter(function (e) {
                            return !e.isPendant;
                          })),
                          (f = p.reduce(function (e, t) {
                            return (
                              e +
                              (t.isPendant ? 0 : t.mm * (t.gapRatio || 0.97))
                            );
                          }, 0)),
                          (m = h[0]),
                          (b =
                            h.length >= 3
                              ? (f /
                                  (2 *
                                    h.length *
                                    Math.sin(Math.PI / h.length))) *
                                d
                              : (m ? m.mm : 11) * d),
                          (g = p.reduce(function (e, t) {
                            return Math.max(e, t.mm);
                          }, 11)),
                          (v = 1.05 * (y = 2 * b + g * d)),
                          (x = o ? o / v : 1),
                          (S = 0),
                          (k = p.map(function (e, t) {
                            var r = e.isPendant
                                ? 0
                                : e.mm * (e.gapRatio || 0.97),
                              a = 0 === f ? 0 : (r / f) * Math.PI * 2,
                              c = S + a / 2;
                            S += a;
                            var s,
                              u = e.mm * d,
                              o = y / 2 + Math.cos(c) * b - u / 2,
                              l = y / 2 + Math.sin(c) * b - u / 2,
                              p =
                                c +
                                Math.PI / 2 +
                                ((s = e) && (s.isPendant || s.hangsOutward)
                                  ? -Math.PI
                                  : 0),
                              h =
                                e.variants && e.variants.length
                                  ? e.variants[t % e.variants.length]
                                  : "",
                              m = i.buildImageTransform(e);
                            return {
                              key: "".concat(e.id, "_").concat(t),
                              imgUrl: h,
                              wrapperStyle: [
                                "width:".concat(u, "px"),
                                "height:".concat(u, "px"),
                                "left:".concat(o, "px"),
                                "top:".concat(l, "px"),
                                "z-index:".concat(n(e)),
                              ].join(";"),
                              rotatorStyle: "transform:rotate(".concat(
                                p,
                                "rad);"
                              ),
                              shadowStyle: [
                                "width:".concat(u, "px"),
                                "height:".concat(u, "px"),
                                "left:".concat(o + 1.5 * d, "px"),
                                "top:".concat(l + 3 * d, "px"),
                                "opacity:".concat(
                                  e.category &&
                                    0 === e.category.indexOf("crystal")
                                    ? 0.5
                                    : 0.15
                                ),
                              ].join(";"),
                              imageStyle: m,
                            };
                          })),
                          (z = k
                            .map(function (e) {
                              return e.imgUrl;
                            })
                            .filter(function (e, t, r) {
                              return !!e && r.indexOf(e) === t;
                            })).length)
                        ) {
                          c.next = 26;
                          break;
                        }
                        if (i.rebuildToken === l) {
                          c.next = 24;
                          break;
                        }
                        return c.abrupt("return");
                      case 24:
                        return (
                          i.setData({
                            beads: k,
                            physicalSize: y,
                            scale: x,
                            renderReady: !0,
                          }),
                          c.abrupt("return")
                        );
                      case 26:
                        return (
                          i.data.renderReady || i.setData({ renderReady: !1 }),
                          (c.prev = 27),
                          (c.next = 30),
                          Promise.all(
                            z.map(
                              (function () {
                                var r = t(
                                  e().mark(function t(r) {
                                    var n;
                                    return e().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (e.next = 2), a(r);
                                          case 2:
                                            return (
                                              (n = e.sent),
                                              e.abrupt("return", [r, n])
                                            );
                                          case 4:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, t);
                                  })
                                );
                                return function (e) {
                                  return r.apply(this, arguments);
                                };
                              })()
                            )
                          )
                        );
                      case 30:
                        if (((P = c.sent), i.rebuildToken === l)) {
                          c.next = 33;
                          break;
                        }
                        return c.abrupt("return");
                      case 33:
                        (R = Object.create(null)),
                          P.forEach(function (e) {
                            R[e[0]] = e[1];
                          }),
                          (T = k.map(function (e) {
                            return Object.assign({}, e, {
                              imgUrl: R[e.imgUrl] || e.imgUrl,
                            });
                          })),
                          i.setData({
                            beads: T,
                            physicalSize: y,
                            scale: x,
                            renderReady: !0,
                          }),
                          (c.next = 44);
                        break;
                      case 39:
                        if (
                          ((c.prev = 39),
                          (c.t0 = c.catch(27)),
                          i.rebuildToken === l)
                        ) {
                          c.next = 43;
                          break;
                        }
                        return c.abrupt("return");
                      case 43:
                        i.setData({
                          beads: k,
                          physicalSize: y,
                          scale: x,
                          renderReady: !0,
                        });
                      case 44:
                      case "end":
                        return c.stop();
                    }
                },
                c,
                null,
                [[27, 39]]
              );
            })
          )();
        },
        buildImageTransform: function (e) {
          var t = [];
          return (
            e.imgScale && t.push("scale(".concat(e.imgScale, ")")),
            e.visualOffsetX &&
              t.push("translateX(".concat(e.visualOffsetX, ")")),
            e.visualOffsetY &&
              t.push("translateY(".concat(e.visualOffsetY, ")")),
            t.length ? "transform:".concat(t.join(" "), ";") : ""
          );
        },
      },
    });
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "components/mini-bracelet/index.js",
  }
);
require("components/mini-bracelet/index.js");
