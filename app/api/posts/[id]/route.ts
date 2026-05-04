import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await db.post.delete({
    where: { id: Number(params.id) },
  });

  return NextResponse.json({ message: "Deleted" });
}


export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json();

  const post = await db.post.update({
    where: { id: Number(params.id) },
    data: {
      title: body.title,
      body: body.body,
    },
  });

  return NextResponse.json(post);
}