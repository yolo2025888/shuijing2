var e = require("../../../../@babel/runtime/helpers/typeof"),
  r = require("../../../../utils/diyEntrySession"),
  t = r.buildDiyEntrySessionId,
  n = r.saveDiyEntrySession,
  i = require("../../../../utils/diyRenderPlan").normalizeRenderPlan,
  a =
    require("../../../../contracts/navigation/query-contract").appendQueryParams,
  s =
    require("../../../../utils/navigation/navigate-with-fallback").openDiyEntry;
function o(e, r) {
  var t = (e && e.currentTarget && e.currentTarget.dataset) || {};
  return String(t[r] || "").trim();
}
function u(r) {
  var s = r && "object" === e(r) ? r : {},
    o = (function (e) {
      return Array.isArray(e)
        ? e
            .map(function (e) {
              return String(null == e ? "" : e).trim();
            })
            .filter(function (e) {
              return /^[A-Za-z0-9_-]{1,64}$/.test(e);
            })
        : [];
    })(s.pattern);
  if (!o.length) return "";
  var u = t("order_reuse"),
    d = (function (r) {
      var t = r && "object" === e(r) ? r : {};
      return Array.isArray(t)
        ? t.reduce(function (r, t) {
            var n = t && "object" === e(t) ? t : null;
            if (!n) return r;
            var i = String(
              n.id || n.materialId || n.material_id || n.code || ""
            ).trim();
            return !i || r[i] || (r[i] = Object.assign({}, n, { id: i })), r;
          }, {})
        : Object.keys(t).reduce(function (r, n) {
            var i = t[n] && "object" === e(t[n]) ? t[n] : null,
              a = String(
                (i && (i.id || i.materialId || i.material_id || i.code)) ||
                  n ||
                  ""
              ).trim();
            return a && i && !r[a]
              ? ((r[a] = Object.assign({}, i, { id: a })), r)
              : r;
          }, {});
    })(s.materialMap || s.materialSnapshot),
    c = i(s.renderPlan || s.render_plan, o),
    l = n({
      entryId: u,
      source: "order_reuse",
      schemeId: "",
      pattern: o,
      materialMap: d,
      materialSnapshot: d,
      renderPlan: c,
      bgIndex: Number.isFinite(Number(s.bgIndex)) ? Number(s.bgIndex) : 0,
      beadMm: s.beadMm || s.bead_mm,
      name: String(s.name || "").trim(),
      sourceDesignerId: s.sourceDesignerId || s.source_designer_id,
      sourceEntry: "order_reuse",
    });
  return l && l.entryId
    ? a("/pages/diy/index", {
        source: "order_reuse",
        returnTab: "profile",
        entryId: l.entryId,
      })
    : "";
}
module.exports = {
  handleOrderManagerReuseScheme: function (e) {
    var r = this;
    if (!this._orderReuseSchemePending) {
      var t = (function (e, r) {
        var t = e && e.data ? e.data.orderManagerDetail : null,
          n = Array.isArray(t && t.items) ? t.items : [],
          i = o(r, "id"),
          a = o(r, "index");
        if (i) {
          var s = n.find(function (e) {
            return String((e && e.id) || "") === i;
          });
          if (s) return s;
        }
        var u = Number(a);
        return Number.isInteger(u) && u >= 0 && u < n.length ? n[u] : null;
      })(this, e);
      if (t && Array.isArray(t.pattern) && t.pattern.length) {
        var n = u(t);
        if (n) {
          (this._orderReuseSchemePending = !0),
            "function" == typeof this.setData &&
              this.setData({ orderManagerReusingScheme: !0 });
          var i = function () {
            (r._orderReuseSchemePending = !1),
              "function" == typeof r.setData &&
                r.setData({ orderManagerReusingScheme: !1 });
          };
          s(n, "order_reuse", "profile", {
            methods: ["navigateTo", "redirectTo", "reLaunch"],
            fallbackMethods: ["navigateTo", "redirectTo", "reLaunch"],
            onFailed: function () {
              i(),
                "function" == typeof r.showToast &&
                  r.showToast("进入 DIY 失败，请重试");
            },
          }) || i();
        } else
          "function" == typeof this.showToast &&
            this.showToast("方案数据不完整，请联系客服");
      } else
        "function" == typeof this.showToast &&
          this.showToast("该订单方案暂时无法复用");
    }
  },
};
