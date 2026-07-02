var e = require("../../@babel/runtime/helpers/typeof"),
  r = require("../../constants/storageKeys").DIY_ENTRY_TRANSITION_KEY;
function t(e) {
  var r = String(e || "").trim(),
    t = r.replace(/[_-]/g, "").toLowerCase();
  return "blindbox" === t
    ? "blindbox"
    : "blindboxassets" === t
    ? "blindboxAssets"
    : "catalog" === t
    ? "catalog"
    : "materials" === t || "material" === t
    ? "materials"
    : "pattern" === t
    ? "pattern"
    : "assets" === t || "asset" === t
    ? "assets"
    : "tray" === t
    ? "tray"
    : "geometry" === t
    ? "geometry"
    : "layout" === t
    ? "layout"
    : r;
}
function n(r) {
  var n = r && "object" === e(r) && !Array.isArray(r) ? r : {},
    a = {};
  return (
    Object.keys(n).forEach(function (e) {
      var r = t(e);
      r && (!0 !== n[e] ? !0 !== a[r] && (a[r] = !1) : (a[r] = !0));
    }),
    !0 === a.blindbox && (a.blindBox = !0),
    !0 === a.blindBox && (a.blindbox = !0),
    !0 === a.blindboxAssets && (a.blindBoxAssets = !0),
    !0 === a.blindBoxAssets && (a.blindboxAssets = !0),
    a
  );
}
function a(r) {
  var t = r && "object" === e(r) && !Array.isArray(r) ? r : null;
  if (!t) return null;
  var a = Object.assign({}, t);
  return (
    (a.preparedStages = n(t.preparedStages)),
    (a.blindBoxSessionSeed = String(
      t.blindBoxSessionSeed || t.blind_box_session_seed || ""
    )
      .trim()
      .slice(0, 96)),
    a
  );
}
function i(e, r) {
  var t = a(e);
  if (!t) return !1;
  if (
    "diy" !==
    String(t.targetTab || "")
      .trim()
      .toLowerCase()
  )
    return !1;
  var n = Number.isFinite(Number(r)) ? Number(r) : Date.now(),
    i = Number(t.expiresAt || 0);
  if (Number.isFinite(i) && i > 0 && i < n) return !1;
  var o = Number(t.ts);
  if (!Number.isFinite(o) || o <= 0) return !1;
  var s = n - o;
  return s >= 0 && s <= 12e3;
}
function o() {
  try {
    if ("function" != typeof getApp) return null;
    var e = getApp();
    return e && e.globalData ? a(e.globalData.pendingDiyEntryTransition) : null;
  } catch (e) {
    return null;
  }
}
function s() {
  if ("undefined" == typeof wx || "function" != typeof wx.getStorageSync)
    return null;
  try {
    return a(wx.getStorageSync(r) || null);
  } catch (e) {
    return null;
  }
}
function l(e) {
  var r = Number.isFinite(Number(e)) ? Number(e) : Date.now(),
    t = o();
  if (i(t, r)) return t;
  var n = s();
  return i(n, r) ? n : null;
}
function u() {
  try {
    var e = "function" == typeof getApp ? getApp() : null;
    e && e.globalData && (e.globalData.pendingDiyEntryTransition = null);
  } catch (e) {}
  if ("undefined" != typeof wx && "function" == typeof wx.removeStorageSync)
    try {
      wx.removeStorageSync(r);
    } catch (e) {}
}
module.exports = {
  DIY_ENTRY_TRANSITION_MAX_AGE_MS: 12e3,
  clearDiyTransitionMarker: u,
  consumeDiyEntryTransitionMarker: function (r) {
    var t = r && "object" === e(r) ? r : {},
      n = !0 === t.isStandaloneDiy,
      a = String(t.routeSource || "")
        .trim()
        .toLowerCase(),
      i = n && a.startsWith("standalone_diy"),
      o = l();
    return n && o ? (u(), o) : !(!o && !i) && (u(), i && o ? o : null);
  },
  hasPreparedDiyStage: function (e, r) {
    var n = a(e);
    if (!n) return !1;
    var i = n.preparedStages || {},
      o = t(r);
    return (
      !0 === i[o] ||
      ("catalog" === o
        ? !0 === n.materialsBundleReady || !0 === i.catalog
        : "materials" === o
        ? !0 === n.materialsBundleReady
        : "pattern" === o
        ? !0 === n.patternReady || !0 === n.schemePatternReady
        : "assets" === o
        ? !0 === n.assetsReady || !0 === n.schemeAssetsReady
        : "geometry" === o
        ? !0 === n.geometryReady
        : "tray" === o
        ? !0 === n.skipIndexSceneMask || !0 === i.tray
        : "blindbox" === o
        ? !(
            !0 !== n.blindBoxReadyCandidatesReady ||
            !0 !== n.blindBoxCandidateImagesReady
          )
        : "blindboxAssets" === o && !0 === n.blindBoxWarmupReady)
    );
  },
  hasValidDiyTransitionMarker: function (e) {
    return !!l(e);
  },
  isValidDiyTransitionMarker: i,
  normalizeDiyStageName: t,
  normalizeDiyTransitionMarker: a,
  normalizePreparedStages: n,
  readDiyTransitionMarker: l,
  readGlobalDiyTransitionMarker: o,
  readStorageDiyTransitionMarker: s,
  setDiyTransitionMarker: function (e) {
    var t = a(e);
    if (!t) return !1;
    try {
      var n = "function" == typeof getApp ? getApp() : null;
      n && n.globalData && (n.globalData.pendingDiyEntryTransition = t);
    } catch (e) {}
    if ("undefined" != typeof wx && "function" == typeof wx.setStorageSync)
      try {
        wx.setStorageSync(r, t);
      } catch (e) {}
    return !0;
  },
};
