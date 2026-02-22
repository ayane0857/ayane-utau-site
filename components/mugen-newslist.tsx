"use client";

import { useEffect, useRef, useState } from "react";
import type { Post } from "@/lib/posts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
      {posts.map((item) => (
        <Link className="block" href={`/news/${item.id}`} key={item.id}>
          <Card className="border hover:shadow-sm transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl lg:text-2xl font-medium leading-tight">
                  {item.title}
                </CardTitle>
                <time className="text-sm text-gray-500 ml-4 flex-shrink-0">
                  {new Date(item.publishedAt).toLocaleDateString("ja-JP")}
                </time>
              </div>
            </CardHeader>
            <CardContent className="text-sm">{item.content}</CardContent>
          </Card>
        </Link>
      ))}

      {hasMore && (
        <div ref={loaderRef} className="text-center py-6 text-gray-400">
          Loading...
        </div>
      )}
    </>
  );
}
