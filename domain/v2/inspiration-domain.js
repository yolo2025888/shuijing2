var e = require("../../@babel/runtime/helpers/typeof"),
  r = require("./preset-visual-model"),
  t = r.toDesignerCards,
  s = r.toFilterItems,
  o = r.toWorkCards,
  i = r.filterWorksByCategory;
function n(e, r) {
  var t = Number(e);
  return Number.isFinite(t) ? t : r;
}
function a(e, r) {
  return (Array.isArray(e) ? e : [])
    .map(function (e) {
      return String((e && (e.label || e.name || e.id || "")) || "").trim();
    })
    .filter(Boolean)
    .slice(0, r);
}
module.exports = {
  toInspirationRouteModel: function (r, l) {
    var g = r && "object" === e(r) ? r : {},
      u = l && "object" === e(l) ? l : {},
      c = !!u.error,
      p = c
        ? String(
            (u.error && (u.error.message || u.error.code)) ||
              "INSPIRATION_DATA_UNAVAILABLE"
          )
        : "",
      C = Array.isArray(g.presetCategories) ? g.presetCategories : [],
      y = Array.isArray(g.presets) ? g.presets : [],
      A = o(g, 64),
      h = s(A),
      m = i(A, "all"),
      d = t(g, 12);
    return {
      pageTitle: "手串灵感",
      pageDesc: "本周热门设计师与精选设计师款",
      sectionDesignerTitle: "本周热门设计师",
      sectionWorksTitle: "设计师款",
      sectionCtaTitle: "成为首批设计师",
      sectionCtaDesc: "发布你的搭配方案，作品被下单后可获得设计收益。",
      sectionCtaButtonText: "立即入驻",
      categoryCount: n(C.length, 0),
      presetCount: n(y.length, 0),
      categoryPreview: a(C, 8),
      presetPreview: a(y, 8),
      hotDesigners: d,
      designerCount: n(d.length, 0),
      workFilters: h,
      activeFilter: "all",
      allWorks: A,
      works: m,
      workCount: n(A.length, 0),
      visibleCount: n(m.length, 0),
      hasWorks: m.length > 0,
      hasDesigners: d.length > 0,
      ready: !c,
      errorMessage: p,
    };
  },
};
