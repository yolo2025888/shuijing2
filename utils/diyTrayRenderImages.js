var a = require("../@babel/runtime/helpers/typeof"),
  r = require("./catalog").collectMaterialImageCandidates,
  e = require("./assetCache").normalizeAssetCacheKey,
  t = require("./diyTrayMaterialPayload").stripNonTrayImageFields;
function i(a) {
  return String(a || "").trim();
}
function c(a, r, t, c, n, l) {
  var o = i(n);
  if (o) {
    var u = e(o) || o;
    r[u] ||
      ((r[u] = !0),
      a.push({
        materialId: t,
        variantIdx: c,
        url: o,
        imgUrl: o,
        cacheKey: u,
        source: l,
      }));
  }
}
function n(n, l) {
  var o = l && "object" === a(l) ? l : {},
    u = n && "object" === a(n) ? n : null;
  if (!u) return [];
  var s = t(u) || u,
    f = (function (r) {
      var e = r && "object" === a(r) ? r : {};
      return i(e.id || e.code || e.materialId || e.material_id);
    })(s),
    h = Object.create(null),
    m = [];
  if (
    ((Array.isArray(s.variants)
      ? s.variants
          .map(function (a) {
            return i(a);
          })
          .filter(Boolean)
      : []
    ).forEach(function (a, e) {
      var t = r(Object.assign({}, s, { variants: [a] }), 0)[0] || a;
      c(m, h, f, e, t, "variant");
    }),
    !1 !== o.includeFallbacks)
  ) {
    var b = Object.assign({}, s, { variants: [] });
    r(b, 0).forEach(function (a) {
      c(m, h, f, 0, a, "renderFallback");
    });
  }
  var v = (function (a, r) {
      var t = Object.create(null);
      if (
        ((Array.isArray(r) ? r : []).forEach(function (a) {
          var r = i(a),
            c = e(r) || r;
          c && (t[c] = !0);
        }),
        !Object.keys(t).length)
      )
        return a;
      var c = [],
        n = [];
      return (
        a.forEach(function (a) {
          a && a.cacheKey && t[a.cacheKey] ? n.push(a) : c.push(a);
        }),
        c.concat(n)
      );
    })(m, o.recentUrls),
    y = Math.max(0, Math.floor(Number(o.perMaterialLimit || 0)));
  return y > 0 ? v.slice(0, y) : v;
}
module.exports = {
  collectTrayRenderImageOptions: n,
  collectTrayRenderWarmupTargets: function (r, e) {
    var t = Array.isArray(r) ? r : [],
      i = e && "object" === a(e) ? e : {},
      c = Math.max(0, Math.floor(Number(i.materialLimit || t.length))),
      l =
        Math.max(0, Math.floor(Number(i.totalImageCap || 0))) ||
        Number.MAX_SAFE_INTEGER,
      o = Math.max(0, Math.floor(Number(i.secondPassMaterialLimit || c))),
      u = t.slice(0, c),
      s = [],
      f = Object.create(null),
      h = function (a, r, e) {
        a &&
          a.url &&
          a.cacheKey &&
          !f[a.cacheKey] &&
          (s.length >= l ||
            ((f[a.cacheKey] = !0),
            s.push(Object.assign({}, a, { materialIndex: r, pass: e }))));
      };
    return (
      u.forEach(function (a, r) {
        var e = n(a, { perMaterialLimit: 1, includeFallbacks: !0 });
        h(e[0], r, 1);
      }),
      u.slice(0, o).forEach(function (a, r) {
        if (!(s.length >= l)) {
          var e = n(a, { perMaterialLimit: 2, includeFallbacks: !0 });
          h(e[1], r, 2);
        }
      }),
      s
    );
  },
};
