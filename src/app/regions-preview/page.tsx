"use client";
import { REGIONS } from "@/data/regions";

export default function RegionsPreview() {
  const live = REGIONS.filter(s => s.status === "live");
  const coming = REGIONS.filter(s => s.status === "coming");
  const planned = REGIONS.filter(s => s.status === "planned");

  return (
    <div className="min-h-screen bg-[#FFFBF7] p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-black text-[#1A1A1A] mb-2">VGO 全马覆盖地图</h1>
        <p className="text-sm text-gray-500 mb-8">数据源：src/data/regions.ts · 全马 {REGIONS.length} 个州</p>

        {/* 已开通 */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <h2 className="text-xl font-black">已开通 ({live.length})</h2>
          </div>
          <div className="space-y-3">
            {live.map(s => (
              <div key={s.id} className="p-4 rounded-2xl bg-green-50 border border-green-200">
                <div className="font-bold text-green-900 mb-2">{s.label.zh} · {s.label.en}</div>
                <div className="flex flex-wrap gap-1.5">
                  {s.cities.map(c => (
                    <span key={c.id} className={"text-xs px-2.5 py-1 rounded-full " + (c.status === "live" ? "bg-green-500 text-white" : "bg-white text-gray-500 border")}>
                      {c.label.zh} {c.status === "live" ? "✓" : ""}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 即将开通 */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            <h2 className="text-xl font-black">即将开通 ({coming.length})</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {coming.map(s => (
              <div key={s.id} className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                <div className="font-bold text-amber-900 mb-2 text-sm">{s.label.zh} · {s.label.en}</div>
                <div className="text-xs text-gray-600">{s.cities.length} 个城市</div>
              </div>
            ))}
          </div>
        </section>

        {/* 计划中 */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-gray-400"></span>
            <h2 className="text-xl font-black">计划中 ({planned.length})</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {planned.map(s => (
              <div key={s.id} className="p-3 rounded-xl bg-white border text-sm">
                <div className="font-bold text-gray-700">{s.label.zh}</div>
                <div className="text-xs text-gray-400">{s.label.en}</div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-12 pt-6 border-t text-xs text-gray-400">
          Total: {live.length} live + {coming.length} coming + {planned.length} planned = {REGIONS.length} states
        </footer>
      </div>
    </div>
  );
}
