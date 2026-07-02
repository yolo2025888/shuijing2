var e = require("../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../@babel/runtime/helpers/typeof"),
  n = require("../../utils/catalog"),
  i = n.getBeadType,
  o = n.getTrayBg,
  u = n.resolveAssetPath,
  c = n.resolveMaterialImageUrl,
  s = require("../../utils/assetCache").cacheAssetPath;
function l(e) {
  return String(e || "").trim();
}
function h(e) {
  return new Promise(function (t, r) {
    "undefined" != typeof wx && "function" == typeof wx.getImageInfo
      ? wx.getImageInfo({
          src: e,
          success: function (e) {
            return t(e || null);
          },
          fail: function (e) {
            return r(e || new Error("WX_GET_IMAGE_INFO_FAILED"));
          },
        })
      : r(new Error("WX_GET_IMAGE_INFO_UNAVAILABLE"));
  });
}
function b(e, t, r, a) {
  var n = Math.max(320, Number(r) || 1e3),
    i = Math.max(256, Number(a) || 800);
  return new Promise(function (r, a) {
    "undefined" != typeof wx && "function" == typeof wx.canvasToTempFilePath
      ? wx.canvasToTempFilePath(
          {
            canvasId: t,
            width: n,
            height: i,
            destWidth: n,
            destHeight: i,
            fileType: "png",
            quality: 1,
            success: function (e) {
              return r(l(e && e.tempFilePath));
            },
            fail: function (e) {
              return a(e || new Error("WX_CANVAS_EXPORT_FAILED"));
            },
          },
          e
        )
      : a(new Error("WX_CANVAS_EXPORT_UNAVAILABLE"));
  });
}
function f(e, t, r, a, n, i, o, u) {
  if (e && t) {
    var c = Number(r || 1),
      s = Number(a || 1),
      l = c > 0 && s > 0 ? c / s : 1,
      h = Number(o) / Number(u),
      b = Number(o),
      f = Number(u),
      m = Number(n),
      p = Number(i);
    l > h
      ? ((f = b / l), (p += (Number(u) - f) / 2))
      : ((b = f * l), (m += (Number(o) - b) / 2)),
      e.drawImage(t, m, p, b, f);
  }
}
function m(e, t, r, a, n, i, o, u) {
  if (e && t) {
    var c = Number(r || 1),
      s = Number(a || 1),
      l = c > 0 && s > 0 ? c / s : 1,
      h = Number(o) / Number(u),
      b = Number(o),
      f = Number(u),
      m = Number(n),
      p = Number(i);
    l > h
      ? (m -= ((b = (f = u) * l) - Number(o)) / 2)
      : (p -= ((f = (b = o) / l) - Number(u)) / 2),
      e.drawImage(t, m, p, b, f);
  }
}
function p(e, t) {
  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
    n = Number(e);
  return Number.isFinite(n) ? Math.max(r, Math.min(a, n)) : t;
}
function d(e) {
  return Array.isArray(e)
    ? e
        .map(function (e) {
          return l(e);
        })
        .filter(Boolean)
    : [];
}
function g(e, t) {
  var r = e && "object" === a(e) ? e : {},
    n = r.coverRect && "object" === a(r.coverRect) ? r.coverRect : {};
  return [
    "layout=".concat(l(t)),
    "cover=".concat(
      [n.xRatio, n.yRatio, n.widthRatio, n.heightRatio].map(l).join(",")
    ),
    "brand=".concat(l(r.brandYRatio)),
    "logo=".concat(l(r.logoWidthRatio)),
    "tray="
      .concat(l(r.includeTrayBg), ":")
      .concat(l(r.trayDiameterRatio), ":")
      .concat(l(r.trayCenterXRatio), ":")
      .concat(l(r.trayCenterYRatio)),
    "bracelet="
      .concat(l(r.braceletCenterYRatio), ":")
      .concat(l(r.braceletBoxRatio), ":")
      .concat(l(r.beadSize || r.bead_size)),
  ].join(";");
}
function x(e, t) {
  var r = String(null == e ? "" : e).trim();
  if (!r) return 0;
  if (r.endsWith("%")) {
    var a = Number(r.slice(0, -1));
    return Number.isFinite(a) ? (a / 100) * t : 0;
  }
  var n = Number(r);
  return Number.isFinite(n) ? n : 0;
}
function y(e) {
  return !(!e || (!e.isPendant && !e.hangsOutward));
}
function v(e, t) {
  var r = e && "object" === a(e) ? e : {},
    n = Array.isArray(r.variants) ? r.variants : [];
  return (
    l(n.length ? n[t % n.length] : "") ||
    l(c(r, t)) ||
    l(r.listImgUrl || r.list_img_url || r.imgUrl || r.img_url)
  );
}
function R(e) {
  var t = e && "object" === a(e) ? e : {},
    r =
      t.catalogSnapshot && "object" === a(t.catalogSnapshot)
        ? t.catalogSnapshot
        : {},
    n = []
      .concat(Array.isArray(r.beadTypes) ? r.beadTypes : [])
      .concat(Array.isArray(r.materials) ? r.materials : []),
    i = Object.create(null);
  return (
    n.forEach(function (e) {
      var t = e && "object" === a(e) ? e : null,
        r = l(t && (t.id || t.code || t.materialId || t.material_id));
      r && !i[r] && (i[r] = t);
    }),
    i
  );
}
function C(e, t) {
  var r = l(e),
    n = t && t[r],
    o = i(r);
  return n && "object" === a(n) ? Object.assign({}, o || {}, n, { id: r }) : o;
}
function N(e) {
  return _.apply(this, arguments);
}
function _() {
  return (_ = r(
    t().mark(function e(r) {
      var a, n, i, o, c;
      return t().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if ((a = l(r))) {
                e.next = 3;
                break;
              }
              return e.abrupt("return", null);
            case 3:
              return (
                (n = u(a)),
                (e.next = 6),
                s(n).catch(function () {
                  return "";
                })
              );
            case 6:
              return (
                (i = e.sent),
                (o = i || n),
                (e.next = 10),
                h(o).catch(function () {
                  return null;
                })
              );
            case 10:
              if ((c = e.sent)) {
                e.next = 13;
                break;
              }
              return e.abrupt("return", null);
            case 13:
              return e.abrupt(
                "return",
                Object.assign({}, c, { path: c.path || o })
              );
            case 14:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function w() {
  return A.apply(this, arguments);
}
function A() {
  return (A = r(
    t().mark(function e() {
      var r, a;
      return t().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (e.next = 2),
                h("/assets/SLLOGO-share-safe.png").catch(function () {
                  return null;
                })
              );
            case 2:
              if (!(r = e.sent) || !r.path) {
                e.next = 5;
                break;
              }
              return e.abrupt("return", r);
            case 5:
              return (
                (e.next = 7),
                h("/assets/share-home-logo.png").catch(function () {
                  return null;
                })
              );
            case 7:
              if (!(a = e.sent) || !a.path) {
                e.next = 10;
                break;
              }
              return e.abrupt("return", a);
            case 10:
              return e.abrupt("return", null);
            case 11:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function I(e, t, r, n, i) {
  var o = e && "object" === a(e) ? e : {},
    u = Number(o.width || 1),
    c = Number(o.height || 1),
    s = u > 0 && c > 0 ? u / c : 1,
    l = Math.max(1, Number(t) || 1),
    h = l,
    b = l;
  s >= 1 ? (b = h / s) : (h = b * s);
  var f = Number.isFinite(Number(r)) && Number(r) > 0 ? Number(r) : 1;
  return (
    (b *= f),
    { x: -(h *= f) / 2 + x(n, h), y: -b / 2 + x(i, b), width: h, height: b }
  );
}
function S(e, t, r) {
  return F.apply(this, arguments);
}
function F() {
  return (F = r(
    t().mark(function e(n, i, o) {
      var u, c, s, l, h, b, f, m, g, x, _, w, A, S, F, T, E, M, P, k, j, O, z;
      return t().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (((u = d(i)), n && !(u.length < 1))) {
                e.next = 3;
                break;
              }
              return e.abrupt("return", !1);
            case 3:
              return (
                (c = o && "object" === a(o) ? o : {}),
                (s = R(c.pageContext)),
                (l = Math.max(320, Number(c.size) || 1e3)),
                (h = Number(c.beadSize || c.bead_size || 11) || 11),
                (b = l * p(c.braceletBoxRatio, 0.58, 0.1, 1)),
                (f = l / 2),
                (m = l * p(c.braceletCenterYRatio, 0.285, 0.1, 0.9)),
                (g = h / 11),
                (x = u.map(function (e, t) {
                  var r = C(e, s);
                  return { bead: r, imageUrl: v(r, t) };
                })),
                (_ = x.filter(function (e) {
                  return e.bead && !e.bead.isPendant;
                })),
                (w = x.reduce(function (e, t) {
                  var r = t.bead || {};
                  return (
                    e +
                    (r.isPendant
                      ? 0
                      : (Number(r.mm) || 11) * (Number(r.gapRatio) || 0.97))
                  );
                }, 0)),
                (A = _[0] && _[0].bead),
                (S =
                  _.length >= 3
                    ? (w / (2 * _.length * Math.sin(Math.PI / _.length))) * g
                    : ((A && Number(A.mm)) || 11) * g),
                (F = x.reduce(function (e, t) {
                  return Math.max(e, Number(t.bead && t.bead.mm) || 11);
                }, 11)),
                (E = (T = 2 * S + F * g * 1.35) > 0 ? b / T : 1),
                (M = []),
                x.forEach(function (e) {
                  e.imageUrl && M.indexOf(e.imageUrl) < 0 && M.push(e.imageUrl);
                }),
                (e.next = 23),
                Promise.all(
                  M.map(
                    (function () {
                      var e = r(
                        t().mark(function e(r) {
                          return t().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.t0 = r), (e.next = 3), N(r);
                                case 3:
                                  return (
                                    (e.t1 = e.sent),
                                    e.abrupt("return", [e.t0, e.t1])
                                  );
                                case 5:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  )
                )
              );
            case 23:
              return (
                (P = e.sent),
                (k = Object.create(null)),
                P.forEach(function (e) {
                  e[0] && e[1] && (k[e[0]] = e[1]);
                }),
                (j = -Math.PI / 2),
                (O = x
                  .map(function (e, t) {
                    var r = e.bead || {},
                      a = r.isPendant
                        ? 0
                        : (Number(r.mm) || 11) * (Number(r.gapRatio) || 0.97),
                      n = 0 === w ? 0 : (a / w) * Math.PI * 2,
                      i = j + n / 2;
                    j += n;
                    var o = (Number(r.mm) || 11) * g * E,
                      u = S * E,
                      c = f + Math.cos(i) * u,
                      s = m + Math.sin(i) * u,
                      l = i + Math.PI / 2 + (y(r) ? -Math.PI : 0),
                      h = Number(r.layer) || (r.isPendant ? 15 : 20);
                    return {
                      bead: r,
                      imageUrl: e.imageUrl,
                      imageInfo: k[e.imageUrl],
                      x: c,
                      y: s,
                      rot: l,
                      displaySize: o,
                      layer: h,
                      index: t,
                    };
                  })
                  .sort(function (e, t) {
                    return e.layer !== t.layer ? e.layer - t.layer : e.y - t.y;
                  })),
                (z = 0),
                O.forEach(function (e) {
                  if (e.imageInfo && e.imageInfo.path) {
                    var t = e.bead || {},
                      r = I(
                        e.imageInfo,
                        e.displaySize,
                        t.imgScale,
                        t.visualOffsetX,
                        t.visualOffsetY
                      );
                    n.save(),
                      n.translate(e.x, e.y),
                      n.rotate(e.rot),
                      n.drawImage(
                        e.imageInfo.path,
                        r.x,
                        r.y,
                        r.width,
                        r.height
                      ),
                      n.restore(),
                      (z += 1);
                  }
                }),
                e.abrupt("return", z > 0)
              );
            case 31:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function T() {
  return E.apply(this, arguments);
}
function E() {
  return (E = r(
    t().mark(function e() {
      var r,
        a,
        n,
        i,
        u = arguments;
      return t().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (r = u.length > 0 && void 0 !== u[0] ? u[0] : {}),
                (a = l(r.bgUrl || r.bg_url)),
                (n = a) ||
                  void 0 === r.bgIndex ||
                  null === r.bgIndex ||
                  "" === r.bgIndex ||
                  ((i = o(Number(r.bgIndex))), (n = l(i && i.url))),
                e.abrupt("return", n ? N(n) : null)
              );
            case 5:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function M(e, t, r) {
  var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (e) {
    var n = r * p(a.trayDiameterRatio, 0.76, 0.3, 1),
      i = r * p(a.trayCenterXRatio, 0.5, 0, 1),
      o = r * p(a.trayCenterYRatio, 0.46, 0, 1),
      u = n / 2,
      c = i - u,
      s = o - u;
    e.save(),
      e.beginPath(),
      e.arc(i, o, u, 0, 2 * Math.PI),
      e.closePath(),
      e.clip(),
      e.setFillStyle("#F4F2EC"),
      e.fillRect(c, s, n, n),
      t && t.path && m(e, t.path, t.width, t.height, c, s, n, n),
      e.setFillStyle("rgba(0, 0, 0, 0.025)"),
      e.fillRect(c, s, n, n),
      e.restore();
  }
}
function P(e, t, r) {
  var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (e)
    if (t && t.path) {
      var n = r * p(a.logoWidthRatio, 0.22, 0.08, 0.5),
        i = n * (Number(t.height || 1) / Math.max(1, Number(t.width || 1))),
        o = r * p(a.brandYRatio, 0.285, 0, 1);
      f(e, t.path, t.width, t.height, (r - n) / 2, o - i / 2, n, i);
    } else k(e, r, a);
}
function k(e, t) {
  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  if (e) {
    var a = t / 2,
      n = t * p(r.brandYRatio, 0.285, 0, 1);
    e.save(),
      "function" == typeof e.setTextAlign && e.setTextAlign("center"),
      "function" == typeof e.setTextBaseline && e.setTextBaseline("middle"),
      "function" == typeof e.setFillStyle && e.setFillStyle("#888D97"),
      "function" == typeof e.setFontSize &&
        e.setFontSize(Math.round(0.035 * t)),
      e.fillText("Stone", a, n - 0.024 * t),
      "function" == typeof e.setFillStyle && e.setFillStyle("#373A43"),
      "function" == typeof e.setFontSize &&
        e.setFontSize(Math.round(0.055 * t)),
      e.fillText("LAB", a, n + 0.022 * t),
      e.restore();
  }
}
function j(e, t, r, a, n, i) {
  e &&
    t &&
    (e.save(),
    "function" == typeof e.setTextAlign && e.setTextAlign("left"),
    "function" == typeof e.setTextBaseline && e.setTextBaseline("top"),
    "function" == typeof e.setFillStyle && e.setFillStyle(i),
    "function" == typeof e.setFontSize && e.setFontSize(n),
    e.fillText(t, r, a),
    e.fillText(t, r + 1, a),
    e.fillText(t, r, a + 1),
    e.restore());
}
function O(e, t, r, a, n) {
  return z.apply(this, arguments);
}
function z() {
  return (z = r(
    t().mark(function e(r, n, i, o, u) {
      var c, s, l, h, b, f, m, d, g, x, y;
      return t().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (r) {
                e.next = 2;
                break;
              }
              return e.abrupt("return", !1);
            case 2:
              return (
                (c = u && "object" === a(u) ? u : {}),
                (s = Math.max(320, Number(c.width) || 1e3)),
                (l = Math.max(256, Number(c.height) || 800)),
                (h = Math.min(s, l)),
                (b = (s - h) / 2),
                (f = (l - h) / 2),
                (m = p(c.trayCenterYRatio, 0.5375, 0.1, 0.9)),
                (d = p(c.trayDiameterRatio, 0.675, 0.3, 1)),
                (g = p(c.braceletCenterYRatio, m, 0.1, 0.9)),
                (x = p(c.braceletBoxRatio, 0.54, 0.1, 1)),
                r.setFillStyle("#fbfaf8"),
                r.fillRect(0, 0, s, l),
                j(r, "下一代的真实水晶DIY设计系统", 64, 58, 44, "#101112"),
                r.save(),
                r.translate(b, f),
                M(r, o, h, {
                  trayCenterXRatio: 0.5,
                  trayCenterYRatio: m,
                  trayDiameterRatio: d,
                }),
                (e.next = 20),
                S(r, i, {
                  size: h,
                  beadSize: c.beadSize || c.bead_size,
                  braceletCenterYRatio: g,
                  braceletBoxRatio: x,
                  pageContext: n,
                })
              );
            case 20:
              return (y = e.sent), r.restore(), e.abrupt("return", y);
            case 23:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function B() {
  return (B = r(
    t().mark(function r(n) {
      var i,
        o,
        u,
        c,
        s,
        m,
        x,
        y,
        v,
        R,
        C,
        N,
        _,
        A,
        I,
        F,
        E,
        k,
        j,
        z,
        B,
        U,
        L,
        D,
        Y,
        W,
        G,
        H,
        X,
        q,
        V,
        K,
        Z,
        J = arguments;
      return t().wrap(function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              if (
                ((i = J.length > 1 && void 0 !== J[1] ? J[1] : {}),
                (o = n && "object" === a(n) ? n : null),
                (u = l(i.canvasId)),
                (c = l(i.coverUrl)),
                (s = d(i.pattern)),
                (m = l(i.fallbackImageUrl) || "/assets/share-home-logo.png"),
                (x = Number(i.width || i.cardWidth || i.card_width)),
                (y = Number(i.height || i.cardHeight || i.card_height)),
                (v = Number(i.size)),
                (R = Math.max(320, x || v || 1e3)),
                (C = Math.max(256, y || Math.round(0.8 * R) || 800)),
                (N = Math.min(R, C)),
                (_ = (R - N) / 2),
                (A = (C - N) / 2),
                o &&
                  u &&
                  (c || s.length) &&
                  "undefined" != typeof wx &&
                  "function" == typeof wx.createCanvasContext)
              ) {
                t.next = 16;
                break;
              }
              return t.abrupt("return", m);
            case 16:
              if (
                ((I = l(i.layout) || (c ? "cover" : "bracelet")),
                (F = "stonelab-diy-system" === I),
                (E =
                  void 0 === i.bgIndex || null === i.bgIndex
                    ? ""
                    : String(i.bgIndex)),
                (k = l(i.bgUrl || i.bg_url)),
                (j = g(i, I)),
                (z = "bracelet-card:"
                  .concat("v14-stonelab-bg-fbfaf8", ":")
                  .concat(u, ":")
                  .concat(I, ":")
                  .concat(c || s.join(","), ":")
                  .concat(E, ":")
                  .concat(k, ":")
                  .concat(R, "x")
                  .concat(C, ":")
                  .concat(j)),
                !o._shareCardComposeCache || !o._shareCardComposeCache[z])
              ) {
                t.next = 24;
                break;
              }
              return t.abrupt("return", o._shareCardComposeCache[z]);
            case 24:
              return (
                (t.next = 26),
                Promise.all([
                  c && !F ? h(c) : Promise.resolve(null),
                  F ? Promise.resolve(null) : w(),
                  i.includeTrayBg || F
                    ? T(i).catch(function () {
                        return null;
                      })
                    : Promise.resolve(null),
                ])
              );
            case 26:
              if (
                ((B = t.sent),
                (U = e(B, 3)),
                (L = U[0]),
                (D = U[1]),
                (Y = U[2]),
                (W = wx.createCanvasContext(u, o)))
              ) {
                t.next = 34;
                break;
              }
              return t.abrupt("return", "");
            case 34:
              if ((W.clearRect(0, 0, R, C), !F)) {
                t.next = 51;
                break;
              }
              return (
                (t.next = 38),
                O(W, o, s, Y, Object.assign({}, i, { width: R, height: C }))
              );
            case 38:
              if (t.sent) {
                t.next = 41;
                break;
              }
              return t.abrupt("return", m);
            case 41:
              return (
                (t.next = 43),
                new Promise(function (e) {
                  return W.draw(!1, function () {
                    setTimeout(e, 16);
                  });
                })
              );
            case 43:
              return (
                (t.next = 45),
                b(o, u, R, C).catch(function () {
                  return "";
                })
              );
            case 45:
              if ((G = t.sent)) {
                t.next = 48;
                break;
              }
              return t.abrupt("return", m);
            case 48:
              return (
                (o._shareCardComposeCache &&
                  "object" === a(o._shareCardComposeCache)) ||
                  (o._shareCardComposeCache = Object.create(null)),
                (o._shareCardComposeCache[z] = G),
                t.abrupt("return", G)
              );
            case 51:
              if (
                (W.setFillStyle("#FFFFFF"),
                W.fillRect(0, 0, R, C),
                W.save(),
                W.translate(_, A),
                !L || !L.path)
              ) {
                t.next = 64;
                break;
              }
              (H =
                i.coverRect && "object" === a(i.coverRect) ? i.coverRect : {}),
                (X = N * p(H.xRatio, "product" === I ? 0.18 : 0.1, 0, 1)),
                (q = N * p(H.yRatio, "product" === I ? 0.1 : 0.05, 0, 1)),
                (V = N * p(H.widthRatio, "product" === I ? 0.64 : 0.8, 0.1, 1)),
                (K =
                  N * p(H.heightRatio, "product" === I ? 0.54 : 0.47, 0.1, 1)),
                f(W, L.path, L.width, L.height, X, q, V, K),
                (t.next = 72);
              break;
            case 64:
              if (!s.length) {
                t.next = 72;
                break;
              }
              return (
                i.includeTrayBg && M(W, Y, N, i),
                (t.next = 68),
                S(W, s, {
                  size: N,
                  beadSize: i.beadSize || i.bead_size,
                  braceletCenterYRatio: i.braceletCenterYRatio,
                  braceletBoxRatio: i.braceletBoxRatio,
                  pageContext: o,
                })
              );
            case 68:
              if (t.sent) {
                t.next = 72;
                break;
              }
              return W.restore(), t.abrupt("return", m);
            case 72:
              return (
                P(W, D, N, {
                  brandYRatio:
                    i.brandYRatio ||
                    ("product" === I ? 0.78 : i.includeTrayBg ? 0.83 : 0.285),
                  logoWidthRatio: i.logoWidthRatio || 0.2,
                }),
                W.restore(),
                (t.next = 76),
                new Promise(function (e) {
                  return W.draw(!1, e);
                })
              );
            case 76:
              return (
                (t.next = 78),
                b(o, u, R, C).catch(function () {
                  return "";
                })
              );
            case 78:
              if ((Z = t.sent)) {
                t.next = 81;
                break;
              }
              return t.abrupt("return", m);
            case 81:
              return (
                (o._shareCardComposeCache &&
                  "object" === a(o._shareCardComposeCache)) ||
                  (o._shareCardComposeCache = Object.create(null)),
                (o._shareCardComposeCache[z] = Z),
                t.abrupt("return", Z)
              );
            case 84:
            case "end":
              return t.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
module.exports = {
  SHARE_CARD_IMAGE_URL: "/assets/share-home-logo.png",
  SHARE_CARD_LOGO_URL: "/assets/SLLOGO-share-safe.png",
  SHARE_CARD_LOGO_FALLBACK_URL: "/assets/share-home-logo.png",
  DEFAULT_SHARE_CARD_SIZE: 1e3,
  DEFAULT_SHARE_CARD_WIDTH: 1e3,
  DEFAULT_SHARE_CARD_HEIGHT: 800,
  composeBraceletShareCard: function (e) {
    return B.apply(this, arguments);
  },
};
