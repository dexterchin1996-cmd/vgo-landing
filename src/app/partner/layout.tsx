import type { Metadata } from "next";

const partnerMeta = {
  title: "合作伙伴 | V'GO",
  description: "成为 VGO 的合作伙伴",
};

export const metadata: Metadata = {
  title: partnerMeta.title,
  description: partnerMeta.description,
  openGraph: {
    title: partnerMeta.title,
    description: partnerMeta.description,
    url: "/partner/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: partnerMeta.title,
    description: partnerMeta.description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
