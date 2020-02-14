import React from "react";
import "./work.css";
import ICB from "../Work/icecoldbeats.png";
import Footer from "../../components/Footer/footer";

function Work() {
  return (
      <div className="container">
        <div className="row">
        <div className="col mt-5">
            <h1 className="title-work">Work</h1>
          </div>
          </div>
        
        <div className="row">
          <div className="col-5 icbcontainer">
          <a href="https://gentle-atoll-31544.herokuapp.com/"><img src={ICB} alt="ice cold beats" class="icbimg" /></a>
          <h3>
            <a href="https://gentle-atoll-31544.herokuapp.com/">Ice Cold Beats</a>
          </h3>
          <p>Ice Cold Beats is a React App that creates beat sequences. You can log in with a personal account to save the
              beats you create. It was built using HTML, CSS, Bootstrap, ReactJS, React-Router, Express, MongoDB and Mongoose.</p>
          </div>
          <div className="col-2">
          </div>
          <div className="col-5 icbcontainer">
          <a href="https://gentle-atoll-31544.herokuapp.com/"><img src={ICB} alt="ice cold beats" class="icbimg" /></a>
          <h3>
            <a href="https://gentle-atoll-31544.herokuapp.com/">Ice Cold Beats</a>
          </h3>
          </div>
          </div>
          
          <hr className="mt-5"></hr>
          <Footer />
          </div>
  );
}

export default Work;