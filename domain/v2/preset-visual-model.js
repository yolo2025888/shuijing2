var r = require("../../@babel/runtime/helpers/typeof");
function e(r, e) {
  var t = String(null == r ? "" : r).trim();
  return t || String(null == e ? "" : e).trim();
}
function t(r) {
  return Array.isArray(r) ? r : [];
}
function a(r) {
  var e = r % 10;
  return "".concat((r % 9) + 1, ".").concat(e, "k");
}
function n(n, i) {
  var c = t(n && n.presets),
    o = (function (a) {
      var n = t(a && a.presetCategories),
        i = Object.create(null);
      return (
        n.forEach(function (t) {
          if (t && "object" === r(t)) {
            var a = e(t.id, "");
            a && (i[a] = e(t.label, a));
          }
        }),
        i
      );
    })(n),
    u = (function (e) {
      var a = t(e && e.trayBgs).find(function (e) {
        return e && "object" === r(e) && e.url;
      });
      return a && a.url ? String(a.url) : "";
    })(n),
    l = Number.isFinite(Number(i)) ? Math.max(0, Number(i)) : c.length;
  return c.slice(0, l).map(function (t, n) {
    return (function (t, n, i, c) {
      var o = t && "object" === r(t) ? t : {},
        u = e(o.id, "preset_".concat(n + 1)),
        l = e(o.name, "灵感方案 ".concat(n + 1)),
        s = e(o.category, "designer"),
        g = e(i[s], "设计师款");
      return {
        id: u,
        title: l,
        categoryId: s,
        categoryLabel: g,
        imageUrl: e(o.previewUrl, c),
        authorName: "".concat(g, "设计"),
        likesText: a(n),
        tags: [g],
      };
    })(t, n, o, u);
  });
}
module.exports = {
  toWorkCards: n,
  toFilterItems: function (r) {
    var a = t(r),
      n = Object.create(null),
      i = [{ key: "all", label: "全部" }];
    return (
      a.forEach(function (r) {
        var t = e(r && r.categoryId, ""),
          a = e(r && r.categoryLabel, "");
        t && a && !n[t] && ((n[t] = !0), i.push({ key: t, label: a }));
      }),
      i
    );
  },
  toDesignerCards: function (r, e) {
    var t = n(r, 128),
      a = Object.create(null);
    t.forEach(function (r) {
      var e = r.categoryId || "designer";
      a[e] ||
        (a[e] = {
          id: e,
          name: r.categoryLabel,
          subtitle: "灵感风格专题",
          avatarUrl: r.imageUrl,
          tags: [r.categoryLabel, "精选"],
          works: 0,
        }),
        (a[e].works += 1);
    });
    var i = Object.keys(a).map(function (r, e) {
        var t = a[r],
          n = Number(t.works || 0),
          i = 388 * n + 120 * e,
          c = 1.3 * n + 0.4 * e;
        return {
          id: t.id,
          name: t.name,
          subtitle: t.subtitle,
          avatarUrl: t.avatarUrl,
          tags: t.tags,
          worksText: String(n),
          earningsText: "¥".concat(i.toLocaleString("en-US")),
          popularityText: "".concat(c.toFixed(1), "k"),
        };
      }),
      c = Number.isFinite(Number(e)) ? Math.max(0, Number(e)) : i.length;
    return i.slice(0, c);
  },
  filterWorksByCategory: function (r, a) {
    var n = t(r),
      i = e(a, "all");
    return i && "all" !== i
      ? n.filter(function (r) {
          return e(r && r.categoryId, "") === i;
        })
      : n.slice();
  },
};
