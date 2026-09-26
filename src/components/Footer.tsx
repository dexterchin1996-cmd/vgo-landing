"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();

  const COLS = [
    {
      title: t("footer_col1"),
      links: [
        { label: t("footer_link_repair"),  href: "#features" },
        { label: t("footer_link_clean"),   href: "#features" },
        { label: t("footer_link_massage"), href: "#features" },
        { label: t("footer_link_errand"),  href: "#features" },
        { label: t("footer_link_market"),  href: "#features" },
        { label: t("footer_link_jobs"),    href: "#features" },
      ],
    },
    {
      title: t("footer_col2"),
      links: [
        { label: t("footer_link_partner_invest"), href: "/partner" },
        { label: t("footer_link_merchant"),       href: "#merchant" },
        { label: t("footer_link_tech"),           href: "#technician" },
        { label: t("footer_link_partner"),        href: "/partner" },
        { label: t("footer_link_open"),           href: "/partner" },
        { label: t("footer_link_enterprise"),     href: "/partner" },
      ],
    },
    {
      title: t("footer_col3"),
      links: [
        { label: t("footer_link_about"),    href: "/about" },
        { label: t("footer_link_faq"),      href: "/faq" },
        { label: t("footer_link_privacy"),  href: "/privacy" },
        { label: t("footer_link_terms"),    href: "/terms" },
        { label: t("footer_link_contact"),  href: "/contact" },
        { label: t("footer_link_ip"),       href: "/ip-copyright" },
      ],
    },
  ];

  return (
    <footer className="relative bg-gray-950 text-white noise overflow-hidden">
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#FF6600]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7A1F] to-[#E55A00] text-white font-black text-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                V
              </span>
              <div className="leading-none">
                <div className="font-black text-xl">VGO</div>
                <div className="text-[9px] font-semibold tracking-[0.2em] text-white/50 mt-0.5">V GO ON</div>
              </div>
            </div>
            <p className="text-sm text-white/55 leading-relaxed mb-6 max-w-xs whitespace-pre-line">
              {t("footer_tagline")}
            </p>

            <div className="flex gap-3">
              {["WhatsApp", "Facebook", "Instagram"].map((s) => (
                <a key={s} href="https://wa.me/601172691788" aria-label={s}
                   className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-xs font-bold text-white/70 hover:bg-[#FF6600] hover:text-white hover:border-[#FF6600] transition-all">
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="font-black text-sm mb-4 text-white">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("/") ? (
                      <Link href={l.href} className="text-sm text-white/55 hover:text-[var(--vgo)] transition-colors">
                        {l.label}
                      </Link>
                    ) : (
                      <a href={l.href} className="text-sm text-white/55 hover:text-[var(--vgo)] transition-colors">
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>{t("footer_copyright")}</div>
          <div className="flex items-center gap-4">
            <span>{t("footer_location")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
