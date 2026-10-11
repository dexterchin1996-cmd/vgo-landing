import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "服务条款 | V'GO",
  description: "VGO 平台服务条款",
  openGraph: {
    title: "服务条款 | V'GO",
    description: "VGO 平台服务条款",
    url: "/terms/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "服务条款 | V'GO",
    description: "VGO 平台服务条款",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
