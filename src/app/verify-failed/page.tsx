"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";

const MSG_KEYS: Record<string, string> = {
  missing: "vf_missing",
  invalid: "vf_invalid",
  expired: "vf_expired",
  unknown: "vf_unknown",
};

function Inner() {
  const { t } = useLang();
  const sp = useSearchParams();
  const e = sp.get("e") || "unknown";
  const key = MSG_KEYS[e] || MSG_KEYS.unknown;

  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-md w-full bg-[#06111d] rounded-3xl shadow-2xl p-8 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-red-50 flex items-center justify-center mb-5">
          <AlertCircle size={44} className="text-red-500" strokeWidth={2.5} aria-hidden="true" />
        </div>
        <h1 className="text-2xl font-black text-white mb-2">{t("vf_title")}</h1>
        <p className="text-sm text-white/60 mb-6">{t(key)}</p>
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100 mb-6 text-xs text-amber-800 leading-relaxed">
          {t("vf_help")}
          <br />
          support.vgo@gmail.com · WhatsApp +601172691788
        </div>
        <Link
          href="/"
          className="block w-full py-4 rounded-2xl bg-gradient-to-b from-[var(--vgo)] to-[var(--vgo-dark)] text-white font-black shadow-lg shadow-orange-500/30"
        >
          {t("vf_back")}
        </Link>
      </div>
    </div>
  );
}

export default function VerifyFailed() {
  return (
    <Suspense>
      <Inner />
    </Suspense>
  );
}
