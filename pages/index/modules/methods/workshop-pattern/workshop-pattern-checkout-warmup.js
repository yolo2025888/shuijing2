var r = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../../../../@babel/runtime/helpers/typeof");
function n(r) {
  var e = r && "object" === t(r) ? r : {},
    n = [],
    a = function (r) {
      var e = (function (r) {
        return String(r || "").trim() || "";
      })(r);
      e && (n.indexOf(e) >= 0 || n.push(e));
    };
  return (
    a(e.bgUrl),
    (Array.isArray(e.structure) ? e.structure : []).forEach(function (r) {
      r &&
        "object" === t(r) &&
        (a(r.listImgUrl),
        Array.isArray(r.variants) && r.variants.length && a(r.variants[0]));
    }),
    [e.materialMap, e.materialSnapshot].forEach(function (r) {
      r &&
        "object" === t(r) &&
        !Array.isArray(r) &&
        Object.keys(r).forEach(function (e) {
          var n = r[e];
          n &&
            "object" === t(n) &&
            (a(n.listImgUrl || n.previewUrl || n.imageUrl || n.cardImage),
            Array.isArray(n.variants) && n.variants.length && a(n.variants[0]));
        });
    }),
    n.slice(0, 18)
  );
}
function a(r, e) {
  return new Promise(function (t) {
    if ("undefined" != typeof wx && "function" == typeof wx.getImageInfo) {
      var n = Math.max(80, Number(e) || 280),
        a = !1,
        i = function () {
          a || ((a = !0), t());
        },
        u = setTimeout(i, n);
      wx.getImageInfo({
        src: r,
        success: i,
        fail: i,
        complete: function () {
          clearTimeout(u);
        },
      });
    } else t();
  });
}
function i() {
  return (i = e(
    r().mark(function e(i, u) {
      var o, s, c;
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              if (
                ((o = u && "object" === t(u) ? u : {}),
                (s = Math.max(80, Number(o.timeoutMs) || 280)),
                (c = n(i)).length)
              ) {
                r.next = 5;
                break;
              }
              return r.abrupt("return");
            case 5:
              return (
                (r.next = 7),
                Promise.all(
                  c.map(function (r) {
                    return a(r, s);
                  })
                )
              );
            case 7:
            case "end":
              return r.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
module.exports = {
  collectCheckoutPreviewImageUrls: n,
  warmupCheckoutPreviewAssets: function (r, e) {
    return i.apply(this, arguments);
  },
};
