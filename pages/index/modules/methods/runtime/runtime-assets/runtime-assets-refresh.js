var e = require("../../../deps/runtime-deps"),
  r = e.getCachedAssetPath,
  t = e.normalizeBgIndex,
  s =
    require("../../../../../../domain-hosts/inspiration/effects").buildRefreshedPresetViewState;
function i(e, r) {
  var t = Array.isArray(e) ? e : [],
    s = (function (e) {
      var r =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
        t = Number(e);
      return !Number.isFinite(t) || t <= 0 ? r : Math.max(1, Math.floor(t));
    })(r, 8),
    i = t.slice(0, s);
  return {
    visibleFilteredPresets: i,
    inspirationHasMorePresets: i.length < t.length,
  };
}
module.exports = {
  refreshCachedMediaUrls: function () {
    var e = (this.data.trayBgs || []).map(function (e) {
        if (!e || !e.url) return e;
        var t = r(e.url);
        return t && t !== e.url ? Object.assign({}, e, { url: t }) : e;
      }),
      a = (this.data.presets || []).map(function (e) {
        if (!e || !e.previewUrl) return e;
        var t = r(e.previewUrl);
        return t && t !== e.previewUrl
          ? Object.assign({}, e, { displayPreviewUrl: t })
          : e.displayPreviewUrl && e.displayPreviewUrl !== e.previewUrl
          ? Object.assign({}, e, { displayPreviewUrl: e.previewUrl })
          : e;
      }),
      n = e.length,
      l = e[t(this.data.bgIndex, n)] || e[0] || null,
      o = s({
        presets: a,
        presetCategories: this.data.presetCategories,
        currentPresetCategory: this.data.presetCategory,
      }),
      d = i(o.filteredPresets, this.data.inspirationRenderLimit),
      p = {
        trayBgs: e,
        currentTrayBg: l,
        presetCategory: o.presetCategory,
        presets: a,
        filteredPresets: o.filteredPresets,
        visibleFilteredPresets: d.visibleFilteredPresets,
        inspirationPaging: !1,
        inspirationHasMorePresets: d.inspirationHasMorePresets,
      };
    "function" != typeof this.setDataPatch
      ? this.setData(p)
      : this.setDataPatch(p);
  },
};
