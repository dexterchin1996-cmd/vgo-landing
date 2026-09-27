"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X, User, Store, Wrench, Sparkles, CheckCircle2, ArrowRight, ArrowLeft,
  Loader2, ChevronDown, AlertCircle, Gift,
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
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<Role>("customer");
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState("");
  const [sysId, setSysId] = useState("");
  const [savedUsername, setSavedUsername] = useState("");
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
        setStep(2);
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

  const totalSteps = role === "customer" ? 2 : 3;
  const cities = f.addrState ? (CITIES[f.addrState] || []) : [];
  const areas  = f.addrCity ? (AREAS[f.addrCity] || []) : [];

  // ===== 各步校验 =====
  const validateStep2 = () => {
    if (!f.username.trim() || !f.phone.trim() || !f.password || !f.name.trim()) return c.err_required;
    if (!/^[a-zA-Z0-9_]{4,20}$/.test(f.username)) return c.err_username;
    if (!/^\+?60?1[0-9]{7,10}$/.test(f.phone.replace(/[\s-]/g, ""))) return c.err_phone;
    if (f.email && !/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(f.email)) return c.err_email;
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
    setStep(step + 1);
  };

  const back = () => { setErr(""); setStep(Math.max(1, step - 1)); };

  const submit = async () => {
    setErr("");
    if (!f.agree) { setErr(c.err_terms); return; }

    setSubmitting(true);
    try {
      const body: any = {
        role,
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
  };

  const close = () => { setOpen(false); reset(); };

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

                  {/* 进度条 + 返回 + 关闭 */}
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
                        <div className="flex-1 flex items-center gap-1.5">
                          {Array.from({ length: totalSteps }).map((_, i) => (
                            <div
                              key={i}
                              className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                                i + 1 <= step - 1 ? "bg-[var(--vgo)]" : "bg-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-[11px] font-bold text-gray-400 shrink-0">
                          {step - 1}/{totalSteps}
                        </span>
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
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{c.success_title}</h3>

                  <div className="my-6 p-5 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100">
                    <div className="text-[11px] text-gray-500 mb-1.5">{c.success_sub}</div>
                    <div className="text-2xl font-black text-[var(--vgo)] tracking-wide break-all">{savedUsername}</div>
                    {sysId && <div className="text-[10px] text-gray-400 mt-1">{sysId}</div>}
                    <div className="text-[11px] text-gray-500 mt-3">{c.success_keep}</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-green-50 border border-green-100 mb-5">
                    <div className="text-sm font-bold text-green-700">{c.success_bonus}</div>
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed mb-6">{c.success_next}</p>

                  <button
                    onClick={close}
                    className="w-full py-4 rounded-2xl bg-gradient-to-b from-[var(--vgo)] to-[var(--vgo-dark)] text-white font-bold shadow-lg shadow-orange-500/30 hover:brightness-110 active:scale-[0.98] transition"
                  >
                    {c.ok}
                  </button>
                </div>
              )}

              {/* ============ Step 1：选角色 ============ */}
              {!done && step === 1 && (
                <div>
                  <h3 className="text-2xl font-black text-gray-900 text-center mb-2">{c.title}</h3>
                  <p className="text-center text-sm text-gray-500 mb-8">{c.role_label}</p>

                  <div className="grid grid-cols-2 gap-3">
                    {ROLES.map((r) => (
                      <button
                        key={r.key}
                        onClick={() => setRole(r.key)}
                        className={`relative flex flex-col items-center gap-2 py-6 rounded-3xl border-2 transition-all ${
                          role === r.key
                            ? "border-[var(--vgo)] bg-orange-50 shadow-lg shadow-orange-500/10"
                            : "border-gray-100 bg-white hover:border-gray-200"
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition ${
                          role === r.key ? "bg-[var(--vgo)] text-white" : "bg-gray-100 text-gray-500"
                        }`}>
                          <r.Icon size={24} strokeWidth={2.2} />
                        </div>
                        <div className={`font-black text-sm ${role === r.key ? "text-[var(--vgo)]" : "text-gray-900"}`}>
                          {r.label}
                        </div>
                        <div className="text-[10px] text-gray-400">{r.sub}</div>
                        {role === r.key && (
                          <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[var(--vgo)] flex items-center justify-center">
                            <CheckCircle2 size={12} className="text-white" strokeWidth={3} />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ============ Step 2：账号 ============ */}
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
                  <Field label={c.password} required>
                    <input type="password" value={f.password} onChange={(e) => up("password", e.target.value)}
                           placeholder={c.password_ph} className={inputCls} autoComplete="new-password" />
                  </Field>
                  <Field label={c.confirm} required>
                    <input type="password" value={f.confirm} onChange={(e) => up("confirm", e.target.value)}
                           placeholder={c.confirm_ph} className={inputCls} autoComplete="new-password" />
                  </Field>
                  <Field label={c.name} required>
                    <input type="text" value={f.name} onChange={(e) => up("name", e.target.value)}
                           placeholder={c.name_ph} className={inputCls} />
                  </Field>
                </div>
              )}

              {/* ============ Step 3：业务信息 ============ */}
              {!done && step === 3 && (
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

                  {/* 条款 */}
                  <label className="flex items-start gap-3 pt-2 cursor-pointer">
                    <input type="checkbox" checked={f.agree} onChange={(e) => up("agree", e.target.checked)}
                           className="mt-0.5 w-4 h-4 accent-[var(--vgo)]" />
                    <span className="text-[11px] text-gray-600 leading-relaxed">
                      {c.agree} <a href="/terms" className="text-[var(--vgo)] underline">{c.terms}</a> {c.and} <a href="/privacy" className="text-[var(--vgo)] underline">{c.privacy}</a>
                    </span>
                  </label>
                </div>
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
            {!done && (
              <div className="shrink-0 px-6 py-4 border-t border-gray-100 bg-white pb-[max(1rem,env(safe-area-inset-bottom))]">
                {step === 1 ? (
                  <button
                    onClick={() => setStep(2)}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-b from-[var(--vgo)] to-[var(--vgo-dark)] text-white font-black shadow-lg shadow-orange-500/30 hover:brightness-110 active:scale-[0.98] transition"
                  >
                    下一步
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </button>
                ) : step < totalSteps ? (
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
