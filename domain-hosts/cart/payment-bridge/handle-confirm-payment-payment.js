var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../../constants/errorCodes").ERROR_CODE;
function a() {
  return (a = r(
    e().mark(function r(a) {
      var n,
        s,
        u,
        o,
        d,
        m,
        i,
        c,
        p,
        y,
        P,
        l,
        b,
        x,
        N,
        w,
        h,
        R,
        f,
        O,
        A,
        E,
        g,
        k;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((n = a.wxPayParams),
                  (s = a.currentOrderNo),
                  (u = a.currentAmount),
                  (o = a.checkedItems),
                  (d = a.selectedAddress),
                  (m = a.checkoutPreview),
                  (i = a.selectedCheckoutOptions),
                  (c = a.checkedCartTotal),
                  (p = a.hasRebuiltOrderAfterPaymentError),
                  (y = a.createPaymentForOrder),
                  (P = a.createOrderFromCheckedItems),
                  (l = a.setPaymentFlowState),
                  (b = a.paymentFlowState),
                  (x = a.getBusinessErrorCode),
                  (N = a.isRecoverableRebuildOrderCode),
                  (w = a.logger),
                  (h = n || null),
                  (R = String(s || "").trim()),
                  (f = Number(u || 0)),
                  (O = !!p),
                  !h)
                ) {
                  e.next = 7;
                  break;
                }
                return e.abrupt("return", {
                  wxPayParams: h,
                  currentOrderNo: R,
                  currentAmount: f,
                  hasRebuiltOrderAfterPaymentError: O,
                });
              case 7:
                return (
                  l(b.CREATING_PAYMENT), (e.prev = 8), (e.next = 11), y(R, f)
                );
              case 11:
                (A = e.sent),
                  (h = A && A.wxPayParams ? A.wxPayParams : null),
                  w.info("[payment-flow] submit:payment_params_ready", {
                    orderNo: R,
                    amount: f,
                    hasWxPayParams: !!h,
                    prepayId: String(A && A.prepayId ? A.prepayId : ""),
                    outTradeNo: String(A && A.outTradeNo ? A.outTradeNo : ""),
                    reused: !(!A || !A.reused),
                  }),
                  (e.next = 41);
                break;
              case 16:
                if (
                  ((e.prev = 16),
                  (e.t0 = e.catch(8)),
                  (E = x(e.t0)),
                  O || !N(E))
                ) {
                  e.next = 40;
                  break;
                }
                return (
                  (O = !0),
                  l(b.PREPARING_ORDER, {
                    pendingPaymentOrderNo: "",
                    pendingPaymentAmount: 0,
                    pendingPaymentCreatedAt: 0,
                    pendingPaymentSignature: "",
                  }),
                  (e.next = 24),
                  P(o, {
                    addressId: d.id,
                    checkoutPreview: m || null,
                    selectedOptions: i || {},
                  })
                );
              case 24:
                if (
                  ((g = e.sent),
                  (R = String((g && g.orderNo) || "").trim()),
                  (f = Number(g && g.payableAmount ? g.payableAmount : c)),
                  (h = g && g.wxPayParams ? g.wxPayParams : null),
                  R)
                ) {
                  e.next = 30;
                  break;
                }
                throw new Error(t.ORDER_NO_REQUIRED);
              case 30:
                if ((f <= 0 && (f = Number(c || 0)), h)) {
                  e.next = 38;
                  break;
                }
                return l(b.CREATING_PAYMENT), (e.next = 35), y(R, f);
              case 35:
                (k = e.sent),
                  (h = k && k.wxPayParams ? k.wxPayParams : null),
                  w.info(
                    "[payment-flow] submit:payment_params_ready_after_retry",
                    {
                      orderNo: R,
                      amount: f,
                      hasWxPayParams: !!h,
                      prepayId: String(k && k.prepayId ? k.prepayId : ""),
                      outTradeNo: String(k && k.outTradeNo ? k.outTradeNo : ""),
                      reused: !(!k || !k.reused),
                    }
                  );
              case 38:
                e.next = 41;
                break;
              case 40:
                throw e.t0;
              case 41:
                return e.abrupt("return", {
                  wxPayParams: h,
                  currentOrderNo: R,
                  currentAmount: f,
                  hasRebuiltOrderAfterPaymentError: O,
                });
              case 42:
              case "end":
                return e.stop();
            }
        },
        r,
        null,
        [[8, 16]]
      );
    })
  )).apply(this, arguments);
}
module.exports = {
  ensurePaymentParams: function (e) {
    return a.apply(this, arguments);
  },
};
