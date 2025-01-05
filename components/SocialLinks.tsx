import data from '@/data/data.json';
import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
const SocialLinks = () => {
	const {
		personalInfo: { socialLinks },
	} = data;
	return (
		<ul className="flex items-center gap-1">
			<li>
				<Link
					href={socialLinks.github}
					target="_blank"
					className="flex items-center justify-center p-2 rounded-full hover:bg-green-900 duration-300"
				>
					<span className="text-2xl">
						<FaGithub />
					</span>
				</Link>
			</li>
			<li>
				<Link
					href={socialLinks.linkedin}
					target="_blank"
					className="flex items-center justify-center p-2 rounded-full hover:bg-blue-900 duration-300"
				>
					<span className="text-2xl">
						<FaLinkedin />
					</span>
				</Link>
			</li>
			<li>
				<Link
					href={socialLinks.facebook}
					target="_blank"
					className="flex items-center justify-center p-2 rounded-full hover:bg-blue-900 duration-300"
				>
					<span className="text-2xl">
						<FaFacebook />
					</span>
				</Link>
			</li>
		</ul>
	);
};

export default SocialLinks;
