var e = new Set(["PAID"]),
  E = new Set(["SUCCESS", "SUCCESS_LATE", "PAID"]),
  S = new Set(["PAY_FAILED", "CANCELLED_TIMEOUT", "CANCELLED_USER"]),
  t = new Set([
    "CLOSED",
    "REVOKED",
    "PAYERROR",
    "CLOSED_TIMEOUT",
    "CLOSED_BY_USER",
  ]);
module.exports = {
  isPaidByOrderDetail: function (S, t) {
    return e.has(S) || E.has(t);
  },
  isFailedByOrderDetail: function (e, E) {
    return S.has(e) || t.has(E);
  },
};
