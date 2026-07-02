module.exports = {
  ensureTimerRegistry: function () {
    return (
      this._timerRegistry ||
        (this._timerRegistry = { timeouts: new Set(), intervals: new Set() }),
      this._timerRegistry
    );
  },
  setManagedTimeout: function (e, t) {
    var r = this.ensureTimerRegistry(),
      i = Math.max(0, Number(t) || 0),
      n = null;
    return (
      (n = setTimeout(function () {
        r.timeouts.delete(n), "function" == typeof e && e();
      }, i)),
      r.timeouts.add(n),
      n
    );
  },
  clearManagedTimeout: function (e) {
    if (null != e) {
      var t = this.ensureTimerRegistry();
      clearTimeout(e), t.timeouts.delete(e);
    }
  },
  setManagedInterval: function (e, t) {
    var r = this.ensureTimerRegistry(),
      i = Math.max(1, Number(t) || 1),
      n = setInterval(function () {
        "function" == typeof e && e();
      }, i);
    return r.intervals.add(n), n;
  },
  clearManagedInterval: function (e) {
    if (null != e) {
      var t = this.ensureTimerRegistry();
      clearInterval(e), t.intervals.delete(e);
    }
  },
  clearAllManagedTimers: function () {
    var e = this.ensureTimerRegistry();
    e.timeouts.forEach(function (e) {
      return clearTimeout(e);
    }),
      e.intervals.forEach(function (e) {
        return clearInterval(e);
      }),
      e.timeouts.clear(),
      e.intervals.clear(),
      (this.toastTimer = null),
      (this.clockTimer = null);
  },
};
