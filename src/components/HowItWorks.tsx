"use client";
import { motion } from "motion/react";
import { UserPlus, Smartphone, MousePointerClick, CheckCircle2 } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function HowItWorks() {
  const { t } = useLang();

  const STEPS = [
    { num: "01", Icon: UserPlus,          title: t("step_1"), desc: t("step_1_desc"), img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80" },
    { num: "02", Icon: Smartphone,        title: t("step_2"), desc: t("step_2_desc"), img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80" },
    { num: "03", Icon: MousePointerClick, title: t("step_3"), desc: t("step_3_desc"), img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80" },
    { num: "04", Icon: CheckCircle2,      title: t("step_4"), desc: t("step_4_desc"), img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80" },
  ];

  return (
    <section className="relative bg-gray-950 py-20 sm:py-28 px-5 overflow-hidden noise">
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora absolute top-1/4 -left-24 w-96 h-96 bg-[#FF6600]/40 rounded-full blur-[140px]" />
        <div className="aurora-2 absolute bottom-0 -right-24 w-96 h-96 bg-[#FF8A3D]/30 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#FF6600] font-bold text-sm tracking-widest uppercase mb-3">
            {t("flow_label")}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {t("flow_title")}
          </h2>
          <p className="mt-4 text-white/50 text-sm sm:text-base max-w-2xl mx-auto">
            {t("flow_sub")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, type: "spring", stiffness: 70 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#FF6600]/40 transition-all duration-300">
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
                  <div className="absolute top-3 right-4 text-4xl font-black text-white/40 select-none">
                    {s.num}
                  </div>
                </div>

                <div className="relative p-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF7A1F] to-[#E55A00] flex items-center justify-center mb-4 -mt-10 relative shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                    <s.Icon size={22} strokeWidth={2.2} className="text-white" />
                  </div>
                  <h3 className="text-base font-black text-white mb-1.5">{s.title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed">{s.desc}</p>
                </div>
              </div>

              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 text-white/20 text-xl z-10">→</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
