var _ = require("../../../../../constants/errorCodes").ERROR_CODE,
  E = new Map([
    [
      _.WECHAT_LOGIN_CONFIG_INVALID,
      "登录配置异常，请联系管理员检查 APPID/SECRET",
    ],
    [_.WECHAT_LOGIN_APPSECRET_INVALID, "微信登录配置异常（AppSecret 无效）"],
    [_.WECHAT_LOGIN_APPID_INVALID, "微信登录配置异常（AppID 无效）"],
    [_.WECHAT_LOGIN_RATE_LIMITED, "当前登录请求过于频繁，请稍后重试"],
    [_.OPENID_NOT_FOUND, "当前账号缺少微信身份，请重新登录后再支付"],
    [_.ORDER_PAY_DEADLINE_EXPIRED, "订单支付已超时，请重新提交结算"],
    [_.ORDER_STATUS_INVALID, "订单状态已变化，请重新发起结算"],
    [_.ORDER_ALREADY_PAID, "该订单已支付，请勿重复支付"],
    [_.IDEMPOTENCY_KEY_INVALID, "订单请求标识异常，请重试结算"],
    [_.ORDER_NOT_FOUND, "订单不存在或已失效，请重新结算"],
    [_.ORDER_NO_REQUIRED, "订单信息缺失，请重新结算"],
    [_.ORDER_AMOUNT_MISMATCH, "结算金额已变化，请重新打开结算页后再支付"],
    [_.NO_CHECKED_ITEMS, "请先选择要结算的设计方案"],
    [_.ADDRESS_REQUIRED, "请先确认有效的收货地址"],
    [_.ADDRESS_NOT_FOUND, "请先确认有效的收货地址"],
    [_.ADDRESS_PHONE_REQUIRED, "请先补全收货地址手机号"],
    [_.WECHAT_ADDRESS_INVALID, "微信地址信息不完整，请在地址管理中手动补全"],
    [
      _.CHECKOUT_SCHEME_INVALID,
      "当前结算方案中存在失效素材或编码异常，请移除该方案后重试",
    ],
    [
      _.CHECKOUT_MATERIAL_UNAVAILABLE,
      "当前结算方案中存在失效素材，请重新进入 DIY 调整后再结算",
    ],
    [_.PAYABLE_AMOUNT_INVALID, "结算金额计算异常，请重新发起结算"],
    [_.CHECKOUT_PHONE_REQUIRED, "请先补全收货地址手机号"],
    [_.MISSING_WECHAT_PAY_PARAMS, "支付参数未生成，请重新提交订单"],
    [_.PAYMENT_PREPAY_IN_PROGRESS, "微信预支付正在生成，请稍后重试"],
    [_.WECHAT_PAY_CONFIG_INVALID, "微信支付配置异常，请联系管理员检查"],
    [_.WECHAT_PAY_API_ERROR, "微信支付服务返回异常，请稍后重试"],
    [_.WECHAT_PAY_UPSTREAM_UNAVAILABLE, "微信支付服务暂时不可用，请稍后重试"],
    [_.WECHAT_PAY_PROXY_URL_MISSING, "微信支付代理配置缺失，请联系管理员检查"],
    [_.WECHAT_PAY_PROXY_TIMEOUT, "微信支付响应超时，请稍后重试"],
    [_.WECHAT_PAY_PROXY_INVALID_RESPONSE, "微信支付响应异常，请稍后重试"],
    [
      _.REQUEST_PAYMENT_NOT_SUPPORTED,
      "当前环境不支持微信支付，请在微信内完成支付",
    ],
    [_.REQUEST_PAYMENT_CANCELLED, "你已取消支付"],
    [_.REQUEST_PAYMENT_FAILED, "支付未完成，可在订单中继续支付"],
    [
      _.PAYMENT_RESULT_CONFIRM_TIMEOUT,
      "已完成微信扣款请求，订单确认中，可在订单页刷新查看",
    ],
    [_.WECHAT_PHONE_UNAVAILABLE, "手机号验证失败，请重试授权"],
    [_.WECHAT_PHONE_INVALID, "手机号验证失败，请重试授权"],
    [_.DOMAIN_NOT_ALLOWED, "小程序合法域名未配置完整"],
    [_.API_ROUTE_MISSING, "后端接口未部署完整，请检查 /api 路由"],
    [_.HTTP_404, "后端接口未部署完整，请检查 /api 路由"],
    [_.HTTP_5XX, "服务暂时不可用，请稍后重试"],
    [_.NETWORK_FAIL, "网络异常，请检查网络后重试"],
  ]),
  A = new Set([
    _.WECHAT_LOGIN_CODE_REQUIRED,
    _.WECHAT_LOGIN_INVALID_CODE,
    _.WECHAT_LOGIN_CODE_INVALID_OR_EXPIRED,
    _.WECHAT_LOGIN_CODE_ALREADY_USED,
  ]);
module.exports = {
  resolveToastMessageByCode: function (_) {
    return A.has(_)
      ? "请重试登录授权（需要同时获取微信登录态）"
      : E.get(_) || "";
  },
};
