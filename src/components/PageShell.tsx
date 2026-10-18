"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useLang } from "@/lib/i18n";

export default function PageShell({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  const { t } = useLang();
  const reduce = useReducedMotion();

  return (
    <main className="relative min-h-screen bg-[#06111D] text-white overflow-hidden">
      {/* 极光背景底座 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,121,0,0.12)_0%,transparent_70%)] blur-[60px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 pt-12">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
          <ArrowLeft size={16} />
          <span>V&apos;GO</span>
        </Link>

        <motion.div
          {...(reduce ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } })}
          className="mt-12 mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF7A00]/30 bg-[#FF7A00]/10 px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A00] animate-pulse" />
            <p className="text-[#FF7A00] font-bold text-[11px] tracking-widest uppercase m-0">{label}</p>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">{title}</h1>
        </motion.div>

        {/* 玻璃卡片内容层 */}
        <motion.div
          {...(reduce ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.1 } })}
          className="rounded-[24px] border border-white/10 bg-white/[0.02] backdrop-blur-[20px] p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.3)] pb-24"
        >
          <div className="prose prose-invert prose-headings:font-black prose-headings:tracking-tight prose-p:text-white/60 prose-p:leading-relaxed prose-a:text-[#FF7A00] hover:prose-a:text-[#FF9A33] max-w-none">
            {children}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
