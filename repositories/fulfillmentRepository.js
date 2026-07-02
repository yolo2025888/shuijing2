var r = require("../@babel/runtime/helpers/typeof"),
  e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../services/api/index"),
  u = n.request,
  a = n.API_ENDPOINTS;
function i(r) {
  return encodeURIComponent(String(r || "").trim());
}
function o() {
  return (o = t(
    e().mark(function r(t) {
      var n;
      return e().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              if ((n = i(t))) {
                r.next = 3;
                break;
              }
              throw new Error("ORDER_NO_REQUIRED");
            case 3:
              return r.abrupt(
                "return",
                u({ url: a.fulfillmentShipment(n), method: "GET" })
              );
            case 4:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function c() {
  return (c = t(
    e().mark(function r(t) {
      var n, o;
      return e().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              if ((n = i(t))) {
                r.next = 3;
                break;
              }
              throw new Error("ORDER_NO_REQUIRED");
            case 3:
              return (
                (r.next = 5),
                u({ url: a.fulfillmentAfterSales(n), method: "GET" })
              );
            case 5:
              return (
                (o = r.sent), r.abrupt("return", Array.isArray(o) ? o : [])
              );
            case 7:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function s() {
  return (s = t(
    e().mark(function r(t) {
      var n;
      return e().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              if ((n = i(t))) {
                r.next = 3;
                break;
              }
              throw new Error("ORDER_NO_REQUIRED");
            case 3:
              return r.abrupt(
                "return",
                u({
                  url: a.fulfillmentConfirmReceive(n),
                  method: "POST",
                  data: {},
                })
              );
            case 4:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function p() {
  return (p = t(
    e().mark(function t(n, o) {
      var c, s;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if ((c = i(n))) {
                e.next = 3;
                break;
              }
              throw new Error("ORDER_NO_REQUIRED");
            case 3:
              return (
                (s = o && "object" === r(o) ? o : {}),
                e.abrupt(
                  "return",
                  u({
                    url: a.fulfillmentCreateAfterSale(c),
                    method: "POST",
                    data: s,
                  })
                )
              );
            case 5:
            case "end":
              return e.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
module.exports = {
  getShipmentByOrderNo: function (r) {
    return o.apply(this, arguments);
  },
  getAfterSalesByOrderNo: function (r) {
    return c.apply(this, arguments);
  },
  confirmReceiveByOrderNo: function (r) {
    return s.apply(this, arguments);
  },
  createAfterSaleByOrderNo: function (r, e) {
    return p.apply(this, arguments);
  },
};
