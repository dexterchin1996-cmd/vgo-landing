"use client";

import { useLang } from "@/lib/i18n";
import PageShell from "@/components/PageShell";
import { Mail, Phone, MapPin, MessageCircle, Headphones, Store, Wrench, Users, Clock } from "lucide-react";
import CoverageSection from "@/components/CoverageSection";
import Link from "next/link";

const C = {
  zh: {
    label: "联系我们", title: "联系我们",
    intro: "无论是合作咨询、客户支持还是意见反馈，欢迎通过以下方式联系我们。",
    quick_t: "需要帮助？",
    quick: "以下是最快的联系方式",
    dept_t: "按部门联系",
    depts: [
      { Icon: Headphones, name: "客户支持", desc: "订单、退款、投诉、账号问题", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
      { Icon: Store,      name: "商家合作", desc: "入驻申请、合作洽谈、账单问题", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
      { Icon: Wrench,     name: "师傅入驻", desc: "入驻审核、接单、结算问题", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
      { Icon: Users,      name: "媒体 / 其他", desc: "媒体采访、投资合作、其他", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
    ],
    hours_t: "服务时间",
    hours: "周一至周日 · 9:00 – 21:00（马来西亚时间）",
    reply_note: "我们会在 24 小时内回复每一条信息。",
    faq_t: "常见问题快捷入口",
    faq_more: "查看全部 FAQ",
  },
  en: {
    label: "Contact Us", title: "Contact Us",
    intro: "Whether for partnership inquiries, customer support, or feedback, reach us through the following channels.",
    quick_t: "Need help?",
    quick: "Here are the fastest ways to reach us",
    dept_t: "Contact by Department",
    depts: [
      { Icon: Headphones, name: "Customer Support", desc: "Orders, refunds, complaints, account", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
      { Icon: Store,      name: "Merchant Partnership", desc: "Onboarding, partnership, billing", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
      { Icon: Wrench,     name: "Technician Onboarding", desc: "Verification, jobs, payouts", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
      { Icon: Users,      name: "Media / Others", desc: "Press, investment, general", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
    ],
    hours_t: "Business Hours",
    hours: "Mon – Sun · 9:00 AM – 9:00 PM (MYT)",
    reply_note: "We reply to every message within 24 hours.",
    faq_t: "Quick FAQ Links",
    faq_more: "View all FAQ",
  },
  ms: {
    label: "Hubungi Kami", title: "Hubungi Kami",
    intro: "Sama ada untuk pertanyaan kerjasama, sokongan pelanggan, atau maklum balas, hubungi kami melalui saluran berikut.",
    quick_t: "Perlukan bantuan?",
    quick: "Berikut adalah cara terpantas menghubungi kami",
    dept_t: "Hubungi mengikut Jabatan",
    depts: [
      { Icon: Headphones, name: "Sokongan Pelanggan", desc: "Pesanan, bayaran balik, aduan", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
      { Icon: Store,      name: "Kerjasama Peniaga", desc: "Pendaftaran, kerjasama, bil", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
      { Icon: Wrench,     name: "Pendaftaran Juruteknik", desc: "Pengesahan, kerja, bayaran", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
      { Icon: Users,      name: "Media / Lain-lain", desc: "Media, pelaburan, umum", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
    ],
    hours_t: "Waktu Operasi",
    hours: "Isnin – Ahad · 9:00 PG – 9:00 MLM (MYT)",
    reply_note: "Kami balas setiap mesej dalam 24 jam.",
    faq_t: "Pautan FAQ Pantas",
    faq_more: "Lihat semua FAQ",
  },
} as const;

const FAQ_LINKS = {
  zh: [
    "V'GO 是什么？",
    "怎么下单？",
    "师傅有认证吗？",
    "价格怎么算？",
  ],
  en: [
    "What is V'GO?",
    "How do I place an order?",
    "Are pros certified?",
    "How is the price calculated?",
  ],
  ms: [
    "Apa itu V'GO?",
    "Bagaimana untuk membuat pesanan?",
    "Adakah juruteknik bertauliah?",
    "Bagaimana harga dikira?",
  ],
};

export default function ContactPage() {
  const { lang } = useLang();
  const c = C[lang] ?? C.zh;
  const faqs = FAQ_LINKS[lang] ?? FAQ_LINKS.zh;

  return (
    <PageShell label={c.label} title={c.title}>
      <p className="text-white/75 leading-relaxed mb-10 text-base sm:text-lg">{c.intro}</p>

      {/* 快速联系 - WhatsApp 大按钮 */}
      <div className="not-prose mb-10">
        <h3 className="text-sm font-black text-white/70 uppercase tracking-widest mb-4">{c.quick_t}</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          <a
            href="https://wa.me/601172691788"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-5 rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-green-900/30"
          >
            <MessageCircle size={24} strokeWidth={2.4} />
            <div className="text-left">
              <div className="text-base font-black">WhatsApp</div>
              <div className="text-xs text-white/85 mt-0.5">最快响应 · 5-10 分钟</div>
            </div>
          </a>
          <a
            href="mailto:support.vgo@gmail.com"
            className="flex items-center gap-3 p-5 rounded-2xl bg-gradient-to-br from-[#1B2A47] to-[#2A3F63] text-white font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-blue-900/30"
          >
            <Mail size={24} strokeWidth={2.4} />
            <div className="text-left">
              <div className="text-base font-black">Email</div>
              <div className="text-xs text-white/85 mt-0.5">24 小时内回复</div>
            </div>
          </a>
        </div>
      </div>

      {/* 分部门 */}
      <div className="not-prose mb-10">
        <h3 className="text-sm font-black text-white/70 uppercase tracking-widest mb-4">{c.dept_t}</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {c.depts.map((d) => (
            <div key={d.name} className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center shrink-0">
                  <d.Icon size={18} className="text-white" strokeWidth={2.4} />
                </div>
                <h4 className="font-black text-base text-white">{d.name}</h4>
              </div>
              <p className="text-xs text-white/50 mb-3 leading-relaxed">{d.desc}</p>
              <div className="space-y-1.5 text-xs">
                <p className="text-white/70 break-all">
                  <Mail size={11} className="inline mr-1 -mt-0.5" />
                  <a href={`mailto:${d.email}`} className="hover:text-[var(--vgo)] transition-colors">{d.email}</a>
                </p>
                <p className="text-white/70">
                  <MessageCircle size={11} className="inline mr-1 -mt-0.5" />
                  <a href="https://wa.me/601172691788" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--vgo)] transition-colors">{d.wa}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 服务时间 */}
      <div className="not-prose mb-10 p-6 rounded-2xl bg-white/5 border border-white/10">
        <div className="flex items-center gap-2 mb-2">
          <Clock size={16} className="text-[var(--vgo)]" />
          <h3 className="font-black text-base text-white">{c.hours_t}</h3>
        </div>
        <p className="text-sm text-white/70">{c.hours}</p>
        <p className="text-xs text-white/40 mt-3">{c.reply_note}</p>
      </div>

      {/* 快捷 FAQ */}
      <div className="not-prose mb-10">
        <h3 className="text-sm font-black text-white/70 uppercase tracking-widest mb-4">{c.faq_t}</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {faqs.map((q) => (
            <Link
              key={q}
              href="/faq/"
              className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--vgo)]/40 hover:bg-white/8 transition-all text-sm text-white/80"
            >
              <span className="truncate">{q}</span>
              <span className="text-[var(--vgo)] shrink-0 ml-2">→</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/faq/" className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--vgo)] hover:gap-3 transition-all">
            {c.faq_more} →
          </Link>
        </div>
      </div>

      {/* 办公地址 */}
      <div className="not-prose mb-8 p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
        <MapPin size={20} className="text-[var(--vgo)] shrink-0" />
        <div>
          <div className="text-sm font-black text-white">Kota Kinabalu, Sabah, Malaysia</div>
          <div className="text-xs text-white/50 mt-0.5">Ventus Reflexology 运营</div>
        </div>
      </div>

      <div className="mt-8 not-prose">
        <CoverageSection />
      </div>
    </PageShell>
  );
}
