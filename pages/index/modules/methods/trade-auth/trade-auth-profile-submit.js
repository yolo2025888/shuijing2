var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../deps/trade-deps").logger;
module.exports = {
  handleAuthorizeWechatProfile: function () {
    var a = this;
    return r(
      e().mark(function r() {
        var o, i, n, s;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (a.data.isLoggedIn) {
                    e.next = 3;
                    break;
                  }
                  return (
                    a.profileCoordinatorCloseAuthPrompt(), e.abrupt("return")
                  );
                case 3:
                  if (
                    ((o =
                      String(a.data.profileAuthNickname || "").trim() ||
                      String(a.data.profileNickname || "").trim() ||
                      "微信用户"),
                    (i = String(a.data.profileAuthAvatarUrl || "").trim()),
                    (n = String(a.data.profileAvatarFallback || "").trim()),
                    (s = i),
                    o && "微信用户" !== o)
                  ) {
                    e.next = 10;
                    break;
                  }
                  return a.showToast("请先填写昵称"), e.abrupt("return");
                case 10:
                  if (
                    (a.profileCoordinatorSetAuthSubmitting(!0),
                    (e.prev = 11),
                    !a.isProfileAvatarLocalFilePath ||
                      !a.isProfileAvatarLocalFilePath(i))
                  ) {
                    e.next = 18;
                    break;
                  }
                  return (e.next = 15), a.uploadProfileAvatarToCloud(i);
                case 15:
                  (s = e.sent), (e.next = 19);
                  break;
                case 18:
                  s = "";
                case 19:
                  return (
                    (s && s !== n) || (s = ""),
                    (e.next = 22),
                    a.applyAndSyncWechatUserProfile({
                      nickname: o,
                      avatarUrl: s,
                    })
                  );
                case 22:
                  a.profileCoordinatorCloseAuthPrompt({ resetDraft: !0 }),
                    a.showToast("头像昵称已更新"),
                    (e.next = 31);
                  break;
                case 26:
                  (e.prev = 26),
                    (e.t0 = e.catch(11)),
                    t.warn("Authorize wechat profile failed", {
                      message: String(
                        (e.t0 && (e.t0.errMsg || e.t0.message)) || ""
                      ),
                      error: e.t0,
                    }),
                    a.profileCoordinatorSetAuthSubmitting(!1),
                    a.showToast("头像昵称更新失败，请重试");
                case 31:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[11, 26]]
        );
      })
    )();
  },
  handleCloseProfileAuthPrompt: function () {
    (this._pendingWechatLoginAction = ""),
      this.profileCoordinatorCloseAuthPrompt();
  },
};
