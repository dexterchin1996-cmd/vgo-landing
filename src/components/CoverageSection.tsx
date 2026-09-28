"use client";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { COVERAGE_CITIES, COVERAGE_LABELS } from "@/data/coverage";
import { Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://vgo.abrdns.com";
export default function CoverageSection() {
  const { lang } = useLang();
  const cl = COVERAGE_LABELS[lang] ?? COVERAGE_LABELS.zh;
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree || status === "loading") return;
    setStatus("loading");
    try {
      const r = await fetch(API_BASE + "/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "contact-coverage" }),
      });
      setStatus(r.ok ? "ok" : "err");
    } catch { setStatus("err"); }
  };
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
      <h3 className="font-black text-base mb-2">{cl.label}</h3>
      <p className="text-sm text-white/65 mb-5">{cl.sub}</p>
      <div className="space-y-3 mb-5">
        {COVERAGE_CITIES.map((city) => (
          <div key={city.key}>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="font-bold text-sm">{city.label[lang]}</span>
            </div>
            {city.areas.length > 0 && (
              <div className="text-xs text-white/50 pl-4">{city.areas.map((a) => a[lang]).join(" · ")}</div>
            )}
          </div>
        ))}
      </div>
      <div className="pt-4 border-t border-white/10">
        <p className="text-xs font-bold text-white/70 mb-1">{cl.form_t}</p>
        <p className="text-xs text-white/40 mb-3">{cl.form_sub}</p>
        {status === "ok" ? (
          <div className="flex items-center gap-2 text-sm text-green-400">
            <CheckCircle2 size={16} /> {cl.form_ok}
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-2">
            <div className="flex gap-2">
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={cl.form_ph} className="flex-1 px-3 py-2 rounded-xl bg-white/10 border border-white/15 text-sm text-white placeholder-white/35 focus:border-[#FFB800]/60 outline-none" />
              <button type="submit" disabled={!agree || status === "loading"} className="px-4 py-2 rounded-xl bg-[#FFB800] text-black font-bold text-sm hover:bg-[#FFC93D] disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-1.5">
                {status === "loading" ? <Loader2 size={14} className="animate-spin" /> : <Mail size={14} />}
                {cl.form_btn}
              </button>
            </div>
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5 w-3.5 h-3.5 accent-[#FFB800]" />
              <span className="text-[11px] text-white/50 leading-snug">{cl.form_agree}</span>
            </label>
            {status === "err" && (
              <div className="flex items-center gap-1.5 text-xs text-red-400">
                <AlertCircle size={13} /> {cl.form_err}
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
