import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">

        <div className="left">
            <h1>Brief About Me </h1>   
    
    <p>
  I am a first-year engineering student specializing in 𝐂𝐲𝐛𝐞𝐫𝐬𝐞𝐜𝐮𝐫𝐢𝐭𝐲 𝐚𝐧𝐝 𝐂𝐥𝐨𝐮𝐝 𝐂𝐨𝐦𝐩𝐮𝐭𝐢𝐧𝐠 at 𝑬𝑵𝑺𝑨𝑴 𝑪𝒂𝒔𝒂𝒃𝒍𝒂𝒏𝒄𝒂. With a deep interest in the intricacies of 𝐜𝐲𝐛𝐞𝐫𝐬𝐞𝐜𝐮𝐫𝐢𝐭𝐲, 𝐜𝐥𝐨𝐮𝐝 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬, 𝐀𝐫𝐭𝐢𝐟𝐢𝐜𝐢𝐚𝐥 𝐈𝐧𝐭𝐞𝐥𝐥𝐢𝐠𝐞𝐧𝐜𝐞, I am driven by a passion for understanding and mastering these dynamic fields. My journey in this realm is fueled by a desire to tackle real-world challenges and contribute to the ever-evolving landscape of technology.

I believe that continuous learning and adaptation are key to success in this fast-paced environment, and I am excited about the opportunities that lie ahead as I embark on this thrilling journey in tech.
     
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
