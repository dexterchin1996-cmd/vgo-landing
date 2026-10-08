"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import {
  X, User, Store, Wrench, Sparkles, CheckCircle2, ArrowRight, ArrowLeft,
  Loader2, ChevronDown, AlertCircle, Gift, ShieldCheck,
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import {
  STATES, CITIES, AREAS, INDUSTRIES, TECH_SKILLS, ARTISAN_SKILLS,
  RANGES, SERVE_MODES, T, pickLabel, type Lang,
} from "@/data/waitlist";

type Role = "customer" | "merchant" | "tech" | "artisan";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://vgo.abrdns.com";

const ROLE_MAP: Record<string, Role> = {
  "#download": "customer",
  "#merchant": "merchant",
  "#technician": "tech",
  "#artisan": "artisan",
};

const ROLE_IMG: Record<Role, string> = {
  customer: "/shared/s01.jpg",
  merchant: "/shared/s06.jpg",
  tech:     "/shared/s02.jpg",
  artisan:  "/shared/s09.jpg",
};
const ROLE_PREFIX: Record<Role, string> = {
  customer: "c", merchant: "m", tech: "t", artisan: "t",
};

const inputCls = "w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-[var(--vgo)] focus:ring-4 focus:ring-orange-500/10 focus:outline-none transition text-[15px]";
const selectCls = inputCls + " appearance-none bg-white pr-10";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[13px] font-bold text-gray-700 mb-2">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function Waitlist() {
  const { lang } = useLang();
  const l = (lang as Lang) || "en";
  const c = T[l] ?? T.en;

  const [open, setOpen] = useState(false);
  const [agreeGate, setAgreeGate] = useState(false);
  const [aTerms, setATerms] = useState(false);
  const [aPrivacy, setAPrivacy] = useState(false);
  const [aRole, setARole] = useState(false);
  const [previewOpen, setPreviewOpen] = useState<"terms"|"privacy"|"role"|null>(null);
  const [scrolledEnd, setScrolledEnd] = useState({ terms: false, privacy: false, role: false });
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<Role>("customer");
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState("");
  const [sysId, setSysId] = useState("");
  const [savedUsername, setSavedUsername] = useState("");
  const [savedEmail, setSavedEmail] = useState("");
  const [resendDone, setResendDone] = useState(false);
  const [resending, setResending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [f, setF] = useState({
    username: "", phone: "", email: "", password: "", confirm: "",
    name: "", shopName: "",
    addrState: "", addrCity: "", addrArea: "", addrDetail: "",
    yearsExp: "", range: "10km", serveMode: "both", cert: "",
    agree: false,
  });
  const [industryMain, setIndustryMain] = useState("");
  const [industrySubs, setIndustrySubs] = useState<string[]>([]);
  const [skillMain, setSkillMain] = useState<string[]>([]);
  const [skillSubs, setSkillSubs] = useState<string[]>([]);

  const up = (k: keyof typeof f, v: any) => setF(prev => ({ ...prev, [k]: v }));

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const r = ROLE_MAP[href];
      if (r) {
        e.preventDefault();
        setRole(r);
        setStep(1);
        setDone(false);
        setErr("");
        setOpen(true);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // 每步切换时滚回顶部
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [step]);

  const totalSteps = role === "customer" ? 3 : 4;
  const totalForms = totalSteps - 1;
  const cities = f.addrState ? (CITIES[f.addrState] || []) : [];
  const areas  = f.addrCity ? (AREAS[f.addrCity] || []) : [];

  // ===== 各步校验 =====
  const validateStep2 = () => {
    if (!f.username.trim() || !f.phone.trim() || !f.name.trim()) return c.err_required;
    if (!/^[a-zA-Z0-9_]{4,20}$/.test(f.username)) return c.err_username;
    if (!/^\+?60?1[0-9]{7,10}$/.test(f.phone.replace(/[\s-]/g, ""))) return c.err_phone;
    if (f.email && !/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(f.email)) return c.err_email;
    return "";
  };

  const validateStep3 = () => {
    if (!f.password || !f.confirm) return c.err_required;
    if (f.password.length < 8) return c.err_password;
    if (f.password !== f.confirm) return c.err_confirm;
    return "";
  };

  const next = () => {
    setErr("");
    if (step === 2) {
      const e = validateStep2();
      if (e) { setErr(e); return; }
    }
    if (step === 3) {
      const e = validateStep3();
      if (e) { setErr(e); return; }
    }
    setStep(step + 1);
  };

  const back = () => { setErr(""); setStep(Math.max(1, step - 1)); };

  const submit = async () => {
    setErr("");
    const e2 = validateStep2();
    if (e2) { setErr(e2); return; }
    const e3 = validateStep3();
    if (e3) { setErr(e3); return; }
    if (!f.agree) { setErr(c.err_terms); return; }

    setSubmitting(true);
    try {
      const body: any = {
        role,
        lang: l,
        username: f.username.trim(),
        contact: f.phone.replace(/[\s-]/g, ""),
        email: f.email.trim(),
        password: f.password,
        name: f.name.trim(),
        addrState: f.addrState, addrCity: f.addrCity, addrArea: f.addrArea, addrDetail: f.addrDetail,
        yearsExp: f.yearsExp, serviceRange: f.range, cert: f.cert,
      };
      if (role === "merchant") {
        body.shopName = f.shopName;
        body.industryMain = industryMain;
        body.industryTags = industrySubs;
        body.serveMode = f.serveMode;
      }
      if (role === "tech" || role === "artisan") {
        body.skillMain = skillMain;
        body.skillSub = skillSubs;
        if (role === "artisan") body.serveMode = f.serveMode;
      }

      const res = await fetch(`${API_BASE}/api/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErr(data.message || c.err_server);
        setSubmitting(false);
        return;
      }
      setSysId(data.sysId || "");
      setSavedUsername(f.username.trim());
      setSavedEmail(f.email.trim());
      setDone(true);
    } catch {
      setErr(c.err_server);
    } finally {
      setSubmitting(false);
    }
  };

  const toggleItem = (arr: string[], setArr: (v: string[]) => void, v: string) => {
    if (arr.includes(v)) setArr(arr.filter(x => x !== v));
    else setArr([...arr, v]);
  };

  const reset = () => {
    setF({
      username: "", phone: "", email: "", password: "", confirm: "",
      name: "", shopName: "",
      addrState: "", addrCity: "", addrArea: "", addrDetail: "",
      yearsExp: "", range: "10km", serveMode: "both", cert: "", agree: false,
    });
    setIndustryMain(""); setIndustrySubs([]); setSkillMain([]); setSkillSubs([]);
    setErr(""); setStep(1);
    setAgreeGate(false); setATerms(false); setAPrivacy(false); setARole(false);
  };

  const resend = async () => {
    if (!savedEmail) return;
    setResending(true);
    try {
      await fetch(`${API_BASE}/api/auth/resend-verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: savedEmail, lang: l }),
      });
      setResendDone(true);
    } catch {}
    setResending(false);
  };

  const close = () => { setOpen(false); reset(); };

  const introKey = ROLE_PREFIX[role];
  const gI = (k: string) => (c as any)["intro_" + introKey + "_" + k];
  const introBenefits: { t: string; s: string }[] = [1,2,3,4,5]
    .map(n => ({ t: gI("b" + n), s: gI("b" + n + "_sub") }))
    .filter(b => b.t) as { t: string; s: string }[];

  const ROLES: { key: Role; Icon: typeof User; label: string; sub: string }[] = [
    { key: "customer", Icon: User,     label: c.role_customer, sub: "找服务" },
    { key: "merchant", Icon: Store,    label: c.role_merchant, sub: "做生意" },
    { key: "tech",     Icon: Wrench,   label: c.role_tech,     sub: "靠技术" },
    { key: "artisan",  Icon: Sparkles, label: c.role_artisan,  sub: "靠手艺" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-md"
          onClick={close}
        >
          <motion.div
            initial={{ scale: 0.94, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94, y: 30 }}
            transition={{ type: "spring", damping: 26, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full max-h-[90vh] flex flex-col rounded-[28px] bg-white shadow-2xl overflow-hidden"
          >
            {/* ===== 顶部固定条 ===== */}
            <div className="relative shrink-0">
              {/* 成功页不显示进度条 */}
              {!done && (
                <>
                  {/* 福利横幅（只在第 1 步显示） */}
                  {step === 1 && (
                    <div className="bg-gradient-to-r from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Gift size={22} strokeWidth={2.4} />
                        <div className="flex-1">
                          <div className="font-black text-[15px] leading-tight">{c.welcome}</div>
                          <div className="text-[11px] text-white/85 mt-0.5">{c.welcome_sub}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 进度圆点 + 返回 + 关闭 */}
                  {step >= 2 && (
                    <div className="px-5 pt-4 pb-3 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={back}
                          className="w-9 h-9 rounded-xl hover:bg-gray-100 flex items-center justify-center text-gray-600 transition shrink-0"
                          aria-label="back"
                        >
                          <ArrowLeft size={18} strokeWidth={2.4} />
                        </button>
                        <div className="flex-1 flex items-center justify-center gap-2">
                          {Array.from({ length: totalForms }).map((_, i) => {
                            const n = i + 1;
                            const cur = step - 1;
                            const isDone = n < cur;
                            const isNow = n === cur;
                            return (
                              <div key={i} className="flex items-center gap-2">
                                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black transition-all duration-300 ${isDone ? "bg-[var(--vgo)] text-white" : isNow ? "bg-[var(--vgo)] text-white ring-4 ring-orange-500/20" : "bg-gray-100 text-gray-400"}`}>
                                  {isDone ? <CheckCircle2 size={13} strokeWidth={3} /> : n}
                                </div>
                                {i < totalForms - 1 && (
                                  <div className={`w-6 h-0.5 rounded-full ${isDone ? "bg-[var(--vgo)]" : "bg-gray-200"}`} />
                                )}
                              </div>
                            );
                          })}
                        </div>
                        <div className="w-9 h-9 shrink-0" />
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* 关闭按钮 */}
              <button
                onClick={close}
                aria-label="close"
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 backdrop-blur-sm flex items-center justify-center text-gray-600 transition z-10"
              >
                <X size={17} strokeWidth={2.5} />
              </button>
            </div>

            {/* ===== 内容滚动区 ===== */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-5">

              {/* ============ 成功页 ============ */}
                    {done && (
                                      <div className="text-center py-6">
                                        <motion.div
                                          initial={{ scale: 0 }} animate={{ scale: 1 }}
                                          transition={{ type: "spring", damping: 14, delay: 0.1 }}
                                          className="w-20 h-20 mx-auto rounded-full bg-green-50 flex items-center justify-center mb-5"
                                        >
                                          <CheckCircle2 size={42} className="text-green-500" strokeWidth={2.5} />
                                        </motion.div>
                                        <h3 className="text-2xl font-black text-gray-900 mb-2">📧 请查收邮件</h3>
                                        <p className="text-sm text-gray-500 mb-6">Check your inbox to verify your email</p>
                    
                                        <div className="my-6 p-5 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100">
                                          <div className="text-[11px] text-gray-500 mb-1.5">验证邮件已发送至</div>
                                          <div className="text-sm font-black text-[var(--vgo)] break-all">{savedEmail || "your email"}</div>
                                          {savedUsername && <div className="text-[11px] text-gray-400 mt-3">账号 ID：{savedUsername}</div>}
                                          {sysId && <div className="text-[10px] text-gray-400 mt-1">{sysId}</div>}
                                        </div>
                    
                                        <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 mb-5 text-left">
                                          <div className="text-sm font-black text-blue-700 mb-2">📮 下一步：</div>
                                          <ol className="text-xs text-blue-800 leading-relaxed space-y-1 pl-4 list-decimal">
                                            <li>打开你的邮箱</li>
                                            <li>点击邮件里的「验证我的邮箱」按钮</li>
                                            <li>验证成功后即可登录 App 领取福利</li>
                                          </ol>
                                        </div>
                    
                                        <div className="p-3 rounded-2xl bg-amber-50 border border-amber-100 mb-5 text-[11px] text-amber-800 leading-relaxed">
                                          ⚠️ 没收到？检查垃圾邮件箱，或{" "}
                                          <button onClick={resend} disabled={resending} className="underline font-black text-amber-900">
                                            {resending ? "发送中…" : resendDone ? "已重发 ✓" : "点击重发"}
                                          </button>
                                        </div>
                    
                                        <button
                                          onClick={close}
                                          className="w-full py-4 rounded-2xl bg-gradient-to-b from-[var(--vgo)] to-[var(--vgo-dark)] text-white font-black shadow-lg shadow-orange-500/30 hover:brightness-110 active:scale-[0.98] transition"
                                        >
                                          好的，我去验证
                                        </button>
                                      </div>
                                    )}

                {/* ============ Step 1: 介绍页 ============ */}
                {!done && step === 1 && !agreeGate && (
                  <motion.div
                    key={role}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={(_, info) => {
                      const allRoles: Role[] = ["customer", "merchant", "tech", "artisan"];
                      const idx = allRoles.indexOf(role);
                      if (info.offset.x < -50 && idx < allRoles.length - 1) setRole(allRoles[idx + 1]);
                      if (info.offset.x > 50 && idx > 0) setRole(allRoles[idx - 1]);
                    }}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.28 }}
                    className="-mx-6 -mt-5 touch-pan-y"
                  >
                    <div className="relative h-44">
                      <Image src={ROLE_IMG[role]} alt="" fill sizes="(max-width: 768px) 100vw, 480px" className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
                      <div className="absolute top-3 right-3 bg-amber-500 text-white text-[11px] font-black px-3 py-1 rounded-full shadow-lg">
                        {gI("limit")}
                      </div>
                      <div className="absolute bottom-4 left-6 right-6 text-white">
                        <div className="text-2xl font-black leading-tight">{gI("title")}</div>
                        <div className="text-[12px] text-white/90 mt-1">{gI("sub")}</div>
                      </div>
                    </div>

                    <div className="px-6 pt-5 space-y-3">
                      <div className="space-y-2">
                        {introBenefits.map((b, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-gray-50 border border-gray-100">
                            <div className="w-6 h-6 rounded-full bg-[var(--vgo)] flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle2 size={14} className="text-white" strokeWidth={3} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[13px] font-black text-gray-900">{b.t}</div>
                              <div className="text-[11px] text-gray-500 mt-0.5">{b.s}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 flex items-center justify-between">
                        <div className="text-[11px] text-gray-500 font-bold">VALUE</div>
                        <div className="text-xl font-black text-[var(--vgo)]">{gI("value")}</div>
                      </div>

                      <button
                        onClick={() => { setATerms(false); setAPrivacy(false); setARole(false); setAgreeGate(true); }}
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-b from-[var(--vgo)] to-[var(--vgo-dark)] text-white font-black shadow-lg shadow-orange-500/30 hover:brightness-110 active:scale-[0.98] transition"
                      >
                        {gI("cta")}
                        <ArrowRight size={18} strokeWidth={2.5} />
                      </button>

                      <div className="flex items-center justify-center gap-1.5 pt-1">
                        {(["customer","merchant","tech","artisan"] as Role[]).map((k) => (
                          <button key={k} onClick={() => setRole(k)}
                            className={`h-1.5 rounded-full transition-all ${role === k ? "w-5 bg-[var(--vgo)]" : "w-1.5 bg-gray-200"}`}
                            aria-label={k}
                          />
                        ))}
                      </div>
                      <div className="text-center text-[11px] text-gray-400 pb-2">
                        ← {gI("switch")} →
                        {(["customer","merchant","tech","artisan"] as Role[]).map((k, idx) => (
                          <span key={k}>
                            {idx > 0 && <span className="text-gray-300 mx-1">·</span>}
                            <button onClick={() => setRole(k)}
                              className={`underline ${role === k ? "text-[var(--vgo)] font-black" : "text-gray-400"}`}>
                              {k === "customer" ? c.role_customer : k === "merchant" ? c.role_merchant : k === "tech" ? c.role_tech : c.role_artisan}
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ============ 协议同意关卡 ============ */}
                {/* ============ 协议同意关卡 ============ */}
                {!done && agreeGate && (
                  <div className="-mx-6 -mt-5">
                    <div className="relative bg-gradient-to-br from-orange-100 via-amber-50 to-orange-50 px-6 pt-8 pb-7 overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[var(--vgo)] opacity-10 blur-2xl pointer-events-none" />
                      <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-amber-400 opacity-10 blur-2xl pointer-events-none" />
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--vgo)] to-[var(--vgo-dark)] flex items-center justify-center shadow-xl shadow-orange-500/40 mb-5">
                          <ShieldCheck size={32} className="text-white" strokeWidth={2.4} />
                        </div>
                        <h3 className="text-[26px] font-black text-gray-900 leading-[1.15] tracking-tight mb-2">{c.agree_gate_title}</h3>
                        <p className="text-[13px] text-gray-600 leading-relaxed">{c.agree_gate_sub}</p>
                      </div>
                    </div>

                    <div className="px-5 pt-5 space-y-4">
                      <div className="grid grid-cols-3 gap-2">
                        <button type="button" onClick={() => { setPreviewOpen("terms"); setScrolledEnd(p => ({...p, terms: false})); }}
                          className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ${aTerms ? "border-[var(--vgo)] bg-orange-50/70 shadow-md shadow-orange-500/10" : "border-gray-200 bg-white hover:border-orange-300"}`}>
                          <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-all ${aTerms ? "bg-[var(--vgo)]" : "border-2 border-gray-300 bg-white"}`}>
                            {aTerms && <CheckCircle2 size={14} className="text-white" strokeWidth={3} />}
                          </div>
                          <div className="text-[11px] font-black text-gray-900 leading-tight text-center">
                            {l === "zh" ? "服务条款" : l === "ms" ? "Terma" : "Terms"}
                          </div>
                        </button>

                        <button type="button" onClick={() => { setPreviewOpen("privacy"); setScrolledEnd(p => ({...p, privacy: false})); }}
                          className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ${aPrivacy ? "border-[var(--vgo)] bg-orange-50/70 shadow-md shadow-orange-500/10" : "border-gray-200 bg-white hover:border-orange-300"}`}>
                          <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-all ${aPrivacy ? "bg-[var(--vgo)]" : "border-2 border-gray-300 bg-white"}`}>
                            {aPrivacy && <CheckCircle2 size={14} className="text-white" strokeWidth={3} />}
                          </div>
                          <div className="text-[11px] font-black text-gray-900 leading-tight text-center">
                            {l === "zh" ? "隐私政策" : l === "ms" ? "Privasi" : "Privacy"}
                          </div>
                        </button>

                        <button type="button" onClick={() => { setPreviewOpen("role"); setScrolledEnd(p => ({...p, role: false})); }}
                          className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ${aRole ? "border-[var(--vgo)] bg-orange-50/70 shadow-md shadow-orange-500/10" : "border-gray-200 bg-white hover:border-orange-300"}`}>
                          <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-all ${aRole ? "bg-[var(--vgo)]" : "border-2 border-gray-300 bg-white"}`}>
                            {aRole && <CheckCircle2 size={14} className="text-white" strokeWidth={3} />}
                          </div>
                          <div className="text-[11px] font-black text-gray-900 leading-tight text-center">
                            {role === "customer" ? (l === "zh" ? "用户协议" : l === "ms" ? "Pengguna" : "User") :
                             role === "merchant" ? (l === "zh" ? "商家协议" : l === "ms" ? "Peniaga" : "Merchant") :
                             (l === "zh" ? "师傅协议" : l === "ms" ? "Tukang" : "Pro")}
                          </div>
                        </button>
                      </div>

                      <div className="text-center text-[12px] text-gray-500 leading-relaxed">
                        {l === "zh" ? "点击上方协议阅读全文，须滑到底部才能同意" :
                         l === "ms" ? "Ketik perjanjian untuk baca penuh, tatal ke bawah untuk setuju" :
                         "Tap an agreement above to read, scroll to bottom to agree"}
                      </div>

                      <div className="flex items-center justify-center gap-3 text-[10px] font-bold text-gray-400 tracking-wider">
                        <span>🔒 SSL</span>
                        <span className="opacity-40">·</span>
                        <span>✓ 法律有效</span>
                        <span className="opacity-40">·</span>
                        <span>PDPA 合规</span>
                      </div>

                      {err && (
                        <div className="p-3.5 rounded-2xl bg-red-50 border border-red-100 flex items-start gap-2.5">
                          <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                          <span className="text-[13px] font-bold text-red-600">{err}</span>
                        </div>
                      )}

                      <div className="flex gap-2 pb-4">
                        <button
                          onClick={() => { setAgreeGate(false); setErr(""); }}
                          className="w-1/3 py-5 rounded-2xl bg-gray-100 text-gray-700 text-[14px] font-black hover:bg-gray-200 active:scale-[0.98] transition"
                        >
                          {l === "zh" ? "不同意" : l === "ms" ? "Tidak Setuju" : "Decline"}
                        </button>
                        <button
                          onClick={() => {
                            setErr("");
                            if (!aTerms || !aPrivacy || !aRole) { setErr(c.err_agree_all); return; }
                            setAgreeGate(false);
                            setStep(2);
                          }}
                          disabled={!aTerms || !aPrivacy || !aRole}
                          className="flex-1 flex items-center justify-center gap-2 py-5 rounded-2xl bg-gradient-to-b from-[var(--vgo)] to-[var(--vgo-dark)] text-white text-[16px] font-black shadow-xl shadow-orange-500/40 hover:brightness-110 active:scale-[0.98] transition disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
                        >
                          {l === "zh" ? "同意并继续" : l === "ms" ? "Setuju & Teruskan" : "Agree & Continue"}
                          <ArrowRight size={19} strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ============ 协议预览弹窗 ============ */}
                {previewOpen && (
                  <div className="fixed inset-0 z-[300] flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-md" onClick={() => setPreviewOpen(null)}>
                    <div className="relative w-full max-w-lg h-[88vh] flex flex-col rounded-3xl bg-white shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                      <div className="shrink-0 px-5 py-4 border-b border-gray-100 flex items-center justify-between bg-white">
                        <div className="text-[15px] font-black text-gray-900">
                          {previewOpen === "terms" ? (l === "zh" ? "《服务条款》" : l === "ms" ? "Terma Perkhidmatan" : "Terms of Service") :
                           previewOpen === "privacy" ? (l === "zh" ? "《隐私政策》" : l === "ms" ? "Dasar Privasi" : "Privacy Policy") :
                           role === "customer" ? (l === "zh" ? "《用户服务协议》" : l === "ms" ? "Perjanjian Pengguna" : "User Agreement") :
                           role === "merchant" ? (l === "zh" ? "《商家合作协议》" : l === "ms" ? "Perjanjian Peniaga" : "Merchant Agreement") :
                           (l === "zh" ? "《师傅合作协议》" : l === "ms" ? "Perjanjian Tukang" : "Pro Agreement")}
                        </div>
                        <button onClick={() => setPreviewOpen(null)} className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500">
                          <X size={18} strokeWidth={2.5} />
                        </button>
                      </div>

                      <iframe
                        key={String(previewOpen) + role}
                        src={previewOpen === "terms" ? "/terms" : previewOpen === "privacy" ? "/privacy" : role === "customer" ? "/user-agreement" : role === "merchant" ? "/merchant-agreement" : "/pro-agreement"}
                        className="flex-1 w-full border-0"
                        onLoad={(e) => {
                          const win = e.currentTarget.contentWindow;
                          if (!win) return;
                          const key = previewOpen;
                          const check = () => {
                            try {
                              const doc = win.document;
                              if (!doc) return;
                              const bottom = win.scrollY + win.innerHeight;
                              const total = doc.documentElement.scrollHeight;
                              if (total > 0 && bottom >= total - 100) {
                                setScrolledEnd(p => ({ ...p, [key]: true }));
                              }
                            } catch (err) {}
                          };
                          win.addEventListener("scroll", check);
                          setTimeout(check, 800);
                        }}
                      />

                      <div className="shrink-0 p-4 border-t border-gray-100 bg-white">
                        <div className="flex gap-2">
                          <button
                            onClick={() => setPreviewOpen(null)}
                            className="w-1/3 py-4 rounded-2xl bg-gray-100 text-gray-700 font-black hover:bg-gray-200 active:scale-[0.98] transition"
                          >
                            {l === "zh" ? "取消" : l === "ms" ? "Batal" : "Cancel"}
                          </button>
                          <button
                            disabled={!scrolledEnd[previewOpen]}
                            onClick={() => {
                              if (previewOpen === "terms") setATerms(true);
                              if (previewOpen === "privacy") setAPrivacy(true);
                              if (previewOpen === "role") setARole(true);
                              setPreviewOpen(null);
                            }}
                            className="flex-1 py-4 rounded-2xl bg-gradient-to-b from-[var(--vgo)] to-[var(--vgo-dark)] text-white font-black shadow-lg shadow-orange-500/30 transition disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
                          >
                            {scrolledEnd[previewOpen]
                              ? (l === "zh" ? "我已阅读，同意" : l === "ms" ? "Saya setuju" : "I Agree")
                              : (l === "zh" ? "请滑到底部" : l === "ms" ? "Tatal ke bawah" : "Scroll to bottom")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ============ Step 2: 账号信息 ============ */}
                {!done && step === 2 && (
                  <div className="space-y-5">
                    <h3 className="text-lg font-black text-gray-900">{c.sec_account}</h3>

                    <Field label={c.username} required>
                      <input type="text" value={f.username} onChange={(e) => up("username", e.target.value)}
                             placeholder={c.username_ph} className={inputCls} autoComplete="off" autoFocus />
                    </Field>
                    <Field label={c.phone} required>
                      <input type="tel" value={f.phone} onChange={(e) => up("phone", e.target.value)}
                             placeholder={c.phone_ph} className={inputCls} autoComplete="off" />
                    </Field>
                    <Field label={c.email}>
                      <input type="email" value={f.email} onChange={(e) => up("email", e.target.value)}
                             placeholder={c.email_ph} className={inputCls} autoComplete="off" />
                    </Field>
                    <Field label={c.name} required>
                      <input type="text" value={f.name} onChange={(e) => up("name", e.target.value)}
                             placeholder={c.name_ph} className={inputCls} />
                    </Field>
                  </div>
                )}

                {/* ============ Step 3: 密码 ============ */}
                {!done && step === 3 && (
                  <div className="space-y-5">
                    <h3 className="text-lg font-black text-gray-900">{c.password}</h3>

                    <Field label={c.password} required>
                      <input type="password" value={f.password} onChange={(e) => up("password", e.target.value)}
                             placeholder={c.password_ph} className={inputCls} autoComplete="new-password" autoFocus />
                    </Field>
                    <Field label={c.confirm} required>
                      <input type="password" value={f.confirm} onChange={(e) => up("confirm", e.target.value)}
                             placeholder={c.confirm_ph} className={inputCls} autoComplete="new-password" />
                    </Field>
                  </div>
                )}

              {/* ============ Step 3：业务信息 ============ */}
                {!done && step === 4 && (
                <div className="space-y-5">
                  {/* 商家 */}
                  {role === "merchant" && (
                    <>
                      <h3 className="text-lg font-black text-gray-900">{c.sec_shop}</h3>
                      <Field label={c.shopName} required>
                        <input type="text" value={f.shopName} onChange={(e) => up("shopName", e.target.value)}
                               placeholder={c.shopName_ph} className={inputCls} autoFocus />
                      </Field>
                      <Field label={c.industry} required>
                        <div className="relative">
                          <select value={industryMain} onChange={(e) => { setIndustryMain(e.target.value); setIndustrySubs([]); }} className={selectCls}>
                            <option value="">—</option>
                            {INDUSTRIES.map((s) => <option key={s.value} value={s.value}>{pickLabel(s.label, l)}</option>)}
                          </select>
                          <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                      </Field>
                      {industryMain && (() => {
                        const ind = INDUSTRIES.find(x => x.value === industryMain);
                        if (!ind) return null;
                        return (
                          <Field label={c.industrySubs}>
                            <div className="flex flex-wrap gap-2">
                              {ind.subs.map((sb) => (
                                <button key={sb.value} type="button"
                                  onClick={() => toggleItem(industrySubs, setIndustrySubs, sb.value)}
                                  className={`px-3.5 py-2 rounded-full text-xs font-bold border transition ${
                                    industrySubs.includes(sb.value)
                                      ? "border-[var(--vgo)] bg-orange-50 text-[var(--vgo)]"
                                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                                  }`}>
                                  {pickLabel(sb.label, l)}
                                </button>
                              ))}
                            </div>
                          </Field>
                        );
                      })()}
                    </>
                  )}

                  {/* 地址（商家/技术员/手艺人） */}
                  {role !== "customer" && (
                    <>
                      <h3 className="text-lg font-black text-gray-900 pt-2">{c.sec_address}</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <Field label={c.state}>
                          <div className="relative">
                            <select value={f.addrState} onChange={(e) => { up("addrState", e.target.value); up("addrCity", ""); up("addrArea", ""); }} className={selectCls}>
                              <option value="">—</option>
                              {STATES.map((s) => <option key={s.value} value={s.value}>{pickLabel(s.label, l)}</option>)}
                            </select>
                            <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          </div>
                        </Field>
                        <Field label={c.city}>
                          <div className="relative">
                            <select value={f.addrCity} onChange={(e) => { up("addrCity", e.target.value); up("addrArea", ""); }} disabled={!f.addrState} className={selectCls + " disabled:opacity-50"}>
                              <option value="">—</option>
                              {cities.map((s) => <option key={s.value} value={s.value}>{pickLabel(s.label, l)}</option>)}
                            </select>
                            <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          </div>
                        </Field>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Field label={c.area}>
                          <div className="relative">
                            <select value={f.addrArea} onChange={(e) => up("addrArea", e.target.value)} disabled={!f.addrCity} className={selectCls + " disabled:opacity-50"}>
                              <option value="">—</option>
                              {areas.map((s) => <option key={s.value} value={s.value}>{pickLabel(s.label, l)}</option>)}
                            </select>
                            <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          </div>
                        </Field>
                        <Field label={c.detail}>
                          <input type="text" value={f.addrDetail} onChange={(e) => up("addrDetail", e.target.value)}
                                 placeholder={c.detail_ph} className={inputCls} />
                        </Field>
                      </div>
                    </>
                  )}

                  {/* 商家服务方式 */}
                  {role === "merchant" && (
                    <Field label={c.serveMode}>
                      <div className="grid grid-cols-3 gap-2">
                        {SERVE_MODES.map((m) => (
                          <button key={m.value} type="button"
                            onClick={() => up("serveMode", m.value)}
                            className={`py-3 rounded-2xl text-xs font-bold border transition ${
                              f.serveMode === m.value
                                ? "border-[var(--vgo)] bg-orange-50 text-[var(--vgo)]"
                                : "border-gray-200 text-gray-600"
                            }`}>
                            {pickLabel(m.label, l)}
                          </button>
                        ))}
                      </div>
                    </Field>
                  )}

                  {/* 技术员/手艺人：技能 */}
                  {(role === "tech" || role === "artisan") && (
                    <>
                      <h3 className="text-lg font-black text-gray-900 pt-2">{c.sec_skill}</h3>
                      <Field label={c.skillMain} required>
                        <div className="flex flex-wrap gap-2">
                          {(role === "tech" ? TECH_SKILLS : ARTISAN_SKILLS).map((sk) => (
                            <button key={sk.value} type="button"
                              onClick={() => toggleItem(skillMain, setSkillMain, sk.value)}
                              className={`px-3.5 py-2 rounded-full text-xs font-bold border transition ${
                                skillMain.includes(sk.value)
                                  ? "border-[var(--vgo)] bg-orange-50 text-[var(--vgo)]"
                                  : "border-gray-200 text-gray-600 hover:border-gray-300"
                              }`}>
                              {pickLabel(sk.label, l)}
                            </button>
                          ))}
                        </div>
                      </Field>
                      {skillMain.length > 0 && (
                        <Field label={c.skillSubs}>
                          <div className="space-y-3">
                            {(role === "tech" ? TECH_SKILLS : ARTISAN_SKILLS)
                              .filter(sk => skillMain.includes(sk.value))
                              .map(sk => (
                                <div key={sk.value}>
                                  <div className="text-[10px] font-bold text-gray-400 mb-1.5">{pickLabel(sk.label, l)}</div>
                                  <div className="flex flex-wrap gap-2">
                                    {sk.subs.map((sb) => (
                                      <button key={sb.value} type="button"
                                        onClick={() => toggleItem(skillSubs, setSkillSubs, sb.value)}
                                        className={`px-3 py-1.5 rounded-full text-[11px] font-semibold border transition ${
                                          skillSubs.includes(sb.value)
                                            ? "border-[var(--vgo)] bg-orange-50 text-[var(--vgo)]"
                                            : "border-gray-200 text-gray-500"
                                        }`}>
                                        {pickLabel(sb.label, l)}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              ))}
                          </div>
                        </Field>
                      )}
                      <div className="grid grid-cols-2 gap-3">
                        <Field label={c.yearsExp}>
                          <input type="number" value={f.yearsExp} onChange={(e) => up("yearsExp", e.target.value)}
                                 placeholder={c.yearsExp_ph} className={inputCls} />
                        </Field>
                        <Field label={c.range}>
                          <div className="relative">
                            <select value={f.range} onChange={(e) => up("range", e.target.value)} className={selectCls}>
                              {RANGES.map((r) => <option key={r.value} value={r.value}>{pickLabel(r.label, l)}</option>)}
                            </select>
                            <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          </div>
                        </Field>
                      </div>
                      {role === "artisan" && (
                        <Field label={c.serveMode} required>
                          <div className="grid grid-cols-3 gap-2">
                            {SERVE_MODES.map((m) => (
                              <button key={m.value} type="button"
                                onClick={() => up("serveMode", m.value)}
                                className={`py-3 rounded-2xl text-xs font-bold border transition ${
                                  f.serveMode === m.value
                                    ? "border-[var(--vgo)] bg-orange-50 text-[var(--vgo)]"
                                    : "border-gray-200 text-gray-600"
                                }`}>
                                {pickLabel(m.label, l)}
                              </button>
                            ))}
                          </div>
                        </Field>
                      )}
                      <Field label={c.cert}>
                        <input type="text" value={f.cert} onChange={(e) => up("cert", e.target.value)}
                               placeholder={c.cert_ph} className={inputCls} />
                      </Field>
                    </>
                  )}

                </div>
              )}

              {/* 条款（最后一步显示） */}
              {!done && step === totalSteps && (
                <label className="flex items-start gap-3 pt-2 mt-5 cursor-pointer">
                  <input type="checkbox" checked={f.agree} onChange={(e) => up("agree", e.target.checked)}
                         className="mt-0.5 w-4 h-4 accent-[var(--vgo)]" />
                  <span className="text-[11px] text-gray-600 leading-relaxed">
                    {c.agree} <a href="/terms" className="text-[var(--vgo)] underline">{c.terms}</a> {c.and} <a href="/privacy" className="text-[var(--vgo)] underline">{c.privacy}</a>
                  </span>
                </label>
              )}

              {/* ============ 错误提示 ============ */}
              {!done && err && (
                <div className="mt-4 p-3 rounded-2xl bg-red-50 border border-red-100 flex items-start gap-2">
                  <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-red-600">{err}</span>
                </div>
              )}
            </div>

            {/* ===== 底部固定按钮（拇指区） ===== */}
            {!done && step >= 2 && !agreeGate && (
              <div className="shrink-0 px-6 py-4 border-t border-gray-100 bg-white pb-[max(1rem,env(safe-area-inset-bottom))]">
                {step < totalSteps ? (
                  <button
                    onClick={next}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-b from-[var(--vgo)] to-[var(--vgo-dark)] text-white font-black shadow-lg shadow-orange-500/30 hover:brightness-110 active:scale-[0.98] transition"
                  >
                    下一步
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </button>
                ) : (
                  <button
                    onClick={submit}
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-b from-[var(--vgo)] to-[var(--vgo-dark)] text-white font-black shadow-lg shadow-orange-500/30 hover:brightness-110 active:scale-[0.98] transition disabled:opacity-50"
                  >
                    {submitting ? <Loader2 size={20} className="animate-spin" /> : <>{c.submit} <ArrowRight size={18} strokeWidth={2.5} /></>}
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
