"use client";

import { motion, useReducedMotion } from "motion/react";

export default function AbstractAuroraTransition() {
  const reduce = useReducedMotion();

  return (
    <div className="relative h-[320px] md:h-[420px] w-full overflow-hidden bg-[#06111d] isolation-auto border-t border-white/5">
      {/* 底层深蓝 */}
      <div className="absolute inset-0 bg-[#06111d]" />
      
      {/* 3个流动光团 */}
      <div className="absolute inset-0">
        {/* 光团1 - 主橙光 从左到右慢飘 */}
        <motion.div
          className="absolute -top-1/2 -left-1/4 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,121,0,0.25)_0%,rgba(255,153,51,0.1)_30%,transparent_70%)] blur-[80px]"
          animate={reduce ? {} : { 
            x: ["-10%", "15%", "-10%"], 
            y: ["-5%", "10%", "-5%"],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform" }}
        />
        {/* 光团2 - 副光 右侧 */}
        <motion.div
          className="absolute -bottom-1/2 -right-1/4 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,121,0,0.2)_0%,rgba(255,121,0,0.05)_40%,transparent_70%)] blur-[90px]"
          animate={reduce ? {} : { 
            x: ["10%", "-12%", "10%"], 
            y: ["10%", "-8%", "10%"],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ willChange: "transform" }}
        />
        {/* 光团3 - 丝绸质感 中心 */}
        <motion.div
          className="absolute top-1/2 left-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,153,51,0.12)_0%,transparent_60%)] blur-[60px]"
          animate={reduce ? {} : { 
            rotate: [0, 15, 0],
            scale: [1, 1.1, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform, opacity" }}
        />
      </div>

      {/* 顶部和底部羽化，融入上下区块 */}
      <div className="absolute inset-x-0 top-0 h-[120px] bg-gradient-to-b from-[#06111d] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[120px] bg-gradient-to-t from-[#06111d] to-transparent" />
      
      {/* 细微噪点增加电影感 */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
      }} />
    </div>
  );
}
