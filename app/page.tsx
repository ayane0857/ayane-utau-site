import "./globals.css";
import { HiArrowDown } from "react-icons/hi";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="px-8 md:px-16 py-25">
        <div className="max-w-xl md:max-w-3xl mx-auto">
          <h1 className="text-6xl font-light mb-6" lang="en-big-bold">
            Ayane
          </h1>
          <div className="text-xl text-gray-700 space-y-3" lang="ja-small">
            <p>
              彩音の<span lang="en-small">UTAU</span>音源へようこそ！
            </p>
            <p>あなたの音楽制作に彩りを加えます。</p>
            <p>下記のリンクからダウンロードしてください！</p>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 py-10 flex-grow">
        <div className="max-w-xl md:max-w-3xl mx-auto">
          <h2 className="text-4xl font-light mb-6 text-gray-800" lang="en-bold">
            彩奏 彼方
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-600" lang="ja-small">
            単独音で構成された一番最初の音源
          </p>
          <div className="mb-8">
            <Button className="text-white transition-colors">
              <a
                href="https://drive.ayane0857.net/index.php/s/TfLZZS5KPC6QsEc"
                className="flex items-center"
              >
                <span className="text-lg md:text-xl" lang="en">
                  Download
                </span>
                <HiArrowDown className="ml-2 w-10 h-10 duration-300" />
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

      <footer className="py-8 px-8 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg font-light" lang="en-small">
            © 2025 Ayane. CC BY-NC-ND 4.0
          </p>
        </div>
      </footer>
    </div>
  );
}
