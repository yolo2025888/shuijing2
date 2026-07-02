var e = require("../../contracts/navigation/query-contract"),
  r = e.appendQueryParams,
  n = e.buildIndexSharePath,
  i = e.sanitizeQuerySchemeId;
function t(e) {
  var r = String(e || "").trim();
  if (!r) return "";
  try {
    return decodeURIComponent(r);
  } catch (e) {
    return r;
  }
}
module.exports = {
  DIY_SHARE_ROUTE: "/pages/diy/index",
  INDEX_SHARE_ROUTE: "/pages/index/index",
  normalizeSchemeSharePath: function (e, a) {
    var c = i(a),
      u = (function (e) {
        var r = String(e || "").trim(),
          n = r.indexOf("?");
        if (n < 0) return {};
        var i = r.slice(n + 1);
        return i
          ? i.split("&").reduce(function (e, r) {
              if (!r) return e;
              var n = r.indexOf("="),
                i = n >= 0 ? r.slice(0, n) : r,
                a = n >= 0 ? r.slice(n + 1) : "",
                c = t(i);
              return c ? ((e[c] = t(a)), e) : e;
            }, {})
          : {};
      })(String(e || "").trim() || n(c)),
      s = i(u.schemeId || c),
      d = Object.assign({}, u, { fromShare: u.fromShare || 1 });
    return (
      s && (d.schemeId = s),
      d.source || (d.source = "scheme_share"),
      r("/pages/diy/index", d)
    );
  },
};
