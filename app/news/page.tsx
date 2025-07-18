import { client } from "@/lib/client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "彩奏 彼方(UTAU) - news",
  description: "彩音のUTAU音源に関する最新情報",
};
// HTMLタグ除去＆文字数制限
function getSummary(content: string, len = 35) {
  const text = content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
  return text.length > len ? text.substring(0, len) + "…" : text;
}

type NewsItem = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
};

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const params = await searchParams;
  const page = Math.max(0, Number(params.page) || 0);
  const limit = 5;
  const offset = limit * page;
  const data = await client.get({
    endpoint: "news",
    queries: { offset, limit },
  });
  const news: NewsItem[] = data.contents || [];
  // ページネーション計算を上部に集約
  const totalPages = Math.ceil(data.totalCount / limit);
  let start = Math.max(0, page - 2);
  let end = Math.min(totalPages - 1, page + 2);
  if (end - start < 4) {
    if (start === 0) {
      end = Math.min(4, totalPages - 1);
    } else if (end === totalPages - 1) {
      start = Math.max(0, end - 4);
    }
  }
  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return (
    <div className="mx-auto min-h-screen">
      <Header />
      <div className="text-center mb-12 px-8 py-3">
        <h1
          className="text-2xl lg:text-4xl font-light text-gray-900 mb-4 tracking-wide"
          lang="en-bold"
        >
          News
        </h1>
        <div className="w-22 h-px bg-gray-400 mx-auto"></div>
      </div>
      <div className="max-w-3xl mx-auto space-y-6 px-8">
        {news.map((item: NewsItem) => (
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
              <CardContent className="text-sm">
                {getSummary(item.content)}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center mt-8 space-x-2 py-4">
        {page > 0 && (
          <div className="flex items-center">
            <MdNavigateBefore className="w-5 h-5" />
            <Link
              href={`/news?page=${page - 1}`}
              className="text-lg lg:text-xl"
              lang="en"
            >
              Back
            </Link>
          </div>
        )}
        {pages.map((p) => (
          <Link key={p} href={`/news?page=${p}`}>
            <span
              className={`
                    inline-flex items-center justify-center 
                    w-10 h-10 mx-1 font-medium
                    rounded-md transition-all duration-200
                    ${
                      p === page
                        ? "bg-blue-500 text-white shadow-sm"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }
                `}
              aria-label={`ページ: ${p + 1}`}
              lang="en"
            >
              {p + 1}
            </span>
          </Link>
        ))}
        {page < totalPages - 1 && (
          <div className="flex items-center">
            <Link
              href={`/news?page=${page + 1}`}
              className="text-lg lg:text-xl"
              lang="en"
            >
              Next
            </Link>
            <MdNavigateNext className="w-5 h-5" />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
