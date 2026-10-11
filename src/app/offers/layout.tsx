import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "优惠活动 | V'GO",
  description: "VGO 平台最新优惠与活动",
  openGraph: {
    title: "优惠活动 | V'GO",
    description: "VGO 平台最新优惠与活动",
    url: "/offers/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "优惠活动 | V'GO",
    description: "VGO 平台最新优惠与活动",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
