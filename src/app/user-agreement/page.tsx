"use client";
import { useLang } from "@/lib/i18n";
import LegalShell from "@/components/LegalShell";
type Sec = { t: string; c: string[] };
const C: Record<string, { label: string; title: string; version: string; intro: string; note: string; secs: Sec[]; sig: string }> = {
  en: {
    label: "User Service Agreement", title: "VGO User Service Agreement",
    version: "Version 2026-U-V1 ｜ Effective: 27 September 2026",
    intro: "This Agreement is entered into between VGO (V Go On) (\u201cVGO\u201d or the \u201cPlatform\u201d) and the user of the Platform's services (\u201cUser\u201d or \u201cyou\u201d). By clicking \u201cAgree and Continue\u201d or confirming via any electronic means, you are deemed to have read, understood, and accepted all terms of this Agreement.",
    note: "Under Malaysia's Electronic Commerce Act 2006, this Agreement is executed electronically and carries full legal effect. This Agreement, together with the Terms of Service and Privacy Policy, forms VGO's complete legal framework.",
    secs: [
      { t: "1. Definitions", c: [
        "1.1 \u201cPlatform\u201d means the VGO website, App, and related technical services.",
        "1.2 \u201cUser\u201d means the end consumer who books or purchases services via the Platform.",
        "1.3 \u201cService Provider\u201d means a merchant, pro, or artisan approved by VGO.",
        "1.4 \u201cService\u201d means home services provided by the Service Provider to the User via the Platform.",
      ]},
      { t: "2. Platform Role", c: [
        "2.1 VGO acts solely as a technology intermediary providing information matching, order management, and payment settlement.",
        "2.2 VGO is not the service provider and is not directly liable for the quality, legality, or safety of services.",
        "2.3 VGO makes reasonable efforts to verify Service Provider qualifications but does not guarantee service quality.",
      ]},
      { t: "3. User Rights", c: [
        "3.1 Users may book and purchase services per Platform rules.",
        "3.2 Users may post genuine reviews of services.",
        "3.3 Users may access, correct, and delete their personal data as permitted by law.",
        "3.4 Users may lodge complaints with Platform support regarding service disputes.",
      ]},
      { t: "4. User Obligations", c: [
        "4.1 Provide true, accurate, and complete registration information.",
        "4.2 Pay service fees on time; no malicious non-payment or fraud.",
        "4.3 Respect Service Providers; no harassment, discrimination, or abuse.",
        "4.4 Comply with Malaysian laws; no illegal activity via the Platform.",
        "4.5 Do not bypass the Platform to transact privately with Service Providers.",
      ]},
      { t: "5. Payment & Refund", c: [
        "5.1 All prices are in Malaysian Ringgit (RM).",
        "5.2 Payments are processed via Platform-designated third-party channels.",
        "5.3 Cancellation before service starts: full refund. Cancellation after start: settled by completed portion.",
        "5.4 If service is not performed or not completed, the User may request a full refund.",
        "5.5 Refunds are processed within 3-7 business days.",
      ]},
      { t: "6. Dispute Handling", c: [
        "6.1 Disputes between the User and Service Provider should first be resolved by friendly negotiation.",
        "6.2 If unresolved, the User may complain to Platform support; VGO will assist reasonably but is not directly liable for compensation.",
        "6.3 The User may also complain to the Tribunal for Consumer Claims Malaysia (TTPM).",
      ]},
      { t: "7. Personal Data Protection", c: [
        "7.1 VGO strictly complies with Malaysia's Personal Data Protection Act 2010 (PDPA) and its amendments.",
        "7.2 Collection, use, and protection of User personal data are detailed in the Privacy Policy.",
        "7.3 The User agrees that VGO may disclose necessary contact and address information to Service Providers for service purposes.",
      ]},
      { t: "8. Limitation of Liability", c: [
        "8.1 The Platform is provided \u201cas is\u201d. VGO makes no express or implied warranties.",
        "8.2 Loss to the User arising from the Service Provider's independent acts is borne by the Service Provider; VGO is not directly liable.",
        "8.3 To the maximum extent permitted by law, VGO's aggregate liability to the User shall not exceed the total service fees paid by the User via the Platform in the preceding six (6) months.",
      ]},
      { t: "9. Prohibited Conduct", c: [
        "9.1 No fake orders, malicious refunds, or review manipulation.",
        "9.2 No illegal, infringing, pornographic, violent, or harassing content.",
        "9.3 No impersonation of others or misuse of qualifications.",
        "9.4 Violations may result in suspension or termination of the account and legal action.",
      ]},
      { t: "10. Term & Termination", c: [
        "10.1 This Agreement takes effect upon successful registration.",
        "10.2 The User may stop using the Platform and delete the account at any time.",
        "10.3 VGO may suspend or terminate the User's account at its sole discretion without prior notice.",
      ]},
      { t: "11. Governing Law & Dispute Resolution", c: [
        "11.1 This Agreement is governed by the laws of Malaysia.",
        "11.2 Disputes shall first be resolved through friendly negotiation; failing which, they shall be submitted to the courts of Kuala Lumpur.",
      ]},
      { t: "12. Miscellaneous", c: [
        "12.1 This Agreement constitutes the entire agreement between the parties.",
        "12.2 If any provision is held invalid, the validity of the remaining provisions is unaffected.",
        "12.3 Electronic execution is legally valid; clicking \u201cAgree\u201d constitutes a contract.",
        "12.4 Notices may be sent via Platform announcements, email, or SMS.",
        "12.5 Language Version: This Agreement is executed in the English language. The English version shall be the authoritative and controlling version. Any translation of this Agreement into any other language, including but not limited to Bahasa Malaysia, is provided solely for the convenience of the parties and shall not be legally binding. In the event of any inconsistency or conflict between the English version and any translated version, the English version shall prevail in all respects.",
      ]},
    ],
    sig: "I have carefully read and agree to all terms of this Agreement, particularly Article 2 (Platform Role), Article 5 (Payment & Refund), Article 7 (Personal Data Protection), and Article 8 (Limitation of Liability). By clicking \u201cAgree and Continue\u201d, this Agreement becomes effective.",
  },
  ms: {
    label: "Perjanjian Perkhidmatan Pengguna", title: "Perjanjian Perkhidmatan Pengguna VGO",
    version: "Versi 2026-U-V1 ｜ Berkuat kuasa: 27 September 2026",
    intro: "Perjanjian ini dimeterai antara VGO (V Go On) (\u201cVGO\u201d atau \u201cPlatform\u201d) dengan pengguna perkhidmatan Platform (\u201cPengguna\u201d atau \u201canda\u201d). Dengan mengklik \u201cSetuju dan Teruskan\u201d atau mengesahkan melalui apa-apa cara elektronik, anda dianggap telah membaca, memahami, dan menerima semua terma Perjanjian ini.",
    note: "Di bawah Akta Perdagangan Elektronik 2006 Malaysia, Perjanjian ini dilaksanakan secara elektronik dan mempunyai kesan undang-undang penuh. Perjanjian ini, bersama Terma Perkhidmatan dan Dasar Privasi, membentuk rangka kerja undang-undang lengkap VGO.",
    secs: [
      { t: "1. Definisi", c: [
        "1.1 \u201cPlatform\u201d merujuk kepada laman web, App, dan perkhidmatan teknikal berkaitan VGO.",
        "1.2 \u201cPengguna\u201d merujuk kepada pengguna akhir yang menempah atau membeli perkhidmatan melalui Platform.",
        "1.3 \u201cPenyedia Perkhidmatan\u201d merujuk kepada peniaga, tukang, atau tukang kraf yang diluluskan oleh VGO.",
        "1.4 \u201cPerkhidmatan\u201d merujuk kepada perkhidmatan ke rumah yang disediakan oleh Penyedia Perkhidmatan kepada Pengguna melalui Platform.",
      ]},
      { t: "2. Peranan Platform", c: [
        "2.1 VGO bertindak semata-mata sebagai perantara teknologi yang menyediakan padanan maklumat, pengurusan pesanan, dan penyelesaian pembayaran.",
        "2.2 VGO bukan penyedia perkhidmatan dan tidak bertanggungjawab secara langsung terhadap kualiti, kesahihan, atau keselamatan perkhidmatan.",
        "2.3 VGO membuat usaha munasabah untuk mengesahkan kelayakan Penyedia Perkhidmatan tetapi tidak menjamin kualiti perkhidmatan.",
      ]},
      { t: "3. Hak Pengguna", c: [
        "3.1 Pengguna boleh menempah dan membeli perkhidmatan mengikut peraturan Platform.",
        "3.2 Pengguna boleh menyiarkan ulasan tulen terhadap perkhidmatan.",
        "3.3 Pengguna boleh mengakses, membetulkan, dan memadam data peribadi mereka seperti dibenarkan oleh undang-undang.",
        "3.4 Pengguna boleh membuat aduan kepada sokongan Platform berkenaan pertikaian perkhidmatan.",
      ]},
      { t: "4. Kewajipan Pengguna", c: [
        "4.1 Memberikan maklumat pendaftaran yang benar, tepat, dan lengkap.",
        "4.2 Membayar fi perkhidmatan tepat pada masanya; tiada kegagalan bayaran berniat jahat atau penipuan.",
        "4.3 Menghormati Penyedia Perkhidmatan; tiada gangguan, diskriminasi, atau penderaan.",
        "4.4 Mematuhi undang-undang Malaysia; tiada aktiviti haram melalui Platform.",
        "4.5 Jangan memintas Platform untuk bertransaksi secara peribadi dengan Penyedia Perkhidmatan.",
      ]},
      { t: "5. Pembayaran & Bayaran Balik", c: [
        "5.1 Semua harga adalah dalam Ringgit Malaysia (RM).",
        "5.2 Pembayaran diproses melalui saluran pihak ketiga yang ditetapkan oleh Platform.",
        "5.3 Pembatalan sebelum perkhidmatan bermula: bayaran balik penuh. Pembatalan selepas bermula: diselesaikan mengikut bahagian yang telah selesai.",
        "5.4 Jika perkhidmatan tidak dijalankan atau tidak diselesaikan, Pengguna boleh meminta bayaran balik penuh.",
        "5.5 Bayaran balik diproses dalam 3-7 hari bekerja.",
      ]},
      { t: "6. Pengendalian Pertikaian", c: [
        "6.1 Pertikaian antara Pengguna dan Penyedia Perkhidmatan hendaklah diselesaikan terlebih dahulu melalui rundingan mesra.",
        "6.2 Jika tidak selesai, Pengguna boleh mengadu kepada sokongan Platform; VGO akan membantu secara munasabah tetapi tidak bertanggungjawab secara langsung untuk pampasan.",
        "6.3 Pengguna juga boleh mengadu kepada Tribunal Tuntutan Pengguna Malaysia (TTPM).",
      ]},
      { t: "7. Perlindungan Data Peribadi", c: [
        "7.1 VGO mematuhi sepenuhnya Akta Perlindungan Data Peribadi 2010 (PDPA) Malaysia dan pindaannya.",
        "7.2 Pengumpulan, penggunaan, dan perlindungan data peribadi Pengguna diperincikan dalam Dasar Privasi.",
        "7.3 Pengguna bersetuju bahawa VGO boleh mendedahkan maklumat hubungan dan alamat yang perlu kepada Penyedia Perkhidmatan untuk tujuan perkhidmatan.",
      ]},
      { t: "8. Had Tanggungjawab", c: [
        "8.1 Platform disediakan \u201csebagaimana adanya\u201d. VGO tidak memberikan sebarang jaminan nyata atau tersirat.",
        "8.2 Kerugian kepada Pengguna yang timbul daripada tindakan bebas Penyedia Perkhidmatan ditanggung oleh Penyedia Perkhidmatan; VGO tidak bertanggungjawab secara langsung.",
        "8.3 Setakat yang dibenarkan oleh undang-undang, jumlah liabiliti VGO terhadap Pengguna tidak melebihi jumlah fi perkhidmatan yang dibayar oleh Pengguna melalui Platform dalam enam (6) bulan sebelumnya.",
      ]},
      { t: "9. Perbuatan Dilarang", c: [
        "9.1 Tiada pesanan palsu, bayaran balik berniat jahat, atau manipulasi ulasan.",
        "9.2 Tiada kandungan haram, melanggar hak, lucah, ganas, atau mengganggu.",
        "9.3 Tiada penyamaran identiti atau penyalahgunaan kelayakan.",
        "9.4 Pelanggaran boleh menyebabkan penggantungan atau penamatan akaun dan tindakan undang-undang.",
      ]},
      { t: "10. Tempoh & Penamatan", c: [
        "10.1 Perjanjian ini berkuat kuasa selepas pendaftaran berjaya.",
        "10.2 Pengguna boleh berhenti menggunakan Platform dan memadam akaun pada bila-bila masa.",
        "10.3 VGO boleh menggantung atau menamatkan akaun Pengguna mengikut budi bicaranya tanpa notis terlebih dahulu.",
      ]},
      { t: "11. Undang-undang & Penyelesaian Pertikaian", c: [
        "11.1 Perjanjian ini ditadbir oleh undang-undang Malaysia.",
        "11.2 Pertikaian hendaklah diselesaikan terlebih dahulu melalui rundingan mesra; jika gagal, ia hendaklah dikemukakan kepada mahkamah Kuala Lumpur.",
      ]},
      { t: "12. Lain-lain", c: [
        "12.1 Perjanjian ini merupakan keseluruhan perjanjian antara pihak-pihak.",
        "12.2 Jika mana-mana peruntukan dianggap tidak sah, kesahihan peruntukan selebihnya tidak terjejas.",
        "12.3 Pelaksanaan elektronik adalah sah dari segi undang-undang; mengklik \u201cSetuju\u201d merupakan kontrak.",
        "12.4 Notis boleh dihantar melalui pengumuman Platform, e-mel, atau SMS.",
        "12.5 Versi Bahasa: Perjanjian ini dilaksanakan dalam Bahasa Inggeris. Versi Bahasa Inggeris adalah versi yang berwibawa dan mengikat. Sebarang terjemahan Perjanjian ini ke dalam bahasa lain, termasuk tetapi tidak terhad kepada Bahasa Malaysia, disediakan semata-mata untuk kemudahan pihak-pihak dan tidak mengikat dari segi undang-undang. Sekiranya terdapat sebarang ketidakselarasan atau percanggahan antara versi Bahasa Inggeris dan mana-mana versi terjemahan, versi Bahasa Inggeris akan diutamakan dalam semua aspek.",
      ]},
    ],
    sig: "Saya telah membaca dengan teliti dan bersetuju dengan semua terma Perjanjian ini, terutamanya Perkara 2 (Peranan Platform), Perkara 5 (Pembayaran & Bayaran Balik), Perkara 7 (Perlindungan Data Peribadi), dan Perkara 8 (Had Tanggungjawab). Dengan mengklik \u201cSetuju dan Teruskan\u201d, Perjanjian ini berkuat kuasa.",
  },
};
export default function UserAgreementPage() {
  const { lang } = useLang();
  const c = C[lang] ?? C.en;
  return (
    <LegalShell label={c.label} title={c.title} version={c.version}>
      <p>{c.intro}</p>
      <div className="note-box">{c.note}</div>
      {c.secs.map((s, i) => (
        <section key={i}>
          <h2>{s.t}</h2>
          {s.c.map((p, j) => <p key={j} className="sub">{p}</p>)}
        </section>
      ))}
      <div className="sig-box">
        <strong>【{lang === "zh" ? "同意确认" : lang === "ms" ? "Pengesahan Persetujuan" : "Confirmation"}】</strong>
        <p style={{ marginTop: 8 }}>{c.sig}</p>
        <p style={{ fontSize: 12, color: "#9a3412", marginTop: 10 }}>support.vgo@gmail.com</p>
      </div>
    </LegalShell>
  );
}
