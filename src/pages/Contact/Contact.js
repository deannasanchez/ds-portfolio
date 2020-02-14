import React from "react";
import "./contact.css";
import Github from "../Contact/github-logo-transparent.png";
import Linkedin from "./linkedin-logo-transparent.png";


function Contact() {
  return (
    <div className="container">
      <div className="row">
      <div className="col-10 mt-5">
        <h1 className="title-contact">
          Contact Me
      </h1></div>
      </div>
      <div className="row mt-5">
      <div className="col-">
        <p className="icons">
        <a href="https://github.com/deannasanchez"> <img border="0" alt="github" src={Github} width="100px" height="100px"/> </a>
        </p></div>
        <div className="col-">
        <p className="icons">
        <a href="https://www.linkedin.com/in/deannasanchezlink/"> <img border="0" alt="linkedin" src={Linkedin} width="100px" height="100px"/> </a>
        </p>
      </div>
      </div>
      <div className="row">
        <h2>
        Email Me: <a href="mailto:deanna.sanchez2018@gmail.com">deanna.sanchez2018@gmail.com</a>
        </h2>
      </div>
      
      </div>
  );
}

export default Contact;
