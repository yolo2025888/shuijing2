var e = require("../../../../@babel/runtime/helpers/typeof"),
  t = require("../../../../utils/catalog").getBeadType,
  r = require("../../../../utils/diyRenderPlan").normalizeRenderPlan;
function n(e) {
  var t = e.getFullYear(),
    r = "".concat(e.getMonth() + 1).padStart(2, "0"),
    n = "".concat(e.getDate()).padStart(2, "0");
  return "".concat(t, "-").concat(r, "-").concat(n);
}
function i(e) {
  return Number(e || 0).toFixed(1);
}
function a(e) {
  return Math.round(10 * Number(e || 0)) / 10;
}
function m(e) {
  if (null == e || "" === e) return null;
  var t = Number(e);
  return Number.isFinite(t) ? a(Math.max(14, Math.min(21, t))) : null;
}
function o(e) {
  return Array.isArray(e)
    ? e
        .map(function (e) {
          return null == e ? "" : String(e).trim();
        })
        .filter(Boolean)
    : [];
}
function u(t) {
  var n = Object.assign({}, t),
    a = o(n.pattern),
    m = r(n.renderPlan || n.render_plan, a),
    u = Number.isFinite(Number(n.bgIndex)) ? Number(n.bgIndex) : 0,
    c = {};
  n.selectedOptions &&
    "object" === e(n.selectedOptions) &&
    !Array.isArray(n.selectedOptions) &&
    ["packaging", "certificate"].forEach(function (e) {
      var t = String(n.selectedOptions[e] || "").trim();
      /^[A-Za-z0-9_-]{1,64}$/.test(t) && (c[e] = t);
    });
  var s =
      n.selectedOptionSummary &&
      "object" === e(n.selectedOptionSummary) &&
      !Array.isArray(n.selectedOptionSummary)
        ? n.selectedOptionSummary
        : {},
    l = Array.isArray(s.items)
      ? s.items
          .map(function (e) {
            var t = String((e && e.groupCode) || "").trim(),
              r = String((e && e.optionCode) || "").trim();
            if (!t || !r) return null;
            var n = Number((e && e.amount) || 0);
            return {
              groupCode: t,
              groupTitle: String((e && e.groupTitle) || ""),
              optionCode: r,
              title: String((e && e.title) || ""),
              subtitle: String((e && e.subtitle) || ""),
              amount: n,
              amountText: String((e && e.amountText) || i(n)),
              isFree: n <= 0 || (e && !0 === e.isFree),
            };
          })
          .filter(Boolean)
      : [],
    g = Number.isFinite(Number(s.amount))
      ? Number(s.amount)
      : l.reduce(function (e, t) {
          return e + Number(t.amount || 0);
        }, 0),
    f = Number(n.price || 0) + g,
    p = d(a),
    b = Number(p.effectiveMm || 0),
    x = b > 0 ? b : Number(n.perim || 0),
    N = p.hasRange ? p.rangeText : "--";
  return Object.assign({}, n, {
    pattern: a,
    renderPlan: m,
    perim: x,
    bgIndex: u,
    selectedOptions: c,
    selectedOptionSummary: Object.assign({}, s, {
      items: l,
      amount: g,
      amountText: i(g),
    }),
    itemOptionAmount: g,
    itemOptionAmountText: i(g),
    displayPrice: f,
    displayPriceText: i(f),
    displayName: n.name || "我的专属设计",
    priceText: i(n.price),
    effectivePerim: x,
    effectivePerimCmText: i(x / 10),
    perimCmText: i(x / 10),
    wristRangeText: N,
    wristRangeTextCompact: p.hasRange ? p.rangeTextCompact : "--",
  });
}
function c(e) {
  var t = Object.assign({}, e),
    i = o(t.pattern),
    a = r(t.renderPlan || t.render_plan, i),
    m = d(i),
    u = Number(m.effectiveMm || 0),
    c = u > 0 ? u : Number(t.perim || 0),
    s = t.id || t.schemeId || "s_".concat(Date.now()),
    l = t.clientId || t.client_id || s;
  return Object.assign({}, t, {
    id: s,
    clientId: l,
    name: t.name || "我的专属设计",
    date: t.date || n(new Date()),
    pattern: i,
    renderPlan: a,
    perim: c,
    price: Number(t.price) || 0,
    mode: t.mode || "bracelet",
    bgIndex: Number.isFinite(Number(t.bgIndex)) ? Number(t.bgIndex) : 0,
  });
}
function s(e) {
  return !(!e || !e.isPendant);
}
function l(e) {
  return !e || s(e) ? 0 : Number(e.mm || 0) * Number(e.gapRatio || 0.97);
}
function d(e) {
  var r = o(e)
      .map(function (e) {
        return t(e);
      })
      .filter(Boolean)
      .filter(function (e) {
        return !s(e);
      }),
    n = r.length,
    i = r.reduce(function (e, t) {
      return e + l(t);
    }, 0),
    m = n > 0 ? i / n : 0,
    u = n > 0 ? i - Math.PI * m : 0,
    c = n > 0 ? Math.max(0, u - 12) : 0,
    d = n > 0 ? Math.max(0, u - 5) : 0,
    g = a(c / 10),
    f = a(d / 10),
    p = n > 0 && d > 0;
  return {
    regularCount: n,
    effectiveMm: i,
    averageDiameterMm: m,
    baseWristMm: u,
    minWristMm: c,
    maxWristMm: d,
    minWristCm: g,
    maxWristCm: f,
    hasRange: p,
    rangeText: p
      ? "".concat(g.toFixed(1), " ~ ").concat(f.toFixed(1), " cm")
      : "--",
    rangeTextCompact: p
      ? "".concat(g.toFixed(1), "~").concat(f.toFixed(1), "cm")
      : "--",
  };
}
module.exports = {
  formatDate: n,
  formatMonthDay: function (e) {
    return "".concat(e.getMonth() + 1, "月").concat(e.getDate(), "日");
  },
  formatDecimal: i,
  normalizePattern: o,
  normalizeBgIndex: function (e, t) {
    if (!t) return 0;
    var r = Number(e);
    return Number.isFinite(r) ? ((Math.round(r) % t) + t) % t : 0;
  },
  enrichTrayState: function (e) {
    var t = Object.assign(
        {
          beadsCount: 0,
          totalPrice: 0,
          totalPerimeter: 0,
          isStrung: !1,
          pattern: [],
        },
        e || {}
      ),
      r = Number.isFinite(Number(t.maxPerimeterMm))
        ? Number(t.maxPerimeterMm)
        : 300;
    return Object.assign({}, t, {
      maxPerimeterMm: r,
      isOverMaxPerimeter:
        !0 === t.isOverMaxPerimeter || Number(t.totalPerimeter || 0) > r,
      totalPriceText: i(t.totalPrice),
      totalPerimeterCmText: i(t.totalPerimeter / 10),
    });
  },
  normalizeCartItem: u,
  normalizeCartItems: function (t) {
    return (t || [])
      .filter(function (t) {
        return t && "object" === e(t);
      })
      .map(u);
  },
  normalizeSchemeItem: c,
  normalizeSchemeItems: function (t) {
    return (t || [])
      .filter(function (t) {
        return t && "object" === e(t);
      })
      .map(c)
      .filter(function (e) {
        return e.pattern.length > 0;
      });
  },
  WRIST_MODAL_MIN: 14,
  WRIST_MODAL_MAX: 21,
  WRIST_MODAL_DEFAULT: 17,
  normalizeWristValue: m,
  getBraceletGeometry: d,
  checkWristCompatibility: function (e, r) {
    var n = m(r);
    if (!o(e).length || null === n)
      return {
        status: "idle",
        msg: "设置手围后可查看佩戴贴合度",
        tone: "muted",
      };
    var i = o(e)
      .map(function (e) {
        return t(e);
      })
      .filter(Boolean)
      .filter(function (e) {
        return !s(e);
      });
    if (!i.length)
      return { status: "idle", msg: "暂无可用于手围测算的珠子", tone: "muted" };
    var a = 10 * n,
      u = i.reduce(function (e, t) {
        return e + l(t);
      }, 0),
      c = u / i.length,
      d = u - Math.PI * c - a;
    return d < -2
      ? { status: "too_tight", msg: "偏紧，建议增加珠子", tone: "danger" }
      : d <= 12
      ? { status: "perfect", msg: "贴合度良好", tone: "ok" }
      : d <= 22
      ? { status: "loose", msg: "略松，佩戴舒适", tone: "ok" }
      : { status: "too_loose", msg: "偏松，建议减少珠子", tone: "warn" };
  },
};
