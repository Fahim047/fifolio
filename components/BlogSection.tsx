import Link from "next/link";
import BlogList from "./BlogList";
import { getBlogPostList } from "@/helpers";
import { HiArrowRight } from "react-icons/hi2";
import { buttonVariants } from "./ui/button";
export default async function BlogSection() {
  const blogList = await getBlogPostList();
  return (
    <section className="py-12">
      <div className="flex flex-wrap gap-4 justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-orange-600">Latest Blogs</h2>
        <Link href="/blogs" className={buttonVariants({ variant: "outline" })}>
          <HiArrowRight />
          <span>View all</span>
        </Link>
      </div>
      <BlogList blogs={blogList} limit={3} />
    </section>
  );
}
