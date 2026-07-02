var t = require("../../../@babel/runtime/helpers/typeof"),
  e = require("../../../utils/audioEngine").playSound,
  i = require("../constants").getTrayPhysics;
function a(t) {
  var e = Number(t);
  return Number.isFinite(e) ? e : NaN;
}
module.exports = {
  getTouchCandidates: function (e) {
    var i,
      s,
      r = [],
      n = a(e && (null !== (i = e.pageX) && void 0 !== i ? i : e.clientX)),
      o = a(e && (null !== (s = e.pageY) && void 0 !== s ? s : e.clientY)),
      h =
        this.canvasRect && "object" === t(this.canvasRect)
          ? this.canvasRect
          : null;
    if (
      h &&
      Number.isFinite(n) &&
      Number.isFinite(o) &&
      Number.isFinite(h.left) &&
      Number.isFinite(h.top) &&
      Number.isFinite(h.width) &&
      Number.isFinite(h.height) &&
      h.width > 0
    ) {
      var u = this.logicalSize / h.width;
      r.push({
        mode: "pageRect",
        cx: (n - (h.left + h.width / 2)) * u,
        cy: (o - (h.top + h.height / 2)) * u,
      });
    }
    if (!r.length) {
      var d = a(e && e.x),
        l = a(e && e.y);
      if (Number.isFinite(d) && Number.isFinite(l)) {
        var c = this.logicalSize / this.displaySize,
          g = Math.max(0, Number(this.beadLayerOverscanPx) || 0);
        r.push({
          mode: "local",
          cx: (d - g - this.displaySize / 2) * c,
          cy: (l - g - this.displaySize / 2) * c,
        });
      }
    }
    if (!r.length && Number.isFinite(n) && Number.isFinite(o)) {
      var y = this.logicalSize / this.displaySize;
      r.push({
        mode: "pageAsLocal",
        cx: (n - this.displaySize / 2) * y,
        cy: (o - this.displaySize / 2) * y,
      });
    }
    return r;
  },
  getTouchPos: function (t, e) {
    var i = this.getTouchCandidates(t);
    if (!i.length) return null;
    if (e) {
      var a = i.find(function (t) {
        return t.mode === e;
      });
      if (a) return a;
    }
    return i[0];
  },
  getTouchHitResult: function (t, e, i) {
    for (
      var a = null, s = 1 / 0, r = 1 / 0, n = this.beadsRef.length - 1;
      n >= 0;
      n -= 1
    ) {
      var o = this.beadsRef[n],
        h = this.getBeadRenderMetrics(o, i),
        u = h.depthX - i.trayRadius,
        d = h.depthY - i.trayRadius,
        l = Math.hypot(u - t, d - e);
      (r = Math.min(r, l)),
        l < (o.isPendant || o.hangsOutward ? 40 : 35) &&
          l < s &&
          ((s = l), (a = o.uid));
    }
    return {
      clickedUid: a,
      minDist: Number.isFinite(a ? s : r) ? (a ? s : r) : 1 / 0,
    };
  },
  handleTouchStart: function (t) {
    if (!this.properties.photoMode && !this._photoTransitionActive) {
      "function" == typeof this.refreshCanvasRect && this.refreshCanvasRect();
      var a = t.touches && t.touches[0];
      if (a) {
        var s = i(),
          r = this.getTouchPos(a);
        if (r) {
          var n = r.cx,
            o = r.cy,
            h = r.mode,
            u = this.getTouchHitResult(n, o, s).clickedUid,
            d =
              "function" == typeof this.canUseStrungDomBeadDrag &&
              this.canUseStrungDomBeadDrag(u),
            l =
              !u &&
              this.isStrung &&
              this.data &&
              this.data.strungDomOverlayVisible,
            c = this.isStrung && this.data && this.data.strungDomOverlayVisible,
            g = !d && !l && c;
          this.dragState = {
            active: !0,
            uid: u,
            domOverlayActive: d,
            domOverlayRotateActive: l,
            domOverlayDecisionPending: g,
            touchMode: h || null,
            x: n,
            y: o,
            startX: n,
            startY: o,
            lastX: n,
            lastY: o,
            lastAngle: Math.atan2(o, n),
            closestIdx: -1,
          };
          var y = !1;
          d &&
            "function" == typeof this.beginStrungDomDrag &&
            ((y = this.beginStrungDomDrag(u, n, o)),
            (this.dragState.domOverlayActive = y)),
            (this._stableFrameCount = 0),
            this.setRenderQualityMode &&
              this.setRenderQualityMode("interactive");
          var m = !y && !l && !g;
          this.properties.active &&
            m &&
            !this.reqRef &&
            "function" == typeof this.startLoop &&
            this.startLoop(),
            u && e("slide");
        }
      }
    }
  },
  handleTouchMove: function (t) {
    if (
      !this.properties.photoMode &&
      !this._photoTransitionActive &&
      this.dragState.active
    ) {
      var e = t.touches && t.touches[0];
      if (e) {
        var i = this.getTouchPos(e, this.dragState.touchMode);
        if (i) {
          var a = i.cx,
            s = i.cy;
          if (
            ((this.dragState.x = a),
            (this.dragState.y = s),
            this.dragState.domOverlayActive && this.dragState.uid)
          )
            "function" == typeof this.updateStrungDomDragProxy &&
              this.updateStrungDomDragProxy(a, s);
          else {
            if (this.dragState.domOverlayDecisionPending) {
              if (
                !(
                  Math.hypot(
                    a - this.dragState.startX,
                    s - this.dragState.startY
                  ) >= 4
                )
              )
                return;
              (this.dragState.domOverlayDecisionPending = !1),
                this.isStrung ||
                  "function" != typeof this.hideStrungDomOverlay ||
                  this.hideStrungDomOverlay();
            }
            if (null === this.dragState.uid && this.isStrung) {
              for (
                var r = Math.atan2(s, a), n = r - this.dragState.lastAngle;
                n > Math.PI;

              )
                n -= 2 * Math.PI;
              for (; n < -Math.PI; ) n += 2 * Math.PI;
              (this.globalRotRef += n),
                (this.dragState.lastAngle = r),
                this.dragState.domOverlayRotateActive &&
                  "function" == typeof this.updateStrungDomOverlayRotation &&
                  this.updateStrungDomOverlayRotation();
            }
          }
        }
      }
    }
  },
  handleTouchEnd: function () {
    if (!this.properties.photoMode && !this._photoTransitionActive) {
      var t = this.dragState;
      if (t.active) {
        var a = !!t.domOverlayActive,
          s = !!t.domOverlayRotateActive,
          r = i(),
          n = this.beadsRef;
        if (t.uid && Math.hypot(t.x, t.y) > r.trayRadius + r.removeDistancePx) {
          var o = n.findIndex(function (e) {
            return e.uid === t.uid;
          });
          if (-1 !== o)
            return (
              n.splice(o, 1),
              this.isStrung &&
                (this.recalculateThetas(n),
                n.length < 8 && (this.isStrung = !1)),
              (this.dragState = this.createDragState()),
              this.emitState(),
              a &&
                ((this._stableFrameCount = 18),
                (this._strungDomOverlayKey = ""),
                this.isStrung && "function" == typeof this.syncStrungDomOverlay
                  ? ("function" == typeof this.layoutStrungBeadsImmediately &&
                      this.layoutStrungBeadsImmediately(n),
                    this.syncStrungDomOverlay())
                  : "function" == typeof this.hideStrungDomOverlay &&
                    this.hideStrungDomOverlay()),
              void e("pop")
            );
        }
        if (a) {
          "function" == typeof this.updateStrungDomDragProxy &&
            this.updateStrungDomDragProxy(t.x, t.y, { force: !0 });
          var h = n.findIndex(function (e) {
              return e.uid === t.uid;
            }),
            u = Number.isFinite(Number(t.closestIdx))
              ? Number(t.closestIdx)
              : -1;
          -1 === u &&
            Number.isFinite(Number(this._strungDomDragTargetIndex)) &&
            (u = Number(this._strungDomDragTargetIndex));
          var d = !1;
          if (
            -1 !== h &&
            -1 !== u &&
            h !== (u = Math.max(0, Math.min(n.length, u)))
          ) {
            var l = n.splice(h, 1)[0];
            h < u && (u -= 1),
              (u = Math.max(0, Math.min(n.length, u))),
              n.splice(u, 0, l),
              (d = !0);
          }
          if (
            (this.isStrung &&
              (this.recalculateThetas(n),
              "function" == typeof this.layoutStrungBeadsImmediately &&
                this.layoutStrungBeadsImmediately(n)),
            (this.dragState = this.createDragState()),
            (this._stableFrameCount = 18),
            (this._strungDomOverlayKey = ""),
            d)
          ) {
            try {
              wx.vibrateShort({ type: "light" });
            } catch (t) {}
            e("pop"), this.emitState();
          }
          "function" == typeof this.syncStrungDomOverlay &&
            this.syncStrungDomOverlay();
        } else {
          if (t.uid && this.isStrung && -1 !== t.closestIdx) {
            var c = n.findIndex(function (e) {
                return e.uid === t.uid;
              }),
              g = t.closestIdx;
            if (-1 !== c && c !== g) {
              var y = n.splice(c, 1)[0];
              c < g && (g -= 1), n.splice(g, 0, y), this.recalculateThetas(n);
              try {
                wx.vibrateShort({ type: "light" });
              } catch (t) {}
              e("pop"), this.emitState();
            }
          }
          (this.dragState = this.createDragState()),
            (a || s) &&
              "function" == typeof this.syncStrungDomOverlay &&
              (s &&
                "function" == typeof this.layoutStrungBeadsImmediately &&
                this.layoutStrungBeadsImmediately(n),
              (this._stableFrameCount = 18),
              (this._strungDomOverlayKey = ""),
              s &&
                (this._strungDomOverlayRotateReq &&
                  (this.beadCanvas &&
                  "function" == typeof this.beadCanvas.cancelAnimationFrame
                    ? this.beadCanvas.cancelAnimationFrame(
                        this._strungDomOverlayRotateReq
                      )
                    : clearTimeout(this._strungDomOverlayRotateReq),
                  (this._strungDomOverlayRotateReq = null)),
                (this._strungDomOverlayRotatePendingStyle = ""),
                this.data &&
                  this.data.strungDomOverlayRotating &&
                  this.setData({ strungDomOverlayRotating: !1 })),
              this.syncStrungDomOverlay());
        }
      }
    }
  },
};
