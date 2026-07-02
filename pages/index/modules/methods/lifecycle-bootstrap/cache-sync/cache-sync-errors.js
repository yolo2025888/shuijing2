var r = require("../../../../../../constants/errorCodes").ERROR_CODE,
  e = require("../../../../../../utils/errorCodeResolver"),
  I = e.collectErrorText,
  _ = e.resolveInitErrorCode;
module.exports = {
  getErrorText: function (r) {
    return I(r);
  },
  getInitErrorCode: function (r) {
    return _(r);
  },
  resolveInitErrorToast: function (e, I) {
    var _ = this.getInitErrorCode(e);
    return _ === r.CATALOG_BOOTSTRAP_EMPTY
      ? "材料库暂无可用数据，请检查后端初始化"
      : _ === r.API_ROUTE_MISSING || _ === r.HTTP_404
      ? "后端 API 路由未完整发布，请检查 CloudRun /api 路由"
      : _ === r.DOMAIN_NOT_ALLOWED
      ? "小程序合法域名未配置完整，请检查 request/download 白名单"
      : _ === r.BACKEND_UNREACHABLE || _ === r.NETWORK_FAIL
      ? "网络或后端连接异常，请稍后重试"
      : _ === r.AUTH_INVALID
      ? "登录态已失效，请重新授权登录"
      : _ === r.WECHAT_LOGIN_APPSECRET_INVALID
      ? "微信登录配置异常（AppSecret 无效）"
      : _ === r.WECHAT_LOGIN_APPID_INVALID
      ? "微信登录配置异常（AppID 无效）"
      : _ === r.WECHAT_LOGIN_CONFIG_INVALID
      ? "微信登录参数缺失，请检查服务端环境变量"
      : _ === r.WECHAT_LOGIN_INVALID_CODE ||
        _ === r.WECHAT_LOGIN_CODE_INVALID_OR_EXPIRED ||
        _ === r.WECHAT_LOGIN_CODE_ALREADY_USED
      ? "微信登录凭证已失效，正在重试（请确认小程序 AppID 与后端配置一致）"
      : _ === r.HTTP_5XX
      ? "服务暂时不可用，请稍后重试"
      : I || "数据加载失败，请稍后重试";
  },
};
