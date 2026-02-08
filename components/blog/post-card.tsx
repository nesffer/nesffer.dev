import Link from "next/link";
import { TagList } from "@/components/shared/tag-list";
import type { BlogPost } from "@/lib/types";

function PostCard({ post }: { post: BlogPost }) {
  const { frontmatter, slug } = post;
  return (
    <article>
      <Link href={`/blog/${slug}`} className="group block py-4">
        <div className="flex items-baseline justify-between gap-4 mb-1">
          <h2 className="font-medium group-hover:text-primary transition-colors">
            {frontmatter.title}
          </h2>
          <time
            dateTime={frontmatter.date}
            className="text-sm text-muted-foreground shrink-0"
          >
            {new Date(frontmatter.date).toLocaleDateString("ko-KR")}
          </time>
        </div>
        <p className="text-sm text-muted-foreground mb-2">
          {frontmatter.description}
        </p>
        <TagList tags={frontmatter.tags} />
      </Link>
    </article>
  );
}

export { PostCard };
