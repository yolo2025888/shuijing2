var e = require("../@babel/runtime/helpers/typeof"),
  n = require("../@babel/runtime/helpers/classCallCheck"),
  t = require("../@babel/runtime/helpers/createClass"),
  i = { P0: 0, P1: 1, P2: 2, P3: 3 },
  r = {
    generic: 1,
    "image-download": 2,
    "canvas-image": 1,
    "render-template": 1,
    "shape-shadow": 1,
    "strung-overlay": 1,
    "blindbox-ready": 1,
  },
  u = 1;
function o() {
  return Date.now();
}
function s(e) {
  var n = String(e || "")
    .trim()
    .toUpperCase();
  return Object.prototype.hasOwnProperty.call(i, n) ? n : "P2";
}
function a(e) {
  var n = s(e);
  return i[n];
}
function c(e, n, t, i) {
  if (e && "function" == typeof e.recordPerfEvent)
    try {
      e.recordPerfEvent(n, t, i || {});
    } catch (e) {}
}
function l(e, n, t) {
  var i = Math.max(0, Number(t) || 0);
  return e && "function" == typeof e.setManagedTimeout
    ? e.setManagedTimeout(n, i)
    : setTimeout(n, i);
}
function d(e, n) {
  n &&
    (e && "function" == typeof e.clearManagedTimeout
      ? e.clearManagedTimeout(n)
      : clearTimeout(n));
}
var h = (function () {
  function h(t, i) {
    n(this, h),
      (this.host = t || null),
      (this.options = i && "object" === e(i) ? i : {}),
      (this.queue = []),
      (this.running = []),
      (this.pendingByKey = Object.create(null)),
      (this.pauseReasons = Object.create(null)),
      (this.quietUntil = 0),
      (this.motionLockUntil = 0),
      (this.motionLockReason = ""),
      (this.cancelGeneration = 0),
      (this.pumpTimer = null),
      (this.closed = !1),
      (this.sequence = 0),
      (this.stats = {
        enqueued: 0,
        completed: 0,
        failed: 0,
        deduped: 0,
        upgraded: 0,
        cancelled: 0,
      });
  }
  return (
    t(h, [
      {
        key: "enqueue",
        value: function (n) {
          var t = n && "object" === e(n) ? n : {},
            i = t.run;
          if ("function" != typeof i) return Promise.resolve(!1);
          var c,
            l,
            h = s(t.priority),
            m =
              ((c = t.type),
              (l = String(c || "").trim()),
              Object.prototype.hasOwnProperty.call(r, l) ? l : "generic"),
            p = String(t.scope || "idle").trim() || "idle",
            y = String(t.dedupeKey || t.key || "").trim();
          if (y && this.pendingByKey[y]) {
            var f = this.pendingByKey[y];
            if (!!(!f.cancelToken || !f.cancelToken.cancelled)) {
              this.stats.deduped += 1;
              var g = !1;
              a(h) < a(f.priority) &&
                ((f.priority = h), (f.rank = a(h)), (g = !0)),
                !1 === t.requiresQuiet &&
                  !1 !== f.requiresQuiet &&
                  ((f.requiresQuiet = !1), (g = !0)),
                !1 === t.cancelOnHidden &&
                  !1 !== f.cancelOnHidden &&
                  ((f.cancelOnHidden = !1), (g = !0)),
                !0 === t.allowDuringMotion &&
                  !0 !== f.allowDuringMotion &&
                  ((f.allowDuringMotion = !0), (g = !0));
              var k = o() + Math.max(0, Number(t.delayMs) || 0);
              k < f.runAfter && ((f.runAfter = k), (g = !0));
              var v = Math.max(0, Number(t.timeoutMs) || 0);
              return (
                v > f.timeoutMs && (f.timeoutMs = v),
                g &&
                  ((f.upgrades += 1),
                  (this.stats.upgraded += 1),
                  this.sortQueue(),
                  this.pumpTimer &&
                    (d(this.host, this.pumpTimer), (this.pumpTimer = null)),
                  this.schedulePump(0)),
                f.allowDuringMotion &&
                  this.pumpTimer &&
                  (d(this.host, this.pumpTimer),
                  (this.pumpTimer = null),
                  this.schedulePump(0)),
                f.deferred.promise
              );
            }
            delete this.pendingByKey[y];
          }
          var M,
            T = (function () {
              var e = {};
              return (
                (e.promise = new Promise(function (n, t) {
                  (e.resolve = n), (e.reject = t);
                })),
                e
              );
            })(),
            b = {
              id: t.id || "diy_res_".concat(u++),
              sequence: this.sequence++,
              key: String(t.key || y || "").trim(),
              dedupeKey: y,
              priority: h,
              rank: a(h),
              type: m,
              scope: p,
              run: i,
              requiresQuiet: !1 !== t.requiresQuiet && "P0" !== h,
              cancelOnHidden: !1 !== t.cancelOnHidden,
              createdAt: o(),
              runAfter: o() + Math.max(0, Number(t.delayMs) || 0),
              timeoutMs: Math.max(0, Number(t.timeoutMs) || 15e3),
              allowDuringMotion: !0 === t.allowDuringMotion || "P0" === h,
              cancelToken:
                ((M = this.cancelGeneration),
                { generation: Number(M) || 0, cancelled: !1, reason: "" }),
              deferred: T,
              upgrades: 0,
            };
          return (
            this.queue.push(b),
            y && (this.pendingByKey[y] = b),
            (this.stats.enqueued += 1),
            this.sortQueue(),
            b.allowDuringMotion &&
              this.pumpTimer &&
              (d(this.host, this.pumpTimer), (this.pumpTimer = null)),
            this.schedulePump(Math.max(0, Number(t.delayMs) || 0)),
            T.promise
          );
        },
      },
      {
        key: "defer",
        value: function (n, t, i) {
          var r = i && "object" === e(i) ? i : {};
          return this.enqueue(
            Object.assign({}, r, {
              run: n,
              delayMs: t,
              priority: r.priority || "P2",
              type: r.type || "generic",
              scope: r.scope || "idle",
            })
          );
        },
      },
      {
        key: "setPaused",
        value: function (e, n) {
          var t = String(e || "default").trim() || "default";
          !0 === n ? (this.pauseReasons[t] = !0) : delete this.pauseReasons[t],
            c(this.host, "diy_resource_pause", o(), {
              reason: t,
              paused: !0 === n,
              pauseReasons: Object.keys(this.pauseReasons),
              queued: this.queue.length,
              running: this.running.length,
            }),
            this.schedulePump(120);
        },
      },
      {
        key: "extendQuietWindow",
        value: function (e) {
          var n = Number(e) || 0,
            t = n > o() ? n : o() + Math.max(0, n);
          (this.quietUntil = Math.max(Number(this.quietUntil || 0), t)),
            this.host &&
              (this.host._nonCriticalTaskQuietUntil = Math.max(
                Number(this.host._nonCriticalTaskQuietUntil || 0),
                this.quietUntil
              )),
            this.schedulePump(120);
        },
      },
      {
        key: "extendMotionLock",
        value: function (e, n) {
          var t = Number(e) || 0,
            i = t > o() ? t : o() + Math.max(0, t),
            r = Math.max(Number(this.motionLockUntil || 0), i),
            u = String(n || "motion").trim() || "motion";
          if (
            r <= Number(this.motionLockUntil || 0) &&
            this.motionLockReason === u
          )
            this.schedulePump(120);
          else {
            (this.motionLockUntil = r),
              (this.motionLockReason = u),
              (this.cancelGeneration += 1),
              this.host &&
                ((this.host._diyMotionLockUntil = Math.max(
                  Number(this.host._diyMotionLockUntil || 0),
                  this.motionLockUntil
                )),
                (this.host._diyMotionLockReason = u),
                (this.host._diyResourceCancelGeneration =
                  this.cancelGeneration));
            var s = 0;
            this.running.forEach(function (e) {
              e &&
                !e.allowDuringMotion &&
                e.cancelToken &&
                !e.cancelToken.cancelled &&
                ((e.cancelToken.cancelled = !0),
                (e.cancelToken.reason = u),
                (s += 1));
            }),
              s > 0 && (this.stats.cancelled += s),
              c(this.host, "diy_resource_motion_lock", o(), {
                reason: u,
                until: this.motionLockUntil,
                running: this.running.length,
                cancelledRunning: s,
                queued: this.queue.length,
                generation: this.cancelGeneration,
              }),
              this.schedulePump(120);
          }
        },
      },
      {
        key: "getMotionLockDelay",
        value: function (e) {
          if (!e || e.allowDuringMotion) return 0;
          var n = this.host,
            t =
              Math.max(
                Number(this.motionLockUntil || 0),
                Number((n && n._diyMotionLockUntil) || 0)
              ) - o();
          return t > 0 ? Math.max(120, t) : 0;
        },
      },
      {
        key: "getPauseDelay",
        value: function (e) {
          if (!e) return 0;
          if (this.closed) return -1;
          var n = this.host;
          if (n && !0 === n._pageHidden && e.cancelOnHidden) return 120;
          if (Object.keys(this.pauseReasons).length) return 120;
          var t = this.getMotionLockDelay(e);
          if (t > 0) return t;
          if (e.requiresQuiet) {
            var i = Number((n && n._nonCriticalTaskQuietUntil) || 0),
              r = Math.max(Number(this.quietUntil || 0), i) - o();
            if (r > 0) return Math.max(120, r);
            var u = Number((n && n._manualBeadActionPriorityUntil) || 0);
            if (u > o()) return Math.max(120, u - o());
            var s = Number((n && n._strungActionPriorityUntil) || 0);
            if (s > o()) return Math.max(120, s - o());
            var a = Number((n && n._diyEntryMotionPriorityUntil) || 0);
            if (a > o()) return Math.max(120, a - o());
            if (
              (function (e) {
                var n = (function (e) {
                  if (!e || "function" != typeof e.trayComp) return null;
                  try {
                    return e.trayComp();
                  } catch (e) {
                    return null;
                  }
                })(e);
                if (!n) return !1;
                if (n.dragState && n.dragState.active) return !0;
                if (n.blindBoxTimer) return !0;
                if (Number(n.animFrameRef) > 0) return !0;
                var t =
                  n && "function" == typeof n.getPerfNow ? n.getPerfNow() : o();
                return (
                  Number(n._motionFrameBudgetStressedUntil || 0) > t ||
                  !(
                    "function" != typeof n.isRenderAssetWarmupPaused ||
                    !n.isRenderAssetWarmupPaused()
                  ) ||
                  !!n._renderAssetWarmupPaused
                );
              })(n)
            )
              return 120;
          }
          return 0;
        },
      },
      {
        key: "getRunningCount",
        value: function (e) {
          return this.running.filter(function (n) {
            return n.type === e && !(n.cancelToken && n.cancelToken.cancelled);
          }).length;
        },
      },
      {
        key: "canStart",
        value: function (e) {
          if (!e) return !1;
          if (e.runAfter > o()) return !1;
          if (this.getPauseDelay(e) > 0) return !1;
          var n = r[e.type] || r.generic;
          return this.getRunningCount(e.type) < n;
        },
      },
      {
        key: "sortQueue",
        value: function () {
          this.queue.sort(function (e, n) {
            return e.rank !== n.rank
              ? e.rank - n.rank
              : e.runAfter !== n.runAfter
              ? e.runAfter - n.runAfter
              : e.sequence - n.sequence;
          });
        },
      },
      {
        key: "schedulePump",
        value: function (e) {
          var n = this;
          this.closed ||
            this.pumpTimer ||
            (this.pumpTimer = l(
              this.host,
              function () {
                (n.pumpTimer = null), n.pump();
              },
              Math.max(0, Number(e) || 0)
            ));
        },
      },
      {
        key: "pump",
        value: function () {
          if (!this.closed) {
            this.sortQueue();
            for (var e = !1, n = 0, t = 0; t < this.queue.length; t += 1) {
              var i = this.queue[t],
                r = i.runAfter - o();
              if (r > 0) n = n ? Math.min(n, r) : r;
              else {
                var u = this.getPauseDelay(i);
                u > 0
                  ? (n = n ? Math.min(n, u) : u)
                  : this.canStart(i) &&
                    (this.queue.splice(t, 1),
                    (t -= 1),
                    this.start(i),
                    (e = !0));
              }
            }
            this.queue.length && this.schedulePump(n || (e ? 0 : 120));
          }
        },
      },
      {
        key: "start",
        value: function (e) {
          var n = this;
          this.running.push(e);
          var t = o();
          c(this.host, "diy_resource_task_start", t, {
            id: e.id,
            priority: e.priority,
            type: e.type,
            scope: e.scope,
            dedupeKey: e.dedupeKey,
            queuedMs: Math.max(0, t - e.createdAt),
            upgrades: e.upgrades,
          });
          var i = null,
            r =
              e.timeoutMs > 0
                ? new Promise(function (t) {
                    i = l(
                      n.host,
                      function () {
                        return t("__timeout__");
                      },
                      e.timeoutMs
                    );
                  })
                : null,
            u = {
              token: e.cancelToken,
              isCancelled: function () {
                return !(!e.cancelToken || !e.cancelToken.cancelled);
              },
              generation: e.cancelToken
                ? e.cancelToken.generation
                : this.cancelGeneration,
            },
            s = Promise.resolve().then(function () {
              return e.run(u);
            });
          (r ? Promise.race([s, r]) : s)
            .then(function (i) {
              if ("__timeout__" === i)
                return (
                  e.cancelToken &&
                    ((e.cancelToken.cancelled = !0),
                    (e.cancelToken.reason = "timeout")),
                  (n.stats.failed += 1),
                  e.deferred.resolve(!1),
                  void c(n.host, "diy_resource_task_timeout", t, {
                    id: e.id,
                    type: e.type,
                    scope: e.scope,
                    timeoutMs: e.timeoutMs,
                  })
                );
              (n.stats.completed += 1),
                e.deferred.resolve(i),
                c(n.host, "diy_resource_task_finish", t, {
                  id: e.id,
                  priority: e.priority,
                  type: e.type,
                  scope: e.scope,
                  result: !1 !== i,
                  cancelled: !(!e.cancelToken || !e.cancelToken.cancelled),
                });
            })
            .catch(function (i) {
              (n.stats.failed += 1),
                e.deferred.resolve(!1),
                c(n.host, "diy_resource_task_error", t, {
                  id: e.id,
                  type: e.type,
                  scope: e.scope,
                  message: i && i.message ? i.message : String(i || ""),
                });
            })
            .finally(function () {
              i && d(n.host, i),
                (n.running = n.running.filter(function (n) {
                  return n !== e;
                })),
                e.dedupeKey &&
                  n.pendingByKey[e.dedupeKey] === e &&
                  delete n.pendingByKey[e.dedupeKey],
                n.schedulePump(0);
            });
        },
      },
      {
        key: "snapshot",
        value: function () {
          return {
            queued: this.queue.length,
            running: this.running.length,
            pauseReasons: Object.keys(this.pauseReasons),
            quietUntil: Number(this.quietUntil || 0),
            motionLockUntil: Number(this.motionLockUntil || 0),
            motionLockReason: this.motionLockReason || "",
            cancelGeneration: Number(this.cancelGeneration || 0),
            stats: Object.assign({}, this.stats),
            queuedByType: this.queue.reduce(function (e, n) {
              return (e[n.type] = (e[n.type] || 0) + 1), e;
            }, {}),
            runningByType: this.running.reduce(function (e, n) {
              return (e[n.type] = (e[n.type] || 0) + 1), e;
            }, {}),
          };
        },
      },
      {
        key: "cancelNonCritical",
        value: function (n, t) {
          var r = this,
            u = t && "object" === e(t) ? t : {},
            s =
              String(n || "non-critical-cancel").trim() ||
              "non-critical-cancel",
            a = !0 === u.includeAllowDuringMotion,
            l = Number.isFinite(Number(u.maxRank)) ? Number(u.maxRank) : i.P1,
            d = function (e) {
              return !!e && !(e.rank < l) && !(!a && e.allowDuringMotion);
            },
            h = 0;
          this.queue = this.queue.filter(function (e) {
            return (
              !d(e) ||
              (e.cancelToken &&
                !e.cancelToken.cancelled &&
                ((e.cancelToken.cancelled = !0), (e.cancelToken.reason = s)),
              e.deferred.resolve(!1),
              e.dedupeKey &&
                r.pendingByKey[e.dedupeKey] === e &&
                delete r.pendingByKey[e.dedupeKey],
              (h += 1),
              !1)
            );
          });
          var m = 0;
          return (
            this.running.forEach(function (e) {
              d(e) &&
                e.cancelToken &&
                !e.cancelToken.cancelled &&
                ((e.cancelToken.cancelled = !0),
                (e.cancelToken.reason = s),
                (m += 1));
            }),
            (h || m) &&
              ((this.stats.cancelled += h + m),
              c(this.host, "diy_resource_noncritical_cancel", o(), {
                reason: s,
                queued: h,
                running: m,
                includeAllowDuringMotion: a,
                maxRank: l,
              })),
            this.schedulePump(120),
            { queued: h, running: m }
          );
        },
      },
      {
        key: "clear",
        value: function (e) {
          var n = this;
          (this.closed = !0),
            this.pumpTimer &&
              (d(this.host, this.pumpTimer), (this.pumpTimer = null));
          var t = String(e || "clear").trim() || "clear";
          this.queue.forEach(function (e) {
            e.cancelToken &&
              ((e.cancelToken.cancelled = !0), (e.cancelToken.reason = t)),
              e.deferred.resolve(!1),
              e.dedupeKey &&
                n.pendingByKey[e.dedupeKey] === e &&
                delete n.pendingByKey[e.dedupeKey];
          }),
            (this.queue = []),
            this.running.forEach(function (e) {
              e &&
                e.cancelToken &&
                !e.cancelToken.cancelled &&
                ((e.cancelToken.cancelled = !0),
                (e.cancelToken.reason = t),
                (n.stats.cancelled += 1),
                e.dedupeKey &&
                  n.pendingByKey[e.dedupeKey] === e &&
                  delete n.pendingByKey[e.dedupeKey]);
            }),
            c(this.host, "diy_resource_scheduler_clear", o(), {
              reason: t,
              running: this.running.length,
            });
        },
      },
    ]),
    h
  );
})();
function m(e, n) {
  return new h(e, n);
}
function p(n) {
  return n && "object" === e(n)
    ? ((n._diyResourceScheduler && !n._diyResourceScheduler.closed) ||
        (n._diyResourceScheduler = m(n)),
      n._diyResourceScheduler)
    : null;
}
module.exports = {
  createDiyResourceScheduler: m,
  getDiyResourceScheduler: p,
  enqueueDiyResourceTask: function (e, n) {
    var t = p(e);
    return t ? t.enqueue(n) : Promise.resolve(!1);
  },
  setDiyResourcePause: function (e, n, t) {
    var i = p(e);
    i && i.setPaused(n, t);
  },
  extendDiyResourceQuietWindow: function (e, n, t) {
    var i = p(e);
    i && i.extendQuietWindow(n, t);
  },
  extendDiyResourceMotionLock: function (e, n, t) {
    var i = p(e);
    i && i.extendMotionLock(n, t);
  },
  cancelDiyResourceNonCritical: function (e, n, t) {
    var i = p(e);
    return i && "function" == typeof i.cancelNonCritical
      ? i.cancelNonCritical(n, t)
      : { queued: 0, running: 0 };
  },
};
