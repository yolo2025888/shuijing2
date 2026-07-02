var e = require("../@babel/runtime/helpers/objectSpread2"),
  r = require("../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../@babel/runtime/helpers/typeof"),
  a = require("../services/api/index"),
  o = a.request,
  i = a.normalizeUrl,
  s = a.getAuthToken,
  u = a.API_ENDPOINTS,
  c = require("./catalogRepository").resolveMaterialsByCodes,
  p = require("../services/api/requestGuards"),
  d = p.isSourceDesignerIdConstraintError,
  l = p.inspectCheckoutItemsIntegrity,
  f = require("../utils/logger"),
  m = require("../utils/cartPatternMaterialCodes").repairPatternMaterialCodes;
function h() {
  var e = Date.now().toString(36),
    r = Math.random().toString(36).slice(2, 10);
  return "mini:".concat(e, ":").concat(r);
}
function g(e) {
  if (null == e) return "";
  var r = String(e).trim();
  return r && /^[0-9]+$/.test(r) ? r : "";
}
function w(e) {
  var r = String(e || "").trim();
  if (!r) return "";
  if (/^addr_[0-9]+$/.test(r)) return r;
  var t = r.replace(/[^0-9]/g, "");
  return t ? "addr_".concat(t) : "";
}
function _(e) {
  var r = String(e || "").trim();
  return b(r) ? "" : r ? r.slice(0, 2048) : "";
}
function y(e) {
  var r = String(e || "").trim();
  return /^[0-9]+$/.test(r) ? r : "";
}
function b(e) {
  var r = String(e || "").trim();
  return (
    !!r &&
    (!!/^https?:\/\/(?:127\.0\.0\.1|localhost)(?::[0-9]+)?\/__tmp__\//i.test(
      r
    ) ||
      !!/^https?:\/\/(?:127\.0\.0\.1|localhost)(?::[0-9]+)?\/tmp\//i.test(r) ||
      !!(/^http:\/\/tmp\//i.test(r) || r.indexOf("://tmp/") >= 0) ||
      (!/^https?:\/\//i.test(r) &&
        (!!/^wxfile:\/\//i.test(r) ||
          !(!/^tmp\//i.test(r) && !/^\/tmp\//i.test(r)))))
  );
}
function x(e) {
  return (
    [
      e && e.orderSnapshotUrl,
      e && e.order_snapshot_url,
      e && e.snapshotUrl,
      e && e.snapshot_url,
      e && e.previewUrl,
      e && e.preview_url,
      e && e.shareImageUrl,
      e && e.share_image_url,
    ]
      .map(function (e) {
        return String(e || "").trim();
      })
      .find(b) || ""
  );
}
function v() {
  return "mini_order_snapshot_"
    .concat(Date.now(), "_")
    .concat(Math.random().toString(36).slice(2, 10));
}
function I(e) {
  if (!e) return {};
  if ("object" === n(e)) return e;
  try {
    return JSON.parse(String(e || "{}"));
  } catch (e) {
    return {};
  }
}
function S(e) {
  var r = Number((e && e.statusCode) || 0),
    t = I(e && e.data),
    n = String(
      t.message ||
        t.error ||
        t.code ||
        "ORDER_SNAPSHOT_UPLOAD_HTTP_".concat(r || "UNKNOWN")
    ),
    a = new Error(n);
  return (a.statusCode = r), (a.responseData = t), a;
}
function E(e) {
  return new Promise(function (r) {
    "undefined" != typeof wx && "function" == typeof wx.getFileInfo
      ? wx.getFileInfo({
          filePath: e,
          success: r,
          fail: function () {
            return r({ size: 0 });
          },
        })
      : r({ size: 0 });
  });
}
function O(e) {
  return new Promise(function (r) {
    "undefined" != typeof wx && "function" == typeof wx.getImageInfo
      ? wx.getImageInfo({
          src: e,
          success: function (e) {
            return r(e || null);
          },
          fail: function () {
            return r(null);
          },
        })
      : r(null);
  });
}
function A(e, r) {
  var t = e && "object" === n(e) ? e : {},
    a = r && "object" === n(r) ? r : {};
  return {
    width: Math.max(0, Math.round(Number(t.width || 0))),
    height: Math.max(0, Math.round(Number(t.height || 0))),
    size: Math.max(0, Math.round(Number(a.size || 0))),
  };
}
function N(e, r) {
  return new Promise(function (t) {
    "undefined" != typeof wx && "function" == typeof wx.compressImage
      ? wx.compressImage({
          src: e,
          quality: r,
          success: function (r) {
            return t(String(r && r.tempFilePath ? r.tempFilePath : e));
          },
          fail: function () {
            return t(e);
          },
        })
      : t(e);
  });
}
function k(e, r) {
  return new Promise(function (t) {
    var n = Math.max(0, Math.round(Number((r && r.width) || 0))),
      a = Math.max(0, Math.round(Number((r && r.height) || 0))),
      o = Math.max(n, a);
    if (!n || !a || o <= 1280) t(e);
    else if (
      "undefined" != typeof wx &&
      "function" == typeof wx.createOffscreenCanvas
    ) {
      var i = null,
        s = null;
      try {
        var u = 1280 / o,
          c = Math.max(1, Math.round(n * u)),
          p = Math.max(1, Math.round(a * u)),
          d =
            (i = wx.createOffscreenCanvas({
              type: "2d",
              width: c,
              height: p,
            })) && "function" == typeof i.getContext
              ? i.getContext("2d")
              : null;
        if (!i || !d || "function" != typeof i.createImage) return void t(e);
        ((s = i.createImage()).onload = function () {
          try {
            if (
              (d.clearRect(0, 0, c, p),
              d.drawImage(s, 0, 0, c, p),
              "function" != typeof wx.canvasToTempFilePath)
            )
              return void t(e);
            wx.canvasToTempFilePath({
              canvas: i,
              fileType: "jpg",
              quality: 0.86,
              destWidth: c,
              destHeight: p,
              success: function (r) {
                return t(String(r && r.tempFilePath ? r.tempFilePath : e));
              },
              fail: function () {
                return t(e);
              },
            });
          } catch (r) {
            t(e);
          }
        }),
          (s.onerror = function () {
            return t(e);
          }),
          (s.src = String((r && r.path) || e || "").trim());
      } catch (r) {
        t(e);
      }
    } else t(e);
  });
}
function P(e) {
  return U.apply(this, arguments);
}
function U() {
  return (U = t(
    r().mark(function e(t) {
      var n, a, o, i, s, u, c, p;
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (n = String(t || "").trim()), (e.next = 3), E(n);
            case 3:
              return (a = e.sent), (e.next = 6), O(n);
            case 6:
              return (o = e.sent), (i = A(o, a)), (e.next = 10), k(n, o);
            case 10:
              return (n = e.sent), (e.next = 13), E(n);
            case 13:
              if (((s = e.sent), n !== t)) {
                e.next = 18;
                break;
              }
              (e.t0 = o), (e.next = 21);
              break;
            case 18:
              return (e.next = 20), O(n);
            case 20:
              e.t0 = e.sent;
            case 21:
              if (
                ((u = e.t0),
                (c = A(u, s)),
                !(Number((s && s.size) || 0) > 1048576))
              ) {
                e.next = 34;
                break;
              }
              return (e.next = 26), N(n, 82);
            case 26:
              return (n = e.sent), (e.next = 29), E(n);
            case 29:
              return (s = e.sent), (e.next = 32), O(n);
            case 32:
              (u = e.sent), (c = A(u, s));
            case 34:
              if (!(Number((s && s.size) || 0) > 1048576)) {
                e.next = 45;
                break;
              }
              return (e.next = 37), N(n, 72);
            case 37:
              return (n = e.sent), (e.next = 40), E(n);
            case 40:
              return (s = e.sent), (e.next = 43), O(n);
            case 43:
              (u = e.sent), (c = A(u, s));
            case 45:
              if (!(Number((s && s.size) || 0) > 1048576)) {
                e.next = 50;
                break;
              }
              throw (
                (((p = new Error("ORDER_SNAPSHOT_FILE_TOO_LARGE")).code =
                  "ORDER_SNAPSHOT_FILE_TOO_LARGE"),
                (p.snapshotUploadMeta = { original: i, prepared: c }),
                p)
              );
            case 50:
              return e.abrupt("return", {
                filePath: n,
                meta: { original: i, prepared: c },
              });
            case 51:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function R(e) {
  return C.apply(this, arguments);
}
function C() {
  return (C = t(
    r().mark(function e(t) {
      var a, o, c, p, d;
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if ((a = String(t || "").trim())) {
                e.next = 3;
                break;
              }
              throw new Error("ORDER_SNAPSHOT_FILE_PATH_MISSING");
            case 3:
              if (
                "undefined" != typeof wx &&
                "function" == typeof wx.uploadFile
              ) {
                e.next = 5;
                break;
              }
              throw new Error("ORDER_SNAPSHOT_UPLOAD_UNSUPPORTED");
            case 5:
              return (e.next = 7), P(a);
            case 7:
              return (
                (o = e.sent),
                (c = o.filePath),
                (p = s()),
                (d = { "x-request-id": v() }),
                p && (d.Authorization = "Bearer ".concat(p)),
                e.abrupt(
                  "return",
                  new Promise(function (e, r) {
                    wx.uploadFile({
                      url: i(u.orderSnapshots),
                      filePath: c,
                      name: "file",
                      header: d,
                      success: function (t) {
                        var n = Number((t && t.statusCode) || 0);
                        n >= 200 && n < 300 ? e(I(t && t.data)) : r(S(t));
                      },
                      fail: r,
                    });
                  }).catch(function (e) {
                    throw (
                      (e &&
                        "object" === n(e) &&
                        (e.snapshotUploadMeta = o.meta),
                      e)
                    );
                  })
                )
              );
            case 13:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function T(e) {
  if (!e || "object" !== n(e) || Array.isArray(e)) return {};
  var r = {},
    t = String(e.shipping || "").trim();
  return /^[A-Za-z0-9_-]{1,64}$/.test(t) && (r.shipping = t), r;
}
function D(e) {
  if (!Array.isArray(e) || 0 === e.length) throw new Error("NO_CHECKED_ITEMS");
}
function M(e) {
  return L.apply(this, arguments);
}
function L() {
  return (L = t(
    r().mark(function e(t) {
      var n, a, o, i;
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (
                (n = Array.from(
                  new Set(
                    (t || [])
                      .flatMap(function (e) {
                        return Array.isArray(e && e.pattern) ? e.pattern : [];
                      })
                      .map(function (e) {
                        return String(e || "").trim();
                      })
                      .filter(Boolean)
                  )
                )).length
              ) {
                e.next = 3;
                break;
              }
              return e.abrupt("return");
            case 3:
              return (e.next = 5), c(n, { forceRemote: !0, preferCache: !1 });
            case 5:
              if (
                ((a = e.sent),
                (o = Array.isArray(a && a.missingCodes) ? a.missingCodes : [])
                  .length)
              ) {
                e.next = 9;
                break;
              }
              return e.abrupt("return");
            case 9:
              throw (
                (((i = new Error(
                  "CHECKOUT_MATERIAL_UNAVAILABLE:".concat(
                    o.slice(0, 5).join(",")
                  )
                )).code = "CHECKOUT_MATERIAL_UNAVAILABLE"),
                (i.missingCodes = o),
                i)
              );
            case 13:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function j(e) {
  var r = (e || [])[0] || {},
    t =
      String(r.name || "").trim() ||
      "Scheme #".concat(Number(r.index || 0) + 1),
    n = String(r.reason || "unknown"),
    a = new Error("CHECKOUT_SCHEME_INVALID:".concat(t, ":").concat(n));
  return (a.code = "CHECKOUT_SCHEME_INVALID"), (a.invalidItems = e || []), a;
}
function q(e) {
  return (e || [])
    .filter(function (e) {
      return e && e.checked;
    })
    .map(function (e) {
      var r,
        t,
        a = (function (e) {
          if (null == e) return "";
          var r = String(e).trim();
          return r && /^[0-9]+$/.test(r) ? r : "";
        })(e.source_designer_id || e.sourceDesignerId),
        o = g(e.source_creator_work_id || e.sourceCreatorWorkId),
        i = g(
          e.source_inspiration_template_id || e.sourceInspirationTemplateId
        ),
        s =
          ((r = e.source_entry || e.sourceEntry),
          (t = String(r || "").trim()),
          /^[A-Za-z0-9_-]{1,64}$/.test(t) ? t : ""),
        u = e.materialSnapshot || e.materialMap,
        c = {
          id: e.id,
          name: e.name || e.displayName || "我的专属设计",
          pattern: m(e.pattern, u),
          perim: Number(e.perim || 0),
          price: Number(e.price || 0),
          bgIndex: Number(e.bgIndex || 0),
          mode: e.mode || "bracelet",
        },
        p = x(e),
        d = _(
          e.snapshotUrl ||
            e.snapshot_url ||
            e.previewUrl ||
            e.preview_url ||
            e.shareImageUrl ||
            e.share_image_url ||
            e.imageUrl ||
            e.image_url
        );
      p
        ? ((c.previewUrl = p), (c.snapshotUrl = p), (c.shareImageUrl = p))
        : d &&
          ((c.previewUrl = d),
          (c.snapshotUrl = d),
          (c.shareImageUrl = _(e.shareImageUrl || e.share_image_url || d)));
      var l = y(e.snapshotUploadId || e.snapshot_upload_id);
      l && (c.snapshotUploadId = l),
        a && (c.source_designer_id = a),
        o && (c.source_creator_work_id = o),
        i && (c.source_inspiration_template_id = i),
        s && (c.source_entry = s);
      var f = (function (e) {
        if (!e || "object" !== n(e) || Array.isArray(e)) return {};
        var r = {};
        return (
          ["packaging", "certificate"].forEach(function (t) {
            var n = String(e[t] || "").trim();
            /^[A-Za-z0-9_-]{1,64}$/.test(n) && (r[t] = n);
          }),
          r
        );
      })(e.selectedOptions);
      return Object.keys(f).length && (c.selectedOptions = f), c;
    });
}
function F(e) {
  return H.apply(this, arguments);
}
function H() {
  return (H = t(
    r().mark(function e(t) {
      var n, a, o, i, s, u, c, p, d;
      return r().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                (n = []), (a = 0);
              case 2:
                if (!(a < (t || []).length)) {
                  e.next = 39;
                  break;
                }
                if (
                  ((o = t[a]),
                  !(i = y(o && (o.snapshotUploadId || o.snapshot_upload_id))))
                ) {
                  e.next = 8;
                  break;
                }
                return (
                  n.push(Object.assign({}, o, { snapshotUploadId: i })),
                  e.abrupt("continue", 36)
                );
              case 8:
                if ((s = x(o))) {
                  e.next = 12;
                  break;
                }
                return n.push(o), e.abrupt("continue", 36);
              case 12:
                return (e.prev = 12), (e.next = 15), R(s);
              case 15:
                if (
                  ((u = e.sent),
                  (c = y(u && u.snapshotUploadId)),
                  (p = _((u && (u.snapshotUrl || u.url)) || "")),
                  c && p)
                ) {
                  e.next = 20;
                  break;
                }
                throw new Error("ORDER_SNAPSHOT_UPLOAD_INVALID_RESPONSE");
              case 20:
                n.push(
                  Object.assign({}, o, {
                    snapshotUploadId: c,
                    previewUrl: p,
                    snapshotUrl: p,
                    shareImageUrl: p,
                  })
                ),
                  (e.next = 36);
                break;
              case 23:
                (e.prev = 23),
                  (e.t0 = e.catch(12)),
                  f.warn(
                    "[order-repo] snapshot_upload:soft_failed",
                    Object.assign(
                      {
                        itemId: String(o && o.id ? o.id : ""),
                        snapshotMeta:
                          e.t0 && e.t0.snapshotUploadMeta
                            ? e.t0.snapshotUploadMeta
                            : null,
                      },
                      G(e.t0)
                    )
                  ),
                  delete (d = Object.assign({}, o)).snapshotUploadId,
                  delete d.snapshot_upload_id,
                  b(d.previewUrl) && delete d.previewUrl,
                  b(d.preview_url) && delete d.preview_url,
                  b(d.snapshotUrl) && delete d.snapshotUrl,
                  b(d.snapshot_url) && delete d.snapshot_url,
                  b(d.shareImageUrl) && delete d.shareImageUrl,
                  b(d.share_image_url) && delete d.share_image_url,
                  n.push(d);
              case 36:
                (a += 1), (e.next = 2);
                break;
              case 39:
                return e.abrupt("return", n);
              case 40:
              case "end":
                return e.stop();
            }
        },
        e,
        null,
        [[12, 23]]
      );
    })
  )).apply(this, arguments);
}
function z(e) {
  return (e || []).map(function (e) {
    var r = Object.assign({}, e);
    return delete r.source_designer_id, r;
  });
}
function K(e) {
  var r = String((e && e.message) || "");
  return !!r && d(r);
}
function G(e) {
  return {
    message: String((e && e.message) || ""),
    statusCode: Number(e && e.statusCode ? e.statusCode : 0) || void 0,
    requestId: String(
      (e && e.requestId) ||
        (e && e.responseData && e.responseData.requestId) ||
        ""
    ),
  };
}
function B(e, r) {
  return Q.apply(this, arguments);
}
function Q() {
  return (Q = t(
    r().mark(function e(t, n) {
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return e.abrupt(
                "return",
                o({
                  url: u.checkoutPreview,
                  method: "POST",
                  data: { items: t, selectedOptions: T(n) },
                })
              );
            case 1:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function $() {
  return ($ = t(
    r().mark(function e(t) {
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return e.abrupt(
                "return",
                o({
                  url: u.checkoutOptions,
                  method: "GET",
                  data: t ? { scope: t } : {},
                })
              );
            case 1:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function V(e, r) {
  var t = Array.isArray(r && r.items) ? r.items : [];
  if (!t.length) return e;
  var n = new Map();
  return (
    t.forEach(function (e) {
      var r = String(e && e.id ? e.id : "").trim();
      r && n.set(r, Number(e.itemAmount || 0));
    }),
    e.map(function (e) {
      var r = String(e && e.id ? e.id : "").trim();
      return r && n.has(r)
        ? Object.assign({}, e, { price: Number(n.get(r) || 0) })
        : e;
    })
  );
}
function W(e, r) {
  return Z.apply(this, arguments);
}
function Z() {
  return (Z = t(
    r().mark(function e(t, a) {
      var o, i, s, u, c;
      return r().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((o = a && "object" === n(a) ? a : {}),
                  (i = l(q(t))),
                  (s = i.validItems),
                  !(i.invalidItems.length > 0))
                ) {
                  e.next = 5;
                  break;
                }
                throw j(i.invalidItems);
              case 5:
                return D(s), (e.next = 8), M(s);
              case 8:
                return (
                  f.info("[order-repo] preview:start", { itemCount: s.length }),
                  (e.prev = 9),
                  (e.next = 12),
                  B(s, o.selectedOptions)
                );
              case 12:
                return (
                  (u = e.sent),
                  f.info("[order-repo] preview:done", {
                    itemCount: Array.isArray(u && u.items) ? u.items.length : 0,
                    payableAmount: Number(
                      u && u.payableAmount ? u.payableAmount : 0
                    ),
                  }),
                  e.abrupt("return", u)
                );
              case 17:
                if (((e.prev = 17), (e.t0 = e.catch(9)), K(e.t0))) {
                  e.next = 21;
                  break;
                }
                throw e.t0;
              case 21:
                return (
                  f.warn("[order-repo] preview:retry_without_source_designer", {
                    itemCount: s.length,
                    message: String((e.t0 && e.t0.message) || ""),
                  }),
                  (e.next = 24),
                  B(z(s), o.selectedOptions)
                );
              case 24:
                return (
                  (c = e.sent),
                  f.info("[order-repo] preview:done_after_retry", {
                    itemCount: Array.isArray(c && c.items) ? c.items.length : 0,
                    payableAmount: Number(
                      c && c.payableAmount ? c.payableAmount : 0
                    ),
                  }),
                  e.abrupt("return", c)
                );
              case 27:
              case "end":
                return e.stop();
            }
        },
        e,
        null,
        [[9, 17]]
      );
    })
  )).apply(this, arguments);
}
function Y() {
  return (Y = t(
    r().mark(function t(n, a) {
      var i, s, c, p, d, m, g, _, y, b, x;
      return r().wrap(
        function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                if (
                  ((i = l(q(n))),
                  (s = i.validItems),
                  !(i.invalidItems.length > 0))
                ) {
                  r.next = 4;
                  break;
                }
                throw j(i.invalidItems);
              case 4:
                if ((D(s), (c = w(a && a.addressId ? a.addressId : "")))) {
                  r.next = 8;
                  break;
                }
                throw new Error("ADDRESS_REQUIRED");
              case 8:
                if (
                  ((p = a && a.idempotencyKey ? String(a.idempotencyKey) : h()),
                  f.info("[order-repo] create_order:start", {
                    itemCount: s.length,
                    addressId: c,
                    hasCheckoutPreview: !(!a || !a.checkoutPreview),
                    idempotencyKey: p,
                  }),
                  (d = a && a.checkoutPreview ? a.checkoutPreview : null) &&
                    !0 === d.localFallback &&
                    (f.warn(
                      "[order-repo] create_order:ignore_local_fallback_preview",
                      { itemCount: s.length, addressId: c, idempotencyKey: p }
                    ),
                    (d = null)),
                  d && Array.isArray(d.items) && d.items.length)
                ) {
                  r.next = 16;
                  break;
                }
                return (
                  (r.next = 15),
                  W(n, { selectedOptions: a && a.selectedOptions })
                );
              case 15:
                d = r.sent;
              case 16:
                return (r.next = 18), F(V(s, d));
              case 18:
                if (
                  ((m = r.sent),
                  !(
                    (g =
                      Number(
                        d && void 0 !== d.payableAmount
                          ? d.payableAmount
                          : a && a.totalAmount
                      ) || 0) < 0
                  ))
                ) {
                  r.next = 22;
                  break;
                }
                throw new Error("PAYABLE_AMOUNT_INVALID");
              case 22:
                return (
                  (_ = {
                    items: m,
                    addressId: c,
                    totalAmount: g,
                    selectedOptions: T(
                      (a && a.selectedOptions) || (d && d.selectedOptions)
                    ),
                  }),
                  (y = null),
                  (r.prev = 24),
                  (r.next = 27),
                  o({
                    url: u.createOrder,
                    method: "POST",
                    header: { "idempotency-key": p },
                    data: _,
                  })
                );
              case 27:
                (y = r.sent), (r.next = 39);
                break;
              case 30:
                if (
                  ((r.prev = 30),
                  (r.t0 = r.catch(24)),
                  f.warn(
                    "[order-repo] create_order:failed",
                    Object.assign(
                      { itemCount: m.length, addressId: c, idempotencyKey: p },
                      G(r.t0)
                    )
                  ),
                  K(r.t0))
                ) {
                  r.next = 35;
                  break;
                }
                throw r.t0;
              case 35:
                return (
                  (r.next = 37),
                  o({
                    url: u.createOrder,
                    method: "POST",
                    header: { "idempotency-key": p },
                    data: Object.assign({}, _, { items: z(m) }),
                  })
                );
              case 37:
                (y = r.sent),
                  f.info("[order-repo] create_order:done_after_retry", {
                    itemCount: m.length,
                    orderNo: String(y && y.orderNo ? y.orderNo : ""),
                    idempotencyKey: p,
                  });
              case 39:
                return (
                  (b = Number(y && y.payableAmount ? y.payableAmount : 0) || g),
                  f.info("[order-repo] create_order:done", {
                    orderNo: String(y && y.orderNo ? y.orderNo : ""),
                    payableAmount: b,
                  }),
                  (r.next = 43),
                  J(y.orderNo, b)
                );
              case 43:
                return (
                  (x = r.sent),
                  f.info("[order-repo] create_payment:done", {
                    orderNo: String(y && y.orderNo ? y.orderNo : ""),
                    hasWxPayParams: !(!x || !x.wxPayParams),
                    prepayId: String(x && x.prepayId ? x.prepayId : ""),
                    outTradeNo: String(x && x.outTradeNo ? x.outTradeNo : ""),
                    reused: !(!x || !x.reused),
                  }),
                  r.abrupt(
                    "return",
                    e(
                      e({}, y),
                      {},
                      { wxPayParams: x && x.wxPayParams ? x.wxPayParams : null }
                    )
                  )
                );
              case 46:
              case "end":
                return r.stop();
            }
        },
        t,
        null,
        [[24, 30]]
      );
    })
  )).apply(this, arguments);
}
function J(e, r) {
  return X.apply(this, arguments);
}
function X() {
  return (X = t(
    r().mark(function e(t, n) {
      var a;
      return r().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (t) {
                  e.next = 2;
                  break;
                }
                throw new Error("ORDER_NO_REQUIRED");
              case 2:
                return (
                  f.info("[order-repo] create_payment:start", {
                    orderNo: String(t || ""),
                    amount: Number(n || 0),
                  }),
                  (e.prev = 3),
                  (e.next = 6),
                  o({
                    url: u.createPayment,
                    method: "POST",
                    data: { orderNo: t, amount: n },
                  })
                );
              case 6:
                return (a = e.sent), e.abrupt("return", a || null);
              case 10:
                throw (
                  ((e.prev = 10),
                  (e.t0 = e.catch(3)),
                  f.warn(
                    "[order-repo] create_payment:failed",
                    Object.assign(
                      { orderNo: String(t || ""), amount: Number(n || 0) },
                      G(e.t0)
                    )
                  ),
                  e.t0)
                );
              case 14:
              case "end":
                return e.stop();
            }
        },
        e,
        null,
        [[3, 10]]
      );
    })
  )).apply(this, arguments);
}
function ee() {
  return (ee = t(
    r().mark(function e(t) {
      var n;
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if ((n = re(t))) {
                e.next = 3;
                break;
              }
              throw new Error("ORDER_NO_REQUIRED");
            case 3:
              return e.abrupt(
                "return",
                o({ url: u.paymentResult(n), method: "GET" })
              );
            case 4:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function re(e) {
  return encodeURIComponent(String(e || "").trim());
}
function te() {
  return (te = t(
    r().mark(function e(t) {
      var n;
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (n = Object.assign({ page: 1, pageSize: 20 }, t || {})),
                e.abrupt(
                  "return",
                  o({ url: u.orderList, method: "GET", data: n })
                )
              );
            case 2:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function ne() {
  return (ne = t(
    r().mark(function e(t) {
      var n;
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if ((n = re(t))) {
                e.next = 3;
                break;
              }
              throw new Error("ORDER_NO_REQUIRED");
            case 3:
              return e.abrupt(
                "return",
                o({ url: u.orderDetail(n), method: "GET" })
              );
            case 4:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function ae() {
  return (ae = t(
    r().mark(function e(t) {
      var n;
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if ((n = String(t || "").trim())) {
                e.next = 3;
                break;
              }
              throw new Error("WEB_PAY_SCENE_TOKEN_REQUIRED");
            case 3:
              return e.abrupt(
                "return",
                o({ url: u.orderMiniProgramPayScene(n), method: "GET" })
              );
            case 4:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function oe() {
  return (oe = t(
    r().mark(function e(t, n) {
      var a;
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if ((a = re(t))) {
                e.next = 3;
                break;
              }
              throw new Error("ORDER_NO_REQUIRED");
            case 3:
              return e.abrupt(
                "return",
                o({ url: u.orderCancel(a), method: "POST", data: n || {} })
              );
            case 4:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function ie() {
  return (ie = t(
    r().mark(function e(t, n) {
      var a;
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if ((a = re(t))) {
                e.next = 3;
                break;
              }
              throw new Error("ORDER_NO_REQUIRED");
            case 3:
              return e.abrupt(
                "return",
                o({ url: u.orderStatusLogs(a), method: "GET", data: n || {} })
              );
            case 4:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
module.exports = {
  listCheckoutOptions: function (e) {
    return $.apply(this, arguments);
  },
  previewCheckoutFromCheckedItems: W,
  createOrderFromCheckedItems: function (e, r) {
    return Y.apply(this, arguments);
  },
  uploadOrderSnapshot: R,
  createPaymentForOrder: J,
  getPaymentResult: function (e) {
    return ee.apply(this, arguments);
  },
  listOrders: function (e) {
    return te.apply(this, arguments);
  },
  getOrderDetail: function (e) {
    return ne.apply(this, arguments);
  },
  resolveWebPaySceneToken: function (e) {
    return ae.apply(this, arguments);
  },
  cancelOrder: function (e, r) {
    return oe.apply(this, arguments);
  },
  listOrderStatusLogs: function (e, r) {
    return ie.apply(this, arguments);
  },
};
