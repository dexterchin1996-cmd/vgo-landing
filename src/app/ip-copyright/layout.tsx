import type { Metadata } from "next";

const ipCopyrightMeta = {
  title: "知识产权 | V'GO",
  description: "VGO 知识产权与版权声明",
};

export const metadata: Metadata = {
  title: ipCopyrightMeta.title,
  description: ipCopyrightMeta.description,
  openGraph: {
    title: ipCopyrightMeta.title,
    description: ipCopyrightMeta.description,
    url: "/ip-copyright/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: ipCopyrightMeta.title,
    description: ipCopyrightMeta.description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
