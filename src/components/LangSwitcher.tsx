"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe, Check } from "lucide-react";
import { useLang, Lang } from "@/lib/i18n";

const LANGS: { code: Lang; label: string; native: string }[] = [
  { code: "zh", label: "中文", native: "简体中文" },
  { code: "en", label: "English", native: "English" },
  { code: "ms", label: "Bahasa Melayu", native: "Bahasa Melayu" },
];

export default function LangSwitcher({ scrolled = false }: { scrolled?: boolean }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const current = LANGS.find((l) => l.code === lang);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Language"
        className={`flex items-center gap-1.5 px-3 py-2 rounded-full border transition-all ${
          scrolled
            ? "bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200"
            : "bg-white/10 border-white/20 backdrop-blur-md text-white hover:bg-white/20"
        }`}
      >
        <Globe size={16} strokeWidth={2} />
        <span className="text-xs font-bold uppercase">{lang === "ms" ? "BM" : lang}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 overflow-hidden z-[80]"
          >
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 transition"
              >
                <span className="flex flex-col items-start">
                  <span className="font-semibold text-gray-900">{l.label}</span>
                  <span className="text-[10px] text-gray-400">{l.native}</span>
                </span>
                {lang === l.code && <Check size={16} className="text-[var(--vgo)]" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
