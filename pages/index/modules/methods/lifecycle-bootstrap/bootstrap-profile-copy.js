var e = require("../../../../../@babel/runtime/helpers/typeof"),
  t = Object.freeze({
    quickContactLabel: "联系客服",
    serviceItemOverrides: Object.freeze({
      help: Object.freeze({
        title: "帮助中心",
        sub: "常见问题与售后入口，快速找到答案",
      }),
      terms: Object.freeze({
        title: "服务条款",
        sub: "查看平台协议与隐私条款，保障交易安全",
      }),
      contact: Object.freeze({
        title: "联系客服",
        sub: "订单与收货问题可一键联系官方客服",
      }),
    }),
    applyDocLabels: Object.freeze({
      designer: "入驻说明文档",
      distributor: "合作说明文档",
    }),
    applyCardCopy: Object.freeze({
      designer: Object.freeze({
        active: Object.freeze({
          badgeText: "设计师面板",
          title: "我的共创设计师面板",
          sub: "查看等级、返佣比例、作品审核状态与收益记录",
          buttonText: "进入面板",
          stats: Object.freeze([
            Object.freeze({ value: "--", label: "当前等级" }),
            Object.freeze({ value: "--", label: "返佣比例" }),
            Object.freeze({ value: "0", label: "被引用次数" }),
          ]),
        }),
        pending: Object.freeze({
          badgeText: "审核中",
          title: "设计师申请已提交",
          sub: "官方审核中，请在“我的通知”查看最新进度",
          buttonText: "查看通知",
          stats: Object.freeze([]),
        }),
        normal: Object.freeze({
          badgeText: "驻场设计师",
          title: "成为 StoneLab 驻场设计师",
          sub: "上传作品并绑定真实订单，通过审核后可进入灵感展示池",
          buttonText: "立即申请",
          stats: Object.freeze([
            Object.freeze({ value: "1,200+", label: "驻场设计师" }),
            Object.freeze({ value: "¥ 62w", label: "最高月收益" }),
            Object.freeze({ value: "4.9", label: "平均评分" }),
          ]),
        }),
      }),
      distributor: Object.freeze({
        active: Object.freeze({
          badgeText: "代理分销",
          title: "分销商面板",
          sub: "查看下级关系、收益明细与专属邀请入口",
          buttonText: "进入面板",
          stats: Object.freeze([
            Object.freeze({ value: "0", label: "直属人数" }),
            Object.freeze({ value: "¥ 0.00", label: "待结算收益" }),
            Object.freeze({ value: "--", label: "返佣比例" }),
          ]),
        }),
        pending: Object.freeze({
          badgeText: "代理分销",
          title: "分销申请审核中",
          sub: "申请审核中，请耐心等待官方审核结果",
          buttonText: "正在申请中请等待",
          stats: Object.freeze([
            Object.freeze({ value: "320+", label: "授权渠道商" }),
            Object.freeze({ value: "¥ 35w", label: "最高月分销额" }),
            Object.freeze({ value: "85折", label: "最低拿货价" }),
          ]),
        }),
        normal: Object.freeze({
          badgeText: "代理分销",
          title: "成为 StoneLab 授权代理商",
          sub: "开通分销合作权益，获取官方支持与稳定供货能力",
          buttonText: "立即申请",
          stats: Object.freeze([
            Object.freeze({ value: "320+", label: "授权渠道商" }),
            Object.freeze({ value: "¥ 35w", label: "最高月分销额" }),
            Object.freeze({ value: "85折", label: "最低拿货价" }),
          ]),
        }),
      }),
    }),
    applyDocConfig: Object.freeze({
      designer: Object.freeze({
        title: "设计师入驻说明",
        accent: "#E5D5C5",
        sections: Object.freeze([
          Object.freeze({
            heading: "入驻条件",
            items: Object.freeze([
              "拥有独立创作能力，需提交至少1套可落地的完整设计方案。",
              "遵守平台内容规范，严禁侵权、违规宣传及作出绝对化功效承诺。",
              "完成实名认证，保证提交信息真实有效。",
            ]),
          }),
          Object.freeze({
            heading: "收益与结算",
            items: Object.freeze([
              "分成比例：设计师可获得用户实付金额的6%。",
              "结算规则：退款、取消订单及售后未完结订单不予结算；订单确认收货7–15天后，收益转为可提现余额。",
              "版权说明：投稿设计方案为平台与设计师共创成果，相关权益归平台所有；设计师享有作品署名权及持续分成权。",
              "优秀激励：平台定期综合评估推广数据与合规情况，表现优异者佣金上调，同时开通专属服务通道及配套扶持。",
            ]),
          }),
          Object.freeze({
            heading: "审核与入驻",
            items: Object.freeze([
              "平台结合方案质量、原创性、落地性及平台规则综合审核，保留最终审核权。",
              "审核未通过，将在3个工作日内给出优化建议，可修改后重新提交。",
              "禁止恶意重复提交、抄袭等行为。",
              "连续60天未更新方案，或作品质量严重不达标，系统将自动解除设计师认证，同时停止原有方案收益发放。",
            ]),
          }),
        ]),
      }),
      distributor: Object.freeze({
        title: "代理分销合作说明",
        accent: "#C8A96E",
        sections: Object.freeze([
          Object.freeze({
            heading: "入驻条件",
            items: Object.freeze([
              "具备私域运营或内容创作能力，可依托社群、小红书、抖音、微信等渠道开展推广。",
              "遵守平台推广规则，禁止虚假宣传、恶意比价、引导违规交易。",
              "完成实名认证，并绑定个人或企业收款账户。",
            ]),
          }),
          Object.freeze({
            heading: "收益与结算",
            items: Object.freeze([
              "返佣比例：合伙人可获得用户消费金额的10%。",
              "邀请奖励：每成功邀请一名新合伙人，会有奖励，奖励上不封顶。",
              "结算规则：退款、取消订单及售后未完结订单不予结算；订单确认收货7–15天后，收益转为可提现余额。",
              "优秀激励：平台定期综合评估推广数据与合规情况，表现优异者佣金上调，同时开通专属服务通道及配套扶持。",
            ]),
          }),
          Object.freeze({
            heading: "审核机制",
            items: Object.freeze([
              "平台根据推广能力、过往表现、合规情况综合评估，保留最终审核权。",
              "审核未通过将告知具体原因，补充资料后可再次申请。",
            ]),
          }),
          Object.freeze({
            heading: "审核与入驻",
            items: Object.freeze([
              "审核周期：提交申请后，运营团队1个工作日内完成评估。",
              "入驻通知：审核通过将收到系统通知，解锁合伙人工作台（含专属推广链接、佣金明细、素材中心）。",
              "新手扶持：新晋合伙人首月可领取专属推广素材包，并享受一对一运营指导。",
            ]),
          }),
        ]),
      }),
    }),
  });
function r(t) {
  return !t || "object" !== e(t) || Array.isArray(t) ? {} : t;
}
function i(t) {
  return (
    !!t && "object" === e(t) && !Array.isArray(t) && Object.keys(t).length > 0
  );
}
function a(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255,
    i = String(e || "").trim(),
    a = i || String(t || "").trim();
  return a ? a.slice(0, r) : "";
}
function n(e, t) {
  var i = Array.isArray(e) ? e : [],
    n = Array.isArray(t) ? t : [],
    l = i
      .slice(0, 3)
      .map(function (e, t) {
        var i = r(e),
          l = r(n[t]);
        return {
          value: a(i.value, l.value, 64),
          label: a(i.label, l.label, 64),
        };
      })
      .filter(function (e) {
        return e.value || e.label;
      });
  return 3 === l.length
    ? l
    : n.slice(0, 3).map(function (e) {
        var t = r(e);
        return { value: a(t.value, "", 64), label: a(t.label, "", 64) };
      });
}
function l(e, t) {
  var i = r(e),
    l = r(t);
  return {
    badgeText: a(i.badgeText, l.badgeText, 64),
    title: a(i.title, l.title, 128),
    sub: a(i.sub, l.sub, 255),
    buttonText: a(i.buttonText, l.buttonText, 64),
    stats: n(i.stats, l.stats),
  };
}
function c(e, t) {
  var i = Array.isArray(e) ? e : [],
    n = Array.isArray(t) ? t : [],
    l = i
      .slice(0, 16)
      .map(function (e, t) {
        var i = r(e),
          n = a(i.heading, "章节 ".concat(t + 1), 64),
          l = (Array.isArray(i.items) ? i.items : [])
            .slice(0, 16)
            .map(function (e) {
              return a(e, "", 255);
            })
            .filter(Boolean);
        return l.length ? { heading: n, items: l } : null;
      })
      .filter(Boolean);
  return l.length > 0
    ? l
    : n.map(function (e, t) {
        var i = r(e);
        return {
          heading: a(i.heading, "章节 ".concat(t + 1), 64),
          items: (Array.isArray(i.items) ? i.items : [])
            .slice(0, 16)
            .map(function (e) {
              return a(e, "", 255);
            })
            .filter(Boolean),
        };
      });
}
function b(e, t) {
  var i = r(e),
    n = r(t);
  return {
    title: a(i.title, n.title, 64),
    accent: a(i.accent, n.accent || "#E5D5C5", 16),
    sections: c(i.sections, n.sections),
  };
}
module.exports = {
  DEFAULT_PROFILE_COPY: t,
  resolveProfileCopy: function (e) {
    var n = r(e),
      c = r(n.profile),
      s = i(c) ? c : n,
      u = t,
      o = r(u.serviceItemOverrides),
      f = r(u.applyCardCopy),
      d = r(u.applyDocConfig),
      O = r(u.applyDocLabels),
      p = r(s.serviceItems),
      j = r(s.serviceItemOverrides),
      v = r(s.applyCards),
      g = r(s.applyCardCopy),
      z = r(s.applyDocs),
      m = r(s.applyDocConfig),
      y = r(s.quickLabels),
      h = a(s.quickContactLabel, "", 32),
      C = r(s.applyDocLabels),
      x = function (e, t, a) {
        var n = r(e[a]);
        return i(n) ? n : r(t[a]);
      },
      T = function (e) {
        var t = x(v, g, e);
        return {
          active: r(t.active),
          pending: r(t.pending),
          normal: r(t.normal),
        };
      },
      A = function (e) {
        var t = r(z[e]);
        return i(t) ? t : r(m[e]);
      },
      L = T("designer"),
      D = T("distributor"),
      k = {
        help: {
          title: a(x(p, j, "help").title, r(o.help).title, 64),
          sub: a(x(p, j, "help").sub, r(o.help).sub, 255),
        },
        terms: {
          title: a(x(p, j, "terms").title, r(o.terms).title, 64),
          sub: a(x(p, j, "terms").sub, r(o.terms).sub, 255),
        },
        contact: {
          title: a(x(p, j, "contact").title, r(o.contact).title, 64),
          sub: a(x(p, j, "contact").sub, r(o.contact).sub, 255),
        },
      };
    return {
      quickContactLabel: a(y.contact, h || u.quickContactLabel, 32),
      serviceItemOverrides: k,
      applyDocLabels: {
        designer: a(C.designer, O.designer, 64),
        distributor: a(C.distributor, O.distributor, 64),
      },
      applyCardCopy: {
        designer: {
          active: l(L.active, r(r(f.designer).active)),
          pending: l(L.pending, r(r(f.designer).pending)),
          normal: l(L.normal, r(r(f.designer).normal)),
        },
        distributor: {
          active: l(D.active, r(r(f.distributor).active)),
          pending: l(D.pending, r(r(f.distributor).pending)),
          normal: l(D.normal, r(r(f.distributor).normal)),
        },
      },
      applyDocConfig: {
        designer: b(A("designer"), r(d.designer)),
        distributor: b(A("distributor"), r(d.distributor)),
      },
    };
  },
};
