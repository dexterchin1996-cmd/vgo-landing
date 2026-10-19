/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "motion/react";
import { Star } from "lucide-react";
const REVIEWS = [
  { name: "Sarah T.", role: "客户", text: "半夜水管漏水，没想到 30 分钟师傅就到了，马上搞定，价格也很透明！", img: "/shared/s03.jpg" },
  { name: "Ahmad R.", role: "客户", text: "第一次用这种上门服务，师傅很专业，穿鞋套，修完还把地拖干净了。", img: "/shared/s05.jpg" },
  { name: "李先生", role: "商家", text: "合作了几个月，平台派单很稳定，客户质量也高，结算特别准时。", img: "/shared/s07.jpg" },
];
export default function Testimonials() {
  return (
    <section className="relative bg-[#0a0f18] py-24 sm:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[#ff7900] font-bold text-xs tracking-[0.2em] uppercase mb-3">Testimonials</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl sm:text-5xl font-black text-white tracking-tight">他们的真实反馈。</motion.h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
          {REVIEWS.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} whileHover={{ rotateX: 5, rotateY: -5, translateZ: 20 }} className="relative p-8 rounded-3xl bg-[#06111d] border border-white/5 shadow-2xl flex flex-col justify-between" style={{ transformStyle: "preserve-3d" }}>
              <div>
                <div className="flex gap-1 mb-6">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[#ff7900] text-[#ff7900]" />)}</div>
                <p className="text-white/80 text-base leading-relaxed mb-8">&quot;{r.text}&quot;</p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <img src={r.img} alt={r.name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
                <div><div className="text-white font-bold text-sm">{r.name}</div><div className="text-white/40 text-xs">{r.role}</div></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
