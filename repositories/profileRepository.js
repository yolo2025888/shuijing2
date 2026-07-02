var r = require("../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../@babel/runtime/helpers/asyncToGenerator"),
  e = require("../@babel/runtime/helpers/typeof"),
  n = require("../services/api/index"),
  u = n.request,
  a = n.normalizeUrl,
  i = n.getAuthToken,
  o = n.ensureAuthenticated,
  s = n.API_ENDPOINTS;
function p(r) {
  if (!r) return {};
  if ("object" === e(r)) return r;
  try {
    return JSON.parse(String(r || "{}"));
  } catch (r) {
    return {};
  }
}
function c(r) {
  if (401 === Number((r && r.statusCode) || 0)) return !0;
  var t = String((r && (r.code || r.message || r.errMsg)) || "").toUpperCase();
  return t.indexOf("UNAUTHORIZED") >= 0 || t.indexOf("AUTH_TOKEN") >= 0;
}
function f(r, t) {
  return new Promise(function (e, n) {
    var u, o;
    wx.uploadFile({
      url: a(s.profileUploadImages),
      filePath: r,
      name: "file",
      formData: { purpose: String(t || "avatar") },
      header:
        ((u = i()),
        (o = {
          "x-request-id": "mini_upload_"
            .concat(Date.now(), "_")
            .concat(Math.random().toString(36).slice(2, 10)),
        }),
        u && (o.Authorization = "Bearer ".concat(u)),
        o),
      success: function (r) {
        var t = Number((r && r.statusCode) || 0);
        t >= 200 && t < 300
          ? e(p(r && r.data))
          : n(
              (function (r) {
                var t = Number((r && r.statusCode) || 0),
                  e = p(r && r.data),
                  n = String(e.code || "").trim(),
                  u = String(
                    e.message ||
                      e.error ||
                      n ||
                      "PROFILE_UPLOAD_HTTP_".concat(t || "UNKNOWN")
                  ),
                  a = new Error(u);
                return (
                  (a.statusCode = t), (a.code = n || u), (a.responseData = e), a
                );
              })(r)
            );
      },
      fail: n,
    });
  });
}
function l() {
  return (l = t(
    r().mark(function t() {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({ url: s.profileDashboard, method: "GET" })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function h() {
  return (h = t(
    r().mark(function t() {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({ url: s.profileContactConfig, method: "GET" })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function d() {
  return (d = t(
    r().mark(function t(e) {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({
                  url: s.profileWechatProfile,
                  method: "POST",
                  data: e || {},
                })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function m() {
  return (m = t(
    r().mark(function t(e, n) {
      var u;
      return r().wrap(
        function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                if ((u = String(e || "").trim())) {
                  r.next = 3;
                  break;
                }
                throw new Error("PROFILE_UPLOAD_FILE_PATH_MISSING");
              case 3:
                if (
                  "undefined" != typeof wx &&
                  "function" == typeof wx.uploadFile
                ) {
                  r.next = 5;
                  break;
                }
                throw new Error("PROFILE_UPLOAD_UNSUPPORTED");
              case 5:
                return (r.next = 7), o();
              case 7:
                return (r.prev = 7), (r.next = 10), f(u, n);
              case 10:
                return r.abrupt("return", r.sent);
              case 13:
                if (((r.prev = 13), (r.t0 = r.catch(7)), c(r.t0))) {
                  r.next = 17;
                  break;
                }
                throw r.t0;
              case 17:
                return (
                  (r.next = 19), o({ forceRefresh: !0, clearBeforeRefresh: !1 })
                );
              case 19:
                return r.abrupt("return", f(u, n));
              case 20:
              case "end":
                return r.stop();
            }
        },
        t,
        null,
        [[7, 13]]
      );
    })
  )).apply(this, arguments);
}
function w() {
  return (w = t(
    r().mark(function t(e) {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({
                  url: s.profileCreatorApplications,
                  method: "POST",
                  data: e || {},
                })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function b() {
  return (b = t(
    r().mark(function t() {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({ url: s.profileCreatorPublishStatus, method: "GET" })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function y() {
  return (y = t(
    r().mark(function t() {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({ url: s.profileCreatorCurrentApplication, method: "GET" })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function v() {
  return (v = t(
    r().mark(function t(e) {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({
                  url: s.profileCreatorEligibleOrderItems,
                  method: "GET",
                  data: e || {},
                })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function k() {
  return (k = t(
    r().mark(function t() {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({ url: s.profileCreatorPanel, method: "GET" })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function x() {
  return (x = t(
    r().mark(function t(e) {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({
                  url: s.profileCreatorProfile,
                  method: "POST",
                  data: e || {},
                })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function P() {
  return (P = t(
    r().mark(function t(e) {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({ url: s.profileCreatorWorks, method: "POST", data: e || {} })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function T() {
  return (T = t(
    r().mark(function t(e) {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({ url: s.profileCreatorWorkDetail(e), method: "GET" })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function C() {
  return (C = t(
    r().mark(function t(e, n) {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({
                  url: s.profileCreatorWorkResubmit(e),
                  method: "POST",
                  data: n || {},
                })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function D() {
  return (D = t(
    r().mark(function t(e) {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({ url: s.profileCreatorWorks, method: "GET", data: e || {} })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function E() {
  return (E = t(
    r().mark(function t(e) {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({
                  url: s.profileCreatorWithdrawRequests,
                  method: "POST",
                  data: e || {},
                })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function g() {
  return (g = t(
    r().mark(function t(e) {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({
                  url: s.profileCreatorWithdrawRequests,
                  method: "GET",
                  data: e || {},
                })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function O() {
  return (O = t(
    r().mark(function t(e) {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({
                  url: s.profileDistributorApplications,
                  method: "POST",
                  data: e || {},
                })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function S() {
  return (S = t(
    r().mark(function t() {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({
                  url: s.profileDistributorCurrentApplication,
                  method: "GET",
                })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function R() {
  return (R = t(
    r().mark(function t() {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({ url: s.profileDistributorPanel, method: "GET" })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function W() {
  return (W = t(
    r().mark(function t(e) {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({
                  url: s.profileDistributorProfile,
                  method: "POST",
                  data: e || {},
                })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function A() {
  return (A = t(
    r().mark(function t(e) {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({
                  url: s.profileDistributorDownlines,
                  method: "GET",
                  data: e || {},
                })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function G() {
  return (G = t(
    r().mark(function t(e) {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({
                  url: s.profileDistributorEarnings,
                  method: "GET",
                  data: e || {},
                })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function I() {
  return (I = t(
    r().mark(function t() {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({ url: s.profileDistributorInvite, method: "GET" })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function N() {
  return (N = t(
    r().mark(function t(e) {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({
                  url: s.profileDistributorInviteBind,
                  method: "POST",
                  data: { inviteToken: String(e || "").trim() },
                })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function q() {
  return (q = t(
    r().mark(function t(e) {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({
                  url: s.profileDistributorWithdrawRequests,
                  method: "POST",
                  data: e || {},
                })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function _() {
  return (_ = t(
    r().mark(function t() {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({ url: s.profileDistributorWithdrawRequests, method: "GET" })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function U() {
  return (U = t(
    r().mark(function t(e) {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({ url: s.profileNotifications, method: "GET", data: e || {} })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function L() {
  return (L = t(
    r().mark(function t(e) {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u({
                  url: s.profileNotificationRead(e),
                  method: "POST",
                  data: {},
                })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
module.exports = {
  getProfileDashboard: function () {
    return l.apply(this, arguments);
  },
  getContactConfig: function () {
    return h.apply(this, arguments);
  },
  syncWechatProfile: function (r) {
    return d.apply(this, arguments);
  },
  uploadProfileImage: function (r, t) {
    return m.apply(this, arguments);
  },
  createCreatorApplication: function (r) {
    return w.apply(this, arguments);
  },
  getCreatorPublishStatus: function () {
    return b.apply(this, arguments);
  },
  getCurrentCreatorApplication: function () {
    return y.apply(this, arguments);
  },
  listCreatorEligibleOrderItems: function (r) {
    return v.apply(this, arguments);
  },
  getCreatorPanel: function () {
    return k.apply(this, arguments);
  },
  updateCreatorProfile: function (r) {
    return x.apply(this, arguments);
  },
  createCreatorWork: function (r) {
    return P.apply(this, arguments);
  },
  getCreatorWorkDetail: function (r) {
    return T.apply(this, arguments);
  },
  resubmitCreatorWork: function (r, t) {
    return C.apply(this, arguments);
  },
  listCreatorWorks: function (r) {
    return D.apply(this, arguments);
  },
  createWithdrawRequest: function (r) {
    return E.apply(this, arguments);
  },
  listWithdrawRequests: function (r) {
    return g.apply(this, arguments);
  },
  createDistributorApplication: function (r) {
    return O.apply(this, arguments);
  },
  getCurrentDistributorApplication: function () {
    return S.apply(this, arguments);
  },
  getDistributorPanel: function () {
    return R.apply(this, arguments);
  },
  updateDistributorProfile: function (r) {
    return W.apply(this, arguments);
  },
  listDistributorDownlines: function (r) {
    return A.apply(this, arguments);
  },
  listDistributorEarnings: function (r) {
    return G.apply(this, arguments);
  },
  getDistributorInvite: function () {
    return I.apply(this, arguments);
  },
  bindDistributorInvite: function (r) {
    return N.apply(this, arguments);
  },
  createDistributorWithdrawRequest: function (r) {
    return q.apply(this, arguments);
  },
  listDistributorWithdrawRequests: function () {
    return _.apply(this, arguments);
  },
  listProfileNotifications: function (r) {
    return U.apply(this, arguments);
  },
  markProfileNotificationRead: function (r) {
    return L.apply(this, arguments);
  },
};
