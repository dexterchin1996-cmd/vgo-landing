"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, User, Store, Wrench, Sparkles, CheckCircle2, ArrowRight, Loader2, ChevronDown, AlertCircle } from "lucide-react";
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

const inputCls = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--vgo)] focus:outline-none transition text-sm";
const selectCls = inputCls + " appearance-none bg-white pr-10";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-bold text-gray-700 mb-1.5">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

function Section({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 mt-5 mb-3 first:mt-0">
      <div className="w-1 h-3.5 bg-[var(--vgo)] rounded-full" />
      <span className="text-xs font-black text-gray-800 tracking-wide uppercase">{title}</span>
    </div>
  );
}

export default function Waitlist() {
  const { lang } = useLang();
  const l = (lang as Lang) || "en";
  const c = T[l] ?? T.en;

  const [open, setOpen] = useState(false);
  const [role, setRole] = useState<Role>("customer");
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState("");
  const [sysId, setSysId] = useState("");
  const [savedUsername, setSavedUsername] = useState("");

  // 表单状态
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

  // 全局点击拦截
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const r = ROLE_MAP[href];
      if (r) {
        e.preventDefault();
        setRole(r);
        setDone(false);
        setErr("");
        setOpen(true);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const reset = () => {
    setF({
      username: "", phone: "", email: "", password: "", confirm: "",
      name: "", shopName: "",
      addrState: "", addrCity: "", addrArea: "", addrDetail: "",
      yearsExp: "", range: "10km", serveMode: "both", cert: "",
      agree: false,
    });
    setIndustryMain(""); setIndustrySubs([]); setSkillMain([]); setSkillSubs([]);
    setErr("");
  };

  // 联动
  const cities = f.addrState ? (CITIES[f.addrState] || []) : [];
  const areas  = f.addrCity ? (AREAS[f.addrCity] || []) : [];

  const submit = async () => {
    setErr("");
    // 校验
    if (!f.username.trim() || !f.phone.trim() || !f.password || !f.name.trim()) {
      setErr(c.err_required); return;
    }
    if (!/^[a-zA-Z0-9_]{4,20}$/.test(f.username)) { setErr(c.err_username); return; }
    if (!/^\+?60?1[0-9]{7,10}$/.test(f.phone.replace(/[\s-]/g, ""))) { setErr(c.err_phone); return; }
    if (f.email && !/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(f.email)) { setErr(c.err_email); return; }
    if (f.password.length < 8) { setErr(c.err_password); return; }
    if (f.password !== f.confirm) { setErr(c.err_confirm); return; }
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
        if (data.error === "USERNAME_TAKEN" || data.error === "PHONE_TAKEN" || data.error === "EMAIL_TAKEN") {
          setErr(data.message || c.err_taken);
        } else {
          setErr(data.message || c.err_server);
        }
        setSubmitting(false);
        return;
      }
      setSysId(data.sysId || "");
      setSavedUsername(f.username.trim());
      setDone(true);
    } catch (e) {
      setErr(c.err_server);
    } finally {
      setSubmitting(false);
    }
  };

  const toggleItem = (arr: string[], setArr: (v: string[]) => void, v: string) => {
    if (arr.includes(v)) setArr(arr.filter(x => x !== v));
    else setArr([...arr, v]);
  };

  const ROLES: { key: Role; Icon: typeof User; label: string }[] = [
    { key: "customer", Icon: User,     label: c.role_customer },
    { key: "merchant", Icon: Store,    label: c.role_merchant },
    { key: "tech",     Icon: Wrench,   label: c.role_tech },
    { key: "artisan",  Icon: Sparkles, label: c.role_artisan },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-start md:items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm overflow-y-auto"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full my-4 p-6 sm:p-7 rounded-3xl bg-white shadow-2xl"
          >
            <button
              onClick={() => { setOpen(false); reset(); }}
              aria-label="close"
              className="absolute top-3 right-3 w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 transition z-10"
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            {done ? (
              /* ===== 成功页 ===== */
              <div className="text-center py-6">
                <motion.div
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15 }}
                  className="w-20 h-20 mx-auto rounded-full bg-green-50 flex items-center justify-center mb-5"
                >
                  <CheckCircle2 size={40} className="text-green-500" strokeWidth={2.5} />
                </motion.div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">{c.success_title}</h3>

                <div className="my-5 p-4 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100">
                  <div className="text-xs text-gray-500 mb-1">{c.success_sub}</div>
                  <div className="text-2xl font-black text-[var(--vgo)] tracking-wide">{savedUsername}</div>
                  {sysId && <div className="text-[10px] text-gray-400 mt-1">{sysId}</div>}
                  <div className="text-xs text-gray-500 mt-3">{c.success_keep}</div>
                </div>

                <div className="p-4 rounded-2xl bg-green-50 border border-green-100 mb-4">
                  <div className="text-sm font-bold text-green-700">{c.success_bonus}</div>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed mb-5">{c.success_next}</p>

                <button
                  onClick={() => { setOpen(false); reset(); }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-b from-[var(--vgo)] to-[var(--vgo-dark)] text-white font-bold shadow-lg shadow-orange-500/30 hover:brightness-110 active:scale-95 transition"
                >
                  {c.ok}
                </button>
              </div>
            ) : (
              /* ===== 表单 ===== */
              <>
                {/* 顶部福利横幅 */}
                <div className="mb-5 p-4 rounded-2xl bg-gradient-to-r from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white shadow-lg shadow-orange-500/30">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">🎁</span>
                    <div className="flex-1">
                      <div className="font-black text-base leading-tight">{c.welcome}</div>
                      <div className="text-[11px] text-white/85 mt-0.5">{c.welcome_sub}</div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-black text-gray-900 mb-4">{c.title}</h3>

                {/* 角色选择 */}
                <div className="mb-5">
                  <label className="block text-xs font-bold text-gray-700 mb-2">{c.role_label}</label>
                  <div className="grid grid-cols-4 gap-2">
                    {ROLES.map((r) => (
                      <button
                        key={r.key}
                        onClick={() => setRole(r.key)}
                        className={`flex flex-col items-center gap-1.5 py-3 rounded-xl border-2 transition ${
                          role === r.key
                            ? "border-[var(--vgo)] bg-orange-50 text-[var(--vgo)]"
                            : "border-gray-100 text-gray-500 hover:border-gray-200"
                        }`}
                      >
                        <r.Icon size={20} strokeWidth={2.2} />
                        <span className="text-[10px] font-bold">{r.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 账号信息 */}
                <Section title={c.sec_account} />
                <div className="space-y-3.5">
                  <Field label={c.username} required>
                    <input type="text" value={f.username} onChange={(e) => up("username", e.target.value)}
                           placeholder={c.username_ph} className={inputCls} autoComplete="off" />
                  </Field>
                  <Field label={c.phone} required>
                    <input type="tel" value={f.phone} onChange={(e) => up("phone", e.target.value)}
                           placeholder={c.phone_ph} className={inputCls} autoComplete="off" />
                  </Field>
                  <Field label={c.email}>
                    <input type="email" value={f.email} onChange={(e) => up("email", e.target.value)}
                           placeholder={c.email_ph} className={inputCls} autoComplete="off" />
                  </Field>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label={c.password} required>
                      <input type="password" value={f.password} onChange={(e) => up("password", e.target.value)}
                             placeholder={c.password_ph} className={inputCls} autoComplete="new-password" />
                    </Field>
                    <Field label={c.confirm} required>
                      <input type="password" value={f.confirm} onChange={(e) => up("confirm", e.target.value)}
                             placeholder={c.confirm_ph} className={inputCls} autoComplete="new-password" />
                    </Field>
                  </div>
                </div>

                {/* 基本信息 */}
                <Section title={c.sec_info} />
                <div className="space-y-3.5">
                  <Field label={c.name} required>
                    <input type="text" value={f.name} onChange={(e) => up("name", e.target.value)}
                           placeholder={c.name_ph} className={inputCls} />
                  </Field>
                  {role === "merchant" && (
                    <Field label={c.shopName} required>
                      <input type="text" value={f.shopName} onChange={(e) => up("shopName", e.target.value)}
                             placeholder={c.shopName_ph} className={inputCls} />
                    </Field>
                  )}
                </div>

                {/* 地址（客户不要） */}
                {role !== "customer" && (
                  <>
                    <Section title={c.sec_address} />
                    <div className="space-y-3.5">
                      <div className="grid grid-cols-2 gap-3">
                        <Field label={c.state}>
                          <div className="relative">
                            <select value={f.addrState} onChange={(e) => { up("addrState", e.target.value); up("addrCity", ""); up("addrArea", ""); }} className={selectCls}>
                              <option value="">—</option>
                              {STATES.map((s) => <option key={s.value} value={s.value}>{pickLabel(s.label, l)}</option>)}
                            </select>
                            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          </div>
                        </Field>
                        <Field label={c.city}>
                          <div className="relative">
                            <select value={f.addrCity} onChange={(e) => { up("addrCity", e.target.value); up("addrArea", ""); }} disabled={!f.addrState} className={selectCls + " disabled:opacity-50"}>
                              <option value="">—</option>
                              {cities.map((s) => <option key={s.value} value={s.value}>{pickLabel(s.label, l)}</option>)}
                            </select>
                            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
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
                            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          </div>
                        </Field>
                        <Field label={c.detail}>
                          <input type="text" value={f.addrDetail} onChange={(e) => up("addrDetail", e.target.value)}
                                 placeholder={c.detail_ph} className={inputCls} />
                        </Field>
                      </div>
                    </div>
                  </>
                )}

                {/* 商家：行业 + 子类 + 服务方式 */}
                {role === "merchant" && (
                  <>
                    <Section title={c.sec_shop} />
                    <div className="space-y-3.5">
                      <Field label={c.industry} required>
                        <div className="relative">
                          <select value={industryMain} onChange={(e) => { setIndustryMain(e.target.value); setIndustrySubs([]); }} className={selectCls}>
                            <option value="">—</option>
                            {INDUSTRIES.map((s) => <option key={s.value} value={s.value}>{pickLabel(s.label, l)}</option>)}
                          </select>
                          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
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
                                  className={`px-3 py-1.5 rounded-full text-xs font-bold border transition ${
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
                      <Field label={c.serveMode}>
                        <div className="grid grid-cols-3 gap-2">
                          {SERVE_MODES.map((m) => (
                            <button key={m.value} type="button"
                              onClick={() => up("serveMode", m.value)}
                              className={`py-2.5 rounded-xl text-xs font-bold border transition ${
                                f.serveMode === m.value
                                  ? "border-[var(--vgo)] bg-orange-50 text-[var(--vgo)]"
                                  : "border-gray-200 text-gray-600"
                              }`}>
                              {pickLabel(m.label, l)}
                            </button>
                          ))}
                        </div>
                      </Field>
                    </div>
                  </>
                )}

                {/* 技术员 / 手艺人：技能 */}
                {(role === "tech" || role === "artisan") && (
                  <>
                    <Section title={c.sec_skill} />
                    <div className="space-y-3.5">
                      <Field label={c.skillMain} required>
                        <div className="flex flex-wrap gap-2">
                          {(role === "tech" ? TECH_SKILLS : ARTISAN_SKILLS).map((sk) => (
                            <button key={sk.value} type="button"
                              onClick={() => toggleItem(skillMain, setSkillMain, sk.value)}
                              className={`px-3 py-1.5 rounded-full text-xs font-bold border transition ${
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
                                            : "border-gray-200 text-gray-500 hover:border-gray-300"
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
                            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          </div>
                        </Field>
                      </div>
                      {role === "artisan" && (
                        <Field label={c.serveMode} required>
                          <div className="grid grid-cols-3 gap-2">
                            {SERVE_MODES.map((m) => (
                              <button key={m.value} type="button"
                                onClick={() => up("serveMode", m.value)}
                                className={`py-2.5 rounded-xl text-xs font-bold border transition ${
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
                    </div>
                  </>
                )}

                {/* 条款同意 */}
                <label className="flex items-start gap-2.5 mt-5 cursor-pointer">
                  <input type="checkbox" checked={f.agree} onChange={(e) => up("agree", e.target.checked)}
                         className="mt-0.5 w-4 h-4 accent-[var(--vgo)]" />
                  <span className="text-[11px] text-gray-600 leading-relaxed">
                    {c.agree} <a href="/terms" className="text-[var(--vgo)] underline">{c.terms}</a> {c.and} <a href="/privacy" className="text-[var(--vgo)] underline">{c.privacy}</a>
                  </span>
                </label>

                {/* 错误 */}
                {err && (
                  <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-100 flex items-start gap-2">
                    <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-red-600">{err}</span>
                  </div>
                )}

                {/* 提交 */}
                <button
                  onClick={submit}
                  disabled={submitting}
                  className="mt-5 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-b from-[var(--vgo)] to-[var(--vgo-dark)] text-white font-bold shadow-lg shadow-orange-500/30 hover:brightness-110 active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? <Loader2 size={18} className="animate-spin" /> : <>{c.submit} <ArrowRight size={16} strokeWidth={2.5} /></>}
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
