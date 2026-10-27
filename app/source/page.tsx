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
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="px-6 pb-12 pt-16 md:px-10 md:pb-16 md:pt-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-[0.65rem] tracking-[0.22em] text-stone-500" lang="en">
              VOICEBANKS
            </p>
            <h1 className="text-4xl font-light tracking-wide text-stone-900 sm:text-5xl" lang="en-bold">
              Source
            </h1>
            <p className="mt-4 text-sm text-stone-600">彩音のUTAU音源一覧です。</p>
          </div>
        </section>

        <section className="px-6 pb-12 md:px-10 md:pb-16">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col gap-6 border-y border-stone-200 py-7 sm:flex-row sm:items-center sm:justify-between sm:py-9">
              <div>
                <p className="mb-3 text-[0.65rem] tracking-[0.2em] text-stone-500" lang="en">
                  VOICEBANK 01
                </p>
                <h2 className="text-3xl font-light text-stone-900" lang="ja-big-bold">
                  彩奏 彼方
                </h2>
                <p className="mt-3 text-sm text-stone-600" lang="ja-small">
                  単独音で構成された一番最初の音源
                </p>
              </div>
              <Button
                className="h-11 rounded-sm bg-stone-900 px-5 text-white hover:bg-stone-700"
                asChild
              >
                <a
                  href="https://file.ayane0857.net/utau/kanata-utau.zip"
                  className="flex items-center gap-2"
                  aria-label="彩奏 彼方 UTAU音源をダウンロード"
                >
                  <span lang="en">Download</span>
                  <HiArrowDown className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="pt-8">
              <h3 className="mb-5 text-lg font-medium text-stone-800" lang="ja-bold">
                キャラクター設定
              </h3>
              <dl className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
                {profile.map(([label, value]) => (
                  <div className="border-t border-stone-200 py-3" key={label}>
                    <dt className="text-xs text-stone-500">{label}</dt>
                    <dd className="mt-1 text-sm text-stone-800">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
