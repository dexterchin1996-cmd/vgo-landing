import type { Metadata } from "next";

const termsMeta = {
  title: "服务条款 | V'GO",
  description: "VGO 平台服务条款",
};

export const metadata: Metadata = {
  title: termsMeta.title,
  description: termsMeta.description,
  openGraph: {
    title: termsMeta.title,
    description: termsMeta.description,
    url: "/terms/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: termsMeta.title,
    description: termsMeta.description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
