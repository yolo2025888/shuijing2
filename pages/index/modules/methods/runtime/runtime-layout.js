var t = require("../../../../../@babel/runtime/helpers/typeof"),
  e = require("../lifecycle-layout"),
  n = require("../../../../../utils/catalog").materialHasRenderableImage;
function r(t) {
  return (Array.isArray(t) ? t : [])
    .map(function (t) {
      return String(null == t ? "" : t).trim();
    })
    .filter(function (t) {
      return /^[A-Za-z0-9_-]{1,64}$/.test(t);
    });
}
function a(t) {
  var e = r(t);
  return e.length ? e.join("|") : "";
}
function i(t) {
  return n(t);
}
function o(e) {
  var n = e && "object" === t(e) ? e : {},
    r = Array.isArray(n.beadTypes) ? n.beadTypes : [],
    a = Object.create(null);
  return (
    r.forEach(function (t) {
      var e = String((t && t.id) || "").trim();
      e && !a[e] && (a[e] = t);
    }),
    a
  );
}
module.exports = {
  updateClock: e.updateClock,
  getViewportInfo: e.getViewportInfo,
  computeViewportMetrics: e.computeViewportMetrics,
  getPhotoLayoutConfig: e.getPhotoLayoutConfig,
  recomputePhotoTrayShift: e.recomputePhotoTrayShift,
  handleLayoutOverlayOpacityChange: function (t) {
    var e = Number(t && t.detail && t.detail.value),
      n = Number.isFinite(e) ? Math.max(0, Math.min(100, Math.round(e))) : 38;
    this.setData({ layoutOverlayOpacity: n });
  },
  trayComp: function () {
    var t = this.selectComponent("#braceletTray");
    return (
      t &&
        "function" == typeof t.setResourceScheduler &&
        "function" == typeof this.ensureDiyResourceScheduler &&
        t.setResourceScheduler(this.ensureDiyResourceScheduler()),
      t
    );
  },
  syncTrayPhysicsGeometry: function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      e = "function" == typeof this.trayComp ? this.trayComp() : null;
    if (!e || !e.ready) return !1;
    var n = Number(this.data && this.data.traySize),
      r = Number.isFinite(n) && n > 0 ? n : e.displaySize || e.logicalSize;
    return (
      "function" == typeof e.ensurePhysicsGeometry &&
        e.ensurePhysicsGeometry({ reason: t }),
      e.isStrung && "function" == typeof e.layoutStrungBeadsImmediately
        ? e.layoutStrungBeadsImmediately(e.beadsRef)
        : e.isStrung ||
          "function" != typeof e.clampLooseBeadsToTrayBounds ||
          e.clampLooseBeadsToTrayBounds(),
      "function" == typeof e.syncLayerStyles && e.syncLayerStyles(),
      "function" == typeof e.syncCanvasResolutionFromSize
        ? e.syncCanvasResolutionFromSize(r)
        : "function" == typeof e.syncCanvasResolution
        ? e.syncCanvasResolution(r)
        : "function" == typeof e.render && e.render(),
      this.data &&
        !0 === this.data.isStandaloneDiy &&
        this._standaloneDiyLoadingPending &&
        "function" == typeof this.resolveStandaloneDiyLoadingGate &&
        this.resolveStandaloneDiyLoadingGate("geometry"),
      !0
    );
  },
  refreshStandaloneDiyPatternAfterMaterialsReady: function () {
    var e = this,
      n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      s = this.data && "object" === t(this.data) ? this.data : {};
    if (!0 !== s.isStandaloneDiy) return !1;
    if (
      !0 !== this._standaloneDiyLoadingPending &&
      !0 !== s.standaloneDiySceneMasked &&
      !0 !== s.standaloneDiyEntryMaskVisible
    )
      return !1;
    var u = r(
      Array.isArray(s.currentPattern) && s.currentPattern.length
        ? s.currentPattern
        : s.trayState && s.trayState.pattern
    );
    if (!u.length) return !1;
    var y = "function" == typeof this.trayComp ? this.trayComp() : null,
      c = y && Array.isArray(y.beadsRef) ? y.beadsRef : [];
    if (
      c.length &&
      c.every(function (t) {
        return String((t && (t.imgUrl || t.img_url)) || "").trim();
      })
    )
      return !1;
    var l = o(this.catalogSnapshot),
      f = u.every(function (t) {
        return i(l[t]);
      });
    if (!f) return !1;
    var h = "".concat(a(u), "|").concat(Object.keys(l).length);
    if (this._standaloneDiyPatternMaterialRegenKey === h) return !1;
    this._standaloneDiyPatternMaterialRegenKey = h;
    var d = (Number(s.forceRegen) || 0) + 1,
      p = { currentPattern: u, forceRegen: d },
      m = function () {
        "function" == typeof e.syncTrayPhysicsGeometry &&
          e.syncTrayPhysicsGeometry(n || "materials_ready_pattern_regen");
      };
    return (
      "function" == typeof this.setDataPatch
        ? this.setDataPatch(p, m)
        : "function" == typeof this.setData && this.setData(p, m),
      !0
    );
  },
};
