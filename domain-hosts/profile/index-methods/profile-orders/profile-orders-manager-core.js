var r = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../../../pages/index/modules/deps/profile-deps"),
  n = a.listOrders,
  t = a.playSound,
  o = a.logger;
module.exports = {
  openOrderManager: function (a) {
    var n = this;
    return e(
      r().mark(function e() {
        var o, d;
        return r().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return (
                  (o = String(a || "all")),
                  (d =
                    Number(n.data.orderManagerPageSize || 0) > 0
                      ? Number(n.data.orderManagerPageSize)
                      : 8),
                  n.setData({
                    showOrderManagerModal: !0,
                    orderManagerFilter: o,
                    orderManagerLoading: !0,
                    orderManagerError: "",
                    orderManagerItems: [],
                    orderManagerPage: 1,
                    orderManagerPageSize: d,
                    orderManagerHasMore: !1,
                    orderManagerTotal: 0,
                    orderManagerActiveOrderNo: "",
                    orderManagerDetail: null,
                    orderManagerDetailLoading: !1,
                    orderManagerStatusLogs: [],
                    orderManagerPaying: !1,
                    orderManagerCancelling: !1,
                    orderManagerConfirmingReceive: !1,
                    orderManagerApplyingAfterSale: !1,
                  }),
                  t("pop"),
                  (r.next = 6),
                  n.loadOrderManagerList({
                    filter: o,
                    page: 1,
                    append: !1,
                    refreshDetail: !1,
                  })
                );
              case 6:
              case "end":
                return r.stop();
            }
        }, e);
      })
    )();
  },
  loadOrderManagerList: function (a) {
    var t = this;
    return e(
      r().mark(function e() {
        var d, g, i, s, l, M, u, p, c, f, m, b, L, S, D;
        return r().wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  if (
                    ((d = Object.assign(
                      {
                        filter: t.data.orderManagerFilter || "all",
                        page: 1,
                        append: !1,
                        refreshDetail: !0,
                      },
                      a || {}
                    )),
                    !t.data.orderManagerLoading || !d.append)
                  ) {
                    r.next = 3;
                    break;
                  }
                  return r.abrupt("return");
                case 3:
                  return (
                    (t._orderListReqSeq = Number(t._orderListReqSeq || 0) + 1),
                    (g = t._orderListReqSeq),
                    t.setData({
                      orderManagerLoading: !0,
                      orderManagerError: "",
                    }),
                    (r.prev = 6),
                    (r.next = 9),
                    n({
                      filter: d.filter,
                      page: d.page,
                      pageSize: t.data.orderManagerPageSize || 8,
                    })
                  );
                case 9:
                  if (((i = r.sent), g === t._orderListReqSeq)) {
                    r.next = 12;
                    break;
                  }
                  return r.abrupt("return");
                case 12:
                  if (
                    ((s = Array.isArray(i && i.items)
                      ? i.items.map(function (r) {
                          return t.mapOrderListItem(r);
                        })
                      : []),
                    (l = (d.append && t.data.orderManagerItems) || []),
                    (M = l.concat(s)),
                    (u = {}),
                    (p = M.filter(function (r) {
                      var e = String((r && r.orderNo) || "");
                      return !(!e || u[e]) && ((u[e] = !0), !0);
                    })),
                    (c = !(!i || !i.hasMore)),
                    (f = Number((i && i.total) || 0)),
                    (m = String(t.data.orderManagerActiveOrderNo || "")),
                    (b =
                      m &&
                      p.some(function (r) {
                        return r.orderNo === m;
                      })),
                    (L = b ? m : ""),
                    (S = {
                      orderManagerFilter: d.filter,
                      orderManagerItems: p,
                      orderManagerPage: Number(d.page || 1),
                      orderManagerHasMore: c,
                      orderManagerTotal: f,
                      orderManagerLoading: !1,
                      orderManagerActiveOrderNo: L,
                      orderManagerError: p.length
                        ? ""
                        : t.data.orderManagerError,
                    }),
                    L ||
                      ((S.orderManagerDetail = null),
                      (S.orderManagerStatusLogs = []),
                      (S.orderManagerDetailLoading = !1)),
                    t.setData(S),
                    p.length)
                  ) {
                    r.next = 28;
                    break;
                  }
                  return (
                    t.setData({
                      orderManagerDetail: null,
                      orderManagerStatusLogs: [],
                      orderManagerDetailLoading: !1,
                      orderManagerPaying: !1,
                      orderManagerCancelling: !1,
                      orderManagerConfirmingReceive: !1,
                      orderManagerApplyingAfterSale: !1,
                    }),
                    r.abrupt("return")
                  );
                case 28:
                  if (
                    ((D =
                      !1 !== d.refreshDetail ||
                      !t.data.orderManagerDetail ||
                      String(t.data.orderManagerDetail.orderNo || "") !== L),
                    !L || !D)
                  ) {
                    r.next = 32;
                    break;
                  }
                  return (
                    (r.next = 32), t.loadOrderManagerDetail(L, { silent: !1 })
                  );
                case 32:
                  r.next = 41;
                  break;
                case 34:
                  if (
                    ((r.prev = 34),
                    (r.t0 = r.catch(6)),
                    g === t._orderListReqSeq)
                  ) {
                    r.next = 38;
                    break;
                  }
                  return r.abrupt("return");
                case 38:
                  o.error("Load order manager list failed", r.t0),
                    t.setData({
                      orderManagerLoading: !1,
                      orderManagerError: "订单列表加载失败",
                    }),
                    t.showToast("订单列表加载失败");
                case 41:
                case "end":
                  return r.stop();
              }
          },
          e,
          null,
          [[6, 34]]
        );
      })
    )();
  },
};
