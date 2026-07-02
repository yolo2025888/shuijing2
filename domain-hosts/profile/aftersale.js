var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../pages/index/modules/deps/profile-deps"),
  n = t.createAfterSaleByOrderNo,
  a = t.logger,
  s = require("../../pages/index/modules/deps/profile-deps").playSound;
function u(e) {
  return i.apply(this, arguments);
}
function i() {
  return (i = r(
    e().mark(function r(t) {
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (!t || "function" != typeof t.handleOpenContactQrPopup) {
                e.next = 4;
                break;
              }
              return (e.next = 3), t.handleOpenContactQrPopup();
            case 3:
              return e.abrupt("return");
            case 4:
              t &&
                "function" == typeof t.showToast &&
                t.showToast("请在个人中心联系客服");
            case 5:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function o(e) {
  return c.apply(this, arguments);
}
function c() {
  return (c = r(
    e().mark(function r(t) {
      var n;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (
                "undefined" != typeof wx &&
                wx &&
                "function" == typeof wx.showModal
              ) {
                e.next = 2;
                break;
              }
              return e.abrupt("return", !0);
            case 2:
              return (
                (e.next = 4),
                new Promise(function (e) {
                  wx.showModal({
                    title: "申请退款/售后",
                    content:
                      "提交后订单会进入售后处理中，生产/发货可能暂停。如只是咨询问题，请先联系客服。",
                    confirmText: "继续申请",
                    cancelText: "联系客服",
                    success: e,
                    fail: function () {
                      return e({ confirm: !0 });
                    },
                  });
                })
              );
            case 4:
              if (!(n = e.sent) || !n.confirm) {
                e.next = 7;
                break;
              }
              return e.abrupt("return", !0);
            case 7:
              return (e.next = 9), u(t);
            case 9:
              return e.abrupt("return", !1);
            case 10:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
module.exports = {
  createAfterSaleMethods: function () {
    return Object.freeze({
      handleOrderManagerApplyAfterSale: function () {
        var t = this;
        return r(
          e().mark(function r() {
            var u, i, c, p, f, l, d, x, b, h, m;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t.handleProfileProtectedAction()) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      if (!t.data.orderManagerApplyingAfterSale) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return");
                    case 4:
                      if (
                        ((u = t.data.orderManagerDetail || null),
                        (i = String((u && u.orderNo) || "")),
                        (c = !!(u && u.actions && u.actions.canAfterSale)),
                        i && c)
                      ) {
                        e.next = 10;
                        break;
                      }
                      return (
                        t.showToast("当前订单不可申请售后"), e.abrupt("return")
                      );
                    case 10:
                      return (e.next = 12), o(t);
                    case 12:
                      if (e.sent) {
                        e.next = 15;
                        break;
                      }
                      return e.abrupt("return");
                    case 15:
                      if (
                        ((p = Array.isArray(u && u.items) ? u.items : []),
                        (f = 0),
                        !(p.length > 1))
                      ) {
                        e.next = 37;
                        break;
                      }
                      return (
                        (e.prev = 18),
                        (e.next = 21),
                        new Promise(function (e, r) {
                          wx.showActionSheet({
                            itemList: p.map(function (e) {
                              var r = String((e && e.name) || "定制方案"),
                                t = String((e && e.itemAmountText) || "");
                              return "".concat(r, " ").concat(t).trim();
                            }),
                            success: e,
                            fail: r,
                          });
                        })
                      );
                    case 21:
                      if (
                        ((l = e.sent),
                        (d = Number(l && l.tapIndex)),
                        !(!Number.isFinite(d) || d < 0 || d >= p.length))
                      ) {
                        e.next = 25;
                        break;
                      }
                      return e.abrupt("return");
                    case 25:
                      (f = Number((p[d] && p[d].id) || 0)), (e.next = 35);
                      break;
                    case 28:
                      if (
                        ((e.prev = 28),
                        (e.t0 = e.catch(18)),
                        !(
                          String((e.t0 && e.t0.errMsg) || "").indexOf(
                            "cancel"
                          ) >= 0
                        ))
                      ) {
                        e.next = 33;
                        break;
                      }
                      return e.abrupt("return");
                    case 33:
                      return (
                        t.showToast("选择售后商品失败"), e.abrupt("return")
                      );
                    case 35:
                      e.next = 38;
                      break;
                    case 37:
                      f = Number((p[0] && p[0].id) || 0);
                    case 38:
                      return (
                        (x = [
                          "珠子有破损",
                          "收到商品与预期不符",
                          "尺寸不合适",
                          "其他退款/售后问题",
                        ]),
                        (b = ""),
                        (e.prev = 40),
                        (e.next = 43),
                        new Promise(function (e, r) {
                          wx.showActionSheet({
                            itemList: x,
                            success: e,
                            fail: r,
                          });
                        })
                      );
                    case 43:
                      if (
                        ((h = e.sent),
                        (m = Number(h && h.tapIndex)),
                        !(!Number.isFinite(m) || m < 0 || m >= x.length))
                      ) {
                        e.next = 47;
                        break;
                      }
                      return e.abrupt("return");
                    case 47:
                      (b = x[m]), (e.next = 57);
                      break;
                    case 50:
                      if (
                        ((e.prev = 50),
                        (e.t1 = e.catch(40)),
                        !(
                          String((e.t1 && e.t1.errMsg) || "").indexOf(
                            "cancel"
                          ) >= 0
                        ))
                      ) {
                        e.next = 55;
                        break;
                      }
                      return e.abrupt("return");
                    case 55:
                      return (
                        t.showToast("选择售后原因失败"), e.abrupt("return")
                      );
                    case 57:
                      if (b) {
                        e.next = 59;
                        break;
                      }
                      return e.abrupt("return");
                    case 59:
                      return (
                        t.setData({ orderManagerApplyingAfterSale: !0 }),
                        (e.prev = 60),
                        (e.next = 63),
                        n(i, {
                          orderItemId: f > 0 ? f : void 0,
                          type: "REFUND",
                          reason: b,
                        })
                      );
                    case 63:
                      return (
                        t.showToast("售后申请已提交"),
                        s("pop"),
                        (e.next = 67),
                        t.loadOrderManagerDetail(i, { silent: !1 })
                      );
                    case 67:
                      t.loadAddressAndDashboard({ force: !0 }), (e.next = 75);
                      break;
                    case 70:
                      (e.prev = 70),
                        (e.t2 = e.catch(60)),
                        a.error("Apply after sale failed", e.t2),
                        String((e.t2 && (e.t2.code || e.t2.message)) || "")
                          .toUpperCase()
                          .indexOf("AFTER_SALE_ALREADY_EXISTS") >= 0
                          ? t.showToast("该订单已存在售后申请")
                          : t.showToast("售后申请提交失败");
                    case 75:
                      return (
                        (e.prev = 75),
                        t.setData({ orderManagerApplyingAfterSale: !1 }),
                        e.finish(75)
                      );
                    case 78:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [
                [18, 28],
                [40, 50],
                [60, 70, 75, 78],
              ]
            );
          })
        )();
      },
    });
  },
};
