var r = require("../../@babel/runtime/helpers/typeof"),
  t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../@babel/runtime/helpers/slicedToArray"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator"),
  i = require("../../repositories/profileRepository").getProfileDashboard,
  u = require("../../repositories/schemeRepository").loadSchemes,
  a = require("../../gateways/index-runtime-gateway"),
  o = a.uploadProfileImage,
  s = a.createCreatorApplication,
  c = a.getCurrentCreatorApplication,
  p = a.listCreatorEligibleOrderItems,
  f = a.getCreatorPanel,
  l = a.updateCreatorProfile,
  h = a.createCreatorWork,
  b = a.getCreatorWorkDetail,
  m = a.resubmitCreatorWork,
  y = a.listCreatorWorks,
  d = a.createWithdrawRequest,
  w = a.listWithdrawRequests,
  v = a.createDistributorApplication,
  g = a.getCurrentDistributorApplication,
  k = a.getDistributorPanel,
  x = a.updateDistributorProfile,
  D = a.listDistributorDownlines,
  P = a.listDistributorEarnings,
  C = a.getDistributorInvite,
  I = a.createDistributorWithdrawRequest,
  q = a.listDistributorWithdrawRequests,
  R = a.listProfileNotifications,
  W = a.markProfileNotificationRead,
  A = require("../../domain/v2/profile-domain").toProfileRouteModel,
  S = require("./route-bridge"),
  N = S.buildLegacyRouteByDomain,
  _ = S.sanitizeSchemeId;
function O() {
  return (O = n(
    t().mark(function r() {
      var n, a, o, s;
      return t().wrap(
        function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return (
                  (n = null),
                  (a = []),
                  (r.prev = 2),
                  (r.next = 5),
                  Promise.all([i(), u()])
                );
              case 5:
                return (
                  (o = r.sent),
                  (s = e(o, 2)),
                  (n = s[0]),
                  (a = s[1]),
                  r.abrupt("return", A(n, a))
                );
              case 12:
                return (
                  (r.prev = 12),
                  (r.t0 = r.catch(2)),
                  r.abrupt("return", A(n, a, { error: r.t0 }))
                );
              case 15:
              case "end":
                return r.stop();
            }
        },
        r,
        null,
        [[2, 12]]
      );
    })
  )).apply(this, arguments);
}
function U() {
  return N("schemes", { source: "v2_profile" });
}
function j() {
  return (j = n(
    t().mark(function e(n) {
      var i, u, a, o, c, p, f;
      return t().wrap(function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              return (
                (i = n && "object" === r(n) ? n : {}),
                (u =
                  String(i.entry || "").trim() ||
                  "profile_designer_apply_page"),
                (a = String(i.sourceOrderId || "").trim()),
                (o = Number(i.boundOrderItemId || 0)),
                (c = Array.isArray(i.proofImages)
                  ? i.proofImages.filter(function (r) {
                      return "string" == typeof r && r.trim();
                    })
                  : []),
                (p =
                  i.basicProfile && "object" === r(i.basicProfile)
                    ? i.basicProfile
                    : null),
                (f = { entry: u }),
                o > 0 && (f.boundOrderItemId = o),
                a && (f.sourceOrderId = a),
                p && (f.basicProfile = p),
                c.length && (f.proofImages = c),
                t.abrupt("return", s(f))
              );
            case 12:
            case "end":
              return t.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function E() {
  return (E = n(
    t().mark(function r() {
      return t().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", c());
            case 1:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function L() {
  return (L = n(
    t().mark(function r(e) {
      return t().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", p(e || {}));
            case 1:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function T() {
  return (T = n(
    t().mark(function r() {
      return t().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", f());
            case 1:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function z() {
  return (z = n(
    t().mark(function e(n) {
      var i, u, a, o;
      return t().wrap(function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              return (
                (i = n && "object" === r(n) ? n : {}),
                (u = {}),
                (a = String(i.nickname || i.displayName || "").trim()),
                (o = String(i.avatarUrl || "").trim()),
                a && (u.nickname = a),
                o && (u.avatarUrl = o),
                t.abrupt("return", l(u))
              );
            case 7:
            case "end":
              return t.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function B() {
  return (B = n(
    t().mark(function r(e) {
      return t().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", h(e || {}));
            case 1:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function G() {
  return (G = n(
    t().mark(function r(e) {
      return t().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", b(e));
            case 1:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function M() {
  return (M = n(
    t().mark(function r(e, n) {
      return t().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", m(e, n || {}));
            case 1:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function F() {
  return (F = n(
    t().mark(function r(e) {
      return t().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", y(e || {}));
            case 1:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function H() {
  return (H = n(
    t().mark(function r(e) {
      return t().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", d(e || {}));
            case 1:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function J() {
  return (J = n(
    t().mark(function r(e) {
      return t().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", w(e || {}));
            case 1:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function K() {
  return (K = n(
    t().mark(function r(e) {
      return t().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", R(e || { category: "creator" }));
            case 1:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function Q() {
  return (Q = n(
    t().mark(function r(e) {
      return t().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", W(e));
            case 1:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function V() {
  return (V = n(
    t().mark(function e(n) {
      var i, u, a, o, s;
      return t().wrap(function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              return (
                (i = n && "object" === r(n) ? n : {}),
                (u =
                  String(i.entry || "").trim() ||
                  "profile_distributor_apply_page"),
                (a =
                  i.basicProfile && "object" === r(i.basicProfile)
                    ? i.basicProfile
                    : null),
                (o = Array.isArray(i.proofImages)
                  ? i.proofImages.filter(function (r) {
                      return "string" == typeof r && r.trim();
                    })
                  : []),
                (s = { entry: u }),
                a && (s.basicProfile = a),
                o.length && (s.proofImages = o),
                t.abrupt("return", v(s))
              );
            case 8:
            case "end":
              return t.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function X() {
  return (X = n(
    t().mark(function r() {
      return t().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", g());
            case 1:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function Y() {
  return (Y = n(
    t().mark(function r() {
      return t().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", k());
            case 1:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function Z() {
  return (Z = n(
    t().mark(function e(n) {
      var i, u, a, o;
      return t().wrap(function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              return (
                (i = n && "object" === r(n) ? n : {}),
                (u = {}),
                (a = String(i.nickname || i.displayName || "").trim()),
                (o = String(i.avatarUrl || "").trim()),
                a && (u.nickname = a),
                a && (u.displayName = a),
                o && (u.avatarUrl = o),
                t.abrupt("return", x(u))
              );
            case 8:
            case "end":
              return t.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function $() {
  return ($ = n(
    t().mark(function r(e) {
      return t().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", D(e || {}));
            case 1:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function rr() {
  return (rr = n(
    t().mark(function r(e) {
      return t().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", P(e || {}));
            case 1:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function tr() {
  return (tr = n(
    t().mark(function r() {
      return t().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", C());
            case 1:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function er() {
  return (er = n(
    t().mark(function r(e) {
      return t().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", I(e || {}));
            case 1:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function nr() {
  return (nr = n(
    t().mark(function r() {
      return t().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", q());
            case 1:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function ir() {
  return (ir = n(
    t().mark(function r(e) {
      return t().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", R(e || { category: "distributor" }));
            case 1:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function ur() {
  return (ur = n(
    t().mark(function r(e) {
      return t().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", W(e));
            case 1:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
module.exports = {
  loadProfileOverview: function () {
    return O.apply(this, arguments);
  },
  uploadProfileImage: o,
  buildLegacyProfileUrl: function () {
    return N("profile", { source: "v2_profile" });
  },
  buildLegacySchemesUrl: U,
  buildLegacyProfileSchemeDetailUrl: function (r) {
    var t = _(r);
    return t ? N("schemes", { schemeId: t, source: "v2_profile" }) : U();
  },
  submitDesignerApplication: function (r) {
    return j.apply(this, arguments);
  },
  fetchCreatorCurrentApplication: function () {
    return E.apply(this, arguments);
  },
  fetchCreatorEligibleOrderItems: function (r) {
    return L.apply(this, arguments);
  },
  fetchCreatorPanel: function () {
    return T.apply(this, arguments);
  },
  saveCreatorProfile: function (r) {
    return z.apply(this, arguments);
  },
  submitCreatorWork: function (r) {
    return B.apply(this, arguments);
  },
  fetchCreatorWorkDetail: function (r) {
    return G.apply(this, arguments);
  },
  submitCreatorWorkResubmission: function (r, t) {
    return M.apply(this, arguments);
  },
  fetchCreatorWorks: function (r) {
    return F.apply(this, arguments);
  },
  submitCreatorWithdrawRequest: function (r) {
    return H.apply(this, arguments);
  },
  fetchCreatorWithdrawRequests: function (r) {
    return J.apply(this, arguments);
  },
  fetchCreatorNotifications: function (r) {
    return K.apply(this, arguments);
  },
  markCreatorNotificationRead: function (r) {
    return Q.apply(this, arguments);
  },
  submitDistributorApplication: function (r) {
    return V.apply(this, arguments);
  },
  fetchDistributorCurrentApplication: function () {
    return X.apply(this, arguments);
  },
  fetchDistributorPanel: function () {
    return Y.apply(this, arguments);
  },
  saveDistributorProfile: function (r) {
    return Z.apply(this, arguments);
  },
  fetchDistributorDownlines: function (r) {
    return $.apply(this, arguments);
  },
  fetchDistributorEarnings: function (r) {
    return rr.apply(this, arguments);
  },
  fetchDistributorInvite: function () {
    return tr.apply(this, arguments);
  },
  submitDistributorWithdrawRequest: function (r) {
    return er.apply(this, arguments);
  },
  fetchDistributorWithdrawRequests: function () {
    return nr.apply(this, arguments);
  },
  fetchDistributorNotifications: function (r) {
    return ir.apply(this, arguments);
  },
  markDistributorNotificationRead: function (r) {
    return ur.apply(this, arguments);
  },
};
