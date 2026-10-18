"use client";

import { motion } from "motion/react";
import { ShieldCheck, Zap, Award } from "lucide-react";

const TRUST_CARDS = [
  { icon: ShieldCheck, title: "严格实名审核", text: "所有入驻师傅均需通过身份证、技能证书双重审核，保障您的安全。", color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: Zap, title: "明码标价机制", text: "下单前确认价格明细，服务过程中绝不产生任何隐藏费用或临时加价。", color: "text-[#ff7900]", bg: "bg-[#ff7900]/10" },
  { icon: Award, title: "完工验收保障", text: "服务完成后，由您亲自验收确认满意，平台才会将款项结算给师傅。", color: "text-green-500", bg: "bg-green-500/10" },
];

export default function PlatformTrust() {
  return (
    <section className="relative bg-[#06111d] py-16 sm:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
          {TRUST_CARDS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ rotateX: 5, rotateY: -5, translateZ: 20 }}
              className="relative p-8 rounded-3xl bg-[#0a0f18] border border-white/5 shadow-2xl flex flex-col items-center text-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
