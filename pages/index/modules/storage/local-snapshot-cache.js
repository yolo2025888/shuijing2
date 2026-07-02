var e = Object.create(null);
function t(e) {
  if (!Array.isArray(e)) return [];
  try {
    return JSON.parse(JSON.stringify(e));
  } catch (t) {
    return e.slice();
  }
}
function r(r) {
  var a = String(r || "").trim();
  if (!a) return [];
  var n = Date.now(),
    c = e[a];
  if (c && n - Number(c.cachedAt || 0) <= 5e3) return t(c.value);
  if ("undefined" == typeof wx || "function" != typeof wx.getStorageSync)
    return [];
  try {
    var i = wx.getStorageSync(a),
      s = Array.isArray(i) ? i : [];
    return (e[a] = { value: t(s), cachedAt: n }), t(s);
  } catch (e) {
    return [];
  }
}
function a(r, a) {
  var n = String(r || "").trim();
  if (n && "undefined" != typeof wx && "function" == typeof wx.setStorageSync) {
    var c = t(Array.isArray(a) ? a : []);
    try {
      wx.setStorageSync(n, c), (e[n] = { value: t(c), cachedAt: Date.now() });
    } catch (e) {}
  }
}
function n(r, a) {
  var n = String(r || "").trim();
  n && (e[n] = { value: t(Array.isArray(a) ? a : []), cachedAt: Date.now() });
}
module.exports = {
  LOCAL_SCHEMES_STORAGE_KEY: "jieshanshi_schemes",
  LOCAL_CART_STORAGE_KEY: "jieshanshi_cart",
  readLocalSchemesSnapshot: function () {
    return r("jieshanshi_schemes");
  },
  readLocalCartSnapshot: function () {
    return r("jieshanshi_cart");
  },
  writeLocalSchemesSnapshot: function (e) {
    a("jieshanshi_schemes", e);
  },
  writeLocalCartSnapshot: function (e) {
    a("jieshanshi_cart", e);
  },
  updateLocalSchemesSnapshotCache: function (e) {
    n("jieshanshi_schemes", e);
  },
  updateLocalCartSnapshotCache: function (e) {
    n("jieshanshi_cart", e);
  },
};
