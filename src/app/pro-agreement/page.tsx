"use client";
import { useLang } from "@/lib/i18n";
import LegalShell from "@/components/LegalShell";
type Sec = { t: string; c: string[] };
const C: Record<string, { label: string; title: string; version: string; intro: string; note: string; secs: Sec[]; sig: string }> = {
  en: {
    label: "Pro Agreement", title: "VGO Pro Agreement",
    version: "Version 2026-P-V1 ｜ Effective: 27 September 2026",
    intro: "This Agreement is entered into between VGO (V Go On) (\u201cVGO\u201d or the \u201cPlatform\u201d) and the independent service provider applying to become a Pro/Artisan on the VGO Platform (\u201cPro\u201d or \u201cyou\u201d). By clicking \u201cAgree and Continue\u201d or confirming via any electronic means, you are deemed to have read, understood, and accepted all terms of this Agreement.",
    note: "Under Malaysia's Electronic Commerce Act 2006, this Agreement is executed electronically and carries full legal effect. This Agreement, together with the Terms of Service and Privacy Policy, forms VGO's complete legal framework.",
    secs: [
      { t: "1. Definitions", c: [
        "1.1 \u201cPlatform\u201d means the VGO website, App, and related technical services.",
        "1.2 \u201cPro\u201d means an independent service provider approved by VGO to receive orders and provide on-site services via the Platform, including technicians and artisans.",
        "1.3 \u201cCustomer\u201d means the end user who books Pro services via the Platform.",
        "1.4 \u201cCommission\u201d means the service fee charged by VGO for completed orders on the Platform.",
      ]},
      { t: "2. Independent Contractor", c: [
        "2.1 The Pro is an independent contractor, not an employee, agent, or partner of VGO.",
        "2.2 This Agreement does not constitute employment, partnership, or joint venture.",
        "2.3 The Pro decides independently whether to accept orders, when to go online, and how to provide services; VGO does not force assignment.",
        "2.4 The Pro bears all personal income tax, social security, insurance, and other statutory costs.",
      ]},
      { t: "3. Platform Role", c: [
        "3.1 VGO acts solely as a technology intermediary providing information matching, order management, and payment settlement.",
        "3.2 VGO does not participate in the service process and is not directly liable for service outcomes.",
      ]},
      { t: "4. Pro Obligations", c: [
        "4.1 Ensure identity, skills, and qualifications are genuine and valid; cooperate with Platform verification.",
        "4.2 Provide safe, professional, and timely services in accordance with Platform specifications and industry standards.",
        "4.3 Do not subcontract orders to third parties.",
        "4.4 Do not transact privately with customers to evade commission.",
        "4.5 Respect customers, protect their privacy; no harassment, discrimination, or abuse.",
        "4.6 Transparent pricing; no charges beyond those agreed on the Platform.",
        "4.7 The Pro bears responsibility for personal safety and equipment safety during service.",
      ]},
      { t: "5. Verification & Training", c: [
        "5.1 The Pro must pass VGO's identity, skill, and service-standard training verification.",
        "5.2 VGO reserves the right to audit Pro qualifications at any time.",
        "5.3 If verification fails, VGO may suspend or terminate the Pro's order-taking permission.",
      ]},
      { t: "6. Commission & Settlement", c: [
        "6.1 Commission rates are published on the Platform; VGO may adjust based on market conditions with prior notice.",
        "6.2 After order completion, VGO will settle the balance (net of commission) to the Pro's designated account within the agreed cycle.",
        "6.3 Minimum Settlement: If accumulated payable is below RM 50, settlement is deferred to the next cycle.",
        "6.4 In the event of refunds or complaints, VGO may deduct the corresponding amount from the Pro's pending settlement.",
      ]},
      { t: "7. Insurance & Safety", c: [
        "7.1 The Pro should obtain necessary personal accident and professional liability insurance (if applicable).",
        "7.2 Personal injury or property damage caused by the Pro during service is borne by the Pro.",
        "7.3 The Pro must not provide services while intoxicated, under the influence, fatigued, or unwell.",
      ]},
      { t: "8. Personal Data Protection", c: [
        "8.1 Both parties strictly comply with Malaysia's PDPA 2010.",
        "8.2 When handling customer personal data, the Pro shall use it solely to complete the order and not disclose to third parties.",
        "8.3 After service completion, the Pro shall delete customer information upon VGO's request.",
      ]},
      { t: "9. Platform Rights", c: [
        "9.1 VGO may review and monitor the Pro's service quality and compliance.",
        "9.2 For violations, VGO may at its discretion take action: warning, corrective notice, suspend order-taking, permanent ban, forfeiture of Deposit (if any), or legal action.",
        "9.3 VGO may display the Pro's verification info and service reviews on the Platform.",
      ]},
      { t: "10. Limitation of Liability", c: [
        "10.1 The Platform is provided \u201cas is\u201d. VGO makes no express or implied warranties.",
        "10.2 Any customer loss caused by the Pro during service is borne by the Pro.",
        "10.3 Liability Cap: VGO's aggregate liability to the Pro shall not exceed the total commission received by VGO from such Pro in the preceding six (6) months.",
        "10.4 Force Majeure: Neither party is liable for failure to perform due to force majeure (natural disasters, epidemics, war, governmental acts, network outages).",
      ]},
      { t: "11. Term & Termination", c: [
        "11.1 This Agreement takes effect upon approval of the onboarding application.",
        "11.2 Termination: either party may terminate with 30 days' written notice; immediate termination for material breach not cured within 15 days; VGO may suspend or terminate the Pro's account at its sole discretion without prior notice.",
        "11.3 Upon termination, VGO will settle all payable amounts up to the termination date.",
      ]},
      { t: "12. Governing Law & Dispute Resolution", c: [
        "12.1 This Agreement is governed by the laws of Malaysia.",
        "12.2 Disputes shall first be resolved through friendly negotiation; failing which, they shall be submitted to the courts of Kuala Lumpur.",
      ]},
      { t: "13. Miscellaneous", c: [
        "13.1 This Agreement constitutes the entire agreement between the parties.",
        "13.2 If any provision is held invalid, the validity of the remaining provisions is unaffected.",
        "13.3 Electronic execution is legally valid; clicking \u201cAgree\u201d constitutes a contract.",
        "13.4 Notices may be sent via Platform announcements, email, or SMS.",
        "13.5 Language Version: This Agreement is executed in the English language. The English version shall be the authoritative and controlling version. Any translation of this Agreement into any other language, including but not limited to Bahasa Malaysia, is provided solely for the convenience of the parties and shall not be legally binding. In the event of any inconsistency or conflict between the English version and any translated version, the English version shall prevail in all respects.",
      ]},
    ],
    sig: "I have carefully read and agree to all terms of this Agreement, particularly Article 2 (Independent Contractor), Article 6 (Commission & Settlement), Article 7 (Insurance & Safety), and Article 10 (Limitation of Liability). By clicking \u201cAgree and Continue\u201d, this Agreement becomes effective.",
  },
  ms: {
    label: "Perjanjian Tukang", title: "Perjanjian Tukang VGO",
    version: "Versi 2026-P-V1 ｜ Berkuat kuasa: 27 September 2026",
    intro: "Perjanjian ini dimeterai antara VGO (V Go On) (\u201cVGO\u201d atau \u201cPlatform\u201d) dengan penyedia perkhidmatan bebas yang memohon menjadi Tukang/Tukang Kraf di Platform VGO (\u201cTukang\u201d atau \u201canda\u201d). Dengan mengklik \u201cSetuju dan Teruskan\u201d atau mengesahkan melalui apa-apa cara elektronik, anda dianggap telah membaca, memahami, dan menerima semua terma Perjanjian ini.",
    note: "Di bawah Akta Perdagangan Elektronik 2006 Malaysia, Perjanjian ini dilaksanakan secara elektronik dan mempunyai kesan undang-undang penuh. Perjanjian ini, bersama Terma Perkhidmatan dan Dasar Privasi, membentuk rangka kerja undang-undang lengkap VGO.",
    secs: [
      { t: "1. Definisi", c: [
        "1.1 \u201cPlatform\u201d merujuk kepada laman web, App, dan perkhidmatan teknikal berkaitan VGO.",
        "1.2 \u201cTukang\u201d merujuk kepada penyedia perkhidmatan bebas yang diluluskan oleh VGO untuk menerima pesanan dan memberikan perkhidmatan di lokasi melalui Platform, termasuk tukang dan tukang kraf.",
        "1.3 \u201cPelanggan\u201d merujuk kepada pengguna akhir yang menempah perkhidmatan Tukang melalui Platform.",
        "1.4 \u201cKomisen\u201d merujuk kepada fi perkhidmatan yang dikenakan oleh VGO bagi pesanan yang diselesaikan di Platform.",
      ]},
      { t: "2. Kontraktor Bebas", c: [
        "2.1 Tukang adalah kontraktor bebas, bukan pekerja, ejen, atau rakan kongsi VGO.",
        "2.2 Perjanjian ini tidak membentuk pekerjaan, perkongsian, atau usaha sama.",
        "2.3 Tukang memutuskan secara bebas sama ada menerima pesanan, bila untuk online, dan cara memberikan perkhidmatan; VGO tidak memaksa penugasan.",
        "2.4 Tukang menanggung semua cukai pendapatan peribadi, keselamatan sosial, insurans, dan kos berkanun lain.",
      ]},
      { t: "3. Peranan Platform", c: [
        "3.1 VGO bertindak semata-mata sebagai perantara teknologi yang menyediakan padanan maklumat, pengurusan pesanan, dan penyelesaian pembayaran.",
        "3.2 VGO tidak menyertai proses perkhidmatan dan tidak bertanggungjawab secara langsung terhadap hasil perkhidmatan.",
      ]},
      { t: "4. Kewajipan Tukang", c: [
        "4.1 Memastikan identiti, kemahiran, dan kelayakan adalah tulen dan sah; bekerjasama dengan pengesahan Platform.",
        "4.2 Menyediakan perkhidmatan dengan selamat, profesional, dan tepat pada masanya mengikut spesifikasi Platform dan piawaian industri.",
        "4.3 Jangan mensubkontrak pesanan kepada pihak ketiga.",
        "4.4 Jangan bertransaksi secara peribadi dengan pelanggan untuk mengelak komisen.",
        "4.5 Menghormati pelanggan, melindungi privasi mereka; tiada gangguan, diskriminasi, atau penderaan.",
        "4.6 Harga telus; tiada caj melebihi yang dipersetujui di Platform.",
        "4.7 Tukang menanggung tanggungjawab terhadap keselamatan peribadi dan peralatan semasa perkhidmatan.",
      ]},
      { t: "5. Pengesahan & Latihan", c: [
        "5.1 Tukang mesti lulus pengesahan identiti, kemahiran, dan latihan piawaian perkhidmatan VGO.",
        "5.2 VGO berhak mengaudit kelayakan Tukang pada bila-bila masa.",
        "5.3 Jika pengesahan gagal, VGO boleh menggantung atau menamatkan kebenaran menerima pesanan Tukang.",
      ]},
      { t: "6. Komisen & Penyelesaian", c: [
        "6.1 Kadar komisen diumumkan di Platform; VGO boleh menyelaraskan mengikut keadaan pasaran dengan notis terlebih dahulu.",
        "6.2 Selepas pesanan selesai, VGO akan menyelesaikan baki (selepas ditolak komisen) ke akaun Tukang yang ditetapkan dalam kitaran yang dipersetujui.",
        "6.3 Penyelesaian Minimum: Jika jumlah perlu dibayar terkumpul kurang daripada RM 50, penyelesaian ditangguhkan ke kitaran seterusnya.",
        "6.4 Sekiranya berlaku bayaran balik atau aduan, VGO boleh menolak jumlah yang berkenaan daripada penyelesaian tertunggak Tukang.",
      ]},
      { t: "7. Insurans & Keselamatan", c: [
        "7.1 Tukang harus mendapatkan insurans kemalangan peribadi dan liabiliti profesional yang perlu (jika berkenaan).",
        "7.2 Kecederaan peribadi atau kerosakan harta benda yang disebabkan oleh Tukang semasa perkhidmatan ditanggung oleh Tukang.",
        "7.3 Tukang tidak boleh memberikan perkhidmatan semasa mabuk, di bawah pengaruh dadah, letih, atau tidak sihat.",
      ]},
      { t: "8. Perlindungan Data Peribadi", c: [
        "8.1 Kedua-dua pihak mematuhi sepenuhnya PDPA 2010 Malaysia.",
        "8.2 Semasa mengendalikan data peribadi pelanggan, Tukang hendaklah menggunakannya semata-mata untuk menyelesaikan pesanan dan tidak mendedahkannya kepada pihak ketiga.",
        "8.3 Selepas perkhidmatan selesai, Tukang hendaklah memadam maklumat pelanggan atas permintaan VGO.",
      ]},
      { t: "9. Hak Platform", c: [
        "9.1 VGO boleh menyemak dan memantau kualiti perkhidmatan dan pematuhan Tukang.",
        "9.2 Atas pelanggaran, VGO boleh mengikut budi bicaranya mengambil tindakan: amaran, notis pembetulan, menggantung penerimaan pesanan, larangan kekal, pelucutan Deposit (jika ada), atau tindakan undang-undang.",
        "9.3 VGO boleh memaparkan maklumat pengesahan dan ulasan perkhidmatan Tukang di Platform.",
      ]},
      { t: "10. Had Tanggungjawab", c: [
        "10.1 Platform disediakan \u201csebagaimana adanya\u201d. VGO tidak memberikan sebarang jaminan nyata atau tersirat.",
        "10.2 Sebarang kerugian pelanggan yang disebabkan oleh Tukang semasa perkhidmatan ditanggung oleh Tukang.",
        "10.3 Had Liabiliti: Jumlah liabiliti VGO terhadap Tukang tidak melebihi jumlah komisen yang diterima VGO daripada Tukang tersebut dalam enam (6) bulan sebelumnya.",
        "10.4 Force Majeure: Tiada pihak bertanggungjawab atas kegagalan melaksanakan akibat force majeure (bencana alam, wabak, peperangan, tindakan kerajaan, gangguan rangkaian).",
      ]},
      { t: "11. Tempoh & Penamatan", c: [
        "11.1 Perjanjian ini berkuat kuasa selepas kelulusan permohonan pendaftaran.",
        "11.2 Penamatan: mana-mana pihak boleh menamatkan dengan notis bertulis 30 hari; penamatan serta-merta bagi pelanggaran material yang tidak dibetulkan dalam 15 hari; VGO boleh menggantung atau menamatkan akaun Tukang mengikut budi bicaranya tanpa notis terlebih dahulu.",
        "11.3 Selepas penamatan, VGO akan menyelesaikan semua jumlah yang perlu dibayar sehingga tarikh penamatan.",
      ]},
      { t: "12. Undang-undang & Penyelesaian Pertikaian", c: [
        "12.1 Perjanjian ini ditadbir oleh undang-undang Malaysia.",
        "12.2 Pertikaian hendaklah diselesaikan terlebih dahulu melalui rundingan mesra; jika gagal, ia hendaklah dikemukakan kepada mahkamah Kuala Lumpur.",
      ]},
      { t: "13. Lain-lain", c: [
        "13.1 Perjanjian ini merupakan keseluruhan perjanjian antara pihak-pihak.",
        "13.2 Jika mana-mana peruntukan dianggap tidak sah, kesahihan peruntukan selebihnya tidak terjejas.",
        "13.3 Pelaksanaan elektronik adalah sah dari segi undang-undang; mengklik \u201cSetuju\u201d merupakan kontrak.",
        "13.4 Notis boleh dihantar melalui pengumuman Platform, e-mel, atau SMS.",
        "13.5 Versi Bahasa: Perjanjian ini dilaksanakan dalam Bahasa Inggeris. Versi Bahasa Inggeris adalah versi yang berwibawa dan mengikat. Sebarang terjemahan Perjanjian ini ke dalam bahasa lain, termasuk tetapi tidak terhad kepada Bahasa Malaysia, disediakan semata-mata untuk kemudahan pihak-pihak dan tidak mengikat dari segi undang-undang. Sekiranya terdapat sebarang ketidakselarasan atau percanggahan antara versi Bahasa Inggeris dan mana-mana versi terjemahan, versi Bahasa Inggeris akan diutamakan dalam semua aspek.",
      ]},
    ],
    sig: "Saya telah membaca dengan teliti dan bersetuju dengan semua terma Perjanjian ini, terutamanya Perkara 2 (Kontraktor Bebas), Perkara 6 (Komisen & Penyelesaian), Perkara 7 (Insurans & Keselamatan), dan Perkara 10 (Had Tanggungjawab). Dengan mengklik \u201cSetuju dan Teruskan\u201d, Perjanjian ini berkuat kuasa.",
  },
};
export default function ProAgreementPage() {
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
