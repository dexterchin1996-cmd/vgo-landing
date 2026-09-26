"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft, TrendingUp, MapPin, Target, Globe, Mail, MessageCircle, Sparkles } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function PartnerPage() {
  const { t } = useLang();

  const WHY = [
    { Icon: TrendingUp, title: t("partner_why_1_title"), desc: t("partner_why_1_desc") },
    { Icon: MapPin,     title: t("partner_why_2_title"), desc: t("partner_why_2_desc") },
    { Icon: Target,     title: t("partner_why_3_title"), desc: t("partner_why_3_desc") },
    { Icon: Globe,      title: t("partner_why_4_title"), desc: t("partner_why_4_desc") },
  ];

  const TRACTION = [
    { num: "30+",  label: t("partner_traction_1") },
    { num: "4.9",  label: t("partner_traction_2") },
    { num: "12K+", label: t("partner_traction_3") },
    { num: "全马", label: t("partner_traction_4") },
  ];

  return (
    <main className="relative min-h-screen bg-gray-950 text-white noise overflow-hidden">
      {/* 顶部光斑 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora absolute top-0 left-1/4 w-[600px] h-[300px] rounded-full bg-[#FFB800] blur-[160px] opacity-20" />
        <div className="aurora-2 absolute bottom-0 right-1/4 w-[500px] h-[250px] rounded-full bg-[#FF6600] blur-[140px] opacity-15" />
      </div>

      {/* 返回 */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition">
          <ArrowLeft size={16} />
          <span>VGO</span>
        </Link>
      </div>

      {/* Hero */}
      <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 pt-12 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs sm:text-sm font-semibold mb-6"
        >
          <Sparkles size={14} className="text-[#FFB800]" />
          {t("partner_label")}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black leading-[1.1] tracking-tight"
        >
          <span className="bg-gradient-to-b from-[#FFD24A] via-[#FF9500] to-[#E55A00] bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(255,180,0,0.4)]">
            {t("partner_title")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
        >
          {t("partner_intro")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="mailto:jason52013141018@gmail.com"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-bold text-base shadow-[0_10px_40px_-6px_rgba(255,150,0,0.65),inset_0_1px_0_rgba(255,255,255,0.4)] hover:shadow-[0_16px_50px_-6px_rgba(255,150,0,0.9)] hover:scale-[1.03] active:scale-95 transition-all"
          >
            <Mail size={18} />
            <span>{t("partner_contact_email")}</span>
          </a>
          <a
            href="https://wa.me/601172691788"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/25 text-white font-bold text-base hover:bg-white/20 hover:border-white/40 active:scale-95 transition-all"
          >
            <MessageCircle size={18} />
            <span>{t("partner_contact_whatsapp")}</span>
          </a>
        </motion.div>
      </section>

      {/* 为什么 VGO */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-4xl font-black text-center mb-12"
        >
          {t("partner_why_title")}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {WHY.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-7 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#FFB800]/40 hover:bg-white/8 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30">
                <w.Icon size={22} strokeWidth={2.2} className="text-white" />
              </div>
              <h3 className="text-lg font-black mb-2">{w.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 已有基础 */}
      <section className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-4xl font-black text-center mb-10"
        >
          {t("partner_traction_title")}
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {TRACTION.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-center"
            >
              <div className="text-2xl sm:text-4xl font-black bg-gradient-to-b from-[#FFD24A] to-[#FF8A00] bg-clip-text text-transparent leading-tight">
                {s.num}
              </div>
              <div className="text-[11px] sm:text-xs text-white/60 mt-1.5">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-10 sm:p-14 rounded-[32px] bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl border border-white/15"
        >
          <h2 className="text-2xl sm:text-4xl font-black mb-4">{t("partner_cta_title")}</h2>
          <p className="text-sm sm:text-base text-white/65 mb-8 max-w-lg mx-auto leading-relaxed">
            {t("partner_cta_desc")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:jason52013141018@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-bold shadow-[0_10px_40px_-6px_rgba(255,150,0,0.65)] hover:scale-[1.03] active:scale-95 transition-all"
            >
              <Mail size={18} />
              {t("partner_contact_email")}
            </a>
            <a
              href="https://wa.me/601172691788"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/25 text-white font-bold hover:bg-white/20 active:scale-95 transition-all"
            >
              <MessageCircle size={18} />
              {t("partner_contact_whatsapp")}
            </a>
          </div>

          <p className="mt-7 text-xs text-white/40">{t("partner_footer_note")}</p>
        </motion.div>
      </section>

      {/* 底部信息 */}
      <div className="relative z-10 border-t border-white/10 py-8 text-center text-xs text-white/40">
        <div>jason52013141018@gmail.com</div>
        <div className="mt-1">+60 11-7269 1788 · Kota Kinabalu, Sabah</div>
        <div className="mt-3">© 2026 VGO (V Go On). All Rights Reserved.</div>
      </div>
    </main>
  );
}
