import MalaysiaMap from "@/components/MalaysiaMap";

export default function MapPreview() {
  return (
    <div className="min-h-screen bg-[#FFFBF7] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-black text-[#1A1A1A] mb-2 text-center">
          VGO 全马覆盖地图
        </h1>
        <p className="text-sm text-gray-500 mb-8 text-center">
          点击州查看详情，按 Esc 返回
        </p>
        <MalaysiaMap />
      </div>
    </div>
  );
}
