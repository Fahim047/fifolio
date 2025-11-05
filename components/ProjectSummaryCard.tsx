import Image from "next/image";
import { Badge } from "./ui/badge";
import Link from "next/link";

interface ProjectSummaryCardProps {
  id: number;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
}

export default function ProjectSummaryCard({
  id,
  slug,
  title,
  description,
  thumbnail,
  techStack,
}: ProjectSummaryCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="p-4 flex gap-4 hover:bg-primary/10 rounded-xl duration-300 items-center"
    >
      {thumbnail && (
        <Image
          src={thumbnail}
          alt={title}
          width={1920}
          height={1080}
          quality={100}
          className="size-24 rounded-md object-cover object-center"
        />
      )}

      <div className="flex-1 space-y-2">
        <h3 className="font-bold leading-snug text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        <div className="text-xs text-secondary-foreground flex flex-wrap gap-2">
          {techStack?.slice(0, 3).map((tech) => (
            <Badge key={tech} variant={"outline"}>
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
