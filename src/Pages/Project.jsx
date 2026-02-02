import ProjectCard from "../components/Project/ProjectCard";
import ProjectsHeader from "../components/Project/ProjectHeader";
import { projectsData } from "../Data/ProjectData";

/**
 * Projects section wrapper component
 */
export default function Projects() {
  return (
    <section
      id="project"
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <ProjectsHeader
        title="Projects"
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
