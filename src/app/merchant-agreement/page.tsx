"use client";
import { useLang } from "@/lib/i18n";
import LegalShell from "@/components/LegalShell";

type Sec = { t: string; c: { sub: boolean; txt: string }[] };
const C: Record<string, { label: string; title: string; version: string; intro: string; note: string; secs: Sec[]; sig: string; contact: string }> = {
  en: {
    label: "Merchant Agreement", title: "VGO Merchant Agreement",
    version: "Version 2026-M-V1 ｜ Effective: 27 September 2026",
    intro: "This Agreement is entered into between VGO (V Go On) (\u201cVGO\u201d or the \u201cPlatform\u201d) and the business entity applying to become a merchant on the VGO Platform (\u201cMerchant\u201d or \u201cyou\u201d). By clicking \u201cAgree and Continue\u201d or confirming via any electronic means, you are deemed to have read, understood, and accepted all terms of this Agreement.",
    note: "Under Malaysia's Electronic Commerce Act 2006, this Agreement is executed electronically and carries full legal effect. This Agreement, together with the Privacy Policy and Terms of Service, forms the complete legal framework. In case of conflict, this Agreement prevails.",
    secs: [
      { t: "1. Definitions", c: [
        { sub: true, txt: "1.1 \u201cPlatform\u201d means the VGO website, mobile application, and related technical services." },
        { sub: true, txt: "1.2 \u201cMerchant\u201d means a business entity approved by VGO to sell goods or services on the Platform." },
        { sub: true, txt: "1.3 \u201cCustomer\u201d means the end user who places orders via the Platform." },
        { sub: true, txt: "1.4 \u201cCommission\u201d means the service fee charged by VGO for completed orders on the Platform." },
        { sub: true, txt: "1.5 \u201cDeposit\u201d means the performance bond required for certain categories or partnership models." },
      ]},
      { t: "2. Platform Role", c: [
        { sub: true, txt: "2.1 VGO acts solely as a technology intermediary providing information matching, order management, and payment settlement. It is not the provider of goods or services." },
        { sub: true, txt: "2.2 This Agreement does not constitute employment, partnership, franchise, or joint venture. The Merchant is an independent business operating at its own risk." },
        { sub: true, txt: "2.3 VGO does not participate in transactions between Merchant and Customer, and is not directly liable for the quality, legality, or safety of goods or services." },
      ]},
      { t: "3. Merchant Obligations", c: [
        { sub: true, txt: "3.1 Ensure all submitted information (business registration, shop qualifications, category, identity) is true, accurate, complete, and valid." },
        { sub: true, txt: "3.2 Ensure possession of all licenses, permits, and tax registrations required for lawful operation in Malaysia." },
        { sub: true, txt: "3.3 Transparent pricing, honest descriptions of goods or services; no false advertising or misleading." },
        { sub: true, txt: "3.4 Deliver on time; maintain product or service quality; comply with industry standards and VGO service specifications." },
        { sub: true, txt: "3.5 Respect customers; no harassment, discrimination, or abuse; respond to customer complaints within 24 hours." },
        { sub: true, txt: "3.6 Prohibited acts: (a) soliciting off-platform transactions to evade commission; (b) posting false reviews or manipulating ratings; (c) impersonating others or misusing trademarks; (d) uploading illegal, infringing, or prohibited goods; (e) selling counterfeit or substandard goods." },
        { sub: true, txt: "3.7 Tax Responsibility: All taxes arising from the Merchant's business (including income tax, consumption tax, SST, etc.) are the Merchant's sole responsibility. VGO will withhold only where legally required." },
      ]},
      { t: "4. Platform Rights", c: [
        { sub: true, txt: "4.1 VGO may review merchant applications and reserves the right to reject or revoke eligibility without explanation." },
        { sub: true, txt: "4.2 VGO may monitor the Merchant's operations, product quality, customer reviews, and compliance." },
        { sub: true, txt: "4.3 VGO may, at its discretion, take one or more of the following actions for violations: warning, corrective notice, delisting products, temporary or permanent shop closure, forfeiture of Deposit, freezing of settlement funds, or legal action." },
        { sub: true, txt: "4.4 VGO may display Merchant shop information, product listings, and customer reviews on the Platform for promotional purposes." },
        { sub: true, txt: "4.5 VGO reserves the right to amend this Agreement based on legal or operational needs. Amendments will be notified via Platform announcements; continued use constitutes acceptance." },
      ]},
      { t: "5. Commission & Settlement", c: [
        { sub: true, txt: "5.1 Commission rates are published on the Platform. VGO may adjust rates based on market conditions, with prior notice." },
        { sub: true, txt: "5.2 After order completion, VGO will settle the balance (net of commission) to the Merchant's designated account within the agreed cycle (e.g., weekly, monthly)." },
        { sub: true, txt: "5.3 In the event of refunds or returns, VGO may deduct the corresponding amount from the Merchant's pending settlement or Deposit." },
        { sub: true, txt: "5.4 Minimum Settlement: If accumulated payable is below RM 50, settlement is deferred to the next cycle." },
      ]},
      { t: "6. Intellectual Property & Data", c: [
        { sub: true, txt: "6.1 All Platform content (software, trademarks, logo, design, text, database) is the intellectual property of VGO." },
        { sub: true, txt: "6.2 The Merchant grants VGO a worldwide, non-exclusive, royalty-free license to use, reproduce, and display uploaded content for promotion of the Platform, shop, goods, and services." },
        { sub: true, txt: "6.3 The Merchant warrants that all uploaded product images, descriptions, and trademarks are legally authorized. Any third-party claim arising from infringement is the Merchant's sole responsibility." },
        { sub: true, txt: "6.4 Data Ownership: Operational data generated by the Merchant on the Platform (order records, sales statistics, customer reviews) is owned by VGO." },
        { sub: true, txt: "6.5 Review Ownership: Customer review content is owned by VGO. The Merchant shall not request removal of genuine reviews or manipulate ratings in any way." },
      ]},
      { t: "7. Personal Data Protection", c: [
        { sub: true, txt: "7.1 Both parties undertake to strictly comply with Malaysia's Personal Data Protection Act 2010 (PDPA) and its amendments." },
        { sub: true, txt: "7.2 When handling customer personal data, the Merchant shall: use it solely to fulfill orders; apply appropriate security measures; not disclose to third parties without consent; delete or return it upon VGO's request after order completion." },
        { sub: true, txt: "7.3 Any actual or suspected data breach must be reported to VGO immediately." },
      ]},
      { t: "8. Confidentiality", c: [
        { sub: true, txt: "8.1 The Merchant shall keep confidential all of VGO's trade secrets, technical information, customer data, and other non-public information." },
        { sub: true, txt: "8.2 Confidentiality obligations survive termination of this Agreement." },
      ]},
      { t: "9. Limitation of Liability", c: [
        { sub: true, txt: "9.1 The Platform is provided \u201cas is\u201d. VGO makes no express or implied warranties regarding continuity, error-free operation, or security." },
        { sub: true, txt: "9.2 The Merchant bears full responsibility for the quality, safety, and legality of its goods or services. Any loss to customers or third parties arising from the Merchant's goods or services is borne by the Merchant." },
        { sub: true, txt: "9.3 Liability Cap: To the maximum extent permitted by law, VGO's aggregate liability to the Merchant shall not exceed the total commission received by VGO from such Merchant in the preceding six (6) months. VGO is not liable for any indirect, incidental, punitive, or consequential damages." },
        { sub: true, txt: "9.4 Force Majeure: Neither party is liable for failure to perform due to force majeure (natural disasters, epidemics, war, governmental acts, network outages), provided prompt notice is given and reasonable efforts are made to mitigate loss." },
      ]},
      { t: "10. Term & Termination", c: [
        { sub: true, txt: "10.1 This Agreement takes effect upon approval of the onboarding application." },
        { sub: true, txt: "10.2 Termination: (a) either party may terminate with 30 days' written notice; (b) immediate termination for material breach not cured within 15 days; (c) VGO may suspend or terminate the Merchant's account at its sole discretion without prior notice." },
        { sub: true, txt: "10.3 Upon termination, VGO will settle all payable amounts up to the termination date; the Merchant shall immediately cease using the Platform, delete customer information obtained, and remove all product and shop listings." },
      ]},
      { t: "11. Governing Law & Dispute Resolution", c: [
        { sub: true, txt: "11.1 This Agreement is governed by and construed under the laws of Malaysia." },
        { sub: true, txt: "11.2 Disputes shall first be resolved through friendly negotiation; failing which, they shall be submitted to the courts of Kuala Lumpur." },
      ]},
      { t: "12. Miscellaneous", c: [
        { sub: true, txt: "12.1 This Agreement constitutes the entire agreement between the parties and supersedes all prior communications." },
        { sub: true, txt: "12.2 If any provision is held invalid or unenforceable, the validity of the remaining provisions is unaffected." },
        { sub: true, txt: "12.3 Electronic Execution: Under the Electronic Commerce Act 2006, clicking \u201cAgree\u201d on the Platform constitutes a valid contract." },
        { sub: true, txt: "12.4 Notices may be sent via Platform announcements, email, or SMS to the Merchant's registered contact." },
        { sub: true, txt: "12.5 Language Version: This Agreement is executed in the English language. The English version shall be the authoritative and controlling version. Any translation of this Agreement into any other language, including but not limited to Bahasa Malaysia, is provided solely for the convenience of the parties and shall not be legally binding. In the event of any inconsistency or conflict between the English version and any translated version, the English version shall prevail in all respects." },
      ]},
    ],
    sig: "I have carefully read and agree to all terms of this Agreement, particularly Article 4 (Platform Rights), Article 7 (Personal Data Protection), and Article 9 (Limitation of Liability). By clicking \u201cAgree and Continue\u201d, this Agreement becomes effective.",
    contact: "For inquiries, contact: support.vgo@gmail.com",
  },
  ms: {
    label: "Perjanjian Peniaga", title: "Perjanjian Peniaga VGO",
    version: "Versi 2026-M-V1 ｜ Berkuat kuasa: 27 September 2026",
    intro: "Perjanjian ini dimeterai antara VGO (V Go On) (\u201cVGO\u201d atau \u201cPlatform\u201d) dengan entiti perniagaan yang memohon menjadi peniaga di Platform VGO (\u201cPeniaga\u201d atau \u201canda\u201d). Dengan mengklik \u201cSetuju dan Teruskan\u201d atau mengesahkan melalui apa-apa cara elektronik, anda dianggap telah membaca, memahami, dan menerima semua terma Perjanjian ini.",
    note: "Di bawah Akta Perdagangan Elektronik 2006 Malaysia, Perjanjian ini dilaksanakan secara elektronik dan mempunyai kesan undang-undang penuh. Perjanjian ini, bersama Dasar Privasi dan Terma Perkhidmatan, membentuk rangka kerja undang-undang lengkap. Jika berlaku percanggahan, Perjanjian ini diutamakan.",
    secs: [
      { t: "1. Definisi", c: [
        { sub: true, txt: "1.1 \u201cPlatform\u201d merujuk kepada laman web, aplikasi mudah alih, dan perkhidmatan teknikal berkaitan VGO." },
        { sub: true, txt: "1.2 \u201cPeniaga\u201d merujuk kepada entiti perniagaan yang diluluskan oleh VGO untuk menjual barang atau perkhidmatan di Platform." },
        { sub: true, txt: "1.3 \u201cPelanggan\u201d merujuk kepada pengguna akhir yang membuat pesanan melalui Platform." },
        { sub: true, txt: "1.4 \u201cKomisen\u201d merujuk kepada fi perkhidmatan yang dikenakan oleh VGO bagi pesanan yang diselesaikan di Platform." },
        { sub: true, txt: "1.5 \u201cDeposit\u201d merujuk kepada bon prestasi yang diperlukan untuk kategori tertentu atau model perkongsian." },
      ]},
      { t: "2. Peranan Platform", c: [
        { sub: true, txt: "2.1 VGO bertindak semata-mata sebagai perantara teknologi yang menyediakan padanan maklumat, pengurusan pesanan, dan penyelesaian pembayaran. Ia bukan penyedia barang atau perkhidmatan." },
        { sub: true, txt: "2.2 Perjanjian ini tidak membentuk pekerjaan, perkongsian, francais, atau usaha sama. Peniaga adalah entiti perniagaan bebas yang beroperasi atas risiko sendiri." },
        { sub: true, txt: "2.3 VGO tidak menyertai transaksi antara Peniaga dan Pelanggan, dan tidak bertanggungjawab secara langsung terhadap kualiti, kesahihan, atau keselamatan barang atau perkhidmatan." },
      ]},
      { t: "3. Kewajipan Peniaga", c: [
        { sub: true, txt: "3.1 Memastikan semua maklumat yang dikemukakan (pendaftaran perniagaan, kelayakan kedai, kategori, identiti) adalah benar, tepat, lengkap, dan sah." },
        { sub: true, txt: "3.2 Memastikan memiliki semua lesen, permit, dan pendaftaran cukai yang diperlukan untuk beroperasi secara sah di Malaysia." },
        { sub: true, txt: "3.3 Harga telus, penerangan jujur tentang barang atau perkhidmatan; tiada pengiklanan palsu atau mengelirukan." },
        { sub: true, txt: "3.4 Menghantar tepat pada masanya; mengekalkan kualiti produk atau perkhidmatan; mematuhi piawaian industri dan spesifikasi perkhidmatan VGO." },
        { sub: true, txt: "3.5 Menghormati pelanggan; tiada gangguan, diskriminasi, atau penderaan; balas aduan pelanggan dalam 24 jam." },
        { sub: true, txt: "3.6 Perbuatan dilarang: (a) memujuk pelanggan bertransaksi di luar Platform untuk mengelak komisen; (b) menyiarkan ulasan palsu atau memanipulasi penilaian; (c) menyamar sebagai orang lain atau menyalahgunakan tanda dagangan; (d) memuat naik barang haram, melanggar hak, atau dilarang; (e) menjual barang tiruan atau tidak berkualiti." },
        { sub: true, txt: "3.7 Tanggungjawab Cukai: Semua cukai yang timbul daripada perniagaan Peniaga (termasuk cukai pendapatan, cukai penggunaan, SST, dll.) adalah tanggungjawab Peniaga sepenuhnya. VGO akan menahan hanya di mana dikehendaki oleh undang-undang." },
      ]},
      { t: "4. Hak Platform", c: [
        { sub: true, txt: "4.1 VGO boleh menyemak permohonan peniaga dan berhak menolak atau membatalkan kelayakan tanpa penjelasan." },
        { sub: true, txt: "4.2 VGO boleh memantau operasi, kualiti produk, ulasan pelanggan, dan pematuhan Peniaga." },
        { sub: true, txt: "4.3 VGO boleh, mengikut budi bicaranya, mengambil satu atau lebih tindakan berikut atas pelanggaran: amaran, notis pembetulan, menyahsenarai produk, penutupan kedai sementara atau kekal, pelucutan Deposit, pembekuan dana penyelesaian, atau tindakan undang-undang." },
        { sub: true, txt: "4.4 VGO boleh memaparkan maklumat kedai, penyenaraian produk, dan ulasan pelanggan Peniaga di Platform untuk tujuan promosi." },
        { sub: true, txt: "4.5 VGO berhak meminda Perjanjian ini berdasarkan keperluan undang-undang atau operasi. Pindaan akan dimaklumkan melalui pengumuman Platform; penggunaan berterusan dianggap sebagai penerimaan." },
      ]},
      { t: "5. Komisen & Penyelesaian", c: [
        { sub: true, txt: "5.1 Kadar komisen diumumkan di Platform. VGO boleh menyelaraskan kadar mengikut keadaan pasaran, dengan notis terlebih dahulu." },
        { sub: true, txt: "5.2 Selepas pesanan selesai, VGO akan menyelesaikan baki (selepas ditolak komisen) ke akaun Peniaga yang ditetapkan dalam kitaran yang dipersetujui (contohnya, mingguan, bulanan)." },
        { sub: true, txt: "5.3 Sekiranya berlaku bayaran balik atau pemulangan, VGO boleh menolak jumlah yang berkenaan daripada penyelesaian tertunggak atau Deposit Peniaga." },
        { sub: true, txt: "5.4 Penyelesaian Minimum: Jika jumlah perlu dibayar terkumpul kurang daripada RM 50, penyelesaian ditangguhkan ke kitaran seterusnya." },
      ]},
      { t: "6. Harta Intelek & Data", c: [
        { sub: true, txt: "6.1 Semua kandungan Platform (perisian, tanda dagangan, logo, reka bentuk, teks, pangkalan data) adalah harta intelek VGO." },
        { sub: true, txt: "6.2 Peniaga memberikan VGO lesen seluruh dunia, bukan eksklusif, bebas royalti untuk menggunakan, menghasilkan semula, dan memaparkan kandungan yang dimuat naik bagi tujuan promosi Platform, kedai, barang, dan perkhidmatan." },
        { sub: true, txt: "6.3 Peniaga menjamin bahawa semua imej produk, penerangan, dan tanda dagangan yang dimuat naik adalah sah di sisi undang-undang. Sebarang tuntutan pihak ketiga yang timbul daripada pelanggaran adalah tanggungjawab Peniaga sepenuhnya." },
        { sub: true, txt: "6.4 Pemilikan Data: Data operasi yang dijana oleh Peniaga di Platform (rekod pesanan, statistik jualan, ulasan pelanggan) dimiliki oleh VGO." },
        { sub: true, txt: "6.5 Pemilikan Ulasan: Kandungan ulasan pelanggan dimiliki oleh VGO. Peniaga tidak boleh meminta pemadaman ulasan tulen atau memanipulasi penilaian dalam apa-apa cara." },
      ]},
      { t: "7. Perlindungan Data Peribadi", c: [
        { sub: true, txt: "7.1 Kedua-dua pihak berjanji mematuhi sepenuhnya Akta Perlindungan Data Peribadi 2010 (PDPA) Malaysia dan pindaannya." },
        { sub: true, txt: "7.2 Semasa mengendalikan data peribadi pelanggan, Peniaga hendaklah: menggunakannya semata-mata untuk memenuhi pesanan; menggunakan langkah keselamatan yang sewajarnya; tidak mendedahkan kepada pihak ketiga tanpa kebenaran; memadam atau memulangkannya atas permintaan VGO selepas pesanan selesai." },
        { sub: true, txt: "7.3 Sebarang pelanggaran data sebenar atau disyaki mesti dilaporkan kepada VGO dengan segera." },
      ]},
      { t: "8. Kerahsiaan", c: [
        { sub: true, txt: "8.1 Peniaga hendaklah merahsiakan semua rahsia dagang, maklumat teknikal, data pelanggan, dan maklumat bukan awam VGO yang lain." },
        { sub: true, txt: "8.2 Kewajipan kerahsiaan kekal selepas penamatan Perjanjian ini." },
      ]},
      { t: "9. Had Tanggungjawab", c: [
        { sub: true, txt: "9.1 Platform disediakan \u201csebagaimana adanya\u201d. VGO tidak memberikan sebarang jaminan nyata atau tersirat mengenai kesinambungan, operasi tanpa ralat, atau keselamatan." },
        { sub: true, txt: "9.2 Peniaga memikul tanggungjawab penuh terhadap kualiti, keselamatan, dan kesahihan barang atau perkhidmatannya. Sebarang kerugian kepada pelanggan atau pihak ketiga yang timbul daripada barang atau perkhidmatan Peniaga ditanggung oleh Peniaga." },
        { sub: true, txt: "9.3 Had Liabiliti: Setakat yang dibenarkan oleh undang-undang, jumlah liabiliti VGO terhadap Peniaga tidak melebihi jumlah komisen yang diterima VGO daripada Peniaga tersebut dalam enam (6) bulan sebelumnya. VGO tidak bertanggungjawab atas sebarang kerosakan tidak langsung, sampingan, punitif, atau berbangkit." },
        { sub: true, txt: "9.4 Force Majeure: Tiada pihak bertanggungjawab atas kegagalan melaksanakan akibat force majeure (bencana alam, wabak, peperangan, tindakan kerajaan, gangguan rangkaian), dengan syarat notis segera diberikan dan usaha munasabah dibuat untuk mengurangkan kerugian." },
      ]},
      { t: "10. Tempoh & Penamatan", c: [
        { sub: true, txt: "10.1 Perjanjian ini berkuat kuasa selepas kelulusan permohonan pendaftaran." },
        { sub: true, txt: "10.2 Penamatan: (a) mana-mana pihak boleh menamatkan dengan notis bertulis 30 hari; (b) penamatan serta-merta bagi pelanggaran material yang tidak dibetulkan dalam 15 hari; (c) VGO boleh menggantung atau menamatkan akaun Peniaga mengikut budi bicaranya tanpa notis terlebih dahulu." },
        { sub: true, txt: "10.3 Selepas penamatan, VGO akan menyelesaikan semua jumlah yang perlu dibayar sehingga tarikh penamatan; Peniaga hendaklah segera berhenti menggunakan Platform, memadam maklumat pelanggan yang diperoleh, dan mengalih keluar semua penyenaraian produk dan kedai." },
      ]},
      { t: "11. Undang-undang & Penyelesaian Pertikaian", c: [
        { sub: true, txt: "11.1 Perjanjian ini ditadbir dan ditafsirkan di bawah undang-undang Malaysia." },
        { sub: true, txt: "11.2 Pertikaian hendaklah diselesaikan terlebih dahulu melalui rundingan mesra; jika gagal, ia hendaklah dikemukakan kepada mahkamah Kuala Lumpur." },
      ]},
      { t: "12. Lain-lain", c: [
        { sub: true, txt: "12.1 Perjanjian ini merupakan keseluruhan perjanjian antara pihak-pihak dan menggantikan semua komunikasi sebelumnya." },
        { sub: true, txt: "12.2 Jika mana-mana peruntukan dianggap tidak sah atau tidak boleh dikuatkuasakan, kesahihan peruntukan selebihnya tidak terjejas." },
        { sub: true, txt: "12.3 Pelaksanaan Elektronik: Di bawah Akta Perdagangan Elektronik 2006, mengklik \u201cSetuju\u201d di Platform merupakan kontrak yang sah." },
        { sub: true, txt: "12.4 Notis boleh dihantar melalui pengumuman Platform, e-mel, atau SMS ke kenalan berdaftar Peniaga." },
        { sub: true, txt: "12.5 Versi Bahasa: Perjanjian ini dilaksanakan dalam Bahasa Inggeris. Versi Bahasa Inggeris adalah versi yang berwibawa dan mengikat. Sebarang terjemahan Perjanjian ini ke dalam bahasa lain, termasuk tetapi tidak terhad kepada Bahasa Malaysia, disediakan semata-mata untuk kemudahan pihak-pihak dan tidak mengikat dari segi undang-undang. Sekiranya terdapat sebarang ketidakselarasan atau percanggahan antara versi Bahasa Inggeris dan mana-mana versi terjemahan, versi Bahasa Inggeris akan diutamakan dalam semua aspek." },
      ]},
    ],
    sig: "Saya telah membaca dengan teliti dan bersetuju dengan semua terma Perjanjian ini, terutamanya Perkara 4 (Hak Platform), Perkara 7 (Perlindungan Data Peribadi), dan Perkara 9 (Had Tanggungjawab). Dengan mengklik \u201cSetuju dan Teruskan\u201d, Perjanjian ini berkuat kuasa.",
    contact: "Untuk pertanyaan, hubungi: support.vgo@gmail.com",
  },
};

export default function MerchantAgreementPage() {
  const { lang } = useLang();
  const c = C[lang] ?? C.en;
  return (
    <LegalShell label={c.label} title={c.title} version={c.version}>
      <p>{c.intro}</p>
      <div className="note-box">{c.note}</div>
      {c.secs.map((s, i) => (
        <section key={i}>
          <h2>{s.t}</h2>
          {s.c.map((p, j) => (
            <p key={j} className={p.sub ? "sub" : ""}>{p.txt}</p>
          ))}
        </section>
      ))}
      <div className="sig-box">
        <strong>【{lang === "zh" ? "同意确认" : lang === "ms" ? "Pengesahan Persetujuan" : "Confirmation"}】</strong>
        <p style={{ marginTop: 8, marginBottom: 8 }}>{c.sig}</p>
        <p style={{ fontSize: 12, color: "#6b7280" }}>{c.contact}</p>
      </div>
    </LegalShell>
  );
}
