import Link from 'next/link';
import React from 'react';
import { HiArrowRight } from 'react-icons/hi2';

const Blog = () => {
	return (
		<section className="mt-12">
			<div className="flex flex-wrap gap-4 justify-between items-center">
				<h2 className="text-2xl font-bold text-red-400">From the blog</h2>
				<Link
					href="/blogs"
					className="bg-blue-400 hover:bg-blue-500 duration-300 px-4 py-2 rounded-lg text-[15px] text-[#0C121e] font-medium flex items-center justify-center gap-2"
				>
					<span>
						<HiArrowRight />
					</span>
					<span>View all</span>
				</Link>
			</div>
			<div className="my-6">
				<a
					href="https://fif.hashnode.dev/understanding-var-let-and-const-in-javascript"
					target="_blank"
					className="p-4 flex gap-4 hover:bg-yellow-400/30 rounded-xl duration-300"
				>
					<img
						src="https://cdn.hashnode.com/res/hashnode/image/upload/v1725682691718/96816755-0d66-419b-8c65-cc4081cecda4.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
						alt=""
						className="size-12 rounded-md object-center"
					/>
					<div className="space-y-1">
						<h3 className="font-bold">
							Understanding var, let and const in Javascript
						</h3>
						<p className="text-sm text-gray-200">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
							mollitia dignissimos.
						</p>
						<p className="text-sm text-gray-200">22 September 2024</p>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Blog;
