import { NextRequest, NextResponse } from "next/server";
import { getPosts } from "@/lib/posts";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const requestedOffset = Number(searchParams.get("offset") ?? 0);
  const requestedLimit = Number(searchParams.get("limit") ?? 10);
  const offset = Number.isFinite(requestedOffset) ? Math.max(0, Math.floor(requestedOffset)) : 0;
  const limit = Number.isFinite(requestedLimit) ? Math.min(50, Math.max(1, Math.floor(requestedLimit))) : 10;

  const posts = await getPosts(offset, limit);

  return NextResponse.json(posts, {
    headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" },
  });
}
