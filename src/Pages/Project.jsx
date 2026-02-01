// import Project1 from "../assets/project.avif";
// import project2 from "../assets/project2.jpg";
// import project3 from "../assets/project3.jpg";
// export default function Project() {
//     return <section id="project" className="flex flex-col px-5 py-5 ">
//         <div className="w-full">
//             <div className="flex flex-col px-10 py-5">
//                 <h2 className="text-4xl font-hero-font border-b-2 mb-5 w-[200px] flex justify-center hover:text-blue-600">
//                     My Projects
//                 </h2>
//                 <p className='font-body-font'>
//                     Here are some of the projects I've worked on as a full-stack developer:   
//                 </p>
//             </div>
//         </div>
//         <div className="w-full">
//             <div className="flex flex-col md:flex-row px-10 gap-5">
//                 <div className='relative'>
//                     <img className="w-[400px] h-[350px]" src={Project1}/>
//                     <div className='project-card'>
//                         <p className="text-center py-10 px-5 text-white bottom-[100px]"> 
//                             Project Management System: A web application that allows users to create, manage, and track projects, tasks, and team collaboration in real-time.
//                         </p>
//                     </div>
//                 </div>
//                 <div className='relative'>
//                     <img className="w-[400px] h-[300px]" src={project2}/>
//                     <div className='project-card'>
//                         <p className="text-center py-10 px-5 text-white bottom-[100px]">
//                             E-commerce Platform: A full-featured online store with product listings, shopping cart, payment integration, and order management functionalities.
//                         </p>
//                     </div>
//                 </div>
//                 <div className='relative'>
//                     <img src={project3} className="w-[400px] h-[350px]"/>
//                     <div className="project-card">   
//                         <p className="text-center py-10 px-5 text-white bottom-[100px]">
//                             Social Networking Site: A platform that enables users to connect, share content, and interact with friends through posts, comments, and messaging features.
//                         </p>
//                     </div>
                    
//                 </div>

                
                
//             </div>
             
            
//         </div>
//     </section>
// }


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
