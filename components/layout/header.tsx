import Link from "next/link";
import { Container } from "@/components/layout/container";
import { NavLink } from "@/components/layout/nav-link";
import { ThemeToggle } from "@/components/shared/theme-toggle";

function Header() {
  return (
    <header
      className="sticky top-0 z-40 bg-background/70 backdrop-blur-xl"
      style={{ boxShadow: "var(--shadow-sm)" }}
    >
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold text-foreground">
          Nesffer
        </Link>
        <nav className="flex items-center gap-6">
          <NavLink href="/">홈</NavLink>
          <NavLink href="/projects">프로젝트</NavLink>
          <NavLink href="/blog">블로그</NavLink>
          <ThemeToggle />
        </nav>
      </Container>
    </header>
  );
}

export { Header };
