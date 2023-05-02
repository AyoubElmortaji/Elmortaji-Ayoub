import "./footerStyles.css";
import React from 'react';
import {FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from  "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
           <div className="left">
                <div className="location">
                    <FaHome size={20} style={
                        {color:"white",marginRight:"2rem"}
                    }/>

                <div>

                </div>
                    <p>Casabalca-Settat , Mohammedia.</p>
                    <p>Morocco.</p>
                </div>


                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={
                        {color:"white",marginRight:"2rem"}
                    }/>
                    +212-000-000-000

                    </h4>
                
                </div>


                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={
                        {color:"white",marginRight:"2rem"}
                    }/>
                    expertdevit2023@gmail.com

                    </h4>
                
                </div>
            </div> 

            <div className="right">
                   <h4>About the Company</h4>
                   <p>
                    This is me ELmortaji Ayoub. CEO & Founder of AESOFT & EXPERTDEV IT.
                    I enjow discussing new projects and design challenges, also helping people
                    who need solutions to their problems.
                   </p>


                   <div className="social">
                   <FaFacebook size={30} style={
                        {color:"white",marginRight:"1rem"}
                    }/>
                    <FaLinkedin size={30} style={
                        {color:"white",marginRight:"1rem"}
                    }/>

                    <FaGithub size={30} style={
                        {color:"white",marginRight:"1rem"}
                    }/>

                    <FaInstagram size={30} style={
                        {color:"white",marginRight:"1rem"}
                    }/>
                   </div>
            </div> 
        </div>
    </div>
  )
}

export default Footer