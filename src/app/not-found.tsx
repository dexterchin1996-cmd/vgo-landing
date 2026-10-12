import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-5 relative overflow-hidden">
      <div className="absolute -top-32 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,102,0,.22), transparent 70%)" }} />
      <div className="absolute -bottom-32 -right-24 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(96,165,250,.18), transparent 70%)" }} />

      <div className="relative text-center max-w-lg">
        <div className="text-[100px] sm:text-[140px] font-black leading-none bg-gradient-to-b from-[#FFD24A] to-[#FF6600] bg-clip-text text-transparent">404</div>
        <h1 className="text-2xl sm:text-3xl font-black mt-2">页面走丢了</h1>
        <p className="text-sm text-white/60 mt-3 leading-relaxed">你要找的页面不存在，或已经被移动。<br/>回到首页继续浏览吧。</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-black shadow-[0_10px_40px_-6px_rgba(255,150,0,0.65)] hover:scale-[1.03] active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">回到首页</Link>
          <Link href="/contact/" className="text-sm text-white/60 hover:text-white transition">联系我们 →</Link>
        </div>
      </div>
    </main>
  );
}
