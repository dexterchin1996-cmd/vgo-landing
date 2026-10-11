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
