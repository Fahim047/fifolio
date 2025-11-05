import data from "@/data/data.json";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { buttonVariants } from "./ui/button";
const FeaturedProjects = () => {
  const featuredProjects = data.projects.filter((p) => p.featured);
  return (
    <section className="py-12">
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <h2 className="text-2xl font-bold text-yellow-400">
          Featured Projects
        </h2>
        <Link href="/projects" className={buttonVariants()}>
          <span>
            <HiArrowRight />
          </span>
          <span>View all</span>
        </Link>
      </div>
      <div className="my-6">
        {featuredProjects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.id}
            className="p-4 flex items-center gap-4 hover:bg-primary/50 rounded-xl duration-300 cursor-pointer"
          >
            <Image
              src={project.thumbnail}
              alt=""
              width={1000}
              height={1000}
              className="size-20 object-cover rounded-md"
            />
            <div>
              <h3 className="font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-secondary-foreground">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
