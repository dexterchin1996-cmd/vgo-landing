"use client";
import { useLang } from "@/lib/i18n";
import PageShell from "@/components/PageShell";
import { Mail, Phone, MapPin } from "lucide-react";

const C = {
  zh: {
    label: "联系我们", title: "联系我们",
    intro: "无论是合作咨询、客户支持还是意见反馈，欢迎通过以下方式联系我们。",
    email_t: "邮件联系",
    phone_t: "电话 / WhatsApp",
    address_t: "办公地址",
    address: "Kota Kinabalu, Sabah, Malaysia",
    hours_t: "服务时间",
    hours: "周一至周日 · 9:00 – 21:00",
    reply_note: "我们会在 24 小时内回复每一条信息。",
  },
  en: {
    label: "Contact Us", title: "Contact Us",
    intro: "Whether for partnership inquiries, customer support, or feedback, reach us through the following channels.",
    email_t: "Email",
    phone_t: "Phone / WhatsApp",
    address_t: "Office Address",
    address: "Kota Kinabalu, Sabah, Malaysia",
    hours_t: "Business Hours",
    hours: "Mon – Sun · 9:00 AM – 9:00 PM",
    reply_note: "We reply to every message within 24 hours.",
  },
  ms: {
    label: "Hubungi Kami", title: "Hubungi Kami",
    intro: "Sama ada untuk pertanyaan kerjasama, sokongan pelanggan, atau maklum balas, hubungi kami melalui saluran berikut.",
    email_t: "E-mel",
    phone_t: "Telefon / WhatsApp",
    address_t: "Alamat Pejabat",
    address: "Kota Kinabalu, Sabah, Malaysia",
    hours_t: "Waktu Operasi",
    hours: "Isnin – Ahad · 9:00 PG – 9:00 MLM",
    reply_note: "Kami balas setiap mesej dalam 24 jam.",
  },
} as const;

export default function ContactPage() {
  const { lang } = useLang();
  const c = C[lang] ?? C.zh;

  const CARDS = [
    { Icon: Mail,   t: c.email_t,   v: "jason52013141018@gmail.com", href: "mailto:jason52013141018@gmail.com" },
    { Icon: Phone,  t: c.phone_t,   v: "+60 11-7269 1788",           href: "https://wa.me/601172691788" },
    { Icon: MapPin, t: c.address_t, v: c.address,                    href: null },
  ];

  return (
    <PageShell label={c.label} title={c.title}>
      <p className="text-white/75 leading-relaxed mb-12">{c.intro}</p>

      <div className="grid sm:grid-cols-2 gap-4 not-prose mb-12">
        {CARDS.map((card) => {
          const Wrapper = card.href ? "a" : "div";
          return (
            <Wrapper
              key={card.t}
              {...(card.href ? { href: card.href, target: card.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
              className="block p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFB800]/40 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center mb-4">
                <card.Icon size={20} className="text-white" strokeWidth={2.2} />
              </div>
              <h3 className="font-black text-base mb-2">{card.t}</h3>
              <p className="text-sm text-white/65 break-all">{card.v}</p>
            </Wrapper>
          );
        })}
      </div>

      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
        <h3 className="font-black text-base mb-2">{c.hours_t}</h3>
        <p className="text-sm text-white/65">{c.hours}</p>
        <p className="text-xs text-white/40 mt-4">{c.reply_note}</p>
      </div>
    </PageShell>
  );
}
