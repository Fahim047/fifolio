import Link from "next/link";

export default function TagList({
  tags,
  className,
}: {
  tags: string[] | undefined;
  className?: string;
}) {
  if (!tags?.length) return null;
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/tags/${encodeURIComponent(tag)}`}
          className="px-3 py-1 text-sm font-medium rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors"
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
}
