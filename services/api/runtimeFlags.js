var e = (0, require("../../config/env").getRuntimeEnvConfig)();
module.exports = {
  getRuntimeFlag: function (n, t) {
    var o = e[n];
    return "boolean" == typeof o ? o : t;
  },
};
