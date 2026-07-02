var e = require("../../@babel/runtime/helpers/typeof"),
  r = require("./preset-visual-model").toWorkCards;
function t(e, r) {
  var t = Number(e);
  return Number.isFinite(t) ? t : r;
}
function a(e, r) {
  var t = String(null == e ? "" : e).trim();
  return t || String(null == r ? "" : r).trim();
}
function i(r, t) {
  return (Array.isArray(r) ? r : [])
    .map(function (r, t) {
      var i = r && "object" === e(r) ? r : {},
        n = a(i.id, "bead_".concat(t + 1)),
        o = a(i.name || i.label, n),
        l = a(i.size, "");
      return { id: n, label: o, desc: l ? "".concat(l, "mm") : "" };
    })
    .filter(function (e) {
      return e.label;
    })
    .slice(0, t);
}
function n(e, t) {
  return r(e, t).map(function (e) {
    return {
      id: a(e.id, ""),
      title: a(e.title, "灵感方案"),
      imageUrl: a(e.imageUrl, ""),
      categoryLabel: a(e.categoryLabel, "设计师款"),
      likesText: a(e.likesText, "0.0k"),
    };
  });
}
module.exports = {
  toWorkshopRouteModel: function (r, o) {
    var l,
      s,
      u = r && "object" === e(r) ? r : {},
      c = o && "object" === e(o) ? o : {},
      y = Array.isArray(u.trayBgs) ? u.trayBgs : [],
      g = Array.isArray(u.beadTypes) ? u.beadTypes : [],
      b = Array.isArray(u.mainCategories) ? u.mainCategories : [],
      m = Array.isArray(u.presets) ? u.presets : [],
      d = !!c.error,
      p = d
        ? String(
            (c.error && (c.error.message || c.error.code)) ||
              "WORKSHOP_DATA_UNAVAILABLE"
          )
        : "";
    return {
      pageTitle: "DIY 工坊",
      pageDesc: "DIY 核心交互由主容器承载，本页仅用于兼容回落。",
      trayCount: t(y.length, 0),
      beadTypeCount: t(g.length, 0),
      categoryCount: t(b.length, 0),
      presetCount: t(m.length, 0),
      categoryPreview:
        ((l = b),
        (s = 8),
        (Array.isArray(l) ? l : [])
          .map(function (r, t) {
            var i = r && "object" === e(r) ? r : {},
              n = a(i.id, "category_".concat(t + 1));
            return { id: n, label: a(i.label || i.name, n) };
          })
          .filter(function (e) {
            return e.label;
          })
          .slice(0, s)),
      presetPreview: n(u, 8),
      beadPreview: i(g, 10),
      ready: !d,
      errorMessage: p,
    };
  },
};
