import React from 'react';
import { IconType } from 'react-icons';
import {
	SiAngular,
	SiCss3,
	SiDocker,
	SiExpress,
	SiFirebase,
	SiGit,
	SiGithub,
	SiGo,
	SiHtml5,
	SiJavascript,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiReact,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si';

interface Skill {
	name: string;
	icon: IconType;
}

const skills: Skill[] = [
	{ name: 'HTML5', icon: SiHtml5 },
	{ name: 'CSS3', icon: SiCss3 },
	{ name: 'Tailwind CSS', icon: SiTailwindcss },
	{ name: 'JavaScript', icon: SiJavascript },
	{ name: 'TypeScript', icon: SiTypescript },
	{ name: 'React', icon: SiReact },
	{ name: 'Next.js', icon: SiNextdotjs },
	{ name: 'Node.js', icon: SiNodedotjs },
	{ name: 'Express', icon: SiExpress },
	{ name: 'MongoDB', icon: SiMongodb },
	// { name: 'Sass', icon: SiSass },
	{ name: 'Git', icon: SiGit },
	{ name: 'Github', icon: SiGithub },
	{ name: 'Firebase', icon: SiFirebase },
	{ name: 'Go', icon: SiGo },
	{ name: 'Angular', icon: SiAngular },
	{ name: 'Docker', icon: SiDocker },
];

const SkillsSection: React.FC = () => {
	return (
		<section className="py-12">
			<div className="container mx-auto">
				<h2 className="text-2xl font-bold text-center text-blue-400 mb-8">
					My Skills
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
					{skills.map((skill, index) => (
						<div
							key={index}
							className="flex flex-col items-center justify-center p-2 bg-blue-400 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg text-white font-medium text-sm hover:bg-opacity-20 duration-300 aspect-square"
						>
							<skill.icon className="size-10 mb-2" />
							<span className="text-secondary">{skill.name}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
