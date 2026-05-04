interface Post {
  id: number;
  title: string;
  body: string;
}

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PostDetails({ params }: Props) {
  const { id } = await params;

 const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
  cache: "no-store",
});

  if (!res.ok) {
    throw new Error("Post not found");
  }

  const post = await res.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}