"use client";
import { useLang } from "@/lib/i18n";

const APPS = [
  {
    icon: "👤",
    title: { zh: "客户版 App", en: "Customer App", ms: "App Pelanggan" },
    desc: { zh: "下单、报价、支付、评价", en: "Order, quote, pay, review", ms: "Pesan, sebut harga, bayar, ulasan" },
    href: "https://customer.vgoservice.com",
    color: "#4A90D9",
  },
  {
    icon: "🏪",
    title: { zh: "商家版 App", en: "Merchant App", ms: "App Peniaga" },
    desc: { zh: "服务管理、排班、对账", en: "Services, schedule, settlement", ms: "Perkhidmatan, jadual, penyelesaian" },
    href: "https://merchant.vgoservice.com",
    color: "#FF8A1F",
  },
  {
    icon: "🔧",
    title: { zh: "师傅版 App", en: "Technician App", ms: "App Teknisi" },
    desc: { zh: "接单、报价、上传证据", en: "Jobs, quotes, upload evidence", ms: "Kerja, sebut harga, muat naik bukti" },
    href: "https://tech.vgoservice.com",
    color: "#2BAE66",
  },
];

const AI_CS_URL = "https://vgo-ai.jason52013141018.workers.dev";

export default function AppLinks() {
  const { lang } = useLang();
  const L = (lang === "en" || lang === "ms") ? lang : "zh";

  return (
    <section id="apps" className="relative py-20 px-5 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
            {L === "zh" ? "选择你的 App" : L === "ms" ? "Pilih App Anda" : "Choose Your App"}
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            {L === "zh" ? "三个独立 App · 一个账号通用 · 数据互通" : L === "ms" ? "Tiga App berasingan · Satu akaun · Data dikongsi" : "Three separate Apps · One account · Shared data"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {APPS.map((app) => (
            <a
              key={app.href}
              href={app.href}
              className="group relative p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4"
                style={{ background: `${app.color}20`, color: app.color }}
              >
                {app.icon}
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-1">{app.title[L]}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{app.desc[L]}</p>
              <div className="flex items-center gap-1.5 text-sm font-bold" style={{ color: app.color }}>
                <span>{L === "zh" ? "立即打开" : L === "ms" ? "Buka sekarang" : "Open now"}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>

        <a
          href={AI_CS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 max-w-2xl mx-auto p-5 rounded-2xl bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all"
        >
          <span className="text-2xl">💬</span>
          <div className="flex-1 text-left">
            <div className="font-black text-base">
              {L === "zh" ? "VGO 智能客服" : L === "ms" ? "Sokongan AI VGO" : "VGO AI Support"}
            </div>
            <div className="text-xs opacity-90 mt-0.5">
              {L === "zh" ? "中/英/马 三语 · 7×24 在线" : L === "ms" ? "BM/EN/中文 · 7×24" : "EN/BM/中文 · 7×24"}
            </div>
          </div>
          <span className="text-xl">→</span>
        </a>
      </div>
    </section>
  );
}
