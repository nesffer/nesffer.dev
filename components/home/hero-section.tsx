import Link from "next/link";
import { SocialLinks } from "@/components/shared/social-links";

function HeroSection() {
  return (
    <section className="py-20 sm:py-28">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Nesffer</h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-lg">
        웹 개발을 좋아하는 개발자입니다. 새로운 기술을 탐구하고 프로젝트를
        만들며 배운 것들을 공유합니다.
      </p>
      <SocialLinks />
      <div className="mt-8 flex gap-3">
        <Link
          href="/projects"
          className="inline-flex h-8 items-center justify-center rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
        >
          프로젝트 보기
        </Link>
        <Link
          href="/blog"
          className="inline-flex h-8 items-center justify-center rounded-lg border border-border bg-background px-3 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
        >
          블로그 읽기
        </Link>
      </div>
    </section>
  );
}

export { HeroSection };
