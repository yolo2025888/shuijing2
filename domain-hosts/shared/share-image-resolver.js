var r = require("../../@babel/runtime/helpers/typeof");
function e(r) {
  return Array.isArray(r)
    ? r
        .map(function (r) {
          return String(r || "").trim();
        })
        .filter(Boolean)
    : [];
}
function t(r, t) {
  var n = e(r),
    a = e(t);
  if (!n.length || n.length !== a.length) return !1;
  for (var i = 0; i < n.length; i += 1) if (n[i] !== a[i]) return !1;
  return !0;
}
function n(e) {
  for (
    var t = e && "object" === r(e) ? e : {},
      n = t.snapshot && "object" === r(t.snapshot) ? t.snapshot : {},
      a = [
        t.snapshotUrl,
        t.snapshot_url,
        t.previewUrl,
        t.preview_url,
        t.coverUrl,
        t.cover_url,
        t.imageUrl,
        t.image_url,
        t.thumbUrl,
        t.thumb_url,
        n.url,
        n.src,
      ],
      i = 0;
    i < a.length;
    i += 1
  ) {
    var u = String(a[i] || "").trim();
    if (u) return u;
  }
  return "";
}
function a(e, a) {
  for (var i = Array.isArray(e) ? e : [], u = 0; u < i.length; u += 1) {
    var l = i[u];
    if (l && "object" === r(l) && t(l.pattern, a)) {
      var o = n(l);
      if (o) return o;
    }
  }
  return "";
}
module.exports = {
  resolveDiyShareImageUrl: function (t, n) {
    var i = t && "object" === r(t) ? t : {},
      u = i.data && "object" === r(i.data) ? i.data : {},
      l = e(n);
    if (!l.length) return "";
    var o = a(u.savedSchemes, l);
    if (o) return o;
    var s = a(u.visibleFilteredPresets, l);
    if (s) return s;
    var f = a(u.filteredPresets, l);
    if (f) return f;
    var v = a(u.presets, l);
    return v || "";
  },
};
