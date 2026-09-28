"use client";
import { motion, AnimatePresence } from "motion/react";
import { Home, Wrench, Sparkles, Heart, Truck, ShoppingBag, Briefcase, Megaphone, Info, X, Globe, Check } from "lucide-react";
import { useState } from "react";
import { useLang, Lang } from "@/lib/i18n";

const LANGS: { code: Lang; label: string; native: string }[] = [
  { code: "zh", label: "中文", native: "简体中文" },
  { code: "en", label: "English", native: "English" },
  { code: "ms", label: "Bahasa Melayu", native: "Bahasa Melayu" },
];

export default function SideDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t, lang, setLang } = useLang();
  const [langOpen, setLangOpen] = useState(false);

  const MENU = [
    { icon: Home,         label: t("nav_home"),         href: "#home" },
    { icon: Wrench,       label: t("drawer_repair"),    href: "#features" },
    { icon: Sparkles,     label: t("drawer_clean"),     href: "#features" },
    { icon: Heart,        label: t("drawer_massage"),   href: "#features" },
    { icon: Truck,        label: t("drawer_errand"),    href: "#features" },
    { icon: ShoppingBag,  label: t("drawer_market"),    href: "#features" },
    { icon: Briefcase,    label: t("drawer_jobs"),      href: "#features" },
    { icon: Megaphone,    label: t("drawer_news"),      href: "#news" },
    { icon: Info,         label: t("drawer_about"),     href: "#about" },
  ];

  const currentLang = LANGS.find((l) => l.code === lang);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm md:hidden"
          />
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 260 }}
            className="fixed top-0 left-0 bottom-0 z-[70] w-[82%] max-w-sm bg-white shadow-2xl flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <img src="/logo-bg.png" alt="V'GO" className="w-9 h-9 object-contain shrink-0" />
                <div className="flex flex-col leading-none">
                  <span className="font-black text-lg text-gray-900">Smart. Simple. Sorted.</span>
                  <span className="text-[8px] font-semibold tracking-[0.2em] text-gray-400">Smart. Simple. Sorted.</span>
                </div>
              </div>
              <button onClick={onClose} aria-label="close" className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center text-gray-500">
                <X size={22} strokeWidth={2.5} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-3">
              {MENU.map((m, i) => (
                <motion.a
                  key={m.label}
                  href={m.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.035 }}
                  className="flex items-center gap-3.5 px-5 py-3.5 text-gray-700 hover:bg-orange-50 hover:text-[var(--vgo)] transition group"
                >
                  <m.icon size={20} strokeWidth={2} className="text-gray-400 group-hover:text-[var(--vgo)] transition-colors" />
                  <span className="font-medium text-[15px]">{m.label}</span>
                </motion.a>
              ))}
            </nav>

            <div className="p-5 border-t border-gray-100 space-y-3">
              {/* 语言切换：地球图标 */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 hover:border-gray-300 transition"
                >
                  <span className="flex items-center gap-2.5">
                    <Globe size={18} strokeWidth={2} className="text-gray-500" />
                    <span className="text-sm font-semibold text-gray-700">{currentLang?.label}</span>
                  </span>
                  <span className="text-[10px] text-gray-400 font-semibold uppercase">{lang === "ms" ? "BM" : lang}</span>
                </button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-10"
                    >
                      {LANGS.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => { setLang(l.code); setLangOpen(false); }}
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

              <a
                href="#download"
                onClick={onClose}
                className="block text-center py-3.5 rounded-xl bg-[var(--vgo)] text-white font-bold shadow-lg pulse-glow"
              >
                {t("nav_download")}
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
