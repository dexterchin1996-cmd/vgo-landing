"use client";

import { motion, useReducedMotion } from "motion/react";
import { useLang } from "@/lib/i18n";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Pricing() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  return (
    <section className="relative bg-[#0a0a0a] py-24 sm:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div {...rise(0)} className="text-center mb-14">
          <p className="text-[#ff7900] font-bold text-[11px] tracking-[0.2em] uppercase mb-3">
            {t("pricing_sec_label")}
          </p>
          <h2 className="font-display text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            {t("pricing_sec_title")}
          </h2>
          <p className="mt-4 text-white/55 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t("pricing_sec_sub")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
          <motion.div {...rise(0.1)} className="relative rounded-2xl border border-white/10 bg-[#0d0d0d] p-7 sm:p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff7900]/12 border border-[#ff7900]/30 text-[#ff7900] text-[10px] font-bold tracking-wider uppercase mb-4">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth={2.4} aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v10M9.5 9.5h4a1.8 1.8 0 010 3.6h-3a1.8 1.8 0 000 3.6h4" />
              </svg>
              {t("pricing_mode_1_title")}
            </div>
            <p className="text-white/65 text-sm leading-relaxed">{t("pricing_mode_1_desc")}</p>
          </motion.div>

          <motion.div {...rise(0.18)} className="relative rounded-2xl border border-white/10 bg-[#0d0d0d] p-7 sm:p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/20 text-white/85 text-[10px] font-bold tracking-wider uppercase mb-4">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth={2.4} aria-hidden="true">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6M8 13h8M8 17h5" />
              </svg>
              {t("pricing_mode_2_title")}
            </div>
            <p className="text-white/65 text-sm leading-relaxed">{t("pricing_mode_2_desc")}</p>
          </motion.div>
        </div>

        <motion.ol {...rise(0.26)} className="mt-10 grid sm:grid-cols-3 gap-4">
          <li className="flex items-start gap-3 rounded-xl border border-white/8 bg-[#0d0d0d] px-5 py-4">
            <span className="shrink-0 w-6 h-6 rounded-full bg-[#ff7900] text-[#0a0a0a] text-[11px] font-black flex items-center justify-center mt-0.5">1</span>
            <span className="text-white/75 text-[13px] font-semibold leading-snug">{t("pricing_step_1")}</span>
          </li>
          <li className="flex items-start gap-3 rounded-xl border border-white/8 bg-[#0d0d0d] px-5 py-4">
            <span className="shrink-0 w-6 h-6 rounded-full bg-[#ff7900] text-[#0a0a0a] text-[11px] font-black flex items-center justify-center mt-0.5">2</span>
            <span className="text-white/75 text-[13px] font-semibold leading-snug">{t("pricing_step_2")}</span>
          </li>
          <li className="flex items-start gap-3 rounded-xl border border-white/8 bg-[#0d0d0d] px-5 py-4">
            <span className="shrink-0 w-6 h-6 rounded-full bg-[#ff7900] text-[#0a0a0a] text-[11px] font-black flex items-center justify-center mt-0.5">3</span>
            <span className="text-white/75 text-[13px] font-semibold leading-snug">{t("pricing_step_3")}</span>
          </li>
        </motion.ol>

        <motion.p {...rise(0.34)} className="mt-8 text-center text-[#ff7900] text-xs sm:text-sm font-bold tracking-wide">
          {t("pricing_note")}
        </motion.p>

      </div>
    </section>
  );
}
