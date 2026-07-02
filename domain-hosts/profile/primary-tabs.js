var e =
    require("../../contracts/navigation/route-contract").PRIMARY_TAB_ROUTE_BY_ID,
  r = Object.freeze([
    { id: "home", label: "首页", route: e.home },
    { id: "inspiration", label: "灵感", route: e.inspiration },
    { id: "diy", label: "DIY", route: "", entryType: "diy" },
    { id: "cart", label: "购物车", route: e.cart },
    { id: "profile", label: "我的", route: e.profile },
  ]);
module.exports = {
  buildPrimaryTabs: function (e) {
    var i = String(e || "profile").trim() || "profile";
    return r.map(function (e) {
      return Object.assign({}, e, { active: e.id === i });
    });
  },
};
