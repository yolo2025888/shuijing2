var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../@babel/runtime/helpers/typeof"),
  o = require("../../domain/v2/home-domain").toHomeRouteModel,
  n = require("../../domain/v2/preset-visual-model").filterWorksByCategory,
  u = require("../../repositories/catalogRepository").getBootstrapLiteData,
  i = require("./route-bridge"),
  a = i.buildLegacyRouteByDomain,
  c = i.sanitizeSchemeId;
function s(e) {
  return { forceRemote: !0 === (e && "object" === t(e) ? e : {}).forceRemote };
}
function m() {
  return (m = r(
    e().mark(function r(t) {
      var n, i;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (n = s(t)),
                  (e.prev = 1),
                  (e.next = 4),
                  u({ forceRemote: n.forceRemote, preferCache: !0 })
                );
              case 4:
                return (i = e.sent), e.abrupt("return", o(i));
              case 8:
                return (
                  (e.prev = 8),
                  (e.t0 = e.catch(1)),
                  e.abrupt("return", o(null, { error: e.t0 }))
                );
              case 11:
              case "end":
                return e.stop();
            }
        },
        r,
        null,
        [[1, 8]]
      );
    })
  )).apply(this, arguments);
}
function l() {
  return a("home", { source: "v2_home" });
}
module.exports = {
  loadHomeOverview: function (e) {
    return m.apply(this, arguments);
  },
  buildLegacyHomeUrl: l,
  filterHomeWorksByCategory: function (e, r) {
    return n(e, r);
  },
  buildLegacyHomeWorkDetailUrl: function (e) {
    var r = c(e);
    return r ? a("schemes", { schemeId: r, source: "v2_home" }) : l();
  },
  normalizeHomeOptions: s,
};
