import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      padding: "15px",
      background: "#111",
      color: "#fff",
      display: "flex",
      gap: "15px"
    }}>
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}