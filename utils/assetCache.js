var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../@babel/runtime/helpers/typeof"),
  n = ["stone_asset_path_cache_v3"],
  c = Object.create(null),
  i = Object.create(null),
  u = Object.create(null),
  o = Object.create(null),
  a = Object.create(null),
  s = !1,
  f = !1,
  l = !1;
function v(e) {
  return /^https?:\/\//.test(e || "");
}
function h(e) {
  var t = String(e || "").trim();
  if (!t) return "";
  var r = (function (e) {
    var t = String(e || "")
      .trim()
      .replace(/\\/g, "/")
      .split("#")[0]
      .split("?")[0]
      .replace(/^\.?\//, "");
    if (!t) return "";
    var r = t.match(/(?:^|\/)(assets(?:_h5)?\/.+)$/);
    return r ? r[1].replace(/^assets_h5\//, "assets/").replace(/^\/+/, "") : "";
  })(t);
  return (
    r ||
    (v(t)
      ? (function (e) {
          var t = String(e || "")
            .trim()
            .replace(/\\/g, "/")
            .split("#")[0];
          if (!t) return "";
          var r = t.match(/^(https?:\/\/[^/?#]+)([^?#]*)(\?[^#]*)?$/i);
          if (!r) return t;
          var n = String(r[1] || "")
              .toLowerCase()
              .replace(/\/+$/, ""),
            c = String(r[2] || "").replace(/\/{2,}/g, "/"),
            i = String(r[3] || "");
          return "".concat(n).concat(c).concat(i);
        })(t)
      : t.replace(/\\/g, "/").split("#")[0])
  );
}
function m() {
  try {
    return wx.getFileSystemManager();
  } catch (e) {
    return null;
  }
}
function p() {
  try {
    return (wx.env && wx.env.USER_DATA_PATH) || "";
  } catch (e) {
    return "";
  }
}
function d() {
  var e = p();
  return e ? "".concat(e, "/").concat("stone_asset_cache_v3") : "";
}
function b(e) {
  var t = String(e || "").trim(),
    r = d();
  return !(!t || !r) && 0 === t.indexOf("".concat(r, "/"));
}
function g(e) {
  var t = String(e || "").trim();
  if (b(t) && !a[t]) {
    a[t] = !0;
    var r = function () {
      (function (e) {
        var t = String(e || "").trim();
        if (!b(t)) return Promise.resolve(!1);
        var r = m();
        return r && "function" == typeof r.unlink
          ? new Promise(function (e) {
              r.unlink({
                filePath: t,
                success: function () {
                  return e(!0);
                },
                fail: function () {
                  return e(!1);
                },
              });
            })
          : Promise.resolve(!1);
      })(t).then(function () {
        delete a[t];
      });
    };
    "function" != typeof setTimeout ? r() : setTimeout(r, 0);
  }
}
function y(e, t) {
  var n = h(e);
  if (!n) return "";
  var o,
    a,
    s = t && "object" === r(t) ? t : {},
    f = c[n];
  return (
    delete c[n],
    delete i[n],
    delete u[n],
    !0 === s.deleteFile &&
      f &&
      b(f) &&
      ((o = n),
      !(a = String(f || "").trim()) ||
        !Object.keys(c).some(function (e) {
          return (!o || e !== o) && c[e] === a;
        })) &&
      g(f),
    f || ""
  );
}
function P() {
  if (!l) {
    l = !0;
    var e = function () {
      (function () {
        var e = m(),
          t = d();
        if (!e || "function" != typeof e.readdir || !t)
          return Promise.resolve();
        var r = Object.keys(c).reduce(function (e, t) {
          var r = c[t];
          return b(r) && (e[r] = !0), e;
        }, Object.create(null));
        return new Promise(function (n) {
          e.readdir({
            dirPath: t,
            success: function (e) {
              (Array.isArray(e && e.files) ? e.files : []).forEach(function (
                e
              ) {
                var n = "".concat(t, "/").concat(e);
                r[n] || g(n);
              }),
                n();
            },
            fail: function () {
              return n();
            },
          });
        });
      })().catch(function () {});
    };
    "function" != typeof setTimeout ? e() : setTimeout(e, 1500);
  }
}
function x() {
  if (!s) {
    s = !0;
    var e = !1,
      t = function (t, n) {
        var o = {};
        try {
          o = wx.getStorageSync(t) || {};
        } catch (e) {
          return;
        }
        var a = o && o.entries && "object" === r(o.entries) ? o.entries : o,
          s =
            o && o.touchedAt && "object" === r(o.touchedAt) ? o.touchedAt : {};
        Object.keys(a || {}).forEach(function (t) {
          var r = h(t),
            o = a[t];
          r &&
            "string" == typeof o &&
            o &&
            (c[r] || ((c[r] = o), (i[r] = !1), (u[r] = Number(s[t]) || 0)),
            (n || r !== t) && (e = !0));
        });
      };
    try {
      t("stone_asset_path_cache_v4", !1),
        n.forEach(function (e) {
          return t(e, !0);
        }),
        S(320);
    } catch (e) {}
    e && w(), P();
  }
}
function _(e) {
  if (!e || "string" != typeof e) return !1;
  var t = p();
  return !(!t || 0 !== e.indexOf(t));
}
function w() {
  S(420);
  var e = Object.keys(c)
      .sort(function (e, t) {
        return (Number(u[t]) || 0) - (Number(u[e]) || 0);
      })
      .slice(0, 320),
    t = {},
    r = {};
  e.forEach(function (e) {
    var n = c[e];
    "string" == typeof n &&
      n &&
      _(n) &&
      ((t[e] = n), (r[e] = Number(u[e]) || 0));
  });
  try {
    wx.setStorageSync("stone_asset_path_cache_v4", {
      entries: t,
      touchedAt: r,
    });
  } catch (e) {}
}
function j(e) {
  var t = h(e);
  t && (u[t] = Date.now());
}
function S(e) {
  var t = Math.max(1, Number(e) || 420),
    r = Object.keys(c);
  r.length <= t ||
    r
      .sort(function (e, t) {
        return (Number(u[e]) || 0) - (Number(u[t]) || 0);
      })
      .slice(0, r.length - t)
      .forEach(function (e) {
        o[e] || y(e, { deleteFile: !0 });
      });
}
function k(e, t, r) {
  var n = h(e);
  n && t && ((c[n] = t), (i[n] = !0 === r), j(n), S(420));
}
function A(e) {
  var t = m();
  return t && e
    ? new Promise(function (r) {
        t.access({
          path: e,
          success: function () {
            return r(!0);
          },
          fail: function () {
            return r(!1);
          },
        });
      })
    : Promise.resolve(!1);
}
function O() {
  if (f) return Promise.resolve(!0);
  var e = m(),
    t = d();
  return e && t
    ? new Promise(function (r) {
        e.access({
          path: t,
          success: function () {
            (f = !0), r(!0);
          },
          fail: function () {
            e.mkdir({
              dirPath: t,
              recursive: !0,
              success: function () {
                (f = !0), r(!0);
              },
              fail: function () {
                return r(!1);
              },
            });
          },
        });
      })
    : Promise.resolve(!1);
}
function C(e, t) {
  var r = p();
  if (!r) return "";
  var n = (function (e) {
      var t = ""
        .concat(e || "")
        .split("?")[0]
        .split("#")[0]
        .match(/\.([a-zA-Z0-9]+)$/);
      return t ? ".".concat(t[1].toLowerCase()) : ".img";
    })(t),
    c = (function (e) {
      for (
        var t = 2166136261, r = "".concat(e || ""), n = 0;
        n < r.length;
        n += 1
      )
        (t ^= r.charCodeAt(n)),
          (t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24));
      return "".concat(t >>> 0);
    })(e || t);
  return ""
    .concat(r, "/")
    .concat("stone_asset_cache_v3", "/")
    .concat(c)
    .concat(n);
}
function N(e, t) {
  return e && t
    ? new Promise(function (r) {
        wx.downloadFile({
          url: e,
          filePath: t,
          timeout: 2e4,
          success: function (e) {
            e && e.statusCode >= 200 && e.statusCode < 300 ? r(t) : r("");
          },
          fail: function () {
            return r("");
          },
        });
      })
    : Promise.resolve("");
}
function T(e) {
  return e
    ? new Promise(function (t) {
        wx.getImageInfo({
          src: e,
          success: function (r) {
            return t((r && r.path) || e);
          },
          fail: function () {
            return t("");
          },
        });
      })
    : Promise.resolve("");
}
function E(r, n) {
  var u = Object.assign({ persist: !0 }, n || {});
  x();
  var a = h(r);
  if (!a || !r) return Promise.resolve("");
  var s = c[a];
  return s
    ? (function (e) {
        if (!e || "string" != typeof e) return Promise.resolve(!1);
        var t = p();
        return t && 0 === e.indexOf(t)
          ? A(e)
          : v(e)
          ? Promise.resolve(!1)
          : Promise.resolve(!0);
      })(s).then(function (e) {
        return e
          ? ((i[a] = !0), j(a), s)
          : (y(a, { deleteFile: !0 }), w(), E(r, u));
      })
    : (o[a] ||
        (o[a] = t(
          e().mark(function t() {
            var n, c, i, o;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (v(r)) {
                      e.next = 3;
                      break;
                    }
                    return k(a, r, !0), e.abrupt("return", r);
                  case 3:
                    if (!u.persist) {
                      e.next = 24;
                      break;
                    }
                    return (e.next = 6), O();
                  case 6:
                    if (!e.sent) {
                      e.next = 24;
                      break;
                    }
                    if (!(n = C(a, r))) {
                      e.next = 24;
                      break;
                    }
                    return (e.next = 12), A(n);
                  case 12:
                    if (!e.sent) {
                      e.next = 17;
                      break;
                    }
                    return k(a, n, !0), w(), e.abrupt("return", n);
                  case 17:
                    return (e.next = 19), N(r, n);
                  case 19:
                    if (!(c = e.sent)) {
                      e.next = 24;
                      break;
                    }
                    return k(a, c, !0), w(), e.abrupt("return", c);
                  case 24:
                    return (e.next = 26), T(r);
                  case 26:
                    return (
                      (i = e.sent),
                      k(a, (o = i || r), !0),
                      _(o) && w(),
                      e.abrupt("return", o)
                    );
                  case 31:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )()
          .catch(function () {
            return r;
          })
          .then(function (e) {
            return delete o[a], e || r;
          })),
      o[a]);
}
function F(e) {
  var t = e && "object" === r(e) ? e : {};
  if (t.cancelToken && t.cancelToken.cancelled) return !0;
  if ("function" == typeof t.shouldStop)
    try {
      return !0 === t.shouldStop();
    } catch (e) {
      return !1;
    }
  return !1;
}
module.exports = {
  cacheAssetPath: E,
  getCachedAssetPath: function (e) {
    x();
    var t = h(e);
    if (!t) return "";
    var r = c[t];
    return r ? (j(t), _(r) && !0 !== i[t] ? e : r) : e;
  },
  normalizeAssetCacheKey: h,
  preloadAssetPaths: function (e, t, n) {
    var c = (function (e) {
      var t = Object.create(null),
        r = [];
      return (
        (e || []).forEach(function (e) {
          if ("string" == typeof e && e) {
            var n = h(e);
            n && !t[n] && ((t[n] = !0), r.push(e));
          }
        }),
        r
      );
    })(e);
    if (!c.length) return Promise.resolve({ total: 0, loaded: 0 });
    var i,
      u,
      o = n && "object" === r(n) ? n : {},
      a =
        ((i = o.concurrency),
        (u = Math.floor(Number(i))),
        !Number.isFinite(u) || u <= 0 ? 8 : Math.max(1, Math.min(8, u))),
      s = c.length,
      f = 0,
      l = 0,
      v = 0;
    return new Promise(function (e) {
      !(function r() {
        if (f >= s || (v <= 0 && F(o)))
          e({ total: s, loaded: f, cancelled: f < s });
        else {
          for (
            var n = function () {
              var e = c[l];
              (l += 1),
                (v += 1),
                E(e, o)
                  .then(function () {
                    (f += 1),
                      (v -= 1),
                      "function" == typeof t &&
                        t({
                          src: e,
                          total: s,
                          loaded: f,
                          progress: s ? f / s : 1,
                        }),
                      r();
                  })
                  .catch(function () {
                    (f += 1), (v -= 1), r();
                  });
            };
            !F(o) && v < a && l < s;

          )
            n();
          v <= 0 &&
            (l >= s || F(o)) &&
            e({ total: s, loaded: f, cancelled: f < s });
        }
      })();
    });
  },
  invalidateCachedAssetPath: function (e) {
    if (e && "string" == typeof e) {
      x();
      var t = y(e, { deleteFile: !0 });
      t && _(t) && w();
    }
  },
  invalidateCachedAssetPaths: function (e) {
    var t = (function (e) {
      return (e || [])
        .filter(function (e) {
          return "string" == typeof e && e;
        })
        .filter(function (e, t, r) {
          return r.indexOf(e) === t;
        });
    })(e);
    if (t.length) {
      x();
      var r = !1;
      t.forEach(function (e) {
        if (e && "string" == typeof e) {
          var t = y(e, { deleteFile: !0 });
          t && _(t) && (r = !0);
        }
      }),
        r && w();
    }
  },
};
