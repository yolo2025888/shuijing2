var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../../../@babel/runtime/helpers/defineProperty"),
  a = require("../../../../pages/index/modules/deps/profile-deps"),
  s = a.createAddress,
  d = a.updateAddress,
  i = a.logger,
  n = a.playSound,
  u = require("./profile-address-shared").createEmptyAddressForm;
module.exports = {
  handleAddressFieldInput: function (e) {
    var r = (e && e.currentTarget && e.currentTarget.dataset) || {},
      a = String(r.field || "");
    if (a) {
      if (
        {
          receiverName: !0,
          receiverPhone: !0,
          province: !0,
          city: !0,
          district: !0,
          street: !0,
          detail: !0,
          postalCode: !0,
          tag: !0,
        }[a]
      ) {
        var s = e && e.detail ? e.detail.value : "";
        this.setData(t({}, "addressForm.".concat(a), String(s || "")));
      }
    }
  },
  handleAddressDefaultToggle: function (e) {
    var r = !!(e && e.detail && e.detail.value);
    this.setData({ "addressForm.isDefault": r });
  },
  handleAddressSubmit: function () {
    var t = this;
    return r(
      e().mark(function r() {
        var a, o, l, c;
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
                  if ((a = t.validateAddressForm())) {
                    e.next = 7;
                    break;
                  }
                  return e.abrupt("return");
                case 7:
                  if (
                    ((o =
                      "edit" === t.data.addressFormMode &&
                      !!t.data.editingAddressId),
                    t.setData({ addressSubmitting: !0 }),
                    (e.prev = 9),
                    !o)
                  ) {
                    e.next = 16;
                    break;
                  }
                  return (e.next = 13), d(t.data.editingAddressId, a);
                case 13:
                  (e.t0 = e.sent), (e.next = 19);
                  break;
                case 16:
                  return (e.next = 18), s(a);
                case 18:
                  e.t0 = e.sent;
                case 19:
                  return (
                    (l = e.t0),
                    (e.next = 22),
                    t.refreshAddressManagerState({
                      keepEditingForm: !1,
                      resetForm: !1,
                    })
                  );
                case 22:
                  (c =
                    (t.data.addressList || []).find(function (e) {
                      return e.id === (l && l.id);
                    }) ||
                    (t.data.addressList || []).find(function (e) {
                      return e.isDefault;
                    }) ||
                    (t.data.addressList || [])[0] ||
                    null),
                    t.setData({
                      showAddressFormModal: !1,
                      addressFormMode: c ? "edit" : "create",
                      editingAddressId: c ? c.id : "",
                      addressForm: c
                        ? t.buildAddressFormFromAddress(c)
                        : u(0 === (t.data.addressList || []).length),
                    }),
                    t.showToast(o ? "地址已更新" : "地址已新增"),
                    n("pop"),
                    (e.next = 32);
                  break;
                case 28:
                  (e.prev = 28),
                    (e.t1 = e.catch(9)),
                    i.error("Save address failed", e.t1),
                    t.showToast("地址保存失败");
                case 32:
                  return (
                    (e.prev = 32),
                    t.setData({ addressSubmitting: !1 }),
                    e.finish(32)
                  );
                case 35:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[9, 28, 32, 35]]
        );
      })
    )();
  },
};
