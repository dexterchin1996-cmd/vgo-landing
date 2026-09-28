"use client";
import { motion } from "motion/react";
import { BadgeCheck, Wallet, ShieldCheck } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function AboutVGO() {
  const { t } = useLang();
  const CARDS = [
    { Icon: BadgeCheck,  title: t("about_vgo_c1_t"), desc: t("about_vgo_c1_d") },
    { Icon: Wallet,      title: t("about_vgo_c2_t"), desc: t("about_vgo_c2_d") },
    { Icon: ShieldCheck, title: t("about_vgo_c3_t"), desc: t("about_vgo_c3_d") },
  ];
  const STATS = [
    { n: t("about_vgo_s1_n"), l: t("about_vgo_s1_l") },
    { n: t("about_vgo_s2_n"), l: t("about_vgo_s2_l") },
    { n: t("about_vgo_s3_n"), l: t("about_vgo_s3_l") },
    { n: t("about_vgo_s4_n"), l: t("about_vgo_s4_l") },
  ];
  return (
    <section id="about-vgo" className="relative bg-white py-20 sm:py-28 px-5 overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-10 right-1/4 w-96 h-96 bg-[var(--vgo)]/10 rounded-full blur-[110px]" />
      </div>
      <div className="relative max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <p className="text-[var(--vgo)] font-bold text-sm tracking-widest uppercase mb-3">{t("about_vgo_label")}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">{t("about_vgo_title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">{t("about_vgo_desc")}</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {CARDS.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-4">
                <c.Icon size={26} strokeWidth={2} className="text-[var(--vgo)]" />
              </div>
              <h3 className="font-black text-lg text-gray-900 mb-2">{c.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div key={s.l} className="text-center p-5 rounded-3xl bg-gradient-to-br from-orange-50 to-white border border-orange-100">
              <div className="text-3xl sm:text-4xl font-black text-[var(--vgo)] mb-1">{s.n}</div>
              <div className="text-xs sm:text-sm text-gray-600 font-semibold">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}