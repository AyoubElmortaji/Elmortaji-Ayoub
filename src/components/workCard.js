
import { NavLink } from "react-router-dom";
import "./workCardStyles.css";
import React from 'react';

const workCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">PROJECTS</h1>

        <div className="project-container">
            <div className="project-card">
                <img src="https://www.nopio.com/wp-content/uploads/2016/05/web-development.jpg" alt="img"/>
                <h2 className="project-title">Sawaid Al Amal club</h2>
                <div className="pro-details">
                    <p>Sawaid Al Amal - ENSAM CASA club </p>
                    <div className="pro-btns">
                        <NavLink to="https://sawaidalamal-ensamc.me/" className="btn">View</NavLink>
                        <NavLink to="https://github.com/AyoubElmortaji/sawaidalaml-ensamc" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>


            
        </div>
    </div>
  )
}

export default workCard;
