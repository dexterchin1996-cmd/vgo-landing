import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LangProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "VGO · 有事不用愁，上门找 VGO",
  description: "VGO（V Go On）—— 马来西亚上门服务平台。居家维修、清洁、按摩、跑腿、商城、找工作，一站搞定。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>
        <LangProvider>
          <Navbar />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
