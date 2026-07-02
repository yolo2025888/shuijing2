var e = Object.freeze({
    common: Object.freeze({
      unnamedUser: "未命名用户",
      operationFailed: "操作失败，请稍后重试",
      noData: "暂无数据",
      loadMore: "加载更多",
      loadingMore: "加载中...",
      retry: "重试",
    }),
    distributor: Object.freeze({
      title: "分销商面板",
      notify: "通知",
      loading: "正在加载分销数据...",
      emptyTitle: "你还不是分销商",
      emptyDesc: "请先提交分销商申请，审核通过后即可查看完整面板数据。",
      backToProfile: "返回我的页面",
      sectionSummaryTitle: "数据总览",
      sectionSummarySub: "当前等级、返佣比例与收益统计",
      metricLevel: "分销等级",
      metricRate: "返佣比例",
      metricDownline: "直属人数",
      metricLedger: "总记录数",
      earningPending: "待结算",
      earningSettled: "已结算",
      earningTotal: "累计收益",
      earningReversed: "冲销金额",
      sectionInviteTitle: "专属邀请",
      sectionInviteSub: "复制链接或分享二维码邀请新用户",
      sectionInviteNote:
        "链接和二维码带有你的身份标识，新用户首登后将自动归属到你名下。",
      inviteLinkLabel: "邀请链接",
      inviteLinkEmpty: "暂无邀请链接",
      copyLink: "复制链接",
      previewQr: "查看二维码",
      sectionDownlinesTitle: "直属下级",
      sectionDownlinesSub: "展示最近绑定关系，可继续加载查看更多历史记录",
      sectionEarningsTitle: "收益明细",
      sectionEarningsSub: "展示最近收益记录，可继续加载查看更多历史记录",
      childUserId: "用户ID",
      boundAt: "绑定时间",
      orderPrefix: "订单 #",
      orderItemId: "订单明细",
      rateSnapshot: "返佣比例",
      amount: "收益金额",
      createdAt: "创建时间",
      errors: Object.freeze({
        panel: "分销商面板加载失败，请稍后重试",
        downlines: "直属下级加载失败，请重试",
        earnings: "收益明细加载失败，请重试",
        invite: "邀请信息加载失败，请重试",
        noCopyLink: "暂无可复制的邀请链接",
        copyFailed: "复制失败，请稍后重试",
        qrUnavailable: "二维码暂不可用",
        qrPreviewFailed: "二维码预览失败",
      }),
      success: Object.freeze({ copy: "邀请链接已复制" }),
    }),
    creator: Object.freeze({
      title: "设计师面板",
      loading: "正在加载设计师数据...",
      emptyTitle: "你还不是共创设计师",
      emptyDesc: "请先完成设计师申请，审核通过后即可查看完整面板数据。",
      backToProfile: "返回我的页面",
      sectionSummaryTitle: "数据面板",
      sectionSummarySub: "实时统计与收益总览",
      currentLevel: "当前等级",
      commissionRate: "分成比例",
      quoteCount: "作品被引用次数",
      available: "可提现",
      locked: "提现中",
      settled: "已结算",
      qualifying: "待达标",
      withdrawTitle: "发起提现申请",
      withdrawPlaceholder: "输入提现金额（元）",
      withdrawSubmit: "申请提现",
      profileTitle: "个人信息与分享",
      profileSub: "通过主页链接或二维码，让用户直达你的设计师主页",
      previewHome: "预览主页",
      copyLink: "复制链接",
      previewQr: "查看二维码",
      designerName: "设计师名称",
      bio: "个人简介",
      bioEmpty: "暂无简介",
      workAuditTitle: "作品审核中心",
      workAuditSub: "提交作品前请确认实拍图与订单信息完整",
      submitWork: "提交作品审核",
      publishedWorksTitle: "已发布作品",
      publishedWorksSub: "仅展示审核通过并已发布的作品",
      withdrawRecordsTitle: "提现记录",
      orderItemId: "绑定订单明细",
      quotedCount: "引用次数",
      reviewNote: "审核备注",
      withdrawIdPrefix: "申请 #",
      amount: "金额",
      note: "备注",
      errors: Object.freeze({
        panel: "设计师面板加载失败，请稍后重试",
        works: "作品列表加载失败，请重试",
        withdraws: "提现记录加载失败，请重试",
        withdrawAmountInvalid: "请输入有效提现金额",
        withdrawSubmitFailed: "提现申请失败，请确认可提现余额",
        sharePathMissing: "专属主页链接生成失败",
        copyFailed: "复制失败，请稍后重试",
        qrUnavailable: "二维码生成失败",
        qrPreviewFailed: "二维码预览失败",
      }),
      success: Object.freeze({
        withdrawSubmitted: "提现申请已提交",
        copy: "专属链接已复制",
      }),
    }),
  }),
  t = Object.freeze({
    distributorDownline: Object.freeze({
      active: Object.freeze({
        code: "active",
        label: "已绑定",
        className: "is-active",
      }),
      pending: Object.freeze({
        code: "pending",
        label: "待生效",
        className: "is-pending",
      }),
      unbound: Object.freeze({
        code: "unbound",
        label: "已解绑",
        className: "is-unbound",
      }),
      unknown: Object.freeze({
        code: "unknown",
        label: "未知状态",
        className: "is-unknown",
      }),
    }),
    distributorLedger: Object.freeze({
      pending: Object.freeze({
        code: "pending",
        label: "待结算",
        className: "is-pending",
      }),
      settled: Object.freeze({
        code: "settled",
        label: "已结算",
        className: "is-settled",
      }),
      reversed: Object.freeze({
        code: "reversed",
        label: "已冲销",
        className: "is-reversed",
      }),
      unknown: Object.freeze({
        code: "unknown",
        label: "未知状态",
        className: "is-unknown",
      }),
    }),
    creatorWork: Object.freeze({
      pending: Object.freeze({
        code: "pending",
        label: "审核中",
        className: "is-pending",
      }),
      approved: Object.freeze({
        code: "approved",
        label: "已发布",
        className: "is-approved",
      }),
      rejected: Object.freeze({
        code: "rejected",
        label: "已驳回",
        className: "is-rejected",
      }),
      unknown: Object.freeze({
        code: "unknown",
        label: "未知状态",
        className: "is-unknown",
      }),
    }),
    creatorWithdraw: Object.freeze({
      pending: Object.freeze({
        code: "pending",
        label: "待审核",
        className: "is-pending",
      }),
      approved: Object.freeze({
        code: "approved",
        label: "待打款",
        className: "is-approved",
      }),
      rejected: Object.freeze({
        code: "rejected",
        label: "已驳回",
        className: "is-rejected",
      }),
      paid: Object.freeze({
        code: "paid",
        label: "已打款",
        className: "is-paid",
      }),
      unknown: Object.freeze({
        code: "unknown",
        label: "未知状态",
        className: "is-unknown",
      }),
    }),
  });
function r(e) {
  return String(e || "")
    .trim()
    .toLowerCase();
}
module.exports = {
  PANEL_TEXT: e,
  STATUS_META: t,
  getDistributorDownlineStatusMeta: function (e) {
    var i = r(e);
    return t.distributorDownline[i] || t.distributorDownline.unknown;
  },
  getDistributorLedgerStatusMeta: function (e) {
    var i = r(e);
    return t.distributorLedger[i] || t.distributorLedger.unknown;
  },
  getCreatorWorkStatusMeta: function (e) {
    var i = r(e);
    return t.creatorWork[i] || t.creatorWork.unknown;
  },
  getCreatorWithdrawStatusMeta: function (e) {
    var i = r(e);
    return t.creatorWithdraw[i] || t.creatorWithdraw.unknown;
  },
};
