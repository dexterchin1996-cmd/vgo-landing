"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useLang } from "@/lib/i18n";

function Inner() {
  const { t } = useLang();
  const sp = useSearchParams();
  const u = sp.get("u") || "";

  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-md w-full bg-[#06111d] rounded-3xl shadow-2xl p-8 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-green-50 flex items-center justify-center mb-5">
          <CheckCircle2 size={44} className="text-green-500" strokeWidth={2.5} aria-hidden="true" />
        </div>
        <h1 className="text-2xl font-black text-white mb-2">{t("vs_title")}</h1>
        <p className="text-sm text-white/60 mb-6">{t("vs_subtitle")}</p>
        {u && (
          <div className="p-4 rounded-2xl bg-[#0a0f18] mb-6">
            <div className="text-[11px] text-white/50 mb-1">{t("vs_account_label")}</div>
            <div className="text-xl font-black text-[var(--vgo)] break-all">{u}</div>
          </div>
        )}
        <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100 mb-6 text-sm text-orange-800 font-bold">
          {t("vs_bonus")}
        </div>
        <p className="text-xs text-white/50 leading-relaxed mb-6">{t("vs_desc")}</p>
        <Link
          href="/"
          className="block w-full py-4 rounded-2xl bg-gradient-to-b from-[var(--vgo)] to-[var(--vgo-dark)] text-white font-black shadow-lg shadow-orange-500/30"
        >
          {t("vs_back")}
        </Link>
      </div>
    </div>
  );
}

export default function VerifySuccess() {
  return (
    <Suspense>
      <Inner />
    </Suspense>
  );
}
