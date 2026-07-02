var a = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../@babel/runtime/helpers/typeof"),
  r = require("../../../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../lifecycle-bootstrap/bootstrap-preset-utils"),
  i = t.withAllSubCategory,
  n = t.isAllSubCategory,
  o = require("../../deps/lifecycle-deps"),
  u = o.applyRuntimeCatalogSnapshot,
  s = o.getDiyMaterialsPage,
  l = o.getDiyMaterialsBundleData,
  y = require("../../../../../utils/catalog"),
  d = (y.materialHasRenderableImage, y.mergeMaterialPreservingImages),
  c = {
    水晶: "crystal",
    天然石: "kuangshi",
    随型: "suixing",
    配饰: "peishi",
    文玩: "wenwan",
    白水晶: "baishuijing",
    粉水晶: "fenshuijing",
    紫水晶: "zishuijing",
    海蓝宝: "hailanbao",
    黄水晶: "huangshuijing",
    绿水晶: "lvshuijing",
    胶花: "jiaohua",
    幽灵: "youling",
    草莓晶: "caomeijing",
    蓝晶石: "lanjingshi",
    茶晶: "chajing",
    黑金超七: "heijinchaoqi",
    发晶兔毛: "fajingtumao",
    "发晶/兔毛": "fajingtumao",
    闪灵: "shanling",
    岫玉: "xiuyu",
    紫锂辉: "zilihui",
    虎眼石: "huyanshi",
    萤石: "yingshi",
    月光拉长石: "yueguang",
    曜石: "yaoshi",
    天河石: "tianheshi",
    南红玛瑙: "nanhong",
    绿龙晶: "lvlongjing",
    紫云母: "ziyunmu",
    其他: "qita",
    水晶随型: "shuijingsuixing",
    方糖: "fangtang",
    双尖: "shuangjian",
    雕件: "diaojian",
    切面珠: "qiemianzhu",
    吊坠挂件: "diaozhui",
    "吊坠/挂件": "diaozhui",
    隔珠隔片: "gezhu",
    "隔珠/隔片": "gezhu",
    魔盒: "mohe",
    花托: "huatuo",
    跑环: "paohuan",
    蜜蜡: "amber",
    沉香: "wood",
  };
function g(a) {
  var e = String(a || "").trim();
  return e ? c[e] || e : "";
}
function h(a) {
  return p.apply(this, arguments);
}
function p() {
  return (p = r(
    a().mark(function r(t) {
      var i, n, o, u;
      return a().wrap(
        function (a) {
          for (;;)
            switch ((a.prev = a.next)) {
              case 0:
                if (
                  ((i = t && "object" === e(t) ? t : {}),
                  !0 === i.shouldLoadBundle)
                ) {
                  a.next = 7;
                  break;
                }
                return (a.next = 5), s(i.pageParams);
              case 5:
                return (
                  (n = a.sent),
                  a.abrupt("return", { payload: n, fromBundle: !1 })
                );
              case 7:
                return (
                  (a.prev = 7),
                  (a.next = 10),
                  l({ forceRemote: !1, preferCache: !0 })
                );
              case 10:
                return (
                  (o = a.sent),
                  a.abrupt("return", { payload: o, fromBundle: !0 })
                );
              case 14:
                return (
                  (a.prev = 14),
                  (a.t0 = a.catch(7)),
                  (a.next = 18),
                  s(i.pageParams)
                );
              case 18:
                return (
                  (u = a.sent),
                  a.abrupt("return", { payload: u, fromBundle: !1 })
                );
              case 20:
              case "end":
                return a.stop();
            }
        },
        r,
        null,
        [[7, 14]]
      );
    })
  )).apply(this, arguments);
}
function m(a) {
  var e = Array.isArray(a) ? a : [],
    r = e.find(function (a) {
      var e = String((a && a.id) || "").trim();
      return !!e && "in_use" !== e && !n(e);
    }),
    t = e.find(function (a) {
      return a && n(a.id);
    });
  if (t && t.id) return String(t.id);
  var i = e.find(function (a) {
    return a && "in_use" === a.id;
  });
  if (i && i.id) return String(i.id);
  if (r && r.id) return String(r.id);
  var o = e.find(function (a) {
    return a && a.id;
  });
  return o && o.id ? String(o.id) : "in_use";
}
function f(a) {
  var r = new Set(),
    t = a && a.data && "object" === e(a.data) ? a.data : {},
    i = function (a) {
      (Array.isArray(a) ? a : []).forEach(function (a) {
        var e = String(a || "").trim();
        e && r.add(e);
      });
    };
  i(t.currentPattern), i(t.trayState && t.trayState.pattern);
  var n = a && "function" == typeof a.trayComp ? a.trayComp() : null;
  return (
    (Array.isArray(n && n.beadsRef) ? n.beadsRef : []).forEach(function (a) {
      var e = String((a && (a.id || a.mat)) || "").trim();
      e && r.add(e);
    }),
    r
  );
}
function b(a, e, r, t) {
  var i = Array.isArray(a) ? a : [],
    n = Array.isArray(e) ? e : [],
    o = t instanceof Set ? t : new Set(),
    u = Object.create(null),
    s = [];
  return (
    i.forEach(function (a) {
      var e = String((a && a.id) || "").trim();
      e && !u[e] && ((u[e] = a), (r || o.has(e)) && s.push(e));
    }),
    n.forEach(function (a) {
      var e = String((a && a.id) || "").trim();
      e &&
        (s.indexOf(e) < 0 && s.push(e),
        (u[e] = (function (a, e) {
          return d(a, e);
        })(u[e], a)));
    }),
    s
      .map(function (a) {
        return u[a];
      })
      .filter(Boolean)
  );
}
module.exports = {
  handleSearchInput: function (a) {
    var e = this,
      r = a.detail.value || "";
    this.setData({ searchQuery: r }),
      this._diySearchDebounceTimer &&
        (clearTimeout(this._diySearchDebounceTimer),
        (this._diySearchDebounceTimer = null));
    this._diySearchDebounceTimer = setTimeout(function () {
      e._diySearchDebounceTimer = null;
      var a = e.data && void 0 !== e.data.searchQuery ? e.data.searchQuery : r;
      String(a || "").trim()
        ? e
            .loadDiyMaterialsForSelection({ keyword: a, page: 1, append: !1 })
            .catch(function () {
              e.recomputeDisplayBeads({ searchQuery: a });
            })
        : e.recomputeDisplayBeads({ searchQuery: a });
    }, 300);
  },
  handleMainCategoryChange: function (a) {
    var e = this,
      r = (this.catalogSnapshot && this.catalogSnapshot.subCategories) || {},
      t = g(a.currentTarget.dataset.id),
      n = i(t, r[t] || [], this.data && this.data.mainCategories),
      o = m(n);
    this.setData({ mainCategory: t, menuCategory: o, currentSubCategories: n }),
      this.loadDiyMaterialsForSelection({
        mainCategory: t,
        menuCategory: o,
        page: 1,
        append: !1,
      }).catch(function () {
        e.recomputeDisplayBeads({ mainCategory: t, menuCategory: o });
      });
  },
  handleSubCategoryChange: function (a) {
    var e = this,
      r = g(a.currentTarget.dataset.id);
    this.setData({ menuCategory: r }),
      this.loadDiyMaterialsForSelection({
        menuCategory: r,
        page: 1,
        append: !1,
      }).catch(function () {
        e.recomputeDisplayBeads({ menuCategory: r });
      });
  },
  loadDiyMaterialsForSelection: function (t) {
    var o = this;
    return r(
      a().mark(function s() {
        var l, y, d, c, p, S, C, M, v, _, w, j, A, D, T, k, x;
        return a().wrap(
          function (s) {
            for (;;)
              switch ((s.prev = s.next)) {
                case 0:
                  if (
                    ((l = t && "object" === e(t) ? t : {}),
                    (y = Object.prototype.hasOwnProperty.call(
                      l,
                      "menuCategory"
                    )),
                    (d = g(l.mainCategory || o.data.mainCategory)),
                    (c = g(y ? l.menuCategory : o.data.menuCategory)),
                    (p = void 0 !== l.keyword ? l.keyword : o.data.searchQuery),
                    (S = Math.max(1, Math.floor(Number(l.page || 1)))),
                    (C = Math.max(
                      1,
                      Math.min(60, Math.floor(Number(l.pageSize || 24)))
                    )),
                    (M = !0 === l.append),
                    (v = o._diyMaterialPaging || {}),
                    M ||
                      ((P = void 0),
                      (P =
                        (B = o) && B.catalogSnapshot ? B.catalogSnapshot : {}),
                      !(
                        B &&
                        !0 === B._diyMaterialsBundleReady &&
                        Array.isArray(P.beadTypes) &&
                        P.beadTypes.length
                      )))
                  ) {
                    s.next = 13;
                    break;
                  }
                  return (
                    (o._diyMaterialPaging = {
                      categoryCode: d,
                      subCategoryCode: n(c) ? "" : c,
                      displayMenuCategory: c,
                      keyword: String(p || ""),
                      page: 1,
                      pageSize: o.catalogSnapshot.beadTypes.length,
                      hasMore: !1,
                      loading: !1,
                    }),
                    o.recomputeDisplayBeads({
                      mainCategory: d,
                      menuCategory: c,
                      searchQuery: p,
                      trayPattern: o.data.trayState.pattern,
                    }),
                    s.abrupt("return", !0)
                  );
                case 13:
                  if (!v.loading) {
                    s.next = 15;
                    break;
                  }
                  return s.abrupt("return", !1);
                case 15:
                  if ("in_use" !== c) {
                    s.next = 18;
                    break;
                  }
                  return (
                    o.recomputeDisplayBeads({
                      mainCategory: d,
                      menuCategory: c,
                      searchQuery: p,
                    }),
                    s.abrupt("return", !0)
                  );
                case 18:
                  if (
                    ((_ =
                      (o.catalogSnapshot && o.catalogSnapshot.subCategories) ||
                      {}),
                    (w = Array.isArray(_[d]) ? _[d] : []),
                    (j =
                      o.data && Array.isArray(o.data.currentSubCategories)
                        ? o.data.currentSubCategories
                        : []),
                    (A = i(
                      d,
                      w.length ? w : j,
                      o.data && o.data.mainCategories
                    )),
                    !A.some(function (a) {
                      return String((a && a.id) || "") === c;
                    }) &&
                      c &&
                      (c = m(A)),
                    (D = n(c) ? "" : c),
                    (T = [
                      d,
                      D,
                      String(p || ""),
                      S,
                      C,
                      M ? "append" : "replace",
                    ].join("|")),
                    (o._diyMaterialInFlightMap &&
                      "object" === e(o._diyMaterialInFlightMap)) ||
                      (o._diyMaterialInFlightMap = Object.create(null)),
                    !o._diyMaterialInFlightMap[T])
                  ) {
                    s.next = 29;
                    break;
                  }
                  return s.abrupt("return", o._diyMaterialInFlightMap[T]);
                case 29:
                  return (
                    (k = Number(o._diyMaterialSelectionToken || 0) + 1),
                    (o._diyMaterialSelectionToken = k),
                    (o._diyMaterialPaging = Object.assign({}, v, {
                      loading: !0,
                    })),
                    (x = r(
                      a().mark(function e() {
                        var r, t, i, n, s, l, y;
                        return a().wrap(function (a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                return (
                                  (r = !M && !String(p || "").trim()),
                                  (a.next = 3),
                                  h({
                                    shouldLoadBundle: r,
                                    pageParams: {
                                      categoryCode: d,
                                      subCategoryCode: D,
                                      keyword: p,
                                      page: S,
                                      pageSize: C,
                                      preferCache: !0,
                                    },
                                  })
                                );
                              case 3:
                                if (
                                  ((t = a.sent),
                                  (i = t.payload),
                                  k ===
                                    Number(o._diyMaterialSelectionToken || 0))
                                ) {
                                  a.next = 7;
                                  break;
                                }
                                return a.abrupt("return", !1);
                              case 7:
                                return (
                                  (n = Array.isArray(i && i.beadTypes)
                                    ? i.beadTypes
                                    : []),
                                  (s =
                                    o.catalogSnapshot &&
                                    Array.isArray(o.catalogSnapshot.beadTypes)
                                      ? o.catalogSnapshot.beadTypes
                                      : []),
                                  (l = f(o)),
                                  (y = b(s, n, M || t.fromBundle, l)),
                                  (o.catalogSnapshot = Object.assign(
                                    {},
                                    o.catalogSnapshot || {},
                                    { beadTypes: y }
                                  )),
                                  t.fromBundle &&
                                    n.length &&
                                    (o._diyMaterialsBundleReady = !0),
                                  u(o.catalogSnapshot),
                                  "function" ==
                                    typeof o.syncTrayPhysicsGeometry &&
                                    o.syncTrayPhysicsGeometry(
                                      "materials_catalog"
                                    ),
                                  "function" ==
                                    typeof o.rehydrateTrayBeadImages &&
                                    o.rehydrateTrayBeadImages(
                                      "materials_catalog"
                                    ),
                                  "function" ==
                                    typeof o.refreshStandaloneDiyPatternAfterMaterialsReady &&
                                    o.refreshStandaloneDiyPatternAfterMaterialsReady(
                                      "materials_catalog"
                                    ),
                                  (o._diyMaterialPaging = {
                                    categoryCode: d,
                                    subCategoryCode: D,
                                    displayMenuCategory: c,
                                    keyword: String(p || ""),
                                    page: Number((i && i.page) || S),
                                    pageSize: Number((i && i.pageSize) || C),
                                    hasMore:
                                      !t.fromBundle && i && !0 === i.hasMore,
                                    loading: !1,
                                  }),
                                  o.recomputeDisplayBeads({
                                    mainCategory: d,
                                    menuCategory: c,
                                    searchQuery: p,
                                    trayPattern: o.data.trayState.pattern,
                                  }),
                                  a.abrupt("return", !0)
                                );
                              case 20:
                              case "end":
                                return a.stop();
                            }
                        }, e);
                      })
                    )()),
                    (o._diyMaterialInFlightMap[T] = x),
                    (s.prev = 34),
                    (s.next = 37),
                    x
                  );
                case 37:
                  return s.abrupt("return", s.sent);
                case 40:
                  throw (
                    ((s.prev = 40),
                    (s.t0 = s.catch(34)),
                    k === Number(o._diyMaterialSelectionToken || 0) &&
                      (o._diyMaterialPaging = Object.assign(
                        {},
                        o._diyMaterialPaging || {},
                        { loading: !1 }
                      )),
                    s.t0)
                  );
                case 44:
                  return (
                    (s.prev = 44),
                    o._diyMaterialInFlightMap &&
                      o._diyMaterialInFlightMap[T] === x &&
                      delete o._diyMaterialInFlightMap[T],
                    s.finish(44)
                  );
                case 47:
                case "end":
                  return s.stop();
              }
            var B, P;
          },
          s,
          null,
          [[34, 40, 44, 47]]
        );
      })
    )();
  },
  handleDiyMaterialsScrollLower: function () {
    var a = Date.now();
    if (
      !(
        Number(this._diyMaterialScrollLowerAt || 0) > 0 &&
        a - Number(this._diyMaterialScrollLowerAt || 0) < 500
      )
    ) {
      this._diyMaterialScrollLowerAt = a;
      var e = this._diyMaterialPaging || {};
      if (e.hasMore && !e.loading) {
        var r = Object.prototype.hasOwnProperty.call(e, "subCategoryCode");
        this.loadDiyMaterialsForSelection({
          mainCategory: e.categoryCode || this.data.mainCategory,
          menuCategory:
            e.displayMenuCategory ||
            (r ? e.subCategoryCode : this.data.menuCategory),
          keyword: void 0 !== e.keyword ? e.keyword : this.data.searchQuery,
          page: Number(e.page || 1) + 1,
          pageSize: Number(e.pageSize || 24),
          append: !0,
        }).catch(function () {});
      }
    }
  },
};
