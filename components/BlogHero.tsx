import { humanizeDate } from "@/helpers";
import Image from "next/image";

interface BlogHeroProps {
  title: string;
  description?: string;
  publishedOn: string;
  coverImage?: string;
  author?: string;
  readingTime?: string;
}

export default function BlogHero({
  title,
  description,
  publishedOn,
  coverImage,
  author,
  readingTime,
}: BlogHeroProps) {
  return (
    <section className="relative w-full max-w-5xl mx-auto mt-8 px-4 text-center">
      {coverImage && (
        <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-2xl shadow-lg mb-8">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h1>

      {description && (
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-4">
          {description}
        </p>
      )}
      <div className="flex justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <span>{humanizeDate(publishedOn)}</span>
        {author && (
          <>
            <span className="opacity-50">•</span>
            <span>{author}</span>
          </>
        )}
        {readingTime && (
          <>
            <span className="opacity-50">•</span>
            <span>2 min</span>
          </>
        )}
      </div>
    </section>
  );
}
