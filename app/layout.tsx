import type { Metadata, Viewport } from "next";
import { Footer } from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hobson — 企业 AI 与数据解决方案架构师",
  description: "Hobson 的个人主页：企业 AI 转型、Agent 工程化、云数据库、阅读与实践。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
