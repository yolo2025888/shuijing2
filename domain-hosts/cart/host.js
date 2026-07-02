var e = require("./state").createDomainState,
  t = require("./actions").createDomainActions,
  r = require("./effects").createDomainEffects;
function c() {
  return Object.freeze(Object.assign({}, t(), r()));
}
module.exports = {
  createDomainHost: function () {
    return Object.freeze({
      state: e(),
      actions: t(),
      effects: r(),
      methods: c(),
    });
  },
  createCheckoutDomainMethods: c,
};
