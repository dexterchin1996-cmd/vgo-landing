import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "验证成功 | V'GO",
  description: "邮箱验证成功",
  openGraph: {
    title: "验证成功 | V'GO",
    description: "邮箱验证成功",
    url: "/verify-success/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "验证成功 | V'GO",
    description: "邮箱验证成功",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
