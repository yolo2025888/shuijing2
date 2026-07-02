var e = null,
  t = !1,
  n = new Map(),
  r = new Map(),
  a = require("./logger"),
  i = !1,
  o = {
    hit: "/assets/audio/hit.wav",
    slide: "/assets/audio/slide.wav",
    pop: "/assets/audio/pop.wav",
  };
function u(e) {
  var t = Number(e);
  return Number.isFinite(t) ? (t < 0 ? 0 : t > 1 ? 1 : t) : 0.5;
}
function c() {
  if (
    t ||
    "undefined" == typeof wx ||
    "function" != typeof wx.createWebAudioContext
  )
    return null;
  if (!e)
    try {
      e = wx.createWebAudioContext();
    } catch (n) {
      return (
        (t = !0),
        (e = null),
        a.warn("WebAudio init failed, fallback to InnerAudioContext.", n),
        null
      );
    }
  if (e && "suspended" === e.state && "function" == typeof e.resume)
    try {
      e.resume();
    } catch (n) {
      return (
        (t = !0),
        (e = null),
        a.warn("WebAudio resume failed, fallback to InnerAudioContext.", n),
        null
      );
    }
  return e;
}
function l(e, t) {
  var n = e.createGain();
  return n.connect(e.destination), n.gain.setValueAtTime(t, e.currentTime), n;
}
function s(e) {
  var t = o[e];
  if (!t) return null;
  if (
    "undefined" == typeof wx ||
    "function" != typeof wx.createInnerAudioContext
  )
    return null;
  var r = n.get(e);
  return (
    r ||
    (((r = wx.createInnerAudioContext()).src = t),
    (r.autoplay = !1),
    (r.loop = !1),
    (r.obeyMuteSwitch = !1),
    r.onError(function (t) {
      a.error("InnerAudio error (".concat(e, ")"), t);
    }),
    n.set(e, r),
    r)
  );
}
function f(e, t) {
  var n = s(e);
  if (!n) return !1;
  try {
    return (
      n.stop(),
      "function" == typeof n.seek && n.seek(0),
      (n.volume = (function (e, t) {
        var n = u(t);
        return u("slide" === e ? 0.7 * n : "hit" === e ? 0.9 * n : 0.8 * n);
      })(e, t)),
      n.play(),
      !0
    );
  } catch (t) {
    return a.error("InnerAudio play failed (".concat(e, ")"), t), !1;
  }
}
module.exports = {
  playSound: function (n, i, o) {
    var s = Date.now();
    if ("hit" === n) {
      if (i && r.get(i) && s - r.get(i) < 60) return;
      i && r.set(i, s);
    }
    var p = c();
    if (p)
      try {
        if (
          (function (e, t, n) {
            var r = u(n),
              a = e.currentTime;
            if ("hit" === t) {
              var i = e.createBiquadFilter();
              (i.type = "lowpass"),
                (i.frequency.value = 4500),
                i.connect(e.destination);
              var o = e.createOscillator(),
                c = e.createGain();
              (o.type = "triangle"),
                o.frequency.setValueAtTime(2500 + 800 * Math.random(), a),
                c.gain.setValueAtTime(0.4 * r, a),
                c.gain.exponentialRampToValueAtTime(0.001, a + 0.02),
                o.connect(c),
                c.connect(i),
                o.start(a),
                o.stop(a + 0.03);
              var s = e.createOscillator(),
                f = e.createGain();
              return (
                (s.type = "sine"),
                s.frequency.setValueAtTime(700 + 300 * Math.random(), a),
                f.gain.setValueAtTime(0.7 * r, a),
                f.gain.exponentialRampToValueAtTime(0.001, a + 0.08),
                s.connect(f),
                f.connect(i),
                s.start(a),
                s.stop(a + 0.1),
                !0
              );
            }
            if ("slide" === t) {
              var p = l(e, 0.15 * r),
                d = e.createOscillator();
              return (
                (d.type = "sine"),
                d.frequency.setValueAtTime(300, a),
                d.frequency.exponentialRampToValueAtTime(800, a + 0.1),
                p.gain.linearRampToValueAtTime(0, a + 0.15),
                d.connect(p),
                d.start(a),
                d.stop(a + 0.16),
                !0
              );
            }
            if ("pop" === t) {
              var m = l(e, 0.4),
                y = e.createOscillator();
              return (
                (y.type = "triangle"),
                y.frequency.setValueAtTime(500, a),
                y.frequency.exponentialRampToValueAtTime(800, a + 0.05),
                m.gain.exponentialRampToValueAtTime(0.01, a + 0.1),
                y.connect(m),
                y.start(a),
                y.stop(a + 0.1),
                !0
              );
            }
            return !1;
          })(p, n, o)
        )
          return;
      } catch (r) {
        (t = !0),
          (e = null),
          a.warn(
            "WebAudio play failed (".concat(
              n,
              "), fallback to InnerAudioContext."
            ),
            r
          );
      }
    f(n, o);
  },
  warmupAudioEngine: function () {
    if (i) return !0;
    var e = !1;
    return (
      c() && (e = !0),
      Object.keys(o).forEach(function (t) {
        s(t) && (e = !0);
      }),
      e && (i = !0),
      e
    );
  },
};
