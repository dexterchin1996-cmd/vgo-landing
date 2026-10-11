import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "师傅协议 | V'GO",
  description: "VGO 技术员服务协议",
  openGraph: {
    title: "师傅协议 | V'GO",
    description: "VGO 技术员服务协议",
    url: "/pro-agreement/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "师傅协议 | V'GO",
    description: "VGO 技术员服务协议",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
