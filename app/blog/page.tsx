import type { Metadata } from "next";
import { PostCard } from "@/components/blog/post-card";
import { Container } from "@/components/layout/container";
import { getBlogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "블로그",
  description: "Nesffer의 개발 블로그",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return (
    <Container className="py-16">
      <h1 className="text-2xl font-bold mb-8">블로그</h1>
      {posts.length > 0 ? (
        <div className="divide-y divide-border">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">아직 글이 없습니다.</p>
      )}
    </Container>
  );
}
