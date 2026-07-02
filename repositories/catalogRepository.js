var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../@babel/runtime/helpers/typeof"),
  a = require("../services/api/index"),
  n = a.request,
  o = a.normalizeUrl,
  i = a.API_ENDPOINTS,
  s = require("../services/api/apiConfig").RUNTIME_ENV,
  u = require("../constants/storageKeys"),
  c = u.CATALOG_BOOTSTRAP_CACHE_KEY,
  l = u.CATALOG_BOOTSTRAP_LITE_CACHE_KEY,
  p = u.CATALOG_DIY_BOOTSTRAP_CACHE_KEY,
  f = u.CATALOG_DIY_MATERIAL_BUNDLE_CACHE_KEY,
  m = u.CATALOG_DIY_MATERIAL_PAGE_CACHE_KEY,
  h = u.CATALOG_MATERIAL_RESOLVE_CACHE_KEY,
  d = require("../utils/assetCache").invalidateCachedAssetPaths,
  g = require("../utils/logger"),
  b = Object.freeze([
    "stone_catalog_bootstrap_cache_v1",
    "stone_catalog_bootstrap_cache_v2",
    "stone_catalog_bootstrap_cache_v3",
    "stone_catalog_bootstrap_cache_v4",
    "stone_catalog_bootstrap_lite_cache_v1",
    "stone_catalog_bootstrap_lite_cache_v2",
    "stone_catalog_bootstrap_lite_cache_v3",
    "stone_catalog_diy_bootstrap_cache_v1",
    "stone_catalog_diy_material_page_cache_v1",
    "stone_catalog_diy_material_page_cache_v2",
    "stone_catalog_diy_material_bundle_cache_v1",
    "stone_catalog_diy_material_bundle_cache_v2",
    "stone_catalog_material_resolve_cache_v1",
  ]),
  y = Object.freeze([
    "stone_catalog_diy_material_bundle_cache_v1:chunk:",
    "stone_catalog_diy_material_bundle_cache_v2:chunk:",
  ]),
  v = null,
  _ = null,
  M = null,
  C = null,
  A = null,
  S = null,
  x = 0,
  T = Object.create(null),
  w = Object.create(null),
  E = !1,
  k = {
    designer: "设计师款",
    customer: "优秀客订",
    qinglv: "情侣款式",
    couple: "情侣款式",
  };
function j(e) {
  return JSON.parse(JSON.stringify(e));
}
function N() {
  return Date.now();
}
function O(e) {
  var t = Number(e || 0);
  return Number.isFinite(t) && t > 0 ? t : 0;
}
function D(e, t, r) {
  var a = O(t),
    n = Math.max(0, Number(r || 0));
  return {
    source: String(e || ""),
    cachedAt: a,
    maxStaleUntil: a && n ? a + n : 0,
  };
}
function I(e, t) {
  if (!e) return !0;
  var r = O(e.cachedAt);
  if (!r) return !0;
  var a = O(e.maxStaleUntil) || r + Math.max(0, Number(t || 0));
  return !a || a <= N();
}
function R(e, t) {
  if (!e || "object" !== r(e)) return e;
  var a = String((t && t.source) || "").trim(),
    n = O(t && t.cachedAt),
    o = O(t && t.maxStaleUntil);
  return Object.assign({}, e, {
    runtimeSource: a,
    runtimeCachedAt: n,
    runtimeMaxStaleUntil: o,
  });
}
function U(e) {
  var t = e && "object" === r(e) ? e : {};
  return {
    version: String(t.version || t.configVersion || "").trim(),
    updatedAt: String(t.updatedAt || t.updated_at || "").trim(),
  };
}
function B(e) {
  var t = String(e || "")
    .trim()
    .toLowerCase();
  return "couple" === t || "qinglv" === t || "情侣" === t || "情侣款式" === t
    ? "qinglv"
    : t || "designer";
}
function P(e, t) {
  var r = String(e || "").trim(),
    a = B(t);
  if (r) {
    var n = B(r);
    return k[n] ? k[n] : r;
  }
  return k[a] ? k[a] : a || "分类";
}
function V(e, t) {
  var a = Object.assign({}, e),
    n = String(a.id || ""),
    o = n.charCodeAt(n.length - 1) || 0;
  return (
    (a.bgIndex = Number.isFinite(a.bgIndex) ? a.bgIndex : o % Math.max(1, t)),
    (a.category = B(a.category)),
    a.previewUrl ||
      (a.previewUrl = (function (e) {
        return (
          (e &&
            "object" === r(e) &&
            (e.previewUrl ||
              e.preview_url ||
              e.coverUrl ||
              e.cover_url ||
              e.imageUrl ||
              e.image_url ||
              "")) ||
          ""
        );
      })(a)),
    a
  );
}
function L(e, t) {
  var r = new Map(),
    a = Array.isArray(e) ? e : [],
    n = a.length > 0;
  return (
    a.forEach(function (e, t) {
      var a = (function (e, t) {
        var r = B(
            e &&
              (e.id ||
                e.code ||
                e.category ||
                e.templateType ||
                e.template_type)
          ),
          a = P(e && (e.label || e.name || e.title || e.displayName), r),
          n = Number(e && e.sort);
        return { id: r, label: a, sort: Number.isFinite(n) ? n : t };
      })(e, t);
      r.has(a.id) || r.set(a.id, a);
    }),
    n ||
      (t || []).forEach(function (e, t) {
        var a = B(e && e.category);
        r.has(a) || r.set(a, { id: a, label: P("", a), sort: 1e3 + t });
      }),
    r.size ||
      (r.set("designer", { id: "designer", label: k.designer, sort: 0 }),
      r.set("customer", { id: "customer", label: k.customer, sort: 1 })),
    Array.from(r.values())
      .sort(function (e, t) {
        return e.sort !== t.sort ? e.sort - t.sort : e.id.localeCompare(t.id);
      })
      .map(function (e) {
        return { id: e.id, label: e.label };
      })
  );
}
function G(e) {
  var t = j(e && e.trayBgs ? e.trayBgs : []),
    r = (e && e.presets ? e.presets : []).map(function (e) {
      return V(e, t.length);
    }),
    a = L(e && e.presetCategories ? e.presetCategories : [], r);
  return {
    trayBgs: t,
    beadTypes: j(e && e.beadTypes ? e.beadTypes : []),
    mainCategories: j(e && e.mainCategories ? e.mainCategories : []),
    subCategories: j(e && e.subCategories ? e.subCategories : {}),
    presetCategories: a,
    presets: r,
    physicsConfig: j(e && e.physicsConfig ? e.physicsConfig : {}),
    homeConfig: j(e && e.homeConfig ? e.homeConfig : {}),
    adConfig: j(e && e.adConfig ? e.adConfig : {}),
  };
}
function Y(e) {
  var t = G(e);
  return (
    (t.beadTypes = []),
    (t.mainCategories = Array.isArray(t.mainCategories)
      ? t.mainCategories
      : []),
    (t.subCategories =
      t.subCategories && "object" === r(t.subCategories)
        ? t.subCategories
        : {}),
    (t.presets = []),
    t
  );
}
function q(e) {
  var t = Y(e);
  return (t.beadTypes = []), (t.presets = []), t;
}
function z(e) {
  var t = e && "object" === r(e) ? e : {};
  return {
    beadTypes: j(t.beadTypes || t.materials || []),
    materials: j(t.materials || t.beadTypes || []),
    page: Number(t.page || 1),
    pageSize: Number(t.pageSize || 0),
    total: Number(t.total || 0),
    hasMore: !0 === t.hasMore,
    nextPage:
      null === t.nextPage || void 0 === t.nextPage ? null : Number(t.nextPage),
    fetchedAt: t.fetchedAt || "",
  };
}
function H(e) {
  var t = z(e);
  return {
    beadTypes: t.beadTypes,
    materials: t.materials,
    total: Number((e && e.total) || t.beadTypes.length),
    version: String((e && e.version) || "v2-diy-materials-bundle"),
    materialVersion: String((e && e.materialVersion) || ""),
    fetchedAt: (e && e.fetchedAt) || "",
  };
}
function F(e) {
  var t = String(e || "").trim();
  if (!t) return "";
  if (/^https?:\/\//i.test(t)) return t;
  var r = String((s && s.assetCdnBaseUrl) || "")
    .trim()
    .replace(/\/+$/, "");
  if (!r) return "";
  var a = "/" === t.charAt(0) ? t : "/".concat(t);
  return "".concat(r).concat(a);
}
function K() {
  var e = F("/assets/catalog/diy-materials-bundle.manifest.json");
  if (!e) return "";
  var t = Math.floor(Date.now() / 3e5),
    r = e.indexOf("?") >= 0 ? "&" : "?";
  return "".concat(e).concat(r, "t=").concat(t);
}
function Q(e) {
  var t = e && "object" === r(e) ? e : {},
    a = F(t.manifestUrl || t.manifest_url || "");
  return {
    materialVersion: String(
      t.materialVersion || t.material_version || ""
    ).trim(),
    manifestUrl: a,
    bundleUrl: F(t.bundleUrl || t.bundle_url || ""),
    bundleHash: String(t.bundleHash || t.bundle_hash || "").trim(),
    publishedAt: String(t.publishedAt || t.published_at || "").trim(),
    dirty: !0 === t.dirty || 1 === Number(t.dirty || 0),
    publishing: !0 === t.publishing || 1 === Number(t.publishing || 0),
  };
}
function $() {
  return ($ = t(
    e().mark(function t(r) {
      var a, o;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (a = Object.assign(
                  { timeoutMs: Math.max(1e3, Math.min(9e3, 1800)) },
                  r || {}
                )),
                (e.next = 3),
                n({
                  url: i.catalogDiyMaterialsVersion,
                  method: "GET",
                  timeout: a.timeoutMs,
                  cache: !1,
                  __skipGetCache: !0,
                })
              );
            case 3:
              return (o = e.sent), e.abrupt("return", Q(o));
            case 5:
            case "end":
              return e.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function J(e) {
  return (
    S ||
    (S = (function (e) {
      return $.apply(this, arguments);
    })(e).finally(function () {
      S = null;
    }))
  );
}
function Z(e) {
  var t = e && "object" === r(e) ? e : null;
  if (!t)
    return {
      canUseStaticManifestPath: !1,
      reason: "STATIC_DIY_MATERIALS_BUNDLE_VERSION_UNAVAILABLE",
    };
  var a = String(t.materialVersion || "").trim(),
    n = String(t.manifestUrl || "").trim(),
    o = String(t.bundleUrl || "").trim(),
    i = String(t.bundleHash || "").trim(),
    s = String(t.publishedAt || "").trim();
  return t.publishing
    ? {
        canUseStaticManifestPath: !1,
        reason: "STATIC_DIY_MATERIALS_BUNDLE_PUBLISHING",
      }
    : n
    ? { canUseStaticManifestPath: !0, reason: "" }
    : !!(a || o || i || s) || t.dirty
    ? {
        canUseStaticManifestPath: !1,
        reason: t.dirty
          ? "STATIC_DIY_MATERIALS_BUNDLE_DIRTY"
          : "STATIC_DIY_MATERIALS_BUNDLE_INCOMPLETE",
      }
    : { canUseStaticManifestPath: !0, reason: "" };
}
function W(e) {
  var t = e && "object" === r(e) ? e : {},
    a = F(t.bundleUrl || t.url || t.path);
  return a
    ? {
        version: Number(t.version || 1),
        materialVersion: String(
          t.materialVersion || t.bundleVersion || ""
        ).trim(),
        bundleUrl: a,
        bundleHash: String(t.bundleHash || t.hash || "").trim(),
        byteLength: Number(t.byteLength || 0),
        generatedAt: String(t.generatedAt || t.updatedAt || "").trim(),
      }
    : null;
}
function X(e) {
  return ee.apply(this, arguments);
}
function ee() {
  return (ee = t(
    e().mark(function t(r) {
      var a, o, i, s, u, c, l;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((a = Object.assign(
                    {
                      timeoutMs: Math.max(1200, Math.min(9e3, 4200)),
                      preferVersionEndpoint: !0,
                    },
                    r || {}
                  )),
                  (o = a.versionSnapshot || null),
                  (i = !!o),
                  o || !1 === a.preferVersionEndpoint)
                ) {
                  e.next = 14;
                  break;
                }
                return (
                  (e.prev = 4),
                  (e.next = 7),
                  J({ timeoutMs: Math.max(1e3, Math.min(a.timeoutMs, 1800)) })
                );
              case 7:
                (o = e.sent), (i = !0), (e.next = 14);
                break;
              case 11:
                (e.prev = 11),
                  (e.t0 = e.catch(4)),
                  g.warn(
                    "Catalog diy materials version unavailable, fallback to static manifest path.",
                    e.t0
                  );
              case 14:
                if (
                  (s = i ? Z(o) : { canUseStaticManifestPath: !0, reason: "" })
                    .canUseStaticManifestPath
                ) {
                  e.next = 17;
                  break;
                }
                throw new Error(s.reason);
              case 17:
                if ((u = (o && o.manifestUrl) || K())) {
                  e.next = 20;
                  break;
                }
                return e.abrupt("return", null);
              case 20:
                return (
                  (e.next = 22),
                  n({ url: u, method: "GET", timeout: a.timeoutMs, cache: !1 })
                );
              case 22:
                if (
                  ((c = e.sent),
                  !(
                    (l = W(c)) &&
                    o &&
                    o.materialVersion &&
                    l.materialVersion &&
                    l.materialVersion !== o.materialVersion
                  ))
                ) {
                  e.next = 26;
                  break;
                }
                throw new Error(
                  "STATIC_DIY_MATERIALS_BUNDLE_MANIFEST_VERSION_MISMATCH"
                );
              case 26:
                return e.abrupt("return", l);
              case 27:
              case "end":
                return e.stop();
            }
        },
        t,
        null,
        [[4, 11]]
      );
    })
  )).apply(this, arguments);
}
function te(e) {
  return re.apply(this, arguments);
}
function re() {
  return (re = t(
    e().mark(function t(r) {
      var a, o, i, s;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (a = Object.assign(
                  { timeoutMs: Math.max(2200, Math.min(9e3, 8e3)) },
                  r || {}
                )),
                (e.next = 3),
                X({ timeoutMs: Math.max(1200, Math.min(a.timeoutMs, 4200)) })
              );
            case 3:
              if ((o = e.sent) && o.bundleUrl) {
                e.next = 6;
                break;
              }
              throw new Error(
                "STATIC_DIY_MATERIALS_BUNDLE_MANIFEST_UNAVAILABLE"
              );
            case 6:
              return (
                (e.next = 8),
                n({
                  url: o.bundleUrl,
                  method: "GET",
                  timeout: a.timeoutMs,
                  cache: !1,
                })
              );
            case 8:
              if (
                ((i = e.sent),
                (s = H(
                  Object.assign({}, i || {}, {
                    materialVersion:
                      (i && i.materialVersion) || o.materialVersion,
                  })
                )).beadTypes.length)
              ) {
                e.next = 12;
                break;
              }
              throw new Error("STATIC_DIY_MATERIALS_BUNDLE_EMPTY");
            case 12:
              return e.abrupt("return", s);
            case 13:
            case "end":
              return e.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function ae(e) {
  var t = e && "object" === r(e) ? e : {},
    a = Array.isArray(t.beadTypes) ? t.beadTypes : [],
    n = [],
    o = function (e) {
      var t = String(e || "").trim();
      !t || n.indexOf(t) >= 0 || n.push(t);
    };
  return (
    a.forEach(function (e) {
      e &&
        "object" === r(e) &&
        (o(e.listImgUrl || e.previewUrl || e.coverUrl),
        (Array.isArray(e.variants) ? e.variants : []).forEach(o));
    }),
    n
  );
}
function ne(e, t) {
  return oe.apply(this, arguments);
}
function oe() {
  return (oe = t(
    e().mark(function t(r, a) {
      var n, o, i;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if ((n = String((r && r.materialVersion) || "").trim())) {
                  e.next = 3;
                  break;
                }
                return e.abrupt("return", !1);
              case 3:
                return (
                  (e.prev = 3),
                  (e.next = 6),
                  J({
                    timeoutMs: Math.max(
                      800,
                      Math.min(Number((a && a.timeoutMs) || 0) || 1500, 1800)
                    ),
                  })
                );
              case 6:
                return (
                  (o = e.sent),
                  (i = String((o && o.materialVersion) || "").trim()),
                  e.abrupt("return", !(!i || i === n))
                );
              case 11:
                return (
                  (e.prev = 11),
                  (e.t0 = e.catch(3)),
                  g.warn(
                    "Catalog diy materials version check failed, reuse local bundle cache.",
                    e.t0
                  ),
                  e.abrupt("return", !1)
                );
              case 15:
              case "end":
                return e.stop();
            }
        },
        t,
        null,
        [[3, 11]]
      );
    })
  )).apply(this, arguments);
}
function ie(e) {
  var t = e && "object" === r(e) ? e : {};
  return {
    beadTypes: j(t.beadTypes || t.materials || []),
    materials: j(t.materials || t.beadTypes || []),
    missingCodes: j(t.missingCodes || []),
    fetchedAt: t.fetchedAt || "",
  };
}
function se(e) {
  return !!(
    e &&
    Array.isArray(e.trayBgs) &&
    e.trayBgs.length &&
    Array.isArray(e.beadTypes) &&
    e.beadTypes.length &&
    Array.isArray(e.mainCategories) &&
    e.mainCategories.length
  );
}
function ue(e) {
  if (!e || "object" !== r(e)) return !1;
  var t = Array.isArray(e.trayBgs) && e.trayBgs.length > 0,
    a = Array.isArray(e.presets) && e.presets.length > 0,
    n = e.homeConfig && "object" === r(e.homeConfig) ? e.homeConfig : {},
    o = e.adConfig && "object" === r(e.adConfig) ? e.adConfig : {},
    i = Array.isArray(n.slides) || Array.isArray(n.residentDesigners),
    s = !(!o.profile && !o.paymentSuccessPopup);
  return t || a || i || s;
}
function ce(e) {
  if (!e || "object" !== r(e)) return !1;
  var t = e.adConfig && "object" === r(e.adConfig) ? e.adConfig : {},
    a = t.profile && "object" === r(t.profile) ? t.profile : t,
    n = a.applyDocs && "object" === r(a.applyDocs) ? a.applyDocs : {},
    o =
      a.applyDocConfig && "object" === r(a.applyDocConfig)
        ? a.applyDocConfig
        : {},
    i = n.designer || o.designer,
    s = n.distributor || o.distributor;
  return !(!i || "object" !== r(i) || !s || "object" !== r(s));
}
function le(e) {
  return !!(
    e &&
    Array.isArray(e.trayBgs) &&
    e.trayBgs.length &&
    Array.isArray(e.mainCategories) &&
    e.mainCategories.length
  );
}
function pe(e) {
  var t = String(e || "").trim();
  return !!t && /^[a-z0-9_:-]+$/.test(t);
}
function fe(e) {
  if (!le(e)) return !1;
  var t = Array.isArray(e.mainCategories) ? e.mainCategories : [],
    a =
      e.subCategories && "object" === r(e.subCategories) ? e.subCategories : {};
  return (
    !!t.length &&
    t.every(function (e) {
      var t = String((e && e.id) || "").trim();
      return (
        !!pe(t) &&
        (Array.isArray(a[t]) ? a[t] : []).every(function (e) {
          var t = String((e && e.id) || "").trim();
          return "in_use" === t || pe(t);
        })
      );
    })
  );
}
function me(e) {
  return !(!e || !Array.isArray(e.beadTypes));
}
function he(e, t) {
  var a = e && "object" === r(e) ? e : {},
    n = t && "object" === r(t) ? t : {},
    o = !!String(n.categoryCode || n.subCategoryCode || "").trim(),
    i = !!String(n.keyword || "").trim(),
    s = Array.isArray(a.beadTypes) ? a.beadTypes : [];
  return o && !i && 0 === s.length && 0 === Number(a.total || 0);
}
function de() {
  return "undefined" == typeof wx
    ? null
    : wx.getStorageSync && wx.setStorageSync
    ? ((function (e) {
        if (E) return;
        if (((E = !0), !e || "function" != typeof e.removeStorageSync)) return;
        b.forEach(function (t) {
          try {
            e.removeStorageSync(t);
          } catch (e) {}
        }),
          y.forEach(function (t) {
            for (var r = 0; r < 24; r += 1)
              try {
                e.removeStorageSync("".concat(t).concat(r));
              } catch (e) {
                break;
              }
          });
      })(wx),
      wx)
    : null;
}
function ge() {
  var e = de();
  if (!e) return null;
  try {
    var t = e.getStorageSync(c);
    return t && "object" === r(t)
      ? t.payload && "object" === r(t.payload)
        ? {
            payload: j(t.payload),
            cachedAt: O(t.cachedAt),
            maxStaleUntil: O(t.maxStaleUntil),
            homeConfigVersion: String(t.homeConfigVersion || "").trim(),
          }
        : {
            payload: j(t),
            cachedAt: 0,
            maxStaleUntil: 0,
            homeConfigVersion: "",
          }
      : null;
  } catch (e) {
    return null;
  }
}
function be() {
  var e = de();
  if (!e) return null;
  try {
    var t = e.getStorageSync(l);
    return t && "object" === r(t)
      ? t.payload && "object" === r(t.payload)
        ? {
            payload: j(t.payload),
            cachedAt: O(t.cachedAt),
            maxStaleUntil: O(t.maxStaleUntil),
            homeConfigVersion: String(t.homeConfigVersion || "").trim(),
            contractVersion: Number(t.contractVersion || 0),
          }
        : {
            payload: j(t),
            cachedAt: 0,
            maxStaleUntil: 0,
            homeConfigVersion: "",
            contractVersion: 0,
          }
      : null;
  } catch (e) {
    return null;
  }
}
function ye() {
  var e = de();
  if (!e) return null;
  try {
    var t = e.getStorageSync(p);
    return t && "object" === r(t)
      ? t.payload && "object" === r(t.payload)
        ? { payload: j(t.payload), cachedAt: Number(t.cachedAt || 0) }
        : { payload: j(t), cachedAt: 0 }
      : null;
  } catch (e) {
    return null;
  }
}
function ve(e) {
  var t = de();
  if (!t) return { entries: Object.create(null) };
  try {
    var a = t.getStorageSync(e);
    if (!a || "object" !== r(a)) return { entries: Object.create(null) };
    var n = a.entries && "object" === r(a.entries) ? a.entries : {};
    return { entries: Object.assign(Object.create(null), n) };
  } catch (e) {
    return { entries: Object.create(null) };
  }
}
function _e(e) {
  var t = de();
  if (t && se(e))
    try {
      var r = N(),
        a = U(e.homeConfig);
      t.setStorageSync(c, {
        cachedAt: r,
        maxStaleUntil: r + 864e5,
        homeConfigVersion: a.version,
        homeConfigUpdatedAt: a.updatedAt,
        payload: j(e),
      });
    } catch (e) {}
}
function Me(e) {
  var t = de();
  if (t && ue(e))
    try {
      var r = N(),
        a = U(e.homeConfig);
      t.setStorageSync(l, {
        cachedAt: r,
        maxStaleUntil: r + 864e5,
        homeConfigVersion: a.version,
        homeConfigUpdatedAt: a.updatedAt,
        payload: j(e),
      });
    } catch (e) {}
}
function Ce(e) {
  var t = de();
  if (t && fe(e))
    try {
      t.setStorageSync(p, {
        contractVersion: 3,
        cachedAt: Date.now(),
        payload: j(e),
      });
    } catch (e) {}
}
function Ae(e, t, a, n) {
  var o = n && "object" === r(n) ? n : {},
    i = ve(e).entries[t];
  if (!i || "object" !== r(i) || !i.payload) return null;
  var s = Number(i.cachedAt || 0),
    u = s ? Date.now() - s : Number.POSITIVE_INFINITY;
  if (!o.allowStale && (!s || u > a)) return null;
  try {
    return {
      cachedAt: s,
      ageMs: u,
      isFresh: !!s && u <= a,
      payload: j(i.payload),
    };
  } catch (e) {
    return null;
  }
}
function Se(e, t, r, a) {
  var n = Ae(e, t, r, a);
  return n ? n.payload : null;
}
function xe(e) {
  return ""
    .concat(f, ":chunk:")
    .concat(Math.max(0, Math.floor(Number(e) || 0)));
}
function Te(e, t) {
  if (!e || "function" != typeof e.getStorageSync) return [];
  try {
    var r = e.getStorageSync(xe(t));
    if (Array.isArray(r)) return r;
    if (r && Array.isArray(r.items)) return r.items;
  } catch (e) {
    return [];
  }
  return [];
}
function we(e) {
  return (function (e) {
    if (!e || !e.payload || "object" !== r(e.payload)) return null;
    var t = e.payload;
    if (Array.isArray(t.beadTypes) && t.beadTypes.length) return e;
    var a = Math.max(0, Math.floor(Number(t.chunkCount || 0)));
    if (!t.chunked || !a) return e;
    var n = de();
    if (!n) return null;
    for (var o = [], i = 0; i < a; i += 1) {
      var s = Te(n, i);
      if (!s.length) return null;
      s.forEach(function (e) {
        return o.push(e);
      });
    }
    return Object.assign({}, e, {
      payload: Object.assign({}, t, { beadTypes: o, materials: o }),
    });
  })(Ae(f, "bundle", 6e5, e));
}
function Ee(e) {
  return (
    !!(e && me(e.payload) && e.payload.beadTypes.length) &&
    !(!e.cachedAt || e.ageMs > 2592e6)
  );
}
function ke(e) {
  var t = de(),
    a = Array.isArray(e && e.beadTypes) ? e.beadTypes : [];
  if (!t || !a.length) return !1;
  var n = Math.ceil(a.length / 80);
  if (!n || n > 24) return !1;
  var o = Ae(f, "bundle", 6e5, { allowStale: !0 }),
    i = Number((o && o.payload && o.payload.chunkCount) || 0);
  try {
    for (var s = 0; s < n; s += 1) {
      var u = 80 * s;
      t.setStorageSync(xe(s), {
        version: 1,
        cachedAt: Date.now(),
        items: j(a.slice(u, u + 80)),
      });
    }
    var c = (function (e, t) {
      var a = e && "object" === r(e) ? e : {};
      return Object.assign({}, a, {
        beadTypes: [],
        materials: [],
        chunked: !0,
        chunkSize: 80,
        chunkCount: Math.max(0, Math.floor(Number(t) || 0)),
      });
    })(e, n);
    return (
      je(f, "bundle", c, 1),
      (function (e, t) {
        if (e && "function" == typeof e.removeStorageSync)
          for (var r = Math.max(0, Math.floor(Number(t) || 0)); r < 24; r += 1)
            try {
              e.removeStorageSync(xe(r));
            } catch (e) {
              break;
            }
      })(t, Math.max(n, i)),
      !0
    );
  } catch (e) {
    return (
      g.warn("Catalog diy materials bundle chunk cache write failed", e), !1
    );
  }
}
function je(e, t, a, n) {
  if (t && a && "object" === r(a)) {
    var o = ve(e);
    o.entries[t] = { cachedAt: Date.now(), payload: j(a) };
    var i = Object.keys(o.entries)
      .map(function (e) {
        return { key: e, entry: o.entries[e] };
      })
      .sort(function (e, t) {
        return (
          Number((t.entry && t.entry.cachedAt) || 0) -
          Number((e.entry && e.entry.cachedAt) || 0)
        );
      })
      .slice(0, Math.max(1, Number(n || 80)));
    (o.entries = Object.create(null)),
      i.forEach(function (e) {
        var t = e.key,
          r = e.entry;
        o.entries[t] = r;
      }),
      (function (e, t) {
        var a = de();
        if (a)
          try {
            a.setStorageSync(e, {
              version: 1,
              entries:
                t && t.entries && "object" === r(t.entries) ? t.entries : {},
            });
          } catch (e) {}
      })(e, o);
  }
}
function Ne() {
  return (Ne = t(
    e().mark(function t(r) {
      var a, o;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (a = Object.assign({ timeoutMs: 9e3 }, r || {})),
                (e.next = 3),
                n({
                  url: i.catalogBootstrap,
                  method: "GET",
                  timeout: a.timeoutMs,
                })
              );
            case 3:
              return (o = e.sent), e.abrupt("return", G(o));
            case 5:
            case "end":
              return e.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function Oe() {
  return (Oe = t(
    e().mark(function t(r) {
      var a, o;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (a = Object.assign(
                  { timeoutMs: Math.max(1800, Math.min(9e3, 4200)) },
                  r || {}
                )),
                (e.next = 3),
                n({
                  url: i.catalogBootstrapLite,
                  method: "GET",
                  timeout: a.timeoutMs,
                })
              );
            case 3:
              return (o = e.sent), e.abrupt("return", Y(o));
            case 5:
            case "end":
              return e.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function De() {
  return (De = t(
    e().mark(function t(r) {
      var a, o;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (a = Object.assign(
                  { timeoutMs: Math.max(1800, Math.min(9e3, 4200)) },
                  r || {}
                )),
                (e.next = 3),
                n({
                  url: i.catalogDiyBootstrap,
                  method: "GET",
                  timeout: a.timeoutMs,
                })
              );
            case 3:
              return (o = e.sent), e.abrupt("return", q(o));
            case 5:
            case "end":
              return e.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function Ie() {
  return (Ie = t(
    e().mark(function t(a, o) {
      var s, u, c, l;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (s = Object.assign(
                  { timeoutMs: Math.max(1800, Math.min(9e3, 5200)) },
                  o || {}
                )),
                (u = a && "object" === r(a) ? a : {}),
                (c = {}),
                u.categoryCode && (c.categoryCode = u.categoryCode),
                u.subCategoryCode && (c.subCategoryCode = u.subCategoryCode),
                u.keyword && (c.keyword = u.keyword),
                u.page && (c.page = u.page),
                u.pageSize && (c.pageSize = u.pageSize),
                (e.next = 10),
                n({
                  url: i.catalogDiyMaterials,
                  method: "GET",
                  timeout: s.timeoutMs,
                  data: c,
                })
              );
            case 10:
              return (l = e.sent), e.abrupt("return", z(l));
            case 12:
            case "end":
              return e.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function Re() {
  return (Re = t(
    e().mark(function t(r) {
      var a, s;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  !1 ===
                  (a = Object.assign(
                    {
                      timeoutMs: Math.max(2200, Math.min(9e3, 8e3)),
                      preferStatic: !0,
                    },
                    r || {}
                  )).preferStatic
                ) {
                  e.next = 12;
                  break;
                }
                return (
                  (e.prev = 2),
                  A ||
                    (A = te(a).finally(function () {
                      A = null;
                    })),
                  (e.next = 6),
                  A
                );
              case 6:
                return e.abrupt("return", e.sent);
              case 9:
                (e.prev = 9),
                  (e.t0 = e.catch(2)),
                  g.warn(
                    "Catalog diy materials static bundle unavailable, fallback to CloudRun bundle.",
                    e.t0
                  );
              case 12:
                return (
                  (e.next = 14),
                  n({
                    url: o(i.catalogDiyMaterialsBundle),
                    method: "GET",
                    timeout: a.timeoutMs,
                  })
                );
              case 14:
                return (s = e.sent), e.abrupt("return", H(s));
              case 16:
              case "end":
                return e.stop();
            }
        },
        t,
        null,
        [[2, 9]]
      );
    })
  )).apply(this, arguments);
}
function Ue() {
  return (Ue = t(
    e().mark(function t(r, a) {
      var o, s;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (o = Object.assign(
                  { timeoutMs: Math.max(1800, Math.min(9e3, 5200)) },
                  a || {}
                )),
                (e.next = 3),
                n({
                  url: i.catalogMaterialsResolve,
                  method: "POST",
                  timeout: o.timeoutMs,
                  data: { materialCodes: r },
                })
              );
            case 3:
              return (s = e.sent), e.abrupt("return", ie(s));
            case 5:
            case "end":
              return e.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function Be(e) {
  return (
    v ||
    (v = (function (e) {
      return Ne.apply(this, arguments);
    })(e).finally(function () {
      v = null;
    }))
  );
}
function Pe(e) {
  return (
    _ ||
    (_ = (function (e) {
      return Oe.apply(this, arguments);
    })(e).finally(function () {
      _ = null;
    }))
  );
}
function Ve(e) {
  return (
    M ||
    (M = (function (e) {
      return De.apply(this, arguments);
    })(e).finally(function () {
      M = null;
    }))
  );
}
function Le(e, t, r) {
  return (
    T[e] ||
      (T[e] = (function (e, t) {
        return Ie.apply(this, arguments);
      })(t, r)
        .then(function (r) {
          return he(r, t) || je(m, e, r, 80), r;
        })
        .finally(function () {
          delete T[e];
        })),
    T[e]
  );
}
function Ge(e) {
  return (
    C ||
    (C = (function (e) {
      return Re.apply(this, arguments);
    })(e)
      .then(function (e) {
        return (
          me(e) &&
            e.beadTypes.length &&
            (!(function (e) {
              var t = String((e && e.materialVersion) || "").trim();
              if (t && "function" == typeof d) {
                var r = we({ allowStale: !0 }),
                  a = r && r.payload,
                  n = String((a && a.materialVersion) || "").trim();
                if (n && n !== t) {
                  var o = ae(a).concat(ae(e));
                  d(o);
                }
              }
            })(e),
            ke(e)),
          e
        );
      })
      .finally(function () {
        C = null;
      }))
  );
}
function Ye(e, t, r) {
  return (
    w[e] ||
      (w[e] = (function (e, t) {
        return Ue.apply(this, arguments);
      })(t, r)
        .then(function (t) {
          return je(h, e, t, 80), t;
        })
        .finally(function () {
          delete w[e];
        })),
    w[e]
  );
}
function qe(r) {
  Promise.resolve().then(
    t(
      e().mark(function t() {
        var a;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.prev = 0), (e.next = 3), Be(r);
                case 3:
                  se((a = e.sent)) && _e(a), (e.next = 10);
                  break;
                case 7:
                  (e.prev = 7),
                    (e.t0 = e.catch(0)),
                    g.warn("Catalog background revalidate failed", e.t0);
                case 10:
                case "end":
                  return e.stop();
              }
          },
          t,
          null,
          [[0, 7]]
        );
      })
    )
  );
}
function ze(r) {
  Promise.resolve().then(
    t(
      e().mark(function t() {
        var a;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.prev = 0), (e.next = 3), Pe(r);
                case 3:
                  ue((a = e.sent)) && Me(a), (e.next = 10);
                  break;
                case 7:
                  (e.prev = 7),
                    (e.t0 = e.catch(0)),
                    g.warn("Catalog lite background revalidate failed", e.t0);
                case 10:
                case "end":
                  return e.stop();
              }
          },
          t,
          null,
          [[0, 7]]
        );
      })
    )
  );
}
function He(r) {
  Promise.resolve().then(
    t(
      e().mark(function t() {
        var a;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.prev = 0), (e.next = 3), Ve(r);
                case 3:
                  le((a = e.sent)) && Ce(a), (e.next = 10);
                  break;
                case 7:
                  (e.prev = 7),
                    (e.t0 = e.catch(0)),
                    g.warn(
                      "Catalog diy bootstrap background revalidate failed",
                      e.t0
                    );
                case 10:
                case "end":
                  return e.stop();
              }
          },
          t,
          null,
          [[0, 7]]
        );
      })
    )
  );
}
function Fe(r) {
  var a = Date.now();
  (x > 0 && a - x < 6e4) ||
    ((x = a),
    Promise.resolve().then(
      t(
        e().mark(function t() {
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.prev = 0), (e.next = 3), Ge(r);
                  case 3:
                    e.next = 8;
                    break;
                  case 5:
                    (e.prev = 5),
                      (e.t0 = e.catch(0)),
                      g.warn(
                        "Catalog diy materials bundle background revalidate failed",
                        e.t0
                      );
                  case 8:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[0, 5]]
          );
        })
      )
    ));
}
function Ke(r, a) {
  Promise.resolve()
    .then(
      t(
        e().mark(function t() {
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), ne(r, a);
                case 2:
                  if (e.sent) {
                    e.next = 4;
                    break;
                  }
                  return e.abrupt("return");
                case 4:
                  return (e.next = 6), Ge({ timeoutMs: a && a.timeoutMs });
                case 6:
                case "end":
                  return e.stop();
              }
          }, t);
        })
      )
    )
    .catch(function (e) {
      g.warn(
        "Catalog diy materials bundle background version refresh failed",
        e
      );
    });
}
function Qe() {
  return (Qe = t(
    e().mark(function t(r) {
      var a, n, o, i, s, u, c, l, p, f, m, h;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((a = Object.assign(
                    {
                      forceRemote: !1,
                      remoteTimeoutMs: Math.max(1800, Math.min(9e3, 4200)),
                      preferCache: !0,
                      requireAdConfig: !1,
                    },
                    r || {}
                  )),
                  (n = function (e) {
                    return ue(e) && (!0 !== a.requireAdConfig || ce(e));
                  }),
                  (o = ge()),
                  (i = o && o.payload ? Y(o.payload) : null),
                  (s = o ? Number(o.cachedAt || 0) : 0),
                  (u = I(o, 864e5)),
                  !(n(i) && s > 0 && !u && Date.now() - s < 3e5) ||
                    a.forceRemote ||
                    !0 !== a.preferCache)
                ) {
                  e.next = 10;
                  break;
                }
                return (
                  ze({ timeoutMs: a.remoteTimeoutMs }),
                  e.abrupt("return", R(i, D("frontend_storage_full", s, 864e5)))
                );
              case 10:
                if (
                  ((c = be()),
                  (l = c && c.payload ? Y(c.payload) : null),
                  (p = c ? Number(c.cachedAt || 0) : 0),
                  (f = I(c, 864e5)),
                  !(n(l) && p > 0 && !f && Date.now() - p < 3e5) ||
                    a.forceRemote ||
                    !0 !== a.preferCache)
                ) {
                  e.next = 19;
                  break;
                }
                return (
                  ze({ timeoutMs: a.remoteTimeoutMs }),
                  g.info("Catalog lite bootstrap loaded from cache", {
                    trayBgs: l.trayBgs.length,
                    presets: l.presets.length,
                  }),
                  e.abrupt("return", R(l, D("frontend_storage_lite", p, 864e5)))
                );
              case 19:
                return (
                  (e.prev = 19),
                  (e.next = 22),
                  Pe({ timeoutMs: a.remoteTimeoutMs })
                );
              case 22:
                if (((m = e.sent), !n(m))) {
                  e.next = 27;
                  break;
                }
                return (
                  g.info("Catalog lite bootstrap loaded from remote", {
                    trayBgs: m.trayBgs.length,
                    presets: m.presets.length,
                  }),
                  Me(m),
                  e.abrupt("return", R(m, D("remote", Date.now(), 864e5)))
                );
              case 27:
                if (!n(l) || f) {
                  e.next = 30;
                  break;
                }
                return (
                  g.warn(
                    "Catalog lite bootstrap empty, using local cache snapshot instead."
                  ),
                  e.abrupt(
                    "return",
                    R(l, D("frontend_storage_lite_stale", p, 864e5))
                  )
                );
              case 30:
                throw (
                  (((h = new Error(
                    "Catalog lite bootstrap payload is empty"
                  )).code = "CATALOG_LITE_BOOTSTRAP_EMPTY"),
                  h)
                );
              case 35:
                if (((e.prev = 35), (e.t0 = e.catch(19)), !n(l) || f)) {
                  e.next = 41;
                  break;
                }
                return (
                  ze({ timeoutMs: a.remoteTimeoutMs }),
                  g.warn(
                    "Catalog lite bootstrap request failed, using local cache snapshot instead.",
                    e.t0
                  ),
                  e.abrupt(
                    "return",
                    R(l, D("frontend_storage_lite_stale", p, 864e5))
                  )
                );
              case 41:
                throw e.t0;
              case 42:
              case "end":
                return e.stop();
            }
        },
        t,
        null,
        [[19, 35]]
      );
    })
  )).apply(this, arguments);
}
function $e() {
  return ($e = t(
    e().mark(function t(r) {
      var a, n, o, i, s, u, c, l, p;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((a = Object.assign(
                    { forceRemote: !1, remoteTimeoutMs: 9e3, preferCache: !1 },
                    r || {}
                  )),
                  (n = ge()),
                  (o = n && n.payload ? n.payload : null),
                  (i = n ? Number(n.cachedAt || 0) : 0),
                  (s = I(n, 864e5)),
                  !(se(o) && i > 0 && !s && Date.now() - i < 3e5) ||
                    a.forceRemote)
                ) {
                  e.next = 27;
                  break;
                }
                if (!0 !== a.preferCache) {
                  e.next = 11;
                  break;
                }
                return (
                  qe({ timeoutMs: a.remoteTimeoutMs }),
                  g.info("Catalog bootstrap loaded from cache (preferred)", {
                    trayBgs: o.trayBgs.length,
                    beadTypes: o.beadTypes.length,
                    presets: o.presets.length,
                  }),
                  e.abrupt("return", R(o, D("frontend_storage_full", i, 864e5)))
                );
              case 11:
                return (
                  (u = Math.max(
                    600,
                    Math.min(1800, Number(a.remoteTimeoutMs || 9e3))
                  )),
                  (e.prev = 12),
                  (e.next = 15),
                  Be({ timeoutMs: u })
                );
              case 15:
                if (!se((c = e.sent))) {
                  e.next = 20;
                  break;
                }
                return (
                  g.info(
                    "Catalog bootstrap loaded from remote (fresh-cache bypass)",
                    {
                      trayBgs: c.trayBgs.length,
                      beadTypes: c.beadTypes.length,
                      presets: c.presets.length,
                    }
                  ),
                  _e(c),
                  e.abrupt("return", R(c, D("remote", Date.now(), 864e5)))
                );
              case 20:
                e.next = 25;
                break;
              case 22:
                (e.prev = 22),
                  (e.t0 = e.catch(12)),
                  g.warn(
                    "Catalog fresh-cache remote refresh failed, fallback to cache.",
                    e.t0
                  );
              case 25:
                return (
                  g.info("Catalog bootstrap loaded from cache (fresh)", {
                    trayBgs: o.trayBgs.length,
                    beadTypes: o.beadTypes.length,
                    presets: o.presets.length,
                  }),
                  e.abrupt(
                    "return",
                    R(o, D("frontend_storage_full_stale", i, 864e5))
                  )
                );
              case 27:
                return (
                  (e.prev = 27),
                  (e.next = 30),
                  Be({ timeoutMs: a.remoteTimeoutMs })
                );
              case 30:
                if (!se((l = e.sent))) {
                  e.next = 35;
                  break;
                }
                return (
                  g.info("Catalog bootstrap loaded from remote", {
                    trayBgs: l.trayBgs.length,
                    beadTypes: l.beadTypes.length,
                    presets: l.presets.length,
                  }),
                  _e(l),
                  e.abrupt("return", R(l, D("remote", Date.now(), 864e5)))
                );
              case 35:
                if (!se(o) || s) {
                  e.next = 39;
                  break;
                }
                return (
                  g.warn(
                    "Catalog bootstrap empty, using local cache snapshot instead."
                  ),
                  g.info("Catalog bootstrap loaded from cache", {
                    trayBgs: o.trayBgs.length,
                    beadTypes: o.beadTypes.length,
                    presets: o.presets.length,
                  }),
                  e.abrupt(
                    "return",
                    R(o, D("frontend_storage_full_stale", i, 864e5))
                  )
                );
              case 39:
                throw (
                  (((p = new Error("Catalog bootstrap payload is empty")).code =
                    "CATALOG_BOOTSTRAP_EMPTY"),
                  p)
                );
              case 44:
                if (((e.prev = 44), (e.t1 = e.catch(27)), !se(o) || s)) {
                  e.next = 51;
                  break;
                }
                return (
                  qe({ timeoutMs: a.remoteTimeoutMs }),
                  g.warn(
                    "Catalog bootstrap request failed, using local cache snapshot instead.",
                    e.t1
                  ),
                  g.info("Catalog bootstrap loaded from cache", {
                    trayBgs: o.trayBgs.length,
                    beadTypes: o.beadTypes.length,
                    presets: o.presets.length,
                  }),
                  e.abrupt(
                    "return",
                    R(o, D("frontend_storage_full_stale", i, 864e5))
                  )
                );
              case 51:
                throw e.t1;
              case 52:
              case "end":
                return e.stop();
            }
        },
        t,
        null,
        [
          [12, 22],
          [27, 44],
        ]
      );
    })
  )).apply(this, arguments);
}
function Je(e) {
  var t = e && "object" === r(e) ? e : {};
  return [
    String(t.categoryCode || "").trim(),
    String(t.subCategoryCode || "").trim(),
    String(t.keyword || "").trim(),
    Number(t.page || 1),
    Number(t.pageSize || 24),
  ].join("|");
}
function Ze(e) {
  var t = e && "object" === r(e) ? e : {},
    a = Number(t.page || 1),
    n = Number(t.pageSize || 24);
  return {
    categoryCode: String(t.categoryCode || t.mainCategory || "").trim(),
    subCategoryCode: String(t.subCategoryCode || t.category || "").trim(),
    keyword: String(t.keyword || t.searchQuery || "").trim(),
    page: Number.isFinite(a) && a > 0 ? Math.floor(a) : 1,
    pageSize:
      Number.isFinite(n) && n > 0
        ? Math.max(1, Math.min(60, Math.floor(n)))
        : 24,
  };
}
function We() {
  return (We = t(
    e().mark(function t(r) {
      var a, n, o, i, s, u;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((a = Object.assign(
                    {
                      forceRemote: !1,
                      remoteTimeoutMs: Math.max(1800, Math.min(9e3, 4200)),
                      preferCache: !0,
                    },
                    r || {}
                  )),
                  (n = ye()),
                  (o = n && n.payload ? q(n.payload) : null),
                  (i = n ? Number(n.cachedAt || 0) : 0),
                  !(
                    3 === (n ? Number(n.contractVersion || 0) : 0) &&
                    fe(o) &&
                    i > 0 &&
                    Date.now() - i < 3e5
                  ) || a.forceRemote)
                ) {
                  e.next = 8;
                  break;
                }
                return (
                  !0 === a.preferCache && He({ timeoutMs: a.remoteTimeoutMs }),
                  e.abrupt("return", o)
                );
              case 8:
                return (
                  (e.prev = 8),
                  (e.next = 11),
                  Ve({ timeoutMs: a.remoteTimeoutMs })
                );
              case 11:
                if (!fe((s = e.sent))) {
                  e.next = 15;
                  break;
                }
                return Ce(s), e.abrupt("return", s);
              case 15:
                if (!fe(o)) {
                  e.next = 17;
                  break;
                }
                return e.abrupt("return", o);
              case 17:
                throw (
                  (((u = new Error(
                    "Catalog diy bootstrap payload is empty"
                  )).code = "CATALOG_DIY_BOOTSTRAP_EMPTY"),
                  u)
                );
              case 22:
                if (((e.prev = 22), (e.t0 = e.catch(8)), !fe(o))) {
                  e.next = 27;
                  break;
                }
                return (
                  He({ timeoutMs: a.remoteTimeoutMs }), e.abrupt("return", o)
                );
              case 27:
                throw e.t0;
              case 28:
              case "end":
                return e.stop();
            }
        },
        t,
        null,
        [[8, 22]]
      );
    })
  )).apply(this, arguments);
}
function Xe() {
  return (Xe = t(
    e().mark(function t(r) {
      var a, n, o, i, s;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((a = Ze(r)),
                  (n = Object.assign(
                    {
                      forceRemote: !1,
                      preferCache: !0,
                      remoteTimeoutMs: Math.max(1800, Math.min(9e3, 5200)),
                    },
                    r || {}
                  )),
                  (o = Je(a)),
                  !1 === n.preferCache || n.forceRemote)
                ) {
                  e.next = 8;
                  break;
                }
                if (!me((i = Se(m, o, 3e5))) || he(i, a)) {
                  e.next = 8;
                  break;
                }
                return (
                  Le(o, a, { timeoutMs: n.remoteTimeoutMs }).catch(
                    function () {}
                  ),
                  e.abrupt("return", i)
                );
              case 8:
                return (
                  (e.prev = 8),
                  (e.next = 11),
                  Le(o, a, { timeoutMs: n.remoteTimeoutMs })
                );
              case 11:
                return e.abrupt("return", e.sent);
              case 14:
                if (
                  ((e.prev = 14),
                  (e.t0 = e.catch(8)),
                  !me(
                    (s =
                      !1 !== n.preferCache
                        ? Se(m, o, 3e5, { allowStale: !0 })
                        : null)
                  ) || he(s, a))
                ) {
                  e.next = 19;
                  break;
                }
                return e.abrupt("return", s);
              case 19:
                throw e.t0;
              case 20:
              case "end":
                return e.stop();
            }
        },
        t,
        null,
        [[8, 14]]
      );
    })
  )).apply(this, arguments);
}
function et() {
  return (et = t(
    e().mark(function t(r) {
      var a, n, o, i, s;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  !1 ===
                    (a = Object.assign(
                      {
                        forceRemote: !1,
                        preferCache: !0,
                        remoteTimeoutMs: Math.max(2200, Math.min(9e3, 8e3)),
                      },
                      r || {}
                    )).preferCache ||
                  a.forceRemote
                ) {
                  e.next = 24;
                  break;
                }
                if (
                  ((n = we()), !me((o = n && n.payload)) || !o.beadTypes.length)
                ) {
                  e.next = 8;
                  break;
                }
                return (
                  Ke(o, { timeoutMs: a.remoteTimeoutMs }),
                  Fe({ timeoutMs: a.remoteTimeoutMs }),
                  e.abrupt("return", o)
                );
              case 8:
                if (!Ee((i = we({ allowStale: !0 })))) {
                  e.next = 24;
                  break;
                }
                return (
                  (e.next = 12), ne(i.payload, { timeoutMs: a.remoteTimeoutMs })
                );
              case 12:
                if (!e.sent) {
                  e.next = 22;
                  break;
                }
                return (
                  (e.prev = 13),
                  (e.next = 16),
                  Ge({ timeoutMs: a.remoteTimeoutMs })
                );
              case 16:
                return e.abrupt("return", e.sent);
              case 19:
                (e.prev = 19),
                  (e.t0 = e.catch(13)),
                  g.warn(
                    "Catalog diy materials bundle refresh failed after stale version change, reuse stale cache.",
                    e.t0
                  );
              case 22:
                return (
                  Fe({ timeoutMs: a.remoteTimeoutMs }),
                  e.abrupt("return", i.payload)
                );
              case 24:
                return (
                  (e.prev = 24),
                  (e.next = 27),
                  Ge({ timeoutMs: a.remoteTimeoutMs })
                );
              case 27:
                return e.abrupt("return", e.sent);
              case 30:
                if (
                  ((e.prev = 30),
                  (e.t1 = e.catch(24)),
                  !Ee(
                    (s = !1 !== a.preferCache ? we({ allowStale: !0 }) : null)
                  ))
                ) {
                  e.next = 35;
                  break;
                }
                return e.abrupt("return", s.payload);
              case 35:
                throw e.t1;
              case 36:
              case "end":
                return e.stop();
            }
        },
        t,
        null,
        [
          [13, 19],
          [24, 30],
        ]
      );
    })
  )).apply(this, arguments);
}
function tt(e) {
  var t = Array.isArray(e) ? e : [];
  return Array.from(
    new Set(
      t
        .map(function (e) {
          return String(e || "").trim();
        })
        .filter(function (e) {
          return /^[A-Za-z0-9_-]{1,64}$/.test(e);
        })
    )
  ).slice(0, 200);
}
function rt() {
  return (rt = t(
    e().mark(function t(r, a) {
      var n, o, i, s, u;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if ((n = tt(r)).length) {
                  e.next = 3;
                  break;
                }
                return e.abrupt("return", {
                  beadTypes: [],
                  materials: [],
                  missingCodes: [],
                  fetchedAt: "",
                });
              case 3:
                if (
                  ((o = Object.assign(
                    {
                      forceRemote: !1,
                      preferCache: !0,
                      remoteTimeoutMs: Math.max(1800, Math.min(9e3, 5200)),
                    },
                    a || {}
                  )),
                  (i = n.slice().sort().join("|")),
                  !1 === o.preferCache || o.forceRemote)
                ) {
                  e.next = 9;
                  break;
                }
                if (!(s = Se(h, i, 6e5)) || !Array.isArray(s.beadTypes)) {
                  e.next = 9;
                  break;
                }
                return e.abrupt("return", s);
              case 9:
                return (
                  (e.prev = 9),
                  (e.next = 12),
                  Ye(i, n, { timeoutMs: o.remoteTimeoutMs })
                );
              case 12:
                return e.abrupt("return", e.sent);
              case 15:
                if (
                  ((e.prev = 15),
                  (e.t0 = e.catch(9)),
                  !(u =
                    !1 !== o.preferCache
                      ? Se(h, i, 6e5, { allowStale: !0 })
                      : null) || !Array.isArray(u.beadTypes))
                ) {
                  e.next = 20;
                  break;
                }
                return e.abrupt("return", u);
              case 20:
                throw e.t0;
              case 21:
              case "end":
                return e.stop();
            }
        },
        t,
        null,
        [[9, 15]]
      );
    })
  )).apply(this, arguments);
}
function at() {
  return (at = t(
    e().mark(function t(r, a) {
      var o, s, u, c, l;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if ((o = String(r || "").trim())) {
                e.next = 5;
                break;
              }
              throw (
                (((s = new Error("PRESET_ID_REQUIRED")).code =
                  "PRESET_ID_REQUIRED"),
                s)
              );
            case 5:
              return (
                (u = Object.assign(
                  { timeoutMs: 9e3, recommendLimit: 6, forceRemote: !1 },
                  a || {}
                )),
                (c = Number(u.recommendLimit)),
                (l = Number.isFinite(c)
                  ? Math.max(0, Math.min(12, Math.floor(c)))
                  : 6),
                e.abrupt(
                  "return",
                  n({
                    url: i.catalogPresetDetail(o),
                    method: "GET",
                    timeout: Math.max(1200, Number(u.timeoutMs || 9e3)),
                    cache: !0 !== u.forceRemote && void 0,
                    __skipGetCache: !0 === u.forceRemote,
                    data: { recommendLimit: l },
                  })
                )
              );
            case 9:
            case "end":
              return e.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function nt() {
  return (nt = t(
    e().mark(function t(r, a) {
      var o, i, s;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if ((o = String(r || "").trim())) {
                e.next = 5;
                break;
              }
              throw (
                (((i = new Error("PRESET_ID_REQUIRED")).code =
                  "PRESET_ID_REQUIRED"),
                i)
              );
            case 5:
              return (
                (s = Object.assign(
                  { timeoutMs: 2200, forceRemote: !1 },
                  a || {}
                )),
                e.abrupt(
                  "return",
                  n({
                    url: "/catalog/presets/".concat(
                      encodeURIComponent(o),
                      "/media"
                    ),
                    method: "GET",
                    timeout: Math.max(800, Number(s.timeoutMs || 2200)),
                    cache: !0 !== s.forceRemote && void 0,
                    __skipGetCache: !0 === s.forceRemote,
                  })
                )
              );
            case 7:
            case "end":
              return e.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function ot() {
  return (ot = t(
    e().mark(function t(r, a, o) {
      var s, u, c;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if ((s = String(r || "").trim())) {
                e.next = 5;
                break;
              }
              throw (
                (((u = new Error("PRESET_ID_REQUIRED")).code =
                  "PRESET_ID_REQUIRED"),
                u)
              );
            case 5:
              return (
                (c = Object.assign({ timeoutMs: 1200 }, o || {})),
                e.abrupt(
                  "return",
                  n({
                    url: i.catalogPresetView(s),
                    method: "POST",
                    timeout: Math.max(800, Number(c.timeoutMs || 1200)),
                    data: a || {},
                  })
                )
              );
            case 7:
            case "end":
              return e.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
module.exports = {
  getBootstrapData: function (e) {
    return $e.apply(this, arguments);
  },
  getBootstrapLiteData: function (e) {
    return Qe.apply(this, arguments);
  },
  getDiyBootstrapData: function (e) {
    return We.apply(this, arguments);
  },
  getDiyMaterialsPage: function (e) {
    return Xe.apply(this, arguments);
  },
  getDiyMaterialsBundleData: function (e) {
    return et.apply(this, arguments);
  },
  resolveMaterialsByCodes: function (e, t) {
    return rt.apply(this, arguments);
  },
  getPresetDetailAggregate: function (e, t) {
    return at.apply(this, arguments);
  },
  getPresetMediaAggregate: function (e, t) {
    return nt.apply(this, arguments);
  },
  reportPresetView: function (e, t, r) {
    return ot.apply(this, arguments);
  },
};
