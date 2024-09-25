import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
	return (
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
	);
};

export default SocialLinks;
