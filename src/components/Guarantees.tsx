"use client";
import { motion } from "motion/react";
import { ShieldCheck, Wallet, Clock, RefreshCw, Lock, Headphones } from "lucide-react";
import { useLang } from "@/lib/i18n";

const C = {
  zh: {
    label: "我们的承诺",
    title: "为什么 12K+ 家庭选择 VGO",
    sub: "6 大保障，让你用得放心",
    items: [
      { Icon: ShieldCheck, title: "认证师傅", p1: "身份验证 + 技能审核", p2: "不满意免费更换" },
      { Icon: Wallet,      title: "价格透明", p1: "下单前先看报价", p2: "无隐藏费用" },
      { Icon: Clock,       title: "准时上门", p1: "迟到提前告知", p2: "全程可追踪" },
      { Icon: RefreshCw,   title: "售后保障", p1: "服务未完成退款", p2: "平台介入处理" },
      { Icon: Lock,        title: "隐私保护", p1: "PDPA 合规", p2: "数据加密存储" },
      { Icon: Headphones,  title: "24 小时客服", p1: "WhatsApp 随时问", p2: "24 小时内回复" },
    ],
  },
  en: {
    label: "Our Promise",
    title: "Why 12K+ Families Choose VGO",
    sub: "6 guarantees for your peace of mind",
    items: [
      { Icon: ShieldCheck, title: "Certified Pros", p1: "ID + skill verified", p2: "Free replacement if unsatisfied" },
      { Icon: Wallet,      title: "Transparent Pricing", p1: "See price before booking", p2: "No hidden fees" },
      { Icon: Clock,       title: "On-Time Arrival", p1: "Delay notified in advance", p2: "Fully trackable" },
      { Icon: RefreshCw,   title: "After-Sales", p1: "Refund if incomplete", p2: "Platform steps in" },
      { Icon: Lock,        title: "Privacy Protected", p1: "PDPA compliant", p2: "Encrypted storage" },
      { Icon: Headphones,  title: "24/7 Support", p1: "WhatsApp anytime", p2: "Reply within 24h" },
    ],
  },
  ms: {
    label: "Janji Kami",
    title: "Kenapa 12K+ Keluarga Pilih VGO",
    sub: "6 jaminan untuk ketenangan anda",
    items: [
      { Icon: ShieldCheck, title: "Tukang Bertauliah", p1: "Pengesahan ID + kemahiran", p2: "Ganti percuma jika tak puas" },
      { Icon: Wallet,      title: "Harga Telus", p1: "Tengok harga dulu", p2: "Tiada caj tersembunyi" },
      { Icon: Clock,       title: "Tepat Masa", p1: "Lewat dimaklumkan awal", p2: "Boleh track penuh" },
      { Icon: RefreshCw,   title: "Jaminan Selepas", p1: "Bayaran balik jika tak siap", p2: "Platform ambil tindakan" },
      { Icon: Lock,        title: "Privasi Dilindungi", p1: "Patuh PDPA", p2: "Data disulitkan" },
      { Icon: Headphones,  title: "Sokongan 24 Jam", p1: "WhatsApp bila-bila", p2: "Balas dalam 24 jam" },
    ],
  },
} as const;

export default function Guarantees() {
  const { lang } = useLang();
  const c = C[lang] ?? C.zh;

  return (
    <section className="relative bg-white py-20 sm:py-28 px-5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[var(--vgo)]/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[var(--vgo)] font-bold text-sm tracking-widest uppercase mb-3">{c.label}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            {c.title}
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">{c.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {c.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="group relative p-7 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-[var(--vgo)]/30 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--vgo)] to-[var(--vgo-dark)] flex items-center justify-center mb-5 shadow-lg shadow-orange-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <item.Icon size={24} strokeWidth={2.2} className="text-white" />
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-3">{item.title}</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--vgo)]" />
                  {item.p1}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--vgo)]" />
                  {item.p2}
                </li>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
