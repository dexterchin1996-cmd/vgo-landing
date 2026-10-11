import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "用户协议 | V'GO",
  description: "VGO 用户使用协议",
  openGraph: {
    title: "用户协议 | V'GO",
    description: "VGO 用户使用协议",
    url: "/user-agreement/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "用户协议 | V'GO",
    description: "VGO 用户使用协议",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
