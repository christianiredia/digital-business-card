import React from "react";
import Headshot from "./images/HeadShot.jpg";
import "./info.css";
import Email from "./images/email.png";
import LinkedIn from "./images/linkedin.png";

const Info = () => {
  return (
    <header>
      <img
        src={Headshot}
        className="headshot"
        alt="Picture of Christian Iredia"
      />
      <>
        <h1>Christian Iredia</h1>
        <p className="fendDev">Frontend Developer</p>
        <a href="https://github.com/christianiredia">christianiredia.website</a>
      </>

      <div className="btnContainer">
        <button className="emailBtn">
          <>
            <img src={Email} className="email" alt="Mail" />
          </>
          <>Email</>
        </button>
        <button className="linkedinBtn">
          <img src={LinkedIn} className="linkedin" alt="Linkedin Logo" />
          Linkedin
        </button>
      </div>
    </header>
  );
};

export default Info;
