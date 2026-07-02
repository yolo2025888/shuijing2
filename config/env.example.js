var e = "".concat("https://replace-with-your-domain.example.com", "/api"),
  a = "".concat("https://replace-with-your-domain.example.com", "/assets"),
  t = "https://api.dicebear.com/7.x/notionists/svg?seed=StoneLab",
  r = {
    transport: "cloudCallContainer",
    cloudEnvId: "replace_with_cloud_env_id",
    cloudRunService: "replace_with_cloud_run_service",
    cloudRunBasePath: "/api",
    assetCdnBaseUrl: a,
    profileAvatarUrl: t,
    profileAvatarFallback: "/assets/icons/avatar.svg",
    enableRemoteBootstrap: !0,
    enableRealLogin: !0,
    enableRealOrderFlow: !0,
    enableRemoteSchemeStorage: !0,
    enableRemoteCartStorage: !0,
    enableCreatorDashboardData: !1,
    allowHttpFallbackWhenContainerFail: !1,
  },
  l = {
    develop: Object.assign({}, r, {
      apiBaseUrl: e,
      allowHttpFallbackWhenContainerFail: !1,
    }),
    trial: Object.assign({}, r, { apiBaseUrl: e }),
    release: Object.assign({}, r, { apiBaseUrl: e }),
  };
module.exports = {
  getRuntimeEnvConfig: function () {
    var r = (function () {
      try {
        var e = wx.getAccountInfoSync ? wx.getAccountInfoSync() : null;
        return (e && e.miniProgram && e.miniProgram.envVersion) || "release";
      } catch (e) {
        return "release";
      }
    })();
    return Object.assign(
      {
        apiBaseUrl: e,
        transport: "http",
        cloudEnvId: "replace_with_cloud_env_id",
        cloudRunService: "replace_with_cloud_run_service",
        cloudRunBasePath: "/api",
        assetCdnBaseUrl: a,
        profileAvatarUrl: t,
        profileAvatarFallback: "/assets/icons/avatar.svg",
        enableRemoteBootstrap: !1,
        enableRealLogin: !1,
        enableRealOrderFlow: !1,
        enableRemoteSchemeStorage: !1,
        enableRemoteCartStorage: !1,
        enableCreatorDashboardData: !1,
        allowHttpFallbackWhenContainerFail: !1,
      },
      l[r] || l.release
    );
  },
};
