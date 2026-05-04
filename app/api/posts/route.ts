import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET() {
  const posts = await db.post.findMany();
  return NextResponse.json(posts);
}


export async function POST(req: Request) {
  const body = await req.json();

  const post = await db.post.create({
    data: {
      title: body.title,
      body: body.body,
    },
  });

  return NextResponse.json(post);
}