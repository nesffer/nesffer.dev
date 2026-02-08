import { Container } from "@/components/layout/container";
import { SocialLinks } from "@/components/shared/social-links";

function Footer() {
  return (
    <footer className="py-12">
      <Container className="flex flex-col items-center gap-2 text-center text-sm text-muted-foreground">
        <SocialLinks />
        <p>&copy; {new Date().getFullYear()} Nesffer. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export { Footer };
