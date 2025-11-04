import BlogList from "./BlogList";
import { getBlogPostList } from "@/helpers";
export default async function BlogSection() {
  const blogList = await getBlogPostList();
  return (
    <section className="max-w-5xl mx-auto px-4 md:px-8 py-16">
      <h2 className="text-2xl font-bold mb-6 text-red-500">
        Latest from the Blog
      </h2>
      <BlogList blogs={blogList} limit={3} showViewAll viewAllHref="/blogs" />
    </section>
  );
}
