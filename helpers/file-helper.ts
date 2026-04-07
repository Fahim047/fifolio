import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
import { BlogFrontmatter, BlogPost, BlogPostData } from "../types";

/**
 * Configuration
 */
const CONTENT_DIR = "content";
const ALLOWED_EXTENSIONS = [".md", ".mdx"];
const WORDS_PER_MINUTE = 200;

/**
 * Helpers
 */
function isMarkdownFile(fileName: string): boolean {
  return ALLOWED_EXTENSIONS.some((ext) => fileName.endsWith(ext));
}

function stripExtension(fileName: string): string {
  return fileName.replace(/\.(md|mdx)$/, "");
}

async function readFile(localPath: string): Promise<string | null> {
  try {
    return await fs.readFile(path.join(process.cwd(), localPath), "utf8");
  } catch (error) {
    return null;
  }
}

async function readDirectory(localPath: string): Promise<string[]> {
  return fs.readdir(path.join(process.cwd(), localPath));
}

async function readMarkdownBySlug(slug: string): Promise<string | null> {
  for (const ext of ALLOWED_EXTENSIONS) {
    const content = await readFile(`${CONTENT_DIR}/${slug}${ext}`);
    if (content) return content;
  }
  return null;
}

/**
 * Reading time calculation
 * - Removes code blocks and inline code
 * - Ensures minimum of 1 minute
 */
function calculateReadingTime(text: string): string {
  const cleanedText = text
    .replace(/```[\s\S]*?```/g, "") // remove code blocks
    .replace(/`[^`]*`/g, "") // remove inline code
    .trim();

  const wordCount = cleanedText.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));

  return `${minutes} min read`;
}

/**
 * Get all blog posts (metadata only)
 */
export async function getBlogPostList(): Promise<BlogPost[]> {
  const fileNames = await readDirectory(CONTENT_DIR);

  const posts = await Promise.all(
    fileNames.filter(isMarkdownFile).map(async (fileName) => {
      const rawContent = await readFile(`${CONTENT_DIR}/${fileName}`);
      if (!rawContent) return null;

      const { data, content } = matter(rawContent);
      const readingTime = calculateReadingTime(content);

      return {
        slug: stripExtension(fileName),
        frontmatter: {
          ...data,
          readingTime,
        } as BlogFrontmatter,
      };
    }),
  );

  return posts
    .filter(Boolean)
    .sort((a, b) =>
      new Date(a!.frontmatter.publishedOn) <
      new Date(b!.frontmatter.publishedOn)
        ? 1
        : -1,
    ) as BlogPost[];
}

/**
 * Load a single blog post (cached)
 */
export const loadBlogPost = cache(
  async (slug: string): Promise<BlogPostData | null> => {
    const rawContent = await readMarkdownBySlug(slug);
    if (!rawContent) return null;

    const { data, content } = matter(rawContent);
    const readingTime = calculateReadingTime(content);

    return {
      frontmatter: {
        ...data,
        readingTime,
      } as BlogFrontmatter,
      content,
    };
  },
);
