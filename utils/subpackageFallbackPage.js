var nav = require("./navigation/navigate-with-fallback").navigateWithFallback;

function goProfile() {
  return nav("/pages/index/index?activeTab=profile&source=subpackage_fallback", {
    methods: ["redirectTo", "reLaunch"],
  });
}

module.exports = function createSubpackageFallbackPage(config) {
  var pageConfig = config || {};
  Page({
    data: {
      title: pageConfig.title || "Page unavailable",
      message:
        pageConfig.message ||
        "This page is not included in the current extracted package.",
      detail: pageConfig.detail || "",
      primaryText: pageConfig.primaryText || "Back to profile",
    },
    onLoad: function () {
      if (pageConfig.detail) return;
      try {
        this.setData({
          detail: String((this.route || this.__route__ || "")).replace(
            /^\/+/,
            ""
          ),
        });
      } catch (e) {}
    },
    onPullDownRefresh: function () {
      "undefined" != typeof wx &&
        "function" == typeof wx.stopPullDownRefresh &&
        wx.stopPullDownRefresh();
    },
    handleBack: function () {
      goProfile();
    },
    handleHome: function () {
      nav("/pages/index/index", { methods: ["redirectTo", "reLaunch"] });
    },
  });
};
