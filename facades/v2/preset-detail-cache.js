var e = require("../../@babel/runtime/helpers/typeof"),
  t = require("../../domain/v2/preset-detail-domain").PRESET_DETAIL_CACHE_KEY;
function r(t) {
  if (!t || "object" !== e(t)) return t;
  try {
    return JSON.parse(JSON.stringify(t));
  } catch (e) {
    return t;
  }
}
function n() {
  if ("undefined" == typeof wx || "function" != typeof wx.getStorageSync)
    return null;
  try {
    var t = wx.getStorageSync("stonelab_preset_detail_cache_by_id_v2");
    return t && "object" === e(t)
      ? 2 !== Number(t.version || 0)
        ? { version: 2, entries: {}, order: [] }
        : {
            version: 2,
            entries: t.entries && "object" === e(t.entries) ? t.entries : {},
            order: Array.isArray(t.order) ? t.order : [],
          }
      : { version: 2, entries: {}, order: [] };
  } catch (e) {
    return null;
  }
}
function i(t) {
  if ("undefined" != typeof wx && "function" == typeof wx.setStorageSync) {
    var r = t && "object" === e(t) ? t : {};
    try {
      wx.setStorageSync("stonelab_preset_detail_cache_by_id_v2", {
        version: 2,
        entries: r.entries && "object" === e(r.entries) ? r.entries : {},
        order: Array.isArray(r.order) ? r.order : [],
      });
    } catch (e) {}
  }
}
function a(e, t) {
  var r = String(t || "").trim();
  if (e && r) {
    var n = Array.isArray(e.order) ? e.order : [];
    for (
      e.order = [r].concat(
        n.filter(function (e) {
          return String(e || "").trim() !== r;
        })
      );
      e.order.length > 50;

    ) {
      var i = e.order.pop();
      i && e.entries && delete e.entries[i];
    }
  }
}
function o(o) {
  if (
    o &&
    "object" === e(o) &&
    "undefined" != typeof wx &&
    "function" == typeof wx.setStorageSync
  ) {
    var c = (function (t) {
      var r = t && t.detail && "object" === e(t.detail) ? t.detail : {};
      return String(
        r.id || r.presetId || r.preset_id || t.presetId || t.preset_id || ""
      ).trim();
    })(o);
    if (c) {
      var l = n();
      l &&
        ((l.entries[c] = { payload: r(o), cachedAt: Date.now() }),
        a(l, c),
        i(l));
    }
    try {
      wx.setStorageSync(t, o);
    } catch (e) {}
  }
}
module.exports = {
  writePresetDetailCache: o,
  readPresetDetailCache: function (c) {
    if ("undefined" == typeof wx || "function" != typeof wx.getStorageSync)
      return null;
    var l = String(c || "").trim();
    if (l) {
      var u = n(),
        s = u && u.entries ? u.entries[l] : null,
        d = s && s.payload && "object" === e(s.payload) ? s.payload : null;
      if (d && d.detail) {
        var f = Number(s.cachedAt || 0),
          y = f > 0 ? Date.now() - f : Number.POSITIVE_INFINITY;
        return (
          a(u, l),
          i(u),
          Object.assign(r(d), {
            __cacheMeta: {
              cachedAt: f,
              ageMs: y,
              isFresh: f > 0 && y >= 0 && y <= 18e5,
            },
          })
        );
      }
    }
    try {
      var S = wx.getStorageSync(t);
      if (!S || "object" !== e(S)) return null;
      var v = S.detail && "object" === e(S.detail) ? S.detail : null;
      return v
        ? l
          ? String(v.id || "").trim() !== l
            ? null
            : (o(S),
              Object.assign(r(S), {
                __cacheMeta: {
                  cachedAt: 0,
                  ageMs: Number.POSITIVE_INFINITY,
                  isFresh: !1,
                },
              }))
          : S
        : null;
    } catch (e) {
      return null;
    }
  },
  writePresetDetailVisualLock: function (t, r) {
    var n = String(t || "").trim();
    if (
      n &&
      r &&
      "object" === e(r) &&
      "undefined" != typeof wx &&
      "function" == typeof wx.setStorageSync
    )
      try {
        wx.setStorageSync("stonelab_preset_detail_visual_lock_v1", {
          presetId: n,
          visual: r,
          ts: Date.now(),
        });
      } catch (e) {}
  },
  readPresetDetailVisualLock: function (t, r) {
    var n = String(t || "").trim();
    if (!n) return null;
    if ("undefined" == typeof wx || "function" != typeof wx.getStorageSync)
      return null;
    var i = !1 !== (r && "object" === e(r) ? r : {}).consume;
    try {
      var a = wx.getStorageSync("stonelab_preset_detail_visual_lock_v1"),
        o = a && "object" === e(a) ? a : null;
      if (!o) return null;
      if (String(o.presetId || "").trim() !== n) return null;
      var c = o.visual && "object" === e(o.visual) ? o.visual : null;
      return c
        ? (i &&
            "function" == typeof wx.removeStorageSync &&
            wx.removeStorageSync("stonelab_preset_detail_visual_lock_v1"),
          c)
        : null;
    } catch (e) {
      return null;
    }
  },
};
