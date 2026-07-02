var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../../../@babel/runtime/helpers/typeof"),
  i = require("../../index/modules/deps/lifecycle-deps"),
  n = i.getWechatAuthProfile,
  a = i.hasWechatLoginToken,
  o = require("../../../utils/diyEntrySession").readDiyEntrySession,
  s = require("../../../utils/navigation/diy-entry-transition"),
  u = s.consumeDiyEntryTransitionMarker,
  l = s.hasPreparedDiyStage,
  d =
    require("../../../utils/navigation/navigate-with-fallback").clearDiyEntryNavLock,
  c = require("./initial-data").normalizeDiyReturnTab,
  p = /^[A-Za-z0-9_-]{1,64}$/;
function f(e) {
  return String(e || "").trim();
}
function y(e) {
  var t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.round(t)) : 0;
}
function h(e) {
  var t = f(e);
  if (!t) return "";
  try {
    return decodeURIComponent(t).slice(0, 64);
  } catch (e) {
    return t.slice(0, 64);
  }
}
function m(e) {
  var t = e && "object" === r(e) ? e : {},
    i = (function (e) {
      var t = f(e);
      if (!t) return [];
      var r = t;
      try {
        r = decodeURIComponent(t);
      } catch (e) {
        r = t;
      }
      return r
        .split(",")
        .map(function (e) {
          return f(e);
        })
        .filter(function (e) {
          return p.test(e);
        });
    })(t.sharedPattern);
  return i.length
    ? {
        pattern: i,
        bgIndex: y(t.sharedBgIndex),
        name: h(t.sharedName),
        materialMap: null,
      }
    : null;
}
function g(e) {
  return (
    (function (e) {
      var t = e && "object" === r(e) ? e : {},
        i = o(t.entryId);
      return i && Array.isArray(i.pattern) && i.pattern.length
        ? {
            pattern: i.pattern.slice(),
            bgIndex: y(i.bgIndex),
            name: h(i.name),
            materialMap: i.materialMap || i.materialSnapshot || null,
            renderPlan: i.renderPlan || i.render_plan || [],
            sourceCreatorWorkId:
              i.sourceCreatorWorkId || i.source_creator_work_id || "",
            sourceInspirationTemplateId:
              i.sourceInspirationTemplateId ||
              i.source_inspiration_template_id ||
              "",
            sourceDesignerId: i.sourceDesignerId || i.source_designer_id || "",
            sourceEntry: i.sourceEntry || i.source_entry || i.source || "",
          }
        : null;
    })(e) || m(e)
  );
}
function _(e) {
  var t = e && "object" === r(e) ? e : {};
  return f(t.sourceCreatorWorkId || t.source_creator_work_id)
    ? {
        id: t.sourceDesignerId || t.source_designer_id || "",
        category: "designer",
        sourceCreatorWorkId:
          t.sourceCreatorWorkId || t.source_creator_work_id || "",
        source_creator_work_id:
          t.sourceCreatorWorkId || t.source_creator_work_id || "",
        sourceInspirationTemplateId:
          t.sourceInspirationTemplateId ||
          t.source_inspiration_template_id ||
          "",
        source_inspiration_template_id:
          t.sourceInspirationTemplateId ||
          t.source_inspiration_template_id ||
          "",
        sourceDesignerId: t.sourceDesignerId || t.source_designer_id || "",
        source_designer_id: t.sourceDesignerId || t.source_designer_id || "",
        sourceEntry: t.sourceEntry || t.source_entry || t.source || "",
        source_entry: t.sourceEntry || t.source_entry || t.source || "",
        pattern: Array.isArray(t.pattern) ? t.pattern.slice() : [],
      }
    : null;
}
function P(e, t) {
  var i = t && "object" === r(t) ? t : {};
  "order_reuse" === f(i.sourceEntry || i.source_entry || i.source) &&
    e &&
    "function" == typeof e.showToast &&
    e.showToast("已基于原订单生成新方案，价格和库存以当前页面为准");
}
function S(e) {
  var t,
    i,
    n = e && "object" === r(e) ? e : {};
  (n._bootPerfStartedAt = Date.now()),
    (n._pageHidden = !1),
    (n.toastTimer = null),
    (n.clockTimer = null),
    (n.lastScrollTop = 0),
    (n.copyrightContext = null),
    (n._initWarnGate = {}),
    (n._initToastGate = {}),
    "function" == typeof n.ensureTimerRegistry && n.ensureTimerRegistry(),
    "function" == typeof n.initializeCatalogSnapshot
      ? n.initializeCatalogSnapshot()
      : (n.catalogSnapshot = {
          trayBgs: [],
          beadTypes: [],
          mainCategories: [],
          subCategories: {},
          presetCategories: [],
          presets: [],
          physicsConfig: {},
          homeConfig: {},
          adConfig: {},
        }),
    (n._catalogBootstrapped =
      ((t = n.catalogSnapshot),
      (i = t && "object" === r(t) ? t : {}),
      Array.isArray(i.trayBgs) &&
        i.trayBgs.length > 0 &&
        Array.isArray(i.mainCategories) &&
        i.mainCategories.length > 0)),
    (n._catalogBootstrapPromise = null),
    (n._diyCatalogBootstrapPromise = null),
    (n._catalogLiteBootstrapPromise = null),
    (n._catalogLiteBootstrapped = !1),
    (n._profileBootstrapPromise = null),
    (n._profileDomainBootstrapped = !1),
    (n._flushShellUnlockAfterDiyGate = null),
    (n._diyEntryMotionPriorityUntil = Date.now() + 5e3),
    (n._diySizeGuidePopupShown = !1),
    (n._diySizeGuidePopupTimer = null),
    (n._diySizeGuidePopupAutoCloseTimer = null),
    (n._diySizeGuidePopupAttempts = 0),
    (n._nonCriticalTaskQuietUntil = Math.max(
      Number(n._nonCriticalTaskQuietUntil || 0),
      n._diyEntryMotionPriorityUntil
    ));
}
function T(e) {
  e &&
    e._diySizeGuidePopupTimer &&
    ("function" == typeof e.clearManagedTimeout
      ? e.clearManagedTimeout(e._diySizeGuidePopupTimer)
      : clearTimeout(e._diySizeGuidePopupTimer),
    (e._diySizeGuidePopupTimer = null));
}
function b(e) {
  e &&
    e._diySizeGuidePopupAutoCloseTimer &&
    ("function" == typeof e.clearManagedTimeout
      ? e.clearManagedTimeout(e._diySizeGuidePopupAutoCloseTimer)
      : clearTimeout(e._diySizeGuidePopupAutoCloseTimer),
    (e._diySizeGuidePopupAutoCloseTimer = null));
}
function v() {
  try {
    if ("function" != typeof getApp) return !1;
    var e = getApp();
    return !(
      !e ||
      !e.globalData ||
      !0 !== e.globalData.diySizeGuidePopupShownInSession
    );
  } catch (e) {
    return !1;
  }
}
function D(e) {
  if (e && !e._diySizeGuidePopupShown && !v()) {
    T(e);
    var t = function () {
        if (
          ((e._diySizeGuidePopupTimer = null),
          !e._diySizeGuidePopupShown && !v())
        ) {
          if (
            (function (e) {
              var t = e && e.data ? e.data : {};
              return !!(
                e._pageHidden ||
                t.standaloneDiyEntryMaskVisible ||
                t.standaloneDiySceneMasked ||
                t.photoMode ||
                t.guideModalOpen ||
                t.wristSettingOpen ||
                t.namingPayload ||
                t.isCheckingOut ||
                t.showDiyShareModal ||
                t.showProfileShareModal
              );
            })(e)
          )
            return (
              (e._diySizeGuidePopupAttempts =
                Number(e._diySizeGuidePopupAttempts || 0) + 1),
              void (e._diySizeGuidePopupAttempts <= 24 && D(e))
            );
          (e._diySizeGuidePopupShown = !0),
            (function () {
              try {
                if ("function" != typeof getApp) return;
                var e = getApp();
                e.globalData || (e.globalData = {}),
                  (e.globalData.diySizeGuidePopupShownInSession = !0);
              } catch (e) {}
            })(),
            "function" == typeof e.setData &&
              e.setData({ showDiySizeGuidePopup: !0 });
        }
      },
      r = e._diySizeGuidePopupAttempts > 0 ? 360 : 420;
    "function" != typeof e.setManagedTimeout
      ? (e._diySizeGuidePopupTimer = setTimeout(t, r))
      : (e._diySizeGuidePopupTimer = e.setManagedTimeout(t, r));
  }
}
function A(e, t) {
  return G.apply(this, arguments);
}
function G() {
  return (G = t(
    e().mark(function t(i, n) {
      var a;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (
                ((a = i && "object" === r(i) ? i : {}),
                n && Array.isArray(n.pattern) && n.pattern.length)
              ) {
                e.next = 3;
                break;
              }
              return e.abrupt("return", !1);
            case 3:
              if ("function" != typeof a.ensurePatternMaterialAssets) {
                e.next = 6;
                break;
              }
              return (
                (e.next = 6),
                a.ensurePatternMaterialAssets(n.pattern, {
                  materialMap: n.materialMap,
                  preferCache: !0,
                  remoteTimeoutMs: 4200,
                })
              );
            case 6:
              if ("function" == typeof a.loadScheme) {
                e.next = 8;
                break;
              }
              return e.abrupt("return", !1);
            case 8:
              return (
                a.loadScheme(n.pattern, n.bgIndex || 0, _(n), n.name || "", {
                  renderPlan: n.renderPlan || n.render_plan,
                }),
                P(a, n),
                e.abrupt("return", !0)
              );
            case 11:
            case "end":
              return e.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
function k() {
  return new Promise(function (e) {
    setTimeout(function () {
      return e({ timedOut: !0 });
    }, 5200);
  });
}
function C(e, t) {
  return I.apply(this, arguments);
}
function I() {
  return (I = t(
    e().mark(function t(r, i) {
      var n, a;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (n = Promise.resolve()
                  .then(function () {
                    return A(r, i);
                  })
                  .then(function (e) {
                    return { applied: !0 === e };
                  })
                  .catch(function (e) {
                    return { error: e };
                  })),
                (e.next = 3),
                Promise.race([n, k()])
              );
            case 3:
              if (!(a = e.sent) || !a.timedOut) {
                e.next = 8;
                break;
              }
              return (
                n.catch(function () {}),
                r &&
                  "function" == typeof r.reportInitIssue &&
                  r.reportInitIssue(
                    "early_diy_scheme_timeout",
                    new Error("early DIY scheme apply timed out"),
                    { toast: !1, fallbackMessage: "方案素材将在页面内继续补齐" }
                  ),
                e.abrupt("return", !1)
              );
            case 8:
              if (!a || !a.error) {
                e.next = 10;
                break;
              }
              throw a.error;
            case 10:
              return e.abrupt("return", !(!a || !a.applied));
            case 11:
            case "end":
              return e.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
module.exports = {
  applyAuthUserProfile: function (e) {
    var t = e && "object" === r(e) ? e : {},
      i = f(t.nickname) || "微信用户",
      n = f(t.avatarUrl || t.avatar_url),
      a = Number(t.userId || t.id || 0);
    "function" == typeof this.profileCoordinatorApplyUserProfile &&
      this.profileCoordinatorApplyUserProfile({
        nickname: i,
        avatarUrl: n || this.data.profileAvatarFallback,
        userId: Number.isFinite(a) && a > 0 ? Math.round(a) : 0,
      }),
      "function" == typeof this.profileCoordinatorCloseAuthPrompt &&
        this.profileCoordinatorCloseAuthPrompt();
  },
  onLoad: function (i) {
    var o = this,
      s = i && "object" === r(i) ? i : {},
      p = f(s.source).toLowerCase(),
      y = c(s.returnTab),
      h = u({ isStandaloneDiy: !0, routeSource: p });
    d();
    var m = c(h && h.returnTab),
      _ = g(s),
      P = l(h, "catalog") || l(h, "materials"),
      T = l(h, "pattern"),
      b = l(h, "geometry"),
      v = String((h && h.blindBoxSessionSeed) || "")
        .trim()
        .slice(0, 96);
    v && (this._blindBoxSessionSeed = v),
      S(this),
      "function" == typeof this.setLoadingStage &&
        this.setLoadingStage("booting"),
      "function" == typeof this.restoreWristPreference &&
        this.restoreWristPreference();
    var A = a(),
      G = n(),
      k = !(!(_ && Array.isArray(_.pattern) && _.pattern.length) || T);
    "function" == typeof this.openStandaloneDiyLoadingGate &&
      this.openStandaloneDiyLoadingGate({
        visible: !0,
        waitForPatternReady: k,
        preparedStages: {
          tray: !1,
          catalog: P,
          materials: P,
          pattern: T,
          geometry: b,
          blindbox: !0,
        },
      });
    var I = {
      appLoaded: !0,
      loadProgress: 100,
      activeTab: "diy",
      activePrimaryTab: "diy",
      navActiveTab: "diy",
      isStandaloneDiy: !0,
      routeSource: p,
      diyReturnTab: y || m,
      isNavVisible: !1,
      isLoggedIn: A,
      authVerifying: A,
      cartHydrating: A,
      savedSchemesLoading: A,
      standaloneDiyEntryMaskVisible: !0,
      standaloneDiySceneMasked: !0,
    };
    _ &&
      Array.isArray(_.pattern) &&
      _.pattern.length &&
      ((I.currentPattern = _.pattern.slice()),
      (I.currentRenderPlan = Array.isArray(_.renderPlan || _.render_plan)
        ? _.renderPlan || _.render_plan
        : []),
      (I.bgIndex = _.bgIndex || 0),
      (I.currentSchemeName = _.name || "")),
      this.setData(I, function () {
        "function" == typeof o.tryResolveStandaloneDiyGeometryGate &&
          o.tryResolveStandaloneDiyGeometryGate("onload_state_ready"),
          "function" != typeof o.computeViewportMetrics &&
            "function" == typeof o.resolveStandaloneDiyLoadingGate &&
            o.resolveStandaloneDiyLoadingGate("layout");
      }),
      G && this.applyAuthUserProfile(G),
      A &&
        "function" == typeof this.ensureLoginState &&
        Promise.resolve(
          this.ensureLoginState({ silent: !0, forceRefresh: !0 })
        ).catch(function () {}),
      "function" == typeof this.computeViewportMetrics &&
        this.computeViewportMetrics(function () {
          "function" == typeof o.resolveStandaloneDiyLoadingGate &&
            o.resolveStandaloneDiyLoadingGate("layout");
        });
    var M =
      "function" == typeof this.ensureDiyCatalogBootstrapped
        ? this.ensureDiyCatalogBootstrapped({ silent: !0, preferCache: !0 })
        : Promise.resolve(!1);
    Promise.resolve(M).finally(
      t(
        e().mark(function t() {
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ("function" == typeof o.resolveStandaloneDiyLoadingGate &&
                        o.resolveStandaloneDiyLoadingGate("catalog"),
                      (e.prev = 1),
                      !(_ && Array.isArray(_.pattern) && _.pattern.length))
                    ) {
                      e.next = 7;
                      break;
                    }
                    return (e.next = 5), C(o, _);
                  case 5:
                    e.next = 10;
                    break;
                  case 7:
                    if ("function" != typeof o.tryApplySharedScheme) {
                      e.next = 10;
                      break;
                    }
                    return (e.next = 10), o.tryApplySharedScheme(s);
                  case 10:
                    e.next = 15;
                    break;
                  case 12:
                    (e.prev = 12),
                      (e.t0 = e.catch(1)),
                      "function" == typeof o.reportInitIssue &&
                        o.reportInitIssue("early_diy_scheme_materials", e.t0, {
                          toast: !1,
                          fallbackMessage: "方案素材同步失败",
                        });
                  case 15:
                    return (
                      (e.prev = 15),
                      "function" == typeof o.resolveStandaloneDiyLoadingGate &&
                        o.resolveStandaloneDiyLoadingGate("pattern"),
                      e.finish(15)
                    );
                  case 18:
                    "function" == typeof o.preloadAssets &&
                      o.deferNonCriticalTask(function () {
                        o.preloadAssets({ reason: "diy_post_catalog" });
                      }, 1800),
                      "function" == typeof o.prewarmBlindBoxPresetPool &&
                        (o.deferNonCriticalTask(function () {
                          o.prewarmBlindBoxPresetPool({
                            reason: "diy_catalog_ready_blindbox",
                            limit: 6,
                            fullPresetLimit: 0,
                            renderWarmupLimit: 0,
                            targetCount: 2,
                            assetWarmup: !1,
                          });
                        }, 2600),
                        o.deferNonCriticalTask(function () {
                          o.prewarmBlindBoxPresetPool({
                            reason: "diy_idle_blindbox_assets",
                            limit: 6,
                            fullPresetLimit: 1,
                            renderWarmupLimit: 1,
                            targetCount: 3,
                          });
                        }, 5200)),
                      "function" == typeof o.setLoadingStage &&
                        o.setLoadingStage("interactive");
                  case 21:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[1, 12, 15, 18]]
          );
        })
      )
    ),
      "function" == typeof this.preloadAssets &&
        this.deferNonCriticalTask(function () {
          o.preloadAssets({ reason: "diy_startup" });
        }, 1800),
      D(this);
  },
  onShow: function () {
    (this._pageHidden = !1),
      "function" == typeof this.consumeProfileAuthAvatarCropResult &&
        this.consumeProfileAuthAvatarCropResult(),
      "function" == typeof this.setDiyResourceSchedulerPause &&
        this.setDiyResourceSchedulerPause("page-hidden", !1),
      D(this);
  },
  onHide: function () {
    var e = this;
    if (
      ((this._pageHidden = !0),
      T(this),
      b(this),
      "function" == typeof this.setDiyResourceSchedulerPause &&
        this.setDiyResourceSchedulerPause("page-hidden", !0),
      "function" == typeof this.clearManualPlaceholderDeadlineTimers &&
        this.clearManualPlaceholderDeadlineTimers(),
      "function" == typeof this.flushPendingPersists)
    ) {
      this._deferredPersistFlushTimer &&
        ("function" == typeof this.clearManagedTimeout
          ? this.clearManagedTimeout(this._deferredPersistFlushTimer)
          : clearTimeout(this._deferredPersistFlushTimer),
        (this._deferredPersistFlushTimer = null));
      var t = function () {
        (e._deferredPersistFlushTimer = null), e.flushPendingPersists();
      };
      "function" != typeof this.setManagedTimeout
        ? (this._deferredPersistFlushTimer = setTimeout(t, 180))
        : (this._deferredPersistFlushTimer = this.setManagedTimeout(t, 180));
    }
  },
  onUnload: function () {
    (this._pageHidden = !0),
      T(this),
      b(this),
      "function" == typeof this.clearManualPlaceholderDeadlineTimers &&
        this.clearManualPlaceholderDeadlineTimers(),
      "function" == typeof this.clearDiyResourceScheduler &&
        this.clearDiyResourceScheduler("diy_unload"),
      "function" == typeof this.closeStandaloneDiyLoadingGate &&
        this.closeStandaloneDiyLoadingGate(),
      (this._flushShellUnlockAfterDiyGate = null),
      this._deferredPersistFlushTimer &&
        ("function" == typeof this.clearManagedTimeout
          ? this.clearManagedTimeout(this._deferredPersistFlushTimer)
          : clearTimeout(this._deferredPersistFlushTimer),
        (this._deferredPersistFlushTimer = null)),
      "function" == typeof this.flushPendingPersists &&
        this.flushPendingPersists(),
      "function" != typeof this.clearAllManagedTimers
        ? (this.toastTimer && clearTimeout(this.toastTimer),
          this.clockTimer && clearInterval(this.clockTimer))
        : this.clearAllManagedTimers();
  },
  handleCloseDiySizeGuidePopup: function () {
    (this._diySizeGuidePopupShown = !0),
      T(this),
      b(this),
      this.setData({ showDiySizeGuidePopup: !1 });
  },
};
