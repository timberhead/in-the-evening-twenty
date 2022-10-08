



import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../pages/styles/Footer.css";

function Footer() {
  return (
    <div className = "footer">
        <div className = "socialMedia">
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
            <LinkedInIcon />
            <GitHubIcon />
        </div>
        <p> &copy; 2022 christophertech.com</p>
    </div>
  );
}

export default Footer;