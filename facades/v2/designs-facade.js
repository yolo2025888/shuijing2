var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../repositories/schemeRepository"),
  n = t.loadSchemes,
  a = t.deleteSchemeById,
  u = t.getSchemeSharePayload,
  i = require("../../domain/v2/designs-domain").toDesignsRouteModel,
  s = require("./route-bridge"),
  c = s.buildLegacyRouteByDomain,
  o = s.sanitizeSchemeId,
  p = require("../../contracts/navigation/query-contract"),
  h = p.appendQueryParams,
  l = p.buildIndexSharePath,
  d = require("../../utils/navigation/share-path").normalizeSchemeSharePath;
function m() {
  return (m = r(
    e().mark(function r() {
      var t;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.prev = 0), (e.next = 3), n();
              case 3:
                return (t = e.sent), e.abrupt("return", i(t));
              case 7:
                return (
                  (e.prev = 7),
                  (e.t0 = e.catch(0)),
                  e.abrupt("return", i([], { error: e.t0 }))
                );
              case 10:
              case "end":
                return e.stop();
            }
        },
        r,
        null,
        [[0, 7]]
      );
    })
  )).apply(this, arguments);
}
function b() {
  return c("schemes", { source: "v2_designs" });
}
function f() {
  return (f = r(
    e().mark(function r(t) {
      var u, s;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if ((u = o(t))) {
                e.next = 3;
                break;
              }
              return e.abrupt(
                "return",
                i([], { error: new Error("SCHEME_ID_INVALID") })
              );
            case 3:
              return (e.next = 5), a(u);
            case 5:
              return (e.next = 7), n();
            case 7:
              return (
                (s = e.sent), e.abrupt("return", i(Array.isArray(s) ? s : []))
              );
            case 9:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function g() {
  return (g = r(
    e().mark(function r(t) {
      var n, a, i;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if ((n = o(t))) {
                  e.next = 3;
                  break;
                }
                return e.abrupt("return", l(""));
              case 3:
                return (e.prev = 3), (e.next = 6), u(n);
              case 6:
                if (
                  ((a = e.sent),
                  !(i = a && a.path ? String(a.path).trim() : ""))
                ) {
                  e.next = 10;
                  break;
                }
                return e.abrupt("return", d(i, n));
              case 10:
                e.next = 14;
                break;
              case 12:
                (e.prev = 12), (e.t0 = e.catch(3));
              case 14:
                return e.abrupt("return", d(l(n), n));
              case 15:
              case "end":
                return e.stop();
            }
        },
        r,
        null,
        [[3, 12]]
      );
    })
  )).apply(this, arguments);
}
module.exports = {
  loadDesignsOverview: function () {
    return m.apply(this, arguments);
  },
  buildLegacyDesignsUrl: b,
  buildLegacyDesignDetailUrl: function (e) {
    var r = o(e);
    return r ? c("schemes", { schemeId: r, source: "v2_designs" }) : b();
  },
  buildLegacyDesignEditorUrl: function (e) {
    var r = o(e);
    return h("/pages/diy/index", {
      source: "v2_designs",
      returnTab: "profile",
      schemeId: r,
    });
  },
  removeDesignById: function (e) {
    return f.apply(this, arguments);
  },
  buildDesignSharePath: function (e) {
    return g.apply(this, arguments);
  },
};
