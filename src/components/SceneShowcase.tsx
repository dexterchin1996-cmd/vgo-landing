"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { AlertTriangle, Sparkles, Heart, Truck, ShoppingBag, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

const C = {
  zh: {
    label: "真实场景",
    title: "这些时候，你需要 VGO",
    scenes: [
      { tag: "紧急维修", title: "半夜水管爆了？", desc: "拍照下单，附近认证师傅 30 分钟上门。24 小时接单，明码标价，不会坐地起价。", cta: "立即叫师傅", img: "/scenes/burst.jpg", icon: "urgent" },
      { tag: "家庭清洁", title: "周末想休息，不想打扫？", desc: "专业保洁团队上门，自带工具和清洁剂。深度清洁、开荒保洁、日常维护，一次搞定。", cta: "预约保洁", img: "/shared/s01.jpg", icon: "clean" },
      { tag: "按摩养生", title: "工作累了，想放松？", desc: "认证按摩师上门，中式推拿、泰式按摩、经络疏通。不用出门，在自己家就能享受。", cta: "预约按摩", img: "/shared/s09.jpg", icon: "massage" },
      { tag: "跑腿代购", title: "没时间买东西？", desc: "同城跑腿、代买代送、加急配送。买菜、取快递、送文件，交给靠谱的人。", cta: "找人跑腿", img: "/scenes/move.jpg", icon: "errand" },
      { tag: "二手交易", title: "家里闲置，扔了可惜？", desc: "拍照上传，本地买卖当面交易。不用运费，不用担心被骗。", cta: "去商城看看", img: "/shared/s06.jpg", icon: "market" },
    ],
  },
  en: {
    label: "Real Scenarios",
    title: "When You'll Need VGO",
    scenes: [
      { tag: "Urgent Repair", title: "Pipe burst at midnight?", desc: "Snap a photo, order in one tap. Certified pros nearby arrive in 30 minutes. 24/7 service, transparent pricing.", cta: "Get a Pro Now", img: "/scenes/burst.jpg", icon: "urgent" },
      { tag: "Home Cleaning", title: "Weekend off, no cleaning?", desc: "Professional cleaning team comes to you, tools and supplies included. Deep clean, move-in clean, or regular upkeep.", cta: "Book Cleaning", img: "/shared/s01.jpg", icon: "clean" },
      { tag: "Massage", title: "Tired after work?", desc: "Certified therapists come to you — Chinese tui na, Thai massage, meridian therapy. Relax in your own home.", cta: "Book Massage", img: "/shared/s09.jpg", icon: "massage" },
      { tag: "Errands", title: "No time to shop?", desc: "Same-city errands, buy & deliver, express pickup. Groceries, parcels, documents — handed to someone reliable.", cta: "Send Errand", img: "/scenes/move.jpg", icon: "errand" },
      { tag: "Marketplace", title: "Unused stuff at home?", desc: "Snap, upload, trade locally. No shipping, no scam risk. Meet up and deal face-to-face.", cta: "Browse Market", img: "/shared/s06.jpg", icon: "market" },
    ],
  },
  ms: {
    label: "Senario Sebenar",
    title: "Bila Anda Perlukan VGO",
    scenes: [
      { tag: "Pembaikan Segera", title: "Paip pecah tengah malam?", desc: "Ambil gambar, tempah satu tap. Tukang bertauliah berdekatan sampai 30 minit. 24 jam, harga telus.", cta: "Panggil Tukang", img: "/scenes/burst.jpg", icon: "urgent" },
      { tag: "Pembersihan Rumah", title: "Hujung minggu nak rehat?", desc: "Pasukan cuci profesional datang ke rumah, bawa alat sendiri. Cuci mendalam atau penyelenggaraan biasa.", cta: "Tempah Pembersihan", img: "/shared/s01.jpg", icon: "clean" },
      { tag: "Urutan", title: "Penat lepas kerja?", desc: "Tukang urut bertauliah datang — tui na Cina, urutan Thai, terapi meridian. Rehat di rumah sendiri.", cta: "Tempah Urutan", img: "/shared/s09.jpg", icon: "massage" },
      { tag: "Penghantaran", title: "Tak ada masa nak beli?", desc: "Penghantaran same-city, beli & hantar, pickup ekspres. Barang dapur, parcel, dokumen — serah pada yang dipercayai.", cta: "Hantar Sekarang", img: "/scenes/move.jpg", icon: "errand" },
      { tag: "Pasar Terpakai", title: "Barang tak guna di rumah?", desc: "Ambil gambar, muat naik, jual beli tempatan. Tiada kos penghantaran, tiada risiko ditipu.", cta: "Layari Pasar", img: "/shared/s06.jpg", icon: "market" },
    ],
  },
} as const;

const ICONS: Record<string, any> = {
  urgent: AlertTriangle,
  clean: Sparkles,
  massage: Heart,
  errand: Truck,
  market: ShoppingBag,
};

export default function SceneShowcase() {
  const { lang } = useLang();
  const c = C[lang] ?? C.zh;

  return (
    <section className="relative bg-gray-950 text-white overflow-hidden">
      {/* 顶部标题区 */}
      <div className="relative py-20 sm:py-28 px-5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[var(--vgo)]/12 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-[var(--vgo)]/12 rounded-full blur-[140px]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative text-center max-w-3xl mx-auto"
        >
          <p className="text-[var(--vgo)] font-bold text-xs tracking-[0.3em] uppercase mb-4">{c.label}</p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
            {c.title}
          </h2>
        </motion.div>
      </div>

      {/* 场景叙事 - 全宽沉浸式 */}
      {c.scenes.map((s, i) => {
        const Icon = ICONS[s.icon];
        const reverse = i % 2 === 1;
        return (
          <motion.div
            key={s.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className={`grid md:grid-cols-12 items-stretch min-h-[70vh] ${reverse ? "md:[direction:rtl]" : ""}`}>
              {/* 图片：占 7 栏，全高 */}
              <div className={`relative md:col-span-7 overflow-hidden ${reverse ? "md:[direction:ltr]" : ""}`}>
                <motion.div
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.6, ease: [0.22, 0.7, 0.3, 1] }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${s.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-gray-950/60" />
                {reverse && <div className="absolute inset-0 bg-gradient-to-l from-gray-950 via-gray-950/30 to-transparent hidden md:block" />}

                {/* 序号 - 大数字 */}
                <div className="absolute top-6 left-6 md:top-8 md:left-10 z-10">
                  <div className="text-6xl md:text-8xl font-black leading-none text-white/15 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* 标签 */}
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/12 backdrop-blur-xl border border-white/20 text-xs font-bold text-white">
                  <Icon size={14} strokeWidth={2.6} className="text-[var(--vgo)]" />
                  {s.tag}
                </div>
              </div>

              {/* 文字：占 5 栏，垂直居中 */}
              <div className={`relative md:col-span-5 flex items-center px-6 sm:px-10 py-14 md:py-0 bg-gray-950 ${reverse ? "md:[direction:ltr]" : ""}`}>
                <div className="max-w-md">
                  <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight mb-5"
                  >
                    {s.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="text-base text-white/60 leading-relaxed mb-8"
                  >
                    {s.desc}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                  >
                    <Link
                      href="/how-it-works/customer"
                      className="group inline-flex items-center gap-2 text-base font-bold text-white border-b-2 border-[var(--vgo)] pb-1 hover:gap-3 transition-all"
                    >
                      {s.cta}
                      <ArrowRight size={18} className="text-[var(--vgo)]" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* 分隔线 */}
            {i < c.scenes.length - 1 && (
              <div className="hidden md:block h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            )}
          </motion.div>
        );
      })}

      {/* 底部留白 */}
      <div className="h-16" />
    </section>
  );
}
