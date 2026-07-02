var t = require("../../../deps/lifecycle-deps").logger;
module.exports = {
  shouldEmitInitSignal: function (t, o, s) {
    var a = this[t] || {},
      i = Date.now();
    return Number(a[o] || 0) > i
      ? ((this[t] = a), !1)
      : ((a[o] = i + Math.max(0, Number(s) || 0)), (this[t] = a), !0);
  },
  reportInitIssue: function (o, s, a) {
    var i = Object.assign(
        {
          toast: !1,
          fallbackMessage: "数据加载失败，请稍后重试",
          toastCooldownMs: 2500,
          logCooldownMs: 1e3,
        },
        a || {}
      ),
      n = this.getInitErrorCode(s),
      e = "".concat(o, ":").concat(n);
    if (
      (this.shouldEmitInitSignal("_initWarnGate", e, i.logCooldownMs) &&
        t.warn("[init:".concat(o, "]"), s),
      i.toast)
    ) {
      var r = "".concat(o, ":").concat(n);
      this.shouldEmitInitSignal("_initToastGate", r, i.toastCooldownMs) &&
        this.showToast(this.resolveInitErrorToast(s, i.fallbackMessage));
    }
  },
};
