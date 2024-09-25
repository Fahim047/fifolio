import { HiArrowDownTray } from 'react-icons/hi2';
import SocialLinks from './SocialLinks';
const Banner = () => {
	return (
		<section>
			<div className="wrapper md:flex md:items-end space-y-6">
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
							className="bg-[#88a4e6] hover:bg-[#afc2ef] duration-300 px-4 py-2 rounded-lg text-[15px] text-[#0C121e] font-medium flex items-center justify-center gap-2"
							href="/about"
						>
							<span>
								<HiArrowDownTray />
							</span>
							<span>Resume</span>
						</a>
						<SocialLinks />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
