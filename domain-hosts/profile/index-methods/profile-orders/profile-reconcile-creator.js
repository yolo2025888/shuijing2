var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../../../pages/index/modules/deps/profile-deps"),
  a = t.createCreatorApplication,
  n = t.getCreatorPublishStatus,
  o = t.logger;
module.exports = {
  handleProfileApplyDesigner: function () {
    var t = this;
    return r(
      e().mark(function r() {
        var n;
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
                  return (
                    (e.prev = 2), (e.next = 5), a({ entry: "profile_upgrade" })
                  );
                case 5:
                  (n = e.sent) && n.accepted
                    ? t.showToast("申请已提交，请耐心等待审核")
                    : t.showToast(
                        t.resolveCreatorCenterToast(n, "申请通道暂未开放")
                      ),
                    (e.next = 13);
                  break;
                case 9:
                  (e.prev = 9),
                    (e.t0 = e.catch(2)),
                    o.error("Create creator application failed", e.t0),
                    t.showToast("申请提交失败，请稍后再试");
                case 13:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[2, 9]]
        );
      })
    )();
  },
  handleProfileOpenHistory: function () {
    var t = this;
    return r(
      e().mark(function r() {
        var a;
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
                  return (e.prev = 2), (e.next = 5), n();
                case 5:
                  if (((a = e.sent), !(!a || !0 !== a.available))) {
                    e.next = 10;
                    break;
                  }
                  return (
                    t.showToast(
                      t.resolveCreatorCenterToast(a, "历史订单申请入口暂未开放")
                    ),
                    e.abrupt("return")
                  );
                case 10:
                  if (Number((a && a.total) || 0)) {
                    e.next = 14;
                    break;
                  }
                  return (
                    t.showToast("暂无可发起申请的历史订单"), e.abrupt("return")
                  );
                case 14:
                  t.showToast("历史订单申请功能即将开放"), (e.next = 21);
                  break;
                case 17:
                  (e.prev = 17),
                    (e.t0 = e.catch(2)),
                    o.error("Get creator publish status failed", e.t0),
                    t.showToast("暂时无法读取发布状态");
                case 21:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[2, 17]]
        );
      })
    )();
  },
};
