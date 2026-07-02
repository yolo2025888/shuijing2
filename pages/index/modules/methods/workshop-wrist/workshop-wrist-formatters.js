var r = require("../../deps/workshop-deps"),
  t = r.WRIST_MODAL_DEFAULT,
  e = r.normalizeWristValue;
function i(r) {
  var e = Number(r);
  if (!Number.isFinite(e)) return t;
  var i = Math.max(14, Math.min(21, e));
  return 0.5 * Math.round(i / 0.5);
}
module.exports = {
  WRIST_SLIDER_STEP: 0.5,
  formatWristText: function (r) {
    var t = e(r);
    return null === t ? "未设置手围" : "腕 ".concat(t.toFixed(1), "cm");
  },
  clampWristSliderValue: i,
  formatWristDraftValue: function (r) {
    return i(r).toFixed(1);
  },
};
