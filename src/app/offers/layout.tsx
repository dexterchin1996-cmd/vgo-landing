import type { Metadata } from "next";

const offersMeta = {
  title: "优惠活动 | V'GO",
  description: "VGO 平台最新优惠与活动",
};

export const metadata: Metadata = {
  title: offersMeta.title,
  description: offersMeta.description,
  openGraph: {
    title: offersMeta.title,
    description: offersMeta.description,
    url: "/offers/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: offersMeta.title,
    description: offersMeta.description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
