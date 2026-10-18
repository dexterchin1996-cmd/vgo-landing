import type { Metadata } from "next";

const faqMeta = {
  title: "常见问题 | V'GO",
  description: "VGO 平台常见问题解答",
};

export const metadata: Metadata = {
  title: faqMeta.title,
  description: faqMeta.description,
  openGraph: {
    title: faqMeta.title,
    description: faqMeta.description,
    url: "/faq/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: faqMeta.title,
    description: faqMeta.description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
