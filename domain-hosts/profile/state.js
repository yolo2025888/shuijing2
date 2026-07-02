var e = require("./primary-tabs"),
  r =
    "function" == typeof e.buildPrimaryTabs
      ? e.buildPrimaryTabs
      : function () {
          return [];
        },
  i = require("../../pages/index/modules/initial-data"),
  t =
    "function" == typeof i.createInitialData
      ? i.createInitialData
      : function () {
          return {};
        },
  a = require("../../pages/index/modules/shared/builders"),
  n =
    "function" == typeof a.buildNavTabs
      ? a.buildNavTabs
      : function () {
          return [];
        },
  u =
    "function" == typeof a.buildOrderItems
      ? a.buildOrderItems
      : function () {
          return [];
        },
  o =
    "function" == typeof a.buildServiceItems
      ? a.buildServiceItems
      : function () {
          return [];
        };
module.exports = {
  createDomainState: function () {
    var e = t();
    return Object.assign(e, {
      appLoaded: !0,
      activeTab: "profile",
      activePrimaryTab: "profile",
      navTabs: n(),
      primaryTabs: r("profile"),
      pageTitle: "主页",
      pageDesc: "V2 Profile Domain Host (pilot)",
      orderItems: u(e.orderSummary || {}),
      serviceItems: o(),
    });
  },
};
