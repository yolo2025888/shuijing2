var e = require("./modules/initial-data").createInitialData,
  o = require("./modules/methods/lifecycle"),
  r = require("./modules/methods/runtime"),
  s = require("./modules/methods/workshop"),
  i = require("./modules/methods/trade"),
  t = require("./modules/methods/profile"),
  a = require("./modules/methods/workshop-actions/workshop-actions-navigation");
Page(Object.assign({ data: e() }, o, r, s, i, t, a));
