"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Rocket } from "lucide-react";
import { useLang } from "@/lib/i18n";

type Soon = "customer" | "merchant" | "tech" | "general";

export default function ComingSoon() {
  const { t } = useLang();
  const [type, setType] = useState<Soon | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      let kind: Soon | null = null;
      if (href === "#download") kind = "customer";
      else if (href === "#merchant") kind = "merchant";
      else if (href === "#technician") kind = "tech";
      else if (href === "#" || href === "") kind = "general";
      if (!kind) return;
      e.preventDefault();
      setType(kind);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    if (!type) return;
    const timer = setTimeout(() => setType(null), 5000);
    return () => clearTimeout(timer);
  }, [type]);

  const MESSAGES: Record<Soon, { title: string; desc: string }> = {
    customer: { title: t("soon_customer_title"), desc: t("soon_customer_desc") },
    merchant: { title: t("soon_merchant_title"), desc: t("soon_merchant_desc") },
    tech:     { title: t("soon_tech_title"),     desc: t("soon_tech_desc") },
    general:  { title: t("soon_general_title"),  desc: t("soon_general_desc") },
  };

  return (
    <AnimatePresence>
      {type && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-5 bg-black/60 backdrop-blur-sm"
          onClick={() => setType(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-sm w-full p-8 rounded-3xl bg-white shadow-2xl text-center"
          >
            <button
              onClick={() => setType(null)}
              aria-label="close"
              className="absolute top-3 right-3 w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 transition"
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#FF7A1F] to-[#E55A00] flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30">
              <Rocket size={28} className="text-white" />
            </div>

            <h3 className="text-xl font-black text-gray-900 mb-2">
              {MESSAGES[type].title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {MESSAGES[type].desc}
            </p>

            <button
              onClick={() => setType(null)}
              className="mt-6 w-full py-3 rounded-xl bg-gradient-to-b from-[#FF7A1F] to-[#E55A00] text-white font-bold shadow-lg shadow-orange-500/30 hover:brightness-110 active:scale-95 transition"
            >
              {t("soon_ok")}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
