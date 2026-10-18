import type { Metadata } from "next";

const verifySuccessMeta = {
  title: "验证成功 | V'GO",
  description: "邮箱验证成功",
};

export const metadata: Metadata = {
  title: verifySuccessMeta.title,
  description: verifySuccessMeta.description,
  openGraph: {
    title: verifySuccessMeta.title,
    description: verifySuccessMeta.description,
    url: "/verify-success/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: verifySuccessMeta.title,
    description: verifySuccessMeta.description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
