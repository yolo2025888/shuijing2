var t = require("../../deps/runtime-deps"),
  e = t.BASE_TRAY_SIZE,
  a = t.PHOTO_TRAY_SCALE;
function i(t, e, a) {
  return Math.max(e, Math.min(a, t));
}
module.exports = {
  getPhotoLayoutConfig: function (t, o) {
    var n = t.safeHeight || 844,
      r = t.windowWidth || 390,
      h = n / Math.max(1, r),
      u = Number.isFinite(Number(o)) && Number(o) > 0 ? Number(o) : e,
      s = Math.round((n / 844) * 300);
    h >= 2.15
      ? (s = Math.round(0.96 * s))
      : h >= 1.95 && (s = Math.round(0.98 * s));
    var c = Math.min(1, r / 380),
      f = i((304 * a * c) / u, 1.52, 2.2);
    return {
      shiftPx: i(s, Math.round(0.22 * n), Math.round(0.4 * n)),
      scale: f,
    };
  },
  recomputePhotoTrayShift: function (t) {
    var i = this.getViewportInfo(),
      o = this.data.traySize || e,
      n = this.getPhotoLayoutConfig(i, o),
      r = Number.isFinite(n.shiftPx)
        ? n.shiftPx
        : Math.round(0.5 * i.safeHeight),
      h = Number.isFinite(n.scale) ? n.scale : a;
    this.setData(
      {
        trayPhotoStyle: "width: "
          .concat(o, "px; height: ")
          .concat(o, "px; transform: translateY(")
          .concat(r, "px) scale(")
          .concat(h, ");"),
      },
      function () {
        "function" == typeof t && t();
      }
    );
  },
};
