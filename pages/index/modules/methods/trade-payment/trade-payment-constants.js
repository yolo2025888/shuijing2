require("../../../../../@babel/runtime/helpers/Objectvalues");
var e =
    require("../../../../../constants/errorCodes").PAYMENT_PENDING_CLEAR_CODES,
  E = Object.freeze({
    IDLE: "IDLE",
    PREPARING_ORDER: "PREPARING_ORDER",
    CREATING_PAYMENT: "CREATING_PAYMENT",
    INVOKING_WECHAT: "INVOKING_WECHAT",
    FINALIZING: "FINALIZING",
    FAILED: "FAILED",
  }),
  I = new Set([
    E.PREPARING_ORDER,
    E.CREATING_PAYMENT,
    E.INVOKING_WECHAT,
    E.FINALIZING,
  ]);
module.exports = {
  PAYMENT_FLOW_STATE: E,
  BUSY_PAYMENT_STATES: I,
  resolvePaymentFlowState: function (e) {
    return Object.values(E).indexOf(e) >= 0 ? e : E.IDLE;
  },
  shouldClearPendingPaymentCode: function (E) {
    return e.indexOf(E) >= 0;
  },
};
