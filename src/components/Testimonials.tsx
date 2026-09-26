"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";

const REVIEWS = [
  { name: "Jason C.", area: "Kota Kinabalu", stars: 5, text: "师傅很专业，打压测试做得很认真。价格事先说清楚，没有额外收费。", tag: "水管维修" },
  { name: "陈小姐", area: "Damai", stars: 5, text: "通渠很快，价格公道。约了两小时后就到，比等师傅上门靠谱多了。", tag: "通渠" },
  { name: "李先生", area: "Penampang", stars: 5, text: "电路排查仔细，稍微迟到 5 分钟还提前打电话告知，很负责任。", tag: "电路维修" },
  { name: "Siti R.", area: "Luyang", stars: 5, text: "Pekerja datang tepat masa, kerja bersih dan harga berpatutan.", tag: "清洁" },
  { name: "Master Rosman", area: "Inanam", stars: 5, text: "平台接单方便，客户素质好，收入比以前靠熟人介绍稳定多了。", tag: "师傅反馈" },
];

export default function Testimonials() {
  const { t } = useLang();
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % REVIEWS.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative bg-gray-50 py-20 sm:py-28 px-5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--vgo)]/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[var(--vgo)] font-bold text-sm tracking-widest uppercase mb-3">
            {t("review_label")}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            {t("review_title")}
          </h2>
        </motion.div>

        <div className="relative h-[280px] sm:h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 p-7 sm:p-10 rounded-[32px] bg-white border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col"
            >
              {/* 引号 */}
              <div className="text-6xl font-black text-[var(--vgo)]/20 leading-none -mt-3 mb-2">"</div>

              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed flex-1">
                {REVIEWS[idx].text}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[var(--vgo-light)] to-[var(--vgo-dark)] text-white font-black flex items-center justify-center text-lg">
                    {REVIEWS[idx].name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{REVIEWS[idx].name}</div>
                    <div className="text-xs text-gray-500">{REVIEWS[idx].area} · {REVIEWS[idx].tag}</div>
                  </div>
                </div>
                <div className="text-yellow-400 text-lg tracking-wider">
                  {"★".repeat(REVIEWS[idx].stars)}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 指示点 */}
        <div className="flex justify-center gap-2 mt-8">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`第 ${i + 1} 条`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === idx ? "w-8 bg-[var(--vgo)]" : "w-1.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
