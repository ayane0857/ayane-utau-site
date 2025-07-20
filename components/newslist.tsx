import { client } from "@/lib/client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

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

type NewsListProps = {
  offset: number;
  limit: number;
};

const NewsList: React.FC<NewsListProps> = async ({ offset, limit }) => {
  const data = await client.get({
    endpoint: "news",
    queries: { offset, limit },
  });

  const news: NewsItem[] = data.contents || [];
  return (
    <div className="space-y-6">
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
  );
};

export default NewsList;
