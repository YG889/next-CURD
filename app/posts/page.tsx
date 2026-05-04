import { createPost, deletePost } from "../posts/action";

export default async function Posts() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  const posts = await res.json();

  return (
    <div className="space-y-8">

      
      <form action={createPost} className="space-y-3 max-w-md">
        <input
          name="title"
          placeholder="Title"
          className="border p-2 w-full rounded"
        />

        <textarea
          name="body"
          placeholder="Body"
          className="border p-2 w-full rounded"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Post
        </button>
      </form>

      
      <div className="grid gap-4">
        {posts.map((post: any) => (
          <div key={post.id} className="border p-4 rounded">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>

            <form action={async () => {
              "use server";
              await deletePost(post.id);
            }}>
              <button className="text-red-500 mt-2">
                Delete
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}