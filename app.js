var e = require("@babel/runtime/helpers/regeneratorRuntime"),
  t = require("@babel/runtime/helpers/asyncToGenerator"),
  n = require("@babel/runtime/helpers/typeof"),
  a = require("./config/env"),
  r = a.getDefaultRuntimeEnv,
  i = a.getRuntimeEnvConfig,
  o = require("./utils/logger"),
  u = require("./constants/storageKeys").PENDING_DISTRIBUTOR_INVITE_KEY,
  s = require("./utils/navigation/navigate-with-fallback").navigateWithFallback,
  l = require("./services/systemRuntimeConfig"),
  c = l.fetchSystemRuntimeConfig,
  g = l.getDefaultSystemRuntimeConfig,
  d = l.normalizeSystemRuntimeConfig,
  f = l.readCachedSystemRuntimeConfig;
function m(e) {
  var t = String(e || "").trim();
  return t && /^[0-9A-Za-z_-]{1,96}$/.test(t) ? t : "";
}
function h(e) {
  var t = String(e || "").trim();
  if (!t) return "";
  var n = t;
  try {
    n = decodeURIComponent(t);
  } catch (e) {
    n = t;
  }
  if (!n) return "";
  if (/^(wl|wp)=/i.test(n)) return "";
  if (/^[0-9A-Za-z_-]{1,96}$/.test(n)) return n;
  for (var a = n.split("&"), r = {}, i = 0; i < a.length; i += 1) {
    var o = String(a[i] || "").trim();
    if (o) {
      var u = o.indexOf("=");
      if (!(u < 0)) {
        var s = o.slice(0, u).trim(),
          l = o.slice(u + 1).trim();
        s && (r[s] = l);
      }
    }
  }
  return r.wl || r.wp ? "" : m(r.inviteToken || r.invite_token || r.scene);
}
function p(e) {
  if (!e) return "UNKNOWN_STARTUP_ERROR";
  if ("string" == typeof e) return e;
  if (e instanceof Error) return e.message || "UNKNOWN_STARTUP_ERROR";
  if (e && "object" === n(e)) {
    if (e.errMsg) return String(e.errMsg);
    if (e.message) return String(e.message);
    try {
      return JSON.stringify(e);
    } catch (t) {
      return String(e);
    }
  }
  return String(e);
}
function v() {
  try {
    if ("function" != typeof getCurrentPages) return "";
    var e = getCurrentPages();
    if (!Array.isArray(e) || !e.length) return "";
    var t = e[e.length - 1] || {};
    return String(t.route || t.__route__ || "").replace(/^\/+/, "");
  } catch (e) {
    return "";
  }
}
App({
  onLaunch: function (e) {
    var t = null;
    try {
      t = i();
    } catch (e) {
      var n = p(e);
      o.error("[app:onLaunch] resolve runtime env failed", n),
        (t = r()),
        (this.globalData.launchError = n);
    }
    if (
      ((this.globalData.runtimeEnv = t),
      (this.globalData.cloudEnvId = t.cloudEnvId || ""),
      this.captureLaunchOptions(e),
      this.captureInviteToken(e),
      this.initUpdateManager(),
      wx.cloud)
    )
      try {
        wx.cloud.init({ env: t.cloudEnvId, traceUser: !0 });
      } catch (e) {
        var a = p(e);
        o.error("[app:onLaunch] wx.cloud.init failed", a),
          (this.globalData.launchError = a);
      }
    else o.error("Current base library does not support wx.cloud.");
    this.scheduleRuntimeDiagnostics(t),
      this.primeSystemRuntimeConfigFromCache(),
      this.scheduleSystemRuntimeConfigCheck({
        source: "launch_deferred",
        force: !0,
        delayMs: 1e3,
      });
  },
  onShow: function (e) {
    this.captureLaunchOptions(e),
      this.captureInviteToken(e),
      !0 !== this.globalData.systemRuntimeConfigLaunchDeferred
        ? this.checkSystemRuntimeConfig({ source: "show" })
        : this.scheduleSystemRuntimeConfigCheck({
            source: "show_deferred",
            force: !0,
            delayMs: 1e3,
          });
  },
  captureLaunchOptions: function (e) {
    var t = e && "object" === n(e) ? e : {},
      a = t.query && "object" === n(t.query) ? t.query : {};
    (this.globalData.launchScene = String(a.scene || t.scene || "").trim()),
      (this.globalData.launchPath = String(t.path || "").trim()),
      (this.globalData.launchQuery = a),
      (this.globalData.launchOptionsCapturedAt = Date.now());
  },
  captureInviteToken: function (e) {
    var t = (function (e) {
      var t = e && "object" === n(e) ? e : {},
        a = t.query && "object" === n(t.query) ? t.query : {},
        r = m(a.inviteToken || a.invite_token || a.token);
      if (r) return r;
      var i = h(a.scene);
      if (i) return i;
      var o = t.scene,
        u = String(o || "").trim();
      if ("number" == typeof o || (/^\d{3,5}$/.test(u) && !i)) return "";
      var s = h(t.scene);
      if (s) return s;
      var l =
          t.referrerInfo && "object" === n(t.referrerInfo)
            ? t.referrerInfo
            : {},
        c = l.extraData && "object" === n(l.extraData) ? l.extraData : {};
      return m(c.inviteToken || c.invite_token || c.token);
    })(e);
    t &&
      m(this.globalData.pendingInviteToken) !== t &&
      ((this.globalData.pendingInviteToken = t),
      (this.globalData.inviteTokenCapturedAt = Date.now()),
      (function (e, t) {
        var n = m(e);
        if (
          n &&
          "undefined" != typeof wx &&
          "function" == typeof wx.setStorageSync
        )
          try {
            wx.setStorageSync(u, {
              inviteToken: n,
              capturedAt: Date.now(),
              expiresAt: Date.now() + 864e5,
              source: String(t || "launch").trim() || "launch",
            });
          } catch (e) {
            o.warn("[invite-token] persist failed", e);
          }
      })(t, String((e && (e.scene || e.path)) || "launch")),
      o.info("[invite-token] captured from launch options", {
        tokenPreview: "".concat(t.slice(0, 6), "***"),
      }));
  },
  logRuntimeNetworkMode: function (e) {
    try {
      var t = (e && e.envVersion) || "unknown";
      o.info("[runtime-env]", {
        envVersion: t,
        transport: e.transport,
        cloudEnvId: e.cloudEnvId,
        cloudRunService: e.cloudRunService,
        cloudRunBasePath: e.cloudRunBasePath,
      });
    } catch (e) {
      o.info("[runtime-env] unavailable", e);
    }
  },
  tryProbeCloudRunHealth: function (e) {
    var t = (e && e.envVersion) || "";
    if (
      ("develop" === t || "trial" === t) &&
      e &&
      "cloudCallContainer" === e.transport &&
      wx.cloud &&
      wx.cloud.callContainer &&
      e.cloudRunService
    ) {
      var n = function (t, n) {
        wx.cloud.callContainer({
          config: e.cloudEnvId ? { env: e.cloudEnvId } : void 0,
          path: t,
          method: "GET",
          header: {
            "X-WX-SERVICE": e.cloudRunService,
            "x-wx-service": e.cloudRunService,
          },
          success: function (e) {
            n(null, e);
          },
          fail: function (e) {
            n(e, null);
          },
        });
      };
      n("/healthz", function (e, t) {
        var a = t && t.statusCode >= 200 && t.statusCode < 300;
        e || !a
          ? n("/api/healthz", function (n, a) {
              o.info("[cloudrun-health]", {
                ok: !!(a && a.statusCode >= 200 && a.statusCode < 300),
                statusCode: a && a.statusCode,
                path: "/api/healthz",
                firstProbeError: e || null,
                firstProbeStatusCode: t && t.statusCode,
                data: a && a.data,
                error: n || null,
              });
            })
          : o.info("[cloudrun-health]", {
              ok: !0,
              statusCode: t.statusCode,
              path: "/healthz",
              data: t.data,
            });
      });
    }
  },
  scheduleRuntimeDiagnostics: function (e) {
    var t = this;
    this.globalData.runtimeDiagnosticsTimer ||
      (this.globalData.runtimeDiagnosticsTimer = setTimeout(function () {
        t.globalData.runtimeDiagnosticsTimer = null;
        try {
          t.logRuntimeNetworkMode(e), t.tryProbeCloudRunHealth(e);
        } catch (e) {
          var n = p(e);
          o.error("[app:onLaunch] deferred diagnostics failed", n),
            (t.globalData.launchError = n);
        }
      }, 1200));
  },
  initUpdateManager: function () {
    var e = this;
    if ("undefined" != typeof wx && "function" == typeof wx.getUpdateManager)
      try {
        var t = wx.getUpdateManager();
        t.onCheckForUpdate(function (t) {
          e.globalData.updateAvailable = !(!t || !t.hasUpdate);
        }),
          t.onUpdateReady(function () {
            (e.globalData.updateReady = !0),
              wx.showModal({
                title: "发现新版本",
                content: "新版本已准备好，重启后即可使用。",
                confirmText: "立即重启",
                cancelText: "稍后",
                success: function (e) {
                  e && e.confirm && t.applyUpdate();
                },
              });
          }),
          t.onUpdateFailed(function () {
            (e.globalData.updateFailed = !0),
              wx.showModal({
                title: "更新失败",
                content: "新版本下载失败，请稍后重新打开小程序。",
                showCancel: !1,
                confirmText: "知道了",
              });
          });
      } catch (e) {
        o.warn("[app:update-manager] init failed", p(e));
      }
  },
  primeSystemRuntimeConfigFromCache: function () {
    var e = f(),
      t = d(e || g());
    return (
      (this.globalData.systemRuntimeConfig = t),
      (this.globalData.systemRuntimeConfigSource = e ? "cache" : "default"),
      (this.globalData.systemRuntimeConfigError = ""),
      t
    );
  },
  scheduleSystemRuntimeConfigCheck: function (e) {
    var t = this,
      a = e && "object" === n(e) ? e : {},
      r = Math.max(0, Number(a.delayMs || 0));
    this.globalData.systemRuntimeConfigTimer ||
      ((this.globalData.systemRuntimeConfigLaunchDeferred = !0),
      (this.globalData.systemRuntimeConfigTimer = setTimeout(function () {
        (t.globalData.systemRuntimeConfigTimer = null),
          Promise.resolve(
            t.checkSystemRuntimeConfig({
              source: a.source || "deferred",
              force: !0 === a.force,
            })
          ).finally(function () {
            t.globalData.systemRuntimeConfigLaunchDeferred = !1;
          });
      }, r)));
  },
  checkSystemRuntimeConfig: function (a) {
    var i = this;
    return t(
      e().mark(function t() {
        var o, u, l, f, m, h, y;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((o = a && "object" === n(a) ? a : {}),
                    (u = Date.now()),
                    !(
                      !o.force &&
                      i.globalData.systemRuntimeConfigCheckedAt > 0 &&
                      u - i.globalData.systemRuntimeConfigCheckedAt < 6e4
                    ))
                  ) {
                    e.next = 4;
                    break;
                  }
                  return e.abrupt(
                    "return",
                    d(i.globalData.systemRuntimeConfig || g())
                  );
                case 4:
                  if (!i.globalData.systemRuntimeConfigChecking) {
                    e.next = 6;
                    break;
                  }
                  return e.abrupt(
                    "return",
                    d(i.globalData.systemRuntimeConfig || g())
                  );
                case 6:
                  return (
                    (i.globalData.systemRuntimeConfigChecking = !0),
                    (e.prev = 7),
                    (l = i.globalData.runtimeEnv || r()),
                    (e.next = 11),
                    c(l)
                  );
                case 11:
                  return (
                    (f = e.sent),
                    (m = d(f && f.config)),
                    (i.globalData.systemRuntimeConfig = m),
                    (i.globalData.systemRuntimeConfigSource = String(
                      (f && f.source) || ""
                    )),
                    (i.globalData.systemRuntimeConfigError = String(
                      (f && f.errorMessage) || ""
                    )),
                    (i.globalData.systemRuntimeConfigCheckedAt = Date.now()),
                    (h = v()),
                    m.maintenance && !0 === m.maintenance.enabled
                      ? "pages/maintenance/index" !== h &&
                        s("/pages/maintenance/index", { methods: ["reLaunch"] })
                      : "pages/maintenance/index" === h &&
                        s("/pages/index/index", { methods: ["reLaunch"] }),
                    e.abrupt("return", m)
                  );
                case 22:
                  return (
                    (e.prev = 22),
                    (e.t0 = e.catch(7)),
                    (y = g()),
                    (i.globalData.systemRuntimeConfig = y),
                    (i.globalData.systemRuntimeConfigSource = "fallback"),
                    (i.globalData.systemRuntimeConfigError = p(e.t0)),
                    (i.globalData.systemRuntimeConfigCheckedAt = Date.now()),
                    e.abrupt("return", y)
                  );
                case 30:
                  return (
                    (e.prev = 30),
                    (i.globalData.systemRuntimeConfigChecking = !1),
                    e.finish(30)
                  );
                case 33:
                case "end":
                  return e.stop();
              }
          },
          t,
          null,
          [[7, 22, 30, 33]]
        );
      })
    )();
  },
  onError: function (e) {
    this.recordRuntimeError(e, "onError");
  },
  onUnhandledRejection: function (e) {
    var t = e && "object" === n(e) && void 0 !== e.reason ? e.reason : e;
    this.recordRuntimeError(t, "onUnhandledRejection");
  },
  recordRuntimeError: function (e, t) {
    var a = (function (e, t) {
      var a = "app_"
          .concat(Date.now(), "_")
          .concat(Math.random().toString(36).slice(2, 8)),
        r = e && "object" === n(e) ? e : {},
        i = p(e);
      return {
        eventId: a,
        source: String(t || "runtime"),
        message: String(i || "UNKNOWN_RUNTIME_ERROR").slice(0, 500),
        stack: String(r.stack || "").slice(0, 1200),
        route: v(),
        at: Date.now(),
      };
    })(e, t);
    return (
      (this.globalData.lastRuntimeError = a),
      o.error("[app:runtime-error]", a),
      a
    );
  },
  onPageNotFound: function (e) {
    var t = e && e.path ? String(e.path).trim() : "",
      n = t && t.startsWith("pages/") ? "/".concat(t) : "/pages/index/index";
    o.error("[app:onPageNotFound]", {
      rawPath: t,
      query: (e && e.query) || null,
      isEntryPage: !(!e || !e.isEntryPage),
      safePath: n,
    }),
      "undefined" != typeof wx &&
        s(n, {
          methods: ["reLaunch"],
          onFailed: function () {
            s("/pages/index/index", { methods: ["reLaunch"] });
          },
        });
  },
  globalData: {
    runtimeEnv: null,
    cloudEnvId: "",
    launchError: "",
    pendingInviteToken: "",
    boundInviteToken: "",
    inviteTokenCapturedAt: 0,
    inviteTokenConsumedAt: 0,
    pendingDiyCatalogSnapshot: null,
    pendingDiyCatalogSnapshotAt: 0,
    latestDiyCatalogSnapshot: null,
    latestDiyCatalogSnapshotAt: 0,
    pendingDiyBlindBoxSessionSeed: "",
    pendingDiyBlindBoxSessionSeedAt: 0,
    latestDiyBlindBoxSessionSeed: "",
    latestDiyBlindBoxSessionSeedAt: 0,
    diySizeGuidePopupShownInSession: !1,
    lastDiyLoadingPerf: null,
    lastDiyLoadingPerfEvents: [],
    lastDiyPerfEvents: [],
    lastDiyPerfEvent: null,
    lastDiyPerfEventsUpdatedAt: 0,
    systemRuntimeConfig: null,
    systemRuntimeConfigSource: "",
    systemRuntimeConfigError: "",
    systemRuntimeConfigCheckedAt: 0,
    systemRuntimeConfigChecking: !1,
    systemRuntimeConfigLaunchDeferred: !1,
    systemRuntimeConfigTimer: null,
    runtimeDiagnosticsTimer: null,
    updateAvailable: !1,
    updateReady: !1,
    updateFailed: !1,
    lastRuntimeError: null,
  },
});
