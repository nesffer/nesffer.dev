import { HeroSection } from "@/components/home/hero-section";
import { RecentPosts } from "@/components/home/recent-posts";
import { RecentProjects } from "@/components/home/recent-projects";
import { Container } from "@/components/layout/container";

export default function Page() {
  return (
    <Container>
      <HeroSection />
      <RecentProjects />
      <RecentPosts />
    </Container>
  );
}
