var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../../../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../../../../@babel/runtime/helpers/typeof"),
  o = require("../../deps/lifecycle-deps"),
  s = o.getDefaultAddress,
  i = o.listAddresses,
  n = o.getProfileDashboard,
  l = o.getCurrentCreatorApplication,
  u = o.getCreatorPanel,
  d = o.getCurrentDistributorApplication,
  c = o.getDistributorPanel;
function p(e) {
  var t = Number(e || 0) / 100;
  if (!Number.isFinite(t) || t <= 0) return "--";
  var r = Number.isInteger(t) ? String(t) : t.toFixed(2).replace(/\.?0+$/, "");
  return "".concat(r, "%");
}
module.exports = {
  loadAddressAndDashboard: function (o) {
    var m = this;
    return r(
      e().mark(function b() {
        var f, g, v, S, y, j;
        return e().wrap(function (b) {
          for (;;)
            switch ((b.prev = b.next)) {
              case 0:
                if (m.data.isLoggedIn) {
                  b.next = 2;
                  break;
                }
                return b.abrupt("return", !1);
              case 2:
                if (
                  ((f = o && "object" === a(o) ? o : {}),
                  (g = !0 === f.force),
                  (v = !0 === f.profileVisible),
                  (S = Date.now()),
                  !m._profileDashboardSyncPromise)
                ) {
                  b.next = 8;
                  break;
                }
                return b.abrupt("return", m._profileDashboardSyncPromise);
              case 8:
                if (g) {
                  b.next = 12;
                  break;
                }
                if (
                  !(
                    (y = Number(m._profileDashboardSyncedAt || 0)) > 0 &&
                    S - y < 25e3
                  )
                ) {
                  b.next = 12;
                  break;
                }
                return b.abrupt("return", !0);
              case 12:
                return (
                  m.setData({ profileDashboardLoading: !0 }),
                  (j = (function () {
                    var o = r(
                      e().mark(function r() {
                        var o,
                          b,
                          f,
                          g,
                          S,
                          y,
                          j,
                          C,
                          h,
                          A,
                          I,
                          N,
                          D,
                          w,
                          P,
                          x,
                          k,
                          R,
                          _,
                          L,
                          M,
                          T,
                          q,
                          B,
                          F,
                          V,
                          E,
                          G,
                          $,
                          z,
                          H,
                          J,
                          K,
                          O,
                          Q,
                          U,
                          W,
                          X,
                          Y,
                          Z,
                          ee,
                          te,
                          re,
                          ae,
                          oe,
                          se,
                          ie,
                          ne,
                          le,
                          ue,
                          de,
                          ce,
                          pe,
                          me;
                        return e().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (o =
                                    v ||
                                    ((r = m.data),
                                    (be = void 0),
                                    (fe = void 0),
                                    (be = r && "object" === a(r) ? r : {}),
                                    "profile" ===
                                      (fe = String(be.activeTab || "")
                                        .trim()
                                        .toLowerCase()) || "schemes" === fe)),
                                  (e.next = 3),
                                  Promise.allSettled([
                                    m.withRetry(
                                      function () {
                                        return Promise.resolve(s());
                                      },
                                      { attempts: 2, delayMs: 200 }
                                    ),
                                    m.withRetry(
                                      function () {
                                        return Promise.resolve(i());
                                      },
                                      { attempts: 2, delayMs: 200 }
                                    ),
                                    m.withRetry(
                                      function () {
                                        return Promise.resolve(n());
                                      },
                                      { attempts: 2, delayMs: 220 }
                                    ),
                                    m.withRetry(
                                      function () {
                                        return Promise.resolve(l());
                                      },
                                      { attempts: 2, delayMs: 220 }
                                    ),
                                    m.withRetry(
                                      function () {
                                        return Promise.resolve(d());
                                      },
                                      { attempts: 2, delayMs: 220 }
                                    ),
                                  ])
                                );
                              case 3:
                                return (
                                  (b = e.sent),
                                  (f = t(b, 5)),
                                  (g = f[0]),
                                  (S = f[1]),
                                  (y = f[2]),
                                  (j = f[3]),
                                  (C = f[4]),
                                  (h =
                                    "fulfilled" === j.status ? j.value : null),
                                  (A =
                                    "fulfilled" === C.status ? C.value : null),
                                  (I =
                                    h &&
                                    "object" === a(h) &&
                                    h.profile &&
                                    "object" === a(h.profile)
                                      ? h.profile
                                      : null),
                                  (N =
                                    A &&
                                    "object" === a(A) &&
                                    A.profile &&
                                    "object" === a(A.profile)
                                      ? A.profile
                                      : null),
                                  (D =
                                    "active" ===
                                    String(m.data.creatorIdentityStatus || "")
                                      .trim()
                                      .toLowerCase()),
                                  (w =
                                    "active" ===
                                    String(
                                      m.data.distributorIdentityStatus || ""
                                    )
                                      .trim()
                                      .toLowerCase()),
                                  (P = !(
                                    !I ||
                                    "active" !==
                                      String(I.status || "")
                                        .trim()
                                        .toLowerCase()
                                  )),
                                  (x = !!(
                                    (A &&
                                      "object" === a(A) &&
                                      !0 === A.isActive) ||
                                    (N && Number(N.id || 0) > 0)
                                  )),
                                  (k = o || D || P),
                                  (R = o || w || x),
                                  (e.next = 22),
                                  Promise.allSettled([
                                    k
                                      ? m.withRetry(
                                          function () {
                                            return Promise.resolve(u());
                                          },
                                          { attempts: 2, delayMs: 240 }
                                        )
                                      : Promise.resolve(null),
                                    R
                                      ? m.withRetry(
                                          function () {
                                            return Promise.resolve(c());
                                          },
                                          { attempts: 2, delayMs: 240 }
                                        )
                                      : Promise.resolve(null),
                                  ])
                                );
                              case 22:
                                return (
                                  (_ = e.sent),
                                  (L = t(_, 2)),
                                  (M = L[0]),
                                  (T = L[1]),
                                  "rejected" === g.status &&
                                    m.reportInitIssue(
                                      "address_default",
                                      g.reason,
                                      {
                                        toast: !1,
                                        fallbackMessage: "默认收货地址加载失败",
                                      }
                                    ),
                                  "rejected" === S.status &&
                                    m.reportInitIssue(
                                      "address_list",
                                      S.reason,
                                      {
                                        toast: !1,
                                        fallbackMessage: "收货地址列表加载失败",
                                      }
                                    ),
                                  "rejected" === y.status &&
                                    m.reportInitIssue(
                                      "profile_dashboard",
                                      y.reason,
                                      {
                                        toast: !1,
                                        fallbackMessage: "个人面板加载失败",
                                      }
                                    ),
                                  "rejected" === j.status &&
                                    m.reportInitIssue(
                                      "creator_application_current",
                                      j.reason,
                                      {
                                        toast: !1,
                                        fallbackMessage:
                                          "设计师申请状态加载失败",
                                      }
                                    ),
                                  k &&
                                    "rejected" === M.status &&
                                    m.reportInitIssue(
                                      "creator_panel",
                                      M.reason,
                                      {
                                        toast: !1,
                                        fallbackMessage: "设计师面板加载失败",
                                      }
                                    ),
                                  "rejected" === C.status &&
                                    m.reportInitIssue(
                                      "distributor_application_current",
                                      C.reason,
                                      {
                                        toast: !1,
                                        fallbackMessage:
                                          "分销商申请状态加载失败",
                                      }
                                    ),
                                  R &&
                                    "rejected" === T.status &&
                                    m.reportInitIssue(
                                      "distributor_panel",
                                      T.reason,
                                      {
                                        toast: !1,
                                        fallbackMessage: "分销商面板加载失败",
                                      }
                                    ),
                                  "rejected" !== g.status ||
                                    "rejected" !== S.status ||
                                    "rejected" !== y.status ||
                                    "rejected" !== j.status ||
                                    (k && "rejected" !== M.status) ||
                                    "rejected" !== C.status ||
                                    (R && "rejected" !== T.status) ||
                                    m.reportInitIssue(
                                      "profile_bootstrap",
                                      y.reason || S.reason || g.reason,
                                      {
                                        toast: !0,
                                        fallbackMessage:
                                          "个人中心数据加载失败，请稍后下拉重试",
                                      }
                                    ),
                                  (q =
                                    "fulfilled" === g.status ? g.value : null),
                                  (B =
                                    "fulfilled" === S.status
                                      ? S.value
                                      : m.data.addressList || []),
                                  (F =
                                    "fulfilled" === y.status ? y.value : null),
                                  (V =
                                    "fulfilled" === M.status ? M.value : null),
                                  (E =
                                    "fulfilled" === T.status ? T.value : null),
                                  (G =
                                    q ||
                                    (B && B[0] ? B[0] : null) ||
                                    m.data.selectedAddress ||
                                    null),
                                  ($ = {
                                    available: !1,
                                    estimatedFund: "0.00",
                                    pendingSettlement: "0.00",
                                    adoptionCount: 0,
                                    monthlyAdoption: 0,
                                    publicSchemeCount: 0,
                                    activeSchemeCount: 0,
                                    featuredDesign: "暂无",
                                    referredCount: 0,
                                  }),
                                  (z =
                                    !0 === m.data.enableCreatorDashboardData),
                                  (H = "fulfilled" === y.status && !!F),
                                  (J = !(
                                    !H ||
                                    !F.creatorStats ||
                                    !0 !== F.creatorStats.available
                                  )),
                                  (K = H
                                    ? z && J
                                    : m.data.creatorDashboardAvailable),
                                  (O = H
                                    ? K
                                      ? F.creatorStats
                                      : $
                                    : m.data.creatorStats),
                                  (Q =
                                    F && F.orderSummary
                                      ? F.orderSummary
                                      : m.data.orderSummary),
                                  (U =
                                    h && "object" === a(h) && h.profile
                                      ? h.profile
                                      : null),
                                  (W =
                                    h && "object" === a(h) && h.application
                                      ? h.application
                                      : null),
                                  (X = !(
                                    !V ||
                                    "object" !== a(V) ||
                                    !0 !== V.available
                                  )),
                                  (Y = !(
                                    !U ||
                                    "object" !== a(U) ||
                                    "active" !==
                                      String(U.status || "")
                                        .trim()
                                        .toLowerCase()
                                  )),
                                  (Z =
                                    W && "object" === a(W)
                                      ? String(W.status || "")
                                          .trim()
                                          .toLowerCase()
                                      : ""),
                                  (ee =
                                    X || Y
                                      ? "active"
                                      : "pending" === Z
                                      ? "pending"
                                      : "rejected" === Z
                                      ? "rejected"
                                      : "normal"),
                                  (te = X
                                    ? {
                                        creatorId: Number(
                                          (V.profile && V.profile.creatorId) ||
                                            0
                                        ),
                                        userId: Number(
                                          (V.profile && V.profile.userId) || 0
                                        ),
                                        levelCode: String(
                                          (V.profile && V.profile.levelCode) ||
                                            ""
                                        ),
                                        levelName: String(
                                          (V.profile && V.profile.levelName) ||
                                            "--"
                                        ),
                                        commissionRateBp: Number(
                                          (V.profile &&
                                            V.profile.commissionRateBp) ||
                                            0
                                        ),
                                        commissionRateText: p(
                                          V.profile &&
                                            V.profile.commissionRateBp
                                        ),
                                        displayName: String(
                                          (V.profile &&
                                            V.profile.displayName) ||
                                            ""
                                        ),
                                        bio: String(
                                          (V.profile && V.profile.bio) || ""
                                        ),
                                        quoteCount: Number(
                                          (V.stats && V.stats.quoteCount) || 0
                                        ),
                                        works:
                                          V.stats && V.stats.works
                                            ? V.stats.works
                                            : {
                                                pending: 0,
                                                approved: 0,
                                                rejected: 0,
                                              },
                                        earnings:
                                          V.earnings &&
                                          "object" === a(V.earnings)
                                            ? V.earnings
                                            : {
                                                qualifyingCent: 0,
                                                availableCent: 0,
                                                lockedCent: 0,
                                                settledCent: 0,
                                              },
                                      }
                                    : null),
                                  (re = W && "object" === a(W) ? W : null),
                                  (ae =
                                    A && "object" === a(A)
                                      ? A.application
                                      : null),
                                  (oe =
                                    A && "object" === a(A) ? A.profile : null),
                                  (se = !!(
                                    E &&
                                    "object" === a(E) &&
                                    (!0 === E.available ||
                                      !0 === E.isDistributor ||
                                      (E.profile &&
                                        "object" === a(E.profile) &&
                                        Number(E.profile.id || 0) > 0)) &&
                                    ("active" ===
                                      String(E.status || "")
                                        .trim()
                                        .toLowerCase() ||
                                      (E.profile &&
                                        "object" === a(E.profile) &&
                                        Number(E.profile.id || 0) > 0))
                                  )),
                                  (ie = !!(
                                    (A &&
                                      "object" === a(A) &&
                                      !0 === A.isActive) ||
                                    (oe &&
                                      "object" === a(oe) &&
                                      Number(oe.id || 0) > 0)
                                  )),
                                  (ne =
                                    ae && "object" === a(ae)
                                      ? String(ae.status || "")
                                          .trim()
                                          .toLowerCase()
                                      : ""),
                                  (le =
                                    se || ie
                                      ? "active"
                                      : "pending" === ne
                                      ? "pending"
                                      : "rejected" === ne
                                      ? "rejected"
                                      : "normal"),
                                  (ue =
                                    E &&
                                    "object" === a(E) &&
                                    E.stats &&
                                    "object" === a(E.stats)
                                      ? E.stats
                                      : {}),
                                  (de =
                                    E &&
                                    "object" === a(E) &&
                                    E.profile &&
                                    "object" === a(E.profile)
                                      ? E.profile
                                      : {}),
                                  (ce = se
                                    ? {
                                        distributorId: Number(de.id || 0),
                                        userId: Number(de.userId || 0),
                                        levelCode: String(de.levelCode || ""),
                                        levelName: String(de.levelName || "--"),
                                        commissionRateBp: Number(
                                          de.commissionRateBp || 0
                                        ),
                                        commissionRateText: String(
                                          de.commissionRateText ||
                                            p(de.commissionRateBp)
                                        ),
                                        displayName: String(
                                          de.displayName || ""
                                        ),
                                        bio: String(de.bio || ""),
                                        downlineCount: Number(
                                          ue.downlineCount || 0
                                        ),
                                        pendingAmountCent: Number(
                                          ue.pendingAmountCent || 0
                                        ),
                                        pendingAmountText: String(
                                          ue.pendingAmountText || "0.00"
                                        ),
                                        settledAmountCent: Number(
                                          ue.settledAmountCent || 0
                                        ),
                                        settledAmountText: String(
                                          ue.settledAmountText || "0.00"
                                        ),
                                        totalAmountCent: Number(
                                          ue.totalAmountCent || 0
                                        ),
                                        totalAmountText: String(
                                          ue.totalAmountText || "0.00"
                                        ),
                                        reversedAmountCent: Number(
                                          ue.reversedAmountCent || 0
                                        ),
                                        reversedAmountText: String(
                                          ue.reversedAmountText || "0.00"
                                        ),
                                        ledgerCount: Number(
                                          ue.ledgerCount || 0
                                        ),
                                      }
                                    : null),
                                  (pe = ae && "object" === a(ae) ? ae : null),
                                  (me =
                                    "active" === ee
                                      ? "designer"
                                      : "active" === le
                                      ? "distributor"
                                      : "normal"),
                                  m.profileCoordinatorApplyDashboardState({
                                    selectedAddress: G,
                                    addressList: Array.isArray(B) ? B : [],
                                    orderSummary: Q,
                                    creatorDashboardAvailable: K,
                                    creatorStats: O,
                                    userRole: me,
                                    creatorIdentityStatus: ee,
                                    creatorApplicationInfo: re,
                                    creatorPanelSummary: te,
                                    distributorIdentityStatus: le,
                                    distributorApplicationInfo: pe,
                                    distributorPanelSummary: ce,
                                    creatorPanelEntryVisible: "active" === ee,
                                    distributorPanelEntryVisible:
                                      "active" === le,
                                    profileDashboardLoading: !1,
                                  }),
                                  (m._profileDashboardSyncedAt = Date.now()),
                                  e.abrupt("return", !0)
                                );
                              case 69:
                              case "end":
                                return e.stop();
                            }
                          var r, be, fe;
                        }, r);
                      })
                    );
                    return function () {
                      return o.apply(this, arguments);
                    };
                  })()),
                  (m._profileDashboardSyncPromise = j().finally(function () {
                    m.data &&
                      !0 === m.data.profileDashboardLoading &&
                      m.setData({ profileDashboardLoading: !1 }),
                      (m._profileDashboardSyncPromise = null);
                  })),
                  b.abrupt("return", m._profileDashboardSyncPromise)
                );
              case 16:
              case "end":
                return b.stop();
            }
        }, b);
      })
    )();
  },
};
