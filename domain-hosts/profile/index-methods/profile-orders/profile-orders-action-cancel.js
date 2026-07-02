var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../../../pages/index/modules/deps/profile-deps"),
  n = a.cancelOrder,
  t = a.playSound,
  o = a.logger;
module.exports = {
  handleOrderManagerCancelOrder: function () {
    var a = this;
    return r(
      e().mark(function r() {
        var s, c, i, l, u;
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
                  if (!a.data.orderManagerCancelling) {
                    e.next = 4;
                    break;
                  }
                  return e.abrupt("return");
                case 4:
                  if (
                    ((s = a.data.orderManagerDetail || null),
                    (c = String((s && s.orderNo) || "")),
                    (i = !!(s && s.actions && s.actions.canCancel)),
                    c && i)
                  ) {
                    e.next = 10;
                    break;
                  }
                  return a.showToast("当前订单不可取消"), e.abrupt("return");
                case 10:
                  return (
                    (l = !1),
                    (e.prev = 11),
                    (e.next = 14),
                    new Promise(function (e, r) {
                      wx.showModal({
                        title: "取消订单",
                        content: "取消后库存将回退，确认继续？",
                        confirmColor: "#c85644",
                        success: e,
                        fail: r,
                      });
                    })
                  );
                case 14:
                  (u = e.sent), (l = !(!u || !u.confirm)), (e.next = 21);
                  break;
                case 18:
                  (e.prev = 18), (e.t0 = e.catch(11)), (l = !1);
                case 21:
                  if (l) {
                    e.next = 23;
                    break;
                  }
                  return e.abrupt("return");
                case 23:
                  return (
                    a.setData({ orderManagerCancelling: !0 }),
                    (e.prev = 24),
                    (e.next = 27),
                    n(c, { reason: "USER_CANCEL_FROM_PROFILE" })
                  );
                case 27:
                  return (
                    a.showToast("订单已取消"),
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
                    o.error("Cancel order from manager failed", e.t1),
                    a.showToast("取消订单失败");
                case 38:
                  return (
                    (e.prev = 38),
                    a.setData({ orderManagerCancelling: !1 }),
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
