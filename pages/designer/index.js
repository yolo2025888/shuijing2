var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../@babel/runtime/helpers/typeof"),
  i = require("../../contracts/navigation/query-contract").appendQueryParams,
  a = require("../../facades/v2/designer-facade").loadDesignerPageModel,
  n = require("../../domain/v2/preset-detail-domain").buildPresetDetailPayload,
  o = require("../../facades/v2/preset-detail-cache"),
  s = o.writePresetDetailCache,
  d = o.writePresetDetailVisualLock,
  u = require("../../utils/navigation/navigate-with-fallback"),
  c = u.openDetailPage,
  g = u.openTopLevelIndexTab,
  m = u.backToKnownSource;
function f(e) {
  var r = null;
  try {
    r =
      "undefined" != typeof wx &&
      "function" == typeof wx.getMenuButtonBoundingClientRect
        ? wx.getMenuButtonBoundingClientRect()
        : null;
  } catch (e) {
    r = null;
  }
  var t = Number(e && e.statusBarHeight) || 22;
  return {
    top:
      r && Number.isFinite(Number(r.top))
        ? Math.max(0, Math.round(Number(r.top)))
        : t,
    height:
      r && Number.isFinite(Number(r.height))
        ? Math.max(1, Math.round(Number(r.height)))
        : 32,
  };
}
function l(e) {
  var r = String(e || "").trim();
  if (!r) return {};
  var t = r;
  try {
    t = decodeURIComponent(r);
  } catch (e) {
    t = r;
  }
  for (var i = t.split("&"), a = {}, n = 0; n < i.length; n += 1) {
    var o = String(i[n] || "").trim();
    if (o) {
      var s = o.indexOf("=");
      if (!(s <= 0)) {
        var d = o.slice(0, s).trim().toLowerCase(),
          u = o.slice(s + 1).trim();
        d && u && (a[d] = u);
      }
    }
  }
  return a;
}
function h(e) {
  return (
    String(e && e.id ? e.id : "")
      .trim()
      .toLowerCase() || "designer"
  );
}
function p(e) {
  return (function (e) {
    var r = String(e || "").trim();
    if (!r) return "";
    try {
      return decodeURIComponent(r);
    } catch (e) {
      return r;
    }
  })(e && e.name ? e.name : "");
}
function v(e, r) {
  return {
    id: String(e || "designer").trim(),
    name: String(r || "StoneLab.").trim() || "StoneLab.",
    role: "共创设计师",
    bio: "",
    tags: [],
    avatar: "",
    cover: "",
    works: [],
    stats: [
      { label: "已发布作品", value: "0" },
      { label: "引用数量", value: "0" },
    ],
  };
}
function b(e, r, i, a) {
  if (e) {
    var n = String(r || "").trim();
    if (n) {
      var o = Number(i);
      if (Number.isFinite(o) && !(o <= 0)) {
        var s = Object.assign(
          { durationMs: Math.max(0, Date.now() - o) },
          a && "object" === t(a) ? a : {}
        );
        "undefined" != typeof console &&
          "function" == typeof console.info &&
          console.info("[designer-perf]", n, s);
      }
    }
  }
}
Page({
  data: {
    statusBarHeight: 44,
    navTopPx: 22,
    navHeightPx: 32,
    designerId: "designer",
    designerName: "",
    creatorUserId: "",
    designer: { works: [], stats: [] },
  },
  applyDesignerModel: function (e, r) {
    if (e && "object" === t(e)) {
      var i = String(e.name || this.data.designerName || "").trim();
      this.setData({ designerName: i || this.data.designerName, designer: e }),
        this._firstContentfulMarked ||
          ((this._firstContentfulMarked = !0),
          b(this, "first_contentful_section_ms", this._bootStartedAt, {
            source: String(r || "unknown").trim() || "unknown",
          }));
    }
  },
  loadDesignerModel: function (i) {
    var n = this;
    return r(
      e().mark(function r() {
        var o, s, d;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (o = i && "object" === t(i) ? i : {}),
                  (s = Number(n._requestNonce || 0)),
                  (e.next = 4),
                  a({
                    designerId: n.data.designerId,
                    designerName: n.data.designerName,
                    creatorUserId: n.data.creatorUserId,
                    forceRemote: !0 === o.forceRemote,
                    revalidateInBackground: !1,
                    allowLegacyBootstrapFallback: !/^\d+$/.test(
                      String(n.data.creatorUserId || "").trim()
                    ),
                  })
                );
              case 4:
                if (((d = e.sent), s === Number(n._requestNonce || 0))) {
                  e.next = 7;
                  break;
                }
                return e.abrupt("return");
              case 7:
                n.applyDesignerModel(
                  d,
                  o.source || (o.forceRemote ? "remote" : "cache")
                );
              case 8:
              case "end":
                return e.stop();
            }
        }, r);
      })
    )();
  },
  scheduleRemoteRefresh: function () {
    var e = this,
      r = function () {
        e.loadDesignerModel({ forceRemote: !0, source: "remote_refresh" });
      };
    "function" != typeof setTimeout ? r() : setTimeout(r, 32);
  },
  onLoad: function (t) {
    var i = this;
    return r(
      e().mark(function r() {
        var a, n, o, s, d, u, c, g, m, b;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (i._bootStartedAt = Date.now()),
                  (i._firstContentfulMarked = !1),
                  (i._coverImageMarked = !1),
                  (i._requestNonce = Number(i._requestNonce || 0) + 1),
                  (a =
                    "function" == typeof wx.getWindowInfo
                      ? wx.getWindowInfo()
                      : {}),
                  (n = l(t && t.scene ? t.scene : "")),
                  (o = h(t)),
                  (s = String(n.cid || n.creatorid || "").trim()),
                  (d = String(n.uid || n.creatoruserid || "").trim()),
                  (u = o && "designer" !== o ? o : s || "designer"),
                  (c = String(
                    (t && t.creatorUserId ? t.creatorUserId : "") || d
                  ).trim()),
                  (g = p(t)),
                  (i._entryFrom = String((t && t.from) || "")
                    .trim()
                    .toLowerCase()),
                  (m = v(u, g)),
                  (b = f(a)),
                  i.setData({
                    statusBarHeight: 2 * (a.statusBarHeight || 44),
                    navTopPx: b.top,
                    navHeightPx: b.height,
                    designerId: u,
                    designerName: m.name,
                    creatorUserId: c,
                    designer: m,
                  }),
                  i.applyDesignerModel(m, "initial_model"),
                  (e.next = 19),
                  i.loadDesignerModel({ forceRemote: !1, source: "cache" })
                );
              case 19:
                i.scheduleRemoteRefresh();
              case 20:
              case "end":
                return e.stop();
            }
        }, r);
      })
    )();
  },
  handleCoverImageLoaded: function () {
    this._coverImageMarked ||
      ((this._coverImageMarked = !0),
      b(this, "inspiration_first_image_ms", this._bootStartedAt, {
        designerId: String((this.data && this.data.designerId) || "").trim(),
      }));
  },
  handleWorkImageError: function (e) {
    var r = String(
      (e &&
        e.currentTarget &&
        e.currentTarget.dataset &&
        e.currentTarget.dataset.presetId) ||
        ""
    ).trim();
    if (r) {
      var i = String(
          (e &&
            e.currentTarget &&
            e.currentTarget.dataset &&
            e.currentTarget.dataset.src) ||
            ""
        ).trim(),
        a =
          this.data && this.data.designer && "object" === t(this.data.designer)
            ? this.data.designer
            : null;
      if (a) {
        var n = (function (e, r, i) {
          var a = Array.isArray(e) ? e : [],
            n = String(r || "").trim();
          if (!n || !a.length) return a;
          var o = String(i || "").trim();
          return a.map(function (e) {
            var r = e && "object" === t(e) ? e : {};
            if (String(r.presetId || r.id || "").trim() !== n) return r;
            for (
              var i = []
                  .concat(Array.isArray(r.images) ? r.images : [])
                  .concat(Array.isArray(r.workImages) ? r.workImages : [])
                  .concat(Array.isArray(r.work_images) ? r.work_images : [])
                  .concat(Array.isArray(r.proofImages) ? r.proofImages : []),
                a = "",
                s = 0;
              s < i.length;
              s += 1
            ) {
              var d = String(i[s] || "").trim();
              if (d && (!o || d !== o)) {
                a = d;
                break;
              }
            }
            return Object.assign({}, r, { previewUrl: a, img: a });
          });
        })(a.works, r, i);
        this.setData({ designer: Object.assign({}, a, { works: n }) });
      }
    }
  },
  openWork: function (e) {
    var r =
        e && e.currentTarget && e.currentTarget.dataset
          ? e.currentTarget.dataset
          : {},
      a = String(r.presetId || "").trim();
    if (a) {
      var o = (function (e, r) {
          var t = String(r || "").trim();
          if (!t) return null;
          for (
            var i =
                e &&
                e.data &&
                e.data.designer &&
                Array.isArray(e.data.designer.works)
                  ? e.data.designer.works
                  : [],
              a = 0;
            a < i.length;
            a += 1
          ) {
            var n = i[a];
            if (String((n && (n.presetId || n.id)) || "").trim() === t)
              return n;
          }
          return null;
        })(this, a),
        u = (function (e) {
          for (
            var r,
              i = e && "object" === t(e) ? e : {},
              a = [
                i.preview_url,
                i.snapshot_url,
                i.cover_url,
                i.image_url,
                i.previewUrl,
                i.img,
              ].concat(Array.isArray(i.images) ? i.images : []),
              n = "",
              o = 0;
            o < a.length;
            o += 1
          ) {
            var s = String(a[o] || "").trim();
            if (
              s &&
              (n || (n = s),
              (r = void 0),
              (r = String(s || "")
                .trim()
                .toLowerCase()) &&
                0 !== r.indexOf("wxfile://") &&
                0 !== r.indexOf("blob:") &&
                0 !== r.indexOf("data:image") &&
                0 !== r.indexOf("http://tmp/") &&
                !/^[a-z]:\\/.test(r))
            )
              return s;
          }
          return n;
        })(o);
      if (o) {
        var m = n(o, {
          sourceDesignerName: String(
            o.sourceDesignerName || o.authorName || ""
          ).trim(),
          sourceDesignerId: String(
            o.sourceDesignerId || o.designerId || ""
          ).trim(),
          designerId: String(o.designerId || o.sourceDesignerId || "").trim(),
          authorName: String(o.authorName || o.sourceDesignerName || "").trim(),
          authorAvatar: String(o.authorAvatar || "").trim(),
        });
        m &&
          (d(a, {
            previewUrl: u,
            pattern: Array.isArray(o.pattern) ? o.pattern.slice() : [],
            beadMm: Number(void 0 !== o.beadMm ? o.beadMm : o.bead_mm) || 11,
            previewRenderVersion:
              Number(
                void 0 !== o.previewRenderVersion
                  ? o.previewRenderVersion
                  : o.preview_render_version
              ) || 1,
          }),
          s(m));
      }
      var f = i("/pages/product/index", { id: a, from: "designer" });
      c(
        f,
        "product_detail" === this._entryFrom
          ? "designer_detail"
          : "designer_work",
        { replace: "product_detail" === this._entryFrom }
      );
    } else g("inspiration", { source: "designer_work_empty" });
  },
  goBack: function () {
    m("product_detail" === this._entryFrom ? "inspiration" : "home", {
      query: { source: "designer_back" },
    });
  },
});
