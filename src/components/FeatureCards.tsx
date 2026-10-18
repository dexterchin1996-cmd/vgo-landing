"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

const BENTO_ITEMS = [
  { id: "repair", name: "居家维修", desc: "水电突发故障，一键呼叫附近师傅。", img: "/scenes/leak.jpg", href: "/services/repair", className: "col-span-2 row-span-2" },
  { id: "clean", name: "专业清洁", desc: "让家里焕然一新，解放你的周末。", img: "/features/clean.jpg", href: "/services/clean", className: "col-span-1 row-span-1" },
  { id: "errand", name: "极速跑腿", desc: "买菜、送件、排队，交给我们。", img: "/features/errand.jpg", href: "/services/errand", className: "col-span-1 row-span-1" },
  { id: "massage", name: "上门按摩", desc: "资深理疗师，在家享受放松时刻。", img: "/features/massage.jpg", href: "/services/massage", className: "col-span-2 row-span-1" },
];

export default function FeatureCards() {
  const { t } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 视差动效：奇数索引的卡片上浮，偶数索引的卡片下沉
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section id="services" ref={containerRef} className="relative bg-[#06111d] py-24 sm:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        
        <div className="mb-16 md:mb-24 text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[#ff7900] font-bold text-xs tracking-[0.2em] uppercase mb-3">
            What we solve
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            你的生活，我们搞定。
          </motion.h2>
        </div>

        {/* Bento Grid 矩阵，带滚动视差 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">
          {BENTO_ITEMS.map((item, i) => {
            const yOffset = i % 2 === 0 ? y1 : y2;
            return (
              <motion.div key={item.id} style={{ y: yOffset }} className={`relative rounded-[2rem] overflow-hidden group ${item.className}`}>
                <Link href={item.href} className="block w-full h-full relative">
                  <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06111d] via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl md:text-4xl font-black text-white mb-2">{item.name}</h3>
                      <p className="text-white/70 text-sm md:text-base max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <span className="text-white">↗</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
