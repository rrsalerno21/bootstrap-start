import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectContainer = ({ hiLightProjs }) => {
  return (
    <React.Fragment>
      <div className="row justify-content-center">
        {hiLightProjs.map((project) => (
          <div className="col-sm text-center">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ProjectContainer;
