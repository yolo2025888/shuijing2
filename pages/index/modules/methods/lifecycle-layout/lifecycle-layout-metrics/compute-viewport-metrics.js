var t = require("../../../deps/runtime-deps"),
  a = t.BASE_TRAY_SIZE,
  e = t.MIN_TRAY_SIZE,
  o = t.PHOTO_TRAY_SCALE,
  i = require("../../../../../../layout-kernel/index").computeLayoutMetricsV2,
  r = require("./compute-viewport-metrics-styles").buildViewportLayerStyles;
module.exports = {
  computeViewportMetrics: function (t) {
    var s = this.getViewportInfo(),
      h =
        Array.isArray(this.data && this.data.navTabs) &&
        this.data.navTabs.length > 0,
      n = !(
        !this.data ||
        "diy" !== this.data.activeTab ||
        !0 !== this.data.isStandaloneDiy
      ),
      p = !!(
        (this.data && this.data.photoMode) ||
        n ||
        !this.data ||
        !this.data.isNavVisible ||
        (this.data && this.data.checkoutData) ||
        (this.data && this.data.guideModalOpen) ||
        (this.data && this.data.isCheckingOut) ||
        (this.data && this.data.namingPayload) ||
        (this.data && this.data.showProfileShareModal) ||
        (this.data && this.data.showAddressManagerModal) ||
        (this.data && this.data.showOrderManagerModal) ||
        (this.data && this.data.showContentModal) ||
        (this.data && this.data.showPaymentSuccessPopup) ||
        (this.data &&
          this.data.supportQrPopup &&
          this.data.supportQrPopup.visible)
      ),
      y = i({
        viewport: s,
        options: {
          baseTraySize: a,
          minTraySize: e,
          photoTrayScale: o,
          hasNavTabs: h,
          navHidden: p,
          skipBottomSafeInset: n,
        },
      }),
      d = r({
        appBarTopPx: y.appBarTopPx,
        viewportWindowWidth: y.windowWidth,
        topMetaTopPx: y.topMetaTopPx,
        topMetaHeightPx: y.topMetaHeightPx,
        trayTopPx: y.trayTopPx,
        trayLeftPx: y.trayLeftPx,
        traySize: y.traySize,
        undoTopPx: y.undoTopPx,
        undoRightPx: y.undoRightPx,
        actionTopPx: y.actionTopPx,
        layerSidePx: y.layerSidePx,
        searchTopPx: y.searchTopPx,
        searchInsetLeftPx: y.searchInsetLeftPx,
        searchInsetRightPx: y.searchInsetRightPx,
        mainTabsTopPx: y.mainTabsTopPx,
        mainTabsHeightPx: y.mainTabsHeightPx,
        materialTopPx: y.materialTopPx,
        bottomDockPx: y.bottomDockPx,
        appBarHeightPx: y.appBarHeightPx,
        safeTopPx: y.safeTopPx,
      }),
      l =
        "function" == typeof this.getPhotoLayoutConfig
          ? this.getPhotoLayoutConfig(s, y.traySize)
          : null,
      c = l && Number.isFinite(l.shiftPx) ? l.shiftPx : y.trayPhotoShift,
      P = l && Number.isFinite(l.scale) ? l.scale : o,
      x = y.traySize,
      u = "function" == typeof t ? t : void 0;
    this.setData(
      {
        traySize: y.traySize,
        trayBaseStyle: "width: "
          .concat(y.traySize, "px; height: ")
          .concat(y.traySize, "px;"),
        photoTraySize: x,
        trayPhotoStyle: "width: "
          .concat(x, "px; height: ")
          .concat(x, "px; transform: translateY(")
          .concat(c, "px) scale(")
          .concat(P, ");"),
        photoBrandStyle: "top:"
          .concat(y.brandTop, "px;left:")
          .concat(y.brandLeft, "px;"),
        photoShareStyle: "top:"
          .concat(y.shareTop, "px;right:")
          .concat(y.shareRight, "px;"),
        shellPaddingTop: y.shellPaddingTop,
        shellPaddingBottom: y.shellPaddingBottom,
        statusBarHeight: Math.max(0, Math.round(y.safeTop)),
        safeAreaTop: Math.max(0, Math.round(y.safeTop)),
        safeAreaBottomInset: y.safeBottomInset,
        menuButtonRect: y.menuRect,
        menuButtonTopPx:
          y.menuRect && Number.isFinite(Number(y.menuRect.top))
            ? Math.max(0, Math.round(Number(y.menuRect.top)))
            : Math.max(0, Math.round(y.safeTop)),
        menuButtonHeightPx:
          y.menuRect && Number.isFinite(Number(y.menuRect.height))
            ? Math.max(1, Math.round(Number(y.menuRect.height)))
            : 32,
        appBarLayerStyle: d.appBarLayerStyle,
        topMetaLayerStyle: d.topMetaLayerStyle,
        topGuideLayerStyle: d.topGuideLayerStyle,
        trayStageLayerStyle: d.trayStageLayerStyle,
        trayWrapperStyle: d.trayWrapperStyle,
        floatingPhotoLayerStyle: d.floatingPhotoLayerStyle,
        floatingUndoLayerStyle: d.floatingUndoLayerStyle,
        floatingBlindBoxLayerStyle: d.floatingBlindBoxLayerStyle,
        actionRowLayerStyle: d.actionRowLayerStyle,
        searchRowLayerStyle: d.searchRowLayerStyle,
        mainTabsLayerStyle: d.mainTabsLayerStyle,
        materialPanelLayerStyle: d.materialPanelLayerStyle,
        bottomNavBottomPx: y.bottomNavBottomPx,
        cartBarBottomPx: y.cartBarBottomPx,
        isCompactScreen: y.compactHeight,
        isNarrowScreen: y.narrowWidth,
      },
      u
    );
  },
};
