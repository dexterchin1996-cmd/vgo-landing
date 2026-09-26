"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLang } from "@/lib/i18n";
import PageShell from "@/components/PageShell";

const C = {
  zh: {
    label: "常见问题", title: "常见问题",
    q: [
      ["VGO 是什么？", "VGO 是马来西亚上门服务平台，把认证师傅和有需要的家庭连在一起。你可以在这里找维修、清洁、按摩、跑腿、二手交易、招工等服务。"],
      ["怎么下单？", "注册账号后下载 App，选择需要的服务，填写地址和时间，一键下单。系统会派附近的认证师傅接单，你可以实时看到师傅位置。"],
      ["师傅有认证吗？", "有。所有师傅入驻前都需通过身份验证和技能审核。维修类师傅还需要提供相关资质证明。平台全程记录服务过程，保障双方权益。"],
      ["价格怎么算？", "每个服务都有明确的起始价格区间，下单前你会看到报价。师傅上门确认后才会给出最终价格，你同意才开工，没有隐藏费用。"],
      ["可以退款吗？", "可以。如果师傅未按时上门，或服务未完成，你可以申请全额退款。平台会在 1-3 个工作日内处理。"],
      ["覆盖哪些地区？", "目前覆盖马来西亚主要城市，持续扩展中。沙巴是我们的起点，全马是我们的目标。"],
      ["商家怎么入驻？", "点击「有生意，上 VGO」提交资料，我们会在 1-2 个工作日内审核。免费入驻，按单结算，没有隐藏费用。"],
      ["手艺人怎么加入？", "点击「有手艺，来 VGO」提交你的技能和身份信息。通过审核后即可接单，零成本，自己排时间。"],
      ["怎么联系客服？", "邮件 jason52013141018@gmail.com 或 WhatsApp +60 11-7269 1788。我们会在 24 小时内回复。"],
      ["数据安全吗？", "我们采用行业标准安全措施：传输加密（HTTPS）、访问控制、密钥隔离、日志审计。详见隐私政策。"],
    ],
  },
  en: {
    label: "FAQ", title: "Frequently Asked Questions",
    q: [
      ["What is VGO?", "VGO is a Malaysia home-service platform connecting certified pros with families in need. Find repair, cleaning, massage, errands, second-hand trading, and job listings all in one place."],
      ["How do I place an order?", "Sign up, download the app, choose a service, enter your address and time, then order in one tap. The system dispatches nearby certified pros, and you can track them in real time."],
      ["Are pros certified?", "Yes. All pros must pass identity verification and skill assessment before joining. Repair pros must also provide relevant certifications. Every service is fully recorded."],
      ["How is the price calculated?", "Each service has a clear starting price range shown before ordering. The final price is confirmed on-site by the pro. Work only starts after you agree \u2014 no hidden fees."],
      ["Can I get a refund?", "Yes. If the pro doesn't show up on time or the service isn't completed, you can request a full refund. Processed within 1-3 business days."],
      ["Which areas do you cover?", "Currently covering major Malaysian cities, expanding steadily. Sabah is where we started \u2014 Malaysia is where we're headed."],
      ["How do merchants join?", "Tap \u201cGot a business? Grow with VGO\u201d, submit your info, and we review within 1-2 business days. Free to join, pay per order, no hidden fees."],
      ["How do pros join?", "Tap \u201cGot skills? Earn with VGO\u201d, submit your skills and ID. Once approved, you can start taking jobs \u2014 zero cost, set your own hours."],
      ["How do I contact support?", "Email jason52013141018@gmail.com or WhatsApp +60 11-7269 1788. We reply within 24 hours."],
      ["Is my data safe?", "We use industry-standard security: HTTPS encryption, access controls, key isolation, audit logging. See our Privacy Policy for details."],
    ],
  },
  ms: {
    label: "Soalan Lazim", title: "Soalan Lazim",
    q: [
      ["Apa itu VGO?", "VGO ialah platform perkhidmatan ke rumah Malaysia, menghubungkan tukang bertauliah dengan keluarga yang memerlukan. Cari pembaikan, pembersihan, urutan, penghantaran, jual beli terpakai, dan kerja \u2014 semua di satu tempat."],
      ["Macam mana nak tempah?", "Daftar akaun, muat turun app, pilih servis, isi alamat dan masa, tempah satu klik. Sistem akan hantar tukang bertauliah berdekatan, anda boleh track mereka secara langsung."],
      ["Tukang ada pensijilan?", "Ada. Semua tukang perlu lulus pengesahan identiti dan penilaian kemahiran sebelum sertai. Tukang pembaikan juga perlu sediakan sijil berkaitan. Setiap servis direkod sepenuhnya."],
      ["Macam mana harga dikira?", "Setiap servis ada julat harga permulaan yang jelas sebelum tempah. Harga akhir disahkan oleh tukang di lokasi. Kerja hanya mula selepas anda setuju \u2014 tiada caj tersembunyi."],
      ["Boleh dapat bayaran balik?", "Boleh. Jika tukang tak datang tepat masa atau servis tak siap, anda boleh minta bayaran balik penuh. Diproses dalam 1-3 hari bekerja."],
      ["Liputan kawasan mana?", "Kini meliputi bandar-bandar utama Malaysia, berkembang berterusan. Sabah tempat kami bermula \u2014 Malaysia destinasi kami."],
      ["Macam mana peniaga sertai?", "Klik \u201cAda bisnes? Sertai VGO\u201d, hantar maklumat anda, kami semak dalam 1-2 hari bekerja. Daftar percuma, bayar ikut tempahan, tiada caj tersembunyi."],
      ["Macam mana tukang sertai?", "Klik \u201cAda kemahiran? Cari rezeki di VGO\u201d, hantar kemahiran dan ID anda. Selepas lulus, anda boleh mula terima kerja \u2014 kos sifar, atur masa sendiri."],
      ["Macam mana nak hubungi sokongan?", "E-mel jason52013141018@gmail.com atau WhatsApp +60 11-7269 1788. Kami balas dalam 24 jam."],
      ["Adakah data saya selamat?", "Kami guna keselamatan standard industri: penyulitan HTTPS, kawalan akses, pengasingan kunci, audit log. Lihat Polisi Privasi untuk butiran."],
    ],
  },
} as const;

export default function FaqPage() {
  const { lang } = useLang();
  const c = C[lang] ?? C.zh;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <PageShell label={c.label} title={c.title}>
      <div className="space-y-3 not-prose">
        {c.q.map(([q, a], i) => (
          <div
            key={q}
            className={`rounded-2xl border transition-colors ${
              open === i ? "border-[#FFB800]/40 bg-orange-50/5" : "border-white/10 bg-white/3 hover:border-white/20"
            }`}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
            >
              <span className="font-bold text-white text-sm sm:text-base">{q}</span>
              <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg font-light transition-all duration-300 ${
                open === i ? "bg-[#FFB800] text-white rotate-45" : "bg-white/10 text-white/60"
              }`}>+</span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-white/65 leading-relaxed">{a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
