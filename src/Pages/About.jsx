import React from "react";
import AboutImg from "../assets/About.jpg";
import AboutImage from "../components/About/AboutImg.jsx";
import AboutContent from "../components/About/AboutContent";
import { aboutData } from "../Data/AboutData.jsx";

/**
 * About section wrapper component
 */
export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-20 gap-10"
    >
      
      <AboutImage image={AboutImg} alt="About Murugesh" />
      <AboutContent
        title={aboutData.title}
        paragraphs={aboutData.paragraphs}
      />
    </section>
  );
}
