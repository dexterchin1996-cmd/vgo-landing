"use client";
/**
 * Copyright (c) 2026 Ventus Reflexology. All Rights Reserved.
 * 服务详情页 v4 —— 专业版（讲清价值，不做虚假承诺）
 */
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft, ArrowRight, Check, Clock, ShieldCheck, XCircle,
  Wrench, Sparkles, Heart, Truck, ShoppingBag, Briefcase,
  AlertCircle, FileCheck, MessageSquare, type LucideIcon,
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import { SERVICES, type ServiceItem } from "@/data/services";

const ICONS: Record<string, LucideIcon> = { Wrench, Sparkles, Heart, Truck, ShoppingBag, Briefcase };
type ServiceId = "repair" | "clean" | "massage" | "errand" | "market" | "jobs";

const DETAIL: Record<ServiceId, {
  value: string;
  pains: [string, string][];
  approach: [string, string][];
  steps: [string, string][];
  mechanisms: [string, string][];
  faqs: [string, string][];
}> = {
  repair: {
    value: "亚庇地区的上门维修服务，师傅实名审核、报价透明、订单留档",
    pains: [
      ["找师傅难", "熟人介绍靠运气，网上找怕遇坑，打电话经常没人接"],
      ["报价不透明", "上门了才报价，说多少是多少，你没得选"],
      ["出了问题没人管", "修完发现不行，找不到人，投诉无门"],
      ["不知道师傅底细", "对方是谁、做过什么、别人怎么评价，全都不知道"],
    ],
    approach: [
      ["师傅实名审核", "每位入驻师傅都需通过身份认证和资质审核，资料在平台可查"],
      ["报价必须明确", "平台要求师傅上门后先报价，你确认后才开始服务"],
      ["订单平台留档", "每一次下单、每一次报价、每一次完成，都在平台有记录"],
      ["客服协助处理", "如有疑问或纠纷，可随时联系平台客服协助沟通"],
    ],
    steps: [
      ["提交需求", "拍照说明问题，选择服务时间与地址"],
      ["匹配师傅", "系统就近匹配可接单的师傅，可查看师傅资料"],
      ["上门检查", "师傅上门检查，给出明确报价"],
      ["确认服务", "你确认报价后，师傅才开始维修"],
      ["完成验收", "验收满意后，通过平台完成付款并评价"],
    ],
    mechanisms: [
      ["身份认证", "师傅需通过身份证实名和资质审核后方可接单"],
      ["报价透明", "上门后先报价，你确认后才动手，杜绝临时加价"],
      ["订单留档", "所有沟通和订单记录在平台保存，可随时查看"],
      ["评价体系", "每次服务后可评价，帮助其他用户参考"],
      ["客服支持", "如遇问题可联系客服，协助沟通处理"],
      ["隐私保护", "师傅签保密协议，不外传你的地址和个人信息"],
    ],
    faqs: [
      ["师傅上门要收费吗？", "具体收费方式由师傅在报价时说明。你可以先与师傅沟通确认，再决定是否继续。如果检查后你决定不修，可以和师傅协商是否需要支付上门费。"],
      ["维修价格怎么算？", "师傅会上门检查后给出报价。平台要求师傅报价明确、清晰，你确认后才开始服务。对报价有疑问时，可随时联系客服协助。"],
      ["师傅有资质吗？", "平台对入驻师傅进行身份认证和资质审核。你可以查看师傅的公开资料，包括服务记录和用户反馈，再决定是否下单。"],
      ["多久能上门？", "上门时间取决于师傅档期和你的位置，下单时系统会显示可选时间。如遇紧急情况，可以联系客服协助。"],
      ["可以指定师傅吗？", "如果平台提供指定功能，你可以在下单时备注。具体以 App 内功能为准。"],
      ["怎么付款？", "支持 App 内在线支付。具体支付方式以 App 内显示为准。"],
      ["维修后有问题怎么办？", "如服务后出现问题，可通过平台反馈。平台会协助你与师傅沟通。所有沟通记录在平台留档，方便查询。"],
    ],
  },
  clean: {
    value: "预约上门清洁服务，保洁员实名认证、服务内容清晰、订单有记录",
    pains: [
      ["周末想休息，家里一堆活", "想放松一下，却被家务困住，周末比上班还累"],
      ["找不到靠谱的人", "熟人介绍时间对不上，临时找人又不放心"],
      ["怕临时加价", "讲好一个价，做完又说要加钱，心里不舒服"],
      ["怕东西被弄坏", "陌生人上门，担心东西被翻、被弄坏"],
    ],
    approach: [
      ["保洁员实名认证", "每位入驻保洁员都需通过身份认证，资料可查"],
      ["服务内容清晰", "下单前明确清洁类型、范围、时长，避免误解"],
      ["按标准流程作业", "保洁员按平台规范作业，不拖延、不加价"],
      ["订单留档反馈", "服务完成后可评价，如有问题可通过平台反馈"],
    ],
    steps: [
      ["选择类型", "日常保洁 / 深度清洁 / 开荒清洁，填写面积与房间数"],
      ["填写需求", "描述清洁重点、特殊要求，明确服务内容"],
      ["保洁上门", "保洁员按约定时间上门，按内容服务"],
      ["验收评价", "验收满意后通过平台完成付款并评价"],
    ],
    mechanisms: [
      ["身份认证", "保洁员需通过身份认证后方可接单"],
      ["内容清晰", "下单前明确服务内容和范围，避免误解"],
      ["订单留档", "订单在平台保存，方便查询"],
      ["评价体系", "服务后可评价，帮助其他用户参考"],
      ["反馈渠道", "对服务不满意可通过平台反馈"],
      ["隐私尊重", "保洁员签保密协议，不拍摄、不外传你的信息"],
    ],
    faqs: [
      ["清洁用品要自备吗？", "具体以服务方说明为准。下单前可查看服务详情，或与服务方沟通确认。如有特殊需求（如要纯天然清洁剂），可在下单时备注。"],
      ["清洁不满意怎么办？", "服务完成后可通过平台反馈。我们会认真查看你的反馈，并协助沟通处理。所有订单在平台留档。"],
      ["可以指定保洁员吗？", "具体以 App 内功能为准。如需指定，可在下单时备注，由平台协助安排。"],
      ["可以只清洁部分区域吗？", "可以。你可以在下单时选择具体的清洁项目和区域，系统会显示对应的服务内容。"],
      ["服务期间可以离开吗？", "可以。建议留一个能联系上的人，方便保洁员有问题时沟通。"],
      ["怎么付款？", "通过 App 内在线支付。具体支付方式以 App 内显示为准。"],
      ["保洁员会翻我的东西吗？", "不会。保洁员只做清洁工作，按平台规范作业。如有违规行为，可立即通过平台投诉。"],
    ],
  },
  massage: {
    value: "预约上门按摩服务，按摩师资质审核、隐私严格保护、服务过程透明",
    pains: [
      ["懒得开车出门", "去会所要开车、要找车位、要排队，来回耗半天"],
      ["担心隐私问题", "陌生人上门，担心安全、担心隐私被泄露"],
      ["怕不专业", "不知道按摩师水平如何，怕按错部位"],
      ["价格不透明", "做完才说多少钱，或者硬推加钟"],
    ],
    approach: [
      ["按摩师资质审核", "每位入驻按摩师都需通过身份认证和资质审核"],
      ["服务内容明确", "预约时选好类型和时长，服务内容清楚列出"],
      ["隐私严格保护", "按摩师签保密协议，不拍摄、不外传个人信息"],
      ["过程可沟通", "服务全程可沟通力度、重点部位，如有不适可随时叫停"],
    ],
    steps: [
      ["选类型", "推拿 / 泰式 / SPA / 足疗，选好时长"],
      ["预约时间", "选择日期、时间与上门地址"],
      ["按摩师上门", "按摩师按约定时间上门，准备布置"],
      ["享受服务", "过程中可沟通调整，如有不适随时叫停"],
      ["完成评价", "服务完成后评价，帮助其他用户参考"],
    ],
    mechanisms: [
      ["资质认证", "按摩师需通过资质审核与身份认证"],
      ["资料透明", "可查看按摩师的服务类型和用户反馈"],
      ["隐私保护", "按摩师签保密协议，尊重用户隐私"],
      ["过程可沟通", "服务中可沟通力度和重点部位，不适可随时叫停"],
      ["评价体系", "服务后可评价，帮助其他用户参考"],
      ["反馈渠道", "对服务不满意可通过平台反馈"],
    ],
    faqs: [
      ["按摩师有执照吗？", "平台对入驻按摩师进行资质审核。你可以查看按摩师的公开资料和用户反馈，再决定是否下单。"],
      ["需要自备什么？", "具体以服务方说明为准。下单前可查看服务详情，或与服务方沟通确认。"],
      ["可以指定力度吗？", "可以。服务开始前可以与按摩师沟通力度偏好，服务过程中如有不适可随时沟通调整或叫停。"],
      ["男女按摩师都可以选吗？", "具体以 App 内功能为准。如有性别偏好，可在下单时备注，由平台协助安排。"],
      ["服务期间可以取消吗？", "具体取消政策以 App 内显示为准。如有疑问可联系平台客服。"],
      ["怎么付款？", "通过 App 内在线支付。具体支付方式以 App 内显示为准。"],
      ["隐私怎么保障？", "平台要求按摩师签署保密协议，不拍摄、不外传用户个人信息。如有违规行为，可立即通过平台投诉。"],
    ],
  },
  errand: {
    value: "同城跑腿代购服务，跑腿员实名认证、过程可追踪、订单有记录",
    pains: [
      ["抽不开身去办", "工作忙、在家带娃、身体不便，很多小事没法亲自去"],
      ["开车成本高", "开车一趟要半小时，找车位又麻烦，算下来不划算"],
      ["找人帮忙欠人情", "叫朋友帮忙，一次两次可以，长期不好意思"],
      ["怕东西丢了", "让陌生人带东西，担心物品安全"],
    ],
    approach: [
      ["跑腿员实名认证", "每位入驻跑腿员都需通过身份认证"],
      ["服务内容明确", "下单时填写取件地址、送达地址和物品信息"],
      ["过程可追踪", "App 内可查看跑腿进度，心里有底"],
      ["订单留档反馈", "订单在平台留档，如有问题可通过平台反馈"],
    ],
    steps: [
      ["下单", "填取件地址、送达地址、物品信息"],
      ["匹配跑腿员", "系统就近匹配可接单的跑腿员"],
      ["实时追踪", "可在 App 内查看进度"],
      ["送达确认", "送达后通过平台完成付款"],
    ],
    mechanisms: [
      ["身份认证", "跑腿员需通过身份认证后方可接单"],
      ["位置追踪", "App 内可查看跑腿进度，随时知道进展"],
      ["订单留档", "订单在平台保存，方便查询"],
      ["评价体系", "服务后可评价，帮助其他用户参考"],
      ["反馈渠道", "如遇问题可通过平台反馈"],
      ["隐私保护", "跑腿员不外传你的地址和个人信息"],
    ],
    faqs: [
      ["多久能送达？", "送达时间取决于距离和路况，下单时系统会显示预估时间。"],
      ["贵重物品可以送吗？", "建议你在下单前与服务方沟通确认，并评估物品价值。如有特殊需求，可在下单时备注。"],
      ["物品损坏怎么办？", "如遇物品损坏问题，可通过平台反馈。平台会协助沟通处理。所有订单在平台留档。"],
      ["晚上可以接单吗？", "具体接单时段以 App 内显示为准。"],
      ["可以帮忙排队吗？", "可以。下单时填写具体排队需求即可。具体计费方式以 App 内显示为准。"],
      ["怎么付款？", "通过 App 内在线支付。具体支付方式以 App 内显示为准。"],
      ["跑腿员会拆开我的东西吗？", "不会。跑腿员只负责运输。如发现物品被拆封，可立即通过平台投诉。"],
    ],
  },
  market: {
    value: "本地二手交易平台，卖家实名认证、支持当面验货、评价体系透明",
    pains: [
      ["闲置的东西扔了可惜", "买的时候花了钱，现在用不着了，处理起来很麻烦"],
      ["怕遇到骗子", "网上交易怕被骗，收到假货、收不到货"],
      ["怕买到假货", "看到便宜的二手商品，又怕是假货、翻新货"],
      ["处理起来麻烦", "拍照、写描述、约见面、讨价还价，太耗时间"],
    ],
    approach: [
      ["卖家实名认证", "每位发布商品的卖家都需通过实名认证"],
      ["支持当面验货", "同城交易可约见面，看到实物满意再决定"],
      ["评价积累信用", "每次交易后互相评价，信用记录透明"],
      ["反馈协助处理", "如遇纠纷，可通过平台反馈，协助沟通处理"],
    ],
    steps: [
      ["拍照上传", "拍摄商品照片，填写描述、价格和区域"],
      ["实名认证", "完成实名认证后发布商品"],
      ["买家联系", "买家私聊或约见，同城当面交易"],
      ["成交评价", "交易完成后互相评价，积累信用"],
    ],
    mechanisms: [
      ["实名认证", "卖家需完成实名认证后才能发布商品"],
      ["信用记录", "交易后互相评价，积累信用分"],
      ["当面交易", "支持当面验货，看到实物再决定"],
      ["防骗机制", "实名认证 + 评价机制，双重防骗"],
      ["反馈渠道", "交易纠纷可通过平台反馈协助处理"],
      ["违规处理", "违规商品会被下架，严重者封号"],
    ],
    faqs: [
      ["平台收费吗？", "发布免费。具体费用以 App 内显示为准。"],
      ["可以邮寄吗？", "支持。同城当面交易和跨城邮寄都可根据双方协商进行。建议通过平台内渠道沟通，保留记录。"],
      ["怎么防骗？", "平台要求卖家实名认证，同时提供评价机制。交易前建议先沟通、验货，谨慎付款。如有疑问可联系客服。"],
      ["违规商品怎么处理？", "如发现违规商品，可以通过平台举报。平台会核实后下架商品，严重者封号。"],
      ["卖家不发货怎么办？", "如遇此类问题，可通过平台反馈，我们会协助沟通处理。建议通过平台内渠道沟通，保留记录。"],
      ["怎么付款？", "具体交易方式由买卖双方协商。建议通过平台内渠道沟通，保留记录。"],
      ["信用分怎么算？", "每次交易后互相评价。好评加分，差评减分。信用分反映卖家的交易信誉。"],
    ],
  },
  jobs: {
    value: "本地零工招聘平台，雇主实名认证、岗位信息清晰、沟通记录留档",
    pains: [
      ["找零工要靠熟人", "没熟人介绍，就接不到活，收入不稳定"],
      ["怕拖欠工资", "干完活拖半个月，催了又催，很麻烦"],
      ["怕中介抽成", "中介费抽走一大截，到手工钱少很多"],
      ["怕工作内容不符", "说好的工作，去了发现完全不一样"],
    ],
    approach: [
      ["雇主实名认证", "每位发布岗位的雇主都需通过身份认证"],
      ["岗位信息清晰", "工作内容、薪资、时长、地点需明确写明"],
      ["沟通记录留档", "平台内沟通记录保存，作为凭证"],
      ["反馈协助处理", "如遇纠纷，可通过平台反馈，协助沟通处理"],
    ],
    steps: [
      ["找工作", "浏览岗位，按类型、区域、薪资筛选"],
      ["投递或联系", "一键投递，或主动私聊雇主了解更多"],
      ["沟通确认", "与雇主沟通岗位细节，双方确认后上岗"],
      ["完成评价", "完工后互相评价，积累信用记录"],
    ],
    mechanisms: [
      ["身份认证", "雇主需完成认证后方可发布岗位"],
      ["信息清晰", "岗位内容、薪资、时长需明确写明"],
      ["沟通留档", "平台内沟通记录保存，方便查询"],
      ["评价体系", "完工后互相评价，积累信用记录"],
      ["反馈渠道", "如遇问题可通过平台反馈"],
      ["违规处理", "虚假岗位、拖欠工资等行为，核实后封号"],
    ],
    faqs: [
      ["要交中介费吗？", "平台对求职者免费。具体以 App 内显示为准。"],
      ["工资有保障吗？", "平台鼓励通过平台内沟通并保留记录。如遇问题，可通过平台反馈，我们会协助沟通处理。"],
      ["可以兼职吗？", "可以。平台上有日结、小时工、周末工、夜班等多种岗位。"],
      ["需要什么资料？", "求职者需完成实名认证。如持有相关技能证书，上传后有助于展示你的能力。"],
      ["怎么找长期工作？", "平台主要面向短期零工。具体岗位类型以 App 内显示为准。"],
      ["怎么付款？", "具体结算方式由雇主与求职者协商。建议通过平台内渠道沟通，保留记录。"],
      ["雇主要求线下付款怎么办？", "建议坚持通过平台内渠道沟通和结算，保留记录作为凭证。如有疑问可联系客服。"],
    ],
  },
};

const L = {
  zh: { back: "返回", painTitle: "你可能也遇到过", approachTitle: "VGO 怎么做", overview: "服务包含", flowTitle: "服务流程", mechTitle: "平台机制", faqTitle: "常见问题", cta: "立即预约", all: "全部服务" },
  en: { back: "Back", painTitle: "Sound Familiar?", approachTitle: "How VGO Helps", overview: "What's Included", flowTitle: "Service Flow", mechTitle: "Platform Mechanism", faqTitle: "FAQ", cta: "Book Now", all: "All Services" },
  ms: { back: "Kembali", painTitle: "Pernah Alami?", approachTitle: "Cara VGO Bantu", overview: "Apa Termasuk", flowTitle: "Aliran Servis", mechTitle: "Mekanisme Platform", faqTitle: "Soalan Lazim", cta: "Tempah Sekarang", all: "Semua Servis" },
};

export default function ServiceDetailPage({ id }: { id: ServiceId }) {
  const { lang } = useLang();
  const t = L[lang];
  const data = SERVICES[lang];
  const item = data.items.find((x) => x.id === id) as ServiceItem;
  const d = DETAIL[id];
  const Icon = ICONS[item.icon] || Wrench;

  return (
    <main className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* 1. Hero */}
      <section className="relative min-h-[60svh] flex items-center justify-center px-5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center kenburns" style={{ backgroundImage: `url('${item.image}')` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-gray-950" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center pt-24">
          <Link href="/#features" className="absolute left-0 top-0 inline-flex items-center gap-1 text-white/60 hover:text-white text-xs"><ArrowLeft size={14} /> {t.back}</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-semibold mb-6">
            <Icon size={14} /> {item.title}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">{item.tagline}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed">{d.value}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#book" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-black shadow-[0_10px_40px_-6px_rgba(255,150,0,0.65)] hover:scale-[1.03] active:scale-95 transition-all">{t.cta}</a>
            <Link href="/#features" className="text-xs text-white/60 hover:text-white transition">{t.all} →</Link>
          </motion.div>
        </div>
      </section>

      {/* 2. 客户痛点 */}
      <section className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl font-black text-center mb-10">{t.painTitle}</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {d.pains.map(([title, desc], i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
              <div className="flex items-start gap-3 mb-2">
                <XCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                <h3 className="text-base font-black text-white">{title}</h3>
              </div>
              <p className="text-sm text-white/55 leading-relaxed pl-7">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. VGO 怎么做 */}
      <section className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl font-black text-center mb-10">{t.approachTitle}</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {d.approach.map(([title, desc], i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
              <div className="flex items-start gap-3 mb-2">
                <Check size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <h3 className="text-base font-black text-white">{title}</h3>
              </div>
              <p className="text-sm text-white/55 leading-relaxed pl-7">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. 服务包含 */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl font-black text-center mb-10">{t.overview}</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {item.canDo.map((x, i) => (
            <motion.div key={x} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
              <Check size={16} className="text-[var(--vgo)] shrink-0 mt-0.5" /><span className="text-sm text-white/80">{x}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. 服务流程 */}
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl font-black text-center mb-10">{t.flowTitle}</motion.h2>
        <div className="space-y-4">
          {d.steps.map(([title, desc], i) => (
            <motion.div key={title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5 items-start p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="shrink-0 w-11 h-11 rounded-2xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center font-black text-base">{i + 1}</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-black text-white mb-1">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. 平台机制 */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl font-black text-center mb-10">{t.mechTitle}</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {d.mechanisms.map(([title, desc], i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck size={16} className="text-[var(--vgo)]" />
                <h3 className="text-sm font-black text-white">{title}</h3>
              </div>
              <p className="text-xs text-white/55 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl font-black text-center mb-10">{t.faqTitle}</motion.h2>
        <div className="space-y-3">
          {d.faqs.map(([q, a], i) => (
            <motion.div key={q} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}>
              <details className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                <summary className="cursor-pointer p-5 flex items-center justify-between gap-4 font-bold text-sm text-white hover:bg-white/5 transition list-none">
                  <span>{q}</span>
                  <span className="text-[var(--vgo)] group-open:rotate-45 transition-transform text-xl leading-none shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-white/60 leading-[1.8]">{a}</div>
              </details>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. 底部 CTA */}
      <section id="book" className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-16 pb-32">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-[#FF8A1F] to-[#D95000] p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,255,255,.25), transparent 70%)' }} />
          <div className="relative">
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-4">准备好了吗？</h2>
            <p className="text-sm text-white/85 mb-8 max-w-md mx-auto">{d.value}</p>
            <a href="#download" className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-white text-[#D95000] font-black text-base shadow-2xl hover:scale-105 active:scale-95 transition-all">
              {t.cta} <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
