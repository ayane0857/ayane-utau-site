import "@/app/globals.css";
import { HiArrowDown, HiArrowRight } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import NewsList from "@/components/newslist";

export const metadata: Metadata = {
  title: "彩奏 彼方 | Ayane UTAU",
  description:
    "UTAU音源「彩奏 彼方」の公式サイト。音源のダウンロード、キャラクター紹介、利用規約、お知らせをご案内します。",
};

export const dynamic = "force-dynamic";

export default async function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="px-6 py-24 sm:py-32 md:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <p className="mb-6 text-xs tracking-[0.24em] text-stone-500" lang="en">
              UTAU VOICEBANK
            </p>
            <h1 className="text-7xl font-light tracking-tight text-stone-900 sm:text-8xl md:text-9xl" lang="en-big-bold">
              Ayane
            </h1>
            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-10 bg-rose-300" aria-hidden="true" />
              <p className="text-xl tracking-[0.12em] text-stone-700 sm:text-2xl" lang="ja-big-bold">
                彩奏 彼方
              </p>
            </div>
            <p className="mt-7 text-sm leading-8 text-stone-600 sm:text-base" lang="ja-small">
              あなたの音楽制作に彩りを添える、UTAU音源です。
            </p>
            <Link
              href="/source"
              className="mt-10 inline-flex items-center gap-3 border-b border-stone-300 pb-2 text-sm tracking-wide text-stone-800 transition-colors hover:border-rose-300 hover:text-stone-500"
              lang="en"
            >
              Explore voicebank <HiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="bg-stone-50/70 px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-[0.65rem] tracking-[0.22em] text-stone-500" lang="en">
                  LATEST UPDATES
                </p>
                <h2 className="text-3xl font-light tracking-wide text-stone-900 sm:text-4xl" lang="en-bold">
                  News
                </h2>
              </div>
              <Link
                href="/news"
                className="mb-1 inline-flex items-center gap-2 text-xs tracking-wide text-stone-600 hover:text-stone-950"
                aria-label="お知らせ一覧"
                lang="en"
              >
                All news <HiArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <NewsList offset={0} limit={3} />
          </div>
        </section>

        <section className="px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-[0.65rem] tracking-[0.22em] text-stone-500" lang="en">
              VOICEBANK 01
            </p>
            <div className="flex flex-col gap-6 border-b border-stone-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-light text-stone-900 sm:text-4xl" lang="ja-big-bold">
                  彩奏 彼方
                </h2>
                <p className="mt-3 text-sm text-stone-600 sm:text-base" lang="ja-small">
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
                  <span lang="en">Download voicebank</span>
                  <HiArrowDown className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="pt-8">
              <h3 className="mb-5 text-lg font-medium text-stone-800" lang="ja-bold">
                キャラクター設定
              </h3>
              <dl className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
                {[
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
                ].map(([label, value]) => (
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
