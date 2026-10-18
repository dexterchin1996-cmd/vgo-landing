"use client";

import { motion } from "motion/react";
import { Target, Heart, ShieldCheck, Sparkles, Users, MapPin, TrendingUp, Award, Clock, Store, Wrench, Home } from "lucide-react";
import { useLang } from "@/lib/i18n";
import PageShell from "@/components/PageShell";

const C = {
  zh: {
    label: "关于我们", title: "我们是谁",
    intro: "V'GO（V Go On）是马来西亚上门服务平台。我们把有需要的家庭和认证师傅连在一起，让\"找服务\"这件事变得简单、透明、可靠。",
    mission_t: "我们的使命",
    mission: "让每个家庭都能轻松找到靠谱的师傅，让每个有手艺的人都能凭本事吃饭。",
    story_t: "我们的故事",
    story: "V'GO 从沙巴起步，看向整个马来西亚。我们看见身边太多人：想修水管找不到人、价格被坑、约了师傅不来；另一头，手艺人等熟人介绍、生意不稳定。V'GO 要做的，就是把这两头接通——用最简单的手机操作，让服务上门，让手艺有舞台。",
    values_t: "我们的价值观",
    values: [
      { Icon: ShieldCheck, t: "认证优先", d: "每个师傅都经过身份验证和技能审核，你不用担心来的是谁。" },
      { Icon: Sparkles,    t: "价格透明", d: "下单前看得到价格区间，师傅上门确认后才开工，没有隐藏费用。" },
      { Icon: Clock,       t: "准时上门", d: "约定时间准时到，迟到提前告知，全程可追踪。" },
      { Icon: Heart,       t: "用户第一", d: "每一次服务后的评价，都会影响师傅的派单优先级。" },
      { Icon: Award,       t: "本地团队", d: "马来西亚团队，懂本地需求，客服说中文/英文/马来文。" },
      { Icon: TrendingUp,  t: "共同成长", d: "师傅接单越多、评价越好，越优先派单，收入越高。" },
    ],
    stats_t: "我们的目标",
    stats: [
      { n: "6 大", l: "服务类目" },
      { n: "3 语", l: "中英马支持" },
      { n: "亚庇", l: "首发城市" },
      { n: "全马", l: "覆盖目标" },
    ],
    timeline_t: "我们的历程",
    timeline: [
      { d: "2024", t: "想法萌生", ds: "在沙巴看到找师傅难、手艺人生意不稳的问题" },
      { d: "2025", t: "平台研发", ds: "组建团队，开发 V'GO 平台核心功能" },
      { d: "2026 Q1", t: "亚庇首发", ds: "首批认证师傅和商家入驻，平台试运营" },
      { d: "2026 Q2", t: "全马扩展", ds: "逐步扩展至沙巴其他城市及西马主要城市" },
    ],
    roles_t: "平台服务三类人群",
    roles: [
      { Icon: Home,   t: "家庭客户", d: "找维修、清洁、按摩、跑腿，一站搞定" },
      { Icon: Store,  t: "本地商家", d: "把生意搬到线上，触达附近客户" },
      { Icon: Wrench, t: "手艺人",   d: "就近接单，按单结算，自己排时间" },
    ],
    region_t: "服务范围",
    region: "目前覆盖马来西亚沙巴州亚庇及周边地区，持续扩展中。沙巴是我们起点，全马是我们的目标。",
    contact_t: "想了解更多？",
    contact_d: "无论你是客户、商家、师傅还是合作伙伴，欢迎联系我们。",
  },
  en: {
    label: "About Us", title: "Who We Are",
    intro: "V'GO (V Go On) is a Malaysia home-service platform. We connect families in need with certified pros, making \"finding a service\" simple, transparent, and reliable.",
    mission_t: "Our Mission",
    mission: "Make it easy for every family to find reliable help — and for every skilled worker to earn a living through their craft.",
    story_t: "Our Story",
    story: "V'GO started in Sabah, with eyes on all of Malaysia. We saw too many people: unable to find a plumber, overcharged, ghosted after booking. And on the other side, skilled workers waiting on referrals with unstable income. V'GO connects these two — with a simple tap on your phone, service comes to your door, and your craft finds its stage.",
    values_t: "Our Values",
    values: [
      { Icon: ShieldCheck, t: "Certified First", d: "Every pro passes ID verification and skill review. You know who's coming." },
      { Icon: Sparkles,    t: "Transparent Pricing", d: "See the price range before booking. Work starts only after on-site confirmation." },
      { Icon: Clock,       t: "On-Time Arrival", d: "Show up on time. Delays notified in advance. Fully trackable." },
      { Icon: Heart,       t: "Customer First", d: "Every review affects a pro's dispatch priority." },
      { Icon: Award,       t: "Local Team", d: "Malaysian team, local needs, tri-lingual support (CN/EN/MS)." },
      { Icon: TrendingUp,  t: "Grow Together", d: "More jobs, better ratings, higher priority and income for pros." },
    ],
    stats_t: "Our Goals",
    stats: [
      { n: "6", l: "Service Categories" },
      { n: "3", l: "Languages (CN/EN/MS)" },
      { n: "KK", l: "Launch City" },
      { n: "MY", l: "Coverage Target" },
    ],
    timeline_t: "Our Journey",
    timeline: [
      { d: "2024", t: "The Idea", ds: "Saw the pain points in Sabah — hard to find pros, unstable income for skilled workers" },
      { d: "2025", t: "Platform Dev", ds: "Built the V'GO platform core features" },
      { d: "2026 Q1", t: "KK Launch", ds: "First batch of certified pros and merchants onboarded, pilot launch" },
      { d: "2026 Q2", t: "Nationwide", ds: "Expanding to other Sabah cities and Peninsular Malaysia" },
    ],
    roles_t: "Three Audiences We Serve",
    roles: [
      { Icon: Home,   t: "Families", d: "Repair, cleaning, massage, errands — all in one place" },
      { Icon: Store,  t: "Local Merchants", d: "Move your business online, reach nearby customers" },
      { Icon: Wrench, t: "Skilled Pros", d: "Take nearby jobs, get paid per order, set your own hours" },
    ],
    region_t: "Coverage",
    region: "Currently covering Kota Kinabalu and surrounding areas in Sabah. Sabah is where we started — Malaysia is where we're headed.",
    contact_t: "Want to know more?",
    contact_d: "Whether you're a customer, merchant, pro, or partner — we'd love to hear from you.",
  },
  ms: {
    label: "Tentang Kami", title: "Siapa Kami",
    intro: "V'GO (V Go On) ialah platform perkhidmatan ke rumah Malaysia. Kami menghubungkan keluarga yang memerlukan dengan tukang bertauliah, menjadikan \"cari servis\" mudah, telus dan boleh dipercayai.",
    mission_t: "Misi Kami",
    mission: "Memudahkan setiap keluarga mencari bantuan yang boleh dipercayai — dan setiap tukang mahir mencari rezeki melalui kemahiran mereka.",
    story_t: "Kisah Kami",
    story: "V'GO bermula di Sabah, dengan pandangan ke seluruh Malaysia. Kami nampak terlalu ramai orang: tak jumpa tukang paip, dikenakan caj berlebihan, tukang tak datang selepas tempahan. Di sisi lain, tukang mahir tunggu rujukan dengan pendapatan tak stabil. V'GO menghubungkan kedua-duanya — dengan satu ketikan di telefon anda, servis datang ke pintu, dan kemahiran anda menemui pentasnya.",
    values_t: "Nilai Kami",
    values: [
      { Icon: ShieldCheck, t: "Bertauliah Dahulu", d: "Setiap tukang lulus pengesahan ID dan semakan kemahiran." },
      { Icon: Sparkles,    t: "Harga Telus", d: "Lihat julat harga sebelum tempah. Kerja mula selepas pengesahan di lokasi." },
      { Icon: Clock,       t: "Tiba Tepat Masa", d: "Tiba tepat masa. Kelewatan dimaklumkan awal. Boleh dijejaki." },
      { Icon: Heart,       t: "Pelanggan Dahulu", d: "Setiap ulasan mempengaruhi keutamaan penghantaran tukang." },
      { Icon: Award,       t: "Pasukan Tempatan", d: "Pasukan Malaysia, keperluan tempatan, sokongan tiga bahasa." },
      { Icon: TrendingUp,  t: "Berkembang Bersama", d: "Lebih kerja, penilaian lebih baik, keutamaan dan pendapatan lebih tinggi." },
    ],
    stats_t: "Sasaran Kami",
    stats: [
      { n: "6", l: "Kategori Servis" },
      { n: "3", l: "Bahasa (CN/EN/MS)" },
      { n: "KK", l: "Bandar Pelancaran" },
      { n: "MY", l: "Sasaran Liputan" },
    ],
    timeline_t: "Perjalanan Kami",
    timeline: [
      { d: "2024", t: "Idea Timbul", ds: "Melihat masalah di Sabah — sukar cari tukang, pendapatan tak stabil" },
      { d: "2025", t: "Pembangunan", ds: "Bina ciri teras platform V'GO" },
      { d: "2026 Q1", t: "Pelancaran KK", ds: "Kelompok pertama tukang dan peniaga bertauliah, pelancaran perintis" },
      { d: "2026 Q2", t: "Seluruh Negara", ds: "Berkembang ke bandar Sabah lain dan Semenanjung" },
    ],
    roles_t: "Tiga Kumpulan Yang Kami Layani",
    roles: [
      { Icon: Home,   t: "Keluarga",  d: "Pembaikan, pembersihan, urutan, penghantaran — semua di satu tempat" },
      { Icon: Store,  t: "Peniaga Tempatan", d: "Pindahkan bisnes ke dalam talian, capai pelanggan berhampiran" },
      { Icon: Wrench, t: "Tukang Mahir", d: "Ambil kerja berhampiran, bayar ikut pesanan, atur masa sendiri" },
    ],
    region_t: "Liputan",
    region: "Kini meliputi Kota Kinabalu dan kawasan sekitar Sabah. Sabah tempat kami bermula — Malaysia destinasi kami.",
    contact_t: "Mahu tahu lebih lanjut?",
    contact_d: "Sama ada anda pelanggan, peniaga, tukang, atau rakan kongsi — kami ingin dengar dari anda.",
  },
} as const;

export default function AboutPage() {
  const { lang } = useLang();
  const c = C[lang] ?? C.zh;

  return (
    <PageShell label={c.label} title={c.title}>
      <p className="text-white/75 leading-relaxed mb-12 text-base sm:text-lg">{c.intro}</p>

      {/* 使命 */}
      <div className="not-prose mb-12 p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-600/5 border border-orange-500/25">
        <div className="flex items-center gap-2 mb-3">
          <Target size={20} className="text-[var(--vgo)]" />
          <h3 className="font-black text-lg text-white">{c.mission_t}</h3>
        </div>
        <p className="text-white/80 leading-relaxed">{c.mission}</p>
      </div>

      {/* 故事 */}
      <div className="not-prose mb-12">
        <h3 className="font-black text-lg text-white mb-4">{c.story_t}</h3>
        <p className="text-white/70 leading-[1.9] text-base">{c.story}</p>
      </div>

      {/* 数据 */}
      <div className="not-prose mb-12">
        <h3 className="font-black text-lg text-white mb-6">{c.stats_t}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {c.stats.map((s) => (
            <div key={s.l} className="p-5 rounded-2xl bg-[#06111d]/5 border border-white/10 text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#D95000] leading-tight">{s.n}</div>
              <div className="text-xs text-white/60 mt-1.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 价值观 */}
      <div className="not-prose mb-12">
        <h3 className="font-black text-lg text-white mb-6">{c.values_t}</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {c.values.map((v, i) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-4 p-5 rounded-2xl bg-[#06111d]/5 border border-white/10"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center shrink-0">
                <v.Icon size={18} color="#fff" strokeWidth={2.4} />
              </div>
              <div>
                <div className="font-black text-white text-sm mb-1">{v.t}</div>
                <div className="text-xs text-white/55 leading-relaxed">{v.d}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 三类人群 */}
      <div className="not-prose mb-12">
        <h3 className="font-black text-lg text-white mb-6">{c.roles_t}</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {c.roles.map((r, i) => (
            <motion.div
              key={r.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-[#06111d]/5 border border-white/10 text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center mb-3">
                <r.Icon size={22} color="#fff" strokeWidth={2.2} />
              </div>
              <div className="font-black text-white text-sm mb-2">{r.t}</div>
              <div className="text-xs text-white/55 leading-relaxed">{r.d}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 历程 */}
      <div className="not-prose mb-12">
        <h3 className="font-black text-lg text-white mb-6">{c.timeline_t}</h3>
        <div className="space-y-3">
          {c.timeline.map((item, i) => (
            <motion.div
              key={item.d}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5 items-start p-5 rounded-2xl bg-[#06111d]/5 border border-white/10"
            >
              <div className="shrink-0 w-20 text-center">
                <div className="text-sm font-black text-[var(--vgo)]">{item.d}</div>
              </div>
              <div className="flex-1 min-w-0 border-l border-white/10 pl-5">
                <div className="font-black text-white text-sm mb-1">{item.t}</div>
                <div className="text-xs text-white/60 leading-relaxed">{item.ds}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 服务范围 */}
      <div className="not-prose mb-12 p-6 rounded-2xl bg-[#06111d]/5 border border-white/10">
        <div className="flex items-center gap-2 mb-2">
          <MapPin size={18} className="text-[var(--vgo)]" />
          <h3 className="font-black text-base text-white">{c.region_t}</h3>
        </div>
        <p className="text-sm text-white/70 leading-relaxed">{c.region}</p>
      </div>

      {/* 联系 */}
      <div className="not-prose mt-12 p-8 rounded-3xl bg-gradient-to-br from-[#FF8A1F] to-[#D95000] text-center relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,.25), transparent 70%)" }} />
        <div className="relative">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-3">{c.contact_t}</h3>
          <p className="text-sm text-white/85 mb-6 max-w-md mx-auto">{c.contact_d}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://wa.me/601172691788" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#06111d] text-[#D95000] font-black text-sm shadow-2xl hover:scale-105 active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">
              WhatsApp 联系
            </a>
            <a href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#06111d]/15 backdrop-blur border border-white/30 text-white font-bold text-sm hover:bg-[#06111d]/25 transition-[transform,box-shadow,opacity,width,background-color]">
              更多联系方式 →
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
