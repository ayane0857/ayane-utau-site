import "@/app/globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { HiArrowDown } from "react-icons/hi";
export const metadata: Metadata = {
  title: "Ayane(UTAU) - Source",
  description: "彩音の音源一覧",
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center mb-12 px-8 py-6 bg-white">
        <h1
          className="text-3xl lg:text-5xl font-bold text-gray-900 mb-2 tracking-wide"
          lang="en-bold"
        >
          Source
        </h1>
        <p className="text-base text-gray-600 font-light mt-2">
          UTAU音源一覧です
        </p>
      </div>
      <section className="px-8 md:px-16 py-3 flex-grow">
        <div className="max-w-xl md:max-w-3xl mx-auto grid grid-cols-2">
          <div>
            <h2
              className="text-4xl font-light mb-6 text-gray-800"
              lang="ja-big-bold"
            >
              彩奏 彼方
            </h2>
            <p
              className="text-lg md:text-xl mb-8 text-gray-600"
              lang="ja-small"
            >
              単独音で構成された一番最初の音源
            </p>
          </div>
          <div className="mb-2 flex items-center">
            <Button
              className="text-white px-4 py-2 shadow-lg rounded-lg flex items-center justify-center"
              asChild
            >
              <a
                href="http://ayane0857.m1.xrea.com/utau/kanata-utau.zip"
                className="flex flex-row items-center gap-2 w-46 h-12"
                tabIndex={0}
                aria-label="Download Ayane Voicebank"
                download
              >
                <span className="text-base" lang="en">
                  Download
                </span>
                <HiArrowDown className="w-3 h-3" />
              </a>
            </Button>
          </div>
        </div>
        <div className="max-w-xl md:max-w-3xl mx-auto">
          <div className="p-6 rounded-lg mt-2 space-y-2">
            <h2
              className="text-xl md:text-2xl font-light mb-6 text-gray-800"
              lang="ja-bold"
            >
              キャラクター設定
            </h2>
            <ul className="space-y-1" lang="ja">
              <li>名前：彩奏 彼方(アヤカ カナタ)</li>
              <li>
                年齢：<span lang="en">-1</span>歳
              </li>
              <li>
                身長：<span lang="en">162cm</span>
              </li>
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
    </main>
  );
}
