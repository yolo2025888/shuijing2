var t = require("../../pages/index/modules/deps/workshop-deps"),
  e = t.playSound,
  a = t.normalizePattern,
  r = t.buildCheckoutData,
  s = t.WRIST_MODAL_DEFAULT,
  i = t.normalizeWristValue,
  n = t.getBraceletGeometry,
  l = t.checkWristCompatibility,
  u = require("../../pages/index/modules/methods/workshop-wrist/workshop-wrist-formatters"),
  o = u.WRIST_SLIDER_STEP,
  h = u.formatWristText,
  d = u.clampWristSliderValue,
  c = u.formatWristDraftValue;
module.exports = {
  createWristMethods: function () {
    return Object.freeze({
      setWristDraftValue: function (t) {
        var e = d(t);
        this.setData({ wristDraftValue: e, wristDraftValueDisplay: c(e) });
      },
      restoreWristPreference: function () {
        var t = null;
        try {
          var e = wx.getStorageSync("stonelab_user_wrist");
          t = i(e);
        } catch (e) {
          t = null;
        }
        var a = null === t ? s : t;
        this.setData({
          userWrist: t,
          userWristText: h(t),
          wristDraftValue: a,
          wristDraftValueDisplay: c(a),
        }),
          this.updateWristMonitor(this.data.trayState.pattern, t);
      },
      updateWristMonitor: function (t, e) {
        var r = a(t),
          s = i(void 0 === e ? this.data.userWrist : e),
          u = n(r),
          o = l(r, s);
        this.setData({
          wristMonitor: Object.assign(
            {
              status: "idle",
              msg: "设置手围后可查看佩戴贴合度",
              tone: "muted",
            },
            o,
            { rangeText: u.rangeText, rangeTextCompact: u.rangeTextCompact }
          ),
        });
      },
      handleOpenWristSetting: function () {
        var t = i(this.data.userWrist),
          a = null === t ? s : t;
        this.setData({
          wristSettingOpen: !0,
          wristDraftValue: a,
          wristDraftValueDisplay: c(a),
        }),
          e("slide");
      },
      handleCloseWristSetting: function () {
        this.setData({ wristSettingOpen: !1 });
      },
      handleWristSliderChange: function (t) {
        var e = i(t && t.detail ? t.detail.value : null);
        this.setWristDraftValue(null === e ? s : e);
      },
      handleWristSliderChanging: function (t) {
        var e = i(t && t.detail ? t.detail.value : null);
        this.setWristDraftValue(null === e ? s : e);
      },
      handleWristDecrease: function () {
        var t = d(this.data.wristDraftValue);
        this.setWristDraftValue(t - o), e("pop");
      },
      handleWristIncrease: function () {
        var t = d(this.data.wristDraftValue);
        this.setWristDraftValue(t + o), e("pop");
      },
      handleClearWristSetting: function () {
        try {
          wx.removeStorageSync("stonelab_user_wrist");
        } catch (t) {}
        this.setData({
          wristSettingOpen: !1,
          userWrist: null,
          userWristText: h(null),
          wristDraftValue: s,
          wristDraftValueDisplay: c(s),
        }),
          this.updateWristMonitor(this.data.trayState.pattern, null),
          e("pop");
      },
      handleConfirmWristSetting: function () {
        var t = i(this.data.wristDraftValue),
          a = null === t ? s : t;
        try {
          wx.setStorageSync("stonelab_user_wrist", a);
        } catch (t) {}
        if (
          (this.setData({
            wristSettingOpen: !1,
            userWrist: a,
            userWristText: h(a),
            wristDraftValue: a,
            wristDraftValueDisplay: c(a),
          }),
          this.updateWristMonitor(this.data.trayState.pattern, a),
          this.data.checkoutData)
        ) {
          var n = r(
            Object.assign({}, this.data.checkoutData, { userWrist: a })
          );
          this.setData({ checkoutData: n });
        }
        e("pop");
      },
    });
  },
};
