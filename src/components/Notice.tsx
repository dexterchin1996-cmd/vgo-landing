"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Gift, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

const C = {
  zh: {
    tag: "新用户专享",
    title: "注册即送 RM80",
    sub: "上门检查券",
    desc: "限首批 1000 名，先到先得",
    cta: "立即领取",
    hide: "今天不再显示",
  },
  en: {
    tag: "New User Offer",
    title: "Get RM80 on Sign Up",
    sub: "Home Check Voucher",
    desc: "Limited to first 1,000 users",
    cta: "Claim Now",
    hide: "Don't show today",
  },
  ms: {
    tag: "Tawaran Pengguna Baharu",
    title: "Dapat RM80 Bila Daftar",
    sub: "Baucar Pemeriksaan Rumah",
    desc: "Terhad kepada 1,000 pengguna terawal",
    cta: "Tuntut Sekarang",
    hide: "Jangan tunjuk hari ini",
  },
} as const;

const KEY = "vgo_notice_hide_until";

export default function Notice() {
  const { lang } = useLang();
  const c = C[lang as keyof typeof C] ?? C.en;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hideUntil = parseInt(localStorage.getItem(KEY) || "0", 10);
    if (Date.now() < hideUntil) return;
    const timer = setTimeout(() => setOpen(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const close = () => setOpen(false);

  const closeToday = () => {
    localStorage.setItem(KEY, String(Date.now() + 24 * 60 * 60 * 1000));
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ type: "spring", damping: 24 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-96 z-[150]"
        >
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/30 border border-gray-100">
            <button
              onClick={close}
              aria-label="close"
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center text-white transition z-20"
            >
              <X size={15} strokeWidth={2.5} />
            </button>

            {/* 场景背景图 */}
            <div className="relative h-32 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                alt="Technician at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--vgo)] flex items-center justify-center shadow-lg">
                  <Gift size={16} strokeWidth={2.5} className="text-white" />
                </div>
                <span className="text-[10px] font-black tracking-widest uppercase text-white/95 bg-black/30 backdrop-blur px-2 py-1 rounded-full">
                  {c.tag}
                </span>
              </div>
            </div>

            {/* 文案 + CTA */}
            <div className="p-5">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-black text-gray-900">{c.title}</span>
              </div>
              <div className="text-sm font-bold text-[var(--vgo)] mb-1">{c.sub}</div>
              <div className="text-xs text-gray-500 mb-4">{c.desc}</div>

              <a
                href="#download"
                onClick={close}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-b from-[var(--vgo)] to-[var(--vgo-dark)] text-white font-black text-sm shadow-lg shadow-orange-500/30 hover:brightness-110 active:scale-95 transition"
              >
                {c.cta}
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>

              <label className="flex items-center gap-2 mt-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  onChange={(e) => { if (e.target.checked) closeToday(); }}
                  className="w-3.5 h-3.5 accent-[var(--vgo)]"
                />
                <span className="text-[11px] text-gray-500">{c.hide}</span>
              </label>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
