"use client";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() { setShow(window.scrollY > 600); }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="回到顶部"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover:scale-110 active:scale-95"
      style={{ background: "linear-gradient(135deg, #FF8C42 0%, #FF6600 100%)", boxShadow: "0 8px 20px rgba(255,102,0,.4)" }}
    >
      <ArrowUp size={20} strokeWidth={2.6} />
    </button>
  );
}
