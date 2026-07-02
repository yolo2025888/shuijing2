var e = require("../../@babel/runtime/helpers/defineProperty"),
  r = require("../../contracts/navigation/route-contract"),
  t = r.INDEX_ROUTE,
  a = r.normalizeRouteDomain,
  i = require("../../contracts/navigation/query-contract"),
  n = i.LEGACY_ROUTE_QUERY_KEYS,
  c = (i.sanitizeQueryActiveTab, i.sanitizeQuerySchemeId),
  u = i.normalizeLegacyRouteQuery,
  o = i.appendQueryParams,
  s = t;
function m(r) {
  var t,
    a = (function (e) {
      return u(e);
    })(r);
  return o(
    s,
    (e((t = {}), n.activeTab, a.activeTab),
    e(t, n.schemeId, a.schemeId),
    e(t, n.source, a.source),
    t)
  );
}
module.exports = {
  LEGACY_INDEX_ROUTE: s,
  sanitizeSchemeId: function (e) {
    return c(e);
  },
  buildLegacyIndexRoute: m,
  buildLegacyRouteByDomain: function (e, r) {
    var t = a(e, "diy"),
      i = "schemes" === t ? "profile" : t;
    return m(Object.assign({}, r || {}, { activeTab: i }));
  },
};
