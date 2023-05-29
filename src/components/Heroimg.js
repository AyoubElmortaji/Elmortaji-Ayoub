import "./HeroimgStyles.css";
import React from "react";
import {Link} from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" 
            src="https://images.unsplash.com/photo-1505575537688-6a406f001ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=382&q=80" alt="intro-img"/>
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
