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
        <article className="max-w-3xl mx-auto py-8 min-h-64 px-8 md:px-16">
          <div className="mb-6">
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 items-baseline">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight" lang="ja-big-bold">
                {data.title}
              </h1>
              <time dateTime={data.publishedAt} lang="en">
                {new Date(data.publishedAt).toLocaleDateString("ja-JP")}
              </time>
            </div>
          </div>
          <div className="prose max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {data.content}
            </ReactMarkdown>
          </div>
        </article>
        <div className="mt-8 pt-6 flex justify-end mx-auto px-12 pb-8">
          <Link href="/news" className="font-medium text-lg md:text-xl text-gray-700" lang="en">
            <IoReturnDownBack className="inline-block mr-2 w-6 h-6" />
            Back News
          </Link>
        </div>
        <Footer />
      </div>
    );
  } catch {
    notFound();
  }
}
