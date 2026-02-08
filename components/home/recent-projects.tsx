import Link from "next/link";
import { getFeaturedProjects } from "@/lib/content";

async function RecentProjects() {
  const projects = await getFeaturedProjects(3);
  if (projects.length === 0) return null;

  return (
    <section className="py-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-xl font-semibold">프로젝트</h2>
        <Link
          href="/projects"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          모두 보기
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <div className="card-shadow h-full rounded-2xl bg-card p-6">
              <h3 className="text-base font-medium">
                {project.frontmatter.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {project.frontmatter.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.frontmatter.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-2.5 py-0.5 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export { RecentProjects };
