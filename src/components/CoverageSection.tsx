"use client";
import { useLang } from "@/lib/i18n";
import { COVERAGE_CITIES, COVERAGE_LABELS } from "@/data/coverage";
export default function CoverageSection() {
  const { lang } = useLang();
  const cl = COVERAGE_LABELS[lang] ?? COVERAGE_LABELS.zh;
  const live = COVERAGE_CITIES.filter((c) => c.live);
  const soon = COVERAGE_CITIES.filter((c) => !c.live);
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
      <h3 className="font-black text-base mb-2">{cl.label}</h3>
      <p className="text-sm text-white/65 mb-5">{cl.sub}</p>
      <div className="space-y-3 mb-5">
        {live.map((city) => (
          <div key={city.key}>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="font-bold text-sm">{city.label[lang]}</span>
              <span className="text-[10px] text-green-400/70 ml-1">{cl.live_t}</span>
            </div>
            {city.areas.length > 0 && (
              <div className="text-xs text-white/50 pl-4">{city.areas.map((a) => a[lang]).join(" · ")}</div>
            )}
          </div>
        ))}
      </div>
      <div className="pt-4 border-t border-white/10">
        <p className="text-xs font-bold text-white/50 mb-2">{cl.soon_t}</p>
        <div className="flex flex-wrap gap-2">
          {soon.map((city) => (
            <span key={city.key} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/55">{city.label[lang]}</span>
          ))}
        </div>
      </div>
      <p className="text-xs text-white/40 mt-4">{cl.soon_note}</p>
    </div>
  );
}
