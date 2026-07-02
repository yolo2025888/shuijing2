var E = require("../constants/errorCodes").ERROR_CODE;
function _(E) {
  var _ = [];
  return (
    E && E.code && _.push(String(E.code)),
    E && E.message && _.push(String(E.message)),
    E && E.errMsg && _.push(String(E.errMsg)),
    E &&
      E.responseData &&
      E.responseData.code &&
      _.push(String(E.responseData.code)),
    E &&
      E.responseData &&
      E.responseData.message &&
      _.push(String(E.responseData.message)),
    _.join(" | ").trim()
  );
}
function A(E, _) {
  return E.indexOf(_) >= 0;
}
function I(_, I) {
  for (var N = 0; N < I.length; N += 1)
    for (var T = I[N], e = T.patterns || [], t = 0; t < e.length; t += 1)
      if (A(_, e[t])) return T.code;
  return E.UNKNOWN;
}
var N = [
    { code: E.CATALOG_BOOTSTRAP_EMPTY, patterns: ["CATALOG_BOOTSTRAP_EMPTY"] },
    { code: E.API_ROUTE_MISSING, patterns: ["CANNOT GET /API/"] },
    {
      code: E.DOMAIN_NOT_ALLOWED,
      patterns: ["URL NOT IN DOMAIN LIST", "合法域名", "鍚堟硶鍩熷悕"],
    },
    { code: E.NETWORK_FAIL, patterns: ["REQUEST:FAIL", "NETWORK"] },
    {
      code: E.BACKEND_UNREACHABLE,
      patterns: ["ECONNREFUSED", "CONNECTION REFUSED"],
    },
    {
      code: E.AUTH_INVALID,
      patterns: ["AUTH_CONTEXT_MISSING", "UNAUTHORIZED"],
    },
    {
      code: E.WECHAT_LOGIN_APPSECRET_INVALID,
      patterns: ["WECHAT_LOGIN_APPSECRET_INVALID"],
    },
    {
      code: E.WECHAT_LOGIN_APPID_INVALID,
      patterns: ["WECHAT_LOGIN_APPID_INVALID"],
    },
    {
      code: E.WECHAT_LOGIN_CONFIG_INVALID,
      patterns: ["WECHAT_LOGIN_CONFIG_INVALID"],
    },
    { code: E.HTTP_404, patterns: ["HTTP_404", "STATUS 404"] },
    { code: E.HTTP_5XX, patterns: ["HTTP_5", "STATUS 5"] },
  ],
  T = [
    {
      code: E.WECHAT_LOGIN_CONFIG_INVALID,
      patterns: ["WECHAT_LOGIN_CONFIG_INVALID"],
    },
    {
      code: E.WECHAT_LOGIN_APPSECRET_INVALID,
      patterns: ["WECHAT_LOGIN_APPSECRET_INVALID"],
    },
    {
      code: E.WECHAT_LOGIN_APPID_INVALID,
      patterns: ["WECHAT_LOGIN_APPID_INVALID"],
    },
    {
      code: E.WECHAT_LOGIN_RATE_LIMITED,
      patterns: ["WECHAT_LOGIN_RATE_LIMITED"],
    },
    {
      code: E.WECHAT_LOGIN_CODE_REQUIRED,
      patterns: ["WECHAT_LOGIN_CODE_REQUIRED"],
    },
    {
      code: E.WECHAT_LOGIN_CODE_INVALID_OR_EXPIRED,
      patterns: ["WECHAT_LOGIN_CODE_INVALID_OR_EXPIRED"],
    },
    {
      code: E.WECHAT_LOGIN_CODE_ALREADY_USED,
      patterns: ["WECHAT_LOGIN_CODE_ALREADY_USED"],
    },
    {
      code: E.WECHAT_LOGIN_INVALID_CODE,
      patterns: ["WECHAT_LOGIN_INVALID_CODE"],
    },
    { code: E.OPENID_NOT_FOUND, patterns: ["OPENID_NOT_FOUND"] },
    {
      code: E.ORDER_PAY_DEADLINE_EXPIRED,
      patterns: ["ORDER_PAY_DEADLINE_EXPIRED"],
    },
    { code: E.ORDER_STATUS_INVALID, patterns: ["ORDER_STATUS_INVALID"] },
    { code: E.ORDER_ALREADY_PAID, patterns: ["ORDER_ALREADY_PAID"] },
    { code: E.IDEMPOTENCY_KEY_INVALID, patterns: ["IDEMPOTENCY_KEY_INVALID"] },
    { code: E.ORDER_NOT_FOUND, patterns: ["ORDER_NOT_FOUND"] },
    { code: E.ORDER_NO_REQUIRED, patterns: ["ORDER_NO_REQUIRED"] },
    { code: E.ORDER_AMOUNT_MISMATCH, patterns: ["ORDER_AMOUNT_MISMATCH"] },
    { code: E.ADDRESS_PHONE_REQUIRED, patterns: ["ADDRESS_PHONE_REQUIRED"] },
    {
      code: E.CHECKOUT_PHONE_REQUIRED,
      patterns: ["CHECKOUT_PHONE_REQUIRED", "WECHAT_PHONE_NUMBER_MISSING"],
    },
    {
      code: E.ORDER_PREVIEW_UNAVAILABLE,
      patterns: ["ORDER_PREVIEW_UNAVAILABLE"],
    },
    {
      code: E.ORDER_CREATE_UNAVAILABLE,
      patterns: ["ORDER_CREATE_UNAVAILABLE"],
    },
    {
      code: E.PAYMENT_CREATE_UNAVAILABLE,
      patterns: ["PAYMENT_CREATE_UNAVAILABLE"],
    },
    {
      code: E.PAYMENT_PREPAY_IN_PROGRESS,
      patterns: ["PAYMENT_PREPAY_IN_PROGRESS"],
    },
    {
      code: E.WECHAT_PAY_CONFIG_INVALID,
      patterns: ["WECHAT_PAY_CONFIG_INVALID"],
    },
    {
      code: E.WECHAT_PAY_API_ERROR,
      patterns: ["WECHAT_PAY_API_ERROR", "WECHAT_PAY_PROXY_HTTP_"],
    },
    {
      code: E.WECHAT_PAY_UPSTREAM_UNAVAILABLE,
      patterns: ["WECHAT_PAY_UPSTREAM_UNAVAILABLE"],
    },
    {
      code: E.WECHAT_PAY_PROXY_URL_MISSING,
      patterns: ["WECHAT_PAY_PROXY_URL_MISSING"],
    },
    {
      code: E.WECHAT_PAY_PROXY_TIMEOUT,
      patterns: ["WECHAT_PAY_PROXY_TIMEOUT"],
    },
    {
      code: E.WECHAT_PAY_PROXY_INVALID_RESPONSE,
      patterns: ["WECHAT_PAY_PROXY_INVALID_RESPONSE"],
    },
    {
      code: E.MISSING_WECHAT_PAY_PARAMS,
      patterns: ["MISSING_WECHAT_PAY_PARAMS"],
    },
    {
      code: E.REQUEST_PAYMENT_NOT_SUPPORTED,
      patterns: ["REQUEST_PAYMENT_NOT_SUPPORTED"],
    },
    {
      code: E.REQUEST_PAYMENT_CANCELLED,
      patterns: ["REQUESTPAYMENT:FAIL CANCEL"],
    },
    { code: E.REQUEST_PAYMENT_FAILED, patterns: ["REQUESTPAYMENT:FAIL"] },
    {
      code: E.PAYMENT_RESULT_CONFIRM_TIMEOUT,
      patterns: ["PAYMENT_RESULT_CONFIRM_TIMEOUT"],
    },
    { code: E.ADDRESS_REQUIRED, patterns: ["ADDRESS_REQUIRED"] },
    { code: E.ADDRESS_NOT_FOUND, patterns: ["ADDRESS_NOT_FOUND"] },
    { code: E.WECHAT_ADDRESS_INVALID, patterns: ["WECHAT_ADDRESS_INVALID"] },
    { code: E.NO_CHECKED_ITEMS, patterns: ["NO_CHECKED_ITEMS"] },
    { code: E.PAYABLE_AMOUNT_INVALID, patterns: ["PAYABLE_AMOUNT_INVALID"] },
    { code: E.CHECKOUT_SCHEME_INVALID, patterns: ["CHECKOUT_SCHEME_INVALID"] },
    {
      code: E.CHECKOUT_MATERIAL_UNAVAILABLE,
      patterns: ["CHECKOUT_MATERIAL_UNAVAILABLE"],
    },
    {
      code: E.WECHAT_PHONE_UNAVAILABLE,
      patterns: ["WECHAT_PHONE_UNAVAILABLE"],
    },
    { code: E.WECHAT_PHONE_INVALID, patterns: ["WECHAT_PHONE", "INVALID"] },
    {
      code: E.DOMAIN_NOT_ALLOWED,
      patterns: ["URL NOT IN DOMAIN LIST", "合法域名"],
    },
    { code: E.API_ROUTE_MISSING, patterns: ["CANNOT GET /API/"] },
    { code: E.HTTP_404, patterns: ["STATUS 404", "HTTP_404"] },
    { code: E.HTTP_5XX, patterns: ["STATUS 5", "HTTP_5"] },
    { code: E.NETWORK_FAIL, patterns: ["NETWORK", "REQUEST:FAIL"] },
  ];
module.exports = {
  collectErrorText: _,
  resolveInitErrorCode: function (A) {
    var T = _(A).toUpperCase();
    return T ? I(T, N) : E.UNKNOWN;
  },
  resolveBusinessErrorCode: function (N) {
    var e = _(N).toUpperCase();
    return e
      ? A(e, "WECHAT_PHONE") && A(e, "INVALID")
        ? E.WECHAT_PHONE_INVALID
        : I(e, T)
      : E.UNKNOWN;
  },
};
