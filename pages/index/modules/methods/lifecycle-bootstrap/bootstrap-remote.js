var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../../../../@babel/runtime/helpers/typeof"),
  r = require("../../deps/lifecycle-deps"),
  s = r.applyRuntimeCatalogSnapshot,
  i = r.getBootstrapData,
  n = r.getBootstrapLiteData,
  o = r.getDiyBootstrapData,
  g = r.getDiyMaterialsPage,
  y = r.getDiyMaterialsBundleData,
  p = r.buildPresets,
  u = r.buildServiceItems,
  l = r.normalizeBgIndex,
  c = require("../../../../../domain-hosts/inspiration/state"),
  d = c.buildInspirationPresetState,
  C = c.buildInspirationVisiblePresetState,
  m = require("../../../../../utils/diyMaterialPrefetch"),
  h = m.DIY_PRIMARY_MATERIAL_PAGE_SIZE,
  f = m.resolveFirstMaterialSubCategory,
  b = require("./bootstrap-home-config"),
  S = b.resolveHomeSlides,
  A = b.resolveHomeDesigners,
  P = b.resolveHomeConfigRuntimeMeta,
  D = b.clampHomeSlideIndex,
  v = b.resolvePreferredTrayBgIndex,
  M = require("./bootstrap-profile-copy").resolveProfileCopy,
  B = require("./bootstrap-preset-utils"),
  I = B.isAllSubCategory,
  T = B.resolveDefaultMenuCategory,
  x = require("../../../../../utils/catalog").materialHasRenderableImage;
function _(e) {
  return e && e._inspirationFeedState
    ? (Array.isArray(e.data && e.data.presets) ? e.data.presets : []).slice()
    : [];
}
function k(e) {
  return !e || "object" !== a(e) || Array.isArray(e)
    ? {}
    : Object.assign({}, e);
}
function R(e) {
  var t = e && "object" === a(e) ? e : {};
  return (
    Array.isArray(t.trayBgs) &&
    t.trayBgs.length > 0 &&
    Array.isArray(t.beadTypes) &&
    t.beadTypes.length > 0 &&
    Array.isArray(t.mainCategories) &&
    t.mainCategories.length > 0 &&
    t.subCategories &&
    "object" === a(t.subCategories)
  );
}
function j() {
  try {
    var e = "function" == typeof getApp ? getApp() : null,
      t = e && e.globalData ? e.globalData : null;
    if (!t) return null;
    var a = t.pendingDiyCatalogSnapshot || t.latestDiyCatalogSnapshot || null,
      r = Number(
        t.pendingDiyCatalogSnapshotAt || t.latestDiyCatalogSnapshotAt || 0
      );
    return (!r || Date.now() - r <= 3e4) && R(a)
      ? ((t.latestDiyCatalogSnapshot = a),
        (t.latestDiyCatalogSnapshotAt = r || Date.now()),
        (t.pendingDiyCatalogSnapshot = null),
        (t.pendingDiyCatalogSnapshotAt = 0),
        a)
      : null;
  } catch (e) {
    return null;
  }
}
function L(e, t) {
  if (!R(t)) return null;
  var r = e && "object" === a(e) ? e : {},
    s = t;
  return Object.assign({}, r, {
    trayBgs:
      Array.isArray(r.trayBgs) && r.trayBgs.length
        ? r.trayBgs.slice()
        : s.trayBgs.slice(),
    beadTypes: s.beadTypes.slice(),
    mainCategories:
      Array.isArray(r.mainCategories) && r.mainCategories.length
        ? r.mainCategories.slice()
        : s.mainCategories.slice(),
    subCategories: k(
      r.subCategories && Object.keys(r.subCategories).length
        ? r.subCategories
        : s.subCategories
    ),
    presetCategories: Array.isArray(r.presetCategories)
      ? r.presetCategories.slice()
      : Array.isArray(s.presetCategories)
      ? s.presetCategories.slice()
      : [],
    presets: Array.isArray(r.presets)
      ? r.presets.slice()
      : Array.isArray(s.presets)
      ? s.presets.slice()
      : [],
    physicsConfig: Object.assign(
      {},
      s.physicsConfig || {},
      r.physicsConfig || {}
    ),
    homeConfig: k(r.homeConfig),
    adConfig: k(r.adConfig),
  });
}
function w(e) {
  return x(e);
}
function F(e, t) {
  var r = t && "object" === a(t) ? t : {},
    s = Array.isArray(r.beadTypes) ? r.beadTypes : [],
    i =
      e && e.catalogSnapshot && "object" === a(e.catalogSnapshot)
        ? e.catalogSnapshot
        : {},
    n = Array.isArray(i.beadTypes) ? i.beadTypes : [];
  if (!n.length || !s.length) return r;
  var o = Object.create(null),
    g = [];
  return (
    n.forEach(function (e) {
      var t = String((e && e.id) || "").trim();
      t && !o[t] && ((o[t] = e), g.push(t));
    }),
    s.forEach(function (e) {
      var t = String((e && e.id) || "").trim();
      t &&
        (o[t] || g.push(t),
        (o[t] = (function (e, t) {
          var r = e && "object" === a(e) ? e : null,
            s = t && "object" === a(t) ? t : null;
          return r
            ? s
              ? w(s) || !w(r)
                ? Object.assign({}, r, s)
                : Object.assign({}, s, r, { id: s.id || r.id })
              : r
            : s;
        })(o[t], e)));
    }),
    Object.assign({}, r, {
      beadTypes: g
        .map(function (e) {
          return o[e];
        })
        .filter(Boolean),
    })
  );
}
function O(e, t, r) {
  var i = e,
    n = r && "object" === a(r) ? r : {},
    o = F(i, t),
    g = Array.isArray(o && o.beadTypes) ? o.beadTypes : [];
  (i.catalogSnapshot = o),
    (i._diyMaterialsBundleReady =
      g.length > 0 && !1 !== n.materialsBundleReady),
    s(i.catalogSnapshot),
    "function" == typeof i.syncTrayPhysicsGeometry &&
      i.syncTrayPhysicsGeometry("diy_material_snapshot"),
    "function" == typeof i.refreshStandaloneDiyPatternAfterMaterialsReady &&
      i.refreshStandaloneDiyPatternAfterMaterialsReady("diy_material_snapshot"),
    (i._diyMaterialPaging = {
      categoryCode: n.mainCategory,
      subCategoryCode: n.subCategoryCode,
      displayMenuCategory: n.menuCategory,
      keyword: n.searchQuery || "",
      page: 1,
      pageSize: g.length || h,
      hasMore: !1,
      loading: !1,
    }),
    "function" == typeof i.recomputeDisplayBeads &&
      i.recomputeDisplayBeads({
        mainCategory: n.mainCategory,
        menuCategory: n.menuCategory,
        searchQuery: n.searchQuery,
        trayPattern: n.trayPattern,
      }),
    "function" == typeof i.setDataPatch
      ? i.setDataPatch({ diyMaterialsLoading: !1 })
      : "function" == typeof i.setData &&
        i.setData({ diyMaterialsLoading: !1 }),
    (function (e) {
      if (R(e))
        try {
          var t = "function" == typeof getApp ? getApp() : null;
          t &&
            t.globalData &&
            ((t.globalData.latestDiyCatalogSnapshot = e),
            (t.globalData.latestDiyCatalogSnapshotAt = Date.now()));
        } catch (e) {}
    })(t),
    (function (e) {
      var t = e;
      t &&
        !t._blindBoxPresetWarmupStarted &&
        (("function" != typeof t.prewarmBlindBoxPresetPool &&
          "function" != typeof t.ensureInspirationFirstPage) ||
          ((t._blindBoxPresetWarmupStarted = !0),
          Promise.resolve()
            .then(function () {
              return "function" == typeof t.prewarmBlindBoxPresetPool
                ? t.prewarmBlindBoxPresetPool({
                    reason: "diy_bootstrap_blindbox_warmup",
                    fullPresetLimit: 1,
                    renderWarmupLimit: 1,
                    targetCount: 3,
                  })
                : t.ensureInspirationFirstPage({
                    presetCategory: "all",
                    reason: "diy_bootstrap_blindbox_warmup",
                  });
            })
            .catch(function () {
              t._blindBoxPresetWarmupStarted = !1;
            })));
    })(i);
}
function Q(e) {
  return q.apply(this, arguments);
}
function q() {
  return (q = t(
    e().mark(function t(r) {
      var s, i, n;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (s = r && "object" === a(r) ? r : {}),
                  (e.prev = 1),
                  (e.next = 4),
                  y({ forceRemote: !1, preferCache: !0, remoteTimeoutMs: 9e3 })
                );
              case 4:
                return (
                  (i = e.sent),
                  e.abrupt("return", { payload: i, fromBundle: !0 })
                );
              case 8:
                return (
                  (e.prev = 8),
                  (e.t0 = e.catch(1)),
                  (e.next = 12),
                  g({
                    categoryCode: s.mainCategory,
                    subCategoryCode: s.subCategoryCode,
                    keyword: s.searchQuery || "",
                    page: 1,
                    pageSize: h,
                    preferCache: !0,
                    remoteTimeoutMs: 9e3,
                  })
                );
              case 12:
                return (
                  (n = e.sent),
                  e.abrupt("return", { payload: n, fromBundle: !1 })
                );
              case 14:
              case "end":
                return e.stop();
            }
        },
        t,
        null,
        [[1, 8]]
      );
    })
  )).apply(this, arguments);
}
module.exports = {
  bootstrapCatalogLiteData: function (r) {
    var s = this;
    return t(
      e().mark(function t() {
        var i, o, g, y, c, m, h, f, b, B, I, T, x, _, k, R, j, L, w, F;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (i = r && "object" === a(r) ? r : {}),
                    (o = !0 === i.silent),
                    (g = !1 !== i.preferCache),
                    (e.prev = 3),
                    (e.next = 6),
                    s.withRetry(
                      function () {
                        return Promise.resolve(
                          n({
                            forceRemote: !1,
                            preferCache: g,
                            requireAdConfig: !0,
                          })
                        );
                      },
                      { attempts: 1, delayMs: 160 }
                    )
                  );
                case 6:
                  if (
                    ((y = e.sent),
                    (c = Array.isArray(y && y.trayBgs)
                      ? y.trayBgs.slice()
                      : []),
                    (m = p(Array.isArray(y && y.presets) ? y.presets : [], c)),
                    (h = Array.isArray(y && y.presetCategories)
                      ? y.presetCategories.slice()
                      : []),
                    (f = y && y.homeConfig ? y.homeConfig : {}),
                    (b = y && y.adConfig ? y.adConfig : {}),
                    (B = S(f, s.data.homeSlides)),
                    (I = A(f, s.data.homeDesigners)),
                    (T = D(s.data.homeCurrentSlide, B.length)),
                    (x = P(f, y)),
                    (_ = M(b || {})),
                    (k = {
                      homeSlides: B,
                      homeDesigners: I,
                      homeCurrentSlide: T,
                      homeConfigSource: x.source,
                      homeConfigVersion: x.version,
                      homeConfigUpdatedAt: x.updatedAt,
                      homeConfigCachedAt: x.cachedAt,
                      homeContentLoading: !1,
                      presetCategoriesLoading: !1,
                      serviceItems: u(_.serviceItemOverrides),
                      profileQuickContactLabel: _.quickContactLabel,
                      profileApplyCardCopy: _.applyCardCopy,
                      profileApplyDocLabels: _.applyDocLabels,
                      profileApplyDocConfig: _.applyDocConfig,
                    }),
                    c.length &&
                      ((R = v(c, s.data.bgIndex)),
                      (k.trayBgs = c.slice()),
                      (k.bgIndex = R),
                      (k.currentTrayBg = c[l(R, c.length)] || c[0] || null)),
                    h.length && (k.presetCategories = h.slice()),
                    m.length &&
                      ((j = d({
                        presetsInput: m,
                        mainCategoriesInput:
                          s.catalogSnapshot &&
                          Array.isArray(s.catalogSnapshot.mainCategories)
                            ? s.catalogSnapshot.mainCategories
                            : s.data.mainCategories,
                        subCategoriesInput:
                          s.catalogSnapshot && s.catalogSnapshot.subCategories
                            ? s.catalogSnapshot.subCategories
                            : s.data.subCategories,
                        presetCategoriesInput: h,
                        currentPresetCategory: s.data.presetCategory,
                        currentMainCategory: s.data.mainCategory,
                        currentMenuCategory: s.data.menuCategory,
                        preserveMainAndMenu: !0,
                        mainCategoryFallback: s.data.mainCategory || "kuangshi",
                      })),
                      (L = C(j.filteredPresets, s.data.inspirationRenderLimit)),
                      (w = L.visibleFilteredPresets.length > 0),
                      (F =
                        "inspiration" ===
                        String((s.data && s.data.activeTab) || "").trim()),
                      (k.presetCategories = j.presetCategories),
                      (k.presetCategory = j.presetCategory),
                      (k.presets = m),
                      (k.filteredPresets = j.filteredPresets),
                      (k.visibleFilteredPresets = L.visibleFilteredPresets),
                      (k.inspirationLoading = !w && F),
                      (k.inspirationRefreshing = !1),
                      (k.inspirationStale = !1),
                      (k.inspirationFirstPageCategory = j.presetCategory),
                      (k.inspirationFirstPageStatus = w
                        ? "loaded"
                        : F
                        ? "loading"
                        : s.data.inspirationFirstPageStatus || "idle"),
                      (k.inspirationPaging = !1),
                      (k.inspirationHasMorePresets =
                        L.inspirationHasMorePresets)),
                    (s.catalogLiteSnapshot = {
                      trayBgs: c,
                      presetCategories: h,
                      presets: m,
                      homeConfig: Object.assign({}, f || {}),
                      adConfig: Object.assign({}, b || {}),
                      runtimeSource: y && y.runtimeSource,
                      runtimeCachedAt: y && y.runtimeCachedAt,
                      runtimeMaxStaleUntil: y && y.runtimeMaxStaleUntil,
                    }),
                    "function" == typeof s.setDataPatch
                      ? s.setDataPatch(k)
                      : s.setData(k),
                    !s.data ||
                      "inspiration" !== s.data.activeTab ||
                      "function" != typeof s.ensureInspirationFirstPage)
                  ) {
                    e.next = 26;
                    break;
                  }
                  return (
                    (e.next = 26),
                    s.ensureInspirationFirstPage({
                      presetCategory: k.presetCategory || s.data.presetCategory,
                      reason: "bootstrap_lite",
                    })
                  );
                case 26:
                  return e.abrupt("return", !0);
                case 29:
                  return (
                    (e.prev = 29),
                    (e.t0 = e.catch(3)),
                    s.reportInitIssue("catalog_bootstrap_lite", e.t0, {
                      toast: !o,
                      fallbackMessage: "基础数据加载失败，请稍后重试",
                    }),
                    s.setData({
                      homeContentLoading: !1,
                      presetCategoriesLoading: !1,
                    }),
                    e.abrupt("return", !1)
                  );
                case 34:
                case "end":
                  return e.stop();
              }
          },
          t,
          null,
          [[3, 29]]
        );
      })
    )();
  },
  bootstrapDiyCatalogData: function (r) {
    var i = this;
    return t(
      e().mark(function t() {
        var n,
          g,
          p,
          u,
          c,
          C,
          m,
          b,
          S,
          A,
          P,
          D,
          M,
          B,
          x,
          k,
          R,
          w,
          F,
          q,
          H,
          N,
          G,
          E,
          U,
          z,
          W,
          V,
          Y;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((n = r && "object" === a(r) ? r : {}),
                    (g = !0 === n.silent),
                    (p = !1 !== n.preferCache),
                    i.setData({ diyMaterialsLoading: !0 }),
                    (e.prev = 4),
                    (u = j()),
                    !(c = L(u, u)))
                  ) {
                    e.next = 20;
                    break;
                  }
                  return (
                    (C = Array.isArray(c.trayBgs) ? c.trayBgs.slice() : []),
                    (m = v(C, i.data.bgIndex)),
                    (b = d({
                      presetsInput: _(i),
                      mainCategoriesInput: c.mainCategories,
                      subCategoriesInput: c.subCategories,
                      presetCategoriesInput: Array.isArray(
                        i.data.presetCategories
                      )
                        ? i.data.presetCategories
                        : [],
                      currentPresetCategory: i.data.presetCategory,
                      currentMainCategory: i.data.mainCategory,
                      currentMenuCategory: i.data.menuCategory,
                      preserveMainAndMenu: !0,
                      mainCategoryFallback: i.data.mainCategory || "kuangshi",
                    })),
                    (S = !!(
                      i.data &&
                      i.data.trayState &&
                      Array.isArray(i.data.trayState.pattern) &&
                      i.data.trayState.pattern.length
                    )),
                    (A = T(b.currentSubCategories)),
                    (P =
                      !S && "in_use" === b.menuCategory && A
                        ? A
                        : b.menuCategory),
                    (D = {
                      trayBgs: C.slice(),
                      bgIndex: m,
                      currentTrayBg: C[l(m, C.length)] || C[0] || null,
                      mainCategories: b.mainCategories.slice(),
                      mainCategory: b.mainCategory,
                      currentSubCategories: b.currentSubCategories,
                      menuCategory: P,
                    }),
                    "function" == typeof i.setDataPatch
                      ? i.setDataPatch(D)
                      : i.setData(D),
                    (M =
                      P && "in_use" !== P && !I(P)
                        ? P
                        : I(P)
                        ? ""
                        : f(b.currentSubCategories)),
                    O(i, c, {
                      mainCategory: b.mainCategory,
                      subCategoryCode: M,
                      menuCategory: P,
                      searchQuery: i.data.searchQuery,
                      trayPattern: i.data.trayState && i.data.trayState.pattern,
                      materialsBundleReady: !0,
                    }),
                    y({
                      forceRemote: !0,
                      preferCache: !1,
                      remoteTimeoutMs: 9e3,
                    })
                      .then(function (e) {
                        var t = Array.isArray(e && e.beadTypes)
                          ? e.beadTypes
                          : [];
                        if (t.length) {
                          var a = Object.assign({}, i.catalogSnapshot || c, {
                            beadTypes: t,
                          });
                          O(i, a, {
                            mainCategory: i.data.mainCategory || b.mainCategory,
                            subCategoryCode: M,
                            menuCategory: i.data.menuCategory || P,
                            searchQuery: i.data.searchQuery,
                            trayPattern:
                              i.data.trayState && i.data.trayState.pattern,
                            materialsBundleReady: !0,
                          });
                        }
                      })
                      .catch(function () {}),
                    e.abrupt("return", !0)
                  );
                case 20:
                  return (
                    (e.next = 22),
                    i.withRetry(
                      function () {
                        return Promise.resolve(
                          o({ forceRemote: !1, preferCache: p })
                        );
                      },
                      { attempts: 1, delayMs: 160 }
                    )
                  );
                case 22:
                  if (
                    ((B = e.sent),
                    !!(
                      B &&
                      Array.isArray(B.trayBgs) &&
                      B.trayBgs.length &&
                      Array.isArray(B.mainCategories) &&
                      B.mainCategories.length
                    ))
                  ) {
                    e.next = 26;
                    break;
                  }
                  throw new Error(
                    "DIY bootstrap missing tray or category data"
                  );
                case 26:
                  if (
                    ((x = {
                      trayBgs: (B.trayBgs || []).slice(),
                      beadTypes: [],
                      mainCategories: (B.mainCategories || []).slice(),
                      subCategories: Object.assign({}, B.subCategories || {}),
                      presetCategories: Array.isArray(i.data.presetCategories)
                        ? i.data.presetCategories.slice()
                        : [],
                      presets: [],
                      physicsConfig: Object.assign({}, B.physicsConfig || {}),
                      homeConfig: {},
                      adConfig: {},
                    }),
                    (k = x.trayBgs),
                    (R = v(k, i.data.bgIndex)),
                    (w = d({
                      presetsInput: _(i),
                      mainCategoriesInput: x.mainCategories,
                      subCategoriesInput: x.subCategories,
                      presetCategoriesInput: x.presetCategories,
                      currentPresetCategory: i.data.presetCategory,
                      currentMainCategory: i.data.mainCategory,
                      currentMenuCategory: i.data.menuCategory,
                      preserveMainAndMenu: !0,
                      mainCategoryFallback: i.data.mainCategory || "kuangshi",
                    })),
                    (F = !!(
                      i.data &&
                      i.data.trayState &&
                      Array.isArray(i.data.trayState.pattern) &&
                      i.data.trayState.pattern.length
                    )),
                    (q = T(w.currentSubCategories)),
                    (H =
                      !F && "in_use" === w.menuCategory && q
                        ? q
                        : w.menuCategory),
                    (N = {
                      trayBgs: k.slice(),
                      bgIndex: R,
                      currentTrayBg: k[l(R, k.length)] || k[0] || null,
                      mainCategories: w.mainCategories.slice(),
                      mainCategory: w.mainCategory,
                      currentSubCategories: w.currentSubCategories,
                      menuCategory: H,
                    }),
                    "function" == typeof i.setDataPatch
                      ? i.setDataPatch(N)
                      : i.setData(N),
                    (i.catalogSnapshot = x),
                    s(i.catalogSnapshot),
                    "function" == typeof i.syncTrayPhysicsGeometry &&
                      i.syncTrayPhysicsGeometry("diy_shell_snapshot"),
                    "function" ==
                      typeof i.refreshStandaloneDiyPatternAfterMaterialsReady &&
                      i.refreshStandaloneDiyPatternAfterMaterialsReady(
                        "diy_shell_snapshot"
                      ),
                    (G =
                      H && "in_use" !== H && !I(H)
                        ? H
                        : I(H)
                        ? ""
                        : f(w.currentSubCategories)),
                    (E = L(x, j())),
                    (U = {
                      mainCategory: w.mainCategory,
                      subCategoryCode: G,
                      menuCategory: H,
                      searchQuery: i.data.searchQuery,
                      trayPattern: i.data.trayState.pattern,
                    }),
                    !E)
                  ) {
                    e.next = 46;
                    break;
                  }
                  return (
                    O(i, E, Object.assign({}, U, { materialsBundleReady: !0 })),
                    y({
                      forceRemote: !0,
                      preferCache: !1,
                      remoteTimeoutMs: 9e3,
                    })
                      .then(function (e) {
                        var t = Array.isArray(e && e.beadTypes)
                          ? e.beadTypes
                          : [];
                        if (t.length) {
                          var a = Object.assign({}, x, { beadTypes: t });
                          O(i, a, {
                            mainCategory: i.data.mainCategory || w.mainCategory,
                            subCategoryCode: G,
                            menuCategory: i.data.menuCategory || H,
                            searchQuery: i.data.searchQuery,
                            trayPattern:
                              i.data.trayState && i.data.trayState.pattern,
                            materialsBundleReady: !0,
                          });
                        }
                      })
                      .catch(function () {}),
                    e.abrupt("return", !0)
                  );
                case 46:
                  return (e.prev = 46), (e.next = 49), Q(U);
                case 49:
                  (z = e.sent),
                    (W = z && z.payload),
                    (V = Array.isArray(W && W.beadTypes) ? W.beadTypes : []),
                    (Y = Object.assign({}, x, { beadTypes: V })),
                    O(
                      i,
                      Y,
                      Object.assign({}, U, {
                        materialsBundleReady: !(!z || !z.fromBundle),
                      })
                    ),
                    (e.next = 63);
                  break;
                case 56:
                  throw (
                    ((e.prev = 56),
                    (e.t0 = e.catch(46)),
                    (i._diyMaterialsBundleReady = !1),
                    (i._diyMaterialPaging = {
                      categoryCode: w.mainCategory,
                      subCategoryCode: G,
                      displayMenuCategory: H,
                      keyword: i.data.searchQuery || "",
                      page: 1,
                      pageSize: h,
                      hasMore: !1,
                      loading: !1,
                    }),
                    i.setData({ diyMaterialsLoading: !1 }),
                    i.recomputeDisplayBeads({
                      mainCategory: w.mainCategory,
                      menuCategory: H,
                      searchQuery: i.data.searchQuery,
                      trayPattern: i.data.trayState.pattern,
                    }),
                    e.t0)
                  );
                case 63:
                  return e.abrupt("return", !0);
                case 66:
                  return (
                    (e.prev = 66),
                    (e.t1 = e.catch(4)),
                    i.reportInitIssue("catalog_diy_bootstrap", e.t1, {
                      toast: !g,
                      fallbackMessage: "材料库加载失败，请稍后重试",
                    }),
                    i.setData({ diyMaterialsLoading: !1 }),
                    e.abrupt("return", !1)
                  );
                case 71:
                case "end":
                  return e.stop();
              }
          },
          t,
          null,
          [
            [4, 66],
            [46, 56],
          ]
        );
      })
    )();
  },
  bootstrapCatalogData: function (r) {
    var n = this;
    return t(
      e().mark(function t() {
        var o, g, y, p, c, m, h, f, b, B, I, T, x, k, R, j, L, w, F, O, Q, q;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (o = r && "object" === a(r) ? r : {}),
                    (g = !0 === o.silent),
                    (y = !0 === o.preferCache),
                    (e.prev = 3),
                    (e.next = 6),
                    n.withRetry(
                      function () {
                        return Promise.resolve(
                          i({ forceRemote: !1, preferCache: y })
                        );
                      },
                      { attempts: 2, delayMs: 260 }
                    )
                  );
                case 6:
                  if (
                    ((p = e.sent),
                    !!(
                      p &&
                      Array.isArray(p.trayBgs) &&
                      p.trayBgs.length &&
                      Array.isArray(p.beadTypes) &&
                      p.beadTypes.length
                    ))
                  ) {
                    e.next = 10;
                    break;
                  }
                  throw new Error(
                    "Catalog bootstrap missing tray or bead data"
                  );
                case 10:
                  s((c = p)),
                    "function" == typeof n.syncTrayPhysicsGeometry &&
                      n.syncTrayPhysicsGeometry("catalog_bootstrap"),
                    "function" ==
                      typeof n.refreshStandaloneDiyPatternAfterMaterialsReady &&
                      n.refreshStandaloneDiyPatternAfterMaterialsReady(
                        "catalog_bootstrap"
                      ),
                    (n.catalogSnapshot = {
                      trayBgs: (c.trayBgs || []).slice(),
                      beadTypes: (c.beadTypes || []).slice(),
                      mainCategories: (c.mainCategories || []).slice(),
                      subCategories: Object.assign({}, c.subCategories || {}),
                      presetCategories: (c.presetCategories || []).slice(),
                      presets: (c.presets || []).slice(),
                      physicsConfig: Object.assign({}, c.physicsConfig || {}),
                      homeConfig: Object.assign({}, c.homeConfig || {}),
                      adConfig: Object.assign({}, c.adConfig || {}),
                      runtimeSource: c.runtimeSource,
                      runtimeCachedAt: c.runtimeCachedAt,
                      runtimeMaxStaleUntil: c.runtimeMaxStaleUntil,
                    }),
                    (m = n.catalogSnapshot.trayBgs),
                    (h = v(m, n.data.bgIndex)),
                    (f = _(n)),
                    (b = d({
                      presetsInput: f,
                      mainCategoriesInput: n.catalogSnapshot.mainCategories,
                      subCategoriesInput: n.catalogSnapshot.subCategories,
                      presetCategoriesInput: n.catalogSnapshot.presetCategories,
                      currentPresetCategory: n.data.presetCategory,
                      currentMainCategory: n.data.mainCategory,
                      currentMenuCategory: n.data.menuCategory,
                      preserveMainAndMenu: !0,
                      mainCategoryFallback: n.data.mainCategory || "kuangshi",
                    })),
                    (B = C(b.filteredPresets, n.data.inspirationRenderLimit)),
                    (I = B.visibleFilteredPresets.length > 0),
                    (T =
                      "inspiration" ===
                      String((n.data && n.data.activeTab) || "").trim()),
                    (x = S(n.catalogSnapshot.homeConfig, n.data.homeSlides)),
                    (k = A(n.catalogSnapshot.homeConfig, n.data.homeDesigners)),
                    (R = D(n.data.homeCurrentSlide, x.length)),
                    (j = P(n.catalogSnapshot.homeConfig, n.catalogSnapshot)),
                    (L = M(n.catalogSnapshot.adConfig || {})),
                    (w = {
                      trayBgs: m.slice(),
                      bgIndex: h,
                      currentTrayBg: m[l(h, m.length)] || m[0] || null,
                      mainCategories: b.mainCategories.slice(),
                      mainCategory: b.mainCategory,
                      currentSubCategories: b.currentSubCategories,
                      menuCategory: b.menuCategory,
                      presetCategories: b.presetCategories,
                      homeContentLoading: !1,
                      presetCategoriesLoading: !1,
                      homeSlides: x,
                      homeDesigners: k,
                      homeCurrentSlide: R,
                      homeConfigSource: j.source,
                      homeConfigVersion: j.version,
                      homeConfigUpdatedAt: j.updatedAt,
                      homeConfigCachedAt: j.cachedAt,
                      serviceItems: u(L.serviceItemOverrides),
                      profileQuickContactLabel: L.quickContactLabel,
                      profileApplyCardCopy: L.applyCardCopy,
                      profileApplyDocLabels: L.applyDocLabels,
                      profileApplyDocConfig: L.applyDocConfig,
                    }),
                    f.length &&
                      Object.assign(w, {
                        presetCategory: b.presetCategory,
                        presets: f,
                        filteredPresets: b.filteredPresets,
                        visibleFilteredPresets: B.visibleFilteredPresets,
                        inspirationLoading: !I && T,
                        inspirationRefreshing: !1,
                        inspirationStale: !1,
                        inspirationFirstPageCategory: b.presetCategory,
                        inspirationFirstPageStatus: I
                          ? "loaded"
                          : T
                          ? "loading"
                          : n.data.inspirationFirstPageStatus || "idle",
                        inspirationPaging: !1,
                        inspirationHasMorePresets: B.inspirationHasMorePresets,
                        inspirationScrollPrimed: !1,
                      }),
                    "function" == typeof n.setDataPatch
                      ? n.setDataPatch(w)
                      : n.setData(w),
                    "function" == typeof n.markFirstContentfulSection &&
                      n.markFirstContentfulSection({
                        source: "catalog_bootstrap",
                        presetCount: Array.isArray(
                          n.data && n.data.filteredPresets
                        )
                          ? n.data.filteredPresets.length
                          : Array.isArray(b.filteredPresets)
                          ? b.filteredPresets.length
                          : 0,
                      }),
                    (F = function () {
                      return n.recomputeDisplayBeads({
                        mainCategory: b.mainCategory,
                        menuCategory: b.menuCategory,
                        searchQuery: n.data.searchQuery,
                        trayPattern: n.data.trayState.pattern,
                      });
                    }),
                    "diy" ===
                      (O = String(n.data.activeTab || "")
                        .trim()
                        .toLowerCase()) || "inspiration" === O
                      ? F()
                      : "function" == typeof n.deferNonCriticalTask
                      ? n.deferNonCriticalTask(F, 32)
                      : F(),
                    "function" == typeof n.deferNonCriticalTask
                      ? n.deferNonCriticalTask(function () {
                          if ("function" == typeof n.warmupInspirationAssets) {
                            var e = Number(n.data.inspirationRenderLimit),
                              t =
                                Number.isFinite(e) && e > 0 ? Math.floor(e) : 6;
                            n.warmupInspirationAssets({ limit: t });
                          }
                        }, 24)
                      : "function" == typeof n.warmupInspirationAssets &&
                        ((Q = Number(n.data.inspirationRenderLimit)),
                        (q = Number.isFinite(Q) && Q > 0 ? Math.floor(Q) : 6),
                        n.warmupInspirationAssets({ limit: q })),
                    (e.next = 41);
                  break;
                case 37:
                  (e.prev = 37),
                    (e.t0 = e.catch(3)),
                    n.reportInitIssue("catalog_bootstrap", e.t0, {
                      toast: !g,
                      fallbackMessage: "材料库加载失败，请稍后重试",
                    }),
                    n.setData({
                      homeContentLoading: !1,
                      presetCategoriesLoading: !1,
                    });
                case 41:
                case "end":
                  return e.stop();
              }
          },
          t,
          null,
          [[3, 37]]
        );
      })
    )();
  },
};
