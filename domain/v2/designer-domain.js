var e = require("../../@babel/runtime/helpers/typeof"),
  r = require("../../utils/media-url").resolveRemoteMediaUrl,
  t = require("../../utils/catalog").resolveAssetPath,
  o = Object.freeze({
    id: "designer",
    name: "StoneLab.",
    role: "共创设计师",
    bio: "",
    tags: Object.freeze([]),
    avatar: "",
    cover: "",
  });
Object.freeze([
  "https://images.unsplash.com/photo-1764777859336-f83610548f93?w=600",
  "https://images.unsplash.com/photo-1685489807290-199befdb1f13?w=600",
  "https://images.unsplash.com/photo-1658151134766-1a7d3c9d0103?w=600",
  "https://images.unsplash.com/photo-1603041730317-b395e9a63a33?w=600",
  "https://images.unsplash.com/photo-1732045143848-1b1581fcf3e2?w=600",
  "https://images.unsplash.com/photo-1758624433298-58cd64cebaad?w=600",
]);
function n(e) {
  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
    t = String(null == e ? "" : e).trim();
  return t || String(null == r ? "" : r).trim();
}
function a(e) {
  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    t = Number(e);
  return Number.isFinite(t) ? t : r;
}
function i(e) {
  var r = Number(e);
  return !Number.isFinite(r) || r <= 0 ? 0 : Math.max(0, Math.floor(r));
}
function u(e) {
  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
    t = Number(e);
  return !Number.isFinite(t) || t <= 0 ? r : Math.floor(t);
}
function s(e) {
  var r = String(null == e ? "" : e).trim();
  if (!r) return "";
  if (/^\d+(\.0+)?$/.test(r)) {
    var t = Number(r);
    if (Number.isFinite(t) && t > 0) return String(Math.floor(t));
  }
  var o = r.match(/\d+/);
  if (o && o[0]) {
    var n = Number(o[0]);
    if (Number.isFinite(n) && n > 0) return String(Math.floor(n));
  }
  return r.toLowerCase();
}
function c(e) {
  var r = String(null == e ? "" : e)
    .trim()
    .toLowerCase();
  return r ? r.replace(/\s+/g, "") : "";
}
function l(e) {
  return {
    id: n(e, o.id).toLowerCase(),
    name: o.name,
    role: o.role,
    bio: o.bio,
    tags: o.tags.slice(),
    avatar: o.avatar,
    cover: o.cover,
  };
}
function g(r) {
  var t = r && "object" === e(r) ? r : {},
    a = n(
      t.designerId ||
        t.designer_id ||
        t.sourceDesignerId ||
        t.source_designer_id ||
        t.authorId ||
        t.author_id ||
        t.creatorUserId ||
        t.creator_user_id,
      ""
    ).toLowerCase();
  return a || o.id;
}
function m(r) {
  var t = r && "object" === e(r) ? r : {};
  return s(
    t.sourceDesignerId ||
      t.source_designer_id ||
      t.authorId ||
      t.author_id ||
      t.creatorUserId ||
      t.creator_user_id
  );
}
function d(o, s, c) {
  var l = o && "object" === e(o) ? o : {},
    m = n(l.id, "");
  if (!m) return null;
  var d = g(l),
    v = n(
      l.authorName ||
        l.author_name ||
        l.creatorName ||
        l.creator_name ||
        l.sourceDesignerName ||
        l.source_designer_name,
      c.name
    ),
    h = n(
      l.authorAvatar ||
        l.author_avatar ||
        l.avatar ||
        l.creatorAvatar ||
        l.creator_avatar,
      c.avatar
    ),
    f = r(h) || c.avatar,
    b = Array.isArray(l.pattern)
      ? l.pattern
          .map(function (e) {
            return n(e, "");
          })
          .filter(Boolean)
      : [],
    p = (function (o) {
      for (
        var a = o && "object" === e(o) ? o : {},
          i = a.snapshot && "object" === e(a.snapshot) ? a.snapshot : {},
          u = a.preview && "object" === e(a.preview) ? a.preview : {},
          s = [
            a.previewUrl,
            a.preview_url,
            a.snapshotUrl,
            a.snapshot_url,
            u.url,
            u.src,
            i.url,
            i.src,
          ],
          c = 0;
        c < s.length;
        c += 1
      ) {
        var l = r(n(t(s[c]), s[c]));
        if (l) return l;
      }
      return "";
    })(l),
    _ = p
      ? (function (e) {
          for (
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 4,
              o = Array.isArray(e) ? e : [],
              a = [],
              i = new Set(),
              u = 0;
            u < o.length;
            u += 1
          ) {
            var s = r(n(o[u], ""));
            if (s && !i.has(s) && (i.add(s), a.push(s), a.length >= t)) break;
          }
          return a;
        })([p], 1)
      : [],
    C = i(l.quoteCount || l.quote_count),
    I = i(l.viewCount || l.view_count),
    D = (function (r) {
      var t = r && "object" === e(r) ? r : {};
      return {
        publishedWorksCount: i(
          t.sourceDesignerPublishedWorksCount ||
            t.source_designer_published_works_count
        ),
        totalQuoteCount: i(
          t.sourceDesignerTotalQuoteCount || t.source_designer_total_quote_count
        ),
        totalIncomeAmountCent: i(
          t.sourceDesignerTotalIncomeAmountCent ||
            t.source_designer_total_income_amount_cent
        ),
        totalIncomeText: n(
          t.sourceDesignerTotalIncomeText ||
            t.source_designer_total_income_text,
          ""
        ),
      };
    })(l);
  return {
    id: m,
    presetId: m,
    img: p,
    title: n(l.name, "Design Work ".concat(s + 1)),
    quoteCount: C,
    viewCount: I,
    bgIndex: a(l.bgIndex, 0),
    category: n(l.category, "designer"),
    pattern: b,
    images: _,
    previewUrl: p,
    previewRenderVersion: u(
      l.previewRenderVersion || l.preview_render_version,
      1
    ),
    designerId: d,
    sourceDesignerId: n(l.sourceDesignerId || l.source_designer_id, d),
    sourceDesignerName: n(l.sourceDesignerName || l.source_designer_name, v),
    sourceDesignerBio: n(l.sourceDesignerBio || l.source_designer_bio, ""),
    sourceDesignerPublishedWorksCount: D.publishedWorksCount,
    sourceDesignerTotalQuoteCount: D.totalQuoteCount,
    sourceDesignerTotalIncomeAmountCent: D.totalIncomeAmountCent,
    sourceDesignerTotalIncomeText: D.totalIncomeText,
    authorName: v,
    authorAvatar: f,
  };
}
function v(r) {
  var t,
    o = Array.isArray(r) ? r : [],
    a = 0,
    u = 0,
    s = 0,
    c = "";
  return (
    o.forEach(function (r) {
      var t = r && "object" === e(r) ? r : {};
      (a = Math.max(a, i(t.sourceDesignerPublishedWorksCount))),
        (u = Math.max(u, i(t.sourceDesignerTotalQuoteCount))),
        (s = Math.max(s, i(t.sourceDesignerTotalIncomeAmountCent))),
        c || (c = n(t.sourceDesignerTotalIncomeText, ""));
    }),
    a || (a = o.length),
    u ||
      (u = o.reduce(function (r, t) {
        return r + i((t && "object" === e(t) ? t : {}).quoteCount);
      }, 0)),
    c || ((t = i(s)), (c = t ? "¥".concat((t / 100).toFixed(2)) : "¥0.00")),
    {
      publishedWorksCount: a,
      totalQuoteCount: u,
      totalIncomeAmountCent: s,
      totalIncomeText: c,
    }
  );
}
function h(r, t) {
  var o = Array.isArray(r) ? r : [],
    n = t && "object" === e(t) ? t : v(o);
  return [
    { label: "已发布作品", value: String(i(n.publishedWorksCount)) },
    { label: "引用数量", value: String(i(n.totalQuoteCount)) },
  ];
}
module.exports = {
  buildDesignerPageModel: function (r) {
    var t = r && "object" === e(r) ? r : {},
      a = s(t.creatorUserId),
      i = n(t.designerId, o.id).toLowerCase(),
      u = l(i),
      f = a
        ? (function (e, r, t) {
            var o = Array.isArray(e) ? e : [],
              n = s(r);
            if (!n) return [];
            var a = o
              .filter(function (e) {
                return m(e) === n;
              })
              .slice(0, 20);
            if (a.length > 0) return a;
            var i = s(t);
            return i
              ? o
                  .filter(function (e) {
                    return s(g(e)) === i;
                  })
                  .slice(0, 20)
              : [];
          })(t.presets, a, i)
        : (function (r, t, o) {
            var n = Array.isArray(r) ? r : [],
              a = s(t);
            if (a) {
              var i = n.filter(function (e) {
                var r = s(g(e));
                if (r && r === a) return !0;
                var t = m(e);
                return t && t === a;
              });
              if (i.length) return i.slice(0, 20);
            }
            var u = c(o);
            if (u) {
              var l = n.filter(function (r) {
                var t = r && "object" === e(r) ? r : {},
                  o = c(
                    t.sourceDesignerName ||
                      t.source_designer_name ||
                      t.authorName ||
                      t.author_name ||
                      t.creatorName ||
                      t.creator_name ||
                      ""
                  );
                return o && o === u;
              });
              return l.length ? l.slice(0, 20) : [];
            }
            if (a && "designer" !== a) return [];
            var d = n.filter(function (e) {
              return (
                "designer" ===
                String((e && e.category) || "")
                  .trim()
                  .toLowerCase()
              );
            });
            return d.length ? d.slice(0, 20) : n.slice(0, 20);
          })(t.presets, i, t.designerName),
      b = Object.create(null),
      p = f
        .map(function (e, r) {
          return d(e, r, u);
        })
        .filter(function (e) {
          if (!e) return !1;
          var r = String(e.presetId || e.id || "").trim();
          return !!r && !b[r] && ((b[r] = !0), !0);
        }),
      _ = p[0] || {},
      C = v(p),
      I = n(t.designerName || _.sourceDesignerName || _.authorName, u.name),
      D = n(_.authorAvatar, u.avatar),
      w = n(_.sourceDesignerBio, u.bio);
    return {
      id: n(a, i || u.id),
      name: I,
      role: u.role,
      bio: w,
      tags: u.tags.slice(),
      avatar: D,
      cover: "",
      works: p,
      stats: h(p, C),
    };
  },
  resolveDesignerIdByPreset: g,
  getDesignerProfileById: l,
};
