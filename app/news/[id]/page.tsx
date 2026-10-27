import { getPost } from "@/lib/posts";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { IoReturnDownBack } from "react-icons/io5";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
export async function generateMetadata({ params }: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) {
    return {
      title: "お知らせが見つかりません",
      robots: { index: false, follow: false },
    };
  }
  const description = post.content
    .replace(/[#>*_`~\[\]()!]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);
  return {
    title: post.title,
    description: description || `${post.title} — 彩奏 彼方からのお知らせ`,
    alternates: { canonical: `/news/${encodeURIComponent(post.slug)}` },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      publishedTime: post.publishedAt || undefined,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  try {
    const data = await getPost(id);
    if (!data) {
      notFound();
    }
    return (
      <div className="min-h-screen">
        <Header />
        <main className="px-6 py-12 md:px-10 md:py-16">
          <article className="mx-auto min-h-64 max-w-3xl">
            <header className="border-b border-stone-200 pb-7">
              <p className="mb-5 text-[0.65rem] tracking-[0.22em] text-stone-500" lang="en">
                NEWS / ARTICLE
              </p>
              <h1 className="text-2xl leading-relaxed text-stone-900 sm:text-3xl md:text-4xl" lang="ja-big-bold">
                {data.title}
              </h1>
              <time
                className="mt-4 block text-xs tracking-wide text-stone-500"
                dateTime={data.publishedAt}
                lang="en"
              >
                {new Date(data.publishedAt).toLocaleDateString("ja-JP")}
              </time>
            </header>
            <div className="prose prose-stone mt-8 max-w-none text-[0.95rem] leading-8 prose-headings:font-medium prose-headings:tracking-wide prose-a:text-stone-800 prose-a:decoration-stone-300 prose-a:underline-offset-4 hover:prose-a:decoration-stone-600 prose-blockquote:border-stone-300 prose-hr:border-stone-200 prose-img:rounded-sm">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {data.content}
              </ReactMarkdown>
            </div>
          </article>
          <div className="mx-auto mt-12 max-w-3xl border-t border-stone-200 pt-5">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm tracking-wide text-stone-600 transition-colors hover:text-stone-950"
              lang="en"
            >
              <IoReturnDownBack className="h-4 w-4" />
              Back to news
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  } catch {
    notFound();
  }
}
