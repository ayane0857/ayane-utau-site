import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  const pages: MetadataRoute.Sitemap = [
    {
      url: "https://utau.ayane0857.net",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://utau.ayane0857.net/license",
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://utau.ayane0857.net/source",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://utau.ayane0857.net/news",
      lastModified: posts[0]?.publishedAt ? new Date(posts[0].publishedAt) : undefined,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
  return [
    ...pages,
    ...posts.map((post) => ({
      url: `https://utau.ayane0857.net/news/${encodeURIComponent(post.id)}`,
      lastModified: post.publishedAt ? new Date(post.publishedAt) : undefined,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
