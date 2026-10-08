import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[#0F172A] text-white">
      <div className="w-20 h-20 rounded-2xl bg-white text-[#1B2A47] flex items-center justify-center text-3xl font-black mb-8">V&apos;GO</div>
      <h1 className="text-6xl font-black mb-3">404</h1>
      <p className="text-white/70 text-lg mb-2">页面走丢了</p>
      <p className="text-white/50 text-sm mb-10">你要找的页面不存在，或已经搬家。</p>
      <div className="flex gap-3">
        <Link href="/" className="px-6 py-3 rounded-xl bg-[#FF6600] text-white font-bold">回首页</Link>
        <Link href="/contact" className="px-6 py-3 rounded-xl bg-white/10 text-white font-bold">联系我们</Link>
      </div>
    </div>
  );
}
