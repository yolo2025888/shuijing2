require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/typeof"),
  n = Object.freeze(["navigateTo", "redirectTo", "reLaunch"]),
  t = new Set(["home", "inspiration", "cart", "profile"]);
function r(e) {
  try {
    return decodeURIComponent(String(e || "").replace(/\+/g, " "));
  } catch (n) {
    return String(e || "");
  }
}
function i(e) {
  var n = String(e || ""),
    t = n.indexOf("?");
  return t < 0
    ? {}
    : n
        .slice(t + 1)
        .split("&")
        .reduce(function (e, n) {
          if (!n) return e;
          var t = n.indexOf("="),
            i = t >= 0 ? n.slice(0, t) : n,
            a = t >= 0 ? n.slice(t + 1) : "",
            o = r(i);
          return o ? ((e[o] = r(a)), e) : e;
        }, {});
}
function a(n, t) {
  var r = String(n || "").trim();
  if (!r) return "";
  var i = t && "object" === e(t) ? t : {},
    a = [];
  return (
    Object.keys(i).forEach(function (e) {
      var n = i[e];
      null != n &&
        "" !== n &&
        a.push(
          ""
            .concat(encodeURIComponent(e), "=")
            .concat(encodeURIComponent(String(n)))
        );
    }),
    a.length
      ? ""
          .concat(r)
          .concat(r.includes("?") ? "&" : "?")
          .concat(a.join("&"))
      : r
  );
}
function o(e) {
  var n = String(e || "")
    .trim()
    .toLowerCase();
  return "workshop" === n
    ? "diy"
    : "schemes" === n
    ? "profile"
    : ["home", "diy", "inspiration", "design", "cart", "profile"].indexOf(n) >=
      0
    ? n
    : "";
}
function u(e) {
  var n = String(e || "")
    .trim()
    .toLowerCase();
  return t.has(n) ? n : "";
}
function c(e, n) {
  var t = o(e) || "home";
  return a("/pages/index/index", Object.assign({}, n || {}, { activeTab: t }));
}
function d(e, n, t) {
  var r = i(e),
    o = u(r.returnTab || t),
    c = Object.assign({}, r, {
      source: r.source || n || "standalone_diy_legacy_index",
    });
  return (
    delete c.activeTab,
    o ? (c.returnTab = o) : delete c.returnTab,
    a("/pages/diy/index", c)
  );
}
function s(e, n, t) {
  var r = String(n || "standalone_diy").trim() || "standalone_diy";
  return a("/pages/diy-loading/index", {
    target: g(e, r, t),
    source: r,
    returnTab: u(t),
  });
}
function l(e) {
  var n = String(e || "").trim();
  if (n.startsWith("/pages/diy-loading/index")) {
    var t = i(n),
      r = t.source || "standalone_diy",
      a = u(t.returnTab);
    return s(t.target || "", r, a);
  }
  if (
    !(function (e) {
      var n = String(e || "").trim();
      return (
        !!n.startsWith("/pages/index/index") && "diy" === o(i(n).activeTab)
      );
    })(n)
  )
    return n;
  var c = i(n),
    l = c.source || "standalone_diy_legacy_index",
    g = u(c.returnTab);
  return s(d(n, l, g), l, g);
}
function g(e, n, t) {
  return (function e(n, t, r, o) {
    var c = String(n || "").trim(),
      s = u(r);
    if (o > 4)
      return a("/pages/diy/index", {
        source: t || "standalone_diy",
        returnTab: s,
      });
    if (c && c.startsWith("/pages/")) {
      if (c.startsWith("/pages/diy-loading/index")) {
        var l = i(c);
        return e(
          l.target || "",
          l.source || t || "standalone_diy",
          l.returnTab || s,
          o + 1
        );
      }
      if (c.startsWith("/pages/diy/index")) {
        var g = i(c),
          f = Object.assign({}, g, {
            source: g.source || t || "standalone_diy",
          });
        return s && !f.returnTab && (f.returnTab = s), a("/pages/diy/index", f);
      }
      return c.startsWith("/pages/index/index") ? d(c, t, s) : c;
    }
    return a("/pages/diy/index", {
      source: t || "standalone_diy",
      returnTab: s,
    });
  })(e, n, t, 0);
}
function f(e) {
  var n = String(e || "").trim();
  if (n.startsWith("/pages/index/index")) {
    var t = i(n),
      r = o(t.activeTab);
    if (r && "diy" !== r)
      try {
        if ("function" != typeof getApp) return;
        var a = getApp();
        if (!a || !a.globalData) return;
        a.globalData.pendingIndexInitialRoute = {
          activeTab: r,
          returnTab: String(t.returnTab || "")
            .trim()
            .toLowerCase(),
          source: String(t.source || "").trim(),
          ts: Date.now(),
        };
      } catch (e) {}
  }
}
function p() {
  try {
    if ("function" != typeof getApp) return null;
    var e = getApp();
    return e && e.globalData ? e.globalData : null;
  } catch (e) {
    return null;
  }
}
function v(n, t, r) {
  var i = p();
  if (!i) return !0;
  var a = Date.now();
  return (
    !(function (n, t) {
      return !(!n || "object" !== e(n)) && Number(n.expiresAt || 0) > t;
    })(i.pendingDiyEntryNavigation, a) &&
    ((i.pendingDiyEntryNavigation = {
      target: String(n || "").trim(),
      source: String(t || "").trim(),
      returnTab: u(r),
      startedAt: a,
      expiresAt: a + 1e4,
    }),
    !0)
  );
}
function y() {
  var e = p();
  e && (e.pendingDiyEntryNavigation = null);
}
function h(e) {
  var t =
      Array.isArray(e) && e.length
        ? e
        : ["navigateTo", "redirectTo", "reLaunch"],
    r = [];
  return (
    t.forEach(function (e) {
      var t = String(e || "").trim();
      t && (n.indexOf(t) < 0 || r.indexOf(t) >= 0 || r.push(t));
    }),
    r.length ? r : ["navigateTo", "redirectTo", "reLaunch"]
  );
}
function b(n, t) {
  var r = l(n);
  if (!r || "undefined" == typeof wx) return !1;
  if (!r.startsWith("/pages/")) return !1;
  f(r);
  var i = t && "object" === e(t) ? t : {},
    a = h(i.methods),
    o = "function" == typeof i.onFailed ? i.onFailed : null,
    u = "function" == typeof i.onSuccess ? i.onSuccess : null,
    c = !1;
  return (
    (function e(n) {
      if (n >= a.length) {
        if (c) return;
        return (c = !0), void (o && o());
      }
      var t = a[n],
        i = wx && "function" == typeof wx[t] ? wx[t] : null;
      i
        ? i({
            url: r,
            success: function () {
              u && u();
            },
            fail: function () {
              e(n + 1);
            },
          })
        : e(n + 1);
    })(0),
    !0
  );
}
function m(n, t) {
  if ("undefined" == typeof wx) return !1;
  var r = t && "object" === e(t) ? t : {},
    i = h(r.methods),
    a = "function" == typeof r.onFailed ? r.onFailed : null,
    o = Number(r.delta),
    u = Number.isInteger(o) && o > 0 ? o : 1;
  return "function" == typeof wx.navigateBack
    ? (wx.navigateBack({
        delta: u,
        fail: function () {
          !b(n, { methods: i, onFailed: a }) && a && a();
        },
      }),
      !0)
    : b(n, { methods: i, onFailed: a });
}
module.exports = {
  navigateWithFallback: b,
  navigateBackOrFallback: m,
  openTopLevelIndexTab: function (n, t, r) {
    var i = r && "object" === e(r) ? r : {};
    return b(c(n, t), {
      methods: i.methods || ["redirectTo", "reLaunch"],
      onFailed: i.onFailed,
    });
  },
  openDetailPage: function (n, t, r) {
    var i = r && "object" === e(r) ? r : {},
      a = String(t || "")
        .trim()
        .toLowerCase(),
      o =
        !0 === i.replace ||
        "detail_chain" === a ||
        "product_detail" === a ||
        "designer_detail" === a;
    return b(n, {
      methods:
        i.methods ||
        (o
          ? ["redirectTo", "reLaunch"]
          : ["navigateTo", "redirectTo", "reLaunch"]),
      onFailed: i.onFailed,
    });
  },
  openDiyEntry: function (n, t, r, a) {
    var o = a && "object" === e(a) ? a : {},
      c = String(t || "standalone_diy").trim() || "standalone_diy",
      d = u(r),
      l = g(
        (function (e, n, t) {
          var r = String(e || "").trim();
          if (!r.startsWith("/pages/diy-loading/index")) return r;
          var a = i(r);
          return g(
            a.target || "",
            a.source || n || "standalone_diy",
            a.returnTab || t
          );
        })(n, c, d),
        c,
        d
      );
    return (function () {
      if ("function" != typeof getCurrentPages) return !1;
      var e = getCurrentPages();
      if (!Array.isArray(e) || !e.length) return !1;
      var n = e[e.length - 1];
      return (
        "pages/diy/index" ===
        String((n && (n.route || n.__route__)) || "").replace(/^\/+/, "")
      );
    })()
      ? (y(), !1)
      : !!v(l, c, d) &&
          (f(l),
          b(s(l, c, d), {
            methods: o.methods || ["navigateTo", "redirectTo", "reLaunch"],
            onFailed: function () {
              y(),
                b(l, {
                  methods: o.fallbackMethods || [
                    "navigateTo",
                    "redirectTo",
                    "reLaunch",
                  ],
                  onSuccess: y,
                  onFailed: o.onFailed,
                }) ||
                  "function" != typeof o.onFailed ||
                  o.onFailed();
            },
          }));
  },
  backToKnownSource: function (n, t) {
    var r = t && "object" === e(t) ? t : {};
    return m(c(n || "home", r.query || {}), {
      delta: r.delta,
      methods: r.methods || ["redirectTo", "reLaunch"],
      onFailed: r.onFailed,
    });
  },
  ensureDiyTargetUrl: g,
  normalizeNavigationTargetUrl: l,
  clearDiyEntryNavLock: y,
};
