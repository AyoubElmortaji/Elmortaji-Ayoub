import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">

        <div className="left">
            <h1>Brief About Me </h1>   
    
    <p>
    Hi, I am Elmortaji Ayoub student at ENSAM CASABLANCA Morocco. As an enthusiastic programmer, I
     am constantly developing new skills in this dynamic and exciting field. With a passion for programming
     science, I am always eager to explore new technologies, programming languages, and trends.
    To continue honing my skills, I take online courses and attend programming workshops and conferences. 
    I also enjoy working on personal projects and contributing to open source projects to gain practical 
    experience and build my portfolio. By staying curious, asking questions, and connecting with other 
    programmers in online communities, I am able to continue growing and advancing in my career.
      <img src="https://tryhackme-badges.s3.amazonaws.com/Ayoubelmo.png" alt="TryHackMe"/>
    </p>
            <Link to="/contact" className="btn">Contact</Link>
        </div>

        <div className="right">
<div className="img-container">
 <div className="img-stack top">
   
    <img className="img"  src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="img"/>
   
 </div>

 <div className="img-stack bottom">
   
   <img className="img"  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="img"/>
  
</div>
</div>
</div>
    </div>
  )
}

export default AboutContent
