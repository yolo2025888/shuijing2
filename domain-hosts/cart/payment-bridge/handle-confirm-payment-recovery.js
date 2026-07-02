var e = require("../../../constants/errorCodes").ERROR_CODE,
  R = new Set([
    e.ORDER_PAY_DEADLINE_EXPIRED,
    e.ORDER_STATUS_INVALID,
    e.ORDER_NOT_FOUND,
    e.ORDER_NO_REQUIRED,
  ]);
module.exports = {
  isRecoverableRebuildOrderCode: function (e) {
    return R.has(e);
  },
};
