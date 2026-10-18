import type { Metadata } from "next";

const userAgreementMeta = {
  title: "用户协议 | V'GO",
  description: "VGO 用户使用协议",
};

export const metadata: Metadata = {
  title: userAgreementMeta.title,
  description: userAgreementMeta.description,
  openGraph: {
    title: userAgreementMeta.title,
    description: userAgreementMeta.description,
    url: "/user-agreement/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: userAgreementMeta.title,
    description: userAgreementMeta.description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
