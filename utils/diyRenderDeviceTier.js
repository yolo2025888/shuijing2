var e = require("../@babel/runtime/helpers/typeof"),
  r = Object.freeze({
    tier: "high",
    isAndroid: !1,
    isLowAndroid: !1,
    loadingMaterialLimit: 16,
    loadingImageCap: 32,
    loadingConcurrency: 3,
    runtimeVisibleMaterialLimit: 10,
    runtimePerMaterialLimit: 2,
    runtimeNextScreenLimit: 6,
    runtimeDecodeConcurrency: 2,
    manualForegroundConcurrency: 2,
    placeholderSilentDeadlineMs: 800,
    materialWarmupSoftBudgetMs: 900,
  }),
  i = Object.freeze({
    tier: "normal",
    isAndroid: !1,
    isLowAndroid: !1,
    loadingMaterialLimit: 14,
    loadingImageCap: 24,
    loadingConcurrency: 2,
    runtimeVisibleMaterialLimit: 8,
    runtimePerMaterialLimit: 2,
    runtimeNextScreenLimit: 4,
    runtimeDecodeConcurrency: 2,
    manualForegroundConcurrency: 2,
    placeholderSilentDeadlineMs: 1e3,
    materialWarmupSoftBudgetMs: 800,
  }),
  n = Object.freeze({
    tier: "lowAndroid",
    isAndroid: !0,
    isLowAndroid: !0,
    loadingMaterialLimit: 12,
    loadingImageCap: 20,
    loadingConcurrency: 1,
    runtimeVisibleMaterialLimit: 6,
    runtimePerMaterialLimit: 1,
    runtimeNextScreenLimit: 0,
    runtimeDecodeConcurrency: 1,
    manualForegroundConcurrency: 1,
    placeholderSilentDeadlineMs: 1200,
    materialWarmupSoftBudgetMs: 700,
  });
function t(e, r) {
  return Object.assign({}, e, r || {});
}
function o(e) {
  var r = Number(e);
  return Number.isFinite(r) ? r : null;
}
function a(a, d) {
  var u,
    l = a && "object" === e(a) ? a : {},
    c = (function (r) {
      var i = r && "object" === e(r) ? r : {};
      return [i.platform, i.system, i.model, i.brand, i.deviceBrand]
        .filter(function (e) {
          return null != e && String(e).trim();
        })
        .join(" ")
        .trim()
        .toLowerCase();
    })(l),
    m = c.indexOf("android") >= 0 || "devtools-android" === c,
    s =
      c.indexOf("ios") >= 0 ||
      c.indexOf("iphone") >= 0 ||
      c.indexOf("ipad") >= 0,
    f = o(l.benchmarkLevel),
    g = o(l.memorySize);
  if (m) {
    var y = null !== f && f >= 35,
      L = null === g || g >= 4096;
    u =
      null === f ||
      f <= 0 ||
      (null !== f && f > 0 && f < 18) ||
      (null !== g && g > 0 && g < 3072)
        ? t(n)
        : t(y && L ? r : i, { isAndroid: !0, isLowAndroid: !1 });
  } else u = s ? t(r, { isAndroid: !1, isLowAndroid: !1 }) : t(i);
  return (
    (function (r) {
      var i = r && "object" === e(r) ? r : {};
      return (
        !0 === i.framePressure ||
        !0 === i.recentFramePressure ||
        !0 === i.warmupTimedOut ||
        Number(i.framePressureCount || 0) >= 2
      );
    })(d) &&
      (u = (function (e) {
        return e && "lowAndroid" !== e.tier
          ? "high" === e.tier
            ? t(i, { isAndroid: !0 === e.isAndroid, isLowAndroid: !1 })
            : e.isAndroid
            ? t(n)
            : t(i)
          : t(n);
      })(u)),
    (u.platform = c || "unknown"),
    (u.benchmarkLevel = f),
    (u.memorySize = g),
    u
  );
}
function d() {
  var e = {};
  if ("undefined" == typeof wx) return e;
  try {
    "function" == typeof wx.getSystemInfoSync &&
      Object.assign(e, wx.getSystemInfoSync() || {});
  } catch (e) {}
  try {
    "function" == typeof wx.getDeviceInfo &&
      Object.assign(e, wx.getDeviceInfo() || {});
  } catch (e) {}
  return e;
}
module.exports = {
  resolveDiyRenderDeviceTier: a,
  resolveCurrentDiyRenderDeviceTier: function (e) {
    return a(d(), e);
  },
  readDiyRenderSystemInfo: d,
};
