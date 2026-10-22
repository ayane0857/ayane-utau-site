import { Zen_Maru_Gothic, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Providers from "@/components/ui/ProgressBarProvider";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://utau.ayane0857.net"),
  title: {
    default: "彩奏 彼方 | Ayane UTAU",
    template: "%s | 彩奏 彼方",
  },
  description: "UTAU音源「彩奏 彼方」の公式サイト。音源のダウンロード、利用規約、お知らせをご案内します。",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "彩奏 彼方 | Ayane UTAU",
    title: "彩奏 彼方 | Ayane UTAU",
    description: "UTAU音源「彩奏 彼方」の公式サイト。音源のダウンロード、利用規約、お知らせをご案内します。",
    url: "https://utau.ayane0857.net",
  },
  twitter: { card: "summary" },
} satisfies import("next").Metadata;

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
        <Providers>{children}</Providers>
      </body>
      <GoogleAnalytics gaId="G-XXY350LVGX" />
    </html>
  );
}
