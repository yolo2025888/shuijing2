var e = require("../../@babel/runtime/helpers/typeof"),
  n = new Set(["home", "inspiration", "cart", "profile"]);
function t(e) {
  var t = String(e || "")
    .trim()
    .toLowerCase();
  return n.has(t) ? t : "";
}
function o(e) {
  return (
    "pages/index/index" ===
    (function (e) {
      return String((e && (e.route || e.__route__)) || "")
        .trim()
        .replace(/^\/+/, "");
    })(e)
  );
}
function i(e) {
  var n = String(e || "");
  if (!n) return "";
  try {
    return decodeURIComponent(n.replace(/\+/g, "%20"));
  } catch (e) {
    return n;
  }
}
function r(e) {
  var n = String(e || "").trim(),
    t = n.indexOf("?");
  if (t < 0) return {};
  var o = n.slice(t + 1);
  return o
    ? o.split("&").reduce(function (e, n) {
        if (!n) return e;
        var t = n.indexOf("="),
          o = t >= 0 ? n.slice(0, t) : n,
          r = t >= 0 ? n.slice(t + 1) : "",
          a = i(o);
        return a ? ((e[a] = i(r)), e) : e;
      }, {})
    : {};
}
function a(e, n, t) {
  if ("function" == typeof n) {
    var o = Math.max(0, Number(t || 0));
    e && "function" == typeof e.setManagedTimeout
      ? e.setManagedTimeout(n, o)
      : setTimeout(n, o);
  }
}
function u(e) {
  "function" == typeof e &&
    ("undefined" == typeof wx || "function" != typeof wx.nextTick
      ? setTimeout(e, 0)
      : wx.nextTick(e));
}
function s(e, n) {
  e &&
    "function" == typeof e.resolveStandaloneDiyLoadingGate &&
    e.resolveStandaloneDiyLoadingGate(n);
}
function c(e, n, t, o) {
  e &&
    "function" == typeof e.reportInitIssue &&
    e.reportInitIssue(n, t, { toast: !1, fallbackMessage: o });
}
function f(n) {
  return new Promise(function (t) {
    var o = 0,
      i = function i() {
        o += 1;
        var r = (function (n) {
          return n && "object" === e(n)
            ? "function" == typeof n.trayComp
              ? n.trayComp()
              : "function" == typeof n.selectComponent
              ? n.selectComponent("#braceletTray")
              : null
            : null;
        })(n);
        if (r)
          if (!(!0 === r.ready && r.bgCanvas && r.beadCanvas) && o < 6)
            a(
              n,
              function () {
                u(i);
              },
              80
            );
          else {
            var c = n && n.data && "object" === e(n.data) ? n.data : {},
              f = Number(c.traySize);
            "function" == typeof r.syncLayerStyles && r.syncLayerStyles(),
              "function" == typeof r.syncCanvasResolution
                ? r.syncCanvasResolution(
                    Number.isFinite(f) && f > 0 ? f : void 0
                  )
                : "function" == typeof r.syncCanvasResolutionFromSize &&
                  r.syncCanvasResolutionFromSize(
                    Number.isFinite(f) && f > 0 ? f : void 0
                  ),
              "function" == typeof r.refreshCanvasRect &&
                ((r._lastRectQueryAt = 0), r.refreshCanvasRect()),
              a(
                n,
                function () {
                  r.isStrung &&
                  "function" == typeof r.layoutStrungBeadsImmediately
                    ? r.layoutStrungBeadsImmediately(r.beadsRef)
                    : r.isStrung ||
                      "function" != typeof r.clampLooseBeadsToTrayBounds ||
                      r.clampLooseBeadsToTrayBounds(),
                    "function" == typeof r.render && r.render(),
                    "function" == typeof r.refreshCanvasRect &&
                      ((r._lastRectQueryAt = 0), r.refreshCanvasRect()),
                    s(n, "geometry"),
                    t(!0);
                },
                96
              );
          }
        else t(!1);
      };
    u(function () {
      a(
        n,
        function () {
          u(i);
        },
        32
      );
    });
  });
}
module.exports = {
  enterInlineDiy: function (n, i) {
    var l = i && "object" === e(i) ? i : {},
      y = !0 === l.allowNonTop;
    if (!n || !o(n)) return !1;
    if (!y && "function" == typeof getCurrentPages) {
      var d = getCurrentPages();
      if (Array.isArray(d) && d.length && d[d.length - 1] !== n) return !1;
    }
    var p = String(l.targetUrl || "").trim(),
      m = Object.assign(
        {},
        r(p),
        l.routeOptions && "object" === e(l.routeOptions) ? l.routeOptions : {}
      ),
      g = t(l.returnTab || m.returnTab),
      v =
        String(l.source || m.source || "standalone_diy_inline").trim() ||
        "standalone_diy_inline",
      h =
        l.preparedStages && "object" === e(l.preparedStages)
          ? l.preparedStages
          : {},
      S =
        !0 === l.waitForPatternReady ||
        (function (n) {
          var t = n && "object" === e(n) ? n : {};
          return !!(
            String(t.schemeId || "").trim() ||
            String(t.shareCode || "").trim() ||
            String(t.entryId || "").trim() ||
            String(t.sharedPattern || "").trim()
          );
        })(m),
      b = !1 !== l.visible,
      C = "function" == typeof l.onReady ? l.onReady : null;
    "function" == typeof n.openStandaloneDiyLoadingGate &&
      n.openStandaloneDiyLoadingGate({
        visible: b,
        waitForPatternReady: S,
        preparedStages: Object.assign({}, h, { geometry: !0 === h.geometry }),
      }),
      (n._inlineDiyEntrySource = v);
    var P = function () {
      !(function (e, n, t) {
        e && "function" == typeof e.setData
          ? e.setData(n, t)
          : "function" == typeof t && t();
      })(
        n,
        {
          activeTab: "diy",
          activePrimaryTab: "diy",
          navActiveTab: "diy",
          isStandaloneDiy: !0,
          diyReturnTab: g,
          standaloneDiyEntryMaskVisible: b,
          standaloneDiySceneMasked: b,
          appLoaded: !0,
          loadProgress: 100,
          profileSubView: "",
          isNavVisible: !0,
          photoMode: !1,
          guideModalOpen: !1,
          namingPayload: null,
          showDiyShareModal: !1,
          checkoutData: null,
          isCheckingOut: !1,
          checkoutLaunching: !1,
          showAddressManagerModal: !1,
          showOrderManagerModal: !1,
          showContentModal: !1,
          showPaymentSuccessPopup: !1,
        },
        function () {
          !(function (n, t, o) {
            if (n && "object" === e(n)) {
              var i = function () {
                f(n)
                  .catch(function () {
                    return !1;
                  })
                  .finally(function () {
                    s(n, "layout"), s(n, "tray");
                  });
              };
              "function" == typeof n.computeViewportMetrics
                ? n.computeViewportMetrics(function () {
                    i();
                  })
                : a(
                    n,
                    function () {
                      i();
                    },
                    0
                  ),
                ("function" == typeof n.ensureDiyCatalogBootstrapped
                  ? Promise.resolve(
                      n.ensureDiyCatalogBootstrapped({
                        silent: !0,
                        preferCache: !0,
                      })
                    )
                  : Promise.resolve(!1)
                )
                  .catch(function (e) {
                    c(n, "inline_diy_catalog_bootstrap", e, "DIY 数据同步失败");
                  })
                  .finally(function () {
                    s(n, "catalog"),
                      o &&
                        "function" == typeof n.tryApplySharedScheme &&
                        Promise.resolve(n.tryApplySharedScheme(t || {}))
                          .catch(function (e) {
                            c(n, "inline_diy_scheme_apply", e, "方案载入失败");
                          })
                          .finally(function () {
                            a(
                              n,
                              function () {
                                s(n, "pattern");
                              },
                              96
                            );
                          });
                  }),
                "function" == typeof n.prewarmDiyRuntimeResources &&
                  a(
                    n,
                    function () {
                      n.prewarmDiyRuntimeResources({
                        reason: "inline_standalone_diy",
                        limit: 18,
                      });
                    },
                    24
                  ),
                "function" == typeof n.prewarmBlindBoxPresetPool &&
                  a(
                    n,
                    function () {
                      n.prewarmBlindBoxPresetPool({
                        reason: "inline_standalone_blindbox",
                        limit: 8,
                        fullPresetLimit: 2,
                      });
                    },
                    96
                  );
            }
          })(n, m, S),
            (function (e, n) {
              "function" == typeof n &&
                u(function () {
                  a(
                    e,
                    function () {
                      u(function () {
                        n();
                      });
                    },
                    32
                  );
                });
            })(n, C);
        }
      );
    };
    return (
      b && n && "function" == typeof n.setData
        ? n.setData(
            { standaloneDiyEntryMaskVisible: !0, standaloneDiySceneMasked: !0 },
            function () {
              a(n, P, 48);
            }
          )
        : P(),
      !0
    );
  },
  findReusableIndexPage: function (n) {
    var t = (n && "object" === e(n) ? n : {}).excludePage || null;
    if ("function" != typeof getCurrentPages) return null;
    var i = getCurrentPages();
    if (!Array.isArray(i) || !i.length) return null;
    for (var r = Math.max(0, i.length - 1); r >= 0; r -= 1) {
      var a = i[r];
      if (a && a !== t && o(a))
        return {
          page: a,
          index: r,
          deltaFromTop: Math.max(0, i.length - 1 - r),
        };
    }
    return null;
  },
  isIndexPageContext: o,
  normalizeDiyReturnTab: t,
  parseRouteOptionsFromUrl: r,
};
