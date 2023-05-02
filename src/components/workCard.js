
import { NavLink } from "react-router-dom";
import "./workCardStyles.css";
import React from 'react';

const workCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">PROJECTS</h1>

        <div className="project-container">
            <div className="project-card">
                <img src="https://media.istockphoto.com/id/1271072224/fr/photo/main-%C3%A0-laide-dun-ordinateur-portable-et-dun-%C3%A9cran-de-presse-pour-effectuer-une-recherche.jpg?b=1&s=170667a&w=0&k=20&c=nXXd9LFQ85QQ39MVgg9S31hp57oFbGZgV4zmpdCC2dg=" alt="img"/>
                <h2 className="project-title">Kaufen E-commerce</h2>
                <div className="pro-details">
                    <p>Kaufen is an e-commerce website that allows customers to purchase a wide variety of products online. The website offers a user-friendly interface that allows customers to easily browse and search for products they 
                        are interested in, as well as make secure payments and track their orders.</p>
                    <div className="pro-btns">
                        <NavLink to="https://ayoubelmortaji.github.io/Kaufen-ecomerce-website/" className="btn">View</NavLink>
                        <NavLink to="https://github.com/AyoubElmortaji/Kaufen-ecomerce-website" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>


            
        </div>
    </div>
  )
}

export default workCard;