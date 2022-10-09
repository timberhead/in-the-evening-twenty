import React from "react";
import { Instagram, Twitter, Facebook, LinkedIn, GitHub } from "@mui/icons-material";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
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
			<p> &copy; 2022 christophertech.com</p>
		</div>
	);
}

export default Footer;
