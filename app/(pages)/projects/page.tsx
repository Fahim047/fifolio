import data from '@/data/data.json';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
	const { projects } = data;
	return (
		<section className="mt-12">
			<div className="flex flex-wrap gap-4 justify-between items-center">
				<h2 className="text-2xl font-bold text-yellow-400">Projects</h2>
			</div>
			<div className="my-6 grid md:grid-cols-2 gap-6">
				{projects.map((project) => (
					<div
						key={project.id}
						className="bg-primary p-4 flex flex-col gap-4 rounded-xl duration-300 border  border-secondary/10 hover:bg-primary hover:border-blue-400"
					>
						<Image
							src={project.thumbnail || ''}
							alt=""
							width={1300}
							height={800}
							quality={100}
							className="w-full rounded-md object-cover"
						/>
						<div>
							<h3 className="text-xl font-bold mb-2">{project.title}</h3>
							<p className="text-secondary line-clamp-2">
								{project.description}
							</p>
						</div>
						<div className="pt-2 flex justify-between items-center gap-2">
							<Link
								href={project.liveLink}
								target="_blank"
								rel="noopener noreferrer"
								className="text-white hover:text-primary-hover transition-all duration-200 flex items-center gap-2 text-sm group"
							>
								<span>Live Demo</span>
								<ExternalLink className="w-4 h-4 group-hover:scale-115 transition-all duration-200" />
							</Link>
							<Link
								href={`/projects/${project.id}`}
								className="bg-[#22232b] px-4 py-2 rounded-md hover:bg-[#2a2b35] transition-all duration-200 text-sm flex items-center gap-1 group"
							>
								<span>Details</span>
								<ArrowRight className="w-4 h-4 group-hover:scale-115 transition-all duration-200" />
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
