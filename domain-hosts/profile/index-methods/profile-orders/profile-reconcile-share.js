var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../../../pages/index/modules/deps/profile-deps"),
  t = a.getSchemeSharePayload,
  n = a.playSound,
  o = a.logger,
  i =
    require("../../../../utils/navigation/share-path").normalizeSchemeSharePath;
module.exports = {
  handleProfileShareTap: function () {
    var a = this;
    return r(
      e().mark(function r() {
        var l, s;
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
                  if ((l = (a.data.savedSchemes || [])[0]) && l.id) {
                    e.next = 6;
                    break;
                  }
                  return (
                    a.showToast("请先保存一个方案再分享"), e.abrupt("return")
                  );
                case 6:
                  return (e.prev = 6), (e.next = 9), t(l.id);
                case 9:
                  (s = e.sent),
                    (a.pendingSharePayload = {
                      title: "分享我的专属灵感配方",
                      path: i(s && s.path, l.id),
                      imageUrl: a.data.currentTrayBg
                        ? a.data.currentTrayBg.url
                        : "",
                    }),
                    a.profileCoordinatorSetShareModalVisible(!0),
                    n("pop"),
                    (e.next = 19);
                  break;
                case 15:
                  (e.prev = 15),
                    (e.t0 = e.catch(6)),
                    o.error("Profile share payload failed", e.t0),
                    a.showToast("暂时无法生成分享链接");
                case 19:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[6, 15]]
        );
      })
    )();
  },
  handleCloseProfileShareModal: function () {
    this.profileCoordinatorSetShareModalVisible(!1), n("pop");
  },
};
