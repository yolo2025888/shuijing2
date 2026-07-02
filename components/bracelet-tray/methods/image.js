var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../../@babel/runtime/helpers/typeof"),
  n = require("../../../utils/assetCache"),
  o = n.getCachedAssetPath,
  i = n.cacheAssetPath,
  l = n.invalidateCachedAssetPath,
  s = n.normalizeAssetCacheKey,
  c = require("../../../utils/catalog"),
  d = c.collectMaterialImageCandidates,
  u = c.getBeadType,
  h = require("../../../utils/diyRenderPlan").getRenderPlanItemForPattern,
  m = require("../../../utils/logger"),
  f = require("./shadow-classifier").resolveBeadShadowKind,
  g = 1,
  p = 0.95,
  b = 0.23,
  y = 0.42,
  v = 0.95,
  w = 0.28,
  S = 0.52,
  C = 0.95,
  M = 0.08,
  R = 0.64,
  P = 0.56,
  x = 0.4;
function A(e) {
  var a = Math.max(1, Math.round(Number(e) || 1));
  return Math.max(1, 8 * Math.ceil(a / 8));
}
function N(e) {
  var a = Math.max(1, Math.round(Number(e) || 1));
  return Math.max(1, 4 * Math.ceil(a / 4));
}
function T() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  if ("photo" === e.mode) {
    var t = String((a && a.deviceQualityTier) || "").toLowerCase();
    return "low" === t ? 4 : "mid" === t ? 4.5 : 5;
  }
  var r = Number(a && a.canvasScaleX),
    n = Number(a && a.canvasScaleY),
    o = Math.max(
      Number.isFinite(r) && r > 0 ? r : 0,
      Number.isFinite(n) && n > 0 ? n : 0
    );
  return o ? Math.min(4, Math.max(3, Math.ceil(4 * (o + 0.25)) / 4)) : 3;
}
function _() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
    a = String((e && e.deviceQualityTier) || "").toLowerCase();
  return "low" === a ? 48 : "mid" === a ? 72 : 96;
}
function k(e) {
  return new Promise(function (a) {
    setTimeout(a, Math.max(0, Number(e) || 0));
  });
}
function B(e) {
  var a = Math.floor(Number(e));
  return !Number.isFinite(a) || a <= 0 ? 4 : Math.max(1, Math.min(8, a));
}
function I() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  if (e.cancelToken && e.cancelToken.cancelled) return !0;
  if ("function" == typeof e.shouldStop)
    try {
      return !0 === e.shouldStop();
    } catch (e) {
      return !1;
    }
  return !1;
}
function D(e) {
  var a = Number(e);
  return Number.isFinite(a) && a > 0 ? a : 0;
}
function F(e) {
  var a = e && e._renderAssetWarmupPauseReasons;
  return (
    !(!a || "object" !== r(a)) &&
    !!(
      a["manual-bead-action"] ||
      a["strung-action"] ||
      a["blindbox-playback"] ||
      a["random-blindbox"]
    )
  );
}
function G(e) {
  var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if (!0 === a.ignoreFpsGuard) return !1;
  if (!e || "object" !== r(e)) return !1;
  if (F(e)) return !0;
  var t = e.getPerfNow ? e.getPerfNow() : Date.now();
  return (
    Number(e._motionFrameBudgetStressedUntil) > t ||
    !(!e.dragState || !e.dragState.active) ||
    Number(e.animFrameRef) > 0 ||
    !!e.blindBoxTimer
  );
}
function O(e) {
  var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return (
    !0 !== a.ignorePause &&
    !0 !== a.force &&
    !(!e || "object" !== r(e)) &&
    ("function" == typeof e.isRenderAssetWarmupPaused
      ? e.isRenderAssetWarmupPaused()
      : !!e._renderAssetWarmupPaused)
  );
}
function j(e) {
  var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
    r = a && a.cancelToken;
  return (
    !(!r || !r.cancelled) ||
    (null !== t &&
      Number((e && e._renderAssetWarmupToken) || 0) !== Number(t)) ||
    (!G(e, a) && O(e, a) && !1 !== a.cancelWhenPaused)
  );
}
function q(e) {
  var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return G(e, a);
}
function W(e, a) {
  var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    r = Array.isArray(a) ? a : [],
    n = r
      .map(function (e) {
        return "string" == typeof e
          ? e
          : String(
              (e && (e.uid || e.mat || e.id || e.imgUrl || e.img_url)) || ""
            ).trim();
      })
      .filter(Boolean);
  return ""
    .concat(e, ":")
    .concat(String(t.scope || t.mode || "default"), ":")
    .concat(n.join("|"));
}
function K(e) {
  var a = Math.max(1, Math.round(Number(e) || 1));
  return Math.max(1, 4 * Math.ceil(a / 4));
}
function z(e) {
  return !!f(e).usesShapeShadow;
}
function E(e, a) {
  var t = String(e || "").toLowerCase();
  return (
    !!t &&
    a.some(function (e) {
      return t.indexOf(e) >= 0;
    })
  );
}
function U(e) {
  var a = e && e.attrs && "object" === r(e.attrs) ? e.attrs : {},
    t = [
      e && e.mat,
      e && e.id,
      e && e.name,
      e && e.class,
      e && e.category,
      e && (e.imgUrl || e.img_url),
      a.material,
      a.color,
      a.tone,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
  return E(t, [
    "crystal",
    "quartz",
    "clear",
    "transparent",
    "shuijing",
    "bai",
    "水晶",
    "白",
    "透明",
  ])
    ? {
        key: "crystal",
        edgeAlpha: 0.012,
        highlightAlpha: 0.072,
        highlightMidAlpha: 0.03,
        innerGlowAlpha: 0.026,
      }
    : E(t, ["jade", "agate", "yu", "manao", "玉", "瑪瑙"])
    ? {
        key: "stone",
        edgeAlpha: 0.022,
        highlightAlpha: 0.052,
        highlightMidAlpha: 0.02,
        innerGlowAlpha: 0.01,
      }
    : E(t, [
        "gold",
        "silver",
        "metal",
        "brass",
        "jin",
        "yin",
        "金",
        "银",
        "銀",
        "铜",
      ])
    ? {
        key: "metal",
        edgeAlpha: 0.026,
        highlightAlpha: 0.042,
        highlightMidAlpha: 0.014,
        innerGlowAlpha: 0,
      }
    : E(t, ["wood", "matte", "mu", "木", "哑光"])
    ? {
        key: "matte",
        edgeAlpha: 0.02,
        highlightAlpha: 0.03,
        highlightMidAlpha: 0.01,
        innerGlowAlpha: 0,
      }
    : {
        key: "default",
        edgeAlpha: 0.018,
        highlightAlpha: 0.05,
        highlightMidAlpha: 0.018,
        innerGlowAlpha: 0,
      };
}
function Q(e) {
  var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  return d(e, a);
}
module.exports = {
  collectBeadRenderImageUrls: Q,
  resolveBeadRenderImageUrl: function (e) {
    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      t = Q(e, a),
      n = t[0] || "";
    if (n && this && "object" === r(this)) {
      (this._beadImageFallbackSrcMap &&
        "object" === r(this._beadImageFallbackSrcMap)) ||
        (this._beadImageFallbackSrcMap = Object.create(null));
      var o = t.slice(1).filter(function (e) {
        return e && e !== n;
      });
      o.length && (this._beadImageFallbackSrcMap[n] = o);
    }
    return n;
  },
  setResourceScheduler: function (e) {
    e && "function" == typeof e.enqueue && (this.resourceScheduler = e);
  },
  scheduleRenderResourceTask: function (e, a) {
    var t = e && "object" === r(e) ? e : {},
      n = "function" == typeof t.run ? t.run : a;
    return "function" != typeof n
      ? Promise.resolve(!1)
      : this.resourceScheduler &&
        "function" == typeof this.resourceScheduler.enqueue
      ? this.resourceScheduler.enqueue(Object.assign({}, t, { run: n }))
      : Promise.resolve().then(n);
  },
  setRenderAssetWarmupPaused: function (e) {
    var a =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : "default";
    (this._renderAssetWarmupPauseReasons &&
      "object" === r(this._renderAssetWarmupPauseReasons)) ||
      (this._renderAssetWarmupPauseReasons = Object.create(null));
    var t = String(a || "default").trim() || "default";
    !0 === e
      ? (this._renderAssetWarmupPauseReasons[t] = !0)
      : delete this._renderAssetWarmupPauseReasons[t],
      (this._renderAssetWarmupPaused =
        Object.keys(this._renderAssetWarmupPauseReasons).length > 0),
      (this._renderAssetWarmupToken =
        (Number(this._renderAssetWarmupToken) || 0) + 1);
  },
  isRenderAssetWarmupPaused: function () {
    if (this._renderAssetWarmupPaused) return !0;
    var e = this._renderAssetWarmupPauseReasons;
    return !!(e && "object" === r(e) && Object.keys(e).length > 0);
  },
  getImageFallbackSrc: function (e) {
    var a = this._beadImageFallbackSrcMap,
      t = a && a[e];
    if (!Array.isArray(t) || !t.length) return "";
    for (; t.length; ) {
      var r = String(t.shift() || "").trim();
      if (r && r !== e) return r;
    }
    return "";
  },
  recoverBeadImage: function (e) {
    if (!e || "object" !== r(e)) return !1;
    var a = Date.now();
    if (Number(e.__imageRecoveryNextAt || 0) > a) return !1;
    var t = [],
      n = function (e) {
        return (
          (a = t),
          void ((r = String(e || "").trim()) && a.indexOf(r) < 0 && a.push(r))
        );
        var a, r;
      };
    (Array.isArray(e.__imageCandidates) ? e.__imageCandidates : []).forEach(n);
    var o = e.id ? u(e.id) : null;
    o &&
      "function" == typeof this.collectBeadRenderImageUrls &&
      this.collectBeadRenderImageUrls(o, 0).forEach(n);
    var i = String(e.imgUrl || e.img_url || "").trim();
    i && n(i);
    for (
      var l = String(e.__manualVariantTargetImgUrl || "").trim(),
        s = String(e.__manualVariantPromotionState || "").trim(),
        c = 0;
      c < t.length;
      c += 1
    ) {
      var d = t[c];
      if (!l || d !== l || ("timeout_soft" !== s && "abandoned" !== s)) {
        var h = this.imageMeta && this.imageMeta[d],
          m = this._imageRetryMeta && this._imageRetryMeta[d];
        if (!(h && h.failed && m && Number(m.nextRetryAt || 0) > a))
          return (
            (e.imgUrl = d),
            (e.img_url = d),
            this.ensureImage(d),
            (e.__imageRecoveryNextAt = a + 1200),
            !0
          );
      }
    }
    return (e.__imageRecoveryNextAt = a + 1200), !1;
  },
  createAccessoryShadowCanvas: function (e, a) {
    var t = Math.max(1, Math.round(e)),
      r = Math.max(1, Math.round(a)),
      n = null;
    try {
      return (
        "undefined" != typeof wx &&
        "function" == typeof wx.createOffscreenCanvas
          ? (n = wx.createOffscreenCanvas({ type: "2d", width: t, height: r }))
          : this.beadCanvas &&
            "function" == typeof this.beadCanvas.createOffscreenCanvas &&
            (n = this.beadCanvas.createOffscreenCanvas(t, r)),
        n && "function" == typeof n.getContext
          ? ((n.width = t), (n.height = r), n)
          : null
      );
    } catch (e) {
      return m.warn("Accessory shadow canvas unavailable", e), null;
    }
  },
  getAccessoryShapeShadow: function (e, a, r, n) {
    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    if (!(e && a && a.width > 0 && a.height > 0)) return null;
    var i = A(r),
      l = A(n),
      s = o.variant || (!0 === o.soft ? "soft-contour" : "hard-contour"),
      c = ""
        .concat(e, "|")
        .concat(i, "x")
        .concat(l, "|")
        .concat(s, "|")
        .concat("shape-contour-v8-body-soft");
    if (
      (this.accessoryShadowCache ||
        ((this.accessoryShadowCache = {}),
        (this.accessoryShadowCacheKeys = [])),
      this.accessoryShadowCache[c])
    )
      return this.accessoryShadowCache[c];
    if (!1 === o.allowBuild) return null;
    var d = this.createAccessoryShadowCanvas(i, l);
    if (!d) return null;
    var u = d.getContext("2d");
    if (!u) return null;
    var h = this.getPerfNow ? this.getPerfNow() : Date.now();
    try {
      if ((u.clearRect(0, 0, i, l), "body-soft" === s)) {
        var f = [
            [-3, 0],
            [3, 0],
            [0, -3],
            [0, 3],
            [-2, -2],
            [2, -2],
            [-2, 2],
            [2, 2],
          ],
          g = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1],
          ];
        (u.globalAlpha = 0.04),
          f.forEach(function (e) {
            var r = t(e, 2),
              n = r[0],
              o = r[1];
            return u.drawImage(a, n, o, i, l);
          }),
          (u.globalAlpha = 0.1),
          g.forEach(function (e) {
            var r = t(e, 2),
              n = r[0],
              o = r[1];
            return u.drawImage(a, n, o, i, l);
          }),
          (u.globalAlpha = 0.42),
          u.drawImage(a, 0, 0, i, l),
          (u.globalAlpha = 1);
      } else if ("photo-body" === s) {
        var p = [
          [-1, 0],
          [1, 0],
          [0, -1],
          [0, 1],
          [-1, -1],
          [1, -1],
          [-1, 1],
          [1, 1],
        ];
        (u.globalAlpha = 0.26),
          p.forEach(function (e) {
            var r = t(e, 2),
              n = r[0],
              o = r[1];
            return u.drawImage(a, n, o, i, l);
          }),
          (u.globalAlpha = 0.82),
          u.drawImage(a, 0, 0, i, l),
          (u.globalAlpha = 1);
      } else if ("photo-contour" === s || "photo-contour-soft" === s) {
        var b = "photo-contour-soft" === s,
          y = b ? 4 : 2,
          v = b ? 2 : 1,
          w = [
            [-y, 0],
            [y, 0],
            [0, -y],
            [0, y],
            [-y, -y],
            [y, -y],
            [-y, y],
            [y, y],
          ],
          S = [
            [-v, 0],
            [v, 0],
            [0, -v],
            [0, v],
            [-v, -v],
            [v, -v],
            [-v, v],
            [v, v],
          ];
        (u.globalAlpha = b ? 0.06 : 0.11),
          w.forEach(function (e) {
            var r = t(e, 2),
              n = r[0],
              o = r[1];
            return u.drawImage(a, n, o, i, l);
          }),
          (u.globalAlpha = b ? 0.16 : 0.3),
          S.forEach(function (e) {
            var r = t(e, 2),
              n = r[0],
              o = r[1];
            return u.drawImage(a, n, o, i, l);
          }),
          (u.globalAlpha = b ? 0.05 : 0.08),
          u.drawImage(a, 0, 0, i, l),
          (u.globalCompositeOperation = "destination-out"),
          (u.globalAlpha = b ? 0.9 : 0.96),
          u.drawImage(a, 0, 0, i, l),
          (u.globalCompositeOperation = "source-over"),
          (u.globalAlpha = 1);
      } else if ("soft-contour" === s) {
        var C = [
            [-3, 0],
            [3, 0],
            [0, -3],
            [0, 3],
            [-2, -2],
            [2, -2],
            [-2, 2],
            [2, 2],
          ],
          M = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1],
          ];
        (u.globalAlpha = 0.045),
          C.forEach(function (e) {
            var r = t(e, 2),
              n = r[0],
              o = r[1];
            return u.drawImage(a, n, o, i, l);
          }),
          (u.globalAlpha = 0.145),
          M.forEach(function (e) {
            var r = t(e, 2),
              n = r[0],
              o = r[1];
            return u.drawImage(a, n, o, i, l);
          }),
          (u.globalAlpha = 0.24),
          u.drawImage(a, 0, 0, i, l),
          (u.globalAlpha = 1);
      } else
        "soft" === s
          ? ((u.globalAlpha = 0.3),
            u.drawImage(a, -1, 0, i, l),
            u.drawImage(a, 1, 0, i, l),
            u.drawImage(a, 0, -1, i, l),
            u.drawImage(a, 0, 1, i, l),
            (u.globalAlpha = 1),
            u.drawImage(a, 0, 0, i, l))
          : u.drawImage(a, 0, 0, i, l);
      (u.globalCompositeOperation = "source-in"),
        (u.fillStyle = "#000000"),
        u.fillRect(0, 0, i, l),
        (u.globalCompositeOperation = "source-over");
    } catch (e) {
      return m.warn("Accessory shape shadow build failed", e), null;
    }
    for (
      "function" == typeof this.recordDiyPerf &&
        this.recordDiyPerf(
          "accessory-shadow-build",
          (this.getPerfNow ? this.getPerfNow() : Date.now()) - h,
          { mode: s, width: i, height: l }
        ),
        this.accessoryShadowCache[c] = d,
        this.accessoryShadowCacheKeys.push(c);
      this.accessoryShadowCacheKeys.length > 128;

    ) {
      var R = this.accessoryShadowCacheKeys.shift();
      R && delete this.accessoryShadowCache[R];
    }
    return d;
  },
  getAccessoryContactShadowTemplate: function (e) {
    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      t = K(Math.max(8, Number(e) || 8)),
      r = "contact|".concat(t);
    if (
      (this.accessoryContactShadowCache ||
        ((this.accessoryContactShadowCache = {}),
        (this.accessoryContactShadowCacheKeys = [])),
      this.accessoryContactShadowCache[r])
    )
      return this.accessoryContactShadowCache[r];
    if (!1 === a.allowBuild) return null;
    var n = Math.max(8, Math.ceil(0.52 * t)),
      o = Math.max(5, Math.ceil(0.24 * t)),
      i = this.createAccessoryShadowCanvas(n, o);
    if (!i) return null;
    var l = i.getContext("2d");
    if (!l) return null;
    try {
      l.clearRect(0, 0, n, o),
        l.save(),
        l.translate(n / 2, o / 2),
        l.scale(1, 0.58);
      var s = Math.max(n, o) / 2,
        c = l.createRadialGradient(0, 0, 0.08 * s, 0, 0, s);
      c.addColorStop(0, "rgba(0,0,0,1)"),
        c.addColorStop(0.52, "rgba(0,0,0,0.46)"),
        c.addColorStop(1, "rgba(0,0,0,0)"),
        (l.fillStyle = c),
        l.beginPath(),
        l.arc(0, 0, s, 0, 2 * Math.PI),
        l.fill(),
        l.restore();
    } catch (e) {
      return m.warn("Accessory contact shadow build failed", e), null;
    }
    var d = { canvas: i, width: n, height: o };
    for (
      this.accessoryContactShadowCache[r] = d,
        this.accessoryContactShadowCacheKeys.push(r);
      this.accessoryContactShadowCacheKeys.length > 32;

    ) {
      var u = this.accessoryContactShadowCacheKeys.shift();
      u && delete this.accessoryContactShadowCache[u];
    }
    return d;
  },
  getBeadShadowTemplate: function (e) {
    var a =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "interactive",
      t = Math.max(1, Number(e) || 1),
      r = Math.max(1, 4 * Math.ceil(t / 4)),
      n = "loose-interactive" === a,
      o =
        "photo" === a || "settled" === a
          ? "high"
          : "strung-dom" === a
          ? "dom"
          : "fast",
      i = n ? "loose-fast" : o,
      l = "normal",
      s = t.toFixed(2),
      c = ""
        .concat(r, "|")
        .concat(s, "|")
        .concat(i, "|")
        .concat(l, "|")
        .concat("runtime-compact-deeper-shadow-v44");
    if (
      (this.beadShadowTemplateCache ||
        ((this.beadShadowTemplateCache = {}),
        (this.beadShadowTemplateCacheKeys = [])),
      this.beadShadowTemplateCache[c])
    )
      return this.beadShadowTemplateCache[c];
    var d = t * g,
      u = Math.ceil(3.15 * d),
      h = u / 2,
      f = this.createAccessoryShadowCanvas(u, u);
    if (!f) return null;
    var A = f.getContext("2d");
    if (!A) return null;
    var N = this.getPerfNow ? this.getPerfNow() : Date.now();
    try {
      A.clearRect(0, 0, u, u);
      var T = "high" === o,
        _ = "dom" === o,
        k = 1,
        B = 1,
        I = _ ? 0.66 : 1.06,
        D = _ ? 0.82 : 1,
        F = d * p,
        G = A.createRadialGradient(h, h, 0, h, h, F);
      G.addColorStop(
        0,
        "rgba(0,0,0,".concat(
          T ? (0.42 * k).toFixed(3) : (0.32 * k * I).toFixed(3),
          ")"
        )
      ),
        G.addColorStop(
          0.2,
          "rgba(0,0,0,".concat(
            T ? (0.32 * k).toFixed(3) : (0.26 * k * I).toFixed(3),
            ")"
          )
        ),
        G.addColorStop(
          0.42,
          "rgba(0,0,0,".concat(
            T ? (0.23 * k).toFixed(3) : (0.2 * k * D).toFixed(3),
            ")"
          )
        ),
        G.addColorStop(
          0.68,
          "rgba(0,0,0,".concat(
            T ? (0.12 * k).toFixed(3) : (0.12 * k * D).toFixed(3),
            ")"
          )
        ),
        G.addColorStop(1, "rgba(0,0,0,0)"),
        (A.fillStyle = G),
        A.beginPath(),
        A.arc(h, h, F, 0, 2 * Math.PI),
        A.fill();
      var O = h + d * b,
        j = h + d * y,
        q = d * v,
        W = A.createRadialGradient(O, j, 0.16 * d, O, j, q);
      W.addColorStop(0, T ? "rgba(0,0,0,0.340)" : "rgba(0,0,0,0.460)"),
        W.addColorStop(0.46, T ? "rgba(0,0,0,0.156)" : "rgba(0,0,0,0.220)"),
        W.addColorStop(0.82, T ? "rgba(0,0,0,0.068)" : "rgba(0,0,0,0.095)"),
        W.addColorStop(1, "rgba(0,0,0,0)"),
        (A.fillStyle = W),
        A.beginPath(),
        A.arc(O, j, q, 0, 2 * Math.PI),
        A.fill();
      var K = d * C,
        z = h + d * w,
        E = h + d * S,
        U = A.createRadialGradient(
          z - 0.08 * d,
          E - 0.08 * d,
          0.12 * d,
          z,
          E,
          K
        );
      U.addColorStop(0, T ? "rgba(0,0,0,0.340)" : "rgba(0,0,0,0.560)"),
        U.addColorStop(0.46, T ? "rgba(0,0,0,0.156)" : "rgba(0,0,0,0.255)"),
        U.addColorStop(0.82, T ? "rgba(0,0,0,0.068)" : "rgba(0,0,0,0.108)"),
        U.addColorStop(1, "rgba(0,0,0,0)"),
        (A.fillStyle = U),
        A.beginPath(),
        A.arc(z, E, K, 0, 2 * Math.PI),
        A.fill();
      var Q = h + d * M,
        H = h + d * R,
        L = d * P * B;
      A.save(), A.translate(Q, H), A.scale(1, x);
      var V = A.createRadialGradient(0, 0, 0.06 * d, 0, 0, L);
      V.addColorStop(
        0,
        "rgba(0,0,0,".concat(
          T ? (0.32 * k).toFixed(3) : (0.34 * k).toFixed(3),
          ")"
        )
      ),
        V.addColorStop(
          0.34,
          "rgba(0,0,0,".concat(
            T ? (0.22 * k).toFixed(3) : (0.23 * k).toFixed(3),
            ")"
          )
        ),
        V.addColorStop(0.76, "rgba(0,0,0,".concat((0.08 * k).toFixed(3), ")")),
        V.addColorStop(1, "rgba(0,0,0,0)"),
        (A.fillStyle = V),
        A.beginPath(),
        A.arc(0, 0, L, 0, 2 * Math.PI),
        A.fill(),
        A.restore();
    } catch (e) {
      return m.warn("Bead shadow template build failed", e), null;
    }
    "function" == typeof this.recordDiyPerf &&
      this.recordDiyPerf(
        "bead-shadow-template-build",
        (this.getPerfNow ? this.getPerfNow() : Date.now()) - N,
        { radius: r, quality: i }
      );
    var X = { canvas: f, size: u, center: h };
    for (
      this.beadShadowTemplateCache[c] = X,
        this.beadShadowTemplateCacheKeys.push(c);
      this.beadShadowTemplateCacheKeys.length > 96;

    ) {
      var Y = this.beadShadowTemplateCacheKeys.shift();
      Y && delete this.beadShadowTemplateCache[Y];
    }
    return X;
  },
  getBeadRenderTemplate: function (e, a, t, r) {
    var n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    if (!(e && a && a.width > 0 && a.height > 0)) return null;
    var o = N(t),
      i = N(r),
      l = "photo" === n.mode ? "photo" : "realtime",
      s = U(n.bead),
      c = T({ mode: l }, this),
      d = ""
        .concat(e, "|")
        .concat(o, "x")
        .concat(i, "|")
        .concat(l, "|")
        .concat(c, "|")
        .concat(s.key, "|")
        .concat("soft-edge-volume-v10");
    if (
      (this.beadRenderTemplateCache ||
        ((this.beadRenderTemplateCache = {}),
        (this.beadRenderTemplateCacheKeys = [])),
      this.beadRenderTemplateCache[d])
    )
      return this.beadRenderTemplateCache[d];
    if (!1 === n.allowBuild) return null;
    var u = Number(n.maxBuildsPerFrame);
    if (Number.isFinite(u) && u >= 0) {
      var h = Number(this._beadRenderTemplateBuildsThisFrame) || 0;
      if (h >= u) return null;
      this._beadRenderTemplateBuildsThisFrame = h + 1;
    }
    var f = Math.max(1, Math.round(o * c)),
      g = Math.max(1, Math.round(i * c)),
      p = this.createAccessoryShadowCanvas(f, g);
    if (!p) return null;
    var b = p.getContext("2d");
    if (!b) return null;
    var y = this.getPerfNow ? this.getPerfNow() : Date.now();
    try {
      if (
        ("imageSmoothingEnabled" in b && (b.imageSmoothingEnabled = !0),
        "imageSmoothingQuality" in b)
      )
        try {
          b.imageSmoothingQuality = "high";
        } catch (e) {}
      b.clearRect(0, 0, f, g), b.drawImage(a, 0, 0, f, g);
      var v = f / 2,
        w = g / 2,
        S = Math.min(f, g) / 2;
      if ("photo" === l) {
        b.globalCompositeOperation = "source-atop";
        var C = b.createRadialGradient(v, w, 0.42 * S, v, w, S);
        if (
          (C.addColorStop(0, "rgba(0,0,0,0)"),
          C.addColorStop(0.74, "rgba(0,0,0,0)"),
          C.addColorStop(
            1,
            "rgba(0,0,0,".concat((1.2 * s.edgeAlpha).toFixed(3), ")")
          ),
          (b.fillStyle = C),
          b.fillRect(0, 0, f, g),
          s.innerGlowAlpha > 0)
        ) {
          var M = b.createRadialGradient(
            v - 0.1 * S,
            w - 0.08 * S,
            0.1 * S,
            v,
            w,
            0.86 * S
          );
          M.addColorStop(
            0,
            "rgba(255,255,255,".concat(
              (1.18 * s.innerGlowAlpha).toFixed(3),
              ")"
            )
          ),
            M.addColorStop(
              0.62,
              "rgba(255,255,255,".concat(
                (0.38 * s.innerGlowAlpha).toFixed(3),
                ")"
              )
            ),
            M.addColorStop(1, "rgba(255,255,255,0)"),
            (b.fillStyle = M),
            b.fillRect(0, 0, f, g);
        }
        var R = b.createRadialGradient(
          v - 0.26 * S,
          w - 0.3 * S,
          0.05 * S,
          v,
          w,
          0.74 * S
        );
        R.addColorStop(
          0,
          "rgba(255,255,255,".concat((1.22 * s.highlightAlpha).toFixed(3), ")")
        ),
          R.addColorStop(
            0.34,
            "rgba(255,255,255,".concat(
              (1.18 * s.highlightMidAlpha).toFixed(3),
              ")"
            )
          ),
          R.addColorStop(1, "rgba(255,255,255,0)"),
          (b.fillStyle = R),
          b.fillRect(0, 0, f, g);
      } else {
        b.globalCompositeOperation = "source-atop";
        var P = b.createRadialGradient(v, w, 0.44 * S, v, w, S);
        P.addColorStop(0, "rgba(0,0,0,0)"),
          P.addColorStop(0.76, "rgba(0,0,0,0)"),
          P.addColorStop(
            1,
            "rgba(0,0,0,".concat((0.95 * s.edgeAlpha + 0.01).toFixed(3), ")")
          ),
          (b.fillStyle = P),
          b.fillRect(0, 0, f, g);
        var x = b.createRadialGradient(
          v - 0.24 * S,
          w - 0.28 * S,
          0.04 * S,
          v,
          w,
          0.72 * S
        );
        x.addColorStop(
          0,
          "rgba(255,255,255,".concat(
            (0.7 * s.highlightAlpha + 0.02).toFixed(3),
            ")"
          )
        ),
          x.addColorStop(
            0.34,
            "rgba(255,255,255,".concat(
              (0.62 * s.highlightMidAlpha + 0.008).toFixed(3),
              ")"
            )
          ),
          x.addColorStop(1, "rgba(255,255,255,0)"),
          (b.fillStyle = x),
          b.fillRect(0, 0, f, g),
          (b.globalCompositeOperation = "source-over");
      }
      b.globalCompositeOperation = "destination-in";
      var A = "photo" === l,
        k = A ? Math.max(0.032, 0.0352) : 0.028,
        B = Math.max(0.88, 1 - k),
        I = b.createRadialGradient(v, w, S * B, v, w, S);
      A
        ? (I.addColorStop(0, "rgba(0,0,0,1)"),
          I.addColorStop(0.72, "rgba(0,0,0,0.98)"),
          I.addColorStop(0.92, "rgba(0,0,0,0.62)"),
          I.addColorStop(1, "rgba(0,0,0,0)"))
        : (I.addColorStop(0, "rgba(0,0,0,1)"),
          I.addColorStop(0.82, "rgba(0,0,0,1)"),
          I.addColorStop(0.96, "rgba(0,0,0,0.86)"),
          I.addColorStop(1, "rgba(0,0,0,0.28)")),
        (b.fillStyle = I),
        b.fillRect(0, 0, f, g),
        (b.globalCompositeOperation = "source-over");
    } catch (e) {
      return m.warn("Bead render template build failed", e), null;
    }
    "function" == typeof this.recordDiyPerf &&
      this.recordDiyPerf(
        "bead-render-template-build",
        (this.getPerfNow ? this.getPerfNow() : Date.now()) - y,
        { width: o, height: i, sampleScale: c, mode: l }
      );
    var D = { canvas: p, width: o, height: i, pixelWidth: f, pixelHeight: g };
    (this.beadRenderTemplateCache[d] = D),
      this.beadRenderTemplateCacheKeys.push(d);
    for (var F = _(this); this.beadRenderTemplateCacheKeys.length > F; ) {
      var G = this.beadRenderTemplateCacheKeys.shift();
      G && delete this.beadRenderTemplateCache[G];
    }
    return D;
  },
  getDiyRenderBaseline: function () {
    return "2026-04-26-canvas-soft-edge-v5";
  },
  ensureImage: function (e) {
    var a = this,
      t = this.beadCanvas || this.bgCanvas;
    if (!e || !t) return null;
    var n = s(e) || e;
    if (this.imageCache[n]) {
      var i = this.imageMeta && this.imageMeta[n],
        c = this._beadImageFallbackSrcMap && this._beadImageFallbackSrcMap[e],
        d = this._imageRetryMeta && this._imageRetryMeta[n],
        u = !!(i && i.failed && d && Number(d.nextRetryAt || 0) <= Date.now());
      if (!(i && i.failed && (u || (Array.isArray(c) && c.length))))
        return (
          e !== n &&
            ((this.imageCache[e] = this.imageCache[n]),
            (this.imageMeta[e] = i)),
          this.imageCache[n]
        );
      delete this.imageCache[n],
        delete this.imageMeta[n],
        e !== n && (delete this.imageCache[e], delete this.imageMeta[e]);
    }
    var h = t.createImage(),
      f = o(e) || e,
      g = { loaded: !1, failed: !1, waiting: [], src: e, cacheKey: n };
    (this.imageMeta[n] = g), e !== n && (this.imageMeta[e] = g);
    var p = Object.create(null);
    p[f] = !0;
    var b = this.getPerfNow ? this.getPerfNow() : Date.now();
    return (
      (h.onload = function () {
        var t = a.imageMeta[n];
        if (t) {
          (t.loaded = !0), (t.failed = !1);
          var r = t.waiting.slice();
          (t.waiting.length = 0),
            r.forEach(function (e) {
              return e();
            });
        }
        a._imageRetryMeta &&
          a._imageRetryMeta[n] &&
          delete a._imageRetryMeta[n],
          "function" == typeof a.markBackgroundDirtyForImage &&
            a.markBackgroundDirtyForImage(e),
          "function" == typeof a.recordDiyPerf &&
            a.recordDiyPerf(
              "image-load",
              (a.getPerfNow ? a.getPerfNow() : Date.now()) - b,
              { src: e, cacheKey: n, initialSrc: f, localCache: f !== e }
            ),
          !(
            a.data &&
            a.data.showStrungDomOverlay &&
            a.data.strungDomOverlayVisible &&
            a.isStrung
          ) ||
            (a.dragState && a.dragState.active) ||
            "function" != typeof a.drawStrungDomShadowCanvas ||
            a.drawStrungDomShadowCanvas(),
          a.scheduleRender ? a.scheduleRender() : a.render();
      }),
      (h.onerror = function () {
        if (f !== e && !p[e]) return l(e), (p[e] = !0), void (h.src = e);
        var t = a.getImageFallbackSrc(e);
        if (t && !p[t]) return (p[t] = !0), void (h.src = t);
        var o = a.imageMeta[n];
        if (o) {
          (o.failed = !0), (o.failedAt = Date.now());
          var i = o.waiting.slice();
          (o.waiting.length = 0),
            i.forEach(function (e) {
              return e();
            });
        }
        (a._imageRetryMeta && "object" === r(a._imageRetryMeta)) ||
          (a._imageRetryMeta = Object.create(null));
        var s,
          c,
          d = a._imageRetryMeta[n] || { retryCount: 0 };
        (d.retryCount = Math.min(8, Number(d.retryCount || 0) + 1)),
          (d.nextRetryAt =
            Date.now() +
            ((s = d.retryCount),
            (c = Math.max(0, Number(s) || 0)),
            Math.min(15e3, 1200 * Math.pow(2, Math.min(c, 4))))),
          (a._imageRetryMeta[n] = d),
          m.warn("Image load failed", e),
          "function" == typeof a.recordDiyPerf &&
            a.recordDiyPerf(
              "image-error",
              (a.getPerfNow ? a.getPerfNow() : Date.now()) - b,
              { src: e, cacheKey: n }
            ),
          a.scheduleRender ? a.scheduleRender() : a.render();
      }),
      (this.imageCache[n] = h),
      e !== n && (this.imageCache[e] = h),
      (h.src = f),
      h
    );
  },
  waitForImageReady: function (e) {
    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!e) return Promise.resolve();
    if (I(a)) return Promise.resolve(!1);
    var t = s(e) || e,
      r = this.ensureImage(e);
    if (!r) return Promise.resolve(!1);
    var n = this.imageMeta[t] || this.imageMeta[e];
    if (!n || n.loaded || r.width > 0) return Promise.resolve(!0);
    if (n.failed) return Promise.resolve(!1);
    var o = D(a.timeoutMs);
    return new Promise(function (e) {
      var a = !1,
        t = null,
        i = function () {
          a || ((a = !0), t && clearTimeout(t), e(!!(n.loaded || r.width > 0)));
        };
      n.waiting.push(i), o > 0 && (t = setTimeout(i, o));
    });
  },
  ensureImageReady: function (e) {
    var a = this,
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!e) return Promise.resolve(!1);
    if (I(t)) return Promise.resolve(!1);
    var r =
      !1 === t.cachePath
        ? Promise.resolve(e)
        : i(e, t).catch(function () {
            return e;
          });
    return r.then(function () {
      return a.waitForImageReady(e, t);
    });
  },
  collectPatternImageUrls: function (e, a) {
    var t = this;
    if (!Array.isArray(e) || !e.length) return [];
    var r = [];
    return (
      e.forEach(function (n, o) {
        var i = h(a, e, o),
          l = String((i && (i.imgUrl || i.img_url)) || "").trim();
        l && r.push(l);
        var s = u(n),
          c = t.resolveBeadRenderImageUrl(s, o);
        c && r.push(c);
      }),
      r.filter(function (e, a, t) {
        return t.indexOf(e) === a;
      })
    );
  },
  preloadImageSet: function (e) {
    var a = this,
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = (e || []).filter(Boolean).filter(function (e, a, t) {
        return t.indexOf(e) === a;
      });
    if (!n.length) return Promise.resolve();
    var o = t && "object" === r(t) ? t : {},
      i = B(o.concurrency),
      l = n.length,
      s = 0,
      c = 0,
      d = 0,
      u = 0,
      h = 0;
    return new Promise(function (e) {
      !(function t() {
        if (d >= l || (c <= 0 && I(o)))
          e({ total: l, loaded: d, ready: u, failed: h, cancelled: d < l });
        else {
          for (; !I(o) && c < i && s < l; ) {
            var r = n[s];
            (s += 1),
              (c += 1),
              a
                .ensureImageReady(r, o)
                .catch(function () {
                  return !1;
                })
                .then(function (e) {
                  (d += 1), !0 === e ? (u += 1) : (h += 1), (c -= 1), t();
                });
          }
          c <= 0 &&
            (s >= l || I(o)) &&
            e({ total: l, loaded: d, ready: u, failed: h, cancelled: d < l });
        }
      })();
    });
  },
  prewarmPlaybackPlanRenderAssets: function (t) {
    var n = arguments,
      o = this;
    return a(
      e().mark(function a() {
        var i, l, s, c, d;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  !0 ===
                    (i = n.length > 1 && void 0 !== n[1] ? n[1] : {})
                      .__scheduled ||
                  !0 === i.force ||
                  !o.resourceScheduler
                ) {
                  e.next = 3;
                  break;
                }
                return e.abrupt(
                  "return",
                  o.scheduleRenderResourceTask({
                    priority: i.priority || "P1",
                    type: "render-template",
                    scope: i.scope || "blindbox",
                    dedupeKey: W("playback-plan-render", t, i),
                    requiresQuiet: !1 !== i.requiresQuiet,
                    timeoutMs: Math.max(3e3, Number(i.timeoutMs) || 12e3),
                    run: function (e) {
                      return o.prewarmPlaybackPlanRenderAssets(
                        t,
                        Object.assign({}, i, {
                          __scheduled: !0,
                          cancelToken: e && e.token,
                          cancelGeneration: e && e.generation,
                        })
                      );
                    },
                  })
                );
              case 3:
                if (!j(o, i)) {
                  e.next = 5;
                  break;
                }
                return e.abrupt("return", !1);
              case 5:
                if (
                  (l = Array.isArray(t)
                    ? t.filter(function (e) {
                        return (
                          e &&
                          (e.beadId || e.id) &&
                          (e.imgUrl || e.img_url || e.material)
                        );
                      })
                    : []).length &&
                  "function" == typeof o.buildBead
                ) {
                  e.next = 8;
                  break;
                }
                return e.abrupt("return", !1);
              case 8:
                if (
                  ((s = []),
                  (c = []),
                  l.forEach(function (e, a) {
                    var t = String(e.beadId || e.id || "").trim(),
                      n =
                        e.material && "object" === r(e.material)
                          ? e.material
                          : u(t),
                      i =
                        String(e.imgUrl || e.img_url || "").trim() ||
                        ("function" == typeof o.resolveBeadRenderImageUrl
                          ? o.resolveBeadRenderImageUrl(
                              n,
                              Number(e.variantIdx) || a
                            )
                          : "");
                    i && s.indexOf(i) < 0 && s.push(i);
                    var l = Object.assign({}, n || {}, {
                      id: String((n && n.id) || t || "").trim(),
                    });
                    c.push(o.buildBead(l, a, i));
                  }),
                  c.length)
                ) {
                  e.next = 13;
                  break;
                }
                return e.abrupt("return", !1);
              case 13:
                if (!s.length) {
                  e.next = 16;
                  break;
                }
                return (
                  (e.next = 16),
                  o.preloadImageSet(s, {
                    cancelToken: i.cancelToken,
                    shouldStop: function () {
                      return !(!i.cancelToken || !i.cancelToken.cancelled);
                    },
                  })
                );
              case 16:
                if (o.ready && !j(o, i)) {
                  e.next = 18;
                  break;
                }
                return e.abrupt("return", !1);
              case 18:
                if (
                  ((d = []),
                  "function" == typeof o.prewarmBeadRenderTemplates &&
                    d.push(
                      new Promise(function (e) {
                        o.prewarmBeadRenderTemplates(c, {
                          scope: String(i.scope || "blindbox-playback-plan"),
                          delayMs: Number.isFinite(Number(i.templateDelayMs))
                            ? Number(i.templateDelayMs)
                            : 0,
                          batchSize: Math.max(1, Number(i.batchSize) || 1),
                          intervalMs: Math.max(16, Number(i.intervalMs) || 32),
                          mode: "photo" === i.mode ? "photo" : "realtime",
                          force: !0 === i.force,
                          __scheduled: !0 === i.__scheduled,
                          cancelToken: i.cancelToken,
                          onComplete: e,
                        });
                      })
                    ),
                  "function" == typeof o.prewarmAccessoryShapeShadows &&
                    d.push(
                      new Promise(function (e) {
                        o.prewarmAccessoryShapeShadows(c, {
                          delayMs: Number.isFinite(Number(i.shadowDelayMs))
                            ? Number(i.shadowDelayMs)
                            : 0,
                          batchSize: Math.max(
                            1,
                            Number(i.shadowBatchSize) || 1
                          ),
                          intervalMs: Math.max(
                            24,
                            Number(i.shadowIntervalMs) || 48
                          ),
                          soft: !0,
                          force: !0 === i.force,
                          __scheduled: !0 === i.__scheduled,
                          cancelToken: i.cancelToken,
                          onComplete: e,
                        });
                      })
                    ),
                  d.length)
                ) {
                  e.next = 23;
                  break;
                }
                return e.abrupt("return", !1);
              case 23:
                return e.abrupt(
                  "return",
                  Promise.all(d).then(function () {
                    return !0;
                  })
                );
              case 24:
              case "end":
                return e.stop();
            }
        }, a);
      })
    )();
  },
  prewarmPatternRenderAssets: function (t) {
    var r = arguments,
      n = this;
    return a(
      e().mark(function a() {
        var o,
          i,
          l,
          s,
          c,
          d,
          h,
          m,
          f,
          g,
          p,
          b,
          y,
          v,
          w,
          S,
          C,
          M,
          R,
          P,
          x,
          A,
          N,
          T;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    !0 ===
                      (o = r.length > 1 && void 0 !== r[1] ? r[1] : {})
                        .__scheduled ||
                    !0 === o.force ||
                    !n.resourceScheduler
                  ) {
                    e.next = 3;
                    break;
                  }
                  return e.abrupt(
                    "return",
                    n.scheduleRenderResourceTask({
                      priority: o.priority || "P2",
                      type: "render-template",
                      scope: o.scope || "pattern",
                      dedupeKey: W("pattern-render", t, o),
                      requiresQuiet: !1 !== o.requiresQuiet,
                      timeoutMs: Math.max(3e3, Number(o.timeoutMs) || 12e3),
                      run: function (e) {
                        return n.prewarmPatternRenderAssets(
                          t,
                          Object.assign({}, o, {
                            __scheduled: !0,
                            cancelToken: e && e.token,
                            cancelGeneration: e && e.generation,
                          })
                        );
                      },
                    })
                  );
                case 3:
                  if (!j(n, o)) {
                    e.next = 5;
                    break;
                  }
                  return e.abrupt("return", !1);
                case 5:
                  if (
                    (i = Array.isArray(t)
                      ? t
                          .map(function (e) {
                            return String(e || "").trim();
                          })
                          .filter(Boolean)
                      : []).length
                  ) {
                    e.next = 8;
                    break;
                  }
                  return e.abrupt("return", !1);
                case 8:
                  if (
                    ((l =
                      !0 === o.force
                        ? null
                        : Number(n._renderAssetWarmupToken) || 0),
                    (s = []),
                    (c = []),
                    i.forEach(function (e, a) {
                      var t = u(e),
                        r = n.resolveBeadRenderImageUrl(t, a);
                      r && c.indexOf(r) < 0 && c.push(r),
                        "function" == typeof n.buildBead &&
                          s.push(n.buildBead(t, a, r));
                    }),
                    s.length)
                  ) {
                    e.next = 14;
                    break;
                  }
                  return e.abrupt("return", !1);
                case 14:
                  if (!c.length) {
                    e.next = 17;
                    break;
                  }
                  return (
                    (e.next = 17),
                    n.preloadImageSet(c, {
                      cancelToken: o.cancelToken,
                      shouldStop: function () {
                        return !(!o.cancelToken || !o.cancelToken.cancelled);
                      },
                    })
                  );
                case 17:
                  if (n.ready && !j(n, o, l)) {
                    e.next = 19;
                    break;
                  }
                  return e.abrupt("return", !1);
                case 19:
                  (d = Math.max(1, Number(o.maxBuilds) || 28)),
                    (h = Math.max(1, Number(o.batchSize) || 2)),
                    (m = Math.max(3, Number(o.frameBudgetMs) || 8)),
                    (f = Math.max(16, Number(o.intervalMs) || 32)),
                    (g = n._beadRenderTemplateBuildsThisFrame),
                    (p = Object.create(null)),
                    (b = 0),
                    (e.prev = 26),
                    (n._beadRenderTemplateBuildsThisFrame = 0),
                    (y = 0);
                case 29:
                  if (!(y < s.length && b < d)) {
                    e.next = 67;
                    break;
                  }
                  if (!j(n, o, l)) {
                    e.next = 32;
                    break;
                  }
                  return e.abrupt("break", 67);
                case 32:
                  if (!q(n, o)) {
                    e.next = 36;
                    break;
                  }
                  return (e.next = 35), k(Number(o.intervalMs) || 96);
                case 35:
                  return e.abrupt("continue", 29);
                case 36:
                  (v = n.getPerfNow ? n.getPerfNow() : Date.now()), (w = 0);
                case 38:
                  if (!(y < s.length && b < d && w < h)) {
                    e.next = 62;
                    break;
                  }
                  if (
                    ((S = s[y]),
                    (y += 1),
                    (C = S && (S.imgUrl || S.img_url)),
                    (M = C ? n.ensureImage(C) : null) && M.width > 0)
                  ) {
                    e.next = 45;
                    break;
                  }
                  return e.abrupt("continue", 38);
                case 45:
                  if (
                    ((R =
                      "function" == typeof n.getBeadRenderMetrics
                        ? n.getBeadRenderMetrics(S)
                        : null),
                    (P =
                      2.836 * (Number(S.mm) || 8) * (Number(S.imgScale) || 1)),
                    (x = Number((R && R.drawW) || S.drawW || P) || 24),
                    (A = Number((R && R.drawH) || S.drawH || P) || 24),
                    (N = ""
                      .concat(C, "|")
                      .concat(Math.round(x), "x")
                      .concat(Math.round(A), "|")
                      .concat(S.mat || S.id || "")),
                    !p[N])
                  ) {
                    e.next = 52;
                    break;
                  }
                  return e.abrupt("continue", 38);
                case 52:
                  if (
                    ((p[N] = !0),
                    z(S)
                      ? "function" == typeof n.getAccessoryShapeShadow &&
                        (n.getAccessoryShapeShadow(C, M, x, A, {
                          allowBuild: !0,
                          soft: !0,
                        }),
                        n.getAccessoryShapeShadow(C, M, x, A, {
                          allowBuild: !0,
                          variant: "body-soft",
                        }))
                      : "function" == typeof n.getBeadRenderTemplate &&
                        n.getBeadRenderTemplate(C, M, x, A, {
                          allowBuild: !0,
                          mode: "photo" === o.mode ? "photo" : "realtime",
                          bead: S,
                        }),
                    "function" == typeof n.getBeadShadowTemplate &&
                      ((T = Math.max(1, Math.min(x, A) / 2)),
                      n.getBeadShadowTemplate(T, "interactive", S),
                      n.getBeadShadowTemplate(T, "settled", S),
                      n.getBeadShadowTemplate(T, "strung-dom", S)),
                    (b += 1),
                    (w += 1),
                    !((n.getPerfNow ? n.getPerfNow() : Date.now()) - v >= m))
                  ) {
                    e.next = 60;
                    break;
                  }
                  return e.abrupt("break", 62);
                case 60:
                  e.next = 38;
                  break;
                case 62:
                  if (!(y < s.length && b < d)) {
                    e.next = 65;
                    break;
                  }
                  return (e.next = 65), k(f);
                case 65:
                  e.next = 29;
                  break;
                case 67:
                  return (
                    (e.prev = 67),
                    (n._beadRenderTemplateBuildsThisFrame = g || 0),
                    e.finish(67)
                  );
                case 70:
                  return (
                    b &&
                      "function" == typeof n.scheduleRender &&
                      n.scheduleRender(),
                    e.abrupt("return", b > 0)
                  );
                case 72:
                case "end":
                  return e.stop();
              }
          },
          a,
          null,
          [[26, , 67, 70]]
        );
      })
    )();
  },
  preloadPatternImages: function (e, a) {
    var t = this.collectPatternImageUrls(e, a);
    return this.preloadImageSet(t);
  },
  prewarmAccessoryShapeShadows: function (e) {
    var a = this,
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!0 !== t.__scheduled && !0 !== t.force && this.resourceScheduler)
      return this.scheduleRenderResourceTask({
        priority: t.priority || "P2",
        type: "shape-shadow",
        scope: t.scope || "shape-shadow",
        dedupeKey: W("shape-shadow", e, t),
        requiresQuiet: !1 !== t.requiresQuiet,
        timeoutMs: Math.max(2500, Number(t.timeoutMs) || 1e4),
        run: function (r) {
          return new Promise(function (n) {
            a.prewarmAccessoryShapeShadows(
              e,
              Object.assign({}, t, {
                __scheduled: !0,
                cancelToken: r && r.token,
                cancelGeneration: r && r.generation,
                onComplete: function (e) {
                  "function" == typeof t.onComplete && t.onComplete(!0 === e),
                    n(!0 === e);
                },
              })
            );
          });
        },
      });
    var r = Array.isArray(e) ? e.filter(Boolean) : [],
      n =
        "function" == typeof this.isDiyPerfDebugEnabled &&
        this.isDiyPerfDebugEnabled(),
      o = n && "function" == typeof this.getPerfNow ? this.getPerfNow() : 0,
      i = 0,
      l = function (e) {
        n &&
          "function" == typeof a.recordDiyPerf &&
          a.recordDiyPerf("shape-shadow-prewarm", a.getPerfNow() - o, {
            requested: r.length,
            built: i,
            completed: !0 === e,
            batchSize: Math.max(1, Number(t.batchSize) || 3),
          }),
          "function" == typeof t.onComplete && t.onComplete(!0 === e);
      };
    if (r.length && "function" == typeof this.getAccessoryShapeShadow)
      if (j(this, t)) l(!1);
      else {
        var s = Math.max(1, Number(t.batchSize) || 3),
          c = !0 === t.force ? null : Number(this._renderAssetWarmupToken) || 0,
          d = 0,
          u = !1,
          h = function e() {
            if (a.ready)
              if (j(a, t, c)) l(!1);
              else if (q(a, t))
                setTimeout(e, Math.max(96, Number(t.intervalMs) || 120));
              else {
                for (var n = 0; d < r.length && n < s; ) {
                  var o = r[d];
                  (d += 1), (n += 1);
                  var h = o && (o.imgUrl || o.img_url),
                    m = h ? a.ensureImage(h) : null;
                  if (m && m.width > 0) {
                    var f =
                        "function" == typeof a.getBeadRenderMetrics
                          ? a.getBeadRenderMetrics(o)
                          : null,
                      g =
                        2.836 * (Number(o.mm) || 8) * (Number(o.imgScale) || 1),
                      p = Number((f && f.drawW) || o.drawW || g) || 24,
                      b = Number((f && f.drawH) || o.drawH || g) || 24;
                    a.getAccessoryShapeShadow(h, m, p, b, {
                      allowBuild: !0,
                      soft: !0 === t.soft,
                    }),
                      a.getAccessoryShapeShadow(h, m, p, b, {
                        allowBuild: !0,
                        variant: "body-soft",
                      }),
                      (i += 1),
                      (u = !0);
                  }
                }
                u &&
                  "function" == typeof a.scheduleRender &&
                  (a.scheduleRender(), (u = !1)),
                  d < r.length
                    ? setTimeout(e, Number(t.intervalMs) || 80)
                    : l(!0);
              }
            else l(!1);
          };
        setTimeout(h, Number(t.delayMs) || 120);
      }
    else l(!1);
  },
  prewarmCurrentShapeShadows: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      a = Array.isArray(this.beadsRef)
        ? this.beadsRef.filter(function (e) {
            return e && z(e);
          })
        : [];
    return (
      !(!a.length || "function" != typeof this.prewarmAccessoryShapeShadows) &&
      (this.prewarmAccessoryShapeShadows(a, {
        delayMs: Number(e.delayMs) || 180,
        intervalMs: Number(e.intervalMs) || 100,
        batchSize: Math.max(1, Number(e.batchSize) || 1),
        soft: !1 !== e.soft,
        force: !0 === e.force,
        __scheduled: !0 === e.__scheduled,
        cancelToken: e.cancelToken,
        cancelGeneration: e.cancelGeneration,
        onComplete: e.onComplete,
      }),
      !0)
    );
  },
  prewarmCurrentStrungResources: function () {
    var e = this,
      a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (!0 !== a.__scheduled && !0 !== a.force && this.resourceScheduler) {
      var t = Array.isArray(this.beadsRef) ? this.beadsRef : [];
      return this.scheduleRenderResourceTask({
        priority: a.priority || "P1",
        type: "render-template",
        scope: a.scope || "strung",
        dedupeKey: W("current-strung", t, a),
        requiresQuiet: !1 !== a.requiresQuiet,
        timeoutMs: Math.max(3e3, Number(a.timeoutMs) || 12e3),
        run: function (t) {
          return e.prewarmCurrentStrungResources(
            Object.assign({}, a, {
              __scheduled: !0,
              cancelToken: t && t.token,
              cancelGeneration: t && t.generation,
            })
          );
        },
      });
    }
    var r = Array.isArray(this.beadsRef) ? this.beadsRef : [];
    if (!r.length) return Promise.resolve(!1);
    var n =
        "function" == typeof this.isDiyPerfDebugEnabled &&
        this.isDiyPerfDebugEnabled(),
      o = n && "function" == typeof this.getPerfNow ? this.getPerfNow() : 0,
      i = [];
    "function" == typeof this.prewarmBeadRenderTemplates &&
      i.push({
        name: "templates",
        required: r.some(function (e) {
          return e && !z(e);
        }),
        promise: new Promise(function (t) {
          e.prewarmBeadRenderTemplates(r, {
            scope: "strung-settled",
            delayMs: Number(a.templateDelayMs) || 220,
            batchSize: Math.max(1, Number(a.templateBatchSize) || 2),
            intervalMs: Number(a.templateIntervalMs) || 110,
            mode: "realtime",
            force: !0 === a.force,
            __scheduled: !0 === a.__scheduled,
            cancelToken: a.cancelToken,
            cancelGeneration: a.cancelGeneration,
            ignoreFpsGuard: !0 === a.ignoreFpsGuard,
            onComplete: t,
          });
        }),
      }),
      "function" == typeof this.prewarmCurrentShapeShadows &&
        i.push({
          name: "shape-shadows",
          required: !1,
          promise: new Promise(function (t) {
            !1 ===
              e.prewarmCurrentShapeShadows({
                delayMs: Number(a.shadowDelayMs) || 260,
                intervalMs: Number(a.shadowIntervalMs) || 120,
                batchSize: Math.max(1, Number(a.shadowBatchSize) || 1),
                soft: !0,
                force: !0 === a.force,
                __scheduled: !0 === a.__scheduled,
                cancelToken: a.cancelToken,
                cancelGeneration: a.cancelGeneration,
                ignoreFpsGuard: !0 === a.ignoreFpsGuard,
                onComplete: t,
              }) && t(!1);
          }),
        });
    var l =
      !1 !== a.includeDomOverlay &&
      "function" == typeof this.prewarmCurrentStrungDomOverlay &&
      ("function" != typeof this.isStrungDomOverlayEnabled ||
        this.isStrungDomOverlayEnabled());
    return (
      l &&
        i.push({
          name: "dom-overlay",
          required: !0,
          promise: this.prewarmCurrentStrungDomOverlay({
            drawShadow: !0,
            cancelToken: a.cancelToken,
            cancelGeneration: a.cancelGeneration,
            ignoreFpsGuard: !0 === a.ignoreFpsGuard,
          }).catch(function () {
            return !1;
          }),
        }),
      i.length
        ? Promise.all(
            i.map(function (e) {
              return Promise.resolve(e.promise)
                .then(function (e) {
                  return !0 === e;
                })
                .catch(function () {
                  return !1;
                });
            })
          ).then(function (t) {
            var l = !(!a.cancelToken || !a.cancelToken.cancelled),
              s =
                !l &&
                i.every(function (e, a) {
                  return !e.required || !0 === t[a];
                });
            return (
              n &&
                "function" == typeof e.recordDiyPerf &&
                e.recordDiyPerf(
                  "current-strung-resource-prewarm",
                  e.getPerfNow() - o,
                  {
                    beads: r.length,
                    tasks: i.length,
                    ready: s,
                    cancelled: l,
                    results: i
                      .map(function (e, a) {
                        return "".concat(e.name, ":").concat(t[a] ? 1 : 0);
                      })
                      .join(","),
                    templateBatchSize: Math.max(
                      1,
                      Number(a.templateBatchSize) || 2
                    ),
                    shadowBatchSize: Math.max(
                      1,
                      Number(a.shadowBatchSize) || 1
                    ),
                  }
                ),
              s
            );
          })
        : Promise.resolve(!1)
    );
  },
  prewarmBeadRenderTemplates: function (e) {
    var a = this,
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!0 !== t.__scheduled && !0 !== t.force && this.resourceScheduler)
      return this.scheduleRenderResourceTask({
        priority: t.priority || "P2",
        type: "render-template",
        scope: t.scope || "bead-template",
        dedupeKey: W("bead-template", e, t),
        requiresQuiet: !1 !== t.requiresQuiet,
        timeoutMs: Math.max(2500, Number(t.timeoutMs) || 1e4),
        run: function (r) {
          return new Promise(function (n) {
            a.prewarmBeadRenderTemplates(
              e,
              Object.assign({}, t, {
                __scheduled: !0,
                cancelToken: r && r.token,
                cancelGeneration: r && r.generation,
                onComplete: function (e) {
                  "function" == typeof t.onComplete && t.onComplete(!0 === e),
                    n(!0 === e);
                },
              })
            );
          });
        },
      });
    var r = Array.isArray(e)
        ? e.filter(function (e) {
            return e && !z(e);
          })
        : [],
      n =
        "function" == typeof this.isDiyPerfDebugEnabled &&
        this.isDiyPerfDebugEnabled(),
      o = n && "function" == typeof this.getPerfNow ? this.getPerfNow() : 0,
      i = 0,
      l = function (e) {
        n &&
          "function" == typeof a.recordDiyPerf &&
          a.recordDiyPerf("bead-render-template-prewarm", a.getPerfNow() - o, {
            scope: String(t.scope || "default"),
            requested: r.length,
            built: i,
            completed: !0 === e,
            mode: "photo" === t.mode ? "photo" : "realtime",
            batchSize: Math.max(1, Number(t.batchSize) || 2),
          }),
          "function" == typeof t.onComplete && t.onComplete(!0 === e);
      };
    if (r.length && "function" == typeof this.getBeadRenderTemplate)
      if (j(this, t)) l(!1);
      else {
        var s = Math.max(1, Number(t.batchSize) || 2),
          c = "photo" === t.mode ? "photo" : "realtime",
          d = String(t.scope || "default");
        this._beadRenderPrewarmTokens || (this._beadRenderPrewarmTokens = {});
        var u = (Number(this._beadRenderPrewarmTokens[d]) || 0) + 1;
        this._beadRenderPrewarmTokens[d] = u;
        var h =
            !0 === t.force ? null : Number(this._renderAssetWarmupToken) || 0,
          m = 0,
          f = !1,
          g = function e() {
            if (a.ready)
              if (j(a, t, h)) l(!1);
              else if (
                a._beadRenderPrewarmTokens &&
                a._beadRenderPrewarmTokens[d] === u
              )
                if (q(a, t))
                  setTimeout(e, Math.max(96, Number(t.intervalMs) || 120));
                else {
                  for (var n = 0; m < r.length && n < s; ) {
                    var o = r[m];
                    (m += 1), (n += 1);
                    var g = o && (o.imgUrl || o.img_url),
                      p = g ? a.ensureImage(g) : null;
                    if (p && p.width > 0) {
                      var b =
                          "function" == typeof a.getBeadRenderMetrics
                            ? a.getBeadRenderMetrics(o)
                            : null,
                        y =
                          2.836 *
                          (Number(o.mm) || 8) *
                          (Number(o.imgScale) || 1),
                        v = Number((b && b.drawW) || y) || 24,
                        w = Number((b && b.drawH) || y) || 24;
                      if (
                        (a.getBeadRenderTemplate(g, p, v, w, {
                          allowBuild: !0,
                          mode: c,
                          bead: o,
                        }) && ((i += 1), (f = !0)),
                        "function" == typeof a.getBeadShadowTemplate)
                      ) {
                        var S = Math.max(1, Math.min(v, w) / 2);
                        a.getBeadShadowTemplate(S, "interactive", o),
                          a.getBeadShadowTemplate(S, "settled", o),
                          a.getBeadShadowTemplate(S, "strung-dom", o);
                      }
                    }
                  }
                  f &&
                    "function" == typeof a.scheduleRender &&
                    (a.scheduleRender(), (f = !1)),
                    m < r.length
                      ? setTimeout(e, Number(t.intervalMs) || 90)
                      : l(!0);
                }
              else l(!1);
            else l(!1);
          };
        setTimeout(g, Number(t.delayMs) || 160);
      }
    else l(!1);
  },
};
