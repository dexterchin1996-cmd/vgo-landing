"use client";

import { useEffect } from "react";
import { useLang } from "@/lib/i18n";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useLang();

  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <main className="min-h-[70svh] flex flex-col items-center justify-center px-6 text-center">
      <h2 className="text-2xl font-bold text-white mb-4">{t("err_title")}</h2>
      <p className="text-white/50 mb-8">{t("err_desc")}</p>
      <button
        onClick={() => reset()}
        className="px-8 py-3 bg-[var(--vgo)] rounded-full font-bold text-white hover:opacity-90 transition-opacity"
      >
        {t("err_retry")}
      </button>
    </main>
  );
}
