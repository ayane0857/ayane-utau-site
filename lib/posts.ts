import matter from "gray-matter";
import fs from "node:fs/promises";
import path from "node:path";

// 共通のパス設定
const POSTS_DIR = path.join(process.cwd(), "posts");
let postsCache: Promise<Post[]> | undefined;

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
    const allPosts = await getAllPosts();
    const slicedPosts = allPosts.slice(offset, offset + limit);

    return slicedPosts.map((post) => ({
      ...post,
      content: getSummary(post.content),
    }));
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
}

/** Read and sort the Markdown collection once per server process. */
export function getAllPosts(): Promise<Post[]> {
  postsCache ??= (async () => {
    try {
      const files = await fs.readdir(POSTS_DIR);
      const mdFiles = files.filter((file) => file.endsWith(".md"));
      const posts = await Promise.all(mdFiles.map(async (file) => {
        const slug = file.slice(0, -3);
        const fileContent = await fs.readFile(path.join(POSTS_DIR, file), "utf-8");
        const { data, content } = matter(fileContent);
        return {
          id: slug,
          title: typeof data.title === "string" ? data.title : "Untitled",
          publishedAt: typeof data.publishedAt === "string" ? data.publishedAt : "",
          content,
          slug,
        };
      }));
      return posts.sort((a, b) => Date.parse(b.publishedAt || "") - Date.parse(a.publishedAt || ""));
    } catch (error) {
      console.error("Failed to read posts:", error);
      return [];
    }
  })();
  return postsCache;
}

/**
 * 特定の記事を取得
 * @param slug ファイル名（拡張子なし）
 */
export async function getPost(slug: string): Promise<Post | null> {
  if (!/^[a-zA-Z0-9_-]+$/.test(slug)) return null;
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
