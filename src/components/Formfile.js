import "./Form.css";
import React from 'react'
import form from "react-router-dom";

const Formfile = () => {
  return (
    <div className="form">
        <form action="https://expertdevit2023@gmail.com" method="POST">
            <label>Your Name :</label>
            <input type="text"></input>

            <label>Your Email :</label>
            <input type="email"></input>

            <label>Subject :</label>
            <input type="text"></input>

            <label>Message :</label>
            <textarea rows="6" placeholder="Type your message her"/>
            <button className="btn">Submit</button>
         </form>

    </div>
  )
}

export default Formfile