"use client";
import { motion } from "motion/react";
import { AlertCircle, Wallet, Clock, Search } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function PainPoints() {
  const { t } = useLang();
  const PAINS = [
    { Icon: AlertCircle, text: t("pain_1") },
    { Icon: Wallet,      text: t("pain_2") },
    { Icon: Clock,       text: t("pain_3") },
    { Icon: Search,      text: t("pain_4") },
  ];
  return (
    <section className="relative bg-gray-50 py-20 sm:py-28 px-5 overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#FF6600]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#FF6600] font-bold text-sm tracking-widest uppercase mb-3">
            {t("pain_label")}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            {t("pain_title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {PAINS.map((p, i) => (
            <motion.div
              key={p.text}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-3xl bg-white border border-gray-100 text-center shadow-sm"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-red-50 flex items-center justify-center mb-3">
                <p.Icon size={26} strokeWidth={2} className="text-red-400" />
              </div>
              <div className="text-sm text-gray-600 font-medium">{p.text}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-block px-8 py-5 rounded-3xl bg-gradient-to-br from-[#FF6600] to-[#E55A00] text-white shadow-2xl shadow-orange-500/30">
            <p className="text-xs font-semibold tracking-widest opacity-90 mb-1">{t("pain_answer_label")}</p>
            <p className="text-xl sm:text-2xl font-black">
              {t("pain_answer")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
