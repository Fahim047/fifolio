import BlogList from "@/components/BlogList";
import { BLOG_DESCRIPTION, BLOG_TITLE } from "@/constants";
import { getBlogPostList } from "@/helpers";

export const metadata = {
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
};

export default async function BlogsPage() {
  const blogList = await getBlogPostList();

  return (
    <main className="max-w-5xl mx-auto px-4 md:px-8 py-16">
      <section className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
          Explore My Blog
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Thoughts, tutorials, and lessons learned — written for curious minds.
        </p>
      </section>

      <BlogList blogs={blogList} />
    </main>
  );
}
