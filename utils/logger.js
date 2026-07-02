function n() {
  var n = (function () {
    try {
      if (
        "undefined" == typeof wx ||
        "function" != typeof wx.getAccountInfoSync
      )
        return "release";
      var n = wx.getAccountInfoSync();
      return (n && n.miniProgram && n.miniProgram.envVersion) || "release";
    } catch (n) {
      return "release";
    }
  })();
  return "develop" === n || "trial" === n;
}
function r(r, e) {
  if (n()) {
    var o =
      console && "function" == typeof console[r] ? console[r] : console.log;
    "function" == typeof o && o.apply(console, e);
  }
}
module.exports = {
  debug: function () {
    for (var n = arguments.length, e = new Array(n), o = 0; o < n; o++)
      e[o] = arguments[o];
    r("debug", e);
  },
  info: function () {
    for (var n = arguments.length, e = new Array(n), o = 0; o < n; o++)
      e[o] = arguments[o];
    r("info", e);
  },
  warn: function () {
    for (var n = arguments.length, e = new Array(n), o = 0; o < n; o++)
      e[o] = arguments[o];
    r("warn", e);
  },
  error: function () {
    for (var n = arguments.length, e = new Array(n), o = 0; o < n; o++)
      e[o] = arguments[o];
    r("error", e);
  },
  shouldLog: n,
};
