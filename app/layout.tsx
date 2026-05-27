import type { Metadata } from "next";
import { Press_Start_2P, Gothic_A1 } from "next/font/google";
import BootWrapper from "@/components/layout/BootWrapper";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollController from "@/components/layout/ScrollController";
import "./globals.css";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const gothicA1 = Gothic_A1({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-gothic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NELEE.DEV | FRONTEND Developer Portfolio",
  description: "8비트 무드를 담아 만든 프론트엔드 개발자 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pixelFont.variable} ${gothicA1.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-brand-dark text-foreground">
        <CustomCursor />
        <ScrollController />
        <BootWrapper>{children}</BootWrapper>
      </body>
    </html>
  );
}
