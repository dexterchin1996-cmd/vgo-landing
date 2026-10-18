"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
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

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { y: 24, opacity: 0, scale: 0.98 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

export default function PainPointWall() {
  const { t } = useLang();
  const wallRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  
  const { scrollYProgress } = useScroll({ target: wallRef, offset: ["start end", "end start"] });
  const revealClip = useTransform(scrollYProgress, [0.55, 0.85], ["inset(0 0 0 100%)", "inset(0 0 0 0%)"]);

  return (
    <section ref={wallRef} className="relative bg-[#06111D] py-24 sm:py-32 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-white text-3xl sm:text-5xl font-black text-center mb-4 tracking-tight">
          {t("pain_wall_title")}
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="text-white/55 text-center text-sm sm:text-base mb-14 sm:mb-20 max-w-xl mx-auto">
          {t("pain_wall_sub")}
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5"
          variants={reduce ? {} : container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {PAIN_ITEMS.map((item, i) => (
            <motion.div 
              key={item.img} 
              variants={reduce ? {} : itemVariants} 
              className="group relative aspect-[4/5] overflow-hidden rounded-[16px] bg-[#0F172A] shadow-2xl shadow-black/50"
            >
              <Image src={item.img} alt={t(item.sceneKey)} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.05]" />
              
              <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_70%,transparent_20%,rgba(6,17,29,0.7)_90%)] opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06111d]/95 via-[#06111d]/20 to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 flex flex-col justify-end">
                <p className="text-white font-black text-xs sm:text-base leading-tight drop-shadow-md">{t(item.sceneKey)}</p>
                <p className="text-white/70 text-[10px] sm:text-xs mt-1 leading-tight mb-2">{t(item.painKey)}</p>
                
                <div className="flex items-center justify-between rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-[16px] border border-white/10 transition-all duration-400 group-hover:bg-[#FF7A00]/15 group-hover:border-[#FF7A00]/30 group-hover:shadow-[0_0_0_1px_rgba(255,122,0,0.3),0_0_20px_rgba(255,122,0,0.5),0_4px_12px_rgba(0,0,0,0.3)]">
                  <span className="text-[9px] sm:text-[10px] font-bold text-[#FF9A33] whitespace-nowrap">{t(item.fixKey)}</span>
                  <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#22C55E] shadow-[0_0_8px_#22C55E]" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div style={{ clipPath: revealClip }} className="mt-20 sm:mt-28 text-center">
          <h2 className="text-white text-3xl sm:text-5xl font-black mb-4 tracking-tight">{t("pain_wall_end_title")}</h2>
          <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">{t("pain_wall_end_sub")}</p>
          <p className="text-[#ff7900] text-xs sm:text-sm font-bold mt-4 tracking-wide">{t("pain_answer")}</p>
        </motion.div>
      </div>
    </section>
  );
}
