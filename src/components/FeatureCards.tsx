"use client";
import { motion } from "motion/react";
import { Wrench, Sparkles, Heart, Truck, ShoppingBag, Briefcase, Plus } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function FeatureCards() {
  const { t } = useLang();

  const SERVICES = [
    { id: "repair", Icon: Wrench, title: t("svc_repair"), desc: t("svc_repair_desc"), span: "col-span-2 row-span-2", big: true,
      img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80" },
    { id: "clean", Icon: Sparkles, title: t("svc_clean"), desc: t("svc_clean_desc"), span: "col-span-2",
      img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80" },
    { id: "massage", Icon: Heart, title: t("svc_massage"), desc: t("svc_massage_desc"), span: "",
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80" },
    { id: "errand", Icon: Truck, title: t("svc_errand"), desc: t("svc_errand_desc"), span: "",
      img: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80" },
    { id: "market", Icon: ShoppingBag, title: t("svc_market"), desc: t("svc_market_desc"), span: "col-span-2",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" },
    { id: "jobs", Icon: Briefcase, title: t("svc_jobs"), desc: t("svc_jobs_desc"), span: "",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80" },
    { id: "more", Icon: Plus, title: t("svc_more"), desc: t("svc_more_desc"), span: "", highlight: true },
  ];

  return (
    <section id="features" className="relative bg-white py-20 sm:py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[var(--vgo)] font-bold text-sm tracking-widest uppercase mb-3">
            {t("sec_services_label")}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            {t("sec_services_title")}
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            {t("sec_services_sub")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] sm:auto-rows-[200px]">
          {SERVICES.map((s, i) => (
            <motion.a
              key={s.id}
              href="#download"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07, type: "spring", stiffness: 80 }}
              whileHover={{ y: -4 }}
              className={`${s.span} group relative overflow-hidden rounded-3xl ${
                s.highlight ? "bg-gradient-to-br from-[var(--vgo)] to-[var(--vgo-dark)]" : "bg-gray-900"
              } shadow-lg hover:shadow-2xl transition-all duration-500`}
            >
              {s.img && (
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-75 group-hover:scale-110 transition-all duration-700"
                  style={{ backgroundImage: `url('${s.img}')` }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="relative h-full flex flex-col justify-end p-5">
                <div className={`${s.big ? "w-14 h-14" : "w-11 h-11"} rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <s.Icon size={s.big ? 26 : 20} strokeWidth={2.2} className="text-white" />
                </div>
                <h3 className={`font-black text-white ${s.big ? "text-2xl sm:text-3xl" : "text-lg"}`}>
                  {s.title}
                </h3>
                <p className="text-xs text-white/75 mt-1">{s.desc}</p>
                <div className="mt-2 flex items-center text-xs font-bold text-[#FFA05A] opacity-0 group-hover:opacity-100 transition-opacity">
                  {t("svc_action")} <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
