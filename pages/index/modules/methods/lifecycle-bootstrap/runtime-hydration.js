require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../../../../@babel/runtime/helpers/typeof"),
  n = require("../../deps/lifecycle-deps"),
  r = n.hasWechatLoginToken,
  i = n.getWechatAuthProfile,
  o = n.LEGACY_ROUTE_QUERY_KEYS,
  s = n.normalizeSharedSchemeQuery,
  d = n.resolveWebPaySceneToken,
  l = n.scanMiniProgramWebLogin,
  c = n.confirmMiniProgramWebLogin,
  u = n.cancelMiniProgramWebLogin,
  y = require("../navigation-coordinator"),
  p = y.applyOnLoadState,
  f = y.shouldHydrateProfileDomainInLegacyIndex,
  h = y.normalizeTabInput,
  g = require("../../../../../utils/diyEntrySession").readDiyEntrySession,
  m = require("../../../../../utils/navigation/diy-entry-transition"),
  b = m.DIY_ENTRY_TRANSITION_MAX_AGE_MS,
  _ = m.consumeDiyEntryTransitionMarker,
  S = m.hasPreparedDiyStage,
  D = m.isValidDiyTransitionMarker,
  v = m.normalizeDiyStageName,
  P = require("../../../../../utils/diyResourceScheduler"),
  L = P.getDiyResourceScheduler,
  C = P.enqueueDiyResourceTask,
  k = P.setDiyResourcePause,
  T = P.extendDiyResourceQuietWindow,
  w = P.extendDiyResourceMotionLock,
  x = P.cancelDiyResourceNonCritical,
  R =
    require("../../../../../utils/navigation/navigate-with-fallback").navigateWithFallback,
  M = require("../../storage/local-snapshot-cache").readLocalSchemesSnapshot,
  B = new Set(["inspiration", "diy"]),
  I = new Set(["profile", "schemes"]),
  A = /^[A-Za-z0-9_-]{1,64}$/,
  W = new Set(["home", "inspiration", "cart", "profile"]);
function G(e) {
  var t = String(e || "")
    .trim()
    .toLowerCase();
  return W.has(t) ? t : "";
}
function O(e) {
  var t = e && "object" === a(e) ? e : {};
  return (function (e, t) {
    var n = String(e || "").trim(),
      r = t && "object" === a(t) ? t : {},
      i = [];
    return (
      Object.keys(r).forEach(function (e) {
        var t = r[e];
        null != t &&
          "" !== t &&
          i.push(
            ""
              .concat(encodeURIComponent(e), "=")
              .concat(encodeURIComponent(String(t)))
          );
      }),
      "".concat(n).concat(i.length ? "?".concat(i.join("&")) : "")
    );
  })(
    "/pages/index/index",
    Object.assign({}, t, {
      activeTab: "diy",
      source: t[o.source] || "standalone_diy_legacy_index",
    })
  );
}
function N(e) {
  var t = e && "object" === a(e) ? e : {};
  return {
    tray: !0 === t._standaloneDiyTrayReady,
    catalog: !0 === t._standaloneDiyCatalogReady,
    layout: !0 === t._standaloneDiyLayoutReady,
    pattern: !0 === t._standaloneDiyPatternReady,
    geometry: !0 === t._standaloneDiyGeometryReady,
    blindbox: !0 === t._standaloneDiyBlindBoxReady,
  };
}
function F(e, t, n, r) {
  if (e && "function" == typeof e.recordPerfEvent) {
    var i = Number(e._standaloneDiyGateOpenedAt || 0) || Date.now();
    e.recordPerfEvent(
      t,
      i,
      Object.assign(
        {
          stage: String(n || "").trim() || void 0,
          minMaskMs: Math.max(0, Number(e._standaloneDiyGateMinMaskMs || 0)),
          gate: N(e),
        },
        r && "object" === a(r) ? r : {}
      )
    );
  }
}
function E(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
    a = String(e || "").trim();
  return a && /^[0-9A-Za-z_-]{1,96}$/.test(a) ? a.slice(0, t) : "";
}
function j(e, t, n) {
  for (var r = e && "object" === a(e) ? e : {}, i = 0; i < t.length; i += 1) {
    var o = E(r[t[i]]);
    if (o) return o;
  }
  var s = String(r.scene || "").trim();
  if (!s) return "";
  var d = (function (e, t) {
    var a = String(e || "").trim();
    if (!a) return "";
    for (var n = a.split("&"), r = 0; r < n.length; r += 1) {
      var i = String(n[r] || "").trim();
      if (i) {
        var o = i.indexOf("=");
        if (!(o < 0))
          if (i.slice(0, o).trim() === t) return i.slice(o + 1).trim();
      }
    }
    return "";
  })(
    (function (e) {
      for (var t = String(e || "").trim(), a = 0; a < 3; a += 1)
        try {
          var n = decodeURIComponent(t);
          if (!n || n === t) break;
          t = n;
        } catch (e) {
          break;
        }
      return t.trim();
    })(s),
    n
  );
  return d ? E(d) : "";
}
function V(e) {
  var t =
    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "home";
  if ("function" == typeof h) return h(e, t);
  var a = String(e || "")
    .trim()
    .toLowerCase();
  return a || t;
}
function H(e) {
  var t = e && "object" === a(e) ? e : {};
  return (
    Array.isArray(t.trayBgs) &&
    t.trayBgs.length > 0 &&
    Array.isArray(t.beadTypes) &&
    t.beadTypes.length > 0
  );
}
function U(e) {
  return e && "object" === a(e) && !Array.isArray(e) ? e : {};
}
function z(e) {
  return (function (e) {
    var t = U(e),
      a = U(t.adConfig),
      n = U(a.profile),
      r = Object.keys(n).length ? n : a,
      i = U(r.applyDocs),
      o = U(r.applyDocConfig),
      s = U(i.designer || o.designer),
      d = U(i.distributor || o.distributor);
    return Object.keys(s).length > 0 && Object.keys(d).length > 0;
  })(e);
}
function q(e) {
  var t = String(e || "").trim();
  return !!t && /^[a-z0-9_:-]+$/.test(t);
}
function Q(e) {
  if (!H(e)) return !1;
  var t = e && "object" === a(e) ? e : {},
    n = Array.isArray(t.mainCategories) ? t.mainCategories : [],
    r =
      t.subCategories && "object" === a(t.subCategories) ? t.subCategories : {};
  return (
    n.length > 0 &&
    n.every(function (e) {
      var t = String((e && e.id) || "").trim();
      return (
        !!q(t) &&
        (Array.isArray(r[t]) ? r[t] : []).every(function (e) {
          var t = String((e && e.id) || "").trim();
          return "in_use" === t || q(t);
        })
      );
    })
  );
}
function Y(e) {
  var t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.round(t)) : 0;
}
function X(e) {
  var t = Number(e);
  return Number.isFinite(t) && t > 0 ? t : null;
}
function K(e) {
  var t = String(e || "").trim(),
    a = t;
  try {
    a = decodeURIComponent(t);
  } catch (e) {
    a = t;
  }
  return a.slice(0, 64);
}
function $(e) {
  var t = e && "object" === a(e) ? e : {},
    n = g(t.entryId);
  if (n && Array.isArray(n.pattern) && n.pattern.length)
    return {
      pattern: n.pattern,
      bgIndex: Y(n.bgIndex),
      name: String(n.name || "")
        .trim()
        .slice(0, 64),
      beadMm: X(n.beadMm || n.bead_mm),
      previewRenderVersion: X(
        n.previewRenderVersion || n.preview_render_version
      ),
      materialMap:
        n.materialMap && "object" === a(n.materialMap) ? n.materialMap : null,
      materialSnapshot:
        n.materialSnapshot && "object" === a(n.materialSnapshot)
          ? n.materialSnapshot
          : null,
      renderPlan: Array.isArray(n.renderPlan || n.render_plan)
        ? n.renderPlan || n.render_plan
        : [],
      entryId: String(n.entryId || "").trim(),
      schemeId: String(n.schemeId || "").trim(),
    };
  var r = (function (e) {
    var t = String(e || "").trim();
    if (!t) return [];
    var a = t;
    try {
      a = decodeURIComponent(t);
    } catch (e) {
      a = t;
    }
    return a
      .split(",")
      .map(function (e) {
        return String(e || "").trim();
      })
      .filter(function (e) {
        return A.test(e);
      });
  })(t.sharedPattern);
  if (r.length)
    return {
      pattern: r,
      bgIndex: Y(t.sharedBgIndex),
      name: K(t.sharedName),
      beadMm: X(t.sharedBeadMm),
      previewRenderVersion: X(t.sharedPreviewRenderVersion),
    };
  var i = (function (e) {
      var t = String(e || "").trim();
      if (!t) return null;
      for (var a = M(), n = 0; n < a.length; n += 1) {
        var r = a[n];
        if (String((r && r.id) || "").trim() === t) return r || null;
      }
      return null;
    })(String(t.schemeId || "").trim()),
    o =
      i && Array.isArray(i.pattern)
        ? i.pattern
            .map(function (e) {
              return String(null == e ? "" : e).trim();
            })
            .filter(function (e) {
              return A.test(e);
            })
        : [];
  return o.length
    ? {
        pattern: o,
        bgIndex: Y(void 0 !== i.bgIndex ? i.bgIndex : i.bg_index),
        name: String(i.name || "")
          .trim()
          .slice(0, 64),
        beadMm: X(i.beadMm || i.bead_mm),
        previewRenderVersion: X(
          i.previewRenderVersion || i.preview_render_version
        ),
        materialMap:
          i.materialMap && "object" === a(i.materialMap) ? i.materialMap : null,
        materialSnapshot:
          i.materialSnapshot && "object" === a(i.materialSnapshot)
            ? i.materialSnapshot
            : null,
      }
    : null;
}
function Z(e, t, n, r) {
  var i = e && "object" === a(e) ? e : null;
  if (i && "function" == typeof t) {
    var o = Date.now(),
      s = Math.max(0, Number(n) || 0),
      d = Math.max(s, Number(r) || 2500),
      l =
        "function" == typeof i.setManagedTimeout
          ? i.setManagedTimeout.bind(i)
          : setTimeout;
    !(function e() {
      !0 !== i._pageHidden &&
        (i.data && i.data.appLoaded
          ? l(t, s)
          : Date.now() - o >= d
          ? t()
          : l(e, 120));
    })();
  }
}
function J(e) {
  var t = e && "object" === a(e) ? e : null;
  return (
    !!D(t) &&
    !0 === t.skipIndexSceneMask &&
    !0 === t.catalogReady &&
    !0 === t.schemePatternReady &&
    !0 === t.schemeAssetsReady &&
    (function () {
      try {
        var e = "function" == typeof getApp ? getApp() : null,
          t = e && e.globalData ? e.globalData : null;
        return (
          !!t &&
          (Q(t.pendingDiyCatalogSnapshot) || Q(t.latestDiyCatalogSnapshot))
        );
      } catch (e) {
        return !1;
      }
    })()
  );
}
module.exports = {
  applyAuthUserProfile: function (e) {
    var t = this,
      n = e && "object" === a(e) ? e : {},
      r = String(n.nickname || "").trim() || "微信用户",
      i = String(n.avatarUrl || n.avatar_url || "").trim(),
      o = Number(n.userId || n.id || 0);
    this.profileCoordinatorApplyUserProfile({
      nickname: r,
      avatarUrl: i || this.data.profileAvatarFallback,
      userId: Number.isFinite(o) && o > 0 ? Math.round(o) : 0,
    }),
      this.profileCoordinatorCloseAuthPrompt();
    var s = String(
        (this.data && this.data.pendingWebPaySceneToken) || ""
      ).trim(),
      d = String(
        (this.data && this.data.pendingWebLoginSceneToken) || ""
      ).trim();
    d && "function" == typeof this.openWebLoginConfirmFromScene
      ? this.deferNonCriticalTask(function () {
          t.openWebLoginConfirmFromScene(d);
        }, 96)
      : s &&
        "function" == typeof this.openWebPayOrderFromScene &&
        this.deferNonCriticalTask(function () {
          t.openWebPayOrderFromScene(s, { source: "login" });
        }, 96);
  },
  openWebPayOrderFromScene: function (n, r) {
    var i = this;
    return t(
      e().mark(function t() {
        var o, s, l, c, u;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if ((o = String(n || "").trim())) {
                    e.next = 3;
                    break;
                  }
                  return e.abrupt("return");
                case 3:
                  if (!i._webPaySceneOpening) {
                    e.next = 5;
                    break;
                  }
                  return e.abrupt("return");
                case 5:
                  if (
                    ((i._webPaySceneOpening = !0),
                    (s = r && "object" === a(r) ? r : {}),
                    i.setData({
                      activeTab: "profile",
                      profileSubView: "",
                      isNavVisible: !1,
                      webPaySceneResolving: !0,
                      pendingWebPaySceneToken: o,
                      pendingWebLoginSceneToken: "",
                      webLoginConfirmVisible: !1,
                    }),
                    (e.prev = 8),
                    i.data && !0 === i.data.isLoggedIn)
                  ) {
                    e.next = 12;
                    break;
                  }
                  return (
                    (e.next = 12),
                    i.ensureLoginState({ silent: !1, forceRefresh: !0 })
                  );
                case 12:
                  if (i.data && !0 === i.data.isLoggedIn) {
                    e.next = 14;
                    break;
                  }
                  throw new Error("WEB_PAY_LOGIN_REQUIRED");
                case 14:
                  if (
                    s.skipProfileBootstrap ||
                    "function" != typeof i.ensureProfileDomainBootstrapped
                  ) {
                    e.next = 17;
                    break;
                  }
                  return (e.next = 17), i.ensureProfileDomainBootstrapped();
                case 17:
                  return (e.next = 19), d(o);
                case 19:
                  if (
                    ((l = e.sent), (c = String((l && l.orderNo) || "").trim()))
                  ) {
                    e.next = 23;
                    break;
                  }
                  throw new Error("WEB_PAY_ORDER_NO_MISSING");
                case 23:
                  if (
                    (i.setData({
                      showOrderManagerModal: !0,
                      orderManagerFilter: "pending_pay",
                      orderManagerActiveOrderNo: c,
                      orderManagerDetail: null,
                      orderManagerStatusLogs: [],
                      orderManagerDetailLoading: !0,
                      webPaySceneResolving: !1,
                      pendingWebPaySceneToken: "",
                    }),
                    "function" == typeof i.loadOrderManagerList &&
                      i
                        .loadOrderManagerList({
                          filter: "pending_pay",
                          page: 1,
                          append: !1,
                          refreshDetail: !1,
                        })
                        .catch(function () {
                          return null;
                        }),
                    "function" != typeof i.loadOrderManagerDetail)
                  ) {
                    e.next = 28;
                    break;
                  }
                  return (
                    (e.next = 28), i.loadOrderManagerDetail(c, { silent: !1 })
                  );
                case 28:
                  !1 !== s.autoPromptPay
                    ? i.deferNonCriticalTask(function () {
                        i.promptWebPayOrderPayment(c);
                      }, 180)
                    : "login" !== s.source &&
                      i.showToast("已打开 Web 订单，请确认支付"),
                    (e.next = 36);
                  break;
                case 31:
                  (e.prev = 31),
                    (e.t0 = e.catch(8)),
                    i.setData({ webPaySceneResolving: !1 }),
                    (u = String(
                      (e.t0 && (e.t0.message || e.t0.code)) || ""
                    )).includes("USER_MISMATCH")
                      ? i.showToast("请使用下单账号登录")
                      : u.includes("EXPIRED")
                      ? i.showToast("支付二维码已过期，请在 Web 端重新生成")
                      : i.showToast("订单打开失败，请重新扫码");
                case 36:
                  return (
                    (e.prev = 36), (i._webPaySceneOpening = !1), e.finish(36)
                  );
                case 39:
                case "end":
                  return e.stop();
              }
          },
          t,
          null,
          [[8, 31, 36, 39]]
        );
      })
    )();
  },
  promptWebPayOrderPayment: function (e) {
    var t = this,
      a = String(e || "").trim();
    if (a && this.data && !this.data.orderManagerPaying) {
      var n = this.data.orderManagerDetail || null;
      n &&
        String(n.orderNo || "") === a &&
        n.actions &&
        !0 === n.actions.canPay &&
        this._webPayPromptedOrderNo !== a &&
        ((this._webPayPromptedOrderNo = a),
        wx.showModal({
          title: "确认支付",
          content: "Web 订单 "
            .concat(a, "\n应付：")
            .concat(n.payableAmountText || ""),
          confirmText: "立即支付",
          cancelText: "稍后支付",
          success: function (e) {
            e &&
              e.confirm &&
              "function" == typeof t.handleOrderManagerPayOrder &&
              t.handleOrderManagerPayOrder();
          },
        }));
    }
  },
  openWebLoginConfirmFromScene: function (a) {
    var n = this;
    return t(
      e().mark(function t() {
        var r, i, o, s, d;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if ((r = String(a || "").trim())) {
                    e.next = 3;
                    break;
                  }
                  return e.abrupt("return");
                case 3:
                  if (
                    (n.setData({
                      activeTab: "profile",
                      profileSubView: "",
                      isNavVisible: !1,
                      pendingWebPaySceneToken: "",
                      webPaySceneResolving: !1,
                      pendingWebLoginSceneToken: r,
                      webLoginConfirmVisible: !0,
                      webLoginConfirmLoading: !0,
                      webLoginConfirmStatus: "SCANNING",
                      webLoginConfirmMessage: "正在确认当前微信账号...",
                    }),
                    (e.prev = 4),
                    n.data && !0 === n.data.isLoggedIn)
                  ) {
                    e.next = 8;
                    break;
                  }
                  return (
                    (e.next = 8),
                    n.ensureLoginState({ silent: !1, forceRefresh: !0 })
                  );
                case 8:
                  if (n.data && !0 === n.data.isLoggedIn) {
                    e.next = 10;
                    break;
                  }
                  throw new Error("WEB_LOGIN_MINI_PROGRAM_LOGIN_REQUIRED");
                case 10:
                  return (e.next = 12), l(r);
                case 12:
                  (i = e.sent),
                    (o = String((i && i.status) || "SCANNED")),
                    n.setData({
                      webLoginConfirmLoading: !1,
                      webLoginConfirmStatus: o,
                      webLoginConfirmMessage:
                        "CONFIRMED" === o
                          ? "网页版已登录，可返回电脑继续使用。"
                          : "确认后，电脑上的 StoneLab Web 将登录当前账号。",
                    }),
                    (e.next = 23);
                  break;
                case 17:
                  (e.prev = 17),
                    (e.t0 = e.catch(4)),
                    (s = String((e.t0 && (e.t0.message || e.t0.code)) || "")),
                    (d = "登录二维码校验失败，请返回 Web 端重试。"),
                    s.includes("EXPIRED")
                      ? (d = "登录二维码已过期，请返回 Web 端重新生成。")
                      : s.includes("CANCELLED") &&
                        (d = "本次 Web 登录已取消。"),
                    n.setData({
                      webLoginConfirmLoading: !1,
                      webLoginConfirmStatus: "ERROR",
                      webLoginConfirmMessage: d,
                    });
                case 23:
                case "end":
                  return e.stop();
              }
          },
          t,
          null,
          [[4, 17]]
        );
      })
    )();
  },
  handleConfirmWebLoginFromScene: function () {
    var a = this;
    return t(
      e().mark(function t() {
        var n, r, i;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    (n = String(
                      (a.data && a.data.pendingWebLoginSceneToken) || ""
                    ).trim()) &&
                    !a.data.webLoginConfirmLoading
                  ) {
                    e.next = 3;
                    break;
                  }
                  return e.abrupt("return");
                case 3:
                  if (
                    (a.setData({
                      webLoginConfirmLoading: !0,
                      webLoginConfirmMessage: "正在确认登录...",
                    }),
                    (e.prev = 4),
                    a.data && !0 === a.data.isLoggedIn)
                  ) {
                    e.next = 8;
                    break;
                  }
                  return (
                    (e.next = 8),
                    a.ensureLoginState({ silent: !1, forceRefresh: !0 })
                  );
                case 8:
                  return (e.next = 10), c(n);
                case 10:
                  a.setData({
                    webLoginConfirmLoading: !1,
                    webLoginConfirmStatus: "CONFIRMED",
                    webLoginConfirmMessage:
                      "已确认登录网页版，可返回电脑继续使用。",
                  }),
                    a.showToast("网页版登录已确认"),
                    (e.next = 20);
                  break;
                case 14:
                  (e.prev = 14),
                    (e.t0 = e.catch(4)),
                    (r = String((e.t0 && (e.t0.message || e.t0.code)) || "")),
                    (i = "确认失败，请返回 Web 端重新扫码。"),
                    r.includes("EXPIRED")
                      ? (i = "登录二维码已过期，请返回 Web 端重新生成。")
                      : r.includes("CONFIRMED") &&
                        (i = "网页版已登录，可返回电脑继续使用。"),
                    a.setData({
                      webLoginConfirmLoading: !1,
                      webLoginConfirmStatus: r.includes("CONFIRMED")
                        ? "CONFIRMED"
                        : "ERROR",
                      webLoginConfirmMessage: i,
                    });
                case 20:
                case "end":
                  return e.stop();
              }
          },
          t,
          null,
          [[4, 14]]
        );
      })
    )();
  },
  handleCancelWebLoginFromScene: function () {
    var a = this;
    return t(
      e().mark(function t() {
        var n;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  !(n = String(
                    (a.data && a.data.pendingWebLoginSceneToken) || ""
                  ).trim())
                ) {
                  e.next = 4;
                  break;
                }
                return (
                  (e.next = 4),
                  u(n).catch(function () {
                    return null;
                  })
                );
              case 4:
                a.setData({
                  pendingWebLoginSceneToken: "",
                  webLoginConfirmVisible: !1,
                  webLoginConfirmLoading: !1,
                  webLoginConfirmStatus: "CANCELLED",
                  webLoginConfirmMessage: "",
                }),
                  a.showToast("已取消网页版登录");
              case 6:
              case "end":
                return e.stop();
            }
        }, t);
      })
    )();
  },
  handleCloseWebLoginConfirm: function () {
    this.setData({
      pendingWebLoginSceneToken: "",
      webLoginConfirmVisible: !1,
      webLoginConfirmLoading: !1,
      webLoginConfirmStatus: "",
      webLoginConfirmMessage: "",
    });
  },
  ensureDiyResourceScheduler: function () {
    return L(this);
  },
  scheduleDiyResourceTask: function (e) {
    return C(this, e);
  },
  setDiyResourceSchedulerPause: function (e, t) {
    k(this, e, t);
  },
  extendDiyResourceQuietWindow: function (e, t) {
    T(this, e, t);
  },
  extendDiyResourceMotionLock: function (e, t) {
    w(this, e, t);
  },
  cancelDiyResourceNonCritical: function (e, t) {
    return x(this, e, t);
  },
  getDiyResourceSchedulerSnapshot: function () {
    var e = this.ensureDiyResourceScheduler();
    return e && "function" == typeof e.snapshot ? e.snapshot() : null;
  },
  clearDiyResourceScheduler: function (e) {
    var t = this._diyResourceScheduler;
    t && "function" == typeof t.clear && t.clear(e || "page_clear"),
      (this._diyResourceScheduler = null);
  },
  deferNonCriticalTask: function (e) {
    var t = this,
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 96,
      r = arguments.length > 2 ? arguments[2] : void 0;
    if ("function" == typeof e) {
      var i = r && "object" === a(r) ? r : {},
        o = this.ensureDiyResourceScheduler();
      if (o && "function" == typeof o.defer)
        o.defer(
          function () {
            return (!0 !== t._pageHidden || !0 === i.allowWhenHidden) && e();
          },
          n,
          {
            priority: i.priority || "P2",
            type: i.type || "generic",
            scope: i.scope || "non-critical",
            dedupeKey: i.dedupeKey,
            requiresQuiet: !1 !== i.requiresQuiet,
            cancelOnHidden: !0 !== i.allowWhenHidden,
            timeoutMs: i.timeoutMs,
          }
        );
      else {
        var s = Math.max(0, Number(n) || 0),
          d = function a() {
            if (!0 !== t._pageHidden || !0 === i.allowWhenHidden) {
              var n = Number(t._nonCriticalTaskQuietUntil || 0);
              if (n > Date.now()) {
                var r = Math.max(24, n - Date.now());
                "function" == typeof t.setManagedTimeout
                  ? t.setManagedTimeout(a, r)
                  : setTimeout(a, r);
              } else e();
            }
          };
        "function" != typeof this.setManagedTimeout
          ? setTimeout(d, s)
          : this.setManagedTimeout(d, s);
      }
    }
  },
  shouldBootstrapCatalogOnLoad: function (e, t) {
    var a = V(e, "home");
    if ("home" === a) return !0;
    if (B.has(a) || I.has(a)) return !0;
    var n = "function" == typeof s ? s(t) : {},
      r = String((n && n.schemeId) || "").trim(),
      i = String((n && n.shareCode) || "").trim();
    return !(!r && !i);
  },
  ensureCatalogBootstrapped: function (e) {
    var t = this,
      n = e && "object" === a(e) ? e : {},
      r = !0 === n.silent,
      i = !0 === n.preferCache;
    if (H(this.catalogSnapshot))
      return (this._catalogBootstrapped = !0), Promise.resolve(!0);
    if (this._catalogBootstrapPromise) return this._catalogBootstrapPromise;
    var o = Date.now();
    return (
      (this._catalogBootstrapPromise = Promise.resolve()
        .then(function () {
          return t.bootstrapCatalogData({ silent: r, preferCache: i });
        })
        .then(function () {
          return (
            (t._catalogBootstrapped = H(t.catalogSnapshot)),
            t._catalogBootstrapped &&
              (t._catalogLiteBootstrapped = z(t.catalogSnapshot)),
            "function" == typeof t.recordPerfEvent &&
              t.recordPerfEvent("catalog_bootstrap", o, {
                ok: !0 === t._catalogBootstrapped,
              }),
            t._catalogBootstrapped
          );
        })
        .finally(function () {
          t._catalogBootstrapPromise = null;
        })),
      this._catalogBootstrapPromise
    );
  },
  ensureDiyCatalogBootstrapped: function (e) {
    var t = this,
      n = e && "object" === a(e) ? e : {},
      r = !0 === n.silent,
      i = !1 !== n.preferCache,
      o = Q(this.catalogSnapshot),
      s = !0 === this._diyMaterialsBundleReady;
    if (
      o &&
      s &&
      !(function () {
        try {
          var e = "function" == typeof getApp ? getApp() : null,
            t = e && e.globalData ? e.globalData : null;
          if (!t) return !1;
          var a = Number(t.pendingDiyCatalogSnapshotAt || 0);
          return (!a || Date.now() - a <= b) && Q(t.pendingDiyCatalogSnapshot);
        } catch (e) {
          return !1;
        }
      })()
    )
      return (this._catalogBootstrapped = !0), Promise.resolve(!0);
    if (this._diyCatalogBootstrapPromise)
      return this._diyCatalogBootstrapPromise;
    var d = Date.now();
    return (
      (this._diyCatalogBootstrapPromise = Promise.resolve()
        .then(function () {
          return t.bootstrapDiyCatalogData({ silent: r, preferCache: i });
        })
        .then(function (e) {
          return (
            (t._catalogBootstrapped = Q(t.catalogSnapshot)),
            "function" == typeof t.recordPerfEvent &&
              t.recordPerfEvent("catalog_diy_bootstrap", d, {
                ok: !0 === e && !0 === t._catalogBootstrapped,
              }),
            t._catalogBootstrapped
          );
        })
        .finally(function () {
          t._diyCatalogBootstrapPromise = null;
        })),
      this._diyCatalogBootstrapPromise
    );
  },
  ensureCatalogLiteBootstrapped: function (e) {
    var t = this,
      n = e && "object" === a(e) ? e : {},
      r = !0 === n.silent,
      i = !1 !== n.preferCache;
    if (
      this._catalogLiteBootstrapped &&
      (z(this.catalogLiteSnapshot) || z(this.catalogSnapshot))
    )
      return Promise.resolve(!0);
    if (
      ((this._catalogLiteBootstrapped = !1),
      z(this.catalogLiteSnapshot) || z(this.catalogSnapshot))
    )
      return (this._catalogLiteBootstrapped = !0), Promise.resolve(!0);
    if (this._catalogLiteBootstrapPromise)
      return this._catalogLiteBootstrapPromise;
    var o = Date.now();
    return (
      (this._catalogLiteBootstrapPromise = Promise.resolve()
        .then(function () {
          return t.bootstrapCatalogLiteData({ silent: r, preferCache: i });
        })
        .then(function (e) {
          return (
            !0 === e &&
              (z(t.catalogLiteSnapshot) || z(t.catalogSnapshot)) &&
              (t._catalogLiteBootstrapped = !0),
            "function" == typeof t.recordPerfEvent &&
              t.recordPerfEvent("catalog_bootstrap_lite", o, { ok: !0 === e }),
            !0 === e
          );
        })
        .finally(function () {
          t._catalogLiteBootstrapPromise = null;
        })),
      this._catalogLiteBootstrapPromise
    );
  },
  ensureProfileDomainBootstrapped: function () {
    var a = this;
    if (!this.data || !0 !== this.data.isLoggedIn) return Promise.resolve(!1);
    if (this._profileDomainBootstrapped) return Promise.resolve(!0);
    if (this._profileBootstrapPromise) return this._profileBootstrapPromise;
    var n = Date.now();
    return (
      (this._profileBootstrapPromise = Promise.resolve()
        .then(
          t(
            e().mark(function t() {
              var r;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), a.loadPersistedData();
                    case 2:
                      return (
                        (r = a.loadAddressAndDashboard({ profileVisible: !0 })),
                        a.loadAddressAndDashboard(),
                        (e.next = 6),
                        r
                      );
                    case 6:
                      return (
                        (a._profileDomainBootstrapped = !0),
                        "function" == typeof a.recordPerfEvent &&
                          a.recordPerfEvent("profile_bootstrap", n, { ok: !0 }),
                        e.abrupt("return", !0)
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          )
        )
        .finally(function () {
          a._profileBootstrapPromise = null;
        })),
      this._profileBootstrapPromise
    );
  },
  hydrateTabDependencies: function (a) {
    var n = this;
    return t(
      e().mark(function t() {
        var r, i, o, s;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ("cart" === (r = V(a, "home")) &&
                    "function" == typeof n.restoreLocalCartSnapshot &&
                    n.restoreLocalCartSnapshot(),
                  "inspiration" !== r)
                ) {
                  e.next = 10;
                  break;
                }
                return (
                  (e.next = 5), n.ensureCatalogLiteBootstrapped({ silent: !0 })
                );
              case 5:
                if ("function" != typeof n.ensureInspirationFirstPage) {
                  e.next = 8;
                  break;
                }
                return (
                  (e.next = 8),
                  n.ensureInspirationFirstPage({
                    presetCategory: n.data && n.data.presetCategory,
                    reason: "tab_hydration",
                  })
                );
              case 8:
                e.next = 18;
                break;
              case 10:
                if ("diy" !== r) {
                  e.next = 15;
                  break;
                }
                return (
                  (e.next = 13),
                  n.ensureDiyCatalogBootstrapped({ preferCache: !0 })
                );
              case 13:
                e.next = 18;
                break;
              case 15:
                if (!B.has(r)) {
                  e.next = 18;
                  break;
                }
                return (
                  (e.next = 18),
                  n.ensureCatalogBootstrapped({ preferCache: "diy" !== r })
                );
              case 18:
                if (!I.has(r)) {
                  e.next = 21;
                  break;
                }
                return (
                  (e.next = 21), n.ensureCatalogLiteBootstrapped({ silent: !0 })
                );
              case 21:
                if (
                  "cart" !== r ||
                  !n.data ||
                  !0 !== n.data.isLoggedIn ||
                  "function" != typeof n.loadPersistedData
                ) {
                  e.next = 31;
                  break;
                }
                if (
                  ((i = Promise.resolve(n.loadPersistedData())),
                  (o =
                    Array.isArray(n.data.cartItems) &&
                    n.data.cartItems.length > 0),
                  (s = function (e) {
                    n.reportInitIssue("cart_background_sync", e, {
                      toast: !1,
                      fallbackMessage: "购物车同步失败",
                    });
                  }),
                  o)
                ) {
                  e.next = 30;
                  break;
                }
                return (e.next = 28), i.catch(s);
              case 28:
                e.next = 31;
                break;
              case 30:
                i.catch(s);
              case 31:
                if (
                  ("diy" === r &&
                    "function" == typeof n.prewarmDiyRuntimeResources &&
                    n.deferNonCriticalTask(function () {
                      n.prewarmDiyRuntimeResources({
                        reason: "tab_hydration_diy",
                      });
                    }, 18),
                  "diy" === r &&
                    "function" == typeof n.prewarmBlindBoxPresetPool &&
                    n.deferNonCriticalTask(function () {
                      n.prewarmBlindBoxPresetPool({
                        reason: "tab_hydration_blindbox",
                        limit: 8,
                        fullPresetLimit: 1,
                        renderWarmupLimit: 1,
                        targetCount: 3,
                      });
                    }, 80),
                  !I.has(r) || !n.data || !0 !== n.data.isLoggedIn)
                ) {
                  e.next = 36;
                  break;
                }
                return (e.next = 36), n.ensureProfileDomainBootstrapped();
              case 36:
              case "end":
                return e.stop();
            }
        }, t);
      })
    )();
  },
  scheduleTabHydration: function (e, t) {
    var n = this,
      r = t && "object" === a(t) ? t : {},
      i = V(e, "home"),
      o = Number.isFinite(Number(r.delayMs))
        ? Math.max(0, Number(r.delayMs))
        : 72;
    this.deferNonCriticalTask(function () {
      n.hydrateTabDependencies(i);
    }, o);
  },
  openStandaloneDiyLoadingGate: function (e) {
    var t = this,
      n = e && "object" === a(e) ? e : {},
      r = !1 !== n.visible,
      i = !0 === n.waitForPatternReady,
      o =
        n.preparedStages && "object" === a(n.preparedStages)
          ? n.preparedStages
          : {};
    (this._standaloneDiyLoadingPending = !0),
      (this._standaloneDiyTrayReady = !0 === o.tray),
      (this._standaloneDiyCatalogReady =
        !0 === o.catalog || !0 === o.materials),
      (this._standaloneDiyLayoutReady = !1),
      (this._standaloneDiyGeometryReady = !0 === o.geometry),
      (this._standaloneDiyBlindBoxReady = S({ preparedStages: o }, "blindbox")),
      (this._standaloneDiyWaitForPatternReady = i),
      (this._standaloneDiyPatternReady = !0 === o.pattern || !i),
      (this._standaloneDiyGateOpenedAt = Date.now()),
      (this._standaloneDiyGateMinMaskMs = (function (e) {
        var t = e && "object" === a(e) ? e : {},
          n =
            t.preparedStages && "object" === a(t.preparedStages)
              ? t.preparedStages
              : {};
        if (!0 === t.waitForPatternReady) return 1250;
        var r = !0 === n.catalog || !0 === n.materials,
          i = !0 === n.pattern || !0 !== t.waitForPatternReady,
          o = !0 === n.geometry,
          s = !0 === n.tray;
        return (r && i && o && s) || (r && i) ? 720 : 980;
      })(n)),
      (this._standaloneDiyGateStageTimes = {
        open: this._standaloneDiyGateOpenedAt,
      }),
      F(this, "standalone_diy_gate_open", "open", {
        waitForPatternReady: i,
        preparedStages: {
          tray: !0 === o.tray,
          catalog: !0 === o.catalog || !0 === o.materials,
          pattern: !0 === o.pattern,
          geometry: !0 === o.geometry,
          blindbox: !0 === this._standaloneDiyBlindBoxReady,
        },
      }),
      r && "function" == typeof this.setDataPatch
        ? this.setDataPatch({
            standaloneDiyEntryMaskVisible: !0,
            standaloneDiySceneMasked: !0,
          })
        : r &&
          "function" == typeof this.setData &&
          this.setData({
            standaloneDiyEntryMaskVisible: !0,
            standaloneDiySceneMasked: !0,
          });
    var s = function () {
      t._standaloneDiyLoadingPending &&
        t.data &&
        !0 === t.data.isStandaloneDiy &&
        (F(t, "standalone_diy_gate_hard_fallback", "hard_fallback", {
          stageTimes: Object.assign({}, t._standaloneDiyGateStageTimes || {}),
          ready: {
            tray: !0 === t._standaloneDiyTrayReady,
            catalog: !0 === t._standaloneDiyCatalogReady,
            layout: !0 === t._standaloneDiyLayoutReady,
            pattern: !0 === t._standaloneDiyPatternReady,
            geometry: !0 === t._standaloneDiyGeometryReady,
            blindbox: !0 === t._standaloneDiyBlindBoxReady,
          },
        }),
        t.closeStandaloneDiyLoadingGate());
    };
    "function" == typeof this.setManagedTimeout
      ? (this._standaloneDiyLoadingHardFallback = this.setManagedTimeout(
          s,
          6200
        ))
      : (this._standaloneDiyLoadingHardFallback = setTimeout(s, 6200));
    var d = function e() {
      if (
        t._standaloneDiyLoadingPending &&
        t.data &&
        !0 === t.data.isStandaloneDiy
      )
        return t._standaloneDiyTrayReady &&
          t._standaloneDiyCatalogReady &&
          t._standaloneDiyLayoutReady &&
          t._standaloneDiyPatternReady &&
          t._standaloneDiyGeometryReady &&
          t._standaloneDiyBlindBoxReady
          ? void t.closeStandaloneDiyLoadingGate()
          : ("function" == typeof t.prewarmBlindBoxPresetPool &&
              t.prewarmBlindBoxPresetPool({
                reason: "standalone_diy_gate_watchdog",
                limit: 8,
                fullPresetLimit: 1,
                renderWarmupLimit: 1,
                targetCount: 3,
                force: !0,
              }),
            void ("function" == typeof t.setManagedTimeout
              ? (t._standaloneDiyLoadingWatchdog = t.setManagedTimeout(e, 1800))
              : (t._standaloneDiyLoadingWatchdog = setTimeout(e, 1800))));
      t.closeStandaloneDiyLoadingGate();
    };
    "function" != typeof this.setManagedTimeout
      ? (this._standaloneDiyLoadingWatchdog = setTimeout(d, 9500))
      : (this._standaloneDiyLoadingWatchdog = this.setManagedTimeout(d, 9500));
  },
  resolveStandaloneDiyLoadingGate: function (e) {
    if (this._standaloneDiyLoadingPending) {
      var t = v(e);
      t &&
        ((this._standaloneDiyGateStageTimes &&
          "object" === a(this._standaloneDiyGateStageTimes)) ||
          (this._standaloneDiyGateStageTimes = {}),
        this._standaloneDiyGateStageTimes[t] ||
          ((this._standaloneDiyGateStageTimes[t] = Date.now()),
          F(this, "standalone_diy_gate_stage", t))),
        "tray" === t && (this._standaloneDiyTrayReady = !0),
        "catalog" === t && (this._standaloneDiyCatalogReady = !0),
        "layout" === t && (this._standaloneDiyLayoutReady = !0),
        "geometry" === t && (this._standaloneDiyGeometryReady = !0),
        "blindbox" === t && (this._standaloneDiyBlindBoxReady = !0),
        "pattern" === t &&
          ((this._standaloneDiyTrayReady = !0),
          (this._standaloneDiyPatternReady = !0)),
        this._standaloneDiyGeometryReady ||
          "function" != typeof this.tryResolveStandaloneDiyGeometryGate ||
          this.tryResolveStandaloneDiyGeometryGate("stage:".concat(t || "")),
        this._standaloneDiyTrayReady &&
          this._standaloneDiyCatalogReady &&
          this._standaloneDiyLayoutReady &&
          this._standaloneDiyPatternReady &&
          this._standaloneDiyGeometryReady &&
          this._standaloneDiyBlindBoxReady &&
          (F(this, "standalone_diy_gate_ready", t),
          this.closeStandaloneDiyLoadingGate());
    }
  },
  closeStandaloneDiyLoadingGate: function () {
    var e = this;
    if (this._standaloneDiyLoadingPending) {
      (this._standaloneDiyLoadingPending = !1),
        (this._standaloneDiyTrayReady = !0),
        (this._standaloneDiyCatalogReady = !0),
        (this._standaloneDiyLayoutReady = !0),
        (this._standaloneDiyGeometryReady = !0),
        (this._standaloneDiyBlindBoxReady = !0),
        (this._standaloneDiyPatternReady = !0),
        (this._standaloneDiyWaitForPatternReady = !1);
      var t = Number(this._standaloneDiyGateOpenedAt) || Date.now();
      F(this, "standalone_diy_gate_close", "close", {
        stageTimes: Object.assign({}, this._standaloneDiyGateStageTimes || {}),
      }),
        (this._standaloneDiyGateOpenedAt = 0),
        this._standaloneDiyLoadingWatchdog &&
          ("function" == typeof this.clearManagedTimeout
            ? this.clearManagedTimeout(this._standaloneDiyLoadingWatchdog)
            : clearTimeout(this._standaloneDiyLoadingWatchdog),
          (this._standaloneDiyLoadingWatchdog = null)),
        this._standaloneDiyLoadingHardFallback &&
          ("function" == typeof this.clearManagedTimeout
            ? this.clearManagedTimeout(this._standaloneDiyLoadingHardFallback)
            : clearTimeout(this._standaloneDiyLoadingHardFallback),
          (this._standaloneDiyLoadingHardFallback = null));
      var n = this._flushShellUnlockAfterDiyGate;
      (this._flushShellUnlockAfterDiyGate = null),
        "function" == typeof n &&
          this.deferNonCriticalTask(function () {
            n();
          }, 160);
      var r,
        i,
        o,
        s = function () {
          e.data &&
            !0 === e.data.isStandaloneDiy &&
            ("function" == typeof e.stabilizeStandaloneDiyTrayForReveal &&
              e.stabilizeStandaloneDiyTrayForReveal(),
            "function" != typeof e.setDataPatch
              ? "function" == typeof e.setData &&
                e.setData({
                  standaloneDiyEntryMaskVisible: !1,
                  standaloneDiySceneMasked: !1,
                })
              : e.setDataPatch({
                  standaloneDiyEntryMaskVisible: !1,
                  standaloneDiySceneMasked: !1,
                }));
        },
        d = Math.max(0, Date.now() - t),
        l = Math.max(0, Number(this._standaloneDiyGateMinMaskMs || 980)),
        c = Math.max(0, l - d),
        u =
          ((i = (r = this) && "object" === a(r) ? r : {}),
          (o = "function" == typeof i.trayComp ? i.trayComp() : null) && o.ready
            ? 120
            : 420),
        y = 80 + Math.max(c, u);
      (this._standaloneDiyGateOpenedAt = t),
        F(this, "standalone_diy_gate_unmask_scheduled", "unmask_scheduled", {
          revealDelayMs: y,
          remainingMinMaskMs: c,
          elapsedMs: d,
          trayStabilizeMs: u,
        }),
        (this._standaloneDiyGateOpenedAt = 0),
        (this._standaloneDiyGateMinMaskMs = 0),
        (this._standaloneDiyGateStageTimes = null),
        "function" != typeof this.setManagedTimeout
          ? setTimeout(s, y)
          : this.setManagedTimeout(s, y);
    }
  },
  stabilizeStandaloneDiyTrayForReveal: function () {
    var e = "function" == typeof this.trayComp ? this.trayComp() : null;
    if (!e || !e.ready) return !1;
    "function" == typeof this.syncTrayPhysicsGeometry &&
      this.syncTrayPhysicsGeometry("standalone_diy_reveal"),
      "function" == typeof e.syncLayerStyles && e.syncLayerStyles();
    var t =
      e.properties && e.properties.traySize
        ? e.properties.traySize
        : e.displaySize || e.logicalSize;
    return (
      "function" == typeof e.syncCanvasResolutionFromSize
        ? e.syncCanvasResolutionFromSize(t)
        : "function" == typeof e.syncCanvasResolution &&
          e.syncCanvasResolution(t),
      e.isStrung && "function" == typeof e.layoutStrungBeadsImmediately
        ? e.layoutStrungBeadsImmediately(e.beadsRef)
        : e.isStrung ||
          "function" != typeof e.clampLooseBeadsToTrayBounds ||
          e.clampLooseBeadsToTrayBounds(),
      e.isStrung && "function" == typeof e.syncStrungDomOverlay
        ? e.syncStrungDomOverlay({ force: !0 })
        : "function" == typeof e.render && e.render(),
      (this._standaloneDiyGeometryReady = !0),
      !0
    );
  },
  tryResolveStandaloneDiyGeometryGate: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    if (!this.data || !0 !== this.data.isStandaloneDiy) return !1;
    var t = "function" == typeof this.trayComp ? this.trayComp() : null;
    if (!(t && t.ready && t.bgCanvas && t.beadCanvas)) return !1;
    var a =
      "function" == typeof this.syncTrayPhysicsGeometry &&
      this.syncTrayPhysicsGeometry(e || "standalone_diy_gate");
    return !!a && ((this._standaloneDiyGeometryReady = !0), !0);
  },
  onLoad: function (n) {
    var d = this,
      l = (function () {
        try {
          if ("function" != typeof getApp) return "";
          var e = getApp(),
            t = e && e.globalData ? e.globalData : {};
          return String(t.launchScene || "").trim();
        } catch (e) {
          return "";
        }
      })(),
      c = Object.assign(
        {},
        n && "object" === a(n) ? n : {},
        (n && n.scene) || !l ? {} : { scene: l }
      );
    (this._bootPerfStartedAt = Date.now()),
      (this._pageHidden = !1),
      (this._firstContentfulSectionMarked = !1),
      (this._inspirationFirstImageMarked = !1),
      (this.toastTimer = null),
      (this.clockTimer = null),
      (this.lastScrollTop = 0),
      (this.copyrightContext = null),
      (this._initWarnGate = {}),
      (this._initToastGate = {}),
      this.ensureTimerRegistry(),
      this.initializeCatalogSnapshot(),
      (this._catalogBootstrapped = H(this.catalogSnapshot)),
      (this._catalogBootstrapPromise = null),
      (this._diyCatalogBootstrapPromise = null),
      (this._catalogLiteBootstrapPromise = null),
      (this._catalogLiteBootstrapped = !1),
      (this._profileBootstrapPromise = null),
      (this._profileDomainBootstrapped = !1),
      (this._webPaySceneOpening = !1),
      (this._webPayPromptedOrderNo = ""),
      (this._flushShellUnlockAfterDiyGate = null),
      this.initStaticData(),
      "function" == typeof this.setLoadingStage &&
        this.setLoadingStage("booting"),
      "function" == typeof this.restoreWristPreference &&
        this.restoreWristPreference();
    var u,
      y,
      h = r(),
      g = i(),
      m =
        c && c[o.activeTab] ? String(c[o.activeTab]).trim().toLowerCase() : "",
      b = c && c[o.source] ? String(c[o.source]).trim().toLowerCase() : "",
      D = G(c && c.returnTab),
      v =
        ((u = c && c.presetCategory ? c.presetCategory : ""),
        "couple" ===
          (y = String(u || "")
            .trim()
            .toLowerCase()) ||
        "qinglv" === y ||
        "情侣" === y ||
        "情侣款式" === y
          ? "qinglv"
          : y),
      P = (function (e) {
        return j(e, ["webPayToken", "wp"], "wp");
      })(c),
      L = (function (e) {
        return j(e, ["webLoginToken", "wl"], "wl");
      })(c),
      C = V(
        m ||
          String(this.data.activeTab || "")
            .trim()
            .toLowerCase(),
        ""
      );
    if (P || L || "diy" !== C) {
      var k = V(
          m ||
            String(this.data.activeTab || "")
              .trim()
              .toLowerCase(),
          "home"
        ),
        T = "schemes" === k || "legacy_schemes" === b || "v2_designs" === b,
        w = P || L || T ? "profile" : k,
        x =
          "cart" === w &&
          (function (e, t) {
            var n = e && "object" === a(e) ? e : {},
              r = String(t || n.source || "")
                .trim()
                .toLowerCase(),
              i = String(n.checkoutIntent || n.checkout || "")
                .trim()
                .toLowerCase();
            return "diy_checkout" === r || "1" === i || "true" === i;
          })(c, b),
        M = "diy" === w,
        B = M ? $(c) : null,
        A = _({ isStandaloneDiy: M, routeSource: b }),
        W = G(A && A.returnTab),
        N = M ? D || W : "",
        F = M && J(A),
        E = !!P || !!L || (M && (b.startsWith("standalone_diy") || !!A)),
        U = M && E ? "startup_standalone_diy" : "startup",
        z = S(A, "catalog") || S(A, "materials"),
        q = S(A, "pattern"),
        Y = S(A, "geometry"),
        X = S(A, "blindbox"),
        K = String((A && A.blindBoxSessionSeed) || "")
          .trim()
          .slice(0, 96);
      M && K && (this._blindBoxSessionSeed = K),
        (this._standaloneDiyLoadingPending = !1),
        (this._standaloneDiyTrayReady = !M),
        (this._standaloneDiyCatalogReady = !M || z || F),
        (this._standaloneDiyLayoutReady = !M),
        (this._standaloneDiyGeometryReady = !M || Y),
        (this._standaloneDiyBlindBoxReady = !M || X || F),
        (this._standaloneDiyPatternReady = !M || q),
        (this._standaloneDiyWaitForPatternReady = !1),
        (this._standaloneDiyLoadingWatchdog = null),
        (this._standaloneDiyLoadingHardFallback = null);
      var ee = !(
        !(M && B && Array.isArray(B.pattern) && B.pattern.length) || q
      );
      M &&
        this.openStandaloneDiyLoadingGate({
          visible: !0,
          waitForPatternReady: ee,
          preparedStages: {
            tray: !1,
            catalog: z || F,
            materials: z || F,
            pattern: q,
            geometry: Y,
            blindbox: X || F,
          },
        }),
        p(this, w, h),
        "function" == typeof this.setLoadingStage &&
          this.setLoadingStage("data_syncing");
      var te = {
        isStandaloneDiy: M,
        diyReturnTab: N,
        standaloneDiyEntryMaskVisible: M,
        standaloneDiySceneMasked: M,
        profileSubView: T ? "my_designs" : "",
        isNavVisible: !(T || P || L),
        pendingWebPaySceneToken: P,
        webPaySceneResolving: !1,
        pendingWebLoginSceneToken: L,
        webLoginConfirmVisible: !1,
        webLoginConfirmLoading: !1,
        webLoginConfirmStatus: "",
        webLoginConfirmMessage: "",
      };
      B && Array.isArray(B.pattern) && B.pattern.length
        ? ((te.currentPattern = B.pattern),
          (te.currentRenderPlan = Array.isArray(B.renderPlan || B.render_plan)
            ? B.renderPlan || B.render_plan
            : []),
          (te.bgIndex = B.bgIndex),
          (te.currentSchemeName = B.name || ""),
          (this._earlyDiySchemeApplied = !0))
        : (this._earlyDiySchemeApplied = !1),
        "inspiration" === w && v && (te.presetCategory = v),
        E && ((te.appLoaded = !0), (te.loadProgress = 100)),
        this.setData(te, function () {
          M &&
            "function" == typeof d.tryResolveStandaloneDiyGeometryGate &&
            d.tryResolveStandaloneDiyGeometryGate("onload_state_ready"),
            M &&
              "function" != typeof d.computeViewportMetrics &&
              "function" == typeof d.resolveStandaloneDiyLoadingGate &&
              d.resolveStandaloneDiyLoadingGate("layout");
        }),
        M &&
          "function" == typeof this.prewarmDiyRuntimeResources &&
          this.deferNonCriticalTask(function () {
            d.prewarmDiyRuntimeResources({
              reason: "onload_standalone_diy",
              limit: 18,
            });
          }, 24),
        M &&
          "function" == typeof this.prewarmBlindBoxPresetPool &&
          this.deferNonCriticalTask(function () {
            d.prewarmBlindBoxPresetPool({
              reason: "onload_standalone_blindbox",
              limit: 8,
              fullPresetLimit: 1,
              renderWarmupLimit: 1,
              targetCount: 3,
            });
          }, 96),
        P &&
          "function" == typeof this.openWebPayOrderFromScene &&
          this.deferNonCriticalTask(function () {
            d.openWebPayOrderFromScene(P, {
              source: "onload_fast",
              skipProfileBootstrap: !0,
              autoPromptPay: !0,
            });
          }, 16),
        this.deferNonCriticalTask(
          function () {
            d.preloadAssets({ reason: U });
          },
          E ? 72 : 18
        ),
        g && this.applyAuthUserProfile(g);
      var ae = "function" == typeof s ? s(c) : {},
        ne = !(
          !String((ae && ae.schemeId) || "").trim() &&
          !String((ae && ae.shareCode) || "").trim()
        ),
        re = this.shouldBootstrapCatalogOnLoad(w, c),
        ie = ("home" === w || "inspiration" === w || I.has(w)) && !ne,
        oe = re
          ? "diy" === w
            ? this.ensureDiyCatalogBootstrapped({ silent: !0, preferCache: !0 })
            : ie
            ? this.ensureCatalogLiteBootstrapped({ silent: !0 })
            : this.ensureCatalogBootstrapped({ preferCache: "diy" !== w })
          : Promise.resolve(!1);
      re ||
        this.deferNonCriticalTask(function () {
          d.ensureCatalogLiteBootstrapped({ silent: !0 });
        }, 220),
        oe.finally(
          t(
            e().mark(function a() {
              var n, r;
              return e().wrap(
                function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        if (
                          ((M && "diy" === w && !Q(d.catalogSnapshot)) ||
                            d.resolveStandaloneDiyLoadingGate("catalog"),
                          "diy" === w &&
                            "function" == typeof d.prewarmBlindBoxPresetPool &&
                            d.deferNonCriticalTask(function () {
                              d.prewarmBlindBoxPresetPool({
                                reason: "onload_catalog_ready_blindbox",
                                limit: 8,
                                fullPresetLimit: 1,
                                renderWarmupLimit: 1,
                                targetCount: 3,
                                force: !0,
                              });
                            }, 24),
                          (n = (function () {
                            var a = t(
                              e().mark(function t() {
                                return e().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (!h) {
                                            e.next = 9;
                                            break;
                                          }
                                          return (
                                            (e.prev = 1),
                                            (e.next = 4),
                                            d.ensureLoginState({
                                              silent: !0,
                                              forceRefresh: !0,
                                            })
                                          );
                                        case 4:
                                          e.next = 9;
                                          break;
                                        case 6:
                                          (e.prev = 6),
                                            (e.t0 = e.catch(1)),
                                            d.reportInitIssue(
                                              "auth_bootstrap",
                                              e.t0,
                                              {
                                                toast: !1,
                                                fallbackMessage: "初始登录失败",
                                              }
                                            );
                                        case 9:
                                          if (!d.data.isLoggedIn) {
                                            e.next = 24;
                                            break;
                                          }
                                          if (!I.has(w)) {
                                            e.next = 14;
                                            break;
                                          }
                                          if (!f(d)) {
                                            e.next = 14;
                                            break;
                                          }
                                          return (
                                            (e.next = 14),
                                            d.ensureProfileDomainBootstrapped()
                                          );
                                        case 14:
                                          if (
                                            !L ||
                                            "function" !=
                                              typeof d.openWebLoginConfirmFromScene
                                          ) {
                                            e.next = 19;
                                            break;
                                          }
                                          return (
                                            (e.next = 17),
                                            d.openWebLoginConfirmFromScene(L)
                                          );
                                        case 17:
                                          e.next = 22;
                                          break;
                                        case 19:
                                          if (
                                            !P ||
                                            !String(
                                              (d.data &&
                                                d.data
                                                  .pendingWebPaySceneToken) ||
                                                ""
                                            ).trim() ||
                                            "function" !=
                                              typeof d.openWebPayOrderFromScene
                                          ) {
                                            e.next = 22;
                                            break;
                                          }
                                          return (
                                            (e.next = 22),
                                            d.openWebPayOrderFromScene(P, {
                                              source: "onload",
                                            })
                                          );
                                        case 22:
                                          e.next = 33;
                                          break;
                                        case 24:
                                          if (
                                            ((h || L || P) &&
                                              d.resetAuthBoundData(),
                                            !L ||
                                              "function" !=
                                                typeof d.openWebLoginConfirmFromScene)
                                          ) {
                                            e.next = 30;
                                            break;
                                          }
                                          return (
                                            (e.next = 28),
                                            d.openWebLoginConfirmFromScene(L)
                                          );
                                        case 28:
                                          e.next = 33;
                                          break;
                                        case 30:
                                          if (
                                            !P ||
                                            !String(
                                              (d.data &&
                                                d.data
                                                  .pendingWebPaySceneToken) ||
                                                ""
                                            ).trim() ||
                                            "function" !=
                                              typeof d.openWebPayOrderFromScene
                                          ) {
                                            e.next = 33;
                                            break;
                                          }
                                          return (
                                            (e.next = 33),
                                            d.openWebPayOrderFromScene(P, {
                                              source: "onload",
                                            })
                                          );
                                        case 33:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  t,
                                  null,
                                  [[1, 6]]
                                );
                              })
                            );
                            return function () {
                              return a.apply(this, arguments);
                            };
                          })()),
                          !(!L && !P && !I.has(w) && "cart" !== w))
                        ) {
                          a.next = 8;
                          break;
                        }
                        Z(
                          d,
                          function () {
                            n().catch(function (e) {
                              d.reportInitIssue("auth_bootstrap_deferred", e, {
                                toast: !1,
                                fallbackMessage: "初始登录失败",
                              });
                            });
                          },
                          260,
                          2500
                        ),
                          (a.next = 10);
                        break;
                      case 8:
                        return (a.next = 10), n();
                      case 10:
                        if (!re) {
                          a.next = 28;
                          break;
                        }
                        if (
                          !(
                            d._earlyDiySchemeApplied &&
                            B &&
                            Array.isArray(B.pattern) &&
                            B.pattern.length
                          )
                        ) {
                          a.next = 27;
                          break;
                        }
                        if (
                          ((a.prev = 12),
                          "function" != typeof d.ensurePatternMaterialAssets)
                        ) {
                          a.next = 16;
                          break;
                        }
                        return (
                          (a.next = 16),
                          d.ensurePatternMaterialAssets(B.pattern, {
                            materialMap: B.materialMap || B.materialSnapshot,
                            preferCache: !0,
                            remoteTimeoutMs: 4200,
                          })
                        );
                      case 16:
                        "function" == typeof d.loadScheme &&
                          d.data &&
                          d.data.isStandaloneDiy &&
                          ((r =
                            B.sourceCreatorWorkId || B.source_creator_work_id
                              ? {
                                  id:
                                    B.sourceDesignerId ||
                                    B.source_designer_id ||
                                    "",
                                  category: "designer",
                                  sourceCreatorWorkId:
                                    B.sourceCreatorWorkId ||
                                    B.source_creator_work_id ||
                                    "",
                                  source_creator_work_id:
                                    B.sourceCreatorWorkId ||
                                    B.source_creator_work_id ||
                                    "",
                                  sourceInspirationTemplateId:
                                    B.sourceInspirationTemplateId ||
                                    B.source_inspiration_template_id ||
                                    "",
                                  source_inspiration_template_id:
                                    B.sourceInspirationTemplateId ||
                                    B.source_inspiration_template_id ||
                                    "",
                                  sourceDesignerId:
                                    B.sourceDesignerId ||
                                    B.source_designer_id ||
                                    "",
                                  source_designer_id:
                                    B.sourceDesignerId ||
                                    B.source_designer_id ||
                                    "",
                                  sourceEntry:
                                    B.sourceEntry ||
                                    B.source_entry ||
                                    B.source ||
                                    "",
                                  source_entry:
                                    B.sourceEntry ||
                                    B.source_entry ||
                                    B.source ||
                                    "",
                                  pattern: B.pattern,
                                }
                              : null),
                          d.loadScheme(
                            B.pattern,
                            B.bgIndex || 0,
                            r,
                            B.name || "",
                            { renderPlan: B.renderPlan || B.render_plan }
                          )),
                          (a.next = 22);
                        break;
                      case 19:
                        (a.prev = 19),
                          (a.t0 = a.catch(12)),
                          d.reportInitIssue(
                            "early_diy_scheme_materials",
                            a.t0,
                            { toast: !1, fallbackMessage: "方案素材同步失败" }
                          );
                      case 22:
                        return (
                          (a.prev = 22),
                          d.resolveStandaloneDiyLoadingGate("pattern"),
                          a.finish(22)
                        );
                      case 25:
                        a.next = 28;
                        break;
                      case 27:
                        d.tryApplySharedScheme(c);
                      case 28:
                        if (
                          "inspiration" !== w ||
                          "function" != typeof d.ensureInspirationFirstPage
                        ) {
                          a.next = 31;
                          break;
                        }
                        return (
                          (a.next = 31),
                          d.ensureInspirationFirstPage({
                            presetCategory: d.data && d.data.presetCategory,
                            reason: "onload_catalog_ready",
                          })
                        );
                      case 31:
                        d.deferNonCriticalTask(function () {
                          d.preloadAssets({ reason: "post-bootstrap" }),
                            "home" === w &&
                              "function" == typeof d.ensureHomeStepAutoplay &&
                              d.ensureHomeStepAutoplay();
                        }, 900),
                          "function" == typeof d.setLoadingStage &&
                            (d.data && d.data.appLoaded
                              ? d.setLoadingStage("interactive")
                              : d.setLoadingStage("data_syncing"));
                      case 33:
                      case "end":
                        return a.stop();
                    }
                },
                a,
                null,
                [[12, 19, 22, 25]]
              );
            })
          )
        ),
        this.computeViewportMetrics(function () {
          M &&
            "function" == typeof d.resolveStandaloneDiyLoadingGate &&
            d.resolveStandaloneDiyLoadingGate("layout");
        }),
        this.updateClock(),
        (this.clockTimer = this.setManagedInterval(function () {
          return d.updateClock();
        }, 3e4)),
        I.has(w) || this.scheduleTabHydration(w),
        x &&
          "function" == typeof this.handleStartCheckout &&
          this.deferNonCriticalTask(function () {
            if (
              ("function" == typeof d.restoreLocalCartSnapshot &&
                d.restoreLocalCartSnapshot(),
              "function" == typeof d.updateCartSummary)
            ) {
              var e =
                d.data && Array.isArray(d.data.cartItems)
                  ? d.data.cartItems
                  : [];
              d.updateCartSummary(e);
            }
            d.handleStartCheckout({ skipLoginCheck: !0 });
          }, 360);
    } else
      R(O(c), {
        methods: ["redirectTo", "reLaunch"],
        onFailed: function () {
          "function" == typeof d.showToast &&
            d.showToast("杩涘叆 DIY 澶辫触锛岃閲嶈瘯");
        },
      });
  },
  onUnload: function () {
    (this._pageHidden = !0),
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
  onHide: function () {
    var e = this;
    if (
      ((this._pageHidden = !0), "function" == typeof this.flushPendingPersists)
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
  syncAuthStateFromCacheOnShow: function (a) {
    var n = this;
    if (!this.data || "function" != typeof this.setData)
      return Promise.resolve(!1);
    if (!r())
      return !0 === this.data.isLoggedIn || !0 === this.data.authVerifying
        ? ("function" == typeof this.resetAuthBoundData &&
            this.resetAuthBoundData(),
          (this._profileDomainBootstrapped = !1),
          this.setData({ isLoggedIn: !1, authVerifying: !1 }),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    var o = i();
    if (
      (o &&
        "function" == typeof this.applyAuthUserProfile &&
        this.applyAuthUserProfile(o),
      !0 === this.data.isLoggedIn)
    )
      return Promise.resolve(!0);
    if (
      (this.setData({ isLoggedIn: !0, authVerifying: !0 }),
      this._authOnShowSyncPromise)
    )
      return this._authOnShowSyncPromise;
    var s = Date.now();
    return (
      (this._authOnShowSyncPromise = Promise.resolve()
        .then(
          t(
            e().mark(function t() {
              var r;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ("function" != typeof n.ensureLoginState) {
                        e.next = 3;
                        break;
                      }
                      return (
                        (e.next = 3),
                        n.ensureLoginState({ silent: !0, forceRefresh: !0 })
                      );
                    case 3:
                      if (n.data && !0 === n.data.isLoggedIn) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt("return", !1);
                    case 5:
                      if (
                        ((r = String(n.data.activeTab || "")
                          .trim()
                          .toLowerCase()),
                        !I.has(r) ||
                          "function" !=
                            typeof n.ensureProfileDomainBootstrapped)
                      ) {
                        e.next = 11;
                        break;
                      }
                      return (e.next = 9), n.ensureProfileDomainBootstrapped();
                    case 9:
                      e.next = 14;
                      break;
                    case 11:
                      if (
                        "cart" !== r ||
                        "function" != typeof n.loadPersistedData
                      ) {
                        e.next = 14;
                        break;
                      }
                      return (e.next = 14), n.loadPersistedData({ force: !0 });
                    case 14:
                      return (
                        "function" == typeof n.recordPerfEvent &&
                          n.recordPerfEvent("auth_onshow_cache_sync", s, {
                            reason: String(a || "").trim() || "onshow",
                            activeTab: r,
                          }),
                        e.abrupt("return", !0)
                      );
                    case 16:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          )
        )
        .catch(function (e) {
          return (
            "function" == typeof n.reportInitIssue &&
              n.reportInitIssue("auth_onshow_cache_sync", e, {
                toast: !1,
                fallbackMessage: "登录状态同步失败",
              }),
            !1
          );
        })
        .finally(function () {
          n._authOnShowSyncPromise = null;
        })),
      this._authOnShowSyncPromise
    );
  },
  onShow: function () {
    (this._pageHidden = !1),
      "function" == typeof this.consumeProfileAuthAvatarCropResult &&
        this.consumeProfileAuthAvatarCropResult();
    var e = String((this.data && this.data.activeTab) || "")
        .trim()
        .toLowerCase(),
      t = String((this.data && this.data.profileSubView) || "")
        .trim()
        .toLowerCase();
    if ("profile" !== e || "my_designs" !== t) {
      var a = {};
      this.data && !1 === this.data.isNavVisible && (a.isNavVisible = !0),
        "profile" !== e && t && (a.profileSubView = ""),
        Object.keys(a).length &&
          "function" == typeof this.setData &&
          this.setData(a);
    }
    "function" == typeof this.syncAuthStateFromCacheOnShow &&
      this.syncAuthStateFromCacheOnShow("index_onshow");
  },
};
