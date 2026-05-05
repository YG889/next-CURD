"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

export async function updatePost(id: number, formData: FormData) {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  await db.post.update({
    where: { id },
    data: { title, body },
  });

  redirect("/posts"); 
}