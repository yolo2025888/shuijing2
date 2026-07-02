var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../@babel/runtime/helpers/typeof"),
  t = require("../@babel/runtime/helpers/asyncToGenerator");
function a(e, r) {
  var t = Number(e);
  return !Number.isFinite(t) || t <= 0 ? r : Math.floor(t);
}
function n(e, r) {
  var t = [],
    a = Object.create(null),
    n = function (e) {
      var r = String((e && e.id) || "").trim();
      r && !a[r] && ((a[r] = !0), t.push(e));
    };
  return (
    (Array.isArray(e) ? e : []).forEach(n),
    (Array.isArray(r) ? r : []).forEach(n),
    t
  );
}
function i() {
  return (i = t(
    e().mark(function t(i, u) {
      var o, s, c, p, m, b, g, l, f, h, y;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if ("function" == typeof i) {
                e.next = 2;
                break;
              }
              throw new Error("DIY material page fetcher is required");
            case 2:
              (o = u && "object" === r(u) ? u : {}),
                (s = Math.max(1, Math.min(60, a(o.pageSize, 60)))),
                (c = Math.max(s, a(o.maxCount, 240))),
                (p = {
                  categoryCode: String(o.categoryCode || "").trim(),
                  subCategoryCode: String(o.subCategoryCode || "").trim(),
                  keyword: String(o.keyword || "").trim(),
                  pageSize: s,
                  preferCache: !1 !== o.preferCache,
                }),
                (m = Number(o.remoteTimeoutMs || 0)) > 0 &&
                  (p.remoteTimeoutMs = m),
                (b = Math.max(1, a(o.page, 1))),
                (g = []),
                (l = null),
                (f = !1);
            case 12:
              if (!(g.length < c)) {
                e.next = 25;
                break;
              }
              return (e.next = 15), i(Object.assign({}, p, { page: b }));
            case 15:
              if (
                ((h = e.sent),
                (l = h || {}),
                (y = Array.isArray(l.beadTypes) ? l.beadTypes : []),
                (g = n(g, y)),
                (f = !0 === l.hasMore) && y.length)
              ) {
                e.next = 22;
                break;
              }
              return e.abrupt("break", 25);
            case 22:
              (b = Math.max(b + 1, a(l.page, b) + 1)), (e.next = 12);
              break;
            case 25:
              return e.abrupt("return", {
                beadTypes: g,
                page: Number((l && l.page) || b),
                pageSize: Number((l && l.pageSize) || s),
                total: Number((l && l.total) || g.length),
                hasMore: f,
              });
            case 26:
            case "end":
              return e.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
module.exports = {
  DIY_PRIMARY_MATERIAL_PAGE_SIZE: 60,
  DIY_PRIMARY_MATERIAL_MAX_COUNT: 240,
  loadDiyMaterialPages: function (e, r) {
    return i.apply(this, arguments);
  },
  mergeUniqueMaterials: n,
  resolveFirstMaterialSubCategory: function (e) {
    var r = (Array.isArray(e) ? e : []).find(function (e) {
      var r = String((e && e.id) || "").trim();
      return !!r && "in_use" !== r && 0 !== r.indexOf("__all__:");
    });
    return r && r.id ? String(r.id) : "";
  },
};
