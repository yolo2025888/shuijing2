var r = require("../@babel/runtime/helpers/typeof"),
  e = require("../constants/storageKeys").DIY_ENTRY_SESSION_KEY,
  t = require("./diyRenderPlan").normalizeRenderPlan,
  n = /^[A-Za-z0-9_-]{1,96}$/,
  i = ["id", "materialId", "material_id", "code"];
function a() {
  return Date.now();
}
function o() {
  var r =
      arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0]
        : "diy_entry",
    e =
      String(r || "diy_entry")
        .replace(/[^A-Za-z0-9_-]/g, "")
        .slice(0, 24) || "diy_entry";
  return ""
    .concat(e, "_")
    .concat(a(), "_")
    .concat(Math.random().toString(36).slice(2, 8));
}
function s(r) {
  var e = String(r || "").trim();
  return n.test(e) ? e : "";
}
function u(r) {
  var e = Number(r);
  return Number.isFinite(e) && e > 0 ? e : null;
}
function c(r) {
  var e = String(r || "").trim();
  return /^[0-9]+$/.test(e) ? e : "";
}
function d(r) {
  var e = Number(r);
  return Number.isFinite(e) ? Math.max(0, Math.round(e)) : 0;
}
function l() {
  try {
    if ("function" != typeof getApp) return null;
    var e = getApp();
    return (
      e.globalData || (e.globalData = {}),
      (e.globalData.diyEntrySessions &&
        "object" === r(e.globalData.diyEntrySessions)) ||
        (e.globalData.diyEntrySessions = {}),
      e.globalData.diyEntrySessions
    );
  } catch (r) {
    return null;
  }
}
function y() {
  if ("undefined" == typeof wx || "function" != typeof wx.getStorageSync)
    return { version: 1, entries: {}, order: [] };
  try {
    var t = wx.getStorageSync(e),
      n = t && t.entries && "object" === r(t.entries) ? t.entries : {};
    return {
      version: 1,
      entries: n,
      order: Array.isArray(t && t.order) ? t.order : Object.keys(n),
    };
  } catch (r) {
    return { version: 1, entries: {}, order: [] };
  }
}
function m(e) {
  var l = e && "object" === r(e) ? e : {},
    y = s(l.entryId) || o(),
    m = (function (r) {
      return Array.isArray(r)
        ? r
            .map(function (r) {
              return String(null == r ? "" : r).trim();
            })
            .filter(function (r) {
              return n.test(r);
            })
        : [];
    })(l.pattern);
  if (!m.length) return null;
  var f = Number.isFinite(Number(l.createdAt)) ? Number(l.createdAt) : a(),
    p =
      Number.isFinite(Number(l.expiresAt)) && Number(l.expiresAt) > a()
        ? Number(l.expiresAt)
        : f + 12e4,
    v = (function (e) {
      var t = e && "object" === r(e) ? e : {},
        n = {};
      return (
        Object.keys(t).forEach(function (e) {
          var a = t[e] && "object" === r(t[e]) ? t[e] : null;
          if (a) {
            for (
              var o = String(e || "").trim(), s = 0;
              !o && s < i.length;
              s += 1
            )
              o = String(a[i[s]] || "").trim();
            o && !n[o] && (n[o] = Object.assign({}, a, { id: o }));
          }
        }),
        n
      );
    })(l.materialMap || l.materialSnapshot),
    b = t(l.renderPlan || l.render_plan, m),
    g = {
      version: 1,
      entryId: y,
      source: String(l.source || "").trim(),
      schemeId: String(l.schemeId || "").trim(),
      pattern: m,
      bgIndex: d(l.bgIndex),
      name: String(l.name || "")
        .trim()
        .slice(0, 64),
      materialMap: v,
      materialSnapshot: v,
      renderPlan: b,
      render_plan: b,
      createdAt: f,
      expiresAt: p,
    },
    _ = u(l.beadMm || l.bead_mm);
  _ && ((g.beadMm = _), (g.bead_mm = _));
  var S = u(l.previewRenderVersion || l.preview_render_version);
  S && ((g.previewRenderVersion = S), (g.preview_render_version = S));
  var I = c(l.sourceCreatorWorkId || l.source_creator_work_id);
  I && ((g.sourceCreatorWorkId = I), (g.source_creator_work_id = I));
  var A = c(l.sourceInspirationTemplateId || l.source_inspiration_template_id);
  A &&
    ((g.sourceInspirationTemplateId = A),
    (g.source_inspiration_template_id = A));
  var h = c(l.sourceDesignerId || l.source_designer_id);
  h && ((g.sourceDesignerId = h), (g.source_designer_id = h));
  var x = (function (r) {
    var e = String(r || "").trim();
    return /^[A-Za-z0-9_-]{1,64}$/.test(e) ? e : "";
  })(l.sourceEntry || l.source_entry || l.source);
  return x && ((g.sourceEntry = x), (g.source_entry = x)), g;
}
function f(e) {
  var t = a(),
    n = e && e.entries && "object" === r(e.entries) ? e.entries : {},
    i = Array.isArray(e && e.order) ? e.order.slice() : Object.keys(n);
  for (
    i = i.filter(function (r) {
      var e = n[r];
      return !(!e || Number(e.expiresAt || 0) <= t) || (delete n[r], !1);
    });
    i.length > 16;

  ) {
    var o = i.shift();
    delete n[o];
  }
  return { version: 1, entries: n, order: i };
}
module.exports = {
  buildDiyEntrySessionId: o,
  normalizeDiyEntrySession: m,
  saveDiyEntrySession: function (r) {
    var t = m(r);
    if (!t) return null;
    var n = l();
    n && (n[t.entryId] = t);
    var i = f(y());
    return (
      (i.entries[t.entryId] = t),
      (i.order = i.order.filter(function (r) {
        return r !== t.entryId;
      })),
      i.order.push(t.entryId),
      (function (r) {
        if ("undefined" != typeof wx && "function" == typeof wx.setStorageSync)
          try {
            wx.setStorageSync(e, r);
          } catch (r) {}
      })(f(i)),
      t
    );
  },
  readDiyEntrySession: function (r) {
    var e = s(r);
    if (!e) return null;
    var t = a(),
      n = l(),
      i = n && n[e] ? m(n[e]) : null;
    if (i && Number(i.expiresAt || 0) > t) return i;
    var o = y(),
      u = m(o.entries && o.entries[e]);
    return !u || Number(u.expiresAt || 0) <= t ? null : (n && (n[e] = u), u);
  },
};
