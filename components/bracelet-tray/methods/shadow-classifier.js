var e = require("../../../@babel/runtime/helpers/typeof");
function r(e, r) {
  var a = String(e || "").toLowerCase();
  return (
    !!a &&
    r.some(function (e) {
      return a.indexOf(e) >= 0;
    })
  );
}
function a(r) {
  return r && r.attrs && "object" === e(r.attrs) ? r.attrs : {};
}
function n(e) {
  return (
    (e && (e.imgUrl || e.img_url || e.previewUrl || e.listImgUrl)) ||
    (e && e.variants && e.variants[0]) ||
    ""
  );
}
function i(e) {
  var r = a(e);
  return [
    e && e.category,
    e && e.mainCategory,
    e && e.subCategory,
    e && e.categoryCode,
    e && e.mainCategoryCode,
    e && e.subCategoryCode,
    r.category,
    r.mainCategory,
    r.subCategory,
    r.categoryCode,
    r.mainCategoryCode,
    r.subCategoryCode,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}
function t(e) {
  if (!e) return !1;
  if (e.isPendant || e.hangsOutward || e.isSpacer) return !0;
  var a = String(e.mat || e.id || "").toLowerCase();
  return (
    0 === a.indexOf("ps_") ||
    0 === a.indexOf("sx_") ||
    !!r(i(e), [
      "peishi",
      "pei_shi",
      "accessory",
      "accessories",
      "suixing",
      "sui_xing",
      "sui-xing",
      "freeform",
      "irregular",
      "配饰",
      "随型",
      "隔珠",
      "隔片",
      "吊坠",
      "挂件",
      "花托",
    ]) ||
    r(n(e), ["/配饰/", "/随型/", "/peishi/", "/suixing/", "ps_", "sx_"])
  );
}
function o(e) {
  if (!e) return !1;
  if (e.isPendant || e.hangsOutward) return !1;
  var t = a(e);
  return r(
    [e.mat, e.id, e.name, e.class, i(e), n(e), t.material, t.shape]
      .filter(Boolean)
      .join(" ")
      .toLowerCase(),
    ["sx_", "suixing", "sui_xing", "sui-xing", "freeform", "irregular", "随型"]
  );
}
function s(e, a) {
  if (!e || e.isPendant || e.hangsOutward) return !1;
  var t = Math.max(
      1,
      Number(a && a.drawW) || Number(e.drawW) || Number(e.mm) || 1
    ),
    o = Math.max(
      1,
      Number(a && a.drawH) || Number(e.drawH) || Number(e.mm) || 1
    );
  return (
    Math.max(t, o) / Math.max(1, Math.min(t, o)) <= 1.62 ||
    r(
      [e.mat, e.id, e.name, e.class, i(e), n(e)]
        .filter(Boolean)
        .join(" ")
        .toLowerCase(),
      [
        "square",
        "polygon",
        "cube",
        "block",
        "fang",
        "duobian",
        "方",
        "多边",
        "片",
      ]
    )
  );
}
module.exports = {
  includesAny: r,
  isFreeformShapeShadowBead: o,
  isRegularAccessoryShadowShape: s,
  resolveBeadShadowKind: function (e, r) {
    if (!t(e))
      return {
        kind: "round",
        usesShapeShadow: !1,
        freeformShape: !1,
        regularShape: !1,
      };
    var a = o(e),
      n = !a && s(e, r),
      i = "shape-contour";
    return (
      a
        ? (i = "shape-freeform")
        : n
        ? (i = "shape-regular")
        : e && e.isSpacer
        ? (i = "shape-spacer")
        : e && (e.isPendant || e.hangsOutward) && (i = "shape-pendant"),
      { kind: i, usesShapeShadow: !0, freeformShape: a, regularShape: n }
    );
  },
  shouldUseShapeShadow: t,
};
