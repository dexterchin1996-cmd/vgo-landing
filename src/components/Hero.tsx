"use client";

import Image from "next/image";
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
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: EASE },
        };

  return (
    <section className="relative min-h-[100dvh] grid grid-cols-1 md:grid-cols-[1.15fr_.85fr] overflow-hidden bg-[#0a0a0a]">

      {/* Left: problem scene */}
      <div className="relative min-h-[52svh] md:min-h-[100dvh] flex items-end px-6 pb-10 pt-24 md:px-12 md:pb-12">
        <Image
          src="/scenes/burst.jpg"
          alt={t("hero_title1")}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 58vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/55 via-[#0a0a0a]/35 to-[#0a0a0a]/95 md:bg-gradient-to-r md:from-[#0a0a0a]/45 md:via-[#0a0a0a]/55 md:to-[#0a0a0a]/98" />

        <div className="relative z-10 max-w-[560px]">
          <motion.div
            {...rise(0.05)}
            className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-[#ff7900]/40 bg-[#ff7900]/15 text-[10px] font-bold tracking-[0.16em] uppercase text-[#ff7900]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff7900] animate-pulse" aria-hidden="true" />
            {t("hero_tag")}
          </motion.div>

          <motion.h1
            {...rise(0.15)}
            className="font-display uppercase leading-[0.92] tracking-[-0.045em] text-[clamp(46px,9vw,96px)]"
          >
            {t("hero_title1")}
            <span className="block text-[#ff7900]">{t("hero_title2")}</span>
          </motion.h1>

          <motion.p
            {...rise(0.3)}
            className="mt-5 max-w-[34ch] text-[15px] leading-relaxed text-white/70 font-medium"
          >
            {t("hero_sub")}
          </motion.p>

          <motion.ul {...rise(0.42)} className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
            <li className="flex items-center gap-1.5 text-[11px] font-semibold text-white/55">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-[#ff7900] fill-none" strokeWidth={2.4} aria-hidden="true"><path d="M12 21s-7-4.4-7-10a7 7 0 0114 0c0 5.6-7 10-7 10z"/><circle cx="12" cy="11" r="2.6"/></svg>
              {t("hero_proof_1")}
            </li>
            <li className="flex items-center gap-1.5 text-[11px] font-semibold text-white/55">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-[#ff7900] fill-none" strokeWidth={2.4} aria-hidden="true"><path d="M12 2l8 4v6c0 5-3.4 8.8-8 10-4.6-1.2-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>
              {t("hero_proof_2")}
            </li>
            <li className="flex items-center gap-1.5 text-[11px] font-semibold text-white/55">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-[#ff7900] fill-none" strokeWidth={2.4} aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5h4a1.8 1.8 0 010 3.6h-3a1.8 1.8 0 000 3.6h4"/></svg>
              {t("hero_proof_3")}
            </li>
          </motion.ul>
        </div>
      </div>

      {/* Right: brand panel */}
      <div className="relative bg-[#0d0d0d] md:border-l md:border-white/10 flex flex-col justify-center gap-6 px-6 py-9 md:px-11 md:py-13">
        <motion.div {...rise(0.05)}>
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 pb-3.5 border-b border-white/10">
            {t("hero_desc")}
          </div>
        </motion.div>

        <motion.div {...rise(0.18)} className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/[0.07]">
          <Image
            src="/features/repair.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 42vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 px-4 pt-9 pb-3.5 bg-gradient-to-t from-[#0a0a0a]/95 to-transparent text-[12px] font-semibold text-white/85">
            {t("trust_quality_title")}
          </div>
        </motion.div>

        <motion.ul {...rise(0.3)} className="flex flex-col gap-4">
          <li className="flex gap-3 items-start">
            <span className="shrink-0 w-8 h-8 rounded-lg border border-[#ff7900]/25 bg-[#ff7900]/10 flex items-center justify-center mt-0.5">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-[#ff7900] fill-none" strokeWidth={2} aria-hidden="true">
                <path d="M12 2l8 4v6c0 5-3.4 8.8-8 10-4.6-1.2-8-5-8-10V6l8-4z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </span>
            <div>
              <b className="block text-[12.5px] font-bold leading-snug">{t("trust_secure_title")}</b>
              <p className="mt-0.5 text-[11px] leading-relaxed text-white/40">{t("trust_secure_desc")}</p>
            </div>
          </li>
          <li className="flex gap-3 items-start">
            <span className="shrink-0 w-8 h-8 rounded-lg border border-[#ff7900]/25 bg-[#ff7900]/10 flex items-center justify-center mt-0.5">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-[#ff7900] fill-none" strokeWidth={2} aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v10M9.5 9.5h4a1.8 1.8 0 010 3.6h-3a1.8 1.8 0 000 3.6h4" />
              </svg>
            </span>
            <div>
              <b className="block text-[12.5px] font-bold leading-snug">{t("trust_price_title")}</b>
              <p className="mt-0.5 text-[11px] leading-relaxed text-white/40">{t("trust_price_desc")}</p>
            </div>
          </li>
          <li className="flex gap-3 items-start">
            <span className="shrink-0 w-8 h-8 rounded-lg border border-[#ff7900]/25 bg-[#ff7900]/10 flex items-center justify-center mt-0.5">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-[#ff7900] fill-none" strokeWidth={2} aria-hidden="true">
                <path d="M12 21s-7-4.4-7-10a7 7 0 0114 0c0 5.6-7 10-7 10z" />
                <circle cx="12" cy="11" r="2.6" />
              </svg>
            </span>
            <div>
              <b className="block text-[12.5px] font-bold leading-snug">{t("trust_fast_title")}</b>
              <p className="mt-0.5 text-[11px] leading-relaxed text-white/40">{t("trust_fast_desc")}</p>
            </div>
          </li>
        </motion.ul>

        <motion.div {...rise(0.5)} className="flex flex-col gap-3">
          <Link
            href="#download"
            className="flex items-center justify-between gap-3.5 w-full px-5.5 py-4 rounded-[13px] bg-[#ff7900] text-[#0a0a0a] font-bold text-[14.5px] transition-colors duration-200 hover:bg-[#ff9633] active:scale-[0.98]"
          >
            {t("hero_cta_primary")}
            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none" strokeWidth={2.4} aria-hidden="true">
              <path d="M12 4v12M6 12l6 6 6-6" />
            </svg>
          </Link>
          <Link
            href="/how-it-works/intro"
            className="block text-center text-[12px] font-semibold text-white/45 border-b border-white/15 pb-1 mx-auto transition-colors duration-200 hover:text-white hover:border-white/60"
          >
            {t("hero_cta_secondary")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
