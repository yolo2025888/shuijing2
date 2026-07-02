var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../@babel/runtime/helpers/typeof"),
  n = require("../services/api/index"),
  a = n.request,
  i = n.API_ENDPOINTS,
  c = require("./shared/normalize"),
  s = c.normalizeStringArray,
  u = c.toFiniteNumber,
  o = require("../utils/diyRenderPlan").normalizeRenderPlan;
function l(e, r) {
  return (
    String(e || "")
      .trim()
      .replace(/[^A-Za-z0-9_-]/g, "")
      .slice(0, 64) ||
    r ||
    ""
  );
}
function p(e) {
  if (!e || "object" !== t(e)) return null;
  var r = e.snapshot && "object" === t(e.snapshot) ? e.snapshot : {},
    n = e.snapshotUrl || e.snapshot_url || r.url || r.src || "",
    a = e.previewUrl || e.preview_url || "",
    i = e.id || e.schemeId || "s_".concat(Date.now()),
    c = e.clientId || e.client_id || i,
    l = s(e.pattern),
    p = o(e.renderPlan || e.render_plan, l),
    m =
      e.materialMap &&
      "object" === t(e.materialMap) &&
      !Array.isArray(e.materialMap)
        ? e.materialMap
        : null,
    h =
      e.materialSnapshot &&
      "object" === t(e.materialSnapshot) &&
      !Array.isArray(e.materialSnapshot)
        ? e.materialSnapshot
        : m;
  return {
    id: i,
    clientId: c,
    name: e.name || "我的专属设计",
    date: e.date || "",
    pattern: l,
    perim: u(e.perim, 0),
    price: u(e.price, 0),
    mode: e.mode || "bracelet",
    bgIndex: u(e.bgIndex, 0),
    snapshotUrl: n,
    previewUrl: a,
    imageUrl: e.imageUrl || e.image_url || "",
    coverUrl: e.coverUrl || e.cover_url || "",
    snapshot: n || a ? { url: n || a } : void 0,
    materialMap: m || void 0,
    materialSnapshot: h || void 0,
    renderPlan: p,
    render_plan: p,
  };
}
function m(e) {
  return (e || []).map(p).filter(function (e) {
    return e && e.pattern.length > 0;
  });
}
function h(e, r) {
  var n = e && "object" === t(e) ? e : {},
    a = s(n.pattern);
  if (!a.length) return null;
  var i,
    c,
    o = "s_".concat(Date.now(), "_").concat(r + 1),
    p = l(n.id || n.schemeId, o);
  return {
    id: p,
    clientId: l(n.clientId || n.client_id || p, p),
    name:
      ((i = n.name),
      (c = String(i || "")
        .trim()
        .slice(0, 10)),
      c.length >= 2 ? c : "我的专属设计"),
    pattern: a,
    bgIndex: Math.max(0, Math.round(u(n.bgIndex, 0))),
    date: String(n.date || "").trim(),
    perim: Math.max(0, u(n.perim, 0)),
    price: Math.max(0, u(n.price, 0)),
    previewUrl: String(n.previewUrl || n.preview_url || "")
      .trim()
      .slice(0, 1024),
    snapshotUrl: String(n.snapshotUrl || n.snapshot_url || "")
      .trim()
      .slice(0, 1024),
  };
}
function d(e) {
  return m(e).map(h).filter(Boolean);
}
function f() {
  return (f = r(
    e().mark(function r() {
      var t;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (e.next = 2),
                a({
                  url: "".concat(i.designSchemes, "?page=1&size=").concat(200),
                  method: "GET",
                })
              );
            case 2:
              return (
                (t = e.sent),
                e.abrupt("return", m(t && Array.isArray(t.list) ? t.list : []))
              );
            case 4:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function S() {
  return (S = r(
    e().mark(function r(t) {
      var n, c, s;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (n = m(t)),
                (c = d(n)),
                (e.next = 4),
                a({
                  url: i.designSchemesSync,
                  method: "POST",
                  data: { items: c },
                })
              );
            case 4:
              return (
                (s = e.sent),
                e.abrupt("return", m(s && Array.isArray(s.list) ? s.list : []))
              );
            case 6:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function g() {
  return (g = r(
    e().mark(function r(t) {
      var n;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (t) {
                e.next = 2;
                break;
              }
              return e.abrupt("return", null);
            case 2:
              return (
                (n =
                  "function" == typeof i.designSchemeDelete
                    ? i.designSchemeDelete(t)
                    : "".concat(i.designSchemes, "/").concat(t, "/delete")),
                e.abrupt("return", a({ url: n, method: "POST", data: {} }))
              );
            case 4:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function y(e, r) {
  if (!r) return e;
  var t = String(e).indexOf("?") >= 0;
  return ""
    .concat(e)
    .concat(t ? "&" : "?")
    .concat(r);
}
function b() {
  return (b = r(
    e().mark(function r(n, c) {
      var s, u, o, l;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (n) {
                e.next = 2;
                break;
              }
              return e.abrupt("return", null);
            case 2:
              return (
                (s = c && "object" === t(c) ? c : {}),
                (u = s.shareCode ? String(s.shareCode) : ""),
                (o =
                  "function" == typeof i.designSchemeDetail
                    ? i.designSchemeDetail(n)
                    : "".concat(i.designSchemes, "/").concat(n)),
                (e.next = 7),
                a({
                  url: u ? y(o, "shareCode=".concat(encodeURIComponent(u))) : o,
                  method: "GET",
                })
              );
            case 7:
              return (l = e.sent), e.abrupt("return", l ? p(l) : null);
            case 9:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function v() {
  return (v = r(
    e().mark(function r(t) {
      var n;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (t) {
                e.next = 2;
                break;
              }
              return e.abrupt("return", null);
            case 2:
              return (
                (n =
                  "function" == typeof i.designSchemeShare
                    ? i.designSchemeShare(t)
                    : "".concat(i.designSchemes, "/").concat(t, "/share")),
                e.abrupt("return", a({ url: n, method: "GET" }))
              );
            case 4:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
module.exports = {
  loadSchemes: function () {
    return f.apply(this, arguments);
  },
  saveSchemes: function (e) {
    return S.apply(this, arguments);
  },
  toSchemeSyncItem: h,
  toSchemeSyncList: d,
  deleteSchemeById: function (e) {
    return g.apply(this, arguments);
  },
  loadSchemeById: function (e, r) {
    return b.apply(this, arguments);
  },
  getSchemeSharePayload: function (e) {
    return v.apply(this, arguments);
  },
};
