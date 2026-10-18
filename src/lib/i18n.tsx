"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { TRANSLATIONS, type Lang, type TransKey } from "@/lib/translations";
export { TRANSLATIONS };
export type { Lang, TransKey };

const setLangCookie = (l: Lang) => {
  if (typeof document === "undefined") return;
  document.cookie = "vgo_lang=" + l + "; path=/; max-age=31536000; SameSite=Lax";
};

const LangCtx = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: TransKey) => string;
}>({
  lang: "zh",
  setLang: () => {},
  t: (k) => (TRANSLATIONS.zh as Record<string, string>)[k],
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. 用户手动选过 → 优先用他的选择
    const saved = localStorage.getItem("vgo_lang");
    if (saved === "zh" || saved === "en" || saved === "ms") {
      setLangState(saved);
      setLangCookie(saved);
      document.documentElement.setAttribute("data-lang", saved);
      return;
    }

    // 2. 没选过 → 读浏览器语言自动识别
    // 读浏览器语言偏好列表（按优先级）
    const langs = (navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || "en"]).map(l => String(l).toLowerCase());

    let detected: Lang = "en"; // fallback 英文，检测不到设备语言时用
    for (const l of langs) {
      if (l.startsWith("zh")) { detected = "zh"; break; }
      if (l.startsWith("ms") || l.startsWith("id")) { detected = "ms"; break; }
      if (l.startsWith("en")) { detected = "en"; break; }
    }

    setLangState(detected);
    setLangCookie(detected);
    document.documentElement.setAttribute("data-lang", detected);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    setLangCookie(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("vgo_lang", l);
      document.documentElement.setAttribute("data-lang", l);
    }
  };

  const t = (k: TransKey) => (TRANSLATIONS[lang] as Record<string, string>)[k] ?? (TRANSLATIONS.zh as Record<string, string>)[k];

  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);
