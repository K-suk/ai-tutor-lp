import type { Metadata } from "next";
import { Lexend, Noto_Sans_JP, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://ai-gakusha.com"),
  title: {
    default: "AI学舎 | 大学生によるマンツーマンAI活用講習",
    template: "%s | AI学舎",
  },
  description:
    "初心者・シニア大歓迎！青山学院大学の現役学生が教える、優しく丁寧なAI講習サービス「AI学舎」。スマホ操作の基本からLINEでの手軽なAI活用、仕事への応用まで、あなたの「やりたいこと」に合わせてサポートします。まずは15分の無料相談から。",
  keywords: [
    "AI講習",
    "スマホ教室",
    "シニア",
    "初心者",
    "マンツーマン",
    "青山学院大学",
    "ChatGPT",
    "生成AI",
    "パソコン教室",
    "リスキリング",
  ],
  authors: [{ name: "AI学舎", url: "https://ai-gakusha.com" }], // 仮のURL
  creator: "AI学舎",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://ai-gakusha.com", // 仮のURL
    siteName: "AI学舎",
    title: "AI学舎 | 大学生によるマンツーマンAI活用講習",
    description:
      "初心者・シニア大歓迎！青山学院大学の現役学生が教える、優しく丁寧なAI講習サービス。スマホ操作から実践的なAI活用まで、マンツーマンでサポートします。",
    images: [
      {
        url: "/images/og-image.jpg", // OG画像があれば設定したい
        width: 1200,
        height: 630,
        alt: "AI学舎 - 大学生によるマンツーマンAI講習",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI学舎 | 大学生によるマンツーマンAI活用講習",
    description:
      "初心者・シニア大歓迎！大学生が教える、優しく丁寧なAI講習サービス。スマホ操作から実践的なAI活用までサポート。",
    images: ["/images/og-image.jpg"], // OG画像
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6TZ7M8QWCT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6TZ7M8QWCT');
          `}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
