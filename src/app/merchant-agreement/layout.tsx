import type { Metadata } from "next";

const merchantAgreementMeta = {
  title: "商家协议 | V'GO",
  description: "VGO 商家入驻协议",
};

export const metadata: Metadata = {
  title: merchantAgreementMeta.title,
  description: merchantAgreementMeta.description,
  openGraph: {
    title: merchantAgreementMeta.title,
    description: merchantAgreementMeta.description,
    url: "/merchant-agreement/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: merchantAgreementMeta.title,
    description: merchantAgreementMeta.description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
