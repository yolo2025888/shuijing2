var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../@babel/runtime/helpers/typeof"),
  r = Object.freeze({
    maintenance: Object.freeze({
      enabled: !1,
      title: "系统维护中",
      message: "我们正在升级服务，请稍后再试。",
      expectedRecoverAt: "",
      contactText: "",
    }),
    updatedAt: "",
  });
function c() {
  return JSON.parse(JSON.stringify(r));
}
function a(e) {
  return !(!e || "object" !== n(e) || Array.isArray(e));
}
function i(e) {
  var t = String(e || "").trim();
  return t ? (t.startsWith("/") ? t : "/".concat(t)) : "/";
}
function o(e, t, n) {
  var r = String(e || "").trim();
  return r ? r.slice(0, n) : t;
}
function u(e, t) {
  return String(e || "")
    .trim()
    .slice(0, t);
}
function s(e, t) {
  if (!0 === e || !1 === e) return e;
  var n = String(e || "")
    .trim()
    .toLowerCase();
  if ("1" === n || "true" === n || "yes" === n || "on" === n) return !0;
  if ("0" === n || "false" === n || "no" === n || "off" === n) return !1;
  var r = Number(e);
  return Number.isFinite(r) ? 1 === r : t;
}
function f(e) {
  var t = a(e) && a(e.config) ? e.config : e,
    n = a(t) ? t : {},
    c = a(n.maintenance) ? n.maintenance : {},
    i = r.maintenance;
  return {
    maintenance: {
      enabled: s(c.enabled, i.enabled),
      title: o(c.title, i.title, 40),
      message: o(c.message, i.message, 200),
      expectedRecoverAt: u(c.expectedRecoverAt, 64),
      contactText: u(c.contactText, 64),
    },
    updatedAt: u(n.updatedAt, 64),
  };
}
function m(e, t) {
  try {
    wx.setStorageSync("stonelab_system_runtime_config_v1", {
      code: "system_runtime_config_v1",
      source: String(t || ""),
      cachedAt: Date.now(),
      config: f(e),
    });
  } catch (e) {}
}
function l(e) {
  var t = (function (e, t) {
    var n = String((e && e.apiBaseUrl) || "").trim();
    return /^https?:\/\//i.test(n)
      ? "".concat(n.replace(/\/+$/, "")).concat(i(t))
      : "";
  })(e, "/system/runtime-config");
  return t
    ? new Promise(function (e, n) {
        wx.request({
          url: t,
          method: "GET",
          timeout: 6e3,
          header: { "content-type": "application/json" },
          success: function (t) {
            t && t.statusCode >= 200 && t.statusCode < 300
              ? e(t.data)
              : n(
                  new Error(
                    "SYSTEM_RUNTIME_CONFIG_HTTP_STATUS:".concat(
                      t && t.statusCode
                    )
                  )
                );
          },
          fail: function (e) {
            n(e);
          },
        });
      })
    : Promise.reject(new Error("SYSTEM_RUNTIME_CONFIG_HTTP_URL_UNAVAILABLE"));
}
function d(e) {
  if (!wx.cloud || !wx.cloud.callContainer)
    return Promise.reject(
      new Error("SYSTEM_RUNTIME_CONFIG_CONTAINER_UNAVAILABLE")
    );
  var t = i((e && e.cloudRunBasePath) || "/api"),
    n = String((e && e.cloudRunService) || "").trim(),
    r = { "content-type": "application/json" };
  return (
    n && ((r["X-WX-SERVICE"] = n), (r["x-wx-service"] = n)),
    new Promise(function (n, c) {
      var a, o, u, s;
      wx.cloud.callContainer({
        config: e && e.cloudEnvId ? { env: e.cloudEnvId } : void 0,
        path:
          ((a = t),
          (o = "/system/runtime-config"),
          (u = i(a || "/")),
          (s = i(o || "/")),
          "/" === u ? s : "".concat(u.replace(/\/+$/, "")).concat(s)),
        method: "GET",
        header: r,
        success: function (e) {
          e && e.statusCode >= 200 && e.statusCode < 300
            ? n(e.data)
            : c(
                new Error(
                  "SYSTEM_RUNTIME_CONFIG_CONTAINER_STATUS:".concat(
                    e && e.statusCode
                  )
                )
              );
        },
        fail: function (e) {
          c(e);
        },
      });
    })
  );
}
function g() {
  return (g = t(
    e().mark(function t(r) {
      var a, i, o, u;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((a = r && "object" === n(r) ? r : {}),
                  (i = c()),
                  (e.prev = 2),
                  "cloudCallContainer" !== String(a.transport || ""))
                ) {
                  e.next = 17;
                  break;
                }
                return (e.prev = 4), (e.next = 7), d(a);
              case 7:
                (o = e.sent), (e.next = 15);
                break;
              case 10:
                return (e.prev = 10), (e.t0 = e.catch(4)), (e.next = 14), l(a);
              case 14:
                o = e.sent;
              case 15:
                e.next = 20;
                break;
              case 17:
                return (e.next = 19), l(a);
              case 19:
                o = e.sent;
              case 20:
                return (
                  m((u = f(o)), "remote"),
                  e.abrupt("return", {
                    code: "system_runtime_config_v1",
                    config: u,
                    source: "remote",
                  })
                );
              case 25:
                return (
                  (e.prev = 25),
                  (e.t1 = e.catch(2)),
                  e.abrupt("return", {
                    code: "system_runtime_config_v1",
                    config: i,
                    source: "fallback",
                    errorMessage: String(
                      (e.t1 && (e.t1.errMsg || e.t1.message)) || e.t1 || ""
                    ),
                  })
                );
              case 28:
              case "end":
                return e.stop();
            }
        },
        t,
        null,
        [
          [2, 25],
          [4, 10],
        ]
      );
    })
  )).apply(this, arguments);
}
module.exports = {
  fetchSystemRuntimeConfig: function (e) {
    return g.apply(this, arguments);
  },
  getDefaultSystemRuntimeConfig: c,
  isMaintenanceEnabled: function (e) {
    return !0 === f(e).maintenance.enabled;
  },
  normalizeSystemRuntimeConfig: f,
  readCachedSystemRuntimeConfig: function () {
    try {
      var e = wx.getStorageSync("stonelab_system_runtime_config_v1");
      return e && "object" === n(e) ? f(e.config || e) : null;
    } catch (e) {
      return null;
    }
  },
  writeCachedSystemRuntimeConfig: m,
};
