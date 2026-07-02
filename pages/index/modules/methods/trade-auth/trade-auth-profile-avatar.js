var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../deps/trade-deps").uploadProfileImage,
  a =
    require("../../../../../utils/profileLocalFilePath").isMiniProgramLocalFilePath;
module.exports = {
  isProfileAvatarLocalFilePath: a,
  uploadProfileAvatarToCloud: function (n) {
    return r(
      e().mark(function r() {
        var i, u, o;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if ((i = String(n || "").trim())) {
                  e.next = 3;
                  break;
                }
                return e.abrupt("return", "");
              case 3:
                if (!a(i)) {
                  e.next = 12;
                  break;
                }
                if (
                  "function" != typeof t ||
                  "undefined" == typeof wx ||
                  "function" != typeof wx.uploadFile
                ) {
                  e.next = 11;
                  break;
                }
                return (e.next = 7), t(i, "avatar");
              case 7:
                if (((u = e.sent), !(o = String((u && u.url) || "").trim()))) {
                  e.next = 11;
                  break;
                }
                return e.abrupt("return", o);
              case 11:
                throw new Error("PROFILE_AVATAR_UPLOAD_UNSUPPORTED");
              case 12:
                if (!/^https?:\/\//i.test(i)) {
                  e.next = 14;
                  break;
                }
                return e.abrupt("return", i);
              case 14:
                return e.abrupt("return", "");
              case 15:
              case "end":
                return e.stop();
            }
        }, r);
      })
    )();
  },
};
