import React from "react";
import DS from "../NavBar/ds-simple-logo.png";
import "./style.css";

function NavBar() {
  return (
      <div className="container">
           <div className="row top-page">
               <div className="col-9">
               <a href="/"><img className="logo" border="0" alt="ds-logo" src={DS} width="80px" height="80px"/></a>
                </div>
                <div className="col-1" id="top-right">
                <a href="/about">About</a>
                </div>
                <div className="col-1" id="top-right">
                <a href="/work">Work</a>
                </div>
                <div className="col-1" id="top-right">   
                <a href="/contact">Contact</a>
                </div>
            </div>
        </div>

  )
}
export default NavBar;