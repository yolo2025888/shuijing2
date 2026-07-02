var e = require("../@babel/runtime/helpers/typeof"),
  a = {
    apiBaseUrl: "/api",
    transport: "http",
    envVersion: "release",
    cloudEnvId: "",
    cloudRunService: "",
    cloudRunBasePath: "/api",
    cloudRunGatewayPath: "",
    cloudServicePath: "",
    assetCdnBaseUrl: "",
    profileAvatarUrl: "",
    profileAvatarFallback: "/assets/icons/avatar.svg",
    enableRemoteBootstrap: !1,
    enableRealLogin: !1,
    enableRealOrderFlow: !1,
    enableRemoteSchemeStorage: !1,
    enableRemoteCartStorage: !1,
    enableCreatorDashboardData: !1,
    enableStandaloneDiyPage: !0,
    enableStandaloneDiyPageHomeEntry: !0,
    enableStandaloneDiyPageBottomNavEntry: !0,
    enableStandaloneDiyPageProductApply: !0,
    enableStandaloneDiyPageProfileEntry: !0,
    enableStandaloneDiyPageShareEntry: !0,
    allowHttpFallbackWhenContainerFail: !1,
    strictRequestDomain: !1,
    disableNetworkTransportFallback: !1,
    layoutOverlayEnabled: !1,
    layoutOverlayOpacity: 38,
    layoutOverlayImageUrl: "",
  },
  t = "stonlab-1g57aqhi841eebf4",
  n = "https://"
    .concat(t, "-")
    .concat("1307595304", ".")
    .concat("ap-shanghai", ".app.tcloudbase.com/container-")
    .concat("nestjs", "/api"),
  r = "https://".concat(t, "-").concat("1307595304", ".tcloudbaseapp.com"),
  l = Object.assign({}, a, {
    apiBaseUrl: n,
    transport: "http",
    cloudEnvId: t,
    cloudRunService: "nestjs",
    cloudRunBasePath: "/api",
    assetCdnBaseUrl: r,
    enableRemoteBootstrap: !0,
    enableRealLogin: !0,
    enableRealOrderFlow: !0,
    enableRemoteSchemeStorage: !0,
    enableRemoteCartStorage: !0,
    enableStandaloneDiyPage: !0,
    enableStandaloneDiyPageHomeEntry: !0,
    enableStandaloneDiyPageBottomNavEntry: !0,
    enableStandaloneDiyPageProductApply: !0,
    enableStandaloneDiyPageProfileEntry: !0,
    enableStandaloneDiyPageShareEntry: !0,
    allowHttpFallbackWhenContainerFail: !1,
  }),
  o = {
    develop: Object.assign({}, a),
    trial: l,
    release: Object.assign({}, a),
  },
  i = [
    /(^|\.)tcloudbase\.com$/i,
    /(^|\.)tcloudbaseapp\.com$/i,
    /(^|\.)run\.tcloudbase\.com$/i,
  ],
  c = [
    ""
      .concat(t, "-")
      .concat("1307595304", ".")
      .concat("ap-shanghai", ".app.tcloudbase.com"),
    "".concat(t, "-").concat("1307595304", ".tcloudbaseapp.com"),
  ];
function d(e, a) {
  if ("boolean" == typeof e) return e;
  if (null == e || "" === e) return a;
  var t = String(e).trim().toLowerCase();
  return "1" === t || "true" === t || "yes" === t || "on" === t;
}
function s() {
  var t = (function () {
      try {
        var a = require("./runtime-env.generated"),
          t = a && a.RUNTIME_ENV_OVERRIDES;
        return t && "object" === e(t)
          ? { map: t, loaded: !0 }
          : { map: {}, loaded: !1 };
      } catch (e) {
        return { map: {}, loaded: !1 };
      }
    })(),
    n = t.map,
    r = {};
  return (
    ["develop", "trial", "release"].forEach(function (t) {
      var l = Object.assign(
        {},
        o[t],
        (function (t) {
          var n = t && "object" === e(t) ? t : {},
            r = {};
          if (
            (void 0 !== n.apiBaseUrl &&
              (r.apiBaseUrl = String(n.apiBaseUrl || "").trim()),
            void 0 !== n.transport &&
              (r.transport = String(n.transport || "").trim()),
            void 0 !== n.envVersion &&
              (r.envVersion = String(n.envVersion || "").trim()),
            void 0 !== n.cloudEnvId &&
              (r.cloudEnvId = String(n.cloudEnvId || "").trim()),
            void 0 !== n.cloudRunService &&
              (r.cloudRunService = String(n.cloudRunService || "").trim()),
            void 0 !== n.cloudRunBasePath &&
              (r.cloudRunBasePath = String(n.cloudRunBasePath || "").trim()),
            void 0 !== n.cloudRunGatewayPath &&
              (r.cloudRunGatewayPath = String(
                n.cloudRunGatewayPath || ""
              ).trim()),
            void 0 !== n.cloudServicePath &&
              (r.cloudServicePath = String(n.cloudServicePath || "").trim()),
            void 0 !== n.assetCdnBaseUrl &&
              (r.assetCdnBaseUrl = String(n.assetCdnBaseUrl || "").trim()),
            void 0 !== n.profileAvatarUrl &&
              (r.profileAvatarUrl = String(n.profileAvatarUrl || "").trim()),
            void 0 !== n.profileAvatarFallback &&
              (r.profileAvatarFallback = String(
                n.profileAvatarFallback || ""
              ).trim()),
            void 0 !== n.enableRemoteBootstrap &&
              (r.enableRemoteBootstrap = d(
                n.enableRemoteBootstrap,
                a.enableRemoteBootstrap
              )),
            void 0 !== n.enableRealLogin &&
              (r.enableRealLogin = d(n.enableRealLogin, a.enableRealLogin)),
            void 0 !== n.enableRealOrderFlow &&
              (r.enableRealOrderFlow = d(
                n.enableRealOrderFlow,
                a.enableRealOrderFlow
              )),
            void 0 !== n.enableRemoteSchemeStorage &&
              (r.enableRemoteSchemeStorage = d(
                n.enableRemoteSchemeStorage,
                a.enableRemoteSchemeStorage
              )),
            void 0 !== n.enableRemoteCartStorage &&
              (r.enableRemoteCartStorage = d(
                n.enableRemoteCartStorage,
                a.enableRemoteCartStorage
              )),
            void 0 !== n.enableCreatorDashboardData &&
              (r.enableCreatorDashboardData = d(
                n.enableCreatorDashboardData,
                a.enableCreatorDashboardData
              )),
            void 0 !== n.enableStandaloneDiyPage &&
              (r.enableStandaloneDiyPage = d(
                n.enableStandaloneDiyPage,
                a.enableStandaloneDiyPage
              )),
            void 0 !== n.enableStandaloneDiyPageHomeEntry &&
              (r.enableStandaloneDiyPageHomeEntry = d(
                n.enableStandaloneDiyPageHomeEntry,
                a.enableStandaloneDiyPageHomeEntry
              )),
            void 0 !== n.enableStandaloneDiyPageBottomNavEntry &&
              (r.enableStandaloneDiyPageBottomNavEntry = d(
                n.enableStandaloneDiyPageBottomNavEntry,
                a.enableStandaloneDiyPageBottomNavEntry
              )),
            void 0 !== n.enableStandaloneDiyPageProductApply &&
              (r.enableStandaloneDiyPageProductApply = d(
                n.enableStandaloneDiyPageProductApply,
                a.enableStandaloneDiyPageProductApply
              )),
            void 0 !== n.enableStandaloneDiyPageProfileEntry &&
              (r.enableStandaloneDiyPageProfileEntry = d(
                n.enableStandaloneDiyPageProfileEntry,
                a.enableStandaloneDiyPageProfileEntry
              )),
            void 0 !== n.enableStandaloneDiyPageShareEntry &&
              (r.enableStandaloneDiyPageShareEntry = d(
                n.enableStandaloneDiyPageShareEntry,
                a.enableStandaloneDiyPageShareEntry
              )),
            void 0 !== n.allowHttpFallbackWhenContainerFail &&
              (r.allowHttpFallbackWhenContainerFail = d(
                n.allowHttpFallbackWhenContainerFail,
                a.allowHttpFallbackWhenContainerFail
              )),
            void 0 !== n.strictRequestDomain &&
              (r.strictRequestDomain = d(
                n.strictRequestDomain,
                a.strictRequestDomain
              )),
            void 0 !== n.disableNetworkTransportFallback &&
              (r.disableNetworkTransportFallback = d(
                n.disableNetworkTransportFallback,
                a.disableNetworkTransportFallback
              )),
            void 0 !== n.layoutOverlayEnabled &&
              (r.layoutOverlayEnabled = d(
                n.layoutOverlayEnabled,
                a.layoutOverlayEnabled
              )),
            void 0 !== n.layoutOverlayOpacity)
          ) {
            var l = Number(n.layoutOverlayOpacity);
            r.layoutOverlayOpacity = Number.isFinite(l)
              ? Math.max(0, Math.min(100, Math.round(l)))
              : a.layoutOverlayOpacity;
          }
          return (
            void 0 !== n.layoutOverlayImageUrl &&
              (r.layoutOverlayImageUrl = String(
                n.layoutOverlayImageUrl || ""
              ).trim()),
            r
          );
        })(n[t])
      );
      r[t] = (function (e, a) {
        var t = Object.assign({}, a || {}),
          n = String(t.transport || "").trim();
        return (
          (t.transport =
            "cloudCallContainer" === n ? "cloudCallContainer" : "http"),
          (t.apiBaseUrl = String(t.apiBaseUrl || "/api").trim() || "/api"),
          (t.cloudRunBasePath =
            String(t.cloudRunBasePath || "/api").trim() || "/api"),
          (t.cloudRunGatewayPath = String(t.cloudRunGatewayPath || "").trim()),
          (t.cloudServicePath = String(t.cloudServicePath || "").trim()),
          "release" === String(e || "").trim() &&
            ((t.transport = "http"),
            (t.allowHttpFallbackWhenContainerFail = !1)),
          t
        );
      })(t, l);
    }),
    { envMap: r, loaded: t.loaded }
  );
}
function u(e) {
  var a = String(e || "").trim();
  if (!a || !/^https?:\/\//i.test(a)) return "";
  try {
    var t = new URL(a);
    return String(t.hostname || "")
      .trim()
      .toLowerCase();
  } catch (e) {
    return "";
  }
}
function b(e) {
  var a = u(e);
  if (!a) return !1;
  if (c.indexOf(a) >= 0) return !1;
  for (var t = 0; t < i.length; t += 1) if (i[t].test(a)) return !0;
  return !1;
}
module.exports = {
  getDefaultRuntimeEnv: function () {
    return Object.assign({}, a);
  },
  getRuntimeEnvConfig: function () {
    var e,
      t,
      n = (function () {
        try {
          var e = wx.getAccountInfoSync ? wx.getAccountInfoSync() : null;
          return (e && e.miniProgram && e.miniProgram.envVersion) || "release";
        } catch (e) {
          return "release";
        }
      })(),
      r = s(),
      l = r.envMap,
      o = Object.assign({}, a, l[n] || l.release);
    if (
      ((o.envVersion = n),
      "trial" === n &&
        ((o.strictRequestDomain = !0),
        (o.disableNetworkTransportFallback = !0),
        (o.allowHttpFallbackWhenContainerFail = !1),
        (e = o.apiBaseUrl),
        (t = u(e)) &&
          (/(^|\.)sh\.run\.tcloudbase\.com$/i.test(t) ||
            /(^|\.)run\.tcloudbase\.com$/i.test(t)) &&
          ((o.transport = "cloudCallContainer"),
          (o.cloudRunService =
            String(o.cloudRunService || "").trim() ||
            (function (e) {
              var a = u(e);
              if (!a) return "";
              for (
                var t = [".sh.run.tcloudbase.com", ".run.tcloudbase.com"],
                  n = 0;
                n < t.length;
                n += 1
              ) {
                var r = t[n];
                if (a.endsWith(r))
                  return a
                    .slice(0, a.length - r.length)
                    .replace(/-\d+-\d+$/, "")
                    .replace(/-\d+$/, "")
                    .trim();
              }
              return "";
            })(o.apiBaseUrl)))),
      "release" === n)
    ) {
      if (
        ((o.strictRequestDomain = !0),
        (o.disableNetworkTransportFallback = !0),
        !r.loaded)
      )
        throw new Error("RUNTIME_ENV_RELEASE_CONFIG_MISSING");
      var i = [
          o.enableRealLogin ? "" : "enableRealLogin",
          o.enableRealOrderFlow ? "" : "enableRealOrderFlow",
          o.enableRemoteSchemeStorage ? "" : "enableRemoteSchemeStorage",
          o.enableRemoteCartStorage ? "" : "enableRemoteCartStorage",
        ].filter(Boolean),
        c = Boolean(
          String(o.apiBaseUrl || "").trim() ||
            String(o.cloudRunService || "").trim()
        );
      if (i.length || !c)
        throw new Error(
          "RUNTIME_ENV_RELEASE_CONFIG_INVALID:"
            .concat(i.join(","))
            .concat(c ? "" : ":missing_endpoint")
        );
      if (b(o.apiBaseUrl) || b(o.assetCdnBaseUrl))
        throw new Error("RUNTIME_ENV_RELEASE_FORBIDDEN_CLOUDBASE_DOMAIN");
    }
    return o;
  },
};
