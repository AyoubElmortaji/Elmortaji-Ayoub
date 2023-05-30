import "./HeroimgStyles.css";
import React from "react";
import {Link} from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" 
            src="https://summeregitim.com/wp-content/uploads/2018/01/yazilim-muhendisligi-02.jpg" alt="intro-img"/>
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
