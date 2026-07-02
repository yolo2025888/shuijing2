var t = require("../../../../../@babel/runtime/helpers/typeof");
function e(t) {
  return (Array.isArray(t && t.optionGroups) ? t.optionGroups : [])
    .filter(function (t) {
      var e = String((t && t.groupCode) || "").trim();
      return "packaging" === e || "certificate" === e;
    })
    .map(function (t) {
      var e = String((t && t.groupCode) || "").trim(),
        o = String((t && t.selectedOptionCode) || "").trim(),
        n = Array.isArray(t && t.options) ? t.options : [];
      return {
        groupCode: e,
        title: String((t && t.title) || ""),
        selectedOptionCode: o,
        options: n.map(function (t) {
          var e = Number((t && t.amount) || 0),
            n = String((t && t.optionCode) || "").trim();
          return {
            optionCode: n,
            title: String((t && t.title) || ""),
            subtitle: String((t && t.subtitle) || ""),
            amount: e,
            amountText: String(
              (t && t.amountText) || Number(e || 0).toFixed(1)
            ),
            isFree: e <= 0 || (t && !0 === t.isFree),
            selected: n === o || (t && !0 === t.selected),
          };
        }),
      };
    })
    .filter(function (t) {
      return t.groupCode && t.options.length;
    });
}
function o(t) {
  var e = {};
  return (
    (t || []).forEach(function (t) {
      var o =
        (t.options || []).find(function (t) {
          return t.selected;
        }) || (t.options || [])[0];
      o && (e[t.groupCode] = o.optionCode);
    }),
    e
  );
}
function n(t) {
  return (t || [])
    .map(function (t) {
      var e =
        (t.options || []).find(function (t) {
          return t.selected;
        }) || (t.options || [])[0];
      if (!e) return null;
      var o = Number(e.amount || 0);
      return {
        groupCode: t.groupCode,
        groupTitle: t.title,
        optionCode: e.optionCode,
        title: e.title,
        subtitle: e.subtitle,
        amount: o,
        amountText: String(e.amountText || Number(o || 0).toFixed(1)),
        isFree: o <= 0 || !0 === e.isFree,
      };
    })
    .filter(Boolean);
}
function r(t) {
  return n(t).reduce(function (t, e) {
    return t + Number((e && e.amount) || 0);
  }, 0);
}
function i(t) {
  var e = n(t),
    o = e.reduce(function (t, e) {
      return t + Number(e.amount || 0);
    }, 0);
  return {
    items: e,
    amount: o,
    amountText: Number(o || 0).toFixed(1),
    text: e
      .map(function (t) {
        return "".concat(t.groupTitle || t.groupCode, "：").concat(t.title);
      })
      .join(" ｜ "),
  };
}
module.exports = {
  normalizeCheckoutOptionGroups: e,
  applySelectedItemOptions: function (o, n) {
    var r = n && "object" === t(n) && !Array.isArray(n) ? n : {};
    return e({ optionGroups: o }).map(function (t) {
      var e =
        String(r[t.groupCode] || t.selectedOptionCode || "").trim() ||
        String((t.options[0] && t.options[0].optionCode) || "").trim();
      return Object.assign({}, t, {
        selectedOptionCode: e,
        options: t.options.map(function (t) {
          return Object.assign({}, t, { selected: t.optionCode === e });
        }),
      });
    });
  },
  extractSelectedItemOptions: o,
  buildSelectedItemOptionSummary: i,
  computeSelectedItemOptionAmount: r,
  applyItemOptionPricing: function (t, e) {
    var n = Number((t && t.price) || 0),
      u = r(e),
      p = n + u;
    return Object.assign({}, t, {
      itemOptionGroups: e,
      selectedItemOptions: o(e),
      selectedOptionSummary: i(e),
      itemOptionAmount: u,
      itemOptionAmountText: Number(u || 0).toFixed(1),
      payableAmount: p,
      payableText: Number(p || 0).toFixed(1),
    });
  },
};
