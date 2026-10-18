"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useLang } from "@/lib/i18n";

const PAIN_ITEMS = [
  { img: "/scenes/leak.jpg",   sceneKey: "pain_scene_1" as const, painKey: "pain_1" as const, fixKey: "pain_fix_1" as const },
  { img: "/scenes/burst.jpg",  sceneKey: "pain_scene_2" as const, painKey: "pain_2" as const, fixKey: "pain_fix_2" as const },
  { img: "/scenes/clog.jpg",   sceneKey: "pain_scene_3" as const, painKey: "pain_3" as const, fixKey: "pain_fix_3" as const },
  { img: "/scenes/power.jpg",  sceneKey: "pain_scene_4" as const, painKey: "pain_4" as const, fixKey: "pain_fix_4" as const },
  { img: "/scenes/aircon.jpg", sceneKey: "pain_scene_5" as const, painKey: "pain_5" as const, fixKey: "pain_fix_5" as const },
  { img: "/scenes/lock.jpg",   sceneKey: "pain_scene_6" as const, painKey: "pain_6" as const, fixKey: "pain_fix_6" as const },
  { img: "/scenes/mold.jpg",   sceneKey: "pain_scene_7" as const, painKey: "pain_7" as const, fixKey: "pain_fix_7" as const },
  { img: "/scenes/pest.jpg",   sceneKey: "pain_scene_8" as const, painKey: "pain_8" as const, fixKey: "pain_fix_8" as const },
];

export default function PainPointWall() {
  const { t } = useLang();
  const wallRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wallRef,
    offset: ["start end", "end start"],
  });
  const y0 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y1 = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y4 = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const y5 = useTransform(scrollYProgress, [0, 1], [110, -110]);
  const y6 = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const y7 = useTransform(scrollYProgress, [0, 1], [65, -65]);
  const ys = [y0, y1, y2, y3, y4, y5, y6, y7];
  const revealClip = useTransform(scrollYProgress, [0.55, 0.85], ["inset(0 0 0 100%)", "inset(0 0 0 0%)"]);

  return (
    <section ref={wallRef} className="relative bg-[#06111d] py-24 sm:py-32 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-white text-3xl sm:text-5xl font-black text-center mb-4 tracking-tight">
          {t("pain_wall_title")}
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="text-white/55 text-center text-sm sm:text-base mb-14 sm:mb-20 max-w-xl mx-auto">
          {t("pain_wall_sub")}
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {PAIN_ITEMS.map((item, i) => (
            <motion.div key={item.img} style={{ y: ys[i] }} className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-red-950/40">
              <img src={item.img} alt={t(item.sceneKey)} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.05) 0%, rgba(10,10,10,0.9) 100%), radial-gradient(ellipse at 50% 40%, transparent 25%, rgba(180,20,20,0.35) 100%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <p className="text-white font-black text-xs sm:text-base leading-tight">{t(item.sceneKey)}</p>
                <p className="text-white/60 text-[10px] sm:text-xs mt-1 leading-tight">{t(item.painKey)}</p>
                <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-[#ff7900]/15 border border-[#ff7900]/40 text-[#ff7900] text-[9px] sm:text-[10px] font-bold whitespace-nowrap">
                  {t(item.fixKey)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div style={{ clipPath: revealClip }} className="mt-20 sm:mt-28 text-center">
          <h2 className="text-white text-3xl sm:text-5xl font-black mb-4 tracking-tight">{t("pain_wall_end_title")}</h2>
          <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">{t("pain_wall_end_sub")}</p>
          <p className="text-[var(--vgo)] text-xs sm:text-sm font-bold mt-4 tracking-wide">{t("pain_answer")}</p>
        </motion.div>
      </div>
    </section>
  );
}
