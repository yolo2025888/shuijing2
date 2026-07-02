var e = require("../../@babel/runtime/helpers/typeof"),
  r = require("../../pages/index/modules/methods/lifecycle-bootstrap/bootstrap-preset-utils"),
  t = r.resolvePresetCategories,
  i = r.pickPresetCategoryId,
  n = r.filterPresetsByCategory,
  s = r.resolveDefaultMenuCategory,
  a = r.sortMainCategoriesForDisplay,
  o = r.withAllSubCategory,
  u =
    require("../../domain/v2/preset-author-domain").resolvePresetAuthorPresentation;
module.exports = {
  createDomainState: function () {
    return Object.freeze({});
  },
  buildInspirationPresetState: function (r) {
    var g = r && "object" === e(r) ? r : {},
      l = Array.isArray(g.presetsInput) ? g.presetsInput : [],
      p = a(g.mainCategoriesInput || []),
      c =
        g.subCategoriesInput && "object" === e(g.subCategoriesInput)
          ? g.subCategoriesInput
          : {},
      C = t(g.presetCategoriesInput || [], l),
      b = i(C, l, g.currentPresetCategory),
      m = !0 === g.preserveMainAndMenu,
      y = String(g.mainCategoryFallback || "kuangshi").trim() || "kuangshi",
      f = (function (e, r, t, i) {
        return t &&
          e.some(function (e) {
            return e.id === r;
          })
          ? r
          : (e[0] && e[0].id) || i;
      })(p, g.currentMainCategory, m, y),
      d = o(f, c[f] || [], p),
      h = (function (e, r, t) {
        return t &&
          e.some(function (e) {
            return e.id === r;
          })
          ? r
          : s(e);
      })(d, g.currentMenuCategory, m);
    return {
      mainCategories: p,
      subCategories: c,
      presetCategories: C,
      presetCategory: b,
      mainCategory: f,
      currentSubCategories: d,
      menuCategory: h,
      filteredPresets: n(l, b).map(function (e) {
        return u(e);
      }),
    };
  },
  buildInspirationVisiblePresetState: function (e, r) {
    var t = Array.isArray(e) ? e : [],
      i = (function (e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
          t = Number(e);
        return !Number.isFinite(t) || t <= 0 ? r : Math.max(1, Math.floor(t));
      })(r, 8),
      n = t.slice(0, i).map(function (e) {
        return u(e);
      });
    return {
      visibleFilteredPresets: n,
      inspirationHasMorePresets: n.length < t.length,
    };
  },
};
