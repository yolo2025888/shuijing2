var e = require("./host").createCheckoutDomainMethods,
  t = require("./payment-bridge").createPaymentBridgeMethods;
module.exports = {
  createCheckoutRootMethods: function () {
    return Object.freeze(Object.assign({}, e(), t()));
  },
};
