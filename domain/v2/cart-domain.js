var e = require("../../@babel/runtime/helpers/typeof");
function r(e, r) {
  var t = Number(e);
  return Number.isFinite(t) ? t : r;
}
function t(e) {
  var r = Number(e || 0);
  return Number.isFinite(r) ? (Math.round(10 * r) / 10).toFixed(1) : "0.0";
}
function n(r) {
  var n = r && "object" === e(r) ? r : {},
    i = Array.isArray(n.pattern) ? n.pattern : [],
    u = Number(n.price || 0);
  return {
    id: String(n.id || ""),
    name: String(n.name || "").trim() || "My Design",
    beadCount: i.length,
    price: u,
    priceText: t(u),
    checked: !1 !== n.checked,
  };
}
module.exports = {
  toCartRouteModel: function (i, u) {
    var c = Array.isArray(i) ? i : [],
      o = u && "object" === e(u) ? u : {},
      a = !!o.error,
      s = a
        ? String(
            (o.error && (o.error.message || o.error.code)) ||
              "CART_DATA_UNAVAILABLE"
          )
        : "",
      d = c.map(n).filter(function (e) {
        return e.id;
      }),
      m = d.filter(function (e) {
        return e.checked;
      }),
      l = m.reduce(function (e, r) {
        return e + r.price;
      }, 0);
    return {
      pageTitle: "购物车",
      pageDesc: "购物车与结算信息预览。",
      itemCount: r(d.length, 0),
      checkedCount: r(m.length, 0),
      checkedTotalText: t(l),
      items: d.slice(0, 8),
      hasItems: d.length > 0,
      ready: !a,
      errorMessage: s,
    };
  },
};
