import data from "@/data/data.json";
import Link from "next/link";
import type { JSX } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const iconMap: Record<string, JSX.Element> = {
  Github: <FaGithub />,
  LinkedIn: <FaLinkedin />,
  Facebook: <FaFacebook />,
  Twitter: <FaTwitter />,
};

const SocialLinks = () => {
  const { socialLinks } = data.personalInfo;

  return (
    <ul className="flex items-center gap-2">
      {socialLinks.map(({ name, url, hoverColor }) => (
        <li key={name}>
          <Link
            href={url}
            target="_blank"
            className={`flex items-center justify-center p-2 rounded-full transition-colors duration-300 ${hoverColor}`}
          >
            <span className={`text-xl`}>{iconMap[name]}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
