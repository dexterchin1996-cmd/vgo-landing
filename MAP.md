This file is a merged representation of a subset of the codebase, containing specifically included files, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: src/**, package.json, next.config.js
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
src/
  app/
    about/
      layout.tsx
      page.tsx
    agent-agreement/
      layout.tsx
      page.tsx
    contact/
      layout.tsx
      page.tsx
    faq/
      layout.tsx
      page.tsx
    how-it-works/
      [role]/
        page.tsx
    ip-copyright/
      layout.tsx
      page.tsx
    merchant/
      layout.tsx
      page.tsx
    merchant-agreement/
      layout.tsx
      page.tsx
    offers/
      layout.tsx
      page.tsx
    partner/
      layout.tsx
      page.tsx
    privacy/
      layout.tsx
      page.tsx
    pro-agreement/
      layout.tsx
      page.tsx
    services/
      [id]/
        page.tsx
    technician/
      layout.tsx
      page.tsx
    terms/
      layout.tsx
      page.tsx
    user-agreement/
      layout.tsx
      page.tsx
    verify-failed/
      layout.tsx
      page.tsx
    verify-success/
      layout.tsx
      page.tsx
    globals.css
    icon.png
    layout.tsx
    loading.tsx
    not-found.tsx
    page.tsx
    robots.ts
    sitemap.ts
  components/
    AboutVGO.tsx
    AppLinks.tsx
    BackToTop.tsx
    ComingSoon.tsx
    CookieBanner.tsx
    Cooperation.tsx
    CoverageSection.tsx
    FAQ.tsx
    FeatureCards.tsx
    FinalCTA.tsx
    Footer.tsx
    Guarantees.tsx
    HowItWorks.tsx
    HowItWorksPage.tsx
    LangSwitcher.tsx
    LegalShell.tsx
    Merchant.tsx
    MerchantPage.tsx
    Navbar.tsx
    NewsTicker.tsx
    Notice.tsx
    PageShell.tsx
    PainPoints.tsx
    ParticleField.tsx
    Reveal.tsx
    Roles.tsx
    SceneShowcase.tsx
    ServiceDetailPage.tsx
    ServiceModal.tsx
    ShareButton.tsx
    SideDrawer.tsx
    TechnicianPage.tsx
    Testimonials.tsx
    Waitlist.tsx
  data/
    coverage.ts
    offers.ts
    services.ts
    waitlist.ts
  lib/
    i18n.tsx
next.config.js
package.json
```

# Files

## File: src/components/ParticleField.tsx
```typescript
"use client";
import { useEffect, useRef } from "react";

export default function ParticleField({ count = 120 }: { count?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0, w = 0, h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const ps = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2.5 + 0.8,
      a: Math.random() * 0.7 + 0.3,
      hue: 25 + Math.random() * 35,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of ps) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 8);
        g.addColorStop(0, `hsla(${p.hue}, 100%, 65%, ${p.a})`);
        g.addColorStop(1, `hsla(${p.hue}, 100%, 65%, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 8, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [count]);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
```

## File: src/app/about/layout.tsx
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于 VGO | V'GO",
  description: "了解 VGO 平台的故事、愿景与团队",
  openGraph: {
    title: "关于 VGO | V'GO",
    description: "了解 VGO 平台的故事、愿景与团队",
    url: "/about/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "关于 VGO | V'GO",
    description: "了解 VGO 平台的故事、愿景与团队",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
```

## File: src/app/agent-agreement/layout.tsx
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "代理协议 | V'GO",
  description: "VGO 代理合作协议",
  openGraph: {
    title: "代理协议 | V'GO",
    description: "VGO 代理合作协议",
    url: "/agent-agreement/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "代理协议 | V'GO",
    description: "VGO 代理合作协议",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
```

## File: src/app/contact/layout.tsx
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们 | V'GO",
  description: "联系 VGO 客服，随时为你服务",
  openGraph: {
    title: "联系我们 | V'GO",
    description: "联系 VGO 客服，随时为你服务",
    url: "/contact/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "联系我们 | V'GO",
    description: "联系 VGO 客服，随时为你服务",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
```

## File: src/app/faq/layout.tsx
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "常见问题 | V'GO",
  description: "VGO 平台常见问题解答",
  openGraph: {
    title: "常见问题 | V'GO",
    description: "VGO 平台常见问题解答",
    url: "/faq/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "常见问题 | V'GO",
    description: "VGO 平台常见问题解答",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
```

## File: src/app/how-it-works/[role]/page.tsx
```typescript
import { notFound } from "next/navigation";
import HowItWorksPage from "@/components/HowItWorksPage";

type Role = "customer" | "merchant" | "technician";
const VALID: Role[] = ["customer", "merchant", "technician"];

export function generateStaticParams() {
  return VALID.map((role) => ({ role }));
}

export const dynamicParams = false;

export default async function Page({ params }: { params: Promise<{ role: string }> }) {
  const { role } = await params;
  if (!VALID.includes(role as Role)) notFound();
  return <HowItWorksPage role={role as Role} />;
}
```

## File: src/app/ip-copyright/layout.tsx
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "知识产权 | V'GO",
  description: "VGO 知识产权与版权声明",
  openGraph: {
    title: "知识产权 | V'GO",
    description: "VGO 知识产权与版权声明",
    url: "/ip-copyright/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "知识产权 | V'GO",
    description: "VGO 知识产权与版权声明",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
```

## File: src/app/merchant/layout.tsx
```typescript
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "商家合作 | V'GO",
  description: "加入VGO平台，让全马客户找到你的店。免费入驻，订单直推，透明费率。",
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
```

## File: src/app/merchant/page.tsx
```typescript
import MerchantPage from "@/components/MerchantPage";
export default function Page() { return <MerchantPage />; }
```

## File: src/app/merchant-agreement/layout.tsx
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "商家协议 | V'GO",
  description: "VGO 商家入驻协议",
  openGraph: {
    title: "商家协议 | V'GO",
    description: "VGO 商家入驻协议",
    url: "/merchant-agreement/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "商家协议 | V'GO",
    description: "VGO 商家入驻协议",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
```

## File: src/app/offers/layout.tsx
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "优惠活动 | V'GO",
  description: "VGO 平台最新优惠与活动",
  openGraph: {
    title: "优惠活动 | V'GO",
    description: "VGO 平台最新优惠与活动",
    url: "/offers/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "优惠活动 | V'GO",
    description: "VGO 平台最新优惠与活动",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
```

## File: src/app/partner/layout.tsx
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "合作伙伴 | V'GO",
  description: "成为 VGO 的合作伙伴",
  openGraph: {
    title: "合作伙伴 | V'GO",
    description: "成为 VGO 的合作伙伴",
    url: "/partner/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "合作伙伴 | V'GO",
    description: "成为 VGO 的合作伙伴",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
```

## File: src/app/privacy/layout.tsx
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隐私政策 | V'GO",
  description: "VGO 平台隐私政策（PDPA 2024 合规）",
  openGraph: {
    title: "隐私政策 | V'GO",
    description: "VGO 平台隐私政策（PDPA 2024 合规）",
    url: "/privacy/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "隐私政策 | V'GO",
    description: "VGO 平台隐私政策（PDPA 2024 合规）",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
```

## File: src/app/pro-agreement/layout.tsx
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "师傅协议 | V'GO",
  description: "VGO 技术员服务协议",
  openGraph: {
    title: "师傅协议 | V'GO",
    description: "VGO 技术员服务协议",
    url: "/pro-agreement/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "师傅协议 | V'GO",
    description: "VGO 技术员服务协议",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
```

## File: src/app/services/[id]/page.tsx
```typescript
import { notFound } from "next/navigation";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { SERVICES } from "@/data/services";

const VALID_IDS = ["repair", "clean", "massage", "errand", "market", "jobs"] as const;
type ServiceId = typeof VALID_IDS[number];

export function generateStaticParams() {
  return VALID_IDS.map((id) => ({ id }));
}

export const dynamicParams = false;

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!VALID_IDS.includes(id as ServiceId)) notFound();
  return <ServiceDetailPage id={id as ServiceId} />;
}
```

## File: src/app/technician/layout.tsx
```typescript
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "师傅入驻 | V'GO",
  description: "加入VGO平台，就近派单，按单结算，自己排时间。手艺人的平台。",
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
```

## File: src/app/technician/page.tsx
```typescript
import TechnicianPage from "@/components/TechnicianPage";
export default function Page() { return <TechnicianPage />; }
```

## File: src/app/terms/layout.tsx
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "服务条款 | V'GO",
  description: "VGO 平台服务条款",
  openGraph: {
    title: "服务条款 | V'GO",
    description: "VGO 平台服务条款",
    url: "/terms/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "服务条款 | V'GO",
    description: "VGO 平台服务条款",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
```

## File: src/app/user-agreement/layout.tsx
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "用户协议 | V'GO",
  description: "VGO 用户使用协议",
  openGraph: {
    title: "用户协议 | V'GO",
    description: "VGO 用户使用协议",
    url: "/user-agreement/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "用户协议 | V'GO",
    description: "VGO 用户使用协议",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
```

## File: src/app/verify-failed/layout.tsx
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "验证失败 | V'GO",
  description: "邮箱验证失败",
  openGraph: {
    title: "验证失败 | V'GO",
    description: "邮箱验证失败",
    url: "/verify-failed/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "验证失败 | V'GO",
    description: "邮箱验证失败",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
```

## File: src/app/verify-success/layout.tsx
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "验证成功 | V'GO",
  description: "邮箱验证成功",
  openGraph: {
    title: "验证成功 | V'GO",
    description: "邮箱验证成功",
    url: "/verify-success/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "验证成功 | V'GO",
    description: "邮箱验证成功",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
```

## File: src/components/ComingSoon.tsx
```typescript
"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Rocket } from "lucide-react";
import { useLang } from "@/lib/i18n";

type Soon = "customer" | "merchant" | "tech" | "general";

export default function ComingSoon() {
  const { t } = useLang();
  const [type, setType] = useState<Soon | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      let kind: Soon | null = null;
      if (href === "#download") kind = "customer";
      else if (href === "#merchant") kind = "merchant";
      else if (href === "#technician") kind = "tech";
      else if (href === "#" || href === "") kind = "general";
      if (!kind) return;
      e.preventDefault();
      setType(kind);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    if (!type) return;
    const timer = setTimeout(() => setType(null), 5000);
    return () => clearTimeout(timer);
  }, [type]);

  const MESSAGES: Record<Soon, { title: string; desc: string }> = {
    customer: { title: t("soon_customer_title"), desc: t("soon_customer_desc") },
    merchant: { title: t("soon_merchant_title"), desc: t("soon_merchant_desc") },
    tech:     { title: t("soon_tech_title"),     desc: t("soon_tech_desc") },
    general:  { title: t("soon_general_title"),  desc: t("soon_general_desc") },
  };

  return (
    <AnimatePresence>
      {type && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-5 bg-black/60 backdrop-blur-sm"
          onClick={() => setType(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-sm w-full p-8 rounded-3xl bg-white shadow-2xl text-center"
          >
            <button
              onClick={() => setType(null)}
              aria-label="close"
              className="absolute top-3 right-3 w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 transition"
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#FF7A1F] to-[#E55A00] flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30">
              <Rocket size={28} className="text-white" />
            </div>

            <h3 className="text-xl font-black text-gray-900 mb-2">
              {MESSAGES[type].title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {MESSAGES[type].desc}
            </p>

            <button
              onClick={() => setType(null)}
              className="mt-6 w-full py-3 rounded-xl bg-gradient-to-b from-[#FF7A1F] to-[#E55A00] text-white font-bold shadow-lg shadow-orange-500/30 hover:brightness-110 active:scale-95 transition"
            >
              {t("soon_ok")}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

## File: src/components/CookieBanner.tsx
```typescript
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

const KEY = "vgo_cookie_consent_v1";

const TEXT = {
  zh: {
    text: "我们使用 Cookie 提升体验、分析流量。继续浏览代表你同意我们的",
    privacy: "隐私政策",
    accept: "同意",
    decline: "拒绝",
  },
  en: {
    text: "We use cookies to improve experience and analyze traffic. By continuing, you agree to our",
    privacy: "Privacy Policy",
    accept: "Accept",
    decline: "Decline",
  },
  ms: {
    text: "Kami menggunakan kuki untuk meningkatkan pengalaman dan menganalisis trafik. Dengan meneruskan, anda bersetuju dengan",
    privacy: "Dasar Privasi",
    accept: "Terima",
    decline: "Tolak",
  },
};

export default function CookieBanner() {
  const { lang } = useLang();
  const [show, setShow] = useState(false);
  const t = TEXT[lang as keyof typeof TEXT] || TEXT.zh;

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {}
  }, []);

  function choose(v: "accept" | "decline") {
    try { localStorage.setItem(KEY, v); } catch {}
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[80] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100 p-5">
      <p className="text-sm text-gray-600 leading-relaxed">
        {t.text}{" "}
        <Link href="/privacy" className="text-[#FF6600] font-semibold underline">
          {t.privacy}
        </Link>
        。
      </p>
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => choose("accept")}
          className="flex-1 bg-[#FF6600] text-white font-bold py-2.5 rounded-xl text-sm"
        >
          {t.accept}
        </button>
        <button
          onClick={() => choose("decline")}
          className="flex-1 bg-gray-100 text-gray-600 font-bold py-2.5 rounded-xl text-sm"
        >
          {t.decline}
        </button>
      </div>
    </div>
  );
}
```

## File: src/components/Reveal.tsx
```typescript
"use client";
/**
 * Copyright (c) 2026 Ventus Reflexology. All Rights Reserved.
 * 滚动揭示组件：进入视口时淡入上移
 */
import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  once = true,
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.7, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

## File: src/data/offers.ts
```typescript
export const OFFERS = {
  zh: {
    label: "限时福利", title: "三大角色专属福利", sub: "注册即享 · 限首批 1000 名",
    tab_customer: "客户", tab_merchant: "商家", tab_tech: "师傅",
    cta: "立即注册领取", note: "福利不可叠加，最终解释权归 V'GO 所有",
    customer_title: "RM80 上门检查券", customer_desc: "注册即送，首次下单立减 RM80",
    customer_p: ["注册即到账","首单立减 RM80","全马通用","限首批 1000 名"],
    merchant_title: "前 2 个月 0% 手续费", merchant_desc: "入驻即享 2 个月免手续费，平台让利不出现金",
    merchant_p: ["0 元入驻","前 2 月 0 手续费","免费店铺页","限首批 100 名"],
    tech_title: "0% 手续费 + 创始徽章", tech_desc: "前 2 个月 0% 手续费，加创始师傅专属徽章",
    tech_p: ["前 2 月 0 手续费","创始师傅徽章","优先派单","限首批 100 名"],
  },
  en: {
    label: "Limited Offers", title: "Exclusive Offers for 3 Roles", sub: "Sign up now · First 1000 only",
    tab_customer: "Customer", tab_merchant: "Merchant", tab_tech: "Technician",
    cta: "Sign Up & Claim", note: "Offers not stackable. V'GO reserves final interpretation.",
    customer_title: "RM80 Home Inspection Voucher", customer_desc: "Get RM80 off your first order upon signup",
    customer_p: ["Instant on signup","RM80 off first order","Valid nationwide","First 1000 only"],
    merchant_title: "First 2 Months 0% Service Fee", merchant_desc: "Zero service fee for 2 months after onboarding",
    merchant_p: ["Free onboarding","2 months 0%","Free store page","First 100 only"],
    tech_title: "0% Service Fee + Founder Badge", tech_desc: "Zero service fee for 2 months + exclusive founder badge",
    tech_p: ["2 months 0%","Founder badge","Priority dispatch","First 100 only"],
  },
  ms: {
    label: "Tawaran Terhad", title: "Tawaran Eksklusif 3 Peranan", sub: "Daftar sekarang · 1000 terawal sahaja",
    tab_customer: "Pelanggan", tab_merchant: "Peniaga", tab_tech: "Pakar",
    cta: "Daftar & Tuntut", note: "Tawaran tidak boleh digabung. V'GO berhak tafsir akhir.",
    customer_title: "Baun Pemeriksaan RM80", customer_desc: "Dapat RM80 diskaun pesanan pertama selepas daftar",
    customer_p: ["Serta-merta selepas daftar","RM80 diskaun pesanan pertama","Sah seluruh negara","1000 terawal sahaja"],
    merchant_title: "2 Bulan Pertama 0% Fi Perkhidmatan", merchant_desc: "Fi Perkhidmatan sifar untuk 2 bulan pertama selepas daftar",
    merchant_p: ["Pendaftaran percuma","2 bulan 0%","Halaman kedai percuma","100 terawal sahaja"],
    tech_title: "0% Fi Perkhidmatan + Lencana Pengasas", tech_desc: "Fi Perkhidmatan sifar 2 bulan + lencana pengasas eksklusif",
    tech_p: ["2 bulan 0%","Lencana pengasas","Keutamaan tugas","100 terawal sahaja"],
  },
};

export type OffersData = typeof OFFERS.zh;
```

## File: src/app/agent-agreement/page.tsx
```typescript
"use client";

import { useLang } from "@/lib/i18n";
import LegalShell from "@/components/LegalShell";
type Sec = { t: string; c: string[] };
const C: Record<string, { label: string; title: string; version: string; intro: string; note: string; secs: Sec[]; sig: string }> = {
  en: {
    label: "Regional Agent Agreement", title: "VGO Regional Agent Agreement",
    version: "Version 2026-A-V1 ｜ Effective: 27 September 2026",
    intro: "This Agreement is entered into between VGO (V Go On) (\u201cVGO\u201d or the \u201cPlatform\u201d) and the individual or business entity applying to become a VGO Regional Agent (\u201cAgent\u201d or \u201cyou\u201d). By clicking \u201cAgree and Continue\u201d or confirming via any electronic means, you are deemed to have read, understood, and accepted all terms of this Agreement.",
    note: "Under Malaysia's Electronic Commerce Act 2006, this Agreement is executed electronically and carries full legal effect. This Agreement, together with the Terms of Service and Privacy Policy, forms VGO's complete legal framework.",
    secs: [
      { t: "1. Definitions", c: [
        "1.1 \u201cPlatform\u201d means the VGO website, App, and related technical services.",
        "1.2 \u201cAgent\u201d means an independent partner authorized by VGO to develop merchants and pros within a designated region and support Platform operations.",
        "1.3 \u201cAuthorized Region\u201d means the area specified in the annex or confirmed in writing by both parties.",
        "1.4 \u201cAgent Commission\u201d means the revenue share paid by VGO to the Agent.",
        "1.5 \u201cPerformance Review\u201d means VGO's periodic assessment of merchant count, pro count, order volume, and other metrics in the Authorized Region.",
      ]},
      { t: "2. Agent Authorization", c: [
        "2.1 VGO grants the Agent a non-exclusive authorization to develop merchants and pros, and to assist with recruitment, training, and operations in the Authorized Region.",
        "2.2 The Agent is not an employee, branch, or legal representative of VGO. The Agent shall not sign contracts, commit to prices, or make guarantees in VGO's name.",
        "2.3 VGO reserves the right to operate directly or authorize third parties within the Authorized Region.",
      ]},
      { t: "3. Agent Obligations", c: [
        "3.1 Recruit, vet, and train merchants and pros per VGO standards; ensure their qualifications are genuine.",
        "3.2 Assist with operational issues, customer complaints, and disputes within the Authorized Region.",
        "3.3 Report performance, market conditions, and competitor activities to VGO regularly.",
        "3.4 Do not collect fees, make commitments, or sign contracts in VGO's name.",
        "3.5 Do not engage in any conduct damaging VGO's brand reputation or business interests.",
        "3.6 Comply with Malaysian laws and VGO's agent operation guidelines as issued from time to time.",
      ]},
      { t: "4. Agent Commission & Settlement", c: [
        "4.1 The agent commission rate is specified in the separately executed Agent Authorization Letter.",
        "4.2 Commission is calculated on completed orders within the Authorized Region at the agreed rate.",
        "4.3 VGO settles agent commission in the agreed cycle (e.g., monthly), net of withholding taxes, to the Agent's designated account.",
        "4.4 Minimum Settlement: If accumulated payable is below RM 200, settlement is deferred to the next cycle.",
        "4.5 In case of large-scale refunds, complaints, or violations within the region, VGO may deduct losses from the Agent's commission.",
      ]},
      { t: "5. Performance Review", c: [
        "5.1 VGO conducts periodic performance reviews, including merchant count, pro count, order volume, customer satisfaction, and violation rate.",
        "5.2 If targets are not met, VGO may: issue a corrective notice, reduce the Authorized Region, suspend agent status, or terminate this Agreement.",
        "5.3 For outstanding performance, VGO may grant bonuses, expand the Authorized Region, or offer priority renewal.",
      ]},
      { t: "6. Deposit", c: [
        "6.1 VGO may require the Agent to pay a performance deposit as agreed by both parties.",
        "6.2 The deposit secures the Agent's performance under this Agreement. In case of breach, VGO may deduct losses from the deposit.",
        "6.3 Upon normal termination without breach, VGO refunds the deposit (without interest) within 30 business days.",
      ]},
      { t: "7. Prohibited Conduct", c: [
        "7.1 No collecting franchise fees, deposits, or training fees in VGO's name.",
        "7.2 No false advertising or exaggerating VGO's services or income.",
        "7.3 No collusion with merchants or pros to fake orders or extract commission.",
        "7.4 No transferring, subcontracting, or leasing the agent status to third parties.",
        "7.5 No operating outside the Authorized Region without VGO's prior written consent.",
      ]},
      { t: "8. Personal Data Protection", c: [
        "8.1 Both parties strictly comply with Malaysia's Personal Data Protection Act 2010 (PDPA).",
        "8.2 When handling personal data of merchants, pros, or customers, the Agent shall use it solely for this Agreement's purpose, apply appropriate security measures, and not disclose to third parties.",
        "8.3 Any actual or suspected data breach must be reported to VGO immediately.",
      ]},
      { t: "9. Intellectual Property", c: [
        "9.1 VGO's trademarks, logos, software, and content are the intellectual property of VGO.",
        "9.2 The Agent may reasonably use VGO's marks within the scope of this Agreement.",
        "9.3 Upon termination, the Agent shall immediately cease using VGO's marks.",
      ]},
      { t: "10. Limitation of Liability", c: [
        "10.1 The Platform is provided \u201cas is\u201d. VGO makes no express or implied warranties.",
        "10.2 The Agent bears its own liability in performing this Agreement. If the Agent causes loss to VGO through breach, it shall compensate.",
        "10.3 Liability Cap: VGO's aggregate liability to the Agent shall not exceed the total agent commission paid by VGO to such Agent in the preceding six (6) months.",
        "10.4 Force Majeure: Neither party is liable for failure to perform due to force majeure.",
      ]},
      { t: "11. Term & Termination", c: [
        "11.1 This Agreement takes effect upon signing (including electronic signing); the term is specified in the Agent Authorization Letter.",
        "11.2 Termination: either party may terminate with 30 days' written notice; immediate termination for material breach not cured within 15 days; VGO may suspend or terminate the agent status at its sole discretion without prior notice.",
        "11.3 Upon termination, VGO settles all payable commission up to the termination date; the Agent shall cease using VGO's marks, return all materials, and delete customer information obtained.",
      ]},
      { t: "12. Confidentiality", c: [
        "12.1 The Agent shall keep confidential VGO's trade secrets, operational data, and customer information.",
        "12.2 Confidentiality obligations survive termination.",
      ]},
      { t: "13. Governing Law & Dispute Resolution", c: [
        "13.1 This Agreement is governed by the laws of Malaysia.",
        "13.2 Disputes shall first be resolved through friendly negotiation; failing which, they shall be submitted to the courts of Kuala Lumpur.",
      ]},
      { t: "14. Miscellaneous", c: [
        "14.1 This Agreement and the Agent Authorization Letter form the complete agreement between the parties. In case of conflict, the Letter prevails.",
        "14.2 If any provision is held invalid, the validity of the remaining provisions is unaffected.",
        "14.3 Electronic execution is legally valid.",
        "14.4 Notices may be sent via Platform announcements, email, or SMS.",
        "14.5 Language Version: This Agreement is executed in the English language. The English version shall be the authoritative and controlling version. Any translation of this Agreement into any other language, including but not limited to Bahasa Malaysia, is provided solely for the convenience of the parties and shall not be legally binding. In the event of any inconsistency or conflict between the English version and any translated version, the English version shall prevail in all respects.",
      ]},
    ],
    sig: "I have carefully read and agree to all terms of this Agreement, particularly Article 2 (Agent Authorization), Article 4 (Agent Commission & Settlement), Article 5 (Performance Review), and Article 10 (Limitation of Liability). By clicking \u201cAgree and Continue\u201d, this Agreement becomes effective.",
  },
  ms: {
    label: "Perjanjian Ejen Serantau", title: "Perjanjian Ejen Serantau VGO",
    version: "Versi 2026-A-V1 ｜ Berkuat kuasa: 27 September 2026",
    intro: "Perjanjian ini dimeterai antara VGO (V Go On) (\u201cVGO\u201d atau \u201cPlatform\u201d) dengan individu atau entiti perniagaan yang memohon menjadi Ejen Serantau VGO (\u201cEjen\u201d atau \u201canda\u201d). Dengan mengklik \u201cSetuju dan Teruskan\u201d atau mengesahkan melalui apa-apa cara elektronik, anda dianggap telah membaca, memahami, dan menerima semua terma Perjanjian ini.",
    note: "Di bawah Akta Perdagangan Elektronik 2006 Malaysia, Perjanjian ini dilaksanakan secara elektronik dan mempunyai kesan undang-undang penuh. Perjanjian ini, bersama Terma Perkhidmatan dan Dasar Privasi, membentuk rangka kerja undang-undang lengkap VGO.",
    secs: [
      { t: "1. Definisi", c: [
        "1.1 \u201cPlatform\u201d merujuk kepada laman web, App, dan perkhidmatan teknikal berkaitan VGO.",
        "1.2 \u201cEjen\u201d merujuk kepada rakan bebas yang diberi kuasa oleh VGO untuk membangunkan peniaga dan tukang dalam kawasan tertentu dan menyokong operasi Platform.",
        "1.3 \u201cKawasan Diberi Kuasa\u201d merujuk kepada kawasan yang dinyatakan dalam lampiran atau disahkan secara bertulis oleh kedua-dua pihak.",
        "1.4 \u201cKomisen Ejen\u201d merujuk kepada bahagian pendapatan yang dibayar oleh VGO kepada Ejen.",
        "1.5 \u201cSemakan Prestasi\u201d merujuk kepada penilaian berkala VGO terhadap bilangan peniaga, tukang, jumlah pesanan, dan metrik lain di Kawasan Diberi Kuasa.",
      ]},
      { t: "2. Kuasa Ejen", c: [
        "2.1 VGO memberi Ejen kuasa bukan eksklusif untuk membangunkan peniaga dan tukang, serta membantu pengambilan, latihan, dan operasi di Kawasan Diberi Kuasa.",
        "2.2 Ejen bukan pekerja, cawangan, atau wakil sah VGO. Ejen tidak boleh menandatangani kontrak, komit harga, atau membuat jaminan atas nama VGO.",
        "2.3 VGO berhak beroperasi secara langsung atau memberi kuasa kepada pihak ketiga di Kawasan Diberi Kuasa.",
      ]},
      { t: "3. Kewajipan Ejen", c: [
        "3.1 Mengambil, menyemak, dan melatih peniaga dan tukang mengikut piawaian VGO; memastikan kelayakan mereka tulen.",
        "3.2 Membantu menyelesaikan isu operasi, aduan pelanggan, dan pertikaian di Kawasan Diberi Kuasa.",
        "3.3 Melaporkan prestasi, keadaan pasaran, dan aktiviti pesaing kepada VGO secara berkala.",
        "3.4 Jangan mengutip fi, membuat komitmen, atau menandatangani kontrak atas nama VGO.",
        "3.5 Jangan terlibat dalam apa-apa tingkah laku yang merosakkan reputasi atau kepentingan perniagaan VGO.",
        "3.6 Mematuhi undang-undang Malaysia dan garis panduan operasi ejen VGO seperti yang dikeluarkan dari semasa ke semasa.",
      ]},
      { t: "4. Komisen & Penyelesaian Ejen", c: [
        "4.1 Kadar komisen ejen dinyatakan dalam Surat Kuasa Ejen yang ditandatangani secara berasingan.",
        "4.2 Komisen dikira berdasarkan pesanan yang diselesaikan dalam Kawasan Diberi Kuasa pada kadar yang dipersetujui.",
        "4.3 VGO menyelesaikan komisen ejen dalam kitaran yang dipersetujui (contohnya, bulanan), selepas ditolak cukai pegangan, ke akaun Ejen yang ditetapkan.",
        "4.4 Penyelesaian Minimum: Jika jumlah perlu dibayar terkumpul kurang daripada RM 200, penyelesaian ditangguhkan ke kitaran seterusnya.",
        "4.5 Sekiranya berlaku bayaran balik, aduan, atau pelanggaran berskala besar di kawasan tersebut, VGO boleh menolak kerugian daripada komisen Ejen.",
      ]},
      { t: "5. Semakan Prestasi", c: [
        "5.1 VGO menjalankan semakan prestasi berkala, termasuk bilangan peniaga, tukang, jumlah pesanan, kepuasan pelanggan, dan kadar pelanggaran.",
        "5.2 Jika sasaran tidak dipenuhi, VGO boleh: mengeluarkan notis pembetulan, mengurangkan Kawasan Diberi Kuasa, menggantung status ejen, atau menamatkan Perjanjian ini.",
        "5.3 Untuk prestasi cemerlang, VGO boleh memberikan bonus, mengembangkan Kawasan Diberi Kuasa, atau menawarkan pembaharuan keutamaan.",
      ]},
      { t: "6. Deposit", c: [
        "6.1 VGO boleh meminta Ejen membayar deposit prestasi seperti yang dipersetujui oleh kedua-dua pihak.",
        "6.2 Deposit menjamin prestasi Ejen di bawah Perjanjian ini. Jika berlaku pelanggaran, VGO boleh menolak kerugian daripada deposit.",
        "6.3 Selepas penamatan normal tanpa pelanggaran, VGO memulangkan deposit (tanpa faedah) dalam 30 hari bekerja.",
      ]},
      { t: "7. Perbuatan Dilarang", c: [
        "7.1 Tiada pengutipan fi francais, deposit, atau fi latihan atas nama VGO.",
        "7.2 Tiada pengiklanan palsu atau membesar-besarkan perkhidmatan atau pendapatan VGO.",
        "7.3 Tiada pakatan dengan peniaga atau tukang untuk pesanan palsu atau mengambil komisen.",
        "7.4 Tiada pemindahan, subkontrak, atau penyewaan status ejen kepada pihak ketiga.",
        "7.5 Tiada operasi di luar Kawasan Diberi Kuasa tanpa persetujuan bertulis VGO terlebih dahulu.",
      ]},
      { t: "8. Perlindungan Data Peribadi", c: [
        "8.1 Kedua-dua pihak mematuhi sepenuhnya Akta Perlindungan Data Peribadi 2010 (PDPA) Malaysia.",
        "8.2 Semasa mengendalikan data peribadi peniaga, tukang, atau pelanggan, Ejen hendaklah menggunakannya semata-mata untuk tujuan Perjanjian ini, menggunakan langkah keselamatan yang sewajarnya, dan tidak mendedahkan kepada pihak ketiga.",
        "8.3 Sebarang pelanggaran data sebenar atau disyaki mesti dilaporkan kepada VGO dengan segera.",
      ]},
      { t: "9. Harta Intelek", c: [
        "9.1 Tanda dagangan, logo, perisian, dan kandungan VGO adalah harta intelek VGO.",
        "9.2 Ejen boleh menggunakan tanda VGO secara munasabah dalam skop Perjanjian ini.",
        "9.3 Selepas penamatan, Ejen hendaklah segera berhenti menggunakan tanda VGO.",
      ]},
      { t: "10. Had Tanggungjawab", c: [
        "10.1 Platform disediakan \u201csebagaimana adanya\u201d. VGO tidak memberikan sebarang jaminan nyata atau tersirat.",
        "10.2 Ejen menanggung liabiliti sendiri dalam melaksanakan Perjanjian ini. Jika Ejen menyebabkan kerugian kepada VGO melalui pelanggaran, ia hendaklah memberi pampasan.",
        "10.3 Had Liabiliti: Jumlah liabiliti VGO terhadap Ejen tidak melebihi jumlah komisen ejen yang dibayar oleh VGO kepada Ejen tersebut dalam enam (6) bulan sebelumnya.",
        "10.4 Force Majeure: Tiada pihak bertanggungjawab atas kegagalan melaksanakan akibat force majeure.",
      ]},
      { t: "11. Tempoh & Penamatan", c: [
        "11.1 Perjanjian ini berkuat kuasa selepas ditandatangani (termasuk tandatangan elektronik); tempohnya dinyatakan dalam Surat Kuasa Ejen.",
        "11.2 Penamatan: mana-mana pihak boleh menamatkan dengan notis bertulis 30 hari; penamatan serta-merta bagi pelanggaran material yang tidak dibetulkan dalam 15 hari; VGO boleh menggantung atau menamatkan status ejen mengikut budi bicaranya tanpa notis terlebih dahulu.",
        "11.3 Selepas penamatan, VGO menyelesaikan semua komisen yang perlu dibayar sehingga tarikh penamatan; Ejen hendaklah berhenti menggunakan tanda VGO, memulangkan semua bahan, dan memadam maklumat pelanggan yang diperoleh.",
      ]},
      { t: "12. Kerahsiaan", c: [
        "12.1 Ejen hendaklah merahsiakan rahsia dagang, data operasi, dan maklumat pelanggan VGO.",
        "12.2 Kewajipan kerahsiaan kekal selepas penamatan.",
      ]},
      { t: "13. Undang-undang & Penyelesaian Pertikaian", c: [
        "13.1 Perjanjian ini ditadbir oleh undang-undang Malaysia.",
        "13.2 Pertikaian hendaklah diselesaikan terlebih dahulu melalui rundingan mesra; jika gagal, ia hendaklah dikemukakan kepada mahkamah Kuala Lumpur.",
      ]},
      { t: "14. Lain-lain", c: [
        "14.1 Perjanjian ini dan Surat Kuasa Ejen membentuk keseluruhan perjanjian antara pihak-pihak. Jika berlaku percanggahan, Surat Kuasa mengatasi.",
        "14.2 Jika mana-mana peruntukan dianggap tidak sah, kesahihan peruntukan selebihnya tidak terjejas.",
        "14.3 Pelaksanaan elektronik adalah sah dari segi undang-undang.",
        "14.4 Notis boleh dihantar melalui pengumuman Platform, e-mel, atau SMS.",
        "14.5 Versi Bahasa: Perjanjian ini dilaksanakan dalam Bahasa Inggeris. Versi Bahasa Inggeris adalah versi yang berwibawa dan mengikat. Sebarang terjemahan Perjanjian ini ke dalam bahasa lain, termasuk tetapi tidak terhad kepada Bahasa Malaysia, disediakan semata-mata untuk kemudahan pihak-pihak dan tidak mengikat dari segi undang-undang. Sekiranya terdapat sebarang ketidakselarasan atau percanggahan antara versi Bahasa Inggeris dan mana-mana versi terjemahan, versi Bahasa Inggeris akan diutamakan dalam semua aspek.",
      ]},
    ],
    sig: "Saya telah membaca dengan teliti dan bersetuju dengan semua terma Perjanjian ini, terutamanya Perkara 2 (Kuasa Ejen), Perkara 4 (Komisen & Penyelesaian Ejen), Perkara 5 (Semakan Prestasi), dan Perkara 10 (Had Tanggungjawab). Dengan mengklik \u201cSetuju dan Teruskan\u201d, Perjanjian ini berkuat kuasa.",
  },
};
export default function AgentAgreementPage() {
  const { lang } = useLang();
  const c = C[lang] ?? C.en;
  return (
    <LegalShell label={c.label} title={c.title} version={c.version}>
      <p>{c.intro}</p>
      <div className="note-box">{c.note}</div>
      {c.secs.map((s, i) => (
        <section key={i}>
          <h2>{s.t}</h2>
          {s.c.map((p, j) => <p key={j} className="sub">{p}</p>)}
        </section>
      ))}
      <div className="sig-box">
        <strong>【{lang === "zh" ? "同意确认" : lang === "ms" ? "Pengesahan Persetujuan" : "Confirmation"}】</strong>
        <p style={{ marginTop: 8 }}>{c.sig}</p>
        <p style={{ fontSize: 12, color: "#9a3412", marginTop: 10 }}>support.vgo@gmail.com</p>
      </div>
    </LegalShell>
  );
}
```

## File: src/app/pro-agreement/page.tsx
```typescript
"use client";

import { useLang } from "@/lib/i18n";
import LegalShell from "@/components/LegalShell";
type Sec = { t: string; c: string[] };
const C: Record<string, { label: string; title: string; version: string; intro: string; note: string; secs: Sec[]; sig: string }> = {
  en: {
    label: "Pro Agreement", title: "VGO Pro Agreement",
    version: "Version 2026-P-V1 ｜ Effective: 27 September 2026",
    intro: "This Agreement is entered into between VGO (V Go On) (\u201cVGO\u201d or the \u201cPlatform\u201d) and the independent service provider applying to become a Pro/Artisan on the VGO Platform (\u201cPro\u201d or \u201cyou\u201d). By clicking \u201cAgree and Continue\u201d or confirming via any electronic means, you are deemed to have read, understood, and accepted all terms of this Agreement.",
    note: "Under Malaysia's Electronic Commerce Act 2006, this Agreement is executed electronically and carries full legal effect. This Agreement, together with the Terms of Service and Privacy Policy, forms VGO's complete legal framework.",
    secs: [
      { t: "1. Definitions", c: [
        "1.1 \u201cPlatform\u201d means the VGO website, App, and related technical services.",
        "1.2 \u201cPro\u201d means an independent service provider approved by VGO to receive orders and provide on-site services via the Platform, including technicians and artisans.",
        "1.3 \u201cCustomer\u201d means the end user who books Pro services via the Platform.",
        "1.4 \u201cCommission\u201d means the service fee charged by VGO for completed orders on the Platform.",
      ]},
      { t: "2. Independent Contractor", c: [
        "2.1 The Pro is an independent contractor, not an employee, agent, or partner of VGO.",
        "2.2 This Agreement does not constitute employment, partnership, or joint venture.",
        "2.3 The Pro decides independently whether to accept orders, when to go online, and how to provide services; VGO does not force assignment.",
        "2.4 The Pro bears all personal income tax, social security, insurance, and other statutory costs.",
      ]},
      { t: "3. Platform Role", c: [
        "3.1 VGO acts solely as a technology intermediary providing information matching, order management, and payment settlement.",
        "3.2 VGO does not participate in the service process and is not directly liable for service outcomes.",
      ]},
      { t: "4. Pro Obligations", c: [
        "4.1 Ensure identity, skills, and qualifications are genuine and valid; cooperate with Platform verification.",
        "4.2 Provide safe, professional, and timely services in accordance with Platform specifications and industry standards.",
        "4.3 Do not subcontract orders to third parties.",
        "4.4 Do not transact privately with customers to evade commission.",
        "4.5 Respect customers, protect their privacy; no harassment, discrimination, or abuse.",
        "4.6 Transparent pricing; no charges beyond those agreed on the Platform.",
        "4.7 The Pro bears responsibility for personal safety and equipment safety during service.",
      ]},
      { t: "5. Verification & Training", c: [
        "5.1 The Pro must pass VGO's identity, skill, and service-standard training verification.",
        "5.2 VGO reserves the right to audit Pro qualifications at any time.",
        "5.3 If verification fails, VGO may suspend or terminate the Pro's order-taking permission.",
      ]},
      { t: "6. Commission & Settlement", c: [
        "6.1 Commission rates are published on the Platform; VGO may adjust based on market conditions with prior notice.",
        "6.2 After order completion, VGO will settle the balance (net of commission) to the Pro's designated account within the agreed cycle.",
        "6.3 Minimum Settlement: If accumulated payable is below RM 50, settlement is deferred to the next cycle.",
        "6.4 In the event of refunds or complaints, VGO may deduct the corresponding amount from the Pro's pending settlement.",
      ]},
      { t: "7. Insurance & Safety", c: [
        "7.1 The Pro should obtain necessary personal accident and professional liability insurance (if applicable).",
        "7.2 Personal injury or property damage caused by the Pro during service is borne by the Pro.",
        "7.3 The Pro must not provide services while intoxicated, under the influence, fatigued, or unwell.",
      ]},
      { t: "8. Personal Data Protection", c: [
        "8.1 Both parties strictly comply with Malaysia's PDPA 2010.",
        "8.2 When handling customer personal data, the Pro shall use it solely to complete the order and not disclose to third parties.",
        "8.3 After service completion, the Pro shall delete customer information upon VGO's request.",
      ]},
      { t: "9. Platform Rights", c: [
        "9.1 VGO may review and monitor the Pro's service quality and compliance.",
        "9.2 For violations, VGO may at its discretion take action: warning, corrective notice, suspend order-taking, permanent ban, forfeiture of Deposit (if any), or legal action.",
        "9.3 VGO may display the Pro's verification info and service reviews on the Platform.",
      ]},
      { t: "10. Limitation of Liability", c: [
        "10.1 The Platform is provided \u201cas is\u201d. VGO makes no express or implied warranties.",
        "10.2 Any customer loss caused by the Pro during service is borne by the Pro.",
        "10.3 Liability Cap: VGO's aggregate liability to the Pro shall not exceed the total commission received by VGO from such Pro in the preceding six (6) months.",
        "10.4 Force Majeure: Neither party is liable for failure to perform due to force majeure (natural disasters, epidemics, war, governmental acts, network outages).",
      ]},
      { t: "11. Term & Termination", c: [
        "11.1 This Agreement takes effect upon approval of the onboarding application.",
        "11.2 Termination: either party may terminate with 30 days' written notice; immediate termination for material breach not cured within 15 days; VGO may suspend or terminate the Pro's account at its sole discretion without prior notice.",
        "11.3 Upon termination, VGO will settle all payable amounts up to the termination date.",
      ]},
      { t: "12. Governing Law & Dispute Resolution", c: [
        "12.1 This Agreement is governed by the laws of Malaysia.",
        "12.2 Disputes shall first be resolved through friendly negotiation; failing which, they shall be submitted to the courts of Kuala Lumpur.",
      ]},
      { t: "13. Miscellaneous", c: [
        "13.1 This Agreement constitutes the entire agreement between the parties.",
        "13.2 If any provision is held invalid, the validity of the remaining provisions is unaffected.",
        "13.3 Electronic execution is legally valid; clicking \u201cAgree\u201d constitutes a contract.",
        "13.4 Notices may be sent via Platform announcements, email, or SMS.",
        "13.5 Language Version: This Agreement is executed in the English language. The English version shall be the authoritative and controlling version. Any translation of this Agreement into any other language, including but not limited to Bahasa Malaysia, is provided solely for the convenience of the parties and shall not be legally binding. In the event of any inconsistency or conflict between the English version and any translated version, the English version shall prevail in all respects.",
      ]},
    ],
    sig: "I have carefully read and agree to all terms of this Agreement, particularly Article 2 (Independent Contractor), Article 6 (Commission & Settlement), Article 7 (Insurance & Safety), and Article 10 (Limitation of Liability). By clicking \u201cAgree and Continue\u201d, this Agreement becomes effective.",
  },
  ms: {
    label: "Perjanjian Tukang", title: "Perjanjian Tukang VGO",
    version: "Versi 2026-P-V1 ｜ Berkuat kuasa: 27 September 2026",
    intro: "Perjanjian ini dimeterai antara VGO (V Go On) (\u201cVGO\u201d atau \u201cPlatform\u201d) dengan penyedia perkhidmatan bebas yang memohon menjadi Tukang/Tukang Kraf di Platform VGO (\u201cTukang\u201d atau \u201canda\u201d). Dengan mengklik \u201cSetuju dan Teruskan\u201d atau mengesahkan melalui apa-apa cara elektronik, anda dianggap telah membaca, memahami, dan menerima semua terma Perjanjian ini.",
    note: "Di bawah Akta Perdagangan Elektronik 2006 Malaysia, Perjanjian ini dilaksanakan secara elektronik dan mempunyai kesan undang-undang penuh. Perjanjian ini, bersama Terma Perkhidmatan dan Dasar Privasi, membentuk rangka kerja undang-undang lengkap VGO.",
    secs: [
      { t: "1. Definisi", c: [
        "1.1 \u201cPlatform\u201d merujuk kepada laman web, App, dan perkhidmatan teknikal berkaitan VGO.",
        "1.2 \u201cTukang\u201d merujuk kepada penyedia perkhidmatan bebas yang diluluskan oleh VGO untuk menerima pesanan dan memberikan perkhidmatan di lokasi melalui Platform, termasuk tukang dan tukang kraf.",
        "1.3 \u201cPelanggan\u201d merujuk kepada pengguna akhir yang menempah perkhidmatan Tukang melalui Platform.",
        "1.4 \u201cKomisen\u201d merujuk kepada fi perkhidmatan yang dikenakan oleh VGO bagi pesanan yang diselesaikan di Platform.",
      ]},
      { t: "2. Kontraktor Bebas", c: [
        "2.1 Tukang adalah kontraktor bebas, bukan pekerja, ejen, atau rakan kongsi VGO.",
        "2.2 Perjanjian ini tidak membentuk pekerjaan, perkongsian, atau usaha sama.",
        "2.3 Tukang memutuskan secara bebas sama ada menerima pesanan, bila untuk online, dan cara memberikan perkhidmatan; VGO tidak memaksa penugasan.",
        "2.4 Tukang menanggung semua cukai pendapatan peribadi, keselamatan sosial, insurans, dan kos berkanun lain.",
      ]},
      { t: "3. Peranan Platform", c: [
        "3.1 VGO bertindak semata-mata sebagai perantara teknologi yang menyediakan padanan maklumat, pengurusan pesanan, dan penyelesaian pembayaran.",
        "3.2 VGO tidak menyertai proses perkhidmatan dan tidak bertanggungjawab secara langsung terhadap hasil perkhidmatan.",
      ]},
      { t: "4. Kewajipan Tukang", c: [
        "4.1 Memastikan identiti, kemahiran, dan kelayakan adalah tulen dan sah; bekerjasama dengan pengesahan Platform.",
        "4.2 Menyediakan perkhidmatan dengan selamat, profesional, dan tepat pada masanya mengikut spesifikasi Platform dan piawaian industri.",
        "4.3 Jangan mensubkontrak pesanan kepada pihak ketiga.",
        "4.4 Jangan bertransaksi secara peribadi dengan pelanggan untuk mengelak komisen.",
        "4.5 Menghormati pelanggan, melindungi privasi mereka; tiada gangguan, diskriminasi, atau penderaan.",
        "4.6 Harga telus; tiada caj melebihi yang dipersetujui di Platform.",
        "4.7 Tukang menanggung tanggungjawab terhadap keselamatan peribadi dan peralatan semasa perkhidmatan.",
      ]},
      { t: "5. Pengesahan & Latihan", c: [
        "5.1 Tukang mesti lulus pengesahan identiti, kemahiran, dan latihan piawaian perkhidmatan VGO.",
        "5.2 VGO berhak mengaudit kelayakan Tukang pada bila-bila masa.",
        "5.3 Jika pengesahan gagal, VGO boleh menggantung atau menamatkan kebenaran menerima pesanan Tukang.",
      ]},
      { t: "6. Komisen & Penyelesaian", c: [
        "6.1 Kadar komisen diumumkan di Platform; VGO boleh menyelaraskan mengikut keadaan pasaran dengan notis terlebih dahulu.",
        "6.2 Selepas pesanan selesai, VGO akan menyelesaikan baki (selepas ditolak komisen) ke akaun Tukang yang ditetapkan dalam kitaran yang dipersetujui.",
        "6.3 Penyelesaian Minimum: Jika jumlah perlu dibayar terkumpul kurang daripada RM 50, penyelesaian ditangguhkan ke kitaran seterusnya.",
        "6.4 Sekiranya berlaku bayaran balik atau aduan, VGO boleh menolak jumlah yang berkenaan daripada penyelesaian tertunggak Tukang.",
      ]},
      { t: "7. Insurans & Keselamatan", c: [
        "7.1 Tukang harus mendapatkan insurans kemalangan peribadi dan liabiliti profesional yang perlu (jika berkenaan).",
        "7.2 Kecederaan peribadi atau kerosakan harta benda yang disebabkan oleh Tukang semasa perkhidmatan ditanggung oleh Tukang.",
        "7.3 Tukang tidak boleh memberikan perkhidmatan semasa mabuk, di bawah pengaruh dadah, letih, atau tidak sihat.",
      ]},
      { t: "8. Perlindungan Data Peribadi", c: [
        "8.1 Kedua-dua pihak mematuhi sepenuhnya PDPA 2010 Malaysia.",
        "8.2 Semasa mengendalikan data peribadi pelanggan, Tukang hendaklah menggunakannya semata-mata untuk menyelesaikan pesanan dan tidak mendedahkannya kepada pihak ketiga.",
        "8.3 Selepas perkhidmatan selesai, Tukang hendaklah memadam maklumat pelanggan atas permintaan VGO.",
      ]},
      { t: "9. Hak Platform", c: [
        "9.1 VGO boleh menyemak dan memantau kualiti perkhidmatan dan pematuhan Tukang.",
        "9.2 Atas pelanggaran, VGO boleh mengikut budi bicaranya mengambil tindakan: amaran, notis pembetulan, menggantung penerimaan pesanan, larangan kekal, pelucutan Deposit (jika ada), atau tindakan undang-undang.",
        "9.3 VGO boleh memaparkan maklumat pengesahan dan ulasan perkhidmatan Tukang di Platform.",
      ]},
      { t: "10. Had Tanggungjawab", c: [
        "10.1 Platform disediakan \u201csebagaimana adanya\u201d. VGO tidak memberikan sebarang jaminan nyata atau tersirat.",
        "10.2 Sebarang kerugian pelanggan yang disebabkan oleh Tukang semasa perkhidmatan ditanggung oleh Tukang.",
        "10.3 Had Liabiliti: Jumlah liabiliti VGO terhadap Tukang tidak melebihi jumlah komisen yang diterima VGO daripada Tukang tersebut dalam enam (6) bulan sebelumnya.",
        "10.4 Force Majeure: Tiada pihak bertanggungjawab atas kegagalan melaksanakan akibat force majeure (bencana alam, wabak, peperangan, tindakan kerajaan, gangguan rangkaian).",
      ]},
      { t: "11. Tempoh & Penamatan", c: [
        "11.1 Perjanjian ini berkuat kuasa selepas kelulusan permohonan pendaftaran.",
        "11.2 Penamatan: mana-mana pihak boleh menamatkan dengan notis bertulis 30 hari; penamatan serta-merta bagi pelanggaran material yang tidak dibetulkan dalam 15 hari; VGO boleh menggantung atau menamatkan akaun Tukang mengikut budi bicaranya tanpa notis terlebih dahulu.",
        "11.3 Selepas penamatan, VGO akan menyelesaikan semua jumlah yang perlu dibayar sehingga tarikh penamatan.",
      ]},
      { t: "12. Undang-undang & Penyelesaian Pertikaian", c: [
        "12.1 Perjanjian ini ditadbir oleh undang-undang Malaysia.",
        "12.2 Pertikaian hendaklah diselesaikan terlebih dahulu melalui rundingan mesra; jika gagal, ia hendaklah dikemukakan kepada mahkamah Kuala Lumpur.",
      ]},
      { t: "13. Lain-lain", c: [
        "13.1 Perjanjian ini merupakan keseluruhan perjanjian antara pihak-pihak.",
        "13.2 Jika mana-mana peruntukan dianggap tidak sah, kesahihan peruntukan selebihnya tidak terjejas.",
        "13.3 Pelaksanaan elektronik adalah sah dari segi undang-undang; mengklik \u201cSetuju\u201d merupakan kontrak.",
        "13.4 Notis boleh dihantar melalui pengumuman Platform, e-mel, atau SMS.",
        "13.5 Versi Bahasa: Perjanjian ini dilaksanakan dalam Bahasa Inggeris. Versi Bahasa Inggeris adalah versi yang berwibawa dan mengikat. Sebarang terjemahan Perjanjian ini ke dalam bahasa lain, termasuk tetapi tidak terhad kepada Bahasa Malaysia, disediakan semata-mata untuk kemudahan pihak-pihak dan tidak mengikat dari segi undang-undang. Sekiranya terdapat sebarang ketidakselarasan atau percanggahan antara versi Bahasa Inggeris dan mana-mana versi terjemahan, versi Bahasa Inggeris akan diutamakan dalam semua aspek.",
      ]},
    ],
    sig: "Saya telah membaca dengan teliti dan bersetuju dengan semua terma Perjanjian ini, terutamanya Perkara 2 (Kontraktor Bebas), Perkara 6 (Komisen & Penyelesaian), Perkara 7 (Insurans & Keselamatan), dan Perkara 10 (Had Tanggungjawab). Dengan mengklik \u201cSetuju dan Teruskan\u201d, Perjanjian ini berkuat kuasa.",
  },
};
export default function ProAgreementPage() {
  const { lang } = useLang();
  const c = C[lang] ?? C.en;
  return (
    <LegalShell label={c.label} title={c.title} version={c.version}>
      <p>{c.intro}</p>
      <div className="note-box">{c.note}</div>
      {c.secs.map((s, i) => (
        <section key={i}>
          <h2>{s.t}</h2>
          {s.c.map((p, j) => <p key={j} className="sub">{p}</p>)}
        </section>
      ))}
      <div className="sig-box">
        <strong>【{lang === "zh" ? "同意确认" : lang === "ms" ? "Pengesahan Persetujuan" : "Confirmation"}】</strong>
        <p style={{ marginTop: 8 }}>{c.sig}</p>
        <p style={{ fontSize: 12, color: "#9a3412", marginTop: 10 }}>support.vgo@gmail.com</p>
      </div>
    </LegalShell>
  );
}
```

## File: src/app/user-agreement/page.tsx
```typescript
"use client";

import { useLang } from "@/lib/i18n";
import LegalShell from "@/components/LegalShell";
type Sec = { t: string; c: string[] };
const C: Record<string, { label: string; title: string; version: string; intro: string; note: string; secs: Sec[]; sig: string }> = {
  en: {
    label: "User Service Agreement", title: "VGO User Service Agreement",
    version: "Version 2026-U-V1 ｜ Effective: 27 September 2026",
    intro: "This Agreement is entered into between VGO (V Go On) (\u201cVGO\u201d or the \u201cPlatform\u201d) and the user of the Platform's services (\u201cUser\u201d or \u201cyou\u201d). By clicking \u201cAgree and Continue\u201d or confirming via any electronic means, you are deemed to have read, understood, and accepted all terms of this Agreement.",
    note: "Under Malaysia's Electronic Commerce Act 2006, this Agreement is executed electronically and carries full legal effect. This Agreement, together with the Terms of Service and Privacy Policy, forms VGO's complete legal framework.",
    secs: [
      { t: "1. Definitions", c: [
        "1.1 \u201cPlatform\u201d means the VGO website, App, and related technical services.",
        "1.2 \u201cUser\u201d means the end consumer who books or purchases services via the Platform.",
        "1.3 \u201cService Provider\u201d means a merchant, pro, or artisan approved by VGO.",
        "1.4 \u201cService\u201d means home services provided by the Service Provider to the User via the Platform.",
      ]},
      { t: "2. Platform Role", c: [
        "2.1 VGO acts solely as a technology intermediary providing information matching, order management, and payment settlement.",
        "2.2 VGO is not the service provider and is not directly liable for the quality, legality, or safety of services.",
        "2.3 VGO makes reasonable efforts to verify Service Provider qualifications but does not guarantee service quality.",
      ]},
      { t: "3. User Rights", c: [
        "3.1 Users may book and purchase services per Platform rules.",
        "3.2 Users may post genuine reviews of services.",
        "3.3 Users may access, correct, and delete their personal data as permitted by law.",
        "3.4 Users may lodge complaints with Platform support regarding service disputes.",
      ]},
      { t: "4. User Obligations", c: [
        "4.1 Provide true, accurate, and complete registration information.",
        "4.2 Pay service fees on time; no malicious non-payment or fraud.",
        "4.3 Respect Service Providers; no harassment, discrimination, or abuse.",
        "4.4 Comply with Malaysian laws; no illegal activity via the Platform.",
        "4.5 Do not bypass the Platform to transact privately with Service Providers.",
      ]},
      { t: "5. Payment & Refund", c: [
        "5.1 All prices are in Malaysian Ringgit (RM).",
        "5.2 Payments are processed via Platform-designated third-party channels.",
        "5.3 Cancellation before service starts: full refund. Cancellation after start: settled by completed portion.",
        "5.4 If service is not performed or not completed, the User may request a full refund.",
        "5.5 Refunds are processed within 3-7 business days.",
      ]},
      { t: "6. Dispute Handling", c: [
        "6.1 Disputes between the User and Service Provider should first be resolved by friendly negotiation.",
        "6.2 If unresolved, the User may complain to Platform support; VGO will assist reasonably but is not directly liable for compensation.",
        "6.3 The User may also complain to the Tribunal for Consumer Claims Malaysia (TTPM).",
      ]},
      { t: "7. Personal Data Protection", c: [
        "7.1 VGO strictly complies with Malaysia's Personal Data Protection Act 2010 (PDPA) and its amendments.",
        "7.2 Collection, use, and protection of User personal data are detailed in the Privacy Policy.",
        "7.3 The User agrees that VGO may disclose necessary contact and address information to Service Providers for service purposes.",
      ]},
      { t: "8. Limitation of Liability", c: [
        "8.1 The Platform is provided \u201cas is\u201d. VGO makes no express or implied warranties.",
        "8.2 Loss to the User arising from the Service Provider's independent acts is borne by the Service Provider; VGO is not directly liable.",
        "8.3 To the maximum extent permitted by law, VGO's aggregate liability to the User shall not exceed the total service fees paid by the User via the Platform in the preceding six (6) months.",
      ]},
      { t: "9. Prohibited Conduct", c: [
        "9.1 No fake orders, malicious refunds, or review manipulation.",
        "9.2 No illegal, infringing, pornographic, violent, or harassing content.",
        "9.3 No impersonation of others or misuse of qualifications.",
        "9.4 Violations may result in suspension or termination of the account and legal action.",
      ]},
      { t: "10. Term & Termination", c: [
        "10.1 This Agreement takes effect upon successful registration.",
        "10.2 The User may stop using the Platform and delete the account at any time.",
        "10.3 VGO may suspend or terminate the User's account at its sole discretion without prior notice.",
      ]},
      { t: "11. Governing Law & Dispute Resolution", c: [
        "11.1 This Agreement is governed by the laws of Malaysia.",
        "11.2 Disputes shall first be resolved through friendly negotiation; failing which, they shall be submitted to the courts of Kuala Lumpur.",
      ]},
      { t: "12. Miscellaneous", c: [
        "12.1 This Agreement constitutes the entire agreement between the parties.",
        "12.2 If any provision is held invalid, the validity of the remaining provisions is unaffected.",
        "12.3 Electronic execution is legally valid; clicking \u201cAgree\u201d constitutes a contract.",
        "12.4 Notices may be sent via Platform announcements, email, or SMS.",
        "12.5 Language Version: This Agreement is executed in the English language. The English version shall be the authoritative and controlling version. Any translation of this Agreement into any other language, including but not limited to Bahasa Malaysia, is provided solely for the convenience of the parties and shall not be legally binding. In the event of any inconsistency or conflict between the English version and any translated version, the English version shall prevail in all respects.",
      ]},
    ],
    sig: "I have carefully read and agree to all terms of this Agreement, particularly Article 2 (Platform Role), Article 5 (Payment & Refund), Article 7 (Personal Data Protection), and Article 8 (Limitation of Liability). By clicking \u201cAgree and Continue\u201d, this Agreement becomes effective.",
  },
  ms: {
    label: "Perjanjian Perkhidmatan Pengguna", title: "Perjanjian Perkhidmatan Pengguna VGO",
    version: "Versi 2026-U-V1 ｜ Berkuat kuasa: 27 September 2026",
    intro: "Perjanjian ini dimeterai antara VGO (V Go On) (\u201cVGO\u201d atau \u201cPlatform\u201d) dengan pengguna perkhidmatan Platform (\u201cPengguna\u201d atau \u201canda\u201d). Dengan mengklik \u201cSetuju dan Teruskan\u201d atau mengesahkan melalui apa-apa cara elektronik, anda dianggap telah membaca, memahami, dan menerima semua terma Perjanjian ini.",
    note: "Di bawah Akta Perdagangan Elektronik 2006 Malaysia, Perjanjian ini dilaksanakan secara elektronik dan mempunyai kesan undang-undang penuh. Perjanjian ini, bersama Terma Perkhidmatan dan Dasar Privasi, membentuk rangka kerja undang-undang lengkap VGO.",
    secs: [
      { t: "1. Definisi", c: [
        "1.1 \u201cPlatform\u201d merujuk kepada laman web, App, dan perkhidmatan teknikal berkaitan VGO.",
        "1.2 \u201cPengguna\u201d merujuk kepada pengguna akhir yang menempah atau membeli perkhidmatan melalui Platform.",
        "1.3 \u201cPenyedia Perkhidmatan\u201d merujuk kepada peniaga, tukang, atau tukang kraf yang diluluskan oleh VGO.",
        "1.4 \u201cPerkhidmatan\u201d merujuk kepada perkhidmatan ke rumah yang disediakan oleh Penyedia Perkhidmatan kepada Pengguna melalui Platform.",
      ]},
      { t: "2. Peranan Platform", c: [
        "2.1 VGO bertindak semata-mata sebagai perantara teknologi yang menyediakan padanan maklumat, pengurusan pesanan, dan penyelesaian pembayaran.",
        "2.2 VGO bukan penyedia perkhidmatan dan tidak bertanggungjawab secara langsung terhadap kualiti, kesahihan, atau keselamatan perkhidmatan.",
        "2.3 VGO membuat usaha munasabah untuk mengesahkan kelayakan Penyedia Perkhidmatan tetapi tidak menjamin kualiti perkhidmatan.",
      ]},
      { t: "3. Hak Pengguna", c: [
        "3.1 Pengguna boleh menempah dan membeli perkhidmatan mengikut peraturan Platform.",
        "3.2 Pengguna boleh menyiarkan ulasan tulen terhadap perkhidmatan.",
        "3.3 Pengguna boleh mengakses, membetulkan, dan memadam data peribadi mereka seperti dibenarkan oleh undang-undang.",
        "3.4 Pengguna boleh membuat aduan kepada sokongan Platform berkenaan pertikaian perkhidmatan.",
      ]},
      { t: "4. Kewajipan Pengguna", c: [
        "4.1 Memberikan maklumat pendaftaran yang benar, tepat, dan lengkap.",
        "4.2 Membayar fi perkhidmatan tepat pada masanya; tiada kegagalan bayaran berniat jahat atau penipuan.",
        "4.3 Menghormati Penyedia Perkhidmatan; tiada gangguan, diskriminasi, atau penderaan.",
        "4.4 Mematuhi undang-undang Malaysia; tiada aktiviti haram melalui Platform.",
        "4.5 Jangan memintas Platform untuk bertransaksi secara peribadi dengan Penyedia Perkhidmatan.",
      ]},
      { t: "5. Pembayaran & Bayaran Balik", c: [
        "5.1 Semua harga adalah dalam Ringgit Malaysia (RM).",
        "5.2 Pembayaran diproses melalui saluran pihak ketiga yang ditetapkan oleh Platform.",
        "5.3 Pembatalan sebelum perkhidmatan bermula: bayaran balik penuh. Pembatalan selepas bermula: diselesaikan mengikut bahagian yang telah selesai.",
        "5.4 Jika perkhidmatan tidak dijalankan atau tidak diselesaikan, Pengguna boleh meminta bayaran balik penuh.",
        "5.5 Bayaran balik diproses dalam 3-7 hari bekerja.",
      ]},
      { t: "6. Pengendalian Pertikaian", c: [
        "6.1 Pertikaian antara Pengguna dan Penyedia Perkhidmatan hendaklah diselesaikan terlebih dahulu melalui rundingan mesra.",
        "6.2 Jika tidak selesai, Pengguna boleh mengadu kepada sokongan Platform; VGO akan membantu secara munasabah tetapi tidak bertanggungjawab secara langsung untuk pampasan.",
        "6.3 Pengguna juga boleh mengadu kepada Tribunal Tuntutan Pengguna Malaysia (TTPM).",
      ]},
      { t: "7. Perlindungan Data Peribadi", c: [
        "7.1 VGO mematuhi sepenuhnya Akta Perlindungan Data Peribadi 2010 (PDPA) Malaysia dan pindaannya.",
        "7.2 Pengumpulan, penggunaan, dan perlindungan data peribadi Pengguna diperincikan dalam Dasar Privasi.",
        "7.3 Pengguna bersetuju bahawa VGO boleh mendedahkan maklumat hubungan dan alamat yang perlu kepada Penyedia Perkhidmatan untuk tujuan perkhidmatan.",
      ]},
      { t: "8. Had Tanggungjawab", c: [
        "8.1 Platform disediakan \u201csebagaimana adanya\u201d. VGO tidak memberikan sebarang jaminan nyata atau tersirat.",
        "8.2 Kerugian kepada Pengguna yang timbul daripada tindakan bebas Penyedia Perkhidmatan ditanggung oleh Penyedia Perkhidmatan; VGO tidak bertanggungjawab secara langsung.",
        "8.3 Setakat yang dibenarkan oleh undang-undang, jumlah liabiliti VGO terhadap Pengguna tidak melebihi jumlah fi perkhidmatan yang dibayar oleh Pengguna melalui Platform dalam enam (6) bulan sebelumnya.",
      ]},
      { t: "9. Perbuatan Dilarang", c: [
        "9.1 Tiada pesanan palsu, bayaran balik berniat jahat, atau manipulasi ulasan.",
        "9.2 Tiada kandungan haram, melanggar hak, lucah, ganas, atau mengganggu.",
        "9.3 Tiada penyamaran identiti atau penyalahgunaan kelayakan.",
        "9.4 Pelanggaran boleh menyebabkan penggantungan atau penamatan akaun dan tindakan undang-undang.",
      ]},
      { t: "10. Tempoh & Penamatan", c: [
        "10.1 Perjanjian ini berkuat kuasa selepas pendaftaran berjaya.",
        "10.2 Pengguna boleh berhenti menggunakan Platform dan memadam akaun pada bila-bila masa.",
        "10.3 VGO boleh menggantung atau menamatkan akaun Pengguna mengikut budi bicaranya tanpa notis terlebih dahulu.",
      ]},
      { t: "11. Undang-undang & Penyelesaian Pertikaian", c: [
        "11.1 Perjanjian ini ditadbir oleh undang-undang Malaysia.",
        "11.2 Pertikaian hendaklah diselesaikan terlebih dahulu melalui rundingan mesra; jika gagal, ia hendaklah dikemukakan kepada mahkamah Kuala Lumpur.",
      ]},
      { t: "12. Lain-lain", c: [
        "12.1 Perjanjian ini merupakan keseluruhan perjanjian antara pihak-pihak.",
        "12.2 Jika mana-mana peruntukan dianggap tidak sah, kesahihan peruntukan selebihnya tidak terjejas.",
        "12.3 Pelaksanaan elektronik adalah sah dari segi undang-undang; mengklik \u201cSetuju\u201d merupakan kontrak.",
        "12.4 Notis boleh dihantar melalui pengumuman Platform, e-mel, atau SMS.",
        "12.5 Versi Bahasa: Perjanjian ini dilaksanakan dalam Bahasa Inggeris. Versi Bahasa Inggeris adalah versi yang berwibawa dan mengikat. Sebarang terjemahan Perjanjian ini ke dalam bahasa lain, termasuk tetapi tidak terhad kepada Bahasa Malaysia, disediakan semata-mata untuk kemudahan pihak-pihak dan tidak mengikat dari segi undang-undang. Sekiranya terdapat sebarang ketidakselarasan atau percanggahan antara versi Bahasa Inggeris dan mana-mana versi terjemahan, versi Bahasa Inggeris akan diutamakan dalam semua aspek.",
      ]},
    ],
    sig: "Saya telah membaca dengan teliti dan bersetuju dengan semua terma Perjanjian ini, terutamanya Perkara 2 (Peranan Platform), Perkara 5 (Pembayaran & Bayaran Balik), Perkara 7 (Perlindungan Data Peribadi), dan Perkara 8 (Had Tanggungjawab). Dengan mengklik \u201cSetuju dan Teruskan\u201d, Perjanjian ini berkuat kuasa.",
  },
};
export default function UserAgreementPage() {
  const { lang } = useLang();
  const c = C[lang] ?? C.en;
  return (
    <LegalShell label={c.label} title={c.title} version={c.version}>
      <p>{c.intro}</p>
      <div className="note-box">{c.note}</div>
      {c.secs.map((s, i) => (
        <section key={i}>
          <h2>{s.t}</h2>
          {s.c.map((p, j) => <p key={j} className="sub">{p}</p>)}
        </section>
      ))}
      <div className="sig-box">
        <strong>【{lang === "zh" ? "同意确认" : lang === "ms" ? "Pengesahan Persetujuan" : "Confirmation"}】</strong>
        <p style={{ marginTop: 8 }}>{c.sig}</p>
        <p style={{ fontSize: 12, color: "#9a3412", marginTop: 10 }}>support.vgo@gmail.com</p>
      </div>
    </LegalShell>
  );
}
```

## File: src/app/verify-success/page.tsx
```typescript
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
```

## File: src/app/loading.tsx
```typescript
export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center text-white font-black text-2xl shadow-[0_10px_30px_-6px_rgba(255,150,0,0.3)]">
            V
          </div>
          <div className="absolute inset-0 rounded-2xl bg-[#FF6600] animate-ping opacity-30" />
        </div>
        <p className="text-sm text-white/50 tracking-widest">加载中...</p>
      </div>
    </main>
  );
}
```

## File: src/components/AboutVGO.tsx
```typescript
"use client";
import { motion } from "motion/react";
import { BadgeCheck, Wallet, ShieldCheck } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function AboutVGO() {
  const { t } = useLang();
  const CARDS = [
    { Icon: BadgeCheck,  title: t("about_vgo_c1_t"), desc: t("about_vgo_c1_d") },
    { Icon: Wallet,      title: t("about_vgo_c2_t"), desc: t("about_vgo_c2_d") },
    { Icon: ShieldCheck, title: t("about_vgo_c3_t"), desc: t("about_vgo_c3_d") },
  ];
  const STATS = [
    { n: t("about_vgo_s1_n"), l: t("about_vgo_s1_l") },
    { n: t("about_vgo_s2_n"), l: t("about_vgo_s2_l") },
    { n: t("about_vgo_s3_n"), l: t("about_vgo_s3_l") },
    { n: t("about_vgo_s4_n"), l: t("about_vgo_s4_l") },
  ];
  return (
    <section id="about-vgo" className="relative bg-white py-20 sm:py-28 px-5 overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-10 right-1/4 w-96 h-96 bg-[var(--vgo)]/10 rounded-full blur-[110px]" />
      </div>
      <div className="relative max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <p className="text-[var(--vgo)] font-bold text-sm tracking-widest uppercase mb-3">{t("about_vgo_label")}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">{t("about_vgo_title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">{t("about_vgo_desc")}</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {CARDS.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-4">
                <c.Icon size={26} strokeWidth={2} className="text-[var(--vgo)]" />
              </div>
              <h3 className="font-black text-lg text-gray-900 mb-2">{c.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div key={s.l} className="text-center p-5 rounded-3xl bg-gradient-to-br from-orange-50 to-white border border-orange-100">
              <div className="text-3xl sm:text-4xl font-black text-[var(--vgo)] mb-1">{s.n}</div>
              <div className="text-xs sm:text-sm text-gray-600 font-semibold">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

## File: src/components/BackToTop.tsx
```typescript
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
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full flex items-center justify-center text-white shadow-lg transition-[transform,box-shadow,opacity,width,background-color] hover:scale-110 active:scale-95"
      style={{ background: "linear-gradient(135deg, #FF8C42 0%, #FF6600 100%)", boxShadow: "0 8px 20px rgba(255,102,0,.4)" }}
    >
      <ArrowUp size={20} strokeWidth={2.6} />
    </button>
  );
}
```

## File: src/components/PageShell.tsx
```typescript
"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { useLang } from "@/lib/i18n";

export default function PageShell({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  const { t } = useLang();
  return (
    <main className="relative min-h-screen bg-gray-950 text-white noise overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora absolute top-0 left-1/4 w-[600px] h-[300px] rounded-full bg-[#FFB800] blur-[160px] opacity-15" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition">
          <ArrowLeft size={16} />
          <span>V'GO</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 mb-12"
        >
          <p className="text-[#FFB800] font-bold text-xs tracking-widest uppercase mb-3">{label}</p>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">{title}</h1>
        </motion.div>

        <div className="prose prose-invert max-w-none pb-20">{children}</div>
      </div>

      <div className="relative z-10 border-t border-white/10 py-8 text-center text-xs text-white/40">
        <div>support.vgo@gmail.com</div>
        <div className="mt-1">+60 11-7269 1788 · Kota Kinabalu, Sabah</div>
        <div className="mt-3">© 2026 V'GO (V Go On). All Rights Reserved.</div>
      </div>
    </main>
  );
}
```

## File: src/components/ShareButton.tsx
```typescript
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
```

## File: src/app/ip-copyright/page.tsx
```typescript
"use client";

import { useLang } from "@/lib/i18n";
import PageShell from "@/components/PageShell";

const C = {
  zh: {
    label: "知识产权与版权", title: "知识产权与版权声明",
    updated: "最后更新：2026 年 1 月",
    intro: "V'GO 尊重知识产权，也保护自身和用户的权利。本声明说明 V'GO 平台自身、用户、师傅三方在内容上的权利归属，以及侵权投诉流程。",
    s1_t: "1. 平台自身的知识产权",
    s1: "V'GO 的软件代码、UI 设计、文案、Logo、品牌名称、商标及一切原创内容，均受马来西亚《1987 年版权法》和《2019 年商标法》保护。未经 V'GO 书面许可，任何人不得复制、修改、分发、商用或以任何方式利用。",
    s2_t: "2. 用户与师傅的内容权利",
    s2: "用户在 V'GO 发布的评价、二手商品信息、图片等内容，版权仍归用户所有。但用户授予 V'GO 非独占、免费、全球性的许可，用于在平台上展示和推广。师傅/商家上传的资质、作品图、店铺信息，版权归师傅/商家所有，同样授予 V'GO 展示许可。",
    s3_t: "3. 侵权投诉与通知-删除流程",
    s3: "如您认为 V'GO 平台上存在侵犯您知识产权的内容，请将以下材料发送至下方投诉邮箱：(1) 您的版权/商标证明；(2) 涉嫌侵权的具体链接；(3) 您的联系方式；(4) 一份声明，说明您善意认为该使用未经授权。",
    s4_t: "4. 处理时限",
    s4: "V'GO 收到符合要求的投诉后，将在 48 小时内下架涉嫌侵权内容，并通知被投诉方。被投诉方可提交反通知，我们将在核验后决定是否恢复内容。",
    s5_t: "5. 反通知机制",
    s5: "如您认为您的内容被错误下架，请提交反通知，说明内容不侵权的理由及法律依据。V'GO 将把反通知转交投诉方，并依法处理。",
    s6_t: "6. 重复侵权者处理",
    s6: "对于重复侵权的账号，V'GO 有权暂停或永久终止其账号。我们保留向执法机关举报严重侵权行为的权利。",
    s7_t: "7. 平台免责声明",
    s7: "V'GO 是信息撮合平台，不直接提供内容。对于用户上传的第三方内容，V'GO 保持中立，并在收到有效侵权通知后及时删除内容。根据马来西亚《1987 年版权法》第 43B 至 43E 条，V'GO 享有安全港（Safe Harbour）保护。",
    s8_t: "8. 投诉渠道",
    s8: "知识产权投诉专用邮箱：",
  },
  en: {
    label: "IP & Copyright", title: "Intellectual Property & Copyright Notice",
    updated: "Last updated: January 2026",
    intro: "V'GO respects intellectual property and protects the rights of itself and its users. This notice explains content ownership among V'GO, users, and pros, as well as the infringement complaint process.",
    s1_t: "1. V'GO's Own IP",
    s1: "V'GO's software code, UI design, copy, logo, brand name, trademarks, and all original content are protected under Malaysia's Copyright Act 1987 and Trademarks Act 2019. No part may be copied, modified, distributed, or commercially used without V'GO's written permission.",
    s2_t: "2. User & Pro Content Rights",
    s2: "Reviews, marketplace listings, and images posted by users remain the copyright of the users. However, users grant V'GO a non-exclusive, royalty-free, worldwide license to display and promote such content on the platform. Credentials, work photos, and shop info uploaded by pros/merchants remain their property, with a similar display license granted to VGO.",
    s3_t: "3. Infringement Complaint & Notice-Takedown",
    s3: "If you believe content on V'GO infringes your IP rights, please send the following to our complaint email: (1) your copyright/trademark proof; (2) the specific infringing link; (3) your contact info; (4) a statement that you believe in good faith the use is unauthorized.",
    s4_t: "4. Processing Timeline",
    s4: "Upon receiving a valid complaint, V'GO will take down the allegedly infringing content within 48 hours and notify the respondent. The respondent may submit a counter-notice, and we will decide whether to restore the content after review.",
    s5_t: "5. Counter-Notice",
    s5: "If you believe your content was wrongfully removed, please submit a counter-notice explaining why the content is not infringing, with legal basis. V'GO will forward the counter-notice to the complainant and handle accordingly.",
    s6_t: "6. Repeat Infringers",
    s6: "For accounts with repeated infringements, V'GO reserves the right to suspend or permanently terminate the account. We also reserve the right to report serious infringements to law enforcement.",
    s7_t: "7. Platform Disclaimer",
    s7: "V'GO is an information platform and does not directly provide content. For third-party content uploaded by users, V'GO remains neutral and removes content promptly upon valid infringement notice. Under Sections 43B to 43E of Malaysia's Copyright Act 1987, V'GO enjoys Safe Harbour protection.",
    s8_t: "8. Complaint Channel",
    s8: "Dedicated IP complaint email:",
  },
  ms: {
    label: "Harta Intelek & Hak Cipta", title: "Notis Harta Intelek & Hak Cipta",
    updated: "Kemas kini terakhir: Januari 2026",
    intro: "V'GO menghormati harta intelek dan melindungi hak dirinya serta pengguna. Notis ini menerangkan pemilikan kandungan antara V'GO, pengguna, dan tukang, serta proses aduan pelanggaran.",
    s1_t: "1. Harta Intelek V'GO",
    s1: "Kod perisian, reka bentuk UI, teks, logo, nama jenama, tanda dagangan, dan semua kandungan asal V'GO dilindungi di bawah Akta Hak Cipta 1987 dan Akta Tanda Dagangan 2019 Malaysia. Tiada bahagian boleh disalin, diubah, diedar, atau digunakan secara komersial tanpa kebenaran bertulis VGO.",
    s2_t: "2. Hak Kandungan Pengguna & Tukang",
    s2: "Ulasan, senarai pasar, dan imej yang dimuat naik oleh pengguna kekal hak cipta pengguna. Namun, pengguna memberi V'GO lesen bukan eksklusif, bebas royalti, seluruh dunia untuk memaparkan dan mempromosikan kandungan tersebut di platform. Kelayakan, gambar kerja, dan maklumat kedai yang dimuat naik oleh tukang/peniaga kekal milik mereka, dengan lesen paparan yang sama kepada VGO.",
    s3_t: "3. Aduan Pelanggaran & Notis-Turun",
    s3: "Jika anda percaya kandungan di V'GO melanggar hak IP anda, sila hantar yang berikut ke e-mel aduan kami: (1) bukti hak cipta/tanda dagangan anda; (2) pautan spesifik yang melanggar; (3) maklumat hubungan anda; (4) pernyataan bahawa anda percaya dengan ikhlas penggunaan itu tidak dibenarkan.",
    s4_t: "4. Tempoh Pemprosesan",
    s4: "Selepas menerima aduan yang sah, V'GO akan menurunkan kandungan yang didakwa melanggar dalam 48 jam dan memaklumkan responden. Responden boleh menghantar notis balas, dan kami akan memutuskan sama ada untuk memulihkan kandungan selepas semakan.",
    s5_t: "5. Notis Balas",
    s5: "Jika anda percaya kandungan anda dibuang secara salah, sila hantar notis balas yang menerangkan mengapa kandungan itu tidak melanggar, dengan asas undang-undang. V'GO akan memajukan notis balas kepada pengadu dan mengendalikannya dengan sewajarnya.",
    s6_t: "6. Pelanggar Berulang",
    s6: "Untuk akaun dengan pelanggaran berulang, V'GO berhak menggantung atau menamatkan akaun secara kekal. Kami juga berhak melaporkan pelanggaran serius kepada pihak berkuasa.",
    s7_t: "7. Penafian Platform",
    s7: "V'GO ialah platform maklumat dan tidak menyediakan kandungan secara langsung. Untuk kandungan pihak ketiga yang dimuat naik oleh pengguna, V'GO kekal neutral dan menurunkan kandungan dengan segera selepas notis pelanggaran yang sah. Di bawah Seksyen 43B hingga 43E Akta Hak Cipta 1987 Malaysia, V'GO menikmati perlindungan Safe Harbour.",
    s8_t: "8. Saluran Aduan",
    s8: "E-mel aduan IP khusus:",
  },
} as const;

export default function IpPage() {
  const { lang } = useLang();
  const c = C[lang] ?? C.zh;
  const SECTIONS = [
    { t: c.s1_t, d: c.s1 }, { t: c.s2_t, d: c.s2 }, { t: c.s3_t, d: c.s3 },
    { t: c.s4_t, d: c.s4 }, { t: c.s5_t, d: c.s5 }, { t: c.s6_t, d: c.s6 },
    { t: c.s7_t, d: c.s7 },
  ];
  return (
    <PageShell label={c.label} title={c.title}>
      <p className="text-sm text-white/50 mb-8">{c.updated}</p>
      <p className="text-white/75 leading-relaxed mb-12">{c.intro}</p>
      {SECTIONS.map((s) => (
        <div key={s.t} className="mb-10">
          <h2 className="text-xl font-black mb-3">{s.t}</h2>
          <p className="text-white/65 leading-relaxed">{s.d}</p>
        </div>
      ))}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
        <h2 className="text-xl font-black mb-3">{c.s8_t}</h2>
        <a href="mailto:support.vgo@gmail.com" className="text-[#FFB800] hover:underline">support.vgo@gmail.com</a>
      </div>
    </PageShell>
  );
}
```

## File: src/app/merchant-agreement/page.tsx
```typescript
"use client";

import { useLang } from "@/lib/i18n";
import LegalShell from "@/components/LegalShell";

type Sec = { t: string; c: { sub: boolean; txt: string }[] };
const C: Record<string, { label: string; title: string; version: string; intro: string; note: string; secs: Sec[]; sig: string; contact: string }> = {
  en: {
    label: "Merchant Agreement", title: "VGO Merchant Agreement",
    version: "Version 2026-M-V1 ｜ Effective: 27 September 2026",
    intro: "This Agreement is entered into between VGO (V Go On) (\u201cVGO\u201d or the \u201cPlatform\u201d) and the business entity applying to become a merchant on the VGO Platform (\u201cMerchant\u201d or \u201cyou\u201d). By clicking \u201cAgree and Continue\u201d or confirming via any electronic means, you are deemed to have read, understood, and accepted all terms of this Agreement.",
    note: "Under Malaysia's Electronic Commerce Act 2006, this Agreement is executed electronically and carries full legal effect. This Agreement, together with the Privacy Policy and Terms of Service, forms the complete legal framework. In case of conflict, this Agreement prevails.",
    secs: [
      { t: "1. Definitions", c: [
        { sub: true, txt: "1.1 \u201cPlatform\u201d means the VGO website, mobile application, and related technical services." },
        { sub: true, txt: "1.2 \u201cMerchant\u201d means a business entity approved by VGO to sell goods or services on the Platform." },
        { sub: true, txt: "1.3 \u201cCustomer\u201d means the end user who places orders via the Platform." },
        { sub: true, txt: "1.4 \u201cCommission\u201d means the service fee charged by VGO for completed orders on the Platform." },
        { sub: true, txt: "1.5 \u201cDeposit\u201d means the performance bond required for certain categories or partnership models." },
      ]},
      { t: "2. Platform Role", c: [
        { sub: true, txt: "2.1 VGO acts solely as a technology intermediary providing information matching, order management, and payment settlement. It is not the provider of goods or services." },
        { sub: true, txt: "2.2 This Agreement does not constitute employment, partnership, franchise, or joint venture. The Merchant is an independent business operating at its own risk." },
        { sub: true, txt: "2.3 VGO does not participate in transactions between Merchant and Customer, and is not directly liable for the quality, legality, or safety of goods or services." },
      ]},
      { t: "3. Merchant Obligations", c: [
        { sub: true, txt: "3.1 Ensure all submitted information (business registration, shop qualifications, category, identity) is true, accurate, complete, and valid." },
        { sub: true, txt: "3.2 Ensure possession of all licenses, permits, and tax registrations required for lawful operation in Malaysia." },
        { sub: true, txt: "3.3 Transparent pricing, honest descriptions of goods or services; no false advertising or misleading." },
        { sub: true, txt: "3.4 Deliver on time; maintain product or service quality; comply with industry standards and VGO service specifications." },
        { sub: true, txt: "3.5 Respect customers; no harassment, discrimination, or abuse; respond to customer complaints within 24 hours." },
        { sub: true, txt: "3.6 Prohibited acts: (a) soliciting off-platform transactions to evade commission; (b) posting false reviews or manipulating ratings; (c) impersonating others or misusing trademarks; (d) uploading illegal, infringing, or prohibited goods; (e) selling counterfeit or substandard goods." },
        { sub: true, txt: "3.7 Tax Responsibility: All taxes arising from the Merchant's business (including income tax, consumption tax, SST, etc.) are the Merchant's sole responsibility. VGO will withhold only where legally required." },
      ]},
      { t: "4. Platform Rights", c: [
        { sub: true, txt: "4.1 VGO may review merchant applications and reserves the right to reject or revoke eligibility without explanation." },
        { sub: true, txt: "4.2 VGO may monitor the Merchant's operations, product quality, customer reviews, and compliance." },
        { sub: true, txt: "4.3 VGO may, at its discretion, take one or more of the following actions for violations: warning, corrective notice, delisting products, temporary or permanent shop closure, forfeiture of Deposit, freezing of settlement funds, or legal action." },
        { sub: true, txt: "4.4 VGO may display Merchant shop information, product listings, and customer reviews on the Platform for promotional purposes." },
        { sub: true, txt: "4.5 VGO reserves the right to amend this Agreement based on legal or operational needs. Amendments will be notified via Platform announcements; continued use constitutes acceptance." },
      ]},
      { t: "5. Commission & Settlement", c: [
        { sub: true, txt: "5.1 Commission rates are published on the Platform. VGO may adjust rates based on market conditions, with prior notice." },
        { sub: true, txt: "5.2 After order completion, VGO will settle the balance (net of commission) to the Merchant's designated account within the agreed cycle (e.g., weekly, monthly)." },
        { sub: true, txt: "5.3 In the event of refunds or returns, VGO may deduct the corresponding amount from the Merchant's pending settlement or Deposit." },
        { sub: true, txt: "5.4 Minimum Settlement: If accumulated payable is below RM 50, settlement is deferred to the next cycle." },
      ]},
      { t: "6. Intellectual Property & Data", c: [
        { sub: true, txt: "6.1 All Platform content (software, trademarks, logo, design, text, database) is the intellectual property of VGO." },
        { sub: true, txt: "6.2 The Merchant grants VGO a worldwide, non-exclusive, royalty-free license to use, reproduce, and display uploaded content for promotion of the Platform, shop, goods, and services." },
        { sub: true, txt: "6.3 The Merchant warrants that all uploaded product images, descriptions, and trademarks are legally authorized. Any third-party claim arising from infringement is the Merchant's sole responsibility." },
        { sub: true, txt: "6.4 Data Ownership: Operational data generated by the Merchant on the Platform (order records, sales statistics, customer reviews) is owned by VGO." },
        { sub: true, txt: "6.5 Review Ownership: Customer review content is owned by VGO. The Merchant shall not request removal of genuine reviews or manipulate ratings in any way." },
      ]},
      { t: "7. Personal Data Protection", c: [
        { sub: true, txt: "7.1 Both parties undertake to strictly comply with Malaysia's Personal Data Protection Act 2010 (PDPA) and its amendments." },
        { sub: true, txt: "7.2 When handling customer personal data, the Merchant shall: use it solely to fulfill orders; apply appropriate security measures; not disclose to third parties without consent; delete or return it upon VGO's request after order completion." },
        { sub: true, txt: "7.3 Any actual or suspected data breach must be reported to VGO immediately." },
      ]},
      { t: "8. Confidentiality", c: [
        { sub: true, txt: "8.1 The Merchant shall keep confidential all of VGO's trade secrets, technical information, customer data, and other non-public information." },
        { sub: true, txt: "8.2 Confidentiality obligations survive termination of this Agreement." },
      ]},
      { t: "9. Limitation of Liability", c: [
        { sub: true, txt: "9.1 The Platform is provided \u201cas is\u201d. VGO makes no express or implied warranties regarding continuity, error-free operation, or security." },
        { sub: true, txt: "9.2 The Merchant bears full responsibility for the quality, safety, and legality of its goods or services. Any loss to customers or third parties arising from the Merchant's goods or services is borne by the Merchant." },
        { sub: true, txt: "9.3 Liability Cap: To the maximum extent permitted by law, VGO's aggregate liability to the Merchant shall not exceed the total commission received by VGO from such Merchant in the preceding six (6) months. VGO is not liable for any indirect, incidental, punitive, or consequential damages." },
        { sub: true, txt: "9.4 Force Majeure: Neither party is liable for failure to perform due to force majeure (natural disasters, epidemics, war, governmental acts, network outages), provided prompt notice is given and reasonable efforts are made to mitigate loss." },
      ]},
      { t: "10. Term & Termination", c: [
        { sub: true, txt: "10.1 This Agreement takes effect upon approval of the onboarding application." },
        { sub: true, txt: "10.2 Termination: (a) either party may terminate with 30 days' written notice; (b) immediate termination for material breach not cured within 15 days; (c) VGO may suspend or terminate the Merchant's account at its sole discretion without prior notice." },
        { sub: true, txt: "10.3 Upon termination, VGO will settle all payable amounts up to the termination date; the Merchant shall immediately cease using the Platform, delete customer information obtained, and remove all product and shop listings." },
      ]},
      { t: "11. Governing Law & Dispute Resolution", c: [
        { sub: true, txt: "11.1 This Agreement is governed by and construed under the laws of Malaysia." },
        { sub: true, txt: "11.2 Disputes shall first be resolved through friendly negotiation; failing which, they shall be submitted to the courts of Kuala Lumpur." },
      ]},
      { t: "12. Miscellaneous", c: [
        { sub: true, txt: "12.1 This Agreement constitutes the entire agreement between the parties and supersedes all prior communications." },
        { sub: true, txt: "12.2 If any provision is held invalid or unenforceable, the validity of the remaining provisions is unaffected." },
        { sub: true, txt: "12.3 Electronic Execution: Under the Electronic Commerce Act 2006, clicking \u201cAgree\u201d on the Platform constitutes a valid contract." },
        { sub: true, txt: "12.4 Notices may be sent via Platform announcements, email, or SMS to the Merchant's registered contact." },
        { sub: true, txt: "12.5 Language Version: This Agreement is executed in the English language. The English version shall be the authoritative and controlling version. Any translation of this Agreement into any other language, including but not limited to Bahasa Malaysia, is provided solely for the convenience of the parties and shall not be legally binding. In the event of any inconsistency or conflict between the English version and any translated version, the English version shall prevail in all respects." },
      ]},
    ],
    sig: "I have carefully read and agree to all terms of this Agreement, particularly Article 4 (Platform Rights), Article 7 (Personal Data Protection), and Article 9 (Limitation of Liability). By clicking \u201cAgree and Continue\u201d, this Agreement becomes effective.",
    contact: "For inquiries, contact: support.vgo@gmail.com",
  },
  ms: {
    label: "Perjanjian Peniaga", title: "Perjanjian Peniaga VGO",
    version: "Versi 2026-M-V1 ｜ Berkuat kuasa: 27 September 2026",
    intro: "Perjanjian ini dimeterai antara VGO (V Go On) (\u201cVGO\u201d atau \u201cPlatform\u201d) dengan entiti perniagaan yang memohon menjadi peniaga di Platform VGO (\u201cPeniaga\u201d atau \u201canda\u201d). Dengan mengklik \u201cSetuju dan Teruskan\u201d atau mengesahkan melalui apa-apa cara elektronik, anda dianggap telah membaca, memahami, dan menerima semua terma Perjanjian ini.",
    note: "Di bawah Akta Perdagangan Elektronik 2006 Malaysia, Perjanjian ini dilaksanakan secara elektronik dan mempunyai kesan undang-undang penuh. Perjanjian ini, bersama Dasar Privasi dan Terma Perkhidmatan, membentuk rangka kerja undang-undang lengkap. Jika berlaku percanggahan, Perjanjian ini diutamakan.",
    secs: [
      { t: "1. Definisi", c: [
        { sub: true, txt: "1.1 \u201cPlatform\u201d merujuk kepada laman web, aplikasi mudah alih, dan perkhidmatan teknikal berkaitan VGO." },
        { sub: true, txt: "1.2 \u201cPeniaga\u201d merujuk kepada entiti perniagaan yang diluluskan oleh VGO untuk menjual barang atau perkhidmatan di Platform." },
        { sub: true, txt: "1.3 \u201cPelanggan\u201d merujuk kepada pengguna akhir yang membuat pesanan melalui Platform." },
        { sub: true, txt: "1.4 \u201cKomisen\u201d merujuk kepada fi perkhidmatan yang dikenakan oleh VGO bagi pesanan yang diselesaikan di Platform." },
        { sub: true, txt: "1.5 \u201cDeposit\u201d merujuk kepada bon prestasi yang diperlukan untuk kategori tertentu atau model perkongsian." },
      ]},
      { t: "2. Peranan Platform", c: [
        { sub: true, txt: "2.1 VGO bertindak semata-mata sebagai perantara teknologi yang menyediakan padanan maklumat, pengurusan pesanan, dan penyelesaian pembayaran. Ia bukan penyedia barang atau perkhidmatan." },
        { sub: true, txt: "2.2 Perjanjian ini tidak membentuk pekerjaan, perkongsian, francais, atau usaha sama. Peniaga adalah entiti perniagaan bebas yang beroperasi atas risiko sendiri." },
        { sub: true, txt: "2.3 VGO tidak menyertai transaksi antara Peniaga dan Pelanggan, dan tidak bertanggungjawab secara langsung terhadap kualiti, kesahihan, atau keselamatan barang atau perkhidmatan." },
      ]},
      { t: "3. Kewajipan Peniaga", c: [
        { sub: true, txt: "3.1 Memastikan semua maklumat yang dikemukakan (pendaftaran perniagaan, kelayakan kedai, kategori, identiti) adalah benar, tepat, lengkap, dan sah." },
        { sub: true, txt: "3.2 Memastikan memiliki semua lesen, permit, dan pendaftaran cukai yang diperlukan untuk beroperasi secara sah di Malaysia." },
        { sub: true, txt: "3.3 Harga telus, penerangan jujur tentang barang atau perkhidmatan; tiada pengiklanan palsu atau mengelirukan." },
        { sub: true, txt: "3.4 Menghantar tepat pada masanya; mengekalkan kualiti produk atau perkhidmatan; mematuhi piawaian industri dan spesifikasi perkhidmatan VGO." },
        { sub: true, txt: "3.5 Menghormati pelanggan; tiada gangguan, diskriminasi, atau penderaan; balas aduan pelanggan dalam 24 jam." },
        { sub: true, txt: "3.6 Perbuatan dilarang: (a) memujuk pelanggan bertransaksi di luar Platform untuk mengelak komisen; (b) menyiarkan ulasan palsu atau memanipulasi penilaian; (c) menyamar sebagai orang lain atau menyalahgunakan tanda dagangan; (d) memuat naik barang haram, melanggar hak, atau dilarang; (e) menjual barang tiruan atau tidak berkualiti." },
        { sub: true, txt: "3.7 Tanggungjawab Cukai: Semua cukai yang timbul daripada perniagaan Peniaga (termasuk cukai pendapatan, cukai penggunaan, SST, dll.) adalah tanggungjawab Peniaga sepenuhnya. VGO akan menahan hanya di mana dikehendaki oleh undang-undang." },
      ]},
      { t: "4. Hak Platform", c: [
        { sub: true, txt: "4.1 VGO boleh menyemak permohonan peniaga dan berhak menolak atau membatalkan kelayakan tanpa penjelasan." },
        { sub: true, txt: "4.2 VGO boleh memantau operasi, kualiti produk, ulasan pelanggan, dan pematuhan Peniaga." },
        { sub: true, txt: "4.3 VGO boleh, mengikut budi bicaranya, mengambil satu atau lebih tindakan berikut atas pelanggaran: amaran, notis pembetulan, menyahsenarai produk, penutupan kedai sementara atau kekal, pelucutan Deposit, pembekuan dana penyelesaian, atau tindakan undang-undang." },
        { sub: true, txt: "4.4 VGO boleh memaparkan maklumat kedai, penyenaraian produk, dan ulasan pelanggan Peniaga di Platform untuk tujuan promosi." },
        { sub: true, txt: "4.5 VGO berhak meminda Perjanjian ini berdasarkan keperluan undang-undang atau operasi. Pindaan akan dimaklumkan melalui pengumuman Platform; penggunaan berterusan dianggap sebagai penerimaan." },
      ]},
      { t: "5. Komisen & Penyelesaian", c: [
        { sub: true, txt: "5.1 Kadar komisen diumumkan di Platform. VGO boleh menyelaraskan kadar mengikut keadaan pasaran, dengan notis terlebih dahulu." },
        { sub: true, txt: "5.2 Selepas pesanan selesai, VGO akan menyelesaikan baki (selepas ditolak komisen) ke akaun Peniaga yang ditetapkan dalam kitaran yang dipersetujui (contohnya, mingguan, bulanan)." },
        { sub: true, txt: "5.3 Sekiranya berlaku bayaran balik atau pemulangan, VGO boleh menolak jumlah yang berkenaan daripada penyelesaian tertunggak atau Deposit Peniaga." },
        { sub: true, txt: "5.4 Penyelesaian Minimum: Jika jumlah perlu dibayar terkumpul kurang daripada RM 50, penyelesaian ditangguhkan ke kitaran seterusnya." },
      ]},
      { t: "6. Harta Intelek & Data", c: [
        { sub: true, txt: "6.1 Semua kandungan Platform (perisian, tanda dagangan, logo, reka bentuk, teks, pangkalan data) adalah harta intelek VGO." },
        { sub: true, txt: "6.2 Peniaga memberikan VGO lesen seluruh dunia, bukan eksklusif, bebas royalti untuk menggunakan, menghasilkan semula, dan memaparkan kandungan yang dimuat naik bagi tujuan promosi Platform, kedai, barang, dan perkhidmatan." },
        { sub: true, txt: "6.3 Peniaga menjamin bahawa semua imej produk, penerangan, dan tanda dagangan yang dimuat naik adalah sah di sisi undang-undang. Sebarang tuntutan pihak ketiga yang timbul daripada pelanggaran adalah tanggungjawab Peniaga sepenuhnya." },
        { sub: true, txt: "6.4 Pemilikan Data: Data operasi yang dijana oleh Peniaga di Platform (rekod pesanan, statistik jualan, ulasan pelanggan) dimiliki oleh VGO." },
        { sub: true, txt: "6.5 Pemilikan Ulasan: Kandungan ulasan pelanggan dimiliki oleh VGO. Peniaga tidak boleh meminta pemadaman ulasan tulen atau memanipulasi penilaian dalam apa-apa cara." },
      ]},
      { t: "7. Perlindungan Data Peribadi", c: [
        { sub: true, txt: "7.1 Kedua-dua pihak berjanji mematuhi sepenuhnya Akta Perlindungan Data Peribadi 2010 (PDPA) Malaysia dan pindaannya." },
        { sub: true, txt: "7.2 Semasa mengendalikan data peribadi pelanggan, Peniaga hendaklah: menggunakannya semata-mata untuk memenuhi pesanan; menggunakan langkah keselamatan yang sewajarnya; tidak mendedahkan kepada pihak ketiga tanpa kebenaran; memadam atau memulangkannya atas permintaan VGO selepas pesanan selesai." },
        { sub: true, txt: "7.3 Sebarang pelanggaran data sebenar atau disyaki mesti dilaporkan kepada VGO dengan segera." },
      ]},
      { t: "8. Kerahsiaan", c: [
        { sub: true, txt: "8.1 Peniaga hendaklah merahsiakan semua rahsia dagang, maklumat teknikal, data pelanggan, dan maklumat bukan awam VGO yang lain." },
        { sub: true, txt: "8.2 Kewajipan kerahsiaan kekal selepas penamatan Perjanjian ini." },
      ]},
      { t: "9. Had Tanggungjawab", c: [
        { sub: true, txt: "9.1 Platform disediakan \u201csebagaimana adanya\u201d. VGO tidak memberikan sebarang jaminan nyata atau tersirat mengenai kesinambungan, operasi tanpa ralat, atau keselamatan." },
        { sub: true, txt: "9.2 Peniaga memikul tanggungjawab penuh terhadap kualiti, keselamatan, dan kesahihan barang atau perkhidmatannya. Sebarang kerugian kepada pelanggan atau pihak ketiga yang timbul daripada barang atau perkhidmatan Peniaga ditanggung oleh Peniaga." },
        { sub: true, txt: "9.3 Had Liabiliti: Setakat yang dibenarkan oleh undang-undang, jumlah liabiliti VGO terhadap Peniaga tidak melebihi jumlah komisen yang diterima VGO daripada Peniaga tersebut dalam enam (6) bulan sebelumnya. VGO tidak bertanggungjawab atas sebarang kerosakan tidak langsung, sampingan, punitif, atau berbangkit." },
        { sub: true, txt: "9.4 Force Majeure: Tiada pihak bertanggungjawab atas kegagalan melaksanakan akibat force majeure (bencana alam, wabak, peperangan, tindakan kerajaan, gangguan rangkaian), dengan syarat notis segera diberikan dan usaha munasabah dibuat untuk mengurangkan kerugian." },
      ]},
      { t: "10. Tempoh & Penamatan", c: [
        { sub: true, txt: "10.1 Perjanjian ini berkuat kuasa selepas kelulusan permohonan pendaftaran." },
        { sub: true, txt: "10.2 Penamatan: (a) mana-mana pihak boleh menamatkan dengan notis bertulis 30 hari; (b) penamatan serta-merta bagi pelanggaran material yang tidak dibetulkan dalam 15 hari; (c) VGO boleh menggantung atau menamatkan akaun Peniaga mengikut budi bicaranya tanpa notis terlebih dahulu." },
        { sub: true, txt: "10.3 Selepas penamatan, VGO akan menyelesaikan semua jumlah yang perlu dibayar sehingga tarikh penamatan; Peniaga hendaklah segera berhenti menggunakan Platform, memadam maklumat pelanggan yang diperoleh, dan mengalih keluar semua penyenaraian produk dan kedai." },
      ]},
      { t: "11. Undang-undang & Penyelesaian Pertikaian", c: [
        { sub: true, txt: "11.1 Perjanjian ini ditadbir dan ditafsirkan di bawah undang-undang Malaysia." },
        { sub: true, txt: "11.2 Pertikaian hendaklah diselesaikan terlebih dahulu melalui rundingan mesra; jika gagal, ia hendaklah dikemukakan kepada mahkamah Kuala Lumpur." },
      ]},
      { t: "12. Lain-lain", c: [
        { sub: true, txt: "12.1 Perjanjian ini merupakan keseluruhan perjanjian antara pihak-pihak dan menggantikan semua komunikasi sebelumnya." },
        { sub: true, txt: "12.2 Jika mana-mana peruntukan dianggap tidak sah atau tidak boleh dikuatkuasakan, kesahihan peruntukan selebihnya tidak terjejas." },
        { sub: true, txt: "12.3 Pelaksanaan Elektronik: Di bawah Akta Perdagangan Elektronik 2006, mengklik \u201cSetuju\u201d di Platform merupakan kontrak yang sah." },
        { sub: true, txt: "12.4 Notis boleh dihantar melalui pengumuman Platform, e-mel, atau SMS ke kenalan berdaftar Peniaga." },
        { sub: true, txt: "12.5 Versi Bahasa: Perjanjian ini dilaksanakan dalam Bahasa Inggeris. Versi Bahasa Inggeris adalah versi yang berwibawa dan mengikat. Sebarang terjemahan Perjanjian ini ke dalam bahasa lain, termasuk tetapi tidak terhad kepada Bahasa Malaysia, disediakan semata-mata untuk kemudahan pihak-pihak dan tidak mengikat dari segi undang-undang. Sekiranya terdapat sebarang ketidakselarasan atau percanggahan antara versi Bahasa Inggeris dan mana-mana versi terjemahan, versi Bahasa Inggeris akan diutamakan dalam semua aspek." },
      ]},
    ],
    sig: "Saya telah membaca dengan teliti dan bersetuju dengan semua terma Perjanjian ini, terutamanya Perkara 4 (Hak Platform), Perkara 7 (Perlindungan Data Peribadi), dan Perkara 9 (Had Tanggungjawab). Dengan mengklik \u201cSetuju dan Teruskan\u201d, Perjanjian ini berkuat kuasa.",
    contact: "Untuk pertanyaan, hubungi: support.vgo@gmail.com",
  },
};

export default function MerchantAgreementPage() {
  const { lang } = useLang();
  const c = C[lang] ?? C.en;
  return (
    <LegalShell label={c.label} title={c.title} version={c.version}>
      <p>{c.intro}</p>
      <div className="note-box">{c.note}</div>
      {c.secs.map((s, i) => (
        <section key={i}>
          <h2>{s.t}</h2>
          {s.c.map((p, j) => (
            <p key={j} className={p.sub ? "sub" : ""}>{p.txt}</p>
          ))}
        </section>
      ))}
      <div className="sig-box">
        <strong>【{lang === "zh" ? "同意确认" : lang === "ms" ? "Pengesahan Persetujuan" : "Confirmation"}】</strong>
        <p style={{ marginTop: 8, marginBottom: 8 }}>{c.sig}</p>
        <p style={{ fontSize: 12, color: "#6b7280" }}>{c.contact}</p>
      </div>
    </LegalShell>
  );
}
```

## File: src/app/verify-failed/page.tsx
```typescript
"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
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
```

## File: src/app/robots.ts
```typescript
export const dynamic = "force-static";

import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = 'https://vgo-website.vercel.app';
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/verify-success', '/verify-failed', '/api/'] }],
    sitemap: base + '/sitemap.xml',
  };
}
```

## File: src/app/sitemap.ts
```typescript
export const dynamic = "force-static";

import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://vgo-website.vercel.app';
  const now = new Date();
  const routes: { url: string; priority: number; freq: 'weekly' | 'monthly' | 'yearly' }[] = [
    { url: '/', priority: 1.0, freq: 'weekly' },
    { url: '/about', priority: 0.8, freq: 'monthly' },
    { url: '/contact', priority: 0.9, freq: 'monthly' },
    { url: '/faq', priority: 0.7, freq: 'monthly' },
    { url: '/partner', priority: 0.8, freq: 'monthly' },
    { url: '/merchant', priority: 0.9, freq: 'monthly' },
    { url: '/technician', priority: 0.9, freq: 'monthly' },
    { url: '/offers', priority: 0.7, freq: 'weekly' },
    { url: '/how-it-works/customer', priority: 0.7, freq: 'monthly' },
    { url: '/how-it-works/merchant', priority: 0.7, freq: 'monthly' },
    { url: '/how-it-works/technician', priority: 0.7, freq: 'monthly' },
    { url: '/privacy', priority: 0.5, freq: 'yearly' },
    { url: '/terms', priority: 0.5, freq: 'yearly' },
    { url: '/user-agreement', priority: 0.4, freq: 'yearly' },
    { url: '/merchant-agreement', priority: 0.4, freq: 'yearly' },
    { url: '/pro-agreement', priority: 0.4, freq: 'yearly' },
    { url: '/agent-agreement', priority: 0.4, freq: 'yearly' },
    { url: '/ip-copyright', priority: 0.3, freq: 'yearly' },
  ];
  return routes.map((r) => ({ url: base + r.url, lastModified: now, changeFrequency: r.freq, priority: r.priority }));
}
```

## File: src/components/Cooperation.tsx
```typescript
"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Store, Wrench, Crown, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function Cooperation() {
  const { t } = useLang();
  const ITEMS = [
    { Icon: Store,  tKey: "coop_merchant_t", dKey: "coop_merchant_d", cKey: "coop_merchant_cta" },
    { Icon: Wrench, tKey: "coop_tech_t",     dKey: "coop_tech_d",     cKey: "coop_tech_cta" },
    { Icon: Crown,  tKey: "coop_agent_t",    dKey: "coop_agent_d",    cKey: "coop_agent_cta" },
  ];
  return (
    <section id="cooperation" className="relative bg-white py-20 sm:py-28 px-5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 -right-20 w-[400px] h-[400px] rounded-full bg-orange-100 opacity-30 blur-[120px]" />
        <div className="absolute bottom-10 -left-20 w-[400px] h-[400px] rounded-full bg-amber-100 opacity-30 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[var(--vgo)] font-black text-xs tracking-[0.25em] uppercase mb-3">{t("coop_home_label")}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">{t("coop_home_title")}</h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">{t("coop_home_sub")}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.tKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-7 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-[var(--vgo)]/40 hover:shadow-2xl hover:shadow-orange-500/10 transition-[transform,box-shadow,opacity,width,background-color]"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--vgo)] to-[var(--vgo-dark)] flex items-center justify-center shadow-lg shadow-orange-500/30 mb-5">
                <it.Icon size={26} strokeWidth={2.2} className="text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">{t(it.tKey as any)}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 min-h-[66px]">{t(it.dKey as any)}</p>
              <Link href="/partner" className="inline-flex items-center gap-1.5 text-sm font-black text-[var(--vgo)] group-hover:gap-3 transition-[transform,box-shadow,opacity,width,background-color]">
                {t(it.cKey as any)} <ArrowRight size={15} strokeWidth={2.5} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/partner"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-b from-[var(--vgo)] to-[var(--vgo-dark)] text-white font-black shadow-xl shadow-orange-500/30 hover:brightness-110 active:scale-[0.98] transition"
          >
            {t("coop_home_more" as any)}
            <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
```

## File: src/components/CoverageSection.tsx
```typescript
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
  const mainCities = COVERAGE_CITIES.filter((c) => c.areas.length > 0);
  const moreTowns = COVERAGE_CITIES.filter((c) => c.areas.length === 0);
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
      <h3 className="font-black text-base mb-2">{cl.label}</h3>
      <p className="text-sm text-white/65 mb-5">{cl.sub}</p>
      <div className="space-y-3 mb-5">
        {mainCities.map((city) => (
          <div key={city.key}>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="font-bold text-sm">{city.label[lang]}</span>
              <span className="text-[10px] text-green-400/70 ml-1">{cl.live_t}</span>
            </div>
            <div className="text-xs text-white/50 pl-4">{city.areas.map((a) => a[lang]).join(" · ")}</div>
          </div>
        ))}
      </div>
      <div className="pt-3 border-t border-white/10 mb-5">
        <p className="text-xs font-bold text-white/50 mb-2">{cl.more_t}</p>
        <div className="flex flex-wrap gap-1.5">
          {moreTowns.map((city) => (
            <span key={city.key} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/55">{city.label[lang]}</span>
          ))}
        </div>
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
```

## File: src/components/LegalShell.tsx
```typescript
"use client";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function LegalShell({
  label,
  title,
  version,
  summary,
  children,
}: {
  label: string;
  title: string;
  version?: string;
  summary?: { title: string; items: string[] };
  children: React.ReactNode;
}) {
  const { t } = useLang();
  return (
    <main className="min-h-screen bg-[#FAFAF7] text-gray-900">
      {/* 顶栏 */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-10 py-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[var(--vgo)] transition">
            <ArrowLeft size={16} />
            <span>V'GO</span>
          </Link>
          <div className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Legal Document</div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 sm:px-10 py-10">
        {/* 文件头 */}
        <header className="bg-white border border-gray-200 rounded-2xl p-7 sm:p-9 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--vgo)] to-[var(--vgo-dark)] flex items-center justify-center shadow-lg shadow-orange-500/30">
              <FileText size={18} className="text-white" strokeWidth={2.5} />
            </div>
            <p className="text-[var(--vgo)] font-black text-[11px] tracking-[0.2em] uppercase">{label}</p>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 mb-3 leading-tight">{title}</h1>
          {version && (
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
              <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-bold">{version}</span>
              <span className="px-2.5 py-1 rounded-full bg-green-50 text-green-700 font-bold">✓ 法律有效</span>
            </div>
          )}
        </header>

        {/* 3 分钟摘要 */}
        {summary && (
          <section className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 rounded-2xl p-6 sm:p-7 mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">⏱</span>
              <h2 className="text-sm font-black tracking-widest text-orange-800 uppercase">{summary.title}</h2>
            </div>
            <ul className="space-y-2.5">
              {summary.items.map((it, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-orange-900">
                  <span className="font-black text-orange-500 shrink-0 mt-0.5">{i + 1}.</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 正文 */}
        <article className="legal-body bg-white border border-gray-200 rounded-2xl p-7 sm:p-9">{children}</article>

        {/* 页脚 */}
        <footer className="mt-10 pt-8 border-t border-gray-200 text-center">
          <div className="text-sm font-black text-gray-800 tracking-widest">V'GO</div>
          <div className="mt-1 text-xs text-gray-500">V'GO (V Go On) · Malaysia Home Service Platform</div>
          <div className="mt-2 text-xs text-gray-500">support.vgo@gmail.com</div>
          <div className="mt-1 text-xs text-gray-400">Kota Kinabalu, Sabah, Malaysia</div>
          <div className="mt-4 text-[11px] text-gray-400">© 2026 V'GO (V Go On). All Rights Reserved.</div>
        </footer>
      </div>

      <style jsx global>{`
        .legal-body section {
          margin-bottom: 36px;
          scroll-margin-top: 80px;
        }
        .legal-body section:last-child { margin-bottom: 0; }
        .legal-body h2 {
          font-size: 18px;
          font-weight: 900;
          color: #111827;
          margin: 0 0 18px;
          padding: 0 0 14px 0;
          border-bottom: 3px solid var(--vgo);
          line-height: 1.4;
          letter-spacing: 0.01em;
        }
        .legal-body p {
          font-size: 16.5px;
          line-height: 2;
          color: #374151;
          margin: 0 0 14px;
          letter-spacing: 0.005em;
        }
        .legal-body p.sub {
          padding-left: 22px;
          color: #4b5563;
        }
        .legal-body p strong, .legal-body p b {
          color: #111827;
          font-weight: 800;
        }
        .legal-body .hl {
          background: linear-gradient(180deg, transparent 60%, #fef3c7 60%);
          padding: 0 2px;
          font-weight: 700;
          color: #111827;
        }
        .legal-body .sig-box {
          margin-top: 42px;
          padding: 22px 26px;
          background: linear-gradient(135deg, #fff7ed, #ffedd5);
          border: 2px solid #fed7aa;
          border-radius: 14px;
          font-size: 15px;
          line-height: 1.9;
          color: #7c2d12;
        }
        .legal-body .sig-box strong {
          display: block;
          font-size: 15px;
          font-weight: 900;
          color: #9a3412;
          margin-bottom: 10px;
          letter-spacing: 0.05em;
        }
        .legal-body .note-box {
          padding: 16px 20px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 14px;
          font-size: 14.5px;
          line-height: 1.8;
          color: #1e40af;
          margin: 22px 0 30px;
        }
        @media (max-width: 640px) {
          .legal-body p { font-size: 16px; line-height: 1.9; }
          .legal-body h2 { font-size: 17px; }
        }
      `}</style>
    </main>
  );
}
```

## File: src/components/NewsTicker.tsx
```typescript
"use client";
import { useLang } from "@/lib/i18n";

export default function NewsTicker() {
  const { t } = useLang();
  const NEWS = [t("news_1"), t("news_2"), t("news_3"), t("news_4"), t("news_5")];
  const items = [...NEWS, ...NEWS];

  return (
    <section id="news" className="relative bg-gradient-to-r from-[#E55A00] to-[#FF7A1F] text-white overflow-hidden scroll-mt-20">
      <div className="flex items-center">
        <div className="shrink-0 px-4 sm:px-6 py-3 bg-black/20 font-bold text-sm flex items-center gap-2 z-10">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>{t("news_label")}</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="marquee flex whitespace-nowrap">
            {items.map((n, i) => (
              <span key={i} className="px-6 py-3 text-sm font-medium inline-flex items-center">
                {n}
                <span className="ml-6 text-white/50">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

## File: src/components/PainPoints.tsx
```typescript
"use client";
import { motion } from "motion/react";
import { AlertCircle, Wallet, Clock, Search } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function PainPoints() {
  const { t } = useLang();
  const PAINS = [
    { Icon: AlertCircle, text: t("pain_1"), img: "/scenes/leak.jpg" },
    { Icon: Wallet,      text: t("pain_2"), img: "/scenes/burst.jpg" },
    { Icon: Clock,       text: t("pain_3"), img: "/scenes/clog.jpg" },
    { Icon: Search,      text: t("pain_4"), img: "/scenes/power.jpg" },
  ];
  return (
    <section className="relative bg-gray-50 py-20 sm:py-28 px-5 overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[var(--vgo)]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[var(--vgo)] font-bold text-sm tracking-widest uppercase mb-3">
            {t("pain_label")}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            {t("pain_title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {PAINS.map((p, i) => (
            <motion.div
              key={p.text}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-gray-100 shadow-sm bg-white hover:shadow-xl transition-shadow"
            >
              <div className="relative h-28 sm:h-32 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center kb-zoom-in opacity-80 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundImage: `url('${p.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-lg">
                  <p.Icon size={20} strokeWidth={2.2} className="text-red-500" />
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="text-sm text-gray-700 font-semibold leading-snug">{p.text}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-block px-8 py-5 rounded-3xl bg-gradient-to-br from-[var(--vgo)] to-[var(--vgo-dark)] text-white shadow-2xl shadow-orange-500/30">
            <p className="text-xs font-semibold tracking-widest opacity-90 mb-1">{t("pain_answer_label")}</p>
            <p className="text-xl sm:text-2xl font-black">
              {t("pain_answer")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

## File: src/components/ServiceModal.tsx
```typescript
"use client";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, ArrowRight, Wrench, Sparkles, Heart, Truck, ShoppingBag, Briefcase, LucideIcon } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { SERVICES, ServiceItem } from "@/data/services";

const ICONS: Record<string, LucideIcon> = {
  Wrench, Sparkles, Heart, Truck, ShoppingBag, Briefcase,
};

export default function ServiceModal({ item, onClose }: { item: ServiceItem | null; onClose: () => void }) {
  const { lang } = useLang();
  const t = SERVICES[lang];
  const Icon = item ? ICONS[item.icon] || Wrench : Wrench;

  return (
    <AnimatePresence>
      {item && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: "spring", damping: 26, stiffness: 260 }}
            className="fixed inset-x-3 top-[5%] bottom-[5%] sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-[600px] z-[101] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* 顶部图 */}
            <div className="relative h-48 sm:h-56 shrink-0">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <button
                onClick={onClose}
                aria-label="close"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center shadow-lg">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-black">{item.title}</h3>
                </div>
                <p className="text-sm text-white/80">{item.tagline}</p>
              </div>
            </div>

            {/* 滚动内容 */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <section>
                <div className="text-xs font-black text-[var(--vgo)] uppercase tracking-widest mb-3">{t.sec_todo}</div>
                <ul className="space-y-2">
                  {item.canDo.map((x) => (
                    <li key={x} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check size={16} className="text-[var(--vgo)] shrink-0 mt-0.5" />{x}
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <div className="text-xs font-black text-[var(--vgo)] uppercase tracking-widest mb-3">{t.sec_scene}</div>
                <div className="flex flex-wrap gap-2">
                  {item.scenarios.map((x) => (
                    <span key={x} className="px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-xs font-semibold text-orange-950">
                      {x}
                    </span>
                  ))}
                </div>
              </section>
              <section>
                <div className="text-xs font-black text-[var(--vgo)] uppercase tracking-widest mb-3">{t.sec_cap}</div>
                <ul className="space-y-2">
                  {item.capabilities.map((x) => (
                    <li key={x} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check size={16} className="text-[var(--vgo)] shrink-0 mt-0.5" />{x}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* 底部 CTA */}
            <div className="shrink-0 p-5 border-t border-gray-100 bg-white">
              <a
                href="#download"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-black shadow-lg shadow-orange-500/30 hover:scale-[1.02] active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]"
              >
                {t.cta} <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
```

## File: src/components/Testimonials.tsx
```typescript
"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";

const REVIEWS = [
  { name: "Jason C.", area: "Kota Kinabalu", stars: 5, text: "师傅很专业，打压测试做得很认真。价格事先说清楚，没有额外收费。", tag: "水管维修" },
  { name: "陈小姐", area: "Damai", stars: 5, text: "通渠很快，价格公道。约了两小时后就到，比等师傅上门靠谱多了。", tag: "通渠" },
  { name: "李先生", area: "Penampang", stars: 5, text: "电路排查仔细，稍微迟到 5 分钟还提前打电话告知，很负责任。", tag: "电路维修" },
  { name: "Siti R.", area: "Luyang", stars: 5, text: "Pekerja datang tepat masa, kerja bersih dan harga berpatutan.", tag: "清洁" },
  { name: "Master Rosman", area: "Inanam", stars: 5, text: "平台接单方便，客户素质好，收入比以前靠熟人介绍稳定多了。", tag: "师傅反馈" },
];

export default function Testimonials() {
  const { t } = useLang();
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % REVIEWS.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative bg-gray-50 py-20 sm:py-28 px-5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--vgo)]/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[var(--vgo)] font-bold text-sm tracking-widest uppercase mb-3">
            {t("review_label")}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            {t("review_title")}
          </h2>
        </motion.div>

        <div className="relative h-[280px] sm:h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 p-7 sm:p-10 rounded-[32px] bg-white border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col"
            >
              {/* 引号 */}
              <div className="text-6xl font-black text-[var(--vgo)]/20 leading-none -mt-3 mb-2">"</div>

              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed flex-1">
                {REVIEWS[idx].text}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[var(--vgo-light)] to-[var(--vgo-dark)] text-white font-black flex items-center justify-center text-lg">
                    {REVIEWS[idx].name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{REVIEWS[idx].name}</div>
                    <div className="text-xs text-gray-500">{REVIEWS[idx].area} · {REVIEWS[idx].tag}</div>
                  </div>
                </div>
                <div className="text-yellow-400 text-lg tracking-wider">
                  {"★".repeat(REVIEWS[idx].stars)}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 指示点 */}
        <div className="flex justify-center gap-2 mt-8">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`第 ${i + 1} 条`}
              className={`h-1.5 rounded-full transition-[transform,box-shadow,opacity,width,background-color] duration-500 ${
                i === idx ? "w-8 bg-[var(--vgo)]" : "w-1.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

## File: src/data/coverage.ts
```typescript
export type Tri = { zh: string; en: string; ms: string };
export const COVERAGE_CITIES: { key: string; label: Tri; areas: Tri[] }[] = [
  { key: "kk", label: { zh: "亚庇", en: "Kota Kinabalu", ms: "Kota Kinabalu" }, areas: [
    { zh: "亚庇市区", en: "KK Center", ms: "Pusat KK" },
    { zh: "丹容亚路", en: "Tanjung Aru", ms: "Tanjung Aru" },
    { zh: "路阳", en: "Luyang", ms: "Luyang" },
    { zh: "哥隆邦", en: "Kolombong", ms: "Kolombong" },
    { zh: "甘拜园", en: "Kepayan", ms: "Kepayan" },
    { zh: "下南南", en: "Inanam", ms: "Inanam" },
    { zh: "里卡士", en: "Likas", ms: "Likas" },
    { zh: "达迈", en: "Damai", ms: "Damai" },
    { zh: "兵南邦", en: "Penampang", ms: "Penampang" },
    { zh: "必打丹", en: "Putatan", ms: "Putatan" },
    { zh: "孟加达", en: "Menggatal", ms: "Menggatal" },
    { zh: "实邦加", en: "Sepanggar", ms: "Sepanggar" },
    { zh: "打里卜", en: "Telipok", ms: "Telipok" },
  ]},
  { key: "sandakan", label: { zh: "山打根", en: "Sandakan", ms: "Sandakan" }, areas: [
    { zh: "市中心", en: "City Center", ms: "Pusat Bandar" },
    { zh: "英达镇", en: "Bandar Indah", ms: "Bandar Indah" },
    { zh: "金凤市", en: "Bandar Kim Fung", ms: "Bandar Kim Fung" },
    { zh: "美丽园", en: "Taman Mawar", ms: "Taman Mawar" },
    { zh: "四哩", en: "Mile 4", ms: "Batu 4" },
    { zh: "七哩", en: "Mile 7", ms: "Batu 7" },
    { zh: "西必洛", en: "Sepilok", ms: "Sepilok" },
  ]},
  { key: "tawau", label: { zh: "斗湖", en: "Tawau", ms: "Tawau" }, areas: [
    { zh: "沙宾都", en: "Sabindo", ms: "Sabindo" },
    { zh: "发佳", en: "Fajar", ms: "Fajar" },
    { zh: "旧斗湖", en: "Tawau Lama", ms: "Tawau Lama" },
    { zh: "古古山", en: "Kubota", ms: "Kubota" },
    { zh: "阿拔士", en: "Apas", ms: "Apas" },
  ]},
  { key: "tuaran", label: { zh: "斗亚兰", en: "Tuaran", ms: "Tuaran" }, areas: [] },
  { key: "papar", label: { zh: "吧巴", en: "Papar", ms: "Papar" }, areas: [] },
  { key: "sipitang", label: { zh: "实必丹", en: "Sipitang", ms: "Sipitang" }, areas: [] },
  { key: "kota-belud", label: { zh: "古打毛律", en: "Kota Belud", ms: "Kota Belud" }, areas: [] },
  { key: "kota-marudu", label: { zh: "哥打马鲁都", en: "Kota Marudu", ms: "Kota Marudu" }, areas: [] },
  { key: "kudat", label: { zh: "古达", en: "Kudat", ms: "Kudat" }, areas: [] },
  { key: "pitas", label: { zh: "必达士", en: "Pitas", ms: "Pitas" }, areas: [] },
  { key: "keningau", label: { zh: "根地咬", en: "Keningau", ms: "Keningau" }, areas: [] },
  { key: "beaufort", label: { zh: "保佛", en: "Beaufort", ms: "Beaufort" }, areas: [] },
  { key: "tenom", label: { zh: "丹南", en: "Tenom", ms: "Tenom" }, areas: [] },
  { key: "nabawan", label: { zh: "纳巴湾", en: "Nabawan", ms: "Nabawan" }, areas: [] },
  { key: "tambunan", label: { zh: "担布南", en: "Tambunan", ms: "Tambunan" }, areas: [] },
  { key: "ranau", label: { zh: "兰瑙", en: "Ranau", ms: "Ranau" }, areas: [] },
  { key: "kundasang", label: { zh: "昆达山", en: "Kundasang", ms: "Kundasang" }, areas: [] },
  { key: "lahad-datu", label: { zh: "拿笃", en: "Lahad Datu", ms: "Lahad Datu" }, areas: [] },
  { key: "kinabatangan", label: { zh: "京那巴当岸", en: "Kinabatangan", ms: "Kinabatangan" }, areas: [] },
  { key: "beluran", label: { zh: "比鲁兰", en: "Beluran", ms: "Beluran" }, areas: [] },
  { key: "telupid", label: { zh: "特鲁必", en: "Telupid", ms: "Telupid" }, areas: [] },
  { key: "semporna", label: { zh: "仙本那", en: "Semporna", ms: "Semporna" }, areas: [] },
  { key: "kunak", label: { zh: "古纳", en: "Kunak", ms: "Kunak" }, areas: [] },
  { key: "kalabakan", label: { zh: "卡拉巴干", en: "Kalabakan", ms: "Kalabakan" }, areas: [] },
];
export const COVERAGE_LABELS = {
  zh: { label: "服务区域", sub: "全沙巴主要城镇", live_t: "已开通", more_t: "更多城镇", form_t: "没有你的地区？", form_sub: "留个邮箱，开通时第一时间通知你", form_ph: "你的邮箱", form_btn: "通知我", form_agree: "我同意接收服务开通通知邮件，可随时取消订阅", form_ok: "已收到！开通后会通知你", form_err: "提交失败，请稍后再试" },
  en: { label: "Service Area", sub: "Major towns across Sabah", live_t: "Live", more_t: "More Towns", form_t: "Your area not listed?", form_sub: "Leave your email, we will notify you when we arrive", form_ph: "Your email", form_btn: "Notify Me", form_agree: "I agree to receive service launch notifications. Unsubscribe anytime.", form_ok: "Got it! We will notify you when live", form_err: "Failed. Please try again later." },
  ms: { label: "Kawasan Servis", sub: "Bandar utama seluruh Sabah", live_t: "Aktif", more_t: "Bandar Lain", form_t: "Kawasan anda tiada?", form_sub: "Tinggalkan e-mel, kami maklumkan apabila tiba", form_ph: "E-mel anda", form_btn: "Maklumkan", form_agree: "Saya bersetuju menerima notifikasi pelancaran perkhidmatan. Boleh berhenti bila-bila.", form_ok: "Diterima! Kami akan maklumkan", form_err: "Gagal. Sila cuba lagi." },
};
```

## File: src/data/services.ts
```typescript
export type ServiceItem = {
  id: string;
  icon: string;
  image: string;
  title: string;
  tagline: string;
  canDo: string[];
  scenarios: string[];
  capabilities: string[];
};

export type ServiceData = {
  label: string;
  title: string;
  sub: string;
  sec_todo: string;
  sec_scene: string;
  sec_cap: string;
  cta: string;
  items: ServiceItem[];
};

export const SERVICES: Record<"zh" | "en" | "ms", ServiceData> = {
  zh: {
    label: "V'GO 功能",
    title: "6 大核心功能",
    sub: "覆盖生活方方面面，一个 App 全搞定",
    sec_todo: "能做什么",
    sec_scene: "适用场景",
    sec_cap: "核心能力",
    cta: "预约服务",
    items: [
      { id: "repair", icon: "Wrench", image: "/features/repair.jpg", title: "上门维修",
        tagline: "家里坏了，认证师傅上门搞定",
        canDo: ["水管维修（漏水/堵塞/更换）", "电路检修（跳闸/短路/开关）", "家电维修（冰箱/洗衣机/空调）", "门锁更换与开锁", "空调清洗加雪种", "马桶/洗手盆疏通"],
        scenarios: ["半夜水管突然爆了", "家电用着用着坏了", "老人独居没有依靠", "不懂电路怕出危险"],
        capabilities: ["实名认证 + 证件审核", "标准服务平台定价", "其他服务师傅公开报价", "完工确认平台担保"] },
      { id: "clean", icon: "Sparkles", image: "/features/clean.jpg", title: "清洁打扫",
        tagline: "专业保洁团队，按时上门",
        canDo: ["日常保洁（每周/每月）", "深度清洁（厨房/卫生间）", "开荒清洁（新居入住）", "玻璃窗清洁", "地毯/沙发清洗", "油烟机深度清洗"],
        scenarios: ["搬新家前要彻底清洁", "节前大扫除人手不够", "出租房退租要清理", "长期未清洁需深度打理"],
        capabilities: ["实名认证保洁员", "自带清洁工具耗材", "按时上门服务", "不满意可要求返工"] },
      { id: "massage", icon: "Heart", image: "/features/massage.jpg", title: "按摩",
        tagline: "持证按摩师上门服务",
        canDo: ["中医推拿", "泰式按摩", "精油 SPA", "足底按摩", "肩颈理疗", "产后修复按摩"],
        scenarios: ["久坐肩颈酸痛", "运动后需要放松", "老年人日常保健", "产后需要恢复调理"],
        capabilities: ["持证专业按摩师", "自带按摩器材", "预约到家服务", "隐私严格保护"] },
      { id: "errand", icon: "Truck", image: "/features/errand.jpg", title: "跑腿代购",
        tagline: "同城配送，即时响应",
        canDo: ["代买药品/生活用品", "代取快递包裹", "代送文件/礼物", "代买餐食", "代排队办事", "代缴费用"],
        scenarios: ["生病在家不便出门", "工作忙抽不开身", "老人行动不便", "急件需要快速送达"],
        capabilities: ["快速响应，就近匹配", "全城范围覆盖", "实时位置追踪", "明码标价不议价"] },
      { id: "market", icon: "ShoppingBag", image: "/features/market.jpg", title: "二手商城",
        tagline: "本地闲置交易，同城面交",
        canDo: ["家电家具买卖", "数码产品交易", "母婴用品转让", "运动器材出售", "书籍文具交换", "服饰箱包买卖"],
        scenarios: ["搬家清理闲置物品", "想买二手省钱购物", "寻找绝版好物", "同城快速交易"],
        capabilities: ["实名认证用户", "同城当面验货", "平台交易担保", "防诈骗机制"] },
      { id: "jobs", icon: "Briefcase", image: "/features/jobs.jpg", title: "找工作",
        tagline: "零工散工，灵活接单",
        canDo: ["日结工（装修/搬运）", "小时工（清洁/帮厨）", "装修散工", "兼职促销", "家政散工", "餐饮帮工"],
        scenarios: ["想找短期灵活收入", "学生兼职赚零花", "自由职业者接单", "失业期过渡"],
        capabilities: ["日结/周结灵活选择", "实名认证企业雇主", "平台担保工资", "无需中介费用"] },
    ],
  },
  en: {
    label: "V'GO Features",
    title: "6 Core Services",
    sub: "Covering every aspect of life — all in one app",
    sec_todo: "What's Included",
    sec_scene: "Common Situations",
    sec_cap: "Why Choose Us",
    cta: "Book a Service",
    items: [
      { id: "repair", icon: "Wrench", image: "/features/repair.jpg", title: "Home Repair",
        tagline: "Certified technicians for plumbing, electrical & appliance fixes",
        canDo: ["Plumbing (leaks, clogs, replacement)", "Electrical (trips, shorts, switches)", "Appliances (fridge, washer, AC)", "Lock replacement & unlocking", "AC normal service & gas top-up", "Toilet/sink unclogging"],
        scenarios: ["Pipe bursts at midnight", "Appliance suddenly breaks", "Elderly living alone", "Afraid of electrical risks"],
        capabilities: ["ID + credential verified", "Platform pricing for standard services", "Public quotes for others", "Platform warranty on completion"] },
      { id: "clean", icon: "Sparkles", image: "/features/clean.jpg", title: "Home Cleaning",
        tagline: "Vetted cleaners with tools & supplies included",
        canDo: ["Regular cleaning (weekly/monthly)", "Deep cleaning (kitchen/bathroom)", "Move-in deep clean", "Window cleaning", "Carpet/sofa cleaning", "Range hood deep clean"],
        scenarios: ["Moving in, need deep clean", "Pre-holiday big clean", "Rental handover cleanup", "Long-neglected deep clean"],
        capabilities: ["Verified cleaners", "Tools & supplies included", "Punctual arrival", "Redo if unsatisfied"] },
      { id: "massage", icon: "Heart", image: "/features/massage.jpg", title: "Massage & Therapy",
        tagline: "Licensed therapists, delivered to your door",
        canDo: ["TCM tuina", "Thai massage", "Aromatherapy SPA", "Foot reflexology", "Neck & shoulder therapy", "Postnatal recovery"],
        scenarios: ["Sitting long hours, stiff neck", "Post-workout recovery", "Elderly wellness care", "Postnatal recovery needs"],
        capabilities: ["Licensed therapists", "Equipment included", "Book to your home", "Strict privacy protection"] },
      { id: "errand", icon: "Truck", image: "/features/errand.jpg", title: "Errand & Delivery",
        tagline: "Same-city delivery, fast response",
        canDo: ["Buy medicine/daily items", "Pick up parcels", "Deliver documents/gifts", "Buy meals", "Queue on your behalf", "Pay bills"],
        scenarios: ["Sick, can't go out", "Too busy at work", "Elderly with limited mobility", "Urgent package delivery"],
        capabilities: ["Fast response", "Nationwide coverage", "Live location tracking", "Fixed transparent pricing"] },
      { id: "market", icon: "ShoppingBag", image: "/features/market.jpg", title: "Buy & Sell",
        tagline: "Local secondhand deals, meet in person",
        canDo: ["Appliances & furniture", "Electronics", "Baby & kids items", "Sports gear", "Books & stationery", "Clothing & bags"],
        scenarios: ["Moving, clear unused items", "Looking for secondhand deals", "Hunting rare items", "Fast local trades"],
        capabilities: ["Verified users", "In-person inspection", "Platform trade guarantee", "Anti-fraud protection"] },
      { id: "jobs", icon: "Briefcase", image: "/features/jobs.jpg", title: "Gig Work",
        tagline: "Flexible gigs, take orders anytime",
        canDo: ["Daily pay (renovation/porter)", "Hourly (cleaning/kitchen)", "Renovation gigs", "Promotional part-time", "Domestic helper gigs", "F&B helper"],
        scenarios: ["Seeking flexible income", "Student part-time", "Freelancer taking gigs", "Transitional work"],
        capabilities: ["Daily/weekly pay", "Verified employers", "Platform wage guarantee", "Zero agency fees"] },
    ],
  },
  ms: {
    label: "Ciri V'GO",
    title: "6 Servis Utama",
    sub: "Meliputi setiap aspek kehidupan — semua dalam satu app",
    sec_todo: "Apa Yang Termasuk",
    sec_scene: "Situasi Lazim",
    sec_cap: "Mengapa Pilih Kami",
    cta: "Tempah Servis",
    items: [
      { id: "repair", icon: "Wrench", image: "/features/repair.jpg", title: "Pembaikan Rumah",
        tagline: "Ada yang rosak? Juruteknik bertauliah ke pintu anda",
        canDo: ["Paip (bocor, tersumbat, ganti)", "Elektrik (trip, litar pintas, suis)", "Alatan (peti sejuk, mesin basuh, penghawa)", "Ganti kunci & buka kunci", "Servis penghawa (cuci biasa) & isi gas", "Bersih tandas/sinki tersumbat"],
        scenarios: ["Paip pecah tengah malam", "Alatan tiba-tiba rosak", "Warga emas tinggal sendiri", "Takut risiko elektrik"],
        capabilities: ["Pengesahan ID + dokumen", "Harga platform untuk servis standard", "Sebut harga terbuka untuk lain", "Jaminan platform selepas siap"] },
      { id: "clean", icon: "Sparkles", image: "/features/clean.jpg", title: "Servis Pembersihan",
        tagline: "Pembersih profesional, tepat masa ke pintu anda",
        canDo: ["Pembersihan biasa (mingguan/bulanan)", "Pembersihan mendalam (dapur/bilik air)", "Cuci masuk rumah baru", "Cuci tingkap", "Cuci permaidani/sofa", "Cuci tudung dapur"],
        scenarios: ["Pindah rumah, perlu cuci mendalam", "Cuci besar sebelum perayaan", "Cuci sebelum serah sewa", "Cuci setelah lama diabaikan"],
        capabilities: ["Pembersih disahkan", "Alat & bahan disediakan", "Tiba tepat masa", "Boleh ulang jika tak puas hati"] },
      { id: "massage", icon: "Heart", image: "/features/massage.jpg", title: "Urutan & Terapi",
        tagline: "Terapis bertauliah ke rumah anda",
        canDo: ["Tuina TCM", "Urutan Thai", "SPA aromaterapi", "Refleksologi kaki", "Terapi leher & bahu", "Pemulihan selepas bersalin"],
        scenarios: ["Duduk lama, leher tegang", "Pemulihan selepas senaman", "Penjagaan warga emas", "Keperluan pemulihan selepas bersalin"],
        capabilities: ["Terapis berlesen", "Peralatan disediakan", "Tempah ke rumah", "Perlindungan privasi ketat"] },
      { id: "errand", icon: "Truck", image: "/features/errand.jpg", title: "Penghantaran & Beli-Belah",
        tagline: "Penghantaran dalam bandar, respons pantas",
        canDo: ["Beli ubat/barang harian", "Ambil bungkusan", "Hantar dokumen/hadiah", "Beli makanan", "Berdiri dalam barisan", "Bayar bil"],
        scenarios: ["Sakit, tak boleh keluar", "Sibuk bekerja", "Warga emas kurang mobiliti", "Penghantaran segera"],
        capabilities: ["Respons pantas", "Liputan seluruh bandar", "Pemantauan lokasi langsung", "Harga telus tetap"] },
      { id: "market", icon: "ShoppingBag", image: "/features/market.jpg", title: "Jual Beli Terpakai",
        tagline: "Jual beli terpakai tempatan, berjumpa sendiri",
        canDo: ["Alatan & perabot", "Elektronik", "Barang bayi & kanak-kanak", "Peralatan sukan", "Buku & alat tulis", "Pakaian & beg"],
        scenarios: ["Pindah, kosongkan barang", "Cari tawaran terpakai", "Mencari barang nadir", "Urusniaga tempatan pantas"],
        capabilities: ["Pengguna disahkan", "Pemeriksaan sendiri", "Jaminan urusniaga platform", "Perlindungan anti-penipuan"] },
      { id: "jobs", icon: "Briefcase", image: "/features/jobs.jpg", title: "Kerja Sambilan",
        tagline: "Kerja gig fleksibel, ambil pesanan bila-bila",
        canDo: ["Bayaran harian (renovasi/angkut)", "Setiap jam (cuci/dapur)", "Gig renovasi", "Promosi sambilan", "Pembantu rumah", "Pembantu F&B"],
        scenarios: ["Cari pendapatan fleksibel", "Sambilan pelajar", "Bebas ambil gig", "Kerja peralihan"],
        capabilities: ["Bayaran harian/mingguan", "Majikan disahkan", "Jaminan gaji platform", "Sifar yuran agensi"] },
    ],
  },
};
```

## File: src/data/waitlist.ts
```typescript
// VGO 注册数据 · 三语 + 分类树
export type Lang = "zh" | "en" | "ms";

type Label = { zh: string; en: string; ms: string };

// ===== 州 =====
export const STATES: { value: string; label: Label }[] = [
  { value: "sabah",    label: { zh: "沙巴",   en: "Sabah",          ms: "Sabah" } },
  { value: "kl",       label: { zh: "吉隆坡", en: "Kuala Lumpur",   ms: "Kuala Lumpur" } },
  { value: "selangor", label: { zh: "雪兰莪", en: "Selangor",       ms: "Selangor" } },
  { value: "penang",   label: { zh: "槟城",   en: "Penang",         ms: "Pulau Pinang" } },
  { value: "johor",    label: { zh: "柔佛",   en: "Johor",          ms: "Johor" } },
  { value: "sarawak",  label: { zh: "砂拉越", en: "Sarawak",        ms: "Sarawak" } },
  { value: "other",    label: { zh: "其他",   en: "Other",          ms: "Lain-lain" } },
];

// ===== 城市（按州）=====
export const CITIES: Record<string, { value: string; label: Label }[]> = {
  sabah: [
    { value: "kk",       label: { zh: "亚庇",   en: "Kota Kinabalu", ms: "Kota Kinabalu" } },
    { value: "sandakan", label: { zh: "山打根", en: "Sandakan",      ms: "Sandakan" } },
    { value: "tawau",    label: { zh: "斗湖",   en: "Tawau",         ms: "Tawau" } },
  ],
  kl: [
    { value: "klc",      label: { zh: "吉隆坡市", en: "KL City",     ms: "Bandar KL" } },
    { value: "cheras",   label: { zh: "蕉赖",   en: "Cheras",        ms: "Cheras" } },
    { value: "ampang",   label: { zh: "安邦",   en: "Ampang",        ms: "Ampang" } },
  ],
  selangor: [
    { value: "pj",       label: { zh: "八打灵再也", en: "Petaling Jaya", ms: "Petaling Jaya" } },
    { value: "subang",   label: { zh: "梳邦",   en: "Subang",        ms: "Subang" } },
    { value: "shahalam", label: { zh: "莎阿南", en: "Shah Alam",     ms: "Shah Alam" } },
  ],
  penang: [
    { value: "georgetown", label: { zh: "乔治市", en: "George Town", ms: "George Town" } },
    { value: "bayanlepas", label: { zh: "峇央峇鲁", en: "Bayan Lepas", ms: "Bayan Lepas" } },
  ],
  johor: [
    { value: "jb",       label: { zh: "新山",   en: "Johor Bahru",   ms: "Johor Bahru" } },
    { value: "batupahat",label: { zh: "峇株巴辖", en: "Batu Pahat",  ms: "Batu Pahat" } },
  ],
  sarawak: [
    { value: "kuching",  label: { zh: "古晋",   en: "Kuching",       ms: "Kuching" } },
    { value: "miri",     label: { zh: "美里",   en: "Miri",          ms: "Miri" } },
  ],
  other: [
    { value: "other-city", label: { zh: "其他", en: "Other",         ms: "Lain-lain" } },
  ],
};

// ===== 区（按城市）=====
export const AREAS: Record<string, { value: string; label: Label }[]> = {
  kk: [
    { value: "damai",     label: { zh: "达迈",    en: "Damai",      ms: "Damai" } },
    { value: "luyang",    label: { zh: "路阳",    en: "Luyang",     ms: "Luyang" } },
    { value: "inanam",    label: { zh: "伊那南",  en: "Inanam",     ms: "Inanam" } },
    { value: "penampang", label: { zh: "兵南邦",  en: "Penampang",  ms: "Penampang" } },
    { value: "likas",     label: { zh: "里卡斯",  en: "Likas",      ms: "Likas" } },
    { value: "kkcenter",  label: { zh: "亚庇市区", en: "KK Center", ms: "Pusat KK" } },
    { value: "other",     label: { zh: "其他",    en: "Other",      ms: "Lain-lain" } },
  ],
  sandakan: [{ value: "sbh-center", label: { zh: "市中心", en: "City Center", ms: "Pusat Bandar" } }],
  tawau: [{ value: "tw-center", label: { zh: "市中心", en: "City Center", ms: "Pusat Bandar" } }],
  klc: [
    { value: "bukitbintang", label: { zh: "武吉免登", en: "Bukit Bintang", ms: "Bukit Bintang" } },
    { value: "klcc",         label: { zh: "KLCC",     en: "KLCC",         ms: "KLCC" } },
    { value: "other-kl",     label: { zh: "其他",     en: "Other",        ms: "Lain-lain" } },
  ],
  pj: [
    { value: "ss2",    label: { zh: "SS2",   en: "SS2",   ms: "SS2" } },
    { value: "damansara", label: { zh: "万达镇", en: "Damansara", ms: "Damansara" } },
  ],
  georgetown: [{ value: "gt-center", label: { zh: "市中心", en: "City Center", ms: "Pusat Bandar" } }],
  jb: [{ value: "jb-center", label: { zh: "市中心", en: "City Center", ms: "Pusat Bandar" } }],
  kuching: [{ value: "kc-center", label: { zh: "市中心", en: "City Center", ms: "Pusat Bandar" } }],
  miri: [{ value: "miri-center", label: { zh: "市中心", en: "City Center", ms: "Pusat Bandar" } }],
};

// ===== 行业（商家）=====
export const INDUSTRIES: { value: string; label: Label; subs: { value: string; label: Label }[] }[] = [
  {
    value: "hardware",
    label: { zh: "五金店", en: "Hardware Store", ms: "Kedai Hardware" },
    subs: [
      { value: "plumb",    label: { zh: "水喉",   en: "Plumbing",   ms: "Paip" } },
      { value: "electric", label: { zh: "电工",   en: "Electrical", ms: "Elektrik" } },
      { value: "paint",    label: { zh: "油漆",   en: "Paint",      ms: "Cat" } },
      { value: "locks",    label: { zh: "锁具",   en: "Locks",      ms: "Kunci" } },
      { value: "tools",    label: { zh: "工具",   en: "Tools",      ms: "Alatan" } },
    ],
  },
  {
    value: "cleaning",
    label: { zh: "清洁公司", en: "Cleaning Company", ms: "Syarikat Pembersihan" },
    subs: [
      { value: "home",     label: { zh: "家庭保洁", en: "Home Cleaning", ms: "Bersih Rumah" } },
      { value: "deep",     label: { zh: "深度清洁", en: "Deep Clean",    ms: "Cuci Mendalam" } },
      { value: "office",   label: { zh: "商业清洁", en: "Office Cleaning", ms: "Bersih Pejabat" } },
      { value: "movein",   label: { zh: "开荒保洁", en: "Move-in Clean", ms: "Cuci Mula Masuk" } },
    ],
  },
  {
    value: "massage",
    label: { zh: "按摩院", en: "Massage Spa", ms: "Kedai Urutan" },
    subs: [
      { value: "chinese",  label: { zh: "中式推拿", en: "Chinese Tui Na", ms: "Tui Na Cina" } },
      { value: "thai",     label: { zh: "泰式按摩", en: "Thai Massage",   ms: "Urutan Thai" } },
      { value: "foot",     label: { zh: "足疗",     en: "Foot Reflexology", ms: "Urutan Kaki" } },
      { value: "oil",      label: { zh: "精油SPA",  en: "Oil SPA",        ms: "SPA Minyak" } },
    ],
  },
  {
    value: "beauty",
    label: { zh: "美容院", en: "Beauty Salon", ms: "Salun Kecantikan" },
    subs: [
      { value: "face",     label: { zh: "脸部护理", en: "Facial Care", ms: "Rawatan Muka" } },
      { value: "nail",     label: { zh: "美甲",     en: "Nail Art",    ms: "Seni Kuku" } },
      { value: "lash",     label: { zh: "美睫",     en: "Eyelash",     ms: "Bulu Mata" } },
      { value: "spa",      label: { zh: "全身SPA",  en: "Body SPA",    ms: "SPA Badan" } },
    ],
  },
  {
    value: "fnb",
    label: { zh: "餐饮", en: "Food & Beverage", ms: "Makanan & Minuman" },
    subs: [
      { value: "dinein",   label: { zh: "堂食",   en: "Dine-in",   ms: "Makan Dalam" } },
      { value: "takeaway", label: { zh: "打包",   en: "Takeaway",  ms: "Bungkus" } },
      { value: "delivery", label: { zh: "外卖",   en: "Delivery",  ms: "Penghantaran" } },
      { value: "late",     label: { zh: "宵夜",   en: "Late Night", ms: "Makan Malam" } },
    ],
  },
  {
    value: "secondhand",
    label: { zh: "二手店", en: "Second-hand", ms: "Kedai Barang Terpakai" },
    subs: [
      { value: "electronics", label: { zh: "电子",  en: "Electronics", ms: "Elektronik" } },
      { value: "furniture",   label: { zh: "家具",  en: "Furniture",   ms: "Perabot" } },
      { value: "clothing",    label: { zh: "衣物",  en: "Clothing",    ms: "Pakaian" } },
      { value: "other-sh",    label: { zh: "其他",  en: "Other",       ms: "Lain-lain" } },
    ],
  },
  {
    value: "renovation",
    label: { zh: "装修工程", en: "Renovation", ms: "Pengubahsuaian" },
    subs: [
      { value: "tiling",   label: { zh: "瓷砖", en: "Tiling",   ms: "Jubin" } },
      { value: "carpentry",label: { zh: "木工", en: "Carpentry", ms: "Kayu" } },
      { value: "paint-r",  label: { zh: "油漆", en: "Painting", ms: "Cat" } },
      { value: "waterproof",label: { zh: "防水", en: "Waterproofing", ms: "Kalis Air" } },
    ],
  },
  {
    value: "other-ind",
    label: { zh: "其他", en: "Other", ms: "Lain-lain" },
    subs: [{ value: "misc", label: { zh: "其他", en: "Other", ms: "Lain-lain" } }],
  },
];

// ===== 技能（技术员）=====
export const TECH_SKILLS: { value: string; label: Label; subs: { value: string; label: Label }[] }[] = [
  {
    value: "plumb",
    label: { zh: "水喉", en: "Plumbing", ms: "Paip" },
    subs: [
      { value: "clog",      label: { zh: "通渠",       en: "Clog",       ms: "Tersumbat" } },
      { value: "burst",     label: { zh: "爆管抢修",   en: "Pipe Burst", ms: "Paip Pecah" } },
      { value: "toilet",    label: { zh: "马桶维修",   en: "Toilet",     ms: "Tandas" } },
      { value: "tap",       label: { zh: "水龙头更换", en: "Tap",        ms: "Pili Air" } },
      { value: "heater",    label: { zh: "热水器",     en: "Water Heater", ms: "Pemanas Air" } },
      { value: "pump",      label: { zh: "水泵维修",   en: "Water Pump", ms: "Pam Air" } },
    ],
  },
  {
    value: "electric",
    label: { zh: "电工", en: "Electrical", ms: "Elektrik" },
    subs: [
      { value: "trip",      label: { zh: "跳电排查", en: "Tripping", ms: "Trip Elektrik" } },
      { value: "socket",    label: { zh: "插座开关", en: "Socket",   ms: "Soket" } },
      { value: "light",     label: { zh: "灯具安装", en: "Lighting", ms: "Lampu" } },
      { value: "breaker",   label: { zh: "总闸维修", en: "Breaker",  ms: "Pemutus Litar" } },
      { value: "wiring",    label: { zh: "拉线布线", en: "Wiring",   ms: "Pendawaian" } },
    ],
  },
  {
    value: "aircon",
    label: { zh: "冷气", en: "Air Conditioning", ms: "Penghawa Dingin" },
    subs: [
      { value: "install",   label: { zh: "安装",   en: "Install",   ms: "Pasang" } },
      { value: "wash",      label: { zh: "清洗",   en: "Wash",      ms: "Cuci Biasa" } },
      { value: "gas",       label: { zh: "加气",   en: "Gas Refill", ms: "Isi Gas" } },
      { value: "repair",    label: { zh: "维修",   en: "Repair",    ms: "Baiki" } },
      { value: "dismount",  label: { zh: "拆机",   en: "Dismount",  ms: "Buka Unit" } },
    ],
  },
  {
    value: "reno",
    label: { zh: "装修", en: "Renovation", ms: "Pengubahsuaian" },
    subs: [
      { value: "brick",     label: { zh: "泥水",   en: "Masonry",   ms: "Simen" } },
      { value: "wood",      label: { zh: "木工",   en: "Carpentry", ms: "Kayu" } },
      { value: "tile",      label: { zh: "瓷砖",   en: "Tiling",    ms: "Jubin" } },
      { value: "paint",     label: { zh: "油漆",   en: "Paint",     ms: "Cat" } },
      { value: "plaster",   label: { zh: "石膏",   en: "Plaster",   ms: "Plaster" } },
      { value: "demolish",  label: { zh: "拆除",   en: "Demolish",  ms: "Roboh" } },
    ],
  },
  {
    value: "iron",
    label: { zh: "铁工", en: "Iron Work", ms: "Kerja Besi" },
    subs: [
      { value: "gate",      label: { zh: "铁门",   en: "Gate",      ms: "Pintu Besi" } },
      { value: "grill",     label: { zh: "铁花",   en: "Grill",     ms: "Pagar" } },
      { value: "railing",   label: { zh: "护栏",   en: "Railing",   ms: "Pagar Tepi" } },
      { value: "frame",     label: { zh: "铁架",   en: "Frame",     ms: "Rangka" } },
      { value: "weld",      label: { zh: "焊接",   en: "Welding",   ms: "Kimpalan" } },
    ],
  },
  {
    value: "waterproof",
    label: { zh: "防水", en: "Waterproofing", ms: "Kalis Air" },
    subs: [
      { value: "bathroom",  label: { zh: "浴室防水", en: "Bathroom", ms: "Bilik Air" } },
      { value: "roof",      label: { zh: "屋顶防水", en: "Roof",     ms: "Bumbung" } },
      { value: "wall",      label: { zh: "外墙防水", en: "Wall",     ms: "Dinding" } },
      { value: "leak",      label: { zh: "漏水修补", en: "Leak Fix", ms: "Baiki Bocor" } },
      { value: "seepage",   label: { zh: "渗水处理", en: "Seepage",  ms: "Resapan" } },
    ],
  },
  {
    value: "other-tech",
    label: { zh: "其他", en: "Other", ms: "Lain-lain" },
    subs: [{ value: "misc-tech", label: { zh: "其他", en: "Other", ms: "Lain-lain" } }],
  },
];

// ===== 手艺（手艺人）=====
export const ARTISAN_SKILLS: { value: string; label: Label; subs: { value: string; label: Label }[] }[] = [
  {
    value: "massage",
    label: { zh: "按摩", en: "Massage", ms: "Urutan" },
    subs: [
      { value: "chinese-m", label: { zh: "中式推拿", en: "Chinese Tui Na", ms: "Tui Na Cina" } },
      { value: "thai-m",    label: { zh: "泰式按摩", en: "Thai Massage",   ms: "Urutan Thai" } },
      { value: "foot-m",    label: { zh: "足疗",     en: "Foot Massage",   ms: "Urutan Kaki" } },
      { value: "body-m",    label: { zh: "全身按摩", en: "Full Body",      ms: "Badan Penuh" } },
      { value: "meridian",  label: { zh: "经络疏通", en: "Meridian",       ms: "Meridian" } },
      { value: "oil-m",     label: { zh: "精油SPA",  en: "Oil SPA",        ms: "SPA Minyak" } },
    ],
  },
  {
    value: "beauty",
    label: { zh: "美容", en: "Beauty", ms: "Kecantikan" },
    subs: [
      { value: "facial",    label: { zh: "脸部护理", en: "Facial",      ms: "Rawatan Muka" } },
      { value: "scrub",     label: { zh: "去角质",   en: "Exfoliation", ms: "Skrub" } },
      { value: "acne",      label: { zh: "抗痘",     en: "Acne Care",   ms: "Rawatan Jerawat" } },
      { value: "whitening", label: { zh: "美白",     en: "Whitening",   ms: "Pemutihan" } },
      { value: "body-spa",  label: { zh: "全身SPA",  en: "Body SPA",    ms: "SPA Badan" } },
    ],
  },
  {
    value: "nail",
    label: { zh: "美甲", en: "Nail", ms: "Kuku" },
    subs: [
      { value: "manicure",  label: { zh: "手部美甲", en: "Manicure",  ms: "Manikur" } },
      { value: "pedicure",  label: { zh: "足部美甲", en: "Pedicure",  ms: "Pedikur" } },
      { value: "gel",       label: { zh: "光疗甲",   en: "Gel Nail",  ms: "Kuku Gel" } },
      { value: "art",       label: { zh: "彩绘",     en: "Nail Art",  ms: "Seni Kuku" } },
    ],
  },
  {
    value: "lash",
    label: { zh: "美睫", en: "Eyelash", ms: "Bulu Mata" },
    subs: [
      { value: "extension", label: { zh: "嫁接",   en: "Extension", ms: "Sambung" } },
      { value: "lift",      label: { zh: "烫翘",   en: "Lift",      ms: "Angkat" } },
      { value: "tint",      label: { zh: "染睫",   en: "Tint",      ms: "Warna" } },
    ],
  },
  {
    value: "hair",
    label: { zh: "美发", en: "Hair", ms: "Rambut" },
    subs: [
      { value: "cut",       label: { zh: "剪发",   en: "Haircut",   ms: "Potong" } },
      { value: "color",     label: { zh: "染发",   en: "Hair Color",ms: "Warna Rambut" } },
      { value: "perm",      label: { zh: "烫发",   en: "Perm",      ms: "Kerinting" } },
      { value: "kids",      label: { zh: "儿童理发", en: "Kids Cut", ms: "Potong Kanak-kanak" } },
      { value: "style",     label: { zh: "造型",   en: "Styling",   ms: "Gaya" } },
    ],
  },
  {
    value: "other-art",
    label: { zh: "其他", en: "Other", ms: "Lain-lain" },
    subs: [{ value: "misc-art", label: { zh: "其他", en: "Other", ms: "Lain-lain" } }],
  },
];

// ===== 服务范围 =====
export const RANGES: { value: string; label: Label }[] = [
  { value: "5km",  label: { zh: "5 公里",  en: "Within 5 km",  ms: "Dalam 5 km" } },
  { value: "10km", label: { zh: "10 公里", en: "Within 10 km", ms: "Dalam 10 km" } },
  { value: "20km", label: { zh: "20 公里", en: "Within 20 km", ms: "Dalam 20 km" } },
  { value: "city", label: { zh: "全城",    en: "Whole City",   ms: "Seluruh Bandar" } },
  { value: "any",  label: { zh: "不限",    en: "Unlimited",    ms: "Tanpa Had" } },
];

// ===== 服务方式（手艺人）=====
export const SERVE_MODES: { value: string; label: Label }[] = [
  { value: "home",     label: { zh: "住家做", en: "At My Place",    ms: "Di Rumah Saya" } },
  { value: "visit",    label: { zh: "上门做", en: "At Customer's",  ms: "Ke Rumah Pelanggan" } },
  { value: "both",     label: { zh: "都可以", en: "Both",           ms: "Kedua-duanya" } },
];

// ===== 三语文案 =====
export const T = {
  zh: {
    title: "抢先注册 VGO",
    welcome: "注册即送 RM80 上门检查券",
    welcome_sub: "限首批 1000 名",

    intro_c_title: "抢先登记礼",
    intro_c_sub: "抢先体验，服务到家",
    intro_c_b1: "RM 80 上门检查礼券", intro_c_b1_sub: "注册即领",
    intro_c_b2: "首批用户体验官", intro_c_b2_sub: "优先体验新功能",
    intro_c_b3: "早鸟专享权益", intro_c_b3_sub: "后续优惠优先享",
    intro_c_value: "RM 80", intro_c_limit: "限首批 1,000 名",
    intro_m_title: "创始商家扶持包",
    intro_m_sub: "让您的生意，被更多人看见",
    intro_m_b1: "零门槛入驻", intro_m_b1_sub: "零成本启动，先跑先赢",
    intro_m_b2: "首页黄金展位", intro_m_b2_sub: "精准曝光，全马用户可见",
    intro_m_b3: "平台流量扶持", intro_m_b3_sub: "持续获客，客户主动上门",
    intro_m_b4: "官方社媒联推", intro_m_b4_sub: "品牌背书 + 矩阵推广",
    intro_m_b5: "创始商家认证", intro_m_b5_sub: "专属徽章，建立信任",
    intro_m_value: "RM 1,500+", intro_m_limit: "限首批 100 名",
    intro_t_title: "创始师傅礼包",
    intro_t_sub: "技能变现，稳定接单",
    intro_t_b1: "零门槛入驻", intro_t_b1_sub: "早鸟特权，零成本接单",
    intro_t_b2: "订单优先匹配", intro_t_b2_sub: "平台派单优先触达",
    intro_t_b3: "首页推荐曝光", intro_t_b3_sub: "精准触达目标客户",
    intro_t_b4: "平台流量扶持", intro_t_b4_sub: "稳定客源，持续接单",
    intro_t_b5: "创始师傅认证", intro_t_b5_sub: "专属徽章，专业背书",
    intro_t_value: "RM 1,000+", intro_t_limit: "限首批 100 名",
    intro_cta: "立即登记",
    intro_switch: "切换身份",
    role_label: "你是",
    role_customer: "客户", role_merchant: "商家", role_tech: "技术员", role_artisan: "手艺人",
    sec_account: "账号信息",
    sec_info: "基本信息",
    sec_shop: "店铺信息",
    sec_address: "地址",
    sec_skill: "技能",
    sec_mode: "服务方式",

    username: "账号 ID", username_ph: "英文+数字，4-20 位",
    phone: "手机号", phone_ph: "+60123456789",
    email: "邮箱", email_ph: "you@example.com",
    password: "密码", password_ph: "至少 8 位",
    confirm: "确认密码", confirm_ph: "再输一次",
    name: "姓名", name_ph: "怎么称呼你",
    shopName: "店名", shopName_ph: "店铺名称",
    industry: "行业类别",
    industrySubs: "具体服务（可多选）",
    skillMain: "技能类别",
    skillSubs: "具体技能（可多选）",
    yearsExp: "经验年数", yearsExp_ph: "如 5",
    range: "服务范围",
    serveMode: "服务方式",
    cert: "证书 / 资质（可选）", cert_ph: "如 SKM 认证",

    state: "州", city: "城市", area: "区", detail: "详细地址",
    detail_ph: "街道 / 门牌号",

    submit: "提交注册",
    submitting: "提交中…",
    success_title: "注册成功！",
    success_sub: "你的账号 ID",
    success_keep: "请截图保存，登录时使用",
    success_bonus: "🎁 RM80 上门检查券已到账",
    success_next: "更多优惠即将公布，我们会通过邮件通知你",
    ok: "好的",
    close: "关闭",

    err_required: "请填写所有必填项",
    err_username: "账号 ID 需 4-20 位字母或数字",
    err_phone: "手机号格式不对",
    err_email: "邮箱格式不对",
    err_password: "密码至少 8 位",
    err_confirm: "两次密码不一致",
    err_taken: "该信息已被注册",
    err_server: "提交失败，请稍后重试",
    err_terms: "请先同意服务条款",
    agree_gate_title: "开始之前，请先阅读并同意",
    agree_gate_sub: "为保障您的权益，请阅读以下协议后勾选。",
    agree_lbl_terms: "我已阅读并同意《服务条款》",
    agree_lbl_privacy: "我已阅读并同意《隐私政策》",
    agree_lbl_role_customer: "我已阅读并同意《用户服务协议》",
    agree_lbl_role_merchant: "我已阅读并同意《商家合作协议》",
    agree_lbl_role_tech: "我已阅读并同意《师傅合作协议》",
    agree_lbl_role_agent: "我已阅读并同意《区域代理协议》",
    agree_next: "同意并继续",
    err_agree_all: "请勾选全部协议后再继续",
    agree_tip: "提示：点击协议名称可打开阅读全文。",
    agree: "我已阅读并同意",
    terms: "服务条款",
    and: "和",
    privacy: "隐私政策",
  },
  en: {
    title: "Join VGO Early Access",
    welcome: "Sign up & get RM80 home check voucher",
    welcome_sub: "Limited to first 1,000 users",

    intro_c_title: "Early Access Gift",
    intro_c_sub: "Experience first, we come to you",
    intro_c_b1: "RM 80 Home Check Voucher", intro_c_b1_sub: "Claim on signup",
    intro_c_b2: "Founding User Status", intro_c_b2_sub: "Try new features first",
    intro_c_b3: "Early Bird Privileges", intro_c_b3_sub: "Priority on future offers",
    intro_c_value: "RM 80", intro_c_limit: "First 1,000 only",
    intro_m_title: "Founding Merchant Package",
    intro_m_sub: "Get your business seen by more people",
    intro_m_b1: "Zero Barrier Onboarding", intro_m_b1_sub: "Start free, win early",
    intro_m_b2: "Homepage Golden Slot", intro_m_b2_sub: "Reach users across Malaysia",
    intro_m_b3: "Platform Traffic Boost", intro_m_b3_sub: "Steady leads, customers come to you",
    intro_m_b4: "Official Social Push", intro_m_b4_sub: "Brand endorsement + matrix reach",
    intro_m_b5: "Founding Merchant Badge", intro_m_b5_sub: "Verified mark that builds trust",
    intro_m_value: "RM 1,500+", intro_m_limit: "First 100 only",
    intro_t_title: "Founding Pro Package",
    intro_t_sub: "Turn skills into steady income",
    intro_t_b1: "Zero Barrier Onboarding", intro_t_b1_sub: "Early bird perks, no cost to start",
    intro_t_b2: "Priority Job Matching", intro_t_b2_sub: "Jobs reach you first",
    intro_t_b3: "Homepage Featured", intro_t_b3_sub: "Get noticed by target clients",
    intro_t_b4: "Platform Traffic Boost", intro_t_b4_sub: "Steady orders, repeat business",
    intro_t_b5: "Founding Pro Badge", intro_t_b5_sub: "Professional endorsement",
    intro_t_value: "RM 1,000+", intro_t_limit: "First 100 only",
    intro_cta: "Register Now",
    intro_switch: "Switch role",
    role_label: "I am a",
    role_customer: "Customer", role_merchant: "Merchant", role_tech: "Technician", role_artisan: "Artisan",
    sec_account: "Account",
    sec_info: "Basic Info",
    sec_shop: "Shop Info",
    sec_address: "Address",
    sec_skill: "Skills",
    sec_mode: "Service Mode",

    username: "Account ID", username_ph: "Letters + numbers, 4-20",
    phone: "Phone", phone_ph: "+60123456789",
    email: "Email", email_ph: "you@example.com",
    password: "Password", password_ph: "At least 8 characters",
    confirm: "Confirm Password", confirm_ph: "Type again",
    name: "Full Name", name_ph: "Your name",
    shopName: "Shop Name", shopName_ph: "Business name",
    industry: "Industry",
    industrySubs: "Services (multi-select)",
    skillMain: "Skill Category",
    skillSubs: "Specific Skills (multi-select)",
    yearsExp: "Years of Experience", yearsExp_ph: "e.g. 5",
    range: "Service Range",
    serveMode: "Service Mode",
    cert: "Certificates (optional)", cert_ph: "e.g. SKM Certified",

    state: "State", city: "City", area: "Area", detail: "Detailed Address",
    detail_ph: "Street / Unit number",

    submit: "Submit Registration",
    submitting: "Submitting…",
    success_title: "Registration Successful!",
    success_sub: "Your Account ID",
    success_keep: "Save a screenshot — use it to log in",
    success_bonus: "🎁 RM80 home check voucher credited",
    success_next: "More offers coming. We'll notify you by email.",
    ok: "Got it",
    close: "Close",

    err_required: "Please fill in all required fields",
    err_username: "Account ID must be 4-20 letters or numbers",
    err_phone: "Invalid phone number",
    err_email: "Invalid email",
    err_password: "Password must be at least 8 characters",
    err_confirm: "Passwords don't match",
    err_taken: "Already registered",
    err_server: "Submission failed. Please try again.",
    err_terms: "Please agree to the Terms first",
    agree_gate_title: "Before we begin, please read & agree",
    agree_gate_sub: "To protect your rights, please review the following agreements and tick each box.",
    agree_lbl_terms: "I have read and agree to the Terms of Service",
    agree_lbl_privacy: "I have read and agree to the Privacy Policy",
    agree_lbl_role_customer: "I have read and agree to the User Service Agreement",
    agree_lbl_role_merchant: "I have read and agree to the Merchant Agreement",
    agree_lbl_role_tech: "I have read and agree to the Pro Agreement",
    agree_lbl_role_agent: "I have read and agree to the Regional Agent Agreement",
    agree_next: "Agree & Continue",
    err_agree_all: "Please tick all agreements before continuing",
    agree_tip: "Tip: Tap an agreement title to read the full text.",
    agree: "I have read and agree to",
    terms: "Terms of Service",
    and: "and",
    privacy: "Privacy Policy",
  },
  ms: {
    title: "Sertai VGO Awal",
    welcome: "Daftar & dapat Baucar Pemeriksaan Rumah RM80",
    welcome_sub: "Terhad kepada 1,000 pengguna terawal",

    intro_c_title: "Hadiah Pendaftaran Awal",
    intro_c_sub: "Alami dahulu, kami ke rumah anda",
    intro_c_b1: "Baucar Pemeriksaan Rumah RM 80", intro_c_b1_sub: "Tuntut selepas daftar",
    intro_c_b2: "Status Pengguna Perintis", intro_c_b2_sub: "Cuba ciri baharu dahulu",
    intro_c_b3: "Hak Istimewa Awal", intro_c_b3_sub: "Keutamaan untuk tawaran akan datang",
    intro_c_value: "RM 80", intro_c_limit: "1,000 terawal sahaja",
    intro_m_title: "Pakej Sokongan Peniaga Perintis",
    intro_m_sub: "Buat perniagaan anda dilihat lebih ramai",
    intro_m_b1: "Pendaftaran Tanpa Halangan", intro_m_b1_sub: "Mula percuma, menang awal",
    intro_m_b2: "Slot Utama Halaman Depan", intro_m_b2_sub: "Pendedahan kepada pengguna seluruh Malaysia",
    intro_m_b3: "Sokongan Trafik Platform", intro_m_b3_sub: "Pelanggan datang sendiri",
    intro_m_b4: "Promosi Rasmi Media Sosial", intro_m_b4_sub: "Pengesahan jenama + liputan meluas",
    intro_m_b5: "Lencana Peniaga Perintis", intro_m_b5_sub: "Tanda pengesahan bina kepercayaan",
    intro_m_value: "RM 1,500+", intro_m_limit: "100 terawal sahaja",
    intro_t_title: "Pakej Tukang Perintis",
    intro_t_sub: "Tukar kemahiran jadi pendapatan tetap",
    intro_t_b1: "Pendaftaran Tanpa Halangan", intro_t_b1_sub: "Hak awal, mula tanpa kos",
    intro_t_b2: "Padanan Kerja Keutamaan", intro_t_b2_sub: "Kerja sampai kepada anda dahulu",
    intro_t_b3: "Paparan Halaman Depan", intro_t_b3_sub: "Dilihat oleh pelanggan sasaran",
    intro_t_b4: "Sokongan Trafik Platform", intro_t_b4_sub: "Pesanan tetap, pelanggan berulang",
    intro_t_b5: "Lencana Tukang Perintis", intro_t_b5_sub: "Pengesahan profesional",
    intro_t_value: "RM 1,000+", intro_t_limit: "100 terawal sahaja",
    intro_cta: "Daftar Sekarang",
    intro_switch: "Tukar peranan",
    role_label: "Saya seorang",
    role_customer: "Pelanggan", role_merchant: "Peniaga", role_tech: "Tukang", role_artisan: "Tukang Kraf",
    sec_account: "Akaun",
    sec_info: "Maklumat Asas",
    sec_shop: "Maklumat Kedai",
    sec_address: "Alamat",
    sec_skill: "Kemahiran",
    sec_mode: "Cara Perkhidmatan",

    username: "ID Akaun", username_ph: "Huruf + nombor, 4-20",
    phone: "Nombor Telefon", phone_ph: "+60123456789",
    email: "E-mel", email_ph: "anda@contoh.com",
    password: "Kata Laluan", password_ph: "Sekurang-kurangnya 8 aksara",
    confirm: "Sahkan Kata Laluan", confirm_ph: "Taip sekali lagi",
    name: "Nama Penuh", name_ph: "Nama anda",
    shopName: "Nama Kedai", shopName_ph: "Nama perniagaan",
    industry: "Kategori Industri",
    industrySubs: "Perkhidmatan (boleh pilih banyak)",
    skillMain: "Kategori Kemahiran",
    skillSubs: "Kemahiran Khusus (boleh pilih banyak)",
    yearsExp: "Tahun Pengalaman", yearsExp_ph: "cth. 5",
    range: "Kawasan Perkhidmatan",
    serveMode: "Cara Perkhidmatan",
    cert: "Sijil (pilihan)", cert_ph: "cth. Bertauliah SKM",

    state: "Negeri", city: "Bandar", area: "Daerah", detail: "Alamat Penuh",
    detail_ph: "Jalan / Nombor unit",

    submit: "Hantar Pendaftaran",
    submitting: "Menghantar…",
    success_title: "Pendaftaran Berjaya!",
    success_sub: "ID Akaun anda",
    success_keep: "Simpan tangkapan skrin — untuk log masuk",
    success_bonus: "🎁 Baucar Pemeriksaan Rumah RM80 telah dikreditkan",
    success_next: "Lebih banyak tawaran akan datang. Kami akan maklumkan melalui e-mel.",
    ok: "Baik",
    close: "Tutup",

    err_required: "Sila isi semua ruangan wajib",
    err_username: "ID Akaun perlu 4-20 huruf atau nombor",
    err_phone: "Nombor telefon tidak sah",
    err_email: "E-mel tidak sah",
    err_password: "Kata laluan sekurang-kurangnya 8 aksara",
    err_confirm: "Kata laluan tidak sepadan",
    err_taken: "Sudah didaftarkan",
    err_server: "Gagal hantar. Sila cuba lagi.",
    err_terms: "Sila setuju Terma dahulu",
    agree_gate_title: "Sebelum mula, sila baca & setuju",
    agree_gate_sub: "Untuk melindungi hak anda, sila baca perjanjian berikut dan tanda setiap kotak.",
    agree_lbl_terms: "Saya telah membaca dan bersetuju dengan Terma Perkhidmatan",
    agree_lbl_privacy: "Saya telah membaca dan bersetuju dengan Dasar Privasi",
    agree_lbl_role_customer: "Saya telah membaca dan bersetuju dengan Perjanjian Perkhidmatan Pengguna",
    agree_lbl_role_merchant: "Saya telah membaca dan bersetuju dengan Perjanjian Peniaga",
    agree_lbl_role_tech: "Saya telah membaca dan bersetuju dengan Perjanjian Tukang",
    agree_lbl_role_agent: "Saya telah membaca dan bersetuju dengan Perjanjian Ejen Serantau",
    agree_next: "Setuju & Teruskan",
    err_agree_all: "Sila tanda semua perjanjian sebelum meneruskan",
    agree_tip: "Petua: Ketik tajuk perjanjian untuk baca teks penuh.",
    agree: "Saya telah baca dan setuju dengan",
    terms: "Terma Perkhidmatan",
    and: "dan",
    privacy: "Notis Privasi",
  },
} as const;

export function pickLabel(label: Label, lang: Lang): string {
  return label[lang] ?? label.en;
}
```

## File: src/app/faq/page.tsx
```typescript
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, HelpCircle, User, Store, Wrench, Shield, MessageCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";
import PageShell from "@/components/PageShell";

type Cat = "all" | "general" | "customer" | "merchant" | "tech" | "security";

const CATS: Record<Cat, { zh: string; en: string; ms: string; Icon: any }> = {
  all:      { zh: "全部", en: "All", ms: "Semua", Icon: HelpCircle },
  general:  { zh: "关于 V'GO", en: "About V'GO", ms: "Tentang V'GO", Icon: HelpCircle },
  customer: { zh: "客户", en: "Customer", ms: "Pelanggan", Icon: User },
  merchant: { zh: "商家", en: "Merchant", ms: "Peniaga", Icon: Store },
  tech:     { zh: "师傅", en: "Technician", ms: "Juruteknik", Icon: Wrench },
  security: { zh: "安全", en: "Security", ms: "Keselamatan", Icon: Shield },
};

const FAQ = {
  zh: [
    { cat: "general", q: "V'GO 是什么？", a: "V'GO 是马来西亚上门服务平台，把认证师傅和有需要的家庭连在一起。你可以在这里找维修、清洁、按摩、跑腿、二手交易、招工等服务。我们目前覆盖沙巴州亚庇地区，正在持续扩展中。" },
    { cat: "general", q: "覆盖哪些地区？", a: "目前覆盖马来西亚沙巴州亚庇及周边地区。我们计划在未来 12 个月逐步扩展到沙巴其他城市和西马主要城市。你可以在官网首页看到最新的覆盖区域地图。" },
    { cat: "general", q: "V'GO 和 Grab 有什么不同？", a: "V'GO 专注上门生活服务（维修、清洁、按摩、跑腿、二手、招工），不是打车或外卖。我们是本地平台，客服说中文/英文/马来文，服务也由本地师傅提供。" },
    { cat: "general", q: "怎么联系客服？", a: "邮件 support.vgo@gmail.com 或 WhatsApp +60 11-7269 1788。工作时间为周一至周日 9:00-21:00（马来西亚时间），我们会在 24 小时内回复每一条信息。" },

    { cat: "customer", q: "怎么下单？", a: "注册账号后下载 App，选择需要的服务，填写地址和时间，一键下单。系统会派附近的认证师傅接单，你可以实时看到师傅位置。下单前你会看到预估价格，师傅上门确认后才给出最终价格。" },
    { cat: "customer", q: "价格怎么算？", a: "每个服务都有明确的起始价格区间，下单前你会看到报价。师傅上门确认后才会给出最终价格，你同意才开工，没有隐藏费用。如遇价格疑问，可随时联系客服协助。" },
    { cat: "customer", q: "可以退款吗？", a: "可以。如果师傅未按时上门，或服务未完成，你可以申请全额退款。平台会在 1-3 个工作日内处理。如遇争议，平台客服会介入调查。" },
    { cat: "customer", q: "可以指定师傅吗？", a: "如果平台提供指定功能，你可以在下单时备注。多次服务后可优先预约同一师傅，熟悉你的需求和偏好。具体以 App 内功能为准。" },
    { cat: "customer", q: "服务时间多久？", a: "不同类型的服务时长不同，下单前会显示预估时长。维修类通常 30-120 分钟，清洁类 2-6 小时，按摩类 60-120 分钟。实际时长取决于具体问题复杂度和现场情况。" },
    { cat: "customer", q: "可以在晚上下单吗？", a: "可以。平台 7×24 小时接单，深夜时段（22:00-06:00）部分服务可能加收服务费。紧急情况（如爆管、跳闸）优先派单。" },

    { cat: "merchant", q: "商家怎么入驻？", a: "点击官网「商家合作」页面，提交 SSM 注册文件、IC、银行资料，我们会在 1-2 个工作日内审核。免费入驻，按单结算，没有隐藏费用。" },
    { cat: "merchant", q: "需要什么文件？", a: "需要：SSM 营业注册文件（Form D/9/24/49）、签署协议人的 IC 正反面、银行账户信息、品牌 Logo 和门店照片、服务目录和价格表。如有 Halal / SST 认证也请一并提供。" },
    { cat: "merchant", q: "平台收取多少费用？", a: "VGO 对标准服务订单收取一定比例的平台服务费，具体费率以双方签署的协议为准。所有费用在入驻前会明确告知，没有隐藏收费。前 2 个月有 0% 手续费优惠（限首批商家）。" },
    { cat: "merchant", q: "结算周期是多久？", a: "订单完成后，款项按照平台约定的结算周期入账，通常为每周或每两周结算一次。具体以协议条款为准。" },
    { cat: "merchant", q: "可以只上架部分服务吗？", a: "可以。你可以选择上架全部服务，也可以只上架部分。入驻后随时可以在商家后台调整服务目录。" },

    { cat: "tech", q: "手艺人怎么加入？", a: "点击官网「师傅入驻」页面，提交你的技能和身份信息。通过审核后即可接单，零成本，自己排时间。前 2 个月有 0% 手续费 + 创始徽章优惠（限首批师傅）。" },
    { cat: "tech", q: "需要什么资料？", a: "需要：身份证（IC）正反面、专业技能证书（如有）、银行账户（收款用）、个人照片 + 工作照、无犯罪记录证明（部分服务需）、健康证明（美容/按摩类需）。" },
    { cat: "tech", q: "多久能拿到钱？", a: "订单完成、客户验收后，款项按平台约定的结算周期自动打入你的银行账户。具体周期以入驻协议为准。" },
    { cat: "tech", q: "客户不付款怎么办？", a: "V'GO 平台提供订单担保。所有通过平台的订单，客户付款会先进入平台托管，完工验收后才会放款给你。客户无法直接拖欠。" },
    { cat: "tech", q: "每天必须接单吗？", a: "不必须。你完全自主决定接单时间和数量。想多赚就多接，想休息就下线。平台不会强制派单。" },

    { cat: "security", q: "数据安全吗？", a: "我们采用行业标准安全措施：传输加密（HTTPS）、密码 scrypt 加密、访问控制、密钥隔离、日志审计。所有敏感数据（如手机号）在日志中脱敏处理。详见隐私政策。" },
    { cat: "security", q: "师傅有认证吗？", a: "有。所有师傅入驻前都需通过身份验证和技能审核，可查真实身份、真实评价、真实服务记录。维修类师傅还需提供相关资质证明。平台全程记录服务过程，保障双方权益。" },
    { cat: "security", q: "服务过程安全吗？", a: "平台要求所有师傅签署服务规范，包括：按时到达、先报价后动手、不擅自加价、不乱翻客户物品、服务过程可留档。如遇不当行为，可立即投诉，平台介入处理。" },
    { cat: "security", q: "我的个人信息会被公开吗？", a: "不会。我们严格遵守 PDPA 2024（马来西亚个人数据保护法）。你的手机号、地址、身份证信息都加密存储，仅在服务过程中提供给对应的师傅，服务完成后自动隐藏。" },
  ],
  en: [
    { cat: "general", q: "What is V'GO?", a: "V'GO is a Malaysia home-service platform connecting certified pros with families in need. Find repair, cleaning, massage, errands, second-hand trading, and job listings all in one place. We currently cover Kota Kinabalu, Sabah, and are expanding steadily." },
    { cat: "general", q: "Which areas do you cover?", a: "Currently covering Kota Kinabalu and surrounding areas in Sabah, Malaysia. We plan to expand to other Sabah cities and Peninsular Malaysia within 12 months. Check the coverage map on our homepage for the latest." },
    { cat: "general", q: "How is V'GO different from Grab?", a: "V'GO focuses on home services (repair, cleaning, massage, errands, second-hand, gig work), not ride-hailing or food delivery. We're a local platform with trilingual support (Chinese/English/Malay), served by local pros." },
    { cat: "general", q: "How do I contact support?", a: "Email support.vgo@gmail.com or WhatsApp +60 11-7269 1788. Business hours: Mon-Sun 9:00-21:00 MYT. We reply within 24 hours." },

    { cat: "customer", q: "How do I place an order?", a: "Sign up, download the app, choose a service, enter your address and time, then order in one tap. The system dispatches nearby certified pros, and you can track them in real time. You'll see an estimated price before ordering." },
    { cat: "customer", q: "How is the price calculated?", a: "Each service has a clear starting price range shown before ordering. The final price is confirmed on-site by the pro. Work only starts after you agree — no hidden fees. Contact support if you have questions." },
    { cat: "customer", q: "Can I get a refund?", a: "Yes. If the pro doesn't show up on time or the service isn't completed, you can request a full refund. Processed within 1-3 business days. Platform support will mediate in case of disputes." },
    { cat: "customer", q: "Can I choose a specific pro?", a: "If the platform offers the feature, you can note your preferred pro when ordering. After several services, you can prioritize the same pro who knows your needs. Check the app for specifics." },
    { cat: "customer", q: "How long does a service take?", a: "Depends on the service type. Repair: 30-120 min; Cleaning: 2-6 hours; Massage: 60-120 min. Actual time depends on complexity and site conditions." },
    { cat: "customer", q: "Can I order at night?", a: "Yes. The platform accepts orders 24/7. Late-night hours (22:00-06:00) may incur a service fee for some services. Emergencies (burst pipe, blackout) get priority dispatch." },

    { cat: "merchant", q: "How do merchants join?", a: "Tap \"Merchant Partnership\" on our website, submit your SSM registration, IC, and bank info. We review within 1-2 business days. Free to join, pay per order, no hidden fees." },
    { cat: "merchant", q: "What documents are needed?", a: "Required: SSM registration (Form D/9/24/49), IC front & back of the signatory, bank account details, brand logo and store photos, service catalog with pricing. Provide Halal / SST certifications if applicable." },
    { cat: "merchant", q: "What fees does the platform charge?", a: "VGO charges a platform service fee per standard-service order. Exact rate is stated in the agreement you sign. All fees are disclosed before onboarding — no hidden charges. First 2 months are 0% fee (limited to first batch)." },
    { cat: "merchant", q: "How often do I get paid?", a: "After order completion, payments are settled according to the agreed cycle, usually weekly or bi-weekly. Check your agreement for specifics." },
    { cat: "merchant", q: "Can I list only some services?", a: "Yes. You can list all services or just a subset. You can adjust your service catalog anytime in the merchant dashboard." },

    { cat: "tech", q: "How do pros join?", a: "Tap \"Technician Onboarding\" on our website, submit your skills and ID. Once approved, you can start taking jobs — zero cost, set your own hours. First 2 months are 0% fee + founder badge (limited to first batch)." },
    { cat: "tech", q: "What documents are needed?", a: "Required: IC front & back, skill certificates (if any), bank account for payouts, personal photo and work photos, police clearance (some services), health certificate (beauty/massage)." },
    { cat: "tech", q: "When do I get paid?", a: "After the customer accepts and service is complete, payment is auto-transferred per the agreed cycle. Check your onboarding agreement for specifics." },
    { cat: "tech", q: "What if the customer doesn't pay?", a: "V'GO offers order escrow. All platform orders are pre-paid into escrow and only released after acceptance. Customers cannot default directly." },
    { cat: "tech", q: "Must I take jobs every day?", a: "No. You fully control your schedule and volume. Take more for more income, go offline to rest. The platform never forces dispatches." },

    { cat: "security", q: "Is my data safe?", a: "We use industry-standard security: HTTPS, scrypt password hashing, access controls, key isolation, audit logging. Sensitive data (e.g. phone numbers) is masked in logs. See our Privacy Policy for details." },
    { cat: "security", q: "Are pros certified?", a: "Yes. All pros must pass identity and skill verification before joining — real ID, real ratings, real service history. Repair pros must provide certifications. Every service is fully recorded." },
    { cat: "security", q: "Is the service process safe?", a: "All pros sign service standards: on-time arrival, quote before work, no arbitrary price hikes, no snooping, service can be documented. Immediate complaint and platform mediation if violations occur." },
    { cat: "security", q: "Is my personal info public?", a: "No. We strictly comply with PDPA 2024 (Malaysia Personal Data Protection Act). Your phone, address, and IC are encrypted. Only shared with the assigned pro during service, hidden automatically after." },
  ],
  ms: [
    { cat: "general", q: "Apa itu V'GO?", a: "V'GO ialah platform perkhidmatan ke rumah Malaysia, menghubungkan tukang bertauliah dengan keluarga yang memerlukan. Cari pembaikan, pembersihan, urutan, penghantaran, jual beli terpakai, dan kerja. Kami kini meliputi Kota Kinabalu, Sabah." },
    { cat: "general", q: "Liputan kawasan mana?", a: "Kini meliputi Kota Kinabalu dan kawasan sekitar Sabah. Kami merancang meluaskan ke bandar lain di Sabah dan Semenanjung dalam 12 bulan. Lihat peta liputan di laman utama." },
    { cat: "general", q: "Apa beza V'GO dengan Grab?", a: "V'GO fokus pada perkhidmatan rumah (pembaikan, pembersihan, urutan, penghantaran, terpakai, kerja gig), bukan teksi atau penghantaran makanan. Kami platform tempatan dengan sokongan tiga bahasa." },
    { cat: "general", q: "Macam mana hubungi sokongan?", a: "E-mel support.vgo@gmail.com atau WhatsApp +60 11-7269 1788. Waktu operasi: Isnin-Ahad 9:00-21:00 MYT. Kami balas dalam 24 jam." },

    { cat: "customer", q: "Macam mana nak tempah?", a: "Daftar akaun, muat turun app, pilih servis, isi alamat dan masa, tempah satu klik. Sistem akan hantar tukang bertauliah berdekatan. Anda boleh track mereka secara langsung." },
    { cat: "customer", q: "Macam mana harga dikira?", a: "Setiap servis ada julat harga permulaan yang jelas sebelum tempah. Harga akhir disahkan oleh tukang di lokasi. Kerja hanya mula selepas anda setuju — tiada caj tersembunyi." },
    { cat: "customer", q: "Boleh dapat bayaran balik?", a: "Boleh. Jika tukang tak datang tepat masa atau servis tak siap, anda boleh minta bayaran balik penuh. Diproses dalam 1-3 hari bekerja." },
    { cat: "customer", q: "Boleh pilih tukang tertentu?", a: "Jika platform menyediakan ciri ini, anda boleh catat tukang pilihan semasa tempah. Selepas beberapa servis, anda boleh utamakan tukang yang sama." },
    { cat: "customer", q: "Berapa lama servis?", a: "Bergantung pada jenis servis. Pembaikan: 30-120 minit; Pembersihan: 2-6 jam; Urutan: 60-120 minit. Masa sebenar bergantung pada kerumitan." },
    { cat: "customer", q: "Boleh tempah waktu malam?", a: "Boleh. Platform terima pesanan 24/7. Waktu lewat malam (22:00-06:00) mungkin dikenakan caj untuk sebahagian servis. Kecemasan diutamakan." },

    { cat: "merchant", q: "Macam mana peniaga sertai?", a: "Klik \"Kerjasama Peniaga\" di laman web, hantar pendaftaran SSM, IC, dan maklumat bank. Kami semak dalam 1-2 hari bekerja. Daftar percuma, bayar ikut tempahan." },
    { cat: "merchant", q: "Apa dokumen diperlukan?", a: "Pendaftaran SSM (Borang D/9/24/49), IC hadapan & belakang, maklumat akaun bank, logo dan gambar kedai, katalog servis dengan harga. Sertakan pensijilan Halal/SST jika ada." },
    { cat: "merchant", q: "Platform cas berapa?", a: "VGO mengenakan fi perkhidmatan platform bagi setiap pesanan servis standard. Kadar tepat dinyatakan dalam perjanjian. Semua fi dimaklumkan sebelum pendaftaran — tiada caj tersembunyi." },
    { cat: "merchant", q: "Berapa kerap dibayar?", a: "Selepas pesanan selesai, bayaran diselesaikan mengikut kitaran yang dipersetujui, biasanya mingguan atau dua mingguan." },
    { cat: "merchant", q: "Boleh senaraikan sebahagian servis sahaja?", a: "Boleh. Anda boleh senaraikan semua atau sebahagian sahaja. Boleh ubah katalog servis bila-bila masa di dashboard peniaga." },

    { cat: "tech", q: "Macam mana tukang sertai?", a: "Klik \"Pendaftaran Juruteknik\" di laman web, hantar kemahiran dan ID anda. Selepas lulus, boleh mula terima kerja — kos sifar, atur masa sendiri." },
    { cat: "tech", q: "Apa dokumen diperlukan?", a: "IC hadapan & belakang, sijil kemahiran (jika ada), akaun bank untuk bayaran, gambar peribadi dan kerja, surat bersih polis (sebahagian servis), sijil kesihatan (kecantikan/urutan)." },
    { cat: "tech", q: "Bila dapat bayaran?", a: "Selepas pelanggan terima dan servis selesai, bayaran dipindahkan secara automatik mengikut kitaran yang dipersetujui." },
    { cat: "tech", q: "Macam mana jika pelanggan tak bayar?", a: "V'GO menawarkan eskrow pesanan. Semua pesanan platform dibayar ke eskrow dan hanya dilepaskan selepas penerimaan. Pelanggan tidak boleh gagal bayar terus." },
    { cat: "tech", q: "Mesti terima kerja setiap hari?", a: "Tidak. Anda kawal sepenuhnya jadual dan jumlah anda. Terima lebih untuk lebih pendapatan, offline untuk rehat." },

    { cat: "security", q: "Adakah data saya selamat?", a: "Kami guna keselamatan standard industri: HTTPS, pencincangan kata laluan scrypt, kawalan akses, pengasingan kunci, audit log. Data sensitif (nombor telefon) dimaskerkan dalam log." },
    { cat: "security", q: "Tukang ada pensijilan?", a: "Ada. Semua tukang perlu lulus pengesahan identiti dan kemahiran sebelum sertai — ID sebenar, penilaian sebenar, rekod servis sebenar." },
    { cat: "security", q: "Proses servis selamat?", a: "Semua tukang tandatangan piawaian: tiba tepat masa, sebut harga dahulu, tiada kenaikan harga sewenang-wenangnya, tiada menggeledah, servis boleh didokumentasi." },
    { cat: "security", q: "Maklumat peribadi saya awam?", a: "Tidak. Kami patuh sepenuhnya PDPA 2024. Telefon, alamat, dan IC anda disulitkan. Dikongsi hanya dengan tukang berkaitan semasa servis, disembunyikan selepas selesai." },
  ],
} as const;

export default function FaqPage() {
  const { lang } = useLang();
  const c: "zh" | "en" | "ms" = (lang === "en" || lang === "ms") ? lang : "zh";
  const [cat, setCat] = useState<Cat>("all");
  const [open, setOpen] = useState<number | null>(0);
  const [query, setQuery] = useState("");

  const allItems: { cat: string; q: string; a: string }[] = FAQ[c] as any;
  const filtered = allItems.filter((item) => {
    const matchCat = cat === "all" || item.cat === cat;
    const matchQ = !query.trim() ||
      item.q.toLowerCase().includes(query.toLowerCase()) ||
      item.a.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <PageShell label={c === "en" ? "FAQ" : c === "ms" ? "Soalan Lazim" : "常见问题"} title={c === "en" ? "Frequently Asked Questions" : c === "ms" ? "Soalan Lazim" : "常见问题"}>
      {/* 搜索 */}
      <div className="not-prose mb-6">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={c === "en" ? "Search questions..." : c === "ms" ? "Cari soalan..." : "搜索问题..."}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-[var(--vgo)] placeholder-white/40 transition"
          />
        </div>
      </div>

      {/* 分类 tab */}
      <div className="not-prose mb-8 flex flex-wrap gap-2">
        {(Object.keys(CATS) as Cat[]).map((k) => {
          const Icon = CATS[k].Icon;
          const active = cat === k;
          return (
            <button
              key={k}
              onClick={() => { setCat(k); setOpen(null); }}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition ${
                active
                  ? "bg-gradient-to-b from-[var(--vgo)] to-[var(--vgo-dark)] text-white shadow-lg shadow-orange-500/30"
                  : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={13} strokeWidth={2.4} />
              {CATS[k][c]}
            </button>
          );
        })}
      </div>

      {/* FAQ 列表 */}
      <div className="space-y-3 not-prose">
        {filtered.length === 0 && (
          <div className="text-center py-16 text-white/40">
            <MessageCircle size={32} className="mx-auto mb-3 opacity-30" />
            <p className="text-sm">{c === "en" ? "No results found" : c === "ms" ? "Tiada hasil" : "没有找到相关问题"}</p>
            <p className="text-xs mt-2">{c === "en" ? "Try other keywords or contact support" : c === "ms" ? "Cuba kata kunci lain atau hubungi sokongan" : "换个关键词，或直接联系客服"}</p>
          </div>
        )}
        {filtered.map((item, i) => {
          const realIndex = allItems.indexOf(item);
          const isOpen = open === realIndex;
          return (
            <div
              key={item.q}
              className={`rounded-2xl border transition-colors ${
                isOpen ? "border-[#FFB800]/40 bg-orange-50/5" : "border-white/10 bg-white/3 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : realIndex)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-bold text-white text-sm sm:text-base">{item.q}</span>
                <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg font-light transition-[transform,box-shadow,opacity,width,background-color] duration-300 ${
                  isOpen ? "bg-[#FFB800] text-white rotate-45" : "bg-white/10 text-white/60"
                }`}>+</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-white/65 leading-[1.8]">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* 没找到？联系客服 */}
      {filtered.length > 0 && (
        <div className="not-prose mt-12 p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-600/5 border border-orange-500/25 text-center">
          <MessageCircle size={22} className="text-[var(--vgo)] mx-auto mb-3" />
          <p className="text-sm text-white/80 mb-4">
            {c === "en" ? "Didn't find what you're looking for?" : c === "ms" ? "Tak jumpa apa yang anda cari?" : "没找到你的问题？"}
          </p>
          <a
            href="https://wa.me/601172691788"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white text-sm font-black hover:scale-105 active:scale-95 transition"
          >
            <MessageCircle size={16} />
            {c === "en" ? "Contact Support" : c === "ms" ? "Hubungi Sokongan" : "联系客服"}
          </a>
        </div>
      )}
    </PageShell>
  );
}
```

## File: src/components/AppLinks.tsx
```typescript
"use client";
import { useLang } from "@/lib/i18n";
import { useRef, useState } from "react";
import { User, Store, Wrench, MessageCircle, ArrowRight } from "lucide-react";

const APPS = [
  {
    Icon: User,
    title: { zh: "客户版 App", en: "Customer App", ms: "App Pelanggan" },
    desc: { zh: "下单、报价、支付、评价", en: "Order, quote, pay, review", ms: "Pesan, sebut harga, bayar, ulasan" },
    cta: { zh: "打开客户版", en: "Open Customer", ms: "Buka Pelanggan" },
    href: "https://customer.vgoservice.com",
    color: "#4A90D9",
  },
  {
    Icon: Store,
    title: { zh: "商家版 App", en: "Merchant App", ms: "App Peniaga" },
    desc: { zh: "服务管理、排班、对账", en: "Services, schedule, settlement", ms: "Perkhidmatan, jadual, penyelesaian" },
    cta: { zh: "打开商家版", en: "Open Merchant", ms: "Buka Peniaga" },
    href: "https://merchant.vgoservice.com",
    color: "#FF8A1F",
  },
  {
    Icon: Wrench,
    title: { zh: "师傅版 App", en: "Technician App", ms: "App Teknisi" },
    desc: { zh: "接单、报价、上传证据", en: "Jobs, quotes, upload evidence", ms: "Kerja, sebut harga, muat naik bukti" },
    cta: { zh: "打开师傅版", en: "Open Technician", ms: "Buka Teknisi" },
    href: "https://tech.vgoservice.com",
    color: "#2BAE66",
  },
];

const AI_CS_URL = "https://vgo-ai.jason52013141018.workers.dev";

export default function AppLinks() {
  const { lang } = useLang();
  const L = (lang === "en" || lang === "ms") ? lang : "zh";
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  function onScroll() {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / APPS.length;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setActive(Math.max(0, Math.min(APPS.length - 1, idx)));
  }

  function goTo(idx: number) {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / APPS.length;
    el.scrollTo({ left: idx * cardWidth, behavior: "smooth" });
  }

  return (
    <section id="apps" className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
          {L === "zh" ? "选择你的 App" : L === "ms" ? "Pilih App Anda" : "Choose Your App"}
        </h2>
        <p className="mt-3 text-sm text-gray-500">
          {L === "zh" ? "三个独立 App · 一个账号通用 · 数据互通" : L === "ms" ? "Tiga App berasingan · Satu akaun · Data dikongsi" : "Three separate Apps · One account · Shared data"}
        </p>
      </div>

      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-5 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollPaddingLeft: "20px" }}
      >
        {APPS.map(({ Icon, href, title, desc, cta, color }) => (
          <a
            key={href}
            href={href}
            className="snap-center shrink-0 w-[80vw] max-w-[360px] group flex flex-col p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-200"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: `${color}20`, color }}
            >
              <Icon size={32} strokeWidth={2} />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2">{title[L]}</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">{desc[L]}</p>
            <div className="flex items-center gap-1.5 text-sm font-bold" style={{ color }}>
              <span>{cta[L]}</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </a>
        ))}
        <div className="shrink-0 w-5" aria-hidden />
      </div>

      <div className="flex items-center justify-center gap-2 mt-5">
        {APPS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`App ${i + 1}`}
            className={`h-2 rounded-full transition-[width,background-color] duration-300 ${
              i === active ? "w-6 bg-[var(--vgo)]" : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-5 mt-10">
        <a
          href={AI_CS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 max-w-2xl mx-auto p-5 rounded-2xl bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white shadow-lg hover:shadow-xl hover:scale-[1.01] transition-[transform,box-shadow] duration-200"
        >
          <MessageCircle size={28} strokeWidth={2} />
          <div className="flex-1 text-left">
            <div className="font-black text-base">
              {L === "zh" ? "VGO 智能客服" : L === "ms" ? "Sokongan AI VGO" : "VGO AI Support"}
            </div>
            <div className="text-xs opacity-90 mt-0.5">
              {L === "zh" ? "中/英/马 三语 · 7×24 在线" : L === "ms" ? "BM/EN/中文 · 7×24" : "EN/BM/中文 · 7×24"}
            </div>
          </div>
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}
```

## File: src/components/FAQ.tsx
```typescript
"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useLang } from "@/lib/i18n";

export default function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  const FAQS = [
    { q: t("faq_q1"), a: t("faq_a1") },
    { q: t("faq_q2"), a: t("faq_a2") },
    { q: t("faq_q3"), a: t("faq_a3") },
    { q: t("faq_q4"), a: t("faq_a4") },
    { q: t("faq_q5"), a: t("faq_a5") },
    { q: t("faq_q6"), a: t("faq_a6") },
  ];

  return (
    <section className="relative bg-white py-20 sm:py-28 px-5 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.04]"
        style={{ backgroundImage: "url('/shared/s06.jpg')" }}
      />
      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[var(--vgo)] font-bold text-sm tracking-widest uppercase mb-3">{t("faq_label")}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            {t("faq_title")}
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`rounded-2xl border transition-colors ${
                open === i ? "border-[var(--vgo)]/30 bg-orange-50/40" : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-bold text-gray-900 text-sm sm:text-base">{f.q}</span>
                <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg font-light transition-[transform,box-shadow,opacity,width,background-color] duration-300 ${
                  open === i ? "bg-[var(--vgo)] text-white rotate-45" : "bg-gray-100 text-gray-600"
                }`}>+</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## File: src/components/Guarantees.tsx
```typescript
"use client";
import { motion } from "motion/react";
import { ShieldCheck, Wallet, Clock, RefreshCw, Lock, Headphones } from "lucide-react";
import { useLang } from "@/lib/i18n";

const C = {
  zh: {
    label: "我们的承诺",
    title: "为什么选择 VGO",
    sub: "6 大保障，让你用得放心",
    items: [
      { Icon: ShieldCheck, title: "认证师傅", p1: "身份验证 + 技能审核", p2: "不满意免费更换" },
      { Icon: Wallet,      title: "价格透明", p1: "下单前先看报价", p2: "无隐藏费用" },
      { Icon: Clock,       title: "准时上门", p1: "迟到提前告知", p2: "全程可追踪" },
      { Icon: RefreshCw,   title: "售后保障", p1: "服务未完成退款", p2: "平台介入处理" },
      { Icon: Lock,        title: "隐私保护", p1: "PDPA 合规", p2: "数据加密存储" },
      { Icon: Headphones,  title: "24 小时客服", p1: "WhatsApp 随时问", p2: "24 小时内回复" },
    ],
  },
  en: {
    label: "Our Promise",
    title: "Why Choose VGO",
    sub: "6 guarantees for your peace of mind",
    items: [
      { Icon: ShieldCheck, title: "Certified Pros", p1: "ID + skill verified", p2: "Free replacement if unsatisfied" },
      { Icon: Wallet,      title: "Transparent Pricing", p1: "See price before booking", p2: "No hidden fees" },
      { Icon: Clock,       title: "On-Time Arrival", p1: "Delay notified in advance", p2: "Fully trackable" },
      { Icon: RefreshCw,   title: "After-Sales", p1: "Refund if incomplete", p2: "Platform steps in" },
      { Icon: Lock,        title: "Privacy Protected", p1: "PDPA compliant", p2: "Encrypted storage" },
      { Icon: Headphones,  title: "24/7 Support", p1: "WhatsApp anytime", p2: "Reply within 24h" },
    ],
  },
  ms: {
    label: "Janji Kami",
    title: "Kenapa Pilih VGO",
    sub: "6 jaminan untuk ketenangan anda",
    items: [
      { Icon: ShieldCheck, title: "Tukang Bertauliah", p1: "Pengesahan ID + kemahiran", p2: "Ganti percuma jika tak puas" },
      { Icon: Wallet,      title: "Harga Telus", p1: "Tengok harga dulu", p2: "Tiada caj tersembunyi" },
      { Icon: Clock,       title: "Tepat Masa", p1: "Lewat dimaklumkan awal", p2: "Boleh track penuh" },
      { Icon: RefreshCw,   title: "Jaminan Selepas", p1: "Bayaran balik jika tak siap", p2: "Platform ambil tindakan" },
      { Icon: Lock,        title: "Privasi Dilindungi", p1: "Patuh PDPA", p2: "Data disulitkan" },
      { Icon: Headphones,  title: "Sokongan 24 Jam", p1: "WhatsApp bila-bila", p2: "Balas dalam 24 jam" },
    ],
  },
} as const;

export default function Guarantees() {
  const { lang } = useLang();
  const c = C[lang] ?? C.zh;

  return (
    <section className="relative bg-white py-20 sm:py-28 px-5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[var(--vgo)]/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[var(--vgo)] font-bold text-sm tracking-widest uppercase mb-3">{c.label}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            {c.title}
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">{c.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {c.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="group relative p-7 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-[var(--vgo)]/30 hover:shadow-2xl hover:shadow-orange-500/10 transition-[transform,box-shadow,opacity,width,background-color] duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--vgo)] to-[var(--vgo-dark)] flex items-center justify-center mb-5 shadow-lg shadow-orange-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <item.Icon size={24} strokeWidth={2.2} className="text-white" />
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-3">{item.title}</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--vgo)]" />
                  {item.p1}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--vgo)]" />
                  {item.p2}
                </li>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## File: src/components/LangSwitcher.tsx
```typescript
"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe, Check } from "lucide-react";
import { useLang, Lang } from "@/lib/i18n";

const LANGS: { code: Lang; label: string; native: string }[] = [
  { code: "zh", label: "中文", native: "简体中文" },
  { code: "en", label: "English", native: "English" },
  { code: "ms", label: "Bahasa Melayu", native: "Bahasa Melayu" },
];

export default function LangSwitcher({ scrolled = false }: { scrolled?: boolean }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const current = LANGS.find((l) => l.code === lang);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Language"
        className={`flex items-center gap-1.5 px-3 py-2 rounded-full border transition-[transform,box-shadow,opacity,width,background-color] ${
          scrolled
            ? "bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200"
            : "bg-white/10 border-white/20 backdrop-blur-md text-white hover:bg-white/20"
        }`}
      >
        <Globe size={16} strokeWidth={2} />
        <span className="text-xs font-bold uppercase">{lang === "ms" ? "BM" : lang}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 overflow-hidden z-[80]"
          >
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-orange-950 hover:bg-orange-50 transition"
              >
                <span className="flex flex-col items-start">
                  <span className="font-semibold text-gray-900">{l.label}</span>
                  <span className="text-[10px] text-gray-400">{l.native}</span>
                </span>
                {lang === l.code && <Check size={16} className="text-[var(--vgo)]" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

## File: src/components/Notice.tsx
```typescript
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Gift, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

const C = {
  zh: {
    tag: "新用户专享",
    title: "注册即送 RM80",
    sub: "上门检查券",
    desc: "限首批 1000 名，先到先得",
    cta: "立即领取",
    hide: "今天不再显示",
  },
  en: {
    tag: "New User Offer",
    title: "Get RM80 on Sign Up",
    sub: "Home Check Voucher",
    desc: "Limited to first 1,000 users",
    cta: "Claim Now",
    hide: "Don't show today",
  },
  ms: {
    tag: "Tawaran Pengguna Baharu",
    title: "Dapat RM80 Bila Daftar",
    sub: "Baucar Pemeriksaan Rumah",
    desc: "Terhad kepada 1,000 pengguna terawal",
    cta: "Tuntut Sekarang",
    hide: "Jangan tunjuk hari ini",
  },
} as const;

const KEY = "vgo_notice_hide_until";

export default function Notice() {
  const { lang } = useLang();
  const c = C[lang as keyof typeof C] ?? C.en;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hideUntil = parseInt(localStorage.getItem(KEY) || "0", 10);
    if (Date.now() < hideUntil) return;
    const timer = setTimeout(() => setOpen(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const close = () => setOpen(false);

  const closeToday = () => {
    localStorage.setItem(KEY, String(Date.now() + 24 * 60 * 60 * 1000));
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ type: "spring", damping: 24 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-96 z-[150]"
        >
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/30 border border-gray-100">
            <button
              onClick={close}
              aria-label="close"
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center text-white transition z-20"
            >
              <X size={15} strokeWidth={2.5} />
            </button>

            {/* 场景背景图 */}
            <div className="relative h-32 overflow-hidden">
              <img loading="lazy"                 src="/shared/s02.jpg"
                alt="Technician at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--vgo)] flex items-center justify-center shadow-lg">
                  <Gift size={16} strokeWidth={2.5} className="text-white" />
                </div>
                <span className="text-[10px] font-black tracking-widest uppercase text-white/95 bg-black/30 backdrop-blur px-2 py-1 rounded-full">
                  {c.tag}
                </span>
              </div>
            </div>

            {/* 文案 + CTA */}
            <div className="p-5">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-black text-gray-900">{c.title}</span>
              </div>
              <div className="text-sm font-bold text-[var(--vgo)] mb-1">{c.sub}</div>
              <div className="text-xs text-gray-500 mb-4">{c.desc}</div>

              <a
                href="#download"
                onClick={close}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-b from-[var(--vgo)] to-[var(--vgo-dark)] text-white font-black text-sm shadow-lg shadow-orange-500/30 hover:brightness-110 active:scale-95 transition"
              >
                {c.cta}
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>

              <label className="flex items-center gap-2 mt-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  onChange={(e) => { if (e.target.checked) closeToday(); }}
                  className="w-3.5 h-3.5 accent-[var(--vgo)]"
                />
                <span className="text-[11px] text-gray-500">{c.hide}</span>
              </label>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

## File: next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
```

## File: src/app/contact/page.tsx
```typescript
"use client";

import { useLang } from "@/lib/i18n";
import PageShell from "@/components/PageShell";
import { Mail, Phone, MapPin, MessageCircle, Headphones, Store, Wrench, Users, Clock } from "lucide-react";
import CoverageSection from "@/components/CoverageSection";
import Link from "next/link";

const C = {
  zh: {
    label: "联系我们", title: "联系我们",
    intro: "无论是合作咨询、客户支持还是意见反馈，欢迎通过以下方式联系我们。",
    quick_t: "需要帮助？",
    quick: "以下是最快的联系方式",
    dept_t: "按部门联系",
    depts: [
      { Icon: Headphones, name: "客户支持", desc: "订单、退款、投诉、账号问题", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
      { Icon: Store,      name: "商家合作", desc: "入驻申请、合作洽谈、账单问题", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
      { Icon: Wrench,     name: "师傅入驻", desc: "入驻审核、接单、结算问题", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
      { Icon: Users,      name: "媒体 / 其他", desc: "媒体采访、投资合作、其他", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
    ],
    hours_t: "服务时间",
    hours: "周一至周日 · 9:00 – 21:00（马来西亚时间）",
    reply_note: "我们会在 24 小时内回复每一条信息。",
    faq_t: "常见问题快捷入口",
    faq_more: "查看全部 FAQ",
  },
  en: {
    label: "Contact Us", title: "Contact Us",
    intro: "Whether for partnership inquiries, customer support, or feedback, reach us through the following channels.",
    quick_t: "Need help?",
    quick: "Here are the fastest ways to reach us",
    dept_t: "Contact by Department",
    depts: [
      { Icon: Headphones, name: "Customer Support", desc: "Orders, refunds, complaints, account", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
      { Icon: Store,      name: "Merchant Partnership", desc: "Onboarding, partnership, billing", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
      { Icon: Wrench,     name: "Technician Onboarding", desc: "Verification, jobs, payouts", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
      { Icon: Users,      name: "Media / Others", desc: "Press, investment, general", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
    ],
    hours_t: "Business Hours",
    hours: "Mon – Sun · 9:00 AM – 9:00 PM (MYT)",
    reply_note: "We reply to every message within 24 hours.",
    faq_t: "Quick FAQ Links",
    faq_more: "View all FAQ",
  },
  ms: {
    label: "Hubungi Kami", title: "Hubungi Kami",
    intro: "Sama ada untuk pertanyaan kerjasama, sokongan pelanggan, atau maklum balas, hubungi kami melalui saluran berikut.",
    quick_t: "Perlukan bantuan?",
    quick: "Berikut adalah cara terpantas menghubungi kami",
    dept_t: "Hubungi mengikut Jabatan",
    depts: [
      { Icon: Headphones, name: "Sokongan Pelanggan", desc: "Pesanan, bayaran balik, aduan", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
      { Icon: Store,      name: "Kerjasama Peniaga", desc: "Pendaftaran, kerjasama, bil", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
      { Icon: Wrench,     name: "Pendaftaran Juruteknik", desc: "Pengesahan, kerja, bayaran", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
      { Icon: Users,      name: "Media / Lain-lain", desc: "Media, pelaburan, umum", email: "support.vgo@gmail.com", wa: "+60 11-7269 1788" },
    ],
    hours_t: "Waktu Operasi",
    hours: "Isnin – Ahad · 9:00 PG – 9:00 MLM (MYT)",
    reply_note: "Kami balas setiap mesej dalam 24 jam.",
    faq_t: "Pautan FAQ Pantas",
    faq_more: "Lihat semua FAQ",
  },
} as const;

const FAQ_LINKS = {
  zh: [
    "V'GO 是什么？",
    "怎么下单？",
    "师傅有认证吗？",
    "价格怎么算？",
  ],
  en: [
    "What is V'GO?",
    "How do I place an order?",
    "Are pros certified?",
    "How is the price calculated?",
  ],
  ms: [
    "Apa itu V'GO?",
    "Bagaimana untuk membuat pesanan?",
    "Adakah juruteknik bertauliah?",
    "Bagaimana harga dikira?",
  ],
};

export default function ContactPage() {
  const { lang } = useLang();
  const c = C[lang] ?? C.zh;
  const faqs = FAQ_LINKS[lang] ?? FAQ_LINKS.zh;

  return (
    <PageShell label={c.label} title={c.title}>
      <p className="text-white/75 leading-relaxed mb-10 text-base sm:text-lg">{c.intro}</p>

      {/* 快速联系 - WhatsApp 大按钮 */}
      <div className="not-prose mb-10">
        <h3 className="text-sm font-black text-white/70 uppercase tracking-widest mb-4">{c.quick_t}</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          <a
            href="https://wa.me/601172691788"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-5 rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white font-bold hover:scale-[1.02] active:scale-95 transition-[transform,box-shadow,opacity,width,background-color] shadow-lg shadow-green-900/30"
          >
            <MessageCircle size={24} strokeWidth={2.4} />
            <div className="text-left">
              <div className="text-base font-black">WhatsApp</div>
              <div className="text-xs text-white/85 mt-0.5">最快响应 · 5-10 分钟</div>
            </div>
          </a>
          <a
            href="mailto:support.vgo@gmail.com"
            className="flex items-center gap-3 p-5 rounded-2xl bg-gradient-to-br from-[#1B2A47] to-[#2A3F63] text-white font-bold hover:scale-[1.02] active:scale-95 transition-[transform,box-shadow,opacity,width,background-color] shadow-lg shadow-blue-900/30"
          >
            <Mail size={24} strokeWidth={2.4} />
            <div className="text-left">
              <div className="text-base font-black">Email</div>
              <div className="text-xs text-white/85 mt-0.5">24 小时内回复</div>
            </div>
          </a>
        </div>
      </div>

      {/* 分部门 */}
      <div className="not-prose mb-10">
        <h3 className="text-sm font-black text-white/70 uppercase tracking-widest mb-4">{c.dept_t}</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {c.depts.map((d) => (
            <div key={d.name} className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center shrink-0">
                  <d.Icon size={18} className="text-white" strokeWidth={2.4} />
                </div>
                <h4 className="font-black text-base text-white">{d.name}</h4>
              </div>
              <p className="text-xs text-white/50 mb-3 leading-relaxed">{d.desc}</p>
              <div className="space-y-1.5 text-xs">
                <p className="text-white/70 break-all">
                  <Mail size={11} className="inline mr-1 -mt-0.5" />
                  <a href={`mailto:${d.email}`} className="hover:text-[var(--vgo)] transition-colors">{d.email}</a>
                </p>
                <p className="text-white/70">
                  <MessageCircle size={11} className="inline mr-1 -mt-0.5" />
                  <a href="https://wa.me/601172691788" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--vgo)] transition-colors">{d.wa}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 服务时间 */}
      <div className="not-prose mb-10 p-6 rounded-2xl bg-white/5 border border-white/10">
        <div className="flex items-center gap-2 mb-2">
          <Clock size={16} className="text-[var(--vgo)]" />
          <h3 className="font-black text-base text-white">{c.hours_t}</h3>
        </div>
        <p className="text-sm text-white/70">{c.hours}</p>
        <p className="text-xs text-white/40 mt-3">{c.reply_note}</p>
      </div>

      {/* 快捷 FAQ */}
      <div className="not-prose mb-10">
        <h3 className="text-sm font-black text-white/70 uppercase tracking-widest mb-4">{c.faq_t}</h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {faqs.map((q) => (
            <Link
              key={q}
              href="/faq/"
              className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--vgo)]/40 hover:bg-white/8 transition-[transform,box-shadow,opacity,width,background-color] text-sm text-white/80"
            >
              <span className="truncate">{q}</span>
              <span className="text-[var(--vgo)] shrink-0 ml-2">→</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/faq/" className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--vgo)] hover:gap-3 transition-[transform,box-shadow,opacity,width,background-color]">
            {c.faq_more} →
          </Link>
        </div>
      </div>

      {/* 办公地址 */}
      <div className="not-prose mb-8 p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
        <MapPin size={20} className="text-[var(--vgo)] shrink-0" />
        <div>
          <div className="text-sm font-black text-white">Kota Kinabalu, Sabah, Malaysia</div>
          <div className="text-xs text-white/50 mt-0.5">Ventus Reflexology 运营</div>
        </div>
      </div>

      <div className="mt-8 not-prose">
        <CoverageSection />
      </div>
    </PageShell>
  );
}
```

## File: src/app/not-found.tsx
```typescript
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-5 relative overflow-hidden">
      <div className="absolute -top-32 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,102,0,.22), transparent 70%)" }} />
      <div className="absolute -bottom-32 -right-24 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(96,165,250,.18), transparent 70%)" }} />

      <div className="relative text-center max-w-lg">
        <div className="text-[100px] sm:text-[140px] font-black leading-none text-[#D95000]">404</div>
        <h1 className="text-2xl sm:text-3xl font-black mt-2">页面走丢了</h1>
        <p className="text-sm text-white/60 mt-3 leading-relaxed">你要找的页面不存在，或已经被移动。<br/>回到首页继续浏览吧。</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-black shadow-[0_10px_40px_-6px_rgba(255,150,0,0.3)] hover:scale-[1.03] active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">回到首页</Link>
          <Link href="/contact/" className="text-sm text-white/60 hover:text-white transition">联系我们 →</Link>
        </div>
      </div>
    </main>
  );
}
```

## File: src/components/SceneShowcase.tsx
```typescript
"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { AlertTriangle, Sparkles, Heart, Truck, ShoppingBag, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

const C = {
  zh: {
    label: "使用场景（示例）",
    title: "这些时候，你需要 VGO",
    scenes: [
      { tag: "紧急维修", title: "半夜水管爆了？", desc: "拍照下单，附近认证师傅就近匹配。24 小时接单，明码标价，不会坐地起价。", cta: "立即叫师傅", img: "/scenes/burst.jpg", icon: "urgent" },
      { tag: "家庭清洁", title: "周末想休息，不想打扫？", desc: "专业保洁团队上门，自带工具和清洁剂。深度清洁、开荒保洁、日常维护，一次搞定。", cta: "预约保洁", img: "/shared/s01.jpg", icon: "clean" },
      { tag: "按摩养生", title: "工作累了，想放松？", desc: "认证按摩师上门，中式推拿、泰式按摩、经络疏通。不用出门，在自己家就能享受。", cta: "预约按摩", img: "/shared/s09.jpg", icon: "massage" },
      { tag: "跑腿代购", title: "没时间买东西？", desc: "同城跑腿、代买代送、加急配送。买菜、取快递、送文件，交给靠谱的人。", cta: "找人跑腿", img: "/scenes/move.jpg", icon: "errand" },
      { tag: "二手交易", title: "家里闲置，扔了可惜？", desc: "拍照上传，本地买卖当面交易。不用运费，不用担心被骗。", cta: "去商城看看", img: "/shared/s06.jpg", icon: "market" },
    ],
  },
  en: {
    label: "Use Cases (Sample)",
    title: "When You'll Need VGO",
    scenes: [
      { tag: "Urgent Repair", title: "Pipe burst at midnight?", desc: "Snap a photo, order in one tap. Certified pros nearby, matched fast. 24/7 service, transparent pricing.", cta: "Get a Pro Now", img: "/scenes/burst.jpg", icon: "urgent" },
      { tag: "Home Cleaning", title: "Weekend off, no cleaning?", desc: "Professional cleaning team comes to you, tools and supplies included. Deep clean, move-in clean, or regular upkeep.", cta: "Book Cleaning", img: "/shared/s01.jpg", icon: "clean" },
      { tag: "Massage", title: "Tired after work?", desc: "Certified therapists come to you — Chinese tui na, Thai massage, meridian therapy. Relax in your own home.", cta: "Book Massage", img: "/shared/s09.jpg", icon: "massage" },
      { tag: "Errands", title: "No time to shop?", desc: "Same-city errands, buy & deliver, express pickup. Groceries, parcels, documents — handed to someone reliable.", cta: "Send Errand", img: "/scenes/move.jpg", icon: "errand" },
      { tag: "Marketplace", title: "Unused stuff at home?", desc: "Snap, upload, trade locally. No shipping, no scam risk. Meet up and deal face-to-face.", cta: "Browse Market", img: "/shared/s06.jpg", icon: "market" },
    ],
  },
  ms: {
    label: "Senario (Contoh)",
    title: "Bila Anda Perlukan VGO",
    scenes: [
      { tag: "Pembaikan Segera", title: "Paip pecah tengah malam?", desc: "Ambil gambar, tempah satu tap. Tukang bertauliah berdekatan. 24 jam, harga telus.", cta: "Panggil Tukang", img: "/scenes/burst.jpg", icon: "urgent" },
      { tag: "Pembersihan Rumah", title: "Hujung minggu nak rehat?", desc: "Pasukan cuci profesional datang ke rumah, bawa alat sendiri. Cuci mendalam atau penyelenggaraan biasa.", cta: "Tempah Pembersihan", img: "/shared/s01.jpg", icon: "clean" },
      { tag: "Urutan", title: "Penat lepas kerja?", desc: "Tukang urut bertauliah datang — tui na Cina, urutan Thai, terapi meridian. Rehat di rumah sendiri.", cta: "Tempah Urutan", img: "/shared/s09.jpg", icon: "massage" },
      { tag: "Penghantaran", title: "Tak ada masa nak beli?", desc: "Penghantaran same-city, beli & hantar, pickup ekspres. Barang dapur, parcel, dokumen — serah pada yang dipercayai.", cta: "Hantar Sekarang", img: "/scenes/move.jpg", icon: "errand" },
      { tag: "Pasar Terpakai", title: "Barang tak guna di rumah?", desc: "Ambil gambar, muat naik, jual beli tempatan. Tiada kos penghantaran, tiada risiko ditipu.", cta: "Layari Pasar", img: "/shared/s06.jpg", icon: "market" },
    ],
  },
} as const;

const ICONS: Record<string, any> = {
  urgent: AlertTriangle,
  clean: Sparkles,
  massage: Heart,
  errand: Truck,
  market: ShoppingBag,
};

export default function SceneShowcase() {
  const { lang } = useLang();
  const c = C[lang] ?? C.zh;

  return (
    <section className="relative bg-gray-950 text-white overflow-hidden">
      {/* 顶部标题区 */}
      <div className="relative py-20 sm:py-28 px-5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[var(--vgo)]/12 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-[var(--vgo)]/12 rounded-full blur-[140px]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative text-center max-w-3xl mx-auto"
        >
          <p className="text-[var(--vgo)] font-bold text-xs tracking-[0.3em] uppercase mb-4">{c.label}</p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
            {c.title}
          </h2>
        </motion.div>
      </div>

      {/* 场景叙事 - 全宽沉浸式 */}
      {c.scenes.map((s, i) => {
        const Icon = ICONS[s.icon];
        const reverse = i % 2 === 1;
        return (
          <motion.div
            key={s.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className={`grid md:grid-cols-12 items-stretch min-h-[70vh] ${reverse ? "md:[direction:rtl]" : ""}`}>
              {/* 图片：占 7 栏，全高 */}
              <div className={`relative md:col-span-7 overflow-hidden ${reverse ? "md:[direction:ltr]" : ""}`}>
                <motion.div
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.6, ease: [0.22, 0.7, 0.3, 1] }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${s.img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-gray-950/60" />
                {reverse && <div className="absolute inset-0 bg-gradient-to-l from-gray-950 via-gray-950/30 to-transparent hidden md:block" />}

                {/* 序号 - 大数字 */}
                <div className="absolute top-6 left-6 md:top-8 md:left-10 z-10">
                  <div className="text-6xl md:text-8xl font-black leading-none text-white/15 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* 标签 */}
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/12 backdrop-blur-xl border border-white/20 text-xs font-bold text-white">
                  <Icon size={14} strokeWidth={2.6} className="text-[var(--vgo)]" />
                  {s.tag}
                </div>
              </div>

              {/* 文字：占 5 栏，垂直居中 */}
              <div className={`relative md:col-span-5 flex items-center px-6 sm:px-10 py-14 md:py-0 bg-gray-950 ${reverse ? "md:[direction:ltr]" : ""}`}>
                <div className="max-w-md">
                  <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight mb-5"
                  >
                    {s.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="text-base text-white/60 leading-relaxed mb-8"
                  >
                    {s.desc}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                  >
                    <Link
                      href="/how-it-works/customer"
                      className="group inline-flex items-center gap-2 text-base font-bold text-white border-b-2 border-[var(--vgo)] pb-1 hover:gap-3 transition-[transform,box-shadow,opacity,width,background-color]"
                    >
                      {s.cta}
                      <ArrowRight size={18} className="text-[var(--vgo)]" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* 分隔线 */}
            {i < c.scenes.length - 1 && (
              <div className="hidden md:block h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            )}
          </motion.div>
        );
      })}

      {/* 底部留白 */}
      <div className="h-16" />
    </section>
  );
}
```

## File: package.json
```json
{
  "name": "vgo-website",
  "version": "0.2.0",
  "private": true,
  "license": "Proprietary",
  "scripts": {
    "dev": "NODE_OPTIONS='--max-old-space-size=1024' next dev --webpack -p 5000",
    "build": "NODE_OPTIONS='--max-old-space-size=4096' next build --webpack",
    "start": "NODE_OPTIONS='--max-old-space-size=1024' next start -p 5000",
    "lint": "eslint src"
  },
  "dependencies": {
    "@vercel/analytics": "^2.0.1",
    "@vercel/speed-insights": "^2.0.0",
    "lucide-react": "^1.48.0",
    "motion": "^12.23.12",
    "next": "16.3.6",
    "react": "19.2.8",
    "react-dom": "19.2.8"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.3.6",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

## File: src/app/about/page.tsx
```typescript
"use client";

import { motion } from "motion/react";
import { Target, Heart, ShieldCheck, Sparkles, Users, MapPin, TrendingUp, Award, Clock, Store, Wrench, Home } from "lucide-react";
import { useLang } from "@/lib/i18n";
import PageShell from "@/components/PageShell";

const C = {
  zh: {
    label: "关于我们", title: "我们是谁",
    intro: "V'GO（V Go On）是马来西亚上门服务平台。我们把有需要的家庭和认证师傅连在一起，让\"找服务\"这件事变得简单、透明、可靠。",
    mission_t: "我们的使命",
    mission: "让每个家庭都能轻松找到靠谱的师傅，让每个有手艺的人都能凭本事吃饭。",
    story_t: "我们的故事",
    story: "V'GO 从沙巴起步，看向整个马来西亚。我们看见身边太多人：想修水管找不到人、价格被坑、约了师傅不来；另一头，手艺人等熟人介绍、生意不稳定。V'GO 要做的，就是把这两头接通——用最简单的手机操作，让服务上门，让手艺有舞台。",
    values_t: "我们的价值观",
    values: [
      { Icon: ShieldCheck, t: "认证优先", d: "每个师傅都经过身份验证和技能审核，你不用担心来的是谁。" },
      { Icon: Sparkles,    t: "价格透明", d: "下单前看得到价格区间，师傅上门确认后才开工，没有隐藏费用。" },
      { Icon: Clock,       t: "准时上门", d: "约定时间准时到，迟到提前告知，全程可追踪。" },
      { Icon: Heart,       t: "用户第一", d: "每一次服务后的评价，都会影响师傅的派单优先级。" },
      { Icon: Award,       t: "本地团队", d: "马来西亚团队，懂本地需求，客服说中文/英文/马来文。" },
      { Icon: TrendingUp,  t: "共同成长", d: "师傅接单越多、评价越好，越优先派单，收入越高。" },
    ],
    stats_t: "我们的目标",
    stats: [
      { n: "6 大", l: "服务类目" },
      { n: "3 语", l: "中英马支持" },
      { n: "亚庇", l: "首发城市" },
      { n: "全马", l: "覆盖目标" },
    ],
    timeline_t: "我们的历程",
    timeline: [
      { d: "2024", t: "想法萌生", ds: "在沙巴看到找师傅难、手艺人生意不稳的问题" },
      { d: "2025", t: "平台研发", ds: "组建团队，开发 V'GO 平台核心功能" },
      { d: "2026 Q1", t: "亚庇首发", ds: "首批认证师傅和商家入驻，平台试运营" },
      { d: "2026 Q2", t: "全马扩展", ds: "逐步扩展至沙巴其他城市及西马主要城市" },
    ],
    roles_t: "平台服务三类人群",
    roles: [
      { Icon: Home,   t: "家庭客户", d: "找维修、清洁、按摩、跑腿，一站搞定" },
      { Icon: Store,  t: "本地商家", d: "把生意搬到线上，触达附近客户" },
      { Icon: Wrench, t: "手艺人",   d: "就近接单，按单结算，自己排时间" },
    ],
    region_t: "服务范围",
    region: "目前覆盖马来西亚沙巴州亚庇及周边地区，持续扩展中。沙巴是我们起点，全马是我们的目标。",
    contact_t: "想了解更多？",
    contact_d: "无论你是客户、商家、师傅还是合作伙伴，欢迎联系我们。",
  },
  en: {
    label: "About Us", title: "Who We Are",
    intro: "V'GO (V Go On) is a Malaysia home-service platform. We connect families in need with certified pros, making \"finding a service\" simple, transparent, and reliable.",
    mission_t: "Our Mission",
    mission: "Make it easy for every family to find reliable help — and for every skilled worker to earn a living through their craft.",
    story_t: "Our Story",
    story: "V'GO started in Sabah, with eyes on all of Malaysia. We saw too many people: unable to find a plumber, overcharged, ghosted after booking. And on the other side, skilled workers waiting on referrals with unstable income. V'GO connects these two — with a simple tap on your phone, service comes to your door, and your craft finds its stage.",
    values_t: "Our Values",
    values: [
      { Icon: ShieldCheck, t: "Certified First", d: "Every pro passes ID verification and skill review. You know who's coming." },
      { Icon: Sparkles,    t: "Transparent Pricing", d: "See the price range before booking. Work starts only after on-site confirmation." },
      { Icon: Clock,       t: "On-Time Arrival", d: "Show up on time. Delays notified in advance. Fully trackable." },
      { Icon: Heart,       t: "Customer First", d: "Every review affects a pro's dispatch priority." },
      { Icon: Award,       t: "Local Team", d: "Malaysian team, local needs, tri-lingual support (CN/EN/MS)." },
      { Icon: TrendingUp,  t: "Grow Together", d: "More jobs, better ratings, higher priority and income for pros." },
    ],
    stats_t: "Our Goals",
    stats: [
      { n: "6", l: "Service Categories" },
      { n: "3", l: "Languages (CN/EN/MS)" },
      { n: "KK", l: "Launch City" },
      { n: "MY", l: "Coverage Target" },
    ],
    timeline_t: "Our Journey",
    timeline: [
      { d: "2024", t: "The Idea", ds: "Saw the pain points in Sabah — hard to find pros, unstable income for skilled workers" },
      { d: "2025", t: "Platform Dev", ds: "Built the V'GO platform core features" },
      { d: "2026 Q1", t: "KK Launch", ds: "First batch of certified pros and merchants onboarded, pilot launch" },
      { d: "2026 Q2", t: "Nationwide", ds: "Expanding to other Sabah cities and Peninsular Malaysia" },
    ],
    roles_t: "Three Audiences We Serve",
    roles: [
      { Icon: Home,   t: "Families", d: "Repair, cleaning, massage, errands — all in one place" },
      { Icon: Store,  t: "Local Merchants", d: "Move your business online, reach nearby customers" },
      { Icon: Wrench, t: "Skilled Pros", d: "Take nearby jobs, get paid per order, set your own hours" },
    ],
    region_t: "Coverage",
    region: "Currently covering Kota Kinabalu and surrounding areas in Sabah. Sabah is where we started — Malaysia is where we're headed.",
    contact_t: "Want to know more?",
    contact_d: "Whether you're a customer, merchant, pro, or partner — we'd love to hear from you.",
  },
  ms: {
    label: "Tentang Kami", title: "Siapa Kami",
    intro: "V'GO (V Go On) ialah platform perkhidmatan ke rumah Malaysia. Kami menghubungkan keluarga yang memerlukan dengan tukang bertauliah, menjadikan \"cari servis\" mudah, telus dan boleh dipercayai.",
    mission_t: "Misi Kami",
    mission: "Memudahkan setiap keluarga mencari bantuan yang boleh dipercayai — dan setiap tukang mahir mencari rezeki melalui kemahiran mereka.",
    story_t: "Kisah Kami",
    story: "V'GO bermula di Sabah, dengan pandangan ke seluruh Malaysia. Kami nampak terlalu ramai orang: tak jumpa tukang paip, dikenakan caj berlebihan, tukang tak datang selepas tempahan. Di sisi lain, tukang mahir tunggu rujukan dengan pendapatan tak stabil. V'GO menghubungkan kedua-duanya — dengan satu ketikan di telefon anda, servis datang ke pintu, dan kemahiran anda menemui pentasnya.",
    values_t: "Nilai Kami",
    values: [
      { Icon: ShieldCheck, t: "Bertauliah Dahulu", d: "Setiap tukang lulus pengesahan ID dan semakan kemahiran." },
      { Icon: Sparkles,    t: "Harga Telus", d: "Lihat julat harga sebelum tempah. Kerja mula selepas pengesahan di lokasi." },
      { Icon: Clock,       t: "Tiba Tepat Masa", d: "Tiba tepat masa. Kelewatan dimaklumkan awal. Boleh dijejaki." },
      { Icon: Heart,       t: "Pelanggan Dahulu", d: "Setiap ulasan mempengaruhi keutamaan penghantaran tukang." },
      { Icon: Award,       t: "Pasukan Tempatan", d: "Pasukan Malaysia, keperluan tempatan, sokongan tiga bahasa." },
      { Icon: TrendingUp,  t: "Berkembang Bersama", d: "Lebih kerja, penilaian lebih baik, keutamaan dan pendapatan lebih tinggi." },
    ],
    stats_t: "Sasaran Kami",
    stats: [
      { n: "6", l: "Kategori Servis" },
      { n: "3", l: "Bahasa (CN/EN/MS)" },
      { n: "KK", l: "Bandar Pelancaran" },
      { n: "MY", l: "Sasaran Liputan" },
    ],
    timeline_t: "Perjalanan Kami",
    timeline: [
      { d: "2024", t: "Idea Timbul", ds: "Melihat masalah di Sabah — sukar cari tukang, pendapatan tak stabil" },
      { d: "2025", t: "Pembangunan", ds: "Bina ciri teras platform V'GO" },
      { d: "2026 Q1", t: "Pelancaran KK", ds: "Kelompok pertama tukang dan peniaga bertauliah, pelancaran perintis" },
      { d: "2026 Q2", t: "Seluruh Negara", ds: "Berkembang ke bandar Sabah lain dan Semenanjung" },
    ],
    roles_t: "Tiga Kumpulan Yang Kami Layani",
    roles: [
      { Icon: Home,   t: "Keluarga",  d: "Pembaikan, pembersihan, urutan, penghantaran — semua di satu tempat" },
      { Icon: Store,  t: "Peniaga Tempatan", d: "Pindahkan bisnes ke dalam talian, capai pelanggan berhampiran" },
      { Icon: Wrench, t: "Tukang Mahir", d: "Ambil kerja berhampiran, bayar ikut pesanan, atur masa sendiri" },
    ],
    region_t: "Liputan",
    region: "Kini meliputi Kota Kinabalu dan kawasan sekitar Sabah. Sabah tempat kami bermula — Malaysia destinasi kami.",
    contact_t: "Mahu tahu lebih lanjut?",
    contact_d: "Sama ada anda pelanggan, peniaga, tukang, atau rakan kongsi — kami ingin dengar dari anda.",
  },
} as const;

export default function AboutPage() {
  const { lang } = useLang();
  const c = C[lang] ?? C.zh;

  return (
    <PageShell label={c.label} title={c.title}>
      <p className="text-white/75 leading-relaxed mb-12 text-base sm:text-lg">{c.intro}</p>

      {/* 使命 */}
      <div className="not-prose mb-12 p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-600/5 border border-orange-500/25">
        <div className="flex items-center gap-2 mb-3">
          <Target size={20} className="text-[var(--vgo)]" />
          <h3 className="font-black text-lg text-white">{c.mission_t}</h3>
        </div>
        <p className="text-white/80 leading-relaxed">{c.mission}</p>
      </div>

      {/* 故事 */}
      <div className="not-prose mb-12">
        <h3 className="font-black text-lg text-white mb-4">{c.story_t}</h3>
        <p className="text-white/70 leading-[1.9] text-base">{c.story}</p>
      </div>

      {/* 数据 */}
      <div className="not-prose mb-12">
        <h3 className="font-black text-lg text-white mb-6">{c.stats_t}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {c.stats.map((s) => (
            <div key={s.l} className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#D95000] leading-tight">{s.n}</div>
              <div className="text-xs text-white/60 mt-1.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 价值观 */}
      <div className="not-prose mb-12">
        <h3 className="font-black text-lg text-white mb-6">{c.values_t}</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {c.values.map((v, i) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center shrink-0">
                <v.Icon size={18} color="#fff" strokeWidth={2.4} />
              </div>
              <div>
                <div className="font-black text-white text-sm mb-1">{v.t}</div>
                <div className="text-xs text-white/55 leading-relaxed">{v.d}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 三类人群 */}
      <div className="not-prose mb-12">
        <h3 className="font-black text-lg text-white mb-6">{c.roles_t}</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {c.roles.map((r, i) => (
            <motion.div
              key={r.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center mb-3">
                <r.Icon size={22} color="#fff" strokeWidth={2.2} />
              </div>
              <div className="font-black text-white text-sm mb-2">{r.t}</div>
              <div className="text-xs text-white/55 leading-relaxed">{r.d}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 历程 */}
      <div className="not-prose mb-12">
        <h3 className="font-black text-lg text-white mb-6">{c.timeline_t}</h3>
        <div className="space-y-3">
          {c.timeline.map((item, i) => (
            <motion.div
              key={item.d}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5 items-start p-5 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="shrink-0 w-20 text-center">
                <div className="text-sm font-black text-[var(--vgo)]">{item.d}</div>
              </div>
              <div className="flex-1 min-w-0 border-l border-white/10 pl-5">
                <div className="font-black text-white text-sm mb-1">{item.t}</div>
                <div className="text-xs text-white/60 leading-relaxed">{item.ds}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 服务范围 */}
      <div className="not-prose mb-12 p-6 rounded-2xl bg-white/5 border border-white/10">
        <div className="flex items-center gap-2 mb-2">
          <MapPin size={18} className="text-[var(--vgo)]" />
          <h3 className="font-black text-base text-white">{c.region_t}</h3>
        </div>
        <p className="text-sm text-white/70 leading-relaxed">{c.region}</p>
      </div>

      {/* 联系 */}
      <div className="not-prose mt-12 p-8 rounded-3xl bg-gradient-to-br from-[#FF8A1F] to-[#D95000] text-center relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,.25), transparent 70%)" }} />
        <div className="relative">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-3">{c.contact_t}</h3>
          <p className="text-sm text-white/85 mb-6 max-w-md mx-auto">{c.contact_d}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://wa.me/601172691788" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#D95000] font-black text-sm shadow-2xl hover:scale-105 active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">
              WhatsApp 联系
            </a>
            <a href="/contact/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/15 backdrop-blur border border-white/30 text-white font-bold text-sm hover:bg-white/25 transition-[transform,box-shadow,opacity,width,background-color]">
              更多联系方式 →
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
```

## File: src/app/terms/page.tsx
```typescript
"use client";

import { useLang } from "@/lib/i18n";
import LegalShell from "@/components/LegalShell";

const C = {
  en: {
    label: "Terms of Service", title: "Terms of Service",
    updated: "Last updated: January 2026",
    lang_note: "These terms are presented in English and Bahasa Malaysia. Both versions are authoritative. In the event of any conflict, the Bahasa Malaysia version shall prevail for matters subject to CPETTR 2024 statutory disclosure (service descriptions, fees, refund policy, dispute resolution, seller information); the English version shall prevail for all other matters.",
    intro: "Welcome to VGO. By using this platform, you agree to the following terms. Please read carefully.",
    s1_t: "1. Service Description",
    s1: "VGO is an information platform connecting users and certified pros. We do not directly provide services; we match both sides. All services are independently provided by listed pros or merchants.",
    s2_t: "2. User Responsibilities",
    s2: "You must provide true and accurate registration information, pay on time, respect pros, and comply with Malaysian law. False orders, harassment, and fraud are prohibited.",
    s3_t: "3. Pro / Merchant Responsibilities",
    s3: "Must provide true credentials, fulfill on time, price transparently, respect customers, and comply with laws. Violations may result in suspension or termination.",
    s4_t: "4. Payments",
    s4: "All prices are in Malaysian Ringgit (RM). Payments are processed via third-party providers. We are not liable for payment platform delays.",
    s5_t: "5. Cancellation & Refunds",
    s5: "If the pro fails to arrive on time or the service is incomplete, users may request a full refund. Cancellation after service begins is settled by completed portion. Refunds processed within 1-3 business days.",
    s6_t: "6. Disclaimer",
    s6: "VGO is not directly liable for the independent acts of pros. However, we actively help resolve disputes. Use of the platform is at the user's own risk.",
    s7_t: "7. Dispute Resolution",
    s7: "Any dispute should first be resolved through platform support. If unresolved, Malaysian law applies, submitted to the competent courts of Malaysia.",
    s8_t: "8. Changes to Terms",
    s8: "We reserve the right to modify these terms. Changes will be posted on this page. Continued use means acceptance of the new terms.",
    s9_t: "9. Contact Us",
    s9: "For any terms-related questions, email us at:",
  },
  ms: {
    label: "Terma Perkhidmatan", title: "Terma Perkhidmatan",
    updated: "Kemas kini terakhir: Januari 2026",
    lang_note: "Terma ini disediakan dalam Bahasa Inggeris dan Bahasa Malaysia. Kedua-dua versi adalah berwibawa. Sekiranya berlaku percanggahan, versi Bahasa Malaysia akan diguna pakai bagi perkara yang tertakluk kepada pendedahan statutori CPETTR 2024 (penerangan perkhidmatan, fi, dasar bayaran balik, penyelesaian pertikaian, maklumat penjual); versi Bahasa Inggeris akan diguna pakai bagi semua perkara lain.",
    intro: "Selamat datang ke VGO. Dengan menggunakan platform ini, anda bersetuju dengan terma berikut. Sila baca dengan teliti.",
    s1_t: "1. Penerangan Perkhidmatan",
    s1: "VGO ialah platform maklumat yang menghubungkan pengguna dengan tukang bertauliah. Kami tidak menyediakan perkhidmatan secara langsung; kami memadankan kedua-dua pihak.",
    s2_t: "2. Tanggungjawab Pengguna",
    s2: "Anda perlu memberi maklumat pendaftaran yang benar, membayar tepat masa, menghormati tukang, dan mematuhi undang-undang Malaysia. Tempahan palsu, gangguan, dan penipuan adalah dilarang.",
    s3_t: "3. Tanggungjawab Tukang / Peniaga",
    s3: "Perlu memberi kelayakan yang benar, memenuhi tepat masa, harga telus, menghormati pelanggan, dan mematuhi undang-undang. Pelanggaran boleh menyebabkan penggantungan akaun.",
    s4_t: "4. Pembayaran",
    s4: "Semua harga dalam Ringgit Malaysia (RM). Pembayaran diproses melalui pihak ketiga. Kami tidak bertanggungjawab atas kelewatan platform pembayaran.",
    s5_t: "5. Pembatalan & Bayaran Balik",
    s5: "Jika tukang tidak datang tepat masa atau servis tidak siap, pengguna boleh meminta bayaran balik penuh. Pembatalan selepas servis bermula diselesaikan ikut bahagian yang siap.",
    s6_t: "6. Penafian",
    s6: "VGO tidak bertanggungjawab secara langsung atas tindakan bebas tukang. Namun, kami aktif membantu menyelesaikan pertikaian. Penggunaan platform adalah atas risiko pengguna sendiri.",
    s7_t: "7. Penyelesaian Pertikaian",
    s7: "Sebarang pertikaian perlu diselesaikan melalui sokongan platform terlebih dahulu. Jika tidak selesai, undang-undang Malaysia terpakai, dikemukakan kepada mahkamah Malaysia.",
    s8_t: "8. Perubahan Terma",
    s8: "Kami berhak mengubah terma ini. Perubahan akan dimaklumkan di halaman ini. Penggunaan berterusan bermakna penerimaan terma baharu.",
    s9_t: "9. Hubungi Kami",
    s9: "Untuk sebarang pertanyaan berkaitan terma, e-mel kami di:",
  },
} as const;

export default function TermsPage() {
  const { lang } = useLang();
  const c = (C as any)[lang] ?? C.en;
  const SECTIONS = [
    { t: c.s1_t, d: c.s1 }, { t: c.s2_t, d: c.s2 }, { t: c.s3_t, d: c.s3 }, { t: c.s4_t, d: c.s4 },
    { t: c.s5_t, d: c.s5 }, { t: c.s6_t, d: c.s6 }, { t: c.s7_t, d: c.s7 }, { t: c.s8_t, d: c.s8 },
    { t: c.s10_t, d: c.s10 },
  ];
  return (
      <LegalShell label={c.label} title={c.title} version={c.updated}>
        <div className="note-box">{c.lang_note}</div>
        <p>{c.intro}</p>
        {SECTIONS.map((s) => (
          <section key={s.t}>
            <h2>{s.t}</h2>
            <p className="sub">{s.d}</p>
          </section>
        ))}
      </LegalShell>
  );
}
```

## File: src/components/HowItWorks.tsx
```typescript
"use client";
import { motion } from "motion/react";
import { UserPlus, Smartphone, MousePointerClick, CheckCircle2 } from "lucide-react";
import { useLang } from "@/lib/i18n";

const C = {
  zh: {
    label: "怎么用", title: "4 步搞定",
    sub: "比你想象的更简单",
    steps: [
      { num: "01", Icon: UserPlus, title: "注册账号", time: "30 秒",
        desc: "手机号一键注册，不用填一堆资料",
        points: ["手机号即可", "免费注册", "秒级验证"],
        img: "/shared/s06.jpg" },
      { num: "02", Icon: Smartphone, title: "下载 App", time: "1 分钟",
        desc: "从浏览器直接装，不用去应用商店",
        points: ["无需应用商店", "装到手机主屏", "像 App 一样用"],
        img: "/shared/s07.jpg" },
      { num: "03", Icon: MousePointerClick, title: "选择服务", time: "1 分钟",
        desc: "6 大服务，先看价格再下单",
        points: ["价格透明", "一键下单", "实时派单"],
        img: "/shared/s01.jpg" },
      { num: "04", Icon: CheckCircle2, title: "师傅上门", time: "准时到",
        desc: "认证师傅上门，全程可追踪",
        points: ["认证师傅", "准时上门", "服务保障"],
        img: "/shared/s02.jpg" },
    ],
  },
  en: {
    label: "How It Works", title: "4 Simple Steps",
    sub: "Simpler than you'd think",
    steps: [
      { num: "01", Icon: UserPlus, title: "Sign Up", time: "30 sec",
        desc: "One phone number, no long forms",
        points: ["Phone number", "Free signup", "Instant verify"],
        img: "/shared/s06.jpg" },
      { num: "02", Icon: Smartphone, title: "Download App", time: "1 min",
        desc: "Install from browser, no app store needed",
        points: ["No app store", "Add to home screen", "Works like an app"],
        img: "/shared/s07.jpg" },
      { num: "03", Icon: MousePointerClick, title: "Pick a Service", time: "1 min",
        desc: "6 core services, see price first",
        points: ["Transparent pricing", "One-tap booking", "Real-time dispatch"],
        img: "/shared/s01.jpg" },
      { num: "04", Icon: CheckCircle2, title: "Pro Arrives", time: "On time",
        desc: "Certified pro arrives, fully trackable",
        points: ["Certified pros", "On-time arrival", "Service guarantee"],
        img: "/shared/s02.jpg" },
    ],
  },
  ms: {
    label: "Cara Guna", title: "4 Langkah Mudah",
    sub: "Lebih mudah dari yang disangka",
    steps: [
      { num: "01", Icon: UserPlus, title: "Daftar Akaun", time: "30 saat",
        desc: "Satu nombor telefon, tak perlu isi borang panjang",
        points: ["Nombor telefon", "Daftar percuma", "Sah segera"],
        img: "/shared/s06.jpg" },
      { num: "02", Icon: Smartphone, title: "Muat Turun App", time: "1 minit",
        desc: "Pasang dari browser, tak perlu app store",
        points: ["Tanpa app store", "Pasang di skrin utama", "Guna macam app"],
        img: "/shared/s07.jpg" },
      { num: "03", Icon: MousePointerClick, title: "Pilih Servis", time: "1 minit",
        desc: "6 servis utama, tengok harga dulu",
        points: ["Harga telus", "Tempah satu tap", "Hantar masa nyata"],
        img: "/shared/s01.jpg" },
      { num: "04", Icon: CheckCircle2, title: "Tukang Sampai", time: "Tepat masa",
        desc: "Tukang bertauliah sampai, boleh track penuh",
        points: ["Tukang bertauliah", "Tepat masa", "Jaminan servis"],
        img: "/shared/s02.jpg" },
    ],
  },
} as const;

export default function HowItWorks() {
  const { lang } = useLang();
  const c = C[lang] ?? C.zh;

  return (
    <section className="relative bg-gray-950 py-20 sm:py-28 px-5 overflow-hidden noise">
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora absolute top-1/4 -left-24 w-96 h-96 bg-[var(--vgo)]/40 rounded-full blur-[140px]" />
        <div className="aurora-2 absolute bottom-0 -right-24 w-96 h-96 bg-[var(--vgo)]/30 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[var(--vgo)] font-bold text-sm tracking-widest uppercase mb-3">{c.label}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {c.title}
          </h2>
          <p className="mt-4 text-white/50 text-sm sm:text-base max-w-2xl mx-auto">
            {c.sub}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {c.steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, type: "spring", stiffness: 70 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[var(--vgo)]/40 transition-[transform,box-shadow,opacity,width,background-color] duration-300">
                <div className="relative h-32 overflow-hidden">
                  <img loading="lazy"                     src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-[transform,box-shadow,opacity,width,background-color] duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
                  <div className="absolute top-3 right-4 text-4xl font-black text-white/40 select-none">
                    {s.num}
                  </div>
                  <div className="absolute top-3 left-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--vgo)] text-white text-[10px] font-bold">
                    {s.time}
                  </div>
                </div>

                <div className="relative p-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--vgo)] to-[var(--vgo-dark)] flex items-center justify-center mb-4 -mt-10 relative shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                    <s.Icon size={22} strokeWidth={2.2} className="text-white" />
                  </div>
                  <h3 className="text-base font-black text-white mb-1.5">{s.title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed mb-3">{s.desc}</p>
                  <ul className="space-y-1.5 pt-3 border-t border-white/10">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-[11px] text-white/65">
                        <span className="w-1 h-1 rounded-full bg-[var(--vgo)]" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {i < c.steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 text-white/20 text-xl z-10">→</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## File: src/components/Merchant.tsx
```typescript
"use client";
import { motion } from "motion/react";
import { Rocket, TrendingUp, Bell, Wallet, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function Merchant() {
  const { t } = useLang();

  const BENEFITS = [
    { Icon: Rocket,     title: t("merchant_b1"), desc: t("merchant_b1_desc") },
    { Icon: TrendingUp, title: t("merchant_b2"), desc: t("merchant_b2_desc") },
    { Icon: Bell,       title: t("merchant_b3"), desc: t("merchant_b3_desc") },
    { Icon: Wallet,     title: t("merchant_b4"), desc: t("merchant_b4_desc") },
  ];

  const FLOW = [
    { step: "01", title: t("merchant_f1"), desc: t("merchant_f1_desc") },
    { step: "02", title: t("merchant_f2"), desc: t("merchant_f2_desc") },
    { step: "03", title: t("merchant_f3"), desc: t("merchant_f3_desc") },
  ];

  return (
    <section id="merchant" className="relative bg-gray-50 py-20 sm:py-28 px-5 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--vgo)]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[var(--vgo)] font-bold text-sm tracking-widest uppercase mb-3">{t("merchant_label")}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              {t("merchant_title1")}
              <br />
              {t("merchant_title2")}
            </h2>
            <p className="mt-5 text-gray-600 text-base leading-relaxed">{t("merchant_desc")}</p>

            <div className="mt-7 rounded-3xl overflow-hidden shadow-xl">
              <img loading="lazy"                 src="/shared/s06.jpg"
                alt="Merchant"
                className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="mt-7 grid grid-cols-2 gap-4">
              {BENEFITS.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-4 rounded-2xl bg-white border border-gray-100 hover:border-[var(--vgo)]/30 hover:shadow-md transition-[transform,box-shadow,opacity,width,background-color]"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-3">
                    <b.Icon size={20} strokeWidth={2.2} className="text-[var(--vgo)]" />
                  </div>
                  <div className="font-bold text-gray-900 text-sm mb-1">{b.title}</div>
                  <div className="text-xs text-gray-500">{b.desc}</div>
                </motion.div>
              ))}
            </div>

            <a
              href="/merchant"
              className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-[var(--vgo)] text-white font-bold shadow-lg shadow-orange-500/30 hover:bg-[var(--vgo-dark)] hover:scale-105 transition-[transform,box-shadow,opacity,width,background-color] pulse-glow"
            >
              {t("merchant_cta")}
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative p-8 rounded-[32px] bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden noise">
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-[var(--vgo)]/30 rounded-full blur-[100px]" />

              <div className="relative">
                <p className="text-xs font-bold text-[var(--vgo)] tracking-widest uppercase mb-2">
                  {t("merchant_flow_label")}
                </p>
                <h3 className="text-2xl font-black mb-8">{t("merchant_flow_title")}</h3>

                <div className="space-y-6">
                  {FLOW.map((f) => (
                    <div key={f.step} className="flex gap-4 items-start">
                      <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur border border-white/15 flex items-center justify-center font-black text-[var(--vgo)]">
                        {f.step}
                      </div>
                      <div className="pt-1">
                        <div className="font-bold text-white mb-1">{f.title}</div>
                        <div className="text-sm text-white/60">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-sm">
                  <span className="text-white/60">{t("merchant_audit")}</span>
                  <span className="font-bold text-[var(--vgo)]">{t("merchant_audit_time")}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

## File: src/components/MerchantPage.tsx
```typescript
"use client";
import { motion } from "motion/react";
import {
  Rocket, TrendingUp, Bell, Wallet, ArrowRight, CheckCircle2,
  LayoutGrid, MessageSquare, ShieldCheck, BarChart3, GraduationCap,
  Megaphone, Headphones, Quote, BadgeCheck,
} from "lucide-react";
import { useLang } from "@/lib/i18n";

const C = {
  zh: {
    tag: "商家合作",
    hero_t: "让全马客户，找到你的店",
    hero_s: "免费入驻 VGO 平台，获得本地流量扶持、订单直推和透明费率。从线下到线上，一步到位。",
    hero_cta: "立即申请入驻",
    hero_faq: "查看常见问题 →",
    benefits_t: "为什么选择 VGO",
    benefits: [
      { Icon: Rocket,       title: "免费入驻",     desc: "零门槛开店，无需技术团队" },
      { Icon: TrendingUp,   title: "本地流量扶持", desc: "首页推荐位，曝光给附近客户" },
      { Icon: Bell,         title: "订单直接推送", desc: "新订单即时通知，不错过任何生意" },
      { Icon: Wallet,       title: "透明费率",     desc: "无隐藏收费，合作清清楚楚" },
      { Icon: LayoutGrid,   title: "免费店铺页",   desc: "一键上架服务，管理菜单和排班" },
      { Icon: MessageSquare,title: "专属客服支持", desc: "遇到问题随时联系，协助处理" },
    ],
    stats: [
      { n: "首批", l: "邀请制" },
      { n: "亚庇", l: "首发城市" },
      { n: "3 天", l: "上线时间" },
      { n: "0 元", l: "入驻费用" },
    ],
    earnings_t: "收益参考",
    earnings_sub: "以下为参考区间，实际收入取决于类目、时段、服务水平",
    earnings: [
      { n: "5-15 单",    l: "日均订单", sub: "视类目与旺季" },
      { n: "RM 80-350",  l: "客单价",   sub: "视服务类型" },
      { n: "RM 12K-52K", l: "月毛收入", sub: "参考区间，非承诺" },
    ],
    support_t: "平台支持",
    support: [
      { Icon: GraduationCap, title: "上手培训", desc: "提供入驻指引、接单流程、服务规范" },
      { Icon: BarChart3,     title: "经营看板", desc: "实时查看订单、收入、客户评价" },
      { Icon: Megaphone,     title: "营销活动", desc: "平台活动优先推荐优质商家" },
      { Icon: Headphones,    title: "客服支持", desc: "遇到问题随时联系，协助处理" },
      { Icon: MessageSquare, title: "评价管理", desc: "回复客户评价，建立店铺信用" },
      { Icon: ShieldCheck,   title: "纠纷调解", desc: "订单争议由平台介入协调" },
    ],
    stories_t: "商家故事",
    stories_sub: "来自亚庇地区的首批合作商家（示例）",
    stories: [
      { name: "亚庇 · 五金店",   tag: "五金水暖", quote: "老店开了 10 年，之前只靠熟客。上线 VGO 后，附近客户在手机上就能看到我们，订单主动找上门。" },
      { name: "亚庇 · 冷气维修", tag: "家电维修", quote: "以前靠 Facebook 接单，客户讨价还价很累。现在平台统一定价，报价透明，双方都省事。" },
      { name: "亚庇 · 美容院",   tag: "美容养生", quote: "年轻客户都习惯用 App 下单。上了 VGO 之后，曝光多了不少，预约也更稳定。" },
    ],
    flow_t: "入驻流程",
    steps: [
      { n: "01", title: "提交申请", desc: "填写基本信息，上传 SSM 和银行资料", time: "5 分钟" },
      { n: "02", title: "平台审核", desc: "VGO 团队核验资料，1-3 个工作日", time: "1-3 天" },
      { n: "03", title: "上架服务", desc: "配置服务、价格、排班，生成店铺页", time: "30 分钟" },
      { n: "04", title: "开始接单", desc: "客户下单，App 即时通知", time: "立即" },
      { n: "05", title: "自动结算", desc: "订单完成，按平台规则结算入账", time: "按周期" },
    ],
    docs_t: "入驻所需文件",
    docs: [
      "SSM 营业注册文件（Form D / 9 / 24 / 49）",
      "签署协议人的身份证（IC）正反面",
      "银行账户信息（开户行 + 户名）",
      "品牌 Logo 和门店照片",
      "服务目录和价格表",
      "营业执照（如有）",
      "Halal 认证（如有）",
      "SST 认证（如有）",
    ],
    faq_t: "常见问题",
    faqs: [
      ["入驻需要什么条件？", "需要持有马来西亚 SSM 注册的合法商业实体。接受个人企业（Sole Proprietor）和私人有限公司（Sdn Bhd）。注册文件上的董事或持有人须作为协议签署人。"],
      ["平台收取多少费用？", "VGO 对标准服务订单收取一定比例的平台服务费，具体费率以双方签署的协议为准。所有费用在入驻前会明确告知，没有隐藏收费。"],
      ["结算周期是多久？", "订单完成后，款项按照平台约定的结算周期入账，通常为每周或每两周结算一次。具体以协议条款为准。"],
      ["需要自己配送吗？", "视服务类型而定。对于上门服务类目，商家可自行安排服务人员；对于商品配送类目，VGO 平台提供配送支持（如有）。具体以入驻时选择的合作模式为准。"],
      ["可以只上架部分服务吗？", "可以。你可以选择上架全部服务，也可以只上架部分。入驻后随时可以在商家后台调整服务目录。"],
      ["审核不通过怎么办？", "如果审核不通过，VGO 会告知具体原因。你可以根据反馈补充资料后重新提交。"],
      ["可以随时退出吗？", "可以。VGO 不强制绑定，你可以根据协议条款提前通知退出。退出后未结算的订单款项仍会按约定结算。"],
      ["没有实体店可以入驻吗？", "部分服务类目支持无实体店的个人服务者入驻。具体取决于你提供的服务类型，欢迎联系客服咨询。"],
    ],
    cta_t: "准备好加入了吗？",
    cta_s: "填写申请，VGO 团队会在 1-3 个工作日内联系你。",
    cta_btn: "提交入驻申请",
    cta_note: "或 WhatsApp: +60 11-7269 1788",
  },
  en: {
    tag: "Merchant Partnership",
    hero_t: "Get Found by Customers Nationwide",
    hero_s: "Join V'GO for free and get local traffic support, direct order dispatch, and transparent fees. Go online in one step.",
    hero_cta: "Apply to Join",
    hero_faq: "View FAQ →",
    benefits_t: "Why Choose V'GO",
    benefits: [
      { Icon: Rocket,       title: "Free Onboarding",     desc: "No barriers, no tech team needed" },
      { Icon: TrendingUp,   title: "Local Traffic Boost", desc: "Featured placement, visible to nearby customers" },
      { Icon: Bell,         title: "Direct Order Push",   desc: "Instant notifications, never miss business" },
      { Icon: Wallet,       title: "Transparent Fees",    desc: "No hidden charges, clear partnership terms" },
      { Icon: LayoutGrid,   title: "Free Store Page",     desc: "One-click listing, manage menu and schedule" },
      { Icon: MessageSquare,title: "Dedicated Support",   desc: "Reach us anytime, we help resolve issues" },
    ],
    stats: [
      { n: "By invite", l: "Beta Access" },
      { n: "KK",        l: "Launch City" },
      { n: "3 days",    l: "Go Live" },
      { n: "RM 0",      l: "Onboarding" },
    ],
    earnings_t: "Earnings Reference",
    earnings_sub: "Reference ranges only. Actual income depends on category, timing, and service level.",
    earnings: [
      { n: "5-15",       l: "Daily orders",  sub: "Depends on category & peak" },
      { n: "RM 80-350",  l: "Avg order",     sub: "Depends on service type" },
      { n: "RM 12K-52K", l: "Monthly gross", sub: "Reference only, not a promise" },
    ],
    support_t: "Platform Support",
    support: [
      { Icon: GraduationCap, title: "Onboarding Training", desc: "Guides, order flow, service standards" },
      { Icon: BarChart3,     title: "Business Dashboard",  desc: "Real-time orders, income, reviews" },
      { Icon: Megaphone,     title: "Marketing Campaigns", desc: "Platform campaigns prioritize good merchants" },
      { Icon: Headphones,    title: "Support Team",        desc: "Reach us anytime, we help resolve" },
      { Icon: MessageSquare, title: "Review Management",   desc: "Reply to reviews, build store credit" },
      { Icon: ShieldCheck,   title: "Dispute Resolution",  desc: "Platform mediates order disputes" },
    ],
    stories_t: "Merchant Stories",
    stories_sub: "From our first batch of merchants in Kota Kinabalu (sample)",
    stories: [
      { name: "KK · Hardware Store", tag: "Plumbing", quote: "Ten-year-old shop, only regulars. After joining V'GO, nearby customers find us on their phones — orders now come to us." },
      { name: "KK · AC Repair",       tag: "Appliance", quote: "Used to take orders via Facebook with painful price haggling. Now pricing is standard, transparent, easy for both sides." },
      { name: "KK · Beauty Salon",    tag: "Beauty",    quote: "Young customers prefer apps. Since joining V'GO, we get more exposure and stable bookings." },
    ],
    flow_t: "Onboarding Steps",
    steps: [
      { n: "01", title: "Apply",         desc: "Fill basic info, upload SSM and bank details", time: "5 min" },
      { n: "02", title: "Review",        desc: "V'GO team verifies, 1-3 business days",        time: "1-3 days" },
      { n: "03", title: "List Services", desc: "Configure services, prices, schedule",        time: "30 min" },
      { n: "04", title: "Start Receiving", desc: "Customers order, app notifies you instantly", time: "Instant" },
      { n: "05", title: "Auto Settlement", desc: "Order completes, paid per platform rules",   time: "Per cycle" },
    ],
    docs_t: "Required Documents",
    docs: [
      "SSM business registration (Form D / 9 / 24 / 49)",
      "Signatory's IC (front & back)",
      "Bank account info (bank + account holder)",
      "Brand logo & store photos",
      "Service catalog & pricing",
      "Business license (if any)",
      "Halal certification (if any)",
      "SST certification (if any)",
    ],
    faq_t: "FAQ",
    faqs: [
      ["What are the requirements?", "You need a legally registered business entity in Malaysia (SSM). Sole Proprietors and Sdn Bhd are both accepted. The director or owner listed on the registration must sign the agreement."],
      ["What fees does the platform charge?", "V'GO charges a platform service fee per standard-service order. Exact rate is stated in the agreement you sign. All fees are disclosed before onboarding — no hidden charges."],
      ["How often do I get paid?", "After order completion, payments settle according to the agreed cycle, usually weekly or bi-weekly. Refer to your agreement for specifics."],
      ["Do I need to handle delivery myself?", "Depends on service type. For on-site services, merchants can arrange their own staff; for delivery categories, V'GO may provide logistics support (if applicable). Refer to the cooperation model chosen at onboarding."],
      ["Can I list only some services?", "Yes. You can list all services or just a subset. You can adjust your service catalog anytime in the merchant dashboard."],
      ["What if my application is rejected?", "If rejected, V'GO will explain why. You can supplement documents based on feedback and resubmit."],
      ["Can I leave anytime?", "Yes. V'GO doesn't bind you. You can give notice per agreement terms. Unsettled orders will still be paid as agreed."],
      ["Can I join without a physical store?", "Some service categories accept individual providers without a physical store. It depends on the service you offer — contact support to ask."],
    ],
    cta_t: "Ready to Join?",
    cta_s: "Submit your application — V'GO team will contact you within 1-3 business days.",
    cta_btn: "Submit Application",
    cta_note: "Or WhatsApp: +60 11-7269 1788",
  },
  ms: {
    tag: "Kerjasama Peniaga",
    hero_t: "Ditemui Pelanggan Seluruh Negara",
    hero_s: "Sertai V'GO secara percuma dan dapatkan sokongan trafik tempatan, penghantaran pesanan terus, dan fi telus.",
    hero_cta: "Mohon Sertai",
    hero_faq: "Lihat FAQ →",
    benefits_t: "Mengapa Pilih V'GO",
    benefits: [
      { Icon: Rocket,       title: "Pendaftaran Percuma", desc: "Tiada halangan, tiada pasukan teknologi diperlukan" },
      { Icon: TrendingUp,   title: "Sokongan Trafik",     desc: "Kedudukan pilihan, kelihatan kepada pelanggan berhampiran" },
      { Icon: Bell,         title: "Pesanan Terus",       desc: "Notifikasi segera, tidak terlepas perniagaan" },
      { Icon: Wallet,       title: "Fi Telus",            desc: "Tiada caj tersembunyi, terma kerjasama jelas" },
      { Icon: LayoutGrid,   title: "Halaman Kedai Percuma", desc: "Senarai satu klik, urus menu dan jadual" },
      { Icon: MessageSquare,title: "Sokongan Khusus",     desc: "Hubungi bila-bila masa, kami bantu selesaikan" },
    ],
    stats: [
      { n: "Jemputan", l: "Akses Beta" },
      { n: "KK",       l: "Bandar Pelancaran" },
      { n: "3 hari",   l: "Masa Live" },
      { n: "RM 0",     l: "Pendaftaran" },
    ],
    earnings_t: "Rujukan Pendapatan",
    earnings_sub: "Julat rujukan sahaja. Pendapatan sebenar bergantung pada kategori, masa, dan tahap perkhidmatan.",
    earnings: [
      { n: "5-15",       l: "Pesanan harian", sub: "Bergantung kategori & puncak" },
      { n: "RM 80-350",  l: "Pesanan purata", sub: "Bergantung jenis servis" },
      { n: "RM 12K-52K", l: "Pendapatan kasar bulanan", sub: "Rujukan sahaja, bukan janji" },
    ],
    support_t: "Sokongan Platform",
    support: [
      { Icon: GraduationCap, title: "Latihan Onboarding", desc: "Panduan, aliran pesanan, piawaian servis" },
      { Icon: BarChart3,     title: "Dashboard Bisnes",   desc: "Pesanan masa nyata, pendapatan, ulasan" },
      { Icon: Megaphone,     title: "Kempen Pemasaran",   desc: "Kempen platform utamakan peniaga baik" },
      { Icon: Headphones,    title: "Pasukan Sokongan",   desc: "Hubungi bila-bila masa, kami bantu" },
      { Icon: MessageSquare, title: "Pengurusan Ulasan",  desc: "Balas ulasan, bina kredit kedai" },
      { Icon: ShieldCheck,   title: "Penyelesaian Pertikaian", desc: "Platform jadi orang tengah" },
    ],
    stories_t: "Kisah Peniaga",
    stories_sub: "Daripada kelompok pertama peniaga di Kota Kinabalu (contoh)",
    stories: [
      { name: "KK · Kedai Perkakasan", tag: "Paip", quote: "Kedai 10 tahun, hanya pelanggan tetap. Selepas sertai V'GO, pelanggan berhampiran jumpa kami di telefon — pesanan datang sendiri." },
      { name: "KK · Baiki Aircond",    tag: "Alatan", quote: "Dulu ambil pesanan Facebook, penat tawar-menawar. Sekarang harga standard, telus, senang kedua-dua pihak." },
      { name: "KK · Salon Kecantikan", tag: "Kecantikan", quote: "Pelanggan muda suka app. Sejak V'GO, lebih banyak pendedahan dan tempahan stabil." },
    ],
    flow_t: "Langkah Pendaftaran",
    steps: [
      { n: "01", title: "Mohon",       desc: "Isi maklumat asas, muat naik SSM dan bank", time: "5 minit" },
      { n: "02", title: "Semakan",     desc: "Pasukan V'GO sahkan, 1-3 hari bekerja",     time: "1-3 hari" },
      { n: "03", title: "Senarai Servis", desc: "Konfigur servis, harga, jadual",         time: "30 minit" },
      { n: "04", title: "Mula Terima", desc: "Pelanggan tempah, app maklum serta-merta",  time: "Segera" },
      { n: "05", title: "Penyelesaian Auto", desc: "Pesanan selesai, bayar ikut peraturan", time: "Per kitaran" },
    ],
    docs_t: "Dokumen Diperlukan",
    docs: [
      "Pendaftaran SSM (Borang D / 9 / 24 / 49)",
      "IC penandatangan (hadapan & belakang)",
      "Maklumat akaun bank (bank + pemegang akaun)",
      "Logo jenama & gambar kedai",
      "Katalog servis & harga",
      "Lesen perniagaan (jika ada)",
      "Pensijilan Halal (jika ada)",
      "Pensijilan SST (jika ada)",
    ],
    faq_t: "Soalan Lazim",
    faqs: [
      ["Apa syarat pendaftaran?", "Anda perlukan entiti perniagaan sah berdaftar di Malaysia (SSM). Sole Proprietor dan Sdn Bhd diterima. Pengarah atau pemilik dalam pendaftaran mesti tandatangan perjanjian."],
      ["Platform cas berapa?", "V'GO mengenakan fi perkhidmatan platform bagi setiap pesanan servis standard. Kadar tepat dinyatakan dalam perjanjian. Semua fi dimaklumkan sebelum pendaftaran — tiada caj tersembunyi."],
      ["Berapa kerap dibayar?", "Selepas pesanan selesai, bayaran diselesaikan mengikut kitaran yang dipersetujui, biasanya mingguan atau dua mingguan."],
      ["Perlu uruskan penghantaran sendiri?", "Bergantung pada jenis servis. Untuk servis di lokasi, peniaga boleh atur staf sendiri; untuk kategori penghantaran, V'GO mungkin bantu logistik (jika ada)."],
      ["Boleh senaraikan sebahagian servis sahaja?", "Boleh. Senaraikan semua atau sebahagian sahaja. Boleh ubah bila-bila masa di dashboard peniaga."],
      ["Macam mana jika permohonan ditolak?", "Jika ditolak, V'GO akan jelaskan sebabnya. Anda boleh tambah dokumen dan hantar semula."],
      ["Boleh keluar bila-bila masa?", "Boleh. V'GO tidak mengikat anda. Beri notis mengikut terma perjanjian. Pesanan belum diselesaikan tetap akan dibayar."],
      ["Boleh sertai tanpa kedai fizikal?", "Sebahagian kategori servis terima penyedia individu tanpa kedai fizikal. Bergantung pada servis anda — hubungi sokongan."],
    ],
    cta_t: "Sedia untuk Sertai?",
    cta_s: "Hantar permohonan — pasukan V'GO akan hubungi anda dalam 1-3 hari bekerja.",
    cta_btn: "Hantar Permohonan",
    cta_note: "Atau WhatsApp: +60 11-7269 1788",
  },
};

export default function MerchantPage() {
  const { lang } = useLang();
  const c = C[lang] ?? C.zh;

  return (
    <main className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <section className="relative min-h-[70svh] flex items-center justify-center px-5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/shared/s06.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-gray-950" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center pt-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-semibold mb-6">
            <Rocket size={14} /> {c.tag}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
            <span className="text-white">{c.hero_t}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed">{c.hero_s}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-black shadow-[0_10px_40px_-6px_rgba(255,150,0,0.3)] hover:scale-[1.03] active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">
              {c.hero_cta} <ArrowRight size={18} />
            </a>
            <a href="#faq" className="text-xs text-white/60 hover:text-white transition">{c.hero_faq}</a>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-10">{c.benefits_t}</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {c.benefits.map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center mb-4">
                <b.Icon size={20} color="#fff" />
              </div>
              <h3 className="text-base font-black text-white mb-2">{b.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {c.stats.map((s, i) => (
            <motion.div key={s.l} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#D95000] leading-tight">{s.n}</div>
              <div className="text-xs text-white/60 mt-1.5">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-3">{c.earnings_t}</motion.h2>
        <p className="text-center text-xs text-white/40 mb-10">{c.earnings_sub}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {c.earnings.map((e, i) => (
            <motion.div key={e.l} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-600/5 border border-amber-500/25 text-center">
              <div className="text-xl sm:text-2xl font-black text-[var(--vgo)]">{e.n}</div>
              <div className="text-sm font-bold text-white mt-2">{e.l}</div>
              <div className="text-[11px] text-white/50 mt-1">{e.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-10">{c.support_t}</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {c.support.map((sp, i) => (
            <motion.div key={sp.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center mb-3">
                <sp.Icon size={18} color="#fff" />
              </div>
              <h3 className="text-sm font-black text-white mb-1.5">{sp.title}</h3>
              <p className="text-xs text-white/55 leading-relaxed">{sp.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-3">{c.stories_t}</motion.h2>
        <p className="text-center text-xs text-white/40 mb-10">{c.stories_sub}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {c.stories.map((st, i) => (
            <motion.div key={st.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 rounded-3xl bg-white/5 border border-white/10">
              <Quote size={36} strokeWidth={1} className="absolute top-3 right-3 text-[var(--vgo)] opacity-10" />
              <p className="text-sm text-white/75 leading-[1.8] mb-5">"{st.quote}"</p>
              <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center text-xs font-black shrink-0">{st.name[0]}</div>
                <div className="min-w-0">
                  <div className="text-sm font-black text-white truncate">{st.name}</div>
                  <div className="text-[11px] text-white/40 truncate">{st.tag}</div>
                </div>
                <BadgeCheck size={14} className="text-[var(--vgo)] ml-auto shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-10">{c.flow_t}</motion.h2>
        <div className="space-y-4">
          {c.steps.map((s, i) => (
            <motion.div key={s.n} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5 items-start p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center font-black text-lg">{s.n}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h3 className="text-base font-black text-white">{s.title}</h3>
                  <span className="text-[11px] font-bold text-[var(--vgo)] shrink-0">{s.time}</span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-10">{c.docs_t}</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {c.docs.map((d, i) => (
            <motion.div key={d} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
              <CheckCircle2 size={16} className="text-[var(--vgo)] shrink-0 mt-0.5" />
              <span className="text-sm text-white/75">{d}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="faq" className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-10">{c.faq_t}</motion.h2>
        <div className="space-y-3">
          {c.faqs.map(([q, a], i) => (
            <motion.div key={q} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}>
              <details className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                <summary className="cursor-pointer p-5 flex items-center justify-between gap-4 font-bold text-sm text-white hover:bg-white/5 transition list-none">
                  <span>{q}</span>
                  <span className="text-[var(--vgo)] group-open:rotate-45 transition-transform text-xl leading-none shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-white/60 leading-[1.8]">{a}</div>
              </details>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="apply" className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-16 pb-32">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-[#FF8A1F] to-[#D95000] p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,.25), transparent 70%)" }} />
          <div className="relative">
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-4">{c.cta_t}</h2>
            <p className="text-sm text-white/85 mb-8 max-w-md mx-auto">{c.cta_s}</p>
            <a href="mailto:support.vgo@gmail.com" className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-white text-[#D95000] font-black text-base shadow-2xl hover:scale-105 active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">
              {c.cta_btn} <ArrowRight size={18} />
            </a>
            <p className="text-xs text-white/60 mt-4">{c.cta_note}</p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
```

## File: src/components/Roles.tsx
```typescript
"use client";
import { motion } from "motion/react";
import { User, Store, Wrench } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function Roles() {
  const { t } = useLang();

  const ROLES = [
    {
      id: "customer", tag: t("role_customer_tag"), Icon: User,
      title: t("role_customer_title"),
      desc: t("role_customer_desc"),
      points: [t("role_customer_p1"), t("role_customer_p2"), t("role_customer_p3"), t("role_customer_p4")],
      cta: t("role_customer_cta"),
      href: "/how-it-works/customer",
      img: "/shared/s03.jpg",
    },
    {
      id: "merchant", tag: t("role_merchant_tag"), Icon: Store,
      title: t("role_merchant_title"),
      desc: t("role_merchant_desc"),
      points: [t("role_merchant_p1"), t("role_merchant_p2"), t("role_merchant_p3"), t("role_merchant_p4")],
      cta: t("role_merchant_cta"),
      href: "/merchant",
      img: "/shared/s06.jpg",
    },
    {
      id: "technician", tag: t("role_tech_tag"), Icon: Wrench,
      title: t("role_tech_title"),
      desc: t("role_tech_desc"),
      points: [t("role_tech_p1"), t("role_tech_p2"), t("role_tech_p3"), t("role_tech_p4")],
      cta: t("role_tech_cta"),
      href: "/technician",
      img: "/shared/s02.jpg",
    },
  ];

  return (
    <section id="roles" className="relative bg-white py-20 sm:py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[var(--vgo)] font-bold text-sm tracking-widest uppercase mb-3">{t("roles_label")}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            {t("roles_title")}
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            {t("roles_sub")}
          </p>
        </motion.div>

        <div className="space-y-6">
          {ROLES.map((r, i) => (
            <motion.div
              key={r.id}
              id={r.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-[28px] border border-gray-100 group"
            >
              <div className="grid md:grid-cols-3">
                <div className="relative h-56 md:h-auto overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url('${r.img}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent" />
                  <div className="absolute top-5 left-5 w-14 h-14 rounded-2xl bg-white/95 backdrop-blur flex items-center justify-center shadow-lg">
                    <r.Icon size={28} strokeWidth={2.2} className="text-[var(--vgo)]" />
                  </div>
                </div>

                <div className="md:col-span-2 p-7 sm:p-10 bg-gray-50">
                  <p className="text-[var(--vgo)] font-black text-sm tracking-wide mb-2">{r.tag}</p>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">{r.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">{r.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {r.points.map((pt) => (
                      <span key={pt} className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700">
                        ✓ {pt}
                      </span>
                    ))}
                  </div>
                  <a
                    href={r.href}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[var(--vgo)] text-white font-bold text-sm shadow-lg shadow-orange-500/30 hover:bg-[var(--vgo-dark)] hover:scale-105 transition-[transform,box-shadow,opacity,width,background-color]"
                  >
                    {r.cta}
                    <span>→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## File: src/components/ServiceDetailPage.tsx
```typescript
"use client";
/**
 * Copyright (c) 2026 Ventus Reflexology. All Rights Reserved.
 * 服务详情页 v4 —— 专业版（讲清价值，不做虚假承诺）
 */
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft, ArrowRight, Check, Clock, ShieldCheck, XCircle,
  Wrench, Sparkles, Heart, Truck, ShoppingBag, Briefcase,
  AlertCircle, FileCheck, MessageSquare, type LucideIcon,
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import { SERVICES, type ServiceItem } from "@/data/services";

const ICONS: Record<string, LucideIcon> = { Wrench, Sparkles, Heart, Truck, ShoppingBag, Briefcase };
type ServiceId = "repair" | "clean" | "massage" | "errand" | "market" | "jobs";

const DETAIL: Record<ServiceId, {
  value: string;
  pains: [string, string][];
  approach: [string, string][];
  steps: [string, string][];
  mechanisms: [string, string][];
  faqs: [string, string][];
}> = {
  repair: {
    value: "亚庇地区的上门维修服务，师傅实名审核、报价透明、订单留档",
    pains: [
      ["找师傅难", "熟人介绍靠运气，网上找怕遇坑，打电话经常没人接"],
      ["报价不透明", "上门了才报价，说多少是多少，你没得选"],
      ["出了问题没人管", "修完发现不行，找不到人，投诉无门"],
      ["不知道师傅底细", "对方是谁、做过什么、别人怎么评价，全都不知道"],
    ],
    approach: [
      ["师傅实名审核", "每位入驻师傅都需通过身份认证和资质审核，资料在平台可查"],
      ["报价必须明确", "平台要求师傅上门后先报价，你确认后才开始服务"],
      ["订单平台留档", "每一次下单、每一次报价、每一次完成，都在平台有记录"],
      ["客服协助处理", "如有疑问或纠纷，可随时联系平台客服协助沟通"],
    ],
    steps: [
      ["提交需求", "拍照说明问题，选择服务时间与地址"],
      ["匹配师傅", "系统就近匹配可接单的师傅，可查看师傅资料"],
      ["上门检查", "师傅上门检查，给出明确报价"],
      ["确认服务", "你确认报价后，师傅才开始维修"],
      ["完成验收", "验收满意后，通过平台完成付款并评价"],
    ],
    mechanisms: [
      ["身份认证", "师傅需通过身份证实名和资质审核后方可接单"],
      ["报价透明", "上门后先报价，你确认后才动手，杜绝临时加价"],
      ["订单留档", "所有沟通和订单记录在平台保存，可随时查看"],
      ["评价体系", "每次服务后可评价，帮助其他用户参考"],
      ["客服支持", "如遇问题可联系客服，协助沟通处理"],
      ["隐私保护", "师傅签保密协议，不外传你的地址和个人信息"],
    ],
    faqs: [
      ["师傅上门要收费吗？", "具体收费方式由师傅在报价时说明。你可以先与师傅沟通确认，再决定是否继续。如果检查后你决定不修，可以和师傅协商是否需要支付上门费。"],
      ["维修价格怎么算？", "师傅会上门检查后给出报价。平台要求师傅报价明确、清晰，你确认后才开始服务。对报价有疑问时，可随时联系客服协助。"],
      ["师傅有资质吗？", "平台对入驻师傅进行身份认证和资质审核。你可以查看师傅的公开资料，包括服务记录和用户反馈，再决定是否下单。"],
      ["多久能上门？", "上门时间取决于师傅档期和你的位置，下单时系统会显示可选时间。如遇紧急情况，可以联系客服协助。"],
      ["可以指定师傅吗？", "如果平台提供指定功能，你可以在下单时备注。具体以 App 内功能为准。"],
      ["怎么付款？", "支持 App 内在线支付。具体支付方式以 App 内显示为准。"],
      ["维修后有问题怎么办？", "如服务后出现问题，可通过平台反馈。平台会协助你与师傅沟通。所有沟通记录在平台留档，方便查询。"],
    ],
  },
  clean: {
    value: "预约上门清洁服务，保洁员实名认证、服务内容清晰、订单有记录",
    pains: [
      ["周末想休息，家里一堆活", "想放松一下，却被家务困住，周末比上班还累"],
      ["找不到靠谱的人", "熟人介绍时间对不上，临时找人又不放心"],
      ["怕临时加价", "讲好一个价，做完又说要加钱，心里不舒服"],
      ["怕东西被弄坏", "陌生人上门，担心东西被翻、被弄坏"],
    ],
    approach: [
      ["保洁员实名认证", "每位入驻保洁员都需通过身份认证，资料可查"],
      ["服务内容清晰", "下单前明确清洁类型、范围、时长，避免误解"],
      ["按标准流程作业", "保洁员按平台规范作业，不拖延、不加价"],
      ["订单留档反馈", "服务完成后可评价，如有问题可通过平台反馈"],
    ],
    steps: [
      ["选择类型", "日常保洁 / 深度清洁 / 开荒清洁，填写面积与房间数"],
      ["填写需求", "描述清洁重点、特殊要求，明确服务内容"],
      ["保洁上门", "保洁员按约定时间上门，按内容服务"],
      ["验收评价", "验收满意后通过平台完成付款并评价"],
    ],
    mechanisms: [
      ["身份认证", "保洁员需通过身份认证后方可接单"],
      ["内容清晰", "下单前明确服务内容和范围，避免误解"],
      ["订单留档", "订单在平台保存，方便查询"],
      ["评价体系", "服务后可评价，帮助其他用户参考"],
      ["反馈渠道", "对服务不满意可通过平台反馈"],
      ["隐私尊重", "保洁员签保密协议，不拍摄、不外传你的信息"],
    ],
    faqs: [
      ["清洁用品要自备吗？", "具体以服务方说明为准。下单前可查看服务详情，或与服务方沟通确认。如有特殊需求（如要纯天然清洁剂），可在下单时备注。"],
      ["清洁不满意怎么办？", "服务完成后可通过平台反馈。我们会认真查看你的反馈，并协助沟通处理。所有订单在平台留档。"],
      ["可以指定保洁员吗？", "具体以 App 内功能为准。如需指定，可在下单时备注，由平台协助安排。"],
      ["可以只清洁部分区域吗？", "可以。你可以在下单时选择具体的清洁项目和区域，系统会显示对应的服务内容。"],
      ["服务期间可以离开吗？", "可以。建议留一个能联系上的人，方便保洁员有问题时沟通。"],
      ["怎么付款？", "通过 App 内在线支付。具体支付方式以 App 内显示为准。"],
      ["保洁员会翻我的东西吗？", "不会。保洁员只做清洁工作，按平台规范作业。如有违规行为，可立即通过平台投诉。"],
    ],
  },
  massage: {
    value: "预约上门按摩服务，按摩师资质审核、隐私严格保护、服务过程透明",
    pains: [
      ["懒得开车出门", "去会所要开车、要找车位、要排队，来回耗半天"],
      ["担心隐私问题", "陌生人上门，担心安全、担心隐私被泄露"],
      ["怕不专业", "不知道按摩师水平如何，怕按错部位"],
      ["价格不透明", "做完才说多少钱，或者硬推加钟"],
    ],
    approach: [
      ["按摩师资质审核", "每位入驻按摩师都需通过身份认证和资质审核"],
      ["服务内容明确", "预约时选好类型和时长，服务内容清楚列出"],
      ["隐私严格保护", "按摩师签保密协议，不拍摄、不外传个人信息"],
      ["过程可沟通", "服务全程可沟通力度、重点部位，如有不适可随时叫停"],
    ],
    steps: [
      ["选类型", "推拿 / 泰式 / SPA / 足疗，选好时长"],
      ["预约时间", "选择日期、时间与上门地址"],
      ["按摩师上门", "按摩师按约定时间上门，准备布置"],
      ["享受服务", "过程中可沟通调整，如有不适随时叫停"],
      ["完成评价", "服务完成后评价，帮助其他用户参考"],
    ],
    mechanisms: [
      ["资质认证", "按摩师需通过资质审核与身份认证"],
      ["资料透明", "可查看按摩师的服务类型和用户反馈"],
      ["隐私保护", "按摩师签保密协议，尊重用户隐私"],
      ["过程可沟通", "服务中可沟通力度和重点部位，不适可随时叫停"],
      ["评价体系", "服务后可评价，帮助其他用户参考"],
      ["反馈渠道", "对服务不满意可通过平台反馈"],
    ],
    faqs: [
      ["按摩师有执照吗？", "平台对入驻按摩师进行资质审核。你可以查看按摩师的公开资料和用户反馈，再决定是否下单。"],
      ["需要自备什么？", "具体以服务方说明为准。下单前可查看服务详情，或与服务方沟通确认。"],
      ["可以指定力度吗？", "可以。服务开始前可以与按摩师沟通力度偏好，服务过程中如有不适可随时沟通调整或叫停。"],
      ["男女按摩师都可以选吗？", "具体以 App 内功能为准。如有性别偏好，可在下单时备注，由平台协助安排。"],
      ["服务期间可以取消吗？", "具体取消政策以 App 内显示为准。如有疑问可联系平台客服。"],
      ["怎么付款？", "通过 App 内在线支付。具体支付方式以 App 内显示为准。"],
      ["隐私怎么保障？", "平台要求按摩师签署保密协议，不拍摄、不外传用户个人信息。如有违规行为，可立即通过平台投诉。"],
    ],
  },
  errand: {
    value: "同城跑腿代购服务，跑腿员实名认证、过程可追踪、订单有记录",
    pains: [
      ["抽不开身去办", "工作忙、在家带娃、身体不便，很多小事没法亲自去"],
      ["开车成本高", "开车一趟要半小时，找车位又麻烦，算下来不划算"],
      ["找人帮忙欠人情", "叫朋友帮忙，一次两次可以，长期不好意思"],
      ["怕东西丢了", "让陌生人带东西，担心物品安全"],
    ],
    approach: [
      ["跑腿员实名认证", "每位入驻跑腿员都需通过身份认证"],
      ["服务内容明确", "下单时填写取件地址、送达地址和物品信息"],
      ["过程可追踪", "App 内可查看跑腿进度，心里有底"],
      ["订单留档反馈", "订单在平台留档，如有问题可通过平台反馈"],
    ],
    steps: [
      ["下单", "填取件地址、送达地址、物品信息"],
      ["匹配跑腿员", "系统就近匹配可接单的跑腿员"],
      ["实时追踪", "可在 App 内查看进度"],
      ["送达确认", "送达后通过平台完成付款"],
    ],
    mechanisms: [
      ["身份认证", "跑腿员需通过身份认证后方可接单"],
      ["位置追踪", "App 内可查看跑腿进度，随时知道进展"],
      ["订单留档", "订单在平台保存，方便查询"],
      ["评价体系", "服务后可评价，帮助其他用户参考"],
      ["反馈渠道", "如遇问题可通过平台反馈"],
      ["隐私保护", "跑腿员不外传你的地址和个人信息"],
    ],
    faqs: [
      ["多久能送达？", "送达时间取决于距离和路况，下单时系统会显示预估时间。"],
      ["贵重物品可以送吗？", "建议你在下单前与服务方沟通确认，并评估物品价值。如有特殊需求，可在下单时备注。"],
      ["物品损坏怎么办？", "如遇物品损坏问题，可通过平台反馈。平台会协助沟通处理。所有订单在平台留档。"],
      ["晚上可以接单吗？", "具体接单时段以 App 内显示为准。"],
      ["可以帮忙排队吗？", "可以。下单时填写具体排队需求即可。具体计费方式以 App 内显示为准。"],
      ["怎么付款？", "通过 App 内在线支付。具体支付方式以 App 内显示为准。"],
      ["跑腿员会拆开我的东西吗？", "不会。跑腿员只负责运输。如发现物品被拆封，可立即通过平台投诉。"],
    ],
  },
  market: {
    value: "本地二手交易平台，卖家实名认证、支持当面验货、评价体系透明",
    pains: [
      ["闲置的东西扔了可惜", "买的时候花了钱，现在用不着了，处理起来很麻烦"],
      ["怕遇到骗子", "网上交易怕被骗，收到假货、收不到货"],
      ["怕买到假货", "看到便宜的二手商品，又怕是假货、翻新货"],
      ["处理起来麻烦", "拍照、写描述、约见面、讨价还价，太耗时间"],
    ],
    approach: [
      ["卖家实名认证", "每位发布商品的卖家都需通过实名认证"],
      ["支持当面验货", "同城交易可约见面，看到实物满意再决定"],
      ["评价积累信用", "每次交易后互相评价，信用记录透明"],
      ["反馈协助处理", "如遇纠纷，可通过平台反馈，协助沟通处理"],
    ],
    steps: [
      ["拍照上传", "拍摄商品照片，填写描述、价格和区域"],
      ["实名认证", "完成实名认证后发布商品"],
      ["买家联系", "买家私聊或约见，同城当面交易"],
      ["成交评价", "交易完成后互相评价，积累信用"],
    ],
    mechanisms: [
      ["实名认证", "卖家需完成实名认证后才能发布商品"],
      ["信用记录", "交易后互相评价，积累信用分"],
      ["当面交易", "支持当面验货，看到实物再决定"],
      ["防骗机制", "实名认证 + 评价机制，双重防骗"],
      ["反馈渠道", "交易纠纷可通过平台反馈协助处理"],
      ["违规处理", "违规商品会被下架，严重者封号"],
    ],
    faqs: [
      ["平台收费吗？", "发布免费。具体费用以 App 内显示为准。"],
      ["可以邮寄吗？", "支持。同城当面交易和跨城邮寄都可根据双方协商进行。建议通过平台内渠道沟通，保留记录。"],
      ["怎么防骗？", "平台要求卖家实名认证，同时提供评价机制。交易前建议先沟通、验货，谨慎付款。如有疑问可联系客服。"],
      ["违规商品怎么处理？", "如发现违规商品，可以通过平台举报。平台会核实后下架商品，严重者封号。"],
      ["卖家不发货怎么办？", "如遇此类问题，可通过平台反馈，我们会协助沟通处理。建议通过平台内渠道沟通，保留记录。"],
      ["怎么付款？", "具体交易方式由买卖双方协商。建议通过平台内渠道沟通，保留记录。"],
      ["信用分怎么算？", "每次交易后互相评价。好评加分，差评减分。信用分反映卖家的交易信誉。"],
    ],
  },
  jobs: {
    value: "本地零工招聘平台，雇主实名认证、岗位信息清晰、沟通记录留档",
    pains: [
      ["找零工要靠熟人", "没熟人介绍，就接不到活，收入不稳定"],
      ["怕拖欠工资", "干完活拖半个月，催了又催，很麻烦"],
      ["怕中介抽成", "中介费抽走一大截，到手工钱少很多"],
      ["怕工作内容不符", "说好的工作，去了发现完全不一样"],
    ],
    approach: [
      ["雇主实名认证", "每位发布岗位的雇主都需通过身份认证"],
      ["岗位信息清晰", "工作内容、薪资、时长、地点需明确写明"],
      ["沟通记录留档", "平台内沟通记录保存，作为凭证"],
      ["反馈协助处理", "如遇纠纷，可通过平台反馈，协助沟通处理"],
    ],
    steps: [
      ["找工作", "浏览岗位，按类型、区域、薪资筛选"],
      ["投递或联系", "一键投递，或主动私聊雇主了解更多"],
      ["沟通确认", "与雇主沟通岗位细节，双方确认后上岗"],
      ["完成评价", "完工后互相评价，积累信用记录"],
    ],
    mechanisms: [
      ["身份认证", "雇主需完成认证后方可发布岗位"],
      ["信息清晰", "岗位内容、薪资、时长需明确写明"],
      ["沟通留档", "平台内沟通记录保存，方便查询"],
      ["评价体系", "完工后互相评价，积累信用记录"],
      ["反馈渠道", "如遇问题可通过平台反馈"],
      ["违规处理", "虚假岗位、拖欠工资等行为，核实后封号"],
    ],
    faqs: [
      ["要交中介费吗？", "平台对求职者免费。具体以 App 内显示为准。"],
      ["工资有保障吗？", "平台鼓励通过平台内沟通并保留记录。如遇问题，可通过平台反馈，我们会协助沟通处理。"],
      ["可以兼职吗？", "可以。平台上有日结、小时工、周末工、夜班等多种岗位。"],
      ["需要什么资料？", "求职者需完成实名认证。如持有相关技能证书，上传后有助于展示你的能力。"],
      ["怎么找长期工作？", "平台主要面向短期零工。具体岗位类型以 App 内显示为准。"],
      ["怎么付款？", "具体结算方式由雇主与求职者协商。建议通过平台内渠道沟通，保留记录。"],
      ["雇主要求线下付款怎么办？", "建议坚持通过平台内渠道沟通和结算，保留记录作为凭证。如有疑问可联系客服。"],
    ],
  },
};

const L = {
  zh: { back: "返回", painTitle: "你可能也遇到过", approachTitle: "VGO 怎么做", overview: "服务包含", flowTitle: "服务流程", mechTitle: "平台机制", faqTitle: "常见问题", cta: "立即预约", all: "全部服务" },
  en: { back: "Back", painTitle: "Sound Familiar?", approachTitle: "How VGO Helps", overview: "What's Included", flowTitle: "Service Flow", mechTitle: "Platform Mechanism", faqTitle: "FAQ", cta: "Book Now", all: "All Services" },
  ms: { back: "Kembali", painTitle: "Pernah Alami?", approachTitle: "Cara VGO Bantu", overview: "Apa Termasuk", flowTitle: "Aliran Servis", mechTitle: "Mekanisme Platform", faqTitle: "Soalan Lazim", cta: "Tempah Sekarang", all: "Semua Servis" },
};

export default function ServiceDetailPage({ id }: { id: ServiceId }) {
  const { lang } = useLang();
  const t = L[lang];
  const data = SERVICES[lang];
  const item = data.items.find((x) => x.id === id) as ServiceItem;
  const d = DETAIL[id];
  const Icon = ICONS[item.icon] || Wrench;

  return (
    <main className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* 1. Hero */}
      <section className="relative min-h-[60svh] flex items-center justify-center px-5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center kenburns" style={{ backgroundImage: `url('${item.image}')` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-gray-950" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center pt-24">
          <Link href="/#features" className="absolute left-0 top-0 inline-flex items-center gap-1 text-white/60 hover:text-white text-xs"><ArrowLeft size={14} /> {t.back}</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-semibold mb-6">
            <Icon size={14} /> {item.title}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
            <span className="text-white">{item.tagline}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed">{d.value}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#book" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-black shadow-[0_10px_40px_-6px_rgba(255,150,0,0.3)] hover:scale-[1.03] active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">{t.cta}</a>
            <Link href="/#features" className="text-xs text-white/60 hover:text-white transition">{t.all} →</Link>
          </motion.div>
        </div>
      </section>

      {/* 2. 客户痛点 */}
      <section className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl font-black text-center mb-10">{t.painTitle}</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {d.pains.map(([title, desc], i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
              <div className="flex items-start gap-3 mb-2">
                <XCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                <h3 className="text-base font-black text-white">{title}</h3>
              </div>
              <p className="text-sm text-white/55 leading-relaxed pl-7">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. VGO 怎么做 */}
      <section className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl font-black text-center mb-10">{t.approachTitle}</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {d.approach.map(([title, desc], i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
              <div className="flex items-start gap-3 mb-2">
                <Check size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <h3 className="text-base font-black text-white">{title}</h3>
              </div>
              <p className="text-sm text-white/55 leading-relaxed pl-7">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. 服务包含 */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl font-black text-center mb-10">{t.overview}</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {item.canDo.map((x, i) => (
            <motion.div key={x} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
              <Check size={16} className="text-[var(--vgo)] shrink-0 mt-0.5" /><span className="text-sm text-white/80">{x}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. 服务流程 */}
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl font-black text-center mb-10">{t.flowTitle}</motion.h2>
        <div className="space-y-4">
          {d.steps.map(([title, desc], i) => (
            <motion.div key={title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5 items-start p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="shrink-0 w-11 h-11 rounded-2xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center font-black text-base">{i + 1}</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-black text-white mb-1">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. 平台机制 */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl font-black text-center mb-10">{t.mechTitle}</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {d.mechanisms.map(([title, desc], i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck size={16} className="text-[var(--vgo)]" />
                <h3 className="text-sm font-black text-white">{title}</h3>
              </div>
              <p className="text-xs text-white/55 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-4xl font-black text-center mb-10">{t.faqTitle}</motion.h2>
        <div className="space-y-3">
          {d.faqs.map(([q, a], i) => (
            <motion.div key={q} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}>
              <details className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                <summary className="cursor-pointer p-5 flex items-center justify-between gap-4 font-bold text-sm text-white hover:bg-white/5 transition list-none">
                  <span>{q}</span>
                  <span className="text-[var(--vgo)] group-open:rotate-45 transition-transform text-xl leading-none shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-white/60 leading-[1.8]">{a}</div>
              </details>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. 底部 CTA */}
      <section id="book" className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-16 pb-32">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-[#FF8A1F] to-[#D95000] p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,255,255,.25), transparent 70%)' }} />
          <div className="relative">
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-4">{lang === "zh" ? "准备好了吗？" : lang === "ms" ? "Sedia mula?" : "Ready to start?"}</h2>
            <p className="text-sm text-white/85 mb-8 max-w-md mx-auto">{d.value}</p>
            <a href="/#download" className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-white text-[#D95000] font-black text-base shadow-2xl hover:scale-105 active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">
              {t.cta} <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
```

## File: src/components/TechnicianPage.tsx
```typescript
"use client";
import { motion } from "motion/react";
import {
  Wrench, Zap, ShieldCheck, Clock, Wallet, Award, ArrowRight, CheckCircle2,
  TrendingUp, BarChart3, GraduationCap, Headphones, Quote, BadgeCheck, Heart,
} from "lucide-react";
import { useLang } from "@/lib/i18n";

const C = {
  zh: {
    tag: "师傅入驻",
    hero_t: "有手艺，就有单",
    hero_s: "零成本入驻，就近派单，按单结算，自己排时间。手艺人的平台，多劳多得。",
    hero_cta: "立即申请入驻",
    hero_faq: "查看常见问题 →",
    benefits_t: "为什么加入 VGO",
    benefits: [
      { Icon: Zap,         title: "就近派单",   desc: "系统按距离和技能匹配，订单主动找你" },
      { Icon: ShieldCheck, title: "平台担保",   desc: "完工验收后放款，不怕客户拖欠" },
      { Icon: Clock,       title: "自己排时间", desc: "想接就接，不想接就休息，全凭自己" },
      { Icon: Wallet,      title: "按单结算",   desc: "每单完工即时记录，按周期自动入账" },
      { Icon: TrendingUp,  title: "公平定价",   desc: "标准服务平台定价，其他服务自主报价" },
      { Icon: Award,       title: "等级成长",   desc: "接单越多、评价越好，越优先派单" },
    ],
    stats: [
      { n: "首批", l: "邀请制" },
      { n: "亚庇", l: "首发城市" },
      { n: "0 元", l: "入驻成本" },
      { n: "1-2 天", l: "审核周期" },
    ],
    earnings_t: "收益参考",
    earnings_sub: "以下为参考区间，实际收入取决于技能、时段、订单量",
    earnings: [
      { n: "3-8 单",    l: "日均接单", sub: "视技能与空闲时间" },
      { n: "RM 80-300", l: "单均收入", sub: "视服务类型" },
      { n: "RM 7K-50K", l: "月毛收入", sub: "参考区间，非承诺" },
    ],
    support_t: "平台支持",
    support: [
      { Icon: GraduationCap, title: "技能培训", desc: "平台提供行业规范和服务培训" },
      { Icon: ShieldCheck,   title: "订单担保", desc: "客户先付款托管，完工后放款" },
      { Icon: BarChart3,     title: "收入看板", desc: "实时查看接单量、收入、评价" },
      { Icon: Headphones,    title: "客服支持", desc: "遇纠纷由平台介入协调" },
      { Icon: Award,         title: "等级体系", desc: "接单多、评价好，优先派单" },
      { Icon: Heart,         title: "保险覆盖", desc: "平台为接单过程提供基础保障" },
    ],
    stories_t: "师傅故事",
    stories_sub: "来自亚庇地区的首批合作师傅（示例）",
    stories: [
      { name: "亚庇 · 水电师傅",   tag: "水电维修 · 3 年经验", quote: "之前靠朋友圈发广告，接单很不稳定。上 VGO 之后，附近有需求就自动派过来，不用自己找客户。" },
      { name: "亚庇 · 冷气师傅",   tag: "空调维修 · 5 年经验", quote: "最怕遇到拖款的客户。平台担保就放心多了，完工验收后自动打款，不用追着要钱。" },
      { name: "亚庇 · 保洁员",     tag: "家庭清洁 · 2 年经验", quote: "时间很自由，想接单就上线，想休息就下线。比在固定公司上班舒服，收入也更灵活。" },
    ],
    flow_t: "入驻流程",
    steps: [
      { n: "01", title: "注册账号", desc: "填手机号、设密码，完成实名认证", time: "5 分钟" },
      { n: "02", title: "提交资质", desc: "上传技能证、身份证、工作照片", time: "10 分钟" },
      { n: "03", title: "平台审核", desc: "VGO 核验身份和技能，1-2 个工作日", time: "1-2 天" },
      { n: "04", title: "开始接单", desc: "接收就近派单，或主动抢单", time: "立即" },
      { n: "05", title: "完工收款", desc: "客户验收满意，按周期自动打款", time: "按周期" },
    ],
    skills_t: "可接服务类型",
    skills: [
      "水电维修", "空调维修", "家电维修", "门锁开锁",
      "清洁保洁", "家居装修", "搬运搬家", "跑腿代购",
      "按摩理疗", "美容美甲", "汽车维修", "宠物护理",
    ],
    docs_t: "入驻所需资料",
    docs: [
      "身份证（IC）正反面",
      "专业技能证书（如有）",
      "银行账户（收款用）",
      "个人照片 + 工作照",
      "无犯罪记录证明（部分服务需）",
      "健康证明（美容、按摩类需）",
    ],
    faq_t: "常见问题",
    faqs: [
      ["没有证书可以入驻吗？", "部分服务类目不强制要求证书，如搬运、跑腿、基础清洁。但涉及水电、空调、医疗类等高技能服务，需要提供相关技能证明。具体要求欢迎联系客服咨询。"],
      ["平台抽成多少？", "VGO 对每单收取一定比例的平台服务费，具体费率在入驻前会明确告知。标准服务按平台定价，其他服务由你自主报价。所有费用透明，没有隐藏收费。"],
      ["多久能拿到钱？", "订单完成、客户验收后，款项按平台约定的结算周期自动打入你的银行账户。具体周期以入驻协议为准。"],
      ["客户不付款怎么办？", "VGO 平台提供订单担保。所有通过平台的订单，客户付款会先进入平台托管，完工验收后才会放款给你。客户无法直接拖欠。"],
      ["可以指定服务区域吗？", "可以。你可以在后台设置自己的服务范围和可接单时段。系统只会派送范围内的订单给你。"],
      ["每天必须接单吗？", "不必须。你完全自主决定接单时间和数量。想多赚就多接，想休息就下线。平台不会强制派单。"],
      ["被客户投诉怎么办？", "如遇投诉，平台会核实情况。如果确实是服务问题，会按平台规则处理。如果是误会，会协助双方沟通解决。所有订单记录在平台留档。"],
      ["可以同时做多种服务吗？", "可以。你可以同时提供多种技能服务（如水电 + 清洁），只要通过对应的资质审核。"],
    ],
    cta_t: "准备好接单了吗？",
    cta_s: "提交申请，VGO 团队会在 1-2 个工作日内联系你。",
    cta_btn: "提交入驻申请",
    cta_note: "或 WhatsApp: +60 11-7269 1788",
  },
  en: {
    tag: "Technician Onboarding",
    hero_t: "Have Skills? Get Jobs.",
    hero_s: "Zero-cost onboarding, nearby dispatch, per-order payouts, set your own hours. The platform for skilled pros.",
    hero_cta: "Apply to Join",
    hero_faq: "View FAQ →",
    benefits_t: "Why Join V'GO",
    benefits: [
      { Icon: Zap,         title: "Nearby Dispatch",  desc: "Matched by distance & skill — jobs come to you" },
      { Icon: ShieldCheck, title: "Platform Guarantee", desc: "Paid after acceptance, no fear of default" },
      { Icon: Clock,       title: "Your Schedule",   desc: "Take jobs when you want, go offline anytime" },
      { Icon: Wallet,      title: "Per-Order Pay",   desc: "Recorded on completion, paid per cycle" },
      { Icon: TrendingUp,  title: "Fair Pricing",    desc: "Standard services platform-priced, others self-quoted" },
      { Icon: Award,       title: "Level Growth",    desc: "More jobs, better reviews, higher dispatch priority" },
    ],
    stats: [
      { n: "By invite", l: "Beta Access" },
      { n: "KK",        l: "Launch City" },
      { n: "RM 0",      l: "Onboarding" },
      { n: "1-2 days",  l: "Review Time" },
    ],
    earnings_t: "Earnings Reference",
    earnings_sub: "Reference ranges only. Actual income depends on skills, timing, and job volume.",
    earnings: [
      { n: "3-8",       l: "Daily jobs",    sub: "Depends on skills & availability" },
      { n: "RM 80-300", l: "Per job",       sub: "Depends on service type" },
      { n: "RM 7K-50K", l: "Monthly gross", sub: "Reference only, not a promise" },
    ],
    support_t: "Platform Support",
    support: [
      { Icon: GraduationCap, title: "Skill Training",  desc: "Industry standards and service training" },
      { Icon: ShieldCheck,   title: "Order Escrow",   desc: "Customer pays first, released after completion" },
      { Icon: BarChart3,     title: "Income Dashboard", desc: "Real-time jobs, income, reviews" },
      { Icon: Headphones,    title: "Support Team",   desc: "Platform mediates disputes" },
      { Icon: Award,         title: "Level System",   desc: "More jobs, better reviews, higher priority" },
      { Icon: Heart,         title: "Insurance",      desc: "Basic coverage during jobs" },
    ],
    stories_t: "Pro Stories",
    stories_sub: "From our first batch of pros in Kota Kinabalu (sample)",
    stories: [
      { name: "KK · Plumber",    tag: "Plumbing · 3 yrs", quote: "Used to advertise on Facebook with unstable jobs. Since V'GO, nearby jobs auto-dispatch — no need to find customers." },
      { name: "KK · AC Tech",    tag: "AC Repair · 5 yrs", quote: "Most afraid of slow-paying customers. Platform escrow changed that — auto-payout after acceptance, no chasing." },
      { name: "KK · Cleaner",    tag: "Cleaning · 2 yrs",  quote: "Very flexible — go online when I want jobs, offline when I want rest. Better than fixed-hour jobs, income more flexible." },
    ],
    flow_t: "Onboarding Steps",
    steps: [
      { n: "01", title: "Register",     desc: "Phone, password, complete ID verification", time: "5 min" },
      { n: "02", title: "Submit Docs",  desc: "Upload skill certs, IC, work photos",       time: "10 min" },
      { n: "03", title: "Review",       desc: "V'GO verifies ID and skills, 1-2 business days", time: "1-2 days" },
      { n: "04", title: "Start Taking", desc: "Receive nearby dispatch or grab jobs",     time: "Instant" },
      { n: "05", title: "Get Paid",     desc: "Customer accepts, auto-payout per cycle",  time: "Per cycle" },
    ],
    skills_t: "Service Categories",
    skills: [
      "Plumbing", "AC Repair", "Appliance Repair", "Locksmith",
      "Cleaning", "Renovation", "Moving", "Errands",
      "Massage", "Beauty", "Car Repair", "Pet Care",
    ],
    docs_t: "Required Documents",
    docs: [
      "IC (front & back)",
      "Skill certificates (if any)",
      "Bank account (for payouts)",
      "Personal photo + work photos",
      "Police clearance (some services)",
      "Health certificate (beauty / massage)",
    ],
    faq_t: "FAQ",
    faqs: [
      ["Can I join without certifications?", "Some categories don't require certs (moving, errands, basic cleaning). But high-skill services (plumbing, AC, medical) require relevant proof. Contact support for specifics."],
      ["What's the platform's cut?", "V'GO charges a platform service fee per order. Exact rate is disclosed before onboarding. Standard services are platform-priced; others are self-quoted. Fully transparent — no hidden fees."],
      ["When do I get paid?", "After customer acceptance, funds are auto-transferred per the agreed cycle. Refer to your onboarding agreement for specifics."],
      ["What if the customer doesn't pay?", "V'GO offers order escrow. All platform orders are prepaid into escrow and only released after acceptance. Customers cannot default directly."],
      ["Can I set my service area?", "Yes. You can set your service range and available time slots in the dashboard. Only jobs within range are dispatched to you."],
      ["Must I take jobs every day?", "No. You fully control your schedule and volume. Take more for more income, go offline to rest. No forced dispatch."],
      ["What if I get a complaint?", "Platform verifies the situation. If it's a service issue, handled per rules. If it's a misunderstanding, we help both sides communicate. All orders are archived."],
      ["Can I offer multiple services?", "Yes. You can offer multiple skills (e.g. plumbing + cleaning) as long as you pass the corresponding qualification checks."],
    ],
    cta_t: "Ready to Take Jobs?",
    cta_s: "Submit your application — V'GO team will contact you within 1-2 business days.",
    cta_btn: "Submit Application",
    cta_note: "Or WhatsApp: +60 11-7269 1788",
  },
  ms: {
    tag: "Pendaftaran Juruteknik",
    hero_t: "Ada Kemahiran? Dapat Kerja.",
    hero_s: "Pendaftaran kos sifar, hantaran berhampiran, bayaran ikut pesanan, atur masa sendiri. Platform untuk tukang mahir.",
    hero_cta: "Mohon Sertai",
    hero_faq: "Lihat FAQ →",
    benefits_t: "Mengapa Sertai V'GO",
    benefits: [
      { Icon: Zap,         title: "Hantaran Berhampiran", desc: "Padan ikut jarak & kemahiran — kerja datang kepada anda" },
      { Icon: ShieldCheck, title: "Jaminan Platform",     desc: "Dibayar selepas penerimaan, tiada takut gagal bayar" },
      { Icon: Clock,       title: "Jadual Sendiri",       desc: "Ambil kerja bila mahu, offline bila-bila masa" },
      { Icon: Wallet,      title: "Bayar Ikut Pesanan",   desc: "Direkod selepas siap, dibayar ikut kitaran" },
      { Icon: TrendingUp,  title: "Harga Adil",           desc: "Servis standard harga platform, lain quote sendiri" },
      { Icon: Award,       title: "Pertumbuhan Level",    desc: "Lebih kerja, penilaian baik, keutamaan lebih tinggi" },
    ],
    stats: [
      { n: "Jemputan", l: "Akses Beta" },
      { n: "KK",       l: "Bandar Pelancaran" },
      { n: "RM 0",     l: "Pendaftaran" },
      { n: "1-2 hari", l: "Masa Semakan" },
    ],
    earnings_t: "Rujukan Pendapatan",
    earnings_sub: "Julat rujukan sahaja. Pendapatan sebenar bergantung pada kemahiran, masa, dan jumlah kerja.",
    earnings: [
      { n: "3-8",       l: "Kerja harian", sub: "Bergantung kemahiran & ketersediaan" },
      { n: "RM 80-300", l: "Setiap kerja", sub: "Bergantung jenis servis" },
      { n: "RM 7K-50K", l: "Pendapatan kasar bulanan", sub: "Rujukan sahaja, bukan janji" },
    ],
    support_t: "Sokongan Platform",
    support: [
      { Icon: GraduationCap, title: "Latihan Kemahiran", desc: "Piawaian industri dan latihan servis" },
      { Icon: ShieldCheck,   title: "Eskrow Pesanan",   desc: "Pelanggan bayar dahulu, dilepas selepas siap" },
      { Icon: BarChart3,     title: "Dashboard Pendapatan", desc: "Kerja masa nyata, pendapatan, ulasan" },
      { Icon: Headphones,    title: "Pasukan Sokongan", desc: "Platform jadi orang tengah pertikaian" },
      { Icon: Award,         title: "Sistem Level",     desc: "Lebih kerja, penilaian baik, keutamaan tinggi" },
      { Icon: Heart,         title: "Insurans",         desc: "Perlindungan asas semasa kerja" },
    ],
    stories_t: "Kisah Tukang",
    stories_sub: "Daripada kelompok pertama tukang di Kota Kinabalu (contoh)",
    stories: [
      { name: "KK · Tukang Paip", tag: "Paip · 3 tahun", quote: "Dulu iklan di Facebook, kerja tak stabil. Sejak V'GO, kerja berhampiran auto-hantar — tak perlu cari pelanggan." },
      { name: "KK · Tukang AC",   tag: "Aircond · 5 tahun", quote: "Paling takut pelanggan lambat bayar. Eskrow platform ubah itu — auto-bayar selepas penerimaan, tak perlu kejar." },
      { name: "KK · Pembersih",   tag: "Cuci · 2 tahun", quote: "Sangat fleksibel — online bila mahu kerja, offline bila mahu rehat. Lebih baik daripada kerja tetap, pendapatan fleksibel." },
    ],
    flow_t: "Langkah Pendaftaran",
    steps: [
      { n: "01", title: "Daftar",      desc: "Telefon, kata laluan, sahkan identiti",     time: "5 minit" },
      { n: "02", title: "Hantar Dokumen", desc: "Muat naik sijil, IC, gambar kerja",       time: "10 minit" },
      { n: "03", title: "Semakan",     desc: "V'GO sahkan ID dan kemahiran, 1-2 hari",    time: "1-2 hari" },
      { n: "04", title: "Mula Ambil",  desc: "Terima hantaran atau rebut kerja",          time: "Segera" },
      { n: "05", title: "Dapat Bayaran", desc: "Pelanggan terima, auto-bayar ikut kitaran", time: "Per kitaran" },
    ],
    skills_t: "Kategori Servis",
    skills: [
      "Paip", "Baiki Aircond", "Baiki Alatan", "Kunci",
      "Pembersihan", "Renovasi", "Angkut", "Penghantaran",
      "Urutan", "Kecantikan", "Baiki Kereta", "Penjagaan Haiwan",
    ],
    docs_t: "Dokumen Diperlukan",
    docs: [
      "IC (hadapan & belakang)",
      "Sijil kemahiran (jika ada)",
      "Akaun bank (untuk bayaran)",
      "Gambar peribadi + gambar kerja",
      "Surat bersih polis (sebahagian servis)",
      "Sijil kesihatan (kecantikan / urutan)",
    ],
    faq_t: "Soalan Lazim",
    faqs: [
      ["Boleh sertai tanpa pensijilan?", "Sebahagian kategori tak perlu sijil (angkut, penghantaran, cuci asas). Tapi servis mahir tinggi (paip, aircond, perubatan) perlu bukti berkaitan. Hubungi sokongan untuk butiran."],
      ["Platform potong berapa?", "V'GO mengenakan fi perkhidmatan platform setiap pesanan. Kadar tepat dimaklumkan sebelum pendaftaran. Servis standard harga platform; lain quote sendiri. Telus sepenuhnya."],
      ["Bila dapat bayaran?", "Selepas penerimaan pelanggan, dana dipindahkan automatik ikut kitaran yang dipersetujui. Rujuk perjanjian pendaftaran."],
      ["Jika pelanggan tak bayar?", "V'GO menawarkan eskrow pesanan. Semua pesanan platform dibayar ke eskrow dan hanya dilepaskan selepas penerimaan. Pelanggan tidak boleh gagal bayar terus."],
      ["Boleh set kawasan servis?", "Boleh. Anda boleh tetapkan julat servis dan slot masa di dashboard. Hanya kerja dalam julat dihantar kepada anda."],
      ["Mesti terima kerja setiap hari?", "Tidak. Anda kawal sepenuhnya jadual dan jumlah. Terima lebih untuk pendapatan, offline untuk rehat. Tiada hantaran paksa."],
      ["Jika saya diadukan?", "Platform sahkan situasi. Jika isu servis, dikendalikan mengikut peraturan. Jika salah faham, kami bantu kedua-dua pihak berkomunikasi. Semua pesanan diarkibkan."],
      ["Boleh tawar pelbagai servis?", "Boleh. Anda boleh tawar pelbagai kemahiran (contoh paip + cuci) selagi lulus semakan kelayakan berkaitan."],
    ],
    cta_t: "Sedia Ambil Kerja?",
    cta_s: "Hantar permohonan — pasukan V'GO akan hubungi anda dalam 1-2 hari bekerja.",
    cta_btn: "Hantar Permohonan",
    cta_note: "Atau WhatsApp: +60 11-7269 1788",
  },
};

export default function TechnicianPage() {
  const { lang } = useLang();
  const c = C[lang] ?? C.zh;

  return (
    <main className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <section className="relative min-h-[70svh] flex items-center justify-center px-5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/shared/s02.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-gray-950" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center pt-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-semibold mb-6">
            <Wrench size={14} /> {c.tag}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
            <span className="text-white">{c.hero_t}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed">{c.hero_s}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#apply" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-black shadow-[0_10px_40px_-6px_rgba(255,150,0,0.3)] hover:scale-[1.03] active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">
              {c.hero_cta} <ArrowRight size={18} />
            </a>
            <a href="#faq" className="text-xs text-white/60 hover:text-white transition">{c.hero_faq}</a>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-10">{c.benefits_t}</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {c.benefits.map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center mb-4">
                <b.Icon size={20} color="#fff" />
              </div>
              <h3 className="text-base font-black text-white mb-2">{b.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {c.stats.map((s, i) => (
            <motion.div key={s.l} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#D95000] leading-tight">{s.n}</div>
              <div className="text-xs text-white/60 mt-1.5">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-3">{c.earnings_t}</motion.h2>
        <p className="text-center text-xs text-white/40 mb-10">{c.earnings_sub}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {c.earnings.map((e, i) => (
            <motion.div key={e.l} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-600/5 border border-amber-500/25 text-center">
              <div className="text-xl sm:text-2xl font-black text-[var(--vgo)]">{e.n}</div>
              <div className="text-sm font-bold text-white mt-2">{e.l}</div>
              <div className="text-[11px] text-white/50 mt-1">{e.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-10">{c.support_t}</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {c.support.map((sp, i) => (
            <motion.div key={sp.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center mb-3">
                <sp.Icon size={18} color="#fff" />
              </div>
              <h3 className="text-sm font-black text-white mb-1.5">{sp.title}</h3>
              <p className="text-xs text-white/55 leading-relaxed">{sp.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-3">{c.stories_t}</motion.h2>
        <p className="text-center text-xs text-white/40 mb-10">{c.stories_sub}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {c.stories.map((st, i) => (
            <motion.div key={st.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 rounded-3xl bg-white/5 border border-white/10">
              <Quote size={36} strokeWidth={1} className="absolute top-3 right-3 text-[var(--vgo)] opacity-10" />
              <p className="text-sm text-white/75 leading-[1.8] mb-5">"{st.quote}"</p>
              <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center text-xs font-black shrink-0">{st.name[0]}</div>
                <div className="min-w-0">
                  <div className="text-sm font-black text-white truncate">{st.name}</div>
                  <div className="text-[11px] text-white/40 truncate">{st.tag}</div>
                </div>
                <BadgeCheck size={14} className="text-[var(--vgo)] ml-auto shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-10">{c.flow_t}</motion.h2>
        <div className="space-y-4">
          {c.steps.map((s, i) => (
            <motion.div key={s.n} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5 items-start p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center font-black text-lg">{s.n}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h3 className="text-base font-black text-white">{s.title}</h3>
                  <span className="text-[11px] font-bold text-[var(--vgo)] shrink-0">{s.time}</span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-10">{c.skills_t}</motion.h2>
        <div className="flex flex-wrap justify-center gap-3">
          {c.skills.map((s, i) => (
            <motion.span key={s} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/15 text-sm font-semibold text-white/85">
              {s}
            </motion.span>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-10">{c.docs_t}</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {c.docs.map((d, i) => (
            <motion.div key={d} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
              <CheckCircle2 size={16} className="text-[var(--vgo)] shrink-0 mt-0.5" />
              <span className="text-sm text-white/75">{d}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="faq" className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-black text-center mb-10">{c.faq_t}</motion.h2>
        <div className="space-y-3">
          {c.faqs.map(([q, a], i) => (
            <motion.div key={q} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}>
              <details className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                <summary className="cursor-pointer p-5 flex items-center justify-between gap-4 font-bold text-sm text-white hover:bg-white/5 transition list-none">
                  <span>{q}</span>
                  <span className="text-[var(--vgo)] group-open:rotate-45 transition-transform text-xl leading-none shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-white/60 leading-[1.8]">{a}</div>
              </details>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="apply" className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-16 pb-32">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-[#FF8A1F] to-[#D95000] p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,.25), transparent 70%)" }} />
          <div className="relative">
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-4">{c.cta_t}</h2>
            <p className="text-sm text-white/85 mb-8 max-w-md mx-auto">{c.cta_s}</p>
            <a href="mailto:support.vgo@gmail.com" className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-white text-[#D95000] font-black text-base shadow-2xl hover:scale-105 active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">
              {c.cta_btn} <ArrowRight size={18} />
            </a>
            <p className="text-xs text-white/60 mt-4">{c.cta_note}</p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
```

## File: src/app/offers/page.tsx
```typescript
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Gift, Store, Wrench, User, Check, Clock, Shield, TrendingUp, Sparkles } from "lucide-react";
import Link from "next/link";
import { OFFERS as L } from "@/data/offers";

type Tab = "customer" | "merchant" | "tech";
type LangKey = "zh" | "en" | "ms";

const HOW_STEPS = {
  zh: [
    { n: "01", t: "注册账号", d: "下载 App，用手机号注册，完成实名认证" },
    { n: "02", t: "领取福利", d: "进入「我的福利」页面，点击对应按钮领取" },
    { n: "03", t: "下单使用", d: "下单时自动抵扣或生效，无需输入优惠码" },
  ],
  en: [
    { n: "01", t: "Sign Up", d: "Download the app, register with your phone, complete verification" },
    { n: "02", t: "Claim Offer", d: "Go to \"My Offers\", tap the claim button" },
    { n: "03", t: "Auto Apply", d: "Applied automatically at checkout — no promo code needed" },
  ],
  ms: [
    { n: "01", t: "Daftar", d: "Muat turun app, daftar dengan nombor telefon, sahkan identiti" },
    { n: "02", t: "Tuntut", d: "Pergi ke \"Tawaran Saya\", ketik butang tuntut" },
    { n: "03", t: "Guna Automatik", d: "Digunakan secara automatik semasa checkout — tiada kod promosi" },
  ],
};

const RULES = {
  zh: [
    "每个账号仅限领取一次",
    "福利限首批用户/商家/师傅，领完即止",
    "不得与其他活动叠加使用",
    "平台保留活动最终解释权",
    "如有作弊行为，平台有权取消资格",
  ],
  en: [
    "One claim per account",
    "Limited to the first batch of users/merchants/technicians — while stocks last",
    "Cannot be combined with other promotions",
    "Platform reserves the right of final interpretation",
    "Cheating will result in disqualification",
  ],
  ms: [
    "Satu tuntutan per akaun",
    "Terhad kepada kelompok pertama pengguna/peniaga/juruteknik — selagi stok ada",
    "Tidak boleh digabung dengan promosi lain",
    "Platform berhak tafsir akhir",
    "Penipuan akan menyebabkan ketidaklayakan",
  ],
};

const LABELS = {
  zh: { how_t: "如何领取", how_sub: "3 步搞定", rule_t: "活动规则", rule_sub: "请仔细阅读", note_t: "温馨提示" },
  en: { how_t: "How to Claim", how_sub: "3 Simple Steps", rule_t: "Terms & Rules", rule_sub: "Please read carefully", note_t: "Important" },
  ms: { how_t: "Cara Menuntut", how_sub: "3 Langkah Mudah", rule_t: "Terma & Peraturan", rule_sub: "Sila baca dengan teliti", note_t: "Penting" },
};

export default function OffersPage() {
  const [tab, setTab] = useState<Tab>("customer");
  const [lang, setLang] = useState<LangKey>("zh");
  const t = L[lang];
  const labels = LABELS[lang];
  const howSteps = HOW_STEPS[lang];
  const rules = RULES[lang];

  const TABS = [
    { id: "customer" as Tab, label: t.tab_customer, Icon: User },
    { id: "merchant" as Tab, label: t.tab_merchant, Icon: Store },
    { id: "tech" as Tab, label: t.tab_tech, Icon: Wrench },
  ];

  const cur = tab === "customer"
    ? { title: t.customer_title, desc: t.customer_desc, pts: t.customer_p, color: "from-orange-500 to-amber-600", accent: "#FF6600" }
    : tab === "merchant"
    ? { title: t.merchant_title, desc: t.merchant_desc, pts: t.merchant_p, color: "from-emerald-500 to-teal-600", accent: "#059669" }
    : { title: t.tech_title, desc: t.tech_desc, pts: t.tech_p, color: "from-blue-500 to-indigo-600", accent: "#2563EB" };

  return (
    <main className="relative min-h-screen bg-gray-950 text-white noise overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora absolute top-0 left-1/4 w-[600px] h-[300px] rounded-full bg-[#FFB800] blur-[160px] opacity-20" />
        <div className="aurora-2 absolute bottom-0 right-1/4 w-[500px] h-[250px] rounded-full bg-[#FF6600] blur-[140px] opacity-15" />
      </div>

      {/* 顶部返回 */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 pt-8 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition">
          <ArrowLeft size={16} /><span>V'GO</span>
        </Link>
        <div className="flex gap-2">
          {(["zh", "en", "ms"] as LangKey[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`text-xs font-bold px-3 py-1.5 rounded-full transition ${
                lang === l ? "bg-[var(--vgo)] text-white" : "bg-white/10 text-white/60 hover:bg-white/20"
              }`}
            >
              {l === "zh" ? "中" : l === "en" ? "EN" : "BM"}
            </button>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 pt-12 pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-semibold mb-6"
        >
          <Gift size={14} className="text-[#FFB800]" />
          {t.label}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black leading-tight tracking-tight"
        >
          <span className="text-[#D95000]">
            {t.title}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-4 text-sm sm:text-base text-white/60"
        >
          {t.sub}
        </motion.p>
      </section>

      {/* Tabs */}
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8">
        <div className="flex justify-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-1.5">
          {TABS.map((tb) => (
            <button
              key={tb.id}
              onClick={() => setTab(tb.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-[transform,box-shadow,opacity,width,background-color] ${
                tab === tb.id
                  ? "bg-gradient-to-b from-[var(--vgo)] to-[var(--vgo-dark)] text-white shadow-lg shadow-orange-500/30"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <tb.Icon size={16} strokeWidth={2.4} />
              {tb.label}
            </button>
          ))}
        </div>
      </section>

      {/* 优惠内容 */}
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl overflow-hidden border border-white/10"
          >
            <div className={`bg-gradient-to-br ${cur.color} p-8 sm:p-10 relative overflow-hidden`}>
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,.25), transparent 70%)" }} />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 backdrop-blur text-[10px] font-black uppercase tracking-widest mb-4">
                  <Sparkles size={11} /> 限时
                </div>
                <h2 className="text-2xl sm:text-3xl font-black mb-3 text-white">{cur.title}</h2>
                <p className="text-sm sm:text-base text-white/90 mb-6">{cur.desc}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {cur.pts.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs sm:text-sm text-white/95">
                      <Check size={14} strokeWidth={3} className="shrink-0 mt-0.5" />{p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-6 border-t border-white/10">
              <a
                href="/#download"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-black hover:scale-[1.02] active:scale-95 transition-[transform,box-shadow,opacity,width,background-color] shadow-lg shadow-orange-500/40"
              >
                {t.cta}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 如何领取 */}
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-black mb-2">{labels.how_t}</h2>
          <p className="text-sm text-white/50">{labels.how_sub}</p>
        </motion.div>
        <div className="space-y-4">
          {howSteps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 items-start p-5 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center font-black text-lg">
                {s.n}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-black text-white mb-1">{s.t}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 活动规则 */}
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 rounded-3xl bg-amber-500/5 border border-amber-500/20"
        >
          <div className="flex items-center gap-2 mb-2">
            <Shield size={18} className="text-amber-400" />
            <h2 className="text-xl font-black text-white">{labels.rule_t}</h2>
          </div>
          <p className="text-xs text-white/40 mb-5">{labels.rule_sub}</p>
          <ul className="space-y-3">
            {rules.map((r, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/75">
                <span className="shrink-0 w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-black flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                {r}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* 提示 */}
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 pb-12">
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
          <Clock size={18} className="text-[var(--vgo)] shrink-0 mt-0.5" />
          <div>
            <div className="text-sm font-black text-white mb-1">{labels.note_t}</div>
            <p className="text-xs text-white/55 leading-relaxed">{t.note}</p>
          </div>
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-[#FF8A1F] to-[#D95000] p-8 sm:p-10 text-center relative overflow-hidden"
        >
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,.25), transparent 70%)" }} />
          <div className="relative">
            <TrendingUp size={28} className="text-white/90 mx-auto mb-4" />
            <h2 className="text-xl sm:text-2xl font-black text-white mb-3">名额有限，先到先得</h2>
            <p className="text-sm text-white/80 mb-6 max-w-md mx-auto">首批福利限时限量，领完为止</p>
            <a
              href="/#download"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-white text-[#D95000] font-black shadow-2xl hover:scale-105 active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]"
            >
              {t.cta} <ArrowLeft size={16} className="rotate-180" />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
```

## File: src/app/partner/page.tsx
```typescript
"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft, TrendingUp, MapPin, Target, Globe, Mail, MessageCircle, Sparkles, Store, Wrench, Crown, Briefcase } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function PartnerPage() {
  const { t } = useLang();

  const WHY = [
    { Icon: TrendingUp, title: t("partner_why_1_title"), desc: t("partner_why_1_desc") },
    { Icon: MapPin,     title: t("partner_why_2_title"), desc: t("partner_why_2_desc") },
    { Icon: Target,     title: t("partner_why_3_title"), desc: t("partner_why_3_desc") },
    { Icon: Globe,      title: t("partner_why_4_title"), desc: t("partner_why_4_desc") },
  ];

  const TRACTION = [
    { num: "6 大", label: t("partner_traction_1") },
    { num: "亚庇", label: t("partner_traction_2") },
    { num: "首批", label: t("partner_traction_3") },
    { num: "全马", label: t("partner_traction_4") },
  ];

  const COOP = [
    { Icon: Store,     title: t("coop_merchant_t"), desc: t("coop_merchant_d"), cta: t("coop_merchant_cta"), href: "#merchant" },
    { Icon: Wrench,    title: t("coop_tech_t"),     desc: t("coop_tech_d"),     cta: t("coop_tech_cta"),     href: "#technician" },
    { Icon: Crown,     title: t("coop_agent_t"),    desc: t("coop_agent_d"),    cta: t("coop_agent_cta"),    href: "mailto:support.vgo@gmail.com?subject=V'GO%20Regional%20Agent%20Application" },
    { Icon: Briefcase, title: t("coop_invest_t"),   desc: t("coop_invest_d"),   cta: t("coop_invest_cta"),   href: "mailto:support.vgo@gmail.com?subject=V'GO%20Investment%20Partnership" },
  ];

  const FLOW = [
    { n: "01", t: t("flow_1_t"), d: t("flow_1_d") },
    { n: "02", t: t("flow_2_t"), d: t("flow_2_d") },
    { n: "03", t: t("flow_3_t"), d: t("flow_3_d") },
    { n: "04", t: t("flow_4_t"), d: t("flow_4_d") },
    { n: "05", t: t("flow_5_t"), d: t("flow_5_d") },
  ];

  const EARN = [
    {
      title: t("earn_merchant_t"),
      rows: [
        [t("earn_merchant_1"), t("earn_merchant_1_v")],
        [t("earn_merchant_2"), t("earn_merchant_2_v")],
        [t("earn_merchant_3"), t("earn_merchant_3_v")],
      ],
    },
    {
      title: t("earn_tech_t"),
      rows: [
        [t("earn_tech_1"), t("earn_tech_1_v")],
        [t("earn_tech_2"), t("earn_tech_2_v")],
        [t("earn_tech_3"), t("earn_tech_3_v")],
      ],
    },
  ];

  return (
    <main className="relative min-h-screen bg-gray-950 text-white noise overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora absolute top-0 left-1/4 w-[600px] h-[300px] rounded-full bg-[#FFB800] blur-[160px] opacity-20" />
        <div className="aurora-2 absolute bottom-0 right-1/4 w-[500px] h-[250px] rounded-full bg-[#FF6600] blur-[140px] opacity-15" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition">
          <ArrowLeft size={16} />
          <span>V'GO</span>
        </Link>
      </div>

      {/* Hero */}
      <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 pt-12 pb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles size={14} className="text-[#FFB800]" />
          {t("partner_label")}
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black leading-[1.1] tracking-tight">
          <span className="text-[#D95000] drop-shadow-[0_0_50px_rgba(255,180,0,0.4)]">
            {t("partner_title")}
          </span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          {t("partner_intro")}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="mailto:support.vgo@gmail.com"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-bold text-base shadow-[0_10px_40px_-6px_rgba(255,150,0,0.3),inset_0_1px_0_rgba(255,255,255,0.4)] hover:shadow-[0_16px_50px_-6px_rgba(255,150,0,0.3)] hover:scale-[1.03] active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">
            <Mail size={18} />
            <span>{t("partner_contact_email")}</span>
          </a>
          <a href="https://wa.me/601172691788" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/25 text-white font-bold text-base hover:bg-white/20 hover:border-white/40 active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">
            <MessageCircle size={18} />
            <span>{t("partner_contact_whatsapp")}</span>
          </a>
        </motion.div>
      </section>

      {/* 4 种合作方式 */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black mb-4">{t("coop_title")}</h2>
          <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto leading-relaxed">{t("coop_sub")}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {COOP.map((c, i) => (
            <motion.a key={c.title} href={c.href}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group block p-7 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#FFB800]/50 hover:bg-white/8 transition-[transform,box-shadow,opacity,width,background-color]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center mb-5 shadow-lg shadow-orange-500/30">
                <c.Icon size={26} strokeWidth={2.2} className="text-white" />
              </div>
              <h3 className="text-xl font-black mb-3">{c.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-5 min-h-[72px]">{c.desc}</p>
              <div className="inline-flex items-center gap-2 text-sm font-bold text-[#FFB800] group-hover:gap-3 transition-[transform,box-shadow,opacity,width,background-color]">
                {c.cta} <span>→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* 入驻流程 */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-black mb-4">{t("flow_title")}</h2>
          <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto leading-relaxed">{t("flow_sub")}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-3">
          {FLOW.map((f, i) => (
            <motion.div key={f.n} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="text-3xl font-black text-[#D95000] leading-none mb-4">{f.n}</div>
              <h3 className="text-base font-black mb-2">{f.t}</h3>
              <p className="text-xs text-white/55 leading-relaxed">{f.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 收益预估 */}
      <section className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black mb-4">{t("earn_title")}</h2>
          <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto leading-relaxed">{t("earn_sub")}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {EARN.map((e, i) => (
            <motion.div key={e.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-7 rounded-3xl bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl border border-white/15">
              <h3 className="text-lg font-black mb-5 text-[#FFD24A]">{e.title}</h3>
              <div className="space-y-3">
                {e.rows.map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                    <span className="text-sm text-white/60">{k}</span>
                    <span className="text-base font-black">{v}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-xs text-white/40 text-center">{t("earn_note")}</p>
      </section>

      {/* 为什么 V'GO */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-5xl font-black text-center mb-12">
          {t("partner_why_title")}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {WHY.map((w, i) => (
            <motion.div key={w.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-7 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#FFB800]/40 hover:bg-white/8 transition-[transform,box-shadow,opacity,width,background-color]">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30">
                <w.Icon size={22} strokeWidth={2.2} className="text-white" />
              </div>
              <h3 className="text-lg font-black mb-2">{w.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 已有基础 */}
      <section className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-5xl font-black text-center mb-10">
          {t("partner_traction_title")}
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {TRACTION.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-center">
              <div className="text-2xl sm:text-4xl font-black text-[#D95000] leading-tight">{s.num}</div>
              <div className="text-[11px] sm:text-xs text-white/60 mt-1.5">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="p-10 sm:p-14 rounded-[32px] bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl border border-white/15">
          <h2 className="text-2xl sm:text-4xl font-black mb-4">{t("partner_cta_title")}</h2>
          <p className="text-sm sm:text-base text-white/65 mb-8 max-w-lg mx-auto leading-relaxed">{t("partner_cta_desc")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="mailto:support.vgo@gmail.com" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-bold shadow-[0_10px_40px_-6px_rgba(255,150,0,0.3)] hover:scale-[1.03] active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">
              <Mail size={18} />
              {t("partner_contact_email")}
            </a>
            <a href="https://wa.me/601172691788" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/25 text-white font-bold hover:bg-white/20 active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">
              <MessageCircle size={18} />
              {t("partner_contact_whatsapp")}
            </a>
          </div>
          <p className="mt-7 text-xs text-white/40">{t("partner_footer_note")}</p>
        </motion.div>
      </section>

      <div className="relative z-10 border-t border-white/10 py-8 text-center text-xs text-white/40">
        <div>support.vgo@gmail.com</div>
        <div className="mt-1">+60 11-7269 1788 · Kota Kinabalu, Sabah</div>
        <div className="mt-3">© 2026 V'GO (V Go On). All Rights Reserved.</div>
      </div>
    </main>
  );
}
```

## File: src/app/globals.css
```css
@import "tailwindcss";

/* ===== VGO 统一主题色（橙色系）===== */
:root, html[data-lang="zh"], html[data-lang="en"], html[data-lang="ms"] {
  --vgo: #FF6600;
  --vgo-light: #FF8A3D;
  --vgo-dark: #D95000;
  --vgo-glow: rgba(255,102,0,0.5);
  --vgo-grad-from: #FFB33D;
  --vgo-grad-via: #FF8A1F;
  --vgo-grad-to: #D95000;
}

/* ===== 流体字号系统（clamp 自动调节）===== */
/* 说明：min 是手机最小字号，vw 是随屏宽缩放，max 是桌面最大字号 */
:root {
  /* 正文 */
  --fs-xs:    clamp(10px, 0.65vw + 8px, 12px);
  --fs-sm:    clamp(12px, 0.8vw + 9.5px, 14px);
  --fs-base:  clamp(14px, 0.9vw + 11.5px, 16px);
  --fs-lg:    clamp(15px, 1vw + 12.5px, 18px);
  --fs-xl:    clamp(17px, 1.3vw + 14px, 22px);
  /* 标题 */
  --fs-2xl:   clamp(20px, 1.8vw + 15px, 28px);
  --fs-3xl:   clamp(24px, 2.5vw + 16px, 36px);
  --fs-4xl:   clamp(28px, 3.5vw + 17px, 48px);
  --fs-5xl:   clamp(32px, 4.5vw + 18px, 60px);
  --fs-6xl:   clamp(36px, 6vw + 18px, 80px);
  /* 行高（跟字号联动）*/
  --lh-tight: 1.15;
  --lh-snug:  1.3;
  --lh-body:  1.6;
  /* 间距（流体）*/
  --sp-section-y: clamp(48px, 8vw, 120px);
  --sp-gap:       clamp(16px, 2.5vw, 32px);
}

/* 全局基准字号 */
html { font-size: var(--fs-base); }

/* 大屏加宽内容区 */
@media (min-width: 1536px) {
  .max-w-7xl { max-width: 88rem; }
  .max-w-6xl { max-width: 80rem; }
}

/* 超宽屏（≥ 1920px）内容居中不拉伸 */
@media (min-width: 1920px) {
  .max-w-7xl { max-width: 96rem; }
  body { font-size: 17px; }
}

/* 折叠屏 / 平板竖屏（600-768）额外优化 */
@media (min-width: 600px) and (max-width: 768px) {
  .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

/* 减少动效（无障碍：尊重系统设置）*/
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* 深色模式（自动跟随系统）*/
@media (prefers-color-scheme: dark) {
  :root {
    --vgo: #FF7A2E;
    --vgo-glow: rgba(255,122,46,0.6);
  }
}


/* 平滑过渡 */
html, body, header, section, footer, a, button, div {
  transition: background-color 0.5s, color 0.5s, border-color 0.5s;
}

@theme {
  --color-vgo: var(--vgo);
  --color-vgo-dark: var(--vgo-dark);
  --color-vgo-light: #FFF3E8;
}

html, body {
  background: #FFFFFF;
  color: #1A1A1A;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans CJK SC", Roboto, Arial, sans-serif;
  font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11', 'ss01';
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

/* 首屏背景电影感缓推 */
@keyframes kenburns {
  0%   { transform: scale(1) translate(0, 0); }
  100% { transform: scale(1.12) translate(-1%, -1%); }
}
.kenburns { animation: kenburns 20s ease-out infinite alternate; }

/* 滚动进度条 */
@keyframes pulseGlow {
  0%,100% { box-shadow: 0 0 0 0 rgba(255,102,0,0.5); }
  50%     { box-shadow: 0 0 0 12px rgba(255,102,0,0); }
}
.pulse-glow { animation: pulseGlow 2.4s ease-in-out infinite; }

/* 无缝滚动公告 */
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee { animation: marquee 30s linear infinite; }
.marquee:hover { animation-play-state: paused; }


/* ===== Ken Burns 场景动效（图"活"起来）===== */
@keyframes kb-zoom-in {
  0%   { transform: scale(1) translate(0, 0); }
  100% { transform: scale(1.15) translate(-2%, -1%); }
}
@keyframes kb-zoom-out {
  0%   { transform: scale(1.15) translate(1%, 1%); }
  100% { transform: scale(1) translate(0, 0); }
}
@keyframes kb-pan-left {
  0%   { transform: scale(1.1) translate(2%, 0); }
  100% { transform: scale(1.1) translate(-2%, 0); }
}
@keyframes kb-pan-right {
  0%   { transform: scale(1.1) translate(-2%, 0); }
  100% { transform: scale(1.1) translate(2%, 0); }
}
.kb-zoom-in  { animation: kb-zoom-in 20s ease-in-out infinite alternate; }
.kb-zoom-out { animation: kb-zoom-out 20s ease-in-out infinite alternate; }
.kb-pan-left { animation: kb-pan-left 24s ease-in-out infinite alternate; }
.kb-pan-right{ animation: kb-pan-right 24s ease-in-out infinite alternate; }

/* hover 时暂停（尊重用户） */
.kb-zoom-in:hover, .kb-zoom-out:hover, .kb-pan-left:hover, .kb-pan-right:hover {
  animation-play-state: paused;
}

/* ═══════════════════════════════════════════
   VGO Hero — Animated Gradient Mesh + 3D Grid
   Replaces worker photo slideshow
   ═══════════════════════════════════════════ */

.vgo-hero-mesh {
  background:
    radial-gradient(ellipse 80% 60% at 20% 0%,   #FFB347 0%, transparent 55%),
    radial-gradient(ellipse 70% 70% at 85% 15%,  #FF6600 0%, transparent 60%),
    radial-gradient(ellipse 90% 70% at 50% 90%,  #D95000 0%, transparent 65%),
    linear-gradient(160deg, #1A0F05 0%, #2A1508 45%, #0F0A05 100%);
  animation: vgoMesh 14s ease-in-out infinite alternate;
}

@keyframes vgoMesh {
  0%   { background-position: 0% 0%, 100% 0%, 50% 100%, 0 0; filter: hue-rotate(0deg); }
  50%  { background-position: 10% 15%, 85% 10%, 45% 95%, 0 0; filter: hue-rotate(-8deg); }
  100% { background-position: 0% 25%, 100% 25%, 55% 90%, 0 0; filter: hue-rotate(0deg); }
}

.vgo-hero-grid {
  background-image:
    linear-gradient(rgba(255,180,80,0.15) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,180,80,0.15) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 75%);
  animation: vgoGridPan 20s linear infinite;
}

@keyframes vgoGridPan {
  0%   { background-position: 0 0, 0 0; }
  100% { background-position: 48px 48px, 48px 48px; }
}

.vgo-hero-scan {
  background: linear-gradient(180deg, transparent 0%, rgba(255,150,60,0.08) 50%, transparent 100%);
  animation: vgoScan 8s ease-in-out infinite;
}

@keyframes vgoScan {
  0%, 100% { opacity: 0.2; transform: translateY(-30%); }
  50%      { opacity: 0.7; transform: translateY(30%); }
}

/* VGO pulse glow for CTA */
@keyframes vgoPulseGlow {
  0%, 100% { box-shadow: 0 10px 30px -8px rgba(255,102,0,0.5); }
  50%      { box-shadow: 0 16px 50px -8px rgba(255,180,71,0.8); }
}
```

## File: src/components/FinalCTA.tsx
```typescript
"use client";
import { motion } from "motion/react";
import { useLang } from "@/lib/i18n";

export default function FinalCTA() {
  const { t } = useLang();
  return (
    <section id="download" className="relative bg-white px-5 py-20 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[var(--vgo)] via-[#F15800] to-[#C74A00] px-8 py-16 sm:px-16 sm:py-20 text-center text-white noise"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
            style={{ backgroundImage: "url('/shared/s01.jpg')" }}
          />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-300/20 rounded-full blur-[120px]" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-bold mb-5">
              <span className="text-lg">🎁</span>
              <span>{t("cta_voucher_banner")}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
              {t("cta_title1")}
              <br />
              {t("cta_title2")}
            </h2>
            <p className="mt-5 text-white/80 text-base sm:text-lg max-w-xl mx-auto">
              {t("cta_sub")}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="/how-it-works/customer" className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-white text-[var(--vgo-dark)] font-black text-base shadow-2xl hover:scale-105 active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">
                {t("cta_register")}
              </a>
              <a href="/services/repair" className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/40 text-white font-bold text-base hover:bg-white/25 active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">
                {t("cta_download")}
              </a>
            </div>

            <p className="mt-6 text-xs text-white/60">{t("cta_note")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

## File: src/components/Footer.tsx
```typescript
"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();

  const COLS = [
    {
      title: t("footer_col1"),
      links: [
        { label: t("footer_link_repair"),  href: "/services/repair/" },
        { label: t("footer_link_clean"),   href: "/services/clean/" },
        { label: t("footer_link_massage"), href: "/services/massage/" },
        { label: t("footer_link_errand"),  href: "/services/errand/" },
        { label: t("footer_link_market"),  href: "/services/market/" },
        { label: t("footer_link_jobs"),    href: "/services/jobs/" },
      ],
    },
    {
      title: t("footer_col2"),
      links: [
        { label: t("footer_link_partner_invest"), href: "/partner/" },
        { label: t("footer_link_merchant"),       href: "/merchant/" },
        { label: t("footer_link_tech"),           href: "/technician/" },
        { label: t("footer_link_partner"),        href: "/partner/" },
        { label: t("footer_link_open"),           href: "/partner/" },
        { label: t("footer_link_enterprise"),     href: "/partner/" },
      ],
    },
    {
      title: t("footer_col3"),
      links: [
        { label: t("footer_link_about"),    href: "/about/" },
        { label: t("footer_link_faq"),      href: "/faq/" },
        { label: t("footer_link_privacy"),  href: "/privacy/" },
        { label: t("footer_link_terms"),    href: "/terms/" },
        { label: t("footer_link_contact"),  href: "/contact/" },
        { label: t("footer_link_ip"),       href: "/ip-copyright/" },
        { label: t("footer_link_partner_agreement"), href: "/merchant-agreement/" },
      ],
    },
  ];

  return (
    <footer className="relative bg-gray-950 text-white noise overflow-hidden">
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#FF6600]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7A1F] to-[#E55A00] text-white font-black text-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                V
              </span>
              <div className="leading-none">
                <div className="font-black text-xl">Smart. Simple. Sorted.</div>
                <div className="text-[9px] font-semibold tracking-[0.2em] text-white/50 mt-0.5">Smart. Simple. Sorted.</div>
              </div>
            </div>
            <p className="text-sm text-white/55 leading-relaxed mb-6 max-w-xs whitespace-pre-line">
              {t("footer_tagline")}
            </p>

            <div className="flex gap-3">
              {[
                { name: "WhatsApp",  href: "https://wa.me/601172691788",             label: "W" },
                { name: "Facebook",  href: "https://www.facebook.com/vgo.malaysia",  label: "F" },
                { name: "Instagram", href: "https://www.instagram.com/vgo.malaysia", label: "I" },
                { name: "TikTok",    href: "https://www.tiktok.com/@vgo.malaysia",   label: "T" },
              ].map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                   className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-xs font-bold text-white/70 hover:bg-[#FF6600] hover:text-white hover:border-[#FF6600] transition-[transform,box-shadow,opacity,width,background-color]">
                  {s.label}
                </a>
              ))}
            </div>
            <div className="mt-5 space-y-1.5 text-xs text-white/50">
              <p>WhatsApp: <a href="https://wa.me/601172691788" className="text-white/75 hover:text-[var(--vgo)] transition-colors">+60 11-7269 1788</a></p>
              <p>Email: <a href="mailto:support.vgo@gmail.com" className="text-white/75 hover:text-[var(--vgo)] transition-colors">support.vgo@gmail.com</a></p>
            </div>
          </div>

          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="font-black text-sm mb-4 text-white">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("/") ? (
                      <Link href={l.href} className="text-sm text-white/55 hover:text-[var(--vgo)] transition-colors">
                        {l.label}
                      </Link>
                    ) : (
                      <a href={l.href} className="text-sm text-white/55 hover:text-[var(--vgo)] transition-colors">
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>{t("footer_copyright")}</div>
          <div className="text-[10px] text-white/40 mt-1">VGO · 由 Ventus Reflexology 运营</div>
          <div className="flex items-center gap-4">
            <span>{t("footer_location")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

## File: src/components/SideDrawer.tsx
```typescript
"use client";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import {
  Home, Wrench, Sparkles, Heart, Truck, ShoppingBag, Briefcase, Megaphone,
  Info, X, Globe, Check, UserPlus, MessageCircle, BookOpen, Gift, Users,
} from "lucide-react";
import { useState } from "react";
import { useLang, Lang } from "@/lib/i18n";

const LANGS: { code: Lang; label: string; native: string }[] = [
  { code: "zh", label: "中文", native: "简体中文" },
  { code: "en", label: "English", native: "English" },
  { code: "ms", label: "Bahasa Melayu", native: "Bahasa Melayu" },
];

export default function SideDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t, lang, setLang } = useLang();
  const [langOpen, setLangOpen] = useState(false);

  const GROUPS = [
    {
      key: "drawer_group_service",
      items: [
        { icon: Home,     label: t("nav_home"),       href: "#home" },
        { icon: Wrench,   label: t("drawer_repair"),  href: "/services/repair/" },
        { icon: Sparkles, label: t("drawer_clean"),   href: "/services/clean/" },
        { icon: Heart,    label: t("drawer_massage"), href: "/services/massage/" },
        { icon: Truck,    label: t("drawer_errand"),  href: "/services/errand/" },
      ],
    },
    {
      key: "drawer_group_market",
      items: [
        { icon: ShoppingBag, label: t("drawer_market"), href: "/services/market/" },
        { icon: Briefcase,   label: t("drawer_jobs"),   href: "/services/jobs/" },
        { icon: Megaphone,   label: t("drawer_news"),   href: "/offers/" },
      ],
    },
    {
      key: "drawer_group_about",
      items: [
        { icon: Info,     label: t("drawer_about"),  href: "/about/" },
        { icon: BookOpen, label: t("drawer_how"),    href: "/how-it-works/customer/" },
        { icon: Gift,     label: t("drawer_offers"), href: "/offers/" },
        { icon: Users,    label: t("nav_partner"),   href: "/partner/" },
      ],
    },
  ];

  const currentLang = LANGS.find((l) => l.code === lang);
  const WA = "https://wa.me/601172691788";

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm md:hidden" />
          <motion.aside initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 260 }}
            className="fixed top-0 left-0 bottom-0 z-[70] w-[82%] max-w-sm bg-white shadow-2xl flex flex-col md:hidden">
            <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <Image src="/logo-mark.svg" alt="V'GO" width={36} height={36} className="w-9 h-9 object-contain shrink-0" />
                <div className="flex flex-col leading-none">
                  <span className="font-black text-lg text-gray-900">V'GO</span>
                  <span className="text-[8px] font-semibold tracking-[0.2em] text-gray-400">Smart. Simple. Sorted.</span>
                </div>
              </div>
              <button onClick={onClose} aria-label="close" className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center text-gray-500">
                <X size={22} strokeWidth={2.5} />
              </button>
            </div>
            <div className="px-5 py-4 border-b border-gray-100 bg-gradient-to-br from-orange-50 to-white">
              <div className="flex items-center gap-2 mb-3">
                <UserPlus size={18} className="text-[var(--vgo)]" strokeWidth={2.5} />
                <span className="font-bold text-sm text-gray-900">{t("drawer_help")}</span>
              </div>
              <div className="flex gap-2">
                <a href="#download" onClick={onClose} className="flex-1 text-center py-2.5 rounded-xl bg-[var(--vgo)] text-white font-bold text-sm shadow-md">
                  {t("drawer_register")}
                </a>
                <a href="#download" onClick={onClose} className="flex-1 text-center py-2.5 rounded-xl border-2 border-[var(--vgo)] text-[var(--vgo)] font-bold text-sm">
                  {t("drawer_login")}
                </a>
              </div>
            </div>
            <nav className="flex-1 overflow-y-auto py-2">
              {GROUPS.map((g, gi) => (
                <div key={g.key} className="py-1">
                  <div className="px-5 py-2 text-[10px] font-bold tracking-[0.18em] text-gray-400 uppercase">
                    {t(g.key as any)}
                  </div>
                  {g.items.map((m, i) => (
                    <motion.a key={m.label} href={m.href} onClick={onClose}
                      initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + (gi * 4 + i) * 0.03 }}
                      className="flex items-center gap-3.5 px-5 py-3 text-orange-950 hover:bg-orange-50 hover:text-[var(--vgo)] transition group">
                      <m.icon size={20} strokeWidth={2} className="text-gray-400 group-hover:text-[var(--vgo)] transition-colors" />
                      <span className="font-medium text-[15px]">{m.label}</span>
                    </motion.a>
                  ))}
                </div>
              ))}
            </nav>
            <div className="px-5 pt-3 pb-2 border-t border-gray-100">
              <a href={WA} target="_blank" rel="noopener noreferrer" onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm shadow-md transition">
                <MessageCircle size={18} strokeWidth={2.5} />
                {t("drawer_whatsapp")}
              </a>
            </div>
            <div className="px-5 pb-5 pt-2 space-y-3">
              <div className="relative">
                <button onClick={() => setLangOpen(!langOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 hover:border-gray-300 transition">
                  <span className="flex items-center gap-2.5">
                    <Globe size={18} strokeWidth={2} className="text-gray-500" />
                    <span className="text-sm font-semibold text-gray-700">{currentLang?.label}</span>
                  </span>
                  <span className="text-[10px] text-gray-400 font-semibold uppercase">{lang === "ms" ? "BM" : lang}</span>
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.15 }}
                      className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-10">
                      {LANGS.map((l) => (
                        <button key={l.code} onClick={() => { setLang(l.code); setLangOpen(false); }}
                          className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-orange-950 hover:bg-orange-50 transition">
                          <span className="flex flex-col items-start">
                            <span className="font-semibold text-gray-900">{l.label}</span>
                            <span className="text-[10px] text-gray-400">{l.native}</span>
                          </span>
                          {lang === l.code && <Check size={16} className="text-[var(--vgo)]" />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <a href="#download" onClick={onClose}
                className="block text-center py-3.5 rounded-xl bg-[var(--vgo)] text-white font-bold shadow-lg pulse-glow">
                {t("nav_download")}
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
```

## File: src/app/privacy/page.tsx
```typescript
"use client";

import { useLang } from "@/lib/i18n";
import LegalShell from "@/components/LegalShell";

const C = {
  en: {
    label: "Privacy Policy", title: "Privacy Policy",
    updated: "Last updated: January 2026",
    lang_note: "This policy is presented in English and Bahasa Malaysia. Both versions are authoritative. In the event of any conflict, the Bahasa Malaysia version shall prevail for matters subject to CPETTR 2024 statutory disclosure (service descriptions, fees, refund policy, dispute resolution, seller information); the English version shall prevail for all other matters.",
    intro: "VGO (V Go On) respects and protects your privacy. This policy is prepared in accordance with Malaysia's Personal Data Protection Act 2010 (PDPA) and its 2024 amendments, and explains how we collect, use, and protect your personal data.",
    s1_t: "1. Data Controller",
    s1: "VGO (V Go On) is the data controller of your personal data. Our registered address is located in Malaysia.",
    s2_t: "2. Data Protection Officer (DPO)",
    s2: "VGO has voluntarily appointed a Data Protection Officer (DPO) under PDPA 2024. For privacy matters, please contact:DPO Name: Chong Kar Wei\nEmail: 待填\nPhone: 待填\nAddress: Malaysia (待填)\n\nThe DPO must be a Malaysian resident (at least 180 days per year) and proficient in Bahasa Malaysia and English.\n\nIn the event of a data breach, we will notify the regulator within 72 hours and affected users within 7 days.",
    s3_t: "3. What Data We Collect",
    s3: "When you register or use VGO, we may collect: name, phone number, email, service address, payment information (processed by third-party payment providers; we do not store card numbers), device information, usage logs, and location data.",
    s4_t: "4. How We Use Your Data",
    s4: "To provide services and dispatch orders, verify identity, process payments, offer customer support, perform security and risk control, improve the product, and comply with legal obligations. We will not use your data for other purposes without your consent.",
    s5_t: "5. Data Disclosure",
    s5: "We share only when necessary: assigned certified pros (only information needed for the job), payment processors, cloud service providers, and government authorities when required by law. We never sell your personal information.",
    s6_t: "6. Data Security Measures",
    s6: "We use industry-standard security measures: encryption in transit (HTTPS), access controls, key isolation, and audit logging. In the event of a data breach, we will promptly notify the regulator and affected users as required by law.",
    s7_t: "7. Data Retention Period",
    s7: "We retain your data during the service period and for the duration required by law, after which it is securely deleted or anonymized.",
    s8_t: "8. Your Rights (PDPA 2010)",
    s8: "Under Malaysia's Personal Data Protection Act 2010, you have the right to: access the personal data we hold about you, request correction, withdraw consent, request deletion, and data portability. Contact us to exercise these rights.",
    s9_t: "9. Cross-Border Data Transfer",
    s9: "Your data may be transferred outside Malaysia. We will ensure that the recipient provides an adequate level of data protection or implement other mechanisms as required by law.",
    s10_t: "10. Contact Us",
    s10: "For any privacy-related questions, email us at: support.vgo@gmail.com",
    s11_t: "11. Language Version",
    s11: "This policy is executed in the English language. The English version shall be the authoritative and controlling version. The Bahasa Malaysia version is provided solely to comply with the PDPA and for the convenience of users. In the event of any inconsistency or conflict, the English version shall prevail in all respects.",
  },
  ms: {
    label: "Polisi Privasi", title: "Polisi Privasi",
    updated: "Kemas kini terakhir: Januari 2026",
    lang_note: "Polisi ini disediakan dalam Bahasa Inggeris dan Bahasa Malaysia. Kedua-dua versi adalah berwibawa. Sekiranya berlaku percanggahan, versi Bahasa Malaysia akan diguna pakai bagi perkara yang tertakluk kepada pendedahan statutori CPETTR 2024 (penerangan perkhidmatan, fi, dasar bayaran balik, penyelesaian pertikaian, maklumat penjual); versi Bahasa Inggeris akan diguna pakai bagi semua perkara lain.",
    intro: "VGO (V Go On) menghormati dan melindungi privasi anda. Polisi ini disediakan selaras dengan Akta Perlindungan Data Peribadi 2010 (PDPA) dan pindaan 2024, dan menerangkan bagaimana kami mengumpul, menggunakan, dan melindungi data peribadi anda.",
    s1_t: "1. Pengawal Data",
    s1: "VGO (V Go On) ialah pengawal data bagi data peribadi anda. Alamat berdaftar kami terletak di Malaysia.",
    s2_t: "2. Pegawai Perlindungan Data (DPO)",
    s2: "VGO secara sukarela telah melantik Pegawai Perlindungan Data (DPO) di bawah PDPA 2024. Untuk perkara privasi, sila hubungi:Nama DPO: Chong Kar Wei\nE-mel: 待填\nTelefon: 待填\nAlamat: Malaysia (待填)\n\nDPO mestilah pemastautin Malaysia (sekurang-kurangnya 180 hari setahun) dan mahir dalam Bahasa Malaysia dan Bahasa Inggeris.\n\nJika berlaku kebocoran data, kami akan memaklumkan pengawal selia dalam 72 jam dan pengguna terjejas dalam 7 hari.",
    s3_t: "3. Data Apa Yang Kami Kumpul",
    s3: "Apabila anda mendaftar atau menggunakan VGO, kami mungkin mengumpul: nama, nombor telefon, e-mel, alamat perkhidmatan, maklumat pembayaran (diproses oleh pembekal pihak ketiga; kami tidak simpan nombor kad), maklumat peranti, log penggunaan, dan data lokasi.",
    s4_t: "4. Bagaimana Kami Guna Data Anda",
    s4: "Untuk menyediakan perkhidmatan dan tempahan, mengesahkan identiti, memproses pembayaran, sokongan pelanggan, kawalan keselamatan, penambahbaikan produk, dan mematuhi kewajipan undang-undang. Kami tidak akan menggunakan data anda untuk tujuan lain tanpa kebenaran.",
    s5_t: "5. Pendedahan Data",
    s5: "Kami berkongsi hanya jika perlu: tukang bertauliah yang ditugaskan (hanya maklumat yang diperlukan), pemproses pembayaran, pembekal perkhidmatan awan, dan pihak berkuasa apabila dikehendaki undang-undang. Kami tidak menjual maklumat peribadi anda.",
    s6_t: "6. Langkah Keselamatan Data",
    s6: "Kami menggunakan langkah keselamatan standard industri: penyulitan semasa penghantaran (HTTPS), kawalan akses, pengasingan kunci, dan audit log. Jika berlaku kebocoran data, kami akan memaklumkan pengawal selia dan pengguna yang terjejas seperti yang dikehendaki undang-undang.",
    s7_t: "7. Tempoh Penyimpanan Data",
    s7: "Kami menyimpan data anda sepanjang tempoh perkhidmatan dan tempoh yang dikehendaki undang-undang, selepas itu dipadam atau dianonimkan dengan selamat.",
    s8_t: "8. Hak Anda (PDPA 2010)",
    s8: "Di bawah Akta Perlindungan Data Peribadi 2010 Malaysia, anda berhak: mengakses data peribadi kami simpan, meminta pembetulan, menarik balik persetujuan, meminta pemadaman, dan mudah alih data. Hubungi kami untuk melaksanakannya.",
    s9_t: "9. Pemindahan Data Merentas Sempadan",
    s9: "Data anda mungkin dipindahkan ke luar Malaysia. Kami akan memastikan penerima menyediakan tahap perlindungan data yang mencukupi atau melaksanakan mekanisme lain seperti yang dikehendaki undang-undang.",
    s10_t: "10. Hubungi Kami",
    s10: "Untuk sebarang pertanyaan privasi, e-mel kami di: support.vgo@gmail.com",
    s11_t: "11. Versi Bahasa",
    s11: "Polisi ini dilaksanakan dalam Bahasa Inggeris. Versi Bahasa Inggeris adalah versi yang berwibawa dan mengikat. Versi Bahasa Malaysia disediakan semata-mata untuk mematuhi PDPA dan untuk kemudahan pengguna. Sekiranya terdapat sebarang ketidakselarasan atau percanggahan, versi Bahasa Inggeris akan diutamakan dalam semua aspek.",
  },
} as const;

export default function PrivacyPage() {
  const { lang } = useLang();
  const c = (C as any)[lang] ?? C.en;
  const SECTIONS = [
    { t: c.s1_t, d: c.s1 }, { t: c.s2_t, d: c.s2 }, { t: c.s3_t, d: c.s3 },
    { t: c.s4_t, d: c.s4 }, { t: c.s5_t, d: c.s5 }, { t: c.s6_t, d: c.s6 },
    { t: c.s7_t, d: c.s7 }, { t: c.s8_t, d: c.s8 }, { t: c.s9_t, d: c.s9 },
    { t: c.s10_t, d: c.s10 }, { t: c.s11_t, d: c.s11 },
  ];
  return (
    <LegalShell label={c.label} title={c.title} version={c.updated}>
      <div className="note-box">{c.lang_note}</div>
      <p>{c.intro}</p>
      {SECTIONS.map((s) => (
        <section key={s.t}>
          <h2>{s.t}</h2>
          <p className="sub whitespace-pre-line">{s.d}</p>
        </section>
      ))}
    </LegalShell>
  );
}
```

## File: src/components/FeatureCards.tsx
```typescript
"use client";
import { motion } from "motion/react";
import { Wrench, Sparkles, Heart, Truck, ShoppingBag, Briefcase, ArrowRight, Info } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { useState } from "react";
import Link from "next/link";
import ServiceModal from "./ServiceModal";
import { SERVICES as SERVICE_DATA, ServiceItem } from "@/data/services";

export default function FeatureCards() {
  const { t, lang } = useLang();
  const [modal, setModal] = useState<ServiceItem | null>(null);

  // 换图策略：无人物工作场景，避免品牌风险
  // 图片精准配对：有合适图用图，没合适的用色块+大图标
  const SERVICES = [
    { id: "repair",  Icon: Wrench,      titleKey: "svc_repair",  descKey: "svc_repair_desc",  img: "/features/repair.jpg",  grad: null,                                       href: "/services/repair/" },
    { id: "clean",   Icon: Sparkles,    titleKey: "svc_clean",   descKey: "svc_clean_desc",   img: null,                    grad: "linear-gradient(135deg, #60A5FA 0%, #0891B2 100%)", href: "/services/clean/" },
    { id: "massage", Icon: Heart,       titleKey: "svc_massage", descKey: "svc_massage_desc", img: null,                    grad: "linear-gradient(135deg, #F472B6 0%, #DB2777 100%)", href: "/services/massage/" },
    { id: "errand",  Icon: Truck,       titleKey: "svc_errand",  descKey: "svc_errand_desc",  img: "/features/errand.jpg",  grad: null,                                       href: "/services/errand/" },
    { id: "market",  Icon: ShoppingBag, titleKey: "svc_market",  descKey: "svc_market_desc",  img: "/features/market.jpg",  grad: null,                                       href: "/services/market/" },
    { id: "jobs",    Icon: Briefcase,   titleKey: "svc_jobs",    descKey: "svc_jobs_desc",    img: "/features/jobs.jpg",    grad: null,                                       href: "/services/jobs/" },
  ];

  return (
    <section id="features" className="relative bg-white py-20 sm:py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[var(--vgo)] font-bold text-sm tracking-widest uppercase mb-3">
            {t("sec_services_label")}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            {t("sec_services_title")}
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            {t("sec_services_sub")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06, type: "spring", stiffness: 80 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-900 shadow-lg hover:shadow-2xl transition-[transform,box-shadow,opacity,width,background-color] duration-500 aspect-[4/5] sm:aspect-[4/3]"
            >
              {s.img ? (
                <>
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-55 group-hover:opacity-85 group-hover:scale-105 transition-[transform,box-shadow,opacity,width,background-color] duration-700"
                    style={{ backgroundImage: `url('${s.img}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20" />
                </>
              ) : (
                <>
                  <div className="absolute inset-0" style={{ background: s.grad || 'linear-gradient(135deg,#FF8C42,#FF6600)' }} />
                  <div
                    className="absolute -top-10 -right-10 w-44 h-44 rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(255,255,255,.28), transparent 70%)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25">
                    <s.Icon size={140} strokeWidth={1.2} color="#fff" />
                  </div>
                </>
              )}
              <div className="relative h-full flex flex-col justify-end p-4 sm:p-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                  <s.Icon size={20} strokeWidth={2.2} className="text-white" />
                </div>
                <h3 className="font-black text-white text-base sm:text-xl leading-tight">
                  {t(s.titleKey as any)}
                </h3>
                <p className="text-[11px] sm:text-xs text-white/80 mt-1 leading-snug">
                  {t(s.descKey as any)}
                </p>
                <div className="mt-2.5 flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const data = SERVICE_DATA[lang].items.find((x) => x.id === s.id);
                      if (data) setModal(data);
                    }}
                    className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-[#FFA05A] hover:text-white transition-colors"
                  >
                    <Info size={12} /> {t("svc_more_info" as any) || "详情"}
                  </button>
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-white/70 hover:text-white transition-colors"
                  >
                    了解 <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {modal && <ServiceModal item={modal} onClose={() => setModal(null)} />}
    </section>
  );
}
```

## File: src/components/HowItWorksPage.tsx
```typescript
"use client";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight, User, Store, Wrench, ShieldAlert, LucideIcon,
  ClipboardList, Sparkles, MapPin, Wallet,
  FileText, LayoutGrid, Bell,
  UserCheck, Zap, Home,
  XCircle, CheckCircle2,
} from "lucide-react";
import { useLang } from "@/lib/i18n";

type Role = "customer" | "merchant" | "technician";

const IMG = {
  pain_c: [
    "/how-it-works/p-c1.jpg",
    "/how-it-works/p-c2.jpg",
    "/how-it-works/p-c3.jpg",
  ],
  solve_c: [
    "/how-it-works/hero-c.jpg",
    "/how-it-works/hero-m.jpg",
    "/how-it-works/s-c3.jpg",
  ],
  before_c: "/how-it-works/b-c.jpg",
  after_c:  "/how-it-works/hero-t.jpg",
  pain_m: [
    "/how-it-works/p-m1.jpg",
    "/how-it-works/p-m2.jpg",
    "/how-it-works/p-m3.jpg",
  ],
  solve_m: [
    "/how-it-works/hero-m.jpg",
    "/how-it-works/s-m2.jpg",
    "/how-it-works/s-m3.jpg",
  ],
  before_m: "/how-it-works/b-m.jpg",
  after_m:  "/how-it-works/hero-m.jpg",
  pain_t: [
    "/how-it-works/p-t1.jpg",
    "/how-it-works/p-m2.jpg",
    "/how-it-works/p-t3.jpg",
  ],
  solve_t: [
    "/how-it-works/hero-t.jpg",
    "/how-it-works/hero-c.jpg",
    "/how-it-works/hero-m.jpg",
  ],
  before_t: "/how-it-works/b-t.jpg",
  after_t:  "/how-it-works/hero-t.jpg",
};

const L = {
  zh: {
    label: "操作指南", reviews_title: "用户评价（示例）", scroll: "向下滑动", cta: "立即注册", other: "查看其他角色指南",
    pain_title: "你是不是也遇到过", solve_title: "VGO 怎么帮你解决",
    flow_title: "4 步搞定", before_t: "没有 VGO 时", after_t: "有 VGO 后",
    trust_title: "值得信赖", disclaimer: "本页为流程概览，不构成合同要约。手续费、结算、质保等具体条款，以您签署的《VGO 协议》为准。",
    roles: {
      customer: {
        tag: "客户指南", title: "家里有事，30 秒找到师傅",
        sub: "认证师傅上门 · 报价透明 · 平台质保",
        pains: [["找不到靠谱师傅","熟人介绍靠运气，网上找怕遇坑"],["报价不清楚","上门才报价，说多少是多少"],["出问题没人管","服务不满意，投诉无门"]],
        solves: [["认证师傅","实名认证 + 证件审核，可查可追溯"],["下单前看清价","标准服务平台定价，其他服务师傅公开报价"],["质保兜底","平台介入，售后有保障"]],
        steps: [["提交需求","选服务、时间、地址，即时查看预估报价"],["智能匹配","系统推荐附近认证师傅，可查看评分和报价"],["上门服务","认证师傅按时到达，服务前确认最终价格"],["付款评价","App 内安全支付，完成后评价打分"]],
        before: ["靠熟人介绍","等电话等回复","上门才报价","出问题没人管"],
        after: ["30 秒找到人","就近自动匹配","下单前看清价","平台质保兜底"],
        trust: [["亚庇","首发城市"],["首批","邀请制"],["30+","服务类目"],["100%","平台运营"]],
      },
      merchant: {
        tag: "商家指南", title: "让全马客户，找到你的店",
        sub: "平台导流 · 透明手续费 · 免费店铺页",
        pains: [["没客流等客上门","守店等客，生意越做越难"],["手续费重利润薄","平台抽成多，到手工钱少"],["不懂线上运营","想触网，不知从哪下手"]],
        solves: [["平台导流","12K+ 家庭用户，订单主动到家"],["透明手续费","无隐藏收费，合作清清楚楚"],["免费店铺页","一键上架服务，无需技术"]],
        steps: [["申请入驻","提交资料，免费创建店铺页"],["上架服务","配置服务和价格，平台首页推荐曝光"],["接收订单","客户下单，App 即时通知"],["结算售后","平台自动结算入账，协助处理售后"]],
        before: ["守店等客上门","抽成多到手的少","想触网不懂技术","没有线上曝光"],
        after: ["订单主动到家","手续费透明清晰","零技术一键上架","平台首页推荐"],
        trust: [["首批","邀请制"],["0 元","入驻费用"],["免费","店铺页面"],["自动","结算入账"]],
      },
      technician: {
        tag: "师傅指南", title: "有手艺，就有单",
        sub: "智能派单 · 平台担保 · 自动打款",
        pains: [["靠熟人没稳定单","等介绍、等回头客，收入不稳"],["做完怕收不到钱","客户拖款、跑单，白干一场"],["客户压价","比价、杀价，辛苦钱被砍"]],
        solves: [["智能派单","就近自动派单 + 抢单池，单不断"],["平台担保","完工确认，平台自动打款"],["报价更公平","标准服务平台定价，其他服务自主报价"]],
        steps: [["注册认证","提交技能和证件，平台审核认证"],["智能接单","就近派单或抢单，单源持续稳定"],["上门服务","按时到达，平台担保交易"],["自动打款","完工确认，平台自动打款入账"]],
        before: ["靠熟人接单","客户拖款跑单","比价杀价压低","没有稳定收入"],
        after: ["系统就近派单","平台担保打款","平台标准定价","单源持续稳定"],
        trust: [["亚庇","首发城市"],["首批","邀请制"],["100%","平台运营"],["按单结算","平台规则"]],
      },
    },
  },
  en: {
    label: "How It Works", reviews_title: "Reviews (Sample)", scroll: "Scroll to explore", cta: "Sign Up Now", other: "View other role guides",
    pain_title: "Sound familiar?", solve_title: "How VGO solves it",
    flow_title: "4 Simple Steps", before_t: "Without VGO", after_t: "With VGO",
    trust_title: "Trusted by Thousands", disclaimer: "This page is a process overview and does not constitute a contractual offer. Fees, settlement and warranty terms are subject to the VGO Agreement you sign.",
    roles: {
      customer: {
        tag: "Customer Guide", title: "Need help? Find a technician in 30s",
        sub: "Certified technicians · Transparent pricing · Platform warranty",
        pains: [["Hard to find reliable help","Referrals are risky, online is a gamble"],["Unclear pricing","Quoted only on site, no control"],["No after-sales support","Complaints go nowhere"]],
        solves: [["Certified technicians","ID verified + credential checked"],["See price before you book","Standard services platform-priced, others quoted publicly"],["Platform warranty","We step in if issues arise"]],
        steps: [["Post Request","Pick service, time, address — see upfront quote"],["Smart Match","See nearby certified technicians with ratings & prices"],["On-Site Service","Pro arrives on time, confirm final price first"],["Pay & Rate","Secure in-app payment, then rate"]],
        before: ["Ask friends for leads","Wait for callbacks","Quoted on site only","No one to complain to"],
        after: ["Find help in 30s","Auto-matched nearby","See price upfront","Platform warranty"],
        trust: [["KK","Launch City"],["By invite","Beta Access"],["6","Core Services"],["100%","Platform-run"]],
      },
      merchant: {
        tag: "Merchant Guide", title: "Get found by customers nationwide",
        sub: "Platform traffic · Transparent fees · Free store page",
        pains: [["No foot traffic","Waiting for walk-ins, sales falling"],["High fees, thin margin","Fees eat your earnings"],["No idea how to go online","Want digital but lack tech"]],
        solves: [["Platform traffic","12K+ families, orders come to you"],["Transparent fees","No hidden charges, clear terms"],["Free store page","One-click listing, zero tech"]],
        steps: [["Apply","Submit info, get a free store page"],["List Services","Configure services & prices, featured on homepage"],["Receive Orders","Get instant in-app notifications"],["Settle & Support","Auto settlement, plus after-sales support"]],
        before: ["Wait for walk-ins","High commissions","No tech skills","Zero online exposure"],
        after: ["Orders come to you","Transparent fees","One-click listing","Featured on platform"],
        trust: [["By invite","Beta access"],["Free","Onboarding"],["Free","Store page"],["Auto","Settlement"]],
      },
      technician: {
        tag: "Technician Guide", title: "Have skills? Get jobs",
        sub: "Smart dispatch · Platform guarantee · Auto payout",
        pains: [["No steady jobs","Reliant on referrals, unstable income"],["Fear of non-payment","Clients delay or skip, wasted work"],["Undercut by clients","Price haggling kills your margin"]],
        solves: [["Smart dispatch","Nearby auto-dispatch + grab pool"],["Platform guarantee","Auto payout upon completion"],["Fairer pricing","Platform-priced standard services, quote your own for others"]],
        steps: [["Register & Verify","Submit skills & docs, get verified"],["Take Jobs","Nearby dispatch or grab, steady jobs"],["On-Site Service","Arrive on time, platform-secured transaction"],["Auto Payout","Complete job, auto payout to your account"]],
        before: ["Rely on referrals","Fear of non-payment","Price haggling","Unstable income"],
        after: ["Auto dispatch nearby","Guaranteed payout","Fair platform pricing","Steady jobs"],
        trust: [["KK","Launch City"],["By invite","Beta access"],["100%","Platform-run"],["Per order","Platform rules"]],
      },
    },
  },
  ms: {
    label: "Panduan", reviews_title: "Ulasan (Contoh)", scroll: "Tatal ke bawah", cta: "Daftar Sekarang", other: "Lihat panduan peranan lain",
    pain_title: "Pernah alami?", solve_title: "Cara VGO selesaikan",
    flow_title: "4 Langkah Mudah", before_t: "Tanpa VGO", after_t: "Dengan VGO",
    trust_title: "Dipercayai Ramai", disclaimer: "Halaman ini adalah gambaran proses dan bukan tawaran kontrak. Terma caj, penyelesaian dan jaminan tertakluk kepada Perjanjian VGO yang anda tandatangani.",
    roles: {
      customer: {
        tag: "Panduan Pelanggan", title: "Ada masalah? Cari juruteknik dalam 30s",
        sub: "Juruteknik bertauliah · Harga telus · Jaminan platform",
        pains: [["Sukar cari tukang dipercayai","Rujukan kawan berisiko, dalam talian pun takut"],["Harga tak jelas","Hanya quote di lokasi, tak boleh kawal"],["Tiada sokongan selepas jualan","Aduan tak sampai mana"]],
        solves: [["Juruteknik bertauliah","Pengesahan ID + dokumen"],["Lihat harga sebelum tempah","Servis standard harga platform, lain quote terbuka"],["Jaminan platform","Kami masuk campur jika ada isu"]],
        steps: [["Hantar Permintaan","Pilih servis, masa, alamat — lihat sebut harga awal"],["Padanan Pintar","Lihat juruteknik berhampiran dengan penilaian & harga"],["Servis di Lokasi","Pakar tiba tepat masa, sahkan harga dahulu"],["Bayar & Ulas","Bayar selamat dalam app, kemudian beri ulasan"]],
        before: ["Tanya kawan cari orang","Tunggu panggilan balik","Hanya quote di lokasi","Tiada tempat aduan"],
        after: ["Cari bantuan dalam 30s","Auto-padan berhampiran","Lihat harga di depan","Jaminan platform"],
        trust: [["KK","Bandar Pelancaran"],["Jemputan","Akses Beta"],["6","Servis Utama"],["100%","Platform"]],
      },
      merchant: {
        tag: "Panduan Peniaga", title: "Ditemui pelanggan seluruh negara",
        sub: "Trafik platform · Caj telus · Halaman kedai percuma",
        pains: [["Tiada trafik","Tunggu pelanggan masuk, jualan merosot"],["Caj tinggi, margin tipis","Fi Perkhidmatan makan pendapatan"],["Tak tahu cara ke dalam talian","Mahu digital tapi tak ada teknologi"]],
        solves: [["Trafik platform","12K+ keluarga, pesanan datang sendiri"],["Caj telus","Tiada caj tersembunyi, terma jelas"],["Halaman kedai percuma","Senarai sekali klik, sifar teknologi"]],
        steps: [["Mohon Sertai","Hantar maklumat, dapat halaman kedai percuma"],["Senarai Servis","Tetapkan servis & harga, dipaparkan di utama"],["Terima Pesanan","Notifikasi segera dalam app"],["Selesai & Sokongan","Auto penyelesaian, sokongan selepas jualan"]],
        before: ["Tunggu pelanggan masuk","Fi Perkhidmatan tinggi","Tiada kemahiran teknologi","Sifar pendedahan dalam talian"],
        after: ["Pesanan datang sendiri","Caj telus","Senarai sekali klik","Ditampilkan di platform"],
        trust: [["Jemputan","Akses beta"],["Percuma","Pendaftaran"],["Percuma","Halaman kedai"],["Auto","Penyelesaian"]],
      },
      technician: {
        tag: "Panduan Juruteknik", title: "Ada kemahiran? Dapat kerja",
        sub: "Hantaran pintar · Jaminan platform · Bayaran auto",
        pains: [["Tiada kerja tetap","Bergantung rujukan, pendapatan tak stabil"],["Takut tak dibayar","Pelanggan lambat atau lari, kerja sia-sia"],["Ditekan harga","Tawar-menawar makan margin"]],
        solves: [["Hantaran pintar","Auto-hantar berhampiran + rebut pesanan"],["Jaminan platform","Auto bayar selepas siap"],["Harga lebih adil","Servis standard harga platform, lain quote sendiri"]],
        steps: [["Daftar & Sahkan","Hantar kemahiran & dokumen, dapat pengesahan"],["Ambil Kerja","Hantar berhampiran atau rebut, kerja stabil"],["Servis di Lokasi","Tiba tepat masa, transaksi dijamin platform"],["Bayaran Auto","Siap kerja, auto bayar ke akaun"]],
        before: ["Bergantung rujukan","Takut tak dibayar","Tawar-menawar harga","Pendapatan tak stabil"],
        after: ["Auto-hantar berhampiran","Bayaran dijamin","Harga platform adil","Kerja stabil"],
        trust: [["KK","Bandar Pelancaran"],["Jemputan","Akses beta"],["100%","Platform"],["Ikut pesanan","Peraturan platform"]],
      },
    },
  },
};

const STEP_ICONS: Record<Role, LucideIcon[]> = {
  customer:   [ClipboardList, Sparkles, MapPin, Wallet],
  merchant:   [FileText, LayoutGrid, Bell, Wallet],
  technician: [UserCheck, Zap, Home, Wallet],
};

const HERO_IMAGES: Record<Role, string> = {
  customer:   "/how-it-works/hero-c.jpg",
  merchant:   "/how-it-works/hero-m.jpg",
  technician: "/how-it-works/hero-t.jpg",
};

const ROLE_IMGS: Record<Role, { pain: string[]; solve: string[]; before: string; after: string }> = {
  customer:   { pain: IMG.pain_c,   solve: IMG.solve_c, before: IMG.before_c, after: IMG.after_c },
  merchant:   { pain: IMG.pain_m,   solve: IMG.solve_m, before: IMG.before_m, after: IMG.after_m },
  technician: { pain: IMG.pain_t,   solve: IMG.solve_t, before: IMG.before_t, after: IMG.after_t },
};

const REVIEWS: Record<"zh"|"en"|"ms", Array<{name: string; service: string; quote: string}>> = {
  zh: [
    { name: "亚庇用户 · C", service: "空调清洗", quote: "师傅很专业，提前到了 10 分钟，清洗得很干净，价格也比外面便宜。" },
    { name: "亚庇用户 · L", service: "水管维修", quote: "晚上水管爆了，很快就匹配到师傅上门，修好了才付款，很放心。" },
    { name: "亚庇用户 · W", service: "家庭保洁", quote: "阿姨打扫得很仔细，平台有保障，比找熟人放心多了。" },
  ],
  en: [
    { name: "KK User · T", service: "Air-Cond Servicing", quote: "Professional technician, arrived 10 minutes early, price better than outside." },
    { name: "KK User · L", service: "Plumbing Repair", quote: "Pipe burst at night, found a technician quickly. Paid only after it was fixed." },
    { name: "KK User · W", service: "Home Cleaning", quote: "Very thorough cleaning. The platform warranty gives real peace of mind." },
  ],
  ms: [
    { name: "Pengguna KK · T", service: "Servis Penghawa Dingin", quote: "Juruteknik profesional, tiba 10 minit awal, harga lebih baik." },
    { name: "Pengguna KK · L", service: "Baiki Paip", quote: "Paip pecah waktu malam, jumpa juruteknik dengan cepat. Bayar selepas siap." },
    { name: "Pengguna KK · W", service: "Pembersihan Rumah", quote: "Pembersih sangat teliti, jaminan platform beri ketenangan." },
  ],
};

const OTHER: Record<Role, Role[]> = {
  customer:   ["merchant","technician"],
  merchant:   ["customer","technician"],
  technician: ["customer","merchant"],
};

const META: Record<Role, { Icon: LucideIcon; href: string }> = {
  customer:   { Icon: User,   href: "/how-it-works/customer" },
  merchant:   { Icon: Store,  href: "/how-it-works/merchant" },
  technician: { Icon: Wrench, href: "/how-it-works/technician" },
};

export default function HowItWorksPage({ role }: { role: Role }) {
  const { lang } = useLang();
  const t = L[lang];
  const r = t.roles[role];
  const Icons = STEP_ICONS[role];
  const IM = ROLE_IMGS[role];
  return (
    <main className="relative min-h-screen bg-gray-950 text-white noise overflow-hidden">
      <section className="relative min-h-[70svh] flex items-center justify-center px-5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center kenburns" style={{ backgroundImage: `url('${HERO_IMAGES[role]}')` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-gray-950" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center pt-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-semibold mb-6">{t.label} · {r.tag}</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
            <span className="text-white">{r.title}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="mt-5 text-sm sm:text-base text-white/70 max-w-xl mx-auto">{r.sub}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-8">
            <a href="/#download" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-black shadow-[0_10px_40px_-6px_rgba(255,150,0,0.3)] hover:scale-[1.03] active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">{t.cta}</a>
          </motion.div>
          <p className="mt-10 text-xs text-white/40">{t.scroll} ↓</p>
        </div>
      </section>
      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <h2 className="text-2xl sm:text-4xl font-black text-center mb-10">{t.pain_title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {r.pains.map(([title, desc], i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-3xl overflow-hidden bg-white/3 border border-red-500/20">
              <div className="relative h-44 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IM.pain[i]}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-red-950/60 to-red-900/30" />
                <XCircle size={28} className="absolute top-4 right-4 text-red-400" />
              </div>
              <div className="p-6">
                <div className="font-black text-base mb-2">{title}</div>
                <div className="text-xs text-white/50 leading-relaxed">{desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <h2 className="text-2xl sm:text-4xl font-black text-center mb-10">{t.solve_title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {r.solves.map(([title, desc], i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFB800]/10 to-[#FF6600]/5 border border-[#FFB800]/25">
              <div className="relative h-44 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IM.solve[i]}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-amber-950/50 to-transparent" />
                <CheckCircle2 size={28} className="absolute top-4 right-4 text-[#FFB800]" />
              </div>
              <div className="p-6">
                <div className="font-black text-base mb-2">{title}</div>
                <div className="text-xs text-white/55 leading-relaxed">{desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="rounded-3xl overflow-hidden bg-white/3 border border-white/10">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center grayscale" style={{ backgroundImage: `url('${IM.before}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-red-950/40" />
              <div className="absolute bottom-4 left-5 text-xs font-black text-red-400 uppercase tracking-widest">{t.before_t}</div>
            </div>
            <ul className="p-6 space-y-3">
              {r.before.map((x) => (
                <li key={x} className="flex items-start gap-3 text-sm text-white/60">
                  <XCircle size={16} className="text-red-400/70 shrink-0 mt-0.5" />{x}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFB800]/10 to-[#FF6600]/5 border border-[#FFB800]/30">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${IM.after}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-amber-950/50 to-transparent" />
              <div className="absolute bottom-4 left-5 text-xs font-black text-[#FFB800] uppercase tracking-widest">{t.after_t}</div>
            </div>
            <ul className="p-6 space-y-3">
              {r.after.map((x) => (
                <li key={x} className="flex items-start gap-3 text-sm text-white/85">
                  <CheckCircle2 size={16} className="text-[#FFB800] shrink-0 mt-0.5" />{x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <h2 className="text-2xl sm:text-4xl font-black text-center mb-10">{t.flow_title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {r.steps.map(([title, desc], i) => {
            const Icon = Icons[i];
            return (
              <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 text-center">
                <div className="text-4xl font-black text-[#D95000] leading-none mb-4">0{i + 1}</div>
                <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center shadow-lg shadow-orange-500/30 mb-4">
                  <Icon size={22} className="text-white" />
                </div>
                <div className="font-black text-sm mb-1.5">{title}</div>
                <div className="text-[11px] text-white/50 leading-relaxed">{desc}</div>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <a href="/#download" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-black shadow-[0_8px_30px_-6px_rgba(255,150,0,0.3)] hover:scale-[1.02] active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">{t.cta}</a>
        </div>
      </section>
      <section className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-16">
        <h2 className="text-2xl sm:text-4xl font-black text-center mb-10">{t.trust_title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {r.trust.map(([num, label], i) => (
            <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-2xl sm:text-4xl font-black text-[#D95000] leading-tight">{num}</div>
              <div className="text-[11px] sm:text-xs text-white/60 mt-1.5">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-16">
        <h2 className="text-2xl sm:text-4xl font-black text-center mb-10">{t.reviews_title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {REVIEWS[lang].map((rv, i) => (
            <motion.div key={rv.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="flex items-center gap-1 mb-4 text-[#FFB800]">
                {"★★★★★".split("").map((_, j) => <span key={j}>★</span>)}
              </div>
              <p className="text-sm text-white/75 leading-relaxed mb-5">"{rv.quote}"</p>
              <div className="pt-4 border-t border-white/10">
                <div className="text-sm font-black">{rv.name}</div>
                <div className="text-xs text-white/40 mt-0.5">{rv.service}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-16">
        <div className="text-center mb-8">
          <a href="/#download" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-b from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white font-black shadow-[0_10px_40px_-6px_rgba(255,150,0,0.3)] hover:scale-[1.03] active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">{t.cta}</a>
        </div>
        <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex gap-3 mb-12">
          <ShieldAlert size={20} className="text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-100/80 leading-relaxed">{t.disclaimer}</p>
        </div>
        <p className="text-xs text-white/40 uppercase tracking-widest mb-4 text-center">{t.other}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {OTHER[role].map((o) => {
            const M = META[o];
            const ot = t.roles[o];
            return (
              <Link key={o} href={M.href} className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFB800]/40 hover:bg-white/8 transition-[transform,box-shadow,opacity,width,background-color] flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFB33D] to-[#D95000] flex items-center justify-center shrink-0">
                  <M.Icon size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-black">{ot.tag}</div>
                  <div className="text-xs text-white/50 mt-0.5">{ot.sub}</div>
                </div>
                <ArrowRight size={16} className="text-white/40 group-hover:text-[#FFB800] group-hover:translate-x-1 transition-[transform,box-shadow,opacity,width,background-color]" />
              </Link>
            );
          })}
        </div>
      </section>
      <div className="relative z-10 h-20" />
    </main>
  );
}
```

## File: src/components/Waitlist.tsx
```typescript
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
  const { lang, t } = useLang();
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
                                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black transition-[transform,box-shadow,opacity,width,background-color] duration-300 ${isDone ? "bg-[var(--vgo)] text-white" : isNow ? "bg-[var(--vgo)] text-white ring-4 ring-orange-500/20" : "bg-gray-100 text-gray-400"}`}>
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
                                        <h3 className="text-2xl font-black text-gray-900 mb-2">{t("waitlist_email_title")}</h3>
                                        <p className="text-sm text-gray-500 mb-6">Check your inbox to verify your email</p>
                    
                                        <div className="my-6 p-5 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100">
                                          <div className="text-[11px] text-gray-500 mb-1.5">{t("waitlist_email_sent")}</div>
                                          <div className="text-sm font-black text-[var(--vgo)] break-all">{savedEmail || "your email"}</div>
                                          {savedUsername && <div className="text-[11px] text-gray-400 mt-3">{t("waitlist_account_id")}{savedUsername}</div>}
                                          {sysId && <div className="text-[10px] text-gray-400 mt-1">{sysId}</div>}
                                        </div>
                    
                                        <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 mb-5 text-left">
                                          <div className="text-sm font-black text-blue-700 mb-2">{t("waitlist_next_title")}</div>
                                          <ol className="text-xs text-blue-800 leading-relaxed space-y-1 pl-4 list-decimal">
                                            <li>{t("waitlist_step1")}</li>
                                            <li>{t("waitlist_step2")}</li>
                                            <li>{t("waitlist_step3")}</li>
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

                      <button
                        onClick={() => {
                          const url = role === "merchant"
                            ? "https://merchant.vgoservice.com/login/merchant"
                            : role === "tech" || role === "artisan"
                              ? "https://tech.vgoservice.com/login/provider"
                              : "https://customer.vgoservice.com/login/customer";
                          window.location.href = url;
                        }}
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-white border border-gray-200 text-gray-700 font-bold text-[14px] hover:bg-gray-50 active:scale-[0.98] transition"
                      >
                        {l === "zh" ? "已有账号？直接登录" : l === "ms" ? "Sudah ada akaun? Log masuk" : "Already have an account? Login"}
                        <ArrowRight size={16} strokeWidth={2.5} />
                      </button>

                      <div className="flex items-center justify-center gap-1.5 pt-1">
                        {(["customer","merchant","tech","artisan"] as Role[]).map((k) => (
                          <button key={k} onClick={() => setRole(k)}
                            className={`h-1.5 rounded-full transition-[transform,box-shadow,opacity,width,background-color] ${role === k ? "w-5 bg-[var(--vgo)]" : "w-1.5 bg-gray-200"}`}
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
                          className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-[transform,box-shadow,opacity,width,background-color] ${aTerms ? "border-[var(--vgo)] bg-orange-50/70 shadow-md shadow-orange-500/10" : "border-gray-200 bg-white hover:border-orange-300"}`}>
                          <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-[transform,box-shadow,opacity,width,background-color] ${aTerms ? "bg-[var(--vgo)]" : "border-2 border-gray-300 bg-white"}`}>
                            {aTerms && <CheckCircle2 size={14} className="text-white" strokeWidth={3} />}
                          </div>
                          <div className="text-[11px] font-black text-gray-900 leading-tight text-center">
                            {l === "zh" ? "服务条款" : l === "ms" ? "Terma" : "Terms"}
                          </div>
                        </button>

                        <button type="button" onClick={() => { setPreviewOpen("privacy"); setScrolledEnd(p => ({...p, privacy: false})); }}
                          className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-[transform,box-shadow,opacity,width,background-color] ${aPrivacy ? "border-[var(--vgo)] bg-orange-50/70 shadow-md shadow-orange-500/10" : "border-gray-200 bg-white hover:border-orange-300"}`}>
                          <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-[transform,box-shadow,opacity,width,background-color] ${aPrivacy ? "bg-[var(--vgo)]" : "border-2 border-gray-300 bg-white"}`}>
                            {aPrivacy && <CheckCircle2 size={14} className="text-white" strokeWidth={3} />}
                          </div>
                          <div className="text-[11px] font-black text-gray-900 leading-tight text-center">
                            {l === "zh" ? "隐私政策" : l === "ms" ? "Privasi" : "Privacy"}
                          </div>
                        </button>

                        <button type="button" onClick={() => { setPreviewOpen("role"); setScrolledEnd(p => ({...p, role: false})); }}
                          className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-[transform,box-shadow,opacity,width,background-color] ${aRole ? "border-[var(--vgo)] bg-orange-50/70 shadow-md shadow-orange-500/10" : "border-gray-200 bg-white hover:border-orange-300"}`}>
                          <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-[transform,box-shadow,opacity,width,background-color] ${aRole ? "bg-[var(--vgo)]" : "border-2 border-gray-300 bg-white"}`}>
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
```

## File: src/app/layout.tsx
```typescript
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import ShareButton from "@/components/ShareButton";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LangProvider } from "@/lib/i18n";

const BASE_URL = "https://vgo-website.vercel.app";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FF6600" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  viewportFit: "cover" as const,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "V'GO · 有事不用愁，上门找 V'GO",
    template: "%s · V'GO",
  },
  description: "V'GO（V Go On）—— 马来西亚上门服务平台。居家维修、清洁、按摩、跑腿、商城、找工作，一站搞定。",
  keywords: ["VGO", "上门服务", "马来西亚", "沙巴", "亚庇", "Kota Kinabalu", "维修", "清洁", "按摩", "跑腿"],
  authors: [{ name: "Ventus Reflexology" }],
  creator: "Ventus Reflexology",
  publisher: "Ventus Reflexology",
  alternates: {
    canonical: BASE_URL,
    languages: {
      "zh-MY": BASE_URL,
      "en-MY": BASE_URL + "/?lang=en",
      "ms-MY": BASE_URL + "/?lang=ms",
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_MY",
    alternateLocale: ["en_MY", "ms_MY"],
    url: BASE_URL,
    siteName: "V'GO",
    title: "V'GO · 有事不用愁，上门找 V'GO",
    description: "马来西亚上门服务平台。居家维修、清洁、按摩、跑腿、商城、找工作，一站搞定。",
    images: [
      {
        url: "/shared/s01.jpg",
        width: 1200,
        height: 630,
        alt: "V'GO - 有事不用愁，上门找 V'GO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "V'GO · 有事不用愁，上门找 V'GO",
    description: "马来西亚上门服务平台。居家维修、清洁、按摩、跑腿、商城、找工作，一站搞定。",
    images: ["/shared/s01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo-mark.svg", type: "image/svg+xml" },
    ],
    apple: "/logo-mark.svg",
  },
  category: "service",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "V'GO",
  alternateName: "V Go On",
  url: BASE_URL,
  logo: BASE_URL + "/logo-mark.svg",
  description: "马来西亚沙巴本地生活服务平台。上门维修、清洁、按摩、跑腿、二手、招聘。",
  brand: "V'GO",
  parentOrganization: {
    "@type": "Organization",
    name: "Ventus Reflexology",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kota Kinabalu",
    addressRegion: "Sabah",
    addressCountry: "MY",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "support.vgo@gmail.com",
    availableLanguage: ["zh", "en", "ms"],
    areaServed: "MY",
  },
  sameAs: [
    BASE_URL,
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-MY" >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LangProvider>
          <Navbar />
          {children}
          <BackToTop />
        <ShareButton />
        <CookieBanner />
          <Analytics />
          <SpeedInsights />
        </LangProvider>
      </body>
    </html>
  );
}
```

## File: src/components/Navbar.tsx
```typescript
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Wrench, Sparkles, Heart, Truck, ChevronDown, Menu, Star, User, Store } from "lucide-react";
import SideDrawer from "./SideDrawer";
import LangSwitcher from "./LangSwitcher";
import { useLang } from "@/lib/i18n";

export default function Navbar() {
  const { t, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NAV = [
    { label: t("nav_home"), href: "#home" },
    {
      label: t("nav_features"), href: "#features",
      children: [
        { icon: Wrench,   label: t("drawer_repair"),  href: "/services/repair/" },
        { icon: Sparkles, label: t("drawer_clean"),   href: "/services/clean/" },
        { icon: Heart,    label: t("drawer_massage"), href: "/services/massage/" },
        { icon: Truck,    label: t("drawer_errand"),  href: "/services/errand/" },
      ],
    },
    { label: t("nav_news"), href: "#news" },
    { label: t("nav_partner"), href: "/partner/" },
    { label: t("nav_about"), href: "/about/" },
    { label: lang === "zh" ? "福利" : lang === "ms" ? "Tawaran" : "Offers", href: "/offers/" },
    { label: lang === "zh" ? "指南" : lang === "ms" ? "Panduan" : "Guides", children: [
      { icon: User,   label: lang === "zh" ? "客户指南" : lang === "ms" ? "Panduan Pelanggan" : "Customer Guide",   href: "/how-it-works/customer/" },
      { icon: Store,  label: lang === "zh" ? "商家指南" : lang === "ms" ? "Panduan Peniaga"   : "Merchant Guide",   href: "/how-it-works/merchant/" },
      { icon: Wrench, label: lang === "zh" ? "师傅指南" : lang === "ms" ? "Panduan Juruteknik" : "Technician Guide", href: "/how-it-works/technician/" },
    ] },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-[transform,box-shadow,opacity,width,background-color] duration-300 ${
          scrolled ? "bg-white/85 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.06)]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image src="/logo-mark.svg" alt="V'GO" width={40} height={40} priority className="w-10 h-10 object-contain shrink-0" />
            <div className="flex flex-col leading-none">
              <span className={`font-black text-2xl tracking-tight transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}>
                V&apos;GO
              </span>
              <span className={`hidden sm:block text-[9px] font-semibold tracking-[0.2em] transition-colors ${scrolled ? "text-gray-400" : "text-white/60"}`}>
                Smart. Simple. Sorted.
              </span>
            </div>
          </Link>

          <div className={`md:hidden flex items-center gap-1 px-2.5 py-1 rounded-full backdrop-blur-md border transition-colors ${
            scrolled ? "bg-gray-100 border-gray-200" : "bg-white/15 border-white/25"
          }`}>
            <Star size={11} className="text-yellow-400 fill-yellow-400" />
            <span className={`text-[11px] font-bold ${scrolled ? "text-gray-900" : "text-white"}`}>{t("nav_city_badge")}</span>
            <span className={`text-[10px] ${scrolled ? "text-gray-400" : "text-white/50"}`}>·</span>
            <span className={`text-[10px] font-medium ${scrolled ? "text-gray-500" : "text-white/70"}`}>{t("nav_batch_badge")}</span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => {
              const isExternal = (item.href || "").startsWith("/");
              const cls = `px-4 py-2 rounded-lg text-sm font-semibold transition ${
                scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white/90 hover:bg-white/10"
              }`;

              if (item.children) {
                return (
                  <div key={item.label} className="relative" onMouseEnter={() => setOpenDrop(item.label)} onMouseLeave={() => setOpenDrop(null)}>
                    <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition ${
                      scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white/90 hover:bg-white/10"
                    }`}>
                      {item.label}
                      <ChevronDown size={14} className={`transition-transform ${openDrop === item.label ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {openDrop === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2"
                        >
                          {item.children.map((c) => (
                            <a key={c.label} href={c.href} className="flex items-center gap-3 px-4 py-2.5 text-sm text-orange-950 hover:bg-orange-50 hover:text-[var(--vgo)] transition">
                              <c.icon size={16} strokeWidth={2} />
                              {c.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return isExternal ? (
                <Link key={item.label} href={item.href} className={cls}>{item.label}</Link>
              ) : (
                <a key={item.label} href={item.href} className={cls}>{item.label}</a>
              );
            })}
            <div className="ml-3">
              <LangSwitcher scrolled={scrolled} />
            </div>
            <a href="#download" className="ml-3 px-6 py-2.5 rounded-xl bg-[var(--vgo)] text-white text-sm font-bold shadow-lg shadow-orange-500/30 hover:brightness-110 hover:scale-105 transition-[transform,box-shadow,opacity,width,background-color] pulse-glow">
              {t("nav_download")}
            </a>
          </nav>

          <button
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            className={`md:hidden w-11 h-11 flex items-center justify-center rounded-xl backdrop-blur-md border transition ${
              scrolled
                ? "text-gray-900 bg-gray-100 border-gray-200 hover:bg-gray-200"
                : "text-white bg-white/15 border-white/25 hover:bg-white/25"
            }`}
          >
            <Menu size={26} strokeWidth={2.5} />
          </button>
        </div>
      </header>

      <SideDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
```

## File: src/app/page.tsx
```typescript
"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import NewsTicker from "@/components/NewsTicker";
import PainPoints from "@/components/PainPoints";
import AboutVGO from "@/components/AboutVGO";
import FeatureCards from "@/components/FeatureCards";
import SceneShowcase from "@/components/SceneShowcase";
import HowItWorks from "@/components/HowItWorks";
import Guarantees from "@/components/Guarantees";
import Roles from "@/components/Roles";
import Merchant from "@/components/Merchant";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Cooperation from "@/components/Cooperation";
import FinalCTA from "@/components/FinalCTA";
import AppLinks from "@/components/AppLinks";
import Footer from "@/components/Footer";
import Waitlist from "@/components/Waitlist";
import Notice from "@/components/Notice";
import ParticleField from "@/components/ParticleField";
import Reveal from "@/components/Reveal";
import { useLang } from "@/lib/i18n";

const HERO_IMAGES = [
  { src: "/shared/s01.jpg", kb: "kb-zoom-in" },
  { src: "/shared/s02.jpg", kb: "kb-pan-right" },
  { src: "/features/repair.jpg", kb: "kb-zoom-out" },
  { src: "/shared/s03.jpg", kb: "kb-pan-left" },
  { src: "/features/clean.jpg", kb: "kb-zoom-in" },
];

const SLIDE_MS = 7000;
const TRANSITION_S = 1.8;

export default function Home() {
  const { t } = useLang();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx(i => (i + 1) % HERO_IMAGES.length), SLIDE_MS);
    return () => clearInterval(timer);
  }, []);

  const STATS = [
    { num: "亚庇", label: t("stat_rating") },
    { num: "首批", label: t("stat_family") },
    { num: "6 大", label: t("stat_category") },
    { num: "全马", label: t("stat_cover") },
  ];

  return (
    <>
      <main id="home" className="relative min-h-[100svh] flex flex-col overflow-hidden bg-gray-950 noise">
        <div className="absolute inset-0 z-0">
          <div className="vgo-hero-mesh absolute inset-0" />
          <div className="vgo-hero-grid absolute inset-0 opacity-30" />
          <div className="vgo-hero-scan absolute inset-0" />
          <ParticleField count={140} />
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="aurora absolute -top-32 -left-24 w-[500px] h-[500px] rounded-full bg-[var(--vgo)] blur-[140px] opacity-60" />
          <div className="aurora-2 absolute -bottom-32 -right-24 w-[600px] h-[600px] rounded-full bg-[#FF8A3D] blur-[160px] opacity-50" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs sm:text-sm font-semibold mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--vgo)] animate-pulse" />
            {t("hero_tag")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 60 }}
            className="text-[34px] leading-[1.15] sm:text-6xl md:text-7xl font-black tracking-tight"
          >
            <span className="block text-white">
              {t("hero_title1")}
            </span>
            <span className="block mt-1">
              {t("hero_title2").replace("V'GO", "")}
              <span className="text-[var(--vgo)] drop-shadow-[0_0_40px_rgba(255,102,0,0.3)]">V'GO</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed"
          >
            {t("hero_desc")}
            <br />
            <span className="text-white/50 text-xs sm:text-sm">{t("hero_sub")}</span>
          </motion.p>

          {/* 🎁 福利横幅 */}
          <motion.a
            href="#download"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FFB33D] via-[#FF8A1F] to-[#D95000] text-white text-xs sm:text-sm font-bold shadow-[0_8px_30px_-8px_rgba(255,150,0,0.3)] hover:scale-105 active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]"
          >
            <span className="text-base">🎁</span>
            <span>注册即送 <span className="text-base font-black">RM80</span> 上门检查券</span>
            <span className="text-white/70">·</span>
            <span className="text-white/90">限首批 1000 名</span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 w-full max-w-sm mx-auto space-y-3"
          >
            <Link
              href="/how-it-works/customer"
              className="group flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl bg-gradient-to-b from-[var(--vgo-light)] to-[var(--vgo-dark)] text-white font-bold text-base shadow-[0_10px_30px_-8px_rgba(255,102,0,0.3)] hover:shadow-[0_16px_40px_-8px_rgba(255,102,0,0.3)] hover:scale-[1.02] active:scale-95 transition-[transform,box-shadow,opacity,width,background-color] pulse-glow"
            >
              <span className="text-lg">👤</span>
              <span>{t("cta_customer")}</span>
              <span className="ml-1 px-2 py-0.5 rounded-full bg-white/25 text-[10px] font-black">领 RM80</span>
              <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-[transform,box-shadow,opacity,width,background-color]">→</span>
            </Link>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/how-it-works/merchant" className="flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-white/8 backdrop-blur-xl border border-white/20 text-white text-xs sm:text-sm font-semibold hover:bg-white/15 hover:border-white/40 active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">
                <span>🏪</span>
                <span>{t("cta_merchant")}</span>
              </Link>
              <Link href="/how-it-works/technician" className="flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl bg-white/8 backdrop-blur-xl border border-white/20 text-white text-xs sm:text-sm font-semibold hover:bg-white/15 hover:border-white/40 active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]">
                <span>🔧</span>
                <span>{t("cta_tech")}</span>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="relative z-20 pb-4 px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="max-w-3xl mx-auto mb-4 grid grid-cols-4 gap-1 sm:gap-2 p-2 rounded-2xl bg-white/8 backdrop-blur-2xl border border-white/15"
          >
            {STATS.map((s) => (
              <div key={s.label} className="py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-center">
                <div className="text-base sm:text-2xl font-black text-[var(--vgo)] leading-tight">{s.num}</div>
                <div className="text-[10px] sm:text-xs text-white/65 mt-0.5">{s.label}</div>
                <div className="text-[8px] text-white/30 mt-0.5">示例</div>
              </div>
            ))}
          </motion.div>

          <div className="flex justify-center gap-2 mb-3">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`slide ${i + 1}`}
                className={`h-1.5 rounded-full overflow-hidden transition-[transform,box-shadow,opacity,width,background-color] duration-500 ${
                  i === idx ? "w-10 bg-white/25" : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              >
                {i === idx && (
                  <motion.div
                    key={`bar-${idx}`}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                    className="h-full bg-[var(--vgo)]"
                  />
                )}
              </button>
            ))}
          </div>

          <a href="#features" className="flex items-center justify-center gap-1.5 text-white/50 text-xs hover:text-white transition">
            <span>{t("scroll_more")}</span>
            <span className="">↓</span>
          </a>
        </div>
      </main>

      <NewsTicker />
      <Reveal><FeatureCards /></Reveal>
      <Reveal><SceneShowcase /></Reveal>
      <Reveal><PainPoints /></Reveal>
      <Reveal><AboutVGO /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><Guarantees /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><Roles /></Reveal>
      <Reveal><Merchant /></Reveal>
      <Reveal><Cooperation /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Reveal><FinalCTA /></Reveal>
      <AppLinks />
      <Footer />
      <Waitlist />
      <Notice />
    </>
  );
}
```

## File: src/lib/i18n.tsx
```typescript
"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "zh" | "en" | "ms";

export const TRANSLATIONS = {
  zh: {
    nav_home: "首页",
    nav_features: "服务",
    nav_news: "公告",
    nav_about: "关于",
    nav_download: "下载 App",
    nav_city_badge: "亚庇",
    waitlist_email_title: "📧 请查收邮件",
    waitlist_email_sent: "验证邮件已发送至",
    waitlist_account_id: "账号 ID：",
    waitlist_next_title: "📮 下一步：",
    waitlist_step1: "打开你的邮箱",
    waitlist_step2: "点击邮件里的「验证我的邮箱」按钮",
    waitlist_step3: "验证成功后即可登录 App 领取福利",
    nav_batch_badge: "首批",
    pricing_fixed: "固定价",
    pricing_quote: "报价制",
    drawer_group_service: "服务",
    drawer_group_market: "市场",
    drawer_group_about: "了解",
    drawer_login: "登录",
    drawer_register: "注册",
    drawer_help: "客服支持",
    drawer_whatsapp: "WhatsApp 客服",
    drawer_how: "使用指南",
    drawer_offers: "福利中心",
    drawer_contact: "联系我们",
    nav_rating: "好评率",
    nav_families: "服务家庭",
    drawer_repair: "居家维修",
    drawer_clean: "清洁打扫",
    drawer_massage: "按摩",
    drawer_errand: "代购配送",
    drawer_market: "二手市场",
    drawer_jobs: "找工作",
    drawer_news: "公告",
    drawer_about: "关于我们",
    hero_tag: "🇲🇾 V'GO · 马来西亚认证师傅 · 全马上门",
    hero_title1: "有事不用愁，",
    hero_title2: "上门找 V'GO",
    hero_desc: "居家维修 · 清洁打扫 · 按摩 · 跑腿代购 · 二手商城 · 找工作",
    hero_sub: "30+ 服务类目，一键下单，认证师傅上门搞定",
    cta_customer: "有事，找 V'GO",
    cta_merchant: "有生意，上 V'GO",
    cta_tech: "有手艺，来 V'GO",
    stat_rating: "好评率",
    stat_family: "服务家庭",
    stat_category: "服务类目",
    stat_cover: "上门覆盖",
    scroll_more: "向下滑动了解更多",
    news_label: "最新公告",
    news_1: "🎁 新用户注册即送 RM80 上门检查券",
    news_2: "⚡ 前 2 个月 0% 手续费 · 商家师傅限首批 100 名",
    news_3: "新增 5 类居家维修服务",
    news_4: "按摩服务扩展到全马",
    news_5: "跑腿代购 24 小时内送达",
    sec_services_label: "我们的服务",
    sec_services_title: "V'GO 能帮你做什么？",
    sec_services_sub: "30+ 服务类目，覆盖生活方方面面",
    svc_repair: "居家维修",
    svc_repair_desc: "水管 · 电路 · 家电",
    svc_clean: "清洁打扫",
    svc_clean_desc: "家庭保洁 · 深度清洁",
    svc_massage: "按摩",
    svc_massage_desc: "上门按摩 · 中医理疗",
    svc_errand: "跑腿代购",
    svc_errand_desc: "同城配送",
    svc_market: "二手商城",
    svc_market_desc: "闲置交易 · 本地买卖",
    svc_jobs: "找工作",
    svc_jobs_desc: "零工招聘",
    svc_more: "更多服务",
    svc_more_desc: "持续更新",
    svc_action: "去看看",
    svc_more_info: "更多详细",
    pain_label: "你是不是也遇到过",
    pain_title: "这些烦恼，V'GO 都懂",
    pain_1: "找不到靠谱师傅",
    pain_2: "价格不透明被坑",
    pain_3: "约了不来放鸽子",
    pain_4: "不知道去哪找",
    pain_answer_label: "V'GO 的答案",
    pain_answer: "认证师傅 · 价格透明 · 准时上门 · 一键搞定",
    flow_label: "怎么用",
    flow_title: "样样都能搞，上门找 V'GO",
    flow_sub: "4 步搞定，比你想象的更简单",
    step_1: "注册账号",
    step_1_desc: "手机号一键注册，30 秒搞定",
    step_2: "下载 App",
    step_2_desc: "装到手机主屏，像 App 一样用",
    step_3: "选择服务",
    step_3_desc: "挑服务，看价格，一键下单",
    step_4: "师傅上门",
    step_4_desc: "认证师傅按时上门，全程可追踪",
    roles_label: "三个方向",
    roles_title: "你是哪一类？",
    roles_sub: "无论找服务、做生意，还是靠手艺吃饭，V'GO 都有一席之地",
    role_customer_tag: "有事，找 V'GO",
    role_customer_title: "你有事，我们上门",
    role_customer_desc: "家里水管爆了、冷气不冷、想找人打扫、需要按摩放松——不用四处打听，不用怕被坑。V'GO 上一个订单，认证师傅直接上门。",
    role_customer_p1: "30+ 服务类目",
    role_customer_p2: "价格透明先看报价",
    role_customer_p3: "认证师傅上门",
    role_customer_p4: "全程可追踪",
    role_customer_cta: "找服务",
    role_merchant_tag: "有生意，上 V'GO",
    role_merchant_title: "你的生意，我们帮你放大",
    role_merchant_desc: "开五金店、做清洁公司、卖二手好物、经营按摩院——把生意放上 V'GO，让全马每个需要的人都能找到你。",
    role_merchant_p1: "免费入驻",
    role_merchant_p2: "本地流量扶持",
    role_merchant_p3: "订单直接推送",
    role_merchant_p4: "无需技术门槛",
    role_merchant_cta: "商家入驻",
    role_tech_tag: "有手艺，来 V'GO",
    role_tech_title: "有手艺，不怕没饭吃",
    role_tech_desc: "会修水喉、懂电工、能打扫、有按摩手艺——不用再等熟人介绍。来这里展示你的本事，让需要的人主动找到你。",
    role_tech_p1: "零成本接活",
    role_tech_p2: "按单结算",
    role_tech_p3: "技能认证",
    role_tech_p4: "自己排时间",
    role_tech_cta: "手艺人入驻",
    merchant_label: "商家专属",
    merchant_title1: "让你的生意",
    merchant_title2: "被更多人看见",
    merchant_desc: "开五金店、做清洁、卖二手、经营按摩院——把生意放上 V'GO，让全马每个需要的人都能找到你。免费入驻，按单结算，没有隐藏费用。",
    merchant_b1: "免费开店",
    merchant_b1_desc: "零成本入驻，无需月费",
    merchant_b2: "全国流量",
    merchant_b2_desc: "全马精准曝光",
    merchant_b3: "实时订单",
    merchant_b3_desc: "有新订单手机立刻响",
    merchant_b4: "按单结算",
    merchant_b4_desc: "不成交不收费",
    merchant_cta: "免费入驻",
    merchant_flow_label: "入驻流程",
    merchant_flow_title: "三步入驻",
    merchant_f1: "提交资料",
    merchant_f1_desc: "营业执照 / 联系信息",
    merchant_f2: "平台审核",
    merchant_f2_desc: "1-2 个工作日",
    merchant_f3: "上线开张",
    merchant_f3_desc: "开始接单",
    merchant_audit: "平均审核时间",
    merchant_audit_time: "1-2 天",
    review_label: "真实好评",
    review_title: "用过的人怎么说",
    faq_label: "常见问题",
    faq_title: "常见问题",
    faq_q1: "V'GO 是什么？",
    faq_a1: "V'GO 是马来西亚上门服务平台，把认证师傅和有需要的家庭连在一起。你可以在这里找维修、清洁、按摩、跑腿、二手交易、招工等服务。",
    faq_q2: "怎么下单？",
    faq_a2: "注册账号后下载 App，选择需要的服务，填写地址和时间，一键下单。系统会派附近的认证师傅接单，你可以实时看到师傅位置。",
    faq_q3: "师傅有认证吗？",
    faq_a3: "有。所有师傅入驻前都需通过身份验证和技能审核。维修类师傅还需要提供相关资质证明。平台全程记录服务过程，保障双方权益。",
    faq_q4: "价格怎么算？",
    faq_a4: "每个服务都有明确的起始价格区间，下单前你会看到报价。师傅上门确认后才会给出最终价格，你同意才开工，没有隐藏费用。",
    faq_q5: "可以退款吗？",
    faq_a5: "可以。如果师傅未按时上门，或服务未完成，你可以申请全额退款。平台会在 1-3 个工作日内处理。",
    faq_q6: "覆盖哪些地区？",
    faq_a6: "目前覆盖马来西亚主要城市，持续扩展中。沙巴是我们的起点，全马是我们的目标。",
    cta_title1: "家里大小事",
    cta_title2: "上门找 V'GO",
    cta_sub: "免费注册，认证师傅随叫随到",
    cta_register: "免费注册",
    cta_voucher_banner: "注册即送 RM80 上门检查券",
    ready_title: "准备好了吗？",
    cta_download: "下载 App",
    cta_note: "iOS · Android · 无需应用商店，浏览器直接安装",
    footer_tagline: "马来西亚上门服务平台。\n认证师傅，随叫随到。",
    footer_col1: "服务",
    footer_col2: "合作",
    footer_col3: "帮助",
    footer_link_repair: "居家维修",
    footer_link_clean: "清洁打扫",
    footer_link_massage: "按摩",
    footer_link_errand: "跑腿代购",
    footer_link_market: "二手商城",
    footer_link_jobs: "找工作",
    footer_link_merchant: "商家入驻",
    footer_link_tech: "手艺人入驻",
    footer_link_partner: "合作伙伴",
    footer_link_open: "开放平台",
    footer_link_enterprise: "企业合作",
    footer_link_careers: "招贤纳士",
    footer_link_about: "关于我们",
    footer_link_faq: "常见问题",
    footer_link_privacy: "隐私政策",
    footer_link_partner_agreement: "合作伙伴协议",
    footer_link_terms: "服务条款",
    footer_link_contact: "联系我们",
    footer_link_feedback: "意见反馈",
    footer_link_partner_invest: "合作与投资",
    footer_link_ip: "知识产权",
    footer_copyright: "© 2026 V'GO (V Go On). 保留所有权利。",
    footer_location: "Kota Kinabalu, Sabah, Malaysia",
    footer_ssm: "SSM 注册企业",
    partner_nav: "合作与投资",
    partner_label: "合作与投资",
    partner_title: "一起把 V'GO 做大",
    partner_intro: "V'GO 正在寻找志同道合的合作者 —— 无论是投资人、渠道伙伴、还是想一起把马来西亚上门服务市场做起来的人。",
    partner_why_title: "为什么是 V'GO？",
    partner_why_1_title: "庞大的市场",
    partner_why_1_desc: "马来西亚 on-demand 家庭服务市场持续增长，零工经济已达 164 万工作者。",
    partner_why_2_title: "全马深耕",
    partner_why_2_desc: "从沙巴起步，服务全马。马来西亚是我们的主场。",
    partner_why_3_title: "多服务生态",
    partner_why_3_desc: "30+ 服务类目，维修、清洁、按摩、跑腿、商城、找工作，一站式覆盖。",
    partner_why_4_title: "三语平台",
    partner_why_4_desc: "中文、英文、马来文全站贯通，覆盖马来西亚三大族群。",
    partner_traction_title: "已有基础",
    partner_traction_1: "30+ 服务类目",
    partner_traction_2: "4.9 好评率",
    partner_traction_3: "12K+ 服务家庭",
    partner_traction_4: "全马覆盖",
    partner_cta_title: "想聊聊？",
    partner_cta_desc: "无论你是投资人、合作伙伴，还是对 V'GO 有想法的朋友，欢迎直接联系我们。",
    partner_contact_email: "邮件联系",
    partner_contact_whatsapp: "WhatsApp 联系",
    partner_footer_note: "我们会在 24 小时内回复每一条信息。",
    coop_title: "4 种合作方式",
    coop_sub: "无论你是有店、有手艺、有人脉，还是有资本 —— V'GO 都有你的一席之地。",
    coop_merchant_t: "商家入驻",
    coop_merchant_d: "有店有服务，想让更多客户找到你。上架服务、接单结算、平台引流，一步到位。",
    coop_merchant_cta: "商家入驻",
    coop_tech_t: "师傅加盟",
    coop_tech_d: "有手艺没客源？入驻 V'GO，订单直接推到你手机，专注做事，收款交给平台。",
    coop_tech_cta: "师傅加盟",
    coop_agent_t: "区域代理",
    coop_agent_d: "熟悉本地市场，有资源有人脉？拿下你所在区域的独家运营权，发展商家与师傅，赚取长期分成。",
    coop_agent_cta: "申请代理",
    coop_invest_t: "投资合作",
    coop_invest_d: "看好马来西亚 on-demand 市场？与 V'GO 一起布局，共享平台长期增长红利。",
    coop_invest_cta: "洽谈投资",
    coop_home_label: "合作与加入",
    coop_home_title: "与 V'GO 一起成长",
    coop_home_sub: "无论你是商家、师傅，还是看好本地市场的创业者 —— V'GO 都为你准备了合适的合作方式。",
    coop_home_more: "查看详细合作方案",
    nav_partner: "合作",
    flow_1_t: "提交申请",
    flow_1_d: "填写基本信息，选择合作方式",
    flow_2_t: "资质审核",
    flow_2_d: "V'GO 团队 24 小时内联系你，核对资质",
    flow_3_t: "培训认证",
    flow_3_d: "平台操作培训 + 服务标准培训",
    flow_4_t: "上线接单",
    flow_4_d: "服务上线，客户下单，系统自动派单",
    flow_5_t: "结算到账",
    flow_5_d: "订单完成后定期结算，透明可查",
    earn_title: "收益预估",
    earn_note: "影响实际收益的因素包括但不限于：① 合作者身份与经营类型；② 个人投入时间与接单频率；③ 所在城市与地段；④ 服务类目与定价策略；⑤ 季节、天气与节庆因素；⑥ 当地经济环境与消费能力；⑦ 市场竞争状况；⑧ 平台政策与费率的调整；⑨ 客户评价与复购率；⑩ 其他不可预见因素。具体收益因人、因时、因地而异。",
    earn_sub: "数据基于平台内同类合作者的平均水平，仅供参考。",
    earn_merchant_t: "商家 · 月收益参考",
    earn_merchant_1: "日均订单",
    earn_merchant_1_v: "5-15 单",
    earn_merchant_2: "客单价",
    earn_merchant_2_v: "RM 80-350",
    earn_merchant_3: "月毛收入",
    earn_merchant_3_v: "RM 12,000-52,000",
    earn_tech_t: "师傅 · 月收益参考",
    earn_tech_1: "日均订单",
    earn_tech_1_v: "2-6 单",
    earn_tech_2: "客单价",
    earn_tech_2_v: "RM 60-280",
    earn_tech_3: "月毛收入",
    earn_tech_3_v: "RM 3,600-33,600",
    soon_customer_title: "客户 App 即将上线",
    soon_customer_desc: "我们正在做最后的打磨。上线后第一时间通知你，敬请期待！",
    soon_merchant_title: "商家入驻即将开放",
    soon_merchant_desc: "入驻通道正在准备中。留下关注，上线时第一时间通知你。",
    soon_tech_title: "师傅入驻即将开放",
    soon_tech_desc: "有手艺，不怕没饭吃。通道马上开启，请再等一等。",
    soon_general_title: "敬请期待",
    soon_general_desc: "功能正在开发中，很快就会上线。",
    soon_ok: "好的，我知道了",
    page_about_label: "关于我们",
    page_about_title: "我们是谁",
    about_vgo_label: "关于 V'GO",
    about_vgo_title: "马来西亚本地生活服务平台",
    about_vgo_desc: "V'GO 成立于马来西亚沙巴，使命是用一个 App 解决生活中的所有上门需求 —— 从维修、清洁、按摩到跑腿配送。让每次服务都简单、透明、有保障。",
    about_vgo_c1_t: "认证师傅",
    about_vgo_c1_d: "实名认证 + 证件审核 + SOP 培训，每一位师傅都经过严格筛选。",
    about_vgo_c2_t: "平台定价",
    about_vgo_c2_d: "标准服务明码标价，其他服务师傅公开报价，杜绝坐地起价。",
    about_vgo_c3_t: "全程保障",
    about_vgo_c3_d: "平台担保交易，完工确认后放款，不满意可要求返工。",
    about_vgo_s1_n: "6",
    about_vgo_s1_l: "服务类目",
    about_vgo_s2_n: "30+",
    about_vgo_s2_l: "细分服务",
    about_vgo_s3_n: "100%",
    about_vgo_s3_l: "认证师傅",
    about_vgo_s4_n: "3",
    about_vgo_s4_l: "语言支持",
    page_privacy_label: "隐私政策",
    page_privacy_title: "隐私政策",
    page_terms_label: "服务条款",
    page_terms_title: "服务条款",
    page_faq_label: "常见问题",
    page_faq_title: "常见问题",
    page_contact_label: "联系我们",
    page_contact_title: "联系我们",
    sub_form_t: "没有你的地区？",
    sub_form_sub: "留个邮箱，开通时第一时间通知你",
    sub_form_ph: "你的邮箱",
    sub_form_btn: "通知我",
    sub_form_agree: "我同意接收 V'GO 服务开通通知邮件，可随时取消订阅",
    sub_form_ok: "已收到！开通后会通知你",
    sub_form_err: "提交失败，请稍后再试",
  },
  en: {
    nav_home: "Home",
    nav_features: "Services",
    nav_news: "News",
    nav_about: "About",
    nav_download: "Download App",
    nav_city_badge: "KK",
    nav_batch_badge: "Early",
    waitlist_email_title: "📧 Check your inbox",
    waitlist_email_sent: "Verification email sent to",
    waitlist_account_id: "Account ID: ",
    waitlist_next_title: "📮 Next steps:",
    waitlist_step1: "Open your email inbox",
    waitlist_step2: "Click the \"Verify my email\" button",
    waitlist_step3: "After verification, log in to the app and claim your reward",
    pricing_fixed: "Fixed Rate",
    pricing_quote: "Quotation",
    drawer_group_service: "Services",
    drawer_group_market: "Marketplace",
    drawer_group_about: "Explore",
    drawer_login: "Log In",
    drawer_register: "Sign Up",
    drawer_help: "Help & Support",
    drawer_whatsapp: "WhatsApp Support",
    drawer_how: "How It Works",
    drawer_offers: "Offers",
    drawer_contact: "Contact Us",
    nav_rating: "Rating",
    nav_families: "Families",
    drawer_repair: "Home Maintenance & Repair",
    drawer_clean: "Home Cleaning",
    drawer_massage: "Massage",
    drawer_errand: "Delivery & Errands",
    drawer_market: "Marketplace",
    drawer_jobs: "Jobs & Hiring",
    drawer_news: "News",
    drawer_about: "About Us",
    hero_tag: "🇲🇾 V'GO · Certified Pros · Nationwide",
    hero_title1: "Whatever you need,",
    hero_title2: "V'GO takes the lead",
    hero_desc: "Repair · Cleaning · Massage · Errands · Marketplace · Jobs",
    hero_sub: "30+ services, one tap to book. Certified pros at your door.",
    cta_customer: "Got a problem? Find V'GO",
    cta_merchant: "Got a business? Grow with V'GO",
    cta_tech: "Got skills? Earn with V'GO",
    stat_rating: "Rating",
    stat_family: "Families",
    stat_category: "Services",
    stat_cover: "Nationwide",
    scroll_more: "Scroll to explore",
    news_label: "LATEST",
    news_1: "🎁 New users: get RM80 home check voucher",
    news_2: "⚡ First 2 months 0% commission · First 100 merchants & pros",
    news_3: "5 new home-repair services added",
    news_4: "Massage service expanded nationwide",
    news_5: "Same-day errands within 24 hours",
    sec_services_label: "Our Services",
    sec_services_title: "Everything Your Home Needs",
    sec_services_sub: "30+ services, every corner of life covered",
    svc_repair: "Home Repair",
    svc_repair_desc: "Plumbing · Electrical · Appliances",
    svc_clean: "Cleaning",
    svc_clean_desc: "Housekeeping · Deep Clean",
    svc_massage: "Massage",
    svc_massage_desc: "Home Massage · Therapy",
    svc_errand: "Errands",
    svc_errand_desc: "Same-day Delivery",
    svc_market: "Marketplace",
    svc_market_desc: "Buy & Sell Locally",
    svc_jobs: "Jobs",
    svc_jobs_desc: "Gig & Part-time",
    svc_more: "More Services",
    svc_more_desc: "Coming Soon",
    svc_action: "Explore",
    svc_more_info: "Learn More",
    pain_label: "Sound Familiar?",
    pain_title: "V'GO Gets It",
    pain_1: "Can't find someone reliable",
    pain_2: "Hidden fees, surprise charges",
    pain_3: "Booked, then ghosted",
    pain_4: "No idea where to look",
    pain_answer_label: "The V'GO Way",
    pain_answer: "Certified · Transparent · Punctual · One Tap",
    flow_label: "How It Works",
    flow_title: "From Tap to Doorstep",
    flow_sub: "Four steps. Simpler than you'd think.",
    step_1: "Sign Up",
    step_1_desc: "Phone number sign-up, 30 seconds flat",
    step_2: "Download App",
    step_2_desc: "Install from browser — no app store needed",
    step_3: "Choose Service",
    step_3_desc: "Pick, see price, book in one tap",
    step_4: "Pro Arrives",
    step_4_desc: "Certified pro, on time. Track in real time.",
    roles_label: "Three Ways In",
    roles_title: "Which One Are You?",
    roles_sub: "Need a hand, run a shop, or work with your hands — there's a place for you.",
    role_customer_tag: "Got a problem? Find V'GO",
    role_customer_title: "Tell Us What's Wrong — We'll Handle It",
    role_customer_desc: "Burst pipe, broken AC, need cleaning, want a massage — no more asking around, no more getting ripped off. One order on V'GO, certified pro shows up.",
    role_customer_p1: "30+ Service Categories",
    role_customer_p2: "Transparent Pricing",
    role_customer_p3: "Certified Pros",
    role_customer_p4: "Fully Trackable",
    role_customer_cta: "Find a Service",
    role_merchant_tag: "Got a business? Grow with V'GO",
    role_merchant_title: "Put Your Business In The Spotlight",
    role_merchant_desc: "Hardware store, cleaning company, second-hand goods, massage spa — list your business on V'GO and let everyone in Malaysia find you.",
    role_merchant_p1: "Free Sign Up",
    role_merchant_p2: "Local Traffic Boost",
    role_merchant_p3: "Direct Order Push",
    role_merchant_p4: "No Tech Skills Needed",
    role_merchant_cta: "List Your Business",
    role_tech_tag: "Got skills? Earn with V'GO",
    role_tech_title: "With Skills, You'll Never Go Hungry",
    role_tech_desc: "Plumbing, electrical, cleaning, massage — stop waiting on referrals. Showcase your craft and let the work come to you.",
    role_tech_p1: "Zero Cost",
    role_tech_p2: "Pay Per Order",
    role_tech_p3: "Skill Certification",
    role_tech_p4: "Set Your Own Hours",
    role_tech_cta: "Join as a Pro",
    merchant_label: "For Merchants",
    merchant_title1: "Put Your Business",
    merchant_title2: "In The Spotlight",
    merchant_desc: "Hardware, cleaning, second-hand, massage — list your business on V'GO and reach everyone in Malaysia who needs you. Free sign-up, pay per order, no hidden fees.",
    merchant_b1: "Free Store",
    merchant_b1_desc: "Zero cost, no monthly fee",
    merchant_b2: "Nationwide Reach",
    merchant_b2_desc: "Precise exposure across Malaysia",
    merchant_b3: "Real-Time Orders",
    merchant_b3_desc: "Phone rings on new orders",
    merchant_b4: "Pay Per Order",
    merchant_b4_desc: "No sale, no charge",
    merchant_cta: "Sign Up Free",
    merchant_flow_label: "How To Join",
    merchant_flow_title: "Join in 3 Steps",
    merchant_f1: "Submit Info",
    merchant_f1_desc: "License / Contact info",
    merchant_f2: "We Review",
    merchant_f2_desc: "1-2 business days",
    merchant_f3: "Go Live",
    merchant_f3_desc: "Start receiving orders",
    merchant_audit: "Average review time",
    merchant_audit_time: "1-2 days",
    review_label: "Real Stories",
    review_title: "Don't Take Our Word For It",
    faq_label: "FAQ",
    faq_title: "Frequently Asked Questions",
    faq_q1: "What is V'GO?",
    faq_a1: "V'GO is a Malaysia home-service platform connecting certified pros with families in need. Find repair, cleaning, massage, errands, second-hand trading, and job listings all in one place.",
    faq_q2: "How do I place an order?",
    faq_a2: "Sign up, download the app, choose a service, enter your address and time, then order in one tap. The system dispatches nearby certified pros, and you can track them in real time.",
    faq_q3: "Are pros certified?",
    faq_a3: "Yes. All pros must pass identity verification and skill assessment before joining. Repair pros must also provide relevant certifications. Every service is fully recorded.",
    faq_q4: "How is the price calculated?",
    faq_a4: "Each service has a clear starting price range shown before ordering. The final price is confirmed on-site by the pro. Work only starts after you agree — no hidden fees.",
    faq_q5: "Can I get a refund?",
    faq_a5: "Yes. If the pro doesn't show up on time or the service isn't completed, you can request a full refund. Processed within 1-3 business days.",
    faq_q6: "Which areas do you cover?",
    faq_a6: "Currently covering major Malaysian cities, expanding steadily. Sabah is where we started — Malaysia is where we're headed.",
    cta_title1: "One Tap Away,",
    cta_title2: "V'GO's On The Way",
    cta_sub: "Free to sign up. Certified pros on demand.",
    cta_register: "Sign Up Free",
    cta_voucher_banner: "Sign up and get RM80 home inspection voucher",
    ready_title: "Ready to start?",
    cta_download: "Download App",
    cta_note: "iOS · Android · No app store needed — install from browser",
    footer_tagline: "Malaysia home-service platform.\nCertified hands, one tap away.",
    footer_col1: "Services",
    footer_col2: "Partners",
    footer_col3: "Help",
    footer_link_repair: "Home Repair",
    footer_link_clean: "Cleaning",
    footer_link_massage: "Massage",
    footer_link_errand: "Errands",
    footer_link_market: "Marketplace",
    footer_link_jobs: "Jobs",
    footer_link_merchant: "Merchant Sign-Up",
    footer_link_tech: "Technician Sign-Up",
    footer_link_partner: "Partners",
    footer_link_open: "Open Platform",
    footer_link_enterprise: "Enterprise",
    footer_link_careers: "Careers",
    footer_link_about: "About Us",
    footer_link_faq: "FAQ",
    footer_link_privacy: "Privacy Policy",
    footer_link_partner_agreement: "Partner Agreement",
    footer_link_terms: "Terms of Service",
    footer_link_contact: "Contact Us",
    footer_link_feedback: "Feedback",
    footer_link_partner_invest: "Partner & Invest",
    footer_link_ip: "IP & Copyright",
    footer_copyright: "© 2026 V'GO (V Go On). All Rights Reserved.",
    footer_location: "Kota Kinabalu, Sabah, Malaysia",
    footer_ssm: "SSM Registered Business",
    partner_nav: "Partner & Invest",
    partner_label: "Partner & Invest",
    partner_title: "Let's Grow V'GO Together",
    partner_intro: "V'GO is looking for partners who share our vision — investors, channel partners, or anyone who wants to build Malaysia's home-service market with us.",
    partner_why_title: "Why V'GO?",
    partner_why_1_title: "Large Market",
    partner_why_1_desc: "Malaysia's on-demand home-service market keeps growing, with 1.64M gig workers nationwide.",
    partner_why_2_title: "Nationwide Depth",
    partner_why_2_desc: "Born in Sabah, serving all of Malaysia. Malaysia is our home ground.",
    partner_why_3_title: "Multi-Service Ecosystem",
    partner_why_3_desc: "30+ categories — repair, cleaning, massage, errands, marketplace, jobs. All in one.",
    partner_why_4_title: "Trilingual Platform",
    partner_why_4_desc: "Chinese, English, and Bahasa Melayu — covering all three major communities.",
    partner_traction_title: "What We've Built",
    partner_traction_1: "30+ Services",
    partner_traction_2: "4.9 Rating",
    partner_traction_3: "12K+ Families",
    partner_traction_4: "Nationwide",
    partner_cta_title: "Let's Talk",
    partner_cta_desc: "Whether you're an investor, a partner, or simply curious — reach out directly.",
    partner_contact_email: "Email Us",
    partner_contact_whatsapp: "WhatsApp Us",
    partner_footer_note: "We reply to every message within 24 hours.",
    coop_title: "4 Ways to Partner",
    coop_sub: "Whether you run a shop, have a skill, know the market, or have capital — there is a place for you on VGO.",
    coop_merchant_t: "Merchant Onboarding",
    coop_merchant_d: "Have a shop and services? Get discovered by more customers. List services, receive orders, and settle with one click.",
    coop_merchant_cta: "Onboard as Merchant",
    coop_tech_t: "Pro Onboarding",
    coop_tech_d: "Skilled but no customers? Join VGO. Jobs come straight to your phone. You focus on the work, we handle payments.",
    coop_tech_cta: "Join as Pro",
    coop_agent_t: "Regional Agent",
    coop_agent_d: "Know your local market and have resources? Secure exclusive operating rights in your region, develop merchants and pros, and earn long-term commissions.",
    coop_agent_cta: "Apply as Agent",
    coop_invest_t: "Investment Partnership",
    coop_invest_d: "Betting on Malaysia's on-demand market? Partner with V'GO to share in the platform's long-term growth.",
    coop_invest_cta: "Discuss Investment",
    coop_home_label: "Partner & Join",
    coop_home_title: "Grow With V'GO",
    coop_home_sub: "Whether you run a shop, have a skill, or know your local market — V'GO has a partnership model for you.",
    coop_home_more: "See Full Partnership Plans",
    nav_partner: "Partner",
    flow_1_t: "Submit Application",
    flow_1_d: "Fill in basic details and choose your partnership model",
    flow_2_t: "Qualification Review",
    flow_2_d: "Our team contacts you within 24 hours to verify details",
    flow_3_t: "Training & Certification",
    flow_3_d: "Platform operations training + service standards",
    flow_4_t: "Go Live",
    flow_4_d: "Services go live, customers book, orders are auto-assigned",
    flow_5_t: "Payment Settlement",
    flow_5_d: "Regular, transparent settlement after each completed order",
    earn_title: "Earnings Estimate",
    earn_note: "Factors affecting actual earnings include but are not limited to: (1) partner type and business model; (2) personal time commitment and order frequency; (3) city and location; (4) service category and pricing strategy; (5) season, weather, and festive periods; (6) local economic conditions and consumer spending power; (7) market competition; (8) changes to platform policies and commission rates; (9) customer reviews and repeat rate; (10) other unforeseen factors. Actual earnings vary by individual, time, and location.",
    earn_sub: "Figures based on average performance among similar partners on the platform. For reference only.",
    earn_merchant_t: "Merchant · Monthly Estimate",
    earn_merchant_1: "Daily Orders",
    earn_merchant_1_v: "5-15",
    earn_merchant_2: "Avg Order Value",
    earn_merchant_2_v: "RM 80-350",
    earn_merchant_3: "Monthly Gross",
    earn_merchant_3_v: "RM 12,000-52,000",
    earn_tech_t: "Pro · Monthly Estimate",
    earn_tech_1: "Daily Orders",
    earn_tech_1_v: "2-6",
    earn_tech_2: "Avg Order Value",
    earn_tech_2_v: "RM 60-280",
    earn_tech_3: "Monthly Gross",
    earn_tech_3_v: "RM 3,600-33,600",
    soon_customer_title: "Customer App Coming Soon",
    soon_customer_desc: "We're putting on the final touches. We'll let you know the moment it's live!",
    soon_merchant_title: "Merchant Sign-Up Coming Soon",
    soon_merchant_desc: "The sign-up channel is being prepared. We'll notify you as soon as it opens.",
    soon_tech_title: "Pro Sign-Up Coming Soon",
    soon_tech_desc: "Got skills? The door opens soon. Hang tight.",
    soon_general_title: "Coming Soon",
    soon_general_desc: "This feature is in development and will be live shortly.",
    soon_ok: "Got it",
    page_about_label: "About Us",
    page_about_title: "Who We Are",
    about_vgo_label: "About V'GO",
    about_vgo_title: "Malaysia's Local Lifestyle Services Platform",
    about_vgo_desc: "Founded in Sabah, Malaysia, V'GO's mission is to solve all your home-service needs with one app.",
    about_vgo_c1_t: "Certified Technicians",
    about_vgo_c1_d: "ID + credential verification + SOP training. Every technician is strictly vetted.",
    about_vgo_c2_t: "Platform Pricing",
    about_vgo_c2_d: "Fixed transparent pricing for standard services, open quotes for others. No last-minute hikes.",
    about_vgo_c3_t: "End-to-end Guarantee",
    about_vgo_c3_d: "Platform-escrowed payment, released on completion. Free redo if unsatisfied.",
    about_vgo_s1_n: "6",
    about_vgo_s1_l: "Categories",
    about_vgo_s2_n: "30+",
    about_vgo_s2_l: "Sub-services",
    about_vgo_s3_n: "100%",
    about_vgo_s3_l: "Verified Technicians",
    about_vgo_s4_n: "3",
    about_vgo_s4_l: "Languages",
    page_privacy_label: "Privacy Policy",
    page_privacy_title: "Privacy Policy",
    page_terms_label: "Terms of Service",
    page_terms_title: "Terms of Service",
    page_faq_label: "FAQ",
    page_faq_title: "Frequently Asked Questions",
    page_contact_label: "Contact Us",
    page_contact_title: "Contact Us",
    sub_form_t: "Your area not listed?",
    sub_form_sub: "Leave your email and we will notify you when we arrive",
    sub_form_ph: "Your email",
    sub_form_btn: "Notify Me",
    sub_form_agree: "I agree to receive V'GO service launch notifications. Unsubscribe anytime.",
    sub_form_ok: "Got it! We will notify you when live",
    sub_form_err: "Failed. Please try again later.",
  },
  ms: {
    nav_home: "Utama",
    nav_features: "Perkhidmatan",
    nav_news: "Berita",
    nav_about: "Tentang",
    nav_download: "Muat Turun",
    nav_city_badge: "KK",
    nav_batch_badge: "Awal",
    waitlist_email_title: "📧 Sila semak e-mel",
    waitlist_email_sent: "E-mel pengesahan dihantar ke",
    waitlist_account_id: "ID Akaun: ",
    waitlist_next_title: "📮 Langkah seterusnya:",
    waitlist_step1: "Buka peti masuk e-mel anda",
    waitlist_step2: "Klik butang \"Sahkan e-mel saya\"",
    waitlist_step3: "Selepas pengesahan, log masuk ke app dan tuntut ganjaran",
    pricing_fixed: "Harga Tetap",
    pricing_quote: "Sebutharga",
    drawer_group_service: "Perkhidmatan",
    drawer_group_market: "Pasar",
    drawer_group_about: "Terokai",
    drawer_login: "Log Masuk",
    drawer_register: "Daftar",
    drawer_help: "Bantuan & Sokongan",
    drawer_whatsapp: "Sokongan WhatsApp",
    drawer_how: "Cara Guna",
    drawer_offers: "Tawaran",
    drawer_contact: "Hubungi Kami",
    nav_rating: "Penilaian",
    nav_families: "Keluarga",
    drawer_repair: "Servis Pembaikan Rumah",
    drawer_clean: "Perkhidmatan Pembersihan",
    drawer_massage: "Urutan",
    drawer_errand: "Perkhidmatan Penghantaran",
    drawer_market: "Pasar",
    drawer_jobs: "Pekerjaan",
    drawer_news: "Berita",
    drawer_about: "Tentang Kami",
    hero_tag: "🇲🇾 V'GO · Tukang Bertauliah · Seluruh Negara",
    hero_title1: "Jangan risau,",
    hero_title2: "V'GO sedia datang",
    hero_desc: "Pembaikan · Pembersihan · Urutan · Penghantaran · Pasar · Cari Kerja",
    hero_sub: "30+ perkhidmatan. Satu klik untuk tempah. Tukang bertauliah sampai ke pintu.",
    cta_customer: "Ada hal? Cari V'GO",
    cta_merchant: "Ada bisnes? Sertai V'GO",
    cta_tech: "Ada kemahiran? Cari rezeki di V'GO",
    stat_rating: "Penilaian",
    stat_family: "Keluarga",
    stat_category: "Perkhidmatan",
    stat_cover: "Seluruh Negara",
    scroll_more: "Tatal untuk terokai",
    news_label: "TERKINI",
    news_1: "🎁 Pengguna baharu: dapat Baucar RM80 Pemeriksaan Rumah",
    news_2: "⚡ 2 bulan pertama 0% komisen · 100 peniaga & tukang terawal",
    news_3: "5 servis pembaikan rumah baharu",
    news_4: "Servis urutan diperluas ke seluruh negara",
    news_5: "Penghantaran sama hari dalam 24 jam",
    sec_services_label: "Perkhidmatan Kami",
    sec_services_title: "Semua Keperluan Rumah",
    sec_services_sub: "30+ perkhidmatan, semua sudut kehidupan",
    svc_repair: "Pembaikan Rumah",
    svc_repair_desc: "Paip · Elektrik · Peralatan",
    svc_clean: "Pembersihan",
    svc_clean_desc: "Bersih Rumah · Cuci Mendalam",
    svc_massage: "Urutan",
    svc_massage_desc: "Urutan ke Rumah · Terapi",
    svc_errand: "Penghantaran",
    svc_errand_desc: "Hantar Same-Day",
    svc_market: "Pasar Terpakai",
    svc_market_desc: "Barang Terpakai · Jual Beli Tempatan",
    svc_jobs: "Cari Kerja",
    svc_jobs_desc: "Kerja Sambilan",
    svc_more: "Lebih Banyak",
    svc_more_desc: "Akan Datang",
    svc_action: "Terokai",
    svc_more_info: "Ketahui Lagi",
    pain_label: "Pernah alami?",
    pain_title: "Kami di sisi anda",
    pain_1: "Sukar cari tukang dipercayai",
    pain_2: "Harga tak telus, caj tersembunyi",
    pain_3: "Dah tempah, tukang tak datang",
    pain_4: "Tak tahu nak cari mana",
    pain_answer_label: "Cara V'GO",
    pain_answer: "Dipercayai · Telus · Tepat Masa · Satu Tap",
    flow_label: "Cara Guna",
    flow_title: "Dari Tap, Terus ke Pintu",
    flow_sub: "Empat langkah. Lebih mudah dari yang disangka.",
    step_1: "Daftar Akaun",
    step_1_desc: "Daftar dengan nombor telefon, 30 saat siap",
    step_2: "Muat Turun App",
    step_2_desc: "Pasang dari browser — tak perlu app store",
    step_3: "Pilih Perkhidmatan",
    step_3_desc: "Pilih, tengok harga, tempah satu tap",
    step_4: "Tukang Sampai",
    step_4_desc: "Tukang bertauliah, tepat masa. Boleh track langsung.",
    roles_label: "Tiga Arah",
    roles_title: "Anda Yang Mana Satu?",
    roles_sub: "Nak bantuan, ada bisnes, atau kerja dengan tangan — V'GO ada tempat untuk anda.",
    role_customer_tag: "Ada hal? Cari V'GO",
    role_customer_title: "Beritahu Masalah, Kami Uruskan",
    role_customer_desc: "Paip pecah, aircond tak sejuk, nak orang cuci rumah, nak urutan — tak perlu tanya sana sini, tak perlu risau kena tipu. Satu tempahan di V'GO, tukang bertauliah terus sampai.",
    role_customer_p1: "30+ Kategori Servis",
    role_customer_p2: "Harga Telus",
    role_customer_p3: "Tukang Bertauliah",
    role_customer_p4: "Boleh Track",
    role_customer_cta: "Cari Servis",
    role_merchant_tag: "Ada bisnes? Sertai V'GO",
    role_merchant_title: "Bisnes Anda, Cahaya Kami",
    role_merchant_desc: "Kedai hardware, syarikat cuci, jual barang terpakai, kedai urutan — letak perniagaan anda di V'GO, biar semua orang di Malaysia jumpa anda.",
    role_merchant_p1: "Daftar Percuma",
    role_merchant_p2: "Trafik Tempatan",
    role_merchant_p3: "Tempahan Terus",
    role_merchant_p4: "Tak Perlu Skill Teknikal",
    role_merchant_cta: "Daftar Bisnes",
    role_tech_tag: "Ada kemahiran? Cari rezeki di V'GO",
    role_tech_title: "Kemahiran Anda, Rezeki Kita",
    role_tech_desc: "Pandai baiki paip, faham elektrik, boleh cuci, ada kemahiran urut — tak perlu tunggu orang kenalkan. Pamerkan kemahiran anda, biar kerja datang sendiri.",
    role_tech_p1: "Kos Sifar",
    role_tech_p2: "Bayar Ikut Tempahan",
    role_tech_p3: "Pensijilan Kemahiran",
    role_tech_p4: "Atur Masa Sendiri",
    role_tech_cta: "Jadi Tukang V'GO",
    merchant_label: "Untuk Peniaga",
    merchant_title1: "Biar Bisnes Anda",
    merchant_title2: "Bersinar di Malaysia",
    merchant_desc: "Hardware, cuci, barang terpakai, kedai urutan — letak perniagaan di V'GO, sampai ke semua orang di Malaysia. Daftar percuma, bayar ikut tempahan, tiada caj tersembunyi.",
    merchant_b1: "Kedai Percuma",
    merchant_b1_desc: "Kos sifar, tiada bayaran bulanan",
    merchant_b2: "Liputan Kebangsaan",
    merchant_b2_desc: "Pendedahan tepat seluruh Malaysia",
    merchant_b3: "Tempahan Masa Nyata",
    merchant_b3_desc: "Telefon berbunyi bila ada tempahan",
    merchant_b4: "Bayar Ikut Tempahan",
    merchant_b4_desc: "Tak jual, tak caj",
    merchant_cta: "Daftar Percuma",
    merchant_flow_label: "Cara Sertai",
    merchant_flow_title: "Sertai Dalam 3 Langkah",
    merchant_f1: "Hantar Maklumat",
    merchant_f1_desc: "Lesen / Info hubungan",
    merchant_f2: "Semakan Platform",
    merchant_f2_desc: "1-2 hari bekerja",
    merchant_f3: "Mula Berniaga",
    merchant_f3_desc: "Terima tempahan",
    merchant_audit: "Masa semakan purata",
    merchant_audit_time: "1-2 hari",
    review_label: "Kisah Benar",
    review_title: "Pengalaman Yang Bercerita",
    faq_label: "Soalan Lazim",
    faq_title: "Soalan Lazim",
    faq_q1: "Apa itu V'GO?",
    faq_a1: "V'GO ialah platform perkhidmatan ke rumah Malaysia, menghubungkan tukang bertauliah dengan keluarga yang memerlukan. Cari pembaikan, pembersihan, urutan, penghantaran, jual beli terpakai, dan kerja — semua di satu tempat.",
    faq_q2: "Macam mana nak tempah?",
    faq_a2: "Daftar akaun, muat turun app, pilih servis, isi alamat dan masa, tempah satu klik. Sistem akan hantar tukang bertauliah berdekatan, anda boleh track mereka secara langsung.",
    faq_q3: "Tukang ada pensijilan?",
    faq_a3: "Ada. Semua tukang perlu lulus pengesahan identiti dan penilaian kemahiran sebelum sertai. Tukang pembaikan juga perlu sediakan sijil berkaitan. Setiap servis direkod sepenuhnya.",
    faq_q4: "Macam mana harga dikira?",
    faq_a4: "Setiap servis ada julat harga permulaan yang jelas sebelum tempah. Harga akhir disahkan oleh tukang di lokasi. Kerja hanya mula selepas anda setuju — tiada caj tersembunyi.",
    faq_q5: "Boleh dapat bayaran balik?",
    faq_a5: "Boleh. Jika tukang tak datang tepat masa atau servis tak siap, anda boleh minta bayaran balik penuh. Diproses dalam 1-3 hari bekerja.",
    faq_q6: "Liputan kawasan mana?",
    faq_a6: "Kini meliputi bandar-bandar utama Malaysia, berkembang berterusan. Sabah tempat kami bermula — Malaysia destinasi kami.",
    cta_title1: "Satu Tap,",
    cta_title2: "Kami Sedia",
    cta_sub: "Daftar percuma. Tukang bertauliah sedia membantu.",
    cta_register: "Daftar Percuma",
    cta_voucher_banner: "Daftar dan dapat baun pemeriksaan RM80",
    ready_title: "Sedia mula?",
    cta_download: "Muat Turun App",
    cta_note: "iOS · Android · Tak perlu app store — pasang dari browser",
    footer_tagline: "Platform perkhidmatan ke rumah Malaysia.\nTukang bertauliah, satu tap sahaja.",
    footer_col1: "Perkhidmatan",
    footer_col2: "Kerjasama",
    footer_col3: "Bantuan",
    footer_link_repair: "Pembaikan Rumah",
    footer_link_clean: "Pembersihan",
    footer_link_massage: "Urutan",
    footer_link_errand: "Penghantaran",
    footer_link_market: "Pasar Terpakai",
    footer_link_jobs: "Cari Kerja",
    footer_link_merchant: "Daftar Peniaga",
    footer_link_tech: "Daftar Tukang",
    footer_link_partner: "Rakan Kongsi",
    footer_link_open: "Platform Terbuka",
    footer_link_enterprise: "Korporat",
    footer_link_careers: "Kerjaya",
    footer_link_about: "Tentang Kami",
    footer_link_faq: "Soalan Lazim",
    footer_link_privacy: "Polisi Privasi",
    footer_link_partner_agreement: "Perjanjian Rakan Kongsi",
    footer_link_terms: "Terma Perkhidmatan",
    footer_link_contact: "Hubungi Kami",
    footer_link_feedback: "Maklum Balas",
    footer_link_partner_invest: "Kerjasama & Pelaburan",
    footer_link_ip: "Harta Intelek",
    footer_copyright: "© 2026 V'GO (V Go On). Hak Cipta Terpelihara.",
    footer_location: "Kota Kinabalu, Sabah, Malaysia",
    footer_ssm: "Berdaftar SSM",
    partner_nav: "Kerjasama & Pelaburan",
    partner_label: "Kerjasama & Pelaburan",
    partner_title: "Mari Besarkan V'GO Bersama",
    partner_intro: "V'GO sedang mencari rakan kongsi yang sehaluan — pelabur, rakan saluran, atau sesiapa yang ingin membina pasaran perkhidmatan ke rumah Malaysia bersama kami.",
    partner_why_title: "Kenapa V'GO?",
    partner_why_1_title: "Pasaran Besar",
    partner_why_1_desc: "Pasaran perkhidmatan ke rumah Malaysia terus berkembang, dengan 1.64 juta pekerja gig di seluruh negara.",
    partner_why_2_title: "Fokus Kebangsaan",
    partner_why_2_desc: "Bermula di Sabah, berkhidmat untuk seluruh Malaysia.",
    partner_why_3_title: "Ekosistem Pelbagai Servis",
    partner_why_3_desc: "30+ kategori — pembaikan, pembersihan, urutan, penghantaran, pasar, kerja.",
    partner_why_4_title: "Platform Tiga Bahasa",
    partner_why_4_desc: "Cina, Inggeris, Melayu — meliputi tiga komuniti utama.",
    partner_traction_title: "Apa Yang Kami Bina",
    partner_traction_1: "30+ Perkhidmatan",
    partner_traction_2: "Penilaian 4.9",
    partner_traction_3: "12K+ Keluarga",
    partner_traction_4: "Seluruh Negara",
    partner_cta_title: "Mari Bincang",
    partner_cta_desc: "Sama ada pelabur, rakan kongsi, atau yang berminat — hubungi kami terus.",
    partner_contact_email: "E-mel Kami",
    partner_contact_whatsapp: "WhatsApp Kami",
    partner_footer_note: "Kami balas setiap mesej dalam 24 jam.",
    coop_title: "4 Cara Bekerjasama",
    coop_sub: "Sama ada anda ada kedai, kemahiran, rangkaian, atau modal — ada tempat untuk anda di VGO.",
    coop_merchant_t: "Pendaftaran Peniaga",
    coop_merchant_d: "Ada kedai dan perkhidmatan? Biar lebih ramai pelanggan jumpa anda. Senaraikan perkhidmatan, terima pesanan, selesai dengan satu klik.",
    coop_merchant_cta: "Daftar Sebagai Peniaga",
    coop_tech_t: "Pendaftaran Tukang",
    coop_tech_d: "Ada kemahiran tapi tiada pelanggan? Sertai VGO. Pesanan terus ke telefon anda. Anda fokus kerja, kami uruskan bayaran.",
    coop_tech_cta: "Sertai Sebagai Tukang",
    coop_agent_t: "Ejen Serantau",
    coop_agent_d: "Kenal pasaran tempatan dan ada sumber? Dapatkan hak operasi eksklusif di kawasan anda, bangunkan peniaga dan tukang, dan nikmati komisen jangka panjang.",
    coop_agent_cta: "Mohon Sebagai Ejen",
    coop_invest_t: "Kerjasama Pelaburan",
    coop_invest_d: "Yakin dengan pasaran on-demand Malaysia? Bekerjasama dengan V'GO untuk kongsi pertumbuhan jangka panjang platform.",
    coop_invest_cta: "Bincang Pelaburan",
    coop_home_label: "Kerjasama & Sertai",
    coop_home_title: "Berkembang Bersama V'GO",
    coop_home_sub: "Sama ada anda peniaga, tukang, atau usahawan yang mengenal pasaran tempatan — V'GO ada model kerjasama untuk anda.",
    coop_home_more: "Lihat Pelan Kerjasama Penuh",
    nav_partner: "Kerjasama",
    flow_1_t: "Hantar Permohonan",
    flow_1_d: "Isi maklumat asas dan pilih model kerjasama anda",
    flow_2_t: "Semakan Kelayakan",
    flow_2_d: "Pasukan kami hubungi anda dalam 24 jam untuk sahkan butiran",
    flow_3_t: "Latihan & Pensijilan",
    flow_3_d: "Latihan operasi platform + piawaian perkhidmatan",
    flow_4_t: "Mula Beroperasi",
    flow_4_d: "Perkhidmatan dilancarkan, pelanggan tempah, pesanan auto-agih",
    flow_5_t: "Penyelesaian Bayaran",
    flow_5_d: "Penyelesaian berkala dan telus selepas setiap pesanan selesai",
    earn_title: "Anggaran Pendapatan",
    earn_note: "Faktor yang mempengaruhi pendapatan sebenar termasuk tetapi tidak terhad kepada: (1) jenis rakan kongsi dan model perniagaan; (2) komitmen masa dan kekerapan pesanan; (3) bandar dan lokasi; (4) kategori perkhidmatan dan strategi harga; (5) musim, cuaca, dan tempoh perayaan; (6) keadaan ekonomi tempatan dan kuasa perbelanjaan pengguna; (7) persaingan pasaran; (8) perubahan dasar platform dan kadar komisen; (9) ulasan pelanggan dan kadar ulangan; (10) faktor lain yang tidak dijangka. Pendapatan sebenar berbeza mengikut individu, masa, dan lokasi.",
    earn_sub: "Angka berdasarkan purata prestasi rakan kongsi serupa di platform. Untuk rujukan sahaja.",
    earn_merchant_t: "Peniaga · Anggaran Bulanan",
    earn_merchant_1: "Pesanan Harian",
    earn_merchant_1_v: "5-15",
    earn_merchant_2: "Nilai Pesanan Purata",
    earn_merchant_2_v: "RM 80-350",
    earn_merchant_3: "Pendapatan Kasar Bulanan",
    earn_merchant_3_v: "RM 12,000-52,000",
    earn_tech_t: "Tukang · Anggaran Bulanan",
    earn_tech_1: "Pesanan Harian",
    earn_tech_1_v: "2-6",
    earn_tech_2: "Nilai Pesanan Purata",
    earn_tech_2_v: "RM 60-280",
    earn_tech_3: "Pendapatan Kasar Bulanan",
    earn_tech_3_v: "RM 3,600-33,600",
    soon_customer_title: "App Pelanggan Akan Datang",
    soon_customer_desc: "Kami sedang menyiapkan sentuhan akhir. Kami akan maklumkan sebaik sahaja tersedia.",
    soon_merchant_title: "Pendaftaran Peniaga Akan Dibuka",
    soon_merchant_desc: "Saluran pendaftaran sedang disediakan. Nantikan pengumuman kami.",
    soon_tech_title: "Pendaftaran Tukang Akan Dibuka",
    soon_tech_desc: "Ada kemahiran? Pintu akan terbuka tidak lama lagi. Tunggu ya.",
    soon_general_title: "Akan Datang",
    soon_general_desc: "Ciri ini sedang dibangunkan dan akan tersedia tidak lama lagi.",
    soon_ok: "Baik, faham",
    page_about_label: "Tentang Kami",
    page_about_title: "Siapa Kami",
    about_vgo_label: "Tentang V'GO",
    about_vgo_title: "Platform Perkhidmatan Gaya Hidup Tempatan Malaysia",
    about_vgo_desc: "Diasaskan di Sabah, Malaysia, misi V'GO adalah menyelesaikan semua keperluan perkhidmatan ke rumah anda dengan satu app.",
    about_vgo_c1_t: "Juruteknik Disahkan",
    about_vgo_c1_d: "Pengesahan ID + dokumen + latihan SOP. Setiap juruteknik disemak dengan ketat.",
    about_vgo_c2_t: "Harga Platform",
    about_vgo_c2_d: "Harga tetap telus untuk servis standard, sebut harga terbuka untuk lain. Tiada kenaikan mengejut.",
    about_vgo_c3_t: "Jaminan Menyeluruh",
    about_vgo_c3_d: "Pembayaran dijamin platform, dilepaskan selepas siap. Ulang percuma jika tak puas hati.",
    about_vgo_s1_n: "6",
    about_vgo_s1_l: "Kategori",
    about_vgo_s2_n: "30+",
    about_vgo_s2_l: "Sub-perkhidmatan",
    about_vgo_s3_n: "100%",
    about_vgo_s3_l: "Juruteknik Disahkan",
    about_vgo_s4_n: "3",
    about_vgo_s4_l: "Bahasa",
    page_privacy_label: "Polisi Privasi",
    page_privacy_title: "Polisi Privasi",
    page_terms_label: "Terma Perkhidmatan",
    page_terms_title: "Terma Perkhidmatan",
    page_faq_label: "Soalan Lazim",
    page_faq_title: "Soalan Lazim",
    page_contact_label: "Hubungi Kami",
    page_contact_title: "Hubungi Kami",
    sub_form_t: "Kawasan anda tiada?",
    sub_form_sub: "Tinggalkan e-mel, kami maklumkan apabila tiba",
    sub_form_ph: "E-mel anda",
    sub_form_btn: "Maklumkan",
    sub_form_agree: "Saya bersetuju menerima notifikasi pelancaran perkhidmatan V'GO. Boleh berhenti bila-bila.",
    sub_form_ok: "Diterima! Kami akan maklumkan",
    sub_form_err: "Gagal. Sila cuba lagi.",
  },
} as const;

export type TransKey = keyof typeof TRANSLATIONS.zh | (string & {});

const LangCtx = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: TransKey) => string;
}>({
  lang: "zh",
  setLang: () => {},
  t: (k) => (TRANSLATIONS.zh as any)[k],
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. 用户手动选过 → 优先用他的选择
    const saved = localStorage.getItem("vgo_lang");
    if (saved === "zh" || saved === "en" || saved === "ms") {
      setLangState(saved);
      document.documentElement.setAttribute("data-lang", saved);
      return;
    }

    // 2. 没选过 → 读浏览器语言自动识别
    // 读浏览器语言偏好列表（按优先级）
    const langs = (navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || "en"]).map(l => String(l).toLowerCase());

    let detected: Lang = "en"; // fallback 英文，检测不到设备语言时用
    for (const l of langs) {
      if (l.startsWith("zh")) { detected = "zh"; break; }
      if (l.startsWith("ms") || l.startsWith("id")) { detected = "ms"; break; }
      if (l.startsWith("en")) { detected = "en"; break; }
    }

    setLangState(detected);
    document.documentElement.setAttribute("data-lang", detected);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("vgo_lang", l);
      document.documentElement.setAttribute("data-lang", l);
    }
  };

  const t = (k: TransKey) => (TRANSLATIONS[lang] as any)[k] ?? (TRANSLATIONS.zh as any)[k];

  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);
```
