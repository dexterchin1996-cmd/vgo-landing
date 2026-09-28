"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Gift, Store, Wrench, User, Check } from "lucide-react";
import Link from "next/link";

const L = {
  zh: {
    label: "限时福利", title: "三大角色专属福利", sub: "注册即享 · 限首批 1000 名",
    tab_customer: "客户", tab_merchant: "商家", tab_tech: "师傅",
    cta: "立即注册领取", note: "福利不可叠加，最终解释权归 V'GO 所有",
    customer_title: "RM80 上门检查券", customer_desc: "注册即送，首次下单立减 RM80",
    customer_p: ["注册即到账","首单立减 RM80","全马通用","限首批 1000 名"],
    merchant_title: "前 2 个月 0% 佣金", merchant_desc: "入驻即享 2 个月免佣金，平台让利不出现金",
    merchant_p: ["0 元入驻","前 2 月 0 佣金","免费店铺页","限首批 100 名"],
    tech_title: "0% 佣金 + 创始徽章", tech_desc: "前 2 个月 0% 佣金，加创始师傅专属徽章",
    tech_p: ["前 2 月 0 佣金","创始师傅徽章","优先派单","限首批 100 名"],
  },
  en: {
    label: "Limited Offers", title: "Exclusive Offers for 3 Roles", sub: "Sign up now · First 1000 only",
    tab_customer: "Customer", tab_merchant: "Merchant", tab_tech: "Pro",
    cta: "Sign Up & Claim", note: "Offers not stackable. V'GO reserves final interpretation.",
    customer_title: "RM80 Home Inspection Voucher", customer_desc: "Get RM80 off your first order upon signup",
    customer_p: ["Instant on signup","RM80 off first order","Valid nationwide","First 1000 only"],
    merchant_title: "First 2 Months 0% Commission", merchant_desc: "Zero commission for 2 months after onboarding",
    merchant_p: ["Free onboarding","2 months 0%","Free store page","First 100 only"],
    tech_title: "0% Commission + Founder Badge", tech_desc: "Zero commission for 2 months + exclusive founder badge",
    tech_p: ["2 months 0%","Founder badge","Priority dispatch","First 100 only"],
  },
  ms: {
    label: "Tawaran Terhad", title: "Tawaran Eksklusif 3 Peranan", sub: "Daftar sekarang · 1000 terawal sahaja",
    tab_customer: "Pelanggan", tab_merchant: "Peniaga", tab_tech: "Pakar",
    cta: "Daftar & Tuntut", note: "Tawaran tidak boleh digabung. V'GO berhak tafsir akhir.",
    customer_title: "Baun Pemeriksaan RM80", customer_desc: "Dapat RM80 diskaun pesanan pertama selepas daftar",
    customer_p: ["Serta-merta selepas daftar","RM80 diskaun pesanan pertama","Sah seluruh negara","1000 terawal sahaja"],
    merchant_title: "2 Bulan Pertama 0% Komisen", merchant_desc: "Komisen sifar untuk 2 bulan pertama selepas daftar",
    merchant_p: ["Pendaftaran percuma","2 bulan 0%","Halaman kedai percuma","100 terawal sahaja"],
    tech_title: "0% Komisen + Lencana Pengasas", tech_desc: "Komisen sifar 2 bulan + lencana pengasas eksklusif",
    tech_p: ["2 bulan 0%","Lencana pengasas","Keutamaan tugas","100 terawal sahaja"],
  },
};

type Tab = "customer" | "merchant" | "tech";
type LangKey = "zh" | "en" | "ms";

export default function OffersPage() {
  const [tab, setTab] = useState<Tab>("customer");
  const [lang, setLang] = useState<LangKey>("zh");
  const t = L[lang];
  const TABS = [
    { id: "customer" as Tab, label: t.tab_customer, Icon: User },
    { id: "merchant" as Tab, label: t.tab_merchant, Icon: Store },
    { id: "tech" as Tab, label: t.tab_tech, Icon: Wrench },
  ];
  const cur = tab === "customer"
    ? { title: t.customer_title, desc: t.customer_desc, pts: t.customer_p }
    : tab === "merchant"
    ? { title: t.merchant_title, desc: t.merchant_desc, pts: t.merchant_p }
    : { title: t.tech_title, desc: t.tech_desc, pts: t.tech_p };
  return (
    <main className="relative min-h-screen bg-gray-950 text-white noise overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora absolute top-0 left-1/4 w-[600px] h-[300px] rounded-full bg-[#FFB800] blur-[160px] opacity-20" />
        <div className="aurora-2 absolute bottom-0 right-1/4 w-[500px] h-[250px] rounded-full bg-[#FF6600] blur-[140px] opacity-15" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition">
          <ArrowLeft size={16} /><span>V'GO</span>
        </Link>
      </div>
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 pt-12 pb-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-semibold mb-6">
          <Gift size={14} className="text-[#FFB800]" />{t.label}
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
          <span className="bg-gradient-to-b from-[#FFD24A] via-[#FF9500] to-[#E55A00] bg-clip-text text-transparent">{t.title}</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="mt-5 text-sm sm:text-base text-white/65 max-w-xl mx-auto">{t.sub}</motion.p>
      </section>
      <section className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {TABS.map((x) => (
            <button key={x.id} onClick={() => setTab(x.id)} className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-black text-sm transition-all ${tab === x.id ? "bg-gradient-to-b from-[#FFB33D] to-[#D95000] text-white shadow-lg shadow-orange-500/40" : "bg-white/8 border border-white/15 text-white/70 hover:bg-white/15"}`}>
              <x.Icon size={16} />{x.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="p-8 rounded-3xl bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl border border-white/15">
            <h3 className="text-2xl sm:text-3xl font-black mb-3 text-[#FFD24A]">{cur.title}</h3>
            <p className="text-sm sm:text-base text-white/65 leading-relaxed mb-6">{cur.desc}</p>
            <ul className="space-y-3 mb-8">
              {cur.pts.map((p, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span className="w-6 h-6 rounded-full bg-[#FFB800]/20 flex items-center justify-center shrink-0"><Check size={14} className="text-[#FFB800]" /></span>{p}
                </li>
              ))}
            </ul>
            <a href="#download" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-black shadow-lg shadow-orange-500/40 hover:scale-[1.02] active:scale-95 transition-all">{t.cta}</a>
          </motion.div>
        </AnimatePresence>
        <div className="mt-6 flex items-center justify-center gap-1 text-xs">
          {(["zh","en","ms"] as LangKey[]).map((l) => (
            <button key={l} onClick={() => setLang(l)} className={`px-2 py-0.5 rounded ${lang === l ? "text-[#FFB800] font-black" : "text-white/40"}`}>{l.toUpperCase()}</button>
          ))}
        </div>
        <p className="mt-4 text-xs text-white/40 text-center">{t.note}</p>
      </section>
      <div className="relative z-10 h-20" />
    </main>
  );
}
