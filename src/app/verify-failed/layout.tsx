import type { Metadata } from "next";

const verifyFailedMeta = {
  title: "验证失败 | V'GO",
  description: "邮箱验证失败",
};

export const metadata: Metadata = {
  title: verifyFailedMeta.title,
  description: verifyFailedMeta.description,
  openGraph: {
    title: verifyFailedMeta.title,
    description: verifyFailedMeta.description,
    url: "/verify-failed/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: verifyFailedMeta.title,
    description: verifyFailedMeta.description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
