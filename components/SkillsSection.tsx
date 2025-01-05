'use client';

import React, { useEffect, useRef } from 'react';
import { IconType } from 'react-icons';
import {
	SiCss3,
	// SiCypress,
	SiDocker,
	SiExpress,
	SiFirebase,
	SiGit,
	// SiGraphql,
	SiHtml5,
	SiJavascript,
	// SiJest,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	// SiPostgresql,
	SiReact,
	SiSass,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si';

interface Skill {
	name: string;
	icon: IconType;
}

const skills: Skill[] = [
	{ name: 'TypeScript', icon: SiTypescript },
	{ name: 'JavaScript', icon: SiJavascript },
	{ name: 'React', icon: SiReact },
	{ name: 'Next.js', icon: SiNextdotjs },
	{ name: 'Node.js', icon: SiNodedotjs },
	{ name: 'Express', icon: SiExpress },
	{ name: 'MongoDB', icon: SiMongodb },
	// { name: 'PostgreSQL', icon: SiPostgresql },
	// { name: 'GraphQL', icon: SiGraphql },
	// { name: 'REST API', icon: SiOpenai },
	{ name: 'HTML5', icon: SiHtml5 },
	{ name: 'CSS3', icon: SiCss3 },
	{ name: 'Tailwind CSS', icon: SiTailwindcss },
	{ name: 'Sass', icon: SiSass },
	{ name: 'Git', icon: SiGit },
	{ name: 'Docker', icon: SiDocker },
	{ name: 'Firebase', icon: SiFirebase },
	// { name: 'Jest', icon: SiJest },
	// { name: 'Cypress', icon: SiCypress },
];

const SkillsSection: React.FC = () => {
	const marqueeRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const marquee = marqueeRef.current;
		if (!marquee) return;

		let animationId: number;
		let start: number;

		const step = (timestamp: number) => {
			if (start === undefined) {
				start = timestamp;
			}
			const elapsed = timestamp - start;
			marquee.style.transform = `translateX(${-elapsed / 20}px)`;

			if (marquee.getBoundingClientRect().right < 0) {
				start = timestamp;
				marquee.style.transform = 'translateX(100%)';
			}

			animationId = requestAnimationFrame(step);
		};

		animationId = requestAnimationFrame(step);

		return () => cancelAnimationFrame(animationId);
	}, []);

	return (
		<section className="py-12 overflow-hidden">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl font-bold text-center text-blue-400 mb-8">
					My Skills
				</h2>
				<div className="relative">
					<div
						ref={marqueeRef}
						className="flex space-x-4 whitespace-nowrap"
						style={{ willChange: 'transform' }}
					>
						{skills.concat(skills).map((skill, index) => (
							<div
								key={index}
								className="inline-flex items-center justify-center px-4 py-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full text-white font-medium text-sm space-x-2"
							>
								<skill.icon className="w-5 h-5" />
								<span>{skill.name}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
