import matter from "gray-matter";
import fs from "node:fs/promises";
import path from "node:path";

// 共通のパス設定
const POSTS_DIR = path.join(process.cwd(), "posts");

export interface Post {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  slug: string;
}

// HTMLタグ除去＆文字数制限
function getSummary(content: string, len = 35) {
  const text = content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
  return text.length > len ? text.substring(0, len) + "…" : text;
}

/**
 * 全記事のサマリーを取得（並列処理で高速化）
 */
export async function getPosts(
  offset: number = 0,
  limit: number = 10,
): Promise<Post[]> {
  try {
    const files = await fs.readdir(POSTS_DIR);
    const mdFiles = files.filter((file) => file.endsWith(".md"));

    const allPosts = await Promise.all(
      mdFiles.map(async (file) => {
        const filePath = path.join(POSTS_DIR, file);
        const fileContent = await fs.readFile(filePath, "utf-8");
        const { data, content } = matter(fileContent);

        return {
          id: file.replace(/\.md$/, ""),
          title: data.title || "Untitled",
          publishedAt: data.publishedAt || "",
          content,
          slug: file.replace(/\.md$/, ""),
        };
      }),
    );

    const sortedPosts = allPosts.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );

    const slicedPosts = sortedPosts.slice(offset, offset + limit);

    return slicedPosts.map((post) => ({
      ...post,
      content: getSummary(post.content),
    }));
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
}

/**
 * 特定の記事を取得
 * @param slug ファイル名（拡張子なし）
 */
export async function getPost(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(POSTS_DIR, `${slug}.md`);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      id: slug,
      title: data.title || "Untitled",
      publishedAt: data.publishedAt || "",
      content,
      slug,
    };
  } catch (error) {
    console.error(`Post not found: ${slug}`, error);
    return null;
  }
}
