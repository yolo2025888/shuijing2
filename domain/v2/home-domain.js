var e = require("../../@babel/runtime/helpers/typeof"),
  t = require("./preset-visual-model"),
  r = t.toFilterItems,
  i = t.toWorkCards,
  o = t.filterWorksByCategory,
  n = Object.freeze([
    {
      id: "hero_slide_1",
      imageUrl:
        "https://images.unsplash.com/photo-1659032882718-3e54e7da86ab?auto=format&fit=crop&w=1200&q=80",
      title: "把你的审美，做成作品",
      subtitle: "从天然珠材到成品佩戴，在这里完成一条属于你的手串作品。",
      actionTab: "workshop",
    },
    {
      id: "hero_slide_2",
      imageUrl:
        "https://images.unsplash.com/photo-1644292954987-5d8faeb10be9?auto=format&fit=crop&w=1200&q=80",
      title: "把你的审美，做成作品",
      subtitle: "从天然珠材到成品佩戴，在这里完成一条属于你的手串作品。",
      actionTab: "inspiration",
    },
    {
      id: "hero_slide_3",
      imageUrl:
        "https://images.unsplash.com/photo-1768102365643-2afa10b70f31?auto=format&fit=crop&w=1200&q=80",
      title: "把你的审美，做成作品",
      subtitle: "从天然珠材到成品佩戴，在这里完成一条属于你的手串作品。",
      actionTab: "workshop",
    },
  ]),
  l = Object.freeze([
    { id: "workshop", label: "开始设计" },
    { id: "inspiration", label: "探索灵感" },
  ]);
function a(e, t) {
  var r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function s(e, t) {
  var r = String(null == e ? "" : e).trim();
  return r || String(null == t ? "" : t).trim();
}
module.exports = {
  toHomeRouteModel: function (t, u) {
    var c = t && "object" === e(t) ? t : {},
      h = u && "object" === e(u) ? u : {},
      b = !!h.error,
      g = b
        ? String(
            (h.error && (h.error.message || h.error.code)) ||
              "HOME_DATA_UNAVAILABLE"
          )
        : "",
      d = i(c, 48),
      m = r(d),
      p = o(d, "all"),
      f = (Array.isArray(c.heroCards) ? c.heroCards : [])
        .map(function (t, r) {
          return (function (t, r) {
            if (!t || "object" !== e(t)) return null;
            var i = s(t.imageUrl || t.url || t.cover, "");
            if (!i) return null;
            var o = s(t.actionTab || t.action || t.tab, "workshop"),
              n = "featured" === o ? "inspiration" : o;
            return {
              id: s(t.id, "hero_slide_".concat(r + 1)),
              imageUrl: i,
              title: s(t.title, "把你的审美，做成作品"),
              subtitle: s(
                t.subtitle || t.desc,
                "从天然珠材到成品佩戴，在这里完成一条属于你的手串作品。"
              ),
              actionTab: n,
            };
          })(t, r);
        })
        .filter(Boolean)
        .slice(0, 3),
      k = (Array.isArray(c.quickEntries) ? c.quickEntries : [])
        .map(function (t) {
          return (function (t) {
            if (!t || "object" !== e(t)) return null;
            var r = s(t.id || t.tabId || t.key, "");
            return r ? { id: r, label: s(t.label || t.name, r) } : null;
          })(t);
        })
        .filter(Boolean)
        .slice(0, 2);
    return {
      pageTitle: "首页",
      pageDesc: "升级首页（轮播 + 灵感探索）",
      sectionDesignerTitle: "创作者成长计划",
      sectionWorksTitle: "精选案例",
      sectionCtaTitle: "创作者成长计划",
      sectionCtaDesc: "分享你的灵感作品，连接更多热爱手作的人。",
      sectionCtaButtonText: "立即加入",
      heroCount: a(f.length || n.length, 0),
      quickEntryCount: a(k.length || l.length, 0),
      heroPreview: f.length ? f : n.slice(),
      quickEntryPreview: k.length ? k : l.slice(),
      hotDesigners: [],
      designerCount: 0,
      workFilters: m,
      activeFilter: "all",
      allWorks: d,
      works: p,
      workCount: a(d.length, 0),
      visibleCount: a(p.length, 0),
      hasWorks: p.length > 0,
      hasDesigners: !1,
      ready: !b,
      errorMessage: g,
    };
  },
};
