var e = require("../../utils/catalog").getPhysicsConfig,
  a = {
    pxPerMm: 2.836,
    trayRadius: 166,
    maxCapacityBracelet: 40,
    maxPerimeterMm: 300,
    photoRotationSpeed: 0.0042,
    friction: 0.96,
    boundaryBounce: 0.6,
    solverIterations: 2,
    boundaryHitSpeedThreshold: 3,
    boundaryHitVolume: 0.4,
    collisionOverlapThreshold: 1,
    collisionSpeedThreshold: 3,
    collisionVolumeScale: 0.1,
    collisionMaxVolume: 0.8,
    dragFollowLerp: 0.6,
    spreadFactor: 1.2,
    settleLerp: 0.3,
    animEaseFactor: 0.1,
    ringSnapRangeRatio: 0.6,
    ropeLineWidth: 2.5,
    showRopeLine: !1,
    baseGrabRadius: 35,
    pendantGrabRadius: 40,
    removeDistancePx: 15,
    spawnXJitterPx: 40,
    spawnYInsetPx: 2,
    spawnForceBase: 1,
    spawnForceRange: 9,
    spawnSpeedDivisor: 5,
    spawnVxJitterScale: 12,
    spawnVyBase: 15,
    spawnVyScale: 25,
    toggleStrungFrames: 60,
    blindBoxIntervalMs: 80,
    blindBoxMaxCount: 18,
    unstrungForceBase: 8,
    unstrungForceRange: 12,
  };
function o(e, a) {
  var o = Number(e);
  return Number.isFinite(o) ? o : a;
}
function r(e, a) {
  return Math.round(o(e, a));
}
function n(e, a) {
  if (!0 === e || !1 === e) return e;
  if (null == e || "" === e) return !!a;
  var o = String(e).trim().toLowerCase();
  return (
    "1" === o ||
    "true" === o ||
    "yes" === o ||
    "on" === o ||
    ("0" !== o && "false" !== o && "no" !== o && "off" !== o && !!a)
  );
}
module.exports = {
  DEFAULT_PHYSICS: a,
  getTrayPhysics: function () {
    var t = e(),
      i = t && t.geometry ? t.geometry : {},
      s = t && t.simulation ? t.simulation : {},
      l = t && t.strung ? t.strung : {},
      u = t && t.touch ? t.touch : {},
      p = t && t.spawn ? t.spawn : {},
      c = t && t.anim ? t.anim : {};
    return {
      pxPerMm: o(i.pxPerMm, a.pxPerMm),
      trayRadius: o(i.trayRadius, a.trayRadius),
      maxCapacityBracelet: r(i.maxCapacityBracelet, a.maxCapacityBracelet),
      maxPerimeterMm: Math.min(
        r(i.maxPerimeterMm, a.maxPerimeterMm),
        a.maxPerimeterMm
      ),
      photoRotationSpeed: o(l.photoRotationSpeed, a.photoRotationSpeed),
      friction: o(s.friction, a.friction),
      boundaryBounce: o(s.boundaryBounce, a.boundaryBounce),
      solverIterations: r(s.solverIterations, a.solverIterations),
      boundaryHitSpeedThreshold: o(
        s.boundaryHitSpeedThreshold,
        a.boundaryHitSpeedThreshold
      ),
      boundaryHitVolume: o(s.boundaryHitVolume, a.boundaryHitVolume),
      collisionOverlapThreshold: o(
        s.collisionOverlapThreshold,
        a.collisionOverlapThreshold
      ),
      collisionSpeedThreshold: o(
        s.collisionSpeedThreshold,
        a.collisionSpeedThreshold
      ),
      collisionVolumeScale: o(s.collisionVolumeScale, a.collisionVolumeScale),
      collisionMaxVolume: o(s.collisionMaxVolume, a.collisionMaxVolume),
      dragFollowLerp: o(l.dragFollowLerp, a.dragFollowLerp),
      spreadFactor: o(l.spreadFactor, a.spreadFactor),
      settleLerp: o(l.settleLerp, a.settleLerp),
      animEaseFactor: o(l.animEaseFactor, a.animEaseFactor),
      ringSnapRangeRatio: o(l.ringSnapRangeRatio, a.ringSnapRangeRatio),
      ropeLineWidth: o(l.ropeLineWidth, a.ropeLineWidth),
      showRopeLine: n(l.showRopeLine, a.showRopeLine),
      baseGrabRadius: o(u.baseGrabRadius, a.baseGrabRadius),
      pendantGrabRadius: o(u.pendantGrabRadius, a.pendantGrabRadius),
      removeDistancePx: o(u.removeDistancePx, a.removeDistancePx),
      spawnXJitterPx: o(p.xJitterPx, a.spawnXJitterPx),
      spawnYInsetPx: o(p.yInsetPx, a.spawnYInsetPx),
      spawnForceBase: o(p.forceBase, a.spawnForceBase),
      spawnForceRange: o(p.forceRange, a.spawnForceRange),
      spawnSpeedDivisor: o(p.speedDivisor, a.spawnSpeedDivisor),
      spawnVxJitterScale: o(p.vxJitterScale, a.spawnVxJitterScale),
      spawnVyBase: o(p.vyBase, a.spawnVyBase),
      spawnVyScale: o(p.vyScale, a.spawnVyScale),
      toggleStrungFrames: r(c.toggleStrungFrames, a.toggleStrungFrames),
      blindBoxIntervalMs: r(c.blindBoxIntervalMs, a.blindBoxIntervalMs),
      blindBoxMaxCount: r(c.blindBoxMaxCount, a.blindBoxMaxCount),
      unstrungForceBase: o(c.unstrungForceBase, a.unstrungForceBase),
      unstrungForceRange: o(c.unstrungForceRange, a.unstrungForceRange),
    };
  },
};
