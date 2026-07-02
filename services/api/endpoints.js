var e = {
  authWechatLogin: "/auth/wechat/login",
  authMe: "/auth/me",
  authLogout: "/auth/logout",
  authRefresh: "/auth/refresh",
  authWechatPhoneLogin: "/auth/wechat/phone-login",
  authWechatBindPhone: "/auth/wechat/bind-phone",
  authMiniProgramWebLoginScan: "/auth/miniprogram-web-login/scan",
  authMiniProgramWebLoginConfirm: "/auth/miniprogram-web-login/confirm",
  authMiniProgramWebLoginCancel: "/auth/miniprogram-web-login/cancel",
  catalogBootstrap: "/catalog/bootstrap",
  catalogBootstrapLite: "/catalog/bootstrap-lite",
  catalogDiyBootstrap: "/catalog/diy/bootstrap",
  catalogDiyMaterials: "/catalog/diy/materials",
  catalogDiyMaterialsVersion: "/catalog/diy/materials-version",
  catalogDiyMaterialsBundle: "/catalog/diy/materials-bundle",
  catalogMaterialsResolve: "/catalog/materials/resolve",
  catalogPresetDetail: function (e) {
    return "/catalog/presets/".concat(
      encodeURIComponent(String(e || "").trim()),
      "/detail"
    );
  },
  catalogPresetView: function (e) {
    return "/catalog/presets/".concat(
      encodeURIComponent(String(e || "").trim()),
      "/view"
    );
  },
  designSchemes: "/design/schemes",
  designSchemesSync: "/design/schemes/sync",
  designSchemeDetail: function (e) {
    return "/design/schemes/".concat(e);
  },
  designSchemeShare: function (e) {
    return "/design/schemes/".concat(e, "/share");
  },
  designSchemeDelete: function (e) {
    return "/design/schemes/".concat(e, "/delete");
  },
  cartItems: "/cart/items",
  cartItemsSync: "/cart/items/sync",
  addressDefault: "/address/default",
  addressList: "/address/list",
  addressCreate: "/address",
  addressUpdate: function (e) {
    return "/address/".concat(e);
  },
  addressDelete: function (e) {
    return "/address/".concat(e);
  },
  addressSetDefault: function (e) {
    return "/address/".concat(e, "/default");
  },
  addressWechatSync: "/address/wechat-sync",
  profileDashboard: "/profile/dashboard",
  profileContactConfig: "/profile/contact-config",
  profileWechatProfile: "/profile/wechat-profile",
  profileUploadImages: "/profile/uploads/images",
  profileCreatorApplications: "/profile/creator/applications",
  profileCreatorCurrentApplication: "/profile/creator/application/current",
  profileCreatorEligibleOrderItems: "/profile/creator/eligible-order-items",
  profileCreatorPanel: "/profile/creator/panel",
  profileCreatorProfile: "/profile/creator/profile",
  profileCreatorWorks: "/profile/creator/works",
  profileCreatorWorkDetail: function (e) {
    return "/profile/creator/works/".concat(
      encodeURIComponent(String(e || "").trim())
    );
  },
  profileCreatorWorkResubmit: function (e) {
    return "/profile/creator/works/".concat(
      encodeURIComponent(String(e || "").trim()),
      "/resubmit"
    );
  },
  profileCreatorWithdrawRequests: "/profile/creator/withdraw-requests",
  profileCreatorPublishStatus: "/profile/creator/publish-status",
  creatorPublicFeed: "/creator/public/feed",
  creatorPublicProfile: function (e) {
    return "/creator/public/".concat(
      encodeURIComponent(String(e || "").trim()),
      "/profile"
    );
  },
  profileDistributorApplications: "/profile/distributor/applications",
  profileDistributorCurrentApplication:
    "/profile/distributor/application/current",
  profileDistributorPanel: "/profile/distributor/panel",
  profileDistributorProfile: "/profile/distributor/profile",
  profileDistributorDownlines: "/profile/distributor/downlines",
  profileDistributorEarnings: "/profile/distributor/earnings",
  profileDistributorInvite: "/profile/distributor/invite",
  profileDistributorInviteBind: "/profile/distributor/invite/bind",
  profileDistributorWithdrawRequests: "/profile/distributor/withdraw-requests",
  profileNotifications: "/profile/notifications",
  profileNotificationRead: function (e) {
    return "/profile/notifications/".concat(e, "/read");
  },
  contentBlock: function (e) {
    return "/content/blocks/".concat(e);
  },
  contentBlocks: "/content/blocks",
  contentHelpCenter: "/content/help-center",
  orderList: "/orders",
  orderDetail: function (e) {
    return "/orders/".concat(e);
  },
  orderMiniProgramPayScene: function (e) {
    return "/orders/miniprogram-pay/scene/".concat(
      encodeURIComponent(String(e || "").trim())
    );
  },
  orderCancel: function (e) {
    return "/orders/".concat(e, "/cancel");
  },
  orderStatusLogs: function (e) {
    return "/orders/".concat(e, "/status-logs");
  },
  orderSummary: "/orders/summary",
  checkoutPreview: "/orders/checkout/preview",
  checkoutOptions: "/orders/checkout/options",
  checkoutOptionsMaintenance: "/orders/maintenance/checkout-options",
  orderSnapshots: "/orders/snapshots",
  createOrder: "/orders",
  createPayment: "/payments/unified-order",
  paymentResult: function (e) {
    return "/payments/".concat(
      encodeURIComponent(String(e || "").trim()),
      "/result"
    );
  },
  fulfillmentShipment: function (e) {
    return "/fulfillment/orders/".concat(e, "/shipment");
  },
  fulfillmentAfterSales: function (e) {
    return "/fulfillment/orders/".concat(e, "/after-sales");
  },
  fulfillmentConfirmReceive: function (e) {
    return "/fulfillment/orders/".concat(e, "/confirm-receive");
  },
  fulfillmentCreateAfterSale: function (e) {
    return "/fulfillment/orders/".concat(e, "/after-sales");
  },
};
module.exports = { API_ENDPOINTS: e };
