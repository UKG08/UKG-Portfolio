import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/E-comm.jpg"
          title="E-commerce website "
          description="It helps to establish your buissness online with more effectiveness"
        />
        <ProjectCard
          src="/food.png"
          title="Food delivery website "
          description="Food deliever at your place with the lightenning speed and with good prices."
        />
        <ProjectCard
          src="/porfolio.png"
          title="Best Portfolio"
          description="Best portfolio for showcasing your product and give u new opportunities."
        />
      </div>
    </div>
  );
};

export default Projects;
