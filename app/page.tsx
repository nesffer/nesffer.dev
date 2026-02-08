import { HeroSection } from "@/components/home/hero-section";
import { RecentPosts } from "@/components/home/recent-posts";
import { RecentProjects } from "@/components/home/recent-projects";
import { Container } from "@/components/layout/container";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <Container>
      <HeroSection />
      <Separator />
      <RecentProjects />
      <Separator />
      <RecentPosts />
    </Container>
  );
}
