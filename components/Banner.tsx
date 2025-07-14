import MyPhoto from '@/public/fif-transparent.png';
import Image from 'next/image';
import Link from 'next/link';
import { HiMiniArrowDownTray } from 'react-icons/hi2';
import SocialLinks from './SocialLinks';
const Banner = () => {
	return (
		<section className="wrapper sm:flex sm:items-end sm:gap-6 space-y-6 sm:space-y-0">
			<Image
				className="w-full max-w-[240px] mx-auto object-fit-cover"
				src={MyPhoto}
				alt="a portrait of Fahimul Islam"
			/>
			<div className="space-y-6">
				<div>
					<p className="text-xl">Hello🖐️, folks</p>
					<h1 className="text-3xl font-extrabold">
						I&apos;m <span className="text-blue-400">Fahimul Islam</span>
					</h1>
				</div>
				<div className="space-y-2">
					<p className="font-bold">
						Passionate full-stack web developer with a huge love for{' '}
						<span className="text-yellow-300 font-bold">JavaScript </span>
						and <span className="text-blue-300">Go</span>.
					</p>
					<p>
						I create modern, responsive and high-performance applications using
						cutting-edge technologies like{' '}
						<span className="text-blue-300">MERN</span>.
					</p>
				</div>
				<div className="flex flex-col sm:flex-row sm:items-center gap-4">
					<Link
						href="https://drive.google.com/file/d/1nbD53-PBubUu3ZKXu91LpHbqhp2icdZW/view?usp=drive_link"
						className="bg-transparent hover:bg-blue-500 border hover:border-transparent border-blue-500 duration-300 px-4 py-2 rounded-lg text-[15px] text-slate-100 hover:text-[#0C121e]   flex items-center justify-center gap-2"
						target="_blank"
						rel="noopener noreferrer"
					>
						<HiMiniArrowDownTray size={20} />
						<span>Resume</span>
					</Link>
					<SocialLinks />
				</div>
			</div>
		</section>
	);
};

export default Banner;
