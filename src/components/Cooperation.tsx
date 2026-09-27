"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Store, Wrench, Crown, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function Cooperation() {
  const { t } = useLang();
  const ITEMS = [
    { Icon: Store,  tKey: "coop_merchant_t", dKey: "coop_merchant_d", cKey: "coop_merchant_cta" },
    { Icon: Wrench, tKey: "coop_tech_t",     dKey: "coop_tech_d",     cKey: "coop_tech_cta" },
    { Icon: Crown,  tKey: "coop_agent_t",    dKey: "coop_agent_d",    cKey: "coop_agent_cta" },
  ];
  return (
    <section id="cooperation" className="relative bg-white py-20 sm:py-28 px-5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 -right-20 w-[400px] h-[400px] rounded-full bg-orange-100 opacity-30 blur-[120px]" />
        <div className="absolute bottom-10 -left-20 w-[400px] h-[400px] rounded-full bg-amber-100 opacity-30 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[var(--vgo)] font-black text-xs tracking-[0.25em] uppercase mb-3">{t("coop_home_label")}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">{t("coop_home_title")}</h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">{t("coop_home_sub")}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.tKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-7 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-[var(--vgo)]/40 hover:shadow-2xl hover:shadow-orange-500/10 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--vgo)] to-[var(--vgo-dark)] flex items-center justify-center shadow-lg shadow-orange-500/30 mb-5">
                <it.Icon size={26} strokeWidth={2.2} className="text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">{t(it.tKey as any)}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 min-h-[66px]">{t(it.dKey as any)}</p>
              <Link href="/partner" className="inline-flex items-center gap-1.5 text-sm font-black text-[var(--vgo)] group-hover:gap-3 transition-all">
                {t(it.cKey as any)} <ArrowRight size={15} strokeWidth={2.5} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/partner"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-b from-[var(--vgo)] to-[var(--vgo-dark)] text-white font-black shadow-xl shadow-orange-500/30 hover:brightness-110 active:scale-[0.98] transition"
          >
            {t("coop_home_more" as any)}
            <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
