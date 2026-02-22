import { NextRequest, NextResponse } from "next/server";
import { getPosts } from "@/lib/posts";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const offset = Number(searchParams.get("offset") ?? 0);
  const limit = Number(searchParams.get("limit") ?? 10);

  const posts = await getPosts(offset, limit);

  return NextResponse.json(posts);
}
