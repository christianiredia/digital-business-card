import React from "react";
import Headshot from "./images/HeadShot.jpg";
import "./info.css";
import Email from "./images/email.png";
import LinkedIn from "./images/linkedin.svg";

const Info = () => {
  return (
    <header>
      <img
        src={Headshot}
        className="headshot"
        alt="Picture of Christian Iredia"
      />
      <h1>Christian Iredia</h1>
      <p>Frontend Developer</p>
      <a href="https://github.com/christianiredia">christian iredia website</a>
      <button>
        <img src={Email} className="email" alt="Mail" />
        Email
      </button>
      <button>
        <img src={LinkedIn} className="linkedin" alt="Linkedin Logo" />
        Linkedin
      </button>
    </header>
  );
};

export default Info;
