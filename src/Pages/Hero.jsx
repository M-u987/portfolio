import SocialLinks from "../components/Hero/SocialLinks";
import Button from "../components/common/Button";
import { personalData } from "../Data/PersonalData";
import HeroImg from "../components/Hero/Muru.png";   


export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto bg-white text-black dark:bg-gray-900 dark:text-white flex flex-col md:flex-row items-center px-5 py-20 gap-10">

      <div className="md:w-1/2">
        <h1 className="text-5xl px-10 md:text-7xl font-hero-font leading-tight">
          Hi, <br />
          I'm <span className="text-blue-500">{personalData.name}</span>
        </h1>

        <p className="text-2xl px-10 mt-4">
          A Passionate <span className="text-blue-500 font-semibold">{personalData.role}</span>
        </p>

        <p className="mt-6 px-10 text-lg text-justify">
          {personalData.description}
        </p>

        <SocialLinks links={personalData.socialLinks} />

        <Button
          className="px-10"
          text="Download My CV"
          href={personalData.resume}
          download="murugesh.pdf"
        />
      </div>

      <div className="md:w-1/2 flex justify-center">
        <img
          src={HeroImg}
          alt="Murugesh Profile"
          className="w-[300px] md:w-[700px] hover:scale-105 transition duration-300"
        />
      </div>
    </section>
  );
}
