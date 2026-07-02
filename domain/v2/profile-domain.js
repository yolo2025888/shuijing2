var e = require("../../@babel/runtime/helpers/typeof");
function r(e, r) {
  var t = Number(e);
  return Number.isFinite(t) ? t : r;
}
function t(r) {
  var t = r && "object" === e(r) ? r : {},
    n = Array.isArray(t.pattern) ? t.pattern : [],
    i = String(t.name || "").trim() || "我的专属设计";
  return {
    id: String(t.id || ""),
    name: i,
    beadCount: n.length,
    date: String(t.date || ""),
  };
}
module.exports = {
  toProfileRouteModel: function (n, i, a) {
    var o = n && "object" === e(n) ? n : {},
      m = Array.isArray(i) ? i : [],
      u = a && "object" === e(a) ? a : {},
      d =
        o.orderSummary && "object" === e(o.orderSummary) ? o.orderSummary : {},
      g = !!u.error,
      s = g
        ? String(
            (u.error && (u.error.message || u.error.code)) ||
              "PROFILE_DATA_UNAVAILABLE"
          )
        : "",
      c = m.map(t).filter(function (e) {
        return e.id;
      });
    return {
      pageTitle: "我的",
      pageDesc: "我的信息、订单、地址与设计服务入口。",
      schemeCount: r(c.length, 0),
      pendingPay: r(d.pendingPay, 0),
      pendingShip: r(d.pendingShip, 0),
      pendingReceive: r(d.pendingReceive, 0),
      afterSale: r(d.afterSale, 0),
      schemeItems: c,
      hasSchemeItems: c.length > 0,
      ready: !g,
      errorMessage: s,
    };
  },
};
