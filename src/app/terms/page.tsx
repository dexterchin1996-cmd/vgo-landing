"use client";
import { useLang } from "@/lib/i18n";
import PageShell from "@/components/PageShell";

const C = {
  zh: {
    label: "服务条款", title: "服务条款",
    updated: "最后更新：2026 年 1 月",
    lang_note: "本条款以马来语和英语呈现。如有歧义，以马来语版本为准。",
    intro: "欢迎使用 VGO。使用本平台即表示你同意以下条款。请仔细阅读。",
    s1_t: "1. 服务说明",
    s1: "VGO 是连接用户与认证师傅的信息平台。我们不直接提供服务，而是撮合双方。所有服务由入驻师傅或商家独立提供。",
    s2_t: "2. 用户责任",
    s2: "你需提供真实准确的注册信息、按时支付、尊重师傅、遵守马来西亚法律。禁止虚假下单、骚扰、欺诈。",
    s3_t: "3. 师傅 / 商家责任",
    s3: "需提供真实资质、按时履约、明码标价、尊重客户、遵守法律法规。违规将被暂停或终止账号。",
    s4_t: "4. 付款",
    s4: "所有价格以马来西亚令吉（RM）计价。付款通过第三方支付平台处理。我们不对支付平台的延迟承担责任。",
    s5_t: "5. 取消与退款",
    s5: "师傅未按时上门或服务未完成，用户可申请全额退款。服务开始后取消，按已完成部分结算。退款在 1-3 个工作日内处理。",
    s6_t: "6. 免责声明",
    s6: "VGO 不对师傅的独立行为承担直接责任。但我们会积极协助解决纠纷。使用平台的风险由用户自行承担。",
    s7_t: "7. 争议解决",
    s7: "任何争议应先通过平台客服协商解决。协商不成，适用马来西亚法律，提交马来西亚有管辖权的法院。",
    s8_t: "8. 条款修改",
    s8: "我们保留修改本条款的权利。修改后会在本页通知。继续使用即表示接受新条款。",
    s9_t: "9. 联系我们",
    s9: "任何条款相关问题，请邮件联系：",
  },
  en: {
    label: "Terms of Service", title: "Terms of Service",
    updated: "Last updated: January 2026",
    lang_note: "These terms are presented in both Bahasa Malaysia and English. In case of ambiguity, the Bahasa Malaysia version shall prevail.",
    intro: "Welcome to VGO. By using this platform, you agree to the following terms. Please read carefully.",
    s1_t: "1. Service Description",
    s1: "VGO is an information platform connecting users and certified pros. We do not directly provide services; we match both sides. All services are independently provided by listed pros or merchants.",
    s2_t: "2. User Responsibilities",
    s2: "You must provide true and accurate registration information, pay on time, respect pros, and comply with Malaysian law. False orders, harassment, and fraud are prohibited.",
    s3_t: "3. Pro / Merchant Responsibilities",
    s3: "Must provide true credentials, fulfill on time, price transparently, respect customers, and comply with laws. Violations may result in suspension or termination.",
    s4_t: "4. Payments",
    s4: "All prices are in Malaysian Ringgit (RM). Payments are processed via third-party providers. We are not liable for payment platform delays.",
    s5_t: "5. Cancellation & Refunds",
    s5: "If the pro fails to arrive on time or the service is incomplete, users may request a full refund. Cancellation after service begins is settled by completed portion. Refunds processed within 1–3 business days.",
    s6_t: "6. Disclaimer",
    s6: "VGO is not directly liable for the independent acts of pros. However, we actively help resolve disputes. Use of the platform is at the user's own risk.",
    s7_t: "7. Dispute Resolution",
    s7: "Any dispute should first be resolved through platform support. If unresolved, Malaysian law applies, submitted to the competent courts of Malaysia.",
    s8_t: "8. Changes to Terms",
    s8: "We reserve the right to modify these terms. Changes will be posted on this page. Continued use means acceptance of the new terms.",
    s9_t: "9. Contact Us",
    s9: "For any terms-related questions, email us at:",
  },
  ms: {
    label: "Terma Perkhidmatan", title: "Terma Perkhidmatan",
    updated: "Kemas kini terakhir: Januari 2026",
    lang_note: "Terma ini disediakan dalam Bahasa Malaysia dan Bahasa Inggeris. Sekiranya terdapat percanggahan, versi Bahasa Malaysia yang diguna pakai.",
    intro: "Selamat datang ke VGO. Dengan menggunakan platform ini, anda bersetuju dengan terma berikut. Sila baca dengan teliti.",
    s1_t: "1. Penerangan Perkhidmatan",
    s1: "VGO ialah platform maklumat yang menghubungkan pengguna dengan tukang bertauliah. Kami tidak menyediakan perkhidmatan secara langsung; kami memadankan kedua-dua pihak.",
    s2_t: "2. Tanggungjawab Pengguna",
    s2: "Anda perlu memberi maklumat pendaftaran yang benar, membayar tepat masa, menghormati tukang, dan mematuhi undang-undang Malaysia. Tempahan palsu, gangguan, dan penipuan adalah dilarang.",
    s3_t: "3. Tanggungjawab Tukang / Peniaga",
    s3: "Perlu memberi kelayakan yang benar, memenuhi tepat masa, harga telus, menghormati pelanggan, dan mematuhi undang-undang. Pelanggaran boleh menyebabkan penggantungan akaun.",
    s4_t: "4. Pembayaran",
    s4: "Semua harga dalam Ringgit Malaysia (RM). Pembayaran diproses melalui pihak ketiga. Kami tidak bertanggungjawab atas kelewatan platform pembayaran.",
    s5_t: "5. Pembatalan & Bayaran Balik",
    s5: "Jika tukang tidak datang tepat masa atau servis tidak siap, pengguna boleh meminta bayaran balik penuh. Pembatalan selepas servis bermula diselesaikan ikut bahagian yang siap.",
    s6_t: "6. Penafian",
    s6: "VGO tidak bertanggungjawab secara langsung atas tindakan bebas tukang. Namun, kami aktif membantu menyelesaikan pertikaian. Penggunaan platform adalah atas risiko pengguna sendiri.",
    s7_t: "7. Penyelesaian Pertikaian",
    s7: "Sebarang pertikaian perlu diselesaikan melalui sokongan platform terlebih dahulu. Jika tidak selesai, undang-undang Malaysia terpakai, dikemukakan kepada mahkamah Malaysia.",
    s8_t: "8. Perubahan Terma",
    s8: "Kami berhak mengubah terma ini. Perubahan akan dimaklumkan di halaman ini. Penggunaan berterusan bermakna penerimaan terma baharu.",
    s9_t: "9. Hubungi Kami",
    s9: "Untuk sebarang pertanyaan berkaitan terma, e-mel kami di:",
  },
} as const;

export default function TermsPage() {
  const { lang } = useLang();
  const c = C[lang] ?? C.zh;
  const SECTIONS = [
    { t: c.s1_t, d: c.s1 }, { t: c.s2_t, d: c.s2 }, { t: c.s3_t, d: c.s3 }, { t: c.s4_t, d: c.s4 },
    { t: c.s5_t, d: c.s5 }, { t: c.s6_t, d: c.s6 }, { t: c.s7_t, d: c.s7 }, { t: c.s8_t, d: c.s8 },
  ];
  return (
    <PageShell label={c.label} title={c.title}>
      <p className="text-sm text-white/50 mb-2">{c.updated}</p>
      <p className="text-xs text-white/40 mb-8 italic">{c.lang_note}</p>
      <p className="text-white/75 leading-relaxed mb-12">{c.intro}</p>
      {SECTIONS.map((s) => (
        <div key={s.t} className="mb-10">
          <h2 className="text-xl font-black mb-3">{s.t}</h2>
          <p className="text-white/65 leading-relaxed">{s.d}</p>
        </div>
      ))}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
        <h2 className="text-xl font-black mb-3">{c.s9_t}</h2>
        <p className="text-white/65 mb-2">jason52013141018@gmail.com</p>
        <p className="text-white/65">+60 11-7269 1788</p>
      </div>
    </PageShell>
  );
}
