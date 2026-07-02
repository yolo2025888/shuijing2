var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../../@babel/runtime/helpers/typeof"),
  r = require("../../../utils/catalog"),
  i = r.BEAD_TYPES,
  n = r.getBeadType,
  s = r.getTrayBg,
  o = require("../../../utils/audioEngine").playSound,
  u = require("../../../utils/bracelet-config").applyBraceletContract,
  d = require("../../../utils/diyRenderPlan"),
  h = d.getRenderPlanItemForPattern,
  l = d.normalizeRenderPlan,
  m = require("../constants").getTrayPhysics;
function c(e) {
  var t = Number(e);
  return !Number.isFinite(t) || t <= 0 ? 0.97 : t;
}
function f(e) {
  return !e || e.isPendant ? 0 : (Number(e.mm) || 0) * c(e.gapRatio);
}
module.exports = {
  computeOuterRadius: function () {
    var e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : this.beadsRef,
      t = Array.isArray(e) ? e : [],
      a = m(),
      r = t.filter(function (e) {
        return !e.isPendant;
      }),
      i = t.reduce(function (e, t) {
        return e + (t.isPendant ? 0 : t.mm * t.gapRatio);
      }, 0),
      n =
        r.length >= 3
          ? (i / (2 * r.length * Math.sin(Math.PI / r.length))) * a.pxPerMm
          : (r[0] ? r[0].mm : 11) * a.pxPerMm;
    return { regularBeads: r, totalEffectiveMm: i, outerRadius: n };
  },
  computePhotoScale: function () {
    var e = Array.isArray(this.beadsRef) ? this.beadsRef : [];
    if (!e.length) return 0.82;
    var t = this.computeOuterRadius(e).outerRadius;
    return (87.14 / Math.max(t, 15)) * 0.82;
  },
  syncLayerStyles: function () {
    var e = this.properties.traySize || this.displaySize || this.logicalSize,
      t = (function (e) {
        var t = Number(e);
        return !Number.isFinite(t) || t <= 0
          ? 36
          : Math.round(Math.min(56, Math.max(36, 0.12 * t)));
      })(e),
      a = e + 2 * t,
      r = this.computePhotoScale(),
      i = Math.round((e / 350) * 16),
      n = this.properties.photoMode
        ? "translate3d(0px, "
            .concat(i, "px, 0px) scale(")
            .concat((0.94).toFixed(4), ")")
        : "none",
      s = Math.round((e / 350) * -140),
      o = this.properties.photoMode
        ? "translate3d(0px, "
            .concat(s, "px, 0px) scale(")
            .concat(r.toFixed(4), ")")
        : "none",
      u =
        (this.properties.photoMode,
        "opacity:1;box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);");
    (this.beadLayerOverscanPx = t),
      (this.beadLayerSizePx = a),
      this.setData({
        shellStyle: "width:"
          .concat(e, "px;height:")
          .concat(e, "px;transform:")
          .concat(n, ";"),
        trayCanvasStyle: "width:"
          .concat(e, "px;height:")
          .concat(e, "px;")
          .concat(u),
        photoShadowCanvasStyle: "width:"
          .concat(a, "px;height:")
          .concat(a, "px;left:-")
          .concat(t, "px;top:-")
          .concat(t, "px;right:auto;bottom:auto;transform:none;"),
        beadCanvasStyle: "width:"
          .concat(a, "px;height:")
          .concat(a, "px;left:-")
          .concat(t, "px;top:-")
          .concat(t, "px;right:auto;bottom:auto;transform:")
          .concat(o, ";"),
        shareCanvasStyle: "width:".concat(e, "px;height:").concat(e, "px;"),
      });
  },
  buildBead: function (e, t, r) {
    var i,
      n,
      s =
        "function" == typeof this.collectBeadRenderImageUrls
          ? this.collectBeadRenderImageUrls(e, t)
          : [r].filter(Boolean),
      o = {
        uid: "b_"
          .concat(Date.now(), "_")
          .concat(t, "_")
          .concat(Math.random().toString(16).slice(2)),
        mat: e.id,
        id: e.id,
        name: e.name || "",
        category: e.category || "",
        mainCategory:
          e.mainCategory ||
          e.main_category ||
          e.parentCategory ||
          e.parent_category ||
          "",
        subCategory: e.subCategory || e.sub_category || "",
        categoryCode: e.categoryCode || e.category_code || "",
        mainCategoryCode: e.mainCategoryCode || e.main_category_code || "",
        subCategoryCode: e.subCategoryCode || e.sub_category_code || "",
        materialType: e.materialType || e.material_type || e.type || "",
        class: e.class || "",
        mm: e.mm,
        price: e.price,
        gapRatio: e.gapRatio || 0.97,
        isCrystal: !(!e.category || 0 !== e.category.indexOf("crystal")),
        isPendant: !!e.isPendant,
        hangsOutward: !!e.hangsOutward,
        isSpacer: !!e.isSpacer,
        layer: Number.isFinite(Number(e.layer)) ? Number(e.layer) : void 0,
        imgScale: e.imgScale || 1,
        visualOffsetX: e.visualOffsetX || "",
        visualOffsetY: e.visualOffsetY || "",
        attrs:
          e && e.attrs && "object" === a(e.attrs)
            ? Object.assign({}, e.attrs)
            : {},
        x: 0,
        y: 0,
        oldX: 0,
        oldY: 0,
        baseTheta: 0,
        imgUrl: r,
        img_url: r,
        __imageCandidates: s,
        rot: 0,
      },
      d = u(o),
      h = String(o.uid || ""),
      l = Object.assign({}, o, d, {
        __braceletRenderReady: !0,
        __uidKey: h,
        mm: Number(d.mm) || Number(o.mm) || 0,
        gapRatio: c(d.gapRatio),
        imgScale:
          Number.isFinite(Number(d.imgScale)) && Number(d.imgScale) > 0
            ? Number(d.imgScale)
            : 1,
        visualOffsetX:
          void 0 === d.visualOffsetX || null === d.visualOffsetX
            ? ""
            : String(d.visualOffsetX),
        visualOffsetY:
          void 0 === d.visualOffsetY || null === d.visualOffsetY
            ? ""
            : String(d.visualOffsetY),
      });
    return (
      (l.__renderLayer =
        ((i = l),
        (n = Number(i && i.layer)),
        Number.isFinite(n)
          ? n
          : i && i.isSpacer
          ? 25
          : i && (i.isPendant || i.hangsOutward)
          ? 15
          : 20)),
      l
    );
  },
  applyPattern: function (r, i) {
    var u = this;
    return t(
      e().mark(function t() {
        var d, m, c, f, g, p, y, S;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (u.ready) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return");
              case 2:
                return (
                  (d = i && "object" === a(i) ? i : {}),
                  (m = l(d.renderPlan || u.properties.initRenderPlan || [], r)),
                  u.stopBlindBoxTimer(),
                  "function" == typeof u.hideStrungDomOverlay &&
                    u.hideStrungDomOverlay(),
                  (c = (u.applyPatternToken || 0) + 1),
                  (u.applyPatternToken = c),
                  (f = s(u.properties.bgIndex)),
                  (g = [f.url].concat(u.collectPatternImageUrls(r, m))),
                  (e.next = 12),
                  u.preloadImageSet(g)
                );
              case 12:
                if (u.applyPatternToken === c) {
                  e.next = 14;
                  break;
                }
                return e.abrupt("return");
              case 14:
                if (r && r.length) {
                  e.next = 24;
                  break;
                }
                return (
                  (u.beadsRef = []),
                  (u.isStrung = !1),
                  (u.animFrameRef = 0),
                  (u.globalRotRef = 0),
                  (u.dragState = u.createDragState()),
                  u.setRenderQualityMode &&
                    u.setRenderQualityMode("interactive"),
                  u.emitState(),
                  u.render(),
                  e.abrupt("return")
                );
              case 24:
                (p = r.map(function (e, t) {
                  var a = n(e),
                    i = h(m, r, t),
                    s =
                      String((i && (i.imgUrl || i.img_url)) || "").trim() ||
                      ("function" == typeof u.resolveBeadRenderImageUrl
                        ? u.resolveBeadRenderImageUrl(a, t)
                        : ""),
                    o = u.buildBead(a, t, s);
                  if (i) {
                    var d = Number(i.variantIdx);
                    Number.isFinite(d) && (o.variantIdx = d),
                      (o.__imageCandidates = [s]
                        .concat(
                          Array.isArray(o.__imageCandidates)
                            ? o.__imageCandidates
                            : []
                        )
                        .filter(function (e, t, a) {
                          return e && a.indexOf(e) === t;
                        }));
                  }
                  return o;
                })),
                  u.recalculateThetas(p),
                  (y = u.computeOuterRadius(p)),
                  (S = y.outerRadius),
                  p.forEach(function (e) {
                    var t,
                      a = e.baseTheta + u.globalRotRef;
                    (e.x = Math.cos(a) * S),
                      (e.y = Math.sin(a) * S),
                      (e.oldX = e.x),
                      (e.oldY = e.y),
                      (e.rot =
                        a +
                        Math.PI / 2 +
                        ((t = e) && (t.isPendant || t.hangsOutward)
                          ? -Math.PI
                          : 0));
                  }),
                  (u.beadsRef = p),
                  (u.isStrung = !0),
                  (u.animFrameRef = 0),
                  (u._stableFrameCount = 0),
                  u.setRenderQualityMode &&
                    u.setRenderQualityMode("interactive"),
                  (u.dragState = u.createDragState()),
                  u.emitState(),
                  u.render(),
                  "function" == typeof u.prewarmBeadRenderTemplates &&
                    u.prewarmBeadRenderTemplates(p, {
                      scope: "pattern",
                      delayMs: 140,
                      batchSize: 2,
                      intervalMs: 90,
                      mode: "realtime",
                    }),
                  "function" == typeof u.prewarmAccessoryShapeShadows &&
                    u.prewarmAccessoryShapeShadows(
                      p.filter(function (e) {
                        var t = String(
                          (e && (e.mat || e.id)) || ""
                        ).toLowerCase();
                        return !(
                          !e ||
                          !(
                            e.isPendant ||
                            e.hangsOutward ||
                            e.isSpacer ||
                            0 === t.indexOf("ps_") ||
                            0 === t.indexOf("sx_")
                          )
                        );
                      }),
                      { delayMs: 180, batchSize: 2, soft: !0 }
                    ),
                  o("slide");
              case 39:
              case "end":
                return e.stop();
            }
        }, t);
      })
    )();
  },
  recalculateThetas: function (e) {
    var t = e.reduce(function (e, t) {
        return e + (t.isPendant ? 0 : t.mm * t.gapRatio);
      }, 0),
      a = 0;
    e.forEach(function (e) {
      var r = e.isPendant ? 0 : e.mm * e.gapRatio,
        i = 0 === t ? 0 : (r / t) * Math.PI * 2;
      (e.baseTheta = a + i / 2), (a += i);
    });
  },
  getStats: function () {
    var e = 0,
      t = 0,
      a = m();
    return (
      this.beadsRef.forEach(function (a) {
        (e += a.price), (t += f(a));
      }),
      {
        beadsCount: this.beadsRef.length,
        totalPrice: e,
        totalPerimeter: t,
        maxPerimeterMm: a.maxPerimeterMm,
        isOverMaxPerimeter: t > a.maxPerimeterMm,
        isStrung: this.isStrung,
        pattern: this.beadsRef.map(function (e) {
          return e.mat;
        }),
        renderPlan: l(
          this.beadsRef.map(function (e) {
            return {
              beadId: e.mat || e.id,
              materialId: e.mat || e.id,
              variantIdx: e.variantIdx,
              imgUrl: e.imgUrl || e.img_url,
            };
          }),
          this.beadsRef.map(function (e) {
            return e.mat;
          })
        ),
      }
    );
  },
  emitState: function () {
    this.syncLayerStyles(), this.triggerEvent("statechange", this.getStats());
  },
  notify: function (e) {
    this.triggerEvent("feedback", { message: e });
  },
  getSnapshot: function () {
    return this.getStats();
  },
  stopBlindBoxTimer: function () {
    (this._blindBoxRandomStartToken =
      (Number(this._blindBoxRandomStartToken) || 0) + 1),
      "function" == typeof this.setRenderAssetWarmupPaused &&
        this.setRenderAssetWarmupPaused(!1, "random-blindbox"),
      this.blindBoxTimer &&
        ("function" == typeof this.clearManagedInterval
          ? this.clearManagedInterval(this.blindBoxTimer)
          : clearInterval(this.blindBoxTimer),
        (this.blindBoxTimer = null));
  },
  addBead: function (e, t) {
    var r = this,
      i = t && "object" === a(t) ? t : {},
      s = !0 === i.silentState,
      u = !0 === i.skipPrewarm,
      d = !1 !== i.sound,
      h = String(i.perfSource || "manual").trim() || "manual",
      l =
        "function" == typeof this.isDiyPerfDebugEnabled &&
        this.isDiyPerfDebugEnabled(),
      c = l && "function" == typeof this.getPerfNow ? this.getPerfNow() : 0,
      g = function (t, i) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        l &&
          "function" == typeof r.recordDiyPerf &&
          r.recordDiyPerf(
            "add-bead-sync",
            r.getPerfNow() - c,
            Object.assign(
              {
                source: h,
                result: !0 === t,
                reason: String(i || "").trim() || "unknown",
                typeId: String(e || "").trim(),
                silentState: s,
                skipPrewarm: u,
                isStrung: !!r.isStrung,
                beadsBefore: Array.isArray(r.beadsRef) ? r.beadsRef.length : 0,
              },
              n && "object" === a(n) ? n : {}
            )
          );
      },
      p = i.material && "object" === a(i.material) ? i.material : null,
      y = n(e),
      S = p
        ? Object.assign({}, y, p, {
            id: String(
              e || p.code || p.materialId || p.material_id || p.id || y.id || ""
            ).trim(),
          })
        : y,
      b = this.beadsRef,
      v = m(),
      R =
        "function" == typeof this.shouldKeepStrungDomOverlay
          ? this.shouldKeepStrungDomOverlay("add-bead")
          : this.isStrung &&
            this.data &&
            this.data.showStrungDomOverlay &&
            this.data.strungDomOverlayVisible;
    if (b.length >= v.maxCapacityBracelet)
      return (
        this.notify("手串最多容纳 ".concat(v.maxCapacityBracelet, " 颗珠子！")),
        g(!1, "capacity"),
        !1
      );
    var M = f(S),
      x = this.getStats().totalPerimeter + M;
    if (x > v.maxPerimeterMm)
      return (
        this.notify(
          "周长超限！当前 "
            .concat((x / 10).toFixed(1), "cm，最高 ")
            .concat((v.maxPerimeterMm / 10).toFixed(1), "cm")
        ),
        g(!1, "perimeter"),
        !1
      );
    R ||
      "function" != typeof this.hideStrungDomOverlay ||
      this.hideStrungDomOverlay();
    var P = String(i.imgUrl || i.img_url || "").trim(),
      B = Number(i.variantIdx),
      O = Number.isFinite(B)
        ? B
        : S.variants && S.variants.length
        ? Math.floor(Math.random() * S.variants.length)
        : 0,
      I =
        P ||
        ("function" == typeof this.resolveBeadRenderImageUrl
          ? this.resolveBeadRenderImageUrl(S, O)
          : "");
    this.ensureImage(I);
    var w = (S.mm * v.pxPerMm) / 2,
      D = (Math.random() - 0.5) * v.spawnXJitterPx,
      T = v.trayRadius - w - v.spawnYInsetPx,
      _ = v.spawnForceBase + Math.random() * v.spawnForceRange,
      F = _ / Math.max(v.spawnSpeedDivisor, 1e-4),
      C = (Math.random() - 0.5) * v.spawnVxJitterScale * F,
      A = -(v.spawnVyBase + v.spawnVyScale * F),
      N = this.buildBead(S, b.length, I);
    if (
      (R ||
        ((this._stableFrameCount = 0),
        this.setRenderQualityMode && this.setRenderQualityMode("interactive")),
      (N.x = D),
      (N.y = T),
      (N.oldX = D - C),
      (N.oldY = T - A),
      (N.rot = Math.random() * Math.PI * 2),
      this.isStrung)
    ) {
      var k = (Math.atan2(T, D) - this.globalRotRef) % (2 * Math.PI);
      k < 0 && (k += 2 * Math.PI);
      var E = 0,
        L = 1 / 0;
      b.forEach(function (e, t) {
        var a = Math.abs((e.baseTheta % (2 * Math.PI)) - k);
        a > Math.PI && (a = 2 * Math.PI - a), a < L && ((L = a), (E = t));
      });
      var U = b[E];
      if (U) {
        var Q = k - (U.baseTheta % (2 * Math.PI));
        Q > Math.PI && (Q -= 2 * Math.PI),
          Q < -Math.PI && (Q += 2 * Math.PI),
          Q > 0 && (E = (E + 1) % (b.length + 1));
      }
      if ((b.splice(E, 0, N), this.recalculateThetas(b), R))
        return (
          "function" == typeof this.layoutStrungBeadsImmediately &&
            this.layoutStrungBeadsImmediately(b),
          (this._stableFrameCount = 24),
          (this.animFrameRef = 0),
          this.setRenderQualityMode && this.setRenderQualityMode("settled"),
          s || this.emitState(),
          "function" == typeof this.syncStrungDomOverlay &&
            this.syncStrungDomOverlay({ force: !0 }),
          "function" == typeof this.playStrungDomFlyIn &&
            this.playStrungDomFlyIn(N),
          d && o("hit", null, 0.6),
          !u &&
            "function" == typeof this.prewarmAccessoryShapeShadows &&
            I &&
            this.ensureImageReady(I)
              .then(function () {
                r.ready &&
                  ("function" == typeof r.prewarmBeadRenderTemplates &&
                    r.prewarmBeadRenderTemplates([N], {
                      scope: "bead:".concat(N.uid),
                      delayMs: 0,
                      batchSize: 1,
                      intervalMs: 60,
                      mode: "realtime",
                    }),
                  r.prewarmAccessoryShapeShadows([N], {
                    delayMs: 0,
                    batchSize: 1,
                    soft: !0,
                  }));
              })
              .catch(function () {}),
          g(!0, "strung-overlay", {
            beadsAfter: b.length,
            imgReady: !!(
              this.imageMeta &&
              this.imageMeta[I] &&
              this.imageMeta[I].loaded
            ),
          }),
          !0
        );
      s || this.emitState(), d && o("hit", null, 0.6);
    } else
      b.push(N), s || this.emitState(), d && o("hit", null, 0.4 + 0.05 * _);
    return (
      this.properties.active &&
        !this.reqRef &&
        "function" == typeof this.startLoop &&
        this.startLoop(),
      !u &&
        "function" == typeof this.prewarmAccessoryShapeShadows &&
        I &&
        this.ensureImageReady(I)
          .then(function () {
            r.ready &&
              ("function" == typeof r.prewarmBeadRenderTemplates &&
                r.prewarmBeadRenderTemplates([N], {
                  scope: "bead:".concat(N.uid),
                  delayMs: 0,
                  batchSize: 1,
                  intervalMs: 60,
                  mode: "realtime",
                }),
              r.prewarmAccessoryShapeShadows([N], {
                delayMs: 0,
                batchSize: 1,
                soft: !0,
              }));
          })
          .catch(function () {}),
      g(!0, "added", {
        beadsAfter: b.length,
        imgReady: !!(
          this.imageMeta &&
          this.imageMeta[I] &&
          this.imageMeta[I].loaded
        ),
      }),
      !0
    );
  },
  randomBlindBox: function () {
    var e = this;
    "function" == typeof this.hideStrungDomOverlay &&
      this.hideStrungDomOverlay(),
      this.stopBlindBoxTimer(),
      "function" == typeof this.setRenderAssetWarmupPaused &&
        this.setRenderAssetWarmupPaused(!0, "random-blindbox");
    var t = m(),
      a = i
        .map(function (t, a) {
          return {
            item: t,
            imgUrl:
              "function" == typeof e.resolveBeadRenderImageUrl
                ? e.resolveBeadRenderImageUrl(t, a)
                : "",
          };
        })
        .filter(function (e) {
          var t = e.item,
            a = e.imgUrl;
          return t && !t.locked && a;
        });
    if (!a.length)
      return (
        "function" == typeof this.setRenderAssetWarmupPaused &&
          this.setRenderAssetWarmupPaused(!1, "random-blindbox"),
        void this.notify("材料加载中，请稍后再试")
      );
    var r = 0,
      n = (Number(this._blindBoxRandomStartToken) || 0) + 1;
    this._blindBoxRandomStartToken = n;
    var s = function () {
        e._blindBoxRandomStartToken !== n ||
          e.blindBoxTimer ||
          (e.blindBoxTimer = e.setManagedInterval(function () {
            if (
              r >= t.blindBoxMaxCount ||
              e.beadsRef.length >= t.maxCapacityBracelet
            )
              return e.emitState(), void e.stopBlindBoxTimer();
            var i = e.getStats().totalPerimeter,
              n = a.filter(function (e) {
                var a = f(e.item);
                return i + a <= t.maxPerimeterMm;
              });
            if (!n.length) return e.emitState(), void e.stopBlindBoxTimer();
            var s = n[Math.floor(Math.random() * n.length)],
              o = s && s.item;
            o &&
            e.addBead(o.id, { silentState: !0, skipPrewarm: !0, sound: !1 })
              ? (r += 1) % 4 == 0 && e.emitState()
              : (e.emitState(), e.stopBlindBoxTimer());
          }, t.blindBoxIntervalMs));
      },
      o = a
        .map(function (e) {
          return e.imgUrl;
        })
        .filter(function (e, t, a) {
          return e && a.indexOf(e) === t;
        })
        .slice(0, 48);
    if (o.length && "function" == typeof this.preloadImageSet) {
      var u = !1,
        d = function () {
          u || ((u = !0), s());
        };
      this.preloadImageSet(o).then(d).catch(d),
        ("function" == typeof this.setManagedTimeout
          ? this.setManagedTimeout.bind(this)
          : setTimeout)(d, 420);
    } else s();
  },
  clearAll: function () {
    this.stopBlindBoxTimer(),
      "function" == typeof this.hideStrungDomOverlay &&
        this.hideStrungDomOverlay(),
      (this.beadsRef = []),
      (this.isStrung = !1),
      (this.animFrameRef = 0),
      (this.globalRotRef = 0),
      (this.dragState = this.createDragState()),
      this.emitState(),
      this.render(),
      o("pop");
  },
  undoLast: function () {
    var e =
      "function" == typeof this.shouldKeepStrungDomOverlay &&
      this.shouldKeepStrungDomOverlay("undo");
    e ||
      "function" != typeof this.hideStrungDomOverlay ||
      this.hideStrungDomOverlay();
    var t = this.beadsRef;
    if (t.length) {
      var a = m(),
        r = t.length - 1,
        i = 0;
      if (
        (t.forEach(function (e, t) {
          var a = e.uid.split("_");
          if (a.length >= 3) {
            var n = parseInt(a[1], 10);
            n >= i && ((i = n), (r = t));
          }
        }),
        t.splice(r, 1),
        this.isStrung &&
          (this.recalculateThetas(t),
          t.length < 8 &&
            ((this.isStrung = !1),
            (this.animFrameRef = 0),
            (this._stableFrameCount = 0),
            this.setRenderQualityMode &&
              this.setRenderQualityMode("interactive"),
            t.forEach(function (e) {
              var t = Math.random() * Math.PI * 2,
                r = a.unstrungForceBase + Math.random() * a.unstrungForceRange;
              (e.oldX = e.x - Math.cos(t) * r),
                (e.oldY = e.y - Math.sin(t) * r),
                (e.rot = Math.random() * Math.PI * 2);
            }),
            (this.dragState = this.createDragState()),
            "function" == typeof this.hideStrungDomOverlay &&
              this.hideStrungDomOverlay())),
        e && this.isStrung)
      )
        return (
          "function" == typeof this.cancelStrungDomFlyIn &&
            this.cancelStrungDomFlyIn(),
          "function" == typeof this.layoutStrungBeadsImmediately &&
            this.layoutStrungBeadsImmediately(t),
          (this._stableFrameCount = 24),
          (this.animFrameRef = 0),
          this.setRenderQualityMode && this.setRenderQualityMode("settled"),
          this.emitState(),
          "function" == typeof this.syncStrungDomOverlay &&
            this.syncStrungDomOverlay({ force: !0 }),
          void o("pop")
        );
      this.emitState(),
        this.isStrung
          ? ((this._stableFrameCount = 0),
            (this.animFrameRef = Math.max(
              10,
              Math.round(0.22 * a.toggleStrungFrames)
            )),
            this.setRenderQualityMode &&
              this.setRenderQualityMode("interactive"),
            this.render(),
            this.properties.active &&
              !this.reqRef &&
              "function" == typeof this.startLoop &&
              this.startLoop())
          : (this.render(),
            this.properties.active &&
              t.length > 0 &&
              !this.reqRef &&
              "function" == typeof this.startLoop &&
              this.startLoop()),
        o("pop");
    }
  },
  toggleStrung: function () {
    var e = this,
      t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      r = t && "object" === a(t) ? t : {};
    "function" == typeof this.resetMotionFrameStats &&
      this.resetMotionFrameStats(this.isStrung ? "unstring" : "collect");
    var i =
        "function" == typeof this.isDiyPerfDebugEnabled &&
        this.isDiyPerfDebugEnabled(),
      n = i && "function" == typeof this.getPerfNow ? this.getPerfNow() : 0;
    this.stopBlindBoxTimer();
    var s =
        !this.isStrung &&
        "function" == typeof this.hasPreparedStrungDomOverlayForCurrentBeads &&
        this.hasPreparedStrungDomOverlayForCurrentBeads(),
      u = !0 === r.skipPrepareOverlay && !s,
      d = this.isStrung;
    s ||
      "function" != typeof this.hideStrungDomOverlay ||
      this.hideStrungDomOverlay({ retainBeads: d });
    var h = this.getStats(),
      l = m(),
      c = function () {
        (e._stableFrameCount = 0),
          e.setRenderQualityMode && e.setRenderQualityMode("interactive"),
          e.render(),
          "function" == typeof e.startLoop && e.startLoop();
        var t =
            "function" == typeof e.setManagedTimeout
              ? e.setManagedTimeout.bind(e)
              : setTimeout,
          a = function () {
            var t = Number(e.animFrameRef) > 0 || !e.isStrung;
            e.ready &&
              !e.reqRef &&
              Array.isArray(e.beadsRef) &&
              e.beadsRef.length > 0 &&
              t &&
              "function" == typeof e.startLoop &&
              e.startLoop();
          };
        [48, 160, 360, 720].forEach(function (e) {
          t(a, e);
        });
      };
    if (this.isStrung)
      return (
        this.beadsRef.forEach(function (e) {
          var t = Math.random() * Math.PI * 2,
            a = l.unstrungForceBase + Math.random() * l.unstrungForceRange;
          (e.oldX = e.x - Math.cos(t) * a),
            (e.oldY = e.y - Math.sin(t) * a),
            (e.rot = Math.random() * Math.PI * 2);
        }),
        (this.isStrung = !1),
        (this.animFrameRef = 0),
        this.emitState(),
        c(),
        void o("hit", "unstrung", 0.8)
      );
    h.totalPerimeter > l.maxPerimeterMm
      ? this.notify(
          "周长超限！当前 "
            .concat((h.totalPerimeter / 10).toFixed(1), "cm，最高 ")
            .concat(l.maxPerimeterMm / 10, "cm")
        )
      : h.beadsCount < 8
      ? this.notify("再添点珠子吧，至少需要 8 颗才能成串！")
      : (this.recalculateThetas(this.beadsRef),
        (this.animFrameRef = l.toggleStrungFrames),
        (this.isStrung = !0),
        u ||
          "function" != typeof this.prepareStrungDomOverlay ||
          this.prepareStrungDomOverlay(),
        this.emitState(),
        c(),
        i &&
          "function" == typeof this.recordDiyPerf &&
          this.recordDiyPerf("strung-toggle-sync", this.getPerfNow() - n, {
            beads: this.beadsRef.length,
            frames: this.animFrameRef,
            totalPerimeter: h.totalPerimeter,
            overlayMounted: !(!this.data || !this.data.showStrungDomOverlay),
            skipPrepareOverlay: u,
            renderWarmupPaused:
              "function" == typeof this.isRenderAssetWarmupPaused
                ? this.isRenderAssetWarmupPaused()
                : !!this._renderAssetWarmupPaused,
          }),
        o("slide", "strung", 0.8));
  },
};
