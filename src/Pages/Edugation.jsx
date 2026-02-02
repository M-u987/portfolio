import React from "react";
import EducationCard from "../components/Education/EducationInfo";
import { educationData } from "../Data/EducationData";

export default function Education() {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-5">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 hover:text-blue-800">
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
