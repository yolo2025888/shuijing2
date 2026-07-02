var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../../@babel/runtime/helpers/typeof"),
  a = require("../../pages/index/modules/deps/trade-deps"),
  n =
    require("../../pages/index/modules/methods/navigation-coordinator").setCheckoutData,
  i = require("../../contracts/navigation/query-contract").appendQueryParams,
  s = require("../../utils/navigation/navigate-with-fallback").openDiyEntry,
  o = require("../../utils/diyEntrySession"),
  c = o.buildDiyEntrySessionId,
  u = o.saveDiyEntrySession,
  d = a.normalizePattern,
  m = a.normalizeBgIndex,
  l = a.getStructure,
  p = a.buildCheckoutData,
  h = a.formatDecimal,
  f = a.normalizeCartItems,
  b = a.playSound,
  g = a.resolveMaterialsByCodes,
  y = require("../../utils/catalog"),
  v = y.getKnownBeadType,
  _ = y.materialHasRenderableImage,
  S = y.mergeMaterialPreservingImages,
  I = y.mergeRuntimeBeadTypes,
  x = require("../../utils/diyRenderPlan").normalizeRenderPlan,
  T =
    require("../../pages/index/modules/storage/local-snapshot-cache").writeLocalCartSnapshot;
function k(e, t, a) {
  var n = e && "object" === r(e) ? e : null;
  if (!n) return !1;
  var o = a && "object" === r(a) ? a : {},
    m = d(o.pattern || []),
    l = x(o.renderPlan || o.render_plan, m),
    p = m.length ? c(t || "cart_diy") : "";
  p &&
    u({
      entryId: p,
      source: t,
      pattern: m,
      bgIndex: Number.isFinite(Number(o.bgIndex)) ? Number(o.bgIndex) : 0,
      name: String(o.name || "").trim(),
      materialMap: o.materialMap || o.materialSnapshot || {},
      materialSnapshot: o.materialSnapshot || o.materialMap || {},
      renderPlan: l,
    });
  var h = i("/pages/diy/index", {
    source: t || "standalone_diy_cart_domain",
    returnTab: "profile",
    entryId: p,
    sharedName: String(o.name || "").trim(),
    sharedBgIndex: Number.isFinite(Number(o.bgIndex)) ? Number(o.bgIndex) : "",
  });
  return s(h, t || "standalone_diy_cart_domain", "profile", {
    methods: ["navigateTo", "redirectTo", "reLaunch"],
    fallbackMethods: ["navigateTo", "redirectTo", "reLaunch"],
    onFailed: function () {
      "function" == typeof n.showToast &&
        n.showToast("打开 DIY 失败，请稍后重试");
    },
  });
}
function w(e) {
  if (!e || "object" !== r(e) || Array.isArray(e)) return {};
  var t = {};
  return (
    Object.keys(e).forEach(function (a) {
      var n = String(a || "").trim(),
        i = e[a];
      n && i && "object" === r(i) && !Array.isArray(i) && (t[n] = i);
    }),
    t
  );
}
function N(e) {
  T(f(e || []));
}
function j(e, t) {
  var a = e && "object" === r(e) ? e : {};
  (a._cartDeleteTombstones && "object" === r(a._cartDeleteTombstones)) ||
    (a._cartDeleteTombstones = Object.create(null));
  var n = Date.now() + 12e4,
    i = String((t && t.id) || "").trim(),
    s = (function (e) {
      var t = e && "object" === r(e) ? e : {},
        a = d(t.pattern);
      if (!a.length) return "";
      var n = Number.isFinite(Number(t.bgIndex)) ? Number(t.bgIndex) : 0,
        i = String(t.name || t.displayName || "").trim(),
        s = Number(t.timestamp || 0) || 0;
      return ""
        .concat(n, "|")
        .concat(i, "|")
        .concat(s, "|")
        .concat(a.join(","));
    })(t);
  i && (a._cartDeleteTombstones["id:".concat(i)] = n),
    s && (a._cartDeleteTombstones["key:".concat(s)] = n);
}
function A(e, t) {
  var r = w(t),
    a = {};
  return (
    d(e).forEach(function (e) {
      if (!a[e]) {
        var t = r[e];
        if (_(t)) a[e] = t;
        else {
          var n = v(e);
          _(n) && (a[e] = n);
        }
      }
    }),
    a
  );
}
function M(e, t) {
  var r = w(t);
  return Array.from(
    new Set(
      d(e).filter(function (e) {
        return !_(r[e]) && !_(v(e));
      })
    )
  );
}
function C(e, t) {
  var a = Array.isArray(t)
    ? t.filter(function (e) {
        return e && e.id;
      })
    : [];
  if (a.length) {
    I(a);
    var n = e && "object" === r(e) ? e : {},
      i =
        n.catalogSnapshot && "object" === r(n.catalogSnapshot)
          ? n.catalogSnapshot
          : {},
      s = Array.isArray(i.beadTypes) ? i.beadTypes : [],
      o = Object.create(null),
      c = [];
    s.forEach(function (e) {
      if (e && e.id) {
        var t = String(e.id);
        o[t] || c.push(t), (o[t] = S(o[t], e));
      }
    }),
      a.forEach(function (e) {
        var t = String(e.id);
        o[t] || c.push(t), (o[t] = S(o[t], e));
      }),
      (n.catalogSnapshot = Object.assign({}, i, {
        beadTypes: c
          .map(function (e) {
            return o[e];
          })
          .filter(Boolean),
      })),
      "function" == typeof n.rehydrateTrayBeadImages &&
        n.rehydrateTrayBeadImages("pattern_material_assets"),
      "function" == typeof n.refreshStandaloneDiyPatternAfterMaterialsReady &&
        n.refreshStandaloneDiyPatternAfterMaterialsReady(
          "pattern_material_assets"
        );
  }
}
function O(e, t, r) {
  return D.apply(this, arguments);
}
function D() {
  return (D = t(
    e().mark(function t(a, n, i) {
      var s, o, c, u, d;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((s = i && "object" === r(i) ? i : {}),
                  (o = w(s.materialMap)),
                  (c = Object.keys(o)
                    .map(function (e) {
                      return Object.assign({ id: e }, o[e]);
                    })
                    .filter(_)),
                  C(a, c),
                  !(u = M(n, o)).length || "function" != typeof g)
                ) {
                  e.next = 15;
                  break;
                }
                return (
                  (e.prev = 6),
                  (e.next = 9),
                  g(u, {
                    preferCache: !1 !== s.preferCache,
                    forceRemote: !0 === s.forceRemote,
                    remoteTimeoutMs: s.remoteTimeoutMs || 2600,
                  })
                );
              case 9:
                (d = e.sent), C(a, d && d.beadTypes), (e.next = 15);
                break;
              case 13:
                (e.prev = 13), (e.t0 = e.catch(6));
              case 15:
                return e.abrupt("return", A(n, o));
              case 16:
              case "end":
                return e.stop();
            }
        },
        t,
        null,
        [[6, 13]]
      );
    })
  )).apply(this, arguments);
}
function P() {
  return {
    handleToggleCartItem: function (e) {
      var t = e.currentTarget.dataset.id,
        r = f(
          this.data.cartItems.map(function (e) {
            return e.id === t
              ? Object.assign({}, e, { checked: !e.checked })
              : e;
          })
        );
      this.setData({ cartItems: r }),
        N(r),
        this.persistCart(r),
        this.updateCartSummary(r),
        b("slide");
    },
    handleRemoveCartItem: function (e) {
      var t = e.currentTarget.dataset.id,
        r = this.data.cartItems.find(function (e) {
          return e.id === t;
        });
      r && j(this, r);
      var a = f(
        this.data.cartItems.filter(function (e) {
          return e.id !== t;
        })
      );
      this.setData({ cartItems: a }),
        N(a),
        this.persistCart(a),
        this.updateCartSummary(a),
        b("pop");
    },
    handleToggleAllCart: function () {
      var e =
          this.data.cartItems.length > 0 &&
          this.data.cartItems.every(function (e) {
            return e.checked;
          }),
        t = f(
          this.data.cartItems.map(function (t) {
            return Object.assign({}, t, { checked: !e });
          })
        );
      this.setData({ cartItems: t }),
        N(t),
        this.persistCart(t),
        this.updateCartSummary(t),
        b("slide");
    },
  };
}
module.exports = {
  createDomainActions: function () {
    return Object.freeze(
      Object.assign(
        {},
        {
          ensurePatternMaterialAssets: function (r, a) {
            var n = this;
            return t(
              e().mark(function t() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt("return", O(n, r, a));
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            )();
          },
          ensureCartMaterialAssets: function (r, a) {
            var n = this;
            return t(
              e().mark(function t() {
                var i, s, o;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((i = f(r || [])).length) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return", i);
                      case 3:
                        return (
                          (s = []),
                          i.forEach(function (e) {
                            d(e.pattern).forEach(function (e) {
                              return s.push(e);
                            });
                          }),
                          (e.next = 7),
                          O(n, s, a)
                        );
                      case 7:
                        return (
                          (o = e.sent),
                          e.abrupt(
                            "return",
                            i.map(function (e) {
                              return Object.assign({}, e, {
                                materialMap: A(
                                  e.pattern,
                                  Object.assign(
                                    {},
                                    w(e.materialMap || e.materialSnapshot),
                                    o
                                  )
                                ),
                              });
                            })
                          )
                        );
                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            )();
          },
          loadScheme: function (e, t, a, n, i) {
            var s = i && "object" === r(i) ? i : {},
              o =
                (this.catalogSnapshot && this.catalogSnapshot.beadTypes) || [],
              c = d(e);
            if (c.length) {
              var u = a ? a.name : n || "";
              if (a && "designer" === a.category) {
                var l = c.find(function (e) {
                  var t = o.find(function (t) {
                    return t.id === e;
                  });
                  return t && t.isPendant;
                });
                this.copyrightContext = {
                  source_designer_id:
                    a.sourceDesignerId || a.source_designer_id || a.id,
                  source_creator_work_id:
                    a.sourceCreatorWorkId ||
                    a.source_creator_work_id ||
                    a.creatorWorkId ||
                    a.creator_work_id ||
                    "",
                  source_inspiration_template_id:
                    a.sourceInspirationTemplateId ||
                    a.source_inspiration_template_id ||
                    a.id ||
                    "",
                  source_entry:
                    a.sourceEntry || a.source_entry || "designer_work",
                  original_pattern: c,
                  has_core_pendant: !!l,
                  original_pendant_id: l || null,
                };
              } else this.copyrightContext = null;
              var p = Array.isArray(this.data.trayBgs)
                  ? this.data.trayBgs.length
                  : 0,
                h = Number.isFinite(Number(t))
                  ? Number(t)
                  : Number(this.data.bgIndex || 0),
                f = p > 0 ? m(h, p) : h;
              p > 0 && (this.data.trayBgs[f] || this.data.trayBgs[0]),
                k(this, "standalone_diy_saved_scheme", {
                  pattern: c,
                  bgIndex: f,
                  name: u,
                  materialMap: a && (a.materialMap || a.materialSnapshot),
                  renderPlan: x(
                    s.renderPlan ||
                      s.render_plan ||
                      (a && (a.renderPlan || a.render_plan)),
                    c
                  ),
                });
            } else this.showToast("方案数据异常，已忽略");
          },
          handleAddNewScheme: function () {
            (this.copyrightContext = null),
              k(this, "standalone_diy_new_scheme");
          },
          handleLoadSavedScheme: function (r) {
            var a = this;
            return t(
              e().mark(function t() {
                var n, i, s;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((n = r.currentTarget.dataset.id),
                          (i = a.data.savedSchemes.find(function (e) {
                            return e.id === n;
                          })))
                        ) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt("return");
                      case 4:
                        return (
                          (e.next = 6),
                          a.ensurePatternMaterialAssets(i.pattern, {
                            materialMap: i.materialMap || i.materialSnapshot,
                          })
                        );
                      case 6:
                        (s = Number.isFinite(Number(i.bgIndex))
                          ? Number(i.bgIndex)
                          : 0),
                          a.loadScheme(i.pattern, s, null, i.name, {
                            renderPlan: i.renderPlan || i.render_plan,
                          });
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            )();
          },
          handleDeleteScheme: function (e) {
            var t = e.currentTarget.dataset.id,
              r = this.data.savedSchemes.filter(function (e) {
                return e.id !== t;
              });
            this.setData({ savedSchemes: r }), this.persistSchemes(r);
          },
          handleCartPreview: function (r) {
            var a = this;
            return t(
              e().mark(function t() {
                var i, s, o, c, u, f, b, g;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((i = r.currentTarget.dataset.id),
                          (s = a.data.cartItems.find(function (e) {
                            return e.id === i;
                          })))
                        ) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt("return");
                      case 4:
                        if ((o = d(s.pattern)).length) {
                          e.next = 8;
                          break;
                        }
                        return (
                          a.showToast("该购物项数据异常"), e.abrupt("return")
                        );
                      case 8:
                        return (
                          (e.next = 10),
                          a.ensurePatternMaterialAssets(o, {
                            materialMap: s.materialMap || s.materialSnapshot,
                          })
                        );
                      case 10:
                        (c = e.sent),
                          (u = m(
                            Number.isFinite(Number(s.bgIndex))
                              ? Number(s.bgIndex)
                              : a.data.bgIndex,
                            a.data.trayBgs.length
                          )),
                          (f = a.data.trayBgs[u] || a.data.currentTrayBg),
                          (b = Number(
                            s.itemOptionAmount ||
                              (s.selectedOptionSummary &&
                                s.selectedOptionSummary.amount) ||
                              0
                          )),
                          (g = p({
                            beadsOrPattern: o,
                            perim: s.perim,
                            price: s.price,
                            bgIndex: u,
                            mode: s.mode,
                            name: s.name,
                            userWrist: a.data.userWrist,
                            isPreview: !0,
                            structure: l(o),
                            bgUrl: f ? f.url : "",
                            materialMap: c,
                            selectedOptions: s.selectedOptions || {},
                            selectedOptionSummary:
                              s.selectedOptionSummary || {},
                          })),
                          n(
                            a,
                            Object.assign({}, g, {
                              itemOptionAmount: b,
                              itemOptionAmountText: h(b),
                              payableAmount: Number(s.price || 0) + b,
                              payableText: h(Number(s.price || 0) + b),
                            })
                          );
                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            )();
          },
        },
        P()
      )
    );
  },
  createCartItemActions: P,
};
