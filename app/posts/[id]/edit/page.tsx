import { db } from "@/lib/db";
import { updatePost } from "@/app/posts/action";

export default async function EditPage({
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <form
        action={updatePost.bind(null, post.id)}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-xl space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Edit Post</h2>

        <input
          name="title"
          defaultValue={post.title}
          className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />

        <textarea
          name="body"
          defaultValue={post.body}
          className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />

        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition">
          Update
        </button>
      </form>

    </div>
  );
}