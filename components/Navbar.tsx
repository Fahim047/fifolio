'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiCodeBracket, HiMoon, HiSun } from 'react-icons/hi2';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="relative">
			<nav className="w-full px-4 py-3 bg-[#151e30] border-2 border-blue-100/10 drop-shadow-lg rounded-xl flex justify-between items-center">
				<Link
					href="/"
					className="text-xl font-bold text-blue-400 flex items-center justify-center gap-1"
					aria-label="Fahimul homepage"
				>
					<span>
						<HiCodeBracket />
					</span>
					Fahim
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
							<Link
								href="/contact"
								className="hover:text-[#88a4e6] duration-300"
							>
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
					<button
						className="md:hidden"
						onClick={toggleMenu}
						aria-expanded={isMenuOpen}
						aria-label="Toggle navigation menu"
					>
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

			{/* Mobile Menu */}
			<div
				className={`
          absolute top-full left-0 right-0 mt-2 
          bg-[#151e30] border-2 border-blue-100/10 
          rounded-xl overflow-hidden transition-all duration-300 ease-in-out
          md:hidden
          ${
						isMenuOpen
							? 'opacity-100 translate-y-0'
							: 'opacity-0 -translate-y-2 pointer-events-none'
					}
        `}
			>
				<ul className="py-2 px-4 space-y-2">
					<li>
						<Link
							href="/about"
							className="block py-2 px-4 hover:bg-blue-400/10 rounded-lg duration-300"
							onClick={() => setIsMenuOpen(false)}
						>
							About
						</Link>
					</li>
					<li>
						<Link
							href="/projects"
							className="block py-2 px-4 hover:bg-blue-400/10 rounded-lg duration-300"
							onClick={() => setIsMenuOpen(false)}
						>
							Projects
						</Link>
					</li>
					<li>
						<Link
							href="/blogs"
							className="block py-2 px-4 hover:bg-blue-400/10 rounded-lg duration-300"
							onClick={() => setIsMenuOpen(false)}
						>
							Blogs
						</Link>
					</li>
					<li>
						<Link
							href="/contact"
							className="block py-2 px-4 hover:bg-blue-400/10 rounded-lg duration-300"
							onClick={() => setIsMenuOpen(false)}
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
