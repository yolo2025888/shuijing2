var e = require("../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../@babel/runtime/helpers/defineProperty"),
  n = require("../../@babel/runtime/helpers/typeof"),
  s = require("../../pages/index/modules/deps/trade-deps"),
  i = require("../../pages/index/modules/methods/trade-address"),
  o = i.chooseFromActionSheet,
  c = i.chooseWechatAddressAndSave,
  u = i.normalizeCloudAddresses,
  d = s.getSchemeSharePayload,
  h = s.buildIndexSharePath,
  p = s.normalizePattern,
  l = s.logger,
  m = s.listCheckoutOptions,
  f = s.previewCheckoutFromCheckedItems,
  g = s.formatDecimal,
  b = s.listAddresses,
  S = s.setDefaultAddress,
  v = s.saveWechatAddress,
  k = require("../../contracts/navigation/query-contract").appendQueryParams,
  x = require("../shared/share-image-resolver").resolveDiyShareImageUrl,
  y = require("../shared/share-card-composer"),
  A = y.SHARE_CARD_IMAGE_URL,
  C = y.DEFAULT_SHARE_CARD_WIDTH,
  _ = y.DEFAULT_SHARE_CARD_HEIGHT,
  w = y.composeBraceletShareCard,
  O = require("../../utils/navigation/share-path").normalizeSchemeSharePath,
  T = C,
  D = _,
  I = [
    {
      groupCode: "shipping",
      title: "快递选择",
      amountRole: "freight",
      selectedOptionCode: "sf_standard",
      options: [
        {
          optionCode: "sf_standard",
          title: "中通包邮",
          subtitle: "标准时效寄出",
          amount: 0,
          amountText: "0.00",
          deliveryDays: 3,
          isFree: !0,
          selected: !0,
        },
      ],
    },
  ],
  M = Object.freeze([
    "CHECKOUT_MATERIAL_UNAVAILABLE",
    "CHECKOUT_SCHEME_INVALID",
    "NO_CHECKED_ITEMS",
  ]);
function j(e) {
  var t = (function (e) {
    return String(
      (e && e.code) || (e && e.responseData && e.responseData.code) || ""
    ).trim();
  })(e);
  return !t || M.indexOf(t) < 0;
}
function P(e) {
  return p(e).filter(function (e) {
    return /^[A-Za-z0-9_-]{1,64}$/.test(String(e || ""));
  });
}
function N(e) {
  var t = e && "object" === n(e) ? e : {},
    r = t.data && "object" === n(t.data) ? t.data : {},
    a = P(
      (r.trayState && "object" === n(r.trayState) ? r.trayState : {}).pattern ||
        r.currentPattern ||
        []
    );
  if (!a.length) return "/pages/diy/index?source=diy_photo_share";
  var s = Number(r.bgIndex),
    i = String(r.currentSchemeName || "").trim(),
    o = {
      fromShare: 1,
      source: "diy_photo_share",
      sharedPattern: a.join(","),
      sharedBgIndex: Number.isFinite(s) ? Math.max(0, Math.round(s)) : 0,
      sharedName: i,
    };
  return k("/pages/diy/index", o);
}
function R(e) {
  var t = e && "object" === n(e) ? e : {},
    r = P(t.pattern || []),
    a = Number(t.bgIndex),
    s = {
      fromShare: 1,
      schemeId: String(t.id || "").trim(),
      source: "my_design_share",
      sharedPattern: r.join(","),
      sharedBgIndex: Number.isFinite(a) ? Math.max(0, Math.round(a)) : 0,
      sharedName: String(t.name || "").trim(),
    };
  return k("/pages/diy/index", s);
}
function E(e) {
  for (
    var t = e && "object" === n(e) ? e : {},
      r = t.snapshot && "object" === n(t.snapshot) ? t.snapshot : {},
      a = [
        t.snapshotUrl,
        t.snapshot_url,
        t.previewUrl,
        t.preview_url,
        t.coverUrl,
        t.cover_url,
        t.imageUrl,
        t.image_url,
        r.url,
        r.src,
      ],
      s = 0;
    s < a.length;
    s += 1
  ) {
    var i = String(a[s] || "").trim();
    if (i) return i;
  }
  return "";
}
function U(e, t) {
  var r = String(t || "").trim();
  if (!r) return null;
  for (
    var a = e && e.data && "object" === n(e.data) ? e.data : {},
      s = Array.isArray(a.savedSchemes) ? a.savedSchemes : [],
      i = 0;
    i < s.length;
    i += 1
  ) {
    var o = s[i];
    if (String((o && o.id) || "").trim() === r) return o;
  }
  return null;
}
function L(e, t) {
  var r = U(e, t);
  if (!r) return null;
  if (!p(r.pattern).length) return null;
  var a = "".concat(
      String(r.name || "").trim() || "我的手串设计",
      " - StoneLab"
    ),
    s =
      e &&
      e._savedSchemeShareImageMap &&
      "object" === n(e._savedSchemeShareImageMap)
        ? e._savedSchemeShareImageMap
        : {},
    i = String(r.id || "").trim(),
    o = (i && s[H(i)]) || A;
  return { title: a, path: R(r), imageUrl: o };
}
function B(e, t) {
  var r = e && "object" === n(e) ? e : null,
    a = String(t || "").trim();
  if (!r || !a) return {};
  var s =
    r.data &&
    r.data.savedSchemeShareStateMap &&
    "object" === n(r.data.savedSchemeShareStateMap)
      ? r.data.savedSchemeShareStateMap
      : {};
  return s[a] && "object" === n(s[a]) ? s[a] : {};
}
function F(e, t, r) {
  var s = e && "object" === n(e) ? e : null;
  if (s && "function" == typeof s.setData) {
    var i = String(t || "").trim();
    if (i) {
      var o =
          s.data &&
          s.data.savedSchemeShareStateMap &&
          "object" === n(s.data.savedSchemeShareStateMap)
            ? s.data.savedSchemeShareStateMap
            : {},
        c = Object.assign(
          { status: "idle", imageUrl: "" },
          o[i] || {},
          r || {}
        );
      s.setData({
        savedSchemeShareStateMap: Object.assign({}, o, a({}, i, c)),
      });
    }
  }
}
function G(e, t, r) {
  var a = Math.max(1e3, Number(t) || 8e3);
  return new Promise(function (t) {
    var n = !1,
      s = setTimeout(function () {
        n || ((n = !0), t(r));
      }, a);
    Promise.resolve(e)
      .then(function (e) {
        n || ((n = !0), clearTimeout(s), t(e));
      })
      .catch(function () {
        n || ((n = !0), clearTimeout(s), t(r));
      });
  });
}
function q(e, t, r) {
  return z.apply(this, arguments);
}
function z() {
  return (z = r(
    t().mark(function e(r, a, s) {
      var i;
      return t().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (i = s && "object" === n(s) ? s : {}),
                e.abrupt(
                  "return",
                  w(r, {
                    canvasId: "indexShareComposeCanvas",
                    coverUrl: i.forcePatternOnly ? "" : a,
                    pattern: i.pattern,
                    beadSize: i.beadSize,
                    fallbackImageUrl: A,
                    width: T,
                    height: D,
                    layout: i.layout || "stonelab-diy-system",
                    includeTrayBg: !0 === i.includeTrayBg,
                    bgIndex: i.bgIndex,
                    bgUrl: i.bgUrl,
                    braceletCenterYRatio: i.braceletCenterYRatio,
                    braceletBoxRatio: i.braceletBoxRatio,
                    trayCenterYRatio: i.trayCenterYRatio,
                    trayDiameterRatio: i.trayDiameterRatio,
                    brandYRatio: i.brandYRatio,
                  })
                )
              );
            case 2:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function H(e) {
  return "".concat("v2-stonelab-bg-fbfaf8", ":").concat(e);
}
function V(e, t, r) {
  return Y.apply(this, arguments);
}
function Y() {
  return (Y = r(
    t().mark(function e(r, a, s) {
      var i, o, c, u, d, h, l, m, f, g, b;
      return t().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((i = r && "object" === n(r) ? r : null),
                  (o = a && "object" === n(a) ? a : null),
                  i && o)
                ) {
                  e.next = 4;
                  break;
                }
                return e.abrupt("return", A);
              case 4:
                if (
                  ((c = String(o.id || "").trim()),
                  (u = p(o.pattern)),
                  c && u.length)
                ) {
                  e.next = 8;
                  break;
                }
                return e.abrupt("return", A);
              case 8:
                if (
                  ((i._savedSchemeShareImageMap &&
                    "object" === n(i._savedSchemeShareImageMap)) ||
                    (i._savedSchemeShareImageMap = Object.create(null)),
                  (d = H(c)),
                  !(h = String(i._savedSchemeShareImageMap[d] || "").trim()))
                ) {
                  e.next = 13;
                  break;
                }
                return e.abrupt("return", h);
              case 13:
                if (
                  ((l = s && "object" === n(s) ? s : {}),
                  "preparing" !== (m = B(i, c)).status || !0 === l.silent)
                ) {
                  e.next = 17;
                  break;
                }
                return e.abrupt("return", A);
              case 17:
                return (
                  F(i, c, {
                    status: !0 === l.silent ? m.status || "idle" : "preparing",
                    imageUrl: "",
                  }),
                  (e.prev = 18),
                  (f =
                    E(o) ||
                    x(i, u) ||
                    (i.data && i.data.currentTrayBg
                      ? i.data.currentTrayBg.url
                      : "")),
                  (e.next = 22),
                  G(
                    q(i, f, {
                      pattern: u,
                      beadSize: o && (o.beadMm || o.bead_mm),
                      forcePatternOnly: !0,
                      includeTrayBg: !0,
                      bgIndex: o && o.bgIndex,
                    }),
                    8e3,
                    A
                  )
                );
              case 22:
                return (
                  (g = e.sent),
                  (b = String(g || "").trim() || A),
                  (i._savedSchemeShareImageMap[d] = b),
                  F(i, c, { status: "ready", imageUrl: b }),
                  e.abrupt("return", b)
                );
              case 29:
                return (
                  (e.prev = 29),
                  (e.t0 = e.catch(18)),
                  (i._savedSchemeShareImageMap[d] = A),
                  F(i, c, { status: "ready", imageUrl: A }),
                  e.abrupt("return", A)
                );
              case 34:
              case "end":
                return e.stop();
            }
        },
        e,
        null,
        [[18, 29]]
      );
    })
  )).apply(this, arguments);
}
function W(e) {
  if (!e || "object" !== n(e) || Array.isArray(e)) return {};
  var t = {},
    r = String(e.shipping || "").trim();
  return /^[A-Za-z0-9_-]{1,64}$/.test(r) && (t.shipping = r), t;
}
function K(e) {
  var t = Number(e);
  if (!Number.isFinite(t)) return 3;
  var r = Math.round(t);
  return r <= 0 ? 3 : Math.min(30, r);
}
function Z(e) {
  return (Array.isArray(e && e.optionGroups) ? e.optionGroups : [])
    .filter(function (e) {
      return "shipping" === String((e && e.groupCode) || "").trim();
    })
    .map(function (e) {
      var t = String((e && e.groupCode) || "").trim(),
        r = String((e && e.selectedOptionCode) || "").trim(),
        a = Array.isArray(e && e.options) ? e.options : [];
      return {
        groupCode: t,
        title: String((e && e.title) || ""),
        amountRole: String((e && e.amountRole) || ""),
        selectedOptionCode: r,
        options: a.map(function (e) {
          var t = Number((e && e.amount) || 0),
            a = String((e && e.optionCode) || "").trim(),
            n = K(
              e && void 0 !== e.deliveryDays
                ? e.deliveryDays
                : e && e.delivery_days
            );
          return {
            optionCode: a,
            title: String((e && e.title) || ""),
            subtitle: String((e && e.subtitle) || ""),
            amount: t,
            amountText: String((e && e.amountText) || g(t)),
            deliveryDays: n,
            isFree: t <= 0 || (e && !0 === e.isFree),
            selected: a === r || (e && !0 === e.selected),
          };
        }),
      };
    })
    .filter(function (e) {
      return e.groupCode && e.options.length;
    });
}
function $(e, t) {
  var r = W(t);
  return Z({ optionGroups: e })
    .map(function (e) {
      var t = String(r[e.groupCode] || e.selectedOptionCode || "").trim(),
        a =
          e.options.find(function (e) {
            return e.optionCode === t;
          }) ||
          e.options.find(function (e) {
            return e.selected;
          }) ||
          e.options[0],
        n = String((a && a.optionCode) || "").trim();
      return Object.assign({}, e, {
        selectedOptionCode: n,
        options: e.options.map(function (e) {
          return Object.assign({}, e, { selected: e.optionCode === n });
        }),
      });
    })
    .filter(function (e) {
      return e.groupCode && e.options.length;
    });
}
function Q(e) {
  var t = {};
  return (
    Z({ optionGroups: e }).forEach(function (e) {
      var r =
        e.options.find(function (e) {
          return e.selected;
        }) || e.options[0];
      r && (t[e.groupCode] = r.optionCode);
    }),
    t
  );
}
function J(e, t) {
  var r = String(t || "").trim(),
    a = Z({ optionGroups: e }).find(function (e) {
      return e.groupCode === r;
    });
  if (!a) return 0;
  var n =
      a.options.find(function (e) {
        return e.selected;
      }) || a.options[0],
    s = Number((n && n.amount) || 0);
  return Number.isFinite(s) ? s : 0;
}
function X(e) {
  var t = (function (e, t) {
    var r = String(t || "").trim(),
      a = Z({ optionGroups: e }).find(function (e) {
        return e.groupCode === r;
      });
    return (
      (a &&
        (a.options.find(function (e) {
          return e.selected;
        }) ||
          a.options[0])) ||
      null
    );
  })(e, "shipping");
  return String(K(t && t.deliveryDays));
}
function ee(e) {
  return te.apply(this, arguments);
}
function te() {
  return (te = r(
    t().mark(function e(r) {
      var a, n;
      return t().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (((e.prev = 0), "function" != typeof m)) {
                  e.next = 8;
                  break;
                }
                return (e.next = 4), m("order");
              case 4:
                if (((a = e.sent), !(n = $(a && a.optionGroups, r)).length)) {
                  e.next = 8;
                  break;
                }
                return e.abrupt("return", n);
              case 8:
                e.next = 13;
                break;
              case 10:
                (e.prev = 10),
                  (e.t0 = e.catch(0)),
                  l.warn(
                    "[cart] checkout_options_order_failed_fallback_local",
                    {
                      message: String((e.t0 && e.t0.message) || ""),
                      code: String((e.t0 && e.t0.code) || ""),
                    }
                  );
              case 13:
                return e.abrupt("return", $(I, r));
              case 14:
              case "end":
                return e.stop();
            }
        },
        e,
        null,
        [[0, 10]]
      );
    })
  )).apply(this, arguments);
}
function re(e) {
  var t = W(e && e.selectedOptions);
  return Object.keys(t).length ? t : Q(e && e.optionGroups);
}
function ae(e) {
  var t = Number(e && e.payableAmount ? e.payableAmount : 0),
    r = Number(e && e.goodsAmount ? e.goodsAmount : t),
    a = Number(e && e.serviceAmount ? e.serviceAmount : 0),
    n = Number(e && e.freightAmount ? e.freightAmount : 0),
    s = Z(e);
  return {
    checkoutPreview: e || null,
    checkedCartTotal: t,
    checkedCartTotalText: g(t),
    checkoutGoodsAmountText: g(r),
    checkoutServiceAmountText: g(a),
    checkoutFreightAmountText: g(n),
    checkoutOptionGroups: s,
    selectedCheckoutOptions: re(e),
    deliveryEtaText: X(s),
  };
}
function ne(e, t) {
  return se.apply(this, arguments);
}
function se() {
  return (se = r(
    t().mark(function e(r, a) {
      var n, s, i, o, c;
      return t().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (r) {
                e.next = 2;
                break;
              }
              return e.abrupt("return", null);
            case 2:
              if (!Z(r).length) {
                e.next = 4;
                break;
              }
              return e.abrupt("return", r);
            case 4:
              return (e.next = 6), ee(a || (r && r.selectedOptions));
            case 6:
              if ((n = e.sent).length) {
                e.next = 9;
                break;
              }
              return e.abrupt("return", r);
            case 9:
              return (
                (s = Number(r && r.payableAmount ? r.payableAmount : 0)),
                (i = Number(r && r.freightAmount ? r.freightAmount : 0)),
                (o = J(n, "shipping")),
                (c = Number(
                  s > 0
                    ? (s - i + o).toFixed(2)
                    : (
                        Number(r && r.goodsAmount ? r.goodsAmount : 0) +
                        Number(r && r.serviceAmount ? r.serviceAmount : 0) +
                        o
                      ).toFixed(2)
                )),
                e.abrupt(
                  "return",
                  Object.assign({}, r, {
                    freightAmount: o,
                    payableAmount: c,
                    selectedOptions: Q(n),
                    optionGroups: n,
                  })
                )
              );
            case 14:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function ie(e, t, r) {
  var a = (Array.isArray(e) ? e : []).filter(function (e) {
    return e && e.checked && Array.isArray(e.pattern) && e.pattern.length;
  });
  if (!a.length) return null;
  var n = a.map(function (e, t) {
      var r = Number(
          e.itemOptionAmount ||
            (e.selectedOptionSummary && e.selectedOptionSummary.amount) ||
            0
        ),
        a = Number(e.price || 0) + r;
      return {
        id: String(e.id || "item_".concat(t + 1)),
        name: String(e.name || e.displayName || "我的专属设计"),
        pattern: p(e.pattern),
        itemAmount: a,
        price: Number(e.price || 0),
        itemOptionAmount: r,
      };
    }),
    s = n.reduce(function (e, t) {
      return e + Number(t.itemAmount || 0);
    }, 0),
    i = $(r, t),
    o = J(i, "shipping");
  return {
    items: n,
    goodsAmount: s,
    serviceAmount: 0,
    freightAmount: o,
    payableAmount: Number((s + o).toFixed(2)),
    selectedOptions: Q(i),
    optionGroups: i,
    localFallback: !0,
  };
}
function oe(e, t) {
  return ce.apply(this, arguments);
}
function ce() {
  return (ce = r(
    t().mark(function e(r, a) {
      var n;
      return t().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (e.next = 2), ee(a);
            case 2:
              return (n = e.sent), e.abrupt("return", ie(r, a, n));
            case 4:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function ue() {
  return {
    handleStartCheckout: function (a) {
      var n = this;
      return r(
        t().mark(function r() {
          var s, i, o;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      ((s = !(!a || !a.skipLoginCheck)),
                      !n.data.checkoutLaunching)
                    ) {
                      t.next = 3;
                      break;
                    }
                    return t.abrupt("return");
                  case 3:
                    if (s || n.data.isLoggedIn) {
                      t.next = 6;
                      break;
                    }
                    return n.showToast("请先登录"), t.abrupt("return");
                  case 6:
                    if (n.data.checkedCartCount) {
                      t.next = 9;
                      break;
                    }
                    return (
                      n.showToast("请先选择要结算的设计方案"),
                      t.abrupt("return")
                    );
                  case 9:
                    return (
                      n.setData({ checkoutLaunching: !0 }),
                      (t.prev = 10),
                      (t.next = 13),
                      f(n.data.cartItems, {
                        selectedOptions: n.data.selectedCheckoutOptions,
                      })
                    );
                  case 13:
                    return (
                      (i = t.sent),
                      (t.next = 16),
                      ne(i, n.data.selectedCheckoutOptions)
                    );
                  case 16:
                    if ((i = t.sent)) {
                      t.next = 21;
                      break;
                    }
                    return (
                      (t.next = 20),
                      oe(n.data.cartItems, n.data.selectedCheckoutOptions)
                    );
                  case 20:
                    i = t.sent;
                  case 21:
                    n.setData(
                      e(
                        e({}, ae(i || null)),
                        {},
                        {
                          isCheckingOut: !0,
                          checkoutLaunching: !1,
                          checkoutAddressResolving: !(
                            n.data.selectedAddress && n.data.selectedAddress.id
                          ),
                        }
                      )
                    ),
                      n.resetPaymentFlowState(),
                      (n.data.selectedAddress && n.data.selectedAddress.id) ||
                        "function" != typeof n.loadAddressAndDashboard ||
                        Promise.resolve(
                          n.loadAddressAndDashboard({ profileVisible: !1 })
                        )
                          .catch(function () {
                            return null;
                          })
                          .finally(function () {
                            n.data &&
                              n.data.checkoutAddressResolving &&
                              n.setData({ checkoutAddressResolving: !1 });
                          }),
                      (t.next = 42);
                    break;
                  case 26:
                    if (((t.prev = 26), (t.t0 = t.catch(10)), j(t.t0))) {
                      t.next = 32;
                      break;
                    }
                    return (
                      n.setData({ checkoutLaunching: !1 }),
                      n.reportBusinessError(
                        "Checkout preview",
                        t.t0,
                        "结算预览失败，请稍后重试"
                      ),
                      t.abrupt("return")
                    );
                  case 32:
                    return (
                      (t.next = 34),
                      oe(n.data.cartItems, n.data.selectedCheckoutOptions)
                    );
                  case 34:
                    if (!(o = t.sent)) {
                      t.next = 40;
                      break;
                    }
                    return (
                      n.setData(
                        e(
                          e({}, ae(o)),
                          {},
                          {
                            isCheckingOut: !0,
                            checkoutLaunching: !1,
                            checkoutAddressResolving: !(
                              n.data.selectedAddress &&
                              n.data.selectedAddress.id
                            ),
                          }
                        )
                      ),
                      l.warn(
                        "[cart] checkout_preview_remote_failed_fallback_local",
                        {
                          message: String((t.t0 && t.t0.message) || ""),
                          code: String((t.t0 && t.t0.code) || ""),
                        }
                      ),
                      "function" != typeof n.loadAddressAndDashboard ||
                        (n.data.selectedAddress && n.data.selectedAddress.id) ||
                        Promise.resolve(
                          n.loadAddressAndDashboard({ profileVisible: !1 })
                        )
                          .catch(function () {
                            return null;
                          })
                          .finally(function () {
                            n.data &&
                              n.data.checkoutAddressResolving &&
                              n.setData({ checkoutAddressResolving: !1 });
                          }),
                      t.abrupt("return")
                    );
                  case 40:
                    n.setData({ checkoutLaunching: !1 }),
                      n.reportBusinessError(
                        "Checkout preview",
                        t.t0,
                        "结算预览失败，请稍后重试"
                      );
                  case 42:
                  case "end":
                    return t.stop();
                }
            },
            r,
            null,
            [[10, 26]]
          );
        })
      )();
    },
    handleCheckoutOptionTap: function (e) {
      var n = this;
      return r(
        t().mark(function r() {
          var s, i, o, c, u, d, h;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      !n.data.checkoutOptionRefreshing &&
                      !n.data.isConfirmPaying
                    ) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    if (
                      ((s =
                        e && e.currentTarget && e.currentTarget.dataset
                          ? e.currentTarget.dataset
                          : {}),
                      (i = String(s.groupCode || "").trim()),
                      (o = String(s.optionCode || "").trim()),
                      i && o)
                    ) {
                      t.next = 7;
                      break;
                    }
                    return t.abrupt("return");
                  case 7:
                    if ((c = W(n.data.selectedCheckoutOptions))[i] !== o) {
                      t.next = 10;
                      break;
                    }
                    return t.abrupt("return");
                  case 10:
                    return (
                      (u = Object.assign({}, c, a({}, i, o))),
                      n.setData({
                        selectedCheckoutOptions: u,
                        checkoutOptionRefreshing: !0,
                      }),
                      (t.prev = 12),
                      (t.next = 15),
                      f(n.data.cartItems, { selectedOptions: u })
                    );
                  case 15:
                    return (d = t.sent), (t.next = 18), ne(d, u);
                  case 18:
                    if ((d = t.sent)) {
                      t.next = 23;
                      break;
                    }
                    return (t.next = 22), oe(n.data.cartItems, u);
                  case 22:
                    d = t.sent;
                  case 23:
                    n.setData(
                      Object.assign(ae(d || null), {
                        checkoutOptionRefreshing: !1,
                      })
                    ),
                      (t.next = 41);
                    break;
                  case 26:
                    if (((t.prev = 26), (t.t0 = t.catch(12)), j(t.t0))) {
                      t.next = 32;
                      break;
                    }
                    return (
                      n.setData({ checkoutOptionRefreshing: !1 }),
                      n.reportBusinessError(
                        "Checkout option preview",
                        t.t0,
                        "价格刷新失败，请稍后重试"
                      ),
                      t.abrupt("return")
                    );
                  case 32:
                    return (t.next = 34), oe(n.data.cartItems, u);
                  case 34:
                    if (!(h = t.sent)) {
                      t.next = 39;
                      break;
                    }
                    return (
                      n.setData(
                        Object.assign(ae(h), { checkoutOptionRefreshing: !1 })
                      ),
                      l.warn(
                        "[cart] checkout_option_remote_failed_fallback_local",
                        {
                          groupCode: i,
                          optionCode: o,
                          message: String((t.t0 && t.t0.message) || ""),
                          code: String((t.t0 && t.t0.code) || ""),
                        }
                      ),
                      t.abrupt("return")
                    );
                  case 39:
                    n.setData({ checkoutOptionRefreshing: !1 }),
                      n.reportBusinessError(
                        "Checkout option preview",
                        t.t0,
                        "价格刷新失败，请稍后重试"
                      );
                  case 41:
                  case "end":
                    return t.stop();
                }
            },
            r,
            null,
            [[12, 26]]
          );
        })
      )();
    },
    handleCloseConfirmOrder: function () {
      this.setData({
        isCheckingOut: !1,
        checkoutLaunching: !1,
        checkoutAddressResolving: !1,
        checkoutOptionRefreshing: !1,
      }),
        this.resetPaymentFlowState();
    },
  };
}
function de() {
  return {
    handleChooseAddress: function () {
      var e = this;
      return r(
        t().mark(function r() {
          var a, n, s, i, d, h;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.prev = 0),
                      (a = "function" == typeof wx.chooseAddress),
                      (n = []),
                      (t.prev = 3),
                      (t.t0 = u),
                      (t.next = 7),
                      b()
                    );
                  case 7:
                    (t.t1 = t.sent), (n = (0, t.t0)(t.t1)), (t.next = 15);
                    break;
                  case 11:
                    (t.prev = 11),
                      (t.t2 = t.catch(3)),
                      l.warn(
                        "List cloud addresses failed, fallback to wechat address only",
                        t.t2
                      ),
                      (n = []);
                  case 15:
                    return (
                      (t.next = 17),
                      o({
                        wxApi: wx,
                        canUseWechatAddressBook: a,
                        cloudAddresses: n,
                      })
                    );
                  case 17:
                    if ("cloud" !== (s = t.sent).branch || !s.picked) {
                      t.next = 31;
                      break;
                    }
                    return (
                      (i = s.picked),
                      e.setData({ selectedAddress: i }),
                      (t.prev = 21),
                      (t.next = 24),
                      S(i.id)
                    );
                  case 24:
                    t.next = 29;
                    break;
                  case 26:
                    (t.prev = 26),
                      (t.t3 = t.catch(21)),
                      l.warn("Set default address failed", t.t3);
                  case 29:
                    return e.showToast("已切换收货地址"), t.abrupt("return");
                  case 31:
                    if (a) {
                      t.next = 45;
                      break;
                    }
                    if (!(n.length > 0)) {
                      t.next = 37;
                      break;
                    }
                    e.setData({ selectedAddress: n[0] || null }),
                      e.showToast("已使用云端收货地址"),
                      (t.next = 44);
                    break;
                  case 37:
                    if ("function" != typeof e.handleOpenAddressManager) {
                      t.next = 43;
                      break;
                    }
                    return (t.next = 40), e.handleOpenAddressManager();
                  case 40:
                    e.showToast("请先新增收货地址"), (t.next = 44);
                    break;
                  case 43:
                    e.showToast("当前环境不支持新增收货地址");
                  case 44:
                    return t.abrupt("return");
                  case 45:
                    return (
                      (t.next = 47), c({ wxApi: wx, saveWechatAddress: v })
                    );
                  case 47:
                    (d = t.sent),
                      e.setData({ selectedAddress: d || null }),
                      e.showToast("收货地址已更新"),
                      (t.next = 64);
                    break;
                  case 52:
                    if (
                      ((t.prev = 52),
                      (t.t4 = t.catch(0)),
                      !(
                        (h = String((t.t4 && t.t4.errMsg) || "")).indexOf(
                          "cancel"
                        ) >= 0
                      ))
                    ) {
                      t.next = 57;
                      break;
                    }
                    return t.abrupt("return");
                  case 57:
                    if (
                      !(
                        h.indexOf("requiredPrivateInfos") >= 0 ||
                        h.indexOf("no permission") >= 0
                      )
                    ) {
                      t.next = 63;
                      break;
                    }
                    if ("function" != typeof e.handleOpenAddressManager) {
                      t.next = 63;
                      break;
                    }
                    return (t.next = 61), e.handleOpenAddressManager();
                  case 61:
                    return (
                      e.showToast(
                        "微信地址簿未授权，请在地址管理中新增并选择收货地址"
                      ),
                      t.abrupt("return")
                    );
                  case 63:
                    e.reportBusinessError(
                      "Choose address",
                      t.t4,
                      "获取收货地址失败，请稍后重试"
                    );
                  case 64:
                  case "end":
                    return t.stop();
                }
            },
            r,
            null,
            [
              [0, 52],
              [3, 11],
              [21, 26],
            ]
          );
        })
      )();
    },
  };
}
module.exports = {
  createDomainEffects: function () {
    return Object.freeze(
      Object.assign(
        {},
        {
          prewarmSavedSchemeShareCards: function (e, t) {
            var r = this,
              a = Array.isArray(e) ? e : [];
            if (a.length) {
              var s = t && "object" === n(t) ? t : {},
                i = Math.max(1, Number(s.limit) || 6),
                o = a.slice(0, i);
              (this._savedSchemeShareImageMap &&
                "object" === n(this._savedSchemeShareImageMap)) ||
                (this._savedSchemeShareImageMap = Object.create(null)),
                (this._savedSchemeSharePrewarmMap &&
                  "object" === n(this._savedSchemeSharePrewarmMap)) ||
                  (this._savedSchemeSharePrewarmMap = Object.create(null)),
                o.forEach(function (e, t) {
                  var a = String((e && e.id) || "").trim(),
                    n = H(a);
                  !a ||
                    r._savedSchemeShareImageMap[n] ||
                    r._savedSchemeSharePrewarmMap[n] ||
                    (p(e && e.pattern).length &&
                      ((r._savedSchemeSharePrewarmMap[n] = !0),
                      setTimeout(function () {
                        V(r, e, { silent: !0 })
                          .catch(function () {})
                          .finally(function () {
                            r._savedSchemeSharePrewarmMap &&
                              delete r._savedSchemeSharePrewarmMap[n];
                          });
                      }, 140 * t)));
                });
            }
          },
          handlePrepareShareScheme: function (e) {
            var a = this;
            return r(
              t().mark(function r() {
                var n, s, i;
                return t().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((n =
                            e && e.currentTarget && e.currentTarget.dataset
                              ? e.currentTarget.dataset.id
                              : ""),
                          (s = U(a, n)))
                        ) {
                          t.next = 4;
                          break;
                        }
                        return t.abrupt("return");
                      case 4:
                        if ("preparing" !== B(a, n).status) {
                          t.next = 8;
                          break;
                        }
                        return (
                          a.showToast("分享卡片生成中"), t.abrupt("return")
                        );
                      case 8:
                        if (p(s.pattern).length) {
                          t.next = 12;
                          break;
                        }
                        return (
                          a.showToast("该方案数据异常"), t.abrupt("return")
                        );
                      case 12:
                        return (t.next = 14), V(a, s);
                      case 14:
                        (i = t.sent),
                          (a.pendingSharePayload = Object.assign({}, L(a, n), {
                            imageUrl: i || A,
                          })),
                          a.showToast("分享卡片已生成，请再点击分享");
                      case 17:
                      case "end":
                        return t.stop();
                    }
                }, r);
              })
            )();
          },
          handleShareScheme: function (e) {
            var a = this;
            return r(
              t().mark(function r() {
                var n, s, i, o, c;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((n = e.currentTarget.dataset.id), (s = U(a, n)))
                          ) {
                            t.next = 4;
                            break;
                          }
                          return t.abrupt("return");
                        case 4:
                          if (p(s.pattern).length) {
                            t.next = 8;
                            break;
                          }
                          return (
                            a.showToast("该方案数据异常"), t.abrupt("return")
                          );
                        case 8:
                          return (
                            (t.prev = 8),
                            (a.pendingSharePayload = L(a, n)),
                            (t.next = 12),
                            d(n)
                          );
                        case 12:
                          return (
                            (i = t.sent),
                            (r = i && i.path),
                            (u = n),
                            (m = void 0),
                            (m = String(r || "").trim()),
                            (o = O(m || h(u), u)),
                            (t.next = 16),
                            V(a, s)
                          );
                        case 16:
                          (c = t.sent),
                            (a.pendingSharePayload = {
                              title: "".concat(
                                s.name || "我的手串设计",
                                " - StoneLab"
                              ),
                              path: o,
                              imageUrl: c || A,
                            }),
                            a.showToast("请点击右上角“分享”发送方案"),
                            (t.next = 25);
                          break;
                        case 21:
                          (t.prev = 21),
                            (t.t0 = t.catch(8)),
                            l.error("Build share payload failed", t.t0),
                            a.showToast("暂时无法生成分享链接");
                        case 25:
                        case "end":
                          return t.stop();
                      }
                    var r, u, m;
                  },
                  r,
                  null,
                  [[8, 21]]
                );
              })
            )();
          },
          onShareAppMessage: function (e) {
            var t = e && e.target && e.target.dataset ? e.target.dataset : {},
              r = String(t.shareSource || "")
                .trim()
                .toLowerCase(),
              a = L(this, t.id || t.schemeId);
            if ("saved_scheme" === r) {
              var n = U(this, t.id || t.schemeId);
              n &&
                "function" == typeof this.prewarmSavedSchemeShareCards &&
                this.prewarmSavedSchemeShareCards([n], { limit: 1 });
            }
            var s = (this.data && this.data.trayState) || {},
              i = (s && s.pattern) || (this.data && this.data.currentPattern),
              o =
                String(this._diyPhotoShareImageUrl || "").trim() ||
                x(this, i) ||
                A,
              c =
                "diy_photo" === r
                  ? {
                      title: "".concat(
                        String(
                          (this.data && this.data.currentSchemeName) || ""
                        ).trim() || "我的手串设计",
                        " - StoneLab"
                      ),
                      path: N(this),
                      imageUrl: o,
                    }
                  : null,
              u = {
                title: "我的手串设计 - StoneLab",
                path: "/pages/index/index",
                imageUrl: x(this, i) || A,
              },
              d = this.pendingSharePayload || a || c || u;
            return (
              "saved_scheme" === r
                ? (d = a || this.pendingSharePayload || u)
                : "diy_photo" === r && (d = this.pendingSharePayload || c || u),
              (this.pendingSharePayload = null),
              d
            );
          },
          handleScroll: function (e) {
            if (
              "sub" !==
              String(
                (e &&
                  e.currentTarget &&
                  e.currentTarget.dataset &&
                  e.currentTarget.dataset.scrollRole) ||
                  ""
              )
            ) {
              var t = Number(e && e.detail ? e.detail.scrollTop : 0) || 0;
              !(
                "inspiration" ===
                  String((this.data && this.data.activeTab) || "")
                    .trim()
                    .toLowerCase() && t > 24
              ) ||
                (this.data && this.data.inspirationScrollPrimed) ||
                this.setData({ inspirationScrollPrimed: !0 });
              var r = Date.now(),
                a = Number(this._navVisibilityToggledAt || 0);
              if (a > 0 && r - a < 80) this.lastScrollTop = t;
              else {
                var n = !(!this.data || !this.data.isNavVisible),
                  s = n;
                t > this.lastScrollTop + 5 && t > 10
                  ? (s = !1)
                  : t < this.lastScrollTop - 5 && (s = !0),
                  s !== n &&
                    ((this._navVisibilityToggledAt = r),
                    this.setData({ isNavVisible: s })),
                  (this.lastScrollTop = t);
              }
            }
          },
        },
        ue(),
        de()
      )
    );
  },
  createCheckoutEffects: ue,
  createAddressEffects: de,
};
