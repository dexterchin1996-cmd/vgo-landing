"use client";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight, User, Store, Wrench, ShieldAlert, LucideIcon,
  ClipboardList, Sparkles, MapPin, Wallet,
  FileText, LayoutGrid, Bell,
  UserCheck, Zap, Home,
  XCircle, CheckCircle2,
} from "lucide-react";
import { useLang } from "@/lib/i18n";

type Role = "customer" | "merchant" | "technician";

const IMG = {
  pain_c: [
    "/how-it-works/p-c1.jpg",
    "/how-it-works/p-c2.jpg",
    "/how-it-works/p-c3.jpg",
  ],
  solve_c: [
    "/how-it-works/hero-c.jpg",
    "/how-it-works/hero-m.jpg",
    "/how-it-works/s-c3.jpg",
  ],
  before_c: "/how-it-works/b-c.jpg",
  after_c:  "/how-it-works/hero-t.jpg",
  pain_m: [
    "/how-it-works/p-m1.jpg",
    "/how-it-works/p-m2.jpg",
    "/how-it-works/p-m3.jpg",
  ],
  solve_m: [
    "/how-it-works/hero-m.jpg",
    "/how-it-works/s-m2.jpg",
    "/how-it-works/s-m3.jpg",
  ],
  before_m: "/how-it-works/b-m.jpg",
  after_m:  "/how-it-works/hero-m.jpg",
  pain_t: [
    "/how-it-works/p-t1.jpg",
    "/how-it-works/p-m2.jpg",
    "/how-it-works/p-t3.jpg",
  ],
  solve_t: [
    "/how-it-works/hero-t.jpg",
    "/how-it-works/hero-c.jpg",
    "/how-it-works/hero-m.jpg",
  ],
  before_t: "/how-it-works/b-t.jpg",
  after_t:  "/how-it-works/hero-t.jpg",
};

const L = {
  zh: {
    label: "操作指南", reviews_title: "用户怎么说", scroll: "向下滑动", cta: "立即注册", other: "查看其他角色指南",
    pain_title: "你是不是也遇到过", solve_title: "VGO 怎么帮你解决",
    flow_title: "4 步搞定", before_t: "没有 VGO 时", after_t: "有 VGO 后",
    trust_title: "值得信赖", disclaimer: "本页为流程概览，不构成合同要约。手续费、结算、质保等具体条款，以您签署的《VGO 协议》为准。",
    roles: {
      customer: {
        tag: "客户指南", title: "家里有事，30 秒找到师傅",
        sub: "认证师傅上门 · 报价透明 · 平台质保",
        pains: [["找不到靠谱师傅","熟人介绍靠运气，网上找怕遇坑"],["报价不清楚","上门才报价，说多少是多少"],["出问题没人管","服务不满意，投诉无门"]],
        solves: [["认证师傅","实名认证 + 证件审核，可查可追溯"],["下单前看清价","标准服务平台定价，其他服务师傅公开报价"],["质保兜底","平台介入，售后有保障"]],
        steps: [["提交需求","选服务、时间、地址，即时查看预估报价"],["智能匹配","系统推荐附近认证师傅，可查看评分和报价"],["上门服务","认证师傅按时到达，服务前确认最终价格"],["付款评价","App 内安全支付，完成后评价打分"]],
        before: ["靠熟人介绍","等电话等回复","上门才报价","出问题没人管"],
        after: ["30 秒找到人","就近自动匹配","下单前看清价","平台质保兜底"],
        trust: [["4.9","用户评分"],["12K+","服务家庭"],["30+","服务类目"],["100%","平台质保"]],
      },
      merchant: {
        tag: "商家指南", title: "让全马客户，找到你的店",
        sub: "平台导流 · 透明手续费 · 免费店铺页",
        pains: [["没客流等客上门","守店等客，生意越做越难"],["手续费重利润薄","平台抽成多，到手工钱少"],["不懂线上运营","想触网，不知从哪下手"]],
        solves: [["平台导流","12K+ 家庭用户，订单主动到家"],["透明手续费","无隐藏收费，合作清清楚楚"],["免费店铺页","一键上架服务，无需技术"]],
        steps: [["申请入驻","提交资料，免费创建店铺页"],["上架服务","配置服务和价格，平台首页推荐曝光"],["接收订单","客户下单，App 即时通知"],["结算售后","平台自动结算入账，协助处理售后"]],
        before: ["守店等客上门","抽成多到手的少","想触网不懂技术","没有线上曝光"],
        after: ["订单主动到家","手续费透明清晰","零技术一键上架","平台首页推荐"],
        trust: [["12K+","活跃用户"],["0 元","入驻费用"],["免费","店铺页面"],["自动","结算入账"]],
      },
      technician: {
        tag: "师傅指南", title: "有手艺，就有单",
        sub: "智能派单 · 平台担保 · 自动打款",
        pains: [["靠熟人没稳定单","等介绍、等回头客，收入不稳"],["做完怕收不到钱","客户拖款、跑单，白干一场"],["客户压价","比价、杀价，辛苦钱被砍"]],
        solves: [["智能派单","就近自动派单 + 抢单池，单不断"],["平台担保","完工确认，平台自动打款"],["报价更公平","标准服务平台定价，其他服务自主报价"]],
        steps: [["注册认证","提交技能和证件，平台审核认证"],["智能接单","就近派单或抢单，单源持续稳定"],["上门服务","按时到达，平台担保交易"],["自动打款","完工确认，平台自动打款入账"]],
        before: ["靠熟人接单","客户拖款跑单","比价杀价压低","没有稳定收入"],
        after: ["系统就近派单","平台担保打款","平台标准定价","单源持续稳定"],
        trust: [["4.9","用户评分"],["12K+","服务家庭"],["100%","平台担保"],["24h","结算周期"]],
      },
    },
  },
  en: {
    label: "How It Works", reviews_title: "What users say", scroll: "Scroll to explore", cta: "Sign Up Now", other: "View other role guides",
    pain_title: "Sound familiar?", solve_title: "How VGO solves it",
    flow_title: "4 Simple Steps", before_t: "Without VGO", after_t: "With VGO",
    trust_title: "Trusted by Thousands", disclaimer: "This page is a process overview and does not constitute a contractual offer. Fees, settlement and warranty terms are subject to the VGO Agreement you sign.",
    roles: {
      customer: {
        tag: "Customer Guide", title: "Need help? Find a technician in 30s",
        sub: "Certified technicians · Transparent pricing · Platform warranty",
        pains: [["Hard to find reliable help","Referrals are risky, online is a gamble"],["Unclear pricing","Quoted only on site, no control"],["No after-sales support","Complaints go nowhere"]],
        solves: [["Certified technicians","ID verified + credential checked"],["See price before you book","Standard services platform-priced, others quoted publicly"],["Platform warranty","We step in if issues arise"]],
        steps: [["Post Request","Pick service, time, address — see upfront quote"],["Smart Match","See nearby certified technicians with ratings & prices"],["On-Site Service","Pro arrives on time, confirm final price first"],["Pay & Rate","Secure in-app payment, then rate"]],
        before: ["Ask friends for leads","Wait for callbacks","Quoted on site only","No one to complain to"],
        after: ["Find help in 30s","Auto-matched nearby","See price upfront","Platform warranty"],
        trust: [["4.9","User rating"],["12K+","Families served"],["30+","Service categories"],["100%","Platform warranty"]],
      },
      merchant: {
        tag: "Merchant Guide", title: "Get found by customers nationwide",
        sub: "Platform traffic · Transparent fees · Free store page",
        pains: [["No foot traffic","Waiting for walk-ins, sales falling"],["High fees, thin margin","Commissions eat your earnings"],["No idea how to go online","Want digital but lack tech"]],
        solves: [["Platform traffic","12K+ families, orders come to you"],["Transparent fees","No hidden charges, clear terms"],["Free store page","One-click listing, zero tech"]],
        steps: [["Apply","Submit info, get a free store page"],["List Services","Configure services & prices, featured on homepage"],["Receive Orders","Get instant in-app notifications"],["Settle & Support","Auto settlement, plus after-sales support"]],
        before: ["Wait for walk-ins","High commissions","No tech skills","Zero online exposure"],
        after: ["Orders come to you","Transparent fees","One-click listing","Featured on platform"],
        trust: [["12K+","Active users"],["Free","Onboarding"],["Free","Store page"],["Auto","Settlement"]],
      },
      technician: {
        tag: "Technician Guide", title: "Have skills? Get jobs",
        sub: "Smart dispatch · Platform guarantee · Auto payout",
        pains: [["No steady jobs","Reliant on referrals, unstable income"],["Fear of non-payment","Clients delay or skip, wasted work"],["Undercut by clients","Price haggling kills your margin"]],
        solves: [["Smart dispatch","Nearby auto-dispatch + grab pool"],["Platform guarantee","Auto payout upon completion"],["Fairer pricing","Platform-priced standard services, quote your own for others"]],
        steps: [["Register & Verify","Submit skills & docs, get verified"],["Take Jobs","Nearby dispatch or grab, steady jobs"],["On-Site Service","Arrive on time, platform-secured transaction"],["Auto Payout","Complete job, auto payout to your account"]],
        before: ["Rely on referrals","Fear of non-payment","Price haggling","Unstable income"],
        after: ["Auto dispatch nearby","Guaranteed payout","Fair platform pricing","Steady jobs"],
        trust: [["4.9","User rating"],["12K+","Families served"],["100%","Platform guarantee"],["24h","Payout cycle"]],
      },
    },
  },
  ms: {
    label: "Panduan", reviews_title: "Kata pengguna", scroll: "Tatal ke bawah", cta: "Daftar Sekarang", other: "Lihat panduan peranan lain",
    pain_title: "Pernah alami?", solve_title: "Cara VGO selesaikan",
    flow_title: "4 Langkah Mudah", before_t: "Tanpa VGO", after_t: "Dengan VGO",
    trust_title: "Dipercayai Ramai", disclaimer: "Halaman ini adalah gambaran proses dan bukan tawaran kontrak. Terma caj, penyelesaian dan jaminan tertakluk kepada Perjanjian VGO yang anda tandatangani.",
    roles: {
      customer: {
        tag: "Panduan Pelanggan", title: "Ada masalah? Cari juruteknik dalam 30s",
        sub: "Juruteknik bertauliah · Harga telus · Jaminan platform",
        pains: [["Sukar cari tukang dipercayai","Rujukan kawan berisiko, dalam talian pun takut"],["Harga tak jelas","Hanya quote di lokasi, tak boleh kawal"],["Tiada sokongan selepas jualan","Aduan tak sampai mana"]],
        solves: [["Juruteknik bertauliah","Pengesahan ID + dokumen"],["Lihat harga sebelum tempah","Servis standard harga platform, lain quote terbuka"],["Jaminan platform","Kami masuk campur jika ada isu"]],
        steps: [["Hantar Permintaan","Pilih servis, masa, alamat — lihat sebut harga awal"],["Padanan Pintar","Lihat juruteknik berhampiran dengan penilaian & harga"],["Servis di Lokasi","Pakar tiba tepat masa, sahkan harga dahulu"],["Bayar & Ulas","Bayar selamat dalam app, kemudian beri ulasan"]],
        before: ["Tanya kawan cari orang","Tunggu panggilan balik","Hanya quote di lokasi","Tiada tempat aduan"],
        after: ["Cari bantuan dalam 30s","Auto-padan berhampiran","Lihat harga di depan","Jaminan platform"],
        trust: [["4.9","Penilaian"],["12K+","Keluarga"],["30+","Kategori servis"],["100%","Jaminan platform"]],
      },
      merchant: {
        tag: "Panduan Peniaga", title: "Ditemui pelanggan seluruh negara",
        sub: "Trafik platform · Caj telus · Halaman kedai percuma",
        pains: [["Tiada trafik","Tunggu pelanggan masuk, jualan merosot"],["Caj tinggi, margin tipis","Komisen makan pendapatan"],["Tak tahu cara ke dalam talian","Mahu digital tapi tak ada teknologi"]],
        solves: [["Trafik platform","12K+ keluarga, pesanan datang sendiri"],["Caj telus","Tiada caj tersembunyi, terma jelas"],["Halaman kedai percuma","Senarai sekali klik, sifar teknologi"]],
        steps: [["Mohon Sertai","Hantar maklumat, dapat halaman kedai percuma"],["Senarai Servis","Tetapkan servis & harga, dipaparkan di utama"],["Terima Pesanan","Notifikasi segera dalam app"],["Selesai & Sokongan","Auto penyelesaian, sokongan selepas jualan"]],
        before: ["Tunggu pelanggan masuk","Komisen tinggi","Tiada kemahiran teknologi","Sifar pendedahan dalam talian"],
        after: ["Pesanan datang sendiri","Caj telus","Senarai sekali klik","Ditampilkan di platform"],
        trust: [["12K+","Pengguna aktif"],["Percuma","Pendaftaran"],["Percuma","Halaman kedai"],["Auto","Penyelesaian"]],
      },
      technician: {
        tag: "Panduan Juruteknik", title: "Ada kemahiran? Dapat kerja",
        sub: "Hantaran pintar · Jaminan platform · Bayaran auto",
        pains: [["Tiada kerja tetap","Bergantung rujukan, pendapatan tak stabil"],["Takut tak dibayar","Pelanggan lambat atau lari, kerja sia-sia"],["Ditekan harga","Tawar-menawar makan margin"]],
        solves: [["Hantaran pintar","Auto-hantar berhampiran + rebut pesanan"],["Jaminan platform","Auto bayar selepas siap"],["Harga lebih adil","Servis standard harga platform, lain quote sendiri"]],
        steps: [["Daftar & Sahkan","Hantar kemahiran & dokumen, dapat pengesahan"],["Ambil Kerja","Hantar berhampiran atau rebut, kerja stabil"],["Servis di Lokasi","Tiba tepat masa, transaksi dijamin platform"],["Bayaran Auto","Siap kerja, auto bayar ke akaun"]],
        before: ["Bergantung rujukan","Takut tak dibayar","Tawar-menawar harga","Pendapatan tak stabil"],
        after: ["Auto-hantar berhampiran","Bayaran dijamin","Harga platform adil","Kerja stabil"],
        trust: [["4.9","Penilaian"],["12K+","Keluarga"],["100%","Jaminan platform"],["24h","Kitaran bayaran"]],
      },
    },
  },
};

const STEP_ICONS: Record<Role, LucideIcon[]> = {
  customer:   [ClipboardList, Sparkles, MapPin, Wallet],
  merchant:   [FileText, LayoutGrid, Bell, Wallet],
  technician: [UserCheck, Zap, Home, Wallet],
};

const HERO_IMAGES: Record<Role, string> = {
  customer:   "/how-it-works/hero-c.jpg",
  merchant:   "/how-it-works/hero-m.jpg",
  technician: "/how-it-works/hero-t.jpg",
};

const ROLE_IMGS: Record<Role, { pain: string[]; solve: string[]; before: string; after: string }> = {
  customer:   { pain: IMG.pain_c,   solve: IMG.solve_c, before: IMG.before_c, after: IMG.after_c },
  merchant:   { pain: IMG.pain_m,   solve: IMG.solve_m, before: IMG.before_m, after: IMG.after_m },
  technician: { pain: IMG.pain_t,   solve: IMG.solve_t, before: IMG.before_t, after: IMG.after_t },
};

const REVIEWS: Record<"zh"|"en"|"ms", Array<{name: string; service: string; quote: string}>> = {
  zh: [
    { name: "陈女士", service: "空调清洗", quote: "师傅很专业，提前到了 10 分钟，清洗得很干净，价格也比外面便宜。" },
    { name: "李先生", service: "水管维修", quote: "晚上水管爆了，30 分钟就找到师傅上门，修好了才付款，很放心。" },
    { name: "王女士", service: "家庭保洁", quote: "阿姨打扫得很仔细，平台有保障，比找熟人放心多了。" },
  ],
  en: [
    { name: "Ms. Tan", service: "Air-Cond Servicing", quote: "Professional technician, arrived 10 minutes early, price better than outside." },
    { name: "Mr. Lee", service: "Plumbing Repair", quote: "Pipe burst at night, found a technician in 30 minutes. Paid only after it was fixed." },
    { name: "Ms. Wong", service: "Home Cleaning", quote: "Very thorough cleaning. The platform warranty gives real peace of mind." },
  ],
  ms: [
    { name: "Cik Tan", service: "Servis Penghawa Dingin", quote: "Juruteknik profesional, tiba 10 minit awal, harga lebih baik." },
    { name: "Encik Lee", service: "Baiki Paip", quote: "Paip pecah waktu malam, jumpa juruteknik dalam 30 minit. Bayar selepas siap." },
    { name: "Cik Wong", service: "Pembersihan Rumah", quote: "Pembersih sangat teliti, jaminan platform beri ketenangan." },
  ],
};

const OTHER: Record<Role, Role[]> = {
  customer:   ["merchant","technician"],
  merchant:   ["customer","technician"],
  technician: ["customer","merchant"],
};

const META: Record<Role, { Icon: LucideIcon; href: string }> = {
  customer:   { Icon: User,   href: "/how-it-works/customer" },
  merchant:   { Icon: Store,  href: "/how-it-works/merchant" },
  technician: { Icon: Wrench, href: "/how-it-works/technician" },
};

export default function HowItWorksPage({ role }: { role: Role }) {
  const { lang } = useLang();
  const t = L[lang];
  const r = t.roles[role];
  const Icons = STEP_ICONS[role];
  const IM = ROLE_IMGS[role];
  return (
    <main className="relative min-h-screen bg-gray-950 text-white noise overflow-hidden">
      <section className="relative min-h-[70svh] flex items-center justify-center px-5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center kenburns" style={{ backgroundImage: `url('${HERO_IMAGES[role]}')` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-gray-950" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center pt-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-semibold mb-6">{t.label} · {r.tag}</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">{r.title}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="mt-5 text-sm sm:text-base text-white/70 max-w-xl mx-auto">{r.sub}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-8">
            <a href="#download" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-black shadow-[0_10px_40px_-6px_rgba(255,150,0,0.65)] hover:scale-[1.03] active:scale-95 transition-all">{t.cta}</a>
          </motion.div>
          <p className="mt-10 text-xs text-white/40">{t.scroll} ↓</p>
        </div>
      </section>
      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <h2 className="text-2xl sm:text-4xl font-black text-center mb-10">{t.pain_title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {r.pains.map(([title, desc], i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-3xl overflow-hidden bg-white/3 border border-red-500/20">
              <div className="relative h-44 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IM.pain[i]}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-red-950/60 to-red-900/30" />
                <XCircle size={28} className="absolute top-4 right-4 text-red-400" />
              </div>
              <div className="p-6">
                <div className="font-black text-base mb-2">{title}</div>
                <div className="text-xs text-white/50 leading-relaxed">{desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <h2 className="text-2xl sm:text-4xl font-black text-center mb-10">{t.solve_title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {r.solves.map(([title, desc], i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFB800]/10 to-[#FF6600]/5 border border-[#FFB800]/25">
              <div className="relative h-44 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IM.solve[i]}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-amber-950/50 to-transparent" />
                <CheckCircle2 size={28} className="absolute top-4 right-4 text-[#FFB800]" />
              </div>
              <div className="p-6">
                <div className="font-black text-base mb-2">{title}</div>
                <div className="text-xs text-white/55 leading-relaxed">{desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="rounded-3xl overflow-hidden bg-white/3 border border-white/10">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center grayscale" style={{ backgroundImage: `url('${IM.before}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-red-950/40" />
              <div className="absolute bottom-4 left-5 text-xs font-black text-red-400 uppercase tracking-widest">{t.before_t}</div>
            </div>
            <ul className="p-6 space-y-3">
              {r.before.map((x) => (
                <li key={x} className="flex items-start gap-3 text-sm text-white/60">
                  <XCircle size={16} className="text-red-400/70 shrink-0 mt-0.5" />{x}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFB800]/10 to-[#FF6600]/5 border border-[#FFB800]/30">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IM.after}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-amber-950/50 to-transparent" />
              <div className="absolute bottom-4 left-5 text-xs font-black text-[#FFB800] uppercase tracking-widest">{t.after_t}</div>
            </div>
            <ul className="p-6 space-y-3">
              {r.after.map((x) => (
                <li key={x} className="flex items-start gap-3 text-sm text-white/85">
                  <CheckCircle2 size={16} className="text-[#FFB800] shrink-0 mt-0.5" />{x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <h2 className="text-2xl sm:text-4xl font-black text-center mb-10">{t.flow_title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {r.steps.map(([title, desc], i) => {
            const Icon = Icons[i];
            return (
              <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 text-center">
                <div className="text-4xl font-black bg-gradient-to-b from-[#FFD24A] to-[#FF8A00] bg-clip-text text-transparent leading-none mb-4">0{i + 1}</div>
                <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center shadow-lg shadow-orange-500/30 mb-4">
                  <Icon size={22} className="text-white" />
                </div>
                <div className="font-black text-sm mb-1.5">{title}</div>
                <div className="text-[11px] text-white/50 leading-relaxed">{desc}</div>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <a href="#download" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-black shadow-[0_8px_30px_-6px_rgba(255,150,0,0.6)] hover:scale-[1.02] active:scale-95 transition-all">{t.cta}</a>
        </div>
      </section>
      <section className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-16">
        <h2 className="text-2xl sm:text-4xl font-black text-center mb-10">{t.trust_title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {r.trust.map(([num, label], i) => (
            <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-2xl sm:text-4xl font-black bg-gradient-to-b from-[#FFD24A] to-[#FF8A00] bg-clip-text text-transparent leading-tight">{num}</div>
              <div className="text-[11px] sm:text-xs text-white/60 mt-1.5">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-16">
        <h2 className="text-2xl sm:text-4xl font-black text-center mb-10">{t.reviews_title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {REVIEWS[lang].map((rv, i) => (
            <motion.div key={rv.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="flex items-center gap-1 mb-4 text-[#FFB800]">
                {"★★★★★".split("").map((_, j) => <span key={j}>★</span>)}
              </div>
              <p className="text-sm text-white/75 leading-relaxed mb-5">"{rv.quote}"</p>
              <div className="pt-4 border-t border-white/10">
                <div className="text-sm font-black">{rv.name}</div>
                <div className="text-xs text-white/40 mt-0.5">{rv.service}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-16">
        <div className="text-center mb-8">
          <a href="#download" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-black shadow-[0_10px_40px_-6px_rgba(255,150,0,0.65)] hover:scale-[1.03] active:scale-95 transition-all">{t.cta}</a>
        </div>
        <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex gap-3 mb-12">
          <ShieldAlert size={20} className="text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-100/80 leading-relaxed">{t.disclaimer}</p>
        </div>
        <p className="text-xs text-white/40 uppercase tracking-widest mb-4 text-center">{t.other}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {OTHER[role].map((o) => {
            const M = META[o];
            const ot = t.roles[o];
            return (
              <Link key={o} href={M.href} className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFB800]/40 hover:bg-white/8 transition-all flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center shrink-0">
                  <M.Icon size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-black">{ot.tag}</div>
                  <div className="text-xs text-white/50 mt-0.5">{ot.sub}</div>
                </div>
                <ArrowRight size={16} className="text-white/40 group-hover:text-[#FFB800] group-hover:translate-x-1 transition-all" />
              </Link>
            );
          })}
        </div>
      </section>
      <div className="relative z-10 h-20" />
    </main>
  );
}
