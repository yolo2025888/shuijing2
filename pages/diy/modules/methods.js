var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../index/modules/methods/lifecycle-bootstrap/cache-sync"),
  r = require("../../index/modules/methods/lifecycle-bootstrap/bootstrap-source"),
  o = require("../../index/modules/methods/lifecycle-bootstrap/runtime-hydration"),
  t = require("../../index/modules/methods/lifecycle-sync/lifecycle-sync-auth"),
  i = require("../../index/modules/methods/lifecycle-sync/lifecycle-sync-data-persisted"),
  l = require("../../index/modules/methods/lifecycle-sync/lifecycle-sync-share"),
  s = require("./lifecycle"),
  d = require("../../index/modules/methods/runtime"),
  h = require("../../index/modules/methods/workshop"),
  c = require("../../index/modules/methods/trade"),
  u =
    require("../../../domain-hosts/profile/coordinator").createCoordinatorMethods;
function y(e, a) {
  var n = {};
  return (
    a.forEach(function (a) {
      e && "function" == typeof e[a] && (n[a] = e[a]);
    }),
    n
  );
}
var C = y(c, [
    "applyAndSyncWechatUserProfile",
    "ensureCartMaterialAssets",
    "ensurePatternMaterialAssets",
    "ensureWechatProfileAfterLogin",
    "getBusinessErrorCode",
    "getBusinessErrorText",
    "handleAuthorizeWechatProfile",
    "handleCheckoutLogin",
    "handleCheckoutOptionTap",
    "handleCheckoutPhoneLogin",
    "handleChooseAddress",
    "handleChooseWechatAvatar",
    "handleCloseConfirmOrder",
    "handleClosePaymentSuccessPopup",
    "handleCloseProfileAuthPrompt",
    "handleConfirmPayment",
    "handleLogin",
    "handlePhoneLogin",
    "handlePhoneLoginCore",
    "handleProfileNicknameInput",
    "handleScroll",
    "handleWechatLoginCore",
    "isPaymentCancelledError",
    "isProfileAvatarLocalFilePath",
    "loadScheme",
    "onShareAppMessage",
    "promptWechatProfileAuthIfNeeded",
    "consumeProfileAuthAvatarCropResult",
    "reportBusinessError",
    "requestWechatPayment",
    "resetPaymentFlowState",
    "resolveBusinessErrorToast",
    "resolvePhoneAuthDetailToast",
    "setPaymentFlowState",
    "shouldClearPendingPaymentByError",
    "shouldRequestWechatProfile",
    "sleep",
    "tryCaptureWechatUserProfile",
    "uploadProfileAvatarToCloud",
    "waitOrderPaid",
  ]),
  f = y(d, [
    "collectDiyWarmupImageUrls",
    "computeViewportMetrics",
    "ensurePersistState",
    "flushPendingPersists",
    "flushPersistTask",
    "getDiyRuntimeDiagnostics",
    "getPerfEvents",
    "getPhotoLayoutConfig",
    "getViewportInfo",
    "handleLayoutOverlayOpacityChange",
    "isPersistAuthError",
    "persistCart",
    "persistSchemes",
    "preloadAssets",
    "prewarmDiyRuntimeResources",
    "recomputeDisplayBeads",
    "recomputePhotoTrayShift",
    "recordPerfEvent",
    "refreshCachedMediaUrls",
    "refreshStandaloneDiyPatternAfterMaterialsReady",
    "scheduleDiyNextScreenMaterialWarmup",
    "scheduleDiyVisibleMaterialWarmup",
    "schedulePersistTask",
    "setDataPatch",
    "setLoadingStage",
    "showToast",
    "syncTrayPhysicsGeometry",
    "trayComp",
    "updateCartSummary",
    "updateClock",
  ]),
  p = y(h, [
    "addToCart",
    "handleBeadTap",
    "handleBlindBox",
    "handleCheckoutAdjust",
    "handleCheckoutClick",
    "handleCheckoutConfirm",
    "handleCheckoutItemOptionTap",
    "handleClear",
    "handleClearWristSetting",
    "handleCloseCheckout",
    "handleCloseGuide",
    "handleCloseNaming",
    "handleCloseShareCard",
    "handleCloseWristSetting",
    "handleConfirmWristSetting",
    "handleDiyConfirmCancel",
    "handleDiyConfirmPrimary",
    "handleDiyConfirmSecondary",
    "handleDiyEdgeSwipeCancel",
    "handleDiyEdgeSwipeEnd",
    "handleDiyEdgeSwipeMove",
    "handleDiyEdgeSwipeStart",
    "handleDiyMaterialsScrollLower",
    "handleDiyStandaloneBack",
    "handleEnterPhotoMode",
    "handleExitPhotoMode",
    "handleGoCheckoutFromPreview",
    "handleGuideTabChange",
    "handleMainCategoryChange",
    "handleMeasureGenderChange",
    "handleNamingConfirm",
    "handleNamingInput",
    "handleNextOperationTip",
    "handleNextTutorial",
    "handleOpenGuide",
    "handleOpenWristSetting",
    "handlePrepareDiyPhotoShare",
    "handlePrevOperationTip",
    "handlePrevTutorial",
    "handleRootTap",
    "handleSaveClick",
    "handleSearchInput",
    "handleShareCard",
    "handleSubCategoryChange",
    "handleToggleBg",
    "handleToggleStrung",
    "handleTrayFeedback",
    "handleTrayStateChange",
    "handleUndo",
    "handleWristDecrease",
    "handleWristIncrease",
    "handleWristSliderChange",
    "handleWristSliderChanging",
    "loadDiyMaterialsForSelection",
    "openDiyConfirm",
    "prepareReadyBlindBoxPresetPool",
    "prewarmBlindBoxPresetPool",
    "clearManualPlaceholderDeadlineTimers",
    "rehydrateTrayBeadImages",
    "resolveDiyConfirm",
    "restoreWristPreference",
    "saveScheme",
    "setWristDraftValue",
    "updateWristMonitor",
  ]),
  m = y(o, [
    "closeStandaloneDiyLoadingGate",
    "deferNonCriticalTask",
    "clearDiyResourceScheduler",
    "cancelDiyResourceNonCritical",
    "ensureDiyResourceScheduler",
    "ensureDiyCatalogBootstrapped",
    "extendDiyResourceMotionLock",
    "extendDiyResourceQuietWindow",
    "getDiyResourceSchedulerSnapshot",
    "openStandaloneDiyLoadingGate",
    "resolveStandaloneDiyLoadingGate",
    "scheduleDiyResourceTask",
    "setDiyResourceSchedulerPause",
    "stabilizeStandaloneDiyTrayForReveal",
    "tryResolveStandaloneDiyGeometryGate",
  ]),
  g = y(t, ["ensureLoginState", "shouldClearAuthSessionOnLoginError"]),
  P = y(i, ["loadPersistedData", "restoreLocalCartSnapshot"]),
  S = u();
module.exports = Object.assign({}, n, r, m, g, P, l, f, p, C, S, s, {
  handleNoop: function () {},
  handleCloseContentModal: function () {
    this.setData({ showContentModal: !1, activeContentModal: null });
  },
  handleCloseProfileShareModal: function () {
    "function" != typeof this.profileCoordinatorSetShareModalVisible
      ? this.setData({ showProfileShareModal: !1 })
      : this.profileCoordinatorSetShareModalVisible(!1);
  },
  handleCloseWebLoginConfirm: function () {
    this.setData({
      pendingWebLoginSceneToken: "",
      webLoginConfirmVisible: !1,
      webLoginConfirmLoading: !1,
      webLoginConfirmStatus: "",
      webLoginConfirmMessage: "",
    });
  },
  handleCancelWebLoginFromScene: function () {
    this.handleCloseWebLoginConfirm();
  },
  handleConfirmWebLoginFromScene: function () {
    this.handleCloseWebLoginConfirm();
  },
  handleCheckoutPhoneLogin: function (n) {
    var r = this;
    return a(
      e().mark(function a() {
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if ("function" != typeof r.handlePhoneLoginCore) {
                  e.next = 6;
                  break;
                }
                return (e.next = 3), r.handlePhoneLoginCore(n);
              case 3:
                (e.t0 = e.sent), (e.next = 7);
                break;
              case 6:
                e.t0 = !1;
              case 7:
                if (e.t0) {
                  e.next = 10;
                  break;
                }
                return e.abrupt("return");
              case 10:
                "function" == typeof r.promptWechatProfileAuthIfNeeded &&
                  r.promptWechatProfileAuthIfNeeded();
              case 11:
              case "end":
                return e.stop();
            }
        }, a);
      })
    )();
  },
  handleOpenAddressManager: function () {
    "function" == typeof this.handleChooseAddress && this.handleChooseAddress();
  },
});
