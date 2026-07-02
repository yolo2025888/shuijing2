var e = require("../../@babel/runtime/helpers/typeof"),
  r = require("../../pages/index/modules/methods/lifecycle-bootstrap/bootstrap-preset-utils"),
  t = r.pickPresetCategoryId,
  s = r.filterPresetsByCategory,
  a =
    require("../../domain/v2/preset-author-domain").resolvePresetAuthorPresentation;
module.exports = {
  createDomainEffects: function () {
    return Object.freeze({});
  },
  buildRefreshedPresetViewState: function (r) {
    var i = r && "object" === e(r) ? r : {},
      o = Array.isArray(i.presets) ? i.presets : [],
      n = (function (e, r, s) {
        var a = Array.isArray(e) ? e : [],
          i = Array.isArray(r) ? r : [];
        return t(a, i, s);
      })(
        Array.isArray(i.presetCategories) ? i.presetCategories : [],
        o,
        i.currentPresetCategory
      );
    return {
      presetCategory: n,
      filteredPresets: s(o, n).map(function (e) {
        return a(e);
      }),
    };
  },
};
