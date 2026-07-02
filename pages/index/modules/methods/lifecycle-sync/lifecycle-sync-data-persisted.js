var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../../../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../../../../@babel/runtime/helpers/typeof"),
  n = require("../../deps/lifecycle-deps"),
  s = n.normalizeSchemeItems,
  i = n.normalizeCartItems,
  c = n.loadSchemes,
  o = n.loadCartItems,
  u = n.logger,
  l = require("../../storage/local-snapshot-cache"),
  d = l.readLocalSchemesSnapshot,
  m = l.readLocalCartSnapshot,
  f = l.writeLocalCartSnapshot;
function h(e, t) {
  return (
    Array.isArray(t) &&
    t.length > 0 &&
    (!Array.isArray(e) || 0 === e.length || e.length < t.length)
  );
}
function p() {
  return m();
}
function y(e) {
  return String(e || "").trim();
}
function g(e) {
  var t = e && "object" === a(e) ? e : {},
    r = Array.isArray(t.pattern)
      ? t.pattern
          .map(function (e) {
            return String(e || "").trim();
          })
          .filter(Boolean)
      : [];
  if (!r.length) return "";
  var n = Number.isFinite(Number(t.bgIndex)) ? Number(t.bgIndex) : 0;
  return "".concat(n, "|").concat(r.join(","));
}
function b(e, t) {
  var r = Array.isArray(e) ? e : [];
  if (!r.length) return r;
  var n = (function (e) {
      var t = Array.isArray(e) ? e : [],
        r = Object.create(null),
        n = Object.create(null);
      return (
        t.forEach(function (e) {
          var t = e && "object" === a(e) ? e : {},
            s = y(t.previewUrl),
            i = y(t.snapshotUrl);
          if (s || i) {
            var c = String(t.id || "").trim(),
              o = g(t),
              u = { previewUrl: s || i, snapshotUrl: i || s };
            c && !r[c] && (r[c] = u), o && !n[o] && (n[o] = u);
          }
        }),
        { byId: r, byPattern: n }
      );
    })(t),
    s = n.byId || {},
    i = n.byPattern || {};
  return r.map(function (e) {
    var t = e && "object" === a(e) ? e : {},
      r = y(t.previewUrl),
      n = y(t.snapshotUrl);
    if (r || n) return t;
    var c = String(t.id || "").trim(),
      o = g(t),
      u = (c && s[c]) || (o && i[o]) || null;
    return u
      ? Object.assign({}, t, {
          previewUrl: u.previewUrl,
          snapshotUrl: u.snapshotUrl,
        })
      : t;
  });
}
function v(e, t) {
  var r = [],
    n = new Set(),
    i = function (e) {
      s(e || []).forEach(function (e) {
        var t = (function (e) {
          var t = e && "object" === a(e) ? e : {},
            r = String(t.clientId || t.client_id || "").trim();
          if (r) return "client:".concat(r);
          var n = String(t.id || "").trim();
          if (n) return "id:".concat(n);
          var s = g(t);
          if (!s) return "";
          var i = String(t.name || "").trim();
          return "pattern:".concat(i, "|").concat(s);
        })(e);
        t && !n.has(t) && (n.add(t), r.push(e));
      });
    };
  return i(e), i(t), r;
}
function S(e) {
  f(Array.isArray(e) ? e : []);
}
function A(e) {
  var t = e && "object" === a(e) ? e : {},
    r = (function (e) {
      return Array.isArray(e)
        ? e
            .map(function (e) {
              return String(e || "").trim();
            })
            .filter(Boolean)
        : [];
    })(t.pattern);
  if (!r.length) return "";
  var n = Number.isFinite(Number(t.bgIndex)) ? Number(t.bgIndex) : 0,
    s = String(t.name || t.displayName || "").trim(),
    i = Number(t.timestamp || 0) || 0;
  return "".concat(n, "|").concat(s, "|").concat(i, "|").concat(r.join(","));
}
function w(e, t) {
  var r = e && "object" === a(e) ? e : {},
    n =
      r._cartDeleteTombstones && "object" === a(r._cartDeleteTombstones)
        ? r._cartDeleteTombstones
        : null,
    s = i(t || []);
  if (!n) return s;
  var c = Date.now();
  return (
    Object.keys(n).forEach(function (e) {
      Number(n[e] || 0) <= c && delete n[e];
    }),
    Object.keys(n).length
      ? s.filter(function (e) {
          var t = String((e && e.id) || "").trim(),
            r = A(e);
          return !((t && n["id:".concat(t)]) || (r && n["key:".concat(r)]));
        })
      : s
  );
}
module.exports = {
  restoreLocalCartSnapshot: function () {
    var e = this,
      t = i((this.data && this.data.cartItems) || []),
      r = w(this, p());
    return (
      !!h(t, r) &&
      (this.setData({ cartItems: r }),
      this.updateCartSummary(r),
      "function" == typeof this.ensureCartMaterialAssets &&
        this.ensureCartMaterialAssets(r, {
          preferCache: !0,
          remoteTimeoutMs: 2600,
        })
          .then(function (t) {
            e.setData({ cartItems: t }), S(t), e.updateCartSummary(t);
          })
          .catch(function () {}),
      !0)
    );
  },
  loadPersistedData: function (n) {
    var i = this;
    return r(
      e().mark(function l() {
        var m, f, y, g, A;
        return e().wrap(function (l) {
          for (;;)
            switch ((l.prev = l.next)) {
              case 0:
                if (i.data.isLoggedIn) {
                  l.next = 3;
                  break;
                }
                return (
                  i.setData({ cartHydrating: !1, savedSchemesLoading: !1 }),
                  l.abrupt("return", !1)
                );
              case 3:
                if (
                  ((m = n && "object" === a(n) ? n : {}),
                  (f = !0 === m.force),
                  (y = Date.now()),
                  !i._persistedDataSyncPromise)
                ) {
                  l.next = 8;
                  break;
                }
                return l.abrupt("return", i._persistedDataSyncPromise);
              case 8:
                if (f) {
                  l.next = 13;
                  break;
                }
                if (
                  !(
                    (g = Number(i._persistedDataSyncedAt || 0)) > 0 &&
                    y - g < 45e3
                  )
                ) {
                  l.next = 13;
                  break;
                }
                return (
                  i.setData({ cartHydrating: !1, savedSchemesLoading: !1 }),
                  l.abrupt("return", !0)
                );
              case 13:
                return (
                  i.setData({ cartHydrating: !0, savedSchemesLoading: !0 }),
                  (A = (function () {
                    var a = r(
                      e().mark(function r() {
                        var a, n, l, m, f, y, g, A, D, I, j, C, _, x, M, P;
                        return e().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (a = s(i.data.savedSchemes || [])),
                                  (n = s(d())),
                                  (l = a.length ? a : n),
                                  (m = w(i, i.data.cartItems || [])),
                                  (f = w(i, p())),
                                  (y = m.length ? m : f),
                                  (e.next = 8),
                                  Promise.allSettled([
                                    i.withRetry(
                                      function () {
                                        return Promise.resolve(c());
                                      },
                                      { attempts: 2, delayMs: 200 }
                                    ),
                                    i.withRetry(
                                      function () {
                                        return Promise.resolve(o());
                                      },
                                      { attempts: 2, delayMs: 200 }
                                    ),
                                  ])
                                );
                              case 8:
                                if (
                                  ((g = e.sent),
                                  (A = t(g, 2)),
                                  (D = A[0]),
                                  (I = A[1]),
                                  "rejected" === D.status &&
                                    i.reportInitIssue("scheme_list", D.reason, {
                                      toast: !1,
                                      fallbackMessage: "方案列表加载失败",
                                    }),
                                  "rejected" === I.status &&
                                    i.reportInitIssue("cart_list", I.reason, {
                                      toast: !1,
                                      fallbackMessage: "购物车列表加载失败",
                                    }),
                                  "rejected" === D.status &&
                                    "rejected" === I.status &&
                                    i.reportInitIssue(
                                      "persisted_data",
                                      D.reason || I.reason,
                                      {
                                        toast: !0,
                                        fallbackMessage:
                                          "云端数据同步失败，已使用空状态继续",
                                      }
                                    ),
                                  (j =
                                    "fulfilled" === D.status ? s(D.value) : []),
                                  (C = j),
                                  (_ = "fulfilled" === I.status ? I.value : []),
                                  (C = v((C = b(C, l)), l)),
                                  (_ = w(i, _)),
                                  (r = j),
                                  (k = l),
                                  (x =
                                    (!Array.isArray(r) || 0 === r.length) &&
                                    Array.isArray(k) &&
                                    k.length > 0),
                                  (M = x || C.length > j.length),
                                  (P = h(_, y) ? y : null),
                                  x &&
                                    u.warn(
                                      "[persisted-data] cloud schemes empty after login, recovered local schemes",
                                      { count: C.length }
                                    ),
                                  P &&
                                    ((_ = P),
                                    u.warn(
                                      "[persisted-data] cloud cart empty after login, recovered local cart",
                                      { count: _.length }
                                    )),
                                  !_.length ||
                                    "function" !=
                                      typeof i.ensureCartMaterialAssets)
                                ) {
                                  e.next = 30;
                                  break;
                                }
                                return (
                                  (e.next = 29),
                                  i.ensureCartMaterialAssets(_, {
                                    preferCache: !0,
                                    remoteTimeoutMs: 2600,
                                  })
                                );
                              case 29:
                                _ = e.sent;
                              case 30:
                                return (
                                  i.setData({
                                    savedSchemes: C,
                                    cartItems: _,
                                    cartHydrating: !1,
                                    savedSchemesLoading: !1,
                                  }),
                                  i.data &&
                                    "my_designs" === i.data.profileSubView &&
                                    "function" ==
                                      typeof i.ensureMyDesignPreviewAssets &&
                                    i
                                      .ensureMyDesignPreviewAssets({
                                        preferCache: !0,
                                        remoteTimeoutMs: 3200,
                                      })
                                      .catch(function () {}),
                                  S(_),
                                  C.length &&
                                    (i.profileCoordinatorSyncSharePatternFromSchemes(
                                      C
                                    ),
                                    "function" ==
                                      typeof i.prewarmSavedSchemeShareCards &&
                                      i.prewarmSavedSchemeShareCards(C)),
                                  i.updateCartSummary(_),
                                  M && i.persistSchemes(C),
                                  P && i.persistCart(_),
                                  (i._persistedDataSyncedAt = Date.now()),
                                  e.abrupt("return", !0)
                                );
                              case 39:
                              case "end":
                                return e.stop();
                            }
                          var r, k;
                        }, r);
                      })
                    );
                    return function () {
                      return a.apply(this, arguments);
                    };
                  })()),
                  (i._persistedDataSyncPromise = A().finally(function () {
                    i.data &&
                      (i.data.cartHydrating || i.data.savedSchemesLoading) &&
                      i.setData({ cartHydrating: !1, savedSchemesLoading: !1 }),
                      (i._persistedDataSyncPromise = null);
                  })),
                  l.abrupt("return", i._persistedDataSyncPromise)
                );
              case 17:
              case "end":
                return l.stop();
            }
        }, l);
      })
    )();
  },
};
