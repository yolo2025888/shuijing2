var t = require("../@babel/runtime/helpers/defineProperty"),
  a = require("../@babel/runtime/helpers/typeof");
function o(t, a, o) {
  return Math.max(a, Math.min(o, t));
}
function h(t, a) {
  var o = Number(t);
  return Number.isFinite(o) ? o : a;
}
module.exports = {
  computeLayoutMetricsV2: function (r) {
    var e,
      n = r && "object" === a(r) ? r : {},
      u = n.viewport && "object" === a(n.viewport) ? n.viewport : {},
      M = n.options && "object" === a(n.options) ? n.options : {},
      d = Math.max(1, Math.round(h(u.windowWidth, 390))),
      i = Math.max(1, Math.round(h(u.windowHeight, 844))),
      m = Math.max(0, Math.round(h(u.safeTop, 20))),
      x = o(Math.round(h(u.safeBottom, i)), m, i),
      p = Math.max(1, x - m),
      s =
        u.menuButtonRect && "object" === a(u.menuButtonRect)
          ? u.menuButtonRect
          : null,
      P = Math.round(h(M.baseTraySize, 332)),
      T = Math.round(h(M.minTraySize, 296)),
      c = h(M.photoTrayScale, 0.92),
      b = !!M.hasNavTabs,
      f = !!M.navHidden,
      g = !!M.skipBottomSafeInset,
      l = Math.max(0, Math.round(i - x)),
      B = d / 750,
      w = Math.round(116 * B),
      y =
        (l > 0
          ? Math.max(2, Math.round(0.2 * l))
          : Math.max(2, Math.round(4 * B))) + Math.max(2, Math.round(12 * B)),
      v = y + w + Math.round(28 * B),
      N = P * (d / 380),
      S = p < 760,
      H = d < 370,
      R = S ? 236 : p < 860 ? 272 : T,
      z = Math.max(Math.round(32 * B), Math.round((f ? 52 : 44) * B)),
      j = Math.max(R, d - 2 * z),
      I = Math.max(R, Math.floor(p * (S ? 0.44 : 0.51))),
      L = Math.round(o(N, R, Math.min(P, j, I))),
      k = Math.round(1 * L),
      F = Math.round(o(k * c, 282, 356)),
      W = Math.round(0.36 * p),
      q = Math.round(m + 12),
      D = Math.round(Math.max(20, 0.06 * d)),
      V = Math.round(m + 16),
      A = Math.round(Math.max(18, 0.05 * d)),
      C = Math.round(32 * B),
      E =
        s && Number.isFinite(Number(s.top))
          ? Math.max(0, Math.round(Number(s.top)))
          : Math.max(0, m),
      G =
        s && Number.isFinite(Number(s.height))
          ? Math.max(32, Math.round(Number(s.height)))
          : Math.round(60 * B),
      J = E,
      K = Math.max(G, Math.round(56 * B)),
      O = J + K + Math.round(8 * B),
      Q = Math.round(s && s.height ? Math.max(s.height, 36) : 40),
      U = O + Q + Math.round((S ? 12 : 16) * B),
      X = Math.round((d - k) / 2),
      Y = U + k,
      Z = Y - Math.round(88 * B),
      $ = Math.max(C, Math.round(26 * B)),
      _ = Y + Math.round(18 * B),
      tt = Math.round(86 * B),
      at = _ + tt + Math.round(22 * B),
      ot = Math.round(64 * B),
      ht = at + ot + Math.round(12 * B),
      rt = Math.round(54 * B),
      et = ht + rt + Math.round(2 * B),
      nt =
        b && !f
          ? y + w + Math.round(10 * B)
          : g
          ? 0
          : Math.max(l, Math.round(4 * B)),
      ut = i - nt - Math.round((S ? 300 : 336) * B);
    if (et > ut) {
      var Mt = et - ut,
        dt = Math.max(R, k - Mt);
      dt !== k &&
        ((k = dt),
        (X = Math.round((d - k) / 2)),
        (Z = (Y = U + k) - Math.round(88 * B)),
        (et =
          (ht =
            (at = (_ = Y + Math.round(18 * B)) + tt + Math.round(22 * B)) +
            ot +
            Math.round(12 * B)) +
          rt +
          Math.round(2 * B)));
    }
    var it = Math.round(24 * B),
      mt = C;
    return (
      t(
        (e = {
          windowWidth: d,
          windowHeight: i,
          headerTopPx: J,
          metaTopPx: O,
          stageTopPx: U,
          stageSizePx: k,
          actionTopPx: _,
          searchTopPx: at,
          tabsTopPx: ht,
          panelTopPx: et,
          panelBottomPx: nt,
          dockHeightPx: nt,
          safeTopPx: m,
          safeBottomPx: l,
          safeTop: m,
          safeBottomInset: l,
          menuRect: s,
          compactHeight: S,
          narrowWidth: H,
          traySize: k,
          photoTraySize: F,
          trayPhotoShift: W,
          brandTop: q,
          brandLeft: D,
          shareTop: V,
          shareRight: A,
          appBarTopPx: J,
          appBarHeightPx: K,
        }),
        "safeTopPx",
        m
      ),
      t(e, "topMetaTopPx", O),
      t(e, "topMetaHeightPx", Q),
      t(e, "trayTopPx", U),
      t(e, "trayLeftPx", X),
      t(e, "undoTopPx", Z),
      t(e, "undoRightPx", $),
      t(e, "actionTopPx", _),
      t(e, "searchTopPx", at),
      t(e, "mainTabsTopPx", ht),
      t(e, "mainTabsHeightPx", rt),
      t(e, "materialTopPx", et),
      t(e, "bottomDockPx", nt),
      t(e, "layerSidePx", C),
      t(e, "searchInsetLeftPx", it),
      t(e, "searchInsetRightPx", mt),
      t(e, "bottomNavBottomPx", y),
      t(e, "cartBarBottomPx", v),
      t(e, "shellPaddingTop", 0),
      t(e, "shellPaddingBottom", 0),
      e
    );
  },
};
