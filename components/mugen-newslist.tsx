"use client";

import { useEffect, useRef, useState } from "react";
import type { Post } from "@/lib/posts";
import Link from "next/link";

export default function NewsList({ Post }: { Post: Post[] }) {
  const [posts, setPosts] = useState<Post[]>(Post);
  const [offset, setOffset] = useState(Post.length);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting && hasMore) {
        const res = await fetch(`/api/posts?offset=${offset}&limit=10`);
        const data: Post[] = await res.json();

        if (data.length === 0) {
          setHasMore(false);
          return;
        }

        setPosts((prev) => [...prev, ...data]);
        setOffset((prev) => prev + data.length);
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [offset, hasMore]);

  return (
    <>
      <div className="divide-y divide-stone-200 border-y border-stone-200">
        {posts.map((item) => (
          <Link
            className="group flex flex-col gap-2 py-5 transition-colors hover:text-stone-500 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
            href={`/news/${item.id}`}
            key={item.id}
          >
            <span className="min-w-0">
              <span className="block text-base leading-relaxed text-stone-800 group-hover:text-stone-500">
                {item.title}
              </span>
              <span className="mt-1 block line-clamp-2 text-sm leading-6 text-stone-500">
                {item.content}
              </span>
            </span>
            <time className="shrink-0 text-xs tracking-wide text-stone-500">
              {new Date(item.publishedAt).toLocaleDateString("ja-JP")}
            </time>
          </Link>
        ))}
      </div>

      {hasMore && (
        <div ref={loaderRef} className="py-8 text-center text-xs tracking-wide text-stone-400">
          Loading...
        </div>
      )}
    </>
  );
}
