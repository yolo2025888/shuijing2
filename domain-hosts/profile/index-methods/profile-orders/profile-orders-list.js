var t = require("../../../../@babel/runtime/helpers/typeof");
function e(t) {
  return String(t || "").trim();
}
function r(r) {
  for (
    var a,
      n = r && "object" === t(r) ? r : {},
      o = n.scheme && "object" === t(n.scheme) ? n.scheme : {},
      s = n.snapshot && "object" === t(n.snapshot) ? n.snapshot : {},
      i = o.snapshot && "object" === t(o.snapshot) ? o.snapshot : {},
      u = [
        n.paymentSnapshotUrl,
        n.payment_snapshot_url,
        n.paidSnapshotUrl,
        n.paid_snapshot_url,
        n.orderSnapshotUrl,
        n.order_snapshot_url,
        n.snapshotUrl,
        n.snapshot_url,
        n.previewUrl,
        n.preview_url,
        s.url,
        s.src,
        o.snapshotUrl,
        o.snapshot_url,
        o.previewUrl,
        o.preview_url,
        o.shareImageUrl,
        o.share_image_url,
        i.url,
        i.src,
      ],
      p = 0;
    p < u.length;
    p += 1
  ) {
    var m = e(u[p]);
    if (
      m &&
      ((a = void 0),
      (a = e(m)) &&
        !/^https?:\/\/(?:127\.0\.0\.1|localhost)(?::[0-9]+)?\/(?:__tmp__|tmp)\//i.test(
          a
        ) &&
        !/^(?:wxfile:\/\/|blob:|data:image|http:\/\/tmp\/|tmp\/|\/tmp\/)/i.test(
          a
        ))
    )
      return m;
  }
  return "";
}
module.exports = {
  handleProfileProtectedAction: function () {
    return (
      !!this.data.isLoggedIn ||
      (this.showToast("请先登录"),
      "function" == typeof this.profileCoordinatorOpenAuthPrompt
        ? this.profileCoordinatorOpenAuthPrompt()
        : "function" == typeof this.setData &&
          this.setData({
            showProfileAuthPrompt: !0,
            profileAuthSubmitting: !1,
          }),
      !1)
    );
  },
  resolveCreatorCenterToast: function (t, e) {
    var r = String((t && t.code) || "").toUpperCase(),
      a = String((t && t.message) || "").trim();
    return r.indexOf("NOT_OPEN") >= 0 || r.indexOf("INCUBATING") >= 0
      ? a || "创作中心孵化中，暂未开放"
      : r.indexOf("BETA_PENDING") >= 0
      ? a || "创作中心即将开放"
      : a || e || "创作中心功能即将上线";
  },
  resolveOrderFilterByEntryId: function (t) {
    var e = (t && t.currentTarget && t.currentTarget.dataset) || {},
      r = String(e.id || "").trim();
    return {
      pending_pay: !0,
      pending_ship: !0,
      pending_receive: !0,
      after_sale: !0,
    }[r]
      ? r
      : "all";
  },
  formatOrderStatusText: function (t) {
    var e = String(t || "").toUpperCase();
    return (
      {
        PENDING_PAY: "待支付",
        PAID: "已支付",
        PROCESSING: "制作中",
        PENDING_SHIP: "待发货",
        SHIPPED: "已发货",
        COMPLETED: "已完成",
        AFTER_SALE: "售后中",
        APPLIED: "已申请售后",
        APPROVED: "已通过审核",
        REJECTED: "已驳回",
        CLOSED: "已关闭",
        REFUNDING: "退款中",
        REFUNDED: "已退款",
        CANCELLED_TIMEOUT: "超时取消",
        CANCELLED_USER: "用户取消",
        PAY_FAILED: "支付失败",
        SHIPMENT_CREATED: "已发货",
        DELIVERED: "已签收",
      }[e] ||
      e ||
      "未知"
    );
  },
  formatOrderDateText: function (t) {
    if (!t) return "暂无";
    var e = new Date(t);
    if (Number.isNaN(e.getTime())) return "暂无";
    var r = "".concat(e.getMonth() + 1).padStart(2, "0"),
      a = "".concat(e.getDate()).padStart(2, "0"),
      n = "".concat(e.getHours()).padStart(2, "0"),
      o = "".concat(e.getMinutes()).padStart(2, "0");
    return "".concat(r, "-").concat(a, " ").concat(n, ":").concat(o);
  },
  formatOrderAmountText: function (t) {
    return "¥".concat(Number(t || 0).toFixed(2));
  },
  mapOrderListItem: function (e) {
    var a = e && "object" === t(e) ? e : {},
      n = a.firstItem && "object" === t(a.firstItem) ? a.firstItem : {},
      o = String(a.orderNo || ""),
      s = r(n) || r(a),
      i =
        String((a.firstItem && a.firstItem.name) || "定制手串").trim() ||
        "定制手串",
      u = Number(a.itemCount || 0),
      p = (function (e) {
        var r = e && "object" === t(e) ? e : {},
          a = r.scheme && "object" === t(r.scheme) ? r.scheme : {};
        return Array.isArray(r.pattern) && r.pattern.length
          ? r.pattern
          : Array.isArray(r.schemePattern) && r.schemePattern.length
          ? r.schemePattern
          : Array.isArray(r.scheme_pattern) && r.scheme_pattern.length
          ? r.scheme_pattern
          : Array.isArray(a.pattern) && a.pattern.length
          ? a.pattern
          : [];
      })(n)
        .map(function (t) {
          return String(t || "").trim();
        })
        .filter(Boolean);
    return {
      orderNo: o,
      status: String(a.status || ""),
      statusText: this.formatOrderStatusText(a.status),
      payableAmount: Number(a.payableAmount || 0),
      payableAmountText: this.formatOrderAmountText(a.payableAmount),
      createdAt: a.createdAt || null,
      createdAtText: this.formatOrderDateText(a.createdAt),
      itemCount: u,
      itemCountText: u > 0 ? "".concat(u, "款方案") : "暂无方案",
      firstItemName: i,
      firstItemTitle: u > 1 ? "".concat(i, " 等").concat(u, "款") : i,
      previewUrl: s,
      pattern: p,
    };
  },
  mapOrderStatusLog: function (e) {
    var r = e && "object" === t(e) ? e : {},
      a = String(r.toStatus || "");
    return {
      id: Number(r.id || 0),
      toStatus: a,
      toStatusText: this.formatOrderStatusText(a),
      fromStatus: r.fromStatus || null,
      fromStatusText: r.fromStatus
        ? this.formatOrderStatusText(r.fromStatus)
        : "",
      reason: String(r.reason || "").trim(),
      operatorType: String(r.operatorType || "").trim() || "SYSTEM",
      createdAt: r.createdAt || null,
      createdAtText: this.formatOrderDateText(r.createdAt),
    };
  },
};
