import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "商家协议 | V'GO",
  description: "VGO 商家入驻协议",
  openGraph: {
    title: "商家协议 | V'GO",
    description: "VGO 商家入驻协议",
    url: "/merchant-agreement/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "商家协议 | V'GO",
    description: "VGO 商家入驻协议",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
