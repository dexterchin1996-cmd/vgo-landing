"use client";
import { useLang } from "@/lib/i18n";
import PageShell from "@/components/PageShell";

const C = {
  zh: {
    label: "知识产权与版权", title: "知识产权与版权声明",
    updated: "最后更新：2026 年 1 月",
    intro: "V'GO 尊重知识产权，也保护自身和用户的权利。本声明说明 V'GO 平台自身、用户、师傅三方在内容上的权利归属，以及侵权投诉流程。",
    s1_t: "1. 平台自身的知识产权",
    s1: "V'GO 的软件代码、UI 设计、文案、Logo、品牌名称、商标及一切原创内容，均受马来西亚《1987 年版权法》和《2019 年商标法》保护。未经 V'GO 书面许可，任何人不得复制、修改、分发、商用或以任何方式利用。",
    s2_t: "2. 用户与师傅的内容权利",
    s2: "用户在 V'GO 发布的评价、二手商品信息、图片等内容，版权仍归用户所有。但用户授予 V'GO 非独占、免费、全球性的许可，用于在平台上展示和推广。师傅/商家上传的资质、作品图、店铺信息，版权归师傅/商家所有，同样授予 V'GO 展示许可。",
    s3_t: "3. 侵权投诉与通知-删除流程",
    s3: "如您认为 V'GO 平台上存在侵犯您知识产权的内容，请将以下材料发送至下方投诉邮箱：(1) 您的版权/商标证明；(2) 涉嫌侵权的具体链接；(3) 您的联系方式；(4) 一份声明，说明您善意认为该使用未经授权。",
    s4_t: "4. 处理时限",
    s4: "V'GO 收到符合要求的投诉后，将在 48 小时内下架涉嫌侵权内容，并通知被投诉方。被投诉方可提交反通知，我们将在核验后决定是否恢复内容。",
    s5_t: "5. 反通知机制",
    s5: "如您认为您的内容被错误下架，请提交反通知，说明内容不侵权的理由及法律依据。V'GO 将把反通知转交投诉方，并依法处理。",
    s6_t: "6. 重复侵权者处理",
    s6: "对于重复侵权的账号，V'GO 有权暂停或永久终止其账号。我们保留向执法机关举报严重侵权行为的权利。",
    s7_t: "7. 平台免责声明",
    s7: "V'GO 是信息撮合平台，不直接提供内容。对于用户上传的第三方内容，V'GO 保持中立，并在收到有效侵权通知后及时删除内容。根据马来西亚《1987 年版权法》第 43B 至 43E 条，V'GO 享有安全港（Safe Harbour）保护。",
    s8_t: "8. 投诉渠道",
    s8: "知识产权投诉专用邮箱：",
  },
  en: {
    label: "IP & Copyright", title: "Intellectual Property & Copyright Notice",
    updated: "Last updated: January 2026",
    intro: "V'GO respects intellectual property and protects the rights of itself and its users. This notice explains content ownership among V'GO, users, and pros, as well as the infringement complaint process.",
    s1_t: "1. V'GO's Own IP",
    s1: "V'GO's software code, UI design, copy, logo, brand name, trademarks, and all original content are protected under Malaysia's Copyright Act 1987 and Trademarks Act 2019. No part may be copied, modified, distributed, or commercially used without V'GO's written permission.",
    s2_t: "2. User & Pro Content Rights",
    s2: "Reviews, marketplace listings, and images posted by users remain the copyright of the users. However, users grant V'GO a non-exclusive, royalty-free, worldwide license to display and promote such content on the platform. Credentials, work photos, and shop info uploaded by pros/merchants remain their property, with a similar display license granted to VGO.",
    s3_t: "3. Infringement Complaint & Notice-Takedown",
    s3: "If you believe content on V'GO infringes your IP rights, please send the following to our complaint email: (1) your copyright/trademark proof; (2) the specific infringing link; (3) your contact info; (4) a statement that you believe in good faith the use is unauthorized.",
    s4_t: "4. Processing Timeline",
    s4: "Upon receiving a valid complaint, V'GO will take down the allegedly infringing content within 48 hours and notify the respondent. The respondent may submit a counter-notice, and we will decide whether to restore the content after review.",
    s5_t: "5. Counter-Notice",
    s5: "If you believe your content was wrongfully removed, please submit a counter-notice explaining why the content is not infringing, with legal basis. V'GO will forward the counter-notice to the complainant and handle accordingly.",
    s6_t: "6. Repeat Infringers",
    s6: "For accounts with repeated infringements, V'GO reserves the right to suspend or permanently terminate the account. We also reserve the right to report serious infringements to law enforcement.",
    s7_t: "7. Platform Disclaimer",
    s7: "V'GO is an information platform and does not directly provide content. For third-party content uploaded by users, V'GO remains neutral and removes content promptly upon valid infringement notice. Under Sections 43B to 43E of Malaysia's Copyright Act 1987, V'GO enjoys Safe Harbour protection.",
    s8_t: "8. Complaint Channel",
    s8: "Dedicated IP complaint email:",
  },
  ms: {
    label: "Harta Intelek & Hak Cipta", title: "Notis Harta Intelek & Hak Cipta",
    updated: "Kemas kini terakhir: Januari 2026",
    intro: "V'GO menghormati harta intelek dan melindungi hak dirinya serta pengguna. Notis ini menerangkan pemilikan kandungan antara V'GO, pengguna, dan tukang, serta proses aduan pelanggaran.",
    s1_t: "1. Harta Intelek V'GO",
    s1: "Kod perisian, reka bentuk UI, teks, logo, nama jenama, tanda dagangan, dan semua kandungan asal V'GO dilindungi di bawah Akta Hak Cipta 1987 dan Akta Tanda Dagangan 2019 Malaysia. Tiada bahagian boleh disalin, diubah, diedar, atau digunakan secara komersial tanpa kebenaran bertulis VGO.",
    s2_t: "2. Hak Kandungan Pengguna & Tukang",
    s2: "Ulasan, senarai pasar, dan imej yang dimuat naik oleh pengguna kekal hak cipta pengguna. Namun, pengguna memberi V'GO lesen bukan eksklusif, bebas royalti, seluruh dunia untuk memaparkan dan mempromosikan kandungan tersebut di platform. Kelayakan, gambar kerja, dan maklumat kedai yang dimuat naik oleh tukang/peniaga kekal milik mereka, dengan lesen paparan yang sama kepada VGO.",
    s3_t: "3. Aduan Pelanggaran & Notis-Turun",
    s3: "Jika anda percaya kandungan di V'GO melanggar hak IP anda, sila hantar yang berikut ke e-mel aduan kami: (1) bukti hak cipta/tanda dagangan anda; (2) pautan spesifik yang melanggar; (3) maklumat hubungan anda; (4) pernyataan bahawa anda percaya dengan ikhlas penggunaan itu tidak dibenarkan.",
    s4_t: "4. Tempoh Pemprosesan",
    s4: "Selepas menerima aduan yang sah, V'GO akan menurunkan kandungan yang didakwa melanggar dalam 48 jam dan memaklumkan responden. Responden boleh menghantar notis balas, dan kami akan memutuskan sama ada untuk memulihkan kandungan selepas semakan.",
    s5_t: "5. Notis Balas",
    s5: "Jika anda percaya kandungan anda dibuang secara salah, sila hantar notis balas yang menerangkan mengapa kandungan itu tidak melanggar, dengan asas undang-undang. V'GO akan memajukan notis balas kepada pengadu dan mengendalikannya dengan sewajarnya.",
    s6_t: "6. Pelanggar Berulang",
    s6: "Untuk akaun dengan pelanggaran berulang, V'GO berhak menggantung atau menamatkan akaun secara kekal. Kami juga berhak melaporkan pelanggaran serius kepada pihak berkuasa.",
    s7_t: "7. Penafian Platform",
    s7: "V'GO ialah platform maklumat dan tidak menyediakan kandungan secara langsung. Untuk kandungan pihak ketiga yang dimuat naik oleh pengguna, V'GO kekal neutral dan menurunkan kandungan dengan segera selepas notis pelanggaran yang sah. Di bawah Seksyen 43B hingga 43E Akta Hak Cipta 1987 Malaysia, V'GO menikmati perlindungan Safe Harbour.",
    s8_t: "8. Saluran Aduan",
    s8: "E-mel aduan IP khusus:",
  },
} as const;

export default function IpPage() {
  const { lang } = useLang();
  const c = C[lang] ?? C.zh;
  const SECTIONS = [
    { t: c.s1_t, d: c.s1 }, { t: c.s2_t, d: c.s2 }, { t: c.s3_t, d: c.s3 },
    { t: c.s4_t, d: c.s4 }, { t: c.s5_t, d: c.s5 }, { t: c.s6_t, d: c.s6 },
    { t: c.s7_t, d: c.s7 },
  ];
  return (
    <PageShell label={c.label} title={c.title}>
      <p className="text-sm text-white/50 mb-8">{c.updated}</p>
      <p className="text-white/75 leading-relaxed mb-12">{c.intro}</p>
      {SECTIONS.map((s) => (
        <div key={s.t} className="mb-10">
          <h2 className="text-xl font-black mb-3">{s.t}</h2>
          <p className="text-white/65 leading-relaxed">{s.d}</p>
        </div>
      ))}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
        <h2 className="text-xl font-black mb-3">{c.s8_t}</h2>
        <a href="mailto:support.vgo@gmail.com" className="text-[#FFB800] hover:underline">support.vgo@gmail.com</a>
      </div>
    </PageShell>
  );
}
