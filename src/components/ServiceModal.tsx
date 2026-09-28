"use client";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, ArrowRight, Wrench, Sparkles, Heart, Truck, ShoppingBag, Briefcase, LucideIcon } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { SERVICES, ServiceItem } from "@/data/services";

const ICONS: Record<string, LucideIcon> = {
  Wrench, Sparkles, Heart, Truck, ShoppingBag, Briefcase,
};

export default function ServiceModal({ item, onClose }: { item: ServiceItem | null; onClose: () => void }) {
  const { lang } = useLang();
  const t = SERVICES[lang];
  const Icon = item ? ICONS[item.icon] || Wrench : Wrench;

  return (
    <AnimatePresence>
      {item && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: "spring", damping: 26, stiffness: 260 }}
            className="fixed inset-x-3 top-[5%] bottom-[5%] sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-[600px] z-[101] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* 顶部图 */}
            <div className="relative h-48 sm:h-56 shrink-0">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <button
                onClick={onClose}
                aria-label="close"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center shadow-lg">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-black">{item.title}</h3>
                </div>
                <p className="text-sm text-white/80">{item.tagline}</p>
              </div>
            </div>

            {/* 滚动内容 */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <section>
                <div className="text-xs font-black text-[var(--vgo)] uppercase tracking-widest mb-3">{t.sec_todo}</div>
                <ul className="space-y-2">
                  {item.canDo.map((x) => (
                    <li key={x} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check size={16} className="text-[var(--vgo)] shrink-0 mt-0.5" />{x}
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <div className="text-xs font-black text-[var(--vgo)] uppercase tracking-widest mb-3">{t.sec_scene}</div>
                <div className="flex flex-wrap gap-2">
                  {item.scenarios.map((x) => (
                    <span key={x} className="px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-xs font-semibold text-gray-700">
                      {x}
                    </span>
                  ))}
                </div>
              </section>
              <section>
                <div className="text-xs font-black text-[var(--vgo)] uppercase tracking-widest mb-3">{t.sec_cap}</div>
                <ul className="space-y-2">
                  {item.capabilities.map((x) => (
                    <li key={x} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check size={16} className="text-[var(--vgo)] shrink-0 mt-0.5" />{x}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* 底部 CTA */}
            <div className="shrink-0 p-5 border-t border-gray-100 bg-white">
              <a
                href="#download"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-black shadow-lg shadow-orange-500/30 hover:scale-[1.02] active:scale-95 transition-all"
              >
                {t.cta} <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
