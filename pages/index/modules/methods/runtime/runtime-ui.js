require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/typeof"),
  t = require("../../deps/runtime-deps"),
  r = t.playSound,
  i = t.warmupAudioEngine,
  a = t.preloadAssetPaths,
  n = t.getCachedAssetPath,
  o = t.formatDecimal,
  s = require("../lifecycle-bootstrap/bootstrap-preset-utils"),
  u = s.withAllSubCategory,
  l = s.isAllSubCategory,
  c = s.getMainCategoryFromAllSubCategory,
  m =
    require("../../../../../utils/diyRenderDeviceTier").resolveCurrentDiyRenderDeviceTier,
  d =
    require("../../../../../utils/diyTrayRenderImages").collectTrayRenderWarmupTargets;
function f(e, t) {
  var r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : t;
}
function y(t) {
  var r = t && "object" === e(t) ? t : {},
    i = {};
  return (
    Object.keys(r).forEach(function (t) {
      var a = r[t];
      if (
        /url|src|path|image/i.test(t) ||
        (function (e) {
          var t = String(e || "").trim();
          return (
            !!t &&
            (/(https?:\/\/|wxfile:\/\/|file:\/\/)/i.test(t) ||
              /(?:^|[:|,;\s\\/])assets[\\/]/i.test(t) ||
              /assets\/materials\//i.test(t) ||
              /stone_asset_cache/i.test(t))
          );
        })(a)
      )
        i[t] = "[redacted]";
      else if (null != a) {
        var n = e(a);
        "number" !== n && "boolean" !== n
          ? "string" !== n
            ? Array.isArray(a)
              ? (i[t] = "[array:".concat(a.length, "]"))
              : (i[t] = "[object]")
            : (i[t] = a.length > 160 ? "".concat(a.slice(0, 157), "...") : a)
          : (i[t] = a);
      } else i[t] = a;
    }),
    i
  );
}
function h(e) {
  try {
    if ("function" != typeof getApp) return [];
    var t = getApp(),
      r =
        t && t.globalData && Array.isArray(t.globalData.lastDiyPerfEvents)
          ? t.globalData.lastDiyPerfEvents
          : [];
    if (!r.length) return [];
    var i = Number.isFinite(Number(e))
      ? Math.max(1, Math.floor(Number(e)))
      : 20;
    return r.slice(-i);
  } catch (e) {
    return [];
  }
}
function p(e, t) {
  var r = Array.isArray(e) ? e : [];
  if (!r.length) return [];
  var i = Number.isFinite(Number(t)) ? Math.max(1, Math.floor(Number(t))) : 20;
  return r.slice(-i).map(function (e) {
    return y(e);
  });
}
function g(e) {
  try {
    if ("function" != typeof getApp) return {};
    var t = getApp(),
      r = t && t.globalData ? t.globalData : {},
      i = Number.isFinite(Number(e)) ? Math.max(1, Math.floor(Number(e))) : 10,
      a = Array.isArray(r.lastDiyLoadingPerfEvents)
        ? r.lastDiyLoadingPerfEvents.slice(-i)
        : [];
    return {
      lastDiyLoadingPerf: r.lastDiyLoadingPerf || null,
      lastDiyLoadingPerfEvents: a,
    };
  } catch (e) {
    return {};
  }
}
function b(t, r, i) {
  var a = Array.isArray(r && r.beadsRef) ? r.beadsRef : [],
    n = Number.isFinite(Number(i)) ? Math.max(1, Math.floor(Number(i))) : 12,
    o = Date.now(),
    s = [];
  a.forEach(function (e) {
    if (e && !0 === e.__manualPlaceholder) {
      var t = Number(e.__manualPlaceholderStartAt || 0),
        r = Number(e.__manualPlaceholderDeadlineAt || 0),
        i = Number(e.__manualPlaceholderLoadingSince || 0),
        a = Number(e.__manualPlaceholderResolvedAt || 0),
        n = {
          uid: String(e.uid || "").slice(0, 80),
          materialId: String(e.id || e.mat || "").slice(0, 80),
          variantIdx: Number.isFinite(Number(e.variantIdx))
            ? Number(e.variantIdx)
            : null,
          resolved: !0 === e.__manualPlaceholderResolved,
          loadingVisible: !0 === e.__manualPlaceholderLoadingVisible,
          fallbackUsed: !0 === e.__manualVariantFallback,
          elapsedMs: t > 0 ? Math.max(0, o - t) : 0,
          deadlineRemainingMs: r > 0 ? Math.max(0, r - o) : 0,
          deadlinePassed: r > 0 && o >= r,
          loadingElapsedMs: i > 0 ? Math.max(0, o - i) : 0,
          resolvedElapsedMs: t > 0 && a > 0 ? Math.max(0, a - t) : 0,
        };
      s.push(n);
    }
  });
  var u = s.filter(function (e) {
      return !0 !== e.resolved;
    }).length,
    l = s.filter(function (e) {
      return !0 === e.loadingVisible;
    }).length,
    c = s.filter(function (e) {
      return !0 === e.fallbackUsed;
    }).length,
    m =
      t &&
      t._manualPlaceholderDeadlineTimers &&
      "object" === e(t._manualPlaceholderDeadlineTimers)
        ? Object.keys(t._manualPlaceholderDeadlineTimers).length
        : 0;
  return {
    total: s.length,
    unresolvedCount: u,
    loadingVisibleCount: l,
    fallbackCount: c,
    timerCount: m,
    items: s.slice(-n),
  };
}
function v(e) {
  var t = e && e._diyResourceScheduler;
  if (!t || "function" != typeof t.snapshot) return null;
  try {
    return t.snapshot();
  } catch (e) {
    return null;
  }
}
function _(t) {
  return t && t._diyRenderDeviceTier && "object" === e(t._diyRenderDeviceTier)
    ? t._diyRenderDeviceTier
    : m();
}
function P(e, t, r) {
  var i = String(e || "").trim(),
    a = Number.isFinite(Number(t)) ? Number(t) : 0,
    n = Number.isFinite(Number(r && r.minPx)) ? Number(r.minPx) : -12,
    o = Number.isFinite(Number(r && r.maxPx)) ? Number(r.maxPx) : 10;
  if (!i) return "".concat(a, "px");
  if (/^-?\d+(\.\d+)?%$/.test(i)) {
    var s = Number(i.replace("%", ""));
    if (!Number.isFinite(s)) return "".concat(a, "px");
    if (Math.abs(s) > 20) return "".concat(a, "px");
    var u = 0.12 * s,
      l = Math.max(n, Math.min(o, u)),
      c = Math.round(10 * l) / 10;
    return "".concat(c, "px");
  }
  var m = (function (e, t) {
      var r = String(e || "").trim();
      if (!r)
        return "".concat(Number.isFinite(Number(t)) ? Number(t) : 0, "px");
      if (/^-?\d+(\.\d+)?px$/i.test(r)) return r.toLowerCase();
      if (/^-?\d+(\.\d+)?%$/.test(r)) return r;
      var i = Number(r);
      return Number.isFinite(i)
        ? "".concat(i, "px")
        : "".concat(Number.isFinite(Number(t)) ? Number(t) : 0, "px");
    })(i, a),
    d = Number(String(m).replace(/px$/i, "").trim());
  if (!Number.isFinite(d)) return "".concat(a, "px");
  var f = Math.max(n, Math.min(o, d)),
    y = Math.round(10 * f) / 10;
  return "".concat(y, "px");
}
function S(e, t, r) {
  var i = Number(e);
  return Number.isFinite(i) ? Math.max(t, Math.min(r, i)) : t;
}
function x(t) {
  var r = f(t && t.listImgScale, f(t && t.imgScale, 1)),
    i = (function (e) {
      var t = String((e && (e.materialType || e.type)) || "").toLowerCase(),
        r = String(
          (e && (e.class || (e.attrs && e.attrs.class))) || ""
        ).toLowerCase(),
        i = String((e && (e.category || e.subCategory)) || "").toLowerCase(),
        a = String(
          (e &&
            (e._displayMainCategory ||
              e.mainCategory ||
              e.main_category ||
              e.parentCategory ||
              e.parent_category)) ||
            ""
        ).toLowerCase(),
        n = "".concat(a, " ").concat(i, " ").concat(t, " ").concat(r);
      return Boolean(
        (e && (e.isPendant || e.hangsOutward || e.isSpacer)) ||
          t.includes("pendant") ||
          t.includes("spacer") ||
          r.includes("pendant") ||
          r.includes("spacer") ||
          n.includes("accessory") ||
          n.includes("accessories") ||
          n.includes("peishi") ||
          n.includes("pei_shi") ||
          n.includes("suixing") ||
          n.includes("sui_xing") ||
          n.includes("freeform") ||
          n.includes("irregular") ||
          i.includes("吊") ||
          i.includes("配饰") ||
          i.includes("随型") ||
          a.includes("配饰") ||
          a.includes("随型")
      );
    })(t),
    a = (function (e) {
      var t = String((e && (e.materialType || e.type)) || "").toLowerCase(),
        r = String(
          (e && (e.class || (e.attrs && e.attrs.class))) || ""
        ).toLowerCase(),
        i = String((e && (e.category || e.subCategory)) || "").toLowerCase(),
        a = String((e && e.id) || "").toLowerCase();
      return (
        -1 !== t.indexOf("pao_huan") ||
        -1 !== t.indexOf("running") ||
        -1 !== t.indexOf("runring") ||
        -1 !== r.indexOf("pao_huan") ||
        -1 !== r.indexOf("running") ||
        -1 !== i.indexOf("pao_huan") ||
        -1 !== i.indexOf("running") ||
        -1 !== i.indexOf("跑环") ||
        -1 !== a.indexOf("pao_huan")
      );
    })(t),
    n = Boolean(t && (t.hangsOutward || t.isPendant)),
    o = N(t),
    s = i
      ? (function (t, r, i, a) {
          var n = a && "object" === e(a) ? a : {},
            o = S(i, 0.9, 1.1),
            s = Number.isFinite(r) && r > 0 ? r : 10,
            u = 0.86;
          n.runningRingLike
            ? (u = 0.78)
            : n.hangingLike
            ? (u = 0.84)
            : t && t.isSpacer && (u = 0.82);
          var l = 1;
          if (s <= 10) {
            l = 1 - 0.22 * S((10 - s) / 10, 0, 0.5);
          } else {
            var c = s - 10;
            l = 1 + 0.18 * (1 - Math.exp(-c / 10));
          }
          return S(u * l * o, 0.68, 1.02);
        })(t, o, r, { runningRingLike: a, hangingLike: n })
      : (function (e, t) {
          var r = Number.isFinite(e) && e > 0 ? e : 10,
            i = S(t, 0.72, 1.04),
            a = 1;
          if (r <= 10) a = S(r / 10, 0.62, 1);
          else {
            var n = r - 10;
            a = 1 + 0.08 * (1 - Math.exp(-n / 8));
          }
          return S(a * i, 0.58, 1.08);
        })(o, r),
    u = (function (e) {
      var t = String(e || "").trim();
      if (!t) return "0%";
      if (/^-?\d+(\.\d+)?%$/.test(t)) return t;
      if (/^-?\d+(\.\d+)?px$/i.test(t)) return t.toLowerCase();
      var r = Number(t);
      return Number.isFinite(r) ? "".concat(r, "%") : "0%";
    })(t && t.visualOffsetX),
    l = P(t && t.visualOffsetY, i ? 0 : n ? -6 : 0, {
      minPx: i ? -6 : -12,
      maxPx: i ? 6 : n ? 8 : 10,
    });
  return "transform:translate("
    .concat(u, ", ")
    .concat(l, ") scale(")
    .concat(s.toFixed(3), ");");
}
function N(e) {
  var t = Number(e && (e.mm || e.beadMm));
  if (Number.isFinite(t) && t > 0) return t;
  var r = String((e && e.sizeStr) || "").match(/(\d+(?:\.\d+)?)/);
  if (r) {
    var i = Number(r[1]);
    if (Number.isFinite(i) && i > 0) return i;
  }
  return Number.POSITIVE_INFINITY;
}
function M(e, t) {
  var r = String(t || "").trim();
  return r && e && Object.prototype.hasOwnProperty.call(e, r)
    ? e[r]
    : Number.MAX_SAFE_INTEGER;
}
function D(e, t) {
  var r = String(t || "").trim();
  return r && e && Object.prototype.hasOwnProperty.call(e, r)
    ? e[r]
    : Number.MAX_SAFE_INTEGER;
}
function C(t, r) {
  if (!t || "object" !== e(t)) return m(r);
  var i =
    r && "object" === e(r)
      ? r
      : (function (t) {
          if (!t || "object" !== e(t)) return null;
          var r = "function" == typeof t.trayComp ? t.trayComp() : null,
            i =
              r && "function" == typeof r.getMotionFrameStats
                ? r.getMotionFrameStats()
                : null,
            a =
              r && "function" == typeof r.getPerfNow
                ? r.getPerfNow()
                : Date.now(),
            n = Number((r && r._motionFrameBudgetStressedUntil) || 0),
            o = Number((i && i.count) || 0),
            s = n > a,
            u =
              o >= 8 &&
              (Number((i && i.over25Ratio) || 0) >= 0.18 ||
                Number((i && i.over33Count) || 0) > 0 ||
                Number((i && i.maxSlowStreak) || 0) >= 2),
            l = s || u;
          l
            ? (t._diyRuntimeFramePressureCount =
                Number(t._diyRuntimeFramePressureCount || 0) + 1)
            : Number(t._diyRuntimeFramePressureCount || 0) > 0 &&
              (t._diyRuntimeFramePressureCount = Math.max(
                0,
                Number(t._diyRuntimeFramePressureCount || 0) - 1
              ));
          var c = Number(t._diyRuntimeFramePressureCount || 0);
          return (
            c >= 2 && (t._diyRuntimeFramePressureDowngraded = !0),
            {
              framePressure: c >= 2,
              recentFramePressure: !0 === t._diyRuntimeFramePressureDowngraded,
              currentFramePressure: l,
              framePressureCount: c,
              sampleCount: o,
              avgMs: Number((i && i.avgMs) || 0),
              maxMs: Number((i && i.maxMs) || 0),
              approxFps: Number((i && i.approxFps) || 0),
              over25Ratio: Number((i && i.over25Ratio) || 0),
              over33Count: Number((i && i.over33Count) || 0),
              maxSlowStreak: Number((i && i.maxSlowStreak) || 0),
              stressedUntil: n,
            }
          );
        })(t);
  if (!t._diyRenderDeviceTier || i) {
    var a = t._diyRenderDeviceTier && t._diyRenderDeviceTier.tier;
    (t._diyRenderDeviceTier = m(i)),
      "function" == typeof t.recordPerfEvent &&
        t.recordPerfEvent("diy_render_device_tier_resolved", Date.now(), {
          tier: t._diyRenderDeviceTier.tier,
          previousTier: a || "",
          platform: t._diyRenderDeviceTier.platform,
          benchmarkLevel: t._diyRenderDeviceTier.benchmarkLevel,
          memorySize: t._diyRenderDeviceTier.memorySize,
          loadingConcurrency: t._diyRenderDeviceTier.loadingConcurrency,
          runtimeDecodeConcurrency:
            t._diyRenderDeviceTier.runtimeDecodeConcurrency,
          framePressureCount: Number((i && i.framePressureCount) || 0),
          recentFramePressure: !(!i || !i.recentFramePressure),
        }),
      i &&
        i.framePressureCount >= 2 &&
        a &&
        a !== t._diyRenderDeviceTier.tier &&
        "function" == typeof t.recordPerfEvent &&
        t.recordPerfEvent("diy_runtime_frame_pressure", Date.now(), {
          previousTier: a,
          tier: t._diyRenderDeviceTier.tier,
          framePressureCount: Number(i.framePressureCount || 0),
          sampleCount: Number(i.sampleCount || 0),
          avgMs: Number(i.avgMs || 0),
          maxMs: Number(i.maxMs || 0),
          approxFps: Number(i.approxFps || 0),
          over25Ratio: Number(i.over25Ratio || 0),
          over33Count: Number(i.over33Count || 0),
          maxSlowStreak: Number(i.maxSlowStreak || 0),
        });
  }
  return t._diyRenderDeviceTier;
}
function T(t, r, i) {
  var a = r && "object" === e(r) ? r : {},
    n = Math.max(1, Number(a.runtimeVisibleMaterialLimit) || 8),
    o = Math.max(0, Number(i) || Number(a.runtimeNextScreenLimit) || 0);
  if (!o) return [];
  for (
    var s = [],
      u = Object.create(null),
      l = function (t) {
        if (t && "object" === e(t)) {
          var r =
            String(
              t.id || t.code || t.materialId || t.material_id || ""
            ).trim() || "".concat(s.length);
          u[r] || ((u[r] = !0), s.push(t));
        }
      },
      c = Array.isArray(t) ? t : [],
      m = n;
    m < c.length && s.length < o;
    m += 1
  ) {
    var f = c[m];
    if (f && f.activeBead) l(f.activeBead);
    else {
      var y = Array.isArray(f && f.items) ? f.items : [];
      y[0] && l(y[0]);
    }
  }
  return d(s, {
    materialLimit: o,
    totalImageCap: o,
    secondPassMaterialLimit: 0,
  });
}
function A(e, t, r) {
  for (
    var i = String(e || "diy-runtime").trim() || "diy-runtime",
      a = (Array.isArray(r) ? r : [])
        .map(function (e) {
          return String(e || "").trim();
        })
        .filter(Boolean)
        .slice(0, 16)
        .join("|"),
      n = 0,
      o = 0;
    o < a.length;
    o += 1
  )
    (n = (n << 5) - n + a.charCodeAt(o)), (n |= 0);
  return ""
    .concat(i, ":")
    .concat(Number(t || 0), ":")
    .concat(Math.abs(n));
}
function w(t) {
  if (!t || "object" !== e(t)) return "";
  if (!0 === t._pageHidden) return "hidden";
  var r = Date.now();
  if (Number(t._manualBeadActionPriorityUntil || 0) > r) return "manual_tap";
  if (t._blindBoxActionPending || t._blindBoxPresetPending) return "motion";
  if (
    t._currentStrungWarmupTask ||
    Number(t._strungActionPriorityUntil || 0) > r
  )
    return "motion";
  if (
    Number(t._diyMotionLockUntil || 0) > r ||
    Number(t._diyEntryMotionPriorityUntil || 0) > r
  )
    return "motion";
  var i = "function" == typeof t.trayComp ? t.trayComp() : null;
  if (i) {
    var a = "function" == typeof i.getPerfNow ? i.getPerfNow() : r;
    if (Number(i._motionFrameBudgetStressedUntil || 0) > a) return "motion";
    if (i.dragState && i.dragState.active) return "motion";
    if (i.blindBoxTimer) return "motion";
    if (
      "function" == typeof i.isRenderAssetWarmupPaused &&
      i.isRenderAssetWarmupPaused()
    )
      return "motion";
    if (i._renderAssetWarmupPaused) return "motion";
  }
  return "";
}
function R(e, t, r, i, a, n) {
  e &&
    "function" == typeof e.recordPerfEvent &&
    e.recordPerfEvent(t, r || Date.now(), {
      reason: String(i || "unknown").trim() || "unknown",
      tier: a && a.tier,
      mode: String(n || "").trim() || void 0,
    });
}
module.exports = {
  setLoadingStage: function (t, r) {
    var i = String(t || "").trim();
    if (i && String((this.data && this.data.loadingStage) || "").trim() !== i) {
      var a = Date.now(),
        n = Object.assign(
          { loadingStage: i, loadingStageStartedAt: a },
          r && "object" === e(r) ? r : {}
        );
      "shell_ready" === i &&
        ((n.shellReadyAt = a),
        "function" == typeof this.recordPerfEvent &&
          this.recordPerfEvent("shell_ready_ms", this._bootPerfStartedAt || a, {
            stage: i,
          })),
        "data_syncing" === i && (n.dataSyncingAt = a),
        "interactive" === i &&
          ((n.interactiveAt = a),
          "function" == typeof this.recordPerfEvent &&
            this.recordPerfEvent(
              "interactive_ready_ms",
              this._bootPerfStartedAt || a,
              { stage: i }
            )),
        this.setDataPatch(n);
    }
  },
  markFirstContentfulSection: function (t) {
    this._firstContentfulSectionMarked ||
      ((this._firstContentfulSectionMarked = !0),
      "function" == typeof this.recordPerfEvent &&
        this.recordPerfEvent(
          "first_contentful_section_ms",
          this._bootPerfStartedAt || Date.now(),
          Object.assign(
            {
              stage:
                String((this.data && this.data.loadingStage) || "").trim() ||
                "unknown",
            },
            t && "object" === e(t) ? t : {}
          )
        ));
  },
  recordPerfEvent: function (t, r, i) {
    var a = String(t || "").trim();
    if (a) {
      var n = Number(r),
        o = Number.isFinite(n) && n > 0 ? Math.max(0, Date.now() - n) : 0;
      Array.isArray(this._perfEvents) || (this._perfEvents = []);
      var s = y(
        Object.assign(
          { event: a, durationMs: o, at: Date.now() },
          i && "object" === e(i) ? i : {}
        )
      );
      this._perfEvents.push(s),
        this._perfEvents.length > 80 &&
          this._perfEvents.splice(0, this._perfEvents.length - 80),
        (function (e) {
          try {
            if ("function" != typeof getApp) return;
            var t = getApp();
            if (!t || !t.globalData) return;
            var r = Array.isArray(t.globalData.lastDiyPerfEvents)
                ? t.globalData.lastDiyPerfEvents
                : [],
              i = y(e);
            r.push(i),
              r.length > 120 && r.splice(0, r.length - 120),
              (t.globalData.lastDiyPerfEvents = r),
              (t.globalData.lastDiyPerfEvent = i),
              (t.globalData.lastDiyPerfEventsUpdatedAt = Date.now());
          } catch (e) {}
        })(s);
      var u = !1;
      try {
        if (
          "undefined" != typeof wx &&
          "function" == typeof wx.getStorageSync
        ) {
          var l = wx.getStorageSync("SL_DIY_PERF_DEBUG");
          u = !0 === l || "1" === l || "true" === l;
        }
      } catch (e) {
        u = !1;
      }
      (u || o >= 180) &&
        "undefined" != typeof console &&
        "function" == typeof console.info &&
        console.info("[index-perf]", a, "".concat(o, "ms"), s);
    }
  },
  getPerfEvents: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 20,
      t = Number.isFinite(Number(e)) ? Math.max(1, Math.floor(Number(e))) : 20;
    return Array.isArray(this._perfEvents) && this._perfEvents.length
      ? this._perfEvents.slice(-t)
      : h(t);
  },
  getDiyRuntimeDiagnostics: function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30,
      r = Number.isFinite(Number(t)) ? Math.max(1, Math.floor(Number(t))) : 30,
      i = "function" == typeof this.trayComp ? this.trayComp() : null,
      a =
        i && "function" == typeof i.getMotionFrameStats
          ? i.getMotionFrameStats()
          : null,
      n = v(this),
      o = _(this),
      s = b(this, i, Math.min(r, 12));
    return Object.assign(
      {
        capturedAt: Date.now(),
        route: String(this.route || this.__route__ || "").trim(),
        pageHidden: !0 === this._pageHidden,
        activeTab: String((this.data && this.data.activeTab) || "").trim(),
        renderDeviceTier: o,
        warmupBlockReason: w(this),
        warmupGeneration: Number(this._diyVisibleMaterialWarmupGeneration || 0),
        standaloneDiyGate: {
          pending: !0 === this._standaloneDiyLoadingPending,
          openedAt: Math.max(0, Number(this._standaloneDiyGateOpenedAt || 0)),
          minMaskMs: Math.max(0, Number(this._standaloneDiyGateMinMaskMs || 0)),
          waitForPatternReady: !0 === this._standaloneDiyWaitForPatternReady,
          stages: {
            tray: !0 === this._standaloneDiyTrayReady,
            catalog: !0 === this._standaloneDiyCatalogReady,
            layout: !0 === this._standaloneDiyLayoutReady,
            pattern: !0 === this._standaloneDiyPatternReady,
            geometry: !0 === this._standaloneDiyGeometryReady,
            blindbox: !0 === this._standaloneDiyBlindBoxReady,
          },
          stageTimes: Object.assign(
            {},
            this._standaloneDiyGateStageTimes || {}
          ),
        },
        manualPlaceholderTimerCount:
          this._manualPlaceholderDeadlineTimers &&
          "object" === e(this._manualPlaceholderDeadlineTimers)
            ? Object.keys(this._manualPlaceholderDeadlineTimers).length
            : 0,
        manualPlaceholders: s,
        scheduler: n,
        motionStats: a,
        perfEvents: p(this.getPerfEvents(r), r),
        globalPerfEvents: h(r),
      },
      g(Math.min(r, 10))
    );
  },
  setDataPatch: function (t, r) {
    var i = t && "object" === e(t) ? t : null;
    if (!i) return "function" == typeof r && r(), !1;
    var a = this.data && "object" === e(this.data) ? this.data : {},
      n = {},
      o = !1;
    return (
      Object.keys(i).forEach(function (e) {
        Object.is(a[e], i[e]) || ((n[e] = i[e]), (o = !0));
      }),
      o
        ? (this.setData(n, "function" == typeof r ? r : void 0), !0)
        : ("function" == typeof r && r(), !1)
    );
  },
  showToast: function (e) {
    var t = this;
    this.setDataPatch({ toast: e, toastVisible: !0 }),
      r("pop"),
      this.toastTimer &&
        ("function" == typeof this.clearManagedTimeout
          ? this.clearManagedTimeout(this.toastTimer)
          : clearTimeout(this.toastTimer)),
      "function" != typeof this.setManagedTimeout
        ? (this.toastTimer = setTimeout(function () {
            t.setDataPatch({ toastVisible: !1 });
          }, 2e3))
        : (this.toastTimer = this.setManagedTimeout(function () {
            t.setDataPatch({ toastVisible: !1 });
          }, 2e3));
  },
  updateCartSummary: function (e) {
    var t = (e || []).filter(function (e) {
        return e.checked;
      }),
      r = t.reduce(function (e, t) {
        return (
          e + Number(void 0 !== t.displayPrice ? t.displayPrice : t.price || 0)
        );
      }, 0);
    this.setDataPatch({
      checkedCartCount: t.length,
      checkedCartTotal: r,
      checkedCartTotalText: o(r),
    });
  },
  collectDiyWarmupImageUrls: function (t, r) {
    var i = r && "object" === e(r) ? r : {};
    if (Array.isArray(i.urls))
      return i.urls
        .map(function (e) {
          return String(e || "").trim();
        })
        .filter(Boolean);
    var a = [],
      n = function (e) {
        var t = String(e || "").trim();
        t && -1 === a.indexOf(t) && a.push(t);
      },
      o = this.data && this.data.currentTrayBg ? this.data.currentTrayBg : null;
    o && o.url && n(o.url);
    for (
      var s = Array.isArray(this.data && this.data.trayBgs)
          ? this.data.trayBgs
          : [],
        u = 0;
      u < s.length && a.length < 4;
      u += 1
    ) {
      var l = s[u];
      l && l.url && n(l.url);
    }
    var c = Array.isArray(this.data && this.data.displayBeads)
        ? this.data.displayBeads
        : [],
      m = C(this);
    return (
      ("next" === i.mode
        ? T(c, m, t || m.runtimeNextScreenLimit)
        : (function (t, r, i) {
            for (
              var a = r && "object" === e(r) ? r : {},
                n = Math.max(
                  1,
                  Number(i) || a.runtimeVisibleMaterialLimit || 8
                ),
                o = Math.max(1, Number(a.runtimePerMaterialLimit) || 1),
                s = Math.max(n, n * o),
                u = [],
                l = Object.create(null),
                c = function (t) {
                  if (t && "object" === e(t)) {
                    var r =
                      String(
                        t.id || t.code || t.materialId || t.material_id || ""
                      ).trim() || "".concat(u.length);
                    l[r] || ((l[r] = !0), u.push(t));
                  }
                },
                m = Array.isArray(t) ? t : [],
                f = function () {
                  var e = m[y],
                    t = e && e.activeBead ? e.activeBead : null;
                  t && c(t);
                  var r = Array.isArray(e && e.items) ? e.items : [];
                  if ((!t && r[0] && c(r[0]), o > 1 && r.length > 1)) {
                    var i = Math.max(0, Number(e && e.activeIndex) || 0);
                    [i - 1, i + 1].forEach(function (e) {
                      u.length < n && e >= 0 && e < r.length && c(r[e]);
                    });
                  }
                },
                y = 0;
              y < m.length && u.length < n;
              y += 1
            )
              f();
            return d(u, {
              materialLimit: n,
              totalImageCap: s,
              secondPassMaterialLimit: o > 1 ? n : 0,
            });
          })(c, m, t || m.runtimeVisibleMaterialLimit || 24)
      ).forEach(function (e) {
        return n(e && e.url);
      }),
      a
    );
  },
  prewarmDiyRuntimeResources: function (t) {
    var r = this,
      n = t && "object" === e(t) ? t : {},
      o = !0 === n.force,
      s = "next" === String(n.mode || "").trim() ? "next" : "visible",
      u =
        "next" === s
          ? "diy_next_material_warmup"
          : "diy_visible_material_warmup",
      l =
        "next" === s
          ? "diy_next_material_warmup_skip"
          : "diy_visible_material_warmup_skip";
    if (!0 === this._pageHidden && !0 !== n.allowWhenHidden)
      return R(this, l, Date.now(), "hidden", null, s), Promise.resolve(!1);
    var c = Date.now();
    if (
      !o &&
      !0 !== n.ignoreCooldown &&
      Number.isFinite(this._diyWarmupAt) &&
      c - this._diyWarmupAt < 9e4
    )
      return Promise.resolve(!1);
    var m = String(n.scope || "diy-runtime").trim() || "diy-runtime";
    if (
      ((this._diyWarmupPromisesByScope &&
        "object" === e(this._diyWarmupPromisesByScope)) ||
        (this._diyWarmupPromisesByScope = Object.create(null)),
      !o && !0 !== n.ignoreCooldown && this._diyWarmupPromisesByScope[m])
    )
      return this._diyWarmupPromisesByScope[m];
    if (
      !o &&
      !0 !== n.__scheduled &&
      "function" == typeof this.scheduleDiyResourceTask
    ) {
      var d = String(n.reason || "").trim() || "runtime",
        f = m,
        y = Array.isArray(n.urls) ? n.urls : null,
        h = Promise.resolve(
          this.scheduleDiyResourceTask({
            priority: n.priority || "P1",
            type: "image-download",
            scope: f,
            dedupeKey:
              n.dedupeKey ||
              (y
                ? A(
                    f,
                    n.cancelGeneration ||
                      this._diyVisibleMaterialWarmupGeneration ||
                      0,
                    y
                  )
                : "diy-runtime-warmup:"
                    .concat(d, ":")
                    .concat(
                      Number(this._diyVisibleMaterialWarmupGeneration || 0)
                    )),
            requiresQuiet: !1 !== n.requiresQuiet,
            cancelOnHidden: !0 !== n.allowWhenHidden,
            timeoutMs: Math.max(2500, Number(n.timeoutMs) || 4e3),
            run: function (e) {
              return r.prewarmDiyRuntimeResources(
                Object.assign({}, n, {
                  __scheduled: !0,
                  cancelToken: e && e.token,
                  schedulerCancelGeneration: e && e.generation,
                })
              );
            },
          })
        ).finally(function () {
          r._diyWarmupPromisesByScope &&
            r._diyWarmupPromisesByScope[f] === h &&
            delete r._diyWarmupPromisesByScope[f];
        });
      return (
        (this._diyWarmupPromisesByScope[f] = h), (this._diyWarmupPromise = h), h
      );
    }
    if (n.cancelToken && n.cancelToken.cancelled) return Promise.resolve(!1);
    var p = c,
      g = C(this, n.runtimeStats),
      b = !0 === n.allowDuringMotion ? "" : w(this);
    if (b) return R(this, l, p, b, g, s), Promise.resolve(!1);
    if (
      "next" === s &&
      (g.isLowAndroid || Number(g.runtimeNextScreenLimit || 0) <= 0)
    )
      return (
        R(this, l, p, "low_android_next_screen", g, s), Promise.resolve(!1)
      );
    "function" == typeof i && i();
    var v = this.collectDiyWarmupImageUrls(n.limit, { mode: s, urls: n.urls }),
      _ = Number(this._diyVisibleMaterialWarmupGeneration || 0);
    if (!Array.isArray(v) || !v.length)
      return R(this, l, p, "empty", g, s), Promise.resolve(!1);
    if (void 0 !== n.cancelGeneration && Number(n.cancelGeneration) !== _)
      return R(this, l, p, "stale_generation", g, s), Promise.resolve(!1);
    var P = null,
      S = null,
      x =
        Array.isArray(v) && v.length && "function" == typeof a
          ? a(v, null, {
              persist: !0,
              concurrency: g.runtimeDecodeConcurrency || 1,
              cancelToken: n.cancelToken,
              shouldStop: function () {
                return (
                  !(!n.cancelToken || !n.cancelToken.cancelled) ||
                  Number(r._diyVisibleMaterialWarmupGeneration || 0) !== _
                );
              },
            })
              .then(function (e) {
                return (P = e || null), e;
              })
              .catch(function () {
                return (P = { total: v.length, loaded: 0, failed: !0 });
              })
          : Promise.resolve({ total: 0, loaded: 0 }),
      N = Math.max(16, Number(n.retryDelayMs) || 80),
      M = Math.max(0, Number(n.retryCount) || 4),
      D = !1 !== n.retry,
      T = Promise.all([
        x,
        (function e(t) {
          if (n.cancelToken && n.cancelToken.cancelled)
            return Promise.resolve(!1);
          var i = "function" == typeof r.trayComp ? r.trayComp() : null;
          return i &&
            "function" == typeof i.preloadImageSet &&
            Array.isArray(v) &&
            v.length
            ? Promise.resolve(
                i.preloadImageSet(v, {
                  concurrency: g.runtimeDecodeConcurrency || 1,
                  cancelToken: n.cancelToken,
                  shouldStop: function () {
                    return (
                      !(!n.cancelToken || !n.cancelToken.cancelled) ||
                      Number(r._diyVisibleMaterialWarmupGeneration || 0) !== _
                    );
                  },
                })
              )
                .then(function (e) {
                  return (S = e || null), e;
                })
                .catch(function () {
                  return (S = { total: v.length, loaded: 0, failed: !0 });
                })
            : !D || t >= M
            ? Promise.resolve()
            : new Promise(function (i) {
                var a = function () {
                  e(t + 1).finally(i);
                };
                "function" == typeof r.setManagedTimeout
                  ? r.setManagedTimeout(a, N)
                  : setTimeout(a, N);
              });
        })(0),
      ])
        .then(function () {
          if (
            ((r._diyWarmupAt = Date.now()),
            "function" == typeof r.recordPerfEvent)
          ) {
            var e =
              !(!n.cancelToken || !n.cancelToken.cancelled) ||
              Number(r._diyVisibleMaterialWarmupGeneration || 0) !== _;
            r.recordPerfEvent(u, p, {
              tier: g.tier,
              targetCount: Array.isArray(v) ? v.length : 0,
              downloadedCount: Number((P && P.loaded) || 0),
              downloadCancelled: !(!P || !P.cancelled),
              decodeAttemptedCount: Number((S && S.loaded) || 0),
              decodedCount: Number(
                (S && (void 0 !== S.ready ? S.ready : S.loaded)) || 0
              ),
              decodeFailedCount: Number((S && S.failed) || 0),
              decodeCancelled: !(!S || !S.cancelled),
              cancelled: e,
              reason: String(n.reason || "").trim() || "unknown",
              mode: s,
            }),
              r.recordPerfEvent("diy_runtime_warmup", p, {
                tier: g.tier,
                urlCount: Array.isArray(v) ? v.length : 0,
                reason: String(n.reason || "").trim() || "unknown",
                force: o,
                retry: !1 !== n.retry,
                cancelled: e,
                activeTab:
                  String((r.data && r.data.activeTab) || "").trim() ||
                  "unknown",
                blindBoxPending: !!r._blindBoxPresetPending,
                blindBoxActionPending: !!r._blindBoxActionPending,
                currentStrungWarmupPending: !!r._currentStrungWarmupTask,
              });
          }
          return !0;
        })
        .finally(function () {
          r._diyWarmupPromisesByScope &&
            r._diyWarmupPromisesByScope[m] === T &&
            delete r._diyWarmupPromisesByScope[m],
            r._diyWarmupPromise === T && (r._diyWarmupPromise = null);
        });
    return (
      (this._diyWarmupPromisesByScope[m] = T), (this._diyWarmupPromise = T), T
    );
  },
  scheduleDiyVisibleMaterialWarmup: function (e) {
    var t = this;
    if (!0 !== this._pageHidden) {
      var r = C(this);
      this._diyVisibleMaterialWarmupGeneration =
        Number(this._diyVisibleMaterialWarmupGeneration || 0) + 1;
      var i = this._diyVisibleMaterialWarmupGeneration;
      this._diyVisibleMaterialWarmupTimer &&
        ("function" == typeof this.clearManagedTimeout
          ? this.clearManagedTimeout(this._diyVisibleMaterialWarmupTimer)
          : clearTimeout(this._diyVisibleMaterialWarmupTimer),
        (this._diyVisibleMaterialWarmupTimer = null));
      var a = r.isLowAndroid ? 260 : 140,
        n = function () {
          if (
            ((t._diyVisibleMaterialWarmupTimer = null),
            i === Number(t._diyVisibleMaterialWarmupGeneration || 0))
          ) {
            var a = w(t);
            if (a)
              return (
                R(
                  t,
                  "diy_visible_material_warmup_skip",
                  Date.now(),
                  a,
                  r,
                  "visible"
                ),
                void R(
                  t,
                  "diy_next_material_warmup_skip",
                  Date.now(),
                  a,
                  r,
                  "next"
                )
              );
            t.prewarmDiyRuntimeResources({
              reason: e || "visible_materials",
              priority: "P1",
              scope: "diy-visible-materials",
              requiresQuiet: !1,
              ignoreCooldown: !0,
              retry: !0,
              limit: r.runtimeVisibleMaterialLimit,
              timeoutMs: r.isLowAndroid ? 2500 : 3500,
              cancelGeneration: i,
            }),
              t.scheduleDiyNextScreenMaterialWarmup(
                e || "visible_materials",
                i,
                r
              );
          }
        };
      "function" == typeof this.setManagedTimeout
        ? (this._diyVisibleMaterialWarmupTimer = this.setManagedTimeout(n, a))
        : (this._diyVisibleMaterialWarmupTimer = setTimeout(n, a));
    }
  },
  scheduleDiyNextScreenMaterialWarmup: function (t, r, i) {
    var a = Date.now();
    if (!0 !== this._pageHidden) {
      var n = i && "object" === e(i) ? i : C(this),
        o = w(this);
      if (o) R(this, "diy_next_material_warmup_skip", a, o, n, "next");
      else if (n.isLowAndroid || Number(n.runtimeNextScreenLimit || 0) <= 0)
        R(
          this,
          "diy_next_material_warmup_skip",
          a,
          "low_android_next_screen",
          n,
          "next"
        );
      else {
        var s = Number(r || this._diyVisibleMaterialWarmupGeneration || 0),
          u = T(
            Array.isArray(this.data && this.data.displayBeads)
              ? this.data.displayBeads
              : [],
            n,
            n.runtimeNextScreenLimit
          )
            .map(function (e) {
              return String((e && e.url) || "").trim();
            })
            .filter(Boolean);
        u.length
          ? this.prewarmDiyRuntimeResources({
              mode: "next",
              urls: u,
              reason: t ? "".concat(t, "_next_screen") : "next_screen",
              priority: "P2",
              scope: "diy-next-materials",
              dedupeKey: A("diy-next-materials", s, u),
              requiresQuiet: !0,
              ignoreCooldown: !0,
              retry: !0,
              limit: u.length,
              timeoutMs: "high" === n.tier ? 6e3 : 5e3,
              cancelGeneration: s,
            })
          : R(this, "diy_next_material_warmup_skip", a, "empty", n, "next");
      }
    } else R(this, "diy_next_material_warmup_skip", a, "hidden", null, "next");
  },
  recomputeDisplayBeads: function (t) {
    var r,
      i,
      a,
      o = this,
      s = this.catalogSnapshot || {},
      m = s.beadTypes || [],
      d = s.subCategories || {},
      f = t.mainCategory || this.data.mainCategory,
      y = u(f, d[f] || [], this.data && this.data.mainCategories),
      h = t.menuCategory || this.data.menuCategory,
      p = void 0 !== t.searchQuery ? t.searchQuery : this.data.searchQuery,
      g = t.trayPattern || this.data.trayState.pattern || [],
      b = (p || "").trim(),
      v = h,
      _ = y
        .map(function (e) {
          return String((e && e.id) || "").trim();
        })
        .filter(function (e) {
          return !!e && "in_use" !== e && !l(e);
        }),
      P =
        ((r = y),
        (i = Object.create(null)),
        (a = 0),
        (Array.isArray(r) ? r : []).forEach(function (e) {
          var t = String((e && e.id) || "").trim();
          t &&
            "in_use" !== t &&
            !l(t) &&
            (Object.prototype.hasOwnProperty.call(i, t) ||
              ((i[t] = a), (a += 1)));
        }),
        i),
      S = (function (e) {
        var t = Object.create(null);
        return (
          (Array.isArray(e) ? e : []).forEach(function (e, r) {
            var i = String(e || "").trim();
            i && !Object.prototype.hasOwnProperty.call(t, i) && (t[i] = r);
          }),
          t
        );
      })(g),
      C = "in_use" === v,
      T = l(v),
      A = m
        .map(function (e, t) {
          return { item: e, sourceIndex: t };
        })
        .filter(function (e) {
          var t = e.item,
            r = !b || -1 !== t.name.indexOf(b),
            i = !1;
          if (C) i = -1 !== g.indexOf(t.id);
          else if (T) {
            var a = c(v);
            i = (!a || a === String(f || "")) && -1 !== _.indexOf(t.category);
          } else i = t.category === v;
          var n = C || -1 !== _.indexOf(t.category);
          return r && i && n;
        });
    C
      ? A.sort(function (e, t) {
          var r = D(S, e.item && e.item.id),
            i = D(S, t.item && t.item.id);
          return r !== i ? r - i : e.sourceIndex - t.sourceIndex;
        })
      : T &&
        A.sort(function (e, t) {
          var r = M(P, e.item && e.item.category),
            i = M(P, t.item && t.item.category);
          return r !== i ? r - i : e.sourceIndex - t.sourceIndex;
        });
    var w = A.map(function (e) {
      var t = e.item,
        r =
          t.listImgUrl ||
          (t.variants && t.variants.length ? t.variants[0] : ""),
        i = r ? n(r) : "";
      return Object.assign({}, t, {
        cardImage: r,
        displayCardImage: i || r,
        _displayMainCategory:
          (C &&
            (t.mainCategory ||
              t.main_category ||
              t.parentCategory ||
              t.parent_category)) ||
          f,
        listTransformStyle: x(t),
      });
    });
    (this._activeBeadSizes && "object" === e(this._activeBeadSizes)) ||
      (this._activeBeadSizes = Object.create(null));
    var R,
      k,
      E,
      F,
      W =
        ((R = w),
        (k = this._activeBeadSizes),
        (E = Object.create(null)),
        (F = []),
        (R || []).forEach(function (e) {
          var t =
            String((e && e.name) || "").trim() ||
            String((e && e.id) || "unknown");
          E[t] || ((E[t] = []), F.push(t)), E[t].push(e);
        }),
        F.map(function (e) {
          var t = E[e] || [],
            r = Object.create(null),
            i = t
              .slice()
              .sort(function (e, t) {
                var r = N(e) - N(t);
                return Number.isFinite(r) && Math.abs(r) > 1e-6
                  ? r
                  : String((e && e.id) || "").localeCompare(
                      String((t && t.id) || "")
                    );
              })
              .filter(function (e) {
                var t = String((e && e.id) || "");
                return !(!t || r[t] || ((r[t] = !0), 0));
              });
          if (!i.length) return null;
          var a = String((k && k[e]) || ""),
            n = i.findIndex(function (e) {
              return String((e && e.id) || "") === a;
            });
          return (
            n < 0 &&
              (n = i.findIndex(function (e) {
                return 10 === N(e);
              })),
            n < 0 && (n = 0),
            {
              name: e,
              items: i,
              activeIndex: n,
              activeBead: i[n] || i[0],
              hasPrev: n > 0,
              hasNext: n < i.length - 1,
            }
          );
        }).filter(Boolean));
    W.forEach(function (e) {
      e &&
        e.activeBead &&
        e.name &&
        (o._activeBeadSizes[e.name] = e.activeBead.id);
    }),
      this.setDataPatch({
        currentSubCategories: y,
        menuCategory: v,
        displayBeads: W,
      }),
      "function" == typeof this.scheduleDiyVisibleMaterialWarmup &&
        this.scheduleDiyVisibleMaterialWarmup("display_beads_recomputed");
  },
};
