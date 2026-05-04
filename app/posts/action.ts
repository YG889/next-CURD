"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";


export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  await db.post.create({
    data: { title, body },
  });

  revalidatePath("/posts");
}


export async function deletePost(id: number) {
  await db.post.delete({
    where: { id },
  });

  revalidatePath("/posts");
}