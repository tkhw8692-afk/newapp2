import type { Metadata } from "next";
import { Gowun_Batang, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const sans = Noto_Sans_KR({
  variable: "--font-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

const batang = Gowun_Batang({
  variable: "--font-batang",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "고요",
  description: "오늘 내려놓지 못한 것을 적어보세요. 익명의 조용한 공간.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${sans.variable} ${batang.variable} h-full`}>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
