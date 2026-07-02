var e = require("../../../@babel/runtime/helpers/typeof"),
  t = require("../../profile/index-methods/profile-content/profile-content-modal-contact"),
  r = t.openSupportQrPopup,
  n = t.resolveQrPopupConfig;
function o(t) {
  return !t || "object" !== e(t) || Array.isArray(t) ? {} : t;
}
function a(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255,
    n = String(e || "").trim(),
    o = n || String(t || "").trim();
  return o ? o.slice(0, r) : "";
}
function s(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (!0 === e || !1 === e) return e;
  var r = String(null != e ? e : "")
    .trim()
    .toLowerCase();
  return (
    "1" === r ||
    "true" === r ||
    "yes" === r ||
    "on" === r ||
    ("0" !== r && "false" !== r && "no" !== r && "off" !== r && t)
  );
}
function u(t) {
  if (!t || "object" !== e(t)) return !1;
  var o = n(t, "contact");
  return (
    !(!0 !== o.enabled || !o.imageUrl) &&
    ("function" == typeof t.openSupportQrPopup
      ? !0 === t.openSupportQrPopup("contact")
      : !0 === r.call(t, "contact"))
  );
}
module.exports = {
  applyPaymentSuccess: function (t, r, n) {
    var i = r(
      (t.data.cartItems || []).filter(function (e) {
        return !e.checked;
      })
    );
    t.resetPaymentFlowState({
      cartItems: i,
      isCheckingOut: !1,
      checkoutPreview: null,
      checkoutOptionGroups: [],
      selectedCheckoutOptions: {},
      checkoutOptionRefreshing: !1,
    }),
      t.persistCart(i),
      t.updateCartSummary(i),
      u(t) ||
        ((function (t, r) {
          var n = r && "object" === e(r) ? r : {};
          if (!(!0 === n.enabled && (n.imageUrl || n.text))) return !1;
          var o = {
            showPaymentSuccessPopup: !0,
            paymentSuccessPopupImageUrl: String(n.imageUrl || ""),
            paymentSuccessPopupText: String(n.text || "支付成功，感谢你的支持"),
          };
          return "function" == typeof t.setDataPatch
            ? (t.setDataPatch(o), !0)
            : "function" == typeof t.setData && (t.setData(o), !0);
        })(
          t,
          (function (t) {
            var r = o(
                (t && t.catalogSnapshot && "object" === e(t.catalogSnapshot)
                  ? t.catalogSnapshot
                  : {}
                ).adConfig
              ),
              n = o(r.profile),
              u = o(r.paymentSuccessPopup),
              i = o(n.paymentSuccessPopup),
              p = Object.keys(u).length ? u : i;
            return {
              enabled: s(p.enabled, !1),
              imageUrl: a(p.imageUrl, "", 1024),
              text: a(p.text, "支付成功，感谢你的支持", 255),
            };
          })(t)
        ) || t.showToast("支付成功，订单已生成"),
        n("pop")),
      t.loadAddressAndDashboard({ force: !0 });
  },
  applyPaymentFailure: function (e, t, r, n, o) {
    var a = e.shouldClearPendingPaymentByError(t);
    o.warn("[payment-flow] submit:failed", {
      orderNo: r,
      shouldClearPending: a,
      code: e.getBusinessErrorCode(t),
      message: String((t && t.message) || ""),
      statusCode: Number(t && t.statusCode ? t.statusCode : 0) || void 0,
      requestId: String(
        (t && t.requestId) ||
          (t && t.responseData && t.responseData.requestId) ||
          ""
      ),
    }),
      e.setPaymentFlowState(
        n.FAILED,
        a
          ? {
              pendingPaymentOrderNo: "",
              pendingPaymentAmount: 0,
              pendingPaymentCreatedAt: 0,
              pendingPaymentSignature: "",
            }
          : {}
      ),
      e.isPaymentCancelledError(t)
        ? e.showToast(e.resolveBusinessErrorToast(t, "你已取消支付"))
        : e.reportBusinessError("Payment flow", t, "支付未完成，请稍后再试");
  },
  showPostPaymentSupportQrPopup: u,
};
