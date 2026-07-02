var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../@babel/runtime/helpers/typeof"),
  t = require("../../../../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../deps/lifecycle-deps"),
  s = n.loginByWechat,
  a = n.getWechatAuthSession,
  i = n.logoutByWechat,
  o = require("../../../../../constants/errorCodes").ERROR_CODE;
module.exports = {
  ensureLoginState: function (n) {
    var o = this;
    return t(
      e().mark(function t() {
        var u, c, h, f, l;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (u = Object.assign(
                      { silent: !1, forceRefresh: !1 },
                      n || {}
                    )),
                    o.setData({ authVerifying: !0 }),
                    (e.prev = 2),
                    (e.next = 5),
                    s({ forceRefresh: !!u.forceRefresh })
                  );
                case 5:
                  if (
                    ((c = e.sent),
                    (h = c || null) && h.user && !0 !== h.fromCache)
                  ) {
                    e.next = 20;
                    break;
                  }
                  return (e.prev = 8), (e.next = 11), a();
                case 11:
                  (f = e.sent) && "object" === r(f) && (h = f), (e.next = 20);
                  break;
                case 15:
                  if (((e.prev = 15), (e.t0 = e.catch(8)), !u.forceRefresh)) {
                    e.next = 19;
                    break;
                  }
                  throw e.t0;
                case 19:
                  o.reportInitIssue("auth_me_sync", e.t0, {
                    toast: !1,
                    fallbackMessage: "登录状态同步失败",
                  });
                case 20:
                  return (
                    h && h.user && o.applyAuthUserProfile(h.user),
                    o.data.isLoggedIn
                      ? o.setData({ authVerifying: !1 })
                      : o.setData({ isLoggedIn: !0, authVerifying: !1 }),
                    e.abrupt("return", !0)
                  );
                case 25:
                  throw (
                    ((e.prev = 25),
                    (e.t1 = e.catch(2)),
                    (l = { authVerifying: !1 }),
                    o.shouldClearAuthSessionOnLoginError(e.t1) &&
                      (i(), o.data.isLoggedIn && (l.isLoggedIn = !1)),
                    o.setData(l),
                    u.silent ||
                      o.showToast(
                        o.resolveInitErrorToast(e.t1, "登录失败，请稍后重试")
                      ),
                    e.t1)
                  );
                case 32:
                case "end":
                  return e.stop();
              }
          },
          t,
          null,
          [
            [2, 25],
            [8, 15],
          ]
        );
      })
    )();
  },
  shouldClearAuthSessionOnLoginError: function (e) {
    if (this.getInitErrorCode(e) === o.AUTH_INVALID) return !0;
    var r = String(this.getErrorText(e) || "").toUpperCase();
    return (
      r.indexOf("AUTH_TOKEN_REQUIRED") >= 0 ||
      r.indexOf("AUTH_TOKEN_INVALID") >= 0 ||
      r.indexOf("AUTH_TOKEN_EXPIRED") >= 0 ||
      r.indexOf("AUTH_TOKEN_REVOKED") >= 0 ||
      r.indexOf("AUTH_CONTEXT_MISSING") >= 0
    );
  },
};
