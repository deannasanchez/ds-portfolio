import React from "react";
import "./home.css";
import Footer from "../../components/Footer/footer";

function Home() {
  return (
      <div className="container main-home">
        <div className="row">
          <div className="col">
            <h1 className="title-home">Deanna <br></br>Sanchez</h1>
          </div>
        </div>

        <div className="row projecttop mb-5">
          <div className="col">
            <h2>
              A Little About Me
        </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6 project-ph">
            <h4>
              My name is Deanna Sanchez I'm a Full-Stack Web Developer based in sunny Southern California. I've been 
              involved in these industries one way or another for the past 9 years. 
            </h4>
          </div>

          <div className="col-6 project-ph">
            <h4> 
              As my love for Web Development grew I knew I needed to further my skills. So I obtained my Full-Stack 
              Web Development Certificate from University of California, Irvine Continuing Education Division...
            </h4>
          </div>
        </div>
        <hr className="mt-5"></hr>
        <Footer />
      </div>
  );
}

export default Home;
