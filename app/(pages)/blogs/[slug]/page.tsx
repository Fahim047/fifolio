import BlogHero from "@/components/BlogHero";
import { BLOG_TITLE } from "@/constants";
import { getBlogPostList, loadBlogPost } from "@/helpers";
import { MDXRemote } from "next-mdx-remote/rsc";
import { COMPONENTS_MAP } from "@/helpers";
import TagList from "@/components/TagList";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blogs = await getBlogPostList();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = await params;
  const { frontmatter } = await loadBlogPost(slug);

  return {
    title: `${frontmatter.title} • ${BLOG_TITLE}`,
    description: frontmatter.description,
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const { frontmatter, content } = await loadBlogPost(slug);

  const {
    title,
    description,
    publishedOn,
    coverImage,
    author,
    readingTime,
    tags,
  } = frontmatter;

  return (
    <article className="max-w-3xl mx-auto">
      <Link
        href="/blogs"
        className="mt-6 inline-flex items-center text-muted-foreground hover:text-accent-foreground mb-8"
      >
        <ChevronLeft className="size-5 mr-2" />
        Back
      </Link>
      <BlogHero
        title={title}
        description={description}
        publishedOn={publishedOn}
        coverImage={coverImage}
        author={author}
        readingTime={readingTime}
      />
      <div className="prose dark:prose-invert prose-lg mx-auto mb-20 mt-4">
        <TagList tags={tags} className="my-8" />
        <MDXRemote source={content} components={COMPONENTS_MAP} />
      </div>
      {tags && tags.length > 0 && (
        <div className="border-t border-border pt-6 mt-12">
          <h3 className="text-sm font-semibold mb-2 text-muted-foreground">
            Tagged under
          </h3>
          <div className="flex flex-wrap gap-2">
            <TagList tags={tags} className="mt-2" />
          </div>
        </div>
      )}
    </article>
  );
}
