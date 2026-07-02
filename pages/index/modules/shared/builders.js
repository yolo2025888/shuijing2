var e = require("../../../../@babel/runtime/helpers/typeof"),
  s = require("./catalog-shared"),
  t = s.resolveAssetPath,
  i = s.getStructure,
  c = require("./formatters"),
  n = c.formatDecimal,
  r = c.normalizePattern,
  a = c.getBraceletGeometry,
  o = c.checkWristCompatibility;
module.exports = {
  buildCheckoutData: function (e) {
    var s = Object.assign({}, e),
      t = r(s.beadsOrPattern || []),
      c = a(t),
      d = o(t, s.userWrist),
      l = Number(c.effectiveMm || 0),
      u = l > 0 ? l : Number(s.perim || 0),
      m = (s.structure || i(s.beadsOrPattern || [])).map(function (e) {
        return Object.assign({}, e, {
          priceText: n(e.price),
          sumText: n(e.sum),
        });
      });
    return Object.assign({}, s, {
      displayName: s.name || "灵感定制方案",
      structure: m,
      priceText: n(s.price),
      perim: u,
      effectivePerim: u,
      effectivePerimCmText: n(u / 10),
      perimCmText: n(u / 10),
      wristRangeText: c.hasRange ? c.rangeText : "--",
      wristRangeTextCompact: c.hasRange ? c.rangeTextCompact : "--",
      wristMonitorStatus: d.status,
      wristMonitorMsg: d.msg,
      wristMonitorTone: d.tone,
    });
  },
  buildNavTabs: function () {
    return [
      {
        id: "home",
        label: "首页",
        activeIcon: t("./assets/icons/nav-schemes-active.svg"),
        inactiveIcon: t("./assets/icons/nav-schemes-muted.svg"),
      },
      {
        id: "inspiration",
        label: "灵感",
        activeIcon: t("./assets/icons/nav-design-active.svg"),
        inactiveIcon: t("./assets/icons/nav-design-muted.svg"),
      },
      {
        id: "diy",
        label: "DIY",
        activeIcon: t("./assets/icons/nav-diy-active.svg"),
        inactiveIcon: t("./assets/icons/nav-diy-muted.svg"),
      },
      {
        id: "cart",
        label: "购物车",
        activeIcon: t("./assets/icons/nav-cart-active.svg"),
        inactiveIcon: t("./assets/icons/nav-cart-muted.svg"),
      },
      {
        id: "profile",
        label: "主页",
        activeIcon: t("./assets/icons/nav-profile-active.svg"),
        inactiveIcon: t("./assets/icons/nav-profile-muted.svg"),
      },
    ];
  },
  buildGuideTabs: function () {
    return [
      { id: "tips", label: "Tips" },
      { id: "tutorial", label: "使用教程" },
      { id: "measure", label: "手围测量" },
      { id: "size", label: "珠子大小" },
    ];
  },
  buildOperationTips: function () {
    return [
      {
        stepText: "01",
        kicker: "操作指引",
        title: "收拢成串",
        copy: "点击“收拢成串”，把托盘中的灵感快速收束成完整手串结构。",
        icon: t("./assets/icons/concentric-dark.svg"),
      },
      {
        stepText: "02",
        kicker: "功能指引",
        title: "盲盒方案",
        copy: "缺乏灵感时，试试盲盒，随机载入设计师或优秀客订方案。",
        icon: t("./assets/icons/blindbox-dark.svg"),
      },
      {
        stepText: "03",
        kicker: "操作指引",
        title: "尺寸切换",
        copy: "同款材质可按下方 - / + 切换毫米尺寸，快速对比重量和视觉比例。",
        icon: t("./assets/icons/ruler-dark.svg"),
      },
      {
        stepText: "04",
        kicker: "信任背书",
        title: "真实拍摄",
        copy: "素材尽量使用实拍图建立珠子库，让颜色、纹理和透光感更接近实物。",
        icon: t("./assets/icons/magnifier-plus-green.svg"),
      },
      {
        stepText: "05",
        kicker: "情绪价值",
        title: "实物光效",
        copy: "屏幕只是预览，天然光下的通透、折射和光影层次会更丰富。",
        icon: t("./assets/icons/star-gold.svg"),
      },
      {
        stepText: "06",
        kicker: "服务承诺",
        title: "实拍确认",
        copy: "成品发货前可根据流程进行实拍确认，降低定制方案的色差和预期偏差。",
        icon: t("./assets/icons/order-check-green.svg"),
      },
      {
        stepText: "07",
        kicker: "品质背书",
        title: "源头筛选",
        copy: "素材会按品类、尺寸和质感维度整理，帮你更快找到适合的主石与配饰。",
        icon: t("./assets/icons/concentric-dark.svg"),
      },
      {
        stepText: "08",
        kicker: "设计师专属",
        title: "高效创作",
        copy: "设计师可通过工坊快速完成主石、配饰、尺寸和手围的组合推演。",
        icon: t("./assets/icons/designer-gold.svg"),
      },
      {
        stepText: "09",
        kicker: "创作者激励",
        title: "创作基金",
        copy: "优秀设计可作为灵感方案沉淀，后续可承接创作者展示和激励机制。",
        icon: t("./assets/icons/globe-dark.svg"),
      },
      {
        stepText: "10",
        kicker: "品牌能力",
        title: "桌面创作引擎",
        copy: "同一套创作逻辑会逐步连接 web、小程序和移动端，保持方案数据一致。",
        icon: t("./assets/icons/nav-design-dark.svg"),
      },
    ];
  },
  buildTutorialSlides: function () {
    return [
      {
        title: "挑选素材，开始搭配",
        desc: "点击下方分类选择珠子与配饰，拖入托盘后可继续调整位置与顺序。",
        icon: t("./assets/icons/plus-circle-dark.svg"),
      },
      {
        title: "设置净手围",
        desc: "在工坊内设置净手围后，系统会给出松紧建议，帮助你快速完成方案。",
        icon: t("./assets/icons/globe-dark.svg"),
      },
      {
        title: "保存并加入购物车",
        desc: "方案可先保存到“我的设计”，也可直接加入购物车进行后续结算。",
        icon: t("./assets/icons/concentric-dark.svg"),
      },
      {
        title: "拍照分享",
        desc: "进入拍照模式生成展示图，可保存到相册或分享给朋友。",
        icon: t("./assets/icons/zoom-plus-dark.svg"),
      },
    ];
  },
  buildNoticeItems: function () {
    return [
      {
        title: "发货与时效",
        desc: "付款后系统进入排单生产，通常 24 小时内发货；活动期可能略有延迟。",
      },
      {
        title: "售后说明",
        desc: "收到货后如有质量问题可发起售后，平台会在审核后推进退款或补发。",
      },
      {
        title: "定制提示",
        desc: "手工定制会存在轻微色差与纹理差异，最终以实物效果为准。",
      },
    ];
  },
  buildMeasureCards: function (e) {
    return "M" === e
      ? [
          { size: "16cm", desc: "偏小手围" },
          { size: "17cm", desc: "标准手围" },
          { size: "18cm", desc: "偏大手围" },
          { size: "19cm", desc: "大手围 / 喜宽松" },
          { size: "20cm", desc: "大手围 / 喜松垂" },
          { size: "21cm", desc: "超大手围" },
        ]
      : [
          { size: "14cm", desc: "偏小手围" },
          { size: "15cm", desc: "标准手围" },
          { size: "16cm", desc: "偏大手围" },
          { size: "17cm", desc: "大手围 / 喜宽松" },
          { size: "18cm", desc: "大手围 / 喜松垂" },
          { size: "19cm", desc: "超大手围" },
        ];
  },
  buildEstimateRows: function () {
    return [
      {
        h: "150-155cm",
        w: [
          "13.5",
          "14.0",
          "14.5",
          "15.0",
          "15.5",
          "16.0",
          "16.5",
          "17.0",
          "17.5",
        ],
      },
      {
        h: "155-160cm",
        w: [
          "14.0",
          "14.5",
          "15.0",
          "15.5",
          "16.0",
          "16.5",
          "17.0",
          "17.5",
          "18.0",
        ],
      },
      {
        h: "160-165cm",
        w: [
          "14.5",
          "15.0",
          "15.5",
          "16.0",
          "16.5",
          "17.0",
          "17.5",
          "18.0",
          "18.5",
        ],
      },
      {
        h: "165-170cm",
        w: [
          "15.0",
          "15.5",
          "16.0",
          "16.5",
          "17.0",
          "17.5",
          "18.0",
          "18.5",
          "19.0",
        ],
      },
      {
        h: "170-175cm",
        w: [
          "15.5",
          "16.0",
          "16.5",
          "17.0",
          "17.5",
          "18.0",
          "18.5",
          "19.0",
          "19.5",
        ],
      },
      {
        h: "175-180cm+",
        w: [
          "16.0",
          "16.5",
          "17.0",
          "17.5",
          "18.0",
          "18.5",
          "19.0",
          "19.5",
          "20.0",
        ],
      },
    ];
  },
  buildSizeCompareItems: function () {
    return [
      { mm: "8mm", label: "精巧" },
      { mm: "10mm", label: "标准" },
      { mm: "12mm", label: "量感" },
    ];
  },
  buildOrderItems: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      s = function (e) {
        var s = Number(e || 0);
        return Number.isFinite(s) && s > 0 ? "(".concat(s, ")") : "";
      };
    return [
      {
        id: "pending_pay",
        txt: "待付款".concat(s(e.pendingPay)),
        icon: t("./assets/icons/order-card-green.svg"),
      },
      {
        id: "pending_ship",
        txt: "待发货".concat(s(e.pendingShip)),
        icon: t("./assets/icons/order-package-green.svg"),
      },
      {
        id: "pending_receive",
        txt: "待收货".concat(s(e.pendingReceive)),
        icon: t("./assets/icons/order-pin-green.svg"),
      },
      {
        id: "after_sale",
        txt: "售后中".concat(s(e.afterSale)),
        icon: t("./assets/icons/order-check-green.svg"),
      },
    ];
  },
  buildServiceItems: function () {
    var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      i = s && "object" === e(s) ? s : {},
      c = function (s, t, c) {
        var n = i[s] && "object" === e(i[s]) ? i[s] : {};
        return String(n[t] || "").trim() || c;
      };
    return [
      {
        id: "my_designs",
        title: "我的设计",
        sub: "查看和管理你保存的方案，支持继续编辑与下单",
        icon: t("./assets/icons/nav-design-muted.svg"),
      },
      {
        id: "address",
        title: "收货地址",
        sub: "管理常用收货地址，提升下单效率",
        icon: t("./assets/icons/service-location-muted.svg"),
      },
      {
        id: "notify",
        title: "我的通知",
        sub: "查看系统公告与订单提醒，重要消息不错过",
        icon: t("./assets/icons/alert-muted.svg"),
      },
      {
        id: "help",
        title: c("help", "title", "帮助中心"),
        sub: c("help", "sub", "常见问题与售后入口，快速找到答案"),
        icon: t("./assets/icons/service-help-muted.svg"),
      },
      {
        id: "terms",
        title: c("terms", "title", "服务条款"),
        sub: c("terms", "sub", "查看平台协议与隐私条款，保障交易安全"),
        icon: t("./assets/icons/service-doc-muted.svg"),
      },
      {
        id: "contact",
        title: c("contact", "title", "联系客服"),
        sub: c("contact", "sub", "订单与收货问题可一键联系官方客服"),
        icon: t("./assets/icons/service-help-muted.svg"),
      },
    ];
  },
};
