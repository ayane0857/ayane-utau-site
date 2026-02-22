import { getPosts } from "@/lib/posts";
import type { Post } from "@/lib/posts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ayane(UTAU) - News",
  description: "UTAU音源についての最新情報",
};
export default async function Home({}) {
  const data = await getPosts();
  const news: Post[] = data || [];
  return (
    <div className="mx-auto min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center mb-12 px-8 py-6 bg-white">
        <h1
          className="text-3xl lg:text-5xl font-bold text-gray-900 mb-2 tracking-wide"
          lang="en-bold"
        >
          News
        </h1>
        <p className="text-base text-gray-600 font-light mt-2">
          UTAU音源の最新情報をお届けします
        </p>
      </div>
      <div className="max-w-3xl mx-auto space-y-6 px-8">
        {news.map((item: Post) => (
          <Link className="block" href={`/news/${item.id}`} key={item.id}>
            <Card
              key={item.id}
              className="border hover:shadow-sm transition-shadow"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle
                    className="text-xl lg:text-2xl font-medium leading-tight"
                    lang="ja-bold"
                  >
                    {item.title}
                  </CardTitle>
                  <time
                    className="text-sm text-gray-500 ml-4 flex-shrink-0"
                    lang="en"
                  >
                    {new Date(item.publishedAt).toLocaleDateString("ja-JP")}
                  </time>
                </div>
              </CardHeader>
              <CardContent className="text-sm">{item.content}</CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}
