"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, User, Phone, FileText, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://vgo.abrdns.com";

export default function OnboardingForm() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", phone: "", desc: "" });
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setErrMsg("");

    try {
      const res = await fetch(`${API_BASE}/api/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          remark: form.desc,
          role: "partner", 
        }),
      });

      if (!res.ok) throw new Error("提交失败，请稍后再试");
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrMsg(err.message || "网络异常");
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="relative py-24 bg-[#06111D] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FF7A00]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          {...(reduce ? {} : { initial: { y: 20, opacity: 0 }, whileInView: { y: 0, opacity: 1 } })}
          viewport={{ once: true }}
          className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 md:p-10 backdrop-blur-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative overflow-hidden"
        >
          {status === "success" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#06111D]/90 backdrop-blur-md">
              <CheckCircle2 className="w-16 h-16 text-[#FF7A00] mb-4" />
              <h3 className="text-2xl font-black text-white mb-2">提交成功</h3>
              <p className="text-white/60 text-sm">我们的商务团队将在 24 小时内与您联系。</p>
            </motion.div>
          )}

          <div className="mb-8">
            <h3 className="text-2xl font-black text-white">{t("form_apply_title")}</h3>
            <p className="mt-2 text-sm text-white/50">{t("form_apply_sub")}</p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-5 relative z-10">
            <label>
              <div className="mb-2 flex items-center gap-1.5 text-[12px] text-white/50 font-medium">
                <User className="h-3.5 w-3.5" /> {t("form_name")} <span className="text-[#FF7A00]">*</span>
              </div>
              <input name="name" onChange={onChange} value={form.name} required disabled={status === "loading"} className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-[14px] text-white outline-none focus:border-[#FF7A00]/50" />
            </label>
            <label>
              <div className="mb-2 flex items-center gap-1.5 text-[12px] text-white/50 font-medium">
                <Phone className="h-3.5 w-3.5" /> {t("form_phone")} <span className="text-[#FF7A00]">*</span>
              </div>
              <input name="phone" onChange={onChange} value={form.phone} required disabled={status === "loading"} className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-[14px] text-white outline-none focus:border-[#FF7A00]/50" />
            </label>
            <label>
              <div className="mb-2 flex items-center gap-1.5 text-[12px] text-white/50 font-medium">
                <FileText className="h-3.5 w-3.5" /> {t("form_desc")} <span className="text-[#FF7A00]">*</span>
              </div>
              <textarea name="desc" onChange={onChange} value={form.desc} required rows={4} disabled={status === "loading"} className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] p-4 text-[14px] text-white outline-none focus:border-[#FF7A00]/50" />
            </label>
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle size={16} /> {errMsg}
              </div>
            )}
            <button type="submit" disabled={status === "loading"} className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#FF7A00] text-[15px] font-bold text-white transition-transform hover:scale-[1.02] disabled:opacity-70">
              {status === "loading" ? <><Loader2 className="h-4 w-4 animate-spin" /> 提交中...</> : <>{t("form_submit")} <ArrowRight className="h-4 w-4" /></>}
            </button>
            <div className="text-center text-[11px] text-white/30">{t("form_hint")}</div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
