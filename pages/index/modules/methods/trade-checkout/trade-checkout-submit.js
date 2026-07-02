var e = require("./trade-checkout-submit/trade-checkout-submit-cart"),
  t = require("./trade-checkout-submit/trade-checkout-submit-checkout"),
  c = require("../../../../../domain-hosts/cart/effects").createAddressEffects;
module.exports = Object.assign({}, e, t, c());
