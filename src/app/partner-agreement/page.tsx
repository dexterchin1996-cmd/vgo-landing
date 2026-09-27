"use client";
import { useLang } from "@/lib/i18n";
import PageShell from "@/components/PageShell";

type Sec = { t: string; c: string[] };

const C: Record<string, { label: string; title: string; updated: string; intro: string; note: string; secs: Sec[]; contact: string; confirm: string }> = {
  zh: {
    label: "合作伙伴协议", title: "VGO 合作伙伴协议",
    updated: "版本 2026-V1 · 生效日期 2026 年 9 月 27 日",
    intro: "本协议由 VGO (V Go On)（下称“VGO”或“平台”）与申请入驻 VGO 平台的服务提供方（下称“合作伙伴”或“您”）订立。通过点击“同意并继续”或以任何电子方式确认，即视为您已阅读、理解并同意本协议全部条款。",
    note: "依马来西亚《2006年电子交易法》，本协议以电子方式签署，具有完全法律效力。",
    secs: [
      { t: "第一条 定义", c: [
        "1.1 “平台”指 VGO 运营的网站、移动应用程序及相关技术服务。",
        "1.2 “合作伙伴”指经 VGO 审核通过、入驻平台的商家、技术员、手艺人或区域代理。",
        "1.3 “服务”指合作伙伴通过平台向客户提供的上门服务。",
        "1.4 “客户”指通过平台预约服务的最终用户。",
        "1.5 “佣金”指 VGO 就平台成交服务收取的技术服务费。",
        "1.6 “个人信息”含义与马来西亚《2010年个人数据保护法》(PDPA) 一致。",
        "1.7 “结算周期”指订单完成后至款项到账的时长，具体由平台公示。",
        "1.8 “保证金”指特定合作模式（如区域代理）需缴纳的履约担保金。",
      ]},
      { t: "第二条 平台角色与合作模式", c: [
        "2.1 平台为技术中介服务方，仅提供信息匹配、订单管理、支付结算等技术支持，非服务提供方或执行方。",
        "2.2 合作模式包括：商家入驻、师傅加盟、区域代理、投资合作。",
        "2.3 本协议不构成雇佣、合伙或合资关系，合作伙伴以独立承包方身份提供服务。",
        "2.4 VGO 不介入服务过程，不对服务结果负责。合作伙伴提供的服务，其质量、安全性、合法性由合作伙伴独立承担全部责任。",
      ]},
      { t: "第三条 合作伙伴义务", c: [
        "3.1 保证所提交信息（身份、资质、店铺）真实、准确、完整。",
        "3.2 保证具备马来西亚法律要求的一切执照、许可与资质。",
        "3.3 按行业标准及 VGO 服务规范提供服务，确保安全、专业。",
        "3.4 尊重客户，不得骚扰、歧视或辱骂。",
        "3.5 明码标价，不得收取平台约定外费用。",
        "3.6 禁止行为：引导客户在平台外交易以逃避佣金；提供虚假评价或操纵评价系统；冒用他人身份或资质；上传违法、侵权或不当内容。",
        "3.7 遵守所有适用的马来西亚法律法规。",
        "3.8 禁止转包：合作伙伴不得将平台订单转包、分包给任何第三方。一经发现，VGO 有权立即终止账户并追究责任。",
        "3.9 税务责任：合作伙伴因提供服务产生的所有税务（含个人所得税等），由其自行申报与承担。",
      ]},
      { t: "第四条 平台权利", c: [
        "4.1 VGO 有权审核入驻申请，并保留拒绝或撤销资格的权利，无需说明理由。",
        "4.2 VGO 有权监督合作伙伴的服务质量、客户评价及合规情况。",
        "4.3 若合作伙伴违规，VGO 有权视情节采取：警告、限期整改、暂停或终止账户、扣除保证金（如有）、追究法律责任。",
        "4.4 VGO 有权在平台展示合作伙伴店铺信息、服务内容及评价。",
        "4.5 VGO 保留根据法律或运营需要修订本协议的权利，修订后通过平台公告通知，继续使用即视为接受。",
      ]},
      { t: "第五条 佣金与结算", c: [
        "5.1 佣金费率在平台公示，VGO 可依市场情况调整。",
        "5.2 订单完成后，VGO 于约定周期将扣佣后款项结算给合作伙伴。",
        "5.3 合作伙伴自行承担服务成本，包括材料费、交通费及个人所得税。",
        "5.4 保证金：VGO 保留要求特定合作模式缴纳履约保证金的权利，金额与退还条件在入驻时单独约定。",
        "5.5 最低结算额：当累计应付款低于 RM 50 时，顺延至下一结算周期。",
      ]},
      { t: "第六条 知识产权与数据", c: [
        "6.1 平台所有内容（软件、商标、Logo、设计、文字、数据库）知识产权归 VGO 所有。",
        "6.2 合作伙伴授予 VGO 全球性、非独占、免许可费的许可，用于推广平台及合作伙伴服务。",
        "6.3 合作伙伴提供的反馈或建议，VGO 可自由使用，无需付费。",
        "6.4 数据所有权：合作伙伴在平台使用过程中产生的运营数据（订单记录、服务统计），其所有权归 VGO。",
        "6.5 评价归属：客户评价的内容归 VGO 所有。合作伙伴不得要求删改真实评价，不得以任何方式操纵评价。",
      ]},
      { t: "第七条 个人信息保护", c: [
        "7.1 双方承诺严格遵守马来西亚 PDPA 及其修订规定。",
        "7.2 就合作伙伴向 VGO 提供的个人信息，VGO 为数据控制者，依《隐私政策》处理。",
        "7.3 合作伙伴接触客户个人信息时，须：仅用于履行本协议项下服务；采取适当安全措施保护；未经 VGO 及客户同意，不得用于其他目的或披露第三方；服务完成后按 VGO 要求删除或归还。",
        "7.4 若发生或怀疑数据泄露，应立即通知 VGO。",
      ]},
      { t: "第八条 保密", c: [
        "8.1 合作伙伴须对知悉的 VGO 商业秘密、技术信息、客户数据及非公开信息保密。",
        "8.2 保密义务在协议终止后继续有效。",
      ]},
      { t: "第九条 责任限制与免责", c: [
        "9.1 平台按“现状”提供，VGO 不对平台连续性、无错误性或安全性作任何明示或默示保证。",
        "9.2 合作伙伴提供服务的质量、安全及合法性由其自行负责。因服务导致客户或第三方损失的，由合作伙伴独立承担。",
        "9.3 责任上限：在法律允许的最大范围内，VGO 对合作伙伴的累计赔偿责任，不超过 VGO 在过去六个月内向该合作伙伴收取的佣金总额。VGO 不对任何间接、附带、惩罚性或后果性损害负责。",
      ]},
      { t: "第十条 期限与终止", c: [
        "10.1 本协议自入驻申请获批准之日起生效。",
        "10.2 终止情形：任何一方可提前 30 天书面通知终止；一方严重违约且 15 天内未纠正，守约方可立即终止；VGO 有权基于独立判断，无需事先通知暂停或终止账户。",
        "10.3 终止后，VGO 结算截至终止日的应付款项；合作伙伴应立即停止使用平台，并删除所获客户信息。",
      ]},
      { t: "第十一条 适用法律与争议解决", c: [
        "11.1 本协议受马来西亚法律管辖。",
        "11.2 争议先友好协商；协商不成，提交吉隆坡法院解决。",
      ]},
      { t: "第十二条 其他", c: [
        "12.1 本协议为双方完整协议，取代此前所有沟通。",
        "12.2 若某条款无效，不影响其余条款效力。",
        "12.3 电子签署：依马来西亚《2006年电子交易法》，通过平台点击“同意”即构成有效合同。",
        "12.4 VGO 通知可通过平台公告、邮件或短信发送至合作伙伴注册联系方式。",
        "12.5 不可抗力：因自然灾害、疫情、战争、政府行为、网络中断等不可抗力导致一方无法履行义务的，该方不承担责任，但应及时通知对方并尽力减少损失。",
        "12.6 文件体系：本协议与《隐私政策》《网站使用条款》共同构成 VGO 平台完整法律体系。如有冲突，以本协议为准。",
      ]},
    ],
    contact: "如有疑问，请联系：support.vgo@gmail.com · WhatsApp +601172691788",
    confirm: "本人/本公司已仔细阅读并同意本协议全部条款，特别是第四条（平台权利）、第七条（个人信息保护）、第九条（责任限制）。通过点击“同意并继续”，本协议即告成立生效。",
  },
  en: {
    label: "Partner Agreement", title: "VGO Partner Agreement",
    updated: "Version 2026-V1 · Effective 27 September 2026",
    intro: "This Agreement is entered into between VGO (V Go On) (\u201cVGO\u201d or the \u201cPlatform\u201d) and the service provider applying to join the VGO Platform (\u201cPartner\u201d or \u201cyou\u201d). By clicking \u201cAgree and Continue\u201d or confirming via any electronic means, you are deemed to have read, understood, and accepted all terms of this Agreement.",
    note: "Under the Electronic Commerce Act 2006 of Malaysia, this Agreement is executed electronically and carries full legal effect.",
    secs: [
      { t: "1. Definitions", c: [
        "1.1 \u201cPlatform\u201d means the VGO website, mobile application, and related technical services.",
        "1.2 \u201cPartner\u201d means a merchant, technician, artisan, or regional agent approved by VGO.",
        "1.3 \u201cService\u201d means the home services provided by the Partner to customers via the Platform.",
        "1.4 \u201cCustomer\u201d means the end user who books services through the Platform.",
        "1.5 \u201cCommission\u201d means the service fee VGO charges for transactions completed on the Platform.",
        "1.6 \u201cPersonal Data\u201d has the same meaning as under Malaysia's Personal Data Protection Act 2010 (PDPA).",
        "1.7 \u201cSettlement Cycle\u201d means the period from order completion to payment settlement, as published on the Platform.",
        "1.8 \u201cDeposit\u201d means the performance bond required for specific partnership models (e.g., Regional Agent).",
      ]},
      { t: "2. Platform Role & Partnership Models", c: [
        "2.1 VGO acts as a technology intermediary providing information matching, order management, and payment settlement. It is not the service provider or executor.",
        "2.2 Partnership models include: Merchant Onboarding, Pro Onboarding, Regional Agent, and Investment Partnership.",
        "2.3 This Agreement does not constitute employment, partnership, or joint venture. The Partner operates as an independent contractor.",
        "2.4 VGO does not participate in the service process and is not responsible for service outcomes. The Partner bears full responsibility for the quality, safety, and legality of services provided.",
      ]},
      { t: "3. Partner Obligations", c: [
        "3.1 Ensure all submitted information (identity, qualifications, shop details) is true, accurate, and complete.",
        "3.2 Ensure possession of all licenses, permits, and qualifications required under Malaysian law.",
        "3.3 Provide services in accordance with industry standards and VGO service specifications.",
        "3.4 Respect customers; no harassment, discrimination, or abuse.",
        "3.5 Transparent pricing; no charges beyond those agreed on the Platform.",
        "3.6 Prohibited acts: soliciting off-platform transactions to evade commission; posting false reviews or manipulating ratings; impersonating others; uploading illegal, infringing, or inappropriate content.",
        "3.7 Comply with all applicable Malaysian laws and regulations.",
        "3.8 No Subcontracting: The Partner shall not subcontract Platform orders to any third party. Violation may result in immediate account termination and legal action.",
        "3.9 Tax Responsibility: All taxes arising from the Partner's services (including personal income tax) are the Partner's sole responsibility.",
      ]},
      { t: "4. Platform Rights", c: [
        "4.1 VGO may review onboarding applications and reserves the right to reject or revoke eligibility without explanation.",
        "4.2 VGO may monitor the Partner's service quality, customer reviews, and compliance.",
        "4.3 VGO may, at its discretion, take action for violations: warning, corrective notice, suspension or termination of account, forfeiture of Deposit (if any), or legal action.",
        "4.4 VGO may display Partner shop information, services, and reviews on the Platform.",
        "4.5 VGO reserves the right to amend this Agreement based on legal or operational needs. Amendments will be notified via Platform announcements; continued use constitutes acceptance.",
      ]},
      { t: "5. Commission & Settlement", c: [
        "5.1 Commission rates are published on the Platform and may be adjusted based on market conditions.",
        "5.2 After order completion, VGO will settle the balance (net of commission) to the Partner within the agreed cycle.",
        "5.3 The Partner bears all service costs, including materials, transport, and personal income tax.",
        "5.4 Deposit: VGO reserves the right to require a performance deposit for specific partnership models. Amount and refund conditions are agreed separately at onboarding.",
        "5.5 Minimum Settlement: If accumulated payable is below RM 50, settlement is deferred to the next cycle.",
      ]},
      { t: "6. Intellectual Property & Data", c: [
        "6.1 All Platform content (software, trademarks, logo, design, text, database) is the intellectual property of VGO.",
        "6.2 The Partner grants VGO a worldwide, non-exclusive, royalty-free license to use, reproduce, and display uploaded content for promotion of the Platform and the Partner's services.",
        "6.3 Any feedback provided by the Partner may be freely used by VGO without compensation.",
        "6.4 Data Ownership: Operational data generated through Platform use (order records, service statistics) is owned by VGO.",
        "6.5 Review Ownership: Customer review content is owned by VGO. The Partner shall not request removal of genuine reviews or manipulate ratings in any way.",
      ]},
      { t: "7. Personal Data Protection", c: [
        "7.1 Both parties undertake to strictly comply with Malaysia's PDPA and its amendments.",
        "7.2 For personal data provided by the Partner to VGO, VGO is the data controller and processes it in accordance with the Privacy Policy.",
        "7.3 When handling customer personal data, the Partner shall: use it solely to perform services under this Agreement; apply appropriate security measures; not disclose to third parties without consent; delete or return it upon VGO's request after service completion.",
        "7.4 Any actual or suspected data breach must be reported to VGO immediately.",
      ]},
      { t: "8. Confidentiality", c: [
        "8.1 The Partner shall keep confidential all of VGO's trade secrets, technical information, customer data, and non-public information.",
        "8.2 Confidentiality obligations survive termination of this Agreement.",
      ]},
      { t: "9. Limitation of Liability", c: [
        "9.1 The Platform is provided \u201cas is\u201d. VGO makes no express or implied warranties regarding continuity, error-free operation, or security.",
        "9.2 The Partner is solely responsible for the quality, safety, and legality of services. Any loss to customers or third parties arising from the Partner's services is borne by the Partner.",
        "9.3 Liability Cap: To the maximum extent permitted by law, VGO's aggregate liability to the Partner shall not exceed the total commission VGO received from such Partner in the preceding six (6) months. VGO is not liable for any indirect, incidental, punitive, or consequential damages.",
      ]},
      { t: "10. Term & Termination", c: [
        "10.1 This Agreement takes effect upon approval of the onboarding application.",
        "10.2 Termination: either party may terminate with 30 days' written notice; immediate termination may be made for material breach not cured within 15 days; VGO may suspend or terminate the account at its sole discretion without prior notice.",
        "10.3 Upon termination, VGO will settle all payable amounts up to the termination date; the Partner shall immediately cease using the Platform and delete any customer information obtained.",
      ]},
      { t: "11. Governing Law & Dispute Resolution", c: [
        "11.1 This Agreement is governed by the laws of Malaysia.",
        "11.2 Disputes shall first be resolved through friendly negotiation; failing which, they shall be submitted to the courts of Kuala Lumpur.",
      ]},
      { t: "12. Miscellaneous", c: [
        "12.1 This Agreement constitutes the entire agreement between the parties and supersedes all prior communications.",
        "12.2 If any provision is held invalid, the validity of the remaining provisions is unaffected.",
        "12.3 Electronic Execution: Under the Electronic Commerce Act 2006, clicking \u201cAgree\u201d on the Platform constitutes a valid contract.",
        "12.4 Notices may be sent via Platform announcements, email, or SMS to the Partner's registered contact.",
        "12.5 Force Majeure: Neither party is liable for failure to perform due to force majeure (natural disasters, epidemics, war, governmental acts, network outages), provided prompt notice is given and reasonable efforts are made to mitigate loss.",
        "12.6 Document Framework: This Agreement, together with the Privacy Policy and Terms of Use, forms the complete legal framework of the VGO Platform. In case of conflict, this Agreement prevails.",
      ]},
    ],
    contact: "For inquiries, contact: support.vgo@gmail.com · WhatsApp +601172691788",
    confirm: "I have carefully read and agree to all terms of this Agreement, particularly Article 4 (Platform Rights), Article 7 (Personal Data Protection), and Article 9 (Limitation of Liability). By clicking \u201cAgree and Continue\u201d, this Agreement becomes effective.",
  },
  ms: {
    label: "Perjanjian Rakan Kongsi", title: "Perjanjian Rakan Kongsi VGO",
    updated: "Versi 2026-V1 · Berkuat kuasa 27 September 2026",
    intro: "Perjanjian ini dimeterai antara VGO (V Go On) (\u201cVGO\u201d atau \u201cPlatform\u201d) dengan penyedia perkhidmatan yang memohon menyertai Platform VGO (\u201cRakan Kongsi\u201d atau \u201canda\u201d). Dengan mengklik \u201cSetuju dan Teruskan\u201d atau mengesahkan melalui apa-apa cara elektronik, anda dianggap telah membaca, memahami, dan menerima semua terma Perjanjian ini.",
    note: "Di bawah Akta Perdagangan Elektronik 2006 Malaysia, Perjanjian ini dilaksanakan secara elektronik dan mempunyai kesan undang-undang penuh.",
    secs: [
      { t: "1. Definisi", c: [
        "1.1 \u201cPlatform\u201d merujuk kepada laman web VGO, aplikasi mudah alih, dan perkhidmatan teknikal berkaitan.",
        "1.2 \u201cRakan Kongsi\u201d merujuk kepada peniaga, tukang, tukang kraf, atau ejen serantau yang diluluskan oleh VGO.",
        "1.3 \u201cPerkhidmatan\u201d merujuk kepada perkhidmatan ke rumah yang disediakan oleh Rakan Kongsi kepada pelanggan melalui Platform.",
        "1.4 \u201cPelanggan\u201d merujuk kepada pengguna akhir yang menempah perkhidmatan melalui Platform.",
        "1.5 \u201cKomisen\u201d merujuk kepada fi perkhidmatan yang dikenakan oleh VGO bagi transaksi yang diselesaikan di Platform.",
        "1.6 \u201cData Peribadi\u201d mempunyai maksud yang sama seperti di bawah Akta Perlindungan Data Peribadi 2010 (PDPA) Malaysia.",
        "1.7 \u201cKitaran Penyelesaian\u201d merujuk kepada tempoh dari pesanan selesai hingga pembayaran diselesaikan, seperti yang diumumkan di Platform.",
        "1.8 \u201cDeposit\u201d merujuk kepada bon prestasi yang diperlukan untuk model perkongsian tertentu (contohnya, Ejen Serantau).",
      ]},
      { t: "2. Peranan Platform & Model Perkongsian", c: [
        "2.1 VGO bertindak sebagai perantara teknologi yang menyediakan padanan maklumat, pengurusan pesanan, dan penyelesaian pembayaran. Ia bukan penyedia atau pelaksana perkhidmatan.",
        "2.2 Model perkongsian termasuk: Pendaftaran Peniaga, Pendaftaran Tukang, Ejen Serantau, dan Perkongsian Pelaburan.",
        "2.3 Perjanjian ini tidak membentuk pekerjaan, perkongsian, atau usaha sama. Rakan Kongsi beroperasi sebagai kontraktor bebas.",
        "2.4 VGO tidak menyertai proses perkhidmatan dan tidak bertanggungjawab ke atas hasil perkhidmatan. Rakan Kongsi memikul tanggungjawab penuh terhadap kualiti, keselamatan, dan kesahihan perkhidmatan yang diberikan.",
      ]},
      { t: "3. Kewajipan Rakan Kongsi", c: [
        "3.1 Memastikan semua maklumat yang dikemukakan (identiti, kelayakan, butiran kedai) adalah benar, tepat, dan lengkap.",
        "3.2 Memastikan memiliki semua lesen, permit, dan kelayakan yang diperlukan di bawah undang-undang Malaysia.",
        "3.3 Menyediakan perkhidmatan mengikut piawaian industri dan spesifikasi perkhidmatan VGO.",
        "3.4 Menghormati pelanggan; tiada gangguan, diskriminasi, atau penderaan.",
        "3.5 Harga telus; tiada caj melebihi yang dipersetujui di Platform.",
        "3.6 Perbuatan dilarang: memujuk pelanggan bertransaksi di luar Platform untuk mengelak komisen; menyiarkan ulasan palsu atau memanipulasi penilaian; menyamar sebagai orang lain; memuat naik kandungan haram, melanggar hak, atau tidak wajar.",
        "3.7 Mematuhi semua undang-undang dan peraturan Malaysia yang berkenaan.",
        "3.8 Larangan Subkontrak: Rakan Kongsi tidak boleh mensubkontrak pesanan Platform kepada mana-mana pihak ketiga. Pelanggaran boleh menyebabkan penamatan akaun serta-merta dan tindakan undang-undang.",
        "3.9 Tanggungjawab Cukai: Semua cukai yang timbul daripada perkhidmatan Rakan Kongsi (termasuk cukai pendapatan peribadi) adalah tanggungjawab Rakan Kongsi sepenuhnya.",
      ]},
      { t: "4. Hak Platform", c: [
        "4.1 VGO boleh menyemak permohonan pendaftaran dan berhak menolak atau membatalkan kelayakan tanpa penjelasan.",
        "4.2 VGO boleh memantau kualiti perkhidmatan, ulasan pelanggan, dan pematuhan Rakan Kongsi.",
        "4.3 VGO boleh, mengikut budi bicaranya, mengambil tindakan atas pelanggaran: amaran, notis pembetulan, penggantungan atau penamatan akaun, pelucutan Deposit (jika ada), atau tindakan undang-undang.",
        "4.4 VGO boleh memaparkan maklumat kedai, perkhidmatan, dan ulasan Rakan Kongsi di Platform.",
        "4.5 VGO berhak meminda Perjanjian ini berdasarkan keperluan undang-undang atau operasi. Pindaan akan dimaklumkan melalui pengumuman Platform; penggunaan berterusan dianggap sebagai penerimaan.",
      ]},
      { t: "5. Komisen & Penyelesaian", c: [
        "5.1 Kadar komisen diumumkan di Platform dan boleh diselaraskan mengikut keadaan pasaran.",
        "5.2 Selepas pesanan selesai, VGO akan menyelesaikan baki (selepas ditolak komisen) kepada Rakan Kongsi dalam kitaran yang dipersetujui.",
        "5.3 Rakan Kongsi menanggung semua kos perkhidmatan, termasuk bahan, pengangkutan, dan cukai pendapatan peribadi.",
        "5.4 Deposit: VGO berhak meminta deposit prestasi untuk model perkongsian tertentu. Jumlah dan syarat pemulangan dipersetujui secara berasingan semasa pendaftaran.",
        "5.5 Penyelesaian Minimum: Jika jumlah perlu dibayar terkumpul kurang daripada RM 50, penyelesaian ditangguhkan ke kitaran seterusnya.",
      ]},
      { t: "6. Harta Intelek & Data", c: [
        "6.1 Semua kandungan Platform (perisian, tanda dagangan, logo, reka bentuk, teks, pangkalan data) adalah harta intelek VGO.",
        "6.2 Rakan Kongsi memberikan VGO lesen seluruh dunia, bukan eksklusif, bebas royalti untuk menggunakan, menghasilkan semula, dan memaparkan kandungan yang dimuat naik bagi tujuan promosi Platform dan perkhidmatan Rakan Kongsi.",
        "6.3 Sebarang maklum balas yang diberikan oleh Rakan Kongsi boleh digunakan secara bebas oleh VGO tanpa pampasan.",
        "6.4 Pemilikan Data: Data operasi yang dijana melalui penggunaan Platform (rekod pesanan, statistik perkhidmatan) dimiliki oleh VGO.",
        "6.5 Pemilikan Ulasan: Kandungan ulasan pelanggan dimiliki oleh VGO. Rakan Kongsi tidak boleh meminta pemadaman ulasan tulen atau memanipulasi penilaian dalam apa-apa cara.",
      ]},
      { t: "7. Perlindungan Data Peribadi", c: [
        "7.1 Kedua-dua pihak berjanji mematuhi sepenuhnya PDPA Malaysia dan pindaannya.",
        "7.2 Bagi data peribadi yang diberikan oleh Rakan Kongsi kepada VGO, VGO adalah pengawal data dan memprosesnya mengikut Dasar Privasi.",
        "7.3 Semasa mengendalikan data peribadi pelanggan, Rakan Kongsi hendaklah: menggunakannya semata-mata untuk melaksanakan perkhidmatan di bawah Perjanjian ini; menggunakan langkah keselamatan yang sewajarnya; tidak mendedahkan kepada pihak ketiga tanpa kebenaran; memadam atau memulangkannya atas permintaan VGO selepas perkhidmatan selesai.",
        "7.4 Sebarang pelanggaran data sebenar atau disyaki mesti dilaporkan kepada VGO dengan segera.",
      ]},
      { t: "8. Kerahsiaan", c: [
        "8.1 Rakan Kongsi hendaklah merahsiakan semua rahsia dagang, maklumat teknikal, data pelanggan, dan maklumat bukan awam VGO.",
        "8.2 Kewajipan kerahsiaan kekal selepas penamatan Perjanjian ini.",
      ]},
      { t: "9. Had Tanggungjawab", c: [
        "9.1 Platform disediakan \u201csebagaimana adanya\u201d. VGO tidak memberikan sebarang jaminan nyata atau tersirat mengenai kesinambungan, operasi tanpa ralat, atau keselamatan.",
        "9.2 Rakan Kongsi bertanggungjawab sepenuhnya terhadap kualiti, keselamatan, dan kesahihan perkhidmatan. Sebarang kerugian kepada pelanggan atau pihak ketiga yang timbul daripada perkhidmatan Rakan Kongsi ditanggung oleh Rakan Kongsi.",
        "9.3 Had Liabiliti: Setakat yang dibenarkan oleh undang-undang, jumlah liabiliti VGO terhadap Rakan Kongsi tidak melebihi jumlah komisen yang diterima VGO daripada Rakan Kongsi tersebut dalam enam (6) bulan sebelumnya. VGO tidak bertanggungjawab atas sebarang kerosakan tidak langsung, sampingan, punitif, atau berbangkit.",
      ]},
      { t: "10. Tempoh & Penamatan", c: [
        "10.1 Perjanjian ini berkuat kuasa selepas kelulusan permohonan pendaftaran.",
        "10.2 Penamatan: mana-mana pihak boleh menamatkan dengan notis bertulis 30 hari; penamatan serta-merta boleh dibuat bagi pelanggaran material yang tidak dibetulkan dalam 15 hari; VGO boleh menggantung atau menamatkan akaun mengikut budi bicaranya tanpa notis terlebih dahulu.",
        "10.3 Selepas penamatan, VGO akan menyelesaikan semua jumlah yang perlu dibayar sehingga tarikh penamatan; Rakan Kongsi hendaklah segera berhenti menggunakan Platform dan memadam sebarang maklumat pelanggan yang diperoleh.",
      ]},
      { t: "11. Undang-undang & Penyelesaian Pertikaian", c: [
        "11.1 Perjanjian ini ditadbir oleh undang-undang Malaysia.",
        "11.2 Pertikaian hendaklah diselesaikan terlebih dahulu melalui rundingan mesra; jika gagal, ia hendaklah dikemukakan kepada mahkamah Kuala Lumpur.",
      ]},
      { t: "12. Lain-lain", c: [
        "12.1 Perjanjian ini merupakan keseluruhan perjanjian antara pihak-pihak dan menggantikan semua komunikasi sebelumnya.",
        "12.2 Jika mana-mana peruntukan dianggap tidak sah, kesahihan peruntukan selebihnya tidak terjejas.",
        "12.3 Pelaksanaan Elektronik: Di bawah Akta Perdagangan Elektronik 2006, mengklik \u201cSetuju\u201d di Platform merupakan kontrak yang sah.",
        "12.4 Notis boleh dihantar melalui pengumuman Platform, e-mel, atau SMS ke kenalan berdaftar Rakan Kongsi.",
        "12.5 Force Majeure: Tiada pihak bertanggungjawab atas kegagalan melaksanakan akibat force majeure (bencana alam, wabak, peperangan, tindakan kerajaan, gangguan rangkaian), dengan syarat notis segera diberikan dan usaha munasabah dibuat untuk mengurangkan kerugian.",
        "12.6 Rangka Kerja Dokumen: Perjanjian ini, bersama Dasar Privasi dan Terma Penggunaan, membentuk rangka kerja undang-undang lengkap Platform VGO. Jika berlaku percanggahan, Perjanjian ini diutamakan.",
      ]},
    ],
    contact: "Untuk pertanyaan, hubungi: support.vgo@gmail.com · WhatsApp +601172691788",
    confirm: "Saya telah membaca dengan teliti dan bersetuju dengan semua terma Perjanjian ini, terutamanya Perkara 4 (Hak Platform), Perkara 7 (Perlindungan Data Peribadi), dan Perkara 9 (Had Tanggungjawab). Dengan mengklik \u201cSetuju dan Teruskan\u201d, Perjanjian ini berkuat kuasa.",
  },
};

export default function PartnerAgreementPage() {
  const { lang } = useLang();
  const c = C[lang] ?? C.en;

  return (
    <PageShell label={c.label} title={c.title}>
      <div className="max-w-3xl mx-auto">
        <p className="text-xs text-gray-500 mb-6">{c.updated}</p>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">{c.intro}</p>
        <p className="text-xs text-[var(--vgo)] bg-orange-50 border border-orange-100 rounded-xl px-4 py-3 mb-10">{c.note}</p>

        <div className="space-y-8">
          {c.secs.map((s, i) => (
            <section key={i}>
              <h2 className="text-base font-black text-gray-900 mb-3">{s.t}</h2>
              <div className="space-y-2">
                {s.c.map((para, j) => (
                  <p key={j} className="text-sm text-gray-700 leading-relaxed">{para}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 p-5 rounded-2xl bg-gray-50 border border-gray-100">
          <p className="text-xs text-gray-700 leading-relaxed mb-3">{c.confirm}</p>
          <p className="text-xs text-gray-500">{c.contact}</p>
        </div>
      </div>
    </PageShell>
  );
}
