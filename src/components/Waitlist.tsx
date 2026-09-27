"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, User, Store, Wrench, CheckCircle2, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://vgo.abrdns.com";

type Role = "customer" | "merchant" | "tech";

const C = {
  zh: {
    title: "抢先注册",
    desc: "留下联系方式，上线时第一时间通知你",
    role_label: "你是",
    roles: { customer: "客户", merchant: "商家", tech: "师傅" },
    name_label: "姓名", name_ph: "怎么称呼你",
    contact_label: "手机 / 邮箱", contact_ph: "手机号或邮箱",
    city_label: "城市", city_ph: "你在哪个城市",
    submit: "提交注册",
    thanks_title: "注册成功！",
    thanks_desc: "我们已经收到你的信息。上线后第一时间联系你。",
    close: "关闭",
  },
  en: {
    title: "Join the Waitlist",
    desc: "Leave your contact, be the first to know when we launch",
    role_label: "I am a",
    roles: { customer: "Customer", merchant: "Merchant", tech: "Pro" },
    name_label: "Name", name_ph: "Your name",
    contact_label: "Phone / Email", contact_ph: "Phone or email",
    city_label: "City", city_ph: "Which city are you in",
    submit: "Register Now",
    thanks_title: "You're in!",
    thanks_desc: "We've got your info. We'll reach out the moment we launch.",
    close: "Close",
  },
  ms: {
    title: "Sertai Senarai Menunggu",
    desc: "Tinggalkan maklumat, kami maklumkan sebaik dilancarkan",
    role_label: "Saya seorang",
    roles: { customer: "Pelanggan", merchant: "Peniaga", tech: "Tukang" },
    name_label: "Nama", name_ph: "Nama anda",
    contact_label: "Telefon / E-mel", contact_ph: "Telefon atau e-mel",
    city_label: "Bandar", city_ph: "Anda di bandar mana",
    submit: "Daftar Sekarang",
    thanks_title: "Berjaya!",
    thanks_desc: "Kami sudah terima maklumat anda. Akan hubungi sebaik dilancarkan.",
    close: "Tutup",
  },
} as const;

const ROLE_MAP: Record<string, Role> = {
  "#download": "customer",
  "#merchant": "merchant",
  "#technician": "tech",
};

export default function Waitlist() {
  const { lang } = useLang();
  const c = C[lang] ?? C.zh;
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState<Role>("customer");
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");

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
        setOpen(true);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState("");

  const submit = async () => {
    if (!name.trim() || !contact.trim()) return;
    setSubmitting(true);
    setErr("");
    try {
      const res = await fetch(`${API_BASE}/api/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, city, role }),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      setDone(true);
    } catch (e: any) {
      setErr(lang === "zh" ? "提交失败，请稍后重试或直接联系 " : (lang === "ms" ? "Gagal. Cuba lagi atau hubungi " : "Failed. Try again or contact ") + "jason52013141018@gmail.com");
    } finally {
      setSubmitting(false);
    }
  };

  const ROLES: { key: Role; Icon: typeof User }[] = [
    { key: "customer", Icon: User },
    { key: "merchant", Icon: Store },
    { key: "tech", Icon: Wrench },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-5 bg-black/60 backdrop-blur-sm overflow-y-auto"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full my-8 p-7 rounded-3xl bg-white shadow-2xl"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="close"
              className="absolute top-3 right-3 w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 transition"
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            {done ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-green-50 flex items-center justify-center mb-5">
                  <CheckCircle2 size={32} className="text-green-500" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">{c.thanks_title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{c.thanks_desc}</p>
                <button
                  onClick={() => setOpen(false)}
                  className="px-7 py-3 rounded-xl bg-[var(--vgo)] text-white font-bold shadow-lg shadow-orange-500/30 hover:brightness-110 active:scale-95 transition"
                >
                  {c.close}
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-black text-gray-900 mb-1.5">{c.title}</h3>
                <p className="text-sm text-gray-500 mb-6">{c.desc}</p>

                <div className="mb-5">
                  <label className="block text-xs font-bold text-gray-700 mb-2">{c.role_label}</label>
                  <div className="grid grid-cols-3 gap-2">
                    {ROLES.map((r) => (
                      <button
                        key={r.key}
                        onClick={() => setRole(r.key)}
                        className={`flex flex-col items-center gap-1.5 py-3 rounded-xl border transition ${
                          role === r.key
                            ? "border-[var(--vgo)] bg-orange-50 text-[var(--vgo)]"
                            : "border-gray-200 text-gray-500 hover:border-gray-300"
                        }`}
                      >
                        <r.Icon size={20} strokeWidth={2.2} />
                        <span className="text-xs font-bold">{c.roles[r.key]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">{c.name_label}</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={c.name_ph}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--vgo)] focus:outline-none transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">{c.contact_label}</label>
                    <input
                      type="text"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder={c.contact_ph}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--vgo)] focus:outline-none transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">{c.city_label}</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder={c.city_ph}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--vgo)] focus:outline-none transition text-sm"
                    />
                  </div>
                </div>

                {err && (
                  <p className="mt-4 text-xs text-red-500 text-center leading-relaxed">{err}</p>
                )}
                <button
                  onClick={submit}
                  disabled={!name.trim() || !contact.trim() || submitting}
                  className="mt-6 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-b from-[var(--vgo)] to-[var(--vgo-dark)] text-white font-bold shadow-lg shadow-orange-500/30 hover:brightness-110 active:scale-95 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {submitting ? "..." : c.submit}
                  {!submitting && <ArrowRight size={16} strokeWidth={2.5} />}
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
