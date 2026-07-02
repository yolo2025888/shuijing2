var r = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../../../pages/index/modules/deps/profile-deps").playSound;
module.exports = {
  handleOrderManagerRetry: function () {
    var a = this;
    return e(
      r().mark(function e() {
        return r().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                if (a.handleProfileProtectedAction()) {
                  r.next = 2;
                  break;
                }
                return r.abrupt("return");
              case 2:
                return (
                  (r.next = 4),
                  a.loadOrderManagerList({
                    filter: a.data.orderManagerFilter || "all",
                    page: 1,
                    append: !1,
                    refreshDetail: !1,
                  })
                );
              case 4:
              case "end":
                return r.stop();
            }
        }, e);
      })
    )();
  },
  handleCloseOrderManager: function () {
    this.setData({
      showOrderManagerModal: !1,
      orderManagerLoading: !1,
      orderManagerFilter: "all",
      orderManagerError: "",
      orderManagerItems: [],
      orderManagerPage: 1,
      orderManagerPageSize: 8,
      orderManagerHasMore: !1,
      orderManagerTotal: 0,
      orderManagerActiveOrderNo: "",
      orderManagerDetail: null,
      orderManagerDetailLoading: !1,
      orderManagerStatusLogs: [],
      orderManagerPaying: !1,
      orderManagerCancelling: !1,
      orderManagerConfirmingReceive: !1,
      orderManagerApplyingAfterSale: !1,
    }),
      a("pop");
  },
  handleOrderManagerFilterTap: function (a) {
    var n = this;
    return e(
      r().mark(function e() {
        var t, o, i;
        return r().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                if (n.handleProfileProtectedAction()) {
                  r.next = 2;
                  break;
                }
                return r.abrupt("return");
              case 2:
                if (
                  ((t =
                    (a && a.currentTarget && a.currentTarget.dataset) || {}),
                  (o = String(t.filter || "").trim()),
                  (i = {
                    all: !0,
                    pending_pay: !0,
                    pending_ship: !0,
                    pending_receive: !0,
                    after_sale: !0,
                  }[o]
                    ? o
                    : "all") !== n.data.orderManagerFilter ||
                    !(n.data.orderManagerItems || []).length)
                ) {
                  r.next = 8;
                  break;
                }
                return r.abrupt("return");
              case 8:
                return (
                  (r.next = 10),
                  n.loadOrderManagerList({
                    filter: i,
                    page: 1,
                    append: !1,
                    refreshDetail: !1,
                  })
                );
              case 10:
              case "end":
                return r.stop();
            }
        }, e);
      })
    )();
  },
  handleOrderManagerLoadMore: function () {
    var a = this;
    return e(
      r().mark(function e() {
        var n;
        return r().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                if (a.handleProfileProtectedAction()) {
                  r.next = 2;
                  break;
                }
                return r.abrupt("return");
              case 2:
                if (!a.data.orderManagerLoading) {
                  r.next = 4;
                  break;
                }
                return r.abrupt("return");
              case 4:
                if (a.data.orderManagerHasMore) {
                  r.next = 6;
                  break;
                }
                return r.abrupt("return");
              case 6:
                return (
                  (n = Number(a.data.orderManagerPage || 1) + 1),
                  (r.next = 9),
                  a.loadOrderManagerList({
                    filter: a.data.orderManagerFilter || "all",
                    page: n,
                    append: !0,
                    refreshDetail: !1,
                  })
                );
              case 9:
              case "end":
                return r.stop();
            }
        }, e);
      })
    )();
  },
  handleProfileOrderTap: function (a) {
    var n = this;
    return e(
      r().mark(function e() {
        var t;
        return r().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                if (n.handleProfileProtectedAction()) {
                  r.next = 2;
                  break;
                }
                return r.abrupt("return");
              case 2:
                return (
                  (t = n.resolveOrderFilterByEntryId(a)),
                  (r.next = 5),
                  n.openOrderManager(t)
                );
              case 5:
              case "end":
                return r.stop();
            }
        }, e);
      })
    )();
  },
};
