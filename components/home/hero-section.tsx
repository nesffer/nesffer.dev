import Link from "next/link";

function HeroSection() {
  return (
    <section className="py-20 sm:py-32">
      <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
        Nesffer
      </h1>
      <p className="mt-6 max-w-lg text-xl font-light leading-relaxed text-muted-foreground">
        웹 개발을 좋아하는 개발자입니다. 새로운 기술을 탐구하고 프로젝트를
        만들며 배운 것들을 공유합니다.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/projects"
          className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background shadow-sm transition-colors hover:bg-foreground/90"
        >
          프로젝트 보기
        </Link>
        <Link
          href="/blog"
          className="inline-flex h-10 items-center justify-center rounded-full bg-muted px-6 text-sm font-medium transition-opacity hover:opacity-80"
        >
          블로그 읽기
        </Link>
      </div>
    </section>
  );
}

export { HeroSection };
