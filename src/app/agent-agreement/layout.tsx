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
