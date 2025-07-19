import "@/app/globals.css";
import { HiArrowDown, HiOutlineChevronDoubleDown } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "彩奏 彼方(UTAU)",
  description: "彩音のUTAU音源配布サイト",
};
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import NewsList from "@/components/newslist";
import React from "react";

export default async function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="px-8 md:px-16 min-h-screen flex flex-col justify-center items-start">
        <div className="mx-auto w-full">
          <h1 className="text-6xl font-light mb-6" lang="en-big-bold">
            Ayane
          </h1>
          <div className="text-xl text-gray-700 space-y-3" lang="ja-small">
            <p>
              彩音の<span lang="en-small">UTAU</span>音源へようこそ
            </p>
            <p>あなたの音楽制作に彩りを加えます</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-8 py-8">
          <div className="text-center mb-12">
            <h1
              className="text-2xl lg:text-4xl font-light text-gray-900 mb-4 tracking-wide"
              lang="en-bold"
            >
              News
            </h1>
            <div className="w-22 h-px bg-gray-400 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <NewsList offset={0} limit={3} />
            <div className="flex items-center justify-center mt-8 space-x-2">
              <Link
                href={"/news"}
                className="flex items-center gap-2 group transition-all duration-200 hover:-translate-y-1"
                aria-label="続きのお知らせ"
              >
                <p className="text-lg lg:text-xl" lang="en">
                  View More
                </p>
                <HiOutlineChevronDoubleDown className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t h-px w-8/10 py-3 mx-auto"></div>
      <section className="px-8 md:px-16 py-3 flex-grow">
        <div className="max-w-xl md:max-w-3xl mx-auto">
          <h2
            className="text-4xl font-light mb-6 text-gray-800"
            lang="ja-big-bold"
          >
            彩奏 彼方
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-600" lang="ja-small">
            単独音で構成された一番最初の音源
          </p>
          <div className="mb-8">
            <Button
              className="text-white px-7 py-4 min-w-[56px] min-h-[56px] gap-2 shadow-lg"
              asChild
            >
              <a
                href="https://drive.ayane0857.net/index.php/s/TfLZZS5KPC6QsEc"
                className="flex items-center gap-2 w-64 h-full justify-center"
                tabIndex={0}
                aria-label="Download Ayane Voicebank"
              >
                <span className="text-lg md:text-xl font-semibold" lang="en">
                  Download
                </span>
                <HiArrowDown className="w-8 h-8 duration-300" />
              </a>
            </Button>
          </div>
        </div>
        <div className="max-w-xl md:max-w-3xl mx-auto">
          <div className="p-6 border rounded-lg bg-gray-50 mt-2 space-y-2">
            <h2
              className="text-xl md:text-2xl font-light mb-6 text-gray-800"
              lang="ja-bold"
            >
              キャラクター設定
            </h2>
            <p>名前：彩奏 彼方(アヤカ カナタ)</p>
            <p>年齢：-1歳</p>
            <p>身長：162cm</p>
            <p>種族：化け猫</p>
            <p>得意：単純作業</p>
            <p>苦手：複雑な作業</p>
            <p>好き：スイーツ、辛い物</p>
            <p>嫌い：熱い物</p>
            <p>性格：だらだらごろごろ</p>
            <p>趣味：お昼寝</p>
            <p>インドア, アウトドア：インドア</p>
            <p>持ち物：グリニッジ天文台、手持ち花火</p>
            <p>口調：中性口調</p>
            <p>一人称/二人称/三人称：私/君/あれ</p>
            <p>ハッシュタグ：#彩奏彼方のUTAU保管場</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
