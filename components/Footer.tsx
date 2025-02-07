import Link from 'next/link';
import { HiCodeBracket } from 'react-icons/hi2';
import BackToTop from './BackToTop';
import SocialLinks from './SocialLinks';

const Footer = () => {
	return (
		<div className="max-w-3xl mx-auto relative">
			<div className="py-4 border-t-2 border-gray-100/10 grid md:grid-cols-2 gap-6">
				<div className="space-y-4">
					<Link
						href="/"
						className="text-xl font-bold text-blue-400 flex items-center  gap-1"
					>
						<span>
							<HiCodeBracket />
						</span>
						Fahim
					</Link>
					<p className="text-secondary">
						Passionate full-stack web developer with a huge love for{' '}
						<span className="text-yellow-300 font-bold">JavaScript.</span>
						{/* and Golang. */}
					</p>
					<SocialLinks />
				</div>
				<div className="relative  grid grid-cols-2">
					<div>
						<h4 className="font-bold mb-4 text-gray-300">Navigate</h4>
						<ul className="font-bold text-gray-400 text-sm space-y-2">
							<li>
								<Link
									href="/about"
									className="hover:text-[#88a4e6] hover:underline duration-300"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/projects"
									className="hover:text-[#88a4e6] duration-300 hover:underline"
								>
									Projects
								</Link>
							</li>
							<li>
								<Link
									href="/blogs"
									className="hover:text-[#88a4e6] duration-300 hover:underline"
								>
									Blogs
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="hover:text-[#88a4e6] duration-300 hover:underline"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div className="relative">
						<h4 className="font-bold mb-4 text-gray-300">Legal</h4>
						<ul className="font-bold text-gray-400 text-sm space-y-2">
							<li>
								<Link
									href="/about"
									className="hover:text-[#88a4e6] hover:underline duration-300"
								>
									Terms & Conditions
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="hover:text-[#88a4e6] hover:underline duration-300"
								>
									Security & Policy
								</Link>
							</li>
						</ul>
						<BackToTop />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
