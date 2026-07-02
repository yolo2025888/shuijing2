var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../../../@babel/runtime/helpers/typeof"),
  n = require("../../../../pages/index/modules/deps/profile-deps"),
  o = n.getContentBlocksByCodes,
  i = n.logger,
  l = require("./profile-content-defaults"),
  c = l.PROFILE_CONTENT_CODES,
  a = l.resolveProfileServiceId,
  u = l.resolveContentCodeByServiceId,
  s = l.getDefaultContentByServiceId;
module.exports = {
  resolveProfileServiceId: function (e) {
    var r = (e && e.currentTarget && e.currentTarget.dataset) || {};
    return a(r);
  },
  resolveContentCodeByServiceId: function (e) {
    return u(e);
  },
  getCachedProfileContentBlock: function (e) {
    var r = String(e || "").trim();
    if (!r) return null;
    var n =
      this._profileContentBlockMap &&
      "object" === t(this._profileContentBlockMap)
        ? this._profileContentBlockMap
        : null;
    return (n && n[r]) || null;
  },
  cacheProfileContentBlocks: function (e) {
    var r = Array.isArray(e) ? e : [];
    if (r.length) {
      var n =
          this._profileContentBlockMap &&
          "object" === t(this._profileContentBlockMap)
            ? this._profileContentBlockMap
            : {},
        o = Object.assign({}, n);
      r.forEach(function (e) {
        var r = String((e && e.code) || "").trim();
        r && (o[r] = e);
      }),
        (this._profileContentBlockMap = o);
    }
  },
  ensureProfileContentBlockCache: function () {
    var n = this;
    return r(
      e().mark(function r() {
        var l, a;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((l =
                      n._profileContentBlockMap &&
                      "object" === t(n._profileContentBlockMap)
                        ? n._profileContentBlockMap
                        : {}),
                    c.filter(function (e) {
                      return !l[e];
                    }).length)
                  ) {
                    e.next = 4;
                    break;
                  }
                  return e.abrupt("return", l);
                case 4:
                  return (e.prev = 4), (e.next = 7), o(c);
                case 7:
                  return (
                    (a = e.sent),
                    n.cacheProfileContentBlocks(a),
                    e.abrupt("return", n._profileContentBlockMap || {})
                  );
                case 12:
                  return (
                    (e.prev = 12),
                    (e.t0 = e.catch(4)),
                    i.warn("Preload profile content blocks failed", e.t0),
                    e.abrupt("return", l)
                  );
                case 16:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[4, 12]]
        );
      })
    )();
  },
  getDefaultContentByServiceId: function (e) {
    return s(e);
  },
};
