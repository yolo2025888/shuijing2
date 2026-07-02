var r = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../@babel/runtime/helpers/typeof"),
  t = require("../../../../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../deps/trade-deps").logger;
module.exports = {
  tryCaptureWechatUserProfile: function (i) {
    var n = this;
    return t(
      r().mark(function t() {
        var s, l, o, u, c;
        return r().wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  if (
                    ((s = Object.assign({ silent: !0 }, i || {})),
                    wx.getUserProfile)
                  ) {
                    r.next = 3;
                    break;
                  }
                  return r.abrupt("return", null);
                case 3:
                  return (
                    (r.prev = 3),
                    (r.next = 6),
                    new Promise(function (r, e) {
                      wx.getUserProfile({
                        desc: "用于完善小程序个人头像与昵称",
                        success: r,
                        fail: e,
                      });
                    })
                  );
                case 6:
                  if (
                    ((l = r.sent),
                    (o =
                      l && l.userInfo && "object" === e(l.userInfo)
                        ? l.userInfo
                        : null))
                  ) {
                    r.next = 10;
                    break;
                  }
                  return r.abrupt("return", null);
                case 10:
                  if (
                    ((u = String(o.nickName || "").trim()),
                    (c = String(o.avatarUrl || "").trim()),
                    u || c)
                  ) {
                    r.next = 14;
                    break;
                  }
                  return r.abrupt("return", null);
                case 14:
                  return r.abrupt("return", {
                    nickname: u || "微信用户",
                    avatarUrl: c,
                  });
                case 17:
                  return (
                    (r.prev = 17),
                    (r.t0 = r.catch(3)),
                    a.warn("Capture wechat profile failed", {
                      message: String(
                        (r.t0 && (r.t0.errMsg || r.t0.message)) || ""
                      ),
                    }),
                    s.silent || n.showToast("未获取微信头像昵称，已继续登录"),
                    r.abrupt("return", null)
                  );
                case 22:
                case "end":
                  return r.stop();
              }
          },
          t,
          null,
          [[3, 17]]
        );
      })
    )();
  },
  shouldRequestWechatProfile: function () {
    var r = String(this.data.profileNickname || "").trim(),
      e = String(this.data.profileAvatarUrl || "").trim(),
      t = String(this.data.profileAvatarFallback || "").trim();
    return !(!!r && "微信用户" !== r && !!e && e !== t);
  },
  promptWechatProfileAuthIfNeeded: function () {
    if (this.data.isLoggedIn)
      if (this.shouldRequestWechatProfile()) {
        var r = String(this.data.profileNickname || "").trim(),
          e = String(this.data.profileAvatarUrl || "").trim(),
          t = String(this.data.profileAvatarFallback || "").trim();
        this.profileCoordinatorOpenAuthPrompt({
          nickname: r && "微信用户" !== r ? r : "",
          avatarUrl: e && e !== t ? e : "",
        });
      } else this.profileCoordinatorCloseAuthPrompt({ resetDraft: !0 });
  },
  handleProfileNicknameInput: function (r) {
    var e = String((r && r.detail && r.detail.value) || "").trim();
    this.profileCoordinatorUpdateAuthDraft({ nickname: e.slice(0, 24) });
  },
  handleChooseWechatAvatar: function (r) {
    var e = String(
      (r && r.detail && (r.detail.avatarUrl || r.detail.tempFilePath)) || ""
    ).trim();
    e
      ? this.profileCoordinatorUpdateAuthDraft({ avatarUrl: e })
      : this.showToast("未获取头像，请重试");
  },
};
