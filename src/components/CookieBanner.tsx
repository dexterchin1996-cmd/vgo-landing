"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

const KEY = "vgo_cookie_consent_v1";

const TEXT = {
  zh: {
    text: "我们使用 Cookie 提升体验、分析流量。继续浏览代表你同意我们的",
    privacy: "隐私政策",
    accept: "同意",
    decline: "拒绝",
  },
  en: {
    text: "We use cookies to improve experience and analyze traffic. By continuing, you agree to our",
    privacy: "Privacy Policy",
    accept: "Accept",
    decline: "Decline",
  },
  ms: {
    text: "Kami menggunakan kuki untuk meningkatkan pengalaman dan menganalisis trafik. Dengan meneruskan, anda bersetuju dengan",
    privacy: "Dasar Privasi",
    accept: "Terima",
    decline: "Tolak",
  },
};

export default function CookieBanner() {
  const { lang } = useLang();
  const [show, setShow] = useState(false);
  const t = TEXT[lang as keyof typeof TEXT] || TEXT.zh;

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {}
  }, []);

  function choose(v: "accept" | "decline") {
    try { localStorage.setItem(KEY, v); } catch {}
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[80] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100 p-5">
      <p className="text-sm text-gray-600 leading-relaxed">
        {t.text}{" "}
        <Link href="/privacy" className="text-[#FF6600] font-semibold underline">
          {t.privacy}
        </Link>
        。
      </p>
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => choose("accept")}
          className="flex-1 bg-[#FF6600] text-white font-bold py-2.5 rounded-xl text-sm"
        >
          {t.accept}
        </button>
        <button
          onClick={() => choose("decline")}
          className="flex-1 bg-gray-100 text-gray-600 font-bold py-2.5 rounded-xl text-sm"
        >
          {t.decline}
        </button>
      </div>
    </div>
  );
}
