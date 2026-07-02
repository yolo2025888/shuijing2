var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../deps/trade-deps"),
  n = r.getPaymentResult,
  a = r.getOrderDetail,
  i = r.logger,
  s = require("../../../../constants/errorCodes").ERROR_CODE,
  o = require("./trade-payment/trade-payment-constants"),
  u = o.PAYMENT_FLOW_STATE,
  d = o.BUSY_PAYMENT_STATES,
  m = o.resolvePaymentFlowState,
  y = o.shouldClearPendingPaymentCode,
  P = require("./trade-payment/trade-payment-order-status"),
  l = P.isPaidByOrderDetail,
  p = P.isFailedByOrderDetail,
  c = require("./trade-payment/trade-payment-wait-paid").waitOrderPaidCore;
module.exports = {
  setPaymentFlowState: function (e, t) {
    var r = m(e),
      n = Object.assign(
        { paymentFlowState: r, isConfirmPaying: d.has(r) },
        t || {}
      );
    this.setData(n), i.info("[payment-flow]", r);
  },
  resetPaymentFlowState: function (e) {
    this.setPaymentFlowState(
      u.IDLE,
      Object.assign(
        {
          pendingPaymentOrderNo: "",
          pendingPaymentAmount: 0,
          pendingPaymentCreatedAt: 0,
          pendingPaymentSignature: "",
        },
        e || {}
      )
    );
  },
  isPaymentCancelledError: function (e) {
    return this.getBusinessErrorCode(e) === s.REQUEST_PAYMENT_CANCELLED;
  },
  shouldClearPendingPaymentByError: function (e) {
    var t = this.getBusinessErrorCode(e);
    return y(t);
  },
  requestWechatPayment: function (e) {
    return e
      ? wx.requestPayment
        ? new Promise(function (t, r) {
            wx.requestPayment({
              timeStamp: e.timeStamp,
              nonceStr: e.nonceStr,
              package: e.package,
              signType: e.signType,
              paySign: e.paySign,
              success: t,
              fail: r,
            });
          })
        : Promise.reject(new Error(s.REQUEST_PAYMENT_NOT_SUPPORTED))
      : Promise.reject(new Error(s.MISSING_WECHAT_PAY_PARAMS));
  },
  sleep: function (e) {
    return new Promise(function (t) {
      setTimeout(t, Math.max(0, Number(e) || 0));
    });
  },
  waitOrderPaid: function (r) {
    var s = this;
    return t(
      e().mark(function t() {
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  "return",
                  c({
                    orderNo: r,
                    getPaymentResult: n,
                    getOrderDetail: a,
                    logger: i,
                    sleep: s.sleep.bind(s),
                    isPaidByOrderDetail: l,
                    isFailedByOrderDetail: p,
                  })
                );
              case 1:
              case "end":
                return e.stop();
            }
        }, t);
      })
    )();
  },
};
