var r = require("../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../@babel/runtime/helpers/typeof"),
  n = require("../services/api/index"),
  o = n.request,
  i = n.API_ENDPOINTS;
function u(r, e) {
  var n = r && "object" === t(r) ? r : {};
  return {
    id: Number(n.id || 0),
    code: String(n.code || e || ""),
    title: String(n.title || ""),
    content: String(n.content || ""),
    version: Number(n.version || 1),
    updatedAt: n.updatedAt || null,
  };
}
function a() {
  return (a = e(
    r().mark(function e(t) {
      var n, a, s;
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              if ((n = String(t || "").trim())) {
                r.next = 3;
                break;
              }
              throw new Error("CONTENT_CODE_REQUIRED");
            case 3:
              return (
                (a = encodeURIComponent(n)),
                (r.next = 6),
                o({ url: i.contentBlock(a), method: "GET" })
              );
            case 6:
              return (s = r.sent), r.abrupt("return", u(s, n));
            case 8:
            case "end":
              return r.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function s() {
  return (s = e(
    r().mark(function e(t) {
      var n, a, s;
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              if (
                (n = Array.isArray(t)
                  ? t
                      .map(function (r) {
                        return String(r || "").trim();
                      })
                      .filter(Boolean)
                  : []).length
              ) {
                r.next = 3;
                break;
              }
              return r.abrupt("return", []);
            case 3:
              return (
                (a = encodeURIComponent(n.join(","))),
                (r.next = 6),
                o({
                  url: "".concat(i.contentBlocks, "?codes=").concat(a),
                  method: "GET",
                })
              );
            case 6:
              return (
                (s = r.sent),
                r.abrupt(
                  "return",
                  (Array.isArray(s) ? s : []).map(function (r) {
                    return u(r, "");
                  })
                )
              );
            case 8:
            case "end":
              return r.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function c(r, e) {
  var n = r && "object" === t(r) ? r : {},
    o = Array.isArray(n.items) ? n.items : [];
  return {
    id: String(n.id || "group_".concat(e + 1)),
    name: String(n.name || "分类".concat(e + 1)),
    sort: Number.isFinite(Number(n.sort)) ? Number(n.sort) : 10 * (e + 1),
    items: o.map(function (r, n) {
      var o = r && "object" === t(r) ? r : {};
      return {
        id: String(o.id || "faq_".concat(e + 1, "_").concat(n + 1)),
        question: String(o.question || ""),
        answer: String(o.answer || ""),
        sort: Number.isFinite(Number(o.sort)) ? Number(o.sort) : 10 * (n + 1),
        status: String(o.status || "enabled"),
      };
    }),
  };
}
function p() {
  return (p = e(
    r().mark(function e() {
      var n, u;
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return (
                (r.next = 2), o({ url: i.contentHelpCenter, method: "GET" })
              );
            case 2:
              return (
                (n = r.sent),
                (u = n && "object" === t(n) ? n : {}),
                r.abrupt("return", {
                  version: String(u.version || ""),
                  categories: (Array.isArray(u.categories) ? u.categories : [])
                    .map(function (r, e) {
                      return c(r, e);
                    })
                    .sort(function (r, e) {
                      return r.sort - e.sort;
                    }),
                })
              );
            case 5:
            case "end":
              return r.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
module.exports = {
  getContentBlockByCode: function (r) {
    return a.apply(this, arguments);
  },
  getContentBlocksByCodes: function (r) {
    return s.apply(this, arguments);
  },
  getHelpCenterContent: function () {
    return p.apply(this, arguments);
  },
};
