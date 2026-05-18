import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const sans = Noto_Sans_KR({
  variable: "--font-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const serif = Noto_Serif_KR({
  variable: "--font-serif-kr",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
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
    <html lang="ko" className={`${sans.variable} ${serif.variable} h-full`}>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
