"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const PAIN_ITEMS = [
  { img: "/scenes/leak.jpg",  text: "半夜水管爆了" },
  { img: "/scenes/burst.jpg", text: "跳电了找不到人" },
  { img: "/scenes/clog.jpg",  text: "马桶堵了干着急" },
  { img: "/scenes/power.jpg", text: "空调不冷等不了" },
];

export default function PainPointWall() {
  const wallRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wallRef,
    offset: ["start end", "end start"],
  });
  const y0 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y1 = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const ys = [y0, y1, y2, y3];
  const revealClip = useTransform(scrollYProgress, [0.55, 0.85], ["inset(0 0 0 100%)", "inset(0 0 0 0%)"]);

  return (
    <section ref={wallRef} className="relative bg-[#06111d] py-24 sm:py-32 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-white text-3xl sm:text-5xl font-black text-center mb-4 tracking-tight">
          生活不会先预约
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="text-white/55 text-center text-sm sm:text-base mb-14 sm:mb-20 max-w-xl mx-auto">
          麻烦总是突然发生。先看这些，再往下看答案。
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {PAIN_ITEMS.map((item, i) => (
            <motion.div key={item.img} style={{ y: ys[i] }} className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-red-950/40">
              <img src={item.img} alt={item.text} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.05) 0%, rgba(10,10,10,0.9) 100%), radial-gradient(ellipse at 50% 40%, transparent 25%, rgba(180,20,20,0.35) 100%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <p className="text-white font-black text-xs sm:text-base leading-tight">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div style={{ clipPath: revealClip }} className="mt-20 sm:mt-28 text-center">
          <h2 className="text-white text-3xl sm:text-5xl font-black mb-4 tracking-tight">麻烦不用自己扛。</h2>
          <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">选一类，V&apos;GO 帮你找到对的人。</p>
        </motion.div>
      </div>
    </section>
  );
}
