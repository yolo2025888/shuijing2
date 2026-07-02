var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../services/api/index"),
  n = t.API_ENDPOINTS,
  u = t.request,
  a = t.ensureAuthenticated,
  o = t.clearAuthToken,
  i = t.getAuthToken,
  c = t.hasRefreshTokenAvailable,
  s = t.getAuthUserProfile,
  h = t.setAuthUserProfile;
function p() {
  return (p = r(
    e().mark(function r(t) {
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return e.abrupt("return", a(t || {}));
            case 1:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function f() {
  return (f = r(
    e().mark(function r() {
      var t;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (e.next = 2), u({ url: n.authMe, method: "GET", authRetry: !1 })
              );
            case 2:
              return (t = e.sent) && t.user && h(t.user), e.abrupt("return", t);
            case 5:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function l() {
  return (l = r(
    e().mark(function r(t, o) {
      var i;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (t) {
                e.next = 2;
                break;
              }
              throw new Error("WECHAT_PHONE_CODE_MISSING");
            case 2:
              return (
                (e.next = 4), a({ forceRefresh: !0, clearBeforeRefresh: !0 })
              );
            case 4:
              return (
                (e.next = 6),
                u({
                  url: n.authWechatBindPhone || n.authWechatPhoneLogin,
                  method: "POST",
                  data: { phoneCode: t },
                  authRetry: !0,
                })
              );
            case 6:
              return (i = e.sent) && i.user && h(i.user), e.abrupt("return", i);
            case 9:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function m(e) {
  var r = String(e || "").trim();
  if (!/^[0-9A-Za-z_-]{16,32}$/.test(r))
    throw new Error("WEB_LOGIN_SCENE_TOKEN_INVALID");
  return r;
}
function g() {
  return (g = r(
    e().mark(function r(t) {
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return e.abrupt(
                "return",
                u({
                  url: n.authMiniProgramWebLoginScan,
                  method: "POST",
                  data: { token: m(t) },
                  authRetry: !0,
                })
              );
            case 1:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function y() {
  return (y = r(
    e().mark(function r(t) {
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return e.abrupt(
                "return",
                u({
                  url: n.authMiniProgramWebLoginConfirm,
                  method: "POST",
                  data: { token: m(t) },
                  authRetry: !0,
                })
              );
            case 1:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function d() {
  return (d = r(
    e().mark(function r(t) {
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return e.abrupt(
                "return",
                u({
                  url: n.authMiniProgramWebLoginCancel,
                  method: "POST",
                  data: { token: m(t) },
                  authRetry: !0,
                })
              );
            case 1:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
module.exports = {
  loginByWechat: function (e) {
    return p.apply(this, arguments);
  },
  getWechatAuthSession: function () {
    return f.apply(this, arguments);
  },
  loginByWechatPhone: function (e, r) {
    return l.apply(this, arguments);
  },
  logoutByWechat: function () {
    return i() || c()
      ? u({ url: n.authLogout, method: "POST", data: {}, authRetry: !1 })
          .catch(function () {
            return null;
          })
          .finally(function () {
            o();
          })
      : (o(), Promise.resolve(null));
  },
  hasWechatLoginToken: function () {
    return !!i() || c();
  },
  getWechatAuthProfile: function () {
    return s();
  },
  scanMiniProgramWebLogin: function (e) {
    return g.apply(this, arguments);
  },
  confirmMiniProgramWebLogin: function (e) {
    return y.apply(this, arguments);
  },
  cancelMiniProgramWebLogin: function (e) {
    return d.apply(this, arguments);
  },
};
