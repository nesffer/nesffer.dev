import Link from "next/link";

interface NavItem {
  slug: string;
  title: string;
}

interface PostNavigationProps {
  basePath: string; // "/projects" or "/blog"
  prev: NavItem | null;
  next: NavItem | null;
}

function PostNavigation({ basePath, prev, next }: PostNavigationProps) {
  if (!prev && !next) return null;
  return (
    <nav className="mt-12 flex items-center justify-between gap-4 border-t border-border pt-6 text-sm">
      {prev ? (
        <Link
          href={`${basePath}/${prev.slug}`}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          ← {prev.title}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`${basePath}/${next.slug}`}
          className="text-muted-foreground hover:text-foreground transition-colors text-right"
        >
          {next.title} →
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
export { PostNavigation };
