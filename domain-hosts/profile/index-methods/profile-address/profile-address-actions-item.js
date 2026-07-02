var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../../../pages/index/modules/deps/profile-deps"),
  a = t.setDefaultAddress,
  n = t.deleteAddress,
  s = t.logger,
  u = t.playSound;
module.exports = {
  handleAddressUseTap: function (t) {
    var n = this;
    return r(
      e().mark(function r() {
        var u, c;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (n.handleProfileProtectedAction()) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return");
                case 2:
                  if (
                    (u = String(
                      (t &&
                        t.currentTarget &&
                        t.currentTarget.dataset &&
                        t.currentTarget.dataset.id) ||
                        ""
                    ))
                  ) {
                    e.next = 5;
                    break;
                  }
                  return e.abrupt("return");
                case 5:
                  if (
                    (c = (n.data.addressList || []).find(function (e) {
                      return e.id === u;
                    }))
                  ) {
                    e.next = 8;
                    break;
                  }
                  return e.abrupt("return");
                case 8:
                  if ((n.setData({ selectedAddress: c }), c.isDefault)) {
                    e.next = 20;
                    break;
                  }
                  return (e.prev = 10), (e.next = 13), a(u);
                case 13:
                  return (
                    (e.next = 15),
                    n.refreshAddressManagerState({ keepEditingForm: !0 })
                  );
                case 15:
                  e.next = 20;
                  break;
                case 17:
                  (e.prev = 17),
                    (e.t0 = e.catch(10)),
                    s.error("Set default by address use failed", e.t0);
                case 20:
                  n.showToast("已选中该收货地址");
                case 21:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[10, 17]]
        );
      })
    )();
  },
  handleAddressSetDefaultTap: function (t) {
    var n = this;
    return r(
      e().mark(function r() {
        var c, d;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (n.handleProfileProtectedAction()) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return");
                case 2:
                  if (
                    (c = String(
                      (t &&
                        t.currentTarget &&
                        t.currentTarget.dataset &&
                        t.currentTarget.dataset.id) ||
                        ""
                    ))
                  ) {
                    e.next = 5;
                    break;
                  }
                  return e.abrupt("return");
                case 5:
                  if (
                    (d = (n.data.addressList || []).find(function (e) {
                      return e.id === c;
                    }))
                  ) {
                    e.next = 8;
                    break;
                  }
                  return e.abrupt("return");
                case 8:
                  if (!d.isDefault) {
                    e.next = 11;
                    break;
                  }
                  return n.showToast("该地址已是默认地址"), e.abrupt("return");
                case 11:
                  return (e.prev = 11), (e.next = 14), a(c);
                case 14:
                  return (
                    (e.next = 16),
                    n.refreshAddressManagerState({ keepEditingForm: !0 })
                  );
                case 16:
                  n.showToast("默认地址已更新"), u("pop"), (e.next = 24);
                  break;
                case 20:
                  (e.prev = 20),
                    (e.t0 = e.catch(11)),
                    s.error("Set default address failed", e.t0),
                    n.showToast("默认地址设置失败");
                case 24:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[11, 20]]
        );
      })
    )();
  },
  handleAddressDeleteTap: function (t) {
    var a = this;
    return r(
      e().mark(function r() {
        var c, d, i;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (a.handleProfileProtectedAction()) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return");
                case 2:
                  if (
                    (c = String(
                      (t &&
                        t.currentTarget &&
                        t.currentTarget.dataset &&
                        t.currentTarget.dataset.id) ||
                        ""
                    ))
                  ) {
                    e.next = 5;
                    break;
                  }
                  return e.abrupt("return");
                case 5:
                  return (
                    (d = !1),
                    (e.prev = 6),
                    (e.next = 9),
                    new Promise(function (e, r) {
                      wx.showModal({
                        title: "确认删除",
                        content: "删除后无法恢复，是否继续？",
                        confirmColor: "#c85644",
                        success: e,
                        fail: r,
                      });
                    })
                  );
                case 9:
                  (i = e.sent), (d = !(!i || !i.confirm)), (e.next = 16);
                  break;
                case 13:
                  return (e.prev = 13), (e.t0 = e.catch(6)), e.abrupt("return");
                case 16:
                  if (d) {
                    e.next = 18;
                    break;
                  }
                  return e.abrupt("return");
                case 18:
                  return (e.prev = 18), (e.next = 21), n(c);
                case 21:
                  return (
                    (e.next = 23),
                    a.refreshAddressManagerState({
                      keepEditingForm: !1,
                      resetForm: !0,
                    })
                  );
                case 23:
                  a.showToast("地址已删除"), u("pop"), (e.next = 31);
                  break;
                case 27:
                  (e.prev = 27),
                    (e.t1 = e.catch(18)),
                    s.error("Delete address failed", e.t1),
                    a.showToast("删除地址失败");
                case 31:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [
            [6, 13],
            [18, 27],
          ]
        );
      })
    )();
  },
};
