var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../@babel/runtime/helpers/typeof"),
  a = require("../services/api/index"),
  n = a.request,
  i = a.API_ENDPOINTS,
  s = require("./shared/normalize"),
  o = s.normalizeStringArray,
  p = s.toFiniteNumber,
  c = require("../utils/cartPatternMaterialCodes").repairPatternMaterialCodes,
  l = require("../utils/diyRenderPlan").normalizeRenderPlan;
function u(e) {
  if (!e || "object" !== t(e)) return null;
  var r = String(e.snapshotUrl || e.snapshot_url || "").trim(),
    a = String(e.previewUrl || e.preview_url || r).trim(),
    n = String(e.orderSnapshotUrl || e.order_snapshot_url || "").trim(),
    i =
      e.materialMap &&
      "object" === t(e.materialMap) &&
      !Array.isArray(e.materialMap)
        ? e.materialMap
        : null,
    s =
      e.materialSnapshot &&
      "object" === t(e.materialSnapshot) &&
      !Array.isArray(e.materialSnapshot)
        ? e.materialSnapshot
        : i,
    u =
      e.materialSnapshot && "object" === t(e.materialSnapshot)
        ? e.materialSnapshot
        : i,
    m = c(e.pattern, u),
    d = o(m),
    _ = l(e.renderPlan || e.render_plan, d),
    h = {
      id: e.id || "cart_".concat(Date.now()),
      name: e.name || "我的专属设计",
      pattern: d,
      perim: p(e.perim, 0),
      price: p(e.price, 0),
      bgIndex: p(e.bgIndex, 0),
      mode: e.mode || "bracelet",
      checked: !1 !== e.checked,
      timestamp: p(e.timestamp, Date.now()),
      source_designer_id: e.source_designer_id || null,
    },
    y = String(e.source_creator_work_id || e.sourceCreatorWorkId || "").trim();
  /^[0-9]+$/.test(y) && (h.source_creator_work_id = y);
  var S = String(
    e.source_inspiration_template_id || e.sourceInspirationTemplateId || ""
  ).trim();
  /^[0-9]+$/.test(S) && (h.source_inspiration_template_id = S);
  var g = String(e.source_entry || e.sourceEntry || "").trim();
  if (
    (/^[A-Za-z0-9_-]{1,64}$/.test(g) && (h.source_entry = g),
    a && (h.previewUrl = a),
    (r || a) && (h.snapshotUrl = r || a),
    n && (h.orderSnapshotUrl = n),
    i && (h.materialMap = i),
    s && (h.materialSnapshot = s),
    _.length && ((h.renderPlan = _), (h.render_plan = _)),
    e.selectedOptions &&
      "object" === t(e.selectedOptions) &&
      !Array.isArray(e.selectedOptions))
  ) {
    var b = {};
    ["packaging", "certificate"].forEach(function (r) {
      var t = String(e.selectedOptions[r] || "").trim();
      /^[A-Za-z0-9_-]{1,64}$/.test(t) && (b[r] = t);
    }),
      Object.keys(b).length && (h.selectedOptions = b);
  }
  return (
    e.selectedOptionSummary &&
      "object" === t(e.selectedOptionSummary) &&
      !Array.isArray(e.selectedOptionSummary) &&
      (h.selectedOptionSummary = e.selectedOptionSummary),
    h
  );
}
function m(e) {
  return (e || []).map(u).filter(function (e) {
    return e && e.pattern.length > 0;
  });
}
function d() {
  return (d = r(
    e().mark(function r() {
      var t;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (e.next = 2), n({ url: i.cartItems, method: "GET" });
            case 2:
              return (
                (t = e.sent),
                e.abrupt("return", m(t && Array.isArray(t.list) ? t.list : []))
              );
            case 4:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function _() {
  return (_ = r(
    e().mark(function r(t) {
      var a, s, o;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (a = m(t)),
                (s = a.map(function (e) {
                  return {
                    id: e.id,
                    name: e.name,
                    pattern: e.pattern,
                    perim: e.perim,
                    price: e.price,
                    bgIndex: e.bgIndex,
                    mode: e.mode,
                    checked: e.checked,
                    timestamp: e.timestamp,
                    previewUrl: e.previewUrl,
                    snapshotUrl: e.snapshotUrl,
                    materialSnapshot: e.materialSnapshot || e.materialMap,
                    renderPlan: e.renderPlan,
                    selectedOptions: e.selectedOptions,
                    selectedOptionSummary: e.selectedOptionSummary,
                    source_designer_id: e.source_designer_id
                      ? String(e.source_designer_id)
                      : void 0,
                    source_creator_work_id: e.source_creator_work_id
                      ? String(e.source_creator_work_id)
                      : void 0,
                    source_inspiration_template_id:
                      e.source_inspiration_template_id
                        ? String(e.source_inspiration_template_id)
                        : void 0,
                    source_entry: e.source_entry
                      ? String(e.source_entry)
                      : void 0,
                  };
                })),
                (e.next = 4),
                n({ url: i.cartItemsSync, method: "POST", data: { items: s } })
              );
            case 4:
              return (
                (o = e.sent),
                e.abrupt("return", m(o && Array.isArray(o.list) ? o.list : a))
              );
            case 6:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
module.exports = {
  loadCartItems: function () {
    return d.apply(this, arguments);
  },
  saveCartItems: function (e) {
    return _.apply(this, arguments);
  },
};
