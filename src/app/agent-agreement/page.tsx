"use client";
import { useLang } from "@/lib/i18n";
import LegalShell from "@/components/LegalShell";
type Sec = { t: string; c: string[] };
const C: Record<string, { label: string; title: string; version: string; intro: string; note: string; secs: Sec[]; sig: string }> = {
  en: {
    label: "Regional Agent Agreement", title: "VGO Regional Agent Agreement",
    version: "Version 2026-A-V1 ｜ Effective: 27 September 2026",
    intro: "This Agreement is entered into between VGO (V Go On) (\u201cVGO\u201d or the \u201cPlatform\u201d) and the individual or business entity applying to become a VGO Regional Agent (\u201cAgent\u201d or \u201cyou\u201d). By clicking \u201cAgree and Continue\u201d or confirming via any electronic means, you are deemed to have read, understood, and accepted all terms of this Agreement.",
    note: "Under Malaysia's Electronic Commerce Act 2006, this Agreement is executed electronically and carries full legal effect. This Agreement, together with the Terms of Service and Privacy Policy, forms VGO's complete legal framework.",
    secs: [
      { t: "1. Definitions", c: [
        "1.1 \u201cPlatform\u201d means the VGO website, App, and related technical services.",
        "1.2 \u201cAgent\u201d means an independent partner authorized by VGO to develop merchants and pros within a designated region and support Platform operations.",
        "1.3 \u201cAuthorized Region\u201d means the area specified in the annex or confirmed in writing by both parties.",
        "1.4 \u201cAgent Commission\u201d means the revenue share paid by VGO to the Agent.",
        "1.5 \u201cPerformance Review\u201d means VGO's periodic assessment of merchant count, pro count, order volume, and other metrics in the Authorized Region.",
      ]},
      { t: "2. Agent Authorization", c: [
        "2.1 VGO grants the Agent a non-exclusive authorization to develop merchants and pros, and to assist with recruitment, training, and operations in the Authorized Region.",
        "2.2 The Agent is not an employee, branch, or legal representative of VGO. The Agent shall not sign contracts, commit to prices, or make guarantees in VGO's name.",
        "2.3 VGO reserves the right to operate directly or authorize third parties within the Authorized Region.",
      ]},
      { t: "3. Agent Obligations", c: [
        "3.1 Recruit, vet, and train merchants and pros per VGO standards; ensure their qualifications are genuine.",
        "3.2 Assist with operational issues, customer complaints, and disputes within the Authorized Region.",
        "3.3 Report performance, market conditions, and competitor activities to VGO regularly.",
        "3.4 Do not collect fees, make commitments, or sign contracts in VGO's name.",
        "3.5 Do not engage in any conduct damaging VGO's brand reputation or business interests.",
        "3.6 Comply with Malaysian laws and VGO's agent operation guidelines as issued from time to time.",
      ]},
      { t: "4. Agent Commission & Settlement", c: [
        "4.1 The agent commission rate is specified in the separately executed Agent Authorization Letter.",
        "4.2 Commission is calculated on completed orders within the Authorized Region at the agreed rate.",
        "4.3 VGO settles agent commission in the agreed cycle (e.g., monthly), net of withholding taxes, to the Agent's designated account.",
        "4.4 Minimum Settlement: If accumulated payable is below RM 200, settlement is deferred to the next cycle.",
        "4.5 In case of large-scale refunds, complaints, or violations within the region, VGO may deduct losses from the Agent's commission.",
      ]},
      { t: "5. Performance Review", c: [
        "5.1 VGO conducts periodic performance reviews, including merchant count, pro count, order volume, customer satisfaction, and violation rate.",
        "5.2 If targets are not met, VGO may: issue a corrective notice, reduce the Authorized Region, suspend agent status, or terminate this Agreement.",
        "5.3 For outstanding performance, VGO may grant bonuses, expand the Authorized Region, or offer priority renewal.",
      ]},
      { t: "6. Deposit", c: [
        "6.1 VGO may require the Agent to pay a performance deposit as agreed by both parties.",
        "6.2 The deposit secures the Agent's performance under this Agreement. In case of breach, VGO may deduct losses from the deposit.",
        "6.3 Upon normal termination without breach, VGO refunds the deposit (without interest) within 30 business days.",
      ]},
      { t: "7. Prohibited Conduct", c: [
        "7.1 No collecting franchise fees, deposits, or training fees in VGO's name.",
        "7.2 No false advertising or exaggerating VGO's services or income.",
        "7.3 No collusion with merchants or pros to fake orders or extract commission.",
        "7.4 No transferring, subcontracting, or leasing the agent status to third parties.",
        "7.5 No operating outside the Authorized Region without VGO's prior written consent.",
      ]},
      { t: "8. Personal Data Protection", c: [
        "8.1 Both parties strictly comply with Malaysia's Personal Data Protection Act 2010 (PDPA).",
        "8.2 When handling personal data of merchants, pros, or customers, the Agent shall use it solely for this Agreement's purpose, apply appropriate security measures, and not disclose to third parties.",
        "8.3 Any actual or suspected data breach must be reported to VGO immediately.",
      ]},
      { t: "9. Intellectual Property", c: [
        "9.1 VGO's trademarks, logos, software, and content are the intellectual property of VGO.",
        "9.2 The Agent may reasonably use VGO's marks within the scope of this Agreement.",
        "9.3 Upon termination, the Agent shall immediately cease using VGO's marks.",
      ]},
      { t: "10. Limitation of Liability", c: [
        "10.1 The Platform is provided \u201cas is\u201d. VGO makes no express or implied warranties.",
        "10.2 The Agent bears its own liability in performing this Agreement. If the Agent causes loss to VGO through breach, it shall compensate.",
        "10.3 Liability Cap: VGO's aggregate liability to the Agent shall not exceed the total agent commission paid by VGO to such Agent in the preceding six (6) months.",
        "10.4 Force Majeure: Neither party is liable for failure to perform due to force majeure.",
      ]},
      { t: "11. Term & Termination", c: [
        "11.1 This Agreement takes effect upon signing (including electronic signing); the term is specified in the Agent Authorization Letter.",
        "11.2 Termination: either party may terminate with 30 days' written notice; immediate termination for material breach not cured within 15 days; VGO may suspend or terminate the agent status at its sole discretion without prior notice.",
        "11.3 Upon termination, VGO settles all payable commission up to the termination date; the Agent shall cease using VGO's marks, return all materials, and delete customer information obtained.",
      ]},
      { t: "12. Confidentiality", c: [
        "12.1 The Agent shall keep confidential VGO's trade secrets, operational data, and customer information.",
        "12.2 Confidentiality obligations survive termination.",
      ]},
      { t: "13. Governing Law & Dispute Resolution", c: [
        "13.1 This Agreement is governed by the laws of Malaysia.",
        "13.2 Disputes shall first be resolved through friendly negotiation; failing which, they shall be submitted to the courts of Kuala Lumpur.",
      ]},
      { t: "14. Miscellaneous", c: [
        "14.1 This Agreement and the Agent Authorization Letter form the complete agreement between the parties. In case of conflict, the Letter prevails.",
        "14.2 If any provision is held invalid, the validity of the remaining provisions is unaffected.",
        "14.3 Electronic execution is legally valid.",
        "14.4 Notices may be sent via Platform announcements, email, or SMS.",
        "14.5 Language Version: This Agreement is executed in the English language. The English version shall be the authoritative and controlling version. Any translation of this Agreement into any other language, including but not limited to Bahasa Malaysia, is provided solely for the convenience of the parties and shall not be legally binding. In the event of any inconsistency or conflict between the English version and any translated version, the English version shall prevail in all respects.",
      ]},
    ],
    sig: "I have carefully read and agree to all terms of this Agreement, particularly Article 2 (Agent Authorization), Article 4 (Agent Commission & Settlement), Article 5 (Performance Review), and Article 10 (Limitation of Liability). By clicking \u201cAgree and Continue\u201d, this Agreement becomes effective.",
  },
  ms: {
    label: "Perjanjian Ejen Serantau", title: "Perjanjian Ejen Serantau VGO",
    version: "Versi 2026-A-V1 ｜ Berkuat kuasa: 27 September 2026",
    intro: "Perjanjian ini dimeterai antara VGO (V Go On) (\u201cVGO\u201d atau \u201cPlatform\u201d) dengan individu atau entiti perniagaan yang memohon menjadi Ejen Serantau VGO (\u201cEjen\u201d atau \u201canda\u201d). Dengan mengklik \u201cSetuju dan Teruskan\u201d atau mengesahkan melalui apa-apa cara elektronik, anda dianggap telah membaca, memahami, dan menerima semua terma Perjanjian ini.",
    note: "Di bawah Akta Perdagangan Elektronik 2006 Malaysia, Perjanjian ini dilaksanakan secara elektronik dan mempunyai kesan undang-undang penuh. Perjanjian ini, bersama Terma Perkhidmatan dan Dasar Privasi, membentuk rangka kerja undang-undang lengkap VGO.",
    secs: [
      { t: "1. Definisi", c: [
        "1.1 \u201cPlatform\u201d merujuk kepada laman web, App, dan perkhidmatan teknikal berkaitan VGO.",
        "1.2 \u201cEjen\u201d merujuk kepada rakan bebas yang diberi kuasa oleh VGO untuk membangunkan peniaga dan tukang dalam kawasan tertentu dan menyokong operasi Platform.",
        "1.3 \u201cKawasan Diberi Kuasa\u201d merujuk kepada kawasan yang dinyatakan dalam lampiran atau disahkan secara bertulis oleh kedua-dua pihak.",
        "1.4 \u201cKomisen Ejen\u201d merujuk kepada bahagian pendapatan yang dibayar oleh VGO kepada Ejen.",
        "1.5 \u201cSemakan Prestasi\u201d merujuk kepada penilaian berkala VGO terhadap bilangan peniaga, tukang, jumlah pesanan, dan metrik lain di Kawasan Diberi Kuasa.",
      ]},
      { t: "2. Kuasa Ejen", c: [
        "2.1 VGO memberi Ejen kuasa bukan eksklusif untuk membangunkan peniaga dan tukang, serta membantu pengambilan, latihan, dan operasi di Kawasan Diberi Kuasa.",
        "2.2 Ejen bukan pekerja, cawangan, atau wakil sah VGO. Ejen tidak boleh menandatangani kontrak, komit harga, atau membuat jaminan atas nama VGO.",
        "2.3 VGO berhak beroperasi secara langsung atau memberi kuasa kepada pihak ketiga di Kawasan Diberi Kuasa.",
      ]},
      { t: "3. Kewajipan Ejen", c: [
        "3.1 Mengambil, menyemak, dan melatih peniaga dan tukang mengikut piawaian VGO; memastikan kelayakan mereka tulen.",
        "3.2 Membantu menyelesaikan isu operasi, aduan pelanggan, dan pertikaian di Kawasan Diberi Kuasa.",
        "3.3 Melaporkan prestasi, keadaan pasaran, dan aktiviti pesaing kepada VGO secara berkala.",
        "3.4 Jangan mengutip fi, membuat komitmen, atau menandatangani kontrak atas nama VGO.",
        "3.5 Jangan terlibat dalam apa-apa tingkah laku yang merosakkan reputasi atau kepentingan perniagaan VGO.",
        "3.6 Mematuhi undang-undang Malaysia dan garis panduan operasi ejen VGO seperti yang dikeluarkan dari semasa ke semasa.",
      ]},
      { t: "4. Komisen & Penyelesaian Ejen", c: [
        "4.1 Kadar komisen ejen dinyatakan dalam Surat Kuasa Ejen yang ditandatangani secara berasingan.",
        "4.2 Komisen dikira berdasarkan pesanan yang diselesaikan dalam Kawasan Diberi Kuasa pada kadar yang dipersetujui.",
        "4.3 VGO menyelesaikan komisen ejen dalam kitaran yang dipersetujui (contohnya, bulanan), selepas ditolak cukai pegangan, ke akaun Ejen yang ditetapkan.",
        "4.4 Penyelesaian Minimum: Jika jumlah perlu dibayar terkumpul kurang daripada RM 200, penyelesaian ditangguhkan ke kitaran seterusnya.",
        "4.5 Sekiranya berlaku bayaran balik, aduan, atau pelanggaran berskala besar di kawasan tersebut, VGO boleh menolak kerugian daripada komisen Ejen.",
      ]},
      { t: "5. Semakan Prestasi", c: [
        "5.1 VGO menjalankan semakan prestasi berkala, termasuk bilangan peniaga, tukang, jumlah pesanan, kepuasan pelanggan, dan kadar pelanggaran.",
        "5.2 Jika sasaran tidak dipenuhi, VGO boleh: mengeluarkan notis pembetulan, mengurangkan Kawasan Diberi Kuasa, menggantung status ejen, atau menamatkan Perjanjian ini.",
        "5.3 Untuk prestasi cemerlang, VGO boleh memberikan bonus, mengembangkan Kawasan Diberi Kuasa, atau menawarkan pembaharuan keutamaan.",
      ]},
      { t: "6. Deposit", c: [
        "6.1 VGO boleh meminta Ejen membayar deposit prestasi seperti yang dipersetujui oleh kedua-dua pihak.",
        "6.2 Deposit menjamin prestasi Ejen di bawah Perjanjian ini. Jika berlaku pelanggaran, VGO boleh menolak kerugian daripada deposit.",
        "6.3 Selepas penamatan normal tanpa pelanggaran, VGO memulangkan deposit (tanpa faedah) dalam 30 hari bekerja.",
      ]},
      { t: "7. Perbuatan Dilarang", c: [
        "7.1 Tiada pengutipan fi francais, deposit, atau fi latihan atas nama VGO.",
        "7.2 Tiada pengiklanan palsu atau membesar-besarkan perkhidmatan atau pendapatan VGO.",
        "7.3 Tiada pakatan dengan peniaga atau tukang untuk pesanan palsu atau mengambil komisen.",
        "7.4 Tiada pemindahan, subkontrak, atau penyewaan status ejen kepada pihak ketiga.",
        "7.5 Tiada operasi di luar Kawasan Diberi Kuasa tanpa persetujuan bertulis VGO terlebih dahulu.",
      ]},
      { t: "8. Perlindungan Data Peribadi", c: [
        "8.1 Kedua-dua pihak mematuhi sepenuhnya Akta Perlindungan Data Peribadi 2010 (PDPA) Malaysia.",
        "8.2 Semasa mengendalikan data peribadi peniaga, tukang, atau pelanggan, Ejen hendaklah menggunakannya semata-mata untuk tujuan Perjanjian ini, menggunakan langkah keselamatan yang sewajarnya, dan tidak mendedahkan kepada pihak ketiga.",
        "8.3 Sebarang pelanggaran data sebenar atau disyaki mesti dilaporkan kepada VGO dengan segera.",
      ]},
      { t: "9. Harta Intelek", c: [
        "9.1 Tanda dagangan, logo, perisian, dan kandungan VGO adalah harta intelek VGO.",
        "9.2 Ejen boleh menggunakan tanda VGO secara munasabah dalam skop Perjanjian ini.",
        "9.3 Selepas penamatan, Ejen hendaklah segera berhenti menggunakan tanda VGO.",
      ]},
      { t: "10. Had Tanggungjawab", c: [
        "10.1 Platform disediakan \u201csebagaimana adanya\u201d. VGO tidak memberikan sebarang jaminan nyata atau tersirat.",
        "10.2 Ejen menanggung liabiliti sendiri dalam melaksanakan Perjanjian ini. Jika Ejen menyebabkan kerugian kepada VGO melalui pelanggaran, ia hendaklah memberi pampasan.",
        "10.3 Had Liabiliti: Jumlah liabiliti VGO terhadap Ejen tidak melebihi jumlah komisen ejen yang dibayar oleh VGO kepada Ejen tersebut dalam enam (6) bulan sebelumnya.",
        "10.4 Force Majeure: Tiada pihak bertanggungjawab atas kegagalan melaksanakan akibat force majeure.",
      ]},
      { t: "11. Tempoh & Penamatan", c: [
        "11.1 Perjanjian ini berkuat kuasa selepas ditandatangani (termasuk tandatangan elektronik); tempohnya dinyatakan dalam Surat Kuasa Ejen.",
        "11.2 Penamatan: mana-mana pihak boleh menamatkan dengan notis bertulis 30 hari; penamatan serta-merta bagi pelanggaran material yang tidak dibetulkan dalam 15 hari; VGO boleh menggantung atau menamatkan status ejen mengikut budi bicaranya tanpa notis terlebih dahulu.",
        "11.3 Selepas penamatan, VGO menyelesaikan semua komisen yang perlu dibayar sehingga tarikh penamatan; Ejen hendaklah berhenti menggunakan tanda VGO, memulangkan semua bahan, dan memadam maklumat pelanggan yang diperoleh.",
      ]},
      { t: "12. Kerahsiaan", c: [
        "12.1 Ejen hendaklah merahsiakan rahsia dagang, data operasi, dan maklumat pelanggan VGO.",
        "12.2 Kewajipan kerahsiaan kekal selepas penamatan.",
      ]},
      { t: "13. Undang-undang & Penyelesaian Pertikaian", c: [
        "13.1 Perjanjian ini ditadbir oleh undang-undang Malaysia.",
        "13.2 Pertikaian hendaklah diselesaikan terlebih dahulu melalui rundingan mesra; jika gagal, ia hendaklah dikemukakan kepada mahkamah Kuala Lumpur.",
      ]},
      { t: "14. Lain-lain", c: [
        "14.1 Perjanjian ini dan Surat Kuasa Ejen membentuk keseluruhan perjanjian antara pihak-pihak. Jika berlaku percanggahan, Surat Kuasa mengatasi.",
        "14.2 Jika mana-mana peruntukan dianggap tidak sah, kesahihan peruntukan selebihnya tidak terjejas.",
        "14.3 Pelaksanaan elektronik adalah sah dari segi undang-undang.",
        "14.4 Notis boleh dihantar melalui pengumuman Platform, e-mel, atau SMS.",
        "14.5 Versi Bahasa: Perjanjian ini dilaksanakan dalam Bahasa Inggeris. Versi Bahasa Inggeris adalah versi yang berwibawa dan mengikat. Sebarang terjemahan Perjanjian ini ke dalam bahasa lain, termasuk tetapi tidak terhad kepada Bahasa Malaysia, disediakan semata-mata untuk kemudahan pihak-pihak dan tidak mengikat dari segi undang-undang. Sekiranya terdapat sebarang ketidakselarasan atau percanggahan antara versi Bahasa Inggeris dan mana-mana versi terjemahan, versi Bahasa Inggeris akan diutamakan dalam semua aspek.",
      ]},
    ],
    sig: "Saya telah membaca dengan teliti dan bersetuju dengan semua terma Perjanjian ini, terutamanya Perkara 2 (Kuasa Ejen), Perkara 4 (Komisen & Penyelesaian Ejen), Perkara 5 (Semakan Prestasi), dan Perkara 10 (Had Tanggungjawab). Dengan mengklik \u201cSetuju dan Teruskan\u201d, Perjanjian ini berkuat kuasa.",
  },
};
export default function AgentAgreementPage() {
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
