var e = require("../../../@babel/runtime/helpers/typeof"),
  t =
    require("./handle-confirm-payment-constants").PENDING_ORDER_REUSE_WINDOW_MS;
function r(e) {
  var t = Number(e || 0);
  return Number.isFinite(t) ? Number(t.toFixed(2)) : 0;
}
function n(t) {
  return !t || "object" !== e(t) || Array.isArray(t)
    ? {}
    : Object.keys(t)
        .sort()
        .reduce(function (e, r) {
          var n = String(t[r] || "").trim();
          return n && (e[r] = n), e;
        }, {});
}
function i(t) {
  var i = t && "object" === e(t) ? t : {},
    o = (Array.isArray(i.cartItems) ? i.cartItems : [])
      .filter(function (e) {
        return e && e.checked;
      })
      .map(function (e) {
        return {
          id: String(e.id || "").trim(),
          pattern: Array.isArray(e.pattern)
            ? e.pattern
                .map(function (e) {
                  return String(e || "").trim();
                })
                .filter(Boolean)
            : [],
          price: r(e.price),
          itemOptionAmount: r(
            e.itemOptionAmount ||
              (e.selectedOptionSummary && e.selectedOptionSummary.amount) ||
              0
          ),
          selectedOptions: n(e.selectedOptions),
        };
      });
  return (function t(r) {
    return Array.isArray(r)
      ? "[".concat(
          r
            .map(function (e) {
              return t(e);
            })
            .join(","),
          "]"
        )
      : r && "object" === e(r)
      ? "{".concat(
          Object.keys(r)
            .sort()
            .map(function (e) {
              return "".concat(JSON.stringify(e), ":").concat(t(r[e]));
            })
            .join(","),
          "}"
        )
      : JSON.stringify(null != r ? r : null);
  })({
    addressId: String((i.selectedAddress && i.selectedAddress.id) || "").trim(),
    checkedItems: o,
    selectedCheckoutOptions: n(i.selectedCheckoutOptions),
    checkedCartTotal: r(i.checkedCartTotal),
  });
}
module.exports = {
  buildPaymentCheckoutSignature: i,
  resolvePendingPaymentState: function (e) {
    var r =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : Date.now(),
      n = String((e && e.pendingPaymentOrderNo) || "").trim(),
      o = Number((e && e.pendingPaymentAmount) || 0),
      a = Number((e && e.pendingPaymentCreatedAt) || 0),
      u = String((e && e.pendingPaymentSignature) || "").trim(),
      c = i(e),
      d = !!(n && u && u === c && Number.isFinite(a) && a > 0 && r - a <= t);
    return d
      ? {
          orderNo: n,
          amount: o,
          canReusePendingOrder: !0,
          shouldClearPending: !1,
        }
      : {
          orderNo: n ? "" : n,
          amount: n ? 0 : o,
          canReusePendingOrder: !1,
          shouldClearPending: !!n,
        };
  },
};
