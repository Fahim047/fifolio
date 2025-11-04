import { PenSquare } from "lucide-react";
import Link from "next/link";
import BlogSummaryCard from "../BlogSummaryCard";
import { BlogPost } from "@/types";

interface BlogListProps {
  blogs: BlogPost[];
  limit?: number;
  showViewAll?: boolean;
  viewAllHref?: string;
}

export default function BlogList({
  blogs,
  limit,
  showViewAll = false,
  viewAllHref = "/blogs",
}: BlogListProps) {
  const visibleBlogs = limit ? blogs.slice(0, limit) : blogs;
  const hasBlogs = visibleBlogs.length > 0;

  return (
    <section>
      {hasBlogs ? (
        <>
          <ul>
            {visibleBlogs.map(({ slug, frontmatter }) => (
              <BlogSummaryCard key={slug} slug={slug} {...frontmatter} />
            ))}
          </ul>

          {showViewAll && blogs.length > (limit ?? 0) && (
            <div className="text-center mt-8">
              <Link
                href={viewAllHref}
                className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                View all posts →
              </Link>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-24 space-y-4">
          <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-full">
            <PenSquare className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
          </div>
          <h2 className="text-lg font-semibold">No posts yet</h2>
          <p className="text-muted-foreground max-w-sm">
            🚧 Stay tuned! I’m working on new articles.
          </p>
        </div>
      )}
    </section>
  );
}
