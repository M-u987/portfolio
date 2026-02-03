
import ProjectCard from "../components/project/ProjectCard";
import ProjectsHeader from "../components/project/ProjectHeader";
import { projectsData } from "../data/ProjectData";

/**
 * Projects section wrapper component
 */
export default function Projects() {
  return (
    <section
      id="project"
      className="max-w-7xl mx-auto px-6 py-20 bg-white text-black dark:bg-gray-900 dark:text-white"
    >
      <ProjectsHeader 
        subtitle="Here are some of the projects I've worked on:"
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}
