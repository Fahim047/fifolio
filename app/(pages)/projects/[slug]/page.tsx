import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getProjectBySlug } from "@/data/get-project";
import { ChevronLeft, Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectDetailsPageProps {
  params: Promise<{ slug: string }>;
}
export async function generateMetadata({ params }: ProjectDetailsPageProps) {
  const { slug } = await params;
  const projectData = getProjectBySlug(slug);
  if (!projectData) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${projectData.title} • Projects`,
    description: projectData.description,
  };
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { slug } = await params;
  const projectData = getProjectBySlug(slug);
  if (!projectData) {
    return (
      <div className="max-w-4xl mx-auto py-12">
        <p>Project not found</p>
      </div>
    );
  }
  return (
    <div className="pt-8">
      <Link
        href="/projects"
        className="inline-flex items-center text-muted-foreground hover:text-accent-foreground mb-8"
      >
        <ChevronLeft className="size-5 mr-2" />
        Back
      </Link>

      <h1 className="text-4xl font-bold mb-6">{projectData.title}</h1>
      <Image
        src={projectData?.thumbnail || ""}
        alt={projectData.title}
        width={1920}
        height={1080}
        quality={100}
        className="w-full rounded-lg"
      />

      <div className="flex flex-wrap gap-2 mt-4">
        {projectData?.techStack?.map((tech) => (
          <Badge key={tech} variant={"outline"}>
            {tech}
          </Badge>
        ))}
      </div>

      <div className="prose max-w-none mt-8">
        <p className="text-secondary-foreground text-lg">
          {projectData.description}
        </p>
      </div>

      <div className="mt-4 flex gap-4">
        {projectData.liveLink && (
          <Link
            href={projectData.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants()}
          >
            <Globe className="w-4 h-4 mr-2" />
            Live Demo
          </Link>
        )}
        <Link
          href={projectData.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants()}
        >
          <Github className="w-4 h-4 mr-2" />
          Source Code
        </Link>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Challenges Faced</h2>
        <ul className="space-y-4 list-disc list-outside pl-5 text-secondary-foreground">
          {projectData?.challenges?.map((challenge, index) => (
            <li key={index} className="leading-relaxed">
              {challenge}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Future Improvements</h2>
        <ul className="space-y-4 list-disc list-outside pl-5 text-secondary-foreground">
          {projectData.improvements?.map((improvement, index) => (
            <li key={index} className="leading-relaxed">
              {improvement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
