"use client";
import { Share2, X } from "lucide-react";
import { useState } from "react";

export default function ShareButton() {
  const [open, setOpen] = useState(false);

  function share(channel: string) {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = "V'GO · 有事不用愁，上门找 V'GO";
    let link = "";
    if (channel === "wa") link = `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`;
    else if (channel === "fb") link = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    else if (channel === "copy") {
      navigator.clipboard.writeText(url);
      alert("链接已复制");
      setOpen(false);
      return;
    }
    if (link) window.open(link, "_blank", "noopener,noreferrer");
    setOpen(false);
  }

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {open && (
        <div className="absolute bottom-14 left-0 flex flex-col gap-2 mb-2">
          {[
            { key: "wa", label: "WhatsApp", color: "#25D366" },
            { key: "fb", label: "Facebook", color: "#1877F2" },
            { key: "copy", label: "复制链接", color: "#6B7280" },
          ].map((c, i) => (
            <button
              key={c.key}
              onClick={() => share(c.key)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg text-sm font-bold whitespace-nowrap hover:scale-105 active:scale-95 transition"
            >
              <span className="w-2 h-2 rounded-full" style={{ background: c.color }} />
              {c.label}
            </button>
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="分享"
        className="w-11 h-11 rounded-full flex items-center justify-center text-white shadow-lg transition-[transform,box-shadow,opacity,width,background-color] hover:scale-110"
        style={{ background: open ? "#6B7280" : "linear-gradient(135deg, #4B6A9B 0%, #1B2A47 100%)", boxShadow: "0 8px 20px rgba(27,42,71,.35)" }}
      >
        {open ? <X size={20} strokeWidth={2.6} /> : <Share2 size={20} strokeWidth={2.6} />}
      </button>
    </div>
  );
}
