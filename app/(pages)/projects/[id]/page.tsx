import data from '@/data/data.json';
import { ChevronLeft, Github, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
const ProjectDetailsPage = ({ params }) => {
	const projectData = data.projects.find(
		(project) => project.id === Number(params?.id)
	);
	if (!projectData) {
		return (
			<div className="max-w-4xl mx-auto py-12">
				<p>Project not found</p>
			</div>
		);
	}
	return (
		<div className="max-w-4xl mx-auto py-12">
			<Link
				href="/projects"
				className="inline-flex items-center text-secondary hover:text-secondary/70 mb-8"
			>
				<ChevronLeft className="w-4 h-4 mr-2" />
				Back to Projects
			</Link>

			<h1 className="text-4xl font-bold mb-6">{projectData?.title}</h1>
			<Image
				src={projectData?.thumbnail || ''}
				alt={projectData?.title}
				width={1920}
				height={1080}
				quality={100}
				className="w-full rounded-lg mb-8"
			/>

			<div className="flex flex-wrap gap-2 mb-8">
				{projectData?.techStack?.map((tech) => (
					<span
						key={tech}
						className="px-3 py-1 bg-[#151e30] text-primary rounded-full text-sm"
					>
						{tech}
					</span>
				))}
			</div>

			<div className="prose max-w-none mb-8">
				<p className="text-secondary text-lg">{projectData.description}</p>
			</div>

			<div className="flex gap-4 mb-12">
				<Link
					href={projectData.liveLink}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
				>
					<Globe className="w-4 h-4 mr-2" />
					Live Demo
				</Link>
				<Link
					href={projectData.githubLink}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
				>
					<Github className="w-4 h-4 mr-2" />
					Source Code
				</Link>
			</div>

			<div className="grid gap-8 md:grid-cols-2">
				<div className="p-6 rounded-xl shadow-sm">
					<h2 className="text-xl font-semibold mb-4">Challenges Faced</h2>
					<ul className="space-y-3">
						{projectData?.challenges?.map((challenge, index) => (
							<li key={index} className="text-secondary">
								• {challenge}
							</li>
						))}
					</ul>
				</div>

				<div className="p-6 rounded-xl shadow-sm">
					<h2 className="text-xl font-semibold mb-4">Future Improvements</h2>
					<ul className="space-y-3">
						{projectData.improvements?.map((improvement, index) => (
							<li key={index} className="text-secondary">
								• {improvement}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetailsPage;
