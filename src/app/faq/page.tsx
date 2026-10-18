"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, HelpCircle, User, Store, Wrench, Shield, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLang } from "@/lib/i18n";
import PageShell from "@/components/PageShell";

type Cat = "all" | "general" | "customer" | "merchant" | "tech" | "security";

const CATS: Record<Cat, { zh: string; en: string; ms: string; Icon: LucideIcon }> = {
  all:      { zh: "全部", en: "All", ms: "Semua", Icon: HelpCircle },
  general:  { zh: "关于 V'GO", en: "About V'GO", ms: "Tentang V'GO", Icon: HelpCircle },
  customer: { zh: "客户", en: "Customer", ms: "Pelanggan", Icon: User },
  merchant: { zh: "商家", en: "Merchant", ms: "Peniaga", Icon: Store },
  tech:     { zh: "师傅", en: "Technician", ms: "Juruteknik", Icon: Wrench },
  security: { zh: "安全", en: "Security", ms: "Keselamatan", Icon: Shield },
};

const FAQ = {
  zh: [
    { cat: "general", q: "V'GO 是什么？", a: "V'GO 是马来西亚上门服务平台，把认证师傅和有需要的家庭连在一起。你可以在这里找维修、清洁、按摩、跑腿、二手交易、招工等服务。我们目前覆盖沙巴州亚庇地区，正在持续扩展中。" },
    { cat: "general", q: "覆盖哪些地区？", a: "目前覆盖马来西亚沙巴州亚庇及周边地区。我们计划在未来 12 个月逐步扩展到沙巴其他城市和西马主要城市。你可以在官网首页看到最新的覆盖区域地图。" },
    { cat: "general", q: "V'GO 和 Grab 有什么不同？", a: "V'GO 专注上门生活服务（维修、清洁、按摩、跑腿、二手、招工），不是打车或外卖。我们是本地平台，客服说中文/英文/马来文，服务也由本地师傅提供。" },
    { cat: "general", q: "怎么联系客服？", a: "邮件 support.vgo@gmail.com 或 WhatsApp +60 11-7269 1788。工作时间为周一至周日 9:00-21:00（马来西亚时间），我们会在 24 小时内回复每一条信息。" },

    { cat: "customer", q: "怎么下单？", a: "注册账号后下载 App，选择需要的服务，填写地址和时间，一键下单。系统会派附近的认证师傅接单，你可以实时看到师傅位置。下单前你会看到预估价格，师傅上门确认后才给出最终价格。" },
    { cat: "customer", q: "价格怎么算？", a: "每个服务都有明确的起始价格区间，下单前你会看到报价。师傅上门确认后才会给出最终价格，你同意才开工，没有隐藏费用。如遇价格疑问，可随时联系客服协助。" },
    { cat: "customer", q: "可以退款吗？", a: "可以。如果师傅未按时上门，或服务未完成，你可以申请全额退款。平台会在 1-3 个工作日内处理。如遇争议，平台客服会介入调查。" },
    { cat: "customer", q: "可以指定师傅吗？", a: "如果平台提供指定功能，你可以在下单时备注。多次服务后可优先预约同一师傅，熟悉你的需求和偏好。具体以 App 内功能为准。" },
    { cat: "customer", q: "服务时间多久？", a: "不同类型的服务时长不同，下单前会显示预估时长。维修类通常 30-120 分钟，清洁类 2-6 小时，按摩类 60-120 分钟。实际时长取决于具体问题复杂度和现场情况。" },
    { cat: "customer", q: "可以在晚上下单吗？", a: "可以。平台 7×24 小时接单，深夜时段（22:00-06:00）部分服务可能加收服务费。紧急情况（如爆管、跳闸）优先派单。" },

    { cat: "merchant", q: "商家怎么入驻？", a: "点击官网「商家合作」页面，提交 SSM 注册文件、IC、银行资料，我们会在 1-2 个工作日内审核。免费入驻，按单结算，没有隐藏费用。" },
    { cat: "merchant", q: "需要什么文件？", a: "需要：SSM 营业注册文件（Form D/9/24/49）、签署协议人的 IC 正反面、银行账户信息、品牌 Logo 和门店照片、服务目录和价格表。如有 Halal / SST 认证也请一并提供。" },
    { cat: "merchant", q: "平台收取多少费用？", a: "VGO 对标准服务订单收取一定比例的平台服务费，具体费率以双方签署的协议为准。所有费用在入驻前会明确告知，没有隐藏收费。前 2 个月有 0% 手续费优惠（限首批商家）。" },
    { cat: "merchant", q: "结算周期是多久？", a: "订单完成后，款项按照平台约定的结算周期入账，通常为每周或每两周结算一次。具体以协议条款为准。" },
    { cat: "merchant", q: "可以只上架部分服务吗？", a: "可以。你可以选择上架全部服务，也可以只上架部分。入驻后随时可以在商家后台调整服务目录。" },

    { cat: "tech", q: "手艺人怎么加入？", a: "点击官网「师傅入驻」页面，提交你的技能和身份信息。通过审核后即可接单，零成本，自己排时间。前 2 个月有 0% 手续费 + 创始徽章优惠（限首批师傅）。" },
    { cat: "tech", q: "需要什么资料？", a: "需要：身份证（IC）正反面、专业技能证书（如有）、银行账户（收款用）、个人照片 + 工作照、无犯罪记录证明（部分服务需）、健康证明（美容/按摩类需）。" },
    { cat: "tech", q: "多久能拿到钱？", a: "订单完成、客户验收后，款项按平台约定的结算周期自动打入你的银行账户。具体周期以入驻协议为准。" },
    { cat: "tech", q: "客户不付款怎么办？", a: "V'GO 平台提供订单担保。所有通过平台的订单，客户付款会先进入平台托管，完工验收后才会放款给你。客户无法直接拖欠。" },
    { cat: "tech", q: "每天必须接单吗？", a: "不必须。你完全自主决定接单时间和数量。想多赚就多接，想休息就下线。平台不会强制派单。" },

    { cat: "security", q: "数据安全吗？", a: "我们采用行业标准安全措施：传输加密（HTTPS）、密码 scrypt 加密、访问控制、密钥隔离、日志审计。所有敏感数据（如手机号）在日志中脱敏处理。详见隐私政策。" },
    { cat: "security", q: "师傅有认证吗？", a: "有。所有师傅入驻前都需通过身份验证和技能审核，可查真实身份、真实评价、真实服务记录。维修类师傅还需提供相关资质证明。平台全程记录服务过程，保障双方权益。" },
    { cat: "security", q: "服务过程安全吗？", a: "平台要求所有师傅签署服务规范，包括：按时到达、先报价后动手、不擅自加价、不乱翻客户物品、服务过程可留档。如遇不当行为，可立即投诉，平台介入处理。" },
    { cat: "security", q: "我的个人信息会被公开吗？", a: "不会。我们严格遵守 PDPA 2024（马来西亚个人数据保护法）。你的手机号、地址、身份证信息都加密存储，仅在服务过程中提供给对应的师傅，服务完成后自动隐藏。" },
  ],
  en: [
    { cat: "general", q: "What is V'GO?", a: "V'GO is a Malaysia home-service platform connecting certified pros with families in need. Find repair, cleaning, massage, errands, second-hand trading, and job listings all in one place. We currently cover Kota Kinabalu, Sabah, and are expanding steadily." },
    { cat: "general", q: "Which areas do you cover?", a: "Currently covering Kota Kinabalu and surrounding areas in Sabah, Malaysia. We plan to expand to other Sabah cities and Peninsular Malaysia within 12 months. Check the coverage map on our homepage for the latest." },
    { cat: "general", q: "How is V'GO different from Grab?", a: "V'GO focuses on home services (repair, cleaning, massage, errands, second-hand, gig work), not ride-hailing or food delivery. We're a local platform with trilingual support (Chinese/English/Malay), served by local pros." },
    { cat: "general", q: "How do I contact support?", a: "Email support.vgo@gmail.com or WhatsApp +60 11-7269 1788. Business hours: Mon-Sun 9:00-21:00 MYT. We reply within 24 hours." },

    { cat: "customer", q: "How do I place an order?", a: "Sign up, download the app, choose a service, enter your address and time, then order in one tap. The system dispatches nearby certified pros, and you can track them in real time. You'll see an estimated price before ordering." },
    { cat: "customer", q: "How is the price calculated?", a: "Each service has a clear starting price range shown before ordering. The final price is confirmed on-site by the pro. Work only starts after you agree — no hidden fees. Contact support if you have questions." },
    { cat: "customer", q: "Can I get a refund?", a: "Yes. If the pro doesn't show up on time or the service isn't completed, you can request a full refund. Processed within 1-3 business days. Platform support will mediate in case of disputes." },
    { cat: "customer", q: "Can I choose a specific pro?", a: "If the platform offers the feature, you can note your preferred pro when ordering. After several services, you can prioritize the same pro who knows your needs. Check the app for specifics." },
    { cat: "customer", q: "How long does a service take?", a: "Depends on the service type. Repair: 30-120 min; Cleaning: 2-6 hours; Massage: 60-120 min. Actual time depends on complexity and site conditions." },
    { cat: "customer", q: "Can I order at night?", a: "Yes. The platform accepts orders 24/7. Late-night hours (22:00-06:00) may incur a service fee for some services. Emergencies (burst pipe, blackout) get priority dispatch." },

    { cat: "merchant", q: "How do merchants join?", a: "Tap \"Merchant Partnership\" on our website, submit your SSM registration, IC, and bank info. We review within 1-2 business days. Free to join, pay per order, no hidden fees." },
    { cat: "merchant", q: "What documents are needed?", a: "Required: SSM registration (Form D/9/24/49), IC front & back of the signatory, bank account details, brand logo and store photos, service catalog with pricing. Provide Halal / SST certifications if applicable." },
    { cat: "merchant", q: "What fees does the platform charge?", a: "VGO charges a platform service fee per standard-service order. Exact rate is stated in the agreement you sign. All fees are disclosed before onboarding — no hidden charges. First 2 months are 0% fee (limited to first batch)." },
    { cat: "merchant", q: "How often do I get paid?", a: "After order completion, payments are settled according to the agreed cycle, usually weekly or bi-weekly. Check your agreement for specifics." },
    { cat: "merchant", q: "Can I list only some services?", a: "Yes. You can list all services or just a subset. You can adjust your service catalog anytime in the merchant dashboard." },

    { cat: "tech", q: "How do pros join?", a: "Tap \"Technician Onboarding\" on our website, submit your skills and ID. Once approved, you can start taking jobs — zero cost, set your own hours. First 2 months are 0% fee + founder badge (limited to first batch)." },
    { cat: "tech", q: "What documents are needed?", a: "Required: IC front & back, skill certificates (if any), bank account for payouts, personal photo and work photos, police clearance (some services), health certificate (beauty/massage)." },
    { cat: "tech", q: "When do I get paid?", a: "After the customer accepts and service is complete, payment is auto-transferred per the agreed cycle. Check your onboarding agreement for specifics." },
    { cat: "tech", q: "What if the customer doesn't pay?", a: "V'GO offers order escrow. All platform orders are pre-paid into escrow and only released after acceptance. Customers cannot default directly." },
    { cat: "tech", q: "Must I take jobs every day?", a: "No. You fully control your schedule and volume. Take more for more income, go offline to rest. The platform never forces dispatches." },

    { cat: "security", q: "Is my data safe?", a: "We use industry-standard security: HTTPS, scrypt password hashing, access controls, key isolation, audit logging. Sensitive data (e.g. phone numbers) is masked in logs. See our Privacy Policy for details." },
    { cat: "security", q: "Are pros certified?", a: "Yes. All pros must pass identity and skill verification before joining — real ID, real ratings, real service history. Repair pros must provide certifications. Every service is fully recorded." },
    { cat: "security", q: "Is the service process safe?", a: "All pros sign service standards: on-time arrival, quote before work, no arbitrary price hikes, no snooping, service can be documented. Immediate complaint and platform mediation if violations occur." },
    { cat: "security", q: "Is my personal info public?", a: "No. We strictly comply with PDPA 2024 (Malaysia Personal Data Protection Act). Your phone, address, and IC are encrypted. Only shared with the assigned pro during service, hidden automatically after." },
  ],
  ms: [
    { cat: "general", q: "Apa itu V'GO?", a: "V'GO ialah platform perkhidmatan ke rumah Malaysia, menghubungkan tukang bertauliah dengan keluarga yang memerlukan. Cari pembaikan, pembersihan, urutan, penghantaran, jual beli terpakai, dan kerja. Kami kini meliputi Kota Kinabalu, Sabah." },
    { cat: "general", q: "Liputan kawasan mana?", a: "Kini meliputi Kota Kinabalu dan kawasan sekitar Sabah. Kami merancang meluaskan ke bandar lain di Sabah dan Semenanjung dalam 12 bulan. Lihat peta liputan di laman utama." },
    { cat: "general", q: "Apa beza V'GO dengan Grab?", a: "V'GO fokus pada perkhidmatan rumah (pembaikan, pembersihan, urutan, penghantaran, terpakai, kerja gig), bukan teksi atau penghantaran makanan. Kami platform tempatan dengan sokongan tiga bahasa." },
    { cat: "general", q: "Macam mana hubungi sokongan?", a: "E-mel support.vgo@gmail.com atau WhatsApp +60 11-7269 1788. Waktu operasi: Isnin-Ahad 9:00-21:00 MYT. Kami balas dalam 24 jam." },

    { cat: "customer", q: "Macam mana nak tempah?", a: "Daftar akaun, muat turun app, pilih servis, isi alamat dan masa, tempah satu klik. Sistem akan hantar tukang bertauliah berdekatan. Anda boleh track mereka secara langsung." },
    { cat: "customer", q: "Macam mana harga dikira?", a: "Setiap servis ada julat harga permulaan yang jelas sebelum tempah. Harga akhir disahkan oleh tukang di lokasi. Kerja hanya mula selepas anda setuju — tiada caj tersembunyi." },
    { cat: "customer", q: "Boleh dapat bayaran balik?", a: "Boleh. Jika tukang tak datang tepat masa atau servis tak siap, anda boleh minta bayaran balik penuh. Diproses dalam 1-3 hari bekerja." },
    { cat: "customer", q: "Boleh pilih tukang tertentu?", a: "Jika platform menyediakan ciri ini, anda boleh catat tukang pilihan semasa tempah. Selepas beberapa servis, anda boleh utamakan tukang yang sama." },
    { cat: "customer", q: "Berapa lama servis?", a: "Bergantung pada jenis servis. Pembaikan: 30-120 minit; Pembersihan: 2-6 jam; Urutan: 60-120 minit. Masa sebenar bergantung pada kerumitan." },
    { cat: "customer", q: "Boleh tempah waktu malam?", a: "Boleh. Platform terima pesanan 24/7. Waktu lewat malam (22:00-06:00) mungkin dikenakan caj untuk sebahagian servis. Kecemasan diutamakan." },

    { cat: "merchant", q: "Macam mana peniaga sertai?", a: "Klik \"Kerjasama Peniaga\" di laman web, hantar pendaftaran SSM, IC, dan maklumat bank. Kami semak dalam 1-2 hari bekerja. Daftar percuma, bayar ikut tempahan." },
    { cat: "merchant", q: "Apa dokumen diperlukan?", a: "Pendaftaran SSM (Borang D/9/24/49), IC hadapan & belakang, maklumat akaun bank, logo dan gambar kedai, katalog servis dengan harga. Sertakan pensijilan Halal/SST jika ada." },
    { cat: "merchant", q: "Platform cas berapa?", a: "VGO mengenakan fi perkhidmatan platform bagi setiap pesanan servis standard. Kadar tepat dinyatakan dalam perjanjian. Semua fi dimaklumkan sebelum pendaftaran — tiada caj tersembunyi." },
    { cat: "merchant", q: "Berapa kerap dibayar?", a: "Selepas pesanan selesai, bayaran diselesaikan mengikut kitaran yang dipersetujui, biasanya mingguan atau dua mingguan." },
    { cat: "merchant", q: "Boleh senaraikan sebahagian servis sahaja?", a: "Boleh. Anda boleh senaraikan semua atau sebahagian sahaja. Boleh ubah katalog servis bila-bila masa di dashboard peniaga." },

    { cat: "tech", q: "Macam mana tukang sertai?", a: "Klik \"Pendaftaran Juruteknik\" di laman web, hantar kemahiran dan ID anda. Selepas lulus, boleh mula terima kerja — kos sifar, atur masa sendiri." },
    { cat: "tech", q: "Apa dokumen diperlukan?", a: "IC hadapan & belakang, sijil kemahiran (jika ada), akaun bank untuk bayaran, gambar peribadi dan kerja, surat bersih polis (sebahagian servis), sijil kesihatan (kecantikan/urutan)." },
    { cat: "tech", q: "Bila dapat bayaran?", a: "Selepas pelanggan terima dan servis selesai, bayaran dipindahkan secara automatik mengikut kitaran yang dipersetujui." },
    { cat: "tech", q: "Macam mana jika pelanggan tak bayar?", a: "V'GO menawarkan eskrow pesanan. Semua pesanan platform dibayar ke eskrow dan hanya dilepaskan selepas penerimaan. Pelanggan tidak boleh gagal bayar terus." },
    { cat: "tech", q: "Mesti terima kerja setiap hari?", a: "Tidak. Anda kawal sepenuhnya jadual dan jumlah anda. Terima lebih untuk lebih pendapatan, offline untuk rehat." },

    { cat: "security", q: "Adakah data saya selamat?", a: "Kami guna keselamatan standard industri: HTTPS, pencincangan kata laluan scrypt, kawalan akses, pengasingan kunci, audit log. Data sensitif (nombor telefon) dimaskerkan dalam log." },
    { cat: "security", q: "Tukang ada pensijilan?", a: "Ada. Semua tukang perlu lulus pengesahan identiti dan kemahiran sebelum sertai — ID sebenar, penilaian sebenar, rekod servis sebenar." },
    { cat: "security", q: "Proses servis selamat?", a: "Semua tukang tandatangan piawaian: tiba tepat masa, sebut harga dahulu, tiada kenaikan harga sewenang-wenangnya, tiada menggeledah, servis boleh didokumentasi." },
    { cat: "security", q: "Maklumat peribadi saya awam?", a: "Tidak. Kami patuh sepenuhnya PDPA 2024. Telefon, alamat, dan IC anda disulitkan. Dikongsi hanya dengan tukang berkaitan semasa servis, disembunyikan selepas selesai." },
  ],
} as const;

export default function FaqPage() {
  const { lang } = useLang();
  const c: "zh" | "en" | "ms" = (lang === "en" || lang === "ms") ? lang : "zh";
  const [cat, setCat] = useState<Cat>("all");
  const [open, setOpen] = useState<number | null>(0);
  const [query, setQuery] = useState("");

  const allItems: { cat: string; q: string; a: string }[] = FAQ[c] as unknown as { cat: string; q: string; a: string }[];
  const filtered = allItems.filter((item) => {
    const matchCat = cat === "all" || item.cat === cat;
    const matchQ = !query.trim() ||
      item.q.toLowerCase().includes(query.toLowerCase()) ||
      item.a.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <PageShell label={c === "en" ? "FAQ" : c === "ms" ? "Soalan Lazim" : "常见问题"} title={c === "en" ? "Frequently Asked Questions" : c === "ms" ? "Soalan Lazim" : "常见问题"}>
      {/* 搜索 */}
      <div className="not-prose mb-6">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={c === "en" ? "Search questions..." : c === "ms" ? "Cari soalan..." : "搜索问题..."}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#06111d]/5 border border-white/10 text-white text-sm outline-none focus:border-[var(--vgo)] placeholder-white/40 transition"
          />
        </div>
      </div>

      {/* 分类 tab */}
      <div className="not-prose mb-8 flex flex-wrap gap-2">
        {(Object.keys(CATS) as Cat[]).map((k) => {
          const Icon = CATS[k].Icon;
          const active = cat === k;
          return (
            <button
              key={k}
              onClick={() => { setCat(k); setOpen(null); }}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition ${
                active
                  ? "bg-gradient-to-b from-[var(--vgo)] to-[var(--vgo-dark)] text-white shadow-lg shadow-orange-500/30"
                  : "bg-[#06111d]/5 border border-white/10 text-white/60 hover:bg-[#06111d]/10 hover:text-white"
              }`}
            >
              <Icon size={13} strokeWidth={2.4} />
              {CATS[k][c]}
            </button>
          );
        })}
      </div>

      {/* FAQ 列表 */}
      <div className="space-y-3 not-prose">
        {filtered.length === 0 && (
          <div className="text-center py-16 text-white/40">
            <MessageCircle size={32} className="mx-auto mb-3 opacity-30" />
            <p className="text-sm">{c === "en" ? "No results found" : c === "ms" ? "Tiada hasil" : "没有找到相关问题"}</p>
            <p className="text-xs mt-2">{c === "en" ? "Try other keywords or contact support" : c === "ms" ? "Cuba kata kunci lain atau hubungi sokongan" : "换个关键词，或直接联系客服"}</p>
          </div>
        )}
        {filtered.map((item, i) => {
          const realIndex = allItems.indexOf(item);
          const isOpen = open === realIndex;
          return (
            <div
              key={item.q}
              className={`rounded-2xl border transition-colors ${
                isOpen ? "border-[#FFB800]/40 bg-orange-50/5" : "border-white/10 bg-[#06111d]/3 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : realIndex)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-bold text-white text-sm sm:text-base">{item.q}</span>
                <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg font-light transition-[transform,box-shadow,opacity,width,background-color] duration-300 ${
                  isOpen ? "bg-[#FFB800] text-white rotate-45" : "bg-[#06111d]/10 text-white/60"
                }`}>+</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-white/65 leading-[1.8]">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* 没找到？联系客服 */}
      {filtered.length > 0 && (
        <div className="not-prose mt-12 p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-600/5 border border-orange-500/25 text-center">
          <MessageCircle size={22} className="text-[var(--vgo)] mx-auto mb-3" />
          <p className="text-sm text-white/80 mb-4">
            {c === "en" ? "Didn't find what you're looking for?" : c === "ms" ? "Tak jumpa apa yang anda cari?" : "没找到你的问题？"}
          </p>
          <a
            href="https://wa.me/601172691788"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white text-sm font-black hover:scale-105 active:scale-95 transition"
          >
            <MessageCircle size={16} />
            {c === "en" ? "Contact Support" : c === "ms" ? "Hubungi Sokongan" : "联系客服"}
          </a>
        </div>
      )}
    </PageShell>
  );
}
