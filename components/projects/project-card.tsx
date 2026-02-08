import Link from "next/link";
import { TagList } from "@/components/shared/tag-list";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/lib/types";

function ProjectCard({ project }: { project: Project }) {
  const { frontmatter, slug } = project;
  return (
    <Link href={`/projects/${slug}`}>
      <Card className="h-full hover:border-foreground/20 transition-colors">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">{frontmatter.title}</CardTitle>
            <span className="text-xs text-muted-foreground">
              {frontmatter.status}
            </span>
          </div>
          <CardDescription>{frontmatter.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <TagList tags={frontmatter.tags.slice(0, 4)} />
        </CardContent>
      </Card>
    </Link>
  );
}
export { ProjectCard };
