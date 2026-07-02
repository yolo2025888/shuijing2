var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../../../pages/index/modules/deps/profile-deps"),
  s = t.logger,
  a = t.playSound,
  d = t.saveWechatAddress,
  n =
    require("../../../../pages/index/modules/methods/trade-address").chooseWechatAddressAndSave,
  i = require("./profile-address-shared").createEmptyAddressForm;
function o(e) {
  e &&
    "function" == typeof e.setData &&
    e.setData({
      addressFormMode: "create",
      showAddressFormModal: !0,
      editingAddressId: "",
      addressForm: i(0 === (e.data.addressList || []).length),
    });
}
function u(e) {
  var r = String((e && e.errMsg) || ""),
    t = String((e && e.message) || ""),
    s = String((e && e.code) || ""),
    a = "".concat(r, " ").concat(t, " ").concat(s);
  return (
    a.indexOf("requiredPrivateInfos") >= 0 ||
    a.indexOf("no permission") >= 0 ||
    a.indexOf("WECHAT_CHOOSE_ADDRESS_NOT_SUPPORTED") >= 0 ||
    a.indexOf("SAVE_WECHAT_ADDRESS_REQUIRED") >= 0 ||
    a.indexOf("WECHAT_ADDRESS_INVALID") >= 0
  );
}
module.exports = {
  handleOpenAddressManager: function () {
    var t = this;
    return r(
      e().mark(function r() {
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (t.handleProfileProtectedAction()) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return");
                case 2:
                  return (
                    t.setData({
                      showAddressManagerModal: !0,
                      addressManagerLoading: !0,
                      showAddressFormModal: !1,
                    }),
                    a("pop"),
                    (e.prev = 4),
                    (e.next = 7),
                    t.refreshAddressManagerState({
                      keepEditingForm: !1,
                      resetForm: !0,
                    })
                  );
                case 7:
                  e.next = 13;
                  break;
                case 9:
                  (e.prev = 9),
                    (e.t0 = e.catch(4)),
                    s.error("Open address manager failed", e.t0),
                    t.showToast("地址数据加载失败");
                case 13:
                  return (
                    (e.prev = 13),
                    t.setData({ addressManagerLoading: !1 }),
                    e.finish(13)
                  );
                case 16:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[4, 9, 13, 16]]
        );
      })
    )();
  },
  handleCloseAddressManager: function () {
    this.setData({
      showAddressManagerModal: !1,
      showAddressFormModal: !1,
      addressManagerLoading: !1,
      addressSubmitting: !1,
      addressFormMode: "create",
      editingAddressId: "",
      addressForm: i(0 === (this.data.addressList || []).length),
    }),
      a("pop");
  },
  handleAddressCreateTap: function () {
    var t = this;
    return r(
      e().mark(function r() {
        var i, c, f, h;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (t.handleProfileProtectedAction()) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return");
                case 2:
                  if (!t.data.addressSubmitting) {
                    e.next = 4;
                    break;
                  }
                  return e.abrupt("return");
                case 4:
                  if (
                    "undefined" != typeof wx &&
                    "function" == typeof wx.chooseAddress &&
                    "function" == typeof d
                  ) {
                    e.next = 8;
                    break;
                  }
                  return o(t), e.abrupt("return");
                case 8:
                  return (
                    t.setData({ addressSubmitting: !0 }),
                    (e.prev = 9),
                    (e.next = 12),
                    n({ wxApi: wx, saveWechatAddress: d })
                  );
                case 12:
                  return (
                    (i = e.sent),
                    (c = String((i && i.id) || "").trim()),
                    (e.next = 16),
                    t.refreshAddressManagerState({
                      keepEditingForm: !1,
                      resetForm: !0,
                    })
                  );
                case 16:
                  (f = e.sent),
                    (h = c
                      ? (f || []).find(function (e) {
                          return String((e && e.id) || "") === c;
                        })
                      : null) && t.setData({ selectedAddress: h }),
                    t.showToast("收货地址已更新"),
                    a("pop"),
                    (e.next = 35);
                  break;
                case 23:
                  if (
                    ((e.prev = 23),
                    (e.t0 = e.catch(9)),
                    !(
                      String((e.t0 && e.t0.errMsg) || "").indexOf("cancel") >= 0
                    ))
                  ) {
                    e.next = 28;
                    break;
                  }
                  return e.abrupt("return");
                case 28:
                  if (!u(e.t0)) {
                    e.next = 32;
                    break;
                  }
                  return (
                    o(t),
                    t.showToast("微信地址簿不可用，请手动填写"),
                    e.abrupt("return")
                  );
                case 32:
                  s.error("Choose wechat address from manager failed", e.t0),
                    o(t),
                    t.showToast("微信地址同步失败，请手动填写");
                case 35:
                  return (
                    (e.prev = 35),
                    t.setData({ addressSubmitting: !1 }),
                    e.finish(35)
                  );
                case 38:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[9, 23, 35, 38]]
        );
      })
    )();
  },
  handleAddressEditTap: function (e) {
    if (this.handleProfileProtectedAction()) {
      var r = String(
        (e &&
          e.currentTarget &&
          e.currentTarget.dataset &&
          e.currentTarget.dataset.id) ||
          ""
      );
      if (r) {
        var t = (this.data.addressList || []).find(function (e) {
          return e.id === r;
        });
        t &&
          this.setData({
            addressFormMode: "edit",
            showAddressFormModal: !0,
            editingAddressId: r,
            addressForm: this.buildAddressFormFromAddress(t),
          });
      }
    }
  },
  handleCloseAddressForm: function () {
    this.data.addressSubmitting ||
      (this.setData({
        showAddressFormModal: !1,
        addressFormMode: "create",
        editingAddressId: "",
        addressForm: i(0 === (this.data.addressList || []).length),
      }),
      a("pop"));
  },
};
