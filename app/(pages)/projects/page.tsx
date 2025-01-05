import ProjectCard from '@/components/ProjectCard';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { GiThunderBlade } from 'react-icons/gi';

const Projects = () => {
	const project = {
		title: 'My Awesome Project',
		coverImage: '/bookify.png',
		techStack: ['React', 'Next.js', 'Tailwind CSS'],
		sourceLink: 'https://github.com/yourusername/project',
		liveLink: 'https://your-project-demo.com',
		description: 'A detailed description of your project...',
	};
	return (
		<>
			<ProjectCard />
			<div className="max-w-4xl mx-auto p-6 bg-[#0C121e] rounded-lg shadow-md">
				<h1 className="text-3xl font-bold mb-4">{project.title}</h1>

				<div className="mb-6">
					<Image
						src={project.coverImage}
						alt={`${project.title} cover`}
						width={800}
						height={400}
						className="rounded-lg object-cover w-full h-64"
					/>
				</div>

				<div className="flex flex-wrap gap-2 mb-4">
					{project.techStack.map((tech, index) => (
						<span
							key={index}
							className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
						>
							{tech}
						</span>
					))}
				</div>

				<div className="flex gap-4 mb-6">
					<a
						href={project.sourceLink}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 text-blue-600 hover:underline"
					>
						<GiThunderBlade size={20} />
						Source Code
					</a>
					<a
						href={project.liveLink}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 text-green-600 hover:underline"
					>
						<FaExternalLinkAlt size={20} />
						Live Demo
					</a>
				</div>

				<div className="prose max-w-none">
					<h2 className="text-2xl font-semibold mb-2">Project Description</h2>
					<p>{project.description}</p>
				</div>
			</div>
		</>
	);
};

export default Projects;
