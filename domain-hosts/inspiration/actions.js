var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../@babel/runtime/helpers/toConsumableArray"),
  i = require("../../@babel/runtime/helpers/typeof"),
  a =
    require("../../pages/index/modules/deps/workshop-deps").navigateWithFallback,
  s =
    require("../../pages/index/modules/methods/navigation-coordinator").setActiveTab,
  n = require("./state").buildInspirationVisiblePresetState,
  o = require("../../contracts/navigation/query-contract").appendQueryParams,
  u = require("../../domain/v2/preset-detail-domain").buildPresetDetailPayload,
  d =
    require("../../domain/v2/preset-author-domain").resolvePresetAuthorPresentation,
  l = require("../../facades/v2/preset-detail-cache"),
  c = l.writePresetDetailCache,
  p = l.writePresetDetailVisualLock,
  g = require("../../pages/index/modules/deps/lifecycle-deps"),
  f = g.fetchCreatorPublicFeed,
  b = g.logger,
  h = require("../shared/preset-preview-cache"),
  m = h.resolvePresetPreviewSnapshot,
  P = h.rememberPresetPreviewSnapshot,
  v = h.rememberPresetPreviewSnapshotBatch,
  y = h.resolvePresetDisplayPrice,
  A = h.resolvePresetPriceText,
  F = Object.freeze({ all: !0, designer: !0, customer: !0 });
function x(e) {
  return String(
    (e &&
      e.currentTarget &&
      e.currentTarget.dataset &&
      e.currentTarget.dataset.id) ||
      ""
  ).trim();
}
function S(e) {
  return (
    "1" ===
    String(
      e &&
        e.currentTarget &&
        e.currentTarget.dataset &&
        e.currentTarget.dataset.switchTab
        ? e.currentTarget.dataset.switchTab
        : ""
    ).trim()
  );
}
function M(e) {
  return String(
    e &&
      e.currentTarget &&
      e.currentTarget.dataset &&
      e.currentTarget.dataset.tab
      ? e.currentTarget.dataset.tab
      : ""
  ).trim();
}
function w(e) {
  var r = String(e || "")
    .trim()
    .toLowerCase();
  return (
    !r ||
    0 === r.indexOf("wxfile://") ||
    0 === r.indexOf("blob:") ||
    0 === r.indexOf("data:image") ||
    0 === r.indexOf("http://tmp/") ||
    /^[a-z]:\\/.test(r)
  );
}
function k(e) {
  var r = String(e || "")
    .trim()
    .toLowerCase();
  return "couple" === r || "qinglv" === r || "情侣" === r || "情侣款式" === r
    ? "qinglv"
    : r;
}
function C(e) {
  return k(e) || "all";
}
function T(e, r) {
  return (
    k(
      (e && e.data && "object" === i(e.data) ? e.data : {}).presetCategory ||
        r ||
        "designer"
    ) || "designer"
  );
}
function j(e) {
  if (!e || "object" !== i(e)) return 0;
  var r = Number(e._inspirationFirstPageRequestToken || 0) + 1;
  return (e._inspirationFirstPageRequestToken = r), r;
}
function R(e, r, t) {
  return (
    !e ||
    "object" !== i(e) ||
    (Number(e._inspirationFirstPageRequestToken || 0) === Number(r || 0) &&
      T(e, t) === (k(t) || "designer"))
  );
}
function N(e, r) {
  return (
    !e ||
    "object" !== i(e) ||
    Number(e._inspirationFirstPageRequestToken || 0) === Number(r || 0)
  );
}
function L(e, r) {
  return {
    inspirationFirstPageCategory: k(e) || "designer",
    inspirationFirstPageStatus: r,
  };
}
function _(e) {
  return !0 === F[C(e)];
}
function D(e, r, t) {
  var i = Number(r && r.total);
  return (
    !_(e) && Array.isArray(t) && 0 === t.length && Number.isFinite(i) && i <= 0
  );
}
function H(e) {
  if (
    e &&
    e._inspirationFirstPagePromises &&
    "object" === i(e._inspirationFirstPagePromises)
  )
    return e._inspirationFirstPagePromises;
  var r = Object.create(null);
  return e && "object" === i(e) && (e._inspirationFirstPagePromises = r), r;
}
function O(e, r) {
  return [C(e), Math.max(1, Math.floor(Number(r || 6)))].join("|");
}
function I(e) {
  if (
    e &&
    e._inspirationLastGoodByCategory &&
    "object" === i(e._inspirationLastGoodByCategory)
  )
    return e._inspirationLastGoodByCategory;
  var r = Object.create(null);
  return e && "object" === i(e) && (e._inspirationLastGoodByCategory = r), r;
}
function q(e, r, t) {
  var a = C(r),
    s = t && "object" === i(t) ? t : {},
    n = Array.isArray(s.visibleFilteredPresets) ? s.visibleFilteredPresets : [],
    o = Array.isArray(s.filteredPresets) ? s.filteredPresets : [];
  if (!n.length && !o.length) return null;
  var u = {
    presets: Array.isArray(s.presets) ? s.presets.slice() : [],
    filteredPresets: o.slice(),
    visibleFilteredPresets: n.slice(),
    inspirationRenderLimit: Math.max(
      1,
      Math.floor(Number(s.inspirationRenderLimit || n.length || 6))
    ),
    inspirationHasMorePresets: !!s.inspirationHasMorePresets,
    savedAt: Date.now(),
  };
  return (I(e)[a] = u), u;
}
function U(e, r) {
  var t = I(e)[C(r)];
  if (!t || "object" !== i(t)) return null;
  var a = Array.isArray(t.visibleFilteredPresets)
      ? t.visibleFilteredPresets
      : [],
    s = Array.isArray(t.filteredPresets) ? t.filteredPresets : [];
  return a.length || s.length
    ? {
        presets: Array.isArray(t.presets) ? t.presets.slice() : [],
        filteredPresets: s.slice(),
        visibleFilteredPresets: a.slice(),
        inspirationRenderLimit: Math.max(
          1,
          Math.floor(Number(t.inspirationRenderLimit || a.length || 6))
        ),
        inspirationHasMorePresets: !!t.inspirationHasMorePresets,
        savedAt: Number(t.savedAt || 0),
      }
    : null;
}
function E(e, r, t) {
  var a = t && "object" === i(t) ? t : {};
  return Object.assign(
    {
      presets: Array.isArray(e && e.presets) ? e.presets.slice() : [],
      filteredPresets: Array.isArray(e && e.filteredPresets)
        ? e.filteredPresets.slice()
        : [],
      visibleFilteredPresets: Array.isArray(e && e.visibleFilteredPresets)
        ? e.visibleFilteredPresets.slice()
        : [],
      inspirationRenderLimit: Math.max(
        1,
        Math.floor(Number((e && e.inspirationRenderLimit) || 6))
      ),
      inspirationHasMorePresets: !(!e || !e.inspirationHasMorePresets),
      inspirationLoading: !1,
      inspirationPaging: !1,
      inspirationRefreshing: !0 === a.refreshing,
      inspirationStale: !0 === a.stale,
      inspirationScrollPrimed: !1,
      presetCategory: C(r),
    },
    L(r, a.status || "loaded")
  );
}
function B(e, r) {
  if ("all" === r)
    return e.map(function (e) {
      return d(e);
    });
  var t = k(r);
  return t
    ? e
        .filter(function (e) {
          if (!e || "object" !== i(e)) return !1;
          var r = Array.isArray(e.sectionCodes)
            ? e.sectionCodes
                .map(function (e) {
                  return k(e);
                })
                .filter(Boolean)
            : Array.isArray(e.section_codes)
            ? e.section_codes
                .map(function (e) {
                  return k(e);
                })
                .filter(Boolean)
            : [];
          return r.length ? r.includes(t) : k(e.category) === t;
        })
        .map(function (e) {
          return d(e);
        })
    : e.map(function (e) {
        return d(e);
      });
}
function z(e) {
  var r = e && "object" === i(e) ? e : {},
    t = Number(r.templateId || r.template_id || 0);
  if (Number.isFinite(t) && t > 0) return "template:".concat(t);
  var a = String(r.code || "").trim();
  if (a) return "code:".concat(a);
  var s = String(r.id || "").trim();
  return s ? "id:".concat(s) : "";
}
function G(e, r, t) {
  var a = t && "object" === i(t) ? t : {},
    s = C(r),
    n = (function (e) {
      if (
        e &&
        e._inspirationFeedState &&
        "object" === i(e._inspirationFeedState)
      )
        return e._inspirationFeedState;
      var r = { cursors: Object.create(null) };
      return e && "object" === i(e) && (e._inspirationFeedState = r), r;
    })(e),
    o = Math.max(1, Math.floor(Number(a.startPage || 2)));
  return (
    n.cursors[s] || (n.cursors[s] = { nextPage: o, hasMore: !0, inFlight: !1 }),
    !0 === a.reset &&
      ((n.cursors[s].nextPage = o), (n.cursors[s].hasMore = !0)),
    n.cursors[s]
  );
}
function V(e) {
  var r = e && "object" === i(e) ? e : {},
    t = (
      Array.isArray(r.sectionCodes)
        ? r.sectionCodes
        : Array.isArray(r.section_codes)
        ? r.section_codes
        : []
    )
      .map(function (e) {
        return k(e);
      })
      .filter(Boolean);
  if (t.length) return Array.from(new Set(t));
  var a = k(r.category);
  return a ? [a] : [];
}
function Q(e) {
  var r = e && "object" === i(e) ? e : {},
    t = String(
      m(r, { allowPatternFallback: !1, disableCacheFallback: !0 }) || ""
    ).trim(),
    a = A(r),
    s = y(r);
  return (
    t && P(r, t, { persist: !1 }),
    Object.assign({}, r, {
      previewUrl: t || String(r.previewUrl || "").trim(),
      priceText: a,
      displayPriceText: s,
    })
  );
}
function W(e, r) {
  var i = Object.assign({}, e || {}, r || {}),
    a = Array.from(new Set([].concat(t(V(e)), t(V(r)))));
  return (
    a.length &&
      ((i.sectionCodes = a),
      String(i.category || "").trim() || (i.category = a[0])),
    Q(i)
  );
}
function J(e, r) {
  var t = Array.isArray(e) ? e : [],
    i = Array.isArray(r) ? r : [];
  if (!i.length) return t.slice();
  var a = new Map(),
    s = [];
  return (
    t.forEach(function (e, r) {
      var t = z(e);
      t && a.set(t, { item: e, index: r });
    }),
    v(i),
    i.forEach(function (e) {
      var r = Q(e),
        t = z(e);
      if (t && a.has(t)) {
        var i = a.get(t);
        return (i.item = W(i.item, r)), void a.set(t, i);
      }
      s.push(r);
    }),
    Array.from(a.values())
      .sort(function (e, r) {
        return e.index - r.index;
      })
      .map(function (e) {
        return e.item;
      })
      .concat(s)
  );
}
function K(e, r, t) {
  var i = Array.isArray(e) ? e : [],
    a = Array.isArray(r) ? r : [],
    s = C(t),
    n = new Map(),
    o = new Set();
  i.forEach(function (e) {
    var r = z(e);
    r && !n.has(r) && n.set(r, e);
  }),
    v(a);
  var u = [];
  if (
    (a.forEach(function (e) {
      var r = z(e);
      if (!r || !o.has(r)) {
        r && o.add(r);
        var t = Q(e);
        u.push(r && n.has(r) ? W(n.get(r), t) : t);
      }
    }),
    "all" === s)
  )
    return u;
  var d = i.filter(function (e) {
    return !(function (e, r) {
      var t = C(r);
      return "all" === t || V(e).includes(t);
    })(e, s);
  });
  return u.concat(d);
}
function X(e, r, t) {
  var i = Number(e || 0) < Number(r || 0),
    a = !(!t || !1 === t.hasMore);
  return i || a;
}
function Y(e, r, t, i, a, s) {
  return Z.apply(this, arguments);
}
function Z() {
  return (Z = r(
    e().mark(function r(t, i, a, s, n, o) {
      var u, d, l, c, p, g, b;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (u = C(i)),
                  (s.inFlight = !0),
                  (e.prev = 2),
                  (e.next = 5),
                  f({
                    page: n,
                    pageSize: o,
                    section: "all" === u ? "" : u,
                    forceRemote: !0 === a.force,
                    preferCache: !0 !== a.force && void 0,
                  })
                );
              case 5:
                return (
                  (d = e.sent),
                  (l = Array.isArray(d && d.items) ? d.items : []),
                  (c = Array.isArray(t.data && t.data.presets)
                    ? t.data.presets
                    : []),
                  (p = n <= 1 ? K(c, l, u) : J(c, l)),
                  (g = Math.max(0, p.length - c.length)),
                  (b = d && !0 === d.hasMore && l.length > 0),
                  (s.nextPage = n + 1),
                  (s.hasMore = b),
                  (s.lastFetchedAt = Date.now()),
                  g <= 0 && n > 1 && (s.hasMore = !1),
                  e.abrupt("return", {
                    mergedPresets: p,
                    addedCount: g,
                    hasMore: s.hasMore,
                    page: n,
                    itemCount: l.length,
                    total: Number((d && d.total) || 0),
                    response: d,
                  })
                );
              case 16:
                return (e.prev = 16), (s.inFlight = !1), e.finish(16);
              case 19:
              case "end":
                return e.stop();
            }
        },
        r,
        null,
        [[2, , 16, 19]]
      );
    })
  )).apply(this, arguments);
}
function $(e, r, t) {
  return ee.apply(this, arguments);
}
function ee() {
  return (ee = r(
    e().mark(function r(t, a, s) {
      var n, o, u, d, l, c, p;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (
                ((n = s && "object" === i(s) ? s : {}),
                (o = C(a)),
                (u = G(t, o, { startPage: Number(n.startPage || 2) })),
                (d = Math.max(
                  1,
                  Math.floor(Number(n.page || u.nextPage || 1))
                )),
                (l = Math.max(
                  6,
                  Math.min(60, Math.floor(Number(n.pageSize || 6)))
                )),
                !(d <= 1))
              ) {
                e.next = 12;
                break;
              }
              if (((c = H(t)), (p = O(o, l)), !c[p])) {
                e.next = 10;
                break;
              }
              return e.abrupt("return", c[p]);
            case 10:
              return (
                (c[p] = Y(t, o, n, u, d, l).finally(function () {
                  delete c[p];
                })),
                e.abrupt("return", c[p])
              );
            case 12:
              if (!u.inFlight) {
                e.next = 14;
                break;
              }
              return e.abrupt("return", null);
            case 14:
              if (!1 !== u.hasMore || !0 === n.force) {
                e.next = 16;
                break;
              }
              return e.abrupt("return", {
                mergedPresets: Array.isArray(t.data && t.data.presets)
                  ? t.data.presets
                  : [],
                addedCount: 0,
                hasMore: !1,
                page: Number(u.nextPage || 1),
                itemCount: 0,
                total: 0,
                response: null,
              });
            case 16:
              return e.abrupt("return", Y(t, o, n, u, d, l));
            case 17:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function re(e, r) {
  return te.apply(this, arguments);
}
function te() {
  return (te = r(
    e().mark(function r(t, i) {
      var a, s, n, o, u;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if ((a = k(i)) && "all" !== a) {
                e.next = 3;
                break;
              }
              return e.abrupt("return", null);
            case 3:
              G(t, a, { startPage: 1, reset: !0 }),
                (s = Array.isArray(t && t.data && t.data.presets)
                  ? t.data.presets
                  : []),
                (n = B(s, a)),
                (o = 0);
            case 7:
              if (n.length || !(o < 3)) {
                e.next = 20;
                break;
              }
              return (o += 1), (e.next = 11), $(t, a, { startPage: 1 });
            case 11:
              if ((u = e.sent)) {
                e.next = 14;
                break;
              }
              return e.abrupt("break", 20);
            case 14:
              if (((s = u.mergedPresets), (n = B(s, a)), u.hasMore)) {
                e.next = 18;
                break;
              }
              return e.abrupt("break", 20);
            case 18:
              e.next = 7;
              break;
            case 20:
              return e.abrupt("return", n.length ? s : null);
            case 21:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function ie(e) {
  var r = e && e.data && "object" === i(e.data) ? e.data : {},
    t = Number(r.inspirationRenderStep);
  return !Number.isFinite(t) || t <= 0 ? 6 : Math.max(1, Math.floor(t));
}
function ae(e) {
  var r = e && e.data && "object" === i(e.data) ? e.data : {},
    t = Number(r.inspirationRenderLimit);
  return Number.isFinite(t) && t > 0 ? Math.max(1, Math.floor(t)) : 6;
}
function se(e, r) {
  var t = Math.max(1, Number(r) || 6),
    i = function () {
      e &&
        "function" == typeof e.warmupInspirationAssets &&
        e.warmupInspirationAssets({ limit: t });
    };
  e && "function" == typeof e.deferNonCriticalTask
    ? e.deferNonCriticalTask(i, 12)
    : i();
}
function ne(e, r) {
  var t = Array.isArray(e) ? e : [],
    a = String(r || "").trim();
  if (!a || !t.length) return t;
  var s = String((arguments.length > 2 && arguments[2]) || "").trim();
  return t.map(function (e) {
    var r = e && "object" === i(e) ? e : {};
    if (String(r.id || "").trim() !== a) return r;
    for (
      var t = []
          .concat(Array.isArray(r.images) ? r.images : [])
          .concat(Array.isArray(r.workImages) ? r.workImages : [])
          .concat(Array.isArray(r.work_images) ? r.work_images : [])
          .concat(Array.isArray(r.proofImages) ? r.proofImages : []),
        n = "",
        o = 0;
      o < t.length;
      o += 1
    ) {
      var u = String(t[o] || "").trim();
      if (u && (!s || u !== s)) {
        n = u;
        break;
      }
    }
    return s && String(r.displayPreviewUrl || "").trim() === s
      ? Object.assign({}, r, {
          displayPreviewUrl: String(
            r.previewUrl || r.preview_url || n || ""
          ).trim(),
        })
      : Object.assign({}, r, {
          previewUrl: n,
          preview_url: n,
          displayPreviewUrl: n,
        });
  });
}
function oe(e, r, t) {
  var a = Array.isArray(e) ? e : [],
    s = String(r || "").trim(),
    n = String(t || "").trim();
  return s && a.length && n
    ? a.map(function (e) {
        var r = e && "object" === i(e) ? e : {};
        return String(r.id || "").trim() !== s
          ? r
          : Object.assign({}, r, {
              authorAvatar: n,
              sourceDesignerAvatar: n,
              source_designer_avatar: n,
            });
      })
    : a;
}
module.exports = {
  createDomainActions: function () {
    return Object.freeze({
      ensureInspirationFirstPage: function (t) {
        var a = this;
        return r(
          e().mark(function r() {
            var s, o, u, d, l, c, p, g, f, h, m, P;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((s = t && "object" === i(t) ? t : {}),
                        (o =
                          k(
                            s.presetCategory ||
                              (a.data && a.data.presetCategory) ||
                              "designer"
                          ) || "designer"),
                        (u = Array.isArray(
                          a.data && a.data.visibleFilteredPresets
                        )
                          ? a.data.visibleFilteredPresets
                          : []),
                        (d = T(a, o)),
                        !u.length || d !== o || !0 === s.force)
                      ) {
                        e.next = 8;
                        break;
                      }
                      return (
                        q(a, o, {
                          presets: a.data && a.data.presets,
                          filteredPresets: a.data && a.data.filteredPresets,
                          visibleFilteredPresets: u,
                          inspirationRenderLimit:
                            a.data && a.data.inspirationRenderLimit,
                          inspirationHasMorePresets:
                            a.data && a.data.inspirationHasMorePresets,
                        }),
                        a.setData(
                          Object.assign(
                            { inspirationRefreshing: !1, inspirationStale: !1 },
                            L(o, "loaded")
                          )
                        ),
                        e.abrupt("return", !0)
                      );
                    case 8:
                      return (
                        (l = j(a)),
                        (c = U(a, o))
                          ? a.setData(
                              E(c, o, {
                                refreshing: !0,
                                stale: !0 === s.force,
                                status: "loaded",
                              })
                            )
                          : a.setData(
                              Object.assign(
                                {
                                  inspirationLoading: !0,
                                  inspirationPaging: !1,
                                  inspirationRefreshing: !1,
                                  inspirationStale: !1,
                                },
                                L(o, "loading")
                              )
                            ),
                        (e.prev = 11),
                        (e.next = 14),
                        $(a, o, { startPage: 1, page: 1, force: !0 })
                      );
                    case 14:
                      if (((p = e.sent), R(a, l, o))) {
                        e.next = 17;
                        break;
                      }
                      return e.abrupt("return", !1);
                    case 17:
                      if (
                        ((g =
                          p && Array.isArray(p.mergedPresets)
                            ? p.mergedPresets
                            : Array.isArray(a.data && a.data.presets)
                            ? a.data.presets
                            : []),
                        (f = B(g, o)),
                        (h = ae(a)),
                        (m = n(f, h)),
                        (P = G(a, o, { startPage: f.length ? 2 : 1 })),
                        f.length)
                      ) {
                        e.next = 31;
                        break;
                      }
                      if (!D(o, p && p.response, f)) {
                        e.next = 26;
                        break;
                      }
                      return (
                        a.setData(
                          Object.assign(
                            {
                              presets: g,
                              inspirationRenderLimit: h,
                              inspirationLoading: !1,
                              inspirationPaging: !1,
                              inspirationRefreshing: !1,
                              inspirationStale: !1,
                              inspirationScrollPrimed: !1,
                              presetCategory: o,
                              filteredPresets: [],
                              visibleFilteredPresets: [],
                              inspirationHasMorePresets: !1,
                            },
                            L(o, "empty")
                          )
                        ),
                        e.abrupt("return", !0)
                      );
                    case 26:
                      if (!c) {
                        e.next = 29;
                        break;
                      }
                      return (
                        a.setData(E(c, o, { stale: !0, status: "loaded" })),
                        e.abrupt("return", !0)
                      );
                    case 29:
                      return (
                        a.setData(
                          Object.assign(
                            {
                              inspirationLoading: !1,
                              inspirationPaging: !1,
                              inspirationRefreshing: !1,
                              inspirationStale: !1,
                              presetCategory: o,
                              filteredPresets: [],
                              visibleFilteredPresets: [],
                              inspirationHasMorePresets: !1,
                            },
                            L(o, "error")
                          )
                        ),
                        e.abrupt("return", !1)
                      );
                    case 31:
                      return (
                        a.setData(
                          Object.assign(
                            {
                              presets: g,
                              inspirationRenderLimit: h,
                              inspirationLoading: !1,
                              inspirationPaging: !1,
                              inspirationRefreshing: !1,
                              inspirationStale: !1,
                              inspirationScrollPrimed: !1,
                              presetCategory: o,
                              filteredPresets: f,
                              visibleFilteredPresets: m.visibleFilteredPresets,
                              inspirationHasMorePresets: X(
                                m.visibleFilteredPresets.length,
                                f.length,
                                P
                              ),
                            },
                            L(o, "loaded")
                          )
                        ),
                        q(a, o, {
                          presets: g,
                          filteredPresets: f,
                          visibleFilteredPresets: m.visibleFilteredPresets,
                          inspirationRenderLimit: h,
                          inspirationHasMorePresets: X(
                            m.visibleFilteredPresets.length,
                            f.length,
                            P
                          ),
                        }),
                        se(a, h),
                        e.abrupt("return", !0)
                      );
                    case 37:
                      if (((e.prev = 37), (e.t0 = e.catch(11)), R(a, l, o))) {
                        e.next = 41;
                        break;
                      }
                      return e.abrupt("return", !1);
                    case 41:
                      if (
                        (b.warn("inspiration first page hydration failed", {
                          category: o,
                          reason: String(s.reason || ""),
                          message:
                            e.t0 && e.t0.message ? String(e.t0.message) : "",
                          code: e.t0 && e.t0.code ? String(e.t0.code) : "",
                          statusCode:
                            e.t0 && e.t0.statusCode
                              ? Number(e.t0.statusCode)
                              : 0,
                        }),
                        !c)
                      ) {
                        e.next = 45;
                        break;
                      }
                      return (
                        a.setData(E(c, o, { stale: !0, status: "loaded" })),
                        e.abrupt("return", !0)
                      );
                    case 45:
                      return (
                        a.setData(
                          Object.assign(
                            {
                              inspirationLoading: !1,
                              inspirationPaging: !1,
                              inspirationRefreshing: !1,
                              inspirationStale: !1,
                            },
                            L(o, "error")
                          )
                        ),
                        e.abrupt("return", !1)
                      );
                    case 47:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[11, 37]]
            );
          })
        )();
      },
      handlePresetCategoryChange: function (t) {
        var i = this;
        return r(
          e().mark(function r() {
            var a, o, u, d, l, c, p, g, f, h, m, P, v, y, A, F, w, C;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((r = t),
                        (a = String(
                          r &&
                            r.currentTarget &&
                            r.currentTarget.dataset &&
                            r.currentTarget.dataset.designerId
                            ? r.currentTarget.dataset.designerId
                            : ""
                        )
                          .trim()
                          .toLowerCase()),
                        (o = k(x(t))))
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return");
                    case 4:
                      if (
                        ((u = j(i)),
                        (d = Array.isArray(i.data.presets)
                          ? i.data.presets
                          : []),
                        !a)
                      ) {
                        e.next = 15;
                        break;
                      }
                      return (
                        (l = B(d, "designer")),
                        (c = ae(i)),
                        (p = n(l, c)),
                        i.setData(
                          Object.assign(
                            {
                              inspirationRenderLimit: c,
                              inspirationLoading: !1,
                              inspirationPaging: !1,
                              inspirationRefreshing: !1,
                              inspirationStale: !1,
                              inspirationScrollPrimed: !1,
                              presetCategory: "designer",
                              filteredPresets: l,
                              visibleFilteredPresets: p.visibleFilteredPresets,
                              inspirationHasMorePresets:
                                p.inspirationHasMorePresets,
                            },
                            L("designer", "loaded")
                          )
                        ),
                        q(i, "designer", {
                          presets: d,
                          filteredPresets: l,
                          visibleFilteredPresets: p.visibleFilteredPresets,
                          inspirationRenderLimit: c,
                          inspirationHasMorePresets:
                            p.inspirationHasMorePresets,
                        }),
                        se(i, c),
                        s(i, "inspiration"),
                        e.abrupt("return")
                      );
                    case 15:
                      if (
                        ((g = B(d, o)),
                        (f = !1),
                        (h = U(i, o)),
                        G(i, o, { startPage: g.length ? 2 : 1 }),
                        "all" !== o || i._inspirationAllHydrated)
                      ) {
                        e.next = 35;
                        break;
                      }
                      return (
                        (i._inspirationAllHydrated = !0),
                        g.length ||
                          (h
                            ? ((d = h.presets),
                              i.setData(
                                E(h, o, { refreshing: !0, status: "loaded" })
                              ))
                            : i.setData(
                                Object.assign(
                                  {
                                    inspirationLoading: !0,
                                    inspirationPaging: !1,
                                    inspirationRefreshing: !1,
                                    inspirationStale: !1,
                                    presetCategory: o,
                                    filteredPresets: [],
                                    visibleFilteredPresets: [],
                                  },
                                  L(o, "loading")
                                )
                              )),
                        (e.prev = 22),
                        (e.next = 25),
                        $(i, "all", { startPage: 1, page: 1, force: !0 })
                      );
                    case 25:
                      if (((m = e.sent), N(i, u))) {
                        e.next = 28;
                        break;
                      }
                      return e.abrupt("return");
                    case 28:
                      m &&
                        Array.isArray(m.mergedPresets) &&
                        m.mergedPresets.length &&
                        ((d = m.mergedPresets), (g = B(d, "all"))),
                        (e.next = 35);
                      break;
                    case 31:
                      (e.prev = 31),
                        (e.t0 = e.catch(22)),
                        (f = !0),
                        b.warn("inspiration all-category prime failed", {
                          message:
                            e.t0 && e.t0.message ? String(e.t0.message) : "",
                          code: e.t0 && e.t0.code ? String(e.t0.code) : "",
                          statusCode:
                            e.t0 && e.t0.statusCode
                              ? Number(e.t0.statusCode)
                              : 0,
                        });
                    case 35:
                      if (g.length || "all" === o) {
                        e.next = 50;
                        break;
                      }
                      return (
                        h
                          ? ((d = h.presets),
                            i.setData(
                              E(h, o, { refreshing: !0, status: "loaded" })
                            ))
                          : i.setData(
                              Object.assign(
                                {
                                  inspirationLoading: !0,
                                  inspirationPaging: !1,
                                  inspirationRefreshing: !1,
                                  inspirationStale: !1,
                                  presetCategory: o,
                                  filteredPresets: [],
                                  visibleFilteredPresets: [],
                                },
                                L(o, "loading")
                              )
                            ),
                        (e.prev = 37),
                        (e.next = 40),
                        re(i, o)
                      );
                    case 40:
                      if (((P = e.sent), N(i, u))) {
                        e.next = 43;
                        break;
                      }
                      return e.abrupt("return");
                    case 43:
                      Array.isArray(P) && P.length && (g = B((d = P), o)),
                        (e.next = 50);
                      break;
                    case 46:
                      (e.prev = 46),
                        (e.t1 = e.catch(37)),
                        (f = !0),
                        b.warn("inspiration category hydration failed", {
                          category: o,
                          message:
                            e.t1 && e.t1.message ? String(e.t1.message) : "",
                          code: e.t1 && e.t1.code ? String(e.t1.code) : "",
                          statusCode:
                            e.t1 && e.t1.statusCode
                              ? Number(e.t1.statusCode)
                              : 0,
                        });
                    case 50:
                      if (
                        ((v = ae(i)),
                        (y = n(g, v)),
                        (A = G(i, o, { startPage: g.length ? 2 : 1 })),
                        (F = S(t)),
                        (w = M(t)),
                        N(i, u))
                      ) {
                        e.next = 57;
                        break;
                      }
                      return e.abrupt("return");
                    case 57:
                      if (g.length || !h) {
                        e.next = 61;
                        break;
                      }
                      return (
                        i.setData(E(h, o, { stale: !0, status: "loaded" })),
                        F && w && s(i, w, i.data.activeTab || "home"),
                        e.abrupt("return")
                      );
                    case 61:
                      (C = g.length ? "loaded" : f || _(o) ? "error" : "empty"),
                        i.setData(
                          Object.assign(
                            {
                              presets: d,
                              inspirationRenderLimit: v,
                              inspirationLoading: !1,
                              inspirationPaging: !1,
                              inspirationRefreshing: !1,
                              inspirationStale: !1,
                              inspirationScrollPrimed: !1,
                              presetCategory: o,
                              filteredPresets: g,
                              visibleFilteredPresets: y.visibleFilteredPresets,
                              inspirationHasMorePresets: X(
                                y.visibleFilteredPresets.length,
                                g.length,
                                A
                              ),
                            },
                            L(o, C)
                          )
                        ),
                        g.length &&
                          q(i, o, {
                            presets: d,
                            filteredPresets: g,
                            visibleFilteredPresets: y.visibleFilteredPresets,
                            inspirationRenderLimit: v,
                            inspirationHasMorePresets: X(
                              y.visibleFilteredPresets.length,
                              g.length,
                              A
                            ),
                          }),
                        se(i, v),
                        F && w && s(i, w, i.data.activeTab || "home");
                    case 66:
                    case "end":
                      return e.stop();
                  }
                var r;
              },
              r,
              null,
              [
                [22, 31],
                [37, 46],
              ]
            );
          })
        )();
      },
      handleRetryInspirationFirstPage: function () {
        "function" == typeof this.ensureInspirationFirstPage &&
          this.ensureInspirationFirstPage({
            presetCategory: this.data && this.data.presetCategory,
            reason: "manual_retry",
            force: !0,
          });
      },
      handleOpenPresetDetail: function (e) {
        if (
          !(function (e) {
            if (!e || "object" !== i(e)) return !1;
            var r = Date.now(),
              t = Number(e._presetDetailNavAt || 0);
            return (t > 0 && r - t < 720) || ((e._presetDetailNavAt = r), !1);
          })(this)
        ) {
          var r = String(
              e && e.currentTarget && e.currentTarget.dataset
                ? e.currentTarget.dataset.id
                : ""
            ).trim(),
            t = Array.isArray(this.data.visibleFilteredPresets)
              ? this.data.visibleFilteredPresets
              : [],
            s = Array.isArray(this.data.filteredPresets)
              ? this.data.filteredPresets
              : [],
            n = Array.isArray(this.data.presets) ? this.data.presets : [],
            d = function (e) {
              return e.find(function (e) {
                return String((e && e.id) || "").trim() === r;
              });
            },
            l = d(t) || d(s) || d(n);
          if (l) {
            var g = String(
                l.sourceDesignerName || l.authorName || l.creatorName || ""
              ).trim(),
              f = (function (e, r) {
                var t = e && "object" === i(e) ? e : {},
                  a = String(r || "").trim();
                if (a && !w(a)) return a;
                for (
                  var s = [
                      t.preview_url,
                      t.snapshot_url,
                      t.previewUrl,
                      t.snapshotUrl,
                    ],
                    n = 0;
                  n < s.length;
                  n += 1
                ) {
                  var o = String(s[n] || "").trim();
                  if (o && !w(o)) return o;
                }
                return "";
              })(l, String(l.previewUrl || "").trim()),
              b =
                !1 === l.usesDesignerIdentity
                  ? {
                      displayAuthorName:
                        l.displayAuthorName ||
                        l.authorName ||
                        l.creatorName ||
                        "",
                      isCustomerPreset: !0,
                      usesDesignerIdentity: !1,
                    }
                  : { sourceDesignerName: g },
              h = u(l, b);
            if (h) {
              p(r, {
                previewUrl: f,
                pattern: Array.isArray(l.pattern) ? l.pattern.slice() : [],
                beadMm:
                  Number(void 0 !== l.beadMm ? l.beadMm : l.bead_mm) || 11,
                previewRenderVersion:
                  Number(
                    void 0 !== l.previewRenderVersion
                      ? l.previewRenderVersion
                      : l.preview_render_version
                  ) || 1,
              }),
                c(h);
              var m = o("/pages/product/index", {
                id: String(l.id || "").trim(),
                from: "inspiration",
                previewUrl: f,
              });
              a(m, { methods: ["navigateTo", "redirectTo", "reLaunch"] });
            } else this.showToast("该灵感方案数据异常");
          }
        }
      },
      handleInspirationReachEnd: function () {
        var t = this;
        return r(
          e().mark(function r() {
            var i, a, s, o, u, d, l, c, p, g, f, h, m, P;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(!t.data || !t.data.inspirationScrollPrimed)) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return");
                    case 3:
                      if (
                        ((i = Array.isArray(t.data.filteredPresets)
                          ? t.data.filteredPresets
                          : []),
                        (a = Array.isArray(t.data.visibleFilteredPresets)
                          ? t.data.visibleFilteredPresets
                          : []),
                        !(s = String(
                          (t.data && t.data.inspirationFirstPageStatus) || ""
                        ).trim()) || "loaded" === s)
                      ) {
                        e.next = 8;
                        break;
                      }
                      return e.abrupt("return");
                    case 8:
                      if (i.length) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt("return");
                    case 10:
                      if (!(a.length >= i.length)) {
                        e.next = 40;
                        break;
                      }
                      if (
                        ((o = k(t.data.presetCategory || "all")),
                        !(u = G(t, o, { startPage: i.length ? 2 : 1 }))
                          .inFlight && !1 !== u.hasMore)
                      ) {
                        e.next = 17;
                        break;
                      }
                      return (
                        t.data.inspirationHasMorePresets &&
                          t.setData({ inspirationHasMorePresets: !1 }),
                        t.data.inspirationPaging &&
                          t.setData({ inspirationPaging: !1 }),
                        e.abrupt("return")
                      );
                    case 17:
                      return (
                        t.setData({ inspirationPaging: !0 }),
                        (e.prev = 18),
                        (e.next = 21),
                        $(t, o, { startPage: i.length ? 2 : 1 })
                      );
                    case 21:
                      if ((d = e.sent)) {
                        e.next = 25;
                        break;
                      }
                      return (
                        t.setData({ inspirationPaging: !1 }), e.abrupt("return")
                      );
                    case 25:
                      (l = Array.isArray(d.mergedPresets)
                        ? d.mergedPresets
                        : []),
                        (c = B(l, o)),
                        (p = a.length + ie(t)),
                        (g = n(c, p)),
                        (f = G(t, o)),
                        t.setData({
                          presets: l,
                          filteredPresets: c,
                          inspirationRenderLimit: p,
                          visibleFilteredPresets: g.visibleFilteredPresets,
                          inspirationHasMorePresets: X(
                            g.visibleFilteredPresets.length,
                            c.length,
                            f
                          ),
                          inspirationPaging: !1,
                        }),
                        c.length &&
                          q(t, o, {
                            presets: l,
                            filteredPresets: c,
                            visibleFilteredPresets: g.visibleFilteredPresets,
                            inspirationRenderLimit: p,
                            inspirationHasMorePresets: X(
                              g.visibleFilteredPresets.length,
                              c.length,
                              f
                            ),
                          }),
                        se(t, p),
                        (e.next = 39);
                      break;
                    case 35:
                      (e.prev = 35),
                        (e.t0 = e.catch(18)),
                        b.warn("inspiration remote pagination failed", {
                          category: o,
                          message:
                            e.t0 && e.t0.message ? String(e.t0.message) : "",
                          code: e.t0 && e.t0.code ? String(e.t0.code) : "",
                          statusCode:
                            e.t0 && e.t0.statusCode
                              ? Number(e.t0.statusCode)
                              : 0,
                        }),
                        t.setData({ inspirationPaging: !1 });
                    case 39:
                      return e.abrupt("return");
                    case 40:
                      (h = a.length + ie(t)),
                        (m = n(i, h)),
                        (P = G(t, t.data.presetCategory, {
                          startPage: i.length ? 2 : 1,
                        })),
                        t.setData({
                          inspirationRenderLimit: h,
                          inspirationPaging: !1,
                          visibleFilteredPresets: m.visibleFilteredPresets,
                          inspirationHasMorePresets: X(
                            m.visibleFilteredPresets.length,
                            i.length,
                            P
                          ),
                        }),
                        q(t, t.data.presetCategory, {
                          presets: t.data.presets,
                          filteredPresets: i,
                          visibleFilteredPresets: m.visibleFilteredPresets,
                          inspirationRenderLimit: h,
                          inspirationHasMorePresets: X(
                            m.visibleFilteredPresets.length,
                            i.length,
                            P
                          ),
                        }),
                        se(t, h);
                    case 46:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[18, 35]]
            );
          })
        )();
      },
      handleInspirationPresetImageLoad: function (e) {
        this._inspirationFirstImageMarked ||
          ((this._inspirationFirstImageMarked = !0),
          "function" == typeof this.recordPerfEvent &&
            this.recordPerfEvent(
              "inspiration_first_image_ms",
              this._bootPerfStartedAt || Date.now(),
              {
                activeTab: String(
                  (this.data && this.data.activeTab) || ""
                ).trim(),
                presetId: String(
                  (e &&
                    e.currentTarget &&
                    e.currentTarget.dataset &&
                    e.currentTarget.dataset.id) ||
                    ""
                ).trim(),
              }
            ));
      },
      handleInspirationPresetImageError: function (e) {
        var r = String(
          (e &&
            e.currentTarget &&
            e.currentTarget.dataset &&
            e.currentTarget.dataset.id) ||
            ""
        ).trim();
        if (r) {
          var t = String(
              (e &&
                e.currentTarget &&
                e.currentTarget.dataset &&
                (e.currentTarget.dataset.displaySrc ||
                  e.currentTarget.dataset.src)) ||
                ""
            ).trim(),
            i = ne(this.data.presets, r, t),
            a = ne(this.data.filteredPresets, r, t),
            s = ne(this.data.visibleFilteredPresets, r, t);
          this.setData({
            presets: i,
            filteredPresets: a,
            visibleFilteredPresets: s,
          }),
            q(this, this.data && this.data.presetCategory, {
              presets: i,
              filteredPresets: a,
              visibleFilteredPresets: s,
              inspirationRenderLimit:
                this.data && this.data.inspirationRenderLimit,
              inspirationHasMorePresets:
                this.data && this.data.inspirationHasMorePresets,
            });
        }
      },
      handleInspirationAuthorAvatarError: function (e) {
        var r = String(
          (e &&
            e.currentTarget &&
            e.currentTarget.dataset &&
            e.currentTarget.dataset.id) ||
            ""
        ).trim();
        if (r) {
          var t =
              "https://images.unsplash.com/photo-1633058851349-55a9a188e338?w=100&h=100&fit=facearea&facepad=2",
            i = oe(this.data.presets, r, t),
            a = oe(this.data.filteredPresets, r, t),
            s = oe(this.data.visibleFilteredPresets, r, t);
          this.setData({
            presets: i,
            filteredPresets: a,
            visibleFilteredPresets: s,
          }),
            q(this, this.data && this.data.presetCategory, {
              presets: i,
              filteredPresets: a,
              visibleFilteredPresets: s,
              inspirationRenderLimit:
                this.data && this.data.inspirationRenderLimit,
              inspirationHasMorePresets:
                this.data && this.data.inspirationHasMorePresets,
            });
        }
      },
    });
  },
};
