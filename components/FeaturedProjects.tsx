import data from '@/data/data.json';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
const FeaturedProjects = () => {
	const { featuredProjects } = data;
	return (
		<section className="py-12">
			<div className="flex flex-wrap gap-4 justify-between items-center">
				<h2 className="text-2xl font-bold text-yellow-400">
					Featured Projects
				</h2>
				<Link
					href="/projects"
					className="bg-blue-400 hover:bg-blue-500 duration-300 px-4 py-2 rounded-lg text-[15px] text-[#0C121e] font-medium flex items-center justify-center gap-2"
				>
					<span>
						<HiArrowRight />
					</span>
					<span>View all</span>
				</Link>
			</div>
			<div className="my-6">
				{featuredProjects.map((project) => (
					<Link
						href={`/projects/${project.id}`}
						key={project.id}
						className="p-4 flex items-center gap-4 hover:bg-[#4d8af03d] rounded-xl duration-300 cursor-pointer"
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
							<p className="text-sm">{project.description}</p>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};

export default FeaturedProjects;
