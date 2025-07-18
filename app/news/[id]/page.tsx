// page.tsx

import { client } from "@/lib/client";
import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { IoReturnDownBack } from "react-icons/io5";

export const dynamic = "force-dynamic";

// Define a type for your news data for better type safety
type News = {
  id: string;
  title: string;
  publishedAt: string;
  content: string;
};

// 1. Add generateStaticParams to fetch all news IDs at build time
export async function generateStaticParams() {
  const data = await client.get({
    endpoint: "news",
    queries: { fields: "id" }, // Only fetch the 'id' field to be efficient
  });

  return data.contents.map((news: { id: string }) => ({
    id: news.id,
  }));
}

export const metadata: Metadata = {
  title: "彩奏 彼方(UTAU) - news",
  description: "彩音のUTAU音源に関する最新情報",
};

// 2. Correct the props signature for the Page component - params is now a Promise in Next.js 15
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // Await the params Promise
  let data: News; // Use the News type

  try {
    data = await client.get({
      endpoint: "news",
      contentId: id,
    });
  } catch (error) {
    console.error("Error fetching news item:", error);
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Header />
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">Error</h1>
          <p className="text-lg">ニュースの取得に失敗しました。</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <article className="max-w-xl mx-auto py-8 min-h-64 px-8 md:px-16">
        <div className="mb-6">
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 items-baseline">
            <h2
              className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight"
              lang="ja-big-bold"
            >
              {data.title}
            </h2>
            <time lang="en">
              {new Date(data.publishedAt).toLocaleDateString("ja-JP")}
            </time>
          </div>
        </div>
        <div
          className="prose max-w-none leading-relaxed prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-800"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </article>
      <div className="mt-8 pt-6 flex justify-end max-w-2xl mx-auto px-8">
        <Link
          href={"/news"}
          className="font-medium text-lg md:text-xl"
          lang="en"
        >
          <IoReturnDownBack className="inline-block mr-2 w-6 w-6" />
          Back News
        </Link>
      </div>
      <Footer />
    </div>
  );
}
