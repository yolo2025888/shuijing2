function e(e) {
  return e
    ? String(
        (e && (e.message || e.errMsg)) ||
          (e && e.responseData && e.responseData.message) ||
          ""
      ).trim()
    : "";
}
function r(e) {
  var r = Number(
    (e && e.statusCode) ||
      (e && e.responseData && e.responseData.statusCode) ||
      0
  );
  return !Number.isFinite(r) || r <= 0 ? 0 : Math.round(r);
}
module.exports = {
  resolvePanelErrorMessage: function (t, s) {
    var n = String(s || "").trim() || "加载失败，请稍后重试",
      a = r(t),
      o = e(t).toUpperCase();
    return 401 === a
      ? "登录已失效，请重新登录"
      : 403 === a
      ? "暂无权限访问该内容"
      : 404 === a
      ? "请求资源不存在或已下线"
      : 429 === a
      ? "请求过于频繁，请稍后再试"
      : a >= 500
      ? "服务繁忙，请稍后重试"
      : o.indexOf("TIMEOUT") >= 0 ||
        o.indexOf("NETWORK") >= 0 ||
        o.indexOf("REQUEST:FAIL") >= 0 ||
        o.indexOf("ECONNRESET") >= 0 ||
        o.indexOf("ENOTFOUND") >= 0
      ? "网络异常，请检查网络后重试"
      : n;
  },
  normalizeErrorStatusCode: r,
  normalizeErrorText: e,
};
