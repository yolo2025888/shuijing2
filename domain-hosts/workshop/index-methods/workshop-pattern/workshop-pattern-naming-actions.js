var e = require("../../../../@babel/runtime/helpers/typeof"),
  t = require("../../../../pages/index/modules/deps/workshop-deps"),
  a = t.checkCopyright,
  r = t.SCHEME_NAME_MIN_LENGTH,
  i = t.SCHEME_NAME_MAX_LENGTH,
  s = t.formatDate,
  o = t.normalizePattern,
  n = t.normalizeBgIndex,
  h = t.normalizeCartItems,
  c = t.normalizeSchemeItems,
  d = require("../../../../pages/index/modules/methods/navigation-coordinator"),
  m = d.resolveV2EntryRoute,
  l = d.navigateToV2Route,
  p = d.setActiveTab;
module.exports = {
  handleNamingInput: function (e) {
    this.setData({ namingValue: e.detail.value || "" });
  },
  handleCloseNaming: function () {
    this.setData({ namingPayload: null, namingValue: "" });
  },
  handleNamingConfirm: function () {
    var e = (this.data.namingValue || "").trim(),
      t = this.data.namingPayload;
    e.length < r || e.length > i
      ? this.showToast("名称长度需为 ".concat(r, "-").concat(i, " 个字符"))
      : t &&
        ("save" === t.type
          ? (this.saveScheme(t.pattern, t.perim, t.price, t.bgIndex, e),
            this.showToast("方案已保存到我的设计"))
          : "cart" === t.type &&
            this.addToCart(t.pattern, t.perim, t.price, e, t.bgIndex),
        this.handleCloseNaming());
  },
  saveScheme: function (e, t, a, r, i) {
    var h = o(e);
    if (h.length) {
      var d = n(r, this.data.trayBgs.length),
        u = i || this.data.currentSchemeName || "我的专属设计",
        g = c(
          [
            {
              id: "s_".concat(Date.now()),
              name: u,
              date: s(new Date()),
              pattern: h,
              perim: t,
              price: a,
              mode: "bracelet",
              bgIndex: d,
            },
          ].concat(this.data.savedSchemes)
        );
      this.setData({ savedSchemes: g, currentSchemeName: u }),
        this.profileCoordinatorSetSharePattern(h),
        this.persistSchemes(g);
      var _ = m("schemes", "legacy_save_scheme");
      l(_ && _.route ? _.route : "") || p(this, "profile");
    } else this.showToast("方案数据为空，无法保存");
  },
  addToCart: function (t, r, i, s, c) {
    var d = o(t);
    if (d.length) {
      var m = s || this.data.currentSchemeName || "我的专属设计",
        l = a(d, this.copyrightContext),
        p =
          l && this.copyrightContext && "object" === e(this.copyrightContext)
            ? this.copyrightContext
            : {},
        u = n(void 0 === c ? this.data.bgIndex : c, this.data.trayBgs.length),
        g = h(
          [
            {
              id: "cart_".concat(Date.now()),
              name: m,
              pattern: d,
              perim: r,
              price: i,
              bgIndex: u,
              mode: "bracelet",
              source_designer_id: l,
              source_creator_work_id:
                p.source_creator_work_id || p.sourceCreatorWorkId || "",
              source_inspiration_template_id:
                p.source_inspiration_template_id ||
                p.sourceInspirationTemplateId ||
                "",
              source_entry: p.source_entry || p.sourceEntry || "designer_work",
              checked: !0,
              timestamp: Date.now(),
            },
          ].concat(this.data.cartItems)
        );
      this.setData({ cartItems: g, currentSchemeName: m }),
        this.profileCoordinatorSetSharePattern(d),
        this.persistCart(g),
        this.updateCartSummary(g),
        this.showToast("已加入购物车");
    } else this.showToast("方案数据为空，无法加入购物车");
  },
};
