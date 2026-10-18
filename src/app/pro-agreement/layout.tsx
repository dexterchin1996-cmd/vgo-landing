import type { Metadata } from "next";

const proAgreementMeta = {
  title: "师傅协议 | V'GO",
  description: "VGO 技术员服务协议",
};

export const metadata: Metadata = {
  title: proAgreementMeta.title,
  description: proAgreementMeta.description,
  openGraph: {
    title: proAgreementMeta.title,
    description: proAgreementMeta.description,
    url: "/pro-agreement/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: proAgreementMeta.title,
    description: proAgreementMeta.description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
