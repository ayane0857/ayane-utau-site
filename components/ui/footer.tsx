import Link from "next/link";

export function Footer() {
  const version = process.env.npm_package_version;
  return (
    <footer className="mt-12 border-t border-stone-200/80 px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-xs tracking-wide text-stone-500">
          © {new Date().getFullYear()} 彩音 · v{version}
        </p>
        <nav aria-label="フッターナビゲーション">
          <Link href="/license" className="text-xs tracking-[0.1em] text-stone-600 hover:text-stone-950">
            LICENSE & CREDIT
          </Link>
        </nav>
      </div>
    </footer>
  );
}
