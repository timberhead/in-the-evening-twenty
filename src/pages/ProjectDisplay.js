import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../components/helpers/ProjectList";
// import Projects from "../pages/Projects";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../pages/styles/ProjectDisplay.css";

function ProjectDisplay() {
	const { id } = useParams();
	const project = ProjectList[id];
	
	return (
		<div className="project">
			<h1> {project.name}</h1>
			<img src={project.image} alt={project.name} />
			<p>
				<b>Skills:</b> {project.skills}
			</p>
			<GitHubIcon />
		</div>
	);
}

export default ProjectDisplay;
