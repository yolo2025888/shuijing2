var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator");
module.exports = {
  handleCycleRole: function () {
    this.handleProfileProtectedAction() && this.showToast("身份角色以后台为准");
  },
  handleCompleteWechatProfile: function () {
    var t = this;
    return r(
      e().mark(function r() {
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
                try {
                  "function" == typeof t.promptWechatProfileAuthIfNeeded
                    ? t.promptWechatProfileAuthIfNeeded()
                    : t.setData({ showProfileAuthPrompt: !0 });
                } catch (e) {
                  "function" == typeof t.reportBusinessError
                    ? t.reportBusinessError(
                        "Update profile",
                        e,
                        "更新头像昵称失败，请稍后重试"
                      )
                    : t.showToast("更新头像昵称失败，请稍后重试");
                }
              case 3:
              case "end":
                return e.stop();
            }
        }, r);
      })
    )();
  },
  handleProfileAvatarError: function () {
    this.setData({ profileAvatarUrl: this.data.profileAvatarFallback });
  },
};
