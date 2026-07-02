module.exports = {
  toFiniteNumber: function (r) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      i = Number(r);
    return Number.isFinite(i) ? i : t;
  },
  toPositiveInt: function (r) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      i = Number(r);
    return !Number.isFinite(i) || i <= 0 ? t : Math.floor(i);
  },
  normalizeStringArray: function (r) {
    return Array.isArray(r)
      ? r
          .map(function (r) {
            return String(r || "").trim();
          })
          .filter(Boolean)
      : [];
  },
};
