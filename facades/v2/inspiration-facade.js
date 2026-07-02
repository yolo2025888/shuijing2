var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../@babel/runtime/helpers/typeof"),
  i = require("../../repositories/catalogRepository").getBootstrapLiteData,
  n =
    require("../../repositories/creatorPublicRepository").fetchCreatorPublicFeed,
  o = require("../../domain/v2/inspiration-domain").toInspirationRouteModel,
  a = require("../../domain/v2/preset-visual-model").filterWorksByCategory,
  s = require("./route-bridge"),
  u = s.buildLegacyRouteByDomain,
  c = s.sanitizeSchemeId;
function p(e) {
  return { forceRemote: !0 === (e && "object" === t(e) ? e : {}).forceRemote };
}
function l() {
  return (l = r(
    e().mark(function r(t) {
      var a, s, u, c;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (a = p(t)),
                  (e.prev = 1),
                  (e.next = 4),
                  i({ forceRemote: a.forceRemote, preferCache: !0 })
                );
              case 4:
                return (
                  (s = e.sent),
                  (e.next = 7),
                  n({ page: 1, pageSize: 18, preferCache: !0 }).catch(
                    function () {
                      return null;
                    }
                  )
                );
              case 7:
                return (
                  (u = e.sent),
                  (c = Object.assign({}, s, {
                    presets: Array.isArray(u && u.items) ? u.items : [],
                  })),
                  e.abrupt("return", o(c))
                );
              case 12:
                return (
                  (e.prev = 12),
                  (e.t0 = e.catch(1)),
                  e.abrupt("return", o(null, { error: e.t0 }))
                );
              case 15:
              case "end":
                return e.stop();
            }
        },
        r,
        null,
        [[1, 12]]
      );
    })
  )).apply(this, arguments);
}
function m() {
  return u("inspiration", { source: "v2_inspiration" });
}
module.exports = {
  loadInspirationOverview: function (e) {
    return l.apply(this, arguments);
  },
  buildLegacyInspirationUrl: m,
  filterInspirationWorksByCategory: function (e, r) {
    return a(e, r);
  },
  buildLegacyInspirationWorkDetailUrl: function (e) {
    var r = c(e);
    return r ? u("schemes", { schemeId: r, source: "v2_inspiration" }) : m();
  },
  normalizeInspirationOptions: p,
};
