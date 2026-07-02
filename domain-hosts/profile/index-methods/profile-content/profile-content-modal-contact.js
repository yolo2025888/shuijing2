var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../../../@babel/runtime/helpers/typeof"),
  o = require("../../../../pages/index/modules/deps/profile-deps"),
  r = o.getContactConfig,
  a = o.logger,
  c = o.playSound;
function i(t) {
  var e = t && "object" === n(t) ? t : {};
  return {
    mode: String(e.mode || "wechat_customer_service"),
    customerServiceEnabled: !1 !== e.customerServiceEnabled,
    phone: String(e.phone || "400-000-0000"),
    serviceHours: String(e.serviceHours || "09:00-21:00"),
    wechatQrcodeUrl: String(e.wechatQrcodeUrl || ""),
    fallbackText: String(e.fallbackText || "在线客服正忙，请优先电话联系。"),
  };
}
function l(t) {
  return !t || "object" !== n(t) || Array.isArray(t) ? {} : t;
}
function u(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
    n = String(null == t ? "" : t).trim();
  return n || String(null == e ? "" : e).trim();
}
function s(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (!0 === t || !1 === t) return t;
  var n = String(null == t ? "" : t)
    .trim()
    .toLowerCase();
  return (
    "1" === n ||
    "true" === n ||
    "yes" === n ||
    "on" === n ||
    ("0" !== n && "false" !== n && "no" !== n && "off" !== n && e)
  );
}
function p(t, e) {
  var n = l(t.adConfig),
    o = l(n.profile),
    r = l(o.qrPopups);
  return l(r[e]);
}
function d(t, e) {
  var o =
      t && t.catalogSnapshot && "object" === n(t.catalogSnapshot)
        ? t.catalogSnapshot
        : {},
    r =
      t && t.catalogLiteSnapshot && "object" === n(t.catalogLiteSnapshot)
        ? t.catalogLiteSnapshot
        : {},
    a = (function (t) {
      for (var e = 0; e < t.length; e += 1) {
        var n = t[e];
        if (n && Object.keys(n).length) return n;
      }
      return {};
    })([p(o, e), p(r, e)]);
  return {
    enabled: s(a.enabled, !1),
    imageUrl: u(a.imageUrl || a.qrcodeUrl || a.qrCodeUrl),
    title: u(a.title),
    text: u(a.text || a.desc || a.description),
    buttonText: u(a.buttonText, "我知道了"),
  };
}
module.exports = {
  resolveQrPopupConfig: d,
  openSupportQrPopup: function (t) {
    var e = String(t || "").trim() || "contact",
      n = d(this, e);
    if (!0 !== n.enabled || !n.imageUrl)
      return (
        "function" == typeof this.showToast &&
          this.showToast("客服二维码暂未配置"),
        !1
      );
    var o = {
      supportQrPopup: {
        visible: !0,
        type: e,
        imageUrl: n.imageUrl,
        title: n.title,
        text: n.text,
        buttonText: n.buttonText,
      },
    };
    return (
      "function" == typeof this.setDataPatch
        ? this.setDataPatch(o)
        : this.setData(o),
      c("pop"),
      !0
    );
  },
  handleOpenContactQrPopup: function () {
    this.openSupportQrPopup("contact");
  },
  handleCloseSupportQrPopup: function () {
    this.data &&
      this.data.supportQrPopup &&
      this.setData({ supportQrPopup: null });
  },
  openContactServiceModal: function () {
    var n = this;
    return e(
      t().mark(function e() {
        var o, l, u, s;
        return t().wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (o = n.getDefaultContentByServiceId("contact")),
                    n.setData({
                      showContentModal: !0,
                      contentModalType: "contact",
                      contentModalTitle: o.title,
                      contentModalLoading: !0,
                      contentModalError: "",
                      contentModalText: o.content,
                    }),
                    c("pop"),
                    (t.prev = 3),
                    (t.next = 6),
                    r()
                  );
                case 6:
                  (l = t.sent),
                    (u = i(l)),
                    (s = [
                      "微信客服：".concat(
                        u.customerServiceEnabled ? "已开启" : "未开启"
                      ),
                      "客服电话：".concat(u.phone || "暂无"),
                      "服务时间：".concat(u.serviceHours || "暂无"),
                      "提示：".concat(u.fallbackText || "请稍后再试"),
                    ]),
                    n.setData({
                      contentModalTitle: o.title,
                      contentModalText: s.join("\n"),
                      contentModalLoading: !1,
                      contentModalError: "",
                    }),
                    (t.next = 16);
                  break;
                case 12:
                  (t.prev = 12),
                    (t.t0 = t.catch(3)),
                    a.warn("Load contact config failed", t.t0),
                    n.setData({
                      contentModalLoading: !1,
                      contentModalError: "客服信息更新失败，已展示默认联系方式",
                    });
                case 16:
                case "end":
                  return t.stop();
              }
          },
          e,
          null,
          [[3, 12]]
        );
      })
    )();
  },
};
