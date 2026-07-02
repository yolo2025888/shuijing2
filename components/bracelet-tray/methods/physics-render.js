var t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../../@babel/runtime/helpers/defineProperty"),
  r = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../@babel/runtime/helpers/Arrayincludes");
var i = require("../../../@babel/runtime/helpers/typeof"),
  o = require("../../../utils/catalog").getTrayBg,
  s = require("../../../utils/audioEngine").playSound,
  n = require("../../../utils/bracelet-config").applyBraceletContract,
  h = require("../constants").getTrayPhysics,
  d = require("./shadow-classifier"),
  l = d.includesAny,
  u = d.resolveBeadShadowKind,
  m = d.shouldUseShapeShadow;
function g(t) {
  return !(!t || (!t.isPendant && !t.hangsOutward));
}
function c(t) {
  var e = Number(t);
  return !Number.isFinite(e) || e <= 0 ? 0.97 : e;
}
function y(t, e) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
  if (null == t || "" === t) return 0;
  var r = parseFloat(t) / 100;
  return Number.isFinite(r) ? r * e * a : 0;
}
function f(t, e) {
  var a = Number(e) || 0;
  if (!(t && t.width > 0 && t.height > 0 && !(a <= 0)))
    return { baseW: a, baseH: a };
  var r = t.width / t.height;
  return r > 1 ? { baseW: a, baseH: a / r } : { baseW: a * r, baseH: a };
}
function v(t, e) {
  var a = Number(t),
    r = Number(e);
  return !Number.isFinite(a) || !Number.isFinite(r) || r <= 0
    ? t
    : Math.round(a * r) / r;
}
function p(t, e) {
  var a = Number(t),
    r = Number(e);
  return !Number.isFinite(a) || !Number.isFinite(r) || r <= 0 || a <= 0
    ? t
    : Math.max(1 / r, Math.round(a * r) / r);
}
function S(t) {
  var e = Number(t && t.displaySize) || Number(t && t.logicalSize) || 1,
    a = Number(t && t.logicalSize) || e,
    r = Math.max(0, Number(t && t.beadLayerOverscanPx) || 0),
    i = e > 0 ? e / a : 1,
    o = i > 0 ? r / i : 0;
  return Number.isFinite(o) && o > 0 ? o : 0;
}
function b(t, e, a) {
  if (e) {
    var r = Number(a) || Number(t && t.logicalSize) || 1,
      i = S(t);
    e.clearRect(-i, -i, r + 2 * i, r + 2 * i);
  }
}
function D(t) {
  return !(!t || (!t.isPendant && !t.hangsOutward));
}
function w(t) {
  var e = Number(t);
  return Number.isFinite(e) ? (e <= 0 ? 0 : e >= 1 ? 1 : e) : 0;
}
function x(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h(),
    a = Number(e && e.trayRadius) || 0,
    r = Math.max(1, a),
    i = Number(t && t.depthY);
  return Number.isFinite(i) ? w((i - a) / (1.15 * r) + 0.5) : 0.5;
}
function R(t, e) {
  return "photo" === e
    ? 1
    : t && t.isStrung
    ? (t.dragState || {}).active ||
      Number(t.animFrameRef) > 0 ||
      t.blindBoxTimer
      ? 0
      : w(((Number(t._stableFrameCount) || 0) - 8) / 8)
    : 0;
}
function P(t, e) {
  var a = (function (t) {
      var e = t && t.attrs && "object" === i(t.attrs) ? t.attrs : {},
        a = [
          t && t.mat,
          t && t.id,
          t && t.name,
          t && t.class,
          t && t.category,
          t && (t.imgUrl || t.img_url),
          e.color,
          e.tone,
          e.material,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
      return a
        ? l(a, [
            "gold",
            "yellow",
            "brass",
            "huang",
            "jin",
            "金",
            "黄",
            "銅",
            "铜",
          ])
          ? "warm-metal"
          : l(a, [
              "white",
              "clear",
              "transparent",
              "silver",
              "crystal",
              "bai",
              "yin",
              "白",
              "透明",
              "银",
              "銀",
              "水晶",
            ])
          ? "light-clear"
          : "neutral"
        : "neutral";
    })(t),
    r = {
      diffusionAlpha0: e ? 0.11 : 0.13,
      diffusionAlpha1: e ? 0.044 : 0.055,
      softAlpha: e ? 0.235 : 0.275,
      contactAlpha0: e ? 0.245 : 0.295,
      contactAlpha1: e ? 0.098 : 0.122,
      softOffsetX: 0.022,
      softOffsetY: 0.044,
      contactOffsetX: 0.04,
      contactOffsetY: 0.115,
      diffusionScale: e ? 0.4 : 0.38,
    };
  return "warm-metal" === a
    ? ((r.diffusionAlpha0 *= 0.72),
      (r.diffusionAlpha1 *= 0.7),
      (r.softAlpha *= 0.74),
      (r.contactAlpha0 *= 0.8),
      (r.contactAlpha1 *= 0.78),
      (r.diffusionScale *= 0.9),
      r)
    : ("light-clear" === a &&
        ((r.diffusionAlpha0 *= 1.2),
        (r.diffusionAlpha1 *= 1.18),
        (r.softAlpha *= 1.24),
        (r.contactAlpha0 *= 1.34),
        (r.contactAlpha1 *= 1.26),
        (r.softOffsetX = 0.028),
        (r.softOffsetY = 0.054),
        (r.contactOffsetX = 0.046),
        (r.contactOffsetY = 0.128),
        (r.diffusionScale *= 1.08)),
      r);
}
function M(t) {
  var e = Number(t && t.layer);
  return Number.isFinite(e)
    ? e
    : t && t.isSpacer
    ? 25
    : t && (t.isPendant || t.hangsOutward)
    ? 15
    : 20;
}
function C(t) {
  if (t && t.__braceletRenderReady) return t;
  var e = n(t && "object" === i(t) ? t : {});
  return Object.assign({}, e, {
    mm: Number(e.mm) || 0,
    gapRatio: c(e.gapRatio),
    imgScale:
      Number.isFinite(Number(e.imgScale)) && Number(e.imgScale) > 0
        ? Number(e.imgScale)
        : 1,
    visualOffsetX:
      void 0 === e.visualOffsetX || null === e.visualOffsetX
        ? ""
        : String(e.visualOffsetX),
    visualOffsetY:
      void 0 === e.visualOffsetY || null === e.visualOffsetY
        ? ""
        : String(e.visualOffsetY),
  });
}
function F(t, e, a, r, i) {
  return [
    "left:0",
    "top:0",
    "width:".concat(a.toFixed(2), "px"),
    "height:".concat(r.toFixed(2), "px"),
    "z-index:".concat(i),
    "transform:translate3d("
      .concat(t.toFixed(2), "px, ")
      .concat(e.toFixed(2), "px, 0) translate(-50%, -50%)"),
  ].join(";");
}
function _(t, e, a, r, i) {
  var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
  return [
    "left:0",
    "top:0",
    "width:".concat(a.toFixed(2), "px"),
    "height:".concat(r.toFixed(2), "px"),
    "z-index:".concat(i),
    "transform:translate3d("
      .concat(t.toFixed(2), "px, ")
      .concat(e.toFixed(2), "px, 0) translate(-50%, -50%) scale(")
      .concat(o.toFixed(3), ")"),
  ].join(";");
}
module.exports = {
  markBackgroundDirtyForImage: function (t) {
    var e = o(this.properties.bgIndex);
    t && e && t === e.url && (this._bgLayerDirty = !0);
  },
  shouldContinuePhysicsLoop: function () {
    var t = this.dragState || {};
    return this.properties.photoMode && this.isStrung
      ? ((this._stableFrameCount = 0),
        (this._settledFinalRenderRequested = !1),
        this.setRenderQualityMode && this.setRenderQualityMode("photo"),
        !0)
      : t.active || this.animFrameRef > 0 || this.blindBoxTimer
      ? ((this._stableFrameCount = 0),
        (this._settledFinalRenderRequested = !1),
        this.setRenderQualityMode && this.setRenderQualityMode("interactive"),
        !0)
      : this.beadsRef.length
      ? this.isStrung
        ? ((this._stableFrameCount = (this._stableFrameCount || 0) + 1),
          this._stableFrameCount >= 12 &&
            this.setRenderQualityMode &&
            this.setRenderQualityMode("settled"),
          24 !== this._stableFrameCount ||
            this._settledFinalRenderRequested ||
            ((this._settledFinalRenderRequested = !0),
            "function" == typeof this.scheduleRender && this.scheduleRender()),
          this._stableFrameCount < 24)
        : ((this._stableFrameCount = 0),
          (this._settledFinalRenderRequested = !1),
          this.setRenderQualityMode && this.setRenderQualityMode("interactive"),
          !0)
      : ((this._stableFrameCount = 0),
        (this._settledFinalRenderRequested = !1),
        this.setRenderQualityMode && this.setRenderQualityMode("interactive"),
        !1);
  },
  syncRenderQualityModeBeforeFrame: function () {
    var t = this.dragState || {};
    this.properties.photoMode
      ? this.setRenderQualityMode && this.setRenderQualityMode("photo")
      : t.active ||
        this.animFrameRef > 0 ||
        this.blindBoxTimer ||
        !this.isStrung
      ? this.setRenderQualityMode && this.setRenderQualityMode("interactive")
      : (this._stableFrameCount || 0) >= 12
      ? this.setRenderQualityMode && this.setRenderQualityMode("settled")
      : this.setRenderQualityMode && this.setRenderQualityMode("interactive");
  },
  hideStrungDomOverlay: function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = t && !0 === t.retainBeads;
    if (
      ((this._strungDomOverlayKey = ""),
      e ||
        ((this._strungDomOverlayPrewarmKey = ""),
        (this._strungDomOverlayPreparing = !1),
        (this._strungDomOverlayPreparedForFinal = !1)),
      (this._strungDomDragUid = ""),
      (this._strungDomDragSourceIndex = -1),
      (this._strungDomDragTargetIndex = -1),
      (this._strungDomDragLastTargetAt = 0),
      (this._strungDomDragProxyPatchAt = 0),
      (this._strungDomLayoutUnfreezeTimer = null),
      (this._strungDomDragProxyBase = null),
      (this._strungDomDragLayout = null),
      this._strungDomOverlayRotateReq &&
        (this.beadCanvas &&
        "function" == typeof this.beadCanvas.cancelAnimationFrame
          ? this.beadCanvas.cancelAnimationFrame(
              this._strungDomOverlayRotateReq
            )
          : clearTimeout(this._strungDomOverlayRotateReq),
        (this._strungDomOverlayRotateReq = null)),
      (this._strungDomOverlayRotatePendingStyle = ""),
      this.cancelStrungDomFlyIn(),
      this._strungDomOverlayRevealTimer &&
        (clearTimeout(this._strungDomOverlayRevealTimer),
        (this._strungDomOverlayRevealTimer = null)),
      this._strungDomLayoutUnfreezeTimer &&
        (clearTimeout(this._strungDomLayoutUnfreezeTimer),
        (this._strungDomLayoutUnfreezeTimer = null)),
      this.cancelStrungDomCanvasFadeOut(),
      this.clearStrungDomShadowCanvas(),
      this.data &&
        (this.data.showStrungDomOverlay ||
          this.data.strungDomOverlayVisible ||
          this.data.strungDomCanvasHidden ||
          this.data.showStrungDomShadowLayer ||
          this.data.strungDomDragProxyVisible ||
          this.data.strungDomFlyInVisible))
    ) {
      var a = {
        showStrungDomOverlay: !1,
        strungDomOverlayVisible: !1,
        strungDomCanvasHidden: !1,
        showStrungDomShadowLayer: !1,
        strungDomOverlayRotating: !1,
        strungDomOverlayLayoutFrozen: !1,
        strungDomOverlayStyle: "",
        strungDomDragProxyVisible: !1,
        strungDomFlyInVisible: !1,
      };
      e ||
        ((a.strungDomOverlayBeads = []),
        (a.strungDomDragProxy = null),
        (a.strungDomFlyInBead = null)),
        this.setData(a);
    }
  },
  shouldKeepStrungDomOverlay: function () {
    return !1;
  },
  buildStrungDomOverlayKey: function () {
    return this.isStrung && Array.isArray(this.beadsRef) && this.beadsRef.length
      ? this.beadsRef
          .map(function (t) {
            var e = Number(t && t.x),
              a = Number(t && t.y),
              r = Number(t && t.rot);
            return [
              t && t.uid,
              t && (t.imgUrl || t.img_url),
              t && t.mm,
              Number.isFinite(e) ? e.toFixed(2) : "0",
              Number.isFinite(a) ? a.toFixed(2) : "0",
              Number.isFinite(r) ? r.toFixed(4) : "0",
            ].join(":");
          })
          .join("|")
      : "";
  },
  buildStrungDomOverlayPrewarmKey: function () {
    var t =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : this.beadsRef,
      e = Array.isArray(t) ? t : [];
    if (!e.length) return "";
    var a =
        Number(
          this.displaySize || (this.properties && this.properties.traySize)
        ) ||
        Number(this.logicalSize) ||
        1,
      r = Number(this.logicalSize) || a || 1,
      o = r > 0 ? a / r : 1,
      s = [
        "size",
        Number.isFinite(a) ? a.toFixed(2) : "1.00",
        Number.isFinite(r) ? r.toFixed(2) : "1.00",
        Number.isFinite(o) ? o.toFixed(4) : "1.0000",
      ].join(":");
    return [s]
      .concat(
        e.map(function (t, e) {
          var a = t && "object" === i(t) ? t : {};
          return [
            a.uid || e,
            a.id || a.mat || "",
            a.imgUrl || a.img_url || "",
            a.mm || "",
            a.imgScale || "",
            a.isPendant ? 1 : 0,
            a.hangsOutward ? 1 : 0,
            a.isSpacer ? 1 : 0,
          ].join(":");
        })
      )
      .join("|");
  },
  isStrungDomOverlayEnabled: function () {
    return !1;
  },
  recordMotionFrameSample: function (t) {
    var e = Number(t);
    if (Number.isFinite(e) && !(e <= 0)) {
      var a = this._motionFrameStats || {
        count: 0,
        totalMs: 0,
        maxMs: 0,
        over18Count: 0,
        over25Count: 0,
        over33Count: 0,
        slowStreak: 0,
        maxSlowStreak: 0,
        lastMs: 0,
        startedAt: this.getPerfNow ? this.getPerfNow() : Date.now(),
        updatedAt: 0,
      };
      (a.count += 1),
        (a.totalMs += e),
        (a.maxMs = Math.max(Number(a.maxMs) || 0, e)),
        (a.lastMs = e),
        (a.updatedAt = this.getPerfNow ? this.getPerfNow() : Date.now()),
        e > 18.5 && (a.over18Count += 1),
        e > 25
          ? ((a.over25Count += 1),
            (a.slowStreak += 1),
            (a.maxSlowStreak = Math.max(
              Number(a.maxSlowStreak) || 0,
              a.slowStreak
            )))
          : (a.slowStreak = 0),
        e > 33 && (a.over33Count += 1),
        (this._motionFrameStats = a);
    }
  },
  resetMotionFrameStats: function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      e = this.getPerfNow ? this.getPerfNow() : Date.now();
    (this._lastMotionFrameAt = e),
      (this._lastMotionFrameDeltaMs = 0),
      (this._motionFrameStats = {
        count: 0,
        totalMs: 0,
        maxMs: 0,
        over18Count: 0,
        over25Count: 0,
        over33Count: 0,
        slowStreak: 0,
        maxSlowStreak: 0,
        lastMs: 0,
        startedAt: e,
        updatedAt: 0,
        reason: String(t || "").trim(),
      });
  },
  getMotionFrameStats: function () {
    var t = this._motionFrameStats || null;
    if (!t || !t.count)
      return {
        count: 0,
        avgMs: 0,
        maxMs: 0,
        approxFps: 0,
        over18Count: 0,
        over25Count: 0,
        over33Count: 0,
        over18Ratio: 0,
        over25Ratio: 0,
        over33Ratio: 0,
        maxSlowStreak: 0,
        lastMs: 0,
        reason: t && t.reason ? t.reason : "",
      };
    var e = Math.max(1, Number(t.count) || 1),
      a = Number(t.totalMs || 0) / e;
    return {
      count: e,
      avgMs: Number(a.toFixed(2)),
      maxMs: Number((Number(t.maxMs) || 0).toFixed(2)),
      approxFps: a > 0 ? Number((1e3 / a).toFixed(1)) : 0,
      over18Count: Number(t.over18Count) || 0,
      over25Count: Number(t.over25Count) || 0,
      over33Count: Number(t.over33Count) || 0,
      over18Ratio: Number(((Number(t.over18Count) || 0) / e).toFixed(3)),
      over25Ratio: Number(((Number(t.over25Count) || 0) / e).toFixed(3)),
      over33Ratio: Number(((Number(t.over33Count) || 0) / e).toFixed(3)),
      maxSlowStreak: Number(t.maxSlowStreak) || 0,
      lastMs: Number((Number(t.lastMs) || 0).toFixed(2)),
      reason: t.reason || "",
    };
  },
  hasPreparedStrungDomOverlayForCurrentBeads: function () {
    if (!this.data || this.data.strungDomOverlayVisible) return !1;
    if (
      !(
        Array.isArray(this.data.strungDomOverlayBeads) &&
        this.data.strungDomOverlayBeads.length > 0
      )
    )
      return !1;
    var t =
      "function" == typeof this.buildStrungDomOverlayPrewarmKey
        ? this.buildStrungDomOverlayPrewarmKey()
        : "";
    return !!t && this._strungDomOverlayPrewarmKey === t;
  },
  canUseStrungDomBeadDrag: function (t) {
    return !1;
  },
  buildStrungDomOverlayNode: function (t) {
    var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h(),
      a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      r = this.getBeadRenderMetrics(t, e),
      i = (Number(this.displaySize) || this.logicalSize) / this.logicalSize,
      o = Math.max(1, r.drawW * i),
      s = Math.max(1, r.drawH * i),
      n = r.depthX * i,
      d = r.depthY * i,
      l = M(r.item),
      u = a.dragging ? 999999 : Math.round(1e3 * l + 10 * r.depthY),
      g = Math.max(1, Math.min(o, s) / 2),
      c = m(r.item),
      y = c && !a.dragging,
      f = !1,
      v = c
        ? Math.max(3, Math.min(8, 0.22 * g))
        : Math.max(3, Math.min(9, 0.26 * g)),
      p = c
        ? Math.max(4, Math.min(12, 0.4 * g))
        : Math.max(5, Math.min(13, 0.36 * g)),
      S = y ? 1.04 : 0.88,
      b = o * S,
      D = s * (y ? S : 0.84),
      w = (r.rot || 0).toFixed(4),
      x = c
        ? Math.max(3, Math.min(7, 0.2 * g))
        : Math.max(3, Math.min(8, 0.22 * g)),
      R = c
        ? Math.max(4, Math.min(10, 0.3 * g))
        : Math.max(5, Math.min(12, 0.34 * g)),
      P = c ? 0.36 : 0.66,
      C = 1,
      _ = o * C,
      O = s * C,
      N = Math.max(1, u - 1);
    return {
      uid: r.item.uid,
      imgUrl: r.item.imgUrl || r.item.img_url,
      useImageShadow: y,
      showDomShadow: f,
      useShadowLayerImage: c,
      useBodyDropShadow: !1,
      hidden: !!a.hidden,
      displayLeft: n,
      displayTop: d,
      displayWidth: o,
      displayHeight: s,
      zIndex: u,
      shadowLayerOffsetX: x,
      shadowLayerOffsetY: R,
      shadowLayerWidth: _,
      shadowLayerHeight: O,
      shadowLayerZIndex: N,
      showContactShadow: !1,
      wrapStyle: F(n, d, o, s, u),
      shadowLayerWrapStyle: F(n + x, d + R, _, O, N),
      imageStyle: [
        "width:".concat(o.toFixed(2), "px"),
        "height:".concat(s.toFixed(2), "px"),
        "transform:rotate(".concat(w, "rad)"),
      ].join(";"),
      shadowLayerImageStyle: [
        "width:".concat(_.toFixed(2), "px"),
        "height:".concat(O.toFixed(2), "px"),
        "opacity:".concat(P.toFixed(2)),
        "transform:rotate(".concat(w, "rad)"),
      ].join(";"),
      shadowStyle: [
        "width:".concat(b.toFixed(2), "px"),
        "height:".concat(D.toFixed(2), "px"),
        "opacity:".concat(y ? "0.23" : a.dragging ? "0.42" : "0.68"),
        "transform:translate(-50%, -50%) translate("
          .concat(v.toFixed(2), "px, ")
          .concat(p.toFixed(2), "px) rotate(")
          .concat(w, "rad)"),
      ].join(";"),
    };
  },
  prewarmCurrentStrungDomOverlay: function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return t && t.cancelToken && t.cancelToken.cancelled, Promise.resolve(!1);
  },
  layoutStrungBeadsImmediately: function () {
    var t = this,
      e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : this.beadsRef;
    (arguments.length > 1 && void 0 !== arguments[1]) || h();
    if (Array.isArray(e) && e.length && this.isStrung) {
      var a = this.computeOuterRadius(e),
        r = a.outerRadius;
      e.forEach(function (e) {
        var a = e.baseTheta + t.globalRotRef;
        (e.x = Math.cos(a) * r),
          (e.y = Math.sin(a) * r),
          (e.oldX = e.x),
          (e.oldY = e.y),
          (e.rot = a + Math.PI / 2 + (g(e) ? -Math.PI : 0));
      });
    }
  },
  buildPhotoSnapshotBeads: function () {
    var t = this,
      e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h();
    if (
      !Array.isArray(this.beadsRef) ||
      !this.beadsRef.length ||
      !this.isStrung
    )
      return [];
    var a = this.beadsRef.map(function (t) {
      return r({}, t);
    });
    "function" == typeof this.recalculateThetas && this.recalculateThetas(a);
    var i = this.computeOuterRadius(a, e),
      o = i.outerRadius;
    return (
      a.forEach(function (e) {
        var a = e.baseTheta + t.globalRotRef;
        (e.x = Math.cos(a) * o),
          (e.y = Math.sin(a) * o),
          (e.oldX = e.x),
          (e.oldY = e.y),
          (e.rot = a + Math.PI / 2 + (g(e) ? -Math.PI : 0)),
          (e.vx = 0),
          (e.vy = 0);
      }),
      a
    );
  },
  getPhotoRenderBeads: function () {
    var t = this._photoSnapshotBeads;
    return this.properties.photoMode && Array.isArray(t) && t.length
      ? t
      : Array.isArray(this.beadsRef)
      ? this.beadsRef
      : [];
  },
  clearStrungDomShadowCanvas: function () {
    this.strungDomShadowCtx &&
      b(this, this.strungDomShadowCtx, this.logicalSize);
  },
  cancelStrungDomFlyIn: function () {
    this._strungDomFlyInTimer &&
      (clearTimeout(this._strungDomFlyInTimer),
      (this._strungDomFlyInTimer = null)),
      (this._strungDomFlyInUid = ""),
      this.data &&
        (this.data.strungDomFlyInVisible || this.data.strungDomFlyInBead) &&
        this.setData({ strungDomFlyInVisible: !1, strungDomFlyInBead: null });
  },
  cancelStrungDomCanvasFadeOut: function () {
    this._strungDomCanvasFadeTimer &&
      (clearTimeout(this._strungDomCanvasFadeTimer),
      (this._strungDomCanvasFadeTimer = null));
  },
  freezeStrungDomLayoutForNextFrame: function () {
    var t = this;
    if (
      this.data &&
      this.data.showStrungDomOverlay &&
      this.data.strungDomOverlayVisible
    ) {
      this._strungDomLayoutUnfreezeTimer &&
        (clearTimeout(this._strungDomLayoutUnfreezeTimer),
        (this._strungDomLayoutUnfreezeTimer = null)),
        this.data.strungDomOverlayLayoutFrozen ||
          this.setData({ strungDomOverlayLayoutFrozen: !0 });
      var e = function () {
        (t._strungDomLayoutUnfreezeTimer = null),
          t.ready &&
            t.data &&
            t.data.strungDomOverlayLayoutFrozen &&
            t.setData({ strungDomOverlayLayoutFrozen: !1 });
      };
      "undefined" == typeof wx || "function" != typeof wx.nextTick
        ? (this._strungDomLayoutUnfreezeTimer = setTimeout(e, 34))
        : wx.nextTick(function () {
            t._strungDomLayoutUnfreezeTimer = setTimeout(e, 34);
          });
    }
  },
  areStrungDomImagesReady: function () {
    var t = this,
      e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
      a = Array.isArray(e)
        ? e
        : this.data && Array.isArray(this.data.strungDomOverlayBeads)
        ? this.data.strungDomOverlayBeads
        : [];
    return (
      !!a.length &&
      a.every(function (e) {
        var a = e && e.imgUrl;
        return (
          !!(a && t.imageCache && t.imageCache[a]) && t.imageCache[a].width > 0
        );
      })
    );
  },
  scheduleStrungDomCanvasFadeOut: function () {
    var t = this,
      e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
      a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    this.cancelStrungDomCanvasFadeOut();
    var r = Number.isFinite(Number(a.delayMs)) ? Number(a.delayMs) : 170,
      i = Number(a.attempt) || 0,
      o = function () {
        (t._strungDomCanvasFadeTimer = null),
          t.ready &&
            !t.properties.photoMode &&
            t.data &&
            t.data.showStrungDomOverlay &&
            t.data.strungDomOverlayVisible &&
            t.data.showStrungDomShadowLayer &&
            (t.areStrungDomImagesReady(e)
              ? t.data.strungDomCanvasHidden ||
                t.setData({ strungDomCanvasHidden: !0 })
              : i < 1 &&
                t.scheduleStrungDomCanvasFadeOut(e, {
                  delayMs: 260,
                  attempt: i + 1,
                }));
      };
    "undefined" == typeof wx || "function" != typeof wx.nextTick
      ? (this._strungDomCanvasFadeTimer = setTimeout(o, r))
      : wx.nextTick(function () {
          t._strungDomCanvasFadeTimer = setTimeout(o, r);
        });
  },
  drawStrungDomShadowCanvas: function () {
    var t = this,
      e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h(),
      a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      r =
        "function" == typeof this.isDiyPerfDebugEnabled &&
        this.isDiyPerfDebugEnabled(),
      i = r && "function" == typeof this.getPerfNow ? this.getPerfNow() : 0,
      o = this.strungDomShadowCtx,
      s = a && Array.isArray(a.listOverride) ? a.listOverride : this.beadsRef,
      n = !(!a || !a.allowUnstrung);
    if (!o || (!this.isStrung && !n) || !Array.isArray(s) || !s.length)
      return (
        this.clearStrungDomShadowCanvas(),
        r &&
          "function" == typeof this.recordDiyPerf &&
          this.recordDiyPerf("strung-shadow-canvas-skip", 0, {
            hasCtx: !!o,
            isStrung: !!this.isStrung,
            beads: Array.isArray(s) ? s.length : 0,
          }),
        !1
      );
    var d = a && a.excludeUid ? String(a.excludeUid) : "",
      l = this.renderQualityMode;
    return (
      o.save(),
      b(this, o, this.logicalSize),
      this.configureCanvasContext && this.configureCanvasContext(o),
      this.setRenderQualityMode && this.setRenderQualityMode("interactive"),
      s.forEach(function (a) {
        if (a && (!d || String(a.uid) !== d)) {
          var r = t.getBeadRenderMetrics(a, e);
          t.drawBeadShadow(o, r, { mode: "strung-dom" });
        }
      }),
      o.restore(),
      (this.renderQualityMode = l || "interactive"),
      r &&
        "function" == typeof this.recordDiyPerf &&
        this.recordDiyPerf("strung-shadow-canvas", this.getPerfNow() - i, {
          beads: s.length,
          excludeUid: d || void 0,
          logicalSize: this.logicalSize,
        }),
      !0
    );
  },
  computeStrungDomTargetIndex: function (t, e) {
    var a = this,
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h();
    if (
      !this.isStrung ||
      !Array.isArray(this.beadsRef) ||
      !this.beadsRef.length
    )
      return -1;
    var i = this.dragState || {};
    if (!i.uid) return -1;
    var o =
        this._strungDomDragLayout && this._strungDomDragLayout.uid === i.uid
          ? this._strungDomDragLayout
          : null,
      s = o
        ? o.outerRadius
        : this.computeOuterRadius(this.beadsRef).outerRadius,
      n = Math.hypot(t, e);
    if (Math.abs(n - s) >= s * r.ringSnapRangeRatio) return -1;
    var d = Math.atan2(e, t),
      l = 1 / 0,
      u = -1,
      m = 1,
      g = o
        ? o.targets
        : this.beadsRef.map(function (t, e) {
            return {
              index: e,
              uid: t && t.uid,
              theta: t ? t.baseTheta + a.globalRotRef : 0,
            };
          });
    return (
      g.forEach(function (t) {
        if (t && t.uid !== i.uid) {
          for (var e = t.theta - d; e > Math.PI; ) e -= 2 * Math.PI;
          for (; e < -Math.PI; ) e += 2 * Math.PI;
          var a = Math.abs(e);
          a < l && ((l = a), (u = t.index), (m = Math.sign(e || 1)));
        }
      }),
      u < 0 ? -1 : m < 0 ? u + 1 : u
    );
  },
  buildStrungDomDragLayout: function (t) {
    var e = this;
    return t && Array.isArray(this.beadsRef) && this.beadsRef.length
      ? {
          uid: t,
          outerRadius: this.computeOuterRadius(this.beadsRef).outerRadius,
          targets: this.beadsRef.map(function (t, a) {
            return {
              index: a,
              uid: t && t.uid,
              theta: t ? t.baseTheta + e.globalRotRef : 0,
            };
          }),
        }
      : null;
  },
  buildStrungDomDragProxyNode: function (t, e, a) {
    if (!t || !Array.isArray(this.beadsRef)) return null;
    var r = this.beadsRef.find(function (e) {
      return e && e.uid === t;
    });
    if (!r) return null;
    var i = Object.assign({}, r, { x: e, y: a, oldX: e, oldY: a });
    return this.buildStrungDomOverlayNode(i, h(), { dragging: !0 });
  },
  buildStrungDomFlyInNode: function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      a = this.buildStrungDomOverlayNode(t, h(), { dragging: !0 });
    if (!a) return null;
    var r = Number(this.displaySize) || this.logicalSize,
      i = Number.isFinite(Number(e.left)) ? Number(e.left) : 0.5 * r,
      o = Number.isFinite(Number(e.top)) ? Number(e.top) : 1.08 * r;
    return Object.assign({}, a, {
      wrapStyle: _(i, o, a.displayWidth, a.displayHeight, a.zIndex + 2, 0.72),
      targetWrapStyle: F(
        a.displayLeft,
        a.displayTop,
        a.displayWidth,
        a.displayHeight,
        a.zIndex + 2
      ),
    });
  },
  playStrungDomFlyIn: function (t) {
    return !1;
  },
  beginStrungDomDrag: function (t, e, a) {
    return !1;
  },
  updateStrungDomDragProxy: function (t, e) {
    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (
      this._strungDomDragUid &&
      this.data &&
      this.data.strungDomDragProxyVisible
    ) {
      var r = Date.now();
      if (
        a.force ||
        !(r - (Number(this._strungDomDragProxyPatchAt) || 0) < 24)
      ) {
        var i = this._strungDomDragProxyBase,
          o = "";
        if (i) {
          var s = h(),
            n = (s.trayRadius + t) * i.displayRatio + i.offsetX,
            d = (s.trayRadius + e) * i.displayRatio + i.offsetY;
          o = F(n, d, i.width, i.height, i.zIndex);
          var l = F(
              n + i.shadowLayerOffsetX,
              d + i.shadowLayerOffsetY,
              i.shadowLayerWidth,
              i.shadowLayerHeight,
              i.shadowLayerZIndex
            ),
            u = this.data.strungDomDragProxy,
            m = u && (u.wrapStyle !== o || u.shadowLayerWrapStyle !== l);
          if (m) {
            this._strungDomDragProxyPatchAt = r;
            var g = {
              "strungDomDragProxy.wrapStyle": o,
              "strungDomDragProxy.shadowLayerWrapStyle": l,
            };
            return (
              this.setData(g),
              void (
                (a.force ||
                  r - (Number(this._strungDomDragLastTargetAt) || 0) >= 64) &&
                ((this._strungDomDragLastTargetAt = r),
                (this._strungDomDragTargetIndex =
                  this.computeStrungDomTargetIndex(t, e)),
                this.dragState &&
                  (this.dragState.closestIdx = this._strungDomDragTargetIndex))
              )
            );
          }
        } else {
          var c = this.buildStrungDomDragProxyNode(
            this._strungDomDragUid,
            t,
            e
          );
          if (!c) return;
          o = c.wrapStyle;
        }
        this.data.strungDomDragProxy &&
          this.data.strungDomDragProxy.wrapStyle !== o &&
          ((this._strungDomDragProxyPatchAt = r),
          this.setData({ "strungDomDragProxy.wrapStyle": o })),
          (a.force ||
            r - (Number(this._strungDomDragLastTargetAt) || 0) >= 64) &&
            ((this._strungDomDragLastTargetAt = r),
            (this._strungDomDragTargetIndex = this.computeStrungDomTargetIndex(
              t,
              e
            )),
            this.dragState &&
              (this.dragState.closestIdx = this._strungDomDragTargetIndex));
      }
    }
  },
  updateStrungDomOverlayBead: function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (
      t &&
      this.data &&
      Array.isArray(this.data.strungDomOverlayBeads) &&
      this.data.showStrungDomOverlay &&
      this.data.strungDomOverlayVisible
    ) {
      var r = Date.now(),
        i = "bead:".concat(t);
      if (!e.force) {
        this._strungDomOverlayPatchAt = this._strungDomOverlayPatchAt || {};
        var o = Number(this._strungDomOverlayPatchAt[i]) || 0;
        if (r - o < 24) return;
      }
      var s = this.data.strungDomOverlayBeads.findIndex(function (e) {
        return e && e.uid === t;
      });
      if (!(s < 0)) {
        var n = Array.isArray(this.beadsRef)
          ? this.beadsRef.find(function (e) {
              return e && e.uid === t;
            })
          : null;
        if (n) {
          var d = this.buildStrungDomOverlayNode(n, h(), { dragging: !0 }),
            l = this.data.strungDomOverlayBeads[s] || {},
            u = a(
              {},
              "strungDomOverlayBeads[".concat(s, "].wrapStyle"),
              d.wrapStyle
            ),
            m = l.wrapStyle !== d.wrapStyle;
          l.imageStyle !== d.imageStyle &&
            ((u["strungDomOverlayBeads[".concat(s, "].imageStyle")] =
              d.imageStyle),
            (m = !0)),
            l.shadowStyle !== d.shadowStyle &&
              ((u["strungDomOverlayBeads[".concat(s, "].shadowStyle")] =
                d.shadowStyle),
              (m = !0)),
            l.useImageShadow !== d.useImageShadow &&
              ((u["strungDomOverlayBeads[".concat(s, "].useImageShadow")] =
                d.useImageShadow),
              (m = !0)),
            l.showDomShadow !== d.showDomShadow &&
              ((u["strungDomOverlayBeads[".concat(s, "].showDomShadow")] =
                d.showDomShadow),
              (m = !0)),
            m &&
              ((this._strungDomOverlayPatchAt =
                this._strungDomOverlayPatchAt || {}),
              (this._strungDomOverlayPatchAt[i] = r),
              this.setData(u));
        }
      }
    }
  },
  updateStrungDomOverlayRotation: function () {
    var t = this,
      e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (
      this.data &&
      this.data.showStrungDomOverlay &&
      this.data.strungDomOverlayVisible
    ) {
      var a = Date.now();
      if (!e.force) {
        var r = Number(this._strungDomOverlayRotatePatchAt) || 0;
        if (a - r < 24) return;
      }
      var i = Number(this._strungDomOverlayBaseRotation) || 0,
        o = (Number(this.globalRotRef) || 0) - i,
        s = "transform:rotate(".concat(o.toFixed(4), "rad);");
      if (
        this.data.strungDomOverlayStyle !== s &&
        this._strungDomOverlayRotatePendingStyle !== s &&
        ((this._strungDomOverlayRotatePatchAt = a),
        (this._strungDomOverlayRotatePendingStyle = s),
        !this._strungDomOverlayRotateReq)
      ) {
        var n = function () {
          t._strungDomOverlayRotateReq = null;
          var e = t._strungDomOverlayRotatePendingStyle;
          if (
            ((t._strungDomOverlayRotatePendingStyle = ""),
            e &&
              t.ready &&
              t.data &&
              t.data.showStrungDomOverlay &&
              t.data.strungDomOverlayStyle !== e)
          ) {
            var a = { strungDomOverlayStyle: e };
            t.data.strungDomOverlayRotating ||
              (a.strungDomOverlayRotating = !0),
              t.setData(a);
          }
        };
        this.beadCanvas &&
        "function" == typeof this.beadCanvas.requestAnimationFrame
          ? (this._strungDomOverlayRotateReq =
              this.beadCanvas.requestAnimationFrame(n))
          : (this._strungDomOverlayRotateReq = setTimeout(n, 16));
      }
    }
  },
  prepareStrungDomOverlay: function () {
    var t =
      "function" == typeof this.isDiyPerfDebugEnabled &&
      this.isDiyPerfDebugEnabled();
    t && "function" == typeof this.getPerfNow && this.getPerfNow();
    this.hideStrungDomOverlay();
  },
  syncStrungDomOverlay: function () {
    this.hideStrungDomOverlay();
  },
  updatePhysics: function () {
    var t = this;
    if (this.beadCanvas) {
      if (!this.properties.active)
        return this.hideStrungDomOverlay(), void (this.reqRef = null);
      if (this._photoTransitionActive && !this.properties.photoMode)
        return this.render(), void (this.reqRef = null);
      var e = this.beadsRef;
      if (!e.length) return this.render(), void (this.reqRef = null);
      var a = this.getPerfNow ? this.getPerfNow() : Date.now(),
        r = Number(this._lastMotionFrameAt) || a,
        i = Math.max(0, Math.min(200, a - r));
      if (
        ((this._lastMotionFrameAt = a),
        (this._lastMotionFrameDeltaMs = i),
        "function" == typeof this.recordMotionFrameSample &&
          this.recordMotionFrameSample(i),
        i > 18.5 && (this._motionFrameBudgetStressedUntil = a + 220),
        this.properties.photoMode &&
          this.isStrung &&
          this.data &&
          this.data.photoSnapshotVisible)
      ) {
        var o = h(),
          n = this.getPerfNow ? this.getPerfNow() : Date.now(),
          d = Number(this._photoSnapshotLastFrameAt) || n,
          l = Math.max(0, Math.min(64, n - d));
        return (
          (this._photoSnapshotLastFrameAt = n),
          (this._photoSnapshotSpinRotation =
            (Number(this._photoSnapshotSpinRotation) || 0) +
            o.photoRotationSpeed * (l / (1e3 / 60))),
          this.render(),
          void (this.shouldContinuePhysicsLoop()
            ? (this.reqRef = this.beadCanvas.requestAnimationFrame(
                this.updatePhysics.bind(this)
              ))
            : (this.reqRef = null))
        );
      }
      var u = h(),
        m = this.dragState;
      this.properties.photoMode &&
        this.isStrung &&
        (this.globalRotRef += u.photoRotationSpeed);
      var y = this.computeOuterRadius(e),
        f = y.totalEffectiveMm,
        v = y.outerRadius;
      if (!this.isStrung && 0 === this.animFrameRef)
        for (
          var p = u.friction,
            S = Math.max(1, u.solverIterations),
            b = u.trayRadius,
            D = u.pxPerMm,
            w = function (t) {
              e.forEach(function (e) {
                if (m.active && m.uid === e.uid)
                  0 === t &&
                    ((e.oldX = m.lastX),
                    (e.oldY = m.lastY),
                    (e.x = m.x),
                    (e.y = m.y),
                    (m.lastX = m.x),
                    (m.lastY = m.y));
                else {
                  if (0 === t) {
                    var a = (e.x - e.oldX) * p,
                      r = (e.y - e.oldY) * p;
                    (e.oldX = e.x),
                      (e.oldY = e.y),
                      (e.x += a),
                      (e.y += r),
                      (e.rot += 0.05 * a);
                  }
                  var i = (e.mm * D) / 2;
                  if (Math.hypot(e.x, e.y) > b - i) {
                    var o = Math.atan2(e.y, e.x),
                      n = Math.cos(o),
                      h = Math.sin(o);
                    (e.x = n * (b - i)), (e.y = h * (b - i));
                    var d = e.x - e.oldX,
                      l = e.y - e.oldY,
                      g = d * n + l * h,
                      c = u.boundaryBounce;
                    (e.oldX = e.x - (d - 2 * g * n) * c),
                      (e.oldY = e.y - (l - 2 * g * h) * c),
                      0 === t &&
                        Math.hypot(d, l) > u.boundaryHitSpeedThreshold &&
                        s("hit", e.uid, u.boundaryHitVolume);
                  }
                }
              });
              for (var a = 0; a < e.length; a += 1)
                for (var r = a + 1; r < e.length; r += 1) {
                  var i = e[a],
                    o = e[r],
                    n = o.x - i.x,
                    h = o.y - i.y,
                    d = Math.hypot(n, h) || 0.001,
                    l = ((i.mm * c(i.gapRatio) + o.mm * c(o.gapRatio)) * D) / 2;
                  if (!(d >= l)) {
                    var g = l - d,
                      y = (n / d) * g * 0.5,
                      f = (h / d) * g * 0.5;
                    m.uid === i.uid
                      ? ((o.x += 2 * y), (o.y += 2 * f))
                      : m.uid === o.uid
                      ? ((i.x -= 2 * y), (i.y -= 2 * f))
                      : ((i.x -= y), (i.y -= f), (o.x += y), (o.y += f));
                    var v = Math.hypot(
                      i.x - i.oldX - (o.x - o.oldX),
                      i.y - i.oldY - (o.y - o.oldY)
                    );
                    if (
                      0 === t &&
                      g > u.collisionOverlapThreshold &&
                      v > u.collisionSpeedThreshold &&
                      !m.active
                    ) {
                      var S = Math.min(
                        u.collisionMaxVolume,
                        v * u.collisionVolumeScale
                      );
                      s("hit", i.uid, S);
                    }
                  }
                }
            },
            x = 0;
          x < S;
          x += 1
        )
          w(x);
      var R = null,
        P = 0,
        M = 11,
        C = 0.97,
        F = 0;
      if (m.active && m.uid) {
        (R = Math.atan2(m.y, m.x)), (P = Math.hypot(m.x, m.y));
        var _ = e.find(function (t) {
          return t.uid === m.uid;
        });
        _ &&
          ((M = _.mm),
          (C = c(_.gapRatio)),
          !_.isPendant && f > 0 && (F = ((M * C) / f) * Math.PI * 2));
      }
      var O = 1 / 0,
        N = -1,
        T = 1;
      this.isStrung &&
        (e.forEach(function (e, a) {
          if (m.active && m.uid === e.uid)
            return (
              (e.x += (m.x - e.x) * u.dragFollowLerp),
              void (e.y += (m.y - e.y) * u.dragFollowLerp)
            );
          var r = e.baseTheta;
          if (null !== R) {
            for (var i = r + t.globalRotRef - R; i > Math.PI; )
              i -= 2 * Math.PI;
            for (; i < -Math.PI; ) i += 2 * Math.PI;
            Math.abs(i) < O &&
              ((O = Math.abs(i)), (N = a), (T = Math.sign(i || 1)));
            var o = F * u.spreadFactor;
            if (Math.abs(i) < o) r += (o - Math.abs(i)) * Math.sign(i || 1);
          }
          var s = r + t.globalRotRef,
            n = v * Math.cos(s),
            h = v * Math.sin(s);
          if (
            ((e.rot = s + Math.PI / 2 + (g(e) ? -Math.PI : 0)),
            t.animFrameRef > 0)
          ) {
            var d = Math.max(1, u.toggleStrungFrames),
              l = 1 - t.animFrameRef / d,
              c = l * (2 - l);
            (e.x += (n - e.x) * c * u.animEaseFactor),
              (e.y += (h - e.y) * c * u.animEaseFactor);
          } else (e.x += (n - e.x) * u.settleLerp), (e.y += (h - e.y) * u.settleLerp);
          (e.oldX = e.x), (e.oldY = e.y);
        }),
        this.animFrameRef > 0 &&
          ((this.animFrameRef -= 1),
          this.animFrameRef > 0 &&
            this.animFrameRef <=
              Math.max(4, Math.round(0.18 * u.toggleStrungFrames)) &&
            !this._strungDomOverlayPreparedForFinal &&
            "function" == typeof this.prepareStrungDomOverlay &&
            this.prepareStrungDomOverlay({ finalPass: !0, keepKey: !0 })),
        m.active &&
        m.uid &&
        null !== R &&
        -1 !== N &&
        Math.abs(P - v) < v * u.ringSnapRangeRatio
          ? (m.closestIdx = T < 0 ? N + 1 : N)
          : (m.closestIdx = -1)),
        this.syncRenderQualityModeBeforeFrame(),
        (this.isStrung &&
          this.data &&
          this.data.strungDomOverlayVisible &&
          m.active &&
          (m.domOverlayActive ||
            m.domOverlayRotateActive ||
            m.domOverlayDecisionPending)) ||
          this.render(),
        this.shouldContinuePhysicsLoop()
          ? (m.active && m.domOverlayActive && m.uid
              ? this.updateStrungDomOverlayBead(m.uid)
              : m.active && m.domOverlayRotateActive
              ? this.updateStrungDomOverlayRotation()
              : (m.active && m.domOverlayDecisionPending) ||
                (this._strungDomOverlayPreparing &&
                  this.isStrung &&
                  !m.active) ||
                (this.isStrung &&
                  this.data &&
                  this.data.showStrungDomOverlay) ||
                this.hideStrungDomOverlay(),
            (this.reqRef = this.beadCanvas.requestAnimationFrame(
              this.updatePhysics.bind(this)
            )))
          : (this.syncStrungDomOverlay(), (this.reqRef = null));
    }
  },
  drawBackgroundLayer: function (t) {
    var e =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h();
    if (t) {
      var a = this.logicalSize,
        r = e.trayRadius;
      t.save(),
        t.beginPath(),
        t.arc(r, r, e.trayRadius, 0, 2 * Math.PI),
        t.closePath(),
        t.clip(),
        (t.fillStyle = "#F4F2EC"),
        t.fillRect(0, 0, a, a);
      var i = o(this.properties.bgIndex),
        s = this.ensureImage(i.url);
      s && s.width && this.drawCoverImage(t, s, 0, 0, a, a, 1),
        (t.fillStyle = "rgba(0, 0, 0, 0.022)"),
        t.fillRect(0, 0, a, a),
        (t.fillStyle = this.getTrayToneOverlay(t, r, e.trayRadius)),
        t.fillRect(0, 0, a, a),
        t.restore();
    }
  },
  drawBeadsLayer: function (t) {
    var e = this,
      a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h(),
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (t) {
      var i =
          "function" == typeof this.isDiyPerfDebugEnabled &&
          this.isDiyPerfDebugEnabled(),
        o = i ? (this.getPerfNow ? this.getPerfNow() : Date.now()) : 0,
        s = a.trayRadius;
      t.save();
      var n = !1;
      if (n && this.isStrung && this.beadsRef.length > 0 && a.showRopeLine) {
        var d = this.beadsRef.filter(function (t) {
          return !t.isPendant && t.uid !== e.dragState.uid;
        });
        if (d.length) {
          t.beginPath(), t.moveTo(s + d[0].x, s + d[0].y);
          for (var l = 1; l < d.length; l += 1)
            t.lineTo(s + d[l].x, s + d[l].y);
          t.lineTo(s + d[0].x, s + d[0].y),
            (t.strokeStyle = "#848A86"),
            (t.lineWidth = a.ropeLineWidth),
            (t.lineCap = "round"),
            (t.lineJoin = "round"),
            t.stroke();
        }
      }
      var u = i ? (this.getPerfNow ? this.getPerfNow() : Date.now()) : 0,
        m = this._drawNodes || [];
      (this._drawNodes = m), (m.length = this.beadsRef.length);
      for (var g = 0; g < this.beadsRef.length; g += 1) {
        var c = this.beadsRef[g],
          y = m[g] || {};
        (y.item = c),
          (y.metrics = this.getBeadRenderMetrics(c, a)),
          (y.layer =
            c && Number.isFinite(Number(c.__renderLayer))
              ? Number(c.__renderLayer)
              : M(c)),
          (y.uidKey =
            c && c.__uidKey ? c.__uidKey : String((c && c.uid) || "")),
          (m[g] = y);
      }
      if (
        (m.sort(function (t, e) {
          var a = t.layer - e.layer;
          if (0 !== a) return a;
          var r = t.metrics.depthY - e.metrics.depthY;
          return Math.abs(r) > 0.001 ? r : t.uidKey.localeCompare(e.uidKey);
        }),
        i &&
          "function" == typeof this.recordDiyPerf &&
          this.recordDiyPerf(
            "drawBeadsLayer.metricsSort",
            (this.getPerfNow ? this.getPerfNow() : Date.now()) - u,
            { count: m.length }
          ),
        (t.globalCompositeOperation = "source-over"),
        (t.globalAlpha = 1),
        !r.skipShadows)
      ) {
        for (
          var f = i ? (this.getPerfNow ? this.getPerfNow() : Date.now()) : 0,
            v = 0;
          v < m.length;
          v += 1
        )
          this.drawBeadShadow(t, m[v].metrics);
        i &&
          "function" == typeof this.recordDiyPerf &&
          this.recordDiyPerf(
            "drawBeadShadow",
            (this.getPerfNow ? this.getPerfNow() : Date.now()) - f,
            { count: m.length }
          );
      }
      for (
        var p = i ? (this.getPerfNow ? this.getPerfNow() : Date.now()) : 0,
          S = 0;
        S < m.length;
        S += 1
      )
        this.drawBead(t, m[S].item, m[S].metrics);
      i &&
        "function" == typeof this.recordDiyPerf &&
        this.recordDiyPerf(
          "drawBead",
          (this.getPerfNow ? this.getPerfNow() : Date.now()) - p,
          {
            count: m.length,
            templateBuilds:
              Number(this._beadRenderTemplateBuildsThisFrame) || 0,
          }
        ),
        t.restore(),
        i &&
          "function" == typeof this.recordDiyPerf &&
          this.recordDiyPerf(
            "drawBeadsLayer",
            (this.getPerfNow ? this.getPerfNow() : Date.now()) - o,
            { count: m.length, isStrung: !!this.isStrung }
          );
    }
  },
  drawPhotoTrayShadowLayer: function (t) {
    var e =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h();
    if (t) {
      b(this, t, this.logicalSize);
      var a =
        "function" == typeof this.getPhotoRenderBeads
          ? this.getPhotoRenderBeads()
          : Array.isArray(this.beadsRef)
          ? this.beadsRef
          : [];
      if (this.properties.photoMode && Array.isArray(a) && a.length) {
        var r = e.trayRadius,
          i =
            Number(
              this.properties.traySize || this.displaySize || this.logicalSize
            ) || this.logicalSize,
          o =
            "function" == typeof this.computePhotoScale
              ? this.computePhotoScale()
              : 1,
          s = Math.round((i / 350) * -140),
          n = Math.max(11, 0.038 * i),
          d =
            (this.data &&
              this.data.photoSnapshotVisible &&
              Number(this._photoSnapshotSpinRotation)) ||
            0,
          l = this.renderQualityMode;
        t.save(),
          t.beginPath(),
          t.arc(r, r, e.trayRadius, 0, 2 * Math.PI),
          t.closePath(),
          t.clip(),
          t.translate(0, n),
          t.translate(r, r),
          t.translate(0, s),
          t.scale(o, o),
          t.rotate(d),
          t.translate(-r, -r),
          (t.globalCompositeOperation = "source-over"),
          (t.globalAlpha = 1),
          this.setRenderQualityMode && this.setRenderQualityMode("photo");
        for (var u = [], m = 0; m < a.length; m += 1) {
          var g = a[m];
          u.push({
            item: g,
            metrics: this.getBeadRenderMetrics(g, e),
            layer:
              g && Number.isFinite(Number(g.__renderLayer))
                ? Number(g.__renderLayer)
                : M(g),
            uidKey: g && g.__uidKey ? g.__uidKey : String((g && g.uid) || ""),
          });
        }
        u.sort(function (t, e) {
          var a = t.layer - e.layer;
          if (0 !== a) return a;
          var r = t.metrics.depthY - e.metrics.depthY;
          return Math.abs(r) > 0.001 ? r : t.uidKey.localeCompare(e.uidKey);
        }),
          this.drawPhotoBraceletAmbientShadow(t, u, e);
        for (var c = 0; c < u.length; c += 1)
          this.drawPhotoBeadShadow(t, u[c].metrics);
        t.restore(), (this.renderQualityMode = l || "interactive");
      }
    }
  },
  drawPhotoSnapshotLayer: function (t) {
    var e =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h();
    if (t) {
      b(this, t, this.logicalSize);
      var a =
        "function" == typeof this.getPhotoRenderBeads
          ? this.getPhotoRenderBeads()
          : Array.isArray(this.beadsRef)
          ? this.beadsRef
          : [];
      if (this.properties.photoMode && Array.isArray(a) && a.length) {
        var r = this.renderQualityMode;
        try {
          this.setRenderQualityMode && this.setRenderQualityMode("photo");
          for (var i = [], o = 0; o < a.length; o += 1) {
            var s = a[o];
            i.push({
              item: s,
              metrics: this.getBeadRenderMetrics(s, e),
              layer:
                s && Number.isFinite(Number(s.__renderLayer))
                  ? Number(s.__renderLayer)
                  : M(s),
              uidKey: s && s.__uidKey ? s.__uidKey : String((s && s.uid) || ""),
            });
          }
          i.sort(function (t, e) {
            var a = t.layer - e.layer;
            if (0 !== a) return a;
            var r = t.metrics.depthY - e.metrics.depthY;
            return Math.abs(r) > 0.001 ? r : t.uidKey.localeCompare(e.uidKey);
          }),
            t.save();
          for (var n = 0; n < i.length; n += 1)
            this.drawBead(t, i[n].item, i[n].metrics);
          t.restore();
        } finally {
          this.renderQualityMode = r || "interactive";
        }
      }
    }
  },
  drawPhotoSnapshotFrame: function (t) {
    var e =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h();
    if (
      !(
        t &&
        this.photoSnapshotCanvas &&
        this.data &&
        this.data.photoSnapshotVisible
      )
    )
      return !1;
    var a = Number(this.photoSnapshotCanvas.width) || 0,
      r = Number(this.photoSnapshotCanvas.height) || 0;
    if (a <= 0 || r <= 0) return !1;
    var i = Number(this.logicalSize) || Number(this.displaySize) || 1,
      o = S(this),
      s = Number(this._photoSnapshotSpinRotation) || 0;
    return (
      b(this, t, i),
      this.configureCanvasContext && this.configureCanvasContext(t),
      t.save(),
      t.translate(e.trayRadius, e.trayRadius),
      t.rotate(s),
      t.translate(-e.trayRadius, -e.trayRadius),
      t.drawImage(
        this.photoSnapshotCanvas,
        0,
        0,
        a,
        r,
        -o,
        -o,
        i + 2 * o,
        i + 2 * o
      ),
      t.restore(),
      !0
    );
  },
  preparePhotoSnapshotCacheCanvas: function () {
    if (!this.photoSnapshotCanvas || !this.photoSnapshotCtx) return null;
    var t,
      e,
      a = Math.max(
        1,
        Number(this.properties.traySize) ||
          Number(this.displaySize) ||
          Number(this.logicalSize) ||
          1
      ),
      r = Math.max(1, Number(this.logicalSize) || a),
      i = Math.max(0, Number(this.beadLayerOverscanPx) || 0),
      o = a + 2 * i,
      s = Math.max(1, Number(this.dpr) || 1),
      n =
        ((t = this),
        "low" === (e = String((t && t.deviceQualityTier) || "").toLowerCase())
          ? 1.25
          : "mid" === e
          ? 1.45
          : 1.65),
      h = Math.max(1, Math.round(o * s * n));
    this.photoSnapshotCanvas.width !== h &&
      (this.photoSnapshotCanvas.width = h),
      this.photoSnapshotCanvas.height !== h &&
        (this.photoSnapshotCanvas.height = h);
    var d = (a * s * n) / r,
      l = i * s * n;
    return (
      "function" == typeof this.photoSnapshotCtx.setTransform
        ? this.photoSnapshotCtx.setTransform(d, 0, 0, d, l, l)
        : ("function" == typeof this.photoSnapshotCtx.resetTransform &&
            this.photoSnapshotCtx.resetTransform(),
          this.photoSnapshotCtx.scale(d, d),
          l && this.photoSnapshotCtx.translate(l / d, l / d)),
      this.configureCanvasContext &&
        this.configureCanvasContext(this.photoSnapshotCtx),
      {
        canvasScaleX: d,
        canvasScaleY: d,
        canvasPixelWidth: h,
        canvasPixelHeight: h,
      }
    );
  },
  renderShareCanvas: function () {
    if (this.shareCtx) {
      var t,
        e = this.logicalSize,
        a = h(),
        r =
          ((t = this),
          "low" === String((t && t.deviceQualityTier) || "").toLowerCase()
            ? 3
            : 4),
        i = Math.max(1, Math.round(e * r)),
        o = this.renderQualityMode,
        s = this.canvasScaleX,
        n = this.canvasScaleY,
        d = this.canvasPixelWidth,
        l = this.canvasPixelHeight,
        u = this._beadRenderTemplateBuildsThisFrame;
      try {
        this.shareCanvas &&
          ((this.shareCanvas.width === i && this.shareCanvas.height === i) ||
            ((this.shareCanvas.width = i), (this.shareCanvas.height = i)),
          "function" == typeof this.configureCanvasContext &&
            this.configureCanvasContext(this.shareCtx),
          "function" == typeof this.shareCtx.setTransform
            ? this.shareCtx.setTransform(r, 0, 0, r, 0, 0)
            : ("function" == typeof this.shareCtx.resetTransform &&
                this.shareCtx.resetTransform(),
              this.shareCtx.scale(r, r))),
          (this.canvasScaleX = r),
          (this.canvasScaleY = r),
          (this.canvasPixelWidth = i),
          (this.canvasPixelHeight = i),
          this.setRenderQualityMode && this.setRenderQualityMode("photo"),
          (this._beadRenderTemplateBuildsThisFrame = 0),
          this.shareCtx.clearRect(0, 0, e, e),
          this.shareCtx.save(),
          (this.shareCtx.fillStyle = "#FFFFFF"),
          this.shareCtx.fillRect(0, 0, e, e),
          this.shareCtx.restore(),
          this.drawBackgroundLayer(this.shareCtx, a),
          this.shareCtx.save(),
          this.shareCtx.translate(0, -Math.round(0 * e)),
          this.drawBeadsLayer(this.shareCtx, a),
          this.shareCtx.restore();
        var m = this.ensureImage("/assets/SLLOGO.svg");
        m &&
          m.width &&
          (function (t, e, a) {
            if (t && e && e.width > 0 && e.height > 0) {
              var r = 0.2 * a,
                i = r * (e.height / Math.max(1, e.width)),
                o = 0.34 * a;
              t.drawImage(e, (a - r) / 2, o - i / 2, r, i);
            }
          })(this.shareCtx, m, e);
      } finally {
        (this.canvasScaleX = s),
          (this.canvasScaleY = n),
          (this.canvasPixelWidth = d),
          (this.canvasPixelHeight = l),
          (this._beadRenderTemplateBuildsThisFrame = u || 0),
          (this.renderQualityMode = o || "interactive");
      }
    }
  },
  clearPhotoSnapshotLayer: function (t) {
    var e = t && "object" === i(t) ? t : {};
    (this._photoSnapshotToken = (Number(this._photoSnapshotToken) || 0) + 1),
      this.data &&
        this.data.photoSnapshotVisible &&
        !0 !== e.skipRotationCommit &&
        (this.globalRotRef += Number(this._photoSnapshotSpinRotation) || 0),
      (this._photoSnapshotSpinRotation = 0),
      (this._photoSnapshotLastFrameAt = 0),
      (this._photoSnapshotBeads = null),
      this.photoSnapshotCtx && b(this, this.photoSnapshotCtx, this.logicalSize),
      this.data &&
        this.data.photoSnapshotVisible &&
        this.setData({ photoSnapshotVisible: !1 });
  },
  prepareExitPhotoMode: function () {
    return (
      !!this.ready &&
      ("function" == typeof this.armPhotoTransitionFreeze &&
        this.armPhotoTransitionFreeze(),
      "function" == typeof this.clearPhotoSnapshotLayer &&
        this.clearPhotoSnapshotLayer(),
      "function" == typeof this.setRenderQualityMode &&
        this.setRenderQualityMode("settled"),
      !0)
    );
  },
  restoreNormalModeLayout: function () {
    var t = this;
    if (!this.ready) return !1;
    "function" == typeof this.clearPhotoSnapshotLayer &&
      this.clearPhotoSnapshotLayer(),
      "function" == typeof this.cancelStrungDomFlyIn &&
        this.cancelStrungDomFlyIn(),
      "function" == typeof this.cancelStrungDomCanvasFadeOut &&
        this.cancelStrungDomCanvasFadeOut(),
      this._strungDomOverlayRevealTimer &&
        (clearTimeout(this._strungDomOverlayRevealTimer),
        (this._strungDomOverlayRevealTimer = null)),
      (this._strungDomOverlayKey = ""),
      (this._strungDomOverlayPreparing = !1),
      (this._strungDomOverlayPreparedForFinal = !1),
      (this._strungDomDragUid = ""),
      (this._strungDomDragSourceIndex = -1),
      (this._strungDomDragTargetIndex = -1),
      (this._strungDomDragLastTargetAt = 0),
      (this._strungDomDragProxyPatchAt = 0),
      (this._strungDomDragProxyBase = null),
      (this._strungDomDragLayout = null),
      (this.dragState =
        "function" == typeof this.createDragState
          ? this.createDragState()
          : this.dragState),
      (this.animFrameRef = 0),
      (this._stableFrameCount = this.isStrung ? 24 : 0),
      "function" == typeof this.setRenderQualityMode &&
        this.setRenderQualityMode(this.isStrung ? "settled" : "interactive"),
      this.isStrung && "function" == typeof this.layoutStrungBeadsImmediately
        ? this.layoutStrungBeadsImmediately(this.beadsRef)
        : this.isStrung ||
          "function" != typeof this.clampLooseBeadsToTrayBounds ||
          this.clampLooseBeadsToTrayBounds(),
      "function" == typeof this.syncLayerStyles && this.syncLayerStyles(),
      "function" == typeof this.syncCanvasResolutionFromSize
        ? this.syncCanvasResolutionFromSize(
            this.properties.traySize || this.displaySize || this.logicalSize
          )
        : "function" == typeof this.syncCanvasResolution &&
          this.syncCanvasResolution(
            this.properties.traySize || this.displaySize || this.logicalSize
          ),
      "function" == typeof this.clearStrungDomShadowCanvas &&
        this.clearStrungDomShadowCanvas();
    return (
      this.setData(
        {
          photoSnapshotVisible: !1,
          strungDomOverlayRotating: !1,
          strungDomOverlayLayoutFrozen: !1,
          strungDomOverlayStyle: "",
          strungDomDragProxyVisible: !1,
          strungDomDragProxy: null,
          strungDomFlyInVisible: !1,
          strungDomFlyInBead: null,
          showStrungDomShadowLayer: !1,
        },
        function () {
          t.ready &&
            (t.isStrung && "function" == typeof t.syncStrungDomOverlay
              ? t.syncStrungDomOverlay({ force: !0 })
              : "function" == typeof t.render && t.render(),
            t.properties.active &&
              !t.reqRef &&
              "function" == typeof t.startLoop &&
              t.startLoop());
        }
      ),
      "function" == typeof this.emitState && this.emitState(),
      !0
    );
  },
  clampLooseBeadsToTrayBounds: function () {
    var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h(),
      e = Array.isArray(this.beadsRef) ? this.beadsRef : [];
    if (!e.length) return !1;
    var a = Number(t && t.trayRadius) || 0,
      r = Number(t && t.pxPerMm) || 1;
    if (!(a > 0)) return !1;
    var i = !1;
    return (
      e.forEach(function (t) {
        if (t) {
          var e = Math.max(0, ((Number(t.mm) || 0) * r) / 2),
            o = Math.max(0, a - e),
            s = Math.hypot(Number(t.x) || 0, Number(t.y) || 0);
          if (!(s <= o || s <= 0)) {
            var n = Math.atan2(Number(t.y) || 0, Number(t.x) || 0);
            (t.x = Math.cos(n) * o),
              (t.y = Math.sin(n) * o),
              (t.oldX = t.x),
              (t.oldY = t.y),
              (i = !0);
          }
        }
      }),
      i
    );
  },
  preparePhotoSnapshotLayer: function () {
    var a = this;
    return e(
      t().mark(function e() {
        var i, o, s, n, d, l, u, m, g;
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                if (
                  a.ready &&
                  a.properties.photoMode &&
                  a.isStrung &&
                  a.photoSnapshotCanvas &&
                  a.photoSnapshotCtx &&
                  Array.isArray(a.beadsRef) &&
                  a.beadsRef.length
                ) {
                  t.next = 3;
                  break;
                }
                return a.clearPhotoSnapshotLayer(), t.abrupt("return", !1);
              case 3:
                if (
                  ((i = (Number(a._photoSnapshotToken) || 0) + 1),
                  (a._photoSnapshotToken = i),
                  (a._photoSnapshotSpinRotation = 0),
                  (a._photoSnapshotLastFrameAt = 0),
                  (a._photoSnapshotBeads =
                    "function" == typeof a.buildPhotoSnapshotBeads
                      ? a.buildPhotoSnapshotBeads(h())
                      : a.beadsRef.map(function (t) {
                          return r({}, t);
                        })),
                  (o = []),
                  a._photoSnapshotBeads.forEach(function (t) {
                    var e = t && (t.imgUrl || t.img_url);
                    e && o.indexOf(e) < 0 && o.push(e);
                  }),
                  !o.length || "function" != typeof a.preloadImageSet)
                ) {
                  t.next = 13;
                  break;
                }
                return (
                  (t.next = 13),
                  Promise.race([
                    a.preloadImageSet(o).catch(function () {}),
                    new Promise(function (t) {
                      return setTimeout(t, 220);
                    }),
                  ])
                );
              case 13:
                if (
                  a.ready &&
                  a.properties.photoMode &&
                  a.isStrung &&
                  a._photoSnapshotToken === i
                ) {
                  t.next = 16;
                  break;
                }
                return a.clearPhotoSnapshotLayer(), t.abrupt("return", !1);
              case 16:
                (s = a.renderQualityMode),
                  (n = a._beadRenderTemplateBuildsThisFrame),
                  (d = a.canvasScaleX),
                  (l = a.canvasScaleY),
                  (u = a.canvasPixelWidth),
                  (m = a.canvasPixelHeight),
                  (g = a.preparePhotoSnapshotCacheCanvas());
                try {
                  a.setRenderQualityMode && a.setRenderQualityMode("photo"),
                    g &&
                      ((a.canvasScaleX = g.canvasScaleX),
                      (a.canvasScaleY = g.canvasScaleY),
                      (a.canvasPixelWidth = g.canvasPixelWidth),
                      (a.canvasPixelHeight = g.canvasPixelHeight)),
                    (a._beadRenderTemplateBuildsThisFrame = 0),
                    a.drawPhotoSnapshotLayer(a.photoSnapshotCtx, h()),
                    a.photoTrayShadowCtx &&
                      a.drawPhotoTrayShadowLayer(a.photoTrayShadowCtx, h());
                } finally {
                  (a.canvasScaleX = d),
                    (a.canvasScaleY = l),
                    (a.canvasPixelWidth = u),
                    (a.canvasPixelHeight = m),
                    (a._beadRenderTemplateBuildsThisFrame = n || 0),
                    (a.renderQualityMode = s || "interactive");
                }
                if (
                  a.ready &&
                  a.properties.photoMode &&
                  a.isStrung &&
                  a._photoSnapshotToken === i
                ) {
                  t.next = 27;
                  break;
                }
                return a.clearPhotoSnapshotLayer(), t.abrupt("return", !1);
              case 27:
                return (
                  a.setData({ photoSnapshotVisible: !0 }, function () {
                    a.ready &&
                      a.properties.photoMode &&
                      a.isStrung &&
                      (a.render(),
                      a.reqRef ||
                        "function" != typeof a.startLoop ||
                        a.startLoop());
                  }),
                  t.abrupt("return", !0)
                );
              case 29:
              case "end":
                return t.stop();
            }
        }, e);
      })
    )();
  },
  prepareShareSnapshotAssets: function () {
    var a = this;
    return e(
      t().mark(function e() {
        var r, o, s, n, h;
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                for (
                  r = ["/assets/share-card.jpg", "/assets/SLLOGO.svg"],
                    o = Array.isArray(a.beadsRef) ? a.beadsRef : [],
                    s = 0;
                  s < o.length;
                  s += 1
                )
                  (n = o[s] && "object" === i(o[s]) ? o[s] : null),
                    (h = n && (n.imgUrl || n.img_url)) &&
                      r.indexOf(h) < 0 &&
                      r.push(h);
                if ("function" != typeof a.preloadImageSet) {
                  t.next = 6;
                  break;
                }
                return (t.next = 6), a.preloadImageSet(r);
              case 6:
              case "end":
                return t.stop();
            }
        }, e);
      })
    )();
  },
  render: function () {
    if (this.bgCtx && this.beadCtx)
      if (this.properties.active) {
        var t = this.getPerfNow ? this.getPerfNow() : Date.now();
        "function" == typeof this.ensurePhysicsGeometry &&
          this.ensurePhysicsGeometry({ reason: "render" }) &&
          "function" == typeof this.syncCanvasResolutionFromSize &&
          this.syncCanvasResolutionFromSize(
            this.properties.traySize || this.displaySize || this.logicalSize,
            { render: !1 }
          );
        var e = this.logicalSize,
          a = h();
        if (
          ((this._beadRenderTemplateBuildsThisFrame = 0),
          !1 !== this._bgLayerDirty &&
            (this.bgCtx.clearRect(0, 0, e, e),
            this.drawBackgroundLayer(this.bgCtx, a),
            (this._bgLayerDirty = !1)),
          this.properties.photoMode &&
            this.data &&
            this.data.photoSnapshotVisible)
        ) {
          if (
            (this.photoTrayShadowCtx &&
              this.drawPhotoTrayShadowLayer(this.photoTrayShadowCtx, a),
            this.drawPhotoSnapshotFrame(this.beadCtx, a))
          )
            return void (
              "function" == typeof this.recordDiyPerf &&
              this.recordDiyPerf(
                "render-photo-snapshot-canvas",
                (this.getPerfNow ? this.getPerfNow() : Date.now()) - t
              )
            );
          this.clearPhotoSnapshotLayer(),
            "function" == typeof this.recordDiyPerf &&
              this.recordDiyPerf(
                "render-photo-snapshot-fallback",
                (this.getPerfNow ? this.getPerfNow() : Date.now()) - t
              );
        }
        if (this.isStrung && !1)
          "function" == typeof this.recordDiyPerf &&
            this.recordDiyPerf(
              "render-dom-covered",
              (this.getPerfNow ? this.getPerfNow() : Date.now()) - t
            );
        else {
          var r = !(!this.properties.photoMode || !this.photoTrayShadowCtx);
          this.photoTrayShadowCtx &&
            this.drawPhotoTrayShadowLayer(this.photoTrayShadowCtx, a),
            b(this, this.beadCtx, e),
            this.drawBeadsLayer(this.beadCtx, a, { skipShadows: r }),
            "function" == typeof this.recordDiyPerf &&
              this.recordDiyPerf(
                "render",
                (this.getPerfNow ? this.getPerfNow() : Date.now()) - t
              );
        }
      } else
        "function" == typeof this.clearVisibleCanvasLayers &&
          this.clearVisibleCanvasLayers();
  },
  drawCoverImage: function (t, e, a, r, i, o, s) {
    var n = e.width,
      h = e.height,
      d = i / o,
      l = 0,
      u = 0,
      m = n,
      g = h;
    n / h > d ? (l = (n - (m = h * d)) / 2) : (u = (h - (g = n / d)) / 2),
      t.save(),
      (t.globalAlpha = s),
      t.drawImage(e, l, u, m, g, a, r, i, o),
      t.restore();
  },
  getTrayToneOverlay: function (t, e, a) {
    var r = "".concat(e, "|").concat(a);
    if (this._trayToneOverlay && this._trayToneOverlayKey === r)
      return this._trayToneOverlay;
    var i = t.createRadialGradient(e, e, 0.16 * a, e, e, 0.98 * a);
    return (
      i.addColorStop(0, "rgba(255, 255, 255, 0.07)"),
      i.addColorStop(0.42, "rgba(255, 255, 255, 0.014)"),
      i.addColorStop(0.64, "rgba(0, 0, 0, 0.012)"),
      i.addColorStop(0.82, "rgba(0, 0, 0, 0.008)"),
      i.addColorStop(1, "rgba(0, 0, 0, 0.004)"),
      (this._trayToneOverlay = i),
      (this._trayToneOverlayKey = r),
      i
    );
  },
  getBeadVisualProps: function (t) {
    var e = C(t);
    return {
      imgScale: e.imgScale,
      visualOffsetX: e.visualOffsetX,
      visualOffsetY: e.visualOffsetY,
    };
  },
  getBeadRenderMetrics: function (t) {
    var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h(),
      a = C(t),
      r = a.mm * e.pxPerMm,
      i = !m(a) && !D(a),
      o = Number(this.canvasScaleX) || 1,
      s = Number(this.canvasScaleY) || o,
      n = i ? v(e.trayRadius + a.x, o) : e.trayRadius + a.x,
      d = i ? v(e.trayRadius + a.y, s) : e.trayRadius + a.y,
      l = a.rot || 0,
      u = a.imgUrl || a.img_url,
      g = u ? this.ensureImage(u) : null;
    (g && g.width > 0) ||
      "function" != typeof this.recoverBeadImage ||
      (this.recoverBeadImage(a),
      (g = (u = a.imgUrl || a.img_url) ? this.ensureImage(u) : null));
    var c = this.getBeadVisualProps(a),
      S = f(g, r),
      b = S.baseW * c.imgScale,
      w = S.baseH * c.imgScale,
      x = i ? p(b, o) : b,
      R = i ? p(w, s) : w,
      P = y(c.visualOffsetX, x, 1),
      M = y(c.visualOffsetY, R, 1),
      F = n + Math.cos(l) * P - Math.sin(l) * M,
      _ = d + Math.sin(l) * P + Math.cos(l) * M;
    return (
      i &&
        !this._diySamplingProbeLogged &&
        "function" == typeof this.logDiySamplingProbe &&
        ((this._diySamplingProbeLogged = !0),
        this.logDiySamplingProbe({
          logicalSize: this.logicalSize,
          displaySize: this.displaySize,
          dpr: this.dpr,
          scaleX: o,
          scaleY: s,
          rawRenderX: e.trayRadius + a.x,
          rawRenderY: e.trayRadius + a.y,
          renderX: n,
          renderY: d,
          rawDrawW: b,
          rawDrawH: w,
          drawW: x,
          drawH: R,
          mm: a.mm,
        })),
      {
        item: a,
        displaySize: r,
        renderX: n,
        renderY: d,
        rot: l,
        drawW: x,
        drawH: R,
        depthX: F,
        depthY: _,
      }
    );
  },
  drawBeadShadow: function (t, e) {
    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      r = e && e.item ? e.item : null;
    if (e && r) {
      var i = Math.max(1, Math.min(e.drawW, e.drawH) / 2),
        o = e.depthX,
        s = e.depthY,
        n = a && "strung-dom" === a.mode,
        h = this.getRenderQualityMode
          ? this.getRenderQualityMode()
          : this.renderQualityMode || "interactive",
        d = "photo" === h,
        l = n || !d ? 0 : R(this, h),
        m = "photo" === h;
      t.save();
      var g = u(r, e),
        c = g.usesShapeShadow;
      if (c) {
        var y = r.imgUrl || r.img_url,
          f = y ? this.ensureImage(y) : null,
          v = g.freeformShape,
          p = !n && g.regularShape,
          S =
            p &&
            f &&
            f.width > 0 &&
            "function" == typeof this.getAccessoryShapeShadow
              ? this.getAccessoryShapeShadow(y, f, e.drawW, e.drawH, {
                  allowBuild: !1,
                  variant: "body-soft",
                })
              : null,
          b =
            f &&
            f.width > 0 &&
            "function" == typeof this.getAccessoryShapeShadow
              ? this.getAccessoryShapeShadow(y, f, e.drawW, e.drawH, {
                  allowBuild: !1,
                  variant: "soft-contour",
                })
              : null,
          w = Math.max(e.drawW, e.drawH),
          x = P(r, m);
        if (v && !b) {
          var M = Math.max(4, 0.7 * e.drawW),
            C = Math.max(3, 0.46 * e.drawH),
            F = o + 0.086 * w,
            _ = s + 0.168 * w;
          t.save(),
            t.translate(F, _),
            t.rotate(e.rot || 0),
            t.scale(M / 2, C / 2);
          var O = t.createRadialGradient(0, 0, 0.1, 0, 0, 1);
          return (
            O.addColorStop(
              0,
              n ? "rgba(0, 0, 0, 0.200)" : "rgba(0, 0, 0, 0.340)"
            ),
            O.addColorStop(
              0.46,
              n ? "rgba(0, 0, 0, 0.088)" : "rgba(0, 0, 0, 0.155)"
            ),
            O.addColorStop(1, "rgba(0, 0, 0, 0)"),
            (t.fillStyle = O),
            t.beginPath(),
            t.arc(0, 0, 1, 0, 2 * Math.PI),
            t.fill(),
            t.restore(),
            void t.restore()
          );
        }
        if (S) {
          t.save(),
            (t.globalAlpha = Math.min(0.32, 0.96 * x.softAlpha)),
            t.translate(
              o + w * (1.88 * x.softOffsetX),
              s + w * (2.42 * x.softOffsetY)
            ),
            t.rotate(e.rot || 0);
          var N = 0.89;
          t.drawImage(
            S,
            (-e.drawW * N) / 2,
            (-e.drawH * N) / 2,
            e.drawW * N,
            e.drawH * N
          ),
            t.restore();
        }
        if (b) {
          var T = p ? 0.89 : v ? (m ? 0.88 : 0.84) : m ? 1.07 : 1.06,
            A = p ? 0.48 : v ? (n ? 0.52 : 0.82) : n ? 0.54 : 0.86,
            L = p ? 0.19 : v ? 0.3 : 0.44,
            B = p ? 1.46 : v ? 2.05 : 0.72,
            I = p ? 1.92 : v ? 2.5 : 0.78;
          t.save(),
            (t.globalAlpha = v
              ? n
                ? 0.22
                : m
                ? 0.3
                : 0.34
              : Math.min(L, x.softAlpha * A)),
            t.translate(
              o + w * (v ? 0.078 : x.softOffsetX * B),
              s + w * (v ? 0.158 : x.softOffsetY * I)
            ),
            t.rotate(e.rot || 0),
            t.drawImage(
              b,
              (-e.drawW * T) / 2,
              (-e.drawH * T) / 2,
              e.drawW * T,
              e.drawH * T
            ),
            t.restore();
        }
        t.restore();
      } else {
        if (D(r)) {
          var z = Math.max(e.drawW, e.drawH),
            Y = Math.max(7, 0.3 * z),
            k = 0.46,
            Q = o + 0.062 * z,
            X = s + 0.155 * z;
          t.save(), t.translate(Q, X), t.scale(1, k);
          var W = t.createRadialGradient(0, 0, 0, 0, 0, Y);
          return (
            W.addColorStop(
              0,
              n ? "rgba(0, 0, 0, 0.300)" : "rgba(0, 0, 0, 0.520)"
            ),
            W.addColorStop(
              0.44,
              n ? "rgba(0, 0, 0, 0.135)" : "rgba(0, 0, 0, 0.235)"
            ),
            W.addColorStop(1, "rgba(0, 0, 0, 0)"),
            t.beginPath(),
            t.arc(0, 0, Y, 0, 2 * Math.PI),
            (t.fillStyle = W),
            t.fill(),
            t.restore(),
            void t.restore()
          );
        }
        var H = n ? "strung-dom" : d ? "interactive" : "loose-interactive",
          q =
            "function" == typeof this.getBeadShadowTemplate
              ? this.getBeadShadowTemplate(i, H, r)
              : null,
          V =
            !n && "function" == typeof this.getBeadShadowTemplate && l > 0
              ? this.getBeadShadowTemplate(i, "settled", r)
              : null;
        if (q && q.canvas && (!V || "photo" !== h)) {
          var U = !d && this.isStrung ? 0.92 : 1,
            K = "photo" === h ? 0 : (1 - l) * U;
          K > 0.001 &&
            (t.save(),
            (t.globalAlpha = K),
            t.drawImage(q.canvas, o - q.center, s - q.center, q.size, q.size),
            t.restore());
        }
        if (V && V.canvas) {
          var j = "photo" === h ? 1 : l;
          t.save(),
            (t.globalAlpha = j),
            t.drawImage(V.canvas, o - V.center, s - V.center, V.size, V.size),
            t.restore();
          var E = Number(this._stableFrameCount) || 0;
          "function" == typeof this.recordDiyPerf &&
            l > 0 &&
            l < 1 &&
            this._lastShadowBlendTraceFrame !== E &&
            ((this._lastShadowBlendTraceFrame = E),
            this.recordDiyPerf("shadow-quality-blend", 0, {
              stableFrame: E,
              blend: Number(l).toFixed(2),
            }));
        }
        if ((q && q.canvas) || (V && V.canvas)) t.restore();
        else {
          var G = 0.82 * i,
            Z = t.createRadialGradient(o, s, 0, o, s, G);
          Z.addColorStop(0, "rgba(0, 0, 0, 0.96)"),
            Z.addColorStop(0.5, "rgba(0, 0, 0, 0.44)"),
            Z.addColorStop(1, "rgba(0, 0, 0, 0)"),
            t.beginPath(),
            t.arc(o, s, G, 0, 2 * Math.PI),
            (t.fillStyle = Z),
            t.fill();
          var J = 1.22 * i,
            $ = o + 0.18 * i,
            tt = s + 0.34 * i,
            et = t.createRadialGradient(
              $ - 0.06 * i,
              tt - 0.08 * i,
              0.12 * i,
              $,
              tt,
              J
            );
          et.addColorStop(0, "rgba(0, 0, 0, 0.80)"),
            et.addColorStop(0.45, "rgba(0, 0, 0, 0.34)"),
            et.addColorStop(1, "rgba(0, 0, 0, 0)"),
            t.beginPath(),
            t.arc($, tt, J, 0, 2 * Math.PI),
            (t.fillStyle = et),
            t.fill(),
            t.restore();
        }
      }
    }
  },
  drawPhotoBraceletAmbientShadow: function (t, e) {
    var a =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h();
    if (t && Array.isArray(e) && !(e.length < 2)) {
      for (
        var r = Number(a && a.trayRadius) || 0,
          i = Math.max(1, r),
          o = 0,
          s = 0,
          n = 0,
          d = 0;
        d < e.length;
        d += 1
      ) {
        var l = e[d] && e[d].metrics;
        if (l) {
          var u = x(l, a),
            m = 0.35 + u;
          (o += m), (s += l.depthX * m), (n += l.depthY * m);
        }
      }
      if (!(o <= 0)) {
        var g = s / o + 0.035 * i,
          c = Math.max(n / o + 0.135 * i, r + 0.21 * i),
          y = 0.68 * i,
          f = 0.175 * i;
        t.save(), t.translate(g, c), t.scale(y, f);
        var v = t.createRadialGradient(0, 0, 0.12, 0, 0, 1);
        v.addColorStop(0, "rgba(32,28,23,0.050)"),
          v.addColorStop(0.55, "rgba(32,28,23,0.024)"),
          v.addColorStop(1, "rgba(32,28,23,0)"),
          (t.fillStyle = v),
          t.beginPath(),
          t.arc(0, 0, 1, 0, 2 * Math.PI),
          t.fill(),
          t.restore();
      }
    }
  },
  drawPhotoBeadShadow: function (t, e) {
    var a = e && e.item ? e.item : null;
    if (t && e && a) {
      var r = Math.max(1, Math.min(e.drawW, e.drawH) / 2),
        i = e.depthX,
        o = e.depthY,
        s = x(e, h());
      t.save();
      var n = 1.02 * r;
      t.save(), t.translate(i + 0.18 * r, o + 0.68 * r), t.scale(1.06, 1.06);
      var d = t.createRadialGradient(0, 0, 0.18 * n, 0, 0, n);
      d.addColorStop(
        0,
        "rgba(32,28,23,".concat((0.064 + 0.024 * s).toFixed(3), ")")
      ),
        d.addColorStop(
          0.54,
          "rgba(32,28,23,".concat((0.03 + 0.014 * s).toFixed(3), ")")
        ),
        d.addColorStop(1, "rgba(32,28,23,0)"),
        (t.fillStyle = d),
        t.beginPath(),
        t.arc(0, 0, n, 0, 2 * Math.PI),
        t.fill(),
        t.restore();
      var l = 0.62 * r;
      t.save(), t.translate(i + 0.08 * r, o + 0.6 * r), t.scale(1, 1);
      var u = t.createRadialGradient(0, 0, 0.14 * r, 0, 0, l);
      u.addColorStop(
        0,
        "rgba(32,28,23,".concat((0.012 + 0.016 * s).toFixed(3), ")")
      ),
        u.addColorStop(
          0.46,
          "rgba(32,28,23,".concat((0.006 + 0.008 * s).toFixed(3), ")")
        ),
        u.addColorStop(1, "rgba(32,28,23,0)"),
        (t.fillStyle = u),
        t.beginPath(),
        t.arc(0, 0, l, 0, 2 * Math.PI),
        t.fill(),
        t.restore(),
        t.restore();
    }
  },
  drawBead: function (t, e, a) {
    this.drawBeadPolar(t, e, a);
  },
  drawBeadPolar: function (t, e, a) {
    var r = h(),
      i = a || this.getBeadRenderMetrics(e, r),
      o = i.item;
    t.save(),
      (t.globalAlpha = 1),
      t.translate(i.renderX, i.renderY),
      t.rotate(i.rot);
    var s = o.imgUrl || o.img_url,
      n = s ? this.ensureImage(s) : null,
      d = this.getBeadVisualProps(o);
    if (n && n.width > 0) {
      var l = i.drawW,
        u = i.drawH,
        g = y(d.visualOffsetX, l, 1),
        c = y(d.visualOffsetY, u, 1),
        f = this.getRenderQualityMode
          ? this.getRenderQualityMode()
          : this.renderQualityMode || "interactive",
        v = !(!this.dragState || !this.dragState.active),
        p = Math.min(l, u) / Math.max(l, u),
        S = !m(o) && p > 0.82 && !v;
      t.translate(g, c);
      var b =
        S && "function" == typeof this.getBeadRenderTemplate
          ? this.getBeadRenderTemplate(s, n, l, u, {
              allowBuild: "photo" === f,
              maxBuildsPerFrame: "photo" === f ? 99 : 0,
              mode: "photo" === f ? "photo" : "realtime",
              bead: o,
            })
          : null;
      b && b.canvas
        ? (this.configureCanvasContext && this.configureCanvasContext(t),
          t.drawImage(
            b.canvas,
            0,
            0,
            b.pixelWidth || b.canvas.width,
            b.pixelHeight || b.canvas.height,
            -l / 2,
            -u / 2,
            l,
            u
          ))
        : (this.configureCanvasContext && this.configureCanvasContext(t),
          t.drawImage(n, -l / 2, -u / 2, l, u));
    } else
      D(o) ||
        (this.drawFallbackBead(t, i.displaySize),
        !0 === o.__manualPlaceholderLoadingVisible &&
          this.drawFallbackBeadLoadingMark(t, i.displaySize));
    t.restore();
  },
  drawSettledBeadVolumeOverlay: function (t, e, a) {
    var r = Math.max(1, Math.min(e, a));
    t.save(), t.beginPath(), t.arc(0, 0, r / 2, 0, 2 * Math.PI), t.clip();
    var i = t.createRadialGradient(
      0.22 * -r,
      0.24 * -r,
      0.04 * r,
      0,
      0,
      0.64 * r
    );
    i.addColorStop(0, "rgba(255,255,255,0.18)"),
      i.addColorStop(0.35, "rgba(255,255,255,0.06)"),
      i.addColorStop(1, "rgba(255,255,255,0)"),
      (t.fillStyle = i),
      t.fillRect(-e / 2, -a / 2, e, a);
    var o = t.createRadialGradient(0, 0, 0.28 * r, 0, 0, 0.58 * r);
    o.addColorStop(0, "rgba(0,0,0,0)"),
      o.addColorStop(1, "rgba(0,0,0,0.035)"),
      (t.fillStyle = o),
      t.fillRect(-e / 2, -a / 2, e, a),
      t.restore();
  },
  drawFallbackBead: function (t, e) {
    var a = t.createRadialGradient(
      0.15 * -e,
      0.15 * -e,
      0.1 * e,
      0,
      0,
      0.7 * e
    );
    a.addColorStop(0, "#fdfcfb"),
      a.addColorStop(0.5, "#ebd8c8"),
      a.addColorStop(1, "#d4bba0"),
      (t.fillStyle = a),
      t.beginPath(),
      t.arc(0, 0, e / 2, 0, 2 * Math.PI),
      t.fill();
  },
  drawFallbackBeadLoadingMark: function (t, e) {
    var a = Math.max(4, 0.34 * e);
    t.save(),
      (t.lineWidth = Math.max(1.4, 0.045 * e)),
      (t.strokeStyle = "rgba(28, 28, 28, 0.28)"),
      t.beginPath(),
      t.arc(0, 0, a, 0.42 * -Math.PI, 1.08 * Math.PI),
      t.stroke(),
      (t.strokeStyle = "rgba(255, 255, 255, 0.72)"),
      t.beginPath(),
      t.arc(0, 0, a, 1.1 * Math.PI, 1.55 * Math.PI),
      t.stroke(),
      t.restore();
  },
};
