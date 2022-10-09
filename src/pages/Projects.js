



import React from 'react';
import ProjectItem from "../components/ProjectItem";
import IMAGE0 from "../assets/images/image1.webp";
import IMAGE1 from "../assets/images/image2.jpeg";
import IMAGE2 from "../assets/images/image3.jpeg";
import  { ProjectList }   from "../components/helpers/ProjectList";
import "../pages/styles/Projects.css";


function Projects() {
  return (
    <div className="projects">
        <h1>My Projects</h1>
        <div className="projectList">
            {ProjectList.map((project, idx) => {
                return (
                <ProjectItem id={idx} name={project.name} image={project.image}/>
                );
            })}
        </div>
    </div>
  );
}

export default Projects;