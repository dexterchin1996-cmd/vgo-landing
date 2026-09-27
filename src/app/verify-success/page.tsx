"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

function Inner() {
  const sp = useSearchParams();
  const u = sp.get("u") || "";
  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-green-50 flex items-center justify-center mb-5">
          <CheckCircle2 size={44} className="text-green-500" strokeWidth={2.5} />
        </div>
        <h1 className="text-2xl font-black text-gray-900 mb-2">邮箱验证成功</h1>
        <p className="text-sm text-gray-500 mb-6">Your email has been verified · E-mel anda telah disahkan</p>
        {u && (
          <div className="p-4 rounded-2xl bg-gray-50 mb-6">
            <div className="text-[11px] text-gray-500 mb-1">你的账号 ID · Your Account ID</div>
            <div className="text-xl font-black text-[var(--vgo)] break-all">{u}</div>
          </div>
        )}
        <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100 mb-6 text-sm text-orange-800 font-bold">
          🎁 你的专属福利已激活
        </div>
        <p className="text-xs text-gray-500 leading-relaxed mb-6">现在可以下载 VGO App 登录并使用服务了<br/>You can now download the VGO App and sign in</p>
        <Link href="/" className="block w-full py-4 rounded-2xl bg-gradient-to-b from-[var(--vgo)] to-[var(--vgo-dark)] text-white font-black shadow-lg shadow-orange-500/30">返回首页 · Back to Home</Link>
      </div>
    </div>
  );
}
export default function VerifySuccess() { return <Suspense><Inner /></Suspense>; }
