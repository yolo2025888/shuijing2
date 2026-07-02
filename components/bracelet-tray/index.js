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
              this.setRenderQualityMode && this.setRenderQualityMode("photo"),
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
