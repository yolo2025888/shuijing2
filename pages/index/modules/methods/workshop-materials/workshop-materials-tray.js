var e = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../../../../@babel/runtime/helpers/typeof"),
  a = require("../../deps/workshop-deps"),
  i = a.playSound,
  o = a.warmupAudioEngine,
  u = a.enrichTrayState,
  c = a.getTrayStatePattern,
  l = require("../../deps/lifecycle-deps"),
  s = l.fetchCreatorPublicFeed,
  d = l.getDiyMaterialsBundleData,
  f = l.resolveMaterialsByCodes,
  m = l.applyRuntimeCatalogSnapshot,
  p = require("../../../../../utils/assetCache"),
  g = p.normalizeAssetCacheKey,
  y = p.preloadAssetPaths,
  b =
    require("../../../../../utils/diyRenderDeviceTier").resolveCurrentDiyRenderDeviceTier,
  h =
    require("../../../../../utils/diyTrayRenderImages").collectTrayRenderImageOptions,
  _ = require("../../../../../utils/catalog"),
  v = _.getKnownBeadType,
  P = _.materialHasRenderableImage,
  x = _.mergeMaterialPreservingImages,
  S = _.resolveMaterialImageUrl,
  k =
    require("../../../../../utils/diyTrayMaterialPayload").buildTrayRenderMaterialPayload,
  B =
    require("../../../../../components/bracelet-tray/methods/shadow-classifier").shouldUseShapeShadow,
  T =
    require("../../../../../utils/diyMaterialPrefetch").resolveFirstMaterialSubCategory,
  M = Object.freeze({ timeout: !0 }),
  w = Object.freeze(["customer", "designer"]);
function A(e) {
  return Array.isArray(e)
    ? e
        .map(function (e) {
          return String(e || "").trim();
        })
        .filter(Boolean)
    : [];
}
function R(e) {
  for (
    var r,
      t,
      a = (function (e) {
        var r = e && "object" === n(e) ? e : {},
          t = []
            .concat(Array.isArray(r.sectionCodes) ? r.sectionCodes : [])
            .concat(Array.isArray(r.section_codes) ? r.section_codes : []);
        return (
          [r.category, r.templateType, r.template_type, r.section].forEach(
            function (e) {
              null != e && t.push(e);
            }
          ),
          t
            .map(function (e) {
              return String(e || "")
                .trim()
                .toLowerCase();
            })
            .filter(Boolean)
        );
      })(e),
      i = 0;
    i < a.length;
    i += 1
  ) {
    var o =
      ((r = a[i]),
      (t = void 0),
      (t = String(r || "")
        .trim()
        .toLowerCase())
        ? "designer" === t ||
          "design" === t ||
          "creator" === t ||
          "设计师" === t ||
          "设计师款" === t ||
          "设计师作品" === t
          ? "designer"
          : "customer" === t ||
            "custom" === t ||
            "client" === t ||
            "user" === t ||
            "community" === t ||
            "客订" === t ||
            "优秀客订" === t ||
            "客户定制" === t ||
            "用户作品" === t
          ? "customer"
          : ""
        : "");
    if (o) return o;
  }
  return "unknown";
}
function D(e) {
  var r = e && "object" === n(e) ? e : {};
  if (A(r.pattern).length < 8) return !1;
  var t = R(r);
  return "designer" === t || "customer" === t;
}
function C(e) {
  var r = e && "object" === n(e) ? e : {},
    t = String(r.id || r.presetId || r.templateId || "").trim();
  return t || A(r.pattern).join("|");
}
function N() {
  return "blindbox_"
    .concat(Date.now(), "_")
    .concat(Math.random().toString(36).slice(2, 10));
}
function I(e) {
  return String(e || "")
    .trim()
    .slice(0, 96);
}
function j(e, r, t) {
  for (
    var n = ""
        .concat(I(e), ":")
        .concat(String(r || "").trim(), ":")
        .concat(t),
      a = 2166136261,
      i = 0;
    i < n.length;
    i += 1
  )
    a = (16777619 * (a ^= n.charCodeAt(i))) >>> 0;
  return a >>> 0;
}
function U(e, r) {
  var t = Array.isArray(e) ? e.filter(Boolean) : [],
    n = I(r);
  return t.length && n
    ? t
        .map(function (e, r) {
          return {
            item: e,
            index: r,
            rank: j(n, C(e) || A(e && e.pattern).join("|"), r),
          };
        })
        .sort(function (e, r) {
          return e.rank - r.rank || e.index - r.index;
        })
        .map(function (e) {
          return e.item;
        })
    : t;
}
function E() {
  try {
    if ("function" != typeof getApp) return "";
    var e = getApp(),
      r = e && e.globalData ? e.globalData : null;
    if (!r) return "";
    var t = Date.now(),
      n = function (e, r) {
        var n = I(e);
        if (!n) return "";
        var a = t - (Number(r) || 0);
        return a >= 0 && a <= 12e3 ? n : "";
      };
    return (
      n(r.pendingDiyBlindBoxSessionSeed, r.pendingDiyBlindBoxSessionSeedAt) ||
      n(r.latestDiyBlindBoxSessionSeed, r.latestDiyBlindBoxSessionSeedAt) ||
      ""
    );
  } catch (e) {
    return "";
  }
}
function V(e) {
  if (!e || "object" !== n(e)) return E() || N();
  var r = I(e._blindBoxSessionSeed);
  if (r) return r;
  var t = E() || N();
  return (
    (e._blindBoxSessionSeed = t),
    (function (e) {
      var r = I(e);
      if (r)
        try {
          if ("function" != typeof getApp) return;
          var t = getApp();
          if (!t || !t.globalData) return;
          (t.globalData.latestDiyBlindBoxSessionSeed = r),
            (t.globalData.latestDiyBlindBoxSessionSeedAt = Date.now());
        } catch (e) {}
    })(t),
    t
  );
}
function W(e) {
  return e && "object" === n(e)
    ? ((e._blindBoxPrewarmedPresetKeys &&
        "object" === n(e._blindBoxPrewarmedPresetKeys)) ||
        (e._blindBoxPrewarmedPresetKeys = Object.create(null)),
      e._blindBoxPrewarmedPresetKeys)
    : null;
}
function L(e, r) {
  var t = W(e),
    n = C(r);
  t && n && (t[n] = !0);
}
function O(e) {
  return (
    (Array.isArray(e && e._blindBoxRecentPresetBuckets)
      ? e._blindBoxRecentPresetBuckets
      : [])[0] || ""
  );
}
function K(e, r) {
  var t = String(r || "").trim();
  return t
    ? (Array.isArray(e && e._blindBoxRecentPresetBuckets)
        ? e._blindBoxRecentPresetBuckets
        : []
      ).filter(function (e) {
        return e === t;
      }).length
    : 0;
}
function F(e, r) {
  var t = String(r || "").trim();
  return (Array.isArray(e) ? e : []).filter(function (e) {
    return R(e && e.preset ? e.preset : e) === t;
  });
}
function z(e) {
  var r = Array.isArray(e) ? e.filter(Boolean) : [];
  return (r.length && r[Math.floor(Math.random() * r.length)]) || null;
}
function q(e, r) {
  var t = Array.isArray(r) ? r.filter(Boolean) : [];
  if (!t.length) return null;
  var n = F(t, "customer"),
    a = F(t, "designer"),
    i = O(e);
  if ("designer" === i && n.length) return z(n);
  if ("customer" === i && a.length) return z(a);
  if (n.length && a.length) {
    var o = K(e, "customer"),
      u = K(e, "designer");
    return z(o < u ? n : u < o ? a : Math.random() < 0.5 ? n : a);
  }
  return z(t);
}
function G(e, r, t, n) {
  var a = Math.max(1, Number(n) || 8),
    i = [],
    o = Object.create(null),
    u = (function (e) {
      var r = O(e);
      return "designer" === r
        ? ["customer", "designer"]
        : "customer" === r || K(e, "customer") > K(e, "designer")
        ? ["designer", "customer"]
        : w.slice();
    })(e),
    c = V(e),
    l = [U(r, "".concat(c, ":fresh")), U(t, "".concat(c, ":fallback"))],
    s = function (e) {
      var r = C(e);
      return !(!r || o[r] || i.length >= a) && ((o[r] = !0), i.push(e), !0);
    },
    d = function (e, r) {
      for (var t = 0; t < e.length; t += 1)
        if (R(e[t]) === r && s(e[t])) return !0;
      return !1;
    };
  l.forEach(function (e) {
    u.forEach(function (r) {
      return d(e, r);
    });
  });
  for (var f = !0; i.length < a && f; )
    (f = !1),
      l.forEach(function (e) {
        u.forEach(function (r) {
          d(e, r) && (f = !0);
        });
      });
  return (
    l.forEach(function (e) {
      e.forEach(function (e) {
        return s(e);
      });
    }),
    i.slice(0, a)
  );
}
function Q() {
  for (
    var e = Object.create(null), r = [], t = 0;
    t < arguments.length;
    t += 1
  ) {
    var n = Array.isArray(arguments[t]) ? arguments[t] : [];
    n.forEach(function (t) {
      if (D(t)) {
        var n = C(t);
        n && !e[n] && ((e[n] = !0), r.push(t));
      }
    });
  }
  return r;
}
function H(e) {
  var r = e && e.data && "object" === n(e.data) ? e.data : {};
  return Q(r.presets, r.filteredPresets, r.visibleFilteredPresets);
}
function Y() {
  try {
    if ("function" != typeof getApp) return [];
    var e = getApp(),
      r = e && e.globalData ? e.globalData : null;
    return r
      ? Q(r.pendingDiyBlindBoxPresetPool, r.latestDiyBlindBoxPresetPool)
      : [];
  } catch (e) {
    return [];
  }
}
function X() {
  try {
    if ("function" != typeof getApp) return [];
    var e = getApp(),
      r = e && e.globalData ? e.globalData : null;
    if (!r) return [];
    var t = Date.now(),
      n = function (e, r) {
        return t - (Number(r) || 0) > 3e5
          ? []
          : (Array.isArray(e) ? e : []).filter(function (e) {
              var r = e && e.preset,
                t = A(e && e.pattern);
              return !(!r || !t.length);
            });
      },
      a = Object.create(null),
      i = [];
    return (
      n(
        r.pendingDiyBlindBoxReadyCandidates,
        r.pendingDiyBlindBoxReadyCandidatesAt
      )
        .concat(
          n(
            r.latestDiyBlindBoxReadyCandidates,
            r.latestDiyBlindBoxReadyCandidatesAt
          )
        )
        .forEach(function (e) {
          var r = String((e && e.key) || C(e && e.preset) || "").trim();
          r && !a[r] && ((a[r] = !0), i.push(e));
        }),
      i
    );
  } catch (e) {
    return [];
  }
}
function J() {
  return Z.apply(this, arguments);
}
function Z() {
  return (Z = t(
    r().mark(function t() {
      var a,
        i,
        o,
        u,
        c,
        l,
        d,
        f,
        m,
        p,
        g,
        y = arguments;
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              if (
                ((a = y.length > 0 && void 0 !== y[0] ? y[0] : {}),
                "function" == typeof s)
              ) {
                r.next = 3;
                break;
              }
              return r.abrupt("return", []);
            case 3:
              return (
                (i = a && "object" === n(a) ? a : {}),
                (o = Math.max(1, Math.floor(Number(i.page || 1)))),
                (u = Math.max(
                  1,
                  Math.min(30, Math.floor(Number(i.pageSize || 30)))
                )),
                (c = s({
                  page: o,
                  pageSize: u,
                  section: "all",
                  preferCache: !0,
                }).catch(function () {
                  return null;
                })),
                (l =
                  !1 === i.includeCustomer
                    ? Promise.resolve(null)
                    : s({
                        page: o,
                        pageSize: Math.min(15, u),
                        section: "customer",
                        preferCache: !0,
                      }).catch(function () {
                        return null;
                      })),
                (r.next = 10),
                Promise.all([c, l])
              );
            case 10:
              return (
                (d = r.sent),
                (f = e(d, 2)),
                (m = f[0]),
                (p = f[1]),
                (g = Q(
                  Array.isArray(p && p.items) ? p.items : [],
                  Array.isArray(m && m.items) ? m.items : []
                ).slice(0, 30)),
                r.abrupt("return", {
                  items: g,
                  page: o,
                  pageSize: u,
                  hasMore: !!(
                    (m && !0 === m.hasMore) ||
                    (p && !0 === p.hasMore)
                  ),
                })
              );
            case 16:
            case "end":
              return r.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function $() {
  return ($ = t(
    r().mark(function e() {
      var t,
        n,
        a = arguments;
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (t = a.length > 0 && void 0 !== a[0] ? a[0] : {}),
                (e.next = 3),
                J(t)
              );
            case 3:
              return (
                (n = e.sent),
                e.abrupt("return", Array.isArray(n && n.items) ? n.items : [])
              );
            case 5:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function ee(e, r, t) {
  if (e && "object" === n(e)) {
    var a = (function (e, r) {
      var t = Array.isArray(r) ? r : [];
      if (t.length <= 30) return t;
      var n = Array.isArray(e && e._blindBoxRecentPresetKeys)
          ? e._blindBoxRecentPresetKeys
          : [],
        a = Object.create(null);
      n.forEach(function (e) {
        e && (a[e] = !0);
      });
      var i = t.filter(function (e) {
          var r = C(e);
          return r && !a[r];
        }),
        o = t.filter(function (e) {
          var r = C(e);
          return r && a[r];
        });
      return i.concat(o).slice(0, 30);
    })(
      e,
      !0 === (t && "object" === n(t) ? t : {}).preferNew
        ? Q(r, e._blindBoxPresetPool)
        : Q(e._blindBoxPresetPool, r)
    );
    (e._blindBoxPresetPool = a),
      (e._blindBoxPresetPoolReady =
        a.length >= 20 ||
        (a.length > 0 && !1 === e._blindBoxPresetPoolHasMore));
  }
}
function re(e, r) {
  if (e && "object" === n(e) && r && "object" === n(r)) {
    var t = Math.max(1, Math.floor(Number(r.page || 1)));
    (e._blindBoxPresetPoolNextPage = (r.hasMore, t + 1)),
      (e._blindBoxPresetPoolHasMore = !0 === r.hasMore);
  }
}
function te(e, r) {
  if (!e || "object" !== n(e)) return !1;
  if (!1 === e._blindBoxPresetPoolHasMore) return !1;
  var t = Q(r, e._blindBoxPresetPool);
  return (
    t.length < 20 ||
    (function (e, r) {
      var t = Array.isArray(r) ? r : [],
        n = Array.isArray(e && e._blindBoxRecentPresetKeys)
          ? e._blindBoxRecentPresetKeys
          : [],
        a = Object.create(null);
      return (
        n.forEach(function (e) {
          e && (a[e] = !0);
        }),
        t.filter(function (e) {
          var r = C(e);
          return r && !a[r];
        }).length
      );
    })(e, t) < 12
  );
}
function ne(e) {
  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if (!e || "object" !== n(e)) return Promise.resolve(!1);
  if (e._blindBoxPresetPoolPromise)
    return e._blindBoxPresetPoolPromise.then(function () {
      return !0;
    });
  if (!1 === e._blindBoxPresetPoolHasMore) return Promise.resolve(!1);
  var t = r && "object" === n(r) ? r : {},
    a = Math.max(
      1,
      Math.floor(Number(e._blindBoxPresetPoolNextPage || t.page || 1))
    );
  return (
    it(e, { warming: !0 }),
    (e._blindBoxPresetPoolPromise = J({
      page: a,
      pageSize: 30,
      includeCustomer: a <= 1,
    })
      .then(function (r) {
        re(e, r);
        var n = Array.isArray(r && r.items) ? r.items : [];
        return ee(e, n, { preferNew: !0 === t.preferNew || a > 1 }), !0;
      })
      .catch(function () {
        return !1;
      })
      .finally(function () {
        (e._blindBoxPresetPoolPromise = null), it(e);
      })),
    e._blindBoxPresetPoolPromise
  );
}
function ae(e, r) {
  var t = C(r);
  if (e && t) {
    var n = Array.isArray(e._blindBoxRecentPresetKeys)
        ? e._blindBoxRecentPresetKeys
        : [],
      a = [t].concat(
        n.filter(function (e) {
          return e !== t;
        })
      );
    e._blindBoxRecentPresetKeys = a.slice(0, 12);
    var i = R(r);
    if ("unknown" !== i) {
      var o = Array.isArray(e._blindBoxRecentPresetBuckets)
        ? e._blindBoxRecentPresetBuckets
        : [];
      e._blindBoxRecentPresetBuckets = [i].concat(o).slice(0, 12);
    }
  }
}
function ie(e) {
  var r = e && e.catalogSnapshot ? e.catalogSnapshot : {};
  return Array.isArray(r.beadTypes) && r.beadTypes.length > 0;
}
function oe(e) {
  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  return S(e, r);
}
function ue(e) {
  var r = e && e.catalogSnapshot ? e.catalogSnapshot : {};
  return (Array.isArray(r.beadTypes) ? r.beadTypes : []).filter(function (
    e,
    r
  ) {
    return !(!e || e.locked) && !!oe(e, r);
  });
}
function ce(e, r) {
  var t = String(r || "").trim();
  if (!t || !e || !e.data) return null;
  for (
    var n = Array.isArray(e.data.displayBeads) ? e.data.displayBeads : [],
      a = 0;
    a < n.length;
    a += 1
  ) {
    var i = n[a],
      o = i && i.activeBead;
    if (o && String(o.id || "").trim() === t) return o;
    for (
      var u = Array.isArray(i && i.items) ? i.items : [], c = 0;
      c < u.length;
      c += 1
    ) {
      var l = u[c];
      if (l && String(l.id || "").trim() === t) return l;
    }
  }
  return null;
}
function le(e, r, t) {
  return r
    ? e && "function" == typeof e.resolveBeadRenderImageUrl
      ? e.resolveBeadRenderImageUrl(r, t)
      : oe(r, t)
    : "";
}
function se(e, r) {
  return String(
    r || (e && (e.id || e.code || e.materialId || e.material_id)) || ""
  ).trim();
}
function de(e, r) {
  if (!e || "object" !== n(e) || !r) return [];
  var t =
    e._manualMaterialVariantUsageMap &&
    "object" === n(e._manualMaterialVariantUsageMap)
      ? e._manualMaterialVariantUsageMap
      : null;
  return (t && Array.isArray(t[r]) ? t[r] : [])
    .map(function (e) {
      return String(e || "").trim();
    })
    .filter(Boolean);
}
function fe(e, r, t) {
  var a = String(r || "").trim(),
    i = String(t || "").trim();
  if (e && "object" === n(e) && a && i) {
    (e._manualMaterialVariantUsageMap &&
      "object" === n(e._manualMaterialVariantUsageMap)) ||
      (e._manualMaterialVariantUsageMap = Object.create(null));
    var o = Array.isArray(e._manualMaterialVariantUsageMap[a])
      ? e._manualMaterialVariantUsageMap[a]
      : [];
    e._manualMaterialVariantUsageMap[a] = [i]
      .concat(
        o.filter(function (e) {
          return String(e || "").trim() && e !== i;
        })
      )
      .slice(0, 2);
  }
}
function me(e) {
  return e && "object" === n(e)
    ? ((e._manualMaterialVariantPendingMap &&
        "object" === n(e._manualMaterialVariantPendingMap)) ||
        (e._manualMaterialVariantPendingMap = Object.create(null)),
      e._manualMaterialVariantPendingMap)
    : null;
}
function pe(e, r) {
  var t = String(e || "").trim(),
    n = String(r || "").trim(),
    a = g(n) || n;
  return t && a ? "".concat(t, ":").concat(a) : "";
}
function ge(e, r, t) {
  var n = me(e),
    a = pe(r, t);
  n && a && delete n[a];
}
function ye(e, r) {
  var t = Array.isArray(e)
    ? e.filter(function (e) {
        return e && e.imgUrl;
      })
    : [];
  if (!t.length) return null;
  var n = Array.isArray(r) ? r : [],
    a = t.filter(function (e) {
      return n.indexOf(e.imgUrl) < 0;
    }),
    i = a.length ? a : t;
  return i[Math.floor(Math.random() * i.length)] || i[0] || null;
}
function be(e) {
  var r = String((e && (e.imgUrl || e.url)) || "").trim();
  return String((e && e.cacheKey) || g(r) || r || "").trim();
}
function he(e, r, t) {
  var a = (function (e) {
      return e && "object" === n(e)
        ? ((e._manualMaterialVariantSlowMap &&
            "object" === n(e._manualMaterialVariantSlowMap)) ||
            (e._manualMaterialVariantSlowMap = Object.create(null)),
          e._manualMaterialVariantSlowMap)
        : null;
    })(e),
    i = pe(r, t);
  a && i && (a[i] = Date.now() + 6e4);
}
function _e(e, r, t) {
  var n = e && e._manualMaterialVariantSlowMap,
    a = pe(r, t);
  return (
    !!(n && a && n[a]) && (!(Number(n[a]) <= Date.now()) || (delete n[a], !1))
  );
}
function ve(e, r, t) {
  var n = String(r || "").trim(),
    a = Object.create(null);
  (Array.isArray(t) ? t : []).forEach(function (e) {
    var r = be(e);
    r && (a[r] = !0);
  });
  var i = Object.create(null),
    o = 0;
  return (
    (Array.isArray(e && e.beadsRef) ? e.beadsRef : []).forEach(function (e) {
      var r = String(
        (e &&
          (e.__manualVariantMaterialKey ||
            e.id ||
            e.mat ||
            e.materialId ||
            e.material_id)) ||
          ""
      ).trim();
      if (n && r === n) {
        o += 1;
        var t = String(
            (e &&
              (e.__manualVariantTargetImgUrl ||
                e.__manualVariantOriginalImgUrl ||
                e.imgUrl ||
                e.img_url)) ||
              ""
          ).trim(),
          u = g(t) || t;
        u && a[u] && (i[u] = (Number(i[u]) || 0) + 1);
      }
    }),
    { currentCount: o, countsByKey: i, usedDiversity: Object.keys(i).length }
  );
}
function Pe(e, r, t, n) {
  var a = Array.isArray(e)
    ? e.filter(function (e) {
        return e && e.imgUrl;
      })
    : [];
  if (!a.length) return null;
  var i = r && r.countsByKey ? r.countsByKey : {},
    o = Array.isArray(t) ? t : [],
    u = a.reduce(function (e, r) {
      var t = be(r),
        n = Number(i[t]) || 0;
      return Math.min(e, n);
    }, Number.MAX_SAFE_INTEGER),
    c = a.filter(function (e) {
      var r = be(e);
      return (Number(i[r]) || 0) === u;
    }),
    l = c.filter(function (e) {
      return Ie(n, e.imgUrl);
    }),
    s = l.length ? l : c;
  return ye(s, o) || s[0] || null;
}
function xe(e, r, t, a) {
  var i = (function (e, r) {
    return r && "object" === n(r)
      ? h(r, { includeFallbacks: !0 })
          .map(function (t) {
            var n = Number.isFinite(Number(t.variantIdx))
                ? Number(t.variantIdx)
                : 0,
              a =
                "variant" === String(t.source || "").trim()
                  ? le(e, r, n) || t.url || t.imgUrl
                  : t.url || t.imgUrl;
            return Object.assign({}, t, {
              variantIdx: n,
              imgUrl: a,
              url: a,
              cacheKey: g(a) || t.cacheKey || a,
            });
          })
          .filter(function (e) {
            return e && e.imgUrl;
          })
      : [];
  })(r, t);
  if (!i.length) {
    var o = (function (e) {
        var r = Array.isArray(e && e.variants)
          ? e.variants
              .map(function (e) {
                return String(e || "").trim();
              })
              .filter(Boolean)
          : [];
        return r.length ? Math.floor(Math.random() * r.length) : 0;
      })(t),
      u = le(r, t, o);
    return {
      materialKey: se(t, a),
      variantIdx: o,
      imgUrl: u,
      targetVariantIdx: o,
      targetImgUrl: u,
      displayVariantIdx: o,
      displayImgUrl: u,
      shouldPromote: !1,
      candidates: u ? [{ variantIdx: o, imgUrl: u }] : [],
    };
  }
  var c = se(t, a),
    l = de(e, c),
    s = i.filter(function (e) {
      return "variant" === String((e && e.source) || "");
    }),
    d = s.length ? s : i,
    f = ve(r, c, d),
    m = (function (e, r) {
      var t = Math.max(0, Number(r) || 0);
      if (!t) return 0;
      var n = Math.max(1, Number(e) || 1);
      return Math.min(t, n);
    })(f.currentCount + 1, d.length),
    p = i.filter(function (e) {
      return e && e.imgUrl && Ie(r, e.imgUrl);
    }),
    y = p.filter(function (e) {
      return l.indexOf(e.imgUrl) < 0;
    }),
    b = ye(y.length ? y : p, l),
    _ = d.filter(function (e) {
      return e && e.imgUrl && l.indexOf(e.imgUrl) < 0;
    }),
    v = d.filter(function (e) {
      var r = be(e);
      return r && !f.countsByKey[r];
    }),
    P = v.filter(function (r) {
      return !_e(e, c, r.imgUrl);
    }),
    x =
      f.usedDiversity < m && v.length > 0
        ? ye(P, l) || ye(v, l)
        : Pe(
            d.filter(function (r) {
              return !_e(e, c, r.imgUrl);
            }),
            f,
            l,
            r
          ) ||
          Pe(d, f, l, r) ||
          ye(_, l) ||
          ye(d, l) ||
          d[0] ||
          i[0],
    S = Ie(r, x.imgUrl) ? x : b || Pe(p, f, l, r) || x,
    k = String((x && x.imgUrl) || "").trim(),
    B = String((S && S.imgUrl) || k || "").trim();
  return {
    materialKey: c,
    variantIdx: S && S.variantIdx,
    imgUrl: B,
    targetVariantIdx: x.variantIdx,
    targetImgUrl: k,
    displayVariantIdx: S && S.variantIdx,
    displayImgUrl: B,
    candidates: i,
    shouldPromote: !(!k || !B || k === B),
    diversityTarget: m,
    usageDiversityBefore: f.usedDiversity,
  };
}
function Se(e, r, t, a) {
  for (
    var i = Array.isArray(e && e.beadsRef) ? e.beadsRef : [],
      o = r && "object" === n(r) ? r : {},
      u = String(t || "").trim(),
      c = String(a || "").trim(),
      l = i.length - 1;
    l >= 0;
    l -= 1
  ) {
    var s = i[l];
    if (
      s &&
      !o[s.uid] &&
      !(
        (u && String(s.id || s.mat || "").trim() !== u) ||
        (c && String(s.imgUrl || s.img_url || "").trim() !== c)
      )
    )
      return s;
  }
  return null;
}
function ke(e, r) {
  var t = String(r || "").trim();
  return (
    (t &&
      (Array.isArray(e && e.beadsRef) ? e.beadsRef : []).find(function (e) {
        return e && String(e.uid || "").trim() === t;
      })) ||
    null
  );
}
function Be(e) {
  return e && "object" === n(e)
    ? (e._diyRenderDeviceTier ||
        ((e._diyRenderDeviceTier = b()),
        "function" == typeof e.recordPerfEvent &&
          e.recordPerfEvent("diy_render_device_tier_resolved", Date.now(), {
            tier: e._diyRenderDeviceTier.tier,
            platform: e._diyRenderDeviceTier.platform,
            benchmarkLevel: e._diyRenderDeviceTier.benchmarkLevel,
            memorySize: e._diyRenderDeviceTier.memorySize,
            loadingConcurrency: e._diyRenderDeviceTier.loadingConcurrency,
            runtimeDecodeConcurrency:
              e._diyRenderDeviceTier.runtimeDecodeConcurrency,
          })),
      e._diyRenderDeviceTier)
    : b();
}
function Te(e, r) {
  e &&
    (e.isStrung &&
      "function" == typeof e.syncStrungDomOverlay &&
      e.syncStrungDomOverlay({ force: !0 }),
    "function" == typeof e.scheduleRender
      ? e.scheduleRender("manual-variant-timeout-fallback")
      : "function" == typeof e.render && e.render(),
    "function" == typeof e.emitState && e.emitState(),
    r &&
      "function" == typeof e.updateStrungDomOverlayBead &&
      e.updateStrungDomOverlayBead(r.uid, { force: !0 }));
}
function Me(e, r) {
  if (e && "object" === n(e) && r) {
    var t = e._manualPlaceholderDeadlineTimers,
      a = t && t[r];
    a &&
      ("function" == typeof e.clearManagedTimeout
        ? e.clearManagedTimeout(a)
        : clearTimeout(a),
      delete t[r]);
  }
}
function we(e) {
  e &&
    "object" === n(e) &&
    e._manualVariantPromotionTimer &&
    ("function" == typeof e.clearManagedTimeout
      ? e.clearManagedTimeout(e._manualVariantPromotionTimer)
      : clearTimeout(e._manualVariantPromotionTimer),
    (e._manualVariantPromotionTimer = null));
}
function Ae(e, r) {
  if (e && "object" === n(e)) {
    var t = r && "object" === n(r) ? r : {},
      a = !0 === t.preservePromotionQueue,
      i = e._manualPlaceholderDeadlineTimers;
    i &&
      "object" === n(i) &&
      Object.keys(i).forEach(function (r) {
        return Me(e, r);
      }),
      a
        ? !0 === t.pausePromotionFlush && we(e)
        : (we(e), (e._manualVariantPromotionQueue = []));
  }
}
function Re(e, r, t, n) {
  t &&
    ((t.__manualPlaceholderResolved = !0),
    (t.__manualPlaceholderLoadingVisible = !1),
    (t.__manualPlaceholderResolvedAt = Date.now()),
    Me(e, t.uid),
    Te(r, t),
    "function" == typeof e.recordPerfEvent &&
      e.recordPerfEvent(
        "manual_material_placeholder_resolved",
        Number(t.__manualPlaceholderStartAt || Date.now()),
        {
          result: n || "selected_loaded",
          materialId: String(t.id || t.mat || "").trim(),
          totalWaitMs: Math.max(
            0,
            Date.now() - Number(t.__manualPlaceholderStartAt || Date.now())
          ),
        }
      ));
}
function De(e, r, t, n, a, i) {
  var o = String((n && (n.targetImgUrl || n.imgUrl)) || "").trim();
  if (!e || !r || !o) return Promise.resolve(!1);
  var u = Date.now(),
    c = g(o) || o,
    l = Math.max(1, Number(a && a.manualForegroundConcurrency) || 1),
    s = Ie(r, o);
  if (s)
    return (
      t && String(t.imgUrl || t.img_url || "").trim() !== o
        ? ((t.__manualVariantPromotionState = "ready_to_commit"),
          Ue(e, r, t.uid))
        : t &&
          ((t.__manualVariantPromotionState = "ready"),
          Re(e, r, t, "selected_already_loaded")),
      "function" == typeof e.recordPerfEvent &&
        e.recordPerfEvent("manual_material_tap_image_promote", u, {
          tier: a && a.tier,
          materialId: String(i || (t && (t.id || t.mat)) || "").trim(),
          candidateCount: Array.isArray(n && n.candidates)
            ? n.candidates.length
            : 0,
          selectedVariantIdx: n && (n.targetVariantIdx || n.variantIdx),
          alreadyLoaded: !0,
          loadedAfterPromote: !0,
          queuedPromotion:
            !!t && String(t.imgUrl || t.img_url || "").trim() !== o,
        }),
      Promise.resolve(!0)
    );
  !(function (e, r, t) {
    var n = me(e),
      a = pe(r, t);
    n && a && (n[a] = Date.now());
  })(e, n.materialKey, o),
    t &&
      !t.__manualVariantPromotionState &&
      (t.__manualVariantPromotionState = "pending");
  var d = _r(e, {
    priority: "P0",
    type: "image-download",
    scope: "manual-material-cache",
    dedupeKey: "manual-material-cache:".concat(c),
    requiresQuiet: !1,
    allowDuringMotion: !0,
    timeoutMs: 2200,
    run: function (e) {
      return "function" == typeof y
        ? y([o], null, {
            persist: !0,
            concurrency: l,
            cancelToken: e && e.token,
            shouldStop:
              e && "function" == typeof e.isCancelled
                ? function () {
                    return e.isCancelled();
                  }
                : null,
          }).catch(function () {
            return !1;
          })
        : Promise.resolve(!1);
    },
  });
  return Promise.resolve(d)
    .then(function () {
      return (
        t &&
          "timeout_soft" !== t.__manualVariantPromotionState &&
          "abandoned" !== t.__manualVariantPromotionState &&
          (t.__manualVariantPromotionState = "ready_to_decode"),
        _r(e, {
          priority: "P1",
          type: "image-decode",
          scope: "manual-material-decode",
          dedupeKey: "manual-material-decode:".concat(c),
          requiresQuiet: !0,
          allowDuringMotion: !1,
          timeoutMs: 3600,
          run: function (e) {
            return r && "function" == typeof r.preloadImageSet
              ? r
                  .preloadImageSet([o], {
                    concurrency: l,
                    cancelToken: e && e.token,
                    shouldStop:
                      e && "function" == typeof e.isCancelled
                        ? function () {
                            return e.isCancelled();
                          }
                        : null,
                  })
                  .catch(function () {
                    return !1;
                  })
              : Promise.resolve(!1);
          },
        })
      );
    })
    .then(function () {
      var c = Ie(r, o);
      if (t && c) {
        var l = String(t.__manualVariantPromotionState || "").trim();
        "timeout_soft" !== l &&
          "abandoned" !== l &&
          ((t.__manualVariantPromotionState =
            String(t.imgUrl || t.img_url || "").trim() === o
              ? "ready"
              : "ready_to_commit"),
          "ready_to_commit" === t.__manualVariantPromotionState
            ? Ue(e, r, t.uid)
            : Re(e, r, t, "selected_loaded"));
      }
      return (
        "function" == typeof e.recordPerfEvent &&
          e.recordPerfEvent("manual_material_tap_image_promote", u, {
            tier: a && a.tier,
            materialId: String(i || (t && (t.id || t.mat)) || "").trim(),
            candidateCount: Array.isArray(n && n.candidates)
              ? n.candidates.length
              : 0,
            selectedVariantIdx: n && (n.targetVariantIdx || n.variantIdx),
            alreadyLoaded: s,
            loadedAfterPromote: c,
          }),
        c
      );
    })
    .catch(function () {
      return !1;
    })
    .finally(function () {
      ge(e, n.materialKey, o);
    });
}
function Ce(e, r, t, n) {
  if (!(e && r && t && Array.isArray(t.candidates))) return !1;
  var a = String(t.materialKey || "").trim();
  if (!a) return !1;
  var i = n && n.isLowAndroid ? 1 : 3,
    o = String(t.targetImgUrl || "").trim(),
    u = [];
  if (
    (t.candidates.forEach(function (t) {
      var n = String((t && t.imgUrl) || "").trim();
      n &&
        n !== o &&
        (u.length >= i ||
          Ie(r, n) ||
          (function (e, r, t) {
            var n = e && e._manualMaterialVariantPendingMap,
              a = pe(r, t);
            return !!(n && a && n[a]);
          })(e, a, n) ||
          _e(e, a, n) ||
          u.push(n));
    }),
    !u.length)
  )
    return !1;
  var c = u
    .map(function (e) {
      return g(e) || e;
    })
    .join("|");
  return _r(e, {
    priority: "P2",
    type: "image-download",
    scope: "manual-material-lookahead",
    dedupeKey: "manual-material-lookahead:".concat(a, ":").concat(c),
    requiresQuiet: !0,
    allowDuringMotion: !1,
    timeoutMs: 5e3,
    run: function (e) {
      var t = [];
      return (
        "function" == typeof y &&
          t.push(
            y(u, null, {
              persist: !0,
              concurrency: Math.max(
                1,
                Number(n && n.runtimeDecodeConcurrency) || 1
              ),
              cancelToken: e && e.token,
              shouldStop:
                e && "function" == typeof e.isCancelled
                  ? function () {
                      return e.isCancelled();
                    }
                  : null,
            }).catch(function () {
              return !1;
            })
          ),
        r &&
          "function" == typeof r.preloadImageSet &&
          t.push(
            r
              .preloadImageSet(u, {
                concurrency: Math.max(
                  1,
                  Number(n && n.runtimeDecodeConcurrency) || 1
                ),
                cancelToken: e && e.token,
                shouldStop:
                  e && "function" == typeof e.isCancelled
                    ? function () {
                        return e.isCancelled();
                      }
                    : null,
              })
              .catch(function () {
                return !1;
              })
          ),
        Promise.all(t).then(function () {
          return !0;
        })
      );
    },
  });
}
function Ne(e, r, t, a, i, o) {
  if (e && r && t && a && (a.targetImgUrl || a.imgUrl)) {
    var u = Array.isArray(a.candidates)
        ? a.candidates.filter(function (e) {
            return e && e.imgUrl;
          })
        : [],
      c = Be(e),
      l = t.uid,
      s = String(a.targetImgUrl || a.imgUrl || "").trim(),
      d = String(a.displayImgUrl || a.imgUrl || "").trim(),
      f = Math.max(600, Number(c && c.placeholderSilentDeadlineMs) || 900);
    if (
      ((t.__manualPlaceholder = !0),
      (t.__manualPlaceholderStartAt = Date.now()),
      (t.__manualPlaceholderDeadlineAt = Date.now() + f),
      (t.__manualVariantPromotionStartedAt = t.__manualPlaceholderStartAt),
      (t.__manualVariantSoftDeadlineAt = t.__manualPlaceholderStartAt + 3500),
      (t.__manualVariantHardDeadlineAt = t.__manualPlaceholderStartAt + 1e4),
      (t.__manualPlaceholderResolved = d && Ie(r, d)),
      (t.__manualPlaceholderLoadingVisible = !1),
      s && d === s && Ie(r, s))
    )
      return (
        (t.__manualVariantPromotionState = "ready"),
        (t.__manualPlaceholderResolvedAt = t.__manualPlaceholderStartAt),
        void fe(e, a.materialKey, s)
      );
    (e._manualPlaceholderDeadlineTimers &&
      "object" === n(e._manualPlaceholderDeadlineTimers)) ||
      (e._manualPlaceholderDeadlineTimers = Object.create(null)),
      (function (e, r) {
        var t = String(r || "").trim();
        t &&
          (Me(e, t),
          Me(e, "".concat(t, ":soft")),
          Me(e, "".concat(t, ":hard")));
      })(e, l);
    var m =
      "function" == typeof e.setManagedTimeout
        ? e.setManagedTimeout.bind(e)
        : setTimeout;
    (e._manualPlaceholderDeadlineTimers[l] = m(function () {
      Me(e, l);
      var t = ke(r, l);
      if (t) {
        var n = String(t.imgUrl || t.img_url || "").trim();
        (n && Ie(r, n)) ||
          ((t.__manualPlaceholderLoadingVisible = !0),
          (t.__manualPlaceholderLoadingSince = Date.now()),
          Te(r, t),
          "function" == typeof e.recordPerfEvent &&
            e.recordPerfEvent(
              "manual_material_placeholder_deadline",
              Date.now(),
              {
                tier: c && c.tier,
                beadId: String(o || "").trim(),
                result: n ? "display_loading" : "missing_current_image",
                waitMs: f,
                candidateCount: u.length,
              }
            ));
      }
    }, f)),
      (e._manualPlaceholderDeadlineTimers["".concat(l, ":soft")] = m(
        function () {
          Me(e, "".concat(l, ":soft"));
          var t = ke(r, l);
          if (t && "ready" !== String(t.__manualVariantPromotionState || "")) {
            if (Ie(r, s))
              return (
                (t.__manualVariantPromotionState = "ready_to_commit"),
                void Ue(e, r, l)
              );
            (t.__manualVariantPromotionState = "timeout_soft"),
              he(e, a.materialKey, s),
              "function" == typeof e.recordPerfEvent &&
                e.recordPerfEvent(
                  "manual_material_variant_timeout",
                  Date.now(),
                  {
                    tier: c && c.tier,
                    beadId: String(o || "").trim(),
                    result: "timeout_soft",
                    waitMs: 3500,
                    candidateCount: u.length,
                  }
                );
          }
        },
        3500
      )),
      (e._manualPlaceholderDeadlineTimers["".concat(l, ":hard")] = m(
        function () {
          Me(e, "".concat(l, ":hard"));
          var t = ke(r, l);
          t &&
            "ready" !== String(t.__manualVariantPromotionState || "") &&
            ((t.__manualVariantPromotionState = "abandoned"),
            ge(e, a.materialKey, s),
            he(e, a.materialKey, s),
            "function" == typeof e.recordPerfEvent &&
              e.recordPerfEvent("manual_material_variant_timeout", Date.now(), {
                tier: c && c.tier,
                beadId: String(o || "").trim(),
                result: "abandoned",
                waitMs: 1e4,
                candidateCount: u.length,
              }));
        },
        1e4
      ));
  }
}
function Ie(e, r) {
  var t = String(r || "").trim();
  if (!e || !t) return !1;
  var n = g(t) || t,
    a = e.imageMeta && (e.imageMeta[n] || e.imageMeta[t]);
  if (a && !0 === a.loaded) return !0;
  var i = e.imageCache && (e.imageCache[n] || e.imageCache[t]);
  return !!(i && i.width > 0);
}
function je(e, r) {
  if (!e || !r) return !0;
  if (!0 === e._pageHidden) return !0;
  if (e._blindBoxActionPending || e._blindBoxPresetPending) return !0;
  if (e._currentStrungWarmupTask) return !0;
  if (Number(e._diyMotionLockUntil || 0) > Date.now()) return !0;
  var t = "function" == typeof r.getPerfNow ? r.getPerfNow() : Date.now();
  return (
    Number(r._motionFrameBudgetStressedUntil || 0) > t ||
    !(!r.dragState || !r.dragState.active) ||
    !!r.blindBoxTimer
  );
}
function Ue(e, r, t) {
  var n = String(t || "").trim();
  return (
    !!(e && r && n) &&
    ((e._manualVariantPromotionQueue &&
      Array.isArray(e._manualVariantPromotionQueue)) ||
      (e._manualVariantPromotionQueue = []),
    e._manualVariantPromotionQueue.indexOf(n) < 0 &&
      e._manualVariantPromotionQueue.push(n),
    Ee(e, r, 120),
    !0)
  );
}
function Ee(e, r, t) {
  if (e && r && !e._manualVariantPromotionTimer) {
    var n =
      "function" == typeof e.setManagedTimeout
        ? e.setManagedTimeout.bind(e)
        : setTimeout;
    e._manualVariantPromotionTimer = n(function () {
      (e._manualVariantPromotionTimer = null),
        (function (e, r) {
          if (!e || !r) return !1;
          var t = Array.isArray(e._manualVariantPromotionQueue)
            ? e._manualVariantPromotionQueue
            : [];
          if (!t.length) return !1;
          if (je(e, r)) return Ee(e, r, 120), !1;
          var n = Math.max(
              1,
              (function (e, r) {
                var t = Be(e);
                return t && t.isLowAndroid
                  ? 1
                  : r && r.isStrung && Number(r._stableFrameCount || 0) >= 18
                  ? 2
                  : 1;
              })(e, r)
            ),
            a = [],
            i = [];
          for (; t.length; ) {
            var o = t.shift(),
              u = ke(r, o);
            if (u) {
              var c = String(u.__manualVariantTargetImgUrl || "").trim();
              if (c) {
                var l = String(u.__manualVariantPromotionState || "").trim();
                if ("timeout_soft" !== l && "abandoned" !== l && "ready" !== l)
                  if (Ie(r, c))
                    if (i.length >= n) a.push(o);
                    else if (String(u.imgUrl || u.img_url || "").trim() !== c) {
                      (u.imgUrl = c), (u.img_url = c);
                      var s = Number(u.__manualVariantTargetVariantIdx);
                      Number.isFinite(s) && (u.variantIdx = s),
                        (u.__manualVariantPromotionState = "ready"),
                        (u.__manualVariantPromotedAt = Date.now()),
                        (u.__manualPlaceholderLoadingVisible = !1),
                        i.push(u);
                    } else
                      (u.__manualVariantPromotionState = "ready"),
                        Re(e, r, u, "promotion_already_current");
                  else a.push(o);
              }
            }
          }
          (e._manualVariantPromotionQueue = a.concat(t)),
            i.length &&
              ("function" == typeof r.scheduleRender
                ? r.scheduleRender("manual-variant-promotion")
                : "function" == typeof r.render && r.render(),
              r.isStrung &&
                "function" == typeof r.updateStrungDomOverlayBead &&
                i.forEach(function (e) {
                  return r.updateStrungDomOverlayBead(e.uid, { force: !0 });
                }),
              "function" == typeof r.emitState && r.emitState());
          e._manualVariantPromotionQueue.length && Ee(e, r, 120);
          i.length;
        })(e, r);
    }, Math.max(0, Number(t) || 0));
  }
}
function Ve(e, r, t, a) {
  if (!e || !r) return !1;
  if (e._manualVariantPromotionRecoveryTimer) return !0;
  var i =
    "function" == typeof e.setManagedTimeout
      ? e.setManagedTimeout.bind(e)
      : setTimeout;
  return (
    (e._manualVariantPromotionRecoveryTimer = i(function () {
      (e._manualVariantPromotionRecoveryTimer = null),
        (function (e, r, t) {
          if (!e || !r) return !1;
          if (!0 === e._pageHidden) return !1;
          if (je(e, r)) return Ve(e, r, 320, t || "blocked");
          var a = Array.isArray(r.beadsRef) ? r.beadsRef : [];
          if (!a.length) return !1;
          var i = Be(e),
            o = 0,
            u = 0;
          a.forEach(function (t) {
            if (t && "object" === n(t)) {
              var a = (function (e) {
                if (!e || "object" !== n(e)) return null;
                var r = String(e.__manualVariantTargetImgUrl || "").trim();
                if (!r) return null;
                var t = String(
                    e.__manualVariantMaterialKey || e.mat || e.id || ""
                  ).trim(),
                  a = String(
                    e.__manualVariantDisplayImgUrl ||
                      e.imgUrl ||
                      e.img_url ||
                      ""
                  ).trim(),
                  i = Number(e.variantIdx),
                  o = Number(e.__manualVariantDisplayVariantIdx),
                  u = Number(e.__manualVariantTargetVariantIdx),
                  c = Array.isArray(e.__manualVariantCandidates)
                    ? e.__manualVariantCandidates.filter(function (e) {
                        return e && e.imgUrl;
                      })
                    : [];
                return (
                  c.some(function (e) {
                    return String((e && e.imgUrl) || "").trim() === r;
                  }) ||
                    c.push({
                      variantIdx: Number.isFinite(u) ? u : 0,
                      imgUrl: r,
                    }),
                  {
                    materialKey: t,
                    variantIdx: Number.isFinite(o)
                      ? o
                      : Number.isFinite(i)
                      ? i
                      : 0,
                    imgUrl: a || r,
                    targetVariantIdx: Number.isFinite(u)
                      ? u
                      : Number.isFinite(i)
                      ? i
                      : 0,
                    targetImgUrl: r,
                    displayVariantIdx: Number.isFinite(o)
                      ? o
                      : Number.isFinite(i)
                      ? i
                      : 0,
                    displayImgUrl: a || r,
                    candidates: c,
                    shouldPromote: a !== r,
                  }
                );
              })(t);
              if (a && a.targetImgUrl) {
                var c = String(t.__manualVariantPromotionState || "").trim();
                if (
                  "ready" !== c &&
                  "timeout_soft" !== c &&
                  "abandoned" !== c
                ) {
                  if (
                    String(t.imgUrl || t.img_url || "").trim() ===
                    a.targetImgUrl
                  )
                    return (
                      (t.__manualVariantPromotionState = "ready"),
                      void ge(e, a.materialKey, a.targetImgUrl)
                    );
                  if (!_e(e, a.materialKey, a.targetImgUrl)) {
                    if (Ie(r, a.targetImgUrl))
                      return (
                        (t.__manualVariantPromotionState = "ready_to_commit"),
                        Ue(e, r, t.uid),
                        void (o += 1)
                      );
                    Ne(e, r, t, a, 0, t.mat || t.id || a.materialKey),
                      De(e, r, t, a, i, t.mat || t.id || a.materialKey),
                      (u += 1);
                  }
                }
              }
            }
          }),
            o > 0 && Ee(e, r, 120);
          (o || u) &&
            "function" == typeof e.recordPerfEvent &&
            e.recordPerfEvent("manual_material_variant_recovery", Date.now(), {
              reason: String(t || "").trim(),
              queuedReady: o,
              retried: u,
              beadCount: a.length,
            });
        })(e, r, a || "retry");
    }, Math.max(0, Number(t) || 0))),
    !0
  );
}
function We(e, r, t, n) {
  return Le.apply(this, arguments);
}
function Le() {
  return (Le = t(
    r().mark(function e(t, n, a, i) {
      var o, u, c, l;
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (((o = String(i || "").trim()), t && n && o)) {
                e.next = 3;
                break;
              }
              return e.abrupt("return", !1);
            case 3:
              if (!Ie(n, o)) {
                e.next = 5;
                break;
              }
              return e.abrupt("return", !0);
            case 5:
              return (
                (u = Date.now()),
                (c =
                  "function" == typeof n.waitForImageReady
                    ? n.waitForImageReady(o, { cachePath: !1, timeoutMs: 360 })
                    : "function" == typeof n.ensureImageReady
                    ? n.ensureImageReady(o, { cachePath: !1, timeoutMs: 360 })
                    : Promise.resolve(!1)),
                (e.next = 9),
                dr(
                  Promise.resolve(c)
                    .then(function (e) {
                      return !1 !== e;
                    })
                    .catch(function () {
                      return !1;
                    }),
                  360
                ).catch(function () {
                  return !1;
                })
              );
            case 9:
              return (
                (l = e.sent),
                "function" == typeof t.recordPerfEvent &&
                  t.recordPerfEvent("manual_material_image_ready_wait", u, {
                    beadId: String(a || "").trim(),
                    result: !0 === l,
                    waitBudgetMs: 360,
                    imgUrl: o,
                  }),
                e.abrupt("return", !0 === l || Ie(n, o))
              );
            case 12:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function Oe(e, r) {
  return (
    !(!e || "object" !== n(e)) &&
    B(Object.assign({}, e, { id: String(r || e.id || e.code || "").trim() }))
  );
}
function Ke(e, r, t, n, a, i) {
  return Fe.apply(this, arguments);
}
function Fe() {
  return (Fe = t(
    r().mark(function e(t, n, a, i, o, u) {
      var c, l, s, d, f, m, p, g;
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (t && n && a && u) {
                e.next = 2;
                break;
              }
              return e.abrupt("return", !1);
            case 2:
              if (Oe(a, i)) {
                e.next = 4;
                break;
              }
              return e.abrupt("return", !1);
            case 4:
              if (
                "function" == typeof n.ensureImageReady &&
                "function" == typeof n.ensureImage &&
                "function" == typeof n.getAccessoryShapeShadow
              ) {
                e.next = 6;
                break;
              }
              return e.abrupt("return", !1);
            case 6:
              return (
                (e.next = 8),
                dr(
                  Promise.resolve(n.ensureImageReady(u))
                    .then(function () {
                      return !0;
                    })
                    .catch(function () {
                      return !1;
                    }),
                  420
                ).catch(function () {
                  return !1;
                })
              );
            case 8:
              if (!0 === e.sent) {
                e.next = 11;
                break;
              }
              return e.abrupt("return", !1);
            case 11:
              if ((c = n.ensureImage(u)) && c.width > 0) {
                e.next = 14;
                break;
              }
              return e.abrupt("return", !1);
            case 14:
              return (
                (l = Object.assign({}, a, {
                  id: String(i || a.id || a.code || "").trim(),
                })),
                (s = Array.isArray(n.beadsRef) ? n.beadsRef.length : 0),
                (d =
                  "function" == typeof n.buildBead
                    ? n.buildBead(l, s, u)
                    : Object.assign({}, l, {
                        mat: l.id,
                        imgUrl: u,
                        img_url: u,
                      })),
                (f =
                  "function" == typeof n.getBeadRenderMetrics
                    ? n.getBeadRenderMetrics(d)
                    : null),
                (m = 2.836 * (Number(d.mm) || 8) * (Number(d.imgScale) || 1)),
                (p = Number((f && f.drawW) || d.drawW || m) || 24),
                (g = Number((f && f.drawH) || d.drawH || m) || 24),
                n.getAccessoryShapeShadow(u, c, p, g, {
                  allowBuild: !0,
                  soft: !0,
                }),
                n.getAccessoryShapeShadow(u, c, p, g, {
                  allowBuild: !0,
                  variant: "body-soft",
                }),
                "function" == typeof t.recordPerfEvent &&
                  t.recordPerfEvent("manual_shape_shadow_prewarm", Date.now(), {
                    beadId: String(i || "").trim(),
                    variantIdx: o,
                    result: !0,
                  }),
                e.abrupt("return", !0)
              );
            case 25:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function ze(e, r) {
  if (e && r && "function" == typeof r.prewarmCurrentShapeShadows) {
    var t = Tr(e) + 48,
      n =
        "function" == typeof e.setManagedTimeout
          ? e.setManagedTimeout.bind(e)
          : setTimeout,
      a = Date.now();
    n(function () {
      !0 !==
        r.prewarmCurrentShapeShadows({
          delayMs: 0,
          intervalMs: 48,
          batchSize: 1,
          soft: !0,
          force: !0,
          onComplete: function (r) {
            "function" == typeof e.recordPerfEvent &&
              e.recordPerfEvent("manual_shape_shadow_retry", a, {
                result: !0 === r,
              });
          },
        }) &&
        "function" == typeof e.recordPerfEvent &&
        e.recordPerfEvent("manual_shape_shadow_retry", a, {
          result: !1,
          skipped: !0,
        });
    }, Math.max(48, t));
  }
}
function qe(e, r, t) {
  if (!e || !Array.isArray(r) || !r.length) return !1;
  var a =
      e.catalogSnapshot && "object" === n(e.catalogSnapshot)
        ? e.catalogSnapshot
        : {},
    i = Array.isArray(a.beadTypes) ? a.beadTypes : [],
    o = Object.create(null),
    u = [];
  i.concat(r).forEach(function (e, r) {
    var t = String((e && e.id) || "").trim();
    t && (o[t] || u.push(t), (o[t] = x(o[t], e)));
  });
  var c = u
    .map(function (e) {
      return o[e];
    })
    .filter(Boolean);
  return (
    (e.catalogSnapshot = Object.assign({}, a, { beadTypes: c, materials: c })),
    m(e.catalogSnapshot),
    "function" == typeof e.syncTrayPhysicsGeometry &&
      e.syncTrayPhysicsGeometry(t || "blindbox_materials_catalog"),
    "function" == typeof e.rehydrateTrayBeadImages &&
      e.rehydrateTrayBeadImages(t || "blindbox_materials_catalog"),
    !0
  );
}
function Ge(e) {
  return e && "object" === n(e)
    ? (function (e) {
        var r = e && e.data && "object" === n(e.data) ? e.data : {},
          t = r.trayState && "object" === n(r.trayState) ? r.trayState : {},
          a = Array.isArray(t.pattern) ? t.pattern : [],
          i = Array.isArray(r.currentPattern) ? r.currentPattern : [];
        return (
          !0 === t.isStrung ||
          Number(t.beadsCount || 0) > 0 ||
          a.length > 0 ||
          i.length > 0
        );
      })(e)
      ? e._clearConfirming
        ? Promise.resolve(!1)
        : "function" == typeof e.openDiyConfirm
        ? ((e._clearConfirming = !0),
          e
            .openDiyConfirm({
              tone: "danger",
              iconText: "!",
              title: "清空当前设计？",
              content: "圆盘中的手串和当前编辑状态将被清空，此操作不可撤销。",
              confirmText: "确认清空",
              cancelText: "继续编辑",
            })
            .then(function (e) {
              return "confirm" === e;
            })
            .finally(function () {
              e._clearConfirming = !1;
            }))
        : "undefined" == typeof wx || "function" != typeof wx.showModal
        ? Promise.resolve(!0)
        : ((e._clearConfirming = !0),
          new Promise(function (r) {
            wx.showModal({
              title: "确认清空当前设计？",
              content: "当前圆盘中的手串将被清空，此操作不可撤销。",
              confirmText: "确认清空",
              cancelText: "继续编辑",
              confirmColor: "#B86B5D",
              success: function (e) {
                r(!(!e || !e.confirm));
              },
              fail: function () {
                r(!1);
              },
              complete: function () {
                e._clearConfirming = !1;
              },
            });
          }))
      : ("function" == typeof e.showToast && e.showToast("暂无可删除内容"),
        Promise.resolve(!1))
    : Promise.resolve(!0);
}
function Qe(e) {
  return He.apply(this, arguments);
}
function He() {
  return (He = t(
    r().mark(function e(t) {
      var a, i, o, u;
      return r().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (t && "object" === n(t)) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return", !1);
              case 2:
                if (
                  !(!0 === t._diyMaterialsBundleReady && ue(t).length >= 24)
                ) {
                  e.next = 5;
                  break;
                }
                return e.abrupt("return", !0);
              case 5:
                if (!(ue(t).length >= 24)) {
                  e.next = 7;
                  break;
                }
                return e.abrupt("return", !0);
              case 7:
                if ("function" != typeof d) {
                  e.next = 18;
                  break;
                }
                return (
                  (e.prev = 8),
                  (e.next = 11),
                  d({ forceRemote: !1, preferCache: !0, remoteTimeoutMs: 9e3 })
                );
              case 11:
                (a = e.sent),
                  (i = Array.isArray(a && a.beadTypes) ? a.beadTypes : [])
                    .length &&
                    (qe(t, i, "blindbox_materials_bundle"),
                    (t._diyMaterialsBundleReady = !0)),
                  (e.next = 18);
                break;
              case 16:
                (e.prev = 16), (e.t0 = e.catch(8));
              case 18:
                if (!(ue(t).length >= 24)) {
                  e.next = 20;
                  break;
                }
                return e.abrupt("return", !0);
              case 20:
                if (
                  !(
                    ie(t) &&
                    ue(t).length > 0 &&
                    !0 === t._diyMaterialsBundleReady
                  )
                ) {
                  e.next = 22;
                  break;
                }
                return e.abrupt("return", !0);
              case 22:
                if (t && "function" == typeof t.loadDiyMaterialsForSelection) {
                  e.next = 24;
                  break;
                }
                return e.abrupt("return", !1);
              case 24:
                return (
                  (o = String((t.data && t.data.menuCategory) || "").trim()),
                  (u =
                    o && "in_use" !== o && 0 !== o.indexOf("__all__:")
                      ? o
                      : T(t.data && t.data.currentSubCategories)),
                  (e.next = 28),
                  t.loadDiyMaterialsForSelection({
                    mainCategory: t.data && t.data.mainCategory,
                    menuCategory: u,
                    page: 1,
                    pageSize: 48,
                    append: !1,
                  })
                );
              case 28:
                return e.abrupt("return", ue(t).length > 0);
              case 29:
              case "end":
                return e.stop();
            }
        },
        e,
        null,
        [[8, 16]]
      );
    })
  )).apply(this, arguments);
}
function Ye(e, r, t) {
  var n = e && e[r];
  if (n) {
    var a = e && "function" == typeof e[t] ? e[t].bind(e) : null;
    a
      ? a(n)
      : "clearManagedInterval" === t
      ? clearInterval(n)
      : clearTimeout(n),
      (e[r] = null);
  }
}
function Xe(e) {
  Ye(e, "_blindBoxPresetTimer", "clearManagedInterval"),
    e &&
      "object" === n(e) &&
      ((e._blindBoxPresetPending = !1), ir(e, "stop_blindbox"), Ir(e));
}
function Je(e) {
  if (!e || "object" !== n(e)) return 0;
  var r = (Number(e._blindBoxActionToken) || 0) + 1;
  return (e._blindBoxActionToken = r), (e._blindBoxActionPending = !0), r;
}
function Ze(e, r) {
  return !!e && Number(e._blindBoxActionToken) === Number(r);
}
function $e(e, r) {
  Ze(e, r) && (e._blindBoxActionPending = !1);
}
function er(e, r) {
  if (e && "function" == typeof e.setData) {
    var t = !0 === r;
    (e.data && e.data.blindBoxPreparing === t) ||
      e.setData({ blindBoxPreparing: t });
  }
}
function rr(e, r) {
  if (e && "function" == typeof e.setData) {
    var t = !0 === r;
    (e.data && e.data.strungPreparing === t) ||
      e.setData({ strungPreparing: t });
  }
}
function tr(e, r) {
  if (e && "object" === n(e)) {
    var t =
      !0 === e._pendingStrungToggleAfterReady || !!e._pendingStrungToggleTimer;
    (e._pendingStrungToggleAfterReady = !1),
      (e._pendingStrungToggleReason = ""),
      e._pendingStrungToggleTimer &&
        ("function" == typeof e.clearManagedTimeout
          ? e.clearManagedTimeout(e._pendingStrungToggleTimer)
          : clearTimeout(e._pendingStrungToggleTimer),
        (e._pendingStrungToggleTimer = null)),
      t &&
        "function" == typeof e.recordPerfEvent &&
        e.recordPerfEvent("strung_toggle_queue_clear", Date.now(), {
          reason: String(r || "").trim() || "unknown",
        });
  }
}
function nr(e, r) {
  if (!e || "object" !== n(e)) return !1;
  (e._pendingStrungToggleAfterReady = !0),
    (e._pendingStrungToggleReason = String(r || "").trim() || "unknown");
  var t = Date.now();
  return (
    "function" == typeof e.showToast &&
      (!Number.isFinite(Number(e._pendingStrungToggleToastAt)) ||
        t - Number(e._pendingStrungToggleToastAt) > 1200) &&
      ((e._pendingStrungToggleToastAt = t),
      e.showToast("收拢准备中，稍后自动收拢")),
    "function" == typeof e.recordPerfEvent &&
      e.recordPerfEvent("strung_toggle_queued", t, {
        reason: e._pendingStrungToggleReason,
        blindBoxPending: !!e._blindBoxPresetPending,
        blindBoxActionPending: !!e._blindBoxActionPending,
        strungClickPreparing: !0 === e._strungClickPreparing,
        strungPreparing: !(!e.data || !e.data.strungPreparing),
      }),
    !0
  );
}
function ar(e, r, t) {
  if (!e || "object" !== n(e) || !0 !== e._pendingStrungToggleAfterReady)
    return !1;
  if (e._pendingStrungToggleTimer) return !0;
  var a =
    "function" == typeof e.setManagedTimeout
      ? e.setManagedTimeout.bind(e)
      : setTimeout;
  return (
    (e._pendingStrungToggleTimer = a(function () {
      (e._pendingStrungToggleTimer = null),
        (function (e, r) {
          if (
            !e ||
            "object" !== n(e) ||
            !0 !== e._pendingStrungToggleAfterReady
          )
            return !1;
          if (
            e._blindBoxActionPending ||
            e._blindBoxPresetPending ||
            !0 === e._strungClickPreparing ||
            (e.data && e.data.blindBoxPreparing)
          )
            return ar(e, r || "still_pending", 120), !1;
          var t = "function" == typeof e.trayComp ? e.trayComp() : null;
          t && ur(t)
            ? t.isStrung
              ? tr(e, "already_strung")
              : ((e._pendingStrungToggleAfterReady = !1),
                (e._pendingStrungToggleReason = ""),
                "function" == typeof e.recordPerfEvent &&
                  e.recordPerfEvent("strung_toggle_queue_flush", Date.now(), {
                    reason: String(r || "").trim() || "unknown",
                    beadCount: Array.isArray(t.beadsRef)
                      ? t.beadsRef.length
                      : 0,
                  }),
                "function" == typeof e.handleToggleStrung &&
                  Promise.resolve()
                    .then(function () {
                      return e.handleToggleStrung({ queued: !0, reason: r });
                    })
                    .catch(function (r) {
                      "function" == typeof e.recordPerfEvent &&
                        e.recordPerfEvent(
                          "strung_toggle_queue_error",
                          Date.now(),
                          {
                            message:
                              r && r.message ? r.message : String(r || ""),
                          }
                        );
                    }))
            : ar(e, r || "tray_not_ready", 120);
        })(e, r);
    }, Math.max(0, Number(t) || 0))),
    !0
  );
}
function ir(e, r) {
  e &&
    "object" === n(e) &&
    ((e._strungPrepareGateToken = (Number(e._strungPrepareGateToken) || 0) + 1),
    (e._postBlindBoxStrungReadyGateTask = null),
    rr(e, !1),
    "function" == typeof e.recordPerfEvent &&
      e.recordPerfEvent("strung_prepare_gate_cancel", Date.now(), {
        reason: String(r || "").trim() || "unknown",
      }));
}
function or(e) {
  return new Promise(function (r) {
    setTimeout(r, Math.max(0, Number(e) || 0));
  });
}
function ur(e) {
  return !!(e && e.ready && e.beadCanvas);
}
function cr(e, r) {
  return lr.apply(this, arguments);
}
function lr() {
  return (lr = t(
    r().mark(function e(t, n) {
      var a,
        i,
        o,
        u = arguments;
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (
                ((a = u.length > 2 && void 0 !== u[2] ? u[2] : 1400),
                (i = Date.now()),
                (o = i + Math.max(0, Number(a) || 0)),
                n && !n.ready && "function" == typeof n.initCanvas)
              )
                try {
                  n.initCanvas();
                } catch (e) {}
            case 4:
              if (!(Date.now() <= o)) {
                e.next = 12;
                break;
              }
              if (!ur("function" == typeof t.trayComp ? t.trayComp() : n)) {
                e.next = 8;
                break;
              }
              return e.abrupt("return", !0);
            case 8:
              return (e.next = 10), or(50).catch(function () {});
            case 10:
              e.next = 4;
              break;
            case 12:
              return (
                "function" == typeof t.recordPerfEvent &&
                  t.recordPerfEvent("tray_canvas_ready_timeout", i, {
                    hasTray: !!n,
                    ready: !(!n || !n.ready),
                    beadCanvas: !(!n || !n.beadCanvas),
                  }),
                e.abrupt("return", !1)
              );
            case 14:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function sr(e) {
  var r = Number(e) || Date.now();
  return Math.max(0, 4200 - (Date.now() - r));
}
function dr(e, r) {
  return fr.apply(this, arguments);
}
function fr() {
  return (fr = t(
    r().mark(function e(t, n) {
      var a;
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if ((a = Math.max(0, Number(n) || 0))) {
                e.next = 3;
                break;
              }
              return e.abrupt("return", M);
            case 3:
              return e.abrupt(
                "return",
                Promise.race([
                  Promise.resolve(t),
                  or(a).then(function () {
                    return M;
                  }),
                ])
              );
            case 4:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function mr(e) {
  if (!e || "object" !== n(e)) return null;
  var r = Number(e._blindBoxActionToken) || 0;
  return (
    "function" == typeof e.setManagedTimeout
      ? e.setManagedTimeout.bind(e)
      : setTimeout
  )(function () {
    Ze(e, r) && er(e, !0);
  }, 160);
}
function pr(e) {
  if (
    e &&
    "object" === n(e) &&
    !(e._blindBoxActionPending || (e.data && e.data.blindBoxPreparing))
  ) {
    var r = Date.now();
    (Number.isFinite(Number(e._blindBoxDuplicateTapToastAt)) &&
      r - Number(e._blindBoxDuplicateTapToastAt) < 1200) ||
      ((e._blindBoxDuplicateTapToastAt = r),
      "function" == typeof e.showToast && e.showToast("灵感方案准备中"));
  }
}
function gr(e) {
  if (e && "object" === n(e)) {
    var r = Date.now();
    (Number.isFinite(Number(e._blindBoxFailureToastAt)) &&
      r - Number(e._blindBoxFailureToastAt) < 5e3) ||
      ((e._blindBoxFailureToastAt = r),
      "function" == typeof e.showToast &&
        e.showToast("方案加载超时，请再试一次"));
  }
}
function yr(e, r, t) {
  e &&
    "function" == typeof e.setRenderAssetWarmupPaused &&
    e.setRenderAssetWarmupPaused(!0 === r, t || "blindbox");
}
function br(e, r, t, a) {
  if (e && "object" === n(e)) {
    var i = Math.max(0, Number(t) || 0);
    if (i) {
      var o = String(a || "motion").trim() || "motion",
        u = Date.now() + i;
      (e._diyMotionLockUntil = Math.max(Number(e._diyMotionLockUntil || 0), u)),
        (e._diyMotionLockReason = o),
        "function" == typeof e.extendDiyResourceMotionLock &&
          e.extendDiyResourceMotionLock(e._diyMotionLockUntil, o),
        r &&
          "function" == typeof r.setRenderAssetWarmupPaused &&
          r.setRenderAssetWarmupPaused(!0, o);
    }
  }
}
function hr(e, r, t) {
  var n = String(t || "motion").trim() || "motion";
  r &&
    "function" == typeof r.setRenderAssetWarmupPaused &&
    r.setRenderAssetWarmupPaused(!1, n);
}
function _r(e, r, t) {
  var a = r && "object" === n(r) ? r : {},
    i = "function" == typeof a.run ? a.run : t;
  return "function" != typeof i
    ? Promise.resolve(!1)
    : e && "function" == typeof e.scheduleDiyResourceTask
    ? e.scheduleDiyResourceTask(Object.assign({}, a, { run: i }))
    : Promise.resolve().then(i);
}
function vr(e) {
  if (!e || "object" !== n(e)) return 0;
  var r = Number(e._strungActionPriorityUntil) || 0;
  return Math.max(0, r - Date.now());
}
function Pr(e, r) {
  e &&
    "object" === n(e) &&
    ((e._lastStrungWarmupActivityAt = Date.now()),
    (e._lastStrungWarmupActivityReason = String(r || "").trim() || "unknown"));
}
function xr(e) {
  return (
    !(!e || "object" !== n(e)) &&
    !!(
      e._blindBoxPlaybackLightStrungWarmupTask ||
      e._blindBoxPlanStrungWarmupTask ||
      e._currentStrungWarmupTask
    )
  );
}
function Sr(e, r) {
  var t = r && "object" === n(r) ? r : {};
  return !!(
    (t.cancelToken && t.cancelToken.cancelled) ||
    Mr(e) ||
    vr(e) > 0 ||
    (e && e._blindBoxPresetPending)
  );
}
function kr(e, r) {
  return Br.apply(this, arguments);
}
function Br() {
  return (Br = t(
    r().mark(function e(t, n) {
      var a, i, o, u, c;
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (t && "function" == typeof t.getDiyResourceSchedulerSnapshot) {
                e.next = 2;
                break;
              }
              return e.abrupt("return", !0);
            case 2:
              a = Date.now() + Math.max(0, Number(n) || 0);
            case 3:
              if (!(Date.now() < a)) {
                e.next = 13;
                break;
              }
              if (
                ((i = t.getDiyResourceSchedulerSnapshot()),
                (o = Number((i && i.queued) || 0)),
                (u = Number((i && i.running) || 0)),
                !(o <= 0 && u <= 0))
              ) {
                e.next = 9;
                break;
              }
              return e.abrupt("return", !0);
            case 9:
              return (e.next = 11), or(24);
            case 11:
              e.next = 3;
              break;
            case 13:
              return (
                (c = t.getDiyResourceSchedulerSnapshot()),
                e.abrupt(
                  "return",
                  Number((c && c.queued) || 0) <= 0 &&
                    Number((c && c.running) || 0) <= 0
                )
              );
            case 15:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function Tr(e) {
  if (!e || "object" !== n(e)) return 0;
  var r = Number(e._manualBeadActionPriorityUntil) || 0;
  return Math.max(0, r - Date.now());
}
function Mr(e) {
  return Tr(e) > 0;
}
function wr(e, r, t) {
  if (e && "object" === n(e) && !e._blindBoxWarmupRetryTimer) {
    var a = Object.assign({}, r || {}, { force: !1 }),
      i =
        "function" == typeof e.setManagedTimeout
          ? e.setManagedTimeout.bind(e)
          : setTimeout;
    e._blindBoxWarmupRetryTimer = i(function () {
      (e._blindBoxWarmupRetryTimer = null),
        "function" == typeof e.prewarmBlindBoxPresetPool &&
          e.prewarmBlindBoxPresetPool(
            Object.assign({}, a, {
              reason: "".concat(
                String(a.reason || "blindbox_retry"),
                "_motion_retry"
              ),
            })
          );
    }, Math.max(360, Number(t) || 900));
  }
}
function Ar(e) {
  if (e && "object" === n(e)) {
    Ye(e, "_manualBeadActionBlindBoxResumeTimer", "clearManagedTimeout");
    var r =
      "function" == typeof e.setManagedTimeout
        ? e.setManagedTimeout.bind(e)
        : setTimeout;
    e._manualBeadActionBlindBoxResumeTimer = r(function () {
      (e._manualBeadActionBlindBoxResumeTimer = null),
        Mr(e)
          ? Ar(e)
          : "function" == typeof e.prewarmBlindBoxPresetPool &&
            e.prewarmBlindBoxPresetPool({
              reason: "manual_bead_action_resume",
              targetCount: 3,
              renderWarmupLimit: 0,
              assetWarmup: !1,
            });
    }, 1100);
  }
}
function Rr(e, r) {
  e &&
    "object" === n(e) &&
    ((e._manualBeadActionPriorityUntil = Date.now() + 900 + 320),
    (e._nonCriticalTaskQuietUntil = Math.max(
      Number(e._nonCriticalTaskQuietUntil || 0),
      e._manualBeadActionPriorityUntil + 360
    )),
    br(e, r, 1220, "manual-bead-action"),
    Ur(e),
    Ye(e, "_blindBoxRecomputeTimer", "clearManagedTimeout"),
    yr(r, !0, "manual-bead-action"),
    Ar(e),
    "function" == typeof e.recordPerfEvent &&
      e.recordPerfEvent("manual_bead_action_priority", Date.now(), {
        blindBoxWarming: !(!e.data || !e.data.blindBoxWarming),
        readyPoolTask: !!e._readyBlindBoxPresetPoolTask,
        assetWarmupTask: !!e._blindBoxPresetAssetWarmupTask,
      }));
}
function Dr(e, r) {
  if (e && "object" === n(e)) {
    var t = Tr(e),
      a = function () {
        Mr(e) ||
          (yr(r, !1, "manual-bead-action"), hr(0, r, "manual-bead-action"));
      };
    if (t > 0)
      ("function" == typeof e.setManagedTimeout
        ? e.setManagedTimeout.bind(e)
        : setTimeout)(a, t);
    else a();
  }
}
function Cr(e, r) {
  e &&
    "object" === n(e) &&
    ((e._strungActionPriorityUntil = Date.now() + 3600 + 320),
    "function" == typeof e.cancelDiyResourceNonCritical &&
      e.cancelDiyResourceNonCritical("strung-action", {
        includeAllowDuringMotion: !0,
      }),
    "function" == typeof e.setDiyResourceSchedulerPause &&
      e.setDiyResourceSchedulerPause("strung-action", !0),
    br(e, r, 3920, "strung-action"),
    (e._suspendInUseRecomputeUntil = Math.max(
      Number(e._suspendInUseRecomputeUntil) || 0,
      e._strungActionPriorityUntil
    )),
    Ur(e),
    Ye(e, "_currentStrungWarmupTimer", "clearManagedTimeout"),
    Ye(e, "_blindBoxRecomputeTimer", "clearManagedTimeout"),
    yr(r, !0, "strung-action"),
    Pr(e, "strung-action-priority"));
}
function Nr(e, r) {
  e &&
    "object" === n(e) &&
    ((e._strungActionPriorityUntil = 0),
    "function" == typeof e.setDiyResourceSchedulerPause &&
      e.setDiyResourceSchedulerPause("strung-action", !1),
    yr(r, !1, "strung-action"),
    hr(0, r, "strung-action"),
    Ve(e, r, 0, "strung-action-exit"));
}
function Ir(e) {
  if (e && "object" === n(e)) {
    var r = e._blindBoxPlaybackTray;
    if (r)
      ("function" == typeof e.setManagedTimeout
        ? e.setManagedTimeout.bind(e)
        : setTimeout)(function () {
        yr(r, !1, "blindbox-playback"),
          hr(0, r, "blindbox-playback"),
          (function (e) {
            if (!e || "object" !== n(e) || e._blindBoxPlaybackLightPreloadTask)
              return;
            var r = function (r) {
                var t = At(e, r, 3),
                  n = Rt(e, t).slice(0, 12);
                return n.length && "function" == typeof y
                  ? y(n, null, { persist: !0, concurrency: 2 })
                      .then(function () {
                        return !0;
                      })
                      .catch(function () {
                        return !1;
                      })
                  : Promise.resolve(!1);
              },
              t = Q(e._blindBoxPresetPool, Y(), H(e)),
              a = r(t),
              i = e._blindBoxPresetPoolReady
                ? Promise.resolve(!1)
                : (function () {
                    return $.apply(this, arguments);
                  })()
                    .then(function (t) {
                      return ee(e, t), r(t);
                    })
                    .catch(function () {
                      return !1;
                    });
            e._blindBoxPlaybackLightPreloadTask = Promise.all([a, i])
              .catch(function () {})
              .finally(function () {
                e._blindBoxPlaybackLightPreloadTask = null;
              });
          })(e);
      }, 320);
    e._blindBoxPlaybackTray = null;
  }
}
function jr(e, r) {
  if (e && "object" === n(e) && !e._blindBoxPostPlaybackRefillTimer) {
    var t =
        "function" == typeof e.setManagedTimeout
          ? e.setManagedTimeout.bind(e)
          : setTimeout,
      a = vr(e),
      i = Math.max(
        0,
        Number.isFinite(Number(r)) ? Number(r) : 700,
        a > 0 ? a + 80 : 0
      );
    e._blindBoxPostPlaybackRefillTimer = t(function () {
      if (
        ((e._blindBoxPostPlaybackRefillTimer = null),
        e._blindBoxPresetPending || e._blindBoxActionPending)
      )
        jr(e, 700);
      else if ("function" == typeof e.prewarmBlindBoxPresetPool) {
        var r = Math.min(3, tt(e).length + 1);
        e.prewarmBlindBoxPresetPool({
          reason: "blindbox_post_playback_refill",
          limit: 8,
          fullPresetLimit: 1,
          renderWarmupLimit: 1,
          targetCount: r,
        });
      }
    }, i);
  }
}
function Ur(e) {
  Ye(e, "_blindBoxPostPlaybackRefillTimer", "clearManagedTimeout");
}
function Er(e) {
  var r = e && Array.isArray(e.beadsRef) ? e.beadsRef : [];
  return r.length
    ? r
        .map(function (e, r) {
          var t = e && "object" === n(e) ? e : {};
          return [
            t.uid || r,
            t.id || t.mat || "",
            t.imgUrl || t.img_url || "",
            t.mm || "",
            t.imgScale || "",
            t.isPendant ? 1 : 0,
            t.hangsOutward ? 1 : 0,
            t.isSpacer ? 1 : 0,
          ].join(":");
        })
        .join("|")
    : "";
}
function Vr(e) {
  var r = Array.isArray(e) ? e : [];
  return r.length
    ? r
        .map(function (e, r) {
          var t = e && "object" === n(e) ? e : {},
            a = t.material && "object" === n(t.material) ? t.material : {};
          return [
            t.beadId || t.id || r,
            t.imgUrl || t.img_url || "",
            t.variantIdx || "",
            a.id || a.code || "",
          ].join(":");
        })
        .join("|")
    : "";
}
function Wr(e, r) {
  e &&
    "object" === n(e) &&
    ((e._currentStrungReady = !1),
    (e._currentStrungReadyKey = ""),
    (e._currentStrungReadyReason = String(r || "").trim() || "unknown"),
    (e._currentStrungReadyNotBeforeAt = 0),
    ir(e, r || "invalidate"));
}
function Lr(e, r, t, n) {
  return (
    !!(e && r && t) &&
    !0 === e._currentStrungReady &&
    e._currentStrungReadyKey === t &&
    (!(
      "function" == typeof r.isStrungDomOverlayEnabled &&
      r.isStrungDomOverlayEnabled()
    ) ||
      !0 === n)
  );
}
function Or(e) {
  e && "object" === n(e) && (e._blindBoxLastPlaybackActivityAt = Date.now());
}
function Kr(e) {
  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if (!e || "object" !== n(e) || "function" != typeof e.trayComp)
    return Promise.resolve(!1);
  var t = e.trayComp();
  if (!t || "function" != typeof t.prewarmCurrentStrungResources)
    return Promise.resolve(!1);
  var a = Er(t);
  if (!a) return Promise.resolve(!1);
  var i = !0 === r.force || !0 === r.foreground || !0 === r.forceRestart;
  if (!i && e._currentStrungReady && e._currentStrungReadyKey === a)
    return Promise.resolve(!0);
  if (
    e._currentStrungReadyTask &&
    e._currentStrungReadyKey === a &&
    !0 !== r.forceRestart &&
    !0 !== i
  )
    return e._currentStrungReadyTask;
  Ur(e), (e._currentStrungReady = !1), (e._currentStrungReadyKey = a);
  var o = String(r.reason || "").trim() || "unknown";
  e._currentStrungReadyReason = o;
  var u = Date.now(),
    c = (Number(e._currentStrungReadyToken) || 0) + 1;
  i &&
    e._currentStrungReadyCancelToken &&
    ((e._currentStrungReadyCancelToken.cancelled = !0),
    (e._currentStrungReadyCancelToken.reason = "foreground-restart"));
  var l = { cancelled: !1, reason: "", generation: c };
  (e._currentStrungReadyToken = c),
    (e._currentStrungReadyCancelToken = l),
    Pr(e, "current-ready-start:".concat(o));
  var s = Promise.resolve(
    t.prewarmCurrentStrungResources({
      templateDelayMs: Number.isFinite(Number(r.templateDelayMs))
        ? Number(r.templateDelayMs)
        : 0,
      templateIntervalMs: Number.isFinite(Number(r.templateIntervalMs))
        ? Number(r.templateIntervalMs)
        : 36,
      templateBatchSize: Math.max(1, Number(r.templateBatchSize) || 2),
      shadowDelayMs: Number.isFinite(Number(r.shadowDelayMs))
        ? Number(r.shadowDelayMs)
        : 0,
      shadowIntervalMs: Number.isFinite(Number(r.shadowIntervalMs))
        ? Number(r.shadowIntervalMs)
        : 48,
      shadowBatchSize: Math.max(1, Number(r.shadowBatchSize) || 1),
      force: !0 === r.force,
      ignoreFpsGuard: !0 === r.ignoreFpsGuard,
      cancelToken: l,
      cancelGeneration: c,
    })
  )
    .then(function (r) {
      var n = Er(t),
        i = !0 === r && n === a && !0 !== l.cancelled,
        s = Number(e._currentStrungReadyToken) === c;
      return (
        s && ((e._currentStrungReady = i), (e._currentStrungReadyKey = n || a)),
        "function" == typeof e.recordPerfEvent &&
          e.recordPerfEvent("current_strung_ready_task", u, {
            result: i,
            reason: o,
            beadCount: Array.isArray(t.beadsRef) ? t.beadsRef.length : 0,
            tokenCurrent: s,
          }),
        !!s && i
      );
    })
    .catch(function () {
      return !1;
    })
    .finally(function () {
      Pr(e, "current-ready-finish:".concat(o)),
        e._currentStrungReadyTask === s &&
          Number(e._currentStrungReadyToken) === c &&
          ((e._currentStrungReadyTask = null),
          e._currentStrungReadyCancelToken === l &&
            (e._currentStrungReadyCancelToken = null));
    });
  return (e._currentStrungReadyTask = s), s;
}
function Fr(e) {
  if (!e || "object" !== n(e)) return 0;
  var r = Number(e._currentStrungReadyNotBeforeAt) || 0;
  return Math.max(0, r - Date.now());
}
function zr(e) {
  return qr.apply(this, arguments);
}
function qr() {
  return (qr = t(
    r().mark(function e(t) {
      var a,
        i,
        o,
        u,
        c,
        l,
        s,
        d = arguments;
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (
                ((a = d.length > 1 && void 0 !== d[1] ? d[1] : {}),
                !((i = Fr(t)) > 0))
              ) {
                e.next = 5;
                break;
              }
              return (e.next = 5), or(i).catch(function () {});
            case 5:
              (o = a && "object" === n(a) ? a : {}),
                (u = Math.max(0, Number(o.quietMs) || 180)),
                (c = Date.now() + Math.max(0, Number(o.tailWaitMs) || 360));
            case 8:
              if (!(xr(t) && Date.now() < c)) {
                e.next = 13;
                break;
              }
              return (
                (e.next = 11),
                or(Math.min(40, Math.max(0, c - Date.now()))).catch(
                  function () {}
                )
              );
            case 11:
              e.next = 8;
              break;
            case 13:
              if (
                ((l = Number(t && t._lastStrungWarmupActivityAt) || 0),
                !((s = l > 0 ? l + u - Date.now() : 0) > 0))
              ) {
                e.next = 18;
                break;
              }
              return (
                (e.next = 18),
                or(Math.min(s, Math.max(0, c - Date.now()))).catch(
                  function () {}
                )
              );
            case 18:
              return e.abrupt("return", !0);
            case 19:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function Gr(e, r) {
  return Qr.apply(this, arguments);
}
function Qr() {
  return (Qr = t(
    r().mark(function e(a, i) {
      var o, u, c, l, s, d, f, m, p, g, y;
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (a && "object" === n(a) && i) {
                e.next = 2;
                break;
              }
              return e.abrupt("return", !0);
            case 2:
              if (!0 !== a._strungClickPreparing) {
                e.next = 4;
                break;
              }
              return e.abrupt("return", !1);
            case 4:
              if (
                ((o = "function" == typeof i.getStats ? i.getStats() : {}),
                !(
                  (u = Number(o && o.beadsCount) || 0) < 8 ||
                  (o && o.isOverMaxPerimeter)
                ))
              ) {
                e.next = 8;
                break;
              }
              return e.abrupt("return", !0);
            case 8:
              if (
                ((c =
                  "function" ==
                    typeof i.hasPreparedStrungDomOverlayForCurrentBeads &&
                  i.hasPreparedStrungDomOverlayForCurrentBeads()),
                (l = Er(i)),
                !Lr(a, i, l, c))
              ) {
                e.next = 12;
                break;
              }
              return e.abrupt("return", !0);
            case 12:
              return (
                (s = Date.now()),
                (d = (Number(a._strungClickPrepareToken) || 0) + 1),
                (a._strungClickPrepareToken = d),
                (a._strungClickPreparing = !0),
                rr(a, !0),
                Pr(a, "strung-click-foreground-start"),
                (f = Kr(a, {
                  reason: "strung_click_foreground",
                  force: !0,
                  forceRestart: !0,
                  templateIntervalMs: 18,
                  templateBatchSize: 4,
                  shadowIntervalMs: 24,
                  shadowBatchSize: 2,
                  ignoreFpsGuard: !0,
                })
                  .then(
                    (function () {
                      var e = t(
                        r().mark(function e(t) {
                          return r().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (!0 !== t) {
                                    e.next = 3;
                                    break;
                                  }
                                  return (
                                    (e.next = 3),
                                    zr(a, {
                                      quietMs: 90,
                                      tailWaitMs: 260,
                                    }).catch(function () {})
                                  );
                                case 3:
                                  return e.abrupt("return", !0 === t);
                                case 4:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function (r) {
                        return e.apply(this, arguments);
                      };
                    })()
                  )
                  .catch(function () {
                    return !1;
                  })),
                (m = Number(a._currentStrungReadyToken) || 0),
                (e.next = 22),
                Promise.race([
                  f,
                  or(1400).then(function () {
                    return !1;
                  }),
                ]).catch(function () {
                  return !1;
                })
              );
            case 22:
              return (
                (p = e.sent),
                (g =
                  "function" ==
                    typeof i.hasPreparedStrungDomOverlayForCurrentBeads &&
                  i.hasPreparedStrungDomOverlayForCurrentBeads()),
                !0 !== (y = !0 === p || g) &&
                  Number(a._currentStrungReadyToken) === m &&
                  (a._currentStrungReadyCancelToken &&
                    ((a._currentStrungReadyCancelToken.cancelled = !0),
                    (a._currentStrungReadyCancelToken.reason =
                      "strung-click-timeout")),
                  (a._currentStrungReady = !1)),
                Number(a._strungClickPrepareToken) === d &&
                  ((a._strungClickPreparing = !1), rr(a, !1)),
                "function" == typeof a.recordPerfEvent &&
                  a.recordPerfEvent("strung_click_foreground_ready", s, {
                    ready: !0 === p,
                    prepared: g,
                    result: y,
                    timedOut: !0 !== p && !g,
                    beadCount: u,
                    lastTraySource: a._lastTraySource || "",
                  }),
                e.abrupt("return", y)
              );
            case 29:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function Hr(e) {
  if (e && "object" === n(e)) {
    var a = Date.now(),
      i = e._blindBoxDeferredTrayImageRehydrateReason;
    e._blindBoxDeferredTrayImageRehydrateReason = "";
    var o = Date.now(),
      u = (Number(e._strungPrepareGateToken) || 0) + 1;
    e._strungPrepareGateToken = u;
    var c = !1,
      l = null,
      s =
        "function" == typeof e.setManagedTimeout
          ? e.setManagedTimeout.bind(e)
          : setTimeout;
    l = s(function () {
      (l = null),
        Number(e._strungPrepareGateToken) === u && ((c = !0), rr(e, !0));
    }, 160);
    var d = (function (e) {
      var r = Date.now(),
        t = (Number(e && e._blindBoxLastPlaybackActivityAt) || r) + 420 - r;
      return t <= 0 ? 0 : Math.max(180, Math.min(420, t));
    })(e);
    e._currentStrungReadyNotBeforeAt = Date.now() + d;
    var f = e._blindBoxPlaybackLightStrungWarmupTask || Promise.resolve(!1),
      m = e._blindBoxPlanStrungWarmupTask || Promise.resolve(!1),
      p = Promise.all([
        Promise.resolve(f).catch(function () {
          return !1;
        }),
        Promise.race([
          Promise.resolve(m).catch(function () {
            return !1;
          }),
          or(420).then(function () {
            return !1;
          }),
        ]),
      ])
        .catch(function () {
          return !1;
        })
        .then(
          t(
            r().mark(function t() {
              return r().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      if (
                        !i ||
                        "function" != typeof e.rehydrateTrayBeadImages
                      ) {
                        r.next = 7;
                        break;
                      }
                      if (!e.rehydrateTrayBeadImages(i)) {
                        r.next = 7;
                        break;
                      }
                      return (
                        (e._currentStrungReady = !1),
                        (e._currentStrungReadyKey = ""),
                        (r.next = 7),
                        or(80).catch(function () {})
                      );
                    case 7:
                      return r.abrupt(
                        "return",
                        Kr(e, {
                          reason: "blindbox_post_playback",
                          templateIntervalMs: 24,
                          templateBatchSize: 4,
                          shadowIntervalMs: 32,
                          shadowBatchSize: 2,
                          force: !0,
                          forceRestart: !0,
                          ignoreFpsGuard: !0,
                        })
                      );
                    case 8:
                    case "end":
                      return r.stop();
                  }
              }, t);
            })
          )
        )
        .then(
          (function () {
            var n = t(
              r().mark(function t(n) {
                return r().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (!0 !== n) {
                          r.next = 3;
                          break;
                        }
                        return (
                          (r.next = 3),
                          zr(e, { quietMs: 180, tailWaitMs: 650 }).catch(
                            function () {}
                          )
                        );
                      case 3:
                        return r.abrupt("return", !0 === n);
                      case 4:
                      case "end":
                        return r.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })()
        ),
      g = Promise.race([
        p.catch(function () {
          return !1;
        }),
        or(2e3).then(function () {
          return !1;
        }),
      ])
        .then(function (r) {
          return (
            l &&
              ("function" == typeof e.clearManagedTimeout
                ? e.clearManagedTimeout(l)
                : clearTimeout(l),
              (l = null)),
            Number(e._strungPrepareGateToken) === u &&
              (rr(e, !1), (e._postBlindBoxStrungReadyGateTask = null)),
            "function" == typeof e.recordPerfEvent &&
              e.recordPerfEvent("strung_prepare_gate", o, {
                ready: !0 === r,
                tokenCurrent: Number(e._strungPrepareGateToken) === u,
                preparingShown: c,
                durationMs: Math.max(0, Date.now() - o),
                queuedToggle: !0 === e._pendingStrungToggleAfterReady,
              }),
            !0 === e._pendingStrungToggleAfterReady &&
              ar(
                e,
                !0 === r ? "blindbox_post_ready" : "blindbox_post_timeout",
                40
              ),
            !0 === r
          );
        })
        .finally(function () {
          jr(e, 260);
        });
    (e._postBlindBoxStrungReadyGateTask = g),
      "function" == typeof e.recordPerfEvent &&
        e.recordPerfEvent("blindbox_post_playback_tasks", a, {
          currentStrungWarmupScheduled: !0,
          rehydrateBeforeReady: !!i,
          refillScheduled: "after_current_strung_ready",
          quietMs: d,
          readyPoolSize: tt(e).length,
        });
  }
}
function Yr(e, r, t, a) {
  var o = Array.isArray(a)
    ? a.filter(function (e) {
        return e && e.beadId;
      })
    : [];
  if (!e || !r || "function" != typeof r.addBead || !o.length) return !1;
  var u = Date.now();
  Xe(e);
  var c = 96 * o.length + 900;
  br(e, r, c + 320, "blindbox-playback"),
    (function (e, r) {
      if (e && "object" === n(e)) {
        var t = Math.max(0, Number(r) || 0);
        (e._suspendInUseRecomputeUntil = Date.now() + t),
          Ye(e, "_blindBoxRecomputeTimer", "clearManagedTimeout");
        var a =
          "function" == typeof e.setManagedTimeout
            ? e.setManagedTimeout.bind(e)
            : setTimeout;
        e._blindBoxRecomputeTimer = a(function () {
          e._suspendInUseRecomputeUntil = 0;
          var r = String((e.data && e.data.menuCategory) || ""),
            t = !!String((e.data && e.data.searchQuery) || "").trim();
          if ("in_use" === r || t) {
            var n = (e.data && e.data.trayState) || {};
            e.recomputeDisplayBeads({ trayPattern: n.pattern || [] });
          }
          e._blindBoxRecomputeTimer = null;
        }, t);
      }
    })(e, c),
    (e._blindBoxPresetPending = !0),
    (e._lastTraySource = "blindbox"),
    Wr(e, "blindbox_playback"),
    (function (e, r, t) {
      if (!(e && r && Array.isArray(t) && t.length)) return !1;
      var n = C(r);
      if (!n) return !1;
      var a = nt(e).filter(function (e) {
        return e && e.key !== n;
      });
      a.push({
        key: n,
        preset: r,
        bucket: R(r),
        pattern: A(r.pattern),
        playbackPlan: t,
        preparedAt: Date.now(),
      }),
        (e._usedBlindBoxPresetPool = a.slice(-10)),
        it(e);
    })(e, t, o),
    (function (e, r) {
      e && r && ((e._blindBoxPlaybackTray = r), yr(r, !0, "blindbox-playback"));
    })(e, r);
  var l = 0,
    s = !1,
    d = 0,
    f = 0,
    m = 0,
    p = -1,
    g = !1,
    y = Math.max(3, Math.floor(0.72 * o.length)),
    b = function () {
      s ||
        ((s = !0),
        Or(e),
        Ye(e, "_blindBoxPresetTimer", "clearManagedInterval"),
        (e._blindBoxPresetPending = !1),
        Ir(e),
        "function" == typeof r.emitState && r.emitState(),
        "function" == typeof e.setData &&
          e.setData({
            currentSchemeName: String(
              t.title || t.name || "盲盒灵感方案"
            ).trim(),
          }),
        i("slide"),
        "function" == typeof e.showToast &&
          e.showToast("已为你投放一套灵感方案"),
        Hr(e),
        "function" == typeof e.recordPerfEvent &&
          e.recordPerfEvent("blindbox_playback", u, {
            planCount: o.length,
            addedCount: d,
            failedAt: p,
            addTotalMs: f,
            addMaxMs: m,
            intervalMs: 96,
            readyPoolSize: tt(e).length,
          }));
    },
    h = function () {
      if (l >= o.length) b();
      else {
        var t = o[l],
          a = Date.now(),
          i = r.addBead(t.beadId, {
            material: t.material || null,
            variantIdx: t.variantIdx,
            imgUrl: t.imgUrl,
            silentState: !0,
            skipPrewarm: !0,
            sound: !1,
            perfSource: "blindbox_playback",
          }),
          u = Math.max(0, Date.now() - a);
        if (((f += u), (m = Math.max(m, u)), Or(e), (l += 1), !i))
          return (p = l - 1), void b();
        (d += 1) % 3 == 0 &&
          (function e(r, t, a) {
            if (
              r &&
              "object" === n(r) &&
              !r._blindBoxPlaybackLightStrungWarmupTask
            ) {
              var i =
                "function" == typeof r.setManagedTimeout
                  ? r.setManagedTimeout.bind(r)
                  : setTimeout;
              if (r._blindBoxPresetPending)
                return (
                  Ye(
                    r,
                    "_blindBoxPlaybackLightStrungWarmupDelayTimer",
                    "clearManagedTimeout"
                  ),
                  void (r._blindBoxPlaybackLightStrungWarmupDelayTimer = i(
                    function () {
                      (r._blindBoxPlaybackLightStrungWarmupDelayTimer = null),
                        e(r, 0, a);
                    },
                    Math.max(Number(t) || 0, 420)
                  ))
                );
              i(function () {
                var e = "function" == typeof r.trayComp ? r.trayComp() : null,
                  t = Array.isArray(e && e.beadsRef) ? e.beadsRef : [];
                if (e && t.length) {
                  var n = t.slice(-3),
                    i = [];
                  "function" == typeof e.prewarmBeadRenderTemplates &&
                    i.push(
                      new Promise(function (r) {
                        e.prewarmBeadRenderTemplates(n, {
                          scope: "blindbox-playback-light",
                          delayMs: 0,
                          batchSize: 1,
                          intervalMs: 72,
                          mode: "realtime",
                          force: !0,
                          onComplete: r,
                        });
                      })
                    ),
                    "function" == typeof e.prewarmAccessoryShapeShadows &&
                      i.push(
                        new Promise(function (r) {
                          e.prewarmAccessoryShapeShadows(n, {
                            delayMs: 28,
                            batchSize: 1,
                            intervalMs: 96,
                            soft: !0,
                            force: !0,
                            onComplete: r,
                          });
                        })
                      ),
                    i.length &&
                      (Pr(r, "blindbox-playback-light-start"),
                      (r._blindBoxPlaybackLightStrungWarmupTask = Promise.all(i)
                        .then(function () {
                          return !0;
                        })
                        .catch(function () {
                          return !1;
                        })
                        .finally(function () {
                          Pr(r, "blindbox-playback-light-finish"),
                            (r._blindBoxPlaybackLightStrungWarmupTask = null);
                        })),
                      "function" == typeof r.recordPerfEvent &&
                        r.recordPerfEvent(
                          "blindbox_playback_light_strung_warmup",
                          Date.now(),
                          {
                            reason: String(a || "").trim() || "playback",
                            beads: n.length,
                          }
                        ));
                }
              }, Math.max(0, Number(t) || 0));
            }
          })(e, 56, "playback_".concat(d)),
          !g &&
            d >= y &&
            ((g = !0),
            Pt(e, r, o, {
              reason: "blindbox_playback_final",
              batchSize: 1,
              intervalMs: 96,
              shadowIntervalMs: 112,
              frameBudgetMs: 4,
              force: !0,
              forceRestart: !0,
            })),
          l % 4 == 0 && "function" == typeof r.emitState && r.emitState(),
          l >= o.length && b();
      }
    },
    _ =
      "function" == typeof e.setManagedInterval
        ? e.setManagedInterval.bind(e)
        : setInterval;
  return (e._blindBoxPresetTimer = _(h, 96)), h(), !0;
}
function Xr(e) {
  var r =
      e && e.catalogSnapshot && "object" === n(e.catalogSnapshot)
        ? e.catalogSnapshot
        : {},
    t = Array.isArray(r.beadTypes) ? r.beadTypes : [],
    a = Object.create(null);
  return (
    t.forEach(function (e) {
      var r = String((e && e.id) || "").trim();
      r && !a[r] && (a[r] = e);
    }),
    a
  );
}
function Jr(e, r) {
  var t = String(r || "").trim();
  if (!t) return null;
  var n = e && e[t];
  if (P(n)) return n;
  var a = v(t);
  return P(a) ? x(n, a) : n || a || null;
}
function Zr(e, r, t) {
  var n = A(t);
  if (!n.length) return [];
  for (var a = Xr(e), i = [], o = 0; o < n.length; o += 1) {
    var u = n[o],
      c = k(e, Jr(a, u), u);
    if (!P(c)) return [];
    var l = Array.isArray(c.variants)
        ? c.variants
            .map(function (e) {
              return String(e || "").trim();
            })
            .filter(Boolean)
        : [],
      s = l.length ? Math.floor(Math.random() * l.length) : o,
      d =
        r && "function" == typeof r.resolveBeadRenderImageUrl
          ? r.resolveBeadRenderImageUrl(c, s)
          : oe(c, s);
    if (!d) return [];
    i.push({ beadId: u, material: c, variantIdx: s, imgUrl: d });
  }
  return i;
}
function $r(e, r) {
  if (!e || !r) return null;
  var t = ue(e).filter(function (e) {
    return (
      !!String(
        (e && (e.id || e.code || e.materialId || e.material_id)) || ""
      ).trim() && P(e)
    );
  });
  if (t.length < 8) return null;
  for (
    var n = t.slice().sort(function () {
        return Math.random() - 0.5;
      }),
      a = [],
      i = 0;
    i < 16;
    i += 1
  ) {
    var o = n[i % n.length],
      u = String(
        (o && (o.id || o.code || o.materialId || o.material_id)) || ""
      ).trim();
    u && a.push(u);
  }
  var c = Zr(e, r, a);
  if (!c.length) return null;
  var l = {
    id: "blindbox_fallback_".concat(Date.now()),
    presetId: "blindbox_fallback_".concat(Date.now()),
    title: "blindbox fallback",
    pattern: a,
  };
  return {
    key: C(l),
    preset: l,
    bucket: "unknown",
    pattern: a,
    playbackPlan: c,
    warmup: { imagesReady: !1, renderReady: !1, currentStrungPriority: !1 },
    preparedAt: Date.now(),
  };
}
function et(e) {
  var r = [];
  return (
    (Array.isArray(e) ? e : []).forEach(function (e) {
      var t = String((e && e.imgUrl) || "").trim();
      t && r.indexOf(t) < 0 && r.push(t);
    }),
    r
  );
}
function rt(e, r) {
  var t = et(r);
  return (
    !t.length ||
    t.every(function (r) {
      return Ie(e, r);
    })
  );
}
function tt(e) {
  var r = (function (e) {
      return e && "object" === n(e)
        ? (Array.isArray(e._readyBlindBoxPresetPool) ||
            (e._readyBlindBoxPresetPool = []),
          e._readyBlindBoxPresetPool)
        : [];
    })(e),
    t = Date.now();
  return (
    (e._readyBlindBoxPresetPool = r.filter(function (e) {
      if (
        !(
          e &&
          e.preset &&
          Array.isArray(e.playbackPlan) &&
          e.playbackPlan.length
        )
      )
        return !1;
      var r = Number(e.preparedAt || 0);
      return !r || t - r <= 3e5;
    })),
    e._readyBlindBoxPresetPool
  );
}
function nt(e) {
  var r = (function (e) {
    return e && "object" === n(e)
      ? (Array.isArray(e._usedBlindBoxPresetPool) ||
          (e._usedBlindBoxPresetPool = []),
        e._usedBlindBoxPresetPool)
      : [];
  })(e);
  return (
    (e._usedBlindBoxPresetPool = r
      .filter(function (e) {
        return (
          e &&
          e.key &&
          e.preset &&
          Array.isArray(e.playbackPlan) &&
          e.playbackPlan.length
        );
      })
      .slice(-10)),
    e._usedBlindBoxPresetPool
  );
}
function at(e) {
  var r = Array.isArray(e && e._blindBoxRecentPresetKeys)
      ? e._blindBoxRecentPresetKeys
      : [],
    t = Object.create(null);
  return (
    r.forEach(function (e) {
      e && (t[e] = !0);
    }),
    t
  );
}
function it(e, r) {
  if (e && "object" === n(e) && "function" == typeof e.setData) {
    var t = r && "object" === n(r) ? r : {},
      a = tt(e).length,
      i = nt(e).length,
      o =
        !(
          Mr(e) ||
          (!0 !== t.warming &&
            !e._readyBlindBoxPresetPoolTask &&
            !e._blindBoxPresetPoolPromise &&
            !e._blindBoxPresetAssetWarmupTask)
        ) &&
        a <= 0 &&
        i <= 0,
      u = {},
      c = e.data && "object" === n(e.data) ? e.data : {};
    c.blindBoxReadyCount !== a && (u.blindBoxReadyCount = a),
      c.blindBoxReplayCount !== i && (u.blindBoxReplayCount = i),
      c.blindBoxWarming !== o && (u.blindBoxWarming = o),
      Object.keys(u).length && e.setData(u),
      a >= 3 &&
        e._standaloneDiyLoadingPending &&
        "function" == typeof e.resolveStandaloneDiyLoadingGate &&
        e.resolveStandaloneDiyLoadingGate("blindbox");
  }
}
function ot(e) {
  var r = e && e.warmup && "object" === n(e.warmup) ? e.warmup : {},
    t =
      e && e.warmupState && "object" === n(e.warmupState) ? e.warmupState : {};
  return !0 === r.renderReady || !0 === t.renderReady || !0 === e.renderReady;
}
function ut(e, r, t, a) {
  if (!(e && r && Array.isArray(t) && t.length)) return !1;
  var i = C(r);
  if (!i) return !1;
  var o = a && "object" === n(a) ? a : {},
    u = tt(e).filter(function (e) {
      return e && e.key !== i;
    });
  return (
    u.push({
      key: i,
      preset: r,
      bucket: R(r),
      pattern: A(r.pattern),
      playbackPlan: t,
      warmup: {
        imagesReady: !0 === o.imagesReady,
        renderReady: !0 === o.renderReady,
        currentStrungPriority: !0 === o.currentStrungPriority,
      },
      preparedAt: Date.now(),
    }),
    (e._readyBlindBoxPresetPool = u.slice(-Math.max(1, 6))),
    it(e),
    !0
  );
}
function ct(e, r) {
  return (
    !(!e || !r || "object" !== n(r)) &&
    ((r.warmup = Object.assign({}, r.warmup || {}, {
      imagesReady: !0,
      renderReady: !0,
      currentStrungPriority: !0,
    })),
    (r.warmupState = Object.assign({}, r.warmupState || {}, r.warmup)),
    (r.renderReady = !0),
    (r.preparedAt = Date.now()),
    it(e),
    !0)
  );
}
function lt(e) {
  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    t = tt(e);
  if (!t.length) return null;
  var a = r && "object" === n(r) ? r : {},
    i = at(e),
    o = t.filter(function (e) {
      return e && e.key && !i[e.key];
    }),
    u = o.length ? o : t,
    c = u.filter(ot);
  if (!0 === a.requireRenderReady && !c.length) return null;
  var l = !0 === a.requireRenderReady ? c : u,
    s = q(e, l);
  return s
    ? ((e._readyBlindBoxPresetPool = t.filter(function (e) {
        return e !== s;
      })),
      ae(e, s.preset),
      it(e),
      s)
    : null;
}
function st(e) {
  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    t = nt(e);
  if (!t.length) return null;
  var a = r && "object" === n(r) ? r : {},
    i = at(e),
    o = t.filter(function (e) {
      return e && e.key && !i[e.key];
    }),
    u = t.filter(function (r) {
      return (
        r &&
        r.key !==
          (e._blindBoxRecentPresetKeys && e._blindBoxRecentPresetKeys[0])
      );
    });
  if (!o.length && !u.length && !0 !== a.allowLast) return null;
  var c = o.length ? o : u.length ? u : t,
    l = q(e, c);
  return l ? (ae(e, l.preset), it(e), l) : null;
}
function dt(e, r) {
  if (!e || "object" !== n(e) || "function" != typeof e.trayComp) return !1;
  if (e._blindBoxPresetPending)
    return (
      (e._blindBoxDeferredTrayImageRehydrateReason =
        r || "blindbox_deferred_rehydrate"),
      !1
    );
  var t = e.trayComp(),
    a = Array.isArray(t && t.beadsRef) ? t.beadsRef : [];
  if (!t || !a.length) return !1;
  var i = Xr(e),
    o = !1;
  return (
    a.forEach(function (e, r) {
      var n = String((e && (e.id || e.mat)) || "").trim();
      if (n) {
        var a = Jr(i, n);
        if (P(a)) {
          var u =
              "function" == typeof t.collectBeadRenderImageUrls
                ? t.collectBeadRenderImageUrls(a, r)
                : [oe(a, r)].filter(Boolean),
            c = (function () {
              for (var e = [], r = 0; r < arguments.length; r += 1)
                (Array.isArray(arguments[r]) ? arguments[r] : []).forEach(
                  function (r) {
                    var t = String(r || "").trim();
                    t && e.indexOf(t) < 0 && e.push(t);
                  }
                );
              return e;
            })(u, e.__imageCandidates);
          c.length && (e.__imageCandidates = c);
          var l = String(e.imgUrl || e.img_url || "").trim(),
            s = l && t.imageMeta ? t.imageMeta[l] : null,
            d = String(e.__manualVariantTargetImgUrl || "").trim();
          if (!(!u[0] || d || !(!l || (s && s.failed) || u.indexOf(l) < 0)))
            return (
              (e.imgUrl = u[0]),
              (e.img_url = u[0]),
              "function" == typeof t.ensureImage && t.ensureImage(u[0]),
              void (o = !0)
            );
          s &&
            s.failed &&
            "function" == typeof t.recoverBeadImage &&
            (o = t.recoverBeadImage(e) || o);
        }
      }
    }),
    o &&
      ("function" == typeof t.scheduleRender
        ? t.scheduleRender(r || "rehydrate-bead-images")
        : "function" == typeof t.render && t.render(),
      "function" == typeof t.emitState && t.emitState()),
    o
  );
}
function ft(e, r) {
  var t = A(r);
  if (!t.length) return [];
  var a = Xr(e),
    i = [],
    o = function (e) {
      var r = String(e || "").trim();
      !r || i.indexOf(r) >= 0 || i.push(r);
    };
  return (
    Array.from(new Set(t)).forEach(function (e) {
      var r = Jr(a, e);
      r &&
        "object" === n(r) &&
        (o(oe(r)), (Array.isArray(r.variants) ? r.variants : []).forEach(o));
    }),
    i.slice(0, 96)
  );
}
function mt(e, r) {
  var t = A(r);
  if (!t.length) return [];
  var n = Xr(e);
  return Array.from(new Set(t)).filter(function (e) {
    var r = Jr(n, e);
    return !P(r);
  });
}
function pt(e, r) {
  var t = Array.isArray(r && r.beadTypes) ? r.beadTypes : [];
  return !(!e || !t.length) && qe(e, t, "blindbox_materials");
}
function gt(e, r) {
  return yt.apply(this, arguments);
}
function yt() {
  return (yt = t(
    r().mark(function e(t, n) {
      var a, i;
      return r().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if ((a = mt(t, n)).length) {
                  e.next = 3;
                  break;
                }
                return e.abrupt("return", !0);
              case 3:
                if ("function" == typeof f) {
                  e.next = 5;
                  break;
                }
                return e.abrupt("return", !1);
              case 5:
                return (
                  (e.prev = 5),
                  (e.next = 8),
                  f(a, {
                    forceRemote: !1,
                    preferCache: !0,
                    remoteTimeoutMs: 5200,
                  })
                );
              case 8:
                return (
                  (i = e.sent),
                  pt(t, i),
                  e.abrupt("return", 0 === mt(t, n).length)
                );
              case 13:
                return (
                  (e.prev = 13), (e.t0 = e.catch(5)), e.abrupt("return", !1)
                );
              case 16:
              case "end":
                return e.stop();
            }
        },
        e,
        null,
        [[5, 13]]
      );
    })
  )).apply(this, arguments);
}
function bt(e, r, t, n) {
  return ht.apply(this, arguments);
}
function ht() {
  return (ht = t(
    r().mark(function e(t, a, i, o) {
      var u, c, l, s, d, f, m;
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (((u = Date.now()), (c = et(i)).length)) {
                e.next = 4;
                break;
              }
              return e.abrupt("return", !1);
            case 4:
              if (
                ((l = o && "object" === n(o) ? o : {}),
                "function" == typeof y ||
                  (a && "function" == typeof a.preloadImageSet))
              ) {
                e.next = 7;
                break;
              }
              return e.abrupt("return", !1);
            case 7:
              if (
                ((s =
                  ("function" == typeof y ? 1 : 0) +
                  (a && "function" == typeof a.preloadImageSet ? 1 : 0)),
                (d = _r(t, {
                  priority: !0 === l.foreground || !0 === l.force ? "P1" : "P2",
                  type: "image-download",
                  scope: "blindbox",
                  dedupeKey: "blindbox-playback-images:".concat(c.join("|")),
                  requiresQuiet: !(!0 === l.foreground || !0 === l.force),
                  allowDuringMotion: !0 === l.foreground || !0 === l.force,
                  timeoutMs: Math.max(2500, Number(l.timeoutMs) || 12e3),
                  run: function (e) {
                    var r = [];
                    return (
                      "function" == typeof y &&
                        r.push(
                          y(c, null, {
                            persist: !0,
                            concurrency:
                              !0 === l.foreground || !0 === l.force ? 3 : 2,
                            cancelToken: e && e.token,
                            shouldStop:
                              e && "function" == typeof e.isCancelled
                                ? function () {
                                    return e.isCancelled();
                                  }
                                : null,
                          }).catch(function () {})
                        ),
                      a &&
                        "function" == typeof a.preloadImageSet &&
                        r.push(
                          a
                            .preloadImageSet(c, {
                              concurrency:
                                !0 === l.foreground || !0 === l.force ? 3 : 2,
                              cancelToken: e && e.token,
                              shouldStop:
                                e && "function" == typeof e.isCancelled
                                  ? function () {
                                      return e.isCancelled();
                                    }
                                  : null,
                            })
                            .catch(function () {})
                        ),
                      Promise.all(r).then(function () {
                        return !0;
                      })
                    );
                  },
                })),
                (f = Number(o && o.budgetMs)),
                !(Number.isFinite(f) && f > 0))
              ) {
                e.next = 16;
                break;
              }
              return (
                (e.next = 13),
                Promise.race([
                  d,
                  or(f).then(function () {
                    return !1;
                  }),
                ])
              );
            case 13:
              return (
                (m = e.sent),
                "function" == typeof t.recordPerfEvent &&
                  t.recordPerfEvent("blindbox_playback_image_preload", u, {
                    urlCount: c.length,
                    taskCount: s,
                    budgetMs: f,
                    result: !0 === m,
                  }),
                e.abrupt("return", !0 === m)
              );
            case 16:
              return e.abrupt(
                "return",
                d.then(function (e) {
                  return (
                    "function" == typeof t.recordPerfEvent &&
                      t.recordPerfEvent("blindbox_playback_image_preload", u, {
                        urlCount: c.length,
                        taskCount: s,
                        result: !0 === e,
                      }),
                    e
                  );
                })
              );
            case 17:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function _t(e, r, t, n) {
  return vt.apply(this, arguments);
}
function vt() {
  return (vt = t(
    r().mark(function e(t, a, i, o) {
      var u, c, l;
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (t && a) {
                e.next = 2;
                break;
              }
              return e.abrupt("return", !0);
            case 2:
              if (
                (u = Array.isArray(i)
                  ? i.filter(function (e) {
                      return e && e.beadId;
                    })
                  : []).length
              ) {
                e.next = 5;
                break;
              }
              return e.abrupt("return", !0);
            case 5:
              if (!0 !== (c = o && "object" === n(o) ? o : {}).force) {
                e.next = 12;
                break;
              }
              if ("function" != typeof a.prewarmPlaybackPlanRenderAssets) {
                e.next = 9;
                break;
              }
              return e.abrupt(
                "return",
                a
                  .prewarmPlaybackPlanRenderAssets(u, {
                    scope: "blindbox-ready-playback-plan",
                    batchSize: Math.max(1, Number(c.batchSize) || 1),
                    intervalMs: Math.max(24, Number(c.intervalMs) || 36),
                    shadowIntervalMs: Math.max(
                      32,
                      Number(c.shadowIntervalMs) || 48
                    ),
                    force: !0,
                    mode: "realtime",
                  })
                  .then(function (e) {
                    return !1 !== e;
                  })
                  .catch(function () {
                    return !1;
                  })
              );
            case 9:
              if ("function" == typeof a.prewarmPatternRenderAssets) {
                e.next = 11;
                break;
              }
              return e.abrupt("return", !0);
            case 11:
              return e.abrupt(
                "return",
                a
                  .prewarmPatternRenderAssets(
                    u.map(function (e) {
                      return e.beadId;
                    }),
                    {
                      maxBuilds: Math.max(u.length, Number(c.maxBuilds) || 48),
                      batchSize: Math.max(1, Number(c.batchSize) || 1),
                      frameBudgetMs: Math.max(4, Number(c.frameBudgetMs) || 6),
                      intervalMs: Math.max(24, Number(c.intervalMs) || 36),
                      cancelWhenPaused: !1,
                      force: !0,
                      mode: "realtime",
                    }
                  )
                  .then(function (e) {
                    return !1 !== e;
                  })
                  .catch(function () {
                    return !1;
                  })
              );
            case 12:
              return (
                (l = Vr(u)),
                e.abrupt(
                  "return",
                  _r(t, {
                    priority: !0 === c.force ? "P1" : "P2",
                    type: "render-template",
                    scope: "blindbox",
                    dedupeKey: "blindbox-playback-render:".concat(l),
                    requiresQuiet: !0 !== c.force,
                    timeoutMs: Math.max(3e3, Number(c.timeoutMs) || 12e3),
                    run: function (e) {
                      var r = (e && e.token) || c.cancelToken;
                      return (
                        (!r || !r.cancelled) &&
                        ("function" == typeof a.prewarmPlaybackPlanRenderAssets
                          ? a
                              .prewarmPlaybackPlanRenderAssets(u, {
                                scope: "blindbox-ready-playback-plan",
                                batchSize: Math.max(
                                  1,
                                  Number(c.batchSize) || 1
                                ),
                                intervalMs: Math.max(
                                  24,
                                  Number(c.intervalMs) || 36
                                ),
                                shadowIntervalMs: Math.max(
                                  32,
                                  Number(c.shadowIntervalMs) || 48
                                ),
                                force: !0,
                                mode: "realtime",
                                cancelToken: r,
                              })
                              .then(function (e) {
                                return !1 !== e;
                              })
                              .catch(function () {
                                return !1;
                              })
                          : "function" != typeof a.prewarmPatternRenderAssets ||
                            a
                              .prewarmPatternRenderAssets(
                                u.map(function (e) {
                                  return e.beadId;
                                }),
                                {
                                  maxBuilds: Math.max(
                                    u.length,
                                    Number(c.maxBuilds) || 48
                                  ),
                                  batchSize: Math.max(
                                    1,
                                    Number(c.batchSize) || 1
                                  ),
                                  frameBudgetMs: Math.max(
                                    4,
                                    Number(c.frameBudgetMs) || 6
                                  ),
                                  intervalMs: Math.max(
                                    24,
                                    Number(c.intervalMs) || 36
                                  ),
                                  cancelWhenPaused: !1,
                                  force: !0,
                                  mode: "realtime",
                                  cancelToken: r,
                                }
                              )
                              .then(function (e) {
                                return !1 !== e;
                              })
                              .catch(function () {
                                return !1;
                              }))
                      );
                    },
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
function Pt(e, r, t) {
  var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (!(e && r && Array.isArray(t) && t.length)) return Promise.resolve(!1);
  var i = Vr(t);
  if (!i) return Promise.resolve(!1);
  var o = a && "object" === n(a) ? a : {};
  if (
    e._blindBoxPlanStrungWarmupTask &&
    e._blindBoxPlanStrungWarmupKey === i &&
    !0 !== o.forceRestart
  )
    return e._blindBoxPlanStrungWarmupTask;
  e._blindBoxPlanStrungWarmupKey = i;
  var u = Date.now();
  Pr(
    e,
    "plan-warmup-start:".concat(String(o.reason || "").trim() || "unknown")
  );
  var c = _t(e, r, t, {
    batchSize: Math.max(1, Number(o.batchSize) || 1),
    intervalMs: Math.max(24, Number(o.intervalMs) || 48),
    shadowIntervalMs: Math.max(32, Number(o.shadowIntervalMs) || 64),
    frameBudgetMs: Math.max(4, Number(o.frameBudgetMs) || 5),
    maxBuilds: Math.max(t.length, Number(o.maxBuilds) || 48),
    force: !1 !== o.force,
  })
    .then(function (r) {
      return (
        "function" == typeof e.recordPerfEvent &&
          e.recordPerfEvent("blindbox_plan_strung_warmup", u, {
            reason: String(o.reason || "").trim() || "unknown",
            result: !0 === r,
            planCount: t.length,
          }),
        !0 === r
      );
    })
    .catch(function () {
      return !1;
    })
    .finally(function () {
      Pr(
        e,
        "plan-warmup-finish:".concat(String(o.reason || "").trim() || "unknown")
      ),
        e._blindBoxPlanStrungWarmupTask === c &&
          (e._blindBoxPlanStrungWarmupTask = null);
    });
  return (e._blindBoxPlanStrungWarmupTask = c), c;
}
function xt(e, r, t, n) {
  return St.apply(this, arguments);
}
function St() {
  return (St = t(
    r().mark(function e(t, n, a, i) {
      var o, u, c, l, s, d, f;
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (t && n && Array.isArray(a) && a.length) {
                e.next = 2;
                break;
              }
              return e.abrupt("return", !1);
            case 2:
              if (
                ((o = sr(i)),
                (u = Math.min(1200, o)),
                (c = rt(n, a)),
                (l = Pt(t, n, a, {
                  reason: "blindbox_preplay",
                  batchSize: 1,
                  intervalMs: 28,
                  shadowIntervalMs: 40,
                  frameBudgetMs: 5,
                  force: !0,
                  forceRestart: !0,
                })),
                !c)
              ) {
                e.next = 10;
                break;
              }
              return (
                l.catch(function () {
                  return !1;
                }),
                "function" == typeof t.recordPerfEvent &&
                  t.recordPerfEvent("blindbox_preplay_prepare", Date.now(), {
                    result: "images_already_ready",
                    playbackPlanCount: a.length,
                  }),
                e.abrupt("return", !0)
              );
            case 10:
              if (!(u <= 0)) {
                e.next = 12;
                break;
              }
              return e.abrupt("return", !1);
            case 12:
              return (
                (s = dr(l, Math.min(1200, u)).catch(function () {
                  return !1;
                })),
                (d = bt(t, n, a, { budgetMs: u, foreground: !0, force: !0 })),
                (e.next = 16),
                dr(
                  Promise.all([d, s]).then(function (e) {
                    return !0 === e[0];
                  }),
                  u
                ).catch(function () {
                  return !1;
                })
              );
            case 16:
              return (f = e.sent), e.abrupt("return", !0 === f);
            case 18:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function kt(e, r) {
  return Bt.apply(this, arguments);
}
function Bt() {
  return (Bt = t(
    r().mark(function e(t, a) {
      var i,
        o,
        u,
        c,
        l,
        s,
        d,
        f,
        m,
        p,
        g,
        y,
        b,
        h,
        _,
        v,
        P,
        x,
        S,
        k,
        B,
        T,
        M,
        w,
        R,
        D,
        N;
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (t && "object" === n(t) && "function" == typeof t.trayComp) {
                e.next = 2;
                break;
              }
              return e.abrupt("return", !1);
            case 2:
              if (!Sr(t, a)) {
                e.next = 4;
                break;
              }
              return e.abrupt("return", !1);
            case 4:
              if (((i = Date.now()), (o = t.trayComp()))) {
                e.next = 8;
                break;
              }
              return e.abrupt("return", !1);
            case 8:
              if (
                ((u = a && "object" === n(a) ? a : {}),
                (c = Math.max(1, Number(u.targetCount) || 3)),
                (l = tt(t)),
                (s = l.filter(ot).length),
                (d = Math.max(
                  0,
                  Number.isFinite(Number(u.renderWarmupLimit))
                    ? Number(u.renderWarmupLimit)
                    : Number.isFinite(Number(u.fullPresetLimit))
                    ? Number(u.fullPresetLimit)
                    : 1
                )),
                (f = Math.min(c, d)),
                !(l.length >= c && s >= f && !0 !== u.force))
              ) {
                e.next = 17;
                break;
              }
              return (
                "function" == typeof t.recordPerfEvent &&
                  t.recordPerfEvent("blindbox_ready_pool_prepare", i, {
                    reason: String(u.reason || "").trim() || "unknown",
                    skipped: !0,
                    readyBefore: l.length,
                    existingRenderReadyCount: s,
                    requiredRenderReadyCount: f,
                    targetCount: c,
                  }),
                e.abrupt("return", !0)
              );
            case 17:
              return (
                (m = Math.max(0, d - s)),
                (e.next = 20),
                Qe(t).catch(function () {
                  return !1;
                })
              );
            case 20:
              if (((p = e.sent), !Sr(t, u))) {
                e.next = 23;
                break;
              }
              return e.abrupt("return", !1);
            case 23:
              if (p) {
                e.next = 25;
                break;
              }
              return e.abrupt("return", !1);
            case 25:
              if (!(m > 0)) {
                e.next = 41;
                break;
              }
              (g = l.filter(function (e) {
                return (
                  e &&
                  Array.isArray(e.playbackPlan) &&
                  e.playbackPlan.length &&
                  !ot(e)
                );
              })),
                (y = 0);
            case 28:
              if (!(y < g.length && m > 0)) {
                e.next = 41;
                break;
              }
              if (!Sr(t, u)) {
                e.next = 31;
                break;
              }
              return e.abrupt("break", 41);
            case 31:
              return (
                (b = g[y]),
                (e.next = 34),
                _t(t, o, b.playbackPlan, {
                  maxBuilds: Math.max(b.playbackPlan.length, 48),
                  force: !0 === u.force,
                })
              );
            case 34:
              if (((h = e.sent), !Sr(t, u))) {
                e.next = 37;
                break;
              }
              return e.abrupt("break", 41);
            case 37:
              h && (ct(t, b), (m -= 1));
            case 38:
              (y += 1), (e.next = 28);
              break;
            case 41:
              if (
                ((_ = X()),
                (v = _.map(function (e) {
                  return e && e.preset;
                }).filter(Boolean)),
                (P = Q(v, t._blindBoxPresetPool, Y(), H(t))).length)
              ) {
                e.next = 52;
                break;
              }
              return (
                (e.next = 47),
                ne(t, { reason: "ready_pool_empty" }).catch(function () {
                  return !1;
                })
              );
            case 47:
              if (!Sr(t, u)) {
                e.next = 49;
                break;
              }
              return e.abrupt("return", !1);
            case 49:
              (P = Q(v, t._blindBoxPresetPool)), (e.next = 53);
              break;
            case 52:
              te(t, P) &&
                ne(t, { reason: "ready_pool_low_candidates", preferNew: !0 });
            case 53:
              if (P.length) {
                e.next = 55;
                break;
              }
              return e.abrupt("return", !1);
            case 55:
              (x = Object.create(null)),
                tt(t).forEach(function (e) {
                  e && e.key && (x[e.key] = !0);
                }),
                (S = Object.create(null)),
                (Array.isArray(t._blindBoxRecentPresetKeys)
                  ? t._blindBoxRecentPresetKeys
                  : []
                ).forEach(function (e) {
                  e && (S[e] = !0);
                }),
                (k = Math.max(c, 8)),
                (B = P.filter(function (e) {
                  var r = C(e);
                  return r && !x[r] && !S[r];
                })),
                (T = P.filter(function (e) {
                  var r = C(e);
                  return r && !x[r] && S[r];
                })),
                (M = G(t, B, T, k)),
                (w = r().mark(function e() {
                  var n, a, i, c, l, s, d, f, p;
                  return r().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!Sr(t, u)) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return", "break");
                        case 2:
                          if (((n = M[R]), (a = A(n && n.pattern)).length)) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt("return", "continue");
                        case 6:
                          if (
                            ((i = Zr(t, o, a)).length &&
                              i.length === a.length) ||
                            !0 === u.force
                          ) {
                            e.next = 16;
                            break;
                          }
                          return (
                            (e.next = 10),
                            gt(t, a).catch(function () {
                              return !1;
                            })
                          );
                        case 10:
                          if (((c = e.sent), !Sr(t, u))) {
                            e.next = 13;
                            break;
                          }
                          return e.abrupt("return", "break");
                        case 13:
                          if (c) {
                            e.next = 15;
                            break;
                          }
                          return e.abrupt("return", "continue");
                        case 15:
                          i = Zr(t, o, a);
                        case 16:
                          if (i.length && i.length === a.length) {
                            e.next = 18;
                            break;
                          }
                          return e.abrupt("return", "continue");
                        case 18:
                          return (
                            (e.next = 20),
                            bt(t, o, i, {
                              foreground: !0 === u.force,
                              force: !0 === u.force,
                              budgetMs: !0 === u.force ? 900 : 0,
                            }).catch(function () {
                              return !1;
                            })
                          );
                        case 20:
                          if (((l = e.sent), !Sr(t, u))) {
                            e.next = 23;
                            break;
                          }
                          return e.abrupt("return", "break");
                        case 23:
                          if (!l && !0 !== u.force) {
                            e.next = 35;
                            break;
                          }
                          if (
                            ((s = C(n)),
                            (d = ut(t, n, i, {
                              imagesReady: !0 === l,
                              renderReady: !1,
                              currentStrungPriority: !1,
                            })),
                            (f = !1),
                            !(m > 0))
                          ) {
                            e.next = 31;
                            break;
                          }
                          return (
                            (e.next = 30),
                            _t(t, o, i, {
                              maxBuilds: Math.max(i.length, 48),
                              force: !0 === u.force,
                            })
                          );
                        case 30:
                          f = e.sent;
                        case 31:
                          if (!Sr(t, u)) {
                            e.next = 33;
                            break;
                          }
                          return e.abrupt("return", "break");
                        case 33:
                          f
                            ? ((p = s
                                ? tt(t).find(function (e) {
                                    return e && e.key === s;
                                  })
                                : null) && ct(t, p),
                              (m -= 1))
                            : !d &&
                              l &&
                              ut(t, n, i, {
                                imagesReady: !0,
                                renderReady: !1,
                                currentStrungPriority: !1,
                              }),
                            L(t, n);
                        case 35:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })),
                (R = 0);
            case 66:
              if (!(R < M.length && tt(t).length < c)) {
                e.next = 76;
                break;
              }
              return e.delegateYield(w(), "t0", 68);
            case 68:
              if ("break" !== (D = e.t0)) {
                e.next = 71;
                break;
              }
              return e.abrupt("break", 76);
            case 71:
              if ("continue" !== D) {
                e.next = 73;
                break;
              }
              return e.abrupt("continue", 73);
            case 73:
              (R += 1), (e.next = 66);
              break;
            case 76:
              return (
                (N = tt(t)),
                "function" == typeof t.recordPerfEvent &&
                  t.recordPerfEvent("blindbox_ready_pool_prepare", i, {
                    reason: String(u.reason || "").trim() || "unknown",
                    targetCount: c,
                    readyBefore: l.length,
                    readyAfter: N.length,
                    renderWarmupLimit: d,
                    existingRenderReadyCount: s,
                    candidates: M.length,
                    poolSize: P.length,
                  }),
                e.abrupt("return", N.length >= c)
              );
            case 79:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function Tt(e, r) {
  if (!e || "object" !== n(e)) return Promise.resolve(!1);
  var t = r && "object" === n(r) ? r : {},
    a =
      String(t.reason || "blindbox_preset_pool").trim() ||
      "blindbox_preset_pool",
    i = !0 === t.force || "blindbox_click" === a;
  if (e._readyBlindBoxPresetPoolTask && !i)
    return e._readyBlindBoxPresetPoolTask;
  it(e, { warming: !0 });
  var o = (
    i
      ? Promise.resolve().then(function () {
          return kt(e, t);
        })
      : _r(e, {
          priority: !0 === t.force || "blindbox_click" === a ? "P1" : "P2",
          type: "blindbox-ready",
          scope: "blindbox",
          dedupeKey: "blindbox-ready:".concat(a),
          requiresQuiet: !0 !== t.force && "blindbox_click" !== a,
          timeoutMs: Math.max(3e3, Number(t.timeoutMs) || 12e3),
          run: function (r) {
            return kt(e, Object.assign({}, t, { cancelToken: r && r.token }));
          },
        })
  )
    .catch(function () {
      return !1;
    })
    .finally(function () {
      e._readyBlindBoxPresetPoolTask === o &&
        (e._readyBlindBoxPresetPoolTask = null),
        it(e);
    });
  return (e._readyBlindBoxPresetPoolTask = o), e._readyBlindBoxPresetPoolTask;
}
function Mt(e, r) {
  return wt.apply(this, arguments);
}
function wt() {
  return (wt = t(
    r().mark(function e(t, n) {
      var a, i, o, u, c, l, s, d;
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (!(a = lt(t))) {
                e.next = 3;
                break;
              }
              return e.abrupt("return", a);
            case 3:
              (i = Tt(t, {
                reason: "blindbox_click",
                targetCount: 3,
                renderWarmupLimit: 0,
                force: !0,
              })),
                (o = !1),
                i
                  .then(function () {
                    o = !0;
                  })
                  .catch(function () {
                    o = !0;
                  }),
                (u = Date.now() + Math.max(0, Number(n) || 0));
            case 7:
              if (!(Date.now() < u)) {
                e.next = 18;
                break;
              }
              return (
                (c = u - Date.now()),
                (e.next = 11),
                or(Math.min(80, c)).catch(function () {})
              );
            case 11:
              if (!(a = lt(t))) {
                e.next = 14;
                break;
              }
              return e.abrupt("return", a);
            case 14:
              if (!o) {
                e.next = 16;
                break;
              }
              return e.abrupt("break", 18);
            case 16:
              e.next = 7;
              break;
            case 18:
              if (!(a = lt(t))) {
                e.next = 21;
                break;
              }
              return e.abrupt("return", a);
            case 21:
              if (!(l = st(t))) {
                e.next = 25;
                break;
              }
              return jr(t, 700), e.abrupt("return", l);
            case 25:
              if (
                ((s =
                  t && "function" == typeof t.trayComp ? t.trayComp() : null),
                !(d = $r(t, s)))
              ) {
                e.next = 30;
                break;
              }
              return (
                "function" == typeof t.recordPerfEvent &&
                  t.recordPerfEvent(
                    "blindbox_ready_pool_fallback",
                    Date.now(),
                    {
                      patternCount: Array.isArray(d.pattern)
                        ? d.pattern.length
                        : 0,
                      playbackPlanCount: Array.isArray(d.playbackPlan)
                        ? d.playbackPlan.length
                        : 0,
                    }
                  ),
                e.abrupt("return", d)
              );
            case 30:
              return e.abrupt("return", null);
            case 31:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function At(e, r, t) {
  var a = Q(r, H(e)),
    i = Math.max(1, Number(t) || 10),
    o = a.filter(function (r) {
      return !(function (e, r) {
        var t =
            e &&
            e._blindBoxPrewarmedPresetKeys &&
            "object" === n(e._blindBoxPrewarmedPresetKeys)
              ? e._blindBoxPrewarmedPresetKeys
              : null,
          a = C(r);
        return !!(t && a && t[a]);
      })(e, r);
    });
  return (o.length ? o : a).slice(0, i);
}
function Rt(e, r) {
  var t = [],
    n = function (e) {
      var r = String(e || "").trim();
      !r || t.indexOf(r) >= 0 || t.push(r);
    };
  return (
    (Array.isArray(r) ? r : []).forEach(function (r) {
      ft(e, r && r.pattern).forEach(n);
    }),
    t.slice(0, 120)
  );
}
function Dt(e, r) {
  for (
    var t = Array.isArray(e) ? e.filter(Boolean) : [],
      n = Math.max(1, Number(r) || 18),
      a = [],
      i = 0;
    i < t.length;
    i += n
  )
    a.push(t.slice(i, i + n));
  return a;
}
function Ct(e, r) {
  var t = Array.isArray(e) ? e : [],
    n = g(t[0] || ""),
    a = g(t[t.length - 1] || "");
  return "blindbox-assets:"
    .concat(r, ":")
    .concat(t.length, ":")
    .concat(n, ":")
    .concat(a);
}
function Nt() {
  return (Nt = t(
    r().mark(function e(t, a, i) {
      var o,
        u,
        c,
        l,
        s,
        d,
        f = arguments;
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (
                ((o = f.length > 3 && void 0 !== f[3] ? f[3] : {}),
                (u = o && "object" === n(o) ? o : {}),
                (c = Dt(i, u.assetChunkSize)).length)
              ) {
                e.next = 5;
                break;
              }
              return e.abrupt("return", !1);
            case 5:
              (l = r().mark(function e() {
                var n;
                return r().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!Mr(t)) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return", { v: !1 });
                      case 2:
                        return (
                          (n = c[s]),
                          (e.next = 5),
                          _r(t, {
                            priority: "P2",
                            type: "image-download",
                            scope: "blindbox",
                            dedupeKey: Ct(n, s),
                            requiresQuiet: !0,
                            timeoutMs: 0,
                            run: function (e) {
                              return (
                                (!e ||
                                  "function" != typeof e.isCancelled ||
                                  !e.isCancelled()) &&
                                Promise.all([
                                  y(n, null, {
                                    persist: !0,
                                    concurrency: 2,
                                    cancelToken: e && e.token,
                                    shouldStop:
                                      e && "function" == typeof e.isCancelled
                                        ? function () {
                                            return e.isCancelled();
                                          }
                                        : null,
                                  }).catch(function () {}),
                                  a && "function" == typeof a.preloadImageSet
                                    ? a
                                        .preloadImageSet(n, {
                                          concurrency: 2,
                                          cancelToken: e && e.token,
                                          shouldStop:
                                            e &&
                                            "function" == typeof e.isCancelled
                                              ? function () {
                                                  return e.isCancelled();
                                                }
                                              : null,
                                        })
                                        .catch(function () {})
                                    : Promise.resolve(),
                                ]).then(function () {
                                  return (
                                    !e ||
                                    "function" != typeof e.isCancelled ||
                                    !e.isCancelled()
                                  );
                                })
                              );
                            },
                          })
                        );
                      case 5:
                        if (!0 === e.sent) {
                          e.next = 8;
                          break;
                        }
                        return e.abrupt("return", { v: !1 });
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })),
                (s = 0);
            case 7:
              if (!(s < c.length)) {
                e.next = 15;
                break;
              }
              return e.delegateYield(l(), "t0", 9);
            case 9:
              if (((d = e.t0), "object" !== n(d))) {
                e.next = 12;
                break;
              }
              return e.abrupt("return", d.v);
            case 12:
              (s += 1), (e.next = 7);
              break;
            case 15:
              return e.abrupt("return", !0);
            case 16:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function It(e, r, t) {
  if (e && "object" === n(e) && !e._blindBoxPresetAssetWarmupTask && !Mr(e)) {
    var a = t && "object" === n(t) ? t : {},
      i = At(e, r, a.limit),
      o = Rt(e, i);
    if (i.length && o.length && "function" == typeof y) {
      var u = "function" == typeof e.trayComp ? e.trayComp() : null,
        c = Math.max(
          0,
          Number.isFinite(Number(a.fullPresetLimit))
            ? Number(a.fullPresetLimit)
            : 1
        ),
        l =
          u && "function" == typeof u.prewarmPatternRenderAssets
            ? i.slice(0, c)
            : [],
        s = Promise.resolve();
      l.forEach(function (r) {
        s = s.then(function () {
          return _r(e, {
            priority: "P2",
            type: "render-template",
            scope: "blindbox",
            dedupeKey: "blindbox-render:".concat(
              C(r) || A(r && r.pattern).join("|")
            ),
            requiresQuiet: !0,
            timeoutMs: 1e4,
            run: function () {
              return u
                .prewarmPatternRenderAssets(r && r.pattern, {
                  maxBuilds: 48,
                  batchSize: 1,
                  frameBudgetMs: 5,
                  intervalMs: 36,
                  cancelWhenPaused: !0,
                  mode: "realtime",
                })
                .catch(function () {});
            },
          });
        });
      });
      var d = (function (e, r, t) {
        return Nt.apply(this, arguments);
      })(e, u, o, a);
      it(e, { warming: !0 }),
        (e._blindBoxPresetAssetWarmupTask = d
          .then(function (r) {
            return !0 !== r || Mr(e)
              ? null
              : (i.forEach(function (r) {
                  return L(e, r);
                }),
                (e._blindBoxPrewarmedPresetCount = Object.keys(
                  W(e) || {}
                ).length),
                s);
          })
          .catch(function () {})
          .finally(function () {
            (e._blindBoxPresetAssetWarmupTask = null), it(e);
          }));
    }
  }
}
module.exports = {
  openDiyConfirm: function (e) {
    var r = this,
      t = e && "object" === n(e) ? e : {};
    return (
      this._diyConfirmResolver &&
        (this._diyConfirmResolver("cancel"), (this._diyConfirmResolver = null)),
      new Promise(function (e) {
        (r._diyConfirmResolver = e),
          r.setData({
            diyConfirmModal: {
              visible: !0,
              tone: String(t.tone || "default").trim() || "default",
              iconText: String(t.iconText || "").trim(),
              title: String(t.title || "").trim(),
              content: String(t.content || "").trim(),
              confirmText: String(t.confirmText || "确认").trim(),
              cancelText: String(t.cancelText || "取消").trim(),
              secondaryText: String(t.secondaryText || "").trim(),
            },
          });
      })
    );
  },
  resolveDiyConfirm: function (e) {
    var r = String(e || "cancel").trim() || "cancel",
      t = this._diyConfirmResolver;
    (this._diyConfirmResolver = null),
      this.setData({ diyConfirmModal: null }),
      "function" == typeof t && t(r);
  },
  handleDiyConfirmCancel: function () {
    this.resolveDiyConfirm("cancel");
  },
  handleDiyConfirmPrimary: function () {
    this.resolveDiyConfirm("confirm");
  },
  handleDiyConfirmSecondary: function () {
    this.resolveDiyConfirm("secondary");
  },
  prewarmBlindBoxPresetPool: function (e) {
    var r = this,
      t = e && "object" === n(e) ? e : {};
    if (!0 === this._pageHidden && !0 !== t.allowWhenHidden)
      return Promise.resolve(!1);
    if (Mr(this)) return Ar(this), it(this), Promise.resolve(!1);
    var a = "function" == typeof this.trayComp ? this.trayComp() : null;
    if (a && a.isStrung && !0 !== t.allowWhenStrung)
      return wr(this, t, 3600), it(this), Promise.resolve(!1);
    var i = (function (e) {
      if (!e || "object" !== n(e)) return 0;
      var r = "function" == typeof e.trayComp ? e.trayComp() : null,
        t = Math.max(
          Number(e._diyMotionLockUntil || 0),
          Number(e._manualBeadActionPriorityUntil || 0),
          Number(e._diyEntryMotionPriorityUntil || 0),
          Number((r && r._motionFrameBudgetStressedUntil) || 0)
        );
      return Math.max(0, t - Date.now());
    })(this);
    if (i > 0 && !0 !== t.ignoreMotionPriority)
      return wr(this, t, i + 480), it(this), Promise.resolve(!1);
    if (this._blindBoxPresetPending || this._blindBoxActionPending)
      return jr(this, 700), Promise.resolve(!1);
    var o = Math.max(1, Number(t.targetCount || t.readyTarget || 3) || 3),
      u = !1 !== t.assetWarmup && !0 !== this._standaloneDiyLoadingPending,
      c = Q(Y(), H(this));
    ee(this, c),
      u && It(this, this._blindBoxPresetPool || c, t),
      Tt(this, {
        reason: t.reason || "blindbox_preset_pool",
        targetCount: o,
        renderWarmupLimit: Number.isFinite(Number(t.renderWarmupLimit))
          ? Number(t.renderWarmupLimit)
          : 1,
        fullPresetLimit: Number.isFinite(Number(t.fullPresetLimit))
          ? Number(t.fullPresetLimit)
          : void 0,
      });
    var l = te(this, this._blindBoxPresetPool || c);
    return this._blindBoxPresetPoolReady && !l && !0 !== t.force
      ? Promise.resolve(!0)
      : this._blindBoxPresetPoolPromise
      ? this._blindBoxPresetPoolPromise.then(function () {
          return !0;
        })
      : (it(this, { warming: !0 }),
        (this._blindBoxPresetPoolPromise = ne(this, {
          reason: t.reason || "blindbox_preset_pool_remote",
          preferNew: l,
        })
          .then(function () {
            return (
              u && It(r, r._blindBoxPresetPool || c, t),
              Tt(r, {
                reason: t.reason || "blindbox_preset_pool_remote",
                targetCount: o,
                renderWarmupLimit: Number.isFinite(Number(t.renderWarmupLimit))
                  ? Number(t.renderWarmupLimit)
                  : 1,
                fullPresetLimit: Number.isFinite(Number(t.fullPresetLimit))
                  ? Number(t.fullPresetLimit)
                  : void 0,
                force: !0,
              }),
              !0
            );
          })
          .catch(function () {
            return !1;
          })
          .finally(function () {
            it(r);
          })),
        this._blindBoxPresetPoolPromise);
  },
  prepareReadyBlindBoxPresetPool: function (e) {
    return Tt(this, e || {});
  },
  rehydrateTrayBeadImages: function (e) {
    return dt(this, e || "manual");
  },
  clearManualPlaceholderDeadlineTimers: function (e) {
    return Ae(this, e);
  },
  handleBeadTap: function (e) {
    var a = this;
    return t(
      r().mark(function t() {
        var u, c, l, s, d, f, m, p, g, y, b, h, _, v, P, x, S, B, T, M, w, A, R;
        return r().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                if (
                  ((u =
                    (e && e.currentTarget && e.currentTarget.dataset) || {}),
                  (c = String(u.action || "").trim()),
                  (l = u.id),
                  (s = !!l && "switch_size" !== c),
                  (d = a.trayComp()),
                  !s || !d)
                ) {
                  r.next = 15;
                  break;
                }
                if (ur(d)) {
                  r.next = 14;
                  break;
                }
                return (r.next = 9), cr(a, d);
              case 9:
                if (((f = r.sent), (d = a.trayComp()), !0 === f && ur(d))) {
                  r.next = 14;
                  break;
                }
                return (
                  "function" == typeof a.showToast &&
                    a.showToast("圆盘正在准备中，请稍后"),
                  r.abrupt("return")
                );
              case 14:
                Rr(a, d);
              case 15:
                if (
                  ("function" == typeof o && o(),
                  "function" != typeof a.prewarmDiyRuntimeResources ||
                    s ||
                    a.prewarmDiyRuntimeResources({
                      reason: "bead_tap",
                      retry: !1,
                      limit: 12,
                    }),
                  "switch_size" !== c)
                ) {
                  r.next = 39;
                  break;
                }
                if (
                  ((m = String(u.groupName || "").trim()),
                  (p = Number(u.direction)),
                  m && Number.isFinite(p) && 0 !== p)
                ) {
                  r.next = 22;
                  break;
                }
                return r.abrupt("return");
              case 22:
                if (
                  ((g = Array.isArray(a.data && a.data.displayBeads)
                    ? a.data.displayBeads
                    : []),
                  (y = g.find(function (e) {
                    return String((e && e.name) || "") === m;
                  })) &&
                    Array.isArray(y.items) &&
                    y.items.length)
                ) {
                  r.next = 26;
                  break;
                }
                return r.abrupt("return");
              case 26:
                if (
                  ((b = Number(y.activeIndex)),
                  (h =
                    Number.isInteger(b) && b >= 0 && b < y.items.length
                      ? b
                      : 0),
                  !((_ = h + (p > 0 ? 1 : -1)) < 0 || _ >= y.items.length))
                ) {
                  r.next = 31;
                  break;
                }
                return r.abrupt("return");
              case 31:
                if (
                  ((a._activeBeadSizes && "object" === n(a._activeBeadSizes)) ||
                    (a._activeBeadSizes = Object.create(null)),
                  (v = y.items[_]) && v.id)
                ) {
                  r.next = 35;
                  break;
                }
                return r.abrupt("return");
              case 35:
                return (
                  (a._activeBeadSizes[m] = v.id),
                  a.recomputeDisplayBeads({}),
                  i("slide"),
                  r.abrupt("return")
                );
              case 39:
                if ((Xe(a), d && l))
                  try {
                    (a._lastTraySource = "manual"),
                      Wr(a, "manual_material_tap"),
                      (P = ce(a, l)),
                      (x = k(a, P, l)),
                      (S = xe(a, d, x, l)),
                      (B =
                        void 0 !== S.displayVariantIdx
                          ? S.displayVariantIdx
                          : S.variantIdx),
                      (T = S.displayImgUrl || S.imgUrl),
                      (M = Object.create(null)),
                      (Array.isArray(d.beadsRef) ? d.beadsRef : []).forEach(
                        function (e) {
                          e && e.uid && (M[e.uid] = !0);
                        }
                      ),
                      (w = d.addBead(l, {
                        material: x || null,
                        variantIdx: B,
                        imgUrl: T,
                        skipPrewarm: !0,
                        perfSource: "manual_material_tap",
                      })),
                      (A = w ? Se(d, M, l, T) : null) &&
                        ((A.variantIdx = B),
                        (A.__manualVariantMaterialKey = S.materialKey),
                        (A.__manualVariantTargetVariantIdx =
                          S.targetVariantIdx),
                        (A.__manualVariantTargetImgUrl = S.targetImgUrl || T),
                        (A.__manualVariantDisplayVariantIdx = B),
                        (A.__manualVariantDisplayImgUrl = T),
                        (A.__manualVariantPromotionState = S.shouldPromote
                          ? "pending"
                          : "ready"),
                        (A.__manualVariantCandidates = S.candidates),
                        Array.isArray(S.candidates) &&
                          S.candidates.length &&
                          (A.__imageCandidates = S.candidates
                            .map(function (e) {
                              return e.imgUrl;
                            })
                            .filter(Boolean)),
                        (R = Be(a)),
                        Ne(a, d, A, S, 0, l),
                        De(a, d, A, S, R, l),
                        Ce(a, d, S, R)),
                      w &&
                        Oe(x, l) &&
                        Promise.resolve()
                          .then(function () {
                            return We(a, d, l, T);
                          })
                          .then(function () {
                            return Ke(a, d, x, l, B, T);
                          })
                          .then(function (e) {
                            !0 !== e && ze(a, d);
                          })
                          .catch(function () {
                            ze(a, d);
                          });
                  } finally {
                    Dr(a, d);
                  }
              case 41:
              case "end":
                return r.stop();
            }
        }, t);
      })
    )();
  },
  handleBlindBox: function () {
    var e = this;
    return t(
      r().mark(function t() {
        var n, a, i, o, u, c, l, s;
        return r().wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  if ((n = e.trayComp())) {
                    r.next = 3;
                    break;
                  }
                  return r.abrupt("return");
                case 3:
                  if (ur(n)) {
                    r.next = 11;
                    break;
                  }
                  return (r.next = 6), cr(e, n);
                case 6:
                  if (((a = r.sent), (n = e.trayComp()), !0 === a && ur(n))) {
                    r.next = 11;
                    break;
                  }
                  return (
                    "function" == typeof e.showToast &&
                      e.showToast("圆盘正在准备中，请稍后"),
                    r.abrupt("return")
                  );
                case 11:
                  if (
                    !(
                      e._blindBoxActionPending ||
                      e._blindBoxPresetPending ||
                      (e.data && e.data.blindBoxPreparing)
                    )
                  ) {
                    r.next = 14;
                    break;
                  }
                  return pr(e), r.abrupt("return");
                case 14:
                  if (
                    ((i = Je(e)),
                    (o = Date.now()),
                    (u = mr(e)),
                    Xe(e),
                    br(e, n, 4520, "blindbox-action"),
                    yr(n, !0, "blindbox-action"),
                    (r.prev = 20),
                    !((c = Math.min(2400, sr(o))) > 0))
                  ) {
                    r.next = 41;
                    break;
                  }
                  return (
                    (r.next = 25),
                    dr(
                      Mt(e, c).catch(function () {
                        return null;
                      }),
                      c + 80
                    )
                  );
                case 25:
                  if (((l = r.sent), Ze(e, i))) {
                    r.next = 28;
                    break;
                  }
                  return r.abrupt("return");
                case 28:
                  if (
                    !(
                      l !== M &&
                      l &&
                      Array.isArray(l.playbackPlan) &&
                      l.playbackPlan.length
                    )
                  ) {
                    r.next = 41;
                    break;
                  }
                  return (r.next = 31), xt(e, n, l.playbackPlan, o);
                case 31:
                  if (((s = r.sent), Ze(e, i))) {
                    r.next = 34;
                    break;
                  }
                  return r.abrupt("return");
                case 34:
                  if (
                    (!0 !== s &&
                      (Tt(e, {
                        reason: "blindbox_click_preplay_incomplete",
                        targetCount: 3,
                        force: !0,
                      }),
                      "function" == typeof e.recordPerfEvent &&
                        e.recordPerfEvent("blindbox_click_action", o, {
                          result: "preplay_incomplete",
                          readyWaitBudgetMs: c,
                          readyPoolSize: tt(e).length,
                          playbackPlanCount: l.playbackPlan.length,
                          continuePlayback: !0,
                        })),
                    "function" == typeof n.clearAll && n.clearAll(),
                    (e.copyrightContext = null),
                    "function" == typeof e.setData &&
                      e.setData({ currentSchemeName: "" }),
                    !Yr(e, n, l.preset, l.playbackPlan))
                  ) {
                    r.next = 41;
                    break;
                  }
                  return (
                    "function" == typeof e.recordPerfEvent &&
                      e.recordPerfEvent("blindbox_click_action", o, {
                        result:
                          !0 === s
                            ? "playback_started"
                            : "playback_started_preplay_incomplete",
                        readyWaitBudgetMs: c,
                        readyPoolSize: tt(e).length,
                        playbackPlanCount: l.playbackPlan.length,
                      }),
                    r.abrupt("return")
                  );
                case 41:
                  return (
                    Tt(e, {
                      reason: "blindbox_click_ready_pool_miss",
                      targetCount: 3,
                      force: !0,
                    }),
                    gr(e),
                    "function" == typeof e.recordPerfEvent &&
                      e.recordPerfEvent("blindbox_click_action", o, {
                        result: "ready_pool_miss",
                        readyWaitBudgetMs: c,
                        readyPoolSize: tt(e).length,
                      }),
                    r.abrupt("return")
                  );
                case 45:
                  return (
                    (r.prev = 45),
                    yr(n, !1, "blindbox-action"),
                    hr(0, n, "blindbox-action"),
                    (t = e),
                    (d = u) &&
                      (t && "function" == typeof t.clearManagedTimeout
                        ? t.clearManagedTimeout(d)
                        : clearTimeout(d)),
                    er(e, !1),
                    $e(e, i),
                    r.finish(45)
                  );
                case 52:
                case "end":
                  return r.stop();
              }
            var t, d;
          },
          t,
          null,
          [[20, , 45, 52]]
        );
      })
    )();
  },
  handleUndo: function () {
    tr(this, "undo"),
      Xe(this),
      (this._lastTraySource = "manual"),
      Wr(this, "undo");
    var e = this.trayComp();
    e &&
      (e.undoLast(),
      (function (e, r) {
        if (e && "object" === n(e)) {
          var t = e._manualPlaceholderDeadlineTimers;
          if (t && "object" === n(t)) {
            var a = Array.isArray(r && r.beadsRef) ? r.beadsRef : [],
              i = Object.create(null);
            a.forEach(function (e) {
              e && e.uid && (i[e.uid] = !0);
            }),
              Object.keys(t).forEach(function (r) {
                i[r] || Me(e, r);
              });
          }
        }
      })(this, e));
  },
  handleToggleBg: function () {
    var e = (this.data.bgIndex + 1) % this.data.trayBgs.length;
    this.setData({ bgIndex: e, currentTrayBg: this.data.trayBgs[e] }),
      i("pop"),
      this.showToast(
        "Background switched to: ".concat(this.data.trayBgs[e].name)
      );
  },
  handleClear: function () {
    var e = this;
    return t(
      r().mark(function t() {
        var n;
        return r().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return (r.next = 2), Ge(e);
              case 2:
                if (r.sent) {
                  r.next = 5;
                  break;
                }
                return r.abrupt("return");
              case 5:
                tr(e, "clear"),
                  Xe(e),
                  (e._lastTraySource = "manual"),
                  Wr(e, "clear"),
                  (n = e.trayComp()) && (Ae(e), n.clearAll()),
                  (e.copyrightContext = null),
                  e.setData({ currentSchemeName: "" });
              case 13:
              case "end":
                return r.stop();
            }
        }, t);
      })
    )();
  },
  handleToggleStrung: function () {
    var e = this;
    return t(
      r().mark(function t() {
        var n, a, i, o, u, c, l;
        return r().wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  if (!0 !== e._strungClickPreparing) {
                    r.next = 4;
                    break;
                  }
                  return (
                    nr(e, "strung_click_preparing"),
                    ar(e, "strung_click_preparing", 160),
                    r.abrupt("return")
                  );
                case 4:
                  if (!e._blindBoxPresetPending) {
                    r.next = 7;
                    break;
                  }
                  return nr(e, "blindbox_playback_pending"), r.abrupt("return");
                case 7:
                  if (
                    !(
                      e._blindBoxActionPending ||
                      (e.data && e.data.blindBoxPreparing)
                    )
                  ) {
                    r.next = 10;
                    break;
                  }
                  return (
                    "function" == typeof e.showToast &&
                      e.showToast("灵感方案正在入盘，请稍后"),
                    r.abrupt("return")
                  );
                case 10:
                  if ((n = e.trayComp())) {
                    r.next = 13;
                    break;
                  }
                  return r.abrupt("return");
                case 13:
                  if (ur(n)) {
                    r.next = 21;
                    break;
                  }
                  return (r.next = 16), cr(e, n);
                case 16:
                  if (((a = r.sent), (n = e.trayComp()), !0 === a && ur(n))) {
                    r.next = 21;
                    break;
                  }
                  return (
                    "function" == typeof e.showToast &&
                      e.showToast("圆盘正在准备中，请稍后"),
                    r.abrupt("return")
                  );
                case 21:
                  if (
                    ((i = !n.isStrung),
                    (o = !0),
                    (u = !1),
                    (c = !1),
                    (l = !1),
                    !(
                      i &&
                      e.data &&
                      e.data.strungPreparing &&
                      e._postBlindBoxStrungReadyGateTask
                    ))
                  ) {
                    r.next = 29;
                    break;
                  }
                  return (
                    nr(e, "blindbox_post_prepare_pending"), r.abrupt("return")
                  );
                case 29:
                  if (
                    (i &&
                      e.data &&
                      e.data.strungPreparing &&
                      (rr(e, !1),
                      "function" == typeof e.recordPerfEvent &&
                        e.recordPerfEvent(
                          "strung_click_prepare_gate_bypass",
                          Date.now(),
                          { lastTraySource: e._lastTraySource || "" }
                        )),
                    (r.prev = 30),
                    Xe(e),
                    i && (Cr(e, n), (u = !0)),
                    !i)
                  ) {
                    r.next = 37;
                    break;
                  }
                  return (r.next = 36), Gr(e, n);
                case 36:
                  o = r.sent;
                case 37:
                  return (
                    Ae(e, {
                      preservePromotionQueue: !0,
                      pausePromotionFlush: !0,
                    }),
                    Cr(e, n),
                    (u = !0),
                    (r.next = 42),
                    kr(e, 140)
                  );
                case 42:
                  n.toggleStrung({ skipPrepareOverlay: i && !0 !== o }),
                    (l = !0),
                    i &&
                      !0 !== o &&
                      ("function" == typeof e.setManagedTimeout
                        ? e.setManagedTimeout.bind(e)
                        : setTimeout)(function () {
                        Promise.resolve(
                          Kr(e, {
                            reason: "strung_click_post_timeout",
                            force: !0,
                            forceRestart: !0,
                            templateIntervalMs: 28,
                            templateBatchSize: 3,
                            shadowIntervalMs: 36,
                            shadowBatchSize: 2,
                            ignoreFpsGuard: !0,
                          })
                        )
                          .then(function (e) {
                            !0 === e &&
                              n &&
                              n.isStrung &&
                              "function" == typeof n.syncStrungDomOverlay &&
                              n.syncStrungDomOverlay({ force: !0 });
                          })
                          .catch(function () {});
                      }, 3920),
                    ("function" == typeof e.setManagedTimeout
                      ? e.setManagedTimeout.bind(e)
                      : setTimeout)(function () {
                      Nr(e, n);
                    }, 3920),
                    (c = !0),
                    (r.next = 54);
                  break;
                case 50:
                  (r.prev = 50),
                    (r.t0 = r.catch(30)),
                    "function" == typeof e.recordPerfEvent &&
                      e.recordPerfEvent("strung_toggle_error", Date.now(), {
                        message:
                          r.t0 && r.t0.message
                            ? r.t0.message
                            : String(r.t0 || ""),
                        isStringing: i,
                        toggled: l,
                      }),
                    l ||
                      "function" != typeof e.showToast ||
                      e.showToast("手串操作失败，请稍后再试");
                case 54:
                  return (r.prev = 54), u && !c && Nr(e, n), r.finish(54);
                case 57:
                case "end":
                  return r.stop();
              }
          },
          t,
          null,
          [[30, 50, 54, 57]]
        );
      })
    )();
  },
  handleTrayStateChange: function (e) {
    var r = this,
      t = u(e.detail);
    if (
      (this.setData({
        trayState: t,
        currentPattern: c(t.pattern),
        currentRenderPlan: Array.isArray(t.renderPlan) ? t.renderPlan : [],
      }),
      this._standaloneDiyLoadingPending &&
        this.data &&
        this.data.isStandaloneDiy)
    )
      if ("function" == typeof this.resolveStandaloneDiyLoadingGate) {
        var n = !0 === this._standaloneDiyWaitForPatternReady,
          a =
            Number(t.beadsCount || 0) > 0 &&
            Array.isArray(t.pattern) &&
            t.pattern.length > 0;
        this.resolveStandaloneDiyLoadingGate(n && a ? "pattern" : "tray");
      } else this._standaloneDiyLoadingPending = !1;
    this._blindBoxFullWarmupAfterTrayStarted ||
      "function" != typeof this.prewarmBlindBoxPresetPool ||
      ((this._blindBoxFullWarmupAfterTrayStarted = !0),
      ("function" == typeof this.deferNonCriticalTask
        ? this.deferNonCriticalTask.bind(this)
        : function (e, r) {
            return setTimeout(e, r);
          })(function () {
        r.prewarmBlindBoxPresetPool({
          reason: "tray_ready_blindbox",
          limit: 6,
          fullPresetLimit: 0,
          renderWarmupLimit: 0,
          targetCount: Math.min(2, 3),
          assetWarmup: !1,
        });
      }, 3600));
    var i = String(this.data.menuCategory || ""),
      o = !!String(this.data.searchQuery || "").trim(),
      l =
        "in_use" === i &&
        !o &&
        Number.isFinite(this._suspendInUseRecomputeUntil) &&
        Date.now() < this._suspendInUseRecomputeUntil;
    ("in_use" !== i && !o) ||
      l ||
      this.recomputeDisplayBeads({ trayPattern: t.pattern }),
      this.updateWristMonitor(t.pattern, this.data.userWrist);
  },
};
