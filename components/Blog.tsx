import data from '@/data/data.json';
import Image from 'next/image';
import Link from 'next/link';
const Blog = () => {
	const { blogs } = data;
	return (
		<section className="mt-12">
			<div className="flex flex-wrap gap-4 justify-between items-center">
				<h2 className="text-2xl font-bold text-red-400">From the blog</h2>
				{/* <Link
					href="/blogs"
					className="bg-blue-400 hover:bg-blue-500 duration-300 px-4 py-2 rounded-lg text-[15px] text-[#0C121e] font-medium flex items-center justify-center gap-2"
				>
					<span>
						<HiArrowRight />
					</span>
					<span>View all</span>
				</Link> */}
			</div>
			<div className="my-6">
				{blogs.map((blog) => (
					<Link
						key={blog.id}
						href={blog.link}
						target="_blank"
						className="p-4 flex gap-4 hover:bg-yellow-400/30 rounded-xl duration-300"
					>
						<Image
							src={blog.thumbnail || ''}
							alt={blog.title}
							width={1920}
							height={1080}
							quality={100}
							className="size-16 rounded-md object-center"
						/>
						<div className="space-y-1">
							<h3 className="font-bold">{blog.title}</h3>
							{/* <p className="text-sm text-gray-200">{blog.description}</p> */}
							<p className="text-sm text-secondary">22 September 2024</p>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};

export default Blog;
