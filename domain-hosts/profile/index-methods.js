var e = require("../../pages/index/modules/methods/profile-auth"),
  r = require("./orders").createOrderMethods,
  t = require("./address").createAddressMethods,
  o = require("./content").createContentMethods,
  s = require("./aftersale").createAfterSaleMethods,
  d = require("./coordinator").createCoordinatorMethods;
module.exports = {
  createIndexProfileMethods: function () {
    return Object.freeze(Object.assign({}, d(), e, r(), t(), o(), s()));
  },
};
