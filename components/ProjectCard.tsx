// import { Award, Calendar, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { BiAward, BiCalendar } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';

const ProjectCard = () => {
	const project = {
		id: '1',
		title: 'My Awesome Project',
		coverImage: '/path/to/cover-image.jpg',
		techStack: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
		description:
			'A brief description of your project that showcases its key features and purpose.',
		date: 'June 2023',
		award: 'Best Design 2023', // Optional
		sourceLink: 'https://github.com/yourusername/project',
		liveLink: 'https://your-project-demo.com',
	};
	return (
		<div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
			<div className="relative h-48 w-full">
				<Image
					src={project.coverImage}
					alt={`${project.title} cover`}
					layout="fill"
					objectFit="cover"
				/>
				<div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
				<div className="absolute bottom-4 left-4 right-4">
					<h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
					<div className="flex flex-wrap gap-2">
						{project.techStack.slice(0, 3).map((tech, index) => (
							<span
								key={index}
								className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full"
							>
								{tech}
							</span>
						))}
						{project.techStack.length > 3 && (
							<span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
								+{project.techStack.length - 3}
							</span>
						)}
					</div>
				</div>
			</div>
			<div className="p-4">
				<p className="text-gray-600 text-sm mb-4 line-clamp-2">
					{project.description}
				</p>
				<div className="flex items-center justify-between text-sm text-gray-500 mb-4">
					<div className="flex items-center">
						<BiCalendar size={16} className="mr-1" />
						<span>{project.date}</span>
					</div>
					{project.award && (
						<div className="flex items-center text-yellow-500">
							<BiAward size={16} className="mr-1" />
							<span>{project.award}</span>
						</div>
					)}
				</div>
				<div className="flex justify-between items-center">
					<a
						href={project.sourceLink}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
					>
						<FaGithub size={18} />
						<span className="text-sm">Source</span>
					</a>
					<a
						href={project.liveLink}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1 text-gray-600 hover:text-green-600 transition-colors"
					>
						<HiExternalLink size={18} />
						<span className="text-sm">Live Demo</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
