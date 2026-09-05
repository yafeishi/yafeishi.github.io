import type { Metadata, Viewport } from "next";
import { Footer } from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hobson — 个人主页",
  description: "Hobson 的个人主页：数据库与 AI 解决方案、跑步、阅读与还没说完的话。",
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
