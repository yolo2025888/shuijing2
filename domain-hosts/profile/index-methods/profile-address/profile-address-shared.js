module.exports = {
  createEmptyAddressForm: function (e) {
    return {
      receiverName: "",
      receiverPhone: "",
      province: "",
      city: "",
      district: "",
      street: "",
      detail: "",
      postalCode: "",
      tag: "",
      isDefault: !!e,
    };
  },
};
