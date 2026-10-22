import "@/app/globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { HiArrowDown } from "react-icons/hi";

export const metadata: Metadata = {
  title: "音源配布",
  description: "彩音の音源一覧",
  alternates: { canonical: "/source" },
};

const profile = [
  ["名前", "彩奏 彼方（アヤカ カナタ）"],
  ["年齢", "-1歳"],
  ["身長", "162cm"],
  ["種族", "化け猫"],
  ["得意 / 苦手", "単純作業 / 複雑な作業"],
  ["好き / 嫌い", "スイーツ、辛い物 / 熱い物"],
  ["性格 / 趣味", "だらだらごろごろ / お昼寝"],
  ["インドア・アウトドア", "インドア"],
  ["持ち物", "グリニッジ天文台、手持ち花火"],
  ["口調", "中性口調"],
  ["一人称 / 二人称 / 三人称", "私 / 君 / あれ"],
  ["ハッシュタグ", "#彩奏彼方のUTAU保管場"],
];

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center mb-10 px-8 py-6 bg-white">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-2 tracking-wide" lang="en-bold">
          Source
        </h1>
        <p className="text-base text-gray-600 font-light mt-2">UTAU音源一覧です</p>
      </div>

      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-3xl mx-auto overflow-hidden rounded-lg border border-gray-200 bg-white">
          <div className="flex flex-col gap-6 p-6 md:p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 text-xs tracking-widest text-gray-500" lang="en">VOICEBANK 01</p>
              <h2 className="text-3xl font-light text-gray-900" lang="ja-big-bold">彩奏 彼方</h2>
              <p className="mt-2 text-gray-600" lang="ja-small">単独音で構成された一番最初の音源</p>
            </div>
            <Button
              className="h-11 rounded-md bg-gray-800 px-5 text-white hover:bg-gray-700"
              asChild
            >
              <a
                href="https://file.ayane0857.net/utau/kanata-utau.zip"
                className="flex items-center gap-2"
                aria-label="彩奏 彼方 UTAU音源をダウンロード"
              >
                Download <HiArrowDown className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="border-t border-gray-200 bg-gray-50/70 px-6 py-6 md:px-8">
            <h3 className="mb-4 text-lg font-medium text-gray-800">キャラクター設定</h3>
            <dl className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {profile.map(([label, value]) => (
                <div className="border-t border-gray-200 py-3" key={label}>
                  <dt className="text-xs text-gray-500">{label}</dt>
                  <dd className="mt-1 text-sm text-gray-800">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
