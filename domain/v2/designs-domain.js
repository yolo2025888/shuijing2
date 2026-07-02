var e = require("../../@babel/runtime/helpers/typeof");
function r(r) {
  var t = r && "object" === e(r) ? r : {},
    n = Array.isArray(t.pattern)
      ? t.pattern
          .map(function (e) {
            return null == e ? "" : String(e).trim();
          })
          .filter(Boolean)
      : [],
    i = String(t.name || "").trim(),
    a = Number(t.bgIndex);
  return {
    id: String(t.id || ""),
    name: i || "我的专属设计",
    beadCount: n.length,
    date: String(t.date || ""),
    mode: String(t.mode || "bracelet").trim() || "bracelet",
    bgIndex: Number.isFinite(a) ? a : 0,
    pattern: n,
  };
}
module.exports = {
  toDesignsRouteModel: function (t, n) {
    var i = Array.isArray(t) ? t : [],
      a = n && "object" === e(n) ? n : {},
      o = !!a.error,
      u = o
        ? String(
            (a.error && (a.error.message || a.error.code)) ||
              "SCHEME_LIST_UNAVAILABLE"
          )
        : "",
      s = i.map(r).filter(function (e) {
        return e.id;
      });
    return {
      pageTitle: "我的设计",
      pageDesc: "查看、预览、继续编辑、删除与分享你保存的设计。",
      totalCount: s.length,
      items: s,
      hasItems: s.length > 0,
      ready: !o,
      errorMessage: u,
    };
  },
};
