var t = require("../../../../../../@babel/runtime/helpers/typeof"),
  e = require("../../../deps/runtime-deps"),
  a = e.preloadAssetPaths,
  r = e.logger;
function i(e, r, i) {
  var n = Array.isArray(r)
    ? r.filter(function (t, e, a) {
        return "string" == typeof t && t && a.indexOf(t) === e;
      })
    : [];
  if (!n.length) return Promise.resolve(!1);
  var s = i && "object" === t(i) ? i : {},
    o = s.priority || "P2",
    u = s.scope || "asset-warmup",
    l = String(s.reason || "asset_warmup").trim() || "asset_warmup",
    c = (function (t, e) {
      for (
        var a = Array.isArray(t) ? t : [],
          r = Math.max(1, Number(e) || 6),
          i = [],
          n = 0;
        n < a.length;
        n += r
      )
        i.push(a.slice(n, n + r));
      return i;
    })(n, s.chunkSize || 6),
    d =
      e && "function" == typeof e.scheduleDiyResourceTask
        ? e.scheduleDiyResourceTask.bind(e)
        : null,
    h = c.map(function (t, r) {
      var i = function (r) {
        return a(t, null, {
          persist: !0,
          concurrency: Math.max(1, Number(s.concurrency) || 2),
          cancelToken: r && r.token,
          shouldStop:
            r && "function" == typeof r.isCancelled
              ? function () {
                  return r.isCancelled();
                }
              : null,
        }).then(function () {
          return (
            "function" == typeof e.refreshCachedMediaUrls &&
              e.refreshCachedMediaUrls(),
            !0
          );
        });
      };
      return d
        ? d({
            priority: o,
            type: "image-download",
            scope: u,
            dedupeKey: "asset-warmup:"
              .concat(l, ":")
              .concat(r, ":")
              .concat(t.join("|")),
            delayMs:
              Math.max(0, Number(s.delayMs) || 0) +
              r * Math.max(16, Number(s.staggerMs) || 64),
            requiresQuiet: !1 !== s.requiresQuiet,
            timeoutMs: Math.max(3e3, Number(s.timeoutMs) || 12e3),
            run: i,
          })
        : i();
    });
  return Promise.all(h)
    .then(function () {
      return !0;
    })
    .catch(function () {
      return !1;
    });
}
module.exports = {
  preloadAssets: function (e) {
    var n = this,
      s = e && "object" === t(e) ? e : {},
      o = !0 === s.force;
    if (
      (!0 !== this._pageHidden || !0 === s.allowWhenHidden) &&
      (!this._preloadStarted || o)
    ) {
      var u = Date.now(),
        l = this.catalogSnapshot || {},
        c = l.trayBgs || [],
        d = l.beadTypes || [],
        h = [],
        p = [],
        f = [],
        m = [],
        y = [],
        g = Array.isArray(this.data.homeSlides) ? this.data.homeSlides : [],
        v = String(s.reason || "")
          .trim()
          .toLowerCase(),
        b = String((this.data && this.data.activeTab) || "")
          .trim()
          .toLowerCase(),
        A = "startup" === v,
        M = v.indexOf("diy") >= 0 || "diy" === b,
        w = Math.max(
          Number(this._diyEntryMotionPriorityUntil || 0),
          Number(this._manualBeadActionPriorityUntil || 0)
        );
      if (!o && M && w > Date.now()) {
        var P = Math.max(180, w - Date.now() + 120);
        ("function" == typeof this.setManagedTimeout
          ? this.setManagedTimeout.bind(this)
          : setTimeout)(function () {
          n.preloadAssets(
            Object.assign({}, s, { reason: v || "diy_priority_retry" })
          );
        }, P);
      } else {
        this._preloadStarted = !0;
        var _ = u,
          T = A
            ? Math.max(0, Number(s.minShellMs) || 1800)
            : Math.max(0, Number(s.minShellMs) || 0),
          x = A ? Math.max(1200, Number(s.watchdogMs) || 3200) : 3600,
          C = M
            ? Math.max(
                6,
                Number(s.beadWarmupLimit) ||
                  ("diy_startup" === v ||
                  "diy_post_catalog" === v ||
                  "startup_standalone_diy" === v
                    ? 12
                    : 90)
              )
            : "post-bootstrap" === v
            ? 48
            : 18;
        c.forEach(function (t) {
          t.url && h.push(t.url);
        }),
          d.forEach(function (t) {
            (t.variants || []).forEach(function (t) {
              return p.push(t);
            });
          });
        var S = Array.isArray(this.data.presets) ? this.data.presets : [],
          L =
            Array.isArray(this.data.visibleFilteredPresets) &&
            this.data.visibleFilteredPresets.length
              ? this.data.visibleFilteredPresets
              : S.slice(0, 6);
        S.forEach(function (t) {
          t && t.previewUrl && f.push(t.previewUrl);
        });
        var N = L.filter(function (t) {
          return t && t.previewUrl;
        })
          .map(function (t) {
            return t.previewUrl;
          })
          .slice(0, 6);
        (Array.isArray(this.data.navTabs) ? this.data.navTabs : []).forEach(
          function (t) {
            t && t.activeIcon && m.push(t.activeIcon),
              t && t.inactiveIcon && m.push(t.inactiveIcon);
          }
        ),
          g.forEach(function (t, e) {
            t && t.image && 0 === e && y.push(t.image);
          });
        var U = function (t) {
            return t
              .filter(function (t) {
                return "string" == typeof t && t;
              })
              .filter(function (t, e, a) {
                return a.indexOf(t) === e;
              });
          },
          D = U(m.concat(y)).slice(0, 10),
          E = U(
            (Array.isArray(this.data.displayBeads)
              ? this.data.displayBeads
              : []
            ).map(function (t) {
              var e = t && t.activeBead ? t.activeBead : null;
              return e && (e.cardImage || e.listImgUrl || e.previewUrl || "");
            })
          ),
          B = U(E.length ? E : p).slice(0, C),
          k = U(m.concat(y).concat(h).concat(B).concat(f)),
          I = (A ? [] : k)
            .filter(function (t) {
              return -1 === D.indexOf(t);
            })
            .filter(function (t) {
              return -1 === N.indexOf(t);
            })
            .slice(0, 96),
          O = !(!this.data || !this.data.appLoaded),
          W =
            "function" == typeof this.setManagedTimeout
              ? this.setManagedTimeout.bind(this)
              : setTimeout,
          j = function () {
            var t = function () {
              O || n.setData({ appLoaded: !0 }),
                "function" == typeof n.setLoadingStage &&
                  n.setLoadingStage("interactive");
            };
            if (
              !!(
                n._standaloneDiyLoadingPending &&
                n.data &&
                n.data.isStandaloneDiy
              )
            )
              n._flushShellUnlockAfterDiyGate = t;
            else {
              var e = Date.now() - _,
                a = O ? 0 : Math.max(0, T - e),
                r = O ? 0 : 180,
                i = A && !O ? 160 : 0;
              W(t, Math.max(r, a) + i);
            }
          };
        if (!D.length)
          return (
            this.setData({ loadProgress: 100 }),
            "function" == typeof this.setLoadingStage &&
              this.setLoadingStage("shell_ready"),
            j(),
            I.length &&
              i(this, I, {
                reason: v || "no_critical_warmup",
                priority: M ? "P1" : "P2",
                scope: M ? "diy-startup" : "startup",
              }),
            void (
              "function" == typeof this.recordPerfEvent &&
              this.recordPerfEvent("preload_assets", u, {
                reason: v,
                activeTab: b,
                criticalCount: 0,
                warmupCount: I.length,
                beadWarmupLimit: C,
                beadWarmupCount: B.length,
                displayedBeadAssetCount: E.length,
                allBeadAssetCount: p.length,
                bgAssetCount: h.length,
                presetPreviewAssetCount: f.length,
              })
            )
          );
        var q = !1,
          F = null,
          R = null,
          z = -1,
          H = function () {
            if (!q) {
              (q = !0),
                F && (clearTimeout(F), (F = null)),
                R && (clearTimeout(R), (R = null)),
                "function" == typeof n.setLoadingStage &&
                  n.setLoadingStage("shell_ready"),
                n.setData({ loadProgress: 100 });
              "function" == typeof n.setManagedTimeout
                ? n.setManagedTimeout.bind(n)
                : setTimeout;
              "function" == typeof n.recordPerfEvent &&
                n.recordPerfEvent("preload_assets", u, {
                  reason: v,
                  activeTab: b,
                  criticalCount: D.length,
                  warmupCount: I.length,
                  beadWarmupLimit: C,
                  beadWarmupCount: B.length,
                  displayedBeadAssetCount: E.length,
                  allBeadAssetCount: p.length,
                  bgAssetCount: h.length,
                  presetPreviewAssetCount: f.length,
                }),
                j();
            }
          };
        (F = setTimeout(function () {
          r.warn("[preloadAssets] watchdog timeout, force appLoaded=true"), H();
        }, x)),
          (R = setTimeout(function () {
            r.info("[preloadAssets] fast unlock app shell"), H();
          }, 800)),
          a(
            D,
            function (t) {
              var e = t.progress;
              if (!q) {
                var a = Math.floor(100 * e);
                a !== z && ((z = a), n.setData({ loadProgress: a }));
              }
            },
            { persist: !0, concurrency: 4 }
          )
            .then(function () {
              H(),
                n.refreshCachedMediaUrls(),
                I.length &&
                  i(n, I, {
                    reason: v || "post_critical_warmup",
                    priority: M ? "P1" : "P2",
                    scope: M ? "diy-startup" : "startup",
                  });
            })
            .catch(function (t) {
              r.warn("[preloadAssets] critical preload failed", t), H();
            });
      }
    }
  },
  warmupInspirationAssets: function (e) {
    var a = e && "object" === t(e) ? e : {},
      r = Number(this.data && this.data.inspirationRenderLimit),
      n = Number.isFinite(r) && r > 0 ? Math.floor(r) : 6,
      s = Math.max(6, Number(a.limit) || n),
      o = (
        Array.isArray(this.data.filteredPresets) &&
        this.data.filteredPresets.length
          ? this.data.filteredPresets
          : Array.isArray(this.data.presets)
          ? this.data.presets
          : []
      )
        .filter(function (t) {
          return t && t.previewUrl;
        })
        .map(function (t) {
          return t.previewUrl;
        })
        .filter(function (t, e, a) {
          return "string" == typeof t && t && a.indexOf(t) === e;
        })
        .slice(0, s);
    o.length &&
      i(this, o, {
        reason: "inspiration_preview",
        priority: "P2",
        scope: "inspiration",
        chunkSize: 4,
      });
  },
};
