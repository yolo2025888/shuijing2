var e = require("../../services/systemRuntimeConfig"),
  t = e.getDefaultSystemRuntimeConfig,
  n = e.normalizeSystemRuntimeConfig,
  a = e.readCachedSystemRuntimeConfig,
  i =
    require("../../utils/navigation/navigate-with-fallback").navigateWithFallback;
Page({
  data: {
    title: "",
    message: "",
    expectedRecoverAt: "",
    contactText: "",
    checking: !1,
  },
  onLoad: function () {
    this.hydrateConfig();
  },
  onShow: function () {
    this.hydrateConfig();
  },
  hydrateConfig: function () {
    var e =
      (function () {
        try {
          var e = getApp();
          if (e && e.globalData && e.globalData.systemRuntimeConfig)
            return n(e.globalData.systemRuntimeConfig);
        } catch (e) {}
        return a() || t();
      })().maintenance || {};
    this.setData({
      title: e.title || "系统维护中",
      message: e.message || "我们正在升级服务，请稍后再试。",
      expectedRecoverAt: e.expectedRecoverAt || "",
      contactText: e.contactText || "",
    });
  },
  handleRetry: function () {
    var e = this;
    this.setData({ checking: !0 });
    var t = null;
    try {
      t = getApp();
    } catch (e) {
      t = null;
    }
    var n = function () {
      e.setData({ checking: !1 }), e.hydrateConfig();
    };
    t && "function" == typeof t.checkSystemRuntimeConfig
      ? t
          .checkSystemRuntimeConfig({ force: !0, source: "maintenance_retry" })
          .then(function (e) {
            e && e.maintenance && !0 === e.maintenance.enabled
              ? n()
              : i("/pages/index/index", { methods: ["reLaunch"] });
          })
          .catch(function () {
            i("/pages/index/index", { methods: ["reLaunch"] });
          })
      : (i("/pages/index/index", { methods: ["reLaunch"] }), n());
  },
});
