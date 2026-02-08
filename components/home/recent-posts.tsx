import Link from "next/link";
import { getRecentPosts } from "@/lib/content";

async function RecentPosts() {
  const posts = await getRecentPosts(3);
  if (posts.length === 0) return null;

  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">최근 글</h2>
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          모든 글 →
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex items-baseline justify-between gap-4 py-2"
          >
            <span className="font-medium group-hover:text-primary transition-colors">
              {post.frontmatter.title}
            </span>
            <span className="text-sm text-muted-foreground shrink-0">
              {new Date(post.frontmatter.date).toLocaleDateString("ko-KR")}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export { RecentPosts };
