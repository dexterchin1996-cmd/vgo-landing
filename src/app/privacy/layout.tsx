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
