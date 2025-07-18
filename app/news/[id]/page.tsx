import { client } from "@/lib/client";
import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { IoReturnDownBack } from "react-icons/io5";
export const metadata: Metadata = {
  title: "彩奏 彼方(UTAU) - news",
  description: "彩音のUTAU音源に関する最新情報",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await client.get({
    endpoint: "news",
    contentId: id,
  });
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
