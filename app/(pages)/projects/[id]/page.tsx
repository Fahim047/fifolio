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
		<div className="pt-12">
			<Link
				href="/projects"
				className="inline-flex items-center text-secondary hover:text-secondary/70 mb-8"
			>
				<ChevronLeft className="size-5 mr-2" />
				Back
			</Link>

			<h1 className="text-4xl font-bold mb-6">{projectData?.title}</h1>
			<Image
				src={projectData?.thumbnail || ''}
				alt={projectData?.title}
				width={1920}
				height={1080}
				quality={100}
				className="w-full rounded-lg"
			/>

			<div className="flex flex-wrap gap-2 mt-4">
				{projectData?.techStack?.map((tech) => (
					<span
						key={tech}
						className="px-3 py-1 bg-primary rounded-full text-sm"
					>
						{tech}
					</span>
				))}
			</div>

			<div className="prose max-w-none mt-8">
				<p className="text-secondary text-lg">{projectData.description}</p>
			</div>

			<div className="mt-4 flex gap-4">
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
					className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
				>
					<Github className="w-4 h-4 mr-2" />
					Source Code
				</Link>
			</div>
			<div className="mt-8">
				<h2 className="text-xl font-semibold mb-4">Challenges Faced</h2>
				<ul className="space-y-4 list-disc list-outside pl-5 text-secondary">
					{projectData?.challenges?.map((challenge, index) => (
						<li key={index} className="leading-relaxed">
							{challenge}
						</li>
					))}
				</ul>
			</div>
			<div className="mt-8">
				<h2 className="text-xl font-semibold mb-4">Future Improvements</h2>
				<ul className="space-y-4 list-disc list-outside pl-5 text-secondary">
					{projectData.improvements?.map((improvement, index) => (
						<li key={index} className="leading-relaxed">
							{improvement}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ProjectDetailsPage;
