import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import type {
  BlogPost,
  BlogPostFrontmatter,
  Project,
  ProjectFrontmatter,
} from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content");
const PROJECTS_DIR = path.join(CONTENT_DIR, "projects");
const BLOG_DIR = path.join(CONTENT_DIR, "blog");

function getMarkdownFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => path.join(dir, file));
}

function parseMarkdown<T>(filePath: string): {
  frontmatter: T;
  content: string;
} {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as T, content };
}

async function renderMarkdown(content: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: { light: "github-light", dark: "github-dark" },
    })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeStringify)
    .process(content);

  return String(result);
}

export async function getProjects(): Promise<Project[]> {
  const files = getMarkdownFiles(PROJECTS_DIR);
  const projects = await Promise.all(
    files.map(async (filePath) => {
      const slug = path.basename(filePath, ".md");
      const { frontmatter, content } =
        parseMarkdown<ProjectFrontmatter>(filePath);
      const html = await renderMarkdown(content);
      return { slug, frontmatter, content: html };
    }),
  );

  return projects.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  );
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const filePath = path.join(PROJECTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const { frontmatter, content } = parseMarkdown<ProjectFrontmatter>(filePath);
  const html = await renderMarkdown(content);
  return { slug, frontmatter, content: html };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const files = getMarkdownFiles(BLOG_DIR);
  const posts = await Promise.all(
    files.map(async (filePath) => {
      const slug = path.basename(filePath, ".md");
      const { frontmatter, content } =
        parseMarkdown<BlogPostFrontmatter>(filePath);
      const html = await renderMarkdown(content);
      return { slug, frontmatter, content: html };
    }),
  );

  return posts
    .filter((post) => post.frontmatter.published)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    );
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const { frontmatter, content } = parseMarkdown<BlogPostFrontmatter>(filePath);
  if (!frontmatter.published) return null;

  const html = await renderMarkdown(content);
  return { slug, frontmatter, content: html };
}

export async function getFeaturedProjects(limit = 3): Promise<Project[]> {
  const projects = await getProjects();
  return projects.filter((p) => p.frontmatter.featured).slice(0, limit);
}

export async function getRecentPosts(limit = 3): Promise<BlogPost[]> {
  const posts = await getBlogPosts();
  return posts.slice(0, limit);
}
