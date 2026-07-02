var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  o =
    require("../../../../pages/index/modules/deps/profile-deps").logoutByWechat;
module.exports = {
  handleLogout: function () {
    var t = this;
    return r(
      e().mark(function r() {
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!t._logoutInProgress) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return");
                case 2:
                  return (
                    (t._logoutInProgress = !0),
                    t.showToast("正在退出登录..."),
                    (e.prev = 4),
                    (e.next = 7),
                    o()
                  );
                case 7:
                  return (e.prev = 7), (t._logoutInProgress = !1), e.finish(7);
                case 10:
                  (t.copyrightContext = null),
                    (t.pendingSharePayload = null),
                    t.profileCoordinatorApplyLogoutResetPayload({
                      profileNickname: "微信用户",
                      profileAvatarUrl: t.data.profileAvatarFallback,
                    });
                case 13:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[4, , 7, 10]]
        );
      })
    )();
  },
  handleNoop: function () {},
};
