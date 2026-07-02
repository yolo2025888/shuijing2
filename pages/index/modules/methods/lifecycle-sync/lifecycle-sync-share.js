var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../../../../@babel/runtime/helpers/typeof"),
  n = require("../../deps/lifecycle-deps"),
  a = n.loadSchemeById,
  i = n.normalizeSharedSchemeQuery,
  s = require("../../../../../utils/diyEntrySession").readDiyEntrySession,
  u = require("../../storage/local-snapshot-cache").readLocalSchemesSnapshot,
  c = /^[A-Za-z0-9_-]{1,64}$/;
function o(e) {
  var r = e && "object" === t(e) ? e : {},
    n = String(r.id || "").trim(),
    a = (function (e) {
      return Array.isArray(e)
        ? e
            .map(function (e) {
              return null == e ? "" : String(e).trim();
            })
            .filter(Boolean)
        : [];
    })(r.pattern);
  if (!n || !a.length) return null;
  var i = Number(void 0 !== r.bgIndex ? r.bgIndex : r.bg_index),
    s = Number(r.beadMm || r.bead_mm),
    u = Number(r.previewRenderVersion || r.preview_render_version),
    c = {
      id: n,
      pattern: a,
      name: String(r.name || "").trim(),
      bgIndex: Number.isFinite(i) ? i : 0,
    };
  return (
    Number.isFinite(s) && s > 0 && ((c.beadMm = s), (c.bead_mm = s)),
    Number.isFinite(u) &&
      u > 0 &&
      ((c.previewRenderVersion = u), (c.preview_render_version = u)),
    r.materialMap &&
      "object" === t(r.materialMap) &&
      (c.materialMap = r.materialMap),
    r.materialSnapshot &&
      "object" === t(r.materialSnapshot) &&
      (c.materialSnapshot = r.materialSnapshot),
    c
  );
}
function p(e) {
  var r = String(e || "").trim();
  if (!r) return [];
  var t = r;
  try {
    t = decodeURIComponent(r);
  } catch (e) {
    t = r;
  }
  return t
    .split(",")
    .map(function (e) {
      return String(e || "").trim();
    })
    .filter(function (e) {
      return c.test(e);
    });
}
function l(e) {
  var r = String(e || "").trim(),
    t = r;
  try {
    t = decodeURIComponent(r);
  } catch (e) {
    t = r;
  }
  return t.slice(0, 64);
}
function m(e, r) {
  var n = String(r || "").trim();
  if (!n) return { scheme: null, schemes: [] };
  for (
    var a = e && e.data && "object" === t(e.data) ? e.data : {},
      i = Array.isArray(a.savedSchemes) ? a.savedSchemes : [],
      s = u().concat(i),
      c = [],
      p = new Set(),
      l = null,
      m = 0;
    m < s.length;
    m += 1
  ) {
    var d = o(s[m]);
    d && (p.has(d.id) || (p.add(d.id), c.push(d)), l || d.id !== n || (l = d));
  }
  return { scheme: l, schemes: c };
}
function d(e, r, t) {
  return h.apply(this, arguments);
}
function h() {
  return (h = r(
    e().mark(function r(t, n, a) {
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (t && "function" == typeof t.ensurePatternMaterialAssets) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return");
              case 2:
                return (
                  (e.prev = 2),
                  (e.next = 5),
                  t.ensurePatternMaterialAssets(n, {
                    materialMap: a,
                    preferCache: !0,
                    remoteTimeoutMs: 6500,
                  })
                );
              case 5:
                e.next = 9;
                break;
              case 7:
                (e.prev = 7), (e.t0 = e.catch(2));
              case 9:
              case "end":
                return e.stop();
            }
        },
        r,
        null,
        [[2, 7]]
      );
    })
  )).apply(this, arguments);
}
function f(e, r, t, n) {
  return b.apply(this, arguments);
}
function b() {
  return (b = r(
    e().mark(function r(t, n, a, i) {
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (t && Array.isArray(n) && n.length) {
                e.next = 2;
                break;
              }
              return e.abrupt("return", !1);
            case 2:
              if ("function" == typeof t.loadScheme) {
                e.next = 4;
                break;
              }
              return e.abrupt("return", !1);
            case 4:
              return (e.next = 6), d(t, n);
            case 6:
              return (
                t.loadScheme(n, a, null, i || ""),
                "function" == typeof t.showToast &&
                  t.showToast("已为你载入分享方案"),
                e.abrupt("return", !0)
              );
            case 9:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
function x(e, r) {
  return y.apply(this, arguments);
}
function y() {
  return (y = r(
    e().mark(function r(t, n) {
      var a;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if ((a = s(n)) && Array.isArray(a.pattern) && a.pattern.length) {
                e.next = 3;
                break;
              }
              return e.abrupt("return", !1);
            case 3:
              if (t && "function" == typeof t.loadScheme) {
                e.next = 5;
                break;
              }
              return e.abrupt("return", !1);
            case 5:
              return (
                (e.next = 7),
                d(t, a.pattern, a.materialMap || a.materialSnapshot)
              );
            case 7:
              return (
                t.loadScheme(a.pattern, a.bgIndex || 0, null, a.name || "", {
                  renderPlan: a.renderPlan || a.render_plan,
                }),
                "order_reuse" ===
                  String(
                    a.sourceEntry || a.source_entry || a.source || ""
                  ).trim() &&
                  "function" == typeof t.showToast &&
                  t.showToast(
                    "已基于原订单生成新方案，价格和库存以当前页面为准"
                  ),
                e.abrupt("return", !0)
              );
            case 10:
            case "end":
              return e.stop();
          }
      }, r);
    })
  )).apply(this, arguments);
}
module.exports = {
  tryApplySharedScheme: function (t) {
    var n = this;
    return r(
      e().mark(function r() {
        var s, u, c, o, h, b, y, S, v, g, k;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (s = i(t)),
                    (u = s.schemeId),
                    (c = s.shareCode),
                    (o = String((t && t.fromShare) || "").trim()),
                    (h = "1" === o || "true" === o.toLowerCase()),
                    (b = p(t && t.sharedPattern)),
                    (r = t && t.sharedBgIndex),
                    (w = void 0),
                    (w = Number(r)),
                    (y = Number.isFinite(w) ? Math.max(0, Math.round(w)) : 0),
                    (S = l(t && t.sharedName)),
                    (e.next = 8),
                    x(n, t && t.entryId)
                  );
                case 8:
                  if (!e.sent) {
                    e.next = 10;
                    break;
                  }
                  return e.abrupt("return");
                case 10:
                  if (u) {
                    e.next = 16;
                    break;
                  }
                  if (h) {
                    e.next = 13;
                    break;
                  }
                  return e.abrupt("return");
                case 13:
                  return (e.next = 15), f(n, b, y, S);
                case 15:
                  return e.abrupt("return");
                case 16:
                  if (h) {
                    e.next = 24;
                    break;
                  }
                  if (((v = m(n, u)), !(g = v.scheme))) {
                    e.next = 24;
                    break;
                  }
                  return (
                    (e.next = 22),
                    d(n, g.pattern, g.materialMap || g.materialSnapshot)
                  );
                case 22:
                  return (
                    n.loadScheme(
                      g.pattern,
                      g.bgIndex || 0,
                      null,
                      g.name || "",
                      { renderPlan: g.renderPlan || g.render_plan }
                    ),
                    e.abrupt("return")
                  );
                case 24:
                  return (e.prev = 24), (e.next = 27), a(u, { shareCode: c });
                case 27:
                  if (
                    (k = e.sent) &&
                    Array.isArray(k.pattern) &&
                    k.pattern.length
                  ) {
                    e.next = 37;
                    break;
                  }
                  if (((e.t0 = h), !e.t0)) {
                    e.next = 34;
                    break;
                  }
                  return (e.next = 33), f(n, b, y, S);
                case 33:
                  e.t0 = e.sent;
                case 34:
                  if (!e.t0) {
                    e.next = 36;
                    break;
                  }
                  return e.abrupt("return");
                case 36:
                  return e.abrupt("return");
                case 37:
                  return (
                    (e.next = 39),
                    d(n, k.pattern, k.materialMap || k.materialSnapshot)
                  );
                case 39:
                  n.loadScheme(k.pattern, k.bgIndex || 0, null, k.name || "", {
                    renderPlan: k.renderPlan || k.render_plan,
                  }),
                    n.showToast("已为你载入分享方案"),
                    (e.next = 53);
                  break;
                case 43:
                  if (
                    ((e.prev = 43), (e.t1 = e.catch(24)), (e.t2 = h), !e.t2)
                  ) {
                    e.next = 50;
                    break;
                  }
                  return (e.next = 49), f(n, b, y, S);
                case 49:
                  e.t2 = e.sent;
                case 50:
                  if (!e.t2) {
                    e.next = 52;
                    break;
                  }
                  return e.abrupt("return");
                case 52:
                  n.reportInitIssue("share_scheme", e.t1, {
                    toast: !1,
                    fallbackMessage: "分享方案载入失败",
                  });
                case 53:
                case "end":
                  return e.stop();
              }
            var r, w;
          },
          r,
          null,
          [[24, 43]]
        );
      })
    )();
  },
};
