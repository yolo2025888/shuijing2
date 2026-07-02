var r = require("../@babel/runtime/helpers/slicedToArray"),
  t = require("../@babel/runtime/helpers/typeof"),
  e = "stonelab_avatar_crop_sessions_v1",
  a = "stonelab_avatar_crop_results_v1",
  n = new Set(["profile-auth", "distributor-panel", "creator-panel"]);
function o() {
  return Date.now();
}
function s(r) {
  var t = String(r || "").trim();
  return n.has(t) ? t : "";
}
function u() {
  try {
    if ("function" != typeof getApp) return null;
    var r = getApp();
    return r && r.globalData
      ? ((r.globalData.avatarCropSessions &&
          "object" === t(r.globalData.avatarCropSessions)) ||
          (r.globalData.avatarCropSessions = {}),
        (r.globalData.avatarCropResults &&
          "object" === t(r.globalData.avatarCropResults)) ||
          (r.globalData.avatarCropResults = {}),
        r.globalData)
      : null;
  } catch (r) {
    return null;
  }
}
function i(r) {
  if ("undefined" == typeof wx || "function" != typeof wx.getStorageSync)
    return {};
  try {
    var e = wx.getStorageSync(r);
    return e && "object" === t(e) && !Array.isArray(e) ? e : {};
  } catch (r) {
    return {};
  }
}
function l(r, e) {
  if ("undefined" != typeof wx && "function" == typeof wx.setStorageSync)
    try {
      wx.setStorageSync(r, e && "object" === t(e) ? e : {});
    } catch (r) {}
}
function c(r, t) {
  var e = i(r);
  Object.prototype.hasOwnProperty.call(e, t) && (delete e[t], l(r, e));
}
function v(r) {
  var t = Number((r && r.createdAt) || 0);
  return t > 0 && o() - t <= 6e5;
}
function p() {
  var t = o() - 6e5,
    n = u();
  ["avatarCropSessions", "avatarCropResults"].forEach(function (r) {
    n &&
      n[r] &&
      Object.keys(n[r]).forEach(function (e) {
        Number((n[r][e] && n[r][e].createdAt) || 0) < t && delete n[r][e];
      });
  }),
    [
      [e, null],
      [a, null],
    ].forEach(function (e) {
      var a = r(e, 1)[0],
        n = i(a),
        o = !1;
      Object.keys(n).forEach(function (r) {
        Number((n[r] && n[r].createdAt) || 0) < t && (delete n[r], (o = !0));
      }),
        o && l(a, n);
    });
}
function f(r) {
  var t = String(r || "").trim();
  if (t) {
    var n = u();
    n &&
      (n.avatarCropSessions && delete n.avatarCropSessions[t],
      n.avatarCropResults && delete n.avatarCropResults[t]),
      c(e, t),
      c(a, t);
  }
}
module.exports = {
  AVATAR_CROP_TTL_MS: 6e5,
  createAvatarCropSession: function (r) {
    var t = s(r && r.source),
      a = String((r && r.filePath) || "").trim();
    if (!t || !a) return "";
    p();
    var n = "avatar_"
        .concat(Date.now(), "_")
        .concat(Math.random().toString(36).slice(2, 10)),
      c = { sessionId: n, source: t, filePath: a, createdAt: o() },
      v = u();
    v && (v.avatarCropSessions[n] = c);
    var f = i(e);
    return (f[n] = c), l(e, f), n;
  },
  readAvatarCropSession: function (r) {
    var t = String(r || "").trim();
    if (!t) return null;
    var a = u(),
      n = a && a.avatarCropSessions ? a.avatarCropSessions[t] : null;
    if (n && v(n)) return n;
    var o = i(e)[t];
    return o && v(o) ? o : (f(t), null);
  },
  writeAvatarCropResult: function (r, t) {
    var e = String(r || "").trim(),
      n = s(t && t.source),
      c = String((t && t.tempFilePath) || "").trim();
    if (!e || !n || !c) return !1;
    var v = { sessionId: e, source: n, tempFilePath: c, createdAt: o() },
      p = u();
    p && (p.avatarCropResults[e] = v);
    var f = i(a);
    return (f[e] = v), l(a, f), !0;
  },
  consumeAvatarCropResult: function (r) {
    var t = s(r);
    if (!t) return null;
    p();
    var e = u(),
      n = e && e.avatarCropResults ? e.avatarCropResults : {},
      o = i(a),
      l = Object.assign({}, o, n),
      c = Object.keys(l)
        .filter(function (r) {
          var e = l[r];
          return e && e.source === t && v(e) && e.tempFilePath;
        })
        .sort(function (r, t) {
          var e = Number((l[r] && l[r].createdAt) || 0);
          return Number((l[t] && l[t].createdAt) || 0) - e;
        }),
      S = c[0];
    if (!S) return null;
    var b = l[S];
    return (
      c.forEach(function (r) {
        return f(r);
      }),
      {
        sessionId: S,
        source: t,
        tempFilePath: String(b.tempFilePath || "").trim(),
      }
    );
  },
  clearAvatarCropSession: f,
  cleanupExpiredAvatarCropSessions: p,
};
