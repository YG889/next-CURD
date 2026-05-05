import { db } from "@/lib/db";

export default async function PostDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = await db.post.findUnique({
    where: { id: Number(id) },
  });

  if (!post) return <div>Post not found</div>;

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-4 text-gray-600">{post.body}</p>
    </div>
  );
}