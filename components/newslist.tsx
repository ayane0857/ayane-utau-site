import { getPosts } from "@/lib/posts";
import type { Post } from "@/lib/posts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

type NewsListProps = {
  offset: number;
  limit: number;
};

const NewsList: React.FC<NewsListProps> = async ({ offset, limit }) => {
  const data = await getPosts(offset, limit);

  const news: Post[] = data || [];
  return (
    <div className="space-y-6">
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
  );
};

export default NewsList;
