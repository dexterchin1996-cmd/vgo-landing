import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "验证失败 | V'GO",
  description: "邮箱验证失败",
  openGraph: {
    title: "验证失败 | V'GO",
    description: "邮箱验证失败",
    url: "/verify-failed/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "验证失败 | V'GO",
    description: "邮箱验证失败",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
