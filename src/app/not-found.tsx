"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useLang();

  return (
    <main className="min-h-[70svh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-7xl font-black text-[var(--vgo)] mb-4">404</h1>
      <h2 className="text-xl font-bold text-white mb-2">{t("nf_title")}</h2>
      <p className="text-white/50 mb-8">{t("nf_desc")}</p>
      <Link
        href="/"
        className="px-8 py-3 bg-[var(--vgo)] rounded-full font-bold text-white hover:opacity-90 transition-opacity"
      >
        {t("nf_back")}
      </Link>
    </main>
  );
}
