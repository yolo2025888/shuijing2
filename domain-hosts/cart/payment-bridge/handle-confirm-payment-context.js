module.exports = {
  resolveCheckoutContext: function (e, t, r) {
    var s = t(
      (e.cartItems || []).filter(function (e) {
        return e.checked;
      })
    );
    if (!s.length) return r("请先选择要结算的设计方案"), null;
    var c = e.selectedAddress;
    return c && c.id
      ? { checkedItems: s, selectedAddress: c }
      : (r("请先选择收货地址"), null);
  },
};
