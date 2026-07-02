var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../../../../../constants/errorCodes").ERROR_CODE;
function a() {
  return (a = t(
    e().mark(function t(a) {
      var s, n, o, i, p, u, d, l, m, E, c, _, w, f, b, N, g, x, y;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((s = a.orderNo),
                  (n = a.getPaymentResult),
                  (o = a.getOrderDetail),
                  (i = a.logger),
                  (p = a.sleep),
                  (u = a.isPaidByOrderDetail),
                  (d = a.isFailedByOrderDetail),
                  (l = String(s || "").trim()))
                ) {
                  e.next = 4;
                  break;
                }
                throw new Error(r.ORDER_NO_REQUIRED);
              case 4:
                (m = 6),
                  (E = 1200),
                  i.info("[payment-flow] wait_paid:start", {
                    orderNo: l,
                    maxAttempts: m,
                    intervalMs: E,
                  }),
                  (c = 0);
              case 8:
                if (!(c < m)) {
                  e.next = 50;
                  break;
                }
                return (e.prev = 9), (e.next = 12), n(l);
              case 12:
                if (
                  ((_ = e.sent),
                  (w = String((_ && _.state) || "").toUpperCase()),
                  i.info("[payment-flow] wait_paid:payment_result", {
                    orderNo: l,
                    attempt: c + 1,
                    state: w,
                  }),
                  "PAID" !== w)
                ) {
                  e.next = 17;
                  break;
                }
                return e.abrupt("return", _ || null);
              case 17:
                if ("CLOSED" !== w) {
                  e.next = 21;
                  break;
                }
                throw (
                  (((f = new Error(r.REQUEST_PAYMENT_FAILED)).code =
                    r.REQUEST_PAYMENT_FAILED),
                  f)
                );
              case 21:
                e.next = 44;
                break;
              case 23:
                return (
                  (e.prev = 23),
                  (e.t0 = e.catch(9)),
                  i.warn("[payment-flow] wait_paid:payment_result_failed", {
                    orderNo: l,
                    attempt: c + 1,
                    message: String((e.t0 && e.t0.message) || ""),
                    statusCode:
                      Number(e.t0 && e.t0.statusCode ? e.t0.statusCode : 0) ||
                      void 0,
                    requestId: String(
                      (e.t0 && e.t0.requestId) ||
                        (e.t0 &&
                          e.t0.responseData &&
                          e.t0.responseData.requestId) ||
                        ""
                    ),
                  }),
                  (e.prev = 26),
                  (e.next = 29),
                  o(l)
                );
              case 29:
                if (
                  ((b = e.sent),
                  (N = String((b && b.status) || "").toUpperCase()),
                  (g = String(
                    (b && b.payment && b.payment.status) || ""
                  ).toUpperCase()),
                  i.info("[payment-flow] wait_paid:order_detail", {
                    orderNo: l,
                    attempt: c + 1,
                    orderStatus: N,
                    paymentStatus: g,
                  }),
                  !u(N, g))
                ) {
                  e.next = 35;
                  break;
                }
                return e.abrupt("return", b || null);
              case 35:
                if (!d(N, g)) {
                  e.next = 39;
                  break;
                }
                throw (
                  (((x = new Error(r.REQUEST_PAYMENT_FAILED)).code =
                    r.REQUEST_PAYMENT_FAILED),
                  x)
                );
              case 39:
                e.next = 44;
                break;
              case 41:
                (e.prev = 41),
                  (e.t1 = e.catch(26)),
                  i.warn("[payment-flow] wait_paid:order_detail_failed", {
                    orderNo: l,
                    attempt: c + 1,
                    message: String((e.t1 && e.t1.message) || ""),
                    statusCode:
                      Number(e.t1 && e.t1.statusCode ? e.t1.statusCode : 0) ||
                      void 0,
                    requestId: String(
                      (e.t1 && e.t1.requestId) ||
                        (e.t1 &&
                          e.t1.responseData &&
                          e.t1.responseData.requestId) ||
                        ""
                    ),
                  });
              case 44:
                if (!(c < m - 1)) {
                  e.next = 47;
                  break;
                }
                return (e.next = 47), p(E);
              case 47:
                (c += 1), (e.next = 8);
                break;
              case 50:
                throw (
                  (((y = new Error(r.PAYMENT_RESULT_CONFIRM_TIMEOUT)).code =
                    r.PAYMENT_RESULT_CONFIRM_TIMEOUT),
                  i.warn("[payment-flow] wait_paid:timeout", {
                    orderNo: l,
                    maxAttempts: m,
                  }),
                  y)
                );
              case 54:
              case "end":
                return e.stop();
            }
        },
        t,
        null,
        [
          [9, 23],
          [26, 41],
        ]
      );
    })
  )).apply(this, arguments);
}
module.exports = {
  waitOrderPaidCore: function (e) {
    return a.apply(this, arguments);
  },
};
