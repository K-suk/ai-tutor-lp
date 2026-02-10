import type { Metadata } from "next";
import { Lexend, Noto_Sans_JP, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AI Lecture Service Landing Page",
  description: "大学生のAI講習 - AI学舎",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${lexend.variable} ${notoSansJP.variable} ${plusJakartaSans.variable} antialiased font-sans flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-text-main dark:text-white transition-colors duration-200`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
