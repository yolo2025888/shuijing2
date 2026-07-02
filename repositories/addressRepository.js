var r = require("../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../@babel/runtime/helpers/typeof"),
  n = require("../services/api/index"),
  a = n.request,
  u = n.API_ENDPOINTS;
function i(r) {
  return String(r || "").trim();
}
function s(r) {
  var e = r && "object" === t(r) ? r : {};
  return {
    userName: String(e.userName || "").trim(),
    telNumber: String(e.telNumber || "").trim(),
    provinceName: String(e.provinceName || "").trim(),
    cityName: String(e.cityName || "").trim(),
    countyName: String(e.countyName || "").trim(),
    detailInfo: String(e.detailInfo || "").trim(),
    nationalCode: String(e.nationalCode || "").trim(),
    postalCode: String(e.postalCode || "").trim(),
  };
}
function o(r) {
  var e = [
    "userName",
    "telNumber",
    "provinceName",
    "cityName",
    "countyName",
    "detailInfo",
  ].filter(function (e) {
    return !String((r && r[e]) || "").trim();
  });
  if (e.length) {
    var t = new Error("WECHAT_ADDRESS_INVALID:".concat(e.join(",")));
    throw ((t.code = "WECHAT_ADDRESS_INVALID"), t);
  }
}
function c() {
  return (c = e(
    r().mark(function e() {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                a({ url: u.addressDefault, method: "GET" })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function p() {
  return (p = e(
    r().mark(function e() {
      var t;
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return (r.next = 2), a({ url: u.addressList, method: "GET" });
            case 2:
              return (
                (t = r.sent),
                r.abrupt("return", t && Array.isArray(t.list) ? t.list : [])
              );
            case 4:
            case "end":
              return r.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function d() {
  return (d = e(
    r().mark(function e(t) {
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return r.abrupt(
                "return",
                a({ url: u.addressCreate, method: "POST", data: t || {} })
              );
            case 1:
            case "end":
              return r.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function f() {
  return (f = e(
    r().mark(function e(t, n) {
      var s;
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              if ((s = i(t))) {
                r.next = 3;
                break;
              }
              throw new Error("ADDRESS_ID_REQUIRED");
            case 3:
              return r.abrupt(
                "return",
                a({ url: u.addressUpdate(s), method: "PUT", data: n || {} })
              );
            case 4:
            case "end":
              return r.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function l() {
  return (l = e(
    r().mark(function e(t) {
      var n;
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              if ((n = i(t))) {
                r.next = 3;
                break;
              }
              throw new Error("ADDRESS_ID_REQUIRED");
            case 3:
              return r.abrupt(
                "return",
                a({ url: u.addressDelete(n), method: "DELETE" })
              );
            case 4:
            case "end":
              return r.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function m() {
  return (m = e(
    r().mark(function e(t) {
      var n;
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              if ((n = i(t))) {
                r.next = 3;
                break;
              }
              throw new Error("ADDRESS_ID_REQUIRED");
            case 3:
              return r.abrupt(
                "return",
                a({ url: u.addressSetDefault(n), method: "POST" })
              );
            case 4:
            case "end":
              return r.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
function h() {
  return (h = e(
    r().mark(function e(t) {
      var n;
      return r().wrap(function (r) {
        for (;;)
          switch ((r.prev = r.next)) {
            case 0:
              return (
                o((n = s(t))),
                r.abrupt(
                  "return",
                  a({ url: u.addressWechatSync, method: "POST", data: n })
                )
              );
            case 3:
            case "end":
              return r.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
module.exports = {
  getDefaultAddress: function () {
    return c.apply(this, arguments);
  },
  listAddresses: function () {
    return p.apply(this, arguments);
  },
  createAddress: function (r) {
    return d.apply(this, arguments);
  },
  updateAddress: function (r, e) {
    return f.apply(this, arguments);
  },
  deleteAddress: function (r) {
    return l.apply(this, arguments);
  },
  setDefaultAddress: function (r) {
    return m.apply(this, arguments);
  },
  saveWechatAddress: function (r) {
    return h.apply(this, arguments);
  },
};
