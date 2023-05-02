import "./HeroimgStyles.css";
import React from "react";
import {Link} from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" 
            src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="intro-img"/>
        </div>

        <div className="content">
            <p>HI, I'M A FREELANCER</p>
            <h1>Web Developper</h1>
            <div>
                <Link to="/Project"
                className="btn">Project</Link>

               <Link to="/Contact"
                className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg