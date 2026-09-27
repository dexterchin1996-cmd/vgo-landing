"use client";
import { motion } from "motion/react";
import { useLang } from "@/lib/i18n";

export default function FinalCTA() {
  const { t } = useLang();
  return (
    <section id="download" className="relative bg-white px-5 py-20 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[var(--vgo)] via-[#F15800] to-[#C74A00] px-8 py-16 sm:px-16 sm:py-20 text-center text-white noise"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80')" }}
          />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-300/20 rounded-full blur-[120px]" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-bold mb-5">
              <span className="text-lg">🎁</span>
              <span>注册即送 <span className="text-lg font-black">RM80</span> 上门检查券</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
              {t("cta_title1")}
              <br />
              {t("cta_title2")}
            </h2>
            <p className="mt-5 text-white/80 text-base sm:text-lg max-w-xl mx-auto">
              {t("cta_sub")}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#" className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-white text-[var(--vgo-dark)] font-black text-base shadow-2xl hover:scale-105 active:scale-95 transition-all">
                {t("cta_register")}
              </a>
              <a href="#" className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/40 text-white font-bold text-base hover:bg-white/25 active:scale-95 transition-all">
                {t("cta_download")}
              </a>
            </div>

            <p className="mt-6 text-xs text-white/60">{t("cta_note")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
