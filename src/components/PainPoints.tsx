"use client";
import { motion } from "motion/react";
import { AlertCircle, Wallet, Clock, Search } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function PainPoints() {
  const { t } = useLang();
  const PAINS = [
    { Icon: AlertCircle, text: t("pain_1"), img: "/scenes/leak.jpg" },
    { Icon: Wallet,      text: t("pain_2"), img: "/scenes/burst.jpg" },
    { Icon: Clock,       text: t("pain_3"), img: "/scenes/clog.jpg" },
    { Icon: Search,      text: t("pain_4"), img: "/scenes/power.jpg" },
  ];
  return (
    <section className="relative bg-gray-50 py-20 sm:py-28 px-5 overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[var(--vgo)]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[var(--vgo)] font-bold text-sm tracking-widest uppercase mb-3">
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
              className="group relative overflow-hidden rounded-3xl border border-gray-100 shadow-sm bg-white hover:shadow-xl transition-shadow"
            >
              <div className="relative h-28 sm:h-32 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center kb-zoom-in opacity-80 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundImage: `url('${p.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-lg">
                  <p.Icon size={20} strokeWidth={2.2} className="text-red-500" />
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="text-sm text-gray-700 font-semibold leading-snug">{p.text}</div>
              </div>
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
          <div className="inline-block px-8 py-5 rounded-3xl bg-gradient-to-br from-[var(--vgo)] to-[var(--vgo-dark)] text-white shadow-2xl shadow-orange-500/30">
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
