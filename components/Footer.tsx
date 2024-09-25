import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiCodeBracket } from 'react-icons/hi2';
import SocialLinks from './SocialLinks';

const Footer = () => {
	return (
		<>
			<div className="py-4 border-t-2 border-gray-100/10 grid md:grid-cols-2  gap-6">
				<div className="space-y-4">
					<Link
						href="/"
						className="text-xl font-bold text-[#88a4e6] flex items-center  gap-1"
					>
						<span>
							<HiCodeBracket />
						</span>
						Fahimul
					</Link>
					<p className="leading-6">
						Passionate full-stack web developer with a love for JavaScript and
						Golang.
					</p>
					<SocialLinks />
				</div>
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
			</div>
		</>
	);
};

export default Footer;
