var e = require("../../deps/lifecycle-deps").buildOrderItems;
module.exports = {
  resetAuthBoundData: function () {
    this.setData({
      savedSchemes: [],
      savedSchemesLoading: !1,
      cartItems: [],
      cartHydrating: !1,
      selectedAddress: null,
      addressList: [],
      checkoutPreview: null,
      checkoutOptionGroups: [],
      selectedCheckoutOptions: {},
      checkoutOptionRefreshing: !1,
      isCheckingOut: !1,
      checkoutLaunching: !1,
      checkoutAddressResolving: !1,
      authVerifying: !1,
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
      orderItems: e(),
    }),
      this.profileCoordinatorApplyUserProfile({
        nickname: "微信用户",
        avatarUrl: this.data.profileAvatarFallback,
        userId: 0,
      }),
      this.resetPaymentFlowState(),
      this.profileCoordinatorCloseAuthPrompt({ resetDraft: !0 }),
      this.updateCartSummary([]);
  },
};
