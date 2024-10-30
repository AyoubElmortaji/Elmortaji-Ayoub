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
                    <p>Casabalca-Settat.</p>
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
                    ------@gmail.com

                    </h4>
                
                </div>
            </div> 

            <div className="right">
                   <h4>About the Company</h4>
                   <p>
                    I am a first-year engineering student specializing in 𝐂𝐲𝐛𝐞𝐫𝐬𝐞𝐜𝐮𝐫𝐢𝐭𝐲 𝐚𝐧𝐝 𝐂𝐥𝐨𝐮𝐝 𝐂𝐨𝐦𝐩𝐮𝐭𝐢𝐧𝐠 at 𝑬𝑵𝑺𝑨𝑴 𝑪𝒂𝒔𝒂𝒃𝒍𝒂𝒏𝒄𝒂. With a deep interest in the intricacies of 𝐜𝐲𝐛𝐞𝐫𝐬𝐞𝐜𝐮𝐫𝐢𝐭𝐲, 𝐜𝐥𝐨𝐮𝐝 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬, 𝐀𝐫𝐭𝐢𝐟𝐢𝐜𝐢𝐚𝐥 𝐈𝐧𝐭𝐞𝐥𝐥𝐢𝐠𝐞𝐧𝐜𝐞, I am driven by a passion for understanding and mastering these dynamic fields. My journey in this realm is fueled by a desire to tackle real-world challenges and contribute to the ever-evolving landscape of technology.

I believe that continuous learning and adaptation are key to success in this fast-paced environment, and I am excited about the opportunities that lie ahead as I embark on this thrilling journey in tech.
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
