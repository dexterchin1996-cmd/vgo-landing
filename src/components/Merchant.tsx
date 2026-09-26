"use client";
import { motion } from "motion/react";
import { Rocket, TrendingUp, Bell, Wallet, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function Merchant() {
  const { t } = useLang();

  const BENEFITS = [
    { Icon: Rocket,     title: t("merchant_b1"), desc: t("merchant_b1_desc") },
    { Icon: TrendingUp, title: t("merchant_b2"), desc: t("merchant_b2_desc") },
    { Icon: Bell,       title: t("merchant_b3"), desc: t("merchant_b3_desc") },
    { Icon: Wallet,     title: t("merchant_b4"), desc: t("merchant_b4_desc") },
  ];

  const FLOW = [
    { step: "01", title: t("merchant_f1"), desc: t("merchant_f1_desc") },
    { step: "02", title: t("merchant_f2"), desc: t("merchant_f2_desc") },
    { step: "03", title: t("merchant_f3"), desc: t("merchant_f3_desc") },
  ];

  return (
    <section id="merchant" className="relative bg-gray-50 py-20 sm:py-28 px-5 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--vgo)]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[var(--vgo)] font-bold text-sm tracking-widest uppercase mb-3">{t("merchant_label")}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              {t("merchant_title1")}
              <br />
              {t("merchant_title2")}
            </h2>
            <p className="mt-5 text-gray-600 text-base leading-relaxed">{t("merchant_desc")}</p>

            <div className="mt-7 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80"
                alt="Merchant"
                className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="mt-7 grid grid-cols-2 gap-4">
              {BENEFITS.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-4 rounded-2xl bg-white border border-gray-100 hover:border-[var(--vgo)]/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-3">
                    <b.Icon size={20} strokeWidth={2.2} className="text-[var(--vgo)]" />
                  </div>
                  <div className="font-bold text-gray-900 text-sm mb-1">{b.title}</div>
                  <div className="text-xs text-gray-500">{b.desc}</div>
                </motion.div>
              ))}
            </div>

            <a
              href="#download"
              className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-[var(--vgo)] text-white font-bold shadow-lg shadow-orange-500/30 hover:bg-[var(--vgo-dark)] hover:scale-105 transition-all pulse-glow"
            >
              {t("merchant_cta")}
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative p-8 rounded-[32px] bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden noise">
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-[var(--vgo)]/30 rounded-full blur-[100px]" />

              <div className="relative">
                <p className="text-xs font-bold text-[var(--vgo)] tracking-widest uppercase mb-2">
                  {t("merchant_flow_label")}
                </p>
                <h3 className="text-2xl font-black mb-8">{t("merchant_flow_title")}</h3>

                <div className="space-y-6">
                  {FLOW.map((f) => (
                    <div key={f.step} className="flex gap-4 items-start">
                      <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur border border-white/15 flex items-center justify-center font-black text-[var(--vgo)]">
                        {f.step}
                      </div>
                      <div className="pt-1">
                        <div className="font-bold text-white mb-1">{f.title}</div>
                        <div className="text-sm text-white/60">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-sm">
                  <span className="text-white/60">{t("merchant_audit")}</span>
                  <span className="font-bold text-[var(--vgo)]">{t("merchant_audit_time")}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
