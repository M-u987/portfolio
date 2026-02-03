import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "lucide-react";

export default function SocialLinks({ links }) {
  return (
    <div className="flex px-10 items-center gap-5 mt-8">
      <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 animate-bounce">
        <FaLinkedin size={28} />
      </a>
      <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 animate-bounce">
        <FaGithub size={28} />
      </a>
      <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 animate-bounce">
        <RiInstagramFill size={28} />
      </a>
      <a href={links.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 animate-bounce">
        <FaYoutube size={28} />
      </a>
    </div>
  );
}
