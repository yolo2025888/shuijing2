var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../../../pages/index/modules/deps/profile-deps"),
  t = a.createPaymentForOrder,
  n = a.logger,
  o =
    require("../../../cart/payment-bridge/handle-confirm-payment-outcome").showPostPaymentSupportQrPopup;
module.exports = {
  handleOrderManagerPayOrder: function () {
    var a = this;
    return r(
      e().mark(function r() {
        var i, s, u, d, c;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (a.handleProfileProtectedAction()) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return");
                case 2:
                  if (
                    ((i = a.data.orderManagerDetail || null),
                    (s = String(
                      (i && i.orderNo) || a.data.orderManagerActiveOrderNo || ""
                    ).trim()))
                  ) {
                    e.next = 6;
                    break;
                  }
                  return e.abrupt("return");
                case 6:
                  if (!a.data.orderManagerPaying) {
                    e.next = 8;
                    break;
                  }
                  return e.abrupt("return");
                case 8:
                  return (
                    a.setData({ orderManagerPaying: !0 }),
                    (e.prev = 9),
                    (u = Number((i && i.payableAmount) || 0)),
                    (e.next = 13),
                    t(s, u)
                  );
                case 13:
                  if (
                    ((d = e.sent),
                    (c = d && d.wxPayParams ? d.wxPayParams : null),
                    "function" == typeof a.requestWechatPayment)
                  ) {
                    e.next = 17;
                    break;
                  }
                  throw new Error("REQUEST_PAYMENT_NOT_SUPPORTED");
                case 17:
                  return (e.next = 19), a.requestWechatPayment(c);
                case 19:
                  if ("function" != typeof a.waitOrderPaid) {
                    e.next = 22;
                    break;
                  }
                  return (e.next = 22), a.waitOrderPaid(s);
                case 22:
                  return (
                    o(a) || a.showToast("支付成功"),
                    (e.next = 26),
                    a.loadOrderManagerDetail(s, { silent: !1 })
                  );
                case 26:
                  if ("function" != typeof a.loadOrderManagerList) {
                    e.next = 29;
                    break;
                  }
                  return (
                    (e.next = 29),
                    a.loadOrderManagerList({
                      filter: a.data.orderManagerFilter || "pending_pay",
                      page: 1,
                      append: !1,
                      refreshDetail: !0,
                    })
                  );
                case 29:
                  e.next = 35;
                  break;
                case 31:
                  (e.prev = 31),
                    (e.t0 = e.catch(9)),
                    n.error("Pay order from order manager failed", e.t0),
                    a.showToast("支付未完成，请稍后重试");
                case 35:
                  return (
                    (e.prev = 35),
                    a.setData({ orderManagerPaying: !1 }),
                    e.finish(35)
                  );
                case 38:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[9, 31, 35, 38]]
        );
      })
    )();
  },
};
