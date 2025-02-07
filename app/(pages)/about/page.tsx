import SocialLinks from '@/components/SocialLinks';
import data from '@/data/data.json';
import Image from 'next/image';

const aboutData = {
	intro: {
		name: 'Fahimul Islam',
		location: 'Bangladesh',
		experience: '2',
		tagline:
			"I focus on details and I'm passionate about crafting web applications that look great and are both accessible and easy to maintain.",
	},
	journey: {
		title: 'My Journey 🚀',
		content:
			'I started programming because I was curious about how websites work. At first, I learned basic HTML and CSS, but soon I got interested in JavaScript and full-stack development. Now, I work with technologies like React, Next.js, TypeScript, Node.js, and MongoDB. I love solving problems, writing clean code, and learning new things to improve my skills.',
	},
	passion: {
		title: 'What I Love to Do 💡',
		content:
			"I enjoy building websites that look great and work smoothly. Whether it's creating a user-friendly design or developing a strong back-end, I focus on making web applications easy to use, fast, and reliable.",
	},
	beyond: {
		title: 'My Hobbies & Interests 🎨⚽',
		content:
			"When I'm not coding, I like playing cricket (soccer), watching movies, and sometimes playing video games. I also enjoy talking to other developers, sharing knowledge, and contributing to open-source projects.",
	},
};

const skills = [
	'HTML5',
	'CSS3',
	'Tailwind CSS',
	'JavaScript',
	'TypeScript',
	'Golang',
	'Python',
	'C',
	'C++',
	'Git',
	'React',
	'Next.js',
	'Node.js',
	'MongoDB',
	'Express',
];

export default function AboutPage() {
	return (
		<main className="min-h-screen text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
			{/* About Section */}
			<section className="max-w-4xl mx-auto space-y-6">
				<h1 className="text-2xl font-semibold text-blue-300">About</h1>

				<div className="space-y-4">
					<p className="text-lg">
						👋 Hey there! I&apos;m {aboutData.intro.name}, a full-stack web
						developer from{' '}
						<span className="text-blue-400 hover:underline">
							{aboutData.intro.location}
						</span>{' '}
						with over {aboutData.intro.experience} years of experience.
					</p>
					<p className="text-gray-400">{aboutData.intro.tagline}</p>
				</div>

				<div className="relative h-[300px] w-full rounded-lg overflow-hidden">
					<Image src="/fif.jpeg" alt="" fill className="object-scale-down" />
					<div className="absolute bottom-0 left-0 right-0 p-2 bg-black/60 text-sm text-center">
						&copy; 2023 {aboutData.intro.name}
					</div>
				</div>

				<div className="space-y-8 pt-6">
					{Object.entries({
						journey: aboutData.journey,
						passion: aboutData.passion,
						beyond: aboutData.beyond,
					}).map(([key, section]) => (
						<div key={key} className="space-y-2">
							<h2 className="text-xl font-semibold text-blue-200">
								{section.title}
							</h2>
							<p className="text-gray-300 leading-relaxed">{section.content}</p>
						</div>
					))}
					<div className="border-t border-gray-800 pt-6">
						<h2 className="text-lg font-semibold mb-4">Let&apos;s connect!</h2>
						<SocialLinks />
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section className="max-w-4xl mx-auto mt-12">
				<h2 className="text-2xl font-semibold mb-6">Skills</h2>
				<div className="flex flex-wrap gap-2">
					{skills.map((skill) => (
						<span
							key={skill}
							className="px-3 py-1 rounded-full bg-gray-800 text-sm text-gray-300 border border-gray-700"
						>
							{skill}
						</span>
					))}
				</div>
			</section>

			{/* Education Section */}
			<section className="max-w-4xl mx-auto mt-12">
				<div className="flex items-center justify-between mb-6">
					<h2 className="text-2xl font-semibold">Education</h2>
				</div>

				<div className="space-y-6">
					{data?.education.map((education, index) => (
						<div key={index} className="flex items-start space-x-4">
							<div className="size-24 rounded-lg bg-gray-800 overflow-hidden flex-shrink-0">
								<Image
									src={education.logo}
									alt={`${education.institution} logo`}
									width={600}
									height={500}
									className="size-full object-cover"
								/>
							</div>
							<div className="flex-1">
								<h3 className="font-medium text-lg">{education.institution}</h3>
								<p className="text-gray-400">{education.degree}</p>
								<p className="text-sm text-gray-500">{education.period}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
