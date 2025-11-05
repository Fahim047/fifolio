import { humanizeDate } from "@/helpers";
import { BlogFrontmatter } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface BlogSummaryCardProps extends BlogFrontmatter {
  slug: string;
}

export default function BlogSummaryCard({
  slug,
  title,
  coverImage,
  publishedOn,
  author,
  readingTime,
}: BlogSummaryCardProps) {
  return (
    <>
      <Link
        key={slug}
        href={`/blogs/${slug}`}
        className="p-4 flex gap-4 hover:bg-yellow-400/30 rounded-xl duration-300 items-center"
      >
        {coverImage && (
          <Image
            src={coverImage}
            alt={title}
            width={1920}
            height={1080}
            quality={100}
            className="size-16 rounded-md object-cover object-center"
          />
        )}

        <div className="space-y-1">
          <h3 className="font-bold leading-snug">{title}</h3>

          <div className="text-sm text-secondary-foreground flex flex-wrap gap-x-2 items-center">
            <span>{humanizeDate(publishedOn)}</span>

            {author && (
              <>
                <span className="opacity-70">•</span>
                <span>{author}</span>
              </>
            )}

            {readingTime && (
              <>
                <span className="opacity-70">•</span>
                <span>{readingTime}</span>
              </>
            )}
          </div>
        </div>
      </Link>
    </>
  );
}
