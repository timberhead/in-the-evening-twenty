import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
	const navigate = useNavigate();
	console.log(image.IMAGE[id].IMAGE + id);
	return (
		<div
			className="projectItem"
			onClick={() => {
				navigate("/project/" + id);
			}}
		>
			<div style={{ backgroundImage: `url(${image.IMAGE[id]})` }} className="bgImage" />
			<h1> {name} </h1>
		</div>
	);
}

export default ProjectItem;
