"use client";
import { useLang } from "@/lib/i18n";
import LegalShell from "@/components/LegalShell";

const C = {
  en: {
    label: "Terms of Service", title: "Terms of Service",
    updated: "Last updated: January 2026",
    lang_note: "These terms are presented in English and Bahasa Malaysia. Both versions are authoritative. In the event of any conflict, the Bahasa Malaysia version shall prevail for matters subject to CPETTR 2024 statutory disclosure (service descriptions, fees, refund policy, dispute resolution, seller information); the English version shall prevail for all other matters.",
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
    lang_note: "Terma ini disediakan dalam Bahasa Inggeris dan Bahasa Malaysia. Kedua-dua versi adalah berwibawa. Sekiranya berlaku percanggahan, versi Bahasa Malaysia akan diguna pakai bagi perkara yang tertakluk kepada pendedahan statutori CPETTR 2024 (penerangan perkhidmatan, fi, dasar bayaran balik, penyelesaian pertikaian, maklumat penjual); versi Bahasa Inggeris akan diguna pakai bagi semua perkara lain.",
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
  const c = (C as any)[lang] ?? C.en;
  const SECTIONS = [
    { t: c.s1_t, d: c.s1 }, { t: c.s2_t, d: c.s2 }, { t: c.s3_t, d: c.s3 }, { t: c.s4_t, d: c.s4 },
    { t: c.s5_t, d: c.s5 }, { t: c.s6_t, d: c.s6 }, { t: c.s7_t, d: c.s7 }, { t: c.s8_t, d: c.s8 },
    { t: c.s10_t, d: c.s10 },
  ];
  return (
      <LegalShell label={c.label} title={c.title} version={c.updated}>
        <div className="note-box">{c.lang_note}</div>
        <p>{c.intro}</p>
        {SECTIONS.map((s) => (
          <section key={s.t}>
            <h2>{s.t}</h2>
            <p className="sub">{s.d}</p>
          </section>
        ))}
      </LegalShell>
  );
}
