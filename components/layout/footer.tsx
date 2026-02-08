import { Container } from "@/components/layout/container";

function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Nesffer. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export { Footer };
