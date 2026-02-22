import { getPosts } from "@/lib/posts";
import NewsList from "@/components/mugen-newslist";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ayane(UTAU) - News",
  description: "UTAU音源についての最新情報",
};
export default async function Home({}) {
  const initialPosts = await getPosts(0, 10);

  return (
    <div className="mx-auto min-h-screen">
      <Header />

      <div className="flex flex-col items-center justify-center mb-12 px-8 py-6 bg-white">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-2">
          News
        </h1>
        <p className="text-base text-gray-600 font-light mt-2">
          UTAU音源の最新情報をお届けします
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6 px-8">
        <NewsList Post={initialPosts} />
      </div>

      <Footer />
    </div>
  );
}
