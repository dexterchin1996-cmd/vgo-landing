"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { MapPin, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { REGIONS } from "@/data/regions";
import type { Lang } from "@/data/regions";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function CoveragePage() {
  const { t, lang } = useLang();
  const reduce = useReducedMotion();
  const L = (lang as Lang) ?? "zh";

  const liveStates = REGIONS.filter((s) => s.status === "live");
  const cityCount = liveStates.reduce((n, s) => n + s.cities.length, 0);
  const areaCount = liveStates.reduce(
    (n, s) => n + s.cities.reduce((m, c) => m + c.areas.length, 0),
    0
  );

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  return (
    <main className="relative bg-[#0a0a0a] min-h-[100dvh]">
      <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-5xl mx-auto">
          <motion.p {...rise(0)} className="text-[#ff7900] font-bold text-[11px] tracking-[0.2em] uppercase mb-3">
            {t("coverage_label")}
          </motion.p>
          <motion.h1 {...rise(0.08)} className="font-display text-white text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
            {t("coverage_title")}
          </motion.h1>
          <motion.p {...rise(0.16)} className="mt-5 max-w-2xl text-white/55 text-sm sm:text-base leading-relaxed">
            {t("coverage_sub")}
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-12 grid grid-cols-3 gap-4 sm:gap-6">
            <div className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-5 sm:p-6">
              <div className="font-display text-[#ff7900] text-3xl sm:text-4xl font-black">{liveStates.length}</div>
              <div className="mt-2 text-white/45 text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase">
                {t("coverage_stat_states")}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-5 sm:p-6">
              <div className="font-display text-[#ff7900] text-3xl sm:text-4xl font-black">{cityCount}</div>
              <div className="mt-2 text-white/45 text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase">
                {t("coverage_stat_cities")}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-5 sm:p-6">
              <div className="font-display text-[#ff7900] text-3xl sm:text-4xl font-black">{areaCount}</div>
              <div className="mt-2 text-white/45 text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase">
                {t("coverage_stat_areas")}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Decorative Glow Map Element */}
      <section className="px-6 pb-12 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl aspect-[2/1] rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,121,0,0.1)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              className="relative flex h-4 w-4 items-center justify-center rounded-full bg-[#FF7A00] shadow-[0_0_20px_#FF7A00]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-[3px] rounded-full bg-white" />
            </motion.div>
            <div className="mt-4 text-[13px] font-bold tracking-widest text-[#FF7A00] uppercase drop-shadow-[0_0_10px_rgba(255,121,0,0.5)]">
              Malaysia Coverage
            </div>
          </div>
        </motion.div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto flex flex-col gap-4">
          {liveStates.map((state, i) => (
            <motion.article
              key={state.id}
              {...rise(0.05 + Math.min(i, 6) * 0.04)}
              className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-6 sm:p-7"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#ff7900]/12 border border-[#ff7900]/30 flex items-center justify-center">
                  <MapPin size={14} className="text-[#ff7900]" aria-hidden="true" />
                </span>
                <h2 className="text-white text-lg sm:text-xl font-bold tracking-tight">
                  {state.label[L]}
                </h2>
                <span className="ml-auto px-2.5 py-1 rounded-full bg-green-500/15 border border-green-500/35 text-green-400 text-[10px] font-bold tracking-wider uppercase">
                  {t("coverage_live")}
                </span>
              </div>

              <ul className="flex flex-col gap-3">
                {state.cities.map((city) => (
                  <li key={city.id} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-white/85 text-[13px] font-semibold">{city.label[L]}</span>
                      <span className="text-white/30 text-[10px] font-bold tracking-wider uppercase">
                        {city.status === "live" ? t("coverage_live") : city.status === "coming" ? t("coverage_coming") : t("coverage_planned")}
                      </span>
                    </div>
                    {city.areas.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {city.areas.map((area) => (
                          <span
                            key={area.id}
                            className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/55 text-[11px]"
                          >
                            {area.label[L]}
                          </span>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <motion.div {...rise(0.1)} className="max-w-5xl mx-auto rounded-2xl border border-[#ff7900]/25 bg-[#ff7900]/8 p-7 sm:p-9 flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="flex-1">
            <h2 className="text-white text-lg sm:text-xl font-bold tracking-tight">{t("coverage_cta_title")}</h2>
            <p className="mt-2 text-white/55 text-[13px] leading-relaxed">{t("coverage_cta_desc")}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#ff7900] text-[#0a0a0a] font-bold text-[13px] transition-colors duration-200 hover:bg-[#ff9633]"
          >
            {t("coverage_cta_button")}
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
