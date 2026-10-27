import { getPosts } from "@/lib/posts";
import type { Post } from "@/lib/posts";
import Link from "next/link";

type NewsListProps = {
  offset: number;
  limit: number;
};

const NewsList: React.FC<NewsListProps> = async ({ offset, limit }) => {
  const data = await getPosts(offset, limit);

  const news: Post[] = data || [];
  return (
    <div className="divide-y divide-stone-200 border-y border-stone-200">
      {news.map((item: Post) => (
        <Link
          className="group flex flex-col gap-2 py-5 transition-colors hover:text-stone-500 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
          href={`/news/${item.id}`}
          key={item.id}
        >
          <span className="min-w-0">
            <span className="block text-base leading-relaxed text-stone-800 group-hover:text-stone-500" lang="ja-bold">
              {item.title}
            </span>
            <span className="mt-1 block line-clamp-2 text-sm leading-6 text-stone-500">
              {item.content}
            </span>
          </span>
          <time className="shrink-0 text-xs tracking-wide text-stone-500" lang="en">
            {new Date(item.publishedAt).toLocaleDateString("ja-JP")}
          </time>
        </Link>
      ))}
    </div>
  );
};

export default NewsList;
