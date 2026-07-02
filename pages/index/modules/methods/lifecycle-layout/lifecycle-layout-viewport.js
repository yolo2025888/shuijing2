module.exports = {
  onResize: function () {
    this.computeViewportMetrics();
  },
  updateClock: function () {
    var t = new Date(),
      e = "".concat(t.getHours()).padStart(2, "0"),
      n = "".concat(t.getMinutes()).padStart(2, "0"),
      o = "".concat(e, ":").concat(n);
    (this.data && this.data.currentTime === o) ||
      this.setData({ currentTime: o });
  },
  getViewportInfo: function () {
    var t = null,
      e = null,
      n = null;
    try {
      t = wx.getWindowInfo ? wx.getWindowInfo() : null;
    } catch (e) {
      t = null;
    }
    try {
      e = wx.getDeviceInfo ? wx.getDeviceInfo() : null;
    } catch (t) {
      e = null;
    }
    try {
      n = wx.getMenuButtonBoundingClientRect
        ? wx.getMenuButtonBoundingClientRect()
        : null;
    } catch (t) {
      n = null;
    }
    var o = (t && t.windowWidth) || 390,
      i = (t && t.windowHeight) || 844,
      u = (t && t.safeArea) || {},
      a =
        Number.isFinite(u.top) && u.top > 0
          ? u.top
          : (t && Number(t.statusBarHeight)) ||
            (e && Number(e.statusBarHeight)) ||
            20,
      c = Number.isFinite(u.bottom) && u.bottom > 0 ? u.bottom : i;
    return {
      windowWidth: o,
      windowHeight: i,
      safeTop: a,
      safeBottom: c,
      safeHeight: Math.max(1, c - a),
      menuButtonRect: n && n.width ? n : null,
    };
  },
};
