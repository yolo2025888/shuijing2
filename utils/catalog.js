var e = require("../@babel/runtime/helpers/toConsumableArray");
require("../@babel/runtime/helpers/Arrayincludes");
var r = require("../@babel/runtime/helpers/typeof"),
  a = require("../config/env").getRuntimeEnvConfig,
  t = require("./bracelet-config").applyBraceletContract,
  i = a().assetCdnBaseUrl;
function n(e) {
  var r = String(e || "").replace(/^\/+/, "");
  if (!r) return "";
  var a = String(i || "")
    .trim()
    .replace(/\/+$/, "");
  return a ? "".concat(a, "/").concat(r) : "/".concat(r);
}
function s(e) {
  if (!e) return e;
  if (/^https?:\/\//.test(e)) return e;
  var r = (function (e) {
    return "".concat(e || "").replace(/^\.?\//, "");
  })(e);
  return "assets/SLLOGO.svg" === r || "assets_h5/SLLOGO.svg" === r
    ? "/assets/SLLOGO.svg"
    : 0 === r.indexOf("assets/icons/")
    ? "/".concat(r)
    : 0 === r.indexOf("assets_h5/icons/")
    ? "/assets/icons/".concat(r.slice("assets_h5/icons/".length))
    : 0 === r.indexOf("assets_h5/")
    ? n("assets/".concat(r.slice("assets_h5/".length)))
    : 0 === r.indexOf("assets/")
    ? n(r)
    : e;
}
function o(e, r) {
  var a = String(r || "").trim();
  if (a) {
    var t = s(a) || a;
    t && e.indexOf(t) < 0 && e.push(t);
  }
}
function l(e) {
  var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    t = e && "object" === r(e) ? e : {},
    i = t.attrs && "object" === r(t.attrs) ? t.attrs : {},
    n = [],
    s = Array.isArray(t.variants)
      ? t.variants
          .map(function (e) {
            return String(e || "").trim();
          })
          .filter(Boolean)
      : [];
  if (s.length) {
    var l = Math.abs(Math.round(Number(a) || 0)) % s.length;
    o(n, s[l]),
      s.forEach(function (e) {
        return o(n, e);
      });
  }
  return (
    [
      t.previewUrl,
      t.preview_url,
      t.imageUrl,
      t.image_url,
      t.coverUrl,
      t.cover_url,
      t.image,
      t.url,
      i.previewUrl,
      i.preview_url,
      i.imageUrl,
      i.image_url,
      i.coverUrl,
      i.cover_url,
      i.image,
      i.url,
    ].forEach(function (e) {
      return o(n, e);
    }),
    n
  );
}
function u(e) {
  return l(e).length > 0;
}
function c(e, a) {
  var t = e && "object" === r(e) ? e : null,
    i = a && "object" === r(a) ? a : null;
  if (!t) return i ? Object.assign({}, i) : null;
  if (!i) return Object.assign({}, t);
  var n = u(t),
    s = u(i) || !n,
    l = s ? Object.assign({}, t, i) : Object.assign({}, i, t);
  (l.id = String((i && i.id) || (t && t.id) || "").trim()),
    (l.attrs = s
      ? Object.assign({}, t.attrs || {}, i.attrs || {})
      : Object.assign({}, i.attrs || {}, t.attrs || {}));
  var c = [];
  return (
    (s ? [i, t] : [t, i]).forEach(function (e) {
      (Array.isArray(e && e.variants) ? e.variants : []).forEach(function (e) {
        return o(c, e);
      });
    }),
    c.length && (l.variants = c),
    l
  );
}
var g = [],
  m = [],
  d = [],
  f = {},
  p = [],
  v = {
    id: "bg_creamy_porcelain",
    name: "凝脂素瓷",
    type: "img",
    url: s("assets/背景/bg_creamy-Porcelain.webp"),
    autoCrop: !0,
  },
  h = {
    id: "unknown",
    class: "",
    name: "",
    sizeStr: "0mm",
    mm: 10,
    price: 0,
    category: "other",
    isPendant: !1,
    hangsOutward: !1,
    isSpacer: !1,
    layer: 20,
    imgScale: 1,
    gapRatio: 0.97,
    listImgScale: 1,
    listImgUrl: "",
    fitMsg: "",
    visualOffsetX: "",
    visualOffsetY: "",
    variants: [],
  },
  b = {
    geometry: {
      pxPerMm: 2.836,
      trayRadius: 166,
      maxCapacityBracelet: 40,
      maxPerimeterMm: 300,
    },
    simulation: {
      friction: 0.96,
      boundaryBounce: 0.6,
      solverIterations: 2,
      boundaryHitSpeedThreshold: 3,
      boundaryHitVolume: 0.4,
      collisionOverlapThreshold: 1,
      collisionSpeedThreshold: 3,
      collisionVolumeScale: 0.1,
      collisionMaxVolume: 0.8,
    },
    strung: {
      photoRotationSpeed: 0.0025,
      dragFollowLerp: 0.6,
      spreadFactor: 1.2,
      settleLerp: 0.3,
      animEaseFactor: 0.1,
      ringSnapRangeRatio: 0.6,
      ropeLineWidth: 2.5,
      showRopeLine: !1,
    },
    touch: { baseGrabRadius: 35, pendantGrabRadius: 40, removeDistancePx: 15 },
    spawn: {
      xJitterPx: 40,
      yInsetPx: 2,
      forceBase: 1,
      forceRange: 9,
      speedDivisor: 5,
      vxJitterScale: 12,
      vyBase: 15,
      vyScale: 25,
    },
    anim: {
      toggleStrungFrames: 60,
      blindBoxIntervalMs: 80,
      blindBoxMaxCount: 18,
      unstrungForceBase: 8,
      unstrungForceRange: 12,
    },
  },
  y = {},
  S = _(b);
function _(e) {
  try {
    return JSON.parse(JSON.stringify(e));
  } catch (e) {
    return {};
  }
}
function O(e, r, a, t) {
  var i = Number(e);
  if (!Number.isFinite(i)) return r;
  var n = Number.isFinite(a) ? a : -Number.MAX_SAFE_INTEGER,
    s = Number.isFinite(t) ? t : Number.MAX_SAFE_INTEGER;
  return Math.max(n, Math.min(s, i));
}
function x(e, r, a, t) {
  var i = O(e, r, a, t);
  return Math.round(i);
}
function R(e) {
  return e && "object" === r(e) && !Array.isArray(e) ? e : {};
}
function w(e) {
  var r = _(b),
    a = R(e),
    t = R(a.geometry);
  (r.geometry.pxPerMm = O(t.pxPerMm, r.geometry.pxPerMm, 1.5, 10)),
    (r.geometry.trayRadius = O(t.trayRadius, r.geometry.trayRadius, 80, 500)),
    (r.geometry.maxCapacityBracelet = x(
      t.maxCapacityBracelet,
      r.geometry.maxCapacityBracelet,
      1,
      200
    )),
    (r.geometry.maxPerimeterMm = Math.min(
      x(t.maxPerimeterMm, r.geometry.maxPerimeterMm, 50, 2e3),
      b.geometry.maxPerimeterMm
    ));
  var i = R(a.simulation);
  (r.simulation.friction = O(i.friction, r.simulation.friction, 0.1, 1.2)),
    (r.simulation.boundaryBounce = O(
      i.boundaryBounce,
      r.simulation.boundaryBounce,
      0,
      1.2
    )),
    (r.simulation.solverIterations = x(
      i.solverIterations,
      r.simulation.solverIterations,
      1,
      6
    )),
    (r.simulation.boundaryHitSpeedThreshold = O(
      i.boundaryHitSpeedThreshold,
      r.simulation.boundaryHitSpeedThreshold,
      0,
      100
    )),
    (r.simulation.boundaryHitVolume = O(
      i.boundaryHitVolume,
      r.simulation.boundaryHitVolume,
      0,
      1
    )),
    (r.simulation.collisionOverlapThreshold = O(
      i.collisionOverlapThreshold,
      r.simulation.collisionOverlapThreshold,
      0,
      100
    )),
    (r.simulation.collisionSpeedThreshold = O(
      i.collisionSpeedThreshold,
      r.simulation.collisionSpeedThreshold,
      0,
      100
    )),
    (r.simulation.collisionVolumeScale = O(
      i.collisionVolumeScale,
      r.simulation.collisionVolumeScale,
      0,
      1
    )),
    (r.simulation.collisionMaxVolume = O(
      i.collisionMaxVolume,
      r.simulation.collisionMaxVolume,
      0,
      1
    ));
  var n = R(a.strung);
  (r.strung.photoRotationSpeed = O(
    n.photoRotationSpeed,
    r.strung.photoRotationSpeed,
    0,
    0.1
  )),
    (r.strung.dragFollowLerp = O(
      n.dragFollowLerp,
      r.strung.dragFollowLerp,
      0,
      1
    )),
    (r.strung.spreadFactor = O(n.spreadFactor, r.strung.spreadFactor, 0, 10)),
    (r.strung.settleLerp = O(n.settleLerp, r.strung.settleLerp, 0, 1)),
    (r.strung.animEaseFactor = O(
      n.animEaseFactor,
      r.strung.animEaseFactor,
      0,
      1
    )),
    (r.strung.ringSnapRangeRatio = O(
      n.ringSnapRangeRatio,
      r.strung.ringSnapRangeRatio,
      0,
      2
    )),
    (r.strung.ropeLineWidth = O(
      n.ropeLineWidth,
      r.strung.ropeLineWidth,
      0,
      20
    )),
    (r.strung.showRopeLine = (function (e, r) {
      if (!0 === e || !1 === e) return e;
      if (null == e || "" === e) return !!r;
      var a = String(e).trim().toLowerCase();
      return (
        "1" === a ||
        "true" === a ||
        "yes" === a ||
        "on" === a ||
        ("0" !== a && "false" !== a && "no" !== a && "off" !== a && !!r)
      );
    })(n.showRopeLine, r.strung.showRopeLine));
  var s = R(a.touch);
  (r.touch.baseGrabRadius = O(
    s.baseGrabRadius,
    r.touch.baseGrabRadius,
    1,
    200
  )),
    (r.touch.pendantGrabRadius = O(
      s.pendantGrabRadius,
      r.touch.pendantGrabRadius,
      1,
      200
    )),
    (r.touch.removeDistancePx = O(
      s.removeDistancePx,
      r.touch.removeDistancePx,
      0,
      300
    ));
  var o = R(a.spawn);
  (r.spawn.xJitterPx = O(o.xJitterPx, r.spawn.xJitterPx, 0, 400)),
    (r.spawn.yInsetPx = O(o.yInsetPx, r.spawn.yInsetPx, 0, 200)),
    (r.spawn.forceBase = O(o.forceBase, r.spawn.forceBase, 0, 50)),
    (r.spawn.forceRange = O(o.forceRange, r.spawn.forceRange, 0, 50)),
    (r.spawn.speedDivisor = O(o.speedDivisor, r.spawn.speedDivisor, 0.1, 100)),
    (r.spawn.vxJitterScale = O(o.vxJitterScale, r.spawn.vxJitterScale, 0, 100)),
    (r.spawn.vyBase = O(o.vyBase, r.spawn.vyBase, 0, 100)),
    (r.spawn.vyScale = O(o.vyScale, r.spawn.vyScale, 0, 100));
  var l = R(a.anim);
  return (
    (r.anim.toggleStrungFrames = x(
      l.toggleStrungFrames,
      r.anim.toggleStrungFrames,
      1,
      600
    )),
    (r.anim.blindBoxIntervalMs = x(
      l.blindBoxIntervalMs,
      r.anim.blindBoxIntervalMs,
      1,
      2e3
    )),
    (r.anim.blindBoxMaxCount = x(
      l.blindBoxMaxCount,
      r.anim.blindBoxMaxCount,
      1,
      200
    )),
    (r.anim.unstrungForceBase = O(
      l.unstrungForceBase,
      r.anim.unstrungForceBase,
      0,
      100
    )),
    (r.anim.unstrungForceRange = O(
      l.unstrungForceRange,
      r.anim.unstrungForceRange,
      0,
      100
    )),
    r
  );
}
function I(e) {
  return y[e] ? t(y[e]) : t(Object.assign({}, h, { id: String(e || h.id) }));
}
function B(r, a) {
  r.splice.apply(r, [0, r.length].concat(e(a || [])));
}
function M(e, r) {
  Object.keys(e).forEach(function (r) {
    delete e[r];
  }),
    Object.keys(r || {}).forEach(function (a) {
      e[a] = r[a];
    });
}
function C(e) {
  return (e || []).map(function (e) {
    var a =
        e && "object" === r(e.attrs) && !Array.isArray(e.attrs) ? e.attrs : {},
      i = function () {
        for (var e = 0; e < arguments.length; e += 1) {
          var r = String(
            (e < 0 || arguments.length <= e ? void 0 : arguments[e]) || ""
          ).trim();
          if (r) return r;
        }
        return "";
      },
      n =
        s(
          i(
            e && e.listImgUrl,
            e && e.list_img_url,
            a.listImgUrl,
            a.list_img_url
          )
        ) || "",
      o =
        s(
          i(e && e.previewUrl, e && e.preview_url, a.previewUrl, a.preview_url)
        ) || "",
      l =
        s(i(e && e.imageUrl, e && e.image_url, a.imageUrl, a.image_url)) || "",
      u =
        s(i(e && e.coverUrl, e && e.cover_url, a.coverUrl, a.cover_url)) || "",
      c =
        s(
          i(
            e && e.displayCardImage,
            e && e.display_card_image,
            a.displayCardImage,
            a.display_card_image
          )
        ) || "",
      g =
        s(
          i(
            e && e.cardImageUrl,
            e && e.card_image_url,
            e && e.cardImage,
            e && e.card_image,
            a.cardImageUrl,
            a.card_image_url,
            a.cardImage,
            a.card_image
          )
        ) || "",
      m =
        s(
          i(
            e && e.thumbUrl,
            e && e.thumb_url,
            e && e.thumbnailUrl,
            e && e.thumbnail_url,
            a.thumbUrl,
            a.thumb_url,
            a.thumbnailUrl,
            a.thumbnail_url
          )
        ) || "",
      d = function (e) {
        return !0 === e || !1 === e
          ? e
          : 1 === Number(e || 0) ||
              "true" ===
                ""
                  .concat(e || "")
                  .trim()
                  .toLowerCase();
      },
      f = Object.assign({}, e, {
        isPendant: d(e && e.isPendant),
        hangsOutward: d(
          e && void 0 !== e.hangsOutward ? e.hangsOutward : a.hangsOutward
        ),
        isSpacer: d(e && void 0 !== e.isSpacer ? e.isSpacer : a.isSpacer),
        gapRatio: O(
          e && void 0 !== e.gapRatio ? e.gapRatio : a.gapRatio,
          h.gapRatio,
          0.01,
          10
        ),
        imgScale: O(
          e && void 0 !== e.imgScale ? e.imgScale : a.imgScale,
          h.imgScale,
          0.01,
          10
        ),
        listImgScale: O(
          e && void 0 !== e.listImgScale ? e.listImgScale : a.listImgScale,
          h.listImgScale,
          0.01,
          10
        ),
        listImgUrl: n,
        previewUrl: o,
        imageUrl: l,
        coverUrl: u,
        displayCardImage: c,
        display_card_image: c,
        cardImageUrl: g,
        card_image_url: g,
        thumbUrl: m,
        thumbnailUrl: m,
        fitMsg: String(
          e && void 0 !== e.fitMsg ? e.fitMsg : a.fitMsg || ""
        ).trim(),
        visualOffsetX: String(
          e && void 0 !== e.visualOffsetX
            ? e.visualOffsetX
            : a.visualOffsetX || ""
        ),
        visualOffsetY: String(
          e && void 0 !== e.visualOffsetY
            ? e.visualOffsetY
            : a.visualOffsetY || ""
        ),
        attrs: {
          class: String((e && e.class) || a.class || ""),
          gapRatio: O(
            e && void 0 !== e.gapRatio ? e.gapRatio : a.gapRatio,
            h.gapRatio,
            0.01,
            10
          ),
          imgScale: O(
            e && void 0 !== e.imgScale ? e.imgScale : a.imgScale,
            h.imgScale,
            0.01,
            10
          ),
          listImgScale: O(
            e && void 0 !== e.listImgScale ? e.listImgScale : a.listImgScale,
            h.listImgScale,
            0.01,
            10
          ),
          listImgUrl: n,
          previewUrl: o,
          imageUrl: l,
          coverUrl: u,
          displayCardImage: c,
          display_card_image: c,
          cardImageUrl: g,
          card_image_url: g,
          thumbUrl: m,
          thumbnailUrl: m,
          fitMsg: String(
            e && void 0 !== e.fitMsg ? e.fitMsg : a.fitMsg || ""
          ).trim(),
          visualOffsetX: String(
            e && void 0 !== e.visualOffsetX
              ? e.visualOffsetX
              : a.visualOffsetX || ""
          ),
          visualOffsetY: String(
            e && void 0 !== e.visualOffsetY
              ? e.visualOffsetY
              : a.visualOffsetY || ""
          ),
          hangsOutward: d(
            e && void 0 !== e.hangsOutward ? e.hangsOutward : a.hangsOutward
          ),
          isSpacer: d(e && void 0 !== e.isSpacer ? e.isSpacer : a.isSpacer),
        },
        variants: (Array.isArray(e && e.variants) ? e.variants : []).map(s),
      });
    return t(f);
  });
}
function U(e, r) {
  var a = String((e && e.id) || "").toLowerCase(),
    t = String((e && e.url) || "").toLowerCase();
  return "bg_1" === a || "bg_walnut" === a || t.indexOf("bg_walnut") >= 0
    ? 0
    : "bg_skyblue" === a || "bg_4" === a || t.indexOf("bg_skyblue") >= 0
    ? 1
    : "bg_btsj" === a ||
      "bg_celadon" === a ||
      "bg_3" === a ||
      t.indexOf("bg_btsj") >= 0 ||
      t.indexOf("bg_celadon") >= 0
    ? 2
    : "bg_kiln" === a || "bg_5" === a || t.indexOf("bg_kiln") >= 0
    ? 3
    : "bg_creamy_porcelain" === a ||
      "bg_2" === a ||
      t.indexOf("bg_creamy-porcelain") >= 0
    ? 4
    : "bg_rain_washed_azure" === a ||
      "bg_6" === a ||
      t.indexOf("bg_rain-washed") >= 0
    ? 5
    : 100 + r;
}
function E() {
  Object.keys(y).forEach(function (e) {
    delete y[e];
  }),
    m.forEach(function (e) {
      y[e.id] = e;
    });
}
module.exports = {
  ASSET_CDN_BASE: i,
  TRAY_BGS: g,
  BEAD_TYPES: m,
  MAIN_CATEGORIES: d,
  SUB_CATEGORIES: f,
  PRESETS: p,
  PHYSICS_CONFIG: S,
  getTrayBg: function (e) {
    return (
      (g.length &&
        g[
          (function (e, r) {
            return r ? ((e % r) + r) % r : 0;
          })(e, g.length)
        ]) ||
      v
    );
  },
  getBeadType: I,
  getKnownBeadType: function (e) {
    var r = String(e || "").trim();
    return r && y[r] ? t(y[r]) : null;
  },
  getPhysicsConfig: function () {
    return S && "object" === r(S) ? S : _(b);
  },
  getStructure: function (e) {
    var r = {};
    return (
      (e || []).forEach(function (e) {
        r[e] = (r[e] || 0) + 1;
      }),
      Object.keys(r).map(function (e) {
        var a = I(e);
        return Object.assign({}, a, {
          count: r[e],
          sum: Number(a.price || 0) * r[e],
        });
      })
    );
  },
  checkCopyright: function (e, r) {
    if (!r || !r.source_designer_id) return null;
    if (!Array.isArray(e) || "string" != typeof e[0]) return null;
    var a = r.original_pattern || [],
      t = {};
    a.forEach(function (e) {
      t[e] = (t[e] || 0) + 1;
    });
    var i = {};
    e.forEach(function (e) {
      i[e] = (i[e] || 0) + 1;
    });
    var n = 0;
    Object.keys(i).forEach(function (e) {
      t[e] && (n += Math.min(i[e], t[e]));
    });
    var s = (a.length ? n / a.length : 0) >= 0.8,
      o = !r.has_core_pendant || e.includes(r.original_pendant_id);
    return s && o ? r.source_designer_id : null;
  },
  resolveAssetPath: s,
  collectMaterialImageCandidates: l,
  materialHasRenderableImage: u,
  mergeMaterialPreservingImages: c,
  resolveMaterialImageUrl: function (e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return l(e, r)[0] || "";
  },
  applyRuntimeCatalogSnapshot: function (e) {
    if (e && "object" === r(e)) {
      if (
        (Array.isArray(e.trayBgs) &&
          B(
            g,
            (e.trayBgs || [])
              .map(function (e, r) {
                return Object.assign({}, e, { url: s(e.url), __sortIndex: r });
              })
              .sort(function (e, r) {
                return U(e, e.__sortIndex) - U(r, r.__sortIndex);
              })
              .map(function (e) {
                var r = Object.assign({}, e);
                return delete r.__sortIndex, r;
              })
          ),
        Array.isArray(e.beadTypes))
      ) {
        var a = Object.create(null);
        m.forEach(function (e) {
          var r = String((e && e.id) || "").trim();
          r && !a[r] && (a[r] = e);
        });
        var t = C(e.beadTypes)
          .map(function (e) {
            return c(a[String((e && e.id) || "").trim()], e);
          })
          .filter(Boolean);
        B(m, t);
      }
      Array.isArray(e.mainCategories) && B(d, e.mainCategories.slice()),
        e.subCategories &&
          "object" === r(e.subCategories) &&
          M(f, Object.assign({}, e.subCategories)),
        Array.isArray(e.presets) && B(p, e.presets.slice()),
        e.physicsConfig &&
          "object" === r(e.physicsConfig) &&
          M(S, w(e.physicsConfig)),
        E();
    }
  },
  mergeRuntimeBeadTypes: function (e) {
    var r = C(e || []);
    if (r.length) {
      var a = Object.create(null),
        t = [];
      m.forEach(function (e) {
        if (e && e.id) {
          var r = String(e.id);
          a[r] || ((a[r] = e), t.push(r));
        }
      }),
        r.forEach(function (e) {
          if (e && e.id) {
            var r = String(e.id);
            a[r] || t.push(r), (a[r] = c(a[r], e));
          }
        }),
        B(
          m,
          t
            .map(function (e) {
              return a[e];
            })
            .filter(Boolean)
        ),
        E();
    }
  },
};
