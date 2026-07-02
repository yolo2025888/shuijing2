var e = require("../../@babel/runtime/helpers/typeof");
module.exports = {
  createApiRequestError: function (r) {
    var t = r && "object" === e(r) ? r : {},
      s =
        t.responseData && "object" === e(t.responseData)
          ? t.responseData
          : t.responseData || null,
      n = Number(t.statusCode || 0),
      o = (function (e, r) {
        return e && "string" == typeof e.message && e.message.trim()
          ? e.message.trim()
          : Number.isFinite(Number(r)) && Number(r) > 0
          ? "Request failed with status ".concat(Number(r))
          : "REQUEST_FAILED";
      })(s, n),
      a = new Error(o);
    return (
      (a.code = (function (e, r) {
        return e && "string" == typeof e.code && e.code.trim()
          ? e.code.trim()
          : String(r || "").trim() || "REQUEST_FAILED";
      })(s, o)),
      (a.statusCode = Number.isFinite(n) && n > 0 ? n : 0),
      (a.responseData = s),
      (a.requestId = String(t.requestId || "").trim()),
      a
    );
  },
  createTransportError: function (r) {
    var t = r && "object" === e(r) ? r : {},
      s = String(t.errMsg || t.message || "NETWORK_REQUEST_FAILED"),
      n = new Error(s);
    return (
      (n.code = "NETWORK_REQUEST_FAILED"),
      (n.statusCode = 0),
      (n.responseData = null),
      (n.requestId = ""),
      n
    );
  },
};
