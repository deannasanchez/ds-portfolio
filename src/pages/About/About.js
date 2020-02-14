import React from "react";
import "./about.css";
import Profile from "../About/profile-img.png";
import Footer from "../../components/Footer/footer";

function About() {
  return (
    <div className="container">

      <div className="row">
        <div className="col mt-5">
          <h1 className="title-about">About Me</h1>
        </div>
        </div>

        <div className="row mt-5">
        <div className="col">
          <p><img alt="profile" src={Profile} width="400px"/></p>
          </div>
          <div className="col">
            <p>
                A brief history on how I started to grow my skills in web design and development. It all started with getting content
            </p>
          </div>
        </div>
      
      <hr className="mt-5"></hr>
      <Footer />
    </div>
  );
}

export default About;
