var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../../../pages/index/modules/deps/profile-deps"),
  r = n.getHelpCenterContent,
  o = n.getContentBlockByCode,
  a = n.logger,
  c = n.playSound;
function i(t) {
  var e = Array.isArray(t) ? t : [],
    n = [];
  return (
    e.forEach(function (t, e) {
      var r = String((t && t.name) || "").trim() || "分类".concat(e + 1),
        o = Array.isArray(t && t.items) ? t.items : [];
      o.length &&
        (n.push("".concat(r)),
        o.forEach(function (t, e) {
          var r = String((t && t.question) || "").trim(),
            o = String((t && t.answer) || "").trim();
          r && o && (n.push("".concat(e + 1, ". ").concat(r)), n.push(o));
        }),
        n.push(""));
    }),
    n.join("\n").trim()
  );
}
module.exports = {
  openContentModalByServiceId: function (n) {
    var l = this;
    return e(
      t().mark(function e() {
        var s, d, u, p, g, M, f, h, m, x, b, v, C;
        return t().wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if (
                    ((s = String(n || "").trim()),
                    (d = l.getDefaultContentByServiceId(s)),
                    l.setData({
                      showContentModal: !0,
                      contentModalType: s,
                      contentModalTitle: d.title,
                      contentModalLoading: !0,
                      contentModalError: "",
                      contentModalText: d.content,
                    }),
                    c("pop"),
                    "help" !== s)
                  ) {
                    t.next = 18;
                    break;
                  }
                  return (t.prev = 5), (t.next = 8), r();
                case 8:
                  if (((u = t.sent), !(p = i(u && u.categories)))) {
                    t.next = 13;
                    break;
                  }
                  return (
                    l.setData({
                      contentModalTitle: "帮助中心",
                      contentModalText: p,
                      contentModalLoading: !1,
                      contentModalError: "",
                    }),
                    t.abrupt("return")
                  );
                case 13:
                  t.next = 18;
                  break;
                case 15:
                  (t.prev = 15),
                    (t.t0 = t.catch(5)),
                    a.warn("Load structured help center failed", t.t0);
                case 18:
                  if ((g = l.resolveContentCodeByServiceId(s))) {
                    t.next = 22;
                    break;
                  }
                  return (
                    l.setData({ contentModalLoading: !1 }), t.abrupt("return")
                  );
                case 22:
                  if (!(M = l.getCachedProfileContentBlock(g))) {
                    t.next = 28;
                    break;
                  }
                  return (
                    (f = String((M && M.title) || "").trim() || d.title),
                    (h = String((M && M.content) || "").trim() || d.content),
                    l.setData({
                      contentModalTitle: f,
                      contentModalText: h,
                      contentModalLoading: !1,
                      contentModalError: "",
                    }),
                    t.abrupt("return")
                  );
                case 28:
                  return (
                    (t.prev = 28),
                    (t.next = 31),
                    l.ensureProfileContentBlockCache()
                  );
                case 31:
                  if (
                    ((m = t.sent),
                    (x = m && m[g] ? m[g] : null),
                    (t.t1 = x),
                    t.t1)
                  ) {
                    t.next = 38;
                    break;
                  }
                  return (t.next = 37), o(g);
                case 37:
                  t.t1 = t.sent;
                case 38:
                  (b = t.t1),
                    !x && b && l.cacheProfileContentBlocks([b]),
                    (v = String((b && b.title) || "").trim() || d.title),
                    (C = String((b && b.content) || "").trim() || d.content),
                    l.setData({
                      contentModalTitle: v,
                      contentModalText: C,
                      contentModalLoading: !1,
                      contentModalError: "",
                    }),
                    (t.next = 49);
                  break;
                case 45:
                  (t.prev = 45),
                    (t.t2 = t.catch(28)),
                    a.warn("Load content block failed", t.t2),
                    l.setData({
                      contentModalLoading: !1,
                      contentModalError: "云端内容暂不可用，已展示默认文案",
                    });
                case 49:
                case "end":
                  return t.stop();
              }
          },
          e,
          null,
          [
            [5, 15],
            [28, 45],
          ]
        );
      })
    )();
  },
};
