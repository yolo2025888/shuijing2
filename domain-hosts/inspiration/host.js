var e = require("./state").createDomainState,
  t = require("./actions").createDomainActions,
  r = require("./effects").createDomainEffects;
module.exports = {
  createDomainHost: function () {
    return Object.freeze({ state: e(), actions: t(), effects: r() });
  },
};
