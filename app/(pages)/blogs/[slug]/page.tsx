import { BLOG_TITLE } from "@/constants";
import { getBlogPostList, loadBlogPost } from "@/helpers";
import { MDXRemote } from "next-mdx-remote/rsc";
import { COMPONENTS_MAP } from "@/helpers";
import TagList from "@/components/TagList";
import { ChevronLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blogs = await getBlogPostList();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = await params;
  const blogPostData = await loadBlogPost(slug);
  if (!blogPostData) return null;

  return {
    title: `${blogPostData.frontmatter.title} • ${BLOG_TITLE}`,
    description: blogPostData.frontmatter.description,
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const blogPostData = await loadBlogPost(slug);

  if (!blogPostData) return notFound();

  const { frontmatter, content } = blogPostData;
  const { title, description, publishedOn, author, readingTime, tags } =
    frontmatter;

  return (
    <div className="relative min-h-screen pb-20">
      {/* 1. Sticky Navigation & Progress Bar */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link
            href="/blogs"
            className="group inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="size-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Back to blogs
          </Link>
          <span className="hidden sm:block text-xs font-medium text-muted-foreground truncate max-w-[200px]">
            {title}
          </span>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-4 pt-12">
        {/* 2. Enhanced Header Section */}
        <header className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y py-4">
            <div className="flex items-center gap-2">
              <Calendar className="size-4" />
              <time dateTime={publishedOn}>{publishedOn}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-4" />
              <span>{readingTime}</span>
            </div>
            {author && (
              <div className="flex items-center gap-2">
                <User className="size-4" />
                <span>{author}</span>
              </div>
            )}
          </div>
        </header>

        {/* 3. Main Content Area */}
        <main
          className="mt-12 prose prose-slate lg:prose-lg dark:prose-invert max-w-none 
          prose-headings:scroll-mt-20 prose-headings:font-bold
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-pre:bg-muted prose-pre:text-muted-foreground"
        >
          <MDXRemote source={content} components={COMPONENTS_MAP} />
        </main>

        {/* 4. Footer & Discovery */}
        <footer className="mt-8 pt-8 border-t">
          <div className="flex flex-col gap-6">
            {tags && tags.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Explore Topics
                </h3>
                <TagList tags={tags} />
              </div>
            )}

            <div className="bg-muted/50 rounded-2xl p-8 mt-4 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Thanks for reading!
              </h3>
              <p className="text-muted-foreground mb-6">
                If you found this helpful, feel free to share it or check out my
                other posts.
              </p>
              <Link
                href="/blogs"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View all blogs
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
