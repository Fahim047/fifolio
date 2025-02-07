import SocialLinks from '@/components/SocialLinks';
import data from '@/data/data.json';
import Image from 'next/image';
export default function AboutPage() {
	return (
		<main className="min-h-screen text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
			{/* About Section */}
			<section className="max-w-4xl mx-auto space-y-6">
				<h1 className="text-2xl font-semibold text-blue-300">About</h1>

				<div className="space-y-4">
					<p className="text-lg">
						👋 Hey there! I&apos;m Fahimul Islam, a full-stack web developer
						from{' '}
						<span className="text-blue-400 hover:underline">Bangladesh</span>{' '}
						with over two (2) years of experience.
					</p>

					<p className="text-gray-400">
						I focus on details and I&apos;m passionate about crafting web
						applications that look great and are both accessible and easy to
						maintain.
					</p>
				</div>

				<div className="relative h-[300px] w-full rounded-lg overflow-hidden">
					<Image src="/fif.jpeg" alt="" fill className="object-scale-down" />
					<div className="absolute bottom-0 left-0 right-0 p-2 bg-black/60 text-sm text-center">
						&copy; 2023 Fahimul Islam
					</div>
				</div>

				{/* <div className="space-y-4">
					<p className="text-gray-400">
						I&apos;m a huge advocate for open source and collaborating with the
						community. You can find my stash of websites, libraries, and apps on{' '}
						<Link href="#" className="text-blue-400 hover:underline">
							GitHub
						</Link>{' '}
						which have earned over 2K stars.
					</p>

					<p className="text-gray-400">
						I&apos;m all about diving into challenges improving and expanding my
						skillset and I thrive in globally-remote teams that value people and
						embrace trust, kindness, and inclusion.
					</p>
				</div> */}

				<div className="pt-6">
					<h2 className="text-lg font-semibold mb-4">Let&apos;s connect!</h2>
					<SocialLinks />
				</div>
			</section>

			{/* Skills Section */}
			<section className="max-w-4xl mx-auto mt-12">
				<h2 className="text-2xl font-semibold mb-6">Skills</h2>
				<div className="flex flex-wrap gap-2">
					{[
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
					].map((skill) => (
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
					{/* <Link
						href="/resume.pdf"
						target="_blank"
						referrerPolicy="no-referrer"
						className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-800 text-gray-200 hover:bg-gray-700 transition-colors"
					>
						Resume
					</Link> */}
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

			{/* Activity Section */}
			{/* <section className="max-w-4xl mx-auto mt-16">
				<h2 className="text-2xl font-semibold mb-6">Activity</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
						<div className="flex items-start space-x-4">
							<div className="w-16 h-16 rounded bg-gray-700 overflow-hidden">
								<Image
									src="/placeholder.svg?height=64&width=64"
									alt="Man in The Moon"
									width={64}
									height={64}
									className="object-cover"
								/>
							</div>
							<div>
								<span className="text-sm text-gray-400">LAST PLAYED</span>
								<h3 className="font-medium">Man in The Moon</h3>
								<p className="text-sm text-gray-400">Coldplay</p>
							</div>
						</div>
					</div>

					<div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
						<div className="flex items-start space-x-4">
							<div className="w-16 h-16 rounded bg-gray-700 overflow-hidden">
								<Image
									src="/placeholder.svg?height=64&width=64"
									alt="Engineering Management"
									width={64}
									height={64}
									className="object-cover"
								/>
							</div>
							<div>
								<span className="text-sm text-gray-400">FINISHED</span>
								<h3 className="font-medium">
									Engineering Management for th...
								</h3>
								<p className="text-sm text-gray-400">Sarah Drasner</p>
							</div>
						</div>
					</div>
				</div>
			</section> */}
		</main>
	);
}
