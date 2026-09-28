"use client";
import { motion } from "motion/react";
import { UserPlus, Smartphone, MousePointerClick, CheckCircle2 } from "lucide-react";
import { useLang } from "@/lib/i18n";

const C = {
  zh: {
    label: "怎么用", title: "4 步搞定",
    sub: "比你想象的更简单",
    steps: [
      { num: "01", Icon: UserPlus, title: "注册账号", time: "30 秒",
        desc: "手机号一键注册，不用填一堆资料",
        points: ["手机号即可", "免费注册", "秒级验证"],
        img: "/shared/s06.jpg" },
      { num: "02", Icon: Smartphone, title: "下载 App", time: "1 分钟",
        desc: "从浏览器直接装，不用去应用商店",
        points: ["无需应用商店", "装到手机主屏", "像 App 一样用"],
        img: "/shared/s07.jpg" },
      { num: "03", Icon: MousePointerClick, title: "选择服务", time: "1 分钟",
        desc: "30+ 服务类目，先看价格再下单",
        points: ["价格透明", "一键下单", "实时派单"],
        img: "/shared/s01.jpg" },
      { num: "04", Icon: CheckCircle2, title: "师傅上门", time: "准时到",
        desc: "认证师傅上门，全程可追踪",
        points: ["认证师傅", "准时上门", "服务保障"],
        img: "/shared/s02.jpg" },
    ],
  },
  en: {
    label: "How It Works", title: "4 Simple Steps",
    sub: "Simpler than you'd think",
    steps: [
      { num: "01", Icon: UserPlus, title: "Sign Up", time: "30 sec",
        desc: "One phone number, no long forms",
        points: ["Phone number", "Free signup", "Instant verify"],
        img: "/shared/s06.jpg" },
      { num: "02", Icon: Smartphone, title: "Download App", time: "1 min",
        desc: "Install from browser, no app store needed",
        points: ["No app store", "Add to home screen", "Works like an app"],
        img: "/shared/s07.jpg" },
      { num: "03", Icon: MousePointerClick, title: "Pick a Service", time: "1 min",
        desc: "30+ services, see price before ordering",
        points: ["Transparent pricing", "One-tap booking", "Real-time dispatch"],
        img: "/shared/s01.jpg" },
      { num: "04", Icon: CheckCircle2, title: "Pro Arrives", time: "On time",
        desc: "Certified pro arrives, fully trackable",
        points: ["Certified pros", "On-time arrival", "Service guarantee"],
        img: "/shared/s02.jpg" },
    ],
  },
  ms: {
    label: "Cara Guna", title: "4 Langkah Mudah",
    sub: "Lebih mudah dari yang disangka",
    steps: [
      { num: "01", Icon: UserPlus, title: "Daftar Akaun", time: "30 saat",
        desc: "Satu nombor telefon, tak perlu isi borang panjang",
        points: ["Nombor telefon", "Daftar percuma", "Sah segera"],
        img: "/shared/s06.jpg" },
      { num: "02", Icon: Smartphone, title: "Muat Turun App", time: "1 minit",
        desc: "Pasang dari browser, tak perlu app store",
        points: ["Tanpa app store", "Pasang di skrin utama", "Guna macam app"],
        img: "/shared/s07.jpg" },
      { num: "03", Icon: MousePointerClick, title: "Pilih Servis", time: "1 minit",
        desc: "30+ servis, tengok harga dulu baru tempah",
        points: ["Harga telus", "Tempah satu tap", "Hantar masa nyata"],
        img: "/shared/s01.jpg" },
      { num: "04", Icon: CheckCircle2, title: "Tukang Sampai", time: "Tepat masa",
        desc: "Tukang bertauliah sampai, boleh track penuh",
        points: ["Tukang bertauliah", "Tepat masa", "Jaminan servis"],
        img: "/shared/s02.jpg" },
    ],
  },
} as const;

export default function HowItWorks() {
  const { lang } = useLang();
  const c = C[lang] ?? C.zh;

  return (
    <section className="relative bg-gray-950 py-20 sm:py-28 px-5 overflow-hidden noise">
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora absolute top-1/4 -left-24 w-96 h-96 bg-[var(--vgo)]/40 rounded-full blur-[140px]" />
        <div className="aurora-2 absolute bottom-0 -right-24 w-96 h-96 bg-[var(--vgo)]/30 rounded-full blur-[140px]" />
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {c.title}
          </h2>
          <p className="mt-4 text-white/50 text-sm sm:text-base max-w-2xl mx-auto">
            {c.sub}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {c.steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, type: "spring", stiffness: 70 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[var(--vgo)]/40 transition-all duration-300">
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
                  <div className="absolute top-3 right-4 text-4xl font-black text-white/40 select-none">
                    {s.num}
                  </div>
                  <div className="absolute top-3 left-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--vgo)] text-white text-[10px] font-bold">
                    {s.time}
                  </div>
                </div>

                <div className="relative p-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--vgo)] to-[var(--vgo-dark)] flex items-center justify-center mb-4 -mt-10 relative shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                    <s.Icon size={22} strokeWidth={2.2} className="text-white" />
                  </div>
                  <h3 className="text-base font-black text-white mb-1.5">{s.title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed mb-3">{s.desc}</p>
                  <ul className="space-y-1.5 pt-3 border-t border-white/10">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-[11px] text-white/65">
                        <span className="w-1 h-1 rounded-full bg-[var(--vgo)]" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {i < c.steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 text-white/20 text-xl z-10">→</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
