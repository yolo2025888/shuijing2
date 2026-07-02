var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../@babel/runtime/helpers/typeof"),
  r = require("../../pages/index/modules/deps/workshop-deps"),
  n = r.playSound,
  i = r.warmupAudioEngine,
  o = r.buildMeasureCards,
  s = r.PHOTO_MIN_BEAD_COUNT,
  d = r.normalizePattern,
  u = require("../../pages/index/modules/methods/navigation-coordinator"),
  h = u.setPhotoModeWithCallback,
  c = u.applyLegacySwitchState,
  l = (u.setPhotoMode, u.setActiveTab),
  f = require("../../utils/navigation/navigate-with-fallback"),
  p = f.navigateWithFallback,
  g = f.navigateBackOrFallback,
  m = f.openDiyEntry,
  y = require("../../utils/navigation/inline-diy-entry").findReusableIndexPage,
  b = require("../../facades/v2/route-bridge").buildLegacyRouteByDomain,
  S = require("../../contracts/navigation/query-contract").appendQueryParams,
  v = require("../shared/share-image-resolver").resolveDiyShareImageUrl,
  T = require("../shared/share-card-composer"),
  w = T.SHARE_CARD_IMAGE_URL,
  x = T.DEFAULT_SHARE_CARD_WIDTH,
  _ = T.DEFAULT_SHARE_CARD_HEIGHT,
  P = T.composeBraceletShareCard,
  A = x,
  I = _,
  M = new Set(["home", "inspiration", "cart", "profile"]);
function N(t) {
  var e = String(t || "")
    .trim()
    .toLowerCase();
  return M.has(e) ? e : "";
}
function k(t, e) {
  var r = N(e);
  if (r) return r;
  var n = t && t.data && "object" === a(t.data) ? t.data : {};
  return N(n.activeTab || n.navActiveTab || n.activePrimaryTab);
}
function D(t) {
  var e = Number.isFinite(Number(t)) ? Math.max(0, Number(t)) : 0,
    a = 390;
  try {
    if ("undefined" != typeof wx && "function" == typeof wx.getWindowInfo) {
      var r = wx.getWindowInfo();
      r &&
        Number.isFinite(Number(r.windowWidth)) &&
        (a = Number(r.windowWidth));
    } else if (
      "undefined" != typeof wx &&
      "function" == typeof wx.getSystemInfoSync
    ) {
      var n = wx.getSystemInfoSync();
      n &&
        Number.isFinite(Number(n.windowWidth)) &&
        (a = Number(n.windowWidth));
    }
  } catch (t) {
    a = 390;
  }
  var i = a / 750,
    o = Math.floor(292 * i) + Math.floor(38 * i);
  return Math.max(0, e * o);
}
function C(t, e) {
  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 260;
  if (!t || "object" !== a(t)) return !1;
  var n = String(e || "").trim() || "__default__",
    i = Date.now();
  (t._rapidNavActionMap && "object" === a(t._rapidNavActionMap)) ||
    (t._rapidNavActionMap = Object.create(null));
  var o = Number(t._rapidNavActionMap[n] || 0);
  return (
    (o > 0 && i - o < Math.max(80, Number(r) || 260)) ||
    ((t._rapidNavActionMap[n] = i), !1)
  );
}
function j(t) {
  var e =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : "touches",
    a = t && Array.isArray(t[e]) ? t[e] : [],
    r = a[0] || null;
  if (!r) return null;
  var n = Number(null != r.clientX ? r.clientX : r.pageX),
    i = Number(null != r.clientY ? r.clientY : r.pageY);
  return Number.isFinite(n) && Number.isFinite(i) ? { x: n, y: i } : null;
}
function E(t) {
  return String(null == t ? "" : t)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "");
}
function L(t, e) {
  var r = t && t.data && "object" === a(t.data) ? t.data : {},
    n =
      e && "object" === a(e)
        ? e
        : r.trayState && "object" === a(r.trayState)
        ? r.trayState
        : {};
  return (n && n.pattern) || r.currentPattern || [];
}
function F(t, e) {
  var a = L(t, e);
  return v(t, a) || w;
}
function O(t, e) {
  var a = B(L(t, e));
  return a.length
    ? "".concat("v7-stonelab-bg-fbfaf8", ":").concat(a.join(","))
    : "";
}
function B(t) {
  return d(t).filter(function (t) {
    return /^[A-Za-z0-9_-]{1,64}$/.test(String(t || ""));
  });
}
function H(t, e) {
  var r = t && "object" === a(t) ? t : null;
  if (!r) return "/pages/diy/index?source=diy_photo_share";
  var n = r.data && "object" === a(r.data) ? r.data : {},
    i = B(
      L(
        r,
        e && "object" === a(e)
          ? e
          : n.trayState && "object" === a(n.trayState)
          ? n.trayState
          : {}
      )
    );
  if (!i.length) return "/pages/diy/index?source=diy_photo_share";
  var o = Number(n.bgIndex),
    s = String(n.currentSchemeName || "").trim(),
    d = {
      fromShare: 1,
      source: "diy_photo_share",
      sharedPattern: i.join(","),
      sharedBgIndex: Number.isFinite(o) ? Math.max(0, Math.round(o)) : 0,
      sharedName: s,
    };
  return S("/pages/diy/index", d);
}
function G(t, e) {
  return R.apply(this, arguments);
}
function R() {
  return (R = e(
    t().mark(function r(n, i) {
      var o, s, d, u, h;
      return t().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              if ((o = n && "object" === a(n) ? n : null)) {
                r.next = 3;
                break;
              }
              return r.abrupt("return", "");
            case 3:
              if (
                ((s = B(L(o, i))),
                (d = O(o, i)),
                !o._diyPhotoShareImageTask ||
                  o._diyPhotoShareImageTaskKey !== d)
              ) {
                r.next = 7;
                break;
              }
              return r.abrupt("return", o._diyPhotoShareImageTask);
            case 7:
              return (
                (u = F(o, i)),
                (h = e(
                  t().mark(function e() {
                    var a, r;
                    return t().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (s.length) {
                                t.next = 5;
                                break;
                              }
                              return (
                                (o._diyPhotoShareImageUrl = u),
                                (o._diyPhotoShareImageVersion =
                                  "v7-stonelab-bg-fbfaf8"),
                                (o._diyPhotoShareImageKey = d),
                                t.abrupt("return", u)
                              );
                            case 5:
                              return (
                                (t.prev = 5),
                                (t.next = 8),
                                P(o, {
                                  canvasId: "indexShareComposeCanvas",
                                  pattern: s,
                                  fallbackImageUrl: w,
                                  width: A,
                                  height: I,
                                  layout: "stonelab-diy-system",
                                  includeTrayBg: !0,
                                  bgIndex: o.data && o.data.bgIndex,
                                })
                              );
                            case 8:
                              return (
                                (a = t.sent),
                                (r = String(a || "").trim() || u),
                                (o._diyPhotoShareImageUrl = r),
                                (o._diyPhotoShareImageVersion =
                                  "v7-stonelab-bg-fbfaf8"),
                                (o._diyPhotoShareImageKey = d),
                                t.abrupt("return", r)
                              );
                            case 16:
                              return (
                                (t.prev = 16),
                                (t.t0 = t.catch(5)),
                                (o._diyPhotoShareImageUrl = u),
                                (o._diyPhotoShareImageVersion =
                                  "v7-stonelab-bg-fbfaf8"),
                                (o._diyPhotoShareImageKey = d),
                                t.abrupt("return", u)
                              );
                            case 22:
                            case "end":
                              return t.stop();
                          }
                      },
                      e,
                      null,
                      [[5, 16]]
                    );
                  })
                )()),
                (o._diyPhotoShareImageTaskKey = d),
                (o._diyPhotoShareImageTask = h.finally(function () {
                  (o._diyPhotoShareImageTask = null),
                    (o._diyPhotoShareImageTaskKey = "");
                })),
                r.abrupt("return", o._diyPhotoShareImageTask)
              );
            case 12:
            case "end":
              return r.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function U(t, e, a) {
  return W.apply(this, arguments);
}
function W() {
  return (W = e(
    t().mark(function e(r, n, i) {
      var o, s, d;
      return t().wrap(function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              if ((o = r && "object" === a(r) ? r : null)) {
                t.next = 3;
                break;
              }
              return t.abrupt("return", w);
            case 3:
              return (
                (s = i && "object" === a(i) ? i : {}),
                "function" == typeof o.setData &&
                  o.setData({
                    diyPhotoSharePreparing: !0,
                    diyPhotoShareReady: !1,
                  }),
                (t.t1 = String),
                (t.next = 8),
                G(o, n).catch(function () {
                  return "";
                })
              );
            case 8:
              if (((t.t2 = t.sent), t.t2)) {
                t.next = 11;
                break;
              }
              t.t2 = "";
            case 11:
              if (((t.t3 = t.t2), (t.t0 = (0, t.t1)(t.t3).trim()), t.t0)) {
                t.next = 15;
                break;
              }
              t.t0 = w;
            case 15:
              return (
                (d = t.t0),
                "function" == typeof o.setData &&
                  o.setData({
                    diyPhotoSharePreparing: !1,
                    diyPhotoShareReady: !0,
                  }),
                !0 === s.showReadyToast &&
                  "function" == typeof o.showToast &&
                  o.showToast("分享卡片已生成，请再点击分享"),
                t.abrupt("return", d)
              );
            case 19:
            case "end":
              return t.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function q(t, e) {
  var r = t && "object" === a(t) ? t : null;
  return r && "v7-stonelab-bg-fbfaf8" === r._diyPhotoShareImageVersion
    ? r._diyPhotoShareImageKey !== O(r, e)
      ? ""
      : String(r._diyPhotoShareImageUrl || "").trim()
    : "";
}
function Y(t, e) {
  var a = (function (t) {
    var e = String(t || "").trim();
    return e
      ? e.startsWith("/")
        ? e
        : e.startsWith("pages/")
        ? "/".concat(e)
        : e
      : "";
  })(e);
  if (!a) return !1;
  if (a.startsWith("/"))
    return p(a, { methods: ["navigateTo", "redirectTo", "reLaunch"] }), !0;
  var r = a.replace(/^tab:/i, "").trim().toLowerCase(),
    n = { design: "inspiration", workshop: "diy" }[r] || r;
  return (
    !!new Set(["home", "inspiration", "diy", "cart", "profile", "schemes"]).has(
      n
    ) &&
    ("diy" === n
      ? (K(t, "standalone_diy_home_target", {
          entryFlagName: "enableStandaloneDiyPageHomeEntry",
        }),
        !0)
      : (c(t, n), !0))
  );
}
function K(t, e, r) {
  var n = r && "object" === a(r) ? r : {};
  "function" == typeof i && i();
  var o = k(t, n.returnTab),
    s = (function (t, e) {
      var r = e && "object" === a(e) ? e : {},
        n = {
          source: String(t || "standalone_diy").trim() || "standalone_diy",
          returnTab: N(r.returnTab),
        };
      return S("/pages/diy/index", n);
    })(e || "standalone_diy", { returnTab: o });
  m(s, e || "standalone_diy", o, {
    methods: ["navigateTo", "redirectTo", "reLaunch"],
    fallbackMethods: ["navigateTo", "redirectTo", "reLaunch"],
    onFailed: function () {
      "function" == typeof t.showToast && t.showToast("进入 DIY 失败，请重试");
    },
  });
}
function X(t) {
  var e = d(t);
  return e.length ? e.join("|") : "";
}
function V(t) {
  var e = t && "object" === a(t) ? t : {},
    r = function () {
      !0 === (e.data && "object" === a(e.data) ? e.data : {}).isLoggedIn ||
      "function" != typeof e.setData
        ? "function" != typeof e.promptWechatProfileAuthIfNeeded
          ? "function" == typeof e.setData &&
            e.setData({ showProfileAuthPrompt: !0 })
          : e.promptWechatProfileAuthIfNeeded()
        : e.setData({ showProfileAuthPrompt: !0 });
    };
  "function" != typeof e.setManagedTimeout
    ? setTimeout(r, 0)
    : e.setManagedTimeout(r, 0);
}
function z(t) {
  return $.apply(this, arguments);
}
function $() {
  return ($ = e(
    t().mark(function e(r) {
      var n, i, o, s, u;
      return t().wrap(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                if (r && "object" === a(r)) {
                  t.next = 2;
                  break;
                }
                return t.abrupt("return", !1);
              case 2:
                if (
                  !0 ===
                  (n = r.data && "object" === a(r.data) ? r.data : {})
                    .isLoggedIn
                ) {
                  t.next = 7;
                  break;
                }
                return (
                  "function" == typeof r.showToast &&
                    r.showToast("请先登录后再保存"),
                  V(r),
                  t.abrupt("return", !1)
                );
              case 7:
                if ("function" == typeof r.saveScheme) {
                  t.next = 9;
                  break;
                }
                return t.abrupt("return", !1);
              case 9:
                if (
                  ((i =
                    n.trayState && "object" === a(n.trayState)
                      ? n.trayState
                      : {}),
                  (o = d(i.pattern || n.currentPattern)).length)
                ) {
                  t.next = 13;
                  break;
                }
                return t.abrupt("return", !1);
              case 13:
                return (
                  (s =
                    String(n.currentSchemeName || "").trim() ||
                    "未命名手串方案"),
                  (t.prev = 14),
                  (t.next = 17),
                  Promise.resolve(
                    r.saveScheme(
                      o,
                      Number(i.totalPerimeter || 0),
                      Number(i.totalPrice || 0),
                      Number(n.bgIndex || 0),
                      s
                    )
                  )
                );
              case 17:
                return (
                  !0 === (u = t.sent) &&
                    "function" == typeof r.showToast &&
                    r.showToast("已保存设计，正在退出"),
                  t.abrupt("return", !0 === u)
                );
              case 22:
                return (
                  (t.prev = 22), (t.t0 = t.catch(14)), t.abrupt("return", !1)
                );
              case 25:
              case "end":
                return t.stop();
            }
        },
        e,
        null,
        [[14, 22]]
      );
    })
  )).apply(this, arguments);
}
function Q() {
  function r(t) {
    var e = function () {
      return n("slide");
    };
    t && "function" == typeof t.setManagedTimeout
      ? t.setManagedTimeout(e, 0)
      : setTimeout(e, 0);
  }
  return {
    handleRootTap: function () {
      this.handleExitPhotoMode();
    },
    handleExitPhotoMode: function () {
      var t = this;
      if (this.data.photoMode) {
        var e = "function" == typeof this.trayComp ? this.trayComp() : null;
        e &&
          "function" == typeof e.prepareExitPhotoMode &&
          e.prepareExitPhotoMode(),
          h(this, !1, function () {
            "function" == typeof t.computeViewportMetrics &&
              t.computeViewportMetrics();
            var e = function () {
              var e = "function" == typeof t.trayComp ? t.trayComp() : null;
              e &&
                "function" == typeof e.restoreNormalModeLayout &&
                e.restoreNormalModeLayout();
            };
            "undefined" != typeof wx && "function" == typeof wx.nextTick
              ? wx.nextTick(e)
              : setTimeout(e, 0);
          }),
          n("slide");
      }
    },
    handleTrayFeedback: function (t) {
      t.detail && t.detail.message && this.showToast(t.detail.message);
    },
    handleDiyEdgeSwipeStart: function (t) {
      if (
        ((this._diyEdgeBackGesture = null),
        (r = (e = this) && e.data && "object" === a(e.data) ? e.data : {}),
        !(
          "diy" !==
            String(r.activeTab || "")
              .trim()
              .toLowerCase() ||
          r.photoMode ||
          (e && e._diyStandaloneBackPending) ||
          r.guideModalOpen ||
          r.namingPayload ||
          r.checkoutData ||
          r.isCheckingOut ||
          r.checkoutLaunching ||
          r.showDiyShareModal ||
          r.showProfileShareModal ||
          r.showAddressManagerModal ||
          r.showOrderManagerModal ||
          r.showContentModal ||
          r.showPaymentSuccessPopup
        ))
      ) {
        var e,
          r,
          n = j(t, "touches");
        !n ||
          n.x > 56 ||
          (this._diyEdgeBackGesture = {
            startX: n.x,
            startY: n.y,
            lastX: n.x,
            lastY: n.y,
            active: !0,
            cancelled: !1,
          });
      }
    },
    handleDiyEdgeSwipeMove: function (t) {
      var e = this._diyEdgeBackGesture;
      if (e && e.active && !e.cancelled) {
        var a = j(t, "touches");
        if (a) {
          var r = a.x - e.startX,
            n = a.y - e.startY;
          (e.lastX = a.x),
            (e.lastY = a.y),
            (r < -6 || (Math.abs(n) > 54 && Math.abs(r) < 36)) &&
              (e.cancelled = !0);
        } else e.cancelled = !0;
      }
    },
    handleDiyEdgeSwipeEnd: function (t) {
      var e = this._diyEdgeBackGesture;
      if (((this._diyEdgeBackGesture = null), e && e.active && !e.cancelled)) {
        var a = j(t, "changedTouches") || { x: e.lastX, y: e.lastY },
          r = a.x - e.startX,
          n = a.y - e.startY;
        r >= 60 &&
          Math.abs(n) <= 54 &&
          r >= 1.35 * Math.abs(n) &&
          this.handleDiyStandaloneBack();
      }
    },
    handleDiyEdgeSwipeCancel: function () {
      this._diyEdgeBackGesture = null;
    },
    handleSwitchTab: function (t) {
      if (!C(this, "bottom-tab-switch")) {
        var e =
          t && t.currentTarget && t.currentTarget.dataset
            ? String(
                t.currentTarget.dataset.id || t.currentTarget.dataset.tab || ""
              ).trim()
            : "";
        if (
          (function (t) {
            var e = String(t || "")
              .trim()
              .toLowerCase();
            return "diy" === e || "workshop" === e;
          })(e) &&
          (function (t) {
            if (!t || "function" != typeof getCurrentPages) return !0;
            var e = getCurrentPages();
            return !Array.isArray(e) || !e.length || e[e.length - 1] === t;
          })(this)
        )
          return (
            K(this, "standalone_diy_tab_switch", {
              entryFlagName: "enableStandaloneDiyPageBottomNavEntry",
              returnTab: k(this),
            }),
            void r(this)
          );
        c(this, e), r(this);
      }
    },
    onHomeSlideChange: function (t) {
      if ("home" === String(this.data.activeTab || "").trim()) {
        var e = Array.isArray(this.data.homeSlides)
          ? this.data.homeSlides.length
          : 0;
        if (!(e <= 0)) {
          var a = Number(t && t.detail ? t.detail.current : 0),
            r = Number.isFinite(a) && a >= 0 ? Math.floor(a) % e : 0;
          if ((Number(this.data.homeCurrentSlide) || 0) !== r) {
            var n = Date.now();
            n - Number(this._homeSlideChangeAt || 0) < 180 ||
              ((this._homeSlideChangeAt = n),
              this.setData({ homeCurrentSlide: r }));
          }
        }
      }
    },
    handleHomeGoToSlide: function (t) {
      var e = Array.isArray(this.data.homeSlides)
        ? this.data.homeSlides.length
        : 0;
      if (!(e <= 0)) {
        var a = Number(
            t && t.currentTarget && t.currentTarget.dataset
              ? t.currentTarget.dataset.idx
              : 0
          ),
          r = Number.isFinite(a) && a >= 0 ? Math.floor(a) % e : 0;
        (Number(this.data.homeCurrentSlide) || 0) !== r &&
          this.setData({ homeCurrentSlide: r });
      }
    },
    handleHomeSetActiveStep: function (t) {
      var e = Number(
          t && t.currentTarget && t.currentTarget.dataset
            ? t.currentTarget.dataset.idx
            : 0
        ),
        a = Number.isFinite(e) && e >= 0 ? e : 0;
      this.setData({ homeActiveStep: a, homeStepScrollLeft: D(a) });
    },
    ensureHomeStepAutoplay: function () {
      var t = this;
      this._homeStepTimer && this.clearManagedInterval(this._homeStepTimer);
      var e = Array.isArray(this.data.homeSteps) ? this.data.homeSteps : [];
      e.length &&
        (this._homeStepTimer = this.setManagedInterval(function () {
          if ("home" === String(t.data.activeTab || "")) {
            var a = ((Number(t.data.homeActiveStep) || 0) + 1) % e.length;
            t.setData({ homeActiveStep: a, homeStepScrollLeft: D(a) });
          }
        }, 3500));
    },
    handleHomeOpenDiy: function () {
      if (!C(this, "home-open-diy", 360)) {
        var t = Array.isArray(this.data.homeSlides) ? this.data.homeSlides : [],
          e = t[Number(this.data.homeCurrentSlide) || 0] || t[0] || null,
          a = String((e && e.targetPath) || "").trim();
        (a && Y(this, a)) ||
          K(this, "standalone_diy_home_cta", {
            entryFlagName: "enableStandaloneDiyPageHomeEntry",
          }),
          n("slide");
      }
    },
    handleHomeOpenOrderFlow: function () {
      if (!C(this, "home-open-order-flow", 500)) {
        var t = String(
          this.data && this.data.homeOrderFlowFullImage
            ? this.data.homeOrderFlowFullImage
            : "https://stonlab-1g57aqhi841eebf4-1307595304.tcloudbaseapp.com/assets/home/order-flow-full.20260616.jpg"
        ).trim();
        t &&
          "undefined" != typeof wx &&
          "function" == typeof wx.previewImage &&
          wx.previewImage({ current: t, urls: [t] });
      }
    },
    handleDiyStandaloneBack: function () {
      var r = this;
      if (!this._diyStandaloneBackPending) {
        this._diyStandaloneBackPending = !0;
        var i,
          o = N(this.data && this.data.diyReturnTab),
          s = b(o || "home", {
            source: o
              ? "standalone_diy_back_".concat(o)
              : "standalone_diy_back",
          }),
          d = function () {
            r._diyStandaloneBackPending = !1;
          },
          u = function () {
            var t,
              e = y({ excludePage: r });
            o && e && e.page && e.deltaFromTop > 0
              ? (c(e.page, o),
                "undefined" != typeof wx && "function" == typeof wx.navigateBack
                  ? wx.navigateBack({
                      delta: e.deltaFromTop,
                      fail: function () {
                        p(s, { methods: ["redirectTo", "reLaunch"] });
                      },
                    })
                  : p(s, { methods: ["redirectTo", "reLaunch"] }))
              : o
              ? ((t = r),
                "pages/diy/index" ===
                String((t && (t.route || t.__route__ || "")) || "").replace(
                  /^\/+/,
                  ""
                )
                  ? p(s, { methods: ["redirectTo", "reLaunch"] })
                  : c(r, o))
              : g(s, {
                  delta: 1,
                  methods: ["redirectTo", "reLaunch", "navigateTo"],
                }),
              n("slide"),
              "function" != typeof r.setManagedTimeout
                ? setTimeout(d, 640)
                : r.setManagedTimeout(d, 640);
          },
          h =
            "function" == typeof this.setManagedTimeout
              ? this.setManagedTimeout.bind(this)
              : setTimeout,
          l = function () {
            r.data &&
            !0 === r.data.isStandaloneDiy &&
            "function" == typeof r.setData
              ? r.setData({ standaloneDiySceneMasked: !0 }, function () {
                  h(u, 24);
                })
              : u();
          };
        if (
          (function (t) {
            var e = t && t.data && "object" === a(t.data) ? t.data : {},
              r = e.trayState && "object" === a(e.trayState) ? e.trayState : {};
            if (!0 !== r.isStrung) return !1;
            if (Number(r.beadsCount || 0) <= 0) return !1;
            var n = X(r.pattern || e.currentPattern);
            return (
              !!n &&
              !(Array.isArray(e.savedSchemes) ? e.savedSchemes : []).some(
                function (t) {
                  return !(!t || "object" !== a(t)) && X(t.pattern) === n;
                }
              )
            );
          })(this)
        )
          ((i = this),
          i && "function" == typeof i.openDiyConfirm
            ? i.openDiyConfirm({
                tone: "save",
                iconText: "S",
                title: "保存当前手串？",
                content:
                  "当前手串已收拢但还没有保存，先保存可在「我的设计」中继续查看。",
                confirmText: "先保存",
                secondaryText: "直接退出",
                cancelText: "继续编辑",
              })
            : "undefined" == typeof wx || "function" != typeof wx.showModal
            ? Promise.resolve("secondary")
            : new Promise(function (t) {
                wx.showModal({
                  title: "保存提醒",
                  content: "当前手串已收拢但未保存，是否先保存再退出？",
                  confirmText: "先保存",
                  cancelText: "直接退出",
                  success: function (e) {
                    e && e.confirm
                      ? t("confirm")
                      : e && e.cancel
                      ? t("secondary")
                      : t("cancel");
                  },
                  fail: function () {
                    t("secondary");
                  },
                });
              }))
            .then(
              (function () {
                var a = e(
                  t().mark(function e(a) {
                    return t().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ("confirm" !== a) {
                              t.next = 9;
                              break;
                            }
                            return (t.next = 3), z(r);
                          case 3:
                            if (!t.sent) {
                              t.next = 7;
                              break;
                            }
                            return l(), t.abrupt("return");
                          case 7:
                            return d(), t.abrupt("return");
                          case 9:
                            if ("secondary" !== a) {
                              t.next = 12;
                              break;
                            }
                            return l(), t.abrupt("return");
                          case 12:
                            d();
                          case 13:
                          case "end":
                            return t.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return a.apply(this, arguments);
                };
              })()
            )
            .catch(function () {
              l();
            });
        else l();
      }
    },
    handleHomeGoToInspiration: function () {
      c(this, "inspiration"), n("slide");
    },
    handleHomeSlideTap: function (t) {
      var e = String(
        (t &&
          t.currentTarget &&
          t.currentTarget.dataset &&
          t.currentTarget.dataset.targetPath) ||
          ""
      ).trim();
      e && Y(this, e) && n("slide");
    },
    handleHomeOpenDesigner: function (t) {
      var e = this,
        r = String(
          (t &&
            t.currentTarget &&
            t.currentTarget.dataset &&
            t.currentTarget.dataset.designerId) ||
            ""
        )
          .trim()
          .toLowerCase(),
        i = String(
          (t &&
            t.currentTarget &&
            t.currentTarget.dataset &&
            t.currentTarget.dataset.designerName) ||
            ""
        ).trim(),
        o = String(
          (t &&
            t.currentTarget &&
            t.currentTarget.dataset &&
            (t.currentTarget.dataset.creatorUserId ||
              t.currentTarget.dataset.sourceDesignerId)) ||
            ""
        ).trim(),
        s = /^\d+$/.test(r) ? r : (r.match(/\d+/) || [])[0] || "",
        d =
          o ||
          s ||
          (function (t, e, r) {
            for (
              var n = t && t.data && "object" === a(t.data) ? t.data : {},
                i = [n.visibleFilteredPresets, n.filteredPresets, n.presets],
                o = E(e),
                s = String(r || "")
                  .trim()
                  .toLowerCase(),
                d = 0;
              d < i.length;
              d += 1
            )
              for (
                var u = Array.isArray(i[d]) ? i[d] : [], h = 0;
                h < u.length;
                h += 1
              ) {
                var c = u[h] && "object" === a(u[h]) ? u[h] : {},
                  l = String(
                    c.sourceDesignerId || c.source_designer_id || ""
                  ).trim();
                if (/^\d+$/.test(l)) {
                  var f = E(
                      c.sourceDesignerName ||
                        c.source_designer_name ||
                        c.authorName ||
                        c.author_name ||
                        c.creatorName ||
                        c.creator_name
                    ),
                    p = String(c.designerId || c.designer_id || "")
                      .trim()
                      .toLowerCase();
                  if ((o && f === o) || (s && p === s)) return l;
                }
              }
            return "";
          })(this, i, r),
        u = S("/pages/designer/index", {
          id: r || "designer",
          name: i,
          creatorUserId: d,
        });
      p(u, {
        methods: ["navigateTo", "redirectTo", "reLaunch"],
        onFailed: function () {
          "function" == typeof e.handlePresetCategoryChange
            ? e.handlePresetCategoryChange({
                currentTarget: {
                  dataset: { id: "designer", designerId: r || "designer" },
                },
              })
            : l(e, "inspiration");
        },
      }),
        n("slide");
    },
  };
}
function Z() {
  return {
    handleOpenGuide: function (t) {
      var e = t && t.currentTarget ? t.currentTarget.dataset.tab : "",
        a = Array.isArray(this.data && this.data.tutorialSlides)
          ? this.data.tutorialSlides
          : [],
        r = Array.isArray(this.data && this.data.operationTips)
          ? this.data.operationTips
          : [],
        i = a.length > 0,
        o = r.length > 0;
      this.setData({
        guideModalOpen: !0,
        guideTab: e || this.data.guideTab || "tips",
        operationTipIndex: o ? 1 : 0,
        currentOperationTip: o ? r[0] : null,
        tutorialStep: i ? 1 : 0,
        currentTutorialSlide: i ? a[0] : null,
      }),
        n("slide");
    },
    handleCloseGuide: function () {
      var t = Array.isArray(this.data && this.data.tutorialSlides)
          ? this.data.tutorialSlides
          : [],
        e = Array.isArray(this.data && this.data.operationTips)
          ? this.data.operationTips
          : [],
        a = t.length > 0,
        r = e.length > 0;
      this.setData({
        guideModalOpen: !1,
        operationTipIndex: r ? 1 : 0,
        currentOperationTip: r ? e[0] : null,
        tutorialStep: a ? 1 : 0,
        currentTutorialSlide: a ? t[0] : null,
      });
    },
    handleGuideTabChange: function (t) {
      var e = t.currentTarget.dataset.id,
        a = Array.isArray(this.data && this.data.tutorialSlides)
          ? this.data.tutorialSlides
          : [],
        r = Array.isArray(this.data && this.data.operationTips)
          ? this.data.operationTips
          : [],
        i = a.length > 0,
        o = r.length > 0;
      this.setData({
        guideTab: e,
        operationTipIndex: o ? 1 : 0,
        currentOperationTip: o ? r[0] : null,
        tutorialStep: i ? 1 : 0,
        currentTutorialSlide: i ? a[0] : null,
      }),
        n("slide");
    },
    handlePrevOperationTip: function () {
      var t = Array.isArray(this.data && this.data.operationTips)
        ? this.data.operationTips
        : [];
      if (t.length) {
        var e = t.length,
          a = Math.max(
            1,
            Number(this.data && this.data.operationTipIndex) || 1
          ),
          r = a <= 1 ? e : a - 1;
        this.setData({
          operationTipIndex: r,
          currentOperationTip: t[r - 1] || t[0],
        }),
          n("slide");
      }
    },
    handleNextOperationTip: function () {
      var t = Array.isArray(this.data && this.data.operationTips)
        ? this.data.operationTips
        : [];
      if (t.length) {
        var e = t.length,
          a = Math.max(
            1,
            Number(this.data && this.data.operationTipIndex) || 1
          ),
          r = a >= e ? 1 : a + 1;
        this.setData({
          operationTipIndex: r,
          currentOperationTip: t[r - 1] || t[0],
        }),
          n("slide");
      }
    },
    handlePrevTutorial: function () {
      var t = Array.isArray(this.data && this.data.tutorialSlides)
        ? this.data.tutorialSlides
        : [];
      if (t.length) {
        var e = Math.max(1, Number(this.data && this.data.tutorialStep) || 1),
          a = Math.max(1, e - 1);
        this.setData({
          tutorialStep: a,
          currentTutorialSlide: t[a - 1] || t[0],
        }),
          n("slide");
      }
    },
    handleNextTutorial: function () {
      var t = Array.isArray(this.data && this.data.tutorialSlides)
        ? this.data.tutorialSlides
        : [];
      if (t.length) {
        var e = t.length,
          a = Math.max(1, Number(this.data && this.data.tutorialStep) || 1),
          r = Math.min(e, a + 1);
        this.setData({
          tutorialStep: r,
          currentTutorialSlide: t[r - 1] || t[e - 1],
        }),
          n("slide");
      }
    },
    handleMeasureGenderChange: function (t) {
      var e = t.currentTarget.dataset.gender;
      this.setData({ measureGender: e, measureCards: o(e) }), n("slide");
    },
  };
}
function J() {
  return {
    handleEnterPhotoMode: function () {
      if (
        this.data.trayState.isStrung &&
        !(this.data.trayState.beadsCount < s)
      ) {
        var t = O(this, this.data.trayState);
        ("v7-stonelab-bg-fbfaf8" === this._diyPhotoShareImageVersion &&
          this._diyPhotoShareImageKey === t) ||
          ((this._diyPhotoShareImageUrl = ""),
          (this._diyPhotoShareImageKey = "")),
          this.setData({ diyPhotoSharePreparing: !0, diyPhotoShareReady: !1 }),
          h(this, !0),
          U(this, this.data.trayState),
          n("slide");
      }
    },
    handlePrepareDiyPhotoShare: function () {
      var a = this;
      return e(
        t().mark(function e() {
          var r;
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if (
                    (r = (a.data && a.data.trayState) || {}).isStrung &&
                    !(Number(r.beadsCount || 0) < s)
                  ) {
                    t.next = 4;
                    break;
                  }
                  return (
                    "function" == typeof a.showToast &&
                      a.showToast("请先收拢成串后再分享"),
                    t.abrupt("return")
                  );
                case 4:
                  return (t.next = 6), U(a, r, { showReadyToast: !0 });
                case 6:
                case "end":
                  return t.stop();
              }
          }, e);
        })
      )();
    },
    handleShareCard: function () {
      var t = (this.data && this.data.trayState) || {};
      if (!t.isStrung || Number(t.beadsCount || 0) < s)
        "function" == typeof this.showToast &&
          this.showToast("请先收拢成串后再分享");
      else {
        var e = String((this.data && this.data.currentSchemeName) || "").trim(),
          a = q(this, t) || F(this, t);
        (this.pendingSharePayload = {
          title: "".concat(e || "我的手串设计", " - StoneLab"),
          path: H(this, t),
          imageUrl: a,
        }),
          q(this, t) || U(this, t),
          n("pop");
      }
    },
    handleCloseShareCard: function () {
      this.setData({ showDiyShareModal: !1 }), n("pop");
    },
  };
}
module.exports = {
  createDomainActions: function () {
    return Object.freeze(Object.assign({}, Q(), Z(), J()));
  },
  createNavigationActions: Q,
  createGuideActions: Z,
  createPhotoShareActions: J,
};
