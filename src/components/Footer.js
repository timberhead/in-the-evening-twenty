import React from "react";
import { Instagram, Twitter, Facebook, LinkedIn, GitHub } from "@mui/icons-material";

import "../pages/styles/Footer.css";

function Footer() {
	return (
		<div className="footer">
			<div className="socialMedia">
				<Instagram />
				<Twitter />
				<Facebook />
				<LinkedIn />
				<GitHub />
			</div>
			<p> &copy; 2022 cbwebdevelopers.com</p>
		</div>
	);
}

export default Footer;
