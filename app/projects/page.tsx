import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "프로젝트",
  description: "Nesffer의 프로젝트 모음",
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <Container className="py-16">
      <h1 className="text-2xl font-bold mb-8">프로젝트</h1>
      {projects.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">아직 프로젝트가 없습니다.</p>
      )}
    </Container>
  );
}
