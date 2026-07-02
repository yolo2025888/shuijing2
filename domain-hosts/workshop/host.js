var e = require("./state").createDomainState,
  t = require("./actions").createDomainActions,
  r = require("./effects").createDomainEffects,
  a = require("./wrist").createWristMethods,
  s = require("./pattern").createPatternMethods,
  c = require("./materials").createMaterialMethods;
function i() {
  return Object.freeze(Object.assign({}, a(), s(), c(), t()));
}
module.exports = {
  createDomainHost: function () {
    return Object.freeze({
      state: e(),
      actions: t(),
      effects: r(),
      methods: i(),
    });
  },
  createWorkshopActionMethods: function () {
    return Object.freeze(Object.assign({}, t()));
  },
  createWorkshopDomainMethods: i,
};
