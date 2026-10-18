"use client";

import { motion, useReducedMotion } from "motion/react";
import { Check, X, BadgeCheck, FileText } from "lucide-react";
import { useLang } from "@/lib/i18n";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Pricing() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { y: 16, opacity: 0 },
          whileInView: { y: 0, opacity: 1 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.6, delay, ease: EASE },
        };

  return (
    <section className="relative bg-[#06111D] py-24 overflow-hidden">
      <div className="mx-auto max-w-[1100px] px-6">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-white text-3xl md:text-5xl font-black tracking-tight">
            {t("pricing_sec_title")}
          </h2>
          <p className="mt-4 text-white/50 text-sm md:text-base max-w-2xl mx-auto">
            {t("pricing_sec_sub")}
          </p>
        </div>

        <div className="mx-auto grid max-w-[960px] grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8">
          
          {/* 左：固定价 - 白底高亮 + 橙色外发光 */}
          <motion.div
            {...rise(0)}
            className="relative rounded-[24px] bg-[#F8FAFC] p-8 shadow-[0_0_0_2px_#FF7A00,0_20px_60px_rgba(0,0,0,0.25),0_0_40px_rgba(255,121,0,0.18)] md:scale-105 transition-transform duration-500 hover:scale-[1.07]"
          >
            <div className="absolute -top-3 left-6 flex items-center gap-1.5 rounded-full bg-[#FF7A00] px-3 py-1 text-[11px] font-bold text-white shadow-[0_0_16px_rgba(255,121,0,0.5)]">
              <Check className="h-3.5 w-3.5" /> {t("pricing_mode_1_title")}
            </div>
            
            <div className="mt-2 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#FF7A00]/10 text-[#FF7A00]">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <h3 className="text-[20px] font-bold text-[#0F172A]">{t("pricing_step_3")}</h3>
            </div>
            
            <p className="mt-3 text-[13px] leading-[1.6] text-[#0F172A]/60">{t("pricing_mode_1_desc")}</p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2.5 text-[13px] text-[#0F172A] font-medium">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                  <Check className="h-3.5 w-3.5" />
                </div>
                {t("pricing_step_1")}
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-[#0F172A] font-medium">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                  <Check className="h-3.5 w-3.5" />
                </div>
                {t("pricing_step_2")}
              </div>
            </div>
          </motion.div>

          {/* 右：报价制 - 玻璃态 */}
          <motion.div
            {...rise(0.1)}
            className="relative rounded-[24px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-[20px] transition-colors duration-500 hover:bg-white/[0.06]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-white/10 text-white/60">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="text-[20px] font-bold text-white">{t("pricing_mode_2_title")}</h3>
            </div>
            
            <p className="mt-3 text-[13px] leading-[1.6] text-white/50">{t("pricing_mode_2_desc")}</p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2.5 text-[13px] text-white/40">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5 text-white/20">
                  <X className="h-3.5 w-3.5" />
                </div>
                非标准服务类目
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-white/40">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5 text-white/20">
                  <X className="h-3.5 w-3.5" />
                </div>
                需师傅现场评估
              </div>
            </div>
          </motion.div>

        </div>

        <motion.div {...rise(0.2)} className="mt-12 text-center">
          <p className="text-[#FF7A00] text-[13px] md:text-sm font-bold tracking-wide">
            {t("pricing_note")}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
