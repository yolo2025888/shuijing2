var e = "/pages/index/index",
  i = Object.freeze(["home", "inspiration", "diy", "cart", "profile"]),
  r = Object.freeze({ design: "inspiration", workshop: "diy" }),
  t = Object.freeze([
    "home",
    "inspiration",
    "diy",
    "cart",
    "profile",
    "schemes",
  ]),
  n = Object.freeze({
    design: "inspiration",
    workshop: "diy",
    designs: "schemes",
  }),
  o = new Set(i),
  a = Object.freeze({
    home: "".concat(e, "?activeTab=home"),
    inspiration: "".concat(e, "?activeTab=inspiration"),
    diy: "".concat(e, "?activeTab=diy"),
    cart: "".concat(e, "?activeTab=cart"),
    profile: "".concat(e, "?activeTab=profile"),
  });
module.exports = {
  INDEX_ROUTE: e,
  PRIMARY_TAB_IDS: i,
  PRIMARY_TAB_ALIAS: r,
  ROUTE_DOMAIN_IDS: t,
  ROUTE_DOMAIN_ALIAS: n,
  PRIMARY_TAB_ROUTE_BY_ID: a,
  normalizeRouteDomain: function (e) {
    var i =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "diy",
      r = String(e || "")
        .trim()
        .toLowerCase(),
      o = n[r] || r;
    if (t.indexOf(o) >= 0) return o;
    var a = String(i || "")
      .trim()
      .toLowerCase();
    return t.indexOf(a) >= 0 ? a : "diy";
  },
  normalizeIndexActiveTab: function (e) {
    var i =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "home",
      t = String(e || "")
        .trim()
        .toLowerCase(),
      n = r[t] || t;
    if ("schemes" === n) return "schemes";
    if (o.has(n)) return n;
    var a = String(i || "")
      .trim()
      .toLowerCase();
    return o.has(a) ? a : "home";
  },
};
