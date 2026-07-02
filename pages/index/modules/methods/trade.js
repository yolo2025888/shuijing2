var e = require("./trade-auth"),
  r = require("./trade-checkout"),
  t = require("./trade-payment"),
  a = require("./trade-recovery");
module.exports = Object.assign({}, r, e, t, a);
