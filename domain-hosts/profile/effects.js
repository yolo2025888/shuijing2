var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
module.exports = {
  createDomainEffects: function () {
    return {
      onLoad: function () {
        var r = this;
        return t(
          e().mark(function t() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r.toastTimer = null),
                      (r.lastScrollTop = 0),
                      (r.pendingSharePayload = null),
                      (r._initWarnGate = {}),
                      (r._initToastGate = {}),
                      (r._profileContentBlockMap = {}),
                      "function" == typeof r.computeViewportMetrics &&
                        r.computeViewportMetrics(),
                      (e.next = 9),
                      r.bootstrapProfileRuntime()
                    );
                  case 9:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )();
      },
      onShow: function () {
        "function" == typeof this.computeViewportMetrics &&
          this.computeViewportMetrics(),
          this.syncPrimaryTabs();
      },
      onUnload: function () {
        this.toastTimer && clearTimeout(this.toastTimer);
      },
      onPullDownRefresh: function () {
        var r = this;
        return t(
          e().mark(function t() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0), (e.next = 3), r.bootstrapProfileRuntime()
                      );
                    case 3:
                      return (
                        (e.prev = 3), wx.stopPullDownRefresh(), e.finish(3)
                      );
                    case 6:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[0, , 3, 6]]
            );
          })
        )();
      },
    };
  },
};
