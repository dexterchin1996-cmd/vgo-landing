"use client";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function LegalShell({
  label,
  title,
  version,
  summary,
  children,
}: {
  label: string;
  title: string;
  version?: string;
  summary?: { title: string; items: string[] };
  children: React.ReactNode;
}) {
  const { t } = useLang();
  return (
    <main className="min-h-screen bg-[#FAFAF7] text-gray-900">
      {/* 顶栏 */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-10 py-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[var(--vgo)] transition">
            <ArrowLeft size={16} />
            <span>VGO</span>
          </Link>
          <div className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Legal Document</div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 sm:px-10 py-10">
        {/* 文件头 */}
        <header className="bg-white border border-gray-200 rounded-2xl p-7 sm:p-9 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--vgo)] to-[var(--vgo-dark)] flex items-center justify-center shadow-lg shadow-orange-500/30">
              <FileText size={18} className="text-white" strokeWidth={2.5} />
            </div>
            <p className="text-[var(--vgo)] font-black text-[11px] tracking-[0.2em] uppercase">{label}</p>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 mb-3 leading-tight">{title}</h1>
          {version && (
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
              <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-bold">{version}</span>
              <span className="px-2.5 py-1 rounded-full bg-green-50 text-green-700 font-bold">✓ 法律有效</span>
            </div>
          )}
        </header>

        {/* 3 分钟摘要 */}
        {summary && (
          <section className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 rounded-2xl p-6 sm:p-7 mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">⏱</span>
              <h2 className="text-sm font-black tracking-widest text-orange-800 uppercase">{summary.title}</h2>
            </div>
            <ul className="space-y-2.5">
              {summary.items.map((it, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-orange-900">
                  <span className="font-black text-orange-500 shrink-0 mt-0.5">{i + 1}.</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 正文 */}
        <article className="legal-body bg-white border border-gray-200 rounded-2xl p-7 sm:p-9">{children}</article>

        {/* 页脚 */}
        <footer className="mt-10 pt-8 border-t border-gray-200 text-center">
          <div className="text-sm font-black text-gray-800 tracking-widest">VGO</div>
          <div className="mt-1 text-xs text-gray-500">VGO (V Go On) · Malaysia Home Service Platform</div>
          <div className="mt-2 text-xs text-gray-500">support.vgo@gmail.com</div>
          <div className="mt-1 text-xs text-gray-400">Kota Kinabalu, Sabah, Malaysia</div>
          <div className="mt-4 text-[11px] text-gray-400">© 2026 VGO (V Go On). All Rights Reserved.</div>
        </footer>
      </div>

      <style jsx global>{`
        .legal-body section {
          margin-bottom: 36px;
          scroll-margin-top: 80px;
        }
        .legal-body section:last-child { margin-bottom: 0; }
        .legal-body h2 {
          font-size: 18px;
          font-weight: 900;
          color: #111827;
          margin: 0 0 18px;
          padding: 0 0 12px 14px;
          border-bottom: 2px solid #f3f4f6;
          border-left: 4px solid var(--vgo);
          line-height: 1.4;
          letter-spacing: 0.01em;
        }
        .legal-body p {
          font-size: 16.5px;
          line-height: 2;
          color: #374151;
          margin: 0 0 14px;
          letter-spacing: 0.005em;
        }
        .legal-body p.sub {
          padding-left: 22px;
          color: #4b5563;
        }
        .legal-body p strong, .legal-body p b {
          color: #111827;
          font-weight: 800;
        }
        .legal-body .hl {
          background: linear-gradient(180deg, transparent 60%, #fef3c7 60%);
          padding: 0 2px;
          font-weight: 700;
          color: #111827;
        }
        .legal-body .sig-box {
          margin-top: 42px;
          padding: 22px 26px;
          background: linear-gradient(135deg, #fff7ed, #ffedd5);
          border: 2px solid #fed7aa;
          border-radius: 14px;
          font-size: 15px;
          line-height: 1.9;
          color: #7c2d12;
        }
        .legal-body .sig-box strong {
          display: block;
          font-size: 15px;
          font-weight: 900;
          color: #9a3412;
          margin-bottom: 10px;
          letter-spacing: 0.05em;
        }
        .legal-body .note-box {
          padding: 16px 20px;
          background: #eff6ff;
          border-left: 4px solid #3b82f6;
          border-radius: 8px;
          font-size: 14.5px;
          line-height: 1.8;
          color: #1e40af;
          margin: 22px 0 30px;
        }
        @media (max-width: 640px) {
          .legal-body p { font-size: 16px; line-height: 1.9; }
          .legal-body h2 { font-size: 17px; }
        }
      `}</style>
    </main>
  );
}
