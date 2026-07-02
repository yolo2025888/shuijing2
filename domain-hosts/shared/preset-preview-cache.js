var e = require("../../@babel/runtime/helpers/typeof"),
  r = require("../../utils/media-url").resolveRemoteMediaUrl,
  t = require("../../utils/catalog").getStructure,
  n = {
    loaded: !1,
    dirty: !1,
    byId: Object.create(null),
    byPattern: Object.create(null),
  };
function a(e) {
  return String(null == e ? "" : e).trim();
}
function i(e) {
  var r = Number(e);
  return Number.isFinite(r) ? r : null;
}
function o(e) {
  return Array.isArray(e)
    ? e
        .map(function (e) {
          return a(e);
        })
        .filter(Boolean)
    : [];
}
function c(e) {
  var r = o(e);
  return r.length ? r.join(",") : "";
}
function u(r) {
  for (
    var t = r && "object" === e(r) ? r : {},
      n = [
        t.id,
        t.workId,
        t.work_id,
        t.presetId,
        t.preset_id,
        t.sourcePresetId,
        t.source_preset_id,
        t.templateId,
        t.template_id,
        t.sourceTemplateId,
        t.source_template_id,
        t.presetCode,
        t.preset_code,
        t.code,
      ],
      i = [],
      o = Object.create(null),
      c = 0;
    c < n.length;
    c += 1
  ) {
    var u = a(n[c]);
    u && !o[u] && ((o[u] = !0), i.push(u));
  }
  return i;
}
function l(t) {
  for (var n = Array.isArray(t) ? t : [], i = 0; i < n.length; i += 1) {
    var o = n[i];
    if ("string" != typeof o) {
      if (o && "object" === e(o)) {
        var c = r(a(o.url || o.src || o.path));
        if (c) return c;
      }
    } else {
      var u = r(a(o));
      if (u) return u;
    }
  }
  return "";
}
function s(t) {
  for (
    var n = t && "object" === e(t) ? t : {},
      i = n.snapshot && "object" === e(n.snapshot) ? n.snapshot : {},
      o = n.preview && "object" === e(n.preview) ? n.preview : {},
      c = n.cover && "object" === e(n.cover) ? n.cover : {},
      u = [
        n.previewUrl,
        n.preview_url,
        n.snapshotUrl,
        n.snapshot_url,
        n.coverUrl,
        n.cover_url,
        n.imageUrl,
        n.image_url,
        n.thumbUrl,
        n.thumb_url,
        n.posterUrl,
        n.poster_url,
        o.url,
        o.src,
        i.url,
        i.src,
        c.url,
        c.src,
        l(n.images),
        l(n.workImages),
        l(n.work_images),
        l(n.proofImages),
      ],
      s = 0;
    s < u.length;
    s += 1
  ) {
    var f = r(a(u[s]));
    if (f) return f;
  }
  return "";
}
function f() {
  return "undefined" == typeof wx ||
    "function" != typeof wx.getStorageSync ||
    "function" != typeof wx.setStorageSync
    ? null
    : wx;
}
function p(r, t) {
  for (
    var n = r && "object" === e(r) ? r : {},
      i = Object.keys(n).slice(0, Math.max(0, t)),
      o = Object.create(null),
      c = 0;
    c < i.length;
    c += 1
  ) {
    var u = a(i[c]),
      l = a(n[u]);
    u && l && (o[u] = l);
  }
  return o;
}
function v() {
  if (!n.loaded) {
    n.loaded = !0;
    var r = f();
    if (r)
      try {
        var t = r.getStorageSync("stonelab_preset_preview_cache_v2"),
          a = t && "object" === e(t) ? t : {};
        (n.byId = p(a.byId, 1200)), (n.byPattern = p(a.byPattern, 1200));
      } catch (e) {
        (n.byId = Object.create(null)), (n.byPattern = Object.create(null));
      }
  }
}
function b() {
  if ((v(), n.dirty)) {
    var e = f();
    if (e) {
      n.dirty = !1;
      try {
        e.setStorageSync("stonelab_preset_preview_cache_v2", {
          byId: n.byId,
          byPattern: n.byPattern,
        });
      } catch (e) {}
    }
  }
}
function d(r, t, i) {
  v();
  var o,
    l = i && "object" === e(i) ? i : {},
    f = a(t || s(r));
  if (!f) return "";
  if (
    !(o = a(f).toLowerCase()) ||
    0 === o.indexOf("wxfile://") ||
    0 === o.indexOf("blob:") ||
    0 === o.indexOf("data:image") ||
    0 === o.indexOf("http://tmp/") ||
    /^[a-z]:\\/.test(o)
  )
    return f;
  for (
    var p = u(r), d = c(r && r.pattern), y = !1, h = 0;
    h < p.length;
    h += 1
  ) {
    var _ = p[h];
    _ && n.byId[_] !== f && ((n.byId[_] = f), (y = !0));
  }
  return (
    d && n.byPattern[d] !== f && ((n.byPattern[d] = f), (y = !0)),
    y && ((n.dirty = !0), !1 !== l.persist && b()),
    f
  );
}
function y(r) {
  var n = r && "object" === e(r) ? r : {};
  return (
    (function (e) {
      var r = a(
        e.displayPriceText ||
          e.display_price_text ||
          e.priceText ||
          e.price_text ||
          e.snapshotPriceText ||
          e.snapshot_price_text ||
          e.totalPriceText ||
          e.total_price_text
      );
      if (r) return r;
      for (
        var t = [
            e.price,
            e.price_snapshot,
            e.snapshotPrice,
            e.snapshot_price,
            e.totalPrice,
            e.total_price,
          ],
          n = 0;
        n < t.length;
        n += 1
      ) {
        var o = i(t[n]);
        if (null !== o && o > 0) return o.toFixed(1);
      }
      return "";
    })(n) ||
    (function (e) {
      var r = o(e);
      if (!r.length) return "";
      var n = t(r);
      if (!Array.isArray(n) || !n.length) return "";
      var a = n.reduce(function (e, r) {
        var t = i(r && r.sum);
        if (null !== t) return e + t;
        var n = i(r && r.price),
          a = i(r && r.count);
        return null === n || null === a ? e : e + n * a;
      }, 0);
      return !Number.isFinite(a) || a <= 0 ? "" : a.toFixed(1);
    })(n.pattern)
  );
}
module.exports = {
  resolvePresetPreviewSnapshot: function (r, t) {
    var i = t && "object" === e(t) ? t : {},
      o = !1 !== i.allowPatternFallback,
      l = !0 === i.preferCacheById,
      f = !0 === i.disableCacheFallback;
    v();
    var p = u(r);
    if (!f && l)
      for (var b = 0; b < p.length; b += 1) {
        var d = a(n.byId[p[b]]);
        if (d) return d;
      }
    var y = s(r);
    if (y) return y;
    if (!f && !l)
      for (var h = 0; h < p.length; h += 1) {
        var _ = a(n.byId[p[h]]);
        if (_) return _;
      }
    if (!f && o) {
      var g = c(r && r.pattern);
      if (g) {
        var m = a(n.byPattern[g]);
        if (m) return m;
      }
    }
    return "";
  },
  rememberPresetPreviewSnapshot: d,
  rememberPresetPreviewSnapshotBatch: function (r, t) {
    var n = Array.isArray(r) ? r : [];
    if (n.length) {
      for (var a = t && "object" === e(t) ? t : {}, i = 0; i < n.length; i += 1)
        d(n[i], "", { persist: !1 });
      !1 !== a.persist && b();
    }
  },
  flushPreviewCache: b,
  resolvePresetPriceText: y,
  resolvePresetDisplayPrice: function (e) {
    var r = y(e);
    return r ? (r.indexOf("¥") >= 0 ? r : "¥".concat(r)) : "¥--";
  },
};
