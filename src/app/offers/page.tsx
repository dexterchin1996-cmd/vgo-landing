"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Gift, Store, Wrench, User, Check, Clock, Shield, TrendingUp, Sparkles } from "lucide-react";
import Link from "next/link";
import { OFFERS as L } from "@/data/offers";

type Tab = "customer" | "merchant" | "tech";
type LangKey = "zh" | "en" | "ms";

const HOW_STEPS = {
  zh: [
    { n: "01", t: "注册账号", d: "下载 App，用手机号注册，完成实名认证" },
    { n: "02", t: "领取福利", d: "进入「我的福利」页面，点击对应按钮领取" },
    { n: "03", t: "下单使用", d: "下单时自动抵扣或生效，无需输入优惠码" },
  ],
  en: [
    { n: "01", t: "Sign Up", d: "Download the app, register with your phone, complete verification" },
    { n: "02", t: "Claim Offer", d: "Go to \"My Offers\", tap the claim button" },
    { n: "03", t: "Auto Apply", d: "Applied automatically at checkout — no promo code needed" },
  ],
  ms: [
    { n: "01", t: "Daftar", d: "Muat turun app, daftar dengan nombor telefon, sahkan identiti" },
    { n: "02", t: "Tuntut", d: "Pergi ke \"Tawaran Saya\", ketik butang tuntut" },
    { n: "03", t: "Guna Automatik", d: "Digunakan secara automatik semasa checkout — tiada kod promosi" },
  ],
};

const RULES = {
  zh: [
    "每个账号仅限领取一次",
    "福利限首批用户/商家/师傅，领完即止",
    "不得与其他活动叠加使用",
    "平台保留活动最终解释权",
    "如有作弊行为，平台有权取消资格",
  ],
  en: [
    "One claim per account",
    "Limited to the first batch of users/merchants/technicians — while stocks last",
    "Cannot be combined with other promotions",
    "Platform reserves the right of final interpretation",
    "Cheating will result in disqualification",
  ],
  ms: [
    "Satu tuntutan per akaun",
    "Terhad kepada kelompok pertama pengguna/peniaga/juruteknik — selagi stok ada",
    "Tidak boleh digabung dengan promosi lain",
    "Platform berhak tafsir akhir",
    "Penipuan akan menyebabkan ketidaklayakan",
  ],
};

const LABELS = {
  zh: { how_t: "如何领取", how_sub: "3 步搞定", rule_t: "活动规则", rule_sub: "请仔细阅读", note_t: "温馨提示" },
  en: { how_t: "How to Claim", how_sub: "3 Simple Steps", rule_t: "Terms & Rules", rule_sub: "Please read carefully", note_t: "Important" },
  ms: { how_t: "Cara Menuntut", how_sub: "3 Langkah Mudah", rule_t: "Terma & Peraturan", rule_sub: "Sila baca dengan teliti", note_t: "Penting" },
};

export default function OffersPage() {
  const [tab, setTab] = useState<Tab>("customer");
  const [lang, setLang] = useState<LangKey>("zh");
  const t = L[lang];
  const labels = LABELS[lang];
  const howSteps = HOW_STEPS[lang];
  const rules = RULES[lang];

  const TABS = [
    { id: "customer" as Tab, label: t.tab_customer, Icon: User },
    { id: "merchant" as Tab, label: t.tab_merchant, Icon: Store },
    { id: "tech" as Tab, label: t.tab_tech, Icon: Wrench },
  ];

  const cur = tab === "customer"
    ? { title: t.customer_title, desc: t.customer_desc, pts: t.customer_p, color: "from-orange-500 to-amber-600", accent: "#FF6600" }
    : tab === "merchant"
    ? { title: t.merchant_title, desc: t.merchant_desc, pts: t.merchant_p, color: "from-emerald-500 to-teal-600", accent: "#059669" }
    : { title: t.tech_title, desc: t.tech_desc, pts: t.tech_p, color: "from-blue-500 to-indigo-600", accent: "#2563EB" };

  return (
    <main className="relative min-h-screen bg-gray-950 text-white noise overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora absolute top-0 left-1/4 w-[600px] h-[300px] rounded-full bg-[#FFB800] blur-[160px] opacity-20" />
        <div className="aurora-2 absolute bottom-0 right-1/4 w-[500px] h-[250px] rounded-full bg-[#FF6600] blur-[140px] opacity-15" />
      </div>

      {/* 顶部返回 */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 pt-8 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition">
          <ArrowLeft size={16} /><span>V'GO</span>
        </Link>
        <div className="flex gap-2">
          {(["zh", "en", "ms"] as LangKey[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`text-xs font-bold px-3 py-1.5 rounded-full transition ${
                lang === l ? "bg-[var(--vgo)] text-white" : "bg-white/10 text-white/60 hover:bg-white/20"
              }`}
            >
              {l === "zh" ? "中" : l === "en" ? "EN" : "BM"}
            </button>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 pt-12 pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-semibold mb-6"
        >
          <Gift size={14} className="text-[#FFB800]" />
          {t.label}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black leading-tight tracking-tight"
        >
          <span className="bg-gradient-to-b from-[#FFD24A] via-[#FF9500] to-[#E55A00] bg-clip-text text-transparent">
            {t.title}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-4 text-sm sm:text-base text-white/60"
        >
          {t.sub}
        </motion.p>
      </section>

      {/* Tabs */}
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8">
        <div className="flex justify-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-1.5">
          {TABS.map((tb) => (
            <button
              key={tb.id}
              onClick={() => setTab(tb.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-[transform,box-shadow,opacity,width,background-color] ${
                tab === tb.id
                  ? "bg-gradient-to-b from-[var(--vgo)] to-[var(--vgo-dark)] text-white shadow-lg shadow-orange-500/30"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <tb.Icon size={16} strokeWidth={2.4} />
              {tb.label}
            </button>
          ))}
        </div>
      </section>

      {/* 优惠内容 */}
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl overflow-hidden border border-white/10"
          >
            <div className={`bg-gradient-to-br ${cur.color} p-8 sm:p-10 relative overflow-hidden`}>
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,.25), transparent 70%)" }} />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 backdrop-blur text-[10px] font-black uppercase tracking-widest mb-4">
                  <Sparkles size={11} /> 限时
                </div>
                <h2 className="text-2xl sm:text-3xl font-black mb-3 text-white">{cur.title}</h2>
                <p className="text-sm sm:text-base text-white/90 mb-6">{cur.desc}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {cur.pts.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs sm:text-sm text-white/95">
                      <Check size={14} strokeWidth={3} className="shrink-0 mt-0.5" />{p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-6 border-t border-white/10">
              <a
                href="/#download"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-black hover:scale-[1.02] active:scale-95 transition-[transform,box-shadow,opacity,width,background-color] shadow-lg shadow-orange-500/40"
              >
                {t.cta}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 如何领取 */}
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-black mb-2">{labels.how_t}</h2>
          <p className="text-sm text-white/50">{labels.how_sub}</p>
        </motion.div>
        <div className="space-y-4">
          {howSteps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 items-start p-5 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center font-black text-lg">
                {s.n}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-black text-white mb-1">{s.t}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 活动规则 */}
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 rounded-3xl bg-amber-500/5 border border-amber-500/20"
        >
          <div className="flex items-center gap-2 mb-2">
            <Shield size={18} className="text-amber-400" />
            <h2 className="text-xl font-black text-white">{labels.rule_t}</h2>
          </div>
          <p className="text-xs text-white/40 mb-5">{labels.rule_sub}</p>
          <ul className="space-y-3">
            {rules.map((r, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/75">
                <span className="shrink-0 w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-black flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                {r}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* 提示 */}
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 pb-12">
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
          <Clock size={18} className="text-[var(--vgo)] shrink-0 mt-0.5" />
          <div>
            <div className="text-sm font-black text-white mb-1">{labels.note_t}</div>
            <p className="text-xs text-white/55 leading-relaxed">{t.note}</p>
          </div>
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-[#FF8A1F] to-[#D95000] p-8 sm:p-10 text-center relative overflow-hidden"
        >
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,.25), transparent 70%)" }} />
          <div className="relative">
            <TrendingUp size={28} className="text-white/90 mx-auto mb-4" />
            <h2 className="text-xl sm:text-2xl font-black text-white mb-3">名额有限，先到先得</h2>
            <p className="text-sm text-white/80 mb-6 max-w-md mx-auto">首批福利限时限量，领完为止</p>
            <a
              href="/#download"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-white text-[#D95000] font-black shadow-2xl hover:scale-105 active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]"
            >
              {t.cta} <ArrowLeft size={16} className="rotate-180" />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
