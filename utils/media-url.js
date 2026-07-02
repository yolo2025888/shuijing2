var t = (0, require("../config/env").getRuntimeEnvConfig)(),
  e = (function (t) {
    var e = String(t || "").trim();
    if (!/^https?:\/\//i.test(e)) return "";
    var r = e.match(/^(https?:\/\/[^/]+)/i);
    return r ? String(r[1] || "").trim() : "";
  })(String(t.apiBaseUrl || "").trim());
module.exports = {
  resolveRemoteMediaUrl: function (t) {
    var r = (function (t) {
      var e = String(t || "").trim();
      if (!/^https?%3A%2F%2F/i.test(e)) return e;
      try {
        var r = decodeURIComponent(e);
        return /^https?:\/\//i.test(r) ? r : e;
      } catch (t) {
        return e;
      }
    })(null == t ? "" : t);
    return r
      ? /^https?:\/\//i.test(r) || /^(data:|wxfile:|blob:)/i.test(r)
        ? r
        : 0 === r.indexOf("//")
        ? "https:".concat(r)
        : 0 === r.indexOf("/assets/")
        ? r
        : 0 === r.indexOf("assets/")
        ? "/".concat(r)
        : e
        ? 0 === r.indexOf("/")
          ? "".concat(e).concat(r)
          : "".concat(e, "/").concat(r.replace(/^\.?\//, ""))
        : r
      : "";
  },
};
