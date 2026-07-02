var t = require("../../../../@babel/runtime/helpers/typeof");
function e(t) {
  return String(t || "").trim();
}
module.exports = {
  mapOrderDetail: function (r, a, n, s) {
    var i = this,
      o = r && "object" === t(r) ? r : {},
      u = Array.isArray(o.items) ? o.items : [],
      m = Array.isArray(a)
        ? a
        : Array.isArray(o.statusLogs)
        ? o.statusLogs
        : [],
      d = Array.isArray(s) ? s : [],
      l = n && "object" === t(n) ? n : null,
      c = u.map(function (r) {
        var a,
          n,
          s,
          o = r && r.scheme && "object" === t(r.scheme) ? r.scheme : {},
          u = (function (t) {
            return Array.isArray(t)
              ? t
                  .map(function (t) {
                    return String(t || "").trim();
                  })
                  .filter(Boolean)
              : [];
          })(o.pattern || r.pattern || r.schemePattern || r.scheme_pattern),
          m = (function (r, a) {
            for (
              var n,
                s = r && "object" === t(r) ? r : {},
                i = a && "object" === t(a) ? a : {},
                o = s.snapshot && "object" === t(s.snapshot) ? s.snapshot : {},
                u = i.snapshot && "object" === t(i.snapshot) ? i.snapshot : {},
                m = [
                  s.paymentSnapshotUrl,
                  s.payment_snapshot_url,
                  s.paidSnapshotUrl,
                  s.paid_snapshot_url,
                  s.orderSnapshotUrl,
                  s.order_snapshot_url,
                  s.snapshotUrl,
                  s.snapshot_url,
                  s.previewUrl,
                  s.preview_url,
                  o.url,
                  o.src,
                  i.snapshotUrl,
                  i.snapshot_url,
                  i.previewUrl,
                  i.preview_url,
                  i.shareImageUrl,
                  i.share_image_url,
                  u.url,
                  u.src,
                ],
                d = 0;
              d < m.length;
              d += 1
            ) {
              var l = e(m[d]);
              if (
                l &&
                ((n = void 0),
                (n = e(l)) &&
                  !/^https?:\/\/(?:127\.0\.0\.1|localhost)(?::[0-9]+)?\/(?:__tmp__|tmp)\//i.test(
                    n
                  ) &&
                  !/^(?:wxfile:\/\/|blob:|data:image|http:\/\/tmp\/|tmp\/|\/tmp\/)/i.test(
                    n
                  ))
              )
                return l;
            }
            return "";
          })(r, o),
          d = (s =
            r &&
            (r.materialSnapshot ||
              r.material_snapshot ||
              o.materialSnapshot ||
              o.material_snapshot))
            ? Array.isArray(s)
              ? s.reduce(function (e, r) {
                  var a = r && "object" === t(r) ? r : null;
                  if (!a) return e;
                  var n = String(
                    a.id || a.materialId || a.material_id || a.code || ""
                  ).trim();
                  return (
                    !n || e[n] || (e[n] = Object.assign({}, a, { id: n })), e
                  );
                }, {})
              : "object" !== t(s)
              ? {}
              : Object.keys(s).reduce(function (e, r) {
                  var a = String(r || "").trim(),
                    n = s[r] && "object" === t(s[r]) ? s[r] : null;
                  return a && n
                    ? ((e[a] = Object.assign({}, n, {
                        id: String(n.id || a).trim() || a,
                      })),
                      e)
                    : e;
                }, {})
            : {},
          l = Array.isArray(o.renderPlan)
            ? o.renderPlan
            : Array.isArray(o.render_plan)
            ? o.render_plan
            : [];
        return {
          id: Number((r && r.id) || 0),
          name: String(o.name || "定制方案"),
          pattern: u,
          materialMap: d,
          materialSnapshot: d,
          renderPlan: l,
          render_plan: l,
          bgIndex: Number.isFinite(
            Number(null !== (a = o.bgIndex) && void 0 !== a ? a : o.bg_index)
          )
            ? Math.max(
                0,
                Math.round(
                  Number(
                    null !== (n = o.bgIndex) && void 0 !== n ? n : o.bg_index
                  )
                )
              )
            : 0,
          beadMm: Number(o.beadMm || o.bead_mm || 0) || null,
          canReuseScheme: u.length > 0,
          previewUrl: m,
          beadCount: Number((r && r.beadCount) || 0),
          totalMm: Number((r && r.totalMm) || 0),
          totalCmText: "".concat(
            (Number((r && r.totalMm) || 0) / 10).toFixed(1),
            "cm"
          ),
          itemAmountText: i.formatOrderAmountText((r && r.itemAmount) || 0),
          sourceDesignerId:
            r && r.sourceDesignerId ? Number(r.sourceDesignerId) : null,
        };
      }),
      p = m.map(function (t) {
        return i.mapOrderStatusLog(t);
      }),
      A = d.map(function (t) {
        var e = Number(
            (t &&
              (t.successRefundAmount ||
                (t.refundSummary && t.refundSummary.successRefundAmount))) ||
              0
          ),
          r = Number(
            (t &&
              (t.pendingRefundAmount ||
                (t.refundSummary && t.refundSummary.pendingRefundAmount))) ||
              0
          );
        return {
          id: Number((t && t.id) || 0),
          type: String((t && t.type) || ""),
          status: String((t && t.status) || ""),
          statusText: i.formatOrderStatusText(t && t.status),
          reason: String((t && t.reason) || ""),
          refundAmountText: i.formatOrderAmountText(e),
          pendingRefundAmount: r,
          pendingRefundAmountText: i.formatOrderAmountText(r),
          createdAtText: i.formatOrderDateText(t && t.createdAt),
        };
      }),
      h = l
        ? {
            logisticsCompany: String(l.logisticsCompany || ""),
            trackingNo: String(l.trackingNo || ""),
            status: String(l.status || ""),
            statusText: this.formatOrderStatusText(l.status),
            shippedAtText: this.formatOrderDateText(l.shippedAt),
            deliveredAtText: this.formatOrderDateText(l.deliveredAt),
          }
        : null,
      f = o.address && "object" === t(o.address) ? o.address : {};
    return {
      orderNo: String(o.orderNo || ""),
      status: String(o.status || ""),
      statusText: this.formatOrderStatusText(o.status),
      payableAmount: Number(o.payableAmount || 0),
      payableAmountText: this.formatOrderAmountText(o.payableAmount),
      goodsAmountText: this.formatOrderAmountText(o.goodsAmount),
      freightAmountText: this.formatOrderAmountText(o.freightAmount),
      createdAt: o.createdAt || null,
      createdAtText: this.formatOrderDateText(o.createdAt),
      payDeadlineAt: o.payDeadlineAt || null,
      payDeadlineAtText: this.formatOrderDateText(o.payDeadlineAt),
      address: {
        receiverName: String(f.receiverName || "未填写"),
        receiverPhone: String(f.receiverPhone || "未填写"),
        fullAddress: String(f.fullAddress || "未填写"),
      },
      actions: {
        canPay: "PENDING_PAY" === String(o.status || ""),
        canCancel: !(!o.actions || !o.actions.canCancel),
        canConfirmReceive: !(!o.actions || !o.actions.canConfirmReceive),
        canAfterSale: !(!o.actions || !o.actions.canAfterSale),
      },
      items: c,
      statusLogs: p,
      shipment: h,
      afterSales: A,
    };
  },
};
