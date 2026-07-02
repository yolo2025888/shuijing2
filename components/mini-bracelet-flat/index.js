var e = require("../../@babel/runtime/helpers/typeof"),
  t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../utils/catalog").getBeadType,
  a = require("../../utils/assetCache").cacheAssetPath,
  i = Object.create(null),
  u = Object.create(null),
  s = Object.create(null);
function c(e) {
  return e && e.isSpacer ? 25 : e && e.isPendant ? 15 : 20;
}
function l(e, t) {
  var r = String(null == e ? "" : e).trim();
  if (!r) return 0;
  if (r.endsWith("%")) {
    var n = Number(r.slice(0, -1));
    return Number.isFinite(n) ? (n / 100) * t : 0;
  }
  var a = Number(r);
  return Number.isFinite(a) ? a : 0;
}
function o(e) {
  var t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)) : 0;
}
function p(e) {
  e && (s[e] = Date.now());
}
Component({
  properties: {
    pattern: { type: Array, value: [] },
    beadSize: { type: Number, value: 11 },
    containerSize: { type: Number, value: 110 },
    animate: { type: Boolean, value: !1 },
    snapshotShadow: { type: Boolean, value: !1 },
    materials: { type: Object, value: null },
  },
  data: { beads: [], physicalSize: 0, scale: 1, renderReady: !1 },
  observers: {
    "pattern, beadSize, containerSize, materials": function () {
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
      var e = this;
      return r(
        t().mark(function n() {
          var i, u, s, l, o, p, b, m, d, f, h, g, y, v, x, S, N, k, w, I, j;
          return t().wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    if (
                      ((i = e.properties.pattern || []),
                      (u = e.properties.beadSize || 11),
                      (s = e.properties.containerSize || 110),
                      (l = (e.rebuildToken || 0) + 1),
                      (e.rebuildToken = l),
                      i.length)
                    ) {
                      n.next = 8;
                      break;
                    }
                    return (
                      e.setData({
                        beads: [],
                        physicalSize: s,
                        scale: 1,
                        renderReady: !0,
                      }),
                      n.abrupt("return")
                    );
                  case 8:
                    if (
                      ((o = i.map(function (t) {
                        return e.resolveBeadType(t);
                      })),
                      (p = u / 11),
                      (b = o.filter(function (e) {
                        return !e.isPendant;
                      })),
                      (m = o.reduce(function (e, t) {
                        return (
                          e + (t.isPendant ? 0 : t.mm * (t.gapRatio || 0.97))
                        );
                      }, 0)),
                      (d = b[0]),
                      (f =
                        b.length >= 3
                          ? (m /
                              (2 * b.length * Math.sin(Math.PI / b.length))) *
                            p
                          : (d ? d.mm : 11) * p),
                      (h = o.reduce(function (e, t) {
                        return Math.max(e, t.mm);
                      }, 11)),
                      (y = 1.05 * (g = 2 * f + h * p)),
                      (v = s ? s / y : 1),
                      (x = 0),
                      (S = o.map(function (t, r) {
                        var n = t.isPendant ? 0 : t.mm * (t.gapRatio || 0.97),
                          a = 0 === m ? 0 : (n / m) * Math.PI * 2,
                          i = x + a / 2;
                        x += a;
                        var u,
                          s = t.mm * p,
                          l = g / 2 + Math.cos(i) * f - s / 2,
                          o = g / 2 + Math.sin(i) * f - s / 2,
                          b =
                            i +
                            Math.PI / 2 +
                            ((u = t) && (u.isPendant || u.hangsOutward)
                              ? -Math.PI
                              : 0),
                          d =
                            t.variants && t.variants.length
                              ? t.variants[r % t.variants.length]
                              : t.listImgUrl ||
                                t.previewUrl ||
                                t.imageUrl ||
                                "";
                        return {
                          key: "".concat(t.id, "_").concat(r),
                          typeObj: t,
                          imgUrl: d,
                          displaySize: s,
                          wrapperStyle: [
                            "width:".concat(s, "px"),
                            "height:".concat(s, "px"),
                            "left:".concat(l, "px"),
                            "top:".concat(o, "px"),
                            "z-index:".concat(c(t)),
                          ].join(";"),
                          rotatorStyle: "transform:rotate(".concat(b, "rad);"),
                          imageStyle: e.buildImageStyle(t, s, null),
                        };
                      })),
                      (N = S.map(function (e) {
                        return e.imgUrl;
                      }).filter(function (e, t, r) {
                        return !!e && r.indexOf(e) === t;
                      })).length)
                    ) {
                      n.next = 26;
                      break;
                    }
                    if (e.rebuildToken === l) {
                      n.next = 24;
                      break;
                    }
                    return n.abrupt("return");
                  case 24:
                    return (
                      e.setData({
                        beads: S.map(function (t) {
                          return e.stripInternalFields(t);
                        }),
                        physicalSize: g,
                        scale: v,
                        renderReady: !0,
                      }),
                      n.abrupt("return")
                    );
                  case 26:
                    return (
                      e.data.renderReady || e.setData({ renderReady: !1 }),
                      (n.prev = 27),
                      (n.next = 30),
                      Promise.all(
                        N.map(
                          (function () {
                            var n = r(
                              t().mark(function r(n) {
                                var i, u, s;
                                return t().wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (t.next = 2), a(n);
                                      case 2:
                                        return (
                                          (i = t.sent),
                                          (u = i || n),
                                          (t.next = 6),
                                          e.getImageInfo(u)
                                        );
                                      case 6:
                                        return (
                                          (s = t.sent),
                                          t.abrupt("return", [n, u, s])
                                        );
                                      case 8:
                                      case "end":
                                        return t.stop();
                                    }
                                }, r);
                              })
                            );
                            return function (e) {
                              return n.apply(this, arguments);
                            };
                          })()
                        )
                      )
                    );
                  case 30:
                    if (((k = n.sent), e.rebuildToken === l)) {
                      n.next = 33;
                      break;
                    }
                    return n.abrupt("return");
                  case 33:
                    (w = Object.create(null)),
                      (I = Object.create(null)),
                      k.forEach(function (e) {
                        (w[e[0]] = e[1]), (I[e[0]] = e[2]);
                      }),
                      (j = S.map(function (t) {
                        var r = w[t.imgUrl] || t.imgUrl;
                        return Object.assign({}, t, {
                          imgUrl: r,
                          imageStyle: e.buildImageStyle(
                            t.typeObj,
                            t.displaySize,
                            I[t.imgUrl]
                          ),
                        });
                      }).map(function (t) {
                        return e.stripInternalFields(t);
                      })),
                      e.setData({
                        beads: j,
                        physicalSize: g,
                        scale: v,
                        renderReady: !0,
                      }),
                      (n.next = 45);
                    break;
                  case 40:
                    if (
                      ((n.prev = 40),
                      (n.t0 = n.catch(27)),
                      e.rebuildToken === l)
                    ) {
                      n.next = 44;
                      break;
                    }
                    return n.abrupt("return");
                  case 44:
                    e.setData({
                      beads: S.map(function (t) {
                        return e.stripInternalFields(t);
                      }),
                      physicalSize: g,
                      scale: v,
                      renderReady: !0,
                    });
                  case 45:
                  case "end":
                    return n.stop();
                }
            },
            n,
            null,
            [[27, 40]]
          );
        })
      )();
    },
    resolveBeadType: function (t) {
      var r = String(t || "").trim(),
        a =
          this.properties.materials && "object" === e(this.properties.materials)
            ? this.properties.materials
            : null,
        i = r && a ? a[r] : null;
      return i && "object" === e(i) ? i : n(t);
    },
    getImageInfo: function (e) {
      return r(
        t().mark(function r() {
          var n;
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if ((n = String(e || "").trim())) {
                    t.next = 3;
                    break;
                  }
                  return t.abrupt("return", null);
                case 3:
                  if (!i[n]) {
                    t.next = 6;
                    break;
                  }
                  return p(n), t.abrupt("return", i[n]);
                case 6:
                  if (!u[n]) {
                    t.next = 8;
                    break;
                  }
                  return t.abrupt("return", u[n]);
                case 8:
                  if (
                    "undefined" != typeof wx &&
                    "function" == typeof wx.getImageInfo
                  ) {
                    t.next = 10;
                    break;
                  }
                  return t.abrupt("return", null);
                case 10:
                  return (
                    (u[n] = new Promise(function (e) {
                      wx.getImageInfo({
                        src: n,
                        success: function (t) {
                          var r,
                            a = {
                              width: Number(t && t.width) || 0,
                              height: Number(t && t.height) || 0,
                            };
                          (i[n] = a),
                            p(n),
                            (r = Object.keys(i)).length <= 220 ||
                              r
                                .sort(function (e, t) {
                                  return (
                                    (Number(s[e]) || 0) - (Number(s[t]) || 0)
                                  );
                                })
                                .slice(0, r.length - 220)
                                .forEach(function (e) {
                                  u[e] || (delete i[e], delete s[e]);
                                }),
                            e(a);
                        },
                        fail: function () {
                          return e(null);
                        },
                      });
                    }).finally(function () {
                      delete u[n];
                    })),
                    t.abrupt("return", u[n])
                  );
                case 12:
                case "end":
                  return t.stop();
              }
          }, r);
        })
      )();
    },
    buildImageStyle: function (t, r, n) {
      var a = t && "object" === e(t) ? t : {},
        i = Math.max(1, Number(r) || 1),
        u = (function (e, t) {
          var r = Number(e && e.width),
            n = Number(e && e.height),
            a = Math.max(1, Number(t) || 1);
          if (!Number.isFinite(r) || !Number.isFinite(n) || r <= 0 || n <= 0)
            return { baseW: a, baseH: a };
          var i = r / n;
          return i >= 1
            ? { baseW: a, baseH: a / i }
            : { baseW: a * i, baseH: a };
        })(n, i),
        s =
          Number.isFinite(Number(a.imgScale)) && Number(a.imgScale) > 0
            ? Number(a.imgScale)
            : 1,
        c = u.baseW * s,
        p = u.baseH * s,
        b = (i - c) / 2 + l(a.visualOffsetX, c),
        m = (i - p) / 2 + l(a.visualOffsetY, p);
      return [
        "width:".concat(o(c), "px"),
        "height:".concat(o(p), "px"),
        "left:".concat(o(b), "px"),
        "top:".concat(o(m), "px"),
      ].join(";");
    },
    stripInternalFields: function (t) {
      var r = t && "object" === e(t) ? t : {},
        n = Object.assign({}, r);
      return delete n.typeObj, delete n.displaySize, n;
    },
  },
});
