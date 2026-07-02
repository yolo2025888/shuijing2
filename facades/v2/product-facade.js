var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../@babel/runtime/helpers/typeof"),
  a = require("../../repositories/catalogRepository"),
  n = a.getBootstrapData,
  u = a.getPresetDetailAggregate,
  s = a.getPresetMediaAggregate,
  i = a.reportPresetView,
  o = a.resolveMaterialsByCodes,
  c = require("../../domain/v2/preset-detail-domain").buildPresetDetailPayload,
  p = require("../../utils/catalog"),
  d = p.applyRuntimeCatalogSnapshot,
  l = p.getKnownBeadType,
  m = p.getStructure,
  g = p.materialHasRenderableImage,
  f = p.mergeRuntimeBeadTypes,
  y = require("./preset-detail-cache").writePresetDetailCache,
  h = require("../../domain/v2/designer-domain"),
  b = h.resolveDesignerIdByPreset,
  v = h.getDesignerProfileById,
  A =
    require("../../domain/v2/preset-author-domain").resolvePresetAuthorPresentation;
function R(e) {
  return String(e || "").trim();
}
function T(e) {
  return Array.isArray(e)
    ? e
        .map(function (e) {
          return String(null == e ? "" : e).trim();
        })
        .filter(Boolean)
    : [];
}
function E(e) {
  var r = Number(e);
  return Number.isFinite(r) ? r.toFixed(1) : "0.0";
}
function P(e) {
  return (Array.isArray(e) ? e : []).map(function (e) {
    var r = e && "object" === t(e) ? e : {};
    return Object.assign({}, r, {
      priceText: r.priceText || E(r.price),
      sumText: r.sumText || E(r.sum),
    });
  });
}
function M(e) {
  var r = Array.isArray(e) ? e : [],
    a = {};
  return (
    r.forEach(function (e) {
      var r = e && "object" === t(e) ? e : {},
        n = String(
          r.id || r.materialId || r.material_id || r.code || ""
        ).trim();
      n && !a[n] && (a[n] = Object.assign({}, r, { id: n }));
    }),
    a
  );
}
function _(e, r, t) {
  return D.apply(this, arguments);
}
function D() {
  return (D = r(
    e().mark(function r(a, n, u) {
      var s, i, c, p, d, m;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((s = T(a)),
                  (i = M(n)),
                  s.forEach(function (e) {
                    if (!g(i[e])) {
                      var r = l(e);
                      g(r) && (i[e] = r);
                    }
                  }),
                  !(c = Array.from(
                    new Set(
                      s.filter(function (e) {
                        return !g(i[e]);
                      })
                    )
                  )).length || "function" != typeof o)
                ) {
                  e.next = 16;
                  break;
                }
                return (
                  (p = u && "object" === t(u) ? u : {}),
                  (e.prev = 6),
                  (e.next = 9),
                  o(c, {
                    preferCache: !1 !== p.preferCache,
                    forceRemote: !0 === p.forceRemote,
                    remoteTimeoutMs: p.remoteTimeoutMs || 6500,
                  })
                );
              case 9:
                (d = e.sent),
                  (m = Array.isArray(d && d.beadTypes) ? d.beadTypes : [])
                    .length &&
                    (f(m),
                    m.forEach(function (e) {
                      var r = String((e && e.id) || "").trim();
                      r && g(e) && (i[r] = e);
                    })),
                  (e.next = 16);
                break;
              case 14:
                (e.prev = 14), (e.t0 = e.catch(6));
              case 16:
                return (
                  s.forEach(function (e) {
                    if (!g(i[e])) {
                      var r = l(e);
                      g(r) && (i[e] = r);
                    }
                  }),
                  e.abrupt("return", i)
                );
              case 18:
              case "end":
                return e.stop();
            }
        },
        r,
        null,
        [[6, 14]]
      );
    })
  )).apply(this, arguments);
}
function x() {
  return (x = r(
    e().mark(function r(a, n, u) {
      var s, i, o, c;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if ((s = T(a)).length) {
                e.next = 3;
                break;
              }
              return e.abrupt("return", {
                ready: !1,
                errorMessage: "PRODUCT_PATTERN_EMPTY",
                structure: [],
                materialMap: {},
              });
            case 3:
              return (
                (i = u && "object" === t(u) ? u : {}), (e.next = 6), _(s, n, i)
              );
            case 6:
              return (
                (o = e.sent),
                (c = P(m(s)).map(function (e) {
                  var r = String((e && e.id) || "").trim(),
                    a = r && o[r] && "object" === t(o[r]) ? o[r] : null;
                  return a
                    ? Object.assign({}, e, a, {
                        id: r,
                        count: e.count,
                        sum: e.sum,
                        priceText: e.priceText,
                        sumText: e.sumText,
                      })
                    : e;
                })),
                e.abrupt("return", {
                  ready: c.length > 0,
                  errorMessage: c.length > 0 ? "" : "PRODUCT_STRUCTURE_EMPTY",
                  structure: c,
                  materialMap: o,
                })
              );
            case 9:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function I(e, r) {
  var a = e && "object" === t(e) ? e : {},
    n = r && "object" === t(r) ? r : {},
    u = A(a);
  if (!1 === u.usesDesignerIdentity) {
    var s =
      String(
        n.displayAuthorName ||
          u.displayAuthorName ||
          a.authorName ||
          a.author_name ||
          ""
      ).trim() || "匿名作者";
    return {
      designerId: "",
      sourceDesignerId: "",
      sourceDesignerName: "",
      authorName: s,
      authorAvatar: "",
      sourceDesignerAvatar: "",
      displayAuthorName: s,
      isCustomerPreset: !0,
      usesDesignerIdentity: !1,
    };
  }
  var i = b(a),
    o = v(i) || {},
    c = String(
      a.sourceDesignerId || a.source_designer_id || i || "designer"
    ).trim(),
    p = String(
      n.sourceDesignerName ||
        a.sourceDesignerName ||
        a.source_designer_name ||
        a.authorName ||
        a.author_name ||
        a.creatorName ||
        a.creator_name ||
        o.name ||
        "StoneLab."
    ).trim(),
    d = String(
      a.authorAvatar ||
        a.author_avatar ||
        a.sourceDesignerAvatar ||
        a.source_designer_avatar ||
        a.avatar ||
        a.creatorAvatar ||
        a.creator_avatar ||
        o.avatar ||
        ""
    ).trim();
  return {
    designerId: i,
    sourceDesignerId: c,
    sourceDesignerName: p,
    authorName: p,
    authorAvatar: d,
    sourceDesignerAvatar: d,
  };
}
function k(e, r) {
  var a = e && "object" === t(e) ? e : {},
    n = a.detail && "object" === t(a.detail) ? a.detail : null;
  if (!n) return null;
  var u = I(n, r && "object" === t(r) ? r : {}),
    s = c(n, u);
  return s
    ? Object.assign(
        {
          ready: !0,
          errorMessage: "",
          recommendations: Array.isArray(a.recommendations)
            ? a.recommendations
            : [],
        },
        s
      )
    : null;
}
function S() {
  return (S = r(
    e().mark(function r(a) {
      var u, s;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (u = a && "object" === t(a) ? a : {}),
                (e.next = 3),
                n({
                  forceRemote: !0 === u.forceRemote,
                  remoteTimeoutMs: u.remoteTimeoutMs,
                  preferCache: !1 !== u.preferCache,
                  revalidateInBackground: !1 !== u.revalidateInBackground,
                  skipBackgroundRefresh: !0 === u.skipBackgroundRefresh,
                })
              );
            case 3:
              return (s = e.sent), d(s), e.abrupt("return", s);
            case 6:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function w() {
  return (w = r(
    e().mark(function r(a, s) {
      var i, o, p, l, m, g, f, h, b, v, A, T;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if ((i = R(a))) {
                  e.next = 3;
                  break;
                }
                return e.abrupt("return", {
                  ready: !1,
                  errorMessage: "PRESET_ID_REQUIRED",
                  detail: null,
                  structure: [],
                });
              case 3:
                return (
                  (o = s && "object" === t(s) ? s : {}),
                  (p = !0 === o.allowLegacyBootstrapFallback),
                  (e.prev = 5),
                  (l = null),
                  (e.prev = 7),
                  (e.next = 10),
                  u(i, {
                    timeoutMs: o.remoteTimeoutMs,
                    forceRemote: !0 === o.forceRemote,
                    recommendLimit: o.recommendLimit,
                  })
                );
              case 10:
                if (
                  ((m = e.sent),
                  (g = Array.isArray(m && m.beadTypes)
                    ? m.beadTypes
                    : Array.isArray(m && m.materials)
                    ? m.materials
                    : []).length && d({ beadTypes: g }),
                  !(f = k(m, o)))
                ) {
                  e.next = 17;
                  break;
                }
                return y(f), e.abrupt("return", f);
              case 17:
                e.next = 22;
                break;
              case 19:
                (e.prev = 19), (e.t0 = e.catch(7)), (l = e.t0);
              case 22:
                if (p) {
                  e.next = 24;
                  break;
                }
                return e.abrupt("return", {
                  ready: !1,
                  errorMessage: String(
                    (l && (l.message || l.code)) ||
                      "PRESET_AGGREGATE_UNAVAILABLE"
                  ),
                  detail: null,
                  structure: [],
                });
              case 24:
                return (
                  (e.next = 26),
                  n({
                    forceRemote: !0 === o.forceRemote,
                    revalidateInBackground: !1 !== o.revalidateInBackground,
                    skipBackgroundRefresh: !0 === o.skipBackgroundRefresh,
                  })
                );
              case 26:
                if (
                  ((h = e.sent),
                  (b = Array.isArray(h && h.presets) ? h.presets : []),
                  (v = b.find(function (e) {
                    return String((e && e.id) || "").trim() === i;
                  })))
                ) {
                  e.next = 31;
                  break;
                }
                return e.abrupt("return", {
                  ready: !1,
                  errorMessage: "PRESET_NOT_FOUND",
                  detail: null,
                  structure: [],
                });
              case 31:
                if (((A = I(v, o)), (T = c(v, A)))) {
                  e.next = 35;
                  break;
                }
                return e.abrupt("return", {
                  ready: !1,
                  errorMessage: "PRESET_PATTERN_INVALID",
                  detail: null,
                  structure: [],
                });
              case 35:
                return (
                  y(T),
                  e.abrupt(
                    "return",
                    Object.assign({ ready: !0, errorMessage: "" }, T)
                  )
                );
              case 39:
                return (
                  (e.prev = 39),
                  (e.t1 = e.catch(5)),
                  e.abrupt("return", {
                    ready: !1,
                    errorMessage: String(
                      (e.t1 && (e.t1.message || e.t1.code)) ||
                        "PRESET_LOAD_FAILED"
                    ),
                    detail: null,
                    structure: [],
                  })
                );
              case 42:
              case "end":
                return e.stop();
            }
        },
        r,
        null,
        [
          [5, 39],
          [7, 19],
        ]
      );
    })
  )).apply(this, arguments);
}
function B() {
  return (B = r(
    e().mark(function r(a, n) {
      var u, i, o;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if ((u = R(a))) {
                  e.next = 3;
                  break;
                }
                return e.abrupt("return", {
                  ready: !1,
                  errorMessage: "PRESET_ID_REQUIRED",
                  liveMedia: [],
                  productPhotos: [],
                });
              case 3:
                return (
                  (i = n && "object" === t(n) ? n : {}),
                  (e.prev = 4),
                  (e.next = 7),
                  s(u, {
                    timeoutMs: i.remoteTimeoutMs || i.timeoutMs,
                    forceRemote: !0 === i.forceRemote,
                  })
                );
              case 7:
                return (
                  (o = e.sent),
                  e.abrupt(
                    "return",
                    Object.assign(
                      {
                        ready: !0,
                        errorMessage: "",
                        liveMedia: [],
                        productPhotos: [],
                      },
                      o || {}
                    )
                  )
                );
              case 11:
                return (
                  (e.prev = 11),
                  (e.t0 = e.catch(4)),
                  e.abrupt("return", {
                    ready: !1,
                    errorMessage: String(
                      (e.t0 && (e.t0.message || e.t0.code)) ||
                        "PRESET_MEDIA_LOAD_FAILED"
                    ),
                    liveMedia: [],
                    productPhotos: [],
                  })
                );
              case 14:
              case "end":
                return e.stop();
            }
        },
        r,
        null,
        [[4, 11]]
      );
    })
  )).apply(this, arguments);
}
function N() {
  return (N = r(
    e().mark(function r(t, a, n) {
      var u;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if ((u = R(t))) {
                  e.next = 3;
                  break;
                }
                return e.abrupt("return", {
                  counted: !1,
                  viewCount: 0,
                  errorMessage: "PRESET_ID_REQUIRED",
                });
              case 3:
                return (e.prev = 3), (e.next = 6), i(u, a, n);
              case 6:
                return e.abrupt("return", e.sent);
              case 9:
                return (
                  (e.prev = 9),
                  (e.t0 = e.catch(3)),
                  e.abrupt("return", {
                    counted: !1,
                    viewCount: 0,
                    errorMessage: String(
                      (e.t0 && (e.t0.message || e.t0.code)) ||
                        "PRESET_VIEW_REPORT_FAILED"
                    ),
                  })
                );
              case 12:
              case "end":
                return e.stop();
            }
        },
        r,
        null,
        [[3, 9]]
      );
    })
  )).apply(this, arguments);
}
module.exports = {
  sanitizePresetId: R,
  hydrateProductStructureByPattern: function (e, r, t) {
    return x.apply(this, arguments);
  },
  loadProductDetailById: function (e, r) {
    return w.apply(this, arguments);
  },
  loadProductMediaById: function (e, r) {
    return B.apply(this, arguments);
  },
  reportProductPresetView: function (e, r, t) {
    return N.apply(this, arguments);
  },
  resolveProductPatternMaterialMap: _,
  ensureProductRuntimeCatalog: function (e) {
    return S.apply(this, arguments);
  },
};
