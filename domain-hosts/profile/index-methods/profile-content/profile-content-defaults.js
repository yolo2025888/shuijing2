module.exports = {
  PROFILE_CONTENT_CODES: ["help_center", "service_terms"],
  resolveProfileServiceId: function (t) {
    var e = String(t.id || "").trim();
    if (e) return e;
    var n = String(t.title || "").trim();
    return "我的通知" === n
      ? "notify"
      : "收货地址" === n
      ? "address"
      : "帮助中心" === n
      ? "help"
      : "服务条款" === n
      ? "terms"
      : "联系客服" === n
      ? "contact"
      : "";
  },
  resolveContentCodeByServiceId: function (t) {
    var e = String(t || "").trim();
    return "help" === e ? "help_center" : "terms" === e ? "service_terms" : "";
  },
  getDefaultContentByServiceId: function (t) {
    var e = String(t || "").trim();
    return "notify" === e
      ? {
          title: "我的通知",
          content: [
            "1. 订单状态变更、发货与售后结果会在这里提醒。",
            "2. 平台活动、权益更新与服务调整会通过通知公告。",
            "3. 若需要人工处理，可在「联系客服」内提交反馈。",
          ].join("\n"),
        }
      : "help" === e
      ? {
          title: "帮助中心",
          content: [
            "1. 可以在「我的订单」中查看订单状态、物流信息与售后进度。",
            "2. 若需修改地址，请在付款前于「收货地址」页面完成调整。",
            "3. 定制订单如遗失或破损，可在订单详情内发起售后申请。",
            "4. 如有其他问题，请通过「联系客服」直接咨询。",
          ].join("\n"),
        }
      : "terms" === e
      ? {
          title: "服务条款",
          content: [
            "1. 本平台商品以定制服务为主，下单前请仔细核对手围、颗数与订单信息。",
            "2. 支付完成后即进入制作流程，若因质量问题可在规定时间内申请售后。",
            "3. 订单金额、库存与支付结果以后端系统结算为准。",
            "4. 随意刷单、恶意退货等行为将被限制使用并保留追责权利。",
          ].join("\n"),
        }
      : "contact" === e
      ? {
          title: "联系客服",
          content: [
            "微信客服：系统将优先拉起微信客服会话",
            "客服电话：400-000-0000",
            "服务时间：09:00-21:00",
            "若当前微信客服暂不可用，可优先拨打客服电话。",
          ].join("\n"),
        }
      : { title: "服务内容", content: "暂无可展示内容" };
  },
};
