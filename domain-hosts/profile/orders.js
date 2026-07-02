var e = require("../../pages/index/modules/methods/profile-orders/profile-orders-manager"),
  r = require("../../pages/index/modules/methods/profile-orders/profile-orders-list"),
  o = require("../../pages/index/modules/methods/profile-orders/profile-orders-detail"),
  s = require("../../pages/index/modules/methods/profile-orders/profile-orders-action"),
  d = require("../../pages/index/modules/methods/profile-orders/profile-orders-reconcile");
module.exports = {
  createOrderMethods: function () {
    return Object.freeze(Object.assign({}, e, r, o, s, d));
  },
};
