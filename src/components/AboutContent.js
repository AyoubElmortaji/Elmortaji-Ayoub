import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">

        <div className="left">
            <h1>Who Am I ?</h1>    
     
    <p>
    Aesoft Morocco is a Moroccan company founded by Ayoub Elmortaji. The company specializes in website and application development, offering technical solutions to meet various business needs. They also sell WordPress platforms, which are widely used for content management and website creation. Aesoft Morocco aims to provide quality services and solutions in the field of web development and technology.
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
