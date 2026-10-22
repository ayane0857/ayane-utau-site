import "@/app/globals.css";
import { HiArrowDown, HiOutlineChevronDoubleDown } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import NewsList from "@/components/newslist";
import { Separator } from "@base-ui/react/separator";

export const metadata: Metadata = {
  title: "彩奏 彼方 | Ayane UTAU",
  description: "UTAU音源「彩奏 彼方」の公式サイト。音源のダウンロード、キャラクター紹介、利用規約、お知らせをご案内します。",
};

export const dynamic = "force-dynamic";

export default async function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="px-8 md:px-16 min-h-screen flex flex-col justify-center items-start">
        <div className="mx-auto w-full max-w-5xl">
          <p className="text-sm tracking-[0.2em] text-gray-500 mb-4" lang="en">
            UTAU VOICEBANK
          </p>
          <h1 className="text-6xl font-light mb-6 text-gray-900" lang="en-big-bold">
            Ayane
          </h1>
          <div className="text-xl text-gray-700 space-y-3" lang="ja-small">
            <p>彩音の<span lang="en-small">UTAU</span>音源へようこそ</p>
            <p>あなたの音楽制作に彩りを加えます</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-8 py-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-4 tracking-wide" lang="en-bold">
              News
            </h2>
            <Separator className="h-px w-14 mx-auto bg-gray-300" />
          </div>
          <div className="max-w-3xl mx-auto">
            <NewsList offset={0} limit={3} />
            <div className="flex items-center justify-center mt-8 space-x-2">
              <Link
                href="/news"
                className="flex items-center gap-2 group transition-all duration-200 hover:-translate-y-1 text-gray-700"
                aria-label="続きのお知らせ"
              >
                <span className="text-lg lg:text-xl" lang="en">View More</span>
                <HiOutlineChevronDoubleDown className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Separator className="border-t h-px w-9/10 mx-auto border-stone-200" />

      <section className="px-8 md:px-16 py-12 flex-grow">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <h2 className="text-4xl font-light mb-4 text-gray-800" lang="ja-big-bold">彩奏 彼方</h2>
              <p className="text-lg md:text-xl text-gray-600" lang="ja-small">
                単独音で構成された一番最初の音源
              </p>
            </div>
            <Button
              className="text-white px-5 py-3 shadow-sm rounded-lg flex items-center justify-center bg-gray-800 hover:bg-gray-700"
              asChild
            >
              <a
                href="https://file.ayane0857.net/utau/kanata-utau.zip"
                className="flex flex-row items-center gap-2"
                aria-label="Download Ayane Voicebank"
              >
                <span className="text-base" lang="en">Download</span>
                <HiArrowDown className="w-3 h-3" />
              </a>
            </Button>
          </div>

          <div className="p-6 border border-stone-200 rounded-lg bg-stone-50/70 mt-8 space-y-2">
            <h2 className="text-xl md:text-2xl font-light mb-5 text-gray-800" lang="ja-bold">
              キャラクター設定
            </h2>
            <ul className="space-y-1 text-gray-700" lang="ja">
              <li>名前：彩奏 彼方(アヤカ カナタ)</li>
              <li>年齢：<span lang="en">-1</span>歳</li>
              <li>身長：<span lang="en">162cm</span></li>
              <li>種族：化け猫</li>
              <li>得意：単純作業</li>
              <li>苦手：複雑な作業</li>
              <li>好き：スイーツ、辛い物</li>
              <li>嫌い：熱い物</li>
              <li>性格：だらだらごろごろ</li>
              <li>趣味：お昼寝</li>
              <li>インドア, アウトドア：インドア</li>
              <li>持ち物：グリニッジ天文台、手持ち花火</li>
              <li>口調：中性口調</li>
              <li>一人称/二人称/三人称：私/君/あれ</li>
              <li>ハッシュタグ：#彩奏彼方のUTAU保管場</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
