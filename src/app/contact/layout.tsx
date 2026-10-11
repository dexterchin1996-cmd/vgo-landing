import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们 | V'GO",
  description: "联系 VGO 客服，随时为你服务",
  openGraph: {
    title: "联系我们 | V'GO",
    description: "联系 VGO 客服，随时为你服务",
    url: "/contact/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "联系我们 | V'GO",
    description: "联系 VGO 客服，随时为你服务",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
