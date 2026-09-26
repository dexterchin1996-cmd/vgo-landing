"use client";
import { useLang } from "@/lib/i18n";
import PageShell from "@/components/PageShell";

const C = {
  zh: {
    label: "隐私政策", title: "隐私政策",
    updated: "最后更新：2026 年 1 月",
    lang_note: "本政策以马来语和英语呈现。如有歧义，以马来语版本为准。",
    intro: "VGO (V Go On) 尊重并保护你的隐私。本政策根据马来西亚《2010年个人数据保护法》(PDPA) 及其2024年修正案制定，说明我们如何收集、使用、保护你的个人数据。",
    s1_t: "1. 数据控制者",
    s1: "VGO (V Go On) 是您个人数据的控制者。我们的注册地址位于马来西亚。",
    s2_t: "2. 数据保护官 (DPO)",
    s2: "根据 PDPA 要求，我们已任命数据保护官（DPO）。任何隐私相关问题，请联系：\njason52013141018@gmail.com · +60 11-7269 1788\n数据泄露时，我们将在 72 小时内通知监管机构，并在 7 天内通知受影响的用户。",
    s3_t: "3. 我们收集什么数据",
    s3: "当您注册或使用 VGO 时，我们可能收集：姓名、手机号、电子邮件、服务地址、付款信息（由第三方支付机构处理，我们不直接存储卡号）、设备信息、使用日志、位置数据。",
    s4_t: "4. 我们如何使用您的数据",
    s4: "用于：提供服务与派单、身份验证、支付结算、客户支持、安全风控、改进产品体验、法律法规要求的合规义务。我们不会将您的数据用于未经您同意的其他目的。",
    s5_t: "5. 数据披露",
    s5: "我们仅在必要范围内与以下方分享：接单的认证师傅（仅限服务所需信息）、支付服务商、云服务提供商、法律要求时的政府机构。我们不会出售您的个人信息。",
    s6_t: "6. 数据安全措施",
    s6: "我们采取行业标准的安全措施：传输加密（HTTPS）、访问控制、密钥隔离、日志审计。所有敏感数据在传输与存储中均受保护。如发生数据泄露，我们将依法立即通知监管机构和受影响的用户。",
    s7_t: "7. 数据保留期限",
    s7: "我们在服务期间及法律要求的期限内保留您的数据，之后会安全删除或匿名化。",
    s8_t: "8. 您的权利 (PDPA 2010)",
    s8: "根据马来西亚《2010年个人数据保护法》，您有权：查询我们持有的您的个人数据、要求更正、撤回同意、要求删除、数据可携带。如需行使，请联系我们。",
    s9_t: "9. 跨境数据传输",
    s9: "您的数据可能被传输至马来西亚境外。我们会确保接收方提供足够的数据保护水平，或依据法律要求的其他机制进行传输。",
    s10_t: "10. 联系我们",
    s10: "任何隐私相关问题，请邮件联系：",
  },
  en: {
    label: "Privacy Policy", title: "Privacy Policy",
    updated: "Last updated: January 2026",
    lang_note: "This policy is presented in both Bahasa Malaysia and English. In case of ambiguity, the Bahasa Malaysia version shall prevail.",
    intro: "VGO (V Go On) respects and protects your privacy. This policy is prepared in accordance with Malaysia's Personal Data Protection Act 2010 (PDPA) and its 2024 amendments, and explains how we collect, use, and protect your personal data.",
    s1_t: "1. Data Controller",
    s1: "VGO (V Go On) is the data controller of your personal data. Our registered address is located in Malaysia.",
    s2_t: "2. Data Protection Officer (DPO)",
    s2: "In accordance with the PDPA, we have appointed a Data Protection Officer (DPO). For any privacy-related matters, please contact:\njason52013141018@gmail.com · +60 11-7269 1788\nIn the event of a data breach, we will notify the regulator within 72 hours and affected users within 7 days.",
    s3_t: "3. What Data We Collect",
    s3: "When you register or use VGO, we may collect: name, phone number, email, service address, payment information (processed by third-party payment providers; we do not store card numbers), device information, usage logs, and location data.",
    s4_t: "4. How We Use Your Data",
    s4: "To provide services and dispatch orders, verify identity, process payments, offer customer support, perform security and risk control, improve the product, and comply with legal obligations. We will not use your data for other purposes without your consent.",
    s5_t: "5. Data Disclosure",
    s5: "We share only when necessary: assigned certified pros (only information needed for the job), payment processors, cloud service providers, and government authorities when required by law. We never sell your personal information.",
    s6_t: "6. Data Security Measures",
    s6: "We use industry-standard security measures: encryption in transit (HTTPS), access controls, key isolation, and audit logging. In the event of a data breach, we will promptly notify the regulator and affected users as required by law.",
    s7_t: "7. Data Retention Period",
    s7: "We retain your data during the service period and for the duration required by law, after which it is securely deleted or anonymized.",
    s8_t: "8. Your Rights (PDPA 2010)",
    s8: "Under Malaysia's Personal Data Protection Act 2010, you have the right to: access the personal data we hold about you, request correction, withdraw consent, request deletion, and data portability. Contact us to exercise these rights.",
    s9_t: "9. Cross-Border Data Transfer",
    s9: "Your data may be transferred outside Malaysia. We will ensure that the recipient provides an adequate level of data protection or implement other mechanisms as required by law.",
    s10_t: "10. Contact Us",
    s10: "For any privacy-related questions, email us at:",
  },
  ms: {
    label: "Polisi Privasi", title: "Polisi Privasi",
    updated: "Kemas kini terakhir: Januari 2026",
    lang_note: "Polisi ini disediakan dalam Bahasa Malaysia dan Bahasa Inggeris. Sekiranya terdapat percanggahan, versi Bahasa Malaysia yang diguna pakai.",
    intro: "VGO (V Go On) menghormati dan melindungi privasi anda. Polisi ini disediakan selaras dengan Akta Perlindungan Data Peribadi 2010 (PDPA) dan pindaan 2024, dan menerangkan bagaimana kami mengumpul, menggunakan, dan melindungi data peribadi anda.",
    s1_t: "1. Pengawal Data",
    s1: "VGO (V Go On) ialah pengawal data bagi data peribadi anda. Alamat berdaftar kami terletak di Malaysia.",
    s2_t: "2. Pegawai Perlindungan Data (DPO)",
    s2: "Selaras dengan PDPA, kami telah melantik Pegawai Perlindungan Data (DPO). Untuk sebarang perkara berkaitan privasi, sila hubungi:\njason52013141018@gmail.com · +60 11-7269 1788\nJika berlaku kebocoran data, kami akan memaklumkan pengawal selia dalam 72 jam dan pengguna terjejas dalam 7 hari.",
    s3_t: "3. Data Apa Yang Kami Kumpul",
    s3: "Apabila anda mendaftar atau menggunakan VGO, kami mungkin mengumpul: nama, nombor telefon, e-mel, alamat perkhidmatan, maklumat pembayaran (diproses oleh pembekal pihak ketiga; kami tidak simpan nombor kad), maklumat peranti, log penggunaan, dan data lokasi.",
    s4_t: "4. Bagaimana Kami Guna Data Anda",
    s4: "Untuk menyediakan perkhidmatan dan tempahan, mengesahkan identiti, memproses pembayaran, sokongan pelanggan, kawalan keselamatan, penambahbaikan produk, dan mematuhi kewajipan undang-undang. Kami tidak akan menggunakan data anda untuk tujuan lain tanpa kebenaran.",
    s5_t: "5. Pendedahan Data",
    s5: "Kami berkongsi hanya jika perlu: tukang bertauliah yang ditugaskan (hanya maklumat yang diperlukan), pemproses pembayaran, pembekal perkhidmatan awan, dan pihak berkuasa apabila dikehendaki undang-undang. Kami tidak menjual maklumat peribadi anda.",
    s6_t: "6. Langkah Keselamatan Data",
    s6: "Kami menggunakan langkah keselamatan standard industri: penyulitan semasa penghantaran (HTTPS), kawalan akses, pengasingan kunci, dan audit log. Jika berlaku kebocoran data, kami akan memaklumkan pengawal selia dan pengguna yang terjejas seperti yang dikehendaki undang-undang.",
    s7_t: "7. Tempoh Penyimpanan Data",
    s7: "Kami menyimpan data anda sepanjang tempoh perkhidmatan dan tempoh yang dikehendaki undang-undang, selepas itu dipadam atau dianonimkan dengan selamat.",
    s8_t: "8. Hak Anda (PDPA 2010)",
    s8: "Di bawah Akta Perlindungan Data Peribadi 2010 Malaysia, anda berhak: mengakses data peribadi kami simpan, meminta pembetulan, menarik balik persetujuan, meminta pemadaman, dan mudah alih data. Hubungi kami untuk melaksanakannya.",
    s9_t: "9. Pemindahan Data Merentas Sempadan",
    s9: "Data anda mungkin dipindahkan ke luar Malaysia. Kami akan memastikan penerima menyediakan tahap perlindungan data yang mencukupi atau melaksanakan mekanisme lain seperti yang dikehendaki undang-undang.",
    s10_t: "10. Hubungi Kami",
    s10: "Untuk sebarang pertanyaan privasi, e-mel kami di:",
  },
} as const;

export default function PrivacyPage() {
  const { lang } = useLang();
  const c = C[lang] ?? C.zh;
  const SECTIONS = [
    { t: c.s1_t, d: c.s1 }, { t: c.s2_t, d: c.s2 }, { t: c.s3_t, d: c.s3 },
    { t: c.s4_t, d: c.s4 }, { t: c.s5_t, d: c.s5 }, { t: c.s6_t, d: c.s6 },
    { t: c.s7_t, d: c.s7 }, { t: c.s8_t, d: c.s8 }, { t: c.s9_t, d: c.s9 },
  ];
  return (
    <PageShell label={c.label} title={c.title}>
      <p className="text-sm text-white/50 mb-2">{c.updated}</p>
      <p className="text-xs text-white/40 mb-8 italic">{c.lang_note}</p>
      <p className="text-white/75 leading-relaxed mb-12">{c.intro}</p>
      {SECTIONS.map((s) => (
        <div key={s.t} className="mb-10">
          <h2 className="text-xl font-black mb-3">{s.t}</h2>
          <p className="text-white/65 leading-relaxed whitespace-pre-line">{s.d}</p>
        </div>
      ))}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
        <h2 className="text-xl font-black mb-3">{c.s10_t}</h2>
        <p className="text-white/65 mb-2">jason52013141018@gmail.com</p>
        <p className="text-white/65">+60 11-7269 1788</p>
      </div>
    </PageShell>
  );
}
