import React from "react-router-dom";
import EducationCard from "../components/education/educationinfo.jsx";
import { educationData } from "../data/educationdata.jsx";

export default function Education() {
  return (
    <section id="education" className="py-16 bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6 py-5">
        <h2 className="text-4xl font-extrabold text-center mb-12 ">
          Educations
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <EducationCard
              key={index}
              degree={edu.degree}
              institution={edu.institution}
              year={edu.year}
              description={edu.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
