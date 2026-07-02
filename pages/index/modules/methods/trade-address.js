var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../../../@babel/runtime/helpers/typeof");
function n(e) {
  if (!e || "object" !== t(e)) return "";
  var r,
    n,
    s = String(e.receiverName || "").trim() || "收货人",
    a =
      ((r = e.receiverPhone),
      (n = String(r || "").trim())
        ? n.length < 7
          ? n
          : "".concat(n.slice(0, 3), "****").concat(n.slice(-4))
        : ""),
    i = String(e.fullAddress || "").trim(),
    c = i.length > 16 ? "".concat(i.slice(0, 16), "...") : i;
  return "".concat(s, " ").concat(a, " ").concat(c).trim();
}
function s(e) {
  var r = e && "object" === t(e) ? e : {};
  return {
    userName: String(r.userName || "").trim(),
    telNumber: String(r.telNumber || "").trim(),
    provinceName: String(r.provinceName || "").trim(),
    cityName: String(r.cityName || "").trim(),
    countyName: String(r.countyName || "").trim(),
    detailInfo: String(r.detailInfo || "").trim(),
    nationalCode: String(r.nationalCode || "").trim(),
    postalCode: String(r.postalCode || "").trim(),
  };
}
function a() {
  return (a = r(
    e().mark(function r(t) {
      var s, a, i, c, o, u, d, l;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (
                ((s = Object.assign(
                  {
                    wxApi: null,
                    canUseWechatAddressBook: !1,
                    cloudAddresses: [],
                    maxCloudChoices: 5,
                  },
                  t || {}
                )),
                (a = s.wxApi) && "function" == typeof a.showActionSheet)
              ) {
                e.next = 4;
                break;
              }
              return e.abrupt("return", { branch: "skip" });
            case 4:
              if (Array.isArray(s.cloudAddresses) && s.cloudAddresses.length) {
                e.next = 6;
                break;
              }
              return e.abrupt("return", { branch: "skip" });
            case 6:
              return (
                (i = s.cloudAddresses.slice(
                  0,
                  Math.max(1, Number(s.maxCloudChoices) || 5)
                )),
                (c = []),
                s.canUseWechatAddressBook && c.push("使用微信地址簿新增/更新"),
                (o = c.length),
                i.forEach(function (e) {
                  c.push(n(e));
                }),
                (e.next = 13),
                new Promise(function (e, r) {
                  a.showActionSheet({ itemList: c, success: e, fail: r });
                })
              );
            case 13:
              if (
                ((u = e.sent),
                (d = Number(u && u.tapIndex)),
                !s.canUseWechatAddressBook || 0 !== d)
              ) {
                e.next = 17;
                break;
              }
              return e.abrupt("return", {
                branch: "wechat",
                cloudItemOffset: o,
                candidateAddresses: i,
                tapIndex: d,
              });
            case 17:
              if (!(l = i[d - o]) || !l.id) {
                e.next = 21;
                break;
              }
              return e.abrupt("return", {
                branch: "cloud",
                picked: l,
                cloudItemOffset: o,
                candidateAddresses: i,
                tapIndex: d,
              });
            case 21:
              return e.abrupt("return", {
                branch: "skip",
                cloudItemOffset: o,
                candidateAddresses: i,
                tapIndex: d,
              });
            case 22:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function i() {
  return (i = r(
    e().mark(function r(t) {
      var n, a, i, c;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (
                (n = Object.assign(
                  { wxApi: null, saveWechatAddress: null },
                  t || {}
                )).wxApi &&
                "function" == typeof n.wxApi.chooseAddress
              ) {
                e.next = 3;
                break;
              }
              throw new Error("WECHAT_CHOOSE_ADDRESS_NOT_SUPPORTED");
            case 3:
              if ("function" == typeof n.saveWechatAddress) {
                e.next = 5;
                break;
              }
              throw new Error("SAVE_WECHAT_ADDRESS_REQUIRED");
            case 5:
              return (
                (e.next = 7),
                new Promise(function (e, r) {
                  n.wxApi.chooseAddress({ success: e, fail: r });
                })
              );
            case 7:
              return (
                (a = e.sent), (i = s(a)), (e.next = 11), n.saveWechatAddress(i)
              );
            case 11:
              return (c = e.sent), e.abrupt("return", c || null);
            case 13:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
module.exports = {
  buildAddressActionLabel: n,
  chooseFromActionSheet: function (e) {
    return a.apply(this, arguments);
  },
  chooseWechatAddressAndSave: function (e) {
    return i.apply(this, arguments);
  },
  normalizeCloudAddresses: function (e) {
    return Array.isArray(e)
      ? e.filter(function (e) {
          return e && e.id;
        })
      : [];
  },
  normalizeWechatAddressPayload: s,
};
