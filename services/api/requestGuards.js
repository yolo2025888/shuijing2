var e = require("../../@babel/runtime/helpers/typeof");
function r(e) {
  return null == e ? "" : String(e).trim();
}
function t(e) {
  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    t = Number(e);
  return Number.isFinite(t) ? t : r;
}
function n(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 64,
    n = r(e);
  if (!n) return "";
  var a = n.replace(/[^A-Za-z0-9_-]/g, "").slice(0, t);
  return a;
}
function a(e) {
  return Array.isArray(e)
    ? e
        .map(function (e) {
          return n(e, 64);
        })
        .filter(Boolean)
        .slice(0, 512)
    : [];
}
function i(e) {
  var t = r(e);
  return t && /^[0-9]+$/.test(t) ? t : "";
}
function s(e) {
  var t = r(e);
  return t && /^[0-9]+$/.test(t) ? t : "";
}
function o(e) {
  var t = r(e);
  return t && /^[A-Za-z0-9_-]{1,64}$/.test(t) ? t : "";
}
function c(e) {
  var t = r(e);
  if (!t) return "";
  if (/^addr_[0-9]+$/.test(t)) return t;
  var n = t.replace(/[^0-9]/g, "");
  return n ? "addr_".concat(n) : "";
}
function l(e) {
  r(e).toLowerCase();
  return "bracelet";
}
function u(e) {
  return r(e).slice(0, 1024);
}
function d(e) {
  var t = r(e).slice(0, 2048);
  return t
    ? /^https?:\/\/(?:127\.0\.0\.1|localhost)(?::[0-9]+)?\/(?:__tmp__|tmp)\//i.test(
        t
      ) ||
      /^(?:wxfile:\/\/|blob:|data:image|http:\/\/tmp\/|tmp\/|\/tmp\/)/i.test(t)
      ? ""
      : /^https?:\/\//i.test(t)
      ? t
      : ""
    : "";
}
function m() {
  for (var e = 0; e < arguments.length; e += 1) {
    var r = d(e < 0 || arguments.length <= e ? void 0 : arguments[e]);
    if (r) return r;
  }
  return "";
}
function p(r, t) {
  if (!r || "object" !== e(r) || Array.isArray(r)) return {};
  var a = {};
  return (
    (t || []).forEach(function (e) {
      var t = n(r[e], 64);
      t && (a[e] = t);
    }),
    a
  );
}
function h(a) {
  if (!a || "object" !== e(a) || Array.isArray(a)) return null;
  var i = {};
  return (
    Object.keys(a)
      .slice(0, 80)
      .forEach(function (s) {
        var o = n(s, 64),
          c = a[s];
        if (o && c && "object" === e(c) && !Array.isArray(c)) {
          var l = Array.isArray(c.variants)
            ? c.variants.map(u).filter(Boolean).slice(0, 6)
            : [];
          i[o] = {
            id: o,
            name: r(c.name).slice(0, 64),
            mm: Math.max(0, t(c.mm, 0)),
            price: Math.max(0, t(c.price, 0)),
            listImgUrl: u(c.listImgUrl),
            previewUrl: u(c.previewUrl),
            imageUrl: u(c.imageUrl),
            cardImage: u(c.cardImage),
            variants: l,
            isPendant: !0 === c.isPendant,
            hangsOutward: !0 === c.hangsOutward,
            isSpacer: !0 === c.isSpacer,
            layer: Math.round(t(c.layer, 20)),
            imgScale: t(c.imgScale, 1),
            gapRatio: t(c.gapRatio, 0.97),
            visualOffsetX: r(c.visualOffsetX).slice(0, 16),
            visualOffsetY: r(c.visualOffsetY).slice(0, 16),
          };
        }
      }),
    Object.keys(i).length ? i : null
  );
}
function f(c, u) {
  if (!c || "object" !== e(c)) return null;
  var d = n(c.id || "item_".concat(u + 1), 64),
    h = a(c.pattern);
  if (!d || !h.length) return null;
  var f = {
      id: d,
      name: r(c.name || "").slice(0, 64) || "我的专属设计",
      pattern: h,
      perim: Math.max(0, t(c.perim, 0)),
      price: Math.max(0, t(c.price, 0)),
      bgIndex: Math.max(0, Math.round(t(c.bgIndex, 0))),
      mode: l(c.mode),
    },
    v = i(c.source_designer_id);
  v && (f.source_designer_id = v);
  var _ = s(c.source_creator_work_id || c.sourceCreatorWorkId);
  _ && (f.source_creator_work_id = _);
  var g = s(c.source_inspiration_template_id || c.sourceInspirationTemplateId);
  g && (f.source_inspiration_template_id = g);
  var y = o(c.source_entry || c.sourceEntry);
  y && (f.source_entry = y);
  var I,
    b,
    O =
      ((I = c.snapshotUploadId || c.snapshot_upload_id),
      (b = r(I)) && /^[0-9]+$/.test(b) ? b : "");
  O && (f.snapshotUploadId = O);
  var x = m(
    c.snapshotUrl,
    c.snapshot_url,
    c.previewUrl,
    c.preview_url,
    c.shareImageUrl,
    c.share_image_url
  );
  x &&
    ((f.previewUrl = x),
    (f.snapshotUrl = x),
    (f.shareImageUrl = m(c.shareImageUrl, c.share_image_url) || x));
  var A = p(c.selectedOptions, ["packaging", "certificate"]);
  return Object.keys(A).length && (f.selectedOptions = A), f;
}
function v(t) {
  if (!Array.isArray(t))
    return {
      validItems: [],
      invalidItems: [
        { index: -1, reason: "items_not_array", id: "", name: "" },
      ],
    };
  for (
    var i = [], s = [], o = 0;
    o < t.length && i.length + s.length < 100;
    o += 1
  ) {
    var c = t[o];
    if (c && "object" === e(c)) {
      var l = r(c.id || "item_".concat(o + 1)),
        u = n(l, 64),
        d = r(c.name || "").slice(0, 64),
        m = Array.isArray(c.pattern) ? c.pattern : [],
        p = a(m);
      if (u)
        if (p.length) {
          var h = f(c, o);
          h
            ? i.push(h)
            : s.push({ index: o, reason: "normalize_failed", id: u, name: d });
        } else
          s.push({
            index: o,
            reason: m.length > 0 ? "pattern_sanitized_empty" : "pattern_empty",
            id: u,
            name: d,
          });
      else s.push({ index: o, reason: "invalid_id", id: l, name: d });
    } else s.push({ index: o, reason: "item_not_object", id: "", name: "" });
  }
  return { validItems: i, invalidItems: s };
}
function _(c) {
  var d = c && "object" === e(c) ? c : {};
  return {
    items: (Array.isArray(d.items) ? d.items : [])
      .map(function (c, d) {
        return (function (c, d) {
          if (!c || "object" !== e(c)) return null;
          var m = a(c.pattern);
          if (!m.length) return null;
          var f = {
              id: n(c.id || "cart_".concat(Date.now(), "_").concat(d + 1), 64),
              name: r(c.name).slice(0, 64) || "我的专属设计",
              pattern: m,
              perim: Math.max(0, t(c.perim, 0)),
              price: Math.max(0, t(c.price, 0)),
              bgIndex: Math.max(0, Math.round(t(c.bgIndex, 0))),
              mode: l(c.mode),
              checked: !1 !== c.checked,
              timestamp: Math.max(0, Math.round(t(c.timestamp, Date.now()))),
              previewUrl: u(c.previewUrl),
              snapshotUrl: u(c.snapshotUrl),
              materialSnapshot: h(c.materialSnapshot || c.materialMap),
            },
            v = i(c.source_designer_id);
          v && (f.source_designer_id = v);
          var _ = s(c.source_creator_work_id || c.sourceCreatorWorkId);
          _ && (f.source_creator_work_id = _);
          var g = s(
            c.source_inspiration_template_id || c.sourceInspirationTemplateId
          );
          g && (f.source_inspiration_template_id = g);
          var y = o(c.source_entry || c.sourceEntry);
          y && (f.source_entry = y);
          var I = p(c.selectedOptions, ["packaging", "certificate"]);
          return (
            Object.keys(I).length && (f.selectedOptions = I),
            c.selectedOptionSummary &&
              "object" === e(c.selectedOptionSummary) &&
              !Array.isArray(c.selectedOptionSummary) &&
              (f.selectedOptionSummary = c.selectedOptionSummary),
            f
          );
        })(c, d);
      })
      .filter(Boolean)
      .slice(0, 200),
  };
}
function g(i) {
  var s = i && "object" === e(i) ? i : {};
  return {
    items: (Array.isArray(s.items) ? s.items : [])
      .map(function (i, s) {
        var o,
          c,
          d = (function (i, s) {
            if (!i || "object" !== e(i)) return null;
            var o = a(i.pattern);
            if (!o.length) return null;
            var c = n(i.id || "s_".concat(Date.now(), "_").concat(s + 1), 64);
            return {
              id: c,
              clientId: n(i.clientId || i.client_id || c, 64),
              name: r(i.name).slice(0, 64) || "我的专属设计",
              pattern: o,
              perim: Math.max(0, t(i.perim, 0)),
              price: Math.max(0, t(i.price, 0)),
              mode: l(i.mode),
              bgIndex: Math.max(0, Math.round(t(i.bgIndex, 0))),
              previewUrl: u(i.previewUrl),
              snapshotUrl: u(i.snapshotUrl),
            };
          })(i, s);
        return (
          d &&
            ((d.name =
              ((o = d.name),
              (c = r(o).slice(0, 10)).length >= 2 ? c : "我的设计")),
            delete d.mode),
          d
        );
      })
      .filter(Boolean)
      .slice(0, 200),
  };
}
module.exports = {
  guardRequestPayload: function (n) {
    var a = n.method,
      i = n.path,
      s = n.data,
      o = String(a || "GET")
        .trim()
        .toUpperCase();
    if ("GET" === o || "HEAD" === o || "OPTIONS" === o) {
      var l = (function (r) {
          if (!r || "object" !== e(r) || Array.isArray(r)) return r;
          var t = {};
          return (
            Object.keys(r).forEach(function (e) {
              var n = r[e];
              null != n && "" !== n && (t[e] = n);
            }),
            t
          );
        })(s),
        u = !(function (r, t) {
          if (r === t) return !0;
          if (!r || !t || "object" !== e(r) || "object" !== e(t)) return !1;
          if (Array.isArray(r) || Array.isArray(t)) return !1;
          var n = Object.keys(r),
            a = Object.keys(t);
          if (n.length !== a.length) return !1;
          for (var i = 0; i < n.length; i += 1) {
            var s = n[i];
            if (!Object.prototype.hasOwnProperty.call(t, s)) return !1;
            if (r[s] !== t[s]) return !1;
          }
          return !0;
        })(s, l);
      return {
        data: l,
        changed: u,
        reason: u ? "sanitize_get_query" : "",
        meta: null,
      };
    }
    var d = (function (e) {
        var r = String(e || "").trim();
        if (!r) return "/";
        if (/^https?:\/\//i.test(r))
          try {
            return new URL(r).pathname || "/";
          } catch (e) {
            return "/";
          }
        return r.startsWith("/") ? r : "/".concat(r);
      })(i),
      m = s,
      h = "",
      f = null;
    if (d.endsWith("/orders/checkout/preview")) {
      var y = s && "object" === e(s) ? s : {},
        I = v((s && s.items) || []);
      (m = {
        items: I.validItems,
        selectedOptions: p(y.selectedOptions, ["shipping"]),
      }),
        (h = "sanitize_checkout_preview"),
        I.invalidItems.length > 0 &&
          (f = {
            droppedItemCount: I.invalidItems.length,
            droppedItemReasons: I.invalidItems.slice(0, 3),
          });
    } else if (d.endsWith("/orders")) {
      var b = s && "object" === e(s) ? s : {},
        O = v(b.items || []);
      (m = {
        items: O.validItems,
        addressId: c(b.addressId),
        totalAmount: Math.max(0, t(b.totalAmount, 0)),
        selectedOptions: p(b.selectedOptions, ["shipping"]),
      }),
        (h = "sanitize_create_order"),
        O.invalidItems.length > 0 &&
          (f = {
            droppedItemCount: O.invalidItems.length,
            droppedItemReasons: O.invalidItems.slice(0, 3),
          });
    } else
      d.endsWith("/address/wechat-sync")
        ? ((m = (function (t) {
            var n = t && "object" === e(t) ? t : {};
            return {
              userName: r(n.userName).slice(0, 64),
              telNumber: r(n.telNumber).slice(0, 32),
              provinceName: r(n.provinceName).slice(0, 64),
              cityName: r(n.cityName).slice(0, 64),
              countyName: r(n.countyName).slice(0, 64),
              detailInfo: r(n.detailInfo).slice(0, 128),
              nationalCode: r(n.nationalCode).slice(0, 32),
              postalCode: r(n.postalCode).slice(0, 16),
            };
          })(s)),
          (h = "sanitize_wechat_address"))
        : d.endsWith("/auth/wechat/bind-phone")
        ? ((m = (function (t) {
            return {
              phoneCode: r((t && "object" === e(t) ? t : {}).phoneCode),
            };
          })(s)),
          (h = "sanitize_bind_phone"))
        : d.endsWith("/cart/items/sync")
        ? ((m = _(s)), (h = "sanitize_cart_sync"))
        : d.endsWith("/design/schemes/sync") &&
          ((m = g(s)), (h = "sanitize_scheme_sync"));
    var x = !(function (e, r) {
      try {
        return JSON.stringify(e) === JSON.stringify(r);
      } catch (e) {
        return !1;
      }
    })(s, m);
    return { data: m, changed: x, reason: x ? h : "", meta: x ? f : null };
  },
  isSourceDesignerIdConstraintError: function (e) {
    var r = String(e || "").toLowerCase();
    return (
      !!r &&
      !(r.indexOf("source_designer_id") < 0) &&
      (r.indexOf("regular expression") >= 0 ||
        r.indexOf("should not exist") >= 0)
    );
  },
  inspectCheckoutItemsIntegrity: v,
};
