var e = require("../../../../@babel/runtime/helpers/typeof"),
  r = require("../../../../utils/errorCodeResolver"),
  s = r.collectErrorText,
  o = r.resolveBusinessErrorCode,
  t = require("../deps/trade-deps").logger,
  u =
    require("./trade-recovery/trade-recovery-toast-map").resolveToastMessageByCode;
module.exports = {
  getBusinessErrorText: function (e) {
    return s(e);
  },
  getBusinessErrorCode: function (e) {
    return o(e);
  },
  resolveBusinessErrorToast: function (e, r) {
    var s = this.getBusinessErrorCode(e),
      o = u(s);
    return o || r;
  },
  reportBusinessError: function (r, s, o) {
    var u =
        s && "object" === e(s.responseData) && s.responseData
          ? s.responseData
          : null,
      a = String((s && s.requestId) || (u && u.requestId) || ""),
      i = Number((s && s.statusCode) || (u && u.statusCode) || 0),
      n = Number.isFinite(i) && i > 0 ? i : void 0,
      d = String(
        (s && (s.message || s.errMsg || s.code)) ||
          (u && (u.message || u.code)) ||
          "UNKNOWN_CLIENT_ERROR"
      );
    t.error("".concat(r, " failed"), {
      requestId: a,
      statusCode: n,
      message: d,
      error: s,
    }),
      this.showToast(this.resolveBusinessErrorToast(s, o));
  },
};
