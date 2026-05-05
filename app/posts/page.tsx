import { db } from "@/lib/db";
import { createPost, deletePost } from "./action";
import Link from "next/link";

export default async function Posts() {
  const posts = await db.post.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-3xl mx-auto space-y-10">

        
        <h1 className="text-3xl font-bold text-center">Posts</h1>

       
        <form
          action={createPost}
          className="bg-white p-6 rounded-xl shadow-md space-y-4"
        >
          <h2 className="text-xl font-semibold">Create New Post</h2>

          <input
            name="title"
            placeholder="Title..."
            className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="body"
            placeholder="Write something..."
            className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
            Add Post
          </button>
        </form>

        
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-lg font-bold">{post.title}</h2>
              <p className="text-gray-600 mt-1">{post.body}</p>

              <div className="flex gap-4 mt-4 text-sm">

                <Link
                  href={`/posts/${post.id}`}
                  className="text-blue-600 hover:underline"
                >
                  View
                </Link>

                <Link
                  href={`/posts/${post.id}/edit`}
                  className="text-yellow-600 hover:underline"
                >
                  Edit
                </Link>

                <form action={deletePost.bind(null, post.id)}>
                  <button className="text-red-600 hover:underline">
                    Delete
                  </button>
                </form>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}