import { Zen_Maru_Gothic, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const ZenMaru_font = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400"],
  style: "normal",
  variable: "--font-jp",
});

const Inter_font = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: "normal",
  variable: "--font-en",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${ZenMaru_font.variable} ${Inter_font.variable}`}>
        {children}
        <GoogleAnalytics gaId="G-XXY350LVGX" />
      </body>
    </html>
  );
}
