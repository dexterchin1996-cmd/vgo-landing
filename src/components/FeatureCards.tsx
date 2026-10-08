"use client";
import { motion } from "motion/react";
import { Wrench, Sparkles, Heart, Truck, ShoppingBag, Briefcase, ArrowRight, Info } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { useState } from "react";
import ServiceModal from "./ServiceModal";
import { SERVICES as SERVICE_DATA, ServiceItem } from "@/data/services";

export default function FeatureCards() {
  const { t, lang } = useLang();
  const [modal, setModal] = useState<ServiceItem | null>(null);

  const SERVICES = [
    { id: "repair",  Icon: Wrench,      titleKey: "svc_repair",  descKey: "svc_repair_desc",  img: "/features/repair.jpg"  },
    { id: "clean",   Icon: Sparkles,    titleKey: "svc_clean",   descKey: "svc_clean_desc",   img: "/features/clean.jpg"   },
    { id: "massage", Icon: Heart,       titleKey: "svc_massage", descKey: "svc_massage_desc", img: "/features/massage.jpg" },
    { id: "errand",  Icon: Truck,       titleKey: "svc_errand",  descKey: "svc_errand_desc",  img: "/features/errand.jpg"  },
    { id: "market",  Icon: ShoppingBag, titleKey: "svc_market",  descKey: "svc_market_desc",  img: "/features/market.jpg"  },
    { id: "jobs",    Icon: Briefcase,   titleKey: "svc_jobs",    descKey: "svc_jobs_desc",    img: "/features/jobs.jpg"    },
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06, type: "spring", stiffness: 80 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[4/5] sm:aspect-[4/3]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-85 group-hover:kb-zoom-in transition-all duration-700"
                style={{ backgroundImage: `url('${s.img}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-4 sm:p-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                  <s.Icon size={20} strokeWidth={2.2} className="text-white" />
                </div>
                <h3 className="font-black text-white text-base sm:text-xl leading-tight">
                  {t(s.titleKey as any)}
                </h3>
                <p className="text-[11px] sm:text-xs text-white/75 mt-0.5">{t(s.descKey as any)}</p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const data = SERVICE_DATA[lang].items.find((x) => x.id === s.id);
                    if (data) setModal(data);
                  }}
                  className="mt-2 inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-[#FFA05A] hover:text-white transition-colors"
                >
                  <Info size={12} /> {t("svc_more_info" as any) || "更多详细"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href="#download"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[var(--vgo)] text-white font-black shadow-lg shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all"
          >
            {t("svc_more")} 30+
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
      <ServiceModal item={modal} onClose={() => setModal(null)} />
    </section>
  );
}
