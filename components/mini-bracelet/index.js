var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../../utils/catalog").getBeadType,
  a = require("../../utils/assetCache").cacheAssetPath;
function n(e) {
  return e && e.isSpacer ? 25 : e && e.isPendant ? 15 : 20;
}
Component({
  properties: {
    pattern: { type: Array, value: [] },
    beadSize: { type: Number, value: 11 },
    containerSize: { type: Number, value: 110 },
    animate: { type: Boolean, value: !1 },
  },
  data: { beads: [], physicalSize: 0, scale: 1, renderReady: !1 },
  observers: {
    "pattern, beadSize, containerSize": function () {
      this.rebuild();
    },
  },
  lifetimes: {
    attached: function () {
      (this.rebuildToken = 0), this.rebuild();
    },
  },
  methods: {
    rebuild: function () {
      var i = this;
      return t(
        e().mark(function c() {
          var s, u, o, l, p, d, h, f, m, b, g, y, v, x, S, k, z, P, R, T;
          return e().wrap(
            function (c) {
              for (;;)
                switch ((c.prev = c.next)) {
                  case 0:
                    if (
                      ((s = i.properties.pattern || []),
                      (u = i.properties.beadSize || 11),
                      (o = i.properties.containerSize || 110),
                      (l = (i.rebuildToken || 0) + 1),
                      (i.rebuildToken = l),
                      s.length)
                    ) {
                      c.next = 8;
                      break;
                    }
                    return (
                      i.setData({
                        beads: [],
                        physicalSize: o,
                        scale: 1,
                        renderReady: !0,
                      }),
                      c.abrupt("return")
                    );
                  case 8:
                    if (
                      ((p = s.map(function (e) {
                        return r(e);
                      })),
                      (d = u / 11),
                      (h = p.filter(function (e) {
                        return !e.isPendant;
                      })),
                      (f = p.reduce(function (e, t) {
                        return (
                          e + (t.isPendant ? 0 : t.mm * (t.gapRatio || 0.97))
                        );
                      }, 0)),
                      (m = h[0]),
                      (b =
                        h.length >= 3
                          ? (f /
                              (2 * h.length * Math.sin(Math.PI / h.length))) *
                            d
                          : (m ? m.mm : 11) * d),
                      (g = p.reduce(function (e, t) {
                        return Math.max(e, t.mm);
                      }, 11)),
                      (v = 1.05 * (y = 2 * b + g * d)),
                      (x = o ? o / v : 1),
                      (S = 0),
                      (k = p.map(function (e, t) {
                        var r = e.isPendant ? 0 : e.mm * (e.gapRatio || 0.97),
                          a = 0 === f ? 0 : (r / f) * Math.PI * 2,
                          c = S + a / 2;
                        S += a;
                        var s,
                          u = e.mm * d,
                          o = y / 2 + Math.cos(c) * b - u / 2,
                          l = y / 2 + Math.sin(c) * b - u / 2,
                          p =
                            c +
                            Math.PI / 2 +
                            ((s = e) && (s.isPendant || s.hangsOutward)
                              ? -Math.PI
                              : 0),
                          h =
                            e.variants && e.variants.length
                              ? e.variants[t % e.variants.length]
                              : "",
                          m = i.buildImageTransform(e);
                        return {
                          key: "".concat(e.id, "_").concat(t),
                          imgUrl: h,
                          wrapperStyle: [
                            "width:".concat(u, "px"),
                            "height:".concat(u, "px"),
                            "left:".concat(o, "px"),
                            "top:".concat(l, "px"),
                            "z-index:".concat(n(e)),
                          ].join(";"),
                          rotatorStyle: "transform:rotate(".concat(p, "rad);"),
                          shadowStyle: [
                            "width:".concat(u, "px"),
                            "height:".concat(u, "px"),
                            "left:".concat(o + 1.5 * d, "px"),
                            "top:".concat(l + 3 * d, "px"),
                            "opacity:".concat(
                              e.category && 0 === e.category.indexOf("crystal")
                                ? 0.5
                                : 0.15
                            ),
                          ].join(";"),
                          imageStyle: m,
                        };
                      })),
                      (z = k
                        .map(function (e) {
                          return e.imgUrl;
                        })
                        .filter(function (e, t, r) {
                          return !!e && r.indexOf(e) === t;
                        })).length)
                    ) {
                      c.next = 26;
                      break;
                    }
                    if (i.rebuildToken === l) {
                      c.next = 24;
                      break;
                    }
                    return c.abrupt("return");
                  case 24:
                    return (
                      i.setData({
                        beads: k,
                        physicalSize: y,
                        scale: x,
                        renderReady: !0,
                      }),
                      c.abrupt("return")
                    );
                  case 26:
                    return (
                      i.data.renderReady || i.setData({ renderReady: !1 }),
                      (c.prev = 27),
                      (c.next = 30),
                      Promise.all(
                        z.map(
                          (function () {
                            var r = t(
                              e().mark(function t(r) {
                                var n;
                                return e().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), a(r);
                                      case 2:
                                        return (
                                          (n = e.sent),
                                          e.abrupt("return", [r, n])
                                        );
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                }, t);
                              })
                            );
                            return function (e) {
                              return r.apply(this, arguments);
                            };
                          })()
                        )
                      )
                    );
                  case 30:
                    if (((P = c.sent), i.rebuildToken === l)) {
                      c.next = 33;
                      break;
                    }
                    return c.abrupt("return");
                  case 33:
                    (R = Object.create(null)),
                      P.forEach(function (e) {
                        R[e[0]] = e[1];
                      }),
                      (T = k.map(function (e) {
                        return Object.assign({}, e, {
                          imgUrl: R[e.imgUrl] || e.imgUrl,
                        });
                      })),
                      i.setData({
                        beads: T,
                        physicalSize: y,
                        scale: x,
                        renderReady: !0,
                      }),
                      (c.next = 44);
                    break;
                  case 39:
                    if (
                      ((c.prev = 39),
                      (c.t0 = c.catch(27)),
                      i.rebuildToken === l)
                    ) {
                      c.next = 43;
                      break;
                    }
                    return c.abrupt("return");
                  case 43:
                    i.setData({
                      beads: k,
                      physicalSize: y,
                      scale: x,
                      renderReady: !0,
                    });
                  case 44:
                  case "end":
                    return c.stop();
                }
            },
            c,
            null,
            [[27, 39]]
          );
        })
      )();
    },
    buildImageTransform: function (e) {
      var t = [];
      return (
        e.imgScale && t.push("scale(".concat(e.imgScale, ")")),
        e.visualOffsetX && t.push("translateX(".concat(e.visualOffsetX, ")")),
        e.visualOffsetY && t.push("translateY(".concat(e.visualOffsetY, ")")),
        t.length ? "transform:".concat(t.join(" "), ";") : ""
      );
    },
  },
});
