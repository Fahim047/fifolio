import ProjectSummaryCard from "@/components/ProjectSummaryCard";
import data from "@/data/data.json";

const Projects = () => {
  const { projects } = data;
  return (
    <section className="mt-12">
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <h2 className="text-2xl font-bold text-yellow-400">Projects</h2>
      </div>
      <div className="my-6 grid grid-cols-1 gap-4">
        {projects.map(
          ({ title, slug, id, description, thumbnail, techStack }) => (
            <ProjectSummaryCard
              key={id}
              id={id}
              slug={slug}
              title={title}
              description={description}
              thumbnail={thumbnail}
              techStack={techStack}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
