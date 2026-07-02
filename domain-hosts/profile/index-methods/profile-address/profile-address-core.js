var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../../../@babel/runtime/helpers/typeof"),
  i = require("../../../../pages/index/modules/deps/profile-deps"),
  s = i.listAddresses,
  d = (i.logger, require("./profile-address-shared").createEmptyAddressForm);
module.exports = {
  buildAddressFormFromAddress: function (e) {
    var r = e && "object" === t(e) ? e : {};
    return {
      receiverName: String(r.receiverName || ""),
      receiverPhone: String(r.receiverPhone || ""),
      province: String(r.province || ""),
      city: String(r.city || ""),
      district: String(r.district || ""),
      street: String(r.street || ""),
      detail: String(r.detail || ""),
      postalCode: String(r.postalCode || ""),
      tag: String(r.tag || ""),
      isDefault: !!r.isDefault,
    };
  },
  refreshAddressManagerState: function (t) {
    var i = this;
    return r(
      e().mark(function r() {
        var n, a, o, l, c, u, m;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (n = Object.assign(
                    { keepEditingForm: !0, resetForm: !1 },
                    t || {}
                  )),
                  (e.next = 3),
                  s()
                );
              case 3:
                return (
                  (a = e.sent),
                  (o = Array.isArray(a)
                    ? a.filter(function (e) {
                        return e && e.id;
                      })
                    : []),
                  (l = i.data.selectedAddress && i.data.selectedAddress.id),
                  !(c =
                    o.find(function (e) {
                      return e.isDefault;
                    }) || null) &&
                    l &&
                    (c =
                      o.find(function (e) {
                        return e.id === l;
                      }) || null),
                  !c && o.length && (c = o[0]),
                  (u = { addressList: o, selectedAddress: c || null }),
                  n.keepEditingForm &&
                  "edit" === i.data.addressFormMode &&
                  i.data.editingAddressId
                    ? (m =
                        o.find(function (e) {
                          return e.id === i.data.editingAddressId;
                        }) || null)
                      ? (u.addressForm = i.buildAddressFormFromAddress(m))
                      : ((u.addressFormMode = "create"),
                        (u.editingAddressId = ""),
                        (u.addressForm = d(0 === o.length)))
                    : n.resetForm &&
                      ((u.addressFormMode = "create"),
                      (u.editingAddressId = ""),
                      (u.addressForm = d(0 === o.length))),
                  i.setData(u),
                  e.abrupt("return", o)
                );
              case 13:
              case "end":
                return e.stop();
            }
        }, r);
      })
    )();
  },
  validateAddressForm: function () {
    var e = Object.assign(d(!1), this.data.addressForm || {}),
      r = {
        receiverName: String(e.receiverName || "").trim(),
        receiverPhone: String(e.receiverPhone || "").trim(),
        province: String(e.province || "").trim(),
        city: String(e.city || "").trim(),
        district: String(e.district || "").trim(),
        street: String(e.street || "").trim(),
        detail: String(e.detail || "").trim(),
        postalCode: String(e.postalCode || "").trim(),
        tag: String(e.tag || "").trim(),
        isDefault: !!e.isDefault,
      };
    return r.receiverName
      ? r.receiverPhone && /^\d{6,20}$/.test(r.receiverPhone)
        ? r.province && r.city && r.district
          ? r.detail
            ? r
            : (this.showToast("请填写详细地址"), null)
          : (this.showToast("请填写省市区"), null)
        : (this.showToast("请填写合法的联系电话"), null)
      : (this.showToast("请填写收件人"), null);
  },
};
