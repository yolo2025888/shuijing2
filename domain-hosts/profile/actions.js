var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/slicedToArray");
require("../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../@babel/runtime/helpers/typeof"),
  a = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../facades/v2/profile-facade"),
  o = require("./primary-tabs"),
  i =
    "function" == typeof o.buildPrimaryTabs
      ? o.buildPrimaryTabs
      : function () {
          return [];
        },
  s =
    require("../../pages/index/modules/methods/navigation-coordinator").applyLegacySwitchState,
  u = require("../../pages/index/modules/deps/workshop-deps"),
  c = u.playSound,
  l = u.navigateWithFallback,
  d = require("../../utils/navigation/navigate-with-fallback").openDiyEntry,
  f = require("./orders").createOrderMethods,
  p = require("./address").createAddressMethods,
  h = require("./content").createContentMethods,
  m = require("../../pages/index/modules/methods/runtime/runtime-ui"),
  g = require("../../pages/index/modules/methods/lifecycle-layout"),
  b = require("../../pages/index/modules/methods/trade-recovery"),
  y = require("../../pages/index/modules/methods/trade-checkout/trade-checkout-error-recovery"),
  v = require("../../pages/index/modules/methods/lifecycle-bootstrap/cache-sync/cache-sync-errors"),
  A = require("../../pages/index/modules/methods/lifecycle-bootstrap/cache-sync/cache-sync-report"),
  S = require("../../pages/index/modules/methods/lifecycle-bootstrap/cache-sync/cache-sync-retry"),
  P = require("../../constants/errorCodes").ERROR_CODE,
  x = require("../../pages/index/modules/deps/trade-deps"),
  w = require("../../pages/index/modules/deps/profile-deps"),
  k = require("../../pages/index/modules/shared/builders"),
  C = require("../../pages/index/modules/shared/formatters"),
  I = require("../../pages/index/modules/deps/lifecycle-deps"),
  L =
    "function" == typeof I.hasWechatLoginToken
      ? I.hasWechatLoginToken
      : function () {
          return !1;
        },
  T =
    "function" == typeof I.getWechatAuthProfile
      ? I.getWechatAuthProfile
      : function () {
          return null;
        },
  D =
    "function" == typeof I.loginByWechat
      ? I.loginByWechat
      : function () {
          return Promise.reject(new Error("LOGIN_METHOD_UNAVAILABLE"));
        },
  O =
    "function" == typeof I.getWechatAuthSession
      ? I.getWechatAuthSession
      : function () {
          return Promise.resolve(null);
        },
  _ =
    "function" == typeof I.logoutByWechat
      ? I.logoutByWechat
      : function () {
          return Promise.resolve();
        },
  M =
    "function" == typeof I.loadSchemes
      ? I.loadSchemes
      : function () {
          return [];
        },
  U =
    "function" == typeof I.normalizeSchemeItems
      ? I.normalizeSchemeItems
      : function (e) {
          return Array.isArray(e) ? e : [];
        },
  N =
    "function" == typeof I.getDefaultAddress
      ? I.getDefaultAddress
      : function () {
          return null;
        },
  E =
    "function" == typeof I.listAddresses
      ? I.listAddresses
      : function () {
          return [];
        },
  W =
    "function" == typeof I.getProfileDashboard
      ? I.getProfileDashboard
      : function () {
          return null;
        },
  j =
    ("function" == typeof I.getCurrentCreatorApplication &&
      I.getCurrentCreatorApplication,
    "function" == typeof I.getCreatorPanel && I.getCreatorPanel,
    "function" == typeof k.buildOrderItems
      ? k.buildOrderItems
      : function () {
          return [];
        }),
  R =
    "function" == typeof C.normalizePattern
      ? C.normalizePattern
      : function (e) {
          return Array.isArray(e) ? e : [];
        },
  q =
    "function" == typeof x.syncWechatProfile
      ? x.syncWechatProfile
      : function () {
          return Promise.resolve();
        },
  F = "function" == typeof x.uploadProfileImage ? x.uploadProfileImage : null,
  B =
    "function" == typeof x.loginByWechatPhone
      ? x.loginByWechatPhone
      : function () {
          return Promise.reject(new Error("PHONE_LOGIN_METHOD_UNAVAILABLE"));
        },
  V =
    "function" == typeof w.createAfterSaleByOrderNo
      ? w.createAfterSaleByOrderNo
      : function () {
          return Promise.reject(new Error("AFTER_SALE_METHOD_UNAVAILABLE"));
        },
  H =
    x && x.logger ? x.logger : { warn: function () {}, error: function () {} },
  z = new Set(["diy", "workshop"]);
function G(e) {
  return K.apply(this, arguments);
}
function K() {
  return (K = a(
    e().mark(function r(t) {
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (!t || "function" != typeof t.handleOpenContactQrPopup) {
                e.next = 4;
                break;
              }
              return (e.next = 3), t.handleOpenContactQrPopup();
            case 3:
              return e.abrupt("return");
            case 4:
              t &&
                "function" == typeof t.showToast &&
                t.showToast("请在个人中心联系客服");
            case 5:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function Q(e) {
  return X.apply(this, arguments);
}
function X() {
  return (X = a(
    e().mark(function r(t) {
      var a;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (
                "undefined" != typeof wx &&
                wx &&
                "function" == typeof wx.showModal
              ) {
                e.next = 2;
                break;
              }
              return e.abrupt("return", !0);
            case 2:
              return (
                (e.next = 4),
                new Promise(function (e) {
                  wx.showModal({
                    title: "申请退款/售后",
                    content:
                      "提交后订单会进入售后处理中，生产/发货可能暂停。如只是咨询问题，请先联系客服。",
                    confirmText: "继续申请",
                    cancelText: "联系客服",
                    success: e,
                    fail: function () {
                      return e({ confirm: !0 });
                    },
                  });
                })
              );
            case 4:
              if (!(a = e.sent) || !a.confirm) {
                e.next = 7;
                break;
              }
              return e.abrupt("return", !0);
            case 7:
              return (e.next = 9), G(t);
            case 9:
              return e.abrupt("return", !1);
            case 10:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function Y(e) {
  var r = String(e || "").trim();
  return /^(wxfile|file):\/\//i.test(r) || /^https?:\/\/(?:tmp|usr)\//i.test(r);
}
function J(e) {
  return String(e || "")
    .trim()
    .toLowerCase();
}
function Z(e, a) {
  var n = a && "object" === t(a) ? a : {},
    o = [
      ["source", String(e || "standalone_diy").trim() || "standalone_diy"],
      [
        "returnTab",
        ["home", "inspiration", "cart", "profile"].indexOf(
          String(n.returnTab || "profile")
            .trim()
            .toLowerCase()
        ) >= 0
          ? String(n.returnTab || "profile")
              .trim()
              .toLowerCase()
          : "profile",
      ],
    ].filter(function (e) {
      return e[1];
    });
  return o.length
    ? ""
        .concat("/pages/diy/index")
        .concat("/pages/diy/index".includes("?") ? "&" : "?")
        .concat(
          o
            .map(function (e) {
              var t = r(e, 2),
                a = t[0],
                n = t[1];
              return ""
                .concat(encodeURIComponent(a), "=")
                .concat(encodeURIComponent(String(n)));
            })
            .join("&")
        )
    : "/pages/diy/index";
}
function $(e) {
  return e && "object" === t(e) ? e : {};
}
function ee(e, r) {
  var t = String(r || "").trim(),
    a = String(e || "").trim();
  return a
    ? "null" === a || "undefined" === a || -1 !== a.indexOf("user-muted.svg")
      ? t
      : a
    : t;
}
function re(e, r) {
  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 260;
  if (!e || "object" !== t(e)) return !1;
  var n = String(r || "").trim() || "__default__",
    o = Date.now();
  (e._rapidNavActionMap && "object" === t(e._rapidNavActionMap)) ||
    (e._rapidNavActionMap = Object.create(null));
  var i = Number(e._rapidNavActionMap[n] || 0);
  return (
    (i > 0 && o - i < Math.max(80, Number(a) || 260)) ||
    ((e._rapidNavActionMap[n] = o), !1)
  );
}
function te(e) {
  var r = Number(e || 0);
  return !Number.isFinite(r) || r <= 0 ? 0 : Math.round(r);
}
function ae() {
  if ("undefined" == typeof wx || "function" != typeof wx.getStorageSync)
    return [];
  try {
    var e = wx.getStorageSync("jieshanshi_schemes");
    return Array.isArray(e) ? e : [];
  } catch (e) {
    return [];
  }
}
function ne(e, r) {
  return (
    (!Array.isArray(e) || 0 === e.length) && Array.isArray(r) && r.length > 0
  );
}
function oe(e) {
  var r = e && "object" === t(e) ? e : {},
    a = String(r.clientId || r.client_id || "").trim();
  if (a) return "client:".concat(a);
  var n = String(r.id || "").trim();
  if (n) return "id:".concat(n);
  var o = (function (e) {
    var r = e && "object" === t(e) ? e : {},
      a = Array.isArray(r.pattern)
        ? r.pattern
            .map(function (e) {
              return String(e || "").trim();
            })
            .filter(Boolean)
        : [];
    if (!a.length) return "";
    var n = Number.isFinite(Number(r.bgIndex)) ? Number(r.bgIndex) : 0,
      o = String(r.name || "").trim();
    return "".concat(o, "|").concat(n, "|").concat(a.join(","));
  })(r);
  return o ? "pattern:".concat(o) : "";
}
function ie(e, r) {
  var t = [],
    a = new Set(),
    n = function (e) {
      U(e || []).forEach(function (e) {
        var r = oe(e);
        r && !a.has(r) && (a.add(r), t.push(e));
      });
    };
  return n(e), n(r), t;
}
function se() {
  return {
    isLoggedIn: !1,
    userRole: "normal",
    isNavVisible: !0,
    profileSubView: "",
    showProfileShareModal: !1,
    savedSchemes: [],
    cartItems: [],
    checkedCartCount: 0,
    checkedCartTotal: 0,
    checkedCartTotalText: "0.0",
    selectedAddress: null,
    checkoutPreview: null,
    checkoutOptionGroups: [],
    selectedCheckoutOptions: {},
    checkoutOptionRefreshing: !1,
    isCheckingOut: !1,
    checkoutLaunching: !1,
    paymentFlowState: "IDLE",
    isConfirmPaying: !1,
    pendingPaymentOrderNo: "",
    pendingPaymentAmount: 0,
    profileSharePattern: [],
    showContentModal: !1,
    contentModalType: "",
    contentModalTitle: "",
    contentModalLoading: !1,
    contentModalError: "",
    contentModalText: "",
    profileUserId: 0,
    showOrderManagerModal: !1,
    orderManagerLoading: !1,
    orderManagerFilter: "all",
    orderManagerItems: [],
    orderManagerPage: 1,
    orderManagerPageSize: 8,
    orderManagerHasMore: !1,
    orderManagerTotal: 0,
    orderManagerError: "",
    orderManagerActiveOrderNo: "",
    orderManagerDetail: null,
    orderManagerDetailLoading: !1,
    orderManagerStatusLogs: [],
    orderManagerPaying: !1,
    orderManagerCancelling: !1,
    orderManagerConfirmingReceive: !1,
    orderManagerApplyingAfterSale: !1,
    showAddressManagerModal: !1,
    addressList: [],
    addressManagerLoading: !1,
    addressSubmitting: !1,
    addressFormMode: "create",
    editingAddressId: "",
    addressForm:
      ((e = !0),
      {
        receiverName: "",
        receiverPhone: "",
        province: "",
        city: "",
        district: "",
        street: "",
        detail: "",
        postalCode: "",
        tag: "",
        isDefault: !!e,
      }),
    orderSummary: {
      pendingPay: 0,
      pendingShip: 0,
      pendingReceive: 0,
      afterSale: 0,
    },
    creatorDashboardAvailable: !1,
    creatorStats: {
      available: !1,
      estimatedFund: "0.00",
      pendingSettlement: "0.00",
      adoptionCount: 0,
      monthlyAdoption: 0,
      publicSchemeCount: 0,
      activeSchemeCount: 0,
      featuredDesign: "暂无",
      referredCount: 0,
    },
    creatorIdentityStatus: "normal",
    creatorApplicationInfo: null,
    creatorPanelSummary: null,
    orderItems: j(),
  };
  var e;
}
module.exports = {
  createDomainActions: function () {
    var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      u =
        "function" == typeof o.buildLegacyProfileUrl
          ? o.buildLegacyProfileUrl
          : n.buildLegacyProfileUrl;
    function x(e) {
      e && e.data && "object" === t(e.data) && e.data;
      return !0;
    }
    function w(e) {
      var r = e && "object" === t(e) ? e : {};
      return (
        (!r.data || !0 !== r.data.isLoggedIn) &&
        "function" == typeof r.setData &&
        (r.setData({ showProfileAuthPrompt: !0, profileAuthSubmitting: !1 }),
        !0)
      );
    }
    return Object.assign({}, S, v, A, m, g, b, y, f(), p(), h(), {
      profileCoordinatorOpenAuthPrompt: function (e) {
        var r = $(e);
        this.setData({
          showProfileAuthPrompt: !0,
          profileAuthNickname: String(r.nickname || ""),
          profileAuthAvatarUrl: String(r.avatarUrl || ""),
          profileAuthSubmitting: !1,
        });
      },
      profileCoordinatorCloseAuthPrompt: function (e) {
        var r = { showProfileAuthPrompt: !1, profileAuthSubmitting: !1 };
        !0 === $(e).resetDraft &&
          ((r.profileAuthNickname = ""), (r.profileAuthAvatarUrl = "")),
          this.setData(r);
      },
      profileCoordinatorSetAuthSubmitting: function (e) {
        this.setData({ profileAuthSubmitting: !0 === e });
      },
      profileCoordinatorUpdateAuthDraft: function (e) {
        var r = $(e),
          t = {};
        Object.prototype.hasOwnProperty.call(r, "nickname") &&
          (t.profileAuthNickname = String(r.nickname || "")),
          Object.prototype.hasOwnProperty.call(r, "avatarUrl") &&
            (t.profileAuthAvatarUrl = String(r.avatarUrl || "")),
          Object.keys(t).length && this.setData(t);
      },
      profileCoordinatorApplyUserProfile: function (e) {
        var r = $(e),
          t = String(r.nickname || "").trim() || "微信用户",
          a = ee(r.avatarUrl, this.data.profileAvatarFallback),
          n =
            Object.prototype.hasOwnProperty.call(r, "userId") ||
            Object.prototype.hasOwnProperty.call(r, "id"),
          o = te(this.data && this.data.profileUserId),
          i = n ? te(r.userId || r.id) : o;
        this.setData({
          profileNickname: t,
          profileAvatarUrl: a,
          profileUserId: i,
        });
      },
      profileCoordinatorSyncSharePatternFromSchemes: function (e) {
        var r = Array.isArray(e) ? e : [];
        if (r.length) {
          var t = $(r[0]);
          this.setData({ profileSharePattern: R(t.pattern) });
        }
      },
      profileCoordinatorSetSharePattern: function (e) {
        this.setData({ profileSharePattern: R(e) });
      },
      profileCoordinatorSetShareModalVisible: function (e) {
        this.setData({ showProfileShareModal: !0 === e });
      },
      profileCoordinatorApplyDashboardState: function (e) {
        var r = $(e),
          t = {};
        if (
          (Object.prototype.hasOwnProperty.call(r, "selectedAddress") &&
            (t.selectedAddress = r.selectedAddress || null),
          Object.prototype.hasOwnProperty.call(r, "addressList") &&
            (t.addressList = Array.isArray(r.addressList) ? r.addressList : []),
          Object.prototype.hasOwnProperty.call(r, "orderSummary"))
        ) {
          var a = $(r.orderSummary);
          (t.orderSummary = a), (t.orderItems = j(a));
        }
        Object.prototype.hasOwnProperty.call(r, "creatorDashboardAvailable") &&
          (t.creatorDashboardAvailable = !0 === r.creatorDashboardAvailable),
          Object.prototype.hasOwnProperty.call(r, "creatorStats") &&
            (t.creatorStats = $(r.creatorStats)),
          Object.keys(t).length && this.setData(t);
      },
      profileCoordinatorBuildLogoutResetPayload: function () {
        return se();
      },
      profileCoordinatorApplyLogoutResetPayload: function (e) {
        var r = Object.assign(
          {},
          this.profileCoordinatorBuildLogoutResetPayload(),
          $(e)
        );
        this.setData(r);
      },
      handleRootTap: function () {
        this.handleExitPhotoMode();
      },
      handleExitPhotoMode: function () {
        this.data.photoMode && (this.setData({ photoMode: !1 }), c("slide"));
      },
      handleSwitchTab: function (e) {
        var r = this;
        if (!re(this, "profile-bottom-tab-switch")) {
          var t = J(
            e && e.currentTarget && e.currentTarget.dataset
              ? String(
                  e.currentTarget.dataset.id ||
                    e.currentTarget.dataset.tab ||
                    ""
                ).trim()
              : ""
          );
          if ((c("slide"), z.has(t))) {
            var a = J(
                this.data && (this.data.activeTab || this.data.navActiveTab)
              ),
              n =
                ["home", "inspiration", "cart", "profile"].indexOf(a) >= 0
                  ? a
                  : "profile",
              o = Z("standalone_diy_tab_switch", { returnTab: n });
            d(o, "standalone_diy_tab_switch", n, {
              methods: ["navigateTo", "redirectTo", "reLaunch"],
              fallbackMethods: ["navigateTo", "redirectTo", "reLaunch"],
              onFailed: function () {
                l(Z("standalone_diy_tab_switch_fallback", { returnTab: n }), {
                  methods: ["navigateTo", "redirectTo", "reLaunch"],
                  onFailed: function () {
                    "function" == typeof r.showToast &&
                      r.showToast("进入 DIY 失败，请重试");
                  },
                });
              },
            });
          } else s(this, t || "home");
        }
      },
      syncPrimaryTabs: function () {
        this.setData({
          activeTab: "profile",
          activePrimaryTab: "profile",
          primaryTabs: i("profile"),
        });
      },
      handleCycleRole: function () {
        this.handleProfileProtectedAction() &&
          this.showToast("身份角色以后台为准");
      },
      handleCompleteWechatProfile: function () {
        var r = this;
        return a(
          e().mark(function t() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (r.handleProfileProtectedAction()) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    try {
                      "function" == typeof r.promptWechatProfileAuthIfNeeded
                        ? r.promptWechatProfileAuthIfNeeded()
                        : r.setData({ showProfileAuthPrompt: !0 });
                    } catch (e) {
                      "function" == typeof r.reportBusinessError
                        ? r.reportBusinessError(
                            "Update profile",
                            e,
                            "更新头像昵称失败，请稍后重试"
                          )
                        : r.showToast("更新头像昵称失败，请稍后重试");
                    }
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )();
      },
      handleProfileAvatarError: function () {
        this.setData({ profileAvatarUrl: this.data.profileAvatarFallback });
      },
      applyAuthUserProfile: function (e) {
        var r = e && "object" === t(e) ? e : {},
          a = String(r.nickname || "").trim() || "微信用户",
          n = ee(r.avatarUrl || r.avatar_url, this.data.profileAvatarFallback);
        this.profileCoordinatorApplyUserProfile({ nickname: a, avatarUrl: n }),
          this.profileCoordinatorCloseAuthPrompt();
      },
      ensureLoginState: function (r) {
        var n = this;
        return a(
          e().mark(function a() {
            var o, i, s, u;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = Object.assign(
                          { silent: !1, forceRefresh: !1 },
                          r || {}
                        )),
                        (e.prev = 1),
                        (e.next = 4),
                        D({ forceRefresh: !!o.forceRefresh })
                      );
                    case 4:
                      if (
                        ((i = e.sent),
                        (s = i || null) && s.user && !0 !== s.fromCache)
                      ) {
                        e.next = 19;
                        break;
                      }
                      return (e.prev = 7), (e.next = 10), O();
                    case 10:
                      (u = e.sent) && "object" === t(u) && (s = u),
                        (e.next = 19);
                      break;
                    case 14:
                      if (
                        ((e.prev = 14), (e.t0 = e.catch(7)), !o.forceRefresh)
                      ) {
                        e.next = 18;
                        break;
                      }
                      throw e.t0;
                    case 18:
                      n.reportInitIssue("auth_me_sync", e.t0, {
                        toast: !1,
                        fallbackMessage: "登录状态同步失败",
                      });
                    case 19:
                      return (
                        s && s.user && n.applyAuthUserProfile(s.user),
                        n.data.isLoggedIn || n.setData({ isLoggedIn: !0 }),
                        e.abrupt("return", !0)
                      );
                    case 24:
                      throw (
                        ((e.prev = 24),
                        (e.t1 = e.catch(1)),
                        n.shouldClearAuthSessionOnLoginError(e.t1) &&
                          (_(),
                          n.data.isLoggedIn && n.setData({ isLoggedIn: !1 })),
                        o.silent ||
                          n.showToast(
                            n.resolveInitErrorToast(
                              e.t1,
                              "登录失败，请稍后重试"
                            )
                          ),
                        e.t1)
                      );
                    case 29:
                    case "end":
                      return e.stop();
                  }
              },
              a,
              null,
              [
                [1, 24],
                [7, 14],
              ]
            );
          })
        )();
      },
      shouldClearAuthSessionOnLoginError: function (e) {
        if (this.getInitErrorCode(e) === P.AUTH_INVALID) return !0;
        var r = String(this.getErrorText(e) || "").toUpperCase();
        return (
          r.indexOf("AUTH_TOKEN_REQUIRED") >= 0 ||
          r.indexOf("AUTH_TOKEN_INVALID") >= 0 ||
          r.indexOf("AUTH_TOKEN_EXPIRED") >= 0 ||
          r.indexOf("AUTH_TOKEN_REVOKED") >= 0 ||
          r.indexOf("AUTH_CONTEXT_MISSING") >= 0
        );
      },
      hydrateProfileDomainAfterAuth: function (e) {
        var r = Object.assign({ force: !1, profileVisible: !0 }, e || {});
        return Promise.all([
          this.loadPersistedData(),
          this.loadAddressAndDashboard({
            force: !0 === r.force,
            profileVisible: !0 === r.profileVisible,
          }),
        ]);
      },
      resolvePhoneAuthDetailToast: function (e) {
        var r = Number(e && e.errno),
          t = String((e && e.errMsg) || "").toLowerCase();
        return 102 === r
          ? "当前 AppID 未开通手机号快速验证"
          : 1400001 === r
          ? "手机号验证额度不足"
          : t.indexOf("user deny") >= 0 || t.indexOf("cancel") >= 0
          ? "你已取消授权"
          : t.indexOf("no permission") >= 0 || t.indexOf("not support") >= 0
          ? "当前环境不支持手机号授权，请真机调试"
          : "获取手机号失败，请重试";
      },
      handlePhoneLoginCore: function (r) {
        var t = this;
        return a(
          e().mark(function a() {
            var n, o, i;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!t._phoneLoginInProgress) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", !1);
                    case 2:
                      if (
                        ((n = (r && r.detail) || {}),
                        (o = n && n.code ? String(n.code) : ""))
                      ) {
                        e.next = 8;
                        break;
                      }
                      return (
                        H.warn("getPhoneNumber failed detail:", n),
                        t.showToast(t.resolvePhoneAuthDetailToast(n)),
                        e.abrupt("return", !1)
                      );
                    case 8:
                      if (t.data.isLoggedIn) {
                        e.next = 14;
                        break;
                      }
                      return (
                        (e.next = 11),
                        t.handleWechatLoginCore({ successToast: !1 })
                      );
                    case 11:
                      if (e.sent) {
                        e.next = 14;
                        break;
                      }
                      return e.abrupt("return", !1);
                    case 14:
                      return (
                        t.showToast("正在绑定手机号..."),
                        (t._phoneLoginInProgress = !0),
                        (e.prev = 16),
                        (e.next = 19),
                        B(o)
                      );
                    case 19:
                      return (
                        (i = e.sent) &&
                          i.user &&
                          "function" == typeof t.applyAuthUserProfile &&
                          t.applyAuthUserProfile(i.user),
                        t.setData({ isLoggedIn: !0 }),
                        x(t) &&
                          t.hydrateProfileDomainAfterAuth({
                            force: !0,
                            profileVisible: !0,
                          }),
                        t.showToast("手机号已绑定"),
                        e.abrupt("return", !0)
                      );
                    case 27:
                      return (
                        (e.prev = 27),
                        (e.t0 = e.catch(16)),
                        t.reportBusinessError(
                          "Bind phone",
                          e.t0,
                          "手机号绑定失败，请稍后重试"
                        ),
                        e.abrupt("return", !1)
                      );
                    case 31:
                      return (
                        (e.prev = 31),
                        (t._phoneLoginInProgress = !1),
                        e.finish(31)
                      );
                    case 34:
                    case "end":
                      return e.stop();
                  }
              },
              a,
              null,
              [[16, 27, 31, 34]]
            );
          })
        )();
      },
      handleCheckoutPhoneLogin: function (r) {
        var t = this;
        return a(
          e().mark(function a() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), t.handlePhoneLoginCore(r);
                  case 2:
                    if (e.sent) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt("return");
                  case 5:
                    return (
                      "function" == typeof t.promptWechatProfileAuthIfNeeded &&
                        t.promptWechatProfileAuthIfNeeded(),
                      (e.next = 8),
                      t.handleStartCheckout({ skipLoginCheck: !0 })
                    );
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, a);
          })
        )();
      },
      handleCheckoutLogin: function () {
        var r = this;
        return a(
          e().mark(function t() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (r.data.isLoggedIn || r.data.showProfileAuthPrompt) {
                      e.next = 4;
                      break;
                    }
                    return (
                      (r._pendingWechatLoginAction = "checkout"),
                      w(r),
                      e.abrupt("return")
                    );
                  case 4:
                    return (
                      (e.next = 6),
                      r.handleWechatLoginCore({ successToast: !1 })
                    );
                  case 6:
                    if (e.sent) {
                      e.next = 9;
                      break;
                    }
                    return e.abrupt("return");
                  case 9:
                    return (
                      "function" == typeof r.promptWechatProfileAuthIfNeeded &&
                        r.promptWechatProfileAuthIfNeeded(),
                      (e.next = 12),
                      r.handleStartCheckout({ skipLoginCheck: !0 })
                    );
                  case 12:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )();
      },
      ensureWechatProfileAfterLogin: function (r) {
        var t = this;
        return a(
          e().mark(function a() {
            var n, o;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (t.data.isLoggedIn) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", !1);
                  case 2:
                    return (
                      (n = Object.assign({ required: !0 }, r || {})),
                      (e.next = 5),
                      t.tryCaptureWechatUserProfile({ silent: !n.required })
                    );
                  case 5:
                    if ((o = e.sent)) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt("return", !1);
                  case 8:
                    return (e.next = 10), t.applyAndSyncWechatUserProfile(o);
                  case 10:
                    return e.abrupt("return", !0);
                  case 11:
                  case "end":
                    return e.stop();
                }
            }, a);
          })
        )();
      },
      handlePhoneLogin: function (r) {
        var t = this;
        return a(
          e().mark(function a() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), t.handlePhoneLoginCore(r);
                  case 2:
                    if (e.sent) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt("return");
                  case 5:
                    "function" == typeof t.promptWechatProfileAuthIfNeeded &&
                      t.promptWechatProfileAuthIfNeeded();
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, a);
          })
        )();
      },
      handleWechatLoginCore: function (r) {
        var t = this;
        return a(
          e().mark(function a() {
            var n;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!t.data.isLoggedIn) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", !0);
                    case 2:
                      if (!t._wechatLoginInProgress) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return", !1);
                    case 4:
                      return (
                        (n = Object.assign({ successToast: !0 }, r || {})),
                        t.showToast("正在登录..."),
                        (t._wechatLoginInProgress = !0),
                        (e.prev = 7),
                        (e.next = 10),
                        t.ensureLoginState({ silent: !1, forceRefresh: !0 })
                      );
                    case 10:
                      return (
                        x(t) &&
                          t.hydrateProfileDomainAfterAuth({
                            force: !0,
                            profileVisible: !0,
                          }),
                        !1 !== n.successToast && t.showToast("登录成功"),
                        e.abrupt("return", !0)
                      );
                    case 15:
                      return (
                        (e.prev = 15),
                        (e.t0 = e.catch(7)),
                        H.error("Login failed", e.t0),
                        e.abrupt("return", !1)
                      );
                    case 19:
                      return (
                        (e.prev = 19),
                        (t._wechatLoginInProgress = !1),
                        e.finish(19)
                      );
                    case 22:
                    case "end":
                      return e.stop();
                  }
              },
              a,
              null,
              [[7, 15, 19, 22]]
            );
          })
        )();
      },
      handleLogin: function () {
        var r = this;
        return a(
          e().mark(function t() {
            var a;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (r.data.isLoggedIn || r.data.showProfileAuthPrompt) {
                      e.next = 3;
                      break;
                    }
                    return w(r), e.abrupt("return");
                  case 3:
                    return (e.next = 5), r.handleWechatLoginCore();
                  case 5:
                    if (e.sent) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt("return");
                  case 8:
                    if (
                      ((a = String(r._pendingWechatLoginAction || "")),
                      (r._pendingWechatLoginAction = ""),
                      "function" == typeof r.promptWechatProfileAuthIfNeeded &&
                        r.promptWechatProfileAuthIfNeeded(),
                      "checkout" !== a ||
                        "function" != typeof r.handleStartCheckout)
                    ) {
                      e.next = 14;
                      break;
                    }
                    return (
                      (e.next = 14),
                      r.handleStartCheckout({ skipLoginCheck: !0 })
                    );
                  case 14:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )();
      },
      tryCaptureWechatUserProfile: function (r) {
        var n = this;
        return a(
          e().mark(function a() {
            var o, i, s, u, c;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((o = Object.assign({ silent: !0 }, r || {})),
                        wx.getUserProfile)
                      ) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return", null);
                    case 3:
                      return (
                        (e.prev = 3),
                        (e.next = 6),
                        new Promise(function (e, r) {
                          wx.getUserProfile({
                            desc: "用于完善小程序个人头像与昵称",
                            success: e,
                            fail: r,
                          });
                        })
                      );
                    case 6:
                      if (
                        ((i = e.sent),
                        (s =
                          i && i.userInfo && "object" === t(i.userInfo)
                            ? i.userInfo
                            : null))
                      ) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt("return", null);
                    case 10:
                      if (
                        ((u = String(s.nickName || "").trim()),
                        (c = String(s.avatarUrl || "").trim()),
                        u || c)
                      ) {
                        e.next = 14;
                        break;
                      }
                      return e.abrupt("return", null);
                    case 14:
                      return e.abrupt("return", {
                        nickname: u || "微信用户",
                        avatarUrl: c,
                      });
                    case 17:
                      return (
                        (e.prev = 17),
                        (e.t0 = e.catch(3)),
                        H.warn("Capture wechat profile failed", {
                          message: String(
                            (e.t0 && (e.t0.errMsg || e.t0.message)) || ""
                          ),
                        }),
                        o.silent ||
                          n.showToast("未获取微信头像昵称，已继续登录"),
                        e.abrupt("return", null)
                      );
                    case 22:
                    case "end":
                      return e.stop();
                  }
              },
              a,
              null,
              [[3, 17]]
            );
          })
        )();
      },
      shouldRequestWechatProfile: function () {
        var e = String(this.data.profileNickname || "").trim(),
          r = String(this.data.profileAvatarUrl || "").trim(),
          t = String(this.data.profileAvatarFallback || "").trim();
        return !(!!e && "微信用户" !== e && !!r && r !== t);
      },
      promptWechatProfileAuthIfNeeded: function () {
        if (this.data.isLoggedIn)
          if (this.shouldRequestWechatProfile()) {
            var e = String(this.data.profileNickname || "").trim(),
              r = String(this.data.profileAvatarUrl || "").trim(),
              t = String(this.data.profileAvatarFallback || "").trim();
            this.profileCoordinatorOpenAuthPrompt({
              nickname: e && "微信用户" !== e ? e : "",
              avatarUrl: r && r !== t ? r : "",
            });
          } else this.profileCoordinatorCloseAuthPrompt({ resetDraft: !0 });
      },
      handleProfileNicknameInput: function (e) {
        var r = String((e && e.detail && e.detail.value) || "").trim();
        this.profileCoordinatorUpdateAuthDraft({ nickname: r.slice(0, 24) });
      },
      handleChooseWechatAvatar: function (e) {
        var r = String(
          (e && e.detail && (e.detail.avatarUrl || e.detail.tempFilePath)) || ""
        ).trim();
        r
          ? this.profileCoordinatorUpdateAuthDraft({ avatarUrl: r })
          : this.showToast("未获取头像，请重试");
      },
      uploadProfileAvatarToCloud: function (r) {
        return a(
          e().mark(function t() {
            var a, n, o;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if ((a = String(r || "").trim())) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return", "");
                  case 3:
                    if (Y(a)) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt("return", /^https?:\/\//i.test(a) ? a : "");
                  case 5:
                    if (
                      "function" == typeof F &&
                      "undefined" != typeof wx &&
                      "function" == typeof wx.uploadFile
                    ) {
                      e.next = 7;
                      break;
                    }
                    throw new Error("PROFILE_AVATAR_UPLOAD_UNSUPPORTED");
                  case 7:
                    return (e.next = 9), F(a, "avatar");
                  case 9:
                    if (
                      ((n = e.sent), (o = String((n && n.url) || "").trim()))
                    ) {
                      e.next = 13;
                      break;
                    }
                    throw new Error("PROFILE_AVATAR_UPLOAD_URL_MISSING");
                  case 13:
                    return e.abrupt("return", o);
                  case 14:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )();
      },
      applyAndSyncWechatUserProfile: function (r) {
        var n = this;
        return a(
          e().mark(function a() {
            var o, i, s;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if ((o = r && "object" === t(r) ? r : null)) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return");
                  case 3:
                    return (
                      (e.next = 5),
                      q({
                        nickname: String(o.nickname || "").trim(),
                        avatarUrl: String(o.avatarUrl || "").trim(),
                      })
                    );
                  case 5:
                    return (
                      (i = e.sent),
                      (s = i && i.user && "object" === t(i.user) ? i.user : o),
                      "function" == typeof n.applyAuthUserProfile
                        ? n.applyAuthUserProfile(s)
                        : n.profileCoordinatorApplyUserProfile({
                            nickname: s.nickname,
                            avatarUrl: s.avatarUrl,
                          }),
                      e.abrupt("return", i)
                    );
                  case 9:
                  case "end":
                    return e.stop();
                }
            }, a);
          })
        )();
      },
      handleAuthorizeWechatProfile: function () {
        var r = this;
        return a(
          e().mark(function t() {
            var a, n, o, i;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (r.data.isLoggedIn) {
                        e.next = 3;
                        break;
                      }
                      return (
                        r.profileCoordinatorCloseAuthPrompt(),
                        e.abrupt("return")
                      );
                    case 3:
                      if (
                        ((a =
                          String(r.data.profileAuthNickname || "").trim() ||
                          String(r.data.profileNickname || "").trim() ||
                          "微信用户"),
                        (n = String(r.data.profileAuthAvatarUrl || "").trim()),
                        (o = String(r.data.profileAvatarFallback || "").trim()),
                        (i = n),
                        a && "微信用户" !== a)
                      ) {
                        e.next = 10;
                        break;
                      }
                      return r.showToast("请先填写昵称"), e.abrupt("return");
                    case 10:
                      if (
                        (r.profileCoordinatorSetAuthSubmitting(!0),
                        (e.prev = 11),
                        !Y(n))
                      ) {
                        e.next = 18;
                        break;
                      }
                      return (e.next = 15), r.uploadProfileAvatarToCloud(n);
                    case 15:
                      (i = e.sent), (e.next = 19);
                      break;
                    case 18:
                      i = "";
                    case 19:
                      return (
                        (i && i !== o) || (i = ""),
                        (e.next = 22),
                        r.applyAndSyncWechatUserProfile({
                          nickname: a,
                          avatarUrl: i,
                        })
                      );
                    case 22:
                      r.profileCoordinatorCloseAuthPrompt({ resetDraft: !0 }),
                        r.showToast("头像昵称已更新"),
                        (e.next = 31);
                      break;
                    case 26:
                      (e.prev = 26),
                        (e.t0 = e.catch(11)),
                        H.warn("Authorize wechat profile failed", {
                          message: String(
                            (e.t0 && (e.t0.errMsg || e.t0.message)) || ""
                          ),
                          error: e.t0,
                        }),
                        r.profileCoordinatorSetAuthSubmitting(!1),
                        r.showToast("头像昵称更新失败，请重试");
                    case 31:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[11, 26]]
            );
          })
        )();
      },
      handleCloseProfileAuthPrompt: function () {
        (this._pendingWechatLoginAction = ""),
          this.profileCoordinatorCloseAuthPrompt();
      },
      handleOrderManagerApplyAfterSale: function () {
        var r = this;
        return a(
          e().mark(function t() {
            var a, n, o, i, s, u, l, d, f, p, h;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (r.handleProfileProtectedAction()) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      if (!r.data.orderManagerApplyingAfterSale) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return");
                    case 4:
                      if (
                        ((a = r.data.orderManagerDetail || null),
                        (n = String((a && a.orderNo) || "")),
                        (o = !!(a && a.actions && a.actions.canAfterSale)),
                        n && o)
                      ) {
                        e.next = 10;
                        break;
                      }
                      return (
                        r.showToast("当前订单不可申请售后"), e.abrupt("return")
                      );
                    case 10:
                      return (e.next = 12), Q(r);
                    case 12:
                      if (e.sent) {
                        e.next = 15;
                        break;
                      }
                      return e.abrupt("return");
                    case 15:
                      if (
                        ((i = Array.isArray(a && a.items) ? a.items : []),
                        (s = 0),
                        !(i.length > 1))
                      ) {
                        e.next = 37;
                        break;
                      }
                      return (
                        (e.prev = 18),
                        (e.next = 21),
                        new Promise(function (e, r) {
                          wx.showActionSheet({
                            itemList: i.map(function (e) {
                              var r = String((e && e.name) || "定制方案"),
                                t = String((e && e.itemAmountText) || "");
                              return "".concat(r, " ").concat(t).trim();
                            }),
                            success: e,
                            fail: r,
                          });
                        })
                      );
                    case 21:
                      if (
                        ((u = e.sent),
                        (l = Number(u && u.tapIndex)),
                        !(!Number.isFinite(l) || l < 0 || l >= i.length))
                      ) {
                        e.next = 25;
                        break;
                      }
                      return e.abrupt("return");
                    case 25:
                      (s = Number((i[l] && i[l].id) || 0)), (e.next = 35);
                      break;
                    case 28:
                      if (
                        ((e.prev = 28),
                        (e.t0 = e.catch(18)),
                        !(
                          String((e.t0 && e.t0.errMsg) || "").indexOf(
                            "cancel"
                          ) >= 0
                        ))
                      ) {
                        e.next = 33;
                        break;
                      }
                      return e.abrupt("return");
                    case 33:
                      return (
                        r.showToast("选择售后商品失败"), e.abrupt("return")
                      );
                    case 35:
                      e.next = 38;
                      break;
                    case 37:
                      s = Number((i[0] && i[0].id) || 0);
                    case 38:
                      return (
                        (d = [
                          "珠子有破损",
                          "收到商品与预期不符",
                          "尺寸不合适",
                          "其他退款/售后问题",
                        ]),
                        (f = ""),
                        (e.prev = 40),
                        (e.next = 43),
                        new Promise(function (e, r) {
                          wx.showActionSheet({
                            itemList: d,
                            success: e,
                            fail: r,
                          });
                        })
                      );
                    case 43:
                      if (
                        ((p = e.sent),
                        (h = Number(p && p.tapIndex)),
                        !(!Number.isFinite(h) || h < 0 || h >= d.length))
                      ) {
                        e.next = 47;
                        break;
                      }
                      return e.abrupt("return");
                    case 47:
                      (f = d[h]), (e.next = 57);
                      break;
                    case 50:
                      if (
                        ((e.prev = 50),
                        (e.t1 = e.catch(40)),
                        !(
                          String((e.t1 && e.t1.errMsg) || "").indexOf(
                            "cancel"
                          ) >= 0
                        ))
                      ) {
                        e.next = 55;
                        break;
                      }
                      return e.abrupt("return");
                    case 55:
                      return (
                        r.showToast("选择售后原因失败"), e.abrupt("return")
                      );
                    case 57:
                      if (f) {
                        e.next = 59;
                        break;
                      }
                      return e.abrupt("return");
                    case 59:
                      return (
                        r.setData({ orderManagerApplyingAfterSale: !0 }),
                        (e.prev = 60),
                        (e.next = 63),
                        V(n, {
                          orderItemId: s > 0 ? s : void 0,
                          type: "REFUND",
                          reason: f,
                        })
                      );
                    case 63:
                      return (
                        r.showToast("售后申请已提交"),
                        c("pop"),
                        (e.next = 67),
                        r.loadOrderManagerDetail(n, { silent: !1 })
                      );
                    case 67:
                      r.loadAddressAndDashboard({ force: !0 }), (e.next = 75);
                      break;
                    case 70:
                      (e.prev = 70),
                        (e.t2 = e.catch(60)),
                        H.error("Apply after sale failed", e.t2),
                        String((e.t2 && (e.t2.code || e.t2.message)) || "")
                          .toUpperCase()
                          .indexOf("AFTER_SALE_ALREADY_EXISTS") >= 0
                          ? r.showToast("该订单已存在售后申请")
                          : r.showToast("售后申请提交失败");
                    case 75:
                      return (
                        (e.prev = 75),
                        r.setData({ orderManagerApplyingAfterSale: !1 }),
                        e.finish(75)
                      );
                    case 78:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [
                [18, 28],
                [40, 50],
                [60, 70, 75, 78],
              ]
            );
          })
        )();
      },
      loadPersistedData: function () {
        var r = this;
        return a(
          e().mark(function t() {
            var a, n, o, i, s, u, c;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (r.data.isLoggedIn) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (
                        (a = U(r.data.savedSchemes || [])),
                        (n = U(ae())),
                        (o = a.length ? a : n),
                        (e.prev = 5),
                        (e.next = 8),
                        r.withRetry(
                          function () {
                            return Promise.resolve(M());
                          },
                          { attempts: 2, delayMs: 200 }
                        )
                      );
                    case 8:
                      (i = e.sent),
                        (s = U(i)),
                        (u = ne(s, o)),
                        (c = ie(s, o)),
                        u &&
                          H.warn(
                            "[profile] cloud schemes empty after sync, recover local schemes",
                            { count: c.length }
                          ),
                        r.setData({ savedSchemes: c }),
                        c.length &&
                          (r.profileCoordinatorSyncSharePatternFromSchemes(c),
                          "function" == typeof r.prewarmSavedSchemeShareCards &&
                            r.prewarmSavedSchemeShareCards(c)),
                        (u || c.length > s.length) && r.persistSchemes(c),
                        (e.next = 26);
                      break;
                    case 18:
                      if (((e.prev = 18), (e.t0 = e.catch(5)), !o.length)) {
                        e.next = 25;
                        break;
                      }
                      return (
                        r.setData({ savedSchemes: o }),
                        r.profileCoordinatorSyncSharePatternFromSchemes(o),
                        "function" == typeof r.prewarmSavedSchemeShareCards &&
                          r.prewarmSavedSchemeShareCards(o),
                        e.abrupt("return")
                      );
                    case 25:
                      r.reportInitIssue("profile_schemes", e.t0, {
                        toast: !1,
                        fallbackMessage: "方案列表加载失败",
                      });
                    case 26:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[5, 18]]
            );
          })
        )();
      },
      loadAddressAndDashboard: function (t) {
        var n = this;
        return a(
          e().mark(function o() {
            var i, s, u, c, l;
            return e().wrap(function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    if (n.data.isLoggedIn) {
                      o.next = 2;
                      break;
                    }
                    return o.abrupt("return", !1);
                  case 2:
                    if (
                      ((i = Object.assign({ force: !1 }, t || {})),
                      (s = !0 === i.force),
                      (u = Date.now()),
                      !n._profileDashboardSyncPromise)
                    ) {
                      o.next = 7;
                      break;
                    }
                    return o.abrupt("return", n._profileDashboardSyncPromise);
                  case 7:
                    if (s) {
                      o.next = 11;
                      break;
                    }
                    if (
                      !(
                        (c = Number(n._profileDashboardSyncedAt || 0)) > 0 &&
                        u - c < 25e3
                      )
                    ) {
                      o.next = 11;
                      break;
                    }
                    return o.abrupt("return", !0);
                  case 11:
                    return (
                      (l = (function () {
                        var t = a(
                          e().mark(function t() {
                            var a, o, i, s, u, c, l, d, f, p, h, m, g, b, y, v;
                            return e().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2),
                                      Promise.allSettled([
                                        n.withRetry(
                                          function () {
                                            return Promise.resolve(N());
                                          },
                                          { attempts: 2, delayMs: 200 }
                                        ),
                                        n.withRetry(
                                          function () {
                                            return Promise.resolve(E());
                                          },
                                          { attempts: 2, delayMs: 200 }
                                        ),
                                        n.withRetry(
                                          function () {
                                            return Promise.resolve(W());
                                          },
                                          { attempts: 2, delayMs: 220 }
                                        ),
                                      ])
                                    );
                                  case 2:
                                    return (
                                      (a = e.sent),
                                      (o = r(a, 3)),
                                      (i = o[0]),
                                      (s = o[1]),
                                      (u = o[2]),
                                      "rejected" === i.status &&
                                        n.reportInitIssue(
                                          "address_default",
                                          i.reason,
                                          {
                                            toast: !1,
                                            fallbackMessage:
                                              "默认收货地址加载失败",
                                          }
                                        ),
                                      "rejected" === s.status &&
                                        n.reportInitIssue(
                                          "address_list",
                                          s.reason,
                                          {
                                            toast: !1,
                                            fallbackMessage:
                                              "收货地址列表加载失败",
                                          }
                                        ),
                                      "rejected" === u.status &&
                                        n.reportInitIssue(
                                          "profile_dashboard",
                                          u.reason,
                                          {
                                            toast: !1,
                                            fallbackMessage: "个人面板加载失败",
                                          }
                                        ),
                                      "rejected" === i.status &&
                                        "rejected" === s.status &&
                                        "rejected" === u.status &&
                                        n.reportInitIssue(
                                          "profile_bootstrap",
                                          u.reason || s.reason || i.reason,
                                          {
                                            toast: !0,
                                            fallbackMessage:
                                              "个人中心数据加载失败，请稍后下拉重试",
                                          }
                                        ),
                                      (c =
                                        "fulfilled" === i.status
                                          ? i.value
                                          : null),
                                      (l =
                                        "fulfilled" === s.status
                                          ? s.value
                                          : n.data.addressList || []),
                                      (d =
                                        "fulfilled" === u.status
                                          ? u.value
                                          : null),
                                      (f =
                                        c ||
                                        (l && l[0] ? l[0] : null) ||
                                        n.data.selectedAddress ||
                                        null),
                                      (p = {
                                        available: !1,
                                        estimatedFund: "0.00",
                                        pendingSettlement: "0.00",
                                        adoptionCount: 0,
                                        monthlyAdoption: 0,
                                        publicSchemeCount: 0,
                                        activeSchemeCount: 0,
                                        featuredDesign: "暂无",
                                        referredCount: 0,
                                      }),
                                      (h =
                                        !0 ===
                                        n.data.enableCreatorDashboardData),
                                      (m = "fulfilled" === u.status && !!d),
                                      (g = !(
                                        !m ||
                                        !d.creatorStats ||
                                        !0 !== d.creatorStats.available
                                      )),
                                      (b = m
                                        ? h && g
                                        : n.data.creatorDashboardAvailable),
                                      (y = m
                                        ? b
                                          ? d.creatorStats
                                          : p
                                        : n.data.creatorStats),
                                      (v =
                                        d && d.orderSummary
                                          ? d.orderSummary
                                          : n.data.orderSummary),
                                      n.profileCoordinatorApplyDashboardState({
                                        selectedAddress: f,
                                        addressList: Array.isArray(l) ? l : [],
                                        orderSummary: v,
                                        creatorDashboardAvailable: b,
                                        creatorStats: y,
                                      }),
                                      (n._profileDashboardSyncedAt =
                                        Date.now()),
                                      e.abrupt("return", !0)
                                    );
                                  case 25:
                                  case "end":
                                    return e.stop();
                                }
                            }, t);
                          })
                        );
                        return function () {
                          return t.apply(this, arguments);
                        };
                      })()),
                      (n._profileDashboardSyncPromise = l().finally(
                        function () {
                          n._profileDashboardSyncPromise = null;
                        }
                      )),
                      o.abrupt("return", n._profileDashboardSyncPromise)
                    );
                  case 14:
                  case "end":
                    return o.stop();
                }
            }, o);
          })
        )();
      },
      bootstrapProfileRuntime: function () {
        var r = this;
        return a(
          e().mark(function t() {
            var a, n;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((a = L()),
                        (n = T()),
                        r.syncPrimaryTabs(),
                        r.setData({ isLoggedIn: !0 === a, appLoaded: !0 }),
                        n && r.applyAuthUserProfile(n),
                        r.data.isLoggedIn)
                      ) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt("return");
                    case 7:
                      return (
                        (e.prev = 7),
                        (e.next = 10),
                        r.ensureLoginState({ silent: !0, forceRefresh: !0 })
                      );
                    case 10:
                      e.next = 15;
                      break;
                    case 12:
                      (e.prev = 12),
                        (e.t0 = e.catch(7)),
                        r.reportInitIssue("profile_auth_bootstrap", e.t0, {
                          toast: !1,
                          fallbackMessage: "登录状态同步失败",
                        });
                    case 15:
                      return (
                        (e.next = 17),
                        r.hydrateProfileDomainAfterAuth({
                          force: !0,
                          profileVisible: !0,
                        })
                      );
                    case 17:
                      "function" == typeof r.promptWechatProfileAuthIfNeeded &&
                        r.promptWechatProfileAuthIfNeeded();
                    case 18:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[7, 12]]
            );
          })
        )();
      },
      handleEnterLegacy: function () {
        l(u(), { methods: ["redirectTo", "reLaunch"] });
      },
    });
  },
};
