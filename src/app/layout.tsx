import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LangProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sc",
  weight: ["400", "500", "700", "900"],
});

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
        url: "/og-image.png",
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
    images: ["/og-image.png"],
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
    icon: "/icon.png",
  },
  category: "service",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "V'GO",
  alternateName: "V Go On",
  url: BASE_URL,
  logo: BASE_URL + "/logo-bg.png",
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
    <html lang="zh-MY" className={`${inter.variable} ${notoSansSC.variable}`}>
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
          <CookieBanner />
          <Analytics />
          <SpeedInsights />
        </LangProvider>
      </body>
    </html>
  );
}
