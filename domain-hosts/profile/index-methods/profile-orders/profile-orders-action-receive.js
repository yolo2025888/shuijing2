var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../../../pages/index/modules/deps/profile-deps"),
  n = a.confirmReceiveByOrderNo,
  t = a.playSound,
  o = a.logger;
module.exports = {
  handleOrderManagerConfirmReceive: function () {
    var a = this;
    return r(
      e().mark(function r() {
        var i, s, c, u, d;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (a.handleProfileProtectedAction()) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return");
                case 2:
                  if (!a.data.orderManagerConfirmingReceive) {
                    e.next = 4;
                    break;
                  }
                  return e.abrupt("return");
                case 4:
                  if (
                    ((i = a.data.orderManagerDetail || null),
                    (s = String((i && i.orderNo) || "")),
                    (c = !!(i && i.actions && i.actions.canConfirmReceive)),
                    s && c)
                  ) {
                    e.next = 10;
                    break;
                  }
                  return (
                    a.showToast("当前订单不可确认收货"), e.abrupt("return")
                  );
                case 10:
                  return (
                    (u = !1),
                    (e.prev = 11),
                    (e.next = 14),
                    new Promise(function (e, r) {
                      wx.showModal({
                        title: "确认收货",
                        content: "确认收货后订单将完成，是否继续？",
                        confirmColor: "#7a8b76",
                        success: e,
                        fail: r,
                      });
                    })
                  );
                case 14:
                  (d = e.sent), (u = !(!d || !d.confirm)), (e.next = 21);
                  break;
                case 18:
                  (e.prev = 18), (e.t0 = e.catch(11)), (u = !1);
                case 21:
                  if (u) {
                    e.next = 23;
                    break;
                  }
                  return e.abrupt("return");
                case 23:
                  return (
                    a.setData({ orderManagerConfirmingReceive: !0 }),
                    (e.prev = 24),
                    (e.next = 27),
                    n(s)
                  );
                case 27:
                  return (
                    a.showToast("已确认收货"),
                    t("pop"),
                    (e.next = 31),
                    a.loadOrderManagerList({
                      filter: a.data.orderManagerFilter || "all",
                      page: 1,
                      append: !1,
                      refreshDetail: !0,
                    })
                  );
                case 31:
                  a.loadAddressAndDashboard({ force: !0 }), (e.next = 38);
                  break;
                case 34:
                  (e.prev = 34),
                    (e.t1 = e.catch(24)),
                    o.error("Confirm receive failed", e.t1),
                    a.showToast("确认收货失败");
                case 38:
                  return (
                    (e.prev = 38),
                    a.setData({ orderManagerConfirmingReceive: !1 }),
                    e.finish(38)
                  );
                case 41:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [
            [11, 18],
            [24, 34, 38, 41],
          ]
        );
      })
    )();
  },
};
