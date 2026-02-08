import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarkdownRenderer } from "@/components/content/markdown-renderer";
import { PostHeader } from "@/components/content/post-header";
import { PostNavigation } from "@/components/content/post-navigation";
import { Container } from "@/components/layout/container";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/content";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "글을 찾을 수 없습니다" };
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const posts = await getBlogPosts();
  const idx = posts.findIndex((p) => p.slug === slug);
  const prev =
    idx > 0
      ? { slug: posts[idx - 1].slug, title: posts[idx - 1].frontmatter.title }
      : null;
  const next =
    idx < posts.length - 1
      ? { slug: posts[idx + 1].slug, title: posts[idx + 1].frontmatter.title }
      : null;

  return (
    <Container className="py-16">
      <PostHeader
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        tags={post.frontmatter.tags}
      />
      <MarkdownRenderer content={post.content} />
      <PostNavigation basePath="/blog" prev={prev} next={next} />
    </Container>
  );
}
