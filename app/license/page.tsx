import "@/app/globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
export const metadata: Metadata = {
  title: "彩奏 彼方(UTAU)",
  description: "彩音のUTAU音源配布サイト",
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="w-full max-w-xl px-6 md:px-12 py-9 mx-auto flex flex-col items-center">
        <h1
          className="text-2xl md:text-4xl mb-6 text-center font-light"
          lang="ja-big-bold"
        >
          利用規約
        </h1>
        <ul className="space-y-2 text-base leading-relaxed">
          <li>
            本音源をご使用の際は、<span lang="en">UTAU</span>
            キャラクター名『彩奏
            彼方』を、動画説明文やクレジット等の分かりやすい場所に明記してください。
          </li>
          <li>
            営利目的でご使用になる際は、事前にご連絡をお願いいたします（
            <a
              href="mailto:info@ayane0857.net"
              className="underline text-blue-600"
              lang="en"
            >
              info@ayane0857.net
            </a>
            ）
          </li>
          <li>
            動画投稿サイトの収益化機能（例：<span lang="en">YouTube</span>
            の広告収入等）で得られた利益は、営利目的には該当しません。
          </li>
          <li>
            ただし、<span lang="en">CD</span>
            販売、グッズ販売、有料ダウンロード配信など、物販・金銭の直接的やり取りが発生する場合は、営利目的として事前連絡が必要です。
          </li>
          <li>
            改変は自由ですが、元音源との区別が困難な程度に改変された場合は、改変された旨を明記してください。
          </li>
          <li>
            性的・暴力的など、<span lang="en">R18</span>・
            <span lang="en">R18G</span>
            に相当する表現を含むコンテンツに関しては、年齢制限などの適切な制限が設けられている場合に限り、使用を認めます。
          </li>
          <li>公式立ち絵素材を他キャラクターとして使用することを禁じます。</li>
          <li>演出上で声や中身を変えることは使用可能です。</li>
          <li>
            <span lang="en">SNS</span>等でのアイコンへの使用はおやめください。
          </li>
          <li>制限が設けられていない場合は使用をご遠慮ください。</li>
        </ul>

        <div className="mt-3 text-sm text-gray-600 space-y-1">
          <p>
            本規約は、予告なく変更される場合があります。予めご了承ください。
          </p>
          <p>
            この音源を使用したことによって生じたいかなるトラブルや損害についても、制作者は一切の責任を負いかねます。
          </p>
        </div>
      </section>
      <section className="w-full max-w-xl px-6 md:px-12 py-9 mx-auto">
        <h1
          className="text-2xl md:text-4xl mb-6 text-center font-light"
          lang="ja-big-bold"
        >
          クレジット
        </h1>
        <p>
          私は<span lang="en">UTAU</span>
          の作成に協力してくれた人々に感謝します。
        </p>
        <ul className="space-y-2 mt-4">
          <li>
            <span lang="en">UTAU</span>の原音設定 - らむらさん (
            <a
              href="https://x.com/ramura0708"
              className="underline text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
              lang="en"
            >
              X: @ramura0708
            </a>
            )
          </li>
          <li>
            <span lang="en">Web</span>サイトデザイン助言 - ゆいとさん (
            <a
              href="https://www.yuito-it.jp/"
              className="underline text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
              lang="en"
            >
              yuito-it.jp
            </a>
            )
          </li>
          <li>
            サーバー提供 - しばいぬさん (
            <a
              href="https://github.com/sibapybot"
              className="underline text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
              lang="en"
            >
              Github: @sibapybot
            </a>
            )
          </li>
          <li>
            助言 - UniProject (
            <a
              href="https://uniproject.jp/"
              className="underline text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
              lang="en"
            >
              uniproject.jp
            </a>
            )
          </li>
        </ul>
      </section>
      <Footer />
    </main>
  );
}
