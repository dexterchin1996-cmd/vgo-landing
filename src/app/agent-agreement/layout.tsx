import type { Metadata } from "next";

const agentAgreementMeta = {
  title: "代理协议 | V'GO",
  description: "VGO 代理合作协议",
};

export const metadata: Metadata = {
  title: agentAgreementMeta.title,
  description: agentAgreementMeta.description,
  openGraph: {
    title: agentAgreementMeta.title,
    description: agentAgreementMeta.description,
    url: "/agent-agreement/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: agentAgreementMeta.title,
    description: agentAgreementMeta.description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
