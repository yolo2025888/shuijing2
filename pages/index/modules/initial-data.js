var e = require("../../../@babel/runtime/helpers/typeof"),
  t = require("./shared/runtime-shared"),
  a = t.BASE_TRAY_SIZE,
  r = t.PHOTO_TRAY_SCALE,
  o = require("../../../config/env").getRuntimeEnvConfig,
  i = require("../../../utils/navigation/diy-entry-transition"),
  n = i.hasValidDiyTransitionMarker,
  l = i.readDiyTransitionMarker;
function s(e) {
  var t = String(e || "")
    .trim()
    .toLowerCase();
  return ["home", "inspiration", "cart", "profile"].indexOf(t) >= 0 ? t : "";
}
function d() {
  try {
    if ("function" != typeof getApp) return null;
    var t = getApp();
    if (!t || !t.globalData) return null;
    var a = t.globalData.pendingIndexInitialRoute;
    if (
      ((t.globalData.pendingIndexInitialRoute = null), !a || "object" !== e(a))
    )
      return null;
    var r =
      ((n = a.activeTab),
      "workshop" ===
      (l = String(n || "")
        .trim()
        .toLowerCase())
        ? "diy"
        : "schemes" === l
        ? "profile"
        : ["home", "diy", "inspiration", "design", "cart", "profile"].indexOf(
            l
          ) >= 0
        ? l
        : "");
    if (!r) return null;
    var o = Number(a.ts),
      i = Date.now() - o;
    return !Number.isFinite(o) || o <= 0 || i < 0 || i > 3e3
      ? null
      : { activeTab: r, returnTab: s(a.returnTab) };
  } catch (e) {
    return null;
  }
  var n, l;
}
function p() {
  try {
    if ("function" != typeof getApp) return "";
    var e = getApp();
    return (function (e) {
      for (var t = String(e || "").trim(), a = 0; a < 3; a += 1)
        try {
          var r = decodeURIComponent(t);
          if (!r || r === t) break;
          t = r;
        } catch (e) {
          break;
        }
      return t.trim();
    })((e && e.globalData ? e.globalData : {}).launchScene);
  } catch (e) {
    return "";
  }
}
module.exports = {
  createInitialData: function () {
    var e,
      t = o(),
      i = l(),
      u = !!i || n(),
      c = d(),
      g = i
        ? "diy"
        : c && c.activeTab
        ? c.activeTab
        : (e = p()) && /(^|&)w[lp]=[0-9A-Za-z_-]{1,96}(&|$)/.test(e)
        ? "profile"
        : "home",
      m = "diy" === g;
    return {
      appLoaded: u,
      loadProgress: u ? 100 : 0,
      loadingStage: u ? "shell_ready" : "booting",
      loadingStageStartedAt: 0,
      shellReadyAt: 0,
      dataSyncingAt: 0,
      interactiveAt: 0,
      currentTime: "00:00",
      activeTab: g,
      activePrimaryTab: g,
      navActiveTab: g,
      isStandaloneDiy: m,
      standaloneDiyEntryMaskVisible: m,
      diyReturnTab: m
        ? c && c.returnTab
          ? c.returnTab
          : s(i && i.returnTab)
        : "",
      homeCurrentSlide: 0,
      homeActiveStep: 0,
      homeStepScrollLeft: 0,
      homeArtisanImg:
        "https://stonlab-1g57aqhi841eebf4-1307595304.tcloudbaseapp.com/assets/home/artisan/stonelab5.webp",
      homeOrderFlowPreviewImage:
        "https://stonlab-1g57aqhi841eebf4-1307595304.tcloudbaseapp.com/assets/home/order-flow-preview.20260616.jpg",
      homeOrderFlowFullImage:
        "https://stonlab-1g57aqhi841eebf4-1307595304.tcloudbaseapp.com/assets/home/order-flow-full.20260616.jpg",
      homeSlides: [
        {
          id: "builtin_fallback_slide",
          image:
            "https://stonlab-1g57aqhi841eebf4-1307595304.tcloudbaseapp.com/assets/home/artisan/stonelab5.webp",
          tag: "",
          title: "StoneLab",
          desc: "",
        },
      ],
      homeSteps: [
        {
          step: "01",
          title: "挑选主石",
          iconTxt: "◉",
          desc: "从珠子库里挑选入容器",
        },
        {
          step: "02",
          title: "选择配饰",
          iconTxt: "✦",
          desc: "搭配最新饰品衬托手串",
        },
        {
          step: "03",
          title: "调整尺寸",
          iconTxt: "◌",
          desc: "修改确认您的手围大小",
        },
        {
          step: "04",
          title: "保存下单",
          iconTxt: "✓",
          desc: "生成您的专属手串",
        },
      ],
      homeDesigners: [],
      assetCdnBaseUrl: t.assetCdnBaseUrl,
      assetUiBaseUrl: "/assets",
      navTabs: [],
      guideTabs: [],
      operationTips: [],
      operationTipIndex: 0,
      operationTipTotalText: "00",
      currentOperationTip: null,
      tutorialSlides: [],
      currentTutorialSlide: null,
      noticeItems: [],
      measureCards: [],
      measureGender: "F",
      estimateRows: [],
      sizeCompareItems: [],
      userWrist: null,
      userWristText: "设置手围",
      wristSettingOpen: !1,
      wristDraftValue: 17,
      wristDraftValueDisplay: "17.0",
      wristMonitor: {
        status: "idle",
        msg: "设置手围后可查看佩戴贴合度",
        tone: "muted",
      },
      trayBgs: [],
      bgIndex: 4,
      currentTrayBg: null,
      mainCategories: [],
      currentSubCategories: [],
      mainCategory: "",
      menuCategory: "in_use",
      searchQuery: "",
      displayBeads: [],
      presets: [],
      presetCategories: [],
      presetCategory: "",
      filteredPresets: [],
      visibleFilteredPresets: [],
      inspirationLoading: !0,
      inspirationRefreshing: !1,
      inspirationStale: !1,
      inspirationFirstPageCategory: "",
      inspirationFirstPageStatus: "idle",
      presetCategoriesLoading: !0,
      homeContentLoading: !0,
      homeConfigSource: "builtin_fallback",
      homeConfigVersion: "",
      homeConfigUpdatedAt: "",
      homeConfigCachedAt: 0,
      diyMaterialsLoading: !0,
      inspirationRenderLimit: 6,
      inspirationRenderStep: 6,
      inspirationHasMorePresets: !1,
      inspirationScrollPrimed: !1,
      shellPaddingTop: 38,
      shellPaddingBottom: 0,
      statusBarHeight: 20,
      safeAreaTop: 20,
      safeAreaBottomInset: 0,
      menuButtonRect: null,
      menuButtonTopPx: 20,
      menuButtonHeightPx: 32,
      topInfoBarStyle: "",
      appBarLayerStyle: "",
      trayWrapperStyle: "",
      topMetaLayerStyle: "",
      topGuideLayerStyle: "",
      trayStageLayerStyle: "",
      floatingPhotoLayerStyle: "",
      floatingUndoLayerStyle: "",
      floatingBlindBoxLayerStyle: "",
      blindBoxPreparing: !1,
      blindBoxWarming: !1,
      strungPreparing: !1,
      blindBoxReadyCount: 0,
      blindBoxReplayCount: 0,
      actionRowLayerStyle: "",
      searchRowLayerStyle: "",
      mainTabsLayerStyle: "",
      materialPanelLayerStyle: "",
      bottomNavBottomPx: 6,
      cartBarBottomPx: 96,
      traySize: a,
      trayBaseStyle: "width: ".concat(a, "px; height: ").concat(a, "px;"),
      trayPhotoStyle: "width: "
        .concat(a, "px; height: ")
        .concat(a, "px; transform: translateY(0px) scale(")
        .concat(r, ");"),
      photoBrandStyle: "",
      photoShareStyle: "",
      photoMode: !1,
      trayState: {
        beadsCount: 0,
        totalPrice: 0,
        totalPerimeter: 0,
        maxPerimeterMm: 300,
        isOverMaxPerimeter: !1,
        isStrung: !1,
        pattern: [],
        totalPriceText: "0.0",
        totalPerimeterCmText: "0.0",
      },
      currentPattern: [],
      currentRenderPlan: [],
      currentSchemeName: "",
      forceRegen: 0,
      isNavVisible: !0,
      showDiyShareModal: !1,
      diyPhotoSharePreparing: !1,
      diyPhotoShareReady: !1,
      savedSchemeShareStateMap: {},
      savedSchemes: [],
      savedSchemesLoading: !1,
      cartItems: [],
      cartHydrating: !1,
      checkedCartCount: 0,
      checkedCartTotal: 0,
      checkedCartTotalText: "0.0",
      checkoutGoodsAmountText: "0.0",
      checkoutServiceAmountText: "0.0",
      checkoutFreightAmountText: "0.0",
      checkoutOptionGroups: [],
      selectedCheckoutOptions: {},
      checkoutOptionRefreshing: !1,
      checkoutPreparing: !1,
      checkoutData: null,
      isCheckingOut: !1,
      paymentFlowState: "IDLE",
      isConfirmPaying: !1,
      checkoutAddressResolving: !1,
      pendingPaymentOrderNo: "",
      pendingPaymentAmount: 0,
      pendingPaymentCreatedAt: 0,
      pendingPaymentSignature: "",
      checkoutPreview: null,
      deliveryEtaText: "3",
      namingPayload: null,
      namingValue: "",
      guideModalOpen: !1,
      guideTab: "tips",
      tutorialStep: 1,
      toast: "",
      toastVisible: !1,
      diyConfirmModal: null,
      showProfileShareModal: !1,
      showProfileAuthPrompt: !1,
      profileAuthNickname: "",
      profileAuthAvatarUrl: "",
      profileAuthSubmitting: !1,
      showProfileApplyDocSheet: !1,
      profileApplyDocType: "",
      profileApplyDocTitle: "",
      profileApplyDocAccent: "#E5D5C5",
      profileApplyDocSections: [],
      profileApplyDocLabels: {
        designer: "入驻说明文档",
        distributor: "合作说明文档",
      },
      profileApplyDocConfig: {},
      profileApplyCardCopy: {},
      profileQuickContactLabel: "联系客服",
      profileSharePattern: [],
      showContentModal: !1,
      contentModalType: "",
      contentModalTitle: "",
      contentModalLoading: !1,
      contentModalError: "",
      contentModalText: "",
      showPaymentSuccessPopup: !1,
      paymentSuccessPopupImageUrl: "",
      paymentSuccessPopupText: "",
      supportQrPopup: null,
      isLoggedIn: !1,
      authVerifying: !1,
      layoutOverlayEnabled: !0 === t.layoutOverlayEnabled,
      layoutOverlayOpacity: Number.isFinite(Number(t.layoutOverlayOpacity))
        ? Math.max(0, Math.min(100, Number(t.layoutOverlayOpacity)))
        : 38,
      layoutOverlayImageUrl: String(t.layoutOverlayImageUrl || "").trim(),
      enableCreatorDashboardData: !0 === t.enableCreatorDashboardData,
      creatorDashboardAvailable: !1,
      profileDashboardLoading: !1,
      userRole: "normal",
      selectedAddress: null,
      addressList: [],
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
      pendingWebPaySceneToken: "",
      webPaySceneResolving: !1,
      pendingWebLoginSceneToken: "",
      webLoginConfirmVisible: !1,
      webLoginConfirmLoading: !1,
      webLoginConfirmStatus: "",
      webLoginConfirmMessage: "",
      showAddressManagerModal: !1,
      showAddressFormModal: !1,
      addressManagerLoading: !1,
      addressSubmitting: !1,
      addressFormMode: "create",
      editingAddressId: "",
      addressForm: {
        receiverName: "",
        receiverPhone: "",
        province: "",
        city: "",
        district: "",
        street: "",
        detail: "",
        postalCode: "",
        tag: "",
        isDefault: !0,
      },
      orderSummary: {
        pendingPay: 0,
        pendingShip: 0,
        pendingReceive: 0,
        afterSale: 0,
      },
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
      creatorIdentityStatus: "unknown",
      creatorApplicationInfo: null,
      creatorPanelSummary: null,
      distributorIdentityStatus: "unknown",
      distributorApplicationInfo: null,
      distributorPanelSummary: null,
      orderItems: [],
      serviceItems: [],
      profileAvatarUrl: t.profileAvatarUrl,
      profileAvatarFallback: t.profileAvatarFallback,
      profileNickname: "微信用户",
      profileUserId: 0,
    };
  },
};
