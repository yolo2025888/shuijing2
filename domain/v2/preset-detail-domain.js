var e = require("../../@babel/runtime/helpers/typeof"),
  r = require("../../utils/catalog"),
  t = r.getStructure,
  i = r.resolveAssetPath,
  a = require("../../utils/media-url").resolveRemoteMediaUrl,
  n = require("./preset-author-domain").resolvePresetAuthorPresentation;
function u(e) {
  return Array.isArray(e)
    ? e
        .map(function (e) {
          return String(null == e ? "" : e).trim();
        })
        .filter(Boolean)
    : [];
}
function o(e) {
  var r = Number(e);
  return Number.isFinite(r) ? r.toFixed(1) : "0.0";
}
function s(r) {
  for (
    var t = r && "object" === e(r) ? r : {},
      i = String(
        t.priceText ||
          t.price_text ||
          t.snapshotPriceText ||
          t.snapshot_price_text ||
          t.totalPriceText ||
          t.total_price_text ||
          ""
      ).trim(),
      a = [
        t.price,
        t.price_snapshot,
        t.snapshotPrice,
        t.snapshot_price,
        t.totalPrice,
        t.total_price,
      ],
      n = 0;
    n < a.length;
    n += 1
  ) {
    var u = Number(a[n]);
    if (Number.isFinite(u) && u > 0) {
      var s = Number(u.toFixed(1));
      return { amount: s, text: i || o(s) };
    }
  }
  var m = (function (e) {
    var r = String(null == e ? "" : e).trim();
    if (!r) return null;
    var t = Number(r.replace(/[^\d.-]/g, ""));
    return !Number.isFinite(t) || t <= 0 ? null : Number(t.toFixed(1));
  })(i);
  return null !== m ? { amount: m, text: i || o(m) } : null;
}
function m(e) {
  var r = String(e || "")
    .trim()
    .toLowerCase();
  return (
    !r ||
    0 === r.indexOf("wxfile://") ||
    0 === r.indexOf("blob:") ||
    0 === r.indexOf("data:image") ||
    0 === r.indexOf("http://tmp/") ||
    /^[a-z]:\\/.test(r)
  );
}
function l(r) {
  for (
    var t = r && "object" === e(r) ? r : {},
      n = [
        t.detailPreviewUrl,
        t.detail_preview_url,
        t.fullPreviewUrl,
        t.full_preview_url,
        t.preview_url,
        t.snapshot_url,
        t.previewUrl,
        t.snapshotUrl,
      ],
      u = 0;
    u < n.length;
    u += 1
  ) {
    var o = a(String(i(n[u]) || "").trim());
    if (o && !m(o)) return o;
  }
  return "";
}
function c(r) {
  var t = l(r && "object" === e(r) ? r : {});
  return t && !m(t)
    ? (function (e) {
        for (
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 4,
            t = Array.isArray(e) ? e : [],
            i = [],
            n = new Set(),
            u = 0;
          u < t.length;
          u += 1
        ) {
          var o = a(String(t[u] || "").trim());
          if (o && !n.has(o) && (n.add(o), i.push(o), i.length >= r)) break;
        }
        return i;
      })([t], 1)
    : [];
}
module.exports = {
  PRESET_DETAIL_CACHE_KEY: "stonelab_preset_detail_cache_v4",
  normalizePattern: u,
  buildPresetDetailPayload: function (r, i) {
    var m = r && "object" === e(r) ? r : null;
    if (!m) return null;
    var d = i && "object" === e(i) ? i : {},
      _ = u(m.pattern);
    if (!_.length) return null;
    var p = t(_),
      g = (function (e) {
        if (!Array.isArray(e) || !e.length) return 0;
        var r = e.reduce(function (e, r) {
          var t = Number(r && r.sum);
          if (Number.isFinite(t)) return e + t;
          var i = Number(r && r.price),
            a = Number(r && r.count);
          return Number.isFinite(i) && Number.isFinite(a) ? e + i * a : e;
        }, 0);
        return Number(r.toFixed(1));
      })(p),
      v = s(m),
      h = v ? v.amount : g > 0 ? g : 0,
      b = v && v.text ? v.text : o(h),
      f = String(
        d.sourceDesignerName ||
          m.sourceDesignerName ||
          m.source_designer_name ||
          m.authorName ||
          m.author_name ||
          m.creatorName ||
          m.creator_name ||
          ""
      ).trim(),
      N = String(
        d.sourceDesignerId || m.sourceDesignerId || m.source_designer_id || ""
      ).trim(),
      x = String(
        d.designerId || m.designerId || m.designer_id || N || ""
      ).trim(),
      I = String(
        d.authorName ||
          m.authorName ||
          m.author_name ||
          m.creatorName ||
          m.creator_name ||
          f ||
          ""
      ).trim(),
      A = n(m, I || f),
      S =
        !0 === d.isCustomerPreset ||
        !0 === d.is_customer_preset ||
        !0 === A.isCustomerPreset,
      y = !S && !1 !== d.usesDesignerIdentity,
      P =
        String(
          d.displayAuthorName ||
            d.display_author_name ||
            A.displayAuthorName ||
            I ||
            f ||
            ""
        ).trim() || "匿名作者",
      w = String(
        d.authorAvatar ||
          m.authorAvatar ||
          m.author_avatar ||
          d.sourceDesignerAvatar ||
          m.sourceDesignerAvatar ||
          m.source_designer_avatar ||
          m.avatar ||
          m.creatorAvatar ||
          m.creator_avatar ||
          ""
      ).trim(),
      D = String(
        d.creatorWorkId ||
          d.sourceCreatorWorkId ||
          m.creatorWorkId ||
          m.creator_work_id ||
          ""
      ).trim(),
      T = String(
        d.inspirationTemplateId ||
          d.sourceInspirationTemplateId ||
          m.inspirationTemplateId ||
          m.inspiration_template_id ||
          m.templateId ||
          m.template_id ||
          m.id ||
          ""
      ).trim(),
      F = a(w),
      k = c(m),
      j = String(k[0] || l(m) || "").trim(),
      C = (function (r) {
        var t = r && "object" === e(r) ? r : {},
          i = Number(void 0 !== t.beadMm ? t.beadMm : t.bead_mm);
        return Number.isFinite(i) && i > 0 ? Math.max(4, Math.min(20, i)) : 11;
      })(m);
    return {
      detail: Object.assign({}, m, {
        pattern: _,
        detailType: "preset",
        sourceDesignerName: f,
        sourceDesignerId: N,
        designerId: x,
        isCustomerPreset: S,
        is_customer_preset: S,
        usesDesignerIdentity: y,
        uses_designer_identity: y,
        displayAuthorName: P,
        display_author_name: P,
        creatorWorkId: D,
        creator_work_id: D,
        sourceCreatorWorkId: D,
        source_creator_work_id: D,
        sourceInspirationTemplateId: T,
        source_inspiration_template_id: T,
        authorName: S ? P : I,
        authorAvatar: F,
        sourceDesignerAvatar: F,
        source_designer_avatar: F,
        images: k,
        beadMm: C,
        bead_mm: C,
        detailPreviewUrl: j,
        detail_preview_url: j,
        previewUrl: j,
        price: h,
        priceText: b,
      }),
      structure: p.map(function (e) {
        return Object.assign({}, e, {
          priceText: o(e.price),
          sumText: o(e.sum),
        });
      }),
    };
  },
};
