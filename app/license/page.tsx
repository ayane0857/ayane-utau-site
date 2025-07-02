import "@/app/globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export const metadata: Metadata = {
  title: "彩奏 彼方(UTAU)",
  description: "彩音のUTAU音源配布サイト",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12">
      <section className="w-full max-w-xl">
        <h1
          className="text-2xl md:text-4xl mb-6 text-center font-light"
          lang="ja-big-bold"
        >
          利用規約
        </h1>
        <ul className="space-y-4 text-base leading-relaxed">
          <li>
            本音源は、<span lang="en">UTAU</span>のキャラクター名(彩奏
            彼方)の表記が必須となります。
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
            動画広告などのコンテンツ制作および配信、または投稿によって得られた利益は、営利目的には含まれないものとします。
          </li>
          <li>
            改変は自由ですが、元音源との区別が困難な程度に改変された場合は、改変された旨を明記してください。
          </li>
        </ul>
        <div className="mt-8">
          <p className="mb-2 md:text-lg">
            以下のコンテンツでのご使用はご遠慮ください。
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
            <li>政治的、宗教的なコンテンツ</li>
            <li>
              他者を誹謗中傷する、または多くの人が不快に感じるような表現を含むもの
            </li>
            <li>
              <span lang="en">R</span>
              指定に類する内容が含まれており、適切な閲覧制限が設けられていないコンテンツ
            </li>
          </ul>
        </div>
        <div className="mt-8 space-y-1 ">
          <p className="text-xl md:text-2xl font-bold" lang="en">
            Super Thanks
          </p>
          <p>
            <span lang="en">UTAU</span>の原音設定 - らむらさん (
            <a
              href="https://x.com/ramura0708"
              className="underline text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
              lang="en"
            >
              @ramura0708
            </a>
            )
          </p>
        </div>
        <div className="mt-8 text-sm text-gray-600 space-y-1">
          <p>
            本規約は、予告なく変更される場合があります。予めご了承ください。
          </p>
          <p>
            この音源を使用したことによって生じたいかなるトラブルや損害についても、制作者は一切の責任を負いかねます。
          </p>
        </div>
      </section>
      <div className="mt-8 flex justify-center">
        <Link href="/" className="text-sm">
          <Button variant="outline">ホームに戻る</Button>
        </Link>
      </div>
      <footer className="py-8 px-8 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg font-light" lang="en-small">
            © 2025 彩音. <Link href="/license">LICENSE</Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
