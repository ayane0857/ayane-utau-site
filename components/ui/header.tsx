import Link from "next/link";
export function Header() {
  return (
    <header className="py-6 px-6 md:px-12 flex flex-row justify-between">
      <h1 className="text-2xl font-bold" lang="en-big-bold">
        <Link href={"/"}>Ayane</Link>
      </h1>
      <ul
        className="flex justify-center space-x-6 text-xl md:text-2xl"
        lang="en"
      >
        <li className="mb-4">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="mb-4">
          <Link href={"/news"} aria-label="お知らせ一覧">
            News
          </Link>
        </li>
        <li className="mb-4">
          <Link href={"/source"} aria-label="音源一覧">
            Source
          </Link>
        </li>
      </ul>
    </header>
  );
}
