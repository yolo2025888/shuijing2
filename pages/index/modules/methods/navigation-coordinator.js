var e = require("../../../../@babel/runtime/helpers/typeof"),
  t = require("../deps/workshop-deps"),
  a = t.normalizeIndexActiveTab,
  o = t.navigateWithFallback,
  n = Object.freeze({
    isNavVisible: !0,
    photoMode: !1,
    guideModalOpen: !1,
    namingPayload: null,
    showDiyShareModal: !1,
    checkoutData: null,
    isCheckingOut: !1,
    checkoutLaunching: !1,
    paymentFlowState: "IDLE",
    showAddressManagerModal: !1,
    showOrderManagerModal: !1,
    showContentModal: !1,
    showPaymentSuccessPopup: !1,
    profileSubView: "",
    isStandaloneDiy: !1,
    diyReturnTab: "",
    standaloneDiyEntryMaskVisible: !1,
    standaloneDiySceneMasked: !1,
  });
function i(e) {
  return String((e && (e.route || e.__route__ || "")) || "").replace(
    /^\/+/,
    ""
  );
}
function r(t, a) {
  var o = t && "object" === e(t) ? t : null;
  if (o && "function" == typeof o.handleStartCheckout) {
    var n = a && "object" === e(a) ? a : {};
    !(function (e, t, a) {
      if (e && "function" == typeof t) {
        var o = Math.max(0, Number(a) || 0);
        "function" != typeof e.setManagedTimeout
          ? setTimeout(t, o)
          : e.setManagedTimeout(t, o);
      }
    })(
      o,
      function () {
        if (
          ("function" == typeof o.restoreLocalCartSnapshot &&
            o.restoreLocalCartSnapshot(),
          "function" == typeof o.updateCartSummary)
        ) {
          var e =
            o.data && Array.isArray(o.data.cartItems) ? o.data.cartItems : [];
          o.updateCartSummary(e);
        }
        o.handleStartCheckout({ skipLoginCheck: !0 === n.skipLoginCheck });
      },
      void 0 === n.delayMs ? 160 : n.delayMs
    );
  }
}
function c(e) {
  var t =
    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "home";
  return a(e, t);
}
function s(t, a) {
  var o = a && "object" === e(a) ? a : {};
  if (
    !(Array.isArray(o.visibleFilteredPresets) ? o.visibleFilteredPresets : [])
      .length
  ) {
    var n,
      i =
        ((n = o.presetCategory),
        String(n || "")
          .trim()
          .toLowerCase() || "designer");
    (t.inspirationLoading = !0),
      (t.inspirationFirstPageCategory = i),
      (t.inspirationFirstPageStatus = "loading");
  }
}
function u(t, a) {
  if (t && "function" == typeof t.setData) {
    var o = Date.now();
    (t._nonCriticalTaskQuietUntil = o + 520),
      "function" == typeof t.cancelDiyResourceNonCritical &&
        t.cancelDiyResourceNonCritical("tab_switch", { maxRank: 1 });
    var i = c(a, "home");
    t.lastScrollTop = 0;
    var r = t.data && "object" === e(t.data) ? t.data : {},
      u = c(r.navActiveTab || r.activePrimaryTab || r.activeTab, "home"),
      d = Number(t._tabSwitchToken || 0) + 1;
    t._tabSwitchToken = d;
    var f = {};
    r.activeTab !== i && (f.activeTab = i),
      r.activePrimaryTab !== i && (f.activePrimaryTab = i),
      r.navActiveTab !== i && (f.navActiveTab = i),
      !0 === r.isStandaloneDiy && "diy" !== i && (f.isStandaloneDiy = !1),
      "inspiration" === i && s(f, r),
      Object.keys(f).length && t.setData(f);
    var l = function () {
      if (Number(t._tabSwitchToken || 0) === d) {
        var a = t.data && "object" === e(t.data) ? t.data : {},
          r = (c(a.activeTab, "home"), {}),
          s = !1;
        Object.keys(n).forEach(function (e) {
          var t = n[e];
          a[e] !== t && ((r[e] = t), (s = !0));
        });
        s && t.setData(r),
          "function" == typeof t.profileCoordinatorSetShareModalVisible &&
            t.profileCoordinatorSetShareModalVisible(!1),
          "function" == typeof t.scheduleTabHydration &&
            t.scheduleTabHydration(i),
          "home" === i &&
            "function" == typeof t.ensureHomeStepAutoplay &&
            t.ensureHomeStepAutoplay(),
          "function" == typeof t.recordPerfEvent &&
            t.recordPerfEvent("tab_switch", o, { from: u, to: i });
      }
    };
    "function" != typeof t.setManagedTimeout
      ? setTimeout(l, 0)
      : t.setManagedTimeout(l, 0);
  }
}
function d(e, t) {
  e && "function" == typeof e.setData && e.setData({ checkoutData: t || null });
}
module.exports = {
  normalizeTabInput: c,
  LEGACY_TAB_SWITCH_RESET_STATE: n,
  resolveV2EntryRoute: function (e) {
    var t,
      a,
      o = c(e, "home");
    return "schemes" === o
      ? {
          nextTabId: o,
          route:
            ((t = "legacy_schemes"),
            (a = String(t || "legacy_schemes").trim() || "legacy_schemes"),
            "/pages/index/index?activeTab=profile&source=".concat(
              encodeURIComponent(a)
            )),
        }
      : { nextTabId: o, route: "" };
  },
  navigateToV2Route: function (e) {
    return o(e, { methods: ["navigateTo", "redirectTo", "reLaunch"] });
  },
  applyLegacySwitchState: u,
  applyOnLoadState: function (e, t, a) {
    if (e && "function" == typeof e.setData) {
      var o = c(t, "home"),
        n = !0 === a;
      e.setData({
        activeTab: o,
        activePrimaryTab: o,
        navActiveTab: o,
        isLoggedIn: n,
        authVerifying: n,
        cartHydrating: n,
        savedSchemesLoading: n,
      });
    }
  },
  shouldHydrateProfileDomainInLegacyIndex: function (t) {
    return t && t.data && e(t.data), !0;
  },
  setActiveTab: function (e, t) {
    var a =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "home";
    if (e && "function" == typeof e.setData) {
      var o = c(t, a),
        n = {
          activeTab: o,
          activePrimaryTab: o,
          navActiveTab: o,
          isStandaloneDiy: "diy" === o,
        };
      "inspiration" === o && s(n, e.data),
        e.setData(n, function () {
          "function" == typeof e.computeViewportMetrics &&
            e.computeViewportMetrics();
        });
    }
  },
  setPhotoMode: function (e, t) {
    e && "function" == typeof e.setData && e.setData({ photoMode: !0 === t });
  },
  setPhotoModeWithCallback: function (e, t, a) {
    if (e && "function" == typeof e.setData) {
      var o = "function" == typeof a ? a : null;
      e.setData({ photoMode: !0 === t }, o || void 0);
    }
  },
  setCheckoutData: d,
  clearCheckoutData: function (e) {
    d(e, null);
  },
  openIndexTabFromStandaloneDiy: function (t, a, n) {
    if (
      !0 !==
      (t && t.data && "object" === e(t.data) ? t.data : {}).isStandaloneDiy
    )
      return !1;
    var s = n && "object" === e(n) ? n : {},
      d = c(a, "home"),
      f = (function (e, t) {
        var a = c(e, "home"),
          o = Object.assign({}, t || {}, { activeTab: a }),
          n = [];
        return (
          Object.keys(o).forEach(function (e) {
            var t = o[e];
            null != t &&
              "" !== t &&
              n.push(
                ""
                  .concat(encodeURIComponent(e), "=")
                  .concat(encodeURIComponent(String(t)))
              );
          }),
          "/pages/index/index".concat(n.length ? "?".concat(n.join("&")) : "")
        );
      })(
        d,
        Object.assign(
          { source: s.source || "standalone_diy_".concat(d) },
          s.query || {}
        )
      ),
      l = (function (e) {
        if ("function" != typeof getCurrentPages) return null;
        var t = getCurrentPages();
        if (!Array.isArray(t) || !t.length) return null;
        for (var a = t.length - 1; a >= 0; a -= 1) {
          var o = t[a];
          if (o && o !== e && "pages/index/index" === i(o))
            return { page: o, deltaFromTop: t.length - 1 - a };
        }
        return null;
      })(t);
    return l &&
      l.page &&
      l.deltaFromTop > 0 &&
      "undefined" != typeof wx &&
      "function" == typeof wx.navigateBack
      ? ("cart" === d
          ? ((function (t, a) {
              var o = t && t.data && "object" === e(t.data) ? t.data : {};
              if (a && "function" == typeof a.setData) {
                var n = Array.isArray(o.cartItems) ? o.cartItems : null;
                n && a.setData({ cartItems: n, cartHydrating: !1 }),
                  n &&
                    "function" == typeof a.updateCartSummary &&
                    a.updateCartSummary(n);
              }
            })(t, l.page),
            (function (t, a) {
              var o = t && t.data && "object" === e(t.data) ? t.data : {};
              if (a && "function" == typeof a.setData) {
                var n = {};
                [
                  "isLoggedIn",
                  "authVerifying",
                  "profileAvatarUrl",
                  "profileAvatarFallback",
                  "profileNickname",
                  "profileUserId",
                  "selectedAddress",
                ].forEach(function (e) {
                  Object.prototype.hasOwnProperty.call(o, e) && (n[e] = o[e]);
                }),
                  Object.keys(n).length && a.setData(n);
              }
            })(t, l.page))
          : "profile" === d &&
            (function (t, a) {
              var o = t && t.data && "object" === e(t.data) ? t.data : {};
              if (a && "function" == typeof a.setData) {
                var n = {};
                Array.isArray(o.savedSchemes) &&
                  ((n.savedSchemes = o.savedSchemes),
                  (n.savedSchemesLoading = !1)),
                  Object.keys(n).length && a.setData(n);
              }
            })(t, l.page),
        u(l.page, d),
        (function (t, a) {
          if (t && "function" == typeof t.setData) {
            var o = a && "object" === e(a) ? a : {};
            if (Object.keys(o).length) {
              var n = function () {
                t.setData(o, function () {
                  "function" == typeof t.computeViewportMetrics &&
                    t.computeViewportMetrics();
                });
              };
              "function" != typeof t.setManagedTimeout
                ? setTimeout(n, 16)
                : t.setManagedTimeout(n, 16);
            }
          }
        })(l.page, s.afterSwitchPatch),
        "cart" === d &&
          !0 === s.startCheckout &&
          r(l.page, {
            skipLoginCheck: !0 === s.skipLoginCheck,
            delayMs: s.checkoutDelayMs,
          }),
        wx.navigateBack({
          delta: l.deltaFromTop,
          fail: function () {
            o(f, {
              methods: s.methods || ["redirectTo", "reLaunch", "navigateTo"],
              onFailed: s.onFailed,
            });
          },
        }),
        !0)
      : o(f, {
          methods: s.methods || ["redirectTo", "reLaunch", "navigateTo"],
          onFailed: s.onFailed,
        });
  },
};
