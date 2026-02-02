import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export default function FooterLinks({ links}) {
  return (
    <div className="flex justify-start gap-4 mt-4">
      <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="w-6 h-6 hover:text-blue-600 ">
        <FaLinkedin size={28} />
      </a>
      <a href={links.github} target="_blank" rel="noopener noreferrer" className="w-6 h-6 hover:text-blue-600 ">
        <FaGithub size={28} />
      </a>
      <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="w-6 h-6 hover:text-blue-600 ">
        <RiInstagramFill size={28} />
      </a>
      <a href={links.youtube} target="_blank" rel="noopener noreferrer" className="w-6 h-6 hover:text-blue-600 ">
        <FaYoutube size={28} />
      </a>
    </div>
  );
}
