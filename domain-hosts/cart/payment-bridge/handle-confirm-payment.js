var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../../../pages/index/modules/deps/trade-deps"),
  a = require("../../../constants/errorCodes").ERROR_CODE,
  n = require("./handle-confirm-payment-constants"),
  o = n.PAYMENT_FLOW_STATE,
  s = n.BUSY_PAYMENT_STATES,
  d =
    require("./handle-confirm-payment-recovery").isRecoverableRebuildOrderCode,
  c = require("./handle-confirm-payment-pending"),
  i = c.buildPaymentCheckoutSignature,
  u = c.resolvePendingPaymentState,
  m = require("./handle-confirm-payment-context").resolveCheckoutContext,
  l = require("./handle-confirm-payment-outcome"),
  h = l.applyPaymentSuccess,
  p = l.applyPaymentFailure,
  y = require("./handle-confirm-payment-order").createOrderIfNeeded,
  P = require("./handle-confirm-payment-payment").ensurePaymentParams,
  f = r.createOrderFromCheckedItems,
  w = r.createPaymentForOrder,
  O = r.normalizeCartItems,
  g = r.playSound,
  C = r.logger;
module.exports = {
  handleClosePaymentSuccessPopup: function () {
    if (this.data && !0 === this.data.showPaymentSuccessPopup) {
      var e = { showPaymentSuccessPopup: !1 };
      "function" != typeof this.setDataPatch
        ? this.setData(e)
        : this.setDataPatch(e);
    }
  },
  handleConfirmPayment: function () {
    var r = this;
    return t(
      e().mark(function t() {
        var n, c, l, b, k, S, R, A, E, N, F;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!s.has(String(r.data.paymentFlowState || ""))) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return");
                case 2:
                  if ((n = m(r.data, O, r.showToast.bind(r)))) {
                    e.next = 5;
                    break;
                  }
                  return e.abrupt("return");
                case 5:
                  return (
                    (c = n.checkedItems),
                    (l = n.selectedAddress),
                    (b = u(r.data)),
                    (k = b.orderNo),
                    (S = b.amount),
                    (R = b.canReusePendingOrder),
                    b.shouldClearPending &&
                      r.setData({
                        pendingPaymentOrderNo: "",
                        pendingPaymentAmount: 0,
                        pendingPaymentCreatedAt: 0,
                        pendingPaymentSignature: "",
                      }),
                    (A = !1),
                    C.info("[payment-flow] submit:start", {
                      checkedItemCount: c.length,
                      selectedAddressId: String(l.id || ""),
                      pendingOrderNo: k,
                      canReusePendingOrder: R,
                    }),
                    r.setPaymentFlowState(o.PREPARING_ORDER),
                    (e.prev = 14),
                    (e.next = 17),
                    y({
                      currentOrderNo: k,
                      currentAmount: S,
                      checkedItems: c,
                      selectedAddress: l,
                      checkoutPreview: r.data.checkoutPreview || null,
                      selectedCheckoutOptions:
                        r.data.selectedCheckoutOptions || {},
                      checkedCartTotal: r.data.checkedCartTotal,
                      hasRebuiltOrderAfterPaymentError: A,
                      createOrderFromCheckedItems: f,
                      setPaymentFlowState: r.setPaymentFlowState.bind(r),
                      paymentFlowState: o,
                      getBusinessErrorCode: r.getBusinessErrorCode.bind(r),
                      isRecoverableRebuildOrderCode: d,
                      logger: C,
                    })
                  );
                case 17:
                  if (
                    ((E = e.sent),
                    (k = E.currentOrderNo),
                    (S = E.currentAmount),
                    (A = E.hasRebuiltOrderAfterPaymentError),
                    (N = E.wxPayParams),
                    k)
                  ) {
                    e.next = 24;
                    break;
                  }
                  throw new Error(a.ORDER_NO_REQUIRED);
                case 24:
                  return (
                    S <= 0 && (S = Number(r.data.checkedCartTotal || 0)),
                    (e.next = 27),
                    P({
                      wxPayParams: N,
                      currentOrderNo: k,
                      currentAmount: S,
                      checkedItems: c,
                      selectedAddress: l,
                      checkoutPreview: r.data.checkoutPreview || null,
                      selectedCheckoutOptions:
                        r.data.selectedCheckoutOptions || {},
                      checkedCartTotal: r.data.checkedCartTotal,
                      hasRebuiltOrderAfterPaymentError: A,
                      createPaymentForOrder: w,
                      createOrderFromCheckedItems: f,
                      setPaymentFlowState: r.setPaymentFlowState.bind(r),
                      paymentFlowState: o,
                      getBusinessErrorCode: r.getBusinessErrorCode.bind(r),
                      isRecoverableRebuildOrderCode: d,
                      logger: C,
                    })
                  );
                case 27:
                  return (
                    (F = e.sent),
                    (N = F.wxPayParams),
                    (k = F.currentOrderNo),
                    (S = F.currentAmount),
                    (A = F.hasRebuiltOrderAfterPaymentError),
                    r.setPaymentFlowState(o.INVOKING_WECHAT, {
                      pendingPaymentOrderNo: k,
                      pendingPaymentAmount: S,
                      pendingPaymentCreatedAt: Date.now(),
                      pendingPaymentSignature: i(r.data),
                    }),
                    C.info("[payment-flow] submit:invoke_wechat", {
                      orderNo: k,
                      amount: S,
                    }),
                    (e.next = 36),
                    r.requestWechatPayment(N)
                  );
                case 36:
                  return (
                    C.info("[payment-flow] submit:wechat_success", {
                      orderNo: k,
                    }),
                    r.setPaymentFlowState(o.FINALIZING),
                    (e.next = 40),
                    r.waitOrderPaid(k)
                  );
                case 40:
                  C.info("[payment-flow] submit:confirmed_paid", {
                    orderNo: k,
                  }),
                    h(r, O, g),
                    (e.next = 47);
                  break;
                case 44:
                  (e.prev = 44), (e.t0 = e.catch(14)), p(r, e.t0, k, o, C);
                case 47:
                  return (
                    (e.prev = 47),
                    s.has(String(r.data.paymentFlowState || "")) &&
                      r.setPaymentFlowState(o.IDLE),
                    e.finish(47)
                  );
                case 50:
                case "end":
                  return e.stop();
              }
          },
          t,
          null,
          [[14, 44, 47, 50]]
        );
      })
    )();
  },
};
