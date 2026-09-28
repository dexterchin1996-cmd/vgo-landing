"use client";
import { motion } from "motion/react";
import { Target, Heart, ShieldCheck, Sparkles } from "lucide-react";
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
    v1_t: "认证优先", v1_d: "每个师傅都经过身份验证和技能审核，你不用担心来的是谁。",
    v2_t: "价格透明", v2_d: "下单前看得到价格区间，师傅上门确认后才开工，没有隐藏费用。",
    v3_t: "准时上门", v3_d: "约定时间准时到，迟到提前告知，全程可追踪。",
    v4_t: "全马服务", v4_d: "马来西亚团队，懂本地需求，服务全马家庭。",
    region_t: "服务范围",
    region: "目前覆盖马来西亚主要城市，持续扩展中。沙巴是我们起点，全马是我们的目标。",
  },
  en: {
    label: "About Us", title: "Who We Are",
    intro: "V'GO (V Go On) is a Malaysia home-service platform. We connect families in need with certified pros, making \"finding a service\" simple, transparent, and reliable.",
    mission_t: "Our Mission",
    mission: "Make it easy for every family to find reliable help — and for every skilled worker to earn a living through their craft.",
    story_t: "Our Story",
    story: "V'GO started in Sabah, with eyes on all of Malaysia. We saw too many people: unable to find a plumber, overcharged, ghosted after booking. And on the other side, skilled workers waiting on referrals with unstable income. V'GO connects these two — with a simple tap on your phone, service comes to your door, and your craft finds its stage.",
    values_t: "Our Values",
    v1_t: "Certified First", v1_d: "Every pro passes ID verification and skill review. You know who's coming.",
    v2_t: "Transparent Pricing", v2_d: "See the price range before booking. Work starts only after on-site confirmation.",
    v3_t: "On-Time Arrival", v3_d: "Show up on time. Delays notified in advance. Fully trackable.",
    v4_t: "Nationwide Service", v4_d: "A Malaysian team that understands local needs and serves families across the country.",
    region_t: "Coverage",
    region: "Currently covering major Malaysian cities, expanding steadily. Sabah is where we started \u2014 Malaysia is where we\u2019re headed.",
  },
  ms: {
    label: "Tentang Kami", title: "Siapa Kami",
    intro: "V'GO (V Go On) ialah platform perkhidmatan ke rumah Malaysia. Kami menghubungkan keluarga yang memerlukan dengan tukang bertauliah — menjadikan \"mencari servis\" mudah, telus, dan boleh dipercayai.",
    mission_t: "Misi Kami",
    mission: "Memudahkan setiap keluarga mencari bantuan yang boleh dipercayai — dan setiap tukang dapat mencari rezeki melalui kemahiran mereka.",
    story_t: "Kisah Kami",
    story: "V'GO bermula di Sabah, memandang seluruh Malaysia. Kami lihat terlalu ramai orang: tak jumpa tukang paip, kena caj tinggi, tukang tak datang selepas tempah. Di sisi lain, tukang tunggu kenalan, pendapatan tak stabil. V'GO menghubungkan kedua-duanya — dengan satu tap pada telefon, servis sampai ke pintu, dan kemahiran anda ada pentasnya.",
    values_t: "Nilai Kami",
    v1_t: "Bertauliah Dulu", v1_d: "Setiap tukang lulus pengesahan identiti dan semakan kemahiran.",
    v2_t: "Harga Telus", v2_d: "Lihat julat harga sebelum tempah. Kerja mula selepas pengesahan di lokasi.",
    v3_t: "Tepat Masa", v3_d: "Sampai tepat masa. Lewat dimaklumkan awal. Boleh track.",
    v4_t: "Servis Seluruh Negara", v4_d: "Pasukan Malaysia yang faham keperluan tempatan dan berkhidmat untuk keluarga seluruh negara.",
    region_t: "Liputan",
    region: "Kini meliputi bandar-bandar utama Malaysia, berkembang berterusan. Sabah tempat kami bermula \u2014 Malaysia destinasi kami.",
  },
} as const;

export default function AboutPage() {
  const { lang } = useLang();
  const c = C[lang] ?? C.zh;
  const VALUES = [
    { Icon: ShieldCheck, t: c.v1_t, d: c.v1_d },
    { Icon: Target,      t: c.v2_t, d: c.v2_d },
    { Icon: Sparkles,    t: c.v3_t, d: c.v3_d },
    { Icon: Heart,       t: c.v4_t, d: c.v4_d },
  ];

  return (
    <PageShell label={c.label} title={c.title}>
      <p className="text-lg text-white/75 leading-relaxed">{c.intro}</p>

      <div className="mt-12 p-7 rounded-3xl bg-gradient-to-br from-white/8 to-white/3 border border-white/10">
        <h2 className="text-xl font-black mb-3">{c.mission_t}</h2>
        <p className="text-white/70 leading-relaxed">{c.mission}</p>
      </div>

      <h2 className="text-2xl font-black mt-14 mb-4">{c.story_t}</h2>
      <p className="text-white/70 leading-relaxed">{c.story}</p>

      <h2 className="text-2xl font-black mt-14 mb-6">{c.values_t}</h2>
      <div className="grid sm:grid-cols-2 gap-4 not-prose">
        {VALUES.map((v, i) => (
          <motion.div
            key={v.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center mb-4">
              <v.Icon size={20} className="text-white" strokeWidth={2.2} />
            </div>
            <h3 className="font-black text-base mb-1.5">{v.t}</h3>
            <p className="text-sm text-white/60 leading-relaxed">{v.d}</p>
          </motion.div>
        ))}
      </div>

      <h2 className="text-2xl font-black mt-14 mb-4">{c.region_t}</h2>
      <p className="text-white/70 leading-relaxed">{c.region}</p>
    </PageShell>
  );
}
