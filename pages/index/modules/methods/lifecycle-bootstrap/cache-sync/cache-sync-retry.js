var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/asyncToGenerator");
module.exports = {
  delay: function (e) {
    var t = this;
    return new Promise(function (r) {
      "function" != typeof t.setManagedTimeout
        ? setTimeout(r, Math.max(0, Number(e) || 0))
        : t.setManagedTimeout(r, Math.max(0, Number(e) || 0));
    });
  },
  withRetry: function (r, a) {
    var n = this;
    return t(
      e().mark(function t() {
        var u, s, i, c;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  (u = Object.assign({ attempts: 2, delayMs: 220 }, a || {})),
                    (s = Math.max(1, Number(u.attempts) || 1)),
                    (i = null),
                    (c = 0);
                case 4:
                  if (!(c < s)) {
                    e.next = 21;
                    break;
                  }
                  return (e.prev = 5), (e.next = 8), r();
                case 8:
                  return e.abrupt("return", e.sent);
                case 11:
                  if (
                    ((e.prev = 11),
                    (e.t0 = e.catch(5)),
                    (i = e.t0),
                    !(c >= s - 1))
                  ) {
                    e.next = 16;
                    break;
                  }
                  return e.abrupt("break", 21);
                case 16:
                  return (e.next = 18), n.delay(u.delayMs);
                case 18:
                  (c += 1), (e.next = 4);
                  break;
                case 21:
                  throw i || new Error("REQUEST_RETRY_FAILED");
                case 22:
                case "end":
                  return e.stop();
              }
          },
          t,
          null,
          [[5, 11]]
        );
      })
    )();
  },
};
