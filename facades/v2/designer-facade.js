var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../@babel/runtime/helpers/typeof"),
  n = require("../../repositories/catalogRepository").getBootstrapData,
  o = require("../../domain/v2/designer-domain").buildDesignerPageModel,
  a =
    require("../../repositories/creatorPublicRepository").fetchCreatorPublicProfile,
  i = require("../../utils/media-url").resolveRemoteMediaUrl,
  s = require("../../utils/catalog"),
  u = s.applyRuntimeCatalogSnapshot,
  c = s.resolveAssetPath;
function d(e) {
  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
    t = String(null == e ? "" : e).trim();
  return t || String(null == r ? "" : r).trim();
}
function l(e) {
  var r = Number(e);
  return !Number.isFinite(r) || r <= 0 ? 0 : Math.max(0, Math.floor(r));
}
function p(e) {
  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
    t = Number(e);
  return !Number.isFinite(t) || t <= 0 ? r : Math.floor(t);
}
function g(e) {
  var r = String(e.creatorUserId || "").trim();
  if (/^\d+$/.test(r)) return { creatorId: Number(r), idType: "user" };
  var t = String(e.designerId || "").trim();
  return /^\d+$/.test(t)
    ? { creatorId: Number(t), idType: "auto" }
    : { creatorId: 0, idType: "auto" };
}
function m(e, r) {
  var n = e && "object" === t(e) ? e : {},
    o = n.profile && "object" === t(n.profile) ? n.profile : {},
    a = n.stats && "object" === t(n.stats) ? n.stats : {},
    s = Array.isArray(n.works) ? n.works : [],
    u = d(o.displayName || o.display_name, r.designerName || "StoneLab."),
    g = i(d(o.avatarUrl || o.avatar_url, "")) || "",
    m = s.map(function (e, r) {
      var n = e && "object" === t(e) ? e : {},
        a = d(n.id, d(n.code, "work_".concat(r + 1))),
        s = (function (e) {
          for (
            var r = e && "object" === t(e) ? e : {},
              n = r.snapshot && "object" === t(r.snapshot) ? r.snapshot : {},
              o = r.preview && "object" === t(r.preview) ? r.preview : {},
              a = [
                r.previewUrl,
                r.preview_url,
                r.snapshotUrl,
                r.snapshot_url,
                o.url,
                o.src,
                n.url,
                n.src,
              ],
              s = 0;
            s < a.length;
            s += 1
          ) {
            var u = i(d(c(a[s]), a[s]));
            if (u) return u;
          }
          return "";
        })(n),
        m = d(
          n.sourceDesignerName ||
            n.source_designer_name ||
            n.authorName ||
            n.author_name,
          u
        ),
        f = s
          ? (function (e) {
              for (
                var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 4,
                  t = Array.isArray(e) ? e : [],
                  n = [],
                  o = new Set(),
                  a = 0;
                a < t.length;
                a += 1
              ) {
                var s = i(d(t[a], ""));
                if (s && !o.has(s) && (o.add(s), n.push(s), n.length >= r))
                  break;
              }
              return n;
            })([s], 1)
          : [];
      return {
        id: a,
        presetId: a,
        img: s,
        title: d(n.name, "Design Work ".concat(r + 1)),
        quoteCount: l(n.quoteCount || n.quote_count),
        viewCount: l(n.viewCount || n.view_count),
        category: d(n.category, "designer"),
        pattern: Array.isArray(n.pattern)
          ? n.pattern
              .map(function (e) {
                return String(e || "").trim();
              })
              .filter(Boolean)
          : [],
        previewUrl: s,
        previewRenderVersion: p(
          n.previewRenderVersion || n.preview_render_version,
          1
        ),
        images: f,
        sourceDesignerId: d(
          n.sourceDesignerId || n.source_designer_id,
          String(o.userId || o.user_id || "")
        ),
        creatorWorkId: d(n.creatorWorkId || n.creator_work_id, ""),
        creator_work_id: d(n.creatorWorkId || n.creator_work_id, ""),
        sourceDesignerName: m,
        sourceDesignerBio: d(
          n.sourceDesignerBio || n.source_designer_bio,
          d(o.bio, "")
        ),
        sourceDesignerPublishedWorksCount: l(
          n.sourceDesignerPublishedWorksCount ||
            n.source_designer_published_works_count
        ),
        sourceDesignerTotalQuoteCount: l(
          n.sourceDesignerTotalQuoteCount || n.source_designer_total_quote_count
        ),
        sourceDesignerTotalIncomeAmountCent: l(
          n.sourceDesignerTotalIncomeAmountCent ||
            n.source_designer_total_income_amount_cent
        ),
        sourceDesignerTotalIncomeText: d(
          n.sourceDesignerTotalIncomeText ||
            n.source_designer_total_income_text,
          "¥0.00"
        ),
        authorName: m,
        authorAvatar:
          i(
            d(
              n.sourceDesignerAvatar ||
                n.source_designer_avatar ||
                n.authorAvatar ||
                n.author_avatar,
              g
            )
          ) || g,
      };
    }),
    f = i(d(o.coverUrl || o.cover_url, "")),
    v = l(a.publishedWorksCount || a.published_works_count || m.length),
    b = l(a.totalQuoteCount || a.total_quote_count);
  return {
    id: d(o.userId, d(r.creatorUserId, r.designerId || "designer")),
    name: u,
    role: "共创设计师",
    bio: d(o.bio, ""),
    tags: [],
    avatar: g,
    cover: f,
    works: m,
    stats: [
      { label: "已发布作品", value: String(v) },
      { label: "引用数量", value: String(b) },
    ],
  };
}
function f(e) {
  var r = e && "object" === t(e) ? e : {},
    n = Number(r.creatorId || 0);
  if (!Number.isFinite(n) || n <= 0) return "";
  var o =
    String(r.idType || "auto")
      .trim()
      .toLowerCase() || "auto";
  return ""
    .concat("stonelab_designer_public_profile_v1:")
    .concat(o, ":")
    .concat(n);
}
function v(e) {
  var r = f(e);
  if (!r || "undefined" == typeof wx || "function" != typeof wx.getStorageSync)
    return null;
  try {
    var n = wx.getStorageSync(r);
    if (!n || "object" !== t(n)) return null;
    var o = Number(n.cachedAt || 0);
    return !o || Date.now() - o > 3e5
      ? null
      : n.payload && "object" === t(n.payload)
      ? n.payload
      : null;
  } catch (e) {
    return null;
  }
}
function b(e, r) {
  var n = f(e);
  if (
    n &&
    r &&
    "object" === t(r) &&
    "undefined" != typeof wx &&
    "function" == typeof wx.setStorageSync
  )
    try {
      wx.setStorageSync(n, { cachedAt: Date.now(), payload: r });
    } catch (e) {}
}
function h(e) {
  return _.apply(this, arguments);
}
function _() {
  return (_ = r(
    e().mark(function r(o) {
      var a, i;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (a = o && "object" === t(o) ? o : {}),
                (e.next = 3),
                n({
                  forceRemote: !0 === a.forceRemote,
                  preferCache: !1 !== a.preferCache,
                  revalidateInBackground: !1 !== a.revalidateInBackground,
                  skipBackgroundRefresh: !0 === a.skipBackgroundRefresh,
                })
              );
            case 3:
              return (i = e.sent), u(i), e.abrupt("return", i);
            case 6:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function y(e) {
  var r = e && "object" === t(e) ? e : {};
  return {
    designerId: String(r.designerId || "")
      .trim()
      .toLowerCase(),
    designerName: String(r.designerName || "").trim(),
    creatorUserId: String(r.creatorUserId || "").trim(),
    forceRemote: !0 === r.forceRemote,
    revalidateInBackground: !1 !== r.revalidateInBackground,
    skipBackgroundRefresh: !0 === r.skipBackgroundRefresh,
    allowLegacyBootstrapFallback: !0 === r.allowLegacyBootstrapFallback,
  };
}
function I() {
  return (I = r(
    e().mark(function r(t) {
      var n, i, s, u, c, d, l;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((n = y(t)),
                  (i = g(n)),
                  (s = n && !0 === n.allowLegacyBootstrapFallback),
                  !(i.creatorId > 0))
                ) {
                  e.next = 20;
                  break;
                }
                if (n.forceRemote) {
                  e.next = 8;
                  break;
                }
                if (!(u = v(i))) {
                  e.next = 8;
                  break;
                }
                return e.abrupt("return", m(u, n));
              case 8:
                return (
                  (e.prev = 8),
                  (e.next = 11),
                  a(i.creatorId, { page: 1, pageSize: 24, idType: i.idType })
                );
              case 11:
                return (c = e.sent), b(i, c), e.abrupt("return", m(c, n));
              case 16:
                if (((e.prev = 16), (e.t0 = e.catch(8)), s)) {
                  e.next = 20;
                  break;
                }
                return e.abrupt(
                  "return",
                  m(
                    {
                      profile: {
                        userId: i.creatorId,
                        displayName: n.designerName || "StoneLab.",
                      },
                      stats: {},
                      works: [],
                    },
                    n
                  )
                );
              case 20:
                if (s) {
                  e.next = 22;
                  break;
                }
                return e.abrupt(
                  "return",
                  o({
                    designerId: n.designerId,
                    designerName: n.designerName,
                    creatorUserId: n.creatorUserId,
                    presets: [],
                  })
                );
              case 22:
                return (
                  (e.prev = 22),
                  (e.next = 25),
                  h(n).catch(function () {
                    return null;
                  })
                );
              case 25:
                return (
                  (d = e.sent),
                  (l = Array.isArray(d && d.presets) ? d.presets : []),
                  e.abrupt(
                    "return",
                    o({
                      designerId: n.designerId,
                      designerName: n.designerName,
                      creatorUserId: n.creatorUserId,
                      presets: l,
                    })
                  )
                );
              case 30:
                return (
                  (e.prev = 30),
                  (e.t1 = e.catch(22)),
                  e.abrupt(
                    "return",
                    o({
                      designerId: n.designerId,
                      designerName: n.designerName,
                      creatorUserId: n.creatorUserId,
                      presets: [],
                    })
                  )
                );
              case 33:
              case "end":
                return e.stop();
            }
        },
        r,
        null,
        [
          [8, 16],
          [22, 30],
        ]
      );
    })
  )).apply(this, arguments);
}
module.exports = {
  loadDesignerPageModel: function (e) {
    return I.apply(this, arguments);
  },
  normalizeDesignerOptions: y,
};
