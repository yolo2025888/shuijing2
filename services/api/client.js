var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../@babel/runtime/helpers/Arrayincludes");
var r = require("../../@babel/runtime/helpers/typeof"),
  n = require("../../constants/storageKeys"),
  a = n.AUTH_TOKEN_KEY,
  o = n.AUTH_SESSION_KEY,
  i = n.PENDING_DISTRIBUTOR_INVITE_KEY,
  u = require("./apiConfig"),
  c = u.API_BASE_URL,
  s = u.DEFAULT_TIMEOUT,
  f = u.RUNTIME_ENV,
  l = require("./error"),
  d = l.createApiRequestError,
  p = l.createTransportError,
  h = require("./requestGuards").guardRequestPayload,
  b = require("../../utils/logger"),
  v = "WECHAT_LOGIN_RETRY_WITH_FRESH_CODE",
  g = Object.freeze([
    { prefix: "/catalog/presets/", ttlMs: 45e3 },
    { prefix: "/creator/public/feed", ttlMs: 45e3 },
    { prefix: "/creator/public/", ttlMs: 45e3 },
    { prefix: "/catalog/bootstrap", ttlMs: 45e3 },
    { prefix: "/catalog/bootstrap-lite", ttlMs: 45e3 },
    { prefix: "/catalog/diy/bootstrap", ttlMs: 45e3 },
    { prefix: "/catalog/diy/materials-bundle", ttlMs: 6e4 },
    { prefix: "/catalog/diy/materials", ttlMs: 12e4 },
  ]),
  m = Object.freeze([
    "/catalog/bootstrap",
    "/catalog/bootstrap-lite",
    "/catalog/diy/bootstrap",
    "/catalog/diy/materials",
    "/catalog/diy/materials-bundle",
    "/catalog/presets/",
    "/profile/dashboard",
    "/profile/contact-config",
    "/profile/creator/panel",
    "/profile/distributor/panel",
    "/profile/distributor/invite",
    "/creator/public/feed",
    "/creator/public/",
    "/content/blocks",
    "/content/help-center",
  ]),
  x = null,
  w = null,
  k = { blockedUntil: 0, message: "" },
  S = 0,
  T = new Map(),
  _ = new Map();
function y(e) {
  return e ? (0 === e.indexOf("/") ? e : "/".concat(e)) : "/";
}
function E(e) {
  if (!e) return c;
  if (/^https?:\/\//.test(e)) return e;
  var t = y(e);
  return "".concat(c).concat(t);
}
function O(e) {
  var t = E(e || ""),
    r = function (e) {
      var t = String(e || "").match(/^(https?:\/\/[^/]+)/i);
      return t ? t[1].toLowerCase() : "";
    },
    n = r(c),
    a = r(t);
  return !(!n || !a) && n === a;
}
function C(e) {
  return /^https?:\/\//.test(e || "");
}
function A(e) {
  var t = y(e || "/api");
  return t.length > 1 ? t.replace(/\/+$/, "") : t;
}
function N(e, t) {
  var r = y(e || "/"),
    n = y(t || "/");
  return "/" === r ? n : "".concat(r).concat(n);
}
function I(e, t) {
  if (!(n = t) || "object" !== r(n) || Array.isArray(n)) return e;
  var n,
    a = [];
  if (
    (Object.keys(t).forEach(function (e) {
      var r = t[e];
      null != r &&
        "" !== r &&
        (Array.isArray(r)
          ? r.forEach(function (t) {
              null != t &&
                "" !== t &&
                a.push(
                  ""
                    .concat(encodeURIComponent(e), "=")
                    .concat(encodeURIComponent(String(t)))
                );
            })
          : a.push(
              ""
                .concat(encodeURIComponent(e), "=")
                .concat(encodeURIComponent(String(r)))
            ));
    }),
    !a.length)
  )
    return e;
  var o = String(e || "").indexOf("?") >= 0 ? "&" : "?";
  return "".concat(e).concat(o).concat(a.join("&"));
}
function D() {
  var e = Math.random().toString(36).slice(2, 10);
  return "mini_".concat(Date.now(), "_").concat(e);
}
function R() {
  try {
    var e = wx.getAccountInfoSync ? wx.getAccountInfoSync() : null;
    return (e && e.miniProgram && e.miniProgram.envVersion) || "";
  } catch (e) {
    return "";
  }
}
function H(e) {
  var t = e && "object" === r(e) ? e : {};
  return {
    code: String(t.code || ""),
    statusCode: Number(t.statusCode || t.status || 0) || 0,
    errMsg: String(t.errMsg || ""),
    message: String(t.message || ""),
    responseCode: String((t.responseData && t.responseData.code) || ""),
    responseMessage: String((t.responseData && t.responseData.message) || ""),
  };
}
function L(e) {
  var t = e && "object" === r(e) ? e : {},
    n = {
      at: Date.now(),
      envVersion: R() || f.envVersion || "",
      runtimeEnvVersion: f.envVersion || "",
      transport: f.transport || "",
      apiBaseUrl: c || "",
      cloudEnvId: f.cloudEnvId || "",
      cloudRunService: f.cloudRunService || "",
      scene: String(t.scene || ""),
      method: U(t.method || "GET"),
      url: String(t.url || ""),
      path: String(t.path || ""),
      error: H(t.error),
    };
  try {
    wx.setStorageSync("stone_runtime_network_debug_v1", n);
  } catch (e) {}
  try {
    if ("function" != typeof getApp) return n;
    var a = getApp();
    a && a.globalData && (a.globalData.lastNetworkFailure = n);
  } catch (e) {}
  return n;
}
function M(e) {
  for (
    var t = e && e.header && "object" === r(e.header) ? e.header : {},
      n = [t["x-request-id"], t["X-Request-Id"], t["X-REQUEST-ID"]],
      a = 0;
    a < n.length;
    a += 1
  ) {
    var o = String(n[a] || "").trim();
    if (o) return o;
  }
  return "";
}
function U(e) {
  return String(e || "GET")
    .trim()
    .toUpperCase();
}
function P(e) {
  var t = String(e || "").trim();
  if (!t) return "/";
  if (!C(t)) return y(t);
  var r = t.match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
  return y(r && r[1] ? r[1] : "/");
}
function q(e) {
  if (void 0 === e) return "";
  try {
    return JSON.stringify(
      (function e(t) {
        if (Array.isArray(t))
          return t.map(function (t) {
            return e(t);
          });
        if (t && "object" === r(t)) {
          for (
            var n = Object.keys(t).sort(), a = {}, o = 0;
            o < n.length;
            o += 1
          ) {
            var i = n[o];
            a[i] = e(t[i]);
          }
          return a;
        }
        return t;
      })(e)
    );
  } catch (e) {
    return "";
  }
}
function j(e) {
  if (!e || "object" !== r(e)) return e;
  try {
    return JSON.parse(JSON.stringify(e));
  } catch (t) {
    return e;
  }
}
function G(e) {
  for (var t = P(e).toLowerCase(), r = 0; r < m.length; r += 1) {
    var n = String(m[r] || "").toLowerCase();
    if (n && (t === n || 0 === t.indexOf("".concat(n, "/")))) return !0;
  }
  return !1;
}
function F(e) {
  var t = e && "object" === r(e) ? e : {},
    n = U(t.method),
    a = E(String(t.url || "").trim()),
    o = q(t.data),
    i = te(),
    u = Number((i && i.id) || 0),
    c = u > 0 ? "u:".concat(u) : "u:anon";
  return "".concat(n, "|").concat(a, "|").concat(o, "|").concat(c);
}
function V() {
  if (_.size) {
    var e = Date.now();
    if (
      (_.forEach(function (t, r) {
        Number((t && t.expiresAt) || 0) <= e && _.delete(r);
      }),
      !(_.size <= 80))
    )
      for (
        var t = Array.from(_.entries()).sort(function (e, t) {
            return (
              Number((e[1] && e[1].createdAt) || 0) -
              Number((t[1] && t[1].createdAt) || 0)
            );
          }),
          r = _.size - 80,
          n = 0;
        n < r;
        n += 1
      ) {
        var a = t[n];
        if (!a) break;
        _.delete(a[0]);
      }
  }
}
function W(e) {
  V();
  var t = _.get(e);
  return t
    ? Number(t.expiresAt || 0) <= Date.now()
      ? (_.delete(e), null)
      : j(t.payload)
    : null;
}
function B(e, t, r) {
  var n = Math.max(100, Number(r || 1200));
  _.set(e, { payload: j(t), createdAt: Date.now(), expiresAt: Date.now() + n }),
    V();
}
function K(e) {
  for (var t = P(e).toLowerCase(), r = 0; r < g.length; r += 1) {
    var n = g[r] || {},
      a = String(n.prefix || "").toLowerCase();
    if (a && (t === a || 0 === t.indexOf("".concat(a, "/"))))
      return Math.max(100, Number(n.ttlMs || 1200));
  }
  return Math.max(100, Number(1200));
}
function z() {
  _.clear();
}
function Y() {
  var e = "";
  try {
    e = wx.getStorageSync(a) || "";
  } catch (e) {
    return "";
  }
  if (!e) return "";
  var t = X();
  if (!t || !Number.isFinite(Number(t.expiresAt || 0))) return e;
  if (Number(t.expiresAt || 0) <= Date.now()) {
    try {
      wx.removeStorageSync(a);
    } catch (e) {}
    return "";
  }
  return e;
}
function X() {
  try {
    var e = wx.getStorageSync(o);
    return e && "object" === r(e) ? e : null;
  } catch (e) {
    return null;
  }
}
function $(e) {
  if (!e || "object" !== r(e)) return null;
  var t = String(e.nickname || "").trim(),
    n = String(e.avatarUrl || e.avatar_url || "").trim(),
    a = Number(e.id || 0);
  return {
    id: Number.isFinite(a) && a > 0 ? a : 0,
    nickname: t || "微信用户",
    avatarUrl: n,
  };
}
function J(e) {
  return String(e || "").trim() || "";
}
function Q(e, t) {
  try {
    var r = String(e || "").trim();
    wx.setStorageSync(a, r);
    var n = Number(t && t.expiresIn),
      i = J(t && t.refreshToken),
      u = Number(t && t.refreshExpiresIn),
      c = Date.now(),
      s = $(t && t.user);
    Number.isFinite(n) && n > 0
      ? wx.setStorageSync(o, {
          issuedAt: c,
          expiresAt: c + 1e3 * n,
          refreshToken: i,
          refreshExpiresAt: Number.isFinite(u) && u > 0 ? c + 1e3 * u : 0,
          user: s,
        })
      : wx.removeStorageSync(o);
  } catch (e) {}
  T.clear(), z();
}
function Z() {
  try {
    wx.removeStorageSync(a), wx.removeStorageSync(o);
  } catch (e) {}
  T.clear(), z();
}
function ee() {
  var e = X();
  if (!e || "object" !== r(e)) return "";
  var t = J(e.refreshToken);
  if (!t) return "";
  var n = Number(e.refreshExpiresAt || 0);
  return Number.isFinite(n) && n > 0 && n <= Date.now() ? (Z(), "") : t;
}
function te() {
  var e = X();
  return e && "object" === r(e) ? $(e.user) : null;
}
function re() {
  var e = Y();
  return e ? { Authorization: "Bearer ".concat(e) } : {};
}
function ne() {
  if (!Y()) return !!ee();
  var e = (function (e) {
    return e && Number.isFinite(Number(e.expiresAt || 0))
      ? Number(e.expiresAt || 0) - Date.now()
      : Number.POSITIVE_INFINITY;
  })(X());
  return Number.isFinite(e) && e > 0 && e <= 6e4;
}
function ae(e) {
  var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  return Object.assign(
    { "content-type": "application/json", "x-request-id": D() },
    t ? re() : {},
    e || {}
  );
}
function oe() {
  return (
    !(S > Date.now()) &&
    "cloudCallContainer" === f.transport &&
    !!f.cloudRunService &&
    !(!wx.cloud || !wx.cloud.callContainer)
  );
}
function ie() {
  return (
    !(S > Date.now()) &&
    !!f.cloudRunService &&
    !(!wx.cloud || !wx.cloud.callContainer)
  );
}
function ue() {
  return !0 === f.allowHttpFallbackWhenContainerFail;
}
function ce() {
  return !0 === f.strictRequestDomain;
}
function se() {
  return !0 === f.disableNetworkTransportFallback;
}
function fe(e) {
  var t = new Error("小程序合法域名未配置完整");
  return (
    (t.code = "MINIPROGRAM_REQUEST_DOMAIN_INCOMPLETE"),
    (t.cause = e),
    (t.errMsg = "小程序合法域名未配置完整"),
    (t.statusCode = 0),
    t
  );
}
function le(e) {
  var t = Number(e && e.statusCode);
  return !Number.isFinite(t) || 404 === t || 405 === t;
}
function de(e) {
  return y(e || "").replace(/^\/container-[^/]+(?=\/|$)/, "") || "/";
}
function pe(e, t) {
  var r = A(e),
    n = de(t),
    a = n === r || 0 === n.indexOf("".concat(r, "/")) ? n : de(N(r, n)),
    o = [],
    i = new Set(),
    u = function (e) {
      var t = y(e || "");
      t && !i.has(t) && (i.add(t), o.push(t));
    };
  return u(a), n !== a && u(n), o;
}
function he() {
  var e,
    t,
    r = [],
    n = new Set();
  return (
    (e = f.cloudRunService),
    (t = String(e || "").trim()),
    n.has(t) || (n.add(t), r.push(t)),
    r
  );
}
function be(e) {
  var t = String(f.assetCdnBaseUrl || "")
    .trim()
    .replace(/\/+$/, "");
  if (!t) return "";
  var r = A(f.cloudRunBasePath),
    n = String(f.cloudRunService || "").trim(),
    a = (function (e) {
      var t = String(e || "").trim();
      if (!t) return "";
      var r = y(t);
      return "/" === r ? "" : r;
    })(
      f.cloudRunGatewayPath ||
        f.cloudServicePath ||
        (n ? "/container-".concat(n) : "")
    );
  if (!a) return "";
  var o = N(a, N(r, e));
  return "".concat(t).concat(o);
}
function ve(e, t) {
  var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
    n = f.cloudEnvId,
    a = A(f.cloudRunBasePath),
    o = pe(a, t),
    i = he(),
    u = U(e.method);
  function c(t, a) {
    var o = String(a || "").trim(),
      i = ae(e.header, r),
      c = "GET" === u ? I(t, e.data) : t;
    return (
      o && ((i["X-WX-SERVICE"] = o), (i["x-wx-service"] = o)),
      new Promise(function (t, r) {
        wx.cloud.callContainer({
          config: n ? { env: n } : void 0,
          path: c,
          method: u,
          data: "GET" === u ? void 0 : e.data,
          header: i,
          success: function (e) {
            e.statusCode >= 200 && e.statusCode < 300
              ? t(e.data)
              : r(
                  d({
                    statusCode: e.statusCode,
                    responseData: e.data,
                    requestId: M(e),
                  })
                );
          },
          fail: function (e) {
            r(p(e));
          },
        });
      })
    );
  }
  for (var s = [], l = 0; l < o.length; l += 1)
    for (var h = o[l], v = 0; v < i.length; v += 1)
      s.push({ path: h, service: i[v] });
  var g = 0;
  function m() {
    var e = s[g] || {};
    return c(e.path, e.service).catch(function (t) {
      if (!(g < s.length - 1) || !le(t))
        throw (
          (b.error("Cloud container request failed", {
            envId: n,
            method: u,
            path: e.path || "/",
            service: e.service || "default",
            statusCode: t && t.statusCode,
            code: t && t.code,
            message: t && t.message,
          }),
          t)
        );
      var r = s[(g += 1)] || {};
      return (
        b.warn("Cloud container request path fallback", {
          from: "".concat(e.path || "/", "@").concat(e.service || "default"),
          to: "".concat(r.path || "/", "@").concat(r.service || "default"),
          statusCode: t && t.statusCode,
          message: t && t.message,
        }),
        m()
      );
    });
  }
  return m();
}
function ge(e, t) {
  var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
    n = r && O(t),
    a = E(t);
  return new Promise(function (r, o) {
    wx.request({
      url: a,
      method: e.method,
      data: e.data,
      timeout: e.timeout,
      header: ae(e.header, n),
      success: function (n) {
        if (n.statusCode >= 200 && n.statusCode < 300) r(n.data);
        else {
          var i = d({
            statusCode: n.statusCode,
            responseData: n.data,
            requestId: M(n),
          });
          L({
            scene: "http_status",
            method: e.method,
            url: a,
            path: t,
            error: i,
          }),
            o(i);
        }
      },
      fail: function (r) {
        var n = p(r);
        L({ scene: "http_fail", method: e.method, url: a, path: t, error: n }),
          o(n);
      },
    });
  });
}
function me(e) {
  var t = y(e || "");
  return (
    "/auth/wechat/login" === t ||
    t.endsWith("/api".concat("/auth/wechat/login"))
  );
}
function xe(e) {
  return 401 === Number(e && e.statusCode);
}
function we(e) {
  var t = String((e && e.message) || "").toUpperCase();
  return (
    !!t &&
    (t.indexOf("AUTH_TOKEN_REVOKED") >= 0 ||
      t.indexOf("AUTH_REFRESH_TOKEN_REVOKED") >= 0 ||
      t.indexOf("AUTH_REFRESH_TOKEN_INVALID_VERSION") >= 0 ||
      t.indexOf("AUTH_REFRESH_TOKEN_INVALID") >= 0)
  );
}
function ke(e) {
  var t = String((e && e.message) || "").toUpperCase();
  return (
    t.indexOf("WECHAT_LOGIN_INVALID_CODE") >= 0 ||
    t.indexOf("WECHAT_LOGIN_CODE_INVALID_OR_EXPIRED") >= 0 ||
    t.indexOf("WECHAT_LOGIN_CODE_ALREADY_USED") >= 0
  );
}
function Se(e) {
  var t = String((e && e.message) || "").toUpperCase();
  return (
    !!t &&
    (t.indexOf("WECHAT_LOGIN_RATE_LIMITED") >= 0 ||
      t.indexOf("WECHAT_UPSTREAM_HTTP_429") >= 0 ||
      t.indexOf("WECHAT_LOGIN_COOLDOWN") >= 0)
  );
}
function Te(e, t) {
  if (
    !(function (e) {
      var t = String((e && (e.errMsg || e.message)) || "").toUpperCase();
      return (
        !!t &&
        (t.indexOf("CALLCONTAINER:FAIL 85088") >= 0 ||
          t.indexOf("CODE: 85088") >= 0 ||
          t.indexOf("85088") >= 0 ||
          t.indexOf("INVALID HOST") >= 0 ||
          t.indexOf("INVALID_HOST") >= 0)
      );
    })(e)
  )
    return !1;
  var r = Date.now() + 6e5;
  return (
    S < r && (S = r),
    b.warn("Cloud container channel marked unavailable, fallback to HTTP", {
      scene: t || "unknown",
      disableMs: 6e5,
      until: S,
      message: String((e && (e.errMsg || e.message)) || ""),
    }),
    !0
  );
}
function _e(e) {
  var t = String((e && (e.errMsg || e.message)) || "").toLowerCase();
  return (
    t.indexOf("url not in domain list") >= 0 ||
    t.indexOf("not in domain list") >= 0 ||
    (t.indexOf("request:fail") >= 0 && t.indexOf("domain") >= 0)
  );
}
function ye(e) {
  var t = Number(e && e.statusCode);
  if (Number.isFinite(t) && 0 === t) return !0;
  var r = String((e && (e.errMsg || e.message)) || "").toLowerCase();
  return (
    !!r &&
    (r.indexOf("request:fail") >= 0 ||
      r.indexOf("network") >= 0 ||
      r.indexOf("timeout") >= 0 ||
      r.indexOf("timed out") >= 0 ||
      r.indexOf("ssl") >= 0 ||
      r.indexOf("connection") >= 0)
  );
}
function Ee(e, t) {
  return !!_e(e) || (!se() && "GET" === U(t) && ye(e));
}
function Oe(e) {
  if (400 !== Number(e && e.statusCode)) return !1;
  var t = String((e && e.message) || "").toLowerCase(),
    r = String(
      (e && e.responseData && e.responseData.message) || ""
    ).toLowerCase(),
    n = "".concat(t, " ").concat(r);
  return (
    n.indexOf("property invitetoken should not exist") >= 0 ||
    n.indexOf("invitetoken should not exist") >= 0
  );
}
function Ce(e) {
  var t = String(e || "").trim();
  return t && /^[0-9A-Za-z_-]{1,96}$/.test(t) ? t : "";
}
function Ae() {
  try {
    if ("undefined" == typeof wx || "function" != typeof wx.getStorageSync)
      return null;
    var e = wx.getStorageSync(i);
    if (!e || "object" !== r(e)) return null;
    var t = Ce(e.inviteToken || e.invite_token || e.token);
    if (!t) return null;
    var n = Number(e.capturedAt || e.captured_at || 0),
      a = Number(e.expiresAt || e.expires_at || 0),
      o = Number.isFinite(a) && a > 0 && a <= Date.now(),
      u = Number.isFinite(n) && n > 0 && Date.now() - n > 864e5;
    return o || u ? (Ie(t), null) : { inviteToken: t, capturedAt: n };
  } catch (e) {
    return null;
  }
}
function Ne() {
  var e = "";
  try {
    if ("function" != typeof getApp) {
      var t = Ae();
      return Ce(t && t.inviteToken);
    }
    var n = getApp();
    e = Ce(
      (n && n.globalData && "object" === r(n.globalData) ? n.globalData : {})
        .pendingInviteToken
    );
  } catch (t) {
    e = "";
  }
  var a = Ae();
  return e || Ce(a && a.inviteToken);
}
function Ie(e) {
  var t = Ce(e);
  try {
    if ("function" == typeof getApp) {
      var n = getApp();
      if (n && n.globalData && "object" === r(n.globalData)) {
        var a = Ce(n.globalData.pendingInviteToken);
        (t && a && a !== t) || (n.globalData.pendingInviteToken = "");
      }
    }
  } catch (e) {}
  try {
    if ("undefined" != typeof wx && "function" == typeof wx.removeStorageSync) {
      var o = !0;
      if (t && "function" == typeof wx.getStorageSync) {
        var u = wx.getStorageSync(i),
          c =
            u && "object" === r(u)
              ? Ce(u.inviteToken || u.invite_token || u.token)
              : "";
        o = !c || c === t;
      }
      o && wx.removeStorageSync(i);
    }
  } catch (e) {}
}
function De(e) {
  var t = Ce(e);
  if (t) {
    try {
      if ("function" != typeof getApp) return;
      var n = getApp();
      if (!n || !n.globalData || "object" !== r(n.globalData)) return;
      var a = Ce(n.globalData.pendingInviteToken);
      a &&
        a === t &&
        ((n.globalData.pendingInviteToken = ""),
        (n.globalData.boundInviteToken = t),
        (n.globalData.inviteTokenConsumedAt = Date.now()));
    } catch (e) {}
    Ie(t);
  }
}
function Re(e) {
  var t = e && "object" === r(e) ? e : {};
  return {
    bound: !0 === t.bound,
    reason: String(t.reason || (!0 === t.bound ? "bound" : "")).trim(),
  };
}
function He(e) {
  var t = Re(e);
  return (
    !!t.bound ||
    [
      "invalid_token",
      "token_expired",
      "parent_not_active",
      "self_invite",
      "already_bound",
      "relation_history_exists",
      "not_new_user",
    ].includes(t.reason)
  );
}
function Le(e) {
  return Me.apply(this, arguments);
}
function Me() {
  return (Me = t(
    e().mark(function t(r) {
      var n, a, o, i;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if ((n = Ce(r))) {
                  e.next = 3;
                  break;
                }
                return e.abrupt("return", { bound: !1, reason: "empty_token" });
              case 3:
                if (
                  ((a = {
                    url: "/profile/distributor/invite/bind",
                    method: "POST",
                    data: { inviteToken: n },
                    header: {},
                    timeout: s,
                  }),
                  !oe())
                ) {
                  e.next = 19;
                  break;
                }
                return (
                  (e.prev = 5),
                  (e.next = 8),
                  ve(a, "/profile/distributor/invite/bind", !0)
                );
              case 8:
                return e.abrupt("return", e.sent);
              case 11:
                if (
                  ((e.prev = 11),
                  (e.t0 = e.catch(5)),
                  (o = Te(e.t0, "distributor_invite_bind")),
                  ue() || o)
                ) {
                  e.next = 16;
                  break;
                }
                throw e.t0;
              case 16:
                if (
                  404 === (i = Number(e.t0 && e.t0.statusCode)) ||
                  405 === i ||
                  o
                ) {
                  e.next = 19;
                  break;
                }
                throw e.t0;
              case 19:
                return (
                  (e.prev = 19),
                  (e.next = 22),
                  ge(a, "/profile/distributor/invite/bind", !0)
                );
              case 22:
                return e.abrupt("return", e.sent);
              case 25:
                if (((e.prev = 25), (e.t1 = e.catch(19)), !_e(e.t1) || !ie())) {
                  e.next = 29;
                  break;
                }
                return e.abrupt(
                  "return",
                  ve(a, "/profile/distributor/invite/bind", !0)
                );
              case 29:
                throw e.t1;
              case 30:
              case "end":
                return e.stop();
            }
        },
        t,
        null,
        [
          [5, 11],
          [19, 25],
        ]
      );
    })
  )).apply(this, arguments);
}
function Ue(e) {
  return Pe.apply(this, arguments);
}
function Pe() {
  return (Pe = t(
    e().mark(function t(r) {
      var n, a;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (
                ((n = Ne()),
                (a = Re(r && r.distributorInviteBind)),
                !n || !He(a))
              ) {
                e.next = 5;
                break;
              }
              return De(n), e.abrupt("return", a);
            case 5:
              if (n) {
                e.next = 7;
                break;
              }
              return e.abrupt("return", a);
            case 7:
              if (!w) {
                e.next = 9;
                break;
              }
              return e.abrupt("return", w);
            case 9:
              return (
                (w = Le(n)
                  .then(function (e) {
                    var t = Re(e);
                    return He(t) && De(n), t;
                  })
                  .catch(function (e) {
                    return (
                      b.warn("Distributor invite compensation bind failed", e),
                      { bound: !1, reason: "bind_failed" }
                    );
                  })
                  .finally(function () {
                    w = null;
                  })),
                e.abrupt("return", w)
              );
            case 11:
            case "end":
              return e.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function qe(e) {
  return je.apply(this, arguments);
}
function je() {
  return (je = t(
    e().mark(function t(r) {
      var n,
        a,
        o,
        i,
        u,
        c,
        f = arguments;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((n = f.length > 1 && void 0 !== f[1] ? f[1] : ""),
                  (a = Ce(n)),
                  (o = {
                    url: "/auth/wechat/login",
                    method: "POST",
                    data: a ? { code: r, inviteToken: a } : { code: r },
                    header: {},
                    timeout: s,
                  }),
                  !oe())
                ) {
                  e.next = 26;
                  break;
                }
                return (
                  (e.prev = 5), (e.next = 8), ve(o, "/auth/wechat/login", !1)
                );
              case 8:
                return e.abrupt("return", e.sent);
              case 11:
                if (((e.prev = 11), (e.t0 = e.catch(5)), !a || !Oe(e.t0))) {
                  e.next = 16;
                  break;
                }
                return (
                  b.warn(
                    "Auth login inviteToken rejected by backend, retry without inviteToken"
                  ),
                  e.abrupt("return", qe(r, ""))
                );
              case 16:
                if (((i = Te(e.t0, "auth_login")), ue() || i)) {
                  e.next = 19;
                  break;
                }
                throw e.t0;
              case 19:
                if (
                  404 === (u = Number(e.t0 && e.t0.statusCode)) ||
                  405 === u
                ) {
                  e.next = 25;
                  break;
                }
                throw (((c = new Error(v)).code = v), (c.cause = e.t0), c);
              case 25:
                b.warn(
                  "Cloud container auth request failed(404/405), fallback to HTTP request",
                  e.t0
                );
              case 26:
                return (
                  (e.prev = 26), (e.next = 29), ge(o, "/auth/wechat/login", !1)
                );
              case 29:
                return e.abrupt("return", e.sent);
              case 32:
                if (((e.prev = 32), (e.t1 = e.catch(26)), !a || !Oe(e.t1))) {
                  e.next = 37;
                  break;
                }
                return (
                  b.warn(
                    "Auth login inviteToken rejected by backend(HTTP), retry without inviteToken"
                  ),
                  e.abrupt("return", qe(r, ""))
                );
              case 37:
                if (!_e(e.t1) || !ie()) {
                  e.next = 50;
                  break;
                }
                return (
                  b.warn(
                    "HTTP auth request blocked by domain list, fallback to cloud.callContainer",
                    { url: E("/auth/wechat/login") }
                  ),
                  (e.prev = 39),
                  (e.next = 42),
                  ve(o, "/auth/wechat/login", !1)
                );
              case 42:
                return e.abrupt("return", e.sent);
              case 45:
                throw (
                  ((e.prev = 45),
                  (e.t2 = e.catch(39)),
                  Te(e.t2, "auth_login_domain_fallback"),
                  b.warn(
                    "HTTP auth domain fallback to cloud.callContainer failed",
                    { httpError: H(e.t1), containerError: H(e.t2) }
                  ),
                  ce() ? fe(e.t1) : e.t1)
                );
              case 50:
                if (!_e(e.t1) || !ce()) {
                  e.next = 52;
                  break;
                }
                throw fe(e.t1);
              case 52:
                throw e.t1;
              case 53:
              case "end":
                return e.stop();
            }
        },
        t,
        null,
        [
          [5, 11],
          [26, 32],
          [39, 45],
        ]
      );
    })
  )).apply(this, arguments);
}
function Ge(e) {
  return Fe.apply(this, arguments);
}
function Fe() {
  return (Fe = t(
    e().mark(function t(r) {
      var n, a;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((n = {
                    url: "/auth/refresh",
                    method: "POST",
                    data: { refreshToken: r },
                    header: {},
                    timeout: s,
                  }),
                  !oe())
                ) {
                  e.next = 14;
                  break;
                }
                return (e.prev = 2), (e.next = 5), ve(n, "/auth/refresh", !1);
              case 5:
                return e.abrupt("return", e.sent);
              case 8:
                if (
                  ((e.prev = 8),
                  (e.t0 = e.catch(2)),
                  (a = Te(e.t0, "auth_refresh")),
                  ue() || a)
                ) {
                  e.next = 13;
                  break;
                }
                throw e.t0;
              case 13:
                b.warn(
                  "Cloud container auth refresh request failed, fallback to HTTP request",
                  e.t0
                );
              case 14:
                return (e.prev = 14), (e.next = 17), ge(n, "/auth/refresh", !1);
              case 17:
                return e.abrupt("return", e.sent);
              case 20:
                if (((e.prev = 20), (e.t1 = e.catch(14)), !_e(e.t1) || !ie())) {
                  e.next = 35;
                  break;
                }
                return (
                  b.warn(
                    "HTTP auth refresh blocked by domain list, fallback to cloud.callContainer",
                    { url: E("/auth/refresh") }
                  ),
                  (e.prev = 24),
                  (e.next = 27),
                  ve(n, "/auth/refresh", !1)
                );
              case 27:
                return e.abrupt("return", e.sent);
              case 30:
                throw (
                  ((e.prev = 30),
                  (e.t2 = e.catch(24)),
                  Te(e.t2, "auth_refresh_domain_fallback"),
                  b.warn(
                    "HTTP auth refresh domain fallback to cloud.callContainer failed",
                    { httpError: H(e.t1), containerError: H(e.t2) }
                  ),
                  ce() ? fe(e.t1) : e.t1)
                );
              case 35:
                if (!_e(e.t1) || !ce()) {
                  e.next = 37;
                  break;
                }
                throw fe(e.t1);
              case 37:
                throw e.t1;
              case 38:
              case "end":
                return e.stop();
            }
        },
        t,
        null,
        [
          [2, 8],
          [14, 20],
          [24, 30],
        ]
      );
    })
  )).apply(this, arguments);
}
function Ve(e) {
  return We.apply(this, arguments);
}
function We() {
  return (We = t(
    e().mark(function r(n) {
      var a, o, i;
      return e().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              if (
                ((a = Object.assign(
                  { forceRefresh: !1, clearBeforeRefresh: !1 },
                  n || {}
                )),
                (o = Ce(a.inviteToken || Ne())),
                a.forceRefresh)
              ) {
                r.next = 10;
                break;
              }
              if (!(i = Y())) {
                r.next = 8;
                break;
              }
              return (r.next = 7), Ue(null);
            case 7:
              return r.abrupt("return", {
                token: i,
                tokenType: "Bearer",
                fromCache: !0,
              });
            case 8:
              r.next = 11;
              break;
            case 10:
              a.clearBeforeRefresh && Z();
            case 11:
              if (!x) {
                r.next = 13;
                break;
              }
              return r.abrupt("return", x);
            case 13:
              if (!(k.blockedUntil > Date.now())) {
                r.next = 15;
                break;
              }
              throw new Error(k.message || "WECHAT_LOGIN_COOLDOWN");
            case 15:
              return (
                (x = t(
                  e().mark(function t() {
                    var r, n, i, u, c, s, f, l;
                    return e().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!a.forceRefresh) {
                                e.next = 17;
                                break;
                              }
                              if (!(r = ee())) {
                                e.next = 17;
                                break;
                              }
                              return (e.prev = 3), (e.next = 6), Ge(r);
                            case 6:
                              if (!(n = e.sent) || !n.token) {
                                e.next = 11;
                                break;
                              }
                              return (
                                Q(n.token, n),
                                (k = { blockedUntil: 0, message: "" }),
                                e.abrupt("return", n)
                              );
                            case 11:
                              e.next = 17;
                              break;
                            case 13:
                              (e.prev = 13),
                                (e.t0 = e.catch(3)),
                                we(e.t0) && Z(),
                                b.warn(
                                  "Auth refresh failed, fallback to wx.login",
                                  e.t0
                                );
                            case 17:
                              (i = 3), (u = null), (c = 0);
                            case 20:
                              if (!(c < i)) {
                                e.next = 48;
                                break;
                              }
                              return (
                                (e.prev = 21),
                                (e.next = 24),
                                new Promise(function (e, t) {
                                  wx.login({ success: e, fail: t });
                                })
                              );
                            case 24:
                              if ((s = e.sent) && s.code) {
                                e.next = 27;
                                break;
                              }
                              throw new Error("WECHAT_LOGIN_CODE_MISSING");
                            case 27:
                              return (e.next = 29), qe(s.code, o);
                            case 29:
                              if ((f = e.sent) && f.token) {
                                e.next = 32;
                                break;
                              }
                              throw new Error("WECHAT_LOGIN_TOKEN_MISSING");
                            case 32:
                              return Q(f.token, f), (e.next = 35), Ue(f);
                            case 35:
                              return (
                                (k = { blockedUntil: 0, message: "" }),
                                e.abrupt("return", f)
                              );
                            case 39:
                              if (
                                ((e.prev = 39),
                                (e.t1 = e.catch(21)),
                                (u = e.t1),
                                c < i - 1 &&
                                  (ke(e.t1) ||
                                    String((e.t1 && e.t1.message) || "") === v))
                              ) {
                                e.next = 45;
                                break;
                              }
                              throw e.t1;
                            case 45:
                              (c += 1), (e.next = 20);
                              break;
                            case 48:
                              throw (
                                ((l = u || new Error("WECHAT_LOGIN_FAILED")),
                                (k = Se(l)
                                  ? {
                                      blockedUntil: Date.now() + 15e3,
                                      message:
                                        l && l.message
                                          ? String(l.message)
                                          : "WECHAT_LOGIN_FAILED",
                                    }
                                  : { blockedUntil: 0, message: "" }),
                                l)
                              );
                            case 51:
                            case "end":
                              return e.stop();
                          }
                      },
                      t,
                      null,
                      [
                        [3, 13],
                        [21, 39],
                      ]
                    );
                  })
                )().finally(function () {
                  x = null;
                })),
                r.abrupt("return", x)
              );
            case 17:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function Be() {
  return Ke.apply(this, arguments);
}
function Ke() {
  return (Ke = t(
    e().mark(function t() {
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (ne()) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return");
              case 2:
                return (
                  (e.prev = 2),
                  (e.next = 5),
                  Ve({ forceRefresh: !0, clearBeforeRefresh: !1 })
                );
              case 5:
                e.next = 10;
                break;
              case 7:
                (e.prev = 7),
                  (e.t0 = e.catch(2)),
                  b.warn("Auth session proactive refresh failed", e.t0);
              case 10:
              case "end":
                return e.stop();
            }
        },
        t,
        null,
        [[2, 7]]
      );
    })
  )).apply(this, arguments);
}
function ze(e) {
  return Ye.apply(this, arguments);
}
function Ye() {
  return (Ye = t(
    e().mark(function r(n) {
      var a, o, i, u, c, l, d, p, v, g, m, x, w, k, S, _;
      return e().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              if (
                ((a = Object.assign(
                  {
                    method: "GET",
                    data: void 0,
                    header: {},
                    timeout: s,
                    authRetry: !0,
                    cache: !0,
                    __skipGetCache: !1,
                  },
                  n || {}
                )),
                (o = U(a.method)),
                (i = a.url || ""),
                (u = P(i)),
                (c = h({ method: o, path: i, data: a.data })),
                (l =
                  c.changed || o !== a.method
                    ? Object.assign({}, a, { method: o, data: c.data })
                    : a),
                c.changed &&
                  b.warn("Request payload normalized by guard", {
                    path: u,
                    method: o,
                    reason: c.reason || "unknown",
                    meta: c.meta || void 0,
                  }),
                (d = me(i)),
                (p = !C(i) || O(i)),
                (v = !d && p),
                (g = !0 !== a.__skipGetCache && "GET" === o && p && !d),
                (m = g && !1 !== a.cache && G(i)),
                (x = g ? F({ method: o, url: i, data: l.data }) : ""),
                !m || !x)
              ) {
                r.next = 17;
                break;
              }
              if (null == (w = W(x))) {
                r.next = 17;
                break;
              }
              return r.abrupt("return", w);
            case 17:
              if (!g || !x) {
                r.next = 21;
                break;
              }
              if (!(k = T.get(x))) {
                r.next = 21;
                break;
              }
              return r.abrupt("return", k);
            case 21:
              if (
                ((S = (function () {
                  var r = t(
                    e().mark(function t() {
                      var r, n, c, h, g, m;
                      return e().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((r = Date.now()), !v)) {
                                  e.next = 4;
                                  break;
                                }
                                return (e.next = 4), Be();
                              case 4:
                                if (((e.prev = 4), C(i) || !oe())) {
                                  e.next = 18;
                                  break;
                                }
                                return (e.prev = 6), (e.next = 9), ve(l, u, !0);
                              case 9:
                                (n = e.sent), (e.next = 18);
                                break;
                              case 12:
                                if (
                                  ((e.prev = 12),
                                  (e.t0 = e.catch(6)),
                                  (c = Te(e.t0, u)),
                                  ue() || c)
                                ) {
                                  e.next = 17;
                                  break;
                                }
                                throw e.t0;
                              case 17:
                                b.warn(
                                  "Cloud container request failed, fallback to HTTP request",
                                  e.t0
                                );
                              case 18:
                                if (void 0 !== n) {
                                  e.next = 22;
                                  break;
                                }
                                return (e.next = 21), ge(l, i, !0);
                              case 21:
                                n = e.sent;
                              case 22:
                                return (
                                  "GET" !== o && p && z(), e.abrupt("return", n)
                                );
                              case 26:
                                if (
                                  ((e.prev = 26),
                                  (e.t1 = e.catch(4)),
                                  "GET" !== o ||
                                    "/catalog/bootstrap" !== u ||
                                    !ye(e.t1) ||
                                    se())
                                ) {
                                  e.next = 41;
                                  break;
                                }
                                if (!(h = be(u))) {
                                  e.next = 41;
                                  break;
                                }
                                return (
                                  b.warn(
                                    "HTTP request fallback to CloudBase gateway URL",
                                    {
                                      from: E(i),
                                      to: h,
                                      message: String(
                                        (e.t1 &&
                                          (e.t1.errMsg || e.t1.message)) ||
                                          ""
                                      ),
                                    }
                                  ),
                                  (e.prev = 32),
                                  (e.next = 35),
                                  ge(
                                    Object.assign({}, l, {
                                      timeout: Math.max(
                                        12e3,
                                        Number(l.timeout || s)
                                      ),
                                    }),
                                    h,
                                    !1
                                  )
                                );
                              case 35:
                                return e.abrupt("return", e.sent);
                              case 38:
                                (e.prev = 38),
                                  (e.t2 = e.catch(32)),
                                  b.warn(
                                    "CloudBase gateway HTTP fallback failed",
                                    e.t2
                                  );
                              case 41:
                                if (!Ee(e.t1, o) || !p || oe() || !ie()) {
                                  e.next = 58;
                                  break;
                                }
                                return (
                                  b.warn(
                                    "HTTP request fallback to cloud.callContainer",
                                    {
                                      url: E(i),
                                      method: o,
                                      reason: _e(e.t1)
                                        ? "domain_list"
                                        : "network_transport",
                                      message: String(
                                        (e.t1 &&
                                          (e.t1.errMsg || e.t1.message)) ||
                                          ""
                                      ),
                                    }
                                  ),
                                  (e.prev = 43),
                                  (e.next = 46),
                                  ve(l, u, !0)
                                );
                              case 46:
                                return (
                                  (g = e.sent),
                                  "GET" !== o && p && z(),
                                  e.abrupt("return", g)
                                );
                              case 51:
                                if (
                                  ((e.prev = 51),
                                  (e.t3 = e.catch(43)),
                                  Te(e.t3, "http_domain_fallback"),
                                  b.warn(
                                    "HTTP request fallback to cloud.callContainer failed",
                                    {
                                      url: E(i),
                                      method: o,
                                      httpError: H(e.t1),
                                      containerError: H(e.t3),
                                    }
                                  ),
                                  !_e(e.t1) || !ce())
                                ) {
                                  e.next = 57;
                                  break;
                                }
                                throw fe(e.t1);
                              case 57:
                                throw e.t1;
                              case 58:
                                if (!_e(e.t1) || !ce()) {
                                  e.next = 60;
                                  break;
                                }
                                throw fe(e.t1);
                              case 60:
                                if (!!a.authRetry && !d && xe(e.t1)) {
                                  e.next = 63;
                                  break;
                                }
                                throw e.t1;
                              case 63:
                                return (
                                  (e.next = 65),
                                  Ve({
                                    forceRefresh: !0,
                                    clearBeforeRefresh: we(e.t1),
                                  })
                                );
                              case 65:
                                return e.abrupt(
                                  "return",
                                  ze(
                                    Object.assign({}, l, {
                                      authRetry: !1,
                                      __skipGetCache: !0,
                                      cache: !1,
                                    })
                                  )
                                );
                              case 66:
                                return (
                                  (e.prev = 66),
                                  (m = Date.now() - r) >= 2500 &&
                                    b.warn("Slow API request observed", {
                                      method: o,
                                      path: u,
                                      durationMs: m,
                                      envVersion: f.envVersion || "",
                                    }),
                                  e.finish(66)
                                );
                              case 70:
                              case "end":
                                return e.stop();
                            }
                        },
                        t,
                        null,
                        [
                          [4, 26, 66, 70],
                          [6, 12],
                          [32, 38],
                          [43, 51],
                        ]
                      );
                    })
                  );
                  return function () {
                    return r.apply(this, arguments);
                  };
                })()),
                g && x)
              ) {
                r.next = 24;
                break;
              }
              return r.abrupt("return", S());
            case 24:
              return (
                (_ = S()
                  .then(function (e) {
                    return m && B(x, e, K(i)), e;
                  })
                  .finally(function () {
                    T.delete(x);
                  })),
                T.set(x, _),
                r.abrupt("return", _)
              );
            case 27:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
module.exports = {
  request: ze,
  normalizeUrl: E,
  getAuthToken: Y,
  hasRefreshTokenAvailable: function () {
    return !!ee();
  },
  getAuthUserProfile: te,
  setAuthUserProfile: function (e) {
    try {
      var t = X();
      if (!t || "object" !== r(t)) return;
      var n = $(e);
      wx.setStorageSync(o, Object.assign({}, t, { user: n }));
    } catch (e) {}
    z();
  },
  clearAuthToken: Z,
  ensureAuthenticated: Ve,
};
