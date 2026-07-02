var e = require("../../../../../@babel/runtime/helpers/typeof"),
  r = Object.freeze({
    linxi: {
      id: "linxi",
      name: "林汐",
      subtitle: "东方手作设计师",
      bio: "擅长以木香、留白和东方意境重构日常佩戴体验，让每一件作品都具备可长期陪伴的气质。",
      avatarUrl:
        "https://images.unsplash.com/photo-1738566061505-556830f8b8f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300",
      coverUrl:
        "https://images.unsplash.com/photo-1680200256120-8ac04eb6f01d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      tags: ["木香留白", "东方静气", "可持续材质"],
    },
    miayi: {
      id: "miayi",
      name: "Mia Yi",
      subtitle: "极简风格设计师",
      bio: "专注于极简首饰语言，通过克制结构和冷静材质表达现代女性日常穿搭中的锋利感。",
      avatarUrl:
        "https://images.unsplash.com/photo-1597294583248-1f66323dc208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300",
      coverUrl:
        "https://images.unsplash.com/photo-1769116416517-594639a769a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      tags: ["极简", "现代", "冷感金属"],
    },
  }),
  t = Object.freeze(Object.keys(r));
function i(e) {
  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
    t = String(null == e ? "" : e).trim();
  return t || String(null == r ? "" : r).trim();
}
function n(n) {
  if (!n || "object" !== e(n)) return t[0];
  var o = i(
    n.designerId ||
      n.designer_id ||
      n.sourceDesignerId ||
      n.source_designer_id ||
      n.authorId ||
      n.author_id,
    ""
  ).toLowerCase();
  if (o && r[o]) return o;
  var a = i(n.id, "") || i(n.name, "");
  return a
    ? t[
        (function (e) {
          for (var r = String(e || ""), t = 0, i = 0; i < r.length; i += 1)
            t = (31 * t + r.charCodeAt(i)) >>> 0;
          return t;
        })(a) % t.length
      ]
    : t[0];
}
function o(e, r) {
  var t = (function (e) {
    return (Array.isArray(e) ? e : []).map(function (e, r) {
      return Object.assign({}, e, {
        previewUrl: i(e && e.previewUrl, ""),
        likesText: String(120 + 19 * r),
        __designerId: n(e),
      });
    });
  })(e).filter(function (e) {
    return e.__designerId === r;
  });
  return t.length ? t.slice(0, 12) : [];
}
module.exports = {
  buildDesignerProfile: function (e, i) {
    var n = r[e] ? e : t[0],
      a = r[n],
      s = o(i, n),
      c = s.length,
      u = 388 * c + ("miayi" === n ? 320 : 0),
      g = 1.2 * c + ("miayi" === n ? 1.1 : 0.6);
    return Object.assign({}, a, {
      detailType: "designer",
      works: s,
      worksCountText: String(c),
      earningsText: "¥".concat(u.toLocaleString("en-US")),
      popularityText: "".concat(g.toFixed(1), "k"),
    });
  },
};
