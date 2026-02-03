import React from "react-router-dom";
import SkillCard from "../components/Skills/SkillsCard.jsx";
import SkillsHeader from "../components/Skills/SkillsHeader.jsx";
import { skillsData } from "../Data/SkillsData.jsx";

/**
 * Skills section wrapper component
 */
export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-br py-24 px-6 bg-white text-black dark:bg-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">

        <SkillsHeader
          
          subtitle="Technologies & tools I use in real-world projects"
        />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-10">
          {skillsData.map((skill) => (
            <SkillCard
              key={skill.id}
              name={skill.name}
              level={skill.level}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
