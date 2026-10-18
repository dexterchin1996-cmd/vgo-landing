"use client";
import { motion } from "motion/react";
import { useLang } from "@/lib/i18n";

export default function FinalCTA() {
  const { t } = useLang();
  return (
    <section id="download" className="relative bg-[#06111d] px-5 py-20 sm:py-24">
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
            style={{ backgroundImage: "url('/shared/s01.jpg')" }}
          />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#06111d]/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-300/20 rounded-full blur-[120px]" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#06111d]/20 backdrop-blur-md border border-white/10 text-white text-xs sm:text-sm font-bold mb-5">
              <span className="text-lg">🎁</span>
              <span>{t("cta_voucher_banner")}</span>
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
              <a href="/how-it-works/customer" className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-[#06111d] text-[var(--vgo-dark)] font-black text-base shadow-2xl hover:scale-105 active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">
                {t("cta_register")}
              </a>
              <a href="/services/repair" className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-[#06111d]/15 backdrop-blur-md border border-white/40 text-white font-bold text-base hover:bg-[#06111d]/25 active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">
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
