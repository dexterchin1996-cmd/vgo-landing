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
