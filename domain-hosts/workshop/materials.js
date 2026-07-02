var e = require("../../pages/index/modules/methods/workshop-materials/workshop-materials-catalog"),
  r = require("../../pages/index/modules/methods/workshop-materials/workshop-materials-tray");
module.exports = {
  createMaterialMethods: function () {
    return Object.freeze(Object.assign({}, e, r));
  },
};
