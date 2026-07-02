var r = require("../../../../../@babel/runtime/helpers/typeof");
function e(r) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
    t = String(r || "").trim();
  return t || String(e || "").trim();
}
function t(r, e, t, n) {
  var a = Number(r);
  return Number.isFinite(a) ? Math.max(t, Math.min(n, a)) : e;
}
function n(r, e) {
  if (!0 === r || !1 === r) return r;
  var t = String(null == r ? "" : r)
    .trim()
    .toLowerCase();
  if ("1" === t || "true" === t || "yes" === t || "on" === t) return !0;
  if ("0" === t || "false" === t || "no" === t || "off" === t) return !1;
  var n = Number(r);
  return Number.isFinite(n) ? 1 === n : e;
}
function a(a, i) {
  var o = a && "object" === r(a) ? a : {},
    u = t(o.titleFontSize || o.title_font_size, 0, 0, 120),
    c = t(o.descFontSize || o.desc_font_size, 0, 0, 80);
  return {
    id: e(o.id, "slide_".concat(i + 1)),
    image: e(o.image || o.imageUrl || o.url),
    enabled: n(o.enabled, !0),
    tag: e(o.tag),
    title: e(o.title),
    desc: e(o.desc || o.description),
    titleFontSize: u > 0 ? Math.round(u) : 0,
    descFontSize: c > 0 ? Math.round(c) : 0,
    targetPath: e(o.targetPath || o.path || o.jumpPath),
  };
}
function i(n, a) {
  var i = n && "object" === r(n) ? n : {},
    o = Math.round(10 * t(i.rating, 4.8, 0, 5)) / 10,
    u = Number(i.creatorId || i.creator_id || 0),
    c = Number(i.creatorUserId || i.creator_user_id || 0),
    s =
      Number.isFinite(c) && c > 0
        ? String(Math.round(c))
        : "designer_".concat(a + 1);
  return {
    id: e(i.id, s),
    creatorId: Number.isFinite(u) && u > 0 ? Math.round(u) : "",
    creatorUserId: Number.isFinite(c) && c > 0 ? Math.round(c) : "",
    name: e(i.name || i.displayName || i.nickname),
    role: e(i.role || i.bio),
    avatar: e(i.avatar || i.avatarUrl),
    cover: e(i.cover || i.coverUrl || i.avatar || i.avatarUrl),
    works: Math.round(t(i.works, 0, 0, 999999)),
    income: e(i.income || i.earnings),
    rating: o,
  };
}
function o(t) {
  var n = Array.isArray(t) ? t : [],
    a = [],
    i = Object.create(null);
  return (
    n.forEach(function (t, n) {
      var o = t && "object" === r(t) ? t : {},
        u = Number(o.creatorUserId || 0),
        c = Number(o.creatorId || 0),
        s = e(o.id, "").toLowerCase(),
        d = e(o.name, "").toLowerCase(),
        l =
          u > 0
            ? "user:".concat(u)
            : c > 0
            ? "creator:".concat(c)
            : s
            ? "id:".concat(s)
            : d
            ? "name:".concat(d)
            : "idx:".concat(n);
      i[l] || ((i[l] = !0), a.push(o));
    }),
    a
  );
}
module.exports = {
  resolveHomeSlides: function (e, t) {
    var n = e && "object" === r(e) ? e : {},
      i = Array.isArray(n.slides) ? n.slides : [],
      o = i
        .map(function (r, e) {
          return a(r, e);
        })
        .filter(function (r) {
          return r.image && !1 !== r.enabled;
        });
    if (i.length > 0) return o;
    var u,
      c,
      s = (Array.isArray(t) ? t : [])
        .map(function (r, e) {
          return a(r, e);
        })
        .filter(function (r) {
          return r.image && !1 !== r.enabled;
        });
    return (
      (u = s),
      (c = Array.isArray(u) ? u : []).length > 0
        ? c
        : [
            {
              id: "fallback_slide",
              image:
                "https://stonlab-1g57aqhi841eebf4-1307595304.tcloudbaseapp.com/assets/home/artisan/stonelab5.webp",
              enabled: !0,
              tag: "",
              title: "StoneLab",
              desc: "",
              targetPath: "",
            },
          ]
    );
  },
  resolveHomeDesigners: function (e, t) {
    var n = e && "object" === r(e) ? e : {},
      a = (Array.isArray(n.residentDesigners) ? n.residentDesigners : [])
        .map(function (r, e) {
          return i(r, e);
        })
        .filter(function (r) {
          return r.name || r.creatorId || r.creatorUserId;
        });
    return a.length > 0
      ? o(a)
      : o(
          (Array.isArray(t) ? t : [])
            .map(function (r, e) {
              return i(r, e);
            })
            .filter(function (r) {
              return r.name || r.creatorId || r.creatorUserId;
            })
        );
  },
  resolveHomeConfigRuntimeMeta: function (e, t) {
    var n = e && "object" === r(e) ? e : {},
      a = t && "object" === r(t) ? t : {};
    return {
      source:
        String(a.runtimeSource || "builtin_fallback").trim() ||
        "builtin_fallback",
      version: String(n.version || n.configVersion || "").trim(),
      updatedAt: String(n.updatedAt || n.updated_at || "").trim(),
      cachedAt: Number(a.runtimeCachedAt || 0) || 0,
    };
  },
  clampHomeSlideIndex: function (r, e) {
    var t = Number(e);
    if (!Number.isFinite(t) || t <= 0) return 0;
    var n = Number(r);
    if (!Number.isFinite(n) || n < 0) return 0;
    var a = Math.floor(n);
    return a >= t ? t - 1 : a;
  },
  resolvePreferredTrayBgIndex: function (r) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      t = Array.isArray(r) ? r : [];
    if (!t.length) return 0;
    var n = Number(e);
    if (Number.isFinite(n)) {
      var a = Math.round(n);
      if (a >= 0 && a < t.length) return a;
    }
    return 0;
  },
};
