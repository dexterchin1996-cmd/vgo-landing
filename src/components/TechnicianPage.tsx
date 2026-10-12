"use client";
import { motion } from "motion/react";
import {
  Wrench, Zap, ShieldCheck, Clock, Wallet, Award, ArrowRight, CheckCircle2,
  TrendingUp, BarChart3, GraduationCap, Headphones, Quote, BadgeCheck, Heart,
} from "lucide-react";
import { useLang } from "@/lib/i18n";

const C = {
  zh: {
    tag: "师傅入驻",
    hero_t: "有手艺，就有单",
    hero_s: "零成本入驻，就近派单，按单结算，自己排时间。手艺人的平台，多劳多得。",
    hero_cta: "立即申请入驻",
    hero_faq: "查看常见问题 →",
    benefits_t: "为什么加入 VGO",
    benefits: [
      { Icon: Zap,         title: "就近派单",   desc: "系统按距离和技能匹配，订单主动找你" },
      { Icon: ShieldCheck, title: "平台担保",   desc: "完工验收后放款，不怕客户拖欠" },
      { Icon: Clock,       title: "自己排时间", desc: "想接就接，不想接就休息，全凭自己" },
      { Icon: Wallet,      title: "按单结算",   desc: "每单完工即时记录，按周期自动入账" },
      { Icon: TrendingUp,  title: "公平定价",   desc: "标准服务平台定价，其他服务自主报价" },
      { Icon: Award,       title: "等级成长",   desc: "接单越多、评价越好，越优先派单" },
    ],
    stats: [
      { n: "首批", l: "邀请制" },
      { n: "亚庇", l: "首发城市" },
      { n: "0 元", l: "入驻成本" },
      { n: "1-2 天", l: "审核周期" },
    ],
    earnings_t: "收益参考",
    earnings_sub: "以下为参考区间，实际收入取决于技能、时段、订单量",
    earnings: [
      { n: "3-8 单",    l: "日均接单", sub: "视技能与空闲时间" },
      { n: "RM 80-300", l: "单均收入", sub: "视服务类型" },
      { n: "RM 7K-50K", l: "月毛收入", sub: "参考区间，非承诺" },
    ],
    support_t: "平台支持",
    support: [
      { Icon: GraduationCap, title: "技能培训", desc: "平台提供行业规范和服务培训" },
      { Icon: ShieldCheck,   title: "订单担保", desc: "客户先付款托管，完工后放款" },
      { Icon: BarChart3,     title: "收入看板", desc: "实时查看接单量、收入、评价" },
      { Icon: Headphones,    title: "客服支持", desc: "遇纠纷由平台介入协调" },
      { Icon: Award,         title: "等级体系", desc: "接单多、评价好，优先派单" },
      { Icon: Heart,         title: "保险覆盖", desc: "平台为接单过程提供基础保障" },
    ],
    stories_t: "师傅故事",
    stories_sub: "来自亚庇地区的首批合作师傅（示例）",
    stories: [
      { name: "亚庇 · 水电师傅",   tag: "水电维修 · 3 年经验", quote: "之前靠朋友圈发广告，接单很不稳定。上 VGO 之后，附近有需求就自动派过来，不用自己找客户。" },
      { name: "亚庇 · 冷气师傅",   tag: "空调维修 · 5 年经验", quote: "最怕遇到拖款的客户。平台担保就放心多了，完工验收后自动打款，不用追着要钱。" },
      { name: "亚庇 · 保洁员",     tag: "家庭清洁 · 2 年经验", quote: "时间很自由，想接单就上线，想休息就下线。比在固定公司上班舒服，收入也更灵活。" },
    ],
    flow_t: "入驻流程",
    steps: [
      { n: "01", title: "注册账号", desc: "填手机号、设密码，完成实名认证", time: "5 分钟" },
      { n: "02", title: "提交资质", desc: "上传技能证、身份证、工作照片", time: "10 分钟" },
      { n: "03", title: "平台审核", desc: "VGO 核验身份和技能，1-2 个工作日", time: "1-2 天" },
      { n: "04", title: "开始接单", desc: "接收就近派单，或主动抢单", time: "立即" },
      { n: "05", title: "完工收款", desc: "客户验收满意，按周期自动打款", time: "按周期" },
    ],
    skills_t: "可接服务类型",
    skills: [
      "水电维修", "空调维修", "家电维修", "门锁开锁",
      "清洁保洁", "家居装修", "搬运搬家", "跑腿代购",
      "按摩理疗", "美容美甲", "汽车维修", "宠物护理",
    ],
    docs_t: "入驻所需资料",
    docs: [
      "身份证（IC）正反面",
      "专业技能证书（如有）",
      "银行账户（收款用）",
      "个人照片 + 工作照",
      "无犯罪记录证明（部分服务需）",
      "健康证明（美容、按摩类需）",
    ],
    faq_t: "常见问题",
    faqs: [
      ["没有证书可以入驻吗？", "部分服务类目不强制要求证书，如搬运、跑腿、基础清洁。但涉及水电、空调、医疗类等高技能服务，需要提供相关技能证明。具体要求欢迎联系客服咨询。"],
      ["平台抽成多少？", "VGO 对每单收取一定比例的平台服务费，具体费率在入驻前会明确告知。标准服务按平台定价，其他服务由你自主报价。所有费用透明，没有隐藏收费。"],
      ["多久能拿到钱？", "订单完成、客户验收后，款项按平台约定的结算周期自动打入你的银行账户。具体周期以入驻协议为准。"],
      ["客户不付款怎么办？", "VGO 平台提供订单担保。所有通过平台的订单，客户付款会先进入平台托管，完工验收后才会放款给你。客户无法直接拖欠。"],
      ["可以指定服务区域吗？", "可以。你可以在后台设置自己的服务范围和可接单时段。系统只会派送范围内的订单给你。"],
      ["每天必须接单吗？", "不必须。你完全自主决定接单时间和数量。想多赚就多接，想休息就下线。平台不会强制派单。"],
      ["被客户投诉怎么办？", "如遇投诉，平台会核实情况。如果确实是服务问题，会按平台规则处理。如果是误会，会协助双方沟通解决。所有订单记录在平台留档。"],
      ["可以同时做多种服务吗？", "可以。你可以同时提供多种技能服务（如水电 + 清洁），只要通过对应的资质审核。"],
    ],
    cta_t: "准备好接单了吗？",
    cta_s: "提交申请，VGO 团队会在 1-2 个工作日内联系你。",
    cta_btn: "提交入驻申请",
    cta_note: "或 WhatsApp: +60 11-7269 1788",
  },
  en: {
    tag: "Technician Onboarding",
    hero_t: "Have Skills? Get Jobs.",
    hero_s: "Zero-cost onboarding, nearby dispatch, per-order payouts, set your own hours. The platform for skilled pros.",
    hero_cta: "Apply to Join",
    hero_faq: "View FAQ →",
    benefits_t: "Why Join V'GO",
    benefits: [
      { Icon: Zap,         title: "Nearby Dispatch",  desc: "Matched by distance & skill — jobs come to you" },
      { Icon: ShieldCheck, title: "Platform Guarantee", desc: "Paid after acceptance, no fear of default" },
      { Icon: Clock,       title: "Your Schedule",   desc: "Take jobs when you want, go offline anytime" },
      { Icon: Wallet,      title: "Per-Order Pay",   desc: "Recorded on completion, paid per cycle" },
      { Icon: TrendingUp,  title: "Fair Pricing",    desc: "Standard services platform-priced, others self-quoted" },
      { Icon: Award,       title: "Level Growth",    desc: "More jobs, better reviews, higher dispatch priority" },
    ],
    stats: [
      { n: "By invite", l: "Beta Access" },
      { n: "KK",        l: "Launch City" },
      { n: "RM 0",      l: "Onboarding" },
      { n: "1-2 days",  l: "Review Time" },
    ],
    earnings_t: "Earnings Reference",
    earnings_sub: "Reference ranges only. Actual income depends on skills, timing, and job volume.",
    earnings: [
      { n: "3-8",       l: "Daily jobs",    sub: "Depends on skills & availability" },
      { n: "RM 80-300", l: "Per job",       sub: "Depends on service type" },
      { n: "RM 7K-50K", l: "Monthly gross", sub: "Reference only, not a promise" },
    ],
    support_t: "Platform Support",
    support: [
      { Icon: GraduationCap, title: "Skill Training",  desc: "Industry standards and service training" },
      { Icon: ShieldCheck,   title: "Order Escrow",   desc: "Customer pays first, released after completion" },
      { Icon: BarChart3,     title: "Income Dashboard", desc: "Real-time jobs, income, reviews" },
      { Icon: Headphones,    title: "Support Team",   desc: "Platform mediates disputes" },
      { Icon: Award,         title: "Level System",   desc: "More jobs, better reviews, higher priority" },
      { Icon: Heart,         title: "Insurance",      desc: "Basic coverage during jobs" },
    ],
    stories_t: "Pro Stories",
    stories_sub: "From our first batch of pros in Kota Kinabalu (sample)",
    stories: [
      { name: "KK · Plumber",    tag: "Plumbing · 3 yrs", quote: "Used to advertise on Facebook with unstable jobs. Since V'GO, nearby jobs auto-dispatch — no need to find customers." },
      { name: "KK · AC Tech",    tag: "AC Repair · 5 yrs", quote: "Most afraid of slow-paying customers. Platform escrow changed that — auto-payout after acceptance, no chasing." },
      { name: "KK · Cleaner",    tag: "Cleaning · 2 yrs",  quote: "Very flexible — go online when I want jobs, offline when I want rest. Better than fixed-hour jobs, income more flexible." },
    ],
    flow_t: "Onboarding Steps",
    steps: [
      { n: "01", title: "Register",     desc: "Phone, password, complete ID verification", time: "5 min" },
      { n: "02", title: "Submit Docs",  desc: "Upload skill certs, IC, work photos",       time: "10 min" },
      { n: "03", title: "Review",       desc: "V'GO verifies ID and skills, 1-2 business days", time: "1-2 days" },
      { n: "04", title: "Start Taking", desc: "Receive nearby dispatch or grab jobs",     time: "Instant" },
      { n: "05", title: "Get Paid",     desc: "Customer accepts, auto-payout per cycle",  time: "Per cycle" },
    ],
    skills_t: "Service Categories",
    skills: [
      "Plumbing", "AC Repair", "Appliance Repair", "Locksmith",
      "Cleaning", "Renovation", "Moving", "Errands",
      "Massage", "Beauty", "Car Repair", "Pet Care",
    ],
    docs_t: "Required Documents",
    docs: [
      "IC (front & back)",
      "Skill certificates (if any)",
      "Bank account (for payouts)",
      "Personal photo + work photos",
      "Police clearance (some services)",
      "Health certificate (beauty / massage)",
    ],
    faq_t: "FAQ",
    faqs: [
      ["Can I join without certifications?", "Some categories don't require certs (moving, errands, basic cleaning). But high-skill services (plumbing, AC, medical) require relevant proof. Contact support for specifics."],
      ["What's the platform's cut?", "V'GO charges a platform service fee per order. Exact rate is disclosed before onboarding. Standard services are platform-priced; others are self-quoted. Fully transparent — no hidden fees."],
      ["When do I get paid?", "After customer acceptance, funds are auto-transferred per the agreed cycle. Refer to your onboarding agreement for specifics."],
      ["What if the customer doesn't pay?", "V'GO offers order escrow. All platform orders are prepaid into escrow and only released after acceptance. Customers cannot default directly."],
      ["Can I set my service area?", "Yes. You can set your service range and available time slots in the dashboard. Only jobs within range are dispatched to you."],
      ["Must I take jobs every day?", "No. You fully control your schedule and volume. Take more for more income, go offline to rest. No forced dispatch."],
      ["What if I get a complaint?", "Platform verifies the situation. If it's a service issue, handled per rules. If it's a misunderstanding, we help both sides communicate. All orders are archived."],
      ["Can I offer multiple services?", "Yes. You can offer multiple skills (e.g. plumbing + cleaning) as long as you pass the corresponding qualification checks."],
    ],
    cta_t: "Ready to Take Jobs?",
    cta_s: "Submit your application — V'GO team will contact you within 1-2 business days.",
    cta_btn: "Submit Application",
    cta_note: "Or WhatsApp: +60 11-7269 1788",
  },
  ms: {
    tag: "Pendaftaran Juruteknik",
    hero_t: "Ada Kemahiran? Dapat Kerja.",
    hero_s: "Pendaftaran kos sifar, hantaran berhampiran, bayaran ikut pesanan, atur masa sendiri. Platform untuk tukang mahir.",
    hero_cta: "Mohon Sertai",
    hero_faq: "Lihat FAQ →",
    benefits_t: "Mengapa Sertai V'GO",
    benefits: [
      { Icon: Zap,         title: "Hantaran Berhampiran", desc: "Padan ikut jarak & kemahiran — kerja datang kepada anda" },
      { Icon: ShieldCheck, title: "Jaminan Platform",     desc: "Dibayar selepas penerimaan, tiada takut gagal bayar" },
      { Icon: Clock,       title: "Jadual Sendiri",       desc: "Ambil kerja bila mahu, offline bila-bila masa" },
      { Icon: Wallet,      title: "Bayar Ikut Pesanan",   desc: "Direkod selepas siap, dibayar ikut kitaran" },
      { Icon: TrendingUp,  title: "Harga Adil",           desc: "Servis standard harga platform, lain quote sendiri" },
      { Icon: Award,       title: "Pertumbuhan Level",    desc: "Lebih kerja, penilaian baik, keutamaan lebih tinggi" },
    ],
    stats: [
      { n: "Jemputan", l: "Akses Beta" },
      { n: "KK",       l: "Bandar Pelancaran" },
      { n: "RM 0",     l: "Pendaftaran" },
      { n: "1-2 hari", l: "Masa Semakan" },
    ],
    earnings_t: "Rujukan Pendapatan",
    earnings_sub: "Julat rujukan sahaja. Pendapatan sebenar bergantung pada kemahiran, masa, dan jumlah kerja.",
    earnings: [
      { n: "3-8",       l: "Kerja harian", sub: "Bergantung kemahiran & ketersediaan" },
      { n: "RM 80-300", l: "Setiap kerja", sub: "Bergantung jenis servis" },
      { n: "RM 7K-50K", l: "Pendapatan kasar bulanan", sub: "Rujukan sahaja, bukan janji" },
    ],
    support_t: "Sokongan Platform",
    support: [
      { Icon: GraduationCap, title: "Latihan Kemahiran", desc: "Piawaian industri dan latihan servis" },
      { Icon: ShieldCheck,   title: "Eskrow Pesanan",   desc: "Pelanggan bayar dahulu, dilepas selepas siap" },
      { Icon: BarChart3,     title: "Dashboard Pendapatan", desc: "Kerja masa nyata, pendapatan, ulasan" },
      { Icon: Headphones,    title: "Pasukan Sokongan", desc: "Platform jadi orang tengah pertikaian" },
      { Icon: Award,         title: "Sistem Level",     desc: "Lebih kerja, penilaian baik, keutamaan tinggi" },
      { Icon: Heart,         title: "Insurans",         desc: "Perlindungan asas semasa kerja" },
    ],
    stories_t: "Kisah Tukang",
    stories_sub: "Daripada kelompok pertama tukang di Kota Kinabalu (contoh)",
    stories: [
      { name: "KK · Tukang Paip", tag: "Paip · 3 tahun", quote: "Dulu iklan di Facebook, kerja tak stabil. Sejak V'GO, kerja berhampiran auto-hantar — tak perlu cari pelanggan." },
      { name: "KK · Tukang AC",   tag: "Aircond · 5 tahun", quote: "Paling takut pelanggan lambat bayar. Eskrow platform ubah itu — auto-bayar selepas penerimaan, tak perlu kejar." },
      { name: "KK · Pembersih",   tag: "Cuci · 2 tahun", quote: "Sangat fleksibel — online bila mahu kerja, offline bila mahu rehat. Lebih baik daripada kerja tetap, pendapatan fleksibel." },
    ],
    flow_t: "Langkah Pendaftaran",
    steps: [
      { n: "01", title: "Daftar",      desc: "Telefon, kata laluan, sahkan identiti",     time: "5 minit" },
      { n: "02", title: "Hantar Dokumen", desc: "Muat naik sijil, IC, gambar kerja",       time: "10 minit" },
      { n: "03", title: "Semakan",     desc: "V'GO sahkan ID dan kemahiran, 1-2 hari",    time: "1-2 hari" },
      { n: "04", title: "Mula Ambil",  desc: "Terima hantaran atau rebut kerja",          time: "Segera" },
      { n: "05", title: "Dapat Bayaran", desc: "Pelanggan terima, auto-bayar ikut kitaran", time: "Per kitaran" },
    ],
    skills_t: "Kategori Servis",
    skills: [
      "Paip", "Baiki Aircond", "Baiki Alatan", "Kunci",
      "Pembersihan", "Renovasi", "Angkut", "Penghantaran",
      "Urutan", "Kecantikan", "Baiki Kereta", "Penjagaan Haiwan",
    ],
    docs_t: "Dokumen Diperlukan",
    docs: [
      "IC (hadapan & belakang)",
      "Sijil kemahiran (jika ada)",
      "Akaun bank (untuk bayaran)",
      "Gambar peribadi + gambar kerja",
      "Surat bersih polis (sebahagian servis)",
      "Sijil kesihatan (kecantikan / urutan)",
    ],
    faq_t: "Soalan Lazim",
    faqs: [
      ["Boleh sertai tanpa pensijilan?", "Sebahagian kategori tak perlu sijil (angkut, penghantaran, cuci asas). Tapi servis mahir tinggi (paip, aircond, perubatan) perlu bukti berkaitan. Hubungi sokongan untuk butiran."],
      ["Platform potong berapa?", "V'GO mengenakan fi perkhidmatan platform setiap pesanan. Kadar tepat dimaklumkan sebelum pendaftaran. Servis standard harga platform; lain quote sendiri. Telus sepenuhnya."],
      ["Bila dapat bayaran?", "Selepas penerimaan pelanggan, dana dipindahkan automatik ikut kitaran yang dipersetujui. Rujuk perjanjian pendaftaran."],
      ["Jika pelanggan tak bayar?", "V'GO menawarkan eskrow pesanan. Semua pesanan platform dibayar ke eskrow dan hanya dilepaskan selepas penerimaan. Pelanggan tidak boleh gagal bayar terus."],
      ["Boleh set kawasan servis?", "Boleh. Anda boleh tetapkan julat servis dan slot masa di dashboard. Hanya kerja dalam julat dihantar kepada anda."],
      ["Mesti terima kerja setiap hari?", "Tidak. Anda kawal sepenuhnya jadual dan jumlah. Terima lebih untuk pendapatan, offline untuk rehat. Tiada hantaran paksa."],
      ["Jika saya diadukan?", "Platform sahkan situasi. Jika isu servis, dikendalikan mengikut peraturan. Jika salah faham, kami bantu kedua-dua pihak berkomunikasi. Semua pesanan diarkibkan."],
      ["Boleh tawar pelbagai servis?", "Boleh. Anda boleh tawar pelbagai kemahiran (contoh paip + cuci) selagi lulus semakan kelayakan berkaitan."],
    ],
    cta_t: "Sedia Ambil Kerja?",
    cta_s: "Hantar permohonan — pasukan V'GO akan hubungi anda dalam 1-2 hari bekerja.",
    cta_btn: "Hantar Permohonan",
    cta_note: "Atau WhatsApp: +60 11-7269 1788",
  },
};

export default function TechnicianPage() {
  const { lang } = useLang();
  const c = C[lang] ?? C.zh;

  return (
    <main className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <section className="relative min-h-[70svh] flex items-center justify-center px-5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/shared/s02.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-gray-950" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center pt-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-semibold mb-6">
            <Wrench size={14} /> {c.tag}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
            <span className="text-white">{c.hero_t}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed">{c.hero_s}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-black shadow-[0_10px_40px_-6px_rgba(255,150,0,0.3)] hover:scale-[1.03] active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">
              {c.hero_cta} <ArrowRight size={18} />
            </a>
            <a href="#faq" className="text-xs text-white/60 hover:text-white transition">{c.hero_faq}</a>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-10">{c.benefits_t}</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <div className="text-2xl sm:text-3xl font-black text-[#D95000] leading-tight">{s.n}</div>
              <div className="text-xs text-white/60 mt-1.5">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-3">{c.earnings_t}</motion.h2>
        <p className="text-center text-xs text-white/40 mb-10">{c.earnings_sub}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          className="text-2xl sm:text-4xl font-black text-center mb-10">{c.skills_t}</motion.h2>
        <div className="flex flex-wrap justify-center gap-3">
          {c.skills.map((s, i) => (
            <motion.span key={s} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/15 text-sm font-semibold text-white/85">
              {s}
            </motion.span>
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
