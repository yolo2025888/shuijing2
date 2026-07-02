var e = require("../../deps/lifecycle-deps"),
  t = e.buildNavTabs,
  i = e.buildGuideTabs,
  a = e.buildOperationTips,
  r = e.buildTutorialSlides,
  s = e.buildNoticeItems,
  o = e.buildMeasureCards,
  n = e.buildEstimateRows,
  l = e.buildSizeCompareItems,
  p = e.buildOrderItems,
  d = e.buildServiceItems,
  g = e.buildPresets,
  u = e.normalizePattern,
  C = require("../../../../../domain-hosts/inspiration/state"),
  h = C.buildInspirationPresetState,
  c = C.buildInspirationVisiblePresetState,
  m = require("./bootstrap-home-config"),
  b = m.resolveHomeSlides,
  y = m.resolveHomeDesigners,
  f = m.resolveHomeConfigRuntimeMeta,
  S = m.clampHomeSlideIndex,
  P = m.resolvePreferredTrayBgIndex,
  v = require("./bootstrap-profile-copy").resolveProfileCopy;
module.exports = {
  initializeCatalogSnapshot: function () {
    this.catalogSnapshot = {
      trayBgs: [],
      beadTypes: [],
      mainCategories: [],
      subCategories: {},
      presetCategories: [],
      presets: [],
      physicsConfig: {},
      homeConfig: {},
      adConfig: {},
    };
  },
  initStaticData: function () {
    var e = this,
      C = this.catalogSnapshot || {},
      m = C.trayBgs || [],
      I = C.beadTypes || [],
      T = C.homeConfig || {},
      D = m.length > 0 && I.length > 0,
      A = g(C.presets || [], m),
      F = h({
        presetsInput: A,
        mainCategoriesInput: C.mainCategories || [],
        subCategoriesInput: C.subCategories || {},
        presetCategoriesInput: C.presetCategories || [],
        currentPresetCategory: this.data.presetCategory,
        preserveMainAndMenu: !1,
        mainCategoryFallback: "kuangshi",
      }),
      L = c(F.filteredPresets, this.data.inspirationRenderLimit),
      x = L.visibleFilteredPresets.length > 0,
      M =
        "inspiration" ===
        String((this.data && this.data.activeTab) || "").trim(),
      k = r(),
      B = a(),
      H = P(m, this.data.bgIndex),
      q = b(T, this.data.homeSlides),
      O = y(T, this.data.homeDesigners),
      z = S(this.data.homeCurrentSlide, q.length),
      N = f(T, C),
      R = v(C.adConfig || {}),
      w = {
        navTabs: t(),
        homeSlides: q,
        homeDesigners: O,
        homeCurrentSlide: z,
        homeConfigSource: N.source,
        homeConfigVersion: N.version,
        homeConfigUpdatedAt: N.updatedAt,
        homeConfigCachedAt: N.cachedAt,
      };
    D &&
      Object.assign(w, {
        homeContentLoading: !1,
        presetCategoriesLoading: !1,
        trayBgs: m.slice(),
        bgIndex: H,
        currentTrayBg: m[H] || m[0] || null,
        mainCategories: F.mainCategories,
        mainCategory: F.mainCategory,
        currentSubCategories: F.currentSubCategories,
        menuCategory: F.menuCategory,
        presetCategories: F.presetCategories,
        presetCategory: F.presetCategory,
        presets: A,
        filteredPresets: F.filteredPresets,
        visibleFilteredPresets: L.visibleFilteredPresets,
        inspirationLoading: !x && M,
        inspirationFirstPageCategory: F.presetCategory,
        inspirationFirstPageStatus: x
          ? "loaded"
          : M
          ? "loading"
          : this.data.inspirationFirstPageStatus || "idle",
        inspirationPaging: !1,
        inspirationHasMorePresets: L.inspirationHasMorePresets,
        inspirationScrollPrimed: !1,
      });
    var Q = {
      guideTabs: i(),
      operationTips: B,
      operationTipIndex: B.length ? 1 : 0,
      operationTipTotalText: String(B.length).padStart(2, "0"),
      currentOperationTip: B[0] || null,
      tutorialSlides: k,
      currentTutorialSlide: k[0] || null,
      noticeItems: s(),
      measureCards: o("F"),
      estimateRows: n(),
      sizeCompareItems: l(),
      orderItems: p(),
      serviceItems: d(R.serviceItemOverrides),
      profileQuickContactLabel: R.quickContactLabel,
      profileApplyCardCopy: R.applyCardCopy,
      profileApplyDocLabels: R.applyDocLabels,
      profileApplyDocConfig: R.applyDocConfig,
    };
    ("function" == typeof this.setDataPatch
      ? this.setDataPatch.bind(this)
      : this.setData.bind(this))(w, function () {
      e.profileCoordinatorSetSharePattern(A.length ? u(A[0].pattern) : []),
        D && e.refreshCachedMediaUrls();
    });
    var U = function () {
      "function" != typeof e.setDataPatch ? e.setData(Q) : e.setDataPatch(Q);
    };
    "function" == typeof this.deferNonCriticalTask
      ? this.deferNonCriticalTask(U, 16)
      : U(),
      D &&
        this.recomputeDisplayBeads({
          mainCategory: F.mainCategory,
          menuCategory: F.menuCategory,
          searchQuery: "",
          trayPattern: [],
        });
  },
};
