var t = require("../../../../pages/index/modules/deps/workshop-deps"),
  a = t.getStructure,
  e = t.normalizePattern,
  r = t.buildCheckoutData,
  i = require("../../../../pages/index/modules/methods/navigation-coordinator"),
  s = i.setCheckoutData,
  n = i.clearCheckoutData;
module.exports = {
  handleSaveClick: function () {
    if (this.data.trayState.isStrung)
      if (this.data.trayState.beadsCount) {
        var t = e(this.data.trayState.pattern);
        this.setData({
          namingPayload: {
            type: "save",
            pattern: t,
            perim: this.data.trayState.totalPerimeter,
            price: this.data.trayState.totalPrice,
            bgIndex: this.data.bgIndex,
          },
          namingValue: this.data.currentSchemeName || "",
        });
      } else this.showToast("请先添加珠子");
    else this.showToast("请先收拢成串后再保存");
  },
  handleCheckoutClick: function () {
    if (this.data.trayState.isStrung)
      if (this.data.trayState.beadsCount) {
        var t = e(this.data.trayState.pattern);
        s(
          this,
          r({
            beadsOrPattern: t,
            perim: this.data.trayState.totalPerimeter,
            price: this.data.trayState.totalPrice,
            bgIndex: this.data.bgIndex,
            mode: "bracelet",
            name: this.data.currentSchemeName,
            userWrist: this.data.userWrist,
            isPreview: !1,
            structure: a(t),
            bgUrl: this.data.currentTrayBg ? this.data.currentTrayBg.url : "",
          })
        );
      } else this.showToast("请先添加珠子");
    else this.showToast("请先收拢成串后再加入购物车");
  },
  handleCloseCheckout: function () {
    n(this);
  },
  handleCheckoutConfirm: function () {
    var t = this.data.checkoutData;
    if (t) {
      var a = e(t.beadsOrPattern);
      n(this),
        this.setData({
          namingPayload: {
            type: "cart",
            pattern: a,
            perim: t.perim,
            price: t.price,
            bgIndex: Number.isFinite(Number(t.bgIndex))
              ? Number(t.bgIndex)
              : this.data.bgIndex,
          },
          namingValue: t.name || this.data.currentSchemeName || "",
        });
    }
  },
};
