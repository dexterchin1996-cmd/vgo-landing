"use client";
import { motion } from "motion/react";
import { User, Store, Wrench, Handshake } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function Roles() {
  const { t } = useLang();

  const ROLES = [
    {
      id: "customer", tag: t("role_customer_tag"), Icon: User,
      title: t("role_customer_title"),
      desc: t("role_customer_desc"),
      points: [t("role_customer_p1"), t("role_customer_p2"), t("role_customer_p3"), t("role_customer_p4")],
      cta: t("role_customer_cta"),
      href: "/how-it-works/customer",
      img: "/shared/s03.jpg",
    },
    {
      id: "merchant", tag: t("role_merchant_tag"), Icon: Store,
      title: t("role_merchant_title"),
      desc: t("role_merchant_desc"),
      points: [t("role_merchant_p1"), t("role_merchant_p2"), t("role_merchant_p3"), t("role_merchant_p4")],
      cta: t("role_merchant_cta"),
      href: "/merchant",
      img: "/shared/s06.jpg",
    },
    {
      id: "technician", tag: t("role_tech_tag"), Icon: Wrench,
      title: t("role_tech_title"),
      desc: t("role_tech_desc"),
      points: [t("role_tech_p1"), t("role_tech_p2"), t("role_tech_p3"), t("role_tech_p4")],
      cta: t("role_tech_cta"),
      href: "/technician",
      img: "/shared/s02.jpg",
    },
    {
      id: "partner", tag: t("role_partner_tag"), Icon: Handshake,
      title: t("role_partner_title"),
      desc: t("role_partner_desc"),
      points: [t("role_partner_p1"), t("role_partner_p2"), t("role_partner_p3"), t("role_partner_p4")],
      cta: t("role_partner_cta"),
      href: "/partner",
      img: "/shared/s04.jpg",
    },
  ];

  return (
    <section id="roles" className="relative bg-[#06111d] py-20 sm:py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[var(--vgo)] font-bold text-sm tracking-widest uppercase mb-3">{t("roles_label")}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {t("roles_title")}
          </h2>
          <p className="mt-4 text-white/50 text-sm sm:text-base max-w-2xl mx-auto">
            {t("roles_sub")}
          </p>
        </motion.div>

        <div className="space-y-6">
          {ROLES.map((r, i) => (
            <motion.div
              key={r.id}
              id={r.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-[28px] border border-white/5 group"
            >
              <div className="grid md:grid-cols-3">
                <div className="relative h-56 md:h-auto overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url('${r.img}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent" />
                  <div className="absolute top-5 left-5 w-14 h-14 rounded-2xl bg-[#06111d]/95 backdrop-blur flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                    <r.Icon size={28} strokeWidth={2.2} className="text-[var(--vgo)]" />
                  </div>
                </div>

                <div className="md:col-span-2 p-7 sm:p-10 bg-[#0a0f18]">
                  <p className="text-[var(--vgo)] font-black text-sm tracking-wide mb-2">{r.tag}</p>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">{r.title}</h3>
                  <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-5">{r.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {r.points.map((pt) => (
                      <span key={pt} className="px-3 py-1.5 rounded-full bg-[#06111d] border border-white/10 text-xs font-semibold text-white/80">
                        ✓ {pt}
                      </span>
                    ))}
                  </div>
                  <a
                    href={r.href}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[var(--vgo)] text-white font-bold text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] shadow-orange-500/30 hover:bg-[var(--vgo-dark)] hover:scale-105 transition-[transform,box-shadow,opacity,width,background-color]"
                  >
                    {r.cta}
                    <span>→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
