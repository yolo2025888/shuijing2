var e = require("../../@babel/runtime/helpers/defineProperty"),
  r = require("../../@babel/runtime/helpers/typeof"),
  t = require("./route-contract"),
  n = t.PRIMARY_TAB_IDS,
  o = t.PRIMARY_TAB_ALIAS,
  a = t.INDEX_ROUTE,
  c = t.normalizeRouteDomain,
  i = Object.freeze({
    activeTab: "activeTab",
    schemeId: "schemeId",
    source: "source",
  }),
  u = Object.freeze({
    fromShare: "fromShare",
    schemeId: "schemeId",
    shareCode: "shareCode",
  }),
  s = Object.freeze({ from: "from", source: "source" }),
  m = /^[A-Za-z0-9_:-]{1,64}$/,
  h = /^[A-Za-z0-9_-]{1,64}$/,
  d = new Set(n);
function f(e) {
  var r =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "home",
    t = String(e || "")
      .trim()
      .toLowerCase(),
    n = o[t] || t;
  if (d.has(n)) return n;
  var a = String(r || "")
    .trim()
    .toLowerCase();
  return d.has(a) ? a : "home";
}
function S(e) {
  var r = String(e || "").trim();
  return r && m.test(r) ? r : "";
}
function b(e) {
  var r = String(e || "").trim();
  return r && h.test(r) ? r : "";
}
function v(e) {
  return String(e || "").trim();
}
function l(e, t) {
  var n = t && "object" === r(t) ? t : {},
    o = Object.keys(n).filter(function (e) {
      return void 0 !== n[e] && null !== n[e] && "" !== n[e];
    });
  if (!o.length) return e;
  var a = o
    .map(function (e) {
      return ""
        .concat(encodeURIComponent(e), "=")
        .concat(encodeURIComponent(String(n[e])));
    })
    .join("&");
  return "".concat(e, "?").concat(a);
}
module.exports = {
  LEGACY_ROUTE_QUERY_KEYS: i,
  SHARE_ROUTE_QUERY_KEYS: u,
  LEGACY_DESIGNS_ROUTE_QUERY_KEYS: s,
  sanitizeQueryActiveTab: f,
  sanitizeQuerySource: S,
  sanitizeQuerySchemeId: b,
  sanitizeQueryShareCode: v,
  normalizeLegacyRouteQuery: function (e) {
    var t = e && "object" === r(e) ? e : {};
    return {
      activeTab: f(t[i.activeTab], "home"),
      schemeId: b(t[i.schemeId]),
      source: S(t[i.source]),
    };
  },
  normalizeSharedSchemeQuery: function (e) {
    var t = e && "object" === r(e) ? e : {};
    return { schemeId: b(t[u.schemeId]), shareCode: v(t[u.shareCode]) };
  },
  appendQueryParams: l,
  buildIndexSharePath: function (r) {
    var t,
      n = b(r);
    return l(a, (e((t = {}), u.fromShare, 1), e(t, u.schemeId, n), t));
  },
  buildLegacyTabRoute: function (r) {
    var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "home",
      n = c(r, t),
      o = "schemes" === n ? "profile" : f(n, t);
    return l(a, e({}, i.activeTab, o));
  },
  buildV2DesignsPath: function (t) {
    var n,
      o = t && "object" === r(t) ? t : {},
      c = S(o[s.from]),
      u = S(o[s.source]) || "legacy_schemes";
    return l(
      a,
      (e((n = {}), i.activeTab, "schemes"),
      e(n, i.source, u),
      e(n, s.from, c),
      n)
    );
  },
};
