var a = require("./modules/initial-data").createDiyInitialData,
  e = require("./modules/methods");
Page(Object.assign({ data: a() }, e));
