import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
	
	const navigate = useNavigate();
	let IMAGE = image.IMAGE[id];
	
	return (
		<div
			className="projectItem"
			onClick={() => {
				navigate("/project/" + id);
			}}
		>
			<div style={{ backgroundImage: `url(${IMAGE[name]})` }} className="bgImage" />
			<h1> {name} </h1>
		</div>
	);
}

export default ProjectItem;
