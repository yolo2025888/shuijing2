var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../../deps/runtime-deps"),
  s = r.saveSchemes,
  n = r.saveCartItems,
  i = r.logger;
function u(e) {
  if (void 0 === e) return "__undefined__";
  if (null === e) return "__null__";
  try {
    return JSON.stringify(e);
  } catch (t) {
    return String(e);
  }
}
module.exports = {
  ensurePersistState: function () {
    return (
      this._persistState ||
        (this._persistState = {
          schemes: {
            timer: null,
            inFlight: !1,
            queued: !1,
            authRecoveredOnce: !1,
            payload: null,
            queuedSignature: "",
            lastPersistedSignature: "",
          },
          cart: {
            timer: null,
            inFlight: !1,
            queued: !1,
            authRecoveredOnce: !1,
            payload: null,
            queuedSignature: "",
            lastPersistedSignature: "",
          },
        }),
      this._persistState
    );
  },
  isPersistAuthError: function (e) {
    if (!e) return !1;
    if (401 === Number(e.statusCode || 0)) return !0;
    var t = String(e.code || e.message || "").toUpperCase();
    return (
      t.indexOf("AUTH_TOKEN_REVOKED") >= 0 ||
      t.indexOf("AUTH_REFRESH_TOKEN_REVOKED") >= 0 ||
      t.indexOf("AUTH_INVALID") >= 0 ||
      t.indexOf("UNAUTHORIZED") >= 0
    );
  },
  schedulePersistTask: function (e, t, r) {
    var s = this,
      n = this.ensurePersistState()[e];
    if (n) {
      var i = u(t);
      if (
        n.inFlight ||
        n.queued ||
        i !== String(n.lastPersistedSignature || "")
      ) {
        (n.payload = t),
          (n.queuedSignature = i),
          (n.queued = !0),
          (n.authRecoveredOnce = !1),
          n.timer &&
            ("function" == typeof this.clearManagedTimeout
              ? this.clearManagedTimeout(n.timer)
              : clearTimeout(n.timer),
            (n.timer = null));
        var a =
          "function" == typeof this.setManagedTimeout
            ? this.setManagedTimeout.bind(this)
            : setTimeout;
        n.timer = a(function () {
          (n.timer = null), s.flushPersistTask(e, r);
        }, 800);
      }
    }
  },
  flushPersistTask: function (r, s) {
    var n = this;
    return t(
      e().mark(function t() {
        var a, c, o, l, d, h;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((a = n.ensurePersistState()),
                    (c = a[r]) && !c.inFlight && c.queued)
                  ) {
                    e.next = 4;
                    break;
                  }
                  return e.abrupt("return", { persisted: !1, skipped: !0 });
                case 4:
                  return (
                    (c.inFlight = !0),
                    (c.queued = !1),
                    (o = c.payload),
                    (l = String(c.queuedSignature || u(o))),
                    (d = !1),
                    (h = null),
                    (e.prev = 10),
                    (e.next = 13),
                    Promise.resolve(s(o))
                  );
                case 13:
                  (d = !0), (c.lastPersistedSignature = l), (e.next = 33);
                  break;
                case 17:
                  if (
                    ((e.prev = 17),
                    (e.t0 = e.catch(10)),
                    (h = e.t0 || null),
                    i.warn("Persist ".concat(r, " failed"), e.t0),
                    !(
                      n.isPersistAuthError(e.t0) &&
                      !c.authRecoveredOnce &&
                      "function" == typeof n.ensureLoginState
                    ))
                  ) {
                    e.next = 33;
                    break;
                  }
                  return (
                    (c.authRecoveredOnce = !0),
                    (e.prev = 24),
                    (e.next = 27),
                    n.ensureLoginState({ silent: !0, forceRefresh: !0 })
                  );
                case 27:
                  (c.queued = !0), (e.next = 33);
                  break;
                case 30:
                  (e.prev = 30),
                    (e.t1 = e.catch(24)),
                    i.warn("Persist ".concat(r, " auth recover failed"), e.t1);
                case 33:
                  return (
                    (e.prev = 33),
                    (c.inFlight = !1),
                    c.queued && n.flushPersistTask(r, s),
                    e.finish(33)
                  );
                case 37:
                  return e.abrupt("return", { persisted: d, error: h });
                case 38:
                case "end":
                  return e.stop();
              }
          },
          t,
          null,
          [
            [10, 17, 33, 37],
            [24, 30],
          ]
        );
      })
    )();
  },
  persistSchemes: function (e) {
    this.data.isLoggedIn && this.schedulePersistTask("schemes", e, s);
  },
  persistCart: function (e) {
    this.data.isLoggedIn && this.schedulePersistTask("cart", e, n);
  },
  flushPendingPersists: function () {
    var r = this;
    return t(
      e().mark(function t() {
        var i, u, a;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (i = r.ensurePersistState()),
                  Object.keys(i).forEach(function (e) {
                    var t = i[e];
                    t &&
                      t.timer &&
                      ("function" == typeof r.clearManagedTimeout
                        ? r.clearManagedTimeout(t.timer)
                        : clearTimeout(t.timer),
                      (t.timer = null));
                  }),
                  (e.next = 4),
                  r.flushPersistTask("schemes", s)
                );
              case 4:
                return (
                  (u = e.sent), (e.next = 7), r.flushPersistTask("cart", n)
                );
              case 7:
                return (
                  (a = e.sent),
                  e.abrupt("return", { schemesResult: u, cartResult: a })
                );
              case 9:
              case "end":
                return e.stop();
            }
        }, t);
      })
    )();
  },
};
