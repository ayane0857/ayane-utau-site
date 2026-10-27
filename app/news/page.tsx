import { getPosts } from "@/lib/posts";
import NewsList from "@/components/mugen-newslist";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "UTAU音源「彩奏 彼方」の最新情報や更新履歴をお届けします。",
  alternates: { canonical: "/news" },
};

export default async function NewsPage() {
  const initialPosts = await getPosts(0, 10);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="px-6 pb-10 pt-16 md:px-10 md:pb-14 md:pt-20">
          <div className="mx-auto max-w-4xl">
            <p
              className="mb-3 text-[0.65rem] tracking-[0.22em] text-stone-500"
              lang="en"
            >
              UPDATES
            </p>
            <h1
              className="text-4xl font-light tracking-wide text-stone-900 sm:text-5xl"
              lang="en-bold"
            >
              News
            </h1>
            <p className="mt-4 text-sm text-stone-600">
              UTAU音源の最新情報をお届けします
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-4xl px-6 pb-12 md:px-10 md:pb-16">
          <NewsList Post={initialPosts} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
