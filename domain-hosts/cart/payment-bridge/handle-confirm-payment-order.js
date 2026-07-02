var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator");
function t() {
  return (t = r(
    e().mark(function r(t) {
      var n, a, u, s, o, c, d, i, l, m, p, P, y, b, h, O, R, f, w, x;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((n = t.currentOrderNo),
                  (a = t.currentAmount),
                  (u = t.checkedItems),
                  (s = t.selectedAddress),
                  (o = t.checkoutPreview),
                  (c = t.selectedCheckoutOptions),
                  (d = t.checkedCartTotal),
                  (i = t.hasRebuiltOrderAfterPaymentError),
                  (l = t.createOrderFromCheckedItems),
                  (m = t.setPaymentFlowState),
                  (p = t.paymentFlowState),
                  (P = t.getBusinessErrorCode),
                  (y = t.isRecoverableRebuildOrderCode),
                  (b = t.logger),
                  (h = String(n || "").trim()),
                  (O = Number(a || 0)),
                  (R = null),
                  (f = !!i),
                  !h)
                ) {
                  e.next = 7;
                  break;
                }
                return e.abrupt("return", {
                  currentOrderNo: h,
                  currentAmount: O,
                  wxPayParams: R,
                  hasRebuiltOrderAfterPaymentError: f,
                });
              case 7:
                return (
                  m(p.PREPARING_ORDER),
                  (w = null),
                  (e.prev = 9),
                  (e.next = 12),
                  l(u, {
                    addressId: s.id,
                    checkoutPreview: o || null,
                    selectedOptions: c || {},
                  })
                );
              case 12:
                (w = e.sent), (e.next = 27);
                break;
              case 15:
                if (
                  ((e.prev = 15),
                  (e.t0 = e.catch(9)),
                  (x = P(e.t0)),
                  f || !y(x))
                ) {
                  e.next = 26;
                  break;
                }
                return (
                  (f = !0),
                  m(p.PREPARING_ORDER, {
                    pendingPaymentOrderNo: "",
                    pendingPaymentAmount: 0,
                    pendingPaymentCreatedAt: 0,
                    pendingPaymentSignature: "",
                  }),
                  (e.next = 23),
                  l(u, {
                    addressId: s.id,
                    checkoutPreview: null,
                    selectedOptions: c || {},
                  })
                );
              case 23:
                (w = e.sent), (e.next = 27);
                break;
              case 26:
                throw e.t0;
              case 27:
                return (
                  (h = String((w && w.orderNo) || "").trim()),
                  (O = Number(w && w.payableAmount ? w.payableAmount : d)),
                  (R = w && w.wxPayParams ? w.wxPayParams : null),
                  b.info("[payment-flow] submit:order_ready", {
                    orderNo: h,
                    amount: O,
                    hasWxPayParams: !!R,
                  }),
                  e.abrupt("return", {
                    currentOrderNo: h,
                    currentAmount: O,
                    wxPayParams: R,
                    hasRebuiltOrderAfterPaymentError: f,
                  })
                );
              case 32:
              case "end":
                return e.stop();
            }
        },
        r,
        null,
        [[9, 15]]
      );
    })
  )).apply(this, arguments);
}
module.exports = {
  createOrderIfNeeded: function (e) {
    return t.apply(this, arguments);
  },
};
