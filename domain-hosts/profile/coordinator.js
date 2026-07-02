var t = require("../../@babel/runtime/helpers/typeof"),
  r = require("../../pages/index/modules/deps/profile-deps"),
  e = r.buildOrderItems,
  o = r.normalizePattern,
  a =
    require("../../pages/index/modules/methods/profile-coordinator/profile-coordinator-logout-payload").buildLogoutResetPayload;
function i(r) {
  return r && "object" === t(r) ? r : {};
}
function n(t) {
  var r = Number(t || 0);
  return !Number.isFinite(r) || r <= 0 ? 0 : Math.round(r);
}
module.exports = {
  createCoordinatorMethods: function () {
    return Object.freeze({
      profileCoordinatorOpenAuthPrompt: function (t) {
        var r = i(t);
        this.setData({
          showProfileAuthPrompt: !0,
          profileAuthNickname: String(r.nickname || ""),
          profileAuthAvatarUrl: String(r.avatarUrl || ""),
          profileAuthSubmitting: !1,
        });
      },
      profileCoordinatorCloseAuthPrompt: function (t) {
        var r = { showProfileAuthPrompt: !1, profileAuthSubmitting: !1 };
        !0 === i(t).resetDraft &&
          ((r.profileAuthNickname = ""), (r.profileAuthAvatarUrl = "")),
          this.setData(r);
      },
      profileCoordinatorSetAuthSubmitting: function (t) {
        this.setData({ profileAuthSubmitting: !0 === t });
      },
      profileCoordinatorUpdateAuthDraft: function (t) {
        var r = i(t),
          e = {};
        Object.prototype.hasOwnProperty.call(r, "nickname") &&
          (e.profileAuthNickname = String(r.nickname || "")),
          Object.prototype.hasOwnProperty.call(r, "avatarUrl") &&
            (e.profileAuthAvatarUrl = String(r.avatarUrl || "")),
          Object.keys(e).length && this.setData(e);
      },
      profileCoordinatorApplyUserProfile: function (t) {
        var r = i(t),
          e = String(r.nickname || "").trim() || "微信用户",
          o = (function (t, r) {
            var e = String(r || "").trim(),
              o = String(t || "").trim();
            return o
              ? "null" === o ||
                "undefined" === o ||
                -1 !== o.indexOf("user-muted.svg")
                ? e
                : o
              : e;
          })(r.avatarUrl, this.data.profileAvatarFallback),
          a =
            Object.prototype.hasOwnProperty.call(r, "userId") ||
            Object.prototype.hasOwnProperty.call(r, "id"),
          l = n(this.data && this.data.profileUserId),
          s = a ? n(r.userId || r.id) : l;
        this.setData({
          profileNickname: e,
          profileAvatarUrl: o,
          profileUserId: s,
        });
      },
      profileCoordinatorSyncSharePatternFromSchemes: function (t) {
        var r = Array.isArray(t) ? t : [];
        if (r.length) {
          var e = i(r[0]),
            a =
              "function" == typeof o
                ? o(e.pattern)
                : Array.isArray(e.pattern)
                ? e.pattern
                : [];
          this.setData({ profileSharePattern: a });
        }
      },
      profileCoordinatorSetSharePattern: function (t) {
        var r = "function" == typeof o ? o(t) : Array.isArray(t) ? t : [];
        this.setData({ profileSharePattern: r });
      },
      profileCoordinatorSetShareModalVisible: function (t) {
        this.setData({ showProfileShareModal: !0 === t });
      },
      profileCoordinatorApplyDashboardState: function (t) {
        var r = i(t),
          o = {};
        if (
          (Object.prototype.hasOwnProperty.call(r, "selectedAddress") &&
            (o.selectedAddress = r.selectedAddress || null),
          Object.prototype.hasOwnProperty.call(r, "addressList") &&
            (o.addressList = Array.isArray(r.addressList) ? r.addressList : []),
          Object.prototype.hasOwnProperty.call(r, "orderSummary"))
        ) {
          var a = i(r.orderSummary);
          (o.orderSummary = a), (o.orderItems = e(a));
        }
        Object.prototype.hasOwnProperty.call(r, "creatorDashboardAvailable") &&
          (o.creatorDashboardAvailable = !0 === r.creatorDashboardAvailable),
          Object.prototype.hasOwnProperty.call(r, "profileDashboardLoading") &&
            (o.profileDashboardLoading = !0 === r.profileDashboardLoading),
          Object.prototype.hasOwnProperty.call(r, "creatorStats") &&
            (o.creatorStats = i(r.creatorStats)),
          Object.prototype.hasOwnProperty.call(r, "userRole") &&
            (o.userRole = String(r.userRole || "normal").trim() || "normal"),
          Object.prototype.hasOwnProperty.call(r, "creatorIdentityStatus") &&
            (o.creatorIdentityStatus =
              String(r.creatorIdentityStatus || "normal").trim() || "normal"),
          Object.prototype.hasOwnProperty.call(r, "creatorApplicationInfo") &&
            (o.creatorApplicationInfo = r.creatorApplicationInfo || null),
          Object.prototype.hasOwnProperty.call(r, "creatorPanelSummary") &&
            (o.creatorPanelSummary = r.creatorPanelSummary || null),
          Object.prototype.hasOwnProperty.call(
            r,
            "distributorIdentityStatus"
          ) &&
            (o.distributorIdentityStatus =
              String(r.distributorIdentityStatus || "normal").trim() ||
              "normal"),
          Object.prototype.hasOwnProperty.call(
            r,
            "distributorApplicationInfo"
          ) &&
            (o.distributorApplicationInfo =
              r.distributorApplicationInfo || null),
          Object.prototype.hasOwnProperty.call(r, "distributorPanelSummary") &&
            (o.distributorPanelSummary = r.distributorPanelSummary || null),
          Object.keys(o).length && this.setData(o);
      },
      profileCoordinatorBuildLogoutResetPayload: function () {
        return a(e);
      },
      profileCoordinatorApplyLogoutResetPayload: function (t) {
        var r = Object.assign(
          {},
          this.profileCoordinatorBuildLogoutResetPayload(),
          i(t)
        );
        this.setData(r);
      },
    });
  },
};
