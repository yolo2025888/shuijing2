var a = require("../@babel/runtime/helpers/typeof"),
  r = require("./catalog"),
  e = r.getKnownBeadType,
  t = r.materialHasRenderableImage,
  i = r.mergeMaterialPreservingImages,
  l = [
    "displayCardImage",
    "display_card_image",
    "cardImage",
    "card_image",
    "cardImageUrl",
    "card_image_url",
    "listImgUrl",
    "list_img_url",
    "listImg",
    "list_img",
    "thumbUrl",
    "thumb_url",
    "thumbnailUrl",
    "thumbnail_url",
  ];
function n(a) {
  return String(a || "").trim();
}
function d(r) {
  return r && "object" === a(r) && !Array.isArray(r) ? r : null;
}
function c(r, l) {
  var c = n(l);
  if (!c) return null;
  var u = (function (r) {
    var e = r && "object" === a(r) ? r : {},
      t =
        e.catalogSnapshot && "object" === a(e.catalogSnapshot)
          ? e.catalogSnapshot
          : {},
      l = []
        .concat(Array.isArray(t.beadTypes) ? t.beadTypes : [])
        .concat(Array.isArray(t.materials) ? t.materials : []),
      c = Object.create(null);
    return (
      l.forEach(function (a) {
        var r = d(a),
          e = n(r && (r.id || r.code || r.materialId || r.material_id));
        e && (c[e] = i(c[e], r));
      }),
      c
    );
  })(r);
  if (t(u[c])) return u[c];
  var s = e(c);
  return t(s) ? s : u[c] || s || null;
}
function u(a) {
  var r = d(a);
  if (!r) return null;
  var e = Object.assign({}, r),
    t = d(e.attrs) ? Object.assign({}, e.attrs) : null;
  return (
    l.forEach(function (a) {
      delete e[a], t && delete t[a];
    }),
    t && (e.attrs = t),
    e
  );
}
module.exports = {
  buildTrayRenderMaterialPayload: function (a, r, e) {
    var t = d(r),
      l = n(e || (t && (t.id || t.code || t.materialId || t.material_id))),
      s = c(a, l),
      o = i(s, t) || t || s;
    if (!o) return null;
    var m = n(
      l ||
        (s && (s.id || s.code || s.materialId || s.material_id)) ||
        o.code ||
        o.materialId ||
        o.material_id ||
        o.id
    );
    return u(Object.assign({}, o, { id: m, code: n(o.code || m) }));
  },
  resolveCanonicalMaterial: c,
  stripCardOnlyImageFields: u,
  stripNonTrayImageFields: u,
};
