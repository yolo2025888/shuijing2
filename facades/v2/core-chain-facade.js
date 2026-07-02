var r = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../repositories/authRepository"),
  n = require("../../repositories/addressRepository"),
  u = require("../../repositories/orderRepository"),
  a = require("./core-chain-dto"),
  s = a.normalizeWechatAddressInput,
  o = a.normalizeLoginOptions,
  i = a.normalizeWechatPhonePayload,
  c = a.normalizeCheckoutCartItems,
  p = a.normalizeCreateOrderPayload;
function h() {
  return (h = e(
    r().mark(function e(n) {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", t.loginByWechat(o(n)));
            case 1:
            case "end":
              return r.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function f() {
  return (f = e(
    r().mark(function e(n, u) {
      var a;
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return (
                (a = i(n)),
                r.abrupt("return", t.loginByWechatPhone(a.phoneCode, u))
              );
            case 2:
            case "end":
              return r.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function l() {
  return (l = e(
    r().mark(function e() {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", t.logoutByWechat());
            case 1:
            case "end":
              return r.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function d() {
  return (d = e(
    r().mark(function e() {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", t.getWechatAuthSession());
            case 1:
            case "end":
              return r.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function y() {
  return (y = e(
    r().mark(function e() {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", n.listAddresses());
            case 1:
            case "end":
              return r.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function m() {
  return (m = e(
    r().mark(function e() {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", n.getDefaultAddress());
            case 1:
            case "end":
              return r.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function w() {
  return (w = e(
    r().mark(function e(t) {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt("return", n.saveWechatAddress(s(t)));
            case 1:
            case "end":
              return r.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function v() {
  return (v = e(
    r().mark(function e(t) {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u.previewCheckoutFromCheckedItems(c(t))
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function k() {
  return (k = e(
    r().mark(function e(t, n) {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                u.createOrderFromCheckedItems(c(t), p(n))
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
module.exports = {
  loginByWechat: function (r) {
    return h.apply(this, arguments);
  },
  loginByWechatPhone: function (r, e) {
    return f.apply(this, arguments);
  },
  logoutByWechat: function () {
    return l.apply(this, arguments);
  },
  getWechatAuthSession: function () {
    return d.apply(this, arguments);
  },
  listAddresses: function () {
    return y.apply(this, arguments);
  },
  getDefaultAddress: function () {
    return m.apply(this, arguments);
  },
  saveWechatAddress: function (r) {
    return w.apply(this, arguments);
  },
  previewCheckout: function (r) {
    return v.apply(this, arguments);
  },
  createOrder: function (r, e) {
    return k.apply(this, arguments);
  },
};
