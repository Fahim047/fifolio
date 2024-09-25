import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
const FeaturedProjects = () => {
	return (
		<section className="mt-12">
			<div className="flex flex-wrap gap-4 justify-between items-center">
				<h2 className="text-2xl font-bold text-[#88A4E6]">Featured Projects</h2>
				<Link
					href="/projects"
					className="bg-[#88a4e6] hover:bg-[#afc2ef] duration-300 px-4 py-2 rounded-lg text-[15px] text-[#0C121e] font-medium flex items-center justify-center gap-2"
				>
					<span>
						<HiArrowRight />
					</span>
					<span>View all</span>
				</Link>
			</div>
			<div className="my-6">
				<div className="p-4 flex gap-4 hover:bg-[#4d8af03d] rounded-xl duration-300 cursor-pointer">
					<img src="/rinterio.png" alt="" className="size-12 rounded-md" />
					<div>
						<h3 className="font-bold mb-2">Rinterio</h3>
						<p className="text-sm">A home decorating website</p>
					</div>
				</div>
				<div className="p-4 flex gap-4 hover:bg-[#4d8af03d] rounded-xl duration-300 cursor-pointer">
					<img src="/bookify.png" alt="" className="size-12 rounded-md" />
					<div>
						<h3 className="font-bold mb-2">Bookify</h3>
						<p className="text-sm">A fully functional hotel booking platform</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedProjects;
