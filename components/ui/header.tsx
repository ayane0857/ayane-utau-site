import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-stone-200/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className="text-xl tracking-wide text-stone-900"
          lang="en-big-bold"
        >
          Ayane
        </Link>
        <nav aria-label="メインナビゲーション">
          <ul className="flex items-center gap-5 text-xs tracking-[0.12em] text-stone-600 sm:gap-8 sm:text-sm" lang="en">
            <li>
              <Link href="/" className="hover:text-stone-950">Home</Link>
            </li>
            <li>
              <Link href="/news" aria-label="お知らせ一覧" className="hover:text-stone-950">News</Link>
            </li>
            <li>
              <Link href="/source" aria-label="音源一覧" className="hover:text-stone-950">Voicebank</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
