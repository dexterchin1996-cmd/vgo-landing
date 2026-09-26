"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Wrench, Sparkles, Heart, Truck, ChevronDown, Menu, Star } from "lucide-react";
import SideDrawer from "./SideDrawer";
import LangSwitcher from "./LangSwitcher";
import { useLang } from "@/lib/i18n";

export default function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NAV = [
    { label: t("nav_home"), href: "#home" },
    {
      label: t("nav_features"), href: "#features",
      children: [
        { icon: Wrench,   label: t("drawer_repair"),  href: "#features" },
        { icon: Sparkles, label: t("drawer_clean"),   href: "#features" },
        { icon: Heart,    label: t("drawer_massage"), href: "#features" },
        { icon: Truck,    label: t("drawer_errand"),  href: "#features" },
      ],
    },
    { label: t("nav_news"), href: "#news" },
    { label: t("nav_about"), href: "#about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/85 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.06)]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5 shrink-0">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7A1F] to-[#E55A00] text-white font-black text-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
              V
            </span>
            <div className="flex flex-col leading-none">
              <span className={`font-black text-xl tracking-tight transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}>VGO</span>
              <span className={`hidden sm:block text-[9px] font-semibold tracking-[0.2em] transition-colors ${scrolled ? "text-gray-400" : "text-white/60"}`}>V GO ON</span>
            </div>
          </a>

          <div className={`md:hidden flex items-center gap-1 px-2.5 py-1 rounded-full backdrop-blur-md border transition-colors ${
            scrolled ? "bg-gray-100 border-gray-200" : "bg-white/15 border-white/25"
          }`}>
            <Star size={11} className="text-yellow-400 fill-yellow-400" />
            <span className={`text-[11px] font-bold ${scrolled ? "text-gray-900" : "text-white"}`}>4.9</span>
            <span className={`text-[10px] ${scrolled ? "text-gray-400" : "text-white/50"}`}>·</span>
            <span className={`text-[10px] font-medium ${scrolled ? "text-gray-500" : "text-white/70"}`}>12K+</span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="relative" onMouseEnter={() => setOpenDrop(item.label)} onMouseLeave={() => setOpenDrop(null)}>
                  <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition ${
                    scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white/90 hover:bg-white/10"
                  }`}>
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform ${openDrop === item.label ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openDrop === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2"
                      >
                        {item.children.map((c) => (
                          <a key={c.label} href={c.href} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#FF6600] transition">
                            <c.icon size={16} strokeWidth={2} />
                            {c.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a key={item.label} href={item.href} className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                  scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white/90 hover:bg-white/10"
                }`}>
                  {item.label}
                </a>
              )
            )}
            <div className="ml-3">
              <LangSwitcher scrolled={scrolled} />
            </div>
            <a href="#download" className="ml-3 px-6 py-2.5 rounded-xl bg-[#FF6600] text-white text-sm font-bold shadow-lg shadow-orange-500/30 hover:bg-[#E55A00] hover:scale-105 transition-all pulse-glow">
              {t("nav_download")}
            </a>
          </nav>

          <button
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            className={`md:hidden w-11 h-11 flex items-center justify-center rounded-xl transition ${
              scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
          >
            <Menu size={26} strokeWidth={2.5} />
          </button>
        </div>
      </header>

      <SideDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
