"use client";
import { motion } from "motion/react";
import {
  Rocket, TrendingUp, Bell, Wallet, ArrowRight, CheckCircle2,
  LayoutGrid, MessageSquare, ShieldCheck, BarChart3, GraduationCap,
  Megaphone, Headphones, Quote, BadgeCheck,
} from "lucide-react";
import { useLang } from "@/lib/i18n";

const C = {
  zh: {
    tag: "商家合作",
    hero_t: "让全马客户，找到你的店",
    hero_s: "免费入驻 VGO 平台，获得本地流量扶持、订单直推和透明费率。从线下到线上，一步到位。",
    hero_cta: "立即申请入驻",
    hero_faq: "查看常见问题 →",
    benefits_t: "为什么选择 VGO",
    benefits: [
      { Icon: Rocket,       title: "免费入驻",     desc: "零门槛开店，无需技术团队" },
      { Icon: TrendingUp,   title: "本地流量扶持", desc: "首页推荐位，曝光给附近客户" },
      { Icon: Bell,         title: "订单直接推送", desc: "新订单即时通知，不错过任何生意" },
      { Icon: Wallet,       title: "透明费率",     desc: "无隐藏收费，合作清清楚楚" },
      { Icon: LayoutGrid,   title: "免费店铺页",   desc: "一键上架服务，管理菜单和排班" },
      { Icon: MessageSquare,title: "专属客服支持", desc: "遇到问题随时联系，协助处理" },
    ],
    stats: [
      { n: "首批", l: "邀请制" },
      { n: "亚庇", l: "首发城市" },
      { n: "3 天", l: "上线时间" },
      { n: "0 元", l: "入驻费用" },
    ],
    earnings_t: "收益参考",
    earnings_sub: "以下为参考区间，实际收入取决于类目、时段、服务水平",
    earnings: [
      { n: "5-15 单",    l: "日均订单", sub: "视类目与旺季" },
      { n: "RM 80-350",  l: "客单价",   sub: "视服务类型" },
      { n: "RM 12K-52K", l: "月毛收入", sub: "参考区间，非承诺" },
    ],
    support_t: "平台支持",
    support: [
      { Icon: GraduationCap, title: "上手培训", desc: "提供入驻指引、接单流程、服务规范" },
      { Icon: BarChart3,     title: "经营看板", desc: "实时查看订单、收入、客户评价" },
      { Icon: Megaphone,     title: "营销活动", desc: "平台活动优先推荐优质商家" },
      { Icon: Headphones,    title: "客服支持", desc: "遇到问题随时联系，协助处理" },
      { Icon: MessageSquare, title: "评价管理", desc: "回复客户评价，建立店铺信用" },
      { Icon: ShieldCheck,   title: "纠纷调解", desc: "订单争议由平台介入协调" },
    ],
    stories_t: "商家故事",
    stories_sub: "来自亚庇地区的首批合作商家（示例）",
    stories: [
      { name: "亚庇 · 五金店",   tag: "五金水暖", quote: "老店开了 10 年，之前只靠熟客。上线 VGO 后，附近客户在手机上就能看到我们，订单主动找上门。" },
      { name: "亚庇 · 冷气维修", tag: "家电维修", quote: "以前靠 Facebook 接单，客户讨价还价很累。现在平台统一定价，报价透明，双方都省事。" },
      { name: "亚庇 · 美容院",   tag: "美容养生", quote: "年轻客户都习惯用 App 下单。上了 VGO 之后，曝光多了不少，预约也更稳定。" },
    ],
    flow_t: "入驻流程",
    steps: [
      { n: "01", title: "提交申请", desc: "填写基本信息，上传 SSM 和银行资料", time: "5 分钟" },
      { n: "02", title: "平台审核", desc: "VGO 团队核验资料，1-3 个工作日", time: "1-3 天" },
      { n: "03", title: "上架服务", desc: "配置服务、价格、排班，生成店铺页", time: "30 分钟" },
      { n: "04", title: "开始接单", desc: "客户下单，App 即时通知", time: "立即" },
      { n: "05", title: "自动结算", desc: "订单完成，按平台规则结算入账", time: "按周期" },
    ],
    docs_t: "入驻所需文件",
    docs: [
      "SSM 营业注册文件（Form D / 9 / 24 / 49）",
      "签署协议人的身份证（IC）正反面",
      "银行账户信息（开户行 + 户名）",
      "品牌 Logo 和门店照片",
      "服务目录和价格表",
      "营业执照（如有）",
      "Halal 认证（如有）",
      "SST 认证（如有）",
    ],
    faq_t: "常见问题",
    faqs: [
      ["入驻需要什么条件？", "需要持有马来西亚 SSM 注册的合法商业实体。接受个人企业（Sole Proprietor）和私人有限公司（Sdn Bhd）。注册文件上的董事或持有人须作为协议签署人。"],
      ["平台收取多少费用？", "VGO 对标准服务订单收取一定比例的平台服务费，具体费率以双方签署的协议为准。所有费用在入驻前会明确告知，没有隐藏收费。"],
      ["结算周期是多久？", "订单完成后，款项按照平台约定的结算周期入账，通常为每周或每两周结算一次。具体以协议条款为准。"],
      ["需要自己配送吗？", "视服务类型而定。对于上门服务类目，商家可自行安排服务人员；对于商品配送类目，VGO 平台提供配送支持（如有）。具体以入驻时选择的合作模式为准。"],
      ["可以只上架部分服务吗？", "可以。你可以选择上架全部服务，也可以只上架部分。入驻后随时可以在商家后台调整服务目录。"],
      ["审核不通过怎么办？", "如果审核不通过，VGO 会告知具体原因。你可以根据反馈补充资料后重新提交。"],
      ["可以随时退出吗？", "可以。VGO 不强制绑定，你可以根据协议条款提前通知退出。退出后未结算的订单款项仍会按约定结算。"],
      ["没有实体店可以入驻吗？", "部分服务类目支持无实体店的个人服务者入驻。具体取决于你提供的服务类型，欢迎联系客服咨询。"],
    ],
    cta_t: "准备好加入了吗？",
    cta_s: "填写申请，VGO 团队会在 1-3 个工作日内联系你。",
    cta_btn: "提交入驻申请",
    cta_note: "或 WhatsApp: +60 11-7269 1788",
  },
  en: {
    tag: "Merchant Partnership",
    hero_t: "Get Found by Customers Nationwide",
    hero_s: "Join V'GO for free and get local traffic support, direct order dispatch, and transparent fees. Go online in one step.",
    hero_cta: "Apply to Join",
    hero_faq: "View FAQ →",
    benefits_t: "Why Choose V'GO",
    benefits: [
      { Icon: Rocket,       title: "Free Onboarding",     desc: "No barriers, no tech team needed" },
      { Icon: TrendingUp,   title: "Local Traffic Boost", desc: "Featured placement, visible to nearby customers" },
      { Icon: Bell,         title: "Direct Order Push",   desc: "Instant notifications, never miss business" },
      { Icon: Wallet,       title: "Transparent Fees",    desc: "No hidden charges, clear partnership terms" },
      { Icon: LayoutGrid,   title: "Free Store Page",     desc: "One-click listing, manage menu and schedule" },
      { Icon: MessageSquare,title: "Dedicated Support",   desc: "Reach us anytime, we help resolve issues" },
    ],
    stats: [
      { n: "By invite", l: "Beta Access" },
      { n: "KK",        l: "Launch City" },
      { n: "3 days",    l: "Go Live" },
      { n: "RM 0",      l: "Onboarding" },
    ],
    earnings_t: "Earnings Reference",
    earnings_sub: "Reference ranges only. Actual income depends on category, timing, and service level.",
    earnings: [
      { n: "5-15",       l: "Daily orders",  sub: "Depends on category & peak" },
      { n: "RM 80-350",  l: "Avg order",     sub: "Depends on service type" },
      { n: "RM 12K-52K", l: "Monthly gross", sub: "Reference only, not a promise" },
    ],
    support_t: "Platform Support",
    support: [
      { Icon: GraduationCap, title: "Onboarding Training", desc: "Guides, order flow, service standards" },
      { Icon: BarChart3,     title: "Business Dashboard",  desc: "Real-time orders, income, reviews" },
      { Icon: Megaphone,     title: "Marketing Campaigns", desc: "Platform campaigns prioritize good merchants" },
      { Icon: Headphones,    title: "Support Team",        desc: "Reach us anytime, we help resolve" },
      { Icon: MessageSquare, title: "Review Management",   desc: "Reply to reviews, build store credit" },
      { Icon: ShieldCheck,   title: "Dispute Resolution",  desc: "Platform mediates order disputes" },
    ],
    stories_t: "Merchant Stories",
    stories_sub: "From our first batch of merchants in Kota Kinabalu (sample)",
    stories: [
      { name: "KK · Hardware Store", tag: "Plumbing", quote: "Ten-year-old shop, only regulars. After joining V'GO, nearby customers find us on their phones — orders now come to us." },
      { name: "KK · AC Repair",       tag: "Appliance", quote: "Used to take orders via Facebook with painful price haggling. Now pricing is standard, transparent, easy for both sides." },
      { name: "KK · Beauty Salon",    tag: "Beauty",    quote: "Young customers prefer apps. Since joining V'GO, we get more exposure and stable bookings." },
    ],
    flow_t: "Onboarding Steps",
    steps: [
      { n: "01", title: "Apply",         desc: "Fill basic info, upload SSM and bank details", time: "5 min" },
      { n: "02", title: "Review",        desc: "V'GO team verifies, 1-3 business days",        time: "1-3 days" },
      { n: "03", title: "List Services", desc: "Configure services, prices, schedule",        time: "30 min" },
      { n: "04", title: "Start Receiving", desc: "Customers order, app notifies you instantly", time: "Instant" },
      { n: "05", title: "Auto Settlement", desc: "Order completes, paid per platform rules",   time: "Per cycle" },
    ],
    docs_t: "Required Documents",
    docs: [
      "SSM business registration (Form D / 9 / 24 / 49)",
      "Signatory's IC (front & back)",
      "Bank account info (bank + account holder)",
      "Brand logo & store photos",
      "Service catalog & pricing",
      "Business license (if any)",
      "Halal certification (if any)",
      "SST certification (if any)",
    ],
    faq_t: "FAQ",
    faqs: [
      ["What are the requirements?", "You need a legally registered business entity in Malaysia (SSM). Sole Proprietors and Sdn Bhd are both accepted. The director or owner listed on the registration must sign the agreement."],
      ["What fees does the platform charge?", "V'GO charges a platform service fee per standard-service order. Exact rate is stated in the agreement you sign. All fees are disclosed before onboarding — no hidden charges."],
      ["How often do I get paid?", "After order completion, payments settle according to the agreed cycle, usually weekly or bi-weekly. Refer to your agreement for specifics."],
      ["Do I need to handle delivery myself?", "Depends on service type. For on-site services, merchants can arrange their own staff; for delivery categories, V'GO may provide logistics support (if applicable). Refer to the cooperation model chosen at onboarding."],
      ["Can I list only some services?", "Yes. You can list all services or just a subset. You can adjust your service catalog anytime in the merchant dashboard."],
      ["What if my application is rejected?", "If rejected, V'GO will explain why. You can supplement documents based on feedback and resubmit."],
      ["Can I leave anytime?", "Yes. V'GO doesn't bind you. You can give notice per agreement terms. Unsettled orders will still be paid as agreed."],
      ["Can I join without a physical store?", "Some service categories accept individual providers without a physical store. It depends on the service you offer — contact support to ask."],
    ],
    cta_t: "Ready to Join?",
    cta_s: "Submit your application — V'GO team will contact you within 1-3 business days.",
    cta_btn: "Submit Application",
    cta_note: "Or WhatsApp: +60 11-7269 1788",
  },
  ms: {
    tag: "Kerjasama Peniaga",
    hero_t: "Ditemui Pelanggan Seluruh Negara",
    hero_s: "Sertai V'GO secara percuma dan dapatkan sokongan trafik tempatan, penghantaran pesanan terus, dan fi telus.",
    hero_cta: "Mohon Sertai",
    hero_faq: "Lihat FAQ →",
    benefits_t: "Mengapa Pilih V'GO",
    benefits: [
      { Icon: Rocket,       title: "Pendaftaran Percuma", desc: "Tiada halangan, tiada pasukan teknologi diperlukan" },
      { Icon: TrendingUp,   title: "Sokongan Trafik",     desc: "Kedudukan pilihan, kelihatan kepada pelanggan berhampiran" },
      { Icon: Bell,         title: "Pesanan Terus",       desc: "Notifikasi segera, tidak terlepas perniagaan" },
      { Icon: Wallet,       title: "Fi Telus",            desc: "Tiada caj tersembunyi, terma kerjasama jelas" },
      { Icon: LayoutGrid,   title: "Halaman Kedai Percuma", desc: "Senarai satu klik, urus menu dan jadual" },
      { Icon: MessageSquare,title: "Sokongan Khusus",     desc: "Hubungi bila-bila masa, kami bantu selesaikan" },
    ],
    stats: [
      { n: "Jemputan", l: "Akses Beta" },
      { n: "KK",       l: "Bandar Pelancaran" },
      { n: "3 hari",   l: "Masa Live" },
      { n: "RM 0",     l: "Pendaftaran" },
    ],
    earnings_t: "Rujukan Pendapatan",
    earnings_sub: "Julat rujukan sahaja. Pendapatan sebenar bergantung pada kategori, masa, dan tahap perkhidmatan.",
    earnings: [
      { n: "5-15",       l: "Pesanan harian", sub: "Bergantung kategori & puncak" },
      { n: "RM 80-350",  l: "Pesanan purata", sub: "Bergantung jenis servis" },
      { n: "RM 12K-52K", l: "Pendapatan kasar bulanan", sub: "Rujukan sahaja, bukan janji" },
    ],
    support_t: "Sokongan Platform",
    support: [
      { Icon: GraduationCap, title: "Latihan Onboarding", desc: "Panduan, aliran pesanan, piawaian servis" },
      { Icon: BarChart3,     title: "Dashboard Bisnes",   desc: "Pesanan masa nyata, pendapatan, ulasan" },
      { Icon: Megaphone,     title: "Kempen Pemasaran",   desc: "Kempen platform utamakan peniaga baik" },
      { Icon: Headphones,    title: "Pasukan Sokongan",   desc: "Hubungi bila-bila masa, kami bantu" },
      { Icon: MessageSquare, title: "Pengurusan Ulasan",  desc: "Balas ulasan, bina kredit kedai" },
      { Icon: ShieldCheck,   title: "Penyelesaian Pertikaian", desc: "Platform jadi orang tengah" },
    ],
    stories_t: "Kisah Peniaga",
    stories_sub: "Daripada kelompok pertama peniaga di Kota Kinabalu (contoh)",
    stories: [
      { name: "KK · Kedai Perkakasan", tag: "Paip", quote: "Kedai 10 tahun, hanya pelanggan tetap. Selepas sertai V'GO, pelanggan berhampiran jumpa kami di telefon — pesanan datang sendiri." },
      { name: "KK · Baiki Aircond",    tag: "Alatan", quote: "Dulu ambil pesanan Facebook, penat tawar-menawar. Sekarang harga standard, telus, senang kedua-dua pihak." },
      { name: "KK · Salon Kecantikan", tag: "Kecantikan", quote: "Pelanggan muda suka app. Sejak V'GO, lebih banyak pendedahan dan tempahan stabil." },
    ],
    flow_t: "Langkah Pendaftaran",
    steps: [
      { n: "01", title: "Mohon",       desc: "Isi maklumat asas, muat naik SSM dan bank", time: "5 minit" },
      { n: "02", title: "Semakan",     desc: "Pasukan V'GO sahkan, 1-3 hari bekerja",     time: "1-3 hari" },
      { n: "03", title: "Senarai Servis", desc: "Konfigur servis, harga, jadual",         time: "30 minit" },
      { n: "04", title: "Mula Terima", desc: "Pelanggan tempah, app maklum serta-merta",  time: "Segera" },
      { n: "05", title: "Penyelesaian Auto", desc: "Pesanan selesai, bayar ikut peraturan", time: "Per kitaran" },
    ],
    docs_t: "Dokumen Diperlukan",
    docs: [
      "Pendaftaran SSM (Borang D / 9 / 24 / 49)",
      "IC penandatangan (hadapan & belakang)",
      "Maklumat akaun bank (bank + pemegang akaun)",
      "Logo jenama & gambar kedai",
      "Katalog servis & harga",
      "Lesen perniagaan (jika ada)",
      "Pensijilan Halal (jika ada)",
      "Pensijilan SST (jika ada)",
    ],
    faq_t: "Soalan Lazim",
    faqs: [
      ["Apa syarat pendaftaran?", "Anda perlukan entiti perniagaan sah berdaftar di Malaysia (SSM). Sole Proprietor dan Sdn Bhd diterima. Pengarah atau pemilik dalam pendaftaran mesti tandatangan perjanjian."],
      ["Platform cas berapa?", "V'GO mengenakan fi perkhidmatan platform bagi setiap pesanan servis standard. Kadar tepat dinyatakan dalam perjanjian. Semua fi dimaklumkan sebelum pendaftaran — tiada caj tersembunyi."],
      ["Berapa kerap dibayar?", "Selepas pesanan selesai, bayaran diselesaikan mengikut kitaran yang dipersetujui, biasanya mingguan atau dua mingguan."],
      ["Perlu uruskan penghantaran sendiri?", "Bergantung pada jenis servis. Untuk servis di lokasi, peniaga boleh atur staf sendiri; untuk kategori penghantaran, V'GO mungkin bantu logistik (jika ada)."],
      ["Boleh senaraikan sebahagian servis sahaja?", "Boleh. Senaraikan semua atau sebahagian sahaja. Boleh ubah bila-bila masa di dashboard peniaga."],
      ["Macam mana jika permohonan ditolak?", "Jika ditolak, V'GO akan jelaskan sebabnya. Anda boleh tambah dokumen dan hantar semula."],
      ["Boleh keluar bila-bila masa?", "Boleh. V'GO tidak mengikat anda. Beri notis mengikut terma perjanjian. Pesanan belum diselesaikan tetap akan dibayar."],
      ["Boleh sertai tanpa kedai fizikal?", "Sebahagian kategori servis terima penyedia individu tanpa kedai fizikal. Bergantung pada servis anda — hubungi sokongan."],
    ],
    cta_t: "Sedia untuk Sertai?",
    cta_s: "Hantar permohonan — pasukan V'GO akan hubungi anda dalam 1-3 hari bekerja.",
    cta_btn: "Hantar Permohonan",
    cta_note: "Atau WhatsApp: +60 11-7269 1788",
  },
};

export default function MerchantPage() {
  const { lang } = useLang();
  const c = C[lang] ?? C.zh;

  return (
    <main className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <section className="relative min-h-[70svh] flex items-center justify-center px-5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/shared/s06.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-gray-950" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center pt-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-semibold mb-6">
            <Rocket size={14} /> {c.tag}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">{c.hero_t}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed">{c.hero_s}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-black shadow-[0_10px_40px_-6px_rgba(255,150,0,0.65)] hover:scale-[1.03] active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">
              {c.hero_cta} <ArrowRight size={18} />
            </a>
            <a href="#faq" className="text-xs text-white/60 hover:text-white transition">{c.hero_faq}</a>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-10">{c.benefits_t}</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {c.benefits.map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center mb-4">
                <b.Icon size={20} color="#fff" />
              </div>
              <h3 className="text-base font-black text-white mb-2">{b.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {c.stats.map((s, i) => (
            <motion.div key={s.l} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-b from-[#FFD24A] to-[#FF8A00] bg-clip-text text-transparent leading-tight">{s.n}</div>
              <div className="text-xs text-white/60 mt-1.5">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-3">{c.earnings_t}</motion.h2>
        <p className="text-center text-xs text-white/40 mb-10">{c.earnings_sub}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {c.earnings.map((e, i) => (
            <motion.div key={e.l} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-600/5 border border-amber-500/25 text-center">
              <div className="text-xl sm:text-2xl font-black text-[var(--vgo)]">{e.n}</div>
              <div className="text-sm font-bold text-white mt-2">{e.l}</div>
              <div className="text-[11px] text-white/50 mt-1">{e.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-10">{c.support_t}</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {c.support.map((sp, i) => (
            <motion.div key={sp.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center mb-3">
                <sp.Icon size={18} color="#fff" />
              </div>
              <h3 className="text-sm font-black text-white mb-1.5">{sp.title}</h3>
              <p className="text-xs text-white/55 leading-relaxed">{sp.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-3">{c.stories_t}</motion.h2>
        <p className="text-center text-xs text-white/40 mb-10">{c.stories_sub}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {c.stories.map((st, i) => (
            <motion.div key={st.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 rounded-3xl bg-white/5 border border-white/10">
              <Quote size={36} strokeWidth={1} className="absolute top-3 right-3 text-[var(--vgo)] opacity-10" />
              <p className="text-sm text-white/75 leading-[1.8] mb-5">"{st.quote}"</p>
              <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center text-xs font-black shrink-0">{st.name[0]}</div>
                <div className="min-w-0">
                  <div className="text-sm font-black text-white truncate">{st.name}</div>
                  <div className="text-[11px] text-white/40 truncate">{st.tag}</div>
                </div>
                <BadgeCheck size={14} className="text-[var(--vgo)] ml-auto shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-10">{c.flow_t}</motion.h2>
        <div className="space-y-4">
          {c.steps.map((s, i) => (
            <motion.div key={s.n} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5 items-start p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center font-black text-lg">{s.n}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h3 className="text-base font-black text-white">{s.title}</h3>
                  <span className="text-[11px] font-bold text-[var(--vgo)] shrink-0">{s.time}</span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-10">{c.docs_t}</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {c.docs.map((d, i) => (
            <motion.div key={d} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
              <CheckCircle2 size={16} className="text-[var(--vgo)] shrink-0 mt-0.5" />
              <span className="text-sm text-white/75">{d}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="faq" className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-10">{c.faq_t}</motion.h2>
        <div className="space-y-3">
          {c.faqs.map(([q, a], i) => (
            <motion.div key={q} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}>
              <details className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                <summary className="cursor-pointer p-5 flex items-center justify-between gap-4 font-bold text-sm text-white hover:bg-white/5 transition list-none">
                  <span>{q}</span>
                  <span className="text-[var(--vgo)] group-open:rotate-45 transition-transform text-xl leading-none shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-white/60 leading-[1.8]">{a}</div>
              </details>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="apply" className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-16 pb-32">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-[#FF8A1F] to-[#D95000] p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,.25), transparent 70%)" }} />
          <div className="relative">
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-4">{c.cta_t}</h2>
            <p className="text-sm text-white/85 mb-8 max-w-md mx-auto">{c.cta_s}</p>
            <a href="mailto:support.vgo@gmail.com" className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-white text-[#D95000] font-black text-base shadow-2xl hover:scale-105 active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">
              {c.cta_btn} <ArrowRight size={18} />
            </a>
            <p className="text-xs text-white/60 mt-4">{c.cta_note}</p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
