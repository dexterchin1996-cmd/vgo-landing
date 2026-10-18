"use client";
import { useEffect, useRef, useState } from "react";
import { createMalaysiaMap } from "krackedmaps";
import { REGIONS } from "@/data/regions";

type MalaysiaMapInstance = ReturnType<typeof createMalaysiaMap>;

export default function MalaysiaMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MalaysiaMapInstance | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const map = createMalaysiaMap(containerRef.current, {
      theme: "blueprint",
      panel: true,
      tooltip: true,
      showDistricts: true,
      interactive: true,
      keyboard: true,
      labels: false,
    });
    mapRef.current = map;

    // 根据 regions.ts 数据为各州着色
    // live=1（最高），coming=0.5（中），planned=0.1（低）
    const data: Record<string, number> = {};
    REGIONS.forEach((s) => {
      if (s.status === "live") data[s.id] = 1;
      else if (s.status === "coming") data[s.id] = 0.5;
      else data[s.id] = 0.1;
    });
    map.setData(data, { from: "#34c3a6", to: "#ffcc33" });

    // 监听选中事件（krackedmaps 只支持 select，payload.slug 为空表示取消）
    map.on("select", (payload: { slug?: string | null }) => {
      setSelected(payload?.slug ?? null);
    });

    return () => {
      map.destroy();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        ref={containerRef}
        className="w-full rounded-2xl overflow-hidden"
        style={{ minHeight: 500, background: "#0F1620" }}
      />
      <p className="text-xs text-gray-500 mt-2 text-center">
        数据源：regions.ts · 点击州查看详情，按 Esc 返回
      </p>
    </div>
  );
}
