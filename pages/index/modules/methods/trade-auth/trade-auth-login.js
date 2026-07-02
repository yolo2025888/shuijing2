var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../../../../@babel/runtime/helpers/typeof"),
  n = require("../../deps/trade-deps"),
  a = n.loginByWechatPhone,
  o = n.logger;
function s(e) {
  e && e.data && "object" === t(e.data) && e.data;
  return !0;
}
function u() {
  return i.apply(this, arguments);
}
function i() {
  return (i = r(
    e().mark(function r() {
      var t,
        n = this;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (s(this)) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return");
              case 2:
                if (!s(this)) {
                  e.next = 10;
                  break;
                }
                if (
                  ((t = []),
                  "function" == typeof this.loadPersistedData &&
                    t.push(
                      Promise.resolve().then(function () {
                        var e = n.loadPersistedData({ force: !0 });
                        return n.loadPersistedData(), e;
                      })
                    ),
                  "function" == typeof this.loadAddressAndDashboard &&
                    t.push(
                      Promise.resolve().then(function () {
                        var e = n.loadAddressAndDashboard({
                          force: !0,
                          profileVisible: !0,
                        });
                        return n.loadAddressAndDashboard(), e;
                      })
                    ),
                  t.length)
                ) {
                  e.next = 8;
                  break;
                }
                return e.abrupt("return");
              case 8:
                return (e.next = 10), Promise.allSettled(t);
              case 10:
              case "end":
                return e.stop();
            }
        },
        r,
        this
      );
    })
  )).apply(this, arguments);
}
function c(e) {
  var r = e && "object" === t(e) ? e : {};
  return (
    (!r.data || !0 !== r.data.isLoggedIn) &&
    "function" == typeof r.setData &&
    (r.setData({ showProfileAuthPrompt: !0, profileAuthSubmitting: !1 }), !0)
  );
}
module.exports = {
  resolvePhoneAuthDetailToast: function (e) {
    var r = Number(e && e.errno),
      t = String((e && e.errMsg) || "").toLowerCase();
    return 102 === r
      ? "当前 AppID 未开通手机号快速验证"
      : 1400001 === r
      ? "手机号验证额度不足"
      : t.indexOf("user deny") >= 0 || t.indexOf("cancel") >= 0
      ? "你已取消授权"
      : t.indexOf("no permission") >= 0 || t.indexOf("not support") >= 0
      ? "当前环境不支持手机号授权，请真机调试"
      : "获取手机号失败，请重试";
  },
  handlePhoneLoginCore: function (t) {
    var n = this;
    return r(
      e().mark(function r() {
        var i, c, h;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!n._phoneLoginInProgress) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return", !1);
                case 2:
                  if (
                    ((i = (t && t.detail) || {}),
                    (c = i && i.code ? String(i.code) : ""))
                  ) {
                    e.next = 8;
                    break;
                  }
                  return (
                    o.warn("getPhoneNumber failed detail:", i),
                    n.showToast(n.resolvePhoneAuthDetailToast(i)),
                    e.abrupt("return", !1)
                  );
                case 8:
                  if (n.data.isLoggedIn) {
                    e.next = 14;
                    break;
                  }
                  return (
                    (e.next = 11), n.handleWechatLoginCore({ successToast: !1 })
                  );
                case 11:
                  if (e.sent) {
                    e.next = 14;
                    break;
                  }
                  return e.abrupt("return", !1);
                case 14:
                  return (
                    n.showToast("正在绑定手机号..."),
                    (n._phoneLoginInProgress = !0),
                    (e.prev = 16),
                    (e.next = 19),
                    a(c)
                  );
                case 19:
                  if (
                    ((h = e.sent) &&
                      h.user &&
                      "function" == typeof n.applyAuthUserProfile &&
                      n.applyAuthUserProfile(h.user),
                    n.setData({ isLoggedIn: !0 }),
                    !s(n))
                  ) {
                    e.next = 25;
                    break;
                  }
                  return (e.next = 25), u.call(n);
                case 25:
                  return n.showToast("手机号已绑定"), e.abrupt("return", !0);
                case 29:
                  return (
                    (e.prev = 29),
                    (e.t0 = e.catch(16)),
                    n.reportBusinessError(
                      "Bind phone",
                      e.t0,
                      "手机号绑定失败，请稍后重试"
                    ),
                    e.abrupt("return", !1)
                  );
                case 33:
                  return (
                    (e.prev = 33), (n._phoneLoginInProgress = !1), e.finish(33)
                  );
                case 36:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[16, 29, 33, 36]]
        );
      })
    )();
  },
  handleCheckoutPhoneLogin: function (t) {
    var n = this;
    return r(
      e().mark(function r() {
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), n.handlePhoneLoginCore(t);
              case 2:
                if (e.sent) {
                  e.next = 5;
                  break;
                }
                return e.abrupt("return");
              case 5:
                return (
                  "function" == typeof n.promptWechatProfileAuthIfNeeded &&
                    n.promptWechatProfileAuthIfNeeded(),
                  (e.next = 8),
                  n.handleStartCheckout({ skipLoginCheck: !0 })
                );
              case 8:
              case "end":
                return e.stop();
            }
        }, r);
      })
    )();
  },
  handleCheckoutLogin: function () {
    var t = this;
    return r(
      e().mark(function r() {
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (t.data.isLoggedIn || t.data.showProfileAuthPrompt) {
                  e.next = 4;
                  break;
                }
                return (
                  (t._pendingWechatLoginAction = "checkout"),
                  c(t),
                  e.abrupt("return")
                );
              case 4:
                return (
                  (e.next = 6), t.handleWechatLoginCore({ successToast: !1 })
                );
              case 6:
                if (e.sent) {
                  e.next = 9;
                  break;
                }
                return e.abrupt("return");
              case 9:
                return (
                  "function" == typeof t.promptWechatProfileAuthIfNeeded &&
                    t.promptWechatProfileAuthIfNeeded(),
                  (e.next = 12),
                  t.handleStartCheckout({ skipLoginCheck: !0 })
                );
              case 12:
              case "end":
                return e.stop();
            }
        }, r);
      })
    )();
  },
  ensureWechatProfileAfterLogin: function (t) {
    var n = this;
    return r(
      e().mark(function r() {
        var a, o;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (n.data.isLoggedIn) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return", !1);
              case 2:
                return (
                  (a = Object.assign({ required: !0 }, t || {})),
                  (e.next = 5),
                  n.tryCaptureWechatUserProfile({ silent: !a.required })
                );
              case 5:
                if ((o = e.sent)) {
                  e.next = 8;
                  break;
                }
                return e.abrupt("return", !1);
              case 8:
                return (e.next = 10), n.applyAndSyncWechatUserProfile(o);
              case 10:
                return e.abrupt("return", !0);
              case 11:
              case "end":
                return e.stop();
            }
        }, r);
      })
    )();
  },
  handlePhoneLogin: function (t) {
    var n = this;
    return r(
      e().mark(function r() {
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), n.handlePhoneLoginCore(t);
              case 2:
                if (e.sent) {
                  e.next = 5;
                  break;
                }
                return e.abrupt("return");
              case 5:
                "function" == typeof n.promptWechatProfileAuthIfNeeded &&
                  n.promptWechatProfileAuthIfNeeded();
              case 6:
              case "end":
                return e.stop();
            }
        }, r);
      })
    )();
  },
  handleWechatLoginCore: function (t) {
    var n = this;
    return r(
      e().mark(function r() {
        var a;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!n.data.isLoggedIn) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return", !0);
                case 2:
                  if (!n._wechatLoginInProgress) {
                    e.next = 4;
                    break;
                  }
                  return e.abrupt("return", !1);
                case 4:
                  return (
                    (a = Object.assign({ successToast: !0 }, t || {})),
                    n.showToast("正在登录..."),
                    (n._wechatLoginInProgress = !0),
                    (e.prev = 7),
                    (e.next = 10),
                    n.ensureLoginState({ silent: !1, forceRefresh: !0 })
                  );
                case 10:
                  if (!s(n)) {
                    e.next = 13;
                    break;
                  }
                  return (e.next = 13), u.call(n);
                case 13:
                  return (
                    !1 !== a.successToast && n.showToast("登录成功"),
                    e.abrupt("return", !0)
                  );
                case 17:
                  return (
                    (e.prev = 17),
                    (e.t0 = e.catch(7)),
                    o.error("Login failed", e.t0),
                    e.abrupt("return", !1)
                  );
                case 21:
                  return (
                    (e.prev = 21), (n._wechatLoginInProgress = !1), e.finish(21)
                  );
                case 24:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[7, 17, 21, 24]]
        );
      })
    )();
  },
  handleLogin: function () {
    var t = this;
    return r(
      e().mark(function r() {
        var n;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (t.data.isLoggedIn || t.data.showProfileAuthPrompt) {
                  e.next = 3;
                  break;
                }
                return c(t), e.abrupt("return");
              case 3:
                return (e.next = 5), t.handleWechatLoginCore();
              case 5:
                if (e.sent) {
                  e.next = 8;
                  break;
                }
                return e.abrupt("return");
              case 8:
                if (
                  ((n = String(t._pendingWechatLoginAction || "")),
                  (t._pendingWechatLoginAction = ""),
                  "function" == typeof t.promptWechatProfileAuthIfNeeded &&
                    t.promptWechatProfileAuthIfNeeded(),
                  "checkout" !== n ||
                    "function" != typeof t.handleStartCheckout)
                ) {
                  e.next = 14;
                  break;
                }
                return (
                  (e.next = 14), t.handleStartCheckout({ skipLoginCheck: !0 })
                );
              case 14:
              case "end":
                return e.stop();
            }
        }, r);
      })
    )();
  },
};
