import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowDownTray } from 'react-icons/hi2';
const Banner = () => {
	return (
		<section>
			<div className="wrapper md:flex md:items-end">
				<img
					className="max-w-[240px] mx-auto"
					src="/fif-transparent.png"
					alt="a portrait of Fahimul Islam"
				/>
				<div className="space-y-6">
					<div>
						<p className="text-xl">Hello🖐️, folks</p>
						<h1 className="text-3xl font-extrabold">I&apos;m Fahimul Islam</h1>
					</div>
					<div className="space-y-2">
						<p className="font-bold">
							Passionate full-stack web developer with a love for{' '}
							<span className="text-yellow-300 font-bold">JavaScript</span> and{' '}
							<span className="text-blue-300">Golang</span>.
						</p>
						<p>
							I create modern, responsive and high-performance applications
							using cutting-edge technologies.
						</p>
					</div>
					<div className="flex flex-col md:flex-row md:items-center gap-4">
						<a
							className="px-4 py-2 rounded-md border-2 border-transparent bg-[#4f6fb9] hover:bg-transparent hover:border-[#88a4e6] flex items-center justify-center gap-2 duration-300"
							href="/about"
						>
							<span className="text-2xl">
								<HiArrowDownTray />
							</span>
							<span>Resume</span>
						</a>
						<ul className="flex items-center gap-1">
							<li>
								<a
									href="/"
									className="flex items-center justify-center p-2 rounded-full hover:bg-green-900 duration-300"
								>
									<span className="text-2xl">
										<FaGithub />
									</span>
								</a>
							</li>
							<li>
								<a
									href="/"
									className="flex items-center justify-center p-2 rounded-full hover:bg-blue-900 duration-300"
								>
									<span className="text-2xl">
										<FaLinkedin />
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
