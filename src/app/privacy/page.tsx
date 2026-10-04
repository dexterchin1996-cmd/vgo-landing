"use client";
import { useLang } from "@/lib/i18n";
import LegalShell from "@/components/LegalShell";

const C = {
  en: {
    label: "Privacy Policy", title: "Privacy Policy",
    updated: "Last updated: January 2026",
    lang_note: "This policy is presented in English and Bahasa Malaysia. Both versions are authoritative. In the event of any conflict, the Bahasa Malaysia version shall prevail for matters subject to CPETTR 2024 statutory disclosure (service descriptions, fees, refund policy, dispute resolution, seller information); the English version shall prevail for all other matters.",
    intro: "VGO (V Go On) respects and protects your privacy. This policy is prepared in accordance with Malaysia's Personal Data Protection Act 2010 (PDPA) and its 2024 amendments, and explains how we collect, use, and protect your personal data.",
    s1_t: "1. Data Controller",
    s1: "VGO (V Go On) is the data controller of your personal data. Our registered address is located in Malaysia.",
    s2_t: "2. Data Protection Officer (DPO)",
    s2: "VGO has voluntarily appointed a Data Protection Officer (DPO) under PDPA 2024. For privacy matters, please contact:DPO Name: Chong Kar Wei\nEmail: 待填\nPhone: 待填\nAddress: Malaysia (待填)\n\nThe DPO must be a Malaysian resident (at least 180 days per year) and proficient in Bahasa Malaysia and English.\n\nIn the event of a data breach, we will notify the regulator within 72 hours and affected users within 7 days.",
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
    s10: "For any privacy-related questions, email us at: support.vgo@gmail.com",
    s11_t: "11. Language Version",
    s11: "This policy is executed in the English language. The English version shall be the authoritative and controlling version. The Bahasa Malaysia version is provided solely to comply with the PDPA and for the convenience of users. In the event of any inconsistency or conflict, the English version shall prevail in all respects.",
  },
  ms: {
    label: "Polisi Privasi", title: "Polisi Privasi",
    updated: "Kemas kini terakhir: Januari 2026",
    lang_note: "Polisi ini disediakan dalam Bahasa Inggeris dan Bahasa Malaysia. Kedua-dua versi adalah berwibawa. Sekiranya berlaku percanggahan, versi Bahasa Malaysia akan diguna pakai bagi perkara yang tertakluk kepada pendedahan statutori CPETTR 2024 (penerangan perkhidmatan, fi, dasar bayaran balik, penyelesaian pertikaian, maklumat penjual); versi Bahasa Inggeris akan diguna pakai bagi semua perkara lain.",
    intro: "VGO (V Go On) menghormati dan melindungi privasi anda. Polisi ini disediakan selaras dengan Akta Perlindungan Data Peribadi 2010 (PDPA) dan pindaan 2024, dan menerangkan bagaimana kami mengumpul, menggunakan, dan melindungi data peribadi anda.",
    s1_t: "1. Pengawal Data",
    s1: "VGO (V Go On) ialah pengawal data bagi data peribadi anda. Alamat berdaftar kami terletak di Malaysia.",
    s2_t: "2. Pegawai Perlindungan Data (DPO)",
    s2: "VGO secara sukarela telah melantik Pegawai Perlindungan Data (DPO) di bawah PDPA 2024. Untuk perkara privasi, sila hubungi:Nama DPO: Chong Kar Wei\nE-mel: 待填\nTelefon: 待填\nAlamat: Malaysia (待填)\n\nDPO mestilah pemastautin Malaysia (sekurang-kurangnya 180 hari setahun) dan mahir dalam Bahasa Malaysia dan Bahasa Inggeris.\n\nJika berlaku kebocoran data, kami akan memaklumkan pengawal selia dalam 72 jam dan pengguna terjejas dalam 7 hari.",
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
    s10: "Untuk sebarang pertanyaan privasi, e-mel kami di: support.vgo@gmail.com",
    s11_t: "11. Versi Bahasa",
    s11: "Polisi ini dilaksanakan dalam Bahasa Inggeris. Versi Bahasa Inggeris adalah versi yang berwibawa dan mengikat. Versi Bahasa Malaysia disediakan semata-mata untuk mematuhi PDPA dan untuk kemudahan pengguna. Sekiranya terdapat sebarang ketidakselarasan atau percanggahan, versi Bahasa Inggeris akan diutamakan dalam semua aspek.",
  },
} as const;

export default function PrivacyPage() {
  const { lang } = useLang();
  const c = (C as any)[lang] ?? C.en;
  const SECTIONS = [
    { t: c.s1_t, d: c.s1 }, { t: c.s2_t, d: c.s2 }, { t: c.s3_t, d: c.s3 },
    { t: c.s4_t, d: c.s4 }, { t: c.s5_t, d: c.s5 }, { t: c.s6_t, d: c.s6 },
    { t: c.s7_t, d: c.s7 }, { t: c.s8_t, d: c.s8 }, { t: c.s9_t, d: c.s9 },
    { t: c.s10_t, d: c.s10 }, { t: c.s11_t, d: c.s11 },
  ];
  return (
    <LegalShell label={c.label} title={c.title} version={c.updated}>
      <div className="note-box">{c.lang_note}</div>
      <p>{c.intro}</p>
      {SECTIONS.map((s) => (
        <section key={s.t}>
          <h2>{s.t}</h2>
          <p className="sub whitespace-pre-line">{s.d}</p>
        </section>
      ))}
    </LegalShell>
  );
}
