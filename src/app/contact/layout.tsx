import type { Metadata } from "next";

const contactMeta = {
  title: "联系我们 | V'GO",
  description: "联系 VGO 客服，随时为你服务",
};

export const metadata: Metadata = {
  title: contactMeta.title,
  description: contactMeta.description,
  openGraph: {
    title: contactMeta.title,
    description: contactMeta.description,
    url: "/contact/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: contactMeta.title,
    description: contactMeta.description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
