var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../@babel/runtime/helpers/typeof"),
  t = require("../../../../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../deps/trade-deps").syncWechatProfile;
module.exports = {
  applyAndSyncWechatUserProfile: function (a) {
    var i = this;
    return t(
      e().mark(function t() {
        var u, s, o, l;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if ((u = a && "object" === r(a) ? a : null)) {
                  e.next = 3;
                  break;
                }
                return e.abrupt("return");
              case 3:
                return (
                  (e.next = 5),
                  n({
                    nickname: String(u.nickname || "").trim(),
                    avatarUrl: String(u.avatarUrl || "").trim(),
                  })
                );
              case 5:
                return (
                  (s = e.sent),
                  (o = s && s.user && "object" === r(s.user) ? s.user : u),
                  "function" == typeof i.applyAuthUserProfile
                    ? i.applyAuthUserProfile(o)
                    : ((l = Number(o.userId || o.id || 0)),
                      i.profileCoordinatorApplyUserProfile({
                        nickname: o.nickname,
                        avatarUrl: o.avatarUrl,
                        userId: Number.isFinite(l) && l > 0 ? Math.round(l) : 0,
                      })),
                  e.abrupt("return", s)
                );
              case 9:
              case "end":
                return e.stop();
            }
        }, t);
      })
    )();
  },
};
