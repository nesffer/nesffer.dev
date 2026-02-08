import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarkdownRenderer } from "@/components/content/markdown-renderer";
import { PostHeader } from "@/components/content/post-header";
import { PostNavigation } from "@/components/content/post-navigation";
import { Container } from "@/components/layout/container";
import { getProjectBySlug, getProjects } from "@/lib/content";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "프로젝트를 찾을 수 없습니다" };
  return {
    title: project.frontmatter.title,
    description: project.frontmatter.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const projects = await getProjects();
  const idx = projects.findIndex((p) => p.slug === slug);
  const prev =
    idx > 0
      ? {
          slug: projects[idx - 1].slug,
          title: projects[idx - 1].frontmatter.title,
        }
      : null;
  const next =
    idx < projects.length - 1
      ? {
          slug: projects[idx + 1].slug,
          title: projects[idx + 1].frontmatter.title,
        }
      : null;

  return (
    <Container className="py-16">
      <PostHeader
        title={project.frontmatter.title}
        date={project.frontmatter.date}
        tags={project.frontmatter.tags}
      />
      {/* GitHub / Demo 링크 */}
      <div className="mb-8 flex gap-3">
        {project.frontmatter.github && (
          <a
            href={project.frontmatter.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub →
          </a>
        )}
        {project.frontmatter.demo && (
          <a
            href={project.frontmatter.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Demo →
          </a>
        )}
      </div>
      <MarkdownRenderer content={project.content} />
      <PostNavigation basePath="/projects" prev={prev} next={next} />
    </Container>
  );
}
