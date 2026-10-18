"use client";

import Image from "next/image";
import HeroBackgroundMotion from "./HeroBackgroundMotion";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useLang } from "@/lib/i18n";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: EASE },
        };

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#06111D]">
      {/* 1. Background layer */}
      <HeroBackgroundMotion />

      {/* 2. Content layer */}
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">

          {/* Left: Glassmorphism info card */}
          <motion.div 
            {...rise(0.1)}
            className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-[20px] p-8 md:p-12 shadow-[0_8px_32px_rgba(6,17,29,0.4)]"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase text-white/70 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A00] animate-pulse" />
              {t("hero_tag")}
            </div>

            {/* H1 Title */}
            <h1 className="font-display text-[40px] md:text-[56px] lg:text-[64px] font-black leading-[1.05] tracking-[-0.03em] text-white">
              {t("hero_title1")}
              <br />
              <span className="text-[#FF7A00] drop-shadow-[0_0_24px_rgba(255,122,0,0.4)]">
                {t("hero_title2")}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-[480px] text-[15px] md:text-[16px] leading-relaxed text-white/60">
              {t("hero_sub")}
            </p>

            {/* CTA Buttons with Shimmer */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#download"
                className="group relative inline-flex h-[52px] items-center justify-center gap-2 overflow-hidden rounded-full bg-[#FF7A00] px-8 text-[15px] font-bold text-white shadow-[0_0_32px_rgba(255,122,0,0.35)] transition-all duration-200 hover:bg-[#FF9A33] active:scale-[0.98]"
              >
                <span className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                  <span className="relative h-full w-8 bg-white/20" />
                </span>
                <span className="relative z-10">{t("hero_cta_primary")}</span>
                <svg viewBox="0 0 24 24" className="relative z-10 w-4 h-4 stroke-current fill-none" strokeWidth={2.4} aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link
                href="/how-it-works/customer"
                className="inline-flex h-[52px] items-center justify-center rounded-full border border-white/20 px-8 text-[15px] font-medium text-white transition-all duration-200 hover:bg-white/10 active:scale-[0.98]"
              >
                {t("hero_cta_secondary")}
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2 text-[12px] font-semibold text-white/50">
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-[#FF7A00] fill-none" strokeWidth={2}><path d="M12 2l8 4v6c0 5-3.4 8.8-8 10-4.6-1.2-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>
                {t("hero_proof_2")}
              </div>
              <div className="flex items-center gap-2 text-[12px] font-semibold text-white/50">
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-[#FF7A00] fill-none" strokeWidth={2}><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5h4a1.8 1.8 0 010 3.6h-3a1.8 1.8 0 000 3.6h4"/></svg>
                {t("hero_proof_3")}
              </div>
            </div>
          </motion.div>

          {/* Right: Team image + floating glass card */}
          <motion.div 
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
            className="relative hidden lg:flex h-[600px] items-end justify-center"
          >
            {/* Team image */}
            <div className="relative w-full h-full max-w-[500px]">
              <Image
                src="/images/roles-transparent/vgo_team_group_4_transparent_v2.png"
                alt="VGO Technicians"
                fill
                priority
                className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              />
            </div>

            {/* Floating glass card (3s float) */}
            <motion.div 
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -10, 0] }}
              transition={reduce ? { duration: 0.8, delay: 0.8 } : { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute bottom-12 left-0 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-4 pr-6 shadow-[0_8px_32px_rgba(6,17,29,0.4)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF7A00] text-[15px] font-black text-white shadow-[0_0_20px_rgba(255,122,0,0.4)]">
                  4.9
                </div>
                <div>
                  <div className="text-[14px] font-bold text-white">{t("trust_quality_title")}</div>
                  <div className="text-[12px] text-white/50">{t("trust_quality_desc")}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
