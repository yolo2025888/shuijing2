var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../../../../@babel/runtime/helpers/typeof"),
  n = require("../../../../pages/index/modules/deps/profile-deps").playSound,
  i =
    require("../../../../pages/index/modules/methods/navigation-coordinator").openIndexTabFromStandaloneDiy,
  a = require("../../../../utils/navigation/navigate-with-fallback"),
  o = a.navigateWithFallback,
  s = a.openDiyEntry,
  c = require("../../../../utils/diyEntrySession"),
  u = c.buildDiyEntrySessionId,
  p = c.saveDiyEntrySession,
  f = require("../../../../utils/diyRenderPlan").normalizeRenderPlan,
  l =
    require("../../../../contracts/navigation/query-contract").appendQueryParams,
  d =
    require("../../../../pages/index/modules/storage/local-snapshot-cache").writeLocalSchemesSnapshot,
  h = require("../../../../facades/v2/designs-facade").removeDesignById,
  y = require("../../../../utils/catalog"),
  g = y.getKnownBeadType,
  m = y.materialHasRenderableImage,
  b = y.mergeMaterialPreservingImages,
  v = Object.freeze({
    designer: Object.freeze({
      title: "设计师入驻说明",
      accent: "#E5D5C5",
      sections: Object.freeze([
        Object.freeze({
          heading: "入驻条件",
          items: Object.freeze([
            "拥有独立创作能力，需提交至少1套可落地的完整设计方案。",
            "遵守平台内容规范，严禁侵权、违规宣传及作出绝对化功效承诺。",
            "完成实名认证，保证提交信息真实有效。",
          ]),
        }),
        Object.freeze({
          heading: "收益与结算",
          items: Object.freeze([
            "分成比例：设计师可获得用户实付金额的6%。",
            "结算规则：退款、取消订单及售后未完结订单不予结算；订单确认收货7–15天后，收益转为可提现余额。",
            "版权说明：投稿设计方案为平台与设计师共创成果，相关权益归平台所有；设计师享有作品署名权及持续分成权。",
            "优秀激励：平台定期综合评估推广数据与合规情况，表现优异者佣金上调，同时开通专属服务通道及配套扶持。",
          ]),
        }),
        Object.freeze({
          heading: "审核与入驻",
          items: Object.freeze([
            "平台结合方案质量、原创性、落地性及平台规则综合审核，保留最终审核权。",
            "审核未通过，将在3个工作日内给出优化建议，可修改后重新提交。",
            "禁止恶意重复提交、抄袭等行为。",
            "连续60天未更新方案，或作品质量严重不达标，系统将自动解除设计师认证，同时停止原有方案收益发放。",
          ]),
        }),
      ]),
    }),
    distributor: Object.freeze({
      title: "代理分销合作说明",
      accent: "#C8A96E",
      sections: Object.freeze([
        Object.freeze({
          heading: "入驻条件",
          items: Object.freeze([
            "具备私域运营或内容创作能力，可依托社群、小红书、抖音、微信等渠道开展推广。",
            "遵守平台推广规则，禁止虚假宣传、恶意比价、引导违规交易。",
            "完成实名认证，并绑定个人或企业收款账户。",
          ]),
        }),
        Object.freeze({
          heading: "收益与结算",
          items: Object.freeze([
            "返佣比例：合伙人可获得用户消费金额的10%。",
            "邀请奖励：每成功邀请一名新合伙人，会有奖励，奖励上不封顶。",
            "结算规则：退款、取消订单及售后未完结订单不予结算；订单确认收货7–15天后，收益转为可提现余额。",
            "优秀激励：平台定期综合评估推广数据与合规情况，表现优异者佣金上调，同时开通专属服务通道及配套扶持。",
          ]),
        }),
        Object.freeze({
          heading: "审核机制",
          items: Object.freeze([
            "平台根据推广能力、过往表现、合规情况综合评估，保留最终审核权。",
            "审核未通过将告知具体原因，补充资料后可再次申请。",
          ]),
        }),
        Object.freeze({
          heading: "审核与入驻",
          items: Object.freeze([
            "审核周期：提交申请后，运营团队1个工作日内完成评估。",
            "入驻通知：审核通过将收到系统通知，解锁合伙人工作台（含专属推广链接、佣金明细、素材中心）。",
            "新手扶持：新晋合伙人首月可领取专属推广素材包，并享受一对一运营指导。",
          ]),
        }),
      ]),
    }),
  });
function S(e, t) {
  var r = (e && e.currentTarget && e.currentTarget.dataset) || {};
  return String(r[t] || "").trim();
}
function A(e) {
  var t = e && e.data && "object" === r(e.data) ? e.data : {},
    n = Array.isArray(t.savedSchemes) ? t.savedSchemes : [];
  if (n.length) return n;
  if ("undefined" == typeof wx || "function" != typeof wx.getStorageSync)
    return [];
  try {
    var i = wx.getStorageSync("jieshanshi_schemes");
    return Array.isArray(i) ? i : [];
  } catch (e) {
    return [];
  }
}
function w(e) {
  d(
    (function (e) {
      return Array.isArray(e) ? e.map(D) : [];
    })(e)
  );
}
function D(e) {
  var t = e && "object" === r(e) ? e : {},
    n = Object.assign({}, t);
  return delete n.previewAssetStatus, delete n.previewAssetsLoading, n;
}
function P(e) {
  if (!e || "object" !== r(e) || Array.isArray(e)) return {};
  var t = {};
  return (
    Object.keys(e).forEach(function (n) {
      var i = String(n || "").trim(),
        a = e[n];
      i && a && "object" === r(a) && !Array.isArray(a) && (t[i] = a);
    }),
    t
  );
}
function T(e) {
  var t = e && "object" === r(e) ? e : {},
    n = P(t.materialSnapshot),
    i = P(t.materialMap),
    a = {};
  return (
    Object.keys(n).forEach(function (e) {
      a[e] = b(a[e], n[e]) || n[e];
    }),
    Object.keys(i).forEach(function (e) {
      a[e] = b(a[e], i[e]) || i[e];
    }),
    a
  );
}
function x(e, t) {
  var n = T(e && "object" === r(e) ? e : {}),
    i = P(t),
    a = {};
  return (
    Object.keys(n).forEach(function (e) {
      a[e] = n[e];
    }),
    Object.keys(i).forEach(function (e) {
      a[e] = b(a[e], i[e]) || i[e];
    }),
    a
  );
}
function _(e) {
  var t = (function (e) {
    return Array.isArray(e)
      ? e
          .map(function (e) {
            return String(e || "").trim();
          })
          .filter(Boolean)
      : [];
  })(e && e.pattern);
  if (!t.length) return !0;
  var r = T(e);
  return t.every(function (e) {
    return m(r[e]) || m(g(e));
  });
}
function M(e, t) {
  var n = e && "object" === r(e) ? e : {},
    i = t || (_(n) ? "ready" : "pending");
  return Object.assign({}, n, {
    previewAssetStatus: i,
    previewAssetsLoading: "pending" === i,
  });
}
function j(e) {
  return Array.isArray(e)
    ? e.map(function (e) {
        return M(e);
      })
    : [];
}
function k(e, t) {
  var r = Array.isArray(e) ? e.slice() : [],
    n = String(t || "").trim();
  if (!n) return r;
  var i = r.findIndex(function (e) {
    return String((e && e.id) || "").trim() === n;
  });
  return i < 0 || r.splice(i, 1), r;
}
function O(e, t, n) {
  var i = n && "object" === r(n) ? n : {},
    a = (function (e) {
      return (Array.isArray(e) ? e : [])
        .map(function (e) {
          return String(null == e ? "" : e).trim();
        })
        .filter(function (e) {
          return /^[A-Za-z0-9_-]{1,64}$/.test(e);
        });
    })(i.pattern),
    o = f(i.renderPlan || i.render_plan, a),
    s = Number(i.bgIndex),
    c = T(i),
    d = a.length ? u(e || "profile_diy") : "",
    h = d
      ? p({
          entryId: d,
          source:
            String(e || "standalone_diy_profile").trim() ||
            "standalone_diy_profile",
          schemeId: String(t || "").trim(),
          pattern: a,
          bgIndex: Number.isFinite(s) ? Math.max(0, Math.round(s)) : 0,
          name: String(i.name || "").trim(),
          beadMm: i.beadMm || i.bead_mm,
          previewRenderVersion:
            i.previewRenderVersion || i.preview_render_version,
          materialMap: c,
          materialSnapshot: c,
          renderPlan: o,
        })
      : null,
    y = {
      source:
        String(e || "standalone_diy_profile").trim() ||
        "standalone_diy_profile",
      schemeId: String(t || "").trim(),
      returnTab: "profile",
      entryId: h && h.entryId,
      sharedPattern: h ? "" : a.join(","),
      sharedBgIndex: Number.isFinite(s) ? Math.max(0, Math.round(s)) : "",
      sharedName: String(i.name || "").trim(),
    };
  return l("/pages/diy/index", y);
}
function E(e, t) {
  var n = t && "object" === r(t) ? t : {},
    i = (function (e) {
      if (!e || "object" !== r(e)) return "";
      if (e._profileDiyEntryPending) return "";
      var t = "profile_diy_"
        .concat(Date.now(), "_")
        .concat(Math.random().toString(36).slice(2, 8));
      return (
        (e._profileDiyEntryPending = !0),
        (e._profileDiyEntryToken = t),
        (e._profileDiyEntryStartedAt = Date.now()),
        e._profileDiyEntryPendingTimer &&
          clearTimeout(e._profileDiyEntryPendingTimer),
        (e._profileDiyEntryPendingTimer = setTimeout(function () {
          e._profileDiyEntryToken === t &&
            ((e._profileDiyEntryPending = !1),
            (e._profileDiyEntryToken = ""),
            (e._profileDiyEntryPendingTimer = null));
        }, 1e4)),
        t
      );
    })(e);
  if (!i) return !1;
  var a = function () {
      !(function (e, t) {
        e &&
          "object" === r(e) &&
          ((t && e._profileDiyEntryToken && e._profileDiyEntryToken !== t) ||
            ((e._profileDiyEntryPending = !1),
            (e._profileDiyEntryToken = ""),
            e._profileDiyEntryPendingTimer &&
              (clearTimeout(e._profileDiyEntryPendingTimer),
              (e._profileDiyEntryPendingTimer = null))));
      })(e, i);
    },
    o = O(n.sourceTag, n.schemeId, n.scheme);
  if (
    !(function (e, t) {
      return !(!e || "object" !== r(e)) && !!t && e._profileDiyEntryToken === t;
    })(e, i)
  )
    return !1;
  var c = s(o, n.sourceTag || "standalone_diy_profile", "profile", {
    methods: ["navigateTo", "redirectTo", "reLaunch"],
    fallbackMethods: ["navigateTo", "redirectTo", "reLaunch"],
    onFailed: function () {
      a(),
        "function" != typeof n.onFailed
          ? "function" == typeof e.showToast &&
            e.showToast("进入 DIY 失败，请重试")
          : n.onFailed();
    },
  });
  return c || a(), c;
}
function I(e, t) {
  var r = String(t || "").trim();
  r &&
    o(r, {
      methods: ["navigateTo", "redirectTo", "reLaunch"],
      onFailed: function () {
        "function" == typeof e.showToast && e.showToast("页面跳转失败");
      },
    });
}
function C(e) {
  return (Array.isArray(e) ? e : [])
    .map(function (e) {
      var t = e && "object" === r(e) ? e : {},
        n = String(t.heading || "").trim(),
        i = (Array.isArray(t.items) ? t.items : [])
          .map(function (e) {
            return String(e || "").trim();
          })
          .filter(Boolean);
      return n && i.length ? { heading: n, items: i } : null;
    })
    .filter(Boolean);
}
module.exports = {
  prepareMyDesignPreviewAssets: function () {
    var e = Array.isArray(this.data && this.data.savedSchemes)
      ? this.data.savedSchemes
      : [];
    if (!e.length) return [];
    var t = j(e);
    return this.setData({ savedSchemes: t }), t;
  },
  ensureMyDesignPreviewAssets: function (n) {
    var i = this;
    return t(
      e().mark(function a() {
        var o, s, c, u;
        return e().wrap(function (a) {
          for (;;)
            switch ((a.prev = a.next)) {
              case 0:
                if (
                  ((o = n && "object" === r(n) ? n : {}),
                  (s =
                    "function" == typeof i.prepareMyDesignPreviewAssets
                      ? i.prepareMyDesignPreviewAssets()
                      : j(i.data && i.data.savedSchemes)),
                  s.filter(function (e) {
                    return (
                      e &&
                      "pending" === e.previewAssetStatus &&
                      Array.isArray(e.pattern) &&
                      e.pattern.length
                    );
                  }).length &&
                    "function" == typeof i.ensurePatternMaterialAssets)
                ) {
                  a.next = 5;
                  break;
                }
                return a.abrupt("return", s);
              case 5:
                return (
                  (c =
                    (Number(i._myDesignPreviewAssetHydrationToken) || 0) + 1),
                  (i._myDesignPreviewAssetHydrationToken = c),
                  (a.next = 9),
                  Promise.all(
                    s.map(
                      (function () {
                        var r = t(
                          e().mark(function t(r) {
                            var n, a, s;
                            return e().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        r &&
                                        "pending" === r.previewAssetStatus
                                      ) {
                                        e.next = 2;
                                        break;
                                      }
                                      return e.abrupt("return", M(r, "ready"));
                                    case 2:
                                      return (
                                        (e.prev = 2),
                                        (e.next = 5),
                                        i.ensurePatternMaterialAssets(
                                          r.pattern,
                                          {
                                            materialMap: T(r),
                                            preferCache: !1 !== o.preferCache,
                                            remoteTimeoutMs:
                                              o.remoteTimeoutMs || 3200,
                                          }
                                        )
                                      );
                                    case 5:
                                      return (
                                        (n = e.sent),
                                        (a = x(r, n)),
                                        (s = Object.assign({}, r, {
                                          materialMap: a,
                                          materialSnapshot: a,
                                        })),
                                        e.abrupt(
                                          "return",
                                          M(s, _(s) ? "ready" : "fallback")
                                        )
                                      );
                                    case 11:
                                      return (
                                        (e.prev = 11),
                                        (e.t0 = e.catch(2)),
                                        e.abrupt(
                                          "return",
                                          M(
                                            r,
                                            r.previewUrl || r.snapshotUrl
                                              ? "fallback"
                                              : "error"
                                          )
                                        )
                                      );
                                    case 14:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              t,
                              null,
                              [[2, 11]]
                            );
                          })
                        );
                        return function (e) {
                          return r.apply(this, arguments);
                        };
                      })()
                    )
                  )
                );
              case 9:
                if (
                  ((u = a.sent), i._myDesignPreviewAssetHydrationToken === c)
                ) {
                  a.next = 12;
                  break;
                }
                return a.abrupt("return", u);
              case 12:
                return (
                  i.setData({ savedSchemes: u }), w(u), a.abrupt("return", u)
                );
              case 15:
              case "end":
                return a.stop();
            }
        }, a);
      })
    )();
  },
  openMyDesignsSubview: function () {
    var e = this;
    if (this.data && !0 !== this.data.isLoggedIn)
      return (
        "function" == typeof this.showToast && this.showToast("请先登录"),
        "function" == typeof this.promptWechatProfileAuthIfNeeded
          ? this.promptWechatProfileAuthIfNeeded()
          : "function" == typeof this.setData &&
            this.setData({ showProfileAuthPrompt: !0 }),
        !1
      );
    if (
      !(
        Array.isArray(this.data && this.data.savedSchemes)
          ? this.data.savedSchemes
          : []
      ).length
    ) {
      var t = (function () {
        if ("undefined" == typeof wx || "function" != typeof wx.getStorageSync)
          return [];
        try {
          var e = wx.getStorageSync("jieshanshi_schemes");
          return Array.isArray(e) ? e : [];
        } catch (e) {
          return [];
        }
      })();
      t.length && this.setData({ savedSchemes: j(t) });
    }
    if (
      this.data &&
      !0 === this.data.isStandaloneDiy &&
      "function" == typeof i &&
      i(this, "profile", {
        source: "v2_designs",
        afterSwitchPatch: {
          profileSubView: "my_designs",
          isNavVisible: !1,
          isStandaloneDiy: !1,
        },
        onFailed: function () {
          "function" == typeof e.showToast &&
            e.showToast("打开我的设计失败，请稍后重试");
        },
      })
    )
      return (
        "function" == typeof this.ensureMyDesignPreviewAssets &&
          this.ensureMyDesignPreviewAssets({
            preferCache: !0,
            remoteTimeoutMs: 3200,
          }).catch(function () {}),
        n("pop"),
        !0
      );
    return (
      this.setData({
        activeTab: "profile",
        profileSubView: "my_designs",
        isNavVisible: !1,
      }),
      "function" == typeof this.ensureMyDesignPreviewAssets &&
        this.ensureMyDesignPreviewAssets({
          preferCache: !0,
          remoteTimeoutMs: 3200,
        }).catch(function () {}),
      n("pop"),
      !0
    );
  },
  closeMyDesignsSubview: function () {
    this.setData({
      activeTab: "profile",
      activePrimaryTab: "profile",
      navActiveTab: "profile",
      profileSubView: "",
      isNavVisible: !0,
      isStandaloneDiy: !1,
    }),
      "function" == typeof this.computeViewportMetrics &&
        this.computeViewportMetrics(),
      n("pop");
  },
  handleMyDesignBack: function () {
    this.closeMyDesignsSubview();
  },
  handleMyDesignGoDiy: function () {
    E(this, { sourceTag: "standalone_diy_my_designs_create" });
  },
  handleOpenDesignerApplyPage: function () {
    if (this.handleProfileProtectedAction()) {
      var e,
        t,
        r = String((this.data && this.data.creatorIdentityStatus) || "")
          .trim()
          .toLowerCase();
      if ("pending" !== r)
        if ((n("pop"), "active" !== r))
          (e = this),
            (t = String("/pages/designer-apply/index" || "").trim()) &&
              o(t, {
                methods: ["navigateTo", "redirectTo", "reLaunch"],
                onFailed: function () {
                  "function" == typeof e.showToast &&
                    e.showToast("页面跳转失败");
                },
              });
        else I(this, "/pages/creator-panel/index");
      else
        "function" == typeof this.showToast &&
          this.showToast("正在申请中请等待");
    }
  },
  handleOpenDistributorApplyPage: function () {
    if (this.handleProfileProtectedAction()) {
      var e = String((this.data && this.data.distributorIdentityStatus) || "")
        .trim()
        .toLowerCase();
      "pending" !== e
        ? (n("pop"),
          "active" !== e
            ? "function" != typeof this.openSupportQrPopup
              ? "function" == typeof this.showToast &&
                this.showToast("客服二维码暂未配置")
              : this.openSupportQrPopup("distributorApply")
            : I(this, "/pages/distributor-panel/index"))
        : "function" == typeof this.showToast &&
          this.showToast("正在申请中请等待");
    }
  },
  handleOpenCreatorPanelPage: function () {
    this.handleProfileProtectedAction() &&
      (n("pop"), I(this, "/pages/creator-panel/index"));
  },
  handleOpenCreatorNotificationsPage: function () {
    this.handleProfileProtectedAction() &&
      (n("pop"), I(this, "/pages/creator-notifications/index"));
  },
  handleOpenDistributorPanelPage: function () {
    this.handleProfileProtectedAction() &&
      (n("pop"), I(this, "/pages/distributor-panel/index"));
  },
  handleOpenDistributorNotificationsPage: function () {
    this.handleProfileProtectedAction() &&
      (n("pop"),
      I(this, "/pages/creator-notifications/index?category=distributor"));
  },
  handleOpenApplyDocSheet: function (e) {
    if (this.handleProfileProtectedAction()) {
      var t,
        i,
        a,
        o,
        s,
        c,
        u,
        p,
        f,
        l = S(e, "type"),
        d =
          ((t = this),
          (i =
            "distributor" ===
            String(l || "")
              .trim()
              .toLowerCase()
              ? "distributor"
              : "designer"),
          (a = v[i] || v.designer),
          (o =
            t && t.data && "object" === r(t.data)
              ? t.data.profileApplyDocConfig
              : null),
          (s = o && "object" === r(o) ? o[i] : null),
          (c = s && "object" === r(s) ? s : null),
          (u = C(c && c.sections)),
          (p = C(a.sections)),
          (f = u.length ? u : p),
          {
            profileApplyDocType: i,
            profileApplyDocTitle: String((c && c.title) || a.title || ""),
            profileApplyDocAccent: String(
              (c && c.accent) || a.accent || "#E5D5C5"
            ),
            profileApplyDocSections: f,
          });
      this.setData(Object.assign({ showProfileApplyDocSheet: !0 }, d)),
        n("pop");
    }
  },
  handleCloseApplyDocSheet: function () {
    this.data &&
      !0 === this.data.showProfileApplyDocSheet &&
      (this.setData({
        showProfileApplyDocSheet: !1,
        profileApplyDocType: "",
        profileApplyDocTitle: "",
        profileApplyDocAccent: "#E5D5C5",
        profileApplyDocSections: [],
      }),
      n("pop"));
  },
  handleMyDesignContinueEdit: function (e) {
    var t = this,
      r = S(e, "id");
    if (r) {
      var n = A(this).find(function (e) {
        return String((e && e.id) || "").trim() === r;
      });
      n && Array.isArray(n.pattern) && n.pattern.length
        ? E(this, {
            sourceTag: "standalone_diy_my_designs_continue",
            schemeId: r,
            scheme: n,
            onFallback: function () {
              if ("function" == typeof t.loadScheme) {
                var e = function () {
                  return t.loadScheme(
                    n.pattern,
                    Number.isFinite(Number(n.bgIndex)) ? Number(n.bgIndex) : 0,
                    null,
                    String(n.name || "").trim(),
                    { renderPlan: n.renderPlan || n.render_plan }
                  );
                };
                "function" == typeof t.ensurePatternMaterialAssets
                  ? t
                      .ensurePatternMaterialAssets(n.pattern, {
                        materialMap: n.materialMap || n.materialSnapshot,
                        preferCache: !0,
                        remoteTimeoutMs: 3200,
                      })
                      .then(e)
                      .catch(e)
                  : e();
              }
            },
          })
        : this.showToast("方案不存在或已损坏");
    }
  },
  handleMyDesignDelete: function (r) {
    var n = this;
    return t(
      e().mark(function t() {
        var i, a, o, s, c;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (((i = S(r, "id")), (a = S(r, "name") || "该设计"), i)) {
                    e.next = 4;
                    break;
                  }
                  return e.abrupt("return");
                case 4:
                  return (
                    (e.next = 6),
                    new Promise(function (e) {
                      "undefined" != typeof wx &&
                      "function" == typeof wx.showModal
                        ? wx.showModal({
                            title: "删除设计",
                            content: "确定删除「".concat(a, "」吗？"),
                            confirmColor: "#B86B5D",
                            success: function (t) {
                              e(!(!t || !t.confirm));
                            },
                            fail: function () {
                              e(!1);
                            },
                          })
                        : e(!0);
                    })
                  );
                case 6:
                  if (e.sent) {
                    e.next = 9;
                    break;
                  }
                  return e.abrupt("return");
                case 9:
                  if (((o = A(n)), (s = k(o, i)).length !== o.length)) {
                    e.next = 14;
                    break;
                  }
                  return n.showToast("方案不存在"), e.abrupt("return");
                case 14:
                  if (
                    (n.setData({ savedSchemes: s }),
                    "function" ==
                      typeof n.profileCoordinatorSyncSharePatternFromSchemes &&
                      n.profileCoordinatorSyncSharePatternFromSchemes(s),
                    w(s),
                    (c = !1),
                    !n.data ||
                      !0 !== n.data.isLoggedIn ||
                      "function" != typeof h)
                  ) {
                    e.next = 27;
                    break;
                  }
                  return (e.prev = 19), (e.next = 22), h(i);
                case 22:
                  e.next = 27;
                  break;
                case 24:
                  (e.prev = 24), (e.t0 = e.catch(19)), (c = !0);
                case 27:
                  n.showToast(c ? "本地已删除，云端同步失败" : "删除成功");
                case 28:
                case "end":
                  return e.stop();
              }
          },
          t,
          null,
          [[19, 24]]
        );
      })
    )();
  },
  handleCloseContentModal: function () {
    this.setData({
      showContentModal: !1,
      contentModalType: "",
      contentModalTitle: "",
      contentModalLoading: !1,
      contentModalError: "",
      contentModalText: "",
    }),
      n("pop");
  },
  handleProfileServiceTap: function (r) {
    var n = this;
    return t(
      e().mark(function t() {
        var i;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (n.handleProfileProtectedAction()) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return");
              case 2:
                if ("my_designs" !== (i = n.resolveProfileServiceId(r))) {
                  e.next = 6;
                  break;
                }
                return n.openMyDesignsSubview(), e.abrupt("return");
              case 6:
                if ("address" !== i) {
                  e.next = 10;
                  break;
                }
                return (e.next = 9), n.handleOpenAddressManager();
              case 9:
                return e.abrupt("return");
              case 10:
                if ("notify" !== i) {
                  e.next = 13;
                  break;
                }
                return (
                  n.handleOpenCreatorNotificationsPage(), e.abrupt("return")
                );
              case 13:
                if ("help" !== i && "terms" !== i) {
                  e.next = 17;
                  break;
                }
                return (e.next = 16), n.openContentModalByServiceId(i);
              case 16:
                return e.abrupt("return");
              case 17:
                if ("contact" !== i) {
                  e.next = 21;
                  break;
                }
                return (e.next = 20), n.openContactServiceModal();
              case 20:
                return e.abrupt("return");
              case 21:
                n.showToast("正在跳转服务页...");
              case 22:
              case "end":
                return e.stop();
            }
        }, t);
      })
    )();
  },
};
