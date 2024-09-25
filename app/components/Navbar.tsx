import Link from 'next/link';
import { HiCodeBracket, HiSun, HiMoon } from 'react-icons/hi2';
const Navbar = () => {
	return (
		<nav className="px-2 py-1 md:px-4 md:py-3 bg-[#151e30] border-2  border-blue-100/10 drop-shadow-lg rounded-xl flex justify-between items-center">
			<Link
				href="/"
				className="text-xl font-bold text-[#88a4e6] flex items-center justify-center gap-1"
				aria-label="Fahimul homepage"
			>
				<span>
					<HiCodeBracket />
				</span>
				Fahimul
			</Link>
			<div className="flex items-center gap-6">
				<ul className="hidden md:flex items-center gap-6 font-bold">
					<li>
						<Link href="/about" className="hover:text-[#88a4e6] duration-300">
							About
						</Link>
					</li>
					<li>
						<Link
							href="/projects"
							className="hover:text-[#88a4e6] duration-300"
						>
							Projects
						</Link>
					</li>
					<li>
						<Link href="/blogs" className="hover:text-[#88a4e6] duration-300">
							Blogs
						</Link>
					</li>
					<li>
						<Link href="/contact" className="hover:text-[#88a4e6] duration-300">
							Contact
						</Link>
					</li>
				</ul>
				<button>
					<span className="text-2xl">
						<HiSun />
					</span>
					<span className="hidden text-2xl">
						<HiMoon />
					</span>
				</button>
				<button className="md:hidden">
					<svg
						className="w-6 h-6 text-gray-800 dark:text-white"
						xmlns="http://www.w3.org/2000/svg"
						width={24}
						height={24}
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeWidth={2}
							d="M5 7h14M5 12h14M5 17h14"
						/>
					</svg>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
