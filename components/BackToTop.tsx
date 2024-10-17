'use client';
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Show button when page is scrolled up to a certain distance
	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	// Scroll to top function
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return (
		<div className="absolute bottom-0 right-0">
			{isVisible && (
				<button
					onClick={scrollToTop}
					className="bg-blue-400 hover:bg-blue-500 text-[#121212] p-3 rounded-full shadow-lg transition duration-300"
				>
					<FaArrowUp />
				</button>
			)}
		</div>
	);
};

export default BackToTop;
