var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../../../../../@babel/runtime/helpers/typeof"),
  a = require("../../deps/workshop-deps"),
  n = a.checkCopyright,
  i = a.SCHEME_NAME_MIN_LENGTH,
  s = a.SCHEME_NAME_MAX_LENGTH,
  o = a.formatDate,
  u = a.normalizePattern,
  c = a.normalizeBgIndex,
  p = a.normalizeCartItems,
  l = a.normalizeSchemeItems,
  d = a.getStructure,
  f = a.buildCheckoutData,
  h = a.loadSchemes,
  m = a.saveSchemes,
  b = require("../navigation-coordinator"),
  v = b.setActiveTab,
  y = b.setCheckoutData,
  g = require("./workshop-pattern-checkout-warmup").warmupCheckoutPreviewAssets,
  S = require("../../../../../utils/diyRenderPlan").normalizeRenderPlan,
  x = require("./checkout-item-options"),
  w = x.applySelectedItemOptions,
  k = x.applyItemOptionPricing,
  _ = x.buildSelectedItemOptionSummary,
  I = require("../../storage/local-snapshot-cache"),
  P = I.readLocalSchemesSnapshot,
  C = I.readLocalCartSnapshot,
  M = I.writeLocalSchemesSnapshot,
  A = I.writeLocalCartSnapshot,
  T = { fileType: "jpg", quality: 0.86, maxPixelSize: 1280 };
function D(e) {
  var t = e && "object" === r(e) ? e : {},
    a = function () {
      !0 === (t.data && "object" === r(t.data) ? t.data : {}).isLoggedIn ||
      "function" != typeof t.setData
        ? "function" != typeof t.promptWechatProfileAuthIfNeeded
          ? "function" == typeof t.setData &&
            t.setData({ showProfileAuthPrompt: !0 })
          : t.promptWechatProfileAuthIfNeeded()
        : t.setData({ showProfileAuthPrompt: !0 });
    };
  "function" != typeof t.setManagedTimeout
    ? setTimeout(a, 0)
    : t.setManagedTimeout(a, 0);
}
function N(e) {
  var t = E(e);
  M(t);
}
function j(e) {
  var t = e && "object" === r(e) ? e : {},
    a = Object.assign({}, t);
  return delete a.previewAssetStatus, delete a.previewAssetsLoading, a;
}
function E(e) {
  return Array.isArray(e) ? e.map(j) : [];
}
function O() {
  return P();
}
function U(e, t) {
  var a = [],
    n = new Set(),
    i = function (e) {
      for (var t = Array.isArray(e) ? e : [], i = 0; i < t.length; i += 1) {
        var s = t[i];
        if (s && "object" === r(s)) {
          var o = l([s])[0];
          if (o) {
            var u = q(o);
            u && !n.has(u) && (n.add(u), a.push(o));
          }
        }
      }
    };
  return i(e), i(t), a;
}
function q(e) {
  var t = e && "object" === r(e) ? e : {},
    a = String(t.clientId || t.client_id || "").trim();
  if (a) return "client:".concat(a);
  var n = String(t.id || "").trim();
  if (n) return "id:".concat(n);
  var i = Array.isArray(t.pattern)
    ? t.pattern
        .map(function (e) {
          return String(e || "").trim();
        })
        .filter(Boolean)
        .join(",")
    : "";
  if (!i) return "";
  var s = String(t.name || "").trim(),
    o = Number.isFinite(Number(t.bgIndex)) ? Number(t.bgIndex) : 0;
  return "pattern:".concat(o, "|").concat(s, "|").concat(i);
}
function L(e, t) {
  var a,
    n,
    i,
    s,
    o = l(t || []),
    u =
      ((a = o),
      (n = new Map()),
      (i = new Map()),
      (s = new Map()),
      l(a || []).forEach(function (e) {
        var t = String((e && (e.clientId || e.client_id)) || "").trim(),
          r = String((e && e.id) || "").trim(),
          a = q(e);
        t && !n.has(t) && n.set(t, e),
          r && !i.has(r) && i.set(r, e),
          a && !s.has(a) && s.set(a, e);
      }),
      { byClientId: n, byId: i, byPattern: s });
  return U(
    l(e || []).map(function (e) {
      var t = (function (e, t) {
        var a = t && "object" === r(t) ? t : {},
          n = String(a.clientId || a.client_id || "").trim(),
          i = String(a.id || "").trim();
        if (n && e.byClientId.has(n)) return e.byClientId.get(n);
        if (i && e.byId.has(i)) return e.byId.get(i);
        var s = q(a);
        return s && e.byPattern.has(s) ? e.byPattern.get(s) : null;
      })(u, e);
      if (!t) return e;
      var a = t.renderPlan || t.render_plan,
        n = e.renderPlan || e.render_plan,
        i = a || n,
        s =
          t.materialMap ||
          t.materialSnapshot ||
          e.materialMap ||
          e.materialSnapshot,
        o = Object.assign({}, t, e);
      return (
        s && ((o.materialMap = s), (o.materialSnapshot = s)),
        i && ((o.renderPlan = i), (o.render_plan = i)),
        o
      );
    }),
    o
  );
}
function V(e, t) {
  var r = String(t || "").trim();
  return (
    !!r &&
    l(e || []).some(function (e) {
      var t = String((e && e.id) || "").trim(),
        a = String((e && (e.clientId || e.client_id)) || "").trim();
      return t === r || a === r;
    })
  );
}
function H(e) {
  e &&
    "object" === r(e) &&
    ("function" != typeof e.openMyDesignsSubview
      ? (v(e, "profile"),
        "function" == typeof e.setData &&
          e.setData({ profileSubView: "my_designs", isNavVisible: !1 }))
      : e.openMyDesignsSubview());
}
function z(e) {
  return B.apply(this, arguments);
}
function B() {
  return (B = t(
    e().mark(function t(r) {
      var a;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if ("function" == typeof h) {
                e.next = 2;
                break;
              }
              return e.abrupt("return", []);
            case 2:
              if (
                ((a = function () {
                  return Promise.resolve(h());
                }),
                !r || "function" != typeof r.withRetry)
              ) {
                e.next = 5;
                break;
              }
              return e.abrupt(
                "return",
                r.withRetry(a, { attempts: 2, delayMs: 200 })
              );
            case 5:
              return e.abrupt("return", a());
            case 6:
            case "end":
              return e.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function G(e) {
  return R.apply(this, arguments);
}
function R() {
  return (R = t(
    e().mark(function t(a) {
      var n, i, s, o;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((n = a && a.data && "object" === r(a.data) ? a.data : {}),
                  (i = U(n.savedSchemes, O())),
                  n.isLoggedIn)
                ) {
                  e.next = 4;
                  break;
                }
                return e.abrupt("return", i);
              case 4:
                return (e.prev = 4), (e.next = 7), z(a);
              case 7:
                (s = e.sent), (i = U(s, i)), (e.next = 13);
                break;
              case 11:
                (e.prev = 11), (e.t0 = e.catch(4));
              case 13:
                if (
                  !i.length &&
                  a &&
                  "function" == typeof a.loadPersistedData
                ) {
                  e.next = 15;
                  break;
                }
                return e.abrupt("return", i);
              case 15:
                return (
                  (e.prev = 15),
                  (e.next = 18),
                  Promise.resolve(a.loadPersistedData({ force: !0 }))
                );
              case 18:
                e.next = 22;
                break;
              case 20:
                (e.prev = 20), (e.t1 = e.catch(15));
              case 22:
                return (
                  (o = a && a.data && "object" === r(a.data) ? a.data : {}),
                  (i = U(o.savedSchemes, O())),
                  e.abrupt("return", i)
                );
              case 25:
              case "end":
                return e.stop();
            }
        },
        t,
        null,
        [
          [4, 11],
          [15, 20],
        ]
      );
    })
  )).apply(this, arguments);
}
function W(e) {
  var t = e && e.data && "object" === r(e.data) ? e.data : {},
    a = p(t.cartItems || []);
  return a.length ? a : p(C());
}
function F(e) {
  return u(e);
}
function X(e, t) {
  var r = F(e),
    a = F(t);
  if (!r.length || r.length !== a.length) return !1;
  for (var n = 0; n < r.length; n += 1) if (r[n] !== a[n]) return !1;
  return !0;
}
function Y(e) {
  for (
    var t = e && "object" === r(e) ? e : {},
      a = t.snapshot && "object" === r(t.snapshot) ? t.snapshot : {},
      n = [
        t.previewUrl,
        t.preview_url,
        t.snapshotUrl,
        t.snapshot_url,
        t.coverUrl,
        t.cover_url,
        t.imageUrl,
        t.image_url,
        t.thumbUrl,
        t.thumb_url,
        a.url,
        a.src,
      ],
      i = 0;
    i < n.length;
    i += 1
  ) {
    var s = String(n[i] || "").trim();
    if (s) return s;
  }
  return "";
}
function J(e, t) {
  return (function (e, t) {
    var a = e && e.data && "object" === r(e.data) ? e.data : {},
      n = F(t);
    if (!n.length) return "";
    for (
      var i = [a.visibleFilteredPresets, a.filteredPresets, a.presets], s = 0;
      s < i.length;
      s += 1
    )
      for (
        var o = Array.isArray(i[s]) ? i[s] : [], u = 0;
        u < o.length;
        u += 1
      ) {
        var c = o[u] && "object" === r(o[u]) ? o[u] : null;
        if (c && X(c.pattern, n)) {
          var p = Y(c);
          if (p) return p;
        }
      }
    return "";
  })(e, t);
}
function K(e, t, r) {
  return Q.apply(this, arguments);
}
function Q() {
  return (Q = t(
    e().mark(function t(a, n, i) {
      var s, o;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((s = a && "object" === r(a) ? a : {}),
                  X(
                    (s.data && "object" === r(s.data) ? s.data : {})
                      .currentPattern,
                    n
                  ))
                ) {
                  e.next = 4;
                  break;
                }
                return e.abrupt("return", "");
              case 4:
                if ("function" == typeof s.selectComponent) {
                  e.next = 6;
                  break;
                }
                return e.abrupt("return", "");
              case 6:
                if (
                  ((e.prev = 6),
                  (o = s.selectComponent("#braceletTray")) &&
                    "function" == typeof o.exportShareSnapshot)
                ) {
                  e.next = 10;
                  break;
                }
                return e.abrupt("return", "");
              case 10:
                return (e.next = 12), o.exportShareSnapshot(i);
              case 12:
                return e.abrupt("return", e.sent);
              case 15:
                return (
                  (e.prev = 15), (e.t0 = e.catch(6)), e.abrupt("return", "")
                );
              case 18:
              case "end":
                return e.stop();
            }
        },
        t,
        null,
        [[6, 15]]
      );
    })
  )).apply(this, arguments);
}
function Z(e, t) {
  return $.apply(this, arguments);
}
function $() {
  return ($ = t(
    e().mark(function t(r, a) {
      var n;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (!(n = J(r, a))) {
                e.next = 3;
                break;
              }
              return e.abrupt("return", n);
            case 3:
              return e.abrupt("return", K(r, a));
            case 4:
            case "end":
              return e.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function ee(e, t) {
  return te.apply(this, arguments);
}
function te() {
  return (te = t(
    e().mark(function t(r, a) {
      var n, i;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (n = J(r, a)), (e.next = 3), K(r, a, T);
            case 3:
              return (
                (i = e.sent),
                e.abrupt("return", { snapshotUrl: n || i, orderSnapshotUrl: i })
              );
            case 5:
            case "end":
              return e.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
module.exports = {
  handleNamingInput: function (e) {
    this.setData({ namingValue: e.detail.value || "" });
  },
  handleCloseNaming: function () {
    this.setData({ namingPayload: null, namingValue: "" });
  },
  handleNamingConfirm: function () {
    var r = this;
    return t(
      e().mark(function t() {
        var a, n;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((a = (r.data.namingValue || "").trim()),
                  (n = r.data.namingPayload),
                  !(a.length < i || a.length > s))
                ) {
                  e.next = 5;
                  break;
                }
                return (
                  r.showToast(
                    "名称长度需为 ".concat(i, "-").concat(s, " 个字符")
                  ),
                  e.abrupt("return")
                );
              case 5:
                if (n) {
                  e.next = 7;
                  break;
                }
                return e.abrupt("return");
              case 7:
                if (
                  ("save" !== n.type && "cart" !== n.type) ||
                  !0 === r.data.isLoggedIn
                ) {
                  e.next = 11;
                  break;
                }
                return r.showToast("请先登录"), D(r), e.abrupt("return");
              case 11:
                if ("save" !== n.type) {
                  e.next = 18;
                  break;
                }
                return (
                  (e.next = 14),
                  r.saveScheme(n.pattern, n.perim, n.price, n.bgIndex, a)
                );
              case 14:
                e.sent && r.showToast("方案已保存到我的设计"), (e.next = 21);
                break;
              case 18:
                if ("cart" !== n.type) {
                  e.next = 21;
                  break;
                }
                return (
                  (e.next = 21),
                  r.addToCart(
                    n.pattern,
                    n.perim,
                    n.price,
                    a,
                    n.bgIndex,
                    n.selectedOptions,
                    n.itemOptionGroups,
                    n.selectedOptionSummary
                  )
                );
              case 21:
                r.handleCloseNaming();
              case 22:
              case "end":
                return e.stop();
            }
        }, t);
      })
    )();
  },
  saveScheme: function (r, a, n, i, s) {
    var p = this;
    return t(
      e().mark(function t() {
        var d, f, h, b, v, y, g, x, w, k, _;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if ((d = u(r)).length) {
                    e.next = 4;
                    break;
                  }
                  return (
                    p.showToast("方案数据为空，无法保存"),
                    e.abrupt("return", !1)
                  );
                case 4:
                  return (e.next = 6), G(p);
                case 6:
                  if (!((f = e.sent).length >= 8)) {
                    e.next = 10;
                    break;
                  }
                  return (
                    p.showToast("最多保存 8 个作品，请先删除后再保存"),
                    e.abrupt("return", !1)
                  );
                case 10:
                  return (
                    (h = "s_".concat(Date.now())),
                    (b = c(i, p.data.trayBgs.length)),
                    (v = s || p.data.currentSchemeName || "我的专属设计"),
                    (y = S(
                      p.data && p.data.trayState && p.data.trayState.renderPlan,
                      d
                    )),
                    (e.next = 16),
                    Z(p, d)
                  );
                case 16:
                  if (
                    ((g = e.sent),
                    (x = {}),
                    "function" != typeof p.ensurePatternMaterialAssets)
                  ) {
                    e.next = 28;
                    break;
                  }
                  return (
                    (e.prev = 19),
                    (e.next = 22),
                    p.ensurePatternMaterialAssets(d, {
                      preferCache: !0,
                      remoteTimeoutMs: 3200,
                    })
                  );
                case 22:
                  (x = e.sent), (e.next = 28);
                  break;
                case 25:
                  (e.prev = 25), (e.t0 = e.catch(19)), (x = {});
                case 28:
                  if (
                    ((w = l(
                      [
                        {
                          id: h,
                          clientId: h,
                          name: v,
                          date: o(new Date()),
                          pattern: d,
                          perim: a,
                          price: n,
                          mode: "bracelet",
                          bgIndex: b,
                          snapshotUrl: g,
                          previewUrl: g,
                          materialSnapshot: x,
                          materialMap: x,
                          renderPlan: y,
                        },
                      ].concat(f)
                    )),
                    w.some(function (e) {
                      return String((e && e.id) || "") === h;
                    }))
                  ) {
                    e.next = 33;
                    break;
                  }
                  return (
                    p.showToast("方案保存失败，请重试"), e.abrupt("return", !1)
                  );
                case 33:
                  return (
                    p.setData({ savedSchemes: w, currentSchemeName: v }),
                    p.profileCoordinatorSetSharePattern(d),
                    N(w),
                    (e.prev = 36),
                    (e.next = 39),
                    m(E(w))
                  );
                case 39:
                  if (V((k = e.sent), h)) {
                    e.next = 42;
                    break;
                  }
                  throw new Error("SCHEME_SYNC_MISSING_SAVED_ITEM");
                case 42:
                  return (
                    (_ = L(k, w)),
                    p.setData({ savedSchemes: _, currentSchemeName: v }),
                    N(_),
                    p.profileCoordinatorSetSharePattern(d),
                    H(p),
                    e.abrupt("return", !0)
                  );
                case 50:
                  (e.prev = 50), (e.t1 = e.catch(36));
                case 52:
                  return (
                    "function" == typeof p.persistSchemes &&
                      p.persistSchemes(E(w)),
                    p.showToast("云端同步失败，已本地暂存"),
                    H(p),
                    e.abrupt("return", !1)
                  );
                case 56:
                case "end":
                  return e.stop();
              }
          },
          t,
          null,
          [
            [19, 25],
            [36, 50],
          ]
        );
      })
    )();
  },
  addToCart: function (a, i, s, o, l, h, m, b) {
    var x = this;
    return t(
      e().mark(function t() {
        var I, P, C, M, T, D, N, j, E, O, U, q, L, V, H, z, B, G;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if ((I = u(a)).length) {
                  e.next = 4;
                  break;
                }
                return (
                  x.showToast("方案数据为空，无法加入购物车"),
                  e.abrupt("return", !1)
                );
              case 4:
                return (
                  (P = o || x.data.currentSchemeName || "我的专属设计"),
                  (C = S(
                    x.data && x.data.trayState && x.data.trayState.renderPlan,
                    I
                  )),
                  (M = n(I, x.copyrightContext)),
                  (T =
                    M &&
                    x.copyrightContext &&
                    "object" === r(x.copyrightContext)
                      ? x.copyrightContext
                      : {}),
                  (D = c(
                    void 0 === l ? x.data.bgIndex : l,
                    x.data.trayBgs.length
                  )),
                  (e.next = 11),
                  ee(x, I)
                );
              case 11:
                if (
                  ((N = e.sent),
                  (j = N.snapshotUrl),
                  (E = N.orderSnapshotUrl),
                  "function" != typeof x.ensurePatternMaterialAssets)
                ) {
                  e.next = 20;
                  break;
                }
                return (e.next = 17), x.ensurePatternMaterialAssets(I);
              case 17:
                (e.t0 = e.sent), (e.next = 21);
                break;
              case 20:
                e.t0 = {};
              case 21:
                if (
                  ((O = e.t0),
                  (U = w(m || [], h)),
                  (q = U.length ? _(U) : b || {}),
                  (L = W(x)),
                  (V = Array.isArray(L) ? L.length : 0),
                  !(
                    (H = p(
                      [
                        {
                          id: "cart_".concat(Date.now()),
                          name: P,
                          pattern: I,
                          perim: i,
                          price: s,
                          bgIndex: D,
                          mode: "bracelet",
                          source_designer_id: M,
                          source_creator_work_id:
                            T.source_creator_work_id ||
                            T.sourceCreatorWorkId ||
                            "",
                          source_inspiration_template_id:
                            T.source_inspiration_template_id ||
                            T.sourceInspirationTemplateId ||
                            "",
                          source_entry:
                            T.source_entry || T.sourceEntry || "designer_work",
                          checked: !0,
                          timestamp: Date.now(),
                          snapshotUrl: j,
                          previewUrl: j,
                          orderSnapshotUrl: E,
                          materialSnapshot: O,
                          materialMap: O,
                          renderPlan: C,
                          selectedOptions: h,
                          selectedOptionSummary: q,
                        },
                      ].concat(L)
                    )).length <= V
                  ))
                ) {
                  e.next = 30;
                  break;
                }
                return (
                  x.showToast("加入购物车失败，请重试"), e.abrupt("return", !1)
                );
              case 30:
                if (
                  ((z = !(!x.data || !0 !== x.data.isStandaloneDiy)),
                  x.setData({
                    cartItems: H,
                    currentSchemeName: P,
                    profileSubView: "",
                    isNavVisible: !z || x.data.isNavVisible,
                  }),
                  z || "function" != typeof v || v(x, "cart"),
                  x.profileCoordinatorSetSharePattern(I),
                  (t = H),
                  (R = void 0),
                  (R = Array.isArray(t) ? t : []),
                  A(R),
                  x.persistCart(H),
                  x.updateCartSummary(H),
                  "function" == typeof x.scheduleTabHydration &&
                    x.scheduleTabHydration("cart"),
                  "function" != typeof y)
                ) {
                  e.next = 44;
                  break;
                }
                return (
                  (B = x.data.trayBgs[D] || x.data.currentTrayBg),
                  (G = k(
                    f({
                      beadsOrPattern: I,
                      perim: i,
                      price: s,
                      bgIndex: D,
                      mode: "bracelet",
                      name: P,
                      userWrist: x.data.userWrist,
                      isPreview: !0,
                      structure: d(I),
                      bgUrl: B ? B.url : "",
                      materialSnapshot: O,
                      materialMap: O,
                      renderPlan: C,
                      selectedOptions: h,
                      itemOptionGroups: U,
                      selectedItemOptions: h,
                      selectedOptionSummary: q,
                    }),
                    U
                  )),
                  (e.next = 43),
                  g(G, { timeoutMs: 280 })
                );
              case 43:
                y(x, G);
              case 44:
                return x.showToast("已加入购物车"), e.abrupt("return", !0);
              case 46:
              case "end":
                return e.stop();
            }
          var t, R;
        }, t);
      })
    )();
  },
};
