import React from "react-router-dom";
import AboutImg from "../assets/About.jpg";
import AboutImage from "../Components/About/AboutImg.jsx";
import AboutContent from "../Components/About/AboutContent.jsx";
import { aboutData } from "../Data/AboutData.jsx";


/**
 * About section wrapper component
 */
export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-20 gap-10 bg-white text-black dark:bg-gray-900 dark:text-white"
    >
      
      <AboutImage image={AboutImg} alt="About Murugesh" />
      <AboutContent
        title={aboutData.title}
        paragraphs={aboutData.paragraphs}
      />
    </section>
  );
}
