"use client";
import { useLang } from "@/lib/i18n";
import { useRef, useState } from "react";
import { User, Store, Wrench, MessageCircle, ArrowRight } from "lucide-react";

const APPS = [
  {
    Icon: User,
    title: { zh: "客户版 App", en: "Customer App", ms: "App Pelanggan" },
    desc: { zh: "下单、报价、支付、评价", en: "Order, quote, pay, review", ms: "Pesan, sebut harga, bayar, ulasan" },
    cta: { zh: "打开客户版", en: "Open Customer", ms: "Buka Pelanggan" },
    href: "https://customer.vgoservice.com",
    color: "#4A90D9",
  },
  {
    Icon: Store,
    title: { zh: "商家版 App", en: "Merchant App", ms: "App Peniaga" },
    desc: { zh: "服务管理、排班、对账", en: "Services, schedule, settlement", ms: "Perkhidmatan, jadual, penyelesaian" },
    cta: { zh: "打开商家版", en: "Open Merchant", ms: "Buka Peniaga" },
    href: "https://merchant.vgoservice.com",
    color: "#FF8A1F",
  },
  {
    Icon: Wrench,
    title: { zh: "师傅版 App", en: "Technician App", ms: "App Teknisi" },
    desc: { zh: "接单、报价、上传证据", en: "Jobs, quotes, upload evidence", ms: "Kerja, sebut harga, muat naik bukti" },
    cta: { zh: "打开师傅版", en: "Open Technician", ms: "Buka Teknisi" },
    href: "https://tech.vgoservice.com",
    color: "#2BAE66",
  },
];

const AI_CS_URL = "https://vgo-ai.jason52013141018.workers.dev";

export default function AppLinks() {
  const { t } = useLang();

  const { lang } = useLang();
  const L = (lang === "en" || lang === "ms") ? lang : "zh";
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  function onScroll() {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / APPS.length;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setActive(Math.max(0, Math.min(APPS.length - 1, idx)));
  }

  function goTo(idx: number) {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / APPS.length;
    el.scrollTo({ left: idx * cardWidth, behavior: "smooth" });
  }

  return (
    <section id="apps" className="relative py-20 bg-[#0a0f18] overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-black text-white">
          {t("app_choose")}
        </h2>
        <p className="mt-3 text-sm text-white/50">
          {t("app_choose")}
        </p>
      </div>

      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-5 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollPaddingLeft: "20px" }}
      >
        {APPS.map(({ Icon, href, title, desc, cta, color }) => (
          <a
            key={href}
            href={href}
            className="snap-center shrink-0 w-[80vw] max-w-[360px] group flex flex-col p-6 rounded-3xl bg-[#06111d] border border-white/5 shadow-sm hover:shadow-xl transition-shadow duration-200"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: `${color}20`, color }}
            >
              <Icon size={32} strokeWidth={2} />
            </div>
            <h3 className="text-xl font-black text-white mb-2">{title[L]}</h3>
            <p className="text-sm text-white/50 leading-relaxed mb-6 flex-1">{desc[L]}</p>
            <div className="flex items-center gap-1.5 text-sm font-bold" style={{ color }}>
              <span>{cta[L]}</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </a>
        ))}
        <div className="shrink-0 w-5" aria-hidden />
      </div>

      <div className="flex items-center justify-center gap-2 mt-5">
        {APPS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`App ${i + 1}`}
            className={`h-2 rounded-full transition-[width,background-color] duration-300 ${
              i === active ? "w-6 bg-[var(--vgo)]" : "w-2 bg-white/20 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-5 mt-10">
        <a
          href={AI_CS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 max-w-2xl mx-auto p-5 rounded-2xl bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:shadow-xl hover:scale-[1.01] transition-[transform,box-shadow] duration-200"
        >
          <MessageCircle size={28} strokeWidth={2} />
          <div className="flex-1 text-left">
            <div className="font-black text-base">
              {t("app_choose")}
            </div>
            <div className="text-xs opacity-90 mt-0.5">
              {t("app_choose")}
            </div>
          </div>
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}
