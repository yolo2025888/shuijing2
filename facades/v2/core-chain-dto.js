var e = require("../../@babel/runtime/helpers/typeof"),
  r = ["forceRefresh", "clearBeforeRefresh"],
  t = ["phoneCode"],
  o = [
    "userName",
    "telNumber",
    "provinceName",
    "cityName",
    "countyName",
    "detailInfo",
    "nationalCode",
    "postalCode",
  ],
  n = ["addressId", "idempotencyKey", "totalAmount", "checkoutPreview"],
  c = [
    "id",
    "checked",
    "name",
    "pattern",
    "perim",
    "price",
    "bgIndex",
    "mode",
    "source_designer_id",
    "sourceDesignerId",
  ];
function i(r, t) {
  var o = r && "object" === e(r) ? r : {};
  return t.reduce(function (e, r) {
    return Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]), e;
  }, {});
}
function a(e) {
  return !0 === e;
}
function u(e) {
  return String(e || "").trim();
}
module.exports = {
  pickObjectByKeys: i,
  normalizeWechatAddressInput: function (e) {
    var r = i(e, o),
      t = {};
    return (
      o.forEach(function (e) {
        t[e] = u(r[e]);
      }),
      t
    );
  },
  normalizeLoginOptions: function (e) {
    var t = i(e, r);
    return {
      forceRefresh: a(t.forceRefresh),
      clearBeforeRefresh: a(t.clearBeforeRefresh),
    };
  },
  normalizeWechatPhonePayload: function (e) {
    return { phoneCode: u(i(e, t).phoneCode) };
  },
  normalizeCheckoutCartItems: function (e) {
    return Array.isArray(e)
      ? e.map(function (e) {
          return i(e, c);
        })
      : [];
  },
  normalizeCreateOrderPayload: function (r) {
    var t = i(r, n),
      o = u(t.addressId),
      c = u(t.idempotencyKey),
      a = Number(t.totalAmount || 0),
      d =
        t.checkoutPreview && "object" === e(t.checkoutPreview)
          ? t.checkoutPreview
          : void 0,
      s = { addressId: o };
    return (
      c && (s.idempotencyKey = c),
      Number.isFinite(a) && (s.totalAmount = a),
      d && (s.checkoutPreview = d),
      s
    );
  },
  DTO_WHITELIST: {
    LOGIN_OPTIONS_KEYS: r,
    WECHAT_PHONE_KEYS: t,
    WECHAT_ADDRESS_KEYS: o,
    ORDER_PAYLOAD_KEYS: n,
    CHECKOUT_ITEM_KEYS: c,
  },
};
