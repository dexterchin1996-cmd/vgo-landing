"use client";
/**
 * Copyright (c) 2026 Ventus Reflexology. All Rights Reserved.
 * 服务详情页 —— 8 屏专业详情
 */
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowLeft, Check, Star, Clock, ShieldCheck, BadgeCheck,
  Wrench, Sparkles, Heart, Truck, ShoppingBag, Briefcase,
  Phone, MapPin, TrendingUp, Users, type LucideIcon,
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import { SERVICES, type ServiceItem } from "@/data/services";

const ICONS: Record<string, LucideIcon> = {
  Wrench, Sparkles, Heart, Truck, ShoppingBag, Briefcase,
};

type ServiceId = "repair" | "clean" | "massage" | "errand" | "market" | "jobs";

// 每个服务的价格 + 流程 + FAQ（数据里没有，先硬编码，后续接后端）
const EXTRA: Record<ServiceId, {
  priceFrom: string;
  priceTo: string;
  duration: string;
  steps: [string, string][];
  faqs: [string, string][];
}> = {
  repair: {
    priceFrom: "RM 60", priceTo: "RM 800", duration: "30-120 分钟",
    steps: [
      ["提交需求", "拍照描述问题，选时间和地址"],
      ["智能匹配", "就近派单，30 分钟内师傅接单"],
      ["上门维修", "师傅到达，先报价后动手"],
      ["完工验收", "验收满意，平台担保付款"],
    ],
    faqs: [
      ["师傅上门要收费吗？", "首次上门检查免费，如无维修需求不收费。具体维修费师傅会提前报价。"],
      ["维修有质保吗？", "标准服务享有 90 天质保。非标准服务按师傅报价条款执行。"],
      ["价格怎么算？", "标准服务按平台定价表执行；其他情况师傅会先报价，你确认后才动手。"],
      ["紧急情况多久到？", "紧急服务 30 分钟内响应，平均到达时间 45 分钟。"],
    ],
  },
  clean: {
    priceFrom: "RM 80", priceTo: "RM 500", duration: "2-6 小时",
    steps: [
      ["选清洁类型", "日常保洁 / 深度清洁 / 开荒清洁"],
      ["预约时间", "选日期、时长、地址"],
      ["保洁上门", "自带工具和清洁剂，按时到达"],
      ["验收评分", "验收满意后付款评分"],
    ],
    faqs: [
      ["清洁用品要自备吗？", "不需要，保洁员自带全部工具和清洁剂。"],
      ["清洁不满意怎么办？", "48 小时内可要求免费返工，或申请部分退款。"],
      ["可以指定保洁员吗？", "可以，多次服务后可优先预约同一保洁员。"],
      ["宠物家庭可以吗？", "可以，但请提前告知，保洁员会注意宠物安全。"],
    ],
  },
  massage: {
    priceFrom: "RM 120", priceTo: "RM 400", duration: "60-120 分钟",
    steps: [
      ["选按摩类型", "推拿 / 泰式 / SPA / 足疗"],
      ["预约时间", "选日期、时长、上门地址"],
      ["按摩师上门", "自带按摩器材和用品"],
      ["享受服务", "服务完成后评价"],
    ],
    faqs: [
      ["按摩师有证吗？", "所有按摩师持证上岗，实名认证 + 证件审核。"],
      ["隐私怎么保障？", "按摩师签保密协议，服务全程隐私严格保护。"],
      ["需要自备什么？", "不需要，按摩师自带按摩床、精油、毛巾等。"],
      ["可以加时吗？", "可以，服务中可加时，按每 15 分钟计费。"],
    ],
  },
  errand: {
    priceFrom: "RM 8", priceTo: "RM 60", duration: "30-90 分钟",
    steps: [
      ["下单", "填取件地址、送达地址、物品信息"],
      ["智能派单", "就近派单，30 秒内有跑腿员接单"],
      ["实时追踪", "全程可看位置和进度"],
      ["送达确认", "送达后拍照确认，你付款"],
    ],
    faqs: [
      ["多久能送达？", "同城平均 30-60 分钟，视距离而定。"],
      ["贵重物品可以送吗？", "可以，但建议选择平台保险服务（小额加费）。"],
      ["物品损坏怎么办？", "非人为损坏由平台承担，最高赔付 RM 500。"],
      ["晚上可以接单吗？", "7×24 小时接单，深夜加收 30% 服务费。"],
    ],
  },
  market: {
    priceFrom: "免费发布", priceTo: "成交抽成 3%", duration: "当面交易",
    steps: [
      ["拍照上传", "拍商品照片，写描述和价格"],
      ["实名认证", "完成实名认证才能发布"],
      ["买家联系", "买家私聊或约见，同城当面交易"],
      ["成交评价", "交易完成互相评价"],
    ],
    faqs: [
      ["平台收费吗？", "发布免费，成交后按 3% 抽成（仅担保交易）。"],
      ["可以邮寄吗？", "支持，但同城当面交易更安全。"],
      ["怎么防骗？", "实名认证 + 平台担保 + 信用评价，三重保障。"],
      ["违规商品怎么处理？", "违规商品下架，严重者封号，货款原路退回。"],
    ],
  },
  jobs: {
    priceFrom: "免费", priceTo: "日结 / 周结", duration: "按项目",
    steps: [
      ["找工作", "浏览岗位，筛选类型和薪资"],
      ["投递简历", "一键投递，或主动私聊老板"],
      ["面试上岗", "线上沟通或线下见面，确认后上岗"],
      ["完工结算", "按约定日结/周结，平台担保"],
    ],
    faqs: [
      ["要交中介费吗？", "平台零中介费，免费找工作。"],
      ["工资有保障吗？", "平台担保工资，雇主不付可申诉。"],
      ["可以兼职吗？", "可以，日结、小时工、周末工都有。"],
      ["什么工作最多？", "装修、搬运、清洁、餐饮帮厨、促销最多。"],
    ],
  },
};

const L = {
  zh: { back: "返回", overview: "能做什么", scenes: "适用场景", flow: "服务流程", price: "价格参考", reviews: "用户评价", faq: "常见问题", cta: "立即预约", trust1: "认证师傅", trust2: "平台质保", trust3: "先看价再下单", from: "起步价", duration: "平均时长", all: "全部服务" },
  en: { back: "Back", overview: "What's included", scenes: "Common situations", flow: "How it works", price: "Price Guide", reviews: "Reviews", faq: "FAQ", cta: "Book Now", trust1: "Certified", trust2: "Warranty", trust3: "See price first", from: "From", duration: "Avg. duration", all: "All services" },
  ms: { back: "Kembali", overview: "Apa Termasuk", scenes: "Situasi Lazim", flow: "Cara Berfungsi", price: "Panduan Harga", reviews: "Ulasan", faq: "Soalan Lazim", cta: "Tempah Sekarang", trust1: "Bertauliah", trust2: "Jaminan", trust3: "Lihat harga dulu", from: "Dari", duration: "Tempoh purata", all: "Semua servis" },
};

export default function ServiceDetailPage({ id }: { id: ServiceId }) {
  const { lang } = useLang();
  const t = L[lang];
  const data = SERVICES[lang];
  const item = data.items.find((x) => x.id === id) as ServiceItem;
  const extra = EXTRA[id];
  const Icon = ICONS[item.icon] || Wrench;

  return (
    <main className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* 1. Hero */}
      <section className="relative min-h-[70svh] flex items-center justify-center px-5 overflow-hidden">
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 flex items-center justify-center gap-4 sm:gap-8 text-sm">
            <div><div className="text-2xl font-black text-[var(--vgo)]">{extra.priceFrom}</div><div className="text-[10px] text-white/50 uppercase tracking-wider mt-0.5">{t.from}</div></div>
            <div className="w-px h-10 bg-white/15" />
            <div><div className="text-2xl font-black text-white">{extra.duration}</div><div className="text-[10px] text-white/50 uppercase tracking-wider mt-0.5">{t.duration}</div></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#book" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-black shadow-[0_10px_40px_-6px_rgba(255,150,0,0.65)] hover:scale-[1.03] active:scale-95 transition-all">{t.cta}</a>
            <Link href="/#features" className="text-xs text-white/60 hover:text-white transition">{t.all} →</Link>
          </motion.div>
        </div>
      </section>

      {/* 2. 三个信任点 */}
      <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 -mt-12">
        <div className="grid grid-cols-3 gap-3">
          {[{ I: BadgeCheck, x: t.trust1 }, { I: ShieldCheck, x: t.trust2 }, { I: Clock, x: t.trust3 }].map(({ I, x }) => (
            <motion.div key={x} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 text-center">
              <div className="w-9 h-9 mx-auto rounded-xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center mb-2"><I size={18} color="#fff" /></div>
              <div className="text-xs font-bold text-white">{x}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. 能做什么 */}
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

      {/* 4. 适用场景 */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl font-black text-center mb-10">{t.scenes}</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {item.scenarios.map((x, i) => (
            <motion.div key={x} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-500/10 to-orange-600/5 border border-amber-500/25 p-6">
              <div className="text-3xl font-black text-[var(--vgo)]/40 mb-2">0{i + 1}</div>
              <div className="text-base font-black text-white">{x}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. 服务流程 */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl font-black text-center mb-10">{t.flow}</motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {extra.steps.map(([title, desc], i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 text-center">
              <div className="text-4xl font-black bg-gradient-to-b from-[#FFD24A] to-[#FF8A00] bg-clip-text text-transparent leading-none mb-4">0{i + 1}</div>
              <div className="font-black text-sm mb-1.5 text-white">{title}</div>
              <div className="text-[11px] text-white/50 leading-relaxed">{desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. 价格参考 */}
      <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl font-black text-center mb-10">{t.price}</motion.h2>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-[#FFB800]/10 to-[#FF6600]/5 border border-[#FFB800]/25 p-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div>
              <div className="text-[10px] text-white/50 uppercase tracking-widest mb-1">{t.from}</div>
              <div className="text-3xl sm:text-4xl font-black text-[var(--vgo)]">{extra.priceFrom}</div>
            </div>
            <div className="hidden sm:block w-px h-14 bg-white/10" />
            <div>
              <div className="text-[10px] text-white/50 uppercase tracking-widest mb-1">{t.duration}</div>
              <div className="text-3xl sm:text-4xl font-black text-white">{extra.duration}</div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/50">
            <TrendingUp size={14} /> {extra.priceFrom} - {extra.priceTo}
          </div>
        </motion.div>
      </section>

      {/* 7. 用户评价 */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl font-black text-center mb-10">{t.reviews}</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { name: "陈女士", text: "师傅很专业，提前到了，价格也透明。修好了才付款，很放心。", stars: 5 },
            { name: "林先生", text: "下单 30 分钟就有人接单，服务完还有质保，比找熟人靠谱。", stars: 5 },
            { name: "黄小姐", text: "平台有客服跟进，处理问题很快。以后家里有事都用这个。", stars: 5 },
          ].map((r, i) => (
            <motion.div key={r.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="flex items-center gap-1 mb-4 text-[#FFB800]">
                {Array.from({ length: r.stars }).map((_, j) => <Star key={j} size={14} strokeWidth={0} fill="#FFB800" />)}
              </div>
              <p className="text-sm text-white/75 leading-relaxed mb-5">"{r.text}"</p>
              <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center text-xs font-black">{r.name[0]}</div>
                <div className="text-sm font-black text-white">{r.name}</div>
                <BadgeCheck size={13} className="text-[var(--vgo)] ml-auto" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl font-black text-center mb-10">{t.faq}</motion.h2>
        <div className="space-y-3">
          {extra.faqs.map(([q, a], i) => (
            <motion.div key={q} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}>
              <details className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                <summary className="cursor-pointer p-5 flex items-center justify-between font-bold text-sm text-white hover:bg-white/5 transition list-none">
                  {q}
                  <span className="text-[var(--vgo)] group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-white/60 leading-relaxed">{a}</div>
              </details>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 9. 底部 CTA */}
      <section id="book" className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-16 pb-32">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-[#FF8A1F] to-[#D95000] p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,255,255,.25), transparent 70%)' }} />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur border border-white/30 text-xs font-bold mb-5">
              <Clock size={12} /> 30 秒响应
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-4">准备好体验了吗？</h2>
            <p className="text-sm text-white/85 mb-8 max-w-md mx-auto">{item.tagline}</p>
            <a href="#download" className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-white text-[#D95000] font-black text-base shadow-2xl hover:scale-105 active:scale-95 transition-all">
              {t.cta} <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
