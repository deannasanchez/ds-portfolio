import React from "react";
import Github from "../../pages/Contact/github-logo-transparent.png";
import Linkedin from "../../pages/Contact/linkedin-logo-transparent.png";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container mt-5 mb-2">
      <div className="row justify-content-md-center align-items-end">
      <div className="col-">
        <p className="icons">
        <a href="https://github.com/deannasanchez"> <img border="0" alt="github" src={Github} width="50px" height="50px"/> </a>
        <a href="https://www.linkedin.com/in/deannasanchezlink/"> <img border="0" alt="linkedin" src={Linkedin} width="50px" height="50px"/> </a>
        </p>
      </div>
      </div>
      <div className="row justify-content-md-center align-items-end">
      <div className="col-">
        <p>This website was built with ReactJS</p>
      </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
