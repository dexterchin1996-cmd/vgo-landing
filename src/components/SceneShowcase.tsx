"use client";
import { motion } from "motion/react";
import { AlertTriangle, Sparkles, Heart, Truck, ShoppingBag } from "lucide-react";
import { useLang } from "@/lib/i18n";

const C = {
  zh: {
    label: "真实场景",
    title: "这些时候，你会需要 VGO",
    scenes: [
      { tag: "紧急维修", title: "半夜水管爆了？", desc: "拍照下单，附近的认证师傅 30 分钟上门。24 小时接单，明码标价，不会坐地起价。", cta: "立即叫师傅", img: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&q=80", icon: "urgent" },
      { tag: "家庭清洁", title: "周末想休息，不想打扫？", desc: "专业保洁团队上门，自带工具和清洁剂。深度清洁、开荒保洁、日常维护，一次搞定。", cta: "预约保洁", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80", icon: "clean" },
      { tag: "按摩养生", title: "工作累了，想放松？", desc: "认证按摩师上门，中式推拿、泰式按摩、经络疏通。不用出门，在自己家就能享受。", cta: "预约按摩", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80", icon: "massage" },
      { tag: "跑腿代购", title: "没时间买东西？", desc: "同城跑腿、代买代送、加急配送。买菜、取快递、送文件，交给靠谱的人。", cta: "找人跑腿", img: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&q=80", icon: "errand" },
      { tag: "二手交易", title: "家里闲置，扔了可惜？", desc: "拍照上传，本地买卖当面交易。不用运费，不用担心被骗。", cta: "去商城看看", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80", icon: "market" },
    ],
  },
  en: {
    label: "Real Scenarios",
    title: "When You'll Need VGO",
    scenes: [
      { tag: "Urgent Repair", title: "Pipe burst at midnight?", desc: "Snap a photo, order in one tap. Certified pros nearby arrive in 30 minutes. 24/7 service, transparent pricing.", cta: "Get a Pro Now", img: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&q=80", icon: "urgent" },
      { tag: "Home Cleaning", title: "Weekend off, no cleaning?", desc: "Professional cleaning team comes to you, tools and supplies included. Deep clean, move-in clean, or regular upkeep.", cta: "Book Cleaning", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80", icon: "clean" },
      { tag: "Massage", title: "Tired after work?", desc: "Certified therapists come to you \u2014 Chinese tui na, Thai massage, meridian therapy. Relax in your own home.", cta: "Book Massage", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80", icon: "massage" },
      { tag: "Errands", title: "No time to shop?", desc: "Same-city errands, buy & deliver, express pickup. Groceries, parcels, documents \u2014 handed to someone reliable.", cta: "Send Errand", img: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&q=80", icon: "errand" },
      { tag: "Marketplace", title: "Unused stuff at home?", desc: "Snap, upload, trade locally. No shipping, no scam risk. Meet up and deal face-to-face.", cta: "Browse Market", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80", icon: "market" },
    ],
  },
  ms: {
    label: "Senario Sebenar",
    title: "Bila Anda Perlukan VGO",
    scenes: [
      { tag: "Pembaikan Segera", title: "Paip pecah tengah malam?", desc: "Ambil gambar, tempah satu tap. Tukang bertauliah berdekatan sampai 30 minit. 24 jam, harga telus.", cta: "Panggil Tukang", img: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&q=80", icon: "urgent" },
      { tag: "Pembersihan Rumah", title: "Hujung minggu nak rehat?", desc: "Pasukan cuci profesional datang ke rumah, bawa alat sendiri. Cuci mendalam atau penyelenggaraan biasa.", cta: "Tempah Pembersihan", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80", icon: "clean" },
      { tag: "Urutan", title: "Penat lepas kerja?", desc: "Tukang urut bertauliah datang \u2014 tui na Cina, urutan Thai, terapi meridian. Rehat di rumah sendiri.", cta: "Tempah Urutan", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80", icon: "massage" },
      { tag: "Penghantaran", title: "Tak ada masa nak beli?", desc: "Penghantaran same-city, beli & hantar, pickup ekspres. Barang dapur, parcel, dokumen \u2014 serah pada yang dipercayai.", cta: "Hantar Sekarang", img: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&q=80", icon: "errand" },
      { tag: "Pasar Terpakai", title: "Barang tak guna di rumah?", desc: "Ambil gambar, muat naik, jual beli tempatan. Tiada kos penghantaran, tiada risiko ditipu.", cta: "Layari Pasar", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80", icon: "market" },
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
    <section className="relative bg-gray-50 py-20 sm:py-28 px-5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[var(--vgo)]/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-[var(--vgo)]/8 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[var(--vgo)] font-bold text-sm tracking-widest uppercase mb-3">{c.label}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            {c.title}
          </h2>
        </motion.div>

        <div className="space-y-16 sm:space-y-20">
          {c.scenes.map((s, i) => {
            const Icon = ICONS[s.icon];
            const reverse = i % 2 === 1;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`grid md:grid-cols-2 gap-6 sm:gap-10 items-center ${reverse ? "md:[direction:rtl]" : ""}`}
              >
                <div className={`relative ${reverse ? "md:[direction:ltr]" : ""}`}>
                  <div className="relative overflow-hidden rounded-[28px] shadow-2xl shadow-gray-300/50 group">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-64 sm:h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-bold text-gray-900 shadow-lg">
                      <Icon size={13} strokeWidth={2.5} className="text-[var(--vgo)]" />
                      {s.tag}
                    </div>
                  </div>
                </div>

                <div className={`${reverse ? "md:[direction:ltr]" : ""}`}>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
                    {s.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed mb-7 max-w-lg">
                    {s.desc}
                  </p>
                  <a
                    href="#download"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[var(--vgo)] text-white font-bold text-sm shadow-lg shadow-orange-500/30 hover:brightness-110 hover:scale-105 active:scale-95 transition-all"
                  >
                    {s.cta}
                    <span>→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
