import type { Metadata } from "next";

const aboutMeta = {
  title: "关于 VGO | V'GO",
  description: "了解 VGO 平台的故事、愿景与团队",
};

export const metadata: Metadata = {
  title: aboutMeta.title,
  description: aboutMeta.description,
  openGraph: {
    title: aboutMeta.title,
    description: aboutMeta.description,
    url: "/about/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: aboutMeta.title,
    description: aboutMeta.description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
