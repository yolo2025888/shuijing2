var r = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../repositories/cartRepository").loadCartItems,
  a = require("../../domain/v2/cart-domain").toCartRouteModel,
  n = require("./route-bridge").buildLegacyRouteByDomain;
function u() {
  return (u = e(
    r().mark(function e() {
      var n;
      return r().wrap(
        function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return (r.prev = 0), (r.next = 3), t();
              case 3:
                return (n = r.sent), r.abrupt("return", a(n));
              case 7:
                return (
                  (r.prev = 7),
                  (r.t0 = r.catch(0)),
                  r.abrupt("return", a([], { error: r.t0 }))
                );
              case 10:
              case "end":
                return r.stop();
            }
        },
        e,
        null,
        [[0, 7]]
      );
    })
  )).apply(this, arguments);
}
module.exports = {
  loadCartOverview: function () {
    return u.apply(this, arguments);
  },
  buildLegacyCartUrl: function () {
    return n("cart", { source: "v2_cart" });
  },
};
