"use client";

import Link from "next/link";
import { motion } from "motion/react";
import NewsTicker from "@/components/NewsTicker";
import PainPointWall from "@/components/PainPointWall";
import FeatureCards from "@/components/FeatureCards";
import SceneShowcase from "@/components/SceneShowcase";
import HowItWorks from "@/components/HowItWorks";
import Guarantees from "@/components/Guarantees";
import PlatformTrust from "@/components/PlatformTrust";
import Roles from "@/components/Roles";
import Merchant from "@/components/Merchant";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Cooperation from "@/components/Cooperation";
import FinalCTA from "@/components/FinalCTA";
import AppLinks from "@/components/AppLinks";
import Footer from "@/components/Footer";
import Waitlist from "@/components/Waitlist";
import Notice from "@/components/Notice";
import Reveal from "@/components/Reveal";
import { useLang } from "@/lib/i18n";

export default function Home() {
  const { t } = useLang();

  return (
    <>
      <main id="home" className="relative bg-[#06111d] overflow-x-hidden font-sans">
        
        {/* ============================================
            HERO - 2026 Premium UX/UI Spec
            - 主标题 88px，字间距收紧
            - 留白 3-5x
            - 色彩克制：橙仅用于 CTA 和 品牌词
            - CTA 单一焦点，次级降为纯文本
            ============================================ */}
        <section className="relative min-h-[100vh] flex flex-col justify-between overflow-hidden">

          {/* 背景：深海军蓝 + 极克制的微弱光 */}
          <div className="absolute inset-0 z-0 bg-[#06111d]">
            <div className="absolute inset-0 bg-[url('/shared/s05.jpg')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06111d] via-[#06111d]/85 to-[#06111d]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06111d] via-transparent to-transparent" />
          </div>

          <div className="pt-36 md:pt-44" />

          {/* 核心网格：左右分栏，gap 加大到 16（呼吸感） */}
          <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center flex-1 pb-20">

            {/* 左：文字金字塔 */}
            <div className="w-full text-left relative z-20">

              {/* 顶部标签 - 克制 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-10 text-[#ff7900] text-xs font-bold tracking-[0.25em] uppercase"
              >
                <span className="w-8 h-px bg-[#ff7900]" />
                V&apos;GO Malaysia · Premium Service
              </motion.div>

              {/* H1 主标题 - 88px，字距收紧 */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }}
                className="text-[56px] sm:text-7xl md:text-[88px] leading-[0.95] font-black text-white tracking-tighter"
              >
                有事不用愁<br />
                <span className="text-white/90">上门找 </span>
                <span className="text-[#ff7900]">V&apos;GO</span>
              </motion.h1>

              {/* 副标题 - 16-18px，white/55 降低噪音 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-12 max-w-md text-base leading-relaxed text-white/55"
              >
                <p className="text-white/90 font-medium text-lg mb-3">马来西亚上门服务平台</p>
                <p>居家维修 · 清洁 · 按摩 · 跑腿 · 商城 · 找工作<br/>一站式搞定生活里的每一件事</p>
              </motion.div>

              {/* CTA 区 - 单一主按钮 + 纯文本次级 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }}
                className="mt-14 flex items-center gap-8"
              >
                <Link
                  href="/how-it-works/customer"
                  className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#ff7900] text-white font-bold text-base shadow-[0_15px_40px_-12px_rgba(255,121,0,0.65)] hover:bg-[#ff8a1f] hover:scale-[1.03] transition-all duration-300"
                >
                  立即体验
                  <span className="text-lg">→</span>
                </Link>
                <Link
                  href="#services"
                  className="group inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors"
                >
                  了解服务
                  <span className="group-hover:translate-x-1 transition-transform">↓</span>
                </Link>
              </motion.div>

            </div>

            {/* 右：真人视觉锚点 */}
            <div className="w-full relative flex justify-center md:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
                className="relative w-full max-w-[560px] aspect-[4/5] flex items-end justify-center"
              >
                {/* 视频接口 - 透明真人视频就位后自动播放 */}
                <video
                  autoPlay loop muted playsInline
                  className="w-full h-full object-contain z-10 relative"
                  poster="/features/repair.jpg"
                >
                  <source src="/motion/hero-worker-walkin-alpha.webm" type="video/webm" />
                  <source src="/motion/hero-worker-fallback.mp4" type="video/mp4" />
                </video>

                {/* 底部渐变融合，让人物与背景无缝 */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#06111d] to-transparent z-20 pointer-events-none" />
              </motion.div>
            </div>

          </div>

          {/* 底部信任条 - 极简克制 */}
          <div className="relative z-10 w-full border-t border-white/[0.06]">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-8 flex overflow-x-auto md:justify-between items-center gap-10 scrollbar-hide">
              {[
                { icon: "shield", title: "安全可靠", desc: "实名认证 · 专业认证" },
                { icon: "search", title: "快速响应", desc: "30分钟内接单" },
                { icon: "user", title: "优质服务", desc: "专业团队 · 品质保障" },
                { icon: "calendar", title: "价格透明", desc: "明码标价 · 无隐藏费用" },
                { icon: "chat", title: "全天候客服", desc: "7x24小时在线" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 shrink-0 group">
                  <img
                    src={`/icons/${item.icon}.svg`}
                    alt={item.title}
                    className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity"
                  />
                  <div>
                    <div className="text-white/85 font-semibold text-[13px] tracking-wide whitespace-nowrap">{item.title}</div>
                    <div className="text-white/35 text-[11px] whitespace-nowrap mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <NewsTicker />
        <PainPointWall />
        <Reveal><FeatureCards /></Reveal>
        <Reveal><SceneShowcase /></Reveal>
        <Reveal><HowItWorks /></Reveal>
        <Reveal><Guarantees /></Reveal>
        <PlatformTrust />
        <Reveal><Testimonials /></Reveal>
        <Reveal><Roles /></Reveal>
        <Reveal><Merchant /></Reveal>
        <Reveal><Cooperation /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Reveal><FinalCTA /></Reveal>
        <AppLinks />
        <Footer />
        <Waitlist />
        <Notice />
      </main>
    </>
  );
}
