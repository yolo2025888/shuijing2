var e = require("../../@babel/runtime/helpers/typeof");
function r(e) {
  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
    t = String(null == e ? "" : e).trim();
  return t || r;
}
var t = Object.freeze({
    19: "L君",
    白白白: "小马",
    白晶序列: "Hakuna Matata",
    便宜的我不买: "John",
    "彩虹🌈": "Xii",
    草莓: "十一",
    "粉白熊熊🐻": "曾O0o",
    海屿晴光: "NANA",
    花环: "袋子",
    灰白月光: "The Sixth、",
    灰月光奇楠沉香: "BreakALegIn",
    姐妹这个好看: "MorningStar",
    绿绿绿: "D-",
    玛瑙胶花: "跳麻麻",
    清新绿: "湾仔码头™",
    少苏风格: "清漪",
    晚风渡金: "学会☀微笑",
    我也买绿幽灵了: "保利时代X",
    小橘小橘: "Cccccc",
    银曜石白金: "lucifer_link",
    这个也好看: "MorningStar",
    纵升多宝: "YOKO",
  }),
  s = Object.freeze({
    s_1778655004376: "L君",
    s_1778655234032: "小马",
    s_1777910026038: "Hakuna Matata",
    s_1778655645452: "John",
    s_1777909213234: "Xii",
    s_1777908332833: "十一",
    s_1777909026416: "曾O0o",
    s_1778831010973: "NANA",
    s_1777908150454: "NANA",
    s_1777908858256: "袋子",
    s_1778831087452: "The Sixth、",
    s_1777909556162: "The Sixth、",
    s_1777909604792: "BreakALegIn",
    s_1778831269554: "MorningStar",
    s_1777908950291: "MorningStar",
    s_1778831353810: "D-",
    s_1778690771853: "D-",
    s_1778831443482: "跳麻麻",
    s_1777908104235: "跳麻麻",
    s_1777909329374: "湾仔码头™",
    s_1778655876883: "清漪",
    s_1778831601397: "学会☀微笑",
    s_1777909881927: "学会☀微笑",
    s_1778655473961: "保利时代X",
    s_1778831723914: "Cccccc",
    s_1777910372719: "Cccccc",
    s_1778832018802: "lucifer_link",
    s_1777908752873: "lucifer_link",
    s_1778832070998: "MorningStar",
    s_1777908987044: "MorningStar",
    s_1777907906972: "YOKO",
  });
function o(e) {
  var t = r(e).toLowerCase();
  return "couple" === t || "qinglv" === t || "情侣" === t || "情侣款式" === t
    ? "qinglv"
    : t;
}
function a(r) {
  var t = r && "object" === e(r) ? r : {},
    s = (
      Array.isArray(t.sectionCodes)
        ? t.sectionCodes
        : Array.isArray(t.section_codes)
        ? t.section_codes
        : [t.category]
    )
      .map(function (e) {
        return o(e);
      })
      .filter(Boolean);
  return Array.from(new Set(s));
}
function n(r) {
  var t = r && "object" === e(r) ? r : {};
  return (
    !0 === t.isCustomerPreset ||
    !0 === t.is_customer_preset ||
    "customer" === o(t.category) ||
    a(t).includes("customer")
  );
}
function i(o) {
  var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
    i = o && "object" === e(o) ? o : {};
  if (n(i)) {
    var u = r(
      i.customerAuthorName ||
        i.customer_author_name ||
        i.displayAuthorName ||
        i.display_author_name
    );
    if (u) return u;
    for (
      var c = [
          i.id,
          i.code,
          i.templateId,
          i.template_id,
          i.sourceId,
          i.source_id,
        ],
        _ = 0;
      _ < c.length;
      _ += 1
    ) {
      var l = r(c[_]);
      if (l && s[l]) return s[l];
    }
    for (
      var m = [i.name, i.title, i.workTitle, i.work_title], h = 0;
      h < m.length;
      h += 1
    ) {
      var d = r(m[h]);
      if (d && t[d]) return t[d];
    }
  }
  for (
    var g = [
        i.displayAuthorName,
        i.display_author_name,
        i.customerAuthorName,
        i.customer_author_name,
        i.authorName,
        i.author_name,
        i.creatorName,
        i.creator_name,
        i.sourceDesignerName,
        i.source_designer_name,
        a,
      ],
      f = 0;
    f < g.length;
    f += 1
  ) {
    var v = r(g[f]);
    if (v) return v;
  }
  return "匿名作者";
}
module.exports = {
  isCustomerPreset: n,
  normalizePresetCategoryId: o,
  resolvePresetAuthorPresentation: function (r) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      s = r && "object" === e(r) ? r : {},
      o = n(s),
      a = i(s, t);
    return Object.assign({}, s, {
      isCustomerPreset: o,
      is_customer_preset: o,
      usesDesignerIdentity: !o,
      uses_designer_identity: !o,
      displayAuthorName: a,
      display_author_name: a,
    });
  },
  resolvePresetDisplayAuthorName: i,
  resolvePresetSectionCodes: a,
};
