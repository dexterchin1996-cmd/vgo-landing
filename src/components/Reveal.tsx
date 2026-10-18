"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

type Props = {
  children: ReactNode;
  y?: number;
  className?: string;
};

export default function Reveal({
  children,
  y = 24,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.35"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [y, 0]);

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y: translateY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
