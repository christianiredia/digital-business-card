import React from "react";
import Linkedin from "./images/linkedin-logo.png";
import Github from "./images/github.png";
import Twitter from "./images/twitter.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="https://www.linkedin.com/in/christianiredia/" target="_blank">
        <img src={Linkedin} className="linkedinLogo" alt="Linkedin Logo" />
      </a>
      <a href="https://github.com/christianiredia" target="_blank">
        <img src={Github} alt="Github Logo" />
      </a>
      <a href="https://twitter.com/ChristianDev_" target="_blank">
        <img src={Twitter} className="twitterLogo" alt="Twitter Logo" />
      </a>
    </footer>
  );
};

export default Footer;
