"use client";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();

  const COLS = [
    {
      title: t("footer_col1"),
      links: [
        t("footer_link_repair"),
        t("footer_link_clean"),
        t("footer_link_massage"),
        t("footer_link_errand"),
        t("footer_link_market"),
        t("footer_link_jobs"),
      ],
    },
    {
      title: t("footer_col2"),
      links: [
        t("footer_link_merchant"),
        t("footer_link_tech"),
        t("footer_link_partner"),
        t("footer_link_open"),
        t("footer_link_enterprise"),
        t("footer_link_careers"),
      ],
    },
    {
      title: t("footer_col3"),
      links: [
        t("footer_link_about"),
        t("footer_link_faq"),
        t("footer_link_privacy"),
        t("footer_link_terms"),
        t("footer_link_contact"),
        t("footer_link_feedback"),
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
                <a key={s} href="#" aria-label={s}
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
                  <li key={l}>
                    <a href="#" className="text-sm text-white/55 hover:text-[#FF6600] transition-colors">
                      {l}
                    </a>
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
            <span className="hidden sm:inline">·</span>
            <span>{t("footer_ssm")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
