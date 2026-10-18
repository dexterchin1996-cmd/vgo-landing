"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useLang } from "@/lib/i18n";

const EASE = [0.16, 1, 0.3, 1] as const;

const SCENES = [
  { img: "/scenes/burst.jpg", key: "hero_rotator_1" as const },
  { img: "/scenes/aircon.jpg", key: "hero_rotator_2" as const },
  { img: "/features/clean.jpg", key: "hero_rotator_3" as const },
  { img: "/features/massage.jpg", key: "hero_rotator_4" as const },
];

export default function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % SCENES.length);
    }, 5200);
    return () => clearInterval(id);
  }, [reduce]);

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: EASE },
        };

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#0a0a0a]">

      {/* Scene rotator */}
      {SCENES.map((s, i) => (
        <motion.div
          key={s.img}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === idx ? 1 : 0 }}
          transition={{ duration: 1.2, ease: EASE }}
          aria-hidden={i === idx ? undefined : "true"}
        >
          <motion.div
            className="absolute inset-0"
            animate={reduce ? {} : { scale: i === idx ? 1.04 : 1.12 }}
            transition={{ duration: 5.4, ease: "linear" }}
          >
            <Image
              src={s.img}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Cinematic gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-[#0a0a0a]/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/75 via-transparent to-transparent" />

      {/* Scene caption: bottom right */}
      <div className="absolute bottom-32 right-6 md:bottom-40 md:right-14 z-10 text-right">
        <motion.div
          key={idx}
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-[#0a0a0a]/55 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff7900] animate-pulse" aria-hidden="true" />
          <span className="text-[11px] font-bold text-white/85">{t(SCENES[idx].key)}</span>
        </motion.div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 min-h-[100dvh] flex flex-col justify-end px-6 pb-14 pt-28 md:px-14 md:pb-20">
        <div className="w-full max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-[1.35fr_.65fr] gap-8 md:gap-12 items-end">

          {/* Left: text stack */}
          <div>
            <motion.div
              {...rise(0.05)}
              className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-[#ff7900]/45 bg-[#0a0a0a]/60 backdrop-blur-sm text-[10px] font-bold tracking-[0.16em] uppercase text-[#ff7900]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff7900] animate-pulse" aria-hidden="true" />
              {t("hero_tag")}
            </motion.div>

            <motion.h1
              {...rise(0.15)}
              className="font-display uppercase leading-[0.9] tracking-[-0.045em] text-[clamp(40px,7.4vw,82px)]"
            >
              {t("hero_title1")}
              <span className="block text-[#ff7900]">{t("hero_title2")}</span>
            </motion.h1>

            <motion.p
              {...rise(0.3)}
              className="mt-5 max-w-[36ch] text-[14px] md:text-[15px] leading-relaxed text-white/75 font-medium"
            >
              {t("hero_sub")}
            </motion.p>

            <motion.ul {...rise(0.4)} className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              <li className="flex items-center gap-1.5 text-[11px] font-semibold text-white/60">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-[#ff7900] fill-none" strokeWidth={2.4} aria-hidden="true"><path d="M12 21s-7-4.4-7-10a7 7 0 0114 0c0 5.6-7 10-7 10z"/><circle cx="12" cy="11" r="2.6"/></svg>
                {t("hero_proof_1")}
              </li>
              <li className="flex items-center gap-1.5 text-[11px] font-semibold text-white/60">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-[#ff7900] fill-none" strokeWidth={2.4} aria-hidden="true"><path d="M12 2l8 4v6c0 5-3.4 8.8-8 10-4.6-1.2-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>
                {t("hero_proof_2")}
              </li>
              <li className="flex items-center gap-1.5 text-[11px] font-semibold text-white/60">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-[#ff7900] fill-none" strokeWidth={2.4} aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5h4a1.8 1.8 0 010 3.6h-3a1.8 1.8 0 000 3.6h4"/></svg>
                {t("hero_proof_3")}
              </li>
            </motion.ul>

            <motion.div {...rise(0.5)} className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="#download"
                className="inline-flex items-center justify-between gap-3 px-7 py-4 rounded-full bg-[#ff7900] text-[#0a0a0a] font-bold text-[14.5px] shadow-[0_16px_40px_-14px_rgba(255,121,0,0.75)] transition-colors duration-200 hover:bg-[#ff9633] active:scale-[0.98]"
              >
                {t("hero_cta_primary")}
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none" strokeWidth={2.4} aria-hidden="true">
                  <path d="M12 4v12M6 12l6 6 6-6" />
                </svg>
              </Link>
              <Link
                href="/how-it-works/customer"
                className="inline-flex items-center justify-center px-6 py-4 rounded-full border border-white/25 text-white/75 font-semibold text-[13px] backdrop-blur-sm transition-colors duration-200 hover:text-white hover:border-white/60"
              >
                {t("hero_cta_secondary")}
              </Link>
            </motion.div>
          </div>

          {/* Right: glass trust card */}
          <motion.div
            {...rise(0.55)}
            className="hidden md:block rounded-2xl border border-white/12 bg-[#0a0a0a]/55 backdrop-blur-md p-6"
          >
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 pb-4 border-b border-white/10">
              {t("hero_desc")}
            </div>
            <ul className="flex flex-col gap-4 mt-4">
              <li className="flex gap-3 items-start">
                <span className="shrink-0 w-7 h-7 rounded-lg border border-[#ff7900]/30 bg-[#ff7900]/10 flex items-center justify-center mt-0.5">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 stroke-[#ff7900] fill-none" strokeWidth={2} aria-hidden="true"><path d="M12 2l8 4v6c0 5-3.4 8.8-8 10-4.6-1.2-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>
                </span>
                <div>
                  <b className="block text-[12px] font-bold leading-snug text-white">{t("trust_secure_title")}</b>
                  <p className="mt-0.5 text-[10.5px] leading-relaxed text-white/50">{t("trust_secure_desc")}</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="shrink-0 w-7 h-7 rounded-lg border border-[#ff7900]/30 bg-[#ff7900]/10 flex items-center justify-center mt-0.5">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 stroke-[#ff7900] fill-none" strokeWidth={2} aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5h4a1.8 1.8 0 010 3.6h-3a1.8 1.8 0 000 3.6h4"/></svg>
                </span>
                <div>
                  <b className="block text-[12px] font-bold leading-snug text-white">{t("trust_price_title")}</b>
                  <p className="mt-0.5 text-[10.5px] leading-relaxed text-white/50">{t("trust_price_desc")}</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="shrink-0 w-7 h-7 rounded-lg border border-[#ff7900]/30 bg-[#ff7900]/10 flex items-center justify-center mt-0.5">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 stroke-[#ff7900] fill-none" strokeWidth={2} aria-hidden="true"><path d="M12 21s-7-4.4-7-10a7 7 0 0114 0c0 5.6-7 10-7 10z"/><circle cx="12" cy="11" r="2.6"/></svg>
                </span>
                <div>
                  <b className="block text-[12px] font-bold leading-snug text-white">{t("trust_fast_title")}</b>
                  <p className="mt-0.5 text-[10.5px] leading-relaxed text-white/50">{t("trust_fast_desc")}</p>
                </div>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
