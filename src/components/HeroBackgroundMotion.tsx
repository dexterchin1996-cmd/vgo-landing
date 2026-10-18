"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function HeroBackgroundMotion() {
  const reduce = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0 will-change-transform"
        initial={{ scale: 1, x: 0, y: 0 }}
        animate={reduce ? {} : { 
          scale: [1, 1.08, 1],
          x: [0, -18, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: [0.45, 0, 0.55, 1] as const,
          repeatType: "loop"
        }}
      >
        <Image
          src="/images/hero/hero-desktop-16x9.jpg"
          alt="KL skyline night"
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover object-[center_30%] opacity-60"
        />
        <Image
          src="/images/hero/hero-mobile-9x16.jpg" 
          alt="KL skyline night mobile"
          fill
          priority
          sizes="100vw"
          className="block md:hidden object-cover object-center opacity-60"
        />
      </motion.div>

      {/* 叠加暗色渐变，保证白字可读 */}
      <div className="absolute inset-0 bg-[#06111d]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#06111d]/80 via-[#06111d]/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06111d]/60 via-transparent to-transparent" />
    </div>
  );
}
