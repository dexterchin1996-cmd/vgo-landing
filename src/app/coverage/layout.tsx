import type { Metadata } from "next";
import { cookies } from "next/headers";
import { TRANSLATIONS, type Lang } from "@/lib/translations";

const BASE_URL = "https://vgo-website.vercel.app";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const raw = cookieStore.get("vgo_lang")?.value;
  const lang: Lang = raw === "zh" || raw === "en" || raw === "ms" ? raw : "zh";
  const T = TRANSLATIONS[lang] as Record<string, string>;
  return {
    title: T.coverage_title ?? "Coverage",
    description: T.coverage_sub ?? "",
    alternates: {
      canonical: BASE_URL + "/coverage",
      languages: {
        "zh-MY": BASE_URL + "/coverage",
        "en-MY": BASE_URL + "/coverage?lang=en",
        "ms-MY": BASE_URL + "/coverage?lang=ms",
      },
    },
    openGraph: {
      title: T.coverage_title ?? "Coverage",
      description: T.coverage_sub ?? "",
      url: BASE_URL + "/coverage",
    },
  };
}

export default function CoverageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
