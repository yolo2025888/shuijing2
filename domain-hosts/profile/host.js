var e = require("./state").createDomainState,
  t = require("./actions").createDomainActions,
  r = require("./effects").createDomainEffects;
module.exports = {
  createDomainHost: function () {
    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return Object.freeze({ state: e(a), actions: t(a), effects: r(a) });
  },
};
