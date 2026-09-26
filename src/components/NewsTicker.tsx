"use client";
import { useLang } from "@/lib/i18n";

export default function NewsTicker() {
  const { t } = useLang();
  const NEWS = [t("news_1"), t("news_2"), t("news_3"), t("news_4"), t("news_5")];
  const items = [...NEWS, ...NEWS];

  return (
    <section id="news" className="relative bg-gradient-to-r from-[#E55A00] to-[#FF7A1F] text-white overflow-hidden scroll-mt-20">
      <div className="flex items-center">
        <div className="shrink-0 px-4 sm:px-6 py-3 bg-black/20 font-bold text-sm flex items-center gap-2 z-10">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>{t("news_label")}</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="marquee flex whitespace-nowrap">
            {items.map((n, i) => (
              <span key={i} className="px-6 py-3 text-sm font-medium inline-flex items-center">
                {n}
                <span className="ml-6 text-white/50">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
