var r = require("../@babel/runtime/helpers/typeof"),
  t = /^[A-Za-z0-9_-]{1,96}$/;
function n(r) {
  return String(null == r ? "" : r).trim();
}
function a(r) {
  return Array.isArray(r)
    ? r
        .map(function (r) {
          return n(r);
        })
        .filter(function (r) {
          return t.test(r);
        })
    : [];
}
function e(a, e, i) {
  var u = a && "object" === r(a) && !Array.isArray(a) ? a : {},
    l = Array.isArray(i) ? n(i[e]) : "",
    d = n(
      u.beadId ||
        u.bead_id ||
        u.materialId ||
        u.material_id ||
        u.mat ||
        u.id ||
        l
    );
  if (!t.test(d)) return null;
  var m = n(u.imgUrl || u.img_url || u.targetImgUrl || u.target_img_url);
  if (!m) return null;
  var o,
    f,
    v =
      ((o = void 0 !== u.variantIdx ? u.variantIdx : u.variant_idx),
      (f = Number(o)),
      Number.isFinite(f) && f >= 0 ? Math.round(f) : null),
    g = { beadId: d, materialId: d, imgUrl: m, img_url: m };
  return null !== v && ((g.variantIdx = v), (g.variant_idx = v)), g;
}
function i(r, t) {
  var n = Array.isArray(r) ? r : [];
  if (!n.length) return [];
  var i = a(t);
  return n
    .map(function (r, t) {
      return e(r, t, i);
    })
    .filter(Boolean);
}
module.exports = {
  normalizeRenderPlan: i,
  getRenderPlanItemForPattern: function (r, t, e) {
    var u = a(t),
      l = i(r, u)[e] || null,
      d = n(u[e]);
    return l && d && l.beadId === d ? l : null;
  },
};
