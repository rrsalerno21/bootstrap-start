import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectContainer = ({ projects }) => {
  return (
    <React.Fragment>
      <div className="row justify-content-center">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default ProjectContainer;
