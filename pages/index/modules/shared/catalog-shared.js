var e = require("../../../../@babel/runtime/helpers/typeof"),
  r = require("../../../../utils/catalog"),
  t = r.TRAY_BGS,
  a = r.BEAD_TYPES,
  o = r.MAIN_CATEGORIES,
  i = r.SUB_CATEGORIES,
  n = r.PRESETS,
  s = r.resolveAssetPath,
  u = r.getStructure,
  c = r.checkCopyright,
  l = r.applyRuntimeCatalogSnapshot,
  g = require("../../../../domain-hosts/shared/preset-preview-cache"),
  m = g.resolvePresetPreviewSnapshot,
  d = g.rememberPresetPreviewSnapshotBatch,
  h = g.resolvePresetPriceText,
  _ = g.resolvePresetDisplayPrice,
  p = require("../../../../utils/media-url").resolveRemoteMediaUrl,
  v = Object.freeze({
    linxi: Object.freeze({
      id: "linxi",
      name: "Lin.A",
      avatar:
        "https://images.unsplash.com/photo-1636671035570-f8dfb80d568d?w=150&h=150&fit=facearea&facepad=2",
    }),
    miayi: Object.freeze({
      id: "miayi",
      name: "CraftStudio",
      avatar:
        "https://images.unsplash.com/photo-1772442126046-29faff1ad234?w=150&h=150&fit=facearea&facepad=2",
    }),
    designer: Object.freeze({
      id: "designer",
      name: "Mia.Wu",
      avatar:
        "https://images.unsplash.com/photo-1633058851349-55a9a188e338?w=150&h=150&fit=facearea&facepad=2",
    }),
  });
Object.freeze(Object.keys(v));
function f(e) {
  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
    t = String(null == e ? "" : e).trim();
  return t || String(null == r ? "" : r).trim();
}
function S(r) {
  var t = r && "object" === e(r) ? r : {},
    a = f(
      t.designerId ||
        t.designer_id ||
        t.sourceDesignerId ||
        t.source_designer_id ||
        t.authorId ||
        t.author_id,
      ""
    ).toLowerCase();
  return a || "designer";
}
function b(e) {
  var r = f(e, "").toLowerCase();
  if (r && v[r]) return v[r];
  var t = v.designer;
  return { id: r || t.id, name: t.name, avatar: t.avatar };
}
function A(r) {
  if (!r || "object" !== e(r)) return "";
  var t =
      (r.preview && (r.preview.url || r.preview.src)) ||
      (r.cover && r.cover.url) ||
      (r.snapshot && (r.snapshot.url || r.snapshot.src)) ||
      "",
    a =
      r.previewUrl ||
      r.preview_url ||
      r.coverUrl ||
      r.cover_url ||
      r.cover ||
      r.imageUrl ||
      r.image_url ||
      r.image ||
      r.poster ||
      r.posterUrl ||
      r.snapshotUrl ||
      r.snapshot_url ||
      r.fullImage ||
      r.full_image ||
      t ||
      "";
  return "string" == typeof a && a
    ? a
    : Array.isArray(r.images) && r.images[0]
    ? r.images[0]
    : "";
}
module.exports = {
  TRAY_BGS: t,
  BEAD_TYPES: a,
  MAIN_CATEGORIES: o,
  SUB_CATEGORIES: i,
  PRESETS: n,
  resolveAssetPath: s,
  getStructure: u,
  checkCopyright: c,
  applyRuntimeCatalogSnapshot: l,
  getTrayStatePattern: function (e) {
    return (function (e) {
      return Array.isArray(e)
        ? e
            .map(function (e) {
              return null == e ? "" : String(e).trim();
            })
            .filter(Boolean)
        : [];
    })(e);
  },
  buildPresets: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
    return (
      d(e),
      (e || []).map(function (e) {
        var t = String(e && e.id ? e.id : ""),
          a = t.charCodeAt(t.length - 1) || 0,
          o = Number(e && (void 0 !== e.bgIndex ? e.bgIndex : e.bg_index)),
          i = Number.isFinite(o)
            ? Math.max(0, Math.round(o))
            : a % Math.max(1, (r || []).length),
          n =
            m(e, { allowPatternFallback: !1, disableCacheFallback: !0 }) ||
            A(e),
          u = S(e),
          c = b(u),
          l = String(
            (e &&
              (e.authorName ||
                e.author_name ||
                e.creatorName ||
                e.creator_name ||
                e.sourceDesignerName ||
                e.source_designer_name)) ||
              c.name ||
              "StoneLab."
          ).trim(),
          g =
            p(
              String(
                (e &&
                  (e.authorAvatar ||
                    e.author_avatar ||
                    e.sourceDesignerAvatar ||
                    e.source_designer_avatar ||
                    e.avatar ||
                    e.creatorAvatar ||
                    e.creator_avatar)) ||
                  c.avatar ||
                  ""
              ).trim()
            ) || c.avatar,
          d = Number(
            e &&
              (e.quoteCount || e.quote_count || e.sourceDesignerQuoteCount || 0)
          ),
          v = Number.isFinite(d) && d > 0 ? Math.floor(d) : 0,
          f = h(e),
          I = _(e);
        return Object.assign({}, e, {
          bgIndex: i,
          previewUrl: n ? s(n) : "",
          designerId: u,
          sourceDesignerId: String(
            (e && (e.sourceDesignerId || e.source_designer_id)) || u
          ).trim(),
          creatorWorkId: String(
            (e && (e.creatorWorkId || e.creator_work_id)) || ""
          ).trim(),
          creator_work_id: String(
            (e && (e.creatorWorkId || e.creator_work_id)) || ""
          ).trim(),
          sourceDesignerName: String(
            (e && (e.sourceDesignerName || e.source_designer_name)) || l
          ).trim(),
          quoteCount: v,
          sourceDesignerPublishedWorksCount:
            Number(
              (e &&
                (e.sourceDesignerPublishedWorksCount ||
                  e.source_designer_published_works_count)) ||
                0
            ) || 0,
          sourceDesignerTotalQuoteCount:
            Number(
              (e &&
                (e.sourceDesignerTotalQuoteCount ||
                  e.source_designer_total_quote_count)) ||
                0
            ) || 0,
          sourceDesignerTotalIncomeAmountCent:
            Number(
              (e &&
                (e.sourceDesignerTotalIncomeAmountCent ||
                  e.source_designer_total_income_amount_cent)) ||
                0
            ) || 0,
          sourceDesignerTotalIncomeText: String(
            (e &&
              (e.sourceDesignerTotalIncomeText ||
                e.source_designer_total_income_text)) ||
              ""
          ).trim(),
          authorName: l,
          authorAvatar: g,
          priceText: f,
          displayPriceText: I,
        });
      })
    );
  },
  pickPresetPreviewUrl: A,
};
