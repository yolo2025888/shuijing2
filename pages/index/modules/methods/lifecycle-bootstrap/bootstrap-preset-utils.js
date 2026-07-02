require("../../../../../@babel/runtime/helpers/Arrayincludes");
var r = require("../../../../../@babel/runtime/helpers/typeof"),
  t = {
    designer: "设计师款",
    customer: "优秀客订",
    qinglv: "情侣款式",
    couple: "情侣款式",
  };
function i(r) {
  var t = String(r || "")
    .trim()
    .toLowerCase();
  return "couple" === t || "qinglv" === t || "情侣" === t || "情侣款式" === t
    ? "qinglv"
    : t || "designer";
}
function n(t) {
  var n = t && "object" === r(t) ? t : {},
    e = (
      Array.isArray(n.sectionCodes)
        ? n.sectionCodes
        : Array.isArray(n.section_codes)
        ? n.section_codes
        : [n.category]
    )
      .map(function (r) {
        return i(r);
      })
      .filter(Boolean);
  return e.length ? Array.from(new Set(e)) : [i(n.category)];
}
function e(r, n) {
  var e = String(r || "").trim(),
    o = i(n);
  if (e) {
    var a = i(e);
    return t[a] ? t[a] : e;
  }
  return t[o] ? t[o] : n || "分类";
}
function o(r) {
  var t = String(r || "").trim();
  return !!t && 0 === t.indexOf("__all__:");
}
var a = { 热门推荐: 10, 主珠: 20, 配珠: 30, 点缀: 40 };
module.exports = {
  resolvePresetCategories: function (r, t) {
    var o = new Map(),
      a = Array.isArray(r) ? r : [],
      u = a.length > 0;
    return (
      a.forEach(function (r, t) {
        var n = i(r && r.id);
        o.has(n) ||
          o.set(n, {
            id: n,
            label: e(r && r.label, n),
            sort: Number.isFinite(Number(r && r.sort)) ? Number(r.sort) : t,
          });
      }),
      u ||
        (t || []).forEach(function (r, t) {
          n(r).forEach(function (r, i) {
            o.has(r) || o.set(r, { id: r, label: e("", r), sort: 1e3 + t + i });
          });
        }),
      Array.from(o.values())
        .sort(function (r, t) {
          return r.sort !== t.sort ? r.sort - t.sort : r.id.localeCompare(t.id);
        })
        .map(function (r) {
          return { id: r.id, label: r.label };
        })
    );
  },
  pickPresetCategoryId: function (r, t, n) {
    var e = String(n || "").trim();
    return e &&
      (r || []).some(function (r) {
        return r.id === e;
      })
      ? e
      : (r || []).length
      ? r[0].id
      : (t || []).length
      ? i(t[0].category)
      : "designer";
  },
  filterPresetsByCategory: function (r, t) {
    var i = Array.isArray(r) ? r : [],
      e = String(t || "").trim();
    return "all" === e
      ? i.slice()
      : e
      ? i.filter(function (r) {
          return n(r).includes(e);
        })
      : i.slice();
  },
  resolveDefaultMenuCategory: function (r) {
    var t = Array.isArray(r) ? r : [],
      i = t.find(function (r) {
        return r && o(r.id);
      });
    if (i && i.id) return String(i.id);
    var n = t.find(function (r) {
      return r && "in_use" === r.id;
    });
    if (n && n.id) return String(n.id);
    var e = t.find(function (r) {
      return r && r.id && "in_use" !== r.id && !o(r.id);
    });
    if (e && e.id) return String(e.id);
    var a = t.find(function (r) {
      return r && r.id;
    });
    return a && a.id ? String(a.id) : "in_use";
  },
  sortMainCategoriesForDisplay: function (r) {
    return (Array.isArray(r) ? r : []).slice().sort(function (r, t) {
      var i = String((r && r.label) || "").trim(),
        n = String((t && t.label) || "").trim(),
        e = Object.prototype.hasOwnProperty.call(a, i) ? a[i] : 999,
        o = Object.prototype.hasOwnProperty.call(a, n) ? a[n] : 999;
      return e !== o
        ? e - o
        : String((r && r.id) || "").localeCompare(String((t && t.id) || ""));
    });
  },
  withAllSubCategory: function (r, t, i) {
    var n = String(r || "").trim(),
      e = Array.isArray(t) ? t : [];
    if (!n) return e.slice();
    var o = (function (r) {
      var t = String(r || "").trim();
      return t ? "".concat("__all__:").concat(t) : "";
    })(n);
    if (!o) return e.slice();
    if (
      e.some(function (r) {
        return String((r && r.id) || "") === o;
      })
    )
      return e.slice();
    var a = (function (r, t) {
        var i = String(r || "").trim(),
          n = (Array.isArray(t) ? t : []).find(function (r) {
            return String((r && r.id) || "") === i;
          });
        return String((n && (n.label || n.id)) || i).trim() || i;
      })(n, i),
      u = { id: o, label: "所有".concat(a) },
      l = e.slice(),
      s = l.findIndex(function (r) {
        return "in_use" === String((r && r.id) || "");
      }),
      c = s >= 0 ? s + 1 : 0;
    return l.splice(c, 0, u), l;
  },
  isAllSubCategory: o,
  getMainCategoryFromAllSubCategory: function (r) {
    var t = String(r || "").trim();
    return o(t) ? t.slice("__all__:".length) : "";
  },
};
