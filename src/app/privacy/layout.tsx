import type { Metadata } from "next";

const privacyMeta = {
  title: "隐私政策 | V'GO",
  description: "VGO 平台隐私政策（PDPA 2024 合规）",
};

export const metadata: Metadata = {
  title: privacyMeta.title,
  description: privacyMeta.description,
  openGraph: {
    title: privacyMeta.title,
    description: privacyMeta.description,
    url: "/privacy/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: privacyMeta.title,
    description: privacyMeta.description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
