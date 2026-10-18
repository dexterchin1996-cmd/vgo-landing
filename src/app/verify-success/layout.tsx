import type { Metadata } from "next";
import { cookies } from "next/headers";
import { TRANSLATIONS, type Lang } from "@/lib/translations";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const raw = cookieStore.get("vgo_lang")?.value;
  const lang: Lang = raw === "zh" || raw === "en" || raw === "ms" ? raw : "zh";
  const T = TRANSLATIONS[lang] as Record<string, string>;
  const title = T.verify_success_meta_title ?? "verify-success | V'GO";
  const description = T.verify_success_meta_desc ?? "";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "/verify-success/",
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
