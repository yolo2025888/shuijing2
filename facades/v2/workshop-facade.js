var r = require("../../@babel/runtime/helpers/slicedToArray"),
  e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../@babel/runtime/helpers/Arrayincludes");
var n = require("../../@babel/runtime/helpers/typeof"),
  a = require("../../repositories/catalogRepository"),
  i = a.getDiyBootstrapData,
  o = a.getDiyMaterialsBundleData,
  u =
    require("../../repositories/creatorPublicRepository").fetchCreatorPublicFeed,
  s = require("../../domain/v2/workshop-domain").toWorkshopRouteModel,
  c = require("./route-bridge"),
  p = c.buildLegacyRouteByDomain,
  l = c.sanitizeSchemeId,
  f = require("../../contracts/navigation/query-contract").appendQueryParams;
function m(r) {
  var e = r && "object" === n(r) ? r : {};
  return {
    forceRemote: !0 === e.forceRemote,
    preferCache: !0 === e.preferCache,
    remoteTimeoutMs: Number(e.remoteTimeoutMs || 0),
  };
}
function y(r) {
  var e = r && "object" === n(r) ? r : {},
    t = String(e.listImgUrl || e.previewUrl || e.coverUrl || "").trim();
  if (t) return t;
  var a = Array.isArray(e.variants) ? e.variants : [];
  return String(a[0] || "").trim();
}
function h(r) {
  return (Array.isArray(r) ? r : [])
    .map(function (r) {
      return String(r || "").trim();
    })
    .filter(Boolean);
}
function b(r) {
  if (h(r && r.pattern).length < 8) return !1;
  var e = (function (r) {
    var e = r && "object" === n(r) ? r : {};
    return (
      Array.isArray(e.sectionCodes)
        ? e.sectionCodes
        : Array.isArray(e.section_codes)
        ? e.section_codes
        : [e.category]
    )
      .map(function (r) {
        return String(r || "")
          .trim()
          .toLowerCase();
      })
      .filter(Boolean);
  })(r);
  return e.includes("designer") || e.includes("customer");
}
function d(r) {
  var e = Object.create(null),
    t = [];
  return (
    (Array.isArray(r) ? r : []).forEach(function (r) {
      if (b(r)) {
        var n =
          String((r && (r.id || r.presetId || r.templateId)) || "").trim() ||
          h(r && r.pattern).join("|");
        n && !e[n] && ((e[n] = !0), t.push(r));
      }
    }),
    t
  );
}
function g(r, e) {
  var t = (function (r) {
      var e = r && "object" === n(r) ? r : {},
        t = Array.isArray(e.beadTypes) ? e.beadTypes : [],
        a = Object.create(null);
      return (
        t.forEach(function (r) {
          var e = String((r && r.id) || "").trim();
          e && !a[e] && (a[e] = r);
        }),
        a
      );
    })(r),
    a = [],
    i = function (r) {
      var e = String(r || "").trim();
      !e || a.indexOf(e) >= 0 || a.push(e);
    };
  return (
    d(e)
      .slice(0, 12)
      .forEach(function (r) {
        h(r && r.pattern).forEach(function (r) {
          (function (r) {
            var e = r && "object" === n(r) ? r : {},
              t = [],
              a = function (r) {
                var e = String(r || "").trim();
                e && t.indexOf(e) < 0 && t.push(e);
              };
            return (
              a(e.listImgUrl || e.previewUrl || e.coverUrl),
              a(e.imageUrl || e.image_url || e.imgUrl || e.img_url),
              (Array.isArray(e.variants) ? e.variants : []).forEach(a),
              t
            );
          })(t[r]).forEach(i);
        });
      }),
    a.slice(0, 120)
  );
}
function v(r, e, t) {
  var n = Math.max(1, Number(e) || 1);
  return Promise.race([
    Promise.resolve(r).catch(function () {
      return t;
    }),
    new Promise(function (r) {
      setTimeout(function () {
        return r(t);
      }, n);
    }),
  ]);
}
function A(r) {
  var e = r && "object" === n(r) ? r : {},
    t = Array.isArray(e.mainCategories) ? e.mainCategories : [],
    a =
      e.subCategories && "object" === n(e.subCategories) ? e.subCategories : {},
    i = String((t[0] && t[0].id) || "crystal").trim() || "crystal";
  return {
    mainCategory: i,
    menuCategory:
      (function (r) {
        var e = (Array.isArray(r) ? r : []).find(function (r) {
          var e = String((r && r.id) || "").trim();
          return !!e && "in_use" !== e && 0 !== e.indexOf("__all__:");
        });
        return e && e.id ? String(e.id) : "";
      })(a[i]) || "",
  };
}
function C(r) {
  var e = r && "object" === n(r) ? r : {},
    t = Array.isArray(e.trayBgs) ? e.trayBgs : [],
    a = Array.isArray(e.beadTypes) ? e.beadTypes : [],
    i = A(e),
    o = a.filter(function (r) {
      var e = String((r && r.mainCategory) || "").trim(),
        t = String((r && r.category) || "").trim();
      return (
        (!i.mainCategory || !e || e === i.mainCategory) &&
        (!i.menuCategory || !t || t === i.menuCategory)
      );
    }),
    u = o.length ? o : a,
    s = [],
    c = function (r) {
      var e = String(r || "").trim();
      e && (s.indexOf(e) >= 0 || s.push(e));
    };
  t.slice(0, 2).forEach(function (r) {
    c(
      (function (r) {
        var e = r && "object" === n(r) ? r : {};
        return String(e.url || e.image || e.previewUrl || "").trim();
      })(r)
    );
  });
  for (var p = 0; p < u.length && (c(y(u[p])), !(s.length >= 18)); p += 1);
  return s;
}
function x(r) {
  return !!(r && Array.isArray(r.beadTypes) && r.beadTypes.length);
}
function T(r) {
  return k.apply(this, arguments);
}
function k() {
  return (k = t(
    e().mark(function r(t) {
      var n, a, i;
      return e().wrap(
        function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return (
                  (n = t.remoteTimeoutMs || 8e3),
                  (r.prev = 1),
                  (r.next = 4),
                  o({
                    forceRemote: t.forceRemote,
                    preferCache: !0,
                    remoteTimeoutMs: n,
                  })
                );
              case 4:
                if (!x((a = r.sent))) {
                  r.next = 7;
                  break;
                }
                return r.abrupt("return", a);
              case 7:
                r.next = 11;
                break;
              case 9:
                (r.prev = 9), (r.t0 = r.catch(1));
              case 11:
                return (
                  (r.prev = 11),
                  (r.next = 14),
                  o({
                    forceRemote: !0,
                    preferCache: !0,
                    remoteTimeoutMs: Math.max(12e3, n),
                  })
                );
              case 14:
                if (!x((i = r.sent))) {
                  r.next = 17;
                  break;
                }
                return r.abrupt("return", i);
              case 17:
                r.next = 21;
                break;
              case 19:
                (r.prev = 19), (r.t1 = r.catch(11));
              case 21:
                return r.abrupt("return", { beadTypes: [] });
              case 22:
              case "end":
                return r.stop();
            }
        },
        r,
        null,
        [
          [1, 9],
          [11, 19],
        ]
      );
    })
  )).apply(this, arguments);
}
function w() {
  return S.apply(this, arguments);
}
function S() {
  return (S = t(
    e().mark(function r() {
      var t;
      return e().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return (
                (r.next = 2),
                v(
                  u({ page: 1, pageSize: 30, section: "all", preferCache: !0 }),
                  4200,
                  null
                )
              );
            case 2:
              return (
                (t = r.sent),
                r.abrupt(
                  "return",
                  d(Array.isArray(t && t.items) ? t.items : [])
                )
              );
            case 4:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function R() {
  return (R = t(
    e().mark(function t(n) {
      var a, o, u, s, c, p, l, f, y, h, b;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (a = m(n)),
                (o = i({
                  forceRemote: a.forceRemote,
                  preferCache: a.preferCache,
                  remoteTimeoutMs: a.remoteTimeoutMs || void 0,
                })),
                (u = T(a)),
                (s = w()),
                (e.next = 6),
                Promise.all([o, u, s])
              );
            case 6:
              return (
                (c = e.sent),
                (p = r(c, 3)),
                (l = p[0]),
                (f = p[1]),
                (y = p[2]),
                (h = x(f)),
                (b = Object.assign({}, l, { beadTypes: h ? f.beadTypes : [] })),
                e.abrupt("return", {
                  payload: b,
                  criticalAssets: C(b),
                  blindBoxPresetPool: y,
                  blindBoxWarmupAssets: g(b, y),
                  materialsBundleReady: h,
                })
              );
            case 14:
            case "end":
              return e.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function j() {
  return (j = t(
    e().mark(function r(t) {
      var n, a, o;
      return e().wrap(
        function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return (
                  (n = m(t)),
                  (r.prev = 1),
                  (r.next = 4),
                  i({ forceRemote: n.forceRemote, preferCache: !0 })
                );
              case 4:
                return (
                  (a = r.sent),
                  (o = Object.assign({}, a, { beadTypes: [] })),
                  r.abrupt("return", s(o))
                );
              case 9:
                return (
                  (r.prev = 9),
                  (r.t0 = r.catch(1)),
                  r.abrupt("return", s(null, { error: r.t0 }))
                );
              case 12:
              case "end":
                return r.stop();
            }
        },
        r,
        null,
        [[1, 9]]
      );
    })
  )).apply(this, arguments);
}
function U() {
  return p("inspiration", { source: "v2_workshop" });
}
module.exports = {
  loadWorkshopOverview: function (r) {
    return j.apply(this, arguments);
  },
  prepareDiyBootstrap: function (r) {
    return R.apply(this, arguments);
  },
  buildLegacyWorkshopUrl: function () {
    return f("/pages/diy/index", { source: "v2_workshop", returnTab: "home" });
  },
  buildLegacyWorkshopInspirationUrl: U,
  buildLegacyWorkshopPresetDetailUrl: function (r) {
    var e = l(r);
    return e ? p("schemes", { schemeId: e, source: "v2_workshop" }) : U();
  },
  normalizeWorkshopOptions: m,
};
