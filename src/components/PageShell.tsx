"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
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
  return (
    <main className="relative min-h-screen bg-gray-950 text-white noise overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora absolute top-0 left-1/4 w-[600px] h-[300px] rounded-full bg-[#FFB800] blur-[160px] opacity-15" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition">
          <ArrowLeft size={16} />
          <span>VGO</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 mb-12"
        >
          <p className="text-[#FFB800] font-bold text-xs tracking-widest uppercase mb-3">{label}</p>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">{title}</h1>
        </motion.div>

        <div className="prose prose-invert max-w-none pb-20">{children}</div>
      </div>

      <div className="relative z-10 border-t border-white/10 py-8 text-center text-xs text-white/40">
        <div>jason52013141018@gmail.com</div>
        <div className="mt-1">+60 11-7269 1788 · Kota Kinabalu, Sabah</div>
        <div className="mt-3">© 2026 VGO (V Go On). All Rights Reserved.</div>
      </div>
    </main>
  );
}
