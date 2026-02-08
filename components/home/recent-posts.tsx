import Link from "next/link";
import { getRecentPosts } from "@/lib/content";

async function RecentPosts() {
  const posts = await getRecentPosts(3);
  if (posts.length === 0) return null;

  return (
    <section className="py-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-xl font-semibold">최근 글</h2>
        <Link
          href="/blog"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          모두 보기
        </Link>
      </div>
      <div className="flex flex-col">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="-mx-4 rounded-lg border-b border-border/50 px-4 py-5 transition-colors duration-300 hover:bg-muted/30"
          >
            <span className="font-medium">{post.frontmatter.title}</span>
            {post.frontmatter.description && (
              <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
                {post.frontmatter.description}
              </p>
            )}
            <span className="mt-2 block text-sm text-muted-foreground">
              {new Date(post.frontmatter.date).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export { RecentPosts };
