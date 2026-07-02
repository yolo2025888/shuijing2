var a = require("../@babel/runtime/helpers/typeof");
function e(a, e, t, r) {
  var i = Number(a);
  if (!Number.isFinite(i)) return e;
  var s = Number.isFinite(t) ? t : -Number.MAX_SAFE_INTEGER,
    n = Number.isFinite(r) ? r : Number.MAX_SAFE_INTEGER;
  return Math.max(s, Math.min(n, i));
}
function t(a, e) {
  if (!0 === a || !1 === a) return a;
  if (null == a || "" === a) return !!e;
  var t = String(a).trim().toLowerCase();
  return (
    "1" === t ||
    "true" === t ||
    "yes" === t ||
    "on" === t ||
    ("0" !== t && "false" !== t && "no" !== t && "off" !== t && !!e)
  );
}
function r() {
  for (var a = 0; a < arguments.length; a += 1) {
    var e = a < 0 || arguments.length <= a ? void 0 : arguments[a];
    if (null != e) return e;
  }
}
function i(a) {
  var e = Number(a && a.layer);
  return Number.isFinite(e)
    ? e
    : a && a.isSpacer
    ? 25
    : a && (a.isPendant || a.hangsOutward)
    ? 15
    : 20;
}
module.exports = {
  BRACELET_PROTOCOL_VERSION: "1.0",
  getBraceletLayer: i,
  applyBraceletContract: function (s) {
    var n = s && "object" === a(s) ? s : {},
      u =
        n.attrs && "object" === a(n.attrs) && !Array.isArray(n.attrs)
          ? Object.assign({}, n.attrs)
          : {},
      l = Object.assign({}, n);
    return (
      (l.isPendant = t(r(n.isPendant, u.isPendant), !1)),
      (l.hangsOutward = t(r(n.hangsOutward, u.hangsOutward), !1)),
      (l.isSpacer = t(r(n.isSpacer, u.isSpacer), !1)),
      (l.gapRatio = e(r(n.gapRatio, u.gapRatio), 0.97, 0.01, 10)),
      (l.imgScale = e(r(n.imgScale, u.imgScale), 1, 0.01, 10)),
      (l.listImgScale = e(r(n.listImgScale, u.listImgScale), 1, 0.01, 10)),
      (l.visualOffsetX = String(r(n.visualOffsetX, u.visualOffsetX, ""))),
      (l.visualOffsetY = String(r(n.visualOffsetY, u.visualOffsetY, ""))),
      (l.layer = i(l)),
      (l.attrs = Object.assign({}, u, {
        isPendant: l.isPendant,
        hangsOutward: l.hangsOutward,
        isSpacer: l.isSpacer,
        gapRatio: l.gapRatio,
        imgScale: l.imgScale,
        listImgScale: l.listImgScale,
        visualOffsetX: l.visualOffsetX,
        visualOffsetY: l.visualOffsetY,
        layer: l.layer,
      })),
      l
    );
  },
};
