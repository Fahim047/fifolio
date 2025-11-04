import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { BlogFrontmatter, BlogPost, BlogPostData } from "../types";
import { cache } from "react";

export async function getBlogPostList(): Promise<BlogPost[]> {
  const fileNames = await readDirectory("/content");

  const blogPosts: BlogPost[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith(".mdx")) continue;

    const rawContent = await readFile(`/content/${fileName}`);
    const { data: frontmatter, content } = matter(rawContent);

    const readingTime = calculateReadingTime(content);

    blogPosts.push({
      slug: fileName.replace(/\.mdx$/, ""),
      frontmatter: {
        ...frontmatter,
        readingTime,
      } as BlogFrontmatter,
    });
  }

  return blogPosts.sort((a, b) =>
    new Date(a.frontmatter.publishedOn) < new Date(b.frontmatter.publishedOn)
      ? 1
      : -1
  );
}

export const loadBlogPost = cache(
  async (slug: string): Promise<BlogPostData> => {
    const rawContent = await readFile(`/content/${slug}.mdx`);
    const { data: frontmatter, content } = matter(rawContent);

    const readingTime = calculateReadingTime(content);

    return {
      frontmatter: {
        ...frontmatter,
        readingTime,
      } as BlogFrontmatter,
      content,
    };
  }
);

async function readFile(localPath: string): Promise<string> {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}

async function readDirectory(localPath: string): Promise<string[]> {
  return fs.readdir(path.join(process.cwd(), localPath));
}

function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}
