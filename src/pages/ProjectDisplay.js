import React from "react";
import { useParams } from "react-router-dom";
import ProjectList from "../components/helpers/ProjectList.json";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../pages/styles/ProjectDisplay.css";

function ProjectDisplay() {
	let id = useParams();
	console.log(ProjectList);
	let project = ProjectList[id];
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
