import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "常见问题 | V'GO",
  description: "VGO 平台常见问题解答",
  openGraph: {
    title: "常见问题 | V'GO",
    description: "VGO 平台常见问题解答",
    url: "/faq/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "常见问题 | V'GO",
    description: "VGO 平台常见问题解答",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
