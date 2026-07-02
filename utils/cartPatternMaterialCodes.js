var r = require("../@babel/runtime/helpers/typeof");
function e(r) {
  return String(r || "").trim();
}
function t(e) {
  return !(!e || "object" !== r(e) || Array.isArray(e));
}
function n(r) {
  var t = e(r);
  return /^[A-Za-z0-9_-]{1,64}$/.test(t) ? t : "";
}
function i(r) {
  return /^[0-9]+$/.test(e(r));
}
function a(r, e) {
  var i = t(r) ? r : {};
  return n(i.code || i.materialCode || i.material_code || e);
}
function u(u, o) {
  var f = n(u);
  if (!f) return "";
  var c,
    m =
      (c = o) && "object" === r(c)
        ? Array.isArray(c)
          ? c.filter(t).map(function (r) {
              return { key: "", item: r };
            })
          : Object.keys(c)
              .map(function (r) {
                return { key: e(r), item: c[r] };
              })
              .filter(function (r) {
                return t(r.item);
              })
        : [],
    l = m.find(function (r) {
      return r.key === f;
    });
  if (l) {
    var s = a(l.item, f);
    if (s && (!i(f) || !i(s))) return s;
  }
  if (i(f)) {
    var y = m.find(function (r) {
        var t = r.item;
        return e(t.id) === f || e(t.materialId) === f || e(t.material_id) === f;
      }),
      d = y ? a(y.item, y.key) : "";
    if (d && !i(d)) return d;
  }
  return f;
}
module.exports = {
  repairPatternMaterialCodes: function (r, e) {
    return Array.isArray(r)
      ? r
          .map(function (r) {
            return u(r, e);
          })
          .filter(Boolean)
      : [];
  },
  resolvePatternMaterialCode: u,
};
