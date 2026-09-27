"use client";
import { useSearchParams, Suspense } from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

function Inner() {
  const sp = useSearchParams();
  const e = sp.get("e") || "unknown";
  const msgs: Record<string,string> = {
    missing: "验证链接不完整 · Missing verification token",
    invalid: "链接无效，可能已被使用 · Invalid or used link",
    expired: "链接已过期（24 小时有效）· Link expired (valid 24h)",
    unknown: "验证失败，请重试 · Verification failed",
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-red-50 flex items-center justify-center mb-5">
          <AlertCircle size={44} className="text-red-500" strokeWidth={2.5} />
        </div>
        <h1 className="text-2xl font-black text-gray-900 mb-2">验证失败</h1>
        <p className="text-sm text-gray-600 mb-6">{msgs[e] || msgs.unknown}</p>
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100 mb-6 text-xs text-amber-800 leading-relaxed">
          你可以回到官网重新注册或联系我们重发验证邮件<br/>
          support.vgo@gmail.com · WhatsApp +601172691788
        </div>
        <Link href="/" className="block w-full py-4 rounded-2xl bg-gradient-to-b from-[var(--vgo)] to-[var(--vgo-dark)] text-white font-black shadow-lg shadow-orange-500/30">返回首页 · Back to Home</Link>
      </div>
    </div>
  );
}
export default function VerifyFailed() { return <Suspense><Inner /></Suspense>; }
