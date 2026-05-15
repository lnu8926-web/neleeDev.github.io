import type { Metadata } from "next";
import { Press_Start_2P, Gothic_A1 } from "next/font/google";
import BootWrapper from "@/components/layout/BootWrapper";
import CustomCursor from "@/components/layout/CustomCursor";
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
  title: "PIXEL.DEV — 8-Bit Portfolio",
  description: "A pixel art style portfolio built with Next.js 15 and Tailwind CSS",
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
        <BootWrapper>{children}</BootWrapper>
      </body>
    </html>
  );
}
