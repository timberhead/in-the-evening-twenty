import React from 'react';
import { useParams } from "react-router-dom";
import  ProjectList  from "../components/helpers/ProjectList.json";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../pages/styles/ProjectDisplay.css";


function ProjectDisplay() {
  console.log(ProjectList);
    // let { id } = useParams();
    let project = ProjectList[0]
  return ( 
  <div className="project">
    <h1> {project.name}</h1>
    <img src={project.image} />
    <p>
        <b>Skills:</b> {project.skills}
        </p>
    <GitHubIcon />
  </div>
  );
}

export default ProjectDisplay;