'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiBars3, HiCodeBracket, HiMoon, HiSun } from 'react-icons/hi2';
const navLinks = [
	{
		title: 'About',
		path: '/about',
	},
	{
		title: 'Projects',
		path: '/projects',
	},
	{
		title: 'Blogs',
		path: '/blogs',
	},
	{
		title: 'Contact',
		path: '/contact',
	},
];
const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="relative">
			<nav className="w-full px-4 py-3 bg-primary text-white border-2 border-blue-100/10 drop-shadow-lg rounded-xl flex justify-between items-center">
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
					<ul className="hidden md:flex items-center gap-6 font-bold text-white">
						{navLinks.map((link) => (
							<li key={link.title}>
								<Link
									href={link.path}
									className="hover:text-blue-400 duration-300"
								>
									{link.title}
								</Link>
							</li>
						))}
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
						<HiBars3 size={24} />
					</button>
				</div>
			</nav>

			{/* Mobile Menu */}
			<div
				className={`
          absolute top-full left-0 right-0 mt-2 
          bg-primary border-2 border-blue-100/10 
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
					{navLinks.map((link) => (
						<li key={link.title}>
							<Link
								href={link.path}
								className="block py-2 px-4 hover:bg-blue-400/10 rounded-lg duration-300"
								onClick={() => setIsMenuOpen(false)}
							>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
