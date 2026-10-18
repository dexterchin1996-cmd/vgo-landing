import type { Metadata } from "next";
import { cookies } from "next/headers";
import { TRANSLATIONS, type Lang } from "@/lib/translations";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const raw = cookieStore.get("vgo_lang")?.value;
  const lang: Lang = raw === "zh" || raw === "en" || raw === "ms" ? raw : "zh";
  const T = TRANSLATIONS[lang] as Record<string, string>;
  const title = T.about_meta_title ?? T.about_meta_title ?? "关于 VGO | V'GO";
  const description = T.about_meta_desc ?? "了解 VGO 平台的故事、愿景与团队";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "/about/",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
