"use client";
/**
 * Copyright (c) 2026 Ventus Reflexology. All Rights Reserved.
 * 滚动揭示组件：进入视口时淡入上移
 */
import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  once = true,
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.7, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
