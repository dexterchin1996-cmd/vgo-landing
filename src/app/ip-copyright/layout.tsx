import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "知识产权 | V'GO",
  description: "VGO 知识产权与版权声明",
  openGraph: {
    title: "知识产权 | V'GO",
    description: "VGO 知识产权与版权声明",
    url: "/ip-copyright/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "知识产权 | V'GO",
    description: "VGO 知识产权与版权声明",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
