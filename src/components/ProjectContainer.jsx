import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectContainer = ({ hiLightProjs }) => {
  return (
    <React.Fragment>
      <div className="row justify-content-center">
        {hiLightProjs.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default ProjectContainer;
