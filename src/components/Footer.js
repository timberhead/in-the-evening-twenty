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
			<div className="links">
				<Link to="/">Instagram</Link>
				<Link to="/">Twitter</Link>
				<Link to="/">Facebook</Link>
				<Link to="/">LinkedIn</Link>
				<Link to="/">GitHub</Link>
			</div>
			<p> &copy; 2022 cbwebdevelopers.com  💣</p>
		</div>
	);
}

export default Footer;
