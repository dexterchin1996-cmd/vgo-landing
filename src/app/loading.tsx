export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center text-white font-black text-2xl shadow-[0_10px_30px_-6px_rgba(255,150,0,0.3)]">
            V
          </div>
          <div className="absolute inset-0 rounded-2xl bg-[#FF6600] animate-ping opacity-30" />
        </div>
        <p className="text-sm text-white/50 tracking-widest">加载中...</p>
      </div>
    </main>
  );
}
