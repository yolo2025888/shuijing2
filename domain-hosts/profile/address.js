var e = require("../../pages/index/modules/methods/profile-address/profile-address-core"),
  s = require("../../pages/index/modules/methods/profile-address/profile-address-actions");
module.exports = {
  createAddressMethods: function () {
    return Object.freeze(Object.assign({}, e, s));
  },
};
