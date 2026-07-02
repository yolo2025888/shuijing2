var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../@babel/runtime/helpers/typeof"),
  n = require("../services/api/index"),
  i = n.request,
  a = n.API_ENDPOINTS,
  c = require("./shared/normalize").toPositiveInt,
  o = require("../constants/storageKeys").CREATOR_PUBLIC_FEED_CACHE_KEY,
  u = Object.create(null);
function s(e) {
  return JSON.parse(JSON.stringify(e));
}
function l() {
  return "undefined" == typeof wx ||
    "function" != typeof wx.getStorageSync ||
    "function" != typeof wx.setStorageSync
    ? null
    : wx;
}
function p(e) {
  var t = e && "object" === r(e) ? e : {};
  return [
    String(t.section || "").trim(),
    String(t.category || "").trim(),
    c(t.page, 1),
    Math.min(60, c(t.pageSize, 18)),
  ].join("|");
}
function f() {
  var e = l();
  if (!e) return { entries: Object.create(null) };
  try {
    var t = e.getStorageSync(o);
    if (!t || "object" !== r(t)) return { entries: Object.create(null) };
    var n = t.entries && "object" === r(t.entries) ? t.entries : {};
    return { entries: Object.assign(Object.create(null), n) };
  } catch (e) {
    return { entries: Object.create(null) };
  }
}
function b(e, t) {
  var n = t && "object" === r(t) ? t : {},
    i = f().entries[e];
  if (!i || "object" !== r(i) || !i.payload) return null;
  var a = Number(i.cachedAt || 0);
  if (!n.allowStale && (!a || Date.now() - a > 3e5)) return null;
  try {
    return s(i.payload);
  } catch (e) {
    return null;
  }
}
function h(e, t) {
  if (e && t && "object" === r(t)) {
    var n = f();
    n.entries[e] = { cachedAt: Date.now(), payload: s(t) };
    var i = Object.keys(n.entries)
      .map(function (e) {
        return { key: e, entry: n.entries[e] };
      })
      .sort(function (e, t) {
        return (
          Number((t.entry && t.entry.cachedAt) || 0) -
          Number((e.entry && e.entry.cachedAt) || 0)
        );
      })
      .slice(0, 48);
    (n.entries = Object.create(null)),
      i.forEach(function (e) {
        var t = e.key,
          r = e.entry;
        n.entries[t] = r;
      }),
      (function (e) {
        var t = l();
        if (t)
          try {
            var n =
              e && e.entries && "object" === r(e.entries) ? e.entries : {};
            t.setStorageSync(o, { version: 1, entries: n });
          } catch (e) {}
      })(n);
  }
}
function y(e, t) {
  return (
    u[e] ||
      (u[e] = (function (e) {
        var t = e && "object" === r(e) ? e : {};
        return i({
          url: a.creatorPublicFeed,
          method: "GET",
          timeout: 4500,
          cache: !1 !== t.cache,
          __skipGetCache: !0 === t.skipGetCache,
          data: {
            page: t.page,
            pageSize: t.pageSize,
            section: t.section || void 0,
            category: t.category || void 0,
          },
        });
      })(t)
        .then(function (t) {
          return h(e, t), t;
        })
        .finally(function () {
          delete u[e];
        })),
    u[e]
  );
}
function g(e, t) {
  Promise.resolve()
    .then(function () {
      return y(e, t);
    })
    .catch(function () {});
}
function d() {
  return (d = t(
    e().mark(function t(n) {
      var i, a, o, u, s, l, f, h, d, v, m;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((i = n && "object" === r(n) ? n : {}),
                  (a = c(i.page, 1)),
                  (o = Math.min(60, c(i.pageSize, 18))),
                  (u = String(i.category || "").trim()),
                  (s = String(i.section || "").trim()),
                  (l = !0 === i.forceRemote),
                  (h = p(
                    (f = {
                      page: a,
                      pageSize: o,
                      category: u,
                      section: s,
                      cache: !l && void 0,
                      skipGetCache: l,
                    })
                  )),
                  !(d = !1 !== i.preferCache) || l)
                ) {
                  e.next = 14;
                  break;
                }
                if (!(v = b(h))) {
                  e.next = 14;
                  break;
                }
                return g(h, f), e.abrupt("return", v);
              case 14:
                return (e.prev = 14), (e.next = 17), y(h, f);
              case 17:
                return e.abrupt("return", e.sent);
              case 20:
                if (
                  ((e.prev = 20),
                  (e.t0 = e.catch(14)),
                  !(m = d ? b(h, { allowStale: !0 }) : null))
                ) {
                  e.next = 25;
                  break;
                }
                return e.abrupt("return", m);
              case 25:
                throw e.t0;
              case 26:
              case "end":
                return e.stop();
            }
        },
        t,
        null,
        [[14, 20]]
      );
    })
  )).apply(this, arguments);
}
function v() {
  return (v = t(
    e().mark(function t(n, o) {
      var u, s, l, p, f, b;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if ((u = c(n, 0))) {
                e.next = 3;
                break;
              }
              throw new Error("CREATOR_PUBLIC_ID_INVALID");
            case 3:
              return (
                (s = o && "object" === r(o) ? o : {}),
                (l = c(s.page, 1)),
                (p = Math.min(50, c(s.pageSize, 20))),
                (f = String(s.idType || "")
                  .trim()
                  .toLowerCase()),
                (b = "profile" === f || "user" === f ? f : void 0),
                e.abrupt(
                  "return",
                  i({
                    url: a.creatorPublicProfile(u),
                    method: "GET",
                    timeout: 4500,
                    data: { page: l, pageSize: p, idType: b },
                  })
                )
              );
            case 9:
            case "end":
              return e.stop();
          }
      }, t);
    })
  )).apply(this, arguments);
}
module.exports = {
  fetchCreatorPublicFeed: function (e) {
    return d.apply(this, arguments);
  },
  fetchCreatorPublicProfile: function (e, t) {
    return v.apply(this, arguments);
  },
};
