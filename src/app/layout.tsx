import type { Metadata } from "next";
import { Archivo, Archivo_Black } from "next/font/google";
import { cookies } from "next/headers";
import { TRANSLATIONS, type Lang } from "@/lib/translations";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import ShareButton from "@/components/ShareButton";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LangProvider } from "@/lib/i18n";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
});

const BASE_URL = "https://vgo-website.vercel.app";

const SITE = {
  title: "V'GO · 有事不用愁，上门找 V'GO",
  descShort: "马来西亚上门服务平台。居家维修、清洁、按摩、跑腿、商城、找工作，一站搞定。",
  company: "Ventus Reflexology",
  logo: "/logo-mark.svg",
  ogImage: "/shared/s01.jpg",
} as const;

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

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const raw = cookieStore.get("vgo_lang")?.value;
  const lang: Lang = raw === "zh" || raw === "en" || raw === "ms" ? raw : "zh";
  const T = TRANSLATIONS[lang] as Record<string, string>;
  return {
  metadataBase: new URL(BASE_URL),
  title: {
    default: (T.site_meta_title ?? SITE.title),
    template: "%s · V'GO",
  },
  description: "V'GO（V Go On）—— 马来西亚上门服务平台。居家维修、清洁、按摩、跑腿、商城、找工作，一站搞定。",
  keywords: ["VGO", "上门服务", "马来西亚", "沙巴", "亚庇", "Kota Kinabalu", "维修", "清洁", "按摩", "跑腿"],
  authors: [{ name: SITE.company }],
  creator: SITE.company,
  publisher: SITE.company,
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
    title: (T.site_meta_title ?? SITE.title),
    description: (T.site_meta_desc ?? SITE.descShort),
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "V'GO - 有事不用愁，上门找 V'GO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: (T.site_meta_title ?? SITE.title),
    description: (T.site_meta_desc ?? SITE.descShort),
    images: [SITE.ogImage],
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
      { url: SITE.logo, type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: SITE.logo,
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "V'GO",
  },
  category: "service",
  };
}


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "V'GO",
  alternateName: "V Go On",
  url: BASE_URL,
  logo: BASE_URL + SITE.logo,
  description: "马来西亚沙巴本地生活服务平台。上门维修、清洁、按摩、跑腿、二手、招聘。",
  brand: "V'GO",
  parentOrganization: {
    "@type": "Organization",
    name: SITE.company,
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
    <html lang="zh-MY" className={archivo.variable + " " + archivoBlack.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#06111d] text-white antialiased font-sans">
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
