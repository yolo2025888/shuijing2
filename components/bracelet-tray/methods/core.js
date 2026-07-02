var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  i = require("../../../@babel/runtime/helpers/typeof"),
  a = require("../constants").getTrayPhysics;
function s(e) {
  var t = Number(e && e.trayRadius);
  return !Number.isFinite(t) || t <= 0 ? 0 : 2 * t;
}
function n(e) {
  var t = String(e || "");
  return (
    "add-bead-sync" === t ||
    0 === t.indexOf("strung-") ||
    0 === t.indexOf("current-strung-") ||
    0 === t.indexOf("bead-render-template-prewarm") ||
    0 === t.indexOf("shape-shadow-prewarm")
  );
}
module.exports = {
  ensureTimerRegistry: function () {
    return (
      this._timerRegistry || (this._timerRegistry = { intervals: new Set() }),
      this._timerRegistry
    );
  },
  setManagedInterval: function (e, t) {
    var i = this.ensureTimerRegistry(),
      a = Math.max(1, Number(t) || 1),
      s = setInterval(function () {
        "function" == typeof e && e();
      }, a);
    return i.intervals.add(s), s;
  },
  clearManagedInterval: function (e) {
    if (null != e) {
      var t = this.ensureTimerRegistry();
      clearInterval(e), t.intervals.delete(e);
    }
  },
  clearAllManagedIntervals: function () {
    var e = this.ensureTimerRegistry();
    e.intervals.forEach(function (e) {
      return clearInterval(e);
    }),
      e.intervals.clear();
  },
  getPerfNow: function () {
    return "undefined" != typeof performance &&
      "function" == typeof performance.now
      ? performance.now()
      : Date.now();
  },
  isDiyPerfDebugEnabled: function () {
    if (this._diyPerfDebugChecked) return !!this._diyPerfDebugEnabled;
    (this._diyPerfDebugChecked = !0), (this._diyPerfDebugEnabled = !1);
    try {
      if ("undefined" != typeof wx && "function" == typeof wx.getStorageSync) {
        var e = wx.getStorageSync("SL_DIY_PERF_DEBUG");
        this._diyPerfDebugEnabled = !0 === e || "1" === e || "true" === e;
      }
    } catch (e) {
      this._diyPerfDebugEnabled = !1;
    }
    return !!this._diyPerfDebugEnabled;
  },
  recordDiyPerf: function (e, t) {
    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (this.isDiyPerfDebugEnabled()) {
      var s = this.getPerfNow();
      this._diyPerfStats ||
        (this._diyPerfStats = { renderCount: 0, lastReportAt: s, events: {} }),
        "render" === e && (this._diyPerfStats.renderCount += 1);
      var r = String(e || "unknown"),
        o = Number(t) || 0,
        h = this._diyPerfStats.events || {},
        u = h[r] || {
          count: 0,
          totalMs: 0,
          maxMs: 0,
          lastMs: 0,
          lastExtra: null,
        };
      if (
        ((u.count += 1),
        (u.totalMs += o),
        (u.maxMs = Math.max(u.maxMs, o)),
        (u.lastMs = o),
        (u.lastExtra = a || null),
        (h[r] = u),
        (this._diyPerfStats.events = h),
        n(r) &&
          "undefined" != typeof console &&
          "function" == typeof console.info &&
          console.info(
            "[DIY_PERF_EVENT]",
            r,
            "".concat(Number(o).toFixed(2), "ms"),
            Object.assign(
              {
                quality: this.renderQualityMode || "interactive",
                beads: this.beadsRef ? this.beadsRef.length : 0,
                isStrung: !!this.isStrung,
                deviceQualityTier: this.deviceQualityTier || "unknown",
              },
              a && "object" === i(a) ? a : {}
            )
          ),
        !(s - this._diyPerfStats.lastReportAt < 1500))
      ) {
        this._diyPerfStats.lastReportAt = s;
        var d = {};
        Object.keys(h).forEach(function (e) {
          var t = h[e];
          t &&
            t.count &&
            (d[e] = {
              count: t.count,
              avgMs: Number(t.totalMs / t.count).toFixed(2),
              maxMs: Number(t.maxMs).toFixed(2),
              lastMs: Number(t.lastMs).toFixed(2),
              lastExtra: t.lastExtra || void 0,
            });
        }),
          (this._diyPerfStats.events = {}),
          console.info("[DIY_PERF_SUMMARY]", {
            quality: this.renderQualityMode || "interactive",
            beads: this.beadsRef ? this.beadsRef.length : 0,
            renders: this._diyPerfStats.renderCount,
            isStrung: !!this.isStrung,
            active: !(!this.properties || !this.properties.active),
            photoMode: !(!this.properties || !this.properties.photoMode),
            deviceQualityTier: this.deviceQualityTier || "unknown",
            renderBaseline:
              "function" == typeof this.getDiyRenderBaseline
                ? this.getDiyRenderBaseline()
                : void 0,
            dpr: this.dpr || 1,
            logicalSize: this.logicalSize,
            displaySize: this.displaySize,
            canvasPixels: ""
              .concat(this.canvasPixelWidth || 0, "x")
              .concat(this.canvasPixelHeight || 0),
            events: d,
          });
      }
    }
  },
  logDiySamplingProbe: function (e) {
    this.isDiyPerfDebugEnabled() && console.info("[DIY_SAMPLING]", e);
  },
  setRenderQualityMode: function (e) {
    var t = "photo" === e || "settled" === e ? e : "interactive";
    this.renderQualityMode !== t && (this.renderQualityMode = t);
  },
  getRenderQualityMode: function () {
    return this.properties && this.properties.photoMode
      ? "photo"
      : this.renderQualityMode || "interactive";
  },
  ensurePhysicsGeometry: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = a(),
      i = s(t);
    if (!(i > 0)) return !1;
    var n = Number(this.logicalSize) || 0;
    return (
      !(Math.abs(n - i) <= 0.5) &&
      ((this.logicalSize = i),
      (this._bgLayerDirty = !0),
      (this._trayToneOverlay = null),
      (this._trayToneOverlayKey = ""),
      (this.canvasRect = null),
      (this._lastRectQueryAt = 0),
      this.isStrung && "function" == typeof this.layoutStrungBeadsImmediately
        ? this.layoutStrungBeadsImmediately(this.beadsRef, t)
        : this.isStrung ||
          "function" != typeof this.clampLooseBeadsToTrayBounds ||
          this.clampLooseBeadsToTrayBounds(t),
      "function" == typeof this.recordDiyPerf &&
        this.recordDiyPerf("physics-geometry-sync", 0, {
          reason: e && e.reason,
          from: n,
          to: i,
          trayRadius: t.trayRadius,
        }),
      !0)
    );
  },
  scheduleRender: function () {
    var e = this;
    if (this.ready && !this._renderScheduled) {
      this._renderScheduled = !0;
      var t = function () {
        (e._renderScheduled = !1),
          (e._renderReqRef = null),
          e.ready && "function" == typeof e.render && e.render();
      };
      this.beadCanvas &&
      "function" == typeof this.beadCanvas.requestAnimationFrame
        ? (this._renderReqRef = this.beadCanvas.requestAnimationFrame(t))
        : (this._renderReqRef = setTimeout(t, 16));
    }
  },
  createDragState: function () {
    return {
      active: !1,
      uid: null,
      touchMode: null,
      x: 0,
      y: 0,
      lastX: 0,
      lastY: 0,
      lastAngle: 0,
      closestIdx: -1,
    };
  },
  refreshCanvasRect: function () {
    var e = this;
    if (
      "undefined" != typeof wx &&
      "function" == typeof wx.createSelectorQuery &&
      !this._rectQueryPending
    ) {
      var t = Date.now();
      if (!(this._lastRectQueryAt && t - this._lastRectQueryAt < 260)) {
        (this._lastRectQueryAt = t), (this._rectQueryPending = !0);
        var i = wx.createSelectorQuery().in(this);
        i.select("#beadCanvas").boundingClientRect(),
          i.exec(function (t) {
            e._rectQueryPending = !1;
            var i = t && t[0];
            if (i) {
              var a = Number(i.left),
                s = Number(i.top),
                n = Number(i.width),
                r = Number(i.height);
              if (
                Number.isFinite(a) &&
                Number.isFinite(s) &&
                Number.isFinite(n) &&
                Number.isFinite(r) &&
                n > 0 &&
                r > 0
              ) {
                var o = Math.max(0, Number(e.beadLayerOverscanPx) || 0),
                  h = Math.max(1, n - 2 * o),
                  u = Math.max(1, r - 2 * o);
                e.canvasRect = { left: a + o, top: s + o, width: h, height: u };
              }
            }
          });
      }
    }
  },
  getSystemMetrics: function () {
    var e = this.properties.traySize || this.logicalSize,
      t = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = Number(e.benchmarkLevel),
          i = String(e.platform || "").toLowerCase();
        return i.indexOf("android") >= 0 && Number.isFinite(t) && t > 0
          ? t < 25
            ? { tier: "low", maxDpr: 2.5 }
            : t < 45
            ? { tier: "mid", maxDpr: 3 }
            : { tier: "high", maxDpr: 3.5 }
          : { tier: "high", maxDpr: 3 };
      },
      i = function (e, t) {
        var i = Number(e);
        if (!Number.isFinite(i) || i <= 0) return 1;
        var a = Number(t && t.maxDpr) || 3;
        return Math.min(a, Math.max(1, i));
      },
      a = function (t) {
        var i = Number(t);
        return Number.isFinite(i) && i > 0 ? i : e;
      };
    try {
      var s = wx.getWindowInfo ? wx.getWindowInfo() : null,
        n = wx.getDeviceInfo ? wx.getDeviceInfo() : null;
      if (s || n) {
        var r = Number(s && s.pixelRatio),
          o = Number(n && n.pixelRatio),
          h =
            Number.isFinite(r) && r > 0
              ? r
              : Number.isFinite(o) && o > 0
              ? o
              : 1,
          u = Number(s && s.windowWidth),
          d = t(n || {});
        return (
          (this.deviceQualityTier = d.tier),
          { pixelRatio: i(h, d), windowWidth: a(u) }
        );
      }
    } catch (e) {}
    try {
      if (
        "undefined" != typeof wx &&
        "function" == typeof wx.getSystemInfoSync
      ) {
        var l = wx.getSystemInfoSync() || {},
          c = t(l);
        return (
          (this.deviceQualityTier = c.tier),
          { pixelRatio: i(l.pixelRatio, c), windowWidth: a(l.windowWidth) }
        );
      }
    } catch (e) {}
    return { pixelRatio: 1, windowWidth: e };
  },
  initCanvas: function () {
    var e = this,
      t = this.getSystemMetrics();
    (this.dpr = t.pixelRatio || 1),
      (this.windowWidth =
        t.windowWidth || this.properties.traySize || this.logicalSize);
    var i = wx.createSelectorQuery().in(this);
    i.select("#trayBgCanvas").fields({ node: !0, size: !0 }),
      i.select("#beadCanvas").fields({ node: !0, size: !0 }),
      i.select("#photoTrayShadowCanvas").fields({ node: !0, size: !0 }),
      i.select("#strungDomShadowCanvas").fields({ node: !0, size: !0 }),
      i.select("#shareComposeCanvas").fields({ node: !0, size: !0 }),
      i.select("#photoSnapshotCanvas").fields({ node: !0, size: !0 }),
      i.exec(function (t) {
        if (t && t[0] && t[1]) {
          var i = t[0].node,
            a = t[1].node;
          if (i && a) {
            var s = t[2] && t[2].node ? t[2].node : null,
              n = t[3] && t[3].node ? t[3].node : null,
              r = t[4] && t[4].node ? t[4].node : null,
              o = t[5] && t[5].node ? t[5].node : null,
              h = t[0].width || e.properties.traySize || e.logicalSize,
              u = t[0].height || e.properties.traySize || e.logicalSize,
              d = t[1].width || h,
              l = t[1].height || u;
            (e.bgCanvas = i),
              (e.bgCtx = i.getContext("2d")),
              (e.beadCanvas = a),
              (e.beadCtx = a.getContext("2d")),
              (e.photoTrayShadowCanvas = s),
              (e.photoTrayShadowCtx = s ? s.getContext("2d") : null),
              (e.strungDomShadowCanvas = n),
              (e.strungDomShadowCtx = n ? n.getContext("2d") : null),
              (e.shareCanvas = r),
              (e.shareCtx = r ? r.getContext("2d") : null),
              (e.photoSnapshotCanvas = o),
              (e.photoSnapshotCtx = o ? o.getContext("2d") : null),
              (e.displaySize = h),
              e.setupCanvas(i, e.bgCtx, h, u),
              e.setupCanvas(a, e.beadCtx, d, l, {
                visibleWidth: h,
                visibleHeight: u,
                offsetX: Math.max(0, (d - h) / 2),
                offsetY: Math.max(0, (l - u) / 2),
              }),
              e.photoTrayShadowCanvas &&
                e.photoTrayShadowCtx &&
                e.setupCanvas(
                  e.photoTrayShadowCanvas,
                  e.photoTrayShadowCtx,
                  d,
                  l,
                  {
                    visibleWidth: h,
                    visibleHeight: u,
                    offsetX: Math.max(0, (d - h) / 2),
                    offsetY: Math.max(0, (l - u) / 2),
                  }
                ),
              e.strungDomShadowCanvas &&
                e.strungDomShadowCtx &&
                e.setupCanvas(
                  e.strungDomShadowCanvas,
                  e.strungDomShadowCtx,
                  d,
                  l,
                  {
                    visibleWidth: h,
                    visibleHeight: u,
                    offsetX: Math.max(0, (d - h) / 2),
                    offsetY: Math.max(0, (l - u) / 2),
                  }
                ),
              e.shareCanvas &&
                e.shareCtx &&
                e.setupCanvas(e.shareCanvas, e.shareCtx, h, u),
              e.photoSnapshotCanvas &&
                e.photoSnapshotCtx &&
                e.setupCanvas(e.photoSnapshotCanvas, e.photoSnapshotCtx, d, l, {
                  visibleWidth: h,
                  visibleHeight: u,
                  offsetX: Math.max(0, (d - h) / 2),
                  offsetY: Math.max(0, (l - u) / 2),
                }),
              e.refreshCanvasRect(),
              (e.ready = !0),
              (e._canvasInitRetryCount = 0),
              e._canvasInitRetryTimer &&
                (clearTimeout(e._canvasInitRetryTimer),
                (e._canvasInitRetryTimer = null)),
              e.syncLayerStyles(),
              e.properties.active
                ? e.render()
                : "function" == typeof e.clearVisibleCanvasLayers &&
                  e.clearVisibleCanvasLayers(),
              e.scheduleInitialCanvasStabilization(),
              e
                .applyPattern(e.properties.initPattern || [], {
                  renderPlan: e.properties.initRenderPlan || [],
                })
                .finally(function () {
                  e.ready && e.properties.active && e.startLoop();
                });
          } else e.scheduleCanvasInitRetry("missing_canvas_node");
        } else e.scheduleCanvasInitRetry("missing_canvas_nodes");
      });
  },
  scheduleInitialCanvasStabilization: function () {
    var e = this;
    this._initialCanvasStabilizeTimer &&
      clearTimeout(this._initialCanvasStabilizeTimer),
      (this._initialCanvasStabilizeTimer = setTimeout(function () {
        (e._initialCanvasStabilizeTimer = null),
          e.ready &&
            ((e._lastRectQueryAt = 0),
            e.syncCanvasResolution(
              e.properties.traySize || e.displaySize || e.logicalSize
            ));
      }, 80));
  },
  setupCanvas: function (e, t, i, a) {
    var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
      n = Math.max(1, Number(i) || this.logicalSize),
      r = Math.max(1, Number(a) || this.logicalSize),
      o = Math.max(1, Number(s.visibleWidth) || n),
      h = Math.max(1, Number(s.visibleHeight) || r),
      u = Number.isFinite(Number(s.offsetX)) ? Number(s.offsetX) : 0,
      d = Number.isFinite(Number(s.offsetY)) ? Number(s.offsetY) : 0,
      l = Math.max(1, Math.round(n * this.dpr)),
      c = Math.max(1, Math.round(r * this.dpr));
    (e.width = l), (e.height = c), this.configureCanvasContext(t);
    var f = (o * this.dpr) / this.logicalSize,
      y = (h * this.dpr) / this.logicalSize,
      v = u * this.dpr,
      p = d * this.dpr;
    if (
      ((this.canvasScaleX = f),
      (this.canvasScaleY = y),
      (this.canvasPixelWidth = l),
      (this.canvasPixelHeight = c),
      "function" == typeof t.setTransform)
    )
      return (
        t.setTransform(f, 0, 0, y, v, p),
        this.configureCanvasContext(t),
        (this._bgLayerDirty = !0),
        (this._trayToneOverlay = null),
        void (this._trayToneOverlayKey = "")
      );
    "function" == typeof t.resetTransform && t.resetTransform(),
      t.scale(f, y),
      (v || p) && t.translate(v / f, p / y),
      this.configureCanvasContext(t),
      (this._bgLayerDirty = !0),
      (this._trayToneOverlay = null),
      (this._trayToneOverlayKey = "");
  },
  configureCanvasContext: function (e) {
    if (
      e &&
      ("imageSmoothingEnabled" in e && (e.imageSmoothingEnabled = !0),
      "imageSmoothingQuality" in e)
    )
      try {
        e.imageSmoothingQuality = "high";
      } catch (e) {}
  },
  syncCanvasResolutionFromSize: function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (this.bgCanvas && this.beadCanvas && this.bgCtx && this.beadCtx) {
      "function" == typeof this.ensurePhysicsGeometry &&
        this.ensurePhysicsGeometry({ reason: "sync_canvas_from_size" });
      var i = Math.max(
          1,
          Number(e) ||
            Number(this.properties.traySize) ||
            Number(this.displaySize) ||
            this.logicalSize
        ),
        a = Number(this.beadLayerOverscanPx) || 0,
        s = i + 2 * a;
      (this.displaySize = i),
        this.setupCanvas(this.bgCanvas, this.bgCtx, i, i),
        this.setupCanvas(this.beadCanvas, this.beadCtx, s, s, {
          visibleWidth: i,
          visibleHeight: i,
          offsetX: a,
          offsetY: a,
        }),
        this.photoTrayShadowCanvas &&
          this.photoTrayShadowCtx &&
          this.setupCanvas(
            this.photoTrayShadowCanvas,
            this.photoTrayShadowCtx,
            s,
            s,
            { visibleWidth: i, visibleHeight: i, offsetX: a, offsetY: a }
          ),
        this.strungDomShadowCanvas &&
          this.strungDomShadowCtx &&
          this.setupCanvas(
            this.strungDomShadowCanvas,
            this.strungDomShadowCtx,
            s,
            s,
            { visibleWidth: i, visibleHeight: i, offsetX: a, offsetY: a }
          ),
        this.shareCanvas &&
          this.shareCtx &&
          this.setupCanvas(this.shareCanvas, this.shareCtx, i, i),
        this.photoSnapshotCanvas &&
          this.photoSnapshotCtx &&
          this.setupCanvas(
            this.photoSnapshotCanvas,
            this.photoSnapshotCtx,
            s,
            s,
            { visibleWidth: i, visibleHeight: i, offsetX: a, offsetY: a }
          ),
        this.refreshCanvasRect(),
        !this.ready || (t && !1 === t.render) || this.render();
    }
  },
  armPhotoTransitionFreeze: function () {
    var e = this,
      t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 620;
    this._photoTransitionTimer &&
      (clearTimeout(this._photoTransitionTimer),
      (this._photoTransitionTimer = null)),
      (this._photoTransitionActive = !0),
      this.properties.photoMode || this.stopLoop(),
      (this._photoTransitionTimer = setTimeout(function () {
        (e._photoTransitionTimer = null),
          (e._photoTransitionActive = !1),
          e.ready &&
            !e.properties.photoMode &&
            (e.syncLayerStyles(),
            "function" == typeof e.syncCanvasResolutionFromSize &&
              e.syncCanvasResolutionFromSize(
                e.properties.traySize || e.displaySize || e.logicalSize
              ),
            e.isStrung && "function" == typeof e.layoutStrungBeadsImmediately
              ? e.layoutStrungBeadsImmediately(e.beadsRef)
              : "function" == typeof e.clampLooseBeadsToTrayBounds &&
                e.clampLooseBeadsToTrayBounds(),
            e.render());
      }, Math.max(0, Number(t) || 620)));
  },
  syncCanvasResolution: function (e) {
    var t = this;
    if (this.bgCanvas && this.beadCanvas && this.bgCtx && this.beadCtx) {
      "function" == typeof this.ensurePhysicsGeometry &&
        this.ensurePhysicsGeometry({ reason: "sync_canvas" });
      var i = Math.max(
          1,
          Number(e) ||
            Number(this.properties.traySize) ||
            Number(this.displaySize) ||
            this.logicalSize
        ),
        a = this.getSystemMetrics();
      (this.dpr = a.pixelRatio || this.dpr || 1),
        this.properties.photoMode ||
        this._photoTransitionActive ||
        "undefined" == typeof wx ||
        "function" != typeof wx.createSelectorQuery
          ? this.syncCanvasResolutionFromSize(i)
          : wx.nextTick(function () {
              var e = wx.createSelectorQuery().in(t);
              e.select("#trayBgCanvas").boundingClientRect(),
                e.select("#beadCanvas").boundingClientRect(),
                e.exec(function (e) {
                  "function" == typeof t.ensurePhysicsGeometry &&
                    t.ensurePhysicsGeometry({ reason: "sync_canvas_measured" });
                  var a = e && e[0],
                    s = e && e[1],
                    n = Number(a && a.width),
                    r = Number.isFinite(n) && n > 0 ? n : i,
                    o =
                      Number.isFinite(Number(s && s.width)) &&
                      Number(s.width) > 0
                        ? Number(s.width)
                        : r,
                    h =
                      Number.isFinite(Number(s && s.height)) &&
                      Number(s.height) > 0
                        ? Number(s.height)
                        : o,
                    u = Math.max(0, (o - r) / 2),
                    d = Math.max(0, (h - r) / 2);
                  (t.displaySize = r),
                    t.setupCanvas(t.bgCanvas, t.bgCtx, r, r),
                    t.setupCanvas(t.beadCanvas, t.beadCtx, o, h, {
                      visibleWidth: r,
                      visibleHeight: r,
                      offsetX: u,
                      offsetY: d,
                    }),
                    t.photoTrayShadowCanvas &&
                      t.photoTrayShadowCtx &&
                      t.setupCanvas(
                        t.photoTrayShadowCanvas,
                        t.photoTrayShadowCtx,
                        o,
                        h,
                        {
                          visibleWidth: r,
                          visibleHeight: r,
                          offsetX: u,
                          offsetY: d,
                        }
                      ),
                    t.strungDomShadowCanvas &&
                      t.strungDomShadowCtx &&
                      t.setupCanvas(
                        t.strungDomShadowCanvas,
                        t.strungDomShadowCtx,
                        o,
                        h,
                        {
                          visibleWidth: r,
                          visibleHeight: r,
                          offsetX: u,
                          offsetY: d,
                        }
                      ),
                    t.shareCanvas &&
                      t.shareCtx &&
                      t.setupCanvas(t.shareCanvas, t.shareCtx, r, r),
                    t.photoSnapshotCanvas &&
                      t.photoSnapshotCtx &&
                      t.setupCanvas(
                        t.photoSnapshotCanvas,
                        t.photoSnapshotCtx,
                        o,
                        h,
                        {
                          visibleWidth: r,
                          visibleHeight: r,
                          offsetX: u,
                          offsetY: d,
                        }
                      ),
                    t.refreshCanvasRect(),
                    t.ready && t.render();
                });
            });
    }
  },
  handleTraySizeChange: function (e) {
    var t = Number(e);
    !Number.isFinite(t) ||
      t <= 0 ||
      (this.syncLayerStyles(), this.syncCanvasResolution(t));
  },
  scheduleCanvasInitRetry: function () {
    var e = this,
      t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    if (this.ready || this._canvasInitRetryTimer) return !1;
    var i = Number(this._canvasInitRetryCount) || 0;
    return i >= 48
      ? ("function" == typeof this.recordDiyPerf &&
          this.recordDiyPerf("canvas-init-retry-exhausted", 0, {
            reason: String(t || "").trim() || "unknown",
            retryCount: i,
          }),
        !1)
      : ((this._canvasInitRetryCount = i + 1),
        (this._canvasInitRetryTimer = setTimeout(function () {
          (e._canvasInitRetryTimer = null), e.ready || e.initCanvas();
        }, 80)),
        !0);
  },
  startLoop: function () {
    this.stopLoop(),
      this.beadCanvas &&
        (this.reqRef = this.beadCanvas.requestAnimationFrame(
          this.updatePhysics.bind(this)
        ));
  },
  stopLoop: function () {
    this.reqRef &&
      this.beadCanvas &&
      (this.beadCanvas.cancelAnimationFrame(this.reqRef), (this.reqRef = null));
  },
  clearVisibleCanvasLayers: function () {
    var e = Math.max(
        1,
        Number(this.logicalSize || 0),
        Number(this.displaySize || 0),
        Number((this.properties && this.properties.traySize) || 0)
      ),
      t = function (t) {
        if (t && "function" == typeof t.clearRect)
          try {
            t.clearRect(-e, -e, 3 * e, 3 * e);
          } catch (e) {}
      };
    t(this.bgCtx),
      t(this.beadCtx),
      t(this.strungDomShadowCtx),
      t(this.photoSnapshotCtx),
      t(this.photoTrayShadowCtx),
      (this._bgLayerDirty = !0),
      this.data &&
        (this.data.showStrungDomOverlay ||
          this.data.strungDomDragProxyVisible ||
          this.data.strungDomFlyInVisible ||
          this.data.photoSnapshotVisible) &&
        this.setData({
          showStrungDomOverlay: !1,
          strungDomOverlayVisible: !1,
          strungDomCanvasHidden: !1,
          showStrungDomShadowLayer: !1,
          strungDomDragProxyVisible: !1,
          strungDomFlyInVisible: !1,
          photoSnapshotVisible: !1,
        });
  },
  cancelScheduledRender: function () {
    this._renderReqRef
      ? (this.beadCanvas &&
        "function" == typeof this.beadCanvas.cancelAnimationFrame
          ? this.beadCanvas.cancelAnimationFrame(this._renderReqRef)
          : clearTimeout(this._renderReqRef),
        (this._renderReqRef = null),
        (this._renderScheduled = !1))
      : (this._renderScheduled = !1);
  },
  waitNextFrame: function () {
    return new Promise(function (e) {
      "undefined" == typeof wx || "function" != typeof wx.nextTick
        ? setTimeout(e, 16)
        : wx.nextTick(function () {
            setTimeout(e, 16);
          });
    });
  },
  canvasNodeToTempFilePath: function (e, t) {
    var a = this;
    return new Promise(function (s, n) {
      if (e) {
        var r = t && "object" === i(t) ? t : {},
          o = "jpg" === r.fileType ? "jpg" : "png",
          h = Number.isFinite(Number(r.quality)) ? Number(r.quality) : 1,
          u = Math.max(1, Math.round(Number(e.width || r.width || 0))),
          d = Math.max(1, Math.round(Number(e.height || r.height || 0))),
          l = Number.isFinite(Number(r.maxPixelSize))
            ? Math.max(1, Math.round(Number(r.maxPixelSize)))
            : 0,
          c = l > 0 ? Math.min(1, l / Math.max(u, d)) : 1,
          f = { fileType: o, quality: h };
        c < 1 &&
          ((f.width = u),
          (f.height = d),
          (f.destWidth = Math.max(1, Math.round(u * c))),
          (f.destHeight = Math.max(1, Math.round(d * c))));
        var y = function (e) {
            return s(e && e.tempFilePath ? e.tempFilePath : "");
          },
          v = function (e) {
            return n(e || new Error("CANVAS_TO_TEMP_FILE_FAILED"));
          };
        "function" != typeof e.toTempFilePath
          ? "undefined" == typeof wx ||
            "function" != typeof wx.canvasToTempFilePath
            ? n(new Error("CANVAS_EXPORT_NOT_SUPPORTED"))
            : wx.canvasToTempFilePath(
                Object.assign({ canvas: e, success: y, fail: v }, f),
                a
              )
          : e.toTempFilePath(Object.assign({}, f, { success: y, fail: v }));
      } else n(new Error("CANVAS_NODE_MISSING"));
    });
  },
  exportShareSnapshot: function (i) {
    var a = this;
    return t(
      e().mark(function t() {
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (a.ready) {
                  e.next = 2;
                  break;
                }
                throw new Error("TRAY_NOT_READY");
              case 2:
                if (a.shareCanvas && a.shareCtx) {
                  e.next = 4;
                  break;
                }
                throw new Error("SHARE_CANVAS_NOT_READY");
              case 4:
                if ("function" != typeof a.prepareShareSnapshotAssets) {
                  e.next = 7;
                  break;
                }
                return (e.next = 7), a.prepareShareSnapshotAssets();
              case 7:
                return (
                  "function" == typeof a.renderShareCanvas
                    ? a.renderShareCanvas()
                    : a.render(),
                  (e.next = 10),
                  a.waitNextFrame()
                );
              case 10:
                return e.abrupt(
                  "return",
                  a.canvasNodeToTempFilePath(a.shareCanvas, i)
                );
              case 11:
              case "end":
                return e.stop();
            }
        }, t);
      })
    )();
  },
};
