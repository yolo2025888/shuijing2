var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/slicedToArray"),
  a = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../../../pages/index/modules/deps/profile-deps"),
  n = t.getOrderDetail,
  i = t.listOrderStatusLogs,
  o = t.getShipmentByOrderNo,
  d = t.getAfterSalesByOrderNo,
  u = t.logger;
module.exports = {
  loadOrderManagerDetail: function (t, s) {
    var l = this;
    return a(
      e().mark(function a() {
        var c, g, f, p, M, D, b, h, m, v;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if ((c = String(t || "").trim())) {
                    e.next = 3;
                    break;
                  }
                  return e.abrupt("return");
                case 3:
                  return (
                    (g = Object.assign({ silent: !1 }, s || {})),
                    (l._orderDetailReqSeq =
                      Number(l._orderDetailReqSeq || 0) + 1),
                    (f = l._orderDetailReqSeq),
                    g.silent || l.setData({ orderManagerDetailLoading: !0 }),
                    (e.prev = 7),
                    (e.next = 10),
                    Promise.all([
                      n(c),
                      i(c, { limit: 50 }).catch(function () {
                        return null;
                      }),
                      o(c).catch(function () {
                        return null;
                      }),
                      d(c).catch(function () {
                        return [];
                      }),
                    ])
                  );
                case 10:
                  if (
                    ((p = e.sent),
                    (M = r(p, 4)),
                    (D = M[0]),
                    (b = M[1]),
                    (h = M[2]),
                    (m = M[3]),
                    f === l._orderDetailReqSeq)
                  ) {
                    e.next = 18;
                    break;
                  }
                  return e.abrupt("return");
                case 18:
                  (v = l.mapOrderDetail(D, b, h, m)),
                    l.setData({
                      orderManagerActiveOrderNo: c,
                      orderManagerDetail: v,
                      orderManagerStatusLogs: v.statusLogs || [],
                      orderManagerDetailLoading: !1,
                    }),
                    (e.next = 29);
                  break;
                case 22:
                  if (
                    ((e.prev = 22),
                    (e.t0 = e.catch(7)),
                    f === l._orderDetailReqSeq)
                  ) {
                    e.next = 26;
                    break;
                  }
                  return e.abrupt("return");
                case 26:
                  u.error("Load order manager detail failed", e.t0),
                    l.setData({ orderManagerDetailLoading: !1 }),
                    l.showToast("订单详情加载失败");
                case 29:
                case "end":
                  return e.stop();
              }
          },
          a,
          null,
          [[7, 22]]
        );
      })
    )();
  },
  handleOrderManagerSelectOrder: function (r) {
    var t = this;
    return a(
      e().mark(function a() {
        var n, i, o, d;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (t.handleProfileProtectedAction()) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return");
              case 2:
                if (
                  ((n =
                    (r && r.currentTarget && r.currentTarget.dataset) || {}),
                  (i = String(n.orderNo || "").trim()))
                ) {
                  e.next = 6;
                  break;
                }
                return e.abrupt("return");
              case 6:
                if (
                  ((o = String(t.data.orderManagerActiveOrderNo || "")),
                  (d = !(
                    !t.data.orderManagerDetail ||
                    String(t.data.orderManagerDetail.orderNo || "") !== i
                  )),
                  i !== o &&
                    t.setData({
                      orderManagerActiveOrderNo: i,
                      orderManagerDetail: null,
                      orderManagerStatusLogs: [],
                    }),
                  !d)
                ) {
                  e.next = 11;
                  break;
                }
                return e.abrupt("return");
              case 11:
                return (
                  (e.next = 13), t.loadOrderManagerDetail(i, { silent: !1 })
                );
              case 13:
              case "end":
                return e.stop();
            }
        }, a);
      })
    )();
  },
  handleCloseOrderManagerDetail: function () {
    this.setData({
      orderManagerActiveOrderNo: "",
      orderManagerDetail: null,
      orderManagerStatusLogs: [],
      orderManagerDetailLoading: !1,
      orderManagerPaying: !1,
      orderManagerCancelling: !1,
      orderManagerConfirmingReceive: !1,
      orderManagerApplyingAfterSale: !1,
    });
  },
  handleOrderManagerReloadDetail: function () {
    var r = this;
    return a(
      e().mark(function a() {
        var t;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (r.handleProfileProtectedAction()) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return");
              case 2:
                if (
                  (t = String(r.data.orderManagerActiveOrderNo || "").trim())
                ) {
                  e.next = 5;
                  break;
                }
                return e.abrupt("return");
              case 5:
                return (
                  (e.next = 7), r.loadOrderManagerDetail(t, { silent: !1 })
                );
              case 7:
              case "end":
                return e.stop();
            }
        }, a);
      })
    )();
  },
};
