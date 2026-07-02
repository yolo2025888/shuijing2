var t = require("../../../../../@babel/runtime/helpers/defineProperty"),
  e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../../../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../../../../@babel/runtime/helpers/typeof"),
  i = require("../../deps/workshop-deps"),
  o = i.getStructure,
  s = i.normalizePattern,
  u = i.buildCheckoutData,
  c = i.listCheckoutOptions,
  d = require("../navigation-coordinator"),
  p = d.setCheckoutData,
  l = d.clearCheckoutData,
  h = d.setActiveTab,
  f = d.openIndexTabFromStandaloneDiy,
  m =
    require("../../../../../contracts/navigation/query-contract").appendQueryParams,
  y =
    require("../../../../../utils/navigation/navigate-with-fallback").openDiyEntry,
  b = require("../../../../../utils/diyEntrySession"),
  g = b.buildDiyEntrySessionId,
  k = b.saveDiyEntrySession,
  v = require("../../../../../utils/diyRenderPlan").normalizeRenderPlan,
  S = require("./workshop-pattern-checkout-warmup").warmupCheckoutPreviewAssets,
  T = require("./checkout-item-options"),
  P = T.normalizeCheckoutOptionGroups,
  x = T.extractSelectedItemOptions,
  w = T.applyItemOptionPricing;
function D(t, e) {
  var a = t && "object" === n(t) ? t : {};
  return (
    !0 === (a.data && "object" === n(a.data) ? a.data : {}).isLoggedIn ||
    ("function" == typeof a.showToast && a.showToast("请先登录后再".concat(e)),
    (function (t) {
      var e = t && "object" === n(t) ? t : {},
        a = function () {
          !0 === (e.data && "object" === n(e.data) ? e.data : {}).isLoggedIn ||
          "function" != typeof e.setData
            ? "function" != typeof e.promptWechatProfileAuthIfNeeded
              ? "function" == typeof e.setData &&
                e.setData({ showProfileAuthPrompt: !0 })
              : e.promptWechatProfileAuthIfNeeded()
            : e.setData({ showProfileAuthPrompt: !0 });
        };
      "function" != typeof e.setManagedTimeout
        ? setTimeout(a, 0)
        : e.setManagedTimeout(a, 0);
    })(a),
    !1)
  );
}
function I() {
  return C.apply(this, arguments);
}
function C() {
  return (C = r(
    e().mark(function t() {
      var a, r;
      return e().wrap(function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              return (t.next = 2), c("item");
            case 2:
              return (
                (a = t.sent),
                (r = P(a)),
                t.abrupt("return", { groups: r, selectedOptions: x(r) })
              );
            case 5:
            case "end":
              return t.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function O(t) {
  return j.apply(this, arguments);
}
function j() {
  return (j = r(
    e().mark(function t(a) {
      var r;
      return e().wrap(function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              if ((r = a && "object" === n(a) ? a : null)) {
                t.next = 3;
                break;
              }
              return t.abrupt("return");
            case 3:
              if (
                (r.data &&
                  !0 === r.data.isStandaloneDiy &&
                  "function" == typeof h &&
                  h(r, "diy"),
                "function" != typeof r.ensureDiyCatalogBootstrapped)
              ) {
                t.next = 8;
                break;
              }
              return (
                (t.next = 7),
                r.ensureDiyCatalogBootstrapped({ preferCache: !0 })
              );
            case 7:
              return t.abrupt("return");
            case 8:
              "function" == typeof r.scheduleTabHydration &&
                r.scheduleTabHydration("diy");
            case 9:
            case "end":
              return t.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function q(t, e, a, r, i) {
  var o = t && "object" === n(t) ? t : null;
  if (!o || !e || !0 !== e.isPreview) return !1;
  var u = o.data && "object" === n(o.data) ? o.data : {};
  if (!0 === u.isStandaloneDiy) return !1;
  if (
    "cart" !==
    String(u.activeTab || "")
      .trim()
      .toLowerCase()
  )
    return !1;
  var c = s(a);
  if (!c.length) return !1;
  var d = v(e.renderPlan || e.render_plan, c),
    p = "standalone_diy_cart_adjust",
    l = g("cart_adjust"),
    h = e.materialMap || e.materialSnapshot || {};
  k({
    entryId: l,
    source: p,
    pattern: c,
    bgIndex: r,
    name: i,
    materialMap: h,
    materialSnapshot: h,
    renderPlan: d,
  });
  var f = m("/pages/diy/index", {
    source: p,
    returnTab: "cart",
    entryId: l,
    sharedBgIndex: r,
    sharedName: i,
  });
  return (
    y(f, p, "cart", {
      methods: ["navigateTo", "redirectTo", "reLaunch"],
      fallbackMethods: ["navigateTo", "redirectTo", "reLaunch"],
      onFailed: function () {
        "function" == typeof o.showToast &&
          o.showToast("打开 DIY 失败，请稍后重试");
      },
    }),
    !0
  );
}
function M(t) {
  var e = t && "object" === n(t) ? t : null;
  if (!e) return !1;
  var a = m("/pages/diy/index", {
    source: "standalone_diy_cart_adjust_empty",
    returnTab: "cart",
  });
  return (
    y(a, "standalone_diy_cart_adjust_empty", "cart", {
      methods: ["navigateTo", "redirectTo", "reLaunch"],
      fallbackMethods: ["navigateTo", "redirectTo", "reLaunch"],
      onFailed: function () {
        "function" == typeof e.showToast &&
          e.showToast("鎵撳紑 DIY 澶辫触锛岃绋嶅悗閲嶈瘯");
      },
    }),
    !0
  );
}
module.exports = {
  handleSaveClick: function () {
    if (D(this, "保存设计"))
      if (this.data.trayState.isStrung)
        if (this.data.trayState.beadsCount) {
          var t = s(this.data.trayState.pattern);
          this.setData({
            namingPayload: {
              type: "save",
              pattern: t,
              perim: this.data.trayState.totalPerimeter,
              price: this.data.trayState.totalPrice,
              bgIndex: this.data.bgIndex,
            },
            namingValue: this.data.currentSchemeName || "",
          });
        } else this.showToast("请先添加珠子");
      else this.showToast("请先收拢成串后再保存");
  },
  handleCheckoutClick: function () {
    var t = this;
    return r(
      e().mark(function r() {
        var n, i, c, d, l, h;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!t.data.checkoutPreparing) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return");
                case 2:
                  if (D(t, "加入购物车")) {
                    e.next = 4;
                    break;
                  }
                  return e.abrupt("return");
                case 4:
                  if (t.data.trayState.isStrung) {
                    e.next = 7;
                    break;
                  }
                  return (
                    t.showToast("请先收拢成串后再加入购物车"),
                    e.abrupt("return")
                  );
                case 7:
                  if (t.data.trayState.beadsCount) {
                    e.next = 10;
                    break;
                  }
                  return t.showToast("请先添加珠子"), e.abrupt("return");
                case 10:
                  return (
                    t.setData({ checkoutPreparing: !0 }),
                    (n = s(t.data.trayState.pattern)),
                    (e.prev = 12),
                    (e.next = 15),
                    Promise.all([
                      "function" == typeof t.ensurePatternMaterialAssets
                        ? t.ensurePatternMaterialAssets(n)
                        : Promise.resolve({}),
                      I(),
                    ])
                  );
                case 15:
                  return (
                    (i = e.sent),
                    (c = a(i, 2)),
                    (d = c[0]),
                    (l = c[1]),
                    (h = w(
                      u({
                        beadsOrPattern: n,
                        renderPlan: v(
                          t.data.trayState && t.data.trayState.renderPlan,
                          n
                        ),
                        perim: t.data.trayState.totalPerimeter,
                        price: t.data.trayState.totalPrice,
                        bgIndex: t.data.bgIndex,
                        mode: "bracelet",
                        name: t.data.currentSchemeName,
                        userWrist: t.data.userWrist,
                        isPreview: !1,
                        structure: o(n),
                        bgUrl: t.data.currentTrayBg
                          ? t.data.currentTrayBg.url
                          : "",
                        materialMap: d,
                        itemOptionGroups: l.groups,
                        selectedItemOptions: l.selectedOptions,
                      }),
                      l.groups
                    )),
                    (e.next = 22),
                    S(h, { timeoutMs: 320 })
                  );
                case 22:
                  p(t, h), (e.next = 28);
                  break;
                case 25:
                  (e.prev = 25),
                    (e.t0 = e.catch(12)),
                    t.showToast("结算配置加载失败，请稍后重试");
                case 28:
                  return (
                    (e.prev = 28),
                    t.setData({ checkoutPreparing: !1 }),
                    e.finish(28)
                  );
                case 31:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[12, 25, 28, 31]]
        );
      })
    )();
  },
  handleCheckoutItemOptionTap: function (e) {
    var a = this.data.checkoutData;
    if (a) {
      var r =
          e && e.currentTarget && e.currentTarget.dataset
            ? e.currentTarget.dataset
            : {},
        n = String(r.groupCode || "").trim(),
        i = String(r.optionCode || "").trim();
      if (n && i) {
        var o = P({ optionGroups: a.itemOptionGroups }).map(function (t) {
            return t.groupCode !== n
              ? t
              : Object.assign({}, t, {
                  selectedOptionCode: i,
                  options: t.options.map(function (t) {
                    return Object.assign({}, t, {
                      selected: t.optionCode === i,
                    });
                  }),
                });
          }),
          s = Object.assign({}, a.selectedItemOptions || {}, t({}, n, i)),
          u = w(
            Object.assign({}, a, {
              itemOptionGroups: o,
              selectedItemOptions: s,
            }),
            o
          );
        p(this, u);
      }
    }
  },
  handleCloseCheckout: function () {
    l(this);
  },
  handleCheckoutAdjust: function () {
    var t = this;
    return r(
      e().mark(function a() {
        var r, n, i, o;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  (r =
                    t.data && t.data.checkoutData ? t.data.checkoutData : null)
                ) {
                  e.next = 5;
                  break;
                }
                return (
                  l(t),
                  t.data &&
                  !0 === t.data.isStandaloneDiy &&
                  "function" == typeof h
                    ? h(t, "diy")
                    : M(t),
                  e.abrupt("return")
                );
              case 5:
                if (
                  ((n = s(r.beadsOrPattern)),
                  (i = Number.isFinite(Number(r.bgIndex))
                    ? Number(r.bgIndex)
                    : t.data.bgIndex),
                  (o = String(r.name || t.data.currentSchemeName || "").trim()),
                  l(t),
                  !n.length || "function" != typeof t.loadScheme)
                ) {
                  e.next = 19;
                  break;
                }
                if (!q(t, r, n, i, o)) {
                  e.next = 12;
                  break;
                }
                return e.abrupt("return");
              case 12:
                return (e.next = 14), O(t);
              case 14:
                if ("function" != typeof t.ensurePatternMaterialAssets) {
                  e.next = 17;
                  break;
                }
                return (
                  (e.next = 17),
                  t.ensurePatternMaterialAssets(n, {
                    materialMap: r.materialMap || r.materialSnapshot,
                  })
                );
              case 17:
                return (
                  t.loadScheme(n, i, null, o, {
                    renderPlan: r.renderPlan || r.render_plan,
                  }),
                  e.abrupt("return")
                );
              case 19:
                t.data &&
                !0 === t.data.isStandaloneDiy &&
                "function" == typeof h
                  ? h(t, "diy")
                  : M(t),
                  "function" == typeof t.scheduleTabHydration &&
                    t.scheduleTabHydration("diy");
              case 21:
              case "end":
                return e.stop();
            }
        }, a);
      })
    )();
  },
  handleGoCheckoutFromPreview: function () {
    var t = this,
      e = !(!this.data || !0 !== this.data.isStandaloneDiy);
    if (
      (l(this), e && "function" == typeof f) &&
      f(this, "cart", {
        source: "diy_checkout",
        query: { checkoutIntent: "1" },
        startCheckout: !0,
        skipLoginCheck: !0,
        checkoutDelayMs: 220,
        onFailed: function () {
          "function" == typeof t.showToast &&
            t.showToast("打开购物车失败，请稍后重试");
        },
      })
    )
      return;
    "function" == typeof h && h(this, "cart"),
      this.setData({
        isNavVisible: !0,
        profileSubView: "",
        isStandaloneDiy: !1,
      }),
      "function" == typeof this.scheduleTabHydration &&
        this.scheduleTabHydration("cart");
  },
  handleCheckoutConfirm: function () {
    if (D(this, "加入购物车")) {
      var t = this.data.checkoutData;
      if (t) {
        var e = s(t.beadsOrPattern);
        l(this),
          this.setData({
            namingPayload: {
              type: "cart",
              pattern: e,
              perim: t.perim,
              price: t.price,
              bgIndex: Number.isFinite(Number(t.bgIndex))
                ? Number(t.bgIndex)
                : this.data.bgIndex,
              selectedOptions: t.selectedItemOptions || {},
              itemOptionGroups: t.itemOptionGroups || [],
              selectedOptionSummary: t.selectedOptionSummary || {},
            },
            namingValue: t.name || this.data.currentSchemeName || "",
          });
      }
    } else l(this);
  },
};
