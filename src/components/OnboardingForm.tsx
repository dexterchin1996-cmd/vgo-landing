"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, User, Phone, FileText } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function OnboardingForm() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  return (
    <section className="relative py-24 bg-[#06111D] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FF7A00]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          {...(reduce ? {} : { initial: { y: 20, opacity: 0 }, whileInView: { y: 0, opacity: 1 } })}
          viewport={{ once: true }}
          className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 md:p-10 backdrop-blur-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-black text-white">{t("form_apply_title")}</h3>
            <p className="mt-2 text-sm text-white/50">{t("form_apply_sub")}</p>
          </div>

          <div className="grid gap-5">
            <label>
              <div className="mb-2 flex items-center gap-1.5 text-[12px] text-white/50 font-medium">
                <User className="h-3.5 w-3.5" /> {t("form_name")}
              </div>
              <input type="text" className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-[14px] text-white placeholder:text-white/20 outline-none transition-colors focus:border-[#FF7A00]/50 focus:bg-white/[0.06]" />
            </label>

            <label>
              <div className="mb-2 flex items-center gap-1.5 text-[12px] text-white/50 font-medium">
                <Phone className="h-3.5 w-3.5" /> {t("form_phone")}
              </div>
              <input type="tel" className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-[14px] text-white placeholder:text-white/20 outline-none transition-colors focus:border-[#FF7A00]/50 focus:bg-white/[0.06]" />
            </label>

            <label>
              <div className="mb-2 flex items-center gap-1.5 text-[12px] text-white/50 font-medium">
                <FileText className="h-3.5 w-3.5" /> {t("form_desc")}
              </div>
              <textarea rows={4} className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] p-4 text-[14px] text-white placeholder:text-white/20 outline-none transition-colors focus:border-[#FF7A00]/50 focus:bg-white/[0.06]"></textarea>
            </label>

            <button className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#FF7A00] text-[15px] font-bold text-white shadow-[0_0_24px_rgba(255,121,0,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98]">
              {t("form_submit")} <ArrowRight className="h-4 w-4" />
            </button>
            <div className="text-center text-[11px] text-white/30">{t("form_hint")}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
