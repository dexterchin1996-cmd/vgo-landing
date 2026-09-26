"use client";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import NewsTicker from "@/components/NewsTicker";
import PainPoints from "@/components/PainPoints";
import FeatureCards from "@/components/FeatureCards";
import SceneShowcase from "@/components/SceneShowcase";
import HowItWorks from "@/components/HowItWorks";
import Guarantees from "@/components/Guarantees";
import Roles from "@/components/Roles";
import Merchant from "@/components/Merchant";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";
import { useLang } from "@/lib/i18n";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80",
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80",
  "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=1920&q=80",
];

const SLIDE_MS = 7000;
const TRANSITION_S = 1.8;

export default function Home() {
  const { t } = useLang();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx(i => (i + 1) % HERO_IMAGES.length), SLIDE_MS);
    return () => clearInterval(timer);
  }, []);

  const STATS = [
    { num: "4.9",  label: t("stat_rating") },
    { num: "12K+", label: t("stat_family") },
    { num: "30+",  label: t("stat_category") },
    { num: "全马", label: t("stat_cover") },
  ];

  return (
    <>
      <main id="home" className="relative min-h-[100svh] flex flex-col overflow-hidden bg-gray-950 noise">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="sync">
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{
                opacity: { duration: TRANSITION_S, ease: "easeInOut" },
                scale:   { duration: TRANSITION_S, ease: "easeOut" },
              }}
              className="absolute inset-0"
            >
              <div
                className="kenburns absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${HERO_IMAGES[idx]}')` }}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="aurora absolute -top-32 -left-24 w-[500px] h-[500px] rounded-full bg-[var(--vgo)] blur-[140px] opacity-60" />
          <div className="aurora-2 absolute -bottom-32 -right-24 w-[600px] h-[600px] rounded-full bg-[#FF8A3D] blur-[160px] opacity-50" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs sm:text-sm font-semibold mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--vgo)] animate-pulse" />
            {t("hero_tag")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 60 }}
            className="text-[34px] leading-[1.15] sm:text-6xl md:text-7xl font-black tracking-tight"
          >
            <span className="block bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              {t("hero_title1")}
            </span>
            <span className="block mt-1">
              {t("hero_title2").replace("VGO", "")}
              <span className="text-[var(--vgo)] drop-shadow-[0_0_40px_rgba(255,102,0,0.6)]">VGO</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed"
          >
            {t("hero_desc")}
            <br />
            <span className="text-white/50 text-xs sm:text-sm">{t("hero_sub")}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 w-full max-w-sm mx-auto space-y-3"
          >
            <a
              href="#download"
              className="group flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl bg-gradient-to-b from-[var(--vgo-light)] to-[var(--vgo-dark)] text-white font-bold text-base shadow-[0_10px_30px_-8px_rgba(255,102,0,0.6)] hover:shadow-[0_16px_40px_-8px_rgba(255,102,0,0.8)] hover:scale-[1.02] active:scale-95 transition-all pulse-glow"
            >
              <span className="text-lg">👤</span>
              <span>{t("cta_customer")}</span>
              <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
            </a>
            <div className="grid grid-cols-2 gap-3">
              <a href="#merchant" className="flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-white/8 backdrop-blur-xl border border-white/20 text-white text-xs sm:text-sm font-semibold hover:bg-white/15 hover:border-white/40 active:scale-95 transition-all">
                <span>🏪</span>
                <span>{t("cta_merchant")}</span>
              </a>
              <a href="#technician" className="flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-white/8 backdrop-blur-xl border border-white/20 text-white text-xs sm:text-sm font-semibold hover:bg-white/15 hover:border-white/40 active:scale-95 transition-all">
                <span>🔧</span>
                <span>{t("cta_tech")}</span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="relative z-20 pb-4 px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="max-w-3xl mx-auto mb-4 grid grid-cols-4 gap-1 sm:gap-2 p-2 rounded-2xl bg-white/8 backdrop-blur-2xl border border-white/15"
          >
            {STATS.map((s) => (
              <div key={s.label} className="py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-center">
                <div className="text-base sm:text-2xl font-black text-[var(--vgo)] leading-tight">{s.num}</div>
                <div className="text-[10px] sm:text-xs text-white/65 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>

          <div className="flex justify-center gap-2 mb-3">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`slide ${i + 1}`}
                className={`h-1.5 rounded-full overflow-hidden transition-all duration-500 ${
                  i === idx ? "w-10 bg-white/25" : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              >
                {i === idx && (
                  <motion.div
                    key={`bar-${idx}`}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                    className="h-full bg-[var(--vgo)]"
                  />
                )}
              </button>
            ))}
          </div>

          <a href="#features" className="flex items-center justify-center gap-1.5 text-white/50 text-xs hover:text-white transition">
            <span>{t("scroll_more")}</span>
            <span className="animate-bounce">↓</span>
          </a>
        </div>
      </main>

      <NewsTicker />
      <PainPoints />
      <FeatureCards />
      <SceneShowcase />
      <HowItWorks />
      <Guarantees />
      <Roles />
      <Merchant />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <ComingSoon />
    </>
  );
}
